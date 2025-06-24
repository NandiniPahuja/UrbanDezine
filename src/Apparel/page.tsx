import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
import logo from '../assets/logourban.png';
import hoodie from '../assets/hoodie.png';
import jacket from '../assets/Jacket.png';
import jersey from '../assets/jersey.png';
import labcoat from '../assets/labcoat.png';

function ApparelPage() {
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
            <h2>Apparel Collection</h2>
            <h3>Custom Clothing & Uniforms</h3>
            
            <div className="apparel-container">
              <div className="apparel-item">
                <h4 className="apparel-title">Custom T-Shirts</h4>
                <p className="apparel-price">Starting from ₹299</p>
                <p className="apparel-description">High-quality cotton t-shirts with your custom design. Perfect for teams, events, or personal wear.</p>
                <button className="apparel-button">Add to Inquiry</button>
              </div>
              
              <div className="apparel-item">
                <img src={hoodie} alt="Premium Hoodie" className="apparel-image" />
                <h4 className="apparel-title">Premium Hoodies</h4>
                <p className="apparel-price">Starting from ₹799</p>
                <p className="apparel-description">Comfortable hoodies with premium fabric. Available in various colors with custom printing options.</p>
                <button className="apparel-button">Add to Inquiry</button>
              </div>
              
              <div className="apparel-item">
                <img src={jacket} alt="Corporate Jacket" className="apparel-image" />
                <h4 className="apparel-title">Corporate Jackets</h4>
                <p className="apparel-price">Starting from ₹999</p>
                <p className="apparel-description">Professional jackets perfect for corporate branding. Weather-resistant with customizable designs.</p>
                <button className="apparel-button">Add to Inquiry</button>
              </div>

              <div className="apparel-item">
                <img src={labcoat} alt="Work Uniform" className="apparel-image" />
                <h4 className="apparel-title">Work Uniforms</h4>
                <p className="apparel-price">Starting from ₹599</p>
                <p className="apparel-description">Durable work uniforms designed for comfort and professionalism. Custom embroidery available.</p>
                <button className="apparel-button">Add to Inquiry</button>
              </div>

              <div className="apparel-item">
                <img src={jersey} alt="Sports Jersey" className="apparel-image" />
                <h4 className="apparel-title">Sports Jerseys</h4>
                <p className="apparel-price">Starting from ₹449</p>
                <p className="apparel-description">High-performance sports jerseys with moisture-wicking fabric. Perfect for teams and clubs.</p>
                <button className="apparel-button">Add to Inquiry</button>
              </div>

              <div className="apparel-item">
                <h4 className="apparel-title">Custom Caps</h4>
                <p className="apparel-price">Starting from ₹199</p>
                <p className="apparel-description">Premium quality caps with custom embroidery or printing. Great for promotions and merchandise.</p>
                <button className="apparel-button">Add to Inquiry</button>
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

export default ApparelPage;