import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    };
  }

  handlePress = () => {
    if (this.state.flag === true) {
      this.setState({
        flag: false
      });
    } else if (this.state.flag === false) {
      this.setState({
        flag: true
      });
    }
  };

  render() {
    const { flag } = this.state;

    return (
      <View>
        {flag ? (
          <TouchableOpacity
            style={styles.buttonStart}
            onPress={this.handlePress}
          >
            <Text style={styles.textStart}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.buttonStop}
            onPress={this.handlePress}
          >
            <Text style={styles.textStop}>Stop</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
export default StartButton;
