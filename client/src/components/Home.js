import { Link } from "react-router-dom";
import NavBar from './NavBar.js';
import '../index.css'
import home_icons from './styles/images/icons/home-icons.svg';
import teamImg from './styles/images/about-team.jpg';
import templeImg from './styles/images/about-temple.jpg'

function Home() {
  return (
    <main>
      <NavBar className="navbar-home" />
        <section className="home-hero-section">
        <div className='home-container home-hero-container'>
          <div className="home-hero-content">
            <h1 className='home-hero-header'>TravelLux</h1>
            <p className='home-hero-text'>Your gateway to premium  travel experience</p>
            <Link to="/tours" className="hero-button-wrapper">
              <button className='hero-button-viev-tours'>View Tours</button>
            </Link>
            </div>
          </div>
        </section>
        <section className="home-exp-section">
          <div className="home-container home-exp-container">
            <h2 className="home-exp-header">Experience</h2>
            <ul className="home-exp-blocks">
              <li className="home-exp-block">
                  <svg className="home-exp-icon" width="42" height="42">
                    <use href={`${home_icons}#icon-airplane`}></use>
                  </svg>
                  <h3 className="home-exp-block-header">Premium Comfort</h3>
                  <p className="home-exp-block-text">Exclusive seating, extra legroom, and personalized service for your ultimate relaxation.</p>
            </li>
            <li className="home-exp-block">
                  <svg className="home-exp-icon" width="42" height="42">
                    <use href={`${home_icons}#icon-earth`}></use>
                  </svg>
                  <h3 className="home-exp-block-header">Global Connectivity</h3>
                  <p className="home-exp-block-text">Seamless connections to over 150 destinations worldwide.</p>
            </li>
            <li className="home-exp-block">
                  <svg className="home-exp-icon" width="42" height="42">
                    <use href={`${home_icons}#icon-credit-card`}></use>
                  </svg>
                  <h3 className="home-exp-block-header">Loyalty & Benefits</h3>
                  <p className="home-exp-block-text">Enjoy priority access, and exclusive lounges with TravelLux Club.</p>
              </li>
            </ul>
          </div>
        </section>
      <section className="home-about-section">
        <div className="home-container home-about-container">
          <div className="about-content">
            <div className="about-row">
              <div className="about-row-first-wrapper">
                <p className="about-description">
                    <span className="accent-red">TravelLux</span> is not just a travel agency, it is your personal guide to the world of unforgettable adventures and luxury travel.
                      We believe that every journey is a unique story and our mission is to make your story special.
                      Since our inception, we have strived to create unparalleled travel  xperiences,
                      exceeding the expectations of the most demanding customers
                </p>
                <button className="about-contact-btn">Contact Us</button>
              </div>
                
                <img src={templeImg} alt="Ancient Temple" width="400px" className="about-img temple"/>
            </div>
            <div className="about-row reverse">
                  <img src={teamImg} alt="Our Team" width="400px" className="about-img team"/>
                <p className="about-description">
                  <span className="accent-red">Our team</span> is a collection of seasoned travelers, tourism experts and passionate researchers.
                    We personally visit every destination we offer to ensure you get only the best.
                </p>
              </div>
            </div>
        </div>
        </section>
      <section className="home-contacts-section">
        <div className="home-container home-contacts-container">
          <div className="contacs-content">
            <h2 className="contacts-header">Contacts</h2>
            <h3 className="contacts-pre-header">Ready to plan your next premium flight?</h3>
            <p className="contacts-text">Leave your contact details in the form below, and our dedicated manager from Travel Lux will call you back shortly to assist with your booking, provide a tailored quote, or answer any questions about our aviation services.
              <br></br><br></br>
              We are available from Monday to Friday, 09:00 – 18:00
            </p>
            <div className="form-container">
              <div className="input-field-container">
                  <div className="input-wrapper">
                    <svg className="input-icon" width="24" height="24">
                      <use href={`${home_icons}#icon-name-input`}></use>
                    </svg>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Full name" 
                      className="contact-input"
                    />
                  </div>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="24" height="24">
                      <use href={`${home_icons}#icon-mail-input`}></use>
                    </svg>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Enter your email" 
                      className="contact-input"
                    />
                  </div>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="22" height="22">
                      <use href={`${home_icons}#icon-phone-input`}></use>
                    </svg>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+380 (__) ___-__-__" 
                      className="contact-input"
                    />
                  </div>
                  <div className="input-wrapper">
                    <svg className="input-icon" width="22" height="22">
                      <use href={`${home_icons}#icon-clock-input`}></use>
                    </svg>
                    <select id="time" className="contact-input select-input">
                      <option value="morning">Morning (09:00 - 12:00)</option>
                      <option value="afternoon">Afternoon (12:00 - 15:00)</option>
                      <option value="evening">Evening (15:00 - 18:00)</option>
                    </select>
                  </div>
                </div>
              <button className="input-field-button">Send request</button>
              <p className="input-field-text">Travel Lux — elevating your journey to new heights.</p>
            </div>
          </div>
        </div>
        </section>
        <footer></footer>
    </main>
  );
}

export default Home;
