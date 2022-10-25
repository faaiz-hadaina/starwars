import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
// import {clearError} from "../"

const SnackBar = () => {
  const message = useSelector((state) => state?.movieReducer?.movies || []);
  const handleClose = () => {
    // dispatch(clearError());
  };
  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
