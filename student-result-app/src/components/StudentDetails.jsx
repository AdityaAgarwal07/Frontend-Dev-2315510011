// src/components/StudentDetails.jsx
import React from "react";

function StudentDetails({ student, onBack }) {
  if (!student) {
    return (
      <div style={{ padding: "1rem" }}>
        <p>No student selected.</p>
        <button onClick={onBack}>Back to List</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Student Details</h2>
      <p>
        <strong>ID:</strong> {student.id}
      </p>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Section:</strong> {student.section}
      </p>
      <p>
        <strong>Marks:</strong> {student.marks}
      </p>
      <p>
        <strong>Grade:</strong> {student.grade}
      </p>

      <button onClick={onBack}>Back to List</button>
    </div>
  );
}

export default StudentDetails;
