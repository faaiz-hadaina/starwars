import { GET_PEOPLE_SUCCESS } from "../types";

const peopleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return { ...state, people: action.payload };
    default:
      return state;
  }
};
export default peopleReducer;
