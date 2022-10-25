import {
  GET_MOVIES_SUCCESS,
  GET_MOVIE_SUCCESS,
  CLEAR_MOVIE_SUCCESS,
} from "../types";

const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.payload };

    case GET_MOVIE_SUCCESS:
      return { ...state, selectedMovie: action.payload };
    case CLEAR_MOVIE_SUCCESS:
      return { ...state, selectedMovie: {} };

    default:
      return state;
  }
};
export default movieReducer;
