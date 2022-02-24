import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../NotFound/NotFound.css";
import notFound from "../assets/images/ScreenShot.png";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img className="notFoundImg" src={notFound} alt="ert"></img>
      <div className="text">
        <h1>Page is not found</h1>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          sx={{
            color: "white",
            border: "2px solid white",
          }}
        >
          BACK HOME
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
