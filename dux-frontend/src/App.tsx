import { useRef, useState } from "react";
import "./App.css";
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
      <Navbar/>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" ref={duckIdInput}></input>
              <button onClick={handleDuckClick}>search by duck id</button>
            </td>
            <td>
              <input type="text" ref={orderIdInput}></input>
              <button onClick={handleOrderClick}>search by order id</button>
            </td>
            <td>
              <input type="text" ref={usernameInput}></input>
              <button onClick={handleUserClick}>search by username</button>
            </td>
          </tr>
          <tr>
            <td>
              <Duck id={duckId} />
            </td>
            <td>
              <Order id={orderId} />
            </td>
            <td>
              <User username={username} />
            </td>
          </tr>
        </tbody>
      </table>
      <DuckList />
      <div>
        {//currently using the same input as orderId for easy testing
        }
        <GetCart userId = {orderId}/>
      </div>
    </>
  );
}

export default App;
