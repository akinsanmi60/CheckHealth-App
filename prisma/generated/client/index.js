
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CompanyUserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  created_at: 'created_at',
  companyName: 'companyName',
  phoneNumber: 'phoneNumber',
  password: 'password',
  passwordResetCode: 'passwordResetCode',
  lastLogin: 'lastLogin',
  passportImg: 'passportImg',
  isActive: 'isActive',
  updated_at: 'updated_at',
  isEmailVerified: 'isEmailVerified',
  verificationCode: 'verificationCode',
  industry: 'industry',
  website: 'website',
  companyDescription: 'companyDescription',
  status: 'status',
  address: 'address',
  addressCity: 'addressCity',
  addressState: 'addressState',
  emailNotification: 'emailNotification',
  campaignNtification: 'campaignNtification',
  termsConditions: 'termsConditions'
};

exports.Prisma.CompanyCirclesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  coyCircleName: 'coyCircleName',
  coyCircleDescription: 'coyCircleDescription',
  coyCircleShareLink: 'coyCircleShareLink',
  wellbeingScore: 'wellbeingScore',
  activityLevel: 'activityLevel',
  companyUserId: 'companyUserId',
  coyCircleStatus: 'coyCircleStatus',
  coyCircleNos: 'coyCircleNos',
  circleImg: 'circleImg',
  userAttachedID: 'userAttachedID'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  created_at: 'created_at',
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
  ageRange: 'ageRange',
  ethnicity: 'ethnicity',
  gender: 'gender',
  maritalStatus: 'maritalStatus',
  disability: 'disability',
  DOB: 'DOB',
  accountType: 'accountType',
  department: 'department',
  jobRole: 'jobRole',
  password: 'password',
  role: 'role',
  passwordResetCode: 'passwordResetCode',
  createdBy: 'createdBy',
  lastLogin: 'lastLogin',
  passportImg: 'passportImg',
  isActive: 'isActive',
  updated_at: 'updated_at',
  isEmailVerified: 'isEmailVerified',
  verificationCode: 'verificationCode',
  status: 'status',
  address: 'address',
  bio: 'bio',
  emailNotification: 'emailNotification',
  campaignNtification: 'campaignNtification',
  termsConditions: 'termsConditions',
  addedBy: 'addedBy',
  userCircleId: 'userCircleId',
  coyCircleAttachedTo: 'coyCircleAttachedTo'
};

