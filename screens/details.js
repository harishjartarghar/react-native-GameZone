import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {globalstyles,images} from '../styles/globalstyles'
import { NavigationActions } from 'react-navigation';
import Card from '../shared/card'

export default function Details({navigation}) {
const rating=navigation.getParam('rating');
  
  return (
    <View style={globalstyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}> 
            <Text>GameZone Rating:</Text>
            <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  );
}

const styles=StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee'
  }
});

