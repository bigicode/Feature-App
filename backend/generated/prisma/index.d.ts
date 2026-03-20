
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
 * Model FeatureRequest
 * 
 */
export type FeatureRequest = $Result.DefaultSelection<Prisma.$FeatureRequestPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FeaturePriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type FeaturePriority = (typeof FeaturePriority)[keyof typeof FeaturePriority]


export const ReviewStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]


export const DeliveryStatus: {
  BACKLOG: 'BACKLOG',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]

}

export type FeaturePriority = $Enums.FeaturePriority

export const FeaturePriority: typeof $Enums.FeaturePriority

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FeatureRequests
 * const featureRequests = await prisma.featureRequest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more FeatureRequests
   * const featureRequests = await prisma.featureRequest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.featureRequest`: Exposes CRUD operations for the **FeatureRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureRequests
    * const featureRequests = await prisma.featureRequest.findMany()
    * ```
    */
  get featureRequest(): Prisma.FeatureRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    FeatureRequest: 'FeatureRequest',
    AdminUser: 'AdminUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "featureRequest" | "adminUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FeatureRequest: {
        payload: Prisma.$FeatureRequestPayload<ExtArgs>
        fields: Prisma.FeatureRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload>
          }
          findFirst: {
            args: Prisma.FeatureRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload>
          }
          findMany: {
            args: Prisma.FeatureRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload>[]
          }
          create: {
            args: Prisma.FeatureRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload>
          }
          createMany: {
            args: Prisma.FeatureRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeatureRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload>
          }
          update: {
            args: Prisma.FeatureRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload>
          }
          deleteMany: {
            args: Prisma.FeatureRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureRequestPayload>
          }
          aggregate: {
            args: Prisma.FeatureRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureRequest>
          }
          groupBy: {
            args: Prisma.FeatureRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureRequestCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureRequestCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    featureRequest?: FeatureRequestOmit
    adminUser?: AdminUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model FeatureRequest
   */

  export type AggregateFeatureRequest = {
    _count: FeatureRequestCountAggregateOutputType | null
    _avg: FeatureRequestAvgAggregateOutputType | null
    _sum: FeatureRequestSumAggregateOutputType | null
    _min: FeatureRequestMinAggregateOutputType | null
    _max: FeatureRequestMaxAggregateOutputType | null
  }

  export type FeatureRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type FeatureRequestSumAggregateOutputType = {
    id: number | null
  }

  export type FeatureRequestMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: $Enums.FeaturePriority | null
    reviewStatus: $Enums.ReviewStatus | null
    deliveryStatus: $Enums.DeliveryStatus | null
    submitterName: string | null
    submitterEmail: string | null
    adminNotes: string | null
    declinedReason: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureRequestMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: $Enums.FeaturePriority | null
    reviewStatus: $Enums.ReviewStatus | null
    deliveryStatus: $Enums.DeliveryStatus | null
    submitterName: string | null
    submitterEmail: string | null
    adminNotes: string | null
    declinedReason: string | null
    reviewedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureRequestCountAggregateOutputType = {
    id: number
    title: number
    description: number
    priority: number
    reviewStatus: number
    deliveryStatus: number
    submitterName: number
    submitterEmail: number
    adminNotes: number
    declinedReason: number
    reviewedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureRequestAvgAggregateInputType = {
    id?: true
  }

  export type FeatureRequestSumAggregateInputType = {
    id?: true
  }

  export type FeatureRequestMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    reviewStatus?: true
    deliveryStatus?: true
    submitterName?: true
    submitterEmail?: true
    adminNotes?: true
    declinedReason?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureRequestMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    reviewStatus?: true
    deliveryStatus?: true
    submitterName?: true
    submitterEmail?: true
    adminNotes?: true
    declinedReason?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureRequestCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    reviewStatus?: true
    deliveryStatus?: true
    submitterName?: true
    submitterEmail?: true
    adminNotes?: true
    declinedReason?: true
    reviewedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureRequest to aggregate.
     */
    where?: FeatureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureRequests to fetch.
     */
    orderBy?: FeatureRequestOrderByWithRelationInput | FeatureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureRequests
    **/
    _count?: true | FeatureRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureRequestMaxAggregateInputType
  }

  export type GetFeatureRequestAggregateType<T extends FeatureRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureRequest[P]>
      : GetScalarType<T[P], AggregateFeatureRequest[P]>
  }




  export type FeatureRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureRequestWhereInput
    orderBy?: FeatureRequestOrderByWithAggregationInput | FeatureRequestOrderByWithAggregationInput[]
    by: FeatureRequestScalarFieldEnum[] | FeatureRequestScalarFieldEnum
    having?: FeatureRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureRequestCountAggregateInputType | true
    _avg?: FeatureRequestAvgAggregateInputType
    _sum?: FeatureRequestSumAggregateInputType
    _min?: FeatureRequestMinAggregateInputType
    _max?: FeatureRequestMaxAggregateInputType
  }

  export type FeatureRequestGroupByOutputType = {
    id: number
    title: string
    description: string
    priority: $Enums.FeaturePriority
    reviewStatus: $Enums.ReviewStatus
    deliveryStatus: $Enums.DeliveryStatus
    submitterName: string | null
    submitterEmail: string | null
    adminNotes: string | null
    declinedReason: string | null
    reviewedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FeatureRequestCountAggregateOutputType | null
    _avg: FeatureRequestAvgAggregateOutputType | null
    _sum: FeatureRequestSumAggregateOutputType | null
    _min: FeatureRequestMinAggregateOutputType | null
    _max: FeatureRequestMaxAggregateOutputType | null
  }

  type GetFeatureRequestGroupByPayload<T extends FeatureRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureRequestGroupByOutputType[P]>
        }
      >
    >


  export type FeatureRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    reviewStatus?: boolean
    deliveryStatus?: boolean
    submitterName?: boolean
    submitterEmail?: boolean
    adminNotes?: boolean
    declinedReason?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["featureRequest"]>



  export type FeatureRequestSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    reviewStatus?: boolean
    deliveryStatus?: boolean
    submitterName?: boolean
    submitterEmail?: boolean
    adminNotes?: boolean
    declinedReason?: boolean
    reviewedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "priority" | "reviewStatus" | "deliveryStatus" | "submitterName" | "submitterEmail" | "adminNotes" | "declinedReason" | "reviewedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["featureRequest"]>

  export type $FeatureRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      priority: $Enums.FeaturePriority
      reviewStatus: $Enums.ReviewStatus
      deliveryStatus: $Enums.DeliveryStatus
      submitterName: string | null
      submitterEmail: string | null
      adminNotes: string | null
      declinedReason: string | null
      reviewedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featureRequest"]>
    composites: {}
  }

  type FeatureRequestGetPayload<S extends boolean | null | undefined | FeatureRequestDefaultArgs> = $Result.GetResult<Prisma.$FeatureRequestPayload, S>

  type FeatureRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureRequestCountAggregateInputType | true
    }

  export interface FeatureRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureRequest'], meta: { name: 'FeatureRequest' } }
    /**
     * Find zero or one FeatureRequest that matches the filter.
     * @param {FeatureRequestFindUniqueArgs} args - Arguments to find a FeatureRequest
     * @example
     * // Get one FeatureRequest
     * const featureRequest = await prisma.featureRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureRequestFindUniqueArgs>(args: SelectSubset<T, FeatureRequestFindUniqueArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeatureRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureRequestFindUniqueOrThrowArgs} args - Arguments to find a FeatureRequest
     * @example
     * // Get one FeatureRequest
     * const featureRequest = await prisma.featureRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureRequestFindFirstArgs} args - Arguments to find a FeatureRequest
     * @example
     * // Get one FeatureRequest
     * const featureRequest = await prisma.featureRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureRequestFindFirstArgs>(args?: SelectSubset<T, FeatureRequestFindFirstArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureRequestFindFirstOrThrowArgs} args - Arguments to find a FeatureRequest
     * @example
     * // Get one FeatureRequest
     * const featureRequest = await prisma.featureRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeatureRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureRequests
     * const featureRequests = await prisma.featureRequest.findMany()
     * 
     * // Get first 10 FeatureRequests
     * const featureRequests = await prisma.featureRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureRequestWithIdOnly = await prisma.featureRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureRequestFindManyArgs>(args?: SelectSubset<T, FeatureRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeatureRequest.
     * @param {FeatureRequestCreateArgs} args - Arguments to create a FeatureRequest.
     * @example
     * // Create one FeatureRequest
     * const FeatureRequest = await prisma.featureRequest.create({
     *   data: {
     *     // ... data to create a FeatureRequest
     *   }
     * })
     * 
     */
    create<T extends FeatureRequestCreateArgs>(args: SelectSubset<T, FeatureRequestCreateArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeatureRequests.
     * @param {FeatureRequestCreateManyArgs} args - Arguments to create many FeatureRequests.
     * @example
     * // Create many FeatureRequests
     * const featureRequest = await prisma.featureRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureRequestCreateManyArgs>(args?: SelectSubset<T, FeatureRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeatureRequest.
     * @param {FeatureRequestDeleteArgs} args - Arguments to delete one FeatureRequest.
     * @example
     * // Delete one FeatureRequest
     * const FeatureRequest = await prisma.featureRequest.delete({
     *   where: {
     *     // ... filter to delete one FeatureRequest
     *   }
     * })
     * 
     */
    delete<T extends FeatureRequestDeleteArgs>(args: SelectSubset<T, FeatureRequestDeleteArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeatureRequest.
     * @param {FeatureRequestUpdateArgs} args - Arguments to update one FeatureRequest.
     * @example
     * // Update one FeatureRequest
     * const featureRequest = await prisma.featureRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureRequestUpdateArgs>(args: SelectSubset<T, FeatureRequestUpdateArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeatureRequests.
     * @param {FeatureRequestDeleteManyArgs} args - Arguments to filter FeatureRequests to delete.
     * @example
     * // Delete a few FeatureRequests
     * const { count } = await prisma.featureRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureRequestDeleteManyArgs>(args?: SelectSubset<T, FeatureRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureRequests
     * const featureRequest = await prisma.featureRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureRequestUpdateManyArgs>(args: SelectSubset<T, FeatureRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeatureRequest.
     * @param {FeatureRequestUpsertArgs} args - Arguments to update or create a FeatureRequest.
     * @example
     * // Update or create a FeatureRequest
     * const featureRequest = await prisma.featureRequest.upsert({
     *   create: {
     *     // ... data to create a FeatureRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureRequest we want to update
     *   }
     * })
     */
    upsert<T extends FeatureRequestUpsertArgs>(args: SelectSubset<T, FeatureRequestUpsertArgs<ExtArgs>>): Prisma__FeatureRequestClient<$Result.GetResult<Prisma.$FeatureRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeatureRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureRequestCountArgs} args - Arguments to filter FeatureRequests to count.
     * @example
     * // Count the number of FeatureRequests
     * const count = await prisma.featureRequest.count({
     *   where: {
     *     // ... the filter for the FeatureRequests we want to count
     *   }
     * })
    **/
    count<T extends FeatureRequestCountArgs>(
      args?: Subset<T, FeatureRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureRequestAggregateArgs>(args: Subset<T, FeatureRequestAggregateArgs>): Prisma.PrismaPromise<GetFeatureRequestAggregateType<T>>

    /**
     * Group by FeatureRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureRequestGroupByArgs} args - Group by arguments.
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
      T extends FeatureRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureRequestGroupByArgs['orderBy'] }
        : { orderBy?: FeatureRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureRequest model
   */
  readonly fields: FeatureRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeatureRequest model
   */
  interface FeatureRequestFieldRefs {
    readonly id: FieldRef<"FeatureRequest", 'Int'>
    readonly title: FieldRef<"FeatureRequest", 'String'>
    readonly description: FieldRef<"FeatureRequest", 'String'>
    readonly priority: FieldRef<"FeatureRequest", 'FeaturePriority'>
    readonly reviewStatus: FieldRef<"FeatureRequest", 'ReviewStatus'>
    readonly deliveryStatus: FieldRef<"FeatureRequest", 'DeliveryStatus'>
    readonly submitterName: FieldRef<"FeatureRequest", 'String'>
    readonly submitterEmail: FieldRef<"FeatureRequest", 'String'>
    readonly adminNotes: FieldRef<"FeatureRequest", 'String'>
    readonly declinedReason: FieldRef<"FeatureRequest", 'String'>
    readonly reviewedAt: FieldRef<"FeatureRequest", 'DateTime'>
    readonly createdAt: FieldRef<"FeatureRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureRequest findUnique
   */
  export type FeatureRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * Filter, which FeatureRequest to fetch.
     */
    where: FeatureRequestWhereUniqueInput
  }

  /**
   * FeatureRequest findUniqueOrThrow
   */
  export type FeatureRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * Filter, which FeatureRequest to fetch.
     */
    where: FeatureRequestWhereUniqueInput
  }

  /**
   * FeatureRequest findFirst
   */
  export type FeatureRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * Filter, which FeatureRequest to fetch.
     */
    where?: FeatureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureRequests to fetch.
     */
    orderBy?: FeatureRequestOrderByWithRelationInput | FeatureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureRequests.
     */
    cursor?: FeatureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureRequests.
     */
    distinct?: FeatureRequestScalarFieldEnum | FeatureRequestScalarFieldEnum[]
  }

  /**
   * FeatureRequest findFirstOrThrow
   */
  export type FeatureRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * Filter, which FeatureRequest to fetch.
     */
    where?: FeatureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureRequests to fetch.
     */
    orderBy?: FeatureRequestOrderByWithRelationInput | FeatureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureRequests.
     */
    cursor?: FeatureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureRequests.
     */
    distinct?: FeatureRequestScalarFieldEnum | FeatureRequestScalarFieldEnum[]
  }

  /**
   * FeatureRequest findMany
   */
  export type FeatureRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * Filter, which FeatureRequests to fetch.
     */
    where?: FeatureRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureRequests to fetch.
     */
    orderBy?: FeatureRequestOrderByWithRelationInput | FeatureRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureRequests.
     */
    cursor?: FeatureRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureRequests.
     */
    skip?: number
    distinct?: FeatureRequestScalarFieldEnum | FeatureRequestScalarFieldEnum[]
  }

  /**
   * FeatureRequest create
   */
  export type FeatureRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a FeatureRequest.
     */
    data: XOR<FeatureRequestCreateInput, FeatureRequestUncheckedCreateInput>
  }

  /**
   * FeatureRequest createMany
   */
  export type FeatureRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureRequests.
     */
    data: FeatureRequestCreateManyInput | FeatureRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureRequest update
   */
  export type FeatureRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a FeatureRequest.
     */
    data: XOR<FeatureRequestUpdateInput, FeatureRequestUncheckedUpdateInput>
    /**
     * Choose, which FeatureRequest to update.
     */
    where: FeatureRequestWhereUniqueInput
  }

  /**
   * FeatureRequest updateMany
   */
  export type FeatureRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureRequests.
     */
    data: XOR<FeatureRequestUpdateManyMutationInput, FeatureRequestUncheckedUpdateManyInput>
    /**
     * Filter which FeatureRequests to update
     */
    where?: FeatureRequestWhereInput
    /**
     * Limit how many FeatureRequests to update.
     */
    limit?: number
  }

  /**
   * FeatureRequest upsert
   */
  export type FeatureRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the FeatureRequest to update in case it exists.
     */
    where: FeatureRequestWhereUniqueInput
    /**
     * In case the FeatureRequest found by the `where` argument doesn't exist, create a new FeatureRequest with this data.
     */
    create: XOR<FeatureRequestCreateInput, FeatureRequestUncheckedCreateInput>
    /**
     * In case the FeatureRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureRequestUpdateInput, FeatureRequestUncheckedUpdateInput>
  }

  /**
   * FeatureRequest delete
   */
  export type FeatureRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
    /**
     * Filter which FeatureRequest to delete.
     */
    where: FeatureRequestWhereUniqueInput
  }

  /**
   * FeatureRequest deleteMany
   */
  export type FeatureRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureRequests to delete
     */
    where?: FeatureRequestWhereInput
    /**
     * Limit how many FeatureRequests to delete.
     */
    limit?: number
  }

  /**
   * FeatureRequest without action
   */
  export type FeatureRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureRequest
     */
    select?: FeatureRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureRequest
     */
    omit?: FeatureRequestOmit<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>



  export type AdminUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
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


  export const FeatureRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    priority: 'priority',
    reviewStatus: 'reviewStatus',
    deliveryStatus: 'deliveryStatus',
    submitterName: 'submitterName',
    submitterEmail: 'submitterEmail',
    adminNotes: 'adminNotes',
    declinedReason: 'declinedReason',
    reviewedAt: 'reviewedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureRequestScalarFieldEnum = (typeof FeatureRequestScalarFieldEnum)[keyof typeof FeatureRequestScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const FeatureRequestOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    submitterName: 'submitterName',
    submitterEmail: 'submitterEmail',
    adminNotes: 'adminNotes',
    declinedReason: 'declinedReason'
  };

  export type FeatureRequestOrderByRelevanceFieldEnum = (typeof FeatureRequestOrderByRelevanceFieldEnum)[keyof typeof FeatureRequestOrderByRelevanceFieldEnum]


  export const AdminUserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type AdminUserOrderByRelevanceFieldEnum = (typeof AdminUserOrderByRelevanceFieldEnum)[keyof typeof AdminUserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'FeaturePriority'
   */
  export type EnumFeaturePriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeaturePriority'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FeatureRequestWhereInput = {
    AND?: FeatureRequestWhereInput | FeatureRequestWhereInput[]
    OR?: FeatureRequestWhereInput[]
    NOT?: FeatureRequestWhereInput | FeatureRequestWhereInput[]
    id?: IntFilter<"FeatureRequest"> | number
    title?: StringFilter<"FeatureRequest"> | string
    description?: StringFilter<"FeatureRequest"> | string
    priority?: EnumFeaturePriorityFilter<"FeatureRequest"> | $Enums.FeaturePriority
    reviewStatus?: EnumReviewStatusFilter<"FeatureRequest"> | $Enums.ReviewStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"FeatureRequest"> | $Enums.DeliveryStatus
    submitterName?: StringNullableFilter<"FeatureRequest"> | string | null
    submitterEmail?: StringNullableFilter<"FeatureRequest"> | string | null
    adminNotes?: StringNullableFilter<"FeatureRequest"> | string | null
    declinedReason?: StringNullableFilter<"FeatureRequest"> | string | null
    reviewedAt?: DateTimeNullableFilter<"FeatureRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"FeatureRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureRequest"> | Date | string
  }

  export type FeatureRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    reviewStatus?: SortOrder
    deliveryStatus?: SortOrder
    submitterName?: SortOrderInput | SortOrder
    submitterEmail?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    declinedReason?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FeatureRequestOrderByRelevanceInput
  }

  export type FeatureRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeatureRequestWhereInput | FeatureRequestWhereInput[]
    OR?: FeatureRequestWhereInput[]
    NOT?: FeatureRequestWhereInput | FeatureRequestWhereInput[]
    title?: StringFilter<"FeatureRequest"> | string
    description?: StringFilter<"FeatureRequest"> | string
    priority?: EnumFeaturePriorityFilter<"FeatureRequest"> | $Enums.FeaturePriority
    reviewStatus?: EnumReviewStatusFilter<"FeatureRequest"> | $Enums.ReviewStatus
    deliveryStatus?: EnumDeliveryStatusFilter<"FeatureRequest"> | $Enums.DeliveryStatus
    submitterName?: StringNullableFilter<"FeatureRequest"> | string | null
    submitterEmail?: StringNullableFilter<"FeatureRequest"> | string | null
    adminNotes?: StringNullableFilter<"FeatureRequest"> | string | null
    declinedReason?: StringNullableFilter<"FeatureRequest"> | string | null
    reviewedAt?: DateTimeNullableFilter<"FeatureRequest"> | Date | string | null
    createdAt?: DateTimeFilter<"FeatureRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureRequest"> | Date | string
  }, "id">

  export type FeatureRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    reviewStatus?: SortOrder
    deliveryStatus?: SortOrder
    submitterName?: SortOrderInput | SortOrder
    submitterEmail?: SortOrderInput | SortOrder
    adminNotes?: SortOrderInput | SortOrder
    declinedReason?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureRequestCountOrderByAggregateInput
    _avg?: FeatureRequestAvgOrderByAggregateInput
    _max?: FeatureRequestMaxOrderByAggregateInput
    _min?: FeatureRequestMinOrderByAggregateInput
    _sum?: FeatureRequestSumOrderByAggregateInput
  }

  export type FeatureRequestScalarWhereWithAggregatesInput = {
    AND?: FeatureRequestScalarWhereWithAggregatesInput | FeatureRequestScalarWhereWithAggregatesInput[]
    OR?: FeatureRequestScalarWhereWithAggregatesInput[]
    NOT?: FeatureRequestScalarWhereWithAggregatesInput | FeatureRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeatureRequest"> | number
    title?: StringWithAggregatesFilter<"FeatureRequest"> | string
    description?: StringWithAggregatesFilter<"FeatureRequest"> | string
    priority?: EnumFeaturePriorityWithAggregatesFilter<"FeatureRequest"> | $Enums.FeaturePriority
    reviewStatus?: EnumReviewStatusWithAggregatesFilter<"FeatureRequest"> | $Enums.ReviewStatus
    deliveryStatus?: EnumDeliveryStatusWithAggregatesFilter<"FeatureRequest"> | $Enums.DeliveryStatus
    submitterName?: StringNullableWithAggregatesFilter<"FeatureRequest"> | string | null
    submitterEmail?: StringNullableWithAggregatesFilter<"FeatureRequest"> | string | null
    adminNotes?: StringNullableWithAggregatesFilter<"FeatureRequest"> | string | null
    declinedReason?: StringNullableWithAggregatesFilter<"FeatureRequest"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"FeatureRequest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FeatureRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureRequest"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    name?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminUserOrderByRelevanceInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    name?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type FeatureRequestCreateInput = {
    title: string
    description: string
    priority?: $Enums.FeaturePriority
    reviewStatus?: $Enums.ReviewStatus
    deliveryStatus?: $Enums.DeliveryStatus
    submitterName?: string | null
    submitterEmail?: string | null
    adminNotes?: string | null
    declinedReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureRequestUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    priority?: $Enums.FeaturePriority
    reviewStatus?: $Enums.ReviewStatus
    deliveryStatus?: $Enums.DeliveryStatus
    submitterName?: string | null
    submitterEmail?: string | null
    adminNotes?: string | null
    declinedReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureRequestUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumFeaturePriorityFieldUpdateOperationsInput | $Enums.FeaturePriority
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    declinedReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumFeaturePriorityFieldUpdateOperationsInput | $Enums.FeaturePriority
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    declinedReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureRequestCreateManyInput = {
    id?: number
    title: string
    description: string
    priority?: $Enums.FeaturePriority
    reviewStatus?: $Enums.ReviewStatus
    deliveryStatus?: $Enums.DeliveryStatus
    submitterName?: string | null
    submitterEmail?: string | null
    adminNotes?: string | null
    declinedReason?: string | null
    reviewedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureRequestUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumFeaturePriorityFieldUpdateOperationsInput | $Enums.FeaturePriority
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    declinedReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumFeaturePriorityFieldUpdateOperationsInput | $Enums.FeaturePriority
    reviewStatus?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    deliveryStatus?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    submitterName?: NullableStringFieldUpdateOperationsInput | string | null
    submitterEmail?: NullableStringFieldUpdateOperationsInput | string | null
    adminNotes?: NullableStringFieldUpdateOperationsInput | string | null
    declinedReason?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumFeaturePriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturePriority | EnumFeaturePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.FeaturePriority[]
    notIn?: $Enums.FeaturePriority[]
    not?: NestedEnumFeaturePriorityFilter<$PrismaModel> | $Enums.FeaturePriority
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[]
    notIn?: $Enums.DeliveryStatus[]
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeatureRequestOrderByRelevanceInput = {
    fields: FeatureRequestOrderByRelevanceFieldEnum | FeatureRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeatureRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    reviewStatus?: SortOrder
    deliveryStatus?: SortOrder
    submitterName?: SortOrder
    submitterEmail?: SortOrder
    adminNotes?: SortOrder
    declinedReason?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeatureRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    reviewStatus?: SortOrder
    deliveryStatus?: SortOrder
    submitterName?: SortOrder
    submitterEmail?: SortOrder
    adminNotes?: SortOrder
    declinedReason?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    reviewStatus?: SortOrder
    deliveryStatus?: SortOrder
    submitterName?: SortOrder
    submitterEmail?: SortOrder
    adminNotes?: SortOrder
    declinedReason?: SortOrder
    reviewedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumFeaturePriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturePriority | EnumFeaturePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.FeaturePriority[]
    notIn?: $Enums.FeaturePriority[]
    not?: NestedEnumFeaturePriorityWithAggregatesFilter<$PrismaModel> | $Enums.FeaturePriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeaturePriorityFilter<$PrismaModel>
    _max?: NestedEnumFeaturePriorityFilter<$PrismaModel>
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[]
    notIn?: $Enums.DeliveryStatus[]
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdminUserOrderByRelevanceInput = {
    fields: AdminUserOrderByRelevanceFieldEnum | AdminUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumFeaturePriorityFieldUpdateOperationsInput = {
    set?: $Enums.FeaturePriority
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumFeaturePriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturePriority | EnumFeaturePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.FeaturePriority[]
    notIn?: $Enums.FeaturePriority[]
    not?: NestedEnumFeaturePriorityFilter<$PrismaModel> | $Enums.FeaturePriority
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[]
    notIn?: $Enums.DeliveryStatus[]
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumFeaturePriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeaturePriority | EnumFeaturePriorityFieldRefInput<$PrismaModel>
    in?: $Enums.FeaturePriority[]
    notIn?: $Enums.FeaturePriority[]
    not?: NestedEnumFeaturePriorityWithAggregatesFilter<$PrismaModel> | $Enums.FeaturePriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeaturePriorityFilter<$PrismaModel>
    _max?: NestedEnumFeaturePriorityFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[]
    notIn?: $Enums.ReviewStatus[]
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[]
    notIn?: $Enums.DeliveryStatus[]
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



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