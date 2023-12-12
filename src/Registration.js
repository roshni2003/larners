//   const [Error, setError] = useState("");
//   const [ShowPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();
//   const [PostData, setPostData] = useState({
//     firstname: "",
//     email: "",
//     password: ""
//   });

//   const handlepost_data = (e) => {
//     e.preventDefault();
//     console.log(PostData);

//     if (PostData.firstname && PostData.email && PostData.password) {
//       setError("");
      
//       createUserWithEmailAndPassword(auth, PostData.email, PostData.password)
//         .then(res => {
//           console.log(res.user);
//         })
//         .catch((error) => setError(error.message));
//     } else {
//       setError("Please fill in all required fields");
//     }
//   }

//   const handleTogglePassword = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   return (
//     <Grid
//       container
//       sx={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         height: '100vh',
//         width: '100vw',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Box sx={boxStyle}>
//         <Box style={{ backgroundSize: "cover", height: "70vh", minHeight: "400px", backgroundColor: "" }}>
//           <Container>
//             <Box height={35} />
//             <Box sx={centerStyle}>
//               <Avatar sx={{ ml: "35px", mb: "4px", backgroundColor: "blue", height: "50px", width: "50px" }}>
//                 <LockOpenIcon style={{ color: "black" }} />
//               </Avatar>
//               <Typography variant="h4" sx={{ ml: "15px" }}>
//                 Sign In
//               </Typography>
//             </Box>
//             <form>
//               <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "15px" }}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="firstname"
//                   label="Firstname"
//                   value={PostData.firstname}
//                   autoComplete="given-name"
//                   onChange={(e) => setPostData({ ...PostData, firstname: e.target.value })}
//                 />
//               </Grid>
//               <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "45px" }}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email"
//                   value={PostData.email}
//                   autoComplete='email'
//                   onChange={(e) => setPostData({ ...PostData, email: e.target.value })}
//                 />
//               </Grid>

//               <Grid item xs={12} sx={{ ml: "1cm", mr: "1cm", height: "20px", marginTop: "45px" }}>
                
//               <TextField
//                   required
//                   fullWidth
//                   id="password"
//                   label="Password"
//                   value={PostData.password}
//                    type={ShowPassword ? "text" : "password"}
//                   autoComplete="new-password"
//                   onChange={(e) => setPostData({ ...PostData, password: e.target.value })}

//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={handleTogglePassword} edge="end">
//                           {ShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} sx={{ ml: "1em", mr: "3em", marginTop: "45px" }}>
//                 <Stack direction="row" spacing={2}>
                  
//                   <Typography variant="body" component="span" onClick={() => { navigate("/reset-password"); }} style={{ marginTop: "10px", cursor: "pointer" }}>
//                     Forgot password
//                   </Typography>
//                 </Stack>
//               </Grid>
//               <Typography style={{ color: "red" }}>{Error}</Typography>
//               <Grid>
//                 <Button type="submit" variant="contained" fullWidth sx={{ mt: "10px", mr: "20px", borderRadius: 28, color: "#ffffff", minWidth: "170px", backgroundColor: "blue" }} onClick={handlepost_data}>Sign in</Button>
//               </Grid>
//             </form>
            
//           </Container>
//         </Box>
//       </Box>
//     </Grid>
//   );
// };

// export default Registration;



