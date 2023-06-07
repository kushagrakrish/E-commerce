import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import SuccessPage from "./components/Success/Success";
import AppContext from "./utils/context";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:id' element={<Category />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/successPage' element={<SuccessPage />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
};

export default App;

// 3ccf2d3b00c0e024b112cfc8e0af864e16596e2508a032fc1c6b5f00d67e485d241340813c4e14274f44667dcf12c2145e7a55ee615e645eba6bdab4f82c4eb1b78a61e921cdc8087a7d63051f212569e9ad217b03dcf029237de9cfd1ac2419c4f0b118ab0ef55fb3a692254812c9276448ace033cc62b3aede7feff8d2ed39
