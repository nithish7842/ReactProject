import { StyleSheet } from "react-native";
import { colors } from "../../../../Utility/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectiontitle: {
        marginBottom: 16,
        color: colors.grey,
        fontWeight: 'bold',
        fontSize: 16
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 16
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.grey,
        borderStyle: 'dashed',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.grey,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadPlus: {
        color: colors.white,
        fontSize: 20,
        marginBTop: -4,
    },
    imagerow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    imagecontent: {
        flexDirection: 'row',
        marginRight: 8,
        marginTop: 8
    },
    close: {
        width: 32,
        height: 32,
        marginLeft: -40,
        marginTop: -10,
    },
    description: {
        minHeight: 150
    },
    button: {
        marginBottom: 160
    }
})