import React, {useContext} from "react";
import {ProductType} from "@services/productsManager";
import {Grid} from "@mui/material";
import {ProductCard} from "@components/ProductCard";
import {cartContext} from "@components/App";

const CartPage = () => {
    const cartProducts = useContext(cartContext);

    return (
        <Grid container sx={{mt: 10}} spacing={6}>
            {cartProducts.map((product: ProductType, key) => (
                <Grid key={key} item xl={3} md={4} xs={6}>
                    <ProductCard product={product}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default CartPage;
