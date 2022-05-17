import { ApiError } from "./api.type";
import { EFetchingStatus } from "./fetching-status.type";

export type StoreState = {
  status: EFetchingStatus;
  error?: ApiError;
};
