import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Picker, Text } from "react-native";
import { AVAILABLE_ITEMS } from "./func";
import { getMinutes, getSeconds } from "../../actions/index";
import styles from "./styles";

class PickerTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: "",
      sec: ""
    };
  }

  render() {
    const { min, sec } = this.state;
    const { dispatch } = this.props;
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={min}
          onValueChange={item => {
            const minutes = parseInt(item, 10);
            dispatch(getMinutes(minutes));
            this.setState({
              min: item
            });
          }}
        >
          {AVAILABLE_ITEMS.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>min</Text>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={sec}
          onValueChange={item => {
            const seconds = parseInt(item, 10);
            dispatch(getSeconds(seconds));
            this.setState({
              sec: item
            });
          }}
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
