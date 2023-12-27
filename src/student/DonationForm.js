import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  marginTop: 40,
  padding: 20,
  textAlign: 'center',
});

const DonationForm = ({ onDonate }) => {
  const [formData, setFormData] = useState({
    amount: '',
    donorName: '',
    donorEmail: '',
    purposeOfPayment: '',
    isAnonymous: false,
  });
  const [donationSuccess, setDonationSuccess] = useState(null);

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleDonate = () => {
    const { amount, donorName, donorEmail } = formData;

    if (!amount || !donorName || !donorEmail) {
      alert('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    onDonate({
      amount: parseFloat(amount),
      donor: { name: donorName, email: donorEmail },
      message: formData.purposeOfPayment,
      isAnonymous: formData.isAnonymous,
    });

    setDonationSuccess({
      amount: parseFloat(amount),
      donorName,
      purposeOfPayment: formData.purposeOfPayment,
      isAnonymous: formData.isAnonymous,
    });

    setFormData({
      amount: '',
      donorName: '',
      donorEmail: '',
      purposeOfPayment: '',
      isAnonymous: false,
    });
  };

  return (
    <>
      <StyledCard elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Donation Form
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="💸 Amount ($)"
                type="number"
                variant="outlined"
                fullWidth
                required
                value={formData.amount}
                onChange={handleChange('amount')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="👤 Your Name"
                variant="outlined"
                fullWidth
                required
                value={formData.donorName}
                onChange={handleChange('donorName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="✉️ Your Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.donorEmail}
                onChange={handleChange('donorEmail')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="📝 Purpose of Payment"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={formData.purposeOfPayment}
                onChange={handleChange('purposeOfPayment')}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDonate}
            fullWidth
            style={{ marginTop: 20 }}
          >
            Donate
          </Button>
        </CardContent>
      </StyledCard>

      {donationSuccess && (
        <StyledCard elevation={3} style={{ marginTop: 20 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Thank You for Your Donation: 🙏🏼
              This Donation for Educational Purpose
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Amount Donated: ${donationSuccess.amount.toFixed(2)}
            </Typography>
            <Typography>
              Donor Name: {donationSuccess.donorName}
            </Typography>
            <Typography>
              Purpose of Payment: {donationSuccess.purposeOfPayment}
            </Typography>
          </CardContent>
        </StyledCard>
      )}
    </>
  );
};

export default DonationForm;