import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/header";
import NotFound from "./layout/notFound";
import Home from "./pages/home";
import Cart from "./pages/cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
