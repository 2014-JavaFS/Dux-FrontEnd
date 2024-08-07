import GetCart from "../components/get-cart";
import { duxServer } from "../common/dux-server";

export default function Cart() {
  const userId = 1; //should replace with context

  function handleCheckout() {
    duxServer.patch(`/orders/checkout?userId=${userId}`).catch((error) => {
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
