import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Alert,
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Paper,
  Typography,
} from '@mui/material';

const StudentProfile = () => {
  const [stuId, setStuId] = useState('');
  const [stuEmail, setStuEmail] = useState('');
  const [stuName, setStuName] = useState('');
  const [stuOcc, setStuOcc] = useState('');
  const [stuImg, setStuImg] = useState(null);
  const [password, setPassword] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [passmsg, setPassmsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setStuId('123');
    setStuEmail('krantiwaghmare21@navgurukul.org.com');
    setStuName('Kranti Waghmare');
    setStuOcc('Student');
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setStuImg(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleFormSubmit = () => {
    if (!stuName || !stuOcc || !stuImg) {
      setPassmsg('Please fill in all details before submitting.');
      return;
    }

    setOpenDialog(true);
  };

  const handleConfirmSubmit = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('stuId', stuId);
    formData.append('stuEmail', stuEmail);
    formData.append('stuName', stuName);
    formData.append('stuOcc', stuOcc);
    formData.append('stuImg', stuImg);

    console.log({
      stuId,
      stuEmail,
      stuName,
      stuOcc,
      stuImg,
      password,
      
    });

    resetForm();
    setPassmsg('Student profile created successfully');
    setLoading(false);
    setOpenDialog(false);
  };

  const handleCancelSubmit = () => {
    setOpenDialog(false);
  };

  const resetForm = () => {
    setStuId('');
    setStuName('');
    setStuOcc('');
    setStuImg(null);
    setPassword('');
    setImagePreview(null);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
        <Paper elevation={2} style={{ padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
          <Typography variant="h">Student Profile</Typography>
        </Paper>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px' }}
          />
        )}
        <form onSubmit={handleFormSubmit} encType="multipart/form-data" style={{ width: '400px', marginBottom: '20px' }}>
          
          <TextField
            label="Student ID"
            variant="outlined"
            fullWidth
            value={stuId}
            onChange={(e) => setStuId(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={stuEmail}
            onChange={(e) => setStuEmail(e.target.value)}
          />

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={stuName}
            onChange={(e) => setStuName(e.target.value)}
          />
          <TextField
            label="Occupation"
            variant="outlined"
            fullWidth
            value={stuOcc}
            onChange={(e) => setStuOcc(e.target.value)}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="file" id="stuImg" name="stuImg" onChange={handleFileChange} style={{ marginTop: '10px' }} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '10px' }}
            disabled={loading}
          >
            {loading ? 'Creating Profile...' : 'Create Profile'}
          </Button>
          {passmsg && <Alert severity="success" sx={{ width: '100%', marginTop: 2, textAlign: 'center' }}>{passmsg}</Alert>}
          <FormControlLabel
            control={<Checkbox checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
            label="Dark Mode"
          />
        </form>

        <Dialog open={openDialog} onClose={handleCancelSubmit}>
          <DialogTitle>Confirm Submission</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to submit the form? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelSubmit} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmSubmit} color="primary" variant="contained">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default StudentProfile;

