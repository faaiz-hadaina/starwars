import logo from "./logo.jpg";
import "./App.css";
import BasicSelect from "./components/select";
import { Box } from "@mui/material";
import DataTable from "./components/table";
import Crawl from "./components/crawl";
import { useSelector, useDispatch } from "react-redux";
import { clearMovie } from "./redux/actions/clearmovie";

function App() {
  const characterUrls = useSelector(
    (state) => state?.movieReducer?.selectedMovie?.characters || []
  );
  const dispatch = useDispatch();
  const handleGoBack = () => {
    dispatch(clearMovie());
  };
  return (
    <div className="App">
      {characterUrls.length > 0 && (
        <p
          style={{
            padding: "20px",
            textAlign: "left",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={handleGoBack}
        >
          Go Back
        </p>
      )}
      {characterUrls.length < 1 && (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      )}
      <BasicSelect />
      <Box>
        <Crawl />
      </Box>
      {characterUrls.length > 0 && <DataTable />}
    </div>
  );
}

export default App;
