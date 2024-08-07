import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { duxServer } from '../common/dux-server';

function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // formatted like in the back end
}

export default function Register(){
    // What we get after
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    // Input through the input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate();

    

    function submitInfo(event){
        event.preventDefault();

        const date = formatDate(new Date());

        const info = {
            'username': username,
            'password': password,
            'email': email,
            'registrationDate': date
        }

        duxServer
            .post('/users', info)
            .then((response) => {
                setUser(response.data);
                console.log(user);
                navigate('/');
            }).catch((error) => {
                setError(error);
                console.log(error);
            });
    }
    

    return(
        <>
            <h1>Register</h1>
            <form>
                <label>
                    Username: 
                    <input type='text' name='Username' onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Email: 
                    <input type='email' name='Email' onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password: 
                    <input type='password' name='Password' onChange={(e) => setPassword(e.target.value)}/>
                </label>
            </form>
            
            <button type='submit' onClick={submitInfo}>Submit</button>
        </>
    );
}