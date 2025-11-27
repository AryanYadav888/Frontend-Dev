import React from 'react';

const StudentList = ({ students, onLoad, onAdd, onEdit, onDelete, onView }) => {
  return (
    <div>
      <h2>Student List</h2>
      <button onClick={onLoad}>Load Students</button>
      <button onClick={onAdd}>Add Student</button>
      {students.length === 0 ? (
        <p>No students available. Click "Load Students".</p>
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.section}</td>
                <td>{student.marks}</td>
                <td>{student.grade}</td>
                <td>
                  <button onClick={() => onEdit(student)}>Edit</button>
                  <button onClick={() => onDelete(student.id)}>Delete</button>
                  <button onClick={() => onView(student)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
