import {View, FlatList } from "react-native"
import { useEffect, useState } from "react";
import {SafeAreaView } from "react-native-safe-area-context"
import Headers from "../../../../components/Headers";
import { categories } from "../../../../data/Categories";
import {styles} from './Styles'
import CategoriesBox from "../../../../components/CategoriesBox";
import { products } from "../../../../data/Product";
import ProductList from "../../../../components/ProductList";

const Home = ({navigation})=>{
    const [selectedCategory,setSelectedCategory] = useState();
    const [keyWord, setKeyWord] = useState();
    const [filteredProduct,setFilteredProduct] = useState(products);

    useEffect(()=>{
        if(selectedCategory && !keyWord)
            {
            const updatedProducts = products.filter((product)=> product?.category === selectedCategory);
            setFilteredProduct(updatedProducts);
        }
        else if(selectedCategory && keyWord){
            const updatedProducts = products.filter((product)=> product?.category === selectedCategory && product?.title.toLowerCase().includes(keyWord.toLowerCase()));
            setFilteredProduct(updatedProducts);
        } else if(!selectedCategory && keyWord){
            const updatedProducts = products.filter((product)=> product?.title.toLowerCase().includes(keyWord.toLowerCase()));
            setFilteredProduct(updatedProducts);
        }  else{
            setFilteredProduct(products);
        }
        },[selectedCategory,keyWord]);
    const rendercategoryItem = ({item, index}) =>{
        return(
            <CategoriesBox
            onPress={()=>setSelectedCategory(item?.id)}
            isSelected={item?.id === selectedCategory}
             title={item?.title} image={item?.image}/>
        )
    }
    const renderProductItem = ({item}) =>{
        const onProductClick =(product)=>{
                navigation.navigate('ProductDetails',{product})
        };
        return(
            <ProductList onPress={()=>onProductClick(item)} {...item} />
        )
    }
    
    return(
        <SafeAreaView>
        
                <View style={styles.container}>
                    <Headers onSearch={setKeyWord} keyWord={keyWord} title='Find All You Need' showSearch={true}/>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} 
                    style={styles.list}
                    data={categories} 
                    renderItem={rendercategoryItem} 
                    keyExtractor={(item,index) => String(index) }/>
                <FlatList 
                 style={styles.productlist} 
                 numColumns={2} data={filteredProduct} 
                 renderItem={renderProductItem} 
                 keyExtractor={(item)=> String(item.id)}
                 ListFooterComponent={<View style={{height:300}}/>}
                 showsVerticalScrollIndicator={false}/>
              
                 </View>
        </SafeAreaView>
    )
}

export default Home;