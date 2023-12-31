

import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';


const Footer = () => {
  const footerStyle = {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    padding: '0px 20px',
  };

  const sectionStyle = {
    display: 'flex',
  };

  const columnStyle = {
    flex: '1',
    padding: '10px',
  };
  const iconStyle = {
    fontSize: '1.5rem',
    margin: '0 10px',
    color: '#3f51b5',
  };

  return (
    <div style={footerStyle}>
      <div className="footer-content">
        <div style={sectionStyle}>
          <div style={columnStyle}>
            <h3>ACADEMICHUB</h3>
            <p>Follow us on social media
            <div className="social-icons">
        <Facebook style={iconStyle} />
        <Twitter style={iconStyle} />
        <Instagram style={iconStyle} />
        
      </div>
            </p>

          </div>
          <div style={columnStyle}>
            <h3>Information</h3>
            <p>Privacy policy</p>
            <p>Membership</p>
            <p>Purchases Guide</p>
            <p>Terms of service</p>
          </div>
          <div style={columnStyle}>
            <h3>Get In Touch</h3>
            <p>Navgurukul Social Welfare</p>
            <p>made by our meraki Intern's❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
