import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import GithubApi from "../api/github";
import { ICreateRepo } from "@/types/github";

export function useCreateRepoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createRepo"],
    mutationFn: (repo: ICreateRepo) => GithubApi.createRepo(repo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getRepos"] });
    },
  });
}
export function useGetReposQuery() {
  return useQuery({
    queryKey: ["getRepos"],
    queryFn: () => GithubApi.fetchRepos(),
  });
}

export function useTarjimMutation() {
  return useMutation({
    mutationKey: ["tarjim"],
    mutationFn: (id: number) => GithubApi.tarjim(id),
  });
}
