import React  from "react";
import {styles} from './styles'
import AuthHeader from '../../../components/AuthHeader'
import {ScrollView, Text, View} from "react-native";
import Input from "../../../components/Input/Index";
import Check from "../../../components/CheckBox";
import { useState } from "react";
import CheckBox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator/Index";
import GoogleButton from "../../../components/GoogleButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({navigation})=>
{
    const onSignup =()=>{
        navigation.navigate('SignUp')
    }
    const backPress = ()=>{
        navigation.goBack()
    }
     const [checked, setChecked]= useState(false);
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <AuthHeader onImagepress={backPress} title='Sign in'/> 
            <Input lable={'Email'} placeholder={'example@gmail.com'}/>
            <Input ispassword={true} lable={'Password'} placeholder={'**********'}/>
            
            <Button style={styles.signin} title="Sign in"/>
            <Seperator title='Or sign in with'/>
            <GoogleButton/>
            <Text style={styles.footerText} >
                 Don't have an account? 
                <Text style={styles.signup} onPress={onSignup}>Sign Up </Text>
            </Text>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Signin;