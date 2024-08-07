import GetCart from "../components/get-cart";
import { duxServer } from "../common/dux-server";

export default function Cart() {
  const userId = 2; //should replace with context

  function handleCheckout() {
    duxServer.get(`/orders/checkout?userId=${userId}`).catch((error) => {
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
