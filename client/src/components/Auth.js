import NavBar from "./NavBar.js";
import "../index.css";
import icons from "./styles/images/icons/icons.svg";
import "../components/styles/Auth.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5001"; // Замінити на актуальний бекенд

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("📤 Відправляємо запит на логін...");
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token && user) {
        console.log("📌 Отримано токен:", token);
        console.log("📌 Отримано userId:", user.id);

        // Зберігаємо дані
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user.id);

        navigate("/cab");
      } else {
        alert("🚫 Помилка входу: Сервер не повернув всі необхідні дані.");
      }
    } catch (error) {
      console.error("❌ Помилка авторизації:", error);

      if (error.response && error.response.status === 401) {
        alert("🚫 Невірний email або пароль");
      } else {
        alert("❌ Помилка сервера. Спробуйте ще раз.");
      }
    }
  };

  return (
    <div className="auth-page">
      <NavBar className="navbar-auth" />
      <div className="auth-container">
        <form className="auth-form">
          <h2 className="auth-title">TravelLux</h2>
          <p className="auth-subtitle">Enter Lounge</p>
          <div className="input-wrapper">
            <svg className="auth-icon" width="24" height="24">
              <use href={`${icons}#icon-mail-input`}></use>
            </svg>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <svg className="auth-icon" width="24" height="24">
              <use href={`${icons}#icon-password-input`}></use>
            </svg>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="auth-button" type="submit" onClick={handleLogin}>
            Login
          </button>
          <p className="auth-register">
            Don't have an account?{" "}
            <span
              className="auth-register-link"
              onClick={() => navigate("/register")}
            >
              Join the Club
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Auth;
