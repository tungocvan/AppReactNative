import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

import styles from "./styles";

function BtnImage(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.member__item}>
        <Image source={props.src} style={styles.icon} />
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BtnImage;
