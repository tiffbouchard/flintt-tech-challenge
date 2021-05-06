import { StatusBar as DevStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, StatusBar, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image/>
      <Text>Philosopher</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  },
});
