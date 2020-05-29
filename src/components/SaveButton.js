import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SaveButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={['#C9B0F7', '#2AACA0']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <Text style={styles.title}>SAVE</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    marginHorizontal: 120,
  },
  linearGradient: {
    width: 130,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
});

export default SaveButton;
