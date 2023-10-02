import axios from "axios";
import { BACKEND_URL } from "./constants";

export const assetAxios = axios.create({
  baseURL: "https://api.twelvedata.com/eod",
  timeout: 10000,
});

export default axios.create({
  baseURL: BACKEND_URL,
  timeout: 10000,
});
