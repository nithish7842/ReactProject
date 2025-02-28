import { StyleSheet } from "react-native";
import { colors } from "../../Utility/colors";
export const styles = StyleSheet.create({
container:{
marginBottom:20
},
lable:{
marginVertical:8,
color:colors.blue,
fontSize:14,
fontWeight:500
},
inputContainer:{
    borderColor:colors.grey,
    borderWidth:1,
    borderRadius:14,
    alignItems:'center',
    flexDirection:'row'
    },
input:{
paddingHorizontal:16,
paddingVertical:20,
flex:1
},
eye:{
    width:24,
    height:24,
    marginHorizontal:16
}
})