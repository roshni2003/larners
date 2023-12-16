import React, { useState } from 'react';

const UpdatePassword = () => {
  // const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
// eslint-disable-next-line
const [currentPassword, setCurrentPassword] = useState('');

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    // Perform validation, check if passwords match, etc.
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      // Make a request to your API to update the password
      const response = await fetch('http://localhost:3001/Signup/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newPassword,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Password updated successfully');
      } else {
        setMessage('Failed to update password');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage('An error occurred while updating the password');
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleUpdatePassword}>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};

export default UpdatePassword;
