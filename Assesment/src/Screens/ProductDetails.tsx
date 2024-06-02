import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductDetails = (navigation: any) => {
  const data = useSelector(
    (state: any) => state.selectedItemSlice.selectedItem
  );
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;
