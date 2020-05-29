import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const GradCounter = ({count}) => {
  return (
    <>
      <View style={styles.outerCircle}>
        <View style={styles.midCircle}>
          <LinearGradient
            colors={['#B471DA', '#D390AF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.linearGrad}>
            <Text style={styles.text}>{count}</Text>
          </LinearGradient>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midCircle: {
    backgroundColor: 'rgba(208,140,177, 0.28)',
    width: 55,
    height: 55,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGrad: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default GradCounter;
