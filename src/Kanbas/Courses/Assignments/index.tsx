import React from 'react';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="mb-3">
        <input
          id="wd-search-assignment"
          className="form-control mb-2"
          placeholder="Search for Assignments"
        />
        
      </div>
      <ul id="wd-assignments" className="list-group rounded-0">
  <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
      ASSIGNMENTS 40% of Total
      <button className="btn btn-secondary float-end">+</button>
    </div>
    <ul className="wd-lessons list-group rounded-0">
      <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        A1 - ENV + HTML
        <p className="m-0 ps-5">
          Multiple Modules | <strong>Not available until May 6 at 12:00am</strong>
        </p>
        <p className="m-0 ps-5">Due May 13 at 11:59pm | 100 pts</p>
        <LessonControlButtons />
      </li>

      <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        A2 - CSS + BOOTSTRAP
        <p className="m-0 ps-5">
          Multiple Modules | <strong>Not available until May 13 at 12:00am</strong>
        </p>
        <p className="m-0 ps-5">Due May 20 at 11:59pm | 100 pts</p>
        <LessonControlButtons />
      </li>

      <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        A3 - JAVASCRIPT + REACT
        <p className="m-0 ps-5">
          Multiple Modules | <strong>Not available until May 20 at 12:00am</strong>
        </p>
        <p className="m-0 ps-5">Due May 27 at 11:59pm | 100 pts</p>
        <LessonControlButtons />
      </li>
    </ul>
  </li>
</ul>

    </div>
  );
}
