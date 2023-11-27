import React, { useState } from 'react';
import { AppBar, Toolbar, Select, MenuItem, Menu, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Javascript from "./Javascript";
import Cplush from "./Cplush";
import Node from "./Node";
import Hindi from "./Hindi";
import English from "./English";

const Cource = () => {
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
        <AppBar position="static">
          <Toolbar>
            <Button
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ marginRight: '20px', backgroundColor: '#2196f3', color: 'white' }}
            >
              Select Language
            </Button>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/Javascript" onClick={handleClose}>
                Javascript
              </MenuItem>
            
              <MenuItem component={Link} to="/Cplush" onClick={handleClose}>
                c++
              </MenuItem>
              <MenuItem component={Link} to="/React" onClick={handleClose}>
                React
              </MenuItem>
              <MenuItem component={Link} to="/Node" onClick={handleClose}>
                Node
              </MenuItem>
              <MenuItem component={Link} to="/Hindi" onClick={handleClose}>
                Hindi
              </MenuItem>
              <MenuItem component={Link} to="/English" onClick={handleClose}>
                English
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/Javascript" element={<Javascript />} />
          <Route path="/Hindi" element={<Hindi />} />
          <Route path="/English" element={<English />} />
          <Route path="/Cplush" element={<Cplush />} />
          <Route path="/Node" element={<Node />} />
          <Route path="/React" element={<div>React Component</div>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default Cource;
