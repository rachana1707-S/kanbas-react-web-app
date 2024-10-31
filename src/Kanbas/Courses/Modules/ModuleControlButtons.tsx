import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";  // Import the BsPlus icon
import GreenCheckmark from "./GreenCheckmark";  // Assuming you're using the same checkmark
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({ moduleId, deleteModule, editModule }: {
  moduleId: string; deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void }) {
  return (

  
    <div className="float-end">
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />

            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>

      <GreenCheckmark />  {/* Optional: If you want to include the checkmark in this component too */}
      <BsPlus className="fs-4 me-2" />  {/* Add the BsPlus icon */}
      <IoEllipsisVertical className="fs-4" />  {/* Add the vertical ellipsis */}
    </div>
  );
}