import { get } from ".";
import { API_URLS, NY_TIMES_API_KEY } from "../appconstants";

export const getTopNews = async () => {
  return await get(`${API_URLS.TOP_NEWS}${NY_TIMES_API_KEY}`);
};
