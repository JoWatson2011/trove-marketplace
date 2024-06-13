import axios from "axios";

const instance = axios.create({
  baseURL: "https://nc-marketplace-sem-1.onrender.com",
});

export const getRequest = (endpoint) => {
  return instance.get(endpoint).then(({ data }) => {
    return data;
  });
};
