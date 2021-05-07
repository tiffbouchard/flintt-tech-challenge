import { StatusBar as DevStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, StatusBar, Image, ScrollView} from 'react-native';

import Card from './components/Card';
import CustomButton from './components/Button';

import philosophers from './data/philosophers.json';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
     <CustomButton title="+ New Philosopher"/>
      <ScrollView>
        {philosophers.map((philosopher) => 
          <Card
            key={philosopher.id}
            name={philosopher.name}
            image={philosopher.image}
          />
        )}
      </ScrollView> 
      <DevStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
    paddingBottom: 300,
  },
  header: {
    fontSize: 25,
  },
  button: {
    backgroundColor: 'black',
    color: 'black',
  }
});
