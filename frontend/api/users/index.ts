import axios from "axios";

const baseURL = "/api/users";

export type UserRole = "Administrator" | "Regular User";

export interface GetUser {
  first_name: string;
  last_name: string;
  email: string;
  role: "Administrator" | "Regular User";
  _id: string;
}

export interface SetUser {
  first_name: string;
  last_name: string;
  email: string;
  role: "Administrator" | "Regular User";
}

const UsersApi = {
  getAll: async (): Promise<GetUser[]> => {
    const response = await axios.get(baseURL);
    return response.data;
  },
  getOne: async (userId: string): Promise<GetUser> => {
    const response = await axios.get(`${baseURL}/${userId}`);
    return response.data;
  },
  delete: async (userId: string): Promise<void> => {
    await axios.delete(`${baseURL}/${userId}`);
  },
  deleteAll: async (): Promise<void> => {
    await axios.delete(baseURL);
  },
  update: async (userId: string, user: SetUser): Promise<void> => {
    await axios.put(`${baseURL}/${userId}`, user);
  },
  create: async (user: SetUser): Promise<void> => {
    await axios.post(baseURL, user);
  },
};

export default UsersApi;
