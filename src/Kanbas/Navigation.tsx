import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      id='wd-kanbas-navigation'
      style={{ width: 110 }}
      className='list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2'
    >
      <a
        href='https://www.northeastern.edu/'
        id='wd-neu-link'
        target='_blank'
        rel='noopener noreferrer'
        className='list-group-item bg-black border-0 text-center'
      >
        <img
          src='https://rid.org/wp-content/uploads/2024/07/Red-N-on-white-background.png'
          width='75px'
          alt=''
        />
      </a>

      <Link
        to='Account'
        id='wd-account-link'
        className='list-group-item text-center border-0 bg-black text-white'
      >
        <FaRegCircleUser className='fs-1 text text-white' />
        <br />
        Account
      </Link>

      {/* New Navbar */}
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}