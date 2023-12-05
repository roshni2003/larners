
// import React, { useState } from 'react';
// import { Button, Menu, MenuItem } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// const About = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleNavigation = (About) => {
//     navigate(`/${About.toLowerCase()}`);
//     handleClose();
//   };

//   return (
//     <>
      
//       <Button color="inherit" onClick={handleClick}>
//         About
//       </Button>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={() => handleNavigation('JAVASCRIPT')}>JAVASCRIPT</MenuItem>
//         <MenuItem onClick={() => handleNavigation('HTML')}>HTML</MenuItem>
        
//       </Menu>
//     </>
//   );
// };

// export default About;

import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (course) => {
    navigate(`/${course.toLowerCase()}`); // Assuming routes are set up as '/javascript', '/html', etc.
    handleClose();
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        About
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleNavigation('Ourstory')}>OURSTORY</MenuItem>
        <MenuItem onClick={() => handleNavigation('Ourteam')}>OURTEAM</MenuItem>
      </Menu>
    </>
  );
};

export default About;
