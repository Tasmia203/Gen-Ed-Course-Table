import React from 'react';
import { Form } from 'react-bootstrap';

function FilterInput({ filter, setFilter }) {
  return (
    <div className="text-center mb-4 p-3" style={{ backgroundColor: '#3366FF', color: 'white' }}>
      <h4>
        Enter a letter grade: 
        <Form.Control 
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ display: 'inline-block', width: '100px', marginLeft: '10px' }}
        />
      </h4>
    </div>
  );
}

export default FilterInput;