import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from "../../Database"; // Assuming assignments data is stored in db.assignments

// Define a proper type for your assignment structure
interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  points: number;
  modules: string[]; // Ensure modules is typed as string[]
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course and assignment ID from URL parameters

  // Initialize the state with the correct type for modules (string[])
  const [assignment, setAssignment] = useState<Assignment>({
    _id: '',
    title: '',
    description: '',
    course: '',
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
    points: 0,
    modules: [] // Correctly initialize modules as string[]
  });

  // Fetch the assignment data based on course and assignment ID
  useEffect(() => {
    const selectedAssignment = db.assignments.find(
      (assignment: Assignment) => assignment.course === cid && assignment._id === aid
    );
    if (selectedAssignment) {
      setAssignment(selectedAssignment); // Update state with the found assignment
    }
  }, [cid, aid]);

  return assignment._id ? (
    <div className="container mt-5">
      <form id="wd-assignments-editor">
        {/* Assignment Title */}
        <div className="mb-3">
          <label htmlFor="wd-title" className="form-label">Assignment Title</label>
          <input
            id="wd-title"
            className="form-control"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>

        {/* Assignment Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Assignment Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            rows={5}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>

        {/* Points - shifted to the right */}
        <div className="mb-3" style={{ marginLeft: '50px' }}>
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: +e.target.value })}
          />
        </div>

        {/* Box for Assign To, Due Date, Available From, and Available Until */}
        <div className="border p-3 mb-3" style={{ marginLeft: '50px' }}> {/* Box with some right margin */}
          {/* Assign To */}
          <div className="mb-3">
            <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
            <input
              type="text"
              id="wd-assign-to"
              className="form-control"
              placeholder="Assign to"
              onChange={(e) => setAssignment({ ...assignment, course: e.target.value })} // Example usage
            />
          </div>

          {/* Due Date */}
          <div className="mb-3">
            <label htmlFor="wd-due-date" className="form-label">Due Date</label>
            <input
              type="date"
              id="wd-due-date"
              className="form-control"
              value={assignment.dueDate.split('T')[0]}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
            />
          </div>

          {/* Available From */}
          <div className="mb-3">
            <label htmlFor="wd-available-from" className="form-label">Available From</label>
            <input
              type="date"
              id="wd-available-from"
              className="form-control"
              value={assignment.availableFrom.split('T')[0]}
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
            />
          </div>

          {/* Available Until */}
          <div className="mb-3">
            <label htmlFor="wd-available-until" className="form-label">Available Until</label>
            <input
              type="date"
              id="wd-available-until"
              className="form-control"
              value={assignment.availableUntil.split('T')[0]}
              onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-3">
          <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary ms-2">Cancel</Link>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              // Handle save logic here, maybe send updated assignment data to backend or localStorage
              alert('Assignment saved successfully!');
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div>Loading assignment data...</div>
  );
}
