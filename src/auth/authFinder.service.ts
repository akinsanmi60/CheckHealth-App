import { Prisma } from "./../../prisma/generated/client/index.d";
import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

type CompanyUser = Prisma.CompanyUserCreateInput;
type Users = Prisma.UserCreateInput;

type FiledToUpdate =
  | "password"
  | "email"
  | "phoneNumber"
  | "firstName"
  | "id"
  | "verificationCode";

@Injectable()
export class AuthResolver {
  constructor(private prisma: PrismaService) {}

  // findOneClientUserById(id: string): Promise<Users | null> {
  //   return this.prisma.companyUser.findUnique({ where: { id } });
  // }

  // findOneClientUserByEmail(email: string): Promise<ClientUser | null> {
  //   return this.prisma.clientUser.findUnique({ where: { email } });
  // }

  // findOneClientUserByPhone(phoneNumber: string): Promise<ClientUser | null> {
  //   return this.prisma.clientUser.findUnique({ where: { phoneNumber } });
  // }
  // findOnePersonalUserById(id: string): Promise<PersonalUser | null> {
  //   return this.prisma.personalUser.findUnique({ where: { id } });
  // }

  // findOnePersonalUserByEmail(email: string): Promise<PersonalUser | null> {
  //   return this.prisma.personalUser.findUnique({ where: { email } });
  // }

  // findOnePersonalUserByPhone(
  //   phoneNumber: string,
  // ): Promise<PersonalUser | null> {
  //   return this.prisma.personalUser.findUnique({ where: { phoneNumber } });
  // }

  async findUserWithField(
    value: string,
    field:
      | "id"
      | "email"
      | "phone_number"
      | "password_resetCode"
      | "verificationCode",
    entity: "user" | "companyUser",
  ): Promise<CompanyUser | Users | null> {
    const whereClause: Record<string, string> = {};
    whereClause[field] = value;

    // const foundUser = await this.prisma[entity].findUnique({
    //   where: whereClause,
    // })

    // if (foundUser) {
    //   return foundUser as CompanyUser | Users;;
    // }

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
    entity: "user" | "companyUser",
    field: FiledToUpdate,
    value: string,
  ): Promise<CompanyUser | Users | null> {
    const whereClause: Record<string, string> = {};
    whereClause[field] = value;

    // const foundUser = await this.prisma[entity].update({
    //   where: whereClause,
    //   data: {
    //     ...data,
    //   },
    // });
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
