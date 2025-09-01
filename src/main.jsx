import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import './modernStyles.css'
import logo from './assets/logourban.png'
import mainpage from './assets/Mainpage.png'
import PensPage from './Pens/page'
import DiariesPage from './Diaries/page'
import classicNotebook from './assets/ClassicNotebook.png'
import woodenDiary from './assets/woodendiary.png'
import woodenNotebook from './assets/woodennotebook.png'
import tempBottle from './assets/tempbottle.png'
import hotColdBottle from './assets/hotncoldbottle.png'
import coffeeMug from './assets/coffeemug.png'
import metalPen from './assets/metal pen.png'
import hoodie from './assets/hoodie.png'
import setof3Black from './assets/setof3_black.png'
import setof5 from './assets/setof5.png'
import ApparelPage from './Apparel/page'
import GiftingSetsPage from './GiftingSets/page'
import TechPage from './Tech/page'
import BagsPage from './Bags/page'
import CustomMerchandisePage from './CustomMerchandise/page'

function HomePage() {
  return <App />;
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [showContent, setShowContent] = React.useState(false);

  useEffect(() => {
    // Simulate loading time for the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start content animations after loader disappears
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Site Loader */}
      <div id="site-loader" className={isLoading ? "site-loader" : "site-loader loader-hide"}>
        <div className="loader-content">
          <img src={logo} alt="UrbanDezine Logo" className="loader-logo" />
          <div className="loader-spinner"></div>
          <h2 className="loader-title">Urban Dezine</h2>
        </div>
      </div>

      {/* Main App Container */}
      <div className={`app-container ${!isLoading ? 'visible' : ''}`}>
        <div className="main-content-wrapper">
        {/* Navigation */}
        <nav className="nav-container">
          <div className="logo-container">
            <img src={logo} alt="Urban Dezine Logo" className="logo" />
          </div>
          <div className="contact-icons">
            <a href="https://wa.me/918310613919" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a href="tel:+918310613919" className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
              </svg>
            </a>
            <span className="contact-number">+91 831 061 0919</span>
          </div>
          <div className="nav-buttons">
            <a href="#home" className="nav-button">Home</a>
            <a href="#about" className="nav-button">Services</a>
            <a href="#products" className="nav-button">Catalog</a>
            <a href="#footer" className="nav-button">Contact</a>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <section id="home" className="section">
            <div className="title-container">
              <div className={`title-content ${showContent ? 'animate-in' : ''}`}>
                <p className={`tagline ${showContent ? 'fade-in-up delay-1' : ''}`} style={{color: "black", fontWeight: "bold"}}>Gifting made memorable.</p>
                <h1 className={`title ${showContent ? 'fade-in-up delay-2' : ''}`}>Urban Dezine</h1>
                <p className={`subheading ${showContent ? 'fade-in-up delay-3' : ''}`} style={{color: "black", fontWeight: "bold"}}>Customizing Your Thoughts Since 2015</p>
                <p className={`welcome-message ${showContent ? 'fade-in-up delay-4' : ''}`}>Looking for a gift that speaks your vibe? We turn your thoughts into beautiful, personalized products that stay close to the heart. From sleek metal pens to cozy hoodies, aesthetic diaries to premium laptop bags — everything here is uniquely you.</p>
                
                <a href="https://wa.me/918310610919" target="_blank" rel="noopener noreferrer" className={`whatsapp-button ${showContent ? 'fade-in-up delay-5' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Chat with us on WhatsApp
                </a>
              </div>
              <div className={`image-section ${showContent ? 'slide-in-right delay-5' : ''}`}>
                <div className="image-placeholder">
                  <img src={mainpage} alt="Urban Dezine Main Gallery" className="main-gallery-image" />
                </div>
              </div>
            </div>
            
            <div className={`services-highlight ${showContent ? 'fade-in-up delay-6' : ''}`}>
              <div className={`service-item ${showContent ? 'slide-in-left delay-7' : ''}`}>
                <span className="service-number">01</span>
                <span className="service-title">Corporate Gifting</span>
                <p className="service-description">Elevate your client relationships with premium, thoughtful corporate gifts that leave a lasting impression—because your brand speaks through every detail.</p>
              </div>
              <div className={`service-item ${showContent ? 'slide-in-left delay-8' : ''}`}>
                <span className="service-number">02</span>
                <span className="service-title">Personalized Keepsakes</span>
                <p className="service-description">Turn moments into memories with personalized keepsakes that your loved ones will cherish forever—crafted to celebrate milestones, big or small.</p>
              </div>
              <div className={`service-item ${showContent ? 'slide-in-left delay-9' : ''}`}>
                <span className="service-number">03</span>
                <span className="service-title">Custom Apparel</span>
                <p className="service-description">Design custom apparel that reflects your brand's personality—perfect for teams, events, or anyone who wears your identity with pride.</p>
              </div>
              <div className={`service-item ${showContent ? 'slide-in-left delay-10' : ''}`}>
                <span className="service-number">04</span>
                <span className="service-title">Brand Merch Kit</span>
                <p className="service-description">From startup swag to full-fledged brand experiences, our curated merch kits pack everything you need to make your business unforgettable.</p>
              </div>
            </div>
            
            <div className="quote-section">
              <p className={`welcome-message quote ${showContent ? 'fade-in-up delay-11' : ''}`}>
                "Don't blend in. Stand out with something made just for you."
              </p>
              
              <a href="#products" className={`cta-button ${showContent ? 'fade-in-up delay-12' : ''}`} style={{background: "#29281E", color: "white"}}>
                Explore Our Products
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </section>

          <section id="about" className="section">
            <div className="about-container">
              <div className="about-header">
                <h2 className={`section-title ${showContent ? 'fade-in-up delay-13' : ''}`}>About Us</h2>
                <h3 className={`about-subtitle ${showContent ? 'fade-in-up delay-14' : ''}`}>We Make Things Personal</h3>
              </div>
              
              <div className="about-content">
                <div className={`about-text ${showContent ? 'fade-in-up delay-15' : ''}`}>
                  <div className="about-story">
                    <div className="story-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#88d3ce">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <p>
                      At Urban Dezine, we believe that the best gifts are the ones that tell a story. Since 2015, we've been turning ordinary products into extraordinary keepsakes that capture memories, celebrate achievements, and strengthen relationships.
                    </p>
                  </div>
                  
                  <div className="story-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#88d3ce">
                      <path d="M9 11H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9zm2.5-9H20v2h-0.5l-1 12H5.5l-1-12H4V2h0.5c0.28 0 0.5-0.22 0.5-0.5V1c0-0.55 0.45-1 1-1h12c0.55 0 1 0.45 1 1v0.5c0 0.28 0.22 0.5 0.5 0.5z"/>
                    </svg>
                  </div>
                  <p>
                    Whether you're looking to reward your team, surprise a loved one, or make your brand unforgettable, we craft each piece with attention to detail and a personal touch that makes all the difference.
                  </p>
                </div>
                
                <div className={`about-stats ${showContent ? 'fade-in-up delay-16' : ''}`}>
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">Products Customized</div>
                  </div>
                </div>
                
                <div className={`about-cta ${showContent ? 'fade-in-up delay-17' : ''}`}>
                  <a href="https://wa.me/918310610919" target="_blank" rel="noopener noreferrer" className="about-whatsapp-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section features-section">
            <div className="features-header">
              <h2 className={`section-title ${showContent ? 'fade-in-up delay-18' : ''}`}>Why Choose Urban Dezine?</h2>
              <p className={`section-subtitle ${showContent ? 'fade-in-up delay-19' : ''}`}>We deliver excellence in every customized product</p>
            </div>
            
            <div className="features-grid">
              <div className={`feature-card ${showContent ? 'fade-in-up delay-20' : ''}`}>
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#88d3ce">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3>Premium Quality</h3>
                <p>We use only the finest materials and latest printing techniques to ensure your customized products exceed expectations.</p>
              </div>

              <div className={`feature-card ${showContent ? 'fade-in-up delay-21' : ''}`}>
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#88d3ce">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Fast Delivery</h3>
                <p>Quick turnaround times without compromising quality. Most orders are completed within 3-5 business days.</p>
              </div>

              <div className={`feature-card ${showContent ? 'fade-in-up delay-22' : ''}`}>
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#88d3ce">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3>Global Reach</h3>
                <p>Serving clients worldwide with reliable shipping and excellent customer support across different time zones.</p>
              </div>
            </div>
          </section>

          <section id="products" className="section">
            <div className="products-container">
              <div className="products-header">
                <h2 className={`section-title ${showContent ? 'fade-in-up delay-13' : ''}`}>Our Products</h2>
                <p className={`section-subtitle ${showContent ? 'fade-in-up delay-14' : ''}`}>Discover our premium collection of customizable products</p>
              </div>
            
            <div className="products-grid">
              <Link to="/pens" className={`product-card ${showContent ? 'fade-in-up delay-15' : ''}`}>
                <div className="product-image">
                  <img src={metalPen} alt="Premium Pens" />
                  <div className="product-overlay">
                    <span className="view-more">View Collection</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Premium Pens</h3>
                  <p>Elegant writing instruments that make a statement</p>
                  <span className="product-count">5+ Designs</span>
                </div>
              </Link>

              <Link to="/diaries" className={`product-card ${showContent ? 'fade-in-up delay-16' : ''}`}>
                <div className="product-image">
                  <img src={woodenDiary} alt="Custom Diaries" />
                  <div className="product-overlay">
                    <span className="view-more">View Collection</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Custom Diaries</h3>
                  <p>Personalized notebooks for thoughts and ideas</p>
                  <span className="product-count">8+ Designs</span>
                </div>
              </Link>

              <Link to="/apparel" className={`product-card ${showContent ? 'fade-in-up delay-17' : ''}`}>
                <div className="product-image">
                  <img src={hoodie} alt="Custom Apparel" />
                  <div className="product-overlay">
                    <span className="view-more">View Collection</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Custom Apparel</h3>
                  <p>Branded clothing that represents your style</p>
                  <span className="product-count">10+ Items</span>
                </div>
              </Link>

              <Link to="/tech" className={`product-card ${showContent ? 'fade-in-up delay-18' : ''}`}>
                <div className="product-image">
                  <img src={tempBottle} alt="Tech Accessories" />
                  <div className="product-overlay">
                    <span className="view-more">View Collection</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Tech Accessories</h3>
                  <p>Modern gadgets with a personal touch</p>
                  <span className="product-count">6+ Items</span>
                </div>
              </Link>

              <Link to="/bags" className={`product-card ${showContent ? 'fade-in-up delay-19' : ''}`}>
                <div className="product-image">
                  <img src={setof3Black} alt="Premium Bags" />
                  <div className="product-overlay">
                    <span className="view-more">View Collection</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Premium Bags</h3>
                  <p>Functional and stylish carrying solutions</p>
                  <span className="product-count">4+ Styles</span>
                </div>
              </Link>

              <Link to="/gifting-sets" className={`product-card ${showContent ? 'fade-in-up delay-20' : ''}`}>
                <div className="product-image">
                  <img src={setof5} alt="Gifting Sets" />
                  <div className="product-overlay">
                    <span className="view-more">View Collection</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Gifting Sets</h3>
                  <p>Curated collections for special occasions</p>
                  <span className="product-count">3+ Sets</span>
                </div>
              </Link>
            </div>
            </div>
          </section>

          <section className="section testimonials-section">
            <div className="testimonials-header">
              <h2 className={`section-title ${showContent ? 'fade-in-up delay-23' : ''}`}>What Our Clients Say</h2>
              <p className={`section-subtitle ${showContent ? 'fade-in-up delay-24' : ''}`}>Real feedback from satisfied customers</p>
            </div>
            
            <div className="testimonials-grid">
              <div className={`testimonial-card ${showContent ? 'fade-in-up delay-25' : ''}`}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#88d3ce">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                  <p>"Urban Dezine delivered exactly what we needed for our corporate event. The quality was outstanding and our clients loved the personalized notebooks!"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <strong>Rajesh Kumar</strong>
                      <span>Marketing Director, TechCorp</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`testimonial-card ${showContent ? 'fade-in-up delay-26' : ''}`}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#88d3ce">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                  <p>"Amazing attention to detail! The custom hoodies for our team came out perfect. Great communication throughout the process."</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <strong>Priya Sharma</strong>
                      <span>HR Manager, StartupHub</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`testimonial-card ${showContent ? 'fade-in-up delay-27' : ''}`}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#88d3ce">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                  </div>
                  <p>"Fast delivery and excellent quality! The personalized pens were a hit at our conference. Will definitely order again."</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <strong>Amit Patel</strong>
                      <span>Event Coordinator, CreativeAgency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="footer-content">
            <div className="contact-section">
              <h3>Contact Us</h3>
              <p>📍 Based in India</p>
              <p><strong>Email:</strong> <a href="mailto:urbandezine2015@gmail.com">urbandezine2015@gmail.com</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/919886010956">+91-9886010956</a></p>
            </div>
            <div className="contact-section">
              <h3>Follow Us</h3>
              <p>Stay connected with us on social media for the latest updates and inspiration.</p>
              <div className="social-icons">
                <a href="#" className="contact-icon" style={{padding: "10px", borderRadius: "50%"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="contact-icon" style={{padding: "10px", borderRadius: "50%"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="contact-icon" style={{padding: "10px", borderRadius: "50%"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Urban Dezine. All rights reserved.</p>
          </div>
        </footer>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pens" element={<PensPage />} />
        <Route path="/diaries" element={<DiariesPage />} />
        <Route path="/apparel" element={<ApparelPage />} />
        <Route path="/gifting-sets" element={<GiftingSetsPage />} />
        <Route path="/tech" element={<TechPage />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/custom-merchandise" element={<CustomMerchandisePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
