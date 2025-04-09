import { StyleSheet } from "react-native";
import { colors } from "../../../../Utility/colors";

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginBottom:-24
    },
    totalPrice:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginRight:30,
      paddingLeft: 20,
      padding:15,   
    },
    pricing:{
    backgroundColor:colors.lightGrey, 
     borderTopLeftRadius:20,
     borderTopRightRadius:20,
    },
    devider:{
      borderWidth:0.2,
      borderColor:colors.blue,
       margin:10,
    },
    safe: {   
      flex: 1
  },
  checkout:{
    flex:0,
   margin:10
  },
  emptyText:{
    fontSize:24,
    fontWeight:'bold',
    justifyContent:'center',
    margin:100,
    alignContent:'center',
  textDecorationLine:'underline'
  }
})

