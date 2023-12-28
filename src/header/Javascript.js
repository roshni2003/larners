import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const containerStyle = {
  backgroundColor: '',
  border: '1px solid #ccc',
  padding: '20px',
  textAlign: 'center', 
  width:'100%'
};

function Javascript() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:3000/javascriptCourses')
      .then((res) => res.json())
      .then((res) => setCourses(res))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if (courses.length === 0) {
      fetchData();
    }
  }, [courses]);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
  };

  return (
    <Container style={{ ...containerStyle }}>
      <h4>Javascript Courses</h4>
      {!selectedCourse ? (
        <Grid container spacing={7}>
          {courses.map((course) => (
            <Grid item key={course.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  style={{ width: '100%', height: '100%' }}
                />
                <CardContent>
                  <p><b>{course.title}</b></p>
                  <p> <b>Instructor: {course.instructor}</b></p>
                  <p><b>Duration: {course.duration}</b></p>
                  <p><b>Description: {course.description}</b></p>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleViewDetails(course)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          <h5>{selectedCourse.title} - Details</h5>
          {selectedCourse.courseTopics.map((topic, index) => (
            <div key={index}>
             <p sx={{ width: '100%', height: '50%' }}><b>Week: {topic.topic}</b></p>
              <img
                src={topic.imageUrl}
                alt={`Week ${topic.week}`}
                style={{ width: '50%', height: 'auto' }}
              />
              <p><a href={topic.videoUrl} target="_blank" rel="noopener noreferrer">
                Watch Video
              </a></p>
              <a href={topic.LINK}>Visit Example.com</a>
            </div>
          ))}
          <Button onClick={() => setSelectedCourse(null)}>Go Back</Button>
        </div>
      )}
    </Container>
  );
}

export default Javascript;
