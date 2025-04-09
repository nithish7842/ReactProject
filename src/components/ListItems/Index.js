import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Image } from "react-native";
import { styles } from "./styles";

const ListItems = ({ title, subtitle, onPress }) => {

    return (

        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {!!subtitle ? (
                    <Text style={styles.subtitle}>{subtitle}</Text>
                ) : null}
            </View>
            <Image style={styles.imageIcon} source={require('../../assets/arrow.png')} />
        </Pressable>

    )
}
export default ListItems;