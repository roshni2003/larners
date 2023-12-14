import React, { useState } from 'react';
import {MenuItem, Menu, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Javascript from './Javascript';
import Cplush from './Cplush';
import Python from './Python';
import English from './English';

const Course = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div>
        <Button
          aria-controls="language-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ marginRight: '20px', backgroundColor: '#64b5f6', color: 'red' }}
        >
          Learn
        </Button>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/Cource/Javascript" onClick={handleClose} >
            Javascript
          </MenuItem>
          <MenuItem component={Link} to="/Cource/Cplush" onClick={handleClose} >
            C++
          </MenuItem>
          <MenuItem component={Link} to="/Cource/Python" onClick={handleClose} >
            Python
          </MenuItem>
          <MenuItem component={Link} to="/Cource/English" onClick={handleClose} >
            English
          </MenuItem>
        </Menu>

        <Routes>
          <Route path="/Cource/Javascript/*" element={<Javascript />} />
          <Route path="/Cource/Cplush/*" element={<Cplush />} />
          <Route path="/Cource/Python/*" element={<Python />} />
          <Route path="/Cource/English/*" element={<English />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Course;
