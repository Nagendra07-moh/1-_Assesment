import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Image,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider, Surface } from "react-native-paper";
import { addItem, clearItems } from "../redux/Features/SelectedItemSlice";
import { useDispatch } from "react-redux";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ProductTile: React.FC<{
  navigation: any;
  data?: any;
  isExpanded?: boolean;
}> = ({ navigation, data, isExpanded = true }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  const HandleOnPress = () => {
    navigation.navigate("ProductDetails");
    dispatch(clearItems());
    dispatch(addItem(data));
  };
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "white",
        marginBottom: 5,
        marginHorizontal: 5,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
      }}
    >
      <TouchableOpacity
        onLongPress={toggleAccordion}
        onPress={() => HandleOnPress()}
        style={{ padding: 10 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View>
            <Image
              source={{ uri: data.stockImage }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 4 }}>
              {data.stockName}
            </Text>
            <Text style={{ color: "gray", marginBottom: 4 }}>
              {data.stockFullName}
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  ${data.stockPrice}
                </Text>
              </View>
              <View style={{ marginTop: 2, marginLeft: 15 }}>
                {data.priceChange > 0 ? (
                  <AntDesign name="caretup" size={12} color="green" />
                ) : (
                  <AntDesign name="caretdown" size={12} color="red" />
                )}
              </View>
              <View
                style={{
                  marginLeft: 2,
                }}
              >
                <Text style={{ color: data.priceChange > 0 ? "green" : "red" }}>
                  {data.priceChange}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleAccordion}>
        {expanded && (
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Lorem ipsum</Text>
            <View>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                animi possimus eos sunt quibusdam dolores voluptates?
                Exercitationem dolorem velit autem. Labore est modi odio
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
      <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
        <Divider />
      </View>
    </View>
  );
};

export default ProductTile;
