import { useEffect, useState } from "react";

function Order() {
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:8080/orders/1`, { method: "GET" })  // Added 'http://'
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          setOrder(data);
        })
        .catch((error) => {
          setError(error.message);  // Extracted the error message for better display
        });
    }, []);
  
    if (error) {
      return <div>Error: {error}, so no</div>;
    }
  
    if (!order) {
      return <div>no</div>;  // Changed from "no" to "Loading..."
    }
  
    return (
      <table>
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
    );
  }
  
  export default Order;
