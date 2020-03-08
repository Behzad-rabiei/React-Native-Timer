import React, { Component } from "react";
import { Text } from "react-native";
import styles from "./styles";

class TimeText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingSeconds: 5
    };
  }

  getRemaining = time => {
    const minutes = Math.floor(time / 60);
    const secondes = time - minutes * 60;
    return {
      minutes: this.formatNumber(minutes),
      secondes: this.formatNumber(secondes)
    };
  };

  formatNumber = number => `0${number}`.slice(-2);

  render() {
    const { secondes, minutes } = this.getRemaining(
      this.state.remainingSeconds
    );
    const time = `${minutes}:${secondes}`;
    return <Text style={styles.text}>{time}</Text>;
  }
}

export default TimeText;
