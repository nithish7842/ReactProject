import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import { styles } from './Styles';

const ProductList = ({ title, price, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>$ {price}</Text>
        </Pressable>
    );
};

export default ProductList;