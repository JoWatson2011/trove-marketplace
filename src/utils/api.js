import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getRequest = (endpoint, params = {}) => {
  return instance
    .get(endpoint, params)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));;
};

export const postRequest = (endpoint, body) => {
  return instance.post(endpoint, body).then(({ data }) => {
    return data;
  });
};
