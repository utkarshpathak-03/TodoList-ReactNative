import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Headers from './Components/Headers';
import ListItems from './Components/ListItems';
import Additems from './Components/Additems';

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.ceil(Math.random() * 100000 + Math.random() * 1000),
      text: 'Paneer',
    },
    {
      id: Math.ceil(Math.random() * 100000 + Math.random() * 1000),
      text: 'Milk',
    },
    {
      id: Math.ceil(Math.random() * 100000 + Math.random() * 1000),
      text: 'Curd',
    },
    {
      id: Math.ceil(Math.random() * 100000 + Math.random() * 1000),
      text: 'Cheese',
    },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = Value => {
    if (!Value) {
      console.log('Error');
      Alert.alert('Error', 'Please enter an item', [
        {
          text: 'OK',
          onPress: () => console.log('Cancel Pressed'),
        },
      ]);
    } else {
      setItems(prevItems => {
        return [
          {
            id: Math.ceil(Math.random() * 100000 + Math.random() * 1000),
            text: Value,
          },
          ...prevItems,
        ];
      });
    }
  };
  return (
    <View style={Styles.container}>
      <Headers title="Shopping List" />

      <Additems addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItems item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default App;
