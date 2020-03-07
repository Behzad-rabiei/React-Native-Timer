import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const screen = Dimensions.get("window");

const style = EStyleSheet.create({
  button: {
    borderWidth: 10,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    borderColor: "$startButton",
    justifyContent: "center", // vertical
    alignItems: "center" // horizontal
  },
  text: {
    fontSize: 45,
    color: "$startText"
  }
});

export default style;
