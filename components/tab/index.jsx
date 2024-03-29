import { Text,TouchableOpacity,View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../home";
import Cart from "../main/cart";
import Wishlist from "../main/wishlist";
import Account from "../main/account";
import ProductView from "../main/product-view";

const {Navigator, Screen } = createBottomTabNavigator();

const Tab = ()=>{
     const screenOption = ({route})=>({
          tabBarButton: (props)=> <TouchableOpacity {...props} />,
          tabBarIcon: ({focused})=>{
               if(route.name == "Home")
               return <Icon 
               name={focused ? "home" : "home-outline"} size={24}
               color={focused ? "orange" : "gray"}
               />
               
               if(route.name == "Cart")
               return <Icon 
               name={focused ? "cart" : "cart-outline"} size={24} 
               color={focused ? "orange" : "gray"}
               />

               if(route.name === "Wishlist")
               return <Icon 
               name={focused ? "heart" : "heart-outline"} size={24} 
               color={focused ? "orange" : "gray"}
               />

               if(route.name == "Account")
               return <Icon 
               name={focused ? "person" : "person-outline"} size={24} 
               color={focused ? "orange" : "gray"}
               />
          },
          tabBarStyle: {
               height: 60,
               paddingBottom: 6
          },
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "gray"
     })
     return (
          <Navigator screenOptions={screenOption}>
               <Screen name="Home" component={Home} options={{headerShown: false}} />
               <Screen name="Cart" component={Cart} options={{headerShown: false}} />
               <Screen name="Wishlist" component={Wishlist} options={{headerShown: false}} />
               <Screen name="Account" component={Account} options={{headerShown: false}} />
               <Screen name="product-view" component={ProductView} options={{headerShown: false}} />
          </Navigator>
     )
}

export default Tab;