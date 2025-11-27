// src/components/StudentList.jsx
import React from "react";

function StudentList({
  students,
  onLoadStudents,
  onAddStudent,
  onEditStudent,
  onDeleteStudent,
  onViewDetails,
}) {
  return (
    <div className="p-4">

      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4 text-black">
        Student List
      </h2>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={onLoadStudents}
          className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 transition"
        >
          Load Students
        </button>

        <button
          onClick={onAddStudent}
          className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition"
        >
          Add Student
        </button>
      </div>

      {/* If no students */}
      {students.length === 0 ? (
        <p className="text-gray-600 text-center">
          No students loaded yet.
        </p>
      ) : (
        <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="border p-3">ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Section</th>
                <th className="border p-3">Marks</th>
                <th className="border p-3">Grade</th>
                <th className="border p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="text-center hover:bg-red-50 transition"
                >
                  <td className="border p-2">{student.id}</td>
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.section}</td>
                  <td className="border p-2">{student.marks}</td>
                  <td className="border p-2">{student.grade}</td>

                  <td className="border p-2 flex justify-center gap-2">

                    <button
                      onClick={() => onViewDetails(student)}
                      className="bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition"
                    >
                      View
                    </button>

                    <button
                      onClick={() => onEditStudent(student)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDeleteStudent(student.id)}
                      className="bg-red-800 text-white px-3 py-1 rounded hover:bg-red-900 transition"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}

export default StudentList;
