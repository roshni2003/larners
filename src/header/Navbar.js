
// import React from 'react';

// import { AppBar, Toolbar, Button } from '@mui/material';

// import { Outlet, Link } from "react-router-dom";

// const Navbar = () => {
//   const linkStyle = { color: 'black', textDecoration: 'none' };
//   const coursesStyle = { color: 'black', marginLeft: 'auto' };

//   return (
//     <>
//       <AppBar position="static" sx={{ backgroundColor: "white" }}>
//         <Toolbar>
//           <img
//             src="logo.jpeg"
//             alt="Logo"
//             width="120"
//             height="50"

//           />
//           <div style={coursesStyle}>

//           </div>
//           <Button color="inherit"><Link to="/Course" style={linkStyle}>Course</Link></Button>
//           <Button color="inherit"><Link to="/payment" style={linkStyle}>Payment Status</Link></Button>
//           <Button color="inherit"><Link to="/feedback" style={linkStyle}>Feedback</Link></Button>
//           <Button color="inherit"><Link to="/contact" style={linkStyle}>Contact</Link></Button>
//           <Button color="inherit"><Link to="/register" style={linkStyle}>Register</Link></Button>
//           {/* <Button color="inherit"><Link to="/studentprofile" style={linkStyle}>StudentProfile</Link></Button> */}
//           <Button color="inherit">
//             <Link to="/studentprofile" style={linkStyle}>

//               <img
//               // src="	https://cdn3.vectorstock.com/i/1000x1000/93/97/student-profile-vector-37729397.jpg"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBoAKYmk39Ivmaiw2JnZezVJz26c-Ks9JBL1DrRl0GBm7HW8k1BiMFbbkZs-0CekKNrA&usqp=CAU"
//               alt="Student Profile"
//               width="50"
//               height="50"
//               style={{borderRadius:'50%', marginRight:'5px'}}
//               />

//             </Link>
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Outlet />
//     </>
//   );
// };

// export default Navbar;




import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyle = { color: 'black', textDecoration: 'none' };
  const coursesStyle = { color: 'black', marginLeft: 'auto' };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <img src="logo.jpeg" alt="Logo" width="120" height="50" />
          <div style={coursesStyle}></div>
          <Button color="inherit">
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/payment" style={linkStyle}>
              Payment Status
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/feedback" style={linkStyle}>
              Feedback
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/studentprofile" style={linkStyle}>

              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBoAKYmk39Ivmaiw2JnZezVJz26c-Ks9JBL1DrRl0GBm7HW8k1BiMFbbkZs-0CekKNrA&usqp=CAU"
              alt="Student Profile"
              width="50"
              height="50"
              style={{borderRadius:'50%', marginRight:'5px'}}
              />

            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;