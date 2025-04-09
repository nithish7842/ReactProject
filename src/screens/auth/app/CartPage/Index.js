import { FlatList, ScrollView, Text, View } from "react-native"
import Headers from "../../../../components/Headers";
import { SafeAreaView } from "react-native-safe-area-context";
import CartCard from "../../../../components/CartCard/Index";
import { styles } from './Style'
import Button from "../../../../components/Button";
import { useContext } from "react";
import { CartContext } from "../../../../Context/CartContext";

const CartPage = ({ navigation }) => {
    const { carts,deleteCart } = useContext(CartContext);
    const calculateTotalPrice = () => {
        return carts.reduce((total, item) => total + item.Price, 0);
    };
    const grandTotal = calculateTotalPrice();
    const shippingPrice = grandTotal > 1000 || carts?.length == 0 ? 0 : 10;
    const onback = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Headers title={'My Cart Items'} showBack={true} onBackPress={onback} />
                <ScrollView >
                    <FlatList
                        data={carts}
                        renderItem={({item})=>(
                            <CartCard item={item} deleteCart={deleteCart}/>
                        )}
                        keyExtractor={(item) => String(item.id)}
                    />
                </ScrollView>
                {carts?.length == 0 &&(<Text style={styles.emptyText}>Your Cart Is Empty</Text>)}

                {carts?.length !== 0 &&(
                <View style={styles.pricing}>
                    <View style={styles.totalPrice}>
                        <Text>Total Price:</Text>
                        <Text>${grandTotal}</Text>
                    </View>
                    <View style={styles.totalPrice}>
                        <Text>Shipping Price:</Text>
                        <Text>${shippingPrice}</Text>
                    </View>
                    <View style={styles.devider}></View>
                    <View style={styles.totalPrice}>
                        <Text>Grand Total:</Text>
                        <Text>${grandTotal + shippingPrice}</Text>
                    </View>
                    <Button style={styles.checkout} title={"CheckOut"} />
                </View>
                )}     
            </View>
        </SafeAreaView>
    )
}

export default CartPage;