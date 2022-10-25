import * as types from "../../types";
import { Client } from "../../../services/client/index";

export const getMovie = (url) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ACTION_START });
    let movieUrl = url.split("/api/")[1];
    const response = await Client({
      method: "GET",
      path: movieUrl
    });
    const responseData = response.data;
    dispatch({ type: types.ACTION_SUCCESS });
    dispatch({ type: types.GET_MOVIE_SUCCESS, payload: responseData });
  } catch (e) {
    console.log(e);

    const { message } = e.response.data;
    dispatch({ type: types.ACTION_FAILED, message });
  }
};
