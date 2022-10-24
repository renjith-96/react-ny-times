import { get } from ".";
import { API_URLS, NY_TIMES_API_KEY } from "../appconstants";

export const getTopNews = async (section) => {
  return await get(
    `${API_URLS.TOP_NEWS.replace("section", section)}${NY_TIMES_API_KEY}`
  );
};

export const getArticles = async (query, pageNo = 1) => {
  return await get(
    `${API_URLS.SEARCH}?q=${query}&page=${pageNo}&api-key=${NY_TIMES_API_KEY}`
  );
};
