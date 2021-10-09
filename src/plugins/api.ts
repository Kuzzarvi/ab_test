import axios from "axios";

const api = axios.create({
  baseURL: "https://randomfox.ca",
});

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
