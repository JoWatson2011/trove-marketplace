import axios from "axios";

const instance = axios.create({
  baseURL: "https://nc-marketplace-sem-1.onrender.com",
});

export const getRequest = (endpoint, params = {}) => {
  return instance.get(endpoint, params).then(({ data }) => {
    return data;
  });
};

export const postRequest = (endpoint, body) => {
  return instance.post(endpoint, body).then(({ data }) => {
    return data;
  });
};
