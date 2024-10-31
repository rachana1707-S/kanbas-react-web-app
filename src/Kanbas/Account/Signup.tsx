import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h1>Sign up</h1>
            <input id="wd-username" className="form-control mb-2" placeholder="username" />

            <input id="wd-password" className="form-control mb-2" placeholder="password" type="password" />

            <Link id="wd-signup-btn" to="/Kanbas/Account/Profile" className="btn btn-primary w-100" > Sign up </Link><br />
            <Link to="/Kanbas/Account/Signin" >Sign in</Link>
        </div>
    );
}