import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <LinearGradient
        colors={['#B471DA', '#D390AF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        <Text style={styles.title}>BACK</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 48,
    borderBottomRightRadius: 38,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default BackButton;
