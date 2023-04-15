// styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    height: 242,
    width: "100%",
    backgroundColor: "#007aff",
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  account: {
    height: 70,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    marginBottom: 5,
  },
  member: {
    height: 160,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  member__point: {
    height: 47,
  },
  member__feature: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
  },
  member__item: {
    alignItems: "center",
    paddingVertical: 10,
  },
  mainFeature: {
    height: 400,
    marginTop: 15,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexWrap: "wrap",
  },
});

export default styles;
