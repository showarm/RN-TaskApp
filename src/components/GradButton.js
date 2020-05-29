import React from 'react';

import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Arrow from '../assets/right.png';

const GradButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={['#FD8D8C', '#E0CC97']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <Text style={styles.title}>{title}</Text>
        <Image source={Arrow} style={styles.icon} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    width: 300,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    marginVertical: 18,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },
  icon: {
    height: 20,
    width: 25,
    opacity: 0.6,
  },
});

export default GradButton;
