import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
// get all enrollments for a user
export const fetchEnrollments = async (userId: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}`);

  return data;
};
export const enrollUser = async (enrollment: any) => {
  const { data } = await axios.post(ENROLLMENTS_API, enrollment);
  return data;
};
export const unenrollUser = async (enrollment: any) => {
  const { data } = await axios.delete(
    `${ENROLLMENTS_API}/${enrollment.user}/${enrollment.course}`
  );
  return data;
};

export const getAllEnrollments = async () => {
  const { data } = await axios.get(ENROLLMENTS_API);

  return data;
};

// export const getAllEnrollmentsForCourse = async (courseId: string) => {
//   const { data } = await axios.get(`${ENROLLMENTS_API}/course/${courseId}`);
//   return data;
// };

export const enrollUserWithUsername = async (enrollment: any) => {
  const { data } = await axios.post(`${ENROLLMENTS_API}/username`, enrollment);
  return data;
};