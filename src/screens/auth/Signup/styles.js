import { StyleSheet } from "react-native";
import { colors } from "../../../Utility/colors";

export const styles= StyleSheet.create({

    container:{
    padding: 24,

    },
    signup:{
    marginVertical:20,
    },
    aggrerow:
    {
        flexDirection:'row',
        alignItems:'center'
    },
    aggreetext:{
        color:colors.blue,
        marginLeft:13
    },
    termText:{
        color:colors.blue,
        fontWeight:'bold',
    },
    footerText:{
        color:colors.blue,
     marginBottom:56,
     textAlign:'center'
    },
    signin:{
        fontWeight:'bold'
    }
})