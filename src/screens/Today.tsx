import React, {useEffect} from 'react';
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
import ArticleCard from '../components/Article';
import Greeting from '../components/Greeting';
import {Colours} from '../utils/colours';
import useNews from '../hooks/useNews';
import {Text} from 'react-native-svg';

// Used to generate type interface for navigation props
type Props = NativeStackScreenProps<RootStackParamList, 'Today'>;

const TodayScreen = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {status, data, error, isFetching} = useNews('gb');

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

  useEffect(() => {
    if (status === 'error') {
      Alert.alert('Error Refreshing News', error.message, [], {
        cancelable: true,
      });
    }
  }, [error, status]);

  useEffect(() => {
    const updateNavbarTitle = (title: string) => {
      navigation.setOptions({title});
    };
    updateNavbarTitle(
      status === 'loading' || isFetching ? 'Refreshing Articles' : 'Today',
    );
  }, [status, isFetching, navigation]);

  return (
    <View style={styles.background}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {status === 'loading' ? (
        <View style={styles.loadView}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{...styles.background, ...styles.scrollView}}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={() =>
                console.log('Figure out how to dynamically update')
              }
            />
          }>
          <Greeting />
          <WeatherSummary />
          {data === undefined ? (
            <Text>Unable to load news</Text>
          ) : (
            data.articles.map(article => (
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
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default TodayScreen;
