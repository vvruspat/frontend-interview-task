import { EFetchingStatus } from './fetching-status.type';

export type StoreState = {
  status: EFetchingStatus;
  error?: Error;
}
