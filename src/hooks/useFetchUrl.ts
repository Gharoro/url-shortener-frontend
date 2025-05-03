import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FetchQuery } from "../utils/interface";
import { fetchUrls } from "../api/service";

export const useFetchUrls = (query: FetchQuery) => {
  return useQuery({
    queryKey: ["urls", query.page, query.search || ""],
    queryFn: () => fetchUrls(query),
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    staleTime: 30000,
    refetchInterval: 60000,
    placeholderData: keepPreviousData,
    select: (result) => result?.data,
  });
};
