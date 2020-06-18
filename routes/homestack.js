import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Home from '../screens/Home';
import Details from '../screens/details';
import Header from '../shared/header';


const screens={
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='GameZone'/>
            }
        }
    },
    Details:{
        screen:Details,
        navigationOptions:{
            title:'Review Details'
        }
    }
}

const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{
            backgroundColor:'#eee',height:90
        }
    }
});

export default HomeStack;