import { Injectable } from "@nestjs/common";
import { User } from "../../prisma/generated/client";

import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthResolver {
  constructor(private prisma: PrismaService) {}

  findOneUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findOneByPhone(phone_number: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { phone_number } });
  }
}
 