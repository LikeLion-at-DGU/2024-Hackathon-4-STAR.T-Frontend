import { instance } from "./instance";

export const SearchResult = async () => {
  return await instance.get(`/api/search?data=${data}`);
};
