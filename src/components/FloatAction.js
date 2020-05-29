import React, {useState} from 'react';

import {Image, TouchableOpacity, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import AddNote from './AddNote';

import Plus from '../assets/plus.png';

const FloatAction = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <LinearGradient
          colors={['#B471DA', '#D390AF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.linearGrad}>
          <Image source={Plus} style={styles.icon} />
        </LinearGradient>
      </TouchableOpacity>
      <AddNote modalVisible={modalVisible} setModal={setModalVisible} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    right: 25,
  },
  linearGrad: {
    width: 62,
    height: 62,
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default FloatAction;
