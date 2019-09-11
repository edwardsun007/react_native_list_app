import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    // key has to be string and unique
    const friends = [
        { name: 'Friend #1', age: 20},
        { name: 'Friend #2', age: 20},
        { name: 'Friend #3', age: 20},
        { name: 'Friend #4', age: 20},
        { name: 'Friend #5', age: 20},
        { name: 'Friend #6', age: 20},
        { name: 'Friend #7', age: 20},
        { name: 'Friend #8', age: 20},
        { name: 'Friend #9', age: 20},
        { name: 'Friend #10', age: 20},
        { name: 'Friend #11', age: 20}
    ];

    // two required props:     // data prop
    return (
        <FlatList
        showsVerticalScrollIndicator={true}
        keyExtractor={friend=>friend.name}
        data={friends} 
        renderItem={({ item })=>{ // deconstructing property called term directly from the argument
            return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
        }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 20
    }
});

export default ListScreen;
