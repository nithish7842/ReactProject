import React, { useContext } from "react";
import { styles } from './styles'
import AuthHeader from '../../../components/AuthHeader'
import { Alert, ScrollView, Text } from "react-native";
import Input from "../../../components/Input/Index";
import { useState } from "react";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator/Index";
import GoogleButton from "../../../components/GoogleButton";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { UserContext } from "../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ navigation }) => {

    const {setUser } = useContext(UserContext);
    const onSignup = () => {
        navigation.navigate('SignUp')
    }
    const backPress = () => {
        navigation.goBack()
    }
    const onSignin = () => {
        axios.post('http://10.128.22.52:5004/login', values).then(async (
            res) => {
            if (res.data.status == "ok") {
                console.log("Logged in Success.")
                Alert.alert("Logged in Successefully");
                const token = res?.data
                setUser(token);
                await AsyncStorage.setItem('auth_token', res?.data?.token);
                await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            }
            else {
                console.log('Logged in failed!')
                Alert.alert("Login failed!");
            }
        }
        )
    }
    const [values, setValues] = useState({});
    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }));
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onImagepress={backPress} title='Sign in' />
                <Input value={values} onChangeText={v => onChange('Email', v)} lable={'Email'} placeholder={'example@gmail.com'} />
                <Input value={values} onChangeText={v => onChange('Password', v)} ispassword={true} lable={'Password'} placeholder={'**********'} />

                <Button style={styles.signin} title="Sign in" onpress={onSignin} />
                <Seperator title='Or sign in with' />
                <GoogleButton />
                <Text style={styles.footerText} >
                    Don't have an account?
                    <Text style={styles.signup} onPress={onSignup}>Sign Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signin;