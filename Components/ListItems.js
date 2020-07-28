import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const ListItems = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={Styles.listItem}>
      <View style={Styles.listItemView}>
        <Text style={Styles.listItemText}> {item.text}</Text>
        {console.log(item.id)}
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => {
            deleteItem(item.id);
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#fdf',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItems;
