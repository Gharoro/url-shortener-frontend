import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FetchQuery } from "../utils/interface";
import { fetchUrls } from "../api/service";

export const useFetchUrls = (query: FetchQuery) => {
  return useQuery({
    queryKey: ["urls", query.page, query.search || ""],
    queryFn: () => fetchUrls(query),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    placeholderData: keepPreviousData,
    select: (result) => result?.data,
  });
};
