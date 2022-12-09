import React, {useContext, useState} from "react";
import {ProductType} from "@services/productsManager";
import {Alert, Grid, Snackbar, TextField} from "@mui/material";
import {ProductCard} from "@components/ProductCard";
import {CartContext} from "@components/App";
import Button from "@mui/material/Button";
import {Map} from "immutable";
import Typography from "@mui/material/Typography";
import {gql, useMutation, useQuery} from "@apollo/client";

const saveCart = gql`
  mutation MakeOrder($orderData: OrderData) {
    makeOrder(orderData: $orderData)
  }
`;

const CartPage = () => {
    const {cartProducts, setCartProducts} = useContext(CartContext);
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();

    const [addItem] = useMutation(saveCart, {
        onCompleted() {
            setCartProducts(Map());
            setSnackBarOpen(true);
        },
    });
    const onOrderItems = () => {
        if (firstName && lastName)
            addItem({
                variables: {
                    orderData: {
                        orderedItems: Array.from(cartProducts.keys()),
                        firstName: firstName,
                        lastName: lastName,
                    },
                },
            });
    };

    return (
        <>
            {cartProducts.size != 0 ? (
                <>
                    <Grid container sx={{mt: 10}} spacing={3}>
                        <Grid item>
                            <Button variant="contained" onClick={onOrderItems}>
                                Order items
                            </Button>
                        </Grid>
                        <Grid item>
                            <TextField value={firstName} variant='outlined' label='שם פרטי'
                                       onChange={e => setFirstName(e.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField value={lastName} variant='outlined' label='שם משפחה'
                                       onChange={e => setLastName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} sx={{mt: 2}}>
                        {Array.from(cartProducts.values()).map(
                            (product: ProductType, key) => (
                                <Grid key={key} item xl={3} md={4} xs={6}>
                                    <ProductCard product={product} isAddable={false}/>
                                </Grid>
                            )
                        )}
                    </Grid>
                </>
            ) : (
                <>
                    <Typography sx={{mt: 10}} variant="h4">
                        No products in the shopping cart yet...
                    </Typography>
                </>
            )}

            <Snackbar
                open={snackBarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackBarOpen(false)}
            >
                <Alert
                    onClose={() => setSnackBarOpen(false)}
                    severity="success"
                    sx={{width: "100%"}}
                >
                    Ordered!
                </Alert>
            </Snackbar>
        </>
    );
};

export default CartPage;
