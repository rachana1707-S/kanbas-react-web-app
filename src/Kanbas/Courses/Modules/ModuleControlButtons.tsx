import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";  // Import the BsPlus icon
import GreenCheckmark from "./GreenCheckmark";  // Assuming you're using the same checkmark

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />  {/* Optional: If you want to include the checkmark in this component too */}
      <BsPlus className="fs-4 me-2" />  {/* Add the BsPlus icon */}
      <IoEllipsisVertical className="fs-4" />  {/* Add the vertical ellipsis */}
    </div>
  );
}
