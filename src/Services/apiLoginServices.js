import request from "../utils/request";
const BASE_URL = "https://api-uat-anzen-tms.azurewebsites.net/";

export const loginRequestServices = (payload) => {
  return request(`${BASE_URL}api/Account/login`, {
    method: "post",
    data: payload,
  });
};
