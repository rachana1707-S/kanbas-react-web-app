import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const initialState = {
    enrollments: enrollments,
}

const enrollmentsSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            // const exists = state.enrollments.some((e) => e.user === enrollment.user && e.course === enrollment.course);
            // if (!exists) {
            //     const newEnrollment: any = {
            //         _id: new Date().getTime().toString(),
            //         user: enrollment.user,
            //         course: enrollment.course,
            //     };
            //     //state.enrollments.push(enrollment);
            //     state.enrollments = [...state.enrollments, newEnrollment] as any;
            // }
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: enrollment.user,
                course: enrollment.course,
            };

            state.enrollments = [...state.enrollments, newEnrollment] as any;
            
        },
        deleteEnrollment: (state, { payload:enrollmentId }) => {
            state.enrollments = state.enrollments.filter((e: any) => e._id !== enrollmentId) as any;
        }
    }
})

export const { addEnrollment, deleteEnrollment } =
    enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;