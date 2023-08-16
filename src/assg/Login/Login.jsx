import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="auth-container">
      <h2>LOGIN</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
      </form>
      <div className="auth-footer">
        <p>
          Not Registered? <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <button className="auth-button-login" type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
