import { Routes, Route, Navigate } from "react-router-dom";
import Accounts from "./Account";
import Dashboard from "./Dashboard/index";
import Courses from "./Courses/index";
import AccountNavigation from "./Navigation";
import "./styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { setCourses, setEnrollments } from "./Dashboard/reducer";

const Kanbas = () => {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCurrCourses] = useState([] as any[]);
  const [enrollments, setCurrEnrollments] = useState([] as any[]);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);

      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      console.log("yeh hai enrolled Courses: ", enrolledCourses);
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      dispatch(setCourses(courses));
      setCurrCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const addNewCourse = async (course: {
    name: string;
    description: string;
  }) => {
    const newCourse = await courseClient.createCourse(course);

    const updatedCourses = [...courses, newCourse];
    dispatch(setCourses(updatedCourses));
    setCurrCourses(updatedCourses);
  };

  const deleteCourse = async (courseId: any) => {
    await courseClient.deleteCourse(courseId);
    const updatedCourses = courses.filter(
      (course: { _id: any }) => course._id !== courseId
    );
    dispatch(setCourses(updatedCourses));
    setCurrCourses(updatedCourses);

    const updatedEnrollments = enrollments.filter(
      (enrollment: { course: any }) => enrollment.course !== courseId
    );
    dispatch(setEnrollments(updatedEnrollments));
    setCurrEnrollments(updatedEnrollments);
  };

  const updateCourse = async (course: any) => {
    const updatedCourse = await courseClient.updateCourse(course);

    const updatedCourses = courses.map((c: { _id: any }) =>
      c._id === course._id ? updatedCourse : c
    );

    dispatch(setCourses(updatedCourses));

    setCurrCourses(updatedCourses);
  };

  return (
    // <Provider store={store}>
    <div id='wd-kanbas' className='kanbas'>
      <Session>
        <div>
          <table>
            <tbody>
              <AccountNavigation />
              <div className='wd-main-content-offset p-3'>
                <Routes>
                  <Route
                    path='/'
                    // element={<Navigate to="Accounts/SignIn" replace />}
                    element={<Navigate to='Dashboard' replace />}
                  />
                  <Route path='Account/*' element={<Accounts />} />
                  <Route
                    path='Dashboard/*'
                    element={
                      <ProtectedRoute>
                        <Dashboard
                          courses={courses}
                          setCurrCourses={setCurrCourses}
                          enrollments={enrollments}
                          setCurrEnrollments={setCurrEnrollments}
                          addNewCourse={addNewCourse}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}
                          enrolling={enrolling}
                          setEnrolling={setEnrolling}
                          updateEnrollment={updateEnrollment}
                        />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path='Courses/:cid/*'
                    element={
                      <ProtectedRoute>
                        <Courses courses={courses} />
                      </ProtectedRoute>
                    }
                  />
                  <Route path='Calendar' element={<h1>Calendar</h1>} />
                  <Route path='Inbox' element={<h1>Inbox</h1>} />
                </Routes>
              </div>
            </tbody>
          </table>
        </div>
      </Session>
    </div>
    // </Provider>
  );
};

export default Kanbas;