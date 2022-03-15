import { actionTypes } from "./action";

export const initialState = {
  info: null,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHECKOUT_INFO:
      return {
        ...state,
        ...{ info: action.info },
      };
    default:
      return state;
  }
};
