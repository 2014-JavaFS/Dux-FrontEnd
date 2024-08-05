import "./App.css";
import Duck from "./components/Duck";
import Order from "./components/Order";
import User from "./components/User";

function App() {
  return (
    <>
      <div>
        <h1>can i display a user?</h1>
        <User />
        <p className="read-the-docs">(the answer is probably no)</p>
      </div>
      <div>
        <h1>can i display a duck?</h1>
        <Duck />
        <p className="read-the-docs">(the answer is probably no)</p>
      </div>
      <div>
        <h1>can i display an order?</h1>
        <Order />
        <p className="read-the-docs">(the answer is probably no)</p>
      </div>
    </>
  );
}

export default App;