exports.Prisma.UserCirclesScalarFieldEnum = {
  id: 'id',
  circleImg: 'circleImg',
  created_at: 'created_at',
  updated_at: 'updated_at',
  userCircleName: 'userCircleName',
  userCircleDescription: 'userCircleDescription',
  userCircleShareLink: 'userCircleShareLink',
  wellbeingScore: 'wellbeingScore',
  activityLevel: 'activityLevel',
  userId: 'userId',
  createdBy: 'createdBy',
  userCircleStatus: 'userCircleStatus',
  userCircleNos: 'userCircleNos'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserStatus = exports.$Enums.UserStatus = {
  active: 'active',
  pending: 'pending',
  inactive: 'inactive'
};

exports.ActivityLevel = exports.$Enums.ActivityLevel = {
  high: 'high',
  moderate: 'moderate',
  excellent: 'excellent',
  moderatelyHigh: 'moderatelyHigh',
  low: 'low'
};

exports.UserGender = exports.$Enums.UserGender = {
  male: 'male',
  female: 'female'
};

exports.UserAccount = exports.$Enums.UserAccount = {
  personalUser: 'personalUser',
  clientUser: 'clientUser'
};

exports.SystemRole = exports.$Enums.SystemRole = {
  superAdmin: 'superAdmin',
  admin: 'admin',
  user: 'user'
};

exports.Prisma.ModelName = {
  CompanyUser: 'CompanyUser',
  CompanyCircles: 'CompanyCircles',
  User: 'User',
  UserCircles: 'UserCircles'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Akinsanmi Akintunde\\Desktop\\Emplo\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKICBkaXJlY3RVcmwgPSBlbnYoIkRJUkVDVF9VUkwiKQp9Cgptb2RlbCBDb21wYW55VXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBlbWFpbCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQHVuaXF1ZQogIGNyZWF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGVmYXVsdChub3coKSkKICBjb21wYW55TmFtZSAgICAgICAgIFN0cmluZz8KICBwaG9uZU51bWJlciAgICAgICAgIFN0cmluZz8KICBwYXNzd29yZCAgICAgICAgICAgIFN0cmluZz8KICBwYXNzd29yZFJlc2V0Q29kZSAgIFN0cmluZz8gICAgICAgICAgQHVuaXF1ZQogIGxhc3RMb2dpbiAgICAgICAgICAgRGF0ZVRpbWU/CiAgcGFzc3BvcnRJbWcgICAgICAgICBTdHJpbmc/CiAgaXNBY3RpdmUgICAgICAgICAgICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHVwZGF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAdXBkYXRlZEF0CiAgaXNFbWFpbFZlcmlmaWVkICAgICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHZlcmlmaWNhdGlvbkNvZGUgICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlCiAgaW5kdXN0cnkgICAgICAgICAgICBTdHJpbmc/CiAgd2Vic2l0ZSAgICAgICAgICAgICBTdHJpbmc/CiAgY29tcGFueURlc2NyaXB0aW9uICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICBVc2VyU3RhdHVzICAgICAgIEBkZWZhdWx0KGluYWN0aXZlKQogIGFkZHJlc3MgICAgICAgICAgICAgU3RyaW5nPwogIGFkZHJlc3NDaXR5ICAgICAgICAgU3RyaW5nPwogIGFkZHJlc3NTdGF0ZSAgICAgICAgU3RyaW5nPwogIGVtYWlsTm90aWZpY2F0aW9uICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBjYW1wYWlnbk50aWZpY2F0aW9uIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdGVybXNDb25kaXRpb25zICAgICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIG1lbWJlcnNMaXN0ICAgICAgICAgVXNlcltdCiAgY29tcGFueV9jaXJjbGUgICAgICBDb21wYW55Q2lyY2xlc1tdIEByZWxhdGlvbigiY2lyY2xlc19jb21wYW55X3VzZXJfZmtleSIpCn0KCm1vZGVsIENvbXBhbnlDaXJjbGVzIHsKICBpZCAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBjcmVhdGVkX2F0ICAgICAgICAgICBEYXRlVGltZT8gICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgQHVwZGF0ZWRBdAogIGNveUNpcmNsZU5hbWUgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIGNveUNpcmNsZURlc2NyaXB0aW9uIFN0cmluZz8gICAgICAgQGRiLlZhckNoYXIoMTAwMCkKICBjb3lDaXJjbGVTaGFyZUxpbmsgICBTdHJpbmc/CiAgd2VsbGJlaW5nU2NvcmUgICAgICAgU3RyaW5nPwogIGFjdGl2aXR5TGV2ZWwgICAgICAgIEFjdGl2aXR5TGV2ZWwgQGRlZmF1bHQobG93KQogIGNvbXBhbnlVc2VyICAgICAgICAgIENvbXBhbnlVc2VyPyAgQHJlbGF0aW9uKCJjaXJjbGVzX2NvbXBhbnlfdXNlcl9ma2V5IiwgZmllbGRzOiBbY29tcGFueVVzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY29tcGFueVVzZXJJZCAgICAgICAgU3RyaW5nPwogIGNveUNpcmNsZVN0YXR1cyAgICAgIFVzZXJTdGF0dXMgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgY295Q2lyY2xlTm9zICAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgbWVtYmVyTGlzdCAgICAgICAgICAgVXNlcltdICAgICAgICBAcmVsYXRpb24oImNveUNpcmNsZUluIikKICBjaXJjbGVJbWcgICAgICAgICAgICBTdHJpbmc/CiAgdXNlciAgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgICBAcmVsYXRpb24oInVzZXJDb3lDaXJjbGVMaXN0IiwgZmllbGRzOiBbdXNlckF0dGFjaGVkSURdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJBdHRhY2hlZElEICAgICAgIFN0cmluZz8KfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBlbWFpbCAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQHVuaXF1ZQogIGNyZWF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGVmYXVsdChub3coKSkKICBmaXJzdE5hbWUgICAgICAgICAgIFN0cmluZz8KICBsYXN0TmFtZSAgICAgICAgICAgIFN0cmluZz8KICBwaG9uZU51bWJlciAgICAgICAgIFN0cmluZz8gICAgICAgICAgQHVuaXF1ZQogIGFnZVJhbmdlICAgICAgICAgICAgU3RyaW5nPwogIGV0aG5pY2l0eSAgICAgICAgICAgU3RyaW5nPwogIGdlbmRlciAgICAgICAgICAgICAgVXNlckdlbmRlcj8KICBtYXJpdGFsU3RhdHVzICAgICAgIFN0cmluZz8KICBkaXNhYmlsaXR5ICAgICAgICAgIFN0cmluZz8KICBET0IgICAgICAgICAgICAgICAgIFN0cmluZz8KICBhY2NvdW50VHlwZSAgICAgICAgIFVzZXJBY2NvdW50ICAgICAgQGRlZmF1bHQocGVyc29uYWxVc2VyKQogIGRlcGFydG1lbnQgICAgICAgICAgU3RyaW5nPwogIGpvYlJvbGUgICAgICAgICAgICAgU3RyaW5nPwogIHBhc3N3b3JkICAgICAgICAgICAgU3RyaW5nPwogIHJvbGUgICAgICAgICAgICAgICAgU3lzdGVtUm9sZSAgICAgICBAZGVmYXVsdCh1c2VyKQogIHBhc3N3b3JkUmVzZXRDb2RlICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlCiAgY29tcGFueVVzZXIgICAgICAgICBDb21wYW55VXNlcj8gICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkQnldLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRCeSAgICAgICAgICAgU3RyaW5nPwogIGxhc3RMb2dpbiAgICAgICAgICAgRGF0ZVRpbWU/CiAgcGFzc3BvcnRJbWcgICAgICAgICBTdHJpbmc/CiAgaXNBY3RpdmUgICAgICAgICAgICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHVwZGF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAdXBkYXRlZEF0CiAgaXNFbWFpbFZlcmlmaWVkICAgICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHZlcmlmaWNhdGlvbkNvZGUgICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlCiAgc3RhdHVzICAgICAgICAgICAgICBVc2VyU3RhdHVzICAgICAgIEBkZWZhdWx0KGluYWN0aXZlKQogIGFkZHJlc3MgICAgICAgICAgICAgU3RyaW5nPwogIGJpbyAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGVtYWlsTm90aWZpY2F0aW9uICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBjYW1wYWlnbk50aWZpY2F0aW9uIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdGVybXNDb25kaXRpb25zICAgICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGFkZGVkQnkgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlCiAgdXNlckNpcmNsZUluICAgICAgICBVc2VyQ2lyY2xlcz8gICAgIEByZWxhdGlvbigibWVtYmVySW5DcmlyY2xlIiwgZmllbGRzOiBbdXNlckNpcmNsZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VyQ2lyY2xlSWQgICAgICAgIFN0cmluZz8KICBjb21wYW55Q2lybGUgICAgICAgIENvbXBhbnlDaXJjbGVzPyAgQHJlbGF0aW9uKCJjb3lDaXJjbGVJbiIsIGZpZWxkczogW2NveUNpcmNsZUF0dGFjaGVkVG9dLCByZWZlcmVuY2VzOiBbaWRdKQogIGNveUNpcmNsZUF0dGFjaGVkVG8gU3RyaW5nPwogIHVzZXJDaXJjbGVzICAgICAgICAgVXNlckNpcmNsZXNbXSAgICBAcmVsYXRpb24oInVzZXJDaXJjbGVzIikKICBjb3lDaXJjbGVzTGlzdCAgICAgIENvbXBhbnlDaXJjbGVzW10gQHJlbGF0aW9uKCJ1c2VyQ295Q2lyY2xlTGlzdCIpCn0KCm1vZGVsIFVzZXJDaXJjbGVzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgY2lyY2xlSW1nICAgICAgICAgICAgIFN0cmluZz8KICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICBAdXBkYXRlZEF0CiAgdXNlckNpcmNsZU5hbWUgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHVzZXJDaXJjbGVEZXNjcmlwdGlvbiBTdHJpbmc/ICAgICAgIEBkYi5WYXJDaGFyKDEwMDApCiAgdXNlckNpcmNsZVNoYXJlTGluayAgIFN0cmluZz8KICB3ZWxsYmVpbmdTY29yZSAgICAgICAgU3RyaW5nPwogIGFjdGl2aXR5TGV2ZWwgICAgICAgICBBY3Rpdml0eUxldmVsIEBkZWZhdWx0KGxvdykKICB1c2VyICAgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgICBAcmVsYXRpb24oInVzZXJDaXJjbGVzIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRCeSAgICAgICAgICAgICBTdHJpbmc/CiAgdXNlckNpcmNsZVN0YXR1cyAgICAgIFVzZXJTdGF0dXMgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgdXNlckNpcmNsZU5vcyAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIG1lbWJlckxpc3QgICAgICAgICAgICBVc2VyW10gICAgICAgIEByZWxhdGlvbigibWVtYmVySW5DcmlyY2xlIikKfQoKZW51bSBTeXN0ZW1Sb2xlIHsKICBzdXBlckFkbWluCiAgYWRtaW4KICB1c2VyCn0KCmVudW0gVXNlckdlbmRlciB7CiAgbWFsZQogIGZlbWFsZQp9CgplbnVtIFVzZXJTdGF0dXMgewogIGFjdGl2ZQogIHBlbmRpbmcKICBpbmFjdGl2ZQp9CgplbnVtIEFjY291bnRTdGF0dXMgewogIHZlcmlmaWVkCiAgdW52ZXJpZmllZAp9CgplbnVtIENpcmNsZVN0YXR1cyB7CiAgb25nb2luZwogIGNvbXBsZXRlZAogIHVuZW5yb2xsZWQKfQoKZW51bSBBY3Rpdml0eUxldmVsIHsKICBoaWdoCiAgbW9kZXJhdGUKICBleGNlbGxlbnQKICBtb2RlcmF0ZWx5SGlnaAogIGxvdwp9CgplbnVtIFVzZXJBY2NvdW50IHsKICBwZXJzb25hbFVzZXIKICBjbGllbnRVc2VyCn0KCmVudW0gTWFpdGFsU3RhdHVzIHsKICBtYXJyaWVkCiAgc2luZ2xlCiAgZGl2b3JjZQp9Cg==",
  "inlineSchemaHash": "1827015058a56d379b4ae10e5b30faa6902791b64d3576c0e82b582ce8e8f29e"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"CompanyUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressCity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membersList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_circle\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"circles_company_user_fkey\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"coyCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ActivityLevel\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"circles_company_user_fkey\",\"relationFromFields\":[\"companyUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"coyCircleIn\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userCoyCircleList\",\"relationFromFields\":[\"userAttachedID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAttachedID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageRange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ethnicity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maritalStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disability\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserAccount\",\"default\":\"personalUser\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobRole\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[\"createdBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleIn\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[\"userCircleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyCirle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"coyCircleIn\",\"relationFromFields\":[\"coyCircleAttachedTo\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleAttachedTo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"userCircles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCirclesList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"userCoyCircleList\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ActivityLevel\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userCircles\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"SystemRole\":{\"values\":[{\"name\":\"superAdmin\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"user\",\"dbName\":null}],\"dbName\":null},\"UserGender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"pending\",\"dbName\":null},{\"name\":\"inactive\",\"dbName\":null}],\"dbName\":null},\"AccountStatus\":{\"values\":[{\"name\":\"verified\",\"dbName\":null},{\"name\":\"unverified\",\"dbName\":null}],\"dbName\":null},\"CircleStatus\":{\"values\":[{\"name\":\"ongoing\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"unenrolled\",\"dbName\":null}],\"dbName\":null},\"ActivityLevel\":{\"values\":[{\"name\":\"high\",\"dbName\":null},{\"name\":\"moderate\",\"dbName\":null},{\"name\":\"excellent\",\"dbName\":null},{\"name\":\"moderatelyHigh\",\"dbName\":null},{\"name\":\"low\",\"dbName\":null}],\"dbName\":null},\"UserAccount\":{\"values\":[{\"name\":\"personalUser\",\"dbName\":null},{\"name\":\"clientUser\",\"dbName\":null}],\"dbName\":null},\"MaitalStatus\":{\"values\":[{\"name\":\"married\",\"dbName\":null},{\"name\":\"single\",\"dbName\":null},{\"name\":\"divorce\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
