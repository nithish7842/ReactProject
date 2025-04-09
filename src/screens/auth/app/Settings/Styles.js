import { StyleSheet } from "react-native";
import { colors } from "../../../../Utility/colors";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectiontitle:{
        marginBottom:16,
        color:colors.grey,
        fontWeight:'bold',
        fontSize:16
    },
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    icon:{
        width:24,
        height:24
    },
    button:{
        paddingVertical:12,
        marginTop:16
    }
})