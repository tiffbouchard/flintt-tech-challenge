import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Card from './Card';

const RenderRight = () => {
  return (
    <View style={{marginRight: 35, alignItems: "center", justifyContent: 'center'}}>
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
  const { data, setPhilosopherList } = props;

  const deleteItem = (id) => {
    const temp = data.filter(item => item.id !== id);
    setPhilosopherList(temp);
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