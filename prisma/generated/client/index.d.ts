
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model EmpyloUser
 * 
 */
export type EmpyloUser = $Result.DefaultSelection<Prisma.$EmpyloUserPayload>
/**
 * Model CompanyUser
 * 
 */
export type CompanyUser = $Result.DefaultSelection<Prisma.$CompanyUserPayload>
/**
 * Model CompanyCircles
 * 
 */
export type CompanyCircles = $Result.DefaultSelection<Prisma.$CompanyCirclesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserCircles
 * 
 */
export type UserCircles = $Result.DefaultSelection<Prisma.$UserCirclesPayload>
/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model ScoreDetail
 * 
 */
export type ScoreDetail = $Result.DefaultSelection<Prisma.$ScoreDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SystemRole: {
  superAdmin: 'superAdmin',
  admin: 'admin',
  user: 'user',
  company: 'company'
};

export type SystemRole = (typeof SystemRole)[keyof typeof SystemRole]


export const UserStatus: {
  active: 'active',
  pending: 'pending',
  inactive: 'inactive'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserGender: {
  male: 'male',
  female: 'female'
};

export type UserGender = (typeof UserGender)[keyof typeof UserGender]


export const MaitalStatus: {
  married: 'married',
  single: 'single',
  divorce: 'divorce'
};

export type MaitalStatus = (typeof MaitalStatus)[keyof typeof MaitalStatus]


export const ActivityLevel: {
  high: 'high',
  moderate: 'moderate',
  excellent: 'excellent',
  moderatelyHigh: 'moderatelyHigh',
  low: 'low'
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel]


export const CircleStatus: {
  ongoing: 'ongoing',
  completed: 'completed',
  unenrolled: 'unenrolled'
};

export type CircleStatus = (typeof CircleStatus)[keyof typeof CircleStatus]


export const UserAccount: {
  personalUser: 'personalUser',
  clientUser: 'clientUser'
};

export type UserAccount = (typeof UserAccount)[keyof typeof UserAccount]


export const AssessmentType: {
  weekly: 'weekly',
  dailyCheckin: 'dailyCheckin'
};

export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType]

}

export type SystemRole = $Enums.SystemRole

export const SystemRole: typeof $Enums.SystemRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserGender = $Enums.UserGender

export const UserGender: typeof $Enums.UserGender

export type MaitalStatus = $Enums.MaitalStatus

export const MaitalStatus: typeof $Enums.MaitalStatus

export type ActivityLevel = $Enums.ActivityLevel

export const ActivityLevel: typeof $Enums.ActivityLevel

export type CircleStatus = $Enums.CircleStatus

export const CircleStatus: typeof $Enums.CircleStatus

export type UserAccount = $Enums.UserAccount

export const UserAccount: typeof $Enums.UserAccount

export type AssessmentType = $Enums.AssessmentType

