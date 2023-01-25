import axios from "axios";

function useApi() {
  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });

  return api;
}

export default useApi;

// api.get("/boardgames").then(()=>{})
