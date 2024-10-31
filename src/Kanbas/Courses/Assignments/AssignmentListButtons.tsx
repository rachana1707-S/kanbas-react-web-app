import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
export default function LessonControlButtons({ assignmentId, deleteAssignment }:
  {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
  }
) {
  const [confirm, setConfirm] = useState(false);


  const handleConfirmDelete = () => {
    deleteAssignment(assignmentId);
    setConfirm(false);
  };

  return (
    <div className="float-end">
      <FaTrash className="me-2 fs-4" onClick={() => setConfirm(true)} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {confirm && (
        <div className="confirm-dialog">
          <p>Are you sure you want to remove this assignment?</p>
          <button className="btn btn-danger me-2" onClick={handleConfirmDelete}>
            Yes
          </button>
          <button className="btn btn-secondary" onClick={() => setConfirm(false)}>
            No
          </button>
        </div>
      )}
    </div>
  );
}