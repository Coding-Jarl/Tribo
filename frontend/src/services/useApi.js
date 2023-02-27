import axios from "axios";

let apiSingleton = null;

function useApi() {
  if (!apiSingleton) {
    apiSingleton = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
    });
  }
  return apiSingleton;
}

export default useApi;

// api.get("/boardgames").then(()=>{})
// Design Pattern: Singleton
/* Need: Je veux une instance d'axios

1er appel: 
apiSingleton=null; <- conserver
instancier axios -> apiSingleton
return apiSingleton

2nd appel:
return apiSingleton

 */
