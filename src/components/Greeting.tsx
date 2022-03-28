import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {Text} from 'react-native';
import moment from 'moment';

const Greeting = ({datetime = new Date()}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    wrapper: {
      marginTop: 20,
    },
    text: {
      fontSize: 28,
      fontWeight: '700',
      color: isDarkMode ? '#fff' : '#000',
    },
    date: {
      fontSize: 14,
      color: '#a9a9a9',
    },
  });

  const timeAppropriateGreeting = (): string => {
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

  const getReadableDate = (): string => {
    return moment(datetime).format('ddd, MMMM Do');
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.date}>{getReadableDate()}</Text>
      <Text style={styles.text}>{timeAppropriateGreeting()},</Text>
      <Text style={styles.text}>Kieran</Text>
    </View>
  );
};

export default Greeting;
