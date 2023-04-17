/* eslint-disable react/style-prop-object */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

export default App;
