import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/t-6.jpeg'; // Your background image
import logo from './images/logo.jpg.png'; // Your logo
import './LoginPage.css'; // Your styles

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic for username and password (replace with real backend logic if needed)
    if (username === 'user' && password === 'password') {
      // Redirect directly to the Streamlit chatbot page (running on http://localhost:8501)
      window.location.href = 'http://localhost:8501';  // This will redirect the user to the chatbot
    } else {
      alert('Invalid credentials!');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="brand-name">Kavach Indian Railways</div>
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subheading">Please enter your credentials to access your account</p>
          <form onSubmit={handleLogin}>
            <div className="textbox">
              <i className="fas fa-user" aria-hidden="true" style={{ color: 'black', left: '13px', top: '18px' }}></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="textbox">
              <i className="fas fa-lock" aria-hidden="true" style={{ color: 'black', left: '13px', top: '18px' }}></i>
              <input
                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="password-input"
              />
              {/* Eye icon to toggle password visibility */}
              <i
                className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'} password-eye-icon`} 
                onClick={togglePasswordVisibility} // Toggle the eye icon on click
              ></i>
            </div>
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="forgot-password">
              <a href="/">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
