import { Status } from "./enum";
import { IUrl } from "./interface";

export const sampleData: IUrl[] = [
  {
    id: "42f5a183-ea42-4ca1-858a-4d3e6af05b70",
    shortCode: "Abc123",
    originalUrl: "https://example.com",
    createdAt: "2025-05-03",
    visitCount: 10,
    searchCount: 30,
    status: Status.ACTIVE,
  },
];
