import { Prisma } from "./../../prisma/generated/client/index.d";
import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

type CompanyUser = Prisma.CompanyUserCreateInput;
type Users = Prisma.UserCreateInput;

type FiledToUpdate =
  | "password"
  | "email"
  | "phoneNumber"
  | "id"
  | "passwordResetCode"
  | "verificationCode"
  | "lastLogin";

type SystemUsers = "user" | "companyUser";

@Injectable()
export class AuthResolver {
  constructor(private prisma: PrismaService) {}

  async findUserWithField(
    value: string,
    field: FiledToUpdate,
    entity: SystemUsers,
  ): Promise<CompanyUser | Users | null> {
    const whereClause: Record<string, string> = {};
    whereClause[field] = value;

    let foundUser: CompanyUser | Users | null;

    if (entity === "user") {
      foundUser = await this.prisma.user.findUnique({
        where: whereClause as unknown as Prisma.UserWhereUniqueInput,
      });
    } else if (entity === "companyUser") {
      foundUser = await this.prisma.companyUser.findUnique({
        where: whereClause as unknown as Prisma.CompanyUserWhereUniqueInput,
      });
    } else {
      throw new Error("Invalid entity specified");
    }

    return foundUser;
  }

  async findAndUpdateField(
    data: any,
    entity: SystemUsers,
    field: FiledToUpdate,
    value: string,
  ): Promise<CompanyUser | Users | null> {
    const whereClause: Record<string, string> = {};
    whereClause[field] = value;

    let foundUser: CompanyUser | Users | null;

    if (entity === "user") {
      foundUser = (await this.prisma.user.update({
        where: whereClause as unknown as Prisma.UserWhereUniqueInput,
        data: {
          ...data,
        },
      })) as Users;
    } else if (entity === "companyUser") {
      foundUser = (await this.prisma.companyUser.update({
        where: whereClause as unknown as Prisma.CompanyUserWhereUniqueInput,
        data: {
          ...data,
        },
      })) as CompanyUser;
    }

    return foundUser as CompanyUser | Users;
  }
}
