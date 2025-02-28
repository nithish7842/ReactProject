import React, { useState } from "react";
import {Text, View} from "react-native";
import { styles } from "./styles";

const Seperator = ({title})=>{
    
    return(
        <View style={styles.container}>
            <View style={styles.line}/>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.line}/>

        </View>
    )
}
export default Seperator;