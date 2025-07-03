import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("bloodbank");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🛡️ (Optional) You can add validation/auth check here

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);

    // ✅ Navigate to the correct dashboard
    if (role === "bloodbank") {
      navigate("/dashboard/bloodbank");
    } else if (role === "hospital") {
      navigate("/dashboard/hospital");
    } else {
      alert("Invalid role selected.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Select Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="bloodbank">Blood Bank</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
