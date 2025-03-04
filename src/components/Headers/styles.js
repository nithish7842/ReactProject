import { StyleSheet } from "react-native";
import { colors } from "../../Utility/colors";

export const styles= StyleSheet.create({
    mainContainer:{
        paddingHorizontal:26,
    },
container:{
    flexDirection:'row',
    alignItems:'center',
   justifyContent:'space-between',
  
    },
    title:{
       color:colors.blue,
       fontSize:16,
      fontWeight:'bold'
    },
    image:{
        width:24,
        height:24
    },
    space:{
        width:24
    }
})