import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const screen = Dimensions.get("window");

const style = EStyleSheet.create({
  buttonStart: {
    borderWidth: 10,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    borderColor: "$orange",
    justifyContent: "center", // vertical
    alignItems: "center" // horizontal
  },
  buttonStop: {
    borderColor: "$red"
  },
  textStart: {
    fontSize: 45,
    color: "$white"
  },
  textStop: {
    fontSize: 45,
    color: "$white"
  }
});

export default style;
