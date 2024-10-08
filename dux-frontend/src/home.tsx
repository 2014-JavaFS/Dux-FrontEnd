import { useRef, useState } from "react";
import "./home.css";
import Duck from "./components/duck-info";
import DuckList from "./components/duck-list";
import GetCart from "./components/get-cart";
//import User from "./components/user-info";
import LoginBox from "./components/login";

function Home() {
  //const username = "user2";
  //const duckId = 5;
  //const orderId = 4;

  const [duckName, setDuckName] = useState("pirate");
  const duckNameInput = useRef(null);
  function handleDuckClick() {
    setDuckName(duckNameInput.current.value);
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
                <input type="text" ref={duckNameInput}></input>
                <button onClick={handleDuckClick}>search by duck name</button>
              </td> 
            </tr>
            <tr>
              <td>
                <Duck name={duckName} />
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
