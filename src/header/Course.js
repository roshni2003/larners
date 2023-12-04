import React, { useState } from 'react';
import { AppBar, Toolbar, MenuItem, Menu, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



import Javascript from "./Javascript";
import Cplush from "./Cplush";
import Node from "./Node";
import Python from "./Python";
import English from "./English";

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
        <AppBar position="static">
          <Toolbar>
            <Button
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ marginRight: '20px', backgroundColor: '#2196f3', color: 'red' }}
            >
              Select Language
            </Button>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/Cource/Javascript" onClick={handleClose}>
                Javascript
              </MenuItem>
              <MenuItem component={Link} to="/Cource/Cplush" onClick={handleClose}>
                c++
              </MenuItem>
              <MenuItem component={Link} to="/Cource/React" onClick={handleClose}>
                React
              </MenuItem>
              <MenuItem component={Link} to="/Cource/Node" onClick={handleClose}>
                Node
              </MenuItem>
              <MenuItem component={Link} to="/Cource/Python" onClick={handleClose}>
                python
              </MenuItem>
              <MenuItem component={Link} to="/Cource/English" onClick={handleClose}>
                English
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Conditionally apply background image styling for the /Cource route */}
        <Routes>
          <Route path="/Cource/Javascript/*" element={<Javascript />} />
          <Route path="/Cource/Cplush/*" element={<Cplush />} />
          <Route path="/Cource/Node/*" element={<Node />} />
          <Route path="/Cource/Python/*" element={<Python/>} />
          <Route path="/Cource/English/*" element={<English />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Course;
