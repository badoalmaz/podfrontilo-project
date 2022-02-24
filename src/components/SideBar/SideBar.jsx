import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from '@mui/material';

import React from 'react';
import { useProducts } from '../../contexts/ProductContext';

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <FormLabel>TYPE</FormLabel>

          <RadioGroup onChange={(e) => fetchByParams('type', e.target.value)}>
            <FormControlLabel
              value="cultural"
              control={<Radio />}
              label="cultural"
            />
            <FormControlLabel
              value="medical"
              control={<Radio />}
              label="medical"
            />
            <FormControlLabel
              value="culinary"
              control={<Radio />}
              label="culinary"
            />
            <FormControlLabel value="all" control={<Radio />} label="all" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
