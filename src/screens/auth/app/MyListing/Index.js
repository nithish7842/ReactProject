import { Text, ScrollView, View, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./Styles";
import { products } from "../../../../data/Product";
import FavoriteItem from "../../../../components/FavoriteItem";
import Headers from "../../../../components/Headers";
import { useContext } from "react";
import { CartContext } from "../../../../Context/CartContext";


const MyListing = ({ navigation }) => {
    const {carts} = useContext(CartContext);
    const renderFavoriteItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }
        return (
            <FavoriteItem title={item.Title} price={item.Price} image={item.Image} icon={require('../../../../assets/close.png')} onPress={onProductPress} {...item} />
        )
    }
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView>
            <View>
                <Headers showBack onBackPress={goBack} title='Favorites' />
                <FlatList
                    data={carts}
                    renderItem={renderFavoriteItem}
                    keyExtractor={(item) => String(item.id)}
                />
            </View>
        </SafeAreaView>
    )
}

export default MyListing;
