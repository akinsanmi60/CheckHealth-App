// import {
//   BadRequestException,
//   Injectable,
//   InternalServerErrorException,
//   UseInterceptors,
// } from "@nestjs/common";
// import {
//   ForgotPasswordDto,
//   LoginDto,
//   GettingStartedDto,
//   ResetPasswordDto,
//   CreatePasswordDto,
//   GetAllUserDto,
//   CompanyGettingStartedDto,
// } from "./dto/auth.dto";
// import { PrismaService } from "src/prisma/prisma.service";
// import { JwtService } from "@nestjs/jwt";
// import { ConfigService } from "@nestjs/config";
// import { v4 as uuidv4 } from "uuid";
// import * as crypto from "crypto";
// import { PasswordService } from "./password.service";
// import { MailService } from "../mail/mail.service";
// import { ResponseInterceptor } from "../responeFilter/respone.service";
// import { UserGender, UserAccount } from "../../prisma/generated/client";
// import { AuthResolver } from "./authFinder.service";
// import { Users } from "src/types/appUsers.type";

// @UseInterceptors(ResponseInterceptor)
// @Injectable()
// export class AuthService {
//   constructor(
//     private prisma: PrismaService,
//     private readonly jwtService: JwtService,
//     private readonly configService: ConfigService,
//     private readonly passwordService: PasswordService,
//     private readonly mailService: MailService,
//     private readonly authResolver: AuthResolver,
//   ) {}

//   async companyGettingStarted(dto: CompanyGettingStartedDto) {
//     const {
//       email,
//       companyName,
//       companyaddress,
//       ageRange,
//       password,
//       accountType,
//     } = dto;

//     const foundUser =
//       (await this.authResolver.findOneClientUserByEmail(email)) ||
//       (await this.authResolver.findOnePersonalUserByEmail(email));

//     if (foundUser) {
//       throw new BadRequestException("Email is already taken");
//     }

//     const code = crypto.randomInt(100000, 999999).toString();
//     const hashedPassword = await this.passwordService.hashPassword(password);

//     const newCreatedEntity = await this.prisma.users.create({
//       data: {
//         id: uuidv4(),
//         email: dto.email,
//         created_at: new Date(),
//         password: hashedPassword,
//         firstName: dto.firstName,
//         lastName: dto.lastName,
//         status: "pending",
//         verificationCode: code,
//         ethnicity: dto.ethnicity,
//         jobRole: dto.jobRole,
//         maritalStatus: dto.maritalStatus,
//         department: dto.department,
//         accountType: dto.accountType as string as UserAccount,
//         gender: dto.gender as string as UserGender,
//       },
//     });

//     if (newCreatedEntity) {
//       await this.mailService.userSignUp({
//         to: email,
//         data: {
//           name: firstName,
//           code: code.toString(),
//         },
//       });

//       return {
//         message: `Account successfully created. Check email for verification code`,
//         data: {
//           code: code,
//         },
//       };
//     }
//   }

//   async createPassword(dto: CreatePasswordDto) {
//     const { phone_number, password } = dto;

//     try {
//       const foundUser = await this.authResolver.findOneByPhone(phone_number);

//       if (!foundUser) {
//         throw new BadRequestException("Invalid phone number");
//       }

//       const hashedPassword = await this.passwordService.hashPassword(password);

//       const updatedUser = await this.prisma.user.update({
//         where: { phone_number: phone_number },
//         data: {
//           password: hashedPassword,
//         },
//       });

//       if (!updatedUser) {
//         throw new BadRequestException("Something went wrong");
//       }

//       if (updatedUser) {
//         return {
//           message: "Password created successfully",
//         };
//       }
//     } catch (error) {
//       throw new InternalServerErrorException("Internal server error");
//     }
//   }

//   async login(dto: LoginDto) {
//     const { email, password } = dto;

//     const foundUser =
//       (await this.authResolver.findOneClientUserByEmail(email)) ||
//       (await this.authResolver.findOnePersonalUserByEmail(email));

//     if (!foundUser) {
//       throw new BadRequestException("Wrong email credential");
//     }

