import { Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const screen = Dimensions.get("window");

const style = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center" // horizontal
  },
  buttonStart: {
    borderWidth: 10,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    borderColor: "$orange",
    justifyContent: "center", // vertical
    alignItems: "center" // horizontal
  },
  buttonCancel: {
    borderWidth: 8,
    width: screen.width / 2.5,
    height: screen.width / 2.5,
    borderRadius: screen.width / 2.5,
    borderColor: "$orange",
    justifyContent: "center", // vertical
    alignItems: "center", // horizontal
    marginHorizontal: 10
  },
  buttonPause: {
    borderWidth: 8,
    width: screen.width / 2.5,
    height: screen.width / 2.5,
    borderRadius: screen.width / 2.5,
    borderColor: "$orange",
    justifyContent: "center", // vertical
    alignItems: "center", // horizontal
    marginHorizontal: 10
  },
  buttonResume: {
    borderWidth: 8,
    width: screen.width / 2.5,
    height: screen.width / 2.5,
    borderRadius: screen.width / 2.5,
    borderColor: "$orange",
    justifyContent: "center", // vertical
    alignItems: "center", // horizontal
    marginHorizontal: 10
  },
  textStart: {
    fontSize: 45,
    color: "$white"
  },
  textCancel: {
    fontSize: 30,
    color: "$white"
  },
  textPause: {
    fontSize: 30,
    color: "$white"
  },
  textResume: {
    fontSize: 30,
    color: "$white"
  }
});

export default style;
