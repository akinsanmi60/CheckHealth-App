
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
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.1
 * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
 */
Prisma.prismaVersion = {
  client: "5.8.1",
  engine: "78caf6feeaed953168c64e15a249c3e9a033ebe2"
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
  coyCircleName: 'coyCircleName',
  coyCircleDescription: 'coyCircleDescription',
  coyCircleShareLink: 'coyCircleShareLink',
  wellbeingScore: 'wellbeingScore',
  activityLevel: 'activityLevel',
  companyUserId: 'companyUserId',
  createdBy: 'createdBy',
  coyCircleStatus: 'coyCircleStatus',
  coyCircleNos: 'coyCircleNos',
  circleImg: 'circleImg'
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
  circleName: 'circleName',
  circleId: 'circleId',
  coyCircleAttachedTo: 'coyCircleAttachedTo'
};

exports.Prisma.UserCirclesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  userCircleName: 'userCircleName',
  userCircleDescription: 'userCircleDescription',
  userCircleShareLink: 'userCircleShareLink',
  wellbeingScore: 'wellbeingScore',
  activityLevel: 'activityLevel',
  userId: 'userId',
  createdBy: 'createdBy',
  coyCircleStatus: 'coyCircleStatus',
  coyCircleNos: 'coyCircleNos'
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
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.8.1",
  "engineVersion": "78caf6feeaed953168c64e15a249c3e9a033ebe2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmdlbmVyYXRvciBkYm1sIHsKICBwcm92aWRlciAgICAgICAgICAgID0gInByaXNtYS1kYm1sLWdlbmVyYXRvciIKICBvdXRwdXQgICAgICAgICAgICAgID0gIi4uL2RibWwiCiAgb3V0cHV0TmFtZSAgICAgICAgICA9ICJhd2Vzb21lLmRibWwiCiAgcHJvamVjdE5hbWUgICAgICAgICA9ICJQcm9qZWN0IE5hbWUiCiAgcHJvamVjdERhdGFiYXNlVHlwZSA9ICJQb3N0Z3JlU1FMIgogIHByb2plY3ROb3RlICAgICAgICAgPSAiRW1weWxvIGRlc2NyaXB0aW9uIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCiAgZGlyZWN0VXJsID0gZW52KCJESVJFQ1RfVVJMIikKfQoKbW9kZWwgQ29tcGFueVVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY29tcGFueU5hbWUgICAgICAgICBTdHJpbmc/CiAgcGhvbmVOdW1iZXIgICAgICAgICBTdHJpbmc/CiAgcGFzc3dvcmQgICAgICAgICAgICBTdHJpbmc/CiAgcGFzc3dvcmRSZXNldENvZGUgICBTdHJpbmc/ICAgICAgICAgIEB1bmlxdWUKICBsYXN0TG9naW4gICAgICAgICAgIERhdGVUaW1lPwogIHBhc3Nwb3J0SW1nICAgICAgICAgU3RyaW5nPwogIGlzQWN0aXZlICAgICAgICAgICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB1cGRhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgQHVwZGF0ZWRBdAogIGlzRW1haWxWZXJpZmllZCAgICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB2ZXJpZmljYXRpb25Db2RlICAgIFN0cmluZz8gICAgICAgICAgQHVuaXF1ZQogIGluZHVzdHJ5ICAgICAgICAgICAgU3RyaW5nPwogIHdlYnNpdGUgICAgICAgICAgICAgU3RyaW5nPwogIGNvbXBhbnlEZXNjcmlwdGlvbiAgU3RyaW5nPwogIHN0YXR1cyAgICAgICAgICAgICAgVXNlclN0YXR1cyAgICAgICBAZGVmYXVsdChpbmFjdGl2ZSkKICBhZGRyZXNzICAgICAgICAgICAgIFN0cmluZz8KICBhZGRyZXNzQ2l0eSAgICAgICAgIFN0cmluZz8KICBhZGRyZXNzU3RhdGUgICAgICAgIFN0cmluZz8KICBlbWFpbE5vdGlmaWNhdGlvbiAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY2FtcGFpZ25OdGlmaWNhdGlvbiBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHRlcm1zQ29uZGl0aW9ucyAgICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBtZW1iZXJzTGlzdCAgICAgICAgIFVzZXJbXQogIGNvbXBhbnlfY2lyY2xlICAgICAgQ29tcGFueUNpcmNsZXNbXQp9Cgptb2RlbCBDb21wYW55Q2lyY2xlcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICBAZGVmYXVsdChub3coKSkKICBjb3lDaXJjbGVOYW1lICAgICAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICBjb3lDaXJjbGVEZXNjcmlwdGlvbiBTdHJpbmc/ICAgICAgIEBkYi5WYXJDaGFyKDEwMDApCiAgY295Q2lyY2xlU2hhcmVMaW5rICAgU3RyaW5nPwogIHdlbGxiZWluZ1Njb3JlICAgICAgIFN0cmluZz8KICBhY3Rpdml0eUxldmVsICAgICAgICBBY3Rpdml0eUxldmVsIEBkZWZhdWx0KGxvdykKICBjb21wYW55VXNlciAgICAgICAgICBDb21wYW55VXNlcj8gIEByZWxhdGlvbihmaWVsZHM6IFtjb21wYW55VXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgbWFwOiAiY2lyY2xlc19jb21wYW55X3VzZXJfZmtleSIpCiAgY29tcGFueVVzZXJJZCAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRCeSAgICAgICAgICAgIFN0cmluZz8KICBjb3lDaXJjbGVTdGF0dXMgICAgICBVc2VyU3RhdHVzICAgIEBkZWZhdWx0KGluYWN0aXZlKQogIGNveUNpcmNsZU5vcyAgICAgICAgIFN0cmluZz8KICBtZW1iZXJMaXN0ICAgICAgICAgICBVc2VyW10KICBjaXJjbGVJbWcgICAgICAgICAgICAgU3RyaW5nPwp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQogIGNyZWF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGZpcnN0TmFtZSAgICAgICAgICAgU3RyaW5nPwogIGxhc3ROYW1lICAgICAgICAgICAgU3RyaW5nPwogIHBob25lTnVtYmVyICAgICAgICAgU3RyaW5nPyAgICAgICAgIEB1bmlxdWUKICBhZ2VSYW5nZSAgICAgICAgICAgIFN0cmluZz8KICBldGhuaWNpdHkgICAgICAgICAgIFN0cmluZz8KICBnZW5kZXIgICAgICAgICAgICAgIFVzZXJHZW5kZXI/CiAgbWFyaXRhbFN0YXR1cyAgICAgICBTdHJpbmc/CiAgZGlzYWJpbGl0eSAgICAgICAgICBTdHJpbmc/CiAgRE9CICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgYWNjb3VudFR5cGUgICAgICAgICBVc2VyQWNjb3VudCAgICAgQGRlZmF1bHQocGVyc29uYWxVc2VyKQogIGRlcGFydG1lbnQgICAgICAgICAgU3RyaW5nPwogIGpvYlJvbGUgICAgICAgICAgICAgU3RyaW5nPwogIHBhc3N3b3JkICAgICAgICAgICAgU3RyaW5nPwogIHJvbGUgICAgICAgICAgICAgICAgU3lzdGVtUm9sZSAgICAgIEBkZWZhdWx0KHVzZXIpCiAgcGFzc3dvcmRSZXNldENvZGUgICBTdHJpbmc/ICAgICAgICAgQHVuaXF1ZQogIGNvbXBhbnlVc2VyICAgICAgICAgQ29tcGFueVVzZXI/ICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkQnldLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRCeSAgICAgICAgICAgU3RyaW5nPwogIGxhc3RMb2dpbiAgICAgICAgICAgRGF0ZVRpbWU/CiAgcGFzc3BvcnRJbWcgICAgICAgICBTdHJpbmc/CiAgaXNBY3RpdmUgICAgICAgICAgICBCb29sZWFuPyAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdXBkYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgQHVwZGF0ZWRBdAogIGlzRW1haWxWZXJpZmllZCAgICAgQm9vbGVhbj8gICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHZlcmlmaWNhdGlvbkNvZGUgICAgU3RyaW5nPyAgICAgICAgIEB1bmlxdWUKICBzdGF0dXMgICAgICAgICAgICAgIFVzZXJTdGF0dXMgICAgICBAZGVmYXVsdChpbmFjdGl2ZSkKICBhZGRyZXNzICAgICAgICAgICAgIFN0cmluZz8KICBiaW8gICAgICAgICAgICAgICAgIFN0cmluZz8KICBlbWFpbE5vdGlmaWNhdGlvbiAgIEJvb2xlYW4/ICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBjYW1wYWlnbk50aWZpY2F0aW9uIEJvb2xlYW4/ICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB0ZXJtc0NvbmRpdGlvbnMgICAgIEJvb2xlYW4/ICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBhZGRlZEJ5ICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICBAdW5pcXVlCiAgdXNlckNpcmNsZUluICAgICAgICBVc2VyQ2lyY2xlcz8gICAgIEByZWxhdGlvbigibWVtYmVySW5DcmlyY2xlIiwgZmllbGRzOiBbdXNlckNpcmNsZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VyQ2lyY2xlSWQgICAgICAgIFN0cmluZz8KICBjaXJjbGVOYW1lICAgICAgICAgIFN0cmluZz8KICBjaXJjbGVJZCAgICAgICAgICAgIFN0cmluZz8KICBjb21wYW55Q2lybGUgICAgICAgIENvbXBhbnlDaXJjbGVzPyBAcmVsYXRpb24oZmllbGRzOiBbY295Q2lyY2xlQXR0YWNoZWRUb10sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY295Q2lyY2xlQXR0YWNoZWRUbyBTdHJpbmc/CiAgdXNlckNpcmNsZXMgICAgICAgICBVc2VyQ2lyY2xlc1tdICAgQHJlbGF0aW9uKCJ1c2VyQ2lyY2xlcyIpCn0KCm1vZGVsIFVzZXJDaXJjbGVzIHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgY3JlYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgQGRlZmF1bHQobm93KCkpCiAgdXNlckNpcmNsZU5hbWUgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHVzZXJDaXJjbGVEZXNjcmlwdGlvbiBTdHJpbmc/ICAgICAgIEBkYi5WYXJDaGFyKDEwMDApCiAgdXNlckNpcmNsZVNoYXJlTGluayAgIFN0cmluZz8KICB3ZWxsYmVpbmdTY29yZSAgICAgICAgU3RyaW5nPwogIGFjdGl2aXR5TGV2ZWwgICAgICAgICBBY3Rpdml0eUxldmVsCiAgdXNlciAgICAgICAgICAgICAgICAgIFVzZXI/ICAgICAgICAgQHJlbGF0aW9uKCJ1c2VyQ2lyY2xlcyIsIGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkICAgICAgICAgICAgICAgIFN0cmluZz8KICBjcmVhdGVkQnkgICAgICAgICAgICAgU3RyaW5nPwogIGNveUNpcmNsZVN0YXR1cyAgICAgICBVc2VyU3RhdHVzICAgIEBkZWZhdWx0KGluYWN0aXZlKQogIGNveUNpcmNsZU5vcyAgICAgICAgICBTdHJpbmc/CiAgbWVtYmVyc0xpc3QgICAgICAgICAgIFVzZXJbXSAgICAgICAgQHJlbGF0aW9uKCJtZW1iZXJJbkNyaXJjbGUiKQp9CgplbnVtIFN5c3RlbVJvbGUgewogIHN1cGVyQWRtaW4KICBhZG1pbgogIHVzZXIKfQoKZW51bSBVc2VyR2VuZGVyIHsKICBtYWxlCiAgZmVtYWxlCn0KCmVudW0gVXNlclN0YXR1cyB7CiAgYWN0aXZlCiAgcGVuZGluZwogIGluYWN0aXZlCn0KCmVudW0gQWNjb3VudFN0YXR1cyB7CiAgdmVyaWZpZWQKICB1bnZlcmlmaWVkCn0KCmVudW0gQ2lyY2xlU3RhdHVzIHsKICBvbmdvaW5nCiAgY29tcGxldGVkCiAgdW5lbnJvbGxlZAp9CgplbnVtIEFjdGl2aXR5TGV2ZWwgewogIGhpZ2gKICBtb2RlcmF0ZQogIGV4Y2VsbGVudAogIG1vZGVyYXRlbHlIaWdoCiAgbG93Cn0KCmVudW0gVXNlckFjY291bnQgewogIHBlcnNvbmFsVXNlcgogIGNsaWVudFVzZXIKfQoKZW51bSBNYWl0YWxTdGF0dXMgewogIG1hcnJpZWQKICBzaW5nbGUKICBkaXZvcmNlCn0K",
  "inlineSchemaHash": "daef6a7baeb92d5f020d7e55d193c49f9f8af88f67f658bf48f0da2700d36019",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"CompanyUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressCity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membersList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_circle\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"CompanyCirclesToCompanyUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ActivityLevel\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"CompanyCirclesToCompanyUser\",\"relationFromFields\":[\"companyUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyCirclesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageRange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ethnicity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maritalStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disability\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserAccount\",\"default\":\"personalUser\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobRole\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[\"createdBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleIn\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[\"userCircleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyCirle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"CompanyCirclesToUser\",\"relationFromFields\":[\"coyCircleAttachedTo\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleAttachedTo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"userCircles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityLevel\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userCircles\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membersList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"SystemRole\":{\"values\":[{\"name\":\"superAdmin\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"user\",\"dbName\":null}],\"dbName\":null},\"UserGender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"pending\",\"dbName\":null},{\"name\":\"inactive\",\"dbName\":null}],\"dbName\":null},\"AccountStatus\":{\"values\":[{\"name\":\"verified\",\"dbName\":null},{\"name\":\"unverified\",\"dbName\":null}],\"dbName\":null},\"CircleStatus\":{\"values\":[{\"name\":\"ongoing\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"unenrolled\",\"dbName\":null}],\"dbName\":null},\"ActivityLevel\":{\"values\":[{\"name\":\"high\",\"dbName\":null},{\"name\":\"moderate\",\"dbName\":null},{\"name\":\"excellent\",\"dbName\":null},{\"name\":\"moderatelyHigh\",\"dbName\":null},{\"name\":\"low\",\"dbName\":null}],\"dbName\":null},\"UserAccount\":{\"values\":[{\"name\":\"personalUser\",\"dbName\":null},{\"name\":\"clientUser\",\"dbName\":null}],\"dbName\":null},\"MaitalStatus\":{\"values\":[{\"name\":\"married\",\"dbName\":null},{\"name\":\"single\",\"dbName\":null},{\"name\":\"divorce\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

