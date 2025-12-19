import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../components/styles/Cab.css";

const API_URL = "http://localhost:5000/api";

function Cab() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    console.log("📥 Отримуємо userId:", userId);

    if (!userId) {
      alert("❌ Користувач не знайдений, повернення на логін...");
      navigate("/auth");
      return;
    }

    const fetchUserData = async () => {
      try {
        console.log("🔄 Відправляємо запит на сервер...");
        const response = await axios.get(`${API_URL}/users/${userId}`);

        console.log("✅ Відповідь сервера:", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("❌ Помилка отримання даних:", error);
        alert("🚫 Не вдалося завантажити дані користувача.");
      } finally {
        setLoading(false);
      }
    };

    setTimeout(fetchUserData, 500); // 🕐 Додаємо затримку для LocalStorage
  }, [navigate]);

  return (
    <div className="cab-page">
      <NavBar className="navbar-cab"/>
      <div className="cab-container">
        <h2 className="cab-title">Особистий кабінет</h2>
        {loading ? (
          <p className="cab-loading">🔄 Завантаження інформації...</p>
        ) : userData ? (
          <div>
            <p className="cab-info"><span>Нікнейм:</span> {userData.nickname}</p>
            <p className="cab-info"><span>Email:</span> {userData.email}</p>
            <p className="cab-info"><span>Дата створення:</span> {new Date(userData.createdAt).toLocaleString()}</p>
            <p className="cab-info"><span>Останнє оновлення:</span> {new Date(userData.updatedAt).toLocaleString()}</p>

            <button className="cab-button" onClick={() => {
              localStorage.removeItem("userId");
              navigate("/auth");
            }}>Вийти</button>
          </div>
        ) : (
          <p className="cab-loading">❌ Дані не знайдені.</p>
        )}
      </div>
    </div>
  );
}

export default Cab;
