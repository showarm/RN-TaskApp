import React, {useContext, useState} from 'react';

import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {NoteContext} from '../hooks/NoteContext';

import FullView from './FullView';

import Close from '../assets/close.png';

const NoteOdd = ({text, deleteTask, setOpen, setId}) => {
  const {data, setData} = useContext(NoteContext);
  const newData = () => {
    const temp = data.filter((value, index) => {
      return deleteTask !== index;
    });
    setData(temp);
  };

  return (
    <>
      <LinearGradient
        colors={
          deleteTask % 2 !== 0 ? ['#E4D195', '#FA918D'] : ['#D2B0FC', '#2AACA0']
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        <Text numberOfLines={3} style={styles.details}>
          {text}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setOpen(true);
            setId(deleteTask);
          }}>
          <Text style={styles.text}>more...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={newData}>
          <Image source={Close} style={styles.icon} />
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 110,
    marginHorizontal: 10,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 25,
    borderRadius: 18,
    marginVertical: 5,
  },
  details: {
    color: 'white',
    fontSize: 17,
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    padding: 5,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 62,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    bottom: 0,
    right: 22,
    marginBottom: 15,
  },
  icon: {
    width: 12,
    height: 12,
    opacity: 0.7,
  },
});

export default NoteOdd;
