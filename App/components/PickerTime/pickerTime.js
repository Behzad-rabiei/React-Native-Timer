import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Picker } from "react-native";

class PickerTime extends Component {
  render() {
    return (
      <View>
        <Picker />
        <Picker />
      </View>
    );
  }
}

const mapStateToProps = state => {};
export default connect(mapStateToProps)(PickerTime);
