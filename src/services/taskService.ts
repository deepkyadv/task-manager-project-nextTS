import { httpAxios } from "../helper/httpHelper";

export interface Task {
  title: string;
  content: string;
  status: string;
  userId?: string;
}

export async function addTask(task: Task): Promise<any> {
  const result = await httpAxios
    .post("/apis/works", task)
    .then((response) => response.data);

  return result;
}

export async function getTaskOfUser(id: string) {
  const result = await httpAxios
    .get(`/apis/users/${id}/tasks`)
    .then((response) => response.data);
  return result;
}

export async function deleteTaskofUser(id: string) {
  const result = await httpAxios
    .delete(`/apis/works/${id}`)
    .then((response) => response.data);
  return result;
}
