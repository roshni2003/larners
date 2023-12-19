

import React from 'react';
import { Card, CardContent, Typography, useMediaQuery, useTheme, Grid, Box } from '@mui/material';

const OurStory = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const centerStyle = {
    display: 'flex',
    alignItems: 'Top',
    justifyContent: 'Top',
    flexDirection: 'column', 
    height: '100vh',
};
const mainTextStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '30px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  textDecoration: 'underline', 
};
const secondaryTextStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '20px',
    color: 'black', 
  
};
const thirdtextstyle={
    margin:'0 500px ',
    
};
const rightImageStyle = {
    width: '50%', 
    float: 'right',
    marginLeft: '20px', 
  };


  return (
    

    <div style={centerStyle}>
      
      <h1 style={mainTextStyle}>
      "Education Unboxed, Excellence Unleashed"
      </h1>
      <img src="/path/to/your/image.jpg" alt="Description" style={rightImageStyle} />
      <h1>
      Welcome to AcademicHub
      </h1>
      <p style={secondaryTextStyle} >
      At AcademicHub, we're dedicated to revolutionizing online learning,
      <br>
      </br>
       creating an interactive and engaging platform that nurtures the minds of learners worldwide. 
      <br></br>
      Our mission is to provide unparalleled educational experiences, empowering individuals to 
      <br></br>
      achieve their learning goals and excel in their chosen fields.
      </p>
      <div>
      
      <h1>
      Our Approach
      </h1>
      <p style={secondaryTextStyle}>
      At AcademicHub, we believe in practical learning that goes beyond the textbook. 
      <br></br>
      Our approach focuses on fostering critical thinking, creativity, and hands-on experience, 
      <br></br>
      ensuring that learners acquire not just knowledge but also valuable skills applicable in real-world scenarios.

      </p>
      </div>
      <div>
      <h1>
        What We Offer ?
      </h1>
      <p style={secondaryTextStyle}>
      Discover a vast array of courses, programs,and tutorials designed to cater to diverse 
      <br></br>
      interests and skill levels. From technical courses in programming to creative arts and business management, 
       <br></br>
       our platform offers a wide spectrum of learning opportunities.
      </p>
      </div>
      <div>
      <h1>
      Our Vision for the Future
      </h1>
      <p style={secondaryTextStyle}>
      We envision expanding our course catalog, forging new partnerships, and integrating the latest advancements in education technology.
      <br></br>
       Our goal is to continuously evolve and offer the best learning experiences to our community.
      </p>
      </div>
      <div>
      <h1>
      Join Us Today!
      </h1>
      <p style={secondaryTextStyle}>
      Ready to embark on an enriching educational journey? Sign up now to explore our courses and be a part of our thriving learning community.
      </p>
      </div>
    </div>

  );
};

export default OurStory;
