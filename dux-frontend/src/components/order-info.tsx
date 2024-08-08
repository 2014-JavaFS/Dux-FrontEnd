import { useEffect, useState } from "react";
import { duxServer } from "../common/dux-server";
import '../styles.css';
// "Binding element 'id' implicitly has an 'any' type.ts(7031)"
// dont know how to fix, but it seems to work anyway so... ¯\_(ツ)_/¯
export default function Order({ id }) {
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    duxServer
      .get(`/orders/${id}`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) return <div>Error: {error}, so no</div>;
  if (!order) return <div>no</div>;

  return (
    <div className="card">
      <table bgcolor="333333" align="center">
        <thead>
          <tr>
            <td>
              <h3>Order</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id:</td>
            <td>{order.orderId}</td>
          </tr>
          <tr>
            <td>buyer:</td>
            <td>{order.buyer.username}</td>
          </tr>
          <tr>
            <td>seller:</td>
            <td>{order.seller.username}</td>
          </tr>
          <tr>
            <td>duck:</td>
            <td>{order.duck.name}</td>
          </tr>
          <tr>
            <td>order date:</td>
            <td>{order.orderDate}</td>
          </tr>
          <tr>
            <td>status:</td>
            <td>{order.status}</td>
          </tr>
          <tr>
            <td>quantity:</td>
            <td>{order.quantity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
