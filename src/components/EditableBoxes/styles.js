import { StyleSheet } from "react-native";
import { colors } from "../../Utility/colors";

export const styles = StyleSheet.create({
    container:{
    paddingHorizontal: 16,
   paddingVertical:12,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.white,
    marginVertical: 12,
    borderRadius: 4,
},
lable: {
    color: colors.grey,
    marginBottom: 6,
    fontSize: 12,
},
input: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: '500',
}

})