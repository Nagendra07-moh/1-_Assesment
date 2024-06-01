import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetRefProps } from "../Components/BottomSheet";
const Home = ({ navigation }: any) => {
  const refBottomSheet = useRef<BottomSheetRefProps>(null);

  useEffect(() => {
    triggerBottomSheet();
  }, []);
  const triggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();

    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(-852);
    } else {
      refBottomSheet?.current?.scrollTo?.(-500);
    }
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}></View>

      <BottomSheet ref={refBottomSheet}>
        <View>
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
});

export default Home;
