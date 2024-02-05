import { NextFunction, Request, Response } from "express";
import { allowedOrigins } from "./allowedOrigins";

export const credentials = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { origin } = req.headers;
  if (allowedOrigins.includes(origin as string)) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", origin as string);
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS",
    );
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, Content-Type, Accept, Origin, multipart/form-data, application/json",
    );
  }

  next();
};
