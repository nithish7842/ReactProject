import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Headers from "../../../../components/Headers";
import ListItems from "../../../../components/ListItems/Index";
import { styles } from "./Styles";
import Button from "../../../../components/Button";
import { useContext, useEffect } from "react";
import { ProfileContext, UserContext } from "../../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData } from "../../../../Utility/BackendCalls";

const Profile = ({ navigation }) => {
    const {setUser } = useContext(UserContext);
    const { userData, setUserData } = useContext(ProfileContext);
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('auth_token')
            const data = await getData(token)
            if (data.status === 'ok') {
                setUserData(data.data);
            }
        })()
    }, [])
    const onSettingPress = () => {
        navigation.navigate('Settings');
    }
    const addNewListing = () => {
        navigation.navigate('ListingPage');
    }
    const onMylistingPress = () => {
        navigation.navigate('MyListing');
    }
    const onSignOutPress = async () => {
        const token = await AsyncStorage.setItem('auth_token', '');
        setUser(token)
       await AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Headers title='Profile' showlogout={true} onLagout={onSignOutPress} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.username}>{userData?.Name}</Text>
                    <Text style={styles.email}>{userData?.Email}</Text>
                    <ListItems onPress={onMylistingPress} title={'My listings'} subtitle={'Already have 10 orders'} />
                    <ListItems onPress={onSettingPress} title={'Settings'} subtitle={'Account,FAQ,Contact'} />
                </View>
                <Button onpress={addNewListing} style={{ flex: 0 }} title='Add a new listing' />
            </View>
        </SafeAreaView>
    )
}

export default Profile;