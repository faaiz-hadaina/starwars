import movieReducer from "./moviereducer";
import loadingReducer from "./loadingreducer.js";
import peopleReducer from "./peoplereducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  movieReducer,
  loadingReducer,
  peopleReducer,
});

export default allReducers;
