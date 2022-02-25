import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import "./SideBar.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <RadioGroup
            className="side-bar"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <h5 className="choose-type">TYPE</h5>
            <FormControlLabel
              value="adventure"
              control={<Radio />}
              label="ADVENTURE"
            />
            <FormControlLabel
              value="cultural"
              control={<Radio />}
              label="CULTURAL"
            />
            <FormControlLabel
              value="historical"
              control={<Radio />}
              label="HISTORICAL"
            />
            <FormControlLabel
              value="nature"
              control={<Radio />}
              label="NATURE"
            />

            <FormControlLabel value="all" control={<Radio />} label="ALL" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
