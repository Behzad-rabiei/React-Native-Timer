import EStyleSheet from "react-native-extended-stylesheet";

const style = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  picker: {
    width: 50
  },
  pickerItem: {
    fontSize: 30,
    color: "$white"
  }
});

export default style;
