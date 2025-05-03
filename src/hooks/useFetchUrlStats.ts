import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchUrlStats } from "../api/service";

export const useFetchUrlStats = (code: string) => {
  return useQuery({
    queryKey: ["url_statistics", code],
    queryFn: () => fetchUrlStats(code),
    enabled: !!code,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: keepPreviousData,
    select: (result) => (result.success ? result.data : null),
  });
};
