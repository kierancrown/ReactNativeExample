import React, {useContext} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {APIContext} from '../context/api';

const WeatherSummary = () => {
  const {weatherData, isLoading} = useContext(APIContext);
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: 16,
      marginTop: 21,
    },
    textContainer: {
      paddingLeft: 8,
    },
    temp: {
      fontSize: 32,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
    },
    condition: {
      fontSize: 16,
      fontWeight: '500',
      color: isDarkMode ? '#fff' : '#000',
    },
  });

  return isLoading ? null : (
    <View style={styles.container}>
      {/* Placeholder icon */}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: undefined,
          height: 60,
          aspectRatio: 1,
          borderRadius: 30,
          backgroundColor: isDarkMode ? 'white' : 'black',
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.temp}>
          {Math.round(weatherData?.currently.temperature || 0)}°
        </Text>
        <Text style={styles.condition}>{weatherData?.currently.summary}</Text>
      </View>
    </View>
  );
};

export default WeatherSummary;
