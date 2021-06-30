import axios from "axios";

export const api = axios.create({
  //baseURL: 'https://2xqhncvjih.execute-api.sa-east-1.amazonaws.com/dev'
  baseURL: "http://localhost:8080/",
});

export const search = async (url, setData) => {
  const response = await api.get(url);
  setData(response.data);
};

export const searchBacklog = async (setData) => {
  const response = await api.get("/register", { params: { backlog: true } });
  setData(response.data);
};
