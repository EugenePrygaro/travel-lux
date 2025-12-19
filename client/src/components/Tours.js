import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/styles/Tours.css"; // Підключаємо стилі
import NavBar from "../components/NavBar"; // Додаємо навбар

// Локальні зображення
import odesaImg from "./styles/images/odesa.png";
import bukovelImg from "./styles/images/bukovel.png";
import lapadImg from "./styles/images/lapad.png";
import montanaImg from "./styles/images/montana.png";

const imageMap = {
  "Одеса": odesaImg,
  "Буковель": bukovelImg,
  "Лапад, Хорватія": lapadImg,
  "Монтана, США": montanaImg,
};

function Tours() {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/tour") // Запит до беку
      .then((response) => {
        setTours(response.data);
      })
      .catch((error) => {
        console.error("Помилка отримання турів:", error);
      });
  }, []);

  return (
    <div>
      <NavBar className="tours-navbar" extraContent={<span className="navbar-logo">TravelLux</span>} />
      <div className="tours-container">
        <div className="tours-grid">
          {tours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img
                src={imageMap[tour.title] || odesaImg} // Додаємо зображення
                alt={tour.title}
                className="tour-image"
              />
              <div className="tour-info">
                <p className="tour-price">від {tour.price}₴</p>
                <h2 className="tour-title">{tour.title}</h2>
                <p className="tour-description">{tour.description}</p>
              </div>
              <button
                className="tour-button"
                onClick={() => navigate(`/tour/${tour.id}`)}
              >
                ➜
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;
