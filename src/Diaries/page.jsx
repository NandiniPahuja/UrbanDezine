import React from 'react';
import { Link } from 'react-router-dom';
import '../modernStyles.css';
import '../productStyles.css';
import classicNotebook from '../assets/ClassicNotebook.png';
import woodenDiary from '../assets/woodendiary.png';
import woodenNotebook from '../assets/woodennotebook.png';
import tempBottle from '../assets/tempbottle.png';
import hotColdBottle from '../assets/hotncoldbottle.png';
import coffeeMug from '../assets/coffeemug.png';
import logo from '../assets/logourban.png';

function DiariesPage() {
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
            <h2>Diaries, Mugs & Waterbottles</h2>
            <h3>Premium Stationery & Drinkware</h3>
            
            <div className="diaries-container">
              <div className="diary-item">
                <img src={classicNotebook} alt="Classic Notebook" className="diary-image" />
                <h4 className="diary-title">Classic Notebook</h4>
                <p className="diary-price">₹185</p>
                <p className="diary-description">High-quality notebook with premium paper and elegant binding. Perfect for journaling and note-taking.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>
              
              <div className="diary-item">
                <img src={woodenDiary} alt="Wooden Diary" className="diary-image" />
                <h4 className="diary-title">Wooden Diary</h4>
                <p className="diary-price">₹295</p>
                <p className="diary-description">Handcrafted wooden cover diary with eco-friendly paper. A sustainable and stylish choice for your thoughts.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>
              
              <div className="diary-item">
                <img src={woodenNotebook} alt="Wooden Notebook" className="diary-image" />
                <h4 className="diary-title">Wooden Finish Notebook</h4>
                <p className="diary-price">₹265</p>
                <p className="diary-description">Compact wooden notebook with premium paper. Ideal for quick notes and sketches on the go.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <img src={tempBottle} alt="Temperature Control Bottle" className="diary-image" />
                <h4 className="diary-title">Temperature Control Bottle</h4>
                <p className="diary-price">₹310</p>
                <p className="diary-description">Advanced insulated bottle that keeps beverages hot or cold for up to 24 hours. Perfect for outdoor activities.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <img src={hotColdBottle} alt="Hot & Cold Bottle" className="diary-image" />
                <h4 className="diary-title">Hot & Cold Bottle</h4>
                <p className="diary-price">₹295</p>
                <p className="diary-description">Versatile bottle for both hot and cold beverages. Sleek design with leak-proof technology.</p>
                <button className="diary-button">Add to Inquiry</button>
              </div>

              <div className="diary-item">
                <img src={coffeeMug} alt="Coffee Mug" className="diary-image" />
                <h4 className="diary-title">Coffee Mug</h4>
                <p className="diary-price">₹175</p>
                <p className="diary-description">Premium ceramic coffee mug with elegant design. Perfect for your morning coffee or tea.</p>
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

export default DiariesPage;

