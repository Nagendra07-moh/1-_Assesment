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
    if (isExpanded === true) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    }
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
        onPress={expanded ? () => toggleAccordion() : () => null}
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
              <View style={{ marginLeft: 10 }}>
                <Text>{data.priceChange}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleAccordion}>
        {expanded && (
          <View>
            <Text>Expanded</Text>
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
