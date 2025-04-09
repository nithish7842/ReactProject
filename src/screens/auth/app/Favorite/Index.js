import { View, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FavoriteItem from "../../../../components/FavoriteItem";
import Headers from "../../../../components/Headers";
import { useContext } from "react";
import { CartContext } from "../../../../Context/CartContext";


const Favorite = ({ navigation }) => {
    const {carts} = useContext(CartContext);
    const renderFavoriteItem = ({ item }) => {
        const onProductPress = () => {
            navigation.navigate('ProductDetails', { product: item })
        }
        return (
            <FavoriteItem title={item.Title} price={item.Price} image={item.Image} onPress={onProductPress} {...item} />
        )
    }
    return (
        <SafeAreaView>
            <View>
                <Headers title='Favorites' />
                <FlatList
                    data={carts}
                    renderItem={renderFavoriteItem}
                    keyExtractor={(item) => item.id ? String(item.id) : String(item.name)}
                />
            </View>
        </SafeAreaView>
    )
}

export default Favorite;
