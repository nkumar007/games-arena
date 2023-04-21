import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const fetchGenres = () =>
  apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data);

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
