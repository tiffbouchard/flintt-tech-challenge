import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Card from './Card';

const RenderRight = () => {
  return (
    <View style={{marginRight: 40, alignItems: "flex-end", justifyContent: 'center', width: '85%', height: 100}}>
      <Text>🗑️</Text>
    </View>
  )
}

const RenderItem = ({item, deleteItem}) => {
  return (
    <Swipeable 
      useNativeAnimations 
      overshootLeft={false} 
      overshootRight={false} 
      onSwipeableRightOpen={() => deleteItem(item.id)} 
      renderRightActions={RenderRight}>
      <Card
        image={item.image}
        name={item.name}
      />
    </Swipeable>
  )
} 

export default function CardList(props) {
  const { data, setPhilosopherList, setInitialPhilosopherData, initialPhilosopherData } = props;

  const deleteItem = (id) => {
    const temp = data.filter(item => item.id !== id);
    const deletedItem = data.filter(item => item.id === id);
    console.log(temp)
    console.log(deletedItem)
    setPhilosopherList(temp);
    setInitialPhilosopherData([...initialPhilosopherData, deletedItem[0]]);
  }


  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList 
        contentContainerStyle={{flex: 1}} 
        data={data} 
        ListEmptyComponent={() => (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Add some philosophers!</Text>
          </View>
        )}
        renderItem={({item, index}) => <RenderItem item={item} index={index} deleteItem={deleteItem} />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
});