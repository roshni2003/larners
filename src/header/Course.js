import React, { useState } from 'react';
import Python from './Python';
import Javascript from './Javascript';
import English from './English';
import Cplush from './Cplush';

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <label htmlFor="courseDropdown"><b>Select a course:</b> </label>
      <select id="courseDropdown" onChange={handleCourseSelect}>
        <option value=""><b>Learn</b></option>
        <option value="English">English</option>
        <option value="Javascript">Javascript</option>
        <option value="Python">Python</option>
        <option value="Cplush">Cplush</option>
      </select>

      <hr />

      {selectedCourse === 'English' && <English />}
      {selectedCourse === 'Javascript' && <Javascript />}
      {selectedCourse === 'Python' && <Python />}
      {selectedCourse === 'Cplush' && <Cplush />}
    </div>
  );
};

export default Course;
