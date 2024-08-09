import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home.tsx";
import DuckList from "./components/duck-list.tsx";
import Register from "./components/register.tsx";
import User from "./components/user-info.tsx";
import "./index.css";
import Cart from "./pages/Cart.tsx";
import Navbar from "./components/navbar.tsx";
import LoginBox from "./components/login.tsx";
import UserContext from "./contexts/userContext.tsx";
import MyDuckList from "./components/my-duck-list.tsx";

{
  //19 is hardcoded. 23 is hardcoded
}
export default function App() {
  const [user, setUser] = useState(null);

  const userLogin = (userData) => {
    setUser(userData);
  };

  const userLogout = () => {
    setUser(null);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <UserContext.Provider value={{ user, userLogin, userLogout }}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginBox />} />
              <Route path="users/profile" element={<User />} />
              <Route path="users/inventory" element={<MyDuckList />} />
              <Route path="ducks" element={<DuckList />} />
              <Route path="users/register" element={<Register />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
