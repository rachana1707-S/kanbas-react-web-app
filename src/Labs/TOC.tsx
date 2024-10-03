import { useLocation } from "react-router-dom";
import React from 'react';
import { Link } from 'react-router-dom';

export default function TOC() {
  const { pathname } = useLocation();

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/Labs" className={`nav-link ${pathname === "/Labs" ? "active" : ""}`}>
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Labs/Lab1" className={`nav-link ${pathname.includes("/Labs/Lab1") ? "active" : ""}`}>
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Labs/Lab2" className={`nav-link ${pathname.includes("/Labs/Lab2") ? "active" : ""}`}>
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Labs/Lab3" className={`nav-link ${pathname.includes("/Labs/Lab3") ? "active" : ""}`}>
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Kanbas" className={`nav-link ${pathname === "/Kanbas" ? "active" : ""}`}>
          Kanbas
        </Link>
      </li>
      <li className="nav-item">
        <a href="https://github.com/rachana1707-S" className="nav-link">
          My GitHub
        </a>
      </li>
    </ul>
  );
}
