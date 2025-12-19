import React from "react";
import NavBar from "../components/NavBar";
import "../components/styles/About.css";

import travelDoc from "./styles/images/Travel Document.png";
import luggage from "./styles/images/Luggage.png";

function About() {
  return (
    <div className="about-page">
      <NavBar className="about-navbar" extraContent={<span className="navbar-logo">TravelLux</span>} />
      
      <div className="about-container">
        {/* Перша секція - текст зліва, фото справа */}
        <div className="about-section">
          <div className="about-text-block">
            <h1 className="about-title">
                <span className="highlight">TravelLux</span> 
                <span className="about-subtitle"> – це не просто туристична агенція, це ваш персональний провідник у світ незабутніх пригод та розкішних подорожей.</span>
            </h1>
            <h2 className="about-text">
              Ми віримо, що кожна подорож – це унікальна історія, і наша місія – зробити вашу історію особливою.
            </h2>
            <h3 className="about-text">
              З моменту нашого заснування ми прагнемо створювати неперевершені туристичні враження, 
              що перевершують очікування найвибагливіших клієнтів.
            </h3>
          </div>
          <div className="about-image-block">
            <img src={travelDoc} alt="Travel Document" className="about-image1" />
          </div>
        </div>

        <div className="about-section reverse">
        <div className="about-image-block2">
            <img src={luggage} alt="Luggage" className="about-image2" />
        </div>
          <div className="about-text-block">
            <h2 className="team-title">
              <span className="highlight">Наша команда</span> – це колекція досвідчених мандрівників, 
              експертів з туризму та пристрасних дослідників.
            </h2>
            <p className="about-image-text">
              Ми особисто відвідуємо кожен напрямок, який пропонуємо, щоб гарантувати, 
              що ви отримаєте лише найкраще.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
