const API_URL = 'http://localhost:3000/students';

export const fetchStudents = () =>
  fetch(API_URL).then(res => res.json());

export const addStudent = (student) =>
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  }).then(res => res.json());

export const updateStudent = (student) =>
  fetch(`${API_URL}/${student.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  }).then(res => res.json());

export const deleteStudent = (id) =>
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  }).then(res => res.json());