export const AssessmentType: typeof $Enums.AssessmentType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more EmpyloUsers
 * const empyloUsers = await prisma.empyloUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more EmpyloUsers
   * const empyloUsers = await prisma.empyloUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.empyloUser`: Exposes CRUD operations for the **EmpyloUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmpyloUsers
    * const empyloUsers = await prisma.empyloUser.findMany()
    * ```
    */
  get empyloUser(): Prisma.EmpyloUserDelegate<ExtArgs>;

  /**
   * `prisma.companyUser`: Exposes CRUD operations for the **CompanyUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyUsers
    * const companyUsers = await prisma.companyUser.findMany()
    * ```
    */
  get companyUser(): Prisma.CompanyUserDelegate<ExtArgs>;

  /**
   * `prisma.companyCircles`: Exposes CRUD operations for the **CompanyCircles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyCircles
    * const companyCircles = await prisma.companyCircles.findMany()
    * ```
    */
  get companyCircles(): Prisma.CompanyCirclesDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userCircles`: Exposes CRUD operations for the **UserCircles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCircles
    * const userCircles = await prisma.userCircles.findMany()
    * ```
    */
  get userCircles(): Prisma.UserCirclesDelegate<ExtArgs>;

  /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs>;

  /**
   * `prisma.scoreDetail`: Exposes CRUD operations for the **ScoreDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoreDetails
    * const scoreDetails = await prisma.scoreDetail.findMany()
    * ```
    */
  get scoreDetail(): Prisma.ScoreDetailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    EmpyloUser: 'EmpyloUser',
    CompanyUser: 'CompanyUser',
    CompanyCircles: 'CompanyCircles',
    User: 'User',
    UserCircles: 'UserCircles',
    Assessment: 'Assessment',
    ScoreDetail: 'ScoreDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'empyloUser' | 'companyUser' | 'companyCircles' | 'user' | 'userCircles' | 'assessment' | 'scoreDetail'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      EmpyloUser: {
        payload: Prisma.$EmpyloUserPayload<ExtArgs>
        fields: Prisma.EmpyloUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpyloUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpyloUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload>
          }
          findFirst: {
            args: Prisma.EmpyloUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpyloUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload>
          }
          findMany: {
            args: Prisma.EmpyloUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload>[]
          }
          create: {
            args: Prisma.EmpyloUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload>
          }
          createMany: {
            args: Prisma.EmpyloUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmpyloUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload>
          }
          update: {
            args: Prisma.EmpyloUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload>
          }
          deleteMany: {
            args: Prisma.EmpyloUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmpyloUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmpyloUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmpyloUserPayload>
          }
          aggregate: {
            args: Prisma.EmpyloUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmpyloUser>
          }
          groupBy: {
            args: Prisma.EmpyloUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmpyloUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpyloUserCountArgs<ExtArgs>,
            result: $Utils.Optional<EmpyloUserCountAggregateOutputType> | number
          }
        }
      }
      CompanyUser: {
        payload: Prisma.$CompanyUserPayload<ExtArgs>
        fields: Prisma.CompanyUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>
          }
          findFirst: {
            args: Prisma.CompanyUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>
          }
          findMany: {
            args: Prisma.CompanyUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>[]
          }
          create: {
            args: Prisma.CompanyUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>
          }
          createMany: {
            args: Prisma.CompanyUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>
          }
          update: {
            args: Prisma.CompanyUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>
          }
          deleteMany: {
            args: Prisma.CompanyUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyUserPayload>
          }
          aggregate: {
            args: Prisma.CompanyUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompanyUser>
          }
          groupBy: {
            args: Prisma.CompanyUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyUserCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyUserCountAggregateOutputType> | number
          }
        }
      }
      CompanyCircles: {
        payload: Prisma.$CompanyCirclesPayload<ExtArgs>
        fields: Prisma.CompanyCirclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyCirclesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyCirclesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload>
          }
          findFirst: {
            args: Prisma.CompanyCirclesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyCirclesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload>
          }
          findMany: {
            args: Prisma.CompanyCirclesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload>[]
          }
          create: {
            args: Prisma.CompanyCirclesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload>
          }
          createMany: {
            args: Prisma.CompanyCirclesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CompanyCirclesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload>
          }
          update: {
            args: Prisma.CompanyCirclesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload>
          }
          deleteMany: {
            args: Prisma.CompanyCirclesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyCirclesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CompanyCirclesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CompanyCirclesPayload>
          }
          aggregate: {
            args: Prisma.CompanyCirclesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCompanyCircles>
          }
          groupBy: {
            args: Prisma.CompanyCirclesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCirclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCirclesCountArgs<ExtArgs>,
            result: $Utils.Optional<CompanyCirclesCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserCircles: {
        payload: Prisma.$UserCirclesPayload<ExtArgs>
        fields: Prisma.UserCirclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCirclesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCirclesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload>
          }
          findFirst: {
            args: Prisma.UserCirclesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCirclesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload>
          }
          findMany: {
            args: Prisma.UserCirclesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload>[]
          }
          create: {
            args: Prisma.UserCirclesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload>
          }
          createMany: {
            args: Prisma.UserCirclesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserCirclesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload>
          }
          update: {
            args: Prisma.UserCirclesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload>
          }
          deleteMany: {
            args: Prisma.UserCirclesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserCirclesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserCirclesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserCirclesPayload>
          }
          aggregate: {
            args: Prisma.UserCirclesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserCircles>
          }
          groupBy: {
            args: Prisma.UserCirclesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserCirclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCirclesCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCirclesCountAggregateOutputType> | number
          }
        }
      }
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      ScoreDetail: {
        payload: Prisma.$ScoreDetailPayload<ExtArgs>
        fields: Prisma.ScoreDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload>
          }
          findFirst: {
            args: Prisma.ScoreDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload>
          }
          findMany: {
            args: Prisma.ScoreDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload>[]
          }
          create: {
            args: Prisma.ScoreDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload>
          }
          createMany: {
            args: Prisma.ScoreDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ScoreDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload>
          }
          update: {
            args: Prisma.ScoreDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload>
          }
          deleteMany: {
            args: Prisma.ScoreDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ScoreDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ScoreDetailPayload>
          }
          aggregate: {
            args: Prisma.ScoreDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateScoreDetail>
          }
          groupBy: {
            args: Prisma.ScoreDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ScoreDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<ScoreDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmpyloUserCountOutputType
   */

  export type EmpyloUserCountOutputType = {
    weeklyAssessment: number
    checkinAssessment: number
  }

  export type EmpyloUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklyAssessment?: boolean | EmpyloUserCountOutputTypeCountWeeklyAssessmentArgs
    checkinAssessment?: boolean | EmpyloUserCountOutputTypeCountCheckinAssessmentArgs
  }

  // Custom InputTypes

  /**
   * EmpyloUserCountOutputType without action
   */
  export type EmpyloUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUserCountOutputType
     */
    select?: EmpyloUserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EmpyloUserCountOutputType without action
   */
  export type EmpyloUserCountOutputTypeCountWeeklyAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }


  /**
   * EmpyloUserCountOutputType without action
   */
  export type EmpyloUserCountOutputTypeCountCheckinAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }



  /**
   * Count Type CompanyUserCountOutputType
   */

  export type CompanyUserCountOutputType = {
    membersList: number
    company_circle: number
  }

  export type CompanyUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersList?: boolean | CompanyUserCountOutputTypeCountMembersListArgs
    company_circle?: boolean | CompanyUserCountOutputTypeCountCompany_circleArgs
  }

  // Custom InputTypes

  /**
   * CompanyUserCountOutputType without action
   */
  export type CompanyUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUserCountOutputType
     */
    select?: CompanyUserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyUserCountOutputType without action
   */
  export type CompanyUserCountOutputTypeCountMembersListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * CompanyUserCountOutputType without action
   */
  export type CompanyUserCountOutputTypeCountCompany_circleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyCirclesWhereInput
  }



  /**
   * Count Type CompanyCirclesCountOutputType
   */

  export type CompanyCirclesCountOutputType = {
    memberList: number
  }

  export type CompanyCirclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberList?: boolean | CompanyCirclesCountOutputTypeCountMemberListArgs
  }

  // Custom InputTypes

  /**
   * CompanyCirclesCountOutputType without action
   */
  export type CompanyCirclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCirclesCountOutputType
     */
    select?: CompanyCirclesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CompanyCirclesCountOutputType without action
   */
  export type CompanyCirclesCountOutputTypeCountMemberListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    coyCircleAttachedTo: number
    userCircles: number
    otherUserCirclesIn: number
    listOfScoreDetail: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coyCircleAttachedTo?: boolean | UserCountOutputTypeCountCoyCircleAttachedToArgs
    userCircles?: boolean | UserCountOutputTypeCountUserCirclesArgs
    otherUserCirclesIn?: boolean | UserCountOutputTypeCountOtherUserCirclesInArgs
    listOfScoreDetail?: boolean | UserCountOutputTypeCountListOfScoreDetailArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoyCircleAttachedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyCirclesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCirclesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtherUserCirclesInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCirclesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListOfScoreDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreDetailWhereInput
  }



  /**
   * Count Type UserCirclesCountOutputType
   */

  export type UserCirclesCountOutputType = {
    memberList: number
  }

  export type UserCirclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberList?: boolean | UserCirclesCountOutputTypeCountMemberListArgs
  }

  // Custom InputTypes

  /**
   * UserCirclesCountOutputType without action
   */
  export type UserCirclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCirclesCountOutputType
     */
    select?: UserCirclesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCirclesCountOutputType without action
   */
  export type UserCirclesCountOutputTypeCountMemberListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Models
   */

  /**
   * Model EmpyloUser
   */

  export type AggregateEmpyloUser = {
    _count: EmpyloUserCountAggregateOutputType | null
    _min: EmpyloUserMinAggregateOutputType | null
    _max: EmpyloUserMaxAggregateOutputType | null
  }

  export type EmpyloUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    role: $Enums.SystemRole | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    status: $Enums.UserStatus | null
    gender: $Enums.UserGender | null
    maritalStatus: $Enums.MaitalStatus | null
    empyloID: string | null
    passwordResetCode: string | null
    password: string | null
  }

  export type EmpyloUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    role: $Enums.SystemRole | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    status: $Enums.UserStatus | null
    gender: $Enums.UserGender | null
    maritalStatus: $Enums.MaitalStatus | null
    empyloID: string | null
    passwordResetCode: string | null
    password: string | null
  }

  export type EmpyloUserCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    firstName: number
    lastName: number
    phoneNumber: number
    role: number
    lastLogin: number
    passportImg: number
    isActive: number
    updated_at: number
    isEmailVerified: number
    verificationCode: number
    status: number
    gender: number
    maritalStatus: number
    empyloID: number
    permissions: number
    passwordResetCode: number
    password: number
    _all: number
  }


  export type EmpyloUserMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    role?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    status?: true
    gender?: true
    maritalStatus?: true
    empyloID?: true
    passwordResetCode?: true
    password?: true
  }

  export type EmpyloUserMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    role?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    status?: true
    gender?: true
    maritalStatus?: true
    empyloID?: true
    passwordResetCode?: true
    password?: true
  }

  export type EmpyloUserCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    role?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    status?: true
    gender?: true
    maritalStatus?: true
    empyloID?: true
    permissions?: true
    passwordResetCode?: true
    password?: true
    _all?: true
  }

  export type EmpyloUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmpyloUser to aggregate.
     */
    where?: EmpyloUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmpyloUsers to fetch.
     */
    orderBy?: EmpyloUserOrderByWithRelationInput | EmpyloUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpyloUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmpyloUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmpyloUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmpyloUsers
    **/
    _count?: true | EmpyloUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpyloUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpyloUserMaxAggregateInputType
  }

  export type GetEmpyloUserAggregateType<T extends EmpyloUserAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpyloUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpyloUser[P]>
      : GetScalarType<T[P], AggregateEmpyloUser[P]>
  }




  export type EmpyloUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpyloUserWhereInput
    orderBy?: EmpyloUserOrderByWithAggregationInput | EmpyloUserOrderByWithAggregationInput[]
    by: EmpyloUserScalarFieldEnum[] | EmpyloUserScalarFieldEnum
    having?: EmpyloUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpyloUserCountAggregateInputType | true
    _min?: EmpyloUserMinAggregateInputType
    _max?: EmpyloUserMaxAggregateInputType
  }

  export type EmpyloUserGroupByOutputType = {
    id: string
    email: string
    created_at: Date | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    role: $Enums.SystemRole
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    status: $Enums.UserStatus
    gender: $Enums.UserGender | null
    maritalStatus: $Enums.MaitalStatus | null
    empyloID: string | null
    permissions: string[]
    passwordResetCode: string | null
    password: string | null
    _count: EmpyloUserCountAggregateOutputType | null
    _min: EmpyloUserMinAggregateOutputType | null
    _max: EmpyloUserMaxAggregateOutputType | null
  }

  type GetEmpyloUserGroupByPayload<T extends EmpyloUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpyloUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpyloUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpyloUserGroupByOutputType[P]>
            : GetScalarType<T[P], EmpyloUserGroupByOutputType[P]>
        }
      >
    >


  export type EmpyloUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    role?: boolean
    lastLogin?: boolean
    passportImg?: boolean
    isActive?: boolean
    updated_at?: boolean
    isEmailVerified?: boolean
    verificationCode?: boolean
    status?: boolean
    gender?: boolean
    maritalStatus?: boolean
    empyloID?: boolean
    permissions?: boolean
    passwordResetCode?: boolean
    password?: boolean
    weeklyAssessment?: boolean | EmpyloUser$weeklyAssessmentArgs<ExtArgs>
    checkinAssessment?: boolean | EmpyloUser$checkinAssessmentArgs<ExtArgs>
    _count?: boolean | EmpyloUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empyloUser"]>

  export type EmpyloUserSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    role?: boolean
    lastLogin?: boolean
    passportImg?: boolean
    isActive?: boolean
    updated_at?: boolean
    isEmailVerified?: boolean
    verificationCode?: boolean
    status?: boolean
    gender?: boolean
    maritalStatus?: boolean
    empyloID?: boolean
    permissions?: boolean
    passwordResetCode?: boolean
    password?: boolean
  }

  export type EmpyloUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklyAssessment?: boolean | EmpyloUser$weeklyAssessmentArgs<ExtArgs>
    checkinAssessment?: boolean | EmpyloUser$checkinAssessmentArgs<ExtArgs>
    _count?: boolean | EmpyloUserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EmpyloUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmpyloUser"
    objects: {
      weeklyAssessment: Prisma.$AssessmentPayload<ExtArgs>[]
      checkinAssessment: Prisma.$AssessmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      created_at: Date | null
      firstName: string | null
      lastName: string | null
      phoneNumber: string | null
      role: $Enums.SystemRole
      lastLogin: Date | null
      passportImg: string | null
      isActive: boolean | null
      updated_at: Date | null
      isEmailVerified: boolean | null
      verificationCode: string | null
      status: $Enums.UserStatus
      gender: $Enums.UserGender | null
      maritalStatus: $Enums.MaitalStatus | null
      empyloID: string | null
      permissions: string[]
      passwordResetCode: string | null
      password: string | null
    }, ExtArgs["result"]["empyloUser"]>
    composites: {}
  }


  type EmpyloUserGetPayload<S extends boolean | null | undefined | EmpyloUserDefaultArgs> = $Result.GetResult<Prisma.$EmpyloUserPayload, S>

  type EmpyloUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmpyloUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmpyloUserCountAggregateInputType | true
    }

  export interface EmpyloUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmpyloUser'], meta: { name: 'EmpyloUser' } }
    /**
     * Find zero or one EmpyloUser that matches the filter.
     * @param {EmpyloUserFindUniqueArgs} args - Arguments to find a EmpyloUser
     * @example
     * // Get one EmpyloUser
     * const empyloUser = await prisma.empyloUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmpyloUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmpyloUserFindUniqueArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one EmpyloUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmpyloUserFindUniqueOrThrowArgs} args - Arguments to find a EmpyloUser
     * @example
     * // Get one EmpyloUser
     * const empyloUser = await prisma.empyloUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmpyloUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpyloUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first EmpyloUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpyloUserFindFirstArgs} args - Arguments to find a EmpyloUser
     * @example
     * // Get one EmpyloUser
     * const empyloUser = await prisma.empyloUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmpyloUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpyloUserFindFirstArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first EmpyloUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpyloUserFindFirstOrThrowArgs} args - Arguments to find a EmpyloUser
     * @example
     * // Get one EmpyloUser
     * const empyloUser = await prisma.empyloUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmpyloUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpyloUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more EmpyloUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpyloUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmpyloUsers
     * const empyloUsers = await prisma.empyloUser.findMany()
     * 
     * // Get first 10 EmpyloUsers
     * const empyloUsers = await prisma.empyloUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empyloUserWithIdOnly = await prisma.empyloUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmpyloUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpyloUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a EmpyloUser.
     * @param {EmpyloUserCreateArgs} args - Arguments to create a EmpyloUser.
     * @example
     * // Create one EmpyloUser
     * const EmpyloUser = await prisma.empyloUser.create({
     *   data: {
     *     // ... data to create a EmpyloUser
     *   }
     * })
     * 
    **/
    create<T extends EmpyloUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmpyloUserCreateArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many EmpyloUsers.
     *     @param {EmpyloUserCreateManyArgs} args - Arguments to create many EmpyloUsers.
     *     @example
     *     // Create many EmpyloUsers
     *     const empyloUser = await prisma.empyloUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmpyloUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpyloUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmpyloUser.
     * @param {EmpyloUserDeleteArgs} args - Arguments to delete one EmpyloUser.
     * @example
     * // Delete one EmpyloUser
     * const EmpyloUser = await prisma.empyloUser.delete({
     *   where: {
     *     // ... filter to delete one EmpyloUser
     *   }
     * })
     * 
    **/
    delete<T extends EmpyloUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmpyloUserDeleteArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one EmpyloUser.
     * @param {EmpyloUserUpdateArgs} args - Arguments to update one EmpyloUser.
     * @example
     * // Update one EmpyloUser
     * const empyloUser = await prisma.empyloUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmpyloUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmpyloUserUpdateArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more EmpyloUsers.
     * @param {EmpyloUserDeleteManyArgs} args - Arguments to filter EmpyloUsers to delete.
     * @example
     * // Delete a few EmpyloUsers
     * const { count } = await prisma.empyloUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmpyloUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmpyloUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmpyloUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpyloUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmpyloUsers
     * const empyloUser = await prisma.empyloUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmpyloUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmpyloUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmpyloUser.
     * @param {EmpyloUserUpsertArgs} args - Arguments to update or create a EmpyloUser.
     * @example
     * // Update or create a EmpyloUser
     * const empyloUser = await prisma.empyloUser.upsert({
     *   create: {
     *     // ... data to create a EmpyloUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmpyloUser we want to update
     *   }
     * })
    **/
    upsert<T extends EmpyloUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmpyloUserUpsertArgs<ExtArgs>>
    ): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of EmpyloUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpyloUserCountArgs} args - Arguments to filter EmpyloUsers to count.
     * @example
     * // Count the number of EmpyloUsers
     * const count = await prisma.empyloUser.count({
     *   where: {
     *     // ... the filter for the EmpyloUsers we want to count
     *   }
     * })
    **/
    count<T extends EmpyloUserCountArgs>(
      args?: Subset<T, EmpyloUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpyloUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmpyloUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpyloUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmpyloUserAggregateArgs>(args: Subset<T, EmpyloUserAggregateArgs>): Prisma.PrismaPromise<GetEmpyloUserAggregateType<T>>

    /**
     * Group by EmpyloUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpyloUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmpyloUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpyloUserGroupByArgs['orderBy'] }
        : { orderBy?: EmpyloUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmpyloUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpyloUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmpyloUser model
   */
  readonly fields: EmpyloUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmpyloUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpyloUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    weeklyAssessment<T extends EmpyloUser$weeklyAssessmentArgs<ExtArgs> = {}>(args?: Subset<T, EmpyloUser$weeklyAssessmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    checkinAssessment<T extends EmpyloUser$checkinAssessmentArgs<ExtArgs> = {}>(args?: Subset<T, EmpyloUser$checkinAssessmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the EmpyloUser model
   */ 
  interface EmpyloUserFieldRefs {
    readonly id: FieldRef<"EmpyloUser", 'String'>
    readonly email: FieldRef<"EmpyloUser", 'String'>
    readonly created_at: FieldRef<"EmpyloUser", 'DateTime'>
    readonly firstName: FieldRef<"EmpyloUser", 'String'>
    readonly lastName: FieldRef<"EmpyloUser", 'String'>
    readonly phoneNumber: FieldRef<"EmpyloUser", 'String'>
    readonly role: FieldRef<"EmpyloUser", 'SystemRole'>
    readonly lastLogin: FieldRef<"EmpyloUser", 'DateTime'>
    readonly passportImg: FieldRef<"EmpyloUser", 'String'>
    readonly isActive: FieldRef<"EmpyloUser", 'Boolean'>
    readonly updated_at: FieldRef<"EmpyloUser", 'DateTime'>
    readonly isEmailVerified: FieldRef<"EmpyloUser", 'Boolean'>
    readonly verificationCode: FieldRef<"EmpyloUser", 'String'>
    readonly status: FieldRef<"EmpyloUser", 'UserStatus'>
    readonly gender: FieldRef<"EmpyloUser", 'UserGender'>
    readonly maritalStatus: FieldRef<"EmpyloUser", 'MaitalStatus'>
    readonly empyloID: FieldRef<"EmpyloUser", 'String'>
    readonly permissions: FieldRef<"EmpyloUser", 'String[]'>
    readonly passwordResetCode: FieldRef<"EmpyloUser", 'String'>
    readonly password: FieldRef<"EmpyloUser", 'String'>
  }
    

  // Custom InputTypes

  /**
   * EmpyloUser findUnique
   */
  export type EmpyloUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * Filter, which EmpyloUser to fetch.
     */
    where: EmpyloUserWhereUniqueInput
  }


  /**
   * EmpyloUser findUniqueOrThrow
   */
  export type EmpyloUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * Filter, which EmpyloUser to fetch.
     */
    where: EmpyloUserWhereUniqueInput
  }


  /**
   * EmpyloUser findFirst
   */
  export type EmpyloUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * Filter, which EmpyloUser to fetch.
     */
    where?: EmpyloUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmpyloUsers to fetch.
     */
    orderBy?: EmpyloUserOrderByWithRelationInput | EmpyloUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmpyloUsers.
     */
    cursor?: EmpyloUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmpyloUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmpyloUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmpyloUsers.
     */
    distinct?: EmpyloUserScalarFieldEnum | EmpyloUserScalarFieldEnum[]
  }


  /**
   * EmpyloUser findFirstOrThrow
   */
  export type EmpyloUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * Filter, which EmpyloUser to fetch.
     */
    where?: EmpyloUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmpyloUsers to fetch.
     */
    orderBy?: EmpyloUserOrderByWithRelationInput | EmpyloUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmpyloUsers.
     */
    cursor?: EmpyloUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmpyloUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmpyloUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmpyloUsers.
     */
    distinct?: EmpyloUserScalarFieldEnum | EmpyloUserScalarFieldEnum[]
  }


  /**
   * EmpyloUser findMany
   */
  export type EmpyloUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * Filter, which EmpyloUsers to fetch.
     */
    where?: EmpyloUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmpyloUsers to fetch.
     */
    orderBy?: EmpyloUserOrderByWithRelationInput | EmpyloUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmpyloUsers.
     */
    cursor?: EmpyloUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmpyloUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmpyloUsers.
     */
    skip?: number
    distinct?: EmpyloUserScalarFieldEnum | EmpyloUserScalarFieldEnum[]
  }


  /**
   * EmpyloUser create
   */
  export type EmpyloUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * The data needed to create a EmpyloUser.
     */
    data: XOR<EmpyloUserCreateInput, EmpyloUserUncheckedCreateInput>
  }


  /**
   * EmpyloUser createMany
   */
  export type EmpyloUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmpyloUsers.
     */
    data: EmpyloUserCreateManyInput | EmpyloUserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * EmpyloUser update
   */
  export type EmpyloUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * The data needed to update a EmpyloUser.
     */
    data: XOR<EmpyloUserUpdateInput, EmpyloUserUncheckedUpdateInput>
    /**
     * Choose, which EmpyloUser to update.
     */
    where: EmpyloUserWhereUniqueInput
  }


  /**
   * EmpyloUser updateMany
   */
  export type EmpyloUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmpyloUsers.
     */
    data: XOR<EmpyloUserUpdateManyMutationInput, EmpyloUserUncheckedUpdateManyInput>
    /**
     * Filter which EmpyloUsers to update
     */
    where?: EmpyloUserWhereInput
  }


  /**
   * EmpyloUser upsert
   */
  export type EmpyloUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * The filter to search for the EmpyloUser to update in case it exists.
     */
    where: EmpyloUserWhereUniqueInput
    /**
     * In case the EmpyloUser found by the `where` argument doesn't exist, create a new EmpyloUser with this data.
     */
    create: XOR<EmpyloUserCreateInput, EmpyloUserUncheckedCreateInput>
    /**
     * In case the EmpyloUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpyloUserUpdateInput, EmpyloUserUncheckedUpdateInput>
  }


  /**
   * EmpyloUser delete
   */
  export type EmpyloUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    /**
     * Filter which EmpyloUser to delete.
     */
    where: EmpyloUserWhereUniqueInput
  }


  /**
   * EmpyloUser deleteMany
   */
  export type EmpyloUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmpyloUsers to delete
     */
    where?: EmpyloUserWhereInput
  }


  /**
   * EmpyloUser.weeklyAssessment
   */
  export type EmpyloUser$weeklyAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }


  /**
   * EmpyloUser.checkinAssessment
   */
  export type EmpyloUser$checkinAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }


  /**
   * EmpyloUser without action
   */
  export type EmpyloUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
  }



  /**
   * Model CompanyUser
   */

  export type AggregateCompanyUser = {
    _count: CompanyUserCountAggregateOutputType | null
    _min: CompanyUserMinAggregateOutputType | null
    _max: CompanyUserMaxAggregateOutputType | null
  }

  export type CompanyUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    companyName: string | null
    phoneNumber: string | null
    password: string | null
    passwordResetCode: string | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    industry: string | null
    website: string | null
    companyDescription: string | null
    status: $Enums.UserStatus | null
    role: $Enums.SystemRole | null
    address: string | null
    addressCity: string | null
    addressState: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
    socialId: string | null
    socialProvider: string | null
  }

  export type CompanyUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    companyName: string | null
    phoneNumber: string | null
    password: string | null
    passwordResetCode: string | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    industry: string | null
    website: string | null
    companyDescription: string | null
    status: $Enums.UserStatus | null
    role: $Enums.SystemRole | null
    address: string | null
    addressCity: string | null
    addressState: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
    socialId: string | null
    socialProvider: string | null
  }

  export type CompanyUserCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    companyName: number
    phoneNumber: number
    password: number
    passwordResetCode: number
    lastLogin: number
    passportImg: number
    isActive: number
    updated_at: number
    isEmailVerified: number
    verificationCode: number
    industry: number
    website: number
    companyDescription: number
    status: number
    role: number
    address: number
    addressCity: number
    addressState: number
    emailNotification: number
    campaignNtification: number
    termsConditions: number
    socialId: number
    socialProvider: number
    _all: number
  }


  export type CompanyUserMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    companyName?: true
    phoneNumber?: true
    password?: true
    passwordResetCode?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    industry?: true
    website?: true
    companyDescription?: true
    status?: true
    role?: true
    address?: true
    addressCity?: true
    addressState?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
    socialId?: true
    socialProvider?: true
  }

  export type CompanyUserMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    companyName?: true
    phoneNumber?: true
    password?: true
    passwordResetCode?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    industry?: true
    website?: true
    companyDescription?: true
    status?: true
    role?: true
    address?: true
    addressCity?: true
    addressState?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
    socialId?: true
    socialProvider?: true
  }

  export type CompanyUserCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    companyName?: true
    phoneNumber?: true
    password?: true
    passwordResetCode?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    industry?: true
    website?: true
    companyDescription?: true
    status?: true
    role?: true
    address?: true
    addressCity?: true
    addressState?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
    socialId?: true
    socialProvider?: true
    _all?: true
  }

  export type CompanyUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyUser to aggregate.
     */
    where?: CompanyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?: CompanyUserOrderByWithRelationInput | CompanyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyUsers
    **/
    _count?: true | CompanyUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyUserMaxAggregateInputType
  }

  export type GetCompanyUserAggregateType<T extends CompanyUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyUser[P]>
      : GetScalarType<T[P], AggregateCompanyUser[P]>
  }




  export type CompanyUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyUserWhereInput
    orderBy?: CompanyUserOrderByWithAggregationInput | CompanyUserOrderByWithAggregationInput[]
    by: CompanyUserScalarFieldEnum[] | CompanyUserScalarFieldEnum
    having?: CompanyUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyUserCountAggregateInputType | true
    _min?: CompanyUserMinAggregateInputType
    _max?: CompanyUserMaxAggregateInputType
  }

  export type CompanyUserGroupByOutputType = {
    id: string
    email: string
    created_at: Date | null
    companyName: string | null
    phoneNumber: string | null
    password: string | null
    passwordResetCode: string | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    industry: string | null
    website: string | null
    companyDescription: string | null
    status: $Enums.UserStatus
    role: $Enums.SystemRole
    address: string | null
    addressCity: string | null
    addressState: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
    socialId: string | null
    socialProvider: string | null
    _count: CompanyUserCountAggregateOutputType | null
    _min: CompanyUserMinAggregateOutputType | null
    _max: CompanyUserMaxAggregateOutputType | null
  }

  type GetCompanyUserGroupByPayload<T extends CompanyUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyUserGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyUserGroupByOutputType[P]>
        }
      >
    >


  export type CompanyUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
    companyName?: boolean
    phoneNumber?: boolean
    password?: boolean
    passwordResetCode?: boolean
    lastLogin?: boolean
    passportImg?: boolean
    isActive?: boolean
    updated_at?: boolean
    isEmailVerified?: boolean
    verificationCode?: boolean
    industry?: boolean
    website?: boolean
    companyDescription?: boolean
    status?: boolean
    role?: boolean
    address?: boolean
    addressCity?: boolean
    addressState?: boolean
    emailNotification?: boolean
    campaignNtification?: boolean
    termsConditions?: boolean
    socialId?: boolean
    socialProvider?: boolean
    membersList?: boolean | CompanyUser$membersListArgs<ExtArgs>
    company_circle?: boolean | CompanyUser$company_circleArgs<ExtArgs>
    _count?: boolean | CompanyUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyUser"]>

  export type CompanyUserSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
    companyName?: boolean
    phoneNumber?: boolean
    password?: boolean
    passwordResetCode?: boolean
    lastLogin?: boolean
    passportImg?: boolean
    isActive?: boolean
    updated_at?: boolean
    isEmailVerified?: boolean
    verificationCode?: boolean
    industry?: boolean
    website?: boolean
    companyDescription?: boolean
    status?: boolean
    role?: boolean
    address?: boolean
    addressCity?: boolean
    addressState?: boolean
    emailNotification?: boolean
    campaignNtification?: boolean
    termsConditions?: boolean
    socialId?: boolean
    socialProvider?: boolean
  }

  export type CompanyUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersList?: boolean | CompanyUser$membersListArgs<ExtArgs>
    company_circle?: boolean | CompanyUser$company_circleArgs<ExtArgs>
    _count?: boolean | CompanyUserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyUser"
    objects: {
      membersList: Prisma.$UserPayload<ExtArgs>[]
      company_circle: Prisma.$CompanyCirclesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      created_at: Date | null
      companyName: string | null
      phoneNumber: string | null
      password: string | null
      passwordResetCode: string | null
      lastLogin: Date | null
      passportImg: string | null
      isActive: boolean | null
      updated_at: Date | null
      isEmailVerified: boolean | null
      verificationCode: string | null
      industry: string | null
      website: string | null
      companyDescription: string | null
      status: $Enums.UserStatus
      role: $Enums.SystemRole
      address: string | null
      addressCity: string | null
      addressState: string | null
      emailNotification: boolean | null
      campaignNtification: boolean | null
      termsConditions: boolean | null
      socialId: string | null
      socialProvider: string | null
    }, ExtArgs["result"]["companyUser"]>
    composites: {}
  }


  type CompanyUserGetPayload<S extends boolean | null | undefined | CompanyUserDefaultArgs> = $Result.GetResult<Prisma.$CompanyUserPayload, S>

  type CompanyUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyUserCountAggregateInputType | true
    }

  export interface CompanyUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyUser'], meta: { name: 'CompanyUser' } }
    /**
     * Find zero or one CompanyUser that matches the filter.
     * @param {CompanyUserFindUniqueArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUserFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CompanyUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyUserFindUniqueOrThrowArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CompanyUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserFindFirstArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyUserFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CompanyUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserFindFirstOrThrowArgs} args - Arguments to find a CompanyUser
     * @example
     * // Get one CompanyUser
     * const companyUser = await prisma.companyUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CompanyUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyUsers
     * const companyUsers = await prisma.companyUser.findMany()
     * 
     * // Get first 10 CompanyUsers
     * const companyUsers = await prisma.companyUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyUserWithIdOnly = await prisma.companyUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CompanyUser.
     * @param {CompanyUserCreateArgs} args - Arguments to create a CompanyUser.
     * @example
     * // Create one CompanyUser
     * const CompanyUser = await prisma.companyUser.create({
     *   data: {
     *     // ... data to create a CompanyUser
     *   }
     * })
     * 
    **/
    create<T extends CompanyUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUserCreateArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CompanyUsers.
     *     @param {CompanyUserCreateManyArgs} args - Arguments to create many CompanyUsers.
     *     @example
     *     // Create many CompanyUsers
     *     const companyUser = await prisma.companyUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyUser.
     * @param {CompanyUserDeleteArgs} args - Arguments to delete one CompanyUser.
     * @example
     * // Delete one CompanyUser
     * const CompanyUser = await prisma.companyUser.delete({
     *   where: {
     *     // ... filter to delete one CompanyUser
     *   }
     * })
     * 
    **/
    delete<T extends CompanyUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUserDeleteArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CompanyUser.
     * @param {CompanyUserUpdateArgs} args - Arguments to update one CompanyUser.
     * @example
     * // Update one CompanyUser
     * const companyUser = await prisma.companyUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUserUpdateArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CompanyUsers.
     * @param {CompanyUserDeleteManyArgs} args - Arguments to filter CompanyUsers to delete.
     * @example
     * // Delete a few CompanyUsers
     * const { count } = await prisma.companyUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyUsers
     * const companyUser = await prisma.companyUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyUser.
     * @param {CompanyUserUpsertArgs} args - Arguments to update or create a CompanyUser.
     * @example
     * // Update or create a CompanyUser
     * const companyUser = await prisma.companyUser.upsert({
     *   create: {
     *     // ... data to create a CompanyUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyUser we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyUserUpsertArgs<ExtArgs>>
    ): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CompanyUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserCountArgs} args - Arguments to filter CompanyUsers to count.
     * @example
     * // Count the number of CompanyUsers
     * const count = await prisma.companyUser.count({
     *   where: {
     *     // ... the filter for the CompanyUsers we want to count
     *   }
     * })
    **/
    count<T extends CompanyUserCountArgs>(
      args?: Subset<T, CompanyUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyUserAggregateArgs>(args: Subset<T, CompanyUserAggregateArgs>): Prisma.PrismaPromise<GetCompanyUserAggregateType<T>>

    /**
     * Group by CompanyUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyUserGroupByArgs['orderBy'] }
        : { orderBy?: CompanyUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyUser model
   */
  readonly fields: CompanyUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    membersList<T extends CompanyUser$membersListArgs<ExtArgs> = {}>(args?: Subset<T, CompanyUser$membersListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    company_circle<T extends CompanyUser$company_circleArgs<ExtArgs> = {}>(args?: Subset<T, CompanyUser$company_circleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CompanyUser model
   */ 
  interface CompanyUserFieldRefs {
    readonly id: FieldRef<"CompanyUser", 'String'>
    readonly email: FieldRef<"CompanyUser", 'String'>
    readonly created_at: FieldRef<"CompanyUser", 'DateTime'>
    readonly companyName: FieldRef<"CompanyUser", 'String'>
    readonly phoneNumber: FieldRef<"CompanyUser", 'String'>
    readonly password: FieldRef<"CompanyUser", 'String'>
    readonly passwordResetCode: FieldRef<"CompanyUser", 'String'>
    readonly lastLogin: FieldRef<"CompanyUser", 'DateTime'>
    readonly passportImg: FieldRef<"CompanyUser", 'String'>
    readonly isActive: FieldRef<"CompanyUser", 'Boolean'>
    readonly updated_at: FieldRef<"CompanyUser", 'DateTime'>
    readonly isEmailVerified: FieldRef<"CompanyUser", 'Boolean'>
    readonly verificationCode: FieldRef<"CompanyUser", 'String'>
    readonly industry: FieldRef<"CompanyUser", 'String'>
    readonly website: FieldRef<"CompanyUser", 'String'>
    readonly companyDescription: FieldRef<"CompanyUser", 'String'>
    readonly status: FieldRef<"CompanyUser", 'UserStatus'>
    readonly role: FieldRef<"CompanyUser", 'SystemRole'>
    readonly address: FieldRef<"CompanyUser", 'String'>
    readonly addressCity: FieldRef<"CompanyUser", 'String'>
    readonly addressState: FieldRef<"CompanyUser", 'String'>
    readonly emailNotification: FieldRef<"CompanyUser", 'Boolean'>
    readonly campaignNtification: FieldRef<"CompanyUser", 'Boolean'>
    readonly termsConditions: FieldRef<"CompanyUser", 'Boolean'>
    readonly socialId: FieldRef<"CompanyUser", 'String'>
    readonly socialProvider: FieldRef<"CompanyUser", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CompanyUser findUnique
   */
  export type CompanyUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * Filter, which CompanyUser to fetch.
     */
    where: CompanyUserWhereUniqueInput
  }


  /**
   * CompanyUser findUniqueOrThrow
   */
  export type CompanyUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * Filter, which CompanyUser to fetch.
     */
    where: CompanyUserWhereUniqueInput
  }


  /**
   * CompanyUser findFirst
   */
  export type CompanyUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * Filter, which CompanyUser to fetch.
     */
    where?: CompanyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?: CompanyUserOrderByWithRelationInput | CompanyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyUsers.
     */
    cursor?: CompanyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyUsers.
     */
    distinct?: CompanyUserScalarFieldEnum | CompanyUserScalarFieldEnum[]
  }


  /**
   * CompanyUser findFirstOrThrow
   */
  export type CompanyUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * Filter, which CompanyUser to fetch.
     */
    where?: CompanyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?: CompanyUserOrderByWithRelationInput | CompanyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyUsers.
     */
    cursor?: CompanyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyUsers.
     */
    distinct?: CompanyUserScalarFieldEnum | CompanyUserScalarFieldEnum[]
  }


  /**
   * CompanyUser findMany
   */
  export type CompanyUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * Filter, which CompanyUsers to fetch.
     */
    where?: CompanyUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyUsers to fetch.
     */
    orderBy?: CompanyUserOrderByWithRelationInput | CompanyUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyUsers.
     */
    cursor?: CompanyUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyUsers.
     */
    skip?: number
    distinct?: CompanyUserScalarFieldEnum | CompanyUserScalarFieldEnum[]
  }


  /**
   * CompanyUser create
   */
  export type CompanyUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyUser.
     */
    data: XOR<CompanyUserCreateInput, CompanyUserUncheckedCreateInput>
  }


  /**
   * CompanyUser createMany
   */
  export type CompanyUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyUsers.
     */
    data: CompanyUserCreateManyInput | CompanyUserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CompanyUser update
   */
  export type CompanyUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyUser.
     */
    data: XOR<CompanyUserUpdateInput, CompanyUserUncheckedUpdateInput>
    /**
     * Choose, which CompanyUser to update.
     */
    where: CompanyUserWhereUniqueInput
  }


  /**
   * CompanyUser updateMany
   */
  export type CompanyUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyUsers.
     */
    data: XOR<CompanyUserUpdateManyMutationInput, CompanyUserUncheckedUpdateManyInput>
    /**
     * Filter which CompanyUsers to update
     */
    where?: CompanyUserWhereInput
  }


  /**
   * CompanyUser upsert
   */
  export type CompanyUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyUser to update in case it exists.
     */
    where: CompanyUserWhereUniqueInput
    /**
     * In case the CompanyUser found by the `where` argument doesn't exist, create a new CompanyUser with this data.
     */
    create: XOR<CompanyUserCreateInput, CompanyUserUncheckedCreateInput>
    /**
     * In case the CompanyUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUserUpdateInput, CompanyUserUncheckedUpdateInput>
  }


  /**
   * CompanyUser delete
   */
  export type CompanyUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    /**
     * Filter which CompanyUser to delete.
     */
    where: CompanyUserWhereUniqueInput
  }


  /**
   * CompanyUser deleteMany
   */
  export type CompanyUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyUsers to delete
     */
    where?: CompanyUserWhereInput
  }


  /**
   * CompanyUser.membersList
   */
  export type CompanyUser$membersListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * CompanyUser.company_circle
   */
  export type CompanyUser$company_circleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    where?: CompanyCirclesWhereInput
    orderBy?: CompanyCirclesOrderByWithRelationInput | CompanyCirclesOrderByWithRelationInput[]
    cursor?: CompanyCirclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyCirclesScalarFieldEnum | CompanyCirclesScalarFieldEnum[]
  }


  /**
   * CompanyUser without action
   */
  export type CompanyUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
  }



  /**
   * Model CompanyCircles
   */

  export type AggregateCompanyCircles = {
    _count: CompanyCirclesCountAggregateOutputType | null
    _min: CompanyCirclesMinAggregateOutputType | null
    _max: CompanyCirclesMaxAggregateOutputType | null
  }

  export type CompanyCirclesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    coyCircleName: string | null
    coyCircleDescription: string | null
    coyCircleShareLink: string | null
    wellbeingScore: string | null
    activityLevel: $Enums.ActivityLevel | null
    companyUserId: string | null
    coyCircleStatus: $Enums.UserStatus | null
    coyCircleNos: string | null
    circleImg: string | null
    circleStatus: $Enums.CircleStatus | null
  }

  export type CompanyCirclesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    coyCircleName: string | null
    coyCircleDescription: string | null
    coyCircleShareLink: string | null
    wellbeingScore: string | null
    activityLevel: $Enums.ActivityLevel | null
    companyUserId: string | null
    coyCircleStatus: $Enums.UserStatus | null
    coyCircleNos: string | null
    circleImg: string | null
    circleStatus: $Enums.CircleStatus | null
  }

  export type CompanyCirclesCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    coyCircleName: number
    coyCircleDescription: number
    coyCircleShareLink: number
    wellbeingScore: number
    activityLevel: number
    companyUserId: number
    coyCircleStatus: number
    coyCircleNos: number
    circleImg: number
    circleStatus: number
    _all: number
  }


  export type CompanyCirclesMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    coyCircleName?: true
    coyCircleDescription?: true
    coyCircleShareLink?: true
    wellbeingScore?: true
    activityLevel?: true
    companyUserId?: true
    coyCircleStatus?: true
    coyCircleNos?: true
    circleImg?: true
    circleStatus?: true
  }

  export type CompanyCirclesMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    coyCircleName?: true
    coyCircleDescription?: true
    coyCircleShareLink?: true
    wellbeingScore?: true
    activityLevel?: true
    companyUserId?: true
    coyCircleStatus?: true
    coyCircleNos?: true
    circleImg?: true
    circleStatus?: true
  }

  export type CompanyCirclesCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    coyCircleName?: true
    coyCircleDescription?: true
    coyCircleShareLink?: true
    wellbeingScore?: true
    activityLevel?: true
    companyUserId?: true
    coyCircleStatus?: true
    coyCircleNos?: true
    circleImg?: true
    circleStatus?: true
    _all?: true
  }

  export type CompanyCirclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyCircles to aggregate.
     */
    where?: CompanyCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyCircles to fetch.
     */
    orderBy?: CompanyCirclesOrderByWithRelationInput | CompanyCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyCircles
    **/
    _count?: true | CompanyCirclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyCirclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyCirclesMaxAggregateInputType
  }

  export type GetCompanyCirclesAggregateType<T extends CompanyCirclesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyCircles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyCircles[P]>
      : GetScalarType<T[P], AggregateCompanyCircles[P]>
  }




  export type CompanyCirclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyCirclesWhereInput
    orderBy?: CompanyCirclesOrderByWithAggregationInput | CompanyCirclesOrderByWithAggregationInput[]
    by: CompanyCirclesScalarFieldEnum[] | CompanyCirclesScalarFieldEnum
    having?: CompanyCirclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCirclesCountAggregateInputType | true
    _min?: CompanyCirclesMinAggregateInputType
    _max?: CompanyCirclesMaxAggregateInputType
  }

  export type CompanyCirclesGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    coyCircleName: string | null
    coyCircleDescription: string | null
    coyCircleShareLink: string | null
    wellbeingScore: string | null
    activityLevel: $Enums.ActivityLevel
    companyUserId: string | null
    coyCircleStatus: $Enums.UserStatus
    coyCircleNos: string | null
    circleImg: string | null
    circleStatus: $Enums.CircleStatus | null
    _count: CompanyCirclesCountAggregateOutputType | null
    _min: CompanyCirclesMinAggregateOutputType | null
    _max: CompanyCirclesMaxAggregateOutputType | null
  }

  type GetCompanyCirclesGroupByPayload<T extends CompanyCirclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyCirclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyCirclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyCirclesGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyCirclesGroupByOutputType[P]>
        }
      >
    >


  export type CompanyCirclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    coyCircleName?: boolean
    coyCircleDescription?: boolean
    coyCircleShareLink?: boolean
    wellbeingScore?: boolean
    activityLevel?: boolean
    companyUserId?: boolean
    coyCircleStatus?: boolean
    coyCircleNos?: boolean
    circleImg?: boolean
    circleStatus?: boolean
    companyUser?: boolean | CompanyCircles$companyUserArgs<ExtArgs>
    memberList?: boolean | CompanyCircles$memberListArgs<ExtArgs>
    _count?: boolean | CompanyCirclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyCircles"]>

  export type CompanyCirclesSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    coyCircleName?: boolean
    coyCircleDescription?: boolean
    coyCircleShareLink?: boolean
    wellbeingScore?: boolean
    activityLevel?: boolean
    companyUserId?: boolean
    coyCircleStatus?: boolean
    coyCircleNos?: boolean
    circleImg?: boolean
    circleStatus?: boolean
  }

  export type CompanyCirclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyUser?: boolean | CompanyCircles$companyUserArgs<ExtArgs>
    memberList?: boolean | CompanyCircles$memberListArgs<ExtArgs>
    _count?: boolean | CompanyCirclesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyCirclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyCircles"
    objects: {
      companyUser: Prisma.$CompanyUserPayload<ExtArgs> | null
      memberList: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      coyCircleName: string | null
      coyCircleDescription: string | null
      coyCircleShareLink: string | null
      wellbeingScore: string | null
      activityLevel: $Enums.ActivityLevel
      companyUserId: string | null
      coyCircleStatus: $Enums.UserStatus
      coyCircleNos: string | null
      circleImg: string | null
      circleStatus: $Enums.CircleStatus | null
    }, ExtArgs["result"]["companyCircles"]>
    composites: {}
  }


  type CompanyCirclesGetPayload<S extends boolean | null | undefined | CompanyCirclesDefaultArgs> = $Result.GetResult<Prisma.$CompanyCirclesPayload, S>

  type CompanyCirclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyCirclesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCirclesCountAggregateInputType | true
    }

  export interface CompanyCirclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyCircles'], meta: { name: 'CompanyCircles' } }
    /**
     * Find zero or one CompanyCircles that matches the filter.
     * @param {CompanyCirclesFindUniqueArgs} args - Arguments to find a CompanyCircles
     * @example
     * // Get one CompanyCircles
     * const companyCircles = await prisma.companyCircles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompanyCirclesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCirclesFindUniqueArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CompanyCircles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompanyCirclesFindUniqueOrThrowArgs} args - Arguments to find a CompanyCircles
     * @example
     * // Get one CompanyCircles
     * const companyCircles = await prisma.companyCircles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompanyCirclesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCirclesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CompanyCircles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCirclesFindFirstArgs} args - Arguments to find a CompanyCircles
     * @example
     * // Get one CompanyCircles
     * const companyCircles = await prisma.companyCircles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompanyCirclesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCirclesFindFirstArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CompanyCircles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCirclesFindFirstOrThrowArgs} args - Arguments to find a CompanyCircles
     * @example
     * // Get one CompanyCircles
     * const companyCircles = await prisma.companyCircles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompanyCirclesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCirclesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CompanyCircles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCirclesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyCircles
     * const companyCircles = await prisma.companyCircles.findMany()
     * 
     * // Get first 10 CompanyCircles
     * const companyCircles = await prisma.companyCircles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyCirclesWithIdOnly = await prisma.companyCircles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompanyCirclesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCirclesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CompanyCircles.
     * @param {CompanyCirclesCreateArgs} args - Arguments to create a CompanyCircles.
     * @example
     * // Create one CompanyCircles
     * const CompanyCircles = await prisma.companyCircles.create({
     *   data: {
     *     // ... data to create a CompanyCircles
     *   }
     * })
     * 
    **/
    create<T extends CompanyCirclesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCirclesCreateArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CompanyCircles.
     *     @param {CompanyCirclesCreateManyArgs} args - Arguments to create many CompanyCircles.
     *     @example
     *     // Create many CompanyCircles
     *     const companyCircles = await prisma.companyCircles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompanyCirclesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCirclesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompanyCircles.
     * @param {CompanyCirclesDeleteArgs} args - Arguments to delete one CompanyCircles.
     * @example
     * // Delete one CompanyCircles
     * const CompanyCircles = await prisma.companyCircles.delete({
     *   where: {
     *     // ... filter to delete one CompanyCircles
     *   }
     * })
     * 
    **/
    delete<T extends CompanyCirclesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCirclesDeleteArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CompanyCircles.
     * @param {CompanyCirclesUpdateArgs} args - Arguments to update one CompanyCircles.
     * @example
     * // Update one CompanyCircles
     * const companyCircles = await prisma.companyCircles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompanyCirclesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCirclesUpdateArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CompanyCircles.
     * @param {CompanyCirclesDeleteManyArgs} args - Arguments to filter CompanyCircles to delete.
     * @example
     * // Delete a few CompanyCircles
     * const { count } = await prisma.companyCircles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompanyCirclesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CompanyCirclesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCirclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyCircles
     * const companyCircles = await prisma.companyCircles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompanyCirclesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCirclesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyCircles.
     * @param {CompanyCirclesUpsertArgs} args - Arguments to update or create a CompanyCircles.
     * @example
     * // Update or create a CompanyCircles
     * const companyCircles = await prisma.companyCircles.upsert({
     *   create: {
     *     // ... data to create a CompanyCircles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyCircles we want to update
     *   }
     * })
    **/
    upsert<T extends CompanyCirclesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CompanyCirclesUpsertArgs<ExtArgs>>
    ): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CompanyCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCirclesCountArgs} args - Arguments to filter CompanyCircles to count.
     * @example
     * // Count the number of CompanyCircles
     * const count = await prisma.companyCircles.count({
     *   where: {
     *     // ... the filter for the CompanyCircles we want to count
     *   }
     * })
    **/
    count<T extends CompanyCirclesCountArgs>(
      args?: Subset<T, CompanyCirclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCirclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCirclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyCirclesAggregateArgs>(args: Subset<T, CompanyCirclesAggregateArgs>): Prisma.PrismaPromise<GetCompanyCirclesAggregateType<T>>

    /**
     * Group by CompanyCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCirclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyCirclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyCirclesGroupByArgs['orderBy'] }
        : { orderBy?: CompanyCirclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyCirclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyCirclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyCircles model
   */
  readonly fields: CompanyCirclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyCircles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyCirclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    companyUser<T extends CompanyCircles$companyUserArgs<ExtArgs> = {}>(args?: Subset<T, CompanyCircles$companyUserArgs<ExtArgs>>): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    memberList<T extends CompanyCircles$memberListArgs<ExtArgs> = {}>(args?: Subset<T, CompanyCircles$memberListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CompanyCircles model
   */ 
  interface CompanyCirclesFieldRefs {
    readonly id: FieldRef<"CompanyCircles", 'String'>
    readonly created_at: FieldRef<"CompanyCircles", 'DateTime'>
    readonly updated_at: FieldRef<"CompanyCircles", 'DateTime'>
    readonly coyCircleName: FieldRef<"CompanyCircles", 'String'>
    readonly coyCircleDescription: FieldRef<"CompanyCircles", 'String'>
    readonly coyCircleShareLink: FieldRef<"CompanyCircles", 'String'>
    readonly wellbeingScore: FieldRef<"CompanyCircles", 'String'>
    readonly activityLevel: FieldRef<"CompanyCircles", 'ActivityLevel'>
    readonly companyUserId: FieldRef<"CompanyCircles", 'String'>
    readonly coyCircleStatus: FieldRef<"CompanyCircles", 'UserStatus'>
    readonly coyCircleNos: FieldRef<"CompanyCircles", 'String'>
    readonly circleImg: FieldRef<"CompanyCircles", 'String'>
    readonly circleStatus: FieldRef<"CompanyCircles", 'CircleStatus'>
  }
    

  // Custom InputTypes

  /**
   * CompanyCircles findUnique
   */
  export type CompanyCirclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyCircles to fetch.
     */
    where: CompanyCirclesWhereUniqueInput
  }


  /**
   * CompanyCircles findUniqueOrThrow
   */
  export type CompanyCirclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyCircles to fetch.
     */
    where: CompanyCirclesWhereUniqueInput
  }


  /**
   * CompanyCircles findFirst
   */
  export type CompanyCirclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyCircles to fetch.
     */
    where?: CompanyCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyCircles to fetch.
     */
    orderBy?: CompanyCirclesOrderByWithRelationInput | CompanyCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyCircles.
     */
    cursor?: CompanyCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyCircles.
     */
    distinct?: CompanyCirclesScalarFieldEnum | CompanyCirclesScalarFieldEnum[]
  }


  /**
   * CompanyCircles findFirstOrThrow
   */
  export type CompanyCirclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyCircles to fetch.
     */
    where?: CompanyCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyCircles to fetch.
     */
    orderBy?: CompanyCirclesOrderByWithRelationInput | CompanyCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyCircles.
     */
    cursor?: CompanyCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyCircles.
     */
    distinct?: CompanyCirclesScalarFieldEnum | CompanyCirclesScalarFieldEnum[]
  }


  /**
   * CompanyCircles findMany
   */
  export type CompanyCirclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * Filter, which CompanyCircles to fetch.
     */
    where?: CompanyCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyCircles to fetch.
     */
    orderBy?: CompanyCirclesOrderByWithRelationInput | CompanyCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyCircles.
     */
    cursor?: CompanyCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyCircles.
     */
    skip?: number
    distinct?: CompanyCirclesScalarFieldEnum | CompanyCirclesScalarFieldEnum[]
  }


  /**
   * CompanyCircles create
   */
  export type CompanyCirclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyCircles.
     */
    data?: XOR<CompanyCirclesCreateInput, CompanyCirclesUncheckedCreateInput>
  }


  /**
   * CompanyCircles createMany
   */
  export type CompanyCirclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyCircles.
     */
    data: CompanyCirclesCreateManyInput | CompanyCirclesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CompanyCircles update
   */
  export type CompanyCirclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyCircles.
     */
    data: XOR<CompanyCirclesUpdateInput, CompanyCirclesUncheckedUpdateInput>
    /**
     * Choose, which CompanyCircles to update.
     */
    where: CompanyCirclesWhereUniqueInput
  }


  /**
   * CompanyCircles updateMany
   */
  export type CompanyCirclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyCircles.
     */
    data: XOR<CompanyCirclesUpdateManyMutationInput, CompanyCirclesUncheckedUpdateManyInput>
    /**
     * Filter which CompanyCircles to update
     */
    where?: CompanyCirclesWhereInput
  }


  /**
   * CompanyCircles upsert
   */
  export type CompanyCirclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyCircles to update in case it exists.
     */
    where: CompanyCirclesWhereUniqueInput
    /**
     * In case the CompanyCircles found by the `where` argument doesn't exist, create a new CompanyCircles with this data.
     */
    create: XOR<CompanyCirclesCreateInput, CompanyCirclesUncheckedCreateInput>
    /**
     * In case the CompanyCircles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyCirclesUpdateInput, CompanyCirclesUncheckedUpdateInput>
  }


  /**
   * CompanyCircles delete
   */
  export type CompanyCirclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    /**
     * Filter which CompanyCircles to delete.
     */
    where: CompanyCirclesWhereUniqueInput
  }


  /**
   * CompanyCircles deleteMany
   */
  export type CompanyCirclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyCircles to delete
     */
    where?: CompanyCirclesWhereInput
  }


  /**
   * CompanyCircles.companyUser
   */
  export type CompanyCircles$companyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    where?: CompanyUserWhereInput
  }


  /**
   * CompanyCircles.memberList
   */
  export type CompanyCircles$memberListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * CompanyCircles without action
   */
  export type CompanyCirclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    ageRange: string | null
    ethnicity: string | null
    gender: $Enums.UserGender | null
    maritalStatus: $Enums.MaitalStatus | null
    disability: string | null
    DOB: string | null
    accountType: $Enums.UserAccount | null
    department: string | null
    jobRole: string | null
    password: string | null
    role: $Enums.SystemRole | null
    passwordResetCode: string | null
    createdBy: string | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    status: $Enums.UserStatus | null
    address: string | null
    bio: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
    addedBy: string | null
    socialId: string | null
    socialProvider: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    created_at: Date | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    ageRange: string | null
    ethnicity: string | null
    gender: $Enums.UserGender | null
    maritalStatus: $Enums.MaitalStatus | null
    disability: string | null
    DOB: string | null
    accountType: $Enums.UserAccount | null
    department: string | null
    jobRole: string | null
    password: string | null
    role: $Enums.SystemRole | null
    passwordResetCode: string | null
    createdBy: string | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    status: $Enums.UserStatus | null
    address: string | null
    bio: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
    addedBy: string | null
    socialId: string | null
    socialProvider: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    created_at: number
    firstName: number
    lastName: number
    phoneNumber: number
    ageRange: number
    ethnicity: number
    gender: number
    maritalStatus: number
    disability: number
    DOB: number
    accountType: number
    department: number
    jobRole: number
    password: number
    role: number
    passwordResetCode: number
    createdBy: number
    lastLogin: number
    passportImg: number
    isActive: number
    updated_at: number
    isEmailVerified: number
    verificationCode: number
    status: number
    address: number
    bio: number
    emailNotification: number
    campaignNtification: number
    termsConditions: number
    addedBy: number
    socialId: number
    socialProvider: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    ageRange?: true
    ethnicity?: true
    gender?: true
    maritalStatus?: true
    disability?: true
    DOB?: true
    accountType?: true
    department?: true
    jobRole?: true
    password?: true
    role?: true
    passwordResetCode?: true
    createdBy?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    status?: true
    address?: true
    bio?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
    addedBy?: true
    socialId?: true
    socialProvider?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    ageRange?: true
    ethnicity?: true
    gender?: true
    maritalStatus?: true
    disability?: true
    DOB?: true
    accountType?: true
    department?: true
    jobRole?: true
    password?: true
    role?: true
    passwordResetCode?: true
    createdBy?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    status?: true
    address?: true
    bio?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
    addedBy?: true
    socialId?: true
    socialProvider?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    created_at?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    ageRange?: true
    ethnicity?: true
    gender?: true
    maritalStatus?: true
    disability?: true
    DOB?: true
    accountType?: true
    department?: true
    jobRole?: true
    password?: true
    role?: true
    passwordResetCode?: true
    createdBy?: true
    lastLogin?: true
    passportImg?: true
    isActive?: true
    updated_at?: true
    isEmailVerified?: true
    verificationCode?: true
    status?: true
    address?: true
    bio?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
    addedBy?: true
    socialId?: true
    socialProvider?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    created_at: Date | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    ageRange: string | null
    ethnicity: string | null
    gender: $Enums.UserGender | null
    maritalStatus: $Enums.MaitalStatus | null
    disability: string | null
    DOB: string | null
    accountType: $Enums.UserAccount
    department: string | null
    jobRole: string | null
    password: string | null
    role: $Enums.SystemRole
    passwordResetCode: string | null
    createdBy: string | null
    lastLogin: Date | null
    passportImg: string | null
    isActive: boolean | null
    updated_at: Date | null
    isEmailVerified: boolean | null
    verificationCode: string | null
    status: $Enums.UserStatus
    address: string | null
    bio: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
    addedBy: string | null
    socialId: string | null
    socialProvider: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    created_at?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    ageRange?: boolean
    ethnicity?: boolean
    gender?: boolean
    maritalStatus?: boolean
    disability?: boolean
    DOB?: boolean
    accountType?: boolean
    department?: boolean
    jobRole?: boolean
    password?: boolean
    role?: boolean
    passwordResetCode?: boolean
    createdBy?: boolean
    lastLogin?: boolean
    passportImg?: boolean
    isActive?: boolean
    updated_at?: boolean
    isEmailVerified?: boolean
    verificationCode?: boolean
    status?: boolean
    address?: boolean
    bio?: boolean
    emailNotification?: boolean
    campaignNtification?: boolean
    termsConditions?: boolean
    addedBy?: boolean
    socialId?: boolean
    socialProvider?: boolean
    companyUser?: boolean | User$companyUserArgs<ExtArgs>
    coyCircleAttachedTo?: boolean | User$coyCircleAttachedToArgs<ExtArgs>
    userCircles?: boolean | User$userCirclesArgs<ExtArgs>
    otherUserCirclesIn?: boolean | User$otherUserCirclesInArgs<ExtArgs>
    listOfScoreDetail?: boolean | User$listOfScoreDetailArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    created_at?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    ageRange?: boolean
    ethnicity?: boolean
    gender?: boolean
    maritalStatus?: boolean
    disability?: boolean
    DOB?: boolean
    accountType?: boolean
    department?: boolean
    jobRole?: boolean
    password?: boolean
    role?: boolean
    passwordResetCode?: boolean
    createdBy?: boolean
    lastLogin?: boolean
    passportImg?: boolean
    isActive?: boolean
    updated_at?: boolean
    isEmailVerified?: boolean
    verificationCode?: boolean
    status?: boolean
    address?: boolean
    bio?: boolean
    emailNotification?: boolean
    campaignNtification?: boolean
    termsConditions?: boolean
    addedBy?: boolean
    socialId?: boolean
    socialProvider?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyUser?: boolean | User$companyUserArgs<ExtArgs>
    coyCircleAttachedTo?: boolean | User$coyCircleAttachedToArgs<ExtArgs>
    userCircles?: boolean | User$userCirclesArgs<ExtArgs>
    otherUserCirclesIn?: boolean | User$otherUserCirclesInArgs<ExtArgs>
    listOfScoreDetail?: boolean | User$listOfScoreDetailArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      companyUser: Prisma.$CompanyUserPayload<ExtArgs> | null
      coyCircleAttachedTo: Prisma.$CompanyCirclesPayload<ExtArgs>[]
      userCircles: Prisma.$UserCirclesPayload<ExtArgs>[]
      otherUserCirclesIn: Prisma.$UserCirclesPayload<ExtArgs>[]
      listOfScoreDetail: Prisma.$ScoreDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      created_at: Date | null
      firstName: string | null
      lastName: string | null
      phoneNumber: string | null
      ageRange: string | null
      ethnicity: string | null
      gender: $Enums.UserGender | null
      maritalStatus: $Enums.MaitalStatus | null
      disability: string | null
      DOB: string | null
      accountType: $Enums.UserAccount
      department: string | null
      jobRole: string | null
      password: string | null
      role: $Enums.SystemRole
      passwordResetCode: string | null
      createdBy: string | null
      lastLogin: Date | null
      passportImg: string | null
      isActive: boolean | null
      updated_at: Date | null
      isEmailVerified: boolean | null
      verificationCode: string | null
      status: $Enums.UserStatus
      address: string | null
      bio: string | null
      emailNotification: boolean | null
      campaignNtification: boolean | null
      termsConditions: boolean | null
      addedBy: string | null
      socialId: string | null
      socialProvider: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    companyUser<T extends User$companyUserArgs<ExtArgs> = {}>(args?: Subset<T, User$companyUserArgs<ExtArgs>>): Prisma__CompanyUserClient<$Result.GetResult<Prisma.$CompanyUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    coyCircleAttachedTo<T extends User$coyCircleAttachedToArgs<ExtArgs> = {}>(args?: Subset<T, User$coyCircleAttachedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findMany'> | Null>;

    userCircles<T extends User$userCirclesArgs<ExtArgs> = {}>(args?: Subset<T, User$userCirclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findMany'> | Null>;

    otherUserCirclesIn<T extends User$otherUserCirclesInArgs<ExtArgs> = {}>(args?: Subset<T, User$otherUserCirclesInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findMany'> | Null>;

    listOfScoreDetail<T extends User$listOfScoreDetailArgs<ExtArgs> = {}>(args?: Subset<T, User$listOfScoreDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly ageRange: FieldRef<"User", 'String'>
    readonly ethnicity: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'UserGender'>
    readonly maritalStatus: FieldRef<"User", 'MaitalStatus'>
    readonly disability: FieldRef<"User", 'String'>
    readonly DOB: FieldRef<"User", 'String'>
    readonly accountType: FieldRef<"User", 'UserAccount'>
    readonly department: FieldRef<"User", 'String'>
    readonly jobRole: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'SystemRole'>
    readonly passwordResetCode: FieldRef<"User", 'String'>
    readonly createdBy: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly passportImg: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly verificationCode: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly address: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly emailNotification: FieldRef<"User", 'Boolean'>
    readonly campaignNtification: FieldRef<"User", 'Boolean'>
    readonly termsConditions: FieldRef<"User", 'Boolean'>
    readonly addedBy: FieldRef<"User", 'String'>
    readonly socialId: FieldRef<"User", 'String'>
    readonly socialProvider: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.companyUser
   */
  export type User$companyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyUser
     */
    select?: CompanyUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyUserInclude<ExtArgs> | null
    where?: CompanyUserWhereInput
  }


  /**
   * User.coyCircleAttachedTo
   */
  export type User$coyCircleAttachedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    where?: CompanyCirclesWhereInput
    orderBy?: CompanyCirclesOrderByWithRelationInput | CompanyCirclesOrderByWithRelationInput[]
    cursor?: CompanyCirclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyCirclesScalarFieldEnum | CompanyCirclesScalarFieldEnum[]
  }


  /**
   * User.userCircles
   */
  export type User$userCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    where?: UserCirclesWhereInput
    orderBy?: UserCirclesOrderByWithRelationInput | UserCirclesOrderByWithRelationInput[]
    cursor?: UserCirclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCirclesScalarFieldEnum | UserCirclesScalarFieldEnum[]
  }


  /**
   * User.otherUserCirclesIn
   */
  export type User$otherUserCirclesInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    where?: UserCirclesWhereInput
    orderBy?: UserCirclesOrderByWithRelationInput | UserCirclesOrderByWithRelationInput[]
    cursor?: UserCirclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCirclesScalarFieldEnum | UserCirclesScalarFieldEnum[]
  }


  /**
   * User.listOfScoreDetail
   */
  export type User$listOfScoreDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    where?: ScoreDetailWhereInput
    orderBy?: ScoreDetailOrderByWithRelationInput | ScoreDetailOrderByWithRelationInput[]
    cursor?: ScoreDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreDetailScalarFieldEnum | ScoreDetailScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model UserCircles
   */

  export type AggregateUserCircles = {
    _count: UserCirclesCountAggregateOutputType | null
    _min: UserCirclesMinAggregateOutputType | null
    _max: UserCirclesMaxAggregateOutputType | null
  }

  export type UserCirclesMinAggregateOutputType = {
    id: string | null
    circleImg: string | null
    created_at: Date | null
    updated_at: Date | null
    userCircleName: string | null
    userCircleDescription: string | null
    userCircleShareLink: string | null
    wellbeingScore: string | null
    activityLevel: $Enums.ActivityLevel | null
    userId: string | null
    createdBy: string | null
    userCircleStatus: $Enums.UserStatus | null
    userCircleNos: string | null
    circleStatus: $Enums.CircleStatus | null
  }

  export type UserCirclesMaxAggregateOutputType = {
    id: string | null
    circleImg: string | null
    created_at: Date | null
    updated_at: Date | null
    userCircleName: string | null
    userCircleDescription: string | null
    userCircleShareLink: string | null
    wellbeingScore: string | null
    activityLevel: $Enums.ActivityLevel | null
    userId: string | null
    createdBy: string | null
    userCircleStatus: $Enums.UserStatus | null
    userCircleNos: string | null
    circleStatus: $Enums.CircleStatus | null
  }

  export type UserCirclesCountAggregateOutputType = {
    id: number
    circleImg: number
    created_at: number
    updated_at: number
    userCircleName: number
    userCircleDescription: number
    userCircleShareLink: number
    wellbeingScore: number
    activityLevel: number
    userId: number
    createdBy: number
    userCircleStatus: number
    userCircleNos: number
    circleStatus: number
    _all: number
  }


  export type UserCirclesMinAggregateInputType = {
    id?: true
    circleImg?: true
    created_at?: true
    updated_at?: true
    userCircleName?: true
    userCircleDescription?: true
    userCircleShareLink?: true
    wellbeingScore?: true
    activityLevel?: true
    userId?: true
    createdBy?: true
    userCircleStatus?: true
    userCircleNos?: true
    circleStatus?: true
  }

  export type UserCirclesMaxAggregateInputType = {
    id?: true
    circleImg?: true
    created_at?: true
    updated_at?: true
    userCircleName?: true
    userCircleDescription?: true
    userCircleShareLink?: true
    wellbeingScore?: true
    activityLevel?: true
    userId?: true
    createdBy?: true
    userCircleStatus?: true
    userCircleNos?: true
    circleStatus?: true
  }

  export type UserCirclesCountAggregateInputType = {
    id?: true
    circleImg?: true
    created_at?: true
    updated_at?: true
    userCircleName?: true
    userCircleDescription?: true
    userCircleShareLink?: true
    wellbeingScore?: true
    activityLevel?: true
    userId?: true
    createdBy?: true
    userCircleStatus?: true
    userCircleNos?: true
    circleStatus?: true
    _all?: true
  }

  export type UserCirclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCircles to aggregate.
     */
    where?: UserCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCircles to fetch.
     */
    orderBy?: UserCirclesOrderByWithRelationInput | UserCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCircles
    **/
    _count?: true | UserCirclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCirclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCirclesMaxAggregateInputType
  }

  export type GetUserCirclesAggregateType<T extends UserCirclesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCircles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCircles[P]>
      : GetScalarType<T[P], AggregateUserCircles[P]>
  }




  export type UserCirclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCirclesWhereInput
    orderBy?: UserCirclesOrderByWithAggregationInput | UserCirclesOrderByWithAggregationInput[]
    by: UserCirclesScalarFieldEnum[] | UserCirclesScalarFieldEnum
    having?: UserCirclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCirclesCountAggregateInputType | true
    _min?: UserCirclesMinAggregateInputType
    _max?: UserCirclesMaxAggregateInputType
  }

  export type UserCirclesGroupByOutputType = {
    id: string
    circleImg: string | null
    created_at: Date | null
    updated_at: Date | null
    userCircleName: string | null
    userCircleDescription: string | null
    userCircleShareLink: string | null
    wellbeingScore: string | null
    activityLevel: $Enums.ActivityLevel
    userId: string | null
    createdBy: string | null
    userCircleStatus: $Enums.UserStatus
    userCircleNos: string | null
    circleStatus: $Enums.CircleStatus | null
    _count: UserCirclesCountAggregateOutputType | null
    _min: UserCirclesMinAggregateOutputType | null
    _max: UserCirclesMaxAggregateOutputType | null
  }

  type GetUserCirclesGroupByPayload<T extends UserCirclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCirclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCirclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCirclesGroupByOutputType[P]>
            : GetScalarType<T[P], UserCirclesGroupByOutputType[P]>
        }
      >
    >


  export type UserCirclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    circleImg?: boolean
    created_at?: boolean
    updated_at?: boolean
    userCircleName?: boolean
    userCircleDescription?: boolean
    userCircleShareLink?: boolean
    wellbeingScore?: boolean
    activityLevel?: boolean
    userId?: boolean
    createdBy?: boolean
    userCircleStatus?: boolean
    userCircleNos?: boolean
    circleStatus?: boolean
    user?: boolean | UserCircles$userArgs<ExtArgs>
    memberList?: boolean | UserCircles$memberListArgs<ExtArgs>
    _count?: boolean | UserCirclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCircles"]>

  export type UserCirclesSelectScalar = {
    id?: boolean
    circleImg?: boolean
    created_at?: boolean
    updated_at?: boolean
    userCircleName?: boolean
    userCircleDescription?: boolean
    userCircleShareLink?: boolean
    wellbeingScore?: boolean
    activityLevel?: boolean
    userId?: boolean
    createdBy?: boolean
    userCircleStatus?: boolean
    userCircleNos?: boolean
    circleStatus?: boolean
  }

  export type UserCirclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserCircles$userArgs<ExtArgs>
    memberList?: boolean | UserCircles$memberListArgs<ExtArgs>
    _count?: boolean | UserCirclesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserCirclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCircles"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      memberList: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      circleImg: string | null
      created_at: Date | null
      updated_at: Date | null
      userCircleName: string | null
      userCircleDescription: string | null
      userCircleShareLink: string | null
      wellbeingScore: string | null
      activityLevel: $Enums.ActivityLevel
      userId: string | null
      createdBy: string | null
      userCircleStatus: $Enums.UserStatus
      userCircleNos: string | null
      circleStatus: $Enums.CircleStatus | null
    }, ExtArgs["result"]["userCircles"]>
    composites: {}
  }


  type UserCirclesGetPayload<S extends boolean | null | undefined | UserCirclesDefaultArgs> = $Result.GetResult<Prisma.$UserCirclesPayload, S>

  type UserCirclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserCirclesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCirclesCountAggregateInputType | true
    }

  export interface UserCirclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCircles'], meta: { name: 'UserCircles' } }
    /**
     * Find zero or one UserCircles that matches the filter.
     * @param {UserCirclesFindUniqueArgs} args - Arguments to find a UserCircles
     * @example
     * // Get one UserCircles
     * const userCircles = await prisma.userCircles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserCirclesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserCirclesFindUniqueArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserCircles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserCirclesFindUniqueOrThrowArgs} args - Arguments to find a UserCircles
     * @example
     * // Get one UserCircles
     * const userCircles = await prisma.userCircles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserCirclesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCirclesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserCircles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCirclesFindFirstArgs} args - Arguments to find a UserCircles
     * @example
     * // Get one UserCircles
     * const userCircles = await prisma.userCircles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserCirclesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCirclesFindFirstArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserCircles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCirclesFindFirstOrThrowArgs} args - Arguments to find a UserCircles
     * @example
     * // Get one UserCircles
     * const userCircles = await prisma.userCircles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserCirclesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCirclesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserCircles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCirclesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCircles
     * const userCircles = await prisma.userCircles.findMany()
     * 
     * // Get first 10 UserCircles
     * const userCircles = await prisma.userCircles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCirclesWithIdOnly = await prisma.userCircles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserCirclesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCirclesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserCircles.
     * @param {UserCirclesCreateArgs} args - Arguments to create a UserCircles.
     * @example
     * // Create one UserCircles
     * const UserCircles = await prisma.userCircles.create({
     *   data: {
     *     // ... data to create a UserCircles
     *   }
     * })
     * 
    **/
    create<T extends UserCirclesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCirclesCreateArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserCircles.
     *     @param {UserCirclesCreateManyArgs} args - Arguments to create many UserCircles.
     *     @example
     *     // Create many UserCircles
     *     const userCircles = await prisma.userCircles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCirclesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCirclesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCircles.
     * @param {UserCirclesDeleteArgs} args - Arguments to delete one UserCircles.
     * @example
     * // Delete one UserCircles
     * const UserCircles = await prisma.userCircles.delete({
     *   where: {
     *     // ... filter to delete one UserCircles
     *   }
     * })
     * 
    **/
    delete<T extends UserCirclesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserCirclesDeleteArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserCircles.
     * @param {UserCirclesUpdateArgs} args - Arguments to update one UserCircles.
     * @example
     * // Update one UserCircles
     * const userCircles = await prisma.userCircles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserCirclesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCirclesUpdateArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserCircles.
     * @param {UserCirclesDeleteManyArgs} args - Arguments to filter UserCircles to delete.
     * @example
     * // Delete a few UserCircles
     * const { count } = await prisma.userCircles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserCirclesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCirclesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCirclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCircles
     * const userCircles = await prisma.userCircles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserCirclesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserCirclesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCircles.
     * @param {UserCirclesUpsertArgs} args - Arguments to update or create a UserCircles.
     * @example
     * // Update or create a UserCircles
     * const userCircles = await prisma.userCircles.upsert({
     *   create: {
     *     // ... data to create a UserCircles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCircles we want to update
     *   }
     * })
    **/
    upsert<T extends UserCirclesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserCirclesUpsertArgs<ExtArgs>>
    ): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCirclesCountArgs} args - Arguments to filter UserCircles to count.
     * @example
     * // Count the number of UserCircles
     * const count = await prisma.userCircles.count({
     *   where: {
     *     // ... the filter for the UserCircles we want to count
     *   }
     * })
    **/
    count<T extends UserCirclesCountArgs>(
      args?: Subset<T, UserCirclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCirclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCirclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCirclesAggregateArgs>(args: Subset<T, UserCirclesAggregateArgs>): Prisma.PrismaPromise<GetUserCirclesAggregateType<T>>

    /**
     * Group by UserCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCirclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCirclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCirclesGroupByArgs['orderBy'] }
        : { orderBy?: UserCirclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCirclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCirclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCircles model
   */
  readonly fields: UserCirclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCircles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCirclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserCircles$userArgs<ExtArgs> = {}>(args?: Subset<T, UserCircles$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    memberList<T extends UserCircles$memberListArgs<ExtArgs> = {}>(args?: Subset<T, UserCircles$memberListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserCircles model
   */ 
  interface UserCirclesFieldRefs {
    readonly id: FieldRef<"UserCircles", 'String'>
    readonly circleImg: FieldRef<"UserCircles", 'String'>
    readonly created_at: FieldRef<"UserCircles", 'DateTime'>
    readonly updated_at: FieldRef<"UserCircles", 'DateTime'>
    readonly userCircleName: FieldRef<"UserCircles", 'String'>
    readonly userCircleDescription: FieldRef<"UserCircles", 'String'>
    readonly userCircleShareLink: FieldRef<"UserCircles", 'String'>
    readonly wellbeingScore: FieldRef<"UserCircles", 'String'>
    readonly activityLevel: FieldRef<"UserCircles", 'ActivityLevel'>
    readonly userId: FieldRef<"UserCircles", 'String'>
    readonly createdBy: FieldRef<"UserCircles", 'String'>
    readonly userCircleStatus: FieldRef<"UserCircles", 'UserStatus'>
    readonly userCircleNos: FieldRef<"UserCircles", 'String'>
    readonly circleStatus: FieldRef<"UserCircles", 'CircleStatus'>
  }
    

  // Custom InputTypes

  /**
   * UserCircles findUnique
   */
  export type UserCirclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * Filter, which UserCircles to fetch.
     */
    where: UserCirclesWhereUniqueInput
  }


  /**
   * UserCircles findUniqueOrThrow
   */
  export type UserCirclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * Filter, which UserCircles to fetch.
     */
    where: UserCirclesWhereUniqueInput
  }


  /**
   * UserCircles findFirst
   */
  export type UserCirclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * Filter, which UserCircles to fetch.
     */
    where?: UserCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCircles to fetch.
     */
    orderBy?: UserCirclesOrderByWithRelationInput | UserCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCircles.
     */
    cursor?: UserCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCircles.
     */
    distinct?: UserCirclesScalarFieldEnum | UserCirclesScalarFieldEnum[]
  }


  /**
   * UserCircles findFirstOrThrow
   */
  export type UserCirclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * Filter, which UserCircles to fetch.
     */
    where?: UserCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCircles to fetch.
     */
    orderBy?: UserCirclesOrderByWithRelationInput | UserCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCircles.
     */
    cursor?: UserCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCircles.
     */
    distinct?: UserCirclesScalarFieldEnum | UserCirclesScalarFieldEnum[]
  }


  /**
   * UserCircles findMany
   */
  export type UserCirclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * Filter, which UserCircles to fetch.
     */
    where?: UserCirclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCircles to fetch.
     */
    orderBy?: UserCirclesOrderByWithRelationInput | UserCirclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCircles.
     */
    cursor?: UserCirclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCircles.
     */
    skip?: number
    distinct?: UserCirclesScalarFieldEnum | UserCirclesScalarFieldEnum[]
  }


  /**
   * UserCircles create
   */
  export type UserCirclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCircles.
     */
    data?: XOR<UserCirclesCreateInput, UserCirclesUncheckedCreateInput>
  }


  /**
   * UserCircles createMany
   */
  export type UserCirclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCircles.
     */
    data: UserCirclesCreateManyInput | UserCirclesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserCircles update
   */
  export type UserCirclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCircles.
     */
    data: XOR<UserCirclesUpdateInput, UserCirclesUncheckedUpdateInput>
    /**
     * Choose, which UserCircles to update.
     */
    where: UserCirclesWhereUniqueInput
  }


  /**
   * UserCircles updateMany
   */
  export type UserCirclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCircles.
     */
    data: XOR<UserCirclesUpdateManyMutationInput, UserCirclesUncheckedUpdateManyInput>
    /**
     * Filter which UserCircles to update
     */
    where?: UserCirclesWhereInput
  }


  /**
   * UserCircles upsert
   */
  export type UserCirclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCircles to update in case it exists.
     */
    where: UserCirclesWhereUniqueInput
    /**
     * In case the UserCircles found by the `where` argument doesn't exist, create a new UserCircles with this data.
     */
    create: XOR<UserCirclesCreateInput, UserCirclesUncheckedCreateInput>
    /**
     * In case the UserCircles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCirclesUpdateInput, UserCirclesUncheckedUpdateInput>
  }


  /**
   * UserCircles delete
   */
  export type UserCirclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    /**
     * Filter which UserCircles to delete.
     */
    where: UserCirclesWhereUniqueInput
  }


  /**
   * UserCircles deleteMany
   */
  export type UserCirclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCircles to delete
     */
    where?: UserCirclesWhereInput
  }


  /**
   * UserCircles.user
   */
  export type UserCircles$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * UserCircles.memberList
   */
  export type UserCircles$memberListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * UserCircles without action
   */
  export type UserCirclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
  }



  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    setNo: string | null
    assessmentType: $Enums.AssessmentType | null
    createdWeeklyBy: string | null
    createdCheckinBy: string | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    setNo: string | null
    assessmentType: $Enums.AssessmentType | null
    createdWeeklyBy: string | null
    createdCheckinBy: string | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    created_at: number
    setNo: number
    assessmentType: number
    setQuestions: number
    createdWeeklyBy: number
    createdCheckinBy: number
    _all: number
  }


  export type AssessmentMinAggregateInputType = {
    id?: true
    created_at?: true
    setNo?: true
    assessmentType?: true
    createdWeeklyBy?: true
    createdCheckinBy?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    created_at?: true
    setNo?: true
    assessmentType?: true
    createdWeeklyBy?: true
    createdCheckinBy?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    created_at?: true
    setNo?: true
    assessmentType?: true
    setQuestions?: true
    createdWeeklyBy?: true
    createdCheckinBy?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: string
    created_at: Date | null
    setNo: string | null
    assessmentType: $Enums.AssessmentType | null
    setQuestions: string[]
    createdWeeklyBy: string | null
    createdCheckinBy: string | null
    _count: AssessmentCountAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    setNo?: boolean
    assessmentType?: boolean
    setQuestions?: boolean
    createdWeeklyBy?: boolean
    createdCheckinBy?: boolean
    empyloUser?: boolean | Assessment$empyloUserArgs<ExtArgs>
    empyloUserCheckin?: boolean | Assessment$empyloUserCheckinArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>

  export type AssessmentSelectScalar = {
    id?: boolean
    created_at?: boolean
    setNo?: boolean
    assessmentType?: boolean
    setQuestions?: boolean
    createdWeeklyBy?: boolean
    createdCheckinBy?: boolean
  }

  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empyloUser?: boolean | Assessment$empyloUserArgs<ExtArgs>
    empyloUserCheckin?: boolean | Assessment$empyloUserCheckinArgs<ExtArgs>
  }


  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      empyloUser: Prisma.$EmpyloUserPayload<ExtArgs> | null
      empyloUserCheckin: Prisma.$EmpyloUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      setNo: string | null
      assessmentType: $Enums.AssessmentType | null
      setQuestions: string[]
      createdWeeklyBy: string | null
      createdCheckinBy: string | null
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }


  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AssessmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Assessment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AssessmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AssessmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
    **/
    create<T extends AssessmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Assessments.
     *     @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     *     @example
     *     // Create many Assessments
     *     const assessment = await prisma.assessment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AssessmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
    **/
    delete<T extends AssessmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AssessmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AssessmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AssessmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
    **/
    upsert<T extends AssessmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>
    ): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    empyloUser<T extends Assessment$empyloUserArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$empyloUserArgs<ExtArgs>>): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    empyloUserCheckin<T extends Assessment$empyloUserCheckinArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$empyloUserCheckinArgs<ExtArgs>>): Prisma__EmpyloUserClient<$Result.GetResult<Prisma.$EmpyloUserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Assessment model
   */ 
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'String'>
    readonly created_at: FieldRef<"Assessment", 'DateTime'>
    readonly setNo: FieldRef<"Assessment", 'String'>
    readonly assessmentType: FieldRef<"Assessment", 'AssessmentType'>
    readonly setQuestions: FieldRef<"Assessment", 'String[]'>
    readonly createdWeeklyBy: FieldRef<"Assessment", 'String'>
    readonly createdCheckinBy: FieldRef<"Assessment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }


  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }


  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }


  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }


  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }


  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data?: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }


  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }


  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
  }


  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }


  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }


  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
  }


  /**
   * Assessment.empyloUser
   */
  export type Assessment$empyloUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    where?: EmpyloUserWhereInput
  }


  /**
   * Assessment.empyloUserCheckin
   */
  export type Assessment$empyloUserCheckinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpyloUser
     */
    select?: EmpyloUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EmpyloUserInclude<ExtArgs> | null
    where?: EmpyloUserWhereInput
  }


  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AssessmentInclude<ExtArgs> | null
  }



  /**
   * Model ScoreDetail
   */

  export type AggregateScoreDetail = {
    _count: ScoreDetailCountAggregateOutputType | null
    _avg: ScoreDetailAvgAggregateOutputType | null
    _sum: ScoreDetailSumAggregateOutputType | null
    _min: ScoreDetailMinAggregateOutputType | null
    _max: ScoreDetailMaxAggregateOutputType | null
  }

  export type ScoreDetailAvgAggregateOutputType = {
    weeklyScore: number | null
    dailyScore: number | null
    wellbeingScore: number | null
  }

  export type ScoreDetailSumAggregateOutputType = {
    weeklyScore: number | null
    dailyScore: number | null
    wellbeingScore: number | null
  }

  export type ScoreDetailMinAggregateOutputType = {
    id: string | null
    ownerID: string | null
    weeklyScore: number | null
    dailyScore: number | null
    wellbeingScore: number | null
    setNo: string | null
    assessmentType: $Enums.AssessmentType | null
    created_at: Date | null
  }

  export type ScoreDetailMaxAggregateOutputType = {
    id: string | null
    ownerID: string | null
    weeklyScore: number | null
    dailyScore: number | null
    wellbeingScore: number | null
    setNo: string | null
    assessmentType: $Enums.AssessmentType | null
    created_at: Date | null
  }

  export type ScoreDetailCountAggregateOutputType = {
    id: number
    ownerID: number
    weeklyScore: number
    dailyScore: number
    wellbeingScore: number
    setNo: number
    assessmentType: number
    created_at: number
    _all: number
  }


  export type ScoreDetailAvgAggregateInputType = {
    weeklyScore?: true
    dailyScore?: true
    wellbeingScore?: true
  }

  export type ScoreDetailSumAggregateInputType = {
    weeklyScore?: true
    dailyScore?: true
    wellbeingScore?: true
  }

  export type ScoreDetailMinAggregateInputType = {
    id?: true
    ownerID?: true
    weeklyScore?: true
    dailyScore?: true
    wellbeingScore?: true
    setNo?: true
    assessmentType?: true
    created_at?: true
  }

  export type ScoreDetailMaxAggregateInputType = {
    id?: true
    ownerID?: true
    weeklyScore?: true
    dailyScore?: true
    wellbeingScore?: true
    setNo?: true
    assessmentType?: true
    created_at?: true
  }

  export type ScoreDetailCountAggregateInputType = {
    id?: true
    ownerID?: true
    weeklyScore?: true
    dailyScore?: true
    wellbeingScore?: true
    setNo?: true
    assessmentType?: true
    created_at?: true
    _all?: true
  }

  export type ScoreDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreDetail to aggregate.
     */
    where?: ScoreDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDetails to fetch.
     */
    orderBy?: ScoreDetailOrderByWithRelationInput | ScoreDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoreDetails
    **/
    _count?: true | ScoreDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreDetailMaxAggregateInputType
  }

  export type GetScoreDetailAggregateType<T extends ScoreDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreDetail[P]>
      : GetScalarType<T[P], AggregateScoreDetail[P]>
  }




  export type ScoreDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreDetailWhereInput
    orderBy?: ScoreDetailOrderByWithAggregationInput | ScoreDetailOrderByWithAggregationInput[]
    by: ScoreDetailScalarFieldEnum[] | ScoreDetailScalarFieldEnum
    having?: ScoreDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreDetailCountAggregateInputType | true
    _avg?: ScoreDetailAvgAggregateInputType
    _sum?: ScoreDetailSumAggregateInputType
    _min?: ScoreDetailMinAggregateInputType
    _max?: ScoreDetailMaxAggregateInputType
  }

  export type ScoreDetailGroupByOutputType = {
    id: string
    ownerID: string | null
    weeklyScore: number | null
    dailyScore: number | null
    wellbeingScore: number | null
    setNo: string | null
    assessmentType: $Enums.AssessmentType | null
    created_at: Date | null
    _count: ScoreDetailCountAggregateOutputType | null
    _avg: ScoreDetailAvgAggregateOutputType | null
    _sum: ScoreDetailSumAggregateOutputType | null
    _min: ScoreDetailMinAggregateOutputType | null
    _max: ScoreDetailMaxAggregateOutputType | null
  }

  type GetScoreDetailGroupByPayload<T extends ScoreDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreDetailGroupByOutputType[P]>
        }
      >
    >


  export type ScoreDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerID?: boolean
    weeklyScore?: boolean
    dailyScore?: boolean
    wellbeingScore?: boolean
    setNo?: boolean
    assessmentType?: boolean
    created_at?: boolean
    owner?: boolean | ScoreDetail$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["scoreDetail"]>

  export type ScoreDetailSelectScalar = {
    id?: boolean
    ownerID?: boolean
    weeklyScore?: boolean
    dailyScore?: boolean
    wellbeingScore?: boolean
    setNo?: boolean
    assessmentType?: boolean
    created_at?: boolean
  }

  export type ScoreDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ScoreDetail$ownerArgs<ExtArgs>
  }


  export type $ScoreDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoreDetail"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerID: string | null
      weeklyScore: number | null
      dailyScore: number | null
      wellbeingScore: number | null
      setNo: string | null
      assessmentType: $Enums.AssessmentType | null
      created_at: Date | null
    }, ExtArgs["result"]["scoreDetail"]>
    composites: {}
  }


  type ScoreDetailGetPayload<S extends boolean | null | undefined | ScoreDetailDefaultArgs> = $Result.GetResult<Prisma.$ScoreDetailPayload, S>

  type ScoreDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScoreDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoreDetailCountAggregateInputType | true
    }

  export interface ScoreDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoreDetail'], meta: { name: 'ScoreDetail' } }
    /**
     * Find zero or one ScoreDetail that matches the filter.
     * @param {ScoreDetailFindUniqueArgs} args - Arguments to find a ScoreDetail
     * @example
     * // Get one ScoreDetail
     * const scoreDetail = await prisma.scoreDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ScoreDetailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreDetailFindUniqueArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ScoreDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ScoreDetailFindUniqueOrThrowArgs} args - Arguments to find a ScoreDetail
     * @example
     * // Get one ScoreDetail
     * const scoreDetail = await prisma.scoreDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ScoreDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ScoreDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDetailFindFirstArgs} args - Arguments to find a ScoreDetail
     * @example
     * // Get one ScoreDetail
     * const scoreDetail = await prisma.scoreDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ScoreDetailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreDetailFindFirstArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ScoreDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDetailFindFirstOrThrowArgs} args - Arguments to find a ScoreDetail
     * @example
     * // Get one ScoreDetail
     * const scoreDetail = await prisma.scoreDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ScoreDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ScoreDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoreDetails
     * const scoreDetails = await prisma.scoreDetail.findMany()
     * 
     * // Get first 10 ScoreDetails
     * const scoreDetails = await prisma.scoreDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreDetailWithIdOnly = await prisma.scoreDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ScoreDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ScoreDetail.
     * @param {ScoreDetailCreateArgs} args - Arguments to create a ScoreDetail.
     * @example
     * // Create one ScoreDetail
     * const ScoreDetail = await prisma.scoreDetail.create({
     *   data: {
     *     // ... data to create a ScoreDetail
     *   }
     * })
     * 
    **/
    create<T extends ScoreDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreDetailCreateArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ScoreDetails.
     *     @param {ScoreDetailCreateManyArgs} args - Arguments to create many ScoreDetails.
     *     @example
     *     // Create many ScoreDetails
     *     const scoreDetail = await prisma.scoreDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ScoreDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScoreDetail.
     * @param {ScoreDetailDeleteArgs} args - Arguments to delete one ScoreDetail.
     * @example
     * // Delete one ScoreDetail
     * const ScoreDetail = await prisma.scoreDetail.delete({
     *   where: {
     *     // ... filter to delete one ScoreDetail
     *   }
     * })
     * 
    **/
    delete<T extends ScoreDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreDetailDeleteArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ScoreDetail.
     * @param {ScoreDetailUpdateArgs} args - Arguments to update one ScoreDetail.
     * @example
     * // Update one ScoreDetail
     * const scoreDetail = await prisma.scoreDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ScoreDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreDetailUpdateArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ScoreDetails.
     * @param {ScoreDetailDeleteManyArgs} args - Arguments to filter ScoreDetails to delete.
     * @example
     * // Delete a few ScoreDetails
     * const { count } = await prisma.scoreDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ScoreDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ScoreDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoreDetails
     * const scoreDetail = await prisma.scoreDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ScoreDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScoreDetail.
     * @param {ScoreDetailUpsertArgs} args - Arguments to update or create a ScoreDetail.
     * @example
     * // Update or create a ScoreDetail
     * const scoreDetail = await prisma.scoreDetail.upsert({
     *   create: {
     *     // ... data to create a ScoreDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoreDetail we want to update
     *   }
     * })
    **/
    upsert<T extends ScoreDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ScoreDetailUpsertArgs<ExtArgs>>
    ): Prisma__ScoreDetailClient<$Result.GetResult<Prisma.$ScoreDetailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ScoreDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDetailCountArgs} args - Arguments to filter ScoreDetails to count.
     * @example
     * // Count the number of ScoreDetails
     * const count = await prisma.scoreDetail.count({
     *   where: {
     *     // ... the filter for the ScoreDetails we want to count
     *   }
     * })
    **/
    count<T extends ScoreDetailCountArgs>(
      args?: Subset<T, ScoreDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoreDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoreDetailAggregateArgs>(args: Subset<T, ScoreDetailAggregateArgs>): Prisma.PrismaPromise<GetScoreDetailAggregateType<T>>

    /**
     * Group by ScoreDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoreDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreDetailGroupByArgs['orderBy'] }
        : { orderBy?: ScoreDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoreDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoreDetail model
   */
  readonly fields: ScoreDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoreDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends ScoreDetail$ownerArgs<ExtArgs> = {}>(args?: Subset<T, ScoreDetail$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ScoreDetail model
   */ 
  interface ScoreDetailFieldRefs {
    readonly id: FieldRef<"ScoreDetail", 'String'>
    readonly ownerID: FieldRef<"ScoreDetail", 'String'>
    readonly weeklyScore: FieldRef<"ScoreDetail", 'Int'>
    readonly dailyScore: FieldRef<"ScoreDetail", 'Int'>
    readonly wellbeingScore: FieldRef<"ScoreDetail", 'Int'>
    readonly setNo: FieldRef<"ScoreDetail", 'String'>
    readonly assessmentType: FieldRef<"ScoreDetail", 'AssessmentType'>
    readonly created_at: FieldRef<"ScoreDetail", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ScoreDetail findUnique
   */
  export type ScoreDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDetail to fetch.
     */
    where: ScoreDetailWhereUniqueInput
  }


  /**
   * ScoreDetail findUniqueOrThrow
   */
  export type ScoreDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDetail to fetch.
     */
    where: ScoreDetailWhereUniqueInput
  }


  /**
   * ScoreDetail findFirst
   */
  export type ScoreDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDetail to fetch.
     */
    where?: ScoreDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDetails to fetch.
     */
    orderBy?: ScoreDetailOrderByWithRelationInput | ScoreDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreDetails.
     */
    cursor?: ScoreDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreDetails.
     */
    distinct?: ScoreDetailScalarFieldEnum | ScoreDetailScalarFieldEnum[]
  }


  /**
   * ScoreDetail findFirstOrThrow
   */
  export type ScoreDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDetail to fetch.
     */
    where?: ScoreDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDetails to fetch.
     */
    orderBy?: ScoreDetailOrderByWithRelationInput | ScoreDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreDetails.
     */
    cursor?: ScoreDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreDetails.
     */
    distinct?: ScoreDetailScalarFieldEnum | ScoreDetailScalarFieldEnum[]
  }


  /**
   * ScoreDetail findMany
   */
  export type ScoreDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * Filter, which ScoreDetails to fetch.
     */
    where?: ScoreDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreDetails to fetch.
     */
    orderBy?: ScoreDetailOrderByWithRelationInput | ScoreDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoreDetails.
     */
    cursor?: ScoreDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreDetails.
     */
    skip?: number
    distinct?: ScoreDetailScalarFieldEnum | ScoreDetailScalarFieldEnum[]
  }


  /**
   * ScoreDetail create
   */
  export type ScoreDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ScoreDetail.
     */
    data?: XOR<ScoreDetailCreateInput, ScoreDetailUncheckedCreateInput>
  }


  /**
   * ScoreDetail createMany
   */
  export type ScoreDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoreDetails.
     */
    data: ScoreDetailCreateManyInput | ScoreDetailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ScoreDetail update
   */
  export type ScoreDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ScoreDetail.
     */
    data: XOR<ScoreDetailUpdateInput, ScoreDetailUncheckedUpdateInput>
    /**
     * Choose, which ScoreDetail to update.
     */
    where: ScoreDetailWhereUniqueInput
  }


  /**
   * ScoreDetail updateMany
   */
  export type ScoreDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoreDetails.
     */
    data: XOR<ScoreDetailUpdateManyMutationInput, ScoreDetailUncheckedUpdateManyInput>
    /**
     * Filter which ScoreDetails to update
     */
    where?: ScoreDetailWhereInput
  }


  /**
   * ScoreDetail upsert
   */
  export type ScoreDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ScoreDetail to update in case it exists.
     */
    where: ScoreDetailWhereUniqueInput
    /**
     * In case the ScoreDetail found by the `where` argument doesn't exist, create a new ScoreDetail with this data.
     */
    create: XOR<ScoreDetailCreateInput, ScoreDetailUncheckedCreateInput>
    /**
     * In case the ScoreDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreDetailUpdateInput, ScoreDetailUncheckedUpdateInput>
  }


  /**
   * ScoreDetail delete
   */
  export type ScoreDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
    /**
     * Filter which ScoreDetail to delete.
     */
    where: ScoreDetailWhereUniqueInput
  }


  /**
   * ScoreDetail deleteMany
   */
  export type ScoreDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreDetails to delete
     */
    where?: ScoreDetailWhereInput
  }


  /**
   * ScoreDetail.owner
   */
  export type ScoreDetail$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * ScoreDetail without action
   */
  export type ScoreDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreDetail
     */
    select?: ScoreDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ScoreDetailInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmpyloUserScalarFieldEnum: {
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

  export type EmpyloUserScalarFieldEnum = (typeof EmpyloUserScalarFieldEnum)[keyof typeof EmpyloUserScalarFieldEnum]


  export const CompanyUserScalarFieldEnum: {
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

  export type CompanyUserScalarFieldEnum = (typeof CompanyUserScalarFieldEnum)[keyof typeof CompanyUserScalarFieldEnum]


  export const CompanyCirclesScalarFieldEnum: {
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

  export type CompanyCirclesScalarFieldEnum = (typeof CompanyCirclesScalarFieldEnum)[keyof typeof CompanyCirclesScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserCirclesScalarFieldEnum: {
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

  export type UserCirclesScalarFieldEnum = (typeof UserCirclesScalarFieldEnum)[keyof typeof UserCirclesScalarFieldEnum]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    setNo: 'setNo',
    assessmentType: 'assessmentType',
    setQuestions: 'setQuestions',
    createdWeeklyBy: 'createdWeeklyBy',
    createdCheckinBy: 'createdCheckinBy'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const ScoreDetailScalarFieldEnum: {
    id: 'id',
    ownerID: 'ownerID',
    weeklyScore: 'weeklyScore',
    dailyScore: 'dailyScore',
    wellbeingScore: 'wellbeingScore',
    setNo: 'setNo',
    assessmentType: 'assessmentType',
    created_at: 'created_at'
  };

  export type ScoreDetailScalarFieldEnum = (typeof ScoreDetailScalarFieldEnum)[keyof typeof ScoreDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SystemRole'
   */
  export type EnumSystemRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemRole'>
    


  /**
   * Reference to a field of type 'SystemRole[]'
   */
  export type ListEnumSystemRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'UserGender'
   */
  export type EnumUserGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserGender'>
    


  /**
   * Reference to a field of type 'UserGender[]'
   */
  export type ListEnumUserGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserGender[]'>
    


  /**
   * Reference to a field of type 'MaitalStatus'
   */
  export type EnumMaitalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaitalStatus'>
    


  /**
   * Reference to a field of type 'MaitalStatus[]'
   */
  export type ListEnumMaitalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaitalStatus[]'>
    


  /**
   * Reference to a field of type 'ActivityLevel'
   */
  export type EnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel'>
    


  /**
   * Reference to a field of type 'ActivityLevel[]'
   */
  export type ListEnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel[]'>
    


  /**
   * Reference to a field of type 'CircleStatus'
   */
  export type EnumCircleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircleStatus'>
    


  /**
   * Reference to a field of type 'CircleStatus[]'
   */
  export type ListEnumCircleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CircleStatus[]'>
    


  /**
   * Reference to a field of type 'UserAccount'
   */
  export type EnumUserAccountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserAccount'>
    


  /**
   * Reference to a field of type 'UserAccount[]'
   */
  export type ListEnumUserAccountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserAccount[]'>
    


  /**
   * Reference to a field of type 'AssessmentType'
   */
  export type EnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType'>
    


  /**
   * Reference to a field of type 'AssessmentType[]'
   */
  export type ListEnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EmpyloUserWhereInput = {
    AND?: EmpyloUserWhereInput | EmpyloUserWhereInput[]
    OR?: EmpyloUserWhereInput[]
    NOT?: EmpyloUserWhereInput | EmpyloUserWhereInput[]
    id?: StringFilter<"EmpyloUser"> | string
    email?: StringFilter<"EmpyloUser"> | string
    created_at?: DateTimeNullableFilter<"EmpyloUser"> | Date | string | null
    firstName?: StringNullableFilter<"EmpyloUser"> | string | null
    lastName?: StringNullableFilter<"EmpyloUser"> | string | null
    phoneNumber?: StringNullableFilter<"EmpyloUser"> | string | null
    role?: EnumSystemRoleFilter<"EmpyloUser"> | $Enums.SystemRole
    lastLogin?: DateTimeNullableFilter<"EmpyloUser"> | Date | string | null
    passportImg?: StringNullableFilter<"EmpyloUser"> | string | null
    isActive?: BoolNullableFilter<"EmpyloUser"> | boolean | null
    updated_at?: DateTimeNullableFilter<"EmpyloUser"> | Date | string | null
    isEmailVerified?: BoolNullableFilter<"EmpyloUser"> | boolean | null
    verificationCode?: StringNullableFilter<"EmpyloUser"> | string | null
    status?: EnumUserStatusFilter<"EmpyloUser"> | $Enums.UserStatus
    gender?: EnumUserGenderNullableFilter<"EmpyloUser"> | $Enums.UserGender | null
    maritalStatus?: EnumMaitalStatusNullableFilter<"EmpyloUser"> | $Enums.MaitalStatus | null
    empyloID?: StringNullableFilter<"EmpyloUser"> | string | null
    permissions?: StringNullableListFilter<"EmpyloUser">
    passwordResetCode?: StringNullableFilter<"EmpyloUser"> | string | null
    password?: StringNullableFilter<"EmpyloUser"> | string | null
    weeklyAssessment?: AssessmentListRelationFilter
    checkinAssessment?: AssessmentListRelationFilter
  }

  export type EmpyloUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    status?: SortOrder
    gender?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    empyloID?: SortOrderInput | SortOrder
    permissions?: SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    weeklyAssessment?: AssessmentOrderByRelationAggregateInput
    checkinAssessment?: AssessmentOrderByRelationAggregateInput
  }

  export type EmpyloUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    verificationCode?: string
    passwordResetCode?: string
    AND?: EmpyloUserWhereInput | EmpyloUserWhereInput[]
    OR?: EmpyloUserWhereInput[]
    NOT?: EmpyloUserWhereInput | EmpyloUserWhereInput[]
    created_at?: DateTimeNullableFilter<"EmpyloUser"> | Date | string | null
    firstName?: StringNullableFilter<"EmpyloUser"> | string | null
    lastName?: StringNullableFilter<"EmpyloUser"> | string | null
    role?: EnumSystemRoleFilter<"EmpyloUser"> | $Enums.SystemRole
    lastLogin?: DateTimeNullableFilter<"EmpyloUser"> | Date | string | null
    passportImg?: StringNullableFilter<"EmpyloUser"> | string | null
    isActive?: BoolNullableFilter<"EmpyloUser"> | boolean | null
    updated_at?: DateTimeNullableFilter<"EmpyloUser"> | Date | string | null
    isEmailVerified?: BoolNullableFilter<"EmpyloUser"> | boolean | null
    status?: EnumUserStatusFilter<"EmpyloUser"> | $Enums.UserStatus
    gender?: EnumUserGenderNullableFilter<"EmpyloUser"> | $Enums.UserGender | null
    maritalStatus?: EnumMaitalStatusNullableFilter<"EmpyloUser"> | $Enums.MaitalStatus | null
    empyloID?: StringNullableFilter<"EmpyloUser"> | string | null
    permissions?: StringNullableListFilter<"EmpyloUser">
    password?: StringNullableFilter<"EmpyloUser"> | string | null
    weeklyAssessment?: AssessmentListRelationFilter
    checkinAssessment?: AssessmentListRelationFilter
  }, "id" | "id" | "email" | "phoneNumber" | "verificationCode" | "passwordResetCode">

  export type EmpyloUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    status?: SortOrder
    gender?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    empyloID?: SortOrderInput | SortOrder
    permissions?: SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: EmpyloUserCountOrderByAggregateInput
    _max?: EmpyloUserMaxOrderByAggregateInput
    _min?: EmpyloUserMinOrderByAggregateInput
  }

  export type EmpyloUserScalarWhereWithAggregatesInput = {
    AND?: EmpyloUserScalarWhereWithAggregatesInput | EmpyloUserScalarWhereWithAggregatesInput[]
    OR?: EmpyloUserScalarWhereWithAggregatesInput[]
    NOT?: EmpyloUserScalarWhereWithAggregatesInput | EmpyloUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmpyloUser"> | string
    email?: StringWithAggregatesFilter<"EmpyloUser"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"EmpyloUser"> | Date | string | null
    firstName?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
    role?: EnumSystemRoleWithAggregatesFilter<"EmpyloUser"> | $Enums.SystemRole
    lastLogin?: DateTimeNullableWithAggregatesFilter<"EmpyloUser"> | Date | string | null
    passportImg?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"EmpyloUser"> | boolean | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"EmpyloUser"> | Date | string | null
    isEmailVerified?: BoolNullableWithAggregatesFilter<"EmpyloUser"> | boolean | null
    verificationCode?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"EmpyloUser"> | $Enums.UserStatus
    gender?: EnumUserGenderNullableWithAggregatesFilter<"EmpyloUser"> | $Enums.UserGender | null
    maritalStatus?: EnumMaitalStatusNullableWithAggregatesFilter<"EmpyloUser"> | $Enums.MaitalStatus | null
    empyloID?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
    permissions?: StringNullableListFilter<"EmpyloUser">
    passwordResetCode?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
    password?: StringNullableWithAggregatesFilter<"EmpyloUser"> | string | null
  }

  export type CompanyUserWhereInput = {
    AND?: CompanyUserWhereInput | CompanyUserWhereInput[]
    OR?: CompanyUserWhereInput[]
    NOT?: CompanyUserWhereInput | CompanyUserWhereInput[]
    id?: StringFilter<"CompanyUser"> | string
    email?: StringFilter<"CompanyUser"> | string
    created_at?: DateTimeNullableFilter<"CompanyUser"> | Date | string | null
    companyName?: StringNullableFilter<"CompanyUser"> | string | null
    phoneNumber?: StringNullableFilter<"CompanyUser"> | string | null
    password?: StringNullableFilter<"CompanyUser"> | string | null
    passwordResetCode?: StringNullableFilter<"CompanyUser"> | string | null
    lastLogin?: DateTimeNullableFilter<"CompanyUser"> | Date | string | null
    passportImg?: StringNullableFilter<"CompanyUser"> | string | null
    isActive?: BoolNullableFilter<"CompanyUser"> | boolean | null
    updated_at?: DateTimeNullableFilter<"CompanyUser"> | Date | string | null
    isEmailVerified?: BoolNullableFilter<"CompanyUser"> | boolean | null
    verificationCode?: StringNullableFilter<"CompanyUser"> | string | null
    industry?: StringNullableFilter<"CompanyUser"> | string | null
    website?: StringNullableFilter<"CompanyUser"> | string | null
    companyDescription?: StringNullableFilter<"CompanyUser"> | string | null
    status?: EnumUserStatusFilter<"CompanyUser"> | $Enums.UserStatus
    role?: EnumSystemRoleFilter<"CompanyUser"> | $Enums.SystemRole
    address?: StringNullableFilter<"CompanyUser"> | string | null
    addressCity?: StringNullableFilter<"CompanyUser"> | string | null
    addressState?: StringNullableFilter<"CompanyUser"> | string | null
    emailNotification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    campaignNtification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    termsConditions?: BoolNullableFilter<"CompanyUser"> | boolean | null
    socialId?: StringNullableFilter<"CompanyUser"> | string | null
    socialProvider?: StringNullableFilter<"CompanyUser"> | string | null
    membersList?: UserListRelationFilter
    company_circle?: CompanyCirclesListRelationFilter
  }

  export type CompanyUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    companyDescription?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    address?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressState?: SortOrderInput | SortOrder
    emailNotification?: SortOrderInput | SortOrder
    campaignNtification?: SortOrderInput | SortOrder
    termsConditions?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    socialProvider?: SortOrderInput | SortOrder
    membersList?: UserOrderByRelationAggregateInput
    company_circle?: CompanyCirclesOrderByRelationAggregateInput
  }

  export type CompanyUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    passwordResetCode?: string
    verificationCode?: string
    AND?: CompanyUserWhereInput | CompanyUserWhereInput[]
    OR?: CompanyUserWhereInput[]
    NOT?: CompanyUserWhereInput | CompanyUserWhereInput[]
    created_at?: DateTimeNullableFilter<"CompanyUser"> | Date | string | null
    companyName?: StringNullableFilter<"CompanyUser"> | string | null
    phoneNumber?: StringNullableFilter<"CompanyUser"> | string | null
    password?: StringNullableFilter<"CompanyUser"> | string | null
    lastLogin?: DateTimeNullableFilter<"CompanyUser"> | Date | string | null
    passportImg?: StringNullableFilter<"CompanyUser"> | string | null
    isActive?: BoolNullableFilter<"CompanyUser"> | boolean | null
    updated_at?: DateTimeNullableFilter<"CompanyUser"> | Date | string | null
    isEmailVerified?: BoolNullableFilter<"CompanyUser"> | boolean | null
    industry?: StringNullableFilter<"CompanyUser"> | string | null
    website?: StringNullableFilter<"CompanyUser"> | string | null
    companyDescription?: StringNullableFilter<"CompanyUser"> | string | null
    status?: EnumUserStatusFilter<"CompanyUser"> | $Enums.UserStatus
    role?: EnumSystemRoleFilter<"CompanyUser"> | $Enums.SystemRole
    address?: StringNullableFilter<"CompanyUser"> | string | null
    addressCity?: StringNullableFilter<"CompanyUser"> | string | null
    addressState?: StringNullableFilter<"CompanyUser"> | string | null
    emailNotification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    campaignNtification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    termsConditions?: BoolNullableFilter<"CompanyUser"> | boolean | null
    socialId?: StringNullableFilter<"CompanyUser"> | string | null
    socialProvider?: StringNullableFilter<"CompanyUser"> | string | null
    membersList?: UserListRelationFilter
    company_circle?: CompanyCirclesListRelationFilter
  }, "id" | "id" | "email" | "passwordResetCode" | "verificationCode">

  export type CompanyUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    companyDescription?: SortOrderInput | SortOrder
    status?: SortOrder
    role?: SortOrder
    address?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressState?: SortOrderInput | SortOrder
    emailNotification?: SortOrderInput | SortOrder
    campaignNtification?: SortOrderInput | SortOrder
    termsConditions?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    socialProvider?: SortOrderInput | SortOrder
    _count?: CompanyUserCountOrderByAggregateInput
    _max?: CompanyUserMaxOrderByAggregateInput
    _min?: CompanyUserMinOrderByAggregateInput
  }

  export type CompanyUserScalarWhereWithAggregatesInput = {
    AND?: CompanyUserScalarWhereWithAggregatesInput | CompanyUserScalarWhereWithAggregatesInput[]
    OR?: CompanyUserScalarWhereWithAggregatesInput[]
    NOT?: CompanyUserScalarWhereWithAggregatesInput | CompanyUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyUser"> | string
    email?: StringWithAggregatesFilter<"CompanyUser"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"CompanyUser"> | Date | string | null
    companyName?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    password?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    passwordResetCode?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"CompanyUser"> | Date | string | null
    passportImg?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"CompanyUser"> | Date | string | null
    isEmailVerified?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
    verificationCode?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    industry?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    website?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    companyDescription?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"CompanyUser"> | $Enums.UserStatus
    role?: EnumSystemRoleWithAggregatesFilter<"CompanyUser"> | $Enums.SystemRole
    address?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    addressCity?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    addressState?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    emailNotification?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
    campaignNtification?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
    termsConditions?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
    socialId?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    socialProvider?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
  }

  export type CompanyCirclesWhereInput = {
    AND?: CompanyCirclesWhereInput | CompanyCirclesWhereInput[]
    OR?: CompanyCirclesWhereInput[]
    NOT?: CompanyCirclesWhereInput | CompanyCirclesWhereInput[]
    id?: StringFilter<"CompanyCircles"> | string
    created_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    coyCircleName?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleDescription?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleShareLink?: StringNullableFilter<"CompanyCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"CompanyCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"CompanyCircles"> | $Enums.ActivityLevel
    companyUserId?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleStatus?: EnumUserStatusFilter<"CompanyCircles"> | $Enums.UserStatus
    coyCircleNos?: StringNullableFilter<"CompanyCircles"> | string | null
    circleImg?: StringNullableFilter<"CompanyCircles"> | string | null
    circleStatus?: EnumCircleStatusNullableFilter<"CompanyCircles"> | $Enums.CircleStatus | null
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    memberList?: UserListRelationFilter
  }

  export type CompanyCirclesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    coyCircleName?: SortOrderInput | SortOrder
    coyCircleDescription?: SortOrderInput | SortOrder
    coyCircleShareLink?: SortOrderInput | SortOrder
    wellbeingScore?: SortOrderInput | SortOrder
    activityLevel?: SortOrder
    companyUserId?: SortOrderInput | SortOrder
    coyCircleStatus?: SortOrder
    coyCircleNos?: SortOrderInput | SortOrder
    circleImg?: SortOrderInput | SortOrder
    circleStatus?: SortOrderInput | SortOrder
    companyUser?: CompanyUserOrderByWithRelationInput
    memberList?: UserOrderByRelationAggregateInput
  }

  export type CompanyCirclesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coyCircleName?: string
    coyCircleShareLink?: string
    coyCircleNos?: string
    AND?: CompanyCirclesWhereInput | CompanyCirclesWhereInput[]
    OR?: CompanyCirclesWhereInput[]
    NOT?: CompanyCirclesWhereInput | CompanyCirclesWhereInput[]
    created_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    coyCircleDescription?: StringNullableFilter<"CompanyCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"CompanyCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"CompanyCircles"> | $Enums.ActivityLevel
    companyUserId?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleStatus?: EnumUserStatusFilter<"CompanyCircles"> | $Enums.UserStatus
    circleImg?: StringNullableFilter<"CompanyCircles"> | string | null
    circleStatus?: EnumCircleStatusNullableFilter<"CompanyCircles"> | $Enums.CircleStatus | null
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    memberList?: UserListRelationFilter
  }, "id" | "id" | "coyCircleName" | "coyCircleShareLink" | "coyCircleNos">

  export type CompanyCirclesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    coyCircleName?: SortOrderInput | SortOrder
    coyCircleDescription?: SortOrderInput | SortOrder
    coyCircleShareLink?: SortOrderInput | SortOrder
    wellbeingScore?: SortOrderInput | SortOrder
    activityLevel?: SortOrder
    companyUserId?: SortOrderInput | SortOrder
    coyCircleStatus?: SortOrder
    coyCircleNos?: SortOrderInput | SortOrder
    circleImg?: SortOrderInput | SortOrder
    circleStatus?: SortOrderInput | SortOrder
    _count?: CompanyCirclesCountOrderByAggregateInput
    _max?: CompanyCirclesMaxOrderByAggregateInput
    _min?: CompanyCirclesMinOrderByAggregateInput
  }

  export type CompanyCirclesScalarWhereWithAggregatesInput = {
    AND?: CompanyCirclesScalarWhereWithAggregatesInput | CompanyCirclesScalarWhereWithAggregatesInput[]
    OR?: CompanyCirclesScalarWhereWithAggregatesInput[]
    NOT?: CompanyCirclesScalarWhereWithAggregatesInput | CompanyCirclesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyCircles"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"CompanyCircles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"CompanyCircles"> | Date | string | null
    coyCircleName?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
    coyCircleDescription?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
    coyCircleShareLink?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
    wellbeingScore?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
    activityLevel?: EnumActivityLevelWithAggregatesFilter<"CompanyCircles"> | $Enums.ActivityLevel
    companyUserId?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
    coyCircleStatus?: EnumUserStatusWithAggregatesFilter<"CompanyCircles"> | $Enums.UserStatus
    coyCircleNos?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
    circleImg?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
    circleStatus?: EnumCircleStatusNullableWithAggregatesFilter<"CompanyCircles"> | $Enums.CircleStatus | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    ageRange?: StringNullableFilter<"User"> | string | null
    ethnicity?: StringNullableFilter<"User"> | string | null
    gender?: EnumUserGenderNullableFilter<"User"> | $Enums.UserGender | null
    maritalStatus?: EnumMaitalStatusNullableFilter<"User"> | $Enums.MaitalStatus | null
    disability?: StringNullableFilter<"User"> | string | null
    DOB?: StringNullableFilter<"User"> | string | null
    accountType?: EnumUserAccountFilter<"User"> | $Enums.UserAccount
    department?: StringNullableFilter<"User"> | string | null
    jobRole?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumSystemRoleFilter<"User"> | $Enums.SystemRole
    passwordResetCode?: StringNullableFilter<"User"> | string | null
    createdBy?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    passportImg?: StringNullableFilter<"User"> | string | null
    isActive?: BoolNullableFilter<"User"> | boolean | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    verificationCode?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    emailNotification?: BoolNullableFilter<"User"> | boolean | null
    campaignNtification?: BoolNullableFilter<"User"> | boolean | null
    termsConditions?: BoolNullableFilter<"User"> | boolean | null
    addedBy?: StringNullableFilter<"User"> | string | null
    socialId?: StringNullableFilter<"User"> | string | null
    socialProvider?: StringNullableFilter<"User"> | string | null
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    coyCircleAttachedTo?: CompanyCirclesListRelationFilter
    userCircles?: UserCirclesListRelationFilter
    otherUserCirclesIn?: UserCirclesListRelationFilter
    listOfScoreDetail?: ScoreDetailListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    ageRange?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    disability?: SortOrderInput | SortOrder
    DOB?: SortOrderInput | SortOrder
    accountType?: SortOrder
    department?: SortOrderInput | SortOrder
    jobRole?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    status?: SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    emailNotification?: SortOrderInput | SortOrder
    campaignNtification?: SortOrderInput | SortOrder
    termsConditions?: SortOrderInput | SortOrder
    addedBy?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    socialProvider?: SortOrderInput | SortOrder
    companyUser?: CompanyUserOrderByWithRelationInput
    coyCircleAttachedTo?: CompanyCirclesOrderByRelationAggregateInput
    userCircles?: UserCirclesOrderByRelationAggregateInput
    otherUserCirclesIn?: UserCirclesOrderByRelationAggregateInput
    listOfScoreDetail?: ScoreDetailOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    passwordResetCode?: string
    verificationCode?: string
    addedBy?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    ageRange?: StringNullableFilter<"User"> | string | null
    ethnicity?: StringNullableFilter<"User"> | string | null
    gender?: EnumUserGenderNullableFilter<"User"> | $Enums.UserGender | null
    maritalStatus?: EnumMaitalStatusNullableFilter<"User"> | $Enums.MaitalStatus | null
    disability?: StringNullableFilter<"User"> | string | null
    DOB?: StringNullableFilter<"User"> | string | null
    accountType?: EnumUserAccountFilter<"User"> | $Enums.UserAccount
    department?: StringNullableFilter<"User"> | string | null
    jobRole?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumSystemRoleFilter<"User"> | $Enums.SystemRole
    createdBy?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    passportImg?: StringNullableFilter<"User"> | string | null
    isActive?: BoolNullableFilter<"User"> | boolean | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    emailNotification?: BoolNullableFilter<"User"> | boolean | null
    campaignNtification?: BoolNullableFilter<"User"> | boolean | null
    termsConditions?: BoolNullableFilter<"User"> | boolean | null
    socialId?: StringNullableFilter<"User"> | string | null
    socialProvider?: StringNullableFilter<"User"> | string | null
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    coyCircleAttachedTo?: CompanyCirclesListRelationFilter
    userCircles?: UserCirclesListRelationFilter
    otherUserCirclesIn?: UserCirclesListRelationFilter
    listOfScoreDetail?: ScoreDetailListRelationFilter
  }, "id" | "id" | "email" | "phoneNumber" | "passwordResetCode" | "verificationCode" | "addedBy">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    ageRange?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    disability?: SortOrderInput | SortOrder
    DOB?: SortOrderInput | SortOrder
    accountType?: SortOrder
    department?: SortOrderInput | SortOrder
    jobRole?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordResetCode?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    passportImg?: SortOrderInput | SortOrder
    isActive?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    status?: SortOrder
    address?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    emailNotification?: SortOrderInput | SortOrder
    campaignNtification?: SortOrderInput | SortOrder
    termsConditions?: SortOrderInput | SortOrder
    addedBy?: SortOrderInput | SortOrder
    socialId?: SortOrderInput | SortOrder
    socialProvider?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    ageRange?: StringNullableWithAggregatesFilter<"User"> | string | null
    ethnicity?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumUserGenderNullableWithAggregatesFilter<"User"> | $Enums.UserGender | null
    maritalStatus?: EnumMaitalStatusNullableWithAggregatesFilter<"User"> | $Enums.MaitalStatus | null
    disability?: StringNullableWithAggregatesFilter<"User"> | string | null
    DOB?: StringNullableWithAggregatesFilter<"User"> | string | null
    accountType?: EnumUserAccountWithAggregatesFilter<"User"> | $Enums.UserAccount
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    jobRole?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumSystemRoleWithAggregatesFilter<"User"> | $Enums.SystemRole
    passwordResetCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passportImg?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isEmailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    verificationCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailNotification?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    campaignNtification?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    termsConditions?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    addedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    socialId?: StringNullableWithAggregatesFilter<"User"> | string | null
    socialProvider?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserCirclesWhereInput = {
    AND?: UserCirclesWhereInput | UserCirclesWhereInput[]
    OR?: UserCirclesWhereInput[]
    NOT?: UserCirclesWhereInput | UserCirclesWhereInput[]
    id?: StringFilter<"UserCircles"> | string
    circleImg?: StringNullableFilter<"UserCircles"> | string | null
    created_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    userCircleName?: StringNullableFilter<"UserCircles"> | string | null
    userCircleDescription?: StringNullableFilter<"UserCircles"> | string | null
    userCircleShareLink?: StringNullableFilter<"UserCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"UserCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"UserCircles"> | $Enums.ActivityLevel
    userId?: StringNullableFilter<"UserCircles"> | string | null
    createdBy?: StringNullableFilter<"UserCircles"> | string | null
    userCircleStatus?: EnumUserStatusFilter<"UserCircles"> | $Enums.UserStatus
    userCircleNos?: StringNullableFilter<"UserCircles"> | string | null
    circleStatus?: EnumCircleStatusNullableFilter<"UserCircles"> | $Enums.CircleStatus | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    memberList?: UserListRelationFilter
  }

  export type UserCirclesOrderByWithRelationInput = {
    id?: SortOrder
    circleImg?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    userCircleName?: SortOrderInput | SortOrder
    userCircleDescription?: SortOrderInput | SortOrder
    userCircleShareLink?: SortOrderInput | SortOrder
    wellbeingScore?: SortOrderInput | SortOrder
    activityLevel?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    userCircleStatus?: SortOrder
    userCircleNos?: SortOrderInput | SortOrder
    circleStatus?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    memberList?: UserOrderByRelationAggregateInput
  }

  export type UserCirclesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userCircleName?: string
    userCircleShareLink?: string
    userCircleNos?: string
    AND?: UserCirclesWhereInput | UserCirclesWhereInput[]
    OR?: UserCirclesWhereInput[]
    NOT?: UserCirclesWhereInput | UserCirclesWhereInput[]
    circleImg?: StringNullableFilter<"UserCircles"> | string | null
    created_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    userCircleDescription?: StringNullableFilter<"UserCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"UserCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"UserCircles"> | $Enums.ActivityLevel
    userId?: StringNullableFilter<"UserCircles"> | string | null
    createdBy?: StringNullableFilter<"UserCircles"> | string | null
    userCircleStatus?: EnumUserStatusFilter<"UserCircles"> | $Enums.UserStatus
    circleStatus?: EnumCircleStatusNullableFilter<"UserCircles"> | $Enums.CircleStatus | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    memberList?: UserListRelationFilter
  }, "id" | "id" | "userCircleName" | "userCircleShareLink" | "userCircleNos">

  export type UserCirclesOrderByWithAggregationInput = {
    id?: SortOrder
    circleImg?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    userCircleName?: SortOrderInput | SortOrder
    userCircleDescription?: SortOrderInput | SortOrder
    userCircleShareLink?: SortOrderInput | SortOrder
    wellbeingScore?: SortOrderInput | SortOrder
    activityLevel?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    userCircleStatus?: SortOrder
    userCircleNos?: SortOrderInput | SortOrder
    circleStatus?: SortOrderInput | SortOrder
    _count?: UserCirclesCountOrderByAggregateInput
    _max?: UserCirclesMaxOrderByAggregateInput
    _min?: UserCirclesMinOrderByAggregateInput
  }

  export type UserCirclesScalarWhereWithAggregatesInput = {
    AND?: UserCirclesScalarWhereWithAggregatesInput | UserCirclesScalarWhereWithAggregatesInput[]
    OR?: UserCirclesScalarWhereWithAggregatesInput[]
    NOT?: UserCirclesScalarWhereWithAggregatesInput | UserCirclesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCircles"> | string
    circleImg?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"UserCircles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"UserCircles"> | Date | string | null
    userCircleName?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    userCircleDescription?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    userCircleShareLink?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    wellbeingScore?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    activityLevel?: EnumActivityLevelWithAggregatesFilter<"UserCircles"> | $Enums.ActivityLevel
    userId?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    userCircleStatus?: EnumUserStatusWithAggregatesFilter<"UserCircles"> | $Enums.UserStatus
    userCircleNos?: StringNullableWithAggregatesFilter<"UserCircles"> | string | null
    circleStatus?: EnumCircleStatusNullableWithAggregatesFilter<"UserCircles"> | $Enums.CircleStatus | null
  }

  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: StringFilter<"Assessment"> | string
    created_at?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    setNo?: StringNullableFilter<"Assessment"> | string | null
    assessmentType?: EnumAssessmentTypeNullableFilter<"Assessment"> | $Enums.AssessmentType | null
    setQuestions?: StringNullableListFilter<"Assessment">
    createdWeeklyBy?: StringNullableFilter<"Assessment"> | string | null
    createdCheckinBy?: StringNullableFilter<"Assessment"> | string | null
    empyloUser?: XOR<EmpyloUserNullableRelationFilter, EmpyloUserWhereInput> | null
    empyloUserCheckin?: XOR<EmpyloUserNullableRelationFilter, EmpyloUserWhereInput> | null
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    setNo?: SortOrderInput | SortOrder
    assessmentType?: SortOrderInput | SortOrder
    setQuestions?: SortOrder
    createdWeeklyBy?: SortOrderInput | SortOrder
    createdCheckinBy?: SortOrderInput | SortOrder
    empyloUser?: EmpyloUserOrderByWithRelationInput
    empyloUserCheckin?: EmpyloUserOrderByWithRelationInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    setNo?: string
    assessmentType?: $Enums.AssessmentType
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    created_at?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    setQuestions?: StringNullableListFilter<"Assessment">
    createdWeeklyBy?: StringNullableFilter<"Assessment"> | string | null
    createdCheckinBy?: StringNullableFilter<"Assessment"> | string | null
    empyloUser?: XOR<EmpyloUserNullableRelationFilter, EmpyloUserWhereInput> | null
    empyloUserCheckin?: XOR<EmpyloUserNullableRelationFilter, EmpyloUserWhereInput> | null
  }, "id" | "id" | "setNo" | "assessmentType">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    setNo?: SortOrderInput | SortOrder
    assessmentType?: SortOrderInput | SortOrder
    setQuestions?: SortOrder
    createdWeeklyBy?: SortOrderInput | SortOrder
    createdCheckinBy?: SortOrderInput | SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assessment"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Assessment"> | Date | string | null
    setNo?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    assessmentType?: EnumAssessmentTypeNullableWithAggregatesFilter<"Assessment"> | $Enums.AssessmentType | null
    setQuestions?: StringNullableListFilter<"Assessment">
    createdWeeklyBy?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    createdCheckinBy?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
  }

  export type ScoreDetailWhereInput = {
    AND?: ScoreDetailWhereInput | ScoreDetailWhereInput[]
    OR?: ScoreDetailWhereInput[]
    NOT?: ScoreDetailWhereInput | ScoreDetailWhereInput[]
    id?: StringFilter<"ScoreDetail"> | string
    ownerID?: StringNullableFilter<"ScoreDetail"> | string | null
    weeklyScore?: IntNullableFilter<"ScoreDetail"> | number | null
    dailyScore?: IntNullableFilter<"ScoreDetail"> | number | null
    wellbeingScore?: IntNullableFilter<"ScoreDetail"> | number | null
    setNo?: StringNullableFilter<"ScoreDetail"> | string | null
    assessmentType?: EnumAssessmentTypeNullableFilter<"ScoreDetail"> | $Enums.AssessmentType | null
    created_at?: DateTimeNullableFilter<"ScoreDetail"> | Date | string | null
    owner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ScoreDetailOrderByWithRelationInput = {
    id?: SortOrder
    ownerID?: SortOrderInput | SortOrder
    weeklyScore?: SortOrderInput | SortOrder
    dailyScore?: SortOrderInput | SortOrder
    wellbeingScore?: SortOrderInput | SortOrder
    setNo?: SortOrderInput | SortOrder
    assessmentType?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type ScoreDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assessmentType?: $Enums.AssessmentType
    AND?: ScoreDetailWhereInput | ScoreDetailWhereInput[]
    OR?: ScoreDetailWhereInput[]
    NOT?: ScoreDetailWhereInput | ScoreDetailWhereInput[]
    ownerID?: StringNullableFilter<"ScoreDetail"> | string | null
    weeklyScore?: IntNullableFilter<"ScoreDetail"> | number | null
    dailyScore?: IntNullableFilter<"ScoreDetail"> | number | null
    wellbeingScore?: IntNullableFilter<"ScoreDetail"> | number | null
    setNo?: StringNullableFilter<"ScoreDetail"> | string | null
    created_at?: DateTimeNullableFilter<"ScoreDetail"> | Date | string | null
    owner?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "id" | "assessmentType">

  export type ScoreDetailOrderByWithAggregationInput = {
    id?: SortOrder
    ownerID?: SortOrderInput | SortOrder
    weeklyScore?: SortOrderInput | SortOrder
    dailyScore?: SortOrderInput | SortOrder
    wellbeingScore?: SortOrderInput | SortOrder
    setNo?: SortOrderInput | SortOrder
    assessmentType?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ScoreDetailCountOrderByAggregateInput
    _avg?: ScoreDetailAvgOrderByAggregateInput
    _max?: ScoreDetailMaxOrderByAggregateInput
    _min?: ScoreDetailMinOrderByAggregateInput
    _sum?: ScoreDetailSumOrderByAggregateInput
  }

  export type ScoreDetailScalarWhereWithAggregatesInput = {
    AND?: ScoreDetailScalarWhereWithAggregatesInput | ScoreDetailScalarWhereWithAggregatesInput[]
    OR?: ScoreDetailScalarWhereWithAggregatesInput[]
    NOT?: ScoreDetailScalarWhereWithAggregatesInput | ScoreDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoreDetail"> | string
    ownerID?: StringNullableWithAggregatesFilter<"ScoreDetail"> | string | null
    weeklyScore?: IntNullableWithAggregatesFilter<"ScoreDetail"> | number | null
    dailyScore?: IntNullableWithAggregatesFilter<"ScoreDetail"> | number | null
    wellbeingScore?: IntNullableWithAggregatesFilter<"ScoreDetail"> | number | null
    setNo?: StringNullableWithAggregatesFilter<"ScoreDetail"> | string | null
    assessmentType?: EnumAssessmentTypeNullableWithAggregatesFilter<"ScoreDetail"> | $Enums.AssessmentType | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ScoreDetail"> | Date | string | null
  }

  export type EmpyloUserCreateInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    role?: $Enums.SystemRole
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    empyloID?: string | null
    permissions?: EmpyloUserCreatepermissionsInput | string[]
    passwordResetCode?: string | null
    password?: string | null
    weeklyAssessment?: AssessmentCreateNestedManyWithoutEmpyloUserInput
    checkinAssessment?: AssessmentCreateNestedManyWithoutEmpyloUserCheckinInput
  }

  export type EmpyloUserUncheckedCreateInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    role?: $Enums.SystemRole
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    empyloID?: string | null
    permissions?: EmpyloUserCreatepermissionsInput | string[]
    passwordResetCode?: string | null
    password?: string | null
    weeklyAssessment?: AssessmentUncheckedCreateNestedManyWithoutEmpyloUserInput
    checkinAssessment?: AssessmentUncheckedCreateNestedManyWithoutEmpyloUserCheckinInput
  }

  export type EmpyloUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    weeklyAssessment?: AssessmentUpdateManyWithoutEmpyloUserNestedInput
    checkinAssessment?: AssessmentUpdateManyWithoutEmpyloUserCheckinNestedInput
  }

  export type EmpyloUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    weeklyAssessment?: AssessmentUncheckedUpdateManyWithoutEmpyloUserNestedInput
    checkinAssessment?: AssessmentUncheckedUpdateManyWithoutEmpyloUserCheckinNestedInput
  }

  export type EmpyloUserCreateManyInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    role?: $Enums.SystemRole
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    empyloID?: string | null
    permissions?: EmpyloUserCreatepermissionsInput | string[]
    passwordResetCode?: string | null
    password?: string | null
  }

  export type EmpyloUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmpyloUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUserCreateInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    companyName?: string | null
    phoneNumber?: string | null
    password?: string | null
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    industry?: string | null
    website?: string | null
    companyDescription?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.SystemRole
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    socialId?: string | null
    socialProvider?: string | null
    membersList?: UserCreateNestedManyWithoutCompanyUserInput
    company_circle?: CompanyCirclesCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserUncheckedCreateInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    companyName?: string | null
    phoneNumber?: string | null
    password?: string | null
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    industry?: string | null
    website?: string | null
    companyDescription?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.SystemRole
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    socialId?: string | null
    socialProvider?: string | null
    membersList?: UserUncheckedCreateNestedManyWithoutCompanyUserInput
    company_circle?: CompanyCirclesUncheckedCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    membersList?: UserUpdateManyWithoutCompanyUserNestedInput
    company_circle?: CompanyCirclesUpdateManyWithoutCompanyUserNestedInput
  }

  export type CompanyUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    membersList?: UserUncheckedUpdateManyWithoutCompanyUserNestedInput
    company_circle?: CompanyCirclesUncheckedUpdateManyWithoutCompanyUserNestedInput
  }

  export type CompanyUserCreateManyInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    companyName?: string | null
    phoneNumber?: string | null
    password?: string | null
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    industry?: string | null
    website?: string | null
    companyDescription?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.SystemRole
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    socialId?: string | null
    socialProvider?: string | null
  }

  export type CompanyUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCirclesCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
    companyUser?: CompanyUserCreateNestedOneWithoutCompany_circleInput
    memberList?: UserCreateNestedManyWithoutCoyCircleAttachedToInput
  }

  export type CompanyCirclesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    companyUserId?: string | null
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
    memberList?: UserUncheckedCreateNestedManyWithoutCoyCircleAttachedToInput
  }

  export type CompanyCirclesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    companyUser?: CompanyUserUpdateOneWithoutCompany_circleNestedInput
    memberList?: UserUpdateManyWithoutCoyCircleAttachedToNestedInput
  }

  export type CompanyCirclesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    companyUserId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    memberList?: UserUncheckedUpdateManyWithoutCoyCircleAttachedToNestedInput
  }

  export type CompanyCirclesCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    companyUserId?: string | null
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
  }

  export type CompanyCirclesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type CompanyCirclesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    companyUserId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    coyCircleAttachedTo?: CompanyCirclesCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    createdBy?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesUncheckedCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    coyCircleAttachedTo?: CompanyCirclesUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    createdBy?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCirclesCreateInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
    user?: UserCreateNestedOneWithoutUserCirclesInput
    memberList?: UserCreateNestedManyWithoutOtherUserCirclesInInput
  }

  export type UserCirclesUncheckedCreateInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    userId?: string | null
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
    memberList?: UserUncheckedCreateNestedManyWithoutOtherUserCirclesInInput
  }

  export type UserCirclesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    user?: UserUpdateOneWithoutUserCirclesNestedInput
    memberList?: UserUpdateManyWithoutOtherUserCirclesInNestedInput
  }

  export type UserCirclesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    memberList?: UserUncheckedUpdateManyWithoutOtherUserCirclesInNestedInput
  }

  export type UserCirclesCreateManyInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    userId?: string | null
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
  }

  export type UserCirclesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type UserCirclesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type AssessmentCreateInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    empyloUser?: EmpyloUserCreateNestedOneWithoutWeeklyAssessmentInput
    empyloUserCheckin?: EmpyloUserCreateNestedOneWithoutCheckinAssessmentInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    createdWeeklyBy?: string | null
    createdCheckinBy?: string | null
  }

  export type AssessmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    empyloUser?: EmpyloUserUpdateOneWithoutWeeklyAssessmentNestedInput
    empyloUserCheckin?: EmpyloUserUpdateOneWithoutCheckinAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    createdWeeklyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdCheckinBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssessmentCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    createdWeeklyBy?: string | null
    createdCheckinBy?: string | null
  }

  export type AssessmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    createdWeeklyBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdCheckinBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoreDetailCreateInput = {
    id?: string
    weeklyScore?: number | null
    dailyScore?: number | null
    wellbeingScore?: number | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    created_at?: Date | string | null
    owner?: UserCreateNestedOneWithoutListOfScoreDetailInput
  }

  export type ScoreDetailUncheckedCreateInput = {
    id?: string
    ownerID?: string | null
    weeklyScore?: number | null
    dailyScore?: number | null
    wellbeingScore?: number | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    created_at?: Date | string | null
  }

  export type ScoreDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    dailyScore?: NullableIntFieldUpdateOperationsInput | number | null
    wellbeingScore?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneWithoutListOfScoreDetailNestedInput
  }

  export type ScoreDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerID?: NullableStringFieldUpdateOperationsInput | string | null
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    dailyScore?: NullableIntFieldUpdateOperationsInput | number | null
    wellbeingScore?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScoreDetailCreateManyInput = {
    id?: string
    ownerID?: string | null
    weeklyScore?: number | null
    dailyScore?: number | null
    wellbeingScore?: number | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    created_at?: Date | string | null
  }

  export type ScoreDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    dailyScore?: NullableIntFieldUpdateOperationsInput | number | null
    wellbeingScore?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScoreDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerID?: NullableStringFieldUpdateOperationsInput | string | null
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    dailyScore?: NullableIntFieldUpdateOperationsInput | number | null
    wellbeingScore?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSystemRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemRoleFilter<$PrismaModel> | $Enums.SystemRole
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserGenderNullableFilter<$PrismaModel> | $Enums.UserGender | null
  }

  export type EnumMaitalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaitalStatus | EnumMaitalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaitalStatusNullableFilter<$PrismaModel> | $Enums.MaitalStatus | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpyloUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    empyloID?: SortOrder
    permissions?: SortOrder
    passwordResetCode?: SortOrder
    password?: SortOrder
  }

  export type EmpyloUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    empyloID?: SortOrder
    passwordResetCode?: SortOrder
    password?: SortOrder
  }

  export type EmpyloUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    status?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    empyloID?: SortOrder
    passwordResetCode?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSystemRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemRoleWithAggregatesFilter<$PrismaModel> | $Enums.SystemRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemRoleFilter<$PrismaModel>
    _max?: NestedEnumSystemRoleFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumUserGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumUserGenderNullableFilter<$PrismaModel>
  }

  export type EnumMaitalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaitalStatus | EnumMaitalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaitalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaitalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaitalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaitalStatusNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CompanyCirclesListRelationFilter = {
    every?: CompanyCirclesWhereInput
    some?: CompanyCirclesWhereInput
    none?: CompanyCirclesWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCirclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    industry?: SortOrder
    website?: SortOrder
    companyDescription?: SortOrder
    status?: SortOrder
    role?: SortOrder
    address?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
    socialId?: SortOrder
    socialProvider?: SortOrder
  }

  export type CompanyUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    industry?: SortOrder
    website?: SortOrder
    companyDescription?: SortOrder
    status?: SortOrder
    role?: SortOrder
    address?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
    socialId?: SortOrder
    socialProvider?: SortOrder
  }

  export type CompanyUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    passwordResetCode?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    industry?: SortOrder
    website?: SortOrder
    companyDescription?: SortOrder
    status?: SortOrder
    role?: SortOrder
    address?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
    socialId?: SortOrder
    socialProvider?: SortOrder
  }

  export type EnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
  }

  export type EnumCircleStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CircleStatus | EnumCircleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCircleStatusNullableFilter<$PrismaModel> | $Enums.CircleStatus | null
  }

  export type CompanyUserNullableRelationFilter = {
    is?: CompanyUserWhereInput | null
    isNot?: CompanyUserWhereInput | null
  }

  export type CompanyCirclesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    coyCircleName?: SortOrder
    coyCircleDescription?: SortOrder
    coyCircleShareLink?: SortOrder
    wellbeingScore?: SortOrder
    activityLevel?: SortOrder
    companyUserId?: SortOrder
    coyCircleStatus?: SortOrder
    coyCircleNos?: SortOrder
    circleImg?: SortOrder
    circleStatus?: SortOrder
  }

  export type CompanyCirclesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    coyCircleName?: SortOrder
    coyCircleDescription?: SortOrder
    coyCircleShareLink?: SortOrder
    wellbeingScore?: SortOrder
    activityLevel?: SortOrder
    companyUserId?: SortOrder
    coyCircleStatus?: SortOrder
    coyCircleNos?: SortOrder
    circleImg?: SortOrder
    circleStatus?: SortOrder
  }

  export type CompanyCirclesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    coyCircleName?: SortOrder
    coyCircleDescription?: SortOrder
    coyCircleShareLink?: SortOrder
    wellbeingScore?: SortOrder
    activityLevel?: SortOrder
    companyUserId?: SortOrder
    coyCircleStatus?: SortOrder
    coyCircleNos?: SortOrder
    circleImg?: SortOrder
    circleStatus?: SortOrder
  }

  export type EnumActivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelFilter<$PrismaModel>
  }

  export type EnumCircleStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircleStatus | EnumCircleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCircleStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CircleStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCircleStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCircleStatusNullableFilter<$PrismaModel>
  }

  export type EnumUserAccountFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountFilter<$PrismaModel> | $Enums.UserAccount
  }

  export type UserCirclesListRelationFilter = {
    every?: UserCirclesWhereInput
    some?: UserCirclesWhereInput
    none?: UserCirclesWhereInput
  }

  export type ScoreDetailListRelationFilter = {
    every?: ScoreDetailWhereInput
    some?: ScoreDetailWhereInput
    none?: ScoreDetailWhereInput
  }

  export type UserCirclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    ageRange?: SortOrder
    ethnicity?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    disability?: SortOrder
    DOB?: SortOrder
    accountType?: SortOrder
    department?: SortOrder
    jobRole?: SortOrder
    password?: SortOrder
    role?: SortOrder
    passwordResetCode?: SortOrder
    createdBy?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    status?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
    addedBy?: SortOrder
    socialId?: SortOrder
    socialProvider?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    ageRange?: SortOrder
    ethnicity?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    disability?: SortOrder
    DOB?: SortOrder
    accountType?: SortOrder
    department?: SortOrder
    jobRole?: SortOrder
    password?: SortOrder
    role?: SortOrder
    passwordResetCode?: SortOrder
    createdBy?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    status?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
    addedBy?: SortOrder
    socialId?: SortOrder
    socialProvider?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    ageRange?: SortOrder
    ethnicity?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    disability?: SortOrder
    DOB?: SortOrder
    accountType?: SortOrder
    department?: SortOrder
    jobRole?: SortOrder
    password?: SortOrder
    role?: SortOrder
    passwordResetCode?: SortOrder
    createdBy?: SortOrder
    lastLogin?: SortOrder
    passportImg?: SortOrder
    isActive?: SortOrder
    updated_at?: SortOrder
    isEmailVerified?: SortOrder
    verificationCode?: SortOrder
    status?: SortOrder
    address?: SortOrder
    bio?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
    addedBy?: SortOrder
    socialId?: SortOrder
    socialProvider?: SortOrder
  }

  export type EnumUserAccountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountWithAggregatesFilter<$PrismaModel> | $Enums.UserAccount
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserAccountFilter<$PrismaModel>
    _max?: NestedEnumUserAccountFilter<$PrismaModel>
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserCirclesCountOrderByAggregateInput = {
    id?: SortOrder
    circleImg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userCircleName?: SortOrder
    userCircleDescription?: SortOrder
    userCircleShareLink?: SortOrder
    wellbeingScore?: SortOrder
    activityLevel?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    userCircleStatus?: SortOrder
    userCircleNos?: SortOrder
    circleStatus?: SortOrder
  }

  export type UserCirclesMaxOrderByAggregateInput = {
    id?: SortOrder
    circleImg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userCircleName?: SortOrder
    userCircleDescription?: SortOrder
    userCircleShareLink?: SortOrder
    wellbeingScore?: SortOrder
    activityLevel?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    userCircleStatus?: SortOrder
    userCircleNos?: SortOrder
    circleStatus?: SortOrder
  }

  export type UserCirclesMinOrderByAggregateInput = {
    id?: SortOrder
    circleImg?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    userCircleName?: SortOrder
    userCircleDescription?: SortOrder
    userCircleShareLink?: SortOrder
    wellbeingScore?: SortOrder
    activityLevel?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    userCircleStatus?: SortOrder
    userCircleNos?: SortOrder
    circleStatus?: SortOrder
  }

  export type EnumAssessmentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel> | $Enums.AssessmentType | null
  }

  export type EmpyloUserNullableRelationFilter = {
    is?: EmpyloUserWhereInput | null
    isNot?: EmpyloUserWhereInput | null
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    setNo?: SortOrder
    assessmentType?: SortOrder
    setQuestions?: SortOrder
    createdWeeklyBy?: SortOrder
    createdCheckinBy?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    setNo?: SortOrder
    assessmentType?: SortOrder
    createdWeeklyBy?: SortOrder
    createdCheckinBy?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    setNo?: SortOrder
    assessmentType?: SortOrder
    createdWeeklyBy?: SortOrder
    createdCheckinBy?: SortOrder
  }

  export type EnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ScoreDetailCountOrderByAggregateInput = {
    id?: SortOrder
    ownerID?: SortOrder
    weeklyScore?: SortOrder
    dailyScore?: SortOrder
    wellbeingScore?: SortOrder
    setNo?: SortOrder
    assessmentType?: SortOrder
    created_at?: SortOrder
  }

  export type ScoreDetailAvgOrderByAggregateInput = {
    weeklyScore?: SortOrder
    dailyScore?: SortOrder
    wellbeingScore?: SortOrder
  }

  export type ScoreDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerID?: SortOrder
    weeklyScore?: SortOrder
    dailyScore?: SortOrder
    wellbeingScore?: SortOrder
    setNo?: SortOrder
    assessmentType?: SortOrder
    created_at?: SortOrder
  }

  export type ScoreDetailMinOrderByAggregateInput = {
    id?: SortOrder
    ownerID?: SortOrder
    weeklyScore?: SortOrder
    dailyScore?: SortOrder
    wellbeingScore?: SortOrder
    setNo?: SortOrder
    assessmentType?: SortOrder
    created_at?: SortOrder
  }

  export type ScoreDetailSumOrderByAggregateInput = {
    weeklyScore?: SortOrder
    dailyScore?: SortOrder
    wellbeingScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EmpyloUserCreatepermissionsInput = {
    set: string[]
  }

  export type AssessmentCreateNestedManyWithoutEmpyloUserInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserInput, AssessmentUncheckedCreateWithoutEmpyloUserInput> | AssessmentCreateWithoutEmpyloUserInput[] | AssessmentUncheckedCreateWithoutEmpyloUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserInput | AssessmentCreateOrConnectWithoutEmpyloUserInput[]
    createMany?: AssessmentCreateManyEmpyloUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type AssessmentCreateNestedManyWithoutEmpyloUserCheckinInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserCheckinInput, AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput> | AssessmentCreateWithoutEmpyloUserCheckinInput[] | AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput | AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput[]
    createMany?: AssessmentCreateManyEmpyloUserCheckinInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutEmpyloUserInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserInput, AssessmentUncheckedCreateWithoutEmpyloUserInput> | AssessmentCreateWithoutEmpyloUserInput[] | AssessmentUncheckedCreateWithoutEmpyloUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserInput | AssessmentCreateOrConnectWithoutEmpyloUserInput[]
    createMany?: AssessmentCreateManyEmpyloUserInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutEmpyloUserCheckinInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserCheckinInput, AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput> | AssessmentCreateWithoutEmpyloUserCheckinInput[] | AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput | AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput[]
    createMany?: AssessmentCreateManyEmpyloUserCheckinInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSystemRoleFieldUpdateOperationsInput = {
    set?: $Enums.SystemRole
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableEnumUserGenderFieldUpdateOperationsInput = {
    set?: $Enums.UserGender | null
  }

  export type NullableEnumMaitalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaitalStatus | null
  }

  export type EmpyloUserUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AssessmentUpdateManyWithoutEmpyloUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserInput, AssessmentUncheckedCreateWithoutEmpyloUserInput> | AssessmentCreateWithoutEmpyloUserInput[] | AssessmentUncheckedCreateWithoutEmpyloUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserInput | AssessmentCreateOrConnectWithoutEmpyloUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutEmpyloUserInput | AssessmentUpsertWithWhereUniqueWithoutEmpyloUserInput[]
    createMany?: AssessmentCreateManyEmpyloUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutEmpyloUserInput | AssessmentUpdateWithWhereUniqueWithoutEmpyloUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutEmpyloUserInput | AssessmentUpdateManyWithWhereWithoutEmpyloUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type AssessmentUpdateManyWithoutEmpyloUserCheckinNestedInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserCheckinInput, AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput> | AssessmentCreateWithoutEmpyloUserCheckinInput[] | AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput | AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutEmpyloUserCheckinInput | AssessmentUpsertWithWhereUniqueWithoutEmpyloUserCheckinInput[]
    createMany?: AssessmentCreateManyEmpyloUserCheckinInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutEmpyloUserCheckinInput | AssessmentUpdateWithWhereUniqueWithoutEmpyloUserCheckinInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutEmpyloUserCheckinInput | AssessmentUpdateManyWithWhereWithoutEmpyloUserCheckinInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutEmpyloUserNestedInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserInput, AssessmentUncheckedCreateWithoutEmpyloUserInput> | AssessmentCreateWithoutEmpyloUserInput[] | AssessmentUncheckedCreateWithoutEmpyloUserInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserInput | AssessmentCreateOrConnectWithoutEmpyloUserInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutEmpyloUserInput | AssessmentUpsertWithWhereUniqueWithoutEmpyloUserInput[]
    createMany?: AssessmentCreateManyEmpyloUserInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutEmpyloUserInput | AssessmentUpdateWithWhereUniqueWithoutEmpyloUserInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutEmpyloUserInput | AssessmentUpdateManyWithWhereWithoutEmpyloUserInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutEmpyloUserCheckinNestedInput = {
    create?: XOR<AssessmentCreateWithoutEmpyloUserCheckinInput, AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput> | AssessmentCreateWithoutEmpyloUserCheckinInput[] | AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput | AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutEmpyloUserCheckinInput | AssessmentUpsertWithWhereUniqueWithoutEmpyloUserCheckinInput[]
    createMany?: AssessmentCreateManyEmpyloUserCheckinInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutEmpyloUserCheckinInput | AssessmentUpdateWithWhereUniqueWithoutEmpyloUserCheckinInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutEmpyloUserCheckinInput | AssessmentUpdateManyWithWhereWithoutEmpyloUserCheckinInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCompanyUserInput = {
    create?: XOR<UserCreateWithoutCompanyUserInput, UserUncheckedCreateWithoutCompanyUserInput> | UserCreateWithoutCompanyUserInput[] | UserUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyUserInput | UserCreateOrConnectWithoutCompanyUserInput[]
    createMany?: UserCreateManyCompanyUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CompanyCirclesCreateNestedManyWithoutCompanyUserInput = {
    create?: XOR<CompanyCirclesCreateWithoutCompanyUserInput, CompanyCirclesUncheckedCreateWithoutCompanyUserInput> | CompanyCirclesCreateWithoutCompanyUserInput[] | CompanyCirclesUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutCompanyUserInput | CompanyCirclesCreateOrConnectWithoutCompanyUserInput[]
    createMany?: CompanyCirclesCreateManyCompanyUserInputEnvelope
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyUserInput = {
    create?: XOR<UserCreateWithoutCompanyUserInput, UserUncheckedCreateWithoutCompanyUserInput> | UserCreateWithoutCompanyUserInput[] | UserUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyUserInput | UserCreateOrConnectWithoutCompanyUserInput[]
    createMany?: UserCreateManyCompanyUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CompanyCirclesUncheckedCreateNestedManyWithoutCompanyUserInput = {
    create?: XOR<CompanyCirclesCreateWithoutCompanyUserInput, CompanyCirclesUncheckedCreateWithoutCompanyUserInput> | CompanyCirclesCreateWithoutCompanyUserInput[] | CompanyCirclesUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutCompanyUserInput | CompanyCirclesCreateOrConnectWithoutCompanyUserInput[]
    createMany?: CompanyCirclesCreateManyCompanyUserInputEnvelope
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCompanyUserNestedInput = {
    create?: XOR<UserCreateWithoutCompanyUserInput, UserUncheckedCreateWithoutCompanyUserInput> | UserCreateWithoutCompanyUserInput[] | UserUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyUserInput | UserCreateOrConnectWithoutCompanyUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyUserInput | UserUpsertWithWhereUniqueWithoutCompanyUserInput[]
    createMany?: UserCreateManyCompanyUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyUserInput | UserUpdateWithWhereUniqueWithoutCompanyUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyUserInput | UserUpdateManyWithWhereWithoutCompanyUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyCirclesUpdateManyWithoutCompanyUserNestedInput = {
    create?: XOR<CompanyCirclesCreateWithoutCompanyUserInput, CompanyCirclesUncheckedCreateWithoutCompanyUserInput> | CompanyCirclesCreateWithoutCompanyUserInput[] | CompanyCirclesUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutCompanyUserInput | CompanyCirclesCreateOrConnectWithoutCompanyUserInput[]
    upsert?: CompanyCirclesUpsertWithWhereUniqueWithoutCompanyUserInput | CompanyCirclesUpsertWithWhereUniqueWithoutCompanyUserInput[]
    createMany?: CompanyCirclesCreateManyCompanyUserInputEnvelope
    set?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    disconnect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    delete?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    update?: CompanyCirclesUpdateWithWhereUniqueWithoutCompanyUserInput | CompanyCirclesUpdateWithWhereUniqueWithoutCompanyUserInput[]
    updateMany?: CompanyCirclesUpdateManyWithWhereWithoutCompanyUserInput | CompanyCirclesUpdateManyWithWhereWithoutCompanyUserInput[]
    deleteMany?: CompanyCirclesScalarWhereInput | CompanyCirclesScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyUserNestedInput = {
    create?: XOR<UserCreateWithoutCompanyUserInput, UserUncheckedCreateWithoutCompanyUserInput> | UserCreateWithoutCompanyUserInput[] | UserUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyUserInput | UserCreateOrConnectWithoutCompanyUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyUserInput | UserUpsertWithWhereUniqueWithoutCompanyUserInput[]
    createMany?: UserCreateManyCompanyUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyUserInput | UserUpdateWithWhereUniqueWithoutCompanyUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyUserInput | UserUpdateManyWithWhereWithoutCompanyUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyCirclesUncheckedUpdateManyWithoutCompanyUserNestedInput = {
    create?: XOR<CompanyCirclesCreateWithoutCompanyUserInput, CompanyCirclesUncheckedCreateWithoutCompanyUserInput> | CompanyCirclesCreateWithoutCompanyUserInput[] | CompanyCirclesUncheckedCreateWithoutCompanyUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutCompanyUserInput | CompanyCirclesCreateOrConnectWithoutCompanyUserInput[]
    upsert?: CompanyCirclesUpsertWithWhereUniqueWithoutCompanyUserInput | CompanyCirclesUpsertWithWhereUniqueWithoutCompanyUserInput[]
    createMany?: CompanyCirclesCreateManyCompanyUserInputEnvelope
    set?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    disconnect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    delete?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    update?: CompanyCirclesUpdateWithWhereUniqueWithoutCompanyUserInput | CompanyCirclesUpdateWithWhereUniqueWithoutCompanyUserInput[]
    updateMany?: CompanyCirclesUpdateManyWithWhereWithoutCompanyUserInput | CompanyCirclesUpdateManyWithWhereWithoutCompanyUserInput[]
    deleteMany?: CompanyCirclesScalarWhereInput | CompanyCirclesScalarWhereInput[]
  }

  export type CompanyUserCreateNestedOneWithoutCompany_circleInput = {
    create?: XOR<CompanyUserCreateWithoutCompany_circleInput, CompanyUserUncheckedCreateWithoutCompany_circleInput>
    connectOrCreate?: CompanyUserCreateOrConnectWithoutCompany_circleInput
    connect?: CompanyUserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCoyCircleAttachedToInput = {
    create?: XOR<UserCreateWithoutCoyCircleAttachedToInput, UserUncheckedCreateWithoutCoyCircleAttachedToInput> | UserCreateWithoutCoyCircleAttachedToInput[] | UserUncheckedCreateWithoutCoyCircleAttachedToInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoyCircleAttachedToInput | UserCreateOrConnectWithoutCoyCircleAttachedToInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCoyCircleAttachedToInput = {
    create?: XOR<UserCreateWithoutCoyCircleAttachedToInput, UserUncheckedCreateWithoutCoyCircleAttachedToInput> | UserCreateWithoutCoyCircleAttachedToInput[] | UserUncheckedCreateWithoutCoyCircleAttachedToInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoyCircleAttachedToInput | UserCreateOrConnectWithoutCoyCircleAttachedToInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumActivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLevel
  }

  export type NullableEnumCircleStatusFieldUpdateOperationsInput = {
    set?: $Enums.CircleStatus | null
  }

  export type CompanyUserUpdateOneWithoutCompany_circleNestedInput = {
    create?: XOR<CompanyUserCreateWithoutCompany_circleInput, CompanyUserUncheckedCreateWithoutCompany_circleInput>
    connectOrCreate?: CompanyUserCreateOrConnectWithoutCompany_circleInput
    upsert?: CompanyUserUpsertWithoutCompany_circleInput
    disconnect?: CompanyUserWhereInput | boolean
    delete?: CompanyUserWhereInput | boolean
    connect?: CompanyUserWhereUniqueInput
    update?: XOR<XOR<CompanyUserUpdateToOneWithWhereWithoutCompany_circleInput, CompanyUserUpdateWithoutCompany_circleInput>, CompanyUserUncheckedUpdateWithoutCompany_circleInput>
  }

  export type UserUpdateManyWithoutCoyCircleAttachedToNestedInput = {
    create?: XOR<UserCreateWithoutCoyCircleAttachedToInput, UserUncheckedCreateWithoutCoyCircleAttachedToInput> | UserCreateWithoutCoyCircleAttachedToInput[] | UserUncheckedCreateWithoutCoyCircleAttachedToInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoyCircleAttachedToInput | UserCreateOrConnectWithoutCoyCircleAttachedToInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoyCircleAttachedToInput | UserUpsertWithWhereUniqueWithoutCoyCircleAttachedToInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoyCircleAttachedToInput | UserUpdateWithWhereUniqueWithoutCoyCircleAttachedToInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoyCircleAttachedToInput | UserUpdateManyWithWhereWithoutCoyCircleAttachedToInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCoyCircleAttachedToNestedInput = {
    create?: XOR<UserCreateWithoutCoyCircleAttachedToInput, UserUncheckedCreateWithoutCoyCircleAttachedToInput> | UserCreateWithoutCoyCircleAttachedToInput[] | UserUncheckedCreateWithoutCoyCircleAttachedToInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoyCircleAttachedToInput | UserCreateOrConnectWithoutCoyCircleAttachedToInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoyCircleAttachedToInput | UserUpsertWithWhereUniqueWithoutCoyCircleAttachedToInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoyCircleAttachedToInput | UserUpdateWithWhereUniqueWithoutCoyCircleAttachedToInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoyCircleAttachedToInput | UserUpdateManyWithWhereWithoutCoyCircleAttachedToInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyUserCreateNestedOneWithoutMembersListInput = {
    create?: XOR<CompanyUserCreateWithoutMembersListInput, CompanyUserUncheckedCreateWithoutMembersListInput>
    connectOrCreate?: CompanyUserCreateOrConnectWithoutMembersListInput
    connect?: CompanyUserWhereUniqueInput
  }

  export type CompanyCirclesCreateNestedManyWithoutMemberListInput = {
    create?: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput> | CompanyCirclesCreateWithoutMemberListInput[] | CompanyCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutMemberListInput | CompanyCirclesCreateOrConnectWithoutMemberListInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
  }

  export type UserCirclesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput> | UserCirclesCreateWithoutUserInput[] | UserCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutUserInput | UserCirclesCreateOrConnectWithoutUserInput[]
    createMany?: UserCirclesCreateManyUserInputEnvelope
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
  }

  export type UserCirclesCreateNestedManyWithoutMemberListInput = {
    create?: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput> | UserCirclesCreateWithoutMemberListInput[] | UserCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutMemberListInput | UserCirclesCreateOrConnectWithoutMemberListInput[]
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
  }

  export type ScoreDetailCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ScoreDetailCreateWithoutOwnerInput, ScoreDetailUncheckedCreateWithoutOwnerInput> | ScoreDetailCreateWithoutOwnerInput[] | ScoreDetailUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ScoreDetailCreateOrConnectWithoutOwnerInput | ScoreDetailCreateOrConnectWithoutOwnerInput[]
    createMany?: ScoreDetailCreateManyOwnerInputEnvelope
    connect?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
  }

  export type CompanyCirclesUncheckedCreateNestedManyWithoutMemberListInput = {
    create?: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput> | CompanyCirclesCreateWithoutMemberListInput[] | CompanyCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutMemberListInput | CompanyCirclesCreateOrConnectWithoutMemberListInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
  }

  export type UserCirclesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput> | UserCirclesCreateWithoutUserInput[] | UserCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutUserInput | UserCirclesCreateOrConnectWithoutUserInput[]
    createMany?: UserCirclesCreateManyUserInputEnvelope
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
  }

  export type UserCirclesUncheckedCreateNestedManyWithoutMemberListInput = {
    create?: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput> | UserCirclesCreateWithoutMemberListInput[] | UserCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutMemberListInput | UserCirclesCreateOrConnectWithoutMemberListInput[]
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
  }

  export type ScoreDetailUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ScoreDetailCreateWithoutOwnerInput, ScoreDetailUncheckedCreateWithoutOwnerInput> | ScoreDetailCreateWithoutOwnerInput[] | ScoreDetailUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ScoreDetailCreateOrConnectWithoutOwnerInput | ScoreDetailCreateOrConnectWithoutOwnerInput[]
    createMany?: ScoreDetailCreateManyOwnerInputEnvelope
    connect?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
  }

  export type EnumUserAccountFieldUpdateOperationsInput = {
    set?: $Enums.UserAccount
  }

  export type CompanyUserUpdateOneWithoutMembersListNestedInput = {
    create?: XOR<CompanyUserCreateWithoutMembersListInput, CompanyUserUncheckedCreateWithoutMembersListInput>
    connectOrCreate?: CompanyUserCreateOrConnectWithoutMembersListInput
    upsert?: CompanyUserUpsertWithoutMembersListInput
    disconnect?: CompanyUserWhereInput | boolean
    delete?: CompanyUserWhereInput | boolean
    connect?: CompanyUserWhereUniqueInput
    update?: XOR<XOR<CompanyUserUpdateToOneWithWhereWithoutMembersListInput, CompanyUserUpdateWithoutMembersListInput>, CompanyUserUncheckedUpdateWithoutMembersListInput>
  }

  export type CompanyCirclesUpdateManyWithoutMemberListNestedInput = {
    create?: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput> | CompanyCirclesCreateWithoutMemberListInput[] | CompanyCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutMemberListInput | CompanyCirclesCreateOrConnectWithoutMemberListInput[]
    upsert?: CompanyCirclesUpsertWithWhereUniqueWithoutMemberListInput | CompanyCirclesUpsertWithWhereUniqueWithoutMemberListInput[]
    set?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    disconnect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    delete?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    update?: CompanyCirclesUpdateWithWhereUniqueWithoutMemberListInput | CompanyCirclesUpdateWithWhereUniqueWithoutMemberListInput[]
    updateMany?: CompanyCirclesUpdateManyWithWhereWithoutMemberListInput | CompanyCirclesUpdateManyWithWhereWithoutMemberListInput[]
    deleteMany?: CompanyCirclesScalarWhereInput | CompanyCirclesScalarWhereInput[]
  }

  export type UserCirclesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput> | UserCirclesCreateWithoutUserInput[] | UserCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutUserInput | UserCirclesCreateOrConnectWithoutUserInput[]
    upsert?: UserCirclesUpsertWithWhereUniqueWithoutUserInput | UserCirclesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCirclesCreateManyUserInputEnvelope
    set?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    disconnect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    delete?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    update?: UserCirclesUpdateWithWhereUniqueWithoutUserInput | UserCirclesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCirclesUpdateManyWithWhereWithoutUserInput | UserCirclesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCirclesScalarWhereInput | UserCirclesScalarWhereInput[]
  }

  export type UserCirclesUpdateManyWithoutMemberListNestedInput = {
    create?: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput> | UserCirclesCreateWithoutMemberListInput[] | UserCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutMemberListInput | UserCirclesCreateOrConnectWithoutMemberListInput[]
    upsert?: UserCirclesUpsertWithWhereUniqueWithoutMemberListInput | UserCirclesUpsertWithWhereUniqueWithoutMemberListInput[]
    set?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    disconnect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    delete?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    update?: UserCirclesUpdateWithWhereUniqueWithoutMemberListInput | UserCirclesUpdateWithWhereUniqueWithoutMemberListInput[]
    updateMany?: UserCirclesUpdateManyWithWhereWithoutMemberListInput | UserCirclesUpdateManyWithWhereWithoutMemberListInput[]
    deleteMany?: UserCirclesScalarWhereInput | UserCirclesScalarWhereInput[]
  }

  export type ScoreDetailUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ScoreDetailCreateWithoutOwnerInput, ScoreDetailUncheckedCreateWithoutOwnerInput> | ScoreDetailCreateWithoutOwnerInput[] | ScoreDetailUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ScoreDetailCreateOrConnectWithoutOwnerInput | ScoreDetailCreateOrConnectWithoutOwnerInput[]
    upsert?: ScoreDetailUpsertWithWhereUniqueWithoutOwnerInput | ScoreDetailUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ScoreDetailCreateManyOwnerInputEnvelope
    set?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    disconnect?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    delete?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    connect?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    update?: ScoreDetailUpdateWithWhereUniqueWithoutOwnerInput | ScoreDetailUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ScoreDetailUpdateManyWithWhereWithoutOwnerInput | ScoreDetailUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ScoreDetailScalarWhereInput | ScoreDetailScalarWhereInput[]
  }

  export type CompanyCirclesUncheckedUpdateManyWithoutMemberListNestedInput = {
    create?: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput> | CompanyCirclesCreateWithoutMemberListInput[] | CompanyCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutMemberListInput | CompanyCirclesCreateOrConnectWithoutMemberListInput[]
    upsert?: CompanyCirclesUpsertWithWhereUniqueWithoutMemberListInput | CompanyCirclesUpsertWithWhereUniqueWithoutMemberListInput[]
    set?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    disconnect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    delete?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    update?: CompanyCirclesUpdateWithWhereUniqueWithoutMemberListInput | CompanyCirclesUpdateWithWhereUniqueWithoutMemberListInput[]
    updateMany?: CompanyCirclesUpdateManyWithWhereWithoutMemberListInput | CompanyCirclesUpdateManyWithWhereWithoutMemberListInput[]
    deleteMany?: CompanyCirclesScalarWhereInput | CompanyCirclesScalarWhereInput[]
  }

  export type UserCirclesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput> | UserCirclesCreateWithoutUserInput[] | UserCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutUserInput | UserCirclesCreateOrConnectWithoutUserInput[]
    upsert?: UserCirclesUpsertWithWhereUniqueWithoutUserInput | UserCirclesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCirclesCreateManyUserInputEnvelope
    set?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    disconnect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    delete?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    update?: UserCirclesUpdateWithWhereUniqueWithoutUserInput | UserCirclesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCirclesUpdateManyWithWhereWithoutUserInput | UserCirclesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCirclesScalarWhereInput | UserCirclesScalarWhereInput[]
  }

  export type UserCirclesUncheckedUpdateManyWithoutMemberListNestedInput = {
    create?: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput> | UserCirclesCreateWithoutMemberListInput[] | UserCirclesUncheckedCreateWithoutMemberListInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutMemberListInput | UserCirclesCreateOrConnectWithoutMemberListInput[]
    upsert?: UserCirclesUpsertWithWhereUniqueWithoutMemberListInput | UserCirclesUpsertWithWhereUniqueWithoutMemberListInput[]
    set?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    disconnect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    delete?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
    update?: UserCirclesUpdateWithWhereUniqueWithoutMemberListInput | UserCirclesUpdateWithWhereUniqueWithoutMemberListInput[]
    updateMany?: UserCirclesUpdateManyWithWhereWithoutMemberListInput | UserCirclesUpdateManyWithWhereWithoutMemberListInput[]
    deleteMany?: UserCirclesScalarWhereInput | UserCirclesScalarWhereInput[]
  }

  export type ScoreDetailUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ScoreDetailCreateWithoutOwnerInput, ScoreDetailUncheckedCreateWithoutOwnerInput> | ScoreDetailCreateWithoutOwnerInput[] | ScoreDetailUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ScoreDetailCreateOrConnectWithoutOwnerInput | ScoreDetailCreateOrConnectWithoutOwnerInput[]
    upsert?: ScoreDetailUpsertWithWhereUniqueWithoutOwnerInput | ScoreDetailUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ScoreDetailCreateManyOwnerInputEnvelope
    set?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    disconnect?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    delete?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    connect?: ScoreDetailWhereUniqueInput | ScoreDetailWhereUniqueInput[]
    update?: ScoreDetailUpdateWithWhereUniqueWithoutOwnerInput | ScoreDetailUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ScoreDetailUpdateManyWithWhereWithoutOwnerInput | ScoreDetailUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ScoreDetailScalarWhereInput | ScoreDetailScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserCirclesInput = {
    create?: XOR<UserCreateWithoutUserCirclesInput, UserUncheckedCreateWithoutUserCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCirclesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutOtherUserCirclesInInput = {
    create?: XOR<UserCreateWithoutOtherUserCirclesInInput, UserUncheckedCreateWithoutOtherUserCirclesInInput> | UserCreateWithoutOtherUserCirclesInInput[] | UserUncheckedCreateWithoutOtherUserCirclesInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOtherUserCirclesInInput | UserCreateOrConnectWithoutOtherUserCirclesInInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOtherUserCirclesInInput = {
    create?: XOR<UserCreateWithoutOtherUserCirclesInInput, UserUncheckedCreateWithoutOtherUserCirclesInInput> | UserCreateWithoutOtherUserCirclesInInput[] | UserUncheckedCreateWithoutOtherUserCirclesInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOtherUserCirclesInInput | UserCreateOrConnectWithoutOtherUserCirclesInInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutUserCirclesNestedInput = {
    create?: XOR<UserCreateWithoutUserCirclesInput, UserUncheckedCreateWithoutUserCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCirclesInput
    upsert?: UserUpsertWithoutUserCirclesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCirclesInput, UserUpdateWithoutUserCirclesInput>, UserUncheckedUpdateWithoutUserCirclesInput>
  }

  export type UserUpdateManyWithoutOtherUserCirclesInNestedInput = {
    create?: XOR<UserCreateWithoutOtherUserCirclesInInput, UserUncheckedCreateWithoutOtherUserCirclesInInput> | UserCreateWithoutOtherUserCirclesInInput[] | UserUncheckedCreateWithoutOtherUserCirclesInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOtherUserCirclesInInput | UserCreateOrConnectWithoutOtherUserCirclesInInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOtherUserCirclesInInput | UserUpsertWithWhereUniqueWithoutOtherUserCirclesInInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOtherUserCirclesInInput | UserUpdateWithWhereUniqueWithoutOtherUserCirclesInInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOtherUserCirclesInInput | UserUpdateManyWithWhereWithoutOtherUserCirclesInInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOtherUserCirclesInNestedInput = {
    create?: XOR<UserCreateWithoutOtherUserCirclesInInput, UserUncheckedCreateWithoutOtherUserCirclesInInput> | UserCreateWithoutOtherUserCirclesInInput[] | UserUncheckedCreateWithoutOtherUserCirclesInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOtherUserCirclesInInput | UserCreateOrConnectWithoutOtherUserCirclesInInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOtherUserCirclesInInput | UserUpsertWithWhereUniqueWithoutOtherUserCirclesInInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOtherUserCirclesInInput | UserUpdateWithWhereUniqueWithoutOtherUserCirclesInInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOtherUserCirclesInInput | UserUpdateManyWithWhereWithoutOtherUserCirclesInInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AssessmentCreatesetQuestionsInput = {
    set: string[]
  }

  export type EmpyloUserCreateNestedOneWithoutWeeklyAssessmentInput = {
    create?: XOR<EmpyloUserCreateWithoutWeeklyAssessmentInput, EmpyloUserUncheckedCreateWithoutWeeklyAssessmentInput>
    connectOrCreate?: EmpyloUserCreateOrConnectWithoutWeeklyAssessmentInput
    connect?: EmpyloUserWhereUniqueInput
  }

  export type EmpyloUserCreateNestedOneWithoutCheckinAssessmentInput = {
    create?: XOR<EmpyloUserCreateWithoutCheckinAssessmentInput, EmpyloUserUncheckedCreateWithoutCheckinAssessmentInput>
    connectOrCreate?: EmpyloUserCreateOrConnectWithoutCheckinAssessmentInput
    connect?: EmpyloUserWhereUniqueInput
  }

  export type NullableEnumAssessmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentType | null
  }

  export type AssessmentUpdatesetQuestionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmpyloUserUpdateOneWithoutWeeklyAssessmentNestedInput = {
    create?: XOR<EmpyloUserCreateWithoutWeeklyAssessmentInput, EmpyloUserUncheckedCreateWithoutWeeklyAssessmentInput>
    connectOrCreate?: EmpyloUserCreateOrConnectWithoutWeeklyAssessmentInput
    upsert?: EmpyloUserUpsertWithoutWeeklyAssessmentInput
    disconnect?: EmpyloUserWhereInput | boolean
    delete?: EmpyloUserWhereInput | boolean
    connect?: EmpyloUserWhereUniqueInput
    update?: XOR<XOR<EmpyloUserUpdateToOneWithWhereWithoutWeeklyAssessmentInput, EmpyloUserUpdateWithoutWeeklyAssessmentInput>, EmpyloUserUncheckedUpdateWithoutWeeklyAssessmentInput>
  }

  export type EmpyloUserUpdateOneWithoutCheckinAssessmentNestedInput = {
    create?: XOR<EmpyloUserCreateWithoutCheckinAssessmentInput, EmpyloUserUncheckedCreateWithoutCheckinAssessmentInput>
    connectOrCreate?: EmpyloUserCreateOrConnectWithoutCheckinAssessmentInput
    upsert?: EmpyloUserUpsertWithoutCheckinAssessmentInput
    disconnect?: EmpyloUserWhereInput | boolean
    delete?: EmpyloUserWhereInput | boolean
    connect?: EmpyloUserWhereUniqueInput
    update?: XOR<XOR<EmpyloUserUpdateToOneWithWhereWithoutCheckinAssessmentInput, EmpyloUserUpdateWithoutCheckinAssessmentInput>, EmpyloUserUncheckedUpdateWithoutCheckinAssessmentInput>
  }

  export type UserCreateNestedOneWithoutListOfScoreDetailInput = {
    create?: XOR<UserCreateWithoutListOfScoreDetailInput, UserUncheckedCreateWithoutListOfScoreDetailInput>
    connectOrCreate?: UserCreateOrConnectWithoutListOfScoreDetailInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutListOfScoreDetailNestedInput = {
    create?: XOR<UserCreateWithoutListOfScoreDetailInput, UserUncheckedCreateWithoutListOfScoreDetailInput>
    connectOrCreate?: UserCreateOrConnectWithoutListOfScoreDetailInput
    upsert?: UserUpsertWithoutListOfScoreDetailInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListOfScoreDetailInput, UserUpdateWithoutListOfScoreDetailInput>, UserUncheckedUpdateWithoutListOfScoreDetailInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSystemRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemRoleFilter<$PrismaModel> | $Enums.SystemRole
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserGenderNullableFilter<$PrismaModel> | $Enums.UserGender | null
  }

  export type NestedEnumMaitalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaitalStatus | EnumMaitalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaitalStatusNullableFilter<$PrismaModel> | $Enums.MaitalStatus | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSystemRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemRoleWithAggregatesFilter<$PrismaModel> | $Enums.SystemRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemRoleFilter<$PrismaModel>
    _max?: NestedEnumSystemRoleFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumUserGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumMaitalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaitalStatus | EnumMaitalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaitalStatus[] | ListEnumMaitalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaitalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaitalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaitalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaitalStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
  }

  export type NestedEnumCircleStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CircleStatus | EnumCircleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCircleStatusNullableFilter<$PrismaModel> | $Enums.CircleStatus | null
  }

  export type NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelFilter<$PrismaModel>
  }

  export type NestedEnumCircleStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CircleStatus | EnumCircleStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CircleStatus[] | ListEnumCircleStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCircleStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CircleStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCircleStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCircleStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserAccountFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountFilter<$PrismaModel> | $Enums.UserAccount
  }

  export type NestedEnumUserAccountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountWithAggregatesFilter<$PrismaModel> | $Enums.UserAccount
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserAccountFilter<$PrismaModel>
    _max?: NestedEnumUserAccountFilter<$PrismaModel>
  }

  export type NestedEnumAssessmentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel> | $Enums.AssessmentType | null
  }

  export type NestedEnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AssessmentCreateWithoutEmpyloUserInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    empyloUserCheckin?: EmpyloUserCreateNestedOneWithoutCheckinAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutEmpyloUserInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    createdCheckinBy?: string | null
  }

  export type AssessmentCreateOrConnectWithoutEmpyloUserInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutEmpyloUserInput, AssessmentUncheckedCreateWithoutEmpyloUserInput>
  }

  export type AssessmentCreateManyEmpyloUserInputEnvelope = {
    data: AssessmentCreateManyEmpyloUserInput | AssessmentCreateManyEmpyloUserInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentCreateWithoutEmpyloUserCheckinInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    empyloUser?: EmpyloUserCreateNestedOneWithoutWeeklyAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    createdWeeklyBy?: string | null
  }

  export type AssessmentCreateOrConnectWithoutEmpyloUserCheckinInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutEmpyloUserCheckinInput, AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput>
  }

  export type AssessmentCreateManyEmpyloUserCheckinInputEnvelope = {
    data: AssessmentCreateManyEmpyloUserCheckinInput | AssessmentCreateManyEmpyloUserCheckinInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithWhereUniqueWithoutEmpyloUserInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutEmpyloUserInput, AssessmentUncheckedUpdateWithoutEmpyloUserInput>
    create: XOR<AssessmentCreateWithoutEmpyloUserInput, AssessmentUncheckedCreateWithoutEmpyloUserInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutEmpyloUserInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutEmpyloUserInput, AssessmentUncheckedUpdateWithoutEmpyloUserInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutEmpyloUserInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutEmpyloUserInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: StringFilter<"Assessment"> | string
    created_at?: DateTimeNullableFilter<"Assessment"> | Date | string | null
    setNo?: StringNullableFilter<"Assessment"> | string | null
    assessmentType?: EnumAssessmentTypeNullableFilter<"Assessment"> | $Enums.AssessmentType | null
    setQuestions?: StringNullableListFilter<"Assessment">
    createdWeeklyBy?: StringNullableFilter<"Assessment"> | string | null
    createdCheckinBy?: StringNullableFilter<"Assessment"> | string | null
  }

  export type AssessmentUpsertWithWhereUniqueWithoutEmpyloUserCheckinInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutEmpyloUserCheckinInput, AssessmentUncheckedUpdateWithoutEmpyloUserCheckinInput>
    create: XOR<AssessmentCreateWithoutEmpyloUserCheckinInput, AssessmentUncheckedCreateWithoutEmpyloUserCheckinInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutEmpyloUserCheckinInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutEmpyloUserCheckinInput, AssessmentUncheckedUpdateWithoutEmpyloUserCheckinInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutEmpyloUserCheckinInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutEmpyloUserCheckinInput>
  }

  export type UserCreateWithoutCompanyUserInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    coyCircleAttachedTo?: CompanyCirclesCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCompanyUserInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesUncheckedCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCompanyUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyUserInput, UserUncheckedCreateWithoutCompanyUserInput>
  }

  export type UserCreateManyCompanyUserInputEnvelope = {
    data: UserCreateManyCompanyUserInput | UserCreateManyCompanyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCirclesCreateWithoutCompanyUserInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
    memberList?: UserCreateNestedManyWithoutCoyCircleAttachedToInput
  }

  export type CompanyCirclesUncheckedCreateWithoutCompanyUserInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
    memberList?: UserUncheckedCreateNestedManyWithoutCoyCircleAttachedToInput
  }

  export type CompanyCirclesCreateOrConnectWithoutCompanyUserInput = {
    where: CompanyCirclesWhereUniqueInput
    create: XOR<CompanyCirclesCreateWithoutCompanyUserInput, CompanyCirclesUncheckedCreateWithoutCompanyUserInput>
  }

  export type CompanyCirclesCreateManyCompanyUserInputEnvelope = {
    data: CompanyCirclesCreateManyCompanyUserInput | CompanyCirclesCreateManyCompanyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyUserInput, UserUncheckedUpdateWithoutCompanyUserInput>
    create: XOR<UserCreateWithoutCompanyUserInput, UserUncheckedCreateWithoutCompanyUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyUserInput, UserUncheckedUpdateWithoutCompanyUserInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    ageRange?: StringNullableFilter<"User"> | string | null
    ethnicity?: StringNullableFilter<"User"> | string | null
    gender?: EnumUserGenderNullableFilter<"User"> | $Enums.UserGender | null
    maritalStatus?: EnumMaitalStatusNullableFilter<"User"> | $Enums.MaitalStatus | null
    disability?: StringNullableFilter<"User"> | string | null
    DOB?: StringNullableFilter<"User"> | string | null
    accountType?: EnumUserAccountFilter<"User"> | $Enums.UserAccount
    department?: StringNullableFilter<"User"> | string | null
    jobRole?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumSystemRoleFilter<"User"> | $Enums.SystemRole
    passwordResetCode?: StringNullableFilter<"User"> | string | null
    createdBy?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    passportImg?: StringNullableFilter<"User"> | string | null
    isActive?: BoolNullableFilter<"User"> | boolean | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    isEmailVerified?: BoolNullableFilter<"User"> | boolean | null
    verificationCode?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    address?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    emailNotification?: BoolNullableFilter<"User"> | boolean | null
    campaignNtification?: BoolNullableFilter<"User"> | boolean | null
    termsConditions?: BoolNullableFilter<"User"> | boolean | null
    addedBy?: StringNullableFilter<"User"> | string | null
    socialId?: StringNullableFilter<"User"> | string | null
    socialProvider?: StringNullableFilter<"User"> | string | null
  }

  export type CompanyCirclesUpsertWithWhereUniqueWithoutCompanyUserInput = {
    where: CompanyCirclesWhereUniqueInput
    update: XOR<CompanyCirclesUpdateWithoutCompanyUserInput, CompanyCirclesUncheckedUpdateWithoutCompanyUserInput>
    create: XOR<CompanyCirclesCreateWithoutCompanyUserInput, CompanyCirclesUncheckedCreateWithoutCompanyUserInput>
  }

  export type CompanyCirclesUpdateWithWhereUniqueWithoutCompanyUserInput = {
    where: CompanyCirclesWhereUniqueInput
    data: XOR<CompanyCirclesUpdateWithoutCompanyUserInput, CompanyCirclesUncheckedUpdateWithoutCompanyUserInput>
  }

  export type CompanyCirclesUpdateManyWithWhereWithoutCompanyUserInput = {
    where: CompanyCirclesScalarWhereInput
    data: XOR<CompanyCirclesUpdateManyMutationInput, CompanyCirclesUncheckedUpdateManyWithoutCompanyUserInput>
  }

  export type CompanyCirclesScalarWhereInput = {
    AND?: CompanyCirclesScalarWhereInput | CompanyCirclesScalarWhereInput[]
    OR?: CompanyCirclesScalarWhereInput[]
    NOT?: CompanyCirclesScalarWhereInput | CompanyCirclesScalarWhereInput[]
    id?: StringFilter<"CompanyCircles"> | string
    created_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    coyCircleName?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleDescription?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleShareLink?: StringNullableFilter<"CompanyCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"CompanyCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"CompanyCircles"> | $Enums.ActivityLevel
    companyUserId?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleStatus?: EnumUserStatusFilter<"CompanyCircles"> | $Enums.UserStatus
    coyCircleNos?: StringNullableFilter<"CompanyCircles"> | string | null
    circleImg?: StringNullableFilter<"CompanyCircles"> | string | null
    circleStatus?: EnumCircleStatusNullableFilter<"CompanyCircles"> | $Enums.CircleStatus | null
  }

  export type CompanyUserCreateWithoutCompany_circleInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    companyName?: string | null
    phoneNumber?: string | null
    password?: string | null
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    industry?: string | null
    website?: string | null
    companyDescription?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.SystemRole
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    socialId?: string | null
    socialProvider?: string | null
    membersList?: UserCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserUncheckedCreateWithoutCompany_circleInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    companyName?: string | null
    phoneNumber?: string | null
    password?: string | null
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    industry?: string | null
    website?: string | null
    companyDescription?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.SystemRole
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    socialId?: string | null
    socialProvider?: string | null
    membersList?: UserUncheckedCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserCreateOrConnectWithoutCompany_circleInput = {
    where: CompanyUserWhereUniqueInput
    create: XOR<CompanyUserCreateWithoutCompany_circleInput, CompanyUserUncheckedCreateWithoutCompany_circleInput>
  }

  export type UserCreateWithoutCoyCircleAttachedToInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutCoyCircleAttachedToInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    createdBy?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesUncheckedCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutCoyCircleAttachedToInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoyCircleAttachedToInput, UserUncheckedCreateWithoutCoyCircleAttachedToInput>
  }

  export type CompanyUserUpsertWithoutCompany_circleInput = {
    update: XOR<CompanyUserUpdateWithoutCompany_circleInput, CompanyUserUncheckedUpdateWithoutCompany_circleInput>
    create: XOR<CompanyUserCreateWithoutCompany_circleInput, CompanyUserUncheckedCreateWithoutCompany_circleInput>
    where?: CompanyUserWhereInput
  }

  export type CompanyUserUpdateToOneWithWhereWithoutCompany_circleInput = {
    where?: CompanyUserWhereInput
    data: XOR<CompanyUserUpdateWithoutCompany_circleInput, CompanyUserUncheckedUpdateWithoutCompany_circleInput>
  }

  export type CompanyUserUpdateWithoutCompany_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    membersList?: UserUpdateManyWithoutCompanyUserNestedInput
  }

  export type CompanyUserUncheckedUpdateWithoutCompany_circleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    membersList?: UserUncheckedUpdateManyWithoutCompanyUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCoyCircleAttachedToInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCoyCircleAttachedToInput, UserUncheckedUpdateWithoutCoyCircleAttachedToInput>
    create: XOR<UserCreateWithoutCoyCircleAttachedToInput, UserUncheckedCreateWithoutCoyCircleAttachedToInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCoyCircleAttachedToInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCoyCircleAttachedToInput, UserUncheckedUpdateWithoutCoyCircleAttachedToInput>
  }

  export type UserUpdateManyWithWhereWithoutCoyCircleAttachedToInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCoyCircleAttachedToInput>
  }

  export type CompanyUserCreateWithoutMembersListInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    companyName?: string | null
    phoneNumber?: string | null
    password?: string | null
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    industry?: string | null
    website?: string | null
    companyDescription?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.SystemRole
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    socialId?: string | null
    socialProvider?: string | null
    company_circle?: CompanyCirclesCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserUncheckedCreateWithoutMembersListInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    companyName?: string | null
    phoneNumber?: string | null
    password?: string | null
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    industry?: string | null
    website?: string | null
    companyDescription?: string | null
    status?: $Enums.UserStatus
    role?: $Enums.SystemRole
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    socialId?: string | null
    socialProvider?: string | null
    company_circle?: CompanyCirclesUncheckedCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserCreateOrConnectWithoutMembersListInput = {
    where: CompanyUserWhereUniqueInput
    create: XOR<CompanyUserCreateWithoutMembersListInput, CompanyUserUncheckedCreateWithoutMembersListInput>
  }

  export type CompanyCirclesCreateWithoutMemberListInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
    companyUser?: CompanyUserCreateNestedOneWithoutCompany_circleInput
  }

  export type CompanyCirclesUncheckedCreateWithoutMemberListInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    companyUserId?: string | null
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
  }

  export type CompanyCirclesCreateOrConnectWithoutMemberListInput = {
    where: CompanyCirclesWhereUniqueInput
    create: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput>
  }

  export type UserCirclesCreateWithoutUserInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
    memberList?: UserCreateNestedManyWithoutOtherUserCirclesInInput
  }

  export type UserCirclesUncheckedCreateWithoutUserInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
    memberList?: UserUncheckedCreateNestedManyWithoutOtherUserCirclesInInput
  }

  export type UserCirclesCreateOrConnectWithoutUserInput = {
    where: UserCirclesWhereUniqueInput
    create: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput>
  }

  export type UserCirclesCreateManyUserInputEnvelope = {
    data: UserCirclesCreateManyUserInput | UserCirclesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCirclesCreateWithoutMemberListInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
    user?: UserCreateNestedOneWithoutUserCirclesInput
  }

  export type UserCirclesUncheckedCreateWithoutMemberListInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    userId?: string | null
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
  }

  export type UserCirclesCreateOrConnectWithoutMemberListInput = {
    where: UserCirclesWhereUniqueInput
    create: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput>
  }

  export type ScoreDetailCreateWithoutOwnerInput = {
    id?: string
    weeklyScore?: number | null
    dailyScore?: number | null
    wellbeingScore?: number | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    created_at?: Date | string | null
  }

  export type ScoreDetailUncheckedCreateWithoutOwnerInput = {
    id?: string
    weeklyScore?: number | null
    dailyScore?: number | null
    wellbeingScore?: number | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    created_at?: Date | string | null
  }

  export type ScoreDetailCreateOrConnectWithoutOwnerInput = {
    where: ScoreDetailWhereUniqueInput
    create: XOR<ScoreDetailCreateWithoutOwnerInput, ScoreDetailUncheckedCreateWithoutOwnerInput>
  }

  export type ScoreDetailCreateManyOwnerInputEnvelope = {
    data: ScoreDetailCreateManyOwnerInput | ScoreDetailCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUserUpsertWithoutMembersListInput = {
    update: XOR<CompanyUserUpdateWithoutMembersListInput, CompanyUserUncheckedUpdateWithoutMembersListInput>
    create: XOR<CompanyUserCreateWithoutMembersListInput, CompanyUserUncheckedCreateWithoutMembersListInput>
    where?: CompanyUserWhereInput
  }

  export type CompanyUserUpdateToOneWithWhereWithoutMembersListInput = {
    where?: CompanyUserWhereInput
    data: XOR<CompanyUserUpdateWithoutMembersListInput, CompanyUserUncheckedUpdateWithoutMembersListInput>
  }

  export type CompanyUserUpdateWithoutMembersListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    company_circle?: CompanyCirclesUpdateManyWithoutCompanyUserNestedInput
  }

  export type CompanyUserUncheckedUpdateWithoutMembersListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    company_circle?: CompanyCirclesUncheckedUpdateManyWithoutCompanyUserNestedInput
  }

  export type CompanyCirclesUpsertWithWhereUniqueWithoutMemberListInput = {
    where: CompanyCirclesWhereUniqueInput
    update: XOR<CompanyCirclesUpdateWithoutMemberListInput, CompanyCirclesUncheckedUpdateWithoutMemberListInput>
    create: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput>
  }

  export type CompanyCirclesUpdateWithWhereUniqueWithoutMemberListInput = {
    where: CompanyCirclesWhereUniqueInput
    data: XOR<CompanyCirclesUpdateWithoutMemberListInput, CompanyCirclesUncheckedUpdateWithoutMemberListInput>
  }

  export type CompanyCirclesUpdateManyWithWhereWithoutMemberListInput = {
    where: CompanyCirclesScalarWhereInput
    data: XOR<CompanyCirclesUpdateManyMutationInput, CompanyCirclesUncheckedUpdateManyWithoutMemberListInput>
  }

  export type UserCirclesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCirclesWhereUniqueInput
    update: XOR<UserCirclesUpdateWithoutUserInput, UserCirclesUncheckedUpdateWithoutUserInput>
    create: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput>
  }

  export type UserCirclesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCirclesWhereUniqueInput
    data: XOR<UserCirclesUpdateWithoutUserInput, UserCirclesUncheckedUpdateWithoutUserInput>
  }

  export type UserCirclesUpdateManyWithWhereWithoutUserInput = {
    where: UserCirclesScalarWhereInput
    data: XOR<UserCirclesUpdateManyMutationInput, UserCirclesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCirclesScalarWhereInput = {
    AND?: UserCirclesScalarWhereInput | UserCirclesScalarWhereInput[]
    OR?: UserCirclesScalarWhereInput[]
    NOT?: UserCirclesScalarWhereInput | UserCirclesScalarWhereInput[]
    id?: StringFilter<"UserCircles"> | string
    circleImg?: StringNullableFilter<"UserCircles"> | string | null
    created_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    userCircleName?: StringNullableFilter<"UserCircles"> | string | null
    userCircleDescription?: StringNullableFilter<"UserCircles"> | string | null
    userCircleShareLink?: StringNullableFilter<"UserCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"UserCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"UserCircles"> | $Enums.ActivityLevel
    userId?: StringNullableFilter<"UserCircles"> | string | null
    createdBy?: StringNullableFilter<"UserCircles"> | string | null
    userCircleStatus?: EnumUserStatusFilter<"UserCircles"> | $Enums.UserStatus
    userCircleNos?: StringNullableFilter<"UserCircles"> | string | null
    circleStatus?: EnumCircleStatusNullableFilter<"UserCircles"> | $Enums.CircleStatus | null
  }

  export type UserCirclesUpsertWithWhereUniqueWithoutMemberListInput = {
    where: UserCirclesWhereUniqueInput
    update: XOR<UserCirclesUpdateWithoutMemberListInput, UserCirclesUncheckedUpdateWithoutMemberListInput>
    create: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput>
  }

  export type UserCirclesUpdateWithWhereUniqueWithoutMemberListInput = {
    where: UserCirclesWhereUniqueInput
    data: XOR<UserCirclesUpdateWithoutMemberListInput, UserCirclesUncheckedUpdateWithoutMemberListInput>
  }

  export type UserCirclesUpdateManyWithWhereWithoutMemberListInput = {
    where: UserCirclesScalarWhereInput
    data: XOR<UserCirclesUpdateManyMutationInput, UserCirclesUncheckedUpdateManyWithoutMemberListInput>
  }

  export type ScoreDetailUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ScoreDetailWhereUniqueInput
    update: XOR<ScoreDetailUpdateWithoutOwnerInput, ScoreDetailUncheckedUpdateWithoutOwnerInput>
    create: XOR<ScoreDetailCreateWithoutOwnerInput, ScoreDetailUncheckedCreateWithoutOwnerInput>
  }

  export type ScoreDetailUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ScoreDetailWhereUniqueInput
    data: XOR<ScoreDetailUpdateWithoutOwnerInput, ScoreDetailUncheckedUpdateWithoutOwnerInput>
  }

  export type ScoreDetailUpdateManyWithWhereWithoutOwnerInput = {
    where: ScoreDetailScalarWhereInput
    data: XOR<ScoreDetailUpdateManyMutationInput, ScoreDetailUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ScoreDetailScalarWhereInput = {
    AND?: ScoreDetailScalarWhereInput | ScoreDetailScalarWhereInput[]
    OR?: ScoreDetailScalarWhereInput[]
    NOT?: ScoreDetailScalarWhereInput | ScoreDetailScalarWhereInput[]
    id?: StringFilter<"ScoreDetail"> | string
    ownerID?: StringNullableFilter<"ScoreDetail"> | string | null
    weeklyScore?: IntNullableFilter<"ScoreDetail"> | number | null
    dailyScore?: IntNullableFilter<"ScoreDetail"> | number | null
    wellbeingScore?: IntNullableFilter<"ScoreDetail"> | number | null
    setNo?: StringNullableFilter<"ScoreDetail"> | string | null
    assessmentType?: EnumAssessmentTypeNullableFilter<"ScoreDetail"> | $Enums.AssessmentType | null
    created_at?: DateTimeNullableFilter<"ScoreDetail"> | Date | string | null
  }

  export type UserCreateWithoutUserCirclesInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    coyCircleAttachedTo?: CompanyCirclesCreateNestedManyWithoutMemberListInput
    otherUserCirclesIn?: UserCirclesCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutUserCirclesInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    createdBy?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedCreateNestedManyWithoutMemberListInput
    otherUserCirclesIn?: UserCirclesUncheckedCreateNestedManyWithoutMemberListInput
    listOfScoreDetail?: ScoreDetailUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutUserCirclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCirclesInput, UserUncheckedCreateWithoutUserCirclesInput>
  }

  export type UserCreateWithoutOtherUserCirclesInInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    coyCircleAttachedTo?: CompanyCirclesCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    listOfScoreDetail?: ScoreDetailCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutOtherUserCirclesInInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    createdBy?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    listOfScoreDetail?: ScoreDetailUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutOtherUserCirclesInInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtherUserCirclesInInput, UserUncheckedCreateWithoutOtherUserCirclesInInput>
  }

  export type UserUpsertWithoutUserCirclesInput = {
    update: XOR<UserUpdateWithoutUserCirclesInput, UserUncheckedUpdateWithoutUserCirclesInput>
    create: XOR<UserCreateWithoutUserCirclesInput, UserUncheckedCreateWithoutUserCirclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCirclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCirclesInput, UserUncheckedUpdateWithoutUserCirclesInput>
  }

  export type UserUpdateWithoutUserCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    coyCircleAttachedTo?: CompanyCirclesUpdateManyWithoutMemberListNestedInput
    otherUserCirclesIn?: UserCirclesUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    otherUserCirclesIn?: UserCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutOtherUserCirclesInInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOtherUserCirclesInInput, UserUncheckedUpdateWithoutOtherUserCirclesInInput>
    create: XOR<UserCreateWithoutOtherUserCirclesInInput, UserUncheckedCreateWithoutOtherUserCirclesInInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOtherUserCirclesInInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOtherUserCirclesInInput, UserUncheckedUpdateWithoutOtherUserCirclesInInput>
  }

  export type UserUpdateManyWithWhereWithoutOtherUserCirclesInInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOtherUserCirclesInInput>
  }

  export type EmpyloUserCreateWithoutWeeklyAssessmentInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    role?: $Enums.SystemRole
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    empyloID?: string | null
    permissions?: EmpyloUserCreatepermissionsInput | string[]
    passwordResetCode?: string | null
    password?: string | null
    checkinAssessment?: AssessmentCreateNestedManyWithoutEmpyloUserCheckinInput
  }

  export type EmpyloUserUncheckedCreateWithoutWeeklyAssessmentInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    role?: $Enums.SystemRole
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    empyloID?: string | null
    permissions?: EmpyloUserCreatepermissionsInput | string[]
    passwordResetCode?: string | null
    password?: string | null
    checkinAssessment?: AssessmentUncheckedCreateNestedManyWithoutEmpyloUserCheckinInput
  }

  export type EmpyloUserCreateOrConnectWithoutWeeklyAssessmentInput = {
    where: EmpyloUserWhereUniqueInput
    create: XOR<EmpyloUserCreateWithoutWeeklyAssessmentInput, EmpyloUserUncheckedCreateWithoutWeeklyAssessmentInput>
  }

  export type EmpyloUserCreateWithoutCheckinAssessmentInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    role?: $Enums.SystemRole
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    empyloID?: string | null
    permissions?: EmpyloUserCreatepermissionsInput | string[]
    passwordResetCode?: string | null
    password?: string | null
    weeklyAssessment?: AssessmentCreateNestedManyWithoutEmpyloUserInput
  }

  export type EmpyloUserUncheckedCreateWithoutCheckinAssessmentInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    role?: $Enums.SystemRole
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    empyloID?: string | null
    permissions?: EmpyloUserCreatepermissionsInput | string[]
    passwordResetCode?: string | null
    password?: string | null
    weeklyAssessment?: AssessmentUncheckedCreateNestedManyWithoutEmpyloUserInput
  }

  export type EmpyloUserCreateOrConnectWithoutCheckinAssessmentInput = {
    where: EmpyloUserWhereUniqueInput
    create: XOR<EmpyloUserCreateWithoutCheckinAssessmentInput, EmpyloUserUncheckedCreateWithoutCheckinAssessmentInput>
  }

  export type EmpyloUserUpsertWithoutWeeklyAssessmentInput = {
    update: XOR<EmpyloUserUpdateWithoutWeeklyAssessmentInput, EmpyloUserUncheckedUpdateWithoutWeeklyAssessmentInput>
    create: XOR<EmpyloUserCreateWithoutWeeklyAssessmentInput, EmpyloUserUncheckedCreateWithoutWeeklyAssessmentInput>
    where?: EmpyloUserWhereInput
  }

  export type EmpyloUserUpdateToOneWithWhereWithoutWeeklyAssessmentInput = {
    where?: EmpyloUserWhereInput
    data: XOR<EmpyloUserUpdateWithoutWeeklyAssessmentInput, EmpyloUserUncheckedUpdateWithoutWeeklyAssessmentInput>
  }

  export type EmpyloUserUpdateWithoutWeeklyAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    checkinAssessment?: AssessmentUpdateManyWithoutEmpyloUserCheckinNestedInput
  }

  export type EmpyloUserUncheckedUpdateWithoutWeeklyAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    checkinAssessment?: AssessmentUncheckedUpdateManyWithoutEmpyloUserCheckinNestedInput
  }

  export type EmpyloUserUpsertWithoutCheckinAssessmentInput = {
    update: XOR<EmpyloUserUpdateWithoutCheckinAssessmentInput, EmpyloUserUncheckedUpdateWithoutCheckinAssessmentInput>
    create: XOR<EmpyloUserCreateWithoutCheckinAssessmentInput, EmpyloUserUncheckedCreateWithoutCheckinAssessmentInput>
    where?: EmpyloUserWhereInput
  }

  export type EmpyloUserUpdateToOneWithWhereWithoutCheckinAssessmentInput = {
    where?: EmpyloUserWhereInput
    data: XOR<EmpyloUserUpdateWithoutCheckinAssessmentInput, EmpyloUserUncheckedUpdateWithoutCheckinAssessmentInput>
  }

  export type EmpyloUserUpdateWithoutCheckinAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    weeklyAssessment?: AssessmentUpdateManyWithoutEmpyloUserNestedInput
  }

  export type EmpyloUserUncheckedUpdateWithoutCheckinAssessmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    empyloID?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: EmpyloUserUpdatepermissionsInput | string[]
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    weeklyAssessment?: AssessmentUncheckedUpdateManyWithoutEmpyloUserNestedInput
  }

  export type UserCreateWithoutListOfScoreDetailInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    coyCircleAttachedTo?: CompanyCirclesCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesCreateNestedManyWithoutMemberListInput
  }

  export type UserUncheckedCreateWithoutListOfScoreDetailInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    createdBy?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedCreateNestedManyWithoutMemberListInput
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    otherUserCirclesIn?: UserCirclesUncheckedCreateNestedManyWithoutMemberListInput
  }

  export type UserCreateOrConnectWithoutListOfScoreDetailInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListOfScoreDetailInput, UserUncheckedCreateWithoutListOfScoreDetailInput>
  }

  export type UserUpsertWithoutListOfScoreDetailInput = {
    update: XOR<UserUpdateWithoutListOfScoreDetailInput, UserUncheckedUpdateWithoutListOfScoreDetailInput>
    create: XOR<UserCreateWithoutListOfScoreDetailInput, UserUncheckedCreateWithoutListOfScoreDetailInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListOfScoreDetailInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListOfScoreDetailInput, UserUncheckedUpdateWithoutListOfScoreDetailInput>
  }

  export type UserUpdateWithoutListOfScoreDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    coyCircleAttachedTo?: CompanyCirclesUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUpdateManyWithoutMemberListNestedInput
  }

  export type UserUncheckedUpdateWithoutListOfScoreDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUncheckedUpdateManyWithoutMemberListNestedInput
  }

  export type AssessmentCreateManyEmpyloUserInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    createdCheckinBy?: string | null
  }

  export type AssessmentCreateManyEmpyloUserCheckinInput = {
    id?: string
    created_at?: Date | string | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    setQuestions?: AssessmentCreatesetQuestionsInput | string[]
    createdWeeklyBy?: string | null
  }

  export type AssessmentUpdateWithoutEmpyloUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    empyloUserCheckin?: EmpyloUserUpdateOneWithoutCheckinAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutEmpyloUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    createdCheckinBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssessmentUncheckedUpdateManyWithoutEmpyloUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    createdCheckinBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssessmentUpdateWithoutEmpyloUserCheckinInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    empyloUser?: EmpyloUserUpdateOneWithoutWeeklyAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutEmpyloUserCheckinInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    createdWeeklyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssessmentUncheckedUpdateManyWithoutEmpyloUserCheckinInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    setQuestions?: AssessmentUpdatesetQuestionsInput | string[]
    createdWeeklyBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyCompanyUserInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: $Enums.MaitalStatus | null
    disability?: string | null
    DOB?: string | null
    accountType?: $Enums.UserAccount
    department?: string | null
    jobRole?: string | null
    password?: string | null
    role?: $Enums.SystemRole
    passwordResetCode?: string | null
    lastLogin?: Date | string | null
    passportImg?: string | null
    isActive?: boolean | null
    updated_at?: Date | string | null
    isEmailVerified?: boolean | null
    verificationCode?: string | null
    status?: $Enums.UserStatus
    address?: string | null
    bio?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    addedBy?: string | null
    socialId?: string | null
    socialProvider?: string | null
  }

  export type CompanyCirclesCreateManyCompanyUserInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    coyCircleName?: string | null
    coyCircleDescription?: string | null
    coyCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    coyCircleStatus?: $Enums.UserStatus
    coyCircleNos?: string | null
    circleImg?: string | null
    circleStatus?: $Enums.CircleStatus | null
  }

  export type UserUpdateWithoutCompanyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: CompanyCirclesUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCirclesUpdateWithoutCompanyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    memberList?: UserUpdateManyWithoutCoyCircleAttachedToNestedInput
  }

  export type CompanyCirclesUncheckedUpdateWithoutCompanyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    memberList?: UserUncheckedUpdateManyWithoutCoyCircleAttachedToNestedInput
  }

  export type CompanyCirclesUncheckedUpdateManyWithoutCompanyUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type UserUpdateWithoutCoyCircleAttachedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutCoyCircleAttachedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    otherUserCirclesIn?: UserCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    listOfScoreDetail?: ScoreDetailUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCoyCircleAttachedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCirclesCreateManyUserInput = {
    id?: string
    circleImg?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    userCircleName?: string | null
    userCircleDescription?: string | null
    userCircleShareLink?: string | null
    wellbeingScore?: string | null
    activityLevel?: $Enums.ActivityLevel
    createdBy?: string | null
    userCircleStatus?: $Enums.UserStatus
    userCircleNos?: string | null
    circleStatus?: $Enums.CircleStatus | null
  }

  export type ScoreDetailCreateManyOwnerInput = {
    id?: string
    weeklyScore?: number | null
    dailyScore?: number | null
    wellbeingScore?: number | null
    setNo?: string | null
    assessmentType?: $Enums.AssessmentType | null
    created_at?: Date | string | null
  }

  export type CompanyCirclesUpdateWithoutMemberListInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    companyUser?: CompanyUserUpdateOneWithoutCompany_circleNestedInput
  }

  export type CompanyCirclesUncheckedUpdateWithoutMemberListInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    companyUserId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type CompanyCirclesUncheckedUpdateManyWithoutMemberListInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    coyCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    companyUserId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    coyCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type UserCirclesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    memberList?: UserUpdateManyWithoutOtherUserCirclesInNestedInput
  }

  export type UserCirclesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    memberList?: UserUncheckedUpdateManyWithoutOtherUserCirclesInNestedInput
  }

  export type UserCirclesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type UserCirclesUpdateWithoutMemberListInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
    user?: UserUpdateOneWithoutUserCirclesNestedInput
  }

  export type UserCirclesUncheckedUpdateWithoutMemberListInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type UserCirclesUncheckedUpdateManyWithoutMemberListInput = {
    id?: StringFieldUpdateOperationsInput | string
    circleImg?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCircleName?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleShareLink?: NullableStringFieldUpdateOperationsInput | string | null
    wellbeingScore?: NullableStringFieldUpdateOperationsInput | string | null
    activityLevel?: EnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    userCircleStatus?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    userCircleNos?: NullableStringFieldUpdateOperationsInput | string | null
    circleStatus?: NullableEnumCircleStatusFieldUpdateOperationsInput | $Enums.CircleStatus | null
  }

  export type ScoreDetailUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    dailyScore?: NullableIntFieldUpdateOperationsInput | number | null
    wellbeingScore?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScoreDetailUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    dailyScore?: NullableIntFieldUpdateOperationsInput | number | null
    wellbeingScore?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScoreDetailUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    weeklyScore?: NullableIntFieldUpdateOperationsInput | number | null
    dailyScore?: NullableIntFieldUpdateOperationsInput | number | null
    wellbeingScore?: NullableIntFieldUpdateOperationsInput | number | null
    setNo?: NullableStringFieldUpdateOperationsInput | string | null
    assessmentType?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutOtherUserCirclesInInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    coyCircleAttachedTo?: CompanyCirclesUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    listOfScoreDetail?: ScoreDetailUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutOtherUserCirclesInInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: CompanyCirclesUncheckedUpdateManyWithoutMemberListNestedInput
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    listOfScoreDetail?: ScoreDetailUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutOtherUserCirclesInInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableEnumMaitalStatusFieldUpdateOperationsInput | $Enums.MaitalStatus | null
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableStringFieldUpdateOperationsInput | string | null
    accountType?: EnumUserAccountFieldUpdateOperationsInput | $Enums.UserAccount
    department?: NullableStringFieldUpdateOperationsInput | string | null
    jobRole?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumSystemRoleFieldUpdateOperationsInput | $Enums.SystemRole
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passportImg?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addedBy?: NullableStringFieldUpdateOperationsInput | string | null
    socialId?: NullableStringFieldUpdateOperationsInput | string | null
    socialProvider?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EmpyloUserCountOutputTypeDefaultArgs instead
     */
    export type EmpyloUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpyloUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyUserCountOutputTypeDefaultArgs instead
     */
    export type CompanyUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCirclesCountOutputTypeDefaultArgs instead
     */
    export type CompanyCirclesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCirclesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCirclesCountOutputTypeDefaultArgs instead
     */
    export type UserCirclesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCirclesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpyloUserDefaultArgs instead
     */
    export type EmpyloUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpyloUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyUserDefaultArgs instead
     */
    export type CompanyUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCirclesDefaultArgs instead
     */
    export type CompanyCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCirclesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCirclesDefaultArgs instead
     */
    export type UserCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCirclesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentDefaultArgs instead
     */
    export type AssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScoreDetailDefaultArgs instead
     */
    export type ScoreDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoreDetailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}