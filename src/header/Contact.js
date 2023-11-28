
// import { Height } from '@mui/icons-material';
import React from 'react';

const Contact = () => {
  const contactStyle = {
    backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    width: '300px',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '10px',
  };

  const labelStyle = {
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: 'none',
    outline: 'none',
  };

  return (
    <div style={contactStyle}>
      <form style={formStyle} action="">
        <div>
          <label htmlFor="username" style={labelStyle}>
            Username
          </label>
          <input type="text"   autoComplete="off" name="fullname" id="fullname" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input type="text"   autoComplete="off"  name="email" id="email" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone
          </label>
          <input type="text"  autoComplete="off" name="phone" id="phone" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="help" style={labelStyle }>
            What can we help you with?
          </label>
          <input type="text"   autoComplete="off" name="help" id="help" style={inputStyle} />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Contact;

