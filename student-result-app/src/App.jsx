// src/App.jsx
import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [mode, setMode] = useState("list"); 
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleLoadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error(error);
      alert("Error loading students");
    }
  };

  const handleAddStudentClick = () => {
    setSelectedStudent(null);
    setMode("add");
  };

  const handleEditStudentClick = (student) => {
    setSelectedStudent(student);
    setMode("edit");
  };

  const handleViewDetailsClick = (student) => {
    setSelectedStudent(student);
    setMode("details");
  };

  const handleDeleteStudentClick = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirmDelete) return;

    try {
      await deleteStudent(id);
      alert(
        'Student deleted successfully. Click "Load Students" to refresh the list.'
      );
    } catch (error) {
      console.error(error);
      alert("Error deleting student");
    }
  };

  const handleAddStudentSubmit = async (studentData) => {
    try {
      await createStudent(studentData);
      alert(
        'Student added successfully. Click "Load Students" to see the updated list.'
      );
      setMode("list");
    } catch (error) {
      console.error(error);
      alert("Error adding student");
    }
  };

  const handleEditStudentSubmit = async (studentData) => {
    if (!selectedStudent) return;

    try {
      await updateStudent(selectedStudent.id, studentData);
      alert(
        'Student updated successfully. Click "Load Students" to see the updated list.'
      );
      setMode("list");
      setSelectedStudent(null);
    } catch (error) {
      console.error(error);
      alert("Error updating student");
    }
  };

  const handleBackToList = () => {
    setMode("list");
    setSelectedStudent(null);
  };

  return (
    
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
     
      <h1 className="text-4xl font-bold text-center mb-6">
  Student Result App
</h1>


      {mode === "list" && (
        <StudentList
          students={students}
          onLoadStudents={handleLoadStudents}
          onAddStudent={handleAddStudentClick}
          onEditStudent={handleEditStudentClick}
          onDeleteStudent={handleDeleteStudentClick}
          onViewDetails={handleViewDetailsClick}
        />
      )}

      {mode === "add" && (
        <StudentForm
          initialData={null}
          isEdit={false}
          onCancel={handleBackToList}
          onSubmit={handleAddStudentSubmit}
        />
      )}

      {mode === "edit" && (
        <StudentForm
          initialData={selectedStudent}
          isEdit={true}
          onCancel={handleBackToList}
          onSubmit={handleEditStudentSubmit}
        />
      )}

      {mode === "details" && (
        <StudentDetails student={selectedStudent} onBack={handleBackToList} />
      )}
    </div>
  );
}

export default App;
