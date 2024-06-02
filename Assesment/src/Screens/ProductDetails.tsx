import { View, Text, Image, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { addToCart } from "../redux/Features/CartSlice";

const ProductDetails = ({ navigation }: any) => {
  const Itemdata = useSelector(
    (state: any) => state.selectedItemSlice.selectedItem
  );
  const dispatch = useDispatch();

  const HandlePressEvent = () => {
    dispatch(addToCart(Itemdata[0]));
    console.log(navigation.navigate("Cart"));
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 10 }}>
        <Image
          source={{ uri: Itemdata[0].stockImage }}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 30,
            fontSize: 30,
            fontWeight: "500",
          }}
        >
          {Itemdata[0].stockName}
        </Text>
        <Text
          style={{
            marginLeft: 30,
            fontSize: 20,
            fontWeight: "500",
            color: "gray",
          }}
        >
          {Itemdata[0].stockFullName}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View>
            <Text
              style={{
                marginTop: 10,
                marginLeft: 30,
                fontSize: 30,
                fontWeight: "500",
              }}
            >
              ${Itemdata[0].stockPrice}
            </Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 15 }}>
            {Itemdata[0].priceChange > 0 ? (
              <AntDesign name="caretup" size={15} color="green" />
            ) : (
              <AntDesign name="caretdown" size={15} color="red" />
            )}
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "700",
                color: Itemdata[0].priceChange > 0 ? "green" : "red",
                marginTop: 20,
                marginLeft: 5,
              }}
            >
              {Itemdata[0].priceChange}
            </Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            reiciendis maxime, placeat unde atque sed modi impedit sint ex sunt
            dolore dolores nesciunt aspernatur mollitia. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Fugiat reiciendis maxime, placeat
            unde atque sed modi impedit sint ex sunt dolore dolores nesciunt
            aspernatur mollitia.
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          width: "80%",
          alignSelf: "center",
        }}
      >
        <TouchableHighlight
          style={{
            backgroundColor: "#ECD996",
            borderRadius: 5,
            alignItems: "center",
            paddingVertical: 5,
          }}
          onPress={() => HandlePressEvent()}
        >
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              marginVertical: 5,
            }}
          >
            Add to order
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ProductDetails;
