import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Cplush = () => {
  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography variant="h4" component="div" style={styles.moduleTitle}>
        <b>Module 1: Introduction to Programming and C++</b>
      </Typography>
      <Paper elevation={3} style={styles.section}>
        <Typography variant="h5" style={styles.heading}>
          1.1 Overview of Programming
        </Typography>
        <Typography paragraph>
          Programming is the process of designing and building executable computer code to accomplish a specific task or solve a problem.
          It involves creating algorithms, which are step-by-step instructions that a computer can follow to perform a task.
        </Typography>
      </Paper>
      <Paper elevation={3} style={styles.section}>
        <Typography variant="h6" style={styles.heading}>
          1.2 Introduction to C++
        </Typography>
        <Typography paragraph>
          C++ is a general-purpose programming language that extends the features of the C programming language.
          It supports object-oriented programming (OOP) and provides low-level memory manipulation features.
          C++ is widely used for system/application software, game development, and embedded firmware.
        </Typography>
        <Typography variant="h6" style={styles.subHeading}>
          1.3 Setting up the Development Environment
        </Typography>
        <Typography paragraph>
          A C++ development environment includes a compiler to translate code into machine-readable instructions.
          Popular choices include GCC and Visual Studio.
        </Typography>
        <Typography variant="h6" style={styles.example}>
          Example: Hello World Program
        </Typography>
      </Paper>
    </Container>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  moduleTitle: {
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
    padding: '20px',
  },
  heading: {
    marginBottom: '15px',
  },
  subHeading: {
    marginBottom: '15px',
  },
  example: {
    fontWeight: 'bold',
    color: '#2196f3',
  },
};

export default Cplush;
