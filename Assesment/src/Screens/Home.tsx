import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Animated,
  RefreshControl,
  Button,
  TextInput,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetRefProps } from "../Components/BottomSheet";
import { FontAwesome } from "@expo/vector-icons";
import { MarketTrend } from "../redux/api/marketTrendApiSlice";
import { StockData } from "../Constants/Constants";
const Home = ({ navigation }: any) => {
  const refBottomSheet = useRef<BottomSheetRefProps>(null);
  const dispatch = useDispatch();
  const TrendsData = useSelector((state) => state.trendSlice);
  useEffect(() => {
    triggerBottomSheet();
    dispatch(MarketTrend());
    console.log("This is Stock Data->", StockData);
  }, []);
  useEffect(() => {
    if (TrendsData.data != null) {
      // console.log("This is Tred Data->", TrendsData.data.data);
    }
  }, [TrendsData]);
  const triggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();
    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(0);
    } else {
      refBottomSheet?.current?.scrollTo?.(-500);
    }
  };
  const [text, setText] = useState("");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text
          style={{
            position: "absolute",
            top: 60,
            color: "white",
            fontWeight: "600",
            fontSize: 30,
          }}
        >
          Stocks List
        </Text>
        {/* <Button title="Show List" onPress={() => triggerBottomSheet()} /> */}
      </View>

      <BottomSheet ref={refBottomSheet}>
        <View>
          <View>
            <View
              style={{ position: "absolute", top: 18, left: 38, zIndex: 1 }}
            >
              <FontAwesome name="search" size={24} color="gray" />
            </View>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: "#EBEBEB",
                borderBlockColor: "#EBEBEB",
                borderEndColor: "#EBEBEB",
                borderStartColor: "#EBEBEB",
                marginVertical: 10,
                marginHorizontal: 30,
                elevation: 10,
                paddingLeft: 40,
                borderRadius: 10,
              }}
              onChangeText={(text) => setText(text)}
              value={text}
              placeholder="Search For Stocks"
            />
          </View>
          {Array.from(Array(5)).map((val, key) => {
            return (
              <View key={key} style={styles.item}>
                <View>
                  <Text>Hari Irawan</Text>
                  <Text>087666673246</Text>
                </View>

                <View style={styles.radioButton}></View>
              </View>
            );
          })}
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90c3c8",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 40,
    backgroundColor: "blue",
  },
  searchBar: {
    marginHorizontal: "5%",
    width: "90%",
    marginTop: 40,
    height: 40,
    borderRadius: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    width: 70,
    height: 30,
    borderRadius: 10,
    backgroundColor: "pink",
  },
  card: {
    width: "90%",
    marginLeft: "5%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "yellow",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
