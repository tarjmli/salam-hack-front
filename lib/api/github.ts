import { IRepo } from "@/types/github";
import { Http } from "./http";

export default class GithubApi {
  static async fetchRepos() {
    const response = await Http.get<IRepo[]>("/api/github/repos");

    return response?.data;
  }
}
