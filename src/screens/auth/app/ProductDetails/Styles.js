import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../Utility/colors";

const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
    footer:{
        padding:24,
        flexDirection:'row',
        alignItems:'center'
    },
    safe:{
borderWidth:1,
flex:1
    },
    Container:{
        
    },
    image:{
        width:'100%',
        height:(height * 0.45)
    },
    content:{
        backgroundColor:colors.white,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        marginTop:-40
    },
    title:{
        marginTop:40,
        fontSize:24,
        fontWeight:'500'
    },
    price:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:8
    },
    description:{
        marginVertical:8,
        color:colors.lightGrey,
        fontSize:14,
       justifyContent:'center',
       fontWeight:500
    },
    bookmarkContainer:{
        backgroundColor:colors.lightGrey,
        padding:18,
        borderRadius:8,
        marginRight:16,
     
    },
    bookmarkIcon:{
        width:24,
        height:24,
        padding:8,
        borderRadius:8
    },
    backContainer:{
        backgroundColor:colors.white,
        padding:10,
        margin:24,
        borderRadius:8,
        marginRight:16,
        position:'absolute'
    },
    backIcon:{
        width:20,
        height:20,
    }
})