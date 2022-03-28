import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {RootStackParamList} from './RootStackPrams';

type Props = NativeStackScreenProps<RootStackParamList, 'WebView'>;

const WebViewScreen = ({route, navigation}: Props) => {
  const [loading, setLoading] = useState(false);

  const styles = StyleSheet.create({
    view: {
      flex: 1,
    },
    webView: {
      display: loading ? 'none' : 'flex',
    },
    loadView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  useEffect(() => {
    navigation.setOptions({title: route.params.title || 'View Article'});
  }, [navigation, route]);

  return (
    <View style={styles.view}>
      {route.params.url && (
        <WebView
          source={{uri: route.params.url}}
          onLoadStart={() => setLoading(true)}
          onLoad={() => setLoading(false)}
          style={styles.webView}
        />
      )}
      {loading && (
        <View style={styles.loadView}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default WebViewScreen;
