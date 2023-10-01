import axios from "axios";
import { BACKEND_URL } from "./constants";

export const nasdaqAxios = axios.create({
  baseURL: "https://api.nasdaq.com/api",
  timeout: 10000,
});

export default axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
});
