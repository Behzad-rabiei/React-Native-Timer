import React, { Component } from "react";
import { Text } from "react-native";
import styles from "./styles";

class TimeText extends Component {
  render() {
    return <Text style={styles.text}>00:07</Text>;
  }
}

export default TimeText;
