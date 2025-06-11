import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import './modernStyles.css'
import logo from './assets/logourban.png'
import PensPage from './Pens/page'
import DiariesPage from './Diaries/page'
import classicNotebook from './assets/ClassicNotebook.png'
import woodenDiary from './assets/woodendiary.png'
import woodenNotebook from './assets/woodennotebook.png'
import tempBottle from './assets/tempbottle.png'
import hotColdBottle from './assets/hotncoldbottle.png'
import coffeeMug from './assets/coffeemug.png'
import ApparelPage from './Apparel/page'
function HomePage() {
  return <App />;
}

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-button');
    const navContainer = document.querySelector('.nav-container');
    
    // Function to set active navigation link based on scroll position
    function setActiveNavLink() {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= (sectionTop - 100)) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
      
      // Add shadow and more opacity to nav when scrolling
      if (window.scrollY > 50) {
        navContainer.classList.add('nav-scrolled');
      } else {
        navContainer.classList.remove('nav-scrolled');
      }
    }
    
    // Set active link on scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Set active link on page load
    setActiveNavLink();
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', setActiveNavLink);
    };
  }, []);
  
  return (
    <div className="app-container">
      <div className="nav-container">
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
      </div>
      
      <main>
        <section id="home" className="section">
          <div className="title-container">
            <div className="title-content">
              <p className="tagline" style={{color: "black", fontWeight: "bold"}}>Gifting made memorable.</p>
              <h1 className="title">Urban Dezine</h1>
              <p className="subheading" style={{color: "black", fontWeight: "bold"}}>Customizing Your Thoughts Since 2015</p>
              <p className="welcome-message">Looking for a gift that speaks your vibe? We turn your thoughts into beautiful, personalized products that stay close to the heart. From sleek metal pens to cozy hoodies, aesthetic diaries to premium laptop bags — everything here is uniquely you.</p>
              
              <a href="https://wa.me/918310610919" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat with us on WhatsApp
              </a>
              
              <div className="services-highlight">
                <div className="service-item">
                  <span className="service-number">01</span>
                  <span className="service-title">Corporate Gifting</span>
                  <p className="service-description">Elevate your client relationships with premium, thoughtful corporate gifts that leave a lasting impression—because your brand speaks through every detail.</p>
                </div>
                <div className="service-item">
                  <span className="service-number">02</span>
                  <span className="service-title">Personalized Keepsakes</span>
                  <p className="service-description">Turn moments into memories with personalized keepsakes that your loved ones will cherish forever—crafted to celebrate milestones, big or small.</p>
                </div>
                <div className="service-item">
                  <span className="service-number">03</span>
                  <span className="service-title">Custom Apparel</span>
                  <p className="service-description">Design custom apparel that reflects your brand's personality—perfect for teams, events, or anyone who wears your identity with pride.</p>
                </div>
                <div className="service-item">
                  <span className="service-number">04</span>
                  <span className="service-title">Brand Merch Kit</span>
                  <p className="service-description">From startup swag to full-fledged brand experiences, our curated merch kits pack everything you need to make your business unforgettable.</p>
                </div>
              </div>
              
              <p className="welcome-message quote" style={{color: "black", fontWeight: "bold"}}>"Don't blend in. Stand out with something made just for you."</p>
              
              <a href="#products" className="cta-button" style={{background: "#29281E", color: "white"}}>
                Explore Our Products
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
            <div className="image-section">
              {/* Space reserved for images */}
              <div className="image-placeholder">
                <p>Image gallery will be added here</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="about" className="section">
          <div className="title-content">
            <h2>About Us</h2>
            <h3>We Make Things Personal</h3>
            <p className="welcome-message"style={{  textAlign: "center", fontSize: "1.3rem", margin: "30px 0", color: "#F4EEEB"}}>At Urban Dezine, we believe in more than just gifting. We believe in expression. Since 2015, we've helped brands, corporates, and individuals turn ideas into tangible, beautiful products. With a growing catalogue of custom goodies — like stylish diaries, premium bottles, quirky mugs, tech gadgets, uniforms, and teamwear — our mission is simple:</p>
            <p className="welcome-message" style={{ fontStyle: "italic", fontWeight: "bold", textAlign: "center", fontSize: "1.3rem", margin: "30px 0", color: "#F4EEEB"}}>"If you can think it, we can print it."</p>
            <p className="welcome-message"style={{  textAlign: "center",  color: "#F4EEEB"}}>From your company's next swag box to your BFF's birthday gift — our design + delivery team ensures high quality, high style, and high satisfaction.</p>
          </div>
        </section>
        
        <section id="products" className="section">
          <div className="title-content">
            <h2>Our Products</h2>
            <h3>What We Offer</h3>
            <div className="product-items">
              <div className="product-item">
                <span className="product-icon">🖋</span>
                <Link to="/pens" style={{ color: "#F4EEEB", textDecoration: "none" }}>
                  <p>Pens (Metal, Parker, Seeded)</p>
                </Link>
              </div>
              <div className="product-item">
                <span className="product-icon">📓</span>
                <Link to="/diaries" style={{ color: "#F4EEEB", textDecoration: "none" }}>
                  <p>Diaries, Mugs & Waterbottles</p>
                </Link>
              </div>
              <div className="product-item">
                <span className="product-icon">🎽</span>
                <Link to="/apparel" style={{ color: "#F4EEEB", textDecoration: "none" }}>
                  <p>Apparel (T-shirts, Hoodies, Jackets, Uniforms)</p>
                </Link>
              </div>
              <div className="product-item">
                <span className="product-icon">🎁</span>
                <p>Gifting Kits (Combo Boxes, Employee Kits)</p>
              </div>
              <div className="product-item">
                <span className="product-icon">🖥️</span>
                <p>Tech (Earbuds, Bluetooth Speakers, Power Banks)</p>
              </div>
              <div className="product-item">
                <span className="product-icon">🎒</span>
                <p>Bags (Laptop, Leather, Fabric, Sleeves)</p>
              </div>
              <div className="product-item">
                <span className="product-icon">🎨</span>
                <p>Fully Custom Corporate Merchandise</p>
              </div>
            </div>
            
            <h3 style={{marginTop: "50px"}}>Client Testimonials</h3>
            <div className="testimonial-container">
              <div className="testimonial-card">
                <p className="testimonial-text">"Urban Dezine transformed our company swag from basic to brilliant. The quality of their products and attention to detail is unmatched."</p>
                <p className="testimonial-author">Sarah Johnson</p>
                <p className="testimonial-company">Marketing Director, TechCorp</p>
              </div>
              <div className="testimonial-card">
                <p className="testimonial-text">"We've been working with Urban Dezine for our corporate gifting needs for 3 years now. Their creativity and reliability keep us coming back."</p>
                <p className="testimonial-author">Raj Patel</p>
                <p className="testimonial-company">CEO, Innovate Solutions</p>
              </div>
            </div>
          </div>
        </section>
      </main>

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
            <div style={{display: "flex", gap: "15px", marginTop: "15px"}}>
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
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pens" element={<PensPage />} />
        <Route path="/diaries" element={<DiariesPage />} />
        <Route path="/apparel" element={<ApparelPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)