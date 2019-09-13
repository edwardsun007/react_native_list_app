import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
// {navigation} = props.navigation
const HomeScreen = ({navigation}) => {
  console.log(navigation);
  return(
    <View>
        <Text style={styles.text}>Hello ReactNative</Text>
        <Button 
        title="Go to Component Demo"
        onPress={()=>{ navigation.navigate('Components') }}  
        />
        <Button 
          title="Go to List Demo"
          onPress={()=>{
          navigation.navigate('ListScreen')
        }} 
        />
        <Button 
          title="Go to Image Demo"
          onPress={()=>{
          navigation.navigate('ImageScreen')
        }} 
        />
    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;