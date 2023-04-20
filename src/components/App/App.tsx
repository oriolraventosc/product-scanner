/* eslint-disable react/style-prop-object */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import ProductPage from "../../pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
