import React, { useState } from "react";
import { Image, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";
const CheckBox =({checked,onCheck}) =>
{
   
    return(        
        <TouchableOpacity activeOpacity={0.6} onPress={()=>onCheck(!checked)} style={styles.container}>
            {checked ?(
                <View style={styles.innerContainer}>
                        <Image style={styles.checkicon} source={require('../../assets/Check.png')}/>    
                </View>
            ):null
        }
        </TouchableOpacity>
    )
}

export default CheckBox;