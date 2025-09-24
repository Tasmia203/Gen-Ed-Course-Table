import React from 'react';
import { Table } from 'react-bootstrap';

function isDiscrepant(course) {
  return (course.grade && !course.took) || (!course.grade && course.took);
}

function CourseTable({ courses }) {
  return (
    <Table bordered hover>
      <thead style={{ backgroundColor: '#A9D0F5' }}>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Grade</th>
          <th>Took?</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => {
          const redStyle = isDiscrepant(course) ? { color: 'red' } : {};
          return (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td style={redStyle}>{course.title}</td>
              <td>{course.grade}</td>
              <td style={redStyle}>{course.took ? 'Yes' : 'No'}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CourseTable;