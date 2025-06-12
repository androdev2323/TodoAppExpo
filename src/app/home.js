import { StyleSheet, TouchableOpacity, View } from 'react-native'
import  CustomHeader from "../components/CustomHeader"
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'


const Home = () => {
  const data= useSelector((state) => state.todo.data)
  
  return (
    <View style= {style.container}>
      <CustomHeader  Title="Todo App" isBackButton={true}/>
     <AddButton /> 
    </View>
  )
}
const style = StyleSheet.create(
   {
    container:{
      flex:1,
      backgroundColor:'White'
    } 

  }
)

export default Home