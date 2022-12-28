import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function CustomButton(props) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={{ backgroundColor: "#000000", padding: 20 }}
    >
      <Text style={{ textAlign: "center", fontSize: 12, color: "#FFFFFF" }}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}
