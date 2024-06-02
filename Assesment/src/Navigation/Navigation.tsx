import { View, Text, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import ProductDetails from "../Screens/ProductDetails";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#8EB1C7",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "SignUp",
            headerStyle: {
              backgroundColor: "#009A5C",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Cart",
            headerStyle: {
              backgroundColor: "gray",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
