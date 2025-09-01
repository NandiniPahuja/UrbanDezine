import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
import metalPen from '../assets/metal pen.png';
import parkerPen from '../assets/parkerpen.png';
import seedPen from '../assets/seedpen.png';
import logo from '../assets/logourban.png';

function PensPage() {
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
            <h2>Our Premium Pens</h2>
            <h3>Quality Writing Instruments</h3>
            
            <div className="pens-container">
              <div className="pen-item">
                <img src={metalPen} alt="Metal Pen" className="pen-image" />
                <h4 className="pen-title">Metal Pen</h4>
                <p className="pen-price">₹199</p>
                <p className="pen-description">Sleek and durable metal pen with smooth writing experience. Perfect for corporate gifting and daily use.</p>
                <button className="pen-button">Add to Inquiry</button>
              </div>
              
              <div className="pen-item">
                <img src={parkerPen} alt="Parker Pen" className="pen-image" />
                <h4 className="pen-title">Parker Pen</h4>
                <p className="pen-price">₹499</p>
                <p className="pen-description">Premium Parker pen with elegant design and exceptional writing quality. Ideal for executives and special occasions.</p>
                <button className="pen-button">Add to Inquiry</button>
              </div>
              
              <div className="pen-item">
                <img src={seedPen} alt="Seed Pen" className="pen-image" />
                <h4 className="pen-title">Seed Pen</h4>
                <p className="pen-price">₹299</p>
                <p className="pen-description">Eco-friendly seed pen that can be planted after use. Grows into herbs or flowers, making it a sustainable gift choice.</p>
                <button className="pen-button">Add to Inquiry</button>
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

export default PensPage;