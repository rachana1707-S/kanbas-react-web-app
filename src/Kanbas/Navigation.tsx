import { Link, useLocation } from "react-router-dom";
import React from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { MdHistory } from "react-icons/md"; // History icon
import { GiFilmProjector } from "react-icons/gi"; // Studio icon (film projector)
import { FaQuestionCircle } from "react-icons/fa"; // Help icon

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid }
  ];

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
        className={`list-group-item text-center border-0 bg-black ${pathname.includes("Account") ? "bg-white text-danger" : "text-white"}`}>
        <FaRegCircleUser className="fs-1 text-white" /><br />
        Account
      </Link>

      {/* Dynamic Links */}
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0 
          ${pathname.includes(link.path) ? "bg-white text-danger" : "text-white"}`}>
          <link.icon className="fs-1 text-danger" /><br />
          {link.label}
        </Link>
      ))}

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
