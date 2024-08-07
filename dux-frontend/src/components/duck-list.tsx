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
        <h2><u>DUCKS</u></h2>
        {ducks.map((duck) => (
          <>
            <br />
            {makeListItem(duck)}
          </>
        ))}
      </div>
    </>
  );
}

function makeListItem(duck) {
  return (
    <>
      <div className="card">
        <h4>{duck.name}</h4>
        <h5>
          {duck.rarity} — {duck.condition}
        </h5>
        <p>${duck.price}</p>
      </div>
    </>
  );
}
