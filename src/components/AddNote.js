import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
import SaveButton from './SaveButton';
import {NoteContext} from '../hooks/NoteContext';

import AsyncStorage from '@react-native-community/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddNote = ({modalVisible, setModal}) => {
  const [note, setNote] = useState('');
  const {data, setData} = useContext(NoteContext);

  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('tasks', jsonValue);
      } catch (e) {
        // saving error
        console.log('couldnot save');
      }
    };
    storeData();
  }, [data]);

  function handleSave() {
    if (note) {
      setData([...data, note]);
      setModal(false);
    } else {
      setModal(false);
    }
  }
  // console.log(data);
  if (!modalVisible) {
    return null;
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.line}>
          <Text style={styles.title}>New Note</Text>
        </View>
        <TextInput
          editable
          multiline
          numberOfLines={18}
          textAlignVertical="top"
          placeholder="Type here ..."
          value={note}
          onChangeText={e => setNote(e)}
        />
        <SaveButton onPress={() => handleSave()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  modalView: {
    width: windowWidth,
    height: windowHeight - 130,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 30,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#B976D2',
    paddingBottom: 13,
  },
  title: {
    color: '#DFB7FE',
    fontSize: 23,
  },
});

export default AddNote;
