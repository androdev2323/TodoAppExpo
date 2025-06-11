import { View,Text } from "react-native"
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import CustomHeader from "../components/CustomHeader"

const Addtodo = () => {
    return(
        <View>
           <CustomHeader Title={"Add Your Todo"} isBackButton={true}/>
        </View>
    )
}
export default Addtodo