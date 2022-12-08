import React, {useState} from "react";
import {ProductCard} from "@components/ProductCard";
import {products, ProductType} from "@services/productsManager";
import {Grid} from "@mui/material";

const HomePage = () => {
    return (
        <Grid container sx={{mt: 10}} spacing={6}>
            {products.map((product: ProductType, key) => (
                <Grid key={key} item xl={3} md={4} xs={6}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default HomePage;
