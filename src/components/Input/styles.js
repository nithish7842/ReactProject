import { StyleSheet } from "react-native";
import { colors } from "../../Utility/colors";


export const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    lable: {
        marginVertical: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: 500
    },
    inputContainer: {
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 14,
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    eye: {
        width: 24,
        height: 24,

    },
    arrow: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{ rotate: '90deg' }]
    },
    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        borderColor: colors.grey,
    },
    modalWarper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    modalcontent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: "80%"
    },
    headerText: {
        marginBottom: 18,
        fontSize: 16
    },
    option: {
        color: colors.black,
        paddingVertical: 4,
        fontSize:15
    },
    selectedText: {
        color: colors.blue,
        fontWeight:'bold'
    }
})