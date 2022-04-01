import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import useWeather from '../hooks/useWeather';

const WeatherSummary = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {status, data, error, isFetching} = useWeather(51.899387, -2.078253);

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

  return status === 'loading' ? (
    <View>
      <Text>Loading weather...</Text>
    </View>
  ) : (
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
        {isFetching && <Text>Fetching data in background</Text>}
        {data === undefined ? (
          <Text>Unable to fetch weather {error?.message}</Text>
        ) : (
          <>
            <Text style={styles.temp}>
              {Math.round(data.currently.temperature || 0)}°
            </Text>
            <Text style={styles.condition}>{data.currently.summary}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default WeatherSummary;
