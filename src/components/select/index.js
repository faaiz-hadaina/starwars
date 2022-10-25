import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../redux/actions/getmovies";
import { getMovie } from "../../redux/actions/getmovie";
import DropDown from "../dropdown";

export default function BasicSelect() {
  const [selectedMovie, setSelectedMovie] = React.useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state?.movieReducer?.movies || []);
  const handleChange = (event) => {
    setSelectedMovie(event.target.value);
    dispatch(getMovie(event.target.value));
  };

  React.useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <DropDown
        value={selectedMovie}
        data={movies}
        msg="Choose a Movie"
        handleChange={handleChange}
      />
    </div>
  );
}
