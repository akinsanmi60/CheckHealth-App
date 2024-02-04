// cors.middleware.ts

import { allowedOrigins } from "./allowedOrigins";

export const credentials = () => {
  return {
    // credentials: true,
    origin: allowedOrigins,
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Origin",
      "multipart/form-data",
      "application/json",
    ],
  };
};
