import { Link, useParams, useLocation } from "react-router-dom";
import React from 'react';

export default function CoursesNavigation() {
  const { cid } = useParams<{ cid: string }>(); // Get the course ID from URL
  const location = useLocation(); // Get the current location

  // Define the links array
  const links = [
    { name: "Home", path: "Home" },
    { name: "Modules", path: "Modules" },
    { name: "Piazza", path: "Piazza" },
    { name: "Zoom", path: "Zoom" },
    { name: "Assignments", path: "Assignments" },
    { name: "Quizzes", path: "Quizzes" },
    { name: "Grades", path: "Grades" },
    { name: "People", path: "People" }
  ];

  // Function to determine if the link is active
  const isActive = (linkPath: string): boolean => { // Specify the type for linkPath
    return location.pathname === `/Kanbas/Courses/${cid}/${linkPath}`;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          to={`/Kanbas/Courses/${cid}/${path}`}
          id={`wd-course-${name.toLowerCase()}-link`}
          className={`list-group-item border-0 ${isActive(path) ? 'active' : 'text-danger'}`}
          aria-current={isActive(path) ? 'page' : undefined} // Indicates the active link for accessibility
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
