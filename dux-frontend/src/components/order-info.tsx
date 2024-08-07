export default function Order({ order }) {
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
