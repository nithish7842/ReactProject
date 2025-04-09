import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Input from "../Input/Index";
import { useState } from "react";
const Headers = ({ title, onBackPress, onSearch, showSearch, onLagout, showBack, keyWord, showlogout }) => {
    const [showSearchInput, setsearchInput] = useState(false);
    const onSerachClick = () => {
        setsearchInput(s => !s);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress} >
                        <Image style={styles.image} source={require('../../assets/arrow_back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSerachClick} >
                        <Image style={styles.image} source={require('../../assets/Search.png')} />
                    </Pressable>
                ) : <View style={styles.space}></View>}
                <Text style={styles.title}>{title}</Text>
                {showlogout ? (
                    <Pressable hitSlop={20} onPress={onLagout} >
                        <Image style={styles.image} source={require('../../assets/Logout.png')} />
                    </Pressable>
                ) : <View style={styles.space}></View>}

            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} Value={keyWord} placeholder='Enter Your Search...' />
            ) : null}
        </View>
    )
}

export default Headers;