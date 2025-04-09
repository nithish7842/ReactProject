
import { Image, Pressable, Text, View } from "react-native";
import { styles } from './styles'
import Button from "../../../components/Button";

const Screen = ({ navigation }) => {
    const onsignup = () => {
        navigation.navigate('SignUp')
    }
    const onsignin = () => {
        navigation.navigate('Signin')
    }
    return [
        <View style={styles.container}>
            <Image resizeMode='contain' source={require('../../../assets/splash_image.png')} />,
            <View style={styles.textarea}>
                <Text style={styles.title}>You Only</Text>,
                <Text style={styles.description}> Live Once</Text>,
                <Text style={styles.title}>Here!</Text>
            </View>
            <View style={styles.button}>
                <Button onpress={onsignup} title='Sign Up' />
            </View>
            <Pressable hitSlop={20}>
                <Text style={styles.signin} onPress={onsignin}>Sign In</Text>
            </Pressable>
        </View>
    ]
}

export default Screen;