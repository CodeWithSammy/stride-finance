import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.logoContainer}>
        <img src="/company_logo.png" alt="Company Logo" style={styles.logo} />
      </div>
      <div style={styles.socialIcons}>
        <a href="https://www.facebook.com/example" style={styles.iconLink}>
          <FaFacebookSquare style={styles.icon} />
        </a>
        <a href="https://www.instagram.com/example" style={styles.iconLink}>
          <FaInstagram style={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/company/example" style={styles.iconLink}>
          <FaLinkedin style={styles.icon} />
        </a>
      </div>
      <p style={styles.copyRight}>© 2024 Example Company. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#11395EC3',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    // position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  logoContainer: {
    marginBottom: '20px',
    textAlign: 'left',
    paddingLeft: '20px',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  socialIcons: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
  },
  iconLink: {
    marginRight: '10px',
    display: 'inline-block',
  },
  icon: {
    fontSize: '24px',
    color: '#fff',
    transition: 'color 0.3s ease',
  },
  copyRight: {
    fontSize: '12px',
  },
  // Media query for smaller screens
  '@media (max-width: 768px)': {
    logoContainer: {
      textAlign: 'center',
      paddingLeft: '0',
    },
    logo: {
      width: '80px',
    },
    socialIcons: {
      flexDirection: 'column',
    },
    iconLink: {
      marginRight: '0',
      marginBottom: '10px',
    },
  },
};

export default Footer;
