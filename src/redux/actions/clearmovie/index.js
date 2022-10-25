import * as types from "../../types";

export const clearMovie = (url) => async (dispatch, getState) => {
  dispatch({ type: types.CLEAR_MOVIE_SUCCESS });
};
