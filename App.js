import 'react-native-gesture-handler';
import React, {useState, useMemo, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NoteContext} from './src/hooks/NoteContext';

import Home from './src/screens/Home';
import Notes from './src/screens/Notes';
import CheckList from './src/screens/CheckList';

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState([]);
  const [listData, setListData] = useState([]);
  const providerValue = useMemo(
    () => ({
      data,
      setData,
      listData,
      setListData,
    }),
    [data, setData, listData, setListData],
  );

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('tasks');
        return jsonValue != null ? setData(JSON.parse(jsonValue)) : null;
      } catch (e) {
        console.log('couldnot retrieve');
        // error reading value
      }
    };
    const getCheckData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('checks');
        return jsonValue != null ? setListData(JSON.parse(jsonValue)) : null;
      } catch (e) {
        console.log('couldnot retrieve');
        // error reading value
      }
    };
    getCheckData();
    getData();
  }, []);

  return (
    <NoteContext.Provider value={providerValue}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CheckList"
            component={CheckList}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NoteContext.Provider>
  );
};

export default App;
