"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [26158],
  {
    989369: function (e, t, a) {
      a.d(t, {
        ZP: function () {
          return Nu;
        },
      });
      var r,
        n,
        i = Object.defineProperty,
        o = (e, t, a) => (
          ((e, t, a) => {
            t in e
              ? i(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (e[t] = a);
          })(e, "symbol" != typeof t ? t + "" : t, a),
          a
        ),
        s = (e, t, a) => {
          if (!t.has(e)) throw TypeError("Cannot " + a);
        },
        c = (e, t, a) => (
          s(e, t, "read from private field"), a ? a.call(e) : t.get(e)
        ),
        d = (e, t, a) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, a);
        },
        u = (e, t, a, r) => (
          s(e, t, "write to private field"), r ? r.call(e, a) : t.set(e, a), a
        );
      ((n = r || (r = {})).assertEqual = (e) => e),
        (n.assertIs = function (e) {}),
        (n.assertNever = function (e) {
          throw new Error();
        }),
        (n.arrayToEnum = (e) => {
          const t = {};
          for (const a of e) t[a] = a;
          return t;
        }),
        (n.getValidEnumValues = (e) => {
          const t = n.objectKeys(e).filter((t) => "number" != typeof e[e[t]]),
            a = {};
          for (const r of t) a[r] = e[r];
          return n.objectValues(a);
        }),
        (n.objectValues = (e) =>
          n.objectKeys(e).map(function (t) {
            return e[t];
          })),
        (n.objectKeys =
          "function" == typeof Object.keys
            ? (e) => Object.keys(e)
            : (e) => {
                const t = [];
                for (const a in e)
                  Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
                return t;
              }),
        (n.find = (e, t) => {
          for (const a of e) if (t(a)) return a;
        }),
        (n.isInteger =
          "function" == typeof Number.isInteger
            ? (e) => Number.isInteger(e)
            : (e) =>
                "number" == typeof e && isFinite(e) && Math.floor(e) === e),
        (n.joinValues = function (e, t = " | ") {
          return e.map((e) => ("string" == typeof e ? `'${e}'` : e)).join(t);
        }),
        (n.jsonStringifyReplacer = (e, t) =>
          "bigint" == typeof t ? t.toString() : t);
      const l = r.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        p = (e) => {
          switch (typeof e) {
            case "undefined":
              return l.undefined;
            case "string":
              return l.string;
            case "number":
              return isNaN(e) ? l.nan : l.number;
            case "boolean":
              return l.boolean;
            case "function":
              return l.function;
            case "bigint":
              return l.bigint;
            case "symbol":
              return l.symbol;
            case "object":
              return Array.isArray(e)
                ? l.array
                : null === e
                ? l.null
                : e.then &&
                  "function" == typeof e.then &&
                  e.catch &&
                  "function" == typeof e.catch
                ? l.promise
                : typeof Map < "u" && e instanceof Map
                ? l.map
                : typeof Set < "u" && e instanceof Set
                ? l.set
                : typeof Date < "u" && e instanceof Date
                ? l.date
                : l.object;
            default:
              return l.unknown;
          }
        },
        m = r.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]),
        h = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
      class f extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          const t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          const t =
              e ||
              function (e) {
                return e.message;
              },
            a = { _errors: [] },
            r = (e) => {
              for (const n of e.issues)
                if ("invalid_union" === n.code) n.unionErrors.map(r);
                else if ("invalid_return_type" === n.code) r(n.returnTypeError);
                else if ("invalid_arguments" === n.code) r(n.argumentsError);
                else if (0 === n.path.length) a._errors.push(t(n));
                else {
                  let e = a,
                    r = 0;
                  for (; r < n.path.length; ) {
                    const a = n.path[r];
                    r === n.path.length - 1
                      ? ((e[a] = e[a] || { _errors: [] }),
                        e[a]._errors.push(t(n)))
                      : (e[a] = e[a] || { _errors: [] }),
                      (e = e[a]),
                      r++;
                  }
                }
            };
          return r(this), a;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, r.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          const t = {},
            a = [];
          for (const r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : a.push(e(r));
          return { formErrors: a, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      f.create = (e) => new f(e);
      const g = (e, t) => {
        let a;
        switch (e.code) {
          case m.invalid_type:
            a =
              e.received === l.undefined
                ? "Required"
                : `Expected ${e.expected}, received ${e.received}`;
            break;
          case m.invalid_literal:
            a = `Invalid literal value, expected ${JSON.stringify(
              e.expected,
              r.jsonStringifyReplacer
            )}`;
            break;
          case m.unrecognized_keys:
            a = `Unrecognized key(s) in object: ${r.joinValues(e.keys, ", ")}`;
            break;
          case m.invalid_union:
            a = "Invalid input";
            break;
          case m.invalid_union_discriminator:
            a = `Invalid discriminator value. Expected ${r.joinValues(
              e.options
            )}`;
            break;
          case m.invalid_enum_value:
            a = `Invalid enum value. Expected ${r.joinValues(
              e.options
            )}, received '${e.received}'`;
            break;
          case m.invalid_arguments:
            a = "Invalid function arguments";
            break;
          case m.invalid_return_type:
            a = "Invalid function return type";
            break;
          case m.invalid_date:
            a = "Invalid date";
            break;
          case m.invalid_string:
            "object" == typeof e.validation
              ? "startsWith" in e.validation
                ? (a = `Invalid input: must start with "${e.validation.startsWith}"`)
                : "endsWith" in e.validation
                ? (a = `Invalid input: must end with "${e.validation.endsWith}"`)
                : r.assertNever(e.validation)
              : (a =
                  "regex" !== e.validation
                    ? `Invalid ${e.validation}`
                    : "Invalid");
            break;
          case m.too_small:
            a =
              "array" === e.type
                ? `Array must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
                  } ${e.minimum} element(s)`
                : "string" === e.type
                ? `String must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at least" : "over"
                  } ${e.minimum} character(s)`
                : "number" === e.type
                ? `Number must be ${
                    e.exact
                      ? "exactly equal to "
                      : e.inclusive
                      ? "greater than or equal to "
                      : "greater than "
                  }${e.minimum}`
                : "date" === e.type
                ? `Date must be ${
                    e.exact
                      ? "exactly equal to "
                      : e.inclusive
                      ? "greater than or equal to "
                      : "greater than "
                  }${new Date(e.minimum)}`
                : "Invalid input";
            break;
          case m.too_big:
            a =
              "array" === e.type
                ? `Array must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
                  } ${e.maximum} element(s)`
                : "string" === e.type
                ? `String must contain ${
                    e.exact ? "exactly" : e.inclusive ? "at most" : "under"
                  } ${e.maximum} character(s)`
                : "number" === e.type
                ? `Number must be ${
                    e.exact
                      ? "exactly"
                      : e.inclusive
                      ? "less than or equal to"
                      : "less than"
                  } ${e.maximum}`
                : "date" === e.type
                ? `Date must be ${
                    e.exact
                      ? "exactly"
                      : e.inclusive
                      ? "smaller than or equal to"
                      : "smaller than"
                  } ${new Date(e.maximum)}`
                : "Invalid input";
            break;
          case m.custom:
            a = "Invalid input";
            break;
          case m.invalid_intersection_types:
            a = "Intersection results could not be merged";
            break;
          case m.not_multiple_of:
            a = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case m.not_finite:
            a = "Number must be finite";
            break;
          default:
            (a = t.defaultError), r.assertNever(e);
        }
        return { message: a };
      };
      let y = g;
      function v(e) {
        y = e;
      }
      function _() {
        return y;
      }
      const S = (e) => {
          const { data: t, path: a, errorMaps: r, issueData: n } = e,
            i = [...a, ...(n.path || [])],
            o = { ...n, path: i };
          let s = "";
          const c = r
            .filter((e) => !!e)
            .slice()
            .reverse();
          for (const d of c) s = d(o, { data: t, defaultError: s }).message;
          return { ...n, path: i, message: n.message || s };
        },
        b = [];
      function x(e, t) {
        const a = S({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [
            e.common.contextualErrorMap,
            e.schemaErrorMap,
            _(),
            g,
          ].filter((e) => !!e),
        });
        e.common.issues.push(a);
      }
      class T {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          const a = [];
          for (const r of t) {
            if ("aborted" === r.status) return M;
            "dirty" === r.status && e.dirty(), a.push(r.value);
          }
          return { status: e.value, value: a };
        }
        static async mergeObjectAsync(e, t) {
          const a = [];
          for (const r of t) a.push({ key: await r.key, value: await r.value });
          return T.mergeObjectSync(e, a);
        }
        static mergeObjectSync(e, t) {
          const a = {};
          for (const r of t) {
            const { key: t, value: n } = r;
            if ("aborted" === t.status || "aborted" === n.status) return M;
            "dirty" === t.status && e.dirty(),
              "dirty" === n.status && e.dirty(),
              (typeof n.value < "u" || r.alwaysSet) && (a[t.value] = n.value);
          }
          return { status: e.value, value: a };
        }
      }
      const M = Object.freeze({ status: "aborted" }),
        O = (e) => ({ status: "dirty", value: e }),
        C = (e) => ({ status: "valid", value: e }),
        E = (e) => "aborted" === e.status,
        w = (e) => "dirty" === e.status,
        P = (e) => "valid" === e.status,
        I = (e) => void 0 !== typeof Promise && e instanceof Promise;
      var j;
      !(function (e) {
        (e.errToObj = (e) => ("string" == typeof e ? { message: e } : e || {})),
          (e.toString = (e) =>
            "string" == typeof e ? e : null == e ? void 0 : e.message);
      })(j || (j = {}));
      class D {
        constructor(e, t, a, r) {
          (this.parent = e), (this.data = t), (this._path = a), (this._key = r);
        }
        get path() {
          return this._path.concat(this._key);
        }
      }
      const N = (e, t) => {
        if (P(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw new Error("Validation failed but no issues detected.");
        return { success: !1, error: new f(e.common.issues) };
      };
      function A(e) {
        if (!e) return {};
        const {
          errorMap: t,
          invalid_type_error: a,
          required_error: r,
          description: n,
        } = e;
        if (t && (a || r))
          throw new Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return t
          ? { errorMap: t, description: n }
          : {
              errorMap: (e, t) =>
                "invalid_type" !== e.code
                  ? { message: t.defaultError }
                  : typeof t.data > "u"
                  ? { message: r ?? t.defaultError }
                  : { message: a ?? t.defaultError },
              description: n,
            };
      }
      class k {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return p(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: p(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new T(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: p(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          const t = this._parse(e);
          if (I(t)) throw new Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          const t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          const a = this.safeParse(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        safeParse(e, t) {
          var a;
          const r = {
              common: {
                issues: [],
                async:
                  null !== (a = null == t ? void 0 : t.async) &&
                  void 0 !== a &&
                  a,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: p(e),
            },
            n = this._parseSync({ data: e, path: r.path, parent: r });
          return N(r, n);
        }
        async parseAsync(e, t) {
          const a = await this.safeParseAsync(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        async safeParseAsync(e, t) {
          const a = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: p(e),
            },
            r = this._parse({ data: e, path: a.path, parent: a }),
            n = await (I(r) ? r : Promise.resolve(r));
          return N(a, n);
        }
        refine(e, t) {
          const a = (e) =>
            "string" == typeof t || typeof t > "u"
              ? { message: t }
              : "function" == typeof t
              ? t(e)
              : t;
          return this._refinement((t, r) => {
            const n = e(t),
              i = () => r.addIssue({ code: m.custom, ...a(t) });
            return typeof Promise < "u" && n instanceof Promise
              ? n.then((e) => !!e || (i(), !1))
              : !!n || (i(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (a, r) =>
              !!e(a) || (r.addIssue("function" == typeof t ? t(a, r) : t), !1)
          );
        }
        _refinement(e) {
          return new Se({
            schema: this,
            typeName: je.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return be.create(this);
        }
        nullable() {
          return xe.create(this);
        }
        nullish() {
          return this.optional().nullable();
        }
        array() {
          return Q.create(this);
        }
        promise() {
          return _e.create(this);
        }
        or(e) {
          return ne.create([this, e]);
        }
        and(e) {
          return ce.create(this, e);
        }
        transform(e) {
          return new Se({
            schema: this,
            typeName: je.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          return new Te({
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: je.ZodDefault,
          });
        }
        brand() {
          return new Ee({ typeName: je.ZodBranded, type: this, ...A(void 0) });
        }
        catch(e) {
          return new Me({
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: je.ZodCatch,
          });
        }
        describe(e) {
          return new (0, this.constructor)({ ...this._def, description: e });
        }
        pipe(e) {
          return we.create(this, e);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      const B = /^c[^\s-]{8,}$/i,
        Z =
          /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
        R =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        W = (e) =>
          e.precision
            ? e.offset
              ? new RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}:\\d{2})|Z)$`
                )
              : new RegExp(
                  `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`
                )
            : 0 === e.precision
            ? e.offset
              ? new RegExp(
                  "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}:\\d{2})|Z)$"
                )
              : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
            : e.offset
            ? new RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}:\\d{2})|Z)$"
              )
            : new RegExp(
                "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"
              );
      class z extends k {
        constructor() {
          super(...arguments),
            (this._regex = (e, t, a) =>
              this.refinement((t) => e.test(t), {
                validation: t,
                code: m.invalid_string,
                ...j.errToObj(a),
              })),
            (this.nonempty = (e) => this.min(1, j.errToObj(e))),
            (this.trim = () =>
              new z({
                ...this._def,
                checks: [...this._def.checks, { kind: "trim" }],
              }));
        }
        _parse(e) {
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== l.string)
          ) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.string,
                received: t.parsedType,
              }),
              M
            );
          }
          const t = new T();
          let a;
          for (const n of this._def.checks)
            if ("min" === n.kind)
              e.data.length < n.value &&
                ((a = this._getOrReturnCtx(e, a)),
                x(a, {
                  code: m.too_small,
                  minimum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                t.dirty());
            else if ("max" === n.kind)
              e.data.length > n.value &&
                ((a = this._getOrReturnCtx(e, a)),
                x(a, {
                  code: m.too_big,
                  maximum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                t.dirty());
            else if ("length" === n.kind) {
              const r = e.data.length > n.value,
                i = e.data.length < n.value;
              (r || i) &&
                ((a = this._getOrReturnCtx(e, a)),
                r
                  ? x(a, {
                      code: m.too_big,
                      maximum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    })
                  : i &&
                    x(a, {
                      code: m.too_small,
                      minimum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    }),
                t.dirty());
            } else if ("email" === n.kind)
              R.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                x(a, {
                  validation: "email",
                  code: m.invalid_string,
                  message: n.message,
                }),
                t.dirty());
            else if ("uuid" === n.kind)
              Z.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                x(a, {
                  validation: "uuid",
                  code: m.invalid_string,
                  message: n.message,
                }),
                t.dirty());
            else if ("cuid" === n.kind)
              B.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                x(a, {
                  validation: "cuid",
                  code: m.invalid_string,
                  message: n.message,
                }),
                t.dirty());
            else if ("url" === n.kind)
              try {
                new URL(e.data);
              } catch {
                (a = this._getOrReturnCtx(e, a)),
                  x(a, {
                    validation: "url",
                    code: m.invalid_string,
                    message: n.message,
                  }),
                  t.dirty();
              }
            else
              "regex" === n.kind
                ? ((n.regex.lastIndex = 0),
                  n.regex.test(e.data) ||
                    ((a = this._getOrReturnCtx(e, a)),
                    x(a, {
                      validation: "regex",
                      code: m.invalid_string,
                      message: n.message,
                    }),
                    t.dirty()))
                : "trim" === n.kind
                ? (e.data = e.data.trim())
                : "startsWith" === n.kind
                ? e.data.startsWith(n.value) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  x(a, {
                    code: m.invalid_string,
                    validation: { startsWith: n.value },
                    message: n.message,
                  }),
                  t.dirty())
                : "endsWith" === n.kind
                ? e.data.endsWith(n.value) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  x(a, {
                    code: m.invalid_string,
                    validation: { endsWith: n.value },
                    message: n.message,
                  }),
                  t.dirty())
                : "datetime" === n.kind
                ? W(n).test(e.data) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  x(a, {
                    code: m.invalid_string,
                    validation: "datetime",
                    message: n.message,
                  }),
                  t.dirty())
                : r.assertNever(n);
          return { status: t.value, value: e.data };
        }
        _addCheck(e) {
          return new z({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...j.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...j.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...j.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...j.errToObj(e) });
        }
        datetime(e) {
          var t;
          return "string" == typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision:
                  typeof (null == e ? void 0 : e.precision) > "u"
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                ...j.errToObj(null == e ? void 0 : e.message),
              });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...j.errToObj(t) });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...j.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...j.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...j.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...j.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: "length", value: e, ...j.errToObj(t) });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get minLength() {
          let e = null;
          for (const t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (const t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      function L(e, t) {
        const a = (e.toString().split(".")[1] || "").length,
          r = (t.toString().split(".")[1] || "").length,
          n = a > r ? a : r;
        return (
          (parseInt(e.toFixed(n).replace(".", "")) %
            parseInt(t.toFixed(n).replace(".", ""))) /
          Math.pow(10, n)
        );
      }
      z.create = (e) => {
        var t;
        return new z({
          checks: [],
          typeName: je.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...A(e),
        });
      };
      class q extends k {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== l.number)
          ) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.number,
                received: t.parsedType,
              }),
              M
            );
          }
          let t;
          const a = new T();
          for (const n of this._def.checks)
            "int" === n.kind
              ? r.isInteger(e.data) ||
                ((t = this._getOrReturnCtx(e, t)),
                x(t, {
                  code: m.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: n.message,
                }),
                a.dirty())
              : "min" === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                x(t, {
                  code: m.too_small,
                  minimum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                a.dirty())
              : "max" === n.kind
              ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                x(t, {
                  code: m.too_big,
                  maximum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                a.dirty())
              : "multipleOf" === n.kind
              ? 0 !== L(e.data, n.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                x(t, {
                  code: m.not_multiple_of,
                  multipleOf: n.value,
                  message: n.message,
                }),
                a.dirty())
              : "finite" === n.kind
              ? Number.isFinite(e.data) ||
                ((t = this._getOrReturnCtx(e, t)),
                x(t, { code: m.not_finite, message: n.message }),
                a.dirty())
              : r.assertNever(n);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, j.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, j.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, j.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, j.toString(t));
        }
        setLimit(e, t, a, r) {
          return new q({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: j.toString(r) },
            ],
          });
        }
        _addCheck(e) {
          return new q({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: j.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: j.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: j.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: j.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: j.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: j.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: j.toString(e) });
        }
        get minValue() {
          let e = null;
          for (const t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (const t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find((e) => "int" === e.kind);
        }
      }
      q.create = (e) =>
        new q({
          checks: [],
          typeName: je.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...A(e),
        });
      class U extends k {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = BigInt(e.data)),
            this._getType(e) !== l.bigint)
          ) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.bigint,
                received: t.parsedType,
              }),
              M
            );
          }
          return C(e.data);
        }
      }
      U.create = (e) => {
        var t;
        return new U({
          typeName: je.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...A(e),
        });
      };
      class V extends k {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== l.boolean)
          ) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.boolean,
                received: t.parsedType,
              }),
              M
            );
          }
          return C(e.data);
        }
      }
      V.create = (e) =>
        new V({
          typeName: je.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...A(e),
        });
      class F extends k {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== l.date)
          ) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.date,
                received: t.parsedType,
              }),
              M
            );
          }
          if (isNaN(e.data.getTime())) {
            return x(this._getOrReturnCtx(e), { code: m.invalid_date }), M;
          }
          const t = new T();
          let a;
          for (const n of this._def.checks)
            "min" === n.kind
              ? e.data.getTime() < n.value &&
                ((a = this._getOrReturnCtx(e, a)),
                x(a, {
                  code: m.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: "date",
                }),
                t.dirty())
              : "max" === n.kind
              ? e.data.getTime() > n.value &&
                ((a = this._getOrReturnCtx(e, a)),
                x(a, {
                  code: m.too_big,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: n.value,
                  type: "date",
                }),
                t.dirty())
              : r.assertNever(n);
          return { status: t.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new F({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: j.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: j.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (const t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (const t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      F.create = (e) =>
        new F({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: je.ZodDate,
          ...A(e),
        });
      class $ extends k {
        _parse(e) {
          if (this._getType(e) !== l.symbol) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.symbol,
                received: t.parsedType,
              }),
              M
            );
          }
          return C(e.data);
        }
      }
      $.create = (e) => new $({ typeName: je.ZodSymbol, ...A(e) });
      class G extends k {
        _parse(e) {
          if (this._getType(e) !== l.undefined) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.undefined,
                received: t.parsedType,
              }),
              M
            );
          }
          return C(e.data);
        }
      }
      G.create = (e) => new G({ typeName: je.ZodUndefined, ...A(e) });
      class K extends k {
        _parse(e) {
          if (this._getType(e) !== l.null) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.null,
                received: t.parsedType,
              }),
              M
            );
          }
          return C(e.data);
        }
      }
      K.create = (e) => new K({ typeName: je.ZodNull, ...A(e) });
      class H extends k {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return C(e.data);
        }
      }
      H.create = (e) => new H({ typeName: je.ZodAny, ...A(e) });
      class Y extends k {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return C(e.data);
        }
      }
      Y.create = (e) => new Y({ typeName: je.ZodUnknown, ...A(e) });
      class J extends k {
        _parse(e) {
          const t = this._getOrReturnCtx(e);
          return (
            x(t, {
              code: m.invalid_type,
              expected: l.never,
              received: t.parsedType,
            }),
            M
          );
        }
      }
      J.create = (e) => new J({ typeName: je.ZodNever, ...A(e) });
      class X extends k {
        _parse(e) {
          if (this._getType(e) !== l.undefined) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.void,
                received: t.parsedType,
              }),
              M
            );
          }
          return C(e.data);
        }
      }
      X.create = (e) => new X({ typeName: je.ZodVoid, ...A(e) });
      class Q extends k {
        _parse(e) {
          const { ctx: t, status: a } = this._processInputParams(e),
            r = this._def;
          if (t.parsedType !== l.array)
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.array,
                received: t.parsedType,
              }),
              M
            );
          if (null !== r.exactLength) {
            const e = t.data.length > r.exactLength.value,
              n = t.data.length < r.exactLength.value;
            (e || n) &&
              (x(t, {
                code: e ? m.too_big : m.too_small,
                minimum: n ? r.exactLength.value : void 0,
                maximum: e ? r.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message,
              }),
              a.dirty());
          }
          if (
            (null !== r.minLength &&
              t.data.length < r.minLength.value &&
              (x(t, {
                code: m.too_small,
                minimum: r.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: r.minLength.message,
              }),
              a.dirty()),
            null !== r.maxLength &&
              t.data.length > r.maxLength.value &&
              (x(t, {
                code: m.too_big,
                maximum: r.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: r.maxLength.message,
              }),
              a.dirty()),
            t.common.async)
          )
            return Promise.all(
              t.data.map((e, a) => r.type._parseAsync(new D(t, e, t.path, a)))
            ).then((e) => T.mergeArray(a, e));
          const n = t.data.map((e, a) =>
            r.type._parseSync(new D(t, e, t.path, a))
          );
          return T.mergeArray(a, n);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new Q({
            ...this._def,
            minLength: { value: e, message: j.toString(t) },
          });
        }
        max(e, t) {
          return new Q({
            ...this._def,
            maxLength: { value: e, message: j.toString(t) },
          });
        }
        length(e, t) {
          return new Q({
            ...this._def,
            exactLength: { value: e, message: j.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      var ee;
      (Q.create = (e, t) =>
        new Q({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: je.ZodArray,
          ...A(t),
        })),
        (function (e) {
          e.mergeShapes = (e, t) => ({ ...e, ...t });
        })(ee || (ee = {}));
      const te = (e) => (t) =>
        new re({ ...e, shape: () => ({ ...e.shape(), ...t }) });
      function ae(e) {
        if (e instanceof re) {
          const t = {};
          for (const a in e.shape) {
            const r = e.shape[a];
            t[a] = be.create(ae(r));
          }
          return new re({ ...e._def, shape: () => t });
        }
        return e instanceof Q
          ? Q.create(ae(e.element))
          : e instanceof be
          ? be.create(ae(e.unwrap()))
          : e instanceof xe
          ? xe.create(ae(e.unwrap()))
          : e instanceof de
          ? de.create(e.items.map((e) => ae(e)))
          : e;
      }
      class re extends k {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = te(this._def)),
            (this.extend = te(this._def));
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          const e = this._def.shape(),
            t = r.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== l.object) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.object,
                received: t.parsedType,
              }),
              M
            );
          }
          const { status: t, ctx: a } = this._processInputParams(e),
            { shape: r, keys: n } = this._getCached(),
            i = [];
          if (
            !(
              this._def.catchall instanceof J &&
              "strip" === this._def.unknownKeys
            )
          )
            for (const s in a.data) n.includes(s) || i.push(s);
          const o = [];
          for (const s of n) {
            const e = r[s],
              t = a.data[s];
            o.push({
              key: { status: "valid", value: s },
              value: e._parse(new D(a, t, a.path, s)),
              alwaysSet: s in a.data,
            });
          }
          if (this._def.catchall instanceof J) {
            const e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (const t of i)
                o.push({
                  key: { status: "valid", value: t },
                  value: { status: "valid", value: a.data[t] },
                });
            else if ("strict" === e)
              i.length > 0 &&
                (x(a, { code: m.unrecognized_keys, keys: i }), t.dirty());
            else if ("strip" !== e)
              throw new Error(
                "Internal ZodObject error: invalid unknownKeys value."
              );
          } else {
            const e = this._def.catchall;
            for (const t of i) {
              const r = a.data[t];
              o.push({
                key: { status: "valid", value: t },
                value: e._parse(new D(a, r, a.path, t)),
                alwaysSet: t in a.data,
              });
            }
          }
          return a.common.async
            ? Promise.resolve()
                .then(async () => {
                  const e = [];
                  for (const t of o) {
                    const a = await t.key;
                    e.push({
                      key: a,
                      value: await t.value,
                      alwaysSet: t.alwaysSet,
                    });
                  }
                  return e;
                })
                .then((e) => T.mergeObjectSync(t, e))
            : T.mergeObjectSync(t, o);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            j.errToObj,
            new re({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, a) => {
                      var r, n, i, o;
                      const s =
                        null !==
                          (i =
                            null === (n = (r = this._def).errorMap) ||
                            void 0 === n
                              ? void 0
                              : n.call(r, t, a).message) && void 0 !== i
                          ? i
                          : a.defaultError;
                      return "unrecognized_keys" === t.code
                        ? {
                            message:
                              null !== (o = j.errToObj(e).message) &&
                              void 0 !== o
                                ? o
                                : s,
                          }
                        : { message: s };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new re({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new re({ ...this._def, unknownKeys: "passthrough" });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        merge(e) {
          return new re({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ee.mergeShapes(this._def.shape(), e._def.shape()),
            typeName: je.ZodObject,
          });
        }
        catchall(e) {
          return new re({ ...this._def, catchall: e });
        }
        pick(e) {
          const t = {};
          return (
            r.objectKeys(e).map((e) => {
              this.shape[e] && (t[e] = this.shape[e]);
            }),
            new re({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          const t = {};
          return (
            r.objectKeys(this.shape).map((a) => {
              -1 === r.objectKeys(e).indexOf(a) && (t[a] = this.shape[a]);
            }),
            new re({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return ae(this);
        }
        partial(e) {
          const t = {};
          if (e)
            return (
              r.objectKeys(this.shape).map((a) => {
                -1 === r.objectKeys(e).indexOf(a)
                  ? (t[a] = this.shape[a])
                  : (t[a] = this.shape[a].optional());
              }),
              new re({ ...this._def, shape: () => t })
            );
          for (const a in this.shape) {
            const e = this.shape[a];
            t[a] = e.optional();
          }
          return new re({ ...this._def, shape: () => t });
        }
        required(e) {
          const t = {};
          if (e)
            r.objectKeys(this.shape).map((a) => {
              if (-1 === r.objectKeys(e).indexOf(a)) t[a] = this.shape[a];
              else {
                let e = this.shape[a];
                for (; e instanceof be; ) e = e._def.innerType;
                t[a] = e;
              }
            });
          else
            for (const a in this.shape) {
              let e = this.shape[a];
              for (; e instanceof be; ) e = e._def.innerType;
              t[a] = e;
            }
          return new re({ ...this._def, shape: () => t });
        }
        keyof() {
          return ge(r.objectKeys(this.shape));
        }
      }
      (re.create = (e, t) =>
        new re({
          shape: () => e,
          unknownKeys: "strip",
          catchall: J.create(),
          typeName: je.ZodObject,
          ...A(t),
        })),
        (re.strictCreate = (e, t) =>
          new re({
            shape: () => e,
            unknownKeys: "strict",
            catchall: J.create(),
            typeName: je.ZodObject,
            ...A(t),
          })),
        (re.lazycreate = (e, t) =>
          new re({
            shape: e,
            unknownKeys: "strip",
            catchall: J.create(),
            typeName: je.ZodObject,
            ...A(t),
          }));
      class ne extends k {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            a = this._def.options;
          if (t.common.async)
            return Promise.all(
              a.map(async (e) => {
                const a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: a,
                  }),
                  ctx: a,
                };
              })
            ).then(function (e) {
              for (const t of e)
                if ("valid" === t.result.status) return t.result;
              for (const r of e)
                if ("dirty" === r.result.status)
                  return t.common.issues.push(...r.ctx.common.issues), r.result;
              const a = e.map((e) => new f(e.ctx.common.issues));
              return x(t, { code: m.invalid_union, unionErrors: a }), M;
            });
          {
            let e;
            const r = [];
            for (const i of a) {
              const a = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                n = i._parseSync({ data: t.data, path: t.path, parent: a });
              if ("valid" === n.status) return n;
              "dirty" === n.status && !e && (e = { result: n, ctx: a }),
                a.common.issues.length && r.push(a.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            const n = r.map((e) => new f(e));
            return x(t, { code: m.invalid_union, unionErrors: n }), M;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      ne.create = (e, t) =>
        new ne({ options: e, typeName: je.ZodUnion, ...A(t) });
      const ie = (e) =>
        e instanceof he
          ? ie(e.schema)
          : e instanceof Se
          ? ie(e.innerType())
          : e instanceof fe
          ? [e.value]
          : e instanceof ye
          ? e.options
          : e instanceof ve
          ? Object.keys(e.enum)
          : e instanceof Te
          ? ie(e._def.innerType)
          : e instanceof G
          ? [void 0]
          : e instanceof K
          ? [null]
          : null;
      class oe extends k {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== l.object)
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.object,
                received: t.parsedType,
              }),
              M
            );
          const a = this.discriminator,
            r = t.data[a],
            n = this.optionsMap.get(r);
          return n
            ? t.common.async
              ? n._parseAsync({ data: t.data, path: t.path, parent: t })
              : n._parseSync({ data: t.data, path: t.path, parent: t })
            : (x(t, {
                code: m.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [a],
              }),
              M);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, a) {
          const r = new Map();
          for (const n of t) {
            const t = ie(n.shape[e]);
            if (!t)
              throw new Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (const a of t) {
              if (r.has(a))
                throw new Error(
                  `Discriminator property ${String(
                    e
                  )} has duplicate value ${String(a)}`
                );
              r.set(a, n);
            }
          }
          return new oe({
            typeName: je.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...A(a),
          });
        }
      }
      function se(e, t) {
        const a = p(e),
          n = p(t);
        if (e === t) return { valid: !0, data: e };
        if (a === l.object && n === l.object) {
          const a = r.objectKeys(t),
            n = r.objectKeys(e).filter((e) => -1 !== a.indexOf(e)),
            i = { ...e, ...t };
          for (const r of n) {
            const a = se(e[r], t[r]);
            if (!a.valid) return { valid: !1 };
            i[r] = a.data;
          }
          return { valid: !0, data: i };
        }
        if (a === l.array && n === l.array) {
          if (e.length !== t.length) return { valid: !1 };
          const a = [];
          for (let r = 0; r < e.length; r++) {
            const n = se(e[r], t[r]);
            if (!n.valid) return { valid: !1 };
            a.push(n.data);
          }
          return { valid: !0, data: a };
        }
        return a === l.date && n === l.date && +e == +t
          ? { valid: !0, data: e }
          : { valid: !1 };
      }
      class ce extends k {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e),
            r = (e, r) => {
              if (E(e) || E(r)) return M;
              const n = se(e.value, r.value);
              return n.valid
                ? ((w(e) || w(r)) && t.dirty(),
                  { status: t.value, value: n.data })
                : (x(a, { code: m.invalid_intersection_types }), M);
            };
          return a.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                }),
                this._def.right._parseAsync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                }),
              ]).then(([e, t]) => r(e, t))
            : r(
                this._def.left._parseSync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                }),
                this._def.right._parseSync({
                  data: a.data,
                  path: a.path,
                  parent: a,
                })
              );
        }
      }
      ce.create = (e, t, a) =>
        new ce({ left: e, right: t, typeName: je.ZodIntersection, ...A(a) });
      class de extends k {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== l.array)
            return (
              x(a, {
                code: m.invalid_type,
                expected: l.array,
                received: a.parsedType,
              }),
              M
            );
          if (a.data.length < this._def.items.length)
            return (
              x(a, {
                code: m.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              M
            );
          !this._def.rest &&
            a.data.length > this._def.items.length &&
            (x(a, {
              code: m.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          const r = a.data
            .map((e, t) => {
              const r = this._def.items[t] || this._def.rest;
              return r ? r._parse(new D(a, e, a.path, t)) : null;
            })
            .filter((e) => !!e);
          return a.common.async
            ? Promise.all(r).then((e) => T.mergeArray(t, e))
            : T.mergeArray(t, r);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new de({ ...this._def, rest: e });
        }
      }
      de.create = (e, t) => {
        if (!Array.isArray(e))
          throw new Error(
            "You must pass an array of schemas to z.tuple([ ... ])"
          );
        return new de({ items: e, typeName: je.ZodTuple, rest: null, ...A(t) });
      };
      class ue extends k {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== l.object)
            return (
              x(a, {
                code: m.invalid_type,
                expected: l.object,
                received: a.parsedType,
              }),
              M
            );
          const r = [],
            n = this._def.keyType,
            i = this._def.valueType;
          for (const o in a.data)
            r.push({
              key: n._parse(new D(a, o, a.path, o)),
              value: i._parse(new D(a, a.data[o], a.path, o)),
            });
          return a.common.async
            ? T.mergeObjectAsync(t, r)
            : T.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, a) {
          return new ue(
            t instanceof k
              ? { keyType: e, valueType: t, typeName: je.ZodRecord, ...A(a) }
              : {
                  keyType: z.create(),
                  valueType: e,
                  typeName: je.ZodRecord,
                  ...A(t),
                }
          );
        }
      }
      class le extends k {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== l.map)
            return (
              x(a, {
                code: m.invalid_type,
                expected: l.map,
                received: a.parsedType,
              }),
              M
            );
          const r = this._def.keyType,
            n = this._def.valueType,
            i = [...a.data.entries()].map(([e, t], i) => ({
              key: r._parse(new D(a, e, a.path, [i, "key"])),
              value: n._parse(new D(a, t, a.path, [i, "value"])),
            }));
          if (a.common.async) {
            const e = new Map();
            return Promise.resolve().then(async () => {
              for (const a of i) {
                const r = await a.key,
                  n = await a.value;
                if ("aborted" === r.status || "aborted" === n.status) return M;
                ("dirty" === r.status || "dirty" === n.status) && t.dirty(),
                  e.set(r.value, n.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            const e = new Map();
            for (const a of i) {
              const r = a.key,
                n = a.value;
              if ("aborted" === r.status || "aborted" === n.status) return M;
              ("dirty" === r.status || "dirty" === n.status) && t.dirty(),
                e.set(r.value, n.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      le.create = (e, t, a) =>
        new le({ valueType: t, keyType: e, typeName: je.ZodMap, ...A(a) });
      class pe extends k {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== l.set)
            return (
              x(a, {
                code: m.invalid_type,
                expected: l.set,
                received: a.parsedType,
              }),
              M
            );
          const r = this._def;
          null !== r.minSize &&
            a.data.size < r.minSize.value &&
            (x(a, {
              code: m.too_small,
              minimum: r.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: r.minSize.message,
            }),
            t.dirty()),
            null !== r.maxSize &&
              a.data.size > r.maxSize.value &&
              (x(a, {
                code: m.too_big,
                maximum: r.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: r.maxSize.message,
              }),
              t.dirty());
          const n = this._def.valueType;
          function i(e) {
            const a = new Set();
            for (const r of e) {
              if ("aborted" === r.status) return M;
              "dirty" === r.status && t.dirty(), a.add(r.value);
            }
            return { status: t.value, value: a };
          }
          const o = [...a.data.values()].map((e, t) =>
            n._parse(new D(a, e, a.path, t))
          );
          return a.common.async ? Promise.all(o).then((e) => i(e)) : i(o);
        }
        min(e, t) {
          return new pe({
            ...this._def,
            minSize: { value: e, message: j.toString(t) },
          });
        }
        max(e, t) {
          return new pe({
            ...this._def,
            maxSize: { value: e, message: j.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      pe.create = (e, t) =>
        new pe({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: je.ZodSet,
          ...A(t),
        });
      class me extends k {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== l.function)
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.function,
                received: t.parsedType,
              }),
              M
            );
          function a(e, a) {
            return S({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                _(),
                g,
              ].filter((e) => !!e),
              issueData: { code: m.invalid_arguments, argumentsError: a },
            });
          }
          function r(e, a) {
            return S({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                _(),
                g,
              ].filter((e) => !!e),
              issueData: { code: m.invalid_return_type, returnTypeError: a },
            });
          }
          const n = { errorMap: t.common.contextualErrorMap },
            i = t.data;
          return this._def.returns instanceof _e
            ? C(async (...e) => {
                const t = new f([]),
                  o = await this._def.args.parseAsync(e, n).catch((r) => {
                    throw (t.addIssue(a(e, r)), t);
                  }),
                  s = await i(...o);
                return await this._def.returns._def.type
                  .parseAsync(s, n)
                  .catch((e) => {
                    throw (t.addIssue(r(s, e)), t);
                  });
              })
            : C((...e) => {
                const t = this._def.args.safeParse(e, n);
                if (!t.success) throw new f([a(e, t.error)]);
                const o = i(...t.data),
                  s = this._def.returns.safeParse(o, n);
                if (!s.success) throw new f([r(o, s.error)]);
                return s.data;
              });
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new me({ ...this._def, args: de.create(e).rest(Y.create()) });
        }
        returns(e) {
          return new me({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, a) {
          return new me({
            args: e || de.create([]).rest(Y.create()),
            returns: t || Y.create(),
            typeName: je.ZodFunction,
            ...A(a),
          });
        }
      }
      class he extends k {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      he.create = (e, t) =>
        new he({ getter: e, typeName: je.ZodLazy, ...A(t) });
      class fe extends k {
        _parse(e) {
          if (e.data !== this._def.value) {
            return (
              x(this._getOrReturnCtx(e), {
                code: m.invalid_literal,
                expected: this._def.value,
              }),
              M
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ge(e, t) {
        return new ye({ values: e, typeName: je.ZodEnum, ...A(t) });
      }
      fe.create = (e, t) =>
        new fe({ value: e, typeName: je.ZodLiteral, ...A(t) });
      class ye extends k {
        _parse(e) {
          if ("string" != typeof e.data) {
            const t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              x(t, {
                expected: r.joinValues(a),
                received: t.parsedType,
                code: m.invalid_type,
              }),
              M
            );
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            const t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              x(t, {
                received: t.data,
                code: m.invalid_enum_value,
                options: a,
              }),
              M
            );
          }
          return C(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
      }
      ye.create = ge;
      class ve extends k {
        _parse(e) {
          const t = r.getValidEnumValues(this._def.values),
            a = this._getOrReturnCtx(e);
          if (a.parsedType !== l.string && a.parsedType !== l.number) {
            const e = r.objectValues(t);
            return (
              x(a, {
                expected: r.joinValues(e),
                received: a.parsedType,
                code: m.invalid_type,
              }),
              M
            );
          }
          if (-1 === t.indexOf(e.data)) {
            const e = r.objectValues(t);
            return (
              x(a, {
                received: a.data,
                code: m.invalid_enum_value,
                options: e,
              }),
              M
            );
          }
          return C(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      ve.create = (e, t) =>
        new ve({ values: e, typeName: je.ZodNativeEnum, ...A(t) });
      class _e extends k {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== l.promise && !1 === t.common.async)
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.promise,
                received: t.parsedType,
              }),
              M
            );
          const a =
            t.parsedType === l.promise ? t.data : Promise.resolve(t.data);
          return C(
            a.then((e) =>
              this._def.type.parseAsync(e, {
                path: t.path,
                errorMap: t.common.contextualErrorMap,
              })
            )
          );
        }
      }
      _e.create = (e, t) =>
        new _e({ type: e, typeName: je.ZodPromise, ...A(t) });
      class Se extends k {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === je.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e),
            n = this._def.effect || null;
          if ("preprocess" === n.type) {
            const e = n.transform(a.data);
            return a.common.async
              ? Promise.resolve(e).then((e) =>
                  this._def.schema._parseAsync({
                    data: e,
                    path: a.path,
                    parent: a,
                  })
                )
              : this._def.schema._parseSync({
                  data: e,
                  path: a.path,
                  parent: a,
                });
          }
          const i = {
            addIssue: (e) => {
              x(a, e), e.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return a.path;
            },
          };
          if (((i.addIssue = i.addIssue.bind(i)), "refinement" === n.type)) {
            const e = (e) => {
              const t = n.refinement(e, i);
              if (a.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw new Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return e;
            };
            if (!1 === a.common.async) {
              const r = this._def.schema._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              return "aborted" === r.status
                ? M
                : ("dirty" === r.status && t.dirty(),
                  e(r.value),
                  { status: t.value, value: r.value });
            }
            return this._def.schema
              ._parseAsync({ data: a.data, path: a.path, parent: a })
              .then((a) =>
                "aborted" === a.status
                  ? M
                  : ("dirty" === a.status && t.dirty(),
                    e(a.value).then(() => ({
                      status: t.value,
                      value: a.value,
                    })))
              );
          }
          if ("transform" === n.type) {
            if (!1 === a.common.async) {
              const e = this._def.schema._parseSync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              if (!P(e)) return e;
              const r = n.transform(e.value, i);
              if (r instanceof Promise)
                throw new Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return { status: t.value, value: r };
            }
            return this._def.schema
              ._parseAsync({ data: a.data, path: a.path, parent: a })
              .then((e) =>
                P(e)
                  ? Promise.resolve(n.transform(e.value, i)).then((e) => ({
                      status: t.value,
                      value: e,
                    }))
                  : e
              );
          }
          r.assertNever(n);
        }
      }
      (Se.create = (e, t, a) =>
        new Se({ schema: e, typeName: je.ZodEffects, effect: t, ...A(a) })),
        (Se.createWithPreprocess = (e, t, a) =>
          new Se({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: je.ZodEffects,
            ...A(a),
          }));
      class be extends k {
        _parse(e) {
          return this._getType(e) === l.undefined
            ? C(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      be.create = (e, t) =>
        new be({ innerType: e, typeName: je.ZodOptional, ...A(t) });
      class xe extends k {
        _parse(e) {
          return this._getType(e) === l.null
            ? C(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      xe.create = (e, t) =>
        new xe({ innerType: e, typeName: je.ZodNullable, ...A(t) });
      class Te extends k {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          let a = t.data;
          return (
            t.parsedType === l.undefined && (a = this._def.defaultValue()),
            this._def.innerType._parse({ data: a, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      Te.create = (e, t) =>
        new Te({
          innerType: e,
          typeName: je.ZodDefault,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ...A(t),
        });
      class Me extends k {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            a = this._def.innerType._parse({
              data: t.data,
              path: t.path,
              parent: t,
            });
          return I(a)
            ? a.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status ? e.value : this._def.defaultValue(),
              }))
            : {
                status: "valid",
                value:
                  "valid" === a.status ? a.value : this._def.defaultValue(),
              };
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      Me.create = (e, t) =>
        new Me({
          innerType: e,
          typeName: je.ZodCatch,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ...A(t),
        });
      class Oe extends k {
        _parse(e) {
          if (this._getType(e) !== l.nan) {
            const t = this._getOrReturnCtx(e);
            return (
              x(t, {
                code: m.invalid_type,
                expected: l.nan,
                received: t.parsedType,
              }),
              M
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      Oe.create = (e) => new Oe({ typeName: je.ZodNaN, ...A(e) });
      const Ce = Symbol("zod_brand");
      class Ee extends k {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            a = t.data;
          return this._def.type._parse({ data: a, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class we extends k {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.common.async)
            return (async () => {
              const e = await this._def.in._parseAsync({
                data: a.data,
                path: a.path,
                parent: a,
              });
              return "aborted" === e.status
                ? M
                : "dirty" === e.status
                ? (t.dirty(), O(e.value))
                : this._def.out._parseAsync({
                    data: e.value,
                    path: a.path,
                    parent: a,
                  });
            })();
          {
            const e = this._def.in._parseSync({
              data: a.data,
              path: a.path,
              parent: a,
            });
            return "aborted" === e.status
              ? M
              : "dirty" === e.status
              ? (t.dirty(), { status: "dirty", value: e.value })
              : this._def.out._parseSync({
                  data: e.value,
                  path: a.path,
                  parent: a,
                });
          }
        }
        static create(e, t) {
          return new we({ in: e, out: t, typeName: je.ZodPipeline });
        }
      }
      const Pe = (e, t = {}, a) =>
          e
            ? H.create().superRefine((r, n) => {
                if (!e(r)) {
                  const e = "function" == typeof t ? t(r) : t,
                    i = "string" == typeof e ? { message: e } : e;
                  n.addIssue({ code: "custom", ...i, fatal: a });
                }
              })
            : H.create(),
        Ie = { object: re.lazycreate };
      var je;
      !(function (e) {
        (e.ZodString = "ZodString"),
          (e.ZodNumber = "ZodNumber"),
          (e.ZodNaN = "ZodNaN"),
          (e.ZodBigInt = "ZodBigInt"),
          (e.ZodBoolean = "ZodBoolean"),
          (e.ZodDate = "ZodDate"),
          (e.ZodSymbol = "ZodSymbol"),
          (e.ZodUndefined = "ZodUndefined"),
          (e.ZodNull = "ZodNull"),
          (e.ZodAny = "ZodAny"),
          (e.ZodUnknown = "ZodUnknown"),
          (e.ZodNever = "ZodNever"),
          (e.ZodVoid = "ZodVoid"),
          (e.ZodArray = "ZodArray"),
          (e.ZodObject = "ZodObject"),
          (e.ZodUnion = "ZodUnion"),
          (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
          (e.ZodIntersection = "ZodIntersection"),
          (e.ZodTuple = "ZodTuple"),
          (e.ZodRecord = "ZodRecord"),
          (e.ZodMap = "ZodMap"),
          (e.ZodSet = "ZodSet"),
          (e.ZodFunction = "ZodFunction"),
          (e.ZodLazy = "ZodLazy"),
          (e.ZodLiteral = "ZodLiteral"),
          (e.ZodEnum = "ZodEnum"),
          (e.ZodEffects = "ZodEffects"),
          (e.ZodNativeEnum = "ZodNativeEnum"),
          (e.ZodOptional = "ZodOptional"),
          (e.ZodNullable = "ZodNullable"),
          (e.ZodDefault = "ZodDefault"),
          (e.ZodCatch = "ZodCatch"),
          (e.ZodPromise = "ZodPromise"),
          (e.ZodBranded = "ZodBranded"),
          (e.ZodPipeline = "ZodPipeline");
      })(je || (je = {}));
      const De = (e, t = { message: `Input not instance of ${e.name}` }) =>
          Pe((t) => t instanceof e, t, !0),
        Ne = z.create,
        Ae = q.create,
        ke = Oe.create,
        Be = U.create,
        Ze = V.create,
        Re = F.create,
        We = $.create,
        ze = G.create,
        Le = K.create,
        qe = H.create,
        Ue = Y.create,
        Ve = J.create,
        Fe = X.create,
        $e = Q.create,
        Ge = re.create,
        Ke = re.strictCreate,
        He = ne.create,
        Ye = oe.create,
        Je = ce.create,
        Xe = de.create,
        Qe = ue.create,
        et = le.create,
        tt = pe.create,
        at = me.create,
        rt = he.create,
        nt = fe.create,
        it = ye.create,
        ot = ve.create,
        st = _e.create,
        ct = Se.create,
        dt = be.create,
        ut = xe.create,
        lt = Se.createWithPreprocess,
        pt = we.create,
        mt = () => Ne().optional(),
        ht = () => Ae().optional(),
        ft = () => Ze().optional(),
        gt = {
          string: (e) => z.create({ ...e, coerce: !0 }),
          number: (e) => q.create({ ...e, coerce: !0 }),
          boolean: (e) => V.create({ ...e, coerce: !0 }),
          bigint: (e) => U.create({ ...e, coerce: !0 }),
          date: (e) => F.create({ ...e, coerce: !0 }),
        },
        yt = M;
      var vt = Object.freeze({
        __proto__: null,
        defaultErrorMap: g,
        setErrorMap: v,
        getErrorMap: _,
        makeIssue: S,
        EMPTY_PATH: b,
        addIssueToContext: x,
        ParseStatus: T,
        INVALID: M,
        DIRTY: O,
        OK: C,
        isAborted: E,
        isDirty: w,
        isValid: P,
        isAsync: I,
        get util() {
          return r;
        },
        ZodParsedType: l,
        getParsedType: p,
        ZodType: k,
        ZodString: z,
        ZodNumber: q,
        ZodBigInt: U,
        ZodBoolean: V,
        ZodDate: F,
        ZodSymbol: $,
        ZodUndefined: G,
        ZodNull: K,
        ZodAny: H,
        ZodUnknown: Y,
        ZodNever: J,
        ZodVoid: X,
        ZodArray: Q,
        get objectUtil() {
          return ee;
        },
        ZodObject: re,
        ZodUnion: ne,
        ZodDiscriminatedUnion: oe,
        ZodIntersection: ce,
        ZodTuple: de,
        ZodRecord: ue,
        ZodMap: le,
        ZodSet: pe,
        ZodFunction: me,
        ZodLazy: he,
        ZodLiteral: fe,
        ZodEnum: ye,
        ZodNativeEnum: ve,
        ZodPromise: _e,
        ZodEffects: Se,
        ZodTransformer: Se,
        ZodOptional: be,
        ZodNullable: xe,
        ZodDefault: Te,
        ZodCatch: Me,
        ZodNaN: Oe,
        BRAND: Ce,
        ZodBranded: Ee,
        ZodPipeline: we,
        custom: Pe,
        Schema: k,
        ZodSchema: k,
        late: Ie,
        get ZodFirstPartyTypeKind() {
          return je;
        },
        coerce: gt,
        any: qe,
        array: $e,
        bigint: Be,
        boolean: Ze,
        date: Re,
        discriminatedUnion: Ye,
        effect: ct,
        enum: it,
        function: at,
        instanceof: De,
        intersection: Je,
        lazy: rt,
        literal: nt,
        map: et,
        nan: ke,
        nativeEnum: ot,
        never: Ve,
        null: Le,
        nullable: ut,
        number: Ae,
        object: Ge,
        oboolean: ft,
        onumber: ht,
        optional: dt,
        ostring: mt,
        pipeline: pt,
        preprocess: lt,
        promise: st,
        record: Qe,
        set: tt,
        strictObject: Ke,
        string: Ne,
        symbol: We,
        transformer: ct,
        tuple: Xe,
        undefined: ze,
        union: He,
        unknown: Ue,
        void: Fe,
        NEVER: yt,
        ZodIssueCode: m,
        quotelessJson: h,
        ZodError: f,
      });
      const _t = Object.freeze(
          Object.defineProperty(
            {
              __proto__: null,
              BRAND: Ce,
              DIRTY: O,
              EMPTY_PATH: b,
              INVALID: M,
              NEVER: yt,
              OK: C,
              ParseStatus: T,
              Schema: k,
              ZodAny: H,
              ZodArray: Q,
              ZodBigInt: U,
              ZodBoolean: V,
              ZodBranded: Ee,
              ZodCatch: Me,
              ZodDate: F,
              ZodDefault: Te,
              ZodDiscriminatedUnion: oe,
              ZodEffects: Se,
              ZodEnum: ye,
              ZodError: f,
              get ZodFirstPartyTypeKind() {
                return je;
              },
              ZodFunction: me,
              ZodIntersection: ce,
              ZodIssueCode: m,
              ZodLazy: he,
              ZodLiteral: fe,
              ZodMap: le,
              ZodNaN: Oe,
              ZodNativeEnum: ve,
              ZodNever: J,
              ZodNull: K,
              ZodNullable: xe,
              ZodNumber: q,
              ZodObject: re,
              ZodOptional: be,
              ZodParsedType: l,
              ZodPipeline: we,
              ZodPromise: _e,
              ZodRecord: ue,
              ZodSchema: k,
              ZodSet: pe,
              ZodString: z,
              ZodSymbol: $,
              ZodTransformer: Se,
              ZodTuple: de,
              ZodType: k,
              ZodUndefined: G,
              ZodUnion: ne,
              ZodUnknown: Y,
              ZodVoid: X,
              addIssueToContext: x,
              any: qe,
              array: $e,
              bigint: Be,
              boolean: Ze,
              coerce: gt,
              custom: Pe,
              date: Re,
              default: vt,
              defaultErrorMap: g,
              discriminatedUnion: Ye,
              effect: ct,
              enum: it,
              function: at,
              getErrorMap: _,
              getParsedType: p,
              instanceof: De,
              intersection: Je,
              isAborted: E,
              isAsync: I,
              isDirty: w,
              isValid: P,
              late: Ie,
              lazy: rt,
              literal: nt,
              makeIssue: S,
              map: et,
              nan: ke,
              nativeEnum: ot,
              never: Ve,
              null: Le,
              nullable: ut,
              number: Ae,
              object: Ge,
              get objectUtil() {
                return ee;
              },
              oboolean: ft,
              onumber: ht,
              optional: dt,
              ostring: mt,
              pipeline: pt,
              preprocess: lt,
              promise: st,
              quotelessJson: h,
              record: Qe,
              set: tt,
              setErrorMap: v,
              strictObject: Ke,
              string: Ne,
              symbol: We,
              transformer: ct,
              tuple: Xe,
              undefined: ze,
              union: He,
              unknown: Ue,
              get util() {
                return r;
              },
              void: Fe,
              z: vt,
            },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        St = vt.enum(["PRODUCTION", "STAGING"]),
        bt = vt.object({
          bearerToken: vt.string({
            invalid_type_error:
              "Invalid Bearer Token: please confirm the bearerToken is a string",
            required_error:
              "Missing Bearer Token: please confirm the bearerToken attribute is included",
          }),
          clientName: vt.string().optional(),
          environment: St.optional(),
          apiKey: vt.string().optional(),
        }),
        xt = vt.enum(["W-8BEN", "W-8BEN-E", "W-9"]),
        Tt = vt.object({
          firstLine: vt.string().optional(),
          secondLine: vt.string().optional(),
          city: vt.string().optional(),
          stateOrProvince: vt.string().optional(),
          postalCode: vt.string().optional(),
          country: vt.string().optional(),
        }),
        Mt = vt.object({
          name: vt.string().optional(),
          address: Tt.optional(),
          taxId: vt.string().optional(),
          taxIdType: vt.string().optional(),
        }),
        Ot = vt.object({
          name: vt.string().optional(),
          taxClassification: vt.string().optional(),
          countryOfCitizenship: vt.string().optional(),
          permanentAddress: Tt.optional(),
          mailingAddress: Tt.optional(),
          usTaxId: vt.string().optional(),
          foreignTaxId: vt.string().optional(),
          ftinIsNotLegallyRequired: vt.boolean().optional(),
          dateOfBirth: vt.string().optional(),
          hasCapacityToSign: vt.boolean().optional(),
        }),
        Ct = vt.object({
          signature: vt.string().optional(),
          isCertifiedByClient: vt.boolean().optional(),
        });
      Ot.merge(Ct),
        vt.object({
          name: vt.string().optional(),
          taxClassification: vt.string().optional(),
          countryOfCitizenship: vt.string().optional(),
          permanentAddress: Tt.optional(),
          mailingAddress: Tt.optional(),
          usTaxId: vt.string().optional(),
          foreignTaxId: vt.string().optional(),
          ftinIsNotLegallyRequired: vt.boolean().optional(),
          hasCapacityToSign: vt.boolean().optional(),
        });
      Mt.merge(
        vt.object({
          taxClassification: vt.string().optional(),
          llcTaxClassification: vt.string().optional(),
          otherTaxClassification: vt.string().optional(),
          nameLine2: vt.string().optional(),
          exemptFatcaCode: vt.string().optional(),
          exemptPayeeCode: vt.string().optional(),
        })
      ).merge(Ct);
      var Et =
        typeof globalThis < "u"
          ? globalThis
          : typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {};
      function wt(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function Pt(e) {
        if (e.__esModule) return e;
        var t = e.default;
        if ("function" == typeof t) {
          var a = function e() {
            if (this instanceof e) {
              var a = [null];
              a.push.apply(a, arguments);
              var r = Function.bind.apply(t, a);
              return new r();
            }
            return t.apply(this, arguments);
          };
          a.prototype = t.prototype;
        } else a = {};
        return (
          Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.keys(e).forEach(function (t) {
            var r = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
              a,
              t,
              r.get
                ? r
                : {
                    enumerable: !0,
                    get: function () {
                      return e[t];
                    },
                  }
            );
          }),
          a
        );
      }
      var It = {},
        jt = {},
        Dt = {};
      Object.defineProperty(Dt, "__esModule", { value: !0 }),
        (Dt.usTaxIdTypes = void 0),
        (Dt.usTaxIdTypes = ["SSN", "EIN", "ITIN", "ATIN"]);
      var Nt = {};
      Object.defineProperty(Nt, "__esModule", { value: !0 }),
        (Nt.documentTypes = void 0),
        (Nt.documentTypes = ["W-9", "W-8BEN", "W-8BEN-E"]),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Dt, e),
            a(Nt, e);
        })(jt);
      var At = {},
        kt = {},
        Bt = {},
        Zt = {},
        Rt = {};
      !(function (e) {
        var t;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorMessages = void 0),
          ((t = e.ErrorMessages || (e.ErrorMessages = {})).IsIncorrect =
            "Incorrect"),
          (t.IsInvalid = "Invalid"),
          (t.IsMissing = "Missing"),
          (t.IsNotAllowed = "Not allowed"),
          (t.IsRequired = "Required"),
          (t.IsWrongType = "Wrong type"),
          (t.IsWrongCombination = "Wrong combination");
      })(Rt),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }), a(Rt, e);
        })(Zt);
      var Wt = {},
        zt = {};
      const Lt = Pt(_t);
      var qt = {},
        Ut = {};
      Object.defineProperty(Ut, "__esModule", { value: !0 }),
        (Ut.convertNull = void 0);
      Ut.convertNull = (e) => (null === e ? void 0 : e);
      var Vt = {};
      Object.defineProperty(Vt, "__esModule", { value: !0 }),
        (Vt.expectFail = void 0);
      Vt.expectFail = (e, t, a) => {
        var r;
        if ((expect(e.success).toBe(!1), !e.success)) {
          const n = null == (r = e.error) ? void 0 : r.issues;
          expect(n.length).toBeGreaterThan(0),
            n.forEach((e, r) => {
              expect(e.path).toStrictEqual(
                "object" == typeof t[r]
                  ? t[r]
                  : "string" == typeof t[r]
                  ? [t[r]]
                  : []
              ),
                expect(e.message).toBe(a[r]);
            });
        }
      };
      var Ft = {};
      Object.defineProperty(Ft, "__esModule", { value: !0 }),
        (Ft.getCustomErrorMap = void 0);
      const $t = Lt,
        Gt = Zt;
      Ft.getCustomErrorMap = (e, t) => {
        switch (e.code) {
          case $t.z.ZodIssueCode.invalid_type:
            return {
              message:
                "undefined" === e.received || "null" === e.received
                  ? Gt.ErrorMessages.IsMissing
                  : Gt.ErrorMessages.IsWrongType,
            };
          case $t.z.ZodIssueCode.invalid_enum_value:
            return {
              message:
                void 0 === e.received || null === e.received
                  ? Gt.ErrorMessages.IsMissing
                  : Gt.ErrorMessages.IsInvalid,
            };
          case $t.z.ZodIssueCode.invalid_literal:
          case $t.z.ZodIssueCode.too_small:
          case $t.z.ZodIssueCode.too_big:
            return { message: Gt.ErrorMessages.IsInvalid };
          default:
            return { message: t.defaultError };
        }
      };
      var Kt = {},
        Ht = { exports: {} };
      const Yt = (e) => "object" == typeof e && null !== e,
        Jt = Symbol("skip"),
        Xt = (e) =>
          Yt(e) &&
          !(e instanceof RegExp) &&
          !(e instanceof Error) &&
          !(e instanceof Date),
        Qt = (e, t, a, r = new WeakMap()) => {
          if (((a = { deep: !1, target: {}, ...a }), r.has(e))) return r.get(e);
          r.set(e, a.target);
          const { target: n } = a;
          delete a.target;
          const i = (e) => e.map((e) => (Xt(e) ? Qt(e, t, a, r) : e));
          if (Array.isArray(e)) return i(e);
          for (const [o, s] of Object.entries(e)) {
            const c = t(o, s, e);
            if (c === Jt) continue;
            let [d, u, { shouldRecurse: l = !0 } = {}] = c;
            "__proto__" !== d &&
              (a.deep &&
                l &&
                Xt(u) &&
                (u = Array.isArray(u) ? i(u) : Qt(u, t, a, r)),
              (n[d] = u));
          }
          return n;
        };
      (Ht.exports = (e, t, a) => {
        if (!Yt(e))
          throw new TypeError(`Expected an object, got \`${e}\` (${typeof e})`);
        return Qt(e, t, a);
      }),
        (Ht.exports.mapObjectSkip = Jt);
      var ea = Ht.exports;
      const ta = wt(ea);
      var aa = function () {
        return (
          (aa =
            Object.assign ||
            function (e) {
              for (var t, a = 1, r = arguments.length; a < r; a++)
                for (var n in (t = arguments[a]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          aa.apply(this, arguments)
        );
      };
      function ra(e) {
        return e.toLowerCase();
      }
      var na = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
        ia = /[^A-Z0-9]+/gi;
      function oa(e, t, a) {
        return t instanceof RegExp
          ? e.replace(t, a)
          : t.reduce(function (e, t) {
              return e.replace(t, a);
            }, e);
      }
      function sa(e, t) {
        return (
          void 0 === t && (t = {}),
          (function (e, t) {
            void 0 === t && (t = {});
            for (
              var a = t.splitRegexp,
                r = void 0 === a ? na : a,
                n = t.stripRegexp,
                i = void 0 === n ? ia : n,
                o = t.transform,
                s = void 0 === o ? ra : o,
                c = t.delimiter,
                d = void 0 === c ? " " : c,
                u = oa(oa(e, r, "$1\0$2"), i, "\0"),
                l = 0,
                p = u.length;
              "\0" === u.charAt(l);

            )
              l++;
            for (; "\0" === u.charAt(p - 1); ) p--;
            return u.slice(l, p).split("\0").map(s).join(d);
          })(e, aa({ delimiter: "." }, t))
        );
      }
      const ca = Object.freeze(
          Object.defineProperty(
            {
              __proto__: null,
              snakeCase: function (e, t) {
                return (
                  void 0 === t && (t = {}), sa(e, aa({ delimiter: "_" }, t))
                );
              },
            },
            Symbol.toStringTag,
            { value: "Module" }
          )
        ),
        da = Pt(ca),
        ua = ea,
        { snakeCase: la } = da;
      var pa = function (e, t) {
        return (
          (t = Object.assign({ deep: !0, exclude: [], parsingOptions: {} }, t)),
          ua(
            e,
            function (e, a) {
              return [ma(t.exclude, e) ? e : la(e, t.parsingOptions), a];
            },
            t
          )
        );
      };
      function ma(e, t) {
        return e.some(function (e) {
          return "string" == typeof e ? e === t : e.test(t);
        });
      }
      const ha = wt(pa);
      var fa =
        (Et && Et.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Kt, "__esModule", { value: !0 }),
        (Kt.snakeCaseString = Kt.snakeCaseProperties = void 0);
      const ga = fa(pa),
        ya = { parsingOptions: { splitRegexp: /([a-z])([A-Z0-9])/g } };
      Kt.snakeCaseProperties = (e) => (0, ga.default)(e, ya);
      Kt.snakeCaseString = (e) =>
        e.replace(/([A-Z0-9])/g, (e) => "_" + e.toLowerCase());
      var va = {};
      !(function (e) {
        function t(a) {
          return Array.isArray(a)
            ? a.map(t)
            : null !== a && "object" == typeof a
            ? Object.entries(a).reduce(
                (a, [r, n]) => ((a[(0, e.camelCaseString)(r)] = t(n)), a),
                {}
              )
            : a;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.camelCaseArray =
            e.camelCaseString =
            e.camelCaseProperties =
              void 0);
        e.camelCaseProperties = (e) => t(e);
        e.camelCaseString = (e) =>
          e.replace(/_([a-zA-Z0-9])/g, (e, t) => t.toUpperCase());
        e.camelCaseArray = (t) =>
          t.map((t) => ("string" == typeof t ? (0, e.camelCaseString)(t) : t));
      })(va),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Ut, e),
            a(Vt, e),
            a(Ft, e),
            a(Kt, e),
            a(va, e);
        })(qt),
        Object.defineProperty(zt, "__esModule", { value: !0 }),
        (zt.disallowedStringSchema = void 0);
      const _a = Lt,
        Sa = Zt,
        ba = qt;
      zt.disallowedStringSchema = _a.z
        .string({ invalid_type_error: Sa.ErrorMessages.IsWrongType })
        .trim()
        .max(0, Sa.ErrorMessages.IsNotAllowed)
        .optional()
        .nullable()
        .transform(ba.convertNull)
        .describe("disallowedStringSchema");
      var xa = {};
      Object.defineProperty(xa, "__esModule", { value: !0 }),
        (xa.optionalBooleanSchema = void 0);
      const Ta = Lt,
        Ma = qt;
      xa.optionalBooleanSchema = Ta.z
        .boolean({ errorMap: Ma.getCustomErrorMap })
        .nullish()
        .transform(Ma.convertNull)
        .describe("optionalBooleanSchema");
      var Oa = {};
      Object.defineProperty(Oa, "__esModule", { value: !0 }),
        (Oa.optionalStringSchema = void 0);
      const Ca = Lt,
        Ea = qt,
        wa = Ut;
      Oa.optionalStringSchema = Ca.z
        .string({ errorMap: Ea.getCustomErrorMap })
        .trim()
        .nullish()
        .transform(wa.convertNull)
        .describe("optionalStringSchema");
      var Pa = {};
      Object.defineProperty(Pa, "__esModule", { value: !0 }),
        (Pa.requiredStringSchema = void 0);
      const Ia = Lt,
        ja = Zt;
      Pa.requiredStringSchema = Ia.z
        .string({
          invalid_type_error: ja.ErrorMessages.IsWrongType,
          required_error: ja.ErrorMessages.IsMissing,
        })
        .trim()
        .min(1, ja.ErrorMessages.IsRequired)
        .describe("requiredStringSchema");
      var Da = {};
      Object.defineProperty(Da, "__esModule", { value: !0 }),
        (Da.requiredTrueSchema = void 0);
      const Na = Lt,
        Aa = Zt,
        ka = qt;
      Da.requiredTrueSchema = Na.z
        .boolean({ errorMap: ka.getCustomErrorMap })
        .refine((e) => !0 === e, { message: Aa.ErrorMessages.IsInvalid })
        .describe("requiredTrueSchema");
      var Ba = {},
        Za = {};
      Object.defineProperty(Za, "__esModule", { value: !0 }),
        (Za.requiredRefinement = void 0);
      const Ra = Zt;
      Za.requiredRefinement = (e, t = () => !0) => [
        (a) => !(t(a) && !a[e]),
        { message: Ra.ErrorMessages.IsRequired, path: [e] },
      ];
      var Wa = {};
      Object.defineProperty(Wa, "__esModule", { value: !0 }),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Za, e),
            a(Wa, e);
        })(Ba);
      var za = {};
      Object.defineProperty(za, "__esModule", { value: !0 }),
        (za.optionalUndefinedSchema = void 0);
      const La = Lt,
        qa = Zt;
      za.optionalUndefinedSchema = La.z
        .preprocess((e) => ("" === e ? null : e), La.z.any())
        .nullish()
        .refine((e) => null == e, { message: qa.ErrorMessages.IsInvalid })
        .describe("optionalUndefinedSchema");
      var Ua = {};
      Object.defineProperty(Ua, "__esModule", { value: !0 }),
        (Ua.requiredBooleanSchema = void 0);
      const Va = Lt,
        Fa = qt;
      Ua.requiredBooleanSchema = Va.z
        .boolean({ errorMap: Fa.getCustomErrorMap })
        .describe("requiredBooleanSchema");
      var $a = {};
      Object.defineProperty($a, "__esModule", { value: !0 }),
        ($a.requiredStringSchemaWithMaxLength = void 0);
      const Ga = Zt,
        Ka = Pa;
      ($a.requiredStringSchemaWithMaxLength = Ka.requiredStringSchema
        .max(22, Ga.ErrorMessages.IsNotAllowed)
        .describe("requiredStringSchemaWithMaxLength")),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(zt, e),
            a(xa, e),
            a(Oa, e),
            a(Pa, e),
            a(Da, e),
            a(Ba, e),
            a(za, e),
            a(Ua, e),
            a($a, e);
        })(Wt),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Zt, e),
            a(Wt, e),
            a(qt, e);
        })(Bt),
        Object.defineProperty(kt, "__esModule", { value: !0 }),
        (kt.usTaxIdSchema = void 0);
      const Ha = Bt,
        Ya = Bt,
        Ja = Lt,
        Xa = [
          "000000000",
          "111111111",
          "222222222",
          "333333333",
          "444444444",
          "555555555",
          "666666666",
          "777777777",
          "888888888",
          "999999999",
          "012345678",
          "123456789",
          "234567890",
          "876543210",
          "987654321",
          "098765432",
        ],
        Qa = /^\d{9}$|^\d{3}-\d{2}-\d{4}$|^\d{2}-\d{7}$/,
        er = /^(?!0{5})\d{9}$/;
      kt.usTaxIdSchema = Ya.requiredStringSchema
        .transform((e, t) => {
          if (Qa.test(e)) {
            const a = e.replace(/-/g, "");
            return er.test(a)
              ? Xa.includes(a)
                ? (t.addIssue({
                    code: Ja.z.ZodIssueCode.custom,
                    message: Ha.ErrorMessages.IsIncorrect,
                  }),
                  Ja.z.NEVER)
                : a
              : (t.addIssue({
                  code: Ja.z.ZodIssueCode.custom,
                  message: Ha.ErrorMessages.IsInvalid,
                }),
                Ja.z.NEVER);
          }
          return (
            t.addIssue({
              code: Ja.z.ZodIssueCode.custom,
              message: Ha.ErrorMessages.IsIncorrect,
            }),
            Ja.z.NEVER
          );
        })
        .describe("usTaxIdSchema");
      var tr = {};
      Object.defineProperty(tr, "__esModule", { value: !0 }),
        (tr.individualTaxIdTypeSchema =
          tr.einTaxIdTypeSchema =
          tr.usTaxIdTypeSchema =
            void 0);
      const ar = Bt,
        rr = Lt,
        nr = jt;
      (tr.usTaxIdTypeSchema = rr.z
        .enum(nr.usTaxIdTypes, { errorMap: ar.getCustomErrorMap })
        .describe("usTaxIdTypeSchema")),
        (tr.einTaxIdTypeSchema = rr.z
          .literal("EIN", { errorMap: ar.getCustomErrorMap })
          .describe("einTaxIdTypeSchema")),
        (tr.individualTaxIdTypeSchema = rr.z
          .enum(["SSN", "ITIN", "ATIN"], { errorMap: ar.getCustomErrorMap })
          .describe("individualTaxIdTypeSchema"));
      var ir = {};
      Object.defineProperty(ir, "__esModule", { value: !0 }),
        (ir.signatureTimestampSchema = void 0);
      const or = Bt;
      ir.signatureTimestampSchema = or.requiredStringSchema
        .refine(
          (e) => {
            try {
              const t = new Date(Date.now() + 86448e3).getTime();
              return new Date(e).getTime() < t;
            } catch {
              return !1;
            }
          },
          { message: or.ErrorMessages.IsInvalid }
        )
        .describe("signatureTimestampSchema");
      var sr = {};
      Object.defineProperty(sr, "__esModule", { value: !0 }),
        (sr.validSignatureSchema = void 0);
      const cr = Bt,
        dr = Lt;
      sr.validSignatureSchema = dr.z
        .object(
          { name: cr.requiredStringSchema, signature: cr.requiredStringSchema },
          { errorMap: cr.getCustomErrorMap }
        )
        .refine((e) => e.name.toLowerCase() === e.signature.toLowerCase(), {
          message: cr.ErrorMessages.IsInvalid,
          path: ["signature"],
        })
        .describe("validSignatureSchema");
      var ur = {};
      Object.defineProperty(ur, "__esModule", { value: !0 }),
        (ur.documentTypeSchema = void 0);
      const lr = Bt,
        pr = Lt,
        mr = Nt;
      (ur.documentTypeSchema = pr.z
        .enum(mr.documentTypes, { errorMap: lr.getCustomErrorMap })
        .describe("documentTypeSchema")),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(kt, e),
            a(tr, e),
            a(ir, e),
            a(sr, e),
            a(ur, e);
        })(At);
      var hr = {},
        fr = {};
      Object.defineProperty(fr, "__esModule", { value: !0 });
      var gr = (fr.ValidationError = void 0);
      const yr = Bt;
      let vr = class extends Error {
        constructor(e, t = !1) {
          super("ValidationError"), (this.name = "ValidationError");
          const a = Array.from(
            new Set(e.issues.map((e) => JSON.stringify(e)))
          ).map((e) => JSON.parse(e));
          this.issues = a.map(({ path: e, message: a }) => ({
            path: t ? (0, yr.camelCaseArray)(e) : e,
            message: a,
          }));
        }
      };
      gr = fr.ValidationError = vr;
      var _r = {};
      Object.defineProperty(_r, "__esModule", { value: !0 }),
        (_r.getMergedSchema = void 0);
      _r.getMergedSchema = (e, t) => e.merge(t);
      var Sr = {};
      Object.defineProperty(Sr, "__esModule", { value: !0 }),
        (Sr.default = (e = 0) => {
          const t = new Date();
          return (
            t.setFullYear(t.getFullYear() + e),
            `${(t.getUTCMonth() + 1).toString().padStart(2, "0")}/${t
              .getUTCDate()
              .toString()
              .padStart(2, "0")}/${t.getUTCFullYear()}`
          );
        }),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(fr, e),
            a(_r, e),
            a(Sr, e);
        })(hr);
      var br = {},
        xr = {};
      Object.defineProperty(xr, "__esModule", { value: !0 }),
        (xr.w8BenDocumentationTypes = void 0),
        (xr.w8BenDocumentationTypes = ["W-8BEN"]);
      var Tr = {};
      Object.defineProperty(Tr, "__esModule", { value: !0 }),
        (Tr.w8BenEDocumentationTypes = void 0),
        (Tr.w8BenEDocumentationTypes = ["W-8BEN-E"]);
      var Mr = {};
      !(function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.w8BenETaxClassificationEnum =
            e.w8BenETaxClassifications =
            e.w8BenTaxClassification =
            e.w8TaxClassifications =
            e.w8TaxClassificationMap =
              void 0),
          (e.w8TaxClassificationMap = {
            INDIVIDUAL: "Individual",
            CORPORATION: "Corporation",
            PARTNERSHIP: "Partnership",
            SIMPLE_TRUST: "Simple Trust",
            COMPLEX_TRUST: "Complex Trust",
            GRANTOR_TRUST: "Grantor Trust",
            ESTATE: "Estate",
            CENTRAL_BANK_OF_ISSUE: "Central Bank of Issue",
            FOREIGN_GOVERNMENT_CONTROLLED_ENTITY:
              "Foreign Government Controlled Entity",
            FOREIGN_GOVERNMENT_INTEGRAL_PART:
              "Foreign Government Integral Part",
            TAX_EXEMPT_ORGANIZATION: "Tax Exempt Organization",
            PRIVATE_FOUNDATION: "Private Foundation",
            INTERNATIONAL_ORGANIZATION: "International Organization",
          }),
          (e.w8TaxClassifications = Object.keys(e.w8TaxClassificationMap)),
          (e.w8BenTaxClassification = ["INDIVIDUAL"]),
          (e.w8BenETaxClassifications = Object.keys(
            (({ INDIVIDUAL: e, ...t }) => t)(e.w8TaxClassificationMap)
          )),
          (e.w8BenETaxClassificationEnum = Object.keys(
            (({ INDIVIDUAL: e, ...t }) => t)(e.w8TaxClassificationMap)
          ));
      })(Mr),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(xr, e),
            a(Tr, e),
            a(Mr, e);
        })(br);
      var Or = {},
        Cr = {};
      Object.defineProperty(Cr, "__esModule", { value: !0 }),
        (Cr.w8BenDateOfBirthSchema = void 0);
      const Er = Bt,
        wr = Lt;
      Cr.w8BenDateOfBirthSchema = Er.requiredStringSchema
        .superRefine((e, t) =>
          jr(e) && Pr(e) && Ir(e)
            ? void 0
            : (t.addIssue({
                code: "custom",
                message: Er.ErrorMessages.IsInvalid,
                fatal: !0,
              }),
              wr.z.NEVER)
        )
        .describe("w8BenDateOfBirthSchema");
      const Pr = (e) => {
          try {
            const t = new Date().getUTCFullYear(),
              a = e.substring(e.length - 4, e.length),
              r = t - Number(a);
            return r > -1 && r < 131;
          } catch {
            return !1;
          }
        },
        Ir = (e) => /^\d{2}\/\d{2}\/\d{4}$/.test(e),
        jr = (e) => {
          const t = new Date(e);
          return (
            !isNaN(t.getTime()) &&
            e ===
              t.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
          );
        };
      var Dr = {};
      Object.defineProperty(Dr, "__esModule", { value: !0 }),
        (Dr.w8BenETaxClassificationSchema =
          Dr.w8BenTaxClassificationSchema =
          Dr.w8TaxClassificationSchema =
            void 0);
      const Nr = Bt,
        Ar = Lt,
        kr = br;
      (Dr.w8TaxClassificationSchema = Ar.z
        .enum(kr.w8TaxClassifications, { errorMap: Nr.getCustomErrorMap })
        .describe("w8TaxClassificationSchema")),
        (Dr.w8BenTaxClassificationSchema = Ar.z
          .enum(kr.w8BenTaxClassification, { errorMap: Nr.getCustomErrorMap })
          .describe("w8BenTaxClassificationSchema")),
        (Dr.w8BenETaxClassificationSchema = Ar.z
          .enum(kr.w8BenETaxClassifications, { errorMap: Nr.getCustomErrorMap })
          .describe("w8BenETaxClassificationSchema"));
      var Br = {};
      Object.defineProperty(Br, "__esModule", { value: !0 }),
        (Br.w8BenDocumentationTypesSchema = void 0);
      const Zr = Bt,
        Rr = Lt,
        Wr = br;
      Br.w8BenDocumentationTypesSchema = Rr.z
        .enum(Wr.w8BenDocumentationTypes, { errorMap: Zr.getCustomErrorMap })
        .describe("w8BenDocumentationTypesSchema");
      var zr = {};
      Object.defineProperty(zr, "__esModule", { value: !0 }),
        (zr.w8BenEDocumentationTypesSchema = void 0);
      const Lr = Bt,
        qr = Lt,
        Ur = br;
      zr.w8BenEDocumentationTypesSchema = qr.z
        .enum(Ur.w8BenEDocumentationTypes, { errorMap: Lr.getCustomErrorMap })
        .describe("w8BenEDocumentationTypesSchema");
      var Vr = {},
        Fr = {},
        $r = {},
        Gr = {},
        Kr = {};
      Object.defineProperty(Kr, "__esModule", { value: !0 }),
        (Kr.sortObjectValueAlphabetically = void 0);
      (Kr.sortObjectValueAlphabetically = (e) => {
        const t = Object.entries(e);
        return (
          t.sort((e, t) => e[1].localeCompare(t[1])), Object.fromEntries(t)
        );
      }),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.caCountryCodes =
              e.usCountryCodes =
              e.usTerritoryCountryCodes =
              e.commonCountryCodes =
              e.countryCodes =
              e.countryMap =
              e.usMap =
              e.usTerritoryCountryMap =
              e.caMap =
              e.commonCountryMap =
                void 0);
          const t = Kr;
          (e.commonCountryMap = {
            AF: "Afghanistan",
            AX: "\xc5land Islands",
            AL: "Albania",
            DZ: "Algeria",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AQ: "Antarctica",
            AG: "Antigua & Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia",
            BQ: "Bonaire",
            BA: "Bosnia & Herzegovina",
            BW: "Botswana",
            BV: "Bouvet Island",
            BR: "Brazil",
            IO: "British Indian Ocean Territory",
            VG: "British Virgin Islands",
            BN: "Brunei Darussalam",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            CV: "Cabo Verde",
            KH: "Cambodia",
            CM: "Cameroon",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo",
            CD: "Congo",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: "C\xf4te d'Ivoire",
            HR: "Croatia",
            CU: "Cuba",
            CW: "Cura\xe7ao",
            CY: "Cyprus",
            CZ: "Czechia",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            SZ: "Eswatini",
            ET: "Ethiopia",
            FK: "Falkland Islands",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HT: "Haiti",
            HM: "Heard Island & McDonald Islands",
            VA: "Holy See",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: "Iran",
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JE: "Jersey",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Laos",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macao",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            MX: "Mexico",
            MD: "Moldova",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            KP: "North Korea",
            MK: "North Macedonia",
            NO: "Norway",
            OM: "Oman",
            PK: "Pakistan",
            PS: "Palestine",
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn",
            PL: "Poland",
            PT: "Portugal",
            QA: "Qatar",
            RE: "R\xe9union",
            RO: "Romania",
            RU: "Russian Federation",
            RW: "Rwanda",
            BL: "Saint Barth\xe9lemy",
            SH: "Saint Helena",
            KN: "Saint Kitts & Nevis",
            LC: "Saint Lucia",
            MF: "Saint Martin",
            PM: "Saint Pierre & Miquelon",
            VC: "Saint Vincent & the Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            ST: "Sao Tome & Principe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SX: "Sint Maarten",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia",
            KR: "South Korea",
            SS: "South Sudan",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SJ: "Svalbard & Jan Mayen",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syrian Arab Republic",
            TW: "Taiwan",
            TJ: "Tajikistan",
            TZ: "Tanzania",
            TH: "Thailand",
            TL: "Timor-Leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad & Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks & Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            GB: "United Kingdom",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VE: "Venezuela",
            VN: "Viet Nam",
            WF: "Wallis & Futuna",
            EH: "Western Sahara",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe",
          }),
            (e.caMap = { CA: "Canada" }),
            (e.usTerritoryCountryMap = {
              AS: "American Samoa",
              FM: "Federated States Of Micronesia",
              GU: "Guam",
              MH: "Marshall Islands",
              MP: "Northern Mariana Islands",
              PW: "Palau",
              PR: "Puerto Rico",
              UM: "United States (Outlying Islands)",
              VI: "United States (Virgin Islands)",
            }),
            (e.usMap = { US: "United States", ...e.usTerritoryCountryMap }),
            (e.countryMap = (0, t.sortObjectValueAlphabetically)({
              ...e.commonCountryMap,
              ...e.usMap,
              ...e.caMap,
            })),
            (e.countryCodes = Object.keys(e.countryMap)),
            (e.commonCountryCodes = Object.keys(e.commonCountryMap)),
            (e.usTerritoryCountryCodes = Object.keys(e.usTerritoryCountryMap)),
            (e.usCountryCodes = Object.keys(e.usMap)),
            (e.caCountryCodes = Object.keys(e.caMap));
        })(Gr);
      var Hr = {};
      !(function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.usTerritoryStateCodes =
            e.usStateCodes =
            e.usTerritoryStateMap =
            e.usStateMap =
              void 0),
          (e.usStateMap = {
            AL: "Alabama",
            AK: "Alaska",
            AS: "American Samoa",
            AZ: "Arizona",
            AR: "Arkansas",
            CA: "California",
            CO: "Colorado",
            CT: "Connecticut",
            DE: "Delaware",
            DC: "District Of Columbia",
            FM: "Federated States Of Micronesia",
            FL: "Florida",
            GA: "Georgia",
            GU: "Guam",
            HI: "Hawaii",
            ID: "Idaho",
            IL: "Illinois",
            IN: "Indiana",
            IA: "Iowa",
            KS: "Kansas",
            KY: "Kentucky",
            LA: "Louisiana",
            ME: "Maine",
            MH: "Marshall Islands",
            MD: "Maryland",
            MA: "Massachusetts",
            MI: "Michigan",
            MN: "Minnesota",
            MS: "Mississippi",
            MO: "Missouri",
            MT: "Montana",
            NE: "Nebraska",
            NV: "Nevada",
            NH: "New Hampshire",
            NJ: "New Jersey",
            NM: "New Mexico",
            NY: "New York",
            NC: "North Carolina",
            ND: "North Dakota",
            MP: "Northern Mariana Islands",
            OH: "Ohio",
            OK: "Oklahoma",
            OR: "Oregon",
            UM: "Outlying Islands",
            PW: "Palau",
            PA: "Pennsylvania",
            PR: "Puerto Rico",
            RI: "Rhode Island",
            SC: "South Carolina",
            SD: "South Dakota",
            TN: "Tennessee",
            TX: "Texas",
            UT: "Utah",
            VT: "Vermont",
            VI: "Virgin Islands",
            VA: "Virginia",
            WA: "Washington",
            WV: "West Virginia",
            WI: "Wisconsin",
            WY: "Wyoming",
          }),
          (e.usTerritoryStateMap = {
            AS: "American Samoa",
            FM: "Federated States Of Micronesia",
            GU: "Guam",
            MH: "Marshall Islands",
            MP: "Northern Mariana Islands",
            PW: "Palau",
            PR: "Puerto Rico",
            UM: "United States (Outlying Islands)",
            VI: "United States (Virgin Islands)",
          }),
          (e.usStateCodes = Object.keys(e.usStateMap)),
          (e.usTerritoryStateCodes = Object.keys(e.usTerritoryStateMap));
      })(Hr);
      var Yr = {};
      !(function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.caProvinceCodes = e.caProvincesMap = void 0),
          (e.caProvincesMap = {
            AB: "Alberta",
            BC: "British Columbia",
            MB: "Manitoba",
            NB: "New Brunswick",
            NL: "Newfoundland and Labrador",
            NT: "Northwest Territories",
            NS: "Nova Scotia",
            NU: "Nunavut",
            ON: "Ontario",
            PE: "Prince Edward Island",
            QC: "Quebec",
            SK: "Saskatchewan",
            YT: "Yukon Territory",
          }),
          (e.caProvinceCodes = Object.keys(e.caProvincesMap));
      })(Yr),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Gr, e),
            a(Hr, e),
            a(Yr, e);
        })($r);
      var Jr = {},
        Xr = {},
        Qr = {},
        en = {},
        tn = {};
      !(function (e) {
        var t;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorMessages = void 0),
          ((t = e.ErrorMessages || (e.ErrorMessages = {})).IsIncorrect =
            "Incorrect"),
          (t.IsInvalid = "Invalid"),
          (t.IsMissing = "Missing"),
          (t.IsNotAllowed = "Not allowed"),
          (t.IsRequired = "Required"),
          (t.IsWrongType = "Wrong type"),
          (t.IsWrongCombination = "Wrong combination");
      })(tn),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }), a(tn, e);
        })(en);
      var an = {},
        rn = {},
        nn = {},
        on = {};
      Object.defineProperty(on, "__esModule", { value: !0 }),
        (on.convertNull = void 0);
      on.convertNull = (e) => (null === e ? void 0 : e);
      var sn = {};
      Object.defineProperty(sn, "__esModule", { value: !0 }),
        (sn.expectFail = void 0);
      sn.expectFail = (e, t, a) => {
        var r;
        if ((expect(e.success).toBe(!1), !e.success)) {
          const n = null == (r = e.error) ? void 0 : r.issues;
          expect(n.length).toBeGreaterThan(0),
            n.forEach((e, r) => {
              expect(e.path).toStrictEqual(
                "object" == typeof t[r]
                  ? t[r]
                  : "string" == typeof t[r]
                  ? [t[r]]
                  : []
              ),
                expect(e.message).toBe(a[r]);
            });
        }
      };
      var cn = {};
      Object.defineProperty(cn, "__esModule", { value: !0 }),
        (cn.getCustomErrorMap = void 0);
      const dn = Lt,
        un = en;
      cn.getCustomErrorMap = (e, t) => {
        switch (e.code) {
          case dn.z.ZodIssueCode.invalid_type:
            return {
              message:
                "undefined" === e.received || "null" === e.received
                  ? un.ErrorMessages.IsMissing
                  : un.ErrorMessages.IsWrongType,
            };
          case dn.z.ZodIssueCode.invalid_enum_value:
            return {
              message:
                void 0 === e.received || null === e.received
                  ? un.ErrorMessages.IsMissing
                  : un.ErrorMessages.IsInvalid,
            };
          case dn.z.ZodIssueCode.invalid_literal:
          case dn.z.ZodIssueCode.too_small:
          case dn.z.ZodIssueCode.too_big:
            return { message: un.ErrorMessages.IsInvalid };
          default:
            return { message: t.defaultError };
        }
      };
      var ln = {},
        pn =
          (Et && Et.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(ln, "__esModule", { value: !0 }),
        (ln.snakeCaseString = ln.snakeCaseProperties = void 0);
      const mn = pn(pa),
        hn = { parsingOptions: { splitRegexp: /([a-z])([A-Z0-9])/g } };
      ln.snakeCaseProperties = (e) => (0, mn.default)(e, hn);
      ln.snakeCaseString = (e) =>
        e.replace(/([A-Z0-9])/g, (e) => "_" + e.toLowerCase());
      var fn = {};
      !(function (e) {
        function t(a) {
          return Array.isArray(a)
            ? a.map(t)
            : null !== a && "object" == typeof a
            ? Object.entries(a).reduce(
                (a, [r, n]) => ((a[(0, e.camelCaseString)(r)] = t(n)), a),
                {}
              )
            : a;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.camelCaseArray =
            e.camelCaseString =
            e.camelCaseProperties =
              void 0);
        e.camelCaseProperties = (e) => t(e);
        e.camelCaseString = (e) =>
          e.replace(/_([a-zA-Z0-9])/g, (e, t) => t.toUpperCase());
        e.camelCaseArray = (t) =>
          t.map((t) => ("string" == typeof t ? (0, e.camelCaseString)(t) : t));
      })(fn),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(on, e),
            a(sn, e),
            a(cn, e),
            a(ln, e),
            a(fn, e);
        })(nn),
        Object.defineProperty(rn, "__esModule", { value: !0 }),
        (rn.disallowedStringSchema = void 0);
      const gn = Lt,
        yn = en,
        vn = nn;
      rn.disallowedStringSchema = gn.z
        .string({ invalid_type_error: yn.ErrorMessages.IsWrongType })
        .trim()
        .max(0, yn.ErrorMessages.IsNotAllowed)
        .optional()
        .nullable()
        .transform(vn.convertNull)
        .describe("disallowedStringSchema");
      var _n = {};
      Object.defineProperty(_n, "__esModule", { value: !0 }),
        (_n.optionalBooleanSchema = void 0);
      const Sn = Lt,
        bn = nn;
      _n.optionalBooleanSchema = Sn.z
        .boolean({ errorMap: bn.getCustomErrorMap })
        .nullish()
        .transform(bn.convertNull)
        .describe("optionalBooleanSchema");
      var xn = {};
      Object.defineProperty(xn, "__esModule", { value: !0 }),
        (xn.optionalStringSchema = void 0);
      const Tn = Lt,
        Mn = nn,
        On = on;
      xn.optionalStringSchema = Tn.z
        .string({ errorMap: Mn.getCustomErrorMap })
        .trim()
        .nullish()
        .transform(On.convertNull)
        .describe("optionalStringSchema");
      var Cn = {};
      Object.defineProperty(Cn, "__esModule", { value: !0 }),
        (Cn.requiredStringSchema = void 0);
      const En = Lt,
        wn = en;
      Cn.requiredStringSchema = En.z
        .string({
          invalid_type_error: wn.ErrorMessages.IsWrongType,
          required_error: wn.ErrorMessages.IsMissing,
        })
        .trim()
        .min(1, wn.ErrorMessages.IsRequired)
        .describe("requiredStringSchema");
      var Pn = {};
      Object.defineProperty(Pn, "__esModule", { value: !0 }),
        (Pn.requiredTrueSchema = void 0);
      const In = Lt,
        jn = en,
        Dn = nn;
      Pn.requiredTrueSchema = In.z
        .boolean({ errorMap: Dn.getCustomErrorMap })
        .refine((e) => !0 === e, { message: jn.ErrorMessages.IsInvalid })
        .describe("requiredTrueSchema");
      var Nn = {},
        An = {};
      Object.defineProperty(An, "__esModule", { value: !0 }),
        (An.requiredRefinement = void 0);
      const kn = en;
      An.requiredRefinement = (e, t = () => !0) => [
        (a) => !(t(a) && !a[e]),
        { message: kn.ErrorMessages.IsRequired, path: [e] },
      ];
      var Bn = {};
      Object.defineProperty(Bn, "__esModule", { value: !0 }),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(An, e),
            a(Bn, e);
        })(Nn);
      var Zn = {};
      Object.defineProperty(Zn, "__esModule", { value: !0 }),
        (Zn.optionalUndefinedSchema = void 0);
      const Rn = Lt,
        Wn = en;
      Zn.optionalUndefinedSchema = Rn.z
        .preprocess((e) => ("" === e ? null : e), Rn.z.any())
        .nullish()
        .refine((e) => null == e, { message: Wn.ErrorMessages.IsInvalid })
        .describe("optionalUndefinedSchema");
      var zn = {};
      Object.defineProperty(zn, "__esModule", { value: !0 }),
        (zn.requiredBooleanSchema = void 0);
      const Ln = Lt,
        qn = nn;
      zn.requiredBooleanSchema = Ln.z
        .boolean({ errorMap: qn.getCustomErrorMap })
        .describe("requiredBooleanSchema");
      var Un = {};
      Object.defineProperty(Un, "__esModule", { value: !0 }),
        (Un.requiredStringSchemaWithMaxLength = void 0);
      const Vn = en,
        Fn = Cn;
      (Un.requiredStringSchemaWithMaxLength = Fn.requiredStringSchema
        .max(22, Vn.ErrorMessages.IsNotAllowed)
        .describe("requiredStringSchemaWithMaxLength")),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(rn, e),
            a(_n, e),
            a(xn, e),
            a(Cn, e),
            a(Pn, e),
            a(Nn, e),
            a(Zn, e),
            a(zn, e),
            a(Un, e);
        })(an),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(en, e),
            a(an, e),
            a(nn, e);
        })(Qr),
        Object.defineProperty(Xr, "__esModule", { value: !0 }),
        (Xr.optionalAddressSchema = void 0);
      const $n = Qr,
        Gn = Lt;
      Xr.optionalAddressSchema = Gn.z
        .object(
          {
            first_line: $n.optionalStringSchema,
            second_line: $n.optionalStringSchema,
            city: $n.optionalStringSchema,
            state_or_province: $n.optionalStringSchema,
            postal_code: $n.optionalStringSchema,
            country: $n.optionalStringSchema,
          },
          { errorMap: $n.getCustomErrorMap }
        )
        .describe("optionalAddressSchema");
      var Kn = {};
      Object.defineProperty(Kn, "__esModule", { value: !0 }),
        (Kn.baseAddressSchema = void 0);
      const Hn = Qr,
        Yn = Xr;
      Kn.baseAddressSchema = Yn.optionalAddressSchema
        .extend({
          first_line: Hn.requiredStringSchema,
          city: Hn.requiredStringSchema,
        })
        .strict()
        .describe("baseAddressSchema");
      var Jn = {};
      Object.defineProperty(Jn, "__esModule", { value: !0 }),
        (Jn.countrySchema =
          Jn.caCountrySchema =
          Jn.usTerritoryCountrySchema =
          Jn.usCountrySchema =
          Jn.commonCountrySchema =
            void 0);
      const Xn = Qr,
        Qn = Lt,
        ei = $r;
      (Jn.commonCountrySchema = Qn.z
        .enum(ei.commonCountryCodes, { errorMap: Xn.getCustomErrorMap })
        .describe("commonCountrySchema")),
        (Jn.usCountrySchema = Qn.z
          .enum(ei.usCountryCodes, { errorMap: Xn.getCustomErrorMap })
          .describe("usCountrySchema")),
        (Jn.usTerritoryCountrySchema = Qn.z
          .enum(ei.usTerritoryCountryCodes, { errorMap: Xn.getCustomErrorMap })
          .describe("usTerritoryCountrySchema")),
        (Jn.caCountrySchema = Qn.z
          .enum(ei.caCountryCodes, { errorMap: Xn.getCustomErrorMap })
          .describe("caCountrySchema")),
        (Jn.countrySchema = Qn.z
          .enum(ei.countryCodes, { errorMap: Xn.getCustomErrorMap })
          .describe("countrySchema"));
      var ti = {};
      Object.defineProperty(ti, "__esModule", { value: !0 }),
        (ti.commonCountryAddressSchema = void 0);
      const ai = Kn,
        ri = Jn;
      ti.commonCountryAddressSchema = ai.baseAddressSchema
        .extend({ country: ri.commonCountrySchema })
        .strict()
        .describe("commonCountryAddressSchema");
      var ni = {},
        ii = {},
        oi = {};
      Object.defineProperty(oi, "__esModule", { value: !0 }),
        (oi.caPostalCodeSchema = void 0);
      const si = Qr,
        ci = Lt,
        di = /^(?!.*[DFIOQUdfioqu])[A-Za-z]\d[A-Za-z](?: |-)?\d[A-Za-z]\d$/;
      oi.caPostalCodeSchema = si.requiredStringSchema
        .superRefine((e, t) => {
          di.test(e) ||
            t.addIssue({
              code: ci.ZodIssueCode.custom,
              message: si.ErrorMessages.IsInvalid,
              received: e,
            });
        })
        .transform(
          (e) => `${e.substring(0, 3)} ${e.substring(e.length - 3, e.length)}`
        )
        .describe("caPostalCodeSchema");
      var ui = {};
      Object.defineProperty(ui, "__esModule", { value: !0 }),
        (ui.caProvinceSchema = void 0);
      const li = Qr,
        pi = Lt,
        mi = $r;
      (ui.caProvinceSchema = pi.z
        .enum(mi.caProvinceCodes, { errorMap: li.getCustomErrorMap })
        .describe("caProvinceSchema")),
        Object.defineProperty(ii, "__esModule", { value: !0 }),
        (ii.caAddressSchema = void 0);
      const hi = Kn,
        fi = Jn,
        gi = oi,
        yi = ui;
      ii.caAddressSchema = hi.baseAddressSchema
        .extend({
          state_or_province: yi.caProvinceSchema,
          postal_code: gi.caPostalCodeSchema,
          country: fi.caCountrySchema,
        })
        .strict()
        .describe("caAddressSchema");
      var vi = {},
        _i = {};
      Object.defineProperty(_i, "__esModule", { value: !0 }),
        (_i.usPostalCodeSchema = void 0);
      const Si = Qr,
        bi = Lt,
        xi = /^\d{5}$|^\d{5}-\d{4}|^\d{9}$/;
      _i.usPostalCodeSchema = Si.requiredStringSchema
        .superRefine((e, t) => {
          xi.test(e) ||
            t.addIssue({
              code: bi.ZodIssueCode.custom,
              message: Si.ErrorMessages.IsInvalid,
              received: e,
            });
        })
        .describe("usPostalCodeSchema");
      var Ti = {};
      Object.defineProperty(Ti, "__esModule", { value: !0 }),
        (Ti.usStateOrProvinceSchema = void 0);
      const Mi = Qr,
        Oi = Lt,
        Ci = $r;
      (Ti.usStateOrProvinceSchema = Oi.z
        .enum(Ci.usStateCodes, { errorMap: Mi.getCustomErrorMap })
        .describe("usStateOrProvinceSchema")),
        (function (e) {
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.validUsAddressSchema =
              e.normalUsTerritoryCountryCodes =
              e.smallUsTerritoryCountryCodes =
              e.usAddressSchema =
              e.partialUsAddressSchema =
                void 0);
          const t = Qr,
            a = Lt,
            r = Jn,
            n = Xr,
            i = _i,
            o = Ti;
          (e.partialUsAddressSchema = n.optionalAddressSchema
            .extend({
              state_or_province: o.usStateOrProvinceSchema,
              postal_code: i.usPostalCodeSchema,
              country: r.usCountrySchema,
            })
            .strict()
            .describe("usAddressSchema")),
            (e.usAddressSchema = e.partialUsAddressSchema.extend({
              first_line: t.requiredStringSchema,
              city: t.requiredStringSchema,
            })),
            (e.smallUsTerritoryCountryCodes = ["UM", "FM", "MH", "PW"]),
            (e.normalUsTerritoryCountryCodes = ["AS", "GU", "MP", "PR", "VI"]),
            (e.validUsAddressSchema = n.optionalAddressSchema.superRefine(
              (r, n) => {
                const i = e.partialUsAddressSchema.safeParse(r);
                if (!i.success)
                  return (
                    i.error.issues.forEach((e) => {
                      n.addIssue({ ...e, fatal: !0 });
                    }),
                    a.z.NEVER
                  );
                if ("US" === r.country)
                  if (
                    e.smallUsTerritoryCountryCodes.includes(r.state_or_province)
                  ) {
                    const t = e.partialUsAddressSchema.safeParse(r);
                    t.success ||
                      t.error.issues.forEach((e) => {
                        n.addIssue(e);
                      });
                  } else {
                    const t = e.usAddressSchema.safeParse(r);
                    t.success ||
                      t.error.issues.forEach((e) => {
                        n.addIssue(e);
                      });
                  }
                else if (e.smallUsTerritoryCountryCodes.includes(r.country)) {
                  const a = e.partialUsAddressSchema.safeParse(r);
                  a.success ||
                    a.error.issues.forEach((e) => {
                      n.addIssue(e);
                    }),
                    r.country !== r.state_or_province &&
                      n.addIssue({
                        code: "custom",
                        message: t.ErrorMessages.IsWrongCombination,
                        path: ["country&state_or_province"],
                      });
                } else {
                  const a = e.usAddressSchema.safeParse(r);
                  a.success ||
                    a.error.issues.forEach((e) => {
                      n.addIssue(e);
                    }),
                    r.country !== r.state_or_province &&
                      n.addIssue({
                        code: "custom",
                        message: t.ErrorMessages.IsWrongCombination,
                        path: ["country&state_or_province"],
                      });
                }
              }
            ));
        })(vi),
        Object.defineProperty(ni, "__esModule", { value: !0 }),
        (ni.addressSchema = void 0);
      const Ei = Qr,
        wi = Lt,
        Pi = $r,
        Ii = ii,
        ji = ti,
        Di = Xr,
        Ni = vi;
      ni.addressSchema = Di.optionalAddressSchema
        .strict()
        .superRefine((e, t) => {
          const a = Ei.requiredStringSchema.safeParse(e.country);
          if (!a.success)
            return (
              a.error.issues.forEach((e) => {
                t.addIssue({ ...e, fatal: !0, path: ["country"] });
              }),
              wi.z.NEVER
            );
          let r;
          (r = Pi.usCountryCodes.includes(e.country)
            ? Ni.validUsAddressSchema.safeParse(e)
            : Pi.caCountryCodes.includes(e.country)
            ? Ii.caAddressSchema.safeParse(e)
            : ji.commonCountryAddressSchema.safeParse(e)),
            r.success ||
              r.error.issues.forEach((e) => {
                t.addIssue(e);
              });
        })
        .describe("addressSchema");
      var Ai = {};
      Object.defineProperty(Ai, "__esModule", { value: !0 }),
        (Ai.unrefinedAddressSchema = void 0);
      const ki = Lt,
        Bi = $r;
      (Ai.unrefinedAddressSchema = ki.z
        .object({
          first_line: ki.z.string().nullish(),
          second_line: ki.z.string().nullish(),
          city: ki.z.string().nullish(),
          state_or_province: ki.z
            .union([
              ki.z.enum(Bi.caProvinceCodes),
              ki.z.enum(Bi.usStateCodes),
              ki.z.string(),
            ])
            .nullish(),
          postal_code: ki.z.string().nullish(),
          country: ki.z.enum(Bi.countryCodes),
        })
        .describe("unrefinedAddressSchema")),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Xr, e),
            a(Kn, e),
            a(Jn, e),
            a(ti, e),
            a(ni, e),
            a(vi, e),
            a(_i, e),
            a(Ti, e),
            a(ii, e),
            a(ui, e),
            a(oi, e),
            a(Ai, e);
        })(Jr),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a($r, e),
            a(Jr, e);
        })(Fr),
        Object.defineProperty(Vr, "__esModule", { value: !0 }),
        (Vr.unrefinedW8BenETaxDocumentationSchema = void 0);
      const Zi = Fr,
        Ri = Lt,
        Wi = br;
      Vr.unrefinedW8BenETaxDocumentationSchema = Ri.z.object({
        name: Ri.z.string(),
        country: Ri.z.string(),
        tax_classification: Ri.z.enum(Wi.w8BenETaxClassificationEnum),
        permanent_address: Zi.unrefinedAddressSchema,
        mailing_address: Zi.unrefinedAddressSchema.nullish(),
        tin: Ri.z.string().nullish(),
        ftin: Ri.z.string().nullish(),
        reference_numbers: Ri.z.string().nullish(),
        ftin_not_legally_required: Ri.z.boolean(),
        document_type: Ri.z.literal("W-8BEN-E"),
        has_certified: Ri.z.boolean(),
        signature: Ri.z.string(),
        signature_timestamp: Ri.z.string(),
      });
      var zi = {};
      Object.defineProperty(zi, "__esModule", { value: !0 }),
        (zi.unrefinedW8BenTaxDocumentationSchema = void 0);
      const Li = Fr,
        qi = Lt;
      zi.unrefinedW8BenTaxDocumentationSchema = qi.z.object({
        name: qi.z.string(),
        country: qi.z.string(),
        tax_classification: qi.z.literal("INDIVIDUAL"),
        permanent_address: Li.unrefinedAddressSchema,
        mailing_address: Li.unrefinedAddressSchema.nullish(),
        tin: qi.z.string().nullish(),
        ftin: qi.z.string().nullish(),
        date_of_birth: qi.z.string(),
        reference_numbers: qi.z.string().nullish(),
        ftin_not_legally_required: qi.z.boolean(),
        document_type: qi.z.literal("W-8BEN"),
        has_certified: qi.z.boolean(),
        signature: qi.z.string(),
        signature_timestamp: qi.z.string(),
      });
      var Ui = {},
        Vi = {};
      Object.defineProperty(Vi, "__esModule", { value: !0 }),
        (Vi.requiredFtinSchema = void 0);
      const Fi = Bt,
        $i = Lt;
      Vi.requiredFtinSchema = $i.z.object({
        ftin: Fi.requiredStringSchemaWithMaxLength,
      });
      var Gi = {};
      !(function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.signedW8BenETaxDocumentationSchema =
            e.certifiedW8BenETaxDocumentationSchema =
            e.baseW8BenETaxDocumentationSchema =
            e.optionalW8BenETaxDocumentationSchema =
              void 0);
        const t = Fr,
          a = Bt,
          r = Lt,
          n = At,
          i = zr,
          o = Dr;
        (e.optionalW8BenETaxDocumentationSchema = r.z.object(
          {
            name: a.optionalStringSchema,
            country: a.optionalStringSchema,
            tax_classification: a.optionalStringSchema,
            permanent_address: t.optionalAddressSchema.nullish(),
            mailing_address: t.optionalAddressSchema.nullish(),
            tin: a.optionalStringSchema,
            ftin: a.optionalStringSchema,
            reference_numbers: a.optionalStringSchema,
            ftin_not_legally_required: a.optionalBooleanSchema,
            document_type: n.documentTypeSchema.nullish(),
          },
          { errorMap: a.getCustomErrorMap }
        )),
          (e.baseW8BenETaxDocumentationSchema =
            e.optionalW8BenETaxDocumentationSchema
              .extend({
                name: a.requiredStringSchema,
                country: r.z.union([
                  t.commonCountrySchema,
                  t.caCountrySchema,
                  t.usTerritoryCountrySchema,
                ]),
                tax_classification: o.w8BenETaxClassificationSchema,
                permanent_address: t.addressSchema,
                mailing_address: t.addressSchema.nullish(),
                tin: n.usTaxIdSchema.nullish(),
                ftin: a.optionalStringSchema,
                ftin_not_legally_required: a.requiredBooleanSchema,
                document_type: i.w8BenEDocumentationTypesSchema,
              })
              .strict()),
          (e.certifiedW8BenETaxDocumentationSchema =
            e.baseW8BenETaxDocumentationSchema
              .extend({ has_certified: a.requiredTrueSchema })
              .strict()),
          (e.signedW8BenETaxDocumentationSchema =
            e.certifiedW8BenETaxDocumentationSchema
              .extend({
                signature: a.requiredStringSchema,
                signature_timestamp: n.signatureTimestampSchema,
              })
              .strict());
      })(Gi),
        Object.defineProperty(Ui, "__esModule", { value: !0 }),
        (Ui.validW8BenETaxDocumentationSchema =
          Ui.validSignedW8BenETaxDocumentationSchema =
            void 0);
      const Ki = hr,
        Hi = Vi,
        Yi = Gi;
      (Ui.validSignedW8BenETaxDocumentationSchema =
        Yi.signedW8BenETaxDocumentationSchema
          .superRefine((e, t) => {
            if (!e.ftin_not_legally_required) {
              const a = (0, Ki.getMergedSchema)(
                Yi.signedW8BenETaxDocumentationSchema,
                Hi.requiredFtinSchema
              ).safeParse(e);
              (null != a && a.success) ||
                a.error.issues.forEach((e) => {
                  t.addIssue(e);
                });
            }
          })
          .describe("validSignedW8BenETaxDocumentationSchema")),
        (Ui.validW8BenETaxDocumentationSchema =
          Yi.baseW8BenETaxDocumentationSchema
            .superRefine((e, t) => {
              if (!e.ftin_not_legally_required) {
                const a = (0, Ki.getMergedSchema)(
                  Yi.baseW8BenETaxDocumentationSchema,
                  Hi.requiredFtinSchema
                ).safeParse(e);
                (null != a && a.success) ||
                  a.error.issues.forEach((e) => {
                    t.addIssue(e);
                  });
              }
            })
            .describe("validW8BenETaxDocumentationSchema"));
      var Ji = {},
        Xi = {};
      !(function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.signedW8BenTaxDocumentationSchema =
            e.certifiedW8BenTaxDocumentationSchema =
            e.baseW8BenTaxDocumentationSchema =
            e.optionalW8BenTaxDocumentationSchema =
              void 0);
        const t = Fr,
          a = Bt,
          r = Lt,
          n = At,
          i = Cr,
          o = Br,
          s = Dr;
        (e.optionalW8BenTaxDocumentationSchema = r.z.object(
          {
            name: a.optionalStringSchema,
            country: a.optionalStringSchema,
            tax_classification: a.optionalStringSchema,
            permanent_address: t.optionalAddressSchema.nullish(),
            mailing_address: t.optionalAddressSchema.nullish(),
            tin: a.optionalStringSchema,
            ftin: a.optionalStringSchema,
            date_of_birth: a.optionalStringSchema,
            reference_numbers: a.optionalStringSchema,
            ftin_not_legally_required: a.optionalBooleanSchema,
            document_type: n.documentTypeSchema.nullish(),
          },
          { errorMap: a.getCustomErrorMap }
        )),
          (e.baseW8BenTaxDocumentationSchema =
            e.optionalW8BenTaxDocumentationSchema
              .extend({
                name: a.requiredStringSchema,
                country: r.z.union([t.commonCountrySchema, t.caCountrySchema]),
                tax_classification: s.w8BenTaxClassificationSchema,
                permanent_address: t.addressSchema,
                mailing_address: t.addressSchema.nullish(),
                tin: n.usTaxIdSchema.nullish(),
                ftin: a.optionalStringSchema,
                ftin_not_legally_required: a.requiredBooleanSchema,
                date_of_birth: i.w8BenDateOfBirthSchema,
                document_type: o.w8BenDocumentationTypesSchema,
              })
              .strict()),
          (e.certifiedW8BenTaxDocumentationSchema =
            e.baseW8BenTaxDocumentationSchema
              .extend({ has_certified: a.requiredTrueSchema })
              .strict()),
          (e.signedW8BenTaxDocumentationSchema =
            e.certifiedW8BenTaxDocumentationSchema
              .extend({
                signature: a.requiredStringSchema,
                signature_timestamp: n.signatureTimestampSchema,
              })
              .strict());
      })(Xi),
        Object.defineProperty(Ji, "__esModule", { value: !0 }),
        (Ji.validW8BenTaxDocumentationSchema =
          Ji.validSignedW8BenTaxDocumentationSchema =
            void 0);
      const Qi = At,
        eo = hr,
        to = Vi,
        ao = Xi;
      (Ji.validSignedW8BenTaxDocumentationSchema =
        ao.signedW8BenTaxDocumentationSchema
          .superRefine((e, t) => {
            if (!e.ftin_not_legally_required) {
              const a = (0, eo.getMergedSchema)(
                ao.signedW8BenTaxDocumentationSchema,
                to.requiredFtinSchema
              ).safeParse(e);
              (null != a && a.success) ||
                a.error.issues.forEach((e) => {
                  t.addIssue(e);
                });
            }
            const a = Qi.validSignatureSchema.safeParse(e);
            (null != a && a.success) ||
              a.error.issues.forEach((e) => {
                t.addIssue(e);
              });
          })
          .describe("validSignedW8BenTaxDocumentationSchema")),
        (Ji.validW8BenTaxDocumentationSchema =
          ao.baseW8BenTaxDocumentationSchema
            .superRefine((e, t) => {
              if (!e.ftin_not_legally_required) {
                const a = (0, eo.getMergedSchema)(
                  ao.baseW8BenTaxDocumentationSchema,
                  to.requiredFtinSchema
                ).safeParse(e);
                (null != a && a.success) ||
                  a.error.issues.forEach((e) => {
                    t.addIssue(e);
                  });
              }
            })
            .describe("validW8BenTaxDocumentationSchema")),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.signedW8BenETaxDocumentationSchema =
              e.w8BenETaxDocumentationSchema =
              e.optionalW8BenETaxDocumentationSchema =
              e.signedW8BenTaxDocumentationSchema =
              e.w8BenTaxDocumentationSchema =
              e.optionalW8BenTaxDocumentationSchema =
                void 0),
            a(Cr, e),
            a(Dr, e),
            a(Br, e),
            a(zr, e),
            a(Vr, e),
            a(zi, e),
            a(Ui, e),
            a(Ji, e);
          var r = Xi;
          Object.defineProperty(e, "optionalW8BenTaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return r.optionalW8BenTaxDocumentationSchema;
            },
          });
          var n = Xi;
          Object.defineProperty(e, "w8BenTaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return n.baseW8BenTaxDocumentationSchema;
            },
          });
          var i = Xi;
          Object.defineProperty(e, "signedW8BenTaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return i.signedW8BenTaxDocumentationSchema;
            },
          });
          var o = Gi;
          Object.defineProperty(e, "optionalW8BenETaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return o.optionalW8BenETaxDocumentationSchema;
            },
          });
          var s = Gi;
          Object.defineProperty(e, "w8BenETaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return s.baseW8BenETaxDocumentationSchema;
            },
          });
          var c = Gi;
          Object.defineProperty(e, "signedW8BenETaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return c.signedW8BenETaxDocumentationSchema;
            },
          });
        })(Or);
      var ro = {},
        no = {};
      Object.defineProperty(no, "__esModule", { value: !0 }),
        (no.exemptFatcaCodes = void 0),
        (no.exemptFatcaCodes = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
        ]);
      var io = {};
      Object.defineProperty(io, "__esModule", { value: !0 }),
        (io.exemptPayeeCodes = void 0),
        (io.exemptPayeeCodes = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
        ]);
      var oo = {};
      Object.defineProperty(oo, "__esModule", { value: !0 }),
        (oo.w9DocumentationTypes = void 0),
        (oo.w9DocumentationTypes = ["W-9"]);
      var so = {};
      !(function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.entityTaxClassifications =
            e.llcTaxClassifications =
            e.otherTaxClassification =
            e.individualTaxClassification =
            e.w9TaxClassificationEnum =
            e.w9TaxClassifications =
            e.w9TaxClassificationMap =
              void 0),
          (e.w9TaxClassificationMap = {
            INDIVIDUAL: "Individual",
            SOLE_PROPRIETOR: "Sole Proprietor",
            SMLLC: "SMLLC",
            C_CORPORATION: "C Corporation",
            S_CORPORATION: "S Corporation",
            PARTNERSHIP: "Partnership",
            TRUST_ESTATE: "Trust/Estate",
            LLC_C: "LLC C Corporation",
            LLC_P: "LLC Partnership",
            LLC_S: "LLC S Corporation",
            OTHER: "Other",
          }),
          (e.w9TaxClassifications = Object.keys(e.w9TaxClassificationMap)),
          (e.w9TaxClassificationEnum = Object.keys(e.w9TaxClassificationMap)),
          (e.individualTaxClassification = ["INDIVIDUAL"]),
          (e.otherTaxClassification = ["OTHER"]),
          (e.llcTaxClassifications = ["LLC_C", "LLC_P", "LLC_S"]),
          (e.entityTaxClassifications = [
            "C_CORPORATION",
            "PARTNERSHIP",
            "S_CORPORATION",
            "TRUST_ESTATE",
          ]);
      })(so),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(no, e),
            a(io, e),
            a(oo, e),
            a(so, e);
        })(ro);
      var co = {},
        uo = {};
      Object.defineProperty(uo, "__esModule", { value: !0 }),
        (uo.optionalExemptFatcaCodeSchema = void 0);
      const lo = Bt,
        po = Lt,
        mo = ro;
      uo.optionalExemptFatcaCodeSchema = po.z
        .enum([...mo.exemptFatcaCodes, ""], { errorMap: lo.getCustomErrorMap })
        .nullish()
        .describe("optionalExemptFatcaCodeSchema");
      var ho = {};
      Object.defineProperty(ho, "__esModule", { value: !0 }),
        (ho.optionalExemptPayeeCodeSchema = void 0);
      const fo = Bt,
        go = Lt,
        yo = ro;
      ho.optionalExemptPayeeCodeSchema = go.z
        .enum([...yo.exemptPayeeCodes, ""], { errorMap: fo.getCustomErrorMap })
        .nullish()
        .describe("optionalExemptPayeeCodeSchema");
      var vo = {};
      Object.defineProperty(vo, "__esModule", { value: !0 }),
        (vo.w9DocumentationTypesSchema = void 0);
      const _o = Bt,
        So = Lt,
        bo = ro;
      vo.w9DocumentationTypesSchema = So.z
        .enum(bo.w9DocumentationTypes, { errorMap: _o.getCustomErrorMap })
        .describe("w9DocumentationTypesSchema");
      var xo = {};
      Object.defineProperty(xo, "__esModule", { value: !0 }),
        (xo.entityTaxClassificationSchema =
          xo.llcTaxClassificationSchema =
          xo.otherTaxClassificationSchema =
          xo.individualTaxClassificationSchema =
          xo.w9TaxClassificationSchema =
            void 0);
      const To = Bt,
        Mo = Lt,
        Oo = ro;
      (xo.w9TaxClassificationSchema = Mo.z
        .enum(Oo.w9TaxClassifications, { errorMap: To.getCustomErrorMap })
        .describe("w9TaxClassificationSchema")),
        (xo.individualTaxClassificationSchema = Mo.z
          .enum(Oo.individualTaxClassification, {
            errorMap: To.getCustomErrorMap,
          })
          .describe("individualTaxClassificationSchema")),
        (xo.otherTaxClassificationSchema = Mo.z
          .enum(Oo.otherTaxClassification, { errorMap: To.getCustomErrorMap })
          .describe("otherTaxClassificationSchema")),
        (xo.llcTaxClassificationSchema = Mo.z
          .enum(Oo.llcTaxClassifications, { errorMap: To.getCustomErrorMap })
          .describe("llcTaxClassificationSchema")),
        (xo.entityTaxClassificationSchema = Mo.z
          .enum(Oo.entityTaxClassifications, { errorMap: To.getCustomErrorMap })
          .describe("entityTaxClassificationSchema"));
      var Co = {};
      Object.defineProperty(Co, "__esModule", { value: !0 }),
        (Co.unrefinedW9TaxDocumentationSchema = void 0);
      const Eo = Fr,
        wo = Lt,
        Po = jt,
        Io = ro;
      Co.unrefinedW9TaxDocumentationSchema = wo.z.object({
        name: wo.z.string(),
        dba_name: wo.z.string().nullish(),
        tax_classification: wo.z.enum(Io.w9TaxClassificationEnum),
        other_tax_classification: wo.z.string().nullish(),
        address: Eo.unrefinedAddressSchema,
        tin: wo.z.string(),
        tin_type: wo.z.enum(Po.usTaxIdTypes),
        exempt_payee_code: wo.z.enum(Io.exemptPayeeCodes).nullish(),
        exempt_fatca_code: wo.z.enum(Io.exemptFatcaCodes).nullish(),
        document_type: wo.z.literal("W-9"),
        has_certified: wo.z.boolean(),
        is_not_subject_backup_withholding: wo.z.boolean(),
        signature: wo.z.string(),
        signature_timestamp: wo.z.string(),
      });
      var jo = {},
        Do = {},
        No = {};
      !(function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.signedW9TaxDocumentationSchema =
            e.certifiedW9TaxDocumentationSchema =
            e.baseW9TaxDocumentationSchema =
            e.optionalW9TaxDocumentationSchema =
              void 0);
        const t = Fr,
          a = Bt,
          r = Lt,
          n = At,
          i = vo,
          o = xo;
        (e.optionalW9TaxDocumentationSchema = r.z.object(
          {
            name: a.optionalStringSchema,
            dba_name: a.optionalStringSchema,
            tax_classification: a.optionalStringSchema,
            other_tax_classification: a.optionalStringSchema,
            address: t.optionalAddressSchema.nullish(),
            tin: a.optionalStringSchema,
            tin_type: a.optionalStringSchema,
            exempt_payee_code: a.optionalStringSchema,
            exempt_fatca_code: a.optionalStringSchema,
            document_type: n.documentTypeSchema.nullish(),
          },
          { errorMap: a.getCustomErrorMap }
        )),
          (e.baseW9TaxDocumentationSchema = e.optionalW9TaxDocumentationSchema
            .extend({
              name: a.requiredStringSchema,
              tax_classification: o.w9TaxClassificationSchema,
              address: t.addressSchema,
              tin: n.usTaxIdSchema,
              tin_type: n.usTaxIdTypeSchema,
              document_type: i.w9DocumentationTypesSchema,
            })
            .strict()),
          (e.certifiedW9TaxDocumentationSchema = e.baseW9TaxDocumentationSchema
            .extend({
              has_certified: a.requiredTrueSchema,
              is_not_subject_backup_withholding: a.requiredBooleanSchema,
            })
            .strict()),
          (e.signedW9TaxDocumentationSchema =
            e.certifiedW9TaxDocumentationSchema
              .extend({
                signature: a.requiredStringSchema,
                signature_timestamp: n.signatureTimestampSchema,
              })
              .strict());
      })(No),
        Object.defineProperty(Do, "__esModule", { value: !0 }),
        (Do.entityW9TaxDocumentationSchema = void 0);
      const Ao = Bt,
        ko = At,
        Bo = uo,
        Zo = ho,
        Ro = xo,
        Wo = No;
      Do.entityW9TaxDocumentationSchema = Wo.baseW9TaxDocumentationSchema
        .extend({
          tax_classification: Ro.entityTaxClassificationSchema,
          other_tax_classification: Ao.optionalUndefinedSchema,
          exempt_payee_code: Zo.optionalExemptPayeeCodeSchema,
          exempt_fatca_code: Bo.optionalExemptFatcaCodeSchema,
          tin_type: ko.einTaxIdTypeSchema,
        })
        .strict()
        .describe("entityW9TaxDocumentationSchema");
      var zo = {};
      Object.defineProperty(zo, "__esModule", { value: !0 }),
        (zo.individualW9TaxDocumentationSchema = void 0);
      const Lo = Bt,
        qo = At,
        Uo = uo,
        Vo = ho,
        Fo = xo,
        $o = No;
      zo.individualW9TaxDocumentationSchema = $o.baseW9TaxDocumentationSchema
        .extend({
          tax_classification: Fo.individualTaxClassificationSchema,
          other_tax_classification: Lo.optionalUndefinedSchema,
          exempt_payee_code: Vo.optionalExemptPayeeCodeSchema,
          exempt_fatca_code: Uo.optionalExemptFatcaCodeSchema,
          tin_type: qo.individualTaxIdTypeSchema,
        })
        .strict()
        .describe("individualW9TaxDocumentationSchema");
      var Go = {};
      Object.defineProperty(Go, "__esModule", { value: !0 }),
        (Go.llcW9TaxDocumentationSchema = void 0);
      const Ko = Bt,
        Ho = At,
        Yo = uo,
        Jo = ho,
        Xo = xo,
        Qo = No;
      Go.llcW9TaxDocumentationSchema = Qo.baseW9TaxDocumentationSchema
        .extend({
          tax_classification: Xo.llcTaxClassificationSchema,
          other_tax_classification: Ko.optionalUndefinedSchema,
          exempt_payee_code: Jo.optionalExemptPayeeCodeSchema,
          exempt_fatca_code: Yo.optionalExemptFatcaCodeSchema,
          tin_type: Ho.einTaxIdTypeSchema,
        })
        .strict()
        .describe("llcW9TaxDocumentationSchema");
      var es = {};
      Object.defineProperty(es, "__esModule", { value: !0 }),
        (es.otherW9TaxDocumentationSchema = void 0);
      const ts = Bt,
        as = At,
        rs = uo,
        ns = ho,
        is = xo,
        os = No;
      (es.otherW9TaxDocumentationSchema = os.baseW9TaxDocumentationSchema
        .extend({
          tax_classification: is.otherTaxClassificationSchema,
          other_tax_classification: ts.requiredStringSchema,
          exempt_payee_code: ns.optionalExemptPayeeCodeSchema,
          exempt_fatca_code: rs.optionalExemptFatcaCodeSchema,
          tin_type: as.einTaxIdTypeSchema,
        })
        .strict()
        .describe("otherW9TaxDocumentationSchema")),
        Object.defineProperty(jo, "__esModule", { value: !0 }),
        (jo.validSignedW9TaxDocumentationSchema =
          jo.validW9TaxDocumentationSchema =
            void 0);
      const ss = At,
        cs = hr,
        ds = Do,
        us = zo,
        ls = Go,
        ps = es,
        ms = No;
      (jo.validW9TaxDocumentationSchema =
        ms.baseW9TaxDocumentationSchema.superRefine((e, t) => {
          let a;
          switch (e.tax_classification) {
            case "INDIVIDUAL":
              a = (0, cs.getMergedSchema)(
                ms.baseW9TaxDocumentationSchema,
                us.individualW9TaxDocumentationSchema
              );
              break;
            case "LLC_C":
            case "LLC_P":
            case "LLC_S":
              a = (0, cs.getMergedSchema)(
                ms.baseW9TaxDocumentationSchema,
                ls.llcW9TaxDocumentationSchema
              );
              break;
            case "OTHER":
              a = (0, cs.getMergedSchema)(
                ms.baseW9TaxDocumentationSchema,
                ps.otherW9TaxDocumentationSchema
              );
              break;
            default:
              a = (0, cs.getMergedSchema)(
                ms.baseW9TaxDocumentationSchema,
                ds.entityW9TaxDocumentationSchema
              );
          }
          const r = a.safeParse(e);
          (null != r && r.success) ||
            r.error.issues.forEach((e) => {
              t.addIssue(e);
            });
        })),
        (jo.validSignedW9TaxDocumentationSchema =
          ms.signedW9TaxDocumentationSchema.superRefine((e, t) => {
            let a;
            switch (e.tax_classification) {
              case "INDIVIDUAL":
                a = (0, cs.getMergedSchema)(
                  ms.signedW9TaxDocumentationSchema,
                  us.individualW9TaxDocumentationSchema
                );
                break;
              case "LLC_C":
              case "LLC_P":
              case "LLC_S":
                a = (0, cs.getMergedSchema)(
                  ms.signedW9TaxDocumentationSchema,
                  ls.llcW9TaxDocumentationSchema
                );
                break;
              case "OTHER":
                a = (0, cs.getMergedSchema)(
                  ms.signedW9TaxDocumentationSchema,
                  ps.otherW9TaxDocumentationSchema
                );
                break;
              default:
                a = (0, cs.getMergedSchema)(
                  ms.signedW9TaxDocumentationSchema,
                  ds.entityW9TaxDocumentationSchema
                );
            }
            const r = a.safeParse(e);
            if (null != r && r.success) {
              if ("INDIVIDUAL" === e.tax_classification) {
                const e = ss.validSignatureSchema.safeParse(r.data);
                (null != e && e.success) ||
                  e.error.issues.forEach((e) => {
                    t.addIssue(e);
                  });
              }
            } else
              r.error.issues.forEach((e) => {
                t.addIssue(e);
              });
          })),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.signedW9TaxDocumentationSchema =
              e.w9TaxDocumentationSchema =
              e.optionalW9TaxDocumentationSchema =
                void 0),
            a(uo, e),
            a(ho, e),
            a(vo, e),
            a(xo, e),
            a(Co, e),
            a(jo, e);
          var r = No;
          Object.defineProperty(e, "optionalW9TaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return r.optionalW9TaxDocumentationSchema;
            },
          });
          var n = No;
          Object.defineProperty(e, "w9TaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return n.baseW9TaxDocumentationSchema;
            },
          });
          var i = No;
          Object.defineProperty(e, "signedW9TaxDocumentationSchema", {
            enumerable: !0,
            get: function () {
              return i.signedW9TaxDocumentationSchema;
            },
          });
        })(co);
      var hs = {};
      Object.defineProperty(hs, "__esModule", { value: !0 }),
        (hs.cleanTaxDocumentation = void 0);
      const fs = Bt,
        gs = Lt,
        ys = hr,
        vs = Gi,
        _s = Xi,
        Ss = No;
      hs.cleanTaxDocumentation = function (e) {
        const t = "documentType" in e,
          a = (0, fs.snakeCaseProperties)(e);
        try {
          let e;
          switch (a.document_type) {
            case "W-8BEN":
              e = _s.optionalW8BenTaxDocumentationSchema.parse(a);
              break;
            case "W-8BEN-E":
              e = vs.optionalW8BenETaxDocumentationSchema.parse(a);
              break;
            case "W-9":
              e = Ss.optionalW9TaxDocumentationSchema.parse(a);
              break;
            default:
              e = {};
          }
          return t ? (0, fs.camelCaseProperties)(e) : e;
        } catch (r) {
          throw r instanceof gs.z.ZodError ? new ys.ValidationError(r, t) : r;
        }
      };
      var bs = {};
      Object.defineProperty(bs, "__esModule", { value: !0 }),
        (bs.validateTaxDocumentation = void 0);
      const xs = Bt,
        Ts = Lt,
        Ms = hr,
        Os = Or,
        Cs = jo;
      bs.validateTaxDocumentation = function (e) {
        const t = "documentType" in e,
          a = (0, xs.snakeCaseProperties)(e);
        try {
          let e;
          switch (a.document_type) {
            case "W-8BEN":
              e = Os.validW8BenTaxDocumentationSchema.parse(a);
              break;
            case "W-8BEN-E":
              e = Os.validW8BenETaxDocumentationSchema.parse(a);
              break;
            case "W-9":
              e = Cs.validW9TaxDocumentationSchema.parse(a);
              break;
            default:
              throw new Ts.z.ZodError([
                {
                  code: "custom",
                  path: [
                    t
                      ? (0, xs.camelCaseString)("document_type")
                      : "document_type",
                  ],
                  message: xs.ErrorMessages.IsInvalid,
                },
              ]);
          }
          return t ? (0, xs.camelCaseProperties)(e) : e;
        } catch (r) {
          throw r instanceof Ts.z.ZodError ? new Ms.ValidationError(r, t) : r;
        }
      };
      var Es = {};
      Object.defineProperty(Es, "__esModule", { value: !0 }),
        (Es.validateSignedTaxDocumentation = void 0);
      const ws = Bt,
        Ps = Lt,
        Is = hr,
        js = Or,
        Ds = jo;
      (Es.validateSignedTaxDocumentation = function (e) {
        const t = "documentType" in e,
          a = (0, ws.snakeCaseProperties)(e);
        try {
          let e;
          switch (a.document_type) {
            case "W-8BEN":
              e = js.validSignedW8BenTaxDocumentationSchema.parse(a);
              break;
            case "W-8BEN-E":
              e = js.validSignedW8BenETaxDocumentationSchema.parse(a);
              break;
            case "W-9":
              e = Ds.validSignedW9TaxDocumentationSchema.parse(a);
              break;
            default:
              throw new Ps.z.ZodError([
                {
                  code: "custom",
                  path: [
                    t
                      ? (0, ws.camelCaseString)("document_type")
                      : "document_type",
                  ],
                  message: ws.ErrorMessages.IsInvalid,
                },
              ]);
          }
          return t ? (0, ws.camelCaseProperties)(e) : e;
        } catch (r) {
          throw r instanceof Ps.z.ZodError ? new Is.ValidationError(r, t) : r;
        }
      }),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(jt, e),
            a(At, e),
            a(hr, e),
            a(br, e),
            a(Or, e),
            a(ro, e),
            a(co, e),
            a(hs, e),
            a(bs, e),
            a(Es, e);
        })(It);
      var Ns = {},
        As = {},
        ks = {};
      !(function (e) {
        var t;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorMessages = void 0),
          ((t = e.ErrorMessages || (e.ErrorMessages = {})).IsIncorrect =
            "Incorrect"),
          (t.IsInvalid = "Invalid"),
          (t.IsMissing = "Missing"),
          (t.IsNotAllowed = "Not allowed"),
          (t.IsRequired = "Required"),
          (t.IsWrongType = "Wrong type"),
          (t.IsWrongCombination = "Wrong combination");
      })(ks),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }), a(ks, e);
        })(As);
      var Bs = {},
        Zs = {},
        Rs = {},
        Ws = {};
      Object.defineProperty(Ws, "__esModule", { value: !0 }),
        (Ws.convertNull = void 0);
      Ws.convertNull = (e) => (null === e ? void 0 : e);
      var zs = {};
      Object.defineProperty(zs, "__esModule", { value: !0 }),
        (zs.expectFail = void 0);
      zs.expectFail = (e, t, a) => {
        var r;
        if ((expect(e.success).toBe(!1), !e.success)) {
          const n = null == (r = e.error) ? void 0 : r.issues;
          expect(n.length).toBeGreaterThan(0),
            n.forEach((e, r) => {
              expect(e.path).toStrictEqual(
                "object" == typeof t[r]
                  ? t[r]
                  : "string" == typeof t[r]
                  ? [t[r]]
                  : []
              ),
                expect(e.message).toBe(a[r]);
            });
        }
      };
      var Ls = {};
      Object.defineProperty(Ls, "__esModule", { value: !0 }),
        (Ls.getCustomErrorMap = void 0);
      const qs = Lt,
        Us = As;
      Ls.getCustomErrorMap = (e, t) => {
        switch (e.code) {
          case qs.z.ZodIssueCode.invalid_type:
            return {
              message:
                "undefined" === e.received || "null" === e.received
                  ? Us.ErrorMessages.IsMissing
                  : Us.ErrorMessages.IsWrongType,
            };
          case qs.z.ZodIssueCode.invalid_enum_value:
            return {
              message:
                void 0 === e.received || null === e.received
                  ? Us.ErrorMessages.IsMissing
                  : Us.ErrorMessages.IsInvalid,
            };
          case qs.z.ZodIssueCode.invalid_literal:
          case qs.z.ZodIssueCode.too_small:
          case qs.z.ZodIssueCode.too_big:
            return { message: Us.ErrorMessages.IsInvalid };
          default:
            return { message: t.defaultError };
        }
      };
      var Vs = {},
        Fs =
          (Et && Et.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(Vs, "__esModule", { value: !0 }),
        (Vs.snakeCaseString = Vs.snakeCaseProperties = void 0);
      const $s = Fs(pa),
        Gs = { parsingOptions: { splitRegexp: /([a-z])([A-Z0-9])/g } };
      Vs.snakeCaseProperties = (e) => (0, $s.default)(e, Gs);
      Vs.snakeCaseString = (e) =>
        e.replace(/([A-Z0-9])/g, (e) => "_" + e.toLowerCase());
      var Ks = {};
      !(function (e) {
        function t(a) {
          return Array.isArray(a)
            ? a.map(t)
            : null !== a && "object" == typeof a
            ? Object.entries(a).reduce(
                (a, [r, n]) => ((a[(0, e.camelCaseString)(r)] = t(n)), a),
                {}
              )
            : a;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.camelCaseArray =
            e.camelCaseString =
            e.camelCaseProperties =
              void 0);
        e.camelCaseProperties = (e) => t(e);
        e.camelCaseString = (e) =>
          e.replace(/_([a-zA-Z0-9])/g, (e, t) => t.toUpperCase());
        e.camelCaseArray = (t) =>
          t.map((t) => ("string" == typeof t ? (0, e.camelCaseString)(t) : t));
      })(Ks),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Ws, e),
            a(zs, e),
            a(Ls, e),
            a(Vs, e),
            a(Ks, e);
        })(Rs),
        Object.defineProperty(Zs, "__esModule", { value: !0 }),
        (Zs.disallowedStringSchema = void 0);
      const Hs = Lt,
        Ys = As,
        Js = Rs;
      Zs.disallowedStringSchema = Hs.z
        .string({ invalid_type_error: Ys.ErrorMessages.IsWrongType })
        .trim()
        .max(0, Ys.ErrorMessages.IsNotAllowed)
        .optional()
        .nullable()
        .transform(Js.convertNull)
        .describe("disallowedStringSchema");
      var Xs = {};
      Object.defineProperty(Xs, "__esModule", { value: !0 }),
        (Xs.optionalBooleanSchema = void 0);
      const Qs = Lt,
        ec = Rs;
      Xs.optionalBooleanSchema = Qs.z
        .boolean({ errorMap: ec.getCustomErrorMap })
        .nullish()
        .transform(ec.convertNull)
        .describe("optionalBooleanSchema");
      var tc = {};
      Object.defineProperty(tc, "__esModule", { value: !0 }),
        (tc.optionalStringSchema = void 0);
      const ac = Lt,
        rc = Rs,
        nc = Ws;
      tc.optionalStringSchema = ac.z
        .string({ errorMap: rc.getCustomErrorMap })
        .trim()
        .nullish()
        .transform(nc.convertNull)
        .describe("optionalStringSchema");
      var ic = {};
      Object.defineProperty(ic, "__esModule", { value: !0 }),
        (ic.requiredStringSchema = void 0);
      const oc = Lt,
        sc = As;
      ic.requiredStringSchema = oc.z
        .string({
          invalid_type_error: sc.ErrorMessages.IsWrongType,
          required_error: sc.ErrorMessages.IsMissing,
        })
        .trim()
        .min(1, sc.ErrorMessages.IsRequired)
        .describe("requiredStringSchema");
      var cc = {};
      Object.defineProperty(cc, "__esModule", { value: !0 }),
        (cc.requiredTrueSchema = void 0);
      const dc = Lt,
        uc = As,
        lc = Rs;
      cc.requiredTrueSchema = dc.z
        .boolean({ errorMap: lc.getCustomErrorMap })
        .refine((e) => !0 === e, { message: uc.ErrorMessages.IsInvalid })
        .describe("requiredTrueSchema");
      var pc = {},
        mc = {};
      Object.defineProperty(mc, "__esModule", { value: !0 }),
        (mc.requiredRefinement = void 0);
      const hc = As;
      mc.requiredRefinement = (e, t = () => !0) => [
        (a) => !(t(a) && !a[e]),
        { message: hc.ErrorMessages.IsRequired, path: [e] },
      ];
      var fc = {};
      Object.defineProperty(fc, "__esModule", { value: !0 }),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(mc, e),
            a(fc, e);
        })(pc);
      var gc = {};
      Object.defineProperty(gc, "__esModule", { value: !0 }),
        (gc.optionalUndefinedSchema = void 0);
      const yc = Lt,
        vc = As;
      gc.optionalUndefinedSchema = yc.z
        .preprocess((e) => ("" === e ? null : e), yc.z.any())
        .nullish()
        .refine((e) => null == e, { message: vc.ErrorMessages.IsInvalid })
        .describe("optionalUndefinedSchema");
      var _c = {};
      Object.defineProperty(_c, "__esModule", { value: !0 }),
        (_c.requiredBooleanSchema = void 0);
      const Sc = Lt,
        bc = Rs;
      _c.requiredBooleanSchema = Sc.z
        .boolean({ errorMap: bc.getCustomErrorMap })
        .describe("requiredBooleanSchema");
      var xc = {};
      Object.defineProperty(xc, "__esModule", { value: !0 }),
        (xc.requiredStringSchemaWithMaxLength = void 0);
      const Tc = As,
        Mc = ic;
      (xc.requiredStringSchemaWithMaxLength = Mc.requiredStringSchema
        .max(22, Tc.ErrorMessages.IsNotAllowed)
        .describe("requiredStringSchemaWithMaxLength")),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Zs, e),
            a(Xs, e),
            a(tc, e),
            a(ic, e),
            a(cc, e),
            a(pc, e),
            a(gc, e),
            a(_c, e),
            a(xc, e);
        })(Bs),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(As, e),
            a(Bs, e),
            a(Rs, e);
        })(Ns);
      vt.enum(["DOCUMENTED", "UNDOCUMENTED"]);
      const Oc = vt.object({ id: vt.string() });
      vt.object({ type: xt });
      const Cc = vt.enum(["PROCESSING", "FINISHED", "ERROR"]),
        Ec = vt.object({
          id: vt.string(),
          documentDate: vt.string().optional(),
          status: Cc,
          type: vt.string(),
          createdDate: vt.string(),
          url: vt.string().optional(),
        }),
        wc = vt.enum([
          "TIN_VALIDATION_FAILURE",
          "INCOMPLETE",
          "NO_DATA",
          "PO_BOX",
          "US_ADDRESS",
          "CARE_OF",
        ]);
      vt.object({ type: wc });
      var Pc = ((e) => (
        (e.Valid = "VALID"),
        (e.Invalid = "INVALID"),
        (e.Undocumented = "UNDOCUMENTED"),
        e
      ))(Pc || {});
      const Ic = vt.nativeEnum(Pc);
      var jc = ((e) => (
        (e.PoBoxPermanentAddress = "PO_BOX_PERMANENT_ADDRESS"),
        (e.UsPermanentAddress = "US_PERMANENT_ADDRESS"),
        (e.UsMailingAddress = "US_MAILING_ADDRESS"),
        (e.ExpiredForm = "EXPIRED_FORM"),
        (e.CareOf = "CARE_OF_PERMANENT_ADDRESS"),
        e
      ))(jc || {});
      const Dc = vt.nativeEnum(jc);
      var Nc = ((e) => ((e.Open = "OPEN"), (e.Resolved = "RESOLVED"), e))(
        Nc || {}
      );
      const Ac = vt.nativeEnum(Nc);
      var kc = ((e) => (
        (e.NotApplicable = "NOT_APPLICABLE"),
        (e.Open = "OPEN"),
        (e.Resolved = "RESOLVED"),
        e
      ))(kc || {});
      const Bc = vt.nativeEnum(kc);
      var Zc = ((e) => (
        (e.NotApplicable = "NOT_APPLICABLE"),
        (e.Open = "OPEN"),
        (e.Resolved = "RESOLVED"),
        e
      ))(Zc || {});
      const Rc = vt.nativeEnum(Zc);
      var Wc = ((e) => (
        (e.Unprocessed = "UNPROCESSED"),
        (e.Pending = "PENDING"),
        (e.Invalid = "INVALID"),
        (e.Mismatch = "MISMATCH"),
        (e.NotIssued = "NOT_ISSUED"),
        (e.ValidTinTypeMismatch = "VALID_TIN_TYPE_MISMATCH"),
        (e.Valid = "VALID"),
        e
      ))(Wc || {});
      const zc = vt.object({
          issueType: Dc,
          issueStatus: Ac,
          curingStatus: Bc,
          resubmissionStatus: Rc,
          id: vt.string().uuid(),
          taxDocumentId: vt.string().uuid(),
        }),
        Lc = vt.object({
          documentType: vt.literal("W-9"),
          status: Ic,
          tinVerificationStatus: vt.nativeEnum(Wc).optional(),
          tinVerificationDate: vt.string().datetime().optional(),
          id: vt.string().uuid(),
        }),
        qc = vt.object({
          documentType: vt.enum(["W-8BEN", "W-8BEN-E"]),
          status: Ic,
          issues: vt
            .object({
              issueType: zc.shape.issueType,
              issueStatus: zc.shape.issueStatus,
              curingStatus: zc.shape.curingStatus,
              resubmissionStatus: zc.shape.resubmissionStatus,
            })
            .array(),
          expirationDate: vt.string().datetime(),
          id: vt.string().uuid(),
        }),
        Uc = vt.object({ status: Ic }),
        Vc = vt.union([Lc, qc, Uc]);
      vt.enum([
        "INVALID",
        "MISMATCH",
        "NOT_ISSUED",
        "PENDING",
        "UNPROCESSED",
        "VALID",
        "VALID_TIN_TYPE_MISMATCH",
      ]);
      const Fc = ({ bearerToken: e, apiKey: t }) =>
          new Headers({ Authorization: `Bearer ${e}`, "x-api-key": t || "" }),
        $c = (e, t, a) => {
          try {
            return t.parse(e);
          } catch (r) {
            const e = r instanceof Error ? `\n${r.message}` : "";
            throw new Error(`${a}${e}`);
          }
        },
        Gc = { parsingOptions: { splitRegexp: /([a-z])([A-Z0-9])/g } },
        Kc = ({ requestData: e, requestDataSchema: t }) => {
          if (void 0 === e) return;
          if (!t)
            throw new Error(
              "Request data is not allowed for this type of request."
            );
          const a = $c(e, t, "Request data did not match expected schema."),
            r = "object" == typeof a ? ((e) => ha(e, Gc))(a) : a;
          return JSON.stringify(r);
        },
        Hc = async (e) =>
          `Server returned unexpected response.\nStatus code: ${
            e.status
          }\nBody: ${await e.text()}`,
        Yc = /[\p{Lu}]/u,
        Jc = /[\p{Ll}]/u,
        Xc = /^[\p{Lu}](?![\p{Lu}])/gu,
        Qc = /([\p{Alpha}\p{N}_]|$)/u,
        ed = /[_.\- ]+/,
        td = new RegExp("^" + ed.source),
        ad = new RegExp(ed.source + Qc.source, "gu"),
        rd = new RegExp("\\d+" + Qc.source, "gu");
      function nd(e, t) {
        if ("string" != typeof e && !Array.isArray(e))
          throw new TypeError("Expected the input to be `string | string[]`");
        if (
          ((t = { pascalCase: !1, preserveConsecutiveUppercase: !1, ...t }),
          0 ===
            (e = Array.isArray(e)
              ? e
                  .map((e) => e.trim())
                  .filter((e) => e.length)
                  .join("-")
              : e.trim()).length)
        )
          return "";
        const a =
            !1 === t.locale
              ? (e) => e.toLowerCase()
              : (e) => e.toLocaleLowerCase(t.locale),
          r =
            !1 === t.locale
              ? (e) => e.toUpperCase()
              : (e) => e.toLocaleUpperCase(t.locale);
        return 1 === e.length
          ? ed.test(e)
            ? ""
            : t.pascalCase
            ? r(e)
            : a(e)
          : (e !== a(e) &&
              (e = ((e, t, a) => {
                let r = !1,
                  n = !1,
                  i = !1;
                for (let o = 0; o < e.length; o++) {
                  const s = e[o];
                  r && Yc.test(s)
                    ? ((e = e.slice(0, o) + "-" + e.slice(o)),
                      (r = !1),
                      (i = n),
                      (n = !0),
                      o++)
                    : n && i && Jc.test(s)
                    ? ((e = e.slice(0, o - 1) + "-" + e.slice(o - 1)),
                      (i = n),
                      (n = !1),
                      (r = !0))
                    : ((r = t(s) === s && a(s) !== s),
                      (i = n),
                      (n = a(s) === s && t(s) !== s));
                }
                return e;
              })(e, a, r)),
            (e = e.replace(td, "")),
            (e = t.preserveConsecutiveUppercase
              ? ((e, t) => ((Xc.lastIndex = 0), e.replace(Xc, (e) => t(e))))(
                  e,
                  a
                )
              : a(e)),
            t.pascalCase && (e = r(e.charAt(0)) + e.slice(1)),
            ((e, t) => (
              (ad.lastIndex = 0),
              (rd.lastIndex = 0),
              e.replace(ad, (e, a) => t(a)).replace(rd, (e) => t(e))
            ))(e, r));
      }
      class id extends Map {
        constructor(e = {}) {
          if ((super(), !(e.maxSize && e.maxSize > 0)))
            throw new TypeError("`maxSize` must be a number greater than 0");
          if ("number" == typeof e.maxAge && 0 === e.maxAge)
            throw new TypeError("`maxAge` must be a number greater than 0");
          (this.maxSize = e.maxSize),
            (this.maxAge = e.maxAge || Number.POSITIVE_INFINITY),
            (this.onEviction = e.onEviction),
            (this.cache = new Map()),
            (this.oldCache = new Map()),
            (this._size = 0);
        }
        _emitEvictions(e) {
          if ("function" == typeof this.onEviction)
            for (const [t, a] of e) this.onEviction(t, a.value);
        }
        _deleteIfExpired(e, t) {
          return (
            "number" == typeof t.expiry &&
            t.expiry <= Date.now() &&
            ("function" == typeof this.onEviction &&
              this.onEviction(e, t.value),
            this.delete(e))
          );
        }
        _getOrDeleteIfExpired(e, t) {
          if (!1 === this._deleteIfExpired(e, t)) return t.value;
        }
        _getItemValue(e, t) {
          return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value;
        }
        _peek(e, t) {
          const a = t.get(e);
          return this._getItemValue(e, a);
        }
        _set(e, t) {
          this.cache.set(e, t),
            this._size++,
            this._size >= this.maxSize &&
              ((this._size = 0),
              this._emitEvictions(this.oldCache),
              (this.oldCache = this.cache),
              (this.cache = new Map()));
        }
        _moveToRecent(e, t) {
          this.oldCache.delete(e), this._set(e, t);
        }
        *_entriesAscending() {
          for (const e of this.oldCache) {
            const [t, a] = e;
            this.cache.has(t) ||
              (!1 === this._deleteIfExpired(t, a) && (yield e));
          }
          for (const e of this.cache) {
            const [t, a] = e;
            !1 === this._deleteIfExpired(t, a) && (yield e);
          }
        }
        get(e) {
          if (this.cache.has(e)) {
            const t = this.cache.get(e);
            return this._getItemValue(e, t);
          }
          if (this.oldCache.has(e)) {
            const t = this.oldCache.get(e);
            if (!1 === this._deleteIfExpired(e, t))
              return this._moveToRecent(e, t), t.value;
          }
        }
        set(e, t, { maxAge: a = this.maxAge } = {}) {
          const r =
            "number" == typeof a && a !== Number.POSITIVE_INFINITY
              ? Date.now() + a
              : void 0;
          this.cache.has(e)
            ? this.cache.set(e, { value: t, expiry: r })
            : this._set(e, { value: t, expiry: r });
        }
        has(e) {
          return this.cache.has(e)
            ? !this._deleteIfExpired(e, this.cache.get(e))
            : !!this.oldCache.has(e) &&
                !this._deleteIfExpired(e, this.oldCache.get(e));
        }
        peek(e) {
          return this.cache.has(e)
            ? this._peek(e, this.cache)
            : this.oldCache.has(e)
            ? this._peek(e, this.oldCache)
            : void 0;
        }
        delete(e) {
          const t = this.cache.delete(e);
          return t && this._size--, this.oldCache.delete(e) || t;
        }
        clear() {
          this.cache.clear(), this.oldCache.clear(), (this._size = 0);
        }
        resize(e) {
          if (!(e && e > 0))
            throw new TypeError("`maxSize` must be a number greater than 0");
          const t = [...this._entriesAscending()],
            a = t.length - e;
          a < 0
            ? ((this.cache = new Map(t)),
              (this.oldCache = new Map()),
              (this._size = t.length))
            : (a > 0 && this._emitEvictions(t.slice(0, a)),
              (this.oldCache = new Map(t.slice(a))),
              (this.cache = new Map()),
              (this._size = 0)),
            (this.maxSize = e);
        }
        *keys() {
          for (const [e] of this) yield e;
        }
        *values() {
          for (const [, e] of this) yield e;
        }
        *[Symbol.iterator]() {
          for (const e of this.cache) {
            const [t, a] = e;
            !1 === this._deleteIfExpired(t, a) && (yield [t, a.value]);
          }
          for (const e of this.oldCache) {
            const [t, a] = e;
            this.cache.has(t) ||
              (!1 === this._deleteIfExpired(t, a) && (yield [t, a.value]));
          }
        }
        *entriesDescending() {
          let e = [...this.cache];
          for (let t = e.length - 1; t >= 0; --t) {
            const a = e[t],
              [r, n] = a;
            !1 === this._deleteIfExpired(r, n) && (yield [r, n.value]);
          }
          e = [...this.oldCache];
          for (let t = e.length - 1; t >= 0; --t) {
            const a = e[t],
              [r, n] = a;
            this.cache.has(r) ||
              (!1 === this._deleteIfExpired(r, n) && (yield [r, n.value]));
          }
        }
        *entriesAscending() {
          for (const [e, t] of this._entriesAscending()) yield [e, t.value];
        }
        get size() {
          if (!this._size) return this.oldCache.size;
          let e = 0;
          for (const t of this.oldCache.keys()) this.cache.has(t) || e++;
          return Math.min(this._size + e, this.maxSize);
        }
        entries() {
          return this.entriesAscending();
        }
        forEach(e, t = this) {
          for (const [a, r] of this.entriesAscending()) e.call(t, r, a, this);
        }
        get [Symbol.toStringTag]() {
          return JSON.stringify([...this.entriesAscending()]);
        }
      }
      const od = new id({ maxSize: 1e5 }),
        sd = (e) =>
          "object" == typeof e &&
          null !== e &&
          !(e instanceof RegExp) &&
          !(e instanceof Error) &&
          !(e instanceof Date),
        cd = (e, t) => {
          if (!sd(e)) return e;
          t = { deep: !1, pascalCase: !1, ...t };
          const { exclude: a, pascalCase: r, stopPaths: n, deep: i } = t,
            o = new Set(n),
            s = (e) => (t, n) => {
              if (i && sd(n)) {
                const a = void 0 === e ? t : `${e}.${t}`;
                o.has(a) || (n = ta(n, s(a)));
              }
              if (
                !a ||
                !((e, t) =>
                  e.some((e) =>
                    "string" == typeof e
                      ? e === t
                      : ((e.lastIndex = 0), e.test(t))
                  ))(a, t)
              ) {
                const e = r ? `${t}_` : t;
                if (od.has(e)) t = od.get(e);
                else {
                  const a = nd(t, { pascalCase: r, locale: !1 });
                  t.length < 100 && od.set(e, a), (t = a);
                }
              }
              return [t, n];
            };
          return ta(e, s(void 0));
        };
      const dd = { deep: !0 },
        ud = (e) =>
          (function (e, t) {
            return Array.isArray(e)
              ? Object.keys(e).map((a) => cd(e[a], t))
              : cd(e, t);
          })(e, dd);
      const ld = "GET",
        pd = "POST";
      async function md({
        bearerToken: e,
        clientName: t,
        environment: a,
        method: r,
        urlPath: n,
        urlSearchParams: i,
        requestData: o,
        requestDataSchema: s,
        responseDataSchema: c,
        apiKey: d,
        catchResponseStatus: u,
        catchResponse: l,
      }) {
        let p;
        const m = Kc({ requestData: o, requestDataSchema: s }),
          h = i ? `?${i}` : "",
          f = `${((e, t, a = "multi1") =>
            `https://api.${a}.enterprise${
              "STAGING" === t ? "-staging" : ""
            }.taxbit.com/v1/${e}`)(n, a, t)}${h}`;
        try {
          p = await fetch(f, {
            method: r,
            headers: Fc({ bearerToken: e, apiKey: d }),
            body: m,
          });
        } catch (g) {
          throw (
            (console.error(g),
            new Error("Unable to establish connection to server."))
          );
        }
        if (p.status === u && l) return l;
        if (!p.ok) {
          const e = await Hc(p);
          throw (console.error(e), new Error(e));
        }
        return await (async function ({ response: e, responseDataSchema: t }) {
          if (!t) return;
          let a;
          try {
            a = await e.json();
          } catch (n) {
            console.error(n);
            const a = await Hc(e);
            throw new Error(a);
          }
          const r = "object" == typeof a ? ud(a) : a;
          return $c(r, t, "Response data did not match expected schema.");
        })({ response: p, responseDataSchema: c });
      }
      var hd, fd;
      let gd =
        ((fd = class {
          constructor(e) {
            d(this, hd, void 0),
              o(this, "taxDocumentation", {
                post: (e) => {
                  if ("W-9" === e.documentType)
                    return md({
                      ...c(this, hd),
                      method: pd,
                      urlPath: "tax-documentation",
                      requestData: Ns.snakeCaseProperties(e),
                      requestDataSchema: It.signedW9TaxDocumentationSchema,
                    });
                  if ("W-8BEN" === e.documentType)
                    return md({
                      ...c(this, hd),
                      method: pd,
                      urlPath: "tax-documentation",
                      requestData: Ns.snakeCaseProperties(e),
                      requestDataSchema: It.signedW8BenTaxDocumentationSchema,
                    });
                  if ("W-8BEN-E" === e.documentType)
                    return md({
                      ...c(this, hd),
                      method: pd,
                      urlPath: "tax-documentation",
                      requestData: Ns.snakeCaseProperties(e),
                      requestDataSchema: It.signedW8BenETaxDocumentationSchema,
                    });
                  throw new Error("Unknown Document Type");
                },
                forms: {
                  get: ({ documentId: e }) =>
                    md({
                      ...c(this, hd),
                      method: ld,
                      urlPath: `tax-documentation/document/${e}`,
                      responseDataSchema: Ec,
                    }),
                  post: () =>
                    md({
                      ...c(this, hd),
                      method: pd,
                      urlPath: "tax-documentation/document",
                      responseDataSchema: Oc,
                    }),
                },
                summary: {
                  get: () =>
                    md({
                      ...c(this, hd),
                      method: ld,
                      urlPath: "tax-documentation/summary",
                      responseDataSchema: Vc,
                      catchResponseStatus: 404,
                      catchResponse: { status: Pc.Undocumented },
                    }),
                },
              }),
              u(this, hd, bt.parse(e));
          }
        }),
        (hd = new WeakMap()),
        fd);
      var yd = {},
        vd = {},
        _d = {};
      !(function (e) {
        var t;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ErrorMessages = void 0),
          ((t = e.ErrorMessages || (e.ErrorMessages = {})).IsIncorrect =
            "Incorrect"),
          (t.IsInvalid = "Invalid"),
          (t.IsMissing = "Missing"),
          (t.IsNotAllowed = "Not allowed"),
          (t.IsRequired = "Required"),
          (t.IsWrongType = "Wrong type"),
          (t.IsWrongCombination = "Wrong combination");
      })(_d),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }), a(_d, e);
        })(vd);
      var Sd = {},
        bd = {},
        xd = {},
        Td = {};
      Object.defineProperty(Td, "__esModule", { value: !0 }),
        (Td.convertNull = void 0);
      Td.convertNull = (e) => (null === e ? void 0 : e);
      var Md = {};
      Object.defineProperty(Md, "__esModule", { value: !0 }),
        (Md.expectFail = void 0);
      Md.expectFail = (e, t, a) => {
        var r;
        if ((expect(e.success).toBe(!1), !e.success)) {
          const n = null == (r = e.error) ? void 0 : r.issues;
          expect(n.length).toBeGreaterThan(0),
            n.forEach((e, r) => {
              expect(e.path).toStrictEqual(
                "object" == typeof t[r]
                  ? t[r]
                  : "string" == typeof t[r]
                  ? [t[r]]
                  : []
              ),
                expect(e.message).toBe(a[r]);
            });
        }
      };
      var Od = {};
      Object.defineProperty(Od, "__esModule", { value: !0 }),
        (Od.getCustomErrorMap = void 0);
      const Cd = Lt,
        Ed = vd;
      Od.getCustomErrorMap = (e, t) => {
        switch (e.code) {
          case Cd.z.ZodIssueCode.invalid_type:
            return {
              message:
                "undefined" === e.received || "null" === e.received
                  ? Ed.ErrorMessages.IsMissing
                  : Ed.ErrorMessages.IsWrongType,
            };
          case Cd.z.ZodIssueCode.invalid_enum_value:
            return {
              message:
                void 0 === e.received || null === e.received
                  ? Ed.ErrorMessages.IsMissing
                  : Ed.ErrorMessages.IsInvalid,
            };
          case Cd.z.ZodIssueCode.invalid_literal:
          case Cd.z.ZodIssueCode.too_small:
          case Cd.z.ZodIssueCode.too_big:
            return { message: Ed.ErrorMessages.IsInvalid };
          default:
            return { message: t.defaultError };
        }
      };
      var wd = {},
        Pd =
          (Et && Et.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(wd, "__esModule", { value: !0 }),
        (wd.snakeCaseString = wd.snakeCaseProperties = void 0);
      const Id = Pd(pa),
        jd = { parsingOptions: { splitRegexp: /([a-z])([A-Z0-9])/g } };
      wd.snakeCaseProperties = (e) => (0, Id.default)(e, jd);
      wd.snakeCaseString = (e) =>
        e.replace(/([A-Z0-9])/g, (e) => "_" + e.toLowerCase());
      var Dd = {};
      !(function (e) {
        function t(a) {
          return Array.isArray(a)
            ? a.map(t)
            : null !== a && "object" == typeof a
            ? Object.entries(a).reduce(
                (a, [r, n]) => ((a[(0, e.camelCaseString)(r)] = t(n)), a),
                {}
              )
            : a;
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.camelCaseArray =
            e.camelCaseString =
            e.camelCaseProperties =
              void 0);
        e.camelCaseProperties = (e) => t(e);
        e.camelCaseString = (e) =>
          e.replace(/_([a-zA-Z0-9])/g, (e, t) => t.toUpperCase());
        e.camelCaseArray = (t) =>
          t.map((t) => ("string" == typeof t ? (0, e.camelCaseString)(t) : t));
      })(Dd),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Td, e),
            a(Md, e),
            a(Od, e),
            a(wd, e),
            a(Dd, e);
        })(xd),
        Object.defineProperty(bd, "__esModule", { value: !0 }),
        (bd.disallowedStringSchema = void 0);
      const Nd = Lt,
        Ad = vd,
        kd = xd;
      bd.disallowedStringSchema = Nd.z
        .string({ invalid_type_error: Ad.ErrorMessages.IsWrongType })
        .trim()
        .max(0, Ad.ErrorMessages.IsNotAllowed)
        .optional()
        .nullable()
        .transform(kd.convertNull)
        .describe("disallowedStringSchema");
      var Bd = {};
      Object.defineProperty(Bd, "__esModule", { value: !0 }),
        (Bd.optionalBooleanSchema = void 0);
      const Zd = Lt,
        Rd = xd;
      Bd.optionalBooleanSchema = Zd.z
        .boolean({ errorMap: Rd.getCustomErrorMap })
        .nullish()
        .transform(Rd.convertNull)
        .describe("optionalBooleanSchema");
      var Wd = {};
      Object.defineProperty(Wd, "__esModule", { value: !0 }),
        (Wd.optionalStringSchema = void 0);
      const zd = Lt,
        Ld = xd,
        qd = Td;
      Wd.optionalStringSchema = zd.z
        .string({ errorMap: Ld.getCustomErrorMap })
        .trim()
        .nullish()
        .transform(qd.convertNull)
        .describe("optionalStringSchema");
      var Ud = {};
      Object.defineProperty(Ud, "__esModule", { value: !0 }),
        (Ud.requiredStringSchema = void 0);
      const Vd = Lt,
        Fd = vd;
      Ud.requiredStringSchema = Vd.z
        .string({
          invalid_type_error: Fd.ErrorMessages.IsWrongType,
          required_error: Fd.ErrorMessages.IsMissing,
        })
        .trim()
        .min(1, Fd.ErrorMessages.IsRequired)
        .describe("requiredStringSchema");
      var $d = {};
      Object.defineProperty($d, "__esModule", { value: !0 }),
        ($d.requiredTrueSchema = void 0);
      const Gd = Lt,
        Kd = vd,
        Hd = xd;
      $d.requiredTrueSchema = Gd.z
        .boolean({ errorMap: Hd.getCustomErrorMap })
        .refine((e) => !0 === e, { message: Kd.ErrorMessages.IsInvalid })
        .describe("requiredTrueSchema");
      var Yd = {},
        Jd = {};
      Object.defineProperty(Jd, "__esModule", { value: !0 }),
        (Jd.requiredRefinement = void 0);
      const Xd = vd;
      Jd.requiredRefinement = (e, t = () => !0) => [
        (a) => !(t(a) && !a[e]),
        { message: Xd.ErrorMessages.IsRequired, path: [e] },
      ];
      var Qd = {};
      Object.defineProperty(Qd, "__esModule", { value: !0 }),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(Jd, e),
            a(Qd, e);
        })(Yd);
      var eu = {};
      Object.defineProperty(eu, "__esModule", { value: !0 }),
        (eu.optionalUndefinedSchema = void 0);
      const tu = Lt,
        au = vd;
      eu.optionalUndefinedSchema = tu.z
        .preprocess((e) => ("" === e ? null : e), tu.z.any())
        .nullish()
        .refine((e) => null == e, { message: au.ErrorMessages.IsInvalid })
        .describe("optionalUndefinedSchema");
      var ru = {};
      Object.defineProperty(ru, "__esModule", { value: !0 }),
        (ru.requiredBooleanSchema = void 0);
      const nu = Lt,
        iu = xd;
      ru.requiredBooleanSchema = nu.z
        .boolean({ errorMap: iu.getCustomErrorMap })
        .describe("requiredBooleanSchema");
      var ou = {};
      Object.defineProperty(ou, "__esModule", { value: !0 }),
        (ou.requiredStringSchemaWithMaxLength = void 0);
      const su = vd,
        cu = Ud;
      var du, uu, lu, pu, mu;
      (ou.requiredStringSchemaWithMaxLength = cu.requiredStringSchema
        .max(22, su.ErrorMessages.IsNotAllowed)
        .describe("requiredStringSchemaWithMaxLength")),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(bd, e),
            a(Bd, e),
            a(Wd, e),
            a(Ud, e),
            a($d, e),
            a(Yd, e),
            a(eu, e),
            a(ru, e),
            a(ou, e);
        })(Sd),
        (function (e) {
          var t =
              (Et && Et.__createBinding) ||
              (Object.create
                ? function (e, t, a, r) {
                    void 0 === r && (r = a);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    (!n ||
                      ("get" in n
                        ? !t.__esModule
                        : n.writable || n.configurable)) &&
                      (n = {
                        enumerable: !0,
                        get: function () {
                          return t[a];
                        },
                      }),
                      Object.defineProperty(e, r, n);
                  }
                : function (e, t, a, r) {
                    void 0 === r && (r = a), (e[r] = t[a]);
                  }),
            a =
              (Et && Et.__exportStar) ||
              function (e, a) {
                for (var r in e)
                  "default" !== r &&
                    !Object.prototype.hasOwnProperty.call(a, r) &&
                    t(a, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            a(vd, e),
            a(Sd, e),
            a(xd, e);
        })(yd),
        (function (e) {
          (e.Call = "call"),
            (e.Reply = "reply"),
            (e.Syn = "syn"),
            (e.SynAck = "synAck"),
            (e.Ack = "ack");
        })(du || (du = {})),
        (function (e) {
          (e.Fulfilled = "fulfilled"), (e.Rejected = "rejected");
        })(uu || (uu = {})),
        (function (e) {
          (e.ConnectionDestroyed = "ConnectionDestroyed"),
            (e.ConnectionTimeout = "ConnectionTimeout"),
            (e.NoIframeSrc = "NoIframeSrc");
        })(lu || (lu = {})),
        (function (e) {
          e.DataCloneError = "DataCloneError";
        })(pu || (pu = {})),
        (function (e) {
          e.Message = "message";
        })(mu || (mu = {}));
      const hu = { "http:": "80", "https:": "443" },
        fu = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/,
        gu = ["file:", "data:"],
        yu = ({ name: e, message: t, stack: a }) => ({
          name: e,
          message: t,
          stack: a,
        });
      let vu = 0;
      const _u = (e) => (e ? e.split(".") : []),
        Su = (e, t, a) => {
          const r = _u(t);
          return (
            r.reduce(
              (e, t, n) => (
                typeof e[t] > "u" && (e[t] = {}),
                n === r.length - 1 && (e[t] = a),
                e[t]
              ),
              e
            ),
            e
          );
        },
        bu = (e, t) => {
          const a = {};
          return (
            Object.keys(e).forEach((r) => {
              const n = e[r],
                i = ((e, t) => {
                  const a = _u(t || "");
                  return a.push(e), ((e) => e.join("."))(a);
                })(r, t);
              "object" == typeof n && Object.assign(a, bu(n, i)),
                "function" == typeof n && (a[i] = n);
            }),
            a
          );
        },
        xu = (e, t, a, r, n) => {
          const {
            localName: i,
            local: o,
            remote: s,
            originForSending: c,
            originForReceiving: d,
          } = t;
          let u = !1;
          n(`${i}: Connecting call sender`);
          const l =
              (e) =>
              (...t) => {
                let a;
                n(`${i}: Sending ${e}() call`);
                try {
                  s.closed && (a = !0);
                } catch {
                  a = !0;
                }
                if ((a && r(), u)) {
                  const t = new Error(
                    `Unable to send ${e}() call due to destroyed connection`
                  );
                  throw ((t.code = lu.ConnectionDestroyed), t);
                }
                return new Promise((a, r) => {
                  const u = ++vu,
                    l = (t) => {
                      if (
                        t.source !== s ||
                        t.data.penpal !== du.Reply ||
                        t.data.id !== u
                      )
                        return;
                      if ("*" !== d && t.origin !== d)
                        return void n(
                          `${i} received message from origin ${t.origin} which did not match expected origin ${d}`
                        );
                      const c = t.data;
                      n(`${i}: Received ${e}() reply`),
                        o.removeEventListener(mu.Message, l);
                      let p = c.returnValue;
                      c.returnValueIsError &&
                        (p = ((e) => {
                          const t = new Error();
                          return (
                            Object.keys(e).forEach((a) => (t[a] = e[a])), t
                          );
                        })(p)),
                        (c.resolution === uu.Fulfilled ? a : r)(p);
                    };
                  o.addEventListener(mu.Message, l);
                  const p = { penpal: du.Call, id: u, methodName: e, args: t };
                  s.postMessage(p, c);
                });
              },
            p = a.reduce((e, t) => ((e[t] = l(t)), e), {});
          return (
            Object.assign(
              e,
              ((e) => {
                const t = {};
                for (const a in e) Su(t, a, e[a]);
                return t;
              })(p)
            ),
            () => {
              u = !0;
            }
          );
        },
        Tu = (e, t, a, r, n) => {
          const { destroy: i, onDestroy: o } = r;
          let s, c;
          const d = {};
          return (r) => {
            if ("*" !== t && r.origin !== t)
              return void n(
                `Parent: Handshake - Received ACK message from origin ${r.origin} which did not match expected origin ${t}`
              );
            n("Parent: Handshake - Received ACK");
            const u = {
              localName: "Parent",
              local: window,
              remote: r.source,
              originForSending: a,
              originForReceiving: t,
            };
            s && s(),
              (s = ((e, t, a) => {
                const {
                  localName: r,
                  local: n,
                  remote: i,
                  originForSending: o,
                  originForReceiving: s,
                } = e;
                let c = !1;
                const d = (e) => {
                  if (e.source !== i || e.data.penpal !== du.Call) return;
                  if ("*" !== s && e.origin !== s)
                    return void a(
                      `${r} received message from origin ${e.origin} which did not match expected origin ${s}`
                    );
                  const n = e.data,
                    { methodName: d, args: u, id: l } = n;
                  a(`${r}: Received ${d}() call`);
                  const p = (e) => (t) => {
                    if ((a(`${r}: Sending ${d}() reply`), c))
                      return void a(
                        `${r}: Unable to send ${d}() reply due to destroyed connection`
                      );
                    const n = {
                      penpal: du.Reply,
                      id: l,
                      resolution: e,
                      returnValue: t,
                    };
                    e === uu.Rejected &&
                      t instanceof Error &&
                      ((n.returnValue = yu(t)), (n.returnValueIsError = !0));
                    try {
                      i.postMessage(n, o);
                    } catch (s) {
                      if (s.name === pu.DataCloneError) {
                        const e = {
                          penpal: du.Reply,
                          id: l,
                          resolution: uu.Rejected,
                          returnValue: yu(s),
                          returnValueIsError: !0,
                        };
                        i.postMessage(e, o);
                      }
                      throw s;
                    }
                  };
                  new Promise((e) => e(t[d].apply(t, u))).then(
                    p(uu.Fulfilled),
                    p(uu.Rejected)
                  );
                };
                return (
                  n.addEventListener(mu.Message, d),
                  () => {
                    (c = !0), n.removeEventListener(mu.Message, d);
                  }
                );
              })(u, e, n)),
              o(s),
              c &&
                c.forEach((e) => {
                  delete d[e];
                }),
              (c = r.data.methodNames);
            const l = xu(d, u, c, i, n);
            return o(l), d;
          };
        },
        Mu = (e) => {
          let {
            iframe: t,
            methods: a = {},
            childOrigin: r,
            timeout: n,
            debug: i = !1,
          } = e;
          const o = (
              (e) =>
              (...t) => {
                e && console.log("[Penpal]", ...t);
              }
            )(i),
            s = ((e, t) => {
              const a = [];
              let r = !1;
              return {
                destroy(n) {
                  r ||
                    ((r = !0),
                    t(`${e}: Destroying connection`),
                    a.forEach((e) => {
                      e(n);
                    }));
                },
                onDestroy(e) {
                  r ? e() : a.push(e);
                },
              };
            })("Parent", o),
            { onDestroy: c, destroy: d } = s;
          r ||
            (((e) => {
              if (!e.src && !e.srcdoc) {
                const e = new Error(
                  "Iframe must have src or srcdoc property defined."
                );
                throw ((e.code = lu.NoIframeSrc), e);
              }
            })(t),
            (r = ((e) => {
              if (e && gu.find((t) => e.startsWith(t))) return "null";
              const t = document.location,
                a = fu.exec(e);
              let r, n, i;
              return (
                a
                  ? ((r = a[1] ? a[1] : t.protocol), (n = a[2]), (i = a[4]))
                  : ((r = t.protocol), (n = t.hostname), (i = t.port)),
                `${r}//${n}${i && i !== hu[r] ? `:${i}` : ""}`
              );
            })(t.src)));
          const u = "null" === r ? "*" : r,
            l = bu(a),
            p = ((e, t, a, r) => (n) => {
              if (!n.source) return;
              if ("*" !== a && n.origin !== a)
                return void e(
                  `Parent: Handshake - Received SYN message from origin ${n.origin} which did not match expected origin ${a}`
                );
              e("Parent: Handshake - Received SYN, responding with SYN-ACK");
              const i = { penpal: du.SynAck, methodNames: Object.keys(t) };
              n.source.postMessage(i, r);
            })(o, l, r, u),
            m = Tu(l, r, u, s, o);
          return {
            promise: new Promise((e, a) => {
              const r = ((e, t) => {
                  let a;
                  return (
                    void 0 !== e &&
                      (a = window.setTimeout(() => {
                        const a = new Error(
                          `Connection timed out after ${e}ms`
                        );
                        (a.code = lu.ConnectionTimeout), t(a);
                      }, e)),
                    () => {
                      clearTimeout(a);
                    }
                  );
                })(n, d),
                i = (a) => {
                  if (a.source === t.contentWindow && a.data) {
                    if (a.data.penpal === du.Syn) return void p(a);
                    if (a.data.penpal === du.Ack) {
                      const t = m(a);
                      return void (t && (r(), e(t)));
                    }
                  }
                };
              window.addEventListener(mu.Message, i),
                o("Parent: Awaiting handshake"),
                ((e, t) => {
                  const { destroy: a, onDestroy: r } = t,
                    n = setInterval(() => {
                      e.isConnected || (clearInterval(n), a());
                    }, 6e4);
                  r(() => {
                    clearInterval(n);
                  });
                })(t, s),
                c((e) => {
                  window.removeEventListener(mu.Message, i), e && a(e);
                });
            }),
            destroy() {
              d();
            },
          };
        },
        Ou = (e) => (t) => {
          e.style.height = `${t}px`;
        },
        Cu = new WeakMap(),
        Eu = (e, t) => {
          const a = ((e, t) => {
              var a;
              const r = Cu.get(e);
              null == (a = null == r ? void 0 : r.parentNode) ||
                a.removeChild(r);
              const n = document.createElement("iframe");
              return (
                (n.src = t),
                (n.style.border = "0"),
                (n.style.width = "100%"),
                (n.style.height = "600px"),
                (n.style.overflowY = "hidden"),
                e.append(n),
                Cu.set(e, n),
                n
              );
            })(
              e,
              "https://cdn.taxbit.com/taxbit-browser/v2/ui/tax-documentation/index.html"
            ),
            r = (() => {
              let e, t;
              return {
                promise: new Promise((a, r) => {
                  (e = a), (t = r);
                }),
                resolve: e,
                reject: t,
              };
            })(),
            n = {
              reportFormCompletionSuccess: r.resolve,
              reportFormCompletionFailure: r.reject,
              resizeHeight: Ou(a),
            };
          return Mu({ iframe: a, methods: n, timeout: 15e3 })
            .promise.then((e) => t(e))
            .catch((e) => {
              throw (
                (console.error(e),
                new Error("Unable to establish connection with iframe."))
              );
            })
            .then(() => ({ formCompletion: r.promise }));
        },
        wu = vt.object({ taxCenterUrl: vt.string() }).strict();
      class Pu extends Error {
        constructor(e) {
          super("ValidationError"),
            o(this, "issues"),
            (this.name = "ValidationError"),
            (this.issues = e.issues);
        }
      }
      const Iu = (e) => {
        try {
          return It.validateTaxDocumentation(e);
        } catch (t) {
          throw t instanceof gr ? new Pu(t) : t;
        }
      };
      let ju = !1;
      var Du;
      class Nu {
        constructor(e) {
          d(this, Du, void 0),
            o(this, "rest"),
            o(this, "taxDocumentation", {
              getSummary: async () => {
                const e = await this.rest.taxDocumentation.summary.get();
                return yd.camelCaseProperties(e);
              },
              validate: Iu,
            }),
            o(this, "ui", {
              taxDocumentation: {
                certify: ({ hostElement: e, data: t, editUrl: a }) => {
                  let r;
                  try {
                    r = It.validateTaxDocumentation(t);
                  } catch (n) {
                    throw n instanceof It.ValidationError ? new Pu(n) : n;
                  }
                  return Eu(e, (e) =>
                    e.loadCertifyForm({ ...c(this, Du), data: r, editUrl: a })
                  );
                },
                collect: ({ hostElement: e, data: t }) => {
                  let a = {};
                  return (
                    t && null != t && t.documentType
                      ? (a = It.cleanTaxDocumentation(t))
                      : t && (a = t),
                    Eu(e, (e) => e.loadCreateForm({ ...c(this, Du), data: a }))
                  );
                },
              },
              taxCenter: {
                openTaxCenter: (e) => {
                  const { taxCenterUrl: t } = wu.parse(e);
                  return ((e, t) => {
                    const a = window.open(e);
                    if (!a) throw new Error(`Failed to open window at ${e}`);
                    ju ||
                      (window.addEventListener("message", (r) => {
                        if (r.origin === e && "LOADED" === r.data.type) {
                          const r = { type: "INITIALIZE", token: t };
                          a.postMessage(r, e);
                        }
                      }),
                      (ju = !0));
                  })(t, c(this, Du).bearerToken);
                },
              },
            }),
            u(this, Du, bt.parse(e)),
            (this.rest = new gd(c(this, Du)));
        }
      }
      (Du = new WeakMap()), o(Nu, "taxDocumentation", { validate: Iu });
    },
  },
]);
