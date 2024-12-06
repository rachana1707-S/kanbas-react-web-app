import { FaUserCircle } from "react-icons/fa";
import { enrollments } from "../../Database";
import { useParams } from "react-router";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import PeopleDetails from "./Details";
import { Link } from "react-router-dom";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
  return (
    <div id='wd-people-table'>
      <PeopleDetails />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (eu: {
              _id: Key | null | undefined;
              firstName:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              lastName:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              loginId:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              section:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              role:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              lastActivity:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              totalActivity:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
            }) => (
              <tr key={eu._id}>
                <td className='wd-full-name text-nowrap'>
                  <Link
                    to={`/Kanbas/Account/Users/${eu._id}`}
                    className='text-decoration-none'
                  >
                    <FaUserCircle className='me-2 fs-1 text-secondary' />
                    <span className='wd-first-name'>{eu.firstName}</span>{" "}
                    <span className='wd-last-name'>{eu.lastName}</span>
                  </Link>
                </td>
                <td className='wd-login-id'>{eu.loginId}</td>
                <td className='wd-section'>{eu.section}</td>
                <td className='wd-role'>{eu.role}</td>
                <td className='wd-last-activity'>{eu.lastActivity}</td>
                <td className='wd-total-activity'>{eu.totalActivity}</td>{" "}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}