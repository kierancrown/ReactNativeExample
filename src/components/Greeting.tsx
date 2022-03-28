import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Text} from 'react-native';

const Greeting = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const timeAppropriateGreeting = (datetime = new Date()): string => {
    var today = datetime;
    var curHr = today.getHours();

    if (curHr < 12) {
      return 'Good morning';
    } else if (curHr < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  const styles = StyleSheet.create({
    text: {
      marginTop: 20,
      fontSize: 36,
      fontWeight: 'bold',
      color: isDarkMode ? '#fff' : '#000',
    },
  });

  return <Text style={styles.text}>{timeAppropriateGreeting()},</Text>;
};

export default Greeting;
