import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages";
import { DefaultLayout } from "./Common";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
