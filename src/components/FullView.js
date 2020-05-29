import React, {useState, useContext, useEffect} from 'react';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  Modal,
  Dimensions,
} from 'react-native';

import Close from '../assets/close.png';

import {NoteContext} from '../hooks/NoteContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FullView = ({open, setOpen, id}) => {
  const {data} = useContext(NoteContext);
  const [note, setNote] = useState();

  useEffect(() => {
    setNote(data[id]);
  }, [data, id]);

  if (!open || !note) {
    return null;
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          multiline
          style={styles.modalText}
          value={note}
          onChangeText={e => {
            setNote(e);
          }}
        />
      </View>
      <TouchableHighlight
        style={styles.closeButton}
        onPress={() => {
          setOpen(false);
          data[id] = note;
        }}>
        <Image source={Close} style={styles.icon} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 15,
    width: windowWidth - 30,
    height: windowHeight - 230,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    // position: 'absolute',
    // bottom: 28,
    marginHorizontal: 'auto',
  },
  modalText: {
    textAlign: 'left',
  },
  icon: {
    width: 20,
    height: 20,
    opacity: 0.8,
  },
});

export default FullView;
