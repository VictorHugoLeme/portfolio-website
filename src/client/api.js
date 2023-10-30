import axios from "axios";

const api = axios.create({
  baseURL: "https://lqh2eehpfzqqhpfyvbzf2v4qfi0mfcnz.lambda-url.us-east-1.on.aws/",
});

export default api;