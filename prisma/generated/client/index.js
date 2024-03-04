
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
  country: 'country',
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

exports.Prisma.ScoreDetailScalarFieldEnum = {
  id: 'id',
  ownerID: 'ownerID',
  coyCirleID: 'coyCirleID',
  userCirleID: 'userCirleID',
  assessmentID: 'assessmentID',
  weeklyScore: 'weeklyScore',
  dailyScore: 'dailyScore',
  wellbeingScore: 'wellbeingScore',
  setNo: 'setNo',
  assessmentType: 'assessmentType',
  created_at: 'created_at'
};

exports.Prisma.MailingListScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  email: 'email'
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
  female: 'female',
  other: 'other'
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
  Assessment: 'Assessment',
  ScoreDetail: 'ScoreDetail',
  MailingList: 'MailingList'
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKICBkaXJlY3RVcmwgPSBlbnYoIkRJUkVDVF9VUkwiKQp9Cgptb2RlbCBFbXB5bG9Vc2VyIHsKICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBlbWFpbCAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgIEBkZWZhdWx0KG5vdygpKQogIGZpcnN0TmFtZSAgICAgICAgIFN0cmluZz8KICBsYXN0TmFtZSAgICAgICAgICBTdHJpbmc/CiAgcGhvbmVOdW1iZXIgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcm9sZSAgICAgICAgICAgICAgU3lzdGVtUm9sZSAgICBAZGVmYXVsdChhZG1pbikKICBsYXN0TG9naW4gICAgICAgICBEYXRlVGltZT8KICBwYXNzcG9ydEltZyAgICAgICBTdHJpbmc/CiAgaXNBY3RpdmUgICAgICAgICAgQm9vbGVhbj8gICAgICBAZGVmYXVsdChmYWxzZSkKICB1cGRhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgIEB1cGRhdGVkQXQKICBpc0VtYWlsVmVyaWZpZWQgICBCb29sZWFuPyAgICAgIEBkZWZhdWx0KGZhbHNlKQogIHZlcmlmaWNhdGlvbkNvZGUgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHN0YXR1cyAgICAgICAgICAgIFVzZXJTdGF0dXMgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgZ2VuZGVyICAgICAgICAgICAgVXNlckdlbmRlcj8KICBtYXJpdGFsU3RhdHVzICAgICBNYWl0YWxTdGF0dXM/CiAgZW1weWxvSUQgICAgICAgICAgU3RyaW5nPwogIHBlcm1pc3Npb25zICAgICAgIFN0cmluZ1tdCiAgcGFzc3dvcmRSZXNldENvZGUgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgICAgICAgICAgU3RyaW5nPwogIHdlZWtseUFzc2Vzc21lbnQgIEFzc2Vzc21lbnRbXSAgQHJlbGF0aW9uKCJhc3Nlc3NtZW50X3dlZWtseSIpCiAgY2hlY2tpbkFzc2Vzc21lbnQgQXNzZXNzbWVudFtdICBAcmVsYXRpb24oImFzc2Vzc21lbnRfY2hlY2tpbiIpCn0KCm1vZGVsIENvbXBhbnlVc2VyIHsKICBpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAdW5pcXVlCiAgY3JlYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNvbXBhbnlOYW1lICAgICAgICAgU3RyaW5nPwogIHBob25lTnVtYmVyICAgICAgICAgU3RyaW5nPwogIHBhc3N3b3JkICAgICAgICAgICAgU3RyaW5nPwogIHBhc3N3b3JkUmVzZXRDb2RlICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlCiAgbGFzdExvZ2luICAgICAgICAgICBEYXRlVGltZT8KICBwYXNzcG9ydEltZyAgICAgICAgIFN0cmluZz8KICBpc0FjdGl2ZSAgICAgICAgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdXBkYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgIEB1cGRhdGVkQXQKICBpc0VtYWlsVmVyaWZpZWQgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdmVyaWZpY2F0aW9uQ29kZSAgICBTdHJpbmc/ICAgICAgICAgIEB1bmlxdWUKICBpbmR1c3RyeSAgICAgICAgICAgIFN0cmluZz8KICB3ZWJzaXRlICAgICAgICAgICAgIFN0cmluZz8KICBjb21wYW55RGVzY3JpcHRpb24gIFN0cmluZz8KICBzdGF0dXMgICAgICAgICAgICAgIFVzZXJTdGF0dXMgICAgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgcm9sZSAgICAgICAgICAgICAgICBTeXN0ZW1Sb2xlICAgICAgIEBkZWZhdWx0KGNvbXBhbnkpCiAgYWRkcmVzcyAgICAgICAgICAgICBTdHJpbmc/CiAgYWRkcmVzc0NpdHkgICAgICAgICBTdHJpbmc/CiAgYWRkcmVzc1N0YXRlICAgICAgICBTdHJpbmc/CiAgZW1haWxOb3RpZmljYXRpb24gICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNhbXBhaWduTnRpZmljYXRpb24gQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB0ZXJtc0NvbmRpdGlvbnMgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgbWVtYmVyc0xpc3QgICAgICAgICBVc2VyW10KICBjb21wYW55X2NpcmNsZSAgICAgIENvbXBhbnlDaXJjbGVzW10gQHJlbGF0aW9uKCJjaXJjbGVzX2NvbXBhbnlfdXNlcl9ma2V5IikKICBzb2NpYWxJZCAgICAgICAgICAgIFN0cmluZz8KICBzb2NpYWxQcm92aWRlciAgICAgIFN0cmluZz8KfQoKbW9kZWwgQ29tcGFueUNpcmNsZXMgewogIGlkICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGNyZWF0ZWRfYXQgICAgICAgICAgIERhdGVUaW1lPyAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCAgICAgICAgICAgRGF0ZVRpbWU/ICAgICBAdXBkYXRlZEF0CiAgY295Q2lyY2xlTmFtZSAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgY295Q2lyY2xlRGVzY3JpcHRpb24gU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigxMDAwKQogIGNveUNpcmNsZVNoYXJlTGluayAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIHdlbGxiZWluZ1Njb3JlICAgICAgIFN0cmluZz8KICBhY3Rpdml0eUxldmVsICAgICAgICBBY3Rpdml0eUxldmVsIEBkZWZhdWx0KGxvdykKICBjb21wYW55VXNlciAgICAgICAgICBDb21wYW55VXNlcj8gIEByZWxhdGlvbigiY2lyY2xlc19jb21wYW55X3VzZXJfZmtleSIsIGZpZWxkczogW2NvbXBhbnlVc2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNvbXBhbnlVc2VySWQgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIGNveUNpcmNsZVN0YXR1cyAgICAgIFVzZXJTdGF0dXMgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgY295Q2lyY2xlTm9zICAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgbWVtYmVyTGlzdCAgICAgICAgICAgVXNlcltdCiAgY2lyY2xlSW1nICAgICAgICAgICAgU3RyaW5nPwogIGNpcmNsZVN0YXR1cyAgICAgICAgIENpcmNsZVN0YXR1cz8gQGRlZmF1bHQob25nb2luZykKICBjaXJjbGVTY29yZURldGFpbCAgICBTY29yZURldGFpbFtdIEByZWxhdGlvbigiY29tcGFueUNpcmxlU2NvcmUiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICBAdW5pcXVlCiAgY3JlYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGZpcnN0TmFtZSAgICAgICAgICAgU3RyaW5nPwogIGxhc3ROYW1lICAgICAgICAgICAgU3RyaW5nPwogIHBob25lTnVtYmVyICAgICAgICAgU3RyaW5nPyAgICAgICAgICBAdW5pcXVlCiAgYWdlUmFuZ2UgICAgICAgICAgICBTdHJpbmc/CiAgZXRobmljaXR5ICAgICAgICAgICBTdHJpbmc/CiAgZ2VuZGVyICAgICAgICAgICAgICBVc2VyR2VuZGVyPwogIGNvdW50cnkgICAgICAgICAgICAgU3RyaW5nPwogIG1hcml0YWxTdGF0dXMgICAgICAgTWFpdGFsU3RhdHVzPwogIGRpc2FiaWxpdHkgICAgICAgICAgU3RyaW5nPwogIERPQiAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGFjY291bnRUeXBlICAgICAgICAgVXNlckFjY291bnQgICAgICBAZGVmYXVsdChwZXJzb25hbFVzZXIpCiAgZGVwYXJ0bWVudCAgICAgICAgICBTdHJpbmc/CiAgam9iUm9sZSAgICAgICAgICAgICBTdHJpbmc/CiAgcGFzc3dvcmQgICAgICAgICAgICBTdHJpbmc/CiAgcm9sZSAgICAgICAgICAgICAgICBTeXN0ZW1Sb2xlICAgICAgIEBkZWZhdWx0KHVzZXIpCiAgcGFzc3dvcmRSZXNldENvZGUgICBTdHJpbmc/ICAgICAgICAgIEB1bmlxdWUKICBjb21wYW55VXNlciAgICAgICAgIENvbXBhbnlVc2VyPyAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeV0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY3JlYXRlZEJ5ICAgICAgICAgICBTdHJpbmc/CiAgbGFzdExvZ2luICAgICAgICAgICBEYXRlVGltZT8KICBwYXNzcG9ydEltZyAgICAgICAgIFN0cmluZz8KICBpc0FjdGl2ZSAgICAgICAgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdXBkYXRlZF9hdCAgICAgICAgICBEYXRlVGltZT8gICAgICAgIEB1cGRhdGVkQXQKICBpc0VtYWlsVmVyaWZpZWQgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdmVyaWZpY2F0aW9uQ29kZSAgICBTdHJpbmc/ICAgICAgICAgIEB1bmlxdWUKICBzdGF0dXMgICAgICAgICAgICAgIFVzZXJTdGF0dXMgICAgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgYWRkcmVzcyAgICAgICAgICAgICBTdHJpbmc/CiAgYmlvICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZW1haWxOb3RpZmljYXRpb24gICBCb29sZWFuPyAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNhbXBhaWduTnRpZmljYXRpb24gQm9vbGVhbj8gICAgICAgICBAZGVmYXVsdChmYWxzZSkKICB0ZXJtc0NvbmRpdGlvbnMgICAgIEJvb2xlYW4/ICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgYWRkZWRCeSAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgIEB1bmlxdWUKICBjb3lDaXJjbGVBdHRhY2hlZFRvIENvbXBhbnlDaXJjbGVzW10KICB1c2VyQ2lyY2xlcyAgICAgICAgIFVzZXJDaXJjbGVzW10gICAgQHJlbGF0aW9uKCJ1c2VyQ2lyY2xlcyIpCiAgb3RoZXJVc2VyQ2lyY2xlc0luICBVc2VyQ2lyY2xlc1tdICAgIEByZWxhdGlvbigibWVtYmVySW5DcmlyY2xlIikKICBzb2NpYWxJZCAgICAgICAgICAgIFN0cmluZz8KICBzb2NpYWxQcm92aWRlciAgICAgIFN0cmluZz8KICBsaXN0T2ZTY29yZURldGFpbCAgIFNjb3JlRGV0YWlsW10gICAgQHJlbGF0aW9uKCJ1c2VyU2NvcmVzIikKfQoKbW9kZWwgVXNlckNpcmNsZXMgewogIGlkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBjaXJjbGVJbWcgICAgICAgICAgICAgU3RyaW5nPwogIGNyZWF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgICAgICAgICAgICBEYXRlVGltZT8gICAgIEB1cGRhdGVkQXQKICB1c2VyQ2lyY2xlTmFtZSAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgdXNlckNpcmNsZURlc2NyaXB0aW9uIFN0cmluZz8gICAgICAgQGRiLlZhckNoYXIoMTAwMCkKICB1c2VyQ2lyY2xlU2hhcmVMaW5rICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgd2VsbGJlaW5nU2NvcmUgICAgICAgIFN0cmluZz8KICBhY3Rpdml0eUxldmVsICAgICAgICAgQWN0aXZpdHlMZXZlbCBAZGVmYXVsdChsb3cpCiAgdXNlciAgICAgICAgICAgICAgICAgIFVzZXI/ICAgICAgICAgQHJlbGF0aW9uKCJ1c2VyQ2lyY2xlcyIsIGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIGNyZWF0ZWRCeSAgICAgICAgICAgICBTdHJpbmc/CiAgdXNlckNpcmNsZVN0YXR1cyAgICAgIFVzZXJTdGF0dXMgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgdXNlckNpcmNsZU5vcyAgICAgICAgIFN0cmluZz8gICAgICAgQHVuaXF1ZQogIG1lbWJlckxpc3QgICAgICAgICAgICBVc2VyW10gICAgICAgIEByZWxhdGlvbigibWVtYmVySW5DcmlyY2xlIikKICBjaXJjbGVTdGF0dXMgICAgICAgICAgQ2lyY2xlU3RhdHVzPyBAZGVmYXVsdChvbmdvaW5nKQogIGNpcmNsZVNjb3JlRGV0YWlsICAgICBTY29yZURldGFpbFtdIEByZWxhdGlvbigidXNlckNpcmxlU2NvcmUiKQp9Cgptb2RlbCBBc3Nlc3NtZW50IHsKICBpZCAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBjcmVhdGVkX2F0ICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHNldE5vICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgQHVuaXF1ZQogIGFzc2Vzc21lbnRUeXBlICAgICAgICBBc3Nlc3NtZW50VHlwZT8gQHVuaXF1ZQogIHNldFF1ZXN0aW9ucyAgICAgICAgICBTdHJpbmdbXQogIGVtcHlsb1VzZXIgICAgICAgICAgICBFbXB5bG9Vc2VyPyAgICAgQHJlbGF0aW9uKCJhc3Nlc3NtZW50X3dlZWtseSIsIGZpZWxkczogW2NyZWF0ZWRXZWVrbHlCeV0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZW1weWxvVXNlckNoZWNraW4gICAgIEVtcHlsb1VzZXI/ICAgICBAcmVsYXRpb24oImFzc2Vzc21lbnRfY2hlY2tpbiIsIGZpZWxkczogW2NyZWF0ZWRDaGVja2luQnldLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRXZWVrbHlCeSAgICAgICBTdHJpbmc/ICAgICAgICAgQHVuaXF1ZQogIGNyZWF0ZWRDaGVja2luQnkgICAgICBTdHJpbmc/ICAgICAgICAgQHVuaXF1ZQogIGFzc2Vzc21lbnRTY29yZURldGFpbCBTY29yZURldGFpbFtdICAgQHJlbGF0aW9uKCJhc3Nlc3NtZW50U2NvcmUiKQp9Cgptb2RlbCBTY29yZURldGFpbCB7CiAgaWQgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBvd25lciAgICAgICAgICBVc2VyPyAgICAgICAgICAgQHJlbGF0aW9uKCJ1c2VyU2NvcmVzIiwgZmllbGRzOiBbb3duZXJJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgb3duZXJJRCAgICAgICAgU3RyaW5nPwogIGNveUNpcmxlV2l0aCAgIENvbXBhbnlDaXJjbGVzPyBAcmVsYXRpb24oImNvbXBhbnlDaXJsZVNjb3JlIiwgZmllbGRzOiBbY295Q2lybGVJRF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY295Q2lybGVJRCAgICAgU3RyaW5nPwogIHVzZXJDaXJsZVdpdGggIFVzZXJDaXJjbGVzPyAgICBAcmVsYXRpb24oInVzZXJDaXJsZVNjb3JlIiwgZmllbGRzOiBbdXNlckNpcmxlSURdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVzZXJDaXJsZUlEICAgIFN0cmluZz8KICBhc3Nlc3NtZW50V2l0aCBBc3Nlc3NtZW50PyAgICAgQHJlbGF0aW9uKCJhc3Nlc3NtZW50U2NvcmUiLCBmaWVsZHM6IFthc3Nlc3NtZW50SURdLCByZWZlcmVuY2VzOiBbaWRdKQogIGFzc2Vzc21lbnRJRCAgIFN0cmluZz8KICB3ZWVrbHlTY29yZSAgICBJbnQ/CiAgZGFpbHlTY29yZSAgICAgSW50PwogIHdlbGxiZWluZ1Njb3JlIEludD8KICBzZXRObyAgICAgICAgICBTdHJpbmc/CiAgYXNzZXNzbWVudFR5cGUgQXNzZXNzbWVudFR5cGU/IEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICBEYXRlVGltZT8gICAgICAgQGRlZmF1bHQobm93KCkpCn0KCm1vZGVsIE1haWxpbmdMaXN0IHsKICBpZCAgICAgICAgIFN0cmluZyAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdChjdWlkKCkpCiAgY3JlYXRlZF9hdCBEYXRlVGltZT8gQGRlZmF1bHQobm93KCkpCiAgZW1haWwgICAgICBTdHJpbmc/ICAgQHVuaXF1ZQp9CgplbnVtIEFzc2Vzc21lbnRUeXBlIHsKICB3ZWVrbHkKICBkYWlseUNoZWNraW4KfQoKZW51bSBTeXN0ZW1Sb2xlIHsKICBzdXBlckFkbWluCiAgYWRtaW4KICB1c2VyCiAgY29tcGFueQp9CgplbnVtIFVzZXJHZW5kZXIgewogIG1hbGUKICBmZW1hbGUKICBvdGhlcgp9CgplbnVtIFVzZXJTdGF0dXMgewogIGFjdGl2ZQogIHBlbmRpbmcKICBpbmFjdGl2ZQp9CgplbnVtIEFjY291bnRTdGF0dXMgewogIHZlcmlmaWVkCiAgdW52ZXJpZmllZAp9CgplbnVtIENpcmNsZVN0YXR1cyB7CiAgb25nb2luZwogIGNvbXBsZXRlZAogIHVuZW5yb2xsZWQKfQoKZW51bSBBY3Rpdml0eUxldmVsIHsKICBoaWdoCiAgbW9kZXJhdGUKICBleGNlbGxlbnQKICBtb2RlcmF0ZWx5SGlnaAogIGxvdwp9CgplbnVtIFVzZXJBY2NvdW50IHsKICBwZXJzb25hbFVzZXIKICBjbGllbnRVc2VyCn0KCmVudW0gTWFpdGFsU3RhdHVzIHsKICBtYXJyaWVkCiAgc2luZ2xlCiAgZGl2b3JjZQp9Cg==",
  "inlineSchemaHash": "0264214ca21842cc80c2ba95c88c17c6df29b1b14323c8101ed482bfa8b5cf3b"
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"EmpyloUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"admin\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maritalStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MaitalStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empyloID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weeklyAssessment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"assessment_weekly\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checkinAssessment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"assessment_checkin\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"company\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressCity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membersList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_circle\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"circles_company_user_fkey\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CompanyCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"coyCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ActivityLevel\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"circles_company_user_fkey\",\"relationFromFields\":[\"companyUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyCirclesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CircleStatus\",\"default\":\"ongoing\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleScoreDetail\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScoreDetail\",\"relationName\":\"companyCirleScore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageRange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ethnicity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maritalStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MaitalStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disability\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserAccount\",\"default\":\"personalUser\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobRole\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[\"createdBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCircleAttachedTo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"CompanyCirclesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"userCircles\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"otherUserCirclesIn\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listOfScoreDetail\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScoreDetail\",\"relationName\":\"userScores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserCircles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userCircleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ActivityLevel\",\"default\":\"low\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userCircles\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCircleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"memberInCrircle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CircleStatus\",\"default\":\"ongoing\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleScoreDetail\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScoreDetail\",\"relationName\":\"userCirleScore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Assessment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setQuestions\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empyloUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmpyloUser\",\"relationName\":\"assessment_weekly\",\"relationFromFields\":[\"createdWeeklyBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"empyloUserCheckin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmpyloUser\",\"relationName\":\"assessment_checkin\",\"relationFromFields\":[\"createdCheckinBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdWeeklyBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdCheckinBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentScoreDetail\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScoreDetail\",\"relationName\":\"assessmentScore\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ScoreDetail\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userScores\",\"relationFromFields\":[\"ownerID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCirleWith\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyCircles\",\"relationName\":\"companyCirleScore\",\"relationFromFields\":[\"coyCirleID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coyCirleID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCirleWith\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserCircles\",\"relationName\":\"userCirleScore\",\"relationFromFields\":[\"userCirleID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userCirleID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentWith\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Assessment\",\"relationName\":\"assessmentScore\",\"relationFromFields\":[\"assessmentID\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weeklyScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assessmentType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AssessmentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MailingList\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"AssessmentType\":{\"values\":[{\"name\":\"weekly\",\"dbName\":null},{\"name\":\"dailyCheckin\",\"dbName\":null}],\"dbName\":null},\"SystemRole\":{\"values\":[{\"name\":\"superAdmin\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"user\",\"dbName\":null},{\"name\":\"company\",\"dbName\":null}],\"dbName\":null},\"UserGender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"pending\",\"dbName\":null},{\"name\":\"inactive\",\"dbName\":null}],\"dbName\":null},\"AccountStatus\":{\"values\":[{\"name\":\"verified\",\"dbName\":null},{\"name\":\"unverified\",\"dbName\":null}],\"dbName\":null},\"CircleStatus\":{\"values\":[{\"name\":\"ongoing\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"unenrolled\",\"dbName\":null}],\"dbName\":null},\"ActivityLevel\":{\"values\":[{\"name\":\"high\",\"dbName\":null},{\"name\":\"moderate\",\"dbName\":null},{\"name\":\"excellent\",\"dbName\":null},{\"name\":\"moderatelyHigh\",\"dbName\":null},{\"name\":\"low\",\"dbName\":null}],\"dbName\":null},\"UserAccount\":{\"values\":[{\"name\":\"personalUser\",\"dbName\":null},{\"name\":\"clientUser\",\"dbName\":null}],\"dbName\":null},\"MaitalStatus\":{\"values\":[{\"name\":\"married\",\"dbName\":null},{\"name\":\"single\",\"dbName\":null},{\"name\":\"divorce\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
