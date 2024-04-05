import React from 'react';
import './AboutUsPage.css'; // Import CSS styles for the About Us page

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <header className="header">
        <h1>About Us</h1>
      </header>
      
      <section className="company-info">
        <h2>Stride Real Estate</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu libero ac lorem fringilla tristique. Sed non arcu auctor, vestibulum elit eu, consectetur risus. Aliquam vitae nisl sit amet arcu aliquam malesuada vel sed lorem.</p>
        <p>Suspendisse potenti. Nam nec justo magna. Integer eget ex at purus vestibulum lobortis. Nullam sodales magna sit amet purus eleifend posuere. Vestibulum sodales euismod dolor vel consectetur. Curabitur laoreet placerat augue a vestibulum.</p>
      </section>
      
      <section className="team">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="team_member1.jpg" alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="team_member2.jpg" alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Marketing Manager</p>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Real Estate Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
