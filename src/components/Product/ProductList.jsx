import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContext';
import MediaCard from '../Product/ProductCard';

import ProductCard from '../Product/ProductCard';

const ProductList = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container spacing={6}>
      {products ? (
        products.map((item) => (
          <Grid item>
            {/* <ProductCard item={item} key={item.id} /> */}
            <MediaCard item={item} key={item.id} />
          </Grid>
        ))
      ) : (
        <>
          <h2>..Loading</h2>
        </>
      )}
    </Grid>
  );
};

export default ProductList;