//     const isMatch = this.passwordService.validatePassword(
//       password,
//       foundUser.password,
//     );

//     if (!isMatch) {
//       throw new BadRequestException("Wrong password inputed");
//     }

//     const payload = {} as PersonalUser | ClientUser;
//     const allToken = this.passwordService.generateTokens(payload);

//     return {
//       message: "You have login successfully",
//       data: {
//         ...allToken,
//       },
//     };
//   }

//   async forgotPassword(dto: ForgotPasswordDto) {
//     const { email } = dto;
//     try {
//       const codeGenerated = crypto.randomInt(100000, 999999);

//       const hashedCode = await this.passwordService.hashPassword(
//         codeGenerated.toString(),
//       );
//       const foundUser =
//         (await this.prisma.personalUser.update({
//           where: { email: email },
//           data: {
//             passwordResetCode: hashedCode,
//           },
//         })) ||
//         (await this.prisma.clientUser.update({
//           where: { email: email },
//           data: {
//             passwordResetCode: hashedCode,
//           },
//         }));

//       if (!foundUser) {
//         throw new BadRequestException("Invalid Email");
//       }

//       await this.mailService.forgotPassword({
//         to: foundUser.email,
//         data: {
//           name: foundUser.firstName,
//           code: codeGenerated.toString(),
//         },
//       });

//       return {
//         message: "Verication code sent",
//         data: {
//           code: codeGenerated,
//         },
//       };
//     } catch (err) {
//       throw new InternalServerErrorException("Internal server error");
//     }
//   }

//   async resetPassword(dto: ResetPasswordDto) {
//     const { code, new_password } = dto;

//     const foundUser = await this.authResolver.findOneByPhone(phone_number);
//     if (!foundUser) {
//       throw new BadRequestException("Invalid code");
//     }

//     if (foundUser) {
//       const isMatch = await this.passwordService.validatePassword(
//         code,
//         foundUser.password_resetCode,
//       );

//       if (!isMatch) {
//         throw new BadRequestException("Verification code is incorrect");
//       }

//       const hashedPassword =
//         await this.passwordService.hashPassword(new_password);

//       await this.prisma.user.update({
//         where: { id: foundUser.id },
//         data: {
//           password: hashedPassword,
//           password_resetCode: null,
//         },
//       });

//       return {
//         message: "Your password has been successfully reset",
//       };
//     }
//   }

//   async activateUser(id: string) {
//     const user_time_created = new Date();

//     const activatedUser = await this.prisma.user.update({
//       where: { id },
//       data: {
//         is_active: true,
//         updated_at: user_time_created,
//       },
//     });

//     if (!activatedUser) {
//       throw new BadRequestException("Failed to  activate  user");
//     }

//     return {
//       message: "User activated successfully",
//       data: {
//         ...activatedUser,
//       },
//     };
//   }

//   async deactivateUser(id: string) {
//     const user_time_created = new Date();

//     const deactivatedUser = await this.prisma.user.update({
//       where: { id },
//       data: {
//         is_active: false,
//         updated_at: user_time_created,
//       },
//     });

//     if (!deactivatedUser) {
//       throw new BadRequestException("Cannot deactivate user");
//     }

//     if (deactivatedUser) {
//       await this.mailService.deactiveVariousUsers({
//         to: deactivatedUser.email,
//         data: {
//           name: deactivatedUser.first_name,
//         },
//       });

//       return {
//         message: "User deactivated successfully",
//         data: {
//           ...deactivatedUser,
//         },
//       };
//     }
//   }

//   async getUserById(id: string) {
//     const user = await this.prisma.user.findUnique({
//       where: { id },
//       select: {
//         id: true,
//         created_at: true,
//         first_name: true,
//         last_login: true,
//         last_name: true,
//         phone_number: true,
//         status: true,
//         email: true,
//         updated_at: true,
//         is_active: true,
//         gender: true,
//         address: true,
//         account_status: true,
//         wallet: {
//           select: {
//             wallet_balance: true,
//             wallet_acc_nos: true,
//           },
//         },
//       },
//     });

