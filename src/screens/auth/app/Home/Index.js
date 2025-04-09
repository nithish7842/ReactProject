import { View, FlatList } from "react-native"
import { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import Headers from "../../../../components/Headers";
import { categories } from "../../../../data/Categories";
import { styles } from './Styles'
import CategoriesBox from "../../../../components/CategoriesBox";
import ProductList from "../../../../components/ProductList";
import { getProductData } from "../../../../Utility/BackendCalls";
import { ProductContext } from "../../../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [keyWord, setKeyWord] = useState();
    const [filteredProduct, setFilteredProduct] = useState({});
    const { productData, setProductData } = useContext(ProductContext);

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('auth_token')
            const products = await getProductData(token);
            setFilteredProduct(products.data.data);
            setProductData(products.data.data);
        })();
    }, [])

    useEffect(() => {
        if (selectedCategory === "Popular") {
            if (keyWord) {
                const updatedProducts = productData.filter(product => product?.Title?.toLowerCase().includes(keyWord.toLowerCase()));
                setFilteredProduct(updatedProducts);
            }
            else {
                setFilteredProduct(productData);
            }

        }
        else if (selectedCategory && !keyWord) {
            const updatedProducts = productData.filter(product => String(product?.Category) === String(selectedCategory));
            setFilteredProduct(updatedProducts);
        }

        else if (selectedCategory && keyWord) {
            const updatedProducts = productData.filter(product => String(product?.Category) === String(selectedCategory) && product?.Title?.toLowerCase().includes(keyWord.toLowerCase()));
            setFilteredProduct(updatedProducts);
        } else if (!selectedCategory && keyWord) {
            const updatedProducts = productData.filter(product => product?.Title?.toLowerCase().includes(keyWord.toLowerCase()));
            setFilteredProduct(updatedProducts);
        }
    }, [selectedCategory, keyWord, productData])

    const rendercategoryItem = ({ item, index }) => {
        return (
            <CategoriesBox
                onPress={() => setSelectedCategory(item?.title)}
                isSelected={item?.title === selectedCategory}
                title={item?.title} image={item?.image}
            />
        )
    }
    const renderProductItem = ({ item }) => {
        const onProductClick = (productData) => {
            console.log(productData);
            navigation.navigate('ProductDetails', { productData })
        };
        return (
            <ProductList title={item.Title} price={item.Price} image={item.Image} onPress={() => onProductClick(item)} {...item} />
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Headers onSearch={setKeyWord} keyWord={keyWord} title='Find All You Need' showSearch={true} />
                <FlatList horizontal showsHorizontalScrollIndicator={false}
                    style={styles.list}
                    data={categories}
                    renderItem={rendercategoryItem}
                    keyExtractor={(item, index) => String(index)}
                />
                <FlatList
                    style={styles.productlist}
                    numColumns={2} data={filteredProduct}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => String(item.id)}
                    ListFooterComponent={<View style={{ height: 300 }} />}
                    showsVerticalScrollIndicator={true}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home;