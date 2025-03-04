import React  from "react";
import {styles} from './styles'
import AuthHeader from '../../../components/AuthHeader'
import {ScrollView, Text, View} from "react-native";
import Input from "../../../components/Input/Index";
import { useState } from "react";
import CheckBox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator/Index";
import GoogleButton from "../../../components/GoogleButton";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = ({navigation})=>
{
    const onBack =()=>{
       navigation.goBack()
    }
    const onSignup =()=>{
       
    }
    const onSignin =()=>{
        navigation.navigate('Signin')
    }
     const [checked, setChecked]= useState(false);
    return(
        <SafeAreaView>
        <ScrollView style={styles.container}>
            <AuthHeader onImagepress={onBack} title='Sign Up'/>
            <Input lable={'Name'} placeholder={'John Dow'}/>  
            <Input lable={'Email'} placeholder={'example@gmail.com'}/>
            <Input ispassword={true} lable={'Password'} placeholder={'**********'}/>
            <View style={styles.aggrerow}>
                <CheckBox checked={checked} onCheck={setChecked}/>
                <Text style={styles.aggreetext}>I agree with </Text><Text style={styles.termText}>Terms & Privacy</Text>
            </View>
            <Button onPress={onSignup} style={styles.signup} title="Sign Up"/>
            <Seperator title='Or sign up with'/>
            <GoogleButton/>
            <Text style={styles.footerText}>
            Already have an account? 
                <Text style={styles.signin} onPress={onSignin}>Sign In</Text>
            </Text>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Signup;