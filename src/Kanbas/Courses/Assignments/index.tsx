import React, { useState } from 'react';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import { useParams } from 'react-router-dom'; // To get course ID from the URL
import * as db from "../../Database"; // Import your assignments database

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from the route parameters
  const assignments = db.assignments;
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filter assignments by course ID and search term
  const filteredAssignments = assignments
    .filter(assignment => assignment.course === cid)
    .filter(assignment =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div id="wd-assignments" className="p-3">
      {/* Search Bar */}
      <div className="mb-3 d-flex align-items-center">
        <input
          id="wd-search-assignment"
          className="form-control mb-2 me-2" // Add margin to the right
          placeholder="Search for Assignments"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Buttons next to the search bar */}
        <button className="btn btn-light text-danger me-2">+ Group</button>
        <button className="btn btn-danger">+ Assignment</button>
      </div>

      {/* Assignments Section */}
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          {/* Title with Button */}
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS {filteredAssignments.length > 0 ? "40%" : "0%"} of Total
            <button className="btn btn-secondary float-end">+</button>
          </div>

          {/* List of Assignments */}
          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment) => (
              <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <a
                  className="wd-assignment-link fs-5 text-decoration-none text-dark"
                  href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </a>
                <p className="m-0 ps-5">
                  Multiple Modules | <strong>Not available until {new Date(assignment.availableFrom).toLocaleString()}</strong>
                </p>
                <p className="m-0 ps-5">
                  Due {new Date(assignment.dueDate).toLocaleString()} | {assignment.points} pts
                </p>
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
