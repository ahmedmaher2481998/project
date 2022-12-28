import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "./../components/CustomButton";

export default function ProductsDetails(props) {
  const [value, setValue] = useState(1);

  const qty = (item) => {
    if (item === "+") {
      setValue(value + 1);
    } else if (item === "-" && value !== 0) {
      setValue(value - 1);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <StatusBar color="#000000" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ width: "100%", height: 400 }}>
          <Image
            source={require("../assets/products/p1.png")}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ padding: 20, backgroundColor: "#f2f2f2", flex: 1 }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 12, color: "#000000" }}>
              SHOP | T-SHIRT
            </Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <AntDesign name="star" size={16} color="#ffc107" />
              <AntDesign name="star" size={16} color="#ffc107" />
              <AntDesign name="star" size={16} color="#ffc107" />
              <AntDesign name="star" size={16} color="#ffc107" />
              <AntDesign name="star" size={16} color="#ffc107" />
            </View>
          </View>

          <Text
            style={{
              fontSize: 16,
              color: "#000000",
              marginBottom: 4,
              marginTop: 16,
            }}
          >
            BASIC SURF TOUR T-SHIRT
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "justify",
              color: "#808080",
              lineHeight: 16,
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't{" "}
          </Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 6,
            }}
          >
            <View style={{ flex: 1 }}>
              <CustomButton name="+" onPress={() => qty("+")} />
            </View>
            <Text
              style={{ width: 200, textAlign: "center", fontSize: 20 }}
              class="qty"
            >
              {value}
            </Text>
            <View style={{ flex: 1 }}>
              <CustomButton name="-" onPress={() => qty("-")} />
            </View>
          </View>
          <CustomButton name="ADD TO BAG" />
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16, color: "#000000", marginBottom: 6 }}>
              NOTES
            </Text>
            <TextInput
              placeholderTextColor="#808080"
              style={{
                borderColor: "#000000",
                borderWidth: 0.5,
                color: "#808080",
                padding: 12,
                fontSize: 10,
                height: 120,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
