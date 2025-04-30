import axios from "axios";
import { ITask } from "../interface/Task";

const API_URL: string = import.meta.env.VITE_API_URL;

export const getTasks = () => axios.get<ITask[]>(API_URL);
export const postTasks = (task: Omit<ITask, "id">) =>
  axios.post<ITask[]>(API_URL);
export const putTask = (taskID: number, task: Partial<ITask>) =>
  axios.put<ITask>(`${API_URL}/${taskID}, task`);

export const deleteTask = (id: number) => axios.delete(`${API_URL}/${id}`);
