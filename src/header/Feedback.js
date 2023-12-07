
// import React, { useState } from 'react';
// import { Rating } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// const Feedback = () => {
//     const nevigate=useNavigate()
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNum, setPhoneNum] = useState('');
//     const [feedback, setFeedback] = useState('');
//     const [rating, setRating] = useState(0);


//     const contactStyle = {

//         backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '70vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '20px',
//         color: 'white',
//         fontFamily: 'Arial, sans-serif',
//     };

//     const formStyle = {

//         width: '800px',
//         padding: '60px',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         borderRadius: '10px',

//     };

//     const labelStyle = {

//         marginBottom: '20px',
//     };

//     const inputStyle = {

//         width: '100%',
//         padding: '10px',
//         marginBottom: '15px',
//         borderRadius: '5px',
//         border: 'none',
//         outline: 'none',
//     };

//     const HandleEmail = (e) => {
//         setEmail(e.target.value);
//     };

//     const HandleFeedback = (e) => {
//         setFeedback(e.target.value);
//     };

//     const HandlePhone = (e) => {
//         setPhoneNum(e.target.value);
//     };

//     const HandleName = (e) => {
//         setName(e.target.value);
//     };

//     const handleSubmit = () => {
//         const data = { name: name, email: email, phone: phoneNum, feedback: feedback, rating: rating };

//         fetch('http://localhost:3000/Signup', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//     };

//     const HandleClick = () => {
//         nevigate('/feedbackData')


//     }

//     return (

           
          
// //         </div>
// //     );
// // };

// // export default Feedback;
// <div>
// <h2>Share Your Feedback 😇</h2>
// <form>
//     <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" autoComplete="off" name="fullname" id="fullname" onChange={HandleName} />
//     </div>
//     <div>
//         <label htmlFor="email">Email:</label>
//         <input type="text" autoComplete="off" name="email" id="email" onChange={HandleEmail} value={email} />
//     </div>
//     <div>
//         <label htmlFor="phone">PhoneNum:</label>
//         <input type="text" autoComplete="off" name="phone" id="phone" onChange={HandlePhone} value={phoneNum} />
//     </div>
//     <div>
//         <label htmlFor="help">Write your feedback here:</label>
//         <input type="text" autoComplete="off" name="help" id="help" onChange={HandleFeedback} value={feedback} />
//     </div>
//     <div>
//         <label>Rate your experience:</label>
//         <Rating name="rating" value={rating} onChange={(event, newValue) => setRating(newValue)} />
//     </div>
//     <button style={{ fontSize: '16px', marginTop: '20px' }} onClick={handleSubmit}>Submit</button>
//     <button style={{ fontSize: '15px', marginTop: '20px' }} onClick={HandleClick}>View Feedback Here ➡️</button>
// </form>
// </div>
// );
// };

// // export default Feedback;
//  import React, { useState } from 'react';
// import { Rating } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// const Feedback = () => {
//     const nevigate=useNavigate()
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNum, setPhoneNum] = useState('');
//     const [feedback, setFeedback] = useState('');
//     const [rating, setRating] = useState(0);


//     const contactStyle = {

//         backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '70vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
// import React, { useEffect, useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const FeedbackData = () => {
//     const [data, setData] = useState([]);

//     const fetchData = () => {
//         fetch("http://localhost:3000/Signup")
//             .then((res) => res.json())
//             .then((res) => {
//                 setData(res);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div style={{margin:'0 40px'}}>
//             <h2>Feedback Data</h2>
//             <TableContainer component={Paper}>
//                 {/* <Table> */}
//                 <Table sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
//                     <TableHead>
//                         <TableRow sx={{ backgroundColor: "grey" }}>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Email</TableCell>
//                             <TableCell>Phone</TableCell>
//                             <TableCell>Feedback</TableCell>
//                             <TableCell>Rating</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {data.map((item, index) => (
//                             <TableRow key={index}>
//                                 <TableCell>{item.name}</TableCell>
//                                 <TableCell>{item.email}</TableCell>
//                                 <TableCell>{item.phone}</TableCell>
//                                 <TableCell>{item.feedback}</TableCell>
//                                 <TableCell>{item.rating}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default FeedbackData;


import React, { useState } from 'react';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Feedback = () => {
    const nevigate=useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);


    const contactStyle = {

        backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    };

    const formStyle = {

        width: '800px',
        padding: '60px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',

    };

    const labelStyle = {

        marginBottom: '20px',
    };

    const inputStyle = {

        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
    };

    const HandleEmail = (e) => {
        setEmail(e.target.value);
    };

    const HandleFeedback = (e) => {
        setFeedback(e.target.value);
    };

    const HandlePhone = (e) => {
        setPhoneNum(e.target.value);
    };

    const HandleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        const data = { name: name, email: email, phone: phoneNum, feedback: feedback, rating: rating };

        fetch('http://localhost:3000/Signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

    const HandleClick = () => {
        nevigate('/feedbackData')


    }

    return (

        <div style={contactStyle}>
              
            <form style={formStyle}>
              
                <div>
                <h2>Share Your Feedback 😇</h2>
                    <label htmlFor="username" style={labelStyle}>
                        Username :
                    </label>
                    <input type="text" autoComplete="off" name="fullname" id="fullname" style={inputStyle} onChange={HandleName} />
                </div>
                <div>
                    <label htmlFor="email" style={labelStyle}>
                        Email :
                    </label>
                    <input type="text" autoComplete="off" name="email" id="email" style={inputStyle} onChange={HandleEmail} value={email} />
                </div>
                <div>
                    <label htmlFor="phone" style={labelStyle}>
                        PhoneNum :
                    </label>
                    <input type="text" autoComplete="off" name="phone" id="phone" style={inputStyle} onChange={HandlePhone} value={phoneNum} />
                </div>
                <div>
                    <label htmlFor="help" style={labelStyle}>
                        Write your feedback here :
                    </label>
                    <input type="text" autoComplete="off" name="help" id="help" style={inputStyle} onChange={HandleFeedback} value={feedback} />
                </div>
                <div>
                    <label type="rating" style={labelStyle}>
                        Rate your experience:
                    </label>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                </div>
                <button style={{fontSize:'16px', marginTop:"20px"}}onClick={handleSubmit}>Submit</button>
                <button  style={{fontSize:'15px', marginTop:"20px"}}onClick={HandleClick}>view feedback here ➡️</button>
            </form>
           
          
        </div>
    );
};

export default Feedback;