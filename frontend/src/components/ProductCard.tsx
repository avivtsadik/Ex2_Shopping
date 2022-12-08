import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import {Button, CardContent, Typography} from "@mui/material";
import {ProductType} from "@services/productsManager";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {gql, useQuery} from "@apollo/client";
import {cartContext} from "@components/App";

const query = gql`
    
`

interface ProductCardProps {
    product: ProductType;
}

export const ProductCard = ({product}: ProductCardProps) => {
    const {productName, imagePrimary, price} = product;
    const cartProducts = useContext(cartContext);

    const onCartAdd = () => {
        if (cartProducts.findIndex(item => item.id == product.id) == -1) {
            cartProducts.push(product);
        }
    }

    return (
        <Card sx={{boxShadow: 6}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        {productName.charAt(0).toUpperCase()}
                    </Avatar>
                }
                action={
                    <Button size="small" onClick={onCartAdd}>
                        <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                }
                title={productName}
                subheader={`Price: ${price}₪`}
            />
            <CardMedia
                component="img"
                height="194"
                image={imagePrimary}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    );
};
