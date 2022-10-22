import { get } from ".";
import { API_URLS, NY_TIMES_API_KEY } from "../appconstants";

export const getTopNews = async (section) => {
  return await get(
    `${API_URLS.TOP_NEWS.replace("section", section)}${NY_TIMES_API_KEY}`
  );
};
