import { CHANGE_BUTTON_STATUS } from "./actionsType";

export const changeStartButton = status => {
  return {
    type: CHANGE_BUTTON_STATUS,
    value: status
  };
};
