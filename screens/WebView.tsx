import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { RootStackParamList } from './RootStackPrams';

type Props = NativeStackScreenProps<RootStackParamList, 'WebView'>;

const WebViewScreen = ({ route, navigation }: Props) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigation.setOptions({ title: route.params.title || "View Article" })
  }, [route])

  return (
    <View style={{ flex: 1 }}>
      {route.params.url &&
        <WebView
          source={{ uri: route.params.url }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          style={{ display: loading ? 'none' : 'flex' }}
        />
      }
      {
        loading &&
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      }
    </View>
  );
};

export default WebViewScreen;
