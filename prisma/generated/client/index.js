
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

exports.Prisma.EmpyloUserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  created_at: 'created_at',
  firstName: 'firstName',
  lastName: 'lastName',
  phoneNumber: 'phoneNumber',
  role: 'role',
  lastLogin: 'lastLogin',
  passportImg: 'passportImg',
  isActive: 'isActive',
  updated_at: 'updated_at',
  isEmailVerified: 'isEmailVerified',
  verificationCode: 'verificationCode',
  status: 'status',
  gender: 'gender',
  maritalStatus: 'maritalStatus',
  empyloID: 'empyloID',
  permissions: 'permissions',
  passwordResetCode: 'passwordResetCode',
  password: 'password'
};

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
  role: 'role',
  address: 'address',
  addressCity: 'addressCity',
  addressState: 'addressState',
  emailNotification: 'emailNotification',
  campaignNtification: 'campaignNtification',
  termsConditions: 'termsConditions',
  socialId: 'socialId',
  socialProvider: 'socialProvider'
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
  circleStatus: 'circleStatus'
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
  socialId: 'socialId',
  socialProvider: 'socialProvider'
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
  userCircleNos: 'userCircleNos',
  circleStatus: 'circleStatus'
};

exports.Prisma.AssessmentScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  setNo: 'setNo',
  assessmentType: 'assessmentType',
  setQuestions: 'setQuestions',
  createdWeeklyBy: 'createdWeeklyBy',
  createdCheckinBy: 'createdCheckinBy'
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
exports.SystemRole = exports.$Enums.SystemRole = {
  superAdmin: 'superAdmin',
  admin: 'admin',
  user: 'user',
  company: 'company'
};

exports.UserStatus = exports.$Enums.UserStatus = {
  active: 'active',
  pending: 'pending',
  inactive: 'inactive'
};

exports.UserGender = exports.$Enums.UserGender = {
  male: 'male',
  female: 'female'
};

exports.MaitalStatus = exports.$Enums.MaitalStatus = {
  married: 'married',
  single: 'single',
  divorce: 'divorce'
};

exports.ActivityLevel = exports.$Enums.ActivityLevel = {
  high: 'high',
  moderate: 'moderate',
  excellent: 'excellent',
  moderatelyHigh: 'moderatelyHigh',
  low: 'low'
};

exports.CircleStatus = exports.$Enums.CircleStatus = {
  ongoing: 'ongoing',
  completed: 'completed',
  unenrolled: 'unenrolled'
};

exports.UserAccount = exports.$Enums.UserAccount = {
  personalUser: 'personalUser',
  clientUser: 'clientUser'
};

exports.AssessmentType = exports.$Enums.AssessmentType = {
  weekly: 'weekly',
  dailyCheckin: 'dailyCheckin'
};

