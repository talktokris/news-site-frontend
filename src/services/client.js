import { create } from "apisauce";
import config from "../config/config.json";
const tokenKey = config.tokenKey;
const apiClient = create({
  // baseURL: "http://192.168.254.4:9000/api",
  baseURL: config.apiUrl,
  headers: { Accept: "application/json" },
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = localStorage.getItem(tokenKey);

  if (!authToken) return;

  //request.headers["access_token"] = authToken;

  request.headers["Authorization"] = "Bearer " + authToken;
});

export default apiClient;
