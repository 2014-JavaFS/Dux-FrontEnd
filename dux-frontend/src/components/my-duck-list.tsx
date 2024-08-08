import { useContext, useEffect, useState } from "react";
import { duxServer } from "../common/dux-server";
import UserContext from "../contexts/userContext";
import React from "react";

// "Binding element 'id' implicitly has an 'any' type.ts(7031)"
// dont know how to fix, but it seems to work anyway so... ¯\_(ツ)_/¯
export default function MyDuckList() {
  const [ducks, setDucks] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  //const user = 1;

  useEffect(() => {
    duxServer
      .get(`/orders/history?userId=${user}`)
      .then((response) => {
        setDucks(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [user]);

  if (error) return <div>Error: {error}, so no</div>;
  if (!ducks) return <div>no</div>;

  return (
    <>
      <h2>
        <u>DUCKS</u>
        <p>all your ducks in a row</p>
      </h2>
      {ducks.map((order) => (
        <React.Fragment key={order.duck.duckId}>
          <br />
          <div className="card">
            <h4>{order.duck.name}</h4>
            <h6>{order.duck.description}</h6>
            <h5>
              {order.duck.rarity} — {order.duck.condition}
            </h5>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
