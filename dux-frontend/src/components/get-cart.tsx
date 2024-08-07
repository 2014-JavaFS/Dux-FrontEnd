import { useContext, useState } from "react";
import UserContext from "../contexts/userContext";
import { duxServer } from "../common/dux-server";
import UserContext from "../contexts/userContext";

// probably using a direct input Id for now but need to be auto getting this
// id from the persisted id of the logged in user from a context object probably

export default function GetCart({}) {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  let userIdCart;

  // this needs testing when we are able to get a user to successfully generate an order
  // and then add it to their cart
  async function getACart() {
    console.log(user);
    try {
      const axResp = await duxServer.get(`/orders/cart`, {
        headers: { userid: user },
      });
      console.log(axResp.headers.userid);
      console.log(axResp.status);
      if (axResp.status > 200 || axResp.status < 299) {
        //do something if good
        userIdCart = axResp.headers.userid;
        setCart(axResp.data);
        console.log("we in the green for cart");
      } else if (axResp.status > 300 || axResp.status < 399)
        // do something if bad
        console.log(axResp.status);
    } catch (error) {
      console.error(error);
    }
  }

  if (error) return <div>Error: {error}, so no meep merp</div>;
  if (!cart) return <div>no</div>;

  return (
    <>
      <div>
        <h2>Welcome, user id = {userIdCart}!</h2>
        <button onClick={getACart}>Show Cart</button>
      </div>
      <h3> Your Cart is displayed below</h3>
      {
        // The idea is to map the received array of orders to an array of tables that display the
        // information needed when a user is looking at their cart
      }
      {cart.map((order) => (
        <div key={order.orderId}>
          <br />
          {makeListItem(order)}
        </div>
      ))}
    </>
  );
}

function makeListItem(order) {
  return (
    <>
      <div className="card">
        <h4>
          {order.quantity}x {order.duck.name}
        </h4>
        <h5>
          {order.duck.rarity} — {order.duck.condition}
        </h5>
        <p>{order.duck.description}</p>
        <p>Seller: {order.seller.username}</p>
      </div>
    </>
  );
}
