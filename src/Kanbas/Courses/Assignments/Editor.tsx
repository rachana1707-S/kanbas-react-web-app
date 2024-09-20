import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <label htmlFor="wd-description">Assignment Description</label>
      <textarea id="wd-description" rows={5}>
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
        The landing page should include the following: 
        - Your full name and section 
        - Links to each of the lab assignments 
        - Link to the Kanbas application 
        - Links to all relevant source code repositories 
        The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <input type="checkbox" id="wd-entry-option-text" /> Text Entry <br />
              <input type="checkbox" id="wd-entry-option-url" /> Website URL <br />
              <input type="checkbox" id="wd-entry-option-media" /> Media Recordings <br />
              <input type="checkbox" id="wd-entry-option-annotation" /> Student Annotation <br />
              <input type="checkbox" id="wd-entry-option-file" /> File Uploads <br />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <label>Due Date: </label>
      <input type="date" id="wd-due-date" value="2024-05-13" />
      <br />
      <label>Available From: </label>
      <input type="date" id="wd-available-from" value="2024-05-06" />
      <br />
      <label>Available Until: </label>
      <input type="date" id="wd-available-until" value="2024-05-20" />

      <br /><br />
      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </div>
  );
}
