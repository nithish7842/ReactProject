import {Text, ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Profile = ()=>{
    return(
        <SafeAreaView>
            <ScrollView >
                <View>
                    <Text>
                        Prfile
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;