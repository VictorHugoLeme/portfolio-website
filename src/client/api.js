import axios from "axios";

const api = axios.create({
  baseURL: "https://1otoj96rr9.execute-api.us-east-1.amazonaws.com/default/get-victor-h-leme-portfolio-data/8ce8f5c3-f384-45bf-a0eb-9878d0a1ffdc",
});

export default api;