import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import the eye icon

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h1 className="main-heading">The Garden Cafe</h1>
      <div className="login-back">
        <h1>Login!</h1>
        <p>Please enter your credentials below to continue</p>

        <div className="user-input mb-5">
          <label className="mb-3">Username</label>
          <Form.Control
            type="text"
            id="user_name"
            placeholder="Enter your username"
          />
        </div>

        <div className="user-input password mb-5">
          <label className="mb-3">Password</label>
          <div className="password-input-wrapper">
            <Form.Control
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
            />
            <span
              className="toggle-password"
              role="button"
              tabIndex="0"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>

        <div className="end-section mb-5">
          <div className="remember-me">
            <input type="Checkbox" id="remember-me" className="checkbox"/>
            <label for="remember-me">Remember me</label>
          </div>
          <div className="forget-password">
            <a href="">Forget Password?</a>
          </div>
        </div>
        <button className="btn btn-sm common-button">Login</button>
      </div>
    </>
  );
}
