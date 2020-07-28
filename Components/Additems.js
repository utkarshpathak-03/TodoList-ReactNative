import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItems = ({addItem}) => {
  const [Value, setValue] = useState('');
  const TextHandler = Txtvalue => {
    setValue(Txtvalue);
  };
  return (
    <View>
      <TextInput
        placeholder="Add items ..."
        style={Styles.input}
        onChangeText={TextHandler}
      />
      <TouchableOpacity style={Styles.btn} onPress={() => addItem(Value)}>
        <Text style={Styles.btnTxt}>
          <Icon name="plus" size={20} /> Add Items
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 20,
  },
  btn: {
    padding: 9,
    margin: 5,
    backgroundColor: '#c2badf',
  },
  btnTxt: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItems;
