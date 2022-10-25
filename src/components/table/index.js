import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../redux/actions/getpeople";
import loader from "../../assets/loader.gif";
import { Client } from "../../services/client";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import DropDown from "../dropdown";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 140 },
  {
    field: "height",
    headerName: "Height",
    width: 180
  },
  {
    field: "gender",
    headerName: "G",
    width: 80
  }
];

export default function DataTable() {
  const [characters, setCharacters] = React.useState([]);
  const [selectedGenderData, setSelectedGenderData] = React.useState("All");
  const loading = useSelector((state) => state?.loadingReducer?.loading);
  const [fetchingTableData, setFetchingTableData] = React.useState(false);
  const characterUrls = useSelector(
    (state) => state?.movieReducer?.selectedMovie?.characters
  );
  const allCharacters = React.useRef([]);

  const handleFilter = (gender) => {
    let genderSymbol;
    switch (gender) {
      case "Male":
        genderSymbol = "M";
        break;
      case "Female":
        genderSymbol = "F";
        break;
      default:
        genderSymbol = "All";
        break;
    }
    if (genderSymbol === "All") {
      setCharacters(allCharacters.current);
      return;
    }
    let filtered = allCharacters.current.filter(
      (data) => data.gender === genderSymbol
    );
    setCharacters(filtered);
  };
  const calcSumOFHeight = (height) => {
    const ft = parseInt(height * 0.0328084);
    const inches = ((height * 0.0328084 - ft) * 0.393700788).toFixed(2);
    const heightText = `${height} cm (${ft}ft/${inches}in)`;
    return heightText;
  };

  React.useEffect(() => {
    (async () => {
      setFetchingTableData(true);
      const characters = [];
      for (let character of characterUrls) {
        let characterUrl = character.split("/api/")[1]; //https://swapi.dev/api/films/1/
        const response = await Client({
          method: "GET",
          path: characterUrl
        });
        characters.push(response.data);
      }
      let sumOfHeights = 0;
      const mapped = characters.map((item, index) => {
        if (Number(item.height) > 0) {
          sumOfHeights += Number(item.height);
        }

        return {
          ...item,
          id: index,
          height: item.height + "cm",
          gender:
            item.gender === "male"
              ? "M"
              : item.gender === "female"
              ? "F"
              : "n/a"
        };
      });
      allCharacters.current = [
        ...mapped,
        {
          id: mapped.length + 1,
          name: mapped.length + 1,
          height: calcSumOFHeight(Number(sumOfHeights))
        }
      ];
      setCharacters([
        ...mapped,
        {
          id: mapped.length,
          name: "Total",
          height: calcSumOFHeight(Number(sumOfHeights))
        }
      ]);
      setFetchingTableData(false);
    })();
  }, [characterUrls]);

  const genderData = [
    { url: "Male", title: "Male" },
    { url: "Female", title: "Female" },
    { url: "All", title: "All" }
  ];
  const handleChange = (event) => {
    setSelectedGenderData(event.target.value);
    handleFilter(event.target.value);
  };

  return (
    <div
      style={{
        height: 600,
        padding: "12px",
        width: "100%",
        backgroundColor: "#fff"
      }}
    >
      <div style={{ width: "120px", marginLeft: "14px", marginBottom: "16px" }}>
        <DropDown
          value={selectedGenderData}
          data={genderData}
          handleChange={handleChange}
        />
      </div>
      {loading === true || fetchingTableData === true ? (
        <img
          alt="an img"
          src={loader}
          style={{
            display: "block",
            margin: "auto",
            objectFit: "cover",
            width: 100,
            height: 100
          }}
        />
      ) : (
        <DataGrid
          style={{ color: "#000", backgroundColor: "#fff" }}
          rows={characters}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
