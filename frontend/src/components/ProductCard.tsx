import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Button, CardContent, Typography } from "@mui/material";
import { ProductType } from "@services/productsManager";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

interface ProductCardProps {
  product: ProductType;
  onShowMore: (product: ProductType) => void;
}

export const ProductCard = ({ product, onShowMore }: ProductCardProps) => {
  const { productName, imagePrimary, price } = product;

  return (
    <Card sx={{ boxShadow: 6 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {productName.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={
          <Button size="small" onClick={() => onShowMore(product)}>
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
