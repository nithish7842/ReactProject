import React, { ReactNode }  from "react";
import { Image, Pressable, Text, View } from "react-native";
import {styles} from './styles'
import Button from "../../../components/Button";

const Screen = ()=>
{
    return[
        <View style={styles.container}>
        <Image resizeMode='contain' source={require('../../../assets/splash_image.png')}/>,
        <View style={styles.textarea}>
        <Text style={styles.title}>You'll Find</Text>,
        <Text style={styles.description}> All you need</Text>,
        <Text style={styles.title}>Here!</Text>
        </View>

            <Button title='Sign Up'/>
            <Pressable hitSlop={20}>
                <Text style={styles.signin}>Sign In</Text>
            </Pressable>
            </View>
    ]
}

export default Screen;