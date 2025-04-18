import {StyleSheet } from 'react-native';
import { colors } from '../../Utility/colors';


export const styles = StyleSheet.create({
    container: {
        paddingVertical:19,
        marginHorizontal:24,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:colors.grey
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
       marginRight:20,
    },
    price: {
        color: colors.black,
        paddingBottom: 8,
    },
    icon:{
        width:14,
        height:18,
        marginLeft:8,
    },
    content:{
        flex:1
    }
});