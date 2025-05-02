import { Status } from "./enum";

export interface IUrl {
  id: string;
  shortCode: string;
  originalUrl: string;
  createdAt: string;
  visitCount: number;
  searchCount: number;
  status: Status;
}
