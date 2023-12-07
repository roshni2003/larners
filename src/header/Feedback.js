


// import React, { useState } from 'react';
// import Rating from '@mui/material/Rating';
// import { useNavigate } from 'react-router-dom'; 

// const Feedback = () => {
//     const navigate = useNavigate(); 
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNum, setPhoneNum] = useState('');
//     const [feedback, setFeedback] = useState('');
//     const [rating, setRating] = useState(0);

   
//     const handleName = (e) => {
//         setFullName(e.target.value);
//     };

//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePhone = (e) => {
//         setPhoneNum(e.target.value);
//     };

//     const handleFeedback = (e) => {
//         setFeedback(e.target.value);
//     };

//     const handleSubmit = () => {
        
//         console.log('Form submitted:', {
//             fullName,
//             email,
//             phoneNum,
//             feedback,
//             rating,
//         });
//     };

//     const handleClick = () => {
        
//         console.log('View feedback clicked');
//     };

   
//     return (
//         <>
//             <div>
//                 <h2>Share Your Feedback 😇</h2>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     autoComplete="off"
//                     name="fullname"
//                     id="fullname"
//                     onChange={handleName}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     type="text"
//                     autoComplete="off"
//                     name="email"
//                     id="email"
//                     onChange={handleEmail}
//                     value={email}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="phone">PhoneNum:</label>
//                 <input
//                     type="text"
//                     autoComplete="off"
//                     name="phone"
//                     id="phone"
//                     onChange={handlePhone}
//                     value={phoneNum}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="help">Write your feedback here:</label>
//                 <input
//                     type="text"
//                     autoComplete="off"
//                     name="help"
//                     id="help"
//                     onChange={handleFeedback}
//                     value={feedback}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="rating">Rate your experience:</label>
//                 <Rating
//                     name="rating"
//                     value={rating}
//                     onChange={(event, newValue) => {
//                         setRating(newValue);
//                     }}
//                 />
//             </div>
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={handleClick}>View feedback here ➡️</button>
//         </>
//     );
// };

// export default Feedback;
