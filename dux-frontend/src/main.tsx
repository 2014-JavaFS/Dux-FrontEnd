import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import DuckList from "./components/duck-list.tsx";
import Register from "./components/register.tsx";
import User from "./components/user-info.tsx";
import "./index.css";
import Cart from "./pages/Cart.tsx";
import Navbar from "./components/navbar.tsx";
import LoginBox from "./components/login.tsx";

{
  //19 is hardcoded. 23 is hardcoded
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />
          <Route path="login" element={<LoginBox />} />
          <Route path="users/profile" element={<User username="user1" />} />
          <Route path="users/inventory" />
          <Route path="ducks" element={<DuckList />} />
          <Route path="users/register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
