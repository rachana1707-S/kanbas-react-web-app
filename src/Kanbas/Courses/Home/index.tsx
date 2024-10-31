import React from "react";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home({canEdit}: {canEdit: boolean;}) {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill me-3">
                <Modules canEdit={false} />
            </div>
            {canEdit && <div className="d-none d-md-block">
                <CourseStatus />
            </div>}
        </div>

    );
}