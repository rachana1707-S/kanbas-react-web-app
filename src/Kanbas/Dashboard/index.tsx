import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleIsEnrolling,
  setEnrollments,
  setCourses,
  enrollCourse,
  unenrollCourse,
} from "./reducer";
import { fetchAllCourses } from "../Courses/client";
import * as enrollmentsClient from "../Dashboard/client";

export default function Dashboard({
  courses,
  setCurrCourses,
  enrollments,
  setCurrEnrollments,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  setCurrCourses: (courses: []) => void;
  enrollments: any[];
  setCurrEnrollments: (enrollments: []) => void;
  addNewCourse: (course: any) => void;
  deleteCourse: (course: any) => void;
  updateCourse: (course: any) => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    name: "",
    description: "",
  });

  // const [enrollments, setEnrolledCourses] = useState([]);

  const dispatch = useDispatch();
  const userRole = currentUser.role;

  const isEnrollingFromStore = useSelector(
    (state: any) => state.enrollmentsReducer.isEnrolling
  );

  const isEnrolling = isEnrollingFromStore;

  const handleEnroll = async (courseId: string) => {
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    await enrollmentsClient.enrollUser({
      user: currentUser._id,
      course: courseId,
    });

    getEnrollments();
  };

  const handleUnenroll = async (courseId: string) => {
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    await enrollmentsClient.unenrollUser({
      user: currentUser._id,
      course: courseId,
    });

    getEnrollments();
  };

  const handleEnrollmentsClick = () => {
    dispatch(toggleIsEnrolling());
  };

  const getEnrollments = async () => {
    const fetchedEnrollments = await enrollmentsClient.fetchEnrollments(
      currentUser._id
    );

    dispatch(setEnrollments(fetchedEnrollments));
    setCurrEnrollments(fetchedEnrollments);
    return fetchedEnrollments;
  };

  const fetchCourses = async () => {
    const c = await fetchAllCourses();
    dispatch(setCourses(c));
    setCurrCourses(c);
  };

  useEffect(() => {
    getEnrollments();
    fetchCourses();
  }, [currentUser]);

  return (
    <div id='wd-dashboard'>
      <h1 id='wd-dashboard-title'>
        Dashboard
        <button
          onClick={() => setEnrolling(!enrolling)}
          className='float-end btn btn-primary'
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      {userRole === "FACULTY" && (
        <div className='card p-3 mb-4'>
          <h5 className='mb-3'>
            New Course
            <button
              className='btn btn-primary ms-3 m-2'
              id='wd-add-new-course-click'
              onClick={() => addNewCourse(course)}
            >
              Add
            </button>
            <button
              className='btn btn-warning me-2 m-2'
              onClick={() => {
                updateCourse(course);
                navigate(0);
              }}
              id='wd-update-course-click'
            >
              Update
            </button>
          </h5>
          <div className='mb-2'>
            <input
              value={course.name}
              className='form-control mb-3'
              placeholder='Course Name'
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div className='mb-3'>
            <textarea
              value={course.description}
              className='form-control'
              placeholder='Course Description'
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </div>
        </div>
      )}
      {/* {userRole === "STUDENT" && ( */}
      <div className='card border-0 pt-2 mb-1'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 id='wd-dashboard-published'>
            {isEnrolling
              ? "Published Courses (" + courses.length + ")"
              : "Published Courses (" + enrollments.length + ")"}
          </h2>
          <button
            className='btn btn-primary'
            id='wd-enroll-course-click'
            onClick={handleEnrollmentsClick}
          >
            {isEnrolling ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
        </div>
      </div>
      {/* )} */}
      <hr />
      <div id='wd-dashboard-courses' className='row'>
        <div className='row row-cols-1 row-cols-md-5 g-4'>
          {isEnrolling
            ? // Showing all unique courses with Enroll/Unenroll buttons
              courses.map((course: any) => (
                <div
                  className='wd-dashboard-course col'
                  key={course._id}
                  style={{ width: "300px" }}
                >
                  <div className='card rounded-3 overflow-hidden'>
                    <img
                      alt=''
                      src={
                        course.image
                          ? require(`../../../public/images/${course.image}`)
                          : "https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png"
                      }
                      width='100%'
                      height={160}
                    />
                    <div className='card-body'>
                      <h5 className='wd-dashboard-course-title card-title'>
                        {enrolling && (
                          <button
                            className={`btn ${
                              course.enrolled ? "btn-danger" : "btn-success"
                            } float-end`}
                          >
                            {course.enrolled ? "Unenroll" : "Enroll"}
                          </button>
                        )}
                        {course.name}
                      </h5>
                      <p
                        className='wd-dashboard-course-title card-text overflow-y-hidden'
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      {/* Check if the user is enrolled in the course */}
                      {enrollments.find(
                        (enrollment: any) => enrollment._id === course._id
                      ) ? (
                        <button
                          className='btn btn-danger'
                          onClick={() => handleUnenroll(course._id)}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className='btn btn-success'
                          onClick={() => handleEnroll(course._id)}
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                    {/* </Link> */}
                  </div>
                </div>
              ))
            : // Show only enrolled courses
              enrollments.map((course: any) => (
                <div
                  className='wd-dashboard-course col'
                  key={course._id}
                  style={{ width: "300px" }}
                >
                  <div className='card rounded-3 overflow-hidden'>
                    <img
                      alt=''
                      src={
                        course.image
                          ? require(`../../../public/images/${course.image}`)
                          : "https://miro.medium.com/v2/1*K0a7xINk0RM5gfXGSN68cw.png"
                      }
                      width='100%'
                      height={160}
                    />
                    <div className='card-body'>
                      <h5 className='wd-dashboard-course-title card-title'>
                        {course.name}
                      </h5>
                      <p
                        className='wd-dashboard-course-title card-text overflow-y-hidden'
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className='btn btn-primary'
                      >
                        Go
                      </Link>
                      {userRole === "FACULTY" && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                            navigate(0);
                          }}
                          className='btn btn-danger float-end'
                          id='wd-delete-course-click'
                        >
                          Delete
                        </button>
                      )}
                      {userRole === "FACULTY" && (
                        <button
                          id='wd-edit-course-click'
                          onClick={(event) => {
                            event.preventDefault();

                            setCourse(course);
                          }}
                          className='btn btn-warning me-2 float-end'
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}