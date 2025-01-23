import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://social-my-sql-api.vercel.app/api/",
  withCredentials: true,
});
