import React  from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation,title})
{
    const openMenu=()=>{
        navigation.openDrawer();
    }

    return(
        <View  style={styles.header}>
            <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}


const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        left:5,

    },
    headerTitle:{
        flexDirection:'row'
    },
    headerImage:{
        height:26,
        width:26,
        marginHorizontal:10
    }
})