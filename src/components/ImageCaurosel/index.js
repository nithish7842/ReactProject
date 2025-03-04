import React, { useState } from "react";
import { FlatList,Dimensions, Image,View} from "react-native";
import { styles } from "./styles"; 


const ImageCaurosel =({images}) =>
{
    const {width} = Dimensions.get('window');
    const [activeIndex, setActiveIndex] = useState(0);
    const handlescroll =(e)=>{
        const horizantaloffset = e.nativeEvent.contentOffset.x;
        const index = Math.round( horizantaloffset/width);
        setActiveIndex(index);
    }
    const renderImage = ({ item }) => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        );
    };
    return(
        <View>
        <FlatList horizontal pagingEnabled style={styles.list} data={images} renderItem={renderImage} onMomentumScrollEnd={handlescroll} />

        <View style={styles.pagination}>
            {images?.map((_, i) => (
                <View key={i} style={[styles.paginationLine, i === activeIndex ? styles.activeLine : {}]} />
            ))}
        </View>
    </View>
       
       
    )
}

export default ImageCaurosel;