import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const useRefreshUrls = () => {
  const queryClient = useQueryClient();

  const refreshUrls = useCallback(() => {
    // Invalidate the urls cache to trigger a refetch
    queryClient.invalidateQueries({ queryKey: ["urls"] });
  }, [queryClient]);

  return refreshUrls;
};
