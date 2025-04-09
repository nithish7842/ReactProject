import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Screen from './src/screens/auth/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import { colors } from './src/Utility/colors';
import Home from './src/screens/auth/app/Home/Index';
import Profile from './src/screens/auth/app/Profile/Index';
import Favorite from './src/screens/auth/app/Favorite/Index';
import { Image, Text, View } from 'react-native';
import ProductDetails from './src/screens/auth/app/ProductDetails/Index';
import Settings from './src/screens/auth/app/Settings/Index';
import ListingPage from './src/screens/auth/app/ListingPage/Index';
import MyListing from './src/screens/auth/app/MyListing/Index';
import { UserContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartPage from './src/screens/auth/app/CartPage/Index'
import { CartContext } from './src/Context/CartContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
            <Stack.Screen name="ListingPage" component={ListingPage} options={{ headerShown: false }} />
            <Stack.Screen name="MyListing" component={MyListing} options={{ headerShown: false }} />            
        </Stack.Navigator>
    )
}

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white,
    },
}

const Tabs = () => {
    // 🔹 Get cart data at the top level (hooks cannot be used inside conditionals)
    const { carts } = useContext(CartContext);
    const cartsCount = carts?.length || 0; // Ensure cartsCount is a valid number

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon;

                    if (route.name === "Home") {
                        icon = require("./src/assets/Home.png");
                    } else if (route.name === "ProfileStack") {
                        icon = require("./src/assets/Profile.png");
                    } else if (route.name === "Favorite") {
                        icon = require("./src/assets/Favorite.png");
                    } else if (route.name === "Add To Cart") {
                        icon = require("./src/assets/cart.png");
                    }

                    return (
                        <View>
                            <Image 
                            style={{ 
                                width: 24, 
                                height: 24 ,
                                marginTop:20
                            }}
                             source={icon} />
                            {/* 🔹 Show cart count only for "Add To Cart" tab */}
                            {route.name === "Add To Cart" && cartsCount > 0 && (
                                <View
                                    style={{
                                        position: "absolute",
                                        right: -10,
                                        top: 5,
                                        backgroundColor: colors.black,
                                        borderRadius: 10,
                                        width: 20,
                                        height:20,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
                                        {cartsCount}
                                    </Text>
                                </View>
                            )}
                        </View>
                    );
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { borderTopColor: colors.lightGrey },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Add To Cart" component={CartPage} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} />
        </Tab.Navigator>
    );
};

const Route = () => {
    const { user, setUser } = useContext(UserContext);
    const [loggedIn, setloggedIn] = useState(false);
    const isLoggedIn = async () => {
        const data = await AsyncStorage.getItem('isLoggedIn')
        setloggedIn(data);
    }

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('auth_token')
            setUser(token);
            isLoggedIn();
        })()
    }, [])
    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                {user?.token && loggedIn ? (
                    <>
                        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }} />
                        <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }} />
                    </>
                ) :
                    (
                        <>
                            <Stack.Screen name="Splash" component={Screen} options={{ headerShown: false }} />
                            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
                            <Stack.Screen name="SignUp" component={Signup} options={{ headerShown: false }} />
                        </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Route;