import { useRef, useState } from "react";
import "./home.css";
import Duck from "./components/duck-info";
import DuckList from "./components/duck-list";
import GetCart from "./components/get-cart";
import Navbar from "./components/navbar";
import Order from "./components/order-info";
//import User from "./components/user-info";
import UserContext from "./contexts/userContext";
import LoginBox from "./components/login";

function Home() {
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

  // setting the user variable for the context (this will contains the user Id)
  // as well as setting two functions that will be used to manipulate the context variable 'user'

  // FIXME: no idea why but once an invalid input is given it completely
  // breaks and will not allow any additional input, even if the following
  // input is perfectly valid hopefully might just get resolved when moving
  // stuff around when actually designing pages.

  return (
    <>

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
            </tr>
          </tbody>
        </table>
        <div>
          <LoginBox></LoginBox>
        </div>
        <div>
          <GetCart />
        </div>
        <DuckList />

    </>
  );
}

export default Home;
