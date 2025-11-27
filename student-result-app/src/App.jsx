import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import * as studentService from './services/studentService';

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [mode, setMode] = useState('list'); // 'list', 'add', 'edit', 'details'

  // Load Students
  const loadStudents = () => {
    studentService.fetchStudents()
      .then(data => setStudents(data))
      .catch(err => alert('Failed to load students'));
  };

  // Add Student
  const handleAdd = () => {
    setSelectedStudent(null);
    setMode('add');
  };

  const handleSave = (student) => {
    if (mode === 'add') {
      studentService.addStudent(student)
        .then(() => {
          alert('Student added successfully. Click "Load Students" to refresh.');
          setMode('list');
        })
        .catch(() => alert('Failed to add student'));
    } else if (mode === 'edit') {
      studentService.updateStudent(student)
        .then(() => {
          alert('Student updated successfully. Click "Load Students" to refresh.');
          setMode('list');
        })
        .catch(() => alert('Failed to update student'));
    }
  };

  // Edit Student
  const handleEdit = (student) => {
    setSelectedStudent(student);
    setMode('edit');
  };

  // Delete Student
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      studentService.deleteStudent(id)
        .then(() => {
          alert('Student deleted successfully. Click "Load Students" to refresh.');
        })
        .catch(() => alert('Failed to delete student'));
    }
  };

  // View Details
  const handleView = (student) => {
    setSelectedStudent(student);
    setMode('details');
  };

  // Cancel Add/Edit/View
  const handleCancel = () => {
    setSelectedStudent(null);
    setMode('list');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Result Management</h1>
      {mode === 'list' && (
        <StudentList
          students={students}
          onLoad={loadStudents}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      )}
      {(mode === 'add' || mode === 'edit') && (
        <StudentForm
          student={selectedStudent}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {mode === 'details' && (
        <StudentDetails student={selectedStudent} onBack={handleCancel} />
      )}
    </div>
  );
};

export default App;
