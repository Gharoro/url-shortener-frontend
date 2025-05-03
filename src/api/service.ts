import { FetchQuery, FetchUrlsResponse } from "../utils/interface";
import axiosInstance from "./axiosInstance";
import { handleApiError } from "./handleApiError";

export const fetchUrls = async (
  fetchQuery: FetchQuery
): Promise<FetchUrlsResponse> => {
  try {
    const params = new URLSearchParams();

    params.append("page", fetchQuery.page.toString());

    if (fetchQuery.search)
      params.append("search", fetchQuery.search.toString());

    const { data } = await axiosInstance.get<FetchUrlsResponse>(
      `/url/list?${params.toString()}`
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
};
