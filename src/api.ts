import axios from "axios";
import { Assignment } from "./models/assignment";
import { Lecture } from "./models/lecture";

const CODEYOGI_BASE_URL = "https://api.codeyogi.io/";
const cacheData = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const getCachedData = <T>(key: string) => {
  const data: T[] = JSON.parse(localStorage.getItem(key) || "{}");
  return data;
};

export const getLectures = async () => {
  const response = await axios.get<Lecture[]>(
    CODEYOGI_BASE_URL + "batches/1/sessions",
    {
      withCredentials: true,
    }
  );
  cacheData<Lecture[]>("lectures", response.data);
  return response.data;
};
export const getAssignmentList = async () => {
  const response = await axios.get<Assignment[]>(
    CODEYOGI_BASE_URL + "batches/1/assignments",
    {
      withCredentials: true,
    }
  );
  cacheData<Assignment[]>("assignment", response.data);
  return response.data;
};
export const submitAssignment = (
  submissionLink: String,
  assignmentNumber: number
) => {
  axios.put(
    CODEYOGI_BASE_URL + `assignment/${assignmentNumber}/submit`,
    { submissionLink: submissionLink },
    {
      withCredentials: true,
    }
  );
};
