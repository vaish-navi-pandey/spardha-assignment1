import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form className="auth-form" onSubmit={handleSignup}>
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
        <button className="auth-button" type="submit">
          Sign Up
        </button>
      </form>
      
      <div className="auth-footer">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <div className="auth-social">
        <p>Or sign up using</p>
        <div className="icons">
        <div class='icon'><SocialIcon url="https://google.com/jaketrent" /></div>
        <div class='icon'><SocialIcon url="https://facebook.com/jaketrent" /></div>
        <div class='icon'><SocialIcon url="https://twitter.com/jaketrent" /></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
