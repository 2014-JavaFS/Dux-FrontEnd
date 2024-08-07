import { useState } from "react";
import { duxServer } from "../common/dux-server";

// "Binding element 'id' implicitly has an 'any' type.ts(7031)"
// dont know how to fix, but it seems to work anyway so... ¯\_(ツ)_/¯
export default function Duck({ id }) {
  const [duck, setDuck] = useState(null);
  const [error] = useState(null);

  async function getADuck() {
    try {
      const axResp = await duxServer.get(`/ducks/${id}`);
      if (axResp.status > 200 || axResp.status < 299) {
        setDuck(axResp.data);
      } else if (axResp.status > 300 || axResp.status < 399)
        // do something if bad
        console.log(axResp.status);
    } catch (error) {
      console.log(error);
    }
  }
  getADuck();
  if (error) return <div>Error: {error}, so no</div>;
  if (!duck) return <div>no</div>;

  return (
    <div className="card">
      <table bgcolor="333333" align="center">
        <thead>
          <tr>
            <td>
              <h3>Duck</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id:</td>
            <td>{duck.duckId}</td>
          </tr>
          <tr>
            <td>name:</td>
            <td>{duck.name}</td>
          </tr>
          <tr>
            <td>description:</td>
            <td>{duck.description}</td>
          </tr>
          <tr>
            <td>rarity:</td>
            <td>{duck.rarity}</td>
          </tr>
          <tr>
            <td>condition:</td>
            <td>{duck.condition}</td>
          </tr>
          <tr>
            <td>price:</td>
            <td>${duck.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
