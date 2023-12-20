
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const OurTeam = () => {
  const centerStyle = {
            display: 'flex',
            alignItems: 'Top',
            justifyContent: 'Top',
            flexDirection: 'column', 
            height: '100vh',
        };
    
        const mainTextStyle = {
            fontFamily: 'Arial, sans-serif',
            fontSize: '30px',
            fontWeight: 'bold',
            color: 'Black', 
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            
        };
    
        const secondaryTextStyle = {
            fontFamily: 'Arial, sans-serif',
            fontSize: '20px',
            color: 'black', 
            textAlign: 'center',
        };

  const teamMembers = [
    {
      name: 'Alpana Chavan',
      role: 'Front-end-Devloper',
      description: 'Meraki Intern 👩‍💻',
      imageUrl: 'alpana2.jpeg',
      
    },
    {
      name: 'Roshni Jha',
      role: 'Front-end-Devloper',
      description: 'Meraki Intern 👩‍💻',
      imageUrl: 'roshni.jpeg',
    },
    
    {
        name: 'Priya Sing',
        role: 'Front-end-Devloper',
        description: 'Meraki Intern 👩‍💻',
        imageUrl: 'priya.jpeg',
      },

      {
        name: 'Kranti Wagmare',
        role: 'Front-end-Devloper',
        description: 'Meraki Intern 👩‍💻',
        imageUrl: 'kranti.jpeg',
      },
    {
        name: 'Nikita Varma',
        role: 'Front-end-Devloper',
        description: 'Meraki Intern 👩‍💻',
        imageUrl: 'nikita.jpeg',
    },
  ];
  

  return (
    <div style={centerStyle}>
      <h1 style={mainTextStyle}>
        "Beyond Individuals: It's Our Team Spirit That Drives ACADEMICHUB."
      </h1>
      <p style={secondaryTextStyle}>
        Explore the profiles below to get acquainted with the talented individuals
        who drive our company's success:
      </p>

      <Grid container spacing={3} justifyContent="center" marginTop={"100px"}>
        {teamMembers.map((member, index) => (
          <Grid item key={index}>
            <Card variant="outlined"  sx={{ minWidth: 450,  }}>
              <CardContent>
                <img src={member.imageUrl} alt={member.name} style={{ width: '100%', height: '600px'  }} />
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurTeam;

