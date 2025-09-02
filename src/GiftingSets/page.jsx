import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
import '../productStyles.css';
import logo from '../assets/logourban.png';
import setOf3Wood from '../assets/setof3_wood.png';
import setOf3Red from '../assets/setof3_red.png';
import setOf3Black from '../assets/setof3_black.png';
import setOf5 from '../assets/setof5.png';

function GiftingSetsPage() {
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
            <h2>Gifting Sets</h2>
            <h3>Curated Gift Boxes & Employee Kits</h3>
            
            <div className="gifting-container">
              <div className="gifting-item">
                <img src={setOf3Wood} alt="Wooden Gift Set" className="gifting-image" />
                <h4 className="gifting-title">Welcome Kit</h4>
                <p className="gifting-price">Starting from ₹1499</p>
                <p className="gifting-description">Perfect onboarding kit including a diary, pen, bottle, and custom t-shirt. Make your new employees feel valued.</p>
                <button className="gifting-button">Add to Inquiry</button>
              </div>
              
              <div className="gifting-item">
                <img src={setOf3Black} alt="Black Gift Set" className="gifting-image" />
                <h4 className="gifting-title">Executive Gift Box</h4>
                <p className="gifting-price">Starting from ₹2499</p>
                <p className="gifting-description">Premium collection featuring a leather diary, metal pen, premium mug, and custom jacket. Ideal for corporate gifting.</p>
                <button className="gifting-button">Add to Inquiry</button>
              </div>
              
              <div className="gifting-item">
                <img src={setOf3Red} alt="Red Gift Set" className="gifting-image" />
                <h4 className="gifting-title">Tech Enthusiast Kit</h4>
                <p className="gifting-price">Starting from ₹1999</p>
                <p className="gifting-description">Modern gift set including wireless earbuds, power bank, phone stand, and custom laptop sleeve.</p>
                <button className="gifting-button">Add to Inquiry</button>
              </div>

              <div className="gifting-item">
                <img src={setOf5} alt="Premium Gift Set" className="gifting-image" />
                <h4 className="gifting-title">Wellness Package</h4>
                <p className="gifting-price">Starting from ₹1299</p>
                <p className="gifting-description">Health-focused kit with insulated water bottle, yoga mat, fitness tracker band, and sports t-shirt.</p>
                <button className="gifting-button">Add to Inquiry</button>
              </div>

              <div className="gifting-item">
                <img src={setOf5} alt="Festive Gift Set" className="gifting-image" />
                <h4 className="gifting-title">Festive Celebration Box</h4>
                <p className="gifting-price">Starting from ₹1799</p>
                <p className="gifting-description">Special occasion gift set with premium sweets box, custom mug, diary, and traditional items.</p>
                <button className="gifting-button">Add to Inquiry</button>
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

export default GiftingSetsPage;