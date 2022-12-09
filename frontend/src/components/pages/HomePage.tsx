import React, { useState } from "react";
import { ProductCard } from "@components/ProductCard";
import { ProductType } from "@services/productsManager";
import { Grid, Typography } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

const getAllItems = gql`
  query getAllItems {
    item {
      id
      storeName
      productName
      desc
      price
      imagePrimary
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(getAllItems, {});
  return (
    <Grid container sx={{ mt: 10 }} spacing={6}>
      {!loading ? (
        data.item.map((product: ProductType, key: any) => (
          <Grid key={key} item xl={3} md={4} xs={6}>
            <ProductCard product={product} isAddable={true} />
          </Grid>
        ))
      ) : (
        <Typography variant="h4">Loading...</Typography>
      )}
    </Grid>
  );
};

export default HomePage;
