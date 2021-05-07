import { StatusBar as DevStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, StatusBar, Image, ScrollView, Animated} from 'react-native';

import Card from './components/Card';
import CustomButton from './components/Button';
import philosopherData from './data/philosophers.json';
import Swipe from './components/Swipe';

import { SwipeListView } from 'react-native-swipe-list-view';
import { random } from 'core-js/core/number';

export default function App() {
  const [ philosopherList, setPhilosopherList ] = useState([]);
  const [ initialPhilosopherData, setInitialPhilosopherData ] = useState([]);

  useEffect(() => {
    setInitialPhilosopherData(philosopherData)
  }, []);


  
  const handleTap = () => {
    if (initialPhilosopherData.length > 0) {
      const randomIdx = Math.floor(Math.random() * initialPhilosopherData.length);
      setPhilosopherList([ initialPhilosopherData[randomIdx], ...philosopherList]);
      initialPhilosopherData.splice(randomIdx, 1);
    } else {
      alert("No more philosophers to add!")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        handleTap={handleTap}
        title="+ New Philosopher"
      />
      <ScrollView>
        {philosopherList.length ? philosopherList.map((philosopher) => 
        <Animated.View>
          <Card
            key={philosopher.id}
            name={philosopher.name}
            image={philosopher.image}
          />
        </Animated.View>
        ) :
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Add some philosophers!</Text>
        </View>
        }
      </ScrollView> 
      <DevStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  errorContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 17,
  }
});
