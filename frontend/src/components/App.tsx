import React, { useState } from "react";
import { ProductCard } from "@components/ProductCard";
import { products, ProductType } from "@services/productsManager";
import {Grid, Typography} from "@mui/material";
import { grey } from "@mui/material/colors";
import { ProductDialog } from "./ProductDialog";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [productSelected, setProductSelected] = useState<ProductType>();

  const onItemSelected = (product: ProductType) => {
    setIsDialogOpen(true);
    setProductSelected(product);
  };

  return (
    <>
      <Typography variant='h2'>Idan And Aviv Store</Typography>
      <Grid container sx={{ bgcolor: grey["400"] }} spacing={10}>
        {products.map((product: ProductType, key) => (
          <Grid key={key} item xl={3} md={4} xs={6}>
            <ProductCard product={product} onShowMore={onItemSelected} />
          </Grid>
        ))}
        <ProductDialog
          fullWidth
          maxWidth="sm"
          product={productSelected}
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        ></ProductDialog>
      </Grid>
    </>
  );
};

export default App;
