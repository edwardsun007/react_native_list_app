import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


const ImageDetail = (props) => {
    console.log(props);
    return(<View>
        <Image source={require('../../assets/beach.jpg')}/>
        <Text>{props.title}</Text>
    </View>)
}

const styles = StyleSheet.create({});

export default ImageDetail;