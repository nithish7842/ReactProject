import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    useEffect(()=>{
        loadCartItems();
    },[]);
    const loadCartItems = async()=>{
        let carts = await AsyncStorage.getItem("Cart");
        carts = carts ? JSON.parse(carts) : [];
        setCarts(carts);
    }
    const [carts,setCarts] = useState([]);
    const addToCart = async(item)=>{
        console.log(item)
        const itemExist = carts.findIndex((cart)=> cart._id === item._id)
        const newCartItem = [...carts,item]
        if(itemExist === -1){
            await AsyncStorage.setItem("Cart",JSON.stringify(newCartItem))
            setCarts(newCartItem)
        }
    }
     const deleteCart = async ({item}) =>{
        console.log(item)
        const newItems = carts.filter((cart)=>cart._id != item._id)
        await AsyncStorage.setItem("Cart" , JSON.stringify(newItems))
        setCarts(newItems)
        }
    
    const Value ={
        carts,
        addToCart,
        deleteCart
    }
    return(
        <CartContext.Provider value={Value}>
            {children}
        </CartContext.Provider>
    )
}