import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
import logo from '../assets/logourban.png';

function BagsPage() {
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
            <h2>Bags Collection</h2>
            <h3>Premium Corporate & Travel Bags</h3>
            
            <div className="diaries-container">
              <div className="diary-item">
                <h4 className="diary-title">Executive Laptop Bag</h4>
                <p className="diary-price">Starting from ₹999</p>
                <p className="diary-description">Professional laptop bag with multiple compartments. Perfect for business professionals.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>
              
              <div className="diary-item">
                <h4 className="diary-title">Travel Backpack</h4>
                <p className="diary-price">Starting from ₹1299</p>
                <p className="diary-description">Spacious backpack with anti-theft features and USB charging port. Ideal for modern travelers.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>
              
              <div className="diary-item">
                <h4 className="diary-title">Conference Tote</h4>
                <p className="diary-price">Starting from ₹599</p>
                <p className="diary-description">Elegant tote bag perfect for conferences and meetings. Includes padded tablet sleeve.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Messenger Bag</h4>
                <p className="diary-price">Starting from ₹799</p>
                <p className="diary-description">Versatile messenger bag with adjustable strap. Great for daily commute and casual meetings.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Gym Duffel</h4>
                <p className="diary-price">Starting from ₹699</p>
                <p className="diary-description">Spacious duffel bag with shoe compartment. Perfect for gym and sports activities.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Document Bag</h4>
                <p className="diary-price">Starting from ₹449</p>
                <p className="diary-description">Professional document carrier with multiple sections. Ideal for organizing important papers.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Weekend Bag</h4>
                <p className="diary-price">Starting from ₹1499</p>
                <p className="diary-description">Stylish weekend bag with separate compartments for clothes and accessories.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Eco-Friendly Tote</h4>
                <p className="diary-price">Starting from ₹299</p>
                <p className="diary-description">Sustainable canvas tote with custom branding options. Perfect for eco-conscious organizations.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <h4 className="diary-title">Executive Briefcase</h4>
                <p className="diary-price">Starting from ₹1999</p>
                <p className="diary-description">Premium leather briefcase with dedicated laptop compartment and organizer pockets.</p>
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

export default BagsPage;