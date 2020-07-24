import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    APIKey: process.env.API_KEY,
  },
});

export default instance;
