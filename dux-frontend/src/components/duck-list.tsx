import { useContext, useEffect, useState } from "react";
import { duxServer } from "../common/dux-server";
import UserContext from "../contexts/userContext";
import React from "react";

// "Binding element 'id' implicitly has an 'any' type.ts(7031)"
// dont know how to fix, but it seems to work anyway so... ¯\_(ツ)_/¯
export default function DuckList() {
  const [ducks, setDucks] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  //const user = 1;

  const userId = user;

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

  const seller = 33;
  function handleAddToCart(duckId) {
    duxServer
      .post(
        `/orders/addToCart?buyer=${userId}&seller=${seller}&duck=${duckId}&quantity=1`
      )
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <>
      <h2>
        <u>DUCKS</u>
      </h2>
      {ducks.map((duck) => (
        <React.Fragment key={duck.duckId}>
          <br />
          <div key={duck.duckId} className="card">
          <h4>{duck.name}</h4>
          <h6>{duck.description}</h6>
            <h5>
              {duck.rarity} — {duck.condition}
            </h5>
            <p>${duck.price}</p>
            <br />
            <button type="submit" onClick={() => handleAddToCart(duck.duckId)}>
              Add to Cart
            </button>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
