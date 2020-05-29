import React, {useState, useEffect, useContext} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-community/async-storage';

import {NoteContext} from '../hooks/NoteContext';

import Close from '../assets/close.png';

const SingleChecklist = ({text, complete, id, selected}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {listData, setListData} = useContext(NoteContext);

  useEffect(() => {
    complete ? setToggleCheckBox(true) : setToggleCheckBox(false);
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(listData);
        await AsyncStorage.setItem('checks', jsonValue);
      } catch (e) {
        // saving error
        console.log('couldnot save');
      }
    };
    storeData();
  }, [complete, listData]);

  const newData = () => {
    const temp = listData.filter((value, index) => {
      return id !== index;
    });
    setListData(temp);
  };

  const handleUpdate = () => {
    const x = listData[id].complete;
    if (x === true) {
      listData[id] = {
        complete: false,
        text: text,
      };
    } else {
      listData[id] = {
        complete: true,
        text: text,
      };
    }
  };

  return (
    <View style={styles.container}>
      <CheckBox
        disabled={selected === 1 ? false : true}
        value={toggleCheckBox}
        onValueChange={() => {
          toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true);
          handleUpdate();
        }}
      />
      <Text
        style={[
          styles.text,
          toggleCheckBox ? styles.lineThrough : styles.noLine,
        ]}>
        {text}
      </Text>
      {selected === 1 ? (
        <TouchableOpacity style={styles.circle} onPress={newData}>
          <Image source={Close} style={styles.icon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  noLine: {
    textDecorationLine: 'none',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    right: 0,
  },
  icon: {
    width: 8,
    height: 8,
    opacity: 0.7,
  },
});

export default SingleChecklist;
