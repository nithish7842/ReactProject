import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from './Styles'
import Headers from "../../../../components/Headers";
import { launchImageLibrary } from "react-native-image-picker";
import { useContext, useState } from "react";
import Input from "../../../../components/Input/Index";
import { categories } from "../../../../data/Categories";
import Button from "../../../../components/Button";
import { addProduct } from "../../../../Utility/BackendCalls";
import { ProductContext } from "../../../../../App";

const ListingPage = ({ navigation }) => {
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setvalues] = useState({});
    const { productData, setProductData } = useContext(ProductContext);
    const goBack = () => {
        navigation.goBack();
    }
    const onUplocadPress = async () => {
        const result = await launchImageLibrary()
        if (result?.assets?.length) {
            setImage(list => ([...list, ...result?.assets]));
        }
    }
    const onDeleteImage = (image) => {
        setLoading(true);
        setImage(list => {
            const filteredImage = list.filter(img => img?.fileName !== image?.fileName)
            return filteredImage;
            setLoading(false);
        })
    }
    const onChange = (values, key) => {
        setvalues((val) => ({ ...val, [key]: values }))
    }
    const onSubmit = async (e) => {
        const img = image?.length ? image[0] : null;
        const product = {
            Title: values.title,
            Price: values.price,
            Description: values.description,
            Category: values.category.title,
        }
        if (img) {
            product.image = {
                uri: img?.uri,
                name: img?.fileName,
                type: img?.type,
            }
        }
        const addProducts = await addProduct(product);
        if (addProducts.data.Status === "Ok") {
            Alert.alert("Product Added")
            const token = await AsyncStorage.getItem('auth_token')
            const products = await getProductData(token);
            setProductData(products.data.data)
            navigation.navigate('Home');
        }
        else {
            Alert.alert(JSON.stringify(response.data));
        }
    }
    return (
        <SafeAreaView>
            <Headers showBack={true} onBackPress={goBack} title='Create a New Listing' />
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='height'>
                    <Text style={styles.sectiontitle}>Upload Photo</Text>
                    <View style={styles.imagerow}>
                        <Pressable style={styles.uploadContainer} onPress={onUplocadPress}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}> + </Text>
                            </View>
                        </Pressable>
                        {image?.map(image => (
                            <View style={styles.imagecontent} key={image?.fileName}>
                                <Image style={styles.image} source={{ uri: image?.uri }} />
                                <Pressable disabled={loading} hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.close} source={require('../../../../assets/Delete.png')} />
                                </Pressable>
                            </View>
                        ))}
                        {loading ? (
                            <ActivityIndicator />
                        ) : null
                        }
                    </View>
                    <Input lable='Title' Placeholder={'Listing Title'} value={values.title} onChangeText={v => onChange(v, 'title')} />
                    <Input lable='Category' Placeholder={'Select The Category'} value={values.category} onChangeText={v => onChange(v, 'category')} type="picker" options={categories} />
                    <Input lable='Price' Placeholder={'Enter price in USD'} value={values.price} onChangeText={v => onChange(v, 'price')} keyboardType="Numeric" />
                    <Input style={styles.description} lable='Description' Placeholder={'Tell us more...'} values={values.description} onChangeText={v => onChange(v, 'description')} multiline />
                    <Button title={'Submit'} onpress={onSubmit} style={styles.button} />
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListingPage;