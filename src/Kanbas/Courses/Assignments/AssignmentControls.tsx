import React from "react";

import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function AssignmentControls() {
    const { cid } = useParams();
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/Editor`}>
                <button
                    id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>
            </Link>

            <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            <div className="d-inline me-1 float-left">
                <button id="wd-search-assignment-btn" className="btn btn-lg d-inline btn-secondary">
                    <FaSearch className="position-relative me-2" style={{ bottom: "1px" }} />
                    <input id="wd-search-assignment"
                        className="btn me-1 "
                        placeholder="Search..." />
                </button>
            </div>
        </div>
    );
}