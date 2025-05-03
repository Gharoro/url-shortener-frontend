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

export interface PaginationData {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface FetchQuery {
  page: number;
  search?: string;
}

export interface FetchUrlsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    urls: IUrl[];
    pagination: PaginationData;
  };
}
export interface FetchUrlStatResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUrl;
}
