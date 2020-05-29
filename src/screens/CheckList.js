import React, {useState, useContext} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Button from '../components/BackButton';
import Header from '../components/Header';
import TabView from '../components/TabView';

import {NoteContext} from '../hooks/NoteContext';

const CheckList = () => {
  const [item, setItem] = useState('');
  const {listData, setListData} = useContext(NoteContext);

  return (
    <View style={styles.container}>
      <Button />
      <Header title="Check Lists" count={listData.length} />
      <View style={styles.box}>
        <TextInput
          placeholder="Add item ..."
          placeholderTextColor="rgba(255,255,255,0.4)"
          value={item}
          onChangeText={e => setItem(e)}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setListData([
              ...listData,
              {
                complete: false,
                text: item,
              },
            ]);
            setItem('');
          }}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TabView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#512970',
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 17,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginHorizontal: 30,
  },
  Button: {
    marginRight: 0,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default CheckList;
