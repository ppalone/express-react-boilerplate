import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/" : "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});
