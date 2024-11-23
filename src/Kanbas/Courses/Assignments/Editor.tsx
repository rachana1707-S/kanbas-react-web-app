import React from "react";
import { useParams, useNavigate } from "react-router";
//import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";


export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    // const assignments = db.assignments;
    // const assignment = assignments.find((assignment) => assignment._id === aid);

    const [assignment, setAssignment] = useState({
        _id: "",
        title:"",
        description: "",
        points: 100,
        dueDate: "",
        availableFromDate: "",
        availableUntilDate: "",

    })

    useEffect(() => {
        if (aid) {
            const current = assignments.find((a: any) => a._id === aid);
            if (current) {
                setAssignment(current);
            }
        }
    }, [aid, assignments]);

    

    const createAssignmentForCourse = async () => {
        if(!cid) return;
        const newAssignment = {assignment: assignment, course: cid};
        const a = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        console.log("Created assignment:", a);
        dispatch(addAssignment(assignment));
    }
    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));

    }

    const handleSave = () => {
        if (aid === "Editor") {
            createAssignmentForCourse();
        } else {
            saveAssignment(assignment);
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }

    return (
        <div id="wd-assignments-editor">
            <form>
                <div className="mb-3"> {/*_id and textarea*/}
                    <label htmlFor="wd-name" className="form-label">
                        Assignment Name</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="wd-name"
                        value={assignment.title}
                        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                    />
                    <textarea
                        className="form-control"
                        id="wd-description"
                        value={assignment.description}
                        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                        rows={3}
                    >

                    </textarea>
                </div>
                <div className="mb-3 row"> {/* Points */}
                    <label htmlFor="wd-points"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Points
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="wd-points"
                            value={assignment.points}
                            onChange={(e) => setAssignment({ ...assignment, points: +e.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row"> {/* Assignment Group */}
                    <label htmlFor="wd-group"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Assignment Group
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option selected value="EXAMS">
                                EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row"> {/* Display Grade as */}
                    <label htmlFor="wd-display-grade-as"
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Display Grade as
                    </label>
                    <div className="col-sm-10">
                        <select className="form-select" id="wd-display-grade-as">
                            <option value="Percentage">Percentage</option>
                            <option value="Score">Score</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row me-0 ms-0"> {/* Submission Type */}
                    <legend
                        className="col-sm-2 col-form-label pt-0 ps-0 text-end">
                        Submission Type
                    </legend>
                    <div className="col-sm-10 border pt-3">
                        <select className="form-select" id="wd-submission-type">
                            <option value="Percentage">Online</option>
                            <option value="Score">Email</option>
                        </select>
                        <label htmlFor="wd-text-entry"
                            className="col-sm-2 col-form-label pt-3 fw-bold">
                            Online Entry Options
                        </label>
                        <div className="form-check pt-2">
                            <input className="form-check-input" type="checkbox"
                                id="wd-text-entry" />
                            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label><br />
                        </div>
                        <div className="form-check pt-2">
                            <input type="checkbox" name="check-type" id="wd-website-url" className="form-check-input" />
                            <label htmlFor="wd-website-url">Website URL </label><br />
                        </div>
                        <div className="form-check pt-2">
                            <input type="checkbox" name="check-type" id="wd-media-recordings" className="form-check-input" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        </div>
                        <div className="form-check pt-2">
                            <input type="checkbox" name="check-type" id="wd-student-annotation" className="form-check-input" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        </div>
                        <div className="form-check pt-2 pb-2">
                            <input type="checkbox" name="check-type" id="wd-file-upload" className="form-check-input" />
                            <label htmlFor="wd-file-upload">File Uploads</label><br />
                        </div>
                    </div>
                </div>
                <div className="mb-3 row me-0 ms-0"> {/* Assign to */}
                    <legend
                        className="col-sm-2 col-form-label pt-0 text-end">
                        Assign
                    </legend>
                    <div className="col-sm-10 border">
                        <label htmlFor="wd-assign-to"
                            className="col-sm-2 col-form-label fw-bold">
                            Assign to
                        </label>
                        <select className="form-select" id="wd-assign-to">
                            <option value="Everyone">Everyone</option>
                            <option value="Administrators">Administrators</option>
                        </select>
                        <label htmlFor="wd-due-date"
                            className="fw-bold col-sm-2 col-form-label">
                            Due
                        </label>
                        <input
                            className="form-select"
                            id="wd-due-date" type="date"
                            value={assignment.dueDate}
                            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                        >
                        </input>
                        <div className="mb-3 row">
                            <div className="col">
                                <label htmlFor="wd-available-form"
                                    className="col-sm-2 col-form-label fw-bold w-100">
                                    Available from
                                </label>
                                <input
                                    className="form-select"
                                    id="wd-available-form"
                                    type="date"
                                    value={assignment.availableFromDate}
                                    onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
                                >
                                </input>
                            </div>
                            <div className="col">
                                <label htmlFor="wd-available-until"
                                    className="col-sm-2 col-form-label fw-bold">
                                    Until
                                </label>
                                <input
                                    className="form-select"
                                    id="wd-available-until"
                                    type="date"
                                    value={assignment.availableUntilDate}
                                    onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <hr />
            {/* Save and cancel buttons */}
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button
                    type="submit"
                    className="btn btn-danger me-1 float-end"
                    id="wd-assignment-save"
                    onClick={handleSave}
                >
                    Save
                </button>
            </Link>
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button type="submit" className="btn btn-secondary float-end me-1" id="wd-assignment-cancel"
                >
                    Cancel
                </button>
            </Link>

        </div>
    );
}