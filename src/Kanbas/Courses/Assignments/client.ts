import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const updateAssignment = async (assignment: any, courseId: string) => {
  if (assignment._id === "") {
    const { data } = await axiosWithCredentials.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return data;
  }
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${courseId}/assignments/${assignment._id}`,
    assignment
  );

  return data;
};

export const deleteAssignment = async (
  courseId: string,
  assignmentId: string
) =>
  axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}/assignments/${assignmentId}`
  );

export const create = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`
  );
  return data;
};

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return data;
};