
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
 * Model Preferences
 * 
 */
export type Preferences = $Result.DefaultSelection<Prisma.$PreferencesPayload>
/**
 * Model BookmarksSections
 * 
 */
export type BookmarksSections = $Result.DefaultSelection<Prisma.$BookmarksSectionsPayload>
/**
 * Model Bookmarks
 * 
 */
export type Bookmarks = $Result.DefaultSelection<Prisma.$BookmarksPayload>
/**
 * Model StickyNotes
 * 
 */
export type StickyNotes = $Result.DefaultSelection<Prisma.$StickyNotesPayload>
/**
 * Model ToDoLists
 * 
 */
export type ToDoLists = $Result.DefaultSelection<Prisma.$ToDoListsPayload>
/**
 * Model ToDoItems
 * 
 */
export type ToDoItems = $Result.DefaultSelection<Prisma.$ToDoItemsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Preferences
 * const preferences = await prisma.preferences.findMany()
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
   * // Fetch zero or more Preferences
   * const preferences = await prisma.preferences.findMany()
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
   * `prisma.preferences`: Exposes CRUD operations for the **Preferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preferences.findMany()
    * ```
    */
  get preferences(): Prisma.PreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmarksSections`: Exposes CRUD operations for the **BookmarksSections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookmarksSections
    * const bookmarksSections = await prisma.bookmarksSections.findMany()
    * ```
    */
  get bookmarksSections(): Prisma.BookmarksSectionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmarks`: Exposes CRUD operations for the **Bookmarks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmarks.findMany()
    * ```
    */
  get bookmarks(): Prisma.BookmarksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stickyNotes`: Exposes CRUD operations for the **StickyNotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StickyNotes
    * const stickyNotes = await prisma.stickyNotes.findMany()
    * ```
    */
  get stickyNotes(): Prisma.StickyNotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toDoLists`: Exposes CRUD operations for the **ToDoLists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToDoLists
    * const toDoLists = await prisma.toDoLists.findMany()
    * ```
    */
  get toDoLists(): Prisma.ToDoListsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toDoItems`: Exposes CRUD operations for the **ToDoItems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToDoItems
    * const toDoItems = await prisma.toDoItems.findMany()
    * ```
    */
  get toDoItems(): Prisma.ToDoItemsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Preferences: 'Preferences',
    BookmarksSections: 'BookmarksSections',
    Bookmarks: 'Bookmarks',
    StickyNotes: 'StickyNotes',
    ToDoLists: 'ToDoLists',
    ToDoItems: 'ToDoItems'
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
      modelProps: "preferences" | "bookmarksSections" | "bookmarks" | "stickyNotes" | "toDoLists" | "toDoItems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Preferences: {
        payload: Prisma.$PreferencesPayload<ExtArgs>
        fields: Prisma.PreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findFirst: {
            args: Prisma.PreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findMany: {
            args: Prisma.PreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          create: {
            args: Prisma.PreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          createMany: {
            args: Prisma.PreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          delete: {
            args: Prisma.PreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          update: {
            args: Prisma.PreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          deleteMany: {
            args: Prisma.PreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          upsert: {
            args: Prisma.PreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          aggregate: {
            args: Prisma.PreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferences>
          }
          groupBy: {
            args: Prisma.PreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<PreferencesCountAggregateOutputType> | number
          }
        }
      }
      BookmarksSections: {
        payload: Prisma.$BookmarksSectionsPayload<ExtArgs>
        fields: Prisma.BookmarksSectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarksSectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarksSectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>
          }
          findFirst: {
            args: Prisma.BookmarksSectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarksSectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>
          }
          findMany: {
            args: Prisma.BookmarksSectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>[]
          }
          create: {
            args: Prisma.BookmarksSectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>
          }
          createMany: {
            args: Prisma.BookmarksSectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarksSectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>[]
          }
          delete: {
            args: Prisma.BookmarksSectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>
          }
          update: {
            args: Prisma.BookmarksSectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>
          }
          deleteMany: {
            args: Prisma.BookmarksSectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarksSectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarksSectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>[]
          }
          upsert: {
            args: Prisma.BookmarksSectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksSectionsPayload>
          }
          aggregate: {
            args: Prisma.BookmarksSectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarksSections>
          }
          groupBy: {
            args: Prisma.BookmarksSectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarksSectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarksSectionsCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarksSectionsCountAggregateOutputType> | number
          }
        }
      }
      Bookmarks: {
        payload: Prisma.$BookmarksPayload<ExtArgs>
        fields: Prisma.BookmarksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          findFirst: {
            args: Prisma.BookmarksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          findMany: {
            args: Prisma.BookmarksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>[]
          }
          create: {
            args: Prisma.BookmarksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          createMany: {
            args: Prisma.BookmarksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>[]
          }
          delete: {
            args: Prisma.BookmarksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          update: {
            args: Prisma.BookmarksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          deleteMany: {
            args: Prisma.BookmarksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>[]
          }
          upsert: {
            args: Prisma.BookmarksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarksPayload>
          }
          aggregate: {
            args: Prisma.BookmarksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarks>
          }
          groupBy: {
            args: Prisma.BookmarksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarksCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarksCountAggregateOutputType> | number
          }
        }
      }
      StickyNotes: {
        payload: Prisma.$StickyNotesPayload<ExtArgs>
        fields: Prisma.StickyNotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StickyNotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StickyNotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          findFirst: {
            args: Prisma.StickyNotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StickyNotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          findMany: {
            args: Prisma.StickyNotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>[]
          }
          create: {
            args: Prisma.StickyNotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          createMany: {
            args: Prisma.StickyNotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StickyNotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>[]
          }
          delete: {
            args: Prisma.StickyNotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          update: {
            args: Prisma.StickyNotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          deleteMany: {
            args: Prisma.StickyNotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StickyNotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StickyNotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>[]
          }
          upsert: {
            args: Prisma.StickyNotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StickyNotesPayload>
          }
          aggregate: {
            args: Prisma.StickyNotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStickyNotes>
          }
          groupBy: {
            args: Prisma.StickyNotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StickyNotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.StickyNotesCountArgs<ExtArgs>
            result: $Utils.Optional<StickyNotesCountAggregateOutputType> | number
          }
        }
      }
      ToDoLists: {
        payload: Prisma.$ToDoListsPayload<ExtArgs>
        fields: Prisma.ToDoListsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToDoListsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToDoListsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>
          }
          findFirst: {
            args: Prisma.ToDoListsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToDoListsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>
          }
          findMany: {
            args: Prisma.ToDoListsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>[]
          }
          create: {
            args: Prisma.ToDoListsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>
          }
          createMany: {
            args: Prisma.ToDoListsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToDoListsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>[]
          }
          delete: {
            args: Prisma.ToDoListsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>
          }
          update: {
            args: Prisma.ToDoListsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>
          }
          deleteMany: {
            args: Prisma.ToDoListsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToDoListsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToDoListsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>[]
          }
          upsert: {
            args: Prisma.ToDoListsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoListsPayload>
          }
          aggregate: {
            args: Prisma.ToDoListsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToDoLists>
          }
          groupBy: {
            args: Prisma.ToDoListsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToDoListsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToDoListsCountArgs<ExtArgs>
            result: $Utils.Optional<ToDoListsCountAggregateOutputType> | number
          }
        }
      }
      ToDoItems: {
        payload: Prisma.$ToDoItemsPayload<ExtArgs>
        fields: Prisma.ToDoItemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToDoItemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToDoItemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>
          }
          findFirst: {
            args: Prisma.ToDoItemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToDoItemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>
          }
          findMany: {
            args: Prisma.ToDoItemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>[]
          }
          create: {
            args: Prisma.ToDoItemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>
          }
          createMany: {
            args: Prisma.ToDoItemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToDoItemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>[]
          }
          delete: {
            args: Prisma.ToDoItemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>
          }
          update: {
            args: Prisma.ToDoItemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>
          }
          deleteMany: {
            args: Prisma.ToDoItemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToDoItemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToDoItemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>[]
          }
          upsert: {
            args: Prisma.ToDoItemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToDoItemsPayload>
          }
          aggregate: {
            args: Prisma.ToDoItemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToDoItems>
          }
          groupBy: {
            args: Prisma.ToDoItemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToDoItemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToDoItemsCountArgs<ExtArgs>
            result: $Utils.Optional<ToDoItemsCountAggregateOutputType> | number
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
    preferences?: PreferencesOmit
    bookmarksSections?: BookmarksSectionsOmit
    bookmarks?: BookmarksOmit
    stickyNotes?: StickyNotesOmit
    toDoLists?: ToDoListsOmit
    toDoItems?: ToDoItemsOmit
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
   * Count Type BookmarksSectionsCountOutputType
   */

  export type BookmarksSectionsCountOutputType = {
    bookmarks: number
  }

  export type BookmarksSectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | BookmarksSectionsCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * BookmarksSectionsCountOutputType without action
   */
  export type BookmarksSectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSectionsCountOutputType
     */
    select?: BookmarksSectionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookmarksSectionsCountOutputType without action
   */
  export type BookmarksSectionsCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarksWhereInput
  }


  /**
   * Count Type ToDoListsCountOutputType
   */

  export type ToDoListsCountOutputType = {
    items: number
  }

  export type ToDoListsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ToDoListsCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ToDoListsCountOutputType without action
   */
  export type ToDoListsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoListsCountOutputType
     */
    select?: ToDoListsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToDoListsCountOutputType without action
   */
  export type ToDoListsCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToDoItemsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Preferences
   */

  export type AggregatePreferences = {
    _count: PreferencesCountAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  export type PreferencesMinAggregateOutputType = {
    id: string | null
    emailUpdates: boolean | null
    theme: string | null
    bookmarksSortOrder: string | null
    notesDisplay: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreferencesMaxAggregateOutputType = {
    id: string | null
    emailUpdates: boolean | null
    theme: string | null
    bookmarksSortOrder: string | null
    notesDisplay: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreferencesCountAggregateOutputType = {
    id: number
    emailUpdates: number
    theme: number
    bookmarksSortOrder: number
    notesDisplay: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PreferencesMinAggregateInputType = {
    id?: true
    emailUpdates?: true
    theme?: true
    bookmarksSortOrder?: true
    notesDisplay?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreferencesMaxAggregateInputType = {
    id?: true
    emailUpdates?: true
    theme?: true
    bookmarksSortOrder?: true
    notesDisplay?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreferencesCountAggregateInputType = {
    id?: true
    emailUpdates?: true
    theme?: true
    bookmarksSortOrder?: true
    notesDisplay?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to aggregate.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferencesMaxAggregateInputType
  }

  export type GetPreferencesAggregateType<T extends PreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferences[P]>
      : GetScalarType<T[P], AggregatePreferences[P]>
  }




  export type PreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencesWhereInput
    orderBy?: PreferencesOrderByWithAggregationInput | PreferencesOrderByWithAggregationInput[]
    by: PreferencesScalarFieldEnum[] | PreferencesScalarFieldEnum
    having?: PreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferencesCountAggregateInputType | true
    _min?: PreferencesMinAggregateInputType
    _max?: PreferencesMaxAggregateInputType
  }

  export type PreferencesGroupByOutputType = {
    id: string
    emailUpdates: boolean
    theme: string
    bookmarksSortOrder: string
    notesDisplay: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PreferencesCountAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  type GetPreferencesGroupByPayload<T extends PreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
        }
      >
    >


  export type PreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailUpdates?: boolean
    theme?: boolean
    bookmarksSortOrder?: boolean
    notesDisplay?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailUpdates?: boolean
    theme?: boolean
    bookmarksSortOrder?: boolean
    notesDisplay?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    emailUpdates?: boolean
    theme?: boolean
    bookmarksSortOrder?: boolean
    notesDisplay?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectScalar = {
    id?: boolean
    emailUpdates?: boolean
    theme?: boolean
    bookmarksSortOrder?: boolean
    notesDisplay?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "emailUpdates" | "theme" | "bookmarksSortOrder" | "notesDisplay" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["preferences"]>

  export type $PreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preferences"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      emailUpdates: boolean
      theme: string
      bookmarksSortOrder: string
      notesDisplay: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["preferences"]>
    composites: {}
  }

  type PreferencesGetPayload<S extends boolean | null | undefined | PreferencesDefaultArgs> = $Result.GetResult<Prisma.$PreferencesPayload, S>

  type PreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferencesCountAggregateInputType | true
    }

  export interface PreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preferences'], meta: { name: 'Preferences' } }
    /**
     * Find zero or one Preferences that matches the filter.
     * @param {PreferencesFindUniqueArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferencesFindUniqueArgs>(args: SelectSubset<T, PreferencesFindUniqueArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferencesFindUniqueOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferencesFindFirstArgs>(args?: SelectSubset<T, PreferencesFindFirstArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preferences.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferencesWithIdOnly = await prisma.preferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferencesFindManyArgs>(args?: SelectSubset<T, PreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preferences.
     * @param {PreferencesCreateArgs} args - Arguments to create a Preferences.
     * @example
     * // Create one Preferences
     * const Preferences = await prisma.preferences.create({
     *   data: {
     *     // ... data to create a Preferences
     *   }
     * })
     * 
     */
    create<T extends PreferencesCreateArgs>(args: SelectSubset<T, PreferencesCreateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferencesCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferencesCreateManyArgs>(args?: SelectSubset<T, PreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferencesCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preferences.
     * @param {PreferencesDeleteArgs} args - Arguments to delete one Preferences.
     * @example
     * // Delete one Preferences
     * const Preferences = await prisma.preferences.delete({
     *   where: {
     *     // ... filter to delete one Preferences
     *   }
     * })
     * 
     */
    delete<T extends PreferencesDeleteArgs>(args: SelectSubset<T, PreferencesDeleteArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preferences.
     * @param {PreferencesUpdateArgs} args - Arguments to update one Preferences.
     * @example
     * // Update one Preferences
     * const preferences = await prisma.preferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferencesUpdateArgs>(args: SelectSubset<T, PreferencesUpdateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferencesDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferencesDeleteManyArgs>(args?: SelectSubset<T, PreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferencesUpdateManyArgs>(args: SelectSubset<T, PreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferencesUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferencesWithIdOnly = await prisma.preferences.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preferences.
     * @param {PreferencesUpsertArgs} args - Arguments to update or create a Preferences.
     * @example
     * // Update or create a Preferences
     * const preferences = await prisma.preferences.upsert({
     *   create: {
     *     // ... data to create a Preferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preferences we want to update
     *   }
     * })
     */
    upsert<T extends PreferencesUpsertArgs>(args: SelectSubset<T, PreferencesUpsertArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preferences.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferencesCountArgs>(
      args?: Subset<T, PreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferencesAggregateArgs>(args: Subset<T, PreferencesAggregateArgs>): Prisma.PrismaPromise<GetPreferencesAggregateType<T>>

    /**
     * Group by Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesGroupByArgs} args - Group by arguments.
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
      T extends PreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferencesGroupByArgs['orderBy'] }
        : { orderBy?: PreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preferences model
   */
  readonly fields: PreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Preferences model
   */
  interface PreferencesFieldRefs {
    readonly id: FieldRef<"Preferences", 'String'>
    readonly emailUpdates: FieldRef<"Preferences", 'Boolean'>
    readonly theme: FieldRef<"Preferences", 'String'>
    readonly bookmarksSortOrder: FieldRef<"Preferences", 'String'>
    readonly notesDisplay: FieldRef<"Preferences", 'String'>
    readonly userId: FieldRef<"Preferences", 'String'>
    readonly createdAt: FieldRef<"Preferences", 'DateTime'>
    readonly updatedAt: FieldRef<"Preferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Preferences findUnique
   */
  export type PreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findUniqueOrThrow
   */
  export type PreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findFirst
   */
  export type PreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findFirstOrThrow
   */
  export type PreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findMany
   */
  export type PreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences create
   */
  export type PreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data needed to create a Preferences.
     */
    data: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
  }

  /**
   * Preferences createMany
   */
  export type PreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preferences createManyAndReturn
   */
  export type PreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preferences update
   */
  export type PreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data needed to update a Preferences.
     */
    data: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
    /**
     * Choose, which Preferences to update.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences updateMany
   */
  export type PreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preferences updateManyAndReturn
   */
  export type PreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preferences upsert
   */
  export type PreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The filter to search for the Preferences to update in case it exists.
     */
    where: PreferencesWhereUniqueInput
    /**
     * In case the Preferences found by the `where` argument doesn't exist, create a new Preferences with this data.
     */
    create: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
    /**
     * In case the Preferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
  }

  /**
   * Preferences delete
   */
  export type PreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Filter which Preferences to delete.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences deleteMany
   */
  export type PreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preferences without action
   */
  export type PreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
  }


  /**
   * Model BookmarksSections
   */

  export type AggregateBookmarksSections = {
    _count: BookmarksSectionsCountAggregateOutputType | null
    _min: BookmarksSectionsMinAggregateOutputType | null
    _max: BookmarksSectionsMaxAggregateOutputType | null
  }

  export type BookmarksSectionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarksSectionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarksSectionsCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookmarksSectionsMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarksSectionsMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarksSectionsCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookmarksSectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarksSections to aggregate.
     */
    where?: BookmarksSectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarksSections to fetch.
     */
    orderBy?: BookmarksSectionsOrderByWithRelationInput | BookmarksSectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarksSectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarksSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarksSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookmarksSections
    **/
    _count?: true | BookmarksSectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarksSectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarksSectionsMaxAggregateInputType
  }

  export type GetBookmarksSectionsAggregateType<T extends BookmarksSectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarksSections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarksSections[P]>
      : GetScalarType<T[P], AggregateBookmarksSections[P]>
  }




  export type BookmarksSectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarksSectionsWhereInput
    orderBy?: BookmarksSectionsOrderByWithAggregationInput | BookmarksSectionsOrderByWithAggregationInput[]
    by: BookmarksSectionsScalarFieldEnum[] | BookmarksSectionsScalarFieldEnum
    having?: BookmarksSectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarksSectionsCountAggregateInputType | true
    _min?: BookmarksSectionsMinAggregateInputType
    _max?: BookmarksSectionsMaxAggregateInputType
  }

  export type BookmarksSectionsGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BookmarksSectionsCountAggregateOutputType | null
    _min: BookmarksSectionsMinAggregateOutputType | null
    _max: BookmarksSectionsMaxAggregateOutputType | null
  }

  type GetBookmarksSectionsGroupByPayload<T extends BookmarksSectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarksSectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarksSectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarksSectionsGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarksSectionsGroupByOutputType[P]>
        }
      >
    >


  export type BookmarksSectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookmarks?: boolean | BookmarksSections$bookmarksArgs<ExtArgs>
    _count?: boolean | BookmarksSectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarksSections"]>

  export type BookmarksSectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bookmarksSections"]>

  export type BookmarksSectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bookmarksSections"]>

  export type BookmarksSectionsSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookmarksSectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["bookmarksSections"]>
  export type BookmarksSectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | BookmarksSections$bookmarksArgs<ExtArgs>
    _count?: boolean | BookmarksSectionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookmarksSectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookmarksSectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookmarksSectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookmarksSections"
    objects: {
      bookmarks: Prisma.$BookmarksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookmarksSections"]>
    composites: {}
  }

  type BookmarksSectionsGetPayload<S extends boolean | null | undefined | BookmarksSectionsDefaultArgs> = $Result.GetResult<Prisma.$BookmarksSectionsPayload, S>

  type BookmarksSectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarksSectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarksSectionsCountAggregateInputType | true
    }

  export interface BookmarksSectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookmarksSections'], meta: { name: 'BookmarksSections' } }
    /**
     * Find zero or one BookmarksSections that matches the filter.
     * @param {BookmarksSectionsFindUniqueArgs} args - Arguments to find a BookmarksSections
     * @example
     * // Get one BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarksSectionsFindUniqueArgs>(args: SelectSubset<T, BookmarksSectionsFindUniqueArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookmarksSections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarksSectionsFindUniqueOrThrowArgs} args - Arguments to find a BookmarksSections
     * @example
     * // Get one BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarksSectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarksSectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarksSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksSectionsFindFirstArgs} args - Arguments to find a BookmarksSections
     * @example
     * // Get one BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarksSectionsFindFirstArgs>(args?: SelectSubset<T, BookmarksSectionsFindFirstArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookmarksSections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksSectionsFindFirstOrThrowArgs} args - Arguments to find a BookmarksSections
     * @example
     * // Get one BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarksSectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarksSectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookmarksSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksSectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.findMany()
     * 
     * // Get first 10 BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarksSectionsWithIdOnly = await prisma.bookmarksSections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarksSectionsFindManyArgs>(args?: SelectSubset<T, BookmarksSectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookmarksSections.
     * @param {BookmarksSectionsCreateArgs} args - Arguments to create a BookmarksSections.
     * @example
     * // Create one BookmarksSections
     * const BookmarksSections = await prisma.bookmarksSections.create({
     *   data: {
     *     // ... data to create a BookmarksSections
     *   }
     * })
     * 
     */
    create<T extends BookmarksSectionsCreateArgs>(args: SelectSubset<T, BookmarksSectionsCreateArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookmarksSections.
     * @param {BookmarksSectionsCreateManyArgs} args - Arguments to create many BookmarksSections.
     * @example
     * // Create many BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarksSectionsCreateManyArgs>(args?: SelectSubset<T, BookmarksSectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookmarksSections and returns the data saved in the database.
     * @param {BookmarksSectionsCreateManyAndReturnArgs} args - Arguments to create many BookmarksSections.
     * @example
     * // Create many BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookmarksSections and only return the `id`
     * const bookmarksSectionsWithIdOnly = await prisma.bookmarksSections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarksSectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarksSectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookmarksSections.
     * @param {BookmarksSectionsDeleteArgs} args - Arguments to delete one BookmarksSections.
     * @example
     * // Delete one BookmarksSections
     * const BookmarksSections = await prisma.bookmarksSections.delete({
     *   where: {
     *     // ... filter to delete one BookmarksSections
     *   }
     * })
     * 
     */
    delete<T extends BookmarksSectionsDeleteArgs>(args: SelectSubset<T, BookmarksSectionsDeleteArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookmarksSections.
     * @param {BookmarksSectionsUpdateArgs} args - Arguments to update one BookmarksSections.
     * @example
     * // Update one BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarksSectionsUpdateArgs>(args: SelectSubset<T, BookmarksSectionsUpdateArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookmarksSections.
     * @param {BookmarksSectionsDeleteManyArgs} args - Arguments to filter BookmarksSections to delete.
     * @example
     * // Delete a few BookmarksSections
     * const { count } = await prisma.bookmarksSections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarksSectionsDeleteManyArgs>(args?: SelectSubset<T, BookmarksSectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarksSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksSectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarksSectionsUpdateManyArgs>(args: SelectSubset<T, BookmarksSectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarksSections and returns the data updated in the database.
     * @param {BookmarksSectionsUpdateManyAndReturnArgs} args - Arguments to update many BookmarksSections.
     * @example
     * // Update many BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookmarksSections and only return the `id`
     * const bookmarksSectionsWithIdOnly = await prisma.bookmarksSections.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarksSectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarksSectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookmarksSections.
     * @param {BookmarksSectionsUpsertArgs} args - Arguments to update or create a BookmarksSections.
     * @example
     * // Update or create a BookmarksSections
     * const bookmarksSections = await prisma.bookmarksSections.upsert({
     *   create: {
     *     // ... data to create a BookmarksSections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookmarksSections we want to update
     *   }
     * })
     */
    upsert<T extends BookmarksSectionsUpsertArgs>(args: SelectSubset<T, BookmarksSectionsUpsertArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookmarksSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksSectionsCountArgs} args - Arguments to filter BookmarksSections to count.
     * @example
     * // Count the number of BookmarksSections
     * const count = await prisma.bookmarksSections.count({
     *   where: {
     *     // ... the filter for the BookmarksSections we want to count
     *   }
     * })
    **/
    count<T extends BookmarksSectionsCountArgs>(
      args?: Subset<T, BookmarksSectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarksSectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookmarksSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksSectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarksSectionsAggregateArgs>(args: Subset<T, BookmarksSectionsAggregateArgs>): Prisma.PrismaPromise<GetBookmarksSectionsAggregateType<T>>

    /**
     * Group by BookmarksSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksSectionsGroupByArgs} args - Group by arguments.
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
      T extends BookmarksSectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarksSectionsGroupByArgs['orderBy'] }
        : { orderBy?: BookmarksSectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarksSectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarksSectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookmarksSections model
   */
  readonly fields: BookmarksSectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookmarksSections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarksSectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookmarks<T extends BookmarksSections$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, BookmarksSections$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BookmarksSections model
   */
  interface BookmarksSectionsFieldRefs {
    readonly id: FieldRef<"BookmarksSections", 'String'>
    readonly name: FieldRef<"BookmarksSections", 'String'>
    readonly userId: FieldRef<"BookmarksSections", 'String'>
    readonly createdAt: FieldRef<"BookmarksSections", 'DateTime'>
    readonly updatedAt: FieldRef<"BookmarksSections", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookmarksSections findUnique
   */
  export type BookmarksSectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * Filter, which BookmarksSections to fetch.
     */
    where: BookmarksSectionsWhereUniqueInput
  }

  /**
   * BookmarksSections findUniqueOrThrow
   */
  export type BookmarksSectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * Filter, which BookmarksSections to fetch.
     */
    where: BookmarksSectionsWhereUniqueInput
  }

  /**
   * BookmarksSections findFirst
   */
  export type BookmarksSectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * Filter, which BookmarksSections to fetch.
     */
    where?: BookmarksSectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarksSections to fetch.
     */
    orderBy?: BookmarksSectionsOrderByWithRelationInput | BookmarksSectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarksSections.
     */
    cursor?: BookmarksSectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarksSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarksSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarksSections.
     */
    distinct?: BookmarksSectionsScalarFieldEnum | BookmarksSectionsScalarFieldEnum[]
  }

  /**
   * BookmarksSections findFirstOrThrow
   */
  export type BookmarksSectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * Filter, which BookmarksSections to fetch.
     */
    where?: BookmarksSectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarksSections to fetch.
     */
    orderBy?: BookmarksSectionsOrderByWithRelationInput | BookmarksSectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarksSections.
     */
    cursor?: BookmarksSectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarksSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarksSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarksSections.
     */
    distinct?: BookmarksSectionsScalarFieldEnum | BookmarksSectionsScalarFieldEnum[]
  }

  /**
   * BookmarksSections findMany
   */
  export type BookmarksSectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * Filter, which BookmarksSections to fetch.
     */
    where?: BookmarksSectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarksSections to fetch.
     */
    orderBy?: BookmarksSectionsOrderByWithRelationInput | BookmarksSectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookmarksSections.
     */
    cursor?: BookmarksSectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarksSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarksSections.
     */
    skip?: number
    distinct?: BookmarksSectionsScalarFieldEnum | BookmarksSectionsScalarFieldEnum[]
  }

  /**
   * BookmarksSections create
   */
  export type BookmarksSectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a BookmarksSections.
     */
    data: XOR<BookmarksSectionsCreateInput, BookmarksSectionsUncheckedCreateInput>
  }

  /**
   * BookmarksSections createMany
   */
  export type BookmarksSectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookmarksSections.
     */
    data: BookmarksSectionsCreateManyInput | BookmarksSectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookmarksSections createManyAndReturn
   */
  export type BookmarksSectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * The data used to create many BookmarksSections.
     */
    data: BookmarksSectionsCreateManyInput | BookmarksSectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookmarksSections update
   */
  export type BookmarksSectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a BookmarksSections.
     */
    data: XOR<BookmarksSectionsUpdateInput, BookmarksSectionsUncheckedUpdateInput>
    /**
     * Choose, which BookmarksSections to update.
     */
    where: BookmarksSectionsWhereUniqueInput
  }

  /**
   * BookmarksSections updateMany
   */
  export type BookmarksSectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookmarksSections.
     */
    data: XOR<BookmarksSectionsUpdateManyMutationInput, BookmarksSectionsUncheckedUpdateManyInput>
    /**
     * Filter which BookmarksSections to update
     */
    where?: BookmarksSectionsWhereInput
    /**
     * Limit how many BookmarksSections to update.
     */
    limit?: number
  }

  /**
   * BookmarksSections updateManyAndReturn
   */
  export type BookmarksSectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * The data used to update BookmarksSections.
     */
    data: XOR<BookmarksSectionsUpdateManyMutationInput, BookmarksSectionsUncheckedUpdateManyInput>
    /**
     * Filter which BookmarksSections to update
     */
    where?: BookmarksSectionsWhereInput
    /**
     * Limit how many BookmarksSections to update.
     */
    limit?: number
  }

  /**
   * BookmarksSections upsert
   */
  export type BookmarksSectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the BookmarksSections to update in case it exists.
     */
    where: BookmarksSectionsWhereUniqueInput
    /**
     * In case the BookmarksSections found by the `where` argument doesn't exist, create a new BookmarksSections with this data.
     */
    create: XOR<BookmarksSectionsCreateInput, BookmarksSectionsUncheckedCreateInput>
    /**
     * In case the BookmarksSections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarksSectionsUpdateInput, BookmarksSectionsUncheckedUpdateInput>
  }

  /**
   * BookmarksSections delete
   */
  export type BookmarksSectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
    /**
     * Filter which BookmarksSections to delete.
     */
    where: BookmarksSectionsWhereUniqueInput
  }

  /**
   * BookmarksSections deleteMany
   */
  export type BookmarksSectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarksSections to delete
     */
    where?: BookmarksSectionsWhereInput
    /**
     * Limit how many BookmarksSections to delete.
     */
    limit?: number
  }

  /**
   * BookmarksSections.bookmarks
   */
  export type BookmarksSections$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    where?: BookmarksWhereInput
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    cursor?: BookmarksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * BookmarksSections without action
   */
  export type BookmarksSectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarksSections
     */
    select?: BookmarksSectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarksSections
     */
    omit?: BookmarksSectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksSectionsInclude<ExtArgs> | null
  }


  /**
   * Model Bookmarks
   */

  export type AggregateBookmarks = {
    _count: BookmarksCountAggregateOutputType | null
    _min: BookmarksMinAggregateOutputType | null
    _max: BookmarksMaxAggregateOutputType | null
  }

  export type BookmarksMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    description: string | null
    sectionId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarksMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    description: string | null
    sectionId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarksCountAggregateOutputType = {
    id: number
    title: number
    url: number
    description: number
    sectionId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookmarksMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    description?: true
    sectionId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarksMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    description?: true
    sectionId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarksCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    description?: true
    sectionId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookmarksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to aggregate.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarksMaxAggregateInputType
  }

  export type GetBookmarksAggregateType<T extends BookmarksAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarks[P]>
      : GetScalarType<T[P], AggregateBookmarks[P]>
  }




  export type BookmarksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarksWhereInput
    orderBy?: BookmarksOrderByWithAggregationInput | BookmarksOrderByWithAggregationInput[]
    by: BookmarksScalarFieldEnum[] | BookmarksScalarFieldEnum
    having?: BookmarksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarksCountAggregateInputType | true
    _min?: BookmarksMinAggregateInputType
    _max?: BookmarksMaxAggregateInputType
  }

  export type BookmarksGroupByOutputType = {
    id: string
    title: string
    url: string
    description: string | null
    sectionId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BookmarksCountAggregateOutputType | null
    _min: BookmarksMinAggregateOutputType | null
    _max: BookmarksMaxAggregateOutputType | null
  }

  type GetBookmarksGroupByPayload<T extends BookmarksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarksGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarksGroupByOutputType[P]>
        }
      >
    >


  export type BookmarksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    sectionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | BookmarksSectionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarks"]>

  export type BookmarksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    sectionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | BookmarksSectionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarks"]>

  export type BookmarksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    sectionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    section?: boolean | BookmarksSectionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarks"]>

  export type BookmarksSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    description?: boolean
    sectionId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookmarksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "description" | "sectionId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["bookmarks"]>
  export type BookmarksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | BookmarksSectionsDefaultArgs<ExtArgs>
  }
  export type BookmarksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | BookmarksSectionsDefaultArgs<ExtArgs>
  }
  export type BookmarksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | BookmarksSectionsDefaultArgs<ExtArgs>
  }

  export type $BookmarksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmarks"
    objects: {
      section: Prisma.$BookmarksSectionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      description: string | null
      sectionId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookmarks"]>
    composites: {}
  }

  type BookmarksGetPayload<S extends boolean | null | undefined | BookmarksDefaultArgs> = $Result.GetResult<Prisma.$BookmarksPayload, S>

  type BookmarksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarksCountAggregateInputType | true
    }

  export interface BookmarksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmarks'], meta: { name: 'Bookmarks' } }
    /**
     * Find zero or one Bookmarks that matches the filter.
     * @param {BookmarksFindUniqueArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarksFindUniqueArgs>(args: SelectSubset<T, BookmarksFindUniqueArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmarks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarksFindUniqueOrThrowArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarksFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksFindFirstArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarksFindFirstArgs>(args?: SelectSubset<T, BookmarksFindFirstArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmarks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksFindFirstOrThrowArgs} args - Arguments to find a Bookmarks
     * @example
     * // Get one Bookmarks
     * const bookmarks = await prisma.bookmarks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarksFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmarks.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmarks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarksWithIdOnly = await prisma.bookmarks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarksFindManyArgs>(args?: SelectSubset<T, BookmarksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmarks.
     * @param {BookmarksCreateArgs} args - Arguments to create a Bookmarks.
     * @example
     * // Create one Bookmarks
     * const Bookmarks = await prisma.bookmarks.create({
     *   data: {
     *     // ... data to create a Bookmarks
     *   }
     * })
     * 
     */
    create<T extends BookmarksCreateArgs>(args: SelectSubset<T, BookmarksCreateArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarksCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmarks = await prisma.bookmarks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarksCreateManyArgs>(args?: SelectSubset<T, BookmarksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarksCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmarks = await prisma.bookmarks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarksWithIdOnly = await prisma.bookmarks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarksCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmarks.
     * @param {BookmarksDeleteArgs} args - Arguments to delete one Bookmarks.
     * @example
     * // Delete one Bookmarks
     * const Bookmarks = await prisma.bookmarks.delete({
     *   where: {
     *     // ... filter to delete one Bookmarks
     *   }
     * })
     * 
     */
    delete<T extends BookmarksDeleteArgs>(args: SelectSubset<T, BookmarksDeleteArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmarks.
     * @param {BookmarksUpdateArgs} args - Arguments to update one Bookmarks.
     * @example
     * // Update one Bookmarks
     * const bookmarks = await prisma.bookmarks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarksUpdateArgs>(args: SelectSubset<T, BookmarksUpdateArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarksDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmarks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarksDeleteManyArgs>(args?: SelectSubset<T, BookmarksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmarks = await prisma.bookmarks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarksUpdateManyArgs>(args: SelectSubset<T, BookmarksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarksUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmarks = await prisma.bookmarks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `id`
     * const bookmarksWithIdOnly = await prisma.bookmarks.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarksUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmarks.
     * @param {BookmarksUpsertArgs} args - Arguments to update or create a Bookmarks.
     * @example
     * // Update or create a Bookmarks
     * const bookmarks = await prisma.bookmarks.upsert({
     *   create: {
     *     // ... data to create a Bookmarks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmarks we want to update
     *   }
     * })
     */
    upsert<T extends BookmarksUpsertArgs>(args: SelectSubset<T, BookmarksUpsertArgs<ExtArgs>>): Prisma__BookmarksClient<$Result.GetResult<Prisma.$BookmarksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmarks.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarksCountArgs>(
      args?: Subset<T, BookmarksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarksAggregateArgs>(args: Subset<T, BookmarksAggregateArgs>): Prisma.PrismaPromise<GetBookmarksAggregateType<T>>

    /**
     * Group by Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarksGroupByArgs} args - Group by arguments.
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
      T extends BookmarksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarksGroupByArgs['orderBy'] }
        : { orderBy?: BookmarksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmarks model
   */
  readonly fields: BookmarksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmarks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends BookmarksSectionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookmarksSectionsDefaultArgs<ExtArgs>>): Prisma__BookmarksSectionsClient<$Result.GetResult<Prisma.$BookmarksSectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bookmarks model
   */
  interface BookmarksFieldRefs {
    readonly id: FieldRef<"Bookmarks", 'String'>
    readonly title: FieldRef<"Bookmarks", 'String'>
    readonly url: FieldRef<"Bookmarks", 'String'>
    readonly description: FieldRef<"Bookmarks", 'String'>
    readonly sectionId: FieldRef<"Bookmarks", 'String'>
    readonly userId: FieldRef<"Bookmarks", 'String'>
    readonly createdAt: FieldRef<"Bookmarks", 'DateTime'>
    readonly updatedAt: FieldRef<"Bookmarks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmarks findUnique
   */
  export type BookmarksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks findUniqueOrThrow
   */
  export type BookmarksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks findFirst
   */
  export type BookmarksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * Bookmarks findFirstOrThrow
   */
  export type BookmarksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * Bookmarks findMany
   */
  export type BookmarksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarksOrderByWithRelationInput | BookmarksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarksScalarFieldEnum | BookmarksScalarFieldEnum[]
  }

  /**
   * Bookmarks create
   */
  export type BookmarksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmarks.
     */
    data: XOR<BookmarksCreateInput, BookmarksUncheckedCreateInput>
  }

  /**
   * Bookmarks createMany
   */
  export type BookmarksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarksCreateManyInput | BookmarksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmarks createManyAndReturn
   */
  export type BookmarksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarksCreateManyInput | BookmarksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmarks update
   */
  export type BookmarksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmarks.
     */
    data: XOR<BookmarksUpdateInput, BookmarksUncheckedUpdateInput>
    /**
     * Choose, which Bookmarks to update.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks updateMany
   */
  export type BookmarksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarksUpdateManyMutationInput, BookmarksUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarksWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
  }

  /**
   * Bookmarks updateManyAndReturn
   */
  export type BookmarksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarksUpdateManyMutationInput, BookmarksUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarksWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmarks upsert
   */
  export type BookmarksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmarks to update in case it exists.
     */
    where: BookmarksWhereUniqueInput
    /**
     * In case the Bookmarks found by the `where` argument doesn't exist, create a new Bookmarks with this data.
     */
    create: XOR<BookmarksCreateInput, BookmarksUncheckedCreateInput>
    /**
     * In case the Bookmarks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarksUpdateInput, BookmarksUncheckedUpdateInput>
  }

  /**
   * Bookmarks delete
   */
  export type BookmarksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
    /**
     * Filter which Bookmarks to delete.
     */
    where: BookmarksWhereUniqueInput
  }

  /**
   * Bookmarks deleteMany
   */
  export type BookmarksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarksWhereInput
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number
  }

  /**
   * Bookmarks without action
   */
  export type BookmarksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmarks
     */
    select?: BookmarksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmarks
     */
    omit?: BookmarksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarksInclude<ExtArgs> | null
  }


  /**
   * Model StickyNotes
   */

  export type AggregateStickyNotes = {
    _count: StickyNotesCountAggregateOutputType | null
    _min: StickyNotesMinAggregateOutputType | null
    _max: StickyNotesMaxAggregateOutputType | null
  }

  export type StickyNotesMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    color: string | null
    pinned: boolean | null
    archived: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StickyNotesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    color: string | null
    pinned: boolean | null
    archived: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StickyNotesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    color: number
    pinned: number
    archived: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StickyNotesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    color?: true
    pinned?: true
    archived?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StickyNotesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    color?: true
    pinned?: true
    archived?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StickyNotesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    color?: true
    pinned?: true
    archived?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StickyNotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StickyNotes to aggregate.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StickyNotes
    **/
    _count?: true | StickyNotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StickyNotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StickyNotesMaxAggregateInputType
  }

  export type GetStickyNotesAggregateType<T extends StickyNotesAggregateArgs> = {
        [P in keyof T & keyof AggregateStickyNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStickyNotes[P]>
      : GetScalarType<T[P], AggregateStickyNotes[P]>
  }




  export type StickyNotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StickyNotesWhereInput
    orderBy?: StickyNotesOrderByWithAggregationInput | StickyNotesOrderByWithAggregationInput[]
    by: StickyNotesScalarFieldEnum[] | StickyNotesScalarFieldEnum
    having?: StickyNotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StickyNotesCountAggregateInputType | true
    _min?: StickyNotesMinAggregateInputType
    _max?: StickyNotesMaxAggregateInputType
  }

  export type StickyNotesGroupByOutputType = {
    id: string
    title: string | null
    content: string | null
    color: string | null
    pinned: boolean
    archived: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: StickyNotesCountAggregateOutputType | null
    _min: StickyNotesMinAggregateOutputType | null
    _max: StickyNotesMaxAggregateOutputType | null
  }

  type GetStickyNotesGroupByPayload<T extends StickyNotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StickyNotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StickyNotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StickyNotesGroupByOutputType[P]>
            : GetScalarType<T[P], StickyNotesGroupByOutputType[P]>
        }
      >
    >


  export type StickyNotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    color?: boolean
    pinned?: boolean
    archived?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stickyNotes"]>

  export type StickyNotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    color?: boolean
    pinned?: boolean
    archived?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stickyNotes"]>

  export type StickyNotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    color?: boolean
    pinned?: boolean
    archived?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stickyNotes"]>

  export type StickyNotesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    color?: boolean
    pinned?: boolean
    archived?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StickyNotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "color" | "pinned" | "archived" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["stickyNotes"]>

  export type $StickyNotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StickyNotes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      content: string | null
      color: string | null
      pinned: boolean
      archived: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stickyNotes"]>
    composites: {}
  }

  type StickyNotesGetPayload<S extends boolean | null | undefined | StickyNotesDefaultArgs> = $Result.GetResult<Prisma.$StickyNotesPayload, S>

  type StickyNotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StickyNotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StickyNotesCountAggregateInputType | true
    }

  export interface StickyNotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StickyNotes'], meta: { name: 'StickyNotes' } }
    /**
     * Find zero or one StickyNotes that matches the filter.
     * @param {StickyNotesFindUniqueArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StickyNotesFindUniqueArgs>(args: SelectSubset<T, StickyNotesFindUniqueArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StickyNotes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StickyNotesFindUniqueOrThrowArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StickyNotesFindUniqueOrThrowArgs>(args: SelectSubset<T, StickyNotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StickyNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesFindFirstArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StickyNotesFindFirstArgs>(args?: SelectSubset<T, StickyNotesFindFirstArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StickyNotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesFindFirstOrThrowArgs} args - Arguments to find a StickyNotes
     * @example
     * // Get one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StickyNotesFindFirstOrThrowArgs>(args?: SelectSubset<T, StickyNotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StickyNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findMany()
     * 
     * // Get first 10 StickyNotes
     * const stickyNotes = await prisma.stickyNotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stickyNotesWithIdOnly = await prisma.stickyNotes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StickyNotesFindManyArgs>(args?: SelectSubset<T, StickyNotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StickyNotes.
     * @param {StickyNotesCreateArgs} args - Arguments to create a StickyNotes.
     * @example
     * // Create one StickyNotes
     * const StickyNotes = await prisma.stickyNotes.create({
     *   data: {
     *     // ... data to create a StickyNotes
     *   }
     * })
     * 
     */
    create<T extends StickyNotesCreateArgs>(args: SelectSubset<T, StickyNotesCreateArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StickyNotes.
     * @param {StickyNotesCreateManyArgs} args - Arguments to create many StickyNotes.
     * @example
     * // Create many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StickyNotesCreateManyArgs>(args?: SelectSubset<T, StickyNotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StickyNotes and returns the data saved in the database.
     * @param {StickyNotesCreateManyAndReturnArgs} args - Arguments to create many StickyNotes.
     * @example
     * // Create many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StickyNotes and only return the `id`
     * const stickyNotesWithIdOnly = await prisma.stickyNotes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StickyNotesCreateManyAndReturnArgs>(args?: SelectSubset<T, StickyNotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StickyNotes.
     * @param {StickyNotesDeleteArgs} args - Arguments to delete one StickyNotes.
     * @example
     * // Delete one StickyNotes
     * const StickyNotes = await prisma.stickyNotes.delete({
     *   where: {
     *     // ... filter to delete one StickyNotes
     *   }
     * })
     * 
     */
    delete<T extends StickyNotesDeleteArgs>(args: SelectSubset<T, StickyNotesDeleteArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StickyNotes.
     * @param {StickyNotesUpdateArgs} args - Arguments to update one StickyNotes.
     * @example
     * // Update one StickyNotes
     * const stickyNotes = await prisma.stickyNotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StickyNotesUpdateArgs>(args: SelectSubset<T, StickyNotesUpdateArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StickyNotes.
     * @param {StickyNotesDeleteManyArgs} args - Arguments to filter StickyNotes to delete.
     * @example
     * // Delete a few StickyNotes
     * const { count } = await prisma.stickyNotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StickyNotesDeleteManyArgs>(args?: SelectSubset<T, StickyNotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StickyNotesUpdateManyArgs>(args: SelectSubset<T, StickyNotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StickyNotes and returns the data updated in the database.
     * @param {StickyNotesUpdateManyAndReturnArgs} args - Arguments to update many StickyNotes.
     * @example
     * // Update many StickyNotes
     * const stickyNotes = await prisma.stickyNotes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StickyNotes and only return the `id`
     * const stickyNotesWithIdOnly = await prisma.stickyNotes.updateManyAndReturn({
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
    updateManyAndReturn<T extends StickyNotesUpdateManyAndReturnArgs>(args: SelectSubset<T, StickyNotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StickyNotes.
     * @param {StickyNotesUpsertArgs} args - Arguments to update or create a StickyNotes.
     * @example
     * // Update or create a StickyNotes
     * const stickyNotes = await prisma.stickyNotes.upsert({
     *   create: {
     *     // ... data to create a StickyNotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StickyNotes we want to update
     *   }
     * })
     */
    upsert<T extends StickyNotesUpsertArgs>(args: SelectSubset<T, StickyNotesUpsertArgs<ExtArgs>>): Prisma__StickyNotesClient<$Result.GetResult<Prisma.$StickyNotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesCountArgs} args - Arguments to filter StickyNotes to count.
     * @example
     * // Count the number of StickyNotes
     * const count = await prisma.stickyNotes.count({
     *   where: {
     *     // ... the filter for the StickyNotes we want to count
     *   }
     * })
    **/
    count<T extends StickyNotesCountArgs>(
      args?: Subset<T, StickyNotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StickyNotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StickyNotesAggregateArgs>(args: Subset<T, StickyNotesAggregateArgs>): Prisma.PrismaPromise<GetStickyNotesAggregateType<T>>

    /**
     * Group by StickyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StickyNotesGroupByArgs} args - Group by arguments.
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
      T extends StickyNotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StickyNotesGroupByArgs['orderBy'] }
        : { orderBy?: StickyNotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StickyNotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStickyNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StickyNotes model
   */
  readonly fields: StickyNotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StickyNotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StickyNotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StickyNotes model
   */
  interface StickyNotesFieldRefs {
    readonly id: FieldRef<"StickyNotes", 'String'>
    readonly title: FieldRef<"StickyNotes", 'String'>
    readonly content: FieldRef<"StickyNotes", 'String'>
    readonly color: FieldRef<"StickyNotes", 'String'>
    readonly pinned: FieldRef<"StickyNotes", 'Boolean'>
    readonly archived: FieldRef<"StickyNotes", 'Boolean'>
    readonly userId: FieldRef<"StickyNotes", 'String'>
    readonly createdAt: FieldRef<"StickyNotes", 'DateTime'>
    readonly updatedAt: FieldRef<"StickyNotes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StickyNotes findUnique
   */
  export type StickyNotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes findUniqueOrThrow
   */
  export type StickyNotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes findFirst
   */
  export type StickyNotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StickyNotes.
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StickyNotes.
     */
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * StickyNotes findFirstOrThrow
   */
  export type StickyNotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StickyNotes.
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StickyNotes.
     */
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * StickyNotes findMany
   */
  export type StickyNotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Filter, which StickyNotes to fetch.
     */
    where?: StickyNotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StickyNotes to fetch.
     */
    orderBy?: StickyNotesOrderByWithRelationInput | StickyNotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StickyNotes.
     */
    cursor?: StickyNotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StickyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StickyNotes.
     */
    skip?: number
    distinct?: StickyNotesScalarFieldEnum | StickyNotesScalarFieldEnum[]
  }

  /**
   * StickyNotes create
   */
  export type StickyNotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * The data needed to create a StickyNotes.
     */
    data: XOR<StickyNotesCreateInput, StickyNotesUncheckedCreateInput>
  }

  /**
   * StickyNotes createMany
   */
  export type StickyNotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StickyNotes.
     */
    data: StickyNotesCreateManyInput | StickyNotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StickyNotes createManyAndReturn
   */
  export type StickyNotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * The data used to create many StickyNotes.
     */
    data: StickyNotesCreateManyInput | StickyNotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StickyNotes update
   */
  export type StickyNotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * The data needed to update a StickyNotes.
     */
    data: XOR<StickyNotesUpdateInput, StickyNotesUncheckedUpdateInput>
    /**
     * Choose, which StickyNotes to update.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes updateMany
   */
  export type StickyNotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StickyNotes.
     */
    data: XOR<StickyNotesUpdateManyMutationInput, StickyNotesUncheckedUpdateManyInput>
    /**
     * Filter which StickyNotes to update
     */
    where?: StickyNotesWhereInput
    /**
     * Limit how many StickyNotes to update.
     */
    limit?: number
  }

  /**
   * StickyNotes updateManyAndReturn
   */
  export type StickyNotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * The data used to update StickyNotes.
     */
    data: XOR<StickyNotesUpdateManyMutationInput, StickyNotesUncheckedUpdateManyInput>
    /**
     * Filter which StickyNotes to update
     */
    where?: StickyNotesWhereInput
    /**
     * Limit how many StickyNotes to update.
     */
    limit?: number
  }

  /**
   * StickyNotes upsert
   */
  export type StickyNotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * The filter to search for the StickyNotes to update in case it exists.
     */
    where: StickyNotesWhereUniqueInput
    /**
     * In case the StickyNotes found by the `where` argument doesn't exist, create a new StickyNotes with this data.
     */
    create: XOR<StickyNotesCreateInput, StickyNotesUncheckedCreateInput>
    /**
     * In case the StickyNotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StickyNotesUpdateInput, StickyNotesUncheckedUpdateInput>
  }

  /**
   * StickyNotes delete
   */
  export type StickyNotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
    /**
     * Filter which StickyNotes to delete.
     */
    where: StickyNotesWhereUniqueInput
  }

  /**
   * StickyNotes deleteMany
   */
  export type StickyNotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StickyNotes to delete
     */
    where?: StickyNotesWhereInput
    /**
     * Limit how many StickyNotes to delete.
     */
    limit?: number
  }

  /**
   * StickyNotes without action
   */
  export type StickyNotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StickyNotes
     */
    select?: StickyNotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StickyNotes
     */
    omit?: StickyNotesOmit<ExtArgs> | null
  }


  /**
   * Model ToDoLists
   */

  export type AggregateToDoLists = {
    _count: ToDoListsCountAggregateOutputType | null
    _min: ToDoListsMinAggregateOutputType | null
    _max: ToDoListsMaxAggregateOutputType | null
  }

  export type ToDoListsMinAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToDoListsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToDoListsCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ToDoListsMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToDoListsMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToDoListsCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ToDoListsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDoLists to aggregate.
     */
    where?: ToDoListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoLists to fetch.
     */
    orderBy?: ToDoListsOrderByWithRelationInput | ToDoListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToDoListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToDoLists
    **/
    _count?: true | ToDoListsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToDoListsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToDoListsMaxAggregateInputType
  }

  export type GetToDoListsAggregateType<T extends ToDoListsAggregateArgs> = {
        [P in keyof T & keyof AggregateToDoLists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToDoLists[P]>
      : GetScalarType<T[P], AggregateToDoLists[P]>
  }




  export type ToDoListsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToDoListsWhereInput
    orderBy?: ToDoListsOrderByWithAggregationInput | ToDoListsOrderByWithAggregationInput[]
    by: ToDoListsScalarFieldEnum[] | ToDoListsScalarFieldEnum
    having?: ToDoListsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToDoListsCountAggregateInputType | true
    _min?: ToDoListsMinAggregateInputType
    _max?: ToDoListsMaxAggregateInputType
  }

  export type ToDoListsGroupByOutputType = {
    id: string
    title: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ToDoListsCountAggregateOutputType | null
    _min: ToDoListsMinAggregateOutputType | null
    _max: ToDoListsMaxAggregateOutputType | null
  }

  type GetToDoListsGroupByPayload<T extends ToDoListsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToDoListsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToDoListsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToDoListsGroupByOutputType[P]>
            : GetScalarType<T[P], ToDoListsGroupByOutputType[P]>
        }
      >
    >


  export type ToDoListsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | ToDoLists$itemsArgs<ExtArgs>
    _count?: boolean | ToDoListsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toDoLists"]>

  export type ToDoListsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["toDoLists"]>

  export type ToDoListsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["toDoLists"]>

  export type ToDoListsSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ToDoListsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["toDoLists"]>
  export type ToDoListsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ToDoLists$itemsArgs<ExtArgs>
    _count?: boolean | ToDoListsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToDoListsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ToDoListsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ToDoListsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToDoLists"
    objects: {
      items: Prisma.$ToDoItemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["toDoLists"]>
    composites: {}
  }

  type ToDoListsGetPayload<S extends boolean | null | undefined | ToDoListsDefaultArgs> = $Result.GetResult<Prisma.$ToDoListsPayload, S>

  type ToDoListsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToDoListsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToDoListsCountAggregateInputType | true
    }

  export interface ToDoListsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToDoLists'], meta: { name: 'ToDoLists' } }
    /**
     * Find zero or one ToDoLists that matches the filter.
     * @param {ToDoListsFindUniqueArgs} args - Arguments to find a ToDoLists
     * @example
     * // Get one ToDoLists
     * const toDoLists = await prisma.toDoLists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToDoListsFindUniqueArgs>(args: SelectSubset<T, ToDoListsFindUniqueArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToDoLists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToDoListsFindUniqueOrThrowArgs} args - Arguments to find a ToDoLists
     * @example
     * // Get one ToDoLists
     * const toDoLists = await prisma.toDoLists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToDoListsFindUniqueOrThrowArgs>(args: SelectSubset<T, ToDoListsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToDoLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoListsFindFirstArgs} args - Arguments to find a ToDoLists
     * @example
     * // Get one ToDoLists
     * const toDoLists = await prisma.toDoLists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToDoListsFindFirstArgs>(args?: SelectSubset<T, ToDoListsFindFirstArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToDoLists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoListsFindFirstOrThrowArgs} args - Arguments to find a ToDoLists
     * @example
     * // Get one ToDoLists
     * const toDoLists = await prisma.toDoLists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToDoListsFindFirstOrThrowArgs>(args?: SelectSubset<T, ToDoListsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToDoLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoListsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToDoLists
     * const toDoLists = await prisma.toDoLists.findMany()
     * 
     * // Get first 10 ToDoLists
     * const toDoLists = await prisma.toDoLists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toDoListsWithIdOnly = await prisma.toDoLists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToDoListsFindManyArgs>(args?: SelectSubset<T, ToDoListsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToDoLists.
     * @param {ToDoListsCreateArgs} args - Arguments to create a ToDoLists.
     * @example
     * // Create one ToDoLists
     * const ToDoLists = await prisma.toDoLists.create({
     *   data: {
     *     // ... data to create a ToDoLists
     *   }
     * })
     * 
     */
    create<T extends ToDoListsCreateArgs>(args: SelectSubset<T, ToDoListsCreateArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToDoLists.
     * @param {ToDoListsCreateManyArgs} args - Arguments to create many ToDoLists.
     * @example
     * // Create many ToDoLists
     * const toDoLists = await prisma.toDoLists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToDoListsCreateManyArgs>(args?: SelectSubset<T, ToDoListsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToDoLists and returns the data saved in the database.
     * @param {ToDoListsCreateManyAndReturnArgs} args - Arguments to create many ToDoLists.
     * @example
     * // Create many ToDoLists
     * const toDoLists = await prisma.toDoLists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToDoLists and only return the `id`
     * const toDoListsWithIdOnly = await prisma.toDoLists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToDoListsCreateManyAndReturnArgs>(args?: SelectSubset<T, ToDoListsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToDoLists.
     * @param {ToDoListsDeleteArgs} args - Arguments to delete one ToDoLists.
     * @example
     * // Delete one ToDoLists
     * const ToDoLists = await prisma.toDoLists.delete({
     *   where: {
     *     // ... filter to delete one ToDoLists
     *   }
     * })
     * 
     */
    delete<T extends ToDoListsDeleteArgs>(args: SelectSubset<T, ToDoListsDeleteArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToDoLists.
     * @param {ToDoListsUpdateArgs} args - Arguments to update one ToDoLists.
     * @example
     * // Update one ToDoLists
     * const toDoLists = await prisma.toDoLists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToDoListsUpdateArgs>(args: SelectSubset<T, ToDoListsUpdateArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToDoLists.
     * @param {ToDoListsDeleteManyArgs} args - Arguments to filter ToDoLists to delete.
     * @example
     * // Delete a few ToDoLists
     * const { count } = await prisma.toDoLists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToDoListsDeleteManyArgs>(args?: SelectSubset<T, ToDoListsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToDoLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoListsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToDoLists
     * const toDoLists = await prisma.toDoLists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToDoListsUpdateManyArgs>(args: SelectSubset<T, ToDoListsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToDoLists and returns the data updated in the database.
     * @param {ToDoListsUpdateManyAndReturnArgs} args - Arguments to update many ToDoLists.
     * @example
     * // Update many ToDoLists
     * const toDoLists = await prisma.toDoLists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToDoLists and only return the `id`
     * const toDoListsWithIdOnly = await prisma.toDoLists.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToDoListsUpdateManyAndReturnArgs>(args: SelectSubset<T, ToDoListsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToDoLists.
     * @param {ToDoListsUpsertArgs} args - Arguments to update or create a ToDoLists.
     * @example
     * // Update or create a ToDoLists
     * const toDoLists = await prisma.toDoLists.upsert({
     *   create: {
     *     // ... data to create a ToDoLists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToDoLists we want to update
     *   }
     * })
     */
    upsert<T extends ToDoListsUpsertArgs>(args: SelectSubset<T, ToDoListsUpsertArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToDoLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoListsCountArgs} args - Arguments to filter ToDoLists to count.
     * @example
     * // Count the number of ToDoLists
     * const count = await prisma.toDoLists.count({
     *   where: {
     *     // ... the filter for the ToDoLists we want to count
     *   }
     * })
    **/
    count<T extends ToDoListsCountArgs>(
      args?: Subset<T, ToDoListsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToDoListsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToDoLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoListsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToDoListsAggregateArgs>(args: Subset<T, ToDoListsAggregateArgs>): Prisma.PrismaPromise<GetToDoListsAggregateType<T>>

    /**
     * Group by ToDoLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoListsGroupByArgs} args - Group by arguments.
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
      T extends ToDoListsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToDoListsGroupByArgs['orderBy'] }
        : { orderBy?: ToDoListsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToDoListsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToDoListsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToDoLists model
   */
  readonly fields: ToDoListsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToDoLists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToDoListsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends ToDoLists$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ToDoLists$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ToDoLists model
   */
  interface ToDoListsFieldRefs {
    readonly id: FieldRef<"ToDoLists", 'String'>
    readonly title: FieldRef<"ToDoLists", 'String'>
    readonly userId: FieldRef<"ToDoLists", 'String'>
    readonly createdAt: FieldRef<"ToDoLists", 'DateTime'>
    readonly updatedAt: FieldRef<"ToDoLists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToDoLists findUnique
   */
  export type ToDoListsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoLists to fetch.
     */
    where: ToDoListsWhereUniqueInput
  }

  /**
   * ToDoLists findUniqueOrThrow
   */
  export type ToDoListsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoLists to fetch.
     */
    where: ToDoListsWhereUniqueInput
  }

  /**
   * ToDoLists findFirst
   */
  export type ToDoListsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoLists to fetch.
     */
    where?: ToDoListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoLists to fetch.
     */
    orderBy?: ToDoListsOrderByWithRelationInput | ToDoListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDoLists.
     */
    cursor?: ToDoListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDoLists.
     */
    distinct?: ToDoListsScalarFieldEnum | ToDoListsScalarFieldEnum[]
  }

  /**
   * ToDoLists findFirstOrThrow
   */
  export type ToDoListsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoLists to fetch.
     */
    where?: ToDoListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoLists to fetch.
     */
    orderBy?: ToDoListsOrderByWithRelationInput | ToDoListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDoLists.
     */
    cursor?: ToDoListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDoLists.
     */
    distinct?: ToDoListsScalarFieldEnum | ToDoListsScalarFieldEnum[]
  }

  /**
   * ToDoLists findMany
   */
  export type ToDoListsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoLists to fetch.
     */
    where?: ToDoListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoLists to fetch.
     */
    orderBy?: ToDoListsOrderByWithRelationInput | ToDoListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToDoLists.
     */
    cursor?: ToDoListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoLists.
     */
    skip?: number
    distinct?: ToDoListsScalarFieldEnum | ToDoListsScalarFieldEnum[]
  }

  /**
   * ToDoLists create
   */
  export type ToDoListsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * The data needed to create a ToDoLists.
     */
    data: XOR<ToDoListsCreateInput, ToDoListsUncheckedCreateInput>
  }

  /**
   * ToDoLists createMany
   */
  export type ToDoListsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToDoLists.
     */
    data: ToDoListsCreateManyInput | ToDoListsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToDoLists createManyAndReturn
   */
  export type ToDoListsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * The data used to create many ToDoLists.
     */
    data: ToDoListsCreateManyInput | ToDoListsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToDoLists update
   */
  export type ToDoListsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * The data needed to update a ToDoLists.
     */
    data: XOR<ToDoListsUpdateInput, ToDoListsUncheckedUpdateInput>
    /**
     * Choose, which ToDoLists to update.
     */
    where: ToDoListsWhereUniqueInput
  }

  /**
   * ToDoLists updateMany
   */
  export type ToDoListsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToDoLists.
     */
    data: XOR<ToDoListsUpdateManyMutationInput, ToDoListsUncheckedUpdateManyInput>
    /**
     * Filter which ToDoLists to update
     */
    where?: ToDoListsWhereInput
    /**
     * Limit how many ToDoLists to update.
     */
    limit?: number
  }

  /**
   * ToDoLists updateManyAndReturn
   */
  export type ToDoListsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * The data used to update ToDoLists.
     */
    data: XOR<ToDoListsUpdateManyMutationInput, ToDoListsUncheckedUpdateManyInput>
    /**
     * Filter which ToDoLists to update
     */
    where?: ToDoListsWhereInput
    /**
     * Limit how many ToDoLists to update.
     */
    limit?: number
  }

  /**
   * ToDoLists upsert
   */
  export type ToDoListsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * The filter to search for the ToDoLists to update in case it exists.
     */
    where: ToDoListsWhereUniqueInput
    /**
     * In case the ToDoLists found by the `where` argument doesn't exist, create a new ToDoLists with this data.
     */
    create: XOR<ToDoListsCreateInput, ToDoListsUncheckedCreateInput>
    /**
     * In case the ToDoLists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToDoListsUpdateInput, ToDoListsUncheckedUpdateInput>
  }

  /**
   * ToDoLists delete
   */
  export type ToDoListsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
    /**
     * Filter which ToDoLists to delete.
     */
    where: ToDoListsWhereUniqueInput
  }

  /**
   * ToDoLists deleteMany
   */
  export type ToDoListsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDoLists to delete
     */
    where?: ToDoListsWhereInput
    /**
     * Limit how many ToDoLists to delete.
     */
    limit?: number
  }

  /**
   * ToDoLists.items
   */
  export type ToDoLists$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    where?: ToDoItemsWhereInput
    orderBy?: ToDoItemsOrderByWithRelationInput | ToDoItemsOrderByWithRelationInput[]
    cursor?: ToDoItemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToDoItemsScalarFieldEnum | ToDoItemsScalarFieldEnum[]
  }

  /**
   * ToDoLists without action
   */
  export type ToDoListsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoLists
     */
    select?: ToDoListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoLists
     */
    omit?: ToDoListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoListsInclude<ExtArgs> | null
  }


  /**
   * Model ToDoItems
   */

  export type AggregateToDoItems = {
    _count: ToDoItemsCountAggregateOutputType | null
    _min: ToDoItemsMinAggregateOutputType | null
    _max: ToDoItemsMaxAggregateOutputType | null
  }

  export type ToDoItemsMinAggregateOutputType = {
    id: string | null
    content: string | null
    completed: boolean | null
    listId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToDoItemsMaxAggregateOutputType = {
    id: string | null
    content: string | null
    completed: boolean | null
    listId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToDoItemsCountAggregateOutputType = {
    id: number
    content: number
    completed: number
    listId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ToDoItemsMinAggregateInputType = {
    id?: true
    content?: true
    completed?: true
    listId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToDoItemsMaxAggregateInputType = {
    id?: true
    content?: true
    completed?: true
    listId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToDoItemsCountAggregateInputType = {
    id?: true
    content?: true
    completed?: true
    listId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ToDoItemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDoItems to aggregate.
     */
    where?: ToDoItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoItems to fetch.
     */
    orderBy?: ToDoItemsOrderByWithRelationInput | ToDoItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToDoItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToDoItems
    **/
    _count?: true | ToDoItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToDoItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToDoItemsMaxAggregateInputType
  }

  export type GetToDoItemsAggregateType<T extends ToDoItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateToDoItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToDoItems[P]>
      : GetScalarType<T[P], AggregateToDoItems[P]>
  }




  export type ToDoItemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToDoItemsWhereInput
    orderBy?: ToDoItemsOrderByWithAggregationInput | ToDoItemsOrderByWithAggregationInput[]
    by: ToDoItemsScalarFieldEnum[] | ToDoItemsScalarFieldEnum
    having?: ToDoItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToDoItemsCountAggregateInputType | true
    _min?: ToDoItemsMinAggregateInputType
    _max?: ToDoItemsMaxAggregateInputType
  }

  export type ToDoItemsGroupByOutputType = {
    id: string
    content: string
    completed: boolean
    listId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ToDoItemsCountAggregateOutputType | null
    _min: ToDoItemsMinAggregateOutputType | null
    _max: ToDoItemsMaxAggregateOutputType | null
  }

  type GetToDoItemsGroupByPayload<T extends ToDoItemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToDoItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToDoItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToDoItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ToDoItemsGroupByOutputType[P]>
        }
      >
    >


  export type ToDoItemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    completed?: boolean
    listId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    list?: boolean | ToDoListsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toDoItems"]>

  export type ToDoItemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    completed?: boolean
    listId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    list?: boolean | ToDoListsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toDoItems"]>

  export type ToDoItemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    completed?: boolean
    listId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    list?: boolean | ToDoListsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toDoItems"]>

  export type ToDoItemsSelectScalar = {
    id?: boolean
    content?: boolean
    completed?: boolean
    listId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ToDoItemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "completed" | "listId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["toDoItems"]>
  export type ToDoItemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ToDoListsDefaultArgs<ExtArgs>
  }
  export type ToDoItemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ToDoListsDefaultArgs<ExtArgs>
  }
  export type ToDoItemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ToDoListsDefaultArgs<ExtArgs>
  }

  export type $ToDoItemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToDoItems"
    objects: {
      list: Prisma.$ToDoListsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      completed: boolean
      listId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["toDoItems"]>
    composites: {}
  }

  type ToDoItemsGetPayload<S extends boolean | null | undefined | ToDoItemsDefaultArgs> = $Result.GetResult<Prisma.$ToDoItemsPayload, S>

  type ToDoItemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToDoItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToDoItemsCountAggregateInputType | true
    }

  export interface ToDoItemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToDoItems'], meta: { name: 'ToDoItems' } }
    /**
     * Find zero or one ToDoItems that matches the filter.
     * @param {ToDoItemsFindUniqueArgs} args - Arguments to find a ToDoItems
     * @example
     * // Get one ToDoItems
     * const toDoItems = await prisma.toDoItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToDoItemsFindUniqueArgs>(args: SelectSubset<T, ToDoItemsFindUniqueArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToDoItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToDoItemsFindUniqueOrThrowArgs} args - Arguments to find a ToDoItems
     * @example
     * // Get one ToDoItems
     * const toDoItems = await prisma.toDoItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToDoItemsFindUniqueOrThrowArgs>(args: SelectSubset<T, ToDoItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToDoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoItemsFindFirstArgs} args - Arguments to find a ToDoItems
     * @example
     * // Get one ToDoItems
     * const toDoItems = await prisma.toDoItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToDoItemsFindFirstArgs>(args?: SelectSubset<T, ToDoItemsFindFirstArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToDoItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoItemsFindFirstOrThrowArgs} args - Arguments to find a ToDoItems
     * @example
     * // Get one ToDoItems
     * const toDoItems = await prisma.toDoItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToDoItemsFindFirstOrThrowArgs>(args?: SelectSubset<T, ToDoItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToDoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToDoItems
     * const toDoItems = await prisma.toDoItems.findMany()
     * 
     * // Get first 10 ToDoItems
     * const toDoItems = await prisma.toDoItems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toDoItemsWithIdOnly = await prisma.toDoItems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToDoItemsFindManyArgs>(args?: SelectSubset<T, ToDoItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToDoItems.
     * @param {ToDoItemsCreateArgs} args - Arguments to create a ToDoItems.
     * @example
     * // Create one ToDoItems
     * const ToDoItems = await prisma.toDoItems.create({
     *   data: {
     *     // ... data to create a ToDoItems
     *   }
     * })
     * 
     */
    create<T extends ToDoItemsCreateArgs>(args: SelectSubset<T, ToDoItemsCreateArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToDoItems.
     * @param {ToDoItemsCreateManyArgs} args - Arguments to create many ToDoItems.
     * @example
     * // Create many ToDoItems
     * const toDoItems = await prisma.toDoItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToDoItemsCreateManyArgs>(args?: SelectSubset<T, ToDoItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToDoItems and returns the data saved in the database.
     * @param {ToDoItemsCreateManyAndReturnArgs} args - Arguments to create many ToDoItems.
     * @example
     * // Create many ToDoItems
     * const toDoItems = await prisma.toDoItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToDoItems and only return the `id`
     * const toDoItemsWithIdOnly = await prisma.toDoItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToDoItemsCreateManyAndReturnArgs>(args?: SelectSubset<T, ToDoItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToDoItems.
     * @param {ToDoItemsDeleteArgs} args - Arguments to delete one ToDoItems.
     * @example
     * // Delete one ToDoItems
     * const ToDoItems = await prisma.toDoItems.delete({
     *   where: {
     *     // ... filter to delete one ToDoItems
     *   }
     * })
     * 
     */
    delete<T extends ToDoItemsDeleteArgs>(args: SelectSubset<T, ToDoItemsDeleteArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToDoItems.
     * @param {ToDoItemsUpdateArgs} args - Arguments to update one ToDoItems.
     * @example
     * // Update one ToDoItems
     * const toDoItems = await prisma.toDoItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToDoItemsUpdateArgs>(args: SelectSubset<T, ToDoItemsUpdateArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToDoItems.
     * @param {ToDoItemsDeleteManyArgs} args - Arguments to filter ToDoItems to delete.
     * @example
     * // Delete a few ToDoItems
     * const { count } = await prisma.toDoItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToDoItemsDeleteManyArgs>(args?: SelectSubset<T, ToDoItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToDoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToDoItems
     * const toDoItems = await prisma.toDoItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToDoItemsUpdateManyArgs>(args: SelectSubset<T, ToDoItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToDoItems and returns the data updated in the database.
     * @param {ToDoItemsUpdateManyAndReturnArgs} args - Arguments to update many ToDoItems.
     * @example
     * // Update many ToDoItems
     * const toDoItems = await prisma.toDoItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToDoItems and only return the `id`
     * const toDoItemsWithIdOnly = await prisma.toDoItems.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToDoItemsUpdateManyAndReturnArgs>(args: SelectSubset<T, ToDoItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToDoItems.
     * @param {ToDoItemsUpsertArgs} args - Arguments to update or create a ToDoItems.
     * @example
     * // Update or create a ToDoItems
     * const toDoItems = await prisma.toDoItems.upsert({
     *   create: {
     *     // ... data to create a ToDoItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToDoItems we want to update
     *   }
     * })
     */
    upsert<T extends ToDoItemsUpsertArgs>(args: SelectSubset<T, ToDoItemsUpsertArgs<ExtArgs>>): Prisma__ToDoItemsClient<$Result.GetResult<Prisma.$ToDoItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToDoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoItemsCountArgs} args - Arguments to filter ToDoItems to count.
     * @example
     * // Count the number of ToDoItems
     * const count = await prisma.toDoItems.count({
     *   where: {
     *     // ... the filter for the ToDoItems we want to count
     *   }
     * })
    **/
    count<T extends ToDoItemsCountArgs>(
      args?: Subset<T, ToDoItemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToDoItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToDoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToDoItemsAggregateArgs>(args: Subset<T, ToDoItemsAggregateArgs>): Prisma.PrismaPromise<GetToDoItemsAggregateType<T>>

    /**
     * Group by ToDoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToDoItemsGroupByArgs} args - Group by arguments.
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
      T extends ToDoItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToDoItemsGroupByArgs['orderBy'] }
        : { orderBy?: ToDoItemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToDoItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToDoItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToDoItems model
   */
  readonly fields: ToDoItemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToDoItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToDoItemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ToDoListsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToDoListsDefaultArgs<ExtArgs>>): Prisma__ToDoListsClient<$Result.GetResult<Prisma.$ToDoListsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ToDoItems model
   */
  interface ToDoItemsFieldRefs {
    readonly id: FieldRef<"ToDoItems", 'String'>
    readonly content: FieldRef<"ToDoItems", 'String'>
    readonly completed: FieldRef<"ToDoItems", 'Boolean'>
    readonly listId: FieldRef<"ToDoItems", 'String'>
    readonly userId: FieldRef<"ToDoItems", 'String'>
    readonly createdAt: FieldRef<"ToDoItems", 'DateTime'>
    readonly updatedAt: FieldRef<"ToDoItems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToDoItems findUnique
   */
  export type ToDoItemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoItems to fetch.
     */
    where: ToDoItemsWhereUniqueInput
  }

  /**
   * ToDoItems findUniqueOrThrow
   */
  export type ToDoItemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoItems to fetch.
     */
    where: ToDoItemsWhereUniqueInput
  }

  /**
   * ToDoItems findFirst
   */
  export type ToDoItemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoItems to fetch.
     */
    where?: ToDoItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoItems to fetch.
     */
    orderBy?: ToDoItemsOrderByWithRelationInput | ToDoItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDoItems.
     */
    cursor?: ToDoItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDoItems.
     */
    distinct?: ToDoItemsScalarFieldEnum | ToDoItemsScalarFieldEnum[]
  }

  /**
   * ToDoItems findFirstOrThrow
   */
  export type ToDoItemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoItems to fetch.
     */
    where?: ToDoItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoItems to fetch.
     */
    orderBy?: ToDoItemsOrderByWithRelationInput | ToDoItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToDoItems.
     */
    cursor?: ToDoItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToDoItems.
     */
    distinct?: ToDoItemsScalarFieldEnum | ToDoItemsScalarFieldEnum[]
  }

  /**
   * ToDoItems findMany
   */
  export type ToDoItemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * Filter, which ToDoItems to fetch.
     */
    where?: ToDoItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToDoItems to fetch.
     */
    orderBy?: ToDoItemsOrderByWithRelationInput | ToDoItemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToDoItems.
     */
    cursor?: ToDoItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToDoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToDoItems.
     */
    skip?: number
    distinct?: ToDoItemsScalarFieldEnum | ToDoItemsScalarFieldEnum[]
  }

  /**
   * ToDoItems create
   */
  export type ToDoItemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * The data needed to create a ToDoItems.
     */
    data: XOR<ToDoItemsCreateInput, ToDoItemsUncheckedCreateInput>
  }

  /**
   * ToDoItems createMany
   */
  export type ToDoItemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToDoItems.
     */
    data: ToDoItemsCreateManyInput | ToDoItemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToDoItems createManyAndReturn
   */
  export type ToDoItemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * The data used to create many ToDoItems.
     */
    data: ToDoItemsCreateManyInput | ToDoItemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToDoItems update
   */
  export type ToDoItemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * The data needed to update a ToDoItems.
     */
    data: XOR<ToDoItemsUpdateInput, ToDoItemsUncheckedUpdateInput>
    /**
     * Choose, which ToDoItems to update.
     */
    where: ToDoItemsWhereUniqueInput
  }

  /**
   * ToDoItems updateMany
   */
  export type ToDoItemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToDoItems.
     */
    data: XOR<ToDoItemsUpdateManyMutationInput, ToDoItemsUncheckedUpdateManyInput>
    /**
     * Filter which ToDoItems to update
     */
    where?: ToDoItemsWhereInput
    /**
     * Limit how many ToDoItems to update.
     */
    limit?: number
  }

  /**
   * ToDoItems updateManyAndReturn
   */
  export type ToDoItemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * The data used to update ToDoItems.
     */
    data: XOR<ToDoItemsUpdateManyMutationInput, ToDoItemsUncheckedUpdateManyInput>
    /**
     * Filter which ToDoItems to update
     */
    where?: ToDoItemsWhereInput
    /**
     * Limit how many ToDoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToDoItems upsert
   */
  export type ToDoItemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * The filter to search for the ToDoItems to update in case it exists.
     */
    where: ToDoItemsWhereUniqueInput
    /**
     * In case the ToDoItems found by the `where` argument doesn't exist, create a new ToDoItems with this data.
     */
    create: XOR<ToDoItemsCreateInput, ToDoItemsUncheckedCreateInput>
    /**
     * In case the ToDoItems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToDoItemsUpdateInput, ToDoItemsUncheckedUpdateInput>
  }

  /**
   * ToDoItems delete
   */
  export type ToDoItemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
    /**
     * Filter which ToDoItems to delete.
     */
    where: ToDoItemsWhereUniqueInput
  }

  /**
   * ToDoItems deleteMany
   */
  export type ToDoItemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToDoItems to delete
     */
    where?: ToDoItemsWhereInput
    /**
     * Limit how many ToDoItems to delete.
     */
    limit?: number
  }

  /**
   * ToDoItems without action
   */
  export type ToDoItemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToDoItems
     */
    select?: ToDoItemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToDoItems
     */
    omit?: ToDoItemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToDoItemsInclude<ExtArgs> | null
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


  export const PreferencesScalarFieldEnum: {
    id: 'id',
    emailUpdates: 'emailUpdates',
    theme: 'theme',
    bookmarksSortOrder: 'bookmarksSortOrder',
    notesDisplay: 'notesDisplay',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PreferencesScalarFieldEnum = (typeof PreferencesScalarFieldEnum)[keyof typeof PreferencesScalarFieldEnum]


  export const BookmarksSectionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookmarksSectionsScalarFieldEnum = (typeof BookmarksSectionsScalarFieldEnum)[keyof typeof BookmarksSectionsScalarFieldEnum]


  export const BookmarksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    description: 'description',
    sectionId: 'sectionId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookmarksScalarFieldEnum = (typeof BookmarksScalarFieldEnum)[keyof typeof BookmarksScalarFieldEnum]


  export const StickyNotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    color: 'color',
    pinned: 'pinned',
    archived: 'archived',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StickyNotesScalarFieldEnum = (typeof StickyNotesScalarFieldEnum)[keyof typeof StickyNotesScalarFieldEnum]


  export const ToDoListsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ToDoListsScalarFieldEnum = (typeof ToDoListsScalarFieldEnum)[keyof typeof ToDoListsScalarFieldEnum]


  export const ToDoItemsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    completed: 'completed',
    listId: 'listId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ToDoItemsScalarFieldEnum = (typeof ToDoItemsScalarFieldEnum)[keyof typeof ToDoItemsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PreferencesWhereInput = {
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    id?: StringFilter<"Preferences"> | string
    emailUpdates?: BoolFilter<"Preferences"> | boolean
    theme?: StringFilter<"Preferences"> | string
    bookmarksSortOrder?: StringFilter<"Preferences"> | string
    notesDisplay?: StringFilter<"Preferences"> | string
    userId?: StringFilter<"Preferences"> | string
    createdAt?: DateTimeFilter<"Preferences"> | Date | string
    updatedAt?: DateTimeFilter<"Preferences"> | Date | string
  }

  export type PreferencesOrderByWithRelationInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
    theme?: SortOrder
    bookmarksSortOrder?: SortOrder
    notesDisplay?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    emailUpdates?: BoolFilter<"Preferences"> | boolean
    theme?: StringFilter<"Preferences"> | string
    bookmarksSortOrder?: StringFilter<"Preferences"> | string
    notesDisplay?: StringFilter<"Preferences"> | string
    createdAt?: DateTimeFilter<"Preferences"> | Date | string
    updatedAt?: DateTimeFilter<"Preferences"> | Date | string
  }, "id" | "userId">

  export type PreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
    theme?: SortOrder
    bookmarksSortOrder?: SortOrder
    notesDisplay?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PreferencesCountOrderByAggregateInput
    _max?: PreferencesMaxOrderByAggregateInput
    _min?: PreferencesMinOrderByAggregateInput
  }

  export type PreferencesScalarWhereWithAggregatesInput = {
    AND?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    OR?: PreferencesScalarWhereWithAggregatesInput[]
    NOT?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preferences"> | string
    emailUpdates?: BoolWithAggregatesFilter<"Preferences"> | boolean
    theme?: StringWithAggregatesFilter<"Preferences"> | string
    bookmarksSortOrder?: StringWithAggregatesFilter<"Preferences"> | string
    notesDisplay?: StringWithAggregatesFilter<"Preferences"> | string
    userId?: StringWithAggregatesFilter<"Preferences"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Preferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Preferences"> | Date | string
  }

  export type BookmarksSectionsWhereInput = {
    AND?: BookmarksSectionsWhereInput | BookmarksSectionsWhereInput[]
    OR?: BookmarksSectionsWhereInput[]
    NOT?: BookmarksSectionsWhereInput | BookmarksSectionsWhereInput[]
    id?: StringFilter<"BookmarksSections"> | string
    name?: StringFilter<"BookmarksSections"> | string
    userId?: StringFilter<"BookmarksSections"> | string
    createdAt?: DateTimeFilter<"BookmarksSections"> | Date | string
    updatedAt?: DateTimeFilter<"BookmarksSections"> | Date | string
    bookmarks?: BookmarksListRelationFilter
  }

  export type BookmarksSectionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookmarks?: BookmarksOrderByRelationAggregateInput
  }

  export type BookmarksSectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookmarksSectionsWhereInput | BookmarksSectionsWhereInput[]
    OR?: BookmarksSectionsWhereInput[]
    NOT?: BookmarksSectionsWhereInput | BookmarksSectionsWhereInput[]
    name?: StringFilter<"BookmarksSections"> | string
    userId?: StringFilter<"BookmarksSections"> | string
    createdAt?: DateTimeFilter<"BookmarksSections"> | Date | string
    updatedAt?: DateTimeFilter<"BookmarksSections"> | Date | string
    bookmarks?: BookmarksListRelationFilter
  }, "id">

  export type BookmarksSectionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookmarksSectionsCountOrderByAggregateInput
    _max?: BookmarksSectionsMaxOrderByAggregateInput
    _min?: BookmarksSectionsMinOrderByAggregateInput
  }

  export type BookmarksSectionsScalarWhereWithAggregatesInput = {
    AND?: BookmarksSectionsScalarWhereWithAggregatesInput | BookmarksSectionsScalarWhereWithAggregatesInput[]
    OR?: BookmarksSectionsScalarWhereWithAggregatesInput[]
    NOT?: BookmarksSectionsScalarWhereWithAggregatesInput | BookmarksSectionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookmarksSections"> | string
    name?: StringWithAggregatesFilter<"BookmarksSections"> | string
    userId?: StringWithAggregatesFilter<"BookmarksSections"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookmarksSections"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookmarksSections"> | Date | string
  }

  export type BookmarksWhereInput = {
    AND?: BookmarksWhereInput | BookmarksWhereInput[]
    OR?: BookmarksWhereInput[]
    NOT?: BookmarksWhereInput | BookmarksWhereInput[]
    id?: StringFilter<"Bookmarks"> | string
    title?: StringFilter<"Bookmarks"> | string
    url?: StringFilter<"Bookmarks"> | string
    description?: StringNullableFilter<"Bookmarks"> | string | null
    sectionId?: StringFilter<"Bookmarks"> | string
    userId?: StringFilter<"Bookmarks"> | string
    createdAt?: DateTimeFilter<"Bookmarks"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmarks"> | Date | string
    section?: XOR<BookmarksSectionsScalarRelationFilter, BookmarksSectionsWhereInput>
  }

  export type BookmarksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    sectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    section?: BookmarksSectionsOrderByWithRelationInput
  }

  export type BookmarksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookmarksWhereInput | BookmarksWhereInput[]
    OR?: BookmarksWhereInput[]
    NOT?: BookmarksWhereInput | BookmarksWhereInput[]
    title?: StringFilter<"Bookmarks"> | string
    url?: StringFilter<"Bookmarks"> | string
    description?: StringNullableFilter<"Bookmarks"> | string | null
    sectionId?: StringFilter<"Bookmarks"> | string
    userId?: StringFilter<"Bookmarks"> | string
    createdAt?: DateTimeFilter<"Bookmarks"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmarks"> | Date | string
    section?: XOR<BookmarksSectionsScalarRelationFilter, BookmarksSectionsWhereInput>
  }, "id">

  export type BookmarksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    sectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookmarksCountOrderByAggregateInput
    _max?: BookmarksMaxOrderByAggregateInput
    _min?: BookmarksMinOrderByAggregateInput
  }

  export type BookmarksScalarWhereWithAggregatesInput = {
    AND?: BookmarksScalarWhereWithAggregatesInput | BookmarksScalarWhereWithAggregatesInput[]
    OR?: BookmarksScalarWhereWithAggregatesInput[]
    NOT?: BookmarksScalarWhereWithAggregatesInput | BookmarksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookmarks"> | string
    title?: StringWithAggregatesFilter<"Bookmarks"> | string
    url?: StringWithAggregatesFilter<"Bookmarks"> | string
    description?: StringNullableWithAggregatesFilter<"Bookmarks"> | string | null
    sectionId?: StringWithAggregatesFilter<"Bookmarks"> | string
    userId?: StringWithAggregatesFilter<"Bookmarks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookmarks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bookmarks"> | Date | string
  }

  export type StickyNotesWhereInput = {
    AND?: StickyNotesWhereInput | StickyNotesWhereInput[]
    OR?: StickyNotesWhereInput[]
    NOT?: StickyNotesWhereInput | StickyNotesWhereInput[]
    id?: StringFilter<"StickyNotes"> | string
    title?: StringNullableFilter<"StickyNotes"> | string | null
    content?: StringNullableFilter<"StickyNotes"> | string | null
    color?: StringNullableFilter<"StickyNotes"> | string | null
    pinned?: BoolFilter<"StickyNotes"> | boolean
    archived?: BoolFilter<"StickyNotes"> | boolean
    userId?: StringFilter<"StickyNotes"> | string
    createdAt?: DateTimeFilter<"StickyNotes"> | Date | string
    updatedAt?: DateTimeFilter<"StickyNotes"> | Date | string
  }

  export type StickyNotesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    pinned?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StickyNotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StickyNotesWhereInput | StickyNotesWhereInput[]
    OR?: StickyNotesWhereInput[]
    NOT?: StickyNotesWhereInput | StickyNotesWhereInput[]
    title?: StringNullableFilter<"StickyNotes"> | string | null
    content?: StringNullableFilter<"StickyNotes"> | string | null
    color?: StringNullableFilter<"StickyNotes"> | string | null
    pinned?: BoolFilter<"StickyNotes"> | boolean
    archived?: BoolFilter<"StickyNotes"> | boolean
    userId?: StringFilter<"StickyNotes"> | string
    createdAt?: DateTimeFilter<"StickyNotes"> | Date | string
    updatedAt?: DateTimeFilter<"StickyNotes"> | Date | string
  }, "id">

  export type StickyNotesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    pinned?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StickyNotesCountOrderByAggregateInput
    _max?: StickyNotesMaxOrderByAggregateInput
    _min?: StickyNotesMinOrderByAggregateInput
  }

  export type StickyNotesScalarWhereWithAggregatesInput = {
    AND?: StickyNotesScalarWhereWithAggregatesInput | StickyNotesScalarWhereWithAggregatesInput[]
    OR?: StickyNotesScalarWhereWithAggregatesInput[]
    NOT?: StickyNotesScalarWhereWithAggregatesInput | StickyNotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StickyNotes"> | string
    title?: StringNullableWithAggregatesFilter<"StickyNotes"> | string | null
    content?: StringNullableWithAggregatesFilter<"StickyNotes"> | string | null
    color?: StringNullableWithAggregatesFilter<"StickyNotes"> | string | null
    pinned?: BoolWithAggregatesFilter<"StickyNotes"> | boolean
    archived?: BoolWithAggregatesFilter<"StickyNotes"> | boolean
    userId?: StringWithAggregatesFilter<"StickyNotes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StickyNotes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StickyNotes"> | Date | string
  }

  export type ToDoListsWhereInput = {
    AND?: ToDoListsWhereInput | ToDoListsWhereInput[]
    OR?: ToDoListsWhereInput[]
    NOT?: ToDoListsWhereInput | ToDoListsWhereInput[]
    id?: StringFilter<"ToDoLists"> | string
    title?: StringFilter<"ToDoLists"> | string
    userId?: StringFilter<"ToDoLists"> | string
    createdAt?: DateTimeFilter<"ToDoLists"> | Date | string
    updatedAt?: DateTimeFilter<"ToDoLists"> | Date | string
    items?: ToDoItemsListRelationFilter
  }

  export type ToDoListsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: ToDoItemsOrderByRelationAggregateInput
  }

  export type ToDoListsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToDoListsWhereInput | ToDoListsWhereInput[]
    OR?: ToDoListsWhereInput[]
    NOT?: ToDoListsWhereInput | ToDoListsWhereInput[]
    title?: StringFilter<"ToDoLists"> | string
    userId?: StringFilter<"ToDoLists"> | string
    createdAt?: DateTimeFilter<"ToDoLists"> | Date | string
    updatedAt?: DateTimeFilter<"ToDoLists"> | Date | string
    items?: ToDoItemsListRelationFilter
  }, "id">

  export type ToDoListsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ToDoListsCountOrderByAggregateInput
    _max?: ToDoListsMaxOrderByAggregateInput
    _min?: ToDoListsMinOrderByAggregateInput
  }

  export type ToDoListsScalarWhereWithAggregatesInput = {
    AND?: ToDoListsScalarWhereWithAggregatesInput | ToDoListsScalarWhereWithAggregatesInput[]
    OR?: ToDoListsScalarWhereWithAggregatesInput[]
    NOT?: ToDoListsScalarWhereWithAggregatesInput | ToDoListsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToDoLists"> | string
    title?: StringWithAggregatesFilter<"ToDoLists"> | string
    userId?: StringWithAggregatesFilter<"ToDoLists"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ToDoLists"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ToDoLists"> | Date | string
  }

  export type ToDoItemsWhereInput = {
    AND?: ToDoItemsWhereInput | ToDoItemsWhereInput[]
    OR?: ToDoItemsWhereInput[]
    NOT?: ToDoItemsWhereInput | ToDoItemsWhereInput[]
    id?: StringFilter<"ToDoItems"> | string
    content?: StringFilter<"ToDoItems"> | string
    completed?: BoolFilter<"ToDoItems"> | boolean
    listId?: StringFilter<"ToDoItems"> | string
    userId?: StringFilter<"ToDoItems"> | string
    createdAt?: DateTimeFilter<"ToDoItems"> | Date | string
    updatedAt?: DateTimeFilter<"ToDoItems"> | Date | string
    list?: XOR<ToDoListsScalarRelationFilter, ToDoListsWhereInput>
  }

  export type ToDoItemsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    completed?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    list?: ToDoListsOrderByWithRelationInput
  }

  export type ToDoItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToDoItemsWhereInput | ToDoItemsWhereInput[]
    OR?: ToDoItemsWhereInput[]
    NOT?: ToDoItemsWhereInput | ToDoItemsWhereInput[]
    content?: StringFilter<"ToDoItems"> | string
    completed?: BoolFilter<"ToDoItems"> | boolean
    listId?: StringFilter<"ToDoItems"> | string
    userId?: StringFilter<"ToDoItems"> | string
    createdAt?: DateTimeFilter<"ToDoItems"> | Date | string
    updatedAt?: DateTimeFilter<"ToDoItems"> | Date | string
    list?: XOR<ToDoListsScalarRelationFilter, ToDoListsWhereInput>
  }, "id">

  export type ToDoItemsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    completed?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ToDoItemsCountOrderByAggregateInput
    _max?: ToDoItemsMaxOrderByAggregateInput
    _min?: ToDoItemsMinOrderByAggregateInput
  }

  export type ToDoItemsScalarWhereWithAggregatesInput = {
    AND?: ToDoItemsScalarWhereWithAggregatesInput | ToDoItemsScalarWhereWithAggregatesInput[]
    OR?: ToDoItemsScalarWhereWithAggregatesInput[]
    NOT?: ToDoItemsScalarWhereWithAggregatesInput | ToDoItemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToDoItems"> | string
    content?: StringWithAggregatesFilter<"ToDoItems"> | string
    completed?: BoolWithAggregatesFilter<"ToDoItems"> | boolean
    listId?: StringWithAggregatesFilter<"ToDoItems"> | string
    userId?: StringWithAggregatesFilter<"ToDoItems"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ToDoItems"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ToDoItems"> | Date | string
  }

  export type PreferencesCreateInput = {
    id?: string
    emailUpdates?: boolean
    theme?: string
    bookmarksSortOrder?: string
    notesDisplay?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferencesUncheckedCreateInput = {
    id?: string
    emailUpdates?: boolean
    theme?: string
    bookmarksSortOrder?: string
    notesDisplay?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
    theme?: StringFieldUpdateOperationsInput | string
    bookmarksSortOrder?: StringFieldUpdateOperationsInput | string
    notesDisplay?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
    theme?: StringFieldUpdateOperationsInput | string
    bookmarksSortOrder?: StringFieldUpdateOperationsInput | string
    notesDisplay?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferencesCreateManyInput = {
    id?: string
    emailUpdates?: boolean
    theme?: string
    bookmarksSortOrder?: string
    notesDisplay?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
    theme?: StringFieldUpdateOperationsInput | string
    bookmarksSortOrder?: StringFieldUpdateOperationsInput | string
    notesDisplay?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailUpdates?: BoolFieldUpdateOperationsInput | boolean
    theme?: StringFieldUpdateOperationsInput | string
    bookmarksSortOrder?: StringFieldUpdateOperationsInput | string
    notesDisplay?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksSectionsCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarksCreateNestedManyWithoutSectionInput
  }

  export type BookmarksSectionsUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarks?: BookmarksUncheckedCreateNestedManyWithoutSectionInput
  }

  export type BookmarksSectionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarksUpdateManyWithoutSectionNestedInput
  }

  export type BookmarksSectionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarksUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type BookmarksSectionsCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksSectionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksSectionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksCreateInput = {
    id?: string
    title: string
    url: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    section: BookmarksSectionsCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarksUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    description?: string | null
    sectionId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    section?: BookmarksSectionsUpdateOneRequiredWithoutBookmarksNestedInput
  }

  export type BookmarksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksCreateManyInput = {
    id?: string
    title: string
    url: string
    description?: string | null
    sectionId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StickyNotesCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    color?: string | null
    pinned?: boolean
    archived?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StickyNotesUncheckedCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    color?: string | null
    pinned?: boolean
    archived?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StickyNotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StickyNotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StickyNotesCreateManyInput = {
    id?: string
    title?: string | null
    content?: string | null
    color?: string | null
    pinned?: boolean
    archived?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StickyNotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StickyNotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    archived?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoListsCreateInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ToDoItemsCreateNestedManyWithoutListInput
  }

  export type ToDoListsUncheckedCreateInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ToDoItemsUncheckedCreateNestedManyWithoutListInput
  }

  export type ToDoListsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ToDoItemsUpdateManyWithoutListNestedInput
  }

  export type ToDoListsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ToDoItemsUncheckedUpdateManyWithoutListNestedInput
  }

  export type ToDoListsCreateManyInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoListsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoListsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoItemsCreateInput = {
    id?: string
    content: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    list: ToDoListsCreateNestedOneWithoutItemsInput
  }

  export type ToDoItemsUncheckedCreateInput = {
    id?: string
    content: string
    completed?: boolean
    listId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ToDoListsUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ToDoItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoItemsCreateManyInput = {
    id?: string
    content: string
    completed?: boolean
    listId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    listId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
    theme?: SortOrder
    bookmarksSortOrder?: SortOrder
    notesDisplay?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
    theme?: SortOrder
    bookmarksSortOrder?: SortOrder
    notesDisplay?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    emailUpdates?: SortOrder
    theme?: SortOrder
    bookmarksSortOrder?: SortOrder
    notesDisplay?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BookmarksListRelationFilter = {
    every?: BookmarksWhereInput
    some?: BookmarksWhereInput
    none?: BookmarksWhereInput
  }

  export type BookmarksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarksSectionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarksSectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarksSectionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BookmarksSectionsScalarRelationFilter = {
    is?: BookmarksSectionsWhereInput
    isNot?: BookmarksSectionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookmarksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    sectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    sectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    description?: SortOrder
    sectionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StickyNotesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    pinned?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StickyNotesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    pinned?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StickyNotesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    color?: SortOrder
    pinned?: SortOrder
    archived?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToDoItemsListRelationFilter = {
    every?: ToDoItemsWhereInput
    some?: ToDoItemsWhereInput
    none?: ToDoItemsWhereInput
  }

  export type ToDoItemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToDoListsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToDoListsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToDoListsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToDoListsScalarRelationFilter = {
    is?: ToDoListsWhereInput
    isNot?: ToDoListsWhereInput
  }

  export type ToDoItemsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    completed?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToDoItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    completed?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToDoItemsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    completed?: SortOrder
    listId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookmarksCreateNestedManyWithoutSectionInput = {
    create?: XOR<BookmarksCreateWithoutSectionInput, BookmarksUncheckedCreateWithoutSectionInput> | BookmarksCreateWithoutSectionInput[] | BookmarksUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutSectionInput | BookmarksCreateOrConnectWithoutSectionInput[]
    createMany?: BookmarksCreateManySectionInputEnvelope
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
  }

  export type BookmarksUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<BookmarksCreateWithoutSectionInput, BookmarksUncheckedCreateWithoutSectionInput> | BookmarksCreateWithoutSectionInput[] | BookmarksUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutSectionInput | BookmarksCreateOrConnectWithoutSectionInput[]
    createMany?: BookmarksCreateManySectionInputEnvelope
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
  }

  export type BookmarksUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BookmarksCreateWithoutSectionInput, BookmarksUncheckedCreateWithoutSectionInput> | BookmarksCreateWithoutSectionInput[] | BookmarksUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutSectionInput | BookmarksCreateOrConnectWithoutSectionInput[]
    upsert?: BookmarksUpsertWithWhereUniqueWithoutSectionInput | BookmarksUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BookmarksCreateManySectionInputEnvelope
    set?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    disconnect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    delete?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    update?: BookmarksUpdateWithWhereUniqueWithoutSectionInput | BookmarksUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BookmarksUpdateManyWithWhereWithoutSectionInput | BookmarksUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
  }

  export type BookmarksUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BookmarksCreateWithoutSectionInput, BookmarksUncheckedCreateWithoutSectionInput> | BookmarksCreateWithoutSectionInput[] | BookmarksUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BookmarksCreateOrConnectWithoutSectionInput | BookmarksCreateOrConnectWithoutSectionInput[]
    upsert?: BookmarksUpsertWithWhereUniqueWithoutSectionInput | BookmarksUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BookmarksCreateManySectionInputEnvelope
    set?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    disconnect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    delete?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    connect?: BookmarksWhereUniqueInput | BookmarksWhereUniqueInput[]
    update?: BookmarksUpdateWithWhereUniqueWithoutSectionInput | BookmarksUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BookmarksUpdateManyWithWhereWithoutSectionInput | BookmarksUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
  }

  export type BookmarksSectionsCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<BookmarksSectionsCreateWithoutBookmarksInput, BookmarksSectionsUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: BookmarksSectionsCreateOrConnectWithoutBookmarksInput
    connect?: BookmarksSectionsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookmarksSectionsUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<BookmarksSectionsCreateWithoutBookmarksInput, BookmarksSectionsUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: BookmarksSectionsCreateOrConnectWithoutBookmarksInput
    upsert?: BookmarksSectionsUpsertWithoutBookmarksInput
    connect?: BookmarksSectionsWhereUniqueInput
    update?: XOR<XOR<BookmarksSectionsUpdateToOneWithWhereWithoutBookmarksInput, BookmarksSectionsUpdateWithoutBookmarksInput>, BookmarksSectionsUncheckedUpdateWithoutBookmarksInput>
  }

  export type ToDoItemsCreateNestedManyWithoutListInput = {
    create?: XOR<ToDoItemsCreateWithoutListInput, ToDoItemsUncheckedCreateWithoutListInput> | ToDoItemsCreateWithoutListInput[] | ToDoItemsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ToDoItemsCreateOrConnectWithoutListInput | ToDoItemsCreateOrConnectWithoutListInput[]
    createMany?: ToDoItemsCreateManyListInputEnvelope
    connect?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
  }

  export type ToDoItemsUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ToDoItemsCreateWithoutListInput, ToDoItemsUncheckedCreateWithoutListInput> | ToDoItemsCreateWithoutListInput[] | ToDoItemsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ToDoItemsCreateOrConnectWithoutListInput | ToDoItemsCreateOrConnectWithoutListInput[]
    createMany?: ToDoItemsCreateManyListInputEnvelope
    connect?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
  }

  export type ToDoItemsUpdateManyWithoutListNestedInput = {
    create?: XOR<ToDoItemsCreateWithoutListInput, ToDoItemsUncheckedCreateWithoutListInput> | ToDoItemsCreateWithoutListInput[] | ToDoItemsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ToDoItemsCreateOrConnectWithoutListInput | ToDoItemsCreateOrConnectWithoutListInput[]
    upsert?: ToDoItemsUpsertWithWhereUniqueWithoutListInput | ToDoItemsUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ToDoItemsCreateManyListInputEnvelope
    set?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    disconnect?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    delete?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    connect?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    update?: ToDoItemsUpdateWithWhereUniqueWithoutListInput | ToDoItemsUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ToDoItemsUpdateManyWithWhereWithoutListInput | ToDoItemsUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ToDoItemsScalarWhereInput | ToDoItemsScalarWhereInput[]
  }

  export type ToDoItemsUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ToDoItemsCreateWithoutListInput, ToDoItemsUncheckedCreateWithoutListInput> | ToDoItemsCreateWithoutListInput[] | ToDoItemsUncheckedCreateWithoutListInput[]
    connectOrCreate?: ToDoItemsCreateOrConnectWithoutListInput | ToDoItemsCreateOrConnectWithoutListInput[]
    upsert?: ToDoItemsUpsertWithWhereUniqueWithoutListInput | ToDoItemsUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ToDoItemsCreateManyListInputEnvelope
    set?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    disconnect?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    delete?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    connect?: ToDoItemsWhereUniqueInput | ToDoItemsWhereUniqueInput[]
    update?: ToDoItemsUpdateWithWhereUniqueWithoutListInput | ToDoItemsUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ToDoItemsUpdateManyWithWhereWithoutListInput | ToDoItemsUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ToDoItemsScalarWhereInput | ToDoItemsScalarWhereInput[]
  }

  export type ToDoListsCreateNestedOneWithoutItemsInput = {
    create?: XOR<ToDoListsCreateWithoutItemsInput, ToDoListsUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ToDoListsCreateOrConnectWithoutItemsInput
    connect?: ToDoListsWhereUniqueInput
  }

  export type ToDoListsUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ToDoListsCreateWithoutItemsInput, ToDoListsUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ToDoListsCreateOrConnectWithoutItemsInput
    upsert?: ToDoListsUpsertWithoutItemsInput
    connect?: ToDoListsWhereUniqueInput
    update?: XOR<XOR<ToDoListsUpdateToOneWithWhereWithoutItemsInput, ToDoListsUpdateWithoutItemsInput>, ToDoListsUncheckedUpdateWithoutItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BookmarksCreateWithoutSectionInput = {
    id?: string
    title: string
    url: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksUncheckedCreateWithoutSectionInput = {
    id?: string
    title: string
    url: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksCreateOrConnectWithoutSectionInput = {
    where: BookmarksWhereUniqueInput
    create: XOR<BookmarksCreateWithoutSectionInput, BookmarksUncheckedCreateWithoutSectionInput>
  }

  export type BookmarksCreateManySectionInputEnvelope = {
    data: BookmarksCreateManySectionInput | BookmarksCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type BookmarksUpsertWithWhereUniqueWithoutSectionInput = {
    where: BookmarksWhereUniqueInput
    update: XOR<BookmarksUpdateWithoutSectionInput, BookmarksUncheckedUpdateWithoutSectionInput>
    create: XOR<BookmarksCreateWithoutSectionInput, BookmarksUncheckedCreateWithoutSectionInput>
  }

  export type BookmarksUpdateWithWhereUniqueWithoutSectionInput = {
    where: BookmarksWhereUniqueInput
    data: XOR<BookmarksUpdateWithoutSectionInput, BookmarksUncheckedUpdateWithoutSectionInput>
  }

  export type BookmarksUpdateManyWithWhereWithoutSectionInput = {
    where: BookmarksScalarWhereInput
    data: XOR<BookmarksUpdateManyMutationInput, BookmarksUncheckedUpdateManyWithoutSectionInput>
  }

  export type BookmarksScalarWhereInput = {
    AND?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
    OR?: BookmarksScalarWhereInput[]
    NOT?: BookmarksScalarWhereInput | BookmarksScalarWhereInput[]
    id?: StringFilter<"Bookmarks"> | string
    title?: StringFilter<"Bookmarks"> | string
    url?: StringFilter<"Bookmarks"> | string
    description?: StringNullableFilter<"Bookmarks"> | string | null
    sectionId?: StringFilter<"Bookmarks"> | string
    userId?: StringFilter<"Bookmarks"> | string
    createdAt?: DateTimeFilter<"Bookmarks"> | Date | string
    updatedAt?: DateTimeFilter<"Bookmarks"> | Date | string
  }

  export type BookmarksSectionsCreateWithoutBookmarksInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksSectionsUncheckedCreateWithoutBookmarksInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksSectionsCreateOrConnectWithoutBookmarksInput = {
    where: BookmarksSectionsWhereUniqueInput
    create: XOR<BookmarksSectionsCreateWithoutBookmarksInput, BookmarksSectionsUncheckedCreateWithoutBookmarksInput>
  }

  export type BookmarksSectionsUpsertWithoutBookmarksInput = {
    update: XOR<BookmarksSectionsUpdateWithoutBookmarksInput, BookmarksSectionsUncheckedUpdateWithoutBookmarksInput>
    create: XOR<BookmarksSectionsCreateWithoutBookmarksInput, BookmarksSectionsUncheckedCreateWithoutBookmarksInput>
    where?: BookmarksSectionsWhereInput
  }

  export type BookmarksSectionsUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: BookmarksSectionsWhereInput
    data: XOR<BookmarksSectionsUpdateWithoutBookmarksInput, BookmarksSectionsUncheckedUpdateWithoutBookmarksInput>
  }

  export type BookmarksSectionsUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksSectionsUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoItemsCreateWithoutListInput = {
    id?: string
    content: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoItemsUncheckedCreateWithoutListInput = {
    id?: string
    content: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoItemsCreateOrConnectWithoutListInput = {
    where: ToDoItemsWhereUniqueInput
    create: XOR<ToDoItemsCreateWithoutListInput, ToDoItemsUncheckedCreateWithoutListInput>
  }

  export type ToDoItemsCreateManyListInputEnvelope = {
    data: ToDoItemsCreateManyListInput | ToDoItemsCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ToDoItemsUpsertWithWhereUniqueWithoutListInput = {
    where: ToDoItemsWhereUniqueInput
    update: XOR<ToDoItemsUpdateWithoutListInput, ToDoItemsUncheckedUpdateWithoutListInput>
    create: XOR<ToDoItemsCreateWithoutListInput, ToDoItemsUncheckedCreateWithoutListInput>
  }

  export type ToDoItemsUpdateWithWhereUniqueWithoutListInput = {
    where: ToDoItemsWhereUniqueInput
    data: XOR<ToDoItemsUpdateWithoutListInput, ToDoItemsUncheckedUpdateWithoutListInput>
  }

  export type ToDoItemsUpdateManyWithWhereWithoutListInput = {
    where: ToDoItemsScalarWhereInput
    data: XOR<ToDoItemsUpdateManyMutationInput, ToDoItemsUncheckedUpdateManyWithoutListInput>
  }

  export type ToDoItemsScalarWhereInput = {
    AND?: ToDoItemsScalarWhereInput | ToDoItemsScalarWhereInput[]
    OR?: ToDoItemsScalarWhereInput[]
    NOT?: ToDoItemsScalarWhereInput | ToDoItemsScalarWhereInput[]
    id?: StringFilter<"ToDoItems"> | string
    content?: StringFilter<"ToDoItems"> | string
    completed?: BoolFilter<"ToDoItems"> | boolean
    listId?: StringFilter<"ToDoItems"> | string
    userId?: StringFilter<"ToDoItems"> | string
    createdAt?: DateTimeFilter<"ToDoItems"> | Date | string
    updatedAt?: DateTimeFilter<"ToDoItems"> | Date | string
  }

  export type ToDoListsCreateWithoutItemsInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoListsUncheckedCreateWithoutItemsInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoListsCreateOrConnectWithoutItemsInput = {
    where: ToDoListsWhereUniqueInput
    create: XOR<ToDoListsCreateWithoutItemsInput, ToDoListsUncheckedCreateWithoutItemsInput>
  }

  export type ToDoListsUpsertWithoutItemsInput = {
    update: XOR<ToDoListsUpdateWithoutItemsInput, ToDoListsUncheckedUpdateWithoutItemsInput>
    create: XOR<ToDoListsCreateWithoutItemsInput, ToDoListsUncheckedCreateWithoutItemsInput>
    where?: ToDoListsWhereInput
  }

  export type ToDoListsUpdateToOneWithWhereWithoutItemsInput = {
    where?: ToDoListsWhereInput
    data: XOR<ToDoListsUpdateWithoutItemsInput, ToDoListsUncheckedUpdateWithoutItemsInput>
  }

  export type ToDoListsUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoListsUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksCreateManySectionInput = {
    id?: string
    title: string
    url: string
    description?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarksUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarksUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoItemsCreateManyListInput = {
    id?: string
    content: string
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToDoItemsUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoItemsUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToDoItemsUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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