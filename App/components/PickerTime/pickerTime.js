import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Picker, Text } from "react-native";
import { AVAILABLE_ITEMS } from "./func";
import styles from "./styles";

class PickerTime extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue="3"
          onValueChange={item => {}}
        >
          {AVAILABLE_ITEMS.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>min</Text>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue="3"
          onValueChange={item => {}}
        >
          {AVAILABLE_ITEMS.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>sec</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(PickerTime);
