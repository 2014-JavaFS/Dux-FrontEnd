import { useState } from 'react';

function LoginComp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }
    try {
      const response = await loginUser(email, password);

      if (response.success) {
        login(response.user);

        setEmail('');
        setPassword('');

        navigate('/home');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (error) { 
      setError('An error occured. Please try again.');
      console.error('Login error', error);
    }
    console.log('Login attempt with:', email, password);
  

  return (
    <div className="login-comp">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
  }}

export default LoginComp; 