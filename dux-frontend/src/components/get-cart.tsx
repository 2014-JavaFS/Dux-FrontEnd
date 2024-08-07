import { useEffect, useState } from "react";
import { duxServer } from "../common/dux-server";

// probably using a direct input Id for now but need to be auto getting this
// id from the persisted id of the logged in user from a context object probably
export default function GetCart({ userId }) {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    duxServer
      .get(`/orders/cart?userId=${userId}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [userId]);

  if (error) return <div>Error: {error}, so no meep merp</div>;
  if (!cart) return <div>no</div>;

  return (
    <>
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
