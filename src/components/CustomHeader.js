import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const CustomHeader = ({Title,isBackButton}) => {
  return (
    <View  style={styles.conainer}>
        <SafeAreaView  style={styles.conainer} />
         <Text style={styles.text}>{Title}</Text>
        <View >
        { isBackButton && (<TouchableOpacity style={styles.Button} onPress={router.back}>
        <Ionicons name="arrow-back-circle-sharp" size={24} color="white" />
         </TouchableOpacity>)
                  }
     
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    conainer:{
        backgroundColor: "#0090B0",
        padding: 15
    },
    
    text:{
        fontSize:22,
        color: "white",
          fontFamily: "SpaceMono",
          textAlign: "center"
    },
    Button:{
          position:"absolute",
          bottom: 0
    }
})

export default CustomHeader