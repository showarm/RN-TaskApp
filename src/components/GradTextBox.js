import React from 'react';

import {Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const GradTextBox = () => {
  return (
    <LinearGradient
      colors={['#D2B0FC', '#2AACA0']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <Text style={styles.details}>Empty notes</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 25,
    borderRadius: 18,
  },
  details: {
    color: 'white',
    fontSize: 17,
  },
});

export default GradTextBox;
