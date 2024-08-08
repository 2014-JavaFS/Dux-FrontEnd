import { useRef, useState } from "react";

import "./styles.css";
import Duck from "./components/duck-info";
import DuckList from "./components/duck-list";
import GetCart from "./components/get-cart";
import Navbar from "./components/navbar";
import Order from "./components/order-info";
import User from "./components/user-info";


function App() {
  //const username = "user2";
  //const duckId = 5;
  //const orderId = 4;

  const [duckId, setDuckId] = useState(1);
  const duckIdInput = useRef(null);
  function handleDuckClick() {
    setDuckId(duckIdInput.current.value);
  }

  const [orderId, setOrderId] = useState(1);
  const orderIdInput = useRef(null);
  function handleOrderClick() {
    setOrderId(orderIdInput.current.value);
  }

  const [username, setUsername] = useState("user1");
  const usernameInput = useRef(null);
  function handleUserClick() {
    setUsername(usernameInput.current.value);
  }

  // FIXME: no idea why but once an invalid input is given it completely
  // breaks and will not allow any additional input, even if the following
  // input is perfectly valid hopefully might just get resolved when moving
  // stuff around when actually designing pages.

  return (
    <>
     
  <Navbar />
  <div className="main-container">
    <div class="item1">Dux!</div>
    <table className="search-table">
      <tbody>
        <tr className="search-row">
          <td className="search-cell">
            <input type="text" ref={duckIdInput} className="search-input" />
            <button onClick={handleDuckClick} className="search-button">Duck ID</button>
          </td>
          <td className="search-cell">
            <input type="text" ref={orderIdInput} className="search-input" />
            <button onClick={handleOrderClick} className="search-button">Search by order id</button>
          </td>
          <td className="search-cell">
            <input type="text" ref={usernameInput} className="search-input" />
            <button onClick={handleUserClick} className="search-button">Search by username</button>
          </td>
        </tr>
        <tr className="content-row">
          <td className="content-cell">
            <Duck id={duckId} />
          </td>
          <td className="content-cell">
            <Order id={orderId} />
          </td>
          <td className="content-cell">
            <User username={username} />
          </td>
        </tr>
      </tbody>
    </table>
    <DuckList />
    <div className="cart-container">
      <GetCart userId={orderId} />
    </div>
  </div>
</>
  );
}

export default App;
