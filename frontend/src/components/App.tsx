import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Cart from "./Cart";
import AppBar from "./AppBar";

const App = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
