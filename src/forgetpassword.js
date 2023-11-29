
// import { useState } from "react";

// import { getAuth, sendPasswordResetEmail } from "firebase/auth";
// import { Typography, Avatar, Container, Grid, Box, TextField, Button } from '@mui/material';
// import LockOpenIcon from '@mui/icons-material/LockOpen';

// const backgroundImage = 'https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg';

// const boxStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)",
//   width: "40%",
//   height: "50%",
//   backgroundColor: "background.paper1",  // Corrected the background color
//   boxShadow: 24,
// };

// const centerStyle = {
//   position: "relative",
//   top: "50%",
//   left: "37%",
// };




// const ForgotPassword = () => {
//   const [Email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleResetPassword = async () => {
//     const auth = getAuth();
    
//     try {
//       await sendPasswordResetEmail(auth, Email);
//       setMessage("Password reset email sent. Please check your inbox.");
//     } catch (error) {
//       setMessage(`Error: ${error.message}`);
//     }
//   };
//   return(
//     <Grid container sx={{backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center',height: '100vh',width: '100vw',display: 'flex',alignItems: 'center',justifyContent: 'center', }}>
//         <Box sx={boxStyle}>
//             <Box style={{ backgroundSize: "cover", height: "70vh", minHeight: "400px", backgroundColor: "" }}>
//             <Container>
//                 <Box height={35} />
//                 <Box sx={centerStyle}>
//                 <Avatar sx={{ ml: "35px", mb: "4px", backgroundColor: "blue", height: "50px", width: "50px" }}>
//                     <LockOpenIcon style={{ color: "black" }} />
//                 </Avatar>
//                 <Typography variant="h4" sx={{ ml: "15px" }}>
//                     Sign In
//                 </Typography>
//                 </Box>
//                 <form>
            
//                 <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "px" }}>
//                     <TextField
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email"
//                     value={Email}
//                     autoComplete='email'
//                     onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </Grid>
//                 <Button variant="contained" color="primary" onClick={ handleResetPassword }   style={{ marginTop: "50px", marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>Reset Password</Button>
//                 <Typography>{message}</Typography>
//                 </form>
                
//             </Container>
//             </Box>
//         </Box>
//         </Grid>
//   );
// };

 


// export default ForgotPassword;




