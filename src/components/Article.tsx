import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {News} from '../types/news';
import moment from 'moment';

const ArticleCard = ({
  urlToImage,
  source,
  title,
  publishedAt,
}: News.Article) => {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    card: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    media: {
      flex: 4,
      width: '100%',
      height: undefined,
      aspectRatio: 1.5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    metadata: {
      justifyContent: 'center',
      flexDirection: 'row',
      opacity: 0.75,
      width: '100%',
    },
    textWrapper: {
      marginTop: 5,
      paddingHorizontal: 8,
      paddingVertical: 4,
      flex: 1,
      marginRight: 'auto',
    },
    sourceName: {
      color: isDarkMode ? '#fff' : '#999',
      fontWeight: '600',
      fontSize: 10,
      marginVertical: 5,
    },
    timeAgo: {
      color: isDarkMode ? '#fff' : '#999',
      fontWeight: '600',
      fontSize: 10,
      marginVertical: 5,
      marginLeft: 'auto',
    },
    title: {
      color: isDarkMode ? '#fff' : '#000',
      fontWeight: '600',
      fontSize: 18,
      marginVertical: 5,
    },
  });

  return (
    <View style={styles.card}>
      <Image
        fadeDuration={250}
        source={
          urlToImage == null
            ? require('../assets/placeholder.png')
            : {uri: urlToImage}
        }
        defaultSource={require('../assets/placeholder.png')}
        resizeMode="cover"
        style={styles.media}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metadata}>
          <Text style={styles.sourceName}>{source.name.toUpperCase()}</Text>
          <Text style={styles.timeAgo}>
            {moment(publishedAt).fromNow().toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;
