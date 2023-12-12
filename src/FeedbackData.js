
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FeedbackData = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:3000/Signup")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div style={{margin:'0 40px'}}>
            <h2>Feedback Data</h2>
            <TableContainer component={Paper}>
                {/* <Table> */}
                <Table sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "grey" }}>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Feedback</TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.phone}</TableCell>
                                <TableCell>{item.feedback}</TableCell>
                                <TableCell>{item.rating}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default FeedbackData;