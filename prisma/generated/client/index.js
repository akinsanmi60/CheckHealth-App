
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
} = require('./runtime/library')


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
  circleName: 'circleName',
  circleId: 'circleId'
};

exports.Prisma.CirclesScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  circleName: 'circleName',
  circleDescription: 'circleDescription',
  circleShareLink: 'circleShareLink',
  wellbeingScore: 'wellbeingScore',
  activityLevel: 'activityLevel',
  companyUserId: 'companyUserId',
  userId: 'userId',
  createdBy: 'createdBy',
  circleStatus: 'circleStatus',
  circleNos: 'circleNos'
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

exports.ActivityLevel = exports.$Enums.ActivityLevel = {
  high: 'high',
  moderate: 'moderate',
  excellent: 'excellent',
  moderatelyHigh: 'moderatelyHigh',
  low: 'low'
};

exports.Prisma.ModelName = {
  CompanyUser: 'CompanyUser',
  User: 'User',
  Circles: 'Circles'
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKICBkaXJlY3RVcmwgPSBlbnYoIkRJUkVDVF9VUkwiKQp9Cgptb2RlbCBDb21wYW55VXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KGN1aWQoKSkKICBlbWFpbCAgICAgICAgICAgICAgIFN0cmluZyAgICAgQHVuaXF1ZQogIGNyZWF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICBAZGVmYXVsdChub3coKSkKICBjb21wYW55TmFtZSAgICAgICAgIFN0cmluZz8KICBwaG9uZU51bWJlciAgICAgICAgIFN0cmluZz8KICBwYXNzd29yZCAgICAgICAgICAgIFN0cmluZz8KICBwYXNzd29yZFJlc2V0Q29kZSAgIFN0cmluZz8gICAgQHVuaXF1ZQogIGxhc3RMb2dpbiAgICAgICAgICAgRGF0ZVRpbWU/CiAgcGFzc3BvcnRJbWcgICAgICAgICBTdHJpbmc/CiAgaXNBY3RpdmUgICAgICAgICAgICBCb29sZWFuPyAgIEBkZWZhdWx0KGZhbHNlKQogIHVwZGF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICBAdXBkYXRlZEF0CiAgaXNFbWFpbFZlcmlmaWVkICAgICBCb29sZWFuPyAgIEBkZWZhdWx0KGZhbHNlKQogIHZlcmlmaWNhdGlvbkNvZGUgICAgU3RyaW5nPyAgICBAdW5pcXVlCiAgaW5kdXN0cnkgICAgICAgICAgICBTdHJpbmc/CiAgd2Vic2l0ZSAgICAgICAgICAgICBTdHJpbmc/CiAgY29tcGFueURlc2NyaXB0aW9uICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICBVc2VyU3RhdHVzIEBkZWZhdWx0KGluYWN0aXZlKQogIGFkZHJlc3MgICAgICAgICAgICAgU3RyaW5nPwogIGFkZHJlc3NDaXR5ICAgICAgICAgU3RyaW5nPwogIGFkZHJlc3NTdGF0ZSAgICAgICAgU3RyaW5nPwogIGVtYWlsTm90aWZpY2F0aW9uICAgQm9vbGVhbj8gICBAZGVmYXVsdChmYWxzZSkKICBjYW1wYWlnbk50aWZpY2F0aW9uIEJvb2xlYW4/ICAgQGRlZmF1bHQoZmFsc2UpCiAgdGVybXNDb25kaXRpb25zICAgICBCb29sZWFuPyAgIEBkZWZhdWx0KGZhbHNlKQogIG1lbWJlcnNMaXN0ICAgICAgICAgVXNlcltdCiAgY29tcGFueV9jaXJjbGUgICAgICBDaXJjbGVzW10KfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGVtYWlsICAgICAgICAgICAgICAgU3RyaW5nICAgICAgIEB1bmlxdWUKICBjcmVhdGVkX2F0ICAgICAgICAgIERhdGVUaW1lPyAgICBAZGVmYXVsdChub3coKSkKICBmaXJzdE5hbWUgICAgICAgICAgIFN0cmluZz8KICBsYXN0TmFtZSAgICAgICAgICAgIFN0cmluZz8KICBwaG9uZU51bWJlciAgICAgICAgIFN0cmluZz8gICAgICBAdW5pcXVlCiAgYWdlUmFuZ2UgICAgICAgICAgICBTdHJpbmc/CiAgZXRobmljaXR5ICAgICAgICAgICBTdHJpbmc/CiAgZ2VuZGVyICAgICAgICAgICAgICBVc2VyR2VuZGVyPwogIG1hcml0YWxTdGF0dXMgICAgICAgU3RyaW5nPwogIGRpc2FiaWxpdHkgICAgICAgICAgU3RyaW5nPwogIERPQiAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGFjY291bnRUeXBlICAgICAgICAgVXNlckFjY291bnQgIEBkZWZhdWx0KHBlcnNvbmFsVXNlcikKICBkZXBhcnRtZW50ICAgICAgICAgIFN0cmluZz8KICBqb2JSb2xlICAgICAgICAgICAgIFN0cmluZz8KICBwYXNzd29yZCAgICAgICAgICAgIFN0cmluZz8KICByb2xlICAgICAgICAgICAgICAgIFN5c3RlbVJvbGUgICBAZGVmYXVsdCh1c2VyKQogIHBhc3N3b3JkUmVzZXRDb2RlICAgU3RyaW5nPyAgICAgIEB1bmlxdWUKICBjb21wYW55VXNlciAgICAgICAgIENvbXBhbnlVc2VyPyBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZEJ5XSwgcmVmZXJlbmNlczogW2lkXSkKICBjcmVhdGVkQnkgICAgICAgICAgIFN0cmluZz8KICBsYXN0TG9naW4gICAgICAgICAgIERhdGVUaW1lPwogIHBhc3Nwb3J0SW1nICAgICAgICAgU3RyaW5nPwogIGlzQWN0aXZlICAgICAgICAgICAgQm9vbGVhbj8gICAgIEBkZWZhdWx0KGZhbHNlKQogIHVwZGF0ZWRfYXQgICAgICAgICAgRGF0ZVRpbWU/ICAgIEB1cGRhdGVkQXQKICBpc0VtYWlsVmVyaWZpZWQgICAgIEJvb2xlYW4/ICAgICBAZGVmYXVsdChmYWxzZSkKICB2ZXJpZmljYXRpb25Db2RlICAgIFN0cmluZz8gICAgICBAdW5pcXVlCiAgc3RhdHVzICAgICAgICAgICAgICBVc2VyU3RhdHVzICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgYWRkcmVzcyAgICAgICAgICAgICBTdHJpbmc/CiAgYmlvICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgZW1haWxOb3RpZmljYXRpb24gICBCb29sZWFuPyAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY2FtcGFpZ25OdGlmaWNhdGlvbiBCb29sZWFuPyAgICAgQGRlZmF1bHQoZmFsc2UpCiAgdGVybXNDb25kaXRpb25zICAgICBCb29sZWFuPyAgICAgQGRlZmF1bHQoZmFsc2UpCiAgYWRkZWRCeSAgICAgICAgICAgICBTdHJpbmc/ICAgICAgQHVuaXF1ZQogIGNpcmNsZU5hbWUgICAgICAgICAgU3RyaW5nPwogIGNpcmNsZUlkICAgICAgICAgICAgU3RyaW5nPwogIG15Q2lyY2xlcyAgICAgICAgICAgQ2lyY2xlc1tdCn0KCm1vZGVsIENpcmNsZXMgewogIGlkICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQoY3VpZCgpKQogIGNyZWF0ZWRfYXQgICAgICAgIERhdGVUaW1lPyAgICAgQGRlZmF1bHQobm93KCkpCiAgY2lyY2xlTmFtZSAgICAgICAgU3RyaW5nPyAgICAgICBAdW5pcXVlCiAgY2lyY2xlRGVzY3JpcHRpb24gU3RyaW5nPyAgICAgICBAZGIuVmFyQ2hhcigxMDAwKQogIGNpcmNsZVNoYXJlTGluayAgIFN0cmluZz8KICB3ZWxsYmVpbmdTY29yZSAgICBTdHJpbmc/CiAgYWN0aXZpdHlMZXZlbCAgICAgQWN0aXZpdHlMZXZlbAogIGNvbXBhbnlVc2VyICAgICAgIENvbXBhbnlVc2VyPyAgQHJlbGF0aW9uKGZpZWxkczogW2NvbXBhbnlVc2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBtYXA6ICJjaXJjbGVzX2NvbXBhbnlfdXNlcl9ma2V5IikKICB1c2VyICAgICAgICAgICAgICBVc2VyPyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBtYXA6ICJjaXJjbGVzX3VzZXJfZmtleSIpCiAgY29tcGFueVVzZXJJZCAgICAgU3RyaW5nPwogIHVzZXJJZCAgICAgICAgICAgIFN0cmluZz8KICBjcmVhdGVkQnkgICAgICAgICBTdHJpbmc/CiAgY2lyY2xlU3RhdHVzICAgICAgVXNlclN0YXR1cyAgICBAZGVmYXVsdChpbmFjdGl2ZSkKICBjaXJjbGVOb3MgICAgICAgICBTdHJpbmc/CgogIEBAdW5pcXVlKFtpZCwgY2lyY2xlTmFtZV0pCn0KCmVudW0gU3lzdGVtUm9sZSB7CiAgc3VwZXJBZG1pbgogIGFkbWluCiAgdXNlcgp9CgplbnVtIFVzZXJHZW5kZXIgewogIG1hbGUKICBmZW1hbGUKfQoKZW51bSBVc2VyU3RhdHVzIHsKICBhY3RpdmUKICBwZW5kaW5nCiAgaW5hY3RpdmUKfQoKZW51bSBBY2NvdW50U3RhdHVzIHsKICB2ZXJpZmllZAogIHVudmVyaWZpZWQKfQoKZW51bSBDaXJjbGVTdGF0dXMgewogIG9uZ29pbmcKICBjb21wbGV0ZWQKICB1bmVucm9sbGVkCn0KCmVudW0gQWN0aXZpdHlMZXZlbCB7CiAgaGlnaAogIG1vZGVyYXRlCiAgZXhjZWxsZW50CiAgbW9kZXJhdGVseUhpZ2gKICBsb3cKfQoKZW51bSBVc2VyQWNjb3VudCB7CiAgcGVyc29uYWxVc2VyCiAgY2xpZW50VXNlcgp9CgplbnVtIE1haXRhbFN0YXR1cyB7CiAgbWFycmllZAogIHNpbmdsZQogIGRpdm9yY2UKfQo=",
  "inlineSchemaHash": "657e435f8a54a98fa7776496519e32d664eaa57a8a9b2ebc5a934706c515c2c0",
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"CompanyUser\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"industry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressCity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addressState\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"membersList\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_circle\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Circles\",\"relationName\":\"CirclesToCompanyUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ageRange\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ethnicity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserGender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maritalStatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disability\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserAccount\",\"default\":\"personalUser\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobRole\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SystemRole\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passwordResetCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"CompanyUserToUser\",\"relationFromFields\":[\"createdBy\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLogin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passportImg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isActive\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"isEmailVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailNotification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"campaignNtification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"termsConditions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addedBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"myCircles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Circles\",\"relationName\":\"CirclesToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Circles\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleDescription\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleShareLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wellbeingScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActivityLevel\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUser\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CompanyUser\",\"relationName\":\"CirclesToCompanyUser\",\"relationFromFields\":[\"companyUserId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CirclesToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserStatus\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circleNos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id\",\"circleName\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id\",\"circleName\"]}],\"isGenerated\":false}},\"enums\":{\"SystemRole\":{\"values\":[{\"name\":\"superAdmin\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"user\",\"dbName\":null}],\"dbName\":null},\"UserGender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"UserStatus\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"pending\",\"dbName\":null},{\"name\":\"inactive\",\"dbName\":null}],\"dbName\":null},\"AccountStatus\":{\"values\":[{\"name\":\"verified\",\"dbName\":null},{\"name\":\"unverified\",\"dbName\":null}],\"dbName\":null},\"CircleStatus\":{\"values\":[{\"name\":\"ongoing\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"unenrolled\",\"dbName\":null}],\"dbName\":null},\"ActivityLevel\":{\"values\":[{\"name\":\"high\",\"dbName\":null},{\"name\":\"moderate\",\"dbName\":null},{\"name\":\"excellent\",\"dbName\":null},{\"name\":\"moderatelyHigh\",\"dbName\":null},{\"name\":\"low\",\"dbName\":null}],\"dbName\":null},\"UserAccount\":{\"values\":[{\"name\":\"personalUser\",\"dbName\":null},{\"name\":\"clientUser\",\"dbName\":null}],\"dbName\":null},\"MaitalStatus\":{\"values\":[{\"name\":\"married\",\"dbName\":null},{\"name\":\"single\",\"dbName\":null},{\"name\":\"divorce\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

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
