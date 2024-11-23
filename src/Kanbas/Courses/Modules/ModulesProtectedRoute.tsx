import React from "react";

import { useSelector } from "react-redux";
import Modules from "./index"

export default function ProtectedRouteModules({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return <Modules canEdit = {true} />;
    } else {
        return <Modules canEdit = {false} />;
    }
}