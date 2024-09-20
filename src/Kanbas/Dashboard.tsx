import { Link } from "react-router-dom";
import React from 'react';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (16)</h2> <hr />
      <div id="wd-dashboard-courses">

        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <img src="react-js-image.png" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <img src="logo192.png" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
              CS5010 Program Design Paradigm
            </Link>
            <p className="wd-dashboard-course-title">
              Program Design
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <img src="react-js-image.png" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <img src="ds.png" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
              CS5678 Data Structures
            </Link>
            <p className="wd-dashboard-course-title">
              Efficient Data Algorithms
            </p>
            <Link to="/Kanbas/Courses/5678/Home"> Go </Link>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <img src="ml.jpeg" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5679/Home">
              CS5679 Machine Learning
            </Link>
            <p className="wd-dashboard-course-title">
              Foundations of ML
            </p>
            <Link to="/Kanbas/Courses/5679/Home"> Go </Link>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <img src="ai.jpg" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6789/Home">
              CS6789 Artificial Intelligence
            </Link>
            <p className="wd-dashboard-course-title">
              AI and Deep Learning
            </p>
            <Link to="/Kanbas/Courses/6789/Home"> Go </Link>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <img src="algo.jpg" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1235/Home">
              CS1235 Algorithms
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithms & Complexity
            </p>
            <Link to="/Kanbas/Courses/1235/Home"> Go </Link>
          </div>
        </div>

        {/* Course 8 */}
        <div className="wd-dashboard-course">
          <img src="db.png" width={200} alt="dashboard-img" />
          <div>
            <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
              CS2345 Database Systems
            </Link>
            <p className="wd-dashboard-course-title">
              SQL and NoSQL Databases
            </p>
            <Link to="/Kanbas/Courses/2345/Home"> Go </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
