import * as types from "../../types";
import { Client } from "../../../services/client/index";

export const getMovies = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.ACTION_START });

    const response = await Client({
      method: "GET",
      path: `films`
    });

    const responseData = response.data.results.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );

    dispatch({ type: types.ACTION_SUCCESS });
    dispatch({ type: types.GET_MOVIES_SUCCESS, payload: responseData });
  } catch (e) {
    console.log(e);

    const { message } = e.response.data;
    dispatch({ type: types.ACTION_FAILED, message });
  }
};
