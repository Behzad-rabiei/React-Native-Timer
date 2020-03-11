import { CHANGE_BUTTON_STATUS } from "../actions/actionsType";

const initalState = {
  buttonStatus: "ON"
};

const rootReducer = (state = initalState, actions) => {
  switch (actions.type) {
    case CHANGE_BUTTON_STATUS: {
      return {
        ...state,
        buttonStatus: actions.value
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
