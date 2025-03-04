import {Text, ScrollView, View, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./Styles";
import {products } from "../../../../data/Product";
import FavoriteItem from "../../../../components/FavoritesItem";
import Headers from "../../../../components/Headers";


const Favorite = ({navigation})=>{
    const renderFavoriteItem = ({item})=>{
        const onProductPress = ()=>{
            navigation.navigate('ProductDetails',{product:item})
        }
  return(
    <FavoriteItem onPress={onProductPress} {...item}/>
  )
    }
    return(
        <SafeAreaView>
          
                    <View>
                        <Headers title='Favorites'/>
                  <FlatList 
                   data={products} 
                    renderItem={renderFavoriteItem} 
                 keyExtractor={(item)=> String(item.id)}
                 />       
                    </View>
                
        </SafeAreaView>
    )
}

export default Favorite;
