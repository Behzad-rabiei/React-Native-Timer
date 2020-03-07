import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

class StartButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    );
  }
}
export default StartButton;
