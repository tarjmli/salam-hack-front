import { APIResponse } from "@/types/response.d";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
if (!baseURL) {
  console.warn("🔴 Environment variable NEXT_PUBLIC_API_URL is not set");
}

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

type HTTPRequestConfig = AxiosRequestConfig;

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.get<APIResponse<T>>(url, config);
    },
    delete: <T>(url: string, config: HTTPRequestConfig = {}) => {
      return axios.delete<APIResponse<T>>(url, config);
    },
    put: <T, P>(url: string, body: P, config: HTTPRequestConfig = {}) => {
      return axios.put<APIResponse<T>>(url, body, config);
    },
    patch: <T, P>(url: string, body: P, config: HTTPRequestConfig = {}) => {
      return axios.patch<APIResponse<T>>(url, body, config);
    },
    post: <T, P>(url: string, body: P, config: HTTPRequestConfig = {}) => {
      return axios.post<APIResponse<T>>(url, body, config);
    },
  };
};

export const Http = api(instance);
