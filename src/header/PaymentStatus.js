import React, { useState } from 'react';

const PaymentStatus = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [showUPIOptions, setShowUPIOptions] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentStatus = (isSuccessful) => {
    setPaymentStatus(isSuccessful);
  };

  const handleAmountChange = (event) => {
    setPaymentAmount(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleUPIOptionClick = (option) => {
    console.log(`Selected UPI Option: ${option}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Payment Status</h2>
      {paymentStatus === null && <p>Payment status not available</p>}
      {paymentStatus !== null && (
        <div>
          {paymentStatus ? (
            <p style={{ color: 'green' }}>Payment Successful!</p>
          ) : (
            <p style={{ color: 'red' }}>Payment Failed</p>
          )}
        </div>
      )}
      <button onClick={() => handlePaymentStatus(true)}>Mark as Successful</button>
      <button onClick={() => handlePaymentStatus(false)}>Mark as Failed</button>

      {/* Payment Amount Input */}
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="paymentAmount">Enter Payment Amount:</label>
        <input
          type="text"
          id="paymentAmount"
          value={paymentAmount}
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />
      </div>

      {/* Payment Method Dropdown */}
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="paymentMethod">Select Payment Method:</label>
        <select id="paymentMethod" value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Select...</option>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="upi">UPI</option>
          {/* Add more payment methods as needed */}
        </select>
      </div>

      {/* UPI Options */}
      {selectedPaymentMethod === 'upi' && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => setShowUPIOptions(!showUPIOptions)}>Toggle UPI Options</button>
          {showUPIOptions && (
            <div>
              <h3>UPI Options</h3>
              <p>Choose your preferred UPI method:</p>
              <button onClick={() => handleUPIOptionClick('Option 1')}>Option 1</button>
              <button onClick={() => handleUPIOptionClick('Option 2')}>Option 2</button>
              {/* Add more UPI options as needed */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentStatus;
