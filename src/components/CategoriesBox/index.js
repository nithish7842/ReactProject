import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { styles } from './styles';
import { colors } from '../../Utility/colors';

const CategoriesBox = ({ title, image, onPress,isfirst,isSelected}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container,isfirst? {marginLeft:24}:{}]}>
            <View style={[styles.imageContainer,isSelected?{backgroundColor: colors.black}:{}]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={[styles.title,isSelected ?{color:colors.blue,fontWeight:500}:{}]}>{title}</Text>
        </Pressable>
    );
};

export default CategoriesBox;