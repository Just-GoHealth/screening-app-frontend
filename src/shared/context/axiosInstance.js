import axios from 'axios'
import { BASE_URL } from "../endpoints/endpoints.js";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "content-type": "application/json",
    Accept: "application/json",
  },
})