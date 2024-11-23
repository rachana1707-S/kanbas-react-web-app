import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentListButtons from "./AssignmentListButtons";
import { FaRegEdit } from "react-icons/fa";
import { useParams } from "react-router";
import { useLocation } from "react-router"
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignments } from "./reducer";
import { useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import React from "react";

export default function Assignments({ canEdit }: { canEdit: boolean; }) {
    const { cid } = useParams();
    //const [assignment, setAssignment] = useState("");
    //const assignments = db.assignments;
    const { pathname } = useLocation();
    const path = "#" + pathname + "/"
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    },);

    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    }

    return (
        <div id="wd-assignments">
            {canEdit && (<><AssignmentControls /><br /></>)}
            <ul id="wd-assignment-list" className="list-group rounded-0 w-100" >
                <ul id="wd-assignment-list" className="list-group rounded-0 w-100">
                    <li className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-assignments-title p-3 ps-2 bg-secondary" >
                            <BsGripVertical className="me-2 fs-3" />
                            Assignments
                            {canEdit && <AssignmentControlButtons />}
                        </div>
                        {assignments
                            .map((assignment: any) => (

                                <ul className="wd-assignments-lessons list-group rounded-0">
                                    <li className="wd-lesson list-group-item wd-grid-row p-3 ps-1">
                                        <div className="wd-grid-col-left-sidebar">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {canEdit && <FaRegEdit className="me-2 fs-4" />}
                                        </div>
                                        <div className="wd-grid-col-main-content">
                                            {canEdit && <a className="wd-assignment-link wd-fg-color-black text-decoration-none"
                                                href={path + assignment._id}>
                                                <h3>{assignment.title}</h3>
                                            </a>}
                                            {!canEdit &&
                                                <h3>{assignment.title}</h3>
                                            }
                                            <p className="wd-fg-color-red"> Multiple Modules <span className="wd-fg-color-black">| Not available until May 6 at 12:00am |
                                                <br /> Due May 13 at 11:59pm | 100pts</span></p>
                                        </div>
                                        <div className="wd-grid-col-right-sidebar">
                                            {canEdit && <AssignmentListButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => removeAssignment(assignmentId)} />}
                                        </div>

                                    </li>

                                </ul>


                            ))}
                    </li>
                </ul>
            </ul>
        </div>
    );
}