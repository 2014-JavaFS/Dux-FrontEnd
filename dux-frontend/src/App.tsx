import "./App.css";
import Duck from "./components/duck-info";
import DuckList from "./components/duck-list";
import Order from "./components/order-info";
import User from "./components/user-info";

function App() {
  const username = "user2";
  const duckId = 5;
  const orderId = 4;

  return (
    <>
      <table>
        <tbody>
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
    </>
  );
}

export default App;
