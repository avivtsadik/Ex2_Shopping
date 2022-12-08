import React, {createContext, useContext, useMemo, useState} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AppBar from "./AppBar";
import {Grid} from "@mui/material";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {ProductType} from "@services/productsManager";
import {Map} from 'immutable'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
});

interface CartContextType {
    cartProducts: Map<string, ProductType>
    setCartProducts: (newMap: Map<string, ProductType>) => void
}

export const cartContext = createContext<CartContextType>({
    cartProducts: Map(),
    setCartProducts: (Map) => {}
});

const App = () => {

    const [cartProducts, setCartProducts] = useState<Map<string, ProductType>>(Map());

    const contextValue = useMemo<CartContextType>(() => ({
        cartProducts,
        setCartProducts
    }), [cartProducts])


    return (
        <BrowserRouter>
            <cartContext.Provider value={contextValue}>
                <AppBar/>
                <Grid>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                    </Routes>
                </Grid>
            </cartContext.Provider>
        </BrowserRouter>
    );
};

export default App;
