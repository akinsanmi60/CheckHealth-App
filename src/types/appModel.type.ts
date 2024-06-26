import { Role } from "../roles/role.enum";
import { Prisma } from "../../prisma/generated/client";

export type CompanyUser = Prisma.CompanyUserCreateInput;
export type Users = Prisma.UserCreateInput;
export type CompanyCirle = Prisma.CompanyCirclesCreateInput;
export type UserCircle = Prisma.UserCirclesCreateInput;
export type SystemRole = Role.superAdmin | Role.admin | Role.user;
export type UserStatus = "active" | "inactive" | "pending";
export type IListOfScore = {
  created_at: Date;
  ownerID: string;
  coyCirleID: string;
  userCirleID: string;
  weeklyScore: number;
  dailyScore: number;
  wellbeingScore: number;
}[];
