import api from "./api";
export const getZingNew = () => api.get(api.url.ZingNew);
export const getDetailContent = (id) => api.get(`${api.url.ZingNew}/${id}`);
export const creatContent = (payload) => api.post(api.url.ZingNew, payload);
export const updateContent = (params) =>
  api.put(`${api.url.ZingNew}/${params.id}`, params);
export const deleteContent = (id) => api.delete(`${api.url.ZingNew}/${id}`);

// book api services
export const getBook = () => api.get(api.url.Book);
