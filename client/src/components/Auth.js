import NavBar from "../components/NavBar";
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
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
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
      {/* Верхня панель навігації */}
      <NavBar className="auth-navbar" />

      <div className="auth-container">
        <h2 className="auth-title">TravelLux</h2>
        <p className="auth-subtitle">Авторизація</p>
        <input
          type="email"
          placeholder="Електронна пошта"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleLogin}>
          Увійти
        </button>
        <p className="auth-register" onClick={() => navigate("/register")}>
          Реєстрація
        </p>
      </div>
    </div>
  );
}

export default Auth;
