import { ApiResponse } from "../types/api.type";
import { TFeedbackItem } from "../types/feedback-item.type";
import { TLoginJWT } from "../types/login-jwt.type";
import { TTheme } from "../types/theme.type";

const apiUrl = "https://frontend-task.production.cloud.chattermill.xyz";

const getURIParams = (params: any): string => {
  return Object.keys(params).reduce(
    (prev, cur) => `${prev + (prev ? "&" : "")}${cur}=${params[cur]}`,
    "",
  );
};

type FetchOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  mode: "cors";
  cache: "no-cache";
  credentials: "same-origin";
  headers: Record<string, string>;
  redirect: "follow";
  referrerPolicy: "no-referrer";
  body?: string;
};

let jwtToken: string | null = localStorage.getItem("jwt")
  ? (JSON.parse(localStorage.getItem("jwt") || "") as TLoginJWT)?.token ?? null
  : null;

export const setJWTToken = (token: string | null) => {
  jwtToken = token;
};

const http = async <T = any>(
  apiURL = "",
  data = {},
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  headers?: Record<string, string>,
): Promise<ApiResponse<T>> => {
  let url = apiURL;

  const options: FetchOptions = {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  if (jwtToken) {
    options.headers["Authorization"] = `Bearer ${jwtToken}`;
  }

  if (method !== "GET") {
    options.body = getURIParams(data);
  } else {
    url += `?${getURIParams(data)}`;
  }

  const response = await fetch(url, options);

  const responseData = await response.json();

  if (response.status < 400) {
    return { status: response.status, data: responseData }; // parses JSON response into native JavaScript objects
  } else {
    throw { status: response.status, data: responseData };
  }
};
// In swagger there is no data in type, but in reality it exists
export const getReviews = (
  limit: number = 20,
  offset: number = 0,
  theme_id?: number,
): Promise<ApiResponse<{ data: TFeedbackItem[] }>> => {
  const params: Record<string, string | number> = {
    limit,
    offset,
  };

  if (theme_id) {
    params["theme_id"] = theme_id;
  }

  return http(`${apiUrl}/api/reviews`, params);
};

// In swagger there is no data in type, but in reality it exists
export const getThemes = (
  limit: number = 100,
  offset: number = 0,
): Promise<ApiResponse<{ data: TTheme[] }>> => {
  const params: Record<string, string | number> = {
    limit,
    offset,
  };

  return http(`${apiUrl}/api/themes`, params);
};

export const auth = (
  username: string,
  password: string,
): Promise<ApiResponse<TLoginJWT>> => {
  return http<TLoginJWT>(`${apiUrl}/login`, { username, password }, "POST");
};
