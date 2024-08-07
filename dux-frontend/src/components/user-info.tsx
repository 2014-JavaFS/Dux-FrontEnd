import { useEffect, useState } from "react";
import { duxServer } from "../common/dux-server";

// "Binding element 'username' implicitly has an 'any' type.ts(7031)"
// dont know how to fix, but it seems to work anyway so... ¯\_(ツ)_/¯
export default function User( username ) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    duxServer
      .get(`/users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [username]);

  if (error) return <div>Error: {error}, so no</div>;
  if (!user) return <div>no</div>;

  return (
    <div className="card">
      <table bgcolor="333333" align="center">
        <thead>
          <tr>
            <td>
              <h3>User</h3>
            </td>
          </tr>
        </thead>
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
    </div>
  );
}