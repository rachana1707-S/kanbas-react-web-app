import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
  courses: [],
  isEnrolling: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments.push(enrollments);
    },
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
    enrollCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
    },
    toggleIsEnrolling: (state) => {
      state.isEnrolling = !state.isEnrolling;
    },
  },
});

export const {
  setEnrollments,
  setCourses,
  enrollCourse,
  unenrollCourse,
  toggleIsEnrolling,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;