import {
  FetchQuery,
  FetchUrlsResponse,
  FetchUrlStatResponse,
  ShortenUrlResponse,
} from "../utils/interface";
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

export const fetchUrlStats = async (
  code: string
): Promise<FetchUrlStatResponse> => {
  try {
    const { data } = await axiosInstance.get<FetchUrlStatResponse>(
      `/url/statistic/${code}`
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const shortenUrl = async (url: string): Promise<ShortenUrlResponse> => {
  try {
    const { data } = await axiosInstance.post<ShortenUrlResponse>(
      "/url/encode",
      {
        url,
      }
    );
    return data;
  } catch (error) {
    return handleApiError(error);
  }
};
