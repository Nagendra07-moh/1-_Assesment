import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
