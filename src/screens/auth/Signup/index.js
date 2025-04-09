import React, { useState } from "react";
import { styles } from './styles'
import AuthHeader from '../../../components/AuthHeader'
import { Alert, ScrollView, Text, View } from "react-native";
import Input from "../../../components/Input/Index";
import CheckBox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator/Index";
import GoogleButton from "../../../components/GoogleButton";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";


const Signup = ({ navigation }) => {

    const onBack = () => {
        navigation.goBack();
    }
    const onSignup = () => {
        if (!values?.Name || !values?.Email || !values?.Password || !values?.ConfirmPassword) {
            Alert.alert("All Fiedls are required!");
            return;
        }
        if (values?.Password !== values?.ConfirmPassword) {
            Alert.alert("Password do not Match!");
            return;
        }
        if (!checked) {
            Alert.alert("Accept the terms");
            return;
        }
        const userprofile = {
            Name: values.Name,
            Email: values.Email,
            Password: values.Password,
            ConfirmPassword: values.ConfirmPassword
        }
        axios.post('http://10.128.22.52:5004/register', userprofile)
            .then(response => {
                if (response.data.Status === "Ok") {
                    Alert.alert("Resistration Successful")
                    navigation.navigate('Signin');
                }
                else {
                    Alert.alert(JSON.stringify(response.data));
                }
            }).catch(Error => {
                Alert.alert("Resistration Failed!")
            }
            )
    }

    const onSignin = () => {
        navigation.navigate('Signin');
    }
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});
    const onChange = (key, value) => {
        setValues(v => ({ ...v, [key]: value }));
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onImagepress={onBack} title='Sign Up' />
                <Input value={values} onChangeText={v => onChange('Name', v)} lable={'Name'} placeholder={'John Dow'} />
                <Input value={values} onChangeText={v => onChange('Email', v)} lable={'Email'} placeholder={'example@gmail.com'} />
                <Input value={values} onChangeText={v => onChange('Password', v)} ispassword={true} lable={'Password'} placeholder={'**********'} />
                <Input value={values} onChangeText={v => onChange('ConfirmPassword', v)} ispassword={true} lable={'ConfirmPassword'} placeholder={'**********'} />

                <View style={styles.aggrerow}>
                    <CheckBox checked={checked} onCheck={setChecked} />
                    <Text style={styles.aggreetext}>I agree with </Text><Text style={styles.termText}>Terms & Privacy</Text>
                </View>
                <Button onpress={onSignup} style={styles.signup} title="Sign Up" />
                <Seperator title='Or sign up with' />
                <GoogleButton />
                <Text style={styles.footerText}>
                    Already have an account?
                    <Text style={styles.signin} onPress={onSignin}>Sign In</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup;