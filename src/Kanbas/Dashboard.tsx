import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./reducer";
import ProtectedRouteCoursePage from "./CourseProtectedRoute";
import * as courseClient from "../../src/Kanbas/Courses/client";


export default function Dashboard(
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, canEdit, roleStudent, enrolling, setEnrolling }: {
        courses: any[]; course: any;
        setCourse: (course: any) => void;
        addNewCourse: () => void;
        deleteCourse: (course: any) => void;
        updateCourse: () => void;
        canEdit: boolean;
        roleStudent: boolean;
        enrolling: boolean; 
        setEnrolling: (enrolling: boolean) => void;
    }
) {
    // create a useEffect that calles findCoursesForEnrolledUser 
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
    const dispatch = useDispatch();
    const [showAllCourses, setShowAllCourses] = useState(false);

    const showCourses = () => {
        setShowAllCourses((p: any) => !p);
    };
    const fetchEnrollments = async () => {
        const enrollments1 = await courseClient.findEnrollments();
        dispatch(setEnrollments(enrollments1));
    };
    useEffect(() => {
        fetchEnrollments();
    },);


    const courseFilter = () => {
        // return showAllCourses ? courses : courses.filter(course => enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollments.course === course._id));
        if (showAllCourses) {
            return courses;
        } else {
            return courses.filter((course) =>
                enrollments.some(
                    (enrollment: any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                )
            );
        }
    }

    const studentEnrolled = (courseId: string) => {
        return enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === courseId
        );
    }

    const enrollmentToggle = async (courseId: string) => {
        if (studentEnrolled(courseId)) {
            const unenroll = await courseClient.unenrollUserInCourse(currentUser._id, courseId);
            console.log("Unenrolled:", unenroll);
            const enrollmentId = enrollments.find(
                (e: any) => e.user === currentUser._id && e.course === courseId)._id
            dispatch(deleteEnrollment(enrollmentId));
        } else {
            // const newEnroll = { user: currentUser._id, course: courseId };
            const enroll = await courseClient.enrollUserInCourse(currentUser._id, courseId);
            console.log("Enrolled:", enroll);
            dispatch(addEnrollment({ user: currentUser._id, course: courseId }));
        }
    }


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
        </h1> <hr />
            {canEdit && <>
                <h5>New Course
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse} >
                        Add
                    </button>
                    <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                <br />
                <input
                    defaultValue={course.name}
                    className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <textarea
                    defaultValue={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                <hr />
            </>}
            {roleStudent &&
                <button className="btn btn-primary float-end" onClick={showCourses}>
                    Enrollments
                </button>}
            <h2 id="wd-dashboard-published">Published Courses ({courseFilter().length})</h2> <hr />

            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <img src="/images/reactjs.jpg" width="100%" height={160} alt="react" />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                        {enrolling && (
              <button className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                {course.enrolled ? "Unenroll" : "Enroll"}
              </button>
            )}

                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description}
                                        </p>
                                        <ProtectedRouteCoursePage courseId={course._id}>
                                            <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                                <button className="btn btn-primary"> Go </button>
                                            </Link>
                                        </ProtectedRouteCoursePage>

                                        {roleStudent &&
                                            (
                                                <button
                                                    className={`btn ms-2 float-end ${studentEnrolled(course._id) ? "btn-danger" : "btn-success"}`}
                                                    onClick={() => enrollmentToggle(course._id)}
                                                >
                                                    {studentEnrolled(course._id) ? "Unenroll" : "Enroll"}
                                                </button>
                                            )
                                        }
                                        {canEdit && <>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                                Edit
                                            </button>
                                        </>}

                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div >
    );
}