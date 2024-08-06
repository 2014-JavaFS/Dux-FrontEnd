import { useEffect, useState } from "react";

function Duck() {
    const [duck, setDuck] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:8080/ducks/1`, { method: "GET" })
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          setDuck(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  
    if (error) {
      return <div>Error: {error}, so no</div>;
    }
  
    if (!duck) {
      return <div>no</div>;
    }
  
    return (
      <table>
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
    );
  }
  
  export default Duck;
