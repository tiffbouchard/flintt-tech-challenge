import React from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Card from './Card';

const RenderRightAction = () => {
  return (
    <View style={styles.renderRight}>
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
      renderRightActions={RenderRightAction}>
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
    setPhilosopherList(temp);
    setInitialPhilosopherData([...initialPhilosopherData, deletedItem[0]]);
  }


  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList 
        data={data} 
        ListEmptyComponent={() => (
          <View style={styles.emptyComponent}>
            <Image source={require('../assets/empty-img.png')} style={styles.image}/>
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
  renderRight: {
    marginRight: 40,
    alignItems: "flex-end",
    justifyContent: 'center',
    width: '85%',
    height: 100
  },
  emptyComponent: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 200
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30
  }

});