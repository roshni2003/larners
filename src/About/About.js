// import React from "react";
// const About=()=>{
//     return(
//         <div>hii</div>
//     )

// }
// export default About;

import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const About = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        Courses
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>our Story</MenuItem>
        <MenuItem onClick={handleClose}>Team</MenuItem>
   
      </Menu>
    </>
  );
};

export default About;