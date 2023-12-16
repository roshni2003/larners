import React, { useState } from 'react';
import {MenuItem, Menu, Button, ListItemIcon } from '@mui/material';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';

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
    <BrowserRouter>
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
          <MenuItem component={Link} to="/Cource/Javascript" onClick={handleClose}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            Javascript
          </MenuItem>
          <MenuItem component={Link} to="/Cource/Cplush" onClick={handleClose}>
            <ListItemIcon>
              <ComputerIcon />
            </ListItemIcon>
            C++
          </MenuItem>
          <MenuItem component={Link} to="/Cource/Python" onClick={handleClose}>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            Python
          </MenuItem>
          <MenuItem component={Link} to="/Cource/English" onClick={handleClose}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
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
    </BrowserRouter>
  );
};

export default Course;
