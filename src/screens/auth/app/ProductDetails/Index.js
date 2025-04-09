import { useContext } from "react";
import { Image, Linking, Pressable, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from './Styles';
import Button from "../../../../components/Button";
import ImageCaurosel from "../../../../components/ImageCaurosel";
import { CartContext } from "../../../../Context/CartContext";

const ProductDetails = ({ navigation, route }) => {
    const { addToCart } = useContext(CartContext);
    const product = route?.params.productData || {};

    const onBack = () => {
        navigation.goBack()
    }
    const handleaddToCart = (item) => {
        addToCart(item);
        navigation.navigate("CartPage");
    }
    const onContact = () => {
        // Linking.openURL('tel:7842578773');
        Linking.openURL('mailto:nithish@erebortech.com')
    }
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView>
                {!product?.Image ? (
                    <ImageCaurosel images={product?.Image} />
                ) : (
                    <Image style={styles.image} source={{ uri: product?.Image }} />
                )}
                <Pressable onPress={onBack} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../../assets/arrow_back.png')} />
                </Pressable>
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.Title}</Text>
                    <Text style={styles.price}>$ {product?.Price}</Text>
                    <Text style={styles.description}>{product?.Description}</Text>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../../assets/Bookmark.png')} />
                </Pressable>
                <Button onpress={() => handleaddToCart(product)} title={'Add To Cart'} style={styles.addtoCart} />
                <Button onpress={onContact} title={'Contact Seller'} />
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails;