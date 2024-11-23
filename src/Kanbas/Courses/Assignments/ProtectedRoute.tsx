import React from "react";

import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import Assignments from "./index"

export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return <Assignments canEdit = {true} />;
    } else {
        return <Assignments canEdit = {false} />;
    }
}