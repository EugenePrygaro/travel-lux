import { Link } from "react-router-dom";
import NavBar from './NavBar.js';
import '../index.css'
import home_icons from './styles/images/icons/home-icons.svg';

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
        <footer></footer>
    </main>
  );
}

export default Home;
