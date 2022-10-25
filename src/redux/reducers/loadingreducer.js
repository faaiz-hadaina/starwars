import {
  ACTION_START,
  ACTION_FAILED,
  ACTION_CLEAR,
  ACTION_SUCCESS,
} from "../types";
const loadingReducer = (state = { loading: false, error: null }, action) => {
  switch (action.type) {
    case ACTION_START:
      return Object.assign({}, state, { message: "", loading: true });

    case ACTION_FAILED:
      return Object.assign({}, state, {
        message: action.payload,
        loading: false,
      });

    case ACTION_CLEAR:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
        message: "",
      });
    case ACTION_SUCCESS:
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
        message: "",
      });

    default:
      return state;
  }
};
export default loadingReducer;
