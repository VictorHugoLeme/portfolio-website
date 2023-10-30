import axios from "axios";

const api = axios.create({
  baseURL: "https://lqh2eehpfzqqhpfyvbzf2v4qfi0mfcnz.lambda-url.us-east-1.on.aws/8ce8f5c3-f384-45bf-a0eb-9878d0a1ffdc",
});

export default api;