import { IoEllipsisVertical } from "react-icons/io5";
import React from "react";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            40% of total
            <FaPlus className="ms-2"/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}