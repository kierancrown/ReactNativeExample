import React, {useCallback, useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert,
} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import WeatherSummary from '../components/WeatherSummary';
import {RootStackParamList} from './RootStackPrams';
import {APIContext, ACTIONS} from '../context/api';
import ArticleCard from '../components/Article';
import Greeting from '../components/Greeting';
import {getTopHeadlines} from '../api/news';
import {Colours} from '../utils/colours';

// Used to generate type interface for navigation props
type Props = NativeStackScreenProps<RootStackParamList, 'Today'>;

const TodayScreen = ({navigation}: Props) => {
  const {dispatch, isLoading, newsData} = useContext(APIContext);
  const isDarkMode = useColorScheme() === 'dark';
  const [refreshing, setRefreshing] = React.useState(false);

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: isDarkMode
        ? Colours.dark.background
        : Colours.light.background,
    },
    scrollView: {
      paddingHorizontal: 20,
    },
    loadView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const showError = (err: string) =>
    Alert.alert('Error Refreshing News', err, [], {
      cancelable: true,
    });

  const refreshArticles = useCallback(async () => {
    try {
      if (dispatch) {
        dispatch({type: ACTIONS.SET_LOADING, value: true});
        dispatch({
          type: ACTIONS.SET_NEWS_DATA,
          value: (await getTopHeadlines('gb')) || [],
        });
        dispatch({type: ACTIONS.SET_LOADING, value: false});
      }
      setRefreshing(false);
    } catch (error) {
      console.log(error);
      showError((error as string) || 'Unknown error');
    }
  }, [dispatch]);

  useEffect(() => {
    refreshArticles();
  }, [refreshArticles, setRefreshing]);

  useEffect(() => {
    const updateNavbarTitle = (title: string) => {
      navigation.setOptions({title});
    };
    updateNavbarTitle(
      refreshing === true || isLoading === true
        ? 'Refreshing Articles'
        : 'Today',
    );
  }, [refreshing, isLoading, navigation]);

  return (
    <View style={styles.background}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoading && refreshing === false ? (
        <View style={styles.loadView}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{...styles.background, ...styles.scrollView}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshArticles}
            />
          }>
          <Greeting />
          <WeatherSummary />
          {newsData?.map(article => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SimpleView', {
                  content: article.content,
                  title: article.title,
                })
              }
              key={article.url}>
              <ArticleCard {...article} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TodayScreen;
