// App.js

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUsPage from "./components/ContactUsPage";
import "./App.css"; // Import a CSS file for styling

function App() {
  return (
    <div>
      <Navbar />
      <div className="Landing">
        <h1>
          UNLOCK YOUR HOME-OWNERSHIP POTENTIAL
          <br />
          CALCULATE YOUR AFFORDABLE HOME BUDGET INSTANTLY
        </h1>

        <div className="buttons-container">
          <button className="long-button">Long Button</button>
          <div className="short-buttons">
            <button>Short Button 1</button>
            <button>Short Button 2</button>
          </div>
        </div>
      </div>

      {/* New Card Section */}
      <div className="card-section">
        {/* Card 1 */}
        <div className="card">
          <h2>Card 1</h2>
          <h3>Subtitle 1</h3>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <img
            src="images/house.jpg" // Replace with the actual image path
            alt="Card 1"
            style={{ borderRadius: "30px", maxWidth: "100%" }}
          />
          <button>Buy a Home</button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <h2>Card 2</h2>
          <h3>Subtitle 2</h3>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <img
            src="images/house.jpg" // Replace with the actual image path
            alt="Card 2"
            style={{ borderRadius: "30px", maxWidth: "100%" }}
          />
          <button>Buy a Home</button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h2>Card 3</h2>
          <h3>Subtitle 3</h3>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <img
            src="images/house.jpg" // Replace with the actual image path
            alt="Card 3"
            style={{ borderRadius: "30px", maxWidth: "100%" }}
          />
          <button>Buy a Home</button>
        </div>
      </div>

      {/* New Card Section for the 4th card */}
      <div className="testimonial">
        {/* Card 4 */}
        <div
          className="card-t"
          style={{ borderRadius: "30px", position: "relative" }}
        >
          <img
            src="images/circle-image.jpg" // Replace with the actual image path
            alt="Card 4"
            style={{
              borderRadius: "30px 30px 0 0",
              maxWidth: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <h2>Card 4</h2>
          <h3>Subtitle 4</h3>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <button>Buy a Home</button>
        </div>

        <div
          className="card-t"
          style={{ borderRadius: "30px", position: "relative" }}
        >
          <img
            src="images/circle-image.jpg" // Replace with the actual image path
            alt="Card 4"
            style={{
              borderRadius: "30px 30px 0 0",
              maxWidth: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <h2>Card 4</h2>
          <h3>Subtitle 4</h3>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <button>Buy a Home</button>
        </div>

        <div
          className="card-t"
          style={{ borderRadius: "30px", position: "relative" }}
        >
          <img
            src="images/circle-image.jpg" // Replace with the actual image path
            alt="Card 4"
            style={{
              borderRadius: "30px 30px 0 0",
              maxWidth: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <h2>Card 4</h2>
          <h3>Subtitle 4</h3>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <button>Buy a Home</button>
        </div>    


      </div>
      <ContactUsPage/>
      <Footer/>
      {/* Footer Section */}
      {/* <footer className="footer" style={{ textAlign: "left", position:"absolute" }}>
        <div className="logo">
          <img src="images/logo.png" alt="Logo" />
        </div>
        <div className="about">
          <p>
            Short about paragraph goes here. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="social-media"> */}
          {/* Replace the URLs with your actual social media links */}
          {/* <a href="https://www.facebook.com">
            <img src="images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src="images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com">
            <img src="images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </footer> */}
      
    </div>
  );
}

export default App;
 