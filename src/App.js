import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import coursesData from './data/courseData';
import FilterInput from './components/FilterInput';
import CourseTable from './components/CourseTable';

function App() {
  const [filter, setFilter] = useState('');

  const filteredCourses = coursesData.filter(course => {
    if (!filter) return false;
    if (filter === 'all') return true;
    return course.grade === filter;
  });

  return (
    <Container className="mt-4" style={{ maxWidth: '900px' }}>
      <FilterInput filter={filter} setFilter={setFilter} />
      <CourseTable courses={filteredCourses} />
    </Container>
  );
}

export default App;