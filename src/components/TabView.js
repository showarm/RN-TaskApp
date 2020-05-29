import React, {useState, useContext} from 'react';

import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';

import {NoteContext} from '../hooks/NoteContext';

import List from './SingleChecklist';

const TabView = () => {
  const [selected, setSelect] = useState(1);
  const {listData} = useContext(NoteContext);
  //   if (value.length !== 0) {
  //     console.log(value);
  //   }
  const filterComplete = listData.filter(value => {
    return value.complete === true;
  });
  const filterRemaining = listData.filter(value => {
    return value.complete === false;
  });

  const selectData = () => {
    if (selected === 2) {
      return (
        <FlatList
          data={filterComplete}
          renderItem={item => (
            <List
              text={item.item.text}
              complete={item.item.complete}
              id={item.index}
            />
          )}
          keyExtractor={item => item.text}
        />
      );
    } else if (selected === 3) {
      return (
        <FlatList
          data={filterRemaining}
          renderItem={item => (
            <List
              text={item.item.text}
              complete={item.item.complete}
              id={item.index}
            />
          )}
          keyExtractor={item => item.text}
        />
      );
    } else {
      return (
        <FlatList
          data={listData}
          renderItem={item => (
            <List
              text={item.item.text}
              complete={item.item.complete}
              id={item.index}
              selected={selected}
            />
          )}
          keyExtractor={item => item.text}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.button} onPress={() => setSelect(1)}>
          <Text
            style={[
              styles.buttonText,
              selected === 1 ? styles.underline : styles.noDecoration,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelect(2)}>
          <Text
            style={[
              styles.buttonText,
              selected === 2 ? styles.underline : styles.noDecoration,
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setSelect(3)}>
          <Text
            style={[
              styles.buttonText,
              selected === 3 ? styles.underline : styles.noDecoration,
            ]}>
            Remaining
          </Text>
        </TouchableOpacity>
      </View>
      {listData.length === 0 ? null : (
        <View style={styles.list}>{selectData()}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    // alignItems: 'center',
    margin: 27,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 5,
  },
  button: {
    flex: 1,
    marginVertical: 10,
    // backgroundColor: 'grey',
    // borderBottomWidth: 1,
    // borderBottomColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  underline: {
    textDecorationLine: 'underline',
    color: 'white',
  },
  noDecoration: {
    textDecorationLine: 'none',
    color: 'rgba(255,255,255,0.5)',
  },
  list: {
    flex: 1,
    marginHorizontal: 28,
  },
});
export default TabView;
