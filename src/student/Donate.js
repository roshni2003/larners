import React from 'react';
import DonationForm from './DonationForm';

const Donate = () => {
  const handleDonate = (donationData) => {
    console.log('Donation Data:', donationData);
  };
  
  return (
    <div>
      <DonationForm onDonate={handleDonate} />
    </div>
  );
};

export default Donate