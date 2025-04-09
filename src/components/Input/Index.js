import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Image, Modal, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Input = ({ options, lable, type, placeholder, ispassword, value, Placeholder, onChangeText, style, ...props }) => {
    const [ispasswordVisble, setIsPassworVisible] = useState(false);
    const [isPickereVisible, setIsPickerVisible] = useState(false);
    const oneyePress = () => {
        setIsPassworVisible(!ispasswordVisble);
    }
    const onSelect = (opt) => {
        onChangeText(opt);
        setIsPickerVisible(false);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.lable}>{lable}</Text>
            {type === "picker" ? (
                <Pressable onPress={() => setIsPickerVisible(true)} style={styles.inputContainer}>
                    {value ? (
                        <Text style={[styles.input, style]} >{value?.title}</Text>
                    ) : (
                        <Text style={[styles.placeholder, style]} >{Placeholder}</Text>
                    )}
                    <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
                </Pressable>
            ) : (
                <View style={styles.inputContainer} >
                    <TextInput value={value} onChangeText={onChangeText} secureTextEntry={ispassword && !ispasswordVisble} placeholder={Placeholder} style={[styles.input, style]} {...props} />
                    {ispassword ? (
                        <Pressable onPress={oneyePress}>
                            <Image style={styles.eye} source={ispasswordVisble ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                        </Pressable>
                    ) : null}
                </View>
            )}
            <Modal transparent visible={isPickereVisible}>
                <TouchableOpacity style={styles.modalWarper} activeOpacity={1} onPress={() => setIsPickerVisible(false)} >
                    <TouchableOpacity activeOpacity={1} style={styles.modalcontent}>
                        <Text style={styles.headerText}>Select Options</Text>
                        {options?.map((opt) => {
                            if (!opt?.id) {
                                return null;
                            }

                            const selected = value?.id === opt?.id;
                            return (
                                <Text onPress={() => onSelect(opt)} style={[styles.option, selected ? styles.selectedText : {}]} key={opt?.title}>{opt?.title}</Text>
                            );
                        })}
                    </TouchableOpacity>
                </TouchableOpacity >

            </Modal>
        </View >
    )
}
export default Input;