export type ApiResponse<T = any> = {
  status: number;
  data: T;
}
