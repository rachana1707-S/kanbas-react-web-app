import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div className="container mt-5">
      <form id="wd-assignments-editor">
        {/* Assignment Name */}
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
        </div>

        {/* Assignment Description */}
        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Assignment Description</label>
          <textarea id="wd-description" className="form-control" rows={5}>
            The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
            The landing page should include the following:
            - Your full name and section
            - Links to each of the lab assignments
            - Link to the Kanbas application
            - Links to all relevant source code repositories
            The Kanbas application should include a link to navigate back to the landing page.
          </textarea>
        </div>

        {/* Vertical Stacking Starts Here */}
        <div className="mb-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-ppoints" className="form-control" value={100} />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-assignment-group" className="form-label">Assignment Group</label>
          <select id="wd-assignment-group" className="form-select">
            <option value="assignments">ASSIGNMENTS</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="wd-display-grade" className="form-label">Display Grade as</label>
          <select id="wd-display-grade" className="form-select">
            <option value="percentage">Percentage</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-select">
            <option value="online">Online</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Online Entry Options</label>
          <div className="form-check">
            <input type="checkbox" id="wd-entry-option-text" className="form-check-input" />
            <label htmlFor="wd-entry-option-text" className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-entry-option-url" className="form-check-input" defaultChecked />
            <label htmlFor="wd-entry-option-url" className="form-check-label">Website URL</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-entry-option-media" className="form-check-input" />
            <label htmlFor="wd-entry-option-media" className="form-check-label">Media Recordings</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-entry-option-annotation" className="form-check-input" />
            <label htmlFor="wd-entry-option-annotation" className="form-check-label">Student Annotation</label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-entry-option-file" className="form-check-input" />
            <label htmlFor="wd-entry-option-file" className="form-check-label">File Uploads</label>
          </div>
        </div>

        {/* Due Date, Available From, and Available Until */}
        <div className="mb-3">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
        </div>

        {/* Buttons */}
        <div className="mt-3">
          <button type="submit" className="btn btn-success">Save</button>
          <button type="button" className="btn btn-secondary ms-2">Cancel</button>
        </div>
      </form>
    </div>
  );
}
