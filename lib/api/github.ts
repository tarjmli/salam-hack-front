import { ICreateRepo, IRepo } from "@/types/github";
import { Http } from "./http";

export default class GithubApi {
  static async fetchRepos() {
    const response = await Http.get<IRepo[]>("/project", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiZXhwIjoxODI4ODEyMjkyfQ.48n0xogIZrpMEQCzniqVBYNIJqglII7arVWaB_zwybw",
      },
    });

    return response?.data;
  }

  static async createRepo(repo: ICreateRepo) {
    const response = await Http.post<IRepo[], ICreateRepo>("/project", repo, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiZXhwIjoxODI4ODEyMjkyfQ.48n0xogIZrpMEQCzniqVBYNIJqglII7arVWaB_zwybw",
      },
    });

    return response?.data;
  }

  static async tarjim() {
    const response = await Http.get("project/trjim/2", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiZXhwIjoxODI4ODEyMjkyfQ.48n0xogIZrpMEQCzniqVBYNIJqglII7arVWaB_zwybw",
      },
    });

    return response?.data;
  }
}
