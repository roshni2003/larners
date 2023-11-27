
import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';


const Footer = () => {
  const footerStyle = {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    padding: '20px',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  };

  const columnStyle = {
    flex: '1',
    padding: '10px',
    // borderRight: '1px solid #ccc',
  };
  const iconStyle = {
    fontSize: '2rem', // Adjust icon size as needed
    margin: '0 10px', // Adjust margin between icons
    color: '#3f51b5', // Example color
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
            {/* <br></br> */}
            <p>Membership</p>
            {/* <br></br> */}
            <p>Purchases Guide</p>
            {/* <br></br> */}
            <p>Terms of service</p>
          </div>
          <div style={columnStyle}>
            <h3>Get In Touch</h3>
            <p>Navgurukul Social Welfare</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
