import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity ,Modal ,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {globalstyles} from '../styles/globalstyles'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({navigation}) {
const [modalopen,setModal]=useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

const addReview=(review)=>{
  review.key=(reviews.length+1).toString();
  setReviews((currentReview)=>{
    return [review,...currentReview]
  });
  setModal(false);
}

  return (
    <View style={globalstyles.container}>
      <Modal visible={modalopen} animationType='slide'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
          <MaterialIcons name='close' style={{...styles.modalToggle,...styles.modalClose}}  size={24} onPress={()=>setModal(false)}/>
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons name='add' style={styles.modalToggle} size={24} onPress={()=>setModal(true)}/>
        <FlatList
          data={reviews}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Details',item)}>
              <Card>
                <Text style={globalstyles.TextTitle}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}/>
    </View>
  );
}

const styles=StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#bbb',
    padding:10,
    borderRadius:30,
    alignSelf:'center',
    textAlign:'center'

  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  },
  modalContent:{
    flex:1
  }
})



