import { Link } from "react-router-dom";
import React from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { MdHistory } from "react-icons/md"; // History icon
import { GiFilmProjector } from "react-icons/gi"; // Studio icon (film projector)
import { FaQuestionCircle } from "react-icons/fa"; // Help icon

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} 
         className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">
      {/* NEU logo link */}
      <a id="wd-neu-link" target="_blank" rel="noopener noreferrer" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="neu2.jpg" width="75px" alt="NEU" /></a>

      {/* Account link */}
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text-white" /><br />
        Account
      </Link>

      {/* Dashboard link */}
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard
      </Link>

      {/* Courses link */}
      <Link to="/Kanbas/Courses" id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses
      </Link>

      {/* Calendar link */}
      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <IoCalendarOutline className="fs-1 text-white" /><br />
        Calendar
      </Link>

      {/* Inbox link */}
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaInbox className="fs-1 text-white" /><br />
        Inbox
      </Link>

      {/* Settings link */}
      <Link to="/Kanbas/Settings" id="wd-settings-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <LiaCogSolid className="fs-1 text-white" /><br />
        Settings
      </Link>

      {/* History link */}
      <Link to="/Kanbas/History" id="wd-history-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <MdHistory className="fs-1 text-white" /><br />
        History
      </Link>

      {/* Studio link */}
      <Link to="/Kanbas/Studio" id="wd-studio-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <GiFilmProjector className="fs-1 text-white" /><br />
        Studio
      </Link>

      {/* Help link */}
      <Link to="/Kanbas/Help" id="wd-help-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaQuestionCircle className="fs-1 text-white" /><br />
        Help
      </Link>
    </div>
  );
}
