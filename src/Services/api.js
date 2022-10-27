import axios from "axios";

const url = {
  baseUrl: "https://628650a8f0e8f0bb7c1434a7.mockapi.io",
  ZingNew: "/zingNew",
  Book: "/Book",
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json;charset=UFT-8",
    Accept: "application/json",
  },
});

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
};

export default api;
