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
import { StockData, mp } from "../Constants/Constants";
import ProductTile from "../Components/ProductTile";
import { AntDesign } from "@expo/vector-icons";
import { SearchItemAPI } from "../redux/api/SearchApiSlice";
import { useDebounce } from "../Hooks/CustomDebounceHook";

const Home = ({ navigation }: any) => {
  const refBottomSheet = useRef<BottomSheetRefProps>(null);
  const dispatch = useDispatch();
  const TrendsData = useSelector((state) => state.trendSlice);
  const searchResult = useSelector((state) => state.SearchApi);

  useEffect(() => {
    triggerBottomSheet();
  }, []);
  // useEffect(() => {
  //   if (searchResult.data != null) {
  //     console.log("This is Search Data->", searchResult.data.data);
  //   }
  // }, [searchResult]);

  const triggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();
    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(0);
    } else {
      refBottomSheet?.current?.scrollTo?.(-500);
    }
  };
  const [text, setText] = useState("");
  const [showList, setShowList] = useState(true);
  const [page, setPage] = useState(1);
  const debouncedSearchTerm = useDebounce(text, 1000);
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     dispatch(SearchItemAPI(text));
  //   }
  // }, [debouncedSearchTerm, dispatch]);

  const handleFocus = () => {
    setShowList(false);
    // dispatch(SearchItemAPI("Apple"));
  };

  const [searchItem, setSearchItem] = useState([]);
  useEffect(() => {
    console.log(searchItem);
  }, [searchItem]);
  const HandleSearch = (text: string) => {
    if (mp.has(text)) {
      const foundItem = mp.get(text);
      let arr = [];
      arr.push(foundItem);
      setSearchItem(arr);
    }
    setText(text);
  };
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(5);
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
              onFocus={handleFocus}
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
              onChangeText={(text) => HandleSearch(text)}
              value={text}
              placeholder="Search For Stocks"
            />
          </View>
          <View style={{ marginBottom: 50 }}>
            {showList &&
              StockData.map((item: any, index) => {
                {
                  if (index > minIndex && index < maxIndex) {
                    return (
                      <ProductTile
                        navigation={navigation}
                        data={item}
                        key={index}
                        isExpanded={false}
                      />
                    );
                  }
                }
              })}
            {searchItem.length > 0 &&
              searchItem.map((item: any, index) => {
                return (
                  <ProductTile
                    navigation={navigation}
                    data={item}
                    key={index}
                    isExpanded={true}
                  />
                );
              })}
          </View>
        </View>
        {showList && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 15,
              marginVertical: 15,
              alignSelf: "center",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => [
                  setMinIndex(minIndex - 5),
                  setMaxIndex(maxIndex - 5),
                  setPage(page - 1),
                ]}
              >
                <AntDesign name="caretleft" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text style={{ fontSize: 15 }}>{page}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => [
                  setMinIndex(minIndex + 5),
                  setMaxIndex(maxIndex + 5),
                  setPage(page + 1),
                ]}
              >
                <AntDesign name="caretright" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
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
