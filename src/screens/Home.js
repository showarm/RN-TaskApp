import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../components/Logo';

import Button from '../components/GradButton';

const Home = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#4C2566', '#220B43']}
      style={styles.linearGradient}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.description}>
          Add quick notes and check lists for maximum productivity.
        </Text>
        <Button
          title="Quick Notes"
          onPress={() => navigation.navigate('Notes')}
        />
        <Button
          title="Check Lists"
          onPress={() => navigation.navigate('CheckList')}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    marginTop: 265,
  },
  logo: {
    position: 'absolute',
    top: -30,
  },
  title: {
    fontFamily: 'Tangerine-Regular',
    fontSize: 60,
    color: 'white',
  },
  description: {
    color: 'rgba(255,255,255,0.3)',
    width: 270,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default Home;
