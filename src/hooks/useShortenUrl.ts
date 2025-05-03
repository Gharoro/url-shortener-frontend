import { useMutation, useQueryClient } from "@tanstack/react-query";
import { shortenUrl } from "../api/service";

export const useShortenUrl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (url: string) => shortenUrl(url),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shorten_url"] });
    },
  });
};
