import React, { useState, useEffect } from 'react';
import { TextField, Button, Alert } from '@mui/material';

const StudentProfile = () => {
  const [stuId, setStuId] = useState('');
  const [stuEmail, setStuEmail] = useState('');
  const [stuName, setStuName] = useState('');
  const [stuOcc, setStuOcc] = useState('');
  const [stuImg, setStuImg] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [passmsg, setPassmsg] = useState('');

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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
    });

    setStuName('');
    setStuOcc('');
    setStuImg(null);
    setImagePreview(null);
    setPassmsg('Updated Successfully');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh' }}>
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '20px' }}
        />
      )}
      <form onSubmit={handleFormSubmit} encType="multipart/form-data" style={{ width: '300px', marginTop: '20px' }}>
        <TextField label="Student ID" variant="outlined" fullWidth value={stuId} InputProps={{ readOnly: true }} />
        <TextField label="Email" variant="outlined" fullWidth value={stuEmail} InputProps={{ readOnly: true }} />
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
        <input type="file" id="stuImg" name="stuImg" onChange={handleFileChange} style={{ marginTop: '10px' }} />
        <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '10px' }}>
          Update
        </Button>
        {passmsg && <Alert severity="success" sx={{ width: '100%', marginTop: 2, textAlign: 'center' }}>{passmsg}</Alert>}
      </form>
    </div>
  );
};
export default StudentProfile;
