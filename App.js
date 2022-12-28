import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./component/signIn";
import SignUp from "./component/signUp";
import Home from "./component/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Profile from "./component/profile";
import ProductsDetails from "./component/ProductDetails";
import Products from "./component/Products";
const stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Property",
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/home.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: (icon) => {
            return (
              <AntDesign
                name="inbox"
                size={24}
                color={icon.focused ? "#000000" : "#808080"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/Profile.png")}
              style={{ width: 35, height: 35 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Tab"
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductsDetails"
          component={ProductsDetails}
          options={{
            title: "PRODUCT DETAILS",
            headerShown: true,
            headerTitleStyle: {
              fontSize: 16,
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
