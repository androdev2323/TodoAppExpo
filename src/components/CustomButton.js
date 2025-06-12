import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({text,OnClick}) => {
  return (
    <View>
   <TouchableOpacity onPress={OnClick}
         style={style.container}>
          <Text style={style.text}>{text} </Text>
   </TouchableOpacity>
     
      
    </View>
  )
}
const style= StyleSheet.create(
    {
       container:{
        margin:4,
        alignItems:'center',
        justifyContent:'center',
       borderRadius:230,
        backgroundColor:"#0090B0"
       },
       text:{
           color:'white',
           fontSize:15,
           fontWeight:'bold',
           padding:10

       }     
    }
)

export default CustomButton