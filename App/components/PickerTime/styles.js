import { Platform } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const style = EStyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  picker: {
    width: 50,
    marginHorizontal: 10,
    ...Platform.select({
      android: {
        color: "$white",
        backgroundColor: "$black",
        margin: 30
      }
    })
  },
  pickerItem: {
    fontSize: 30,
    color: "$white",
    ...Platform.select({
      android: {}
    })
  }
});

export default style;
