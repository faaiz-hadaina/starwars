import * as types from "../../types";
import { Client } from "../../../services/client/index";

export const getPeople = (data) => async (dispatch, getState) => {
  try {
    const characters = [];
    dispatch({ type: types.ACTION_START });
    for (let character of data) {
      let characterUrl = character.split("/api/")[1];
      const response = await Client({
        method: "GET",
        path: characterUrl
      });
      characters.push(response.data);
    }
    dispatch({ type: types.ACTION_SUCCESS });
    dispatch({ type: types.GET_PEOPLE_SUCCESS, payload: characters });
  } catch (e) {
    console.log(e);

    const { message } = e.response.data;
    dispatch({ type: types.ACTION_FAILED, message });
  }
};
