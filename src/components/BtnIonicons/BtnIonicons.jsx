import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
// import styles from "./styles";

function BtnIonicons(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons
        name={props.name || "md-checkmark-circle"}
        size={props.size || 24}
        color={props.color || "black"}
      />
    </TouchableOpacity>
  );
}

export default BtnIonicons;
