import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import "../components/styles/Register.css";

const API_URL = "http://localhost:5001/api";

function Register() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/register`, { nickname, email, password });
      console.log("✅ Реєстрація успішна:", response.data);
      alert("Реєстрація успішна! Тепер ви можете увійти.");
      navigate("/auth");
    } catch (error) {
      if (error.response) {
        console.error("❌ Помилка сервера:", error.response.data);
        alert(error.response.data.message || "Помилка на сервері!");
      } else {
        console.error("❌ Помилка запиту:", error.message);
        alert("Не вдалося з'єднатися з сервером.");
      }
    }
  };

  return (
    <div className="register-page">
      <NavBar className="register-navbar" />
      <div className="register-container">
        <h1 className="logo">TravelLux</h1>
        <h2 className="subtitle">Реєстрація</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Нікнейм"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-button">Зареєструватись</button>
        </form>
        <p className="terms">
          Реєструючись, я підтверджую Згоду з <Link to="/terms">правилами користування</Link> та <br />
          <Link to="/privacy">обробкою персональних даних</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
