import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {RootStackParamList} from './RootStackPrams';

type Props = NativeStackScreenProps<RootStackParamList, 'SimpleView'>;

const SimpleViewScreen = ({route, navigation}: Props) => {
  const styles = StyleSheet.create({
    view: {
      flex: 1,
    },
  });

  useEffect(() => {
    navigation.setOptions({title: route.params.title || 'View Article'});
  }, [navigation, route]);

  return (
    <View style={styles.view}>
      <Text>{route.params.content}</Text>
    </View>
  );
};

export default SimpleViewScreen;
