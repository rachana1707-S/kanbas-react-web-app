import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import React from "react";
export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            40% of total
            <FaPlus className="ms-2"/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}