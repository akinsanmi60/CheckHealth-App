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
    title: "Empylo API",
    description: "The Empylo API description",
    version: "1.5",
    path: "/api/empylo-docs",
  },
  security: {
    expiresIn: "2m",
    refreshIn: "7d",
    bcryptSaltOrRound: 10,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  },
};

export default (): Config => config;
