
import React, {useState } from 'react';

const Feedback = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNum,setPhoneNum]=useState("")
    const [feedback,setFeedback]=useState("")

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
        width: '300px',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '10px',
    };

    const labelStyle = {
        marginBottom: '5px',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
    };

    const HandleEmail=(e)=>{
        setEmail(e.target.value)

    }

    const HandleFeedback=(e)=>{
        setFeedback(e.target.value)
    }

    const HandlePhoen=(e)=>{
        setPhoneNum(e.target.value)
    }
    const HandleName=(e)=>{
        setName(e.target.value)
    }

   
    const handleSubmit = () => {
        const data={name:name,email:email,phone:phoneNum,feedback:feedback}

        fetch('http://localhost:3000/Signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }
   
    return (
        
        <div style={contactStyle}>

            <form style={formStyle}>
                <div>
                    <label htmlFor="username" style={labelStyle}>
                        Username
                    </label>
                    <input type="text" autoComplete="off" name="fullname" id="fullname" style={inputStyle} onChange={HandleName}/>
                </div>
                <div>
                    <label htmlFor="email" style={labelStyle}>
                        Email
                    </label>
                    <input type="text" autoComplete="off" name="email" id="email" style={inputStyle} onChange={HandleEmail} value={email}/>
                </div>
                <div>
                    <label htmlFor="phone" style={labelStyle}>
                        Phone
                    </label>
                    <input type="text" autoComplete="off" name="phone" id="phone" style={inputStyle} onChange={HandlePhoen} value={phoneNum}/>
                </div>
                <div>
                    <label htmlFor="help" style={labelStyle}>
                        write your feedback here😇
                    </label>
                    <input type="text" autoComplete="off" name="help" id="help" style={inputStyle} onChange={HandleFeedback}  value={feedback}/>
                </div>
                <button onClick={handleSubmit}>submit</button>
            </form>
            <button>view all feedback </button>
            {/* { <FeedbackDisplay />} */}
        </div>
        
    );
};

export default Feedback;
