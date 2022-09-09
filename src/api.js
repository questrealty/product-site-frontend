import axios from "axios";
import router from "./router";

const api = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_URL,
});

api.interceptors.response.use(null, (error) => {
  let path;
  switch (error.response.status) {
    case 401:
      path = "/unauthorised";
      break;
    case 403:
      path = "/forbidden";
      break;
    case 404:
      path = "/not-found";
      break;
  }
  router.push(path);
  return Promise.reject(error);
});

export default api;
