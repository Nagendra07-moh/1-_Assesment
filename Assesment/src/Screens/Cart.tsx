import { View, Text, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTile from "../Components/ProductTile";
import { MaterialIcons } from "@expo/vector-icons";
import { removeFromCart } from "../redux/Features/CartSlice";
import SwipeButton from "rn-swipe-button";
const Cart = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cart);
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  // Slide Button animation

  const [disableCBButton, setDisableCBButton] = useState(false);
  const defaultStatusMessage = "swipe status appears here";
  const [swipeStatusMessage, setSwipeStatusMessage] =
    useState(defaultStatusMessage);

  setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
  const updateSwipeStatusMessage = (message: any) =>
    setSwipeStatusMessage(message);
  const renderSubHeading = (heading: any) => (
    <Text style={{ fontSize: 20, fontWeight: "500" }}>{heading}</Text>
  );
  let forceResetLastButton = null;

  const CheckoutButton = () => {
    return (
      <View
        style={{
          width: 100,
          height: 30,
          backgroundColor: "#C70039",
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#ffffff" }}>Checkout</Text>
      </View>
    );
  };

  const [color, setColor] = useState("#ECD996");

  const [title, setTitle] = useState("Swipe To Pay");
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>Open Orders</Text>
      </View>
      <View>
        {cart.map((data: any, index: number) => {
          return (
            <View key={index}>
              <ProductTile navigation={navigation} data={data} />
              <View style={{ position: "absolute", right: 30, top: 40 }}>
                <TouchableHighlight
                  style={{ zIndex: 10 }}
                  onPress={() => dispatch(removeFromCart(index))}
                >
                  <MaterialIcons name="delete" size={30} color="black" />
                </TouchableHighlight>
              </View>
            </View>
          );
        })}
      </View>
      <View style={{ marginHorizontal: 40, marginTop: "120%" }}>
        <SwipeButton
          titleStyles={{
            fontSize: 30,
            fontWeight: "600",
          }}
          enableReverseSwipe={false}
          thumbIconWidth={50}
          railBorderColor={color}
          railBackgroundColor={color}
          onSwipeStart={() => setTitle("Released")}
          thumbIconBackgroundColor="#FFFFFF"
          railFillBackgroundColor={"White"}
          railFillBorderColor={color}
          swipeSuccessThreshold={70}
          title={title}
          thumbIconBorderColor="white"
          onSwipeSuccess={() => [
            setTitle("Confirmed!"),
            setColor("#34C759"),
            setDisabled(true),
          ]}
          onSwipeFail={() => [
            setTitle("Swipe To Pay"),
            setColor("#ECD996"),
            setDisabled(true),
          ]}
        />
      </View>
    </View>
  );
};

export default Cart;
