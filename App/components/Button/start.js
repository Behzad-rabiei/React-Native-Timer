import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import {
  changeStartButtonStatus,
  setRemainingSeconds
} from "../../actions/index";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Start",
      buttonStyle: styles.buttonStart,
      textStyle: styles.textStart
    };
  }

  handlePress = () => {
    const { dispatch, StartButtonStatus } = this.props;
    if (StartButtonStatus === "start") {
      this.setState({
        buttonText: "Cancel",
        buttonStyle: styles.buttonCancel,
        textStyle: styles.textCancel
      });
      dispatch(changeStartButtonStatus("cancel"));
      dispatch(setRemainingSeconds());
    } else {
      this.setState({
        buttonText: "Start",
        buttonStyle: styles.buttonStart,
        textStyle: styles.textStart
      });
      dispatch(changeStartButtonStatus("start"));
    }
  };

  render() {
    const { buttonText, buttonStyle, textStyle } = this.state;
    return (
      <TouchableOpacity style={buttonStyle} onPress={this.handlePress}>
        <Text style={textStyle}>{buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => {
  const { StartButtonStatus } = state;
  return {
    StartButtonStatus
  };
};
export default connect(mapStateToProps)(Button);
