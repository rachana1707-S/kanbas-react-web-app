//import { enrollments } from "../../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
    enrollment: {
        user:"",
        course: ""
    }
}

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        addEnrollment: (state, action) => {
            const newErollment: any = [
                ...state.enrollments,
                {
                    ...action.payload,
                    _id: new Date().getTime().toString()
                }
            ]
            state.enrollments = newErollment;
            state.enrollment = {
                user: "",
                course: ""
            }
        },
        deleteEnrollment: (state, action) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => !(e.user === action.payload.user && e.course === action.payload.course)
            );
        }
    }
});

export const {addEnrollment, deleteEnrollment, setEnrollments} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;