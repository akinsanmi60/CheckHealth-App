
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


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
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  active: 'active',
  pending: 'pending',
  inactive: 'inactive'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ActivityLevel: {
  high: 'high',
  moderate: 'moderate',
  excellent: 'excellent',
  moderatelyHigh: 'moderatelyHigh',
  low: 'low'
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel]


export const UserGender: {
  male: 'male',
  female: 'female'
};

export type UserGender = (typeof UserGender)[keyof typeof UserGender]


export const UserAccount: {
  personalUser: 'personalUser',
  clientUser: 'clientUser'
};

export type UserAccount = (typeof UserAccount)[keyof typeof UserAccount]


export const SystemRole: {
  superAdmin: 'superAdmin',
  admin: 'admin',
  user: 'user'
};

export type SystemRole = (typeof SystemRole)[keyof typeof SystemRole]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ActivityLevel = $Enums.ActivityLevel

export const ActivityLevel: typeof $Enums.ActivityLevel

export type UserGender = $Enums.UserGender

export const UserGender: typeof $Enums.UserGender

export type UserAccount = $Enums.UserAccount

export const UserAccount: typeof $Enums.UserAccount

export type SystemRole = $Enums.SystemRole

export const SystemRole: typeof $Enums.SystemRole

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CompanyUsers
 * const companyUsers = await prisma.companyUser.findMany()
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
   * // Fetch zero or more CompanyUsers
   * const companyUsers = await prisma.companyUser.findMany()
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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
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
    CompanyUser: 'CompanyUser',
    CompanyCircles: 'CompanyCircles',
    User: 'User',
    UserCircles: 'UserCircles'
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
      modelProps: 'companyUser' | 'companyCircles' | 'user' | 'userCircles'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
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
    userCircles: number
    coyCirclesList: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCircles?: boolean | UserCountOutputTypeCountUserCirclesArgs
    coyCirclesList?: boolean | UserCountOutputTypeCountCoyCirclesListArgs
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
  export type UserCountOutputTypeCountUserCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCirclesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoyCirclesListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyCirclesWhereInput
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
    address: string | null
    addressCity: string | null
    addressState: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
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
    address: string | null
    addressCity: string | null
    addressState: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
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
    address: number
    addressCity: number
    addressState: number
    emailNotification: number
    campaignNtification: number
    termsConditions: number
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
    address?: true
    addressCity?: true
    addressState?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
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
    address?: true
    addressCity?: true
    addressState?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
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
    address?: true
    addressCity?: true
    addressState?: true
    emailNotification?: true
    campaignNtification?: true
    termsConditions?: true
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
    address: string | null
    addressCity: string | null
    addressState: string | null
    emailNotification: boolean | null
    campaignNtification: boolean | null
    termsConditions: boolean | null
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
    address?: boolean
    addressCity?: boolean
    addressState?: boolean
    emailNotification?: boolean
    campaignNtification?: boolean
    termsConditions?: boolean
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
    address?: boolean
    addressCity?: boolean
    addressState?: boolean
    emailNotification?: boolean
    campaignNtification?: boolean
    termsConditions?: boolean
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
      address: string | null
      addressCity: string | null
      addressState: string | null
      emailNotification: boolean | null
      campaignNtification: boolean | null
      termsConditions: boolean | null
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
    readonly address: FieldRef<"CompanyUser", 'String'>
    readonly addressCity: FieldRef<"CompanyUser", 'String'>
    readonly addressState: FieldRef<"CompanyUser", 'String'>
    readonly emailNotification: FieldRef<"CompanyUser", 'Boolean'>
    readonly campaignNtification: FieldRef<"CompanyUser", 'Boolean'>
    readonly termsConditions: FieldRef<"CompanyUser", 'Boolean'>
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
    userAttachedID: string | null
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
    userAttachedID: string | null
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
    userAttachedID: number
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
    userAttachedID?: true
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
    userAttachedID?: true
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
    userAttachedID?: true
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
    userAttachedID: string | null
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
    userAttachedID?: boolean
    companyUser?: boolean | CompanyCircles$companyUserArgs<ExtArgs>
    memberList?: boolean | CompanyCircles$memberListArgs<ExtArgs>
    user?: boolean | CompanyCircles$userArgs<ExtArgs>
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
    userAttachedID?: boolean
  }

  export type CompanyCirclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyUser?: boolean | CompanyCircles$companyUserArgs<ExtArgs>
    memberList?: boolean | CompanyCircles$memberListArgs<ExtArgs>
    user?: boolean | CompanyCircles$userArgs<ExtArgs>
    _count?: boolean | CompanyCirclesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CompanyCirclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyCircles"
    objects: {
      companyUser: Prisma.$CompanyUserPayload<ExtArgs> | null
      memberList: Prisma.$UserPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
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
      userAttachedID: string | null
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

    user<T extends CompanyCircles$userArgs<ExtArgs> = {}>(args?: Subset<T, CompanyCircles$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly userAttachedID: FieldRef<"CompanyCircles", 'String'>
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
   * CompanyCircles.user
   */
  export type CompanyCircles$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    maritalStatus: string | null
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
    userCircleId: string | null
    coyCircleAttachedTo: string | null
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
    maritalStatus: string | null
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
    userCircleId: string | null
    coyCircleAttachedTo: string | null
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
    userCircleId: number
    coyCircleAttachedTo: number
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
    userCircleId?: true
    coyCircleAttachedTo?: true
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
    userCircleId?: true
    coyCircleAttachedTo?: true
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
    userCircleId?: true
    coyCircleAttachedTo?: true
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
    maritalStatus: string | null
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
    userCircleId: string | null
    coyCircleAttachedTo: string
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
    userCircleId?: boolean
    coyCircleAttachedTo?: boolean
    companyUser?: boolean | User$companyUserArgs<ExtArgs>
    userCircleIn?: boolean | User$userCircleInArgs<ExtArgs>
    companyCirle?: boolean | User$companyCirleArgs<ExtArgs>
    userCircles?: boolean | User$userCirclesArgs<ExtArgs>
    coyCirclesList?: boolean | User$coyCirclesListArgs<ExtArgs>
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
    userCircleId?: boolean
    coyCircleAttachedTo?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companyUser?: boolean | User$companyUserArgs<ExtArgs>
    userCircleIn?: boolean | User$userCircleInArgs<ExtArgs>
    companyCirle?: boolean | User$companyCirleArgs<ExtArgs>
    userCircles?: boolean | User$userCirclesArgs<ExtArgs>
    coyCirclesList?: boolean | User$coyCirclesListArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      companyUser: Prisma.$CompanyUserPayload<ExtArgs> | null
      userCircleIn: Prisma.$UserCirclesPayload<ExtArgs> | null
      companyCirle: Prisma.$CompanyCirclesPayload<ExtArgs> | null
      userCircles: Prisma.$UserCirclesPayload<ExtArgs>[]
      coyCirclesList: Prisma.$CompanyCirclesPayload<ExtArgs>[]
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
      maritalStatus: string | null
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
      userCircleId: string | null
      coyCircleAttachedTo: string
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

    userCircleIn<T extends User$userCircleInArgs<ExtArgs> = {}>(args?: Subset<T, User$userCircleInArgs<ExtArgs>>): Prisma__UserCirclesClient<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    companyCirle<T extends User$companyCirleArgs<ExtArgs> = {}>(args?: Subset<T, User$companyCirleArgs<ExtArgs>>): Prisma__CompanyCirclesClient<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    userCircles<T extends User$userCirclesArgs<ExtArgs> = {}>(args?: Subset<T, User$userCirclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCirclesPayload<ExtArgs>, T, 'findMany'> | Null>;

    coyCirclesList<T extends User$coyCirclesListArgs<ExtArgs> = {}>(args?: Subset<T, User$coyCirclesListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyCirclesPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly maritalStatus: FieldRef<"User", 'String'>
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
    readonly userCircleId: FieldRef<"User", 'String'>
    readonly coyCircleAttachedTo: FieldRef<"User", 'String'>
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
   * User.userCircleIn
   */
  export type User$userCircleInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCircles
     */
    select?: UserCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserCirclesInclude<ExtArgs> | null
    where?: UserCirclesWhereInput
  }


  /**
   * User.companyCirle
   */
  export type User$companyCirleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCircles
     */
    select?: CompanyCirclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompanyCirclesInclude<ExtArgs> | null
    where?: CompanyCirclesWhereInput
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
   * User.coyCirclesList
   */
  export type User$coyCirclesListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


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
    address: 'address',
    addressCity: 'addressCity',
    addressState: 'addressState',
    emailNotification: 'emailNotification',
    campaignNtification: 'campaignNtification',
    termsConditions: 'termsConditions'
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
    userAttachedID: 'userAttachedID'
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
    userCircleId: 'userCircleId',
    coyCircleAttachedTo: 'coyCircleAttachedTo'
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
    userCircleNos: 'userCircleNos'
  };

  export type UserCirclesScalarFieldEnum = (typeof UserCirclesScalarFieldEnum)[keyof typeof UserCirclesScalarFieldEnum]


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
   * Reference to a field of type 'ActivityLevel'
   */
  export type EnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel'>
    


  /**
   * Reference to a field of type 'ActivityLevel[]'
   */
  export type ListEnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel[]'>
    


  /**
   * Reference to a field of type 'UserGender'
   */
  export type EnumUserGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserGender'>
    


  /**
   * Reference to a field of type 'UserGender[]'
   */
  export type ListEnumUserGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserGender[]'>
    


  /**
   * Reference to a field of type 'UserAccount'
   */
  export type EnumUserAccountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserAccount'>
    


  /**
   * Reference to a field of type 'UserAccount[]'
   */
  export type ListEnumUserAccountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserAccount[]'>
    


  /**
   * Reference to a field of type 'SystemRole'
   */
  export type EnumSystemRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemRole'>
    


  /**
   * Reference to a field of type 'SystemRole[]'
   */
  export type ListEnumSystemRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


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
    address?: StringNullableFilter<"CompanyUser"> | string | null
    addressCity?: StringNullableFilter<"CompanyUser"> | string | null
    addressState?: StringNullableFilter<"CompanyUser"> | string | null
    emailNotification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    campaignNtification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    termsConditions?: BoolNullableFilter<"CompanyUser"> | boolean | null
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
    address?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressState?: SortOrderInput | SortOrder
    emailNotification?: SortOrderInput | SortOrder
    campaignNtification?: SortOrderInput | SortOrder
    termsConditions?: SortOrderInput | SortOrder
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
    address?: StringNullableFilter<"CompanyUser"> | string | null
    addressCity?: StringNullableFilter<"CompanyUser"> | string | null
    addressState?: StringNullableFilter<"CompanyUser"> | string | null
    emailNotification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    campaignNtification?: BoolNullableFilter<"CompanyUser"> | boolean | null
    termsConditions?: BoolNullableFilter<"CompanyUser"> | boolean | null
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
    address?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressState?: SortOrderInput | SortOrder
    emailNotification?: SortOrderInput | SortOrder
    campaignNtification?: SortOrderInput | SortOrder
    termsConditions?: SortOrderInput | SortOrder
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
    address?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    addressCity?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    addressState?: StringNullableWithAggregatesFilter<"CompanyUser"> | string | null
    emailNotification?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
    campaignNtification?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
    termsConditions?: BoolNullableWithAggregatesFilter<"CompanyUser"> | boolean | null
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
    userAttachedID?: StringNullableFilter<"CompanyCircles"> | string | null
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    memberList?: UserListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
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
    userAttachedID?: SortOrderInput | SortOrder
    companyUser?: CompanyUserOrderByWithRelationInput
    memberList?: UserOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CompanyCirclesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coyCircleName?: string
    coyCircleNos?: string
    AND?: CompanyCirclesWhereInput | CompanyCirclesWhereInput[]
    OR?: CompanyCirclesWhereInput[]
    NOT?: CompanyCirclesWhereInput | CompanyCirclesWhereInput[]
    created_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"CompanyCircles"> | Date | string | null
    coyCircleDescription?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleShareLink?: StringNullableFilter<"CompanyCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"CompanyCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"CompanyCircles"> | $Enums.ActivityLevel
    companyUserId?: StringNullableFilter<"CompanyCircles"> | string | null
    coyCircleStatus?: EnumUserStatusFilter<"CompanyCircles"> | $Enums.UserStatus
    circleImg?: StringNullableFilter<"CompanyCircles"> | string | null
    userAttachedID?: StringNullableFilter<"CompanyCircles"> | string | null
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    memberList?: UserListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "id" | "coyCircleName" | "coyCircleNos">

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
    userAttachedID?: SortOrderInput | SortOrder
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
    userAttachedID?: StringNullableWithAggregatesFilter<"CompanyCircles"> | string | null
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
    maritalStatus?: StringNullableFilter<"User"> | string | null
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
    userCircleId?: StringNullableFilter<"User"> | string | null
    coyCircleAttachedTo?: StringFilter<"User"> | string
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    userCircleIn?: XOR<UserCirclesNullableRelationFilter, UserCirclesWhereInput> | null
    companyCirle?: XOR<CompanyCirclesNullableRelationFilter, CompanyCirclesWhereInput> | null
    userCircles?: UserCirclesListRelationFilter
    coyCirclesList?: CompanyCirclesListRelationFilter
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
    userCircleId?: SortOrderInput | SortOrder
    coyCircleAttachedTo?: SortOrder
    companyUser?: CompanyUserOrderByWithRelationInput
    userCircleIn?: UserCirclesOrderByWithRelationInput
    companyCirle?: CompanyCirclesOrderByWithRelationInput
    userCircles?: UserCirclesOrderByRelationAggregateInput
    coyCirclesList?: CompanyCirclesOrderByRelationAggregateInput
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
    maritalStatus?: StringNullableFilter<"User"> | string | null
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
    userCircleId?: StringNullableFilter<"User"> | string | null
    coyCircleAttachedTo?: StringFilter<"User"> | string
    companyUser?: XOR<CompanyUserNullableRelationFilter, CompanyUserWhereInput> | null
    userCircleIn?: XOR<UserCirclesNullableRelationFilter, UserCirclesWhereInput> | null
    companyCirle?: XOR<CompanyCirclesNullableRelationFilter, CompanyCirclesWhereInput> | null
    userCircles?: UserCirclesListRelationFilter
    coyCirclesList?: CompanyCirclesListRelationFilter
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
    userCircleId?: SortOrderInput | SortOrder
    coyCircleAttachedTo?: SortOrder
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
    maritalStatus?: StringNullableWithAggregatesFilter<"User"> | string | null
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
    userCircleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    coyCircleAttachedTo?: StringWithAggregatesFilter<"User"> | string
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
    user?: UserOrderByWithRelationInput
    memberList?: UserOrderByRelationAggregateInput
  }

  export type UserCirclesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userCircleName?: string
    userCircleNos?: string
    AND?: UserCirclesWhereInput | UserCirclesWhereInput[]
    OR?: UserCirclesWhereInput[]
    NOT?: UserCirclesWhereInput | UserCirclesWhereInput[]
    circleImg?: StringNullableFilter<"UserCircles"> | string | null
    created_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"UserCircles"> | Date | string | null
    userCircleDescription?: StringNullableFilter<"UserCircles"> | string | null
    userCircleShareLink?: StringNullableFilter<"UserCircles"> | string | null
    wellbeingScore?: StringNullableFilter<"UserCircles"> | string | null
    activityLevel?: EnumActivityLevelFilter<"UserCircles"> | $Enums.ActivityLevel
    userId?: StringNullableFilter<"UserCircles"> | string | null
    createdBy?: StringNullableFilter<"UserCircles"> | string | null
    userCircleStatus?: EnumUserStatusFilter<"UserCircles"> | $Enums.UserStatus
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    memberList?: UserListRelationFilter
  }, "id" | "id" | "userCircleName" | "userCircleNos">

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
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
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
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    companyUser?: CompanyUserCreateNestedOneWithoutCompany_circleInput
    memberList?: UserCreateNestedManyWithoutCompanyCirleInput
    user?: UserCreateNestedOneWithoutCoyCirclesListInput
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
    userAttachedID?: string | null
    memberList?: UserUncheckedCreateNestedManyWithoutCompanyCirleInput
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
    companyUser?: CompanyUserUpdateOneWithoutCompany_circleNestedInput
    memberList?: UserUpdateManyWithoutCompanyCirleNestedInput
    user?: UserUpdateOneWithoutCoyCirclesListNestedInput
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
    userAttachedID?: NullableStringFieldUpdateOperationsInput | string | null
    memberList?: UserUncheckedUpdateManyWithoutCompanyCirleNestedInput
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
    userAttachedID?: string | null
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
    userAttachedID?: NullableStringFieldUpdateOperationsInput | string | null
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
    maritalStatus?: string | null
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
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    userCircleIn?: UserCirclesCreateNestedOneWithoutMemberListInput
    companyCirle?: CompanyCirclesCreateNestedOneWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesCreateNestedManyWithoutUserInput
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
    maritalStatus?: string | null
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
    userCircleId?: string | null
    coyCircleAttachedTo: string
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesUncheckedCreateNestedManyWithoutUserInput
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    userCircleIn?: UserCirclesUpdateOneWithoutMemberListNestedInput
    companyCirle?: CompanyCirclesUpdateOneWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUpdateManyWithoutUserNestedInput
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUncheckedUpdateManyWithoutUserNestedInput
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
    maritalStatus?: string | null
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
    userCircleId?: string | null
    coyCircleAttachedTo: string
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
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
    user?: UserCreateNestedOneWithoutUserCirclesInput
    memberList?: UserCreateNestedManyWithoutUserCircleInInput
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
    memberList?: UserUncheckedCreateNestedManyWithoutUserCircleInInput
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
    user?: UserUpdateOneWithoutUserCirclesNestedInput
    memberList?: UserUpdateManyWithoutUserCircleInNestedInput
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
    memberList?: UserUncheckedUpdateManyWithoutUserCircleInNestedInput
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    address?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
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
    address?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
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
    address?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    emailNotification?: SortOrder
    campaignNtification?: SortOrder
    termsConditions?: SortOrder
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

  export type EnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
  }

  export type CompanyUserNullableRelationFilter = {
    is?: CompanyUserWhereInput | null
    isNot?: CompanyUserWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
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
    userAttachedID?: SortOrder
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
    userAttachedID?: SortOrder
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
    userAttachedID?: SortOrder
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

  export type EnumUserGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserGenderNullableFilter<$PrismaModel> | $Enums.UserGender | null
  }

  export type EnumUserAccountFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountFilter<$PrismaModel> | $Enums.UserAccount
  }

  export type EnumSystemRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemRoleFilter<$PrismaModel> | $Enums.SystemRole
  }

  export type UserCirclesNullableRelationFilter = {
    is?: UserCirclesWhereInput | null
    isNot?: UserCirclesWhereInput | null
  }

  export type CompanyCirclesNullableRelationFilter = {
    is?: CompanyCirclesWhereInput | null
    isNot?: CompanyCirclesWhereInput | null
  }

  export type UserCirclesListRelationFilter = {
    every?: UserCirclesWhereInput
    some?: UserCirclesWhereInput
    none?: UserCirclesWhereInput
  }

  export type UserCirclesOrderByRelationAggregateInput = {
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
    userCircleId?: SortOrder
    coyCircleAttachedTo?: SortOrder
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
    userCircleId?: SortOrder
    coyCircleAttachedTo?: SortOrder
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
    userCircleId?: SortOrder
    coyCircleAttachedTo?: SortOrder
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

  export type EnumUserAccountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountWithAggregatesFilter<$PrismaModel> | $Enums.UserAccount
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserAccountFilter<$PrismaModel>
    _max?: NestedEnumUserAccountFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
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

  export type UserCreateNestedManyWithoutCompanyCirleInput = {
    create?: XOR<UserCreateWithoutCompanyCirleInput, UserUncheckedCreateWithoutCompanyCirleInput> | UserCreateWithoutCompanyCirleInput[] | UserUncheckedCreateWithoutCompanyCirleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyCirleInput | UserCreateOrConnectWithoutCompanyCirleInput[]
    createMany?: UserCreateManyCompanyCirleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCoyCirclesListInput = {
    create?: XOR<UserCreateWithoutCoyCirclesListInput, UserUncheckedCreateWithoutCoyCirclesListInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoyCirclesListInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyCirleInput = {
    create?: XOR<UserCreateWithoutCompanyCirleInput, UserUncheckedCreateWithoutCompanyCirleInput> | UserCreateWithoutCompanyCirleInput[] | UserUncheckedCreateWithoutCompanyCirleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyCirleInput | UserCreateOrConnectWithoutCompanyCirleInput[]
    createMany?: UserCreateManyCompanyCirleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumActivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLevel
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

  export type UserUpdateManyWithoutCompanyCirleNestedInput = {
    create?: XOR<UserCreateWithoutCompanyCirleInput, UserUncheckedCreateWithoutCompanyCirleInput> | UserCreateWithoutCompanyCirleInput[] | UserUncheckedCreateWithoutCompanyCirleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyCirleInput | UserCreateOrConnectWithoutCompanyCirleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyCirleInput | UserUpsertWithWhereUniqueWithoutCompanyCirleInput[]
    createMany?: UserCreateManyCompanyCirleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyCirleInput | UserUpdateWithWhereUniqueWithoutCompanyCirleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyCirleInput | UserUpdateManyWithWhereWithoutCompanyCirleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCoyCirclesListNestedInput = {
    create?: XOR<UserCreateWithoutCoyCirclesListInput, UserUncheckedCreateWithoutCoyCirclesListInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoyCirclesListInput
    upsert?: UserUpsertWithoutCoyCirclesListInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoyCirclesListInput, UserUpdateWithoutCoyCirclesListInput>, UserUncheckedUpdateWithoutCoyCirclesListInput>
  }

  export type UserUncheckedUpdateManyWithoutCompanyCirleNestedInput = {
    create?: XOR<UserCreateWithoutCompanyCirleInput, UserUncheckedCreateWithoutCompanyCirleInput> | UserCreateWithoutCompanyCirleInput[] | UserUncheckedCreateWithoutCompanyCirleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyCirleInput | UserCreateOrConnectWithoutCompanyCirleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyCirleInput | UserUpsertWithWhereUniqueWithoutCompanyCirleInput[]
    createMany?: UserCreateManyCompanyCirleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyCirleInput | UserUpdateWithWhereUniqueWithoutCompanyCirleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyCirleInput | UserUpdateManyWithWhereWithoutCompanyCirleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyUserCreateNestedOneWithoutMembersListInput = {
    create?: XOR<CompanyUserCreateWithoutMembersListInput, CompanyUserUncheckedCreateWithoutMembersListInput>
    connectOrCreate?: CompanyUserCreateOrConnectWithoutMembersListInput
    connect?: CompanyUserWhereUniqueInput
  }

  export type UserCirclesCreateNestedOneWithoutMemberListInput = {
    create?: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput>
    connectOrCreate?: UserCirclesCreateOrConnectWithoutMemberListInput
    connect?: UserCirclesWhereUniqueInput
  }

  export type CompanyCirclesCreateNestedOneWithoutMemberListInput = {
    create?: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput>
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutMemberListInput
    connect?: CompanyCirclesWhereUniqueInput
  }

  export type UserCirclesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput> | UserCirclesCreateWithoutUserInput[] | UserCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutUserInput | UserCirclesCreateOrConnectWithoutUserInput[]
    createMany?: UserCirclesCreateManyUserInputEnvelope
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
  }

  export type CompanyCirclesCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCirclesCreateWithoutUserInput, CompanyCirclesUncheckedCreateWithoutUserInput> | CompanyCirclesCreateWithoutUserInput[] | CompanyCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutUserInput | CompanyCirclesCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCirclesCreateManyUserInputEnvelope
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
  }

  export type UserCirclesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput> | UserCirclesCreateWithoutUserInput[] | UserCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCirclesCreateOrConnectWithoutUserInput | UserCirclesCreateOrConnectWithoutUserInput[]
    createMany?: UserCirclesCreateManyUserInputEnvelope
    connect?: UserCirclesWhereUniqueInput | UserCirclesWhereUniqueInput[]
  }

  export type CompanyCirclesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CompanyCirclesCreateWithoutUserInput, CompanyCirclesUncheckedCreateWithoutUserInput> | CompanyCirclesCreateWithoutUserInput[] | CompanyCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutUserInput | CompanyCirclesCreateOrConnectWithoutUserInput[]
    createMany?: CompanyCirclesCreateManyUserInputEnvelope
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
  }

  export type NullableEnumUserGenderFieldUpdateOperationsInput = {
    set?: $Enums.UserGender | null
  }

  export type EnumUserAccountFieldUpdateOperationsInput = {
    set?: $Enums.UserAccount
  }

  export type EnumSystemRoleFieldUpdateOperationsInput = {
    set?: $Enums.SystemRole
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

  export type UserCirclesUpdateOneWithoutMemberListNestedInput = {
    create?: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput>
    connectOrCreate?: UserCirclesCreateOrConnectWithoutMemberListInput
    upsert?: UserCirclesUpsertWithoutMemberListInput
    disconnect?: UserCirclesWhereInput | boolean
    delete?: UserCirclesWhereInput | boolean
    connect?: UserCirclesWhereUniqueInput
    update?: XOR<XOR<UserCirclesUpdateToOneWithWhereWithoutMemberListInput, UserCirclesUpdateWithoutMemberListInput>, UserCirclesUncheckedUpdateWithoutMemberListInput>
  }

  export type CompanyCirclesUpdateOneWithoutMemberListNestedInput = {
    create?: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput>
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutMemberListInput
    upsert?: CompanyCirclesUpsertWithoutMemberListInput
    disconnect?: CompanyCirclesWhereInput | boolean
    delete?: CompanyCirclesWhereInput | boolean
    connect?: CompanyCirclesWhereUniqueInput
    update?: XOR<XOR<CompanyCirclesUpdateToOneWithWhereWithoutMemberListInput, CompanyCirclesUpdateWithoutMemberListInput>, CompanyCirclesUncheckedUpdateWithoutMemberListInput>
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

  export type CompanyCirclesUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCirclesCreateWithoutUserInput, CompanyCirclesUncheckedCreateWithoutUserInput> | CompanyCirclesCreateWithoutUserInput[] | CompanyCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutUserInput | CompanyCirclesCreateOrConnectWithoutUserInput[]
    upsert?: CompanyCirclesUpsertWithWhereUniqueWithoutUserInput | CompanyCirclesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCirclesCreateManyUserInputEnvelope
    set?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    disconnect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    delete?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    update?: CompanyCirclesUpdateWithWhereUniqueWithoutUserInput | CompanyCirclesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyCirclesUpdateManyWithWhereWithoutUserInput | CompanyCirclesUpdateManyWithWhereWithoutUserInput[]
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

  export type CompanyCirclesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CompanyCirclesCreateWithoutUserInput, CompanyCirclesUncheckedCreateWithoutUserInput> | CompanyCirclesCreateWithoutUserInput[] | CompanyCirclesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CompanyCirclesCreateOrConnectWithoutUserInput | CompanyCirclesCreateOrConnectWithoutUserInput[]
    upsert?: CompanyCirclesUpsertWithWhereUniqueWithoutUserInput | CompanyCirclesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CompanyCirclesCreateManyUserInputEnvelope
    set?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    disconnect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    delete?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    connect?: CompanyCirclesWhereUniqueInput | CompanyCirclesWhereUniqueInput[]
    update?: CompanyCirclesUpdateWithWhereUniqueWithoutUserInput | CompanyCirclesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CompanyCirclesUpdateManyWithWhereWithoutUserInput | CompanyCirclesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CompanyCirclesScalarWhereInput | CompanyCirclesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserCirclesInput = {
    create?: XOR<UserCreateWithoutUserCirclesInput, UserUncheckedCreateWithoutUserCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCirclesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutUserCircleInInput = {
    create?: XOR<UserCreateWithoutUserCircleInInput, UserUncheckedCreateWithoutUserCircleInInput> | UserCreateWithoutUserCircleInInput[] | UserUncheckedCreateWithoutUserCircleInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserCircleInInput | UserCreateOrConnectWithoutUserCircleInInput[]
    createMany?: UserCreateManyUserCircleInInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUserCircleInInput = {
    create?: XOR<UserCreateWithoutUserCircleInInput, UserUncheckedCreateWithoutUserCircleInInput> | UserCreateWithoutUserCircleInInput[] | UserUncheckedCreateWithoutUserCircleInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserCircleInInput | UserCreateOrConnectWithoutUserCircleInInput[]
    createMany?: UserCreateManyUserCircleInInputEnvelope
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

  export type UserUpdateManyWithoutUserCircleInNestedInput = {
    create?: XOR<UserCreateWithoutUserCircleInInput, UserUncheckedCreateWithoutUserCircleInInput> | UserCreateWithoutUserCircleInInput[] | UserUncheckedCreateWithoutUserCircleInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserCircleInInput | UserCreateOrConnectWithoutUserCircleInInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserCircleInInput | UserUpsertWithWhereUniqueWithoutUserCircleInInput[]
    createMany?: UserCreateManyUserCircleInInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserCircleInInput | UserUpdateWithWhereUniqueWithoutUserCircleInInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserCircleInInput | UserUpdateManyWithWhereWithoutUserCircleInInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUserCircleInNestedInput = {
    create?: XOR<UserCreateWithoutUserCircleInInput, UserUncheckedCreateWithoutUserCircleInInput> | UserCreateWithoutUserCircleInInput[] | UserUncheckedCreateWithoutUserCircleInInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserCircleInInput | UserCreateOrConnectWithoutUserCircleInInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserCircleInInput | UserUpsertWithWhereUniqueWithoutUserCircleInInput[]
    createMany?: UserCreateManyUserCircleInInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserCircleInInput | UserUpdateWithWhereUniqueWithoutUserCircleInInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserCircleInInput | UserUpdateManyWithWhereWithoutUserCircleInInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type NestedEnumActivityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityLevelFilter<$PrismaModel> | $Enums.ActivityLevel
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

  export type NestedEnumUserGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserGender[] | ListEnumUserGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserGenderNullableFilter<$PrismaModel> | $Enums.UserGender | null
  }

  export type NestedEnumUserAccountFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountFilter<$PrismaModel> | $Enums.UserAccount
  }

  export type NestedEnumSystemRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemRole | EnumSystemRoleFieldRefInput<$PrismaModel>
    in?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SystemRole[] | ListEnumSystemRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumSystemRoleFilter<$PrismaModel> | $Enums.SystemRole
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

  export type NestedEnumUserAccountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserAccount | EnumUserAccountFieldRefInput<$PrismaModel>
    in?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserAccount[] | ListEnumUserAccountFieldRefInput<$PrismaModel>
    not?: NestedEnumUserAccountWithAggregatesFilter<$PrismaModel> | $Enums.UserAccount
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserAccountFilter<$PrismaModel>
    _max?: NestedEnumUserAccountFilter<$PrismaModel>
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
    maritalStatus?: string | null
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
    userCircleIn?: UserCirclesCreateNestedOneWithoutMemberListInput
    companyCirle?: CompanyCirclesCreateNestedOneWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesCreateNestedManyWithoutUserInput
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
    maritalStatus?: string | null
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
    userCircleId?: string | null
    coyCircleAttachedTo: string
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesUncheckedCreateNestedManyWithoutUserInput
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
    memberList?: UserCreateNestedManyWithoutCompanyCirleInput
    user?: UserCreateNestedOneWithoutCoyCirclesListInput
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
    userAttachedID?: string | null
    memberList?: UserUncheckedCreateNestedManyWithoutCompanyCirleInput
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
    maritalStatus?: StringNullableFilter<"User"> | string | null
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
    userCircleId?: StringNullableFilter<"User"> | string | null
    coyCircleAttachedTo?: StringFilter<"User"> | string
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
    userAttachedID?: StringNullableFilter<"CompanyCircles"> | string | null
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
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
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
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    membersList?: UserUncheckedCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserCreateOrConnectWithoutCompany_circleInput = {
    where: CompanyUserWhereUniqueInput
    create: XOR<CompanyUserCreateWithoutCompany_circleInput, CompanyUserUncheckedCreateWithoutCompany_circleInput>
  }

  export type UserCreateWithoutCompanyCirleInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    userCircleIn?: UserCirclesCreateNestedOneWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyCirleInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    userCircleId?: string | null
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyCirleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyCirleInput, UserUncheckedCreateWithoutCompanyCirleInput>
  }

  export type UserCreateManyCompanyCirleInputEnvelope = {
    data: UserCreateManyCompanyCirleInput | UserCreateManyCompanyCirleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCoyCirclesListInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    userCircleIn?: UserCirclesCreateNestedOneWithoutMemberListInput
    companyCirle?: CompanyCirclesCreateNestedOneWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoyCirclesListInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    userCircleId?: string | null
    coyCircleAttachedTo: string
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoyCirclesListInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoyCirclesListInput, UserUncheckedCreateWithoutCoyCirclesListInput>
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    membersList?: UserUncheckedUpdateManyWithoutCompanyUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyCirleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyCirleInput, UserUncheckedUpdateWithoutCompanyCirleInput>
    create: XOR<UserCreateWithoutCompanyCirleInput, UserUncheckedCreateWithoutCompanyCirleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyCirleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyCirleInput, UserUncheckedUpdateWithoutCompanyCirleInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyCirleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyCirleInput>
  }

  export type UserUpsertWithoutCoyCirclesListInput = {
    update: XOR<UserUpdateWithoutCoyCirclesListInput, UserUncheckedUpdateWithoutCoyCirclesListInput>
    create: XOR<UserCreateWithoutCoyCirclesListInput, UserUncheckedCreateWithoutCoyCirclesListInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoyCirclesListInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoyCirclesListInput, UserUncheckedUpdateWithoutCoyCirclesListInput>
  }

  export type UserUpdateWithoutCoyCirclesListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    userCircleIn?: UserCirclesUpdateOneWithoutMemberListNestedInput
    companyCirle?: CompanyCirclesUpdateOneWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoyCirclesListInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
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
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
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
    address?: string | null
    addressCity?: string | null
    addressState?: string | null
    emailNotification?: boolean | null
    campaignNtification?: boolean | null
    termsConditions?: boolean | null
    company_circle?: CompanyCirclesUncheckedCreateNestedManyWithoutCompanyUserInput
  }

  export type CompanyUserCreateOrConnectWithoutMembersListInput = {
    where: CompanyUserWhereUniqueInput
    create: XOR<CompanyUserCreateWithoutMembersListInput, CompanyUserUncheckedCreateWithoutMembersListInput>
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
  }

  export type UserCirclesCreateOrConnectWithoutMemberListInput = {
    where: UserCirclesWhereUniqueInput
    create: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput>
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
    companyUser?: CompanyUserCreateNestedOneWithoutCompany_circleInput
    user?: UserCreateNestedOneWithoutCoyCirclesListInput
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
    userAttachedID?: string | null
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
    memberList?: UserCreateNestedManyWithoutUserCircleInInput
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
    memberList?: UserUncheckedCreateNestedManyWithoutUserCircleInInput
  }

  export type UserCirclesCreateOrConnectWithoutUserInput = {
    where: UserCirclesWhereUniqueInput
    create: XOR<UserCirclesCreateWithoutUserInput, UserCirclesUncheckedCreateWithoutUserInput>
  }

  export type UserCirclesCreateManyUserInputEnvelope = {
    data: UserCirclesCreateManyUserInput | UserCirclesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCirclesCreateWithoutUserInput = {
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
    companyUser?: CompanyUserCreateNestedOneWithoutCompany_circleInput
    memberList?: UserCreateNestedManyWithoutCompanyCirleInput
  }

  export type CompanyCirclesUncheckedCreateWithoutUserInput = {
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
    memberList?: UserUncheckedCreateNestedManyWithoutCompanyCirleInput
  }

  export type CompanyCirclesCreateOrConnectWithoutUserInput = {
    where: CompanyCirclesWhereUniqueInput
    create: XOR<CompanyCirclesCreateWithoutUserInput, CompanyCirclesUncheckedCreateWithoutUserInput>
  }

  export type CompanyCirclesCreateManyUserInputEnvelope = {
    data: CompanyCirclesCreateManyUserInput | CompanyCirclesCreateManyUserInput[]
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    emailNotification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campaignNtification?: NullableBoolFieldUpdateOperationsInput | boolean | null
    termsConditions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    company_circle?: CompanyCirclesUncheckedUpdateManyWithoutCompanyUserNestedInput
  }

  export type UserCirclesUpsertWithoutMemberListInput = {
    update: XOR<UserCirclesUpdateWithoutMemberListInput, UserCirclesUncheckedUpdateWithoutMemberListInput>
    create: XOR<UserCirclesCreateWithoutMemberListInput, UserCirclesUncheckedCreateWithoutMemberListInput>
    where?: UserCirclesWhereInput
  }

  export type UserCirclesUpdateToOneWithWhereWithoutMemberListInput = {
    where?: UserCirclesWhereInput
    data: XOR<UserCirclesUpdateWithoutMemberListInput, UserCirclesUncheckedUpdateWithoutMemberListInput>
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
  }

  export type CompanyCirclesUpsertWithoutMemberListInput = {
    update: XOR<CompanyCirclesUpdateWithoutMemberListInput, CompanyCirclesUncheckedUpdateWithoutMemberListInput>
    create: XOR<CompanyCirclesCreateWithoutMemberListInput, CompanyCirclesUncheckedCreateWithoutMemberListInput>
    where?: CompanyCirclesWhereInput
  }

  export type CompanyCirclesUpdateToOneWithWhereWithoutMemberListInput = {
    where?: CompanyCirclesWhereInput
    data: XOR<CompanyCirclesUpdateWithoutMemberListInput, CompanyCirclesUncheckedUpdateWithoutMemberListInput>
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
    companyUser?: CompanyUserUpdateOneWithoutCompany_circleNestedInput
    user?: UserUpdateOneWithoutCoyCirclesListNestedInput
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
    userAttachedID?: NullableStringFieldUpdateOperationsInput | string | null
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
  }

  export type CompanyCirclesUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyCirclesWhereUniqueInput
    update: XOR<CompanyCirclesUpdateWithoutUserInput, CompanyCirclesUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyCirclesCreateWithoutUserInput, CompanyCirclesUncheckedCreateWithoutUserInput>
  }

  export type CompanyCirclesUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyCirclesWhereUniqueInput
    data: XOR<CompanyCirclesUpdateWithoutUserInput, CompanyCirclesUncheckedUpdateWithoutUserInput>
  }

  export type CompanyCirclesUpdateManyWithWhereWithoutUserInput = {
    where: CompanyCirclesScalarWhereInput
    data: XOR<CompanyCirclesUpdateManyMutationInput, CompanyCirclesUncheckedUpdateManyWithoutUserInput>
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
    maritalStatus?: string | null
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
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    userCircleIn?: UserCirclesCreateNestedOneWithoutMemberListInput
    companyCirle?: CompanyCirclesCreateNestedOneWithoutMemberListInput
    coyCirclesList?: CompanyCirclesCreateNestedManyWithoutUserInput
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
    maritalStatus?: string | null
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
    userCircleId?: string | null
    coyCircleAttachedTo: string
    coyCirclesList?: CompanyCirclesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCirclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCirclesInput, UserUncheckedCreateWithoutUserCirclesInput>
  }

  export type UserCreateWithoutUserCircleInInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    companyUser?: CompanyUserCreateNestedOneWithoutMembersListInput
    companyCirle?: CompanyCirclesCreateNestedOneWithoutMemberListInput
    userCircles?: UserCirclesCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserCircleInInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    coyCircleAttachedTo: string
    userCircles?: UserCirclesUncheckedCreateNestedManyWithoutUserInput
    coyCirclesList?: CompanyCirclesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserCircleInInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCircleInInput, UserUncheckedCreateWithoutUserCircleInInput>
  }

  export type UserCreateManyUserCircleInInputEnvelope = {
    data: UserCreateManyUserCircleInInput | UserCreateManyUserCircleInInput[]
    skipDuplicates?: boolean
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    userCircleIn?: UserCirclesUpdateOneWithoutMemberListNestedInput
    companyCirle?: CompanyCirclesUpdateOneWithoutMemberListNestedInput
    coyCirclesList?: CompanyCirclesUpdateManyWithoutUserNestedInput
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
    coyCirclesList?: CompanyCirclesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutUserCircleInInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserCircleInInput, UserUncheckedUpdateWithoutUserCircleInInput>
    create: XOR<UserCreateWithoutUserCircleInInput, UserUncheckedCreateWithoutUserCircleInInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserCircleInInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserCircleInInput, UserUncheckedUpdateWithoutUserCircleInInput>
  }

  export type UserUpdateManyWithWhereWithoutUserCircleInInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserCircleInInput>
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
    maritalStatus?: string | null
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
    userCircleId?: string | null
    coyCircleAttachedTo: string
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
    userAttachedID?: string | null
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleIn?: UserCirclesUpdateOneWithoutMemberListNestedInput
    companyCirle?: CompanyCirclesUpdateOneWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUpdateManyWithoutUserNestedInput
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUncheckedUpdateManyWithoutUserNestedInput
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
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
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
    memberList?: UserUpdateManyWithoutCompanyCirleNestedInput
    user?: UserUpdateOneWithoutCoyCirclesListNestedInput
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
    userAttachedID?: NullableStringFieldUpdateOperationsInput | string | null
    memberList?: UserUncheckedUpdateManyWithoutCompanyCirleNestedInput
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
    userAttachedID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyCompanyCirleInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    userCircleId?: string | null
  }

  export type UserUpdateWithoutCompanyCirleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    userCircleIn?: UserCirclesUpdateOneWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyCirleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyCirleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    userCircleId?: NullableStringFieldUpdateOperationsInput | string | null
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
  }

  export type CompanyCirclesCreateManyUserInput = {
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
    memberList?: UserUpdateManyWithoutUserCircleInNestedInput
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
    memberList?: UserUncheckedUpdateManyWithoutUserCircleInNestedInput
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
  }

  export type CompanyCirclesUpdateWithoutUserInput = {
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
    companyUser?: CompanyUserUpdateOneWithoutCompany_circleNestedInput
    memberList?: UserUpdateManyWithoutCompanyCirleNestedInput
  }

  export type CompanyCirclesUncheckedUpdateWithoutUserInput = {
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
    memberList?: UserUncheckedUpdateManyWithoutCompanyCirleNestedInput
  }

  export type CompanyCirclesUncheckedUpdateManyWithoutUserInput = {
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
  }

  export type UserCreateManyUserCircleInInput = {
    id?: string
    email: string
    created_at?: Date | string | null
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    ageRange?: string | null
    ethnicity?: string | null
    gender?: $Enums.UserGender | null
    maritalStatus?: string | null
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
    coyCircleAttachedTo: string
  }

  export type UserUpdateWithoutUserCircleInInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    companyUser?: CompanyUserUpdateOneWithoutMembersListNestedInput
    companyCirle?: CompanyCirclesUpdateOneWithoutMemberListNestedInput
    userCircles?: UserCirclesUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCircleInInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
    userCircles?: UserCirclesUncheckedUpdateManyWithoutUserNestedInput
    coyCirclesList?: CompanyCirclesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserCircleInInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ageRange?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
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
    coyCircleAttachedTo?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
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