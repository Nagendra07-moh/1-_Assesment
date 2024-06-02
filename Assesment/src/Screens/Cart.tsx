import {
  View,
  Text,
  TouchableHighlight,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTile from "../Components/ProductTile";
import { MaterialIcons } from "@expo/vector-icons";
import { removeFromCart } from "../redux/Features/CartSlice";
import SwipeButton from "rn-swipe-button";
import { FontAwesome6 } from "@expo/vector-icons";
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

  const [showIconStart, setShowIconStart] = useState(false);
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
          onSwipeStart={() => [setTitle("Released"), setShowIconStart(false)]}
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
            setShowIconStart(true),
          ]}
          onSwipeFail={() => [
            setTitle("Swipe To Pay"),
            setColor("#ECD996"),
            setDisabled(true),
          ]}
        />
      </View>
      {showIconStart && (
        <Pressable
          style={{
            position: "absolute",
            right: "15%",
            zIndex: 10,
            bottom: "8.5%",
          }}
          onLongPress={() => setShowIconStart(false)}
        >
          <FontAwesome6 name="check" size={30} color="black" />
        </Pressable>
      )}
      <StatusBar barStyle="dark-content" backgroundColor="gray" />
    </View>
  );
};

export default Cart;
