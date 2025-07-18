
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
 * Model Recommend
 * 
 */
export type Recommend = $Result.DefaultSelection<Prisma.$RecommendPayload>
/**
 * Model AptitudeTest
 * 
 */
export type AptitudeTest = $Result.DefaultSelection<Prisma.$AptitudeTestPayload>
/**
 * Model Consult
 * 
 */
export type Consult = $Result.DefaultSelection<Prisma.$ConsultPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Recommends
 * const recommends = await prisma.recommend.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Recommends
   * const recommends = await prisma.recommend.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.recommend`: Exposes CRUD operations for the **Recommend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommends
    * const recommends = await prisma.recommend.findMany()
    * ```
    */
  get recommend(): Prisma.RecommendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aptitudeTest`: Exposes CRUD operations for the **AptitudeTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AptitudeTests
    * const aptitudeTests = await prisma.aptitudeTest.findMany()
    * ```
    */
  get aptitudeTest(): Prisma.AptitudeTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consult`: Exposes CRUD operations for the **Consult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consults
    * const consults = await prisma.consult.findMany()
    * ```
    */
  get consult(): Prisma.ConsultDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Recommend: 'Recommend',
    AptitudeTest: 'AptitudeTest',
    Consult: 'Consult'
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
      modelProps: "recommend" | "aptitudeTest" | "consult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Recommend: {
        payload: Prisma.$RecommendPayload<ExtArgs>
        fields: Prisma.RecommendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>
          }
          findFirst: {
            args: Prisma.RecommendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>
          }
          findMany: {
            args: Prisma.RecommendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>[]
          }
          create: {
            args: Prisma.RecommendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>
          }
          createMany: {
            args: Prisma.RecommendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>[]
          }
          delete: {
            args: Prisma.RecommendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>
          }
          update: {
            args: Prisma.RecommendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>
          }
          deleteMany: {
            args: Prisma.RecommendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>[]
          }
          upsert: {
            args: Prisma.RecommendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendPayload>
          }
          aggregate: {
            args: Prisma.RecommendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommend>
          }
          groupBy: {
            args: Prisma.RecommendGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendCountAggregateOutputType> | number
          }
        }
      }
      AptitudeTest: {
        payload: Prisma.$AptitudeTestPayload<ExtArgs>
        fields: Prisma.AptitudeTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AptitudeTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AptitudeTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          findFirst: {
            args: Prisma.AptitudeTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AptitudeTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          findMany: {
            args: Prisma.AptitudeTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>[]
          }
          create: {
            args: Prisma.AptitudeTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          createMany: {
            args: Prisma.AptitudeTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AptitudeTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>[]
          }
          delete: {
            args: Prisma.AptitudeTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          update: {
            args: Prisma.AptitudeTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          deleteMany: {
            args: Prisma.AptitudeTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AptitudeTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AptitudeTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>[]
          }
          upsert: {
            args: Prisma.AptitudeTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AptitudeTestPayload>
          }
          aggregate: {
            args: Prisma.AptitudeTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAptitudeTest>
          }
          groupBy: {
            args: Prisma.AptitudeTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AptitudeTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AptitudeTestCountArgs<ExtArgs>
            result: $Utils.Optional<AptitudeTestCountAggregateOutputType> | number
          }
        }
      }
      Consult: {
        payload: Prisma.$ConsultPayload<ExtArgs>
        fields: Prisma.ConsultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          findFirst: {
            args: Prisma.ConsultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          findMany: {
            args: Prisma.ConsultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>[]
          }
          create: {
            args: Prisma.ConsultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          createMany: {
            args: Prisma.ConsultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>[]
          }
          delete: {
            args: Prisma.ConsultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          update: {
            args: Prisma.ConsultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          deleteMany: {
            args: Prisma.ConsultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>[]
          }
          upsert: {
            args: Prisma.ConsultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          aggregate: {
            args: Prisma.ConsultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsult>
          }
          groupBy: {
            args: Prisma.ConsultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultCountAggregateOutputType> | number
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
    recommend?: RecommendOmit
    aptitudeTest?: AptitudeTestOmit
    consult?: ConsultOmit
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
   * Models
   */

  /**
   * Model Recommend
   */

  export type AggregateRecommend = {
    _count: RecommendCountAggregateOutputType | null
    _avg: RecommendAvgAggregateOutputType | null
    _sum: RecommendSumAggregateOutputType | null
    _min: RecommendMinAggregateOutputType | null
    _max: RecommendMaxAggregateOutputType | null
  }

  export type RecommendAvgAggregateOutputType = {
    id: number | null
  }

  export type RecommendSumAggregateOutputType = {
    id: number | null
  }

  export type RecommendMinAggregateOutputType = {
    id: number | null
    grade: string | null
    scores: string | null
    aptitude: string | null
    interest: string | null
    region: string | null
    createdAt: Date | null
  }

  export type RecommendMaxAggregateOutputType = {
    id: number | null
    grade: string | null
    scores: string | null
    aptitude: string | null
    interest: string | null
    region: string | null
    createdAt: Date | null
  }

  export type RecommendCountAggregateOutputType = {
    id: number
    grade: number
    scores: number
    aptitude: number
    interest: number
    region: number
    createdAt: number
    _all: number
  }


  export type RecommendAvgAggregateInputType = {
    id?: true
  }

  export type RecommendSumAggregateInputType = {
    id?: true
  }

  export type RecommendMinAggregateInputType = {
    id?: true
    grade?: true
    scores?: true
    aptitude?: true
    interest?: true
    region?: true
    createdAt?: true
  }

  export type RecommendMaxAggregateInputType = {
    id?: true
    grade?: true
    scores?: true
    aptitude?: true
    interest?: true
    region?: true
    createdAt?: true
  }

  export type RecommendCountAggregateInputType = {
    id?: true
    grade?: true
    scores?: true
    aptitude?: true
    interest?: true
    region?: true
    createdAt?: true
    _all?: true
  }

  export type RecommendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommend to aggregate.
     */
    where?: RecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommends to fetch.
     */
    orderBy?: RecommendOrderByWithRelationInput | RecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommends
    **/
    _count?: true | RecommendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendMaxAggregateInputType
  }

  export type GetRecommendAggregateType<T extends RecommendAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommend[P]>
      : GetScalarType<T[P], AggregateRecommend[P]>
  }




  export type RecommendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendWhereInput
    orderBy?: RecommendOrderByWithAggregationInput | RecommendOrderByWithAggregationInput[]
    by: RecommendScalarFieldEnum[] | RecommendScalarFieldEnum
    having?: RecommendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendCountAggregateInputType | true
    _avg?: RecommendAvgAggregateInputType
    _sum?: RecommendSumAggregateInputType
    _min?: RecommendMinAggregateInputType
    _max?: RecommendMaxAggregateInputType
  }

  export type RecommendGroupByOutputType = {
    id: number
    grade: string
    scores: string
    aptitude: string
    interest: string
    region: string
    createdAt: Date
    _count: RecommendCountAggregateOutputType | null
    _avg: RecommendAvgAggregateOutputType | null
    _sum: RecommendSumAggregateOutputType | null
    _min: RecommendMinAggregateOutputType | null
    _max: RecommendMaxAggregateOutputType | null
  }

  type GetRecommendGroupByPayload<T extends RecommendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendGroupByOutputType[P]>
        }
      >
    >


  export type RecommendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    scores?: boolean
    aptitude?: boolean
    interest?: boolean
    region?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recommend"]>

  export type RecommendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    scores?: boolean
    aptitude?: boolean
    interest?: boolean
    region?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recommend"]>

  export type RecommendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    scores?: boolean
    aptitude?: boolean
    interest?: boolean
    region?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["recommend"]>

  export type RecommendSelectScalar = {
    id?: boolean
    grade?: boolean
    scores?: boolean
    aptitude?: boolean
    interest?: boolean
    region?: boolean
    createdAt?: boolean
  }

  export type RecommendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grade" | "scores" | "aptitude" | "interest" | "region" | "createdAt", ExtArgs["result"]["recommend"]>

  export type $RecommendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommend"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grade: string
      scores: string
      aptitude: string
      interest: string
      region: string
      createdAt: Date
    }, ExtArgs["result"]["recommend"]>
    composites: {}
  }

  type RecommendGetPayload<S extends boolean | null | undefined | RecommendDefaultArgs> = $Result.GetResult<Prisma.$RecommendPayload, S>

  type RecommendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendCountAggregateInputType | true
    }

  export interface RecommendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommend'], meta: { name: 'Recommend' } }
    /**
     * Find zero or one Recommend that matches the filter.
     * @param {RecommendFindUniqueArgs} args - Arguments to find a Recommend
     * @example
     * // Get one Recommend
     * const recommend = await prisma.recommend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendFindUniqueArgs>(args: SelectSubset<T, RecommendFindUniqueArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendFindUniqueOrThrowArgs} args - Arguments to find a Recommend
     * @example
     * // Get one Recommend
     * const recommend = await prisma.recommend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendFindFirstArgs} args - Arguments to find a Recommend
     * @example
     * // Get one Recommend
     * const recommend = await prisma.recommend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendFindFirstArgs>(args?: SelectSubset<T, RecommendFindFirstArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendFindFirstOrThrowArgs} args - Arguments to find a Recommend
     * @example
     * // Get one Recommend
     * const recommend = await prisma.recommend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommends
     * const recommends = await prisma.recommend.findMany()
     * 
     * // Get first 10 Recommends
     * const recommends = await prisma.recommend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendWithIdOnly = await prisma.recommend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendFindManyArgs>(args?: SelectSubset<T, RecommendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommend.
     * @param {RecommendCreateArgs} args - Arguments to create a Recommend.
     * @example
     * // Create one Recommend
     * const Recommend = await prisma.recommend.create({
     *   data: {
     *     // ... data to create a Recommend
     *   }
     * })
     * 
     */
    create<T extends RecommendCreateArgs>(args: SelectSubset<T, RecommendCreateArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommends.
     * @param {RecommendCreateManyArgs} args - Arguments to create many Recommends.
     * @example
     * // Create many Recommends
     * const recommend = await prisma.recommend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendCreateManyArgs>(args?: SelectSubset<T, RecommendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommends and returns the data saved in the database.
     * @param {RecommendCreateManyAndReturnArgs} args - Arguments to create many Recommends.
     * @example
     * // Create many Recommends
     * const recommend = await prisma.recommend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommends and only return the `id`
     * const recommendWithIdOnly = await prisma.recommend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommend.
     * @param {RecommendDeleteArgs} args - Arguments to delete one Recommend.
     * @example
     * // Delete one Recommend
     * const Recommend = await prisma.recommend.delete({
     *   where: {
     *     // ... filter to delete one Recommend
     *   }
     * })
     * 
     */
    delete<T extends RecommendDeleteArgs>(args: SelectSubset<T, RecommendDeleteArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommend.
     * @param {RecommendUpdateArgs} args - Arguments to update one Recommend.
     * @example
     * // Update one Recommend
     * const recommend = await prisma.recommend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendUpdateArgs>(args: SelectSubset<T, RecommendUpdateArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommends.
     * @param {RecommendDeleteManyArgs} args - Arguments to filter Recommends to delete.
     * @example
     * // Delete a few Recommends
     * const { count } = await prisma.recommend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendDeleteManyArgs>(args?: SelectSubset<T, RecommendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommends
     * const recommend = await prisma.recommend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendUpdateManyArgs>(args: SelectSubset<T, RecommendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommends and returns the data updated in the database.
     * @param {RecommendUpdateManyAndReturnArgs} args - Arguments to update many Recommends.
     * @example
     * // Update many Recommends
     * const recommend = await prisma.recommend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommends and only return the `id`
     * const recommendWithIdOnly = await prisma.recommend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommend.
     * @param {RecommendUpsertArgs} args - Arguments to update or create a Recommend.
     * @example
     * // Update or create a Recommend
     * const recommend = await prisma.recommend.upsert({
     *   create: {
     *     // ... data to create a Recommend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommend we want to update
     *   }
     * })
     */
    upsert<T extends RecommendUpsertArgs>(args: SelectSubset<T, RecommendUpsertArgs<ExtArgs>>): Prisma__RecommendClient<$Result.GetResult<Prisma.$RecommendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendCountArgs} args - Arguments to filter Recommends to count.
     * @example
     * // Count the number of Recommends
     * const count = await prisma.recommend.count({
     *   where: {
     *     // ... the filter for the Recommends we want to count
     *   }
     * })
    **/
    count<T extends RecommendCountArgs>(
      args?: Subset<T, RecommendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendAggregateArgs>(args: Subset<T, RecommendAggregateArgs>): Prisma.PrismaPromise<GetRecommendAggregateType<T>>

    /**
     * Group by Recommend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendGroupByArgs} args - Group by arguments.
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
      T extends RecommendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendGroupByArgs['orderBy'] }
        : { orderBy?: RecommendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommend model
   */
  readonly fields: RecommendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Recommend model
   */
  interface RecommendFieldRefs {
    readonly id: FieldRef<"Recommend", 'Int'>
    readonly grade: FieldRef<"Recommend", 'String'>
    readonly scores: FieldRef<"Recommend", 'String'>
    readonly aptitude: FieldRef<"Recommend", 'String'>
    readonly interest: FieldRef<"Recommend", 'String'>
    readonly region: FieldRef<"Recommend", 'String'>
    readonly createdAt: FieldRef<"Recommend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommend findUnique
   */
  export type RecommendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * Filter, which Recommend to fetch.
     */
    where: RecommendWhereUniqueInput
  }

  /**
   * Recommend findUniqueOrThrow
   */
  export type RecommendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * Filter, which Recommend to fetch.
     */
    where: RecommendWhereUniqueInput
  }

  /**
   * Recommend findFirst
   */
  export type RecommendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * Filter, which Recommend to fetch.
     */
    where?: RecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommends to fetch.
     */
    orderBy?: RecommendOrderByWithRelationInput | RecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommends.
     */
    cursor?: RecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommends.
     */
    distinct?: RecommendScalarFieldEnum | RecommendScalarFieldEnum[]
  }

  /**
   * Recommend findFirstOrThrow
   */
  export type RecommendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * Filter, which Recommend to fetch.
     */
    where?: RecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommends to fetch.
     */
    orderBy?: RecommendOrderByWithRelationInput | RecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommends.
     */
    cursor?: RecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommends.
     */
    distinct?: RecommendScalarFieldEnum | RecommendScalarFieldEnum[]
  }

  /**
   * Recommend findMany
   */
  export type RecommendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * Filter, which Recommends to fetch.
     */
    where?: RecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommends to fetch.
     */
    orderBy?: RecommendOrderByWithRelationInput | RecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommends.
     */
    cursor?: RecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommends.
     */
    skip?: number
    distinct?: RecommendScalarFieldEnum | RecommendScalarFieldEnum[]
  }

  /**
   * Recommend create
   */
  export type RecommendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * The data needed to create a Recommend.
     */
    data: XOR<RecommendCreateInput, RecommendUncheckedCreateInput>
  }

  /**
   * Recommend createMany
   */
  export type RecommendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommends.
     */
    data: RecommendCreateManyInput | RecommendCreateManyInput[]
  }

  /**
   * Recommend createManyAndReturn
   */
  export type RecommendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * The data used to create many Recommends.
     */
    data: RecommendCreateManyInput | RecommendCreateManyInput[]
  }

  /**
   * Recommend update
   */
  export type RecommendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * The data needed to update a Recommend.
     */
    data: XOR<RecommendUpdateInput, RecommendUncheckedUpdateInput>
    /**
     * Choose, which Recommend to update.
     */
    where: RecommendWhereUniqueInput
  }

  /**
   * Recommend updateMany
   */
  export type RecommendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommends.
     */
    data: XOR<RecommendUpdateManyMutationInput, RecommendUncheckedUpdateManyInput>
    /**
     * Filter which Recommends to update
     */
    where?: RecommendWhereInput
    /**
     * Limit how many Recommends to update.
     */
    limit?: number
  }

  /**
   * Recommend updateManyAndReturn
   */
  export type RecommendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * The data used to update Recommends.
     */
    data: XOR<RecommendUpdateManyMutationInput, RecommendUncheckedUpdateManyInput>
    /**
     * Filter which Recommends to update
     */
    where?: RecommendWhereInput
    /**
     * Limit how many Recommends to update.
     */
    limit?: number
  }

  /**
   * Recommend upsert
   */
  export type RecommendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * The filter to search for the Recommend to update in case it exists.
     */
    where: RecommendWhereUniqueInput
    /**
     * In case the Recommend found by the `where` argument doesn't exist, create a new Recommend with this data.
     */
    create: XOR<RecommendCreateInput, RecommendUncheckedCreateInput>
    /**
     * In case the Recommend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendUpdateInput, RecommendUncheckedUpdateInput>
  }

  /**
   * Recommend delete
   */
  export type RecommendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
    /**
     * Filter which Recommend to delete.
     */
    where: RecommendWhereUniqueInput
  }

  /**
   * Recommend deleteMany
   */
  export type RecommendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommends to delete
     */
    where?: RecommendWhereInput
    /**
     * Limit how many Recommends to delete.
     */
    limit?: number
  }

  /**
   * Recommend without action
   */
  export type RecommendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommend
     */
    select?: RecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommend
     */
    omit?: RecommendOmit<ExtArgs> | null
  }


  /**
   * Model AptitudeTest
   */

  export type AggregateAptitudeTest = {
    _count: AptitudeTestCountAggregateOutputType | null
    _avg: AptitudeTestAvgAggregateOutputType | null
    _sum: AptitudeTestSumAggregateOutputType | null
    _min: AptitudeTestMinAggregateOutputType | null
    _max: AptitudeTestMaxAggregateOutputType | null
  }

  export type AptitudeTestAvgAggregateOutputType = {
    id: number | null
  }

  export type AptitudeTestSumAggregateOutputType = {
    id: number | null
  }

  export type AptitudeTestMinAggregateOutputType = {
    id: number | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    createdAt: Date | null
  }

  export type AptitudeTestMaxAggregateOutputType = {
    id: number | null
    q1: string | null
    q2: string | null
    q3: string | null
    q4: string | null
    q5: string | null
    createdAt: Date | null
  }

  export type AptitudeTestCountAggregateOutputType = {
    id: number
    q1: number
    q2: number
    q3: number
    q4: number
    q5: number
    createdAt: number
    _all: number
  }


  export type AptitudeTestAvgAggregateInputType = {
    id?: true
  }

  export type AptitudeTestSumAggregateInputType = {
    id?: true
  }

  export type AptitudeTestMinAggregateInputType = {
    id?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    createdAt?: true
  }

  export type AptitudeTestMaxAggregateInputType = {
    id?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    createdAt?: true
  }

  export type AptitudeTestCountAggregateInputType = {
    id?: true
    q1?: true
    q2?: true
    q3?: true
    q4?: true
    q5?: true
    createdAt?: true
    _all?: true
  }

  export type AptitudeTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AptitudeTest to aggregate.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AptitudeTests
    **/
    _count?: true | AptitudeTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AptitudeTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AptitudeTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AptitudeTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AptitudeTestMaxAggregateInputType
  }

  export type GetAptitudeTestAggregateType<T extends AptitudeTestAggregateArgs> = {
        [P in keyof T & keyof AggregateAptitudeTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAptitudeTest[P]>
      : GetScalarType<T[P], AggregateAptitudeTest[P]>
  }




  export type AptitudeTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AptitudeTestWhereInput
    orderBy?: AptitudeTestOrderByWithAggregationInput | AptitudeTestOrderByWithAggregationInput[]
    by: AptitudeTestScalarFieldEnum[] | AptitudeTestScalarFieldEnum
    having?: AptitudeTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AptitudeTestCountAggregateInputType | true
    _avg?: AptitudeTestAvgAggregateInputType
    _sum?: AptitudeTestSumAggregateInputType
    _min?: AptitudeTestMinAggregateInputType
    _max?: AptitudeTestMaxAggregateInputType
  }

  export type AptitudeTestGroupByOutputType = {
    id: number
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    createdAt: Date
    _count: AptitudeTestCountAggregateOutputType | null
    _avg: AptitudeTestAvgAggregateOutputType | null
    _sum: AptitudeTestSumAggregateOutputType | null
    _min: AptitudeTestMinAggregateOutputType | null
    _max: AptitudeTestMaxAggregateOutputType | null
  }

  type GetAptitudeTestGroupByPayload<T extends AptitudeTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AptitudeTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AptitudeTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AptitudeTestGroupByOutputType[P]>
            : GetScalarType<T[P], AptitudeTestGroupByOutputType[P]>
        }
      >
    >


  export type AptitudeTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aptitudeTest"]>

  export type AptitudeTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aptitudeTest"]>

  export type AptitudeTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aptitudeTest"]>

  export type AptitudeTestSelectScalar = {
    id?: boolean
    q1?: boolean
    q2?: boolean
    q3?: boolean
    q4?: boolean
    q5?: boolean
    createdAt?: boolean
  }

  export type AptitudeTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "q1" | "q2" | "q3" | "q4" | "q5" | "createdAt", ExtArgs["result"]["aptitudeTest"]>

  export type $AptitudeTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AptitudeTest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      q1: string
      q2: string
      q3: string
      q4: string
      q5: string
      createdAt: Date
    }, ExtArgs["result"]["aptitudeTest"]>
    composites: {}
  }

  type AptitudeTestGetPayload<S extends boolean | null | undefined | AptitudeTestDefaultArgs> = $Result.GetResult<Prisma.$AptitudeTestPayload, S>

  type AptitudeTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AptitudeTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AptitudeTestCountAggregateInputType | true
    }

  export interface AptitudeTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AptitudeTest'], meta: { name: 'AptitudeTest' } }
    /**
     * Find zero or one AptitudeTest that matches the filter.
     * @param {AptitudeTestFindUniqueArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AptitudeTestFindUniqueArgs>(args: SelectSubset<T, AptitudeTestFindUniqueArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AptitudeTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AptitudeTestFindUniqueOrThrowArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AptitudeTestFindUniqueOrThrowArgs>(args: SelectSubset<T, AptitudeTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AptitudeTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestFindFirstArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AptitudeTestFindFirstArgs>(args?: SelectSubset<T, AptitudeTestFindFirstArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AptitudeTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestFindFirstOrThrowArgs} args - Arguments to find a AptitudeTest
     * @example
     * // Get one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AptitudeTestFindFirstOrThrowArgs>(args?: SelectSubset<T, AptitudeTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AptitudeTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AptitudeTests
     * const aptitudeTests = await prisma.aptitudeTest.findMany()
     * 
     * // Get first 10 AptitudeTests
     * const aptitudeTests = await prisma.aptitudeTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aptitudeTestWithIdOnly = await prisma.aptitudeTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AptitudeTestFindManyArgs>(args?: SelectSubset<T, AptitudeTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AptitudeTest.
     * @param {AptitudeTestCreateArgs} args - Arguments to create a AptitudeTest.
     * @example
     * // Create one AptitudeTest
     * const AptitudeTest = await prisma.aptitudeTest.create({
     *   data: {
     *     // ... data to create a AptitudeTest
     *   }
     * })
     * 
     */
    create<T extends AptitudeTestCreateArgs>(args: SelectSubset<T, AptitudeTestCreateArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AptitudeTests.
     * @param {AptitudeTestCreateManyArgs} args - Arguments to create many AptitudeTests.
     * @example
     * // Create many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AptitudeTestCreateManyArgs>(args?: SelectSubset<T, AptitudeTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AptitudeTests and returns the data saved in the database.
     * @param {AptitudeTestCreateManyAndReturnArgs} args - Arguments to create many AptitudeTests.
     * @example
     * // Create many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AptitudeTests and only return the `id`
     * const aptitudeTestWithIdOnly = await prisma.aptitudeTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AptitudeTestCreateManyAndReturnArgs>(args?: SelectSubset<T, AptitudeTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AptitudeTest.
     * @param {AptitudeTestDeleteArgs} args - Arguments to delete one AptitudeTest.
     * @example
     * // Delete one AptitudeTest
     * const AptitudeTest = await prisma.aptitudeTest.delete({
     *   where: {
     *     // ... filter to delete one AptitudeTest
     *   }
     * })
     * 
     */
    delete<T extends AptitudeTestDeleteArgs>(args: SelectSubset<T, AptitudeTestDeleteArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AptitudeTest.
     * @param {AptitudeTestUpdateArgs} args - Arguments to update one AptitudeTest.
     * @example
     * // Update one AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AptitudeTestUpdateArgs>(args: SelectSubset<T, AptitudeTestUpdateArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AptitudeTests.
     * @param {AptitudeTestDeleteManyArgs} args - Arguments to filter AptitudeTests to delete.
     * @example
     * // Delete a few AptitudeTests
     * const { count } = await prisma.aptitudeTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AptitudeTestDeleteManyArgs>(args?: SelectSubset<T, AptitudeTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AptitudeTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AptitudeTestUpdateManyArgs>(args: SelectSubset<T, AptitudeTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AptitudeTests and returns the data updated in the database.
     * @param {AptitudeTestUpdateManyAndReturnArgs} args - Arguments to update many AptitudeTests.
     * @example
     * // Update many AptitudeTests
     * const aptitudeTest = await prisma.aptitudeTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AptitudeTests and only return the `id`
     * const aptitudeTestWithIdOnly = await prisma.aptitudeTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AptitudeTestUpdateManyAndReturnArgs>(args: SelectSubset<T, AptitudeTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AptitudeTest.
     * @param {AptitudeTestUpsertArgs} args - Arguments to update or create a AptitudeTest.
     * @example
     * // Update or create a AptitudeTest
     * const aptitudeTest = await prisma.aptitudeTest.upsert({
     *   create: {
     *     // ... data to create a AptitudeTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AptitudeTest we want to update
     *   }
     * })
     */
    upsert<T extends AptitudeTestUpsertArgs>(args: SelectSubset<T, AptitudeTestUpsertArgs<ExtArgs>>): Prisma__AptitudeTestClient<$Result.GetResult<Prisma.$AptitudeTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AptitudeTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestCountArgs} args - Arguments to filter AptitudeTests to count.
     * @example
     * // Count the number of AptitudeTests
     * const count = await prisma.aptitudeTest.count({
     *   where: {
     *     // ... the filter for the AptitudeTests we want to count
     *   }
     * })
    **/
    count<T extends AptitudeTestCountArgs>(
      args?: Subset<T, AptitudeTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AptitudeTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AptitudeTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AptitudeTestAggregateArgs>(args: Subset<T, AptitudeTestAggregateArgs>): Prisma.PrismaPromise<GetAptitudeTestAggregateType<T>>

    /**
     * Group by AptitudeTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AptitudeTestGroupByArgs} args - Group by arguments.
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
      T extends AptitudeTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AptitudeTestGroupByArgs['orderBy'] }
        : { orderBy?: AptitudeTestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AptitudeTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAptitudeTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AptitudeTest model
   */
  readonly fields: AptitudeTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AptitudeTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AptitudeTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AptitudeTest model
   */
  interface AptitudeTestFieldRefs {
    readonly id: FieldRef<"AptitudeTest", 'Int'>
    readonly q1: FieldRef<"AptitudeTest", 'String'>
    readonly q2: FieldRef<"AptitudeTest", 'String'>
    readonly q3: FieldRef<"AptitudeTest", 'String'>
    readonly q4: FieldRef<"AptitudeTest", 'String'>
    readonly q5: FieldRef<"AptitudeTest", 'String'>
    readonly createdAt: FieldRef<"AptitudeTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AptitudeTest findUnique
   */
  export type AptitudeTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest findUniqueOrThrow
   */
  export type AptitudeTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest findFirst
   */
  export type AptitudeTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AptitudeTests.
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AptitudeTests.
     */
    distinct?: AptitudeTestScalarFieldEnum | AptitudeTestScalarFieldEnum[]
  }

  /**
   * AptitudeTest findFirstOrThrow
   */
  export type AptitudeTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Filter, which AptitudeTest to fetch.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AptitudeTests.
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AptitudeTests.
     */
    distinct?: AptitudeTestScalarFieldEnum | AptitudeTestScalarFieldEnum[]
  }

  /**
   * AptitudeTest findMany
   */
  export type AptitudeTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Filter, which AptitudeTests to fetch.
     */
    where?: AptitudeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AptitudeTests to fetch.
     */
    orderBy?: AptitudeTestOrderByWithRelationInput | AptitudeTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AptitudeTests.
     */
    cursor?: AptitudeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AptitudeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AptitudeTests.
     */
    skip?: number
    distinct?: AptitudeTestScalarFieldEnum | AptitudeTestScalarFieldEnum[]
  }

  /**
   * AptitudeTest create
   */
  export type AptitudeTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * The data needed to create a AptitudeTest.
     */
    data: XOR<AptitudeTestCreateInput, AptitudeTestUncheckedCreateInput>
  }

  /**
   * AptitudeTest createMany
   */
  export type AptitudeTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AptitudeTests.
     */
    data: AptitudeTestCreateManyInput | AptitudeTestCreateManyInput[]
  }

  /**
   * AptitudeTest createManyAndReturn
   */
  export type AptitudeTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * The data used to create many AptitudeTests.
     */
    data: AptitudeTestCreateManyInput | AptitudeTestCreateManyInput[]
  }

  /**
   * AptitudeTest update
   */
  export type AptitudeTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * The data needed to update a AptitudeTest.
     */
    data: XOR<AptitudeTestUpdateInput, AptitudeTestUncheckedUpdateInput>
    /**
     * Choose, which AptitudeTest to update.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest updateMany
   */
  export type AptitudeTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AptitudeTests.
     */
    data: XOR<AptitudeTestUpdateManyMutationInput, AptitudeTestUncheckedUpdateManyInput>
    /**
     * Filter which AptitudeTests to update
     */
    where?: AptitudeTestWhereInput
    /**
     * Limit how many AptitudeTests to update.
     */
    limit?: number
  }

  /**
   * AptitudeTest updateManyAndReturn
   */
  export type AptitudeTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * The data used to update AptitudeTests.
     */
    data: XOR<AptitudeTestUpdateManyMutationInput, AptitudeTestUncheckedUpdateManyInput>
    /**
     * Filter which AptitudeTests to update
     */
    where?: AptitudeTestWhereInput
    /**
     * Limit how many AptitudeTests to update.
     */
    limit?: number
  }

  /**
   * AptitudeTest upsert
   */
  export type AptitudeTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * The filter to search for the AptitudeTest to update in case it exists.
     */
    where: AptitudeTestWhereUniqueInput
    /**
     * In case the AptitudeTest found by the `where` argument doesn't exist, create a new AptitudeTest with this data.
     */
    create: XOR<AptitudeTestCreateInput, AptitudeTestUncheckedCreateInput>
    /**
     * In case the AptitudeTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AptitudeTestUpdateInput, AptitudeTestUncheckedUpdateInput>
  }

  /**
   * AptitudeTest delete
   */
  export type AptitudeTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
    /**
     * Filter which AptitudeTest to delete.
     */
    where: AptitudeTestWhereUniqueInput
  }

  /**
   * AptitudeTest deleteMany
   */
  export type AptitudeTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AptitudeTests to delete
     */
    where?: AptitudeTestWhereInput
    /**
     * Limit how many AptitudeTests to delete.
     */
    limit?: number
  }

  /**
   * AptitudeTest without action
   */
  export type AptitudeTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AptitudeTest
     */
    select?: AptitudeTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AptitudeTest
     */
    omit?: AptitudeTestOmit<ExtArgs> | null
  }


  /**
   * Model Consult
   */

  export type AggregateConsult = {
    _count: ConsultCountAggregateOutputType | null
    _avg: ConsultAvgAggregateOutputType | null
    _sum: ConsultSumAggregateOutputType | null
    _min: ConsultMinAggregateOutputType | null
    _max: ConsultMaxAggregateOutputType | null
  }

  export type ConsultAvgAggregateOutputType = {
    id: number | null
  }

  export type ConsultSumAggregateOutputType = {
    id: number | null
  }

  export type ConsultMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ConsultMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ConsultCountAggregateOutputType = {
    id: number
    name: number
    email: number
    content: number
    createdAt: number
    _all: number
  }


  export type ConsultAvgAggregateInputType = {
    id?: true
  }

  export type ConsultSumAggregateInputType = {
    id?: true
  }

  export type ConsultMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    content?: true
    createdAt?: true
  }

  export type ConsultMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    content?: true
    createdAt?: true
  }

  export type ConsultCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ConsultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consult to aggregate.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consults
    **/
    _count?: true | ConsultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultMaxAggregateInputType
  }

  export type GetConsultAggregateType<T extends ConsultAggregateArgs> = {
        [P in keyof T & keyof AggregateConsult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsult[P]>
      : GetScalarType<T[P], AggregateConsult[P]>
  }




  export type ConsultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultWhereInput
    orderBy?: ConsultOrderByWithAggregationInput | ConsultOrderByWithAggregationInput[]
    by: ConsultScalarFieldEnum[] | ConsultScalarFieldEnum
    having?: ConsultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultCountAggregateInputType | true
    _avg?: ConsultAvgAggregateInputType
    _sum?: ConsultSumAggregateInputType
    _min?: ConsultMinAggregateInputType
    _max?: ConsultMaxAggregateInputType
  }

  export type ConsultGroupByOutputType = {
    id: number
    name: string
    email: string
    content: string
    createdAt: Date
    _count: ConsultCountAggregateOutputType | null
    _avg: ConsultAvgAggregateOutputType | null
    _sum: ConsultSumAggregateOutputType | null
    _min: ConsultMinAggregateOutputType | null
    _max: ConsultMaxAggregateOutputType | null
  }

  type GetConsultGroupByPayload<T extends ConsultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultGroupByOutputType[P]>
        }
      >
    >


  export type ConsultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consult"]>

  export type ConsultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consult"]>

  export type ConsultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["consult"]>

  export type ConsultSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ConsultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "content" | "createdAt", ExtArgs["result"]["consult"]>

  export type $ConsultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consult"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["consult"]>
    composites: {}
  }

  type ConsultGetPayload<S extends boolean | null | undefined | ConsultDefaultArgs> = $Result.GetResult<Prisma.$ConsultPayload, S>

  type ConsultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultCountAggregateInputType | true
    }

  export interface ConsultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consult'], meta: { name: 'Consult' } }
    /**
     * Find zero or one Consult that matches the filter.
     * @param {ConsultFindUniqueArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultFindUniqueArgs>(args: SelectSubset<T, ConsultFindUniqueArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultFindUniqueOrThrowArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultFindFirstArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultFindFirstArgs>(args?: SelectSubset<T, ConsultFindFirstArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultFindFirstOrThrowArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consults
     * const consults = await prisma.consult.findMany()
     * 
     * // Get first 10 Consults
     * const consults = await prisma.consult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultWithIdOnly = await prisma.consult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultFindManyArgs>(args?: SelectSubset<T, ConsultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consult.
     * @param {ConsultCreateArgs} args - Arguments to create a Consult.
     * @example
     * // Create one Consult
     * const Consult = await prisma.consult.create({
     *   data: {
     *     // ... data to create a Consult
     *   }
     * })
     * 
     */
    create<T extends ConsultCreateArgs>(args: SelectSubset<T, ConsultCreateArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consults.
     * @param {ConsultCreateManyArgs} args - Arguments to create many Consults.
     * @example
     * // Create many Consults
     * const consult = await prisma.consult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultCreateManyArgs>(args?: SelectSubset<T, ConsultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consults and returns the data saved in the database.
     * @param {ConsultCreateManyAndReturnArgs} args - Arguments to create many Consults.
     * @example
     * // Create many Consults
     * const consult = await prisma.consult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consults and only return the `id`
     * const consultWithIdOnly = await prisma.consult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consult.
     * @param {ConsultDeleteArgs} args - Arguments to delete one Consult.
     * @example
     * // Delete one Consult
     * const Consult = await prisma.consult.delete({
     *   where: {
     *     // ... filter to delete one Consult
     *   }
     * })
     * 
     */
    delete<T extends ConsultDeleteArgs>(args: SelectSubset<T, ConsultDeleteArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consult.
     * @param {ConsultUpdateArgs} args - Arguments to update one Consult.
     * @example
     * // Update one Consult
     * const consult = await prisma.consult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultUpdateArgs>(args: SelectSubset<T, ConsultUpdateArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consults.
     * @param {ConsultDeleteManyArgs} args - Arguments to filter Consults to delete.
     * @example
     * // Delete a few Consults
     * const { count } = await prisma.consult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultDeleteManyArgs>(args?: SelectSubset<T, ConsultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consults
     * const consult = await prisma.consult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultUpdateManyArgs>(args: SelectSubset<T, ConsultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consults and returns the data updated in the database.
     * @param {ConsultUpdateManyAndReturnArgs} args - Arguments to update many Consults.
     * @example
     * // Update many Consults
     * const consult = await prisma.consult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consults and only return the `id`
     * const consultWithIdOnly = await prisma.consult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consult.
     * @param {ConsultUpsertArgs} args - Arguments to update or create a Consult.
     * @example
     * // Update or create a Consult
     * const consult = await prisma.consult.upsert({
     *   create: {
     *     // ... data to create a Consult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consult we want to update
     *   }
     * })
     */
    upsert<T extends ConsultUpsertArgs>(args: SelectSubset<T, ConsultUpsertArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultCountArgs} args - Arguments to filter Consults to count.
     * @example
     * // Count the number of Consults
     * const count = await prisma.consult.count({
     *   where: {
     *     // ... the filter for the Consults we want to count
     *   }
     * })
    **/
    count<T extends ConsultCountArgs>(
      args?: Subset<T, ConsultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultAggregateArgs>(args: Subset<T, ConsultAggregateArgs>): Prisma.PrismaPromise<GetConsultAggregateType<T>>

    /**
     * Group by Consult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultGroupByArgs} args - Group by arguments.
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
      T extends ConsultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultGroupByArgs['orderBy'] }
        : { orderBy?: ConsultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consult model
   */
  readonly fields: ConsultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Consult model
   */
  interface ConsultFieldRefs {
    readonly id: FieldRef<"Consult", 'Int'>
    readonly name: FieldRef<"Consult", 'String'>
    readonly email: FieldRef<"Consult", 'String'>
    readonly content: FieldRef<"Consult", 'String'>
    readonly createdAt: FieldRef<"Consult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consult findUnique
   */
  export type ConsultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult findUniqueOrThrow
   */
  export type ConsultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult findFirst
   */
  export type ConsultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consults.
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consults.
     */
    distinct?: ConsultScalarFieldEnum | ConsultScalarFieldEnum[]
  }

  /**
   * Consult findFirstOrThrow
   */
  export type ConsultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consults.
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consults.
     */
    distinct?: ConsultScalarFieldEnum | ConsultScalarFieldEnum[]
  }

  /**
   * Consult findMany
   */
  export type ConsultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Filter, which Consults to fetch.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consults.
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    distinct?: ConsultScalarFieldEnum | ConsultScalarFieldEnum[]
  }

  /**
   * Consult create
   */
  export type ConsultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * The data needed to create a Consult.
     */
    data: XOR<ConsultCreateInput, ConsultUncheckedCreateInput>
  }

  /**
   * Consult createMany
   */
  export type ConsultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consults.
     */
    data: ConsultCreateManyInput | ConsultCreateManyInput[]
  }

  /**
   * Consult createManyAndReturn
   */
  export type ConsultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * The data used to create many Consults.
     */
    data: ConsultCreateManyInput | ConsultCreateManyInput[]
  }

  /**
   * Consult update
   */
  export type ConsultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * The data needed to update a Consult.
     */
    data: XOR<ConsultUpdateInput, ConsultUncheckedUpdateInput>
    /**
     * Choose, which Consult to update.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult updateMany
   */
  export type ConsultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consults.
     */
    data: XOR<ConsultUpdateManyMutationInput, ConsultUncheckedUpdateManyInput>
    /**
     * Filter which Consults to update
     */
    where?: ConsultWhereInput
    /**
     * Limit how many Consults to update.
     */
    limit?: number
  }

  /**
   * Consult updateManyAndReturn
   */
  export type ConsultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * The data used to update Consults.
     */
    data: XOR<ConsultUpdateManyMutationInput, ConsultUncheckedUpdateManyInput>
    /**
     * Filter which Consults to update
     */
    where?: ConsultWhereInput
    /**
     * Limit how many Consults to update.
     */
    limit?: number
  }

  /**
   * Consult upsert
   */
  export type ConsultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * The filter to search for the Consult to update in case it exists.
     */
    where: ConsultWhereUniqueInput
    /**
     * In case the Consult found by the `where` argument doesn't exist, create a new Consult with this data.
     */
    create: XOR<ConsultCreateInput, ConsultUncheckedCreateInput>
    /**
     * In case the Consult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultUpdateInput, ConsultUncheckedUpdateInput>
  }

  /**
   * Consult delete
   */
  export type ConsultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Filter which Consult to delete.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult deleteMany
   */
  export type ConsultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consults to delete
     */
    where?: ConsultWhereInput
    /**
     * Limit how many Consults to delete.
     */
    limit?: number
  }

  /**
   * Consult without action
   */
  export type ConsultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RecommendScalarFieldEnum: {
    id: 'id',
    grade: 'grade',
    scores: 'scores',
    aptitude: 'aptitude',
    interest: 'interest',
    region: 'region',
    createdAt: 'createdAt'
  };

  export type RecommendScalarFieldEnum = (typeof RecommendScalarFieldEnum)[keyof typeof RecommendScalarFieldEnum]


  export const AptitudeTestScalarFieldEnum: {
    id: 'id',
    q1: 'q1',
    q2: 'q2',
    q3: 'q3',
    q4: 'q4',
    q5: 'q5',
    createdAt: 'createdAt'
  };

  export type AptitudeTestScalarFieldEnum = (typeof AptitudeTestScalarFieldEnum)[keyof typeof AptitudeTestScalarFieldEnum]


  export const ConsultScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ConsultScalarFieldEnum = (typeof ConsultScalarFieldEnum)[keyof typeof ConsultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export type RecommendWhereInput = {
    AND?: RecommendWhereInput | RecommendWhereInput[]
    OR?: RecommendWhereInput[]
    NOT?: RecommendWhereInput | RecommendWhereInput[]
    id?: IntFilter<"Recommend"> | number
    grade?: StringFilter<"Recommend"> | string
    scores?: StringFilter<"Recommend"> | string
    aptitude?: StringFilter<"Recommend"> | string
    interest?: StringFilter<"Recommend"> | string
    region?: StringFilter<"Recommend"> | string
    createdAt?: DateTimeFilter<"Recommend"> | Date | string
  }

  export type RecommendOrderByWithRelationInput = {
    id?: SortOrder
    grade?: SortOrder
    scores?: SortOrder
    aptitude?: SortOrder
    interest?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecommendWhereInput | RecommendWhereInput[]
    OR?: RecommendWhereInput[]
    NOT?: RecommendWhereInput | RecommendWhereInput[]
    grade?: StringFilter<"Recommend"> | string
    scores?: StringFilter<"Recommend"> | string
    aptitude?: StringFilter<"Recommend"> | string
    interest?: StringFilter<"Recommend"> | string
    region?: StringFilter<"Recommend"> | string
    createdAt?: DateTimeFilter<"Recommend"> | Date | string
  }, "id">

  export type RecommendOrderByWithAggregationInput = {
    id?: SortOrder
    grade?: SortOrder
    scores?: SortOrder
    aptitude?: SortOrder
    interest?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    _count?: RecommendCountOrderByAggregateInput
    _avg?: RecommendAvgOrderByAggregateInput
    _max?: RecommendMaxOrderByAggregateInput
    _min?: RecommendMinOrderByAggregateInput
    _sum?: RecommendSumOrderByAggregateInput
  }

  export type RecommendScalarWhereWithAggregatesInput = {
    AND?: RecommendScalarWhereWithAggregatesInput | RecommendScalarWhereWithAggregatesInput[]
    OR?: RecommendScalarWhereWithAggregatesInput[]
    NOT?: RecommendScalarWhereWithAggregatesInput | RecommendScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recommend"> | number
    grade?: StringWithAggregatesFilter<"Recommend"> | string
    scores?: StringWithAggregatesFilter<"Recommend"> | string
    aptitude?: StringWithAggregatesFilter<"Recommend"> | string
    interest?: StringWithAggregatesFilter<"Recommend"> | string
    region?: StringWithAggregatesFilter<"Recommend"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recommend"> | Date | string
  }

  export type AptitudeTestWhereInput = {
    AND?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    OR?: AptitudeTestWhereInput[]
    NOT?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    id?: IntFilter<"AptitudeTest"> | number
    q1?: StringFilter<"AptitudeTest"> | string
    q2?: StringFilter<"AptitudeTest"> | string
    q3?: StringFilter<"AptitudeTest"> | string
    q4?: StringFilter<"AptitudeTest"> | string
    q5?: StringFilter<"AptitudeTest"> | string
    createdAt?: DateTimeFilter<"AptitudeTest"> | Date | string
  }

  export type AptitudeTestOrderByWithRelationInput = {
    id?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    createdAt?: SortOrder
  }

  export type AptitudeTestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    OR?: AptitudeTestWhereInput[]
    NOT?: AptitudeTestWhereInput | AptitudeTestWhereInput[]
    q1?: StringFilter<"AptitudeTest"> | string
    q2?: StringFilter<"AptitudeTest"> | string
    q3?: StringFilter<"AptitudeTest"> | string
    q4?: StringFilter<"AptitudeTest"> | string
    q5?: StringFilter<"AptitudeTest"> | string
    createdAt?: DateTimeFilter<"AptitudeTest"> | Date | string
  }, "id">

  export type AptitudeTestOrderByWithAggregationInput = {
    id?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    createdAt?: SortOrder
    _count?: AptitudeTestCountOrderByAggregateInput
    _avg?: AptitudeTestAvgOrderByAggregateInput
    _max?: AptitudeTestMaxOrderByAggregateInput
    _min?: AptitudeTestMinOrderByAggregateInput
    _sum?: AptitudeTestSumOrderByAggregateInput
  }

  export type AptitudeTestScalarWhereWithAggregatesInput = {
    AND?: AptitudeTestScalarWhereWithAggregatesInput | AptitudeTestScalarWhereWithAggregatesInput[]
    OR?: AptitudeTestScalarWhereWithAggregatesInput[]
    NOT?: AptitudeTestScalarWhereWithAggregatesInput | AptitudeTestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AptitudeTest"> | number
    q1?: StringWithAggregatesFilter<"AptitudeTest"> | string
    q2?: StringWithAggregatesFilter<"AptitudeTest"> | string
    q3?: StringWithAggregatesFilter<"AptitudeTest"> | string
    q4?: StringWithAggregatesFilter<"AptitudeTest"> | string
    q5?: StringWithAggregatesFilter<"AptitudeTest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AptitudeTest"> | Date | string
  }

  export type ConsultWhereInput = {
    AND?: ConsultWhereInput | ConsultWhereInput[]
    OR?: ConsultWhereInput[]
    NOT?: ConsultWhereInput | ConsultWhereInput[]
    id?: IntFilter<"Consult"> | number
    name?: StringFilter<"Consult"> | string
    email?: StringFilter<"Consult"> | string
    content?: StringFilter<"Consult"> | string
    createdAt?: DateTimeFilter<"Consult"> | Date | string
  }

  export type ConsultOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultWhereInput | ConsultWhereInput[]
    OR?: ConsultWhereInput[]
    NOT?: ConsultWhereInput | ConsultWhereInput[]
    name?: StringFilter<"Consult"> | string
    email?: StringFilter<"Consult"> | string
    content?: StringFilter<"Consult"> | string
    createdAt?: DateTimeFilter<"Consult"> | Date | string
  }, "id">

  export type ConsultOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ConsultCountOrderByAggregateInput
    _avg?: ConsultAvgOrderByAggregateInput
    _max?: ConsultMaxOrderByAggregateInput
    _min?: ConsultMinOrderByAggregateInput
    _sum?: ConsultSumOrderByAggregateInput
  }

  export type ConsultScalarWhereWithAggregatesInput = {
    AND?: ConsultScalarWhereWithAggregatesInput | ConsultScalarWhereWithAggregatesInput[]
    OR?: ConsultScalarWhereWithAggregatesInput[]
    NOT?: ConsultScalarWhereWithAggregatesInput | ConsultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consult"> | number
    name?: StringWithAggregatesFilter<"Consult"> | string
    email?: StringWithAggregatesFilter<"Consult"> | string
    content?: StringWithAggregatesFilter<"Consult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Consult"> | Date | string
  }

  export type RecommendCreateInput = {
    grade: string
    scores: string
    aptitude: string
    interest: string
    region: string
    createdAt?: Date | string
  }

  export type RecommendUncheckedCreateInput = {
    id?: number
    grade: string
    scores: string
    aptitude: string
    interest: string
    region: string
    createdAt?: Date | string
  }

  export type RecommendUpdateInput = {
    grade?: StringFieldUpdateOperationsInput | string
    scores?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    scores?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendCreateManyInput = {
    id?: number
    grade: string
    scores: string
    aptitude: string
    interest: string
    region: string
    createdAt?: Date | string
  }

  export type RecommendUpdateManyMutationInput = {
    grade?: StringFieldUpdateOperationsInput | string
    scores?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    scores?: StringFieldUpdateOperationsInput | string
    aptitude?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AptitudeTestCreateInput = {
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    createdAt?: Date | string
  }

  export type AptitudeTestUncheckedCreateInput = {
    id?: number
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    createdAt?: Date | string
  }

  export type AptitudeTestUpdateInput = {
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AptitudeTestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AptitudeTestCreateManyInput = {
    id?: number
    q1: string
    q2: string
    q3: string
    q4: string
    q5: string
    createdAt?: Date | string
  }

  export type AptitudeTestUpdateManyMutationInput = {
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AptitudeTestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    q1?: StringFieldUpdateOperationsInput | string
    q2?: StringFieldUpdateOperationsInput | string
    q3?: StringFieldUpdateOperationsInput | string
    q4?: StringFieldUpdateOperationsInput | string
    q5?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultCreateInput = {
    name: string
    email: string
    content: string
    createdAt?: Date | string
  }

  export type ConsultUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    content: string
    createdAt?: Date | string
  }

  export type ConsultUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultCreateManyInput = {
    id?: number
    name: string
    email: string
    content: string
    createdAt?: Date | string
  }

  export type ConsultUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type RecommendCountOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    scores?: SortOrder
    aptitude?: SortOrder
    interest?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecommendMaxOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    scores?: SortOrder
    aptitude?: SortOrder
    interest?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendMinOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    scores?: SortOrder
    aptitude?: SortOrder
    interest?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
  }

  export type RecommendSumOrderByAggregateInput = {
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type AptitudeTestCountOrderByAggregateInput = {
    id?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    createdAt?: SortOrder
  }

  export type AptitudeTestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AptitudeTestMaxOrderByAggregateInput = {
    id?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    createdAt?: SortOrder
  }

  export type AptitudeTestMinOrderByAggregateInput = {
    id?: SortOrder
    q1?: SortOrder
    q2?: SortOrder
    q3?: SortOrder
    q4?: SortOrder
    q5?: SortOrder
    createdAt?: SortOrder
  }

  export type AptitudeTestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConsultCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConsultMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsultSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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