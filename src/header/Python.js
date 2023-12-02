import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const Python = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#333' }}>
        Overview of Python
      </Typography>

      <section style={{ marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#555' }}>
          What is Python?
        </Typography>
        <Typography paragraph style={{ color: '#777' }}>
          Python is a high-level, interpreted programming language known for its simplicity and readability.
          It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
        </Typography>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#555' }}>
          Key Features
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Readability: Python emphasizes code readability with its clean and easy-to-understand syntax." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Versatility: Python is versatile and used in various domains, including web development, data science, machine learning, scripting, and more." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Community: Python has a large and active community of developers, contributing to its ecosystem with libraries and frameworks." />
          </ListItem>
        </List>
      </section>

      <Typography variant="h4" gutterBottom style={{ color: '#333' }}>
        History of Python
      </Typography>

      <section style={{ marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom style={{ color: '#555' }}>
          Creation and Development
        </Typography>
        <Typography paragraph style={{ color: '#777' }}>
          Python was created by Guido van Rossum in the late 1980s. The first official Python release, Python 0.9.0, was in 1991.
        </Typography>
      </section>

      {/* Include additional sections for Python 2 vs. Python 3, Python Software Foundation, Popularity and Adoption, Major Releases, Community and Ecosystem */}

    </Paper>
  );
};  

export default Python;
