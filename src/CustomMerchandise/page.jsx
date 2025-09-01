import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
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
            
            <div className="diaries-container">
              <div className="diary-item">
                <h4 className="diary-title">Custom Keychains</h4>
                <p className="diary-price">Starting from ₹99</p>
                <p className="diary-description">Metal and acrylic keychains with custom logo. Perfect for promotional giveaways.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>
              
              <div className="diary-item">
                <h4 className="diary-title">Desk Accessories</h4>
                <p className="diary-price">Starting from ₹299</p>
                <p className="diary-description">Premium desk organizers and accessories with company branding.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>
              
              <div className="diary-item">
                <h4 className="diary-title">Mouse Pads</h4>
                <p className="diary-price">Starting from ₹149</p>
                <p className="diary-description">Custom printed mouse pads with ergonomic design. Available in various sizes.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Stress Balls</h4>
                <p className="diary-price">Starting from ₹79</p>
                <p className="diary-description">Anti-stress balls with company logo. Great for office wellness programs.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Desk Calendars</h4>
                <p className="diary-price">Starting from ₹199</p>
                <p className="diary-description">Custom printed desk calendars with company branding and important dates.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">USB Drives</h4>
                <p className="diary-price">Starting from ₹399</p>
                <p className="diary-description">Branded USB drives in various storage capacities. Perfect for data distribution.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Phone Accessories</h4>
                <p className="diary-price">Starting from ₹149</p>
                <p className="diary-description">Phone stands, card holders, and pop sockets with custom branding.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Umbrella</h4>
                <p className="diary-price">Starting from ₹499</p>
                <p className="diary-description">Premium umbrellas with company logo. Available in various sizes and colors.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Gift Sets</h4>
                <p className="diary-price">Starting from ₹999</p>
                <p className="diary-description">Curated gift sets combining multiple promotional items in elegant packaging.</p>
                <button className="diary-button">Add to Inquiry</button>
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