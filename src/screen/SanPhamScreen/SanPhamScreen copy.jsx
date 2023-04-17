import React, { useEffect } from "react";
import { Text, View } from "react-native";
//import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

import styles from "./styles";
// https://styled-components.com/docs/basics

async function fetchData() {
  try {
    const response = await axios.get(
      "https://api.tungocvan.com/api/tracuu/thuoc/trungthau",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // setData(response.data.data);
    //console.log(response.data.data);
    //return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

function SanPhamScreen(props) {
  const [data, setData] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      console.log("SanPhamScreen");
    }, [])
  );

  useEffect(() => {
    fetchData();
  }, []);
  //console.log(data.data);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            alignContent: "space-between",
          },
        ]}
      >
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
      </View>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            alignContent: "space-between",
          },
        ]}
      >
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
      </View>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            alignContent: "space-between",
          },
        ]}
      >
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
        <BoxInfo color="#fff">
          <Text
            style={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Box
          </Text>
        </BoxInfo>
      </View>
    </View>
  );
}

const BoxInfo = ({ color, children, height = 50, width = "100%" }) => (
  <View style={[styles.row, { flexDirection: "column", marginHorizontal: 5 }]}>
    <View
      style={[
        styles.boxLabel,
        {
          backgroundColor: color,
          width: width,
          borderRadius: "100%",
          height: height,
          justifyContent: "space-around",
        },
      ]}
    >
      {children}
    </View>
  </View>
);
export default SanPhamScreen;
