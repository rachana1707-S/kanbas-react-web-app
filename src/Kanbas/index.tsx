import React from "react";
import { Route, Routes, Navigate } from "react-router"
import Account from "./Account"
import Dashboard from "./Dashboard"
import KanbasNavigation from "./Navigation"
import Courses from "./Courses"
import "./style.css";
// import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute"
import Session from "./Account/Session"
import ProtectedRouteDashboard from "./DashboardProtectedRoute"
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async () => {
        let courses = [];
        try {
            courses = await courseClient.fetchAllCourses();
        } catch (error) {
            console.error(error);
        }
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, [currentUser]);

    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    });
    const addNewCourse = async () => {
        const newCourse = await userClient.createCourse(course);
        setCourses([...courses, { ...course, newCourse }]);
    };
    const deleteCourse = async (courseId: any) => {
        const status = await courseClient.deleteCourse(courseId);
        console.log("Deleted:", status);
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        const status2 = await courseClient.updateCourse(course);
        console.log("Updated:", status2);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (

        <Session>
            <div id="wd-kanbas">
                <KanbasNavigation />
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={<ProtectedRoute>
                            <ProtectedRouteDashboard>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    canEdit={false}
                                    roleStudent={false}
                                />
                            </ProtectedRouteDashboard>
                        </ProtectedRoute>} />
                        <Route path="/Courses/:cid/*" element={
                            <ProtectedRoute>
                                <Courses courses={courses} />
                            </ProtectedRoute>
                        } />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </ div>
        </Session>

    );
}