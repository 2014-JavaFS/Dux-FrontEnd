
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import DuckList from "./components/duck-list.tsx";
import Cart from "./pages/Cart.tsx";
import User from "./components/user-info.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/users/profile' element={<User username='user1'/>} />
        <Route path='/users/inventory' />
        <Route path="/" element={<App />} />
        <Route path="/ducks" element={<DuckList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
