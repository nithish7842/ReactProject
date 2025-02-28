import React, { useState } from "react";
import { TextInput, View ,Text, Pressable, Image} from "react-native";
import { styles } from "./styles";

const Input = ({lable,placeholder,ispassword})=>{
    const [ispasswordVisble, setIsPassworVisible] = useState(false);
    const oneyePress = () => {
        setIsPassworVisible(!ispasswordVisble);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.lable}>{lable}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={ispassword && !ispasswordVisble} placeholder={placeholder} style={styles.input}/>    
              {ispassword ? (
                <Pressable onPress={oneyePress}>
                    <Image style={styles.eye} source={ispasswordVisble ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')}/>
                    </Pressable>  
              ): null }          
            </View>
        </View>
    )
}
export default Input;