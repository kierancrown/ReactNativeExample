import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {Weather} from '../types/weather';

interface WeatherProps {
  weather: Weather.Currently | undefined;
}

const WeatherSummary = ({weather}: WeatherProps) => {
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

  return (
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
        {weather === undefined ? (
          <Text>Unable to fetch weather</Text>
        ) : (
          <>
            <Text style={styles.temp}>
              {Math.round(weather.temperature || 0)}°
            </Text>
            <Text style={styles.condition}>{weather.summary}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default WeatherSummary;
