import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};


const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availableFromDate: assignment.availableFromDate,
                availableUntilDate: assignment.availableUntilDate,
                course: assignment.course,
            };
            //state.assignments.push(newAssignment);
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            );
        },

    }
});
export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;

export default assignmentsSlice.reducer;