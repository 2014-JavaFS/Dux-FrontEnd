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

    return(
        <div>
            <h3> Your Cart is displayed below</h3>
            {// The idea is to map the received array of orders to an array of tables that display the
            // information needed when a user is looking at their cart
            }
            <ul>
                {cart.map((order)=>(
                    <div key = {order.duck.name}>
                        <table>
                            <thead>
                                <tr>
                                    <td> <h3>Order for {order.duck.name}</h3></td>
                                    <td> Order Id : {order.orderId}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Seller Name : </td>
                                    <td>{order.seller.username}</td>
                                </tr>
                                <tr>
                                    <td> Duck Name : </td>
                                    <td>{order.duck.name}</td>
                                </tr>
                                {//description should be styled to smaller font probably
                                }
                                <tr>
                                    <td> Duck Description : </td>
                                    <td>{order.duck.description}</td>
                                </tr>
                                <tr>
                                    <td> Quantity : </td>
                                    <td>{order.quantity}</td>
                                </tr>
                                <tr>
                                    <td> Order Date : </td>
                                    <td>{order.orderDate}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </ul>
        </div>
    );
}
