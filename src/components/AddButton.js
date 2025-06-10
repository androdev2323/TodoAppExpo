import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';

const AddButton = () => {
  return (
    
      <TouchableOpacity style={style.button} onPress={ () => router.navigate("/addtodo")}>
  <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    
  )
}
const style=StyleSheet.create({
 button:{
          position:"absolute",
          bottom:65,
          right:18,
          backgroundColor:"#0090B0",
          padding:20,
          borderRadius:100,
          elevation:10,
          justifyContent:'center',
          alignItems:'center',
          shadowColor: '#000',
          shadowOffset:{width:1, height:1},
          shadowRadius:2,
          shadowOpacity:0.7
 }
}
);
  

export default AddButton