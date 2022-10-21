import axios from "axios";
import { API_BASE_URL } from "../appconstants";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const post = (url, data) => {
  return axiosInstance.post(url, data);
};

export const get = (url) => {
  return axiosInstance.get(url);
};
