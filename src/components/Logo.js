import React from 'react';

import {View, Image, StyleSheet, ImageBackground} from 'react-native';

import Blur from '../assets/backblur.png';
import LogoBase from '../assets/logobase.png';

const Logo = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Blur} style={styles.background}>
        <Image source={LogoBase} style={styles.logo} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  background: {
    width: 380,
    height: 380,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
  },
});

export default Logo;
