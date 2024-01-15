import { api } from "./axiosConfig";

export const get = (URL) => {
  return api.get(URL);
};

export const post = (URL) => {
  return api.post(URL);
};

export const put = (URL) => {
  return api.put(URL);
};

export const del = (URL) => {
  return api.delete(URL);
};
