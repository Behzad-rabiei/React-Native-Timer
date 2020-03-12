import React, { Component } from "react";
import { View, Picker } from "react-native";
import styles from "./styles";

class PickerTime extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Picker style={styles.minutes} />
        <Picker style={styles.seconds} />
      </View>
    );
  }
}

export default PickerTime;
