import { SafeAreaView } from "react-native-safe-area-context";
import ListItems from "../../../../components/ListItems/Index"
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from './Styles'
import Headers from "../../../../components/Headers";
import EditableBoxes from "../../../../components/EditableBoxes/Index";
import { useContext, useState } from "react";
import Button from "../../../../components/Button";
import { ProfileContext } from "../../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {updateData} from "../../../../Utility/BackendCalls";

const Settings = ({ navigation }) => {
    const { userData, setUserData } = useContext(ProfileContext);
    const [editing, setEditing] = useState(false);
    const [values, setvalues] = useState({ name: userData?.Name, email: userData?.Email })
    const onEditingPress = () => {
        setEditing(true);
    }

    const onSave = async () => {
        const token = await AsyncStorage.getItem('auth_token')
        const updatedData = await updateData(token, values);
        if (updatedData.status === 'ok') {
            Alert.alert('Data Updated Successfully');
            setEditing(false);
            setUserData(updatedData.data);
        }
    }
    const onChange = (key, value) => {
        setvalues(v => ({ ...v, [key]: value }))
    }
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView>
            <Headers showBack={true} onBackPress={goBack} title='Settings' />
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.sectiontitle}>Personel Information</Text>
                    <Pressable onPress={onEditingPress}>
                        <Image style={styles.icon} source={require('../../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <EditableBoxes label={'Name'} onChangeText={v => onChange('name', v)} Value={values.name} editable={editing} />
                <EditableBoxes label={'Email'} onChangeText={v => onChange('email', v)} Value={values.email} editable={editing} />
                {editing ? (
                    <Button style={styles.button} title="Save" onpress={onSave} />
                ) : null}
                <Text style={[styles.sectiontitle, ({ marginTop: 40 })]}>Help Center</Text>
                <ListItems title={'FAQ'} />
                <ListItems title={'Contact Us'} />
                <ListItems title={'Privacy & Terms'} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default Settings;