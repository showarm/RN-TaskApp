import React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Counter from './GradCounter';

const Header = ({title, count}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Counter count={count} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    color: '#DFB7FE',
    opacity: 0.7,
    fontSize: 23,
    fontFamily: 'sans-serif-medium',
  },
});

export default Header;
