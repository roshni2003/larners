import { forwardRef, useState } from "react";
import { Typography, Avatar, Container, Grid, Box, TextField, Checkbox, Button } from '@material-ui/core';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const backgroundImage = 'https://as1.ftcdn.net/v2/jpg/03/55/60/70/1000_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg';

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

const Registration = () => {
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const vertical = "top";
    const horizontal = "right";
    const [open, setOpen] = useState(false);

    const handleSubmit = (event) => {
        setOpen(true);
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        // ... (process the form data as needed)
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <Grid container sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Registration Successful!</Alert>
            </Snackbar>
            <Box sx={boxStyle}>
                <Grid>     <Box style={{ backgroundSize: "cover", height: "70vh", minHeight: "400px", backgroundColor: "" }}>
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
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 2 }}
                        >

                            {/* ... (form components) */}
                            <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "15px" }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Username"
                                    name="email"
                                    autoComplete='email'
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "45px" }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"  // Assuming this should be the password field
                                    label="Password"
                                    name="password"
                                    type="password"  // Set the input type to "password"
                                    autoComplete="current-password"
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ ml: "1em", mr: "3em", marginTop: "45px" }}>
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        sx={{ width: "60%" }}
                                        onClick={() => setRemember(!remember)}
                                        control={<Checkbox checked={remember} />}
                                        label="Remember me"
                                    />
                                    <Typography variant="body" component="span" onClick={() => { navigate("/reset-password"); }} style={{ marginTop: "10px", cursor: "pointer" }}>
                                        Forgot password
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Box>
                        <Button type="submit" variant="contained" fullWidth={true} sx={{ mt: "10px", mr: "20px", borderRadius: 28, color: "#ffffff", minWidth: "170px", backgroundColor: "blue" }}>Sign in</Button>
                        {/* ... (other JSX) */}
                    </Container>
                </Box>
                </Grid>
            </Box>
        </Grid>
    );
};

export default Registration;