//     if (!user) {
//       throw new BadRequestException("User not found");
//     }

//     return {
//       message: "User fetched successfully",
//       data: {
//         ...user,
//       },
//     };
//   }

//   async getAllUsers(dto: GetAllUserDto) {
//     const {
//       created_at,
//       page = 1,
//       limit = 10,
//       id,
//       search,
//       status,
//       phone_number,
//       gender,
//       account_status,
//     } = dto;

//     try {
//       const limitNumber = Number(limit);
//       const skip = ((page as number) - 1) * limitNumber;
//       const offset = limitNumber;

//       const where: { [key: string]: any } = {};

//       if (id) {
//         where.id = { contains: id, mode: "insensitive" };
//       }

//       if (status) {
//         where.status = status;
//       }

//       if (created_at) {
//         where.created_at = {
//           gte: new Date(created_at).toISOString(),
//         };
//       }

//       if (phone_number) {
//         where.phone_number = {
//           contains: phone_number,
//         };
//       }

//       if (gender) {
//         where.gender = gender;
//       }
//       if (account_status) {
//         where.account_status = account_status;
//       }

//       // Exclude users with the "admin" role
//       where.role = {
//         not: {
//           not: "admin",
//         },
//       };

//       if (search) {
//         where.OR = [
//           {
//             first_name: search.toString(),
//           },
//           {
//             last_name: search.toString(),
//           },
//           {
//             phone_number: search.toString(),
//           },
//           {
//             account_status: search.toString(),
//           },
//           { id: { contains: search.toString(), mode: "insensitive" } },
//           // Add more fields as needed
//         ];
//       }

//       const [allUsers, totalCount] = await Promise.all([
//         this.prisma.user.findMany({
//           where,
//           select: {
//             id: true,
//             created_at: true,
//             first_name: true,
//             last_login: true,
//             last_name: true,
//             phone_number: true,
//             status: true,
//             email: true,
//             updated_at: true,
//             is_active: true,
//             gender: true,
//             address: true,
//             account_status: true,
//             wallet: {
//               select: {
//                 wallet_balance: true,
//                 wallet_acc_nos: true,
//               },
//             },
//           },
//           orderBy: { created_at: "desc" },
//           skip,
//           take: offset as number,
//         }),
//         this.prisma.user.count({
//           where,
//         }),
//       ]);

//       const totalPages = Math.ceil(totalCount / limitNumber);

//       const message = allUsers.length
//         ? "Users fetched successfully"
//         : "No Users Found";
//       const success = allUsers?.length ? true : false;

//       return {
//         message,
//         data: {
//           total: success ? totalCount : 0,
//           total_pages: success ? totalPages : 0,
//           current_page: success ? Number(page) : 0,
//           page_size: success ? offset : 0,
//           users_list: allUsers,
//         },
//       };
//     } catch (error) {
//       console.error("Error in get all users:", error);
//       throw error;
//     }
//   }

//   private async createEntity(
//     entityType: UserAccount,
//     dto: any,
//     hashedPassword: string,
//     code: string,
//   ) {
//     const entityModel =
//       entityType === "personalUser"
//         ? this.prisma.clientUser
//         : this.prisma.clientUser;

//     // const entityConfig = entityData[entityType as keyof typeof entityData];

//     if (!entityModel) {
//       throw new Error(`Invalid entity type: ${entityType}`);
//     }

//     const newEntity = await entityModel.create({
//       data: {
//         id: uuidv4(),
//         email: dto.email,
//         created_at: new Date(),
//         password: hashedPassword,
//         firstName: dto.firstName,
//         lastName: dto.lastName,
//         status: "pending",
//         verificationCode: code,
//         ethnicity: dto.ethnicity,
//         jobRole: dto.jobRole,
//         maritalStatus: dto.maritalStatus,
//         department: dto.department,
//         accountType: dto.accountType as string as UserAccount,
//         gender: dto.gender as string as UserGender,
//       },
//     });

//     return newEntity;
//   }
// }
