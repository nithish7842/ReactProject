import { useImperativeHandle } from "react";
import {Image, Linking, Pressable, ScrollView, Text,View} from "react-native"
import {SafeAreaView } from "react-native-safe-area-context"
import {styles} from './Styles';
import Button from "../../../../components/Button";
import ImageCaurosel from "../../../../components/ImageCaurosel";

const ProductDetails=({navigation,route})=>{
    const {product} = route?.params || {};
    const onBack =()=>{
        navigation.goBack()
     }
     const onContact =()=>{
      //  Linking.openURL('tel:7842578773');
        Linking.openURL('mailto:nithish@erebortech.com')
     }
    return(
        <SafeAreaView style={styles.safe}>
        < ScrollView>
        {product?.images?.length ? (
                    <ImageCaurosel images={product?.images} />
                ) : (
                    <Image style={styles.image} source={require('../../../../assets/arrow_back.png')} />
                )}
       
        <Pressable onPress={onBack} style={styles.backContainer}>
                <Image style={styles.backIcon} source={require('../../../../assets/arrow_back.png')}/>
            </Pressable>
        <View style={styles.content}>
        <Text style={styles.title}>{product?.title}</Text>    
        <Text style={styles.price}>{product?.price}</Text>
        <Text style={styles.description}>{product?.description}</Text>
        </View>
        </ScrollView>
        <View style={styles.footer}>
            <Pressable style={styles.bookmarkContainer}>
                <Image style={styles.bookmarkIcon} source={require('../../../../assets/Bookmark.png')}/>
            </Pressable>
        <Button onpress={onContact} title={'Contact Seller'}/>
        </View>
        </SafeAreaView>
    
    )
}
export default ProductDetails;