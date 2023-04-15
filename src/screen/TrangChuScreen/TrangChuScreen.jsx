import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
//import BtnImage from "../../components/BtnImage";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

function BtnImage(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.member__item}>
        <Ionicons
          name={props.name || "md-checkmark-circle"}
          size={props.size || 24}
          color={props.color || "black"}
        />
        <Text style={{ marginTop: 5 }}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function TrangChuScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      console.log("TrangChuScreen");
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.account}></View>
        <View style={styles.member}>
          <View style={styles.member__point}></View>
          <View style={styles.member__feature}>
            <BtnImage
              name="add-circle-outline"
              title="Tích Điểm"
              size={30}
              color={"green"}
            />
            <BtnImage
              name="albums-outline"
              title="Đổi Thưởng"
              size={30}
              color={"green"}
            />
            <BtnImage
              name="ios-list-circle-outline"
              title="Đặt Hàng"
              size={30}
              color={"green"}
            />
            <BtnImage
              name="alarm-outline"
              title="Liên hệ"
              size={30}
              color={"green"}
            />
          </View>
        </View>
        <View style={styles.mainFeature}>
          <BtnImage title="Mua hàng" size={30} color={"green"} />
          <BtnImage title="Ưu đãi" size={30} color={"green"} />
          <BtnImage title="Quyền lợi thành viên" size={30} color={"green"} />
          <BtnImage title="Lịch sử mua hàng" size={30} color={"green"} />
        </View>
      </View>
    </View>
  );
}

export default TrangChuScreen;
