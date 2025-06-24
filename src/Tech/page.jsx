import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
import logo from '../assets/logourban.png';

function TechPage() {
  return (
    <div className="app-container">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Urban Dezine Logo" className="logo" />
          </Link>
        </div>
        <div className="nav-buttons">
          <Link to="/" className="nav-button">Back to Home</Link>
        </div>
      </div>
      
      <main>
        <section className="section">
          <div className="title-content">
            <h2>Tech Products</h2>
            <h3>Custom Tech Accessories</h3>
            
            <div className="tech-container">
              <div className="tech-item">
                <h4 className="tech-title">Wireless Earbuds</h4>
                <p className="tech-price">Starting from ₹1299</p>
                <p className="tech-description">High-quality wireless earbuds with custom branding. Perfect for corporate gifts and premium giveaways.</p>
                <button className="tech-button">Add to Inquiry</button>
              </div>
              
              <div className="tech-item">
                <h4 className="tech-title">Bluetooth Speakers</h4>
                <p className="tech-price">Starting from ₹999</p>
                <p className="tech-description">Portable speakers with excellent sound quality. Available with custom logo and packaging.</p>
                <button className="tech-button">Add to Inquiry</button>
              </div>
              
              <div className="tech-item">
                <h4 className="tech-title">Power Banks</h4>
                <p className="tech-price">Starting from ₹799</p>
                <p className="tech-description">10000mAh capacity power banks with fast charging. Customizable with company branding.</p>
                <button className="tech-button">Add to Inquiry</button>
              </div>

              <div className="tech-item">
                <h4 className="tech-title">Smart Watches</h4>
                <p className="tech-price">Starting from ₹1999</p>
                <p className="tech-description">Feature-rich smart watches with health tracking. Custom watch faces and packaging available.</p>
                <button className="tech-button">Add to Inquiry</button>
              </div>

              <div className="tech-item">
                <h4 className="tech-title">USB Flash Drives</h4>
                <p className="tech-price">Starting from ₹499</p>
                <p className="tech-description">High-speed USB drives with various storage options. Custom shapes and designs available.</p>
                <button className="tech-button">Add to Inquiry</button>
              </div>

              <div className="tech-item">
                <h4 className="tech-title">Wireless Chargers</h4>
                <p className="tech-price">Starting from ₹899</p>
                <p className="tech-description">Fast wireless charging pads with LED indicators. Customizable with company logos.</p>
                <button className="tech-button">Add to Inquiry</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="copyright">
          <p>© 2023 Urban Dezine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default TechPage;