exports.Prisma.ModelName = {
  EmpyloUser: 'EmpyloUser',
  CompanyUser: 'CompanyUser',
  CompanyCircles: 'CompanyCircles',
  User: 'User',
  UserCircles: 'UserCircles',
  Assessment: 'Assessment'
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
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKICBkaXJlY3RVcmwgPSBlbnYoIkRJUkVDVF9VUkwiKQp9Cgptb2RlbCBFbXB5bG9Vc2VyIHsKICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBlbWFpbCAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgIEBkZWZhdWx0KG5vdygpKQogIGZpcnN0TmFtZSAgICAgICAgIFN0cmluZz8KICBsYXN0TmFtZSAgICAgICAgICBTdHJpbmc/CiAgcGhvbmVOdW1iZXIgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcm9sZSAgICAgICAgICAgICAgU3lzdGVtUm9sZSAgICBAZGVmYXVsdChhZG1pbikKICBsYXN0TG9naW4gICAgICAgICBEYXRlVGltZT8KICBwYXNzcG9ydEltZyAgICAgICBTdHJpbmc/CiAgaXNBY3RpdmUgICAgICAgICAgQm9vbGVhbj8gICAgICBAZGVmYXVsdChmYWxzZSkKICB1cGRhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgIEB1cGRhdGVkQXQKICBpc0VtYWlsVmVyaWZpZWQgICBCb29sZWFuPyAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHZlcmlmaWNhdGlvbkNvZGUgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHN0YXR1cyAgICAgICAgICAgIFVzZXJTdGF0dXMgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgZ2VuZGVyICAgICAgICAgICAgVXNlckdlbmRlcj8KICBtYXJpdGFsU3RhdHVzICAgICBNYWl0YWxTdGF0dXM/CiAgZW1weWxvSUQgICAgICAgICAgU3RyaW5nPwogIHBlcm1pc3Npb25zICAgICAgIFN0cmluZ1tdCiAgcGFzc3dvcmRSZXNldENvZGUgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgICAgICAgICAgU3RyaW5nPwogIHdlZWtseUFzc2Vzc21lbnQgIEFzc2Vzc21lbnRbXSAgQHJlbGF0aW9uKCJhc3Nlc3NtZW50X3dlZWtseSIpCiAgY2hlY2tpbkFzc2Vzc21lbnQgQXNzZXNzbWVudFtdICBAcmVsYXRpb24oImFzc2Vzc21lbnRfY2hlY2tpbiIpCn0KCm1vZGVsIENvbXBhbnlVc2VyIHsKICBpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAdW5pcXVlCiAgY3JlYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNvbXBhbnlOYW1lICAgICAgICAgU3RyaW5nPwogIHBob25lTnVtYmVyICAgICAgICAgU3RyaW5nPwogIHBhc3N3b3JkICAgICAgICAgICAgU3RyaW5nPwogIHBhc3N3b3JkUmVzZXRDb2RlICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlCiAgbGFzdExvZ2luICAgICAgICAgICBEYXRlVGltZT8KICBwYXNzcG9ydEltZyAgICAgICAgIFN0cmluZz8KICBpc0FjdGl2ZSAgICAgICAgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdXBkYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgIEB1cGRhdGVkQXQKICBpc0VtYWlsVmVyaWZpZWQgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdmVyaWZpY2F0aW9uQ29kZSAgICBTdHJpbmc/ICAgICAgICAgIEB1bmlxdWUKICBpbmR1c3RyeSAgICAgICAgICAgIFN0cmluZz8KICB3ZWJzaXRlICAgICAgICAgICAgIFN0cmluZz8KICBjb21wYW55RGVzY3JpcHRpb24gIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgIFVzZXJTdGF0dXMgICAgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgcm9sZSAgICAgICAgICAgICAgICBTeXN0ZW1Sb2xlICAgICAgIEBkZWZhdWx0KGNvbXBhbnkpCiAgYWRkcmVzcyAgICAgICAgICAgICBTdHJpbmc/CiAgYWRkcmVzc0NpdHkgICAgICAgICBTdHJpbmc/CiAgYWRkcmVzc1N0YXRlICAgICAgICBTdHJpbmc/CiAgZW1haWxOb3RpZmljYXRpb24gICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNhbXBhaWduTnRpZmljYXRpb24gQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB0ZXJtc0NvbmRpdGlvbnMgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgbWVtYmVyc0xpc3QgICAgICAgICBVc2VyW10KICBjb21wYW55X2NpcmNsZSAgICAgIENvbXBhbnlDaXJjbGVzW10gQHJlbGF0aW9uKCJjaXJjbGVzX2NvbXBhbnlfdXNlcl9ma2V5IikKICBzb2NpYWxJZCAgICAgICAgICAgIFN0cmluZz8KICBzb2NpYWxQcm92aWRlciAgICAgIFN0cmluZz8KfQoKbW9kZWwgQ29tcGFueUNpcmNsZXMgewogIGlkICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGNyZWF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICBAdXBkYXRlZEF0CiAgY295Q2lyY2xlTmFtZSAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgY295Q2lyY2xlRGVzY3JpcHRpb24gU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigxMDAwKQogIGNveUNpcmNsZVNoYXJlTGluayAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHdlbGxiZWluZ1Njb3JlICAgICAgIFN0cmluZz8KICBhY3Rpdml0eUxldmVsICAgICAgICBBY3Rpdml0eUxldmVsIEBkZWZhdWx0KGxvdykKICBjb21wYW55VXNlciAgICAgICAgICBDb21wYW55VXNlcj8gIEByZWxhdGlvbigiY2lyY2xlc19jb21wYW55X3VzZXJfZmtleSIsIGZpZWxkczogW2NvbXBhbnlVc2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNvbXBhbnlVc2VySWQgICAgICAgIFN0cmluZz8KICBjb3lDaXJjbGVTdGF0dXMgICAgICBVc2VyU3RhdHVzICAgIEBkZWZhdWx0KGluYWN0aXZlKQogIGNveUNpcmNsZU5vcyAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIG1lbWJlckxpc3QgICAgICAgICAgIFVzZXJbXQogIGNpcmNsZUltZyAgICAgICAgICAgIFN0cmluZz8KICBjaXJjbGVTdGF0dXMgICAgICAgICBDaXJjbGVTdGF0dXM/IEBkZWZhdWx0KG9uZ29pbmcpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgZW1haWwgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgZmlyc3ROYW1lICAgICAgICAgICBTdHJpbmc/CiAgbGFzdE5hbWUgICAgICAgICAgICBTdHJpbmc/CiAgcGhvbmVOdW1iZXIgICAgICAgICBTdHJpbmc/ICAgICAgICAgIEB1bmlxdWUKICBhZ2VSYW5nZSAgICAgICAgICAgIFN0cmluZz8KICBldGhuaWNpdHkgICAgICAgICAgIFN0cmluZz8KICBnZW5kZXIgICAgICAgICAgICAgIFVzZXJHZW5kZXI/CiAgbWFyaXRhbFN0YXR1cyAgICAgICBNYWl0YWxTdGF0dXM/CiAgZGlzYWJpbGl0eSAgICAgICAgICBTdHJpbmc/CiAgRE9CICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgYWNjb3VudFR5cGUgICAgICAgICBVc2VyQWNjb3VudCAgICAgIEBkZWZhdWx0KHBlcnNvbmFsVXNlcikKICBkZXBhcnRtZW50ICAgICAgICAgIFN0cmluZz8KICBqb2JSb2xlICAgICAgICAgICAgIFN0cmluZz8KICBwYXNzd29yZCAgICAgICAgICAgIFN0cmluZz8KICByb2xlICAgICAgICAgICAgICAgIFN5c3RlbVJvbGUgICAgICAgQGRlZmF1bHQodXNlcikKICBwYXNzd29yZFJlc2V0Q29kZSAgIFN0cmluZz8gICAgICAgICAgQHVuaXF1ZQogIGNvbXBhbnlVc2VyICAgICAgICAgQ29tcGFueVVzZXI/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZEJ5XSwgcmVmZXJlbmNlczogW2lkXSkKICBjcmVhdGVkQnkgICAgICAgICAgIFN0cmluZz8KICBsYXN0TG9naW4gICAgICAgICAgIERhdGVUaW1lPwogIHBhc3Nwb3J0SW1nICAgICAgICAgU3RyaW5nPwogIGlzQWN0aXZlICAgICAgICAgICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB1cGRhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICAgICAgQHVwZGF0ZWRBdAogIGlzRW1haWxWZXJpZmllZCAgICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB2ZXJpZmljYXRpb25Db2RlICAgIFN0cmluZz8gICAgICAgICAgQHVuaXF1ZQogIHN0YXR1cyAgICAgICAgICAgICAgVXNlclN0YXR1cyAgICAgICBAZGVmYXVsdChpbmFjdGl2ZSkKICBhZGRyZXNzICAgICAgICAgICAgIFN0cmluZz8KICBiaW8gICAgICAgICAgICAgICAgIFN0cmluZz8KICBlbWFpbE5vdGlmaWNhdGlvbiAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY2FtcGFpZ25OdGlmaWNhdGlvbiBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHRlcm1zQ29uZGl0aW9ucyAgICAgQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBhZGRlZEJ5ICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgQHVuaXF1ZQogIGNveUNpcmNsZUF0dGFjaGVkVG8gQ29tcGFueUNpcmNsZXNbXQogIHVzZXJDaXJjbGVzICAgICAgICAgVXNlckNpcmNsZXNbXSAgICBAcmVsYXRpb24oInVzZXJDaXJjbGVzIikKICBvdGhlclVzZXJDaXJjbGVzSW4gIFVzZXJDaXJjbGVzW10gICAgQHJlbGF0aW9uKCJtZW1iZXJJbkNyaXJjbGUiKQogIHNvY2lhbElkICAgICAgICAgICAgU3RyaW5nPwogIHNvY2lhbFByb3ZpZGVyICAgICAgU3RyaW5nPwp9Cgptb2RlbCBVc2VyQ2lyY2xlcyB7CiAgaWQgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGNpcmNsZUltZyAgICAgICAgICAgICBTdHJpbmc/CiAgY3JlYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgIERhdGVUaW1lPyAgICAgQHVwZGF0ZWRBdAogIHVzZXJDaXJjbGVOYW1lICAgICAgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICB1c2VyQ2lyY2xlRGVzY3JpcHRpb24gU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigxMDAwKQogIHVzZXJDaXJjbGVTaGFyZUxpbmsgICBTdHJpbmc/ICAgICAgIEB1bmlxdWUKICB3ZWxsYmVpbmdTY29yZSAgICAgICAgU3RyaW5nPwogIGFjdGl2aXR5TGV2ZWwgICAgICAgICBBY3Rpdml0eUxldmVsIEBkZWZhdWx0KGxvdykKICB1c2VyICAgICAgICAgICAgICAgICAgVXNlcj8gICAgICAgICBAcmVsYXRpb24oInVzZXJDaXJjbGVzIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1c2VySWQgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRCeSAgICAgICAgICAgICBTdHJpbmc/CiAgdXNlckNpcmNsZVN0YXR1cyAgICAgIFVzZXJTdGF0dXMgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgdXNlckNpcmNsZU5vcyAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIG1lbWJlckxpc3QgICAgICAgICAgICBVc2VyW10gICAgICAgIEByZWxhdGlvbigibWVtYmVySW5DcmlyY2xlIikKICBjaXJjbGVTdGF0dXMgICAgICAgICAgQ2lyY2xlU3RhdHVzPyBAZGVmYXVsdChvbmdvaW5nKQp9Cgptb2RlbCBBc3Nlc3NtZW50IHsKICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGNyZWF0ZWRfYXQgICAgICAgIERhdGVUaW1lPyAgICAgICBAZGVmYXVsdChub3coKSkKICBzZXRObyAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQHVuaXF1ZQogIGFzc2Vzc21lbnRUeXBlICAgIEFzc2Vzc21lbnRUeXBlPyBAdW5pcXVlCiAgc2V0UXVlc3Rpb25zICAgICAgU3RyaW5nW10KICBlbXB5bG9Vc2VyICAgICAgICBFbXB5bG9Vc2VyPyAgICAgQHJlbGF0aW9uKCJhc3Nlc3NtZW50X3dlZWtseSIsIGZpZWxkczogW2NyZWF0ZWRXZWVrbHlCeV0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZW1weWxvVXNlckNoZWNraW4gRW1weWxvVXNlcj8gICAgIEByZWxhdGlvbigiYXNzZXNzbWVudF9jaGVja2luIiwgZmllbGRzOiBbY3JlYXRlZENoZWNraW5CeV0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY3JlYXRlZFdlZWtseUJ5ICAgU3RyaW5nPwogIGNyZWF0ZWRDaGVja2luQnkgIFN0cmluZz8KfQoKZW51bSBBc3Nlc3NtZW50VHlwZSB7CiAgd2Vla2x5CiAgZGFpbHlDaGVja2luCn0KCmVudW0gU3lzdGVtUm9sZSB7CiAgc3VwZXJBZG1pbgogIGFkbWluCiAgdXNlcgogIGNvbXBhbnkKfQoKZW51bSBVc2VyR2VuZGVyIHsKICBtYWxlCiAgZmVtYWxlCn0KCmVudW0gVXNlclN0YXR1cyB7CiAgYWN0aXZlCiAgcGVuZGluZwogIGluYWN0aXZlCn0KCmVudW0gQWNjb3VudFN0YXR1cyB7CiAgdmVyaWZpZWQKICB1bnZlcmlmaWVkCn0KCmVudW0gQ2lyY2xlU3RhdHVzIHsKICBvbmdvaW5nCiAgY29tcGxldGVkCiAgdW5lbnJvbGxlZAp9CgplbnVtIEFjdGl2aXR5TGV2ZWwgewogIGhpZ2gKICBtb2RlcmF0ZQogIGV4Y2VsbGVudAogIG1vZGVyYXRlbHlIaWdoCiAgbG93Cn0KCmVudW0gVXNlckFjY291bnQgewogIHBlcnNvbmFsVXNlcgogIGNsaWVudFVzZXIKfQoKZW51bSBNYWl0YWxTdGF0dXMgewogIG1hcnJpZWQKICBzaW5nbGUKICBkaXZvcmNlCn0K",
  "inlineSchemaHash": "33974b2c5158b3dab2bb29551a3b3f6077682df36140a6be1ef6583ce3899533",
  "noEngine": false
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"EmpyloUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maritalStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MaitalStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empyloID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weeklyAssessment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"assessment_weekly\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checkinAssessment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"assessment_checkin\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"company\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressCity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membersList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_circle\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"circles_company_user_fkey\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"coyCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ActivityLevel\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"circles_company_user_fkey\",\"relationFromFields\":[\"companyUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyCirclesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CircleStatus\",\"default\":\"ongoing\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageRange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ethnicity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maritalStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MaitalStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disability\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserAccount\",\"default\":\"personalUser\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobRole\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[\"createdBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleAttachedTo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"CompanyCirclesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"userCircles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otherUserCirclesIn\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ActivityLevel\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userCircles\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CircleStatus\",\"default\":\"ongoing\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Assessment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setQuestions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empyloUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmpyloUser\",\"relationName\":\"assessment_weekly\",\"relationFromFields\":[\"createdWeeklyBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empyloUserCheckin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmpyloUser\",\"relationName\":\"assessment_checkin\",\"relationFromFields\":[\"createdCheckinBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdWeeklyBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdCheckinBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"AssessmentType\":{\"values\":[{\"name\":\"weekly\",\"dbName\":null},{\"name\":\"dailyCheckin\",\"dbName\":null}],\"dbName\":null},\"SystemRole\":{\"values\":[{\"name\":\"superAdmin\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"user\",\"dbName\":null},{\"name\":\"company\",\"dbName\":null}],\"dbName\":null},\"UserGender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"pending\",\"dbName\":null},{\"name\":\"inactive\",\"dbName\":null}],\"dbName\":null},\"AccountStatus\":{\"values\":[{\"name\":\"verified\",\"dbName\":null},{\"name\":\"unverified\",\"dbName\":null}],\"dbName\":null},\"CircleStatus\":{\"values\":[{\"name\":\"ongoing\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"unenrolled\",\"dbName\":null}],\"dbName\":null},\"ActivityLevel\":{\"values\":[{\"name\":\"high\",\"dbName\":null},{\"name\":\"moderate\",\"dbName\":null},{\"name\":\"excellent\",\"dbName\":null},{\"name\":\"moderatelyHigh\",\"dbName\":null},{\"name\":\"low\",\"dbName\":null}],\"dbName\":null},\"UserAccount\":{\"values\":[{\"name\":\"personalUser\",\"dbName\":null},{\"name\":\"clientUser\",\"dbName\":null}],\"dbName\":null},\"MaitalStatus\":{\"values\":[{\"name\":\"married\",\"dbName\":null},{\"name\":\"single\",\"dbName\":null},{\"name\":\"divorce\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
