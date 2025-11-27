// src/components/StudentForm.jsx
import React, { useState } from "react";

function StudentForm({ initialData, onCancel, onSubmit, isEdit }) {
  const [name, setName] = useState(initialData?.name || "");
  const [section, setSection] = useState(initialData?.section || "");
  const [marks, setMarks] = useState(
    initialData?.marks !== undefined ? initialData.marks : ""
  );
  const [grade, setGrade] = useState(initialData?.grade || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name: name.trim(),
      section: section.trim(),
      marks: Number(marks),
      grade: grade.trim(),
    };

    await onSubmit(studentData);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg border border-gray-300 rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-black mb-4">
        {isEdit ? "Edit Student" : "Add Student"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NAME */}
        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* SECTION */}
        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Section
          </label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* MARKS */}
        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Marks
          </label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* GRADE */}
        <div>
          <label className="block text-gray-800 font-medium mb-1">
            Grade
          </label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-3">
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 transition"
          >
            {isEdit ? "Save Changes" : "Add Student"}
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 transition"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default StudentForm;
