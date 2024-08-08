import { useContext, useRef, useState } from "react";
import UserContext from "../contexts/userContext";
import { duxServer } from "../common/dux-server";
import GetCart from "./get-cart";

export default function LoginBox(){
    const { user, userLogin, userLogout } = useContext(UserContext);

    let memberId;

    const [status,setStatus] = useState<number | String | undefined>(0);
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)

    async function login(){
        
        console.log(emailInput.current?.value)
        console.log(passwordInput.current?.value)
        try{            
            const axResp = await duxServer.post(`auth?email=${emailInput.current?.value}&password=${passwordInput.current?.value}`)
            console.log(axResp.headers.userid)
            console.log(axResp.status)
            if(axResp.status > 200 || axResp.status < 299 ){
                setStatus(axResp.status)
                userLogin(axResp.headers.userid)
            }
            else if (axResp.status > 300 || axResp.status < 399 )
                setStatus(12345)
            console.log(status)

            
        } catch (error){
            console.error(error)
            console.error(status)
        }
    } 

    return(
        <div>
        
            {user ? ( <div>
                <h2>Welcome, {user.username}!</h2>
                <button onClick={userLogout}>Logout</button>
        </div>
        ) : (
        <p>Please log in to view your account.</p>
      )} 
        
            
      
      <div className="login-container">
                <input id="emailInput" type="email" placeholder="please enter email" ref={emailInput}/>
                <input id="passwordInput" type="password" placeholder="please enter password" ref={passwordInput}/>
                <button onClick={login}>Login</button>
                
                {status !== 0 ? 
                    <p>{
                        // ternary operator = conditional ? ifTrue(content) : ifFalse(content)
                        status >= '400' ? 
                        "Login failed due to invalid credentails " : 
                        "Successfully logged in"
                    }</p> :
                    ""
                }
            </div>
        </div>
    )
}