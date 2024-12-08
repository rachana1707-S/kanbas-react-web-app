import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setAssignments } from "./reducer";
import * as assignmentClient from "./client";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [assignments, setStateAssignments] = useState([]);

  const dispatch = useDispatch();

  const fetchAllAssignments = async () => {
    try {
      const fetchedAssignments =
        await assignmentClient.fetchAssignmentsForCourse(cid as string);

      setStateAssignments(fetchedAssignments);
      dispatch(setAssignments(fetchedAssignments));
      return fetchedAssignments;
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  useEffect(() => {
    fetchAllAssignments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid, dispatch]);

  const removeAssignment = async (assignmentId: string) => {
    try {
      await assignmentClient.deleteAssignment(cid ?? "", assignmentId);
      await fetchAllAssignments();
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
  };

  if (!assignments) {
    return <div>Loading assignments...</div>;
  }

  return (
    <div id='wd-assignments'>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        <div className='input-group' style={{ width: "300px" }}>
          <span className='input-group-text bg-white'>
            <FaSearch />
          </span>
          <input
            type='text'
            className='form-control border-start-0'
            placeholder='Search...'
            aria-label='Search'
          />
        </div>
        <div>
          <button
            id='wd-add-assignment-group'
            className='btn btn-secondary bg-gray ms-2'
          >
            + Group
          </button>
          {(currentUser.role === "FACULTY" || currentUser.role === "ADMIN") && (
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments/new`}
              className='btn btn-danger ms-2'
            >
              + Assignment
            </Link>
          )}
        </div>
      </div>
      <div className='border border-1 border-dark'>
        <h5
          id='wd-assignments-title'
          className='p-2 border-bottom border-dark bg-secondary d-flex justify-content-between align-items-center mb-0'
          style={{ height: "80px" }}
        >
          <div>
            <BsGripVertical className='me-2 fs-3' />
            ASSIGNMENTS
          </div>
          <span className='float-end'>
            <span className='border border-1 border-dark bg-white p-2 rounded-5'>
              40% of Total
            </span>
            {(currentUser.role === "FACULTY" ||
              currentUser.role === "ADMIN") && <FaPlus className='ms-2' />}
            <IoEllipsisVertical className='fs-4 ms-2' />
          </span>
        </h5>
        <ul
          id='wd-assignment-list'
          className='assignment-list-group list-group rounded-0'
        >
          {assignments.map((asgn: any) => (
            <li
              key={asgn._id}
              className='wd-assignment-list-item p-2 d-flex align-items-center border border-1'
            >
              <AssignmentControls />
              <div className='ms-2'>
                <Link
                  to={`/Kanbas/Courses/${cid}/Assignments/${asgn._id}`}
                  className='wd-assignment-link text-decoration-none text-black'
                >
                  {asgn.title}
                  <p className='wd-assignment-link mb-0 fs-6'>
                    <span className='text-danger'>Multiple Modules</span> |{" "}
                    <b>Not Available until</b> {asgn.availableDate} |{" "}
                    {asgn.points}
                    <br />
                    <b>Due</b> {asgn.dueDate}
                  </p>
                </Link>
              </div>
              <div className='ms-auto d-flex'>
                <GreenCheckmark />
                <IoEllipsisVertical className='fs-4' />
                {(currentUser.role === "FACULTY" ||
                  currentUser.role === "ADMIN") && (
                  <FaTrash
                    className='fs-4 text-danger'
                    onClick={() => removeAssignment(asgn._id)}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}