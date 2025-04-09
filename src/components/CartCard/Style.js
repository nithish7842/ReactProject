import { StyleSheet } from "react-native";
import { colors } from "../../Utility/colors";

export const styles = StyleSheet.create({
    Container: {
        flexDirection:'row',
        marginVertical:10,
        margin:20
    },
    coverImage: {
        height: 120,
        width: "25%",
        borderRadius:8
    },
    content:{
        flex: 1,
        marginLeft:10,
        marginHorizontal:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color   :colors.blue

    },
    price:{
        marginVertical:10,
        color:colors.ash,
        fontSize:18
    },
    add:{
        height:24,
        width:24,
        borderRadius:8,
        backgroundColor:colors.ash,
        alignItems:'center',
        textAlign:'center',
        margin:10,
        fontSize:16,
        fontWeight:'bold'
    },
    addremove:{
        flexDirection:'row'        
    },
    quatity:{
        margin:10,
        fontWeight:'bold',
        fontSize:16
    }
})