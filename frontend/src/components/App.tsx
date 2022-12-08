import React, {createContext, useContext} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AppBar from "./AppBar";
import {Grid} from "@mui/material";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {ProductType} from "@services/productsManager";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
});

export const cartContext = createContext<ProductType[]>([]);

const App = () => {

    return (
        <BrowserRouter>
            <AppBar/>
            <Grid>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </Grid>
        </BrowserRouter>
    );
};

export default App;
