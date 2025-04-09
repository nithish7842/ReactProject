import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Route from './Route';
import { CartProvider } from './src/Context/CartContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const UserContext = React.createContext({});
export const ProfileContext = React.createContext({});
export const ProductContext = React.createContext({});


const App = () => {
  const [user, setUser] = useState();
  const [userData, setUserData] = useState({});
  const [productData, setProductData] = useState({});
  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <ProfileContext.Provider value={{ userData, setUserData }}>
          <ProductContext.Provider value={{ productData, setProductData }}>
            <CartProvider>
            <Route />
            </CartProvider>
          </ProductContext.Provider>
        </ProfileContext.Provider>
      </UserContext.Provider>
    </SafeAreaProvider>
  )
}
export default App;
