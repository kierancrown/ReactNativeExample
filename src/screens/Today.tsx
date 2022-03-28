import React, {useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {getTopHeadlines} from '../api/news';
import {Colours} from '../colours';
import ArticleCard from '../components/Article';
import {News} from '../types/news';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackPrams';

type Props = NativeStackScreenProps<RootStackParamList, 'Today'>;

const TodayScreen = ({navigation}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [articles, setArticles] = useState<News.Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colours.dark.background
      : Colours.light.background,
  };

  const refreshArticles = async () => {
    try {
      setLoading(true);
      setArticles((await getTopHeadlines('gb')) || []);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refreshArticles();
  }, [setArticles, setLoading, setRefreshing]);

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{...backgroundStyle, ...styles.scrollView}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshArticles} />
        }>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          articles.map(article => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WebView', {
                  url: article.url,
                  title: article.title,
                })
              }
              key={article.url}>
              <ArticleCard {...article} />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
  },
});

export default TodayScreen;
