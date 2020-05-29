import React, {useContext, useEffect, useState} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NoteContext} from '../hooks/NoteContext';

import Header from '../components/Header';
import Button from '../components/BackButton';
import TextBox from '../components/GradTextBox';
import Odd from '../components/NoteOdd';
import FloatAction from '../components/FloatAction';
import FullView from '../components/FullView';

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('checks');
  } catch (e) {
    // remove error
  }

  console.log('Done.');
};

const Notes = () => {
  const {data} = useContext(NoteContext);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  return (
    <View style={styles.container}>
      <Button />
      <Header title="Quick Note" count={data.length} />
      {data.length === 0 ? (
        <TextBox />
      ) : (
        <FlatList
          data={data}
          renderItem={item => (
            <Odd
              text={item.item}
              deleteTask={item.index}
              setOpen={setOpen}
              setId={setId}
            />
          )}
          keyExtractor={item => item}
        />
      )}
      <FloatAction />
      <FullView open={open} setOpen={setOpen} id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#512970',
  },
});

export default Notes;
