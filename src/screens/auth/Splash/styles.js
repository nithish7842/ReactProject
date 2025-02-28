import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    imagestyle: {
        width:'100%',
        height:200
    },
    textarea:{
        marginVertical:54
    },
    container:{
    padding: 24,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    height:'100%'
    },
    title:{
        fontSize:40,
        fontWeight: 'bold',
        textAlign : 'center',
        
    },
    description:{
        fontSize:40,
        color:'#FCA34D',
        textDecorationLine:'underline',
        textAlign : 'center',
        fontWeight : 'bold'
    },
    signin:{
        color:'#4F63AC',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center',
        marginTop:30
    }
})