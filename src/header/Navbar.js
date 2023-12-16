import React from 'react';
import { AppBar, Toolbar, Button, useMediaQuery, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AboutDropdown from '../About/AboutDropdown';

const Navbar = () => {
  const linkStyle = { color: 'black', textDecoration: 'none' };
  const courses = [
    { label: 'Course', link: '/Course' },
    { label: 'Payment Status', link: '/payment' },
    { label: 'Feedback', link: '/feedback' },
    { label: 'Register', link: '/register' },
    { label: 'Student Profile', link: '/studentprofile' }
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
        <Link to="/" style={linkStyle}>
            <img
              src="logo.jpeg"
              alt="Logo"
              width="120"
              height="50"
            />
          </Link>
          {isMobile ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* About button */}
                <Button color="inherit" sx={{ marginRight: '10px' }}>
                  <AboutDropdown />
                </Button>

                {/* Menu icon */}
                <IconButton
                  color="black"
                  aria-label="menu"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              {/* Menu */}
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
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                {courses.map((course, index) => (
                  <Button key={index} color="inherit">
                    <Link to={course.link} style={linkStyle}>
                      {course.label}
                    </Link>
                  </Button>
                ))}
                <AboutDropdown />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;