import * as types from "../../types";
// import { getPeople } from "../getpeople";

export const clearMovie = (url) => async (dispatch, getState) => {
  dispatch({ type: types.CLEAR_MOVIE_SUCCESS });
};
