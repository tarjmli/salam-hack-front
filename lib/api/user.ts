import { Http } from "./http";
import { IUser, IRegister, ILogin } from "@/types/user";

export default class UserApi {
  static async register(user: IUser) {
    const response = await Http.post<{ user: IUser; token: string }, IRegister>(
      "/user/signup",
      user
    );

    return response?.data;
  }

  static async login({ email, password }: ILogin) {
    const response = await Http.post<{ user: IUser; token: string }, ILogin>(
      "/user/login",
      {
        email,
        password,
      }
    );

    return response.data;
  }

  static async verify() {
    const response = await Http.post<IUser, null>("/user/verify", null, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiZXhwIjoxODI4ODEyMjkyfQ.48n0xogIZrpMEQCzniqVBYNIJqglII7arVWaB_zwybw",
      },
      withCredentials: true,
    });
    return response?.data;
  }
  static async logout() {
    const response = await Http.post<IUser, null>("/user/logout", null);

    return response?.data;
  }
}
