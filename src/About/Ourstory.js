
// import React from 'react';
// import { Card, CardContent, Typography, useMediaQuery, useTheme, Grid, Box } from '@mui/material';

// const OurStory = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <div>
//       <h1>Welcome to Our project ACADEMICHUB</h1>
//       <Grid container justifyContent="center">
//         <Grid item xs={50} sm={20}>
//           <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Card variant="outlined" sx={{ width: isSmallScreen ? '90%' : '90vw' }}>
//               <CardContent>
//                 <Typography variant="h4" component="div">
//                   "Education Unboxed, Excellence Unleashed"
//                 </Typography>
//                 <Typography variant="h6">
//                   At AcademicHub, we're dedicated to revolutionizing online learning,
//                   <br></br>
//                    creating an interactive and engaging platform that nurtures the minds of learners worldwide.
//                    <br></br>
//                     Our mission is to provide unparalleled educational experiences, empowering individuals to achieve their learning goals and excel in their chosen fields.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default OurStory;

import React from 'react';
import { Card, CardContent, Typography, useMediaQuery, useTheme, Grid, Box } from '@mui/material';

const OurStory = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <h1>Welcome to Our project ACADEMICHUB</h1>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card variant="outlined" sx={{ width: isSmallScreen ? '90%' : '100vw', height:'auto', backgroundColor: '#D3D3D3' }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  "Education Unboxed, Excellence Unleashed"
                </Typography>
                <Typography variant="h6">
                  At AcademicHub, we're dedicated to revolutionizing online learning,
                  <br />
                  creating an interactive and engaging platform that nurtures the minds of learners worldwide.
                  <br />
                  Our mission is to provide unparalleled educational experiences, empowering individuals to achieve their learning goals and excel in their chosen fields.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurStory;
