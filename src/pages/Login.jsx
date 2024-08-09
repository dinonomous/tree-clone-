import React, { useState } from 'react';
import '../css/Login.css';
import logo from '../assets/logo2.svg';  // Make sure to replace './logo.png' with the actual path to your logo image
import apple from '../assets/apple.jpg';
import images from '../assets/google.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://authentication-dineshwar.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: username, password: password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Store token in local storage
        localStorage.setItem('token', result.token);

        // Redirect to home page or desired route
        window.location.href = '/';
      } else {
        // If login fails, log the error message
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <a href='/'><img src={logo} alt="Linktree Logo" className="logo" /></a>
        <h1>Welcome back!</h1>
        <p>Log in to your Linktree.</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Log in</button>
        </form>
        <div className="links">
          <a href="/">Forgot password?</a> • <a href="/">Forgot username?</a>
        </div>
        <div className="or">OR</div>
        <button className="google-login"><img src={images} alt="Button Image" />Continue with Google</button>
        <button className="apple-login"><img src={apple} alt="Button Image" />Continue with Apple</button>
        <div className="signup-link">
          <p>Don't have an account? <a href="/">Sign up.</a></p>
        </div>
        <div className="phone-login">
          <a href="/">You can also log in with a phone number</a>
        </div>
      </div>
      <div className="right-section">
        <img src="https://assets.production.linktr.ee/auth/1071/media/banner-login-desktop.854036832e9da2348d8e.png" alt="Promotional content" className="promo-image" />
      </div>
    </div>
  );
}

export default Login;
