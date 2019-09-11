import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentScreen = () => {
    const greeting = "Hi there!";
    const name = "Sun Quan";
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>{greeting} My name is {name}</Text>
        </View>
    
        )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45,
        color: 'orange'
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentScreen;