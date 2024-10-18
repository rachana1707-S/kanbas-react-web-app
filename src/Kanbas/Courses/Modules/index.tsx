import React from 'react';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        
        {modules
          .filter((module: any) => module.course === cid) // Added filter for course ID
          .map((module: any) => (  // Mapping over filtered modules
            <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name} {/* Dynamically displaying module name */}
                <ModuleControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons && module.lessons.map((lesson: any) => ( // Added dynamic lesson list rendering
                  <li key={lesson.id} className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name} {/* Dynamically displaying lesson name */}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
