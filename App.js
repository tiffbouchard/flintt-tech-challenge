import { StatusBar as DevStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, StatusBar} from 'react-native';

import Card from './components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>The Favourite Philosopher</Text>
      <Button 
        title="+ New Philosopher" 
        onPress={() => alert("Button clicked")}
      />
      <Card/>
      <DevStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  },
});
