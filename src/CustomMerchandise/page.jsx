import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
import '../productStyles.css';
import logo from '../assets/logourban.png';

function CustomMerchandisePage() {
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
            <h2>Custom Merchandise</h2>
            <h3>Promotional Products & Corporate Gifts</h3>
            
            <div className="merchandise-container">
              <div className="merchandise-item">
                <h4 className="merchandise-title">Custom Keychains</h4>
                <p className="merchandise-price">Starting from ₹99</p>
                <p className="merchandise-description">Metal and acrylic keychains with custom logo. Perfect for promotional giveaways.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>
              
              <div className="merchandise-item">
                <h4 className="merchandise-title">Desk Accessories</h4>
                <p className="merchandise-price">Starting from ₹299</p>
                <p className="merchandise-description">Premium desk organizers and accessories with company branding.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>
              
              <div className="merchandise-item">
                <h4 className="merchandise-title">Mouse Pads</h4>
                <p className="merchandise-price">Starting from ₹149</p>
                <p className="merchandise-description">Custom printed mouse pads with ergonomic design. Available in various sizes.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>

              <div className="merchandise-item">
                <h4 className="merchandise-title">Stress Balls</h4>
                <p className="merchandise-price">Starting from ₹79</p>
                <p className="merchandise-description">Anti-stress balls with company logo. Great for office wellness programs.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>

              <div className="merchandise-item">
                <h4 className="merchandise-title">Desk Calendars</h4>
                <p className="merchandise-price">Starting from ₹199</p>
                <p className="merchandise-description">Custom printed desk calendars with company branding and important dates.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>

              <div className="merchandise-item">
                <h4 className="merchandise-title">USB Drives</h4>
                <p className="merchandise-price">Starting from ₹399</p>
                <p className="merchandise-description">Branded USB drives in various storage capacities. Perfect for data distribution.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>

              <div className="merchandise-item">
                <h4 className="merchandise-title">Phone Accessories</h4>
                <p className="merchandise-price">Starting from ₹149</p>
                <p className="merchandise-description">Phone stands, card holders, and pop sockets with custom branding.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>

              <div className="merchandise-item">
                <h4 className="merchandise-title">Umbrella</h4>
                <p className="merchandise-price">Starting from ₹499</p>
                <p className="merchandise-description">Premium umbrellas with company logo. Available in various sizes and colors.</p>
                <button className="merchandise-button">Add to Inquiry</button>
              </div>

              <div className="merchandise-item">
                <h4 className="merchandise-title">Gift Sets</h4>
                <p className="merchandise-price">Starting from ₹999</p>
                <p className="merchandise-description">Curated gift sets combining multiple promotional items in elegant packaging.</p>
                <button className="merchandise-button">Add to Inquiry</button>
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

export default CustomMerchandisePage;