import { useEffect, useState } from "react";
import { duxServer } from "../common/dux-server";

// "Binding element 'id' implicitly has an 'any' type.ts(7031)"
// dont know how to fix, but it seems to work anyway so... ¯\_(ツ)_/¯
export default function DuckList() {
  const [ducks, setDucks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    duxServer
      .get("/ducks")
      .then((response) => {
        setDucks(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) return <div>Error: {error}, so no</div>;
  if (!ducks) return <div>no</div>;

  return (
    <>
      <div>
        <h2>can i display the ducks?</h2>
        {ducks.map((duck) => (
          <div className="card" key={duck.duckId}>
            {makeListItem(duck)}
          </div>
        ))}
      </div>
    </>
  );
}

function makeListItem(duck) {
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
