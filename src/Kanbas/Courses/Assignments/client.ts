import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const updateAssignment = async (assignment: any, courseId: string) => {
  if (assignment._id === "") {
    const { data } = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      assignment
    );
    return data;
  }
  const { data } = await axios.put(
    `${COURSES_API}/${courseId}/assignments/${assignment._id}`,
    assignment
  );

  return data;
};

export const deleteAssignment = async (
  courseId: string,
  assignmentId: string
) => {
  const { data } = await axios.delete(
    `${COURSES_API}/${courseId}/assignments/${assignmentId}`
  );
  return data;
};

export const create = async (courseId: string) => {
  const { data } = await axios.post(`${COURSES_API}/${courseId}/assignments`);
  return data;
};

export const fetchAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};