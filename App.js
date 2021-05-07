import { StatusBar as DevStatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import CustomButton from './components/Button';
import CardList from './components/CardList';
import seedData from './data/philosophers.json';

export default function App() {
  const [ philosopherList, setPhilosopherList ] = useState([]);
  const [ initialPhilosopherData, setInitialPhilosopherData ] = useState([]);

  useEffect(() => {
    setInitialPhilosopherData(seedData)
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
        <CardList
          data={philosopherList}
          setPhilosopherList={setPhilosopherList}
          setInitialPhilosopherData={setInitialPhilosopherData}
          initialPhilosopherData={initialPhilosopherData}
        />
      <DevStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  },
  header: {
    fontSize: 25,
  },
  button: {
    backgroundColor: 'black',
  },
});
