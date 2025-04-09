import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";
import Input from "../Input/Index";

const EditableBoxes = ({ label, Value, onChangeText, editable, style }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.lable}>{label}</Text>
            <TextInput editable={editable} value={Value} onChangeText={onChangeText} style={styles.Input} />
        </View>
    )
}
export default EditableBoxes;