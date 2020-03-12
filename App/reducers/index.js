import { CHANGE_BUTTON_STATUS, MINUS_SECONDS } from "../actions/actionsType";

const initalState = {
  buttonStatus: "start",
  remainingSeconds: 20
};

const rootReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case CHANGE_BUTTON_STATUS: {
      return {
        ...state,
        buttonStatus: actions.value
      };
    }
    case MINUS_SECONDS: {
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
