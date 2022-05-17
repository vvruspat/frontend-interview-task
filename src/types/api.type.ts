export type ApiResponse<T = any> = {
  status: number;
  data: T;
};

export type ApiError = {
  status: number;
  data: {
    code: number;
    message: string;
  };
};
