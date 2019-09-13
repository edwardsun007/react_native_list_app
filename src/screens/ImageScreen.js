import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

// react native props parent to child
const ImageScreen = () => {
    return(<View>
        <ImageDetail title="Forest"/>
        <ImageDetail title="ShawnShank"/>
        <ImageDetail title="BeachBody"/>
        <ImageDetail title="BubbleButt"/>
    </View>)
};

const styles = StyleSheet.create({});

export default ImageScreen;