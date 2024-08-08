import GetCart from "../components/get-cart";
import { duxServer } from "../common/dux-server";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

export default function Cart() {
  const { user } = useContext(UserContext);
  //const user = 1;

  function handleCheckout() {
    duxServer.patch(`/orders/checkout?userId=${user}`).catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <>
      <GetCart />
      <br />
      <button onClick={() => handleCheckout()}>Checkout</button>
    </>
  );
}
