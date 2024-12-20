(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [59154],
  {
    299840: function (t, e, r) {
      "use strict";
      const i = e;
      (i.bignum = r(763785)),
        (i.define = r(79234).define),
        (i.base = r(429913)),
        (i.constants = r(157624)),
        (i.decoders = r(150375)),
        (i.encoders = r(443886));
    },
    79234: function (t, e, r) {
      "use strict";
      const i = r(443886),
        n = r(150375),
        o = r(270087);
      function a(t, e) {
        (this.name = t),
          (this.body = e),
          (this.decoders = {}),
          (this.encoders = {});
      }
      (e.define = function (t, e) {
        return new a(t, e);
      }),
        (a.prototype._createNamed = function (t) {
          const e = this.name;
          function r(t) {
            this._initNamed(t, e);
          }
          return (
            o(r, t),
            (r.prototype._initNamed = function (e, r) {
              t.call(this, e, r);
            }),
            new r(this)
          );
        }),
        (a.prototype._getDecoder = function (t) {
          return (
            (t = t || "der"),
            this.decoders.hasOwnProperty(t) ||
              (this.decoders[t] = this._createNamed(n[t])),
            this.decoders[t]
          );
        }),
        (a.prototype.decode = function (t, e, r) {
          return this._getDecoder(e).decode(t, r);
        }),
        (a.prototype._getEncoder = function (t) {
          return (
            (t = t || "der"),
            this.encoders.hasOwnProperty(t) ||
              (this.encoders[t] = this._createNamed(i[t])),
            this.encoders[t]
          );
        }),
        (a.prototype.encode = function (t, e, r) {
          return this._getEncoder(e).encode(t, r);
        });
    },
    333370: function (t, e, r) {
      "use strict";
      const i = r(270087),
        n = r(297298).b,
        o = r(721788).Buffer;
      function a(t, e) {
        n.call(this, e),
          o.isBuffer(t)
            ? ((this.base = t), (this.offset = 0), (this.length = t.length))
            : this.error("Input not Buffer");
      }
      function s(t, e) {
        if (Array.isArray(t))
          (this.length = 0),
            (this.value = t.map(function (t) {
              return (
                s.isEncoderBuffer(t) || (t = new s(t, e)),
                (this.length += t.length),
                t
              );
            }, this));
        else if ("number" === typeof t) {
          if (!(0 <= t && t <= 255))
            return e.error("non-byte EncoderBuffer value");
          (this.value = t), (this.length = 1);
        } else if ("string" === typeof t)
          (this.value = t), (this.length = o.byteLength(t));
        else {
          if (!o.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
          (this.value = t), (this.length = t.length);
        }
      }
      i(a, n),
        (e.C = a),
        (a.isDecoderBuffer = function (t) {
          if (t instanceof a) return !0;
          return (
            "object" === typeof t &&
            o.isBuffer(t.base) &&
            "DecoderBuffer" === t.constructor.name &&
            "number" === typeof t.offset &&
            "number" === typeof t.length &&
            "function" === typeof t.save &&
            "function" === typeof t.restore &&
            "function" === typeof t.isEmpty &&
            "function" === typeof t.readUInt8 &&
            "function" === typeof t.skip &&
            "function" === typeof t.raw
          );
        }),
        (a.prototype.save = function () {
          return { offset: this.offset, reporter: n.prototype.save.call(this) };
        }),
        (a.prototype.restore = function (t) {
          const e = new a(this.base);
          return (
            (e.offset = t.offset),
            (e.length = this.offset),
            (this.offset = t.offset),
            n.prototype.restore.call(this, t.reporter),
            e
          );
        }),
        (a.prototype.isEmpty = function () {
          return this.offset === this.length;
        }),
        (a.prototype.readUInt8 = function (t) {
          return this.offset + 1 <= this.length
            ? this.base.readUInt8(this.offset++, !0)
            : this.error(t || "DecoderBuffer overrun");
        }),
        (a.prototype.skip = function (t, e) {
          if (!(this.offset + t <= this.length))
            return this.error(e || "DecoderBuffer overrun");
          const r = new a(this.base);
          return (
            (r._reporterState = this._reporterState),
            (r.offset = this.offset),
            (r.length = this.offset + t),
            (this.offset += t),
            r
          );
        }),
        (a.prototype.raw = function (t) {
          return this.base.slice(t ? t.offset : this.offset, this.length);
        }),
        (e.R = s),
        (s.isEncoderBuffer = function (t) {
          if (t instanceof s) return !0;
          return (
            "object" === typeof t &&
            "EncoderBuffer" === t.constructor.name &&
            "number" === typeof t.length &&
            "function" === typeof t.join
          );
        }),
        (s.prototype.join = function (t, e) {
          return (
            t || (t = o.alloc(this.length)),
            e || (e = 0),
            0 === this.length ||
              (Array.isArray(this.value)
                ? this.value.forEach(function (r) {
                    r.join(t, e), (e += r.length);
                  })
                : ("number" === typeof this.value
                    ? (t[e] = this.value)
                    : "string" === typeof this.value
                    ? t.write(this.value, e)
                    : o.isBuffer(this.value) && this.value.copy(t, e),
                  (e += this.length))),
            t
          );
        });
    },
    429913: function (t, e, r) {
      "use strict";
      const i = e;
      (i.Reporter = r(297298).b),
        (i.DecoderBuffer = r(333370).C),
        (i.EncoderBuffer = r(333370).R),
        (i.Node = r(878718));
    },
    878718: function (t, e, r) {
      "use strict";
      const i = r(297298).b,
        n = r(333370).R,
        o = r(333370).C,
        a = r(677859),
        s = [
          "seq",
          "seqof",
          "set",
          "setof",
          "objid",
          "bool",
          "gentime",
          "utctime",
          "null_",
          "enum",
          "int",
          "objDesc",
          "bitstr",
          "bmpstr",
          "charstr",
          "genstr",
          "graphstr",
          "ia5str",
          "iso646str",
          "numstr",
          "octstr",
          "printstr",
          "t61str",
          "unistr",
          "utf8str",
          "videostr",
        ],
        f = [
          "key",
          "obj",
          "use",
          "optional",
          "explicit",
          "implicit",
          "def",
          "choice",
          "any",
          "contains",
        ].concat(s);
      function h(t, e, r) {
        const i = {};
        (this._baseState = i),
          (i.name = r),
          (i.enc = t),
          (i.parent = e || null),
          (i.children = null),
          (i.tag = null),
          (i.args = null),
          (i.reverseArgs = null),
          (i.choice = null),
          (i.optional = !1),
          (i.any = !1),
          (i.obj = !1),
          (i.use = null),
          (i.useDecoder = null),
          (i.key = null),
          (i.default = null),
          (i.explicit = null),
          (i.implicit = null),
          (i.contains = null),
          i.parent || ((i.children = []), this._wrap());
      }
      t.exports = h;
      const u = [
        "enc",
        "parent",
        "children",
        "tag",
        "args",
        "reverseArgs",
        "choice",
        "optional",
        "any",
        "obj",
        "use",
        "alteredUse",
        "key",
        "default",
        "explicit",
        "implicit",
        "contains",
      ];
      (h.prototype.clone = function () {
        const t = this._baseState,
          e = {};
        u.forEach(function (r) {
          e[r] = t[r];
        });
        const r = new this.constructor(e.parent);
        return (r._baseState = e), r;
      }),
        (h.prototype._wrap = function () {
          const t = this._baseState;
          f.forEach(function (e) {
            this[e] = function () {
              const r = new this.constructor(this);
              return t.children.push(r), r[e].apply(r, arguments);
            };
          }, this);
        }),
        (h.prototype._init = function (t) {
          const e = this._baseState;
          a(null === e.parent),
            t.call(this),
            (e.children = e.children.filter(function (t) {
              return t._baseState.parent === this;
            }, this)),
            a.equal(e.children.length, 1, "Root node can have only one child");
        }),
        (h.prototype._useArgs = function (t) {
          const e = this._baseState,
            r = t.filter(function (t) {
              return t instanceof this.constructor;
            }, this);
          (t = t.filter(function (t) {
            return !(t instanceof this.constructor);
          }, this)),
            0 !== r.length &&
              (a(null === e.children),
              (e.children = r),
              r.forEach(function (t) {
                t._baseState.parent = this;
              }, this)),
            0 !== t.length &&
              (a(null === e.args),
              (e.args = t),
              (e.reverseArgs = t.map(function (t) {
                if ("object" !== typeof t || t.constructor !== Object) return t;
                const e = {};
                return (
                  Object.keys(t).forEach(function (r) {
                    r == (0 | r) && (r |= 0);
                    const i = t[r];
                    e[i] = r;
                  }),
                  e
                );
              })));
        }),
        [
          "_peekTag",
          "_decodeTag",
          "_use",
          "_decodeStr",
          "_decodeObjid",
          "_decodeTime",
          "_decodeNull",
          "_decodeInt",
          "_decodeBool",
          "_decodeList",
          "_encodeComposite",
          "_encodeStr",
          "_encodeObjid",
          "_encodeTime",
          "_encodeNull",
          "_encodeInt",
          "_encodeBool",
        ].forEach(function (t) {
          h.prototype[t] = function () {
            const e = this._baseState;
            throw new Error(t + " not implemented for encoding: " + e.enc);
          };
        }),
        s.forEach(function (t) {
          h.prototype[t] = function () {
            const e = this._baseState,
              r = Array.prototype.slice.call(arguments);
            return a(null === e.tag), (e.tag = t), this._useArgs(r), this;
          };
        }),
        (h.prototype.use = function (t) {
          a(t);
          const e = this._baseState;
          return a(null === e.use), (e.use = t), this;
        }),
        (h.prototype.optional = function () {
          return (this._baseState.optional = !0), this;
        }),
        (h.prototype.def = function (t) {
          const e = this._baseState;
          return (
            a(null === e.default), (e.default = t), (e.optional = !0), this
          );
        }),
        (h.prototype.explicit = function (t) {
          const e = this._baseState;
          return (
            a(null === e.explicit && null === e.implicit),
            (e.explicit = t),
            this
          );
        }),
        (h.prototype.implicit = function (t) {
          const e = this._baseState;
          return (
            a(null === e.explicit && null === e.implicit),
            (e.implicit = t),
            this
          );
        }),
        (h.prototype.obj = function () {
          const t = this._baseState,
            e = Array.prototype.slice.call(arguments);
          return (t.obj = !0), 0 !== e.length && this._useArgs(e), this;
        }),
        (h.prototype.key = function (t) {
          const e = this._baseState;
          return a(null === e.key), (e.key = t), this;
        }),
        (h.prototype.any = function () {
          return (this._baseState.any = !0), this;
        }),
        (h.prototype.choice = function (t) {
          const e = this._baseState;
          return (
            a(null === e.choice),
            (e.choice = t),
            this._useArgs(
              Object.keys(t).map(function (e) {
                return t[e];
              })
            ),
            this
          );
        }),
        (h.prototype.contains = function (t) {
          const e = this._baseState;
          return a(null === e.use), (e.contains = t), this;
        }),
        (h.prototype._decode = function (t, e) {
          const r = this._baseState;
          if (null === r.parent)
            return t.wrapResult(r.children[0]._decode(t, e));
          let i,
            n = r.default,
            a = !0,
            s = null;
          if ((null !== r.key && (s = t.enterKey(r.key)), r.optional)) {
            let i = null;
            if (
              (null !== r.explicit
                ? (i = r.explicit)
                : null !== r.implicit
                ? (i = r.implicit)
                : null !== r.tag && (i = r.tag),
              null !== i || r.any)
            ) {
              if (((a = this._peekTag(t, i, r.any)), t.isError(a))) return a;
            } else {
              const i = t.save();
              try {
                null === r.choice
                  ? this._decodeGeneric(r.tag, t, e)
                  : this._decodeChoice(t, e),
                  (a = !0);
              } catch (f) {
                a = !1;
              }
              t.restore(i);
            }
          }
          if ((r.obj && a && (i = t.enterObject()), a)) {
            if (null !== r.explicit) {
              const e = this._decodeTag(t, r.explicit);
              if (t.isError(e)) return e;
              t = e;
            }
            const i = t.offset;
            if (null === r.use && null === r.choice) {
              let e;
              r.any && (e = t.save());
              const i = this._decodeTag(
                t,
                null !== r.implicit ? r.implicit : r.tag,
                r.any
              );
              if (t.isError(i)) return i;
              r.any ? (n = t.raw(e)) : (t = i);
            }
            if (
              (e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), i, t.length, "tagged"),
              e &&
                e.track &&
                null !== r.tag &&
                e.track(t.path(), t.offset, t.length, "content"),
              r.any ||
                (n =
                  null === r.choice
                    ? this._decodeGeneric(r.tag, t, e)
                    : this._decodeChoice(t, e)),
              t.isError(n))
            )
              return n;
            if (
              (r.any ||
                null !== r.choice ||
                null === r.children ||
                r.children.forEach(function (r) {
                  r._decode(t, e);
                }),
              r.contains && ("octstr" === r.tag || "bitstr" === r.tag))
            ) {
              const i = new o(n);
              n = this._getUse(r.contains, t._reporterState.obj)._decode(i, e);
            }
          }
          return (
            r.obj && a && (n = t.leaveObject(i)),
            null === r.key || (null === n && !0 !== a)
              ? null !== s && t.exitKey(s)
              : t.leaveKey(s, r.key, n),
            n
          );
        }),
        (h.prototype._decodeGeneric = function (t, e, r) {
          const i = this._baseState;
          return "seq" === t || "set" === t
            ? null
            : "seqof" === t || "setof" === t
            ? this._decodeList(e, t, i.args[0], r)
            : /str$/.test(t)
            ? this._decodeStr(e, t, r)
            : "objid" === t && i.args
            ? this._decodeObjid(e, i.args[0], i.args[1], r)
            : "objid" === t
            ? this._decodeObjid(e, null, null, r)
            : "gentime" === t || "utctime" === t
            ? this._decodeTime(e, t, r)
            : "null_" === t
            ? this._decodeNull(e, r)
            : "bool" === t
            ? this._decodeBool(e, r)
            : "objDesc" === t
            ? this._decodeStr(e, t, r)
            : "int" === t || "enum" === t
            ? this._decodeInt(e, i.args && i.args[0], r)
            : null !== i.use
            ? this._getUse(i.use, e._reporterState.obj)._decode(e, r)
            : e.error("unknown tag: " + t);
        }),
        (h.prototype._getUse = function (t, e) {
          const r = this._baseState;
          return (
            (r.useDecoder = this._use(t, e)),
            a(null === r.useDecoder._baseState.parent),
            (r.useDecoder = r.useDecoder._baseState.children[0]),
            r.implicit !== r.useDecoder._baseState.implicit &&
              ((r.useDecoder = r.useDecoder.clone()),
              (r.useDecoder._baseState.implicit = r.implicit)),
            r.useDecoder
          );
        }),
        (h.prototype._decodeChoice = function (t, e) {
          const r = this._baseState;
          let i = null,
            n = !1;
          return (
            Object.keys(r.choice).some(function (o) {
              const a = t.save(),
                s = r.choice[o];
              try {
                const r = s._decode(t, e);
                if (t.isError(r)) return !1;
                (i = { type: o, value: r }), (n = !0);
              } catch (f) {
                return t.restore(a), !1;
              }
              return !0;
            }, this),
            n ? i : t.error("Choice not matched")
          );
        }),
        (h.prototype._createEncoderBuffer = function (t) {
          return new n(t, this.reporter);
        }),
        (h.prototype._encode = function (t, e, r) {
          const i = this._baseState;
          if (null !== i.default && i.default === t) return;
          const n = this._encodeValue(t, e, r);
          return void 0 === n || this._skipDefault(n, e, r) ? void 0 : n;
        }),
        (h.prototype._encodeValue = function (t, e, r) {
          const n = this._baseState;
          if (null === n.parent) return n.children[0]._encode(t, e || new i());
          let o = null;
          if (((this.reporter = e), n.optional && void 0 === t)) {
            if (null === n.default) return;
            t = n.default;
          }
          let a = null,
            s = !1;
          if (n.any) o = this._createEncoderBuffer(t);
          else if (n.choice) o = this._encodeChoice(t, e);
          else if (n.contains)
            (a = this._getUse(n.contains, r)._encode(t, e)), (s = !0);
          else if (n.children)
            (a = n.children
              .map(function (r) {
                if ("null_" === r._baseState.tag) return r._encode(null, e, t);
                if (null === r._baseState.key)
                  return e.error("Child should have a key");
                const i = e.enterKey(r._baseState.key);
                if ("object" !== typeof t)
                  return e.error("Child expected, but input is not object");
                const n = r._encode(t[r._baseState.key], e, t);
                return e.leaveKey(i), n;
              }, this)
              .filter(function (t) {
                return t;
              })),
              (a = this._createEncoderBuffer(a));
          else if ("seqof" === n.tag || "setof" === n.tag) {
            if (!n.args || 1 !== n.args.length)
              return e.error("Too many args for : " + n.tag);
            if (!Array.isArray(t))
              return e.error("seqof/setof, but data is not Array");
            const r = this.clone();
            (r._baseState.implicit = null),
              (a = this._createEncoderBuffer(
                t.map(function (r) {
                  const i = this._baseState;
                  return this._getUse(i.args[0], t)._encode(r, e);
                }, r)
              ));
          } else
            null !== n.use
              ? (o = this._getUse(n.use, r)._encode(t, e))
              : ((a = this._encodePrimitive(n.tag, t)), (s = !0));
          if (!n.any && null === n.choice) {
            const t = null !== n.implicit ? n.implicit : n.tag,
              r = null === n.implicit ? "universal" : "context";
            null === t
              ? null === n.use &&
                e.error("Tag could be omitted only for .use()")
              : null === n.use && (o = this._encodeComposite(t, s, r, a));
          }
          return (
            null !== n.explicit &&
              (o = this._encodeComposite(n.explicit, !1, "context", o)),
            o
          );
        }),
        (h.prototype._encodeChoice = function (t, e) {
          const r = this._baseState,
            i = r.choice[t.type];
          return (
            i ||
              a(
                !1,
                t.type +
                  " not found in " +
                  JSON.stringify(Object.keys(r.choice))
              ),
            i._encode(t.value, e)
          );
        }),
        (h.prototype._encodePrimitive = function (t, e) {
          const r = this._baseState;
          if (/str$/.test(t)) return this._encodeStr(e, t);
          if ("objid" === t && r.args)
            return this._encodeObjid(e, r.reverseArgs[0], r.args[1]);
          if ("objid" === t) return this._encodeObjid(e, null, null);
          if ("gentime" === t || "utctime" === t) return this._encodeTime(e, t);
          if ("null_" === t) return this._encodeNull();
          if ("int" === t || "enum" === t)
            return this._encodeInt(e, r.args && r.reverseArgs[0]);
          if ("bool" === t) return this._encodeBool(e);
          if ("objDesc" === t) return this._encodeStr(e, t);
          throw new Error("Unsupported tag: " + t);
        }),
        (h.prototype._isNumstr = function (t) {
          return /^[0-9 ]*$/.test(t);
        }),
        (h.prototype._isPrintstr = function (t) {
          return /^[A-Za-z0-9 '()+,-./:=?]*$/.test(t);
        });
    },
    297298: function (t, e, r) {
      "use strict";
      const i = r(270087);
      function n(t) {
        this._reporterState = {
          obj: null,
          path: [],
          options: t || {},
          errors: [],
        };
      }
      function o(t, e) {
        (this.path = t), this.rethrow(e);
      }
      (e.b = n),
        (n.prototype.isError = function (t) {
          return t instanceof o;
        }),
        (n.prototype.save = function () {
          const t = this._reporterState;
          return { obj: t.obj, pathLen: t.path.length };
        }),
        (n.prototype.restore = function (t) {
          const e = this._reporterState;
          (e.obj = t.obj), (e.path = e.path.slice(0, t.pathLen));
        }),
        (n.prototype.enterKey = function (t) {
          return this._reporterState.path.push(t);
        }),
        (n.prototype.exitKey = function (t) {
          const e = this._reporterState;
          e.path = e.path.slice(0, t - 1);
        }),
        (n.prototype.leaveKey = function (t, e, r) {
          const i = this._reporterState;
          this.exitKey(t), null !== i.obj && (i.obj[e] = r);
        }),
        (n.prototype.path = function () {
          return this._reporterState.path.join("/");
        }),
        (n.prototype.enterObject = function () {
          const t = this._reporterState,
            e = t.obj;
          return (t.obj = {}), e;
        }),
        (n.prototype.leaveObject = function (t) {
          const e = this._reporterState,
            r = e.obj;
          return (e.obj = t), r;
        }),
        (n.prototype.error = function (t) {
          let e;
          const r = this._reporterState,
            i = t instanceof o;
          if (
            ((e = i
              ? t
              : new o(
                  r.path
                    .map(function (t) {
                      return "[" + JSON.stringify(t) + "]";
                    })
                    .join(""),
                  t.message || t,
                  t.stack
                )),
            !r.options.partial)
          )
            throw e;
          return i || r.errors.push(e), e;
        }),
        (n.prototype.wrapResult = function (t) {
          const e = this._reporterState;
          return e.options.partial
            ? { result: this.isError(t) ? null : t, errors: e.errors }
            : t;
        }),
        i(o, Error),
        (o.prototype.rethrow = function (t) {
          if (
            ((this.message = t + " at: " + (this.path || "(shallow)")),
            Error.captureStackTrace && Error.captureStackTrace(this, o),
            !this.stack)
          )
            try {
              throw new Error(this.message);
            } catch (e) {
              this.stack = e.stack;
            }
          return this;
        });
    },
    960643: function (t, e) {
      "use strict";
      function r(t) {
        const e = {};
        return (
          Object.keys(t).forEach(function (r) {
            (0 | r) == r && (r |= 0);
            const i = t[r];
            e[i] = r;
          }),
          e
        );
      }
      (e.tagClass = {
        0: "universal",
        1: "application",
        2: "context",
        3: "private",
      }),
        (e.tagClassByName = r(e.tagClass)),
        (e.tag = {
          0: "end",
          1: "bool",
          2: "int",
          3: "bitstr",
          4: "octstr",
          5: "null_",
          6: "objid",
          7: "objDesc",
          8: "external",
          9: "real",
          10: "enum",
          11: "embed",
          12: "utf8str",
          13: "relativeOid",
          16: "seq",
          17: "set",
          18: "numstr",
          19: "printstr",
          20: "t61str",
          21: "videostr",
          22: "ia5str",
          23: "utctime",
          24: "gentime",
          25: "graphstr",
          26: "iso646str",
          27: "genstr",
          28: "unistr",
          29: "charstr",
          30: "bmpstr",
        }),
        (e.tagByName = r(e.tag));
    },
    157624: function (t, e, r) {
      "use strict";
      const i = e;
      (i._reverse = function (t) {
        const e = {};
        return (
          Object.keys(t).forEach(function (r) {
            (0 | r) == r && (r |= 0);
            const i = t[r];
            e[i] = r;
          }),
          e
        );
      }),
        (i.der = r(960643));
    },
    738306: function (t, e, r) {
      "use strict";
      const i = r(270087),
        n = r(763785),
        o = r(333370).C,
        a = r(878718),
        s = r(960643);
      function f(t) {
        (this.enc = "der"),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new h()),
          this.tree._init(t.body);
      }
      function h(t) {
        a.call(this, "der", t);
      }
      function u(t, e) {
        let r = t.readUInt8(e);
        if (t.isError(r)) return r;
        const i = s.tagClass[r >> 6],
          n = 0 === (32 & r);
        if (31 === (31 & r)) {
          let i = r;
          for (r = 0; 128 === (128 & i); ) {
            if (((i = t.readUInt8(e)), t.isError(i))) return i;
            (r <<= 7), (r |= 127 & i);
          }
        } else r &= 31;
        return { cls: i, primitive: n, tag: r, tagStr: s.tag[r] };
      }
      function d(t, e, r) {
        let i = t.readUInt8(r);
        if (t.isError(i)) return i;
        if (!e && 128 === i) return null;
        if (0 === (128 & i)) return i;
        const n = 127 & i;
        if (n > 4) return t.error("length octect is too long");
        i = 0;
        for (let o = 0; o < n; o++) {
          i <<= 8;
          const e = t.readUInt8(r);
          if (t.isError(e)) return e;
          i |= e;
        }
        return i;
      }
      (t.exports = f),
        (f.prototype.decode = function (t, e) {
          return (
            o.isDecoderBuffer(t) || (t = new o(t, e)), this.tree._decode(t, e)
          );
        }),
        i(h, a),
        (h.prototype._peekTag = function (t, e, r) {
          if (t.isEmpty()) return !1;
          const i = t.save(),
            n = u(t, 'Failed to peek tag: "' + e + '"');
          return t.isError(n)
            ? n
            : (t.restore(i),
              n.tag === e || n.tagStr === e || n.tagStr + "of" === e || r);
        }),
        (h.prototype._decodeTag = function (t, e, r) {
          const i = u(t, 'Failed to decode tag of "' + e + '"');
          if (t.isError(i)) return i;
          let n = d(t, i.primitive, 'Failed to get length of "' + e + '"');
          if (t.isError(n)) return n;
          if (!r && i.tag !== e && i.tagStr !== e && i.tagStr + "of" !== e)
            return t.error('Failed to match tag: "' + e + '"');
          if (i.primitive || null !== n)
            return t.skip(n, 'Failed to match body of: "' + e + '"');
          const o = t.save(),
            a = this._skipUntilEnd(
              t,
              'Failed to skip indefinite length body: "' + this.tag + '"'
            );
          return t.isError(a)
            ? a
            : ((n = t.offset - o.offset),
              t.restore(o),
              t.skip(n, 'Failed to match body of: "' + e + '"'));
        }),
        (h.prototype._skipUntilEnd = function (t, e) {
          for (;;) {
            const r = u(t, e);
            if (t.isError(r)) return r;
            const i = d(t, r.primitive, e);
            if (t.isError(i)) return i;
            let n;
            if (
              ((n =
                r.primitive || null !== i
                  ? t.skip(i)
                  : this._skipUntilEnd(t, e)),
              t.isError(n))
            )
              return n;
            if ("end" === r.tagStr) break;
          }
        }),
        (h.prototype._decodeList = function (t, e, r, i) {
          const n = [];
          for (; !t.isEmpty(); ) {
            const e = this._peekTag(t, "end");
            if (t.isError(e)) return e;
            const o = r.decode(t, "der", i);
            if (t.isError(o) && e) break;
            n.push(o);
          }
          return n;
        }),
        (h.prototype._decodeStr = function (t, e) {
          if ("bitstr" === e) {
            const e = t.readUInt8();
            return t.isError(e) ? e : { unused: e, data: t.raw() };
          }
          if ("bmpstr" === e) {
            const e = t.raw();
            if (e.length % 2 === 1)
              return t.error("Decoding of string type: bmpstr length mismatch");
            let r = "";
            for (let t = 0; t < e.length / 2; t++)
              r += String.fromCharCode(e.readUInt16BE(2 * t));
            return r;
          }
          if ("numstr" === e) {
            const e = t.raw().toString("ascii");
            return this._isNumstr(e)
              ? e
              : t.error(
                  "Decoding of string type: numstr unsupported characters"
                );
          }
          if ("octstr" === e) return t.raw();
          if ("objDesc" === e) return t.raw();
          if ("printstr" === e) {
            const e = t.raw().toString("ascii");
            return this._isPrintstr(e)
              ? e
              : t.error(
                  "Decoding of string type: printstr unsupported characters"
                );
          }
          return /str$/.test(e)
            ? t.raw().toString()
            : t.error("Decoding of string type: " + e + " unsupported");
        }),
        (h.prototype._decodeObjid = function (t, e, r) {
          let i;
          const n = [];
          let o = 0,
            a = 0;
          for (; !t.isEmpty(); )
            (a = t.readUInt8()),
              (o <<= 7),
              (o |= 127 & a),
              0 === (128 & a) && (n.push(o), (o = 0));
          128 & a && n.push(o);
          const s = (n[0] / 40) | 0,
            f = n[0] % 40;
          if (((i = r ? n : [s, f].concat(n.slice(1))), e)) {
            let t = e[i.join(" ")];
            void 0 === t && (t = e[i.join(".")]), void 0 !== t && (i = t);
          }
          return i;
        }),
        (h.prototype._decodeTime = function (t, e) {
          const r = t.raw().toString();
          let i, n, o, a, s, f;
          if ("gentime" === e)
            (i = 0 | r.slice(0, 4)),
              (n = 0 | r.slice(4, 6)),
              (o = 0 | r.slice(6, 8)),
              (a = 0 | r.slice(8, 10)),
              (s = 0 | r.slice(10, 12)),
              (f = 0 | r.slice(12, 14));
          else {
            if ("utctime" !== e)
              return t.error("Decoding " + e + " time is not supported yet");
            (i = 0 | r.slice(0, 2)),
              (n = 0 | r.slice(2, 4)),
              (o = 0 | r.slice(4, 6)),
              (a = 0 | r.slice(6, 8)),
              (s = 0 | r.slice(8, 10)),
              (f = 0 | r.slice(10, 12)),
              (i = i < 70 ? 2e3 + i : 1900 + i);
          }
          return Date.UTC(i, n - 1, o, a, s, f, 0);
        }),
        (h.prototype._decodeNull = function () {
          return null;
        }),
        (h.prototype._decodeBool = function (t) {
          const e = t.readUInt8();
          return t.isError(e) ? e : 0 !== e;
        }),
        (h.prototype._decodeInt = function (t, e) {
          const r = t.raw();
          let i = new n(r);
          return e && (i = e[i.toString(10)] || i), i;
        }),
        (h.prototype._use = function (t, e) {
          return (
            "function" === typeof t && (t = t(e)), t._getDecoder("der").tree
          );
        });
    },
    150375: function (t, e, r) {
      "use strict";
      const i = e;
      (i.der = r(738306)), (i.pem = r(498033));
    },
    498033: function (t, e, r) {
      "use strict";
      const i = r(270087),
        n = r(721788).Buffer,
        o = r(738306);
      function a(t) {
        o.call(this, t), (this.enc = "pem");
      }
      i(a, o),
        (t.exports = a),
        (a.prototype.decode = function (t, e) {
          const r = t.toString().split(/[\r\n]+/g),
            i = e.label.toUpperCase(),
            a = /^-----(BEGIN|END) ([^-]+)-----$/;
          let s = -1,
            f = -1;
          for (let n = 0; n < r.length; n++) {
            const t = r[n].match(a);
            if (null !== t && t[2] === i) {
              if (-1 !== s) {
                if ("END" !== t[1]) break;
                f = n;
                break;
              }
              if ("BEGIN" !== t[1]) break;
              s = n;
            }
          }
          if (-1 === s || -1 === f)
            throw new Error("PEM section not found for: " + i);
          const h = r.slice(s + 1, f).join("");
          h.replace(/[^a-z0-9+/=]+/gi, "");
          const u = n.from(h, "base64");
          return o.prototype.decode.call(this, u, e);
        });
    },
    991584: function (t, e, r) {
      "use strict";
      const i = r(270087),
        n = r(721788).Buffer,
        o = r(878718),
        a = r(960643);
      function s(t) {
        (this.enc = "der"),
          (this.name = t.name),
          (this.entity = t),
          (this.tree = new f()),
          this.tree._init(t.body);
      }
      function f(t) {
        o.call(this, "der", t);
      }
      function h(t) {
        return t < 10 ? "0" + t : t;
      }
      (t.exports = s),
        (s.prototype.encode = function (t, e) {
          return this.tree._encode(t, e).join();
        }),
        i(f, o),
        (f.prototype._encodeComposite = function (t, e, r, i) {
          const o = (function (t, e, r, i) {
            let n;
            "seqof" === t ? (t = "seq") : "setof" === t && (t = "set");
            if (a.tagByName.hasOwnProperty(t)) n = a.tagByName[t];
            else {
              if ("number" !== typeof t || (0 | t) !== t)
                return i.error("Unknown tag: " + t);
              n = t;
            }
            if (n >= 31) return i.error("Multi-octet tag encoding unsupported");
            e || (n |= 32);
            return (n |= a.tagClassByName[r || "universal"] << 6), n;
          })(t, e, r, this.reporter);
          if (i.length < 128) {
            const t = n.alloc(2);
            return (
              (t[0] = o), (t[1] = i.length), this._createEncoderBuffer([t, i])
            );
          }
          let s = 1;
          for (let n = i.length; n >= 256; n >>= 8) s++;
          const f = n.alloc(2 + s);
          (f[0] = o), (f[1] = 128 | s);
          for (let n = 1 + s, a = i.length; a > 0; n--, a >>= 8) f[n] = 255 & a;
          return this._createEncoderBuffer([f, i]);
        }),
        (f.prototype._encodeStr = function (t, e) {
          if ("bitstr" === e)
            return this._createEncoderBuffer([0 | t.unused, t.data]);
          if ("bmpstr" === e) {
            const e = n.alloc(2 * t.length);
            for (let r = 0; r < t.length; r++)
              e.writeUInt16BE(t.charCodeAt(r), 2 * r);
            return this._createEncoderBuffer(e);
          }
          return "numstr" === e
            ? this._isNumstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  "Encoding of string type: numstr supports only digits and space"
                )
            : "printstr" === e
            ? this._isPrintstr(t)
              ? this._createEncoderBuffer(t)
              : this.reporter.error(
                  "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"
                )
            : /str$/.test(e) || "objDesc" === e
            ? this._createEncoderBuffer(t)
            : this.reporter.error(
                "Encoding of string type: " + e + " unsupported"
              );
        }),
        (f.prototype._encodeObjid = function (t, e, r) {
          if ("string" === typeof t) {
            if (!e)
              return this.reporter.error(
                "string objid given, but no values map found"
              );
            if (!e.hasOwnProperty(t))
              return this.reporter.error("objid not found in values map");
            t = e[t].split(/[\s.]+/g);
            for (let e = 0; e < t.length; e++) t[e] |= 0;
          } else if (Array.isArray(t)) {
            t = t.slice();
            for (let e = 0; e < t.length; e++) t[e] |= 0;
          }
          if (!Array.isArray(t))
            return this.reporter.error(
              "objid() should be either array or string, got: " +
                JSON.stringify(t)
            );
          if (!r) {
            if (t[1] >= 40)
              return this.reporter.error("Second objid identifier OOB");
            t.splice(0, 2, 40 * t[0] + t[1]);
          }
          let i = 0;
          for (let n = 0; n < t.length; n++) {
            let e = t[n];
            for (i++; e >= 128; e >>= 7) i++;
          }
          const o = n.alloc(i);
          let a = o.length - 1;
          for (let n = t.length - 1; n >= 0; n--) {
            let e = t[n];
            for (o[a--] = 127 & e; (e >>= 7) > 0; ) o[a--] = 128 | (127 & e);
          }
          return this._createEncoderBuffer(o);
        }),
        (f.prototype._encodeTime = function (t, e) {
          let r;
          const i = new Date(t);
          return (
            "gentime" === e
              ? (r = [
                  h(i.getUTCFullYear()),
                  h(i.getUTCMonth() + 1),
                  h(i.getUTCDate()),
                  h(i.getUTCHours()),
                  h(i.getUTCMinutes()),
                  h(i.getUTCSeconds()),
                  "Z",
                ].join(""))
              : "utctime" === e
              ? (r = [
                  h(i.getUTCFullYear() % 100),
                  h(i.getUTCMonth() + 1),
                  h(i.getUTCDate()),
                  h(i.getUTCHours()),
                  h(i.getUTCMinutes()),
                  h(i.getUTCSeconds()),
                  "Z",
                ].join(""))
              : this.reporter.error(
                  "Encoding " + e + " time is not supported yet"
                ),
            this._encodeStr(r, "octstr")
          );
        }),
        (f.prototype._encodeNull = function () {
          return this._createEncoderBuffer("");
        }),
        (f.prototype._encodeInt = function (t, e) {
          if ("string" === typeof t) {
            if (!e)
              return this.reporter.error(
                "String int or enum given, but no values map"
              );
            if (!e.hasOwnProperty(t))
              return this.reporter.error(
                "Values map doesn't contain: " + JSON.stringify(t)
              );
            t = e[t];
          }
          if ("number" !== typeof t && !n.isBuffer(t)) {
            const e = t.toArray();
            !t.sign && 128 & e[0] && e.unshift(0), (t = n.from(e));
          }
          if (n.isBuffer(t)) {
            let e = t.length;
            0 === t.length && e++;
            const r = n.alloc(e);
            return (
              t.copy(r),
              0 === t.length && (r[0] = 0),
              this._createEncoderBuffer(r)
            );
          }
          if (t < 128) return this._createEncoderBuffer(t);
          if (t < 256) return this._createEncoderBuffer([0, t]);
          let r = 1;
          for (let n = t; n >= 256; n >>= 8) r++;
          const i = new Array(r);
          for (let n = i.length - 1; n >= 0; n--) (i[n] = 255 & t), (t >>= 8);
          return (
            128 & i[0] && i.unshift(0), this._createEncoderBuffer(n.from(i))
          );
        }),
        (f.prototype._encodeBool = function (t) {
          return this._createEncoderBuffer(t ? 255 : 0);
        }),
        (f.prototype._use = function (t, e) {
          return (
            "function" === typeof t && (t = t(e)), t._getEncoder("der").tree
          );
        }),
        (f.prototype._skipDefault = function (t, e, r) {
          const i = this._baseState;
          let n;
          if (null === i.default) return !1;
          const o = t.join();
          if (
            (void 0 === i.defaultBuffer &&
              (i.defaultBuffer = this._encodeValue(i.default, e, r).join()),
            o.length !== i.defaultBuffer.length)
          )
            return !1;
          for (n = 0; n < o.length; n++)
            if (o[n] !== i.defaultBuffer[n]) return !1;
          return !0;
        });
    },
    443886: function (t, e, r) {
      "use strict";
      const i = e;
      (i.der = r(991584)), (i.pem = r(46927));
    },
    46927: function (t, e, r) {
      "use strict";
      const i = r(270087),
        n = r(991584);
      function o(t) {
        n.call(this, t), (this.enc = "pem");
      }
      i(o, n),
        (t.exports = o),
        (o.prototype.encode = function (t, e) {
          const r = n.prototype.encode.call(this, t).toString("base64"),
            i = ["-----BEGIN " + e.label + "-----"];
          for (let n = 0; n < r.length; n += 64) i.push(r.slice(n, n + 64));
          return i.push("-----END " + e.label + "-----"), i.join("\n");
        });
    },
    763785: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function i(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function n(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var a;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          a =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(545545).Buffer;
        } catch (k) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : (r - 48) & 15;
        }
        function f(t, e, r) {
          var i = s(t, r);
          return r - 1 >= e && (i |= s(t, r - 1) << 4), i;
        }
        function h(t, e, r, i) {
          for (var n = 0, o = Math.min(t.length, r), a = e; a < o; a++) {
            var s = t.charCodeAt(a) - 48;
            (n *= i), (n += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
          }
          return n;
        }
        (o.isBN = function (t) {
          return (
            t instanceof o ||
            (null !== t &&
              "object" === typeof t &&
              t.constructor.wordSize === o.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === e
                  ? this._parseHex(t, n, r)
                  : (this._parseBase(t, e, n),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (i(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((i("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o,
              a,
              s = 0;
            if ("be" === r)
              for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                (a = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === r)
              for (n = 0, o = 0; n < t.length; n += 3)
                (a = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n,
              o = 0,
              a = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = f(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 === 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = f(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            this.strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
            i--, (n = (n / e) | 0);
            for (
              var o = t.length - r,
                a = o % i,
                s = Math.min(o, o - a) + r,
                f = 0,
                u = r;
              u < s;
              u += i
            )
              (f = h(t, u, u + i, e)),
                this.imuln(n),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== a) {
              var d = 1;
              for (f = h(t, u, t.length, e), u = 0; u < a; u++) d *= e;
              this.imuln(d),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
            this.strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (o.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var u = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          c = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function l(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var i = (t.length + e.length) | 0;
          (r.length = i), (i = (i - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | e.words[0],
            a = n * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var h = 1; h < i; h++) {
            for (
              var u = f >>> 26,
                d = 67108863 & f,
                c = Math.min(h, e.length - 1),
                l = Math.max(0, h - t.length + 1);
              l <= c;
              l++
            ) {
              var p = (h - l) | 0;
              (u +=
                ((a = (n = 0 | t.words[p]) * (o = 0 | e.words[l]) + d) /
                  67108864) |
                0),
                (d = 67108863 & a);
            }
            (r.words[h] = 0 | d), (f = 0 | u);
          }
          return 0 !== f ? (r.words[h] = 0 | f) : r.length--, r.strip();
        }
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var n = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (16777215 & ((s << n) | o)).toString(16);
              (r =
                0 !== (o = (s >>> (24 - n)) & 16777215) || a !== this.length - 1
                  ? u[6 - f.length] + f + r
                  : f + r),
                (n += 2) >= 26 && ((n -= 26), a--);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = d[t],
              l = c[t];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(l).toString(t);
              r = (p = p.idivn(l)).isZero() ? b + r : u[h - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          i(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (t, e) {
            return i("undefined" !== typeof a), this.toArrayLike(a, t, e);
          }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            var n = this.byteLength(),
              o = r || Math.max(1, n);
            i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"),
              this.strip();
            var a,
              s,
              f = "le" === e,
              h = new t(o),
              u = this.clone();
            if (f) {
              for (s = 0; !u.isZero(); s++)
                (a = u.andln(255)), u.iushrn(8), (h[s] = a);
              for (; s < o; s++) h[s] = 0;
            } else {
              for (s = 0; s < o - n; s++) h[s] = 0;
              for (s = 0; !u.isZero(); s++)
                (a = u.andln(255)), u.iushrn(8), (h[o - s - 1] = a);
            }
            return h;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this.strip();
          }),
          (o.prototype.ior = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.iand = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var i = 0; i < r.length; i++)
              this.words[i] = e.words[i] ^ r.words[i];
            if (this !== e)
              for (; i < e.length; i++) this.words[i] = e.words[i];
            return (this.length = e.length), this.strip();
          }),
          (o.prototype.ixor = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var n = 0; n < e; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              r > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
              this.strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            i("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << n)
                : this.words[r] & ~(1 << n)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, i;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (i = t))
              : ((r = t), (i = this));
            for (var n = 0, o = 0; o < i.length; o++)
              (e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            for (; 0 !== n && o < r.length; o++)
              (e = (0 | r.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              i,
              n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
            for (var o = 0, a = 0; a < i.length; a++)
              (o = (e = (0 | r.words[a]) - (0 | i.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            for (; 0 !== o && a < r.length; a++)
              (o = (e = (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            if (0 === o && a < r.length && r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              r !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var p = function (t, e, r) {
          var i,
            n,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            h = 0,
            u = 0 | a[0],
            d = 8191 & u,
            c = u >>> 13,
            l = 0 | a[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | a[2],
            g = 8191 & m,
            y = m >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            _ = v >>> 13,
            M = 0 | a[4],
            S = 8191 & M,
            E = M >>> 13,
            k = 0 | a[5],
            A = 8191 & k,
            R = k >>> 13,
            x = 0 | a[6],
            B = 8191 & x,
            I = x >>> 13,
            T = 0 | a[7],
            P = 8191 & T,
            j = T >>> 13,
            O = 0 | a[8],
            C = 8191 & O,
            L = O >>> 13,
            N = 0 | a[9],
            D = 8191 & N,
            q = N >>> 13,
            U = 0 | s[0],
            z = 8191 & U,
            H = U >>> 13,
            K = 0 | s[1],
            F = 8191 & K,
            W = K >>> 13,
            V = 0 | s[2],
            Z = 8191 & V,
            G = V >>> 13,
            X = 0 | s[3],
            Y = 8191 & X,
            J = X >>> 13,
            $ = 0 | s[4],
            Q = 8191 & $,
            tt = $ >>> 13,
            et = 0 | s[5],
            rt = 8191 & et,
            it = et >>> 13,
            nt = 0 | s[6],
            ot = 8191 & nt,
            at = nt >>> 13,
            st = 0 | s[7],
            ft = 8191 & st,
            ht = st >>> 13,
            ut = 0 | s[8],
            dt = 8191 & ut,
            ct = ut >>> 13,
            lt = 0 | s[9],
            pt = 8191 & lt,
            bt = lt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var mt =
            (((h + (i = Math.imul(d, z))) | 0) +
              ((8191 & (n = ((n = Math.imul(d, H)) + Math.imul(c, z)) | 0)) <<
                13)) |
            0;
          (h = ((((o = Math.imul(c, H)) + (n >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (i = Math.imul(p, z)),
            (n = ((n = Math.imul(p, H)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, H));
          var gt =
            (((h + (i = (i + Math.imul(d, F)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, W)) | 0) + Math.imul(c, F)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, W)) | 0) + (n >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (i = Math.imul(g, z)),
            (n = ((n = Math.imul(g, H)) + Math.imul(y, z)) | 0),
            (o = Math.imul(y, H)),
            (i = (i + Math.imul(p, F)) | 0),
            (n = ((n = (n + Math.imul(p, W)) | 0) + Math.imul(b, F)) | 0),
            (o = (o + Math.imul(b, W)) | 0);
          var yt =
            (((h + (i = (i + Math.imul(d, Z)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, G)) | 0) + Math.imul(c, Z)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, G)) | 0) + (n >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (i = Math.imul(w, z)),
            (n = ((n = Math.imul(w, H)) + Math.imul(_, z)) | 0),
            (o = Math.imul(_, H)),
            (i = (i + Math.imul(g, F)) | 0),
            (n = ((n = (n + Math.imul(g, W)) | 0) + Math.imul(y, F)) | 0),
            (o = (o + Math.imul(y, W)) | 0),
            (i = (i + Math.imul(p, Z)) | 0),
            (n = ((n = (n + Math.imul(p, G)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, G)) | 0);
          var vt =
            (((h + (i = (i + Math.imul(d, Y)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, J)) | 0) + Math.imul(c, Y)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, J)) | 0) + (n >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (i = Math.imul(S, z)),
            (n = ((n = Math.imul(S, H)) + Math.imul(E, z)) | 0),
            (o = Math.imul(E, H)),
            (i = (i + Math.imul(w, F)) | 0),
            (n = ((n = (n + Math.imul(w, W)) | 0) + Math.imul(_, F)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (i = (i + Math.imul(g, Z)) | 0),
            (n = ((n = (n + Math.imul(g, G)) | 0) + Math.imul(y, Z)) | 0),
            (o = (o + Math.imul(y, G)) | 0),
            (i = (i + Math.imul(p, Y)) | 0),
            (n = ((n = (n + Math.imul(p, J)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var wt =
            (((h + (i = (i + Math.imul(d, Q)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, tt)) | 0) + Math.imul(c, Q)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tt)) | 0) + (n >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (i = Math.imul(A, z)),
            (n = ((n = Math.imul(A, H)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, H)),
            (i = (i + Math.imul(S, F)) | 0),
            (n = ((n = (n + Math.imul(S, W)) | 0) + Math.imul(E, F)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (i = (i + Math.imul(w, Z)) | 0),
            (n = ((n = (n + Math.imul(w, G)) | 0) + Math.imul(_, Z)) | 0),
            (o = (o + Math.imul(_, G)) | 0),
            (i = (i + Math.imul(g, Y)) | 0),
            (n = ((n = (n + Math.imul(g, J)) | 0) + Math.imul(y, Y)) | 0),
            (o = (o + Math.imul(y, J)) | 0),
            (i = (i + Math.imul(p, Q)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var _t =
            (((h + (i = (i + Math.imul(d, rt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, it)) | 0) + Math.imul(c, rt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, it)) | 0) + (n >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (i = Math.imul(B, z)),
            (n = ((n = Math.imul(B, H)) + Math.imul(I, z)) | 0),
            (o = Math.imul(I, H)),
            (i = (i + Math.imul(A, F)) | 0),
            (n = ((n = (n + Math.imul(A, W)) | 0) + Math.imul(R, F)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (i = (i + Math.imul(S, Z)) | 0),
            (n = ((n = (n + Math.imul(S, G)) | 0) + Math.imul(E, Z)) | 0),
            (o = (o + Math.imul(E, G)) | 0),
            (i = (i + Math.imul(w, Y)) | 0),
            (n = ((n = (n + Math.imul(w, J)) | 0) + Math.imul(_, Y)) | 0),
            (o = (o + Math.imul(_, J)) | 0),
            (i = (i + Math.imul(g, Q)) | 0),
            (n = ((n = (n + Math.imul(g, tt)) | 0) + Math.imul(y, Q)) | 0),
            (o = (o + Math.imul(y, tt)) | 0),
            (i = (i + Math.imul(p, rt)) | 0),
            (n = ((n = (n + Math.imul(p, it)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, it)) | 0);
          var Mt =
            (((h + (i = (i + Math.imul(d, ot)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, at)) | 0) + Math.imul(c, ot)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, at)) | 0) + (n >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (i = Math.imul(P, z)),
            (n = ((n = Math.imul(P, H)) + Math.imul(j, z)) | 0),
            (o = Math.imul(j, H)),
            (i = (i + Math.imul(B, F)) | 0),
            (n = ((n = (n + Math.imul(B, W)) | 0) + Math.imul(I, F)) | 0),
            (o = (o + Math.imul(I, W)) | 0),
            (i = (i + Math.imul(A, Z)) | 0),
            (n = ((n = (n + Math.imul(A, G)) | 0) + Math.imul(R, Z)) | 0),
            (o = (o + Math.imul(R, G)) | 0),
            (i = (i + Math.imul(S, Y)) | 0),
            (n = ((n = (n + Math.imul(S, J)) | 0) + Math.imul(E, Y)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (i = (i + Math.imul(w, Q)) | 0),
            (n = ((n = (n + Math.imul(w, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (i = (i + Math.imul(g, rt)) | 0),
            (n = ((n = (n + Math.imul(g, it)) | 0) + Math.imul(y, rt)) | 0),
            (o = (o + Math.imul(y, it)) | 0),
            (i = (i + Math.imul(p, ot)) | 0),
            (n = ((n = (n + Math.imul(p, at)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, at)) | 0);
          var St =
            (((h + (i = (i + Math.imul(d, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ht)) | 0) + Math.imul(c, ft)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ht)) | 0) + (n >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (i = Math.imul(C, z)),
            (n = ((n = Math.imul(C, H)) + Math.imul(L, z)) | 0),
            (o = Math.imul(L, H)),
            (i = (i + Math.imul(P, F)) | 0),
            (n = ((n = (n + Math.imul(P, W)) | 0) + Math.imul(j, F)) | 0),
            (o = (o + Math.imul(j, W)) | 0),
            (i = (i + Math.imul(B, Z)) | 0),
            (n = ((n = (n + Math.imul(B, G)) | 0) + Math.imul(I, Z)) | 0),
            (o = (o + Math.imul(I, G)) | 0),
            (i = (i + Math.imul(A, Y)) | 0),
            (n = ((n = (n + Math.imul(A, J)) | 0) + Math.imul(R, Y)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (i = (i + Math.imul(S, Q)) | 0),
            (n = ((n = (n + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (i = (i + Math.imul(w, rt)) | 0),
            (n = ((n = (n + Math.imul(w, it)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, it)) | 0),
            (i = (i + Math.imul(g, ot)) | 0),
            (n = ((n = (n + Math.imul(g, at)) | 0) + Math.imul(y, ot)) | 0),
            (o = (o + Math.imul(y, at)) | 0),
            (i = (i + Math.imul(p, ft)) | 0),
            (n = ((n = (n + Math.imul(p, ht)) | 0) + Math.imul(b, ft)) | 0),
            (o = (o + Math.imul(b, ht)) | 0);
          var Et =
            (((h + (i = (i + Math.imul(d, dt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ct)) | 0) + Math.imul(c, dt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ct)) | 0) + (n >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (i = Math.imul(D, z)),
            (n = ((n = Math.imul(D, H)) + Math.imul(q, z)) | 0),
            (o = Math.imul(q, H)),
            (i = (i + Math.imul(C, F)) | 0),
            (n = ((n = (n + Math.imul(C, W)) | 0) + Math.imul(L, F)) | 0),
            (o = (o + Math.imul(L, W)) | 0),
            (i = (i + Math.imul(P, Z)) | 0),
            (n = ((n = (n + Math.imul(P, G)) | 0) + Math.imul(j, Z)) | 0),
            (o = (o + Math.imul(j, G)) | 0),
            (i = (i + Math.imul(B, Y)) | 0),
            (n = ((n = (n + Math.imul(B, J)) | 0) + Math.imul(I, Y)) | 0),
            (o = (o + Math.imul(I, J)) | 0),
            (i = (i + Math.imul(A, Q)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (i = (i + Math.imul(S, rt)) | 0),
            (n = ((n = (n + Math.imul(S, it)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, it)) | 0),
            (i = (i + Math.imul(w, ot)) | 0),
            (n = ((n = (n + Math.imul(w, at)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, at)) | 0),
            (i = (i + Math.imul(g, ft)) | 0),
            (n = ((n = (n + Math.imul(g, ht)) | 0) + Math.imul(y, ft)) | 0),
            (o = (o + Math.imul(y, ht)) | 0),
            (i = (i + Math.imul(p, dt)) | 0),
            (n = ((n = (n + Math.imul(p, ct)) | 0) + Math.imul(b, dt)) | 0),
            (o = (o + Math.imul(b, ct)) | 0);
          var kt =
            (((h + (i = (i + Math.imul(d, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, bt)) | 0) + Math.imul(c, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, bt)) | 0) + (n >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (i = Math.imul(D, F)),
            (n = ((n = Math.imul(D, W)) + Math.imul(q, F)) | 0),
            (o = Math.imul(q, W)),
            (i = (i + Math.imul(C, Z)) | 0),
            (n = ((n = (n + Math.imul(C, G)) | 0) + Math.imul(L, Z)) | 0),
            (o = (o + Math.imul(L, G)) | 0),
            (i = (i + Math.imul(P, Y)) | 0),
            (n = ((n = (n + Math.imul(P, J)) | 0) + Math.imul(j, Y)) | 0),
            (o = (o + Math.imul(j, J)) | 0),
            (i = (i + Math.imul(B, Q)) | 0),
            (n = ((n = (n + Math.imul(B, tt)) | 0) + Math.imul(I, Q)) | 0),
            (o = (o + Math.imul(I, tt)) | 0),
            (i = (i + Math.imul(A, rt)) | 0),
            (n = ((n = (n + Math.imul(A, it)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, it)) | 0),
            (i = (i + Math.imul(S, ot)) | 0),
            (n = ((n = (n + Math.imul(S, at)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, at)) | 0),
            (i = (i + Math.imul(w, ft)) | 0),
            (n = ((n = (n + Math.imul(w, ht)) | 0) + Math.imul(_, ft)) | 0),
            (o = (o + Math.imul(_, ht)) | 0),
            (i = (i + Math.imul(g, dt)) | 0),
            (n = ((n = (n + Math.imul(g, ct)) | 0) + Math.imul(y, dt)) | 0),
            (o = (o + Math.imul(y, ct)) | 0);
          var At =
            (((h + (i = (i + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(b, bt)) | 0) + (n >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (i = Math.imul(D, Z)),
            (n = ((n = Math.imul(D, G)) + Math.imul(q, Z)) | 0),
            (o = Math.imul(q, G)),
            (i = (i + Math.imul(C, Y)) | 0),
            (n = ((n = (n + Math.imul(C, J)) | 0) + Math.imul(L, Y)) | 0),
            (o = (o + Math.imul(L, J)) | 0),
            (i = (i + Math.imul(P, Q)) | 0),
            (n = ((n = (n + Math.imul(P, tt)) | 0) + Math.imul(j, Q)) | 0),
            (o = (o + Math.imul(j, tt)) | 0),
            (i = (i + Math.imul(B, rt)) | 0),
            (n = ((n = (n + Math.imul(B, it)) | 0) + Math.imul(I, rt)) | 0),
            (o = (o + Math.imul(I, it)) | 0),
            (i = (i + Math.imul(A, ot)) | 0),
            (n = ((n = (n + Math.imul(A, at)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, at)) | 0),
            (i = (i + Math.imul(S, ft)) | 0),
            (n = ((n = (n + Math.imul(S, ht)) | 0) + Math.imul(E, ft)) | 0),
            (o = (o + Math.imul(E, ht)) | 0),
            (i = (i + Math.imul(w, dt)) | 0),
            (n = ((n = (n + Math.imul(w, ct)) | 0) + Math.imul(_, dt)) | 0),
            (o = (o + Math.imul(_, ct)) | 0);
          var Rt =
            (((h + (i = (i + Math.imul(g, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(g, bt)) | 0) + Math.imul(y, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(y, bt)) | 0) + (n >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (i = Math.imul(D, Y)),
            (n = ((n = Math.imul(D, J)) + Math.imul(q, Y)) | 0),
            (o = Math.imul(q, J)),
            (i = (i + Math.imul(C, Q)) | 0),
            (n = ((n = (n + Math.imul(C, tt)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (i = (i + Math.imul(P, rt)) | 0),
            (n = ((n = (n + Math.imul(P, it)) | 0) + Math.imul(j, rt)) | 0),
            (o = (o + Math.imul(j, it)) | 0),
            (i = (i + Math.imul(B, ot)) | 0),
            (n = ((n = (n + Math.imul(B, at)) | 0) + Math.imul(I, ot)) | 0),
            (o = (o + Math.imul(I, at)) | 0),
            (i = (i + Math.imul(A, ft)) | 0),
            (n = ((n = (n + Math.imul(A, ht)) | 0) + Math.imul(R, ft)) | 0),
            (o = (o + Math.imul(R, ht)) | 0),
            (i = (i + Math.imul(S, dt)) | 0),
            (n = ((n = (n + Math.imul(S, ct)) | 0) + Math.imul(E, dt)) | 0),
            (o = (o + Math.imul(E, ct)) | 0);
          var xt =
            (((h + (i = (i + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, bt)) | 0) + Math.imul(_, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(_, bt)) | 0) + (n >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (i = Math.imul(D, Q)),
            (n = ((n = Math.imul(D, tt)) + Math.imul(q, Q)) | 0),
            (o = Math.imul(q, tt)),
            (i = (i + Math.imul(C, rt)) | 0),
            (n = ((n = (n + Math.imul(C, it)) | 0) + Math.imul(L, rt)) | 0),
            (o = (o + Math.imul(L, it)) | 0),
            (i = (i + Math.imul(P, ot)) | 0),
            (n = ((n = (n + Math.imul(P, at)) | 0) + Math.imul(j, ot)) | 0),
            (o = (o + Math.imul(j, at)) | 0),
            (i = (i + Math.imul(B, ft)) | 0),
            (n = ((n = (n + Math.imul(B, ht)) | 0) + Math.imul(I, ft)) | 0),
            (o = (o + Math.imul(I, ht)) | 0),
            (i = (i + Math.imul(A, dt)) | 0),
            (n = ((n = (n + Math.imul(A, ct)) | 0) + Math.imul(R, dt)) | 0),
            (o = (o + Math.imul(R, ct)) | 0);
          var Bt =
            (((h + (i = (i + Math.imul(S, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(S, bt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(E, bt)) | 0) + (n >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (i = Math.imul(D, rt)),
            (n = ((n = Math.imul(D, it)) + Math.imul(q, rt)) | 0),
            (o = Math.imul(q, it)),
            (i = (i + Math.imul(C, ot)) | 0),
            (n = ((n = (n + Math.imul(C, at)) | 0) + Math.imul(L, ot)) | 0),
            (o = (o + Math.imul(L, at)) | 0),
            (i = (i + Math.imul(P, ft)) | 0),
            (n = ((n = (n + Math.imul(P, ht)) | 0) + Math.imul(j, ft)) | 0),
            (o = (o + Math.imul(j, ht)) | 0),
            (i = (i + Math.imul(B, dt)) | 0),
            (n = ((n = (n + Math.imul(B, ct)) | 0) + Math.imul(I, dt)) | 0),
            (o = (o + Math.imul(I, ct)) | 0);
          var It =
            (((h + (i = (i + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, bt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(R, bt)) | 0) + (n >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (i = Math.imul(D, ot)),
            (n = ((n = Math.imul(D, at)) + Math.imul(q, ot)) | 0),
            (o = Math.imul(q, at)),
            (i = (i + Math.imul(C, ft)) | 0),
            (n = ((n = (n + Math.imul(C, ht)) | 0) + Math.imul(L, ft)) | 0),
            (o = (o + Math.imul(L, ht)) | 0),
            (i = (i + Math.imul(P, dt)) | 0),
            (n = ((n = (n + Math.imul(P, ct)) | 0) + Math.imul(j, dt)) | 0),
            (o = (o + Math.imul(j, ct)) | 0);
          var Tt =
            (((h + (i = (i + Math.imul(B, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(B, bt)) | 0) + Math.imul(I, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(I, bt)) | 0) + (n >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (i = Math.imul(D, ft)),
            (n = ((n = Math.imul(D, ht)) + Math.imul(q, ft)) | 0),
            (o = Math.imul(q, ht)),
            (i = (i + Math.imul(C, dt)) | 0),
            (n = ((n = (n + Math.imul(C, ct)) | 0) + Math.imul(L, dt)) | 0),
            (o = (o + Math.imul(L, ct)) | 0);
          var Pt =
            (((h + (i = (i + Math.imul(P, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(P, bt)) | 0) + Math.imul(j, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(j, bt)) | 0) + (n >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863),
            (i = Math.imul(D, dt)),
            (n = ((n = Math.imul(D, ct)) + Math.imul(q, dt)) | 0),
            (o = Math.imul(q, ct));
          var jt =
            (((h + (i = (i + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(C, bt)) | 0) + Math.imul(L, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(L, bt)) | 0) + (n >>> 13)) | 0) +
              (jt >>> 26)) |
            0),
            (jt &= 67108863);
          var Ot =
            (((h + (i = Math.imul(D, pt))) | 0) +
              ((8191 & (n = ((n = Math.imul(D, bt)) + Math.imul(q, pt)) | 0)) <<
                13)) |
            0;
          return (
            (h =
              ((((o = Math.imul(q, bt)) + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
            (Ot &= 67108863),
            (f[0] = mt),
            (f[1] = gt),
            (f[2] = yt),
            (f[3] = vt),
            (f[4] = wt),
            (f[5] = _t),
            (f[6] = Mt),
            (f[7] = St),
            (f[8] = Et),
            (f[9] = kt),
            (f[10] = At),
            (f[11] = Rt),
            (f[12] = xt),
            (f[13] = Bt),
            (f[14] = It),
            (f[15] = Tt),
            (f[16] = Pt),
            (f[17] = jt),
            (f[18] = Ot),
            0 !== h && ((f[19] = h), r.length++),
            r
          );
        };
        function b(t, e, r) {
          return new m().mulp(t, e, r);
        }
        function m(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (p = l),
          (o.prototype.mulTo = function (t, e) {
            var r,
              i = this.length + t.length;
            return (
              (r =
                10 === this.length && 10 === t.length
                  ? p(this, t, e)
                  : i < 63
                  ? l(this, t, e)
                  : i < 1024
                  ? (function (t, e, r) {
                      (r.negative = e.negative ^ t.negative),
                        (r.length = t.length + e.length);
                      for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                        var a = n;
                        n = 0;
                        for (
                          var s = 67108863 & i,
                            f = Math.min(o, e.length - 1),
                            h = Math.max(0, o - t.length + 1);
                          h <= f;
                          h++
                        ) {
                          var u = o - h,
                            d = (0 | t.words[u]) * (0 | e.words[h]),
                            c = 67108863 & d;
                          (s = 67108863 & (c = (c + s) | 0)),
                            (n +=
                              (a =
                                ((a = (a + ((d / 67108864) | 0)) | 0) +
                                  (c >>> 26)) |
                                0) >>> 26),
                            (a &= 67108863);
                        }
                        (r.words[o] = s), (i = a), (a = n);
                      }
                      return 0 !== i ? (r.words[o] = i) : r.length--, r.strip();
                    })(this, t, e)
                  : b(this, t, e)),
              r
            );
          }),
          (m.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
              i < t;
              i++
            )
              e[i] = this.revBin(i, r, t);
            return e;
          }),
          (m.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var i = 0, n = 0; n < e; n++)
              (i |= (1 & t) << (e - n - 1)), (t >>= 1);
            return i;
          }),
          (m.prototype.permute = function (t, e, r, i, n, o) {
            for (var a = 0; a < o; a++) (i[a] = e[t[a]]), (n[a] = r[t[a]]);
          }),
          (m.prototype.transform = function (t, e, r, i, n, o) {
            this.permute(o, t, e, r, i, n);
            for (var a = 1; a < n; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  h = Math.sin((2 * Math.PI) / s),
                  u = 0;
                u < n;
                u += s
              )
                for (var d = f, c = h, l = 0; l < a; l++) {
                  var p = r[u + l],
                    b = i[u + l],
                    m = r[u + l + a],
                    g = i[u + l + a],
                    y = d * m - c * g;
                  (g = d * g + c * m),
                    (m = y),
                    (r[u + l] = p + m),
                    (i[u + l] = b + g),
                    (r[u + l + a] = p - m),
                    (i[u + l + a] = b - g),
                    l !== s &&
                      ((y = f * d - h * c), (c = f * c + h * d), (d = y));
                }
          }),
          (m.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              i = 1 & r,
              n = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) n++;
            return 1 << (n + 1 + i);
          }),
          (m.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var i = 0; i < r / 2; i++) {
                var n = t[i];
                (t[i] = t[r - i - 1]),
                  (t[r - i - 1] = n),
                  (n = e[i]),
                  (e[i] = -e[r - i - 1]),
                  (e[r - i - 1] = -n);
              }
          }),
          (m.prototype.normalize13b = function (t, e) {
            for (var r = 0, i = 0; i < e / 2; i++) {
              var n =
                8192 * Math.round(t[2 * i + 1] / e) +
                Math.round(t[2 * i] / e) +
                r;
              (t[i] = 67108863 & n),
                (r = n < 67108864 ? 0 : (n / 67108864) | 0);
            }
            return t;
          }),
          (m.prototype.convert13b = function (t, e, r, n) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < n; ++a) r[a] = 0;
            i(0 === o), i(0 === (-8192 & o));
          }),
          (m.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (m.prototype.mulp = function (t, e, r) {
            var i = 2 * this.guessLen13b(t.length, e.length),
              n = this.makeRBT(i),
              o = this.stub(i),
              a = new Array(i),
              s = new Array(i),
              f = new Array(i),
              h = new Array(i),
              u = new Array(i),
              d = new Array(i),
              c = r.words;
            (c.length = i),
              this.convert13b(t.words, t.length, a, i),
              this.convert13b(e.words, e.length, h, i),
              this.transform(a, o, s, f, i, n),
              this.transform(h, o, u, d, i, n);
            for (var l = 0; l < i; l++) {
              var p = s[l] * u[l] - f[l] * d[l];
              (f[l] = s[l] * d[l] + f[l] * u[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, f, i),
              this.transform(s, f, c, o, i, n),
              this.conjugate(c, o, i),
              this.normalize13b(c, i),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r.strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), b(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            i("number" === typeof t), i(t < 67108864);
            for (var e = 0, r = 0; r < this.length; r++) {
              var n = (0 | this.words[r]) * t,
                o = (67108863 & n) + (67108863 & e);
              (e >>= 26),
                (e += (n / 67108864) | 0),
                (e += o >>> 26),
                (this.words[r] = 67108863 & o);
            }
            return 0 !== e && ((this.words[r] = e), this.length++), this;
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var i = (r / 26) | 0,
                  n = r % 26;
                e[r] = (t.words[i] & (1 << n)) >>> n;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, i = 0;
              i < e.length && 0 === e[i];
              i++, r = r.sqr()
            );
            if (++i < e.length)
              for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                0 !== e[i] && (r = r.mul(n));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            i("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              n = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== n) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + n] = this.words[e];
              for (e = 0; e < n; e++) this.words[e] = 0;
              this.length += n;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (t) {
            return i(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var n;
            i("number" === typeof t && t >= 0),
              (n = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((n -= a), (n = Math.max(0, n)), f)) {
              for (var h = 0; h < a; h++) f.words[h] = this.words[h];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, h = 0; h < this.length; h++)
                this.words[h] = this.words[h + a];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (h = this.length - 1; h >= 0 && (0 !== u || h >= n); h--) {
              var d = 0 | this.words[h];
              (this.words[h] = (u << (26 - o)) | (d >>> o)), (u = d & s);
            }
            return (
              f && 0 !== u && (f.words[f.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return i(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              n = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & n);
          }),
          (o.prototype.imaskn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (i(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var n = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= n;
            }
            return this.strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              i("number" === typeof t),
              i(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((i("number" === typeof t), i(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var n,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (n = 0; n < t.length; n++) {
              o = (0 | this.words[n + r]) + s;
              var f = (0 | t.words[n]) * e;
              (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                (this.words[n + r] = 67108863 & o);
            }
            for (; n < this.length - r; n++)
              (s = (o = (0 | this.words[n + r]) + s) >> 26),
                (this.words[n + r] = 67108863 & o);
            if (0 === s) return this.strip();
            for (i(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (o = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              i = this.clone(),
              n = t,
              a = 0 | n.words[n.length - 1];
            0 !== (r = 26 - this._countBits(a)) &&
              ((n = n.ushln(r)), i.iushln(r), (a = 0 | n.words[n.length - 1]));
            var s,
              f = i.length - n.length;
            if ("mod" !== e) {
              ((s = new o(null)).length = f + 1),
                (s.words = new Array(s.length));
              for (var h = 0; h < s.length; h++) s.words[h] = 0;
            }
            var u = i.clone()._ishlnsubmul(n, 1, f);
            0 === u.negative && ((i = u), s && (s.words[f] = 1));
            for (var d = f - 1; d >= 0; d--) {
              var c =
                67108864 * (0 | i.words[n.length + d]) +
                (0 | i.words[n.length + d - 1]);
              for (
                c = Math.min((c / a) | 0, 67108863), i._ishlnsubmul(n, c, d);
                0 !== i.negative;

              )
                c--,
                  (i.negative = 0),
                  i._ishlnsubmul(n, 1, d),
                  i.isZero() || (i.negative ^= 1);
              s && (s.words[d] = c);
            }
            return (
              s && s.strip(),
              i.strip(),
              "div" !== e && 0 !== r && i.iushrn(r),
              { div: s || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              i(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((s = this.neg().divmod(t, e)),
                  "mod" !== e && (n = s.div.neg()),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                  { div: n, mod: a })
                : 0 === this.negative && 0 !== t.negative
                ? ((s = this.divmod(t.neg(), e)),
                  "mod" !== e && (n = s.div.neg()),
                  { div: n, mod: s.mod })
                : 0 !== (this.negative & t.negative)
                ? ((s = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                  { div: s.div, mod: a })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var n, a, s;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              i = t.ushrn(1),
              n = t.andln(1),
              o = r.cmp(i);
            return o < 0 || (1 === n && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modn = function (t) {
            i(t <= 67108863);
            for (var e = (1 << 26) % t, r = 0, n = this.length - 1; n >= 0; n--)
              r = (e * r + (0 | this.words[n])) % t;
            return r;
          }),
          (o.prototype.idivn = function (t) {
            i(t <= 67108863);
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = (0 | this.words[r]) + 67108864 * e;
              (this.words[r] = (n / t) | 0), (e = n % t);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n = new o(1), a = new o(0), s = new o(0), f = new o(1), h = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++h;
            for (var u = r.clone(), d = e.clone(); !e.isZero(); ) {
              for (
                var c = 0, l = 1;
                0 === (e.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (n.isOdd() || a.isOdd()) && (n.iadd(u), a.isub(d)),
                    n.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                0 === (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(u), f.isub(d)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), n.isub(s), a.isub(f))
                : (r.isub(e), s.isub(n), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(h) };
          }),
          (o.prototype._invmp = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n, a = new o(1), s = new o(0), f = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var h = 0, u = 1;
                0 === (e.words[0] & u) && h < 26;
                ++h, u <<= 1
              );
              if (h > 0)
                for (e.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var d = 0, c = 1;
                0 === (r.words[0] & c) && d < 26;
                ++d, c <<= 1
              );
              if (d > 0)
                for (r.iushrn(d); d-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a));
            }
            return (n = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && n.iadd(t), n;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var i = 0; e.isEven() && r.isEven(); i++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = e.cmp(r);
              if (n < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(i);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            i("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              n = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= n), this;
            for (var o = n, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), i(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              e = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = 0 | this.words[r],
                n = 0 | t.words[r];
              if (i !== n) {
                i < n ? (e = -1) : i > n && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new S(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              i(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var g = { k256: null, p224: null, p192: null, p25519: null };
        function y(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function v() {
          y.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function w() {
          y.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function _() {
          y.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function M() {
          y.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function S(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            i(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function E(t) {
          S.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (y.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (y.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var i = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === i
                ? ((r.words[0] = 0), (r.length = 1))
                : i > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (y.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (y.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(v, y),
          (v.prototype.split = function (t, e) {
            for (var r = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++)
              e.words[n] = t.words[n];
            if (((e.length = i), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
              var a = 0 | t.words[n];
              (t.words[n - 10] = ((a & r) << 4) | (o >>> 22)), (o = a);
            }
            (o >>>= 22),
              (t.words[n - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (v.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = 0 | t.words[r];
              (e += 977 * i),
                (t.words[r] = 67108863 & e),
                (e = 64 * i + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(w, y),
          n(_, y),
          n(M, y),
          (M.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = 19 * (0 | t.words[r]) + e,
                n = 67108863 & i;
              (i >>>= 26), (t.words[r] = n), (e = i);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (g[t]) return g[t];
            var e;
            if ("k256" === t) e = new v();
            else if ("p224" === t) e = new w();
            else if ("p192" === t) e = new _();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new M();
            }
            return (g[t] = e), e;
          }),
          (S.prototype._verify1 = function (t) {
            i(0 === t.negative, "red works only with positives"),
              i(t.red, "red works only with red numbers");
          }),
          (S.prototype._verify2 = function (t, e) {
            i(0 === (t.negative | e.negative), "red works only with positives"),
              i(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (S.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (S.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (S.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (S.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (S.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (S.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (S.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (S.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (S.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (S.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (S.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (S.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((i(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var n = this.m.subn(1), a = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              a++, n.iushrn(1);
            i(!n.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              h = this.m.subn(1).iushrn(1),
              u = this.m.bitLength();
            for (
              u = new o(2 * u * u).toRed(this);
              0 !== this.pow(u, h).cmp(f);

            )
              u.redIAdd(f);
            for (
              var d = this.pow(u, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                l = this.pow(t, n),
                p = a;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              i(m < p);
              var g = this.pow(d, new o(1).iushln(p - m - 1));
              (c = c.redMul(g)), (d = g.redSqr()), (l = l.redMul(d)), (p = m);
            }
            return c;
          }),
          (S.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (S.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
            var n = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), i = e.length - 1; i >= 0; i--) {
              for (var h = e.words[i], u = f - 1; u >= 0; u--) {
                var d = (h >> u) & 1;
                n !== r[0] && (n = this.sqr(n)),
                  0 !== d || 0 !== a
                    ? ((a <<= 1),
                      (a |= d),
                      (4 === ++s || (0 === i && 0 === u)) &&
                        ((n = this.mul(n, r[a])), (s = 0), (a = 0)))
                    : (s = 0);
              }
              f = 26;
            }
            return n;
          }),
          (S.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (S.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new E(t);
          }),
          n(E, S),
          (E.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (E.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (E.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (E.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              a = n;
            return (
              n.cmp(this.m) >= 0
                ? (a = n.isub(this.m))
                : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (E.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    559154: function (t, e, r) {
      var i;
      function n(t) {
        this.rand = t;
      }
      if (
        ((t.exports = function (t) {
          return i || (i = new n(null)), i.generate(t);
        }),
        (t.exports.Rand = n),
        (n.prototype.generate = function (t) {
          return this._rand(t);
        }),
        (n.prototype._rand = function (t) {
          if (this.rand.getBytes) return this.rand.getBytes(t);
          for (var e = new Uint8Array(t), r = 0; r < e.length; r++)
            e[r] = this.rand.getByte();
          return e;
        }),
        "object" === typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (n.prototype._rand = function (t) {
              var e = new Uint8Array(t);
              return self.crypto.getRandomValues(e), e;
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (n.prototype._rand = function (t) {
              var e = new Uint8Array(t);
              return self.msCrypto.getRandomValues(e), e;
            })
          : "object" === typeof window &&
            (n.prototype._rand = function () {
              throw new Error("Not implemented yet");
            });
      else
        try {
          var o = r(232337);
          if ("function" !== typeof o.randomBytes)
            throw new Error("Not supported");
          n.prototype._rand = function (t) {
            return o.randomBytes(t);
          };
        } catch (a) {}
    },
    810238: function (t, e, r) {
      var i = r(327172).Buffer;
      function n(t) {
        i.isBuffer(t) || (t = i.from(t));
        for (var e = (t.length / 4) | 0, r = new Array(e), n = 0; n < e; n++)
          r[n] = t.readUInt32BE(4 * n);
        return r;
      }
      function o(t) {
        for (; 0 < t.length; t++) t[0] = 0;
      }
      function a(t, e, r, i, n) {
        for (
          var o,
            a,
            s,
            f,
            h = r[0],
            u = r[1],
            d = r[2],
            c = r[3],
            l = t[0] ^ e[0],
            p = t[1] ^ e[1],
            b = t[2] ^ e[2],
            m = t[3] ^ e[3],
            g = 4,
            y = 1;
          y < n;
          y++
        )
          (o =
            h[l >>> 24] ^
            u[(p >>> 16) & 255] ^
            d[(b >>> 8) & 255] ^
            c[255 & m] ^
            e[g++]),
            (a =
              h[p >>> 24] ^
              u[(b >>> 16) & 255] ^
              d[(m >>> 8) & 255] ^
              c[255 & l] ^
              e[g++]),
            (s =
              h[b >>> 24] ^
              u[(m >>> 16) & 255] ^
              d[(l >>> 8) & 255] ^
              c[255 & p] ^
              e[g++]),
            (f =
              h[m >>> 24] ^
              u[(l >>> 16) & 255] ^
              d[(p >>> 8) & 255] ^
              c[255 & b] ^
              e[g++]),
            (l = o),
            (p = a),
            (b = s),
            (m = f);
        return (
          (o =
            ((i[l >>> 24] << 24) |
              (i[(p >>> 16) & 255] << 16) |
              (i[(b >>> 8) & 255] << 8) |
              i[255 & m]) ^
            e[g++]),
          (a =
            ((i[p >>> 24] << 24) |
              (i[(b >>> 16) & 255] << 16) |
              (i[(m >>> 8) & 255] << 8) |
              i[255 & l]) ^
            e[g++]),
          (s =
            ((i[b >>> 24] << 24) |
              (i[(m >>> 16) & 255] << 16) |
              (i[(l >>> 8) & 255] << 8) |
              i[255 & p]) ^
            e[g++]),
          (f =
            ((i[m >>> 24] << 24) |
              (i[(l >>> 16) & 255] << 16) |
              (i[(p >>> 8) & 255] << 8) |
              i[255 & b]) ^
            e[g++]),
          [(o >>>= 0), (a >>>= 0), (s >>>= 0), (f >>>= 0)]
        );
      }
      var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        f = (function () {
          for (var t = new Array(256), e = 0; e < 256; e++)
            t[e] = e < 128 ? e << 1 : (e << 1) ^ 283;
          for (
            var r = [],
              i = [],
              n = [[], [], [], []],
              o = [[], [], [], []],
              a = 0,
              s = 0,
              f = 0;
            f < 256;
            ++f
          ) {
            var h = s ^ (s << 1) ^ (s << 2) ^ (s << 3) ^ (s << 4);
            (h = (h >>> 8) ^ (255 & h) ^ 99), (r[a] = h), (i[h] = a);
            var u = t[a],
              d = t[u],
              c = t[d],
              l = (257 * t[h]) ^ (16843008 * h);
            (n[0][a] = (l << 24) | (l >>> 8)),
              (n[1][a] = (l << 16) | (l >>> 16)),
              (n[2][a] = (l << 8) | (l >>> 24)),
              (n[3][a] = l),
              (l = (16843009 * c) ^ (65537 * d) ^ (257 * u) ^ (16843008 * a)),
              (o[0][h] = (l << 24) | (l >>> 8)),
              (o[1][h] = (l << 16) | (l >>> 16)),
              (o[2][h] = (l << 8) | (l >>> 24)),
              (o[3][h] = l),
              0 === a
                ? (a = s = 1)
                : ((a = u ^ t[t[t[c ^ u]]]), (s ^= t[t[s]]));
          }
          return { SBOX: r, INV_SBOX: i, SUB_MIX: n, INV_SUB_MIX: o };
        })();
      function h(t) {
        (this._key = n(t)), this._reset();
      }
      (h.blockSize = 16),
        (h.keySize = 32),
        (h.prototype.blockSize = h.blockSize),
        (h.prototype.keySize = h.keySize),
        (h.prototype._reset = function () {
          for (
            var t = this._key,
              e = t.length,
              r = e + 6,
              i = 4 * (r + 1),
              n = [],
              o = 0;
            o < e;
            o++
          )
            n[o] = t[o];
          for (o = e; o < i; o++) {
            var a = n[o - 1];
            o % e === 0
              ? ((a = (a << 8) | (a >>> 24)),
                (a =
                  (f.SBOX[a >>> 24] << 24) |
                  (f.SBOX[(a >>> 16) & 255] << 16) |
                  (f.SBOX[(a >>> 8) & 255] << 8) |
                  f.SBOX[255 & a]),
                (a ^= s[(o / e) | 0] << 24))
              : e > 6 &&
                o % e === 4 &&
                (a =
                  (f.SBOX[a >>> 24] << 24) |
                  (f.SBOX[(a >>> 16) & 255] << 16) |
                  (f.SBOX[(a >>> 8) & 255] << 8) |
                  f.SBOX[255 & a]),
              (n[o] = n[o - e] ^ a);
          }
          for (var h = [], u = 0; u < i; u++) {
            var d = i - u,
              c = n[d - (u % 4 ? 0 : 4)];
            h[u] =
              u < 4 || d <= 4
                ? c
                : f.INV_SUB_MIX[0][f.SBOX[c >>> 24]] ^
                  f.INV_SUB_MIX[1][f.SBOX[(c >>> 16) & 255]] ^
                  f.INV_SUB_MIX[2][f.SBOX[(c >>> 8) & 255]] ^
                  f.INV_SUB_MIX[3][f.SBOX[255 & c]];
          }
          (this._nRounds = r),
            (this._keySchedule = n),
            (this._invKeySchedule = h);
        }),
        (h.prototype.encryptBlockRaw = function (t) {
          return a(
            (t = n(t)),
            this._keySchedule,
            f.SUB_MIX,
            f.SBOX,
            this._nRounds
          );
        }),
        (h.prototype.encryptBlock = function (t) {
          var e = this.encryptBlockRaw(t),
            r = i.allocUnsafe(16);
          return (
            r.writeUInt32BE(e[0], 0),
            r.writeUInt32BE(e[1], 4),
            r.writeUInt32BE(e[2], 8),
            r.writeUInt32BE(e[3], 12),
            r
          );
        }),
        (h.prototype.decryptBlock = function (t) {
          var e = (t = n(t))[1];
          (t[1] = t[3]), (t[3] = e);
          var r = a(
              t,
              this._invKeySchedule,
              f.INV_SUB_MIX,
              f.INV_SBOX,
              this._nRounds
            ),
            o = i.allocUnsafe(16);
          return (
            o.writeUInt32BE(r[0], 0),
            o.writeUInt32BE(r[3], 4),
            o.writeUInt32BE(r[2], 8),
            o.writeUInt32BE(r[1], 12),
            o
          );
        }),
        (h.prototype.scrub = function () {
          o(this._keySchedule), o(this._invKeySchedule), o(this._key);
        }),
        (t.exports.AES = h);
    },
    628587: function (t, e, r) {
      var i = r(810238),
        n = r(327172).Buffer,
        o = r(373081),
        a = r(270087),
        s = r(711219),
        f = r(357752),
        h = r(873480);
      function u(t, e, r, a) {
        o.call(this);
        var f = n.alloc(4, 0);
        this._cipher = new i.AES(e);
        var u = this._cipher.encryptBlock(f);
        (this._ghash = new s(u)),
          (r = (function (t, e, r) {
            if (12 === e.length)
              return (
                (t._finID = n.concat([e, n.from([0, 0, 0, 1])])),
                n.concat([e, n.from([0, 0, 0, 2])])
              );
            var i = new s(r),
              o = e.length,
              a = o % 16;
            i.update(e),
              a && ((a = 16 - a), i.update(n.alloc(a, 0))),
              i.update(n.alloc(8, 0));
            var f = 8 * o,
              u = n.alloc(8);
            u.writeUIntBE(f, 0, 8), i.update(u), (t._finID = i.state);
            var d = n.from(t._finID);
            return h(d), d;
          })(this, r, u)),
          (this._prev = n.from(r)),
          (this._cache = n.allocUnsafe(0)),
          (this._secCache = n.allocUnsafe(0)),
          (this._decrypt = a),
          (this._alen = 0),
          (this._len = 0),
          (this._mode = t),
          (this._authTag = null),
          (this._called = !1);
      }
      a(u, o),
        (u.prototype._update = function (t) {
          if (!this._called && this._alen) {
            var e = 16 - (this._alen % 16);
            e < 16 && ((e = n.alloc(e, 0)), this._ghash.update(e));
          }
          this._called = !0;
          var r = this._mode.encrypt(this, t);
          return (
            this._decrypt ? this._ghash.update(t) : this._ghash.update(r),
            (this._len += t.length),
            r
          );
        }),
        (u.prototype._final = function () {
          if (this._decrypt && !this._authTag)
            throw new Error("Unsupported state or unable to authenticate data");
          var t = f(
            this._ghash.final(8 * this._alen, 8 * this._len),
            this._cipher.encryptBlock(this._finID)
          );
          if (
            this._decrypt &&
            (function (t, e) {
              var r = 0;
              t.length !== e.length && r++;
              for (var i = Math.min(t.length, e.length), n = 0; n < i; ++n)
                r += t[n] ^ e[n];
              return r;
            })(t, this._authTag)
          )
            throw new Error("Unsupported state or unable to authenticate data");
          (this._authTag = t), this._cipher.scrub();
        }),
        (u.prototype.getAuthTag = function () {
          if (this._decrypt || !n.isBuffer(this._authTag))
            throw new Error("Attempting to get auth tag in unsupported state");
          return this._authTag;
        }),
        (u.prototype.setAuthTag = function (t) {
          if (!this._decrypt)
            throw new Error("Attempting to set auth tag in unsupported state");
          this._authTag = t;
        }),
        (u.prototype.setAAD = function (t) {
          if (this._called)
            throw new Error("Attempting to set AAD in unsupported state");
          this._ghash.update(t), (this._alen += t.length);
        }),
        (t.exports = u);
    },
    498901: function (t, e, r) {
      var i = r(713615),
        n = r(182576),
        o = r(574923);
      (e.createCipher = e.Cipher = i.createCipher),
        (e.createCipheriv = e.Cipheriv = i.createCipheriv),
        (e.createDecipher = e.Decipher = n.createDecipher),
        (e.createDecipheriv = e.Decipheriv = n.createDecipheriv),
        (e.listCiphers = e.getCiphers =
          function () {
            return Object.keys(o);
          });
    },
    182576: function (t, e, r) {
      var i = r(628587),
        n = r(327172).Buffer,
        o = r(633834),
        a = r(142385),
        s = r(373081),
        f = r(810238),
        h = r(955883);
      function u(t, e, r) {
        s.call(this),
          (this._cache = new d()),
          (this._last = void 0),
          (this._cipher = new f.AES(e)),
          (this._prev = n.from(r)),
          (this._mode = t),
          (this._autopadding = !0);
      }
      function d() {
        this.cache = n.allocUnsafe(0);
      }
      function c(t, e, r) {
        var s = o[t.toLowerCase()];
        if (!s) throw new TypeError("invalid suite type");
        if (
          ("string" === typeof r && (r = n.from(r)),
          "GCM" !== s.mode && r.length !== s.iv)
        )
          throw new TypeError("invalid iv length " + r.length);
        if (("string" === typeof e && (e = n.from(e)), e.length !== s.key / 8))
          throw new TypeError("invalid key length " + e.length);
        return "stream" === s.type
          ? new a(s.module, e, r, !0)
          : "auth" === s.type
          ? new i(s.module, e, r, !0)
          : new u(s.module, e, r);
      }
      r(270087)(u, s),
        (u.prototype._update = function (t) {
          var e, r;
          this._cache.add(t);
          for (var i = []; (e = this._cache.get(this._autopadding)); )
            (r = this._mode.decrypt(this, e)), i.push(r);
          return n.concat(i);
        }),
        (u.prototype._final = function () {
          var t = this._cache.flush();
          if (this._autopadding)
            return (function (t) {
              var e = t[15];
              if (e < 1 || e > 16) throw new Error("unable to decrypt data");
              var r = -1;
              for (; ++r < e; )
                if (t[r + (16 - e)] !== e)
                  throw new Error("unable to decrypt data");
              if (16 === e) return;
              return t.slice(0, 16 - e);
            })(this._mode.decrypt(this, t));
          if (t) throw new Error("data not multiple of block length");
        }),
        (u.prototype.setAutoPadding = function (t) {
          return (this._autopadding = !!t), this;
        }),
        (d.prototype.add = function (t) {
          this.cache = n.concat([this.cache, t]);
        }),
        (d.prototype.get = function (t) {
          var e;
          if (t) {
            if (this.cache.length > 16)
              return (
                (e = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                e
              );
          } else if (this.cache.length >= 16)
            return (
              (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              e
            );
          return null;
        }),
        (d.prototype.flush = function () {
          if (this.cache.length) return this.cache;
        }),
        (e.createDecipher = function (t, e) {
          var r = o[t.toLowerCase()];
          if (!r) throw new TypeError("invalid suite type");
          var i = h(e, !1, r.key, r.iv);
          return c(t, i.key, i.iv);
        }),
        (e.createDecipheriv = c);
    },
    713615: function (t, e, r) {
      var i = r(633834),
        n = r(628587),
        o = r(327172).Buffer,
        a = r(142385),
        s = r(373081),
        f = r(810238),
        h = r(955883);
      function u(t, e, r) {
        s.call(this),
          (this._cache = new c()),
          (this._cipher = new f.AES(e)),
          (this._prev = o.from(r)),
          (this._mode = t),
          (this._autopadding = !0);
      }
      r(270087)(u, s),
        (u.prototype._update = function (t) {
          var e, r;
          this._cache.add(t);
          for (var i = []; (e = this._cache.get()); )
            (r = this._mode.encrypt(this, e)), i.push(r);
          return o.concat(i);
        });
      var d = o.alloc(16, 16);
      function c() {
        this.cache = o.allocUnsafe(0);
      }
      function l(t, e, r) {
        var s = i[t.toLowerCase()];
        if (!s) throw new TypeError("invalid suite type");
        if (("string" === typeof e && (e = o.from(e)), e.length !== s.key / 8))
          throw new TypeError("invalid key length " + e.length);
        if (
          ("string" === typeof r && (r = o.from(r)),
          "GCM" !== s.mode && r.length !== s.iv)
        )
          throw new TypeError("invalid iv length " + r.length);
        return "stream" === s.type
          ? new a(s.module, e, r)
          : "auth" === s.type
          ? new n(s.module, e, r)
          : new u(s.module, e, r);
      }
      (u.prototype._final = function () {
        var t = this._cache.flush();
        if (this._autopadding)
          return (t = this._mode.encrypt(this, t)), this._cipher.scrub(), t;
        if (!t.equals(d))
          throw (
            (this._cipher.scrub(),
            new Error("data not multiple of block length"))
          );
      }),
        (u.prototype.setAutoPadding = function (t) {
          return (this._autopadding = !!t), this;
        }),
        (c.prototype.add = function (t) {
          this.cache = o.concat([this.cache, t]);
        }),
        (c.prototype.get = function () {
          if (this.cache.length > 15) {
            var t = this.cache.slice(0, 16);
            return (this.cache = this.cache.slice(16)), t;
          }
          return null;
        }),
        (c.prototype.flush = function () {
          for (
            var t = 16 - this.cache.length, e = o.allocUnsafe(t), r = -1;
            ++r < t;

          )
            e.writeUInt8(t, r);
          return o.concat([this.cache, e]);
        }),
        (e.createCipheriv = l),
        (e.createCipher = function (t, e) {
          var r = i[t.toLowerCase()];
          if (!r) throw new TypeError("invalid suite type");
          var n = h(e, !1, r.key, r.iv);
          return l(t, n.key, n.iv);
        });
    },
    711219: function (t, e, r) {
      var i = r(327172).Buffer,
        n = i.alloc(16, 0);
      function o(t) {
        var e = i.allocUnsafe(16);
        return (
          e.writeUInt32BE(t[0] >>> 0, 0),
          e.writeUInt32BE(t[1] >>> 0, 4),
          e.writeUInt32BE(t[2] >>> 0, 8),
          e.writeUInt32BE(t[3] >>> 0, 12),
          e
        );
      }
      function a(t) {
        (this.h = t),
          (this.state = i.alloc(16, 0)),
          (this.cache = i.allocUnsafe(0));
      }
      (a.prototype.ghash = function (t) {
        for (var e = -1; ++e < t.length; ) this.state[e] ^= t[e];
        this._multiply();
      }),
        (a.prototype._multiply = function () {
          for (
            var t,
              e,
              r,
              i = [
                (t = this.h).readUInt32BE(0),
                t.readUInt32BE(4),
                t.readUInt32BE(8),
                t.readUInt32BE(12),
              ],
              n = [0, 0, 0, 0],
              a = -1;
            ++a < 128;

          ) {
            for (
              0 !== (this.state[~~(a / 8)] & (1 << (7 - (a % 8)))) &&
                ((n[0] ^= i[0]),
                (n[1] ^= i[1]),
                (n[2] ^= i[2]),
                (n[3] ^= i[3])),
                r = 0 !== (1 & i[3]),
                e = 3;
              e > 0;
              e--
            )
              i[e] = (i[e] >>> 1) | ((1 & i[e - 1]) << 31);
            (i[0] = i[0] >>> 1), r && (i[0] = i[0] ^ (225 << 24));
          }
          this.state = o(n);
        }),
        (a.prototype.update = function (t) {
          var e;
          for (
            this.cache = i.concat([this.cache, t]);
            this.cache.length >= 16;

          )
            (e = this.cache.slice(0, 16)),
              (this.cache = this.cache.slice(16)),
              this.ghash(e);
        }),
        (a.prototype.final = function (t, e) {
          return (
            this.cache.length && this.ghash(i.concat([this.cache, n], 16)),
            this.ghash(o([0, t, 0, e])),
            this.state
          );
        }),
        (t.exports = a);
    },
    873480: function (t) {
      t.exports = function (t) {
        for (var e, r = t.length; r--; ) {
          if (255 !== (e = t.readUInt8(r))) {
            e++, t.writeUInt8(e, r);
            break;
          }
          t.writeUInt8(0, r);
        }
      };
    },
    116280: function (t, e, r) {
      var i = r(357752);
      (e.encrypt = function (t, e) {
        var r = i(e, t._prev);
        return (t._prev = t._cipher.encryptBlock(r)), t._prev;
      }),
        (e.decrypt = function (t, e) {
          var r = t._prev;
          t._prev = e;
          var n = t._cipher.decryptBlock(e);
          return i(n, r);
        });
    },
    360392: function (t, e, r) {
      var i = r(327172).Buffer,
        n = r(357752);
      function o(t, e, r) {
        var o = e.length,
          a = n(e, t._cache);
        return (
          (t._cache = t._cache.slice(o)),
          (t._prev = i.concat([t._prev, r ? e : a])),
          a
        );
      }
      e.encrypt = function (t, e, r) {
        for (var n, a = i.allocUnsafe(0); e.length; ) {
          if (
            (0 === t._cache.length &&
              ((t._cache = t._cipher.encryptBlock(t._prev)),
              (t._prev = i.allocUnsafe(0))),
            !(t._cache.length <= e.length))
          ) {
            a = i.concat([a, o(t, e, r)]);
            break;
          }
          (n = t._cache.length),
            (a = i.concat([a, o(t, e.slice(0, n), r)])),
            (e = e.slice(n));
        }
        return a;
      };
    },
    495739: function (t, e, r) {
      var i = r(327172).Buffer;
      function n(t, e, r) {
        for (var i, n, a = -1, s = 0; ++a < 8; )
          (i = e & (1 << (7 - a)) ? 128 : 0),
            (s +=
              (128 & (n = t._cipher.encryptBlock(t._prev)[0] ^ i)) >> a % 8),
            (t._prev = o(t._prev, r ? i : n));
        return s;
      }
      function o(t, e) {
        var r = t.length,
          n = -1,
          o = i.allocUnsafe(t.length);
        for (t = i.concat([t, i.from([e])]); ++n < r; )
          o[n] = (t[n] << 1) | (t[n + 1] >> 7);
        return o;
      }
      e.encrypt = function (t, e, r) {
        for (var o = e.length, a = i.allocUnsafe(o), s = -1; ++s < o; )
          a[s] = n(t, e[s], r);
        return a;
      };
    },
    412228: function (t, e, r) {
      var i = r(327172).Buffer;
      function n(t, e, r) {
        var n = t._cipher.encryptBlock(t._prev)[0] ^ e;
        return (t._prev = i.concat([t._prev.slice(1), i.from([r ? e : n])])), n;
      }
      e.encrypt = function (t, e, r) {
        for (var o = e.length, a = i.allocUnsafe(o), s = -1; ++s < o; )
          a[s] = n(t, e[s], r);
        return a;
      };
    },
    62751: function (t, e, r) {
      var i = r(357752),
        n = r(327172).Buffer,
        o = r(873480);
      function a(t) {
        var e = t._cipher.encryptBlockRaw(t._prev);
        return o(t._prev), e;
      }
      e.encrypt = function (t, e) {
        var r = Math.ceil(e.length / 16),
          o = t._cache.length;
        t._cache = n.concat([t._cache, n.allocUnsafe(16 * r)]);
        for (var s = 0; s < r; s++) {
          var f = a(t),
            h = o + 16 * s;
          t._cache.writeUInt32BE(f[0], h + 0),
            t._cache.writeUInt32BE(f[1], h + 4),
            t._cache.writeUInt32BE(f[2], h + 8),
            t._cache.writeUInt32BE(f[3], h + 12);
        }
        var u = t._cache.slice(0, e.length);
        return (t._cache = t._cache.slice(e.length)), i(e, u);
      };
    },
    572437: function (t, e) {
      (e.encrypt = function (t, e) {
        return t._cipher.encryptBlock(e);
      }),
        (e.decrypt = function (t, e) {
          return t._cipher.decryptBlock(e);
        });
    },
    633834: function (t, e, r) {
      var i = {
          ECB: r(572437),
          CBC: r(116280),
          CFB: r(360392),
          CFB8: r(412228),
          CFB1: r(495739),
          OFB: r(268494),
          CTR: r(62751),
          GCM: r(62751),
        },
        n = r(574923);
      for (var o in n) n[o].module = i[n[o].mode];
      t.exports = n;
    },
    268494: function (t, e, r) {
      var i = r(830816).Buffer,
        n = r(357752);
      function o(t) {
        return (t._prev = t._cipher.encryptBlock(t._prev)), t._prev;
      }
      e.encrypt = function (t, e) {
        for (; t._cache.length < e.length; )
          t._cache = i.concat([t._cache, o(t)]);
        var r = t._cache.slice(0, e.length);
        return (t._cache = t._cache.slice(e.length)), n(e, r);
      };
    },
    142385: function (t, e, r) {
      var i = r(810238),
        n = r(327172).Buffer,
        o = r(373081);
      function a(t, e, r, a) {
        o.call(this),
          (this._cipher = new i.AES(e)),
          (this._prev = n.from(r)),
          (this._cache = n.allocUnsafe(0)),
          (this._secCache = n.allocUnsafe(0)),
          (this._decrypt = a),
          (this._mode = t);
      }
      r(270087)(a, o),
        (a.prototype._update = function (t) {
          return this._mode.encrypt(this, t, this._decrypt);
        }),
        (a.prototype._final = function () {
          this._cipher.scrub();
        }),
        (t.exports = a);
    },
    811240: function (t, e, r) {
      var i = r(135681),
        n = r(498901),
        o = r(633834),
        a = r(471035),
        s = r(955883);
      function f(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return n.createCipheriv(t, e, r);
        if (a[t]) return new i({ key: e, iv: r, mode: t });
        throw new TypeError("invalid suite type");
      }
      function h(t, e, r) {
        if (((t = t.toLowerCase()), o[t])) return n.createDecipheriv(t, e, r);
        if (a[t]) return new i({ key: e, iv: r, mode: t, decrypt: !0 });
        throw new TypeError("invalid suite type");
      }
      (e.createCipher = e.Cipher =
        function (t, e) {
          var r, i;
          if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (i = o[t].iv);
          else {
            if (!a[t]) throw new TypeError("invalid suite type");
            (r = 8 * a[t].key), (i = a[t].iv);
          }
          var n = s(e, !1, r, i);
          return f(t, n.key, n.iv);
        }),
        (e.createCipheriv = e.Cipheriv = f),
        (e.createDecipher = e.Decipher =
          function (t, e) {
            var r, i;
            if (((t = t.toLowerCase()), o[t])) (r = o[t].key), (i = o[t].iv);
            else {
              if (!a[t]) throw new TypeError("invalid suite type");
              (r = 8 * a[t].key), (i = a[t].iv);
            }
            var n = s(e, !1, r, i);
            return h(t, n.key, n.iv);
          }),
        (e.createDecipheriv = e.Decipheriv = h),
        (e.listCiphers = e.getCiphers =
          function () {
            return Object.keys(a).concat(n.getCiphers());
          });
    },
    135681: function (t, e, r) {
      var i = r(373081),
        n = r(427191),
        o = r(270087),
        a = r(327172).Buffer,
        s = {
          "des-ede3-cbc": n.CBC.instantiate(n.EDE),
          "des-ede3": n.EDE,
          "des-ede-cbc": n.CBC.instantiate(n.EDE),
          "des-ede": n.EDE,
          "des-cbc": n.CBC.instantiate(n.DES),
          "des-ecb": n.DES,
        };
      function f(t) {
        i.call(this);
        var e,
          r = t.mode.toLowerCase(),
          n = s[r];
        e = t.decrypt ? "decrypt" : "encrypt";
        var o = t.key;
        a.isBuffer(o) || (o = a.from(o)),
          ("des-ede" !== r && "des-ede-cbc" !== r) ||
            (o = a.concat([o, o.slice(0, 8)]));
        var f = t.iv;
        a.isBuffer(f) || (f = a.from(f)),
          (this._des = n.create({ key: o, iv: f, type: e }));
      }
      (s.des = s["des-cbc"]),
        (s.des3 = s["des-ede3-cbc"]),
        (t.exports = f),
        o(f, i),
        (f.prototype._update = function (t) {
          return a.from(this._des.update(t));
        }),
        (f.prototype._final = function () {
          return a.from(this._des.final());
        });
    },
    471035: function (t, e) {
      (e["des-ecb"] = { key: 8, iv: 0 }),
        (e["des-cbc"] = e.des = { key: 8, iv: 8 }),
        (e["des-ede3-cbc"] = e.des3 = { key: 24, iv: 8 }),
        (e["des-ede3"] = { key: 24, iv: 0 }),
        (e["des-ede-cbc"] = { key: 16, iv: 8 }),
        (e["des-ede"] = { key: 16, iv: 0 });
    },
    317354: function (t, e, r) {
      var i = r(830816).Buffer,
        n = r(25647),
        o = r(952830);
      function a(t) {
        var e,
          r = t.modulus.byteLength();
        do {
          e = new n(o(r));
        } while (
          e.cmp(t.modulus) >= 0 ||
          !e.umod(t.prime1) ||
          !e.umod(t.prime2)
        );
        return e;
      }
      function s(t, e) {
        var r = (function (t) {
            var e = a(t);
            return {
              blinder: e
                .toRed(n.mont(t.modulus))
                .redPow(new n(t.publicExponent))
                .fromRed(),
              unblinder: e.invm(t.modulus),
            };
          })(e),
          o = e.modulus.byteLength(),
          s = new n(t).mul(r.blinder).umod(e.modulus),
          f = s.toRed(n.mont(e.prime1)),
          h = s.toRed(n.mont(e.prime2)),
          u = e.coefficient,
          d = e.prime1,
          c = e.prime2,
          l = f.redPow(e.exponent1).fromRed(),
          p = h.redPow(e.exponent2).fromRed(),
          b = l.isub(p).imul(u).umod(d).imul(c);
        return p
          .iadd(b)
          .imul(r.unblinder)
          .umod(e.modulus)
          .toArrayLike(i, "be", o);
      }
      (s.getr = a), (t.exports = s);
    },
    25647: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function i(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function n(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var a;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          a =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(578028).Buffer;
        } catch (x) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void i(!1, "Invalid character in " + t);
        }
        function f(t, e, r) {
          var i = s(t, r);
          return r - 1 >= e && (i |= s(t, r - 1) << 4), i;
        }
        function h(t, e, r, n) {
          for (var o = 0, a = 0, s = Math.min(t.length, r), f = e; f < s; f++) {
            var h = t.charCodeAt(f) - 48;
            (o *= n),
              (a = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
              i(h >= 0 && a < n, "Invalid character"),
              (o += a);
          }
          return o;
        }
        function u(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === e
                  ? this._parseHex(t, n, r)
                  : (this._parseBase(t, e, n),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (i(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((i("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o,
              a,
              s = 0;
            if ("be" === r)
              for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                (a = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === r)
              for (n = 0, o = 0; n < t.length; n += 3)
                (a = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n,
              o = 0,
              a = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = f(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 === 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = f(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
            i--, (n = (n / e) | 0);
            for (
              var o = t.length - r,
                a = o % i,
                s = Math.min(o, o - a) + r,
                f = 0,
                u = r;
              u < s;
              u += i
            )
              (f = h(t, u, u + i, e)),
                this.imuln(n),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== a) {
              var d = 1;
              for (f = h(t, u, t.length, e), u = 0; u < a; u++) d *= e;
              this.imuln(d),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            u(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = d;
          } catch (x) {
            o.prototype.inspect = d;
          }
        else o.prototype.inspect = d;
        function d() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          l = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var n = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (16777215 & ((s << n) | o)).toString(16);
              (o = (s >>> (24 - n)) & 16777215),
                (n += 2) >= 26 && ((n -= 26), a--),
                (r =
                  0 !== o || a !== this.length - 1
                    ? c[6 - f.length] + f + r
                    : f + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = l[t],
              u = p[t];
            r = "";
            var d = this.clone();
            for (d.negative = 0; !d.isZero(); ) {
              var b = d.modrn(u).toString(t);
              r = (d = d.idivn(u)).isZero() ? b + r : c[h - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          i(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(a, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          });
        function b(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var i = (t.length + e.length) | 0;
          (r.length = i), (i = (i - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | e.words[0],
            a = n * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var h = 1; h < i; h++) {
            for (
              var u = f >>> 26,
                d = 67108863 & f,
                c = Math.min(h, e.length - 1),
                l = Math.max(0, h - t.length + 1);
              l <= c;
              l++
            ) {
              var p = (h - l) | 0;
              (u +=
                ((a = (n = 0 | t.words[p]) * (o = 0 | e.words[l]) + d) /
                  67108864) |
                0),
                (d = 67108863 & a);
            }
            (r.words[h] = 0 | d), (f = 0 | u);
          }
          return 0 !== f ? (r.words[h] = 0 | f) : r.length--, r._strip();
        }
        (o.prototype.toArrayLike = function (t, e, r) {
          this._strip();
          var n = this.byteLength(),
            o = r || Math.max(1, n);
          i(n <= o, "byte array longer than desired length"),
            i(o > 0, "Requested array length <= 0");
          var a = (function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          })(t, o);
          return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, n), a;
        }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
              var a = (this.words[n] << o) | i;
              (t[r++] = 255 & a),
                r < t.length && (t[r++] = (a >> 8) & 255),
                r < t.length && (t[r++] = (a >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (a >> 24) & 255),
                    (i = 0),
                    (o = 0))
                  : ((i = a >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = i; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, i = 0, n = 0, o = 0;
              n < this.length;
              n++
            ) {
              var a = (this.words[n] << o) | i;
              (t[r--] = 255 & a),
                r >= 0 && (t[r--] = (a >> 8) & 255),
                r >= 0 && (t[r--] = (a >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (a >> 24) & 255), (i = 0), (o = 0))
                  : ((i = a >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = i; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var i = 0; i < r.length; i++)
              this.words[i] = e.words[i] ^ r.words[i];
            if (this !== e)
              for (; i < e.length; i++) this.words[i] = e.words[i];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var n = 0; n < e; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              r > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            i("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << n)
                : this.words[r] & ~(1 << n)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, i;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (i = t))
              : ((r = t), (i = this));
            for (var n = 0, o = 0; o < i.length; o++)
              (e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            for (; 0 !== n && o < r.length; o++)
              (e = (0 | r.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              i,
              n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
            for (var o = 0, a = 0; a < i.length; a++)
              (o = (e = (0 | r.words[a]) - (0 | i.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            for (; 0 !== o && a < r.length; a++)
              (o = (e = (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            if (0 === o && a < r.length && r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, e, r) {
          var i,
            n,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            h = 0,
            u = 0 | a[0],
            d = 8191 & u,
            c = u >>> 13,
            l = 0 | a[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | a[2],
            g = 8191 & m,
            y = m >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            _ = v >>> 13,
            M = 0 | a[4],
            S = 8191 & M,
            E = M >>> 13,
            k = 0 | a[5],
            A = 8191 & k,
            R = k >>> 13,
            x = 0 | a[6],
            B = 8191 & x,
            I = x >>> 13,
            T = 0 | a[7],
            P = 8191 & T,
            j = T >>> 13,
            O = 0 | a[8],
            C = 8191 & O,
            L = O >>> 13,
            N = 0 | a[9],
            D = 8191 & N,
            q = N >>> 13,
            U = 0 | s[0],
            z = 8191 & U,
            H = U >>> 13,
            K = 0 | s[1],
            F = 8191 & K,
            W = K >>> 13,
            V = 0 | s[2],
            Z = 8191 & V,
            G = V >>> 13,
            X = 0 | s[3],
            Y = 8191 & X,
            J = X >>> 13,
            $ = 0 | s[4],
            Q = 8191 & $,
            tt = $ >>> 13,
            et = 0 | s[5],
            rt = 8191 & et,
            it = et >>> 13,
            nt = 0 | s[6],
            ot = 8191 & nt,
            at = nt >>> 13,
            st = 0 | s[7],
            ft = 8191 & st,
            ht = st >>> 13,
            ut = 0 | s[8],
            dt = 8191 & ut,
            ct = ut >>> 13,
            lt = 0 | s[9],
            pt = 8191 & lt,
            bt = lt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var mt =
            (((h + (i = Math.imul(d, z))) | 0) +
              ((8191 & (n = ((n = Math.imul(d, H)) + Math.imul(c, z)) | 0)) <<
                13)) |
            0;
          (h = ((((o = Math.imul(c, H)) + (n >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (i = Math.imul(p, z)),
            (n = ((n = Math.imul(p, H)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, H));
          var gt =
            (((h + (i = (i + Math.imul(d, F)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, W)) | 0) + Math.imul(c, F)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, W)) | 0) + (n >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (i = Math.imul(g, z)),
            (n = ((n = Math.imul(g, H)) + Math.imul(y, z)) | 0),
            (o = Math.imul(y, H)),
            (i = (i + Math.imul(p, F)) | 0),
            (n = ((n = (n + Math.imul(p, W)) | 0) + Math.imul(b, F)) | 0),
            (o = (o + Math.imul(b, W)) | 0);
          var yt =
            (((h + (i = (i + Math.imul(d, Z)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, G)) | 0) + Math.imul(c, Z)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, G)) | 0) + (n >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (i = Math.imul(w, z)),
            (n = ((n = Math.imul(w, H)) + Math.imul(_, z)) | 0),
            (o = Math.imul(_, H)),
            (i = (i + Math.imul(g, F)) | 0),
            (n = ((n = (n + Math.imul(g, W)) | 0) + Math.imul(y, F)) | 0),
            (o = (o + Math.imul(y, W)) | 0),
            (i = (i + Math.imul(p, Z)) | 0),
            (n = ((n = (n + Math.imul(p, G)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, G)) | 0);
          var vt =
            (((h + (i = (i + Math.imul(d, Y)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, J)) | 0) + Math.imul(c, Y)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, J)) | 0) + (n >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (i = Math.imul(S, z)),
            (n = ((n = Math.imul(S, H)) + Math.imul(E, z)) | 0),
            (o = Math.imul(E, H)),
            (i = (i + Math.imul(w, F)) | 0),
            (n = ((n = (n + Math.imul(w, W)) | 0) + Math.imul(_, F)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (i = (i + Math.imul(g, Z)) | 0),
            (n = ((n = (n + Math.imul(g, G)) | 0) + Math.imul(y, Z)) | 0),
            (o = (o + Math.imul(y, G)) | 0),
            (i = (i + Math.imul(p, Y)) | 0),
            (n = ((n = (n + Math.imul(p, J)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var wt =
            (((h + (i = (i + Math.imul(d, Q)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, tt)) | 0) + Math.imul(c, Q)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tt)) | 0) + (n >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (i = Math.imul(A, z)),
            (n = ((n = Math.imul(A, H)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, H)),
            (i = (i + Math.imul(S, F)) | 0),
            (n = ((n = (n + Math.imul(S, W)) | 0) + Math.imul(E, F)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (i = (i + Math.imul(w, Z)) | 0),
            (n = ((n = (n + Math.imul(w, G)) | 0) + Math.imul(_, Z)) | 0),
            (o = (o + Math.imul(_, G)) | 0),
            (i = (i + Math.imul(g, Y)) | 0),
            (n = ((n = (n + Math.imul(g, J)) | 0) + Math.imul(y, Y)) | 0),
            (o = (o + Math.imul(y, J)) | 0),
            (i = (i + Math.imul(p, Q)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var _t =
            (((h + (i = (i + Math.imul(d, rt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, it)) | 0) + Math.imul(c, rt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, it)) | 0) + (n >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (i = Math.imul(B, z)),
            (n = ((n = Math.imul(B, H)) + Math.imul(I, z)) | 0),
            (o = Math.imul(I, H)),
            (i = (i + Math.imul(A, F)) | 0),
            (n = ((n = (n + Math.imul(A, W)) | 0) + Math.imul(R, F)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (i = (i + Math.imul(S, Z)) | 0),
            (n = ((n = (n + Math.imul(S, G)) | 0) + Math.imul(E, Z)) | 0),
            (o = (o + Math.imul(E, G)) | 0),
            (i = (i + Math.imul(w, Y)) | 0),
            (n = ((n = (n + Math.imul(w, J)) | 0) + Math.imul(_, Y)) | 0),
            (o = (o + Math.imul(_, J)) | 0),
            (i = (i + Math.imul(g, Q)) | 0),
            (n = ((n = (n + Math.imul(g, tt)) | 0) + Math.imul(y, Q)) | 0),
            (o = (o + Math.imul(y, tt)) | 0),
            (i = (i + Math.imul(p, rt)) | 0),
            (n = ((n = (n + Math.imul(p, it)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, it)) | 0);
          var Mt =
            (((h + (i = (i + Math.imul(d, ot)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, at)) | 0) + Math.imul(c, ot)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, at)) | 0) + (n >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (i = Math.imul(P, z)),
            (n = ((n = Math.imul(P, H)) + Math.imul(j, z)) | 0),
            (o = Math.imul(j, H)),
            (i = (i + Math.imul(B, F)) | 0),
            (n = ((n = (n + Math.imul(B, W)) | 0) + Math.imul(I, F)) | 0),
            (o = (o + Math.imul(I, W)) | 0),
            (i = (i + Math.imul(A, Z)) | 0),
            (n = ((n = (n + Math.imul(A, G)) | 0) + Math.imul(R, Z)) | 0),
            (o = (o + Math.imul(R, G)) | 0),
            (i = (i + Math.imul(S, Y)) | 0),
            (n = ((n = (n + Math.imul(S, J)) | 0) + Math.imul(E, Y)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (i = (i + Math.imul(w, Q)) | 0),
            (n = ((n = (n + Math.imul(w, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (i = (i + Math.imul(g, rt)) | 0),
            (n = ((n = (n + Math.imul(g, it)) | 0) + Math.imul(y, rt)) | 0),
            (o = (o + Math.imul(y, it)) | 0),
            (i = (i + Math.imul(p, ot)) | 0),
            (n = ((n = (n + Math.imul(p, at)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, at)) | 0);
          var St =
            (((h + (i = (i + Math.imul(d, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ht)) | 0) + Math.imul(c, ft)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ht)) | 0) + (n >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (i = Math.imul(C, z)),
            (n = ((n = Math.imul(C, H)) + Math.imul(L, z)) | 0),
            (o = Math.imul(L, H)),
            (i = (i + Math.imul(P, F)) | 0),
            (n = ((n = (n + Math.imul(P, W)) | 0) + Math.imul(j, F)) | 0),
            (o = (o + Math.imul(j, W)) | 0),
            (i = (i + Math.imul(B, Z)) | 0),
            (n = ((n = (n + Math.imul(B, G)) | 0) + Math.imul(I, Z)) | 0),
            (o = (o + Math.imul(I, G)) | 0),
            (i = (i + Math.imul(A, Y)) | 0),
            (n = ((n = (n + Math.imul(A, J)) | 0) + Math.imul(R, Y)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (i = (i + Math.imul(S, Q)) | 0),
            (n = ((n = (n + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (i = (i + Math.imul(w, rt)) | 0),
            (n = ((n = (n + Math.imul(w, it)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, it)) | 0),
            (i = (i + Math.imul(g, ot)) | 0),
            (n = ((n = (n + Math.imul(g, at)) | 0) + Math.imul(y, ot)) | 0),
            (o = (o + Math.imul(y, at)) | 0),
            (i = (i + Math.imul(p, ft)) | 0),
            (n = ((n = (n + Math.imul(p, ht)) | 0) + Math.imul(b, ft)) | 0),
            (o = (o + Math.imul(b, ht)) | 0);
          var Et =
            (((h + (i = (i + Math.imul(d, dt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ct)) | 0) + Math.imul(c, dt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ct)) | 0) + (n >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (i = Math.imul(D, z)),
            (n = ((n = Math.imul(D, H)) + Math.imul(q, z)) | 0),
            (o = Math.imul(q, H)),
            (i = (i + Math.imul(C, F)) | 0),
            (n = ((n = (n + Math.imul(C, W)) | 0) + Math.imul(L, F)) | 0),
            (o = (o + Math.imul(L, W)) | 0),
            (i = (i + Math.imul(P, Z)) | 0),
            (n = ((n = (n + Math.imul(P, G)) | 0) + Math.imul(j, Z)) | 0),
            (o = (o + Math.imul(j, G)) | 0),
            (i = (i + Math.imul(B, Y)) | 0),
            (n = ((n = (n + Math.imul(B, J)) | 0) + Math.imul(I, Y)) | 0),
            (o = (o + Math.imul(I, J)) | 0),
            (i = (i + Math.imul(A, Q)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (i = (i + Math.imul(S, rt)) | 0),
            (n = ((n = (n + Math.imul(S, it)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, it)) | 0),
            (i = (i + Math.imul(w, ot)) | 0),
            (n = ((n = (n + Math.imul(w, at)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, at)) | 0),
            (i = (i + Math.imul(g, ft)) | 0),
            (n = ((n = (n + Math.imul(g, ht)) | 0) + Math.imul(y, ft)) | 0),
            (o = (o + Math.imul(y, ht)) | 0),
            (i = (i + Math.imul(p, dt)) | 0),
            (n = ((n = (n + Math.imul(p, ct)) | 0) + Math.imul(b, dt)) | 0),
            (o = (o + Math.imul(b, ct)) | 0);
          var kt =
            (((h + (i = (i + Math.imul(d, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, bt)) | 0) + Math.imul(c, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, bt)) | 0) + (n >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (i = Math.imul(D, F)),
            (n = ((n = Math.imul(D, W)) + Math.imul(q, F)) | 0),
            (o = Math.imul(q, W)),
            (i = (i + Math.imul(C, Z)) | 0),
            (n = ((n = (n + Math.imul(C, G)) | 0) + Math.imul(L, Z)) | 0),
            (o = (o + Math.imul(L, G)) | 0),
            (i = (i + Math.imul(P, Y)) | 0),
            (n = ((n = (n + Math.imul(P, J)) | 0) + Math.imul(j, Y)) | 0),
            (o = (o + Math.imul(j, J)) | 0),
            (i = (i + Math.imul(B, Q)) | 0),
            (n = ((n = (n + Math.imul(B, tt)) | 0) + Math.imul(I, Q)) | 0),
            (o = (o + Math.imul(I, tt)) | 0),
            (i = (i + Math.imul(A, rt)) | 0),
            (n = ((n = (n + Math.imul(A, it)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, it)) | 0),
            (i = (i + Math.imul(S, ot)) | 0),
            (n = ((n = (n + Math.imul(S, at)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, at)) | 0),
            (i = (i + Math.imul(w, ft)) | 0),
            (n = ((n = (n + Math.imul(w, ht)) | 0) + Math.imul(_, ft)) | 0),
            (o = (o + Math.imul(_, ht)) | 0),
            (i = (i + Math.imul(g, dt)) | 0),
            (n = ((n = (n + Math.imul(g, ct)) | 0) + Math.imul(y, dt)) | 0),
            (o = (o + Math.imul(y, ct)) | 0);
          var At =
            (((h + (i = (i + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(b, bt)) | 0) + (n >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (i = Math.imul(D, Z)),
            (n = ((n = Math.imul(D, G)) + Math.imul(q, Z)) | 0),
            (o = Math.imul(q, G)),
            (i = (i + Math.imul(C, Y)) | 0),
            (n = ((n = (n + Math.imul(C, J)) | 0) + Math.imul(L, Y)) | 0),
            (o = (o + Math.imul(L, J)) | 0),
            (i = (i + Math.imul(P, Q)) | 0),
            (n = ((n = (n + Math.imul(P, tt)) | 0) + Math.imul(j, Q)) | 0),
            (o = (o + Math.imul(j, tt)) | 0),
            (i = (i + Math.imul(B, rt)) | 0),
            (n = ((n = (n + Math.imul(B, it)) | 0) + Math.imul(I, rt)) | 0),
            (o = (o + Math.imul(I, it)) | 0),
            (i = (i + Math.imul(A, ot)) | 0),
            (n = ((n = (n + Math.imul(A, at)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, at)) | 0),
            (i = (i + Math.imul(S, ft)) | 0),
            (n = ((n = (n + Math.imul(S, ht)) | 0) + Math.imul(E, ft)) | 0),
            (o = (o + Math.imul(E, ht)) | 0),
            (i = (i + Math.imul(w, dt)) | 0),
            (n = ((n = (n + Math.imul(w, ct)) | 0) + Math.imul(_, dt)) | 0),
            (o = (o + Math.imul(_, ct)) | 0);
          var Rt =
            (((h + (i = (i + Math.imul(g, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(g, bt)) | 0) + Math.imul(y, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(y, bt)) | 0) + (n >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (i = Math.imul(D, Y)),
            (n = ((n = Math.imul(D, J)) + Math.imul(q, Y)) | 0),
            (o = Math.imul(q, J)),
            (i = (i + Math.imul(C, Q)) | 0),
            (n = ((n = (n + Math.imul(C, tt)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (i = (i + Math.imul(P, rt)) | 0),
            (n = ((n = (n + Math.imul(P, it)) | 0) + Math.imul(j, rt)) | 0),
            (o = (o + Math.imul(j, it)) | 0),
            (i = (i + Math.imul(B, ot)) | 0),
            (n = ((n = (n + Math.imul(B, at)) | 0) + Math.imul(I, ot)) | 0),
            (o = (o + Math.imul(I, at)) | 0),
            (i = (i + Math.imul(A, ft)) | 0),
            (n = ((n = (n + Math.imul(A, ht)) | 0) + Math.imul(R, ft)) | 0),
            (o = (o + Math.imul(R, ht)) | 0),
            (i = (i + Math.imul(S, dt)) | 0),
            (n = ((n = (n + Math.imul(S, ct)) | 0) + Math.imul(E, dt)) | 0),
            (o = (o + Math.imul(E, ct)) | 0);
          var xt =
            (((h + (i = (i + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, bt)) | 0) + Math.imul(_, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(_, bt)) | 0) + (n >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (i = Math.imul(D, Q)),
            (n = ((n = Math.imul(D, tt)) + Math.imul(q, Q)) | 0),
            (o = Math.imul(q, tt)),
            (i = (i + Math.imul(C, rt)) | 0),
            (n = ((n = (n + Math.imul(C, it)) | 0) + Math.imul(L, rt)) | 0),
            (o = (o + Math.imul(L, it)) | 0),
            (i = (i + Math.imul(P, ot)) | 0),
            (n = ((n = (n + Math.imul(P, at)) | 0) + Math.imul(j, ot)) | 0),
            (o = (o + Math.imul(j, at)) | 0),
            (i = (i + Math.imul(B, ft)) | 0),
            (n = ((n = (n + Math.imul(B, ht)) | 0) + Math.imul(I, ft)) | 0),
            (o = (o + Math.imul(I, ht)) | 0),
            (i = (i + Math.imul(A, dt)) | 0),
            (n = ((n = (n + Math.imul(A, ct)) | 0) + Math.imul(R, dt)) | 0),
            (o = (o + Math.imul(R, ct)) | 0);
          var Bt =
            (((h + (i = (i + Math.imul(S, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(S, bt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(E, bt)) | 0) + (n >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (i = Math.imul(D, rt)),
            (n = ((n = Math.imul(D, it)) + Math.imul(q, rt)) | 0),
            (o = Math.imul(q, it)),
            (i = (i + Math.imul(C, ot)) | 0),
            (n = ((n = (n + Math.imul(C, at)) | 0) + Math.imul(L, ot)) | 0),
            (o = (o + Math.imul(L, at)) | 0),
            (i = (i + Math.imul(P, ft)) | 0),
            (n = ((n = (n + Math.imul(P, ht)) | 0) + Math.imul(j, ft)) | 0),
            (o = (o + Math.imul(j, ht)) | 0),
            (i = (i + Math.imul(B, dt)) | 0),
            (n = ((n = (n + Math.imul(B, ct)) | 0) + Math.imul(I, dt)) | 0),
            (o = (o + Math.imul(I, ct)) | 0);
          var It =
            (((h + (i = (i + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, bt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(R, bt)) | 0) + (n >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (i = Math.imul(D, ot)),
            (n = ((n = Math.imul(D, at)) + Math.imul(q, ot)) | 0),
            (o = Math.imul(q, at)),
            (i = (i + Math.imul(C, ft)) | 0),
            (n = ((n = (n + Math.imul(C, ht)) | 0) + Math.imul(L, ft)) | 0),
            (o = (o + Math.imul(L, ht)) | 0),
            (i = (i + Math.imul(P, dt)) | 0),
            (n = ((n = (n + Math.imul(P, ct)) | 0) + Math.imul(j, dt)) | 0),
            (o = (o + Math.imul(j, ct)) | 0);
          var Tt =
            (((h + (i = (i + Math.imul(B, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(B, bt)) | 0) + Math.imul(I, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(I, bt)) | 0) + (n >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (i = Math.imul(D, ft)),
            (n = ((n = Math.imul(D, ht)) + Math.imul(q, ft)) | 0),
            (o = Math.imul(q, ht)),
            (i = (i + Math.imul(C, dt)) | 0),
            (n = ((n = (n + Math.imul(C, ct)) | 0) + Math.imul(L, dt)) | 0),
            (o = (o + Math.imul(L, ct)) | 0);
          var Pt =
            (((h + (i = (i + Math.imul(P, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(P, bt)) | 0) + Math.imul(j, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(j, bt)) | 0) + (n >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863),
            (i = Math.imul(D, dt)),
            (n = ((n = Math.imul(D, ct)) + Math.imul(q, dt)) | 0),
            (o = Math.imul(q, ct));
          var jt =
            (((h + (i = (i + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(C, bt)) | 0) + Math.imul(L, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(L, bt)) | 0) + (n >>> 13)) | 0) +
              (jt >>> 26)) |
            0),
            (jt &= 67108863);
          var Ot =
            (((h + (i = Math.imul(D, pt))) | 0) +
              ((8191 & (n = ((n = Math.imul(D, bt)) + Math.imul(q, pt)) | 0)) <<
                13)) |
            0;
          return (
            (h =
              ((((o = Math.imul(q, bt)) + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
            (Ot &= 67108863),
            (f[0] = mt),
            (f[1] = gt),
            (f[2] = yt),
            (f[3] = vt),
            (f[4] = wt),
            (f[5] = _t),
            (f[6] = Mt),
            (f[7] = St),
            (f[8] = Et),
            (f[9] = kt),
            (f[10] = At),
            (f[11] = Rt),
            (f[12] = xt),
            (f[13] = Bt),
            (f[14] = It),
            (f[15] = Tt),
            (f[16] = Pt),
            (f[17] = jt),
            (f[18] = Ot),
            0 !== h && ((f[19] = h), r.length++),
            r
          );
        };
        function g(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
            var a = n;
            n = 0;
            for (
              var s = 67108863 & i,
                f = Math.min(o, e.length - 1),
                h = Math.max(0, o - t.length + 1);
              h <= f;
              h++
            ) {
              var u = o - h,
                d = (0 | t.words[u]) * (0 | e.words[h]),
                c = 67108863 & d;
              (s = 67108863 & (c = (c + s) | 0)),
                (n +=
                  (a =
                    ((a = (a + ((d / 67108864) | 0)) | 0) + (c >>> 26)) | 0) >>>
                  26),
                (a &= 67108863);
            }
            (r.words[o] = s), (i = a), (a = n);
          }
          return 0 !== i ? (r.words[o] = i) : r.length--, r._strip();
        }
        function y(t, e, r) {
          return g(t, e, r);
        }
        function v(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (m = b),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : r < 63
              ? b(this, t, e)
              : r < 1024
              ? g(this, t, e)
              : y(this, t, e);
          }),
          (v.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
              i < t;
              i++
            )
              e[i] = this.revBin(i, r, t);
            return e;
          }),
          (v.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var i = 0, n = 0; n < e; n++)
              (i |= (1 & t) << (e - n - 1)), (t >>= 1);
            return i;
          }),
          (v.prototype.permute = function (t, e, r, i, n, o) {
            for (var a = 0; a < o; a++) (i[a] = e[t[a]]), (n[a] = r[t[a]]);
          }),
          (v.prototype.transform = function (t, e, r, i, n, o) {
            this.permute(o, t, e, r, i, n);
            for (var a = 1; a < n; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  h = Math.sin((2 * Math.PI) / s),
                  u = 0;
                u < n;
                u += s
              )
                for (var d = f, c = h, l = 0; l < a; l++) {
                  var p = r[u + l],
                    b = i[u + l],
                    m = r[u + l + a],
                    g = i[u + l + a],
                    y = d * m - c * g;
                  (g = d * g + c * m),
                    (m = y),
                    (r[u + l] = p + m),
                    (i[u + l] = b + g),
                    (r[u + l + a] = p - m),
                    (i[u + l + a] = b - g),
                    l !== s &&
                      ((y = f * d - h * c), (c = f * c + h * d), (d = y));
                }
          }),
          (v.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              i = 1 & r,
              n = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) n++;
            return 1 << (n + 1 + i);
          }),
          (v.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var i = 0; i < r / 2; i++) {
                var n = t[i];
                (t[i] = t[r - i - 1]),
                  (t[r - i - 1] = n),
                  (n = e[i]),
                  (e[i] = -e[r - i - 1]),
                  (e[r - i - 1] = -n);
              }
          }),
          (v.prototype.normalize13b = function (t, e) {
            for (var r = 0, i = 0; i < e / 2; i++) {
              var n =
                8192 * Math.round(t[2 * i + 1] / e) +
                Math.round(t[2 * i] / e) +
                r;
              (t[i] = 67108863 & n),
                (r = n < 67108864 ? 0 : (n / 67108864) | 0);
            }
            return t;
          }),
          (v.prototype.convert13b = function (t, e, r, n) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < n; ++a) r[a] = 0;
            i(0 === o), i(0 === (-8192 & o));
          }),
          (v.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (v.prototype.mulp = function (t, e, r) {
            var i = 2 * this.guessLen13b(t.length, e.length),
              n = this.makeRBT(i),
              o = this.stub(i),
              a = new Array(i),
              s = new Array(i),
              f = new Array(i),
              h = new Array(i),
              u = new Array(i),
              d = new Array(i),
              c = r.words;
            (c.length = i),
              this.convert13b(t.words, t.length, a, i),
              this.convert13b(e.words, e.length, h, i),
              this.transform(a, o, s, f, i, n),
              this.transform(h, o, u, d, i, n);
            for (var l = 0; l < i; l++) {
              var p = s[l] * u[l] - f[l] * d[l];
              (f[l] = s[l] * d[l] + f[l] * u[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, f, i),
              this.transform(s, f, c, o, i, n),
              this.conjugate(c, o, i),
              this.normalize13b(c, i),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), i("number" === typeof t), i(t < 67108864);
            for (var r = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                a = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += (o / 67108864) | 0),
                (r += a >>> 26),
                (this.words[n] = 67108863 & a);
            }
            return (
              0 !== r && ((this.words[n] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var i = (r / 26) | 0,
                  n = r % 26;
                e[r] = (t.words[i] >>> n) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, i = 0;
              i < e.length && 0 === e[i];
              i++, r = r.sqr()
            );
            if (++i < e.length)
              for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                0 !== e[i] && (r = r.mul(n));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            i("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              n = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== n) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + n] = this.words[e];
              for (e = 0; e < n; e++) this.words[e] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return i(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var n;
            i("number" === typeof t && t >= 0),
              (n = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((n -= a), (n = Math.max(0, n)), f)) {
              for (var h = 0; h < a; h++) f.words[h] = this.words[h];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, h = 0; h < this.length; h++)
                this.words[h] = this.words[h + a];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (h = this.length - 1; h >= 0 && (0 !== u || h >= n); h--) {
              var d = 0 | this.words[h];
              (this.words[h] = (u << (26 - o)) | (d >>> o)), (u = d & s);
            }
            return (
              f && 0 !== u && (f.words[f.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return i(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              n = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & n);
          }),
          (o.prototype.imaskn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (i(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var n = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= n;
            }
            return this._strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              i("number" === typeof t),
              i(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((i("number" === typeof t), i(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var n,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (n = 0; n < t.length; n++) {
              o = (0 | this.words[n + r]) + s;
              var f = (0 | t.words[n]) * e;
              (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                (this.words[n + r] = 67108863 & o);
            }
            for (; n < this.length - r; n++)
              (s = (o = (0 | this.words[n + r]) + s) >> 26),
                (this.words[n + r] = 67108863 & o);
            if (0 === s) return this._strip();
            for (i(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (o = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              i = this.clone(),
              n = t,
              a = 0 | n.words[n.length - 1];
            0 !== (r = 26 - this._countBits(a)) &&
              ((n = n.ushln(r)), i.iushln(r), (a = 0 | n.words[n.length - 1]));
            var s,
              f = i.length - n.length;
            if ("mod" !== e) {
              ((s = new o(null)).length = f + 1),
                (s.words = new Array(s.length));
              for (var h = 0; h < s.length; h++) s.words[h] = 0;
            }
            var u = i.clone()._ishlnsubmul(n, 1, f);
            0 === u.negative && ((i = u), s && (s.words[f] = 1));
            for (var d = f - 1; d >= 0; d--) {
              var c =
                67108864 * (0 | i.words[n.length + d]) +
                (0 | i.words[n.length + d - 1]);
              for (
                c = Math.min((c / a) | 0, 67108863), i._ishlnsubmul(n, c, d);
                0 !== i.negative;

              )
                c--,
                  (i.negative = 0),
                  i._ishlnsubmul(n, 1, d),
                  i.isZero() || (i.negative ^= 1);
              s && (s.words[d] = c);
            }
            return (
              s && s._strip(),
              i._strip(),
              "div" !== e && 0 !== r && i.iushrn(r),
              { div: s || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              i(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((s = this.neg().divmod(t, e)),
                  "mod" !== e && (n = s.div.neg()),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                  { div: n, mod: a })
                : 0 === this.negative && 0 !== t.negative
                ? ((s = this.divmod(t.neg(), e)),
                  "mod" !== e && (n = s.div.neg()),
                  { div: n, mod: s.mod })
                : 0 !== (this.negative & t.negative)
                ? ((s = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                  { div: s.div, mod: a })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var n, a, s;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              i = t.ushrn(1),
              n = t.andln(1),
              o = r.cmp(i);
            return o < 0 || (1 === n && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), i(t <= 67108863);
            for (var r = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (r * n + (0 | this.words[o])) % t;
            return e ? -n : n;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), i(t <= 67108863);
            for (var r = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 67108864 * r;
              (this.words[n] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n = new o(1), a = new o(0), s = new o(0), f = new o(1), h = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++h;
            for (var u = r.clone(), d = e.clone(); !e.isZero(); ) {
              for (
                var c = 0, l = 1;
                0 === (e.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (n.isOdd() || a.isOdd()) && (n.iadd(u), a.isub(d)),
                    n.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                0 === (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(u), f.isub(d)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), n.isub(s), a.isub(f))
                : (r.isub(e), s.isub(n), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(h) };
          }),
          (o.prototype._invmp = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n, a = new o(1), s = new o(0), f = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var h = 0, u = 1;
                0 === (e.words[0] & u) && h < 26;
                ++h, u <<= 1
              );
              if (h > 0)
                for (e.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var d = 0, c = 1;
                0 === (r.words[0] & c) && d < 26;
                ++d, c <<= 1
              );
              if (d > 0)
                for (r.iushrn(d); d-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a));
            }
            return (n = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && n.iadd(t), n;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var i = 0; e.isEven() && r.isEven(); i++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = e.cmp(r);
              if (n < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(i);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            i("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              n = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= n), this;
            for (var o = n, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), i(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              e = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = 0 | this.words[r],
                n = 0 | t.words[r];
              if (i !== n) {
                i < n ? (e = -1) : i > n && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new A(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              i(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var w = { k256: null, p224: null, p192: null, p25519: null };
        function _(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function M() {
          _.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function S() {
          _.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function E() {
          _.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function k() {
          _.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function A(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            i(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function R(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (_.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (_.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var i = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === i
                ? ((r.words[0] = 0), (r.length = 1))
                : i > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (_.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (_.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(M, _),
          (M.prototype.split = function (t, e) {
            for (var r = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++)
              e.words[n] = t.words[n];
            if (((e.length = i), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
              var a = 0 | t.words[n];
              (t.words[n - 10] = ((a & r) << 4) | (o >>> 22)), (o = a);
            }
            (o >>>= 22),
              (t.words[n - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (M.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = 0 | t.words[r];
              (e += 977 * i),
                (t.words[r] = 67108863 & e),
                (e = 64 * i + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(S, _),
          n(E, _),
          n(k, _),
          (k.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = 19 * (0 | t.words[r]) + e,
                n = 67108863 & i;
              (i >>>= 26), (t.words[r] = n), (e = i);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (w[t]) return w[t];
            var e;
            if ("k256" === t) e = new M();
            else if ("p224" === t) e = new S();
            else if ("p192" === t) e = new E();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new k();
            }
            return (w[t] = e), e;
          }),
          (A.prototype._verify1 = function (t) {
            i(0 === t.negative, "red works only with positives"),
              i(t.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function (t, e) {
            i(0 === (t.negative | e.negative), "red works only with positives"),
              i(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (u(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (A.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (A.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((i(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var n = this.m.subn(1), a = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              a++, n.iushrn(1);
            i(!n.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              h = this.m.subn(1).iushrn(1),
              u = this.m.bitLength();
            for (
              u = new o(2 * u * u).toRed(this);
              0 !== this.pow(u, h).cmp(f);

            )
              u.redIAdd(f);
            for (
              var d = this.pow(u, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                l = this.pow(t, n),
                p = a;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              i(m < p);
              var g = this.pow(d, new o(1).iushln(p - m - 1));
              (c = c.redMul(g)), (d = g.redSqr()), (l = l.redMul(d)), (p = m);
            }
            return c;
          }),
          (A.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (A.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
            var n = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), i = e.length - 1; i >= 0; i--) {
              for (var h = e.words[i], u = f - 1; u >= 0; u--) {
                var d = (h >> u) & 1;
                n !== r[0] && (n = this.sqr(n)),
                  0 !== d || 0 !== a
                    ? ((a <<= 1),
                      (a |= d),
                      (4 === ++s || (0 === i && 0 === u)) &&
                        ((n = this.mul(n, r[a])), (s = 0), (a = 0)))
                    : (s = 0);
              }
              f = 26;
            }
            return n;
          }),
          (A.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (A.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new R(t);
          }),
          n(R, A),
          (R.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (R.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (R.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (R.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              a = n;
            return (
              n.cmp(this.m) >= 0
                ? (a = n.isub(this.m))
                : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (R.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    414905: function (t, e, r) {
      "use strict";
      t.exports = r(217536);
    },
    407545: function (t, e, r) {
      "use strict";
      var i = r(327172).Buffer,
        n = r(657266),
        o = r(379649),
        a = r(270087),
        s = r(461528),
        f = r(871566),
        h = r(217536);
      function u(t) {
        o.Writable.call(this);
        var e = h[t];
        if (!e) throw new Error("Unknown message digest");
        (this._hashType = e.hash),
          (this._hash = n(e.hash)),
          (this._tag = e.id),
          (this._signType = e.sign);
      }
      function d(t) {
        o.Writable.call(this);
        var e = h[t];
        if (!e) throw new Error("Unknown message digest");
        (this._hash = n(e.hash)), (this._tag = e.id), (this._signType = e.sign);
      }
      function c(t) {
        return new u(t);
      }
      function l(t) {
        return new d(t);
      }
      Object.keys(h).forEach(function (t) {
        (h[t].id = i.from(h[t].id, "hex")), (h[t.toLowerCase()] = h[t]);
      }),
        a(u, o.Writable),
        (u.prototype._write = function (t, e, r) {
          this._hash.update(t), r();
        }),
        (u.prototype.update = function (t, e) {
          return (
            this._hash.update("string" === typeof t ? i.from(t, e) : t), this
          );
        }),
        (u.prototype.sign = function (t, e) {
          this.end();
          var r = this._hash.digest(),
            i = s(r, t, this._hashType, this._signType, this._tag);
          return e ? i.toString(e) : i;
        }),
        a(d, o.Writable),
        (d.prototype._write = function (t, e, r) {
          this._hash.update(t), r();
        }),
        (d.prototype.update = function (t, e) {
          return (
            this._hash.update("string" === typeof t ? i.from(t, e) : t), this
          );
        }),
        (d.prototype.verify = function (t, e, r) {
          var n = "string" === typeof e ? i.from(e, r) : e;
          this.end();
          var o = this._hash.digest();
          return f(n, o, t, this._signType, this._tag);
        }),
        (t.exports = { Sign: c, Verify: l, createSign: c, createVerify: l });
    },
    461528: function (t, e, r) {
      "use strict";
      var i = r(327172).Buffer,
        n = r(912873),
        o = r(317354),
        a = r(329749).ec,
        s = r(340660),
        f = r(671463),
        h = r(187330);
      function u(t, e, r, o) {
        if ((t = i.from(t.toArray())).length < e.byteLength()) {
          var a = i.alloc(e.byteLength() - t.length);
          t = i.concat([a, t]);
        }
        var s = r.length,
          f = (function (t, e) {
            t = (t = d(t, e)).mod(e);
            var r = i.from(t.toArray());
            if (r.length < e.byteLength()) {
              var n = i.alloc(e.byteLength() - r.length);
              r = i.concat([n, r]);
            }
            return r;
          })(r, e),
          h = i.alloc(s);
        h.fill(1);
        var u = i.alloc(s);
        return (
          (u = n(o, u)
            .update(h)
            .update(i.from([0]))
            .update(t)
            .update(f)
            .digest()),
          (h = n(o, u).update(h).digest()),
          {
            k: (u = n(o, u)
              .update(h)
              .update(i.from([1]))
              .update(t)
              .update(f)
              .digest()),
            v: (h = n(o, u).update(h).digest()),
          }
        );
      }
      function d(t, e) {
        var r = new s(t),
          i = (t.length << 3) - e.bitLength();
        return i > 0 && r.ishrn(i), r;
      }
      function c(t, e, r) {
        var o, a;
        do {
          for (o = i.alloc(0); 8 * o.length < t.bitLength(); )
            (e.v = n(r, e.k).update(e.v).digest()), (o = i.concat([o, e.v]));
          (a = d(o, t)),
            (e.k = n(r, e.k)
              .update(e.v)
              .update(i.from([0]))
              .digest()),
            (e.v = n(r, e.k).update(e.v).digest());
        } while (-1 !== a.cmp(t));
        return a;
      }
      function l(t, e, r, i) {
        return t.toRed(s.mont(r)).redPow(e).fromRed().mod(i);
      }
      (t.exports = function (t, e, r, n, p) {
        var b = f(e);
        if (b.curve) {
          if ("ecdsa" !== n && "ecdsa/rsa" !== n)
            throw new Error("wrong private key type");
          return (function (t, e) {
            var r = h[e.curve.join(".")];
            if (!r) throw new Error("unknown curve " + e.curve.join("."));
            var n = new a(r).keyFromPrivate(e.privateKey).sign(t);
            return i.from(n.toDER());
          })(t, b);
        }
        if ("dsa" === b.type) {
          if ("dsa" !== n) throw new Error("wrong private key type");
          return (function (t, e, r) {
            var n,
              o = e.params.priv_key,
              a = e.params.p,
              f = e.params.q,
              h = e.params.g,
              p = new s(0),
              b = d(t, f).mod(f),
              m = !1,
              g = u(o, f, t, r);
            for (; !1 === m; )
              (p = l(h, (n = c(f, g, r)), a, f)),
                0 ===
                  (m = n
                    .invm(f)
                    .imul(b.add(o.mul(p)))
                    .mod(f)).cmpn(0) && ((m = !1), (p = new s(0)));
            return (function (t, e) {
              (t = t.toArray()),
                (e = e.toArray()),
                128 & t[0] && (t = [0].concat(t));
              128 & e[0] && (e = [0].concat(e));
              var r = [48, t.length + e.length + 4, 2, t.length];
              return (r = r.concat(t, [2, e.length], e)), i.from(r);
            })(p, m);
          })(t, b, r);
        }
        if ("rsa" !== n && "ecdsa/rsa" !== n)
          throw new Error("wrong private key type");
        if (void 0 !== e.padding && 1 !== e.padding)
          throw new Error("illegal or unsupported padding mode");
        t = i.concat([p, t]);
        for (
          var m = b.modulus.byteLength(), g = [0, 1];
          t.length + g.length + 1 < m;

        )
          g.push(255);
        g.push(0);
        for (var y = -1; ++y < t.length; ) g.push(t[y]);
        return o(g, b);
      }),
        (t.exports.getKey = u),
        (t.exports.makeKey = c);
    },
    871566: function (t, e, r) {
      "use strict";
      var i = r(327172).Buffer,
        n = r(340660),
        o = r(329749).ec,
        a = r(671463),
        s = r(187330);
      function f(t, e) {
        if (t.cmpn(0) <= 0) throw new Error("invalid sig");
        if (t.cmp(e) >= 0) throw new Error("invalid sig");
      }
      t.exports = function (t, e, r, h, u) {
        var d = a(r);
        if ("ec" === d.type) {
          if ("ecdsa" !== h && "ecdsa/rsa" !== h)
            throw new Error("wrong public key type");
          return (function (t, e, r) {
            var i = s[r.data.algorithm.curve.join(".")];
            if (!i)
              throw new Error(
                "unknown curve " + r.data.algorithm.curve.join(".")
              );
            var n = new o(i),
              a = r.data.subjectPrivateKey.data;
            return n.verify(e, t, a);
          })(t, e, d);
        }
        if ("dsa" === d.type) {
          if ("dsa" !== h) throw new Error("wrong public key type");
          return (function (t, e, r) {
            var i = r.data.p,
              o = r.data.q,
              s = r.data.g,
              h = r.data.pub_key,
              u = a.signature.decode(t, "der"),
              d = u.s,
              c = u.r;
            f(d, o), f(c, o);
            var l = n.mont(i),
              p = d.invm(o);
            return (
              0 ===
              s
                .toRed(l)
                .redPow(new n(e).mul(p).mod(o))
                .fromRed()
                .mul(h.toRed(l).redPow(c.mul(p).mod(o)).fromRed())
                .mod(i)
                .mod(o)
                .cmp(c)
            );
          })(t, e, d);
        }
        if ("rsa" !== h && "ecdsa/rsa" !== h)
          throw new Error("wrong public key type");
        e = i.concat([u, e]);
        for (
          var c = d.modulus.byteLength(), l = [1], p = 0;
          e.length + l.length + 2 < c;

        )
          l.push(255), (p += 1);
        l.push(0);
        for (var b = -1; ++b < e.length; ) l.push(e[b]);
        l = i.from(l);
        var m = n.mont(d.modulus);
        (t = (t = new n(t).toRed(m)).redPow(new n(d.publicExponent))),
          (t = i.from(t.fromRed().toArray()));
        var g = p < 8 ? 1 : 0;
        for (
          c = Math.min(t.length, l.length),
            t.length !== l.length && (g = 1),
            b = -1;
          ++b < c;

        )
          g |= t[b] ^ l[b];
        return 0 === g;
      };
    },
    340660: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function i(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        function n(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        var a;
        "object" === typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          a =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.Buffer
              ? window.Buffer
              : r(850695).Buffer;
        } catch (x) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void i(!1, "Invalid character in " + t);
        }
        function f(t, e, r) {
          var i = s(t, r);
          return r - 1 >= e && (i |= s(t, r - 1) << 4), i;
        }
        function h(t, e, r, n) {
          for (var o = 0, a = 0, s = Math.min(t.length, r), f = e; f < s; f++) {
            var h = t.charCodeAt(f) - 48;
            (o *= n),
              (a = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
              i(h >= 0 && a < n, "Invalid character"),
              (o += a);
          }
          return o;
        }
        function u(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return t.cmp(e) < 0 ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" === typeof t) return this._initNumber(t, e, r);
            if ("object" === typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === e
                  ? this._parseHex(t, n, r)
                  : (this._parseBase(t, e, n),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (i(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((i("number" === typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o,
              a,
              s = 0;
            if ("be" === r)
              for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                (a = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === r)
              for (n = 0, o = 0; n < t.length; n += 3)
                (a = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                  (this.words[o] |= (a << s) & 67108863),
                  (this.words[o + 1] = (a >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = new Array(this.length));
            for (var i = 0; i < this.length; i++) this.words[i] = 0;
            var n,
              o = 0,
              a = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = f(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 === 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = f(t, e, i) << o),
                  (this.words[a] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
            i--, (n = (n / e) | 0);
            for (
              var o = t.length - r,
                a = o % i,
                s = Math.min(o, o - a) + r,
                f = 0,
                u = r;
              u < s;
              u += i
            )
              (f = h(t, u, u + i, e)),
                this.imuln(n),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            if (0 !== a) {
              var d = 1;
              for (f = h(t, u, t.length, e), u = 0; u < a; u++) d *= e;
              this.imuln(d),
                this.words[0] + f < 67108864
                  ? (this.words[0] += f)
                  : this._iaddn(f);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            u(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = d;
          } catch (x) {
            o.prototype.inspect = d;
          }
        else o.prototype.inspect = d;
        function d() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          l = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        (o.prototype.toString = function (t, e) {
          var r;
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var n = 0, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                f = (16777215 & ((s << n) | o)).toString(16);
              (o = (s >>> (24 - n)) & 16777215),
                (n += 2) >= 26 && ((n -= 26), a--),
                (r =
                  0 !== o || a !== this.length - 1
                    ? c[6 - f.length] + f + r
                    : f + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = l[t],
              u = p[t];
            r = "";
            var d = this.clone();
            for (d.negative = 0; !d.isZero(); ) {
              var b = d.modrn(u).toString(t);
              r = (d = d.idivn(u)).isZero() ? b + r : c[h - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e !== 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          i(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          a &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(a, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          });
        function b(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var i = (t.length + e.length) | 0;
          (r.length = i), (i = (i - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | e.words[0],
            a = n * o,
            s = 67108863 & a,
            f = (a / 67108864) | 0;
          r.words[0] = s;
          for (var h = 1; h < i; h++) {
            for (
              var u = f >>> 26,
                d = 67108863 & f,
                c = Math.min(h, e.length - 1),
                l = Math.max(0, h - t.length + 1);
              l <= c;
              l++
            ) {
              var p = (h - l) | 0;
              (u +=
                ((a = (n = 0 | t.words[p]) * (o = 0 | e.words[l]) + d) /
                  67108864) |
                0),
                (d = 67108863 & a);
            }
            (r.words[h] = 0 | d), (f = 0 | u);
          }
          return 0 !== f ? (r.words[h] = 0 | f) : r.length--, r._strip();
        }
        (o.prototype.toArrayLike = function (t, e, r) {
          this._strip();
          var n = this.byteLength(),
            o = r || Math.max(1, n);
          i(n <= o, "byte array longer than desired length"),
            i(o > 0, "Requested array length <= 0");
          var a = (function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          })(t, o);
          return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](a, n), a;
        }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
              var a = (this.words[n] << o) | i;
              (t[r++] = 255 & a),
                r < t.length && (t[r++] = (a >> 8) & 255),
                r < t.length && (t[r++] = (a >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (a >> 24) & 255),
                    (i = 0),
                    (o = 0))
                  : ((i = a >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = i; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, i = 0, n = 0, o = 0;
              n < this.length;
              n++
            ) {
              var a = (this.words[n] << o) | i;
              (t[r--] = 255 & a),
                r >= 0 && (t[r--] = (a >> 8) & 255),
                r >= 0 && (t[r--] = (a >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (a >> 24) & 255), (i = 0), (o = 0))
                  : ((i = a >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = i; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              0 === (8191 & e) && ((r += 13), (e >>>= 13)),
              0 === (127 & e) && ((r += 7), (e >>>= 7)),
              0 === (15 & e) && ((r += 4), (e >>>= 4)),
              0 === (3 & e) && ((r += 2), (e >>>= 2)),
              0 === (1 & e) && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return 26 * (this.length - 1) + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, r;
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var i = 0; i < r.length; i++)
              this.words[i] = e.words[i] ^ r.words[i];
            if (this !== e)
              for (; i < e.length; i++) this.words[i] = e.words[i];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return i(0 === (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var n = 0; n < e; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              r > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            i("number" === typeof t && t >= 0);
            var r = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(r + 1),
              (this.words[r] = e
                ? this.words[r] | (1 << n)
                : this.words[r] & ~(1 << n)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var e, r, i;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (i = t))
              : ((r = t), (i = this));
            for (var n = 0, o = 0; o < i.length; o++)
              (e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            for (; 0 !== n && o < r.length; o++)
              (e = (0 | r.words[o]) + n),
                (this.words[o] = 67108863 & e),
                (n = e >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var r,
              i,
              n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
            for (var o = 0, a = 0; a < i.length; a++)
              (o = (e = (0 | r.words[a]) - (0 | i.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            for (; 0 !== o && a < r.length; a++)
              (o = (e = (0 | r.words[a]) + o) >> 26),
                (this.words[a] = 67108863 & e);
            if (0 === o && a < r.length && r !== this)
              for (; a < r.length; a++) this.words[a] = r.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              r !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var m = function (t, e, r) {
          var i,
            n,
            o,
            a = t.words,
            s = e.words,
            f = r.words,
            h = 0,
            u = 0 | a[0],
            d = 8191 & u,
            c = u >>> 13,
            l = 0 | a[1],
            p = 8191 & l,
            b = l >>> 13,
            m = 0 | a[2],
            g = 8191 & m,
            y = m >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            _ = v >>> 13,
            M = 0 | a[4],
            S = 8191 & M,
            E = M >>> 13,
            k = 0 | a[5],
            A = 8191 & k,
            R = k >>> 13,
            x = 0 | a[6],
            B = 8191 & x,
            I = x >>> 13,
            T = 0 | a[7],
            P = 8191 & T,
            j = T >>> 13,
            O = 0 | a[8],
            C = 8191 & O,
            L = O >>> 13,
            N = 0 | a[9],
            D = 8191 & N,
            q = N >>> 13,
            U = 0 | s[0],
            z = 8191 & U,
            H = U >>> 13,
            K = 0 | s[1],
            F = 8191 & K,
            W = K >>> 13,
            V = 0 | s[2],
            Z = 8191 & V,
            G = V >>> 13,
            X = 0 | s[3],
            Y = 8191 & X,
            J = X >>> 13,
            $ = 0 | s[4],
            Q = 8191 & $,
            tt = $ >>> 13,
            et = 0 | s[5],
            rt = 8191 & et,
            it = et >>> 13,
            nt = 0 | s[6],
            ot = 8191 & nt,
            at = nt >>> 13,
            st = 0 | s[7],
            ft = 8191 & st,
            ht = st >>> 13,
            ut = 0 | s[8],
            dt = 8191 & ut,
            ct = ut >>> 13,
            lt = 0 | s[9],
            pt = 8191 & lt,
            bt = lt >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var mt =
            (((h + (i = Math.imul(d, z))) | 0) +
              ((8191 & (n = ((n = Math.imul(d, H)) + Math.imul(c, z)) | 0)) <<
                13)) |
            0;
          (h = ((((o = Math.imul(c, H)) + (n >>> 13)) | 0) + (mt >>> 26)) | 0),
            (mt &= 67108863),
            (i = Math.imul(p, z)),
            (n = ((n = Math.imul(p, H)) + Math.imul(b, z)) | 0),
            (o = Math.imul(b, H));
          var gt =
            (((h + (i = (i + Math.imul(d, F)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, W)) | 0) + Math.imul(c, F)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, W)) | 0) + (n >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            (i = Math.imul(g, z)),
            (n = ((n = Math.imul(g, H)) + Math.imul(y, z)) | 0),
            (o = Math.imul(y, H)),
            (i = (i + Math.imul(p, F)) | 0),
            (n = ((n = (n + Math.imul(p, W)) | 0) + Math.imul(b, F)) | 0),
            (o = (o + Math.imul(b, W)) | 0);
          var yt =
            (((h + (i = (i + Math.imul(d, Z)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, G)) | 0) + Math.imul(c, Z)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, G)) | 0) + (n >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (i = Math.imul(w, z)),
            (n = ((n = Math.imul(w, H)) + Math.imul(_, z)) | 0),
            (o = Math.imul(_, H)),
            (i = (i + Math.imul(g, F)) | 0),
            (n = ((n = (n + Math.imul(g, W)) | 0) + Math.imul(y, F)) | 0),
            (o = (o + Math.imul(y, W)) | 0),
            (i = (i + Math.imul(p, Z)) | 0),
            (n = ((n = (n + Math.imul(p, G)) | 0) + Math.imul(b, Z)) | 0),
            (o = (o + Math.imul(b, G)) | 0);
          var vt =
            (((h + (i = (i + Math.imul(d, Y)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, J)) | 0) + Math.imul(c, Y)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, J)) | 0) + (n >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (i = Math.imul(S, z)),
            (n = ((n = Math.imul(S, H)) + Math.imul(E, z)) | 0),
            (o = Math.imul(E, H)),
            (i = (i + Math.imul(w, F)) | 0),
            (n = ((n = (n + Math.imul(w, W)) | 0) + Math.imul(_, F)) | 0),
            (o = (o + Math.imul(_, W)) | 0),
            (i = (i + Math.imul(g, Z)) | 0),
            (n = ((n = (n + Math.imul(g, G)) | 0) + Math.imul(y, Z)) | 0),
            (o = (o + Math.imul(y, G)) | 0),
            (i = (i + Math.imul(p, Y)) | 0),
            (n = ((n = (n + Math.imul(p, J)) | 0) + Math.imul(b, Y)) | 0),
            (o = (o + Math.imul(b, J)) | 0);
          var wt =
            (((h + (i = (i + Math.imul(d, Q)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, tt)) | 0) + Math.imul(c, Q)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tt)) | 0) + (n >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (i = Math.imul(A, z)),
            (n = ((n = Math.imul(A, H)) + Math.imul(R, z)) | 0),
            (o = Math.imul(R, H)),
            (i = (i + Math.imul(S, F)) | 0),
            (n = ((n = (n + Math.imul(S, W)) | 0) + Math.imul(E, F)) | 0),
            (o = (o + Math.imul(E, W)) | 0),
            (i = (i + Math.imul(w, Z)) | 0),
            (n = ((n = (n + Math.imul(w, G)) | 0) + Math.imul(_, Z)) | 0),
            (o = (o + Math.imul(_, G)) | 0),
            (i = (i + Math.imul(g, Y)) | 0),
            (n = ((n = (n + Math.imul(g, J)) | 0) + Math.imul(y, Y)) | 0),
            (o = (o + Math.imul(y, J)) | 0),
            (i = (i + Math.imul(p, Q)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, tt)) | 0);
          var _t =
            (((h + (i = (i + Math.imul(d, rt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, it)) | 0) + Math.imul(c, rt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, it)) | 0) + (n >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (i = Math.imul(B, z)),
            (n = ((n = Math.imul(B, H)) + Math.imul(I, z)) | 0),
            (o = Math.imul(I, H)),
            (i = (i + Math.imul(A, F)) | 0),
            (n = ((n = (n + Math.imul(A, W)) | 0) + Math.imul(R, F)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (i = (i + Math.imul(S, Z)) | 0),
            (n = ((n = (n + Math.imul(S, G)) | 0) + Math.imul(E, Z)) | 0),
            (o = (o + Math.imul(E, G)) | 0),
            (i = (i + Math.imul(w, Y)) | 0),
            (n = ((n = (n + Math.imul(w, J)) | 0) + Math.imul(_, Y)) | 0),
            (o = (o + Math.imul(_, J)) | 0),
            (i = (i + Math.imul(g, Q)) | 0),
            (n = ((n = (n + Math.imul(g, tt)) | 0) + Math.imul(y, Q)) | 0),
            (o = (o + Math.imul(y, tt)) | 0),
            (i = (i + Math.imul(p, rt)) | 0),
            (n = ((n = (n + Math.imul(p, it)) | 0) + Math.imul(b, rt)) | 0),
            (o = (o + Math.imul(b, it)) | 0);
          var Mt =
            (((h + (i = (i + Math.imul(d, ot)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, at)) | 0) + Math.imul(c, ot)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, at)) | 0) + (n >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (i = Math.imul(P, z)),
            (n = ((n = Math.imul(P, H)) + Math.imul(j, z)) | 0),
            (o = Math.imul(j, H)),
            (i = (i + Math.imul(B, F)) | 0),
            (n = ((n = (n + Math.imul(B, W)) | 0) + Math.imul(I, F)) | 0),
            (o = (o + Math.imul(I, W)) | 0),
            (i = (i + Math.imul(A, Z)) | 0),
            (n = ((n = (n + Math.imul(A, G)) | 0) + Math.imul(R, Z)) | 0),
            (o = (o + Math.imul(R, G)) | 0),
            (i = (i + Math.imul(S, Y)) | 0),
            (n = ((n = (n + Math.imul(S, J)) | 0) + Math.imul(E, Y)) | 0),
            (o = (o + Math.imul(E, J)) | 0),
            (i = (i + Math.imul(w, Q)) | 0),
            (n = ((n = (n + Math.imul(w, tt)) | 0) + Math.imul(_, Q)) | 0),
            (o = (o + Math.imul(_, tt)) | 0),
            (i = (i + Math.imul(g, rt)) | 0),
            (n = ((n = (n + Math.imul(g, it)) | 0) + Math.imul(y, rt)) | 0),
            (o = (o + Math.imul(y, it)) | 0),
            (i = (i + Math.imul(p, ot)) | 0),
            (n = ((n = (n + Math.imul(p, at)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, at)) | 0);
          var St =
            (((h + (i = (i + Math.imul(d, ft)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ht)) | 0) + Math.imul(c, ft)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ht)) | 0) + (n >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (i = Math.imul(C, z)),
            (n = ((n = Math.imul(C, H)) + Math.imul(L, z)) | 0),
            (o = Math.imul(L, H)),
            (i = (i + Math.imul(P, F)) | 0),
            (n = ((n = (n + Math.imul(P, W)) | 0) + Math.imul(j, F)) | 0),
            (o = (o + Math.imul(j, W)) | 0),
            (i = (i + Math.imul(B, Z)) | 0),
            (n = ((n = (n + Math.imul(B, G)) | 0) + Math.imul(I, Z)) | 0),
            (o = (o + Math.imul(I, G)) | 0),
            (i = (i + Math.imul(A, Y)) | 0),
            (n = ((n = (n + Math.imul(A, J)) | 0) + Math.imul(R, Y)) | 0),
            (o = (o + Math.imul(R, J)) | 0),
            (i = (i + Math.imul(S, Q)) | 0),
            (n = ((n = (n + Math.imul(S, tt)) | 0) + Math.imul(E, Q)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (i = (i + Math.imul(w, rt)) | 0),
            (n = ((n = (n + Math.imul(w, it)) | 0) + Math.imul(_, rt)) | 0),
            (o = (o + Math.imul(_, it)) | 0),
            (i = (i + Math.imul(g, ot)) | 0),
            (n = ((n = (n + Math.imul(g, at)) | 0) + Math.imul(y, ot)) | 0),
            (o = (o + Math.imul(y, at)) | 0),
            (i = (i + Math.imul(p, ft)) | 0),
            (n = ((n = (n + Math.imul(p, ht)) | 0) + Math.imul(b, ft)) | 0),
            (o = (o + Math.imul(b, ht)) | 0);
          var Et =
            (((h + (i = (i + Math.imul(d, dt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ct)) | 0) + Math.imul(c, dt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ct)) | 0) + (n >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (i = Math.imul(D, z)),
            (n = ((n = Math.imul(D, H)) + Math.imul(q, z)) | 0),
            (o = Math.imul(q, H)),
            (i = (i + Math.imul(C, F)) | 0),
            (n = ((n = (n + Math.imul(C, W)) | 0) + Math.imul(L, F)) | 0),
            (o = (o + Math.imul(L, W)) | 0),
            (i = (i + Math.imul(P, Z)) | 0),
            (n = ((n = (n + Math.imul(P, G)) | 0) + Math.imul(j, Z)) | 0),
            (o = (o + Math.imul(j, G)) | 0),
            (i = (i + Math.imul(B, Y)) | 0),
            (n = ((n = (n + Math.imul(B, J)) | 0) + Math.imul(I, Y)) | 0),
            (o = (o + Math.imul(I, J)) | 0),
            (i = (i + Math.imul(A, Q)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (i = (i + Math.imul(S, rt)) | 0),
            (n = ((n = (n + Math.imul(S, it)) | 0) + Math.imul(E, rt)) | 0),
            (o = (o + Math.imul(E, it)) | 0),
            (i = (i + Math.imul(w, ot)) | 0),
            (n = ((n = (n + Math.imul(w, at)) | 0) + Math.imul(_, ot)) | 0),
            (o = (o + Math.imul(_, at)) | 0),
            (i = (i + Math.imul(g, ft)) | 0),
            (n = ((n = (n + Math.imul(g, ht)) | 0) + Math.imul(y, ft)) | 0),
            (o = (o + Math.imul(y, ht)) | 0),
            (i = (i + Math.imul(p, dt)) | 0),
            (n = ((n = (n + Math.imul(p, ct)) | 0) + Math.imul(b, dt)) | 0),
            (o = (o + Math.imul(b, ct)) | 0);
          var kt =
            (((h + (i = (i + Math.imul(d, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, bt)) | 0) + Math.imul(c, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, bt)) | 0) + (n >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (i = Math.imul(D, F)),
            (n = ((n = Math.imul(D, W)) + Math.imul(q, F)) | 0),
            (o = Math.imul(q, W)),
            (i = (i + Math.imul(C, Z)) | 0),
            (n = ((n = (n + Math.imul(C, G)) | 0) + Math.imul(L, Z)) | 0),
            (o = (o + Math.imul(L, G)) | 0),
            (i = (i + Math.imul(P, Y)) | 0),
            (n = ((n = (n + Math.imul(P, J)) | 0) + Math.imul(j, Y)) | 0),
            (o = (o + Math.imul(j, J)) | 0),
            (i = (i + Math.imul(B, Q)) | 0),
            (n = ((n = (n + Math.imul(B, tt)) | 0) + Math.imul(I, Q)) | 0),
            (o = (o + Math.imul(I, tt)) | 0),
            (i = (i + Math.imul(A, rt)) | 0),
            (n = ((n = (n + Math.imul(A, it)) | 0) + Math.imul(R, rt)) | 0),
            (o = (o + Math.imul(R, it)) | 0),
            (i = (i + Math.imul(S, ot)) | 0),
            (n = ((n = (n + Math.imul(S, at)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, at)) | 0),
            (i = (i + Math.imul(w, ft)) | 0),
            (n = ((n = (n + Math.imul(w, ht)) | 0) + Math.imul(_, ft)) | 0),
            (o = (o + Math.imul(_, ht)) | 0),
            (i = (i + Math.imul(g, dt)) | 0),
            (n = ((n = (n + Math.imul(g, ct)) | 0) + Math.imul(y, dt)) | 0),
            (o = (o + Math.imul(y, ct)) | 0);
          var At =
            (((h + (i = (i + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(b, bt)) | 0) + (n >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (i = Math.imul(D, Z)),
            (n = ((n = Math.imul(D, G)) + Math.imul(q, Z)) | 0),
            (o = Math.imul(q, G)),
            (i = (i + Math.imul(C, Y)) | 0),
            (n = ((n = (n + Math.imul(C, J)) | 0) + Math.imul(L, Y)) | 0),
            (o = (o + Math.imul(L, J)) | 0),
            (i = (i + Math.imul(P, Q)) | 0),
            (n = ((n = (n + Math.imul(P, tt)) | 0) + Math.imul(j, Q)) | 0),
            (o = (o + Math.imul(j, tt)) | 0),
            (i = (i + Math.imul(B, rt)) | 0),
            (n = ((n = (n + Math.imul(B, it)) | 0) + Math.imul(I, rt)) | 0),
            (o = (o + Math.imul(I, it)) | 0),
            (i = (i + Math.imul(A, ot)) | 0),
            (n = ((n = (n + Math.imul(A, at)) | 0) + Math.imul(R, ot)) | 0),
            (o = (o + Math.imul(R, at)) | 0),
            (i = (i + Math.imul(S, ft)) | 0),
            (n = ((n = (n + Math.imul(S, ht)) | 0) + Math.imul(E, ft)) | 0),
            (o = (o + Math.imul(E, ht)) | 0),
            (i = (i + Math.imul(w, dt)) | 0),
            (n = ((n = (n + Math.imul(w, ct)) | 0) + Math.imul(_, dt)) | 0),
            (o = (o + Math.imul(_, ct)) | 0);
          var Rt =
            (((h + (i = (i + Math.imul(g, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(g, bt)) | 0) + Math.imul(y, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(y, bt)) | 0) + (n >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (i = Math.imul(D, Y)),
            (n = ((n = Math.imul(D, J)) + Math.imul(q, Y)) | 0),
            (o = Math.imul(q, J)),
            (i = (i + Math.imul(C, Q)) | 0),
            (n = ((n = (n + Math.imul(C, tt)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (i = (i + Math.imul(P, rt)) | 0),
            (n = ((n = (n + Math.imul(P, it)) | 0) + Math.imul(j, rt)) | 0),
            (o = (o + Math.imul(j, it)) | 0),
            (i = (i + Math.imul(B, ot)) | 0),
            (n = ((n = (n + Math.imul(B, at)) | 0) + Math.imul(I, ot)) | 0),
            (o = (o + Math.imul(I, at)) | 0),
            (i = (i + Math.imul(A, ft)) | 0),
            (n = ((n = (n + Math.imul(A, ht)) | 0) + Math.imul(R, ft)) | 0),
            (o = (o + Math.imul(R, ht)) | 0),
            (i = (i + Math.imul(S, dt)) | 0),
            (n = ((n = (n + Math.imul(S, ct)) | 0) + Math.imul(E, dt)) | 0),
            (o = (o + Math.imul(E, ct)) | 0);
          var xt =
            (((h + (i = (i + Math.imul(w, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, bt)) | 0) + Math.imul(_, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(_, bt)) | 0) + (n >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (i = Math.imul(D, Q)),
            (n = ((n = Math.imul(D, tt)) + Math.imul(q, Q)) | 0),
            (o = Math.imul(q, tt)),
            (i = (i + Math.imul(C, rt)) | 0),
            (n = ((n = (n + Math.imul(C, it)) | 0) + Math.imul(L, rt)) | 0),
            (o = (o + Math.imul(L, it)) | 0),
            (i = (i + Math.imul(P, ot)) | 0),
            (n = ((n = (n + Math.imul(P, at)) | 0) + Math.imul(j, ot)) | 0),
            (o = (o + Math.imul(j, at)) | 0),
            (i = (i + Math.imul(B, ft)) | 0),
            (n = ((n = (n + Math.imul(B, ht)) | 0) + Math.imul(I, ft)) | 0),
            (o = (o + Math.imul(I, ht)) | 0),
            (i = (i + Math.imul(A, dt)) | 0),
            (n = ((n = (n + Math.imul(A, ct)) | 0) + Math.imul(R, dt)) | 0),
            (o = (o + Math.imul(R, ct)) | 0);
          var Bt =
            (((h + (i = (i + Math.imul(S, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(S, bt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(E, bt)) | 0) + (n >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (i = Math.imul(D, rt)),
            (n = ((n = Math.imul(D, it)) + Math.imul(q, rt)) | 0),
            (o = Math.imul(q, it)),
            (i = (i + Math.imul(C, ot)) | 0),
            (n = ((n = (n + Math.imul(C, at)) | 0) + Math.imul(L, ot)) | 0),
            (o = (o + Math.imul(L, at)) | 0),
            (i = (i + Math.imul(P, ft)) | 0),
            (n = ((n = (n + Math.imul(P, ht)) | 0) + Math.imul(j, ft)) | 0),
            (o = (o + Math.imul(j, ht)) | 0),
            (i = (i + Math.imul(B, dt)) | 0),
            (n = ((n = (n + Math.imul(B, ct)) | 0) + Math.imul(I, dt)) | 0),
            (o = (o + Math.imul(I, ct)) | 0);
          var It =
            (((h + (i = (i + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, bt)) | 0) + Math.imul(R, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(R, bt)) | 0) + (n >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (i = Math.imul(D, ot)),
            (n = ((n = Math.imul(D, at)) + Math.imul(q, ot)) | 0),
            (o = Math.imul(q, at)),
            (i = (i + Math.imul(C, ft)) | 0),
            (n = ((n = (n + Math.imul(C, ht)) | 0) + Math.imul(L, ft)) | 0),
            (o = (o + Math.imul(L, ht)) | 0),
            (i = (i + Math.imul(P, dt)) | 0),
            (n = ((n = (n + Math.imul(P, ct)) | 0) + Math.imul(j, dt)) | 0),
            (o = (o + Math.imul(j, ct)) | 0);
          var Tt =
            (((h + (i = (i + Math.imul(B, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(B, bt)) | 0) + Math.imul(I, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(I, bt)) | 0) + (n >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (i = Math.imul(D, ft)),
            (n = ((n = Math.imul(D, ht)) + Math.imul(q, ft)) | 0),
            (o = Math.imul(q, ht)),
            (i = (i + Math.imul(C, dt)) | 0),
            (n = ((n = (n + Math.imul(C, ct)) | 0) + Math.imul(L, dt)) | 0),
            (o = (o + Math.imul(L, ct)) | 0);
          var Pt =
            (((h + (i = (i + Math.imul(P, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(P, bt)) | 0) + Math.imul(j, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(j, bt)) | 0) + (n >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863),
            (i = Math.imul(D, dt)),
            (n = ((n = Math.imul(D, ct)) + Math.imul(q, dt)) | 0),
            (o = Math.imul(q, ct));
          var jt =
            (((h + (i = (i + Math.imul(C, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(C, bt)) | 0) + Math.imul(L, pt)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(L, bt)) | 0) + (n >>> 13)) | 0) +
              (jt >>> 26)) |
            0),
            (jt &= 67108863);
          var Ot =
            (((h + (i = Math.imul(D, pt))) | 0) +
              ((8191 & (n = ((n = Math.imul(D, bt)) + Math.imul(q, pt)) | 0)) <<
                13)) |
            0;
          return (
            (h =
              ((((o = Math.imul(q, bt)) + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
            (Ot &= 67108863),
            (f[0] = mt),
            (f[1] = gt),
            (f[2] = yt),
            (f[3] = vt),
            (f[4] = wt),
            (f[5] = _t),
            (f[6] = Mt),
            (f[7] = St),
            (f[8] = Et),
            (f[9] = kt),
            (f[10] = At),
            (f[11] = Rt),
            (f[12] = xt),
            (f[13] = Bt),
            (f[14] = It),
            (f[15] = Tt),
            (f[16] = Pt),
            (f[17] = jt),
            (f[18] = Ot),
            0 !== h && ((f[19] = h), r.length++),
            r
          );
        };
        function g(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
            var a = n;
            n = 0;
            for (
              var s = 67108863 & i,
                f = Math.min(o, e.length - 1),
                h = Math.max(0, o - t.length + 1);
              h <= f;
              h++
            ) {
              var u = o - h,
                d = (0 | t.words[u]) * (0 | e.words[h]),
                c = 67108863 & d;
              (s = 67108863 & (c = (c + s) | 0)),
                (n +=
                  (a =
                    ((a = (a + ((d / 67108864) | 0)) | 0) + (c >>> 26)) | 0) >>>
                  26),
                (a &= 67108863);
            }
            (r.words[o] = s), (i = a), (a = n);
          }
          return 0 !== i ? (r.words[o] = i) : r.length--, r._strip();
        }
        function y(t, e, r) {
          return g(t, e, r);
        }
        function v(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (m = b),
          (o.prototype.mulTo = function (t, e) {
            var r = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? m(this, t, e)
              : r < 63
              ? b(this, t, e)
              : r < 1024
              ? g(this, t, e)
              : y(this, t, e);
          }),
          (v.prototype.makeRBT = function (t) {
            for (
              var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
              i < t;
              i++
            )
              e[i] = this.revBin(i, r, t);
            return e;
          }),
          (v.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var i = 0, n = 0; n < e; n++)
              (i |= (1 & t) << (e - n - 1)), (t >>= 1);
            return i;
          }),
          (v.prototype.permute = function (t, e, r, i, n, o) {
            for (var a = 0; a < o; a++) (i[a] = e[t[a]]), (n[a] = r[t[a]]);
          }),
          (v.prototype.transform = function (t, e, r, i, n, o) {
            this.permute(o, t, e, r, i, n);
            for (var a = 1; a < n; a <<= 1)
              for (
                var s = a << 1,
                  f = Math.cos((2 * Math.PI) / s),
                  h = Math.sin((2 * Math.PI) / s),
                  u = 0;
                u < n;
                u += s
              )
                for (var d = f, c = h, l = 0; l < a; l++) {
                  var p = r[u + l],
                    b = i[u + l],
                    m = r[u + l + a],
                    g = i[u + l + a],
                    y = d * m - c * g;
                  (g = d * g + c * m),
                    (m = y),
                    (r[u + l] = p + m),
                    (i[u + l] = b + g),
                    (r[u + l + a] = p - m),
                    (i[u + l + a] = b - g),
                    l !== s &&
                      ((y = f * d - h * c), (c = f * c + h * d), (d = y));
                }
          }),
          (v.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              i = 1 & r,
              n = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) n++;
            return 1 << (n + 1 + i);
          }),
          (v.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var i = 0; i < r / 2; i++) {
                var n = t[i];
                (t[i] = t[r - i - 1]),
                  (t[r - i - 1] = n),
                  (n = e[i]),
                  (e[i] = -e[r - i - 1]),
                  (e[r - i - 1] = -n);
              }
          }),
          (v.prototype.normalize13b = function (t, e) {
            for (var r = 0, i = 0; i < e / 2; i++) {
              var n =
                8192 * Math.round(t[2 * i + 1] / e) +
                Math.round(t[2 * i] / e) +
                r;
              (t[i] = 67108863 & n),
                (r = n < 67108864 ? 0 : (n / 67108864) | 0);
            }
            return t;
          }),
          (v.prototype.convert13b = function (t, e, r, n) {
            for (var o = 0, a = 0; a < e; a++)
              (o += 0 | t[a]),
                (r[2 * a] = 8191 & o),
                (o >>>= 13),
                (r[2 * a + 1] = 8191 & o),
                (o >>>= 13);
            for (a = 2 * e; a < n; ++a) r[a] = 0;
            i(0 === o), i(0 === (-8192 & o));
          }),
          (v.prototype.stub = function (t) {
            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (v.prototype.mulp = function (t, e, r) {
            var i = 2 * this.guessLen13b(t.length, e.length),
              n = this.makeRBT(i),
              o = this.stub(i),
              a = new Array(i),
              s = new Array(i),
              f = new Array(i),
              h = new Array(i),
              u = new Array(i),
              d = new Array(i),
              c = r.words;
            (c.length = i),
              this.convert13b(t.words, t.length, a, i),
              this.convert13b(e.words, e.length, h, i),
              this.transform(a, o, s, f, i, n),
              this.transform(h, o, u, d, i, n);
            for (var l = 0; l < i; l++) {
              var p = s[l] * u[l] - f[l] * d[l];
              (f[l] = s[l] * d[l] + f[l] * u[l]), (s[l] = p);
            }
            return (
              this.conjugate(s, f, i),
              this.transform(s, f, c, o, i, n),
              this.conjugate(c, o, i),
              this.normalize13b(c, i),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (
              (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
            );
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = new Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), i("number" === typeof t), i(t < 67108864);
            for (var r = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                a = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += (o / 67108864) | 0),
                (r += a >>> 26),
                (this.words[n] = 67108863 & a);
            }
            return (
              0 !== r && ((this.words[n] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                var i = (r / 26) | 0,
                  n = r % 26;
                e[r] = (t.words[i] >>> n) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, i = 0;
              i < e.length && 0 === e[i];
              i++, r = r.sqr()
            );
            if (++i < e.length)
              for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                0 !== e[i] && (r = r.mul(n));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            i("number" === typeof t && t >= 0);
            var e,
              r = t % 26,
              n = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (e = 0; e < this.length; e++) {
                var s = this.words[e] & o,
                  f = ((0 | this.words[e]) - s) << r;
                (this.words[e] = f | a), (a = s >>> (26 - r));
              }
              a && ((this.words[e] = a), this.length++);
            }
            if (0 !== n) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + n] = this.words[e];
              for (e = 0; e < n; e++) this.words[e] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return i(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            var n;
            i("number" === typeof t && t >= 0),
              (n = e ? (e - (e % 26)) / 26 : 0);
            var o = t % 26,
              a = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              f = r;
            if (((n -= a), (n = Math.max(0, n)), f)) {
              for (var h = 0; h < a; h++) f.words[h] = this.words[h];
              f.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, h = 0; h < this.length; h++)
                this.words[h] = this.words[h + a];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (h = this.length - 1; h >= 0 && (0 !== u || h >= n); h--) {
              var d = 0 | this.words[h];
              (this.words[h] = (u << (26 - o)) | (d >>> o)), (u = d & s);
            }
            return (
              f && 0 !== u && (f.words[f.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return i(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26,
              n = 1 << e;
            return !(this.length <= r) && !!(this.words[r] & n);
          }),
          (o.prototype.imaskn = function (t) {
            i("number" === typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            if (
              (i(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= r)
            )
              return this;
            if (
              (0 !== e && r++,
              (this.length = Math.min(r, this.length)),
              0 !== e)
            ) {
              var n = 67108863 ^ ((67108863 >>> e) << e);
              this.words[this.length - 1] &= n;
            }
            return this._strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              i("number" === typeof t),
              i(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((i("number" === typeof t), i(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var n,
              o,
              a = t.length + r;
            this._expand(a);
            var s = 0;
            for (n = 0; n < t.length; n++) {
              o = (0 | this.words[n + r]) + s;
              var f = (0 | t.words[n]) * e;
              (s = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)),
                (this.words[n + r] = 67108863 & o);
            }
            for (; n < this.length - r; n++)
              (s = (o = (0 | this.words[n + r]) + s) >> 26),
                (this.words[n + r] = 67108863 & o);
            if (0 === s) return this._strip();
            for (i(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (o = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r = (this.length, t.length),
              i = this.clone(),
              n = t,
              a = 0 | n.words[n.length - 1];
            0 !== (r = 26 - this._countBits(a)) &&
              ((n = n.ushln(r)), i.iushln(r), (a = 0 | n.words[n.length - 1]));
            var s,
              f = i.length - n.length;
            if ("mod" !== e) {
              ((s = new o(null)).length = f + 1),
                (s.words = new Array(s.length));
              for (var h = 0; h < s.length; h++) s.words[h] = 0;
            }
            var u = i.clone()._ishlnsubmul(n, 1, f);
            0 === u.negative && ((i = u), s && (s.words[f] = 1));
            for (var d = f - 1; d >= 0; d--) {
              var c =
                67108864 * (0 | i.words[n.length + d]) +
                (0 | i.words[n.length + d - 1]);
              for (
                c = Math.min((c / a) | 0, 67108863), i._ishlnsubmul(n, c, d);
                0 !== i.negative;

              )
                c--,
                  (i.negative = 0),
                  i._ishlnsubmul(n, 1, d),
                  i.isZero() || (i.negative ^= 1);
              s && (s.words[d] = c);
            }
            return (
              s && s._strip(),
              i._strip(),
              "div" !== e && 0 !== r && i.iushrn(r),
              { div: s || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            return (
              i(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((s = this.neg().divmod(t, e)),
                  "mod" !== e && (n = s.div.neg()),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(t)),
                  { div: n, mod: a })
                : 0 === this.negative && 0 !== t.negative
                ? ((s = this.divmod(t.neg(), e)),
                  "mod" !== e && (n = s.div.neg()),
                  { div: n, mod: s.mod })
                : 0 !== (this.negative & t.negative)
                ? ((s = this.neg().divmod(t.neg(), e)),
                  "div" !== e &&
                    ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(t)),
                  { div: s.div, mod: a })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === e
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === e
                  ? { div: null, mod: new o(this.modrn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modrn(t.words[0])),
                    }
                : this._wordDiv(t, e)
            );
            var n, a, s;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              i = t.ushrn(1),
              n = t.andln(1),
              o = r.cmp(i);
            return o < 0 || (1 === n && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), i(t <= 67108863);
            for (var r = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (r * n + (0 | this.words[o])) % t;
            return e ? -n : n;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), i(t <= 67108863);
            for (var r = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 67108864 * r;
              (this.words[n] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n = new o(1), a = new o(0), s = new o(0), f = new o(1), h = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++h;
            for (var u = r.clone(), d = e.clone(); !e.isZero(); ) {
              for (
                var c = 0, l = 1;
                0 === (e.words[0] & l) && c < 26;
                ++c, l <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (n.isOdd() || a.isOdd()) && (n.iadd(u), a.isub(d)),
                    n.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                0 === (r.words[0] & b) && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || f.isOdd()) && (s.iadd(u), f.isub(d)),
                    s.iushrn(1),
                    f.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), n.isub(s), a.isub(f))
                : (r.isub(e), s.isub(n), f.isub(a));
            }
            return { a: s, b: f, gcd: r.iushln(h) };
          }),
          (o.prototype._invmp = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var n, a = new o(1), s = new o(0), f = r.clone();
              e.cmpn(1) > 0 && r.cmpn(1) > 0;

            ) {
              for (
                var h = 0, u = 1;
                0 === (e.words[0] & u) && h < 26;
                ++h, u <<= 1
              );
              if (h > 0)
                for (e.iushrn(h); h-- > 0; )
                  a.isOdd() && a.iadd(f), a.iushrn(1);
              for (
                var d = 0, c = 1;
                0 === (r.words[0] & c) && d < 26;
                ++d, c <<= 1
              );
              if (d > 0)
                for (r.iushrn(d); d-- > 0; )
                  s.isOdd() && s.iadd(f), s.iushrn(1);
              e.cmp(r) >= 0 ? (e.isub(r), a.isub(s)) : (r.isub(e), s.isub(a));
            }
            return (n = 0 === e.cmpn(1) ? a : s).cmpn(0) < 0 && n.iadd(t), n;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var i = 0; e.isEven() && r.isEven(); i++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = e.cmp(r);
              if (n < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(i);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 === (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 === (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            i("number" === typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              n = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= n), this;
            for (var o = n, a = r; 0 !== o && a < this.length; a++) {
              var s = 0 | this.words[a];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[a] = s);
            }
            return 0 !== o && ((this.words[a] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), i(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              e = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var i = 0 | this.words[r],
                n = 0 | t.words[r];
              if (i !== n) {
                i < n ? (e = -1) : i > n && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new A(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              i(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var w = { k256: null, p224: null, p192: null, p25519: null };
        function _(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function M() {
          _.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function S() {
          _.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function E() {
          _.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function k() {
          _.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function A(t) {
          if ("string" === typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            i(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function R(t) {
          A.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (_.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (_.prototype.ireduce = function (t) {
            var e,
              r = t;
            do {
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            } while (e > this.n);
            var i = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === i
                ? ((r.words[0] = 0), (r.length = 1))
                : i > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (_.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (_.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(M, _),
          (M.prototype.split = function (t, e) {
            for (var r = 4194303, i = Math.min(t.length, 9), n = 0; n < i; n++)
              e.words[n] = t.words[n];
            if (((e.length = i), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var o = t.words[9];
            for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
              var a = 0 | t.words[n];
              (t.words[n - 10] = ((a & r) << 4) | (o >>> 22)), (o = a);
            }
            (o >>>= 22),
              (t.words[n - 10] = o),
              0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (M.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = 0 | t.words[r];
              (e += 977 * i),
                (t.words[r] = 67108863 & e),
                (e = 64 * i + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(S, _),
          n(E, _),
          n(k, _),
          (k.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var i = 19 * (0 | t.words[r]) + e,
                n = 67108863 & i;
              (i >>>= 26), (t.words[r] = n), (e = i);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            if (w[t]) return w[t];
            var e;
            if ("k256" === t) e = new M();
            else if ("p224" === t) e = new S();
            else if ("p192" === t) e = new E();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              e = new k();
            }
            return (w[t] = e), e;
          }),
          (A.prototype._verify1 = function (t) {
            i(0 === t.negative, "red works only with positives"),
              i(t.red, "red works only with red numbers");
          }),
          (A.prototype._verify2 = function (t, e) {
            i(0 === (t.negative | e.negative), "red works only with positives"),
              i(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (A.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (u(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (A.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (A.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (A.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (A.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
          }),
          (A.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return r.cmpn(0) < 0 && r.iadd(this.m), r;
          }),
          (A.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (A.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (A.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (A.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (A.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (A.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((i(e % 2 === 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var n = this.m.subn(1), a = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              a++, n.iushrn(1);
            i(!n.isZero());
            var s = new o(1).toRed(this),
              f = s.redNeg(),
              h = this.m.subn(1).iushrn(1),
              u = this.m.bitLength();
            for (
              u = new o(2 * u * u).toRed(this);
              0 !== this.pow(u, h).cmp(f);

            )
              u.redIAdd(f);
            for (
              var d = this.pow(u, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                l = this.pow(t, n),
                p = a;
              0 !== l.cmp(s);

            ) {
              for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
              i(m < p);
              var g = this.pow(d, new o(1).iushln(p - m - 1));
              (c = c.redMul(g)), (d = g.redSqr()), (l = l.redMul(d)), (p = m);
            }
            return c;
          }),
          (A.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (A.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = new Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], t);
            var n = r[0],
              a = 0,
              s = 0,
              f = e.bitLength() % 26;
            for (0 === f && (f = 26), i = e.length - 1; i >= 0; i--) {
              for (var h = e.words[i], u = f - 1; u >= 0; u--) {
                var d = (h >> u) & 1;
                n !== r[0] && (n = this.sqr(n)),
                  0 !== d || 0 !== a
                    ? ((a <<= 1),
                      (a |= d),
                      (4 === ++s || (0 === i && 0 === u)) &&
                        ((n = this.mul(n, r[a])), (s = 0), (a = 0)))
                    : (s = 0);
              }
              f = 26;
            }
            return n;
          }),
          (A.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (A.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new R(t);
          }),
          n(R, A),
          (R.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (R.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (R.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (R.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              i = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(i).iushrn(this.shift),
              a = n;
            return (
              n.cmp(this.m) >= 0
                ? (a = n.isub(this.m))
                : n.cmpn(0) < 0 && (a = n.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (R.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    166244: function (t) {
      "use strict";
      var e = {};
      function r(t, r, i) {
        i || (i = Error);
        var n = (function (t) {
          var e, i;
          function n(e, i, n) {
            return (
              t.call(
                this,
                (function (t, e, i) {
                  return "string" === typeof r ? r : r(t, e, i);
                })(e, i, n)
              ) || this
            );
          }
          return (
            (i = t),
            ((e = n).prototype = Object.create(i.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = i),
            n
          );
        })(i);
        (n.prototype.name = i.name), (n.prototype.code = t), (e[t] = n);
      }
      function i(t, e) {
        if (Array.isArray(t)) {
          var r = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            r > 2
              ? "one of "
                  .concat(e, " ")
                  .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
              : 2 === r
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      r(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        r(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, r) {
            var n, o, a, s;
            if (
              ("string" === typeof e &&
              ((o = "not "), e.substr(!a || a < 0 ? 0 : +a, o.length) === o)
                ? ((n = "must not be"), (e = e.replace(/^not /, "")))
                : (n = "must be"),
              (function (t, e, r) {
                return (
                  (void 0 === r || r > t.length) && (r = t.length),
                  t.substring(r - e.length, r) === e
                );
              })(t, " argument"))
            )
              s = "The ".concat(t, " ").concat(n, " ").concat(i(e, "type"));
            else {
              var f = (function (t, e, r) {
                return (
                  "number" !== typeof r && (r = 0),
                  !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                );
              })(t, ".")
                ? "property"
                : "argument";
              s = 'The "'
                .concat(t, '" ')
                .concat(f, " ")
                .concat(n, " ")
                .concat(i(e, "type"));
            }
            return (s += ". Received type ".concat(typeof r));
          },
          TypeError
        ),
        r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        r(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        r(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (t.exports.q = e);
    },
    851278: function (t, e, r) {
      "use strict";
      var i = r(127061),
        n =
          Object.keys ||
          function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e;
          };
      t.exports = u;
      var o = r(384581),
        a = r(60003);
      r(270087)(u, o);
      for (var s = n(a.prototype), f = 0; f < s.length; f++) {
        var h = s[f];
        u.prototype[h] || (u.prototype[h] = a.prototype[h]);
      }
      function u(t) {
        if (!(this instanceof u)) return new u(t);
        o.call(this, t),
          a.call(this, t),
          (this.allowHalfOpen = !0),
          t &&
            (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", d)));
      }
      function d() {
        this._writableState.ended || i.nextTick(c, this);
      }
      function c(t) {
        t.end();
      }
      Object.defineProperty(u.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(u.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(u.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(u.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t));
          },
        });
    },
    948825: function (t, e, r) {
      "use strict";
      t.exports = n;
      var i = r(668133);
      function n(t) {
        if (!(this instanceof n)) return new n(t);
        i.call(this, t);
      }
      r(270087)(n, i),
        (n.prototype._transform = function (t, e, r) {
          r(null, t);
        });
    },
    384581: function (t, e, r) {
      "use strict";
      var i,
        n = r(127061);
      (t.exports = k), (k.ReadableState = E);
      r(850343).EventEmitter;
      var o = function (t, e) {
          return t.listeners(e).length;
        },
        a = r(156284),
        s = r(830816).Buffer,
        f =
          ("undefined" !== typeof r.g
            ? r.g
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      var h,
        u = r(347021);
      h = u && u.debuglog ? u.debuglog("stream") : function () {};
      var d,
        c,
        l,
        p = r(980077),
        b = r(294602),
        m = r(853189).getHighWaterMark,
        g = r(166244).q,
        y = g.ERR_INVALID_ARG_TYPE,
        v = g.ERR_STREAM_PUSH_AFTER_EOF,
        w = g.ERR_METHOD_NOT_IMPLEMENTED,
        _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(270087)(k, a);
      var M = b.errorOrDestroy,
        S = ["error", "close", "destroy", "pause", "resume"];
      function E(t, e, n) {
        (i = i || r(851278)),
          (t = t || {}),
          "boolean" !== typeof n && (n = e instanceof i),
          (this.objectMode = !!t.objectMode),
          n && (this.objectMode = this.objectMode || !!t.readableObjectMode),
          (this.highWaterMark = m(this, t, "readableHighWaterMark", n)),
          (this.buffer = new p()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          t.encoding &&
            (d || (d = r(234361).s),
            (this.decoder = new d(t.encoding)),
            (this.encoding = t.encoding));
      }
      function k(t) {
        if (((i = i || r(851278)), !(this instanceof k))) return new k(t);
        var e = this instanceof i;
        (this._readableState = new E(t, this, e)),
          (this.readable = !0),
          t &&
            ("function" === typeof t.read && (this._read = t.read),
            "function" === typeof t.destroy && (this._destroy = t.destroy)),
          a.call(this);
      }
      function A(t, e, r, i, n) {
        h("readableAddChunk", e);
        var o,
          a = t._readableState;
        if (null === e)
          (a.reading = !1),
            (function (t, e) {
              if ((h("onEofChunk"), e.ended)) return;
              if (e.decoder) {
                var r = e.decoder.end();
                r &&
                  r.length &&
                  (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
              }
              (e.ended = !0),
                e.sync
                  ? I(t)
                  : ((e.needReadable = !1),
                    e.emittedReadable || ((e.emittedReadable = !0), T(t)));
            })(t, a);
        else if (
          (n ||
            (o = (function (t, e) {
              var r;
              (i = e),
                s.isBuffer(i) ||
                  i instanceof f ||
                  "string" === typeof e ||
                  void 0 === e ||
                  t.objectMode ||
                  (r = new y("chunk", ["string", "Buffer", "Uint8Array"], e));
              var i;
              return r;
            })(a, e)),
          o)
        )
          M(t, o);
        else if (a.objectMode || (e && e.length > 0))
          if (
            ("string" === typeof e ||
              a.objectMode ||
              Object.getPrototypeOf(e) === s.prototype ||
              (e = (function (t) {
                return s.from(t);
              })(e)),
            i)
          )
            a.endEmitted ? M(t, new _()) : R(t, a, e, !0);
          else if (a.ended) M(t, new v());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !r
                ? ((e = a.decoder.write(e)),
                  a.objectMode || 0 !== e.length ? R(t, a, e, !1) : P(t, a))
                : R(t, a, e, !1);
          }
        else i || ((a.reading = !1), P(t, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function R(t, e, r, i) {
        e.flowing && 0 === e.length && !e.sync
          ? ((e.awaitDrain = 0), t.emit("data", r))
          : ((e.length += e.objectMode ? 1 : r.length),
            i ? e.buffer.unshift(r) : e.buffer.push(r),
            e.needReadable && I(t)),
          P(t, e);
      }
      Object.defineProperty(k.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (t) {
          this._readableState && (this._readableState.destroyed = t);
        },
      }),
        (k.prototype.destroy = b.destroy),
        (k.prototype._undestroy = b.undestroy),
        (k.prototype._destroy = function (t, e) {
          e(t);
        }),
        (k.prototype.push = function (t, e) {
          var r,
            i = this._readableState;
          return (
            i.objectMode
              ? (r = !0)
              : "string" === typeof t &&
                ((e = e || i.defaultEncoding) !== i.encoding &&
                  ((t = s.from(t, e)), (e = "")),
                (r = !0)),
            A(this, t, e, !1, r)
          );
        }),
        (k.prototype.unshift = function (t) {
          return A(this, t, null, !0, !1);
        }),
        (k.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (k.prototype.setEncoding = function (t) {
          d || (d = r(234361).s);
          var e = new d(t);
          (this._readableState.decoder = e),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var i = this._readableState.buffer.head, n = ""; null !== i; )
            (n += e.write(i.data)), (i = i.next);
          return (
            this._readableState.buffer.clear(),
            "" !== n && this._readableState.buffer.push(n),
            (this._readableState.length = n.length),
            this
          );
        });
      var x = 1073741824;
      function B(t, e) {
        return t <= 0 || (0 === e.length && e.ended)
          ? 0
          : e.objectMode
          ? 1
          : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark &&
              (e.highWaterMark = (function (t) {
                return (
                  t >= x
                    ? (t = x)
                    : (t--,
                      (t |= t >>> 1),
                      (t |= t >>> 2),
                      (t |= t >>> 4),
                      (t |= t >>> 8),
                      (t |= t >>> 16),
                      t++),
                  t
                );
              })(t)),
            t <= e.length
              ? t
              : e.ended
              ? e.length
              : ((e.needReadable = !0), 0));
      }
      function I(t) {
        var e = t._readableState;
        h("emitReadable", e.needReadable, e.emittedReadable),
          (e.needReadable = !1),
          e.emittedReadable ||
            (h("emitReadable", e.flowing),
            (e.emittedReadable = !0),
            n.nextTick(T, t));
      }
      function T(t) {
        var e = t._readableState;
        h("emitReadable_", e.destroyed, e.length, e.ended),
          e.destroyed ||
            (!e.length && !e.ended) ||
            (t.emit("readable"), (e.emittedReadable = !1)),
          (e.needReadable =
            !e.flowing && !e.ended && e.length <= e.highWaterMark),
          N(t);
      }
      function P(t, e) {
        e.readingMore || ((e.readingMore = !0), n.nextTick(j, t, e));
      }
      function j(t, e) {
        for (
          ;
          !e.reading &&
          !e.ended &&
          (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

        ) {
          var r = e.length;
          if ((h("maybeReadMore read 0"), t.read(0), r === e.length)) break;
        }
        e.readingMore = !1;
      }
      function O(t) {
        var e = t._readableState;
        (e.readableListening = t.listenerCount("readable") > 0),
          e.resumeScheduled && !e.paused
            ? (e.flowing = !0)
            : t.listenerCount("data") > 0 && t.resume();
      }
      function C(t) {
        h("readable nexttick read 0"), t.read(0);
      }
      function L(t, e) {
        h("resume", e.reading),
          e.reading || t.read(0),
          (e.resumeScheduled = !1),
          t.emit("resume"),
          N(t),
          e.flowing && !e.reading && t.read(0);
      }
      function N(t) {
        var e = t._readableState;
        for (h("flow", e.flowing); e.flowing && null !== t.read(); );
      }
      function D(t, e) {
        return 0 === e.length
          ? null
          : (e.objectMode
              ? (r = e.buffer.shift())
              : !t || t >= e.length
              ? ((r = e.decoder
                  ? e.buffer.join("")
                  : 1 === e.buffer.length
                  ? e.buffer.first()
                  : e.buffer.concat(e.length)),
                e.buffer.clear())
              : (r = e.buffer.consume(t, e.decoder)),
            r);
        var r;
      }
      function q(t) {
        var e = t._readableState;
        h("endReadable", e.endEmitted),
          e.endEmitted || ((e.ended = !0), n.nextTick(U, e, t));
      }
      function U(t, e) {
        if (
          (h("endReadableNT", t.endEmitted, t.length),
          !t.endEmitted &&
            0 === t.length &&
            ((t.endEmitted = !0),
            (e.readable = !1),
            e.emit("end"),
            t.autoDestroy))
        ) {
          var r = e._writableState;
          (!r || (r.autoDestroy && r.finished)) && e.destroy();
        }
      }
      function z(t, e) {
        for (var r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
        return -1;
      }
      (k.prototype.read = function (t) {
        h("read", t), (t = parseInt(t, 10));
        var e = this._readableState,
          r = t;
        if (
          (0 !== t && (e.emittedReadable = !1),
          0 === t &&
            e.needReadable &&
            ((0 !== e.highWaterMark
              ? e.length >= e.highWaterMark
              : e.length > 0) ||
              e.ended))
        )
          return (
            h("read: emitReadable", e.length, e.ended),
            0 === e.length && e.ended ? q(this) : I(this),
            null
          );
        if (0 === (t = B(t, e)) && e.ended)
          return 0 === e.length && q(this), null;
        var i,
          n = e.needReadable;
        return (
          h("need readable", n),
          (0 === e.length || e.length - t < e.highWaterMark) &&
            h("length less than watermark", (n = !0)),
          e.ended || e.reading
            ? h("reading or ended", (n = !1))
            : n &&
              (h("do read"),
              (e.reading = !0),
              (e.sync = !0),
              0 === e.length && (e.needReadable = !0),
              this._read(e.highWaterMark),
              (e.sync = !1),
              e.reading || (t = B(r, e))),
          null === (i = t > 0 ? D(t, e) : null)
            ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
            : ((e.length -= t), (e.awaitDrain = 0)),
          0 === e.length &&
            (e.ended || (e.needReadable = !0), r !== t && e.ended && q(this)),
          null !== i && this.emit("data", i),
          i
        );
      }),
        (k.prototype._read = function (t) {
          M(this, new w("_read()"));
        }),
        (k.prototype.pipe = function (t, e) {
          var r = this,
            i = this._readableState;
          switch (i.pipesCount) {
            case 0:
              i.pipes = t;
              break;
            case 1:
              i.pipes = [i.pipes, t];
              break;
            default:
              i.pipes.push(t);
          }
          (i.pipesCount += 1), h("pipe count=%d opts=%j", i.pipesCount, e);
          var a =
            (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? f : m;
          function s(e, n) {
            h("onunpipe"),
              e === r &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                h("cleanup"),
                t.removeListener("close", p),
                t.removeListener("finish", b),
                t.removeListener("drain", u),
                t.removeListener("error", l),
                t.removeListener("unpipe", s),
                r.removeListener("end", f),
                r.removeListener("end", m),
                r.removeListener("data", c),
                (d = !0),
                !i.awaitDrain ||
                  (t._writableState && !t._writableState.needDrain) ||
                  u());
          }
          function f() {
            h("onend"), t.end();
          }
          i.endEmitted ? n.nextTick(a) : r.once("end", a), t.on("unpipe", s);
          var u = (function (t) {
            return function () {
              var e = t._readableState;
              h("pipeOnDrain", e.awaitDrain),
                e.awaitDrain && e.awaitDrain--,
                0 === e.awaitDrain && o(t, "data") && ((e.flowing = !0), N(t));
            };
          })(r);
          t.on("drain", u);
          var d = !1;
          function c(e) {
            h("ondata");
            var n = t.write(e);
            h("dest.write", n),
              !1 === n &&
                (((1 === i.pipesCount && i.pipes === t) ||
                  (i.pipesCount > 1 && -1 !== z(i.pipes, t))) &&
                  !d &&
                  (h("false write response, pause", i.awaitDrain),
                  i.awaitDrain++),
                r.pause());
          }
          function l(e) {
            h("onerror", e),
              m(),
              t.removeListener("error", l),
              0 === o(t, "error") && M(t, e);
          }
          function p() {
            t.removeListener("finish", b), m();
          }
          function b() {
            h("onfinish"), t.removeListener("close", p), m();
          }
          function m() {
            h("unpipe"), r.unpipe(t);
          }
          return (
            r.on("data", c),
            (function (t, e, r) {
              if ("function" === typeof t.prependListener)
                return t.prependListener(e, r);
              t._events && t._events[e]
                ? Array.isArray(t._events[e])
                  ? t._events[e].unshift(r)
                  : (t._events[e] = [r, t._events[e]])
                : t.on(e, r);
            })(t, "error", l),
            t.once("close", p),
            t.once("finish", b),
            t.emit("pipe", r),
            i.flowing || (h("pipe resume"), r.resume()),
            t
          );
        }),
        (k.prototype.unpipe = function (t) {
          var e = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === e.pipesCount) return this;
          if (1 === e.pipesCount)
            return (
              (t && t !== e.pipes) ||
                (t || (t = e.pipes),
                (e.pipes = null),
                (e.pipesCount = 0),
                (e.flowing = !1),
                t && t.emit("unpipe", this, r)),
              this
            );
          if (!t) {
            var i = e.pipes,
              n = e.pipesCount;
            (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
            for (var o = 0; o < n; o++)
              i[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = z(e.pipes, t);
          return (
            -1 === a ||
              (e.pipes.splice(a, 1),
              (e.pipesCount -= 1),
              1 === e.pipesCount && (e.pipes = e.pipes[0]),
              t.emit("unpipe", this, r)),
            this
          );
        }),
        (k.prototype.on = function (t, e) {
          var r = a.prototype.on.call(this, t, e),
            i = this._readableState;
          return (
            "data" === t
              ? ((i.readableListening = this.listenerCount("readable") > 0),
                !1 !== i.flowing && this.resume())
              : "readable" === t &&
                (i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0),
                  (i.flowing = !1),
                  (i.emittedReadable = !1),
                  h("on readable", i.length, i.reading),
                  i.length ? I(this) : i.reading || n.nextTick(C, this))),
            r
          );
        }),
        (k.prototype.addListener = k.prototype.on),
        (k.prototype.removeListener = function (t, e) {
          var r = a.prototype.removeListener.call(this, t, e);
          return "readable" === t && n.nextTick(O, this), r;
        }),
        (k.prototype.removeAllListeners = function (t) {
          var e = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== t && void 0 !== t) || n.nextTick(O, this), e;
        }),
        (k.prototype.resume = function () {
          var t = this._readableState;
          return (
            t.flowing ||
              (h("resume"),
              (t.flowing = !t.readableListening),
              (function (t, e) {
                e.resumeScheduled ||
                  ((e.resumeScheduled = !0), n.nextTick(L, t, e));
              })(this, t)),
            (t.paused = !1),
            this
          );
        }),
        (k.prototype.pause = function () {
          return (
            h("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (h("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (k.prototype.wrap = function (t) {
          var e = this,
            r = this._readableState,
            i = !1;
          for (var n in (t.on("end", function () {
            if ((h("wrapped end"), r.decoder && !r.ended)) {
              var t = r.decoder.end();
              t && t.length && e.push(t);
            }
            e.push(null);
          }),
          t.on("data", function (n) {
            (h("wrapped data"),
            r.decoder && (n = r.decoder.write(n)),
            !r.objectMode || (null !== n && void 0 !== n)) &&
              (r.objectMode || (n && n.length)) &&
              (e.push(n) || ((i = !0), t.pause()));
          }),
          t))
            void 0 === this[n] &&
              "function" === typeof t[n] &&
              (this[n] = (function (e) {
                return function () {
                  return t[e].apply(t, arguments);
                };
              })(n));
          for (var o = 0; o < S.length; o++)
            t.on(S[o], this.emit.bind(this, S[o]));
          return (
            (this._read = function (e) {
              h("wrapped _read", e), i && ((i = !1), t.resume());
            }),
            this
          );
        }),
        "function" === typeof Symbol &&
          (k.prototype[Symbol.asyncIterator] = function () {
            return void 0 === c && (c = r(772349)), c(this);
          }),
        Object.defineProperty(k.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(k.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(k.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (t) {
            this._readableState && (this._readableState.flowing = t);
          },
        }),
        (k._fromList = D),
        Object.defineProperty(k.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" === typeof Symbol &&
          (k.from = function (t, e) {
            return void 0 === l && (l = r(5677)), l(k, t, e);
          });
    },
    668133: function (t, e, r) {
      "use strict";
      t.exports = u;
      var i = r(166244).q,
        n = i.ERR_METHOD_NOT_IMPLEMENTED,
        o = i.ERR_MULTIPLE_CALLBACK,
        a = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = i.ERR_TRANSFORM_WITH_LENGTH_0,
        f = r(851278);
      function h(t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var i = r.writecb;
        if (null === i) return this.emit("error", new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != e && this.push(e),
          i(t);
        var n = this._readableState;
        (n.reading = !1),
          (n.needReadable || n.length < n.highWaterMark) &&
            this._read(n.highWaterMark);
      }
      function u(t) {
        if (!(this instanceof u)) return new u(t);
        f.call(this, t),
          (this._transformState = {
            afterTransform: h.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" === typeof t.transform &&
              (this._transform = t.transform),
            "function" === typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", d);
      }
      function d() {
        var t = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? c(this, null, null)
          : this._flush(function (e, r) {
              c(t, e, r);
            });
      }
      function c(t, e, r) {
        if (e) return t.emit("error", e);
        if ((null != r && t.push(r), t._writableState.length)) throw new s();
        if (t._transformState.transforming) throw new a();
        return t.push(null);
      }
      r(270087)(u, f),
        (u.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            f.prototype.push.call(this, t, e)
          );
        }),
        (u.prototype._transform = function (t, e, r) {
          r(new n("_transform()"));
        }),
        (u.prototype._write = function (t, e, r) {
          var i = this._transformState;
          if (
            ((i.writecb = r),
            (i.writechunk = t),
            (i.writeencoding = e),
            !i.transforming)
          ) {
            var n = this._readableState;
            (i.needTransform || n.needReadable || n.length < n.highWaterMark) &&
              this._read(n.highWaterMark);
          }
        }),
        (u.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (u.prototype._destroy = function (t, e) {
          f.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    },
    60003: function (t, e, r) {
      "use strict";
      var i,
        n = r(127061);
      function o(t) {
        var e = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (t, e, r) {
              var i = t.entry;
              t.entry = null;
              for (; i; ) {
                var n = i.callback;
                e.pendingcb--, n(r), (i = i.next);
              }
              e.corkedRequestsFree.next = t;
            })(e, t);
          });
      }
      (t.exports = k), (k.WritableState = E);
      var a = { deprecate: r(317451) },
        s = r(156284),
        f = r(830816).Buffer,
        h =
          ("undefined" !== typeof r.g
            ? r.g
            : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof self
            ? self
            : {}
          ).Uint8Array || function () {};
      var u,
        d = r(294602),
        c = r(853189).getHighWaterMark,
        l = r(166244).q,
        p = l.ERR_INVALID_ARG_TYPE,
        b = l.ERR_METHOD_NOT_IMPLEMENTED,
        m = l.ERR_MULTIPLE_CALLBACK,
        g = l.ERR_STREAM_CANNOT_PIPE,
        y = l.ERR_STREAM_DESTROYED,
        v = l.ERR_STREAM_NULL_VALUES,
        w = l.ERR_STREAM_WRITE_AFTER_END,
        _ = l.ERR_UNKNOWN_ENCODING,
        M = d.errorOrDestroy;
      function S() {}
      function E(t, e, a) {
        (i = i || r(851278)),
          (t = t || {}),
          "boolean" !== typeof a && (a = e instanceof i),
          (this.objectMode = !!t.objectMode),
          a && (this.objectMode = this.objectMode || !!t.writableObjectMode),
          (this.highWaterMark = c(this, t, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === t.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (t) {
            !(function (t, e) {
              var r = t._writableState,
                i = r.sync,
                o = r.writecb;
              if ("function" !== typeof o) throw new m();
              if (
                ((function (t) {
                  (t.writing = !1),
                    (t.writecb = null),
                    (t.length -= t.writelen),
                    (t.writelen = 0);
                })(r),
                e)
              )
                !(function (t, e, r, i, o) {
                  --e.pendingcb,
                    r
                      ? (n.nextTick(o, i),
                        n.nextTick(T, t, e),
                        (t._writableState.errorEmitted = !0),
                        M(t, i))
                      : (o(i),
                        (t._writableState.errorEmitted = !0),
                        M(t, i),
                        T(t, e));
                })(t, r, i, e, o);
              else {
                var a = B(r) || t.destroyed;
                a ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  x(t, r),
                  i ? n.nextTick(R, t, r, a, o) : R(t, r, a, o);
              }
            })(e, t);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new o(this));
      }
      function k(t) {
        var e = this instanceof (i = i || r(851278));
        if (!e && !u.call(k, this)) return new k(t);
        (this._writableState = new E(t, this, e)),
          (this.writable = !0),
          t &&
            ("function" === typeof t.write && (this._write = t.write),
            "function" === typeof t.writev && (this._writev = t.writev),
            "function" === typeof t.destroy && (this._destroy = t.destroy),
            "function" === typeof t.final && (this._final = t.final)),
          s.call(this);
      }
      function A(t, e, r, i, n, o, a) {
        (e.writelen = i),
          (e.writecb = a),
          (e.writing = !0),
          (e.sync = !0),
          e.destroyed
            ? e.onwrite(new y("write"))
            : r
            ? t._writev(n, e.onwrite)
            : t._write(n, o, e.onwrite),
          (e.sync = !1);
      }
      function R(t, e, r, i) {
        r ||
          (function (t, e) {
            0 === e.length &&
              e.needDrain &&
              ((e.needDrain = !1), t.emit("drain"));
          })(t, e),
          e.pendingcb--,
          i(),
          T(t, e);
      }
      function x(t, e) {
        e.bufferProcessing = !0;
        var r = e.bufferedRequest;
        if (t._writev && r && r.next) {
          var i = e.bufferedRequestCount,
            n = new Array(i),
            a = e.corkedRequestsFree;
          a.entry = r;
          for (var s = 0, f = !0; r; )
            (n[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
          (n.allBuffers = f),
            A(t, e, !0, e.length, n, "", a.finish),
            e.pendingcb++,
            (e.lastBufferedRequest = null),
            a.next
              ? ((e.corkedRequestsFree = a.next), (a.next = null))
              : (e.corkedRequestsFree = new o(e)),
            (e.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var h = r.chunk,
              u = r.encoding,
              d = r.callback;
            if (
              (A(t, e, !1, e.objectMode ? 1 : h.length, h, u, d),
              (r = r.next),
              e.bufferedRequestCount--,
              e.writing)
            )
              break;
          }
          null === r && (e.lastBufferedRequest = null);
        }
        (e.bufferedRequest = r), (e.bufferProcessing = !1);
      }
      function B(t) {
        return (
          t.ending &&
          0 === t.length &&
          null === t.bufferedRequest &&
          !t.finished &&
          !t.writing
        );
      }
      function I(t, e) {
        t._final(function (r) {
          e.pendingcb--,
            r && M(t, r),
            (e.prefinished = !0),
            t.emit("prefinish"),
            T(t, e);
        });
      }
      function T(t, e) {
        var r = B(e);
        if (
          r &&
          ((function (t, e) {
            e.prefinished ||
              e.finalCalled ||
              ("function" !== typeof t._final || e.destroyed
                ? ((e.prefinished = !0), t.emit("prefinish"))
                : (e.pendingcb++, (e.finalCalled = !0), n.nextTick(I, t, e)));
          })(t, e),
          0 === e.pendingcb &&
            ((e.finished = !0), t.emit("finish"), e.autoDestroy))
        ) {
          var i = t._readableState;
          (!i || (i.autoDestroy && i.endEmitted)) && t.destroy();
        }
        return r;
      }
      r(270087)(k, s),
        (E.prototype.getBuffer = function () {
          for (var t = this.bufferedRequest, e = []; t; )
            e.push(t), (t = t.next);
          return e;
        }),
        (function () {
          try {
            Object.defineProperty(E.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (t) {}
        })(),
        "function" === typeof Symbol &&
        Symbol.hasInstance &&
        "function" === typeof Function.prototype[Symbol.hasInstance]
          ? ((u = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(k, Symbol.hasInstance, {
              value: function (t) {
                return (
                  !!u.call(this, t) ||
                  (this === k && t && t._writableState instanceof E)
                );
              },
            }))
          : (u = function (t) {
              return t instanceof this;
            }),
        (k.prototype.pipe = function () {
          M(this, new g());
        }),
        (k.prototype.write = function (t, e, r) {
          var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((i = t), f.isBuffer(i) || i instanceof h);
          return (
            s &&
              !f.isBuffer(t) &&
              (t = (function (t) {
                return f.from(t);
              })(t)),
            "function" === typeof e && ((r = e), (e = null)),
            s ? (e = "buffer") : e || (e = o.defaultEncoding),
            "function" !== typeof r && (r = S),
            o.ending
              ? (function (t, e) {
                  var r = new w();
                  M(t, r), n.nextTick(e, r);
                })(this, r)
              : (s ||
                  (function (t, e, r, i) {
                    var o;
                    return (
                      null === r
                        ? (o = new v())
                        : "string" === typeof r ||
                          e.objectMode ||
                          (o = new p("chunk", ["string", "Buffer"], r)),
                      !o || (M(t, o), n.nextTick(i, o), !1)
                    );
                  })(this, o, t, r)) &&
                (o.pendingcb++,
                (a = (function (t, e, r, i, n, o) {
                  if (!r) {
                    var a = (function (t, e, r) {
                      t.objectMode ||
                        !1 === t.decodeStrings ||
                        "string" !== typeof e ||
                        (e = f.from(e, r));
                      return e;
                    })(e, i, n);
                    i !== a && ((r = !0), (n = "buffer"), (i = a));
                  }
                  var s = e.objectMode ? 1 : i.length;
                  e.length += s;
                  var h = e.length < e.highWaterMark;
                  h || (e.needDrain = !0);
                  if (e.writing || e.corked) {
                    var u = e.lastBufferedRequest;
                    (e.lastBufferedRequest = {
                      chunk: i,
                      encoding: n,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      u
                        ? (u.next = e.lastBufferedRequest)
                        : (e.bufferedRequest = e.lastBufferedRequest),
                      (e.bufferedRequestCount += 1);
                  } else A(t, e, !1, s, i, n, o);
                  return h;
                })(this, o, s, t, e, r))),
            a
          );
        }),
        (k.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (k.prototype.uncork = function () {
          var t = this._writableState;
          t.corked &&
            (t.corked--,
            t.writing ||
              t.corked ||
              t.bufferProcessing ||
              !t.bufferedRequest ||
              x(this, t));
        }),
        (k.prototype.setDefaultEncoding = function (t) {
          if (
            ("string" === typeof t && (t = t.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((t + "").toLowerCase()) > -1
            ))
          )
            throw new _(t);
          return (this._writableState.defaultEncoding = t), this;
        }),
        Object.defineProperty(k.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(k.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (k.prototype._write = function (t, e, r) {
          r(new b("_write()"));
        }),
        (k.prototype._writev = null),
        (k.prototype.end = function (t, e, r) {
          var i = this._writableState;
          return (
            "function" === typeof t
              ? ((r = t), (t = null), (e = null))
              : "function" === typeof e && ((r = e), (e = null)),
            null !== t && void 0 !== t && this.write(t, e),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              (function (t, e, r) {
                (e.ending = !0),
                  T(t, e),
                  r && (e.finished ? n.nextTick(r) : t.once("finish", r));
                (e.ended = !0), (t.writable = !1);
              })(this, i, r),
            this
          );
        }),
        Object.defineProperty(k.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(k.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (t) {
            this._writableState && (this._writableState.destroyed = t);
          },
        }),
        (k.prototype.destroy = d.destroy),
        (k.prototype._undestroy = d.undestroy),
        (k.prototype._destroy = function (t, e) {
          e(t);
        });
    },
    772349: function (t, e, r) {
      "use strict";
      var i,
        n = r(127061);
      function o(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== typeof t || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var i = r.call(t, e || "default");
                if ("object" !== typeof i) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" === typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var a = r(153311),
        s = Symbol("lastResolve"),
        f = Symbol("lastReject"),
        h = Symbol("error"),
        u = Symbol("ended"),
        d = Symbol("lastPromise"),
        c = Symbol("handlePromise"),
        l = Symbol("stream");
      function p(t, e) {
        return { value: t, done: e };
      }
      function b(t) {
        var e = t[s];
        if (null !== e) {
          var r = t[l].read();
          null !== r &&
            ((t[d] = null), (t[s] = null), (t[f] = null), e(p(r, !1)));
        }
      }
      function m(t) {
        n.nextTick(b, t);
      }
      var g = Object.getPrototypeOf(function () {}),
        y = Object.setPrototypeOf(
          (o(
            (i = {
              get stream() {
                return this[l];
              },
              next: function () {
                var t = this,
                  e = this[h];
                if (null !== e) return Promise.reject(e);
                if (this[u]) return Promise.resolve(p(void 0, !0));
                if (this[l].destroyed)
                  return new Promise(function (e, r) {
                    n.nextTick(function () {
                      t[h] ? r(t[h]) : e(p(void 0, !0));
                    });
                  });
                var r,
                  i = this[d];
                if (i)
                  r = new Promise(
                    (function (t, e) {
                      return function (r, i) {
                        t.then(function () {
                          e[u] ? r(p(void 0, !0)) : e[c](r, i);
                        }, i);
                      };
                    })(i, this)
                  );
                else {
                  var o = this[l].read();
                  if (null !== o) return Promise.resolve(p(o, !1));
                  r = new Promise(this[c]);
                }
                return (this[d] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          o(i, "return", function () {
            var t = this;
            return new Promise(function (e, r) {
              t[l].destroy(null, function (t) {
                t ? r(t) : e(p(void 0, !0));
              });
            });
          }),
          i),
          g
        );
      t.exports = function (t) {
        var e,
          r = Object.create(
            y,
            (o((e = {}), l, { value: t, writable: !0 }),
            o(e, s, { value: null, writable: !0 }),
            o(e, f, { value: null, writable: !0 }),
            o(e, h, { value: null, writable: !0 }),
            o(e, u, { value: t._readableState.endEmitted, writable: !0 }),
            o(e, c, {
              value: function (t, e) {
                var i = r[l].read();
                i
                  ? ((r[d] = null), (r[s] = null), (r[f] = null), t(p(i, !1)))
                  : ((r[s] = t), (r[f] = e));
              },
              writable: !0,
            }),
            e)
          );
        return (
          (r[d] = null),
          a(t, function (t) {
            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
              var e = r[f];
              return (
                null !== e &&
                  ((r[d] = null), (r[s] = null), (r[f] = null), e(t)),
                void (r[h] = t)
              );
            }
            var i = r[s];
            null !== i &&
              ((r[d] = null), (r[s] = null), (r[f] = null), i(p(void 0, !0))),
              (r[u] = !0);
          }),
          t.on("readable", m.bind(null, r)),
          r
        );
      };
    },
    980077: function (t, e, r) {
      "use strict";
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                o(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function o(t, e, r) {
        return (
          (e = s(e)) in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function a(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, s(i.key), i);
        }
      }
      function s(t) {
        var e = (function (t, e) {
          if ("object" !== typeof t || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var i = r.call(t, e || "default");
            if ("object" !== typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" === typeof e ? e : String(e);
      }
      var f = r(830816).Buffer,
        h = r(584215).inspect,
        u = (h && h.custom) || "inspect";
      t.exports = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var e, r, i;
        return (
          (e = t),
          (r = [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, r = "" + e.data; (e = e.next); )
                  r += t + e.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return f.alloc(0);
                for (
                  var e, r, i, n = f.allocUnsafe(t >>> 0), o = this.head, a = 0;
                  o;

                )
                  (e = o.data),
                    (r = n),
                    (i = a),
                    f.prototype.copy.call(e, r, i),
                    (a += o.data.length),
                    (o = o.next);
                return n;
              },
            },
            {
              key: "consume",
              value: function (t, e) {
                var r;
                return (
                  t < this.head.data.length
                    ? ((r = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (r =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  r
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  r = 1,
                  i = e.data;
                for (t -= i.length; (e = e.next); ) {
                  var n = e.data,
                    o = t > n.length ? n.length : t;
                  if (
                    (o === n.length ? (i += n) : (i += n.slice(0, t)),
                    0 === (t -= o))
                  ) {
                    o === n.length
                      ? (++r,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = n.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), i;
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = f.allocUnsafe(t),
                  r = this.head,
                  i = 1;
                for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                  var n = r.data,
                    o = t > n.length ? n.length : t;
                  if ((n.copy(e, e.length - t, 0, o), 0 === (t -= o))) {
                    o === n.length
                      ? (++i,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = n.slice(o)));
                    break;
                  }
                  ++i;
                }
                return (this.length -= i), e;
              },
            },
            {
              key: u,
              value: function (t, e) {
                return h(
                  this,
                  n(n({}, e), {}, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]) && a(e.prototype, r),
          i && a(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
    },
    294602: function (t, e, r) {
      "use strict";
      var i = r(127061);
      function n(t, e) {
        a(t, e), o(t);
      }
      function o(t) {
        (t._writableState && !t._writableState.emitClose) ||
          (t._readableState && !t._readableState.emitClose) ||
          t.emit("close");
      }
      function a(t, e) {
        t.emit("error", e);
      }
      t.exports = {
        destroy: function (t, e) {
          var r = this,
            s = this._readableState && this._readableState.destroyed,
            f = this._writableState && this._writableState.destroyed;
          return s || f
            ? (e
                ? e(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      i.nextTick(a, this, t))
                    : i.nextTick(a, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !e && t
                  ? r._writableState
                    ? r._writableState.errorEmitted
                      ? i.nextTick(o, r)
                      : ((r._writableState.errorEmitted = !0),
                        i.nextTick(n, r, t))
                    : i.nextTick(n, r, t)
                  : e
                  ? (i.nextTick(o, r), e(t))
                  : i.nextTick(o, r);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (t, e) {
          var r = t._readableState,
            i = t._writableState;
          (r && r.autoDestroy) || (i && i.autoDestroy)
            ? t.destroy(e)
            : t.emit("error", e);
        },
      };
    },
    153311: function (t, e, r) {
      "use strict";
      var i = r(166244).q.ERR_STREAM_PREMATURE_CLOSE;
      function n() {}
      t.exports = function t(e, r, o) {
        if ("function" === typeof r) return t(e, null, r);
        r || (r = {}),
          (o = (function (t) {
            var e = !1;
            return function () {
              if (!e) {
                e = !0;
                for (
                  var r = arguments.length, i = new Array(r), n = 0;
                  n < r;
                  n++
                )
                  i[n] = arguments[n];
                t.apply(this, i);
              }
            };
          })(o || n));
        var a = r.readable || (!1 !== r.readable && e.readable),
          s = r.writable || (!1 !== r.writable && e.writable),
          f = function () {
            e.writable || u();
          },
          h = e._writableState && e._writableState.finished,
          u = function () {
            (s = !1), (h = !0), a || o.call(e);
          },
          d = e._readableState && e._readableState.endEmitted,
          c = function () {
            (a = !1), (d = !0), s || o.call(e);
          },
          l = function (t) {
            o.call(e, t);
          },
          p = function () {
            var t;
            return a && !d
              ? ((e._readableState && e._readableState.ended) || (t = new i()),
                o.call(e, t))
              : s && !h
              ? ((e._writableState && e._writableState.ended) || (t = new i()),
                o.call(e, t))
              : void 0;
          },
          b = function () {
            e.req.on("finish", u);
          };
        return (
          !(function (t) {
            return t.setHeader && "function" === typeof t.abort;
          })(e)
            ? s && !e._writableState && (e.on("end", f), e.on("close", f))
            : (e.on("complete", u),
              e.on("abort", p),
              e.req ? b() : e.on("request", b)),
          e.on("end", c),
          e.on("finish", u),
          !1 !== r.error && e.on("error", l),
          e.on("close", p),
          function () {
            e.removeListener("complete", u),
              e.removeListener("abort", p),
              e.removeListener("request", b),
              e.req && e.req.removeListener("finish", u),
              e.removeListener("end", f),
              e.removeListener("close", f),
              e.removeListener("finish", u),
              e.removeListener("end", c),
              e.removeListener("error", l),
              e.removeListener("close", p);
          }
        );
      };
    },
    5677: function (t) {
      t.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    536192: function (t, e, r) {
      "use strict";
      var i;
      var n = r(166244).q,
        o = n.ERR_MISSING_ARGS,
        a = n.ERR_STREAM_DESTROYED;
      function s(t) {
        if (t) throw t;
      }
      function f(t, e, n, o) {
        o = (function (t) {
          var e = !1;
          return function () {
            e || ((e = !0), t.apply(void 0, arguments));
          };
        })(o);
        var s = !1;
        t.on("close", function () {
          s = !0;
        }),
          void 0 === i && (i = r(153311)),
          i(t, { readable: e, writable: n }, function (t) {
            if (t) return o(t);
            (s = !0), o();
          });
        var f = !1;
        return function (e) {
          if (!s && !f)
            return (
              (f = !0),
              (function (t) {
                return t.setHeader && "function" === typeof t.abort;
              })(t)
                ? t.abort()
                : "function" === typeof t.destroy
                ? t.destroy()
                : void o(e || new a("pipe"))
            );
        };
      }
      function h(t) {
        t();
      }
      function u(t, e) {
        return t.pipe(e);
      }
      function d(t) {
        return t.length
          ? "function" !== typeof t[t.length - 1]
            ? s
            : t.pop()
          : s;
      }
      t.exports = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        var i,
          n = d(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
          throw new o("streams");
        var a = e.map(function (t, r) {
          var o = r < e.length - 1;
          return f(t, o, r > 0, function (t) {
            i || (i = t), t && a.forEach(h), o || (a.forEach(h), n(i));
          });
        });
        return e.reduce(u);
      };
    },
    853189: function (t, e, r) {
      "use strict";
      var i = r(166244).q.ERR_INVALID_OPT_VALUE;
      t.exports = {
        getHighWaterMark: function (t, e, r, n) {
          var o = (function (t, e, r) {
            return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null;
          })(e, n, r);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new i(n ? r : "highWaterMark", o);
            return Math.floor(o);
          }
          return t.objectMode ? 16 : 16384;
        },
      };
    },
    156284: function (t, e, r) {
      t.exports = r(850343).EventEmitter;
    },
    379649: function (t, e, r) {
      ((e = t.exports = r(384581)).Stream = e),
        (e.Readable = e),
        (e.Writable = r(60003)),
        (e.Duplex = r(851278)),
        (e.Transform = r(668133)),
        (e.PassThrough = r(948825)),
        (e.finished = r(153311)),
        (e.pipeline = r(536192));
    },
    357752: function (t, e, r) {
      var i = r(830816).Buffer;
      t.exports = function (t, e) {
        for (
          var r = Math.min(t.length, e.length), n = new i(r), o = 0;
          o < r;
          ++o
        )
          n[o] = t[o] ^ e[o];
        return n;
      };
    },
    373081: function (t, e, r) {
      var i = r(327172).Buffer,
        n = r(504957).Transform,
        o = r(234361).s;
      function a(t) {
        n.call(this),
          (this.hashMode = "string" === typeof t),
          this.hashMode
            ? (this[t] = this._finalOrDigest)
            : (this.final = this._finalOrDigest),
          this._final && ((this.__final = this._final), (this._final = null)),
          (this._decoder = null),
          (this._encoding = null);
      }
      r(270087)(a, n),
        (a.prototype.update = function (t, e, r) {
          "string" === typeof t && (t = i.from(t, e));
          var n = this._update(t);
          return this.hashMode ? this : (r && (n = this._toString(n, r)), n);
        }),
        (a.prototype.setAutoPadding = function () {}),
        (a.prototype.getAuthTag = function () {
          throw new Error("trying to get auth tag in unsupported state");
        }),
        (a.prototype.setAuthTag = function () {
          throw new Error("trying to set auth tag in unsupported state");
        }),
        (a.prototype.setAAD = function () {
          throw new Error("trying to set aad in unsupported state");
        }),
        (a.prototype._transform = function (t, e, r) {
          var i;
          try {
            this.hashMode ? this._update(t) : this.push(this._update(t));
          } catch (n) {
            i = n;
          } finally {
            r(i);
          }
        }),
        (a.prototype._flush = function (t) {
          var e;
          try {
            this.push(this.__final());
          } catch (r) {
            e = r;
          }
          t(e);
        }),
        (a.prototype._finalOrDigest = function (t) {
          var e = this.__final() || i.alloc(0);
          return t && (e = this._toString(e, t, !0)), e;
        }),
        (a.prototype._toString = function (t, e, r) {
          if (
            (this._decoder ||
              ((this._decoder = new o(e)), (this._encoding = e)),
            this._encoding !== e)
          )
            throw new Error("can't switch encodings");
          var i = this._decoder.write(t);
          return r && (i += this._decoder.end()), i;
        }),
        (t.exports = a);
    },
    945081: function (t, e, r) {
      var i = r(830816).Buffer,
        n = r(329749),
        o = r(763785);
      t.exports = function (t) {
        return new s(t);
      };
      var a = {
        secp256k1: { name: "secp256k1", byteLength: 32 },
        secp224r1: { name: "p224", byteLength: 28 },
        prime256v1: { name: "p256", byteLength: 32 },
        prime192v1: { name: "p192", byteLength: 24 },
        ed25519: { name: "ed25519", byteLength: 32 },
        secp384r1: { name: "p384", byteLength: 48 },
        secp521r1: { name: "p521", byteLength: 66 },
      };
      function s(t) {
        (this.curveType = a[t]),
          this.curveType || (this.curveType = { name: t }),
          (this.curve = new n.ec(this.curveType.name)),
          (this.keys = void 0);
      }
      function f(t, e, r) {
        Array.isArray(t) || (t = t.toArray());
        var n = new i(t);
        if (r && n.length < r) {
          var o = new i(r - n.length);
          o.fill(0), (n = i.concat([o, n]));
        }
        return e ? n.toString(e) : n;
      }
      (a.p224 = a.secp224r1),
        (a.p256 = a.secp256r1 = a.prime256v1),
        (a.p192 = a.secp192r1 = a.prime192v1),
        (a.p384 = a.secp384r1),
        (a.p521 = a.secp521r1),
        (s.prototype.generateKeys = function (t, e) {
          return (this.keys = this.curve.genKeyPair()), this.getPublicKey(t, e);
        }),
        (s.prototype.computeSecret = function (t, e, r) {
          return (
            (e = e || "utf8"),
            i.isBuffer(t) || (t = new i(t, e)),
            f(
              this.curve
                .keyFromPublic(t)
                .getPublic()
                .mul(this.keys.getPrivate())
                .getX(),
              r,
              this.curveType.byteLength
            )
          );
        }),
        (s.prototype.getPublicKey = function (t, e) {
          var r = this.keys.getPublic("compressed" === e, !0);
          return (
            "hybrid" === e && (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
            f(r, t)
          );
        }),
        (s.prototype.getPrivateKey = function (t) {
          return f(this.keys.getPrivate(), t);
        }),
        (s.prototype.setPublicKey = function (t, e) {
          return (
            (e = e || "utf8"),
            i.isBuffer(t) || (t = new i(t, e)),
            this.keys._importPublic(t),
            this
          );
        }),
        (s.prototype.setPrivateKey = function (t, e) {
          (e = e || "utf8"), i.isBuffer(t) || (t = new i(t, e));
          var r = new o(t);
          return (
            (r = r.toString(16)),
            (this.keys = this.curve.genKeyPair()),
            this.keys._importPrivate(r),
            this
          );
        });
    },
    657266: function (t, e, r) {
      "use strict";
      var i = r(270087),
        n = r(779500),
        o = r(286558),
        a = r(254458),
        s = r(373081);
      function f(t) {
        s.call(this, "digest"), (this._hash = t);
      }
      i(f, s),
        (f.prototype._update = function (t) {
          this._hash.update(t);
        }),
        (f.prototype._final = function () {
          return this._hash.digest();
        }),
        (t.exports = function (t) {
          return "md5" === (t = t.toLowerCase())
            ? new n()
            : "rmd160" === t || "ripemd160" === t
            ? new o()
            : new f(a(t));
        });
    },
    937401: function (t, e, r) {
      var i = r(779500);
      t.exports = function (t) {
        return new i().update(t).digest();
      };
    },
    912873: function (t, e, r) {
      "use strict";
      var i = r(270087),
        n = r(483042),
        o = r(373081),
        a = r(327172).Buffer,
        s = r(937401),
        f = r(286558),
        h = r(254458),
        u = a.alloc(128);
      function d(t, e) {
        o.call(this, "digest"), "string" === typeof e && (e = a.from(e));
        var r = "sha512" === t || "sha384" === t ? 128 : 64;
        ((this._alg = t), (this._key = e), e.length > r)
          ? (e = ("rmd160" === t ? new f() : h(t)).update(e).digest())
          : e.length < r && (e = a.concat([e, u], r));
        for (
          var i = (this._ipad = a.allocUnsafe(r)),
            n = (this._opad = a.allocUnsafe(r)),
            s = 0;
          s < r;
          s++
        )
          (i[s] = 54 ^ e[s]), (n[s] = 92 ^ e[s]);
        (this._hash = "rmd160" === t ? new f() : h(t)), this._hash.update(i);
      }
      i(d, o),
        (d.prototype._update = function (t) {
          this._hash.update(t);
        }),
        (d.prototype._final = function () {
          var t = this._hash.digest();
          return ("rmd160" === this._alg ? new f() : h(this._alg))
            .update(this._opad)
            .update(t)
            .digest();
        }),
        (t.exports = function (t, e) {
          return "rmd160" === (t = t.toLowerCase()) || "ripemd160" === t
            ? new d("rmd160", e)
            : "md5" === t
            ? new n(s, e)
            : new d(t, e);
        });
    },
    483042: function (t, e, r) {
      "use strict";
      var i = r(270087),
        n = r(327172).Buffer,
        o = r(373081),
        a = n.alloc(128),
        s = 64;
      function f(t, e) {
        o.call(this, "digest"),
          "string" === typeof e && (e = n.from(e)),
          (this._alg = t),
          (this._key = e),
          e.length > s ? (e = t(e)) : e.length < s && (e = n.concat([e, a], s));
        for (
          var r = (this._ipad = n.allocUnsafe(s)),
            i = (this._opad = n.allocUnsafe(s)),
            f = 0;
          f < s;
          f++
        )
          (r[f] = 54 ^ e[f]), (i[f] = 92 ^ e[f]);
        this._hash = [r];
      }
      i(f, o),
        (f.prototype._update = function (t) {
          this._hash.push(t);
        }),
        (f.prototype._final = function () {
          var t = this._alg(n.concat(this._hash));
          return this._alg(n.concat([this._opad, t]));
        }),
        (t.exports = f);
    },
    232337: function (t, e, r) {
      "use strict";
      (e.randomBytes = e.rng = e.pseudoRandomBytes = e.prng = r(952830)),
        (e.createHash = e.Hash = r(657266)),
        (e.createHmac = e.Hmac = r(912873));
      var i = r(414905),
        n = Object.keys(i),
        o = [
          "sha1",
          "sha224",
          "sha256",
          "sha384",
          "sha512",
          "md5",
          "rmd160",
        ].concat(n);
      e.getHashes = function () {
        return o;
      };
      var a = r(750041);
      (e.pbkdf2 = a.pbkdf2), (e.pbkdf2Sync = a.pbkdf2Sync);
      var s = r(811240);
      (e.Cipher = s.Cipher),
        (e.createCipher = s.createCipher),
        (e.Cipheriv = s.Cipheriv),
        (e.createCipheriv = s.createCipheriv),
        (e.Decipher = s.Decipher),
        (e.createDecipher = s.createDecipher),
        (e.Decipheriv = s.Decipheriv),
        (e.createDecipheriv = s.createDecipheriv),
        (e.getCiphers = s.getCiphers),
        (e.listCiphers = s.listCiphers);
      var f = r(982834);
      (e.DiffieHellmanGroup = f.DiffieHellmanGroup),
        (e.createDiffieHellmanGroup = f.createDiffieHellmanGroup),
        (e.getDiffieHellman = f.getDiffieHellman),
        (e.createDiffieHellman = f.createDiffieHellman),
        (e.DiffieHellman = f.DiffieHellman);
      var h = r(407545);
      (e.createSign = h.createSign),
        (e.Sign = h.Sign),
        (e.createVerify = h.createVerify),
        (e.Verify = h.Verify),
        (e.createECDH = r(945081));
      var u = r(879639);
      (e.publicEncrypt = u.publicEncrypt),
        (e.privateEncrypt = u.privateEncrypt),
        (e.publicDecrypt = u.publicDecrypt),
        (e.privateDecrypt = u.privateDecrypt);
      var d = r(568519);
      (e.randomFill = d.randomFill),
        (e.randomFillSync = d.randomFillSync),
        (e.createCredentials = function () {
          throw new Error(
            [
              "sorry, createCredentials is not implemented yet",
              "we accept pull requests",
              "https://github.com/crypto-browserify/crypto-browserify",
            ].join("\n")
          );
        }),
        (e.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6,
        });
    },
    427191: function (t, e, r) {
      "use strict";
      (e.utils = r(975516)),
        (e.Cipher = r(314923)),
        (e.DES = r(610225)),
        (e.CBC = r(548701)),
        (e.EDE = r(626540));
    },
    548701: function (t, e, r) {
      "use strict";
      var i = r(677859),
        n = r(270087),
        o = {};
      function a(t) {
        i.equal(t.length, 8, "Invalid IV length"), (this.iv = new Array(8));
        for (var e = 0; e < this.iv.length; e++) this.iv[e] = t[e];
      }
      (e.instantiate = function (t) {
        function e(e) {
          t.call(this, e), this._cbcInit();
        }
        n(e, t);
        for (var r = Object.keys(o), i = 0; i < r.length; i++) {
          var a = r[i];
          e.prototype[a] = o[a];
        }
        return (
          (e.create = function (t) {
            return new e(t);
          }),
          e
        );
      }),
        (o._cbcInit = function () {
          var t = new a(this.options.iv);
          this._cbcState = t;
        }),
        (o._update = function (t, e, r, i) {
          var n = this._cbcState,
            o = this.constructor.super_.prototype,
            a = n.iv;
          if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++) a[s] ^= t[e + s];
            o._update.call(this, a, 0, r, i);
            for (s = 0; s < this.blockSize; s++) a[s] = r[i + s];
          } else {
            o._update.call(this, t, e, r, i);
            for (s = 0; s < this.blockSize; s++) r[i + s] ^= a[s];
            for (s = 0; s < this.blockSize; s++) a[s] = t[e + s];
          }
        });
    },
    314923: function (t, e, r) {
      "use strict";
      var i = r(677859);
      function n(t) {
        (this.options = t),
          (this.type = this.options.type),
          (this.blockSize = 8),
          this._init(),
          (this.buffer = new Array(this.blockSize)),
          (this.bufferOff = 0);
      }
      (t.exports = n),
        (n.prototype._init = function () {}),
        (n.prototype.update = function (t) {
          return 0 === t.length
            ? []
            : "decrypt" === this.type
            ? this._updateDecrypt(t)
            : this._updateEncrypt(t);
        }),
        (n.prototype._buffer = function (t, e) {
          for (
            var r = Math.min(this.buffer.length - this.bufferOff, t.length - e),
              i = 0;
            i < r;
            i++
          )
            this.buffer[this.bufferOff + i] = t[e + i];
          return (this.bufferOff += r), r;
        }),
        (n.prototype._flushBuffer = function (t, e) {
          return (
            this._update(this.buffer, 0, t, e),
            (this.bufferOff = 0),
            this.blockSize
          );
        }),
        (n.prototype._updateEncrypt = function (t) {
          var e = 0,
            r = 0,
            i = ((this.bufferOff + t.length) / this.blockSize) | 0,
            n = new Array(i * this.blockSize);
          0 !== this.bufferOff &&
            ((e += this._buffer(t, e)),
            this.bufferOff === this.buffer.length &&
              (r += this._flushBuffer(n, r)));
          for (
            var o = t.length - ((t.length - e) % this.blockSize);
            e < o;
            e += this.blockSize
          )
            this._update(t, e, n, r), (r += this.blockSize);
          for (; e < t.length; e++, this.bufferOff++)
            this.buffer[this.bufferOff] = t[e];
          return n;
        }),
        (n.prototype._updateDecrypt = function (t) {
          for (
            var e = 0,
              r = 0,
              i = Math.ceil((this.bufferOff + t.length) / this.blockSize) - 1,
              n = new Array(i * this.blockSize);
            i > 0;
            i--
          )
            (e += this._buffer(t, e)), (r += this._flushBuffer(n, r));
          return (e += this._buffer(t, e)), n;
        }),
        (n.prototype.final = function (t) {
          var e, r;
          return (
            t && (e = this.update(t)),
            (r =
              "encrypt" === this.type
                ? this._finalEncrypt()
                : this._finalDecrypt()),
            e ? e.concat(r) : r
          );
        }),
        (n.prototype._pad = function (t, e) {
          if (0 === e) return !1;
          for (; e < t.length; ) t[e++] = 0;
          return !0;
        }),
        (n.prototype._finalEncrypt = function () {
          if (!this._pad(this.buffer, this.bufferOff)) return [];
          var t = new Array(this.blockSize);
          return this._update(this.buffer, 0, t, 0), t;
        }),
        (n.prototype._unpad = function (t) {
          return t;
        }),
        (n.prototype._finalDecrypt = function () {
          i.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
          var t = new Array(this.blockSize);
          return this._flushBuffer(t, 0), this._unpad(t);
        });
    },
    610225: function (t, e, r) {
      "use strict";
      var i = r(677859),
        n = r(270087),
        o = r(975516),
        a = r(314923);
      function s() {
        (this.tmp = new Array(2)), (this.keys = null);
      }
      function f(t) {
        a.call(this, t);
        var e = new s();
        (this._desState = e), this.deriveKeys(e, t.key);
      }
      n(f, a),
        (t.exports = f),
        (f.create = function (t) {
          return new f(t);
        });
      var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
      (f.prototype.deriveKeys = function (t, e) {
        (t.keys = new Array(32)),
          i.equal(e.length, this.blockSize, "Invalid key length");
        var r = o.readUInt32BE(e, 0),
          n = o.readUInt32BE(e, 4);
        o.pc1(r, n, t.tmp, 0), (r = t.tmp[0]), (n = t.tmp[1]);
        for (var a = 0; a < t.keys.length; a += 2) {
          var s = h[a >>> 1];
          (r = o.r28shl(r, s)), (n = o.r28shl(n, s)), o.pc2(r, n, t.keys, a);
        }
      }),
        (f.prototype._update = function (t, e, r, i) {
          var n = this._desState,
            a = o.readUInt32BE(t, e),
            s = o.readUInt32BE(t, e + 4);
          o.ip(a, s, n.tmp, 0),
            (a = n.tmp[0]),
            (s = n.tmp[1]),
            "encrypt" === this.type
              ? this._encrypt(n, a, s, n.tmp, 0)
              : this._decrypt(n, a, s, n.tmp, 0),
            (a = n.tmp[0]),
            (s = n.tmp[1]),
            o.writeUInt32BE(r, a, i),
            o.writeUInt32BE(r, s, i + 4);
        }),
        (f.prototype._pad = function (t, e) {
          for (var r = t.length - e, i = e; i < t.length; i++) t[i] = r;
          return !0;
        }),
        (f.prototype._unpad = function (t) {
          for (var e = t[t.length - 1], r = t.length - e; r < t.length; r++)
            i.equal(t[r], e);
          return t.slice(0, t.length - e);
        }),
        (f.prototype._encrypt = function (t, e, r, i, n) {
          for (var a = e, s = r, f = 0; f < t.keys.length; f += 2) {
            var h = t.keys[f],
              u = t.keys[f + 1];
            o.expand(s, t.tmp, 0), (h ^= t.tmp[0]), (u ^= t.tmp[1]);
            var d = o.substitute(h, u),
              c = s;
            (s = (a ^ o.permute(d)) >>> 0), (a = c);
          }
          o.rip(s, a, i, n);
        }),
        (f.prototype._decrypt = function (t, e, r, i, n) {
          for (var a = r, s = e, f = t.keys.length - 2; f >= 0; f -= 2) {
            var h = t.keys[f],
              u = t.keys[f + 1];
            o.expand(a, t.tmp, 0), (h ^= t.tmp[0]), (u ^= t.tmp[1]);
            var d = o.substitute(h, u),
              c = a;
            (a = (s ^ o.permute(d)) >>> 0), (s = c);
          }
          o.rip(a, s, i, n);
        });
    },
    626540: function (t, e, r) {
      "use strict";
      var i = r(677859),
        n = r(270087),
        o = r(314923),
        a = r(610225);
      function s(t, e) {
        i.equal(e.length, 24, "Invalid key length");
        var r = e.slice(0, 8),
          n = e.slice(8, 16),
          o = e.slice(16, 24);
        this.ciphers =
          "encrypt" === t
            ? [
                a.create({ type: "encrypt", key: r }),
                a.create({ type: "decrypt", key: n }),
                a.create({ type: "encrypt", key: o }),
              ]
            : [
                a.create({ type: "decrypt", key: o }),
                a.create({ type: "encrypt", key: n }),
                a.create({ type: "decrypt", key: r }),
              ];
      }
      function f(t) {
        o.call(this, t);
        var e = new s(this.type, this.options.key);
        this._edeState = e;
      }
      n(f, o),
        (t.exports = f),
        (f.create = function (t) {
          return new f(t);
        }),
        (f.prototype._update = function (t, e, r, i) {
          var n = this._edeState;
          n.ciphers[0]._update(t, e, r, i),
            n.ciphers[1]._update(r, i, r, i),
            n.ciphers[2]._update(r, i, r, i);
        }),
        (f.prototype._pad = a.prototype._pad),
        (f.prototype._unpad = a.prototype._unpad);
    },
    975516: function (t, e) {
      "use strict";
      (e.readUInt32BE = function (t, e) {
        return (
          ((t[0 + e] << 24) | (t[1 + e] << 16) | (t[2 + e] << 8) | t[3 + e]) >>>
          0
        );
      }),
        (e.writeUInt32BE = function (t, e, r) {
          (t[0 + r] = e >>> 24),
            (t[1 + r] = (e >>> 16) & 255),
            (t[2 + r] = (e >>> 8) & 255),
            (t[3 + r] = 255 & e);
        }),
        (e.ip = function (t, e, r, i) {
          for (var n = 0, o = 0, a = 6; a >= 0; a -= 2) {
            for (var s = 0; s <= 24; s += 8)
              (n <<= 1), (n |= (e >>> (s + a)) & 1);
            for (s = 0; s <= 24; s += 8) (n <<= 1), (n |= (t >>> (s + a)) & 1);
          }
          for (a = 6; a >= 0; a -= 2) {
            for (s = 1; s <= 25; s += 8) (o <<= 1), (o |= (e >>> (s + a)) & 1);
            for (s = 1; s <= 25; s += 8) (o <<= 1), (o |= (t >>> (s + a)) & 1);
          }
          (r[i + 0] = n >>> 0), (r[i + 1] = o >>> 0);
        }),
        (e.rip = function (t, e, r, i) {
          for (var n = 0, o = 0, a = 0; a < 4; a++)
            for (var s = 24; s >= 0; s -= 8)
              (n <<= 1),
                (n |= (e >>> (s + a)) & 1),
                (n <<= 1),
                (n |= (t >>> (s + a)) & 1);
          for (a = 4; a < 8; a++)
            for (s = 24; s >= 0; s -= 8)
              (o <<= 1),
                (o |= (e >>> (s + a)) & 1),
                (o <<= 1),
                (o |= (t >>> (s + a)) & 1);
          (r[i + 0] = n >>> 0), (r[i + 1] = o >>> 0);
        }),
        (e.pc1 = function (t, e, r, i) {
          for (var n = 0, o = 0, a = 7; a >= 5; a--) {
            for (var s = 0; s <= 24; s += 8)
              (n <<= 1), (n |= (e >> (s + a)) & 1);
            for (s = 0; s <= 24; s += 8) (n <<= 1), (n |= (t >> (s + a)) & 1);
          }
          for (s = 0; s <= 24; s += 8) (n <<= 1), (n |= (e >> (s + a)) & 1);
          for (a = 1; a <= 3; a++) {
            for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (e >> (s + a)) & 1);
            for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (t >> (s + a)) & 1);
          }
          for (s = 0; s <= 24; s += 8) (o <<= 1), (o |= (t >> (s + a)) & 1);
          (r[i + 0] = n >>> 0), (r[i + 1] = o >>> 0);
        }),
        (e.r28shl = function (t, e) {
          return ((t << e) & 268435455) | (t >>> (28 - e));
        });
      var r = [
        14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12,
        21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17,
        0, 22, 3, 10, 14, 6, 20, 27, 24,
      ];
      (e.pc2 = function (t, e, i, n) {
        for (var o = 0, a = 0, s = r.length >>> 1, f = 0; f < s; f++)
          (o <<= 1), (o |= (t >>> r[f]) & 1);
        for (f = s; f < r.length; f++) (a <<= 1), (a |= (e >>> r[f]) & 1);
        (i[n + 0] = o >>> 0), (i[n + 1] = a >>> 0);
      }),
        (e.expand = function (t, e, r) {
          var i = 0,
            n = 0;
          i = ((1 & t) << 5) | (t >>> 27);
          for (var o = 23; o >= 15; o -= 4) (i <<= 6), (i |= (t >>> o) & 63);
          for (o = 11; o >= 3; o -= 4) (n |= (t >>> o) & 63), (n <<= 6);
          (n |= ((31 & t) << 1) | (t >>> 31)),
            (e[r + 0] = i >>> 0),
            (e[r + 1] = n >>> 0);
        });
      var i = [
        14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6,
        12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6,
        9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13,
        15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1,
        13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4,
        15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9,
        10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5,
        7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15,
        9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12,
        7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2,
        5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10,
        11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4,
        14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0,
        3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10,
        1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5,
        14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13,
        1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12,
        2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11,
        8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14,
        12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13,
        8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9,
        3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12,
        9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7,
        9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5,
        6, 8, 11,
      ];
      e.substitute = function (t, e) {
        for (var r = 0, n = 0; n < 4; n++) {
          (r <<= 4), (r |= i[64 * n + ((t >>> (18 - 6 * n)) & 63)]);
        }
        for (n = 0; n < 4; n++) {
          (r <<= 4), (r |= i[256 + 64 * n + ((e >>> (18 - 6 * n)) & 63)]);
        }
        return r >>> 0;
      };
      var n = [
        16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8,
        18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7,
      ];
      (e.permute = function (t) {
        for (var e = 0, r = 0; r < n.length; r++)
          (e <<= 1), (e |= (t >>> n[r]) & 1);
        return e >>> 0;
      }),
        (e.padSplit = function (t, e, r) {
          for (var i = t.toString(2); i.length < e; ) i = "0" + i;
          for (var n = [], o = 0; o < e; o += r) n.push(i.slice(o, o + r));
          return n.join(" ");
        });
    },
    982834: function (t, e, r) {
      var i = r(830816).Buffer,
        n = r(255174),
        o = r(887064),
        a = r(811554);
      var s = { binary: !0, hex: !0, base64: !0 };
      (e.DiffieHellmanGroup =
        e.createDiffieHellmanGroup =
        e.getDiffieHellman =
          function (t) {
            var e = new i(o[t].prime, "hex"),
              r = new i(o[t].gen, "hex");
            return new a(e, r);
          }),
        (e.createDiffieHellman = e.DiffieHellman =
          function t(e, r, o, f) {
            return i.isBuffer(r) || void 0 === s[r]
              ? t(e, "binary", r, o)
              : ((r = r || "binary"),
                (f = f || "binary"),
                (o = o || new i([2])),
                i.isBuffer(o) || (o = new i(o, f)),
                "number" === typeof e
                  ? new a(n(e, o), o, !0)
                  : (i.isBuffer(e) || (e = new i(e, r)), new a(e, o, !0)));
          });
    },
    811554: function (t, e, r) {
      var i = r(830816).Buffer,
        n = r(763785),
        o = new (r(578773))(),
        a = new n(24),
        s = new n(11),
        f = new n(10),
        h = new n(3),
        u = new n(7),
        d = r(255174),
        c = r(952830);
      function l(t, e) {
        return (
          (e = e || "utf8"),
          i.isBuffer(t) || (t = new i(t, e)),
          (this._pub = new n(t)),
          this
        );
      }
      function p(t, e) {
        return (
          (e = e || "utf8"),
          i.isBuffer(t) || (t = new i(t, e)),
          (this._priv = new n(t)),
          this
        );
      }
      t.exports = m;
      var b = {};
      function m(t, e, r) {
        this.setGenerator(e),
          (this.__prime = new n(t)),
          (this._prime = n.mont(this.__prime)),
          (this._primeLen = t.length),
          (this._pub = void 0),
          (this._priv = void 0),
          (this._primeCode = void 0),
          r
            ? ((this.setPublicKey = l), (this.setPrivateKey = p))
            : (this._primeCode = 8);
      }
      function g(t, e) {
        var r = new i(t.toArray());
        return e ? r.toString(e) : r;
      }
      Object.defineProperty(m.prototype, "verifyError", {
        enumerable: !0,
        get: function () {
          return (
            "number" !== typeof this._primeCode &&
              (this._primeCode = (function (t, e) {
                var r = e.toString("hex"),
                  i = [r, t.toString(16)].join("_");
                if (i in b) return b[i];
                var n,
                  c = 0;
                if (
                  t.isEven() ||
                  !d.simpleSieve ||
                  !d.fermatTest(t) ||
                  !o.test(t)
                )
                  return (
                    (c += 1),
                    (c += "02" === r || "05" === r ? 8 : 4),
                    (b[i] = c),
                    c
                  );
                switch ((o.test(t.shrn(1)) || (c += 2), r)) {
                  case "02":
                    t.mod(a).cmp(s) && (c += 8);
                    break;
                  case "05":
                    (n = t.mod(f)).cmp(h) && n.cmp(u) && (c += 8);
                    break;
                  default:
                    c += 4;
                }
                return (b[i] = c), c;
              })(this.__prime, this.__gen)),
            this._primeCode
          );
        },
      }),
        (m.prototype.generateKeys = function () {
          return (
            this._priv || (this._priv = new n(c(this._primeLen))),
            (this._pub = this._gen
              .toRed(this._prime)
              .redPow(this._priv)
              .fromRed()),
            this.getPublicKey()
          );
        }),
        (m.prototype.computeSecret = function (t) {
          var e = (t = (t = new n(t)).toRed(this._prime))
              .redPow(this._priv)
              .fromRed(),
            r = new i(e.toArray()),
            o = this.getPrime();
          if (r.length < o.length) {
            var a = new i(o.length - r.length);
            a.fill(0), (r = i.concat([a, r]));
          }
          return r;
        }),
        (m.prototype.getPublicKey = function (t) {
          return g(this._pub, t);
        }),
        (m.prototype.getPrivateKey = function (t) {
          return g(this._priv, t);
        }),
        (m.prototype.getPrime = function (t) {
          return g(this.__prime, t);
        }),
        (m.prototype.getGenerator = function (t) {
          return g(this._gen, t);
        }),
        (m.prototype.setGenerator = function (t, e) {
          return (
            (e = e || "utf8"),
            i.isBuffer(t) || (t = new i(t, e)),
            (this.__gen = t),
            (this._gen = new n(t)),
            this
          );
        });
    },
    255174: function (t, e, r) {
      var i = r(952830);
      (t.exports = y), (y.simpleSieve = m), (y.fermatTest = g);
      var n = r(763785),
        o = new n(24),
        a = new (r(578773))(),
        s = new n(1),
        f = new n(2),
        h = new n(5),
        u = (new n(16), new n(8), new n(10)),
        d = new n(3),
        c = (new n(7), new n(11)),
        l = new n(4),
        p = (new n(12), null);
      function b() {
        if (null !== p) return p;
        var t = [];
        t[0] = 2;
        for (var e = 1, r = 3; r < 1048576; r += 2) {
          for (
            var i = Math.ceil(Math.sqrt(r)), n = 0;
            n < e && t[n] <= i && r % t[n] !== 0;
            n++
          );
          (e !== n && t[n] <= i) || (t[e++] = r);
        }
        return (p = t), t;
      }
      function m(t) {
        for (var e = b(), r = 0; r < e.length; r++)
          if (0 === t.modn(e[r])) return 0 === t.cmpn(e[r]);
        return !0;
      }
      function g(t) {
        var e = n.mont(t);
        return 0 === f.toRed(e).redPow(t.subn(1)).fromRed().cmpn(1);
      }
      function y(t, e) {
        if (t < 16) return new n(2 === e || 5 === e ? [140, 123] : [140, 39]);
        var r, p;
        for (e = new n(e); ; ) {
          for (r = new n(i(Math.ceil(t / 8))); r.bitLength() > t; ) r.ishrn(1);
          if ((r.isEven() && r.iadd(s), r.testn(1) || r.iadd(f), e.cmp(f))) {
            if (!e.cmp(h)) for (; r.mod(u).cmp(d); ) r.iadd(l);
          } else for (; r.mod(o).cmp(c); ) r.iadd(l);
          if (
            m((p = r.shrn(1))) &&
            m(r) &&
            g(p) &&
            g(r) &&
            a.test(p) &&
            a.test(r)
          )
            return r;
        }
      }
    },
    329749: function (t, e, r) {
      "use strict";
      var i = e;
      (i.version = r(780312).i8),
        (i.utils = r(553369)),
        (i.rand = r(559154)),
        (i.curve = r(541530)),
        (i.curves = r(61044)),
        (i.ec = r(617354)),
        (i.eddsa = r(111680));
    },
    50763: function (t, e, r) {
      "use strict";
      var i = r(763785),
        n = r(553369),
        o = n.getNAF,
        a = n.getJSF,
        s = n.assert;
      function f(t, e) {
        (this.type = t),
          (this.p = new i(e.p, 16)),
          (this.red = e.prime ? i.red(e.prime) : i.mont(this.p)),
          (this.zero = new i(0).toRed(this.red)),
          (this.one = new i(1).toRed(this.red)),
          (this.two = new i(2).toRed(this.red)),
          (this.n = e.n && new i(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function h(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (t.exports = f),
        (f.prototype.point = function () {
          throw new Error("Not implemented");
        }),
        (f.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (f.prototype._fixedNafMul = function (t, e) {
          s(t.precomputed);
          var r = t._getDoubles(),
            i = o(e, 1, this._bitLength),
            n = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
          n /= 3;
          var a,
            f,
            h = [];
          for (a = 0; a < i.length; a += r.step) {
            f = 0;
            for (var u = a + r.step - 1; u >= a; u--) f = (f << 1) + i[u];
            h.push(f);
          }
          for (
            var d = this.jpoint(null, null, null),
              c = this.jpoint(null, null, null),
              l = n;
            l > 0;
            l--
          ) {
            for (a = 0; a < h.length; a++)
              (f = h[a]) === l
                ? (c = c.mixedAdd(r.points[a]))
                : f === -l && (c = c.mixedAdd(r.points[a].neg()));
            d = d.add(c);
          }
          return d.toP();
        }),
        (f.prototype._wnafMul = function (t, e) {
          var r = 4,
            i = t._getNAFPoints(r);
          r = i.wnd;
          for (
            var n = i.points,
              a = o(e, r, this._bitLength),
              f = this.jpoint(null, null, null),
              h = a.length - 1;
            h >= 0;
            h--
          ) {
            for (var u = 0; h >= 0 && 0 === a[h]; h--) u++;
            if ((h >= 0 && u++, (f = f.dblp(u)), h < 0)) break;
            var d = a[h];
            s(0 !== d),
              (f =
                "affine" === t.type
                  ? d > 0
                    ? f.mixedAdd(n[(d - 1) >> 1])
                    : f.mixedAdd(n[(-d - 1) >> 1].neg())
                  : d > 0
                  ? f.add(n[(d - 1) >> 1])
                  : f.add(n[(-d - 1) >> 1].neg()));
          }
          return "affine" === t.type ? f.toP() : f;
        }),
        (f.prototype._wnafMulAdd = function (t, e, r, i, n) {
          var s,
            f,
            h,
            u = this._wnafT1,
            d = this._wnafT2,
            c = this._wnafT3,
            l = 0;
          for (s = 0; s < i; s++) {
            var p = (h = e[s])._getNAFPoints(t);
            (u[s] = p.wnd), (d[s] = p.points);
          }
          for (s = i - 1; s >= 1; s -= 2) {
            var b = s - 1,
              m = s;
            if (1 === u[b] && 1 === u[m]) {
              var g = [e[b], null, null, e[m]];
              0 === e[b].y.cmp(e[m].y)
                ? ((g[1] = e[b].add(e[m])),
                  (g[2] = e[b].toJ().mixedAdd(e[m].neg())))
                : 0 === e[b].y.cmp(e[m].y.redNeg())
                ? ((g[1] = e[b].toJ().mixedAdd(e[m])),
                  (g[2] = e[b].add(e[m].neg())))
                : ((g[1] = e[b].toJ().mixedAdd(e[m])),
                  (g[2] = e[b].toJ().mixedAdd(e[m].neg())));
              var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = a(r[b], r[m]);
              for (
                l = Math.max(v[0].length, l),
                  c[b] = new Array(l),
                  c[m] = new Array(l),
                  f = 0;
                f < l;
                f++
              ) {
                var w = 0 | v[0][f],
                  _ = 0 | v[1][f];
                (c[b][f] = y[3 * (w + 1) + (_ + 1)]), (c[m][f] = 0), (d[b] = g);
              }
            } else
              (c[b] = o(r[b], u[b], this._bitLength)),
                (c[m] = o(r[m], u[m], this._bitLength)),
                (l = Math.max(c[b].length, l)),
                (l = Math.max(c[m].length, l));
          }
          var M = this.jpoint(null, null, null),
            S = this._wnafT4;
          for (s = l; s >= 0; s--) {
            for (var E = 0; s >= 0; ) {
              var k = !0;
              for (f = 0; f < i; f++)
                (S[f] = 0 | c[f][s]), 0 !== S[f] && (k = !1);
              if (!k) break;
              E++, s--;
            }
            if ((s >= 0 && E++, (M = M.dblp(E)), s < 0)) break;
            for (f = 0; f < i; f++) {
              var A = S[f];
              0 !== A &&
                (A > 0
                  ? (h = d[f][(A - 1) >> 1])
                  : A < 0 && (h = d[f][(-A - 1) >> 1].neg()),
                (M = "affine" === h.type ? M.mixedAdd(h) : M.add(h)));
            }
          }
          for (s = 0; s < i; s++) d[s] = null;
          return n ? M : M.toP();
        }),
        (f.BasePoint = h),
        (h.prototype.eq = function () {
          throw new Error("Not implemented");
        }),
        (h.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (f.prototype.decodePoint = function (t, e) {
          t = n.toArray(t, e);
          var r = this.p.byteLength();
          if (
            (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
            t.length - 1 === 2 * r
          )
            return (
              6 === t[0]
                ? s(t[t.length - 1] % 2 === 0)
                : 7 === t[0] && s(t[t.length - 1] % 2 === 1),
              this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
            return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
          throw new Error("Unknown point format");
        }),
        (h.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (h.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", e));
        }),
        (h.prototype.encode = function (t, e) {
          return n.encode(this._encode(e), t);
        }),
        (h.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (h.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (h.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], i = this, n = 0; n < e; n += t) {
            for (var o = 0; o < t; o++) i = i.dbl();
            r.push(i);
          }
          return { step: t, points: r };
        }),
        (h.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              r = (1 << t) - 1,
              i = 1 === r ? null : this.dbl(),
              n = 1;
            n < r;
            n++
          )
            e[n] = e[n - 1].add(i);
          return { wnd: t, points: e };
        }),
        (h.prototype._getBeta = function () {
          return null;
        }),
        (h.prototype.dblp = function (t) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();
          return e;
        });
    },
    574239: function (t, e, r) {
      "use strict";
      var i = r(553369),
        n = r(763785),
        o = r(270087),
        a = r(50763),
        s = i.assert;
      function f(t) {
        (this.twisted = 1 !== (0 | t.a)),
          (this.mOneA = this.twisted && -1 === (0 | t.a)),
          (this.extended = this.mOneA),
          a.call(this, "edwards", t),
          (this.a = new n(t.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new n(t.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new n(t.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 === (0 | t.c));
      }
      function h(t, e, r, i, o) {
        a.BasePoint.call(this, t, "projective"),
          null === e && null === r && null === i
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new n(e, 16)),
              (this.y = new n(r, 16)),
              (this.z = i ? new n(i, 16) : this.curve.one),
              (this.t = o && new n(o, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      o(f, a),
        (t.exports = f),
        (f.prototype._mulA = function (t) {
          return this.mOneA ? t.redNeg() : this.a.redMul(t);
        }),
        (f.prototype._mulC = function (t) {
          return this.oneC ? t : this.c.redMul(t);
        }),
        (f.prototype.jpoint = function (t, e, r, i) {
          return this.point(t, e, r, i);
        }),
        (f.prototype.pointFromX = function (t, e) {
          (t = new n(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr(),
            i = this.c2.redSub(this.a.redMul(r)),
            o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            a = i.redMul(o.redInvm()),
            s = a.redSqrt();
          if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
          var f = s.fromRed().isOdd();
          return ((e && !f) || (!e && f)) && (s = s.redNeg()), this.point(t, s);
        }),
        (f.prototype.pointFromY = function (t, e) {
          (t = new n(t, 16)).red || (t = t.toRed(this.red));
          var r = t.redSqr(),
            i = r.redSub(this.c2),
            o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            a = i.redMul(o.redInvm());
          if (0 === a.cmp(this.zero)) {
            if (e) throw new Error("invalid point");
            return this.point(this.zero, t);
          }
          var s = a.redSqrt();
          if (0 !== s.redSqr().redSub(a).cmp(this.zero))
            throw new Error("invalid point");
          return (
            s.fromRed().isOdd() !== e && (s = s.redNeg()), this.point(s, t)
          );
        }),
        (f.prototype.validate = function (t) {
          if (t.isInfinity()) return !0;
          t.normalize();
          var e = t.x.redSqr(),
            r = t.y.redSqr(),
            i = e.redMul(this.a).redAdd(r),
            n = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
          return 0 === i.cmp(n);
        }),
        o(h, a.BasePoint),
        (f.prototype.pointFromJSON = function (t) {
          return h.fromJSON(this, t);
        }),
        (f.prototype.point = function (t, e, r, i) {
          return new h(this, t, e, r, i);
        }),
        (h.fromJSON = function (t, e) {
          return new h(t, e[0], e[1], e[2]);
        }),
        (h.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (h.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (h.prototype._extDbl = function () {
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var i = this.curve._mulA(t),
            n = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
            o = i.redAdd(e),
            a = o.redSub(r),
            s = i.redSub(e),
            f = n.redMul(a),
            h = o.redMul(s),
            u = n.redMul(s),
            d = a.redMul(o);
          return this.curve.point(f, h, d, u);
        }),
        (h.prototype._projDbl = function () {
          var t,
            e,
            r,
            i,
            n,
            o,
            a = this.x.redAdd(this.y).redSqr(),
            s = this.x.redSqr(),
            f = this.y.redSqr();
          if (this.curve.twisted) {
            var h = (i = this.curve._mulA(s)).redAdd(f);
            this.zOne
              ? ((t = a.redSub(s).redSub(f).redMul(h.redSub(this.curve.two))),
                (e = h.redMul(i.redSub(f))),
                (r = h.redSqr().redSub(h).redSub(h)))
              : ((n = this.z.redSqr()),
                (o = h.redSub(n).redISub(n)),
                (t = a.redSub(s).redISub(f).redMul(o)),
                (e = h.redMul(i.redSub(f))),
                (r = h.redMul(o)));
          } else
            (i = s.redAdd(f)),
              (n = this.curve._mulC(this.z).redSqr()),
              (o = i.redSub(n).redSub(n)),
              (t = this.curve._mulC(a.redISub(i)).redMul(o)),
              (e = this.curve._mulC(i).redMul(s.redISub(f))),
              (r = i.redMul(o));
          return this.curve.point(t, e, r);
        }),
        (h.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (h.prototype._extAdd = function (t) {
          var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
            r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
            i = this.t.redMul(this.curve.dd).redMul(t.t),
            n = this.z.redMul(t.z.redAdd(t.z)),
            o = r.redSub(e),
            a = n.redSub(i),
            s = n.redAdd(i),
            f = r.redAdd(e),
            h = o.redMul(a),
            u = s.redMul(f),
            d = o.redMul(f),
            c = a.redMul(s);
          return this.curve.point(h, u, c, d);
        }),
        (h.prototype._projAdd = function (t) {
          var e,
            r,
            i = this.z.redMul(t.z),
            n = i.redSqr(),
            o = this.x.redMul(t.x),
            a = this.y.redMul(t.y),
            s = this.curve.d.redMul(o).redMul(a),
            f = n.redSub(s),
            h = n.redAdd(s),
            u = this.x
              .redAdd(this.y)
              .redMul(t.x.redAdd(t.y))
              .redISub(o)
              .redISub(a),
            d = i.redMul(f).redMul(u);
          return (
            this.curve.twisted
              ? ((e = i.redMul(h).redMul(a.redSub(this.curve._mulA(o)))),
                (r = f.redMul(h)))
              : ((e = i.redMul(h).redMul(a.redSub(o))),
                (r = this.curve._mulC(f).redMul(h))),
            this.curve.point(d, e, r)
          );
        }),
        (h.prototype.add = function (t) {
          return this.isInfinity()
            ? t
            : t.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(t)
            : this._projAdd(t);
        }),
        (h.prototype.mul = function (t) {
          return this._hasDoubles(t)
            ? this.curve._fixedNafMul(this, t)
            : this.curve._wnafMul(this, t);
        }),
        (h.prototype.mulAdd = function (t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1);
        }),
        (h.prototype.jmulAdd = function (t, e, r) {
          return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0);
        }),
        (h.prototype.normalize = function () {
          if (this.zOne) return this;
          var t = this.z.redInvm();
          return (
            (this.x = this.x.redMul(t)),
            (this.y = this.y.redMul(t)),
            this.t && (this.t = this.t.redMul(t)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (h.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (h.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }),
        (h.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }),
        (h.prototype.eq = function (t) {
          return (
            this === t ||
            (0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY()))
          );
        }),
        (h.prototype.eqXToP = function (t) {
          var e = t.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(e)) return !0;
          for (var r = t.clone(), i = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((e.redIAdd(i), 0 === this.x.cmp(e))) return !0;
          }
        }),
        (h.prototype.toP = h.prototype.normalize),
        (h.prototype.mixedAdd = h.prototype.add);
    },
    541530: function (t, e, r) {
      "use strict";
      var i = e;
      (i.base = r(50763)),
        (i.short = r(794560)),
        (i.mont = r(725974)),
        (i.edwards = r(574239));
    },
    725974: function (t, e, r) {
      "use strict";
      var i = r(763785),
        n = r(270087),
        o = r(50763),
        a = r(553369);
      function s(t) {
        o.call(this, "mont", t),
          (this.a = new i(t.a, 16).toRed(this.red)),
          (this.b = new i(t.b, 16).toRed(this.red)),
          (this.i4 = new i(4).toRed(this.red).redInvm()),
          (this.two = new i(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function f(t, e, r) {
        o.BasePoint.call(this, t, "projective"),
          null === e && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new i(e, 16)),
              (this.z = new i(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      n(s, o),
        (t.exports = s),
        (s.prototype.validate = function (t) {
          var e = t.normalize().x,
            r = e.redSqr(),
            i = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
          return 0 === i.redSqrt().redSqr().cmp(i);
        }),
        n(f, o.BasePoint),
        (s.prototype.decodePoint = function (t, e) {
          return this.point(a.toArray(t, e), 1);
        }),
        (s.prototype.point = function (t, e) {
          return new f(this, t, e);
        }),
        (s.prototype.pointFromJSON = function (t) {
          return f.fromJSON(this, t);
        }),
        (f.prototype.precompute = function () {}),
        (f.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }),
        (f.fromJSON = function (t, e) {
          return new f(t, e[0], e[1] || t.one);
        }),
        (f.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (f.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (f.prototype.dbl = function () {
          var t = this.x.redAdd(this.z).redSqr(),
            e = this.x.redSub(this.z).redSqr(),
            r = t.redSub(e),
            i = t.redMul(e),
            n = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(i, n);
        }),
        (f.prototype.add = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (f.prototype.diffAdd = function (t, e) {
          var r = this.x.redAdd(this.z),
            i = this.x.redSub(this.z),
            n = t.x.redAdd(t.z),
            o = t.x.redSub(t.z).redMul(r),
            a = n.redMul(i),
            s = e.z.redMul(o.redAdd(a).redSqr()),
            f = e.x.redMul(o.redISub(a).redSqr());
          return this.curve.point(s, f);
        }),
        (f.prototype.mul = function (t) {
          for (
            var e = t.clone(),
              r = this,
              i = this.curve.point(null, null),
              n = [];
            0 !== e.cmpn(0);
            e.iushrn(1)
          )
            n.push(e.andln(1));
          for (var o = n.length - 1; o >= 0; o--)
            0 === n[o]
              ? ((r = r.diffAdd(i, this)), (i = i.dbl()))
              : ((i = r.diffAdd(i, this)), (r = r.dbl()));
          return i;
        }),
        (f.prototype.mulAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (f.prototype.jumlAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (f.prototype.eq = function (t) {
          return 0 === this.getX().cmp(t.getX());
        }),
        (f.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (f.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        });
    },
    794560: function (t, e, r) {
      "use strict";
      var i = r(553369),
        n = r(763785),
        o = r(270087),
        a = r(50763),
        s = i.assert;
      function f(t) {
        a.call(this, "short", t),
          (this.a = new n(t.a, 16).toRed(this.red)),
          (this.b = new n(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4));
      }
      function h(t, e, r, i) {
        a.BasePoint.call(this, t, "affine"),
          null === e && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new n(e, 16)),
              (this.y = new n(r, 16)),
              i &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function u(t, e, r, i) {
        a.BasePoint.call(this, t, "jacobian"),
          null === e && null === r && null === i
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new n(0)))
            : ((this.x = new n(e, 16)),
              (this.y = new n(r, 16)),
              (this.z = new n(i, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      o(f, a),
        (t.exports = f),
        (f.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, r;
            if (t.beta) e = new n(t.beta, 16).toRed(this.red);
            else {
              var i = this._getEndoRoots(this.p);
              e = (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(this.red);
            }
            if (t.lambda) r = new n(t.lambda, 16);
            else {
              var o = this._getEndoRoots(this.n);
              0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e))
                ? (r = o[0])
                : ((r = o[1]),
                  s(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return {
              beta: e,
              lambda: r,
              basis: t.basis
                ? t.basis.map(function (t) {
                    return { a: new n(t.a, 16), b: new n(t.b, 16) };
                  })
                : this._getEndoBasis(r),
            };
          }
        }),
        (f.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : n.mont(t),
            r = new n(2).toRed(e).redInvm(),
            i = r.redNeg(),
            o = new n(3).toRed(e).redNeg().redSqrt().redMul(r);
          return [i.redAdd(o).fromRed(), i.redSub(o).fromRed()];
        }),
        (f.prototype._getEndoBasis = function (t) {
          for (
            var e,
              r,
              i,
              o,
              a,
              s,
              f,
              h,
              u,
              d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              c = t,
              l = this.n.clone(),
              p = new n(1),
              b = new n(0),
              m = new n(0),
              g = new n(1),
              y = 0;
            0 !== c.cmpn(0);

          ) {
            var v = l.div(c);
            (h = l.sub(v.mul(c))), (u = m.sub(v.mul(p)));
            var w = g.sub(v.mul(b));
            if (!i && h.cmp(d) < 0)
              (e = f.neg()), (r = p), (i = h.neg()), (o = u);
            else if (i && 2 === ++y) break;
            (f = h), (l = c), (c = h), (m = p), (p = u), (g = b), (b = w);
          }
          (a = h.neg()), (s = u);
          var _ = i.sqr().add(o.sqr());
          return (
            a.sqr().add(s.sqr()).cmp(_) >= 0 && ((a = e), (s = r)),
            i.negative && ((i = i.neg()), (o = o.neg())),
            a.negative && ((a = a.neg()), (s = s.neg())),
            [
              { a: i, b: o },
              { a: a, b: s },
            ]
          );
        }),
        (f.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            r = e[0],
            i = e[1],
            n = i.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            a = n.mul(r.a),
            s = o.mul(i.a),
            f = n.mul(r.b),
            h = o.mul(i.b);
          return { k1: t.sub(a).sub(s), k2: f.add(h).neg() };
        }),
        (f.prototype.pointFromX = function (t, e) {
          (t = new n(t, 16)).red || (t = t.toRed(this.red));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            i = r.redSqrt();
          if (0 !== i.redSqr().redSub(r).cmp(this.zero))
            throw new Error("invalid point");
          var o = i.fromRed().isOdd();
          return ((e && !o) || (!e && o)) && (i = i.redNeg()), this.point(t, i);
        }),
        (f.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            r = t.y,
            i = this.a.redMul(e),
            n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
          return 0 === r.redSqr().redISub(n).cmpn(0);
        }),
        (f.prototype._endoWnafMulAdd = function (t, e, r) {
          for (
            var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
            o < t.length;
            o++
          ) {
            var a = this._endoSplit(e[o]),
              s = t[o],
              f = s._getBeta();
            a.k1.negative && (a.k1.ineg(), (s = s.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (f = f.neg(!0))),
              (i[2 * o] = s),
              (i[2 * o + 1] = f),
              (n[2 * o] = a.k1),
              (n[2 * o + 1] = a.k2);
          }
          for (
            var h = this._wnafMulAdd(1, i, n, 2 * o, r), u = 0;
            u < 2 * o;
            u++
          )
            (i[u] = null), (n[u] = null);
          return h;
        }),
        o(h, a.BasePoint),
        (f.prototype.point = function (t, e, r) {
          return new h(this, t, e, r);
        }),
        (f.prototype.pointFromJSON = function (t, e) {
          return h.fromJSON(this, t, e);
        }),
        (h.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var r = this.curve,
                i = function (t) {
                  return r.point(t.x.redMul(r.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(i),
                  },
                });
            }
            return e;
          }
        }),
        (h.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (h.fromJSON = function (t, e, r) {
          "string" === typeof e && (e = JSON.parse(e));
          var i = t.point(e[0], e[1], r);
          if (!e[2]) return i;
          function n(e) {
            return t.point(e[0], e[1], r);
          }
          var o = e[2];
          return (
            (i.precomputed = {
              beta: null,
              doubles: o.doubles && {
                step: o.doubles.step,
                points: [i].concat(o.doubles.points.map(n)),
              },
              naf: o.naf && {
                wnd: o.naf.wnd,
                points: [i].concat(o.naf.points.map(n)),
              },
            }),
            i
          );
        }),
        (h.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (h.prototype.isInfinity = function () {
          return this.inf;
        }),
        (h.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t)) return this.curve.point(null, null);
          if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var r = e.redSqr().redISub(this.x).redISub(t.x),
            i = e.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, i);
        }),
        (h.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            r = this.x.redSqr(),
            i = t.redInvm(),
            n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
            o = n.redSqr().redISub(this.x.redAdd(this.x)),
            a = n.redMul(this.x.redSub(o)).redISub(this.y);
          return this.curve.point(o, a);
        }),
        (h.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (h.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (h.prototype.mul = function (t) {
          return (
            (t = new n(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (h.prototype.mulAdd = function (t, e, r) {
          var i = [this, e],
            n = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n)
            : this.curve._wnafMulAdd(1, i, n, 2);
        }),
        (h.prototype.jmulAdd = function (t, e, r) {
          var i = [this, e],
            n = [t, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(i, n, !0)
            : this.curve._wnafMulAdd(1, i, n, 2, !0);
        }),
        (h.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (h.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var r = this.precomputed,
              i = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(i),
              },
            };
          }
          return e;
        }),
        (h.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        o(u, a.BasePoint),
        (f.prototype.jpoint = function (t, e, r) {
          return new u(this, t, e, r);
        }),
        (u.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            i = this.y.redMul(e).redMul(t);
          return this.curve.point(r, i);
        }),
        (u.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (u.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            r = this.z.redSqr(),
            i = this.x.redMul(e),
            n = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            a = t.y.redMul(r.redMul(this.z)),
            s = i.redSub(n),
            f = o.redSub(a);
          if (0 === s.cmpn(0))
            return 0 !== f.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var h = s.redSqr(),
            u = h.redMul(s),
            d = i.redMul(h),
            c = f.redSqr().redIAdd(u).redISub(d).redISub(d),
            l = f.redMul(d.redISub(c)).redISub(o.redMul(u)),
            p = this.z.redMul(t.z).redMul(s);
          return this.curve.jpoint(c, l, p);
        }),
        (u.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            r = this.x,
            i = t.x.redMul(e),
            n = this.y,
            o = t.y.redMul(e).redMul(this.z),
            a = r.redSub(i),
            s = n.redSub(o);
          if (0 === a.cmpn(0))
            return 0 !== s.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var f = a.redSqr(),
            h = f.redMul(a),
            u = r.redMul(f),
            d = s.redSqr().redIAdd(h).redISub(u).redISub(u),
            c = s.redMul(u.redISub(d)).redISub(n.redMul(h)),
            l = this.z.redMul(a);
          return this.curve.jpoint(d, c, l);
        }),
        (u.prototype.dblp = function (t) {
          if (0 === t) return this;
          if (this.isInfinity()) return this;
          if (!t) return this.dbl();
          var e;
          if (this.curve.zeroA || this.curve.threeA) {
            var r = this;
            for (e = 0; e < t; e++) r = r.dbl();
            return r;
          }
          var i = this.curve.a,
            n = this.curve.tinv,
            o = this.x,
            a = this.y,
            s = this.z,
            f = s.redSqr().redSqr(),
            h = a.redAdd(a);
          for (e = 0; e < t; e++) {
            var u = o.redSqr(),
              d = h.redSqr(),
              c = d.redSqr(),
              l = u.redAdd(u).redIAdd(u).redIAdd(i.redMul(f)),
              p = o.redMul(d),
              b = l.redSqr().redISub(p.redAdd(p)),
              m = p.redISub(b),
              g = l.redMul(m);
            g = g.redIAdd(g).redISub(c);
            var y = h.redMul(s);
            e + 1 < t && (f = f.redMul(c)), (o = b), (s = y), (h = g);
          }
          return this.curve.jpoint(o, h.redMul(n), s);
        }),
        (u.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (u.prototype._zeroDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              o = n.redSqr(),
              a = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
            a = a.redIAdd(a);
            var s = i.redAdd(i).redIAdd(i),
              f = s.redSqr().redISub(a).redISub(a),
              h = o.redIAdd(o);
            (h = (h = h.redIAdd(h)).redIAdd(h)),
              (t = f),
              (e = s.redMul(a.redISub(f)).redISub(h)),
              (r = this.y.redAdd(this.y));
          } else {
            var u = this.x.redSqr(),
              d = this.y.redSqr(),
              c = d.redSqr(),
              l = this.x.redAdd(d).redSqr().redISub(u).redISub(c);
            l = l.redIAdd(l);
            var p = u.redAdd(u).redIAdd(u),
              b = p.redSqr(),
              m = c.redIAdd(c);
            (m = (m = m.redIAdd(m)).redIAdd(m)),
              (t = b.redISub(l).redISub(l)),
              (e = p.redMul(l.redISub(t)).redISub(m)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (u.prototype._threeDbl = function () {
          var t, e, r;
          if (this.zOne) {
            var i = this.x.redSqr(),
              n = this.y.redSqr(),
              o = n.redSqr(),
              a = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
            a = a.redIAdd(a);
            var s = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
              f = s.redSqr().redISub(a).redISub(a);
            t = f;
            var h = o.redIAdd(o);
            (h = (h = h.redIAdd(h)).redIAdd(h)),
              (e = s.redMul(a.redISub(f)).redISub(h)),
              (r = this.y.redAdd(this.y));
          } else {
            var u = this.z.redSqr(),
              d = this.y.redSqr(),
              c = this.x.redMul(d),
              l = this.x.redSub(u).redMul(this.x.redAdd(u));
            l = l.redAdd(l).redIAdd(l);
            var p = c.redIAdd(c),
              b = (p = p.redIAdd(p)).redAdd(p);
            (t = l.redSqr().redISub(b)),
              (r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u));
            var m = d.redSqr();
            (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
              (e = l.redMul(p.redISub(t)).redISub(m));
          }
          return this.curve.jpoint(t, e, r);
        }),
        (u.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            r = this.y,
            i = this.z,
            n = i.redSqr().redSqr(),
            o = e.redSqr(),
            a = r.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
            f = e.redAdd(e),
            h = (f = f.redIAdd(f)).redMul(a),
            u = s.redSqr().redISub(h.redAdd(h)),
            d = h.redISub(u),
            c = a.redSqr();
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var l = s.redMul(d).redISub(c),
            p = r.redAdd(r).redMul(i);
          return this.curve.jpoint(u, l, p);
        }),
        (u.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            i = e.redSqr(),
            n = t.redAdd(t).redIAdd(t),
            o = n.redSqr(),
            a = this.x.redAdd(e).redSqr().redISub(t).redISub(i),
            s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              o
            )).redSqr(),
            f = i.redIAdd(i);
          f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
          var h = n.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(f),
            u = e.redMul(h);
          u = (u = u.redIAdd(u)).redIAdd(u);
          var d = this.x.redMul(s).redISub(u);
          d = (d = d.redIAdd(d)).redIAdd(d);
          var c = this.y.redMul(h.redMul(f.redISub(h)).redISub(a.redMul(s)));
          c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
          var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
          return this.curve.jpoint(d, c, l);
        }),
        (u.prototype.mul = function (t, e) {
          return (t = new n(t, e)), this.curve._wnafMul(this, t);
        }),
        (u.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            r = t.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var i = e.redMul(this.z),
            n = r.redMul(t.z);
          return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0);
        }),
        (u.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(r)) return !0;
          for (var i = t.clone(), n = this.curve.redN.redMul(e); ; ) {
            if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (u.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (u.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
    },
    61044: function (t, e, r) {
      "use strict";
      var i,
        n = e,
        o = r(835294),
        a = r(541530),
        s = r(553369).assert;
      function f(t) {
        "short" === t.type
          ? (this.curve = new a.short(t))
          : "edwards" === t.type
          ? (this.curve = new a.edwards(t))
          : (this.curve = new a.mont(t)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = t.hash),
          s(this.g.validate(), "Invalid curve"),
          s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }
      function h(t, e) {
        Object.defineProperty(n, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var r = new f(e);
            return (
              Object.defineProperty(n, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
              }),
              r
            );
          },
        });
      }
      (n.PresetCurve = f),
        h("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: o.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        h("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: o.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        h("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: o.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        h("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: o.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        }),
        h("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: o.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        }),
        h("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: o.sha256,
          gRed: !1,
          g: ["9"],
        }),
        h("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: o.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        });
      try {
        i = r(318719);
      } catch (u) {
        i = void 0;
      }
      h("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: o.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda:
          "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
          {
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3",
          },
          {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15",
          },
        ],
        gRed: !1,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          i,
        ],
      });
    },
    617354: function (t, e, r) {
      "use strict";
      var i = r(763785),
        n = r(276513),
        o = r(553369),
        a = r(61044),
        s = r(559154),
        f = o.assert,
        h = r(784093),
        u = r(769758);
      function d(t) {
        if (!(this instanceof d)) return new d(t);
        "string" === typeof t &&
          (f(Object.prototype.hasOwnProperty.call(a, t), "Unknown curve " + t),
          (t = a[t])),
          t instanceof a.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      (t.exports = d),
        (d.prototype.keyPair = function (t) {
          return new h(this, t);
        }),
        (d.prototype.keyFromPrivate = function (t, e) {
          return h.fromPrivate(this, t, e);
        }),
        (d.prototype.keyFromPublic = function (t, e) {
          return h.fromPublic(this, t, e);
        }),
        (d.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new n({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || s(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              o = this.n.sub(new i(2));
            ;

          ) {
            var a = new i(e.generate(r));
            if (!(a.cmp(o) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
          }
        }),
        (d.prototype._truncateToN = function (t, e, r) {
          var n;
          if (i.isBN(t) || "number" === typeof t)
            n = (t = new i(t, 16)).byteLength();
          else if ("object" === typeof t) (n = t.length), (t = new i(t, 16));
          else {
            var o = t.toString();
            (n = (o.length + 1) >>> 1), (t = new i(o, 16));
          }
          "number" !== typeof r && (r = 8 * n);
          var a = r - this.n.bitLength();
          return (
            a > 0 && (t = t.ushrn(a)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (d.prototype.sign = function (t, e, r, o) {
          if (
            ("object" === typeof r && ((o = r), (r = null)),
            o || (o = {}),
            "string" !== typeof t && "number" !== typeof t && !i.isBN(t))
          ) {
            f(
              "object" === typeof t && t && "number" === typeof t.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              f(t.length >>> 0 === t.length);
            for (var a = 0; a < t.length; a++) f((255 & t[a]) === t[a]);
          }
          (e = this.keyFromPrivate(e, r)),
            (t = this._truncateToN(t, !1, o.msgBitLength)),
            f(!t.isNeg(), "Can not sign a negative message");
          var s = this.n.byteLength(),
            h = e.getPrivate().toArray("be", s),
            d = t.toArray("be", s);
          f(new i(d).eq(t), "Can not sign message");
          for (
            var c = new n({
                hash: this.hash,
                entropy: h,
                nonce: d,
                pers: o.pers,
                persEnc: o.persEnc || "utf8",
              }),
              l = this.n.sub(new i(1)),
              p = 0;
            ;
            p++
          ) {
            var b = o.k ? o.k(p) : new i(c.generate(this.n.byteLength()));
            if (
              !((b = this._truncateToN(b, !0)).cmpn(1) <= 0 || b.cmp(l) >= 0)
            ) {
              var m = this.g.mul(b);
              if (!m.isInfinity()) {
                var g = m.getX(),
                  y = g.umod(this.n);
                if (0 !== y.cmpn(0)) {
                  var v = b.invm(this.n).mul(y.mul(e.getPrivate()).iadd(t));
                  if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                    var w =
                      (m.getY().isOdd() ? 1 : 0) | (0 !== g.cmp(y) ? 2 : 0);
                    return (
                      o.canonical &&
                        v.cmp(this.nh) > 0 &&
                        ((v = this.n.sub(v)), (w ^= 1)),
                      new u({ r: y, s: v, recoveryParam: w })
                    );
                  }
                }
              }
            }
          }
        }),
        (d.prototype.verify = function (t, e, r, i, n) {
          n || (n = {}),
            (t = this._truncateToN(t, !1, n.msgBitLength)),
            (r = this.keyFromPublic(r, i));
          var o = (e = new u(e, "hex")).r,
            a = e.s;
          if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
          if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
          var s,
            f = a.invm(this.n),
            h = f.mul(t).umod(this.n),
            d = f.mul(o).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(h, r.getPublic(), d)).isInfinity() &&
                s.eqXToP(o)
            : !(s = this.g.mulAdd(h, r.getPublic(), d)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(o);
        }),
        (d.prototype.recoverPubKey = function (t, e, r, n) {
          f((3 & r) === r, "The recovery param is more than two bits"),
            (e = new u(e, n));
          var o = this.n,
            a = new i(t),
            s = e.r,
            h = e.s,
            d = 1 & r,
            c = r >> 1;
          if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c)
            throw new Error("Unable to find sencond key candinate");
          s = c
            ? this.curve.pointFromX(s.add(this.curve.n), d)
            : this.curve.pointFromX(s, d);
          var l = e.r.invm(o),
            p = o.sub(a).mul(l).umod(o),
            b = h.mul(l).umod(o);
          return this.g.mulAdd(p, s, b);
        }),
        (d.prototype.getKeyRecoveryParam = function (t, e, r, i) {
          if (null !== (e = new u(e, i)).recoveryParam) return e.recoveryParam;
          for (var n = 0; n < 4; n++) {
            var o;
            try {
              o = this.recoverPubKey(t, e, n);
            } catch (t) {
              continue;
            }
            if (o.eq(r)) return n;
          }
          throw new Error("Unable to find valid recovery factor");
        });
    },
    784093: function (t, e, r) {
      "use strict";
      var i = r(763785),
        n = r(553369).assert;
      function o(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      (t.exports = o),
        (o.fromPublic = function (t, e, r) {
          return e instanceof o ? e : new o(t, { pub: e, pubEnc: r });
        }),
        (o.fromPrivate = function (t, e, r) {
          return e instanceof o ? e : new o(t, { priv: e, privEnc: r });
        }),
        (o.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (o.prototype.getPublic = function (t, e) {
          return (
            "string" === typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (o.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (o.prototype._importPrivate = function (t, e) {
          (this.priv = new i(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (o.prototype._importPublic = function (t, e) {
          if (t.x || t.y)
            return (
              "mont" === this.ec.curve.type
                ? n(t.x, "Need x coordinate")
                : ("short" !== this.ec.curve.type &&
                    "edwards" !== this.ec.curve.type) ||
                  n(t.x && t.y, "Need both x and y coordinate"),
              void (this.pub = this.ec.curve.point(t.x, t.y))
            );
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (o.prototype.derive = function (t) {
          return (
            t.validate() || n(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (o.prototype.sign = function (t, e, r) {
          return this.ec.sign(t, this, e, r);
        }),
        (o.prototype.verify = function (t, e, r) {
          return this.ec.verify(t, e, this, void 0, r);
        }),
        (o.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
    },
    769758: function (t, e, r) {
      "use strict";
      var i = r(763785),
        n = r(553369),
        o = n.assert;
      function a(t, e) {
        if (t instanceof a) return t;
        this._importDER(t, e) ||
          (o(t.r && t.s, "Signature without r or s"),
          (this.r = new i(t.r, 16)),
          (this.s = new i(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function s() {
        this.place = 0;
      }
      function f(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;
        var i = 15 & r;
        if (0 === i || i > 4) return !1;
        if (0 === t[e.place]) return !1;
        for (var n = 0, o = 0, a = e.place; o < i; o++, a++)
          (n <<= 8), (n |= t[a]), (n >>>= 0);
        return !(n <= 127) && ((e.place = a), n);
      }
      function h(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function u(t, e) {
        if (e < 128) t.push(e);
        else {
          var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
          for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
          t.push(e);
        }
      }
      (t.exports = a),
        (a.prototype._importDER = function (t, e) {
          t = n.toArray(t, e);
          var r = new s();
          if (48 !== t[r.place++]) return !1;
          var o = f(t, r);
          if (!1 === o) return !1;
          if (o + r.place !== t.length) return !1;
          if (2 !== t[r.place++]) return !1;
          var a = f(t, r);
          if (!1 === a) return !1;
          if (0 !== (128 & t[r.place])) return !1;
          var h = t.slice(r.place, a + r.place);
          if (((r.place += a), 2 !== t[r.place++])) return !1;
          var u = f(t, r);
          if (!1 === u) return !1;
          if (t.length !== u + r.place) return !1;
          if (0 !== (128 & t[r.place])) return !1;
          var d = t.slice(r.place, u + r.place);
          if (0 === h[0]) {
            if (!(128 & h[1])) return !1;
            h = h.slice(1);
          }
          if (0 === d[0]) {
            if (!(128 & d[1])) return !1;
            d = d.slice(1);
          }
          return (
            (this.r = new i(h)),
            (this.s = new i(d)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (a.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              e = h(e),
              r = h(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var i = [2];
          u(i, e.length), (i = i.concat(e)).push(2), u(i, r.length);
          var o = i.concat(r),
            a = [48];
          return u(a, o.length), (a = a.concat(o)), n.encode(a, t);
        });
    },
    111680: function (t, e, r) {
      "use strict";
      var i = r(835294),
        n = r(61044),
        o = r(553369),
        a = o.assert,
        s = o.parseBytes,
        f = r(736699),
        h = r(204396);
      function u(t) {
        if (
          (a("ed25519" === t, "only tested with ed25519 so far"),
          !(this instanceof u))
        )
          return new u(t);
        (t = n[t].curve),
          (this.curve = t),
          (this.g = t.g),
          this.g.precompute(t.n.bitLength() + 1),
          (this.pointClass = t.point().constructor),
          (this.encodingLength = Math.ceil(t.n.bitLength() / 8)),
          (this.hash = i.sha512);
      }
      (t.exports = u),
        (u.prototype.sign = function (t, e) {
          t = s(t);
          var r = this.keyFromSecret(e),
            i = this.hashInt(r.messagePrefix(), t),
            n = this.g.mul(i),
            o = this.encodePoint(n),
            a = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
            f = i.add(a).umod(this.curve.n);
          return this.makeSignature({ R: n, S: f, Rencoded: o });
        }),
        (u.prototype.verify = function (t, e, r) {
          if (
            ((t = s(t)),
            (e = this.makeSignature(e)).S().gte(e.eddsa.curve.n) ||
              e.S().isNeg())
          )
            return !1;
          var i = this.keyFromPublic(r),
            n = this.hashInt(e.Rencoded(), i.pubBytes(), t),
            o = this.g.mul(e.S());
          return e.R().add(i.pub().mul(n)).eq(o);
        }),
        (u.prototype.hashInt = function () {
          for (var t = this.hash(), e = 0; e < arguments.length; e++)
            t.update(arguments[e]);
          return o.intFromLE(t.digest()).umod(this.curve.n);
        }),
        (u.prototype.keyFromPublic = function (t) {
          return f.fromPublic(this, t);
        }),
        (u.prototype.keyFromSecret = function (t) {
          return f.fromSecret(this, t);
        }),
        (u.prototype.makeSignature = function (t) {
          return t instanceof h ? t : new h(this, t);
        }),
        (u.prototype.encodePoint = function (t) {
          var e = t.getY().toArray("le", this.encodingLength);
          return (e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0), e;
        }),
        (u.prototype.decodePoint = function (t) {
          var e = (t = o.parseBytes(t)).length - 1,
            r = t.slice(0, e).concat(-129 & t[e]),
            i = 0 !== (128 & t[e]),
            n = o.intFromLE(r);
          return this.curve.pointFromY(n, i);
        }),
        (u.prototype.encodeInt = function (t) {
          return t.toArray("le", this.encodingLength);
        }),
        (u.prototype.decodeInt = function (t) {
          return o.intFromLE(t);
        }),
        (u.prototype.isPoint = function (t) {
          return t instanceof this.pointClass;
        });
    },
    736699: function (t, e, r) {
      "use strict";
      var i = r(553369),
        n = i.assert,
        o = i.parseBytes,
        a = i.cachedProperty;
      function s(t, e) {
        (this.eddsa = t),
          (this._secret = o(e.secret)),
          t.isPoint(e.pub) ? (this._pub = e.pub) : (this._pubBytes = o(e.pub));
      }
      (s.fromPublic = function (t, e) {
        return e instanceof s ? e : new s(t, { pub: e });
      }),
        (s.fromSecret = function (t, e) {
          return e instanceof s ? e : new s(t, { secret: e });
        }),
        (s.prototype.secret = function () {
          return this._secret;
        }),
        a(s, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        a(s, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        a(s, "privBytes", function () {
          var t = this.eddsa,
            e = this.hash(),
            r = t.encodingLength - 1,
            i = e.slice(0, t.encodingLength);
          return (i[0] &= 248), (i[r] &= 127), (i[r] |= 64), i;
        }),
        a(s, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        a(s, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        a(s, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (s.prototype.sign = function (t) {
          return (
            n(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this)
          );
        }),
        (s.prototype.verify = function (t, e) {
          return this.eddsa.verify(t, e, this);
        }),
        (s.prototype.getSecret = function (t) {
          return (
            n(this._secret, "KeyPair is public only"),
            i.encode(this.secret(), t)
          );
        }),
        (s.prototype.getPublic = function (t) {
          return i.encode(this.pubBytes(), t);
        }),
        (t.exports = s);
    },
    204396: function (t, e, r) {
      "use strict";
      var i = r(763785),
        n = r(553369),
        o = n.assert,
        a = n.cachedProperty,
        s = n.parseBytes;
      function f(t, e) {
        (this.eddsa = t),
          "object" !== typeof e && (e = s(e)),
          Array.isArray(e) &&
            (o(e.length === 2 * t.encodingLength, "Signature has invalid size"),
            (e = {
              R: e.slice(0, t.encodingLength),
              S: e.slice(t.encodingLength),
            })),
          o(e.R && e.S, "Signature without R or S"),
          t.isPoint(e.R) && (this._R = e.R),
          e.S instanceof i && (this._S = e.S),
          (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
          (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded);
      }
      a(f, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        a(f, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        a(f, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }),
        a(f, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (f.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (f.prototype.toHex = function () {
          return n.encode(this.toBytes(), "hex").toUpperCase();
        }),
        (t.exports = f);
    },
    318719: function (t) {
      t.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    553369: function (t, e, r) {
      "use strict";
      var i = e,
        n = r(763785),
        o = r(677859),
        a = r(902910);
      (i.assert = o),
        (i.toArray = a.toArray),
        (i.zero2 = a.zero2),
        (i.toHex = a.toHex),
        (i.encode = a.encode),
        (i.getNAF = function (t, e, r) {
          var i,
            n = new Array(Math.max(t.bitLength(), r) + 1);
          for (i = 0; i < n.length; i += 1) n[i] = 0;
          var o = 1 << (e + 1),
            a = t.clone();
          for (i = 0; i < n.length; i++) {
            var s,
              f = a.andln(o - 1);
            a.isOdd()
              ? ((s = f > (o >> 1) - 1 ? (o >> 1) - f : f), a.isubn(s))
              : (s = 0),
              (n[i] = s),
              a.iushrn(1);
          }
          return n;
        }),
        (i.getJSF = function (t, e) {
          var r = [[], []];
          (t = t.clone()), (e = e.clone());
          for (var i, n = 0, o = 0; t.cmpn(-n) > 0 || e.cmpn(-o) > 0; ) {
            var a,
              s,
              f = (t.andln(3) + n) & 3,
              h = (e.andln(3) + o) & 3;
            3 === f && (f = -1),
              3 === h && (h = -1),
              (a =
                0 === (1 & f)
                  ? 0
                  : (3 !== (i = (t.andln(7) + n) & 7) && 5 !== i) || 2 !== h
                  ? f
                  : -f),
              r[0].push(a),
              (s =
                0 === (1 & h)
                  ? 0
                  : (3 !== (i = (e.andln(7) + o) & 7) && 5 !== i) || 2 !== f
                  ? h
                  : -h),
              r[1].push(s),
              2 * n === a + 1 && (n = 1 - n),
              2 * o === s + 1 && (o = 1 - o),
              t.iushrn(1),
              e.iushrn(1);
          }
          return r;
        }),
        (i.cachedProperty = function (t, e, r) {
          var i = "_" + e;
          t.prototype[e] = function () {
            return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
          };
        }),
        (i.parseBytes = function (t) {
          return "string" === typeof t ? i.toArray(t, "hex") : t;
        }),
        (i.intFromLE = function (t) {
          return new n(t, "hex", "le");
        });
    },
    955883: function (t, e, r) {
      var i = r(327172).Buffer,
        n = r(779500);
      t.exports = function (t, e, r, o) {
        if (
          (i.isBuffer(t) || (t = i.from(t, "binary")),
          e && (i.isBuffer(e) || (e = i.from(e, "binary")), 8 !== e.length))
        )
          throw new RangeError("salt should be Buffer with 8 byte length");
        for (
          var a = r / 8, s = i.alloc(a), f = i.alloc(o || 0), h = i.alloc(0);
          a > 0 || o > 0;

        ) {
          var u = new n();
          u.update(h), u.update(t), e && u.update(e), (h = u.digest());
          var d = 0;
          if (a > 0) {
            var c = s.length - a;
            (d = Math.min(a, h.length)), h.copy(s, c, 0, d), (a -= d);
          }
          if (d < h.length && o > 0) {
            var l = f.length - o,
              p = Math.min(o, h.length - d);
            h.copy(f, l, d, d + p), (o -= p);
          }
        }
        return h.fill(0), { key: s, iv: f };
      };
    },
    406883: function (t, e, r) {
      "use strict";
      var i = r(327172).Buffer,
        n = r(938310).Transform;
      function o(t) {
        n.call(this),
          (this._block = i.allocUnsafe(t)),
          (this._blockSize = t),
          (this._blockOffset = 0),
          (this._length = [0, 0, 0, 0]),
          (this._finalized = !1);
      }
      r(270087)(o, n),
        (o.prototype._transform = function (t, e, r) {
          var i = null;
          try {
            this.update(t, e);
          } catch (n) {
            i = n;
          }
          r(i);
        }),
        (o.prototype._flush = function (t) {
          var e = null;
          try {
            this.push(this.digest());
          } catch (r) {
            e = r;
          }
          t(e);
        }),
        (o.prototype.update = function (t, e) {
          if (
            ((function (t, e) {
              if (!i.isBuffer(t) && "string" !== typeof t)
                throw new TypeError(e + " must be a string or a buffer");
            })(t, "Data"),
            this._finalized)
          )
            throw new Error("Digest already called");
          i.isBuffer(t) || (t = i.from(t, e));
          for (
            var r = this._block, n = 0;
            this._blockOffset + t.length - n >= this._blockSize;

          ) {
            for (var o = this._blockOffset; o < this._blockSize; )
              r[o++] = t[n++];
            this._update(), (this._blockOffset = 0);
          }
          for (; n < t.length; ) r[this._blockOffset++] = t[n++];
          for (var a = 0, s = 8 * t.length; s > 0; ++a)
            (this._length[a] += s),
              (s = (this._length[a] / 4294967296) | 0) > 0 &&
                (this._length[a] -= 4294967296 * s);
          return this;
        }),
        (o.prototype._update = function () {
          throw new Error("_update is not implemented");
        }),
        (o.prototype.digest = function (t) {
          if (this._finalized) throw new Error("Digest already called");
          this._finalized = !0;
          var e = this._digest();
          void 0 !== t && (e = e.toString(t)),
            this._block.fill(0),
            (this._blockOffset = 0);
          for (var r = 0; r < 4; ++r) this._length[r] = 0;
          return e;
        }),
        (o.prototype._digest = function () {
          throw new Error("_digest is not implemented");
        }),
        (t.exports = o);
    },
    835294: function (t, e, r) {
      var i = e;
      (i.utils = r(588626)),
        (i.common = r(838717)),
        (i.sha = r(292589)),
        (i.ripemd = r(228494)),
        (i.hmac = r(882750)),
        (i.sha1 = i.sha.sha1),
        (i.sha256 = i.sha.sha256),
        (i.sha224 = i.sha.sha224),
        (i.sha384 = i.sha.sha384),
        (i.sha512 = i.sha.sha512),
        (i.ripemd160 = i.ripemd.ripemd160);
    },
    838717: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(677859);
      function o() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (e.BlockHash = o),
        (o.prototype.update = function (t, e) {
          if (
            ((t = i.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = i.join32(t, 0, t.length - r, this.endian));
            for (var n = 0; n < t.length; n += this._delta32)
              this._update(t, n, n + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (t) {
          return (
            this.update(this._pad()), n(null === this.pending), this._digest(t)
          );
        }),
        (o.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            i = new Array(r + this.padLength);
          i[0] = 128;
          for (var n = 1; n < r; n++) i[n] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) i[n++] = 0;
            (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = (t >>> 24) & 255),
              (i[n++] = (t >>> 16) & 255),
              (i[n++] = (t >>> 8) & 255),
              (i[n++] = 255 & t);
          } else
            for (
              i[n++] = 255 & t,
                i[n++] = (t >>> 8) & 255,
                i[n++] = (t >>> 16) & 255,
                i[n++] = (t >>> 24) & 255,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              i[n++] = 0;
          return i;
        });
    },
    882750: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(677859);
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(i.toArray(e, r));
      }
      (t.exports = o),
        (o.prototype._init = function (t) {
          t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
            n(t.length <= this.blockSize);
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
            t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (o.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (o.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        });
    },
    228494: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(838717),
        o = i.rotl32,
        a = i.sum32,
        s = i.sum32_3,
        f = i.sum32_4,
        h = n.BlockHash;
      function u() {
        if (!(this instanceof u)) return new u();
        h.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function d(t, e, r, i) {
        return t <= 15
          ? e ^ r ^ i
          : t <= 31
          ? (e & r) | (~e & i)
          : t <= 47
          ? (e | ~r) ^ i
          : t <= 63
          ? (e & i) | (r & ~i)
          : e ^ (r | ~i);
      }
      function c(t) {
        return t <= 15
          ? 0
          : t <= 31
          ? 1518500249
          : t <= 47
          ? 1859775393
          : t <= 63
          ? 2400959708
          : 2840853838;
      }
      function l(t) {
        return t <= 15
          ? 1352829926
          : t <= 31
          ? 1548603684
          : t <= 47
          ? 1836072691
          : t <= 63
          ? 2053994217
          : 0;
      }
      i.inherits(u, h),
        (e.ripemd160 = u),
        (u.blockSize = 512),
        (u.outSize = 160),
        (u.hmacStrength = 192),
        (u.padLength = 64),
        (u.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              i = this.h[1],
              n = this.h[2],
              h = this.h[3],
              u = this.h[4],
              y = r,
              v = i,
              w = n,
              _ = h,
              M = u,
              S = 0;
            S < 80;
            S++
          ) {
            var E = a(o(f(r, d(S, i, n, h), t[p[S] + e], c(S)), m[S]), u);
            (r = u),
              (u = h),
              (h = o(n, 10)),
              (n = i),
              (i = E),
              (E = a(o(f(y, d(79 - S, v, w, _), t[b[S] + e], l(S)), g[S]), M)),
              (y = M),
              (M = _),
              (_ = o(w, 10)),
              (w = v),
              (v = E);
          }
          (E = s(this.h[1], n, _)),
            (this.h[1] = s(this.h[2], h, M)),
            (this.h[2] = s(this.h[3], u, y)),
            (this.h[3] = s(this.h[4], r, v)),
            (this.h[4] = s(this.h[0], i, w)),
            (this.h[0] = E);
        }),
        (u.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "little")
            : i.split32(this.h, "little");
        });
      var p = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        b = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        m = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        g = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    292589: function (t, e, r) {
      "use strict";
      (e.sha1 = r(439330)),
        (e.sha224 = r(345168)),
        (e.sha256 = r(110375)),
        (e.sha384 = r(828899)),
        (e.sha512 = r(710790));
    },
    439330: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(838717),
        o = r(898156),
        a = i.rotl32,
        s = i.sum32,
        f = i.sum32_5,
        h = o.ft_1,
        u = n.BlockHash,
        d = [1518500249, 1859775393, 2400959708, 3395469782];
      function c() {
        if (!(this instanceof c)) return new c();
        u.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = new Array(80));
      }
      i.inherits(c, u),
        (t.exports = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 80),
        (c.padLength = 64),
        (c.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = a(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
          var n = this.h[0],
            o = this.h[1],
            u = this.h[2],
            c = this.h[3],
            l = this.h[4];
          for (i = 0; i < r.length; i++) {
            var p = ~~(i / 20),
              b = f(a(n, 5), h(p, o, u, c), l, r[i], d[p]);
            (l = c), (c = u), (u = a(o, 30)), (o = n), (n = b);
          }
          (this.h[0] = s(this.h[0], n)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], u)),
            (this.h[3] = s(this.h[3], c)),
            (this.h[4] = s(this.h[4], l));
        }),
        (c.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big");
        });
    },
    345168: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(110375);
      function o() {
        if (!(this instanceof o)) return new o();
        n.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      i.inherits(o, n),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h.slice(0, 7), "big")
            : i.split32(this.h.slice(0, 7), "big");
        });
    },
    110375: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(838717),
        o = r(898156),
        a = r(677859),
        s = i.sum32,
        f = i.sum32_4,
        h = i.sum32_5,
        u = o.ch32,
        d = o.maj32,
        c = o.s0_256,
        l = o.s1_256,
        p = o.g0_256,
        b = o.g1_256,
        m = n.BlockHash,
        g = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function y() {
        if (!(this instanceof y)) return new y();
        m.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = g),
          (this.W = new Array(64));
      }
      i.inherits(y, m),
        (t.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = f(b(r[i - 2]), r[i - 7], p(r[i - 15]), r[i - 16]);
          var n = this.h[0],
            o = this.h[1],
            m = this.h[2],
            g = this.h[3],
            y = this.h[4],
            v = this.h[5],
            w = this.h[6],
            _ = this.h[7];
          for (a(this.k.length === r.length), i = 0; i < r.length; i++) {
            var M = h(_, l(y), u(y, v, w), this.k[i], r[i]),
              S = s(c(n), d(n, o, m));
            (_ = w),
              (w = v),
              (v = y),
              (y = s(g, M)),
              (g = m),
              (m = o),
              (o = n),
              (n = s(M, S));
          }
          (this.h[0] = s(this.h[0], n)),
            (this.h[1] = s(this.h[1], o)),
            (this.h[2] = s(this.h[2], m)),
            (this.h[3] = s(this.h[3], g)),
            (this.h[4] = s(this.h[4], y)),
            (this.h[5] = s(this.h[5], v)),
            (this.h[6] = s(this.h[6], w)),
            (this.h[7] = s(this.h[7], _));
        }),
        (y.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big");
        });
    },
    828899: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(710790);
      function o() {
        if (!(this instanceof o)) return new o();
        n.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      i.inherits(o, n),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h.slice(0, 12), "big")
            : i.split32(this.h.slice(0, 12), "big");
        });
    },
    710790: function (t, e, r) {
      "use strict";
      var i = r(588626),
        n = r(838717),
        o = r(677859),
        a = i.rotr64_hi,
        s = i.rotr64_lo,
        f = i.shr64_hi,
        h = i.shr64_lo,
        u = i.sum64,
        d = i.sum64_hi,
        c = i.sum64_lo,
        l = i.sum64_4_hi,
        p = i.sum64_4_lo,
        b = i.sum64_5_hi,
        m = i.sum64_5_lo,
        g = n.BlockHash,
        y = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        g.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = y),
          (this.W = new Array(160));
      }
      function w(t, e, r, i, n) {
        var o = (t & r) ^ (~t & n);
        return o < 0 && (o += 4294967296), o;
      }
      function _(t, e, r, i, n, o) {
        var a = (e & i) ^ (~e & o);
        return a < 0 && (a += 4294967296), a;
      }
      function M(t, e, r, i, n) {
        var o = (t & r) ^ (t & n) ^ (r & n);
        return o < 0 && (o += 4294967296), o;
      }
      function S(t, e, r, i, n, o) {
        var a = (e & i) ^ (e & o) ^ (i & o);
        return a < 0 && (a += 4294967296), a;
      }
      function E(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function k(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function A(t, e) {
        var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function R(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }
      function x(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ f(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function B(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ h(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }
      function I(t, e) {
        var r = a(t, e, 19) ^ a(e, t, 29) ^ f(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      function T(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ h(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }
      i.inherits(v, g),
        (t.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
          for (; i < r.length; i += 2) {
            var n = I(r[i - 4], r[i - 3]),
              o = T(r[i - 4], r[i - 3]),
              a = r[i - 14],
              s = r[i - 13],
              f = x(r[i - 30], r[i - 29]),
              h = B(r[i - 30], r[i - 29]),
              u = r[i - 32],
              d = r[i - 31];
            (r[i] = l(n, o, a, s, f, h, u, d)),
              (r[i + 1] = p(n, o, a, s, f, h, u, d));
          }
        }),
        (v.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            i = this.h[0],
            n = this.h[1],
            a = this.h[2],
            s = this.h[3],
            f = this.h[4],
            h = this.h[5],
            l = this.h[6],
            p = this.h[7],
            g = this.h[8],
            y = this.h[9],
            v = this.h[10],
            x = this.h[11],
            B = this.h[12],
            I = this.h[13],
            T = this.h[14],
            P = this.h[15];
          o(this.k.length === r.length);
          for (var j = 0; j < r.length; j += 2) {
            var O = T,
              C = P,
              L = A(g, y),
              N = R(g, y),
              D = w(g, y, v, x, B),
              q = _(g, y, v, x, B, I),
              U = this.k[j],
              z = this.k[j + 1],
              H = r[j],
              K = r[j + 1],
              F = b(O, C, L, N, D, q, U, z, H, K),
              W = m(O, C, L, N, D, q, U, z, H, K);
            (O = E(i, n)),
              (C = k(i, n)),
              (L = M(i, n, a, s, f)),
              (N = S(i, n, a, s, f, h));
            var V = d(O, C, L, N),
              Z = c(O, C, L, N);
            (T = B),
              (P = I),
              (B = v),
              (I = x),
              (v = g),
              (x = y),
              (g = d(l, p, F, W)),
              (y = c(p, p, F, W)),
              (l = f),
              (p = h),
              (f = a),
              (h = s),
              (a = i),
              (s = n),
              (i = d(F, W, V, Z)),
              (n = c(F, W, V, Z));
          }
          u(this.h, 0, i, n),
            u(this.h, 2, a, s),
            u(this.h, 4, f, h),
            u(this.h, 6, l, p),
            u(this.h, 8, g, y),
            u(this.h, 10, v, x),
            u(this.h, 12, B, I),
            u(this.h, 14, T, P);
        }),
        (v.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big");
        });
    },
    898156: function (t, e, r) {
      "use strict";
      var i = r(588626).rotr32;
      function n(t, e, r) {
        return (t & e) ^ (~t & r);
      }
      function o(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      function a(t, e, r) {
        return t ^ e ^ r;
      }
      (e.ft_1 = function (t, e, r, i) {
        return 0 === t
          ? n(e, r, i)
          : 1 === t || 3 === t
          ? a(e, r, i)
          : 2 === t
          ? o(e, r, i)
          : void 0;
      }),
        (e.ch32 = n),
        (e.maj32 = o),
        (e.p32 = a),
        (e.s0_256 = function (t) {
          return i(t, 2) ^ i(t, 13) ^ i(t, 22);
        }),
        (e.s1_256 = function (t) {
          return i(t, 6) ^ i(t, 11) ^ i(t, 25);
        }),
        (e.g0_256 = function (t) {
          return i(t, 7) ^ i(t, 18) ^ (t >>> 3);
        }),
        (e.g1_256 = function (t) {
          return i(t, 17) ^ i(t, 19) ^ (t >>> 10);
        });
    },
    588626: function (t, e, r) {
      "use strict";
      var i = r(677859),
        n = r(270087);
      function o(t, e) {
        return (
          55296 === (64512 & t.charCodeAt(e)) &&
          !(e < 0 || e + 1 >= t.length) &&
          56320 === (64512 & t.charCodeAt(e + 1))
        );
      }
      function a(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function s(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function f(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (e.inherits = n),
        (e.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var r = [];
          if ("string" === typeof t)
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 &&
                    (t = "0" + t),
                    n = 0;
                  n < t.length;
                  n += 2
                )
                  r.push(parseInt(t[n] + t[n + 1], 16));
            } else
              for (var i = 0, n = 0; n < t.length; n++) {
                var a = t.charCodeAt(n);
                a < 128
                  ? (r[i++] = a)
                  : a < 2048
                  ? ((r[i++] = (a >> 6) | 192), (r[i++] = (63 & a) | 128))
                  : o(t, n)
                  ? ((a =
                      65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++n))),
                    (r[i++] = (a >> 18) | 240),
                    (r[i++] = ((a >> 12) & 63) | 128),
                    (r[i++] = ((a >> 6) & 63) | 128),
                    (r[i++] = (63 & a) | 128))
                  : ((r[i++] = (a >> 12) | 224),
                    (r[i++] = ((a >> 6) & 63) | 128),
                    (r[i++] = (63 & a) | 128));
              }
          else for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
          return r;
        }),
        (e.toHex = function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += s(t[r].toString(16));
          return e;
        }),
        (e.htonl = a),
        (e.toHex32 = function (t, e) {
          for (var r = "", i = 0; i < t.length; i++) {
            var n = t[i];
            "little" === e && (n = a(n)), (r += f(n.toString(16)));
          }
          return r;
        }),
        (e.zero2 = s),
        (e.zero8 = f),
        (e.join32 = function (t, e, r, n) {
          var o = r - e;
          i(o % 4 === 0);
          for (
            var a = new Array(o / 4), s = 0, f = e;
            s < a.length;
            s++, f += 4
          ) {
            var h;
            (h =
              "big" === n
                ? (t[f] << 24) | (t[f + 1] << 16) | (t[f + 2] << 8) | t[f + 3]
                : (t[f + 3] << 24) | (t[f + 2] << 16) | (t[f + 1] << 8) | t[f]),
              (a[s] = h >>> 0);
          }
          return a;
        }),
        (e.split32 = function (t, e) {
          for (
            var r = new Array(4 * t.length), i = 0, n = 0;
            i < t.length;
            i++, n += 4
          ) {
            var o = t[i];
            "big" === e
              ? ((r[n] = o >>> 24),
                (r[n + 1] = (o >>> 16) & 255),
                (r[n + 2] = (o >>> 8) & 255),
                (r[n + 3] = 255 & o))
              : ((r[n + 3] = o >>> 24),
                (r[n + 2] = (o >>> 16) & 255),
                (r[n + 1] = (o >>> 8) & 255),
                (r[n] = 255 & o));
          }
          return r;
        }),
        (e.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (e.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (e.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (e.sum32_3 = function (t, e, r) {
          return (t + e + r) >>> 0;
        }),
        (e.sum32_4 = function (t, e, r, i) {
          return (t + e + r + i) >>> 0;
        }),
        (e.sum32_5 = function (t, e, r, i, n) {
          return (t + e + r + i + n) >>> 0;
        }),
        (e.sum64 = function (t, e, r, i) {
          var n = t[e],
            o = (i + t[e + 1]) >>> 0,
            a = (o < i ? 1 : 0) + r + n;
          (t[e] = a >>> 0), (t[e + 1] = o);
        }),
        (e.sum64_hi = function (t, e, r, i) {
          return (((e + i) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
        }),
        (e.sum64_lo = function (t, e, r, i) {
          return (e + i) >>> 0;
        }),
        (e.sum64_4_hi = function (t, e, r, i, n, o, a, s) {
          var f = 0,
            h = e;
          return (
            (f += (h = (h + i) >>> 0) < e ? 1 : 0),
            (f += (h = (h + o) >>> 0) < o ? 1 : 0),
            (t + r + n + a + (f += (h = (h + s) >>> 0) < s ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_4_lo = function (t, e, r, i, n, o, a, s) {
          return (e + i + o + s) >>> 0;
        }),
        (e.sum64_5_hi = function (t, e, r, i, n, o, a, s, f, h) {
          var u = 0,
            d = e;
          return (
            (u += (d = (d + i) >>> 0) < e ? 1 : 0),
            (u += (d = (d + o) >>> 0) < o ? 1 : 0),
            (u += (d = (d + s) >>> 0) < s ? 1 : 0),
            (t + r + n + a + f + (u += (d = (d + h) >>> 0) < h ? 1 : 0)) >>> 0
          );
        }),
        (e.sum64_5_lo = function (t, e, r, i, n, o, a, s, f, h) {
          return (e + i + o + s + h) >>> 0;
        }),
        (e.rotr64_hi = function (t, e, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (e.rotr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (e.shr64_hi = function (t, e, r) {
          return t >>> r;
        }),
        (e.shr64_lo = function (t, e, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        });
    },
    276513: function (t, e, r) {
      "use strict";
      var i = r(835294),
        n = r(902910),
        o = r(677859);
      function a(t) {
        if (!(this instanceof a)) return new a(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = n.toArray(t.entropy, t.entropyEnc || "hex"),
          r = n.toArray(t.nonce, t.nonceEnc || "hex"),
          i = n.toArray(t.pers, t.persEnc || "hex");
        o(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, r, i);
      }
      (t.exports = a),
        (a.prototype._init = function (t, e, r) {
          var i = t.concat(e).concat(r);
          (this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8));
          for (var n = 0; n < this.V.length; n++)
            (this.K[n] = 0), (this.V[n] = 1);
          this._update(i),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656);
        }),
        (a.prototype._hmac = function () {
          return new i.hmac(this.hash, this.K);
        }),
        (a.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (a.prototype.reseed = function (t, e, r, i) {
          "string" !== typeof e && ((i = r), (r = e), (e = null)),
            (t = n.toArray(t, e)),
            (r = n.toArray(r, i)),
            o(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(r || [])),
            (this._reseed = 1);
        }),
        (a.prototype.generate = function (t, e, r, i) {
          if (this._reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          "string" !== typeof e && ((i = r), (r = e), (e = null)),
            r && ((r = n.toArray(r, i || "hex")), this._update(r));
          for (var o = []; o.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (o = o.concat(this.V));
          var a = o.slice(0, t);
          return this._update(r), this._reseed++, n.encode(a, e);
        });
    },
    779500: function (t, e, r) {
      "use strict";
      var i = r(270087),
        n = r(406883),
        o = r(327172).Buffer,
        a = new Array(16);
      function s() {
        n.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878);
      }
      function f(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function h(t, e, r, i, n, o, a) {
        return (f((t + ((e & r) | (~e & i)) + n + o) | 0, a) + e) | 0;
      }
      function u(t, e, r, i, n, o, a) {
        return (f((t + ((e & i) | (r & ~i)) + n + o) | 0, a) + e) | 0;
      }
      function d(t, e, r, i, n, o, a) {
        return (f((t + (e ^ r ^ i) + n + o) | 0, a) + e) | 0;
      }
      function c(t, e, r, i, n, o, a) {
        return (f((t + (r ^ (e | ~i)) + n + o) | 0, a) + e) | 0;
      }
      i(s, n),
        (s.prototype._update = function () {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
          var r = this._a,
            i = this._b,
            n = this._c,
            o = this._d;
          (r = h(r, i, n, o, t[0], 3614090360, 7)),
            (o = h(o, r, i, n, t[1], 3905402710, 12)),
            (n = h(n, o, r, i, t[2], 606105819, 17)),
            (i = h(i, n, o, r, t[3], 3250441966, 22)),
            (r = h(r, i, n, o, t[4], 4118548399, 7)),
            (o = h(o, r, i, n, t[5], 1200080426, 12)),
            (n = h(n, o, r, i, t[6], 2821735955, 17)),
            (i = h(i, n, o, r, t[7], 4249261313, 22)),
            (r = h(r, i, n, o, t[8], 1770035416, 7)),
            (o = h(o, r, i, n, t[9], 2336552879, 12)),
            (n = h(n, o, r, i, t[10], 4294925233, 17)),
            (i = h(i, n, o, r, t[11], 2304563134, 22)),
            (r = h(r, i, n, o, t[12], 1804603682, 7)),
            (o = h(o, r, i, n, t[13], 4254626195, 12)),
            (n = h(n, o, r, i, t[14], 2792965006, 17)),
            (r = u(
              r,
              (i = h(i, n, o, r, t[15], 1236535329, 22)),
              n,
              o,
              t[1],
              4129170786,
              5
            )),
            (o = u(o, r, i, n, t[6], 3225465664, 9)),
            (n = u(n, o, r, i, t[11], 643717713, 14)),
            (i = u(i, n, o, r, t[0], 3921069994, 20)),
            (r = u(r, i, n, o, t[5], 3593408605, 5)),
            (o = u(o, r, i, n, t[10], 38016083, 9)),
            (n = u(n, o, r, i, t[15], 3634488961, 14)),
            (i = u(i, n, o, r, t[4], 3889429448, 20)),
            (r = u(r, i, n, o, t[9], 568446438, 5)),
            (o = u(o, r, i, n, t[14], 3275163606, 9)),
            (n = u(n, o, r, i, t[3], 4107603335, 14)),
            (i = u(i, n, o, r, t[8], 1163531501, 20)),
            (r = u(r, i, n, o, t[13], 2850285829, 5)),
            (o = u(o, r, i, n, t[2], 4243563512, 9)),
            (n = u(n, o, r, i, t[7], 1735328473, 14)),
            (r = d(
              r,
              (i = u(i, n, o, r, t[12], 2368359562, 20)),
              n,
              o,
              t[5],
              4294588738,
              4
            )),
            (o = d(o, r, i, n, t[8], 2272392833, 11)),
            (n = d(n, o, r, i, t[11], 1839030562, 16)),
            (i = d(i, n, o, r, t[14], 4259657740, 23)),
            (r = d(r, i, n, o, t[1], 2763975236, 4)),
            (o = d(o, r, i, n, t[4], 1272893353, 11)),
            (n = d(n, o, r, i, t[7], 4139469664, 16)),
            (i = d(i, n, o, r, t[10], 3200236656, 23)),
            (r = d(r, i, n, o, t[13], 681279174, 4)),
            (o = d(o, r, i, n, t[0], 3936430074, 11)),
            (n = d(n, o, r, i, t[3], 3572445317, 16)),
            (i = d(i, n, o, r, t[6], 76029189, 23)),
            (r = d(r, i, n, o, t[9], 3654602809, 4)),
            (o = d(o, r, i, n, t[12], 3873151461, 11)),
            (n = d(n, o, r, i, t[15], 530742520, 16)),
            (r = c(
              r,
              (i = d(i, n, o, r, t[2], 3299628645, 23)),
              n,
              o,
              t[0],
              4096336452,
              6
            )),
            (o = c(o, r, i, n, t[7], 1126891415, 10)),
            (n = c(n, o, r, i, t[14], 2878612391, 15)),
            (i = c(i, n, o, r, t[5], 4237533241, 21)),
            (r = c(r, i, n, o, t[12], 1700485571, 6)),
            (o = c(o, r, i, n, t[3], 2399980690, 10)),
            (n = c(n, o, r, i, t[10], 4293915773, 15)),
            (i = c(i, n, o, r, t[1], 2240044497, 21)),
            (r = c(r, i, n, o, t[8], 1873313359, 6)),
            (o = c(o, r, i, n, t[15], 4264355552, 10)),
            (n = c(n, o, r, i, t[6], 2734768916, 15)),
            (i = c(i, n, o, r, t[13], 1309151649, 21)),
            (r = c(r, i, n, o, t[4], 4149444226, 6)),
            (o = c(o, r, i, n, t[11], 3174756917, 10)),
            (n = c(n, o, r, i, t[2], 718787259, 15)),
            (i = c(i, n, o, r, t[9], 3951481745, 21)),
            (this._a = (this._a + r) | 0),
            (this._b = (this._b + i) | 0),
            (this._c = (this._c + n) | 0),
            (this._d = (this._d + o) | 0);
        }),
        (s.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var t = o.allocUnsafe(16);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
          );
        }),
        (t.exports = s);
    },
    578773: function (t, e, r) {
      var i = r(763785),
        n = r(559154);
      function o(t) {
        this.rand = t || new n.Rand();
      }
      (t.exports = o),
        (o.create = function (t) {
          return new o(t);
        }),
        (o.prototype._randbelow = function (t) {
          var e = t.bitLength(),
            r = Math.ceil(e / 8);
          do {
            var n = new i(this.rand.generate(r));
          } while (n.cmp(t) >= 0);
          return n;
        }),
        (o.prototype._randrange = function (t, e) {
          var r = e.sub(t);
          return t.add(this._randbelow(r));
        }),
        (o.prototype.test = function (t, e, r) {
          var n = t.bitLength(),
            o = i.mont(t),
            a = new i(1).toRed(o);
          e || (e = Math.max(1, (n / 48) | 0));
          for (var s = t.subn(1), f = 0; !s.testn(f); f++);
          for (var h = t.shrn(f), u = s.toRed(o); e > 0; e--) {
            var d = this._randrange(new i(2), s);
            r && r(d);
            var c = d.toRed(o).redPow(h);
            if (0 !== c.cmp(a) && 0 !== c.cmp(u)) {
              for (var l = 1; l < f; l++) {
                if (0 === (c = c.redSqr()).cmp(a)) return !1;
                if (0 === c.cmp(u)) break;
              }
              if (l === f) return !1;
            }
          }
          return !0;
        }),
        (o.prototype.getDivisor = function (t, e) {
          var r = t.bitLength(),
            n = i.mont(t),
            o = new i(1).toRed(n);
          e || (e = Math.max(1, (r / 48) | 0));
          for (var a = t.subn(1), s = 0; !a.testn(s); s++);
          for (var f = t.shrn(s), h = a.toRed(n); e > 0; e--) {
            var u = this._randrange(new i(2), a),
              d = t.gcd(u);
            if (0 !== d.cmpn(1)) return d;
            var c = u.toRed(n).redPow(f);
            if (0 !== c.cmp(o) && 0 !== c.cmp(h)) {
              for (var l = 1; l < s; l++) {
                if (0 === (c = c.redSqr()).cmp(o))
                  return c.fromRed().subn(1).gcd(t);
                if (0 === c.cmp(h)) break;
              }
              if (l === s) return (c = c.redSqr()).fromRed().subn(1).gcd(t);
            }
          }
          return !1;
        });
    },
    677859: function (t) {
      function e(t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }
      (t.exports = e),
        (e.equal = function (t, e, r) {
          if (t != e)
            throw new Error(r || "Assertion failed: " + t + " != " + e);
        });
    },
    902910: function (t, e) {
      "use strict";
      var r = e;
      function i(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function n(t) {
        for (var e = "", r = 0; r < t.length; r++) e += i(t[r].toString(16));
        return e;
      }
      (r.toArray = function (t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ("string" !== typeof t) {
          for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
          return r;
        }
        if ("hex" === e) {
          (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 !== 0 && (t = "0" + t);
          for (i = 0; i < t.length; i += 2)
            r.push(parseInt(t[i] + t[i + 1], 16));
        } else
          for (i = 0; i < t.length; i++) {
            var n = t.charCodeAt(i),
              o = n >> 8,
              a = 255 & n;
            o ? r.push(o, a) : r.push(a);
          }
        return r;
      }),
        (r.zero2 = i),
        (r.toHex = n),
        (r.encode = function (t, e) {
          return "hex" === e ? n(t) : t;
        });
    },
    648481: function (t, e, r) {
      "use strict";
      var i = r(299840);
      e.certificate = r(766939);
      var n = i.define("RSAPrivateKey", function () {
        this.seq().obj(
          this.key("version").int(),
          this.key("modulus").int(),
          this.key("publicExponent").int(),
          this.key("privateExponent").int(),
          this.key("prime1").int(),
          this.key("prime2").int(),
          this.key("exponent1").int(),
          this.key("exponent2").int(),
          this.key("coefficient").int()
        );
      });
      e.RSAPrivateKey = n;
      var o = i.define("RSAPublicKey", function () {
        this.seq().obj(
          this.key("modulus").int(),
          this.key("publicExponent").int()
        );
      });
      e.RSAPublicKey = o;
      var a = i.define("SubjectPublicKeyInfo", function () {
        this.seq().obj(
          this.key("algorithm").use(s),
          this.key("subjectPublicKey").bitstr()
        );
      });
      e.PublicKey = a;
      var s = i.define("AlgorithmIdentifier", function () {
          this.seq().obj(
            this.key("algorithm").objid(),
            this.key("none").null_().optional(),
            this.key("curve").objid().optional(),
            this.key("params")
              .seq()
              .obj(
                this.key("p").int(),
                this.key("q").int(),
                this.key("g").int()
              )
              .optional()
          );
        }),
        f = i.define("PrivateKeyInfo", function () {
          this.seq().obj(
            this.key("version").int(),
            this.key("algorithm").use(s),
            this.key("subjectPrivateKey").octstr()
          );
        });
      e.PrivateKey = f;
      var h = i.define("EncryptedPrivateKeyInfo", function () {
        this.seq().obj(
          this.key("algorithm")
            .seq()
            .obj(
              this.key("id").objid(),
              this.key("decrypt")
                .seq()
                .obj(
                  this.key("kde")
                    .seq()
                    .obj(
                      this.key("id").objid(),
                      this.key("kdeparams")
                        .seq()
                        .obj(this.key("salt").octstr(), this.key("iters").int())
                    ),
                  this.key("cipher")
                    .seq()
                    .obj(this.key("algo").objid(), this.key("iv").octstr())
                )
            ),
          this.key("subjectPrivateKey").octstr()
        );
      });
      e.EncryptedPrivateKey = h;
      var u = i.define("DSAPrivateKey", function () {
        this.seq().obj(
          this.key("version").int(),
          this.key("p").int(),
          this.key("q").int(),
          this.key("g").int(),
          this.key("pub_key").int(),
          this.key("priv_key").int()
        );
      });
      (e.DSAPrivateKey = u),
        (e.DSAparam = i.define("DSAparam", function () {
          this.int();
        }));
      var d = i.define("ECPrivateKey", function () {
        this.seq().obj(
          this.key("version").int(),
          this.key("privateKey").octstr(),
          this.key("parameters").optional().explicit(0).use(c),
          this.key("publicKey").optional().explicit(1).bitstr()
        );
      });
      e.ECPrivateKey = d;
      var c = i.define("ECParameters", function () {
        this.choice({ namedCurve: this.objid() });
      });
      e.signature = i.define("signature", function () {
        this.seq().obj(this.key("r").int(), this.key("s").int());
      });
    },
    766939: function (t, e, r) {
      "use strict";
      var i = r(299840),
        n = i.define("Time", function () {
          this.choice({ utcTime: this.utctime(), generalTime: this.gentime() });
        }),
        o = i.define("AttributeTypeValue", function () {
          this.seq().obj(this.key("type").objid(), this.key("value").any());
        }),
        a = i.define("AlgorithmIdentifier", function () {
          this.seq().obj(
            this.key("algorithm").objid(),
            this.key("parameters").optional(),
            this.key("curve").objid().optional()
          );
        }),
        s = i.define("SubjectPublicKeyInfo", function () {
          this.seq().obj(
            this.key("algorithm").use(a),
            this.key("subjectPublicKey").bitstr()
          );
        }),
        f = i.define("RelativeDistinguishedName", function () {
          this.setof(o);
        }),
        h = i.define("RDNSequence", function () {
          this.seqof(f);
        }),
        u = i.define("Name", function () {
          this.choice({ rdnSequence: this.use(h) });
        }),
        d = i.define("Validity", function () {
          this.seq().obj(
            this.key("notBefore").use(n),
            this.key("notAfter").use(n)
          );
        }),
        c = i.define("Extension", function () {
          this.seq().obj(
            this.key("extnID").objid(),
            this.key("critical").bool().def(!1),
            this.key("extnValue").octstr()
          );
        }),
        l = i.define("TBSCertificate", function () {
          this.seq().obj(
            this.key("version").explicit(0).int().optional(),
            this.key("serialNumber").int(),
            this.key("signature").use(a),
            this.key("issuer").use(u),
            this.key("validity").use(d),
            this.key("subject").use(u),
            this.key("subjectPublicKeyInfo").use(s),
            this.key("issuerUniqueID").implicit(1).bitstr().optional(),
            this.key("subjectUniqueID").implicit(2).bitstr().optional(),
            this.key("extensions").explicit(3).seqof(c).optional()
          );
        }),
        p = i.define("X509Certificate", function () {
          this.seq().obj(
            this.key("tbsCertificate").use(l),
            this.key("signatureAlgorithm").use(a),
            this.key("signatureValue").bitstr()
          );
        });
      t.exports = p;
    },
    311412: function (t, e, r) {
      var i =
          /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
        n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
        o =
          /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
        a = r(955883),
        s = r(498901),
        f = r(327172).Buffer;
      t.exports = function (t, e) {
        var r,
          h = t.toString(),
          u = h.match(i);
        if (u) {
          var d = "aes" + u[1],
            c = f.from(u[2], "hex"),
            l = f.from(u[3].replace(/[\r\n]/g, ""), "base64"),
            p = a(e, c.slice(0, 8), parseInt(u[1], 10)).key,
            b = [],
            m = s.createDecipheriv(d, p, c);
          b.push(m.update(l)), b.push(m.final()), (r = f.concat(b));
        } else {
          var g = h.match(o);
          r = f.from(g[2].replace(/[\r\n]/g, ""), "base64");
        }
        return { tag: h.match(n)[1], data: r };
      };
    },
    671463: function (t, e, r) {
      var i = r(648481),
        n = r(641095),
        o = r(311412),
        a = r(498901),
        s = r(750041),
        f = r(327172).Buffer;
      function h(t) {
        var e;
        "object" !== typeof t ||
          f.isBuffer(t) ||
          ((e = t.passphrase), (t = t.key)),
          "string" === typeof t && (t = f.from(t));
        var r,
          h,
          u = o(t, e),
          d = u.tag,
          c = u.data;
        switch (d) {
          case "CERTIFICATE":
            h = i.certificate.decode(c, "der").tbsCertificate
              .subjectPublicKeyInfo;
          case "PUBLIC KEY":
            switch (
              (h || (h = i.PublicKey.decode(c, "der")),
              (r = h.algorithm.algorithm.join(".")))
            ) {
              case "1.2.840.113549.1.1.1":
                return i.RSAPublicKey.decode(h.subjectPublicKey.data, "der");
              case "1.2.840.10045.2.1":
                return (
                  (h.subjectPrivateKey = h.subjectPublicKey),
                  { type: "ec", data: h }
                );
              case "1.2.840.10040.4.1":
                return (
                  (h.algorithm.params.pub_key = i.DSAparam.decode(
                    h.subjectPublicKey.data,
                    "der"
                  )),
                  { type: "dsa", data: h.algorithm.params }
                );
              default:
                throw new Error("unknown key id " + r);
            }
          case "ENCRYPTED PRIVATE KEY":
            c = (function (t, e) {
              var r = t.algorithm.decrypt.kde.kdeparams.salt,
                i = parseInt(
                  t.algorithm.decrypt.kde.kdeparams.iters.toString(),
                  10
                ),
                o = n[t.algorithm.decrypt.cipher.algo.join(".")],
                h = t.algorithm.decrypt.cipher.iv,
                u = t.subjectPrivateKey,
                d = parseInt(o.split("-")[1], 10) / 8,
                c = s.pbkdf2Sync(e, r, i, d, "sha1"),
                l = a.createDecipheriv(o, c, h),
                p = [];
              return p.push(l.update(u)), p.push(l.final()), f.concat(p);
            })((c = i.EncryptedPrivateKey.decode(c, "der")), e);
          case "PRIVATE KEY":
            switch (
              (r = (h = i.PrivateKey.decode(c, "der")).algorithm.algorithm.join(
                "."
              ))
            ) {
              case "1.2.840.113549.1.1.1":
                return i.RSAPrivateKey.decode(h.subjectPrivateKey, "der");
              case "1.2.840.10045.2.1":
                return {
                  curve: h.algorithm.curve,
                  privateKey: i.ECPrivateKey.decode(h.subjectPrivateKey, "der")
                    .privateKey,
                };
              case "1.2.840.10040.4.1":
                return (
                  (h.algorithm.params.priv_key = i.DSAparam.decode(
                    h.subjectPrivateKey,
                    "der"
                  )),
                  { type: "dsa", params: h.algorithm.params }
                );
              default:
                throw new Error("unknown key id " + r);
            }
          case "RSA PUBLIC KEY":
            return i.RSAPublicKey.decode(c, "der");
          case "RSA PRIVATE KEY":
            return i.RSAPrivateKey.decode(c, "der");
          case "DSA PRIVATE KEY":
            return { type: "dsa", params: i.DSAPrivateKey.decode(c, "der") };
          case "EC PRIVATE KEY":
            return {
              curve: (c = i.ECPrivateKey.decode(c, "der")).parameters.value,
              privateKey: c.privateKey,
            };
          default:
            throw new Error("unknown key type " + d);
        }
      }
      (t.exports = h), (h.signature = i.signature);
    },
    750041: function (t, e, r) {
      (e.pbkdf2 = r(796394)), (e.pbkdf2Sync = r(554355));
    },
    796394: function (t, e, r) {
      var i,
        n,
        o = r(327172).Buffer,
        a = r(772642),
        s = r(182703),
        f = r(554355),
        h = r(653819),
        u = r.g.crypto && r.g.crypto.subtle,
        d = {
          sha: "SHA-1",
          "sha-1": "SHA-1",
          sha1: "SHA-1",
          sha256: "SHA-256",
          "sha-256": "SHA-256",
          sha384: "SHA-384",
          "sha-384": "SHA-384",
          "sha-512": "SHA-512",
          sha512: "SHA-512",
        },
        c = [];
      function l() {
        return (
          n ||
          (n =
            r.g.process && r.g.process.nextTick
              ? r.g.process.nextTick
              : r.g.queueMicrotask
              ? r.g.queueMicrotask
              : r.g.setImmediate
              ? r.g.setImmediate
              : r.g.setTimeout)
        );
      }
      function p(t, e, r, i, n) {
        return u
          .importKey("raw", t, { name: "PBKDF2" }, !1, ["deriveBits"])
          .then(function (t) {
            return u.deriveBits(
              { name: "PBKDF2", salt: e, iterations: r, hash: { name: n } },
              t,
              i << 3
            );
          })
          .then(function (t) {
            return o.from(t);
          });
      }
      t.exports = function (t, e, n, b, m, g) {
        "function" === typeof m && ((g = m), (m = void 0));
        var y = d[(m = m || "sha1").toLowerCase()];
        if (y && "function" === typeof r.g.Promise) {
          if (
            (a(n, b),
            (t = h(t, s, "Password")),
            (e = h(e, s, "Salt")),
            "function" !== typeof g)
          )
            throw new Error("No callback provided to pbkdf2");
          !(function (t, e) {
            t.then(
              function (t) {
                l()(function () {
                  e(null, t);
                });
              },
              function (t) {
                l()(function () {
                  e(t);
                });
              }
            );
          })(
            (function (t) {
              if (r.g.process && !r.g.process.browser)
                return Promise.resolve(!1);
              if (!u || !u.importKey || !u.deriveBits)
                return Promise.resolve(!1);
              if (void 0 !== c[t]) return c[t];
              var e = p((i = i || o.alloc(8)), i, 10, 128, t)
                .then(function () {
                  return !0;
                })
                .catch(function () {
                  return !1;
                });
              return (c[t] = e), e;
            })(y).then(function (r) {
              return r ? p(t, e, n, b, y) : f(t, e, n, b, m);
            }),
            g
          );
        } else
          l()(function () {
            var r;
            try {
              r = f(t, e, n, b, m);
            } catch (i) {
              return g(i);
            }
            g(null, r);
          });
      };
    },
    182703: function (t, e, r) {
      var i,
        n = r(127061);
      if (r.g.process && r.g.process.browser) i = "utf-8";
      else if (r.g.process && r.g.process.version) {
        i =
          parseInt(n.version.split(".")[0].slice(1), 10) >= 6
            ? "utf-8"
            : "binary";
      } else i = "utf-8";
      t.exports = i;
    },
    772642: function (t) {
      var e = Math.pow(2, 30) - 1;
      t.exports = function (t, r) {
        if ("number" !== typeof t)
          throw new TypeError("Iterations not a number");
        if (t < 0) throw new TypeError("Bad iterations");
        if ("number" !== typeof r)
          throw new TypeError("Key length not a number");
        if (r < 0 || r > e || r !== r) throw new TypeError("Bad key length");
      };
    },
    554355: function (t, e, r) {
      var i = r(937401),
        n = r(286558),
        o = r(254458),
        a = r(327172).Buffer,
        s = r(772642),
        f = r(182703),
        h = r(653819),
        u = a.alloc(128),
        d = {
          md5: 16,
          sha1: 20,
          sha224: 28,
          sha256: 32,
          sha384: 48,
          sha512: 64,
          rmd160: 20,
          ripemd160: 20,
        };
      function c(t, e, r) {
        var s = (function (t) {
            function e(e) {
              return o(t).update(e).digest();
            }
            function r(t) {
              return new n().update(t).digest();
            }
            return "rmd160" === t || "ripemd160" === t
              ? r
              : "md5" === t
              ? i
              : e;
          })(t),
          f = "sha512" === t || "sha384" === t ? 128 : 64;
        e.length > f ? (e = s(e)) : e.length < f && (e = a.concat([e, u], f));
        for (
          var h = a.allocUnsafe(f + d[t]), c = a.allocUnsafe(f + d[t]), l = 0;
          l < f;
          l++
        )
          (h[l] = 54 ^ e[l]), (c[l] = 92 ^ e[l]);
        var p = a.allocUnsafe(f + r + 4);
        h.copy(p, 0, 0, f),
          (this.ipad1 = p),
          (this.ipad2 = h),
          (this.opad = c),
          (this.alg = t),
          (this.blocksize = f),
          (this.hash = s),
          (this.size = d[t]);
      }
      (c.prototype.run = function (t, e) {
        return (
          t.copy(e, this.blocksize),
          this.hash(e).copy(this.opad, this.blocksize),
          this.hash(this.opad)
        );
      }),
        (t.exports = function (t, e, r, i, n) {
          s(r, i);
          var o = new c(
              (n = n || "sha1"),
              (t = h(t, f, "Password")),
              (e = h(e, f, "Salt")).length
            ),
            u = a.allocUnsafe(i),
            l = a.allocUnsafe(e.length + 4);
          e.copy(l, 0, 0, e.length);
          for (var p = 0, b = d[n], m = Math.ceil(i / b), g = 1; g <= m; g++) {
            l.writeUInt32BE(g, e.length);
            for (var y = o.run(l, o.ipad1), v = y, w = 1; w < r; w++) {
              v = o.run(v, o.ipad2);
              for (var _ = 0; _ < b; _++) y[_] ^= v[_];
            }
            y.copy(u, p), (p += b);
          }
          return u;
        });
    },
    653819: function (t, e, r) {
      var i = r(327172).Buffer;
      t.exports = function (t, e, r) {
        if (i.isBuffer(t)) return t;
        if ("string" === typeof t) return i.from(t, e);
        if (ArrayBuffer.isView(t)) return i.from(t.buffer);
        throw new TypeError(
          r + " must be a string, a Buffer, a typed array or a DataView"
        );
      };
    },
    879639: function (t, e, r) {
      (e.publicEncrypt = r(589881)),
        (e.privateDecrypt = r(42619)),
        (e.privateEncrypt = function (t, r) {
          return e.publicEncrypt(t, r, !0);
        }),
        (e.publicDecrypt = function (t, r) {
          return e.privateDecrypt(t, r, !0);
        });
    },
    451697: function (t, e, r) {
      var i = r(657266),
        n = r(327172).Buffer;
      function o(t) {
        var e = n.allocUnsafe(4);
        return e.writeUInt32BE(t, 0), e;
      }
      t.exports = function (t, e) {
        for (var r, a = n.alloc(0), s = 0; a.length < e; )
          (r = o(s++)),
            (a = n.concat([a, i("sha1").update(t).update(r).digest()]));
        return a.slice(0, e);
      };
    },
    852497: function (t, e, r) {
      var i = r(830816).Buffer,
        n = r(763785),
        o = r(952830);
      function a(t, e) {
        var r = (function (t) {
            var e = s(t);
            return {
              blinder: e
                .toRed(n.mont(t.modulus))
                .redPow(new n(t.publicExponent))
                .fromRed(),
              unblinder: e.invm(t.modulus),
            };
          })(e),
          o = e.modulus.byteLength(),
          a = (n.mont(e.modulus), new n(t).mul(r.blinder).umod(e.modulus)),
          f = a.toRed(n.mont(e.prime1)),
          h = a.toRed(n.mont(e.prime2)),
          u = e.coefficient,
          d = e.prime1,
          c = e.prime2,
          l = f.redPow(e.exponent1),
          p = h.redPow(e.exponent2);
        (l = l.fromRed()), (p = p.fromRed());
        var b = l.isub(p).imul(u).umod(d);
        return (
          b.imul(c),
          p.iadd(b),
          new i(p.imul(r.unblinder).umod(e.modulus).toArray(!1, o))
        );
      }
      function s(t) {
        for (
          var e = t.modulus.byteLength(), r = new n(o(e));
          r.cmp(t.modulus) >= 0 || !r.umod(t.prime1) || !r.umod(t.prime2);

        )
          r = new n(o(e));
        return r;
      }
      (t.exports = a), (a.getr = s);
    },
    42619: function (t, e, r) {
      var i = r(671463),
        n = r(451697),
        o = r(506107),
        a = r(763785),
        s = r(852497),
        f = r(657266),
        h = r(364608),
        u = r(327172).Buffer;
      t.exports = function (t, e, r) {
        var d;
        d = t.padding ? t.padding : r ? 1 : 4;
        var c,
          l = i(t),
          p = l.modulus.byteLength();
        if (e.length > p || new a(e).cmp(l.modulus) >= 0)
          throw new Error("decryption error");
        c = r ? h(new a(e), l) : s(e, l);
        var b = u.alloc(p - c.length);
        if (((c = u.concat([b, c], p)), 4 === d))
          return (function (t, e) {
            var r = t.modulus.byteLength(),
              i = f("sha1").update(u.alloc(0)).digest(),
              a = i.length;
            if (0 !== e[0]) throw new Error("decryption error");
            var s = e.slice(1, a + 1),
              h = e.slice(a + 1),
              d = o(s, n(h, a)),
              c = o(h, n(d, r - a - 1));
            if (
              (function (t, e) {
                (t = u.from(t)), (e = u.from(e));
                var r = 0,
                  i = t.length;
                t.length !== e.length &&
                  (r++, (i = Math.min(t.length, e.length)));
                var n = -1;
                for (; ++n < i; ) r += t[n] ^ e[n];
                return r;
              })(i, c.slice(0, a))
            )
              throw new Error("decryption error");
            var l = a;
            for (; 0 === c[l]; ) l++;
            if (1 !== c[l++]) throw new Error("decryption error");
            return c.slice(l);
          })(l, c);
        if (1 === d)
          return (function (t, e, r) {
            var i = e.slice(0, 2),
              n = 2,
              o = 0;
            for (; 0 !== e[n++]; )
              if (n >= e.length) {
                o++;
                break;
              }
            var a = e.slice(2, n - 1);
            (("0002" !== i.toString("hex") && !r) ||
              ("0001" !== i.toString("hex") && r)) &&
              o++;
            a.length < 8 && o++;
            if (o) throw new Error("decryption error");
            return e.slice(n);
          })(0, c, r);
        if (3 === d) return c;
        throw new Error("unknown padding");
      };
    },
    589881: function (t, e, r) {
      var i = r(671463),
        n = r(952830),
        o = r(657266),
        a = r(451697),
        s = r(506107),
        f = r(763785),
        h = r(364608),
        u = r(852497),
        d = r(327172).Buffer;
      t.exports = function (t, e, r) {
        var c;
        c = t.padding ? t.padding : r ? 1 : 4;
        var l,
          p = i(t);
        if (4 === c)
          l = (function (t, e) {
            var r = t.modulus.byteLength(),
              i = e.length,
              h = o("sha1").update(d.alloc(0)).digest(),
              u = h.length,
              c = 2 * u;
            if (i > r - c - 2) throw new Error("message too long");
            var l = d.alloc(r - i - c - 2),
              p = r - u - 1,
              b = n(u),
              m = s(d.concat([h, l, d.alloc(1, 1), e], p), a(b, p)),
              g = s(b, a(m, u));
            return new f(d.concat([d.alloc(1), g, m], r));
          })(p, e);
        else if (1 === c)
          l = (function (t, e, r) {
            var i,
              o = e.length,
              a = t.modulus.byteLength();
            if (o > a - 11) throw new Error("message too long");
            i = r
              ? d.alloc(a - o - 3, 255)
              : (function (t) {
                  var e,
                    r = d.allocUnsafe(t),
                    i = 0,
                    o = n(2 * t),
                    a = 0;
                  for (; i < t; )
                    a === o.length && ((o = n(2 * t)), (a = 0)),
                      (e = o[a++]) && (r[i++] = e);
                  return r;
                })(a - o - 3);
            return new f(
              d.concat([d.from([0, r ? 1 : 2]), i, d.alloc(1), e], a)
            );
          })(p, e, r);
        else {
          if (3 !== c) throw new Error("unknown padding");
          if ((l = new f(e)).cmp(p.modulus) >= 0)
            throw new Error("data too long for modulus");
        }
        return r ? u(l, p) : h(l, p);
      };
    },
    364608: function (t, e, r) {
      var i = r(763785),
        n = r(327172).Buffer;
      t.exports = function (t, e) {
        return n.from(
          t
            .toRed(i.mont(e.modulus))
            .redPow(new i(e.publicExponent))
            .fromRed()
            .toArray()
        );
      };
    },
    506107: function (t) {
      t.exports = function (t, e) {
        for (var r = t.length, i = -1; ++i < r; ) t[i] ^= e[i];
        return t;
      };
    },
    952830: function (t, e, r) {
      "use strict";
      var i = r(127061),
        n = 65536,
        o = 4294967295;
      var a = r(327172).Buffer,
        s = r.g.crypto || r.g.msCrypto;
      s && s.getRandomValues
        ? (t.exports = function (t, e) {
            if (t > o) throw new RangeError("requested too many random bytes");
            var r = a.allocUnsafe(t);
            if (t > 0)
              if (t > n)
                for (var f = 0; f < t; f += n)
                  s.getRandomValues(r.slice(f, f + n));
              else s.getRandomValues(r);
            if ("function" === typeof e)
              return i.nextTick(function () {
                e(null, r);
              });
            return r;
          })
        : (t.exports = function () {
            throw new Error(
              "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11"
            );
          });
    },
    568519: function (t, e, r) {
      "use strict";
      var i = r(127061);
      function n() {
        throw new Error(
          "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11"
        );
      }
      var o = r(327172),
        a = (r(952830), o.Buffer),
        s = o.kMaxLength,
        f = r.g.crypto || r.g.msCrypto,
        h = Math.pow(2, 32) - 1;
      function u(t, e) {
        if ("number" !== typeof t || t !== t)
          throw new TypeError("offset must be a number");
        if (t > h || t < 0) throw new TypeError("offset must be a uint32");
        if (t > s || t > e) throw new RangeError("offset out of range");
      }
      function d(t, e, r) {
        if ("number" !== typeof t || t !== t)
          throw new TypeError("size must be a number");
        if (t > h || t < 0) throw new TypeError("size must be a uint32");
        if (t + e > r || t > s) throw new RangeError("buffer too small");
      }
      function c(t, e, r, n) {
        var o = t.buffer,
          a = new Uint8Array(o, e, r);
        return (
          f.getRandomValues(a),
          n
            ? void i.nextTick(function () {
                n(null, t);
              })
            : t
        );
      }
      f && f.getRandomValues
        ? ((e.randomFill = function (t, e, i, n) {
            if (!a.isBuffer(t) && !(t instanceof r.g.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              );
            if ("function" === typeof e) (n = e), (e = 0), (i = t.length);
            else if ("function" === typeof i) (n = i), (i = t.length - e);
            else if ("function" !== typeof n)
              throw new TypeError('"cb" argument must be a function');
            return u(e, t.length), d(i, e, t.length), c(t, e, i, n);
          }),
          (e.randomFillSync = function (t, e, i) {
            "undefined" === typeof e && (e = 0);
            if (!a.isBuffer(t) && !(t instanceof r.g.Uint8Array))
              throw new TypeError(
                '"buf" argument must be a Buffer or Uint8Array'
              );
            u(e, t.length), void 0 === i && (i = t.length - e);
            return d(i, e, t.length), c(t, e, i);
          }))
        : ((e.randomFill = n), (e.randomFillSync = n));
    },
    796938: function (t) {
      "use strict";
      var e = {};
      function r(t, r, i) {
        i || (i = Error);
        var n = (function (t) {
          var e, i;
          function n(e, i, n) {
            return (
              t.call(
                this,
                (function (t, e, i) {
                  return "string" === typeof r ? r : r(t, e, i);
                })(e, i, n)
              ) || this
            );
          }
          return (
            (i = t),
            ((e = n).prototype = Object.create(i.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = i),
            n
          );
        })(i);
        (n.prototype.name = i.name), (n.prototype.code = t), (e[t] = n);
      }
      function i(t, e) {
        if (Array.isArray(t)) {
          var r = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            r > 2
              ? "one of "
                  .concat(e, " ")
                  .concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
              : 2 === r
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      r(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        r(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, r) {
            var n, o, a, s;
            if (
              ("string" === typeof e &&
              ((o = "not "), e.substr(!a || a < 0 ? 0 : +a, o.length) === o)
                ? ((n = "must not be"), (e = e.replace(/^not /, "")))
                : (n = "must be"),
              (function (t, e, r) {
                return (
                  (void 0 === r || r > t.length) && (r = t.length),
                  t.substring(r - e.length, r) === e
                );
              })(t, " argument"))
            )
              s = "The ".concat(t, " ").concat(n, " ").concat(i(e, "type"));
            else {
              var f = (function (t, e, r) {
                return (
                  "number" !== typeof r && (r = 0),
                  !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                );
              })(t, ".")
                ? "property"
                : "argument";
              s = 'The "'
                .concat(t, '" ')
                .concat(f, " ")
                .concat(n, " ")
                .concat(i(e, "type"));
            }
            return (s += ". Received type ".concat(typeof r));
          },
          TypeError
        ),
        r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        r("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        r("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        r(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        r(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        r(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (t.exports.q = e);
    },
    524439: function (t, e, r) {
      "use strict";
      var i = r(127061),
        n =
          Object.keys ||
          function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e;
          };
      t.exports = u;
      var o = r(335327),
        a = r(654567);
      r(270087)(u, o);
      for (var s = n(a.prototype), f = 0; f < s.length; f++) {
        var h = s[f];
        u.prototype[h] || (u.prototype[h] = a.prototype[h]);
      }
      function u(t) {
        if (!(this instanceof u)) return new u(t);
        o.call(this, t),
          a.call(this, t),
          (this.allowHalfOpen = !0),
          t &&
            (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", d)));
      }
      function d() {
        this._writableState.ended || i.nextTick(c, this);
      }
      function c(t) {
        t.end();
      }
      Object.defineProperty(u.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(u.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(u.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(u.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t),
              (this._writableState.destroyed = t));
          },
        });
    },
    83754: function (t, e, r) {
      "use strict";
      t.exports = n;
      var i = r(112175);
      function n(t) {
        if (!(this instanceof n)) return new n(t);
        i.call(this, t);
      }
      r(270087)(n, i),
        (n.prototype._transform = function (t, e, r) {
          r(null, t);
        });
    },
    335327: function (t, e, r) {
      "use strict";
      var i,
        n = r(127061);
      (t.exports = k), (k.ReadableState = E);
      r(850343).EventEmitter;
      var o = function (t, e) {
          return t.listeners(e).length;
        },
        a = r(546052),
        s = r(830816).Buffer,
        f = r.g.Uint8Array || function () {};
      var h,
        u = r(171632);
      h = u && u.debuglog ? u.debuglog("stream") : function () {};
      var d,
        c,
        l,
        p = r(957712),
        b = r(327640),
        m = r(525985).getHighWaterMark,
        g = r(796938).q,
        y = g.ERR_INVALID_ARG_TYPE,
        v = g.ERR_STREAM_PUSH_AFTER_EOF,
        w = g.ERR_METHOD_NOT_IMPLEMENTED,
        _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      r(270087)(k, a);
      var M = b.errorOrDestroy,
        S = ["error", "close", "destroy", "pause", "resume"];
      function E(t, e, n) {
        (i = i || r(524439)),
          (t = t || {}),
          "boolean" !== typeof n && (n = e instanceof i),
          (this.objectMode = !!t.objectMode),
          n && (this.objectMode = this.objectMode || !!t.readableObjectMode),
          (this.highWaterMark = m(this, t, "readableHighWaterMark", n)),
          (this.buffer = new p()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          t.encoding &&
            (d || (d = r(234361).s),
            (this.decoder = new d(t.encoding)),
            (this.encoding = t.encoding));
      }
      function k(t) {
        if (((i = i || r(524439)), !(this instanceof k))) return new k(t);
        var e = this instanceof i;
        (this._readableState = new E(t, this, e)),
          (this.readable = !0),
          t &&
            ("function" === typeof t.read && (this._read = t.read),
            "function" === typeof t.destroy && (this._destroy = t.destroy)),
          a.call(this);
      }
      function A(t, e, r, i, n) {
        h("readableAddChunk", e);
        var o,
          a = t._readableState;
        if (null === e)
          (a.reading = !1),
            (function (t, e) {
              if ((h("onEofChunk"), e.ended)) return;
              if (e.decoder) {
                var r = e.decoder.end();
                r &&
                  r.length &&
                  (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
              }
              (e.ended = !0),
                e.sync
                  ? I(t)
                  : ((e.needReadable = !1),
                    e.emittedReadable || ((e.emittedReadable = !0), T(t)));
            })(t, a);
        else if (
          (n ||
            (o = (function (t, e) {
              var r;
              (i = e),
                s.isBuffer(i) ||
                  i instanceof f ||
                  "string" === typeof e ||
                  void 0 === e ||
                  t.objectMode ||
                  (r = new y("chunk", ["string", "Buffer", "Uint8Array"], e));
              var i;
              return r;
            })(a, e)),
          o)
        )
          M(t, o);
        else if (a.objectMode || (e && e.length > 0))
          if (
            ("string" === typeof e ||
              a.objectMode ||
              Object.getPrototypeOf(e) === s.prototype ||
              (e = (function (t) {
                return s.from(t);
              })(e)),
            i)
          )
            a.endEmitted ? M(t, new _()) : R(t, a, e, !0);
          else if (a.ended) M(t, new v());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !r
                ? ((e = a.decoder.write(e)),
                  a.objectMode || 0 !== e.length ? R(t, a, e, !1) : P(t, a))
                : R(t, a, e, !1);
          }
        else i || ((a.reading = !1), P(t, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function R(t, e, r, i) {
        e.flowing && 0 === e.length && !e.sync
          ? ((e.awaitDrain = 0), t.emit("data", r))
          : ((e.length += e.objectMode ? 1 : r.length),
            i ? e.buffer.unshift(r) : e.buffer.push(r),
            e.needReadable && I(t)),
          P(t, e);
      }
      Object.defineProperty(k.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (t) {
          this._readableState && (this._readableState.destroyed = t);
        },
      }),
        (k.prototype.destroy = b.destroy),
        (k.prototype._undestroy = b.undestroy),
        (k.prototype._destroy = function (t, e) {
          e(t);
        }),
        (k.prototype.push = function (t, e) {
          var r,
            i = this._readableState;
          return (
            i.objectMode
              ? (r = !0)
              : "string" === typeof t &&
                ((e = e || i.defaultEncoding) !== i.encoding &&
                  ((t = s.from(t, e)), (e = "")),
                (r = !0)),
            A(this, t, e, !1, r)
          );
        }),
        (k.prototype.unshift = function (t) {
          return A(this, t, null, !0, !1);
        }),
        (k.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (k.prototype.setEncoding = function (t) {
          d || (d = r(234361).s);
          var e = new d(t);
          (this._readableState.decoder = e),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var i = this._readableState.buffer.head, n = ""; null !== i; )
            (n += e.write(i.data)), (i = i.next);
          return (
            this._readableState.buffer.clear(),
            "" !== n && this._readableState.buffer.push(n),
            (this._readableState.length = n.length),
            this
          );
        });
      var x = 1073741824;
      function B(t, e) {
        return t <= 0 || (0 === e.length && e.ended)
          ? 0
          : e.objectMode
          ? 1
          : t !== t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark &&
              (e.highWaterMark = (function (t) {
                return (
                  t >= x
                    ? (t = x)
                    : (t--,
                      (t |= t >>> 1),
                      (t |= t >>> 2),
                      (t |= t >>> 4),
                      (t |= t >>> 8),
                      (t |= t >>> 16),
                      t++),
                  t
                );
              })(t)),
            t <= e.length
              ? t
              : e.ended
              ? e.length
              : ((e.needReadable = !0), 0));
      }
      function I(t) {
        var e = t._readableState;
        h("emitReadable", e.needReadable, e.emittedReadable),
          (e.needReadable = !1),
          e.emittedReadable ||
            (h("emitReadable", e.flowing),
            (e.emittedReadable = !0),
            n.nextTick(T, t));
      }
      function T(t) {
        var e = t._readableState;
        h("emitReadable_", e.destroyed, e.length, e.ended),
          e.destroyed ||
            (!e.length && !e.ended) ||
            (t.emit("readable"), (e.emittedReadable = !1)),
          (e.needReadable =
            !e.flowing && !e.ended && e.length <= e.highWaterMark),
          N(t);
      }
      function P(t, e) {
        e.readingMore || ((e.readingMore = !0), n.nextTick(j, t, e));
      }
      function j(t, e) {
        for (
          ;
          !e.reading &&
          !e.ended &&
          (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

        ) {
          var r = e.length;
          if ((h("maybeReadMore read 0"), t.read(0), r === e.length)) break;
        }
        e.readingMore = !1;
      }
      function O(t) {
        var e = t._readableState;
        (e.readableListening = t.listenerCount("readable") > 0),
          e.resumeScheduled && !e.paused
            ? (e.flowing = !0)
            : t.listenerCount("data") > 0 && t.resume();
      }
      function C(t) {
        h("readable nexttick read 0"), t.read(0);
      }
      function L(t, e) {
        h("resume", e.reading),
          e.reading || t.read(0),
          (e.resumeScheduled = !1),
          t.emit("resume"),
          N(t),
          e.flowing && !e.reading && t.read(0);
      }
      function N(t) {
        var e = t._readableState;
        for (h("flow", e.flowing); e.flowing && null !== t.read(); );
      }
      function D(t, e) {
        return 0 === e.length
          ? null
          : (e.objectMode
              ? (r = e.buffer.shift())
              : !t || t >= e.length
              ? ((r = e.decoder
                  ? e.buffer.join("")
                  : 1 === e.buffer.length
                  ? e.buffer.first()
                  : e.buffer.concat(e.length)),
                e.buffer.clear())
              : (r = e.buffer.consume(t, e.decoder)),
            r);
        var r;
      }
      function q(t) {
        var e = t._readableState;
        h("endReadable", e.endEmitted),
          e.endEmitted || ((e.ended = !0), n.nextTick(U, e, t));
      }
      function U(t, e) {
        if (
          (h("endReadableNT", t.endEmitted, t.length),
          !t.endEmitted &&
            0 === t.length &&
            ((t.endEmitted = !0),
            (e.readable = !1),
            e.emit("end"),
            t.autoDestroy))
        ) {
          var r = e._writableState;
          (!r || (r.autoDestroy && r.finished)) && e.destroy();
        }
      }
      function z(t, e) {
        for (var r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
        return -1;
      }
      (k.prototype.read = function (t) {
        h("read", t), (t = parseInt(t, 10));
        var e = this._readableState,
          r = t;
        if (
          (0 !== t && (e.emittedReadable = !1),
          0 === t &&
            e.needReadable &&
            ((0 !== e.highWaterMark
              ? e.length >= e.highWaterMark
              : e.length > 0) ||
              e.ended))
        )
          return (
            h("read: emitReadable", e.length, e.ended),
            0 === e.length && e.ended ? q(this) : I(this),
            null
          );
        if (0 === (t = B(t, e)) && e.ended)
          return 0 === e.length && q(this), null;
        var i,
          n = e.needReadable;
        return (
          h("need readable", n),
          (0 === e.length || e.length - t < e.highWaterMark) &&
            h("length less than watermark", (n = !0)),
          e.ended || e.reading
            ? h("reading or ended", (n = !1))
            : n &&
              (h("do read"),
              (e.reading = !0),
              (e.sync = !0),
              0 === e.length && (e.needReadable = !0),
              this._read(e.highWaterMark),
              (e.sync = !1),
              e.reading || (t = B(r, e))),
          null === (i = t > 0 ? D(t, e) : null)
            ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
            : ((e.length -= t), (e.awaitDrain = 0)),
          0 === e.length &&
            (e.ended || (e.needReadable = !0), r !== t && e.ended && q(this)),
          null !== i && this.emit("data", i),
          i
        );
      }),
        (k.prototype._read = function (t) {
          M(this, new w("_read()"));
        }),
        (k.prototype.pipe = function (t, e) {
          var r = this,
            i = this._readableState;
          switch (i.pipesCount) {
            case 0:
              i.pipes = t;
              break;
            case 1:
              i.pipes = [i.pipes, t];
              break;
            default:
              i.pipes.push(t);
          }
          (i.pipesCount += 1), h("pipe count=%d opts=%j", i.pipesCount, e);
          var a =
            (!e || !1 !== e.end) && t !== n.stdout && t !== n.stderr ? f : m;
          function s(e, n) {
            h("onunpipe"),
              e === r &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                h("cleanup"),
                t.removeListener("close", p),
                t.removeListener("finish", b),
                t.removeListener("drain", u),
                t.removeListener("error", l),
                t.removeListener("unpipe", s),
                r.removeListener("end", f),
                r.removeListener("end", m),
                r.removeListener("data", c),
                (d = !0),
                !i.awaitDrain ||
                  (t._writableState && !t._writableState.needDrain) ||
                  u());
          }
          function f() {
            h("onend"), t.end();
          }
          i.endEmitted ? n.nextTick(a) : r.once("end", a), t.on("unpipe", s);
          var u = (function (t) {
            return function () {
              var e = t._readableState;
              h("pipeOnDrain", e.awaitDrain),
                e.awaitDrain && e.awaitDrain--,
                0 === e.awaitDrain && o(t, "data") && ((e.flowing = !0), N(t));
            };
          })(r);
          t.on("drain", u);
          var d = !1;
          function c(e) {
            h("ondata");
            var n = t.write(e);
            h("dest.write", n),
              !1 === n &&
                (((1 === i.pipesCount && i.pipes === t) ||
                  (i.pipesCount > 1 && -1 !== z(i.pipes, t))) &&
                  !d &&
                  (h("false write response, pause", i.awaitDrain),
                  i.awaitDrain++),
                r.pause());
          }
          function l(e) {
            h("onerror", e),
              m(),
              t.removeListener("error", l),
              0 === o(t, "error") && M(t, e);
          }
          function p() {
            t.removeListener("finish", b), m();
          }
          function b() {
            h("onfinish"), t.removeListener("close", p), m();
          }
          function m() {
            h("unpipe"), r.unpipe(t);
          }
          return (
            r.on("data", c),
            (function (t, e, r) {
              if ("function" === typeof t.prependListener)
                return t.prependListener(e, r);
              t._events && t._events[e]
                ? Array.isArray(t._events[e])
                  ? t._events[e].unshift(r)
                  : (t._events[e] = [r, t._events[e]])
                : t.on(e, r);
            })(t, "error", l),
            t.once("close", p),
            t.once("finish", b),
            t.emit("pipe", r),
            i.flowing || (h("pipe resume"), r.resume()),
            t
          );
        }),
        (k.prototype.unpipe = function (t) {
          var e = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === e.pipesCount) return this;
          if (1 === e.pipesCount)
            return (
              (t && t !== e.pipes) ||
                (t || (t = e.pipes),
                (e.pipes = null),
                (e.pipesCount = 0),
                (e.flowing = !1),
                t && t.emit("unpipe", this, r)),
              this
            );
          if (!t) {
            var i = e.pipes,
              n = e.pipesCount;
            (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
            for (var o = 0; o < n; o++)
              i[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = z(e.pipes, t);
          return (
            -1 === a ||
              (e.pipes.splice(a, 1),
              (e.pipesCount -= 1),
              1 === e.pipesCount && (e.pipes = e.pipes[0]),
              t.emit("unpipe", this, r)),
            this
          );
        }),
        (k.prototype.on = function (t, e) {
          var r = a.prototype.on.call(this, t, e),
            i = this._readableState;
          return (
            "data" === t
              ? ((i.readableListening = this.listenerCount("readable") > 0),
                !1 !== i.flowing && this.resume())
              : "readable" === t &&
                (i.endEmitted ||
                  i.readableListening ||
                  ((i.readableListening = i.needReadable = !0),
                  (i.flowing = !1),
                  (i.emittedReadable = !1),
                  h("on readable", i.length, i.reading),
                  i.length ? I(this) : i.reading || n.nextTick(C, this))),
            r
          );
        }),
        (k.prototype.addListener = k.prototype.on),
        (k.prototype.removeListener = function (t, e) {
          var r = a.prototype.removeListener.call(this, t, e);
          return "readable" === t && n.nextTick(O, this), r;
        }),
        (k.prototype.removeAllListeners = function (t) {
          var e = a.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== t && void 0 !== t) || n.nextTick(O, this), e;
        }),
        (k.prototype.resume = function () {
          var t = this._readableState;
          return (
            t.flowing ||
              (h("resume"),
              (t.flowing = !t.readableListening),
              (function (t, e) {
                e.resumeScheduled ||
                  ((e.resumeScheduled = !0), n.nextTick(L, t, e));
              })(this, t)),
            (t.paused = !1),
            this
          );
        }),
        (k.prototype.pause = function () {
          return (
            h("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (h("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (k.prototype.wrap = function (t) {
          var e = this,
            r = this._readableState,
            i = !1;
          for (var n in (t.on("end", function () {
            if ((h("wrapped end"), r.decoder && !r.ended)) {
              var t = r.decoder.end();
              t && t.length && e.push(t);
            }
            e.push(null);
          }),
          t.on("data", function (n) {
            (h("wrapped data"),
            r.decoder && (n = r.decoder.write(n)),
            !r.objectMode || (null !== n && void 0 !== n)) &&
              (r.objectMode || (n && n.length)) &&
              (e.push(n) || ((i = !0), t.pause()));
          }),
          t))
            void 0 === this[n] &&
              "function" === typeof t[n] &&
              (this[n] = (function (e) {
                return function () {
                  return t[e].apply(t, arguments);
                };
              })(n));
          for (var o = 0; o < S.length; o++)
            t.on(S[o], this.emit.bind(this, S[o]));
          return (
            (this._read = function (e) {
              h("wrapped _read", e), i && ((i = !1), t.resume());
            }),
            this
          );
        }),
        "function" === typeof Symbol &&
          (k.prototype[Symbol.asyncIterator] = function () {
            return void 0 === c && (c = r(764157)), c(this);
          }),
        Object.defineProperty(k.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(k.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(k.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (t) {
            this._readableState && (this._readableState.flowing = t);
          },
        }),
        (k._fromList = D),
        Object.defineProperty(k.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" === typeof Symbol &&
          (k.from = function (t, e) {
            return void 0 === l && (l = r(295800)), l(k, t, e);
          });
    },
    112175: function (t, e, r) {
      "use strict";
      t.exports = u;
      var i = r(796938).q,
        n = i.ERR_METHOD_NOT_IMPLEMENTED,
        o = i.ERR_MULTIPLE_CALLBACK,
        a = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = i.ERR_TRANSFORM_WITH_LENGTH_0,
        f = r(524439);
      function h(t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var i = r.writecb;
        if (null === i) return this.emit("error", new o());
        (r.writechunk = null),
          (r.writecb = null),
          null != e && this.push(e),
          i(t);
        var n = this._readableState;
        (n.reading = !1),
          (n.needReadable || n.length < n.highWaterMark) &&
            this._read(n.highWaterMark);
      }
      function u(t) {
        if (!(this instanceof u)) return new u(t);
        f.call(this, t),
          (this._transformState = {
            afterTransform: h.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" === typeof t.transform &&
              (this._transform = t.transform),
            "function" === typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", d);
      }
      function d() {
        var t = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? c(this, null, null)
          : this._flush(function (e, r) {
              c(t, e, r);
            });
      }
      function c(t, e, r) {
        if (e) return t.emit("error", e);
        if ((null != r && t.push(r), t._writableState.length)) throw new s();
        if (t._transformState.transforming) throw new a();
        return t.push(null);
      }
      r(270087)(u, f),
        (u.prototype.push = function (t, e) {
          return (
            (this._transformState.needTransform = !1),
            f.prototype.push.call(this, t, e)
          );
        }),
        (u.prototype._transform = function (t, e, r) {
          r(new n("_transform()"));
        }),
        (u.prototype._write = function (t, e, r) {
          var i = this._transformState;
          if (
            ((i.writecb = r),
            (i.writechunk = t),
            (i.writeencoding = e),
            !i.transforming)
          ) {
            var n = this._readableState;
            (i.needTransform || n.needReadable || n.length < n.highWaterMark) &&
              this._read(n.highWaterMark);
          }
        }),
        (u.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0),
              this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (u.prototype._destroy = function (t, e) {
          f.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    },
    654567: function (t, e, r) {
      "use strict";
      var i,
        n = r(127061);
      function o(t) {
        var e = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (t, e, r) {
              var i = t.entry;
              t.entry = null;
              for (; i; ) {
                var n = i.callback;
                e.pendingcb--, n(r), (i = i.next);
              }
              e.corkedRequestsFree.next = t;
            })(e, t);
          });
      }
      (t.exports = k), (k.WritableState = E);
      var a = { deprecate: r(317451) },
        s = r(546052),
        f = r(830816).Buffer,
        h = r.g.Uint8Array || function () {};
      var u,
        d = r(327640),
        c = r(525985).getHighWaterMark,
        l = r(796938).q,
        p = l.ERR_INVALID_ARG_TYPE,
        b = l.ERR_METHOD_NOT_IMPLEMENTED,
        m = l.ERR_MULTIPLE_CALLBACK,
        g = l.ERR_STREAM_CANNOT_PIPE,
        y = l.ERR_STREAM_DESTROYED,
        v = l.ERR_STREAM_NULL_VALUES,
        w = l.ERR_STREAM_WRITE_AFTER_END,
        _ = l.ERR_UNKNOWN_ENCODING,
        M = d.errorOrDestroy;
      function S() {}
      function E(t, e, a) {
        (i = i || r(524439)),
          (t = t || {}),
          "boolean" !== typeof a && (a = e instanceof i),
          (this.objectMode = !!t.objectMode),
          a && (this.objectMode = this.objectMode || !!t.writableObjectMode),
          (this.highWaterMark = c(this, t, "writableHighWaterMark", a)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === t.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (t) {
            !(function (t, e) {
              var r = t._writableState,
                i = r.sync,
                o = r.writecb;
              if ("function" !== typeof o) throw new m();
              if (
                ((function (t) {
                  (t.writing = !1),
                    (t.writecb = null),
                    (t.length -= t.writelen),
                    (t.writelen = 0);
                })(r),
                e)
              )
                !(function (t, e, r, i, o) {
                  --e.pendingcb,
                    r
                      ? (n.nextTick(o, i),
                        n.nextTick(T, t, e),
                        (t._writableState.errorEmitted = !0),
                        M(t, i))
                      : (o(i),
                        (t._writableState.errorEmitted = !0),
                        M(t, i),
                        T(t, e));
                })(t, r, i, e, o);
              else {
                var a = B(r) || t.destroyed;
                a ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  x(t, r),
                  i ? n.nextTick(R, t, r, a, o) : R(t, r, a, o);
              }
            })(e, t);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new o(this));
      }
      function k(t) {
        var e = this instanceof (i = i || r(524439));
        if (!e && !u.call(k, this)) return new k(t);
        (this._writableState = new E(t, this, e)),
          (this.writable = !0),
          t &&
            ("function" === typeof t.write && (this._write = t.write),
            "function" === typeof t.writev && (this._writev = t.writev),
            "function" === typeof t.destroy && (this._destroy = t.destroy),
            "function" === typeof t.final && (this._final = t.final)),
          s.call(this);
      }
      function A(t, e, r, i, n, o, a) {
        (e.writelen = i),
          (e.writecb = a),
          (e.writing = !0),
          (e.sync = !0),
          e.destroyed
            ? e.onwrite(new y("write"))
            : r
            ? t._writev(n, e.onwrite)
            : t._write(n, o, e.onwrite),
          (e.sync = !1);
      }
      function R(t, e, r, i) {
        r ||
          (function (t, e) {
            0 === e.length &&
              e.needDrain &&
              ((e.needDrain = !1), t.emit("drain"));
          })(t, e),
          e.pendingcb--,
          i(),
          T(t, e);
      }
      function x(t, e) {
        e.bufferProcessing = !0;
        var r = e.bufferedRequest;
        if (t._writev && r && r.next) {
          var i = e.bufferedRequestCount,
            n = new Array(i),
            a = e.corkedRequestsFree;
          a.entry = r;
          for (var s = 0, f = !0; r; )
            (n[s] = r), r.isBuf || (f = !1), (r = r.next), (s += 1);
          (n.allBuffers = f),
            A(t, e, !0, e.length, n, "", a.finish),
            e.pendingcb++,
            (e.lastBufferedRequest = null),
            a.next
              ? ((e.corkedRequestsFree = a.next), (a.next = null))
              : (e.corkedRequestsFree = new o(e)),
            (e.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var h = r.chunk,
              u = r.encoding,
              d = r.callback;
            if (
              (A(t, e, !1, e.objectMode ? 1 : h.length, h, u, d),
              (r = r.next),
              e.bufferedRequestCount--,
              e.writing)
            )
              break;
          }
          null === r && (e.lastBufferedRequest = null);
        }
        (e.bufferedRequest = r), (e.bufferProcessing = !1);
      }
      function B(t) {
        return (
          t.ending &&
          0 === t.length &&
          null === t.bufferedRequest &&
          !t.finished &&
          !t.writing
        );
      }
      function I(t, e) {
        t._final(function (r) {
          e.pendingcb--,
            r && M(t, r),
            (e.prefinished = !0),
            t.emit("prefinish"),
            T(t, e);
        });
      }
      function T(t, e) {
        var r = B(e);
        if (
          r &&
          ((function (t, e) {
            e.prefinished ||
              e.finalCalled ||
              ("function" !== typeof t._final || e.destroyed
                ? ((e.prefinished = !0), t.emit("prefinish"))
                : (e.pendingcb++, (e.finalCalled = !0), n.nextTick(I, t, e)));
          })(t, e),
          0 === e.pendingcb &&
            ((e.finished = !0), t.emit("finish"), e.autoDestroy))
        ) {
          var i = t._readableState;
          (!i || (i.autoDestroy && i.endEmitted)) && t.destroy();
        }
        return r;
      }
      r(270087)(k, s),
        (E.prototype.getBuffer = function () {
          for (var t = this.bufferedRequest, e = []; t; )
            e.push(t), (t = t.next);
          return e;
        }),
        (function () {
          try {
            Object.defineProperty(E.prototype, "buffer", {
              get: a.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (t) {}
        })(),
        "function" === typeof Symbol &&
        Symbol.hasInstance &&
        "function" === typeof Function.prototype[Symbol.hasInstance]
          ? ((u = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(k, Symbol.hasInstance, {
              value: function (t) {
                return (
                  !!u.call(this, t) ||
                  (this === k && t && t._writableState instanceof E)
                );
              },
            }))
          : (u = function (t) {
              return t instanceof this;
            }),
        (k.prototype.pipe = function () {
          M(this, new g());
        }),
        (k.prototype.write = function (t, e, r) {
          var i,
            o = this._writableState,
            a = !1,
            s = !o.objectMode && ((i = t), f.isBuffer(i) || i instanceof h);
          return (
            s &&
              !f.isBuffer(t) &&
              (t = (function (t) {
                return f.from(t);
              })(t)),
            "function" === typeof e && ((r = e), (e = null)),
            s ? (e = "buffer") : e || (e = o.defaultEncoding),
            "function" !== typeof r && (r = S),
            o.ending
              ? (function (t, e) {
                  var r = new w();
                  M(t, r), n.nextTick(e, r);
                })(this, r)
              : (s ||
                  (function (t, e, r, i) {
                    var o;
                    return (
                      null === r
                        ? (o = new v())
                        : "string" === typeof r ||
                          e.objectMode ||
                          (o = new p("chunk", ["string", "Buffer"], r)),
                      !o || (M(t, o), n.nextTick(i, o), !1)
                    );
                  })(this, o, t, r)) &&
                (o.pendingcb++,
                (a = (function (t, e, r, i, n, o) {
                  if (!r) {
                    var a = (function (t, e, r) {
                      t.objectMode ||
                        !1 === t.decodeStrings ||
                        "string" !== typeof e ||
                        (e = f.from(e, r));
                      return e;
                    })(e, i, n);
                    i !== a && ((r = !0), (n = "buffer"), (i = a));
                  }
                  var s = e.objectMode ? 1 : i.length;
                  e.length += s;
                  var h = e.length < e.highWaterMark;
                  h || (e.needDrain = !0);
                  if (e.writing || e.corked) {
                    var u = e.lastBufferedRequest;
                    (e.lastBufferedRequest = {
                      chunk: i,
                      encoding: n,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      u
                        ? (u.next = e.lastBufferedRequest)
                        : (e.bufferedRequest = e.lastBufferedRequest),
                      (e.bufferedRequestCount += 1);
                  } else A(t, e, !1, s, i, n, o);
                  return h;
                })(this, o, s, t, e, r))),
            a
          );
        }),
        (k.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (k.prototype.uncork = function () {
          var t = this._writableState;
          t.corked &&
            (t.corked--,
            t.writing ||
              t.corked ||
              t.bufferProcessing ||
              !t.bufferedRequest ||
              x(this, t));
        }),
        (k.prototype.setDefaultEncoding = function (t) {
          if (
            ("string" === typeof t && (t = t.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((t + "").toLowerCase()) > -1
            ))
          )
            throw new _(t);
          return (this._writableState.defaultEncoding = t), this;
        }),
        Object.defineProperty(k.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(k.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (k.prototype._write = function (t, e, r) {
          r(new b("_write()"));
        }),
        (k.prototype._writev = null),
        (k.prototype.end = function (t, e, r) {
          var i = this._writableState;
          return (
            "function" === typeof t
              ? ((r = t), (t = null), (e = null))
              : "function" === typeof e && ((r = e), (e = null)),
            null !== t && void 0 !== t && this.write(t, e),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              (function (t, e, r) {
                (e.ending = !0),
                  T(t, e),
                  r && (e.finished ? n.nextTick(r) : t.once("finish", r));
                (e.ended = !0), (t.writable = !1);
              })(this, i, r),
            this
          );
        }),
        Object.defineProperty(k.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(k.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (t) {
            this._writableState && (this._writableState.destroyed = t);
          },
        }),
        (k.prototype.destroy = d.destroy),
        (k.prototype._undestroy = d.undestroy),
        (k.prototype._destroy = function (t, e) {
          e(t);
        });
    },
    764157: function (t, e, r) {
      "use strict";
      var i,
        n = r(127061);
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var a = r(185027),
        s = Symbol("lastResolve"),
        f = Symbol("lastReject"),
        h = Symbol("error"),
        u = Symbol("ended"),
        d = Symbol("lastPromise"),
        c = Symbol("handlePromise"),
        l = Symbol("stream");
      function p(t, e) {
        return { value: t, done: e };
      }
      function b(t) {
        var e = t[s];
        if (null !== e) {
          var r = t[l].read();
          null !== r &&
            ((t[d] = null), (t[s] = null), (t[f] = null), e(p(r, !1)));
        }
      }
      function m(t) {
        n.nextTick(b, t);
      }
      var g = Object.getPrototypeOf(function () {}),
        y = Object.setPrototypeOf(
          (o(
            (i = {
              get stream() {
                return this[l];
              },
              next: function () {
                var t = this,
                  e = this[h];
                if (null !== e) return Promise.reject(e);
                if (this[u]) return Promise.resolve(p(void 0, !0));
                if (this[l].destroyed)
                  return new Promise(function (e, r) {
                    n.nextTick(function () {
                      t[h] ? r(t[h]) : e(p(void 0, !0));
                    });
                  });
                var r,
                  i = this[d];
                if (i)
                  r = new Promise(
                    (function (t, e) {
                      return function (r, i) {
                        t.then(function () {
                          e[u] ? r(p(void 0, !0)) : e[c](r, i);
                        }, i);
                      };
                    })(i, this)
                  );
                else {
                  var o = this[l].read();
                  if (null !== o) return Promise.resolve(p(o, !1));
                  r = new Promise(this[c]);
                }
                return (this[d] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          o(i, "return", function () {
            var t = this;
            return new Promise(function (e, r) {
              t[l].destroy(null, function (t) {
                t ? r(t) : e(p(void 0, !0));
              });
            });
          }),
          i),
          g
        );
      t.exports = function (t) {
        var e,
          r = Object.create(
            y,
            (o((e = {}), l, { value: t, writable: !0 }),
            o(e, s, { value: null, writable: !0 }),
            o(e, f, { value: null, writable: !0 }),
            o(e, h, { value: null, writable: !0 }),
            o(e, u, { value: t._readableState.endEmitted, writable: !0 }),
            o(e, c, {
              value: function (t, e) {
                var i = r[l].read();
                i
                  ? ((r[d] = null), (r[s] = null), (r[f] = null), t(p(i, !1)))
                  : ((r[s] = t), (r[f] = e));
              },
              writable: !0,
            }),
            e)
          );
        return (
          (r[d] = null),
          a(t, function (t) {
            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
              var e = r[f];
              return (
                null !== e &&
                  ((r[d] = null), (r[s] = null), (r[f] = null), e(t)),
                void (r[h] = t)
              );
            }
            var i = r[s];
            null !== i &&
              ((r[d] = null), (r[s] = null), (r[f] = null), i(p(void 0, !0))),
              (r[u] = !0);
          }),
          t.on("readable", m.bind(null, r)),
          r
        );
      };
    },
    957712: function (t, e, r) {
      "use strict";
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, i);
        }
        return r;
      }
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function o(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      var a = r(830816).Buffer,
        s = r(450471).inspect,
        f = (s && s.custom) || "inspect";
      t.exports = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var e, r, h;
        return (
          (e = t),
          (r = [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e),
                  (this.tail = e),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e),
                  (this.head = e),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    t
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, r = "" + e.data; (e = e.next); )
                  r += t + e.data;
                return r;
              },
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return a.alloc(0);
                for (
                  var e, r, i, n = a.allocUnsafe(t >>> 0), o = this.head, s = 0;
                  o;

                )
                  (e = o.data),
                    (r = n),
                    (i = s),
                    a.prototype.copy.call(e, r, i),
                    (s += o.data.length),
                    (o = o.next);
                return n;
              },
            },
            {
              key: "consume",
              value: function (t, e) {
                var r;
                return (
                  t < this.head.data.length
                    ? ((r = this.head.data.slice(0, t)),
                      (this.head.data = this.head.data.slice(t)))
                    : (r =
                        t === this.head.data.length
                          ? this.shift()
                          : e
                          ? this._getString(t)
                          : this._getBuffer(t)),
                  r
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  r = 1,
                  i = e.data;
                for (t -= i.length; (e = e.next); ) {
                  var n = e.data,
                    o = t > n.length ? n.length : t;
                  if (
                    (o === n.length ? (i += n) : (i += n.slice(0, t)),
                    0 === (t -= o))
                  ) {
                    o === n.length
                      ? (++r,
                        e.next
                          ? (this.head = e.next)
                          : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = n.slice(o)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), i;
              },
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = a.allocUnsafe(t),
                  r = this.head,
                  i = 1;
                for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                  var n = r.data,
                    o = t > n.length ? n.length : t;
                  if ((n.copy(e, e.length - t, 0, o), 0 === (t -= o))) {
                    o === n.length
                      ? (++i,
                        r.next
                          ? (this.head = r.next)
                          : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = n.slice(o)));
                    break;
                  }
                  ++i;
                }
                return (this.length -= i), e;
              },
            },
            {
              key: f,
              value: function (t, e) {
                return s(
                  this,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {};
                      e % 2
                        ? i(Object(r), !0).forEach(function (e) {
                            n(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(r)
                          )
                        : i(Object(r)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(r, e)
                            );
                          });
                    }
                    return t;
                  })({}, e, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]),
          r && o(e.prototype, r),
          h && o(e, h),
          t
        );
      })();
    },
    327640: function (t, e, r) {
      "use strict";
      var i = r(127061);
      function n(t, e) {
        a(t, e), o(t);
      }
      function o(t) {
        (t._writableState && !t._writableState.emitClose) ||
          (t._readableState && !t._readableState.emitClose) ||
          t.emit("close");
      }
      function a(t, e) {
        t.emit("error", e);
      }
      t.exports = {
        destroy: function (t, e) {
          var r = this,
            s = this._readableState && this._readableState.destroyed,
            f = this._writableState && this._writableState.destroyed;
          return s || f
            ? (e
                ? e(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      i.nextTick(a, this, t))
                    : i.nextTick(a, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !e && t
                  ? r._writableState
                    ? r._writableState.errorEmitted
                      ? i.nextTick(o, r)
                      : ((r._writableState.errorEmitted = !0),
                        i.nextTick(n, r, t))
                    : i.nextTick(n, r, t)
                  : e
                  ? (i.nextTick(o, r), e(t))
                  : i.nextTick(o, r);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (t, e) {
          var r = t._readableState,
            i = t._writableState;
          (r && r.autoDestroy) || (i && i.autoDestroy)
            ? t.destroy(e)
            : t.emit("error", e);
        },
      };
    },
    185027: function (t, e, r) {
      "use strict";
      var i = r(796938).q.ERR_STREAM_PREMATURE_CLOSE;
      function n() {}
      t.exports = function t(e, r, o) {
        if ("function" === typeof r) return t(e, null, r);
        r || (r = {}),
          (o = (function (t) {
            var e = !1;
            return function () {
              if (!e) {
                e = !0;
                for (
                  var r = arguments.length, i = new Array(r), n = 0;
                  n < r;
                  n++
                )
                  i[n] = arguments[n];
                t.apply(this, i);
              }
            };
          })(o || n));
        var a = r.readable || (!1 !== r.readable && e.readable),
          s = r.writable || (!1 !== r.writable && e.writable),
          f = function () {
            e.writable || u();
          },
          h = e._writableState && e._writableState.finished,
          u = function () {
            (s = !1), (h = !0), a || o.call(e);
          },
          d = e._readableState && e._readableState.endEmitted,
          c = function () {
            (a = !1), (d = !0), s || o.call(e);
          },
          l = function (t) {
            o.call(e, t);
          },
          p = function () {
            var t;
            return a && !d
              ? ((e._readableState && e._readableState.ended) || (t = new i()),
                o.call(e, t))
              : s && !h
              ? ((e._writableState && e._writableState.ended) || (t = new i()),
                o.call(e, t))
              : void 0;
          },
          b = function () {
            e.req.on("finish", u);
          };
        return (
          !(function (t) {
            return t.setHeader && "function" === typeof t.abort;
          })(e)
            ? s && !e._writableState && (e.on("end", f), e.on("close", f))
            : (e.on("complete", u),
              e.on("abort", p),
              e.req ? b() : e.on("request", b)),
          e.on("end", c),
          e.on("finish", u),
          !1 !== r.error && e.on("error", l),
          e.on("close", p),
          function () {
            e.removeListener("complete", u),
              e.removeListener("abort", p),
              e.removeListener("request", b),
              e.req && e.req.removeListener("finish", u),
              e.removeListener("end", f),
              e.removeListener("close", f),
              e.removeListener("finish", u),
              e.removeListener("end", c),
              e.removeListener("error", l),
              e.removeListener("close", p);
          }
        );
      };
    },
    295800: function (t) {
      t.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    320410: function (t, e, r) {
      "use strict";
      var i;
      var n = r(796938).q,
        o = n.ERR_MISSING_ARGS,
        a = n.ERR_STREAM_DESTROYED;
      function s(t) {
        if (t) throw t;
      }
      function f(t, e, n, o) {
        o = (function (t) {
          var e = !1;
          return function () {
            e || ((e = !0), t.apply(void 0, arguments));
          };
        })(o);
        var s = !1;
        t.on("close", function () {
          s = !0;
        }),
          void 0 === i && (i = r(185027)),
          i(t, { readable: e, writable: n }, function (t) {
            if (t) return o(t);
            (s = !0), o();
          });
        var f = !1;
        return function (e) {
          if (!s && !f)
            return (
              (f = !0),
              (function (t) {
                return t.setHeader && "function" === typeof t.abort;
              })(t)
                ? t.abort()
                : "function" === typeof t.destroy
                ? t.destroy()
                : void o(e || new a("pipe"))
            );
        };
      }
      function h(t) {
        t();
      }
      function u(t, e) {
        return t.pipe(e);
      }
      function d(t) {
        return t.length
          ? "function" !== typeof t[t.length - 1]
            ? s
            : t.pop()
          : s;
      }
      t.exports = function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        var i,
          n = d(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
          throw new o("streams");
        var a = e.map(function (t, r) {
          var o = r < e.length - 1;
          return f(t, o, r > 0, function (t) {
            i || (i = t), t && a.forEach(h), o || (a.forEach(h), n(i));
          });
        });
        return e.reduce(u);
      };
    },
    525985: function (t, e, r) {
      "use strict";
      var i = r(796938).q.ERR_INVALID_OPT_VALUE;
      t.exports = {
        getHighWaterMark: function (t, e, r, n) {
          var o = (function (t, e, r) {
            return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null;
          })(e, n, r);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new i(n ? r : "highWaterMark", o);
            return Math.floor(o);
          }
          return t.objectMode ? 16 : 16384;
        },
      };
    },
    546052: function (t, e, r) {
      t.exports = r(850343).EventEmitter;
    },
    938310: function (t, e, r) {
      ((e = t.exports = r(335327)).Stream = e),
        (e.Readable = e),
        (e.Writable = r(654567)),
        (e.Duplex = r(524439)),
        (e.Transform = r(112175)),
        (e.PassThrough = r(83754)),
        (e.finished = r(185027)),
        (e.pipeline = r(320410));
    },
    286558: function (t, e, r) {
      "use strict";
      var i = r(830816).Buffer,
        n = r(270087),
        o = r(406883),
        a = new Array(16),
        s = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        f = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        h = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        u = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ],
        d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        c = [1352829926, 1548603684, 1836072691, 2053994217, 0];
      function l() {
        o.call(this, 64),
          (this._a = 1732584193),
          (this._b = 4023233417),
          (this._c = 2562383102),
          (this._d = 271733878),
          (this._e = 3285377520);
      }
      function p(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function b(t, e, r, i, n, o, a, s) {
        return (p((t + (e ^ r ^ i) + o + a) | 0, s) + n) | 0;
      }
      function m(t, e, r, i, n, o, a, s) {
        return (p((t + ((e & r) | (~e & i)) + o + a) | 0, s) + n) | 0;
      }
      function g(t, e, r, i, n, o, a, s) {
        return (p((t + ((e | ~r) ^ i) + o + a) | 0, s) + n) | 0;
      }
      function y(t, e, r, i, n, o, a, s) {
        return (p((t + ((e & i) | (r & ~i)) + o + a) | 0, s) + n) | 0;
      }
      function v(t, e, r, i, n, o, a, s) {
        return (p((t + (e ^ (r | ~i)) + o + a) | 0, s) + n) | 0;
      }
      n(l, o),
        (l.prototype._update = function () {
          for (var t = a, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
          for (
            var r = 0 | this._a,
              i = 0 | this._b,
              n = 0 | this._c,
              o = 0 | this._d,
              l = 0 | this._e,
              w = 0 | this._a,
              _ = 0 | this._b,
              M = 0 | this._c,
              S = 0 | this._d,
              E = 0 | this._e,
              k = 0;
            k < 80;
            k += 1
          ) {
            var A, R;
            k < 16
              ? ((A = b(r, i, n, o, l, t[s[k]], d[0], h[k])),
                (R = v(w, _, M, S, E, t[f[k]], c[0], u[k])))
              : k < 32
              ? ((A = m(r, i, n, o, l, t[s[k]], d[1], h[k])),
                (R = y(w, _, M, S, E, t[f[k]], c[1], u[k])))
              : k < 48
              ? ((A = g(r, i, n, o, l, t[s[k]], d[2], h[k])),
                (R = g(w, _, M, S, E, t[f[k]], c[2], u[k])))
              : k < 64
              ? ((A = y(r, i, n, o, l, t[s[k]], d[3], h[k])),
                (R = m(w, _, M, S, E, t[f[k]], c[3], u[k])))
              : ((A = v(r, i, n, o, l, t[s[k]], d[4], h[k])),
                (R = b(w, _, M, S, E, t[f[k]], c[4], u[k]))),
              (r = l),
              (l = o),
              (o = p(n, 10)),
              (n = i),
              (i = A),
              (w = E),
              (E = S),
              (S = p(M, 10)),
              (M = _),
              (_ = R);
          }
          var x = (this._b + n + S) | 0;
          (this._b = (this._c + o + E) | 0),
            (this._c = (this._d + l + w) | 0),
            (this._d = (this._e + r + _) | 0),
            (this._e = (this._a + i + M) | 0),
            (this._a = x);
        }),
        (l.prototype._digest = function () {
          (this._block[this._blockOffset++] = 128),
            this._blockOffset > 56 &&
              (this._block.fill(0, this._blockOffset, 64),
              this._update(),
              (this._blockOffset = 0)),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
          var t = i.alloc ? i.alloc(20) : new i(20);
          return (
            t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t.writeInt32LE(this._e, 16),
            t
          );
        }),
        (t.exports = l);
    },
    327172: function (t, e, r) {
      var i = r(830816),
        n = i.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function a(t, e, r) {
        return n(t, e, r);
      }
      n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
        ? (t.exports = i)
        : (o(i, e), (e.Buffer = a)),
        (a.prototype = Object.create(n.prototype)),
        o(n, a),
        (a.from = function (t, e, r) {
          if ("number" === typeof t)
            throw new TypeError("Argument must not be a number");
          return n(t, e, r);
        }),
        (a.alloc = function (t, e, r) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          var i = n(t);
          return (
            void 0 !== e
              ? "string" === typeof r
                ? i.fill(e, r)
                : i.fill(e)
              : i.fill(0),
            i
          );
        }),
        (a.allocUnsafe = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return n(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          if ("number" !== typeof t)
            throw new TypeError("Argument must be a number");
          return i.SlowBuffer(t);
        });
    },
    721788: function (t, e, r) {
      "use strict";
      var i,
        n = r(127061),
        o = r(830816),
        a = o.Buffer,
        s = {};
      for (i in o)
        o.hasOwnProperty(i) &&
          "SlowBuffer" !== i &&
          "Buffer" !== i &&
          (s[i] = o[i]);
      var f = (s.Buffer = {});
      for (i in a)
        a.hasOwnProperty(i) &&
          "allocUnsafe" !== i &&
          "allocUnsafeSlow" !== i &&
          (f[i] = a[i]);
      if (
        ((s.Buffer.prototype = a.prototype),
        (f.from && f.from !== Uint8Array.from) ||
          (f.from = function (t, e, r) {
            if ("number" === typeof t)
              throw new TypeError(
                'The "value" argument must not be of type number. Received type ' +
                  typeof t
              );
            if (t && "undefined" === typeof t.length)
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t
              );
            return a(t, e, r);
          }),
        f.alloc ||
          (f.alloc = function (t, e, r) {
            if ("number" !== typeof t)
              throw new TypeError(
                'The "size" argument must be of type number. Received type ' +
                  typeof t
              );
            if (t < 0 || t >= 2 * (1 << 30))
              throw new RangeError(
                'The value "' + t + '" is invalid for option "size"'
              );
            var i = a(t);
            return (
              e && 0 !== e.length
                ? "string" === typeof r
                  ? i.fill(e, r)
                  : i.fill(e)
                : i.fill(0),
              i
            );
          }),
        !s.kStringMaxLength)
      )
        try {
          s.kStringMaxLength = n.binding("buffer").kStringMaxLength;
        } catch (h) {}
      s.constants ||
        ((s.constants = { MAX_LENGTH: s.kMaxLength }),
        s.kStringMaxLength &&
          (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)),
        (t.exports = s);
    },
    398423: function (t, e, r) {
      var i = r(327172).Buffer;
      function n(t, e) {
        (this._block = i.alloc(t)),
          (this._finalSize = e),
          (this._blockSize = t),
          (this._len = 0);
      }
      (n.prototype.update = function (t, e) {
        "string" === typeof t && ((e = e || "utf8"), (t = i.from(t, e)));
        for (
          var r = this._block,
            n = this._blockSize,
            o = t.length,
            a = this._len,
            s = 0;
          s < o;

        ) {
          for (var f = a % n, h = Math.min(o - s, n - f), u = 0; u < h; u++)
            r[f + u] = t[s + u];
          (s += h), (a += h) % n === 0 && this._update(r);
        }
        return (this._len += o), this;
      }),
        (n.prototype.digest = function (t) {
          var e = this._len % this._blockSize;
          (this._block[e] = 128),
            this._block.fill(0, e + 1),
            e >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var r = 8 * this._len;
          if (r <= 4294967295)
            this._block.writeUInt32BE(r, this._blockSize - 4);
          else {
            var i = (4294967295 & r) >>> 0,
              n = (r - i) / 4294967296;
            this._block.writeUInt32BE(n, this._blockSize - 8),
              this._block.writeUInt32BE(i, this._blockSize - 4);
          }
          this._update(this._block);
          var o = this._hash();
          return t ? o.toString(t) : o;
        }),
        (n.prototype._update = function () {
          throw new Error("_update must be implemented by subclass");
        }),
        (t.exports = n);
    },
    254458: function (t, e, r) {
      var i = (t.exports = function (t) {
        t = t.toLowerCase();
        var e = i[t];
        if (!e)
          throw new Error(t + " is not supported (we accept pull requests)");
        return new e();
      });
      (i.sha = r(313608)),
        (i.sha1 = r(906533)),
        (i.sha224 = r(998203)),
        (i.sha256 = r(989541)),
        (i.sha384 = r(661389)),
        (i.sha512 = r(636282));
    },
    313608: function (t, e, r) {
      var i = r(270087),
        n = r(398423),
        o = r(327172).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function f() {
        this.init(), (this._w = s), n.call(this, 64, 56);
      }
      function h(t) {
        return (t << 30) | (t >>> 2);
      }
      function u(t, e, r, i) {
        return 0 === t
          ? (e & r) | (~e & i)
          : 2 === t
          ? (e & r) | (e & i) | (r & i)
          : e ^ r ^ i;
      }
      i(f, n),
        (f.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e,
              r = this._w,
              i = 0 | this._a,
              n = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              d = 0;
            d < 16;
            ++d
          )
            r[d] = t.readInt32BE(4 * d);
          for (; d < 80; ++d)
            r[d] = r[d - 3] ^ r[d - 8] ^ r[d - 14] ^ r[d - 16];
          for (var c = 0; c < 80; ++c) {
            var l = ~~(c / 20),
              p =
                0 |
                ((((e = i) << 5) | (e >>> 27)) +
                  u(l, n, o, s) +
                  f +
                  r[c] +
                  a[l]);
            (f = s), (s = o), (o = h(n)), (n = i), (i = p);
          }
          (this._a = (i + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = f);
    },
    906533: function (t, e, r) {
      var i = r(270087),
        n = r(398423),
        o = r(327172).Buffer,
        a = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);
      function f() {
        this.init(), (this._w = s), n.call(this, 64, 56);
      }
      function h(t) {
        return (t << 5) | (t >>> 27);
      }
      function u(t) {
        return (t << 30) | (t >>> 2);
      }
      function d(t, e, r, i) {
        return 0 === t
          ? (e & r) | (~e & i)
          : 2 === t
          ? (e & r) | (e & i) | (r & i)
          : e ^ r ^ i;
      }
      i(f, n),
        (f.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e,
              r = this._w,
              i = 0 | this._a,
              n = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              c = 0;
            c < 16;
            ++c
          )
            r[c] = t.readInt32BE(4 * c);
          for (; c < 80; ++c)
            r[c] =
              ((e = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16]) << 1) |
              (e >>> 31);
          for (var l = 0; l < 80; ++l) {
            var p = ~~(l / 20),
              b = (h(i) + d(p, n, o, s) + f + r[l] + a[p]) | 0;
            (f = s), (s = o), (o = u(n)), (n = i), (i = b);
          }
          (this._a = (i + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(20);
          return (
            t.writeInt32BE(0 | this._a, 0),
            t.writeInt32BE(0 | this._b, 4),
            t.writeInt32BE(0 | this._c, 8),
            t.writeInt32BE(0 | this._d, 12),
            t.writeInt32BE(0 | this._e, 16),
            t
          );
        }),
        (t.exports = f);
    },
    998203: function (t, e, r) {
      var i = r(270087),
        n = r(989541),
        o = r(398423),
        a = r(327172).Buffer,
        s = new Array(64);
      function f() {
        this.init(), (this._w = s), o.call(this, 64, 56);
      }
      i(f, n),
        (f.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function () {
          var t = a.allocUnsafe(28);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t
          );
        }),
        (t.exports = f);
    },
    989541: function (t, e, r) {
      var i = r(270087),
        n = r(398423),
        o = r(327172).Buffer,
        a = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        s = new Array(64);
      function f() {
        this.init(), (this._w = s), n.call(this, 64, 56);
      }
      function h(t, e, r) {
        return r ^ (t & (e ^ r));
      }
      function u(t, e, r) {
        return (t & e) | (r & (t | e));
      }
      function d(t) {
        return (
          ((t >>> 2) | (t << 30)) ^
          ((t >>> 13) | (t << 19)) ^
          ((t >>> 22) | (t << 10))
        );
      }
      function c(t) {
        return (
          ((t >>> 6) | (t << 26)) ^
          ((t >>> 11) | (t << 21)) ^
          ((t >>> 25) | (t << 7))
        );
      }
      function l(t) {
        return ((t >>> 7) | (t << 25)) ^ ((t >>> 18) | (t << 14)) ^ (t >>> 3);
      }
      i(f, n),
        (f.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e,
              r = this._w,
              i = 0 | this._a,
              n = 0 | this._b,
              o = 0 | this._c,
              s = 0 | this._d,
              f = 0 | this._e,
              p = 0 | this._f,
              b = 0 | this._g,
              m = 0 | this._h,
              g = 0;
            g < 16;
            ++g
          )
            r[g] = t.readInt32BE(4 * g);
          for (; g < 64; ++g)
            r[g] =
              0 |
              (((((e = r[g - 2]) >>> 17) | (e << 15)) ^
                ((e >>> 19) | (e << 13)) ^
                (e >>> 10)) +
                r[g - 7] +
                l(r[g - 15]) +
                r[g - 16]);
          for (var y = 0; y < 64; ++y) {
            var v = (m + c(f) + h(f, p, b) + a[y] + r[y]) | 0,
              w = (d(i) + u(i, n, o)) | 0;
            (m = b),
              (b = p),
              (p = f),
              (f = (s + v) | 0),
              (s = o),
              (o = n),
              (n = i),
              (i = (v + w) | 0);
          }
          (this._a = (i + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (o + this._c) | 0),
            (this._d = (s + this._d) | 0),
            (this._e = (f + this._e) | 0),
            (this._f = (p + this._f) | 0),
            (this._g = (b + this._g) | 0),
            (this._h = (m + this._h) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(32);
          return (
            t.writeInt32BE(this._a, 0),
            t.writeInt32BE(this._b, 4),
            t.writeInt32BE(this._c, 8),
            t.writeInt32BE(this._d, 12),
            t.writeInt32BE(this._e, 16),
            t.writeInt32BE(this._f, 20),
            t.writeInt32BE(this._g, 24),
            t.writeInt32BE(this._h, 28),
            t
          );
        }),
        (t.exports = f);
    },
    661389: function (t, e, r) {
      var i = r(270087),
        n = r(636282),
        o = r(398423),
        a = r(327172).Buffer,
        s = new Array(160);
      function f() {
        this.init(), (this._w = s), o.call(this, 128, 112);
      }
      i(f, n),
        (f.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (f.prototype._hash = function () {
          var t = a.allocUnsafe(48);
          function e(e, r, i) {
            t.writeInt32BE(e, i), t.writeInt32BE(r, i + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            t
          );
        }),
        (t.exports = f);
    },
    636282: function (t, e, r) {
      var i = r(270087),
        n = r(398423),
        o = r(327172).Buffer,
        a = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        s = new Array(160);
      function f() {
        this.init(), (this._w = s), n.call(this, 128, 112);
      }
      function h(t, e, r) {
        return r ^ (t & (e ^ r));
      }
      function u(t, e, r) {
        return (t & e) | (r & (t | e));
      }
      function d(t, e) {
        return (
          ((t >>> 28) | (e << 4)) ^
          ((e >>> 2) | (t << 30)) ^
          ((e >>> 7) | (t << 25))
        );
      }
      function c(t, e) {
        return (
          ((t >>> 14) | (e << 18)) ^
          ((t >>> 18) | (e << 14)) ^
          ((e >>> 9) | (t << 23))
        );
      }
      function l(t, e) {
        return ((t >>> 1) | (e << 31)) ^ ((t >>> 8) | (e << 24)) ^ (t >>> 7);
      }
      function p(t, e) {
        return (
          ((t >>> 1) | (e << 31)) ^
          ((t >>> 8) | (e << 24)) ^
          ((t >>> 7) | (e << 25))
        );
      }
      function b(t, e) {
        return ((t >>> 19) | (e << 13)) ^ ((e >>> 29) | (t << 3)) ^ (t >>> 6);
      }
      function m(t, e) {
        return (
          ((t >>> 19) | (e << 13)) ^
          ((e >>> 29) | (t << 3)) ^
          ((t >>> 6) | (e << 26))
        );
      }
      function g(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0;
      }
      i(f, n),
        (f.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (f.prototype._update = function (t) {
          for (
            var e = this._w,
              r = 0 | this._ah,
              i = 0 | this._bh,
              n = 0 | this._ch,
              o = 0 | this._dh,
              s = 0 | this._eh,
              f = 0 | this._fh,
              y = 0 | this._gh,
              v = 0 | this._hh,
              w = 0 | this._al,
              _ = 0 | this._bl,
              M = 0 | this._cl,
              S = 0 | this._dl,
              E = 0 | this._el,
              k = 0 | this._fl,
              A = 0 | this._gl,
              R = 0 | this._hl,
              x = 0;
            x < 32;
            x += 2
          )
            (e[x] = t.readInt32BE(4 * x)),
              (e[x + 1] = t.readInt32BE(4 * x + 4));
          for (; x < 160; x += 2) {
            var B = e[x - 30],
              I = e[x - 30 + 1],
              T = l(B, I),
              P = p(I, B),
              j = b((B = e[x - 4]), (I = e[x - 4 + 1])),
              O = m(I, B),
              C = e[x - 14],
              L = e[x - 14 + 1],
              N = e[x - 32],
              D = e[x - 32 + 1],
              q = (P + L) | 0,
              U = (T + C + g(q, P)) | 0;
            (U =
              ((U = (U + j + g((q = (q + O) | 0), O)) | 0) +
                N +
                g((q = (q + D) | 0), D)) |
              0),
              (e[x] = U),
              (e[x + 1] = q);
          }
          for (var z = 0; z < 160; z += 2) {
            (U = e[z]), (q = e[z + 1]);
            var H = u(r, i, n),
              K = u(w, _, M),
              F = d(r, w),
              W = d(w, r),
              V = c(s, E),
              Z = c(E, s),
              G = a[z],
              X = a[z + 1],
              Y = h(s, f, y),
              J = h(E, k, A),
              $ = (R + Z) | 0,
              Q = (v + V + g($, R)) | 0;
            Q =
              ((Q =
                ((Q = (Q + Y + g(($ = ($ + J) | 0), J)) | 0) +
                  G +
                  g(($ = ($ + X) | 0), X)) |
                0) +
                U +
                g(($ = ($ + q) | 0), q)) |
              0;
            var tt = (W + K) | 0,
              et = (F + H + g(tt, W)) | 0;
            (v = y),
              (R = A),
              (y = f),
              (A = k),
              (f = s),
              (k = E),
              (s = (o + Q + g((E = (S + $) | 0), S)) | 0),
              (o = n),
              (S = M),
              (n = i),
              (M = _),
              (i = r),
              (_ = w),
              (r = (Q + et + g((w = ($ + tt) | 0), $)) | 0);
          }
          (this._al = (this._al + w) | 0),
            (this._bl = (this._bl + _) | 0),
            (this._cl = (this._cl + M) | 0),
            (this._dl = (this._dl + S) | 0),
            (this._el = (this._el + E) | 0),
            (this._fl = (this._fl + k) | 0),
            (this._gl = (this._gl + A) | 0),
            (this._hl = (this._hl + R) | 0),
            (this._ah = (this._ah + r + g(this._al, w)) | 0),
            (this._bh = (this._bh + i + g(this._bl, _)) | 0),
            (this._ch = (this._ch + n + g(this._cl, M)) | 0),
            (this._dh = (this._dh + o + g(this._dl, S)) | 0),
            (this._eh = (this._eh + s + g(this._el, E)) | 0),
            (this._fh = (this._fh + f + g(this._fl, k)) | 0),
            (this._gh = (this._gh + y + g(this._gl, A)) | 0),
            (this._hh = (this._hh + v + g(this._hl, R)) | 0);
        }),
        (f.prototype._hash = function () {
          var t = o.allocUnsafe(64);
          function e(e, r, i) {
            t.writeInt32BE(e, i), t.writeInt32BE(r, i + 4);
          }
          return (
            e(this._ah, this._al, 0),
            e(this._bh, this._bl, 8),
            e(this._ch, this._cl, 16),
            e(this._dh, this._dl, 24),
            e(this._eh, this._el, 32),
            e(this._fh, this._fl, 40),
            e(this._gh, this._gl, 48),
            e(this._hh, this._hl, 56),
            t
          );
        }),
        (t.exports = f);
    },
    234361: function (t, e, r) {
      "use strict";
      var i = r(327172).Buffer,
        n =
          i.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              if (!t) return "utf8";
              for (var e; ; )
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" !== typeof e && (i.isEncoding === n || !n(t)))
              throw new Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = f), (this.end = h), (e = 4);
            break;
          case "utf8":
            (this.fillLast = s), (e = 4);
            break;
          case "base64":
            (this.text = u), (this.end = d), (e = 3);
            break;
          default:
            return (this.write = c), void (this.end = l);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = i.allocUnsafe(e));
      }
      function a(t) {
        return t <= 127
          ? 0
          : t >> 5 === 6
          ? 2
          : t >> 4 === 14
          ? 3
          : t >> 3 === 30
          ? 4
          : t >> 6 === 2
          ? -1
          : -2;
      }
      function s(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function (t, e, r) {
            if (128 !== (192 & e[0])) return (t.lastNeed = 0), "\ufffd";
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 !== (192 & e[1])) return (t.lastNeed = 1), "\ufffd";
              if (t.lastNeed > 2 && e.length > 2 && 128 !== (192 & e[2]))
                return (t.lastNeed = 2), "\ufffd";
            }
          })(this, t);
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length),
            void (this.lastNeed -= t.length));
      }
      function f(t, e) {
        if ((t.length - e) % 2 === 0) {
          var r = t.toString("utf16le", e);
          if (r) {
            var i = r.charCodeAt(r.length - 1);
            if (i >= 55296 && i <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = t[t.length - 1]),
          t.toString("utf16le", e, t.length - 1)
        );
      }
      function h(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, r);
        }
        return e;
      }
      function u(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r
              ? (this.lastChar[0] = t[t.length - 1])
              : ((this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - r));
      }
      function d(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed
          ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : e;
      }
      function c(t) {
        return t.toString(this.encoding);
      }
      function l(t) {
        return t && t.length ? this.write(t) : "";
      }
      (e.s = o),
        (o.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, r;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < t.length
            ? e
              ? e + this.text(t, r)
              : this.text(t, r)
            : e || "";
        }),
        (o.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "\ufffd" : e;
        }),
        (o.prototype.text = function (t, e) {
          var r = (function (t, e, r) {
            var i = e.length - 1;
            if (i < r) return 0;
            var n = a(e[i]);
            if (n >= 0) return n > 0 && (t.lastNeed = n - 1), n;
            if (--i < r || -2 === n) return 0;
            if ((n = a(e[i])) >= 0) return n > 0 && (t.lastNeed = n - 2), n;
            if (--i < r || -2 === n) return 0;
            if ((n = a(e[i])) >= 0)
              return n > 0 && (2 === n ? (n = 0) : (t.lastNeed = n - 3)), n;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = r;
          var i = t.length - (r - this.lastNeed);
          return t.copy(this.lastChar, 0, i), t.toString("utf8", e, i);
        }),
        (o.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
            (this.lastNeed -= t.length);
        });
    },
    317451: function (t, e, r) {
      function i(t) {
        try {
          if (!r.g.localStorage) return !1;
        } catch (i) {
          return !1;
        }
        var e = r.g.localStorage[t];
        return null != e && "true" === String(e).toLowerCase();
      }
      t.exports = function (t, e) {
        if (i("noDeprecation")) return t;
        var r = !1;
        return function () {
          if (!r) {
            if (i("throwDeprecation")) throw new Error(e);
            i("traceDeprecation") ? console.trace(e) : console.warn(e),
              (r = !0);
          }
          return t.apply(this, arguments);
        };
      };
    },
    574923: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}'
      );
    },
    217536: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}'
      );
    },
    187330: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}'
      );
    },
    887064: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}'
      );
    },
    780312: function (t) {
      "use strict";
      t.exports = { i8: "6.6.1" };
    },
    641095: function (t) {
      "use strict";
      t.exports = JSON.parse(
        '{"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}'
      );
    },
  },
]);
