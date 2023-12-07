
import { useState } from "react";
import { Typography, Avatar, Container, Grid, Box, TextField, Stack, Button ,IconButton,InputAdornment} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
//import firebase from 'firebase/app';
import 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const backgroundImage = 'https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg';

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "40%",
  height: "70%",
  backgroundColor: "background.paper1",  // Corrected the background color
  boxShadow: 24,
};

const centerStyle = {
  position: "relative",
  top: "50%",
  left: "37%",
};



const Login = () => {
 
  const navigate = useNavigate();
  const [codeError, setCodeError] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
 

  const [PostData, setPostData] = useState({
    email: "",
    password: ""
  });


  const handlePostData = (e) => {
    e.preventDefault();

    if (PostData.email && PostData.password) {
      signInWithEmailAndPassword(getAuth(app), PostData.email, PostData.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          setCodeError(errorCode);
          const errorMessage = error.message;
          setCodeError(errorMessage);
        });
    } else {
      setCodeError("Email and password are required.");
    }
  }


  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={boxStyle}>
        <Grid>
          <Box style={{ backgroundSize: "cover", height: "70vh", minHeight: "400px", backgroundColor: "" }}>
            <Container>
              <Box height={35} />
              <Box sx={centerStyle}>
                <Avatar sx={{ ml: "35px", mb: "4px", backgroundColor: "blue", height: "50px", width: "50px" }}>
                  <LockOpenIcon style={{ color: "black" }} />
                </Avatar>
                <Typography variant="h4" sx={{ ml: "15px" }}>
                  Sign In
                </Typography>
              </Box>
              <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "15px" }}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="email"
                  autoComplete='email'
                  value={PostData.email}
                  onChange={(e) => setPostData({ ...PostData, email: e.target.value })}
                />
              </Grid>

              <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "45px" }}>
             
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  value={PostData.password}
                   type={ShowPassword ? "text" : "password"}
                  autoComplete="new-password"
                  onChange={(e) => setPostData({ ...PostData, password: e.target.value })}

                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {ShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ ml: "1em", mr: "3em", marginTop: "45px" }}>
                <Stack direction="row" spacing={2}>
               
                  <Typography variant="body" component="span" onClick={() => { navigate("/reset-password"); }} style={{ marginTop: "10px", cursor: "pointer" }}>
                    Forgot password
                  </Typography>
                </Stack>
              </Grid>
              <Typography style={{ color: "red" }}>{codeError}</Typography>
              <Grid>
                <Button type="submit" variant="contained" fullWidth sx={{ mt: "10px", mr: "20px", borderRadius: 28, color: "#ffffff", minWidth: "170px", backgroundColor: "blue" }} onClick={handlePostData}>Sign in</Button>
              </Grid>
              <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                <Stack direction="row" spacing={2}>
                  <Typography variant="body1" component="span" style={{ marginTop: "10px"   }}>Not registered yet ?{""}  <span style={{ color: "black", cursor: "pointer" }}
                    onClick={() => {
                      navigate("/registration")
                    }}>Create an Account ?
                  </span></Typography>
                </Stack>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};



export default Login;
