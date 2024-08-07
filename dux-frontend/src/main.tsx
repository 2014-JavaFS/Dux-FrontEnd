import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import DuckList from "./components/duck-list.tsx";
import GetCart from "./components/get-cart.tsx";
import Register from './components/register.tsx';
import User from './components/user-info.tsx';
import "./index.css";

{
  //19 is hardcoded. 23 is hardcoded
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/users/profile' element={<User username='user1'/>} />
        <Route path='/users/inventory' />
        <Route path="/ducks" element={<DuckList />} />
        <Route path="/cart" element={<GetCart userId={2} />} />
        <Route path='/users/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
