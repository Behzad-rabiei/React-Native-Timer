import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text } from "react-native";
import { changePauseButtonStatus } from "../../actions/index";
import styles from "./styles";

class Pause extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Pause",
      buttonStyle: styles.buttonPause,
      textStyle: styles.textPause
    };
  }

  handlePress = () => {
    const { dispatch, PauseButtonStatus } = this.props;
    if (PauseButtonStatus === "pause") {
      this.setState({
        buttonText: "Resume",
        buttonStyle: styles.buttonResume,
        textStyle: styles.textResume
      });
      dispatch(changePauseButtonStatus("resume"));
    } else {
      this.setState({
        buttonText: "Pause",
        buttonStyle: styles.buttonPause,
        textStyle: styles.textPause
      });
      dispatch(changePauseButtonStatus("pause"));
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
  const { PauseButtonStatus } = state;
  return {
    PauseButtonStatus
  };
};
export default connect(mapStateToProps)(Pause);
