import { useEffect, useState } from "react";
import { duxServer } from "../common/dux-server";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

// "Binding element 'username' implicitly has an 'any' type.ts(7031)"
// dont know how to fix, but it seems to work anyway so... ¯\_(ツ)_/¯
export default function User() {
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  const [fullUser, setfullUser] = useState(null);

  async function showAProfile() {
    console.log("User Profile id"+user);
    try {
      const axResp = await duxServer.get(`/users/showProfile`, {
        headers: { userid: user },
      });
      console.log(axResp.headers.userid);
      console.log(axResp.status);
      console.log(axResp.data);
      if (axResp.status > 200 || axResp.status < 299) {
        //do something if good
        setfullUser(axResp.data);
        console.log("we in the green for user profile");
      } else if (axResp.status > 300 || axResp.status < 399)
        // do something if bad
        console.log(axResp.status);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="card">
      <div>
        <h2>Welcome, user id = {user}</h2>
        <button onClick={showAProfile}>Show Profile</button>
      </div>
      {fullUser  
      ? <table bgcolor="333333" align="center">
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
            <td>{fullUser.userId}</td>
          </tr>
          <tr>
            <td>username:</td>
            <td>{fullUser.username}</td>
          </tr>
          <tr>
            <td>email:</td>
            <td>{fullUser.email}</td>
          </tr>
          <tr>
            <td>registration date:</td>
            <td>{fullUser.registrationDate}</td>
          </tr>
        </tbody>
      </table> : <div>There is no user logged in</div>}
    </div>
  );
}