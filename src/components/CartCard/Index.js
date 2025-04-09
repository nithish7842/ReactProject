import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from './Style'
import { useState } from "react";

const CartCard = ({ item, deleteCart }) => {
    return (
        <SafeAreaView>
            <View style={styles.Container}>
                <Image source={{ uri: item.Image }} style={styles.coverImage} />
                <View style={styles.content}>
                    <Text style={styles.title}>{item.Title}</Text>
                    <Text style={styles.price}>$ {item.Price}</Text>
                    <View style={styles.addremove}>

                        <Text style={styles.add}>+</Text>
                        <Text style={styles.quatity}>1</Text>
                        <Text style={styles.add}>-</Text>
                    </View>
                </View>
                <Pressable hitSlop={20} onPress={()=>{deleteCart({item})}}>
                <Image source={require('../../assets/Delete.png')} style={styles.delete} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default CartCard;