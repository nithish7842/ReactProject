import React from 'react';
import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import Screen from './src/screens/auth/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import { colors } from './src/Utility/colors';
import Home from './src/screens/auth/app/Home/Index';
import Profile from './src/screens/auth/app/Profile/Index';
import Favorite from './src/screens/auth/app/Favorite/Index';
import { Image } from 'react-native';
import ProductDetails from './src/screens/auth/app/ProductDetails/Index';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MyTheme = {
 ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
   
  },
}

const Tabs = ()=>(
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let icon;

      if (route.name === 'Home') {
        icon = focused
          ? require('./src/assets/Home.png')
          : require('./src/assets/Home.png');
      } else if (route.name === 'Profile') {
        icon = focused
          ? require('./src/assets/Profile.png')
          : require('./src/assets/Profile.png');
      } else if (route.name === 'Favorite') {
        icon = focused
          ? require('./src/assets/Favorite.png')
          : require('./src/assets/Favorite.png');
      }

      // You can return any component that you like here!
      return <Image style={{ width: 24, height: 24 }} source={icon} />
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { borderTopColor: colors.lightGrey }
  })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name='Favorite' component={Favorite}/>
        <Tab.Screen name="Profile" component={Profile} />
      
    </Tab.Navigator>
)
  
const App = () => {
  const isSignedin = true;
  return(
  
      <NavigationContainer theme={MyTheme}> 
      
      <Stack.Navigator>
      {isSignedin ? (
        <>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
        <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:false}}/>
        </>
      ):
      (
        <>
          <Stack.Screen name="Splash" component={Screen} options={{headerShown:false}} />
         <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
          <Stack.Screen name="SignUp" component={Signup} options={{headerShown:false}}/>
        </>
      )}
      </Stack.Navigator>

    
     </NavigationContainer>
   
    )
}
 
export default App;
