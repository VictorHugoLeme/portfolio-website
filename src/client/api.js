import axios from "axios";

const api = axios.create({
  baseURL: "https://5ok7ksp9eb.execute-api.us-east-1.amazonaws.com/default/portfolio-backend/",
});

export default api;