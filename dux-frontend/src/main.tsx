import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import DuckList from "./components/duck-list.tsx";
import GetCart from "./components/get-cart.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ducks" element={<DuckList />} />
        <Route path="/cart" element={<GetCart userId={2} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
