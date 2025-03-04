import { StyleSheet } from "react-native";
import { colors } from "../../Utility/colors";

export const styles= StyleSheet.create({
container:{
    backgroundColor:colors.blue,
    paddingHorizontal: 8,
    paddingVertical:20,
    width:'303px',
    height:'60px',
    borderRadius:8,
    flex:1,
    },
    title:{
        color:'#ffffff',
        textAlign: 'center',
        fontSize: 16,
    fontWeight:'bold'
    }
})