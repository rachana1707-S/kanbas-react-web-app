import { Link } from "react-router-dom";
import React from 'react';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (16)</h2> <hr />
      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          
          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="react-js-image.png" width="100%" height={160} alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Course 2 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5010/Home">
                <img src="logo192.png" width="100%" height={160} alt="Program Design Paradigm" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5010 Program Design Paradigm</h5>
                  <p className="wd-dashboard-course-title card-text">Program Design</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="react-js-image.png" width="100%" height={160} alt="React JS" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5678/Home">
                <img src="ds.png" width="100%" height={160} alt="Data Structures" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5678 Data Structures</h5>
                  <p className="wd-dashboard-course-title card-text">Efficient Data Algorithms</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/5679/Home">
                <img src="ml.jpeg" width="100%" height={160} alt="Machine Learning" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS5679 Machine Learning</h5>
                  <p className="wd-dashboard-course-title card-text">Foundations of ML</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/6789/Home">
                <img src="ai.jpg" width="100%" height={160} alt="Artificial Intelligence" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS6789 Artificial Intelligence</h5>
                  <p className="wd-dashboard-course-title card-text">AI and Deep Learning</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1235/Home">
                <img src="algo.jpg" width="100%" height={160} alt="Algorithms" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1235 Algorithms</h5>
                  <p className="wd-dashboard-course-title card-text">Algorithms & Complexity</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 8 */}
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/2345/Home">
                <img src="db.png" width="100%" height={160} alt="Database Systems" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS2345 Database Systems</h5>
                  <p className="wd-dashboard-course-title card-text">SQL and NoSQL Databases</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
