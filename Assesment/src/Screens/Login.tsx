import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Surface } from "react-native-paper";
import { useSelector } from "react-redux";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state: any) => state.user.users);

  const HandleLogin = () => {
    // for (let user of users) {
    //   if (user.email === email && user.password === password) {
    //     navigation.navigate("Home");
    //     return;
    //   } else {
    //     console.log("User not found");
    //   }
    // }
    navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Surface style={styles.surface} elevation={4}>
        <View style={{ marginTop: 10, marginBottom: 5 }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "500",
              marginBottom: 5,
            }}
          >
            Email
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "white",
              borderWidth: 1,
              backgroundColor: "white",
              borderRadius: 5,
              elevation: 10,
              paddingLeft: 5,
            }}
            onChangeText={(text: React.SetStateAction<string>) =>
              setEmail(text)
            }
            value={email}
            placeholder="Enter Email here"
          />
        </View>
        <View style={{ marginTop: 10, marginBottom: 5 }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "500",
              marginBottom: 5,
            }}
          >
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              height: 40,
              borderColor: "white",
              borderWidth: 1,
              backgroundColor: "white",
              borderRadius: 5,
              elevation: 10,
              paddingLeft: 5,
            }}
            onChangeText={(text: React.SetStateAction<string>) =>
              setPassword(text)
            }
            value={password}
            placeholder="Enter Password here"
          />
        </View>
        <View style={{ marginVertical: 10, marginTop: 20 }}>
          <TouchableHighlight
            style={{
              backgroundColor: "black",
              borderRadius: 5,
              alignItems: "center",
              paddingVertical: 5,
            }}
            onPress={() => HandleLogin()}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 5,
              }}
            >
              Login
            </Text>
          </TouchableHighlight>
        </View>
        <View style={{ alignItems: "flex-end", marginRight: 10 }}>
          <TouchableHighlight
            onPress={() => navigation.navigate("SignUp")}
            style={{ width: 50 }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>SignUP</Text>
          </TouchableHighlight>
        </View>
      </Surface>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  surface: {
    padding: 10,
    height: 300,
    width: 350,
    backgroundColor: "#8EB1C7",
    borderRadius: 10,
    marginTop: 150,
    paddingHorizontal: 20,
  },
});
