import React from "react";

import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = ({ value, data, msg, handleChange }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          style={{ backgroundColor: "rgb(234 179 8)" }}
          onChange={handleChange}
        >
          {msg && (
            <MenuItem disabled value="Choose a Movie">
              <em>{msg}</em>
            </MenuItem>
          )}
          {data.map((gd, index) => (
            <MenuItem key={index} value={gd.url}>
              {gd.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropDown;
