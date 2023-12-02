import React, { useState, useEffect } from 'react';

const StudentProfile = () => {
  const [stuId, setStuId] = useState('');
  const [stuEmail, setStuEmail] = useState('');
  const [stuName, setStuName] = useState('');
  const [stuOcc, setStuOcc] = useState('');
  const [stuImg, setStuImg] = useState(null);
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
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    
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
    setPassmsg('Updated Successfully');
  };

  return (
    <div className="col-sm-6 mt-5">
      <form className="mx-5" onSubmit={handleFormSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="stuId">Student ID</label>
          <input type="text" className="form-control" id="stuId" name="stuId" value={stuId} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="stuEmail">Email</label>
          <input type="email" className="form-control" id="stuEmail" value={stuEmail} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="stuName">Name</label>
          <input
            type="text"
            className="form-control"
            id="stuName"
            name="stuName"
            value={stuName}
            onChange={(e) => setStuName(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="stuOcc">Occupation</label>
          <input
            type="text"
            className="form-control"
            id="stuOcc"
            name="stuOcc"
            value={stuOcc}
            onChange={(e) => setStuOcc(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stuImg">Upload Image</label>
          <input type="file" className="form-control-file" id="stuImg" name="stuImg" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn-primary" name="updateStuNameBtn">
          Update
        </button>

        {passmsg && <div className="alert alert-success col-sm-5 mt-2" role="alert">{passmsg}</div>}
      </form>
    </div>
  );
};

export default StudentProfile;



// import React from "react";
// const StudentProfile =()=>{
//     return(
//         <h1>hii</h1>
//     )
// }
// export default StudentProfile;