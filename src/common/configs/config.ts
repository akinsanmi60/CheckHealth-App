import type { Config } from "./config.interface";

const config: Config = {
  nest: {
    port: 3300,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: "Check Health API",
    description: "The Check Health API description",
    version: "1.5",
    path: "/api",
  },
  security: {
    expiresIn: "2m",
    refreshIn: "7d",
    bcryptSaltOrRound: 10,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  },
};

export default (): Config => config;
