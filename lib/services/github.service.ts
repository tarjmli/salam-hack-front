import { useMutation, useQuery } from "@tanstack/react-query";
import GithubApi from "../api/github";
import { ICreateRepo } from "@/types/github";

export function useCreateRepoMutation() {
  return useMutation({
    mutationKey: ["createRepo"],
    mutationFn: (repo: ICreateRepo) => GithubApi.createRepo(repo),
  });
}
export function useTarjimQuery() {
  return useQuery({
    queryKey: ["tarjim"],
    queryFn: () => GithubApi.tarjim(),
  });
}
