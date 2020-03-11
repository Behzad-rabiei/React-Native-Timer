import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { changeStartButton } from "../../actions/index";

class StartButton extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/require-default-props
    dispatch: PropTypes.func,
    // eslint-disable-next-line react/require-default-props
    startButtonStatus: PropTypes.bool
  };

  handlePress = () => {
    const { dispatch, startButtonStatus } = this.props;
    if (startButtonStatus === true) {
      dispatch(changeStartButton(false));
    } else if (startButtonStatus === false) {
      dispatch(changeStartButton(true));
    }
  };

  render() {
    const { startButtonStatus } = this.props;
    return (
      <View>
        {startButtonStatus ? (
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

const mapStateToProps = state => {
  const { startButtonStatus } = state;
  return {
    startButtonStatus
  };
};
export default connect(mapStateToProps)(StartButton);
