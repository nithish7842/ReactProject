import { StyleSheet } from "react-native";
import { colors } from "../../../../Utility/colors";

export const styles = StyleSheet.create({
    container:{
        padding:24,
       flex:1
    },
    username:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.black,
        marginBottom:12
    },
    email:{
       color:colors.ash,
       fontSize:15 
    },
    content:{
        flex:1
    }
})