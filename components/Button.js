import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function CustomButton(props) {
  const { title } = props; 

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => alert("pressed")} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    margin: 30,
    height: 70,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  }
});
