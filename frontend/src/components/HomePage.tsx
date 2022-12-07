import React, { useState } from "react";
import { ProductCard } from "@components/ProductCard";
import { products, ProductType } from "@services/productsManager";
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [productSelected, setProductSelected] = useState<ProductType>();

  const onItemSelected = (product: ProductType) => {
    setIsDialogOpen(true);
    setProductSelected(product);
  };

  return (
    <>
      <Grid container sx={{ mt: 10 }} spacing={6}>
        {products.map((product: ProductType, key) => (
          <Grid key={key} item xl={3} md={4} xs={6}>
            <ProductCard product={product} onShowMore={onItemSelected} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default App;
