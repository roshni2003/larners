import React from 'react';
import { AppBar, Toolbar, Button, useMediaQuery, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import AboutDropdown from '../About/AboutDropdown';

const Navbar = () => {
  const linkStyle = { color: 'black', textDecoration: 'none' };
  const courses = [
    { label: 'Course', link: '/Course' },

    { label: 'Feedback', link: '/feedback' },
    { label: 'Register', link: '/register' },
  ];

  const isMobile = useMediaQuery('(max-width:600px)');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/" >
            <img src="logo.jpeg" alt="Logo" width="120" height="50" />
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <>
                <Button color="inherit" sx={{ marginRight: '10px' }}>
                  <AboutDropdown />
                </Button>
                <IconButton
                  color="black"
                  aria-label="menu"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
              </>
            )}
            {!isMobile && (
              <>
                <Button color="inherit">
                  <AboutDropdown />
                </Button>
                {courses.map((course, index) => (
                  <Button key={index} color="inherit">
                    <Link to={course.link} style={linkStyle}>
                      {course.label}
                    </Link>
                  </Button>
                ))}
              </>
            )}
            <Button color="inherit">
              <Link to="/donate" style={linkStyle}>
                Donate
              </Link>
            </Button>

            <Button color="inherit">
              <Link to="/contact" style={linkStyle}>
                Contact
              </Link>
            </Button>

            <IconButton color="inherit">
              <Link to="/studentprofile" style={linkStyle}>
                <PersonIcon />
              </Link>
            </IconButton>
          </Box>
          <Menu
            id="navbar-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {courses.map((course, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>
                <Link to={course.link} style={linkStyle}>
                  {course.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;