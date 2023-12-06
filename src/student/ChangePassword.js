import React, { useEffect, useState } from 'react';

const AdminProfile = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [passmsg, setPassmsg] = useState('');

  useEffect(()=>{
    setAdminEmail('krantiwaghmare21@navgurukul.org');
  },[]);

  // Assuming you have an API endpoint for updating the admin password
  const handlePasswordUpdate = async () => {
    try {
      // Make a request to your API to update the password
      // Use the adminEmail and adminPass state variables in the request
      // Example using fetch:
      const response = await fetch('/api/updateAdminPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          adminEmail,
          adminPass,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setPassmsg('Updated Successfully');
      } else {
        setPassmsg('Unable to Update');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setPassmsg('An error occurred while updating the password');
    }
  };

  return (
    <div className="col-sm-9 mt-5">
      <div className="row">
        <div className="col-sm-6">
          <form className="mt-5 mx-5">
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={adminEmail}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputnewpassword">New Password</label>
              <input
                type="password"
                className="form-control"
                id="inputnewpassword"
                placeholder="New Password"
                value={adminPass}
                onChange={(e) => setAdminPass(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={handlePasswordUpdate}
            >
              Update Password
            </button>
            {passmsg && <div className="alert alert-info mt-3">{passmsg}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;


