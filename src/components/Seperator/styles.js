import { StyleSheet } from "react-native";
import { colors } from "../../Utility/colors";
export const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:20
},
line:{
backgroundColor:colors.lightGrey,
height:1,
flex:1
},
title:{
color:colors.blue,
fontWeight:500,
marginHorizontal:8
}
})