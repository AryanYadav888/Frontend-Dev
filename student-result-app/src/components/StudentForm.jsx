import React, { useState, useEffect } from 'react';

const StudentForm = ({ student, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [section, setSection] = useState('');
  const [marks, setMarks] = useState('');
  const [grade, setGrade] = useState('');

  // Populate form when editing
  useEffect(() => {
    if (student) {
      setName(student.name);
      setSection(student.section);
      setMarks(student.marks);
      setGrade(student.grade);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: student ? student.id : undefined,
      name,
      section,
      marks: Number(marks),
      grade,
    });
  };

  return (
    <div>
      <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Section: </label>
          <input value={section} onChange={e => setSection(e.target.value)} required />
        </div>
        <div>
          <label>Marks: </label>
          <input type="number" value={marks} onChange={e => setMarks(e.target.value)} required min="0" max="100" />
        </div>
        <div>
          <label>Grade: </label>
          <input value={grade} onChange={e => setGrade(e.target.value)} required />
        </div>
        <button type="submit">{student ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: '10px' }}>Cancel</button>
      </form>
    </div>
  );
};

export default StudentForm;
