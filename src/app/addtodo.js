import { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from "react-native"
import CustomHeader from "../components/CustomHeader"
import CustomButton from '../components/CustomButton'
import { useDispatch } from 'react-redux'
import { addtodo } from '../redux/reducers/todoSlice'
import { router } from 'expo-router'

const Addtodo = () => {
    const dispatch= useDispatch();
    const [title,settitle] = useState("");
    const [description,setDescription] = useState("");
    const OnSave = async () =>{
       if(title.trim()== "" || description.trim() == "" ) {
        Alert.alert("Please Enter Something")
        return;
       }   
       dispatch(addtodo({title:title,desc:description})) ;
       router.back();

    };
    return(
        <View style={style.container}>
           <CustomHeader Title={"Add Your Todo"} isBackButton={true}/>

           <TextInput  placeholderTextColor= 'black' placeholder="Enter Your Todo Title" style={[style.input]} value= {title}  onChangeText={ settitle }/>
             <TextInput  placeholderTextColor= 'black' placeholder="Enter Your Todo Description" 
             style={[style.input, style.description]} 
             numberOfLines={4}
            maxLength={120}
             multiline
             value={description}
             onChangeText={setDescription} />

             <CustomButton  text ={"Submit"} OnClick={OnSave} />
             
        </View>
    )
}
const style= StyleSheet.create(
    {
        container: {
    flex: 1,
    backgroundColor:'white'
},
 input:{   color:"black",
           borderWidth: 1,
           padding:10 ,
           fontSize : 20,
           marginHorizontal:10,
           marginVertical:20,
           borderColor:"#ccc",
           borderRadius:10,
        },
        
        description:{
            padding: 10,
         marginTop:5,
         minHeight: 120,
         textAlignVertical:'top'
        }
        }
)
export default Addtodo