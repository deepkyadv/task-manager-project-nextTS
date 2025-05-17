import { httpAxios } from "../helper/httpHelper";

export interface signUpUser {
  name: string;
  email: string;
  password: string;
  about?: string;
  profileUrl?: string;
}

export async function createUser(newUser: signUpUser): Promise<any> {
  const result = await httpAxios
    .post("/apis/users", newUser)
    .then((response) => response.data);
  return result;
}

export interface loginUser {
  email: string;
  password: string;
}

export async function LoginUser(usered: loginUser): Promise<any> {
  const result = await httpAxios
    .post("/apis/login", usered)
    .then((response) => response.data);
  return result;
}

export async function CurrentUser() {
  const result = await httpAxios
    .get("/apis/current")
    .then((response) => response.data);
  return result;
}

export async function LogOut(){
  const result = await httpAxios.post("/apis/logout").then((response)=> response.data)
  return result
}
