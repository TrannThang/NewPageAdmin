import axios from "axios";

const request = axios.create({
  timeout: 60000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  console.log(document.cookie);
  let ca = decodedCookie.split(";");
  console.log(ca);
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const handleError = (error) => {
  const { response = {} } = error;
  const { data, status, statusText } = response;
  return { data, status, statusText };
};

request.interceptors.request.use((config) => {
  const token = getCookie("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

request.interceptors.request.use((response) => {
  return response;
}, handleError);

export default request;
