import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();

  console.log("Seeding...");

  const superAdmin = await prisma.empyloUser.create({
    data: {
      id: "89c19bbb-02c0-4df3-b646-62d909cfdda5",
      email: "bart@simpson.com",
      firstName: "Bart",
      lastName: "Simpson",
      role: "admin",
      phoneNumber: "",
      password: "$2a$10$DqUbG8HlE.j8KlL75DKj3.JhQMkC4JXcDldq6Y67ufghrsvHyp5SK",
      gender: "male",
      isEmailVerified: true,
      isActive: true,
      status: "active",
      empyloID: "89c19bbb-02c0-4df3-b646-62d909cfdda5",
      permissions: [
        "createAssessment",
        "readAssessment",
        "updateAssessment",
        "deleteAssessment",
        "createUser",
        "readUser",
        "updateUser",
        "deleteUser",
        "createCompany",
        "readCompany",
        "updateCompany",
        "deleteCompany",
        "createAdmin",
        "readAdmin",
        "updateAdmin",
        "deleteAdmin",
        "createUserCircle",
        "readUserCircle",
        "updateUserCircle",
        "deleteUserCircle",
        "createCompanyCircle",
        "readCompanyCircle",
        "updateCompanyCircle",
        "deleteCompanyCircle",
      ],
    },
  });

  console.log({ superAdmin });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
