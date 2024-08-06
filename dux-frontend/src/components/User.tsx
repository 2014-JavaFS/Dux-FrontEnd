import { useEffect, useState } from "react";

function User() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:8080/users/user1`, { method: "GET" })
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  
    if (error) {
      return <div>Error: {error}, so no</div>;
    }
  
    if (!user) {
      return <div>no</div>;
    }
  
    return (
      <table>
        <tbody>
          <tr>
            <td>id:</td>
            <td>{user.userId}</td>
          </tr>
          <tr>
            <td>username:</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>rarity:</td>
            <td>{user.registrationDate}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default User;
