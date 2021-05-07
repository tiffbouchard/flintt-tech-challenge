import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function Card(props) {

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.9} onLongPress={() => {alert("press")}}>
      <View style={styles.container}>
        <Image 
          source={{ uri: props.image }}
          style={styles.image}  
        />
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    height: 100,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
    margin: 10,
  },
  text: {
    fontSize: 17,
  }
});
