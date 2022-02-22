import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

import { useProducts } from '../../contexts/productContext';

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  });

  return (
    <Box>
      <center variant="h6" gutterBottom>
        ADMIN PANEL
      </center>

      <Grid item xs={12} md={6} sx={{ margin: '10vh auto' }}>
        <form>
          <TextField
            fullWidth
            id="outlined-basic"
            label="NAME"
            variant="outlined"
            name="name"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="DESCRIPTION"
            variant="outlined"
            name="description"
          />{' '}
          <TextField
            fullWidth
            id="outlined-basic"
            label="PRICE"
            variant="outlined"
            name="price"
          />{' '}
          <TextField
            fullWidth
            id="outlined-basic"
            label="PICTURE"
            variant="outlined"
            name="picture"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="TYPE"
            variant="outlined"
            name="type"
          />
          <Button variant="outlined" size="large" fullWidth>
            CREATE PRODUCT
          </Button>
        </form>
      </Grid>
    </Box>
  );
};

export default AddProduct;
