import client from "./client";
import config from "../config/config.json";
const tokenKey = config.tokenKey;
const tokenValue = localStorage.getItem(tokenKey);

export async function searchNews(string) {
  try {
    // console.log(string);
    const { data: result, ok } = await client.get("/news-search/" + string);

    if (ok) return result;
  } catch (error) {
    return [];
  }
}

export async function getNews() {
  try {
    if (tokenValue) {
      const { data: result, ok } = await client.post("/user-setting-news");
      console.log("User");
      if (ok) return result;
    } else {
      const { data: result, ok } = await client.get("/home-page");
      console.log("public");
      if (ok) return result;
    }
  } catch (error) {
    return null;
  }
}
export async function getUserNews() {
  try {
    const { data: result, ok } = await client.post("/user-setting-news");
    console.log(result);
    if (ok) return result;
  } catch (error) {
    return null;
  }
}

export default {
  getNews,
  searchNews,
  getUserNews,
};
