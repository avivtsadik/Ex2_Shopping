import {
  Button,
  CardContent,
  Dialog,
  DialogProps,
  Grid,
  Typography,
} from "@mui/material";
import { products, ProductType } from "@services/productsManager";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

interface ProductDialogProps extends DialogProps {
  product?: ProductType;
}

export const ProductDialog = ({
  product,
  ...dialogProps
}: ProductDialogProps) => {
  const { productName, price, desc, imagePrimary, imageSecondary, storeName } =
    product || products[0];

  return (
    <Dialog {...dialogProps}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {productName.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={productName}
          subheader={`Price: ${price}₪`}
        />
        <CardContent>
          <Typography>
            Description:
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </Typography>
        </CardContent>
        <Grid container>
          <Grid item xs>
            <CardMedia
              component="img"
              height="194"
              image={imagePrimary}
              alt="Paella dish"
            />
          </Grid>
          <Grid item xs>
            <CardMedia
              component="img"
              height="194"
              image={imageSecondary}
              alt="Paella dish"
            />
          </Grid>
        </Grid>
        <CardContent>
          <Typography>
            Store name:
            <Typography variant="body2" color="text.secondary">
              {storeName}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Dialog>
  );
};
