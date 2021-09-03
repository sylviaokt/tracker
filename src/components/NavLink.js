import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import Spacer from "../components/Spacer";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
