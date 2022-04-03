import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {RootStackParamList} from './RootStackPrams';
import Markdown from 'react-native-markdown-display';
import useArticle from '../hooks/useArticle';

type Props = NativeStackScreenProps<RootStackParamList, 'MarkdownView'>;

const MarkdownViewScreen = ({route, navigation}: Props) => {
  const {data} = useArticle(route.params.url || '');
  const styles = StyleSheet.create({
    scrollView: {
      height: '100%',
    },
  });

  useEffect(() => {
    navigation.setOptions({title: route.params.title || 'View Article'});
  }, [navigation, route]);

  useEffect(() => {
    if (route.params.url) {
      // parse(route.params.url, {contentType: 'markdown'}).then(setContent);
    }
  }, [route.params.url]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Markdown>{data?.content}</Markdown>
    </ScrollView>
  );
};

export default MarkdownViewScreen;
