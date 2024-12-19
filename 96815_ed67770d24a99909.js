"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [96815],
  {
    764186: function (e, t, n) {
      t.Ht = void 0;
      const r = n(301370),
        i = new Uint8Array(25718.875);
      function o(e, t) {
        for (let n = e / 8; n < Math.ceil(t / 8); n++) i[n] = 255;
      }
      !(function (...e) {
        for (const t of e) {
          const e = t.charCodeAt(0),
            n = Math.floor(e / 8),
            r = e % 8;
          i[n] = i[n] ^ (1 << r);
        }
      })(
        " ",
        "\n",
        "\t",
        "\v",
        "*",
        "/",
        "&",
        ":",
        ";",
        ".",
        ",",
        "?",
        "=",
        "\u0f0b",
        "\u1361",
        "\u200b"
      );
      for (const s of r.UNICODE_RANGES) o(s[0], s[1]);
      t.Ht = function (e) {
        let t = 0,
          n = !1;
        for (let r = 0; r < e.length; r++) {
          const o = e.charCodeAt(r),
            s = Math.floor(o / 8),
            a = o % 8,
            l = i[s],
            c = 1 === ((l >> a) & 1);
          (t += c && (n || 255 === l)), (n = !c);
        }
        return (t += n), t;
      };
    },
    476314: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BURMESE_UNICODE_RANGE = void 0),
        (t.BURMESE_UNICODE_RANGE = [[4096, 4255]]);
    },
    437469: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CJK_UNICODE_RANGES = void 0),
        (t.CJK_UNICODE_RANGES = [
          [19968, 40959],
          [13312, 19903],
          [131072, 173791],
          [173824, 177983],
          [177984, 178207],
          [178208, 183983],
          [183984, 191471],
          [196608, 201551],
          [201552, 205743],
          [63744, 64255],
          [194560, 195103],
          [12032, 12255],
          [11904, 12031],
          [12288, 12351],
          [13056, 13311],
          [65072, 65103],
        ]);
    },
    301370: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UNICODE_RANGES = void 0);
      const r = n(476314),
        i = n(437469),
        o = n(20054),
        s = n(736198),
        a = n(744452),
        l = n(899469),
        c = n(446173);
      t.UNICODE_RANGES = [
        ...l.THAI_UNICODE_RANGE,
        ...a.LAO_UNICODE_RANGE,
        ...r.BURMESE_UNICODE_RANGE,
        ...s.KHMER_UNICODE_RANGE,
        ...o.JAVANESE_UNICODE_RANGE,
        ...c.VAI_UNICODE_RANGE,
        ...i.CJK_UNICODE_RANGES,
      ];
    },
    20054: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.JAVANESE_UNICODE_RANGE = void 0),
        (t.JAVANESE_UNICODE_RANGE = [[43392, 43487]]);
    },
    736198: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.KHMER_UNICODE_RANGE = void 0),
        (t.KHMER_UNICODE_RANGE = [[6016, 6143]]);
    },
    744452: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LAO_UNICODE_RANGE = void 0),
        (t.LAO_UNICODE_RANGE = [[3712, 3839]]);
    },
    899469: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.THAI_UNICODE_RANGE = void 0),
        (t.THAI_UNICODE_RANGE = [[3584, 3711]]);
    },
    446173: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VAI_UNICODE_RANGE = void 0),
        (t.VAI_UNICODE_RANGE = [[42240, 42559]]);
    },
    216706: function (e, t, n) {
      n.d(t, {
        rm: function () {
          return yi;
        },
        ML: function () {
          return _i;
        },
        $B: function () {
          return ni;
        },
        Iq: function () {
          return wr;
        },
        R3: function () {
          return Mr;
        },
        vc: function () {
          return Jr;
        },
        Xo: function () {
          return mi;
        },
        uW: function () {
          return fi;
        },
        Dn: function () {
          return qr;
        },
        im: function () {
          return Zr;
        },
        D: function () {
          return Kr;
        },
        U7: function () {
          return ri;
        },
        i8: function () {
          return oi;
        },
        tQ: function () {
          return Er;
        },
        hT: function () {
          return Ir;
        },
        ZP: function () {
          return Dr;
        },
        um: function () {
          return Ar;
        },
        pB: function () {
          return _r;
        },
        _z: function () {
          return jr;
        },
        ZV: function () {
          return Nr;
        },
        CG: function () {
          return Tr;
        },
        $D: function () {
          return Or;
        },
        KP: function () {
          return si;
        },
        le: function () {
          return Fr;
        },
        Ck: function () {
          return Vr;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          attentionMarkers: function () {
            return De;
          },
          contentInitial: function () {
            return Oe;
          },
          disable: function () {
            return Pe;
          },
          document: function () {
            return Ce;
          },
          flow: function () {
            return Me;
          },
          flowInitial: function () {
            return Re;
          },
          insideSpan: function () {
            return _e;
          },
          string: function () {
            return Le;
          },
          text: function () {
            return Fe;
          },
        });
      var i = n(480224),
        o = n(102396),
        s = n(529535);
      function a(e, t, n, r) {
        const i = e.length;
        let o,
          s = 0;
        if (
          ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (o = Array.from(r)), o.unshift(t, n), e.splice(...o);
        else
          for (n && e.splice(t, n); s < r.length; )
            (o = r.slice(s, s + 1e4)),
              o.unshift(t, 0),
              e.splice(...o),
              (s += 1e4),
              (t += 1e4);
      }
      function l(e, t) {
        return e.length > 0 ? (a(e, e.length, 0, t), e) : t;
      }
      class c {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw new RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, t) {
          const n = null === t || void 0 === t ? Number.POSITIVE_INFINITY : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
            ? this.right
                .slice(
                  this.right.length - n + this.left.length,
                  this.right.length - e + this.left.length
                )
                .reverse()
            : this.left
                .slice(e)
                .concat(
                  this.right
                    .slice(this.right.length - n + this.left.length)
                    .reverse()
                );
        }
        splice(e, t, n) {
          const r = t || 0;
          this.setCursor(Math.trunc(e));
          const i = this.right.splice(
            this.right.length - r,
            Number.POSITIVE_INFINITY
          );
          return n && u(this.left, n), i.reverse();
        }
        pop() {
          return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
        }
        push(e) {
          this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(Number.POSITIVE_INFINITY), u(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), u(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            !(
              e === this.left.length ||
              (e > this.left.length && 0 === this.right.length) ||
              (e < 0 && 0 === this.left.length)
            )
          )
            if (e < this.left.length) {
              const t = this.left.splice(e, Number.POSITIVE_INFINITY);
              u(this.right, t.reverse());
            } else {
              const t = this.right.splice(
                this.left.length + this.right.length - e,
                Number.POSITIVE_INFINITY
              );
              u(this.left, t.reverse());
            }
        }
      }
      function u(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
      }
      function p(e) {
        const t = {};
        let n,
          r,
          i,
          o,
          s,
          l,
          u,
          p = -1;
        const h = new c(e);
        for (; ++p < h.length; ) {
          for (; p in t; ) p = t[p];
          if (
            ((n = h.get(p)),
            p &&
              "chunkFlow" === n[1].type &&
              "listItemPrefix" === h.get(p - 1)[1].type &&
              ((l = n[1]._tokenizer.events),
              (i = 0),
              i < l.length && "lineEndingBlank" === l[i][1].type && (i += 2),
              i < l.length && "content" === l[i][1].type))
          )
            for (; ++i < l.length && "content" !== l[i][1].type; )
              "chunkText" === l[i][1].type &&
                ((l[i][1]._isInFirstContentOfListItem = !0), i++);
          if ("enter" === n[0])
            n[1].contentType &&
              (Object.assign(t, d(h, p)), (p = t[p]), (u = !0));
          else if (n[1]._container) {
            for (
              i = p, r = void 0;
              i-- &&
              ((o = h.get(i)),
              "lineEnding" === o[1].type || "lineEndingBlank" === o[1].type);

            )
              "enter" === o[0] &&
                (r && (h.get(r)[1].type = "lineEndingBlank"),
                (o[1].type = "lineEnding"),
                (r = i));
            r &&
              ((n[1].end = Object.assign({}, h.get(r)[1].start)),
              (s = h.slice(r, p)),
              s.unshift(n),
              h.splice(r, p - r + 1, s));
          }
        }
        return a(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
      }
      function d(e, t) {
        const n = e.get(t)[1],
          r = e.get(t)[2];
        let i = t - 1;
        const o = [],
          s = n._tokenizer || r.parser[n.contentType](n.start),
          a = s.events,
          l = [],
          c = {};
        let u,
          p,
          d = -1,
          h = n,
          f = 0,
          m = 0;
        const g = [m];
        for (; h; ) {
          for (; e.get(++i)[1] !== h; );
          o.push(i),
            h._tokenizer ||
              ((u = r.sliceStream(h)),
              h.next || u.push(null),
              p && s.defineSkip(h.start),
              h._isInFirstContentOfListItem &&
                (s._gfmTasklistFirstContentOfListItem = !0),
              s.write(u),
              h._isInFirstContentOfListItem &&
                (s._gfmTasklistFirstContentOfListItem = void 0)),
            (p = h),
            (h = h.next);
        }
        for (h = n; ++d < a.length; )
          "exit" === a[d][0] &&
            "enter" === a[d - 1][0] &&
            a[d][1].type === a[d - 1][1].type &&
            a[d][1].start.line !== a[d][1].end.line &&
            ((m = d + 1),
            g.push(m),
            (h._tokenizer = void 0),
            (h.previous = void 0),
            (h = h.next));
        for (
          s.events = [],
            h ? ((h._tokenizer = void 0), (h.previous = void 0)) : g.pop(),
            d = g.length;
          d--;

        ) {
          const t = a.slice(g[d], g[d + 1]),
            n = o.pop();
          l.push([n, n + t.length - 1]), e.splice(n, 2, t);
        }
        for (l.reverse(), d = -1; ++d < l.length; )
          (c[f + l[d][0]] = f + l[d][1]), (f += l[d][1] - l[d][0] - 1);
        return c;
      }
      const h = {}.hasOwnProperty;
      function f(e, t) {
        let n;
        for (n in t) {
          const r = (h.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            i = t[n];
          let o;
          if (i)
            for (o in i) {
              h.call(r, o) || (r[o] = []);
              const e = i[o];
              m(r[o], Array.isArray(e) ? e : e ? [e] : []);
            }
        }
      }
      function m(e, t) {
        let n = -1;
        const r = [];
        for (; ++n < t.length; ) ("after" === t[n].add ? e : r).push(t[n]);
        a(e, 0, 0, r);
      }
      const g = T(/[A-Za-z]/),
        y = T(/[\dA-Za-z]/),
        k = T(/[#-'*+\--9=?A-Z^-~]/);
      function b(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      const v = T(/\d/),
        w = T(/[\dA-Fa-f]/),
        S = T(/[!-/:-@[-`{-~]/);
      function x(e) {
        return null !== e && e < -2;
      }
      function E(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function N(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      T(/\p{P}|\p{S}/u), T(/\s/);
      function T(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      function A(e, t, n, r) {
        const i = r ? r - 1 : Number.POSITIVE_INFINITY;
        let o = 0;
        return function (r) {
          if (N(r)) return e.enter(n), s(r);
          return t(r);
        };
        function s(r) {
          return N(r) && o++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
        }
      }
      const I = {
        tokenize: function (e) {
          const t = e.attempt(
            this.parser.constructs.contentInitial,
            function (n) {
              if (null === n) return void e.consume(n);
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                A(e, t, "linePrefix")
              );
            },
            function (t) {
              return e.enter("paragraph"), r(t);
            }
          );
          let n;
          return t;
          function r(t) {
            const r = e.enter("chunkText", {
              contentType: "text",
              previous: n,
            });
            return n && (n.next = r), (n = r), i(t);
          }
          function i(t) {
            return null === t
              ? (e.exit("chunkText"), e.exit("paragraph"), void e.consume(t))
              : x(t)
              ? (e.consume(t), e.exit("chunkText"), r)
              : (e.consume(t), i);
          }
        },
      };
      const C = {
          tokenize: function (e) {
            const t = this,
              n = [];
            let r,
              i,
              o,
              s = 0;
            return l;
            function l(r) {
              if (s < n.length) {
                const i = n[s];
                return (
                  (t.containerState = i[1]),
                  e.attempt(i[0].continuation, c, u)(r)
                );
              }
              return u(r);
            }
            function c(e) {
              if ((s++, t.containerState._closeFlow)) {
                (t.containerState._closeFlow = void 0), r && b();
                const n = t.events.length;
                let i,
                  o = n;
                for (; o--; )
                  if (
                    "exit" === t.events[o][0] &&
                    "chunkFlow" === t.events[o][1].type
                  ) {
                    i = t.events[o][1].end;
                    break;
                  }
                k(s);
                let l = n;
                for (; l < t.events.length; )
                  (t.events[l][1].end = Object.assign({}, i)), l++;
                return (
                  a(t.events, o + 1, 0, t.events.slice(n)),
                  (t.events.length = l),
                  u(e)
                );
              }
              return l(e);
            }
            function u(i) {
              if (s === n.length) {
                if (!r) return h(i);
                if (r.currentConstruct && r.currentConstruct.concrete)
                  return m(i);
                t.interrupt = Boolean(
                  r.currentConstruct && !r._gfmTableDynamicInterruptHack
                );
              }
              return (t.containerState = {}), e.check(O, p, d)(i);
            }
            function p(e) {
              return r && b(), k(s), h(e);
            }
            function d(e) {
              return (
                (t.parser.lazy[t.now().line] = s !== n.length),
                (o = t.now().offset),
                m(e)
              );
            }
            function h(n) {
              return (t.containerState = {}), e.attempt(O, f, m)(n);
            }
            function f(e) {
              return s++, n.push([t.currentConstruct, t.containerState]), h(e);
            }
            function m(n) {
              return null === n
                ? (r && b(), k(0), void e.consume(n))
                : ((r = r || t.parser.flow(t.now())),
                  e.enter("chunkFlow", {
                    contentType: "flow",
                    previous: i,
                    _tokenizer: r,
                  }),
                  g(n));
            }
            function g(n) {
              return null === n
                ? (y(e.exit("chunkFlow"), !0), k(0), void e.consume(n))
                : x(n)
                ? (e.consume(n),
                  y(e.exit("chunkFlow")),
                  (s = 0),
                  (t.interrupt = void 0),
                  l)
                : (e.consume(n), g);
            }
            function y(e, n) {
              const l = t.sliceStream(e);
              if (
                (n && l.push(null),
                (e.previous = i),
                i && (i.next = e),
                (i = e),
                r.defineSkip(e.start),
                r.write(l),
                t.parser.lazy[e.start.line])
              ) {
                let e = r.events.length;
                for (; e--; )
                  if (
                    r.events[e][1].start.offset < o &&
                    (!r.events[e][1].end || r.events[e][1].end.offset > o)
                  )
                    return;
                const n = t.events.length;
                let i,
                  l,
                  c = n;
                for (; c--; )
                  if (
                    "exit" === t.events[c][0] &&
                    "chunkFlow" === t.events[c][1].type
                  ) {
                    if (i) {
                      l = t.events[c][1].end;
                      break;
                    }
                    i = !0;
                  }
                for (k(s), e = n; e < t.events.length; )
                  (t.events[e][1].end = Object.assign({}, l)), e++;
                a(t.events, c + 1, 0, t.events.slice(n)), (t.events.length = e);
              }
            }
            function k(r) {
              let i = n.length;
              for (; i-- > r; ) {
                const r = n[i];
                (t.containerState = r[1]), r[0].exit.call(t, e);
              }
              n.length = r;
            }
            function b() {
              r.write([null]),
                (i = void 0),
                (r = void 0),
                (t.containerState._closeFlow = void 0);
            }
          },
        },
        O = {
          tokenize: function (e, t, n) {
            return A(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      const R = {
        tokenize: function (e, t, n) {
          return function (t) {
            return N(t) ? A(e, r, "linePrefix")(t) : r(t);
          };
          function r(e) {
            return null === e || x(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
      const M = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? i(t)
                : x(t)
                ? e.check(L, o, i)(t)
                : (e.consume(t), r);
            }
            function i(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function o(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
          resolve: function (e) {
            return p(e), e;
          },
        },
        L = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                A(e, i, "linePrefix")
              );
            };
            function i(i) {
              if (null === i || x(i)) return n(i);
              const o = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
          partial: !0,
        };
      const F = {
        tokenize: function (e) {
          const t = this,
            n = e.attempt(
              R,
              function (r) {
                if (null === r) return void e.consume(r);
                return (
                  e.enter("lineEndingBlank"),
                  e.consume(r),
                  e.exit("lineEndingBlank"),
                  (t.currentConstruct = void 0),
                  n
                );
              },
              e.attempt(
                this.parser.constructs.flowInitial,
                r,
                A(
                  e,
                  e.attempt(this.parser.constructs.flow, r, e.attempt(M, r)),
                  "linePrefix"
                )
              )
            );
          return n;
          function r(r) {
            if (null !== r)
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n
              );
            e.consume(r);
          }
        },
      };
      const _ = { resolveAll: B() },
        D = z("string"),
        P = z("text");
      function z(e) {
        return {
          tokenize: function (t) {
            const n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, o, s);
            return o;
            function o(e) {
              return l(e) ? i(e) : s(e);
            }
            function s(e) {
              if (null !== e) return t.enter("data"), t.consume(e), a;
              t.consume(e);
            }
            function a(e) {
              return l(e) ? (t.exit("data"), i(e)) : (t.consume(e), a);
            }
            function l(e) {
              if (null === e) return !0;
              const t = r[e];
              let i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  const e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: B("text" === e ? $ : void 0),
        };
      }
      function B(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function $(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            const r = e[n - 1][1],
              i = t.sliceStream(r);
            let o,
              s = i.length,
              a = -1,
              l = 0;
            for (; s--; ) {
              const e = i[s];
              if ("string" === typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1); ) l++, a--;
                if (a) break;
                a = -1;
              } else if (-2 === e) (o = !0), l++;
              else if (-1 !== e) {
                s++;
                break;
              }
            }
            if (l) {
              const i = {
                type:
                  n === e.length || o || l < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: r.end.line,
                  column: r.end.column - l,
                  offset: r.end.offset - l,
                  _index: r.start._index + s,
                  _bufferIndex: s ? a : r.start._bufferIndex + a,
                },
                end: Object.assign({}, r.end),
              };
              (r.end = Object.assign({}, i.start)),
                r.start.offset === r.end.offset
                  ? Object.assign(r, i)
                  : (e.splice(n, 0, ["enter", i, t], ["exit", i, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      function j(e, t, n) {
        const r = [];
        let i = -1;
        for (; ++i < e.length; ) {
          const o = e[i].resolveAll;
          o && !r.includes(o) && ((t = o(t, n)), r.push(o));
        }
        return t;
      }
      function U(e, t, n) {
        let r = Object.assign(
          n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
          { _index: 0, _bufferIndex: -1 }
        );
        const i = {},
          o = [];
        let s = [],
          c = [],
          u = !0;
        const p = {
            consume: function (e) {
              x(e)
                ? (r.line++,
                  (r.column = 1),
                  (r.offset += -3 === e ? 2 : 1),
                  S())
                : -1 !== e && (r.column++, r.offset++);
              r._bufferIndex < 0
                ? r._index++
                : (r._bufferIndex++,
                  r._bufferIndex === s[r._index].length &&
                    ((r._bufferIndex = -1), r._index++));
              (d.previous = e), (u = !0);
            },
            enter: function (e, t) {
              const n = t || {};
              return (
                (n.type = e),
                (n.start = g()),
                d.events.push(["enter", n, d]),
                c.push(n),
                n
              );
            },
            exit: function (e) {
              const t = c.pop();
              return (t.end = g()), d.events.push(["exit", t, d]), t;
            },
            attempt: v(function (e, t) {
              w(e, t.from);
            }),
            check: v(b),
            interrupt: v(b, { interrupt: !0 }),
          },
          d = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: m,
            sliceSerialize: function (e, t) {
              return (function (e, t) {
                let n = -1;
                const r = [];
                let i;
                for (; ++n < e.length; ) {
                  const o = e[n];
                  let s;
                  if ("string" === typeof o) s = o;
                  else
                    switch (o) {
                      case -5:
                        s = "\r";
                        break;
                      case -4:
                        s = "\n";
                        break;
                      case -3:
                        s = "\r\n";
                        break;
                      case -2:
                        s = t ? " " : "\t";
                        break;
                      case -1:
                        if (!t && i) continue;
                        s = " ";
                        break;
                      default:
                        s = String.fromCharCode(o);
                    }
                  (i = -2 === o), r.push(s);
                }
                return r.join("");
              })(m(e), t);
            },
            now: g,
            defineSkip: function (e) {
              (i[e.line] = e.column), S();
            },
            write: function (e) {
              if (((s = l(s, e)), y(), null !== s[s.length - 1])) return [];
              return w(t, 0), (d.events = j(o, d.events, d)), d.events;
            },
          };
        let h,
          f = t.tokenize.call(d, p);
        return t.resolveAll && o.push(t), d;
        function m(e) {
          return (function (e, t) {
            const n = t.start._index,
              r = t.start._bufferIndex,
              i = t.end._index,
              o = t.end._bufferIndex;
            let s;
            if (n === i) s = [e[n].slice(r, o)];
            else {
              if (((s = e.slice(n, i)), r > -1)) {
                const e = s[0];
                "string" === typeof e ? (s[0] = e.slice(r)) : s.shift();
              }
              o > 0 && s.push(e[i].slice(0, o));
            }
            return s;
          })(s, e);
        }
        function g() {
          const {
            line: e,
            column: t,
            offset: n,
            _index: i,
            _bufferIndex: o,
          } = r;
          return { line: e, column: t, offset: n, _index: i, _bufferIndex: o };
        }
        function y() {
          let e;
          for (; r._index < s.length; ) {
            const t = s[r._index];
            if ("string" === typeof t)
              for (
                e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
                r._index === e && r._bufferIndex < t.length;

              )
                k(t.charCodeAt(r._bufferIndex));
            else k(t);
          }
        }
        function k(e) {
          (u = void 0), (h = e), (f = f(e));
        }
        function b(e, t) {
          t.restore();
        }
        function v(e, t) {
          return function (n, i, o) {
            let s, a, l, h;
            return Array.isArray(n)
              ? f(n)
              : "tokenize" in n
              ? f([n])
              : (function (e) {
                  return t;
                  function t(t) {
                    const n = null !== t && e[t],
                      r = null !== t && e.null;
                    return f([
                      ...(Array.isArray(n) ? n : n ? [n] : []),
                      ...(Array.isArray(r) ? r : r ? [r] : []),
                    ])(t);
                  }
                })(n);
            function f(e) {
              return (s = e), (a = 0), 0 === e.length ? o : m(e[a]);
            }
            function m(e) {
              return function (n) {
                (h = (function () {
                  const e = g(),
                    t = d.previous,
                    n = d.currentConstruct,
                    i = d.events.length,
                    o = Array.from(c);
                  return { restore: s, from: i };
                  function s() {
                    (r = e),
                      (d.previous = t),
                      (d.currentConstruct = n),
                      (d.events.length = i),
                      (c = o),
                      S();
                  }
                })()),
                  (l = e),
                  e.partial || (d.currentConstruct = e);
                if (e.name && d.parser.constructs.disable.null.includes(e.name))
                  return k(n);
                return e.tokenize.call(
                  t ? Object.assign(Object.create(d), t) : d,
                  p,
                  y,
                  k
                )(n);
              };
            }
            function y(t) {
              return (u = !0), e(l, h), i;
            }
            function k(e) {
              return (u = !0), h.restore(), ++a < s.length ? m(s[a]) : o;
            }
          };
        }
        function w(e, t) {
          e.resolveAll && !o.includes(e) && o.push(e),
            e.resolve &&
              a(
                d.events,
                t,
                d.events.length - t,
                e.resolve(d.events.slice(t), d)
              ),
            e.resolveTo && (d.events = e.resolveTo(d.events, d));
        }
        function S() {
          r.line in i &&
            r.column < 2 &&
            ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
        }
      }
      const H = {
        name: "thematicBreak",
        tokenize: function (e, t, n) {
          let r,
            i = 0;
          return function (t) {
            return (
              e.enter("thematicBreak"),
              (function (e) {
                return (r = e), o(e);
              })(t)
            );
          };
          function o(o) {
            return o === r
              ? (e.enter("thematicBreakSequence"), s(o))
              : i >= 3 && (null === o || x(o))
              ? (e.exit("thematicBreak"), t(o))
              : n(o);
          }
          function s(t) {
            return t === r
              ? (e.consume(t), i++, s)
              : (e.exit("thematicBreakSequence"),
                N(t) ? A(e, o, "whitespace")(t) : o(t));
          }
        },
      };
      const J = {
          name: "list",
          tokenize: function (e, t, n) {
            const r = this,
              i = r.events[r.events.length - 1];
            let o =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              s = 0;
            return function (t) {
              const i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : v(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  "listUnordered" === i)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(H, n, l)(t) : l(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"), e.enter("listItemValue"), a(t)
                  );
              }
              return n(t);
            };
            function a(t) {
              return v(t) && ++s < 10
                ? (e.consume(t), a)
                : (!r.interrupt || s < 2) &&
                  (r.containerState.marker
                    ? t === r.containerState.marker
                    : 41 === t || 46 === t)
                ? (e.exit("listItemValue"), l(t))
                : n(t);
            }
            function l(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(R, r.interrupt ? n : c, e.attempt(W, p, u))
              );
            }
            function c(e) {
              return (r.containerState.initialBlankLine = !0), o++, p(e);
            }
            function u(t) {
              return N(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  p)
                : n(t);
            }
            function p(n) {
              return (
                (r.containerState.size =
                  o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              const r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  R,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      A(e, t, "listItemIndent", r.containerState.size + 1)(n)
                    );
                  },
                  function (n) {
                    if (r.containerState.furtherBlankLines || !N(n))
                      return (
                        (r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n)
                      );
                    return (
                      (r.containerState.furtherBlankLines = void 0),
                      (r.containerState.initialBlankLine = void 0),
                      e.attempt(G, t, i)(n)
                    );
                  }
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  A(
                    e,
                    e.attempt(J, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        W = {
          tokenize: function (e, t, n) {
            const r = this;
            return A(
              e,
              function (e) {
                const i = r.events[r.events.length - 1];
                return !N(e) && i && "listItemPrefixWhitespace" === i[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        G = {
          tokenize: function (e, t, n) {
            const r = this;
            return A(
              e,
              function (e) {
                const i = r.events[r.events.length - 1];
                return i &&
                  "listItemIndent" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        };
      const V = {
        name: "blockQuote",
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            if (62 === t) {
              const n = r.containerState;
              return (
                n.open ||
                  (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                e.enter("blockQuotePrefix"),
                e.enter("blockQuoteMarker"),
                e.consume(t),
                e.exit("blockQuoteMarker"),
                i
              );
            }
            return n(t);
          };
          function i(n) {
            return N(n)
              ? (e.enter("blockQuotePrefixWhitespace"),
                e.consume(n),
                e.exit("blockQuotePrefixWhitespace"),
                e.exit("blockQuotePrefix"),
                t)
              : (e.exit("blockQuotePrefix"), t(n));
          }
        },
        continuation: {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if (N(t))
                return A(
                  e,
                  i,
                  "linePrefix",
                  r.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
                )(t);
              return i(t);
            };
            function i(r) {
              return e.attempt(V, t, n)(r);
            }
          },
        },
        exit: function (e) {
          e.exit("blockQuote");
        },
      };
      function Y(e, t, n, r, i, o, s, a, l) {
        const c = l || Number.POSITIVE_INFINITY;
        let u = 0;
        return function (t) {
          if (60 === t)
            return (
              e.enter(r), e.enter(i), e.enter(o), e.consume(t), e.exit(o), p
            );
          if (null === t || 32 === t || 41 === t || b(t)) return n(t);
          return (
            e.enter(r),
            e.enter(s),
            e.enter(a),
            e.enter("chunkString", { contentType: "string" }),
            f(t)
          );
        };
        function p(n) {
          return 62 === n
            ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t)
            : (e.enter(a),
              e.enter("chunkString", { contentType: "string" }),
              d(n));
        }
        function d(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(a), p(t))
            : null === t || 60 === t || x(t)
            ? n(t)
            : (e.consume(t), 92 === t ? h : d);
        }
        function h(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), d) : d(t);
        }
        function f(i) {
          return u || (null !== i && 41 !== i && !E(i))
            ? u < c && 40 === i
              ? (e.consume(i), u++, f)
              : 41 === i
              ? (e.consume(i), u--, f)
              : null === i || 32 === i || 40 === i || b(i)
              ? n(i)
              : (e.consume(i), 92 === i ? m : f)
            : (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(i));
        }
        function m(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), f) : f(t);
        }
      }
      function q(e, t, n, r, i, o) {
        const s = this;
        let a,
          l = 0;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), c;
        };
        function c(p) {
          return l > 999 ||
            null === p ||
            91 === p ||
            (93 === p && !a) ||
            (94 === p && !l && "_hiddenFootnoteSupport" in s.parser.constructs)
            ? n(p)
            : 93 === p
            ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t)
            : x(p)
            ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c)
            : (e.enter("chunkString", { contentType: "string" }), u(p));
        }
        function u(t) {
          return null === t || 91 === t || 93 === t || x(t) || l++ > 999
            ? (e.exit("chunkString"), c(t))
            : (e.consume(t), a || (a = !N(t)), 92 === t ? p : u);
        }
        function p(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), l++, u)
            : u(t);
        }
      }
      function Z(e, t, n, r, i, o) {
        let s;
        return function (t) {
          if (34 === t || 39 === t || 40 === t)
            return (
              e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (s = 40 === t ? 41 : t),
              a
            );
          return n(t);
        };
        function a(n) {
          return n === s
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(o), l(n));
        }
        function l(t) {
          return t === s
            ? (e.exit(o), a(s))
            : null === t
            ? n(t)
            : x(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              A(e, l, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), c(t));
        }
        function c(t) {
          return t === s || null === t || x(t)
            ? (e.exit("chunkString"), l(t))
            : (e.consume(t), 92 === t ? u : c);
        }
        function u(t) {
          return t === s || 92 === t ? (e.consume(t), c) : c(t);
        }
      }
      function K(e, t) {
        let n;
        return function r(i) {
          if (x(i))
            return (
              e.enter("lineEnding"),
              e.consume(i),
              e.exit("lineEnding"),
              (n = !0),
              r
            );
          if (N(i)) return A(e, r, n ? "linePrefix" : "lineSuffix")(i);
          return t(i);
        };
      }
      function X(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      const Q = {
          name: "definition",
          tokenize: function (e, t, n) {
            const r = this;
            let i;
            return function (t) {
              return (
                e.enter("definition"),
                (function (t) {
                  return q.call(
                    r,
                    e,
                    o,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(t);
                })(t)
              );
            };
            function o(t) {
              return (
                (i = X(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    s)
                  : n(t)
              );
            }
            function s(t) {
              return E(t) ? K(e, a)(t) : a(t);
            }
            function a(t) {
              return Y(
                e,
                l,
                n,
                "definitionDestination",
                "definitionDestinationLiteral",
                "definitionDestinationLiteralMarker",
                "definitionDestinationRaw",
                "definitionDestinationString"
              )(t);
            }
            function l(t) {
              return e.attempt(ee, c, c)(t);
            }
            function c(t) {
              return N(t) ? A(e, u, "whitespace")(t) : u(t);
            }
            function u(o) {
              return null === o || x(o)
                ? (e.exit("definition"), r.parser.defined.push(i), t(o))
                : n(o);
            }
          },
        },
        ee = {
          tokenize: function (e, t, n) {
            return function (t) {
              return E(t) ? K(e, r)(t) : n(t);
            };
            function r(t) {
              return Z(
                e,
                i,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(t);
            }
            function i(t) {
              return N(t) ? A(e, o, "whitespace")(t) : o(t);
            }
            function o(e) {
              return null === e || x(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      const te = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return e.enter("codeIndented"), A(e, i, "linePrefix", 5)(t);
            };
            function i(e) {
              const t = r.events[r.events.length - 1];
              return t &&
                "linePrefix" === t[1].type &&
                t[2].sliceSerialize(t[1], !0).length >= 4
                ? o(e)
                : n(e);
            }
            function o(t) {
              return null === t
                ? a(t)
                : x(t)
                ? e.attempt(ne, o, a)(t)
                : (e.enter("codeFlowValue"), s(t));
            }
            function s(t) {
              return null === t || x(t)
                ? (e.exit("codeFlowValue"), o(t))
                : (e.consume(t), s);
            }
            function a(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        ne = {
          tokenize: function (e, t, n) {
            const r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : x(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : A(e, o, "linePrefix", 5)(t);
            }
            function o(e) {
              const o = r.events[r.events.length - 1];
              return o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(e)
                : x(e)
                ? i(e)
                : n(e);
            }
          },
          partial: !0,
        };
      const re = {
        name: "headingAtx",
        tokenize: function (e, t, n) {
          let r = 0;
          return function (t) {
            return (
              e.enter("atxHeading"),
              (function (t) {
                return e.enter("atxHeadingSequence"), i(t);
              })(t)
            );
          };
          function i(t) {
            return 35 === t && r++ < 6
              ? (e.consume(t), i)
              : null === t || E(t)
              ? (e.exit("atxHeadingSequence"), o(t))
              : n(t);
          }
          function o(n) {
            return 35 === n
              ? (e.enter("atxHeadingSequence"), s(n))
              : null === n || x(n)
              ? (e.exit("atxHeading"), t(n))
              : N(n)
              ? A(e, o, "whitespace")(n)
              : (e.enter("atxHeadingText"), a(n));
          }
          function s(t) {
            return 35 === t
              ? (e.consume(t), s)
              : (e.exit("atxHeadingSequence"), o(t));
          }
          function a(t) {
            return null === t || 35 === t || E(t)
              ? (e.exit("atxHeadingText"), o(t))
              : (e.consume(t), a);
          }
        },
        resolve: function (e, t) {
          let n,
            r,
            i = e.length - 2,
            o = 3;
          "whitespace" === e[o][1].type && (o += 2);
          i - 2 > o && "whitespace" === e[i][1].type && (i -= 2);
          "atxHeadingSequence" === e[i][1].type &&
            (o === i - 1 || (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
            (i -= o + 1 === i ? 2 : 4);
          i > o &&
            ((n = {
              type: "atxHeadingText",
              start: e[o][1].start,
              end: e[i][1].end,
            }),
            (r = {
              type: "chunkText",
              start: e[o][1].start,
              end: e[i][1].end,
              contentType: "text",
            }),
            a(e, o, i - o + 1, [
              ["enter", n, t],
              ["enter", r, t],
              ["exit", r, t],
              ["exit", n, t],
            ]));
          return e;
        },
      };
      const ie = {
        name: "setextUnderline",
        tokenize: function (e, t, n) {
          const r = this;
          let i;
          return function (t) {
            let s,
              a = r.events.length;
            for (; a--; )
              if (
                "lineEnding" !== r.events[a][1].type &&
                "linePrefix" !== r.events[a][1].type &&
                "content" !== r.events[a][1].type
              ) {
                s = "paragraph" === r.events[a][1].type;
                break;
              }
            if (!r.parser.lazy[r.now().line] && (r.interrupt || s))
              return (
                e.enter("setextHeadingLine"),
                (i = t),
                (function (t) {
                  return e.enter("setextHeadingLineSequence"), o(t);
                })(t)
              );
            return n(t);
          };
          function o(t) {
            return t === i
              ? (e.consume(t), o)
              : (e.exit("setextHeadingLineSequence"),
                N(t) ? A(e, s, "lineSuffix")(t) : s(t));
          }
          function s(r) {
            return null === r || x(r)
              ? (e.exit("setextHeadingLine"), t(r))
              : n(r);
          }
        },
        resolveTo: function (e, t) {
          let n,
            r,
            i,
            o = e.length;
          for (; o--; )
            if ("enter" === e[o][0]) {
              if ("content" === e[o][1].type) {
                n = o;
                break;
              }
              "paragraph" === e[o][1].type && (r = o);
            } else
              "content" === e[o][1].type && e.splice(o, 1),
                i || "definition" !== e[o][1].type || (i = o);
          const s = {
            type: "setextHeading",
            start: Object.assign({}, e[r][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          };
          (e[r][1].type = "setextHeadingText"),
            i
              ? (e.splice(r, 0, ["enter", s, t]),
                e.splice(i + 1, 0, ["exit", e[n][1], t]),
                (e[n][1].end = Object.assign({}, e[i][1].end)))
              : (e[n][1] = s);
          return e.push(["exit", s, t]), e;
        },
      };
      const oe = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        se = ["pre", "script", "style", "textarea"],
        ae = {
          name: "htmlFlow",
          tokenize: function (e, t, n) {
            const r = this;
            let i, o, s, a, l;
            return function (t) {
              return (function (t) {
                return (
                  e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), c
                );
              })(t);
            };
            function c(a) {
              return 33 === a
                ? (e.consume(a), u)
                : 47 === a
                ? (e.consume(a), (o = !0), h)
                : 63 === a
                ? (e.consume(a), (i = 3), r.interrupt ? t : B)
                : g(a)
                ? (e.consume(a), (s = String.fromCharCode(a)), f)
                : n(a);
            }
            function u(o) {
              return 45 === o
                ? (e.consume(o), (i = 2), p)
                : 91 === o
                ? (e.consume(o), (i = 5), (a = 0), d)
                : g(o)
                ? (e.consume(o), (i = 4), r.interrupt ? t : B)
                : n(o);
            }
            function p(i) {
              return 45 === i ? (e.consume(i), r.interrupt ? t : B) : n(i);
            }
            function d(i) {
              const o = "CDATA[";
              return i === o.charCodeAt(a++)
                ? (e.consume(i), a === o.length ? (r.interrupt ? t : R) : d)
                : n(i);
            }
            function h(t) {
              return g(t)
                ? (e.consume(t), (s = String.fromCharCode(t)), f)
                : n(t);
            }
            function f(a) {
              if (null === a || 47 === a || 62 === a || E(a)) {
                const l = 47 === a,
                  c = s.toLowerCase();
                return l || o || !se.includes(c)
                  ? oe.includes(s.toLowerCase())
                    ? ((i = 6),
                      l ? (e.consume(a), m) : r.interrupt ? t(a) : R(a))
                    : ((i = 7),
                      r.interrupt && !r.parser.lazy[r.now().line]
                        ? n(a)
                        : o
                        ? k(a)
                        : b(a))
                  : ((i = 1), r.interrupt ? t(a) : R(a));
              }
              return 45 === a || y(a)
                ? (e.consume(a), (s += String.fromCharCode(a)), f)
                : n(a);
            }
            function m(i) {
              return 62 === i ? (e.consume(i), r.interrupt ? t : R) : n(i);
            }
            function k(t) {
              return N(t) ? (e.consume(t), k) : C(t);
            }
            function b(t) {
              return 47 === t
                ? (e.consume(t), C)
                : 58 === t || 95 === t || g(t)
                ? (e.consume(t), v)
                : N(t)
                ? (e.consume(t), b)
                : C(t);
            }
            function v(t) {
              return 45 === t || 46 === t || 58 === t || 95 === t || y(t)
                ? (e.consume(t), v)
                : w(t);
            }
            function w(t) {
              return 61 === t
                ? (e.consume(t), S)
                : N(t)
                ? (e.consume(t), w)
                : b(t);
            }
            function S(t) {
              return null === t || 60 === t || 61 === t || 62 === t || 96 === t
                ? n(t)
                : 34 === t || 39 === t
                ? (e.consume(t), (l = t), T)
                : N(t)
                ? (e.consume(t), S)
                : A(t);
            }
            function T(t) {
              return t === l
                ? (e.consume(t), (l = null), I)
                : null === t || x(t)
                ? n(t)
                : (e.consume(t), T);
            }
            function A(t) {
              return null === t ||
                34 === t ||
                39 === t ||
                47 === t ||
                60 === t ||
                61 === t ||
                62 === t ||
                96 === t ||
                E(t)
                ? w(t)
                : (e.consume(t), A);
            }
            function I(e) {
              return 47 === e || 62 === e || N(e) ? b(e) : n(e);
            }
            function C(t) {
              return 62 === t ? (e.consume(t), O) : n(t);
            }
            function O(t) {
              return null === t || x(t)
                ? R(t)
                : N(t)
                ? (e.consume(t), O)
                : n(t);
            }
            function R(t) {
              return 45 === t && 2 === i
                ? (e.consume(t), _)
                : 60 === t && 1 === i
                ? (e.consume(t), D)
                : 62 === t && 4 === i
                ? (e.consume(t), $)
                : 63 === t && 3 === i
                ? (e.consume(t), B)
                : 93 === t && 5 === i
                ? (e.consume(t), z)
                : !x(t) || (6 !== i && 7 !== i)
                ? null === t || x(t)
                  ? (e.exit("htmlFlowData"), M(t))
                  : (e.consume(t), R)
                : (e.exit("htmlFlowData"), e.check(le, j, M)(t));
            }
            function M(t) {
              return e.check(ce, L, j)(t);
            }
            function L(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), F
              );
            }
            function F(t) {
              return null === t || x(t)
                ? M(t)
                : (e.enter("htmlFlowData"), R(t));
            }
            function _(t) {
              return 45 === t ? (e.consume(t), B) : R(t);
            }
            function D(t) {
              return 47 === t ? (e.consume(t), (s = ""), P) : R(t);
            }
            function P(t) {
              if (62 === t) {
                const n = s.toLowerCase();
                return se.includes(n) ? (e.consume(t), $) : R(t);
              }
              return g(t) && s.length < 8
                ? (e.consume(t), (s += String.fromCharCode(t)), P)
                : R(t);
            }
            function z(t) {
              return 93 === t ? (e.consume(t), B) : R(t);
            }
            function B(t) {
              return 62 === t
                ? (e.consume(t), $)
                : 45 === t && 2 === i
                ? (e.consume(t), B)
                : R(t);
            }
            function $(t) {
              return null === t || x(t)
                ? (e.exit("htmlFlowData"), j(t))
                : (e.consume(t), $);
            }
            function j(n) {
              return e.exit("htmlFlow"), t(n);
            }
          },
          resolveTo: function (e) {
            let t = e.length;
            for (
              ;
              t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

            );
            t > 1 &&
              "linePrefix" === e[t - 2][1].type &&
              ((e[t][1].start = e[t - 2][1].start),
              (e[t + 1][1].start = e[t - 2][1].start),
              e.splice(t - 2, 2));
            return e;
          },
          concrete: !0,
        },
        le = {
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(R, t, n)
              );
            };
          },
          partial: !0,
        },
        ce = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if (x(t))
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
                );
              return n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      const ue = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if (null === t) return n(t);
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
              );
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        pe = {
          name: "codeFenced",
          tokenize: function (e, t, n) {
            const r = this,
              i = {
                tokenize: function (e, t, n) {
                  let i = 0;
                  return s;
                  function s(t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      l
                    );
                  }
                  function l(t) {
                    return (
                      e.enter("codeFencedFence"),
                      N(t)
                        ? A(
                            e,
                            c,
                            "linePrefix",
                            r.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(t)
                        : c(t)
                    );
                  }
                  function c(t) {
                    return t === o
                      ? (e.enter("codeFencedFenceSequence"), u(t))
                      : n(t);
                  }
                  function u(t) {
                    return t === o
                      ? (i++, e.consume(t), u)
                      : i >= a
                      ? (e.exit("codeFencedFenceSequence"),
                        N(t) ? A(e, p, "whitespace")(t) : p(t))
                      : n(t);
                  }
                  function p(r) {
                    return null === r || x(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
                partial: !0,
              };
            let o,
              s = 0,
              a = 0;
            return function (t) {
              return (function (t) {
                const n = r.events[r.events.length - 1];
                return (
                  (s =
                    n && "linePrefix" === n[1].type
                      ? n[2].sliceSerialize(n[1], !0).length
                      : 0),
                  (o = t),
                  e.enter("codeFenced"),
                  e.enter("codeFencedFence"),
                  e.enter("codeFencedFenceSequence"),
                  l(t)
                );
              })(t);
            };
            function l(t) {
              return t === o
                ? (a++, e.consume(t), l)
                : a < 3
                ? n(t)
                : (e.exit("codeFencedFenceSequence"),
                  N(t) ? A(e, c, "whitespace")(t) : c(t));
            }
            function c(n) {
              return null === n || x(n)
                ? (e.exit("codeFencedFence"),
                  r.interrupt ? t(n) : e.check(ue, h, k)(n))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  u(n));
            }
            function u(t) {
              return null === t || x(t)
                ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(t))
                : N(t)
                ? (e.exit("chunkString"),
                  e.exit("codeFencedFenceInfo"),
                  A(e, p, "whitespace")(t))
                : 96 === t && t === o
                ? n(t)
                : (e.consume(t), u);
            }
            function p(t) {
              return null === t || x(t)
                ? c(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  d(t));
            }
            function d(t) {
              return null === t || x(t)
                ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(t))
                : 96 === t && t === o
                ? n(t)
                : (e.consume(t), d);
            }
            function h(t) {
              return e.attempt(i, k, f)(t);
            }
            function f(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), m
              );
            }
            function m(t) {
              return s > 0 && N(t) ? A(e, g, "linePrefix", s + 1)(t) : g(t);
            }
            function g(t) {
              return null === t || x(t)
                ? e.check(ue, h, k)(t)
                : (e.enter("codeFlowValue"), y(t));
            }
            function y(t) {
              return null === t || x(t)
                ? (e.exit("codeFlowValue"), g(t))
                : (e.consume(t), y);
            }
            function k(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
          concrete: !0,
        };
      var de = n(269477);
      const he = {
        name: "characterReference",
        tokenize: function (e, t, n) {
          const r = this;
          let i,
            o,
            s = 0;
          return function (t) {
            return (
              e.enter("characterReference"),
              e.enter("characterReferenceMarker"),
              e.consume(t),
              e.exit("characterReferenceMarker"),
              a
            );
          };
          function a(t) {
            return 35 === t
              ? (e.enter("characterReferenceMarkerNumeric"),
                e.consume(t),
                e.exit("characterReferenceMarkerNumeric"),
                l)
              : (e.enter("characterReferenceValue"), (i = 31), (o = y), c(t));
          }
          function l(t) {
            return 88 === t || 120 === t
              ? (e.enter("characterReferenceMarkerHexadecimal"),
                e.consume(t),
                e.exit("characterReferenceMarkerHexadecimal"),
                e.enter("characterReferenceValue"),
                (i = 6),
                (o = w),
                c)
              : (e.enter("characterReferenceValue"), (i = 7), (o = v), c(t));
          }
          function c(a) {
            if (59 === a && s) {
              const i = e.exit("characterReferenceValue");
              return o !== y || (0, de.T)(r.sliceSerialize(i))
                ? (e.enter("characterReferenceMarker"),
                  e.consume(a),
                  e.exit("characterReferenceMarker"),
                  e.exit("characterReference"),
                  t)
                : n(a);
            }
            return o(a) && s++ < i ? (e.consume(a), c) : n(a);
          }
        },
      };
      const fe = {
        name: "characterEscape",
        tokenize: function (e, t, n) {
          return function (t) {
            return (
              e.enter("characterEscape"),
              e.enter("escapeMarker"),
              e.consume(t),
              e.exit("escapeMarker"),
              r
            );
          };
          function r(r) {
            return S(r)
              ? (e.enter("characterEscapeValue"),
                e.consume(r),
                e.exit("characterEscapeValue"),
                e.exit("characterEscape"),
                t)
              : n(r);
          }
        },
      };
      const me = {
        name: "lineEnding",
        tokenize: function (e, t) {
          return function (n) {
            return (
              e.enter("lineEnding"),
              e.consume(n),
              e.exit("lineEnding"),
              A(e, t, "linePrefix")
            );
          };
        },
      };
      const ge = {
          name: "labelEnd",
          tokenize: function (e, t, n) {
            const r = this;
            let i,
              o,
              s = r.events.length;
            for (; s--; )
              if (
                ("labelImage" === r.events[s][1].type ||
                  "labelLink" === r.events[s][1].type) &&
                !r.events[s][1]._balanced
              ) {
                i = r.events[s][1];
                break;
              }
            return function (t) {
              if (!i) return n(t);
              if (i._inactive) return u(t);
              return (
                (o = r.parser.defined.includes(
                  X(r.sliceSerialize({ start: i.end, end: r.now() }))
                )),
                e.enter("labelEnd"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelEnd"),
                a
              );
            };
            function a(t) {
              return 40 === t
                ? e.attempt(ye, c, o ? c : u)(t)
                : 91 === t
                ? e.attempt(ke, c, o ? l : u)(t)
                : o
                ? c(t)
                : u(t);
            }
            function l(t) {
              return e.attempt(be, c, u)(t);
            }
            function c(e) {
              return t(e);
            }
            function u(e) {
              return (i._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o,
              s = e.length,
              c = 0;
            for (; s--; )
              if (((n = e[s][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[s][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  "enter" === e[s][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = s), "labelLink" !== n.type)
                ) {
                  c = 2;
                  break;
                }
              } else "labelEnd" === n.type && (i = s);
            const u = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              p = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[i][1].end),
              },
              d = {
                type: "labelText",
                start: Object.assign({}, e[r + c + 2][1].end),
                end: Object.assign({}, e[i - 2][1].start),
              };
            return (
              (o = [
                ["enter", u, t],
                ["enter", p, t],
              ]),
              (o = l(o, e.slice(r + 1, r + c + 3))),
              (o = l(o, [["enter", d, t]])),
              (o = l(
                o,
                j(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + c + 4, i - 3),
                  t
                )
              )),
              (o = l(o, [["exit", d, t], e[i - 2], e[i - 1], ["exit", p, t]])),
              (o = l(o, e.slice(i + 1))),
              (o = l(o, [["exit", u, t]])),
              a(e, r, e.length, o),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              const n = e[t][1];
              ("labelImage" !== n.type &&
                "labelLink" !== n.type &&
                "labelEnd" !== n.type) ||
                (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                (n.type = "data"),
                t++);
            }
            return e;
          },
        },
        ye = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
              );
            };
            function r(t) {
              return E(t) ? K(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? c(t)
                : Y(
                    e,
                    o,
                    s,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(t);
            }
            function o(t) {
              return E(t) ? K(e, a)(t) : c(t);
            }
            function s(e) {
              return n(e);
            }
            function a(t) {
              return 34 === t || 39 === t || 40 === t
                ? Z(
                    e,
                    l,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(t)
                : c(t);
            }
            function l(t) {
              return E(t) ? K(e, c)(t) : c(t);
            }
            function c(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        ke = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              return q.call(
                r,
                e,
                i,
                o,
                "reference",
                "referenceMarker",
                "referenceString"
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                X(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? t(e)
                : n(e);
            }
            function o(e) {
              return n(e);
            }
          },
        },
        be = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        };
      const ve = {
        name: "labelStartImage",
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            return (
              e.enter("labelImage"),
              e.enter("labelImageMarker"),
              e.consume(t),
              e.exit("labelImageMarker"),
              i
            );
          };
          function i(t) {
            return 91 === t
              ? (e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelImage"),
                o)
              : n(t);
          }
          function o(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? n(e)
              : t(e);
          }
        },
        resolveAll: ge.resolveAll,
      };
      var we = n(979094);
      const Se = {
        name: "attention",
        tokenize: function (e, t) {
          const n = this.parser.constructs.attentionMarkers.null,
            r = this.previous,
            i = (0, we.r)(r);
          let o;
          return function (t) {
            return (o = t), e.enter("attentionSequence"), s(t);
          };
          function s(a) {
            if (a === o) return e.consume(a), s;
            const l = e.exit("attentionSequence"),
              c = (0, we.r)(a),
              u = !c || (2 === c && i) || n.includes(a),
              p = !i || (2 === i && c) || n.includes(r);
            return (
              (l._open = Boolean(42 === o ? u : u && (i || !p))),
              (l._close = Boolean(42 === o ? p : p && (c || !u))),
              t(a)
            );
          }
        },
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            o,
            s,
            c,
            u,
            p,
            d = -1;
          for (; ++d < e.length; )
            if (
              "enter" === e[d][0] &&
              "attentionSequence" === e[d][1].type &&
              e[d][1]._close
            )
              for (n = d; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[d][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[d][1]._open) &&
                    (e[d][1].end.offset - e[d][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[d][1].end.offset -
                        e[d][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  c =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[d][1].end.offset - e[d][1].start.offset > 1
                      ? 2
                      : 1;
                  const h = Object.assign({}, e[n][1].end),
                    f = Object.assign({}, e[d][1].start);
                  xe(h, -c),
                    xe(f, c),
                    (o = {
                      type: c > 1 ? "strongSequence" : "emphasisSequence",
                      start: h,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (s = {
                      type: c > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[d][1].start),
                      end: f,
                    }),
                    (i = {
                      type: c > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[d][1].start),
                    }),
                    (r = {
                      type: c > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, o.start),
                      end: Object.assign({}, s.end),
                    }),
                    (e[n][1].end = Object.assign({}, o.start)),
                    (e[d][1].start = Object.assign({}, s.end)),
                    (u = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (u = l(u, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (u = l(u, [
                      ["enter", r, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["enter", i, t],
                    ])),
                    (u = l(
                      u,
                      j(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, d),
                        t
                      )
                    )),
                    (u = l(u, [
                      ["exit", i, t],
                      ["enter", s, t],
                      ["exit", s, t],
                      ["exit", r, t],
                    ])),
                    e[d][1].end.offset - e[d][1].start.offset
                      ? ((p = 2),
                        (u = l(u, [
                          ["enter", e[d][1], t],
                          ["exit", e[d][1], t],
                        ])))
                      : (p = 0),
                    a(e, n - 1, d - n + 3, u),
                    (d = n + u.length - p - 2);
                  break;
                }
          d = -1;
          for (; ++d < e.length; )
            "attentionSequence" === e[d][1].type && (e[d][1].type = "data");
          return e;
        },
      };
      function xe(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      const Ee = {
        name: "autolink",
        tokenize: function (e, t, n) {
          let r = 0;
          return function (t) {
            return (
              e.enter("autolink"),
              e.enter("autolinkMarker"),
              e.consume(t),
              e.exit("autolinkMarker"),
              e.enter("autolinkProtocol"),
              i
            );
          };
          function i(t) {
            return g(t) ? (e.consume(t), o) : 64 === t ? n(t) : l(t);
          }
          function o(e) {
            return 43 === e || 45 === e || 46 === e || y(e)
              ? ((r = 1), s(e))
              : l(e);
          }
          function s(t) {
            return 58 === t
              ? (e.consume(t), (r = 0), a)
              : (43 === t || 45 === t || 46 === t || y(t)) && r++ < 32
              ? (e.consume(t), s)
              : ((r = 0), l(t));
          }
          function a(r) {
            return 62 === r
              ? (e.exit("autolinkProtocol"),
                e.enter("autolinkMarker"),
                e.consume(r),
                e.exit("autolinkMarker"),
                e.exit("autolink"),
                t)
              : null === r || 32 === r || 60 === r || b(r)
              ? n(r)
              : (e.consume(r), a);
          }
          function l(t) {
            return 64 === t
              ? (e.consume(t), c)
              : k(t)
              ? (e.consume(t), l)
              : n(t);
          }
          function c(e) {
            return y(e) ? u(e) : n(e);
          }
          function u(n) {
            return 46 === n
              ? (e.consume(n), (r = 0), c)
              : 62 === n
              ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
                e.enter("autolinkMarker"),
                e.consume(n),
                e.exit("autolinkMarker"),
                e.exit("autolink"),
                t)
              : p(n);
          }
          function p(t) {
            if ((45 === t || y(t)) && r++ < 63) {
              const n = 45 === t ? p : u;
              return e.consume(t), n;
            }
            return n(t);
          }
        },
      };
      const Ne = {
        name: "htmlText",
        tokenize: function (e, t, n) {
          const r = this;
          let i, o, s;
          return function (t) {
            return (
              e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), a
            );
          };
          function a(t) {
            return 33 === t
              ? (e.consume(t), l)
              : 47 === t
              ? (e.consume(t), S)
              : 63 === t
              ? (e.consume(t), v)
              : g(t)
              ? (e.consume(t), C)
              : n(t);
          }
          function l(t) {
            return 45 === t
              ? (e.consume(t), c)
              : 91 === t
              ? (e.consume(t), (o = 0), h)
              : g(t)
              ? (e.consume(t), b)
              : n(t);
          }
          function c(t) {
            return 45 === t ? (e.consume(t), d) : n(t);
          }
          function u(t) {
            return null === t
              ? n(t)
              : 45 === t
              ? (e.consume(t), p)
              : x(t)
              ? ((s = u), z(t))
              : (e.consume(t), u);
          }
          function p(t) {
            return 45 === t ? (e.consume(t), d) : u(t);
          }
          function d(e) {
            return 62 === e ? P(e) : 45 === e ? p(e) : u(e);
          }
          function h(t) {
            const r = "CDATA[";
            return t === r.charCodeAt(o++)
              ? (e.consume(t), o === r.length ? f : h)
              : n(t);
          }
          function f(t) {
            return null === t
              ? n(t)
              : 93 === t
              ? (e.consume(t), m)
              : x(t)
              ? ((s = f), z(t))
              : (e.consume(t), f);
          }
          function m(t) {
            return 93 === t ? (e.consume(t), k) : f(t);
          }
          function k(t) {
            return 62 === t ? P(t) : 93 === t ? (e.consume(t), k) : f(t);
          }
          function b(t) {
            return null === t || 62 === t
              ? P(t)
              : x(t)
              ? ((s = b), z(t))
              : (e.consume(t), b);
          }
          function v(t) {
            return null === t
              ? n(t)
              : 63 === t
              ? (e.consume(t), w)
              : x(t)
              ? ((s = v), z(t))
              : (e.consume(t), v);
          }
          function w(e) {
            return 62 === e ? P(e) : v(e);
          }
          function S(t) {
            return g(t) ? (e.consume(t), T) : n(t);
          }
          function T(t) {
            return 45 === t || y(t) ? (e.consume(t), T) : I(t);
          }
          function I(t) {
            return x(t) ? ((s = I), z(t)) : N(t) ? (e.consume(t), I) : P(t);
          }
          function C(t) {
            return 45 === t || y(t)
              ? (e.consume(t), C)
              : 47 === t || 62 === t || E(t)
              ? O(t)
              : n(t);
          }
          function O(t) {
            return 47 === t
              ? (e.consume(t), P)
              : 58 === t || 95 === t || g(t)
              ? (e.consume(t), R)
              : x(t)
              ? ((s = O), z(t))
              : N(t)
              ? (e.consume(t), O)
              : P(t);
          }
          function R(t) {
            return 45 === t || 46 === t || 58 === t || 95 === t || y(t)
              ? (e.consume(t), R)
              : M(t);
          }
          function M(t) {
            return 61 === t
              ? (e.consume(t), L)
              : x(t)
              ? ((s = M), z(t))
              : N(t)
              ? (e.consume(t), M)
              : O(t);
          }
          function L(t) {
            return null === t || 60 === t || 61 === t || 62 === t || 96 === t
              ? n(t)
              : 34 === t || 39 === t
              ? (e.consume(t), (i = t), F)
              : x(t)
              ? ((s = L), z(t))
              : N(t)
              ? (e.consume(t), L)
              : (e.consume(t), _);
          }
          function F(t) {
            return t === i
              ? (e.consume(t), (i = void 0), D)
              : null === t
              ? n(t)
              : x(t)
              ? ((s = F), z(t))
              : (e.consume(t), F);
          }
          function _(t) {
            return null === t ||
              34 === t ||
              39 === t ||
              60 === t ||
              61 === t ||
              96 === t
              ? n(t)
              : 47 === t || 62 === t || E(t)
              ? O(t)
              : (e.consume(t), _);
          }
          function D(e) {
            return 47 === e || 62 === e || E(e) ? O(e) : n(e);
          }
          function P(r) {
            return 62 === r
              ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t)
              : n(r);
          }
          function z(t) {
            return (
              e.exit("htmlTextData"),
              e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              B
            );
          }
          function B(t) {
            return N(t)
              ? A(
                  e,
                  $,
                  "linePrefix",
                  r.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
                )(t)
              : $(t);
          }
          function $(t) {
            return e.enter("htmlTextData"), s(t);
          }
        },
      };
      const Te = {
        name: "labelStartLink",
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            return (
              e.enter("labelLink"),
              e.enter("labelMarker"),
              e.consume(t),
              e.exit("labelMarker"),
              e.exit("labelLink"),
              i
            );
          };
          function i(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
              ? n(e)
              : t(e);
          }
        },
        resolveAll: ge.resolveAll,
      };
      const Ae = {
        name: "hardBreakEscape",
        tokenize: function (e, t, n) {
          return function (t) {
            return e.enter("hardBreakEscape"), e.consume(t), r;
          };
          function r(r) {
            return x(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
          }
        },
      };
      const Ie = {
        name: "codeText",
        tokenize: function (e, t, n) {
          let r,
            i,
            o = 0;
          return function (t) {
            return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
          };
          function s(t) {
            return 96 === t
              ? (e.consume(t), o++, s)
              : (e.exit("codeTextSequence"), a(t));
          }
          function a(t) {
            return null === t
              ? n(t)
              : 32 === t
              ? (e.enter("space"), e.consume(t), e.exit("space"), a)
              : 96 === t
              ? ((i = e.enter("codeTextSequence")), (r = 0), c(t))
              : x(t)
              ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a)
              : (e.enter("codeTextData"), l(t));
          }
          function l(t) {
            return null === t || 32 === t || 96 === t || x(t)
              ? (e.exit("codeTextData"), a(t))
              : (e.consume(t), l);
          }
          function c(n) {
            return 96 === n
              ? (e.consume(n), r++, c)
              : r === o
              ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n))
              : ((i.type = "codeTextData"), l(n));
          }
        },
        resolve: function (e) {
          let t,
            n,
            r = e.length - 4,
            i = 3;
          if (
            ("lineEnding" === e[i][1].type || "space" === e[i][1].type) &&
            ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
          )
            for (t = i; ++t < r; )
              if ("codeTextData" === e[t][1].type) {
                (e[i][1].type = "codeTextPadding"),
                  (e[r][1].type = "codeTextPadding"),
                  (i += 2),
                  (r -= 2);
                break;
              }
          (t = i - 1), r++;
          for (; ++t <= r; )
            void 0 === n
              ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
              : (t !== r && "lineEnding" !== e[t][1].type) ||
                ((e[n][1].type = "codeTextData"),
                t !== n + 2 &&
                  ((e[n][1].end = e[t - 1][1].end),
                  e.splice(n + 2, t - n - 2),
                  (r -= t - n - 2),
                  (t = n + 2)),
                (n = void 0));
          return e;
        },
        previous: function (e) {
          return (
            96 !== e ||
            "characterEscape" === this.events[this.events.length - 1][1].type
          );
        },
      };
      const Ce = {
          42: J,
          43: J,
          45: J,
          48: J,
          49: J,
          50: J,
          51: J,
          52: J,
          53: J,
          54: J,
          55: J,
          56: J,
          57: J,
          62: V,
        },
        Oe = { 91: Q },
        Re = { [-2]: te, [-1]: te, 32: te },
        Me = {
          35: re,
          42: H,
          45: [ie, H],
          60: ae,
          61: ie,
          95: H,
          96: pe,
          126: pe,
        },
        Le = { 38: he, 92: fe },
        Fe = {
          [-5]: me,
          [-4]: me,
          [-3]: me,
          33: ve,
          38: he,
          42: Se,
          60: [Ee, Ne],
          91: Te,
          92: [Ae, fe],
          93: ge,
          95: Se,
          96: Ie,
        },
        _e = { null: [Se, _] },
        De = { null: [42, 95] },
        Pe = { null: [] };
      function ze(e) {
        const t = (function (e) {
            const t = {};
            let n = -1;
            for (; ++n < e.length; ) f(t, e[n]);
            return t;
          })([r, ...((e || {}).extensions || [])]),
          n = {
            defined: [],
            lazy: {},
            constructs: t,
            content: i(I),
            document: i(C),
            flow: i(F),
            string: i(D),
            text: i(P),
          };
        return n;
        function i(e) {
          return function (t) {
            return U(n, e, t);
          };
        }
      }
      const Be = /[\0\t\n\r]/g;
      const $e =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function je(e) {
        return e.replace($e, Ue);
      }
      function Ue(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          const e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return (function (e, t) {
            const n = Number.parseInt(e, t);
            return n < 9 ||
              11 === n ||
              (n > 13 && n < 32) ||
              (n > 126 && n < 160) ||
              (n > 55295 && n < 57344) ||
              (n > 64975 && n < 65008) ||
              65535 === (65535 & n) ||
              65534 === (65535 & n) ||
              n > 1114111
              ? "\ufffd"
              : String.fromCodePoint(n);
          })(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return (0, de.T)(n) || e;
      }
      function He(e) {
        return e && "object" === typeof e
          ? "position" in e || "type" in e
            ? We(e.position)
            : "start" in e || "end" in e
            ? We(e)
            : "line" in e || "column" in e
            ? Je(e)
            : ""
          : "";
      }
      function Je(e) {
        return Ge(e && e.line) + ":" + Ge(e && e.column);
      }
      function We(e) {
        return Je(e && e.start) + "-" + Je(e && e.end);
      }
      function Ge(e) {
        return e && "number" === typeof e ? e : 1;
      }
      const Ve = {}.hasOwnProperty;
      function Ye(e, t, n) {
        return (
          "string" !== typeof t && ((n = t), (t = void 0)),
          (function (e) {
            const t = {
              transforms: [],
              canContainEols: [
                "emphasis",
                "fragment",
                "heading",
                "paragraph",
                "strong",
              ],
              enter: {
                autolink: o(ne),
                autolinkProtocol: T,
                autolinkEmail: T,
                atxHeading: o(K),
                blockQuote: o(G),
                characterEscape: T,
                characterReference: T,
                codeFenced: o(V),
                codeFencedFenceInfo: a,
                codeFencedFenceMeta: a,
                codeIndented: o(V, a),
                codeText: o(Y, a),
                codeTextData: T,
                data: T,
                codeFlowValue: T,
                definition: o(q),
                definitionDestinationString: a,
                definitionLabelString: a,
                definitionTitleString: a,
                emphasis: o(Z),
                hardBreakEscape: o(Q),
                hardBreakTrailing: o(Q),
                htmlFlow: o(ee, a),
                htmlFlowData: T,
                htmlText: o(ee, a),
                htmlTextData: T,
                image: o(te),
                label: a,
                link: o(ne),
                listItem: o(ie),
                listItemValue: h,
                listOrdered: o(re, d),
                listUnordered: o(re),
                paragraph: o(oe),
                reference: $,
                referenceString: a,
                resourceDestinationString: a,
                resourceTitleString: a,
                setextHeading: o(K),
                strong: o(se),
                thematicBreak: o(le),
              },
              exit: {
                atxHeading: c(),
                atxHeadingSequence: S,
                autolink: c(),
                autolinkEmail: W,
                autolinkProtocol: J,
                blockQuote: c(),
                characterEscapeValue: A,
                characterReferenceMarkerHexadecimal: U,
                characterReferenceMarkerNumeric: U,
                characterReferenceValue: H,
                codeFenced: c(y),
                codeFencedFence: g,
                codeFencedFenceInfo: f,
                codeFencedFenceMeta: m,
                codeFlowValue: A,
                codeIndented: c(k),
                codeText: c(M),
                codeTextData: A,
                data: A,
                definition: c(),
                definitionDestinationString: w,
                definitionLabelString: b,
                definitionTitleString: v,
                emphasis: c(),
                hardBreakEscape: c(C),
                hardBreakTrailing: c(C),
                htmlFlow: c(O),
                htmlFlowData: A,
                htmlText: c(R),
                htmlTextData: A,
                image: c(F),
                label: D,
                labelText: _,
                lineEnding: I,
                link: c(L),
                listItem: c(),
                listOrdered: c(),
                listUnordered: c(),
                paragraph: c(),
                referenceString: j,
                resourceDestinationString: P,
                resourceTitleString: z,
                resource: B,
                setextHeading: c(N),
                setextHeadingLineSequence: E,
                setextHeadingText: x,
                strong: c(),
                thematicBreak: c(),
              },
            };
            Ze(t, (e || {}).mdastExtensions || []);
            const n = {};
            return r;
            function r(e) {
              let r = { type: "root", children: [] };
              const o = {
                  stack: [r],
                  tokenStack: [],
                  config: t,
                  enter: l,
                  exit: u,
                  buffer: a,
                  resume: p,
                  data: n,
                },
                s = [];
              let c = -1;
              for (; ++c < e.length; )
                if (
                  "listOrdered" === e[c][1].type ||
                  "listUnordered" === e[c][1].type
                )
                  if ("enter" === e[c][0]) s.push(c);
                  else {
                    c = i(e, s.pop(), c);
                  }
              for (c = -1; ++c < e.length; ) {
                const n = t[e[c][0]];
                Ve.call(n, e[c][1].type) &&
                  n[e[c][1].type].call(
                    Object.assign(
                      { sliceSerialize: e[c][2].sliceSerialize },
                      o
                    ),
                    e[c][1]
                  );
              }
              if (o.tokenStack.length > 0) {
                const e = o.tokenStack[o.tokenStack.length - 1];
                (e[1] || Xe).call(o, void 0, e[0]);
              }
              for (
                r.position = {
                  start: qe(
                    e.length > 0
                      ? e[0][1].start
                      : { line: 1, column: 1, offset: 0 }
                  ),
                  end: qe(
                    e.length > 0
                      ? e[e.length - 2][1].end
                      : { line: 1, column: 1, offset: 0 }
                  ),
                },
                  c = -1;
                ++c < t.transforms.length;

              )
                r = t.transforms[c](r) || r;
              return r;
            }
            function i(e, t, n) {
              let r,
                i,
                o,
                s,
                a = t - 1,
                l = -1,
                c = !1;
              for (; ++a <= n; ) {
                const t = e[a];
                switch (t[1].type) {
                  case "listUnordered":
                  case "listOrdered":
                  case "blockQuote":
                    "enter" === t[0] ? l++ : l--, (s = void 0);
                    break;
                  case "lineEndingBlank":
                    "enter" === t[0] &&
                      (!r || s || l || o || (o = a), (s = void 0));
                    break;
                  case "linePrefix":
                  case "listItemValue":
                  case "listItemMarker":
                  case "listItemPrefix":
                  case "listItemPrefixWhitespace":
                    break;
                  default:
                    s = void 0;
                }
                if (
                  (!l && "enter" === t[0] && "listItemPrefix" === t[1].type) ||
                  (-1 === l &&
                    "exit" === t[0] &&
                    ("listUnordered" === t[1].type ||
                      "listOrdered" === t[1].type))
                ) {
                  if (r) {
                    let s = a;
                    for (i = void 0; s--; ) {
                      const t = e[s];
                      if (
                        "lineEnding" === t[1].type ||
                        "lineEndingBlank" === t[1].type
                      ) {
                        if ("exit" === t[0]) continue;
                        i && ((e[i][1].type = "lineEndingBlank"), (c = !0)),
                          (t[1].type = "lineEnding"),
                          (i = s);
                      } else if (
                        "linePrefix" !== t[1].type &&
                        "blockQuotePrefix" !== t[1].type &&
                        "blockQuotePrefixWhitespace" !== t[1].type &&
                        "blockQuoteMarker" !== t[1].type &&
                        "listItemIndent" !== t[1].type
                      )
                        break;
                    }
                    o && (!i || o < i) && (r._spread = !0),
                      (r.end = Object.assign({}, i ? e[i][1].start : t[1].end)),
                      e.splice(i || a, 0, ["exit", r, t[2]]),
                      a++,
                      n++;
                  }
                  if ("listItemPrefix" === t[1].type) {
                    const i = {
                      type: "listItem",
                      _spread: !1,
                      start: Object.assign({}, t[1].start),
                      end: void 0,
                    };
                    (r = i),
                      e.splice(a, 0, ["enter", i, t[2]]),
                      a++,
                      n++,
                      (o = void 0),
                      (s = !0);
                  }
                }
              }
              return (e[t][1]._spread = c), n;
            }
            function o(e, t) {
              return n;
              function n(n) {
                l.call(this, e(n), n), t && t.call(this, n);
              }
            }
            function a() {
              this.stack.push({ type: "fragment", children: [] });
            }
            function l(e, t, n) {
              this.stack[this.stack.length - 1].children.push(e),
                this.stack.push(e),
                this.tokenStack.push([t, n]),
                (e.position = { start: qe(t.start), end: void 0 });
            }
            function c(e) {
              return t;
              function t(t) {
                e && e.call(this, t), u.call(this, t);
              }
            }
            function u(e, t) {
              const n = this.stack.pop(),
                r = this.tokenStack.pop();
              if (!r)
                throw new Error(
                  "Cannot close `" +
                    e.type +
                    "` (" +
                    He({ start: e.start, end: e.end }) +
                    "): it\u2019s not open"
                );
              if (r[0].type !== e.type)
                if (t) t.call(this, e, r[0]);
                else {
                  (r[1] || Xe).call(this, e, r[0]);
                }
              n.position.end = qe(e.end);
            }
            function p() {
              return (0, s.B)(this.stack.pop());
            }
            function d() {
              this.data.expectingFirstListItemValue = !0;
            }
            function h(e) {
              if (this.data.expectingFirstListItemValue) {
                (this.stack[this.stack.length - 2].start = Number.parseInt(
                  this.sliceSerialize(e),
                  10
                )),
                  (this.data.expectingFirstListItemValue = void 0);
              }
            }
            function f() {
              const e = this.resume();
              this.stack[this.stack.length - 1].lang = e;
            }
            function m() {
              const e = this.resume();
              this.stack[this.stack.length - 1].meta = e;
            }
            function g() {
              this.data.flowCodeInside ||
                (this.buffer(), (this.data.flowCodeInside = !0));
            }
            function y() {
              const e = this.resume();
              (this.stack[this.stack.length - 1].value = e.replace(
                /^(\r?\n|\r)|(\r?\n|\r)$/g,
                ""
              )),
                (this.data.flowCodeInside = void 0);
            }
            function k() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e.replace(
                /(\r?\n|\r)$/g,
                ""
              );
            }
            function b(e) {
              const t = this.resume(),
                n = this.stack[this.stack.length - 1];
              (n.label = t),
                (n.identifier = X(this.sliceSerialize(e)).toLowerCase());
            }
            function v() {
              const e = this.resume();
              this.stack[this.stack.length - 1].title = e;
            }
            function w() {
              const e = this.resume();
              this.stack[this.stack.length - 1].url = e;
            }
            function S(e) {
              const t = this.stack[this.stack.length - 1];
              if (!t.depth) {
                const n = this.sliceSerialize(e).length;
                t.depth = n;
              }
            }
            function x() {
              this.data.setextHeadingSlurpLineEnding = !0;
            }
            function E(e) {
              this.stack[this.stack.length - 1].depth =
                61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
            }
            function N() {
              this.data.setextHeadingSlurpLineEnding = void 0;
            }
            function T(e) {
              const t = this.stack[this.stack.length - 1].children;
              let n = t[t.length - 1];
              (n && "text" === n.type) ||
                ((n = ae()),
                (n.position = { start: qe(e.start), end: void 0 }),
                t.push(n)),
                this.stack.push(n);
            }
            function A(e) {
              const t = this.stack.pop();
              (t.value += this.sliceSerialize(e)), (t.position.end = qe(e.end));
            }
            function I(e) {
              const n = this.stack[this.stack.length - 1];
              if (this.data.atHardBreak) {
                return (
                  (n.children[n.children.length - 1].position.end = qe(e.end)),
                  void (this.data.atHardBreak = void 0)
                );
              }
              !this.data.setextHeadingSlurpLineEnding &&
                t.canContainEols.includes(n.type) &&
                (T.call(this, e), A.call(this, e));
            }
            function C() {
              this.data.atHardBreak = !0;
            }
            function O() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e;
            }
            function R() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e;
            }
            function M() {
              const e = this.resume();
              this.stack[this.stack.length - 1].value = e;
            }
            function L() {
              const e = this.stack[this.stack.length - 1];
              if (this.data.inReference) {
                const t = this.data.referenceType || "shortcut";
                (e.type += "Reference"),
                  (e.referenceType = t),
                  delete e.url,
                  delete e.title;
              } else delete e.identifier, delete e.label;
              this.data.referenceType = void 0;
            }
            function F() {
              const e = this.stack[this.stack.length - 1];
              if (this.data.inReference) {
                const t = this.data.referenceType || "shortcut";
                (e.type += "Reference"),
                  (e.referenceType = t),
                  delete e.url,
                  delete e.title;
              } else delete e.identifier, delete e.label;
              this.data.referenceType = void 0;
            }
            function _(e) {
              const t = this.sliceSerialize(e),
                n = this.stack[this.stack.length - 2];
              (n.label = je(t)), (n.identifier = X(t).toLowerCase());
            }
            function D() {
              const e = this.stack[this.stack.length - 1],
                t = this.resume(),
                n = this.stack[this.stack.length - 1];
              if (((this.data.inReference = !0), "link" === n.type)) {
                const t = e.children;
                n.children = t;
              } else n.alt = t;
            }
            function P() {
              const e = this.resume();
              this.stack[this.stack.length - 1].url = e;
            }
            function z() {
              const e = this.resume();
              this.stack[this.stack.length - 1].title = e;
            }
            function B() {
              this.data.inReference = void 0;
            }
            function $() {
              this.data.referenceType = "collapsed";
            }
            function j(e) {
              const t = this.resume(),
                n = this.stack[this.stack.length - 1];
              (n.label = t),
                (n.identifier = X(this.sliceSerialize(e)).toLowerCase()),
                (this.data.referenceType = "full");
            }
            function U(e) {
              this.data.characterReferenceType = e.type;
            }
            function H(e) {
              const t = this.sliceSerialize(e),
                n = this.data.characterReferenceType;
              let r;
              if (n)
                (r = (function (e, t) {
                  const n = Number.parseInt(e, t);
                  return n < 9 ||
                    11 === n ||
                    (n > 13 && n < 32) ||
                    (n > 126 && n < 160) ||
                    (n > 55295 && n < 57344) ||
                    (n > 64975 && n < 65008) ||
                    65535 === (65535 & n) ||
                    65534 === (65535 & n) ||
                    n > 1114111
                    ? "\ufffd"
                    : String.fromCodePoint(n);
                })(t, "characterReferenceMarkerNumeric" === n ? 10 : 16)),
                  (this.data.characterReferenceType = void 0);
              else {
                r = (0, de.T)(t);
              }
              const i = this.stack.pop();
              (i.value += r), (i.position.end = qe(e.end));
            }
            function J(e) {
              A.call(this, e);
              this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
            }
            function W(e) {
              A.call(this, e);
              this.stack[this.stack.length - 1].url =
                "mailto:" + this.sliceSerialize(e);
            }
            function G() {
              return { type: "blockquote", children: [] };
            }
            function V() {
              return { type: "code", lang: null, meta: null, value: "" };
            }
            function Y() {
              return { type: "inlineCode", value: "" };
            }
            function q() {
              return {
                type: "definition",
                identifier: "",
                label: null,
                title: null,
                url: "",
              };
            }
            function Z() {
              return { type: "emphasis", children: [] };
            }
            function K() {
              return { type: "heading", depth: 0, children: [] };
            }
            function Q() {
              return { type: "break" };
            }
            function ee() {
              return { type: "html", value: "" };
            }
            function te() {
              return { type: "image", title: null, url: "", alt: null };
            }
            function ne() {
              return { type: "link", title: null, url: "", children: [] };
            }
            function re(e) {
              return {
                type: "list",
                ordered: "listOrdered" === e.type,
                start: null,
                spread: e._spread,
                children: [],
              };
            }
            function ie(e) {
              return {
                type: "listItem",
                spread: e._spread,
                checked: null,
                children: [],
              };
            }
            function oe() {
              return { type: "paragraph", children: [] };
            }
            function se() {
              return { type: "strong", children: [] };
            }
            function ae() {
              return { type: "text", value: "" };
            }
            function le() {
              return { type: "thematicBreak" };
            }
          })(n)(
            (function (e) {
              for (; !p(e); );
              return e;
            })(
              ze(n)
                .document()
                .write(
                  (function () {
                    let e,
                      t = 1,
                      n = "",
                      r = !0;
                    return function (i, o, s) {
                      const a = [];
                      let l, c, u, p, d;
                      for (
                        i =
                          n +
                          ("string" === typeof i
                            ? i.toString()
                            : new TextDecoder(o || void 0).decode(i)),
                          u = 0,
                          n = "",
                          r && (65279 === i.charCodeAt(0) && u++, (r = void 0));
                        u < i.length;

                      ) {
                        if (
                          ((Be.lastIndex = u),
                          (l = Be.exec(i)),
                          (p = l && void 0 !== l.index ? l.index : i.length),
                          (d = i.charCodeAt(p)),
                          !l)
                        ) {
                          n = i.slice(u);
                          break;
                        }
                        if (10 === d && u === p && e) a.push(-3), (e = void 0);
                        else
                          switch (
                            (e && (a.push(-5), (e = void 0)),
                            u < p && (a.push(i.slice(u, p)), (t += p - u)),
                            d)
                          ) {
                            case 0:
                              a.push(65533), t++;
                              break;
                            case 9:
                              for (
                                c = 4 * Math.ceil(t / 4), a.push(-2);
                                t++ < c;

                              )
                                a.push(-1);
                              break;
                            case 10:
                              a.push(-4), (t = 1);
                              break;
                            default:
                              (e = !0), (t = 1);
                          }
                        u = p + 1;
                      }
                      return (
                        s && (e && a.push(-5), n && a.push(n), a.push(null)), a
                      );
                    };
                  })()(e, t, !0)
                )
            )
          )
        );
      }
      function qe(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function Ze(e, t) {
        let n = -1;
        for (; ++n < t.length; ) {
          const r = t[n];
          Array.isArray(r) ? Ze(e, r) : Ke(e, r);
        }
      }
      function Ke(e, t) {
        let n;
        for (n in t)
          if (Ve.call(t, n))
            switch (n) {
              case "canContainEols": {
                const r = t[n];
                r && e[n].push(...r);
                break;
              }
              case "transforms": {
                const r = t[n];
                r && e[n].push(...r);
                break;
              }
              case "enter":
              case "exit": {
                const r = t[n];
                r && Object.assign(e[n], r);
                break;
              }
            }
      }
      function Xe(e, t) {
        throw e
          ? new Error(
              "Cannot close `" +
                e.type +
                "` (" +
                He({ start: e.start, end: e.end }) +
                "): a different token (`" +
                t.type +
                "`, " +
                He({ start: t.start, end: t.end }) +
                ") is open"
            )
          : new Error(
              "Cannot close document, a token (`" +
                t.type +
                "`, " +
                He({ start: t.start, end: t.end }) +
                ") is still open"
            );
      }
      function Qe(e) {
        const t = this;
        t.parser = function (n) {
          return Ye(n, {
            ...t.data("settings"),
            ...e,
            extensions: t.data("micromarkExtensions") || [],
            mdastExtensions: t.data("fromMarkdownExtensions") || [],
          });
        };
      }
      var et = n(629791);
      const tt = {}.hasOwnProperty;
      function nt(e, t) {
        let n,
          r = -1;
        if (t.extensions)
          for (; ++r < t.extensions.length; ) nt(e, t.extensions[r]);
        for (n in t)
          if (tt.call(t, n))
            switch (n) {
              case "extensions":
                break;
              case "unsafe":
              case "join":
                rt(e[n], t[n]);
                break;
              case "handlers":
                it(e[n], t[n]);
                break;
              default:
                e.options[n] = t[n];
            }
        return e;
      }
      function rt(e, t) {
        t && e.push(...t);
      }
      function it(e, t) {
        t && Object.assign(e, t);
      }
      function ot(e, t, n) {
        return ">" + (n ? "" : " ") + e;
      }
      function st(e, t) {
        return at(e, t.inConstruct, !0) && !at(e, t.notInConstruct, !1);
      }
      function at(e, t, n) {
        if (("string" === typeof t && (t = [t]), !t || 0 === t.length))
          return n;
        let r = -1;
        for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
        return !1;
      }
      function lt(e, t, n, r) {
        let i = -1;
        for (; ++i < n.unsafe.length; )
          if ("\n" === n.unsafe[i].character && st(n.stack, n.unsafe[i]))
            return /[ \t]/.test(r.before) ? "" : " ";
        return "\\\n";
      }
      var ct = n(63306);
      function ut(e, t) {
        return Boolean(
          !1 === t.options.fences &&
            e.value &&
            !e.lang &&
            /[^ \r\n]/.test(e.value) &&
            !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
        );
      }
      function pt(e, t, n) {
        return (n ? "" : "    ") + e;
      }
      function dt(e) {
        const t = e.options.quote || '"';
        if ('"' !== t && "'" !== t)
          throw new Error(
            "Cannot serialize title with `" +
              t +
              "` for `options.quote`, expected `\"`, or `'`"
          );
        return t;
      }
      function ht(e) {
        return "&#x" + e.toString(16).toUpperCase() + ";";
      }
      function ft(e, t, n) {
        const r = (0, we.r)(e),
          i = (0, we.r)(t);
        return void 0 === r
          ? void 0 === i
            ? "_" === n
              ? { inside: !0, outside: !0 }
              : { inside: !1, outside: !1 }
            : 1 === i
            ? { inside: !0, outside: !0 }
            : { inside: !1, outside: !0 }
          : 1 === r
          ? void 0 === i
            ? { inside: !1, outside: !1 }
            : 1 === i
            ? { inside: !0, outside: !0 }
            : { inside: !1, outside: !1 }
          : void 0 === i
          ? { inside: !1, outside: !1 }
          : 1 === i
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
      }
      function mt(e, t, n, r) {
        const i = (function (e) {
            const t = e.options.emphasis || "*";
            if ("*" !== t && "_" !== t)
              throw new Error(
                "Cannot serialize emphasis with `" +
                  t +
                  "` for `options.emphasis`, expected `*`, or `_`"
              );
            return t;
          })(n),
          o = n.enter("emphasis"),
          s = n.createTracker(r),
          a = s.move(i);
        let l = s.move(
          n.containerPhrasing(e, { after: i, before: a, ...s.current() })
        );
        const c = l.charCodeAt(0),
          u = ft(r.before.charCodeAt(r.before.length - 1), c, i);
        u.inside && (l = ht(c) + l.slice(1));
        const p = l.charCodeAt(l.length - 1),
          d = ft(r.after.charCodeAt(0), p, i);
        d.inside && (l = l.slice(0, -1) + ht(p));
        const h = s.move(i);
        return (
          o(),
          (n.attentionEncodeSurroundingInfo = {
            after: d.outside,
            before: u.outside,
          }),
          a + l + h
        );
      }
      mt.peek = function (e, t, n) {
        return n.options.emphasis || "*";
      };
      var gt = n(39892),
        yt = n(291325);
      function kt(e, t) {
        let n = !1;
        return (
          (0, gt.Vn)(e, function (e) {
            if (
              ("value" in e && /\r?\n|\r/.test(e.value)) ||
              "break" === e.type
            )
              return (n = !0), yt.BK;
          }),
          Boolean(
            (!e.depth || e.depth < 3) && (0, s.B)(e) && (t.options.setext || n)
          )
        );
      }
      function bt(e) {
        return e.value || "";
      }
      function vt(e, t, n, r) {
        const i = dt(n),
          o = '"' === i ? "Quote" : "Apostrophe",
          s = n.enter("image");
        let a = n.enter("label");
        const l = n.createTracker(r);
        let c = l.move("![");
        return (
          (c += l.move(
            n.safe(e.alt, { before: c, after: "]", ...l.current() })
          )),
          (c += l.move("](")),
          a(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((a = n.enter("destinationLiteral")),
              (c += l.move("<")),
              (c += l.move(
                n.safe(e.url, { before: c, after: ">", ...l.current() })
              )),
              (c += l.move(">")))
            : ((a = n.enter("destinationRaw")),
              (c += l.move(
                n.safe(e.url, {
                  before: c,
                  after: e.title ? " " : ")",
                  ...l.current(),
                })
              ))),
          a(),
          e.title &&
            ((a = n.enter(`title${o}`)),
            (c += l.move(" " + i)),
            (c += l.move(
              n.safe(e.title, { before: c, after: i, ...l.current() })
            )),
            (c += l.move(i)),
            a()),
          (c += l.move(")")),
          s(),
          c
        );
      }
      function wt(e, t, n, r) {
        const i = e.referenceType,
          o = n.enter("imageReference");
        let s = n.enter("label");
        const a = n.createTracker(r);
        let l = a.move("![");
        const c = n.safe(e.alt, { before: l, after: "]", ...a.current() });
        (l += a.move(c + "][")), s();
        const u = n.stack;
        (n.stack = []), (s = n.enter("reference"));
        const p = n.safe(n.associationId(e), {
          before: l,
          after: "]",
          ...a.current(),
        });
        return (
          s(),
          (n.stack = u),
          o(),
          "full" !== i && c && c === p
            ? "shortcut" === i
              ? (l = l.slice(0, -1))
              : (l += a.move("]"))
            : (l += a.move(p + "]")),
          l
        );
      }
      function St(e, t, n) {
        let r = e.value || "",
          i = "`",
          o = -1;
        for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++o < n.unsafe.length;

        ) {
          const e = n.unsafe[o],
            t = n.compilePattern(e);
          let i;
          if (e.atBreak)
            for (; (i = t.exec(r)); ) {
              let e = i.index;
              10 === r.charCodeAt(e) && 13 === r.charCodeAt(e - 1) && e--,
                (r = r.slice(0, e) + " " + r.slice(i.index + 1));
            }
        }
        return i + r + i;
      }
      function xt(e, t) {
        const n = (0, s.B)(e);
        return Boolean(
          !t.options.resourceLink &&
            e.url &&
            !e.title &&
            e.children &&
            1 === e.children.length &&
            "text" === e.children[0].type &&
            (n === e.url || "mailto:" + n === e.url) &&
            /^[a-z][a-z+.-]+:/i.test(e.url) &&
            !/[\0- <>\u007F]/.test(e.url)
        );
      }
      function Et(e, t, n, r) {
        const i = dt(n),
          o = '"' === i ? "Quote" : "Apostrophe",
          s = n.createTracker(r);
        let a, l;
        if (xt(e, n)) {
          const t = n.stack;
          (n.stack = []), (a = n.enter("autolink"));
          let r = s.move("<");
          return (
            (r += s.move(
              n.containerPhrasing(e, { before: r, after: ">", ...s.current() })
            )),
            (r += s.move(">")),
            a(),
            (n.stack = t),
            r
          );
        }
        (a = n.enter("link")), (l = n.enter("label"));
        let c = s.move("[");
        return (
          (c += s.move(
            n.containerPhrasing(e, { before: c, after: "](", ...s.current() })
          )),
          (c += s.move("](")),
          l(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((l = n.enter("destinationLiteral")),
              (c += s.move("<")),
              (c += s.move(
                n.safe(e.url, { before: c, after: ">", ...s.current() })
              )),
              (c += s.move(">")))
            : ((l = n.enter("destinationRaw")),
              (c += s.move(
                n.safe(e.url, {
                  before: c,
                  after: e.title ? " " : ")",
                  ...s.current(),
                })
              ))),
          l(),
          e.title &&
            ((l = n.enter(`title${o}`)),
            (c += s.move(" " + i)),
            (c += s.move(
              n.safe(e.title, { before: c, after: i, ...s.current() })
            )),
            (c += s.move(i)),
            l()),
          (c += s.move(")")),
          a(),
          c
        );
      }
      function Nt(e, t, n, r) {
        const i = e.referenceType,
          o = n.enter("linkReference");
        let s = n.enter("label");
        const a = n.createTracker(r);
        let l = a.move("[");
        const c = n.containerPhrasing(e, {
          before: l,
          after: "]",
          ...a.current(),
        });
        (l += a.move(c + "][")), s();
        const u = n.stack;
        (n.stack = []), (s = n.enter("reference"));
        const p = n.safe(n.associationId(e), {
          before: l,
          after: "]",
          ...a.current(),
        });
        return (
          s(),
          (n.stack = u),
          o(),
          "full" !== i && c && c === p
            ? "shortcut" === i
              ? (l = l.slice(0, -1))
              : (l += a.move("]"))
            : (l += a.move(p + "]")),
          l
        );
      }
      function Tt(e) {
        const t = e.options.bullet || "*";
        if ("*" !== t && "+" !== t && "-" !== t)
          throw new Error(
            "Cannot serialize items with `" +
              t +
              "` for `options.bullet`, expected `*`, `+`, or `-`"
          );
        return t;
      }
      function At(e) {
        const t = e.options.rule || "*";
        if ("*" !== t && "-" !== t && "_" !== t)
          throw new Error(
            "Cannot serialize rules with `" +
              t +
              "` for `options.rule`, expected `*`, `-`, or `_`"
          );
        return t;
      }
      (bt.peek = function () {
        return "<";
      }),
        (vt.peek = function () {
          return "!";
        }),
        (wt.peek = function () {
          return "!";
        }),
        (St.peek = function () {
          return "`";
        }),
        (Et.peek = function (e, t, n) {
          return xt(e, n) ? "<" : "[";
        }),
        (Nt.peek = function () {
          return "[";
        });
      var It = n(20745);
      function Ct(e, t, n, r) {
        const i = (function (e) {
            const t = e.options.strong || "*";
            if ("*" !== t && "_" !== t)
              throw new Error(
                "Cannot serialize strong with `" +
                  t +
                  "` for `options.strong`, expected `*`, or `_`"
              );
            return t;
          })(n),
          o = n.enter("strong"),
          s = n.createTracker(r),
          a = s.move(i + i);
        let l = s.move(
          n.containerPhrasing(e, { after: i, before: a, ...s.current() })
        );
        const c = l.charCodeAt(0),
          u = ft(r.before.charCodeAt(r.before.length - 1), c, i);
        u.inside && (l = ht(c) + l.slice(1));
        const p = l.charCodeAt(l.length - 1),
          d = ft(r.after.charCodeAt(0), p, i);
        d.inside && (l = l.slice(0, -1) + ht(p));
        const h = s.move(i + i);
        return (
          o(),
          (n.attentionEncodeSurroundingInfo = {
            after: d.outside,
            before: u.outside,
          }),
          a + l + h
        );
      }
      Ct.peek = function (e, t, n) {
        return n.options.strong || "*";
      };
      const Ot = {
          blockquote: function (e, t, n, r) {
            const i = n.enter("blockquote"),
              o = n.createTracker(r);
            o.move("> "), o.shift(2);
            const s = n.indentLines(n.containerFlow(e, o.current()), ot);
            return i(), s;
          },
          break: lt,
          code: function (e, t, n, r) {
            const i = (function (e) {
                const t = e.options.fence || "`";
                if ("`" !== t && "~" !== t)
                  throw new Error(
                    "Cannot serialize code with `" +
                      t +
                      "` for `options.fence`, expected `` ` `` or `~`"
                  );
                return t;
              })(n),
              o = e.value || "",
              s = "`" === i ? "GraveAccent" : "Tilde";
            if (ut(e, n)) {
              const e = n.enter("codeIndented"),
                t = n.indentLines(o, pt);
              return e(), t;
            }
            const a = n.createTracker(r),
              l = i.repeat(Math.max((0, ct.J)(o, i) + 1, 3)),
              c = n.enter("codeFenced");
            let u = a.move(l);
            if (e.lang) {
              const t = n.enter(`codeFencedLang${s}`);
              (u += a.move(
                n.safe(e.lang, {
                  before: u,
                  after: " ",
                  encode: ["`"],
                  ...a.current(),
                })
              )),
                t();
            }
            if (e.lang && e.meta) {
              const t = n.enter(`codeFencedMeta${s}`);
              (u += a.move(" ")),
                (u += a.move(
                  n.safe(e.meta, {
                    before: u,
                    after: "\n",
                    encode: ["`"],
                    ...a.current(),
                  })
                )),
                t();
            }
            return (
              (u += a.move("\n")),
              o && (u += a.move(o + "\n")),
              (u += a.move(l)),
              c(),
              u
            );
          },
          definition: function (e, t, n, r) {
            const i = dt(n),
              o = '"' === i ? "Quote" : "Apostrophe",
              s = n.enter("definition");
            let a = n.enter("label");
            const l = n.createTracker(r);
            let c = l.move("[");
            return (
              (c += l.move(
                n.safe(n.associationId(e), {
                  before: c,
                  after: "]",
                  ...l.current(),
                })
              )),
              (c += l.move("]: ")),
              a(),
              !e.url || /[\0- \u007F]/.test(e.url)
                ? ((a = n.enter("destinationLiteral")),
                  (c += l.move("<")),
                  (c += l.move(
                    n.safe(e.url, { before: c, after: ">", ...l.current() })
                  )),
                  (c += l.move(">")))
                : ((a = n.enter("destinationRaw")),
                  (c += l.move(
                    n.safe(e.url, {
                      before: c,
                      after: e.title ? " " : "\n",
                      ...l.current(),
                    })
                  ))),
              a(),
              e.title &&
                ((a = n.enter(`title${o}`)),
                (c += l.move(" " + i)),
                (c += l.move(
                  n.safe(e.title, { before: c, after: i, ...l.current() })
                )),
                (c += l.move(i)),
                a()),
              s(),
              c
            );
          },
          emphasis: mt,
          hardBreak: lt,
          heading: function (e, t, n, r) {
            const i = Math.max(Math.min(6, e.depth || 1), 1),
              o = n.createTracker(r);
            if (kt(e, n)) {
              const t = n.enter("headingSetext"),
                r = n.enter("phrasing"),
                s = n.containerPhrasing(e, {
                  ...o.current(),
                  before: "\n",
                  after: "\n",
                });
              return (
                r(),
                t(),
                s +
                  "\n" +
                  (1 === i ? "=" : "-").repeat(
                    s.length -
                      (Math.max(s.lastIndexOf("\r"), s.lastIndexOf("\n")) + 1)
                  )
              );
            }
            const s = "#".repeat(i),
              a = n.enter("headingAtx"),
              l = n.enter("phrasing");
            o.move(s + " ");
            let c = n.containerPhrasing(e, {
              before: "# ",
              after: "\n",
              ...o.current(),
            });
            return (
              /^[\t ]/.test(c) && (c = ht(c.charCodeAt(0)) + c.slice(1)),
              (c = c ? s + " " + c : s),
              n.options.closeAtx && (c += " " + s),
              l(),
              a(),
              c
            );
          },
          html: bt,
          image: vt,
          imageReference: wt,
          inlineCode: St,
          link: Et,
          linkReference: Nt,
          list: function (e, t, n, r) {
            const i = n.enter("list"),
              o = n.bulletCurrent;
            let s = e.ordered
              ? (function (e) {
                  const t = e.options.bulletOrdered || ".";
                  if ("." !== t && ")" !== t)
                    throw new Error(
                      "Cannot serialize items with `" +
                        t +
                        "` for `options.bulletOrdered`, expected `.` or `)`"
                    );
                  return t;
                })(n)
              : Tt(n);
            const a = e.ordered
              ? "." === s
                ? ")"
                : "."
              : (function (e) {
                  const t = Tt(e),
                    n = e.options.bulletOther;
                  if (!n) return "*" === t ? "-" : "*";
                  if ("*" !== n && "+" !== n && "-" !== n)
                    throw new Error(
                      "Cannot serialize items with `" +
                        n +
                        "` for `options.bulletOther`, expected `*`, `+`, or `-`"
                    );
                  if (n === t)
                    throw new Error(
                      "Expected `bullet` (`" +
                        t +
                        "`) and `bulletOther` (`" +
                        n +
                        "`) to be different"
                    );
                  return n;
                })(n);
            let l = !(!t || !n.bulletLastUsed) && s === n.bulletLastUsed;
            if (!e.ordered) {
              const t = e.children ? e.children[0] : void 0;
              if (
                (("*" !== s && "-" !== s) ||
                  !t ||
                  (t.children && t.children[0]) ||
                  "list" !== n.stack[n.stack.length - 1] ||
                  "listItem" !== n.stack[n.stack.length - 2] ||
                  "list" !== n.stack[n.stack.length - 3] ||
                  "listItem" !== n.stack[n.stack.length - 4] ||
                  0 !== n.indexStack[n.indexStack.length - 1] ||
                  0 !== n.indexStack[n.indexStack.length - 2] ||
                  0 !== n.indexStack[n.indexStack.length - 3] ||
                  (l = !0),
                At(n) === s && t)
              ) {
                let t = -1;
                for (; ++t < e.children.length; ) {
                  const n = e.children[t];
                  if (
                    n &&
                    "listItem" === n.type &&
                    n.children &&
                    n.children[0] &&
                    "thematicBreak" === n.children[0].type
                  ) {
                    l = !0;
                    break;
                  }
                }
              }
            }
            l && (s = a), (n.bulletCurrent = s);
            const c = n.containerFlow(e, r);
            return (n.bulletLastUsed = s), (n.bulletCurrent = o), i(), c;
          },
          listItem: function (e, t, n, r) {
            const i = (function (e) {
              const t = e.options.listItemIndent || "one";
              if ("tab" !== t && "one" !== t && "mixed" !== t)
                throw new Error(
                  "Cannot serialize items with `" +
                    t +
                    "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
                );
              return t;
            })(n);
            let o = n.bulletCurrent || Tt(n);
            t &&
              "list" === t.type &&
              t.ordered &&
              (o =
                ("number" === typeof t.start && t.start > -1 ? t.start : 1) +
                (!1 === n.options.incrementListMarker
                  ? 0
                  : t.children.indexOf(e)) +
                o);
            let s = o.length + 1;
            ("tab" === i ||
              ("mixed" === i &&
                ((t && "list" === t.type && t.spread) || e.spread))) &&
              (s = 4 * Math.ceil(s / 4));
            const a = n.createTracker(r);
            a.move(o + " ".repeat(s - o.length)), a.shift(s);
            const l = n.enter("listItem"),
              c = n.indentLines(
                n.containerFlow(e, a.current()),
                function (e, t, n) {
                  if (t) return (n ? "" : " ".repeat(s)) + e;
                  return (n ? o : o + " ".repeat(s - o.length)) + e;
                }
              );
            return l(), c;
          },
          paragraph: function (e, t, n, r) {
            const i = n.enter("paragraph"),
              o = n.enter("phrasing"),
              s = n.containerPhrasing(e, r);
            return o(), i(), s;
          },
          root: function (e, t, n, r) {
            const i = e.children.some(function (e) {
              return (0, It.w)(e);
            });
            return (i ? n.containerPhrasing : n.containerFlow).call(n, e, r);
          },
          strong: Ct,
          text: function (e, t, n, r) {
            return n.safe(e.value, r);
          },
          thematicBreak: function (e, t, n) {
            const r = (At(n) + (n.options.ruleSpaces ? " " : "")).repeat(
              (function (e) {
                const t = e.options.ruleRepetition || 3;
                if (t < 3)
                  throw new Error(
                    "Cannot serialize rules with repetition `" +
                      t +
                      "` for `options.ruleRepetition`, expected `3` or more"
                  );
                return t;
              })(n)
            );
            return n.options.ruleSpaces ? r.slice(0, -1) : r;
          },
        },
        Rt = [
          function (e, t, n, r) {
            if (
              "code" === t.type &&
              ut(t, r) &&
              ("list" === e.type || (e.type === t.type && ut(e, r)))
            )
              return !1;
            if ("spread" in n && "boolean" === typeof n.spread) {
              if (
                "paragraph" === e.type &&
                (e.type === t.type ||
                  "definition" === t.type ||
                  ("heading" === t.type && kt(t, r)))
              )
                return;
              return n.spread ? 1 : 0;
            }
          },
        ];
      const Mt = [
          "autolink",
          "destinationLiteral",
          "destinationRaw",
          "reference",
          "titleQuote",
          "titleApostrophe",
        ],
        Lt = [
          { character: "\t", after: "[\\r\\n]", inConstruct: "phrasing" },
          { character: "\t", before: "[\\r\\n]", inConstruct: "phrasing" },
          {
            character: "\t",
            inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"],
          },
          {
            character: "\r",
            inConstruct: [
              "codeFencedLangGraveAccent",
              "codeFencedLangTilde",
              "codeFencedMetaGraveAccent",
              "codeFencedMetaTilde",
              "destinationLiteral",
              "headingAtx",
            ],
          },
          {
            character: "\n",
            inConstruct: [
              "codeFencedLangGraveAccent",
              "codeFencedLangTilde",
              "codeFencedMetaGraveAccent",
              "codeFencedMetaTilde",
              "destinationLiteral",
              "headingAtx",
            ],
          },
          { character: " ", after: "[\\r\\n]", inConstruct: "phrasing" },
          { character: " ", before: "[\\r\\n]", inConstruct: "phrasing" },
          {
            character: " ",
            inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"],
          },
          {
            character: "!",
            after: "\\[",
            inConstruct: "phrasing",
            notInConstruct: Mt,
          },
          { character: '"', inConstruct: "titleQuote" },
          { atBreak: !0, character: "#" },
          { character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" },
          { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" },
          { character: "'", inConstruct: "titleApostrophe" },
          { character: "(", inConstruct: "destinationRaw" },
          {
            before: "\\]",
            character: "(",
            inConstruct: "phrasing",
            notInConstruct: Mt,
          },
          { atBreak: !0, before: "\\d+", character: ")" },
          { character: ")", inConstruct: "destinationRaw" },
          { atBreak: !0, character: "*", after: "(?:[ \t\r\n*])" },
          { character: "*", inConstruct: "phrasing", notInConstruct: Mt },
          { atBreak: !0, character: "+", after: "(?:[ \t\r\n])" },
          { atBreak: !0, character: "-", after: "(?:[ \t\r\n-])" },
          {
            atBreak: !0,
            before: "\\d+",
            character: ".",
            after: "(?:[ \t\r\n]|$)",
          },
          { atBreak: !0, character: "<", after: "[!/?A-Za-z]" },
          {
            character: "<",
            after: "[!/?A-Za-z]",
            inConstruct: "phrasing",
            notInConstruct: Mt,
          },
          { character: "<", inConstruct: "destinationLiteral" },
          { atBreak: !0, character: "=" },
          { atBreak: !0, character: ">" },
          { character: ">", inConstruct: "destinationLiteral" },
          { atBreak: !0, character: "[" },
          { character: "[", inConstruct: "phrasing", notInConstruct: Mt },
          { character: "[", inConstruct: ["label", "reference"] },
          { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" },
          { character: "]", inConstruct: ["label", "reference"] },
          { atBreak: !0, character: "_" },
          { character: "_", inConstruct: "phrasing", notInConstruct: Mt },
          { atBreak: !0, character: "`" },
          {
            character: "`",
            inConstruct: [
              "codeFencedLangGraveAccent",
              "codeFencedMetaGraveAccent",
            ],
          },
          { character: "`", inConstruct: "phrasing", notInConstruct: Mt },
          { atBreak: !0, character: "~" },
        ];
      function Ft(e) {
        return e.label || !e.identifier ? e.label || "" : je(e.identifier);
      }
      function _t(e) {
        if (!e._compiled) {
          const t =
            (e.atBreak ? "[\\r\\n][\\t ]*" : "") +
            (e.before ? "(?:" + e.before + ")" : "");
          e._compiled = new RegExp(
            (t ? "(" + t + ")" : "") +
              (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") +
              e.character +
              (e.after ? "(?:" + e.after + ")" : ""),
            "g"
          );
        }
        return e._compiled;
      }
      function Dt(e, t, n, r) {
        let i = r.join.length;
        for (; i--; ) {
          const o = r.join[i](e, t, n, r);
          if (!0 === o || 1 === o) break;
          if ("number" === typeof o) return "\n".repeat(1 + o);
          if (!1 === o) return "\n\n\x3c!----\x3e\n\n";
        }
        return "\n\n";
      }
      const Pt = /\r?\n|\r/g;
      function zt(e, t) {
        const n = [];
        let r,
          i = 0,
          o = 0;
        for (; (r = Pt.exec(e)); )
          s(e.slice(i, r.index)),
            n.push(r[0]),
            (i = r.index + r[0].length),
            o++;
        return s(e.slice(i)), n.join("");
        function s(e) {
          n.push(t(e, o, !e));
        }
      }
      function Bt(e, t) {
        return e - t;
      }
      function $t(e, t) {
        const n = /\\(?=[!-/:-@[-`{-~])/g,
          r = [],
          i = [],
          o = e + t;
        let s,
          a = -1,
          l = 0;
        for (; (s = n.exec(o)); ) r.push(s.index);
        for (; ++a < r.length; )
          l !== r[a] && i.push(e.slice(l, r[a])), i.push("\\"), (l = r[a]);
        return i.push(e.slice(l)), i.join("");
      }
      function jt(e) {
        const t = e || {},
          n = t.now || {};
        let r = t.lineShift || 0,
          i = n.line || 1,
          o = n.column || 1;
        return {
          move: function (e) {
            const t = e || "",
              n = t.split(/\r?\n|\r/g),
              s = n[n.length - 1];
            return (
              (i += n.length - 1),
              (o = 1 === n.length ? o + s.length : 1 + s.length + r),
              t
            );
          },
          current: function () {
            return { now: { line: i, column: o }, lineShift: r };
          },
          shift: function (e) {
            r += e;
          },
        };
      }
      function Ut(e, t) {
        const n = {
          associationId: Ft,
          containerPhrasing: Gt,
          containerFlow: Vt,
          createTracker: jt,
          compilePattern: _t,
          enter: function (e) {
            return (
              n.stack.push(e),
              function () {
                n.stack.pop();
              }
            );
          },
          handlers: { ...Ot },
          handle: void 0,
          indentLines: zt,
          indexStack: [],
          join: [...Rt],
          options: {},
          safe: Yt,
          stack: [],
          unsafe: [...Lt],
        };
        nt(n, t || {}),
          n.options.tightDefinitions && n.join.push(Wt),
          (n.handle = (0, et.z)("type", {
            invalid: Ht,
            unknown: Jt,
            handlers: n.handlers,
          }));
        let r = n.handle(e, void 0, n, {
          before: "\n",
          after: "\n",
          now: { line: 1, column: 1 },
          lineShift: 0,
        });
        return (
          r &&
            10 !== r.charCodeAt(r.length - 1) &&
            13 !== r.charCodeAt(r.length - 1) &&
            (r += "\n"),
          r
        );
      }
      function Ht(e) {
        throw new Error("Cannot handle value `" + e + "`, expected node");
      }
      function Jt(e) {
        throw new Error("Cannot handle unknown node `" + e.type + "`");
      }
      function Wt(e, t) {
        if ("definition" === e.type && e.type === t.type) return 0;
      }
      function Gt(e, t) {
        return (function (e, t, n) {
          const r = t.indexStack,
            i = e.children || [],
            o = [];
          let s,
            a = -1,
            l = n.before;
          r.push(-1);
          let c = t.createTracker(n);
          for (; ++a < i.length; ) {
            const u = i[a];
            let p;
            if (((r[r.length - 1] = a), a + 1 < i.length)) {
              let n = t.handle.handlers[i[a + 1].type];
              n && n.peek && (n = n.peek),
                (p = n
                  ? n(i[a + 1], e, t, {
                      before: "",
                      after: "",
                      ...c.current(),
                    }).charAt(0)
                  : "");
            } else p = n.after;
            o.length > 0 &&
              ("\r" === l || "\n" === l) &&
              "html" === u.type &&
              ((o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " ")),
              (l = " "),
              (c = t.createTracker(n)),
              c.move(o.join("")));
            let d = t.handle(u, e, t, { ...c.current(), after: p, before: l });
            s && s === d.slice(0, 1) && (d = ht(s.charCodeAt(0)) + d.slice(1));
            const h = t.attentionEncodeSurroundingInfo;
            (t.attentionEncodeSurroundingInfo = void 0),
              (s = void 0),
              h &&
                (o.length > 0 &&
                  h.before &&
                  l === o[o.length - 1].slice(-1) &&
                  (o[o.length - 1] =
                    o[o.length - 1].slice(0, -1) + ht(l.charCodeAt(0))),
                h.after && (s = p)),
              c.move(d),
              o.push(d),
              (l = d.slice(-1));
          }
          return r.pop(), o.join("");
        })(e, this, t);
      }
      function Vt(e, t) {
        return (function (e, t, n) {
          const r = t.indexStack,
            i = e.children || [],
            o = t.createTracker(n),
            s = [];
          let a = -1;
          for (r.push(-1); ++a < i.length; ) {
            const n = i[a];
            (r[r.length - 1] = a),
              s.push(
                o.move(
                  t.handle(n, e, t, {
                    before: "\n",
                    after: "\n",
                    ...o.current(),
                  })
                )
              ),
              "list" !== n.type && (t.bulletLastUsed = void 0),
              a < i.length - 1 && s.push(o.move(Dt(n, i[a + 1], e, t)));
          }
          return r.pop(), s.join("");
        })(e, this, t);
      }
      function Yt(e, t) {
        return (function (e, t, n) {
          const r = (n.before || "") + (t || "") + (n.after || ""),
            i = [],
            o = [],
            s = {};
          let a = -1;
          for (; ++a < e.unsafe.length; ) {
            const t = e.unsafe[a];
            if (!st(e.stack, t)) continue;
            const n = e.compilePattern(t);
            let o;
            for (; (o = n.exec(r)); ) {
              const e = "before" in t || Boolean(t.atBreak),
                n = "after" in t,
                r = o.index + (e ? o[1].length : 0);
              i.includes(r)
                ? (s[r].before && !e && (s[r].before = !1),
                  s[r].after && !n && (s[r].after = !1))
                : (i.push(r), (s[r] = { before: e, after: n }));
            }
          }
          i.sort(Bt);
          let l = n.before ? n.before.length : 0;
          const c = r.length - (n.after ? n.after.length : 0);
          for (a = -1; ++a < i.length; ) {
            const e = i[a];
            e < l ||
              e >= c ||
              (e + 1 < c &&
                i[a + 1] === e + 1 &&
                s[e].after &&
                !s[e + 1].before &&
                !s[e + 1].after) ||
              (i[a - 1] === e - 1 &&
                s[e].before &&
                !s[e - 1].before &&
                !s[e - 1].after) ||
              (l !== e && o.push($t(r.slice(l, e), "\\")),
              (l = e),
              !/[!-/:-@[-`{-~]/.test(r.charAt(e)) ||
              (n.encode && n.encode.includes(r.charAt(e)))
                ? (o.push(ht(r.charCodeAt(e))), l++)
                : o.push("\\"));
          }
          return o.push($t(r.slice(l, c), n.after)), o.join("");
        })(this, e, t);
      }
      function qt(e) {
        const t = this;
        t.compiler = function (n) {
          return Ut(n, {
            ...t.data("settings"),
            ...e,
            extensions: t.data("toMarkdownExtensions") || [],
          });
        };
      }
      var Zt = n(708356),
        Kt = n(750229),
        Xt = n(763436),
        Qt = n(937814),
        en = n(134994);
      function tn(e) {
        return rn(e && e.line) + ":" + rn(e && e.column);
      }
      function nn(e) {
        return tn(e && e.start) + "-" + tn(e && e.end);
      }
      function rn(e) {
        return e && "number" === typeof e ? e : 1;
      }
      class on extends Error {
        constructor(e, t, n) {
          super(), "string" === typeof t && ((n = t), (t = void 0));
          let r = "",
            i = {},
            o = !1;
          if (
            (t &&
              (i =
                ("line" in t && "column" in t) || ("start" in t && "end" in t)
                  ? { place: t }
                  : "type" in t
                  ? { ancestors: [t], place: t.position }
                  : { ...t }),
            "string" === typeof e
              ? (r = e)
              : !i.cause && e && ((o = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && "string" === typeof n)
          ) {
            const e = n.indexOf(":");
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            const e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          const s = i.place && "start" in i.place ? i.place.start : i.place;
          var a;
          (this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = s ? s.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = s ? s.line : void 0),
            (this.name =
              ((a = i.place) && "object" === typeof a
                ? "position" in a || "type" in a
                  ? nn(a.position)
                  : "start" in a || "end" in a
                  ? nn(a)
                  : "line" in a || "column" in a
                  ? tn(a)
                  : ""
                : "") || "1:1"),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              o && i.cause && "string" === typeof i.cause.stack
                ? i.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      }
      (on.prototype.file = ""),
        (on.prototype.name = ""),
        (on.prototype.reason = ""),
        (on.prototype.message = ""),
        (on.prototype.stack = ""),
        (on.prototype.column = void 0),
        (on.prototype.line = void 0),
        (on.prototype.ancestors = void 0),
        (on.prototype.cause = void 0),
        (on.prototype.fatal = void 0),
        (on.prototype.place = void 0),
        (on.prototype.ruleId = void 0),
        (on.prototype.source = void 0);
      const sn = {
        basename: function (e, t) {
          if (void 0 !== t && "string" !== typeof t)
            throw new TypeError('"ext" argument must be a string');
          an(e);
          let n,
            r = 0,
            i = -1,
            o = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; o--; )
              if (47 === e.codePointAt(o)) {
                if (n) {
                  r = o + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = o + 1));
            return i < 0 ? "" : e.slice(r, i);
          }
          if (t === e) return "";
          let s = -1,
            a = t.length - 1;
          for (; o--; )
            if (47 === e.codePointAt(o)) {
              if (n) {
                r = o + 1;
                break;
              }
            } else
              s < 0 && ((n = !0), (s = o + 1)),
                a > -1 &&
                  (e.codePointAt(o) === t.codePointAt(a--)
                    ? a < 0 && (i = o)
                    : ((a = -1), (i = s)));
          r === i ? (i = s) : i < 0 && (i = e.length);
          return e.slice(r, i);
        },
        dirname: function (e) {
          if ((an(e), 0 === e.length)) return ".";
          let t,
            n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
            ? "//"
            : e.slice(0, n);
        },
        extname: function (e) {
          an(e);
          let t,
            n = e.length,
            r = -1,
            i = 0,
            o = -1,
            s = 0;
          for (; n--; ) {
            const a = e.codePointAt(n);
            if (47 !== a)
              r < 0 && ((t = !0), (r = n + 1)),
                46 === a
                  ? o < 0
                    ? (o = n)
                    : 1 !== s && (s = 1)
                  : o > -1 && (s = -1);
            else if (t) {
              i = n + 1;
              break;
            }
          }
          if (
            o < 0 ||
            r < 0 ||
            0 === s ||
            (1 === s && o === r - 1 && o === i + 1)
          )
            return "";
          return e.slice(o, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            an(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                an(e);
                const t = 47 === e.codePointAt(0);
                let n = (function (e, t) {
                  let n,
                    r,
                    i = "",
                    o = 0,
                    s = -1,
                    a = 0,
                    l = -1;
                  for (; ++l <= e.length; ) {
                    if (l < e.length) n = e.codePointAt(l);
                    else {
                      if (47 === n) break;
                      n = 47;
                    }
                    if (47 === n) {
                      if (s === l - 1 || 1 === a);
                      else if (s !== l - 1 && 2 === a) {
                        if (
                          i.length < 2 ||
                          2 !== o ||
                          46 !== i.codePointAt(i.length - 1) ||
                          46 !== i.codePointAt(i.length - 2)
                        )
                          if (i.length > 2) {
                            if (
                              ((r = i.lastIndexOf("/")), r !== i.length - 1)
                            ) {
                              r < 0
                                ? ((i = ""), (o = 0))
                                : ((i = i.slice(0, r)),
                                  (o = i.length - 1 - i.lastIndexOf("/"))),
                                (s = l),
                                (a = 0);
                              continue;
                            }
                          } else if (i.length > 0) {
                            (i = ""), (o = 0), (s = l), (a = 0);
                            continue;
                          }
                        t && ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
                      } else
                        i.length > 0
                          ? (i += "/" + e.slice(s + 1, l))
                          : (i = e.slice(s + 1, l)),
                          (o = l - s - 1);
                      (s = l), (a = 0);
                    } else 46 === n && a > -1 ? a++ : (a = -1);
                  }
                  return i;
                })(e, !t);
                0 !== n.length || t || (n = ".");
                n.length > 0 &&
                  47 === e.codePointAt(e.length - 1) &&
                  (n += "/");
                return t ? "/" + n : n;
              })(t);
        },
        sep: "/",
      };
      function an(e) {
        if ("string" !== typeof e)
          throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      const ln = {
        cwd: function () {
          return "/";
        },
      };
      function cn(e) {
        return Boolean(
          null !== e &&
            "object" === typeof e &&
            "href" in e &&
            e.href &&
            "protocol" in e &&
            e.protocol &&
            void 0 === e.auth
        );
      }
      function un(e) {
        if ("string" === typeof e) e = new URL(e);
        else if (!cn(e)) {
          const t = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
              e +
              "`"
          );
          throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
        }
        if ("file:" !== e.protocol) {
          const e = new TypeError("The URL must be of scheme file");
          throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
        }
        return (function (e) {
          if ("" !== e.hostname) {
            const e = new TypeError(
              'File URL host must be "localhost" or empty on darwin'
            );
            throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
          }
          const t = e.pathname;
          let n = -1;
          for (; ++n < t.length; )
            if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
              const e = t.codePointAt(n + 2);
              if (70 === e || 102 === e) {
                const e = new TypeError(
                  "File URL path must not include encoded / characters"
                );
                throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
              }
            }
          return decodeURIComponent(t);
        })(e);
      }
      const pn = ["history", "path", "basename", "stem", "extname", "dirname"];
      class dn {
        constructor(e) {
          let t;
          (t = e
            ? cn(e)
              ? { path: e }
              : "string" === typeof e ||
                (function (e) {
                  return Boolean(
                    e &&
                      "object" === typeof e &&
                      "byteLength" in e &&
                      "byteOffset" in e
                  );
                })(e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = ln.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let n,
            r = -1;
          for (; ++r < pn.length; ) {
            const e = pn[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) pn.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" === typeof this.path
            ? sn.basename(this.path)
            : void 0;
        }
        set basename(e) {
          fn(e, "basename"),
            hn(e, "basename"),
            (this.path = sn.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" === typeof this.path ? sn.dirname(this.path) : void 0;
        }
        set dirname(e) {
          mn(this.basename, "dirname"),
            (this.path = sn.join(e || "", this.basename));
        }
        get extname() {
          return "string" === typeof this.path ? sn.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((hn(e, "extname"), mn(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw new Error("`extname` cannot contain multiple dots");
          }
          this.path = sn.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          cn(e) && (e = un(e)),
            fn(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" === typeof this.path
            ? sn.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          fn(e, "stem"),
            hn(e, "stem"),
            (this.path = sn.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          const r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          const r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          const r = new on(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          if (void 0 === this.value) return "";
          if ("string" === typeof this.value) return this.value;
          return new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function hn(e, t) {
        if (e && e.includes(sn.sep))
          throw new Error(
            "`" + t + "` cannot be a path: did not expect `" + sn.sep + "`"
          );
      }
      function fn(e, t) {
        if (!e) throw new Error("`" + t + "` cannot be empty");
      }
      function mn(e, t) {
        if (!e)
          throw new Error("Setting `" + t + "` requires `path` to be set too");
      }
      const gn = function (e) {
          const t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          return Object.setPrototypeOf(r, t), r;
        },
        yn = {}.hasOwnProperty;
      class kn extends gn {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (0, en.r)());
        }
        copy() {
          const e = new kn();
          let t = -1;
          for (; ++t < this.attachers.length; ) {
            const n = this.attachers[t];
            e.use(...n);
          }
          return e.data(Kt(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" === typeof e
            ? 2 === arguments.length
              ? (Sn("data", this.frozen), (this.namespace[e] = t), this)
              : (yn.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (Sn("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          const e = this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            const [t, ...n] = this.attachers[this.freezeIndex];
            if (!1 === n[0]) continue;
            !0 === n[0] && (n[0] = void 0);
            const r = t.call(e, ...n);
            "function" === typeof r && this.transformers.use(r);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          const t = Nn(e),
            n = this.parser || this.Parser;
          return vn("parse", n), n(String(t), t);
        }
        process(e, t) {
          const n = this;
          return (
            this.freeze(),
            vn("process", this.parser || this.Parser),
            wn("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, i) {
            const o = Nn(e),
              s = n.parse(o);
            function a(e, n) {
              e || !n
                ? i(e)
                : r
                ? r(n)
                : ((0, Xt.ok)(t, "`done` is defined if `resolve` is not"),
                  t(void 0, n));
            }
            n.run(s, o, function (e, t, r) {
              if (e || !t || !r) return a(e);
              const i = t,
                o = n.stringify(i, r);
              var s;
              "string" === typeof (s = o) ||
              (function (e) {
                return Boolean(
                  e &&
                    "object" === typeof e &&
                    "byteLength" in e &&
                    "byteOffset" in e
                );
              })(s)
                ? (r.value = o)
                : (r.result = o),
                a(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            vn("processSync", this.parser || this.Parser),
            wn("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), (0, Zt.N)(e), (t = r);
            }),
            En("processSync", "process", n),
            (0, Xt.ok)(t, "we either bailed on an error or have a tree"),
            t
          );
        }
        run(e, t, n) {
          xn(e), this.freeze();
          const r = this.transformers;
          return (
            n || "function" !== typeof t || ((n = t), (t = void 0)),
            n ? i(void 0, n) : new Promise(i)
          );
          function i(i, o) {
            (0, Xt.ok)(
              "function" !== typeof t,
              "`file` can\u2019t be a `done` anymore, we checked"
            );
            const s = Nn(t);
            r.run(e, s, function (t, r, s) {
              const a = r || e;
              t
                ? o(t)
                : i
                ? i(a)
                : ((0, Xt.ok)(n, "`done` is defined if `resolve` is not"),
                  n(void 0, a, s));
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              (0, Zt.N)(e), (n = t), (r = !0);
            }),
            En("runSync", "run", r),
            (0, Xt.ok)(n, "we either bailed on an error or have a tree"),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          const n = Nn(t),
            r = this.compiler || this.Compiler;
          return wn("stringify", r), xn(e), r(e, n);
        }
        use(e, ...t) {
          const n = this.attachers,
            r = this.namespace;
          if ((Sn("use", this.frozen), null === e || void 0 === e));
          else if ("function" === typeof e) a(e, t);
          else {
            if ("object" !== typeof e)
              throw new TypeError("Expected usable value, not `" + e + "`");
            Array.isArray(e) ? s(e) : o(e);
          }
          return this;
          function i(e) {
            if ("function" === typeof e) a(e, []);
            else {
              if ("object" !== typeof e)
                throw new TypeError("Expected usable value, not `" + e + "`");
              if (Array.isArray(e)) {
                const [t, ...n] = e;
                a(t, n);
              } else o(e);
            }
          }
          function o(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw new Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            s(e.plugins),
              e.settings && (r.settings = Kt(!0, r.settings, e.settings));
          }
          function s(e) {
            let t = -1;
            if (null === e || void 0 === e);
            else {
              if (!Array.isArray(e))
                throw new TypeError(
                  "Expected a list of plugins, not `" + e + "`"
                );
              for (; ++t < e.length; ) {
                i(e[t]);
              }
            }
          }
          function a(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...o] = t;
              const s = n[i][1];
              (0, Qt.Z)(s) && (0, Qt.Z)(r) && (r = Kt(!0, s, r)),
                (n[i] = [e, r, ...o]);
            }
          }
        }
      }
      const bn = new kn().freeze();
      function vn(e, t) {
        if ("function" !== typeof t)
          throw new TypeError("Cannot `" + e + "` without `parser`");
      }
      function wn(e, t) {
        if ("function" !== typeof t)
          throw new TypeError("Cannot `" + e + "` without `compiler`");
      }
      function Sn(e, t) {
        if (t)
          throw new Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function xn(e) {
        if (!(0, Qt.Z)(e) || "string" !== typeof e.type)
          throw new TypeError("Expected node, got `" + e + "`");
      }
      function En(e, t, n) {
        if (!n)
          throw new Error(
            "`" + e + "` finished async. Use `" + t + "` instead"
          );
      }
      function Nn(e) {
        return (function (e) {
          return Boolean(
            e && "object" === typeof e && "message" in e && "messages" in e
          );
        })(e)
          ? e
          : new dn(e);
      }
      var Tn = n(907306);
      class An {}
      class In {
        constructor() {
          (this.elements = []),
            (this.size = () => this.elements.length),
            (this.top = () => this.elements.at(-1)),
            (this.push = (e) => {
              var t;
              null == (t = this.top()) || t.push(e);
            }),
            (this.open = (e) => {
              this.elements.push(e);
            }),
            (this.close = () => {
              const e = this.elements.pop();
              if (!e) throw (0, Tn.qw)();
              return e;
            });
        }
      }
      class Cn extends An {
        constructor(e, t, n) {
          super(), (this.type = e), (this.content = t), (this.attrs = n);
        }
        push(e, ...t) {
          this.content.push(e, ...t);
        }
        pop() {
          return this.content.pop();
        }
        static create(e, t, n) {
          return new Cn(e, t, n);
        }
      }
      var On,
        Rn,
        Mn,
        Ln,
        Fn,
        _n,
        Dn,
        Pn = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        zn = (e, t, n) => (
          Pn(e, t, "read from private field"), n ? n.call(e) : t.get(e)
        ),
        Bn = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        $n = (e, t, n, r) => (
          Pn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
        );
      const jn = class extends In {
        constructor(e) {
          super(),
            Bn(this, On, o.vc.none),
            Bn(this, Rn, (e) => e.isText),
            Bn(this, Mn, (e, t) => {
              if (
                zn(this, Rn).call(this, e) &&
                zn(this, Rn).call(this, t) &&
                o.vc.sameSet(e.marks, t.marks)
              )
                return this.schema.text(e.text + t.text, e.marks);
            }),
            Bn(this, Ln, (e) => {
              const t = Object.values({
                ...this.schema.nodes,
                ...this.schema.marks,
              }).find((t) => t.spec.parseMarkdown.match(e));
              if (!t) throw (0, Tn.y$)(e);
              return t;
            }),
            Bn(this, Fn, (e) => {
              const t = zn(this, Ln).call(this, e);
              t.spec.parseMarkdown.runner(this, e, t);
            }),
            (this.injectRoot = (e, t, n) => (
              this.openNode(t, n), this.next(e.children), this
            )),
            (this.openNode = (e, t) => (this.open(Cn.create(e, [], t)), this)),
            Bn(this, _n, () => {
              $n(this, On, o.vc.none);
              const e = this.close();
              return zn(this, Dn).call(this, e.type, e.attrs, e.content);
            }),
            (this.closeNode = () => (zn(this, _n).call(this), this)),
            Bn(this, Dn, (e, t, n) => {
              const r = e.createAndFill(t, n, zn(this, On));
              if (!r) throw (0, Tn.Vh)(e, t, n);
              return this.push(r), r;
            }),
            (this.addNode = (e, t, n) => (
              zn(this, Dn).call(this, e, t, n), this
            )),
            (this.openMark = (e, t) => {
              const n = e.create(t);
              return $n(this, On, n.addToSet(zn(this, On))), this;
            }),
            (this.closeMark = (e) => (
              $n(this, On, e.removeFromSet(zn(this, On))), this
            )),
            (this.addText = (e) => {
              const t = this.top();
              if (!t) throw (0, Tn.qw)();
              const n = t.pop(),
                r = this.schema.text(e, zn(this, On));
              if (!n) return t.push(r), this;
              const i = zn(this, Mn).call(this, n, r);
              return i ? (t.push(i), this) : (t.push(n, r), this);
            }),
            (this.build = () => {
              let e;
              do {
                e = zn(this, _n).call(this);
              } while (this.size());
              return e;
            }),
            (this.next = (e = []) => (
              [e].flat().forEach((e) => zn(this, Fn).call(this, e)), this
            )),
            (this.toDoc = () => this.build()),
            (this.run = (e, t) => {
              const n = e.runSync(e.parse(t), t);
              return this.next(n), this;
            }),
            (this.schema = e);
        }
      };
      let Un = jn;
      (On = new WeakMap()),
        (Rn = new WeakMap()),
        (Mn = new WeakMap()),
        (Ln = new WeakMap()),
        (Fn = new WeakMap()),
        (_n = new WeakMap()),
        (Dn = new WeakMap()),
        (Un.create = (e, t) => {
          const n = new jn(e);
          return (e) => (n.run(t, e), n.toDoc());
        });
      const Hn = class extends An {
        constructor(e, t, n, r = {}) {
          super(),
            (this.type = e),
            (this.children = t),
            (this.value = n),
            (this.props = r),
            (this.push = (e, ...t) => {
              this.children || (this.children = []),
                this.children.push(e, ...t);
            }),
            (this.pop = () => {
              var e;
              return null == (e = this.children) ? void 0 : e.pop();
            });
        }
      };
      let Jn = Hn;
      Jn.create = (e, t, n, r = {}) => new Hn(e, t, n, r);
      var Wn,
        Gn,
        Vn,
        Yn,
        qn,
        Zn,
        Kn,
        Xn,
        Qn,
        er,
        tr,
        nr,
        rr = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        ir = (e, t, n) => (
          rr(e, t, "read from private field"), n ? n.call(e) : t.get(e)
        ),
        or = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        sr = (e, t, n, r) => (
          rr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
        );
      const ar = class extends In {
        constructor(e) {
          super(),
            or(this, Wn, o.vc.none),
            or(this, Gn, (e) => {
              const t = Object.values({
                ...this.schema.nodes,
                ...this.schema.marks,
              }).find((t) => t.spec.toMarkdown.match(e));
              if (!t) throw (0, Tn.OO)(e.type);
              return t;
            }),
            or(this, Vn, (e) =>
              ir(this, Gn).call(this, e).spec.toMarkdown.runner(this, e)
            ),
            or(this, Yn, (e, t) =>
              ir(this, Gn).call(this, e).spec.toMarkdown.runner(this, e, t)
            ),
            or(this, qn, (e) => {
              const { marks: t } = e,
                n = (e) => e.type.spec.priority ?? 50;
              [...t]
                .sort((e, t) => n(e) - n(t))
                .every((t) => !ir(this, Yn).call(this, t, e)) &&
                ir(this, Vn).call(this, e),
                t.forEach((e) => ir(this, nr).call(this, e));
            }),
            or(this, Zn, (e, t) => {
              var n;
              if (
                e.type === t ||
                1 !== (null == (n = e.children) ? void 0 : n.length)
              )
                return e;
              const r = (e) => {
                  var n;
                  if (e.type === t) return e;
                  if (1 !== (null == (n = e.children) ? void 0 : n.length))
                    return null;
                  const [i] = e.children;
                  return i ? r(i) : null;
                },
                i = r(e);
              if (!i) return e;
              const o = i.children ? [...i.children] : void 0,
                s = { ...e, children: o };
              return (s.children = o), (i.children = [s]), i;
            }),
            or(this, Kn, (e) => {
              const { children: t } = e;
              return (
                t &&
                  (e.children = t.reduce((e, t, n) => {
                    if (0 === n) return [t];
                    const r = e.at(-1);
                    if (r && r.isMark && t.isMark) {
                      t = ir(this, Zn).call(this, t, r.type);
                      const { children: n, ...i } = t,
                        { children: o, ...s } = r;
                      if (
                        t.type === r.type &&
                        n &&
                        o &&
                        JSON.stringify(i) === JSON.stringify(s)
                      ) {
                        const t = { ...s, children: [...o, ...n] };
                        return e
                          .slice(0, -1)
                          .concat(ir(this, Kn).call(this, t));
                      }
                    }
                    return e.concat(t);
                  }, [])),
                e
              );
            }),
            or(this, Xn, (e) => {
              const t = { ...e.props, type: e.type };
              return (
                e.children && (t.children = e.children),
                e.value && (t.value = e.value),
                t
              );
            }),
            (this.openNode = (e, t, n) => (
              this.open(Jn.create(e, void 0, t, n)), this
            )),
            or(this, Qn, () => {
              const e = this.close();
              return ir(this, er).call(
                this,
                e.type,
                e.children,
                e.value,
                e.props
              );
            }),
            (this.closeNode = () => (ir(this, Qn).call(this), this)),
            or(this, er, (e, t, n, r) => {
              const i = Jn.create(e, t, n, r),
                o = ir(this, Kn).call(this, ir(this, Xn).call(this, i));
              return this.push(o), o;
            }),
            (this.addNode = (e, t, n, r) => (
              ir(this, er).call(this, e, t, n, r), this
            )),
            or(this, tr, (e, t, n, r) =>
              e.isInSet(ir(this, Wn))
                ? this
                : (sr(this, Wn, e.addToSet(ir(this, Wn))),
                  this.openNode(t, n, { ...r, isMark: !0 }))
            ),
            or(this, nr, (e) => {
              e.isInSet(ir(this, Wn)) &&
                (sr(this, Wn, e.type.removeFromSet(ir(this, Wn))),
                ir(this, Qn).call(this));
            }),
            (this.withMark = (e, t, n, r) => (
              ir(this, tr).call(this, e, t, n, r), this
            )),
            (this.closeMark = (e) => (ir(this, nr).call(this, e), this)),
            (this.build = () => {
              let e = null;
              do {
                e = ir(this, Qn).call(this);
              } while (this.size());
              return e;
            }),
            (this.next = (e) =>
              ((e) => Object.prototype.hasOwnProperty.call(e, "size"))(e)
                ? (e.forEach((e) => {
                    ir(this, qn).call(this, e);
                  }),
                  this)
                : (ir(this, qn).call(this, e), this)),
            (this.toString = (e) => e.stringify(this.build())),
            (this.run = (e) => (this.next(e), this)),
            (this.schema = e);
        }
      };
      let lr = ar;
      (Wn = new WeakMap()),
        (Gn = new WeakMap()),
        (Vn = new WeakMap()),
        (Yn = new WeakMap()),
        (qn = new WeakMap()),
        (Zn = new WeakMap()),
        (Kn = new WeakMap()),
        (Xn = new WeakMap()),
        (Qn = new WeakMap()),
        (er = new WeakMap()),
        (tr = new WeakMap()),
        (nr = new WeakMap()),
        (lr.create = (e, t) => {
          const n = new ar(e);
          return (e) => (n.run(e), n.toString(t));
        });
      var cr = n(616711),
        ur = n(176905),
        pr = n(551579),
        dr = n(492104),
        hr = n(436927),
        fr = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        mr = (e, t, n) => (
          fr(e, t, "read from private field"), n ? n.call(e) : t.get(e)
        ),
        gr = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        yr = (e, t, n, r) => (
          fr(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
        );
      const kr = (e, t) => (
          (e.meta = { package: "@milkdown/core", group: "System", ...t }), e
        ),
        br = {
          strong: (e, t, n, r) => {
            const i = e.marker || n.options.strong || "*",
              o = n.enter("strong"),
              s = n.createTracker(r);
            let a = s.move(i + i);
            return (
              (a += s.move(
                n.containerPhrasing(e, { before: a, after: i, ...s.current() })
              )),
              (a += s.move(i + i)),
              o(),
              a
            );
          },
          emphasis: (e, t, n, r) => {
            const i = e.marker || n.options.emphasis || "*",
              o = n.enter("emphasis"),
              s = n.createTracker(r);
            let a = s.move(i);
            return (
              (a += s.move(
                n.containerPhrasing(e, { before: a, after: i, ...s.current() })
              )),
              (a += s.move(i)),
              o(),
              a
            );
          },
        },
        vr = (0, i.eF)("ConfigReady"),
        wr = (0, i.eF)("InitReady"),
        Sr = (0, i.oM)([], "initTimer"),
        xr = (0, i.oM)({}, "editor"),
        Er = (0, i.oM)([], "inputRules"),
        Nr = (0, i.oM)([], "prosePlugins"),
        Tr = (0, i.oM)([], "remarkPlugins"),
        Ar = (0, i.oM)([], "nodeView"),
        Ir = (0, i.oM)([], "markView"),
        Cr = (0, i.oM)(bn().use(Qe).use(qt), "remark"),
        Or = (0, i.oM)({ handlers: br }, "remarkStringifyOptions"),
        Rr = (e) => {
          const t = (t) => (
            t
              .inject(xr, e)
              .inject(Nr, [])
              .inject(Tr, [])
              .inject(Er, [])
              .inject(Ar, [])
              .inject(Ir, [])
              .inject(Or, { handlers: br })
              .inject(Cr, bn().use(Qe).use(qt))
              .inject(Sr, [vr])
              .record(wr),
            async () => {
              await t.waitTimers(Sr);
              const e = t.get(Or);
              return (
                t.set(Cr, bn().use(Qe).use(qt, e)),
                t.done(wr),
                () => {
                  t.remove(xr)
                    .remove(Nr)
                    .remove(Tr)
                    .remove(Er)
                    .remove(Ar)
                    .remove(Ir)
                    .remove(Or)
                    .remove(Cr)
                    .remove(Sr)
                    .clearTimer(wr);
                }
              );
            }
          );
          return kr(t, { displayName: "Init" }), t;
        },
        Mr = (0, i.eF)("SchemaReady"),
        Lr = (0, i.oM)([], "schemaTimer"),
        Fr = (0, i.oM)({}, "schema"),
        _r = (0, i.oM)([], "nodes"),
        Dr = (0, i.oM)([], "marks"),
        Pr = (e) => {
          var t;
          return {
            ...e,
            parseDOM:
              null == (t = e.parseDOM)
                ? void 0
                : t.map((t) => ({ priority: e.priority, ...t })),
          };
        },
        zr = (e) => (
          e
            .inject(Fr, {})
            .inject(_r, [])
            .inject(Dr, [])
            .inject(Lr, [wr])
            .record(Mr),
          async () => {
            await e.waitTimers(Lr);
            const t = e.get(Cr),
              n = e.get(Tr).reduce((e, t) => e.use(t.plugin, t.options), t);
            e.set(Cr, n);
            const r = Object.fromEntries(e.get(_r).map(([e, t]) => [e, Pr(t)])),
              i = Object.fromEntries(e.get(Dr).map(([e, t]) => [e, Pr(t)])),
              s = new o.V_({ nodes: r, marks: i });
            return (
              e.set(Fr, s),
              e.done(Mr),
              () => {
                e.remove(Fr).remove(_r).remove(Dr).remove(Lr).clearTimer(Mr);
              }
            );
          }
        );
      kr(zr, { displayName: "Schema" });
      const Br = (0, i.eF)("ParserReady"),
        $r = () => {
          throw (0, Tn.S1)();
        },
        jr = (0, i.oM)($r, "parser"),
        Ur = (0, i.oM)([], "parserTimer"),
        Hr = (e) => (
          e.inject(jr, $r).inject(Ur, [Mr]).record(Br),
          async () => {
            await e.waitTimers(Ur);
            const t = e.get(Cr),
              n = e.get(Fr);
            return (
              e.set(jr, Un.create(n, t)),
              e.done(Br),
              () => {
                e.remove(jr).remove(Ur).clearTimer(Br);
              }
            );
          }
        );
      kr(Hr, { displayName: "Parser" });
      const Jr = (0, i.eF)("SerializerReady"),
        Wr = (0, i.oM)([], "serializerTimer"),
        Gr = () => {
          throw (0, Tn.S1)();
        },
        Vr = (0, i.oM)(Gr, "serializer"),
        Yr = (e) => (
          e.inject(Vr, Gr).inject(Wr, [Mr]).record(Jr),
          async () => {
            await e.waitTimers(Wr);
            const t = e.get(Cr),
              n = e.get(Fr);
            return (
              e.set(Vr, lr.create(n, t)),
              e.done(Jr),
              () => {
                e.remove(Vr).remove(Wr).clearTimer(Jr);
              }
            );
          }
        );
      kr(Yr, { displayName: "Serializer" });
      const qr = (0, i.oM)("", "defaultValue"),
        Zr = (0, i.oM)({}, "editorState"),
        Kr = (0, i.oM)((e) => e, "stateOptions"),
        Xr = (0, i.oM)([], "editorStateTimer"),
        Qr = (0, i.eF)("EditorStateReady"),
        ei = new cr.H$("MILKDOWN_STATE_TRACKER"),
        ti = (e) => (
          e
            .inject(qr, "")
            .inject(Zr, {})
            .inject(Kr, (e) => e)
            .inject(Xr, [Br, Jr, yi])
            .record(Qr),
          async () => {
            await e.waitTimers(Xr);
            const t = e.get(Fr),
              n = e.get(jr),
              r = e.get(Er),
              i = e.get(Kr),
              s = e.get(Nr),
              a = ((e, t, n) => {
                if ("string" == typeof e) return t(e);
                if ("html" === e.type) return o.aw.fromSchema(n).parse(e.dom);
                if ("json" === e.type) return o.NB.fromJSON(n, e.value);
                throw (0, Tn.rf)(e);
              })(e.get(qr), n, t),
              l = [
                ...s,
                new cr.Sy({
                  key: ei,
                  state: {
                    init: () => {},
                    apply: (t, n, r, i) => {
                      e.set(Zr, i);
                    },
                  },
                }),
                (0, pr.NJ)({ rules: r }),
                (0, hr.h)(dr.YR),
              ];
            e.set(Nr, l);
            const c = i({ schema: t, doc: a, plugins: l }),
              u = cr.yy.create(c);
            return (
              e.set(Zr, u),
              e.done(Qr),
              () => {
                e.remove(qr).remove(Zr).remove(Kr).remove(Xr).clearTimer(Qr);
              }
            );
          }
        );
      kr(ti, { displayName: "EditorState" });
      const ni = (0, i.eF)("EditorViewReady"),
        ri = (0, i.oM)({}, "editorView"),
        ii = (0, i.oM)([], "editorViewTimer"),
        oi = (0, i.oM)({}, "editorViewOptions"),
        si = (0, i.oM)(null, "root"),
        ai = (0, i.oM)(null, "rootDOM"),
        li = (0, i.oM)({}, "rootAttrs"),
        ci = new cr.H$("MILKDOWN_VIEW_CLEAR"),
        ui = (e) => (
          e
            .inject(si, document.body)
            .inject(ri, {})
            .inject(oi, {})
            .inject(ai, null)
            .inject(li, {})
            .inject(ii, [Qr])
            .record(ni),
          async () => {
            await e.wait(wr);
            const t = e.get(si) || document.body,
              n = "string" == typeof t ? document.querySelector(t) : t;
            e.update(Nr, (t) => [
              new cr.Sy({
                key: ci,
                view: (t) => {
                  const r = n
                    ? ((e, t) => {
                        const n = document.createElement("div");
                        (n.className = "milkdown"),
                          e.appendChild(n),
                          t.set(ai, n);
                        const r = t.get(li);
                        return (
                          Object.entries(r).forEach(([e, t]) =>
                            n.setAttribute(e, t)
                          ),
                          n
                        );
                      })(n, e)
                    : void 0;
                  return (
                    (() => {
                      if (r && n) {
                        const e = t.dom;
                        n.replaceChild(r, e), r.appendChild(e);
                      }
                    })(),
                    {
                      destroy: () => {
                        null != r &&
                          r.parentNode &&
                          (null == r || r.parentNode.replaceChild(t.dom, r)),
                          null == r || r.remove();
                      },
                    }
                  );
                },
              }),
              ...t,
            ]),
              await e.waitTimers(ii);
            const r = e.get(Zr),
              i = e.get(oi),
              o = Object.fromEntries(e.get(Ar)),
              s = Object.fromEntries(e.get(Ir)),
              a = new ur.tk(n, { state: r, nodeViews: o, markViews: s, ...i });
            return (
              ((e) => {
                e.classList.add("editor"), e.setAttribute("role", "textbox");
              })(a.dom),
              e.set(ri, a),
              e.done(ni),
              () => {
                null == a || a.destroy(),
                  e
                    .remove(si)
                    .remove(ri)
                    .remove(oi)
                    .remove(ai)
                    .remove(li)
                    .remove(ii)
                    .clearTimer(ni);
              }
            );
          }
        );
      var pi, di;
      kr(ui, { displayName: "EditorView" });
      class hi {
        constructor() {
          gr(this, pi, void 0),
            gr(this, di, void 0),
            yr(this, pi, new i.W2()),
            yr(this, di, null),
            (this.setCtx = (e) => {
              yr(this, di, e);
            });
        }
        get ctx() {
          return mr(this, di);
        }
        create(e, t) {
          const n = e.create(mr(this, pi).sliceMap);
          return n.set(t), n;
        }
        get(e) {
          return mr(this, pi).get(e).get();
        }
        remove(e) {
          return mr(this, pi).remove(e);
        }
        call(e, t) {
          if (null == mr(this, di)) throw (0, Tn.gq)();
          const n = this.get(e)(t),
            r = mr(this, di).get(ri);
          return n(r.state, r.dispatch, r);
        }
      }
      (pi = new WeakMap()), (di = new WeakMap());
      const fi = (e = "cmdKey") => (0, i.oM)(() => () => !1, e),
        mi = (0, i.oM)(new hi(), "commands"),
        gi = (0, i.oM)([Mr], "commandsTimer"),
        yi = (0, i.eF)("CommandsReady"),
        ki = (e) => {
          const t = new hi();
          return (
            t.setCtx(e),
            e.inject(mi, t).inject(gi, [Mr]).record(yi),
            async () => (
              await e.waitTimers(gi),
              e.done(yi),
              () => {
                e.remove(mi).remove(gi).clearTimer(yi);
              }
            )
          );
        };
      kr(ki, { displayName: "Commands" });
      var bi, vi, wi, Si, xi, Ei, Ni, Ti, Ai, Ii, Ci, Oi, Ri, Mi, Li;
      const Fi = class {
        constructor() {
          gr(this, bi, void 0),
            gr(this, vi, void 0),
            gr(this, wi, void 0),
            gr(this, Si, void 0),
            gr(this, xi, void 0),
            gr(this, Ei, void 0),
            gr(this, Ni, void 0),
            gr(this, Ti, void 0),
            gr(this, Ai, void 0),
            gr(this, Ii, void 0),
            gr(this, Ci, void 0),
            gr(this, Oi, void 0),
            gr(this, Ri, void 0),
            gr(this, Mi, void 0),
            gr(this, Li, void 0),
            yr(this, bi, !1),
            yr(this, vi, "Idle"),
            yr(this, wi, []),
            yr(this, Si, () => {}),
            yr(this, xi, new i.W2()),
            yr(this, Ei, new i.SU()),
            yr(this, Ni, new Map()),
            yr(this, Ti, new Map()),
            yr(this, Ai, new i.A7(mr(this, xi), mr(this, Ei))),
            yr(this, Ii, () => {
              const e = ((e) => {
                  const t = (t) => (
                    t.record(vr),
                    async () => (
                      await e(t),
                      t.done(vr),
                      () => {
                        t.clearTimer(vr);
                      }
                    )
                  );
                  return kr(t, { displayName: "Config" }), t;
                })(async (e) => {
                  await Promise.all(mr(this, wi).map((t) => t(e)));
                }),
                t = [zr, Hr, Yr, ki, ti, ui, Rr(this), e];
              mr(this, Ci).call(this, t, mr(this, Ti));
            }),
            yr(this, Ci, (e, t) => {
              e.forEach((e) => {
                const n = mr(this, Ai).produce(mr(this, bi) ? e.meta : void 0),
                  r = e(n);
                t.set(e, { ctx: n, handler: r, cleanup: void 0 });
              });
            }),
            yr(this, Oi, (e, t = !1) =>
              Promise.all(
                [e].flat().map((e) => {
                  const n = mr(this, Ni).get(e),
                    r = null == n ? void 0 : n.cleanup;
                  return (
                    t
                      ? mr(this, Ni).delete(e)
                      : mr(this, Ni).set(e, {
                          ctx: void 0,
                          handler: void 0,
                          cleanup: void 0,
                        }),
                    "function" == typeof r ? r() : r
                  );
                })
              )
            ),
            yr(this, Ri, async () => {
              await Promise.all(
                [...mr(this, Ti).entries()].map(([e, { cleanup: t }]) =>
                  "function" == typeof t ? t() : t
                )
              ),
                mr(this, Ti).clear();
            }),
            yr(this, Mi, (e) => {
              yr(this, vi, e), mr(this, Si).call(this, e);
            }),
            yr(this, Li, (e) =>
              [...e.entries()].map(async ([t, n]) => {
                const { ctx: r, handler: i } = n;
                if (!i) return;
                const o = await i();
                e.set(t, { ctx: r, handler: i, cleanup: o });
              })
            ),
            (this.enableInspector = (e = !0) => (yr(this, bi, e), this)),
            (this.onStatusChange = (e) => (yr(this, Si, e), this)),
            (this.config = (e) => (mr(this, wi).push(e), this)),
            (this.removeConfig = (e) => (
              yr(
                this,
                wi,
                mr(this, wi).filter((t) => t !== e)
              ),
              this
            )),
            (this.use = (e) => {
              const t = [e].flat();
              return (
                t.flat().forEach((e) => {
                  mr(this, Ni).set(e, {
                    ctx: void 0,
                    handler: void 0,
                    cleanup: void 0,
                  });
                }),
                "Created" === mr(this, vi) &&
                  mr(this, Ci).call(this, t, mr(this, Ni)),
                this
              );
            }),
            (this.remove = async (e) =>
              "OnCreate" === mr(this, vi)
                ? (console.warn(
                    "[Milkdown]: You are trying to remove plugins when the editor is creating, this is not recommended, please check your code."
                  ),
                  new Promise((t) => {
                    setTimeout(() => {
                      t(this.remove(e));
                    }, 50);
                  }))
                : (await mr(this, Oi).call(this, [e].flat(), !0), this)),
            (this.create = async () => (
              "OnCreate" === mr(this, vi) ||
                ("Created" === mr(this, vi) && (await this.destroy()),
                mr(this, Mi).call(this, "OnCreate"),
                mr(this, Ii).call(this),
                mr(this, Ci).call(this, [...mr(this, Ni).keys()], mr(this, Ni)),
                await Promise.all(
                  [
                    mr(this, Li).call(this, mr(this, Ti)),
                    mr(this, Li).call(this, mr(this, Ni)),
                  ].flat()
                ),
                mr(this, Mi).call(this, "Created")),
              this
            )),
            (this.destroy = async (e = !1) =>
              "Destroyed" === mr(this, vi) || "OnDestroy" === mr(this, vi)
                ? this
                : "OnCreate" === mr(this, vi)
                ? new Promise((t) => {
                    setTimeout(() => {
                      t(this.destroy(e));
                    }, 50);
                  })
                : (e && yr(this, wi, []),
                  mr(this, Mi).call(this, "OnDestroy"),
                  await mr(this, Oi).call(this, [...mr(this, Ni).keys()], e),
                  await mr(this, Ri).call(this),
                  mr(this, Mi).call(this, "Destroyed"),
                  this)),
            (this.action = (e) => e(mr(this, Ai))),
            (this.inspect = () =>
              mr(this, bi)
                ? [...mr(this, Ti).values(), ...mr(this, Ni).values()]
                    .map(({ ctx: e }) => {
                      var t;
                      return null == (t = null == e ? void 0 : e.inspector)
                        ? void 0
                        : t.read();
                    })
                    .filter((e) => !!e)
                : (console.warn(
                    "[Milkdown]: You are trying to collect inspection when inspector is disabled, please enable inspector by `editor.enableInspector()` first."
                  ),
                  []));
        }
        static make() {
          return new Fi();
        }
        get ctx() {
          return mr(this, Ai);
        }
        get status() {
          return mr(this, vi);
        }
      };
      let _i = Fi;
      (bi = new WeakMap()),
        (vi = new WeakMap()),
        (wi = new WeakMap()),
        (Si = new WeakMap()),
        (xi = new WeakMap()),
        (Ei = new WeakMap()),
        (Ni = new WeakMap()),
        (Ti = new WeakMap()),
        (Ai = new WeakMap()),
        (Ii = new WeakMap()),
        (Ci = new WeakMap()),
        (Oi = new WeakMap()),
        (Ri = new WeakMap()),
        (Mi = new WeakMap()),
        (Li = new WeakMap());
    },
    480224: function (e, t, n) {
      n.d(t, {
        SU: function () {
          return R;
        },
        W2: function () {
          return p;
        },
        A7: function () {
          return O;
        },
        oM: function () {
          return f;
        },
        eF: function () {
          return $;
        },
      });
      var r,
        i,
        o,
        s = n(907306),
        a = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        l = (e, t, n) => (
          a(e, t, "read from private field"), n ? n.call(e) : t.get(e)
        ),
        c = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        u = (e, t, n, r) => (
          a(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
        );
      class p {
        constructor() {
          (this.sliceMap = new Map()),
            (this.get = (e) => {
              const t =
                "string" == typeof e
                  ? [...this.sliceMap.values()].find((t) => t.type.name === e)
                  : this.sliceMap.get(e.id);
              if (!t) {
                const t = "string" == typeof e ? e : e.name;
                throw (0, s.KE)(t);
              }
              return t;
            }),
            (this.remove = (e) => {
              const t =
                "string" == typeof e
                  ? [...this.sliceMap.values()].find((t) => t.type.name === e)
                  : this.sliceMap.get(e.id);
              t && this.sliceMap.delete(t.type.id);
            }),
            (this.has = (e) =>
              "string" == typeof e
                ? [...this.sliceMap.values()].some((t) => t.type.name === e)
                : this.sliceMap.has(e.id));
        }
      }
      class d {
        constructor(e, t, n) {
          c(this, r, void 0),
            c(this, i, void 0),
            c(this, o, void 0),
            u(this, r, []),
            u(this, o, () => {
              l(this, r).forEach((e) => e(l(this, i)));
            }),
            (this.set = (e) => {
              u(this, i, e), l(this, o).call(this);
            }),
            (this.get = () => l(this, i)),
            (this.update = (e) => {
              u(this, i, e(l(this, i))), l(this, o).call(this);
            }),
            (this.type = n),
            u(this, i, t),
            e.set(n.id, this);
        }
        on(e) {
          return (
            l(this, r).push(e),
            () => {
              u(
                this,
                r,
                l(this, r).filter((t) => t !== e)
              );
            }
          );
        }
        once(e) {
          const t = this.on((n) => {
            e(n), t();
          });
          return t;
        }
        off(e) {
          u(
            this,
            r,
            l(this, r).filter((t) => t !== e)
          );
        }
        offAll() {
          u(this, r, []);
        }
      }
      (r = new WeakMap()), (i = new WeakMap()), (o = new WeakMap());
      class h {
        constructor(e, t) {
          (this.id = Symbol(`Context-${t}`)),
            (this.name = t),
            (this._defaultValue = e),
            (this._typeInfo = () => {
              throw (0, s.S1)();
            });
        }
        create(e, t = this._defaultValue) {
          return new d(e, t, this);
        }
      }
      const f = (e, t) => new h(e, t);
      var m, g, y, k, b, v, w, S, x, E, N, T, A;
      class I {
        constructor(e, t, n) {
          c(this, m, void 0),
            c(this, g, void 0),
            c(this, y, void 0),
            c(this, k, void 0),
            c(this, b, void 0),
            c(this, v, void 0),
            c(this, w, void 0),
            c(this, S, void 0),
            c(this, x, void 0),
            u(this, k, new Set()),
            u(this, b, new Set()),
            u(this, v, new Map()),
            u(this, w, new Map()),
            (this.read = () => ({
              metadata: l(this, m),
              injectedSlices: [...l(this, k)].map((e) => ({
                name: "string" == typeof e ? e : e.name,
                value: l(this, S).call(this, e),
              })),
              consumedSlices: [...l(this, b)].map((e) => ({
                name: "string" == typeof e ? e : e.name,
                value: l(this, S).call(this, e),
              })),
              recordedTimers: [...l(this, v)].map(([e, { duration: t }]) => ({
                name: e.name,
                duration: t,
                status: l(this, x).call(this, e),
              })),
              waitTimers: [...l(this, w)].map(([e, { duration: t }]) => ({
                name: e.name,
                duration: t,
                status: l(this, x).call(this, e),
              })),
            })),
            (this.onRecord = (e) => {
              l(this, v).set(e, { start: Date.now(), duration: 0 });
            }),
            (this.onClear = (e) => {
              l(this, v).delete(e);
            }),
            (this.onDone = (e) => {
              const t = l(this, v).get(e);
              t && (t.duration = Date.now() - t.start);
            }),
            (this.onWait = (e, t) => {
              const n = Date.now();
              t.finally(() => {
                l(this, w).set(e, { duration: Date.now() - n });
              });
            }),
            (this.onInject = (e) => {
              l(this, k).add(e);
            }),
            (this.onRemove = (e) => {
              l(this, k).delete(e);
            }),
            (this.onUse = (e) => {
              l(this, b).add(e);
            }),
            u(this, S, (e) => l(this, g).get(e).get()),
            u(this, x, (e) => l(this, y).get(e).status),
            u(this, g, e),
            u(this, y, t),
            u(this, m, n);
        }
      }
      (m = new WeakMap()),
        (g = new WeakMap()),
        (y = new WeakMap()),
        (k = new WeakMap()),
        (b = new WeakMap()),
        (v = new WeakMap()),
        (w = new WeakMap()),
        (S = new WeakMap()),
        (x = new WeakMap());
      const C = class {
        constructor(e, t, n) {
          c(this, E, void 0),
            c(this, N, void 0),
            c(this, T, void 0),
            c(this, A, void 0),
            (this.produce = (e) =>
              e && Object.keys(e).length
                ? new C(l(this, E), l(this, N), { ...e })
                : this),
            (this.inject = (e, t) => {
              var n;
              const r = e.create(l(this, E).sliceMap);
              return (
                null != t && r.set(t),
                null == (n = l(this, A)) || n.onInject(e),
                this
              );
            }),
            (this.remove = (e) => {
              var t;
              return (
                l(this, E).remove(e),
                null == (t = l(this, A)) || t.onRemove(e),
                this
              );
            }),
            (this.record = (e) => {
              var t;
              return (
                e.create(l(this, N).store),
                null == (t = l(this, A)) || t.onRecord(e),
                this
              );
            }),
            (this.clearTimer = (e) => {
              var t;
              return (
                l(this, N).remove(e),
                null == (t = l(this, A)) || t.onClear(e),
                this
              );
            }),
            (this.isInjected = (e) => l(this, E).has(e)),
            (this.isRecorded = (e) => l(this, N).has(e)),
            (this.use = (e) => {
              var t;
              return null == (t = l(this, A)) || t.onUse(e), l(this, E).get(e);
            }),
            (this.get = (e) => this.use(e).get()),
            (this.set = (e, t) => this.use(e).set(t)),
            (this.update = (e, t) => this.use(e).update(t)),
            (this.timer = (e) => l(this, N).get(e)),
            (this.done = (e) => {
              var t;
              this.timer(e).done(), null == (t = l(this, A)) || t.onDone(e);
            }),
            (this.wait = (e) => {
              var t;
              const n = this.timer(e).start();
              return null == (t = l(this, A)) || t.onWait(e, n), n;
            }),
            (this.waitTimers = async (e) => {
              await Promise.all(this.get(e).map((e) => this.wait(e)));
            }),
            u(this, E, e),
            u(this, N, t),
            u(this, T, n),
            n && u(this, A, new I(e, t, n));
        }
        get meta() {
          return l(this, T);
        }
        get inspector() {
          return l(this, A);
        }
      };
      let O = C;
      (E = new WeakMap()),
        (N = new WeakMap()),
        (T = new WeakMap()),
        (A = new WeakMap());
      class R {
        constructor() {
          (this.store = new Map()),
            (this.get = (e) => {
              const t = this.store.get(e.id);
              if (!t) throw (0, s._O)(e.name);
              return t;
            }),
            (this.remove = (e) => {
              this.store.delete(e.id);
            }),
            (this.has = (e) => this.store.has(e.id));
        }
      }
      var M, L, F, _, D, P;
      class z {
        constructor(e, t) {
          c(this, M, void 0),
            c(this, L, void 0),
            c(this, F, void 0),
            c(this, _, void 0),
            c(this, D, void 0),
            c(this, P, void 0),
            u(this, M, null),
            u(this, L, null),
            u(this, _, "pending"),
            (this.start = () => (
              l(this, M) ??
                u(
                  this,
                  M,
                  new Promise((e, t) => {
                    u(this, L, (t) => {
                      t instanceof CustomEvent &&
                        t.detail.id === l(this, F) &&
                        (u(this, _, "resolved"),
                        l(this, D).call(this),
                        t.stopImmediatePropagation(),
                        e());
                    }),
                      l(this, P).call(this, () => {
                        "pending" === l(this, _) && u(this, _, "rejected"),
                          l(this, D).call(this),
                          t(new Error(`Timing ${this.type.name} timeout.`));
                      }),
                      u(this, _, "pending"),
                      addEventListener(this.type.name, l(this, L));
                  })
                ),
              l(this, M)
            )),
            (this.done = () => {
              const e = new CustomEvent(this.type.name, {
                detail: { id: l(this, F) },
              });
              dispatchEvent(e);
            }),
            u(this, D, () => {
              l(this, L) && removeEventListener(this.type.name, l(this, L));
            }),
            u(this, P, (e) => {
              setTimeout(() => {
                e();
              }, this.type.timeout);
            }),
            u(this, F, Symbol(t.name)),
            (this.type = t),
            e.set(t.id, this);
        }
        get status() {
          return l(this, _);
        }
      }
      (M = new WeakMap()),
        (L = new WeakMap()),
        (F = new WeakMap()),
        (_ = new WeakMap()),
        (D = new WeakMap()),
        (P = new WeakMap());
      class B {
        constructor(e, t = 3e3) {
          (this.create = (e) => new z(e, this)),
            (this.id = Symbol(`Timer-${e}`)),
            (this.name = e),
            (this.timeout = t);
        }
      }
      const $ = (e, t = 3e3) => new B(e, t);
    },
    907306: function (e, t, n) {
      n.d(t, {
        gq: function () {
          return g;
        },
        KE: function () {
          return l;
        },
        Vh: function () {
          return p;
        },
        S1: function () {
          return u;
        },
        rf: function () {
          return a;
        },
        GZ: function () {
          return m;
        },
        d2: function () {
          return k;
        },
        YN: function () {
          return y;
        },
        y$: function () {
          return h;
        },
        OO: function () {
          return f;
        },
        qw: function () {
          return d;
        },
        _O: function () {
          return c;
        },
      });
      var r = ((e) => (
        (e.docTypeError = "docTypeError"),
        (e.contextNotFound = "contextNotFound"),
        (e.timerNotFound = "timerNotFound"),
        (e.ctxCallOutOfScope = "ctxCallOutOfScope"),
        (e.createNodeInParserFail = "createNodeInParserFail"),
        (e.stackOverFlow = "stackOverFlow"),
        (e.parserMatchError = "parserMatchError"),
        (e.serializerMatchError = "serializerMatchError"),
        (e.getAtomFromSchemaFail = "getAtomFromSchemaFail"),
        (e.expectDomTypeError = "expectDomTypeError"),
        (e.callCommandBeforeEditorView = "callCommandBeforeEditorView"),
        (e.missingRootElement = "missingRootElement"),
        (e.missingNodeInSchema = "missingNodeInSchema"),
        (e.missingMarkInSchema = "missingMarkInSchema"),
        (e.ctxNotBind = "ctxNotBind"),
        (e.missingYjsDoc = "missingYjsDoc"),
        e
      ))(r || {});
      class i extends Error {
        constructor(e, t) {
          super(t), (this.name = "MilkdownError"), (this.code = e);
        }
      }
      const o = (e, t) => ("function" == typeof t ? "[Function]" : t),
        s = (e) => JSON.stringify(e, o),
        a = (e) =>
          new i(r.docTypeError, `Doc type error, unsupported type: ${s(e)}`),
        l = (e) =>
          new i(
            r.contextNotFound,
            `Context "${e}" not found, do you forget to inject it?`
          ),
        c = (e) =>
          new i(
            r.timerNotFound,
            `Timer "${e}" not found, do you forget to record it?`
          ),
        u = () =>
          new i(
            r.ctxCallOutOfScope,
            "Should not call a context out of the plugin."
          ),
        p = (...e) => {
          const t = e.reduce((e, t) => {
            if (!t) return e;
            const n = (e) =>
              Array.isArray(e)
                ? e.map((e) => n(e)).join(", ")
                : e.toJSON
                ? s(e.toJSON())
                : e.spec
                ? s(e.spec)
                : e.toString();
            return `${e}, ${n(t)}`;
          }, "Create prosemirror node from remark failed in parser");
          return new i(r.createNodeInParserFail, t);
        },
        d = () =>
          new i(
            r.stackOverFlow,
            "Stack over flow, cannot pop on an empty stack."
          ),
        h = (e) =>
          new i(
            r.parserMatchError,
            `Cannot match target parser for node: ${s(e)}.`
          ),
        f = (e) =>
          new i(
            r.serializerMatchError,
            `Cannot match target serializer for node: ${s(e)}.`
          ),
        m = (e) =>
          new i(r.expectDomTypeError, `Expect to be a dom, but get: ${s(e)}.`),
        g = () =>
          new i(
            r.callCommandBeforeEditorView,
            "You're trying to call a command before editor view initialized, make sure to get commandManager from ctx after editor view has been initialized"
          ),
        y = (e) =>
          new i(
            r.missingNodeInSchema,
            `Missing node in schema, milkdown cannot find "${e}" in schema.`
          ),
        k = (e) =>
          new i(
            r.missingMarkInSchema,
            `Missing mark in schema, milkdown cannot find "${e}" in schema.`
          );
    },
    813043: function (e, t, n) {
      n.d(t, {
        ZJ: function () {
          return Q;
        },
        Ge: function () {
          return ee;
        },
      });
      var r = n(616711),
        i = n(942105),
        o = n(216706),
        s = n(551579),
        a = n(33198),
        l = n(166180),
        c = n(102396),
        u = n(522773),
        p = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        d = (e, t, n) => (
          p(e, t, "read from private field"), n ? n.call(e) : t.get(e)
        ),
        h = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        f = (e, t, n, r) => (
          p(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
        );
      const m = (e) => !e.type.isBlock,
        g = (e) => {
          let t = e.parent;
          const n = e.node();
          return (
            t === n && (t = e.node(e.depth - 1)),
            !(!t || "doc" === t.type.name) && t.firstChild === n
          );
        };
      let y = null;
      const k = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"],
      };
      function b(e, t) {
        const n = [];
        let { openStart: r, openEnd: i, content: o } = t;
        for (
          ;
          r > 1 && i > 1 && 1 === o.childCount && 1 === o.firstChild.childCount;

        ) {
          (r -= 1), (i -= 1);
          const e = o.firstChild;
          n.push(e.type.name, e.attrs !== e.type.defaultAttrs ? e.attrs : null),
            (o = e.content);
        }
        const s =
            e.someProp("clipboardSerializer") ||
            c.PW.fromSchema(e.state.schema),
          a = y || (y = document.implementation.createHTMLDocument("title")),
          l = a.createElement("div");
        l.appendChild(s.serializeFragment(o, { document: a }));
        let u,
          p = l.firstChild,
          d = 0;
        for (; p && 1 === p.nodeType && (u = k[p.nodeName.toLowerCase()]); ) {
          for (let e = u.length - 1; e >= 0; e--) {
            const t = a.createElement(u[e]);
            for (; l.firstChild; ) t.appendChild(l.firstChild);
            l.appendChild(t), d++;
          }
          p = l.firstChild;
        }
        p &&
          1 === p.nodeType &&
          p.setAttribute(
            "data-pm-slice",
            `${r} ${i}${d ? ` -${d}` : ""} ${JSON.stringify(n)}`
          );
        return {
          dom: l,
          text:
            e.someProp("clipboardTextSerializer", (n) => n(t, e)) ||
            t.content.textBetween(0, t.content.size, "\n\n"),
        };
      }
      const v =
        (s.Xh.ie && s.Xh.ie_version < 15) ||
        (s.Xh.ios && s.Xh.webkit_version < 604);
      var w, S, x, E, N, T, A, I, C, O, R, M, L, F, _, D, P, z, B, $;
      (w = new WeakMap()),
        (S = new WeakMap()),
        (x = new WeakMap()),
        (E = new WeakMap()),
        (N = new WeakMap()),
        (T = new WeakMap()),
        (A = new WeakMap()),
        (I = new WeakSet()),
        (C = function () {
          var e;
          return null == (e = d(this, w)) ? void 0 : e.get(U.key).filterNodes;
        }),
        (O = new WeakSet()),
        (R = function () {
          var e;
          return null == (e = d(this, w)) ? void 0 : e.get(o.U7);
        }),
        (M = new WeakMap()),
        (L = new WeakMap()),
        (F = new WeakMap()),
        (_ = new WeakMap()),
        (D = new WeakMap()),
        (P = new WeakMap()),
        (z = new WeakMap()),
        (B = new WeakMap()),
        ($ = new WeakMap());
      const j = (e, t) => (
          Object.assign(e, {
            meta: { package: "@milkdown/plugin-block", ...t },
          }),
          e
        ),
        U = (0, i.Tu)(
          {
            filterNodes: (e) => {
              const { name: t } = e.type;
              return !(t.startsWith("table") && "table" !== t);
            },
          },
          "blockConfig"
        );
      j(U, { displayName: "Ctx<blockConfig>" });
      const H = (0, i.Tu)(
        new (class {
          constructor() {
            h(this, I),
              h(this, O),
              h(this, w, void 0),
              h(this, S, void 0),
              h(this, x, void 0),
              h(this, E, void 0),
              h(this, N, void 0),
              h(this, T, void 0),
              h(this, A, void 0),
              h(this, M, void 0),
              h(this, L, void 0),
              h(this, F, void 0),
              h(this, _, void 0),
              h(this, D, void 0),
              h(this, P, void 0),
              h(this, z, void 0),
              h(this, B, void 0),
              h(this, $, void 0),
              f(this, S, () => {
                if (!d(this, E)) return null;
                const e = d(this, E),
                  t = d(this, O, R);
                if (t && r.qv.isSelectable(e.node)) {
                  const n = r.qv.create(
                    t.state.doc,
                    e.$pos.pos - (e.node.isLeaf ? 0 : 1)
                  );
                  return (
                    t.dispatch(t.state.tr.setSelection(n)),
                    t.focus(),
                    f(this, x, n),
                    n
                  );
                }
                return null;
              }),
              f(this, x, null),
              f(this, E, null),
              f(this, N, void 0),
              f(this, T, !1),
              f(this, A, !1),
              f(this, L, () => {
                var e;
                null == (e = d(this, M)) || e.call(this, { type: "hide" }),
                  f(this, A, !1),
                  f(this, E, null);
              }),
              f(this, F, (e) => {
                var t;
                f(this, E, e),
                  null == (t = d(this, M)) ||
                    t.call(this, { type: "show", active: e });
              }),
              (this.bind = (e, t) => {
                f(this, w, e), f(this, M, t);
              }),
              (this.addEvent = (e) => {
                e.addEventListener("mousedown", d(this, P)),
                  e.addEventListener("mouseenter", d(this, _)),
                  e.addEventListener("mouseleave", d(this, D)),
                  e.addEventListener("mouseup", d(this, z)),
                  e.addEventListener("dragstart", d(this, B));
              }),
              (this.removeEvent = (e) => {
                e.removeEventListener("mousedown", d(this, P)),
                  e.removeEventListener("mouseenter", d(this, _)),
                  e.removeEventListener("mouseleave", d(this, D)),
                  e.removeEventListener("mouseup", d(this, z)),
                  e.removeEventListener("dragstart", d(this, B));
              }),
              (this.unBind = () => {
                f(this, M, void 0);
              }),
              f(this, _, () => {
                f(this, A, !0);
              }),
              f(this, D, () => {
                f(this, A, !1);
              }),
              f(this, P, () => {
                var e;
                f(
                  this,
                  N,
                  null == (e = d(this, E))
                    ? void 0
                    : e.el.getBoundingClientRect()
                ),
                  d(this, S).call(this);
              }),
              f(this, z, () => {
                d(this, T)
                  ? (f(this, T, !1), f(this, x, null))
                  : requestAnimationFrame(() => {
                      var e;
                      d(this, N) && (null == (e = d(this, O, R)) || e.focus());
                    });
              }),
              f(this, B, (e) => {
                f(this, T, !0);
                const t = d(this, x),
                  n = d(this, O, R);
                if (n && e.dataTransfer && t) {
                  const r = t.content();
                  e.dataTransfer.effectAllowed = "copyMove";
                  const { dom: i, text: o } = b(n, r);
                  e.dataTransfer.clearData(),
                    e.dataTransfer.setData(
                      v ? "Text" : "text/html",
                      i.innerHTML
                    ),
                    v || e.dataTransfer.setData("text/plain", o),
                    (n.dragging = { slice: r, move: !0 });
                }
              }),
              (this.keydownCallback = () => (d(this, L).call(this), !1)),
              f(this, $, (e, t) => {
                if (!e.editable || d(this, A) || d(this, T)) return;
                const n = t.target;
                if (!(n instanceof Element)) return void d(this, L).call(this);
                const r = d(this, I, C);
                if (!r) return;
                const i = ((e, t, n) => {
                  const r = t.dom.parentElement;
                  if (!r) return null;
                  const i = t.posAtDOM(e, 0);
                  if (i <= 0) return null;
                  let o = t.state.doc.resolve(i),
                    s = o.node();
                  if ("doc" === s.type.name) return null;
                  for (; s && (m(s) || g(o) || !n(s)); )
                    (o = t.state.doc.resolve(o.before())), (s = o.node());
                  o = t.state.doc.resolve(o.pos - o.parentOffset);
                  const a = ((e, t, n) => {
                    const { node: r } = e.domAtPos(n.pos);
                    let i = r,
                      o = i.parentElement;
                    for (; o && o !== t && n.pos === e.posAtDOM(o, 0); )
                      (i = o), (o = o.parentElement);
                    return i;
                  })(t, r, o);
                  return { node: s, $pos: o, el: a };
                })(n, e, r);
                i ? d(this, F).call(this, i) : d(this, L).call(this);
              }),
              (this.mousemoveCallback = (e, t) => (
                e.composing || !e.editable || a(d(this, $), 200)(e, t), !1
              )),
              (this.dragoverCallback = (e, t) => {
                var n;
                if (d(this, T)) {
                  const r =
                    null == (n = d(this, O, R)) ? void 0 : n.dom.parentElement;
                  if (!r) return !1;
                  const i = r.scrollHeight > r.clientHeight,
                    o = r.getBoundingClientRect();
                  if (i) {
                    if (r.scrollTop > 0 && Math.abs(t.y - o.y) < 20) {
                      const e = r.scrollTop > 10 ? r.scrollTop - 10 : 0;
                      return (r.scrollTop = e), !1;
                    }
                    const n = Math.round(e.dom.getBoundingClientRect().height);
                    if (
                      Math.round(r.scrollTop + o.height) < n &&
                      Math.abs(t.y - (o.height + o.y)) < 20
                    ) {
                      const e = r.scrollTop + 10;
                      return (r.scrollTop = e), !1;
                    }
                  }
                }
                return !1;
              }),
              (this.dragenterCallback = () => {
                f(this, T, !0);
              }),
              (this.dragleaveCallback = () => {
                f(this, T, !1), f(this, E, null), f(this, A, !1);
              }),
              (this.dropCallback = (e, t) => {
                const n = t,
                  r = ((e, t) => {
                    var n;
                    const { state: r } = e,
                      i = r.selection.$anchor;
                    for (let o = i.depth; o > 0; o--)
                      if ("table" === i.node(o).type.spec.tableRole) {
                        const s = e.posAtCoords({
                          left: t.clientX,
                          top: t.clientY,
                        });
                        if (!s) return null;
                        const a = null == (n = e.dragging) ? void 0 : n.slice;
                        if (!a) return null;
                        const c = e.state.doc.resolve(s.pos),
                          u = (0, l.nj)(e.state.doc, c.pos, a);
                        if (null == u || u < 0) return null;
                        let p = r.tr;
                        p = p.delete(i.before(o), i.after(o));
                        const d = p.mapping.map(u);
                        return (p = p.replaceRange(d, d, a)), p;
                      }
                    return null;
                  })(e, n);
                return (
                  f(this, T, !1), !!r && (e.dispatch(r), n.preventDefault(), !0)
                );
              });
          }
        })(),
        "blockService"
      );
      j(U, { displayName: "Ctx<blockService>" });
      const J = (0, i.Tu)({}, "blockSpec");
      j(U, { displayName: "Ctx<blockSpec>" });
      const W = (0, i.x6)((e) => {
        const t = new r.H$("MILKDOWN_BLOCK"),
          n = e.get(H.key),
          i = e.get(J.key);
        return new r.Sy({
          key: t,
          ...i,
          props: {
            ...i.props,
            handleDOMEvents: {
              drop: (e, t) => n.dropCallback(e, t),
              mousemove: (e, t) => n.mousemoveCallback(e, t),
              keydown: () => n.keydownCallback(),
              dragover: (e, t) => n.dragoverCallback(e, t),
              dragleave: () => n.dragleaveCallback(),
              dragenter: () => n.dragenterCallback(),
            },
          },
        });
      });
      var G, V, Y, q, Z, K, X;
      j(W, { displayName: "Prose<block>" });
      class Q {
        constructor(e) {
          h(this, K),
            h(this, G, void 0),
            h(this, V, void 0),
            h(this, Y, void 0),
            h(this, q, void 0),
            h(this, Z, void 0),
            (this.update = (e) => {
              requestAnimationFrame(() => {
                if (!d(this, G))
                  try {
                    ((e, t, n) => (p(e, t, "access private method"), n))(
                      this,
                      K,
                      X
                    ).call(this, e);
                  } catch {}
              });
            }),
            (this.destroy = () => {
              var e, t, n;
              null == (e = d(this, Z)) || e.unBind(),
                null == (t = d(this, Z)) || t.removeEvent(d(this, V)),
                null == (n = d(this, G)) || n.destroy(),
                f(this, G, void 0);
            }),
            (this.show = (e) => {
              const t = d(this, q).get(o.U7);
              requestAnimationFrame(() => {
                var n, r;
                null == (n = d(this, G)) ||
                  n.setProps({
                    getReferenceClientRect: () => {
                      let n = t.nodeDOM(e.$pos.pos - 1);
                      return (
                        (!n || !(n instanceof HTMLElement)) && (n = e.el),
                        n.getBoundingClientRect()
                      );
                    },
                  }),
                  null == (r = d(this, G)) || r.show();
              });
            }),
            (this.hide = () => {
              var e;
              null == (e = d(this, G)) || e.hide();
            }),
            f(this, q, e.ctx),
            f(this, V, e.content),
            f(this, Y, e.tippyOptions ?? {});
        }
      }
      (G = new WeakMap()),
        (V = new WeakMap()),
        (Y = new WeakMap()),
        (q = new WeakMap()),
        (Z = new WeakMap()),
        (K = new WeakSet()),
        (X = function (e) {
          const t = d(this, q).get(H.key);
          t.bind(d(this, q), (e) => {
            "hide" === e.type ? this.hide() : this.show(e.active);
          }),
            f(this, Z, t),
            d(this, Z).addEvent(d(this, V)),
            (d(this, V).draggable = !0),
            f(
              this,
              G,
              (0, u.ZP)(e.dom, {
                trigger: "manual",
                placement: "left-start",
                interactive: !0,
                ...d(this, Y),
                content: d(this, V),
              })
            );
        });
      const ee = [J, U, H, W];
      (ee.key = J.key), (ee.pluginKey = W.key);
    },
    325453: function (e, t, n) {
      n.d(t, {
        oc: function () {
          return u;
        },
        ox: function () {
          return a;
        },
      });
      var r = n(187280),
        i = n(39705),
        o = n(942105);
      const s = (e, t) => (
          Object.assign(e, {
            meta: { package: "@milkdown/plugin-cursor", ...t },
          }),
          e
        ),
        a = (0, o.Tu)({}, "dropCursorConfig");
      s(a, { displayName: "Ctx<dropCursor>" });
      const l = (0, o.x6)((e) => (0, r.q)(e.get(a.key)));
      s(l, { displayName: "Prose<dropCursor>" });
      const c = (0, o.x6)(() => (0, i.d)());
      s(c, { displayName: "Prose<gapCursor>" });
      const u = [a, l, c];
    },
    918312: function (e, t, n) {
      n.d(t, {
        m8: function () {
          return V;
        },
        Ow: function () {
          return H;
        },
        N7: function () {
          return U;
        },
      });
      var r = n(216706),
        i = n(706686),
        o = n(102396);
      const s = Math.pow(2, 16);
      function a(e) {
        return 65535 & e;
      }
      class l {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class c {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && c.empty))
            return c.empty;
        }
        recover(e) {
          let t = 0,
            n = a(e);
          if (!this.inverted)
            for (let r = 0; r < n; r++)
              t += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / s;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            i = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
          for (let a = 0; a < this.ranges.length; a += 3) {
            let c = this.ranges[a] - (this.inverted ? r : 0);
            if (c > e) break;
            let u = this.ranges[a + i],
              p = this.ranges[a + o],
              d = c + u;
            if (e <= d) {
              let i =
                c + r + ((u ? (e == c ? -1 : e == d ? 1 : t) : t) < 0 ? 0 : p);
              if (n) return i;
              let o = e == (t < 0 ? c : d) ? null : a / 3 + (e - c) * s,
                h = e == c ? 2 : e == d ? 1 : 4;
              return (t < 0 ? e != c : e != d) && (h |= 8), new l(i, h, o);
            }
            r += p - u;
          }
          return n ? e + r : new l(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = a(t),
            i = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
          for (let s = 0; s < this.ranges.length; s += 3) {
            let t = this.ranges[s] - (this.inverted ? n : 0);
            if (t > e) break;
            let a = this.ranges[s + i];
            if (e <= t + a && s == 3 * r) return !0;
            n += this.ranges[s + o] - a;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
              s = o - (this.inverted ? i : 0),
              a = o + (this.inverted ? 0 : i),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + l, a, a + c), (i += c - l);
          }
        }
        invert() {
          return new c(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? c.empty : new c(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      c.empty = new c([]);
      class u {
        constructor(e = [], t, n = 0, r = e.length) {
          (this.maps = e), (this.mirror = t), (this.from = n), (this.to = r);
        }
        slice(e = 0, t = this.maps.length) {
          return new u(this.maps, this.mirror, e, t);
        }
        copy() {
          return new u(
            this.maps.slice(),
            this.mirror && this.mirror.slice(),
            this.from,
            this.to
          );
        }
        appendMap(e, t) {
          (this.to = this.maps.push(e)),
            null != t && this.setMirror(this.maps.length - 1, t);
        }
        appendMapping(e) {
          for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
            let r = e.getMirror(t);
            this.appendMap(e.maps[t], null != r && r < t ? n + r : void 0);
          }
        }
        getMirror(e) {
          if (this.mirror)
            for (let t = 0; t < this.mirror.length; t++)
              if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
        }
        setMirror(e, t) {
          this.mirror || (this.mirror = []), this.mirror.push(e, t);
        }
        appendMappingInverted(e) {
          for (
            let t = e.maps.length - 1, n = this.maps.length + e.maps.length;
            t >= 0;
            t--
          ) {
            let r = e.getMirror(t);
            this.appendMap(
              e.maps[t].invert(),
              null != r && r > t ? n - r - 1 : void 0
            );
          }
        }
        invert() {
          let e = new u();
          return e.appendMappingInverted(this), e;
        }
        map(e, t = 1) {
          if (this.mirror) return this._map(e, t, !0);
          for (let n = this.from; n < this.to; n++) e = this.maps[n].map(e, t);
          return e;
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        _map(e, t, n) {
          let r = 0;
          for (let i = this.from; i < this.to; i++) {
            let n = this.maps[i].mapResult(e, t);
            if (null != n.recover) {
              let t = this.getMirror(i);
              if (null != t && t > i && t < this.to) {
                (i = t), (e = this.maps[t].recover(n.recover));
                continue;
              }
            }
            (r |= n.delInfo), (e = n.pos);
          }
          return n ? e : new l(e, r, null);
        }
      }
      const p = Object.create(null);
      class d {
        getMap() {
          return c.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = p[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in p)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (p[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class h {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new h(e, null);
        }
        static fail(e) {
          return new h(null, e);
        }
        static fromReplace(e, t, n, r) {
          try {
            return h.ok(e.replace(t, n, r));
          } catch (J) {
            if (J instanceof o.e4) return h.fail(J.message);
            throw J;
          }
        }
      }
      function f(e, t, n) {
        let r = [];
        for (let i = 0; i < e.childCount; i++) {
          let o = e.child(i);
          o.content.size && (o = o.copy(f(o.content, t, o))),
            o.isInline && (o = t(o, n, i)),
            r.push(o);
        }
        return o.HY.fromArray(r);
      }
      class m extends d {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            r = n.node(n.sharedDepth(this.to)),
            i = new o.p2(
              f(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                r
              ),
              t.openStart,
              t.openEnd
            );
          return h.fromReplace(e, this.from, this.to, i);
        }
        invert() {
          return new g(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new m(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof m &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new m(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new m(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("addMark", m);
      class g extends d {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new o.p2(
              f(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return h.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new m(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new g(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof g &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new g(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new g(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("removeMark", g);
      class y extends d {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return h.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return h.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new o.p2(o.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new y(this.pos, t.marks[n]);
              return new y(this.pos, this.mark);
            }
          }
          return new k(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new y(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new y(t.pos, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("addNodeMark", y);
      class k extends d {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return h.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return h.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new o.p2(o.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new y(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new k(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON"
            );
          return new k(t.pos, e.markFromJSON(t.mark));
        }
      }
      d.jsonID("removeNodeMark", k);
      class b extends d {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && w(e, this.from, this.to)
            ? h.fail("Structure replace would overwrite content")
            : h.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new c([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new b(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to)
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new b(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof b) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? o.p2.empty
                  : new o.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd
                    );
              return new b(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? o.p2.empty
                : new o.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd
                  );
            return new b(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new b(t.from, t.to, o.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      d.jsonID("replace", b);
      class v extends d {
        constructor(e, t, n, r, i, o, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = o),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (w(e, this.from, this.gapFrom) || w(e, this.gapTo, this.to))
          )
            return h.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return h.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? h.fromReplace(e, this.from, this.to, n)
            : h.fail("Content does not fit in gap");
        }
        getMap() {
          return new c([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new v(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            i = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos
            ? null
            : new v(
                t.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON"
            );
          return new v(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            o.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure
          );
        }
      }
      function w(e, t, n) {
        let r = e.resolve(t),
          i = n - t,
          o = r.depth;
        for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
          o--, i--;
        if (i > 0) {
          let e = r.node(o).maybeChild(r.indexAfter(o));
          for (; i > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), i--;
          }
        }
        return !1;
      }
      d.jsonID("replaceAround", v);
      class S extends d {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return h.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let i in t.attrs) n[i] = t.attrs[i];
          n[this.attr] = this.value;
          let r = t.type.create(n, null, t.marks);
          return h.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new o.p2(o.HY.from(r), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return c.empty;
        }
        invert(e) {
          return new S(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new S(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new S(t.pos, t.attr, t.value);
        }
      }
      d.jsonID("attr", S);
      let x = class extends Error {};
      (x = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((x.prototype = Object.create(Error.prototype)).constructor = x),
        (x.prototype.name = "TransformError");
      var E = n(616711);
      class N {
        constructor(e, t) {
          (this.items = e), (this.eventCount = t);
        }
        popEvent(e, t) {
          if (0 == this.eventCount) return null;
          let n,
            r,
            i = this.items.length;
          for (; ; i--) {
            if (this.items.get(i - 1).selection) {
              --i;
              break;
            }
          }
          t &&
            ((n = this.remapping(i, this.items.length)), (r = n.maps.length));
          let o,
            s,
            a = e.tr,
            l = [],
            c = [];
          return (
            this.items.forEach(
              (e, t) => {
                if (!e.step)
                  return (
                    n || ((n = this.remapping(i, t + 1)), (r = n.maps.length)),
                    r--,
                    void c.push(e)
                  );
                if (n) {
                  c.push(new T(e.map));
                  let t,
                    i = e.step.map(n.slice(r));
                  i &&
                    a.maybeStep(i).doc &&
                    ((t = a.mapping.maps[a.mapping.maps.length - 1]),
                    l.push(new T(t, void 0, void 0, l.length + c.length))),
                    r--,
                    t && n.appendMap(t, r);
                } else a.maybeStep(e.step);
                return e.selection
                  ? ((o = n ? e.selection.map(n.slice(r)) : e.selection),
                    (s = new N(
                      this.items.slice(0, i).append(c.reverse().concat(l)),
                      this.eventCount - 1
                    )),
                    !1)
                  : void 0;
              },
              this.items.length,
              0
            ),
            { remaining: s, transform: a, selection: o }
          );
        }
        addTransform(e, t, n, r) {
          let i = [],
            o = this.eventCount,
            s = this.items,
            a = !r && s.length ? s.get(s.length - 1) : null;
          for (let c = 0; c < e.steps.length; c++) {
            let n,
              l = e.steps[c].invert(e.docs[c]),
              u = new T(e.mapping.maps[c], l, t);
            (n = a && a.merge(u)) &&
              ((u = n), c ? i.pop() : (s = s.slice(0, s.length - 1))),
              i.push(u),
              t && (o++, (t = void 0)),
              r || (a = u);
          }
          let l = o - n.depth;
          return (
            l > I &&
              ((s = (function (e, t) {
                let n;
                return (
                  e.forEach((e, r) => {
                    if (e.selection && 0 == t--) return (n = r), !1;
                  }),
                  e.slice(n)
                );
              })(s, l)),
              (o -= l)),
            new N(s.append(i), o)
          );
        }
        remapping(e, t) {
          let n = new u();
          return (
            this.items.forEach(
              (t, r) => {
                let i =
                  null != t.mirrorOffset && r - t.mirrorOffset >= e
                    ? n.maps.length - t.mirrorOffset
                    : void 0;
                n.appendMap(t.map, i);
              },
              e,
              t
            ),
            n
          );
        }
        addMaps(e) {
          return 0 == this.eventCount
            ? this
            : new N(this.items.append(e.map((e) => new T(e))), this.eventCount);
        }
        rebased(e, t) {
          if (!this.eventCount) return this;
          let n = [],
            r = Math.max(0, this.items.length - t),
            i = e.mapping,
            o = e.steps.length,
            s = this.eventCount;
          this.items.forEach((e) => {
            e.selection && s--;
          }, r);
          let a = t;
          this.items.forEach((t) => {
            let r = i.getMirror(--a);
            if (null == r) return;
            o = Math.min(o, r);
            let l = i.maps[r];
            if (t.step) {
              let o = e.steps[r].invert(e.docs[r]),
                c = t.selection && t.selection.map(i.slice(a + 1, r));
              c && s++, n.push(new T(l, o, c));
            } else n.push(new T(l));
          }, r);
          let l = [];
          for (let p = t; p < o; p++) l.push(new T(i.maps[p]));
          let c = this.items.slice(0, r).append(l).append(n),
            u = new N(c, s);
          return (
            u.emptyItemCount() > 500 &&
              (u = u.compress(this.items.length - n.length)),
            u
          );
        }
        emptyItemCount() {
          let e = 0;
          return (
            this.items.forEach((t) => {
              t.step || e++;
            }),
            e
          );
        }
        compress(e = this.items.length) {
          let t = this.remapping(0, e),
            n = t.maps.length,
            r = [],
            o = 0;
          return (
            this.items.forEach(
              (i, s) => {
                if (s >= e) r.push(i), i.selection && o++;
                else if (i.step) {
                  let e = i.step.map(t.slice(n)),
                    s = e && e.getMap();
                  if ((n--, s && t.appendMap(s, n), e)) {
                    let a = i.selection && i.selection.map(t.slice(n));
                    a && o++;
                    let l,
                      c = new T(s.invert(), e, a),
                      u = r.length - 1;
                    (l = r.length && r[u].merge(c)) ? (r[u] = l) : r.push(c);
                  }
                } else i.map && n--;
              },
              this.items.length,
              0
            ),
            new N(i.Z.from(r.reverse()), o)
          );
        }
      }
      N.empty = new N(i.Z.empty, 0);
      class T {
        constructor(e, t, n, r) {
          (this.map = e),
            (this.step = t),
            (this.selection = n),
            (this.mirrorOffset = r);
        }
        merge(e) {
          if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t) return new T(t.getMap().invert(), t, this.selection);
          }
        }
      }
      class A {
        constructor(e, t, n, r, i) {
          (this.done = e),
            (this.undone = t),
            (this.prevRanges = n),
            (this.prevTime = r),
            (this.prevComposition = i);
        }
      }
      const I = 20;
      function C(e) {
        let t = [];
        return e.forEach((e, n, r, i) => t.push(r, i)), t;
      }
      function O(e, t) {
        if (!e) return null;
        let n = [];
        for (let r = 0; r < e.length; r += 2) {
          let i = t.map(e[r], 1),
            o = t.map(e[r + 1], -1);
          i <= o && n.push(i, o);
        }
        return n;
      }
      function R(e, t, n, r) {
        let i = F(t),
          o = _.get(t).spec.config,
          s = (r ? e.undone : e.done).popEvent(t, i);
        if (!s) return;
        let a = s.selection.resolve(s.transform.doc),
          l = (r ? e.done : e.undone).addTransform(
            s.transform,
            t.selection.getBookmark(),
            o,
            i
          ),
          c = new A(r ? l : s.remaining, r ? s.remaining : l, null, 0, -1);
        n(
          s.transform
            .setSelection(a)
            .setMeta(_, { redo: r, historyState: c })
            .scrollIntoView()
        );
      }
      let M = !1,
        L = null;
      function F(e) {
        let t = e.plugins;
        if (L != t) {
          (M = !1), (L = t);
          for (let e = 0; e < t.length; e++)
            if (t[e].spec.historyPreserveItems) {
              M = !0;
              break;
            }
        }
        return M;
      }
      const _ = new E.H$("history"),
        D = new E.H$("closeHistory");
      function P(e = {}) {
        return (
          (e = {
            depth: e.depth || 100,
            newGroupDelay: e.newGroupDelay || 500,
          }),
          new E.Sy({
            key: _,
            state: {
              init: () => new A(N.empty, N.empty, null, 0, -1),
              apply: (t, n, r) =>
                (function (e, t, n, r) {
                  let i,
                    o = n.getMeta(_);
                  if (o) return o.historyState;
                  n.getMeta(D) && (e = new A(e.done, e.undone, null, 0, -1));
                  let s = n.getMeta("appendedTransaction");
                  if (0 == n.steps.length) return e;
                  if (s && s.getMeta(_))
                    return s.getMeta(_).redo
                      ? new A(
                          e.done.addTransform(n, void 0, r, F(t)),
                          e.undone,
                          C(n.mapping.maps[n.steps.length - 1]),
                          e.prevTime,
                          e.prevComposition
                        )
                      : new A(
                          e.done,
                          e.undone.addTransform(n, void 0, r, F(t)),
                          null,
                          e.prevTime,
                          e.prevComposition
                        );
                  if (
                    !1 === n.getMeta("addToHistory") ||
                    (s && !1 === s.getMeta("addToHistory"))
                  )
                    return (i = n.getMeta("rebased"))
                      ? new A(
                          e.done.rebased(n, i),
                          e.undone.rebased(n, i),
                          O(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition
                        )
                      : new A(
                          e.done.addMaps(n.mapping.maps),
                          e.undone.addMaps(n.mapping.maps),
                          O(e.prevRanges, n.mapping),
                          e.prevTime,
                          e.prevComposition
                        );
                  {
                    let i = n.getMeta("composition"),
                      o =
                        0 == e.prevTime ||
                        (!s &&
                          e.prevComposition != i &&
                          (e.prevTime < (n.time || 0) - r.newGroupDelay ||
                            !(function (e, t) {
                              if (!t) return !1;
                              if (!e.docChanged) return !0;
                              let n = !1;
                              return (
                                e.mapping.maps[0].forEach((e, r) => {
                                  for (let i = 0; i < t.length; i += 2)
                                    e <= t[i + 1] && r >= t[i] && (n = !0);
                                }),
                                n
                              );
                            })(n, e.prevRanges))),
                      a = s
                        ? O(e.prevRanges, n.mapping)
                        : C(n.mapping.maps[n.steps.length - 1]);
                    return new A(
                      e.done.addTransform(
                        n,
                        o ? t.selection.getBookmark() : void 0,
                        r,
                        F(t)
                      ),
                      N.empty,
                      a,
                      n.time,
                      null == i ? e.prevComposition : i
                    );
                  }
                })(n, r, t, e),
            },
            config: e,
            props: {
              handleDOMEvents: {
                beforeinput(e, t) {
                  let n = t.inputType,
                    r = "historyUndo" == n ? z : "historyRedo" == n ? B : null;
                  return !!r && (t.preventDefault(), r(e.state, e.dispatch));
                },
              },
            },
          })
        );
      }
      const z = (e, t) => {
          let n = _.getState(e);
          return !(!n || 0 == n.done.eventCount) && (t && R(n, e, t, !1), !0);
        },
        B = (e, t) => {
          let n = _.getState(e);
          return !(!n || 0 == n.undone.eventCount) && (t && R(n, e, t, !0), !0);
        };
      var $ = n(942105);
      const j = (e, t) => (
          Object.assign(e, {
            meta: { package: "@milkdown/plugin-history", ...t },
          }),
          e
        ),
        U = (0, $.r1)("Undo", () => () => z);
      j(U, { displayName: "Command<undo>" });
      const H = (0, $.r1)("Redo", () => () => B);
      j(H, { displayName: "Command<redo>" });
      const J = (0, $.Tu)({}, "historyProviderConfig");
      j(J, { displayName: "Ctx<historyProviderConfig>" });
      const W = (0, $.x6)((e) => P(e.get(J.key)));
      j(W, { displayName: "Ctx<historyProviderPlugin>" });
      const G = (0, $.Gv)("historyKeymap", {
        Undo: {
          shortcuts: "Mod-z",
          command: (e) => {
            const t = e.get(r.Xo);
            return () => t.call(U.key);
          },
        },
        Redo: {
          shortcuts: ["Mod-y", "Shift-Mod-z"],
          command: (e) => {
            const t = e.get(r.Xo);
            return () => t.call(H.key);
          },
        },
      });
      j(G.ctx, { displayName: "KeymapCtx<history>" }),
        j(G.shortcuts, { displayName: "Keymap<history>" });
      const V = [J, W, G, U, H].flat();
    },
    137424: function (e, t, n) {
      n.d(t, {
        WY: function () {
          return a;
        },
        RI: function () {
          return o;
        },
      });
      var r = n(616711),
        i = n(942105);
      const o = (0, i.Tu)({ type: "space", size: 2 }, "indentConfig");
      o.meta = {
        package: "@milkdown/plugin-indent",
        displayName: "Ctx<indentConfig>",
      };
      const s = (0, i.xM)((e) => ({
        Tab: (t, n) => {
          const i = e.get(o.key),
            { tr: s } = t,
            a = ((e, t) => {
              const { doc: n, selection: i } = e;
              if (!n || !i || !(i instanceof r.Bs || i instanceof r.C1))
                return e;
              const { to: o } = i,
                s =
                  "space" === t.type ? Array(t.size).fill(" ").join("") : "\t";
              return e.insertText(s, o);
            })(s, i);
          return !!a.docChanged && (null == n || n(a), !0);
        },
      }));
      s.meta = {
        package: "@milkdown/plugin-indent",
        displayName: "Shortcut<indent>",
      };
      const a = [o, s];
    },
    310118: function (e, t, n) {
      n.d(t, {
        X3: function () {
          return u;
        },
        QC: function () {
          return l;
        },
      });
      var r = n(480224),
        i = n(216706),
        o = n(616711),
        s = n(33198);
      class a {
        constructor() {
          (this.beforeMountedListeners = []),
            (this.mountedListeners = []),
            (this.updatedListeners = []),
            (this.markdownUpdatedListeners = []),
            (this.blurListeners = []),
            (this.focusListeners = []),
            (this.destroyListeners = []),
            (this.beforeMount = (e) => (
              this.beforeMountedListeners.push(e), this
            )),
            (this.mounted = (e) => (this.mountedListeners.push(e), this)),
            (this.updated = (e) => (this.updatedListeners.push(e), this));
        }
        get listeners() {
          return {
            beforeMount: this.beforeMountedListeners,
            mounted: this.mountedListeners,
            updated: this.updatedListeners,
            markdownUpdated: this.markdownUpdatedListeners,
            blur: this.blurListeners,
            focus: this.focusListeners,
            destroy: this.destroyListeners,
          };
        }
        markdownUpdated(e) {
          return this.markdownUpdatedListeners.push(e), this;
        }
        blur(e) {
          return this.blurListeners.push(e), this;
        }
        focus(e) {
          return this.focusListeners.push(e), this;
        }
        destroy(e) {
          return this.destroyListeners.push(e), this;
        }
      }
      const l = (0, r.oM)(new a(), "listener"),
        c = new o.H$("MILKDOWN_LISTENER"),
        u = (e) => (
          e.inject(l, new a()),
          async () => {
            await e.wait(i.Iq);
            const t = e.get(l),
              { listeners: n } = t;
            n.beforeMount.forEach((t) => t(e)), await e.wait(i.vc);
            const r = e.get(i.Ck);
            let a = null,
              u = null;
            const p = new o.Sy({
              key: c,
              view: () => ({
                destroy: () => {
                  n.destroy.forEach((t) => t(e));
                },
              }),
              props: {
                handleDOMEvents: {
                  focus: () => (n.focus.forEach((t) => t(e)), !1),
                  blur: () => (n.blur.forEach((t) => t(e)), !1),
                },
              },
              state: {
                init: () => {},
                apply: (t) =>
                  t.docChanged && !1 !== t.getMeta("addToHistory")
                    ? s(() => {
                        const { doc: i } = t;
                        if (
                          (n.updated.length > 0 &&
                            (null == a || !a.eq(i)) &&
                            n.updated.forEach((t) => {
                              t(e, i, a);
                            }),
                          n.markdownUpdated.length > 0 &&
                            (null == a || !a.eq(i)))
                        ) {
                          const t = r(i);
                          n.markdownUpdated.forEach((n) => {
                            n(e, t, u);
                          }),
                            (u = t);
                        }
                        a = i;
                      }, 200)()
                    : void 0,
              },
            });
            e.update(i.ZV, (e) => e.concat(p)),
              await e.wait(i.$B),
              n.mounted.forEach((t) => t(e));
          }
        );
      u.meta = {
        package: "@milkdown/plugin-listener",
        displayName: "Listener",
      };
    },
    240910: function (e, t, n) {
      n.d(t, {
        QR: function () {
          return E;
        },
        mA: function () {
          return C;
        },
        Nh: function () {
          return A;
        },
      });
      var r = n(942105),
        i = n(216228),
        o = n(763436),
        s = n(63306);
      c(/[A-Za-z]/), c(/[\dA-Za-z]/), c(/[#-'*+\--9=?A-Z^-~]/);
      c(/\d/), c(/[\dA-Fa-f]/), c(/[!-/:-@[-`{-~]/);
      function a(e) {
        return null !== e && e < -2;
      }
      function l(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      c(/\p{P}|\p{S}/u), c(/\s/);
      function c(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      function u(e, t, n, r) {
        const i = r ? r - 1 : Number.POSITIVE_INFINITY;
        let o = 0;
        return function (r) {
          if (l(r)) return e.enter(n), s(r);
          return t(r);
        };
        function s(r) {
          return l(r) && o++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
        }
      }
      const p = {
          tokenize: function (e, t, n) {
            const r = this,
              i = r.events[r.events.length - 1],
              o =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0;
            let s = 0;
            return function (t) {
              return (
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                l(t)
              );
            };
            function l(t) {
              return 36 === t
                ? (e.consume(t), s++, l)
                : s < 2
                ? n(t)
                : (e.exit("mathFlowFenceSequence"), u(e, c, "whitespace")(t));
            }
            function c(t) {
              return null === t || a(t)
                ? h(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  p(t));
            }
            function p(t) {
              return null === t || a(t)
                ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), h(t))
                : 36 === t
                ? n(t)
                : (e.consume(t), p);
            }
            function h(n) {
              return (
                e.exit("mathFlowFence"),
                r.interrupt ? t(n) : e.attempt(d, f, k)(n)
              );
            }
            function f(t) {
              return e.attempt({ tokenize: b, partial: !0 }, k, m)(t);
            }
            function m(t) {
              return (o ? u(e, g, "linePrefix", o + 1) : g)(t);
            }
            function g(t) {
              return null === t
                ? k(t)
                : a(t)
                ? e.attempt(d, f, k)(t)
                : (e.enter("mathFlowValue"), y(t));
            }
            function y(t) {
              return null === t || a(t)
                ? (e.exit("mathFlowValue"), g(t))
                : (e.consume(t), y);
            }
            function k(n) {
              return e.exit("mathFlow"), t(n);
            }
            function b(e, t, n) {
              let i = 0;
              return u(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    o(t)
                  );
                },
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              );
              function o(t) {
                return 36 === t
                  ? (i++, e.consume(t), o)
                  : i < s
                  ? n(t)
                  : (e.exit("mathFlowFenceSequence"), u(e, l, "whitespace")(t));
              }
              function l(r) {
                return null === r || a(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        d = {
          tokenize: function (e, t, n) {
            const r = this;
            return function (n) {
              if (null === n) return t(n);
              return (
                e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), i
              );
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      function h(e) {
        let t = (e || {}).singleDollarTextMath;
        return (
          (null !== t && void 0 !== t) || (t = !0),
          {
            tokenize: function (e, n, r) {
              let i,
                o,
                s = 0;
              return function (t) {
                return e.enter("mathText"), e.enter("mathTextSequence"), l(t);
              };
              function l(n) {
                return 36 === n
                  ? (e.consume(n), s++, l)
                  : s < 2 && !t
                  ? r(n)
                  : (e.exit("mathTextSequence"), c(n));
              }
              function c(t) {
                return null === t
                  ? r(t)
                  : 36 === t
                  ? ((o = e.enter("mathTextSequence")), (i = 0), p(t))
                  : 32 === t
                  ? (e.enter("space"), e.consume(t), e.exit("space"), c)
                  : a(t)
                  ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    c)
                  : (e.enter("mathTextData"), u(t));
              }
              function u(t) {
                return null === t || 32 === t || 36 === t || a(t)
                  ? (e.exit("mathTextData"), c(t))
                  : (e.consume(t), u);
              }
              function p(t) {
                return 36 === t
                  ? (e.consume(t), i++, p)
                  : i === s
                  ? (e.exit("mathTextSequence"), e.exit("mathText"), n(t))
                  : ((o.type = "mathTextData"), u(t));
              }
            },
            resolve: f,
            previous: m,
          }
        );
      }
      function f(e) {
        let t,
          n,
          r = e.length - 4,
          i = 3;
        if (
          ("lineEnding" === e[i][1].type || "space" === e[i][1].type) &&
          ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
        )
          for (t = i; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[i][1].type = "mathTextPadding"),
                (i += 2),
                (r -= 2);
              break;
            }
        for (t = i - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
            : (t !== r && "lineEnding" !== e[t][1].type) ||
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function m(e) {
        return (
          36 !== e ||
          "characterEscape" === this.events[this.events.length - 1][1].type
        );
      }
      const g = {};
      function y(e) {
        const t = e || g,
          n = this.data(),
          r = n.micromarkExtensions || (n.micromarkExtensions = []),
          i = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
          a = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
        r.push(
          (function (e) {
            return { flow: { 36: p }, text: { 36: h(e) } };
          })(t)
        ),
          i.push(
            (function () {
              return {
                enter: {
                  mathFlow: function (e) {
                    this.enter(
                      {
                        type: "math",
                        meta: null,
                        value: "",
                        data: {
                          hName: "pre",
                          hChildren: [
                            {
                              type: "element",
                              tagName: "code",
                              properties: {
                                className: ["language-math", "math-display"],
                              },
                              children: [],
                            },
                          ],
                        },
                      },
                      e
                    );
                  },
                  mathFlowFenceMeta: function () {
                    this.buffer();
                  },
                  mathText: function (e) {
                    this.enter(
                      {
                        type: "inlineMath",
                        value: "",
                        data: {
                          hName: "code",
                          hProperties: {
                            className: ["language-math", "math-inline"],
                          },
                          hChildren: [],
                        },
                      },
                      e
                    ),
                      this.buffer();
                  },
                },
                exit: {
                  mathFlow: function (e) {
                    const t = this.resume().replace(
                        /^(\r?\n|\r)|(\r?\n|\r)$/g,
                        ""
                      ),
                      n = this.stack[this.stack.length - 1];
                    (0, o.ok)("math" === n.type), this.exit(e), (n.value = t);
                    const r = n.data.hChildren[0];
                    (0, o.ok)("element" === r.type),
                      (0, o.ok)("code" === r.tagName),
                      r.children.push({ type: "text", value: t }),
                      (this.data.mathFlowInside = void 0);
                  },
                  mathFlowFence: function () {
                    this.data.mathFlowInside ||
                      (this.buffer(), (this.data.mathFlowInside = !0));
                  },
                  mathFlowFenceMeta: function () {
                    const e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    (0, o.ok)("math" === t.type), (t.meta = e);
                  },
                  mathFlowValue: e,
                  mathText: function (e) {
                    const t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (0, o.ok)("inlineMath" === n.type),
                      this.exit(e),
                      (n.value = t),
                      n.data.hChildren.push({ type: "text", value: t });
                  },
                  mathTextData: e,
                },
              };
              function e(e) {
                this.config.enter.data.call(this, e),
                  this.config.exit.data.call(this, e);
              }
            })()
          ),
          a.push(
            (function (e) {
              let t = (e || {}).singleDollarTextMath;
              return (
                (null !== t && void 0 !== t) || (t = !0),
                (n.peek = function () {
                  return "$";
                }),
                {
                  unsafe: [
                    { character: "\r", inConstruct: "mathFlowMeta" },
                    { character: "\n", inConstruct: "mathFlowMeta" },
                    {
                      character: "$",
                      after: t ? void 0 : "\\$",
                      inConstruct: "phrasing",
                    },
                    { character: "$", inConstruct: "mathFlowMeta" },
                    { atBreak: !0, character: "$", after: "\\$" },
                  ],
                  handlers: {
                    math: function (e, t, n, r) {
                      const i = e.value || "",
                        o = n.createTracker(r),
                        a = "$".repeat(Math.max((0, s.J)(i, "$") + 1, 2)),
                        l = n.enter("mathFlow");
                      let c = o.move(a);
                      if (e.meta) {
                        const t = n.enter("mathFlowMeta");
                        (c += o.move(
                          n.safe(e.meta, {
                            after: "\n",
                            before: c,
                            encode: ["$"],
                            ...o.current(),
                          })
                        )),
                          t();
                      }
                      return (
                        (c += o.move("\n")),
                        i && (c += o.move(i + "\n")),
                        (c += o.move(a)),
                        l(),
                        c
                      );
                    },
                    inlineMath: n,
                  },
                }
              );
              function n(e, n, r) {
                let i = e.value || "",
                  o = 1;
                for (
                  t || o++;
                  new RegExp("(^|[^$])" + "\\$".repeat(o) + "([^$]|$)").test(i);

                )
                  o++;
                const s = "$".repeat(o);
                /[^ \r\n]/.test(i) &&
                  ((/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i)) ||
                    /^\$|\$$/.test(i)) &&
                  (i = " " + i + " ");
                let a = -1;
                for (; ++a < r.unsafe.length; ) {
                  const e = r.unsafe[a];
                  if (!e.atBreak) continue;
                  const t = r.compilePattern(e);
                  let n;
                  for (; (n = t.exec(i)); ) {
                    let e = n.index;
                    10 === i.codePointAt(e) &&
                      13 === i.codePointAt(e - 1) &&
                      e--,
                      (i = i.slice(0, e) + " " + i.slice(n.index + 1));
                  }
                }
                return s + i + s;
              }
            })(t)
          );
      }
      var k = n(102396),
        b = n(661571),
        v = n(907306);
      const w = (e, t) => (
          Object.assign(e, {
            meta: { package: "@milkdown/plugin-math", ...t },
          }),
          e
        ),
        S = (0, r.te)("remarkMath", () => y);
      w(S.plugin, { displayName: "Remark<remarkMath>" }),
        w(S.options, { displayName: "RemarkConfig<remarkMath>" });
      const x = "math_inline",
        E = (0, r.Tu)({}, "katexOptions");
      w(E, { displayName: "Ctx<katexOptions>" });
      const N = (0, r.yU)("math_inline", (e) => ({
        group: "inline",
        content: "text*",
        inline: !0,
        atom: !0,
        parseDOM: [
          {
            tag: `span[data-type="${x}"]`,
            getContent: (e, t) => {
              if (!(e instanceof HTMLElement)) throw (0, v.GZ)(e);
              return k.HY.from(t.text(e.dataset.value ?? ""));
            },
          },
        ],
        toDOM: (t) => {
          const n = t.textContent,
            r = document.createElement("span");
          return (
            (r.dataset.type = x),
            (r.dataset.value = n),
            i.Z.render(n, r, e.get(E.key)),
            r
          );
        },
        parseMarkdown: {
          match: (e) => "inlineMath" === e.type,
          runner: (e, t, n) => {
            e.openNode(n).addText(t.value).closeNode();
          },
        },
        toMarkdown: {
          match: (e) => e.type.name === x,
          runner: (e, t) => {
            e.addNode("inlineMath", void 0, t.textContent);
          },
        },
      }));
      w(N.ctx, { displayName: "NodeSchemaCtx<mathInline>" }),
        w(N.node, { displayName: "NodeSchema<mathInline>" });
      const T = "math_block",
        A = (0, r.yU)("math_block", (e) => ({
          content: "text*",
          group: "block",
          marks: "",
          defining: !0,
          atom: !0,
          isolating: !0,
          attrs: { value: { default: "" } },
          parseDOM: [
            {
              tag: `div[data-type="${T}"]`,
              preserveWhitespace: "full",
              getAttrs: (e) => ({ value: e.dataset.value ?? "" }),
            },
          ],
          toDOM: (t) => {
            const n = t.attrs.value,
              r = document.createElement("div");
            return (
              (r.dataset.type = T),
              (r.dataset.value = n),
              i.Z.render(n, r, e.get(E.key)),
              r
            );
          },
          parseMarkdown: {
            match: ({ type: e }) => "math" === e,
            runner: (e, t, n) => {
              const r = t.value;
              e.addNode(n, { value: r });
            },
          },
          toMarkdown: {
            match: (e) => e.type.name === T,
            runner: (e, t) => {
              e.addNode("math", void 0, t.attrs.value);
            },
          },
        }));
      w(A.ctx, { displayName: "NodeSchemaCtx<mathBlock>" }),
        w(A.node, { displayName: "NodeSchema<mathBlock>" });
      const I = (0, r.Xt)(
        (e) =>
          new b.VK(/^\$\$\s$/, (t, n, r, i) => {
            const o = t.doc.resolve(r);
            return o
              .node(-1)
              .canReplaceWith(o.index(-1), o.indexAfter(-1), A.type(e))
              ? t.tr.delete(r, i).setBlockType(r, r, A.type(e))
              : null;
          })
      );
      w(I, { displayName: "InputRule<mathBlock>" });
      const C = [S, E, N, A, I].flat();
    },
    134294: function (e, t, n) {
      n.d(t, {
        MS: function () {
          return ye;
        },
        Vn: function () {
          return me;
        },
      });
      var r = n(551579),
        i = n(616711),
        o = n(956907);
      function s(e) {
        e.register(o.Z),
          (e.languages.c = e.languages.extend("clike", {
            comment: {
              pattern:
                /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
              greedy: !0,
            },
            string: {
              pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
              greedy: !0,
            },
            "class-name": {
              pattern:
                /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
              lookbehind: !0,
            },
            keyword:
              /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
            function: /\b[a-z_]\w*(?=\s*\()/i,
            number:
              /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
          })),
          e.languages.insertBefore("c", "string", {
            char: {
              pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
              greedy: !0,
            },
          }),
          e.languages.insertBefore("c", "string", {
            macro: {
              pattern:
                /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
              inside: {
                string: [
                  { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                  e.languages.c.string,
                ],
                char: e.languages.c.char,
                comment: e.languages.c.comment,
                "macro-name": [
                  { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                  {
                    pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                    lookbehind: !0,
                    alias: "function",
                  },
                ],
                directive: {
                  pattern: /^(#\s*)[a-z]+/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                "directive-hash": /^#/,
                punctuation: /##|\\(?=[\r\n])/,
                expression: { pattern: /\S[\s\S]*/, inside: e.languages.c },
              },
            },
          }),
          e.languages.insertBefore("c", "function", {
            constant:
              /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
          }),
          delete e.languages.c.boolean;
      }
      function a(e) {
        e.register(s),
          (function (e) {
            var t =
                /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
              n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
                /<keyword>/g,
                function () {
                  return t.source;
                }
              );
            (e.languages.cpp = e.languages.extend("c", {
              "class-name": [
                {
                  pattern: RegExp(
                    /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                      /<keyword>/g,
                      function () {
                        return t.source;
                      }
                    )
                  ),
                  lookbehind: !0,
                },
                /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
                /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
                /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
              ],
              keyword: t,
              number: {
                pattern:
                  /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                greedy: !0,
              },
              operator:
                />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
              boolean: /\b(?:false|true)\b/,
            })),
              e.languages.insertBefore("cpp", "string", {
                module: {
                  pattern: RegExp(
                    /(\b(?:import|module)\s+)/.source +
                      "(?:" +
                      /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/
                        .source +
                      "|" +
                      /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                        /<mod-name>/g,
                        function () {
                          return n;
                        }
                      ) +
                      ")"
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    string: /^[<"][\s\S]+/,
                    operator: /:/,
                    punctuation: /\./,
                  },
                },
                "raw-string": {
                  pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                  alias: "string",
                  greedy: !0,
                },
              }),
              e.languages.insertBefore("cpp", "keyword", {
                "generic-function": {
                  pattern:
                    /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                  inside: {
                    function: /^\w+/,
                    generic: {
                      pattern: /<[\s\S]+/,
                      alias: "class-name",
                      inside: e.languages.cpp,
                    },
                  },
                },
              }),
              e.languages.insertBefore("cpp", "operator", {
                "double-colon": { pattern: /::/, alias: "punctuation" },
              }),
              e.languages.insertBefore("cpp", "class-name", {
                "base-clause": {
                  pattern:
                    /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: e.languages.extend("cpp", {}),
                },
              }),
              e.languages.insertBefore(
                "inside",
                "double-colon",
                { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
                e.languages.cpp["base-clause"]
              );
          })(e);
      }
      function l(e) {
        e.register(a),
          (e.languages.arduino = e.languages.extend("cpp", {
            keyword:
              /\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,
            constant:
              /\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,
            builtin:
              /\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/,
          })),
          (e.languages.ino = e.languages.arduino);
      }
      function c(e) {
        !(function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            parameter: {
              pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: r.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var i = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "parameter",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              o = r.variable[1].inside,
              s = 0;
            s < i.length;
            s++
          )
            o[i[s]] = e.languages.bash[i[s]];
          (e.languages.sh = e.languages.bash),
            (e.languages.shell = e.languages.bash);
        })(e);
      }
      function u(e) {
        e.register(o.Z),
          (function (e) {
            function t(e, t) {
              return e.replace(/<<(\d+)>>/g, function (e, n) {
                return "(?:" + t[+n] + ")";
              });
            }
            function n(e, n, r) {
              return RegExp(t(e, n), r || "");
            }
            function r(e, t) {
              for (var n = 0; n < t; n++)
                e = e.replace(/<<self>>/g, function () {
                  return "(?:" + e + ")";
                });
              return e.replace(/<<self>>/g, "[^\\s\\S]");
            }
            var i =
                "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
              o = "class enum interface record struct",
              s =
                "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
              a =
                "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
            function l(e) {
              return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
            }
            var c = l(o),
              u = RegExp(l(i + " " + o + " " + s + " " + a)),
              p = l(o + " " + s + " " + a),
              d = l(i + " " + o + " " + a),
              h = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
              f = r(/\((?:[^()]|<<self>>)*\)/.source, 2),
              m = /@?\b[A-Za-z_]\w*\b/.source,
              g = t(/<<0>>(?:\s*<<1>>)?/.source, [m, h]),
              y = t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [p, g]),
              k = /\[\s*(?:,\s*)*\]/.source,
              b = t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [y, k]),
              v = t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [
                h,
                f,
                k,
              ]),
              w = t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [v]),
              S = t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [
                w,
                y,
                k,
              ]),
              x = { keyword: u, punctuation: /[<>()?,.:[\]]/ },
              E = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
              N = /"(?:\\.|[^\\"\r\n])*"/.source,
              T = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
            (e.languages.csharp = e.languages.extend("clike", {
              string: [
                {
                  pattern: n(/(^|[^$\\])<<0>>/.source, [T]),
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern: n(/(^|[^@$\\])<<0>>/.source, [N]),
                  lookbehind: !0,
                  greedy: !0,
                },
              ],
              "class-name": [
                {
                  pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [y]),
                  lookbehind: !0,
                  inside: x,
                },
                {
                  pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [
                    m,
                    S,
                  ]),
                  lookbehind: !0,
                  inside: x,
                },
                {
                  pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [m]),
                  lookbehind: !0,
                },
                {
                  pattern: n(/(\b<<0>>\s+)<<1>>/.source, [c, g]),
                  lookbehind: !0,
                  inside: x,
                },
                {
                  pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [y]),
                  lookbehind: !0,
                  inside: x,
                },
                { pattern: n(/(\bwhere\s+)<<0>>/.source, [m]), lookbehind: !0 },
                {
                  pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [b]),
                  lookbehind: !0,
                  inside: x,
                },
                {
                  pattern: n(
                    /\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/
                      .source,
                    [S, d, m]
                  ),
                  inside: x,
                },
              ],
              keyword: u,
              number:
                /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
              operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
              punctuation: /\?\.?|::|[{}[\];(),.:]/,
            })),
              e.languages.insertBefore("csharp", "number", {
                range: { pattern: /\.\./, alias: "operator" },
              }),
              e.languages.insertBefore("csharp", "punctuation", {
                "named-parameter": {
                  pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [m]),
                  lookbehind: !0,
                  alias: "punctuation",
                },
              }),
              e.languages.insertBefore("csharp", "class-name", {
                namespace: {
                  pattern: n(
                    /(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/
                      .source,
                    [m]
                  ),
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
                "type-expression": {
                  pattern: n(
                    /(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/
                      .source,
                    [f]
                  ),
                  lookbehind: !0,
                  alias: "class-name",
                  inside: x,
                },
                "return-type": {
                  pattern: n(
                    /<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/
                      .source,
                    [S, y]
                  ),
                  inside: x,
                  alias: "class-name",
                },
                "constructor-invocation": {
                  pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [S]),
                  lookbehind: !0,
                  inside: x,
                  alias: "class-name",
                },
                "generic-method": {
                  pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [m, h]),
                  inside: {
                    function: n(/^<<0>>/.source, [m]),
                    generic: {
                      pattern: RegExp(h),
                      alias: "class-name",
                      inside: x,
                    },
                  },
                },
                "type-list": {
                  pattern: n(
                    /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/
                      .source,
                    [c, g, m, S, u.source, f, /\bnew\s*\(\s*\)/.source]
                  ),
                  lookbehind: !0,
                  inside: {
                    "record-arguments": {
                      pattern: n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [g, f]),
                      lookbehind: !0,
                      greedy: !0,
                      inside: e.languages.csharp,
                    },
                    keyword: u,
                    "class-name": { pattern: RegExp(S), greedy: !0, inside: x },
                    punctuation: /[,()]/,
                  },
                },
                preprocessor: {
                  pattern: /(^[\t ]*)#.*/m,
                  lookbehind: !0,
                  alias: "property",
                  inside: {
                    directive: {
                      pattern:
                        /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
                      lookbehind: !0,
                      alias: "keyword",
                    },
                  },
                },
              });
            var A = N + "|" + E,
              I = t(
                /\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/
                  .source,
                [A]
              ),
              C = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [I]), 2),
              O =
                /\b(?:assembly|event|field|method|module|param|property|return|type)\b/
                  .source,
              R = t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [y, C]);
            e.languages.insertBefore("csharp", "class-name", {
              attribute: {
                pattern: n(
                  /((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/
                    .source,
                  [O, R]
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  target: {
                    pattern: n(/^<<0>>(?=\s*:)/.source, [O]),
                    alias: "keyword",
                  },
                  "attribute-arguments": {
                    pattern: n(/\(<<0>>*\)/.source, [C]),
                    inside: e.languages.csharp,
                  },
                  "class-name": {
                    pattern: RegExp(y),
                    inside: { punctuation: /\./ },
                  },
                  punctuation: /[:,]/,
                },
              },
            });
            var M = /:[^}\r\n]+/.source,
              L = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [I]), 2),
              F = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [L, M]),
              _ = r(
                t(
                  /[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/
                    .source,
                  [A]
                ),
                2
              ),
              D = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [_, M]);
            function P(t, r) {
              return {
                interpolation: {
                  pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [t]),
                  lookbehind: !0,
                  inside: {
                    "format-string": {
                      pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [
                        r,
                        M,
                      ]),
                      lookbehind: !0,
                      inside: { punctuation: /^:/ },
                    },
                    punctuation: /^\{|\}$/,
                    expression: {
                      pattern: /[\s\S]+/,
                      alias: "language-csharp",
                      inside: e.languages.csharp,
                    },
                  },
                },
                string: /[\s\S]+/,
              };
            }
            e.languages.insertBefore("csharp", "string", {
              "interpolation-string": [
                {
                  pattern: n(
                    /(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/
                      .source,
                    [F]
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: P(F, L),
                },
                {
                  pattern: n(
                    /(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,
                    [D]
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: P(D, _),
                },
              ],
              char: { pattern: RegExp(E), greedy: !0 },
            }),
              (e.languages.dotnet = e.languages.cs = e.languages.csharp);
          })(e);
      }
      (s.displayName = "c"),
        (s.aliases = []),
        (a.displayName = "cpp"),
        (a.aliases = []),
        (l.displayName = "arduino"),
        (l.aliases = ["ino"]),
        (c.displayName = "bash"),
        (c.aliases = ["sh", "shell"]),
        (u.displayName = "csharp"),
        (u.aliases = ["cs", "dotnet"]);
      var p = n(678990),
        d = n(133906);
      function h(e) {
        !(function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              i = [];
            /^\w+$/.test(n) || i.push(/\w+/.exec(n)[0]),
              "diff" === n && i.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: i,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(e);
      }
      function f(e) {
        e.register(o.Z),
          (e.languages.go = e.languages.extend("clike", {
            string: {
              pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
              lookbehind: !0,
              greedy: !0,
            },
            keyword:
              /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
            boolean: /\b(?:_|false|iota|nil|true)\b/,
            number: [
              /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
              /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
              /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
            ],
            operator:
              /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
            builtin:
              /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
          })),
          e.languages.insertBefore("go", "string", {
            char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
          }),
          delete e.languages.go["class-name"];
      }
      function m(e) {
        e.languages.ini = {
          comment: { pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m, lookbehind: !0 },
          section: {
            pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
            lookbehind: !0,
            inside: {
              "section-name": {
                pattern:
                  /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
                lookbehind: !0,
                alias: "selector",
              },
              punctuation: /\[|\]/,
            },
          },
          key: {
            pattern:
              /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
            lookbehind: !0,
            alias: "attr-name",
          },
          value: {
            pattern:
              /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
            lookbehind: !0,
            alias: "attr-value",
            inside: {
              "inner-value": { pattern: /^("|').+(?=\1$)/, lookbehind: !0 },
            },
          },
          punctuation: /=/,
        };
      }
      function g(e) {
        e.register(o.Z),
          (function (e) {
            var t =
                /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
              n = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,
              r = {
                pattern: RegExp(
                  /(^|[^\w.])/.source +
                    n +
                    /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source
                ),
                lookbehind: !0,
                inside: {
                  namespace: {
                    pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
                    inside: { punctuation: /\./ },
                  },
                  punctuation: /\./,
                },
              };
            (e.languages.java = e.languages.extend("clike", {
              string: {
                pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
                lookbehind: !0,
                greedy: !0,
              },
              "class-name": [
                r,
                {
                  pattern: RegExp(
                    /(^|[^\w.])/.source +
                      n +
                      /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/
                        .source
                  ),
                  lookbehind: !0,
                  inside: r.inside,
                },
                {
                  pattern: RegExp(
                    /(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/
                      .source +
                      n +
                      /[A-Z]\w*\b/.source
                  ),
                  lookbehind: !0,
                  inside: r.inside,
                },
              ],
              keyword: t,
              function: [
                e.languages.clike.function,
                { pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
              ],
              number:
                /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
              operator: {
                pattern:
                  /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
                lookbehind: !0,
              },
              constant: /\b[A-Z][A-Z_\d]+\b/,
            })),
              e.languages.insertBefore("java", "string", {
                "triple-quoted-string": {
                  pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
                  greedy: !0,
                  alias: "string",
                },
                char: { pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/, greedy: !0 },
              }),
              e.languages.insertBefore("java", "class-name", {
                annotation: {
                  pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
                  lookbehind: !0,
                  alias: "punctuation",
                },
                generics: {
                  pattern:
                    /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
                  inside: {
                    "class-name": r,
                    keyword: t,
                    punctuation: /[<>(),.:]/,
                    operator: /[?&|]/,
                  },
                },
                import: [
                  {
                    pattern: RegExp(
                      /(\bimport\s+)/.source +
                        n +
                        /(?:[A-Z]\w*|\*)(?=\s*;)/.source
                    ),
                    lookbehind: !0,
                    inside: {
                      namespace: r.inside.namespace,
                      punctuation: /\./,
                      operator: /\*/,
                      "class-name": /\w+/,
                    },
                  },
                  {
                    pattern: RegExp(
                      /(\bimport\s+static\s+)/.source +
                        n +
                        /(?:\w+|\*)(?=\s*;)/.source
                    ),
                    lookbehind: !0,
                    alias: "static",
                    inside: {
                      namespace: r.inside.namespace,
                      static: /\b\w+$/,
                      punctuation: /\./,
                      operator: /\*/,
                      "class-name": /\w+/,
                    },
                  },
                ],
                namespace: {
                  pattern: RegExp(
                    /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
                      /<keyword>/g,
                      function () {
                        return t.source;
                      }
                    )
                  ),
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
              });
          })(e);
      }
      function y(e) {
        !(function (e) {
          var t = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" },
            n =
              /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
            r = "(?:[^\\\\-]|" + n.source + ")",
            i = RegExp(r + "-" + r),
            o = {
              pattern: /(<|')[^<>']+(?=[>']$)/,
              lookbehind: !0,
              alias: "variable",
            };
          e.languages.regex = {
            "char-class": {
              pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
              lookbehind: !0,
              inside: {
                "char-class-negation": {
                  pattern: /(^\[)\^/,
                  lookbehind: !0,
                  alias: "operator",
                },
                "char-class-punctuation": {
                  pattern: /^\[|\]$/,
                  alias: "punctuation",
                },
                range: {
                  pattern: i,
                  inside: {
                    escape: n,
                    "range-punctuation": { pattern: /-/, alias: "operator" },
                  },
                },
                "special-escape": t,
                "char-set": {
                  pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                  alias: "class-name",
                },
                escape: n,
              },
            },
            "special-escape": t,
            "char-set": {
              pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
              alias: "class-name",
            },
            backreference: [
              { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" },
              {
                pattern: /\\k<[^<>']+>/,
                alias: "keyword",
                inside: { "group-name": o },
              },
            ],
            anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" },
            escape: n,
            group: [
              {
                pattern:
                  /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                alias: "punctuation",
                inside: { "group-name": o },
              },
              { pattern: /\)/, alias: "punctuation" },
            ],
            quantifier: {
              pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
              alias: "number",
            },
            alternation: { pattern: /\|/, alias: "keyword" },
          };
        })(e);
      }
      (h.displayName = "diff"),
        (h.aliases = []),
        (f.displayName = "go"),
        (f.aliases = []),
        (m.displayName = "ini"),
        (m.aliases = []),
        (g.displayName = "java"),
        (g.aliases = []),
        (y.displayName = "regex"),
        (y.aliases = []);
      var k = n(416514);
      function b(e) {
        (e.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
          (e.languages.webmanifest = e.languages.json);
      }
      function v(e) {
        e.register(o.Z),
          (function (e) {
            (e.languages.kotlin = e.languages.extend("clike", {
              keyword: {
                pattern:
                  /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                lookbehind: !0,
              },
              function: [
                { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
                {
                  pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
                  lookbehind: !0,
                  greedy: !0,
                },
              ],
              number:
                /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
              operator:
                /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
            })),
              delete e.languages.kotlin["class-name"];
            var t = {
              "interpolation-punctuation": {
                pattern: /^\$\{?|\}$/,
                alias: "punctuation",
              },
              expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin },
            };
            e.languages.insertBefore("kotlin", "string", {
              "string-literal": [
                {
                  pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                  alias: "multiline",
                  inside: {
                    interpolation: {
                      pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                      inside: t,
                    },
                    string: /[\s\S]+/,
                  },
                },
                {
                  pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                  alias: "singleline",
                  inside: {
                    interpolation: {
                      pattern:
                        /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                      lookbehind: !0,
                      inside: t,
                    },
                    string: /[\s\S]+/,
                  },
                },
              ],
              char: {
                pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
                greedy: !0,
              },
            }),
              delete e.languages.kotlin.string,
              e.languages.insertBefore("kotlin", "keyword", {
                annotation: {
                  pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                  alias: "builtin",
                },
              }),
              e.languages.insertBefore("kotlin", "function", {
                label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" },
              }),
              (e.languages.kt = e.languages.kotlin),
              (e.languages.kts = e.languages.kotlin);
          })(e);
      }
      function w(e) {
        e.register(d.Z),
          (e.languages.less = e.languages.extend("css", {
            comment: [
              /\/\*[\s\S]*?\*\//,
              { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
            ],
            atrule: {
              pattern:
                /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
              inside: { punctuation: /[:()]/ },
            },
            selector: {
              pattern:
                /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
              inside: { variable: /@+[\w-]+/ },
            },
            property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
            operator: /[+\-*\/]/,
          })),
          e.languages.insertBefore("less", "property", {
            variable: [
              { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
              /@@?[\w-]+/,
            ],
            "mixin-usage": {
              pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
              lookbehind: !0,
              alias: "function",
            },
          });
      }
      function S(e) {
        e.languages.lua = {
          comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
          string: {
            pattern:
              /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: !0,
          },
          number:
            /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
          keyword:
            /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
          function: /(?!\d)\w+(?=\s*(?:[({]))/,
          operator: [
            /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
            { pattern: /(^|[^.])\.\.(?!\.)/, lookbehind: !0 },
          ],
          punctuation: /[\[\](){},;]|\.+|:+/,
        };
      }
      function x(e) {
        e.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "builtin-target": {
            pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            alias: "builtin",
          },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: "symbol",
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword:
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern:
              /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        };
      }
      function E(e) {
        !(function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              "(?:" +
              n.source +
              "(?:[ \t]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ \t]+" +
              n.source +
              ")?)",
            i =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function s(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<value>>/g, function () {
                  return e;
                });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + i + "|" + o + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: s(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: s(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: s(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: s(o), lookbehind: !0, greedy: !0 },
            number: {
              pattern: s(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(e);
      }
      (b.displayName = "json"),
        (b.aliases = ["webmanifest"]),
        (v.displayName = "kotlin"),
        (v.aliases = ["kt", "kts"]),
        (w.displayName = "less"),
        (w.aliases = []),
        (S.displayName = "lua"),
        (S.aliases = []),
        (x.displayName = "makefile"),
        (x.aliases = []),
        (E.displayName = "yaml"),
        (E.aliases = ["yml"]);
      var N = n(348768);
      function T(e) {
        e.register(s),
          (e.languages.objectivec = e.languages.extend("c", {
            string: {
              pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
              greedy: !0,
            },
            keyword:
              /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
          })),
          delete e.languages.objectivec["class-name"],
          (e.languages.objc = e.languages.objectivec);
      }
      function A(e) {
        !(function (e) {
          var t =
            /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/
              .source;
          e.languages.perl = {
            comment: [
              {
                pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
                lookbehind: !0,
                greedy: !0,
              },
              { pattern: /(^|[^\\$])#.*/, lookbehind: !0, greedy: !0 },
            ],
            string: [
              {
                pattern: RegExp(
                  /\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source +
                    "(?:" +
                    [
                      /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                      /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                      t,
                    ].join("|") +
                    ")"
                ),
                greedy: !0,
              },
              { pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/, greedy: !0 },
              { pattern: /'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 },
            ],
            regex: [
              {
                pattern: RegExp(
                  /\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source +
                    "(?:" +
                    [
                      /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                      /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                      t,
                    ].join("|") +
                    ")" +
                    /[msixpodualngc]*/.source
                ),
                greedy: !0,
              },
              {
                pattern: RegExp(
                  /(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source +
                    "(?:" +
                    [
                      /([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/
                        .source,
                      /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/
                        .source,
                      t + /\s*/.source + t,
                    ].join("|") +
                    ")" +
                    /[msixpodualngcer]*/.source
                ),
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern:
                  /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
                greedy: !0,
              },
            ],
            variable: [
              /[&*$@%]\{\^[A-Z]+\}/,
              /[&*$@%]\^[A-Z_]/,
              /[&*$@%]#?(?=\{)/,
              /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
              /[&*$@%]\d+/,
              /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/,
            ],
            filehandle: { pattern: /<(?![<=])\S*?>|\b_\b/, alias: "symbol" },
            "v-string": {
              pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
              alias: "string",
            },
            function: { pattern: /(\bsub[ \t]+)\w+/, lookbehind: !0 },
            keyword:
              /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
            number:
              /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
            operator:
              /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
            punctuation: /[{}[\];(),:]/,
          };
        })(e);
      }
      function I(e) {
        e.register(p.Z),
          (function (e) {
            function t(e, t) {
              return "___" + e.toUpperCase() + t + "___";
            }
            Object.defineProperties((e.languages["markup-templating"] = {}), {
              buildPlaceholders: {
                value: function (n, r, i, o) {
                  if (n.language === r) {
                    var s = (n.tokenStack = []);
                    (n.code = n.code.replace(i, function (e) {
                      if ("function" === typeof o && !o(e)) return e;
                      for (
                        var i, a = s.length;
                        -1 !== n.code.indexOf((i = t(r, a)));

                      )
                        ++a;
                      return (s[a] = e), i;
                    })),
                      (n.grammar = e.languages.markup);
                  }
                },
              },
              tokenizePlaceholders: {
                value: function (n, r) {
                  if (n.language === r && n.tokenStack) {
                    n.grammar = e.languages[r];
                    var i = 0,
                      o = Object.keys(n.tokenStack);
                    !(function s(a) {
                      for (var l = 0; l < a.length && !(i >= o.length); l++) {
                        var c = a[l];
                        if (
                          "string" === typeof c ||
                          (c.content && "string" === typeof c.content)
                        ) {
                          var u = o[i],
                            p = n.tokenStack[u],
                            d = "string" === typeof c ? c : c.content,
                            h = t(r, u),
                            f = d.indexOf(h);
                          if (f > -1) {
                            ++i;
                            var m = d.substring(0, f),
                              g = new e.Token(
                                r,
                                e.tokenize(p, n.grammar),
                                "language-" + r,
                                p
                              ),
                              y = d.substring(f + h.length),
                              k = [];
                            m && k.push.apply(k, s([m])),
                              k.push(g),
                              y && k.push.apply(k, s([y])),
                              "string" === typeof c
                                ? a.splice.apply(a, [l, 1].concat(k))
                                : (c.content = k);
                          }
                        } else c.content && s(c.content);
                      }
                      return a;
                    })(n.tokens);
                  }
                },
              },
            });
          })(e);
      }
      function C(e) {
        e.register(I),
          (function (e) {
            var t = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,
              n = [
                { pattern: /\b(?:false|true)\b/i, alias: "boolean" },
                {
                  pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                /\b(?:null)\b/i,
                /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/,
              ],
              r =
                /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
              i =
                /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,
              o = /[{}\[\](),:;]/;
            e.languages.php = {
              delimiter: {
                pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
                alias: "important",
              },
              comment: t,
              variable: /\$+(?:\w+\b|(?=\{))/,
              package: {
                pattern:
                  /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
              "class-name-definition": {
                pattern:
                  /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
                lookbehind: !0,
                alias: "class-name",
              },
              "function-definition": {
                pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
                lookbehind: !0,
                alias: "function",
              },
              keyword: [
                {
                  pattern:
                    /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
                  alias: "type-casting",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern:
                    /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
                  alias: "type-hint",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern:
                    /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
                  alias: "return-type",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern:
                    /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
                  alias: "type-declaration",
                  greedy: !0,
                },
                {
                  pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
                  alias: "type-declaration",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /\b(?:parent|self|static)(?=\s*::)/i,
                  alias: "static-context",
                  greedy: !0,
                },
                { pattern: /(\byield\s+)from\b/i, lookbehind: !0 },
                /\bclass\b/i,
                {
                  pattern:
                    /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
                  lookbehind: !0,
                },
              ],
              "argument-name": {
                pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
                lookbehind: !0,
              },
              "class-name": [
                {
                  pattern:
                    /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
                  greedy: !0,
                  lookbehind: !0,
                },
                { pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i, greedy: !0 },
                {
                  pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern:
                    /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  alias: "class-name-fully-qualified",
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /\b[a-z_]\w*(?=\s*\$)/i,
                  alias: "type-declaration",
                  greedy: !0,
                },
                {
                  pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                  alias: ["class-name-fully-qualified", "type-declaration"],
                  greedy: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /\b[a-z_]\w*(?=\s*::)/i,
                  alias: "static-context",
                  greedy: !0,
                },
                {
                  pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
                  alias: ["class-name-fully-qualified", "static-context"],
                  greedy: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
                  alias: "type-hint",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
                  alias: ["class-name-fully-qualified", "type-hint"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
                {
                  pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
                  alias: "return-type",
                  greedy: !0,
                  lookbehind: !0,
                },
                {
                  pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
                  alias: ["class-name-fully-qualified", "return-type"],
                  greedy: !0,
                  lookbehind: !0,
                  inside: { punctuation: /\\/ },
                },
              ],
              constant: n,
              function: {
                pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
              property: { pattern: /(->\s*)\w+/, lookbehind: !0 },
              number: r,
              operator: i,
              punctuation: o,
            };
            var s = {
                pattern:
                  /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
                lookbehind: !0,
                inside: e.languages.php,
              },
              a = [
                {
                  pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
                  alias: "nowdoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                      alias: "symbol",
                      inside: { punctuation: /^<<<'?|[';]$/ },
                    },
                  },
                },
                {
                  pattern:
                    /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
                  alias: "heredoc-string",
                  greedy: !0,
                  inside: {
                    delimiter: {
                      pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                      alias: "symbol",
                      inside: { punctuation: /^<<<"?|[";]$/ },
                    },
                    interpolation: s,
                  },
                },
                {
                  pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                  alias: "backtick-quoted-string",
                  greedy: !0,
                },
                {
                  pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                  alias: "single-quoted-string",
                  greedy: !0,
                },
                {
                  pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                  alias: "double-quoted-string",
                  greedy: !0,
                  inside: { interpolation: s },
                },
              ];
            e.languages.insertBefore("php", "variable", {
              string: a,
              attribute: {
                pattern:
                  /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
                greedy: !0,
                inside: {
                  "attribute-content": {
                    pattern: /^(#\[)[\s\S]+(?=\]$)/,
                    lookbehind: !0,
                    inside: {
                      comment: t,
                      string: a,
                      "attribute-class-name": [
                        {
                          pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                          alias: "class-name",
                          greedy: !0,
                          lookbehind: !0,
                        },
                        {
                          pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                          alias: ["class-name", "class-name-fully-qualified"],
                          greedy: !0,
                          lookbehind: !0,
                          inside: { punctuation: /\\/ },
                        },
                      ],
                      constant: n,
                      number: r,
                      operator: i,
                      punctuation: o,
                    },
                  },
                  delimiter: { pattern: /^#\[|\]$/, alias: "punctuation" },
                },
              },
            }),
              e.hooks.add("before-tokenize", function (t) {
                if (/<\?/.test(t.code)) {
                  e.languages["markup-templating"].buildPlaceholders(
                    t,
                    "php",
                    /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g
                  );
                }
              }),
              e.hooks.add("after-tokenize", function (t) {
                e.languages["markup-templating"].tokenizePlaceholders(t, "php");
              });
          })(e);
      }
      function O(e) {
        (e.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
          (e.languages.python[
            "string-interpolation"
          ].inside.interpolation.inside.rest = e.languages.python),
          (e.languages.py = e.languages.python);
      }
      function R(e) {
        e.languages.r = {
          comment: /#.*/,
          string: { pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          "percent-operator": { pattern: /%[^%\s]*%/, alias: "operator" },
          boolean: /\b(?:FALSE|TRUE)\b/,
          ellipsis: /\.\.(?:\.|\d+)/,
          number: [
            /\b(?:Inf|NaN)\b/,
            /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/,
          ],
          keyword:
            /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
          operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
          punctuation: /[(){}\[\],;]/,
        };
      }
      function M(e) {
        e.register(o.Z),
          (function (e) {
            (e.languages.ruby = e.languages.extend("clike", {
              comment: { pattern: /#.*|^=begin\s[\s\S]*?^=end/m, greedy: !0 },
              "class-name": {
                pattern:
                  /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
                lookbehind: !0,
                inside: { punctuation: /[.\\]/ },
              },
              keyword:
                /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
              operator:
                /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
              punctuation: /[(){}[\].,;]/,
            })),
              e.languages.insertBefore("ruby", "operator", {
                "double-colon": { pattern: /::/, alias: "punctuation" },
              });
            var t = {
              pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
              lookbehind: !0,
              inside: {
                content: {
                  pattern: /^(#\{)[\s\S]+(?=\}$)/,
                  lookbehind: !0,
                  inside: e.languages.ruby,
                },
                delimiter: { pattern: /^#\{|\}$/, alias: "punctuation" },
              },
            };
            delete e.languages.ruby.function;
            var n =
                "(?:" +
                [
                  /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                  /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
                  /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
                  /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/
                    .source,
                  /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source,
                ].join("|") +
                ")",
              r =
                /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/
                  .source;
            e.languages.insertBefore("ruby", "keyword", {
              "regex-literal": [
                {
                  pattern: RegExp(/%r/.source + n + /[egimnosux]{0,6}/.source),
                  greedy: !0,
                  inside: { interpolation: t, regex: /[\s\S]+/ },
                },
                {
                  pattern:
                    /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: { interpolation: t, regex: /[\s\S]+/ },
                },
              ],
              variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
              symbol: [
                {
                  pattern: RegExp(/(^|[^:]):/.source + r),
                  lookbehind: !0,
                  greedy: !0,
                },
                {
                  pattern: RegExp(
                    /([\r\n{(,][ \t]*)/.source + r + /(?=:(?!:))/.source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                },
              ],
              "method-definition": {
                pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
                lookbehind: !0,
                inside: {
                  function: /\b\w+$/,
                  keyword: /^self\b/,
                  "class-name": /^\w+/,
                  punctuation: /\./,
                },
              },
            }),
              e.languages.insertBefore("ruby", "string", {
                "string-literal": [
                  {
                    pattern: RegExp(/%[qQiIwWs]?/.source + n),
                    greedy: !0,
                    inside: { interpolation: t, string: /[\s\S]+/ },
                  },
                  {
                    pattern:
                      /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
                    greedy: !0,
                    inside: { interpolation: t, string: /[\s\S]+/ },
                  },
                  {
                    pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                      delimiter: {
                        pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
                        inside: { symbol: /\b\w+/, punctuation: /^<<[-~]?/ },
                      },
                      interpolation: t,
                      string: /[\s\S]+/,
                    },
                  },
                  {
                    pattern:
                      /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
                    alias: "heredoc-string",
                    greedy: !0,
                    inside: {
                      delimiter: {
                        pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
                        inside: {
                          symbol: /\b\w+/,
                          punctuation: /^<<[-~]?'|'$/,
                        },
                      },
                      string: /[\s\S]+/,
                    },
                  },
                ],
                "command-literal": [
                  {
                    pattern: RegExp(/%x/.source + n),
                    greedy: !0,
                    inside: {
                      interpolation: t,
                      command: { pattern: /[\s\S]+/, alias: "string" },
                    },
                  },
                  {
                    pattern:
                      /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
                    greedy: !0,
                    inside: {
                      interpolation: t,
                      command: { pattern: /[\s\S]+/, alias: "string" },
                    },
                  },
                ],
              }),
              delete e.languages.ruby.string,
              e.languages.insertBefore("ruby", "number", {
                builtin:
                  /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
                constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/,
              }),
              (e.languages.rb = e.languages.ruby);
          })(e);
      }
      function L(e) {
        !(function (e) {
          for (
            var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0;
            n < 2;
            n++
          )
            t = t.replace(/<self>/g, function () {
              return t;
            });
          (t = t.replace(/<self>/g, function () {
            return /[^\s\S]/.source;
          })),
            (e.languages.rust = {
              comment: [
                {
                  pattern: RegExp(/(^|[^\\])/.source + t),
                  lookbehind: !0,
                  greedy: !0,
                },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
              ],
              string: {
                pattern:
                  /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                greedy: !0,
              },
              char: {
                pattern:
                  /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                greedy: !0,
              },
              attribute: {
                pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                greedy: !0,
                alias: "attr-name",
                inside: { string: null },
              },
              "closure-params": {
                pattern:
                  /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "closure-punctuation": {
                    pattern: /^\||\|$/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" },
              "fragment-specifier": {
                pattern: /(\$\w+:)[a-z]+/,
                lookbehind: !0,
                alias: "punctuation",
              },
              variable: /\$\w+/,
              "function-definition": {
                pattern: /(\bfn\s+)\w+/,
                lookbehind: !0,
                alias: "function",
              },
              "type-definition": {
                pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                lookbehind: !0,
                alias: "class-name",
              },
              "module-declaration": [
                {
                  pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                  lookbehind: !0,
                  alias: "namespace",
                },
                {
                  pattern:
                    /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                  lookbehind: !0,
                  alias: "namespace",
                  inside: { punctuation: /::/ },
                },
              ],
              keyword: [
                /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
                /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
              ],
              function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
              macro: { pattern: /\b\w+!/, alias: "property" },
              constant: /\b[A-Z_][A-Z_\d]+\b/,
              "class-name": /\b[A-Z]\w*\b/,
              namespace: {
                pattern:
                  /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                inside: { punctuation: /::/ },
              },
              number:
                /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
              boolean: /\b(?:false|true)\b/,
              punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
              operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
            }),
            (e.languages.rust["closure-params"].inside.rest = e.languages.rust),
            (e.languages.rust.attribute.inside.string =
              e.languages.rust.string);
        })(e);
      }
      function F(e) {
        e.register(d.Z),
          (function (e) {
            (e.languages.sass = e.languages.extend("css", {
              comment: {
                pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
                lookbehind: !0,
                greedy: !0,
              },
            })),
              e.languages.insertBefore("sass", "atrule", {
                "atrule-line": {
                  pattern: /^(?:[ \t]*)[@+=].+/m,
                  greedy: !0,
                  inside: { atrule: /(?:@[\w-]+|[+=])/ },
                },
              }),
              delete e.languages.sass.atrule;
            var t = /\$[-\w]+|#\{\$[-\w]+\}/,
              n = [
                /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
                { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
              ];
            e.languages.insertBefore("sass", "property", {
              "variable-line": {
                pattern: /^[ \t]*\$.+/m,
                greedy: !0,
                inside: { punctuation: /:/, variable: t, operator: n },
              },
              "property-line": {
                pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
                greedy: !0,
                inside: {
                  property: [
                    /[^:\s]+(?=\s*:)/,
                    { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                  ],
                  punctuation: /:/,
                  variable: t,
                  operator: n,
                  important: e.languages.sass.important,
                },
              },
            }),
              delete e.languages.sass.property,
              delete e.languages.sass.important,
              e.languages.insertBefore("sass", "punctuation", {
                selector: {
                  pattern:
                    /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                  lookbehind: !0,
                  greedy: !0,
                },
              });
          })(e);
      }
      function _(e) {
        e.register(d.Z),
          (e.languages.scss = e.languages.extend("css", {
            comment: {
              pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
              lookbehind: !0,
            },
            atrule: {
              pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
              inside: { rule: /@[\w-]+/ },
            },
            url: /(?:[-a-z]+-)?url(?=\()/i,
            selector: {
              pattern:
                /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
              inside: {
                parent: { pattern: /&/, alias: "important" },
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/,
              },
            },
            property: {
              pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
              inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
            },
          })),
          e.languages.insertBefore("scss", "atrule", {
            keyword: [
              /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
              { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
            ],
          }),
          e.languages.insertBefore("scss", "important", {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/,
          }),
          e.languages.insertBefore("scss", "function", {
            "module-modifier": {
              pattern: /\b(?:as|hide|show|with)\b/i,
              alias: "keyword",
            },
            placeholder: { pattern: /%[-\w]+/, alias: "selector" },
            statement: {
              pattern: /\B!(?:default|optional)\b/i,
              alias: "keyword",
            },
            boolean: /\b(?:false|true)\b/,
            null: { pattern: /\bnull\b/, alias: "keyword" },
            operator: {
              pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
              lookbehind: !0,
            },
          }),
          (e.languages.scss.atrule.inside.rest = e.languages.scss);
      }
      function D(e) {
        e.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        };
      }
      function P(e) {
        (e.languages.swift = {
          comment: {
            pattern:
              /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
            lookbehind: !0,
            greedy: !0,
          },
          "string-literal": [
            {
              pattern: RegExp(
                /(^|[^"#])/.source +
                  "(?:" +
                  /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/
                    .source +
                  "|" +
                  /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/
                    .source +
                  ")" +
                  /(?!["#])/.source
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                  lookbehind: !0,
                  inside: null,
                },
                "interpolation-punctuation": {
                  pattern: /^\)|\\\($/,
                  alias: "punctuation",
                },
                punctuation: /\\(?=[\r\n])/,
                string: /[\s\S]+/,
              },
            },
            {
              pattern: RegExp(
                /(^|[^"#])(#+)/.source +
                  "(?:" +
                  /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/
                    .source +
                  "|" +
                  /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/
                    .source +
                  ")\\2"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                  lookbehind: !0,
                  inside: null,
                },
                "interpolation-punctuation": {
                  pattern: /^\)|\\#+\($/,
                  alias: "punctuation",
                },
                string: /[\s\S]+/,
              },
            },
          ],
          directive: {
            pattern: RegExp(
              /#/.source +
                "(?:" +
                /(?:elseif|if)\b/.source +
                "(?:[ \t]*" +
                /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/
                  .source +
                ")+|" +
                /(?:else|endif)\b/.source +
                ")"
            ),
            alias: "property",
            inside: {
              "directive-name": /^#\w+/,
              boolean: /\b(?:false|true)\b/,
              number: /\b\d+(?:\.\d+)*\b/,
              operator: /!|&&|\|\||[<>]=?/,
              punctuation: /[(),]/,
            },
          },
          literal: {
            pattern:
              /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
            alias: "constant",
          },
          "other-directive": { pattern: /#\w+\b/, alias: "property" },
          attribute: { pattern: /@\w+/, alias: "atrule" },
          "function-definition": {
            pattern: /(\bfunc\s+)\w+/,
            lookbehind: !0,
            alias: "function",
          },
          label: {
            pattern:
              /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
            lookbehind: !0,
            alias: "important",
          },
          keyword:
            /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
          boolean: /\b(?:false|true)\b/,
          nil: { pattern: /\bnil\b/, alias: "constant" },
          "short-argument": /\$\d+\b/,
          omit: { pattern: /\b_\b/, alias: "keyword" },
          number:
            /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
          "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
          operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
          punctuation: /[{}[\]();,.:\\]/,
        }),
          e.languages.swift["string-literal"].forEach(function (t) {
            t.inside.interpolation.inside = e.languages.swift;
          });
      }
      (T.displayName = "objectivec"),
        (T.aliases = ["objc"]),
        (A.displayName = "perl"),
        (A.aliases = []),
        (I.displayName = "markup-templating"),
        (I.aliases = []),
        (C.displayName = "php"),
        (C.aliases = []),
        (O.displayName = "python"),
        (O.aliases = ["py"]),
        (R.displayName = "r"),
        (R.aliases = []),
        (M.displayName = "ruby"),
        (M.aliases = ["rb"]),
        (L.displayName = "rust"),
        (L.aliases = []),
        (F.displayName = "sass"),
        (F.aliases = []),
        (_.displayName = "scss"),
        (_.aliases = []),
        (D.displayName = "sql"),
        (D.aliases = []),
        (P.displayName = "swift"),
        (P.aliases = []);
      var z = n(334560);
      function B(e) {
        e.languages.basic = {
          comment: { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
          string: {
            pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,
            greedy: !0,
          },
          number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
          keyword:
            /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
          function:
            /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
          operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
          punctuation: /[,;:()]/,
        };
      }
      function $(e) {
        e.register(B),
          (e.languages.vbnet = e.languages.extend("basic", {
            comment: [
              { pattern: /(?:!|REM\b).+/i, inside: { keyword: /^REM/i } },
              { pattern: /(^|[^\\:])'.*/, lookbehind: !0, greedy: !0 },
            ],
            string: {
              pattern: /(^|[^"])"(?:""|[^"])*"(?!")/,
              lookbehind: !0,
              greedy: !0,
            },
            keyword:
              /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
            punctuation: /[,;:(){}]/,
          }));
      }
      (B.displayName = "basic"),
        (B.aliases = []),
        ($.displayName = "vbnet"),
        ($.aliases = []);
      var j = n(738892);
      const U = [
          "AElig",
          "AMP",
          "Aacute",
          "Acirc",
          "Agrave",
          "Aring",
          "Atilde",
          "Auml",
          "COPY",
          "Ccedil",
          "ETH",
          "Eacute",
          "Ecirc",
          "Egrave",
          "Euml",
          "GT",
          "Iacute",
          "Icirc",
          "Igrave",
          "Iuml",
          "LT",
          "Ntilde",
          "Oacute",
          "Ocirc",
          "Ograve",
          "Oslash",
          "Otilde",
          "Ouml",
          "QUOT",
          "REG",
          "THORN",
          "Uacute",
          "Ucirc",
          "Ugrave",
          "Uuml",
          "Yacute",
          "aacute",
          "acirc",
          "acute",
          "aelig",
          "agrave",
          "amp",
          "aring",
          "atilde",
          "auml",
          "brvbar",
          "ccedil",
          "cedil",
          "cent",
          "copy",
          "curren",
          "deg",
          "divide",
          "eacute",
          "ecirc",
          "egrave",
          "eth",
          "euml",
          "frac12",
          "frac14",
          "frac34",
          "gt",
          "iacute",
          "icirc",
          "iexcl",
          "igrave",
          "iquest",
          "iuml",
          "laquo",
          "lt",
          "macr",
          "micro",
          "middot",
          "nbsp",
          "not",
          "ntilde",
          "oacute",
          "ocirc",
          "ograve",
          "ordf",
          "ordm",
          "oslash",
          "otilde",
          "ouml",
          "para",
          "plusmn",
          "pound",
          "quot",
          "raquo",
          "reg",
          "sect",
          "shy",
          "sup1",
          "sup2",
          "sup3",
          "szlig",
          "thorn",
          "times",
          "uacute",
          "ucirc",
          "ugrave",
          "uml",
          "uuml",
          "yacute",
          "yen",
          "yuml",
        ],
        H = {
          0: "\ufffd",
          128: "\u20ac",
          130: "\u201a",
          131: "\u0192",
          132: "\u201e",
          133: "\u2026",
          134: "\u2020",
          135: "\u2021",
          136: "\u02c6",
          137: "\u2030",
          138: "\u0160",
          139: "\u2039",
          140: "\u0152",
          142: "\u017d",
          145: "\u2018",
          146: "\u2019",
          147: "\u201c",
          148: "\u201d",
          149: "\u2022",
          150: "\u2013",
          151: "\u2014",
          152: "\u02dc",
          153: "\u2122",
          154: "\u0161",
          155: "\u203a",
          156: "\u0153",
          158: "\u017e",
          159: "\u0178",
        };
      function J(e) {
        const t = "string" === typeof e ? e.charCodeAt(0) : e;
        return t >= 48 && t <= 57;
      }
      function W(e) {
        const t = "string" === typeof e ? e.charCodeAt(0) : e;
        return (
          (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57)
        );
      }
      function G(e) {
        return (
          (function (e) {
            const t = "string" === typeof e ? e.charCodeAt(0) : e;
            return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
          })(e) || J(e)
        );
      }
      var V = n(269477);
      const Y = String.fromCharCode,
        q = [
          "",
          "Named character references must be terminated by a semicolon",
          "Numeric character references must be terminated by a semicolon",
          "Named character references cannot be empty",
          "Numeric character references cannot be empty",
          "Named character references must be known",
          "Numeric character references cannot be disallowed",
          "Numeric character references cannot be outside the permissible Unicode range",
        ];
      function Z(e, t = {}) {
        const n =
            "string" === typeof t.additional
              ? t.additional.charCodeAt(0)
              : t.additional,
          r = [];
        let i,
          o,
          s = 0,
          a = -1,
          l = "";
        t.position &&
          ("start" in t.position || "indent" in t.position
            ? ((o = t.position.indent), (i = t.position.start))
            : (i = t.position));
        let c,
          u = (i ? i.line : 0) || 1,
          p = (i ? i.column : 0) || 1,
          d = f();
        for (s--; ++s <= e.length; )
          if (
            (10 === c && (p = (o ? o[a] : 0) || 1),
            (c = e.charCodeAt(s)),
            38 === c)
          ) {
            const i = e.charCodeAt(s + 1);
            if (
              9 === i ||
              10 === i ||
              12 === i ||
              32 === i ||
              38 === i ||
              60 === i ||
              Number.isNaN(i) ||
              (n && i === n)
            ) {
              (l += Y(c)), p++;
              continue;
            }
            const o = s + 1;
            let a,
              u = o,
              y = o;
            if (35 === i) {
              y = ++u;
              const t = e.charCodeAt(y);
              88 === t || 120 === t
                ? ((a = "hexadecimal"), (y = ++u))
                : (a = "decimal");
            } else a = "named";
            let k = "",
              b = "",
              v = "";
            const w = "named" === a ? G : "decimal" === a ? J : W;
            for (y--; ++y <= e.length; ) {
              const t = e.charCodeAt(y);
              if (!w(t)) break;
              (v += Y(t)),
                "named" === a && U.includes(v) && ((k = v), (b = (0, V.T)(v)));
            }
            let S = 59 === e.charCodeAt(y);
            if (S) {
              y++;
              const e = "named" === a && (0, V.T)(v);
              e && ((k = v), (b = e));
            }
            let x = 1 + y - o,
              E = "";
            if (S || !1 !== t.nonTerminated)
              if (v)
                if ("named" === a) {
                  if (S && !b) m(5, 1);
                  else if (
                    (k !== v && ((y = u + k.length), (x = 1 + y - u), (S = !1)),
                    !S)
                  ) {
                    const n = k ? 1 : 3;
                    if (t.attribute) {
                      const t = e.charCodeAt(y);
                      61 === t
                        ? (m(n, x), (b = ""))
                        : G(t)
                        ? (b = "")
                        : m(n, x);
                    } else m(n, x);
                  }
                  E = b;
                } else {
                  S || m(2, x);
                  let e = Number.parseInt(v, "hexadecimal" === a ? 16 : 10);
                  if (((h = e) >= 55296 && h <= 57343) || h > 1114111)
                    m(7, x), (E = Y(65533));
                  else if (e in H) m(6, x), (E = H[e]);
                  else {
                    let t = "";
                    K(e) && m(6, x),
                      e > 65535 &&
                        ((e -= 65536),
                        (t += Y((e >>> 10) | 55296)),
                        (e = 56320 | (1023 & e))),
                      (E = t + Y(e));
                  }
                }
              else "named" !== a && m(4, x);
            else;
            if (E) {
              g(), (d = f()), (s = y - 1), (p += y - o + 1), r.push(E);
              const n = f();
              n.offset++,
                t.reference &&
                  t.reference.call(
                    t.referenceContext,
                    E,
                    { start: d, end: n },
                    e.slice(o - 1, y)
                  ),
                (d = n);
            } else
              (v = e.slice(o - 1, y)), (l += v), (p += v.length), (s = y - 1);
          } else
            10 === c && (u++, a++, (p = 0)),
              Number.isNaN(c) ? g() : ((l += Y(c)), p++);
        var h;
        return r.join("");
        function f() {
          return { line: u, column: p, offset: s + ((i ? i.offset : 0) || 0) };
        }
        function m(e, n) {
          let r;
          t.warning &&
            ((r = f()),
            (r.column += n),
            (r.offset += n),
            t.warning.call(t.warningContext, q[e], r, e));
        }
        function g() {
          l &&
            (r.push(l),
            t.text && t.text.call(t.textContext, l, { start: d, end: f() }),
            (l = ""));
        }
      }
      function K(e) {
        return (
          (e >= 1 && e <= 8) ||
          11 === e ||
          (e >= 13 && e <= 31) ||
          (e >= 127 && e <= 159) ||
          (e >= 64976 && e <= 65007) ||
          65535 === (65535 & e) ||
          65534 === (65535 & e)
        );
      }
      var X = 0,
        Q = {},
        ee = {
          util: {
            type: function (e) {
              return Object.prototype.toString.call(e).slice(8, -1);
            },
            objId: function (e) {
              return (
                e.__id || Object.defineProperty(e, "__id", { value: ++X }),
                e.__id
              );
            },
            clone: function e(t, n) {
              var r, i;
              switch (((n = n || {}), ee.util.type(t))) {
                case "Object":
                  if (((i = ee.util.objId(t)), n[i])) return n[i];
                  for (var o in ((r = {}), (n[i] = r), t))
                    t.hasOwnProperty(o) && (r[o] = e(t[o], n));
                  return r;
                case "Array":
                  return (
                    (i = ee.util.objId(t)),
                    n[i]
                      ? n[i]
                      : ((r = []),
                        (n[i] = r),
                        t.forEach(function (t, i) {
                          r[i] = e(t, n);
                        }),
                        r)
                  );
                default:
                  return t;
              }
            },
          },
          languages: {
            plain: Q,
            plaintext: Q,
            text: Q,
            txt: Q,
            extend: function (e, t) {
              var n = ee.util.clone(ee.languages[e]);
              for (var r in t) n[r] = t[r];
              return n;
            },
            insertBefore: function (e, t, n, r) {
              var i = (r = r || ee.languages)[e],
                o = {};
              for (var s in i)
                if (i.hasOwnProperty(s)) {
                  if (s == t)
                    for (var a in n) n.hasOwnProperty(a) && (o[a] = n[a]);
                  n.hasOwnProperty(s) || (o[s] = i[s]);
                }
              var l = r[e];
              return (
                (r[e] = o),
                ee.languages.DFS(ee.languages, function (t, n) {
                  n === l && t != e && (this[t] = o);
                }),
                o
              );
            },
            DFS: function e(t, n, r, i) {
              i = i || {};
              var o = ee.util.objId;
              for (var s in t)
                if (t.hasOwnProperty(s)) {
                  n.call(t, s, t[s], r || s);
                  var a = t[s],
                    l = ee.util.type(a);
                  "Object" !== l || i[o(a)]
                    ? "Array" !== l ||
                      i[o(a)] ||
                      ((i[o(a)] = !0), e(a, n, s, i))
                    : ((i[o(a)] = !0), e(a, n, null, i));
                }
            },
          },
          plugins: {},
          highlight: function (e, t, n) {
            var r = { code: e, grammar: t, language: n };
            if ((ee.hooks.run("before-tokenize", r), !r.grammar))
              throw new Error(
                'The language "' + r.language + '" has no grammar.'
              );
            return (
              (r.tokens = ee.tokenize(r.code, r.grammar)),
              ee.hooks.run("after-tokenize", r),
              te.stringify(ee.util.encode(r.tokens), r.language)
            );
          },
          tokenize: function (e, t) {
            var n = t.rest;
            if (n) {
              for (var r in n) t[r] = n[r];
              delete t.rest;
            }
            var i = new ie();
            return (
              oe(i, i.head, e),
              re(e, i, t, i.head, 0),
              (function (e) {
                var t = [],
                  n = e.head.next;
                for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                return t;
              })(i)
            );
          },
          hooks: {
            all: {},
            add: function (e, t) {
              var n = ee.hooks.all;
              (n[e] = n[e] || []), n[e].push(t);
            },
            run: function (e, t) {
              var n = ee.hooks.all[e];
              if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
            },
          },
          Token: te,
        };
      function te(e, t, n, r) {
        (this.type = e),
          (this.content = t),
          (this.alias = n),
          (this.length = 0 | (r || "").length);
      }
      function ne(e, t, n, r) {
        e.lastIndex = t;
        var i = e.exec(n);
        if (i && r && i[1]) {
          var o = i[1].length;
          (i.index += o), (i[0] = i[0].slice(o));
        }
        return i;
      }
      function re(e, t, n, r, i, o) {
        for (var s in n)
          if (n.hasOwnProperty(s) && n[s]) {
            var a = n[s];
            a = Array.isArray(a) ? a : [a];
            for (var l = 0; l < a.length; ++l) {
              if (o && o.cause == s + "," + l) return;
              var c = a[l],
                u = c.inside,
                p = !!c.lookbehind,
                d = !!c.greedy,
                h = c.alias;
              if (d && !c.pattern.global) {
                var f = c.pattern.toString().match(/[imsuy]*$/)[0];
                c.pattern = RegExp(c.pattern.source, f + "g");
              }
              for (
                var m = c.pattern || c, g = r.next, y = i;
                g !== t.tail && !(o && y >= o.reach);
                y += g.value.length, g = g.next
              ) {
                var k = g.value;
                if (t.length > e.length) return;
                if (!(k instanceof te)) {
                  var b,
                    v = 1;
                  if (d) {
                    if (!(b = ne(m, y, e, p)) || b.index >= e.length) break;
                    var w = b.index,
                      S = b.index + b[0].length,
                      x = y;
                    for (x += g.value.length; w >= x; )
                      x += (g = g.next).value.length;
                    if (((y = x -= g.value.length), g.value instanceof te))
                      continue;
                    for (
                      var E = g;
                      E !== t.tail && (x < S || "string" === typeof E.value);
                      E = E.next
                    )
                      v++, (x += E.value.length);
                    v--, (k = e.slice(y, x)), (b.index -= y);
                  } else if (!(b = ne(m, 0, k, p))) continue;
                  w = b.index;
                  var N = b[0],
                    T = k.slice(0, w),
                    A = k.slice(w + N.length),
                    I = y + k.length;
                  o && I > o.reach && (o.reach = I);
                  var C = g.prev;
                  if (
                    (T && ((C = oe(t, C, T)), (y += T.length)),
                    se(t, C, v),
                    (g = oe(t, C, new te(s, u ? ee.tokenize(N, u) : N, h, N))),
                    A && oe(t, g, A),
                    v > 1)
                  ) {
                    var O = { cause: s + "," + l, reach: I };
                    re(e, t, n, g.prev, y, O),
                      o && O.reach > o.reach && (o.reach = O.reach);
                  }
                }
              }
            }
          }
      }
      function ie() {
        var e = { value: null, prev: null, next: null },
          t = { value: null, prev: e, next: null };
        (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
      }
      function oe(e, t, n) {
        var r = t.next,
          i = { value: n, prev: t, next: r };
        return (t.next = i), (r.prev = i), e.length++, i;
      }
      function se(e, t, n) {
        for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
        (t.next = r), (r.prev = t), (e.length -= i);
      }
      const ae = ee,
        le = {}.hasOwnProperty;
      function ce() {}
      ce.prototype = ae;
      const ue = new ce();
      (ue.highlight = function (e, t) {
        if ("string" !== typeof e)
          throw new TypeError("Expected `string` for `value`, got `" + e + "`");
        let n, r;
        if (t && "object" === typeof t) n = t;
        else {
          if (((r = t), "string" !== typeof r))
            throw new TypeError(
              "Expected `string` for `name`, got `" + r + "`"
            );
          if (!le.call(ue.languages, r))
            throw new Error("Unknown language: `" + r + "` is not registered");
          n = ue.languages[r];
        }
        return { type: "root", children: ae.highlight.call(ue, e, n, r) };
      }),
        (ue.register = function (e) {
          if ("function" !== typeof e || !e.displayName)
            throw new Error(
              "Expected `function` for `syntax`, got `" + e + "`"
            );
          le.call(ue.languages, e.displayName) || e(ue);
        }),
        (ue.alias = function (e, t) {
          const n = ue.languages;
          let r,
            i = {};
          "string" === typeof e ? t && (i[e] = t) : (i = e);
          for (r in i)
            if (le.call(i, r)) {
              const e = i[r],
                t = "string" === typeof e ? [e] : e;
              let o = -1;
              for (; ++o < t.length; ) n[t[o]] = n[r];
            }
        }),
        (ue.registered = function (e) {
          if ("string" !== typeof e)
            throw new TypeError(
              "Expected `string` for `aliasOrLanguage`, got `" + e + "`"
            );
          return le.call(ue.languages, e);
        }),
        (ue.listLanguages = function () {
          const e = ue.languages,
            t = [];
          let n;
          for (n in e) le.call(e, n) && "object" === typeof e[n] && t.push(n);
          return t;
        }),
        (ue.util.encode = function (e) {
          return e;
        }),
        (ue.Token.stringify = function e(t, n) {
          if ("string" === typeof t) return { type: "text", value: t };
          if (Array.isArray(t)) {
            const r = [];
            let i = -1;
            for (; ++i < t.length; )
              "" !== t[i] &&
                null !== t[i] &&
                void 0 !== t[i] &&
                r.push(e(t[i], n));
            return r;
          }
          const r = {
            type: t.type,
            content: e(t.content, n),
            tag: "span",
            classes: ["token", t.type],
            attributes: {},
            language: n,
          };
          t.alias &&
            r.classes.push(
              ...("string" === typeof t.alias ? [t.alias] : t.alias)
            );
          return (
            ue.hooks.run("wrap", r),
            (0, j.h)(
              r.tag + "." + r.classes.join("."),
              (function (e) {
                let t;
                for (t in e) le.call(e, t) && (e[t] = Z(e[t]));
                return e;
              })(r.attributes),
              r.content
            )
          );
        }),
        ue.register(o.Z),
        ue.register(s),
        ue.register(a),
        ue.register(l),
        ue.register(c),
        ue.register(u),
        ue.register(p.Z),
        ue.register(d.Z),
        ue.register(h),
        ue.register(f),
        ue.register(m),
        ue.register(g),
        ue.register(y),
        ue.register(k.Z),
        ue.register(b),
        ue.register(v),
        ue.register(w),
        ue.register(S),
        ue.register(x),
        ue.register(E),
        ue.register(N.Z),
        ue.register(T),
        ue.register(A),
        ue.register(I),
        ue.register(C),
        ue.register(O),
        ue.register(R),
        ue.register(M),
        ue.register(L),
        ue.register(F),
        ue.register(_),
        ue.register(D),
        ue.register(P),
        ue.register(z.Z),
        ue.register(B),
        ue.register($);
      var pe = n(942105),
        de = n(176905);
      const he = (e, t = []) =>
        e.flatMap((e) => {
          var n;
          return "element" === e.type
            ? he(e.children, [
                ...t,
                ...((null == (n = e.properties) ? void 0 : n.className) || []),
              ])
            : [{ text: e.value, className: t }];
        });
      function fe(e, t, n) {
        const { highlight: i, listLanguages: o } = n,
          s = o(),
          a = [];
        return (
          (0, r.N2)((e) => e.type.name === t)(e).forEach((e) => {
            let t = e.pos + 1;
            const { language: n } = e.node.attrs;
            if (!n || !s.includes(n))
              return void console.warn(
                "Unsupported language detected, this language has not been supported by current prism config: ",
                n
              );
            const r = i(e.node.textContent, n);
            he(r.children).forEach((e) => {
              const n = t + e.text.length;
              if (e.className.length) {
                const r = de.p.inline(t, n, { class: e.className.join(" ") });
                a.push(r);
              }
              t = n;
            });
          }),
          de.EH.create(e, a)
        );
      }
      const me = (0, pe.Tu)({ configureRefractor: () => {} }, "prismConfig");
      me.meta = {
        package: "@milkdown/plugin-prism",
        displayName: "Ctx<prism>",
      };
      const ge = (0, pe.x6)((e) => {
        const { configureRefractor: t } = e.get(me.key),
          n = "code_block";
        return new i.Sy({
          key: new i.H$("MILKDOWN_PRISM"),
          state: {
            init: (e, { doc: r }) => {
              const i = t(ue);
              return fe(r, n, i ?? ue);
            },
            apply: (e, t, i, o) => {
              var s, a;
              const l = o.selection.$head.parent.type.name === n,
                c = i.selection.$head.parent.type.name === n,
                u = (0, r.N2)((e) => e.type.name === n)(i.doc),
                p = (0, r.N2)((e) => e.type.name === n)(o.doc);
              return e.docChanged &&
                (l ||
                  c ||
                  u.length !== p.length ||
                  (null == (s = u[0]) ? void 0 : s.node.attrs.language) !==
                    (null == (a = p[0]) ? void 0 : a.node.attrs.language) ||
                  e.steps.some((e) => {
                    const t = e;
                    return (
                      void 0 !== t.from &&
                      void 0 !== t.to &&
                      u.some(
                        (e) =>
                          e.pos >= t.from && e.pos + e.node.nodeSize <= t.to
                      )
                    );
                  }))
                ? fe(e.doc, n, ue)
                : t.map(e.mapping, e.doc);
            },
          },
          props: {
            decorations(e) {
              return this.getState(e);
            },
          },
        });
      });
      ge.meta = {
        package: "@milkdown/plugin-prism",
        displayName: "Prose<prism>",
      };
      const ye = [ge, me];
    },
    103276: function (e, t, n) {
      n.d(t, {
        p: function () {
          return b;
        },
        Z: function () {
          return v;
        },
      });
      var r,
        i,
        o,
        s,
        a,
        l,
        c,
        u = n(551579),
        p = n(616711),
        d = n(33198),
        h = n(522773),
        f = n(942105),
        m = (e, t, n) => {
          if (!t.has(e)) throw TypeError("Cannot " + n);
        },
        g = (e, t, n) => (
          m(e, t, "read from private field"), n ? n.call(e) : t.get(e)
        ),
        y = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        k = (e, t, n, r) => (
          m(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
        );
      class b {
        constructor(e) {
          y(this, l),
            y(this, r, void 0),
            y(this, i, void 0),
            y(this, o, void 0),
            y(this, s, void 0),
            y(this, a, void 0),
            k(this, a, (e, t) => {
              const { state: n, composing: o } = e,
                { selection: a, doc: l } = n,
                { ranges: c } = a,
                p = Math.min(...c.map((e) => e.$from.pos)),
                d = Math.max(...c.map((e) => e.$to.pos)),
                f = t && t.doc.eq(l) && t.selection.eq(a);
              if (
                (g(this, r) ??
                  k(
                    this,
                    r,
                    (0, h.ZP)(e.dom, {
                      trigger: "manual",
                      interactive: !0,
                      ...g(this, i),
                      content: this.element,
                    })
                  ),
                !o && !f)
              ) {
                if (!g(this, s).call(this, e, t)) return void this.hide();
                g(this, r).setProps({
                  getReferenceClientRect: () => (0, u.pr)(e, p, d),
                }),
                  this.show();
              }
            }),
            (this.update = (e, t) => {
              d(g(this, a), g(this, o))(e, t);
            }),
            (this.destroy = () => {
              var e;
              null == (e = g(this, r)) || e.destroy();
            }),
            (this.show = () => {
              var e;
              null == (e = g(this, r)) || e.show();
            }),
            (this.hide = () => {
              var e;
              null == (e = g(this, r)) || e.hide();
            }),
            (this.getInstance = () => g(this, r)),
            (this.element = e.content),
            k(this, i, e.tippyOptions ?? {}),
            k(this, o, e.debounce ?? 200),
            k(
              this,
              s,
              e.shouldShow ??
                ((e, t, n) => (m(e, t, "access private method"), n))(this, l, c)
            );
        }
      }
      (r = new WeakMap()),
        (i = new WeakMap()),
        (o = new WeakMap()),
        (s = new WeakMap()),
        (a = new WeakMap()),
        (l = new WeakSet()),
        (c = function (e) {
          const { doc: t, selection: n } = e.state,
            { empty: r, from: i, to: o } = n,
            s =
              !t.textBetween(i, o).length && e.state.selection instanceof p.Bs,
            a = this.element.contains(document.activeElement),
            l = !e.hasFocus() && !a,
            c = !e.editable;
          return !(l || r || s || c);
        });
      const v = (e) => {
        const t = (0, f.Tu)({}, `${e}_TOOLTIP_SPEC`),
          n = (0, f.x6)((n) => {
            const r = n.get(t.key);
            return new p.Sy({ key: new p.H$(`${e}_TOOLTIP`), ...r });
          }),
          r = [t, n];
        return (
          (r.key = t.key),
          (r.pluginKey = n.key),
          (t.meta = {
            package: "@milkdown/plugin-tooltip",
            displayName: `Ctx<tooltipSpec>|${e}`,
          }),
          (n.meta = {
            package: "@milkdown/plugin-tooltip",
            displayName: `Prose<tooltip>|${e}`,
          }),
          r
        );
      };
    },
    468832: function (e, t, n) {
      n.d(t, {
        Q$: function () {
          return a;
        },
      });
      var r = n(616711),
        i = n(942105);
      const o = (0, i.Tu)(
        {
          shouldAppend: (e) =>
            !(!e || ["heading", "paragraph"].includes(e.type.name)),
          getNode: (e) => e.schema.nodes.paragraph.create(),
        },
        "trailingConfig"
      );
      o.meta = {
        package: "@milkdown/plugin-trailing",
        displayName: "Ctx<trailingConfig>",
      };
      const s = (0, i.x6)((e) => {
        const t = new r.H$("MILKDOWN_TRAILING"),
          { shouldAppend: n, getNode: i } = e.get(o.key),
          s = new r.Sy({
            key: t,
            state: {
              init: (e, t) => {
                const r = t.tr.doc.lastChild;
                return n(r, t);
              },
              apply: (e, t, r, i) => {
                if (!e.docChanged) return t;
                const o = e.doc.lastChild;
                return n(o, i);
              },
            },
            appendTransaction: (e, t, n) => {
              const { doc: r, tr: o } = n,
                a = null == i ? void 0 : i(n),
                l = s.getState(n),
                c = r.content.size;
              if (l && a) return o.insert(c, a);
            },
          });
        return s;
      });
      s.meta = {
        package: "@milkdown/plugin-trailing",
        displayName: "Prose<trailing>",
      };
      const a = [o, s];
    },
    47161: function (e, t, n) {
      n.d(t, {
        W0: function () {
          return Te;
        },
        iO: function () {
          return zt;
        },
        s3: function () {
          return Ie;
        },
        Yp: function () {
          return Qe;
        },
        zO: function () {
          return le;
        },
        F3: function () {
          return ce;
        },
        QF: function () {
          return V;
        },
        gG: function () {
          return K;
        },
        vs: function () {
          return xe;
        },
        $m: function () {
          return We;
        },
        Ar: function () {
          return ye;
        },
        vd: function () {
          return Ze;
        },
      });
      var r = n(942105),
        i = n(216706),
        o = n(492104),
        s = n(102396),
        a = n(907306),
        l = n(661571);
      function c(e) {
        if ("string" !== typeof e) throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      function u(e) {
        if ("string" !== typeof e) throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var p = [
        ["\xdf", "ss"],
        ["\u1e9e", "Ss"],
        ["\xe4", "ae"],
        ["\xc4", "Ae"],
        ["\xf6", "oe"],
        ["\xd6", "Oe"],
        ["\xfc", "ue"],
        ["\xdc", "Ue"],
        ["\xc0", "A"],
        ["\xc1", "A"],
        ["\xc2", "A"],
        ["\xc3", "A"],
        ["\xc4", "Ae"],
        ["\xc5", "A"],
        ["\xc6", "AE"],
        ["\xc7", "C"],
        ["\xc8", "E"],
        ["\xc9", "E"],
        ["\xca", "E"],
        ["\xcb", "E"],
        ["\xcc", "I"],
        ["\xcd", "I"],
        ["\xce", "I"],
        ["\xcf", "I"],
        ["\xd0", "D"],
        ["\xd1", "N"],
        ["\xd2", "O"],
        ["\xd3", "O"],
        ["\xd4", "O"],
        ["\xd5", "O"],
        ["\xd6", "Oe"],
        ["\u0150", "O"],
        ["\xd8", "O"],
        ["\xd9", "U"],
        ["\xda", "U"],
        ["\xdb", "U"],
        ["\xdc", "Ue"],
        ["\u0170", "U"],
        ["\xdd", "Y"],
        ["\xde", "TH"],
        ["\xdf", "ss"],
        ["\xe0", "a"],
        ["\xe1", "a"],
        ["\xe2", "a"],
        ["\xe3", "a"],
        ["\xe4", "ae"],
        ["\xe5", "a"],
        ["\xe6", "ae"],
        ["\xe7", "c"],
        ["\xe8", "e"],
        ["\xe9", "e"],
        ["\xea", "e"],
        ["\xeb", "e"],
        ["\xec", "i"],
        ["\xed", "i"],
        ["\xee", "i"],
        ["\xef", "i"],
        ["\xf0", "d"],
        ["\xf1", "n"],
        ["\xf2", "o"],
        ["\xf3", "o"],
        ["\xf4", "o"],
        ["\xf5", "o"],
        ["\xf6", "oe"],
        ["\u0151", "o"],
        ["\xf8", "o"],
        ["\xf9", "u"],
        ["\xfa", "u"],
        ["\xfb", "u"],
        ["\xfc", "ue"],
        ["\u0171", "u"],
        ["\xfd", "y"],
        ["\xfe", "th"],
        ["\xff", "y"],
        ["\u1e9e", "SS"],
        ["\xe0", "a"],
        ["\xc0", "A"],
        ["\xe1", "a"],
        ["\xc1", "A"],
        ["\xe2", "a"],
        ["\xc2", "A"],
        ["\xe3", "a"],
        ["\xc3", "A"],
        ["\xe8", "e"],
        ["\xc8", "E"],
        ["\xe9", "e"],
        ["\xc9", "E"],
        ["\xea", "e"],
        ["\xca", "E"],
        ["\xec", "i"],
        ["\xcc", "I"],
        ["\xed", "i"],
        ["\xcd", "I"],
        ["\xf2", "o"],
        ["\xd2", "O"],
        ["\xf3", "o"],
        ["\xd3", "O"],
        ["\xf4", "o"],
        ["\xd4", "O"],
        ["\xf5", "o"],
        ["\xd5", "O"],
        ["\xf9", "u"],
        ["\xd9", "U"],
        ["\xfa", "u"],
        ["\xda", "U"],
        ["\xfd", "y"],
        ["\xdd", "Y"],
        ["\u0103", "a"],
        ["\u0102", "A"],
        ["\u0110", "D"],
        ["\u0111", "d"],
        ["\u0129", "i"],
        ["\u0128", "I"],
        ["\u0169", "u"],
        ["\u0168", "U"],
        ["\u01a1", "o"],
        ["\u01a0", "O"],
        ["\u01b0", "u"],
        ["\u01af", "U"],
        ["\u1ea1", "a"],
        ["\u1ea0", "A"],
        ["\u1ea3", "a"],
        ["\u1ea2", "A"],
        ["\u1ea5", "a"],
        ["\u1ea4", "A"],
        ["\u1ea7", "a"],
        ["\u1ea6", "A"],
        ["\u1ea9", "a"],
        ["\u1ea8", "A"],
        ["\u1eab", "a"],
        ["\u1eaa", "A"],
        ["\u1ead", "a"],
        ["\u1eac", "A"],
        ["\u1eaf", "a"],
        ["\u1eae", "A"],
        ["\u1eb1", "a"],
        ["\u1eb0", "A"],
        ["\u1eb3", "a"],
        ["\u1eb2", "A"],
        ["\u1eb5", "a"],
        ["\u1eb4", "A"],
        ["\u1eb7", "a"],
        ["\u1eb6", "A"],
        ["\u1eb9", "e"],
        ["\u1eb8", "E"],
        ["\u1ebb", "e"],
        ["\u1eba", "E"],
        ["\u1ebd", "e"],
        ["\u1ebc", "E"],
        ["\u1ebf", "e"],
        ["\u1ebe", "E"],
        ["\u1ec1", "e"],
        ["\u1ec0", "E"],
        ["\u1ec3", "e"],
        ["\u1ec2", "E"],
        ["\u1ec5", "e"],
        ["\u1ec4", "E"],
        ["\u1ec7", "e"],
        ["\u1ec6", "E"],
        ["\u1ec9", "i"],
        ["\u1ec8", "I"],
        ["\u1ecb", "i"],
        ["\u1eca", "I"],
        ["\u1ecd", "o"],
        ["\u1ecc", "O"],
        ["\u1ecf", "o"],
        ["\u1ece", "O"],
        ["\u1ed1", "o"],
        ["\u1ed0", "O"],
        ["\u1ed3", "o"],
        ["\u1ed2", "O"],
        ["\u1ed5", "o"],
        ["\u1ed4", "O"],
        ["\u1ed7", "o"],
        ["\u1ed6", "O"],
        ["\u1ed9", "o"],
        ["\u1ed8", "O"],
        ["\u1edb", "o"],
        ["\u1eda", "O"],
        ["\u1edd", "o"],
        ["\u1edc", "O"],
        ["\u1edf", "o"],
        ["\u1ede", "O"],
        ["\u1ee1", "o"],
        ["\u1ee0", "O"],
        ["\u1ee3", "o"],
        ["\u1ee2", "O"],
        ["\u1ee5", "u"],
        ["\u1ee4", "U"],
        ["\u1ee7", "u"],
        ["\u1ee6", "U"],
        ["\u1ee9", "u"],
        ["\u1ee8", "U"],
        ["\u1eeb", "u"],
        ["\u1eea", "U"],
        ["\u1eed", "u"],
        ["\u1eec", "U"],
        ["\u1eef", "u"],
        ["\u1eee", "U"],
        ["\u1ef1", "u"],
        ["\u1ef0", "U"],
        ["\u1ef3", "y"],
        ["\u1ef2", "Y"],
        ["\u1ef5", "y"],
        ["\u1ef4", "Y"],
        ["\u1ef7", "y"],
        ["\u1ef6", "Y"],
        ["\u1ef9", "y"],
        ["\u1ef8", "Y"],
        ["\u0621", "e"],
        ["\u0622", "a"],
        ["\u0623", "a"],
        ["\u0624", "w"],
        ["\u0625", "i"],
        ["\u0626", "y"],
        ["\u0627", "a"],
        ["\u0628", "b"],
        ["\u0629", "t"],
        ["\u062a", "t"],
        ["\u062b", "th"],
        ["\u062c", "j"],
        ["\u062d", "h"],
        ["\u062e", "kh"],
        ["\u062f", "d"],
        ["\u0630", "dh"],
        ["\u0631", "r"],
        ["\u0632", "z"],
        ["\u0633", "s"],
        ["\u0634", "sh"],
        ["\u0635", "s"],
        ["\u0636", "d"],
        ["\u0637", "t"],
        ["\u0638", "z"],
        ["\u0639", "e"],
        ["\u063a", "gh"],
        ["\u0640", "_"],
        ["\u0641", "f"],
        ["\u0642", "q"],
        ["\u0643", "k"],
        ["\u0644", "l"],
        ["\u0645", "m"],
        ["\u0646", "n"],
        ["\u0647", "h"],
        ["\u0648", "w"],
        ["\u0649", "a"],
        ["\u064a", "y"],
        ["\u064e\u200e", "a"],
        ["\u064f", "u"],
        ["\u0650\u200e", "i"],
        ["\u0660", "0"],
        ["\u0661", "1"],
        ["\u0662", "2"],
        ["\u0663", "3"],
        ["\u0664", "4"],
        ["\u0665", "5"],
        ["\u0666", "6"],
        ["\u0667", "7"],
        ["\u0668", "8"],
        ["\u0669", "9"],
        ["\u0686", "ch"],
        ["\u06a9", "k"],
        ["\u06af", "g"],
        ["\u067e", "p"],
        ["\u0698", "zh"],
        ["\u06cc", "y"],
        ["\u06f0", "0"],
        ["\u06f1", "1"],
        ["\u06f2", "2"],
        ["\u06f3", "3"],
        ["\u06f4", "4"],
        ["\u06f5", "5"],
        ["\u06f6", "6"],
        ["\u06f7", "7"],
        ["\u06f8", "8"],
        ["\u06f9", "9"],
        ["\u067c", "p"],
        ["\u0681", "z"],
        ["\u0685", "c"],
        ["\u0689", "d"],
        ["\ufeab", "d"],
        ["\ufead", "r"],
        ["\u0693", "r"],
        ["\ufeaf", "z"],
        ["\u0696", "g"],
        ["\u069a", "x"],
        ["\u06ab", "g"],
        ["\u06bc", "n"],
        ["\u06c0", "e"],
        ["\u06d0", "e"],
        ["\u06cd", "ai"],
        ["\u0679", "t"],
        ["\u0688", "d"],
        ["\u0691", "r"],
        ["\u06ba", "n"],
        ["\u06c1", "h"],
        ["\u06be", "h"],
        ["\u06d2", "e"],
        ["\u0410", "A"],
        ["\u0430", "a"],
        ["\u0411", "B"],
        ["\u0431", "b"],
        ["\u0412", "V"],
        ["\u0432", "v"],
        ["\u0413", "G"],
        ["\u0433", "g"],
        ["\u0414", "D"],
        ["\u0434", "d"],
        ["\u044a\u0435", "ye"],
        ["\u042a\u0435", "Ye"],
        ["\u044a\u0415", "yE"],
        ["\u042a\u0415", "YE"],
        ["\u0415", "E"],
        ["\u0435", "e"],
        ["\u0401", "Yo"],
        ["\u0451", "yo"],
        ["\u0416", "Zh"],
        ["\u0436", "zh"],
        ["\u0417", "Z"],
        ["\u0437", "z"],
        ["\u0418", "I"],
        ["\u0438", "i"],
        ["\u044b\u0439", "iy"],
        ["\u042b\u0439", "Iy"],
        ["\u042b\u0419", "IY"],
        ["\u044b\u0419", "iY"],
        ["\u0419", "Y"],
        ["\u0439", "y"],
        ["\u041a", "K"],
        ["\u043a", "k"],
        ["\u041b", "L"],
        ["\u043b", "l"],
        ["\u041c", "M"],
        ["\u043c", "m"],
        ["\u041d", "N"],
        ["\u043d", "n"],
        ["\u041e", "O"],
        ["\u043e", "o"],
        ["\u041f", "P"],
        ["\u043f", "p"],
        ["\u0420", "R"],
        ["\u0440", "r"],
        ["\u0421", "S"],
        ["\u0441", "s"],
        ["\u0422", "T"],
        ["\u0442", "t"],
        ["\u0423", "U"],
        ["\u0443", "u"],
        ["\u0424", "F"],
        ["\u0444", "f"],
        ["\u0425", "Kh"],
        ["\u0445", "kh"],
        ["\u0426", "Ts"],
        ["\u0446", "ts"],
        ["\u0427", "Ch"],
        ["\u0447", "ch"],
        ["\u0428", "Sh"],
        ["\u0448", "sh"],
        ["\u0429", "Sch"],
        ["\u0449", "sch"],
        ["\u042a", ""],
        ["\u044a", ""],
        ["\u042b", "Y"],
        ["\u044b", "y"],
        ["\u042c", ""],
        ["\u044c", ""],
        ["\u042d", "E"],
        ["\u044d", "e"],
        ["\u042e", "Yu"],
        ["\u044e", "yu"],
        ["\u042f", "Ya"],
        ["\u044f", "ya"],
        ["\u0103", "a"],
        ["\u0102", "A"],
        ["\u0219", "s"],
        ["\u0218", "S"],
        ["\u021b", "t"],
        ["\u021a", "T"],
        ["\u0163", "t"],
        ["\u0162", "T"],
        ["\u015f", "s"],
        ["\u015e", "S"],
        ["\xe7", "c"],
        ["\xc7", "C"],
        ["\u011f", "g"],
        ["\u011e", "G"],
        ["\u0131", "i"],
        ["\u0130", "I"],
        ["\u0561", "a"],
        ["\u0531", "A"],
        ["\u0562", "b"],
        ["\u0532", "B"],
        ["\u0563", "g"],
        ["\u0533", "G"],
        ["\u0564", "d"],
        ["\u0534", "D"],
        ["\u0565", "ye"],
        ["\u0535", "Ye"],
        ["\u0566", "z"],
        ["\u0536", "Z"],
        ["\u0567", "e"],
        ["\u0537", "E"],
        ["\u0568", "y"],
        ["\u0538", "Y"],
        ["\u0569", "t"],
        ["\u0539", "T"],
        ["\u056a", "zh"],
        ["\u053a", "Zh"],
        ["\u056b", "i"],
        ["\u053b", "I"],
        ["\u056c", "l"],
        ["\u053c", "L"],
        ["\u056d", "kh"],
        ["\u053d", "Kh"],
        ["\u056e", "ts"],
        ["\u053e", "Ts"],
        ["\u056f", "k"],
        ["\u053f", "K"],
        ["\u0570", "h"],
        ["\u0540", "H"],
        ["\u0571", "dz"],
        ["\u0541", "Dz"],
        ["\u0572", "gh"],
        ["\u0542", "Gh"],
        ["\u0573", "tch"],
        ["\u0543", "Tch"],
        ["\u0574", "m"],
        ["\u0544", "M"],
        ["\u0575", "y"],
        ["\u0545", "Y"],
        ["\u0576", "n"],
        ["\u0546", "N"],
        ["\u0577", "sh"],
        ["\u0547", "Sh"],
        ["\u0578", "vo"],
        ["\u0548", "Vo"],
        ["\u0579", "ch"],
        ["\u0549", "Ch"],
        ["\u057a", "p"],
        ["\u054a", "P"],
        ["\u057b", "j"],
        ["\u054b", "J"],
        ["\u057c", "r"],
        ["\u054c", "R"],
        ["\u057d", "s"],
        ["\u054d", "S"],
        ["\u057e", "v"],
        ["\u054e", "V"],
        ["\u057f", "t"],
        ["\u054f", "T"],
        ["\u0580", "r"],
        ["\u0550", "R"],
        ["\u0581", "c"],
        ["\u0551", "C"],
        ["\u0578\u0582", "u"],
        ["\u0548\u0552", "U"],
        ["\u0548\u0582", "U"],
        ["\u0583", "p"],
        ["\u0553", "P"],
        ["\u0584", "q"],
        ["\u0554", "Q"],
        ["\u0585", "o"],
        ["\u0555", "O"],
        ["\u0586", "f"],
        ["\u0556", "F"],
        ["\u0587", "yev"],
        ["\u10d0", "a"],
        ["\u10d1", "b"],
        ["\u10d2", "g"],
        ["\u10d3", "d"],
        ["\u10d4", "e"],
        ["\u10d5", "v"],
        ["\u10d6", "z"],
        ["\u10d7", "t"],
        ["\u10d8", "i"],
        ["\u10d9", "k"],
        ["\u10da", "l"],
        ["\u10db", "m"],
        ["\u10dc", "n"],
        ["\u10dd", "o"],
        ["\u10de", "p"],
        ["\u10df", "zh"],
        ["\u10e0", "r"],
        ["\u10e1", "s"],
        ["\u10e2", "t"],
        ["\u10e3", "u"],
        ["\u10e4", "ph"],
        ["\u10e5", "q"],
        ["\u10e6", "gh"],
        ["\u10e7", "k"],
        ["\u10e8", "sh"],
        ["\u10e9", "ch"],
        ["\u10ea", "ts"],
        ["\u10eb", "dz"],
        ["\u10ec", "ts"],
        ["\u10ed", "tch"],
        ["\u10ee", "kh"],
        ["\u10ef", "j"],
        ["\u10f0", "h"],
        ["\u010d", "c"],
        ["\u010f", "d"],
        ["\u011b", "e"],
        ["\u0148", "n"],
        ["\u0159", "r"],
        ["\u0161", "s"],
        ["\u0165", "t"],
        ["\u016f", "u"],
        ["\u017e", "z"],
        ["\u010c", "C"],
        ["\u010e", "D"],
        ["\u011a", "E"],
        ["\u0147", "N"],
        ["\u0158", "R"],
        ["\u0160", "S"],
        ["\u0164", "T"],
        ["\u016e", "U"],
        ["\u017d", "Z"],
        ["\u0780", "h"],
        ["\u0781", "sh"],
        ["\u0782", "n"],
        ["\u0783", "r"],
        ["\u0784", "b"],
        ["\u0785", "lh"],
        ["\u0786", "k"],
        ["\u0787", "a"],
        ["\u0788", "v"],
        ["\u0789", "m"],
        ["\u078a", "f"],
        ["\u078b", "dh"],
        ["\u078c", "th"],
        ["\u078d", "l"],
        ["\u078e", "g"],
        ["\u078f", "gn"],
        ["\u0790", "s"],
        ["\u0791", "d"],
        ["\u0792", "z"],
        ["\u0793", "t"],
        ["\u0794", "y"],
        ["\u0795", "p"],
        ["\u0796", "j"],
        ["\u0797", "ch"],
        ["\u0798", "tt"],
        ["\u0799", "hh"],
        ["\u079a", "kh"],
        ["\u079b", "th"],
        ["\u079c", "z"],
        ["\u079d", "sh"],
        ["\u079e", "s"],
        ["\u079f", "d"],
        ["\u07a0", "t"],
        ["\u07a1", "z"],
        ["\u07a2", "a"],
        ["\u07a3", "gh"],
        ["\u07a4", "q"],
        ["\u07a5", "w"],
        ["\u07a6", "a"],
        ["\u07a7", "aa"],
        ["\u07a8", "i"],
        ["\u07a9", "ee"],
        ["\u07aa", "u"],
        ["\u07ab", "oo"],
        ["\u07ac", "e"],
        ["\u07ad", "ey"],
        ["\u07ae", "o"],
        ["\u07af", "oa"],
        ["\u07b0", ""],
        ["\u03b1", "a"],
        ["\u03b2", "v"],
        ["\u03b3", "g"],
        ["\u03b4", "d"],
        ["\u03b5", "e"],
        ["\u03b6", "z"],
        ["\u03b7", "i"],
        ["\u03b8", "th"],
        ["\u03b9", "i"],
        ["\u03ba", "k"],
        ["\u03bb", "l"],
        ["\u03bc", "m"],
        ["\u03bd", "n"],
        ["\u03be", "ks"],
        ["\u03bf", "o"],
        ["\u03c0", "p"],
        ["\u03c1", "r"],
        ["\u03c3", "s"],
        ["\u03c4", "t"],
        ["\u03c5", "y"],
        ["\u03c6", "f"],
        ["\u03c7", "x"],
        ["\u03c8", "ps"],
        ["\u03c9", "o"],
        ["\u03ac", "a"],
        ["\u03ad", "e"],
        ["\u03af", "i"],
        ["\u03cc", "o"],
        ["\u03cd", "y"],
        ["\u03ae", "i"],
        ["\u03ce", "o"],
        ["\u03c2", "s"],
        ["\u03ca", "i"],
        ["\u03b0", "y"],
        ["\u03cb", "y"],
        ["\u0390", "i"],
        ["\u0391", "A"],
        ["\u0392", "B"],
        ["\u0393", "G"],
        ["\u0394", "D"],
        ["\u0395", "E"],
        ["\u0396", "Z"],
        ["\u0397", "I"],
        ["\u0398", "TH"],
        ["\u0399", "I"],
        ["\u039a", "K"],
        ["\u039b", "L"],
        ["\u039c", "M"],
        ["\u039d", "N"],
        ["\u039e", "KS"],
        ["\u039f", "O"],
        ["\u03a0", "P"],
        ["\u03a1", "R"],
        ["\u03a3", "S"],
        ["\u03a4", "T"],
        ["\u03a5", "Y"],
        ["\u03a6", "F"],
        ["\u03a7", "X"],
        ["\u03a8", "PS"],
        ["\u03a9", "O"],
        ["\u0386", "A"],
        ["\u0388", "E"],
        ["\u038a", "I"],
        ["\u038c", "O"],
        ["\u038e", "Y"],
        ["\u0389", "I"],
        ["\u038f", "O"],
        ["\u03aa", "I"],
        ["\u03ab", "Y"],
        ["\u0101", "a"],
        ["\u0113", "e"],
        ["\u0123", "g"],
        ["\u012b", "i"],
        ["\u0137", "k"],
        ["\u013c", "l"],
        ["\u0146", "n"],
        ["\u016b", "u"],
        ["\u0100", "A"],
        ["\u0112", "E"],
        ["\u0122", "G"],
        ["\u012a", "I"],
        ["\u0136", "K"],
        ["\u013b", "L"],
        ["\u0145", "N"],
        ["\u016a", "U"],
        ["\u010d", "c"],
        ["\u0161", "s"],
        ["\u017e", "z"],
        ["\u010c", "C"],
        ["\u0160", "S"],
        ["\u017d", "Z"],
        ["\u0105", "a"],
        ["\u010d", "c"],
        ["\u0119", "e"],
        ["\u0117", "e"],
        ["\u012f", "i"],
        ["\u0161", "s"],
        ["\u0173", "u"],
        ["\u016b", "u"],
        ["\u017e", "z"],
        ["\u0104", "A"],
        ["\u010c", "C"],
        ["\u0118", "E"],
        ["\u0116", "E"],
        ["\u012e", "I"],
        ["\u0160", "S"],
        ["\u0172", "U"],
        ["\u016a", "U"],
        ["\u040c", "Kj"],
        ["\u045c", "kj"],
        ["\u0409", "Lj"],
        ["\u0459", "lj"],
        ["\u040a", "Nj"],
        ["\u045a", "nj"],
        ["\u0422\u0441", "Ts"],
        ["\u0442\u0441", "ts"],
        ["\u0105", "a"],
        ["\u0107", "c"],
        ["\u0119", "e"],
        ["\u0142", "l"],
        ["\u0144", "n"],
        ["\u015b", "s"],
        ["\u017a", "z"],
        ["\u017c", "z"],
        ["\u0104", "A"],
        ["\u0106", "C"],
        ["\u0118", "E"],
        ["\u0141", "L"],
        ["\u0143", "N"],
        ["\u015a", "S"],
        ["\u0179", "Z"],
        ["\u017b", "Z"],
        ["\u0404", "Ye"],
        ["\u0406", "I"],
        ["\u0407", "Yi"],
        ["\u0490", "G"],
        ["\u0454", "ye"],
        ["\u0456", "i"],
        ["\u0457", "yi"],
        ["\u0491", "g"],
        ["\u0132", "IJ"],
        ["\u0133", "ij"],
        ["\xa2", "c"],
        ["\xa5", "Y"],
        ["\u07ff", "b"],
        ["\u09f3", "t"],
        ["\u0af1", "Bo"],
        ["\u0e3f", "B"],
        ["\u20a0", "CE"],
        ["\u20a1", "C"],
        ["\u20a2", "Cr"],
        ["\u20a3", "F"],
        ["\u20a5", "m"],
        ["\u20a6", "N"],
        ["\u20a7", "Pt"],
        ["\u20a8", "Rs"],
        ["\u20a9", "W"],
        ["\u20ab", "s"],
        ["\u20ac", "E"],
        ["\u20ad", "K"],
        ["\u20ae", "T"],
        ["\u20af", "Dp"],
        ["\u20b0", "S"],
        ["\u20b1", "P"],
        ["\u20b2", "G"],
        ["\u20b3", "A"],
        ["\u20b4", "S"],
        ["\u20b5", "C"],
        ["\u20b6", "tt"],
        ["\u20b7", "S"],
        ["\u20b8", "T"],
        ["\u20b9", "R"],
        ["\u20ba", "L"],
        ["\u20bd", "P"],
        ["\u20bf", "B"],
        ["\ufe69", "$"],
        ["\uffe0", "c"],
        ["\uffe5", "Y"],
        ["\uffe6", "W"],
        ["\ud835\udc00", "A"],
        ["\ud835\udc01", "B"],
        ["\ud835\udc02", "C"],
        ["\ud835\udc03", "D"],
        ["\ud835\udc04", "E"],
        ["\ud835\udc05", "F"],
        ["\ud835\udc06", "G"],
        ["\ud835\udc07", "H"],
        ["\ud835\udc08", "I"],
        ["\ud835\udc09", "J"],
        ["\ud835\udc0a", "K"],
        ["\ud835\udc0b", "L"],
        ["\ud835\udc0c", "M"],
        ["\ud835\udc0d", "N"],
        ["\ud835\udc0e", "O"],
        ["\ud835\udc0f", "P"],
        ["\ud835\udc10", "Q"],
        ["\ud835\udc11", "R"],
        ["\ud835\udc12", "S"],
        ["\ud835\udc13", "T"],
        ["\ud835\udc14", "U"],
        ["\ud835\udc15", "V"],
        ["\ud835\udc16", "W"],
        ["\ud835\udc17", "X"],
        ["\ud835\udc18", "Y"],
        ["\ud835\udc19", "Z"],
        ["\ud835\udc1a", "a"],
        ["\ud835\udc1b", "b"],
        ["\ud835\udc1c", "c"],
        ["\ud835\udc1d", "d"],
        ["\ud835\udc1e", "e"],
        ["\ud835\udc1f", "f"],
        ["\ud835\udc20", "g"],
        ["\ud835\udc21", "h"],
        ["\ud835\udc22", "i"],
        ["\ud835\udc23", "j"],
        ["\ud835\udc24", "k"],
        ["\ud835\udc25", "l"],
        ["\ud835\udc26", "m"],
        ["\ud835\udc27", "n"],
        ["\ud835\udc28", "o"],
        ["\ud835\udc29", "p"],
        ["\ud835\udc2a", "q"],
        ["\ud835\udc2b", "r"],
        ["\ud835\udc2c", "s"],
        ["\ud835\udc2d", "t"],
        ["\ud835\udc2e", "u"],
        ["\ud835\udc2f", "v"],
        ["\ud835\udc30", "w"],
        ["\ud835\udc31", "x"],
        ["\ud835\udc32", "y"],
        ["\ud835\udc33", "z"],
        ["\ud835\udc34", "A"],
        ["\ud835\udc35", "B"],
        ["\ud835\udc36", "C"],
        ["\ud835\udc37", "D"],
        ["\ud835\udc38", "E"],
        ["\ud835\udc39", "F"],
        ["\ud835\udc3a", "G"],
        ["\ud835\udc3b", "H"],
        ["\ud835\udc3c", "I"],
        ["\ud835\udc3d", "J"],
        ["\ud835\udc3e", "K"],
        ["\ud835\udc3f", "L"],
        ["\ud835\udc40", "M"],
        ["\ud835\udc41", "N"],
        ["\ud835\udc42", "O"],
        ["\ud835\udc43", "P"],
        ["\ud835\udc44", "Q"],
        ["\ud835\udc45", "R"],
        ["\ud835\udc46", "S"],
        ["\ud835\udc47", "T"],
        ["\ud835\udc48", "U"],
        ["\ud835\udc49", "V"],
        ["\ud835\udc4a", "W"],
        ["\ud835\udc4b", "X"],
        ["\ud835\udc4c", "Y"],
        ["\ud835\udc4d", "Z"],
        ["\ud835\udc4e", "a"],
        ["\ud835\udc4f", "b"],
        ["\ud835\udc50", "c"],
        ["\ud835\udc51", "d"],
        ["\ud835\udc52", "e"],
        ["\ud835\udc53", "f"],
        ["\ud835\udc54", "g"],
        ["\ud835\udc56", "i"],
        ["\ud835\udc57", "j"],
        ["\ud835\udc58", "k"],
        ["\ud835\udc59", "l"],
        ["\ud835\udc5a", "m"],
        ["\ud835\udc5b", "n"],
        ["\ud835\udc5c", "o"],
        ["\ud835\udc5d", "p"],
        ["\ud835\udc5e", "q"],
        ["\ud835\udc5f", "r"],
        ["\ud835\udc60", "s"],
        ["\ud835\udc61", "t"],
        ["\ud835\udc62", "u"],
        ["\ud835\udc63", "v"],
        ["\ud835\udc64", "w"],
        ["\ud835\udc65", "x"],
        ["\ud835\udc66", "y"],
        ["\ud835\udc67", "z"],
        ["\ud835\udc68", "A"],
        ["\ud835\udc69", "B"],
        ["\ud835\udc6a", "C"],
        ["\ud835\udc6b", "D"],
        ["\ud835\udc6c", "E"],
        ["\ud835\udc6d", "F"],
        ["\ud835\udc6e", "G"],
        ["\ud835\udc6f", "H"],
        ["\ud835\udc70", "I"],
        ["\ud835\udc71", "J"],
        ["\ud835\udc72", "K"],
        ["\ud835\udc73", "L"],
        ["\ud835\udc74", "M"],
        ["\ud835\udc75", "N"],
        ["\ud835\udc76", "O"],
        ["\ud835\udc77", "P"],
        ["\ud835\udc78", "Q"],
        ["\ud835\udc79", "R"],
        ["\ud835\udc7a", "S"],
        ["\ud835\udc7b", "T"],
        ["\ud835\udc7c", "U"],
        ["\ud835\udc7d", "V"],
        ["\ud835\udc7e", "W"],
        ["\ud835\udc7f", "X"],
        ["\ud835\udc80", "Y"],
        ["\ud835\udc81", "Z"],
        ["\ud835\udc82", "a"],
        ["\ud835\udc83", "b"],
        ["\ud835\udc84", "c"],
        ["\ud835\udc85", "d"],
        ["\ud835\udc86", "e"],
        ["\ud835\udc87", "f"],
        ["\ud835\udc88", "g"],
        ["\ud835\udc89", "h"],
        ["\ud835\udc8a", "i"],
        ["\ud835\udc8b", "j"],
        ["\ud835\udc8c", "k"],
        ["\ud835\udc8d", "l"],
        ["\ud835\udc8e", "m"],
        ["\ud835\udc8f", "n"],
        ["\ud835\udc90", "o"],
        ["\ud835\udc91", "p"],
        ["\ud835\udc92", "q"],
        ["\ud835\udc93", "r"],
        ["\ud835\udc94", "s"],
        ["\ud835\udc95", "t"],
        ["\ud835\udc96", "u"],
        ["\ud835\udc97", "v"],
        ["\ud835\udc98", "w"],
        ["\ud835\udc99", "x"],
        ["\ud835\udc9a", "y"],
        ["\ud835\udc9b", "z"],
        ["\ud835\udc9c", "A"],
        ["\ud835\udc9e", "C"],
        ["\ud835\udc9f", "D"],
        ["\ud835\udca2", "g"],
        ["\ud835\udca5", "J"],
        ["\ud835\udca6", "K"],
        ["\ud835\udca9", "N"],
        ["\ud835\udcaa", "O"],
        ["\ud835\udcab", "P"],
        ["\ud835\udcac", "Q"],
        ["\ud835\udcae", "S"],
        ["\ud835\udcaf", "T"],
        ["\ud835\udcb0", "U"],
        ["\ud835\udcb1", "V"],
        ["\ud835\udcb2", "W"],
        ["\ud835\udcb3", "X"],
        ["\ud835\udcb4", "Y"],
        ["\ud835\udcb5", "Z"],
        ["\ud835\udcb6", "a"],
        ["\ud835\udcb7", "b"],
        ["\ud835\udcb8", "c"],
        ["\ud835\udcb9", "d"],
        ["\ud835\udcbb", "f"],
        ["\ud835\udcbd", "h"],
        ["\ud835\udcbe", "i"],
        ["\ud835\udcbf", "j"],
        ["\ud835\udcc0", "h"],
        ["\ud835\udcc1", "l"],
        ["\ud835\udcc2", "m"],
        ["\ud835\udcc3", "n"],
        ["\ud835\udcc5", "p"],
        ["\ud835\udcc6", "q"],
        ["\ud835\udcc7", "r"],
        ["\ud835\udcc8", "s"],
        ["\ud835\udcc9", "t"],
        ["\ud835\udcca", "u"],
        ["\ud835\udccb", "v"],
        ["\ud835\udccc", "w"],
        ["\ud835\udccd", "x"],
        ["\ud835\udcce", "y"],
        ["\ud835\udccf", "z"],
        ["\ud835\udcd0", "A"],
        ["\ud835\udcd1", "B"],
        ["\ud835\udcd2", "C"],
        ["\ud835\udcd3", "D"],
        ["\ud835\udcd4", "E"],
        ["\ud835\udcd5", "F"],
        ["\ud835\udcd6", "G"],
        ["\ud835\udcd7", "H"],
        ["\ud835\udcd8", "I"],
        ["\ud835\udcd9", "J"],
        ["\ud835\udcda", "K"],
        ["\ud835\udcdb", "L"],
        ["\ud835\udcdc", "M"],
        ["\ud835\udcdd", "N"],
        ["\ud835\udcde", "O"],
        ["\ud835\udcdf", "P"],
        ["\ud835\udce0", "Q"],
        ["\ud835\udce1", "R"],
        ["\ud835\udce2", "S"],
        ["\ud835\udce3", "T"],
        ["\ud835\udce4", "U"],
        ["\ud835\udce5", "V"],
        ["\ud835\udce6", "W"],
        ["\ud835\udce7", "X"],
        ["\ud835\udce8", "Y"],
        ["\ud835\udce9", "Z"],
        ["\ud835\udcea", "a"],
        ["\ud835\udceb", "b"],
        ["\ud835\udcec", "c"],
        ["\ud835\udced", "d"],
        ["\ud835\udcee", "e"],
        ["\ud835\udcef", "f"],
        ["\ud835\udcf0", "g"],
        ["\ud835\udcf1", "h"],
        ["\ud835\udcf2", "i"],
        ["\ud835\udcf3", "j"],
        ["\ud835\udcf4", "k"],
        ["\ud835\udcf5", "l"],
        ["\ud835\udcf6", "m"],
        ["\ud835\udcf7", "n"],
        ["\ud835\udcf8", "o"],
        ["\ud835\udcf9", "p"],
        ["\ud835\udcfa", "q"],
        ["\ud835\udcfb", "r"],
        ["\ud835\udcfc", "s"],
        ["\ud835\udcfd", "t"],
        ["\ud835\udcfe", "u"],
        ["\ud835\udcff", "v"],
        ["\ud835\udd00", "w"],
        ["\ud835\udd01", "x"],
        ["\ud835\udd02", "y"],
        ["\ud835\udd03", "z"],
        ["\ud835\udd04", "A"],
        ["\ud835\udd05", "B"],
        ["\ud835\udd07", "D"],
        ["\ud835\udd08", "E"],
        ["\ud835\udd09", "F"],
        ["\ud835\udd0a", "G"],
        ["\ud835\udd0d", "J"],
        ["\ud835\udd0e", "K"],
        ["\ud835\udd0f", "L"],
        ["\ud835\udd10", "M"],
        ["\ud835\udd11", "N"],
        ["\ud835\udd12", "O"],
        ["\ud835\udd13", "P"],
        ["\ud835\udd14", "Q"],
        ["\ud835\udd16", "S"],
        ["\ud835\udd17", "T"],
        ["\ud835\udd18", "U"],
        ["\ud835\udd19", "V"],
        ["\ud835\udd1a", "W"],
        ["\ud835\udd1b", "X"],
        ["\ud835\udd1c", "Y"],
        ["\ud835\udd1e", "a"],
        ["\ud835\udd1f", "b"],
        ["\ud835\udd20", "c"],
        ["\ud835\udd21", "d"],
        ["\ud835\udd22", "e"],
        ["\ud835\udd23", "f"],
        ["\ud835\udd24", "g"],
        ["\ud835\udd25", "h"],
        ["\ud835\udd26", "i"],
        ["\ud835\udd27", "j"],
        ["\ud835\udd28", "k"],
        ["\ud835\udd29", "l"],
        ["\ud835\udd2a", "m"],
        ["\ud835\udd2b", "n"],
        ["\ud835\udd2c", "o"],
        ["\ud835\udd2d", "p"],
        ["\ud835\udd2e", "q"],
        ["\ud835\udd2f", "r"],
        ["\ud835\udd30", "s"],
        ["\ud835\udd31", "t"],
        ["\ud835\udd32", "u"],
        ["\ud835\udd33", "v"],
        ["\ud835\udd34", "w"],
        ["\ud835\udd35", "x"],
        ["\ud835\udd36", "y"],
        ["\ud835\udd37", "z"],
        ["\ud835\udd38", "A"],
        ["\ud835\udd39", "B"],
        ["\ud835\udd3b", "D"],
        ["\ud835\udd3c", "E"],
        ["\ud835\udd3d", "F"],
        ["\ud835\udd3e", "G"],
        ["\ud835\udd40", "I"],
        ["\ud835\udd41", "J"],
        ["\ud835\udd42", "K"],
        ["\ud835\udd43", "L"],
        ["\ud835\udd44", "M"],
        ["\ud835\udd46", "N"],
        ["\ud835\udd4a", "S"],
        ["\ud835\udd4b", "T"],
        ["\ud835\udd4c", "U"],
        ["\ud835\udd4d", "V"],
        ["\ud835\udd4e", "W"],
        ["\ud835\udd4f", "X"],
        ["\ud835\udd50", "Y"],
        ["\ud835\udd52", "a"],
        ["\ud835\udd53", "b"],
        ["\ud835\udd54", "c"],
        ["\ud835\udd55", "d"],
        ["\ud835\udd56", "e"],
        ["\ud835\udd57", "f"],
        ["\ud835\udd58", "g"],
        ["\ud835\udd59", "h"],
        ["\ud835\udd5a", "i"],
        ["\ud835\udd5b", "j"],
        ["\ud835\udd5c", "k"],
        ["\ud835\udd5d", "l"],
        ["\ud835\udd5e", "m"],
        ["\ud835\udd5f", "n"],
        ["\ud835\udd60", "o"],
        ["\ud835\udd61", "p"],
        ["\ud835\udd62", "q"],
        ["\ud835\udd63", "r"],
        ["\ud835\udd64", "s"],
        ["\ud835\udd65", "t"],
        ["\ud835\udd66", "u"],
        ["\ud835\udd67", "v"],
        ["\ud835\udd68", "w"],
        ["\ud835\udd69", "x"],
        ["\ud835\udd6a", "y"],
        ["\ud835\udd6b", "z"],
        ["\ud835\udd6c", "A"],
        ["\ud835\udd6d", "B"],
        ["\ud835\udd6e", "C"],
        ["\ud835\udd6f", "D"],
        ["\ud835\udd70", "E"],
        ["\ud835\udd71", "F"],
        ["\ud835\udd72", "G"],
        ["\ud835\udd73", "H"],
        ["\ud835\udd74", "I"],
        ["\ud835\udd75", "J"],
        ["\ud835\udd76", "K"],
        ["\ud835\udd77", "L"],
        ["\ud835\udd78", "M"],
        ["\ud835\udd79", "N"],
        ["\ud835\udd7a", "O"],
        ["\ud835\udd7b", "P"],
        ["\ud835\udd7c", "Q"],
        ["\ud835\udd7d", "R"],
        ["\ud835\udd7e", "S"],
        ["\ud835\udd7f", "T"],
        ["\ud835\udd80", "U"],
        ["\ud835\udd81", "V"],
        ["\ud835\udd82", "W"],
        ["\ud835\udd83", "X"],
        ["\ud835\udd84", "Y"],
        ["\ud835\udd85", "Z"],
        ["\ud835\udd86", "a"],
        ["\ud835\udd87", "b"],
        ["\ud835\udd88", "c"],
        ["\ud835\udd89", "d"],
        ["\ud835\udd8a", "e"],
        ["\ud835\udd8b", "f"],
        ["\ud835\udd8c", "g"],
        ["\ud835\udd8d", "h"],
        ["\ud835\udd8e", "i"],
        ["\ud835\udd8f", "j"],
        ["\ud835\udd90", "k"],
        ["\ud835\udd91", "l"],
        ["\ud835\udd92", "m"],
        ["\ud835\udd93", "n"],
        ["\ud835\udd94", "o"],
        ["\ud835\udd95", "p"],
        ["\ud835\udd96", "q"],
        ["\ud835\udd97", "r"],
        ["\ud835\udd98", "s"],
        ["\ud835\udd99", "t"],
        ["\ud835\udd9a", "u"],
        ["\ud835\udd9b", "v"],
        ["\ud835\udd9c", "w"],
        ["\ud835\udd9d", "x"],
        ["\ud835\udd9e", "y"],
        ["\ud835\udd9f", "z"],
        ["\ud835\udda0", "A"],
        ["\ud835\udda1", "B"],
        ["\ud835\udda2", "C"],
        ["\ud835\udda3", "D"],
        ["\ud835\udda4", "E"],
        ["\ud835\udda5", "F"],
        ["\ud835\udda6", "G"],
        ["\ud835\udda7", "H"],
        ["\ud835\udda8", "I"],
        ["\ud835\udda9", "J"],
        ["\ud835\uddaa", "K"],
        ["\ud835\uddab", "L"],
        ["\ud835\uddac", "M"],
        ["\ud835\uddad", "N"],
        ["\ud835\uddae", "O"],
        ["\ud835\uddaf", "P"],
        ["\ud835\uddb0", "Q"],
        ["\ud835\uddb1", "R"],
        ["\ud835\uddb2", "S"],
        ["\ud835\uddb3", "T"],
        ["\ud835\uddb4", "U"],
        ["\ud835\uddb5", "V"],
        ["\ud835\uddb6", "W"],
        ["\ud835\uddb7", "X"],
        ["\ud835\uddb8", "Y"],
        ["\ud835\uddb9", "Z"],
        ["\ud835\uddba", "a"],
        ["\ud835\uddbb", "b"],
        ["\ud835\uddbc", "c"],
        ["\ud835\uddbd", "d"],
        ["\ud835\uddbe", "e"],
        ["\ud835\uddbf", "f"],
        ["\ud835\uddc0", "g"],
        ["\ud835\uddc1", "h"],
        ["\ud835\uddc2", "i"],
        ["\ud835\uddc3", "j"],
        ["\ud835\uddc4", "k"],
        ["\ud835\uddc5", "l"],
        ["\ud835\uddc6", "m"],
        ["\ud835\uddc7", "n"],
        ["\ud835\uddc8", "o"],
        ["\ud835\uddc9", "p"],
        ["\ud835\uddca", "q"],
        ["\ud835\uddcb", "r"],
        ["\ud835\uddcc", "s"],
        ["\ud835\uddcd", "t"],
        ["\ud835\uddce", "u"],
        ["\ud835\uddcf", "v"],
        ["\ud835\uddd0", "w"],
        ["\ud835\uddd1", "x"],
        ["\ud835\uddd2", "y"],
        ["\ud835\uddd3", "z"],
        ["\ud835\uddd4", "A"],
        ["\ud835\uddd5", "B"],
        ["\ud835\uddd6", "C"],
        ["\ud835\uddd7", "D"],
        ["\ud835\uddd8", "E"],
        ["\ud835\uddd9", "F"],
        ["\ud835\uddda", "G"],
        ["\ud835\udddb", "H"],
        ["\ud835\udddc", "I"],
        ["\ud835\udddd", "J"],
        ["\ud835\uddde", "K"],
        ["\ud835\udddf", "L"],
        ["\ud835\udde0", "M"],
        ["\ud835\udde1", "N"],
        ["\ud835\udde2", "O"],
        ["\ud835\udde3", "P"],
        ["\ud835\udde4", "Q"],
        ["\ud835\udde5", "R"],
        ["\ud835\udde6", "S"],
        ["\ud835\udde7", "T"],
        ["\ud835\udde8", "U"],
        ["\ud835\udde9", "V"],
        ["\ud835\uddea", "W"],
        ["\ud835\uddeb", "X"],
        ["\ud835\uddec", "Y"],
        ["\ud835\udded", "Z"],
        ["\ud835\uddee", "a"],
        ["\ud835\uddef", "b"],
        ["\ud835\uddf0", "c"],
        ["\ud835\uddf1", "d"],
        ["\ud835\uddf2", "e"],
        ["\ud835\uddf3", "f"],
        ["\ud835\uddf4", "g"],
        ["\ud835\uddf5", "h"],
        ["\ud835\uddf6", "i"],
        ["\ud835\uddf7", "j"],
        ["\ud835\uddf8", "k"],
        ["\ud835\uddf9", "l"],
        ["\ud835\uddfa", "m"],
        ["\ud835\uddfb", "n"],
        ["\ud835\uddfc", "o"],
        ["\ud835\uddfd", "p"],
        ["\ud835\uddfe", "q"],
        ["\ud835\uddff", "r"],
        ["\ud835\ude00", "s"],
        ["\ud835\ude01", "t"],
        ["\ud835\ude02", "u"],
        ["\ud835\ude03", "v"],
        ["\ud835\ude04", "w"],
        ["\ud835\ude05", "x"],
        ["\ud835\ude06", "y"],
        ["\ud835\ude07", "z"],
        ["\ud835\ude08", "A"],
        ["\ud835\ude09", "B"],
        ["\ud835\ude0a", "C"],
        ["\ud835\ude0b", "D"],
        ["\ud835\ude0c", "E"],
        ["\ud835\ude0d", "F"],
        ["\ud835\ude0e", "G"],
        ["\ud835\ude0f", "H"],
        ["\ud835\ude10", "I"],
        ["\ud835\ude11", "J"],
        ["\ud835\ude12", "K"],
        ["\ud835\ude13", "L"],
        ["\ud835\ude14", "M"],
        ["\ud835\ude15", "N"],
        ["\ud835\ude16", "O"],
        ["\ud835\ude17", "P"],
        ["\ud835\ude18", "Q"],
        ["\ud835\ude19", "R"],
        ["\ud835\ude1a", "S"],
        ["\ud835\ude1b", "T"],
        ["\ud835\ude1c", "U"],
        ["\ud835\ude1d", "V"],
        ["\ud835\ude1e", "W"],
        ["\ud835\ude1f", "X"],
        ["\ud835\ude20", "Y"],
        ["\ud835\ude21", "Z"],
        ["\ud835\ude22", "a"],
        ["\ud835\ude23", "b"],
        ["\ud835\ude24", "c"],
        ["\ud835\ude25", "d"],
        ["\ud835\ude26", "e"],
        ["\ud835\ude27", "f"],
        ["\ud835\ude28", "g"],
        ["\ud835\ude29", "h"],
        ["\ud835\ude2a", "i"],
        ["\ud835\ude2b", "j"],
        ["\ud835\ude2c", "k"],
        ["\ud835\ude2d", "l"],
        ["\ud835\ude2e", "m"],
        ["\ud835\ude2f", "n"],
        ["\ud835\ude30", "o"],
        ["\ud835\ude31", "p"],
        ["\ud835\ude32", "q"],
        ["\ud835\ude33", "r"],
        ["\ud835\ude34", "s"],
        ["\ud835\ude35", "t"],
        ["\ud835\ude36", "u"],
        ["\ud835\ude37", "v"],
        ["\ud835\ude38", "w"],
        ["\ud835\ude39", "x"],
        ["\ud835\ude3a", "y"],
        ["\ud835\ude3b", "z"],
        ["\ud835\ude3c", "A"],
        ["\ud835\ude3d", "B"],
        ["\ud835\ude3e", "C"],
        ["\ud835\ude3f", "D"],
        ["\ud835\ude40", "E"],
        ["\ud835\ude41", "F"],
        ["\ud835\ude42", "G"],
        ["\ud835\ude43", "H"],
        ["\ud835\ude44", "I"],
        ["\ud835\ude45", "J"],
        ["\ud835\ude46", "K"],
        ["\ud835\ude47", "L"],
        ["\ud835\ude48", "M"],
        ["\ud835\ude49", "N"],
        ["\ud835\ude4a", "O"],
        ["\ud835\ude4b", "P"],
        ["\ud835\ude4c", "Q"],
        ["\ud835\ude4d", "R"],
        ["\ud835\ude4e", "S"],
        ["\ud835\ude4f", "T"],
        ["\ud835\ude50", "U"],
        ["\ud835\ude51", "V"],
        ["\ud835\ude52", "W"],
        ["\ud835\ude53", "X"],
        ["\ud835\ude54", "Y"],
        ["\ud835\ude55", "Z"],
        ["\ud835\ude56", "a"],
        ["\ud835\ude57", "b"],
        ["\ud835\ude58", "c"],
        ["\ud835\ude59", "d"],
        ["\ud835\ude5a", "e"],
        ["\ud835\ude5b", "f"],
        ["\ud835\ude5c", "g"],
        ["\ud835\ude5d", "h"],
        ["\ud835\ude5e", "i"],
        ["\ud835\ude5f", "j"],
        ["\ud835\ude60", "k"],
        ["\ud835\ude61", "l"],
        ["\ud835\ude62", "m"],
        ["\ud835\ude63", "n"],
        ["\ud835\ude64", "o"],
        ["\ud835\ude65", "p"],
        ["\ud835\ude66", "q"],
        ["\ud835\ude67", "r"],
        ["\ud835\ude68", "s"],
        ["\ud835\ude69", "t"],
        ["\ud835\ude6a", "u"],
        ["\ud835\ude6b", "v"],
        ["\ud835\ude6c", "w"],
        ["\ud835\ude6d", "x"],
        ["\ud835\ude6e", "y"],
        ["\ud835\ude6f", "z"],
        ["\ud835\ude70", "A"],
        ["\ud835\ude71", "B"],
        ["\ud835\ude72", "C"],
        ["\ud835\ude73", "D"],
        ["\ud835\ude74", "E"],
        ["\ud835\ude75", "F"],
        ["\ud835\ude76", "G"],
        ["\ud835\ude77", "H"],
        ["\ud835\ude78", "I"],
        ["\ud835\ude79", "J"],
        ["\ud835\ude7a", "K"],
        ["\ud835\ude7b", "L"],
        ["\ud835\ude7c", "M"],
        ["\ud835\ude7d", "N"],
        ["\ud835\ude7e", "O"],
        ["\ud835\ude7f", "P"],
        ["\ud835\ude80", "Q"],
        ["\ud835\ude81", "R"],
        ["\ud835\ude82", "S"],
        ["\ud835\ude83", "T"],
        ["\ud835\ude84", "U"],
        ["\ud835\ude85", "V"],
        ["\ud835\ude86", "W"],
        ["\ud835\ude87", "X"],
        ["\ud835\ude88", "Y"],
        ["\ud835\ude89", "Z"],
        ["\ud835\ude8a", "a"],
        ["\ud835\ude8b", "b"],
        ["\ud835\ude8c", "c"],
        ["\ud835\ude8d", "d"],
        ["\ud835\ude8e", "e"],
        ["\ud835\ude8f", "f"],
        ["\ud835\ude90", "g"],
        ["\ud835\ude91", "h"],
        ["\ud835\ude92", "i"],
        ["\ud835\ude93", "j"],
        ["\ud835\ude94", "k"],
        ["\ud835\ude95", "l"],
        ["\ud835\ude96", "m"],
        ["\ud835\ude97", "n"],
        ["\ud835\ude98", "o"],
        ["\ud835\ude99", "p"],
        ["\ud835\ude9a", "q"],
        ["\ud835\ude9b", "r"],
        ["\ud835\ude9c", "s"],
        ["\ud835\ude9d", "t"],
        ["\ud835\ude9e", "u"],
        ["\ud835\ude9f", "v"],
        ["\ud835\udea0", "w"],
        ["\ud835\udea1", "x"],
        ["\ud835\udea2", "y"],
        ["\ud835\udea3", "z"],
        ["\ud835\udea4", "l"],
        ["\ud835\udea5", "j"],
        ["\ud835\udee2", "A"],
        ["\ud835\udee3", "B"],
        ["\ud835\udee4", "G"],
        ["\ud835\udee5", "D"],
        ["\ud835\udee6", "E"],
        ["\ud835\udee7", "Z"],
        ["\ud835\udee8", "I"],
        ["\ud835\udee9", "TH"],
        ["\ud835\udeea", "I"],
        ["\ud835\udeeb", "K"],
        ["\ud835\udeec", "L"],
        ["\ud835\udeed", "M"],
        ["\ud835\udeee", "N"],
        ["\ud835\udeef", "KS"],
        ["\ud835\udef0", "O"],
        ["\ud835\udef1", "P"],
        ["\ud835\udef2", "R"],
        ["\ud835\udef3", "TH"],
        ["\ud835\udef4", "S"],
        ["\ud835\udef5", "T"],
        ["\ud835\udef6", "Y"],
        ["\ud835\udef7", "F"],
        ["\ud835\udef8", "x"],
        ["\ud835\udef9", "PS"],
        ["\ud835\udefa", "O"],
        ["\ud835\udefb", "D"],
        ["\ud835\udefc", "a"],
        ["\ud835\udefd", "b"],
        ["\ud835\udefe", "g"],
        ["\ud835\udeff", "d"],
        ["\ud835\udf00", "e"],
        ["\ud835\udf01", "z"],
        ["\ud835\udf02", "i"],
        ["\ud835\udf03", "th"],
        ["\ud835\udf04", "i"],
        ["\ud835\udf05", "k"],
        ["\ud835\udf06", "l"],
        ["\ud835\udf07", "m"],
        ["\ud835\udf08", "n"],
        ["\ud835\udf09", "ks"],
        ["\ud835\udf0a", "o"],
        ["\ud835\udf0b", "p"],
        ["\ud835\udf0c", "r"],
        ["\ud835\udf0d", "s"],
        ["\ud835\udf0e", "s"],
        ["\ud835\udf0f", "t"],
        ["\ud835\udf10", "y"],
        ["\ud835\udf11", "f"],
        ["\ud835\udf12", "x"],
        ["\ud835\udf13", "ps"],
        ["\ud835\udf14", "o"],
        ["\ud835\udf15", "d"],
        ["\ud835\udf16", "E"],
        ["\ud835\udf17", "TH"],
        ["\ud835\udf18", "K"],
        ["\ud835\udf19", "f"],
        ["\ud835\udf1a", "r"],
        ["\ud835\udf1b", "p"],
        ["\ud835\udf1c", "A"],
        ["\ud835\udf1d", "V"],
        ["\ud835\udf1e", "G"],
        ["\ud835\udf1f", "D"],
        ["\ud835\udf20", "E"],
        ["\ud835\udf21", "Z"],
        ["\ud835\udf22", "I"],
        ["\ud835\udf23", "TH"],
        ["\ud835\udf24", "I"],
        ["\ud835\udf25", "K"],
        ["\ud835\udf26", "L"],
        ["\ud835\udf27", "M"],
        ["\ud835\udf28", "N"],
        ["\ud835\udf29", "KS"],
        ["\ud835\udf2a", "O"],
        ["\ud835\udf2b", "P"],
        ["\ud835\udf2c", "S"],
        ["\ud835\udf2d", "TH"],
        ["\ud835\udf2e", "S"],
        ["\ud835\udf2f", "T"],
        ["\ud835\udf30", "Y"],
        ["\ud835\udf31", "F"],
        ["\ud835\udf32", "X"],
        ["\ud835\udf33", "PS"],
        ["\ud835\udf34", "O"],
        ["\ud835\udf35", "D"],
        ["\ud835\udf36", "a"],
        ["\ud835\udf37", "v"],
        ["\ud835\udf38", "g"],
        ["\ud835\udf39", "d"],
        ["\ud835\udf3a", "e"],
        ["\ud835\udf3b", "z"],
        ["\ud835\udf3c", "i"],
        ["\ud835\udf3d", "th"],
        ["\ud835\udf3e", "i"],
        ["\ud835\udf3f", "k"],
        ["\ud835\udf40", "l"],
        ["\ud835\udf41", "m"],
        ["\ud835\udf42", "n"],
        ["\ud835\udf43", "ks"],
        ["\ud835\udf44", "o"],
        ["\ud835\udf45", "p"],
        ["\ud835\udf46", "r"],
        ["\ud835\udf47", "s"],
        ["\ud835\udf48", "s"],
        ["\ud835\udf49", "t"],
        ["\ud835\udf4a", "y"],
        ["\ud835\udf4b", "f"],
        ["\ud835\udf4c", "x"],
        ["\ud835\udf4d", "ps"],
        ["\ud835\udf4e", "o"],
        ["\ud835\udf4f", "a"],
        ["\ud835\udf50", "e"],
        ["\ud835\udf51", "i"],
        ["\ud835\udf52", "k"],
        ["\ud835\udf53", "f"],
        ["\ud835\udf54", "r"],
        ["\ud835\udf55", "p"],
        ["\ud835\udf56", "A"],
        ["\ud835\udf57", "B"],
        ["\ud835\udf58", "G"],
        ["\ud835\udf59", "D"],
        ["\ud835\udf5a", "E"],
        ["\ud835\udf5b", "Z"],
        ["\ud835\udf5c", "I"],
        ["\ud835\udf5d", "TH"],
        ["\ud835\udf5e", "I"],
        ["\ud835\udf5f", "K"],
        ["\ud835\udf60", "L"],
        ["\ud835\udf61", "M"],
        ["\ud835\udf62", "N"],
        ["\ud835\udf63", "KS"],
        ["\ud835\udf64", "O"],
        ["\ud835\udf65", "P"],
        ["\ud835\udf66", "R"],
        ["\ud835\udf67", "TH"],
        ["\ud835\udf68", "S"],
        ["\ud835\udf69", "T"],
        ["\ud835\udf6a", "Y"],
        ["\ud835\udf6b", "F"],
        ["\ud835\udf6c", "X"],
        ["\ud835\udf6d", "PS"],
        ["\ud835\udf6e", "O"],
        ["\ud835\udf6f", "D"],
        ["\ud835\udf70", "a"],
        ["\ud835\udf71", "v"],
        ["\ud835\udf72", "g"],
        ["\ud835\udf73", "d"],
        ["\ud835\udf74", "e"],
        ["\ud835\udf75", "z"],
        ["\ud835\udf76", "i"],
        ["\ud835\udf77", "th"],
        ["\ud835\udf78", "i"],
        ["\ud835\udf79", "k"],
        ["\ud835\udf7a", "l"],
        ["\ud835\udf7b", "m"],
        ["\ud835\udf7c", "n"],
        ["\ud835\udf7d", "ks"],
        ["\ud835\udf7e", "o"],
        ["\ud835\udf7f", "p"],
        ["\ud835\udf80", "r"],
        ["\ud835\udf81", "s"],
        ["\ud835\udf82", "s"],
        ["\ud835\udf83", "t"],
        ["\ud835\udf84", "y"],
        ["\ud835\udf85", "f"],
        ["\ud835\udf86", "x"],
        ["\ud835\udf87", "ps"],
        ["\ud835\udf88", "o"],
        ["\ud835\udf89", "a"],
        ["\ud835\udf8a", "e"],
        ["\ud835\udf8b", "i"],
        ["\ud835\udf8c", "k"],
        ["\ud835\udf8d", "f"],
        ["\ud835\udf8e", "r"],
        ["\ud835\udf8f", "p"],
        ["\ud835\udf90", "A"],
        ["\ud835\udf91", "V"],
        ["\ud835\udf92", "G"],
        ["\ud835\udf93", "D"],
        ["\ud835\udf94", "E"],
        ["\ud835\udf95", "Z"],
        ["\ud835\udf96", "I"],
        ["\ud835\udf97", "TH"],
        ["\ud835\udf98", "I"],
        ["\ud835\udf99", "K"],
        ["\ud835\udf9a", "L"],
        ["\ud835\udf9b", "M"],
        ["\ud835\udf9c", "N"],
        ["\ud835\udf9d", "KS"],
        ["\ud835\udf9e", "O"],
        ["\ud835\udf9f", "P"],
        ["\ud835\udfa0", "S"],
        ["\ud835\udfa1", "TH"],
        ["\ud835\udfa2", "S"],
        ["\ud835\udfa3", "T"],
        ["\ud835\udfa4", "Y"],
        ["\ud835\udfa5", "F"],
        ["\ud835\udfa6", "X"],
        ["\ud835\udfa7", "PS"],
        ["\ud835\udfa8", "O"],
        ["\ud835\udfa9", "D"],
        ["\ud835\udfaa", "av"],
        ["\ud835\udfab", "g"],
        ["\ud835\udfac", "d"],
        ["\ud835\udfad", "e"],
        ["\ud835\udfae", "z"],
        ["\ud835\udfaf", "i"],
        ["\ud835\udfb0", "i"],
        ["\ud835\udfb1", "th"],
        ["\ud835\udfb2", "i"],
        ["\ud835\udfb3", "k"],
        ["\ud835\udfb4", "l"],
        ["\ud835\udfb5", "m"],
        ["\ud835\udfb6", "n"],
        ["\ud835\udfb7", "ks"],
        ["\ud835\udfb8", "o"],
        ["\ud835\udfb9", "p"],
        ["\ud835\udfba", "r"],
        ["\ud835\udfbb", "s"],
        ["\ud835\udfbc", "s"],
        ["\ud835\udfbd", "t"],
        ["\ud835\udfbe", "y"],
        ["\ud835\udfbf", "f"],
        ["\ud835\udfc0", "x"],
        ["\ud835\udfc1", "ps"],
        ["\ud835\udfc2", "o"],
        ["\ud835\udfc3", "a"],
        ["\ud835\udfc4", "e"],
        ["\ud835\udfc5", "i"],
        ["\ud835\udfc6", "k"],
        ["\ud835\udfc7", "f"],
        ["\ud835\udfc8", "r"],
        ["\ud835\udfc9", "p"],
        ["\ud835\udfca", "F"],
        ["\ud835\udfcb", "f"],
        ["\u249c", "(a)"],
        ["\u249d", "(b)"],
        ["\u249e", "(c)"],
        ["\u249f", "(d)"],
        ["\u24a0", "(e)"],
        ["\u24a1", "(f)"],
        ["\u24a2", "(g)"],
        ["\u24a3", "(h)"],
        ["\u24a4", "(i)"],
        ["\u24a5", "(j)"],
        ["\u24a6", "(k)"],
        ["\u24a7", "(l)"],
        ["\u24a8", "(m)"],
        ["\u24a9", "(n)"],
        ["\u24aa", "(o)"],
        ["\u24ab", "(p)"],
        ["\u24ac", "(q)"],
        ["\u24ad", "(r)"],
        ["\u24ae", "(s)"],
        ["\u24af", "(t)"],
        ["\u24b0", "(u)"],
        ["\u24b1", "(v)"],
        ["\u24b2", "(w)"],
        ["\u24b3", "(x)"],
        ["\u24b4", "(y)"],
        ["\u24b5", "(z)"],
        ["\u24b6", "(A)"],
        ["\u24b7", "(B)"],
        ["\u24b8", "(C)"],
        ["\u24b9", "(D)"],
        ["\u24ba", "(E)"],
        ["\u24bb", "(F)"],
        ["\u24bc", "(G)"],
        ["\u24bd", "(H)"],
        ["\u24be", "(I)"],
        ["\u24bf", "(J)"],
        ["\u24c0", "(K)"],
        ["\u24c1", "(L)"],
        ["\u24c3", "(N)"],
        ["\u24c4", "(O)"],
        ["\u24c5", "(P)"],
        ["\u24c6", "(Q)"],
        ["\u24c7", "(R)"],
        ["\u24c8", "(S)"],
        ["\u24c9", "(T)"],
        ["\u24ca", "(U)"],
        ["\u24cb", "(V)"],
        ["\u24cc", "(W)"],
        ["\u24cd", "(X)"],
        ["\u24ce", "(Y)"],
        ["\u24cf", "(Z)"],
        ["\u24d0", "(a)"],
        ["\u24d1", "(b)"],
        ["\u24d2", "(b)"],
        ["\u24d3", "(c)"],
        ["\u24d4", "(e)"],
        ["\u24d5", "(f)"],
        ["\u24d6", "(g)"],
        ["\u24d7", "(h)"],
        ["\u24d8", "(i)"],
        ["\u24d9", "(j)"],
        ["\u24da", "(k)"],
        ["\u24db", "(l)"],
        ["\u24dc", "(m)"],
        ["\u24dd", "(n)"],
        ["\u24de", "(o)"],
        ["\u24df", "(p)"],
        ["\u24e0", "(q)"],
        ["\u24e1", "(r)"],
        ["\u24e2", "(s)"],
        ["\u24e3", "(t)"],
        ["\u24e4", "(u)"],
        ["\u24e5", "(v)"],
        ["\u24e6", "(w)"],
        ["\u24e7", "(x)"],
        ["\u24e8", "(y)"],
        ["\u24e9", "(z)"],
        ["\u010a", "C"],
        ["\u010b", "c"],
        ["\u0120", "G"],
        ["\u0121", "g"],
        ["\u0126", "H"],
        ["\u0127", "h"],
        ["\u017b", "Z"],
        ["\u017c", "z"],
        ["\ud835\udfce", "0"],
        ["\ud835\udfcf", "1"],
        ["\ud835\udfd0", "2"],
        ["\ud835\udfd1", "3"],
        ["\ud835\udfd2", "4"],
        ["\ud835\udfd3", "5"],
        ["\ud835\udfd4", "6"],
        ["\ud835\udfd5", "7"],
        ["\ud835\udfd6", "8"],
        ["\ud835\udfd7", "9"],
        ["\ud835\udfd8", "0"],
        ["\ud835\udfd9", "1"],
        ["\ud835\udfda", "2"],
        ["\ud835\udfdb", "3"],
        ["\ud835\udfdc", "4"],
        ["\ud835\udfdd", "5"],
        ["\ud835\udfde", "6"],
        ["\ud835\udfdf", "7"],
        ["\ud835\udfe0", "8"],
        ["\ud835\udfe1", "9"],
        ["\ud835\udfe2", "0"],
        ["\ud835\udfe3", "1"],
        ["\ud835\udfe4", "2"],
        ["\ud835\udfe5", "3"],
        ["\ud835\udfe6", "4"],
        ["\ud835\udfe7", "5"],
        ["\ud835\udfe8", "6"],
        ["\ud835\udfe9", "7"],
        ["\ud835\udfea", "8"],
        ["\ud835\udfeb", "9"],
        ["\ud835\udfec", "0"],
        ["\ud835\udfed", "1"],
        ["\ud835\udfee", "2"],
        ["\ud835\udfef", "3"],
        ["\ud835\udff0", "4"],
        ["\ud835\udff1", "5"],
        ["\ud835\udff2", "6"],
        ["\ud835\udff3", "7"],
        ["\ud835\udff4", "8"],
        ["\ud835\udff5", "9"],
        ["\ud835\udff6", "0"],
        ["\ud835\udff7", "1"],
        ["\ud835\udff8", "2"],
        ["\ud835\udff9", "3"],
        ["\ud835\udffa", "4"],
        ["\ud835\udffb", "5"],
        ["\ud835\udffc", "6"],
        ["\ud835\udffd", "7"],
        ["\ud835\udffe", "8"],
        ["\ud835\udfff", "9"],
        ["\u2460", "1"],
        ["\u2461", "2"],
        ["\u2462", "3"],
        ["\u2463", "4"],
        ["\u2464", "5"],
        ["\u2465", "6"],
        ["\u2466", "7"],
        ["\u2467", "8"],
        ["\u2468", "9"],
        ["\u2469", "10"],
        ["\u246a", "11"],
        ["\u246b", "12"],
        ["\u246c", "13"],
        ["\u246d", "14"],
        ["\u246e", "15"],
        ["\u246f", "16"],
        ["\u2470", "17"],
        ["\u2471", "18"],
        ["\u2472", "19"],
        ["\u2473", "20"],
        ["\u2474", "1"],
        ["\u2475", "2"],
        ["\u2476", "3"],
        ["\u2477", "4"],
        ["\u2478", "5"],
        ["\u2479", "6"],
        ["\u247a", "7"],
        ["\u247b", "8"],
        ["\u247c", "9"],
        ["\u247d", "10"],
        ["\u247e", "11"],
        ["\u247f", "12"],
        ["\u2480", "13"],
        ["\u2481", "14"],
        ["\u2482", "15"],
        ["\u2483", "16"],
        ["\u2484", "17"],
        ["\u2485", "18"],
        ["\u2486", "19"],
        ["\u2487", "20"],
        ["\u2488", "1."],
        ["\u2489", "2."],
        ["\u248a", "3."],
        ["\u248b", "4."],
        ["\u248c", "5."],
        ["\u248d", "6."],
        ["\u248e", "7."],
        ["\u248f", "8."],
        ["\u2490", "9."],
        ["\u2491", "10."],
        ["\u2492", "11."],
        ["\u2493", "12."],
        ["\u2494", "13."],
        ["\u2495", "14."],
        ["\u2496", "15."],
        ["\u2497", "16."],
        ["\u2498", "17."],
        ["\u2499", "18."],
        ["\u249a", "19."],
        ["\u249b", "20."],
        ["\u24ea", "0"],
        ["\u24eb", "11"],
        ["\u24ec", "12"],
        ["\u24ed", "13"],
        ["\u24ee", "14"],
        ["\u24ef", "15"],
        ["\u24f0", "16"],
        ["\u24f1", "17"],
        ["\u24f2", "18"],
        ["\u24f3", "19"],
        ["\u24f4", "20"],
        ["\u24f5", "1"],
        ["\u24f6", "2"],
        ["\u24f7", "3"],
        ["\u24f8", "4"],
        ["\u24f9", "5"],
        ["\u24fa", "6"],
        ["\u24fb", "7"],
        ["\u24fc", "8"],
        ["\u24fd", "9"],
        ["\u24fe", "10"],
        ["\u24ff", "0"],
        ["\ud83d\ude70", "&"],
        ["\ud83d\ude71", "&"],
        ["\ud83d\ude72", "&"],
        ["\ud83d\ude73", "&"],
        ["\ud83d\ude74", "&"],
        ["\ud83d\ude75", "&"],
        ["\ud83d\ude76", '"'],
        ["\ud83d\ude77", '"'],
        ["\ud83d\ude78", '"'],
        ["\u203d", "?!"],
        ["\ud83d\ude79", "?!"],
        ["\ud83d\ude7a", "?!"],
        ["\ud83d\ude7b", "?!"],
        ["\ud83d\ude7c", "/"],
        ["\ud83d\ude7d", "\\"],
        ["\ud83d\udf07", "AR"],
        ["\ud83d\udf08", "V"],
        ["\ud83d\udf09", "V"],
        ["\ud83d\udf06", "VR"],
        ["\ud83d\udf05", "VF"],
        ["\ud83d\udf29", "2"],
        ["\ud83d\udf2a", "5"],
        ["\ud83d\udf61", "f"],
        ["\ud83d\udf62", "W"],
        ["\ud83d\udf63", "U"],
        ["\ud83d\udf67", "V"],
        ["\ud83d\udf68", "T"],
        ["\ud83d\udf6a", "V"],
        ["\ud83d\udf6b", "MB"],
        ["\ud83d\udf6c", "VB"],
        ["\ud83d\udf72", "3B"],
        ["\ud83d\udf73", "3B"],
        ["\ud83d\udcaf", "100"],
        ["\ud83d\udd19", "BACK"],
        ["\ud83d\udd1a", "END"],
        ["\ud83d\udd1b", "ON!"],
        ["\ud83d\udd1c", "SOON"],
        ["\ud83d\udd1d", "TOP"],
        ["\ud83d\udd1e", "18"],
        ["\ud83d\udd24", "abc"],
        ["\ud83d\udd20", "ABCD"],
        ["\ud83d\udd21", "abcd"],
        ["\ud83d\udd22", "1234"],
        ["\ud83d\udd23", "T&@%"],
        ["#\ufe0f\u20e3", "#"],
        ["*\ufe0f\u20e3", "*"],
        ["0\ufe0f\u20e3", "0"],
        ["1\ufe0f\u20e3", "1"],
        ["2\ufe0f\u20e3", "2"],
        ["3\ufe0f\u20e3", "3"],
        ["4\ufe0f\u20e3", "4"],
        ["5\ufe0f\u20e3", "5"],
        ["6\ufe0f\u20e3", "6"],
        ["7\ufe0f\u20e3", "7"],
        ["8\ufe0f\u20e3", "8"],
        ["9\ufe0f\u20e3", "9"],
        ["\ud83d\udd1f", "10"],
        ["\ud83c\udd70\ufe0f", "A"],
        ["\ud83c\udd71\ufe0f", "B"],
        ["\ud83c\udd8e", "AB"],
        ["\ud83c\udd91", "CL"],
        ["\ud83c\udd7e\ufe0f", "O"],
        ["\ud83c\udd7f", "P"],
        ["\ud83c\udd98", "SOS"],
        ["\ud83c\udd72", "C"],
        ["\ud83c\udd73", "D"],
        ["\ud83c\udd74", "E"],
        ["\ud83c\udd75", "F"],
        ["\ud83c\udd76", "G"],
        ["\ud83c\udd77", "H"],
        ["\ud83c\udd78", "I"],
        ["\ud83c\udd79", "J"],
        ["\ud83c\udd7a", "K"],
        ["\ud83c\udd7b", "L"],
        ["\ud83c\udd7c", "M"],
        ["\ud83c\udd7d", "N"],
        ["\ud83c\udd80", "Q"],
        ["\ud83c\udd81", "R"],
        ["\ud83c\udd82", "S"],
        ["\ud83c\udd83", "T"],
        ["\ud83c\udd84", "U"],
        ["\ud83c\udd85", "V"],
        ["\ud83c\udd86", "W"],
        ["\ud83c\udd87", "X"],
        ["\ud83c\udd88", "Y"],
        ["\ud83c\udd89", "Z"],
      ];
      function d(e, t) {
        if ("string" !== typeof e)
          throw new TypeError(`Expected a string, got \`${typeof e}\``);
        t = { customReplacements: [], ...t };
        const n = new Map([...p, ...t.customReplacements]);
        return (
          (e = ((e, t) => {
            for (const [n, r] of t) e = e.replace(new RegExp(u(n), "g"), r);
            return e;
          })((e = e.normalize()), n)),
          (e = e
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .normalize())
        );
      }
      var h = [
        ["&", " and "],
        ["\ud83e\udd84", " unicorn "],
        ["\u2665", " love "],
      ];
      function f(e, t) {
        if ("string" !== typeof e)
          throw new TypeError(`Expected a string, got \`${typeof e}\``);
        const n =
            (t = {
              separator: "-",
              lowercase: !0,
              decamelize: !0,
              customReplacements: [],
              preserveLeadingUnderscore: !1,
              preserveTrailingDash: !1,
              preserveCharacters: [],
              ...t,
            }).preserveLeadingUnderscore && e.startsWith("_"),
          r = t.preserveTrailingDash && e.endsWith("-");
        (e = d(e, {
          customReplacements: new Map([...h, ...t.customReplacements]),
        })),
          t.decamelize &&
            (e = ((e) =>
              e
                .replace(/([A-Z]{2,})(\d+)/g, "$1 $2")
                .replace(/([a-z\d]+)([A-Z]{2,})/g, "$1 $2")
                .replace(/([a-z\d])([A-Z])/g, "$1 $2")
                .replace(/([A-Z]+)([A-Z][a-rt-z\d]+)/g, "$1 $2"))(e));
        const i = ((e) => {
          let t = "a-z\\d";
          if (
            ((t += e.lowercase ? "" : "A-Z"), e.preserveCharacters.length > 0)
          )
            for (const n of e.preserveCharacters) {
              if (n === e.separator)
                throw new Error(
                  `The separator character \`${e.separator}\` cannot be included in preserved characters: ${e.preserveCharacters}`
                );
              t += c(n);
            }
          return new RegExp(`[^${t}]+`, "g");
        })(t);
        return (
          t.lowercase && (e = e.toLowerCase()),
          (e = (e = (e = e.replace(
            /([a-zA-Z\d]+)'([ts])(\s|$)/g,
            "$1$2$3"
          )).replace(i, t.separator)).replace(/\\/g, "")),
          t.separator &&
            (e = ((e, t) => {
              const n = c(t);
              return e
                .replace(new RegExp(`${n}{2,}`, "g"), t)
                .replace(new RegExp(`^${n}|${n}$`, "g"), "");
            })(e, t.separator)),
          n && (e = `_${e}`),
          r && (e = `${e}-`),
          e
        );
      }
      var m = n(616711),
        g = n(551579);
      const y = Math.pow(2, 16);
      function k(e) {
        return 65535 & e;
      }
      class b {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class v {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && v.empty))
            return v.empty;
        }
        recover(e) {
          let t = 0,
            n = k(e);
          if (!this.inverted)
            for (let r = 0; r < n; r++)
              t += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / y;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            i = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
          for (let s = 0; s < this.ranges.length; s += 3) {
            let a = this.ranges[s] - (this.inverted ? r : 0);
            if (a > e) break;
            let l = this.ranges[s + i],
              c = this.ranges[s + o],
              u = a + l;
            if (e <= u) {
              let i =
                a + r + ((l ? (e == a ? -1 : e == u ? 1 : t) : t) < 0 ? 0 : c);
              if (n) return i;
              let o = e == (t < 0 ? a : u) ? null : s / 3 + (e - a) * y,
                p = e == a ? 2 : e == u ? 1 : 4;
              return (t < 0 ? e != a : e != u) && (p |= 8), new b(i, p, o);
            }
            r += c - l;
          }
          return n ? e + r : new b(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = k(t),
            i = this.inverted ? 2 : 1,
            o = this.inverted ? 1 : 2;
          for (let s = 0; s < this.ranges.length; s += 3) {
            let t = this.ranges[s] - (this.inverted ? n : 0);
            if (t > e) break;
            let a = this.ranges[s + i];
            if (e <= t + a && s == 3 * r) return !0;
            n += this.ranges[s + o] - a;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
              s = o - (this.inverted ? i : 0),
              a = o + (this.inverted ? 0 : i),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + l, a, a + c), (i += c - l);
          }
        }
        invert() {
          return new v(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? v.empty : new v(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      v.empty = new v([]);
      const w = Object.create(null);
      class S {
        getMap() {
          return v.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = w[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in w)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (w[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class x {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new x(e, null);
        }
        static fail(e) {
          return new x(null, e);
        }
        static fromReplace(e, t, n, r) {
          try {
            return x.ok(e.replace(t, n, r));
          } catch (i) {
            if (i instanceof s.e4) return x.fail(i.message);
            throw i;
          }
        }
      }
      function E(e, t, n) {
        let r = [];
        for (let i = 0; i < e.childCount; i++) {
          let o = e.child(i);
          o.content.size && (o = o.copy(E(o.content, t, o))),
            o.isInline && (o = t(o, n, i)),
            r.push(o);
        }
        return s.HY.fromArray(r);
      }
      class N extends S {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            r = n.node(n.sharedDepth(this.to)),
            i = new s.p2(
              E(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                r
              ),
              t.openStart,
              t.openEnd
            );
          return x.fromReplace(e, this.from, this.to, i);
        }
        invert() {
          return new T(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new N(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof N &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new N(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new N(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      S.jsonID("addMark", N);
      class T extends S {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new s.p2(
              E(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return x.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new N(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new T(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof T &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new T(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new T(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      S.jsonID("removeMark", T);
      class A extends S {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return x.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return x.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new s.p2(s.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new A(this.pos, t.marks[n]);
              return new A(this.pos, this.mark);
            }
          }
          return new I(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new A(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new A(t.pos, e.markFromJSON(t.mark));
        }
      }
      S.jsonID("addNodeMark", A);
      class I extends S {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return x.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return x.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new s.p2(s.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new A(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new I(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON"
            );
          return new I(t.pos, e.markFromJSON(t.mark));
        }
      }
      S.jsonID("removeNodeMark", I);
      class C extends S {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && R(e, this.from, this.to)
            ? x.fail("Structure replace would overwrite content")
            : x.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new v([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new C(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to)
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new C(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof C) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? s.p2.empty
                  : new s.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd
                    );
              return new C(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? s.p2.empty
                : new s.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd
                  );
            return new C(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new C(t.from, t.to, s.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      S.jsonID("replace", C);
      class O extends S {
        constructor(e, t, n, r, i, o, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = o),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (R(e, this.from, this.gapFrom) || R(e, this.gapTo, this.to))
          )
            return x.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return x.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? x.fromReplace(e, this.from, this.to, n)
            : x.fail("Content does not fit in gap");
        }
        getMap() {
          return new v([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new O(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            i = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos
            ? null
            : new O(
                t.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON"
            );
          return new O(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            s.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure
          );
        }
      }
      function R(e, t, n) {
        let r = e.resolve(t),
          i = n - t,
          o = r.depth;
        for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
          o--, i--;
        if (i > 0) {
          let e = r.node(o).maybeChild(r.indexAfter(o));
          for (; i > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), i--;
          }
        }
        return !1;
      }
      function M(e, t, n) {
        return (
          (0 == t || e.canReplace(t, e.childCount)) &&
          (n == e.childCount || e.canReplace(0, n))
        );
      }
      function L(e, t) {
        return !(!e || !t || e.isLeaf || !e.canAppend(t));
      }
      S.jsonID("replaceAround", O);
      class F extends S {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return x.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let i in t.attrs) n[i] = t.attrs[i];
          n[this.attr] = this.value;
          let r = t.type.create(n, null, t.marks);
          return x.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new s.p2(s.HY.from(r), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return v.empty;
        }
        invert(e) {
          return new F(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new F(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new F(t.pos, t.attr, t.value);
        }
      }
      S.jsonID("attr", F);
      let _ = class extends Error {};
      (_ = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((_.prototype = Object.create(Error.prototype)).constructor = _),
        (_.prototype.name = "TransformError");
      function D(e) {
        return function (t, n) {
          let { $from: r, $to: i } = t.selection,
            o = r.blockRange(
              i,
              (t) => t.childCount > 0 && t.firstChild.type == e
            );
          return (
            !!o &&
            (!n ||
              (r.node(o.depth - 1).type == e
                ? (function (e, t, n, r) {
                    let i = e.tr,
                      o = r.end,
                      a = r.$to.end(r.depth);
                    o < a &&
                      (i.step(
                        new O(
                          o - 1,
                          a,
                          o,
                          a,
                          new s.p2(
                            s.HY.from(n.create(null, r.parent.copy())),
                            1,
                            0
                          ),
                          1,
                          !0
                        )
                      ),
                      (r = new s.Ts(
                        i.doc.resolve(r.$from.pos),
                        i.doc.resolve(a),
                        r.depth
                      )));
                    const l = (function (e) {
                      let t = e.parent.content.cutByIndex(
                        e.startIndex,
                        e.endIndex
                      );
                      for (let n = e.depth; ; --n) {
                        let r = e.$from.node(n),
                          i = e.$from.index(n),
                          o = e.$to.indexAfter(n);
                        if (n < e.depth && r.canReplace(i, o, t)) return n;
                        if (0 == n || r.type.spec.isolating || !M(r, i, o))
                          break;
                      }
                      return null;
                    })(r);
                    if (null == l) return !1;
                    i.lift(r, l);
                    let c = i.mapping.map(o, -1) - 1;
                    (function (e, t) {
                      let n = e.resolve(t),
                        r = n.index();
                      return (
                        L(n.nodeBefore, n.nodeAfter) &&
                        n.parent.canReplace(r, r + 1)
                      );
                    })(i.doc, c) && i.join(c);
                    return t(i.scrollIntoView()), !0;
                  })(t, n, e, o)
                : (function (e, t, n) {
                    let r = e.tr,
                      i = n.parent;
                    for (
                      let s = n.end, f = n.endIndex - 1, m = n.startIndex;
                      f > m;
                      f--
                    )
                      (s -= i.child(f).nodeSize), r.delete(s - 1, s + 1);
                    let o = r.doc.resolve(n.start),
                      a = o.nodeAfter;
                    if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
                      return !1;
                    let l = 0 == n.startIndex,
                      c = n.endIndex == i.childCount,
                      u = o.node(-1),
                      p = o.index(-1);
                    if (
                      !u.canReplace(
                        p + (l ? 0 : 1),
                        p + 1,
                        a.content.append(c ? s.HY.empty : s.HY.from(i))
                      )
                    )
                      return !1;
                    let d = o.pos,
                      h = d + a.nodeSize;
                    return (
                      r.step(
                        new O(
                          d - (l ? 1 : 0),
                          h + (c ? 1 : 0),
                          d + 1,
                          h - 1,
                          new s.p2(
                            (l
                              ? s.HY.empty
                              : s.HY.from(i.copy(s.HY.empty))
                            ).append(
                              c ? s.HY.empty : s.HY.from(i.copy(s.HY.empty))
                            ),
                            l ? 0 : 1,
                            c ? 0 : 1
                          ),
                          l ? 0 : 1
                        )
                      ),
                      t(r.scrollIntoView()),
                      !0
                    );
                  })(t, n, o)))
          );
        };
      }
      var P = n(166180),
        z = n(176905),
        B = n(39892);
      function $(e) {
        return String(e || "").toUpperCase();
      }
      var j = n(291325);
      function U() {
        return function (e) {
          const t = (function (e) {
            const t = new Map();
            if (!e || !e.type)
              throw new Error("mdast-util-definitions expected node");
            return (
              (0, B.Vn)(e, "definition", function (e) {
                const n = $(e.identifier);
                n && !t.get(n) && t.set(n, e);
              }),
              function (e) {
                const n = $(e);
                return t.get(n);
              }
            );
          })(e);
          (0, B.Vn)(e, function (e, n, r) {
            if (
              "definition" === e.type &&
              void 0 !== r &&
              "number" === typeof n
            )
              return r.children.splice(n, 1), [j.AM, n];
            if ("imageReference" === e.type || "linkReference" === e.type) {
              const i = t(e.identifier);
              if (i && r && "number" === typeof n)
                return (
                  (r.children[n] =
                    "imageReference" === e.type
                      ? {
                          type: "image",
                          url: i.url,
                          title: i.title,
                          alt: e.alt,
                        }
                      : {
                          type: "link",
                          url: i.url,
                          title: i.title,
                          children: e.children,
                        }),
                  [j.AM, n]
                );
            }
          });
        };
      }
      const H = (e, t) => {
          var n;
          if (
            !(
              t.childCount >= 1 &&
              "hardbreak" === (null == (n = t.lastChild) ? void 0 : n.type.name)
            )
          )
            return void e.next(t.content);
          const r = [];
          t.content.forEach((e, n, i) => {
            i !== t.childCount - 1 && r.push(e);
          }),
            e.next(s.HY.fromArray(r));
        },
        J = (e, t) => (
          Object.assign(e, {
            meta: { package: "@milkdown/preset-commonmark", ...t },
          }),
          e
        ),
        W = (0, r.we)("emphasis");
      J(W, { displayName: "Attr<emphasis>", group: "Emphasis" });
      const G = (0, r.c8)("emphasis", (e) => ({
        attrs: { marker: { default: e.get(i.$D).emphasis || "*" } },
        parseDOM: [
          { tag: "i" },
          { tag: "em" },
          { style: "font-style", getAttrs: (e) => "italic" === e },
        ],
        toDOM: (t) => ["em", e.get(W.key)(t)],
        parseMarkdown: {
          match: (e) => "emphasis" === e.type,
          runner: (e, t, n) => {
            e.openMark(n, { marker: t.marker }),
              e.next(t.children),
              e.closeMark(n);
          },
        },
        toMarkdown: {
          match: (e) => "emphasis" === e.type.name,
          runner: (e, t) => {
            e.withMark(t, "emphasis", void 0, { marker: t.attrs.marker });
          },
        },
      }));
      J(G.mark, { displayName: "MarkSchema<emphasis>", group: "Emphasis" }),
        J(G.ctx, { displayName: "MarkSchemaCtx<emphasis>", group: "Emphasis" });
      const V = (0, r.r1)("ToggleEmphasis", (e) => () => (0, o.w9)(G.type(e)));
      J(V, {
        displayName: "Command<toggleEmphasisCommand>",
        group: "Emphasis",
      });
      const Y = (0, r.Gv)("emphasisKeymap", {
        ToggleEmphasis: {
          shortcuts: "Mod-i",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(V.key);
          },
        },
      });
      J(Y.ctx, { displayName: "KeymapCtx<emphasis>", group: "Emphasis" }),
        J(Y.shortcuts, { displayName: "Keymap<emphasis>", group: "Emphasis" });
      const q = (0, r.we)("strong");
      J(q, { displayName: "Attr<strong>", group: "Strong" });
      const Z = (0, r.c8)("strong", (e) => ({
        attrs: { marker: { default: e.get(i.$D).strong || "*" } },
        parseDOM: [
          { tag: "b" },
          { tag: "strong" },
          { style: "font-style", getAttrs: (e) => "bold" === e },
        ],
        toDOM: (t) => ["strong", e.get(q.key)(t)],
        parseMarkdown: {
          match: (e) => "strong" === e.type,
          runner: (e, t, n) => {
            e.openMark(n, { marker: t.marker }),
              e.next(t.children),
              e.closeMark(n);
          },
        },
        toMarkdown: {
          match: (e) => "strong" === e.type.name,
          runner: (e, t) => {
            e.withMark(t, "strong", void 0, { marker: t.attrs.marker });
          },
        },
      }));
      J(Z.mark, { displayName: "MarkSchema<strong>", group: "Strong" }),
        J(Z.ctx, { displayName: "MarkSchemaCtx<strong>", group: "Strong" });
      const K = (0, r.r1)("ToggleStrong", (e) => () => (0, o.w9)(Z.type(e)));
      J(K, { displayName: "Command<toggleStrongCommand>", group: "Strong" });
      const X = (0, r.Gv)("strongKeymap", {
        ToggleBold: {
          shortcuts: ["Mod-b"],
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(K.key);
          },
        },
      });
      J(X.ctx, { displayName: "KeymapCtx<strong>", group: "Strong" }),
        J(X.shortcuts, { displayName: "Keymap<strong>", group: "Strong" });
      const Q = (0, r.we)("inlineCode");
      J(Q, { displayName: "Attr<inlineCode>", group: "InlineCode" });
      const ee = (0, r.c8)("inlineCode", (e) => ({
        priority: 100,
        code: !0,
        inclusive: !1,
        parseDOM: [{ tag: "code" }],
        toDOM: (t) => ["code", e.get(Q.key)(t)],
        parseMarkdown: {
          match: (e) => "inlineCode" === e.type,
          runner: (e, t, n) => {
            e.openMark(n), e.addText(t.value), e.closeMark(n);
          },
        },
        toMarkdown: {
          match: (e) => "inlineCode" === e.type.name,
          runner: (e, t, n) => {
            e.withMark(t, "inlineCode", n.text || "");
          },
        },
      }));
      J(ee.mark, {
        displayName: "MarkSchema<inlineCode>",
        group: "InlineCode",
      }),
        J(ee.ctx, {
          displayName: "MarkSchemaCtx<inlineCode>",
          group: "InlineCode",
        });
      const te = (0, r.r1)("ToggleInlineCode", (e) => () => (t, n) => {
        const { selection: r, tr: i } = t;
        if (r.empty) return !1;
        const { from: o, to: s } = r;
        return t.doc.rangeHasMark(o, s, ee.type(e))
          ? (null == n || n(i.removeMark(o, s, ee.type(e))), !0)
          : (Object.keys(t.schema.marks)
              .filter((e) => e !== ee.type.name)
              .map((e) => t.schema.marks[e])
              .forEach((e) => {
                i.removeMark(o, s, e);
              }),
            null == n || n(i.addMark(o, s, ee.type(e).create())),
            !0);
      });
      J(te, {
        displayName: "Command<toggleInlineCodeCommand>",
        group: "InlineCode",
      });
      const ne = (0, r.Gv)("inlineCodeKeymap", {
        ToggleInlineCode: {
          shortcuts: "Mod-e",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(te.key);
          },
        },
      });
      J(ne.ctx, { displayName: "KeymapCtx<inlineCode>", group: "InlineCode" }),
        J(ne.shortcuts, {
          displayName: "Keymap<inlineCode>",
          group: "InlineCode",
        });
      const re = (0, r.we)("link");
      J(re, { displayName: "Attr<link>", group: "Link" });
      const ie = (0, r.c8)("link", (e) => ({
        attrs: { href: {}, title: { default: null } },
        parseDOM: [
          {
            tag: "a[href]",
            getAttrs: (e) => {
              if (!(e instanceof HTMLElement)) throw (0, a.GZ)(e);
              return {
                href: e.getAttribute("href"),
                title: e.getAttribute("title"),
              };
            },
          },
        ],
        toDOM: (t) => ["a", { ...e.get(re.key)(t), ...t.attrs }],
        parseMarkdown: {
          match: (e) => "link" === e.type,
          runner: (e, t, n) => {
            const r = t.url,
              i = t.title;
            e.openMark(n, { href: r, title: i }),
              e.next(t.children),
              e.closeMark(n);
          },
        },
        toMarkdown: {
          match: (e) => "link" === e.type.name,
          runner: (e, t) => {
            e.withMark(t, "link", void 0, {
              title: t.attrs.title,
              url: t.attrs.href,
            });
          },
        },
      }));
      J(ie.mark, { displayName: "MarkSchema<link>", group: "Link" });
      const oe = (0, r.r1)(
        "ToggleLink",
        (e) =>
          (t = {}) =>
            (0, o.w9)(ie.type(e), t)
      );
      J(oe, { displayName: "Command<toggleLinkCommand>", group: "Link" });
      const se = (0, r.r1)("UpdateLink", (e) => (t = {}) => (n, r) => {
        if (!r) return !1;
        let i,
          o = -1;
        const { selection: s } = n,
          { from: a, to: l } = s;
        if (
          (n.doc.nodesBetween(a, a === l ? l + 1 : l, (t, n) => {
            if (ie.type(e).isInSet(t.marks)) return (i = t), (o = n), !1;
          }),
          !i)
        )
          return !1;
        const c = i.marks.find(({ type: t }) => t === ie.type(e));
        if (!c) return !1;
        const u = o,
          p = o + i.nodeSize,
          { tr: d } = n,
          h = ie.type(e).create({ ...c.attrs, ...t });
        return (
          !!h &&
          (r(
            d
              .removeMark(u, p, c)
              .addMark(u, p, h)
              .setSelection(new m.Bs(d.selection.$anchor))
              .scrollIntoView()
          ),
          !0)
        );
      });
      J(se, { displayName: "Command<updateLinkCommand>", group: "Link" });
      const ae = (0, r.qT)("doc", () => ({
        content: "block+",
        parseMarkdown: {
          match: ({ type: e }) => "root" === e,
          runner: (e, t, n) => {
            e.injectRoot(t, n);
          },
        },
        toMarkdown: {
          match: (e) => "doc" === e.type.name,
          runner: (e, t) => {
            e.openNode("root"), e.next(t.content);
          },
        },
      }));
      J(ae, { displayName: "NodeSchema<doc>", group: "Doc" });
      const le = (0, r.jO)("paragraph");
      J(le, { displayName: "Attr<paragraph>", group: "Paragraph" });
      const ce = (0, r.yU)("paragraph", (e) => ({
        content: "inline*",
        group: "block",
        parseDOM: [{ tag: "p" }],
        toDOM: (t) => ["p", e.get(le.key)(t), 0],
        parseMarkdown: {
          match: (e) => "paragraph" === e.type,
          runner: (e, t, n) => {
            e.openNode(n),
              t.children ? e.next(t.children) : e.addText(t.value || ""),
              e.closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "paragraph" === e.type.name,
          runner: (e, t) => {
            e.openNode("paragraph"), H(e, t), e.closeNode();
          },
        },
      }));
      J(ce.node, { displayName: "NodeSchema<paragraph>", group: "Paragraph" }),
        J(ce.ctx, {
          displayName: "NodeSchemaCtx<paragraph>",
          group: "Paragraph",
        });
      const ue = (0, r.r1)("TurnIntoText", (e) => () => (0, o.uJ)(ce.type(e)));
      J(ue, {
        displayName: "Command<turnIntoTextCommand>",
        group: "Paragraph",
      });
      const pe = (0, r.Gv)("paragraphKeymap", {
        TurnIntoText: {
          shortcuts: "Mod-Alt-0",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ue.key);
          },
        },
      });
      J(pe.ctx, { displayName: "KeymapCtx<paragraph>", group: "Paragraph" }),
        J(pe.shortcuts, {
          displayName: "Keymap<paragraph>",
          group: "Paragraph",
        });
      const de = Array(6)
          .fill(0)
          .map((e, t) => t + 1),
        he = (0, r.Tu)((e) => f(e.textContent), "headingIdGenerator");
      J(he, { displayName: "Ctx<HeadingIdGenerator>", group: "Heading" });
      const fe = (0, r.jO)("heading");
      J(fe, { displayName: "Attr<heading>", group: "Heading" });
      const me = (0, r.yU)("heading", (e) => {
        const t = e.get(he.key);
        return {
          content: "inline*",
          group: "block",
          defining: !0,
          attrs: { id: { default: "" }, level: { default: 1 } },
          parseDOM: de.map((e) => ({
            tag: `h${e}`,
            getAttrs: (t) => {
              if (!(t instanceof HTMLElement)) throw (0, a.GZ)(t);
              return { level: e, id: t.id };
            },
          })),
          toDOM: (n) => [
            `h${n.attrs.level}`,
            { ...e.get(fe.key)(n), id: n.attrs.id || t(n) },
            0,
          ],
          parseMarkdown: {
            match: ({ type: e }) => "heading" === e,
            runner: (e, t, n) => {
              const r = t.depth;
              e.openNode(n, { level: r }), e.next(t.children), e.closeNode();
            },
          },
          toMarkdown: {
            match: (e) => "heading" === e.type.name,
            runner: (e, t) => {
              e.openNode("heading", void 0, { depth: t.attrs.level }),
                H(e, t),
                e.closeNode();
            },
          },
        };
      });
      J(me.node, { displayName: "NodeSchema<heading>", group: "Heading" }),
        J(me.ctx, { displayName: "NodeSchemaCtx<heading>", group: "Heading" });
      const ge = (0, r.Xt)((e) =>
        (0, l.zK)(/^(?<hashes>#+)\s$/, me.type(e), (t) => {
          var n, r;
          const o =
              (null == (r = null == (n = t.groups) ? void 0 : n.hashes)
                ? void 0
                : r.length) || 0,
            s = e.get(i.U7),
            { $from: a } = s.state.selection,
            l = a.node();
          if ("heading" === l.type.name) {
            let e = Number(l.attrs.level) + Number(o);
            return e > 6 && (e = 6), { level: e };
          }
          return { level: o };
        })
      );
      J(ge, {
        displayName: "InputRule<wrapInHeadingInputRule>",
        group: "Heading",
      });
      const ye = (0, r.r1)(
        "WrapInHeading",
        (e) => (t) => (
          t ?? (t = 1),
          t < 1 ? (0, o.uJ)(ce.type(e)) : (0, o.uJ)(me.type(e), { level: t })
        )
      );
      J(ye, { displayName: "Command<wrapInHeadingCommand>", group: "Heading" });
      const ke = (0, r.r1)("DowngradeHeading", (e) => () => (t, n, r) => {
        const { $from: i } = t.selection,
          s = i.node();
        if (s.type !== me.type(e) || !t.selection.empty || 0 !== i.parentOffset)
          return !1;
        const a = s.attrs.level - 1;
        return a
          ? (null == n ||
              n(
                t.tr.setNodeMarkup(t.selection.$from.before(), void 0, {
                  ...s.attrs,
                  level: a,
                })
              ),
            !0)
          : (0, o.uJ)(ce.type(e))(t, n, r);
      });
      J(ke, {
        displayName: "Command<downgradeHeadingCommand>",
        group: "Heading",
      });
      const be = (0, r.Gv)("headingKeymap", {
        TurnIntoH1: {
          shortcuts: "Mod-Alt-1",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ye.key, 1);
          },
        },
        TurnIntoH2: {
          shortcuts: "Mod-Alt-2",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ye.key, 2);
          },
        },
        TurnIntoH3: {
          shortcuts: "Mod-Alt-3",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ye.key, 3);
          },
        },
        TurnIntoH4: {
          shortcuts: "Mod-Alt-4",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ye.key, 4);
          },
        },
        TurnIntoH5: {
          shortcuts: "Mod-Alt-5",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ye.key, 5);
          },
        },
        TurnIntoH6: {
          shortcuts: "Mod-Alt-6",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ye.key, 6);
          },
        },
        DowngradeHeading: {
          shortcuts: ["Delete", "Backspace"],
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(ke.key);
          },
        },
      });
      J(be.ctx, { displayName: "KeymapCtx<heading>", group: "Heading" }),
        J(be.shortcuts, { displayName: "Keymap<heading>", group: "Heading" });
      const ve = (0, r.jO)("blockquote");
      J(ve, { displayName: "Attr<blockquote>", group: "Blockquote" });
      const we = (0, r.yU)("blockquote", (e) => ({
        content: "block+",
        group: "block",
        defining: !0,
        parseDOM: [{ tag: "blockquote" }],
        toDOM: (t) => ["blockquote", e.get(ve.key)(t), 0],
        parseMarkdown: {
          match: ({ type: e }) => "blockquote" === e,
          runner: (e, t, n) => {
            e.openNode(n).next(t.children).closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "blockquote" === e.type.name,
          runner: (e, t) => {
            e.openNode("blockquote").next(t.content).closeNode();
          },
        },
      }));
      J(we.node, {
        displayName: "NodeSchema<blockquote>",
        group: "Blockquote",
      }),
        J(we.ctx, {
          displayName: "NodeSchemaCtx<blockquote>",
          group: "Blockquote",
        });
      const Se = (0, r.Xt)((e) => (0, l.S0)(/^\s*>\s$/, we.type(e)));
      J(Se, {
        displayName: "InputRule<wrapInBlockquoteInputRule>",
        group: "Blockquote",
      });
      const xe = (0, r.r1)(
        "WrapInBlockquote",
        (e) => () => (0, o.ym)(we.type(e))
      );
      J(xe, {
        displayName: "Command<wrapInBlockquoteCommand>",
        group: "Blockquote",
      });
      const Ee = (0, r.Gv)("blockquoteKeymap", {
        WrapInBlockquote: {
          shortcuts: "Mod-Shift-b",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(xe.key);
          },
        },
      });
      J(Ee.ctx, { displayName: "KeymapCtx<blockquote>", group: "Blockquote" }),
        J(Ee.shortcuts, {
          displayName: "Keymap<blockquote>",
          group: "Blockquote",
        });
      const Ne = (0, r.jO)("codeBlock", () => ({ pre: {}, code: {} }));
      J(Ne, { displayName: "Attr<codeBlock>", group: "CodeBlock" });
      const Te = (0, r.yU)("code_block", (e) => ({
        content: "text*",
        group: "block",
        marks: "",
        defining: !0,
        code: !0,
        attrs: { language: { default: "" } },
        parseDOM: [
          {
            tag: "pre",
            preserveWhitespace: "full",
            getAttrs: (e) => {
              if (!(e instanceof HTMLElement)) throw (0, a.GZ)(e);
              return { language: e.dataset.language };
            },
          },
        ],
        toDOM: (t) => {
          const n = e.get(Ne.key)(t);
          return [
            "pre",
            { ...n.pre, "data-language": t.attrs.language },
            ["code", n.code, 0],
          ];
        },
        parseMarkdown: {
          match: ({ type: e }) => "code" === e,
          runner: (e, t, n) => {
            const r = t.lang,
              i = t.value;
            e.openNode(n, { language: r }), i && e.addText(i), e.closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "code_block" === e.type.name,
          runner: (e, t) => {
            var n;
            e.addNode(
              "code",
              void 0,
              (null == (n = t.content.firstChild) ? void 0 : n.text) || "",
              { lang: t.attrs.language }
            );
          },
        },
      }));
      J(Te.node, { displayName: "NodeSchema<codeBlock>", group: "CodeBlock" }),
        J(Te.ctx, {
          displayName: "NodeSchemaCtx<codeBlock>",
          group: "CodeBlock",
        });
      const Ae = (0, r.Xt)((e) =>
        (0, l.zK)(/^```(?<language>[a-z]*)?[\s\n]$/, Te.type(e), (e) => {
          var t;
          return {
            language: (null == (t = e.groups) ? void 0 : t.language) ?? "",
          };
        })
      );
      J(Ae, {
        displayName: "InputRule<createCodeBlockInputRule>",
        group: "CodeBlock",
      });
      const Ie = (0, r.r1)(
        "CreateCodeBlock",
        (e) =>
          (t = "") =>
            (0, o.uJ)(Te.type(e), { language: t })
      );
      J(Ie, {
        displayName: "Command<createCodeBlockCommand>",
        group: "CodeBlock",
      });
      J(
        (0, r.r1)(
          "UpdateCodeBlockLanguage",
          () =>
            ({ pos: e, language: t } = { pos: -1, language: "" }) =>
            (n, r) =>
              e >= 0 &&
              (null == r || r(n.tr.setNodeAttribute(e, "language", t)), !0)
        ),
        {
          displayName: "Command<updateCodeBlockLanguageCommand>",
          group: "CodeBlock",
        }
      );
      const Ce = (0, r.Gv)("codeBlockKeymap", {
        CreateCodeBlock: {
          shortcuts: "Mod-Alt-c",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(Ie.key);
          },
        },
      });
      J(Ce.ctx, { displayName: "KeymapCtx<codeBlock>", group: "CodeBlock" }),
        J(Ce.shortcuts, {
          displayName: "Keymap<codeBlock>",
          group: "CodeBlock",
        });
      const Oe = (0, r.jO)("image");
      J(Oe, { displayName: "Attr<image>", group: "Image" });
      const Re = (0, r.yU)("image", (e) => ({
        inline: !0,
        group: "inline",
        selectable: !0,
        draggable: !0,
        marks: "",
        atom: !0,
        defining: !0,
        isolating: !0,
        attrs: {
          src: { default: "" },
          alt: { default: "" },
          title: { default: "" },
        },
        parseDOM: [
          {
            tag: "img[src]",
            getAttrs: (e) => {
              if (!(e instanceof HTMLElement)) throw (0, a.GZ)(e);
              return {
                src: e.getAttribute("src") || "",
                alt: e.getAttribute("alt") || "",
                title: e.getAttribute("title") || e.getAttribute("alt") || "",
              };
            },
          },
        ],
        toDOM: (t) => ["img", { ...e.get(Oe.key)(t), ...t.attrs }],
        parseMarkdown: {
          match: ({ type: e }) => "image" === e,
          runner: (e, t, n) => {
            const r = t.url,
              i = t.alt,
              o = t.title;
            e.addNode(n, { src: r, alt: i, title: o });
          },
        },
        toMarkdown: {
          match: (e) => "image" === e.type.name,
          runner: (e, t) => {
            e.addNode("image", void 0, void 0, {
              title: t.attrs.title,
              url: t.attrs.src,
              alt: t.attrs.alt,
            });
          },
        },
      }));
      J(Re.node, { displayName: "NodeSchema<image>", group: "Image" }),
        J(Re.ctx, { displayName: "NodeSchemaCtx<image>", group: "Image" });
      const Me = (0, r.r1)("InsertImage", (e) => (t = {}) => (n, r) => {
        if (!r) return !0;
        const { src: i = "", alt: o = "", title: s = "" } = t,
          a = Re.type(e).create({ src: i, alt: o, title: s });
        return a && r(n.tr.replaceSelectionWith(a).scrollIntoView()), !0;
      });
      J(Me, { displayName: "Command<insertImageCommand>", group: "Image" });
      const Le = (0, r.r1)("UpdateImage", (e) => (t = {}) => (n, r) => {
        const i = (0, g.a1)(n.selection, Re.type(e));
        if (!i) return !1;
        const { node: o, pos: s } = i,
          a = { ...o.attrs },
          { src: l, alt: c, title: u } = t;
        return (
          void 0 !== l && (a.src = l),
          void 0 !== c && (a.alt = c),
          void 0 !== u && (a.title = u),
          null == r || r(n.tr.setNodeMarkup(s, void 0, a).scrollIntoView()),
          !0
        );
      });
      J(Le, { displayName: "Command<updateImageCommand>", group: "Image" });
      J(
        (0, r.Xt)(
          (e) =>
            new l.VK(
              /!\[(?<alt>.*?)]\((?<filename>.*?)\s*(?="|\))"?(?<title>[^"]+)?"?\)/,
              (t, n, r, i) => {
                const [o, s, a = "", l] = n;
                return o
                  ? t.tr.replaceWith(
                      r,
                      i,
                      Re.type(e).create({ src: a, alt: s, title: l })
                    )
                  : null;
              }
            )
        ),
        { displayName: "InputRule<insertImageInputRule>", group: "Image" }
      );
      const Fe = (0, r.jO)("hardbreak", (e) => ({
        "data-is-inline": e.attrs.isInline,
      }));
      J(Fe, { displayName: "Attr<hardbreak>", group: "Hardbreak" });
      const _e = (0, r.yU)("hardbreak", (e) => ({
        inline: !0,
        group: "inline",
        attrs: { isInline: { default: !1 } },
        selectable: !1,
        parseDOM: [{ tag: "br" }],
        toDOM: (t) => ["br", e.get(Fe.key)(t)],
        parseMarkdown: {
          match: ({ type: e }) => "break" === e,
          runner: (e, t, n) => {
            var r;
            e.addNode(n, { isInline: !(null == (r = t.data) || !r.isInline) });
          },
        },
        leafText: () => "\n",
        toMarkdown: {
          match: (e) => "hardbreak" === e.type.name,
          runner: (e, t) => {
            t.attrs.isInline
              ? e.addNode("text", void 0, "\n")
              : e.addNode("break");
          },
        },
      }));
      J(_e.node, { displayName: "NodeSchema<hardbreak>", group: "Hardbreak" }),
        J(_e.ctx, {
          displayName: "NodeSchemaCtx<hardbreak>",
          group: "Hardbreak",
        });
      const De = (0, r.r1)("InsertHardbreak", (e) => () => (t, n) => {
        var r;
        const { selection: i, tr: o } = t;
        if (!(i instanceof m.Bs)) return !1;
        if (i.empty) {
          const e = i.$from.node();
          if (
            e.childCount > 0 &&
            "hardbreak" === (null == (r = e.lastChild) ? void 0 : r.type.name)
          )
            return (
              null == n ||
                n(
                  o
                    .replaceRangeWith(
                      i.to - 1,
                      i.to,
                      t.schema.node("paragraph")
                    )
                    .setSelection(m.Y1.near(o.doc.resolve(i.to)))
                    .scrollIntoView()
                ),
              !0
            );
        }
        return (
          null == n ||
            n(
              o
                .setMeta("hardbreak", !0)
                .replaceSelectionWith(_e.type(e).create())
                .scrollIntoView()
            ),
          !0
        );
      });
      J(De, {
        displayName: "Command<insertHardbreakCommand>",
        group: "Hardbreak",
      });
      const Pe = (0, r.Gv)("hardbreakKeymap", {
        InsertHardbreak: {
          shortcuts: "Shift-Enter",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(De.key);
          },
        },
      });
      J(Pe.ctx, { displayName: "KeymapCtx<hardbreak>", group: "Hardbreak" }),
        J(Pe.shortcuts, {
          displayName: "Keymap<hardbreak>",
          group: "Hardbreak",
        });
      const ze = (0, r.jO)("hr");
      J(ze, { displayName: "Attr<hr>", group: "Hr" });
      const Be = (0, r.yU)("hr", (e) => ({
        group: "block",
        parseDOM: [{ tag: "hr" }],
        toDOM: (t) => ["hr", e.get(ze.key)(t)],
        parseMarkdown: {
          match: ({ type: e }) => "thematicBreak" === e,
          runner: (e, t, n) => {
            e.addNode(n);
          },
        },
        toMarkdown: {
          match: (e) => "hr" === e.type.name,
          runner: (e) => {
            e.addNode("thematicBreak");
          },
        },
      }));
      J(Be.node, { displayName: "NodeSchema<hr>", group: "Hr" }),
        J(Be.ctx, { displayName: "NodeSchemaCtx<hr>", group: "Hr" });
      const $e = (0, r.Xt)(
        (e) =>
          new l.VK(/^(?:---|___\s|\*\*\*\s)$/, (t, n, r, i) => {
            const { tr: o } = t;
            return n[0] && o.replaceWith(r - 1, i, Be.type(e).create()), o;
          })
      );
      J($e, { displayName: "InputRule<insertHrInputRule>", group: "Hr" });
      const je = (0, r.r1)("InsertHr", (e) => () => (t, n) => {
        if (!n) return !0;
        const r = ce.node.type(e).create(),
          { tr: i, selection: o } = t,
          { from: s } = o,
          a = Be.type(e).create();
        if (!a) return !0;
        const l = i.replaceSelectionWith(a).insert(s, r),
          c = m.Y1.findFrom(l.doc.resolve(s), 1, !0);
        return c && n(l.setSelection(c).scrollIntoView()), !0;
      });
      J(je, { displayName: "Command<insertHrCommand>", group: "Hr" });
      const Ue = (0, r.jO)("bulletList");
      J(Ue, { displayName: "Attr<bulletList>", group: "BulletList" });
      const He = (0, r.yU)("bullet_list", (e) => ({
        content: "listItem+",
        group: "block",
        attrs: { spread: { default: !1 } },
        parseDOM: [
          {
            tag: "ul",
            getAttrs: (e) => {
              if (!(e instanceof HTMLElement)) throw (0, a.GZ)(e);
              return { spread: e.dataset.spread };
            },
          },
        ],
        toDOM: (t) => [
          "ul",
          { ...e.get(Ue.key)(t), "data-spread": t.attrs.spread },
          0,
        ],
        parseMarkdown: {
          match: ({ type: e, ordered: t }) => "list" === e && !t,
          runner: (e, t, n) => {
            const r = null != t.spread ? `${t.spread}` : "false";
            e.openNode(n, { spread: r }).next(t.children).closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "bullet_list" === e.type.name,
          runner: (e, t) => {
            e.openNode("list", void 0, {
              ordered: !1,
              spread: "true" === t.attrs.spread,
            })
              .next(t.content)
              .closeNode();
          },
        },
      }));
      J(He.node, {
        displayName: "NodeSchema<bulletList>",
        group: "BulletList",
      }),
        J(He.ctx, {
          displayName: "NodeSchemaCtx<bulletList>",
          group: "BulletList",
        });
      const Je = (0, r.Xt)((e) => (0, l.S0)(/^\s*([-+*])\s$/, He.type(e)));
      J(Je, {
        displayName: "InputRule<wrapInBulletListInputRule>",
        group: "BulletList",
      });
      const We = (0, r.r1)(
        "WrapInBulletList",
        (e) => () => (0, o.ym)(He.type(e))
      );
      J(We, {
        displayName: "Command<wrapInBulletListCommand>",
        group: "BulletList",
      });
      const Ge = (0, r.Gv)("bulletListKeymap", {
        WrapInBulletList: {
          shortcuts: "Mod-Alt-8",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(We.key);
          },
        },
      });
      J(Ge.ctx, {
        displayName: "KeymapCtx<bulletListKeymap>",
        group: "BulletList",
      }),
        J(Ge.shortcuts, {
          displayName: "Keymap<bulletListKeymap>",
          group: "BulletList",
        });
      const Ve = (0, r.jO)("orderedList");
      J(Ve, { displayName: "Attr<orderedList>", group: "OrderedList" });
      const Ye = (0, r.yU)("ordered_list", (e) => ({
        content: "listItem+",
        group: "block",
        attrs: { order: { default: 1 }, spread: { default: !1 } },
        parseDOM: [
          {
            tag: "ol",
            getAttrs: (e) => {
              if (!(e instanceof HTMLElement)) throw (0, a.GZ)(e);
              return {
                spread: e.dataset.spread,
                order: e.hasAttribute("start")
                  ? Number(e.getAttribute("start"))
                  : 1,
              };
            },
          },
        ],
        toDOM: (t) => [
          "ol",
          {
            ...e.get(Ve.key)(t),
            ...(1 === t.attrs.order ? {} : t.attrs.order),
            "data-spread": t.attrs.spread,
          },
          0,
        ],
        parseMarkdown: {
          match: ({ type: e, ordered: t }) => "list" === e && !!t,
          runner: (e, t, n) => {
            const r = null != t.spread ? `${t.spread}` : "true";
            e.openNode(n, { spread: r }).next(t.children).closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "ordered_list" === e.type.name,
          runner: (e, t) => {
            e.openNode("list", void 0, {
              ordered: !0,
              start: 1,
              spread: "true" === t.attrs.spread,
            }),
              e.next(t.content),
              e.closeNode();
          },
        },
      }));
      J(Ye.node, {
        displayName: "NodeSchema<orderedList>",
        group: "OrderedList",
      }),
        J(Ye.ctx, {
          displayName: "NodeSchemaCtx<orderedList>",
          group: "OrderedList",
        });
      const qe = (0, r.Xt)((e) =>
        (0, l.S0)(
          /^\s*(\d+)\.\s$/,
          Ye.type(e),
          (e) => ({ order: Number(e[1]) }),
          (e, t) => t.childCount + t.attrs.order === Number(e[1])
        )
      );
      J(qe, {
        displayName: "InputRule<wrapInOrderedListInputRule>",
        group: "OrderedList",
      });
      const Ze = (0, r.r1)(
        "WrapInOrderedList",
        (e) => () => (0, o.ym)(Ye.type(e))
      );
      J(Ze, {
        displayName: "Command<wrapInOrderedListCommand>",
        group: "OrderedList",
      });
      const Ke = (0, r.Gv)("orderedListKeymap", {
        WrapInOrderedList: {
          shortcuts: "Mod-Alt-7",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(Ze.key);
          },
        },
      });
      J(Ke.ctx, {
        displayName: "KeymapCtx<orderedList>",
        group: "OrderedList",
      }),
        J(Ke.shortcuts, {
          displayName: "Keymap<orderedList>",
          group: "OrderedList",
        });
      const Xe = (0, r.jO)("listItem");
      J(Xe, { displayName: "Attr<listItem>", group: "ListItem" });
      const Qe = (0, r.yU)("list_item", (e) => ({
        group: "listItem",
        content: "paragraph block*",
        attrs: {
          label: { default: "\u2022" },
          listType: { default: "bullet" },
          spread: { default: "true" },
        },
        defining: !0,
        parseDOM: [
          {
            tag: "li",
            getAttrs: (e) => {
              if (!(e instanceof HTMLElement)) throw (0, a.GZ)(e);
              return {
                label: e.dataset.label,
                listType: e.dataset["list-type"],
                spread: e.dataset.spread,
              };
            },
          },
        ],
        toDOM: (t) => [
          "li",
          {
            ...e.get(Xe.key)(t),
            "data-label": t.attrs.label,
            "data-list-type": t.attrs.listType,
            "data-spread": t.attrs.spread,
          },
          0,
        ],
        parseMarkdown: {
          match: ({ type: e }) => "listItem" === e,
          runner: (e, t, n) => {
            const r = null != t.label ? `${t.label}.` : "\u2022",
              i = null != t.label ? "ordered" : "bullet",
              o = null != t.spread ? `${t.spread}` : "true";
            e.openNode(n, { label: r, listType: i, spread: o }),
              e.next(t.children),
              e.closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "list_item" === e.type.name,
          runner: (e, t) => {
            e.openNode("listItem", void 0, {
              spread: "true" === t.attrs.spread,
            }),
              e.next(t.content),
              e.closeNode();
          },
        },
      }));
      J(Qe.node, { displayName: "NodeSchema<listItem>", group: "ListItem" }),
        J(Qe.ctx, {
          displayName: "NodeSchemaCtx<listItem>",
          group: "ListItem",
        });
      const et = (0, r.r1)("SinkListItem", (e) => () => {
        return (
          (t = Qe.type(e)),
          function (e, n) {
            let { $from: r, $to: i } = e.selection,
              o = r.blockRange(
                i,
                (e) => e.childCount > 0 && e.firstChild.type == t
              );
            if (!o) return !1;
            let a = o.startIndex;
            if (0 == a) return !1;
            let l = o.parent,
              c = l.child(a - 1);
            if (c.type != t) return !1;
            if (n) {
              let r = c.lastChild && c.lastChild.type == l.type,
                i = s.HY.from(r ? t.create() : null),
                a = new s.p2(
                  s.HY.from(t.create(null, s.HY.from(l.type.create(null, i)))),
                  r ? 3 : 1,
                  0
                ),
                u = o.start,
                p = o.end;
              n(
                e.tr
                  .step(new O(u - (r ? 3 : 1), p, u, p, a, 1, !0))
                  .scrollIntoView()
              );
            }
            return !0;
          }
        );
        var t;
      });
      J(et, { displayName: "Command<sinkListItemCommand>", group: "ListItem" });
      const tt = (0, r.r1)("SplitListItem", (e) => () => D(Qe.type(e)));
      J(tt, { displayName: "Command<liftListItemCommand>", group: "ListItem" });
      const nt = (0, r.r1)("SplitListItem", (e) => () => {
        return (
          (t = Qe.type(e)),
          function (e, r) {
            let { $from: i, $to: o, node: a } = e.selection;
            if ((a && a.isBlock) || i.depth < 2 || !i.sameParent(o)) return !1;
            let l = i.node(-1);
            if (l.type != t) return !1;
            if (
              0 == i.parent.content.size &&
              i.node(-1).childCount == i.indexAfter(-1)
            ) {
              if (
                3 == i.depth ||
                i.node(-3).type != t ||
                i.index(-2) != i.node(-2).childCount - 1
              )
                return !1;
              if (r) {
                let n = s.HY.empty,
                  o = i.index(-1) ? 1 : i.index(-2) ? 2 : 3;
                for (let e = i.depth - o; e >= i.depth - 3; e--)
                  n = s.HY.from(i.node(e).copy(n));
                let a =
                  i.indexAfter(-1) < i.node(-2).childCount
                    ? 1
                    : i.indexAfter(-2) < i.node(-3).childCount
                    ? 2
                    : 3;
                n = n.append(s.HY.from(t.createAndFill()));
                let l = i.before(i.depth - (o - 1)),
                  c = e.tr.replace(l, i.after(-a), new s.p2(n, 4 - o, 0)),
                  u = -1;
                c.doc.nodesBetween(l, c.doc.content.size, (e, t) => {
                  if (u > -1) return !1;
                  e.isTextblock && 0 == e.content.size && (u = t + 1);
                }),
                  u > -1 && c.setSelection(m.Y1.near(c.doc.resolve(u))),
                  r(c.scrollIntoView());
              }
              return !0;
            }
            let c = o.pos == i.end() ? l.contentMatchAt(0).defaultType : null,
              u = e.tr.delete(i.pos, o.pos),
              p = c ? [n ? { type: t, attrs: n } : null, { type: c }] : void 0;
            return (
              !!(function (e, t, n = 1, r) {
                let i = e.resolve(t),
                  o = i.depth - n,
                  s = (r && r[r.length - 1]) || i.parent;
                if (
                  o < 0 ||
                  i.parent.type.spec.isolating ||
                  !i.parent.canReplace(i.index(), i.parent.childCount) ||
                  !s.type.validContent(
                    i.parent.content.cutByIndex(i.index(), i.parent.childCount)
                  )
                )
                  return !1;
                for (let c = i.depth - 1, u = n - 2; c > o; c--, u--) {
                  let e = i.node(c),
                    t = i.index(c);
                  if (e.type.spec.isolating) return !1;
                  let n = e.content.cutByIndex(t, e.childCount),
                    o = r && r[u + 1];
                  o && (n = n.replaceChild(0, o.type.create(o.attrs)));
                  let s = (r && r[u]) || e;
                  if (
                    !e.canReplace(t + 1, e.childCount) ||
                    !s.type.validContent(n)
                  )
                    return !1;
                }
                let a = i.indexAfter(o),
                  l = r && r[0];
                return i
                  .node(o)
                  .canReplaceWith(a, a, l ? l.type : i.node(o + 1).type);
              })(u.doc, i.pos, 2, p) &&
              (r && r(u.split(i.pos, 2, p).scrollIntoView()), !0)
            );
          }
        );
        var t, n;
      });
      J(nt, {
        displayName: "Command<splitListItemCommand>",
        group: "ListItem",
      });
      const rt = (0, r.r1)(
        "LiftFirstListItem",
        (e) => () =>
          ((e) => (t, n, r) => {
            const { selection: i } = t;
            if (!(i instanceof m.Bs)) return !1;
            const { empty: o, $from: s } = i;
            if (!o || 0 !== s.parentOffset) return !1;
            const a = s.node(-1);
            return (
              !(
                a.type !== Qe.type(e) ||
                a.firstChild !== s.node() ||
                s.node(-2).childCount > 1
              ) && D(Qe.type(e))(t, n, r)
            );
          })(e)
      );
      J(rt, {
        displayName: "Command<liftFirstListItemCommand>",
        group: "ListItem",
      });
      const it = (0, r.Gv)("listItemKeymap", {
        NextListItem: {
          shortcuts: "Enter",
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(nt.key);
          },
        },
        SinkListItem: {
          shortcuts: ["Tab", "Mod-]"],
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(et.key);
          },
        },
        LiftListItem: {
          shortcuts: ["Shift-Tab", "Mod-["],
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(tt.key);
          },
        },
        LiftFirstListItem: {
          shortcuts: ["Backspace", "Delete"],
          command: (e) => {
            const t = e.get(i.Xo);
            return () => t.call(rt.key);
          },
        },
      });
      J(it.ctx, { displayName: "KeymapCtx<listItem>", group: "ListItem" }),
        J(it.shortcuts, { displayName: "Keymap<listItem>", group: "ListItem" });
      const ot = (0, r.qT)("text", () => ({
        group: "inline",
        parseMarkdown: {
          match: ({ type: e }) => "text" === e,
          runner: (e, t) => {
            e.addText(t.value);
          },
        },
        toMarkdown: {
          match: (e) => "text" === e.type.name,
          runner: (e, t) => {
            e.addNode("text", void 0, t.text);
          },
        },
      }));
      J(ot, { displayName: "NodeSchema<text>", group: "Text" });
      const st = (0, r.jO)("html");
      J(st, { displayName: "Attr<html>", group: "Html" });
      const at = (0, r.yU)("html", (e) => ({
        atom: !0,
        group: "inline",
        inline: !0,
        attrs: { value: { default: "" } },
        toDOM: (t) => {
          const n = document.createElement("span"),
            r = {
              ...e.get(st.key)(t),
              "data-value": t.attrs.value,
              "data-type": "html",
            };
          return (n.textContent = t.attrs.value), ["span", r, t.attrs.value];
        },
        parseDOM: [
          {
            tag: 'span[data-type="html"]',
            getAttrs: (e) => ({ value: e.dataset.value ?? "" }),
          },
        ],
        parseMarkdown: {
          match: ({ type: e }) => "html" === e,
          runner: (e, t, n) => {
            e.addNode(n, { value: t.value });
          },
        },
        toMarkdown: {
          match: (e) => "html" === e.type.name,
          runner: (e, t) => {
            e.addNode("html", void 0, t.attrs.value);
          },
        },
      }));
      J(at.node, { displayName: "NodeSchema<html>", group: "Html" }),
        J(at.ctx, { displayName: "NodeSchemaCtx<html>", group: "Html" });
      const lt = [
          ae,
          le,
          ce,
          he,
          fe,
          me,
          Fe,
          _e,
          ve,
          we,
          Ne,
          Te,
          ze,
          Be,
          Oe,
          Re,
          Ue,
          He,
          Ve,
          Ye,
          Xe,
          Qe,
          W,
          G,
          q,
          Z,
          Q,
          ee,
          re,
          ie,
          st,
          at,
          ot,
        ].flat(),
        ct = [Se, Je, qe, Ae, $e, ge].flat(),
        ut = [
          ue,
          xe,
          ye,
          ke,
          Ie,
          De,
          je,
          Me,
          Le,
          Ze,
          We,
          et,
          nt,
          tt,
          rt,
          V,
          te,
          K,
          oe,
          se,
        ],
        pt = [Ee, Ce, Pe, be, it, Ke, Ge, pe, Y, ne, X].flat(),
        dt = /\[([^\]]+)]\([^\s\]]+\)/,
        ht =
          /\[(?<span>((www|https:\/\/|http:\/\/)[^\s\]]+))]\((?<url>[^\s\]]+)\)/,
        ft = "\u200b*",
        mt = "\u200b\uff0a",
        gt = "\u200b_",
        yt = "\u200b\u23bd",
        kt = (e) => {
          let t = e,
            n = t.match(ht);
          for (; n && n.groups; ) {
            const { span: e } = n.groups;
            (t = t.replace(ht, e)), (n = t.match(ht));
          }
          return t;
        },
        bt = (e) =>
          e
            .replaceAll(/\\\\\*/g, ft)
            .replaceAll(/\\\\_/g, gt)
            .replaceAll(ft, mt)
            .replaceAll(gt, yt),
        vt = (e, t, n) => {
          const r = e.split(""),
            i = r[t];
          return (
            r[t] && r[n] && ((r[t] = r[n]), (r[n] = i)), r.join("").toString()
          );
        },
        wt = (e) => (t) =>
          t.replace(
            ((e) => new RegExp(`\\\\(?=[^\\w\\s${e}\\\\]|_)`, "g"))(e),
            ""
          ),
        St = {
          placeholderConfig: {
            hole: "\u2205",
            punctuation: "\u2042",
            char: "\u2234",
          },
          globalNodes: ["footnote_definition"],
          shouldSyncNode: ({ prevNode: e, nextNode: t }) =>
            e.inlineContent && t && e.type === t.type && !e.eq(t),
          movePlaceholder: (e, t) => {
            const n = ["*", "_"];
            let r = t.indexOf(e);
            for (; n.includes(t[r - 1] || "") && n.includes(t[r + 1] || ""); )
              (t = vt(t, r, r + 1)), (r += 1);
            return t;
          },
        },
        xt = (0, r.Tu)(St, "inlineSyncConfig");
      J(xt, { displayName: "Ctx<inlineSyncConfig>", group: "Prose" });
      const Et = (e) => e.split("\n\n")[0] || "",
        Nt = (e, t) => {
          try {
            const n = ((e, t) => {
                const { globalNodes: n } = e.get(xt.key),
                  r = [];
                return (
                  t.doc.descendants((e) => {
                    if (n.includes(e.type.name) || n.includes(e.type))
                      return r.push(e), !1;
                  }),
                  r
                );
              })(e, t),
              o = ((e) => e.selection.$from.node())(t),
              s = ((e, t, n, r) =>
                e.get(i.Ck)(t.schema.topNodeType.create(void 0, [n, ...r])))(
                e,
                t,
                o,
                n
              ),
              [a, l] = ((e, t) => {
                const n = e.get(xt.key),
                  i = n.placeholderConfig.hole,
                  [o = "", ...s] = t.split("\n\n");
                let a = (0, r.zG)(
                  wt(i),
                  (e) => n.movePlaceholder(i, e),
                  kt,
                  bt
                )(o);
                const l = ((e) => (t) => {
                  const n = t.indexOf(e.hole),
                    r = t.charAt(n - 1),
                    i = t.charAt(n + 1),
                    o = /[^\w]|_/;
                  return i
                    ? r && o.test(r) && o.test(i)
                      ? e.punctuation
                      : e.char
                    : e.punctuation;
                })(n.placeholderConfig)(a);
                return (
                  (a = a.replace(i, l)), (a = [a, ...s].join("\n\n")), [a, l]
                );
              })(e, s),
              c = ((e, t) => {
                const n = e.get(i._z)(t);
                return n ? n.firstChild : null;
              })(e, a);
            return !c ||
              o.type !== c.type ||
              ((e) => 1 === e.childCount && "html" === e.child(0).type.name)(c)
              ? null
              : ((c.attrs = { ...o.attrs }),
                c.descendants((e) => {
                  var t, n, r;
                  const i = e.marks.find((e) => "link" === e.type.name);
                  i &&
                    null != (t = e.text) &&
                    t.includes(l) &&
                    i.attrs.href.includes(l) &&
                    (i.attrs.href = i.attrs.href.replace(l, "")),
                    ((null != (n = e.text) && n.includes(mt)) ||
                      (null != (r = e.text) && r.includes(yt))) &&
                      (e.text = e.text.replaceAll(mt, ft).replaceAll(yt, gt));
                }),
                { text: Et(a), prevNode: o, nextNode: c, placeholder: l });
          } catch {
            return null;
          }
        },
        Tt = (0, r.x6)((e) => {
          let t = null;
          const n = new m.H$("MILKDOWN_INLINE_SYNC");
          return new m.Sy({
            key: n,
            state: {
              init: () => null,
              apply: (r, o, s, a) => {
                var l;
                const c = e.get(i.U7);
                if (
                  null == (l = c.hasFocus) ||
                  !l.call(c) ||
                  !c.editable ||
                  !r.docChanged ||
                  r.getMeta(n)
                )
                  return null;
                const u = Nt(e, a);
                if (!u) return null;
                t && (cancelAnimationFrame(t), (t = null));
                const { prevNode: p, nextNode: d, text: h } = u,
                  { shouldSyncNode: f } = e.get(xt.key);
                return (
                  f({ prevNode: p, nextNode: d, ctx: e, tr: r, text: h }) &&
                    (t = requestAnimationFrame(() => {
                      t = null;
                      const { dispatch: r, state: o } = e.get(i.U7);
                      ((e, t, n, r, i) => {
                        var o;
                        const { placeholderConfig: s } = e.get(xt.key),
                          a = s.hole;
                        let l = n.tr
                          .setMeta(t, !0)
                          .insertText(a, n.selection.from);
                        const c = n.apply(l),
                          u = Nt(e, c);
                        if (!u) return;
                        const p = u.text.slice(
                            0,
                            u.text.indexOf(u.placeholder)
                          ),
                          { $from: d } = c.selection,
                          h = d.before(),
                          f = d.after(),
                          g = ((e, t, n) => {
                            let r = t,
                              i = !1;
                            return (
                              e.descendants((e) => {
                                var t;
                                if (i) return !1;
                                if (!e.textContent.includes(n))
                                  return (r += e.nodeSize), !1;
                                if (e.isText) {
                                  const o =
                                    null == (t = e.text)
                                      ? void 0
                                      : t.indexOf(n);
                                  if (null != o && o >= 0)
                                    return (i = !0), (r += o), !1;
                                }
                                return (r += 1), !0;
                              }),
                              r
                            );
                          })(u.nextNode, h, u.placeholder);
                        (l = l
                          .replaceWith(h, f, u.nextNode)
                          .setNodeMarkup(h, void 0, i)
                          .delete(g + 1, g + 2)),
                          (l = l.setSelection(m.Bs.near(l.doc.resolve(g + 1)))),
                          (dt.test(p) ||
                            ["*", "_", "~"].includes(p.at(-1) || "")) &&
                            l.selection instanceof m.Bs &&
                            (
                              (null == (o = l.selection.$cursor)
                                ? void 0
                                : o.marks()) ?? []
                            ).forEach((e) => {
                              l = l.removeStoredMark(e.type);
                            }),
                          r(l);
                      })(e, n, o, r, p.attrs);
                    })),
                  null
                );
              },
            },
          });
        });
      J(Tt, { displayName: "Prose<inlineSyncPlugin>", group: "Prose" });
      const At = (0, r.te)("remarkAddOrderInList", () => () => (e) => {
        (0, B.Vn)(e, "list", (e) => {
          if (e.ordered) {
            const t = e.start ?? 1;
            e.children.forEach((e, n) => {
              e.label = n + t;
            });
          }
        });
      });
      J(At.plugin, {
        displayName: "Remark<remarkAddOrderInListPlugin>",
        group: "Remark",
      }),
        J(At.options, {
          displayName: "RemarkConfig<remarkAddOrderInListPlugin>",
          group: "Remark",
        });
      const It = (0, r.te)("remarkLineBreak", () => () => (e) => {
        const t = /[\t ]*(?:\r?\n|\r)/g;
        (0, B.Vn)(e, "text", (e, n, r) => {
          if (!e.value || "string" != typeof e.value) return;
          const i = [];
          let o = 0;
          t.lastIndex = 0;
          let s = t.exec(e.value);
          for (; s; ) {
            const n = s.index;
            o !== n && i.push({ type: "text", value: e.value.slice(o, n) }),
              i.push({ type: "break", data: { isInline: !0 } }),
              (o = n + s[0].length),
              (s = t.exec(e.value));
          }
          return i.length > 0 && r && "number" == typeof n
            ? (o < e.value.length &&
                i.push({ type: "text", value: e.value.slice(o) }),
              r.children.splice(n, 1, ...i),
              n + i.length)
            : void 0;
        });
      });
      J(It.plugin, { displayName: "Remark<remarkLineBreak>", group: "Remark" }),
        J(It.options, {
          displayName: "RemarkConfig<remarkLineBreak>",
          group: "Remark",
        });
      const Ct = (0, r.te)("remarkInlineLink", () => U);
      J(Ct.plugin, {
        displayName: "Remark<remarkInlineLinkPlugin>",
        group: "Remark",
      }),
        J(Ct.options, {
          displayName: "RemarkConfig<remarkInlineLinkPlugin>",
          group: "Remark",
        });
      const Ot = (0, r.te)("remarkHTMLTransformer", () => () => (e) => {
        !(function (e, t) {
          (function e(n, r, i) {
            if (((e) => !!e.children)(n)) {
              const t = [];
              for (let r = 0, i = n.children.length; r < i; r++) {
                const i = n.children[r];
                if (i) {
                  const o = e(i, r, n);
                  if (o)
                    for (let e = 0, n = o.length; e < n; e++) {
                      const n = o[e];
                      n && t.push(n);
                    }
                }
              }
              n.children = t;
            }
            return t(n, r, i);
          })(e, 0, null)[0];
        })(e, (e, t, n) =>
          ((e) => "html" === e.type)(e)
            ? ("root" === (null == n ? void 0 : n.type) &&
                ((e.children = [{ ...e }]),
                delete e.value,
                (e.type = "paragraph")),
              [e])
            : [e]
        );
      });
      J(Ot.plugin, {
        displayName: "Remark<remarkHtmlTransformer>",
        group: "Remark",
      }),
        J(Ot.options, {
          displayName: "RemarkConfig<remarkHtmlTransformer>",
          group: "Remark",
        });
      const Rt = (0, r.te)("remarkMarker", () => () => (e, t) => {
        (0, B.Vn)(
          e,
          (e) => ["strong", "emphasis"].includes(e.type),
          (e) => {
            e.marker = ((e) => t.value.charAt(e.position.start.offset))(e);
          }
        );
      });
      J(Rt.plugin, { displayName: "Remark<remarkMarker>", group: "Remark" }),
        J(Rt.options, {
          displayName: "RemarkConfig<remarkMarker>",
          group: "Remark",
        });
      const Mt = (0, r.x6)(() => {
        let e = !1;
        const t = new m.H$("MILKDOWN_INLINE_NODES_CURSOR"),
          n = new m.Sy({
            key: t,
            state: {
              init: () => !1,
              apply(e) {
                if (!e.selection.empty) return !1;
                const t = e.selection.$from,
                  n = t.nodeBefore,
                  r = t.nodeAfter;
                return !(
                  !(n && r && n.isInline && !n.isText && r.isInline) || r.isText
                );
              },
            },
            props: {
              handleDOMEvents: {
                compositionend: (t, r) =>
                  !!e &&
                  ((e = !1),
                  requestAnimationFrame(() => {
                    if (n.getState(t.state)) {
                      const e = t.state.selection.from;
                      r.preventDefault(),
                        t.dispatch(t.state.tr.insertText(r.data || "", e));
                    }
                  }),
                  !0),
                compositionstart: (t) => (n.getState(t.state) && (e = !0), !1),
                beforeinput: (t, r) => {
                  if (
                    n.getState(t.state) &&
                    r instanceof InputEvent &&
                    r.data &&
                    !e
                  ) {
                    const e = t.state.selection.from;
                    return (
                      r.preventDefault(),
                      t.dispatch(t.state.tr.insertText(r.data || "", e)),
                      !0
                    );
                  }
                  return !1;
                },
              },
              decorations(e) {
                if (n.getState(e)) {
                  const t = e.selection.$from.pos,
                    n = document.createElement("span"),
                    r = z.p.widget(t, n, { side: -1 }),
                    i = document.createElement("span"),
                    o = z.p.widget(t, i);
                  return (
                    setTimeout(() => {
                      (n.contentEditable = "true"),
                        (i.contentEditable = "true");
                    }),
                    z.EH.create(e.doc, [r, o])
                  );
                }
                return z.EH.empty;
              },
            },
          });
        return n;
      });
      J(Mt, { displayName: "Prose<inlineNodesCursorPlugin>", group: "Prose" });
      const Lt = (0, r.x6)(
        (e) =>
          new m.Sy({
            key: new m.H$("MILKDOWN_HARDBREAK_MARKS"),
            appendTransaction: (t, n, r) => {
              if (!t.length) return;
              const [i] = t;
              if (!i) return;
              const [o] = i.steps;
              if (i.getMeta("hardbreak")) {
                if (!(o instanceof P.Pu)) return;
                const { from: t } = o;
                return r.tr.setNodeMarkup(t, _e.type(e), void 0, []);
              }
              if (o instanceof P.WJ) {
                let t = r.tr;
                const { from: n, to: i } = o;
                return (
                  r.doc.nodesBetween(n, i, (n, r) => {
                    n.type === _e.type(e) &&
                      (t = t.setNodeMarkup(r, _e.type(e), void 0, []));
                  }),
                  t
                );
              }
            },
          })
      );
      J(Lt, { displayName: "Prose<hardbreakClearMarkPlugin>", group: "Prose" });
      const Ft = (0, r.Tu)(["table", "code_block"], "hardbreakFilterNodes");
      J(Ft, { displayName: "Ctx<hardbreakFilterNodes>", group: "Prose" });
      const _t = (0, r.x6)((e) => {
        const t = e.get(Ft.key);
        return new m.Sy({
          key: new m.H$("MILKDOWN_HARDBREAK_FILTER"),
          filterTransaction: (e, n) => {
            const r = e.getMeta("hardbreak"),
              [i] = e.steps;
            if (r && i) {
              const { from: e } = i,
                r = n.doc.resolve(e);
              let o = r.depth,
                s = !0;
              for (; o > 0; ) t.includes(r.node(o).type.name) && (s = !1), o--;
              return s;
            }
            return !0;
          },
        });
      });
      J(_t, { displayName: "Prose<hardbreakFilterPlugin>", group: "Prose" });
      const Dt = (0, r.x6)((e) => {
        const t = new m.H$("MILKDOWN_HEADING_ID"),
          n = (n) => {
            if (n.composing || !n.editable) return;
            const r = e.get(he.key),
              i = n.state.tr.setMeta("addToHistory", !1);
            let o = !1;
            n.state.doc.descendants((n, s) => {
              if (n.type === me.type(e)) {
                if (0 === n.textContent.trim().length) return;
                const e = n.attrs,
                  a = r(n);
                e.id !== a &&
                  ((o = !0),
                  i.setMeta(t, !0).setNodeMarkup(s, void 0, { ...e, id: a }));
              }
            }),
              o && n.dispatch(i);
          };
        return new m.Sy({
          key: t,
          view: (e) => (
            n(e),
            {
              update: (e) => {
                n(e);
              },
            }
          ),
        });
      });
      J(Dt, { displayName: "Prose<syncHeadingIdPlugin>", group: "Prose" });
      const Pt = (0, r.x6)((e) => {
        const t = (t) => {
          if (t.composing || !t.editable) return;
          const n = Ye.type(e),
            r = He.type(e),
            i = Qe.type(e),
            o = t.state,
            s = (e, t) => {
              let n = !1;
              const r = `${t + 1}.`;
              return e.label !== r && ((e.label = r), (n = !0)), n;
            };
          let a = o.tr,
            l = !1;
          o.doc.descendants((e, t, o, c) => {
            if (e.type === r) {
              const r = e.maybeChild(0);
              (null == r ? void 0 : r.type) === i &&
                "ordered" === r.attrs.listType &&
                ((l = !0),
                a.setNodeMarkup(t, n, { spread: "true" }),
                e.descendants((e, t, n, r) => {
                  if (e.type === i) {
                    const n = { ...e.attrs };
                    s(n, r) && (a = a.setNodeMarkup(t, void 0, n));
                  }
                  return !1;
                }));
            } else if (e.type === i && (null == o ? void 0 : o.type) === n) {
              const n = { ...e.attrs };
              let r = !1;
              "ordered" !== n.listType && ((n.listType = "ordered"), (r = !0)),
                (null == o ? void 0 : o.maybeChild(0)) && (r = s(n, c)),
                r && ((a = a.setNodeMarkup(t, void 0, n)), (l = !0));
            }
          }),
            l && t.dispatch(a.setMeta("addToHistory", !1));
        };
        return new m.Sy({
          key: new m.H$("MILKDOWN_KEEP_LIST_ORDER"),
          view: (e) => (
            t(e),
            {
              update: (e) => {
                t(e);
              },
            }
          ),
        });
      });
      J(Pt, { displayName: "Prose<syncListOrderPlugin>", group: "Prose" });
      const zt = [
        lt,
        ct,
        ut,
        pt,
        [xt, Tt, Lt, Ft, _t, Mt, At, Ct, It, Ot, Rt, Dt, Pt].flat(),
      ].flat();
    },
    830790: function (e, t, n) {
      n.d(t, {
        S$: function () {
          return mn;
        },
        ge: function () {
          return fn;
        },
        hy: function () {
          return yn;
        },
        In: function () {
          return gn;
        },
        KN: function () {
          return hn;
        },
        Lq: function () {
          return Dt;
        },
        uU: function () {
          return Pt;
        },
        r0: function () {
          return Fn;
        },
        Jp: function () {
          return an;
        },
        d2: function () {
          return cn;
        },
        fj: function () {
          return ln;
        },
        ie: function () {
          return pn;
        },
        Cx: function () {
          return un;
        },
        II: function () {
          return dn;
        },
        a2: function () {
          return kn;
        },
      });
      var r = n(907306),
        i = n(47161),
        o = n(661571),
        s = n(942105),
        a = n(216706),
        l = n(616711),
        c = n(905454),
        u = n(551579),
        p = n(492104);
      function d(e, t) {
        const n = String(e);
        if ("string" !== typeof t) throw new TypeError("Expected character");
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      var h = n(763436);
      const f = w(/[A-Za-z]/),
        m = w(/[\dA-Za-z]/);
      w(/[#-'*+\--9=?A-Z^-~]/);
      w(/\d/), w(/[\dA-Fa-f]/), w(/[!-/:-@[-`{-~]/);
      function g(e) {
        return null !== e && e < -2;
      }
      function y(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function k(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      const b = w(/\p{P}|\p{S}/u),
        v = w(/\s/);
      function w(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      var S = n(291325);
      const x = function (e) {
        if (null === e || void 0 === e) return N;
        if ("function" === typeof e) return E(e);
        if ("object" === typeof e)
          return Array.isArray(e)
            ? (function (e) {
                const t = [];
                let n = -1;
                for (; ++n < e.length; ) t[n] = x(e[n]);
                return E(r);
                function r(...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                }
              })(e)
            : (function (e) {
                const t = e;
                return E(n);
                function n(n) {
                  const r = n;
                  let i;
                  for (i in e) if (r[i] !== t[i]) return !1;
                  return !0;
                }
              })(e);
        if ("string" === typeof e)
          return (function (e) {
            return E(t);
            function t(t) {
              return t && t.type === e;
            }
          })(e);
        throw new Error("Expected function, string, or object as test");
      };
      function E(e) {
        return function (t, n, r) {
          return Boolean(
            T(t) &&
              e.call(this, t, "number" === typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function N() {
        return !0;
      }
      function T(e) {
        return null !== e && "object" === typeof e && "type" in e;
      }
      function A(e, t, n) {
        const r = x((n || {}).ignore || []),
          i = (function (e) {
            const t = [];
            if (!Array.isArray(e))
              throw new TypeError(
                "Expected find and replace tuple or list of tuples"
              );
            const n = !e[0] || Array.isArray(e[0]) ? e : [e];
            let r = -1;
            for (; ++r < n.length; ) {
              const e = n[r];
              t.push([I(e[0]), C(e[1])]);
            }
            return t;
          })(t);
        let o = -1;
        for (; ++o < i.length; ) (0, S.S4)(e, "text", s);
        function s(e, t) {
          let n,
            s = -1;
          for (; ++s < t.length; ) {
            const e = t[s],
              i = n ? n.children : void 0;
            if (r(e, i ? i.indexOf(e) : void 0, n)) return;
            n = e;
          }
          if (n)
            return (function (e, t) {
              const n = t[t.length - 1],
                r = i[o][0],
                s = i[o][1];
              let a = 0;
              const l = n.children.indexOf(e);
              let c = !1,
                u = [];
              r.lastIndex = 0;
              let p = r.exec(e.value);
              for (; p; ) {
                const n = p.index,
                  i = { index: p.index, input: p.input, stack: [...t, e] };
                let o = s(...p, i);
                if (
                  ("string" === typeof o &&
                    (o = o.length > 0 ? { type: "text", value: o } : void 0),
                  !1 === o
                    ? (r.lastIndex = n + 1)
                    : (a !== n &&
                        u.push({ type: "text", value: e.value.slice(a, n) }),
                      Array.isArray(o) ? u.push(...o) : o && u.push(o),
                      (a = n + p[0].length),
                      (c = !0)),
                  !r.global)
                )
                  break;
                p = r.exec(e.value);
              }
              c
                ? (a < e.value.length &&
                    u.push({ type: "text", value: e.value.slice(a) }),
                  n.children.splice(l, 1, ...u))
                : (u = [e]);
              return l + u.length;
            })(e, t);
        }
      }
      function I(e) {
        return "string" === typeof e
          ? new RegExp(
              (function (e) {
                if ("string" !== typeof e)
                  throw new TypeError("Expected a string");
                return e
                  .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                  .replace(/-/g, "\\x2d");
              })(e),
              "g"
            )
          : e;
      }
      function C(e) {
        return "function" === typeof e
          ? e
          : function () {
              return e;
            };
      }
      const O = "phrasing",
        R = ["autolink", "link", "image", "label"];
      function M(e) {
        this.enter({ type: "link", title: null, url: "", children: [] }, e);
      }
      function L(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function F(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function _(e) {
        this.config.exit.data.call(this, e);
        const t = this.stack[this.stack.length - 1];
        (0, h.ok)("link" === t.type),
          (t.url = "http://" + this.sliceSerialize(e));
      }
      function D(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function P(e) {
        this.exit(e);
      }
      function z(e) {
        A(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, B],
            [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, $],
          ],
          { ignore: ["link", "linkReference"] }
        );
      }
      function B(e, t, n, r, i) {
        let o = "";
        if (!j(i)) return !1;
        if (
          (/^w/i.test(t) && ((n = t + n), (t = ""), (o = "http://")),
          !(function (e) {
            const t = e.split(".");
            if (
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            )
              return !1;
            return !0;
          })(n))
        )
          return !1;
        const s = (function (e) {
          const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            r = n.indexOf(")");
          const i = d(e, "(");
          let o = d(e, ")");
          for (; -1 !== r && i > o; )
            (e += n.slice(0, r + 1)),
              (n = n.slice(r + 1)),
              (r = n.indexOf(")")),
              o++;
          return [e, n];
        })(n + r);
        if (!s[0]) return !1;
        const a = {
          type: "link",
          title: null,
          url: o + t + s[0],
          children: [{ type: "text", value: t + s[0] }],
        };
        return s[1] ? [a, { type: "text", value: s[1] }] : a;
      }
      function $(e, t, n, r) {
        return (
          !(!j(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{ type: "text", value: t + "@" + n }],
          }
        );
      }
      function j(e, t) {
        const n = e.input.charCodeAt(e.index - 1);
        return (0 === e.index || v(n) || b(n)) && (!t || 47 !== n);
      }
      function U(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      function H(e) {
        this.enter(
          {
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: [],
          },
          e
        );
      }
      function J() {
        this.buffer();
      }
      function W(e) {
        const t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, h.ok)("footnoteDefinition" === n.type),
          (n.label = t),
          (n.identifier = U(this.sliceSerialize(e)).toLowerCase());
      }
      function G(e) {
        this.exit(e);
      }
      function V(e) {
        this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
      }
      function Y() {
        this.buffer();
      }
      function q(e) {
        const t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, h.ok)("footnoteReference" === n.type),
          (n.label = t),
          (n.identifier = U(this.sliceSerialize(e)).toLowerCase());
      }
      function Z(e) {
        this.exit(e);
      }
      function K(e, t, n, r) {
        const i = n.createTracker(r);
        let o = i.move("[^");
        const s = n.enter("footnoteReference"),
          a = n.enter("reference");
        return (
          (o += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: o,
              after: "]",
            })
          )),
          a(),
          s(),
          (o += i.move("]")),
          o
        );
      }
      function X(e, t, n, r) {
        const i = n.createTracker(r);
        let o = i.move("[^");
        const s = n.enter("footnoteDefinition"),
          a = n.enter("label");
        return (
          (o += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: o,
              after: "]",
            })
          )),
          a(),
          (o += i.move(
            "]:" + (e.children && e.children.length > 0 ? " " : "")
          )),
          i.shift(4),
          (o += i.move(n.indentLines(n.containerFlow(e, i.current()), Q))),
          s(),
          o
        );
      }
      function Q(e, t, n) {
        return 0 === t ? e : (n ? "" : "    ") + e;
      }
      K.peek = function () {
        return "[";
      };
      const ee = [
        "autolink",
        "destinationLiteral",
        "destinationRaw",
        "reference",
        "titleQuote",
        "titleApostrophe",
      ];
      function te(e) {
        this.enter({ type: "delete", children: [] }, e);
      }
      function ne(e) {
        this.exit(e);
      }
      function re(e, t, n, r) {
        const i = n.createTracker(r),
          o = n.enter("strikethrough");
        let s = i.move("~~");
        return (
          (s += n.containerPhrasing(e, {
            ...i.current(),
            before: s,
            after: "~",
          })),
          (s += i.move("~~")),
          o(),
          s
        );
      }
      function ie(e) {
        return e.length;
      }
      function oe(e) {
        const t = "string" === typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t
          ? 99
          : 76 === t || 108 === t
          ? 108
          : 82 === t || 114 === t
          ? 114
          : 0;
      }
      function se(e, t, n) {
        return ">" + (n ? "" : " ") + e;
      }
      function ae(e, t, n) {
        if (("string" === typeof t && (t = [t]), !t || 0 === t.length))
          return n;
        let r = -1;
        for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
        return !1;
      }
      function le(e, t, n, r) {
        let i = -1;
        for (; ++i < n.unsafe.length; )
          if (
            "\n" === n.unsafe[i].character &&
            ((o = n.stack),
            (s = n.unsafe[i]),
            ae(o, s.inConstruct, !0) && !ae(o, s.notInConstruct, !1))
          )
            return /[ \t]/.test(r.before) ? "" : " ";
        var o, s;
        return "\\\n";
      }
      re.peek = function () {
        return "~";
      };
      var ce = n(63306);
      function ue(e, t, n) {
        return (n ? "" : "    ") + e;
      }
      function pe(e) {
        const t = e.options.quote || '"';
        if ('"' !== t && "'" !== t)
          throw new Error(
            "Cannot serialize title with `" +
              t +
              "` for `options.quote`, expected `\"`, or `'`"
          );
        return t;
      }
      function de(e) {
        return "&#x" + e.toString(16).toUpperCase() + ";";
      }
      var he = n(979094);
      function fe(e, t, n) {
        const r = (0, he.r)(e),
          i = (0, he.r)(t);
        return void 0 === r
          ? void 0 === i
            ? "_" === n
              ? { inside: !0, outside: !0 }
              : { inside: !1, outside: !1 }
            : 1 === i
            ? { inside: !0, outside: !0 }
            : { inside: !1, outside: !0 }
          : 1 === r
          ? void 0 === i
            ? { inside: !1, outside: !1 }
            : 1 === i
            ? { inside: !0, outside: !0 }
            : { inside: !1, outside: !1 }
          : void 0 === i
          ? { inside: !1, outside: !1 }
          : 1 === i
          ? { inside: !0, outside: !1 }
          : { inside: !1, outside: !1 };
      }
      function me(e, t, n, r) {
        const i = (function (e) {
            const t = e.options.emphasis || "*";
            if ("*" !== t && "_" !== t)
              throw new Error(
                "Cannot serialize emphasis with `" +
                  t +
                  "` for `options.emphasis`, expected `*`, or `_`"
              );
            return t;
          })(n),
          o = n.enter("emphasis"),
          s = n.createTracker(r),
          a = s.move(i);
        let l = s.move(
          n.containerPhrasing(e, { after: i, before: a, ...s.current() })
        );
        const c = l.charCodeAt(0),
          u = fe(r.before.charCodeAt(r.before.length - 1), c, i);
        u.inside && (l = de(c) + l.slice(1));
        const p = l.charCodeAt(l.length - 1),
          d = fe(r.after.charCodeAt(0), p, i);
        d.inside && (l = l.slice(0, -1) + de(p));
        const h = s.move(i);
        return (
          o(),
          (n.attentionEncodeSurroundingInfo = {
            after: d.outside,
            before: u.outside,
          }),
          a + l + h
        );
      }
      me.peek = function (e, t, n) {
        return n.options.emphasis || "*";
      };
      var ge = n(39892),
        ye = n(529535);
      function ke(e) {
        return e.value || "";
      }
      function be(e, t, n, r) {
        const i = pe(n),
          o = '"' === i ? "Quote" : "Apostrophe",
          s = n.enter("image");
        let a = n.enter("label");
        const l = n.createTracker(r);
        let c = l.move("![");
        return (
          (c += l.move(
            n.safe(e.alt, { before: c, after: "]", ...l.current() })
          )),
          (c += l.move("](")),
          a(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((a = n.enter("destinationLiteral")),
              (c += l.move("<")),
              (c += l.move(
                n.safe(e.url, { before: c, after: ">", ...l.current() })
              )),
              (c += l.move(">")))
            : ((a = n.enter("destinationRaw")),
              (c += l.move(
                n.safe(e.url, {
                  before: c,
                  after: e.title ? " " : ")",
                  ...l.current(),
                })
              ))),
          a(),
          e.title &&
            ((a = n.enter(`title${o}`)),
            (c += l.move(" " + i)),
            (c += l.move(
              n.safe(e.title, { before: c, after: i, ...l.current() })
            )),
            (c += l.move(i)),
            a()),
          (c += l.move(")")),
          s(),
          c
        );
      }
      function ve(e, t, n, r) {
        const i = e.referenceType,
          o = n.enter("imageReference");
        let s = n.enter("label");
        const a = n.createTracker(r);
        let l = a.move("![");
        const c = n.safe(e.alt, { before: l, after: "]", ...a.current() });
        (l += a.move(c + "][")), s();
        const u = n.stack;
        (n.stack = []), (s = n.enter("reference"));
        const p = n.safe(n.associationId(e), {
          before: l,
          after: "]",
          ...a.current(),
        });
        return (
          s(),
          (n.stack = u),
          o(),
          "full" !== i && c && c === p
            ? "shortcut" === i
              ? (l = l.slice(0, -1))
              : (l += a.move("]"))
            : (l += a.move(p + "]")),
          l
        );
      }
      function we(e, t, n) {
        let r = e.value || "",
          i = "`",
          o = -1;
        for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++o < n.unsafe.length;

        ) {
          const e = n.unsafe[o],
            t = n.compilePattern(e);
          let i;
          if (e.atBreak)
            for (; (i = t.exec(r)); ) {
              let e = i.index;
              10 === r.charCodeAt(e) && 13 === r.charCodeAt(e - 1) && e--,
                (r = r.slice(0, e) + " " + r.slice(i.index + 1));
            }
        }
        return i + r + i;
      }
      function Se(e, t) {
        const n = (0, ye.B)(e);
        return Boolean(
          !t.options.resourceLink &&
            e.url &&
            !e.title &&
            e.children &&
            1 === e.children.length &&
            "text" === e.children[0].type &&
            (n === e.url || "mailto:" + n === e.url) &&
            /^[a-z][a-z+.-]+:/i.test(e.url) &&
            !/[\0- <>\u007F]/.test(e.url)
        );
      }
      function xe(e, t, n, r) {
        const i = pe(n),
          o = '"' === i ? "Quote" : "Apostrophe",
          s = n.createTracker(r);
        let a, l;
        if (Se(e, n)) {
          const t = n.stack;
          (n.stack = []), (a = n.enter("autolink"));
          let r = s.move("<");
          return (
            (r += s.move(
              n.containerPhrasing(e, { before: r, after: ">", ...s.current() })
            )),
            (r += s.move(">")),
            a(),
            (n.stack = t),
            r
          );
        }
        (a = n.enter("link")), (l = n.enter("label"));
        let c = s.move("[");
        return (
          (c += s.move(
            n.containerPhrasing(e, { before: c, after: "](", ...s.current() })
          )),
          (c += s.move("](")),
          l(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((l = n.enter("destinationLiteral")),
              (c += s.move("<")),
              (c += s.move(
                n.safe(e.url, { before: c, after: ">", ...s.current() })
              )),
              (c += s.move(">")))
            : ((l = n.enter("destinationRaw")),
              (c += s.move(
                n.safe(e.url, {
                  before: c,
                  after: e.title ? " " : ")",
                  ...s.current(),
                })
              ))),
          l(),
          e.title &&
            ((l = n.enter(`title${o}`)),
            (c += s.move(" " + i)),
            (c += s.move(
              n.safe(e.title, { before: c, after: i, ...s.current() })
            )),
            (c += s.move(i)),
            l()),
          (c += s.move(")")),
          a(),
          c
        );
      }
      function Ee(e, t, n, r) {
        const i = e.referenceType,
          o = n.enter("linkReference");
        let s = n.enter("label");
        const a = n.createTracker(r);
        let l = a.move("[");
        const c = n.containerPhrasing(e, {
          before: l,
          after: "]",
          ...a.current(),
        });
        (l += a.move(c + "][")), s();
        const u = n.stack;
        (n.stack = []), (s = n.enter("reference"));
        const p = n.safe(n.associationId(e), {
          before: l,
          after: "]",
          ...a.current(),
        });
        return (
          s(),
          (n.stack = u),
          o(),
          "full" !== i && c && c === p
            ? "shortcut" === i
              ? (l = l.slice(0, -1))
              : (l += a.move("]"))
            : (l += a.move(p + "]")),
          l
        );
      }
      function Ne(e) {
        const t = e.options.bullet || "*";
        if ("*" !== t && "+" !== t && "-" !== t)
          throw new Error(
            "Cannot serialize items with `" +
              t +
              "` for `options.bullet`, expected `*`, `+`, or `-`"
          );
        return t;
      }
      function Te(e) {
        const t = e.options.rule || "*";
        if ("*" !== t && "-" !== t && "_" !== t)
          throw new Error(
            "Cannot serialize rules with `" +
              t +
              "` for `options.rule`, expected `*`, `-`, or `_`"
          );
        return t;
      }
      (ke.peek = function () {
        return "<";
      }),
        (be.peek = function () {
          return "!";
        }),
        (ve.peek = function () {
          return "!";
        }),
        (we.peek = function () {
          return "`";
        }),
        (xe.peek = function (e, t, n) {
          return Se(e, n) ? "<" : "[";
        }),
        (Ee.peek = function () {
          return "[";
        });
      var Ae = n(20745);
      function Ie(e, t, n, r) {
        const i = (function (e) {
            const t = e.options.strong || "*";
            if ("*" !== t && "_" !== t)
              throw new Error(
                "Cannot serialize strong with `" +
                  t +
                  "` for `options.strong`, expected `*`, or `_`"
              );
            return t;
          })(n),
          o = n.enter("strong"),
          s = n.createTracker(r),
          a = s.move(i + i);
        let l = s.move(
          n.containerPhrasing(e, { after: i, before: a, ...s.current() })
        );
        const c = l.charCodeAt(0),
          u = fe(r.before.charCodeAt(r.before.length - 1), c, i);
        u.inside && (l = de(c) + l.slice(1));
        const p = l.charCodeAt(l.length - 1),
          d = fe(r.after.charCodeAt(0), p, i);
        d.inside && (l = l.slice(0, -1) + de(p));
        const h = s.move(i + i);
        return (
          o(),
          (n.attentionEncodeSurroundingInfo = {
            after: d.outside,
            before: u.outside,
          }),
          a + l + h
        );
      }
      Ie.peek = function (e, t, n) {
        return n.options.strong || "*";
      };
      const Ce = {
        blockquote: function (e, t, n, r) {
          const i = n.enter("blockquote"),
            o = n.createTracker(r);
          o.move("> "), o.shift(2);
          const s = n.indentLines(n.containerFlow(e, o.current()), se);
          return i(), s;
        },
        break: le,
        code: function (e, t, n, r) {
          const i = (function (e) {
              const t = e.options.fence || "`";
              if ("`" !== t && "~" !== t)
                throw new Error(
                  "Cannot serialize code with `" +
                    t +
                    "` for `options.fence`, expected `` ` `` or `~`"
                );
              return t;
            })(n),
            o = e.value || "",
            s = "`" === i ? "GraveAccent" : "Tilde";
          if (
            (function (e, t) {
              return Boolean(
                !1 === t.options.fences &&
                  e.value &&
                  !e.lang &&
                  /[^ \r\n]/.test(e.value) &&
                  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
              );
            })(e, n)
          ) {
            const e = n.enter("codeIndented"),
              t = n.indentLines(o, ue);
            return e(), t;
          }
          const a = n.createTracker(r),
            l = i.repeat(Math.max((0, ce.J)(o, i) + 1, 3)),
            c = n.enter("codeFenced");
          let u = a.move(l);
          if (e.lang) {
            const t = n.enter(`codeFencedLang${s}`);
            (u += a.move(
              n.safe(e.lang, {
                before: u,
                after: " ",
                encode: ["`"],
                ...a.current(),
              })
            )),
              t();
          }
          if (e.lang && e.meta) {
            const t = n.enter(`codeFencedMeta${s}`);
            (u += a.move(" ")),
              (u += a.move(
                n.safe(e.meta, {
                  before: u,
                  after: "\n",
                  encode: ["`"],
                  ...a.current(),
                })
              )),
              t();
          }
          return (
            (u += a.move("\n")),
            o && (u += a.move(o + "\n")),
            (u += a.move(l)),
            c(),
            u
          );
        },
        definition: function (e, t, n, r) {
          const i = pe(n),
            o = '"' === i ? "Quote" : "Apostrophe",
            s = n.enter("definition");
          let a = n.enter("label");
          const l = n.createTracker(r);
          let c = l.move("[");
          return (
            (c += l.move(
              n.safe(n.associationId(e), {
                before: c,
                after: "]",
                ...l.current(),
              })
            )),
            (c += l.move("]: ")),
            a(),
            !e.url || /[\0- \u007F]/.test(e.url)
              ? ((a = n.enter("destinationLiteral")),
                (c += l.move("<")),
                (c += l.move(
                  n.safe(e.url, { before: c, after: ">", ...l.current() })
                )),
                (c += l.move(">")))
              : ((a = n.enter("destinationRaw")),
                (c += l.move(
                  n.safe(e.url, {
                    before: c,
                    after: e.title ? " " : "\n",
                    ...l.current(),
                  })
                ))),
            a(),
            e.title &&
              ((a = n.enter(`title${o}`)),
              (c += l.move(" " + i)),
              (c += l.move(
                n.safe(e.title, { before: c, after: i, ...l.current() })
              )),
              (c += l.move(i)),
              a()),
            s(),
            c
          );
        },
        emphasis: me,
        hardBreak: le,
        heading: function (e, t, n, r) {
          const i = Math.max(Math.min(6, e.depth || 1), 1),
            o = n.createTracker(r);
          if (
            (function (e, t) {
              let n = !1;
              return (
                (0, ge.Vn)(e, function (e) {
                  if (
                    ("value" in e && /\r?\n|\r/.test(e.value)) ||
                    "break" === e.type
                  )
                    return (n = !0), S.BK;
                }),
                Boolean(
                  (!e.depth || e.depth < 3) &&
                    (0, ye.B)(e) &&
                    (t.options.setext || n)
                )
              );
            })(e, n)
          ) {
            const t = n.enter("headingSetext"),
              r = n.enter("phrasing"),
              s = n.containerPhrasing(e, {
                ...o.current(),
                before: "\n",
                after: "\n",
              });
            return (
              r(),
              t(),
              s +
                "\n" +
                (1 === i ? "=" : "-").repeat(
                  s.length -
                    (Math.max(s.lastIndexOf("\r"), s.lastIndexOf("\n")) + 1)
                )
            );
          }
          const s = "#".repeat(i),
            a = n.enter("headingAtx"),
            l = n.enter("phrasing");
          o.move(s + " ");
          let c = n.containerPhrasing(e, {
            before: "# ",
            after: "\n",
            ...o.current(),
          });
          return (
            /^[\t ]/.test(c) && (c = de(c.charCodeAt(0)) + c.slice(1)),
            (c = c ? s + " " + c : s),
            n.options.closeAtx && (c += " " + s),
            l(),
            a(),
            c
          );
        },
        html: ke,
        image: be,
        imageReference: ve,
        inlineCode: we,
        link: xe,
        linkReference: Ee,
        list: function (e, t, n, r) {
          const i = n.enter("list"),
            o = n.bulletCurrent;
          let s = e.ordered
            ? (function (e) {
                const t = e.options.bulletOrdered || ".";
                if ("." !== t && ")" !== t)
                  throw new Error(
                    "Cannot serialize items with `" +
                      t +
                      "` for `options.bulletOrdered`, expected `.` or `)`"
                  );
                return t;
              })(n)
            : Ne(n);
          const a = e.ordered
            ? "." === s
              ? ")"
              : "."
            : (function (e) {
                const t = Ne(e),
                  n = e.options.bulletOther;
                if (!n) return "*" === t ? "-" : "*";
                if ("*" !== n && "+" !== n && "-" !== n)
                  throw new Error(
                    "Cannot serialize items with `" +
                      n +
                      "` for `options.bulletOther`, expected `*`, `+`, or `-`"
                  );
                if (n === t)
                  throw new Error(
                    "Expected `bullet` (`" +
                      t +
                      "`) and `bulletOther` (`" +
                      n +
                      "`) to be different"
                  );
                return n;
              })(n);
          let l = !(!t || !n.bulletLastUsed) && s === n.bulletLastUsed;
          if (!e.ordered) {
            const t = e.children ? e.children[0] : void 0;
            if (
              (("*" !== s && "-" !== s) ||
                !t ||
                (t.children && t.children[0]) ||
                "list" !== n.stack[n.stack.length - 1] ||
                "listItem" !== n.stack[n.stack.length - 2] ||
                "list" !== n.stack[n.stack.length - 3] ||
                "listItem" !== n.stack[n.stack.length - 4] ||
                0 !== n.indexStack[n.indexStack.length - 1] ||
                0 !== n.indexStack[n.indexStack.length - 2] ||
                0 !== n.indexStack[n.indexStack.length - 3] ||
                (l = !0),
              Te(n) === s && t)
            ) {
              let t = -1;
              for (; ++t < e.children.length; ) {
                const n = e.children[t];
                if (
                  n &&
                  "listItem" === n.type &&
                  n.children &&
                  n.children[0] &&
                  "thematicBreak" === n.children[0].type
                ) {
                  l = !0;
                  break;
                }
              }
            }
          }
          l && (s = a), (n.bulletCurrent = s);
          const c = n.containerFlow(e, r);
          return (n.bulletLastUsed = s), (n.bulletCurrent = o), i(), c;
        },
        listItem: function (e, t, n, r) {
          const i = (function (e) {
            const t = e.options.listItemIndent || "one";
            if ("tab" !== t && "one" !== t && "mixed" !== t)
              throw new Error(
                "Cannot serialize items with `" +
                  t +
                  "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
              );
            return t;
          })(n);
          let o = n.bulletCurrent || Ne(n);
          t &&
            "list" === t.type &&
            t.ordered &&
            (o =
              ("number" === typeof t.start && t.start > -1 ? t.start : 1) +
              (!1 === n.options.incrementListMarker
                ? 0
                : t.children.indexOf(e)) +
              o);
          let s = o.length + 1;
          ("tab" === i ||
            ("mixed" === i &&
              ((t && "list" === t.type && t.spread) || e.spread))) &&
            (s = 4 * Math.ceil(s / 4));
          const a = n.createTracker(r);
          a.move(o + " ".repeat(s - o.length)), a.shift(s);
          const l = n.enter("listItem"),
            c = n.indentLines(
              n.containerFlow(e, a.current()),
              function (e, t, n) {
                if (t) return (n ? "" : " ".repeat(s)) + e;
                return (n ? o : o + " ".repeat(s - o.length)) + e;
              }
            );
          return l(), c;
        },
        paragraph: function (e, t, n, r) {
          const i = n.enter("paragraph"),
            o = n.enter("phrasing"),
            s = n.containerPhrasing(e, r);
          return o(), i(), s;
        },
        root: function (e, t, n, r) {
          const i = e.children.some(function (e) {
            return (0, Ae.w)(e);
          });
          return (i ? n.containerPhrasing : n.containerFlow).call(n, e, r);
        },
        strong: Ie,
        text: function (e, t, n, r) {
          return n.safe(e.value, r);
        },
        thematicBreak: function (e, t, n) {
          const r = (Te(n) + (n.options.ruleSpaces ? " " : "")).repeat(
            (function (e) {
              const t = e.options.ruleRepetition || 3;
              if (t < 3)
                throw new Error(
                  "Cannot serialize rules with repetition `" +
                    t +
                    "` for `options.ruleRepetition`, expected `3` or more"
                );
              return t;
            })(n)
          );
          return n.options.ruleSpaces ? r.slice(0, -1) : r;
        },
      };
      function Oe(e) {
        const t = e._align;
        (0, h.ok)(t, "expected `_align` on table"),
          this.enter(
            {
              type: "table",
              align: t.map(function (e) {
                return "none" === e ? null : e;
              }),
              children: [],
            },
            e
          ),
          (this.data.inTable = !0);
      }
      function Re(e) {
        this.exit(e), (this.data.inTable = void 0);
      }
      function Me(e) {
        this.enter({ type: "tableRow", children: [] }, e);
      }
      function Le(e) {
        this.exit(e);
      }
      function Fe(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function _e(e) {
        let t = this.resume();
        this.data.inTable && (t = t.replace(/\\([\\|])/g, De));
        const n = this.stack[this.stack.length - 1];
        (0, h.ok)("inlineCode" === n.type), (n.value = t), this.exit(e);
      }
      function De(e, t) {
        return "|" === t ? t : e;
      }
      function Pe(e) {
        const t = e || {},
          n = t.tableCellPadding,
          r = t.tablePipeAlign,
          i = t.stringLength,
          o = n ? " " : "|";
        return {
          unsafe: [
            { character: "\r", inConstruct: "tableCell" },
            { character: "\n", inConstruct: "tableCell" },
            { atBreak: !0, character: "|", after: "[\t :-]" },
            { character: "|", inConstruct: "tableCell" },
            { atBreak: !0, character: ":", after: "-" },
            { atBreak: !0, character: "-", after: "[:|-]" },
          ],
          handlers: {
            inlineCode: function (e, t, n) {
              let r = Ce.inlineCode(e, t, n);
              n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&"));
              return r;
            },
            table: function (e, t, n, r) {
              return a(
                (function (e, t, n) {
                  const r = e.children;
                  let i = -1;
                  const o = [],
                    s = t.enter("table");
                  for (; ++i < r.length; ) o[i] = l(r[i], t, n);
                  return s(), o;
                })(e, n, r),
                e.align
              );
            },
            tableCell: s,
            tableRow: function (e, t, n, r) {
              const i = a([l(e, n, r)]);
              return i.slice(0, i.indexOf("\n"));
            },
          },
        };
        function s(e, t, n, r) {
          const i = n.enter("tableCell"),
            s = n.enter("phrasing"),
            a = n.containerPhrasing(e, { ...r, before: o, after: o });
          return s(), i(), a;
        }
        function a(e, t) {
          return (function (e, t = {}) {
            const n = (t.align || []).concat(),
              r = t.stringLength || ie,
              i = [],
              o = [],
              s = [],
              a = [];
            let l = 0,
              c = -1;
            for (; ++c < e.length; ) {
              const n = [],
                i = [];
              let p = -1;
              for (e[c].length > l && (l = e[c].length); ++p < e[c].length; ) {
                const o =
                  null === (u = e[c][p]) || void 0 === u ? "" : String(u);
                if (!1 !== t.alignDelimiters) {
                  const e = r(o);
                  (i[p] = e), (void 0 === a[p] || e > a[p]) && (a[p] = e);
                }
                n.push(o);
              }
              (o[c] = n), (s[c] = i);
            }
            var u;
            let p = -1;
            if ("object" === typeof n && "length" in n)
              for (; ++p < l; ) i[p] = oe(n[p]);
            else {
              const e = oe(n);
              for (; ++p < l; ) i[p] = e;
            }
            p = -1;
            const d = [],
              h = [];
            for (; ++p < l; ) {
              const e = i[p];
              let n = "",
                r = "";
              99 === e
                ? ((n = ":"), (r = ":"))
                : 108 === e
                ? (n = ":")
                : 114 === e && (r = ":");
              let o =
                !1 === t.alignDelimiters
                  ? 1
                  : Math.max(1, a[p] - n.length - r.length);
              const s = n + "-".repeat(o) + r;
              !1 !== t.alignDelimiters &&
                ((o = n.length + o + r.length),
                o > a[p] && (a[p] = o),
                (h[p] = o)),
                (d[p] = s);
            }
            o.splice(1, 0, d), s.splice(1, 0, h), (c = -1);
            const f = [];
            for (; ++c < o.length; ) {
              const e = o[c],
                n = s[c];
              p = -1;
              const r = [];
              for (; ++p < l; ) {
                const o = e[p] || "";
                let s = "",
                  c = "";
                if (!1 !== t.alignDelimiters) {
                  const e = a[p] - (n[p] || 0),
                    t = i[p];
                  114 === t
                    ? (s = " ".repeat(e))
                    : 99 === t
                    ? e % 2
                      ? ((s = " ".repeat(e / 2 + 0.5)),
                        (c = " ".repeat(e / 2 - 0.5)))
                      : ((s = " ".repeat(e / 2)), (c = s))
                    : (c = " ".repeat(e));
                }
                !1 === t.delimiterStart || p || r.push("|"),
                  !1 === t.padding ||
                    (!1 === t.alignDelimiters && "" === o) ||
                    (!1 === t.delimiterStart && !p) ||
                    r.push(" "),
                  !1 !== t.alignDelimiters && r.push(s),
                  r.push(o),
                  !1 !== t.alignDelimiters && r.push(c),
                  !1 !== t.padding && r.push(" "),
                  (!1 === t.delimiterEnd && p === l - 1) || r.push("|");
              }
              f.push(
                !1 === t.delimiterEnd
                  ? r.join("").replace(/ +$/, "")
                  : r.join("")
              );
            }
            return f.join("\n");
          })(e, { align: t, alignDelimiters: r, padding: n, stringLength: i });
        }
        function l(e, t, n) {
          const r = e.children;
          let i = -1;
          const o = [],
            a = t.enter("tableRow");
          for (; ++i < r.length; ) o[i] = s(r[i], 0, t, n);
          return a(), o;
        }
      }
      function ze(e) {
        const t = this.stack[this.stack.length - 2];
        (0, h.ok)("listItem" === t.type),
          (t.checked = "taskListCheckValueChecked" === e.type);
      }
      function Be(e) {
        const t = this.stack[this.stack.length - 2];
        if (t && "listItem" === t.type && "boolean" === typeof t.checked) {
          const e = this.stack[this.stack.length - 1];
          (0, h.ok)("paragraph" === e.type);
          const n = e.children[0];
          if (n && "text" === n.type) {
            const r = t.children;
            let i,
              o = -1;
            for (; ++o < r.length; ) {
              const e = r[o];
              if ("paragraph" === e.type) {
                i = e;
                break;
              }
            }
            i === e &&
              ((n.value = n.value.slice(1)),
              0 === n.value.length
                ? e.children.shift()
                : e.position &&
                  n.position &&
                  "number" === typeof n.position.start.offset &&
                  (n.position.start.column++,
                  n.position.start.offset++,
                  (e.position.start = Object.assign({}, n.position.start))));
          }
        }
        this.exit(e);
      }
      function $e(e, t, n, r) {
        const i = e.children[0],
          o = "boolean" === typeof e.checked && i && "paragraph" === i.type,
          s = "[" + (e.checked ? "x" : " ") + "] ",
          a = n.createTracker(r);
        o && a.move(s);
        let l = Ce.listItem(e, t, n, { ...r, ...a.current() });
        return (
          o &&
            (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
              return e + s;
            })),
          l
        );
      }
      function je(e, t, n, r) {
        const i = e.length;
        let o,
          s = 0;
        if (
          ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (o = Array.from(r)), o.unshift(t, n), e.splice(...o);
        else
          for (n && e.splice(t, n); s < r.length; )
            (o = r.slice(s, s + 1e4)),
              o.unshift(t, 0),
              e.splice(...o),
              (s += 1e4),
              (t += 1e4);
      }
      const Ue = {}.hasOwnProperty;
      function He(e, t) {
        let n;
        for (n in t) {
          const r = (Ue.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            i = t[n];
          let o;
          if (i)
            for (o in i) {
              Ue.call(r, o) || (r[o] = []);
              const e = i[o];
              Je(r[o], Array.isArray(e) ? e : e ? [e] : []);
            }
        }
      }
      function Je(e, t) {
        let n = -1;
        const r = [];
        for (; ++n < t.length; ) ("after" === t[n].add ? e : r).push(t[n]);
        je(e, 0, 0, r);
      }
      const We = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function t(o) {
              if ((87 === o || 119 === o) && r < 3) return r++, e.consume(o), t;
              if (46 === o && 3 === r) return e.consume(o), i;
              return n(o);
            };
            function i(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        Ge = {
          tokenize: function (e, t, n) {
            let r, i, o;
            return s;
            function s(t) {
              return 46 === t || 95 === t
                ? e.check(Ye, l, a)(t)
                : null === t || y(t) || v(t) || (45 !== t && b(t))
                ? l(t)
                : ((o = !0), e.consume(t), s);
            }
            function a(t) {
              return (
                95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), s
              );
            }
            function l(e) {
              return i || r || !o ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        Ve = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return i;
            function i(s) {
              return 40 === s
                ? (n++, e.consume(s), i)
                : 41 === s && r < n
                ? o(s)
                : 33 === s ||
                  34 === s ||
                  38 === s ||
                  39 === s ||
                  41 === s ||
                  42 === s ||
                  44 === s ||
                  46 === s ||
                  58 === s ||
                  59 === s ||
                  60 === s ||
                  63 === s ||
                  93 === s ||
                  95 === s ||
                  126 === s
                ? e.check(Ye, t, o)(s)
                : null === s || y(s) || v(s)
                ? t(s)
                : (e.consume(s), i);
            }
            function o(t) {
              return 41 === t && r++, e.consume(t), i;
            }
          },
          partial: !0,
        },
        Ye = {
          tokenize: function (e, t, n) {
            return r;
            function r(s) {
              return 33 === s ||
                34 === s ||
                39 === s ||
                41 === s ||
                42 === s ||
                44 === s ||
                46 === s ||
                58 === s ||
                59 === s ||
                63 === s ||
                95 === s ||
                126 === s
                ? (e.consume(s), r)
                : 38 === s
                ? (e.consume(s), o)
                : 93 === s
                ? (e.consume(s), i)
                : 60 === s || null === s || y(s) || v(s)
                ? t(s)
                : n(s);
            }
            function i(e) {
              return null === e || 40 === e || 91 === e || y(e) || v(e)
                ? t(e)
                : r(e);
            }
            function o(e) {
              return f(e) ? s(e) : n(e);
            }
            function s(t) {
              return 59 === t
                ? (e.consume(t), r)
                : f(t)
                ? (e.consume(t), s)
                : n(t);
            }
          },
          partial: !0,
        },
        qe = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), r;
            };
            function r(e) {
              return m(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        Ze = {
          name: "wwwAutolink",
          tokenize: function (e, t, n) {
            const r = this;
            return function (t) {
              if (
                (87 !== t && 119 !== t) ||
                !tt.call(r, r.previous) ||
                ot(r.events)
              )
                return n(t);
              return (
                e.enter("literalAutolink"),
                e.enter("literalAutolinkWww"),
                e.check(We, e.attempt(Ge, e.attempt(Ve, i), n), n)(t)
              );
            };
            function i(n) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: tt,
        },
        Ke = {
          name: "protocolAutolink",
          tokenize: function (e, t, n) {
            const r = this;
            let i = "",
              o = !1;
            return function (t) {
              if (
                (72 === t || 104 === t) &&
                nt.call(r, r.previous) &&
                !ot(r.events)
              )
                return (
                  e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (i += String.fromCodePoint(t)),
                  e.consume(t),
                  s
                );
              return n(t);
            };
            function s(t) {
              if (f(t) && i.length < 5)
                return (i += String.fromCodePoint(t)), e.consume(t), s;
              if (58 === t) {
                const n = i.toLowerCase();
                if ("http" === n || "https" === n) return e.consume(t), a;
              }
              return n(t);
            }
            function a(t) {
              return 47 === t ? (e.consume(t), o ? l : ((o = !0), a)) : n(t);
            }
            function l(t) {
              return null === t ||
                (function (e) {
                  return null !== e && (e < 32 || 127 === e);
                })(t) ||
                y(t) ||
                v(t) ||
                b(t)
                ? n(t)
                : e.attempt(Ge, e.attempt(Ve, c), n)(t);
            }
            function c(n) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: nt,
        },
        Xe = {
          name: "emailAutolink",
          tokenize: function (e, t, n) {
            const r = this;
            let i, o;
            return function (t) {
              if (!it(t) || !rt.call(r, r.previous) || ot(r.events))
                return n(t);
              return (
                e.enter("literalAutolink"),
                e.enter("literalAutolinkEmail"),
                s(t)
              );
            };
            function s(t) {
              return it(t)
                ? (e.consume(t), s)
                : 64 === t
                ? (e.consume(t), a)
                : n(t);
            }
            function a(t) {
              return 46 === t
                ? e.check(qe, c, l)(t)
                : 45 === t || 95 === t || m(t)
                ? ((o = !0), e.consume(t), a)
                : c(t);
            }
            function l(t) {
              return e.consume(t), (i = !0), a;
            }
            function c(s) {
              return o && i && f(r.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  t(s))
                : n(s);
            }
          },
          previous: rt,
        },
        Qe = {};
      let et = 48;
      for (; et < 123; )
        (Qe[et] = Xe), et++, 58 === et ? (et = 65) : 91 === et && (et = 97);
      function tt(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          y(e)
        );
      }
      function nt(e) {
        return !f(e);
      }
      function rt(e) {
        return !(47 === e || it(e));
      }
      function it(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || m(e);
      }
      function ot(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          const r = e[t][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      function st(e, t, n, r) {
        const i = r ? r - 1 : Number.POSITIVE_INFINITY;
        let o = 0;
        return function (r) {
          if (k(r)) return e.enter(n), s(r);
          return t(r);
        };
        function s(r) {
          return k(r) && o++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
        }
      }
      (Qe[43] = Xe),
        (Qe[45] = Xe),
        (Qe[46] = Xe),
        (Qe[95] = Xe),
        (Qe[72] = [Xe, Ke]),
        (Qe[104] = [Xe, Ke]),
        (Qe[87] = [Xe, Ze]),
        (Qe[119] = [Xe, Ze]);
      const at = {
        tokenize: function (e, t, n) {
          return function (t) {
            return k(t) ? st(e, r, "linePrefix")(t) : r(t);
          };
          function r(e) {
            return null === e || g(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
      const lt = {
        tokenize: function (e, t, n) {
          const r = this;
          return st(
            e,
            function (e) {
              const i = r.events[r.events.length - 1];
              return i &&
                "gfmFootnoteDefinitionIndent" === i[1].type &&
                4 === i[2].sliceSerialize(i[1], !0).length
                ? t(e)
                : n(e);
            },
            "gfmFootnoteDefinitionIndent",
            5
          );
        },
        partial: !0,
      };
      function ct(e, t, n) {
        const r = this;
        let i = r.events.length;
        const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let s;
        for (; i--; ) {
          const e = r.events[i][1];
          if ("labelImage" === e.type) {
            s = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (i) {
          if (!s || !s._balanced) return n(i);
          const a = U(r.sliceSerialize({ start: s.end, end: r.now() }));
          if (94 !== a.codePointAt(0) || !o.includes(a.slice(1))) return n(i);
          return (
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(i),
            e.exit("gfmFootnoteCallLabelMarker"),
            t(i)
          );
        };
      }
      function ut(e, t) {
        let n,
          r = e.length;
        for (; r--; )
          if ("labelImage" === e[r][1].type && "enter" === e[r][0]) {
            n = e[r][1];
            break;
          }
        (e[r + 1][1].type = "data"),
          (e[r + 3][1].type = "gfmFootnoteCallLabelMarker");
        const i = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[r + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          o = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[r + 3][1].end),
            end: Object.assign({}, e[r + 3][1].end),
          };
        o.end.column++, o.end.offset++, o.end._bufferIndex++;
        const s = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, o.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          a = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, s.start),
            end: Object.assign({}, s.end),
          },
          l = [
            e[r + 1],
            e[r + 2],
            ["enter", i, t],
            e[r + 3],
            e[r + 4],
            ["enter", o, t],
            ["exit", o, t],
            ["enter", s, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", s, t],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", i, t],
          ];
        return e.splice(r, e.length - r + 1, ...l), e;
      }
      function pt(e, t, n) {
        const r = this,
          i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let o,
          s = 0;
        return function (t) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallLabelMarker"),
            a
          );
        };
        function a(t) {
          return 94 !== t
            ? n(t)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(t),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              l);
        }
        function l(a) {
          if (s > 999 || (93 === a && !o) || null === a || 91 === a || y(a))
            return n(a);
          if (93 === a) {
            e.exit("chunkString");
            const o = e.exit("gfmFootnoteCallString");
            return i.includes(U(r.sliceSerialize(o)))
              ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(a),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                t)
              : n(a);
          }
          return y(a) || (o = !0), s++, e.consume(a), 92 === a ? c : l;
        }
        function c(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, l)
            : l(t);
        }
      }
      function dt(e, t, n) {
        const r = this,
          i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
        let o,
          s,
          a = 0;
        return function (t) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            l
          );
        };
        function l(t) {
          return 94 === t
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              c)
            : n(t);
        }
        function c(t) {
          if (a > 999 || (93 === t && !s) || null === t || 91 === t || y(t))
            return n(t);
          if (93 === t) {
            e.exit("chunkString");
            const n = e.exit("gfmFootnoteDefinitionLabelString");
            return (
              (o = U(r.sliceSerialize(n))),
              e.enter("gfmFootnoteDefinitionLabelMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionLabelMarker"),
              e.exit("gfmFootnoteDefinitionLabel"),
              p
            );
          }
          return y(t) || (s = !0), a++, e.consume(t), 92 === t ? u : c;
        }
        function u(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), a++, c)
            : c(t);
        }
        function p(t) {
          return 58 === t
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              i.includes(o) || i.push(o),
              st(e, d, "gfmFootnoteDefinitionWhitespace"))
            : n(t);
        }
        function d(e) {
          return t(e);
        }
      }
      function ht(e, t, n) {
        return e.check(at, t, e.attempt(lt, t, n));
      }
      function ft(e) {
        e.exit("gfmFootnoteDefinition");
      }
      function mt(e, t, n) {
        const r = [];
        let i = -1;
        for (; ++i < e.length; ) {
          const o = e[i].resolveAll;
          o && !r.includes(o) && ((t = o(t, n)), r.push(o));
        }
        return t;
      }
      function gt(e) {
        let t = (e || {}).singleTilde;
        const n = {
          name: "strikethrough",
          tokenize: function (e, n, r) {
            const i = this.previous,
              o = this.events;
            let s = 0;
            return function (t) {
              if (126 === i && "characterEscape" !== o[o.length - 1][1].type)
                return r(t);
              return e.enter("strikethroughSequenceTemporary"), a(t);
            };
            function a(o) {
              const l = (0, he.r)(i);
              if (126 === o) return s > 1 ? r(o) : (e.consume(o), s++, a);
              if (s < 2 && !t) return r(o);
              const c = e.exit("strikethroughSequenceTemporary"),
                u = (0, he.r)(o);
              return (
                (c._open = !u || (2 === u && Boolean(l))),
                (c._close = !l || (2 === l && Boolean(u))),
                n(o)
              );
            }
          },
          resolveAll: function (e, t) {
            let n = -1;
            for (; ++n < e.length; )
              if (
                "enter" === e[n][0] &&
                "strikethroughSequenceTemporary" === e[n][1].type &&
                e[n][1]._close
              ) {
                let r = n;
                for (; r--; )
                  if (
                    "exit" === e[r][0] &&
                    "strikethroughSequenceTemporary" === e[r][1].type &&
                    e[r][1]._open &&
                    e[n][1].end.offset - e[n][1].start.offset ===
                      e[r][1].end.offset - e[r][1].start.offset
                  ) {
                    (e[n][1].type = "strikethroughSequence"),
                      (e[r][1].type = "strikethroughSequence");
                    const i = {
                        type: "strikethrough",
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[n][1].end),
                      },
                      o = {
                        type: "strikethroughText",
                        start: Object.assign({}, e[r][1].end),
                        end: Object.assign({}, e[n][1].start),
                      },
                      s = [
                        ["enter", i, t],
                        ["enter", e[r][1], t],
                        ["exit", e[r][1], t],
                        ["enter", o, t],
                      ],
                      a = t.parser.constructs.insideSpan.null;
                    a && je(s, s.length, 0, mt(a, e.slice(r + 1, n), t)),
                      je(s, s.length, 0, [
                        ["exit", o, t],
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                        ["exit", i, t],
                      ]),
                      je(e, r - 1, n - r + 3, s),
                      (n = r + s.length - 2);
                    break;
                  }
              }
            n = -1;
            for (; ++n < e.length; )
              "strikethroughSequenceTemporary" === e[n][1].type &&
                (e[n][1].type = "data");
            return e;
          },
        };
        return (
          (null !== t && void 0 !== t) || (t = !0),
          {
            text: { 126: n },
            insideSpan: { null: [n] },
            attentionMarkers: { null: [126] },
          }
        );
      }
      class yt {
        constructor() {
          this.map = [];
        }
        add(e, t, n) {
          !(function (e, t, n, r) {
            let i = 0;
            if (0 === n && 0 === r.length) return;
            for (; i < e.map.length; ) {
              if (e.map[i][0] === t)
                return (e.map[i][1] += n), void e.map[i][2].push(...r);
              i += 1;
            }
            e.map.push([t, n, r]);
          })(this, e, t, n);
        }
        consume(e) {
          if (
            (this.map.sort(function (e, t) {
              return e[0] - t[0];
            }),
            0 === this.map.length)
          )
            return;
          let t = this.map.length;
          const n = [];
          for (; t > 0; )
            (t -= 1),
              n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
              (e.length = this.map[t][0]);
          n.push([...e]), (e.length = 0);
          let r = n.pop();
          for (; r; ) e.push(...r), (r = n.pop());
          this.map.length = 0;
        }
      }
      function kt(e, t) {
        let n = !1;
        const r = [];
        for (; t < e.length; ) {
          const i = e[t];
          if (n) {
            if ("enter" === i[0])
              "tableContent" === i[1].type &&
                r.push(
                  "tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none"
                );
            else if ("tableContent" === i[1].type) {
              if ("tableDelimiterMarker" === e[t - 1][1].type) {
                const e = r.length - 1;
                r[e] = "left" === r[e] ? "center" : "right";
              }
            } else if ("tableDelimiterRow" === i[1].type) break;
          } else
            "enter" === i[0] && "tableDelimiterRow" === i[1].type && (n = !0);
          t += 1;
        }
        return r;
      }
      function bt(e, t, n) {
        const r = this;
        let i,
          o = 0,
          s = 0;
        return function (e) {
          let t = r.events.length - 1;
          for (; t > -1; ) {
            const e = r.events[t][1].type;
            if ("lineEnding" !== e && "linePrefix" !== e) break;
            t--;
          }
          const i = t > -1 ? r.events[t][1].type : null,
            o = "tableHead" === i || "tableRow" === i ? x : a;
          if (o === x && r.parser.lazy[r.now().line]) return n(e);
          return o(e);
        };
        function a(t) {
          return (
            e.enter("tableHead"),
            e.enter("tableRow"),
            (function (e) {
              if (124 === e) return l(e);
              return (i = !0), (s += 1), l(e);
            })(t)
          );
        }
        function l(t) {
          return null === t
            ? n(t)
            : g(t)
            ? s > 1
              ? ((s = 0),
                (r.interrupt = !0),
                e.exit("tableRow"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                p)
              : n(t)
            : k(t)
            ? st(e, l, "whitespace")(t)
            : ((s += 1),
              i && ((i = !1), (o += 1)),
              124 === t
                ? (e.enter("tableCellDivider"),
                  e.consume(t),
                  e.exit("tableCellDivider"),
                  (i = !0),
                  l)
                : (e.enter("data"), c(t)));
        }
        function c(t) {
          return null === t || 124 === t || y(t)
            ? (e.exit("data"), l(t))
            : (e.consume(t), 92 === t ? u : c);
        }
        function u(t) {
          return 92 === t || 124 === t ? (e.consume(t), c) : c(t);
        }
        function p(t) {
          return (
            (r.interrupt = !1),
            r.parser.lazy[r.now().line]
              ? n(t)
              : (e.enter("tableDelimiterRow"),
                (i = !1),
                k(t)
                  ? st(
                      e,
                      d,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : d(t))
          );
        }
        function d(t) {
          return 45 === t || 58 === t
            ? f(t)
            : 124 === t
            ? ((i = !0),
              e.enter("tableCellDivider"),
              e.consume(t),
              e.exit("tableCellDivider"),
              h)
            : S(t);
        }
        function h(t) {
          return k(t) ? st(e, f, "whitespace")(t) : f(t);
        }
        function f(t) {
          return 58 === t
            ? ((s += 1),
              (i = !0),
              e.enter("tableDelimiterMarker"),
              e.consume(t),
              e.exit("tableDelimiterMarker"),
              m)
            : 45 === t
            ? ((s += 1), m(t))
            : null === t || g(t)
            ? w(t)
            : S(t);
        }
        function m(t) {
          return 45 === t ? (e.enter("tableDelimiterFiller"), b(t)) : S(t);
        }
        function b(t) {
          return 45 === t
            ? (e.consume(t), b)
            : 58 === t
            ? ((i = !0),
              e.exit("tableDelimiterFiller"),
              e.enter("tableDelimiterMarker"),
              e.consume(t),
              e.exit("tableDelimiterMarker"),
              v)
            : (e.exit("tableDelimiterFiller"), v(t));
        }
        function v(t) {
          return k(t) ? st(e, w, "whitespace")(t) : w(t);
        }
        function w(n) {
          return 124 === n
            ? d(n)
            : (null === n || g(n)) && i && o === s
            ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n))
            : S(n);
        }
        function S(e) {
          return n(e);
        }
        function x(t) {
          return e.enter("tableRow"), E(t);
        }
        function E(n) {
          return 124 === n
            ? (e.enter("tableCellDivider"),
              e.consume(n),
              e.exit("tableCellDivider"),
              E)
            : null === n || g(n)
            ? (e.exit("tableRow"), t(n))
            : k(n)
            ? st(e, E, "whitespace")(n)
            : (e.enter("data"), N(n));
        }
        function N(t) {
          return null === t || 124 === t || y(t)
            ? (e.exit("data"), E(t))
            : (e.consume(t), 92 === t ? T : N);
        }
        function T(t) {
          return 92 === t || 124 === t ? (e.consume(t), N) : N(t);
        }
      }
      function vt(e, t) {
        let n,
          r,
          i,
          o = -1,
          s = !0,
          a = 0,
          l = [0, 0, 0, 0],
          c = [0, 0, 0, 0],
          u = !1,
          p = 0;
        const d = new yt();
        for (; ++o < e.length; ) {
          const h = e[o],
            f = h[1];
          "enter" === h[0]
            ? "tableHead" === f.type
              ? ((u = !1),
                0 !== p && (St(d, t, p, n, r), (r = void 0), (p = 0)),
                (n = {
                  type: "table",
                  start: Object.assign({}, f.start),
                  end: Object.assign({}, f.end),
                }),
                d.add(o, 0, [["enter", n, t]]))
              : "tableRow" === f.type || "tableDelimiterRow" === f.type
              ? ((s = !0),
                (i = void 0),
                (l = [0, 0, 0, 0]),
                (c = [0, o + 1, 0, 0]),
                u &&
                  ((u = !1),
                  (r = {
                    type: "tableBody",
                    start: Object.assign({}, f.start),
                    end: Object.assign({}, f.end),
                  }),
                  d.add(o, 0, [["enter", r, t]])),
                (a = "tableDelimiterRow" === f.type ? 2 : r ? 3 : 1))
              : !a ||
                ("data" !== f.type &&
                  "tableDelimiterMarker" !== f.type &&
                  "tableDelimiterFiller" !== f.type)
              ? "tableCellDivider" === f.type &&
                (s
                  ? (s = !1)
                  : (0 !== l[1] &&
                      ((c[0] = c[1]), (i = wt(d, t, l, a, void 0, i))),
                    (l = c),
                    (c = [l[1], o, 0, 0])))
              : ((s = !1),
                0 === c[2] &&
                  (0 !== l[1] &&
                    ((c[0] = c[1]),
                    (i = wt(d, t, l, a, void 0, i)),
                    (l = [0, 0, 0, 0])),
                  (c[2] = o)))
            : "tableHead" === f.type
            ? ((u = !0), (p = o))
            : "tableRow" === f.type || "tableDelimiterRow" === f.type
            ? ((p = o),
              0 !== l[1]
                ? ((c[0] = c[1]), (i = wt(d, t, l, a, o, i)))
                : 0 !== c[1] && (i = wt(d, t, c, a, o, i)),
              (a = 0))
            : !a ||
              ("data" !== f.type &&
                "tableDelimiterMarker" !== f.type &&
                "tableDelimiterFiller" !== f.type) ||
              (c[3] = o);
        }
        for (
          0 !== p && St(d, t, p, n, r), d.consume(t.events), o = -1;
          ++o < t.events.length;

        ) {
          const e = t.events[o];
          "enter" === e[0] &&
            "table" === e[1].type &&
            (e[1]._align = kt(t.events, o));
        }
        return e;
      }
      function wt(e, t, n, r, i, o) {
        const s =
          1 === r ? "tableHeader" : 2 === r ? "tableDelimiter" : "tableData";
        0 !== n[0] &&
          ((o.end = Object.assign({}, xt(t.events, n[0]))),
          e.add(n[0], 0, [["exit", o, t]]));
        const a = xt(t.events, n[1]);
        if (
          ((o = {
            type: s,
            start: Object.assign({}, a),
            end: Object.assign({}, a),
          }),
          e.add(n[1], 0, [["enter", o, t]]),
          0 !== n[2])
        ) {
          const i = xt(t.events, n[2]),
            o = xt(t.events, n[3]),
            s = {
              type: "tableContent",
              start: Object.assign({}, i),
              end: Object.assign({}, o),
            };
          if ((e.add(n[2], 0, [["enter", s, t]]), 2 !== r)) {
            const r = t.events[n[2]],
              i = t.events[n[3]];
            if (
              ((r[1].end = Object.assign({}, i[1].end)),
              (r[1].type = "chunkText"),
              (r[1].contentType = "text"),
              n[3] > n[2] + 1)
            ) {
              const t = n[2] + 1,
                r = n[3] - n[2] - 1;
              e.add(t, r, []);
            }
          }
          e.add(n[3] + 1, 0, [["exit", s, t]]);
        }
        return (
          void 0 !== i &&
            ((o.end = Object.assign({}, xt(t.events, i))),
            e.add(i, 0, [["exit", o, t]]),
            (o = void 0)),
          o
        );
      }
      function St(e, t, n, r, i) {
        const o = [],
          s = xt(t.events, n);
        i && ((i.end = Object.assign({}, s)), o.push(["exit", i, t])),
          (r.end = Object.assign({}, s)),
          o.push(["exit", r, t]),
          e.add(n + 1, 0, o);
      }
      function xt(e, t) {
        const n = e[t],
          r = "enter" === n[0] ? "start" : "end";
        return n[1][r];
      }
      const Et = {
        name: "tasklistCheck",
        tokenize: function (e, t, n) {
          const r = this;
          return function (t) {
            if (null !== r.previous || !r._gfmTasklistFirstContentOfListItem)
              return n(t);
            return (
              e.enter("taskListCheck"),
              e.enter("taskListCheckMarker"),
              e.consume(t),
              e.exit("taskListCheckMarker"),
              i
            );
          };
          function i(t) {
            return y(t)
              ? (e.enter("taskListCheckValueUnchecked"),
                e.consume(t),
                e.exit("taskListCheckValueUnchecked"),
                o)
              : 88 === t || 120 === t
              ? (e.enter("taskListCheckValueChecked"),
                e.consume(t),
                e.exit("taskListCheckValueChecked"),
                o)
              : n(t);
          }
          function o(t) {
            return 93 === t
              ? (e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                e.exit("taskListCheck"),
                s)
              : n(t);
          }
          function s(r) {
            return g(r)
              ? t(r)
              : k(r)
              ? e.check({ tokenize: Nt }, t, n)(r)
              : n(r);
          }
        },
      };
      function Nt(e, t, n) {
        return st(
          e,
          function (e) {
            return null === e ? n(e) : t(e);
          },
          "whitespace"
        );
      }
      function Tt(e) {
        return (function (e) {
          const t = {};
          let n = -1;
          for (; ++n < e.length; ) He(t, e[n]);
          return t;
        })([
          { text: Qe },
          {
            document: {
              91: {
                name: "gfmFootnoteDefinition",
                tokenize: dt,
                continuation: { tokenize: ht },
                exit: ft,
              },
            },
            text: {
              91: { name: "gfmFootnoteCall", tokenize: pt },
              93: {
                name: "gfmPotentialFootnoteCall",
                add: "after",
                tokenize: ct,
                resolveTo: ut,
              },
            },
          },
          gt(e),
          { flow: { null: { name: "table", tokenize: bt, resolveAll: vt } } },
          { text: { 91: Et } },
        ]);
      }
      const At = {};
      function It(e) {
        const t = e || At,
          n = this.data(),
          r = n.micromarkExtensions || (n.micromarkExtensions = []),
          i = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
          o = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
        r.push(Tt(t)),
          i.push([
            {
              transforms: [z],
              enter: {
                literalAutolink: M,
                literalAutolinkEmail: L,
                literalAutolinkHttp: L,
                literalAutolinkWww: L,
              },
              exit: {
                literalAutolink: P,
                literalAutolinkEmail: D,
                literalAutolinkHttp: F,
                literalAutolinkWww: _,
              },
            },
            {
              enter: {
                gfmFootnoteDefinition: H,
                gfmFootnoteDefinitionLabelString: J,
                gfmFootnoteCall: V,
                gfmFootnoteCallString: Y,
              },
              exit: {
                gfmFootnoteDefinition: G,
                gfmFootnoteDefinitionLabelString: W,
                gfmFootnoteCall: Z,
                gfmFootnoteCallString: q,
              },
            },
            {
              canContainEols: ["delete"],
              enter: { strikethrough: te },
              exit: { strikethrough: ne },
            },
            {
              enter: {
                table: Oe,
                tableData: Fe,
                tableHeader: Fe,
                tableRow: Me,
              },
              exit: {
                codeText: _e,
                table: Re,
                tableData: Le,
                tableHeader: Le,
                tableRow: Le,
              },
            },
            {
              exit: {
                taskListCheckValueChecked: ze,
                taskListCheckValueUnchecked: ze,
                paragraph: Be,
              },
            },
          ]),
          o.push(
            (function (e) {
              return {
                extensions: [
                  {
                    unsafe: [
                      {
                        character: "@",
                        before: "[+\\-.\\w]",
                        after: "[\\-.\\w]",
                        inConstruct: O,
                        notInConstruct: R,
                      },
                      {
                        character: ".",
                        before: "[Ww]",
                        after: "[\\-.\\w]",
                        inConstruct: O,
                        notInConstruct: R,
                      },
                      {
                        character: ":",
                        before: "[ps]",
                        after: "\\/",
                        inConstruct: O,
                        notInConstruct: R,
                      },
                    ],
                  },
                  {
                    unsafe: [
                      {
                        character: "[",
                        inConstruct: ["phrasing", "label", "reference"],
                      },
                    ],
                    handlers: { footnoteDefinition: X, footnoteReference: K },
                  },
                  {
                    unsafe: [
                      {
                        character: "~",
                        inConstruct: "phrasing",
                        notInConstruct: ee,
                      },
                    ],
                    handlers: { delete: re },
                  },
                  Pe(e),
                  {
                    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
                    handlers: { listItem: $e },
                  },
                ],
              };
            })(t)
          );
      }
      const Ct = (e, t) => (
          Object.assign(e, { meta: { package: "@milkdown/preset-gfm", ...t } }),
          e
        ),
        Ot = (0, s.we)("strike_through");
      Ct(Ot, { displayName: "Attr<strikethrough>", group: "Strikethrough" });
      const Rt = (0, s.c8)("strike_through", (e) => ({
        parseDOM: [
          { tag: "del" },
          { style: "text-decoration", getAttrs: (e) => "line-through" === e },
        ],
        toDOM: (t) => ["del", e.get(Ot.key)(t)],
        parseMarkdown: {
          match: (e) => "delete" === e.type,
          runner: (e, t, n) => {
            e.openMark(n), e.next(t.children), e.closeMark(n);
          },
        },
        toMarkdown: {
          match: (e) => "strike_through" === e.type.name,
          runner: (e, t) => {
            e.withMark(t, "delete");
          },
        },
      }));
      Ct(Rt.mark, {
        displayName: "MarkSchema<strikethrough>",
        group: "Strikethrough",
      }),
        Ct(Rt.ctx, {
          displayName: "MarkSchemaCtx<strikethrough>",
          group: "Strikethrough",
        });
      const Mt = (0, s.r1)(
        "ToggleStrikeThrough",
        (e) => () => (0, p.w9)(Rt.type(e))
      );
      Ct(Mt, {
        displayName: "Command<ToggleStrikethrough>",
        group: "Strikethrough",
      });
      const Lt = (0, s.Gv)("strikeThroughKeymap", {
        ToggleStrikethrough: {
          shortcuts: "Mod-Alt-x",
          command: (e) => {
            const t = e.get(a.Xo);
            return () => t.call(Mt.key);
          },
        },
      });
      Ct(Lt.ctx, {
        displayName: "KeymapCtx<strikethrough>",
        group: "Strikethrough",
      }),
        Ct(Lt.shortcuts, {
          displayName: "Keymap<strikethrough>",
          group: "Strikethrough",
        });
      const Ft = (e, t = 3, n = 3) => {
          const r = Array(n)
              .fill(0)
              .map(() => en.type(e).createAndFill()),
            i = Array(n)
              .fill(0)
              .map(() => tn.type(e).createAndFill()),
            o = Array(t)
              .fill(0)
              .map((t, n) => Qt.type(e).create(null, 0 === n ? i : r));
          return Xt.type(e).create(null, o);
        },
        _t = (e) => (0, u.Kk)((e) => "table" === e.type.spec.tableRole)(e),
        Dt = (e, t) => {
          const n = _t(t);
          if (!n) return;
          const r = c.rU.get(n.node);
          return e < 0 || e >= r.width
            ? void 0
            : r
                .cellsInRect({
                  left: e,
                  right: e + 1,
                  top: 0,
                  bottom: r.height,
                })
                .map((e) => {
                  const t = n.node.nodeAt(e);
                  if (!t) return;
                  const r = e + n.start;
                  return { pos: r, start: r + 1, node: t };
                })
                .filter((e) => null != e);
        },
        Pt = (e, t) => {
          const n = _t(t);
          if (!n) return;
          const r = c.rU.get(n.node);
          return e < 0 || e >= r.height
            ? void 0
            : r
                .cellsInRect({ left: 0, right: r.width, top: e, bottom: e + 1 })
                .map((e) => {
                  const t = n.node.nodeAt(e);
                  if (!t) return;
                  const r = e + n.start;
                  return { pos: r, start: r + 1, node: t };
                })
                .filter((e) => null != e);
        },
        zt = (e) => {
          const t = ((e) => {
            const t = _t(e);
            if (!t) return;
            const n = c.rU.get(t.node);
            return n
              .cellsInRect({
                left: 0,
                right: n.width,
                top: 0,
                bottom: n.height,
              })
              .map((e) => {
                const n = t.node.nodeAt(e),
                  r = e + t.start;
                return { pos: r, start: r + 1, node: n };
              });
          })(e.selection);
          if (t && t[0]) {
            const n = e.doc.resolve(t[0].pos),
              r = t[t.length - 1];
            if (r) {
              const t = e.doc.resolve(r.pos);
              return (0, u.zN)(e.setSelection(new c.Xc(t, n)));
            }
          }
          return e;
        };
      function Bt(e, t, { map: n, tableStart: r, table: i }, o) {
        const s = Array(o)
            .fill(0)
            .reduce((e, t, n) => e + i.child(n).nodeSize, r),
          a = Array(n.width)
            .fill(0)
            .map((t, r) => {
              const o = i.nodeAt(n.map[r]);
              return en
                .type(e)
                .createAndFill({
                  alignment: null == o ? void 0 : o.attrs.alignment,
                });
            });
        return t.insert(s, Qt.type(e).create(null, a)), t;
      }
      const $t = (e) => (t) => (n) => {
          const r = _t(n.selection),
            i = "row" === e;
          if (r) {
            const e = c.rU.get(r.node);
            if (t >= 0 && t < (i ? e.height : e.width)) {
              const o = e.positionAt(
                  i ? t : e.height - 1,
                  i ? e.width - 1 : t,
                  r.node
                ),
                s = n.doc.resolve(r.start + o),
                a = i ? c.Xc.rowSelection : c.Xc.colSelection,
                l = e.positionAt(i ? t : 0, i ? 0 : t, r.node),
                p = n.doc.resolve(r.start + l);
              return (0, u.zN)(n.setSelection(a(s, p)));
            }
          }
          return n;
        },
        jt = $t("row"),
        Ut = $t("col"),
        Ht = (e) => e[0].map((t, n) => e.map((e) => e[n])),
        Jt = (e, t) => {
          const n = [],
            r = c.rU.get(e);
          for (let i = 0; i < r.height; i++) {
            const o = e.child(i),
              s = [];
            for (let n = 0; n < r.width; n++) {
              if (!t[i][n]) continue;
              const o = r.map[i * r.width + n],
                a = t[i][n],
                l = e
                  .nodeAt(o)
                  .type.createChecked(
                    Object.assign({}, a.attrs),
                    a.content,
                    a.marks
                  );
              s.push(l);
            }
            n.push(o.type.createChecked(o.attrs, s, o.marks));
          }
          return e.type.createChecked(e.attrs, n, e.marks);
        },
        Wt = (e) => {
          const t = c.rU.get(e),
            n = [];
          for (let r = 0; r < t.height; r++) {
            const i = [],
              o = {};
            for (let n = 0; n < t.width; n++) {
              const s = t.map[r * t.width + n],
                a = e.nodeAt(s),
                l = t.findCell(s);
              o[s] || l.top !== r ? i.push(null) : ((o[s] = !0), i.push(a));
            }
            n.push(i);
          }
          return n;
        },
        Gt = (e, t, n, r) => {
          const i = t[0] > n[0] ? -1 : 1,
            o = e.splice(t[0], t.length),
            s = o.length % 2 === 0 ? 1 : 0;
          let a;
          return (
            (a =
              -1 === r && 1 === i
                ? n[0] - 1
                : 1 === r && -1 === i
                ? n[n.length - 1] - s + 1
                : -1 === i
                ? n[0]
                : n[n.length - 1] - s),
            e.splice(a, 0, ...o),
            e
          );
        },
        Vt = (e, t) => {
          let n = e,
            r = e;
          for (let c = e; c >= 0; c--) {
            const e = Dt(c, t.selection);
            e &&
              e.forEach((e) => {
                const t = e.node.attrs.colspan + c - 1;
                t >= n && (n = c), t > r && (r = t);
              });
          }
          for (let c = e; c <= r; c++) {
            const e = Dt(c, t.selection);
            e &&
              e.forEach((e) => {
                const t = e.node.attrs.colspan + c - 1;
                e.node.attrs.colspan > 1 && t > r && (r = t);
              });
          }
          const i = [];
          for (let c = n; c <= r; c++) {
            const e = Dt(c, t.selection);
            e && e.length && i.push(c);
          }
          (n = i[0]), (r = i[i.length - 1]);
          const o = Dt(n, t.selection),
            s = Pt(0, t.selection),
            a = t.doc.resolve(o[o.length - 1].pos);
          let l;
          for (let c = r; c >= n; c--) {
            const e = Dt(c, t.selection);
            if (e && e.length) {
              for (let t = s.length - 1; t >= 0; t--)
                if (s[t].pos === e[0].pos) {
                  l = e[0];
                  break;
                }
              if (l) break;
            }
          }
          return { $anchor: a, $head: t.doc.resolve(l.pos), indexes: i };
        },
        Yt = (e, t) => {
          let n = e,
            r = e;
          for (let c = e; c >= 0; c--)
            Pt(c, t.selection).forEach((e) => {
              const t = e.node.attrs.rowspan + c - 1;
              t >= n && (n = c), t > r && (r = t);
            });
          for (let c = e; c <= r; c++)
            Pt(c, t.selection).forEach((e) => {
              const t = e.node.attrs.rowspan + c - 1;
              e.node.attrs.rowspan > 1 && t > r && (r = t);
            });
          const i = [];
          for (let c = n; c <= r; c++) {
            const e = Pt(c, t.selection);
            e && e.length && i.push(c);
          }
          (n = i[0]), (r = i[i.length - 1]);
          const o = Pt(n, t.selection),
            s = Dt(0, t.selection),
            a = t.doc.resolve(o[o.length - 1].pos);
          let l;
          for (let c = r; c >= n; c--) {
            const e = Pt(c, t.selection);
            if (e && e.length) {
              for (let t = s.length - 1; t >= 0; t--)
                if (s[t].pos === e[0].pos) {
                  l = e[0];
                  break;
                }
              if (l) break;
            }
          }
          return { $anchor: a, $head: t.doc.resolve(l.pos), indexes: i };
        };
      function qt(e, t, n, r = !0) {
        const i = _t(e.selection);
        if (!i) return e;
        const { indexes: o } = Vt(t, e),
          { indexes: s } = Vt(n, e);
        if (o.includes(n)) return e;
        const a = ((e, t, n, r) => {
            let i = Ht(Wt(e.node));
            return (i = Gt(i, t, n, r)), (i = Ht(i)), Jt(e.node, i);
          })(i, o, s, 0),
          l = (0, u.zN)(e).replaceWith(i.pos, i.pos + i.node.nodeSize, a);
        if (!r) return l;
        const p = c.rU.get(a),
          d = i.start,
          h = n,
          f = p.positionAt(p.height - 1, h, a),
          m = l.doc.resolve(d + f),
          g = c.Xc.colSelection,
          y = p.positionAt(0, h, a),
          k = l.doc.resolve(d + y);
        return l.setSelection(g(m, k));
      }
      function Zt(e, t, n, r = !0) {
        const i = _t(e.selection);
        if (!i) return e;
        const { indexes: o } = Yt(t, e),
          { indexes: s } = Yt(n, e);
        if (o.includes(n)) return e;
        const a = ((e, t, n, r) => {
            let i = Wt(e.node);
            return (i = Gt(i, t, n, r)), Jt(e.node, i);
          })(i, o, s, 0),
          l = (0, u.zN)(e).replaceWith(i.pos, i.pos + i.node.nodeSize, a);
        if (!r) return l;
        const p = c.rU.get(a),
          d = i.start,
          h = n,
          f = p.positionAt(h, p.width - 1, a),
          m = l.doc.resolve(d + f),
          g = c.Xc.rowSelection,
          y = p.positionAt(h, 0, a),
          k = l.doc.resolve(d + y);
        return l.setSelection(g(m, k));
      }
      const Kt = (0, c.V3)({
          tableGroup: "block",
          cellContent: "paragraph",
          cellAttributes: {
            alignment: {
              default: "left",
              getFromDOM: (e) => e.style.textAlign || "left",
              setDOMAttr: (e, t) => {
                t.style = `text-align: ${e || "left"}`;
              },
            },
          },
        }),
        Xt = (0, s.yU)("table", () => ({
          ...Kt.table,
          parseMarkdown: {
            match: (e) => "table" === e.type,
            runner: (e, t, n) => {
              const r = t.align,
                i = t.children.map((e, t) => ({
                  ...e,
                  align: r,
                  isHeader: 0 === t,
                }));
              e.openNode(n), e.next(i), e.closeNode();
            },
          },
          toMarkdown: {
            match: (e) => "table" === e.type.name,
            runner: (e, t) => {
              var n;
              const r = null == (n = t.content.firstChild) ? void 0 : n.content;
              if (!r) return;
              const i = [];
              r.forEach((e) => {
                i.push(e.attrs.alignment);
              }),
                e.openNode("table", void 0, { align: i }),
                e.next(t.content),
                e.closeNode();
            },
          },
        }));
      Ct(Xt.node, { displayName: "NodeSchema<table>", group: "Table" }),
        Ct(Xt.ctx, { displayName: "NodeSchemaCtx<table>", group: "Table" });
      const Qt = (0, s.yU)("table_row", () => ({
        ...Kt.table_row,
        parseMarkdown: {
          match: (e) => "tableRow" === e.type,
          runner: (e, t, n) => {
            const r = t.align,
              i = t.children.map((e, n) => ({
                ...e,
                align: r[n],
                isHeader: t.isHeader,
              }));
            e.openNode(n), e.next(i), e.closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "table_row" === e.type.name,
          runner: (e, t) => {
            e.openNode("tableRow"), e.next(t.content), e.closeNode();
          },
        },
      }));
      Ct(Qt.node, { displayName: "NodeSchema<tableRow>", group: "Table" }),
        Ct(Qt.ctx, { displayName: "NodeSchemaCtx<tableRow>", group: "Table" });
      const en = (0, s.yU)("table_cell", () => ({
        ...Kt.table_cell,
        parseMarkdown: {
          match: (e) => "tableCell" === e.type && !e.isHeader,
          runner: (e, t, n) => {
            const r = t.align;
            e.openNode(n, { alignment: r })
              .openNode(e.schema.nodes.paragraph)
              .next(t.children)
              .closeNode()
              .closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "table_cell" === e.type.name,
          runner: (e, t) => {
            e.openNode("tableCell").next(t.content).closeNode();
          },
        },
      }));
      Ct(en.node, { displayName: "NodeSchema<tableCell>", group: "Table" }),
        Ct(en.ctx, { displayName: "NodeSchemaCtx<tableCell>", group: "Table" });
      const tn = (0, s.yU)("table_header", () => ({
        ...Kt.table_header,
        parseMarkdown: {
          match: (e) => "tableCell" === e.type && !!e.isHeader,
          runner: (e, t, n) => {
            const r = t.align;
            e.openNode(n, { alignment: r }),
              e.openNode(e.schema.nodes.paragraph),
              e.next(t.children),
              e.closeNode(),
              e.closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "table_header" === e.type.name,
          runner: (e, t) => {
            e.openNode("tableCell"), e.next(t.content), e.closeNode();
          },
        },
      }));
      Ct(tn.node, { displayName: "NodeSchema<tableHeader>", group: "Table" }),
        Ct(tn.ctx, {
          displayName: "NodeSchemaCtx<tableHeader>",
          group: "Table",
        });
      const nn = (0, s.Xt)(
        (e) =>
          new o.VK(/^\|(?<col>\d+)[xX](?<row>\d+)\|\s$/, (t, n, r, i) => {
            var o, s;
            const a = t.doc.resolve(r);
            if (
              !a
                .node(-1)
                .canReplaceWith(a.index(-1), a.indexAfter(-1), Xt.type(e))
            )
              return null;
            const c = Ft(
                e,
                Number(null == (o = n.groups) ? void 0 : o.row),
                Number(null == (s = n.groups) ? void 0 : s.col)
              ),
              u = t.tr.replaceRangeWith(r, i, c);
            return u.setSelection(l.Bs.create(u.doc, r + 3)).scrollIntoView();
          })
      );
      Ct(nn, {
        displayName: "InputRule<insertTableInputRule>",
        group: "Table",
      });
      const rn = (0, s.r1)("GoToPrevTableCell", () => () => (0, c.nA)(-1));
      Ct(rn, {
        displayName: "Command<goToPrevTableCellCommand>",
        group: "Table",
      });
      const on = (0, s.r1)("GoToNextTableCell", () => () => (0, c.nA)(1));
      Ct(on, {
        displayName: "Command<goToNextTableCellCommand>",
        group: "Table",
      });
      const sn = (0, s.r1)("BreakTable", (e) => () => (t, n) => {
        if (!(0, c.Lw)(t)) return !1;
        const { $head: r } = t.selection,
          o = r.after(),
          s = t.tr.replaceWith(o, o, i.F3.type(e).createAndFill());
        return (
          s.setSelection(l.Y1.near(s.doc.resolve(o), 1)).scrollIntoView(),
          null == n || n(s),
          !0
        );
      });
      Ct(sn, { displayName: "Command<breakTableCommand>", group: "Table" });
      const an = (0, s.r1)(
        "InsertTable",
        (e) =>
          ({ row: t, col: n } = {}) =>
          (r, i) => {
            const { selection: o, tr: s } = r,
              { from: a } = o,
              c = Ft(e, t, n),
              u = s.replaceSelectionWith(c),
              p = l.Y1.findFrom(u.doc.resolve(a), 1, !0);
            return p && u.setSelection(p), null == i || i(u), !0;
          }
      );
      Ct(an, { displayName: "Command<insertTableCommand>", group: "Table" });
      const ln = (0, s.r1)(
        "MoveRow",
        () =>
          ({ from: e, to: t } = {}) =>
          (n, r) => {
            const { tr: i } = n;
            return !!(null == r ? void 0 : r(Zt(i, e ?? 0, t ?? 0, !0)));
          }
      );
      Ct(ln, { displayName: "Command<moveRowCommand>", group: "Table" });
      const cn = (0, s.r1)(
        "MoveCol",
        () =>
          ({ from: e, to: t } = {}) =>
          (n, r) => {
            const { tr: i } = n;
            return !!(null == r ? void 0 : r(qt(i, e ?? 0, t ?? 0, !0)));
          }
      );
      Ct(cn, { displayName: "Command<moveColCommand>", group: "Table" });
      const un = (0, s.r1)("SelectRow", () => (e = 0) => (t, n) => {
        const { tr: r } = t;
        return !!(null == n ? void 0 : n(jt(e)(r)));
      });
      Ct(un, { displayName: "Command<selectRowCommand>", group: "Table" });
      const pn = (0, s.r1)("SelectCol", () => (e = 0) => (t, n) => {
        const { tr: r } = t;
        return !!(null == n ? void 0 : n(Ut(e)(r)));
      });
      Ct(pn, { displayName: "Command<selectColCommand>", group: "Table" });
      const dn = (0, s.r1)("SelectTable", () => () => (e, t) => {
        const { tr: n } = e;
        return !!(null == t ? void 0 : t(zt(n)));
      });
      Ct(dn, { displayName: "Command<selectTableCommand>", group: "Table" });
      const hn = (0, s.r1)("DeleteSelectedCells", () => () => (e, t) => {
        const { selection: n } = e;
        if (!(n instanceof c.Xc)) return !1;
        const r = n.isRowSelection(),
          i = n.isColSelection();
        return r && i ? (0, c.WQ)(e, t) : i ? (0, c.eA)(e, t) : (0, c.qK)(e, t);
      });
      Ct(hn, {
        displayName: "Command<deleteSelectedCellsCommand>",
        group: "Table",
      });
      const fn = (0, s.r1)("AddColBefore", () => () => c.I_);
      Ct(fn, { displayName: "Command<addColBeforeCommand>", group: "Table" });
      const mn = (0, s.r1)("AddColAfter", () => () => c.e2);
      Ct(mn, { displayName: "Command<addColAfterCommand>", group: "Table" });
      const gn = (0, s.r1)("AddRowBefore", (e) => () => (t, n) => {
        if (!(0, c.Lw)(t)) return !1;
        if (n) {
          const r = (0, c.zN)(t);
          n(Bt(e, t.tr, r, r.top));
        }
        return !0;
      });
      Ct(gn, { displayName: "Command<addRowBeforeCommand>", group: "Table" });
      const yn = (0, s.r1)("AddRowAfter", (e) => () => (t, n) => {
        if (!(0, c.Lw)(t)) return !1;
        if (n) {
          const r = (0, c.zN)(t);
          n(Bt(e, t.tr, r, r.bottom));
        }
        return !0;
      });
      Ct(yn, { displayName: "Command<addRowAfterCommand>", group: "Table" });
      const kn = (0, s.r1)(
        "SetAlign",
        () =>
          (e = "left") =>
            (0, c.wb)("alignment", e)
      );
      Ct(kn, { displayName: "Command<setAlignCommand>", group: "Table" });
      const bn = (0, s.Gv)("tableKeymap", {
        NextCell: {
          shortcuts: ["Mod-]", "Tab"],
          command: (e) => {
            const t = e.get(a.Xo);
            return () => t.call(on.key);
          },
        },
        PrevCell: {
          shortcuts: ["Mod-[", "Shift-Tab"],
          command: (e) => {
            const t = e.get(a.Xo);
            return () => t.call(rn.key);
          },
        },
        ExitTable: {
          shortcuts: ["Mod-Enter"],
          command: (e) => {
            const t = e.get(a.Xo);
            return () => t.call(sn.key);
          },
        },
      });
      Ct(bn.ctx, { displayName: "KeymapCtx<table>", group: "Table" }),
        Ct(bn.shortcuts, { displayName: "Keymap<table>", group: "Table" });
      const vn = "footnote_definition",
        wn = "footnoteDefinition",
        Sn = (0, s.yU)("footnote_definition", () => ({
          group: "block",
          content: "block+",
          defining: !0,
          attrs: { label: { default: "" } },
          parseDOM: [
            {
              tag: `dl[data-type="${vn}"]`,
              getAttrs: (e) => {
                if (!(e instanceof HTMLElement)) throw (0, r.GZ)(e);
                return { label: e.dataset.label };
              },
              contentElement: "dd",
            },
          ],
          toDOM: (e) => {
            const t = e.attrs.label;
            return [
              "dl",
              { "data-label": t, "data-type": vn },
              ["dt", t],
              ["dd", 0],
            ];
          },
          parseMarkdown: {
            match: ({ type: e }) => e === wn,
            runner: (e, t, n) => {
              e.openNode(n, { label: t.label }).next(t.children).closeNode();
            },
          },
          toMarkdown: {
            match: (e) => e.type.name === vn,
            runner: (e, t) => {
              e.openNode(wn, void 0, {
                label: t.attrs.label,
                identifier: t.attrs.label,
              })
                .next(t.content)
                .closeNode();
            },
          },
        }));
      Ct(Sn.ctx, {
        displayName: "NodeSchemaCtx<footnodeDef>",
        group: "footnote",
      }),
        Ct(Sn.node, {
          displayName: "NodeSchema<footnodeDef>",
          group: "footnote",
        });
      const xn = "footnote_reference",
        En = (0, s.yU)("footnote_reference", () => ({
          group: "inline",
          inline: !0,
          atom: !0,
          attrs: { label: { default: "" } },
          parseDOM: [
            {
              tag: `sup[data-type="${xn}"]`,
              getAttrs: (e) => {
                if (!(e instanceof HTMLElement)) throw (0, r.GZ)(e);
                return { label: e.dataset.label };
              },
            },
          ],
          toDOM: (e) => {
            const t = e.attrs.label;
            return ["sup", { "data-label": t, "data-type": xn }, t];
          },
          parseMarkdown: {
            match: ({ type: e }) => "footnoteReference" === e,
            runner: (e, t, n) => {
              e.addNode(n, { label: t.label });
            },
          },
          toMarkdown: {
            match: (e) => e.type.name === xn,
            runner: (e, t) => {
              e.addNode("footnoteReference", void 0, void 0, {
                label: t.attrs.label,
                identifier: t.attrs.label,
              });
            },
          },
        }));
      Ct(En.ctx, {
        displayName: "NodeSchemaCtx<footnodeRef>",
        group: "footnote",
      }),
        Ct(En.node, {
          displayName: "NodeSchema<footnodeRef>",
          group: "footnote",
        });
      const Nn = i.Yp.extendSchema((e) => (t) => {
        const n = e(t);
        return {
          ...n,
          attrs: { ...n.attrs, checked: { default: null } },
          parseDOM: [
            {
              tag: 'li[data-item-type="task"]',
              getAttrs: (e) => {
                if (!(e instanceof HTMLElement)) throw (0, r.GZ)(e);
                return {
                  label: e.dataset.label,
                  listType: e.dataset["list-type"],
                  spread: e.dataset.spread,
                  checked: e.dataset.checked
                    ? "true" === e.dataset.checked
                    : null,
                };
              },
            },
            ...((null == n ? void 0 : n.parseDOM) || []),
          ],
          toDOM: (e) =>
            n.toDOM && null == e.attrs.checked
              ? n.toDOM(e)
              : [
                  "li",
                  {
                    "data-item-type": "task",
                    "data-label": e.attrs.label,
                    "data-list-type": e.attrs.listType,
                    "data-spread": e.attrs.spread,
                    "data-checked": e.attrs.checked,
                  },
                  0,
                ],
          parseMarkdown: {
            match: ({ type: e }) => "listItem" === e,
            runner: (e, t, r) => {
              if (null == t.checked)
                return void n.parseMarkdown.runner(e, t, r);
              const i = null != t.label ? `${t.label}.` : "\u2022",
                o = null != t.checked ? !!t.checked : null,
                s = null != t.label ? "ordered" : "bullet",
                a = null != t.spread ? `${t.spread}` : "true";
              e.openNode(r, { label: i, listType: s, spread: a, checked: o }),
                e.next(t.children),
                e.closeNode();
            },
          },
          toMarkdown: {
            match: (e) => "list_item" === e.type.name,
            runner: (e, t) => {
              if (null == t.attrs.checked)
                return void n.toMarkdown.runner(e, t);
              const r = t.attrs.label,
                i = t.attrs.listType,
                o = "true" === t.attrs.spread,
                s = t.attrs.checked;
              e.openNode("listItem", void 0, {
                label: r,
                listType: i,
                spread: o,
                checked: s,
              }),
                e.next(t.content),
                e.closeNode();
            },
          },
        };
      });
      Ct(Nn, { displayName: "NodeSchema<listItem>", group: "ListItem" });
      const Tn = (0, s.Xt)(
        () =>
          new o.VK(/^\[(?<checked>\s|x)\]\s$/, (e, t, n, r) => {
            var i;
            const o = e.doc.resolve(n);
            let s = 0,
              a = o.node(s);
            for (; a && "list_item" !== a.type.name; ) s--, (a = o.node(s));
            if (!a || null != a.attrs.checked) return null;
            const l = "x" === (null == (i = t.groups) ? void 0 : i.checked),
              c = o.before(s),
              u = e.tr;
            return (
              u
                .deleteRange(n, r)
                .setNodeMarkup(c, void 0, { ...a.attrs, checked: l }),
              u
            );
          })
      );
      Ct(Tn, {
        displayName: "InputRule<wrapInTaskListInputRule>",
        group: "ListItem",
      });
      const An = [Lt, bn].flat(),
        In = [nn, Tn],
        Cn = (0, s.x6)((e) => {
          const t = new l.H$("MILKDOWN_AUTO_INSERT_ZERO_SPACE"),
            n = (t) => t.type === i.F3.type(e);
          return new l.Sy({
            key: t,
            props: {
              handleDOMEvents: {
                compositionstart(e) {
                  const { state: t, dispatch: r } = e,
                    { tr: i, selection: o } = t,
                    { $from: s } = o;
                  return (
                    u.Xh.safari &&
                      (0, c.Lw)(t) &&
                      o.empty &&
                      ((e) => n(e) && 2 === e.nodeSize)(s.parent) &&
                      r(i.insertText("\u2060", s.start())),
                    !1
                  );
                },
                compositionend(e) {
                  const { state: t, dispatch: r } = e,
                    { tr: i, selection: o } = t,
                    { $from: s } = o;
                  return (
                    u.Xh.safari &&
                      (0, c.Lw)(t) &&
                      o.empty &&
                      n(s.parent) &&
                      s.parent.textContent.startsWith("\u2060") &&
                      r(i.delete(s.start(), s.start() + 1)),
                    !1
                  );
                },
              },
            },
          });
        });
      Ct(Cn, {
        displayName: "Prose<autoInsertZeroSpaceInTablePlugin>",
        group: "Prose",
      });
      const On = (0, s.x6)(() => (0, c.VH)({}));
      Ct(On, { displayName: "Prose<columnResizingPlugin>", group: "Prose" });
      const Rn = (0, s.x6)(() => (0, c.G3)());
      Ct(Rn, { displayName: "Prose<tableEditingPlugin>", group: "Prose" });
      const Mn = (0, s.te)("remarkGFM", () => It);
      Ct(Mn.plugin, {
        displayName: "Remark<remarkGFMPlugin>",
        group: "Remark",
      }),
        Ct(Mn.options, {
          displayName: "RemarkConfig<remarkGFMPlugin>",
          group: "Remark",
        });
      const Ln = [Cn, On, Rn, Mn].flat(),
        Fn = [
          [Nn, Xt, Qt, tn, en, Sn, En, Ot, Rt].flat(),
          In,
          An,
          Ln,
          [on, rn, sn, an, ln, cn, un, pn, dn, hn, gn, yn, fn, mn, kn, Mt],
        ].flat();
    },
    551579: function (e, t, n) {
      n.d(t, {
        Xh: function () {
          return x;
        },
        zN: function () {
          return D;
        },
        NJ: function () {
          return T;
        },
        N2: function () {
          return P;
        },
        Kk: function () {
          return z;
        },
        a1: function () {
          return B;
        },
        pr: function () {
          return _;
        },
      });
      var r = n(616711);
      const i = "undefined" != typeof navigator ? navigator : null,
        o = "undefined" != typeof document ? document : null,
        s = (i && i.userAgent) || "",
        a = /Edge\/(\d+)/.exec(s),
        l = /MSIE \d/.exec(s),
        c = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(s),
        u = !!(l || c || a),
        p = l ? document.documentMode : c ? +c[1] : a ? +a[1] : 0,
        d = !u && /gecko\/(\d+)/i.test(s),
        h = d && +(/Firefox\/(\d+)/.exec(s) || [0, 0])[1],
        f = !u && /Chrome\/(\d+)/.exec(s),
        m = !!f,
        g = f ? +f[1] : 0,
        y = !u && !!i && /Apple Computer/.test(i.vendor),
        k = y && (/Mobile\/\w+/.test(s) || (!!i && i.maxTouchPoints > 2)),
        b = k || (!!i && /Mac/.test(i.platform)),
        v = /Android \d/.test(s),
        w = !!o && "webkitFontSmoothing" in o.documentElement.style,
        S = w
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      var x = Object.freeze({
        __proto__: null,
        android: v,
        chrome: m,
        chrome_version: g,
        gecko: d,
        gecko_version: h,
        ie: u,
        ie_version: p,
        ios: k,
        mac: b,
        safari: y,
        webkit: w,
        webkit_version: S,
      });
      function E(e, t, n, r, i, o) {
        if (e.composing) return !1;
        const s = e.state,
          a = s.doc.resolve(t);
        if (a.parent.type.spec.code) return !1;
        const l =
          a.parent.textBetween(
            Math.max(0, a.parentOffset - 500),
            a.parentOffset,
            void 0,
            "\ufffc"
          ) + r;
        for (let c = 0; c < i.length; c++) {
          const a = i[c].match.exec(l),
            u =
              a && a[0] && i[c].handler(s, a, t - (a[0].length - r.length), n);
          if (u)
            return (
              e.dispatch(
                u.setMeta(o, { transform: u, from: t, to: n, text: r })
              ),
              !0
            );
        }
        return !1;
      }
      const N = new r.H$("MILKDOWN_CUSTOM_INPUTRULES"),
        T = ({ rules: e }) => {
          const t = new r.Sy({
            key: N,
            isInputRules: !0,
            state: {
              init: () => null,
              apply(e, t) {
                const n = e.getMeta(this);
                return n || (e.selectionSet || e.docChanged ? null : t);
              },
            },
            props: {
              handleTextInput: (n, r, i, o) => E(n, r, i, o, e, t),
              handleDOMEvents: {
                compositionend: (n) => (
                  setTimeout(() => {
                    const { $cursor: r } = n.state.selection;
                    r && E(n, r.pos, r.pos, "", e, t);
                  }),
                  !1
                ),
              },
              handleKeyDown(n, r) {
                if ("Enter" !== r.key) return !1;
                const { $cursor: i } = n.state.selection;
                return !!i && E(n, i.pos, i.pos, "\n", e, t);
              },
            },
          });
          return t;
        };
      var A = Object.defineProperty,
        I = Object.defineProperties,
        C = Object.getOwnPropertyDescriptors,
        O = Object.getOwnPropertySymbols,
        R = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        L = (e, t, n) =>
          t in e
            ? A(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      function F(e = 0, t = 0, n = 0) {
        return Math.min(Math.max(e, t), n);
      }
      function _(e, t, n) {
        const r = e.state.doc.content.size,
          i = F(t, 0, r),
          o = F(n, 0, r),
          s = e.coordsAtPos(i),
          a = e.coordsAtPos(o, -1),
          l = Math.min(s.top, a.top),
          c = Math.max(s.bottom, a.bottom),
          u = Math.min(s.left, a.left),
          p = Math.max(s.right, a.right),
          d = {
            top: l,
            bottom: c,
            left: u,
            right: p,
            width: p - u,
            height: c - l,
            x: u,
            y: l,
          };
        return (
          (h = ((e, t) => {
            for (var n in t || (t = {})) R.call(t, n) && L(e, n, t[n]);
            if (O) for (var n of O(t)) M.call(t, n) && L(e, n, t[n]);
            return e;
          })({}, d)),
          I(h, C({ toJSON: () => d }))
        );
        var h;
      }
      const D = (e) => Object.assign(Object.create(e), e).setTime(Date.now()),
        P = (e) => (t, n) =>
          ((e, t = !0) => {
            const n = [];
            return (
              e.descendants((e, r) => {
                if ((n.push({ node: e, pos: r }), !t)) return !1;
              }),
              n
            );
          })(t, n).filter((t) => e(t.node)),
        z = (e) => (t) =>
          ((e) => (t) => {
            for (let n = t.depth; n > 0; n--) {
              const r = t.node(n);
              if (e(r))
                return {
                  pos: n > 0 ? t.before(n) : 0,
                  start: t.start(n),
                  depth: n,
                  node: r,
                };
            }
          })(e)(t.$from),
        B = (e, t) => {
          if (!(e instanceof r.qv)) return;
          const { node: n, $from: i } = e;
          return ((e, t) =>
            (Array.isArray(e) && e.includes(t.type)) || t.type === e)(t, n)
            ? { node: n, pos: i.pos, start: i.start(i.depth), depth: i.depth }
            : void 0;
        };
    },
    492104: function (e, t, n) {
      n.d(t, {
        YR: function () {
          return re;
        },
        uJ: function () {
          return Z;
        },
        w9: function () {
          return K;
        },
        ym: function () {
          return q;
        },
      });
      var r = n(102396);
      const i = Math.pow(2, 16);
      function o(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class a {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && a.empty))
            return a.empty;
        }
        recover(e) {
          let t = 0,
            n = o(e);
          if (!this.inverted)
            for (let r = 0; r < n; r++)
              t += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / i;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            o = this.inverted ? 2 : 1,
            a = this.inverted ? 1 : 2;
          for (let l = 0; l < this.ranges.length; l += 3) {
            let c = this.ranges[l] - (this.inverted ? r : 0);
            if (c > e) break;
            let u = this.ranges[l + o],
              p = this.ranges[l + a],
              d = c + u;
            if (e <= d) {
              let o =
                c + r + ((u ? (e == c ? -1 : e == d ? 1 : t) : t) < 0 ? 0 : p);
              if (n) return o;
              let a = e == (t < 0 ? c : d) ? null : l / 3 + (e - c) * i,
                h = e == c ? 2 : e == d ? 1 : 4;
              return (t < 0 ? e != c : e != d) && (h |= 8), new s(o, h, a);
            }
            r += p - u;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = o(t),
            i = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let o = 0; o < this.ranges.length; o += 3) {
            let t = this.ranges[o] - (this.inverted ? n : 0);
            if (t > e) break;
            let a = this.ranges[o + i];
            if (e <= t + a && o == 3 * r) return !0;
            n += this.ranges[o + s] - a;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
              s = o - (this.inverted ? i : 0),
              a = o + (this.inverted ? 0 : i),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + l, a, a + c), (i += c - l);
          }
        }
        invert() {
          return new a(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? a.empty : new a(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      a.empty = new a([]);
      const l = Object.create(null);
      class c {
        getMap() {
          return a.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = l[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in l)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (l[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class u {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new u(e, null);
        }
        static fail(e) {
          return new u(null, e);
        }
        static fromReplace(e, t, n, i) {
          try {
            return u.ok(e.replace(t, n, i));
          } catch (o) {
            if (o instanceof r.e4) return u.fail(o.message);
            throw o;
          }
        }
      }
      function p(e, t, n) {
        let i = [];
        for (let r = 0; r < e.childCount; r++) {
          let o = e.child(r);
          o.content.size && (o = o.copy(p(o.content, t, o))),
            o.isInline && (o = t(o, n, r)),
            i.push(o);
        }
        return r.HY.fromArray(i);
      }
      class d extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            i = n.node(n.sharedDepth(this.to)),
            o = new r.p2(
              p(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                i
              ),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, o);
        }
        invert() {
          return new h(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new d(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof d &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new d(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new d(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addMark", d);
      class h extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.p2(
              p(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new d(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new h(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof h &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new h(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new h(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeMark", h);
      class f extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new f(this.pos, t.marks[n]);
              return new f(this.pos, this.mark);
            }
          }
          return new m(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new f(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new f(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addNodeMark", f);
      class m extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new f(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON"
            );
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeNodeMark", m);
      class g extends c {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && k(e, this.from, this.to)
            ? u.fail("Structure replace would overwrite content")
            : u.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new a([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new g(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to)
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new g(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof g) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd
                    );
              return new g(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.p2.empty
                : new r.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd
                  );
            return new g(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new g(t.from, t.to, r.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      c.jsonID("replace", g);
      class y extends c {
        constructor(e, t, n, r, i, o, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = o),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (k(e, this.from, this.gapFrom) || k(e, this.gapTo, this.to))
          )
            return u.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return u.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? u.fromReplace(e, this.from, this.to, n)
            : u.fail("Content does not fit in gap");
        }
        getMap() {
          return new a([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new y(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            i = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos
            ? null
            : new y(
                t.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON"
            );
          return new y(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            r.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure
          );
        }
      }
      function k(e, t, n) {
        let r = e.resolve(t),
          i = n - t,
          o = r.depth;
        for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
          o--, i--;
        if (i > 0) {
          let e = r.node(o).maybeChild(r.indexAfter(o));
          for (; i > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), i--;
          }
        }
        return !1;
      }
      function b(e, t, n) {
        return (
          (0 == t || e.canReplace(t, e.childCount)) &&
          (n == e.childCount || e.canReplace(0, n))
        );
      }
      function v(e) {
        let t = e.parent.content.cutByIndex(e.startIndex, e.endIndex);
        for (let n = e.depth; ; --n) {
          let r = e.$from.node(n),
            i = e.$from.index(n),
            o = e.$to.indexAfter(n);
          if (n < e.depth && r.canReplace(i, o, t)) return n;
          if (0 == n || r.type.spec.isolating || !b(r, i, o)) break;
        }
        return null;
      }
      function w(e) {
        return { type: e, attrs: null };
      }
      function S(e, t, n = 1, r) {
        let i = e.resolve(t),
          o = i.depth - n,
          s = (r && r[r.length - 1]) || i.parent;
        if (
          o < 0 ||
          i.parent.type.spec.isolating ||
          !i.parent.canReplace(i.index(), i.parent.childCount) ||
          !s.type.validContent(
            i.parent.content.cutByIndex(i.index(), i.parent.childCount)
          )
        )
          return !1;
        for (let c = i.depth - 1, u = n - 2; c > o; c--, u--) {
          let e = i.node(c),
            t = i.index(c);
          if (e.type.spec.isolating) return !1;
          let n = e.content.cutByIndex(t, e.childCount),
            o = r && r[u + 1];
          o && (n = n.replaceChild(0, o.type.create(o.attrs)));
          let s = (r && r[u]) || e;
          if (!e.canReplace(t + 1, e.childCount) || !s.type.validContent(n))
            return !1;
        }
        let a = i.indexAfter(o),
          l = r && r[0];
        return i.node(o).canReplaceWith(a, a, l ? l.type : i.node(o + 1).type);
      }
      function x(e, t) {
        let n = e.resolve(t),
          r = n.index();
        return E(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
      }
      function E(e, t) {
        return !(!e || !t || e.isLeaf || !e.canAppend(t));
      }
      function N(e, t, n = t, i = r.p2.empty) {
        if (t == n && !i.size) return null;
        let o = e.resolve(t),
          s = e.resolve(n);
        return T(o, s, i) ? new g(t, n, i) : new A(o, s, i).fit();
      }
      function T(e, t, n) {
        return (
          !n.openStart &&
          !n.openEnd &&
          e.start() == t.start() &&
          e.parent.canReplace(e.index(), t.index(), n.content)
        );
      }
      c.jsonID("replaceAround", y);
      class A {
        constructor(e, t, n) {
          (this.$from = e),
            (this.$to = t),
            (this.unplaced = n),
            (this.frontier = []),
            (this.placed = r.HY.empty);
          for (let r = 0; r <= e.depth; r++) {
            let t = e.node(r);
            this.frontier.push({
              type: t.type,
              match: t.contentMatchAt(e.indexAfter(r)),
            });
          }
          for (let i = e.depth; i > 0; i--)
            this.placed = r.HY.from(e.node(i).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let e = this.findFittable();
            e ? this.placeNodes(e) : this.openMore() || this.dropNode();
          }
          let e = this.mustMoveInline(),
            t = this.placed.size - this.depth - this.$from.depth,
            n = this.$from,
            i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
          if (!i) return null;
          let o = this.placed,
            s = n.depth,
            a = i.depth;
          for (; s && a && 1 == o.childCount; )
            (o = o.firstChild.content), s--, a--;
          let l = new r.p2(o, s, a);
          return e > -1
            ? new y(n.pos, e, this.$to.pos, this.$to.end(), l, t)
            : l.size || n.pos != this.$to.pos
            ? new g(n.pos, i.pos, l)
            : null;
        }
        findFittable() {
          let e = this.unplaced.openStart;
          for (
            let t = this.unplaced.content, n = 0, r = this.unplaced.openEnd;
            n < e;
            n++
          ) {
            let i = t.firstChild;
            if (
              (t.childCount > 1 && (r = 0), i.type.spec.isolating && r <= n)
            ) {
              e = n;
              break;
            }
            t = i.content;
          }
          for (let t = 1; t <= 2; t++)
            for (let n = 1 == t ? e : this.unplaced.openStart; n >= 0; n--) {
              let e,
                i = null;
              n
                ? ((i = O(this.unplaced.content, n - 1).firstChild),
                  (e = i.content))
                : (e = this.unplaced.content);
              let o = e.firstChild;
              for (let s = this.depth; s >= 0; s--) {
                let e,
                  { type: a, match: l } = this.frontier[s],
                  c = null;
                if (
                  1 == t &&
                  (o
                    ? l.matchType(o.type) ||
                      (c = l.fillBefore(r.HY.from(o), !1))
                    : i && a.compatibleContent(i.type))
                )
                  return {
                    sliceDepth: n,
                    frontierDepth: s,
                    parent: i,
                    inject: c,
                  };
                if (2 == t && o && (e = l.findWrapping(o.type)))
                  return {
                    sliceDepth: n,
                    frontierDepth: s,
                    parent: i,
                    wrap: e,
                  };
                if (i && l.matchType(i.type)) break;
              }
            }
        }
        openMore() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            i = O(e, t);
          return (
            !(!i.childCount || i.firstChild.isLeaf) &&
            ((this.unplaced = new r.p2(
              e,
              t + 1,
              Math.max(n, i.size + t >= e.size - n ? t + 1 : 0)
            )),
            !0)
          );
        }
        dropNode() {
          let { content: e, openStart: t, openEnd: n } = this.unplaced,
            i = O(e, t);
          if (i.childCount <= 1 && t > 0) {
            let o = e.size - t <= t + i.size;
            this.unplaced = new r.p2(I(e, t - 1, 1), t - 1, o ? t - 1 : n);
          } else this.unplaced = new r.p2(I(e, t, 1), t, n);
        }
        placeNodes({
          sliceDepth: e,
          frontierDepth: t,
          parent: n,
          inject: i,
          wrap: o,
        }) {
          for (; this.depth > t; ) this.closeFrontierNode();
          if (o) for (let r = 0; r < o.length; r++) this.openFrontierNode(o[r]);
          let s = this.unplaced,
            a = n ? n.content : s.content,
            l = s.openStart - e,
            c = 0,
            u = [],
            { match: p, type: d } = this.frontier[t];
          if (i) {
            for (let e = 0; e < i.childCount; e++) u.push(i.child(e));
            p = p.matchFragment(i);
          }
          let h = a.size + e - (s.content.size - s.openEnd);
          for (; c < a.childCount; ) {
            let e = a.child(c),
              t = p.matchType(e.type);
            if (!t) break;
            c++,
              (c > 1 || 0 == l || e.content.size) &&
                ((p = t),
                u.push(
                  R(
                    e.mark(d.allowedMarks(e.marks)),
                    1 == c ? l : 0,
                    c == a.childCount ? h : -1
                  )
                ));
          }
          let f = c == a.childCount;
          f || (h = -1),
            (this.placed = C(this.placed, t, r.HY.from(u))),
            (this.frontier[t].match = p),
            f &&
              h < 0 &&
              n &&
              n.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode();
          for (let r = 0, m = a; r < h; r++) {
            let e = m.lastChild;
            this.frontier.push({
              type: e.type,
              match: e.contentMatchAt(e.childCount),
            }),
              (m = e.content);
          }
          this.unplaced = f
            ? 0 == e
              ? r.p2.empty
              : new r.p2(
                  I(s.content, e - 1, 1),
                  e - 1,
                  h < 0 ? s.openEnd : e - 1
                )
            : new r.p2(I(s.content, e, c), s.openStart, s.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let e,
            t = this.frontier[this.depth];
          if (
            !t.type.isTextblock ||
            !M(this.$to, this.$to.depth, t.type, t.match, !1) ||
            (this.$to.depth == this.depth &&
              (e = this.findCloseLevel(this.$to)) &&
              e.depth == this.depth)
          )
            return -1;
          let { depth: n } = this.$to,
            r = this.$to.after(n);
          for (; n > 1 && r == this.$to.end(--n); ) ++r;
          return r;
        }
        findCloseLevel(e) {
          e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
            let { match: n, type: r } = this.frontier[t],
              i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)),
              o = M(e, t, r, n, i);
            if (o) {
              for (let n = t - 1; n >= 0; n--) {
                let { match: t, type: r } = this.frontier[n],
                  i = M(e, n, r, t, !0);
                if (!i || i.childCount) continue e;
              }
              return {
                depth: t,
                fit: o,
                move: i ? e.doc.resolve(e.after(t + 1)) : e,
              };
            }
          }
        }
        close(e) {
          let t = this.findCloseLevel(e);
          if (!t) return null;
          for (; this.depth > t.depth; ) this.closeFrontierNode();
          t.fit.childCount && (this.placed = C(this.placed, t.depth, t.fit)),
            (e = t.move);
          for (let n = t.depth + 1; n <= e.depth; n++) {
            let t = e.node(n),
              r = t.type.contentMatch.fillBefore(t.content, !0, e.index(n));
            this.openFrontierNode(t.type, t.attrs, r);
          }
          return e;
        }
        openFrontierNode(e, t = null, n) {
          let i = this.frontier[this.depth];
          (i.match = i.match.matchType(e)),
            (this.placed = C(
              this.placed,
              this.depth,
              r.HY.from(e.create(t, n))
            )),
            this.frontier.push({ type: e, match: e.contentMatch });
        }
        closeFrontierNode() {
          let e = this.frontier.pop().match.fillBefore(r.HY.empty, !0);
          e.childCount &&
            (this.placed = C(this.placed, this.frontier.length, e));
        }
      }
      function I(e, t, n) {
        return 0 == t
          ? e.cutByIndex(n, e.childCount)
          : e.replaceChild(
              0,
              e.firstChild.copy(I(e.firstChild.content, t - 1, n))
            );
      }
      function C(e, t, n) {
        return 0 == t
          ? e.append(n)
          : e.replaceChild(
              e.childCount - 1,
              e.lastChild.copy(C(e.lastChild.content, t - 1, n))
            );
      }
      function O(e, t) {
        for (let n = 0; n < t; n++) e = e.firstChild.content;
        return e;
      }
      function R(e, t, n) {
        if (t <= 0) return e;
        let i = e.content;
        return (
          t > 1 &&
            (i = i.replaceChild(
              0,
              R(i.firstChild, t - 1, 1 == i.childCount ? n - 1 : 0)
            )),
          t > 0 &&
            ((i = e.type.contentMatch.fillBefore(i).append(i)),
            n <= 0 &&
              (i = i.append(
                e.type.contentMatch.matchFragment(i).fillBefore(r.HY.empty, !0)
              ))),
          e.copy(i)
        );
      }
      function M(e, t, n, r, i) {
        let o = e.node(t),
          s = i ? e.indexAfter(t) : e.index(t);
        if (s == o.childCount && !n.compatibleContent(o.type)) return null;
        let a = r.fillBefore(o.content, !0, s);
        return a &&
          !(function (e, t, n) {
            for (let r = n; r < t.childCount; r++)
              if (!e.allowsMarks(t.child(r).marks)) return !0;
            return !1;
          })(n, o.content, s)
          ? a
          : null;
      }
      class L extends c {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let r in t.attrs) n[r] = t.attrs[r];
          n[this.attr] = this.value;
          let i = t.type.create(n, null, t.marks);
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(i), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return a.empty;
        }
        invert(e) {
          return new L(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new L(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new L(t.pos, t.attr, t.value);
        }
      }
      c.jsonID("attr", L);
      let F = class extends Error {};
      (F = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((F.prototype = Object.create(Error.prototype)).constructor = F),
        (F.prototype.name = "TransformError");
      var _ = n(616711);
      const D = (e, t) =>
        !e.selection.empty &&
        (t && t(e.tr.deleteSelection().scrollIntoView()), !0);
      function P(e, t) {
        let { $cursor: n } = e.selection;
        return !n || (t ? !t.endOfTextblock("backward", e) : n.parentOffset > 0)
          ? null
          : n;
      }
      function z(e, t, n = !1) {
        for (let r = e; r; r = "start" == t ? r.firstChild : r.lastChild) {
          if (r.isTextblock) return !0;
          if (n && 1 != r.childCount) return !1;
        }
        return !1;
      }
      function B(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            if (e.index(t) > 0) return e.doc.resolve(e.before(t + 1));
            if (e.node(t).type.spec.isolating) break;
          }
        return null;
      }
      function $(e, t) {
        let { $cursor: n } = e.selection;
        return !n ||
          (t
            ? !t.endOfTextblock("forward", e)
            : n.parentOffset < n.parent.content.size)
          ? null
          : n;
      }
      function j(e) {
        if (!e.parent.type.spec.isolating)
          for (let t = e.depth - 1; t >= 0; t--) {
            let n = e.node(t);
            if (e.index(t) + 1 < n.childCount)
              return e.doc.resolve(e.after(t + 1));
            if (n.type.spec.isolating) break;
          }
        return null;
      }
      function U(e) {
        for (let t = 0; t < e.edgeCount; t++) {
          let { type: n } = e.edge(t);
          if (n.isTextblock && !n.hasRequiredAttrs()) return n;
        }
        return null;
      }
      const H = (e, t) => {
        let { $from: n, $to: r } = e.selection;
        if (e.selection instanceof _.qv && e.selection.node.isBlock)
          return (
            !(!n.parentOffset || !S(e.doc, n.pos)) &&
            (t && t(e.tr.split(n.pos).scrollIntoView()), !0)
          );
        if (!n.parent.isBlock) return !1;
        if (t) {
          let i = r.parentOffset == r.parent.content.size,
            o = e.tr;
          (e.selection instanceof _.Bs || e.selection instanceof _.C1) &&
            o.deleteSelection();
          let s =
              0 == n.depth
                ? null
                : U(n.node(-1).contentMatchAt(n.indexAfter(-1))),
            a = J && J(r.parent, i),
            l = a ? [a] : i && s ? [{ type: s }] : void 0,
            c = S(o.doc, o.mapping.map(n.pos), 1, l);
          if (
            (l ||
              c ||
              !S(o.doc, o.mapping.map(n.pos), 1, s ? [{ type: s }] : void 0) ||
              (s && (l = [{ type: s }]), (c = !0)),
            c &&
              (o.split(o.mapping.map(n.pos), 1, l),
              !i && !n.parentOffset && n.parent.type != s))
          ) {
            let e = o.mapping.map(n.before()),
              t = o.doc.resolve(e);
            s &&
              n.node(-1).canReplaceWith(t.index(), t.index() + 1, s) &&
              o.setNodeMarkup(o.mapping.map(n.before()), s);
          }
          t(o.scrollIntoView());
        }
        return !0;
      };
      var J;
      function W(e, t, n) {
        let i,
          o,
          s = t.nodeBefore,
          a = t.nodeAfter;
        if (s.type.spec.isolating || a.type.spec.isolating) return !1;
        if (
          (function (e, t, n) {
            let r = t.nodeBefore,
              i = t.nodeAfter,
              o = t.index();
            return (
              !!(r && i && r.type.compatibleContent(i.type)) &&
              (!r.content.size && t.parent.canReplace(o - 1, o)
                ? (n &&
                    n(e.tr.delete(t.pos - r.nodeSize, t.pos).scrollIntoView()),
                  !0)
                : !(
                    !t.parent.canReplace(o, o + 1) ||
                    (!i.isTextblock && !x(e.doc, t.pos))
                  ) &&
                  (n &&
                    n(
                      e.tr
                        .clearIncompatible(
                          t.pos,
                          r.type,
                          r.contentMatchAt(r.childCount)
                        )
                        .join(t.pos)
                        .scrollIntoView()
                    ),
                  !0))
            );
          })(e, t, n)
        )
          return !0;
        let l = t.parent.canReplace(t.index(), t.index() + 1);
        if (
          l &&
          (i = (o = s.contentMatchAt(s.childCount)).findWrapping(a.type)) &&
          o.matchType(i[0] || a.type).validEnd
        ) {
          if (n) {
            let o = t.pos + a.nodeSize,
              l = r.HY.empty;
            for (let e = i.length - 1; e >= 0; e--)
              l = r.HY.from(i[e].create(null, l));
            l = r.HY.from(s.copy(l));
            let c = e.tr.step(
                new y(t.pos - 1, o, t.pos, o, new r.p2(l, 1, 0), i.length, !0)
              ),
              u = o + 2 * i.length;
            x(c.doc, u) && c.join(u), n(c.scrollIntoView());
          }
          return !0;
        }
        let c = _.Y1.findFrom(t, 1),
          u = c && c.$from.blockRange(c.$to),
          p = u && v(u);
        if (null != p && p >= t.depth)
          return n && n(e.tr.lift(u, p).scrollIntoView()), !0;
        if (l && z(a, "start", !0) && z(s, "end")) {
          let i = s,
            o = [];
          for (; o.push(i), !i.isTextblock; ) i = i.lastChild;
          let l = a,
            c = 1;
          for (; !l.isTextblock; l = l.firstChild) c++;
          if (i.canReplace(i.childCount, i.childCount, l.content)) {
            if (n) {
              let i = r.HY.empty;
              for (let e = o.length - 1; e >= 0; e--)
                i = r.HY.from(o[e].copy(i));
              n(
                e.tr
                  .step(
                    new y(
                      t.pos - o.length,
                      t.pos + a.nodeSize,
                      t.pos + c,
                      t.pos + a.nodeSize - c,
                      new r.p2(i, o.length, 0),
                      0,
                      !0
                    )
                  )
                  .scrollIntoView()
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function G(e) {
        return function (t, n) {
          let r = t.selection,
            i = e < 0 ? r.$from : r.$to,
            o = i.depth;
          for (; i.node(o).isInline; ) {
            if (!o) return !1;
            o--;
          }
          return (
            !!i.node(o).isTextblock &&
            (n &&
              n(
                t.tr.setSelection(
                  _.Bs.create(t.doc, e < 0 ? i.start(o) : i.end(o))
                )
              ),
            !0)
          );
        };
      }
      const V = G(-1),
        Y = G(1);
      function q(e, t = null) {
        return function (n, r) {
          let { $from: i, $to: o } = n.selection,
            s = i.blockRange(o),
            a =
              s &&
              (function (e, t, n = null, r = e) {
                let i = (function (e, t) {
                    let { parent: n, startIndex: r, endIndex: i } = e,
                      o = n.contentMatchAt(r).findWrapping(t);
                    if (!o) return null;
                    let s = o.length ? o[0] : t;
                    return n.canReplaceWith(r, i, s) ? o : null;
                  })(e, t),
                  o =
                    i &&
                    (function (e, t) {
                      let { parent: n, startIndex: r, endIndex: i } = e,
                        o = n.child(r),
                        s = t.contentMatch.findWrapping(o.type);
                      if (!s) return null;
                      let a = (s.length ? s[s.length - 1] : t).contentMatch;
                      for (let l = r; a && l < i; l++)
                        a = a.matchType(n.child(l).type);
                      return a && a.validEnd ? s : null;
                    })(r, t);
                return o
                  ? i.map(w).concat({ type: t, attrs: n }).concat(o.map(w))
                  : null;
              })(s, e, t);
          return !!a && (r && r(n.tr.wrap(s, a).scrollIntoView()), !0);
        };
      }
      function Z(e, t = null) {
        return function (n, r) {
          let i = !1;
          for (let o = 0; o < n.selection.ranges.length && !i; o++) {
            let {
              $from: { pos: r },
              $to: { pos: s },
            } = n.selection.ranges[o];
            n.doc.nodesBetween(r, s, (r, o) => {
              if (i) return !1;
              if (r.isTextblock && !r.hasMarkup(e, t))
                if (r.type == e) i = !0;
                else {
                  let t = n.doc.resolve(o),
                    r = t.index();
                  i = t.parent.canReplaceWith(r, r + 1, e);
                }
            });
          }
          if (!i) return !1;
          if (r) {
            let i = n.tr;
            for (let r = 0; r < n.selection.ranges.length; r++) {
              let {
                $from: { pos: o },
                $to: { pos: s },
              } = n.selection.ranges[r];
              i.setBlockType(o, s, e, t);
            }
            r(i.scrollIntoView());
          }
          return !0;
        };
      }
      function K(e, t = null) {
        return function (n, r) {
          let { empty: i, $cursor: o, ranges: s } = n.selection;
          if (
            (i && !o) ||
            !(function (e, t, n) {
              for (let r = 0; r < t.length; r++) {
                let { $from: i, $to: o } = t[r],
                  s =
                    0 == i.depth && e.inlineContent && e.type.allowsMarkType(n);
                if (
                  (e.nodesBetween(i.pos, o.pos, (e) => {
                    if (s) return !1;
                    s = e.inlineContent && e.type.allowsMarkType(n);
                  }),
                  s)
                )
                  return !0;
              }
              return !1;
            })(n.doc, s, e)
          )
            return !1;
          if (r)
            if (o)
              e.isInSet(n.storedMarks || o.marks())
                ? r(n.tr.removeStoredMark(e))
                : r(n.tr.addStoredMark(e.create(t)));
            else {
              let i = !1,
                o = n.tr;
              for (let t = 0; !i && t < s.length; t++) {
                let { $from: r, $to: o } = s[t];
                i = n.doc.rangeHasMark(r.pos, o.pos, e);
              }
              for (let n = 0; n < s.length; n++) {
                let { $from: r, $to: a } = s[n];
                if (i) o.removeMark(r.pos, a.pos, e);
                else {
                  let n = r.pos,
                    i = a.pos,
                    s = r.nodeAfter,
                    l = a.nodeBefore,
                    c = s && s.isText ? /^\s*/.exec(s.text)[0].length : 0,
                    u = l && l.isText ? /\s*$/.exec(l.text)[0].length : 0;
                  n + c < i && ((n += c), (i -= u)),
                    o.addMark(n, i, e.create(t));
                }
              }
              r(o.scrollIntoView());
            }
          return !0;
        };
      }
      function X(...e) {
        return function (t, n, r) {
          for (let i = 0; i < e.length; i++) if (e[i](t, n, r)) return !0;
          return !1;
        };
      }
      let Q = X(
          D,
          (e, t, n) => {
            let i = P(e, n);
            if (!i) return !1;
            let o = B(i);
            if (!o) {
              let n = i.blockRange(),
                r = n && v(n);
              return (
                null != r && (t && t(e.tr.lift(n, r).scrollIntoView()), !0)
              );
            }
            let s = o.nodeBefore;
            if (!s.type.spec.isolating && W(e, o, t)) return !0;
            if (
              0 == i.parent.content.size &&
              (z(s, "end") || _.qv.isSelectable(s))
            ) {
              let n = N(e.doc, i.before(), i.after(), r.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    z(s, "end")
                      ? _.Y1.findFrom(
                          r.doc.resolve(r.mapping.map(o.pos, -1)),
                          -1
                        )
                      : _.qv.create(r.doc, o.pos - s.nodeSize)
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!s.isAtom || o.depth != i.depth - 1) &&
              (t && t(e.tr.delete(o.pos - s.nodeSize, o.pos).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: i } = e.selection,
              o = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (n ? !n.endOfTextblock("backward", e) : r.parentOffset > 0)
                return !1;
              o = B(r);
            }
            let s = o && o.nodeBefore;
            return (
              !(!s || !_.qv.isSelectable(s)) &&
              (t &&
                t(
                  e.tr
                    .setSelection(_.qv.create(e.doc, o.pos - s.nodeSize))
                    .scrollIntoView()
                ),
              !0)
            );
          }
        ),
        ee = X(
          D,
          (e, t, n) => {
            let i = $(e, n);
            if (!i) return !1;
            let o = j(i);
            if (!o) return !1;
            let s = o.nodeAfter;
            if (W(e, o, t)) return !0;
            if (
              0 == i.parent.content.size &&
              (z(s, "start") || _.qv.isSelectable(s))
            ) {
              let n = N(e.doc, i.before(), i.after(), r.p2.empty);
              if (n && n.slice.size < n.to - n.from) {
                if (t) {
                  let r = e.tr.step(n);
                  r.setSelection(
                    z(s, "start")
                      ? _.Y1.findFrom(r.doc.resolve(r.mapping.map(o.pos)), 1)
                      : _.qv.create(r.doc, r.mapping.map(o.pos))
                  ),
                    t(r.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!s.isAtom || o.depth != i.depth - 1) &&
              (t && t(e.tr.delete(o.pos, o.pos + s.nodeSize).scrollIntoView()),
              !0)
            );
          },
          (e, t, n) => {
            let { $head: r, empty: i } = e.selection,
              o = r;
            if (!i) return !1;
            if (r.parent.isTextblock) {
              if (
                n
                  ? !n.endOfTextblock("forward", e)
                  : r.parentOffset < r.parent.content.size
              )
                return !1;
              o = j(r);
            }
            let s = o && o.nodeAfter;
            return (
              !(!s || !_.qv.isSelectable(s)) &&
              (t &&
                t(
                  e.tr.setSelection(_.qv.create(e.doc, o.pos)).scrollIntoView()
                ),
              !0)
            );
          }
        );
      const te = {
          Enter: X(
            (e, t) => {
              let { $head: n, $anchor: r } = e.selection;
              return (
                !(!n.parent.type.spec.code || !n.sameParent(r)) &&
                (t && t(e.tr.insertText("\n").scrollIntoView()), !0)
              );
            },
            (e, t) => {
              let n = e.selection,
                { $from: r, $to: i } = n;
              if (
                n instanceof _.C1 ||
                r.parent.inlineContent ||
                i.parent.inlineContent
              )
                return !1;
              let o = U(i.parent.contentMatchAt(i.indexAfter()));
              if (!o || !o.isTextblock) return !1;
              if (t) {
                let n = (
                    !r.parentOffset && i.index() < i.parent.childCount ? r : i
                  ).pos,
                  s = e.tr.insert(n, o.createAndFill());
                s.setSelection(_.Bs.create(s.doc, n + 1)),
                  t(s.scrollIntoView());
              }
              return !0;
            },
            (e, t) => {
              let { $cursor: n } = e.selection;
              if (!n || n.parent.content.size) return !1;
              if (n.depth > 1 && n.after() != n.end(-1)) {
                let r = n.before();
                if (S(e.doc, r))
                  return t && t(e.tr.split(r).scrollIntoView()), !0;
              }
              let r = n.blockRange(),
                i = r && v(r);
              return (
                null != i && (t && t(e.tr.lift(r, i).scrollIntoView()), !0)
              );
            },
            H
          ),
          "Mod-Enter": (e, t) => {
            let { $head: n, $anchor: r } = e.selection;
            if (!n.parent.type.spec.code || !n.sameParent(r)) return !1;
            let i = n.node(-1),
              o = n.indexAfter(-1),
              s = U(i.contentMatchAt(o));
            if (!s || !i.canReplaceWith(o, o, s)) return !1;
            if (t) {
              let r = n.after(),
                i = e.tr.replaceWith(r, r, s.createAndFill());
              i.setSelection(_.Y1.near(i.doc.resolve(r), 1)),
                t(i.scrollIntoView());
            }
            return !0;
          },
          Backspace: Q,
          "Mod-Backspace": Q,
          "Shift-Backspace": Q,
          Delete: ee,
          "Mod-Delete": ee,
          "Mod-a": (e, t) => (t && t(e.tr.setSelection(new _.C1(e.doc))), !0),
        },
        ne = {
          "Ctrl-h": te.Backspace,
          "Alt-Backspace": te["Mod-Backspace"],
          "Ctrl-d": te.Delete,
          "Ctrl-Alt-Backspace": te["Mod-Delete"],
          "Alt-Delete": te["Mod-Delete"],
          "Alt-d": te["Mod-Delete"],
          "Ctrl-a": V,
          "Ctrl-e": Y,
        };
      for (let ie in te) ne[ie] = te[ie];
      const re = (
        "undefined" != typeof navigator
          ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
          : !("undefined" == typeof os || !os.platform) &&
            "darwin" == os.platform()
      )
        ? ne
        : te;
    },
    166180: function (e, t, n) {
      n.d(t, {
        WJ: function () {
          return d;
        },
        Pu: function () {
          return g;
        },
        nj: function () {
          return b;
        },
      });
      var r = n(102396);
      const i = Math.pow(2, 16);
      function o(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class a {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && a.empty))
            return a.empty;
        }
        recover(e) {
          let t = 0,
            n = o(e);
          if (!this.inverted)
            for (let r = 0; r < n; r++)
              t += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / i;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            o = this.inverted ? 2 : 1,
            a = this.inverted ? 1 : 2;
          for (let l = 0; l < this.ranges.length; l += 3) {
            let c = this.ranges[l] - (this.inverted ? r : 0);
            if (c > e) break;
            let u = this.ranges[l + o],
              p = this.ranges[l + a],
              d = c + u;
            if (e <= d) {
              let o =
                c + r + ((u ? (e == c ? -1 : e == d ? 1 : t) : t) < 0 ? 0 : p);
              if (n) return o;
              let a = e == (t < 0 ? c : d) ? null : l / 3 + (e - c) * i,
                h = e == c ? 2 : e == d ? 1 : 4;
              return (t < 0 ? e != c : e != d) && (h |= 8), new s(o, h, a);
            }
            r += p - u;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = o(t),
            i = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let o = 0; o < this.ranges.length; o += 3) {
            let t = this.ranges[o] - (this.inverted ? n : 0);
            if (t > e) break;
            let a = this.ranges[o + i];
            if (e <= t + a && o == 3 * r) return !0;
            n += this.ranges[o + s] - a;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
              s = o - (this.inverted ? i : 0),
              a = o + (this.inverted ? 0 : i),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + l, a, a + c), (i += c - l);
          }
        }
        invert() {
          return new a(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? a.empty : new a(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      a.empty = new a([]);
      const l = Object.create(null);
      class c {
        getMap() {
          return a.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = l[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in l)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (l[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class u {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new u(e, null);
        }
        static fail(e) {
          return new u(null, e);
        }
        static fromReplace(e, t, n, i) {
          try {
            return u.ok(e.replace(t, n, i));
          } catch (o) {
            if (o instanceof r.e4) return u.fail(o.message);
            throw o;
          }
        }
      }
      function p(e, t, n) {
        let i = [];
        for (let r = 0; r < e.childCount; r++) {
          let o = e.child(r);
          o.content.size && (o = o.copy(p(o.content, t, o))),
            o.isInline && (o = t(o, n, r)),
            i.push(o);
        }
        return r.HY.fromArray(i);
      }
      class d extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            i = n.node(n.sharedDepth(this.to)),
            o = new r.p2(
              p(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                i
              ),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, o);
        }
        invert() {
          return new h(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new d(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof d &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new d(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new d(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addMark", d);
      class h extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.p2(
              p(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new d(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new h(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof h &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new h(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new h(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeMark", h);
      class f extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new f(this.pos, t.marks[n]);
              return new f(this.pos, this.mark);
            }
          }
          return new m(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new f(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new f(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addNodeMark", f);
      class m extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new f(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON"
            );
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeNodeMark", m);
      class g extends c {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && k(e, this.from, this.to)
            ? u.fail("Structure replace would overwrite content")
            : u.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new a([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new g(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to)
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new g(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof g) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd
                    );
              return new g(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.p2.empty
                : new r.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd
                  );
            return new g(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new g(t.from, t.to, r.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      c.jsonID("replace", g);
      class y extends c {
        constructor(e, t, n, r, i, o, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = o),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (k(e, this.from, this.gapFrom) || k(e, this.gapTo, this.to))
          )
            return u.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return u.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? u.fromReplace(e, this.from, this.to, n)
            : u.fail("Content does not fit in gap");
        }
        getMap() {
          return new a([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new y(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1),
            i = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos
            ? null
            : new y(
                t.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON"
            );
          return new y(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            r.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure
          );
        }
      }
      function k(e, t, n) {
        let r = e.resolve(t),
          i = n - t,
          o = r.depth;
        for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
          o--, i--;
        if (i > 0) {
          let e = r.node(o).maybeChild(r.indexAfter(o));
          for (; i > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), i--;
          }
        }
        return !1;
      }
      function b(e, t, n) {
        let r = e.resolve(t);
        if (!n.content.size) return t;
        let i = n.content;
        for (let o = 0; o < n.openStart; o++) i = i.firstChild.content;
        for (let o = 1; o <= (0 == n.openStart && n.size ? 2 : 1); o++)
          for (let e = r.depth; e >= 0; e--) {
            let t =
                e == r.depth
                  ? 0
                  : r.pos <= (r.start(e + 1) + r.end(e + 1)) / 2
                  ? -1
                  : 1,
              n = r.index(e) + (t > 0 ? 1 : 0),
              s = r.node(e),
              a = !1;
            if (1 == o) a = s.canReplace(n, n, i);
            else {
              let e = s.contentMatchAt(n).findWrapping(i.firstChild.type);
              a = e && s.canReplaceWith(n, n, e[0]);
            }
            if (a)
              return 0 == t ? r.pos : t < 0 ? r.before(e + 1) : r.after(e + 1);
          }
        return null;
      }
      c.jsonID("replaceAround", y);
      class v extends c {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let r in t.attrs) n[r] = t.attrs[r];
          n[this.attr] = this.value;
          let i = t.type.create(n, null, t.marks);
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(i), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return a.empty;
        }
        invert(e) {
          return new v(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new v(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new v(t.pos, t.attr, t.value);
        }
      }
      c.jsonID("attr", v);
      class w extends c {
        constructor(e, t) {
          super(), (this.attr = e), (this.value = t);
        }
        apply(e) {
          let t = Object.create(null);
          for (let r in e.attrs) t[r] = e.attrs[r];
          t[this.attr] = this.value;
          let n = e.type.create(t, e.content, e.marks);
          return u.ok(n);
        }
        getMap() {
          return a.empty;
        }
        invert(e) {
          return new w(this.attr, e.attrs[this.attr]);
        }
        map(e) {
          return this;
        }
        toJSON() {
          return { stepType: "docAttr", attr: this.attr, value: this.value };
        }
        static fromJSON(e, t) {
          if ("string" != typeof t.attr)
            throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new w(t.attr, t.value);
        }
      }
      c.jsonID("docAttr", w);
      let S = class extends Error {};
      (S = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((S.prototype = Object.create(Error.prototype)).constructor = S),
        (S.prototype.name = "TransformError");
    },
    299165: function (e, t, n) {
      n.d(t, {
        nj: function () {
          return b;
        },
      });
      var r = n(102396);
      const i = Math.pow(2, 16);
      function o(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class a {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && a.empty))
            return a.empty;
        }
        recover(e) {
          let t = 0,
            n = o(e);
          if (!this.inverted)
            for (let r = 0; r < n; r++)
              t += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / i;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            o = this.inverted ? 2 : 1,
            a = this.inverted ? 1 : 2;
          for (let l = 0; l < this.ranges.length; l += 3) {
            let c = this.ranges[l] - (this.inverted ? r : 0);
            if (c > e) break;
            let u = this.ranges[l + o],
              p = this.ranges[l + a],
              d = c + u;
            if (e <= d) {
              let o =
                c + r + ((u ? (e == c ? -1 : e == d ? 1 : t) : t) < 0 ? 0 : p);
              if (n) return o;
              let a = e == (t < 0 ? c : d) ? null : l / 3 + (e - c) * i,
                h = e == c ? 2 : e == d ? 1 : 4;
              return (t < 0 ? e != c : e != d) && (h |= 8), new s(o, h, a);
            }
            r += p - u;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = o(t),
            i = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let o = 0; o < this.ranges.length; o += 3) {
            let t = this.ranges[o] - (this.inverted ? n : 0);
            if (t > e) break;
            let a = this.ranges[o + i];
            if (e <= t + a && o == 3 * r) return !0;
            n += this.ranges[o + s] - a;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
              s = o - (this.inverted ? i : 0),
              a = o + (this.inverted ? 0 : i),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + l, a, a + c), (i += c - l);
          }
        }
        invert() {
          return new a(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? a.empty : new a(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      a.empty = new a([]);
      const l = Object.create(null);
      class c {
        getMap() {
          return a.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = l[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in l)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (l[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class u {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new u(e, null);
        }
        static fail(e) {
          return new u(null, e);
        }
        static fromReplace(e, t, n, i) {
          try {
            return u.ok(e.replace(t, n, i));
          } catch (o) {
            if (o instanceof r.e4) return u.fail(o.message);
            throw o;
          }
        }
      }
      function p(e, t, n) {
        let i = [];
        for (let r = 0; r < e.childCount; r++) {
          let o = e.child(r);
          o.content.size && (o = o.copy(p(o.content, t, o))),
            o.isInline && (o = t(o, n, r)),
            i.push(o);
        }
        return r.HY.fromArray(i);
      }
      class d extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            i = n.node(n.sharedDepth(this.to)),
            o = new r.p2(
              p(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                i
              ),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, o);
        }
        invert() {
          return new h(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new d(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof d &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new d(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new d(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addMark", d);
      class h extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.p2(
              p(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new d(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new h(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof h &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new h(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new h(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeMark", h);
      class f extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new f(this.pos, t.marks[n]);
              return new f(this.pos, this.mark);
            }
          }
          return new m(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new f(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new f(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addNodeMark", f);
      class m extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new f(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON"
            );
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeNodeMark", m);
      class g extends c {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && k(e, this.from, this.to)
            ? u.fail("Structure replace would overwrite content")
            : u.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new a([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new g(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to)
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new g(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof g) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd
                    );
              return new g(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.p2.empty
                : new r.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd
                  );
            return new g(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new g(t.from, t.to, r.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      c.jsonID("replace", g);
      class y extends c {
        constructor(e, t, n, r, i, o, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = o),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (k(e, this.from, this.gapFrom) || k(e, this.gapTo, this.to))
          )
            return u.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return u.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? u.fromReplace(e, this.from, this.to, n)
            : u.fail("Content does not fit in gap");
        }
        getMap() {
          return new a([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new y(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            i = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos
            ? null
            : new y(
                t.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON"
            );
          return new y(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            r.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure
          );
        }
      }
      function k(e, t, n) {
        let r = e.resolve(t),
          i = n - t,
          o = r.depth;
        for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
          o--, i--;
        if (i > 0) {
          let e = r.node(o).maybeChild(r.indexAfter(o));
          for (; i > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), i--;
          }
        }
        return !1;
      }
      function b(e, t, n) {
        let r = e.resolve(t);
        if (!n.content.size) return t;
        let i = n.content;
        for (let o = 0; o < n.openStart; o++) i = i.firstChild.content;
        for (let o = 1; o <= (0 == n.openStart && n.size ? 2 : 1); o++)
          for (let e = r.depth; e >= 0; e--) {
            let t =
                e == r.depth
                  ? 0
                  : r.pos <= (r.start(e + 1) + r.end(e + 1)) / 2
                  ? -1
                  : 1,
              n = r.index(e) + (t > 0 ? 1 : 0),
              s = r.node(e),
              a = !1;
            if (1 == o) a = s.canReplace(n, n, i);
            else {
              let e = s.contentMatchAt(n).findWrapping(i.firstChild.type);
              a = e && s.canReplaceWith(n, n, e[0]);
            }
            if (a)
              return 0 == t ? r.pos : t < 0 ? r.before(e + 1) : r.after(e + 1);
          }
        return null;
      }
      c.jsonID("replaceAround", y);
      class v extends c {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let r in t.attrs) n[r] = t.attrs[r];
          n[this.attr] = this.value;
          let i = t.type.create(n, null, t.marks);
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(i), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return a.empty;
        }
        invert(e) {
          return new v(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new v(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new v(t.pos, t.attr, t.value);
        }
      }
      c.jsonID("attr", v);
      let w = class extends Error {};
      (w = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((w.prototype = Object.create(Error.prototype)).constructor = w),
        (w.prototype.name = "TransformError");
    },
    634397: function (e, t, n) {
      n.d(t, {
        Nl: function () {
          return o;
        },
        iz: function () {
          return s;
        },
        jE: function () {
          return a;
        },
        fz: function () {
          return l;
        },
      });
      var r = n(827378);
      const i = (0, r.createContext)({}),
        o = () => {
          const e = (() => {
            const {
                dom: e,
                editor: t,
                setLoading: n,
                editorFactory: o,
              } = (0, r.useContext)(i),
              s = (0, r.useRef)(null);
            return (
              (0, r.useEffect)(() => {
                const r = s.current;
                if (!o || !r) return;
                e.current = r;
                const i = o(r);
                return i
                  ? (n(!0),
                    i
                      .create()
                      .then((e) => {
                        t.current = e;
                      })
                      .finally(() => {
                        n(!1);
                      })
                      .catch(console.error),
                    () => {
                      var e;
                      null == (e = t.current) || e.destroy();
                    })
                  : void 0;
              }, [e, t, o, n]),
              s
            );
          })();
          return r.createElement("div", { "data-milkdown-root": !0, ref: e });
        },
        s = ({ children: e }) => {
          const t = (0, r.useRef)(void 0),
            [n, o] = (0, r.useState)(void 0),
            s = (0, r.useRef)(),
            [a, l] = (0, r.useState)(!0),
            c = (0, r.useMemo)(
              () => ({
                loading: a,
                dom: t,
                editor: s,
                setLoading: l,
                editorFactory: n,
                setEditorFactory: o,
              }),
              [a, n]
            );
          return r.createElement(i.Provider, { value: c }, e);
        },
        a = (e, t = []) => {
          const n = (0, r.useContext)(i),
            o = (0, r.useCallback)(e, t);
          return (
            (0, r.useLayoutEffect)(() => {
              n.setEditorFactory(() => o);
            }, [n, o]),
            { loading: n.loading, get: () => n.editor.current }
          );
        },
        l = () => {
          const e = (0, r.useContext)(i),
            t = (0, r.useCallback)(() => e.editor.current, [e.editor]);
          return [e.loading, t];
        };
    },
    15687: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return s;
        },
      });
      var r = n(216706);
      function i(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = i(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      var o = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = i(e)) && (r && (r += " "), (r += t));
        return r;
      };
      const s = (e) => {
        e.update(r.i8, (e) => {
          const t = e.attributes;
          return {
            ...e,
            attributes: (e) => {
              const n = "function" == typeof t ? t(e) : t;
              return {
                ...n,
                class: o(
                  "prose dark:prose-invert outline-none",
                  (null == n ? void 0 : n.class) || "",
                  "milkdown-theme-nord"
                ),
              };
            },
          };
        });
      };
    },
    942105: function (e, t, n) {
      n.d(t, {
        r1: function () {
          return u;
        },
        Tu: function () {
          return g;
        },
        Xt: function () {
          return p;
        },
        we: function () {
          return w;
        },
        c8: function () {
          return k;
        },
        qT: function () {
          return d;
        },
        jO: function () {
          return v;
        },
        yU: function () {
          return y;
        },
        x6: function () {
          return h;
        },
        te: function () {
          return S;
        },
        xM: function () {
          return f;
        },
        Gv: function () {
          return b;
        },
        u: function () {
          return m;
        },
        lB: function () {
          return x;
        },
        zG: function () {
          return N;
        },
        ko: function () {
          return E;
        },
      });
      var r = n(216706),
        i = n(480224);
      let o = (e) => crypto.getRandomValues(new Uint8Array(e));
      var s = n(907306),
        a = n(436927),
        l = n(102396),
        c = n(616711);
      ((e, t = 21) => {
        ((e, t, n) => {
          let r = (2 << Math.log2(e.length - 1)) - 1,
            i = -~((1.6 * r * t) / e.length);
        })(e, t, o);
      })("abcedfghicklmn", 10);
      const u = (e, t) => {
          const n = (0, r.uW)(e),
            i = (o) => async () => {
              (i.key = n), await o.wait(r.rm);
              const s = t(o);
              return (
                o.get(r.Xo).create(n, s),
                (i.run = (t) => o.get(r.Xo).call(e, t)),
                () => {
                  o.get(r.Xo).remove(n);
                }
              );
            };
          return i;
        },
        p = (e) => {
          const t = (n) => async () => {
            await n.wait(r.R3);
            const i = e(n);
            return (
              n.update(r.tQ, (e) => [...e, i]),
              (t.inputRule = i),
              () => {
                n.update(r.tQ, (e) => e.filter((e) => e !== i));
              }
            );
          };
          return t;
        },
        d = (e, t) => {
          const n = (i) => async () => {
            const o = t(i);
            return (
              i.update(r.pB, (t) => [...t.filter((t) => t[0] !== e), [e, o]]),
              (n.id = e),
              (n.schema = o),
              () => {
                i.update(r.pB, (t) => t.filter(([t]) => t !== e));
              }
            );
          };
          return (
            (n.type = (t) => {
              const n = t.get(r.le).nodes[e];
              if (!n) throw (0, s.YN)(e);
              return n;
            }),
            n
          );
        },
        h = (e) => {
          let t;
          const n = (n) => async () => (
            await n.wait(r.R3),
            (t = e(n)),
            n.update(r.ZV, (e) => [...e, t]),
            () => {
              n.update(r.ZV, (e) => e.filter((e) => e !== t));
            }
          );
          return (n.plugin = () => t), (n.key = () => t.spec.key), n;
        },
        f = (e) => {
          const t = (n) => async () => {
            await n.wait(r.R3);
            const i = e(n),
              o = (0, a.h)(i);
            return (
              n.update(r.ZV, (e) => [...e, o]),
              (t.keymap = i),
              () => {
                n.update(r.ZV, (e) => e.filter((e) => e !== o));
              }
            );
          };
          return t;
        },
        m = (e, t) => {
          const n = (i) => async () => {
            await i.wait(r.R3);
            const o = t(i);
            return (
              e.type(i) instanceof l.Jq
                ? i.update(r.um, (t) => [...t, [e.id, o]])
                : i.update(r.hT, (t) => [...t, [e.id, o]]),
              (n.view = o),
              (n.type = e),
              () => {
                e.type(i) instanceof l.Jq
                  ? i.update(r.um, (t) => t.filter((t) => t[0] !== e.id))
                  : i.update(r.hT, (t) => t.filter((t) => t[0] !== e.id));
              }
            );
          };
          return n;
        },
        g = (e, t) => {
          const n = (0, i.oM)(e, t),
            r = (e) => (
              e.inject(n),
              () => () => {
                e.remove(n);
              }
            );
          return (r.key = n), r;
        },
        y = (e, t) => {
          const n = g(t, e),
            i = d(e, (e) => e.get(n.key)(e)),
            o = [n, i];
          return (
            (o.id = i.id),
            (o.node = i),
            (o.type = (e) => i.type(e)),
            (o.schema = i.schema),
            (o.ctx = n),
            (o.key = n.key),
            (o.extendSchema = (t) => (i) => () => {
              const s = i.get(n.key),
                a = t(s)(i);
              i.update(r.pB, (t) => [...t.filter((t) => t[0] !== e), [e, a]]),
                (o.schema = a);
            }),
            o
          );
        },
        k = (e, t) => {
          const n = g(t, e),
            i = ((e, t) => {
              const n = (i) => async () => {
                const o = t(i);
                return (
                  i.update(r.ZP, (t) => [
                    ...t.filter((t) => t[0] !== e),
                    [e, o],
                  ]),
                  (n.id = e),
                  (n.schema = o),
                  () => {
                    i.update(r.ZP, (t) => t.filter(([t]) => t !== e));
                  }
                );
              };
              return (
                (n.type = (t) => {
                  const n = t.get(r.le).marks[e];
                  if (!n) throw (0, s.d2)(e);
                  return n;
                }),
                n
              );
            })(e, (e) => e.get(n.key)(e)),
            o = [n, i];
          return (
            (o.id = i.id),
            (o.mark = i),
            (o.type = i.type),
            (o.schema = i.schema),
            (o.ctx = n),
            (o.key = n.key),
            (o.extendSchema = (t) => (i) => () => {
              const s = i.get(n.key),
                a = t(s)(i);
              i.update(r.ZP, (t) => [...t.filter((t) => t[0] !== e), [e, a]]),
                (o.schema = a);
            }),
            o
          );
        },
        b = (e, t) => {
          const n = Object.fromEntries(
              Object.entries(t).map(([e, { shortcuts: t }]) => [e, t])
            ),
            r = g(n, `${e}Keymap`),
            i = f((e) => {
              const n = e.get(r.key),
                i = Object.entries(t).flatMap(([t, { command: r }]) =>
                  [n[t]].flat().map((t) => [t, r(e)])
                );
              return Object.fromEntries(i);
            }),
            o = [r, i];
          return (
            (o.ctx = r),
            (o.shortcuts = i),
            (o.key = r.key),
            (o.keymap = i.keymap),
            o
          );
        },
        v = (e, t = () => ({})) => g(t, `${e}Attr`),
        w = (e, t = () => ({})) => g(t, `${e}Attr`),
        S = (e, t, n) => {
          const i = g(n ?? {}, e),
            o = (e) => async () => {
              await e.wait(r.Iq);
              const n = { plugin: t(e), options: e.get(i.key) };
              return (
                e.update(r.CG, (e) => [...e, n]),
                () => {
                  e.update(r.CG, (e) => e.filter((e) => e !== n));
                }
              );
            },
            s = [i, o];
          return (s.id = e), (s.plugin = o), (s.options = i), s;
        };
      function x(e, t) {
        return (n) => n.get(r.Xo).call(e, t);
      }
      const E =
          (e, t = !1) =>
          (n) => {
            const i = n.get(r.U7),
              o = n.get(r._z)(e);
            if (!o) return;
            if (!t) {
              const { state: e } = i;
              return i.dispatch(
                e.tr.replace(0, e.doc.content.size, new l.p2(o.content, 0, 0))
              );
            }
            const s = n.get(r.le),
              a = n.get(r.D),
              u = n.get(r.ZV),
              p = c.yy.create({ schema: s, doc: o, plugins: u, ...a });
            i.updateState(p);
          },
        N = (...e) => {
          const t = e.length;
          let n = t;
          for (; n--; )
            if ("function" != typeof e[n])
              throw new TypeError("Expected a function");
          return (...n) => {
            let r = 0,
              i = t ? e[r](...n) : n[0];
            for (; ++r < t; ) i = e[r](i);
            return i;
          };
        };
    },
    152813: function (e, t, n) {
      n.d(t, {
        cL: function () {
          return I;
        },
        js: function () {
          return f;
        },
        mg: function () {
          return g;
        },
        UF: function () {
          return b;
        },
        eK: function () {
          return w;
        },
        YX: function () {
          return E;
        },
        AQ: function () {
          return T;
        },
      });
      var r,
        i,
        o,
        s,
        a = n(827378),
        l = (e, t, n) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once"
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, n);
        },
        c = (e, t, n) => (
          ((e, t, n) => {
            if (!t.has(e)) throw TypeError("Cannot " + n);
          })(e, t, "access private method"),
          n
        );
      (r = new WeakSet()),
        (i = function (e) {
          const { node: t } = this;
          return null == e
            ? document.createElement(t.isInline ? "span" : "div")
            : e instanceof HTMLElement
            ? e
            : e instanceof Function
            ? e(t)
            : document.createElement(e);
        });
      (o = new WeakSet()),
        (s = function (e) {
          return e instanceof HTMLElement ? e : document.createElement(e);
        });
      let u = (e = 21) =>
        crypto
          .getRandomValues(new Uint8Array(e))
          .reduce(
            (e, t) =>
              (e +=
                (t &= 63) < 36
                  ? t.toString(36)
                  : t < 62
                  ? (t - 26).toString(36).toUpperCase()
                  : t > 62
                  ? "-"
                  : "_"),
            ""
          );
      var p = n(331542),
        d = n(515463);
      const h = (0, a.createContext)({
          contentRef: () => {},
          view: null,
          getPos: () => 0,
          setAttrs: () => {},
          node: null,
          selected: !1,
          decorations: [],
          innerDecorations: null,
        }),
        f = () => (0, a.useContext)(h),
        m = (0, a.createContext)((e) => {
          throw new Error("out of scope");
        }),
        g = () => (0, a.useContext)(m);
      class y extends class {
        constructor({
          node: e,
          view: t,
          getPos: n,
          decorations: i,
          innerDecorations: o,
          options: s,
        }) {
          l(this, r),
            (this.selected = !1),
            (this.selectNode = () => {
              var e, t;
              (this.selected = !0),
                null == (t = (e = this.options).selectNode) || t.call(e);
            }),
            (this.deselectNode = () => {
              var e, t;
              (this.selected = !1),
                null == (t = (e = this.options).deselectNode) || t.call(e);
            }),
            (this.shouldUpdate = (e) =>
              !(
                e.type !== this.node.type ||
                (e.sameMarkup(this.node) && e.content.eq(this.node.content))
              )),
            (this.update = (e, t, n) => {
              var r, i;
              const o = this.options.update;
              let s;
              return (
                o && (s = o(e, t, n)),
                "boolean" != typeof s && (s = this.shouldUpdate(e)),
                (this.node = e),
                (this.decorations = t),
                (this.innerDecorations = n),
                s && (null == (i = (r = this.options).onUpdate) || i.call(r)),
                s
              );
            }),
            (this.shouldIgnoreMutation = (e) =>
              !(
                this.dom &&
                this.contentDOM &&
                !this.node.isLeaf &&
                !this.node.isAtom
              ) ||
              ("selection" !== e.type &&
                ((this.contentDOM === e.target && "attributes" === e.type) ||
                  !this.contentDOM.contains(e.target)))),
            (this.ignoreMutation = (e) => {
              if (!this.dom || !this.contentDOM) return !0;
              let t;
              const n = this.options.ignoreMutation;
              return (
                n && (t = n(e)),
                "boolean" != typeof t && (t = this.shouldIgnoreMutation(e)),
                t
              );
            }),
            (this.destroy = () => {
              var e, t, n;
              null == (t = (e = this.options).destroy) || t.call(e),
                this.dom.remove(),
                null == (n = this.contentDOM) || n.remove();
            }),
            (this.setAttrs = (e) => {
              const { dispatch: t, state: n } = this.view,
                r = this.getPos();
              if ("number" == typeof r)
                return t(
                  n.tr.setNodeMarkup(r, void 0, { ...this.node.attrs, ...e })
                );
            }),
            (this.node = e),
            (this.view = t),
            (this.getPos = n),
            (this.decorations = i),
            (this.innerDecorations = o),
            (this.options = s),
            (this.dom = this.createDOM(s.as)),
            (this.contentDOM = e.isLeaf
              ? null
              : this.createContentDOM(s.contentAs)),
            this.dom.setAttribute("data-node-view-root", "true"),
            this.contentDOM &&
              (this.contentDOM.setAttribute("data-node-view-content", "true"),
              (this.contentDOM.style.whiteSpace = "inherit")),
            (this.setSelection = s.setSelection),
            (this.stopEvent = s.stopEvent);
        }
        createDOM(e) {
          return c(this, r, i).call(this, e);
        }
        createContentDOM(e) {
          return c(this, r, i).call(this, e);
        }
        get component() {
          return this.options.component;
        }
      } {
        constructor() {
          super(...arguments),
            (this.key = u()),
            (this.context = {
              contentRef: (e) => {
                e &&
                  this.contentDOM &&
                  e.firstChild !== this.contentDOM &&
                  e.appendChild(this.contentDOM);
              },
              view: this.view,
              getPos: this.getPos,
              setAttrs: this.setAttrs,
              node: this.node,
              selected: this.selected,
              decorations: this.decorations,
              innerDecorations: this.innerDecorations,
            }),
            (this.updateContext = () => {
              Object.assign(this.context, {
                node: this.node,
                selected: this.selected,
                decorations: this.decorations,
                innerDecorations: this.innerDecorations,
              });
            }),
            (this.render = () => {
              const e = this.component;
              return (0, p.createPortal)(
                a.createElement(
                  h.Provider,
                  { value: this.context },
                  a.createElement(e, null)
                ),
                this.dom,
                this.key
              );
            });
        }
      }
      const k = (0, a.createContext)({ view: null }),
        b = () => (0, a.useContext)(k),
        v = (0, a.createContext)((e) => {
          throw new Error("out of scope");
        }),
        w = () => (0, a.useContext)(v);
      class S extends class {
        constructor(e) {
          (this.view = e.view), (this.options = e.options);
        }
        get component() {
          return this.options.component;
        }
        get root() {
          var e, t;
          let n =
            null == (t = (e = this.options).root)
              ? void 0
              : t.call(e, this.view.dom);
          return n || (n = this.view.dom.parentElement ?? document.body), n;
        }
        update(e, t) {
          var n, r;
          (this.view = e),
            (this.prevState = t),
            null == (r = (n = this.options).update) || r.call(n, e, t);
        }
        destroy() {
          var e, t;
          null == (t = (e = this.options).destroy) || t.call(e);
        }
      } {
        constructor() {
          super(...arguments),
            (this.key = u()),
            (this.context = { view: this.view, prevState: this.prevState }),
            (this.updateContext = () => {
              Object.assign(this.context, {
                view: this.view,
                prevState: this.prevState,
              });
            }),
            (this.render = () => {
              const e = this.component;
              return (0, p.createPortal)(
                a.createElement(
                  k.Provider,
                  { value: this.context },
                  a.createElement(e, null)
                ),
                this.root,
                this.key
              );
            });
        }
      }
      const x = (0, a.createContext)({ view: null, getPos: () => {} }),
        E = () => (0, a.useContext)(x),
        N = (0, a.createContext)((e) => {
          throw new Error("out of scope");
        }),
        T = () => (0, a.useContext)(N);
      class A extends class {
        constructor({ pos: e, spec: t, options: n }) {
          l(this, o),
            (this.pos = e),
            (this.options = n),
            (this.spec = t),
            (this.dom = c(this, o, s).call(this, n.as)),
            this.dom.setAttribute("data-widget-view-root", "true");
        }
        bind(e, t) {
          (this.view = e), (this.getPos = t);
        }
        get component() {
          return this.options.component;
        }
      } {
        constructor() {
          super(...arguments),
            (this.key = u()),
            (this.context = {
              view: this.view,
              getPos: this.getPos,
              spec: this.spec,
            }),
            (this.updateContext = () => {
              Object.assign(this.context, {
                view: this.view,
                getPos: this.getPos,
                spec: this.spec,
              });
            }),
            (this.render = () => {
              const e = this.component;
              return (0, p.createPortal)(
                a.createElement(
                  x.Provider,
                  { value: this.context },
                  a.createElement(e, null)
                ),
                this.dom,
                this.key
              );
            });
        }
      }
      const I = ({ children: e }) => {
        const {
            renderReactRenderer: t,
            removeReactRenderer: n,
            portals: r,
          } = (() => {
            const [e, t] = (0, a.useState)({}),
              n = (0, a.useRef)(!1);
            (0, a.useEffect)(
              () => (
                requestAnimationFrame(() => {
                  n.current = !0;
                }),
                () => {
                  n.current = !1;
                }
              ),
              []
            );
            const r = (0, a.useCallback)((e) => {
              n.current ? (0, p.flushSync)(e) : e();
            }, []);
            return {
              portals: e,
              renderReactRenderer: (0, a.useCallback)(
                (e, n = !0) => {
                  r(() => {
                    n && e.updateContext(),
                      t((t) => ({ ...t, [e.key]: e.render() }));
                  });
                },
                [r]
              ),
              removeReactRenderer: (0, a.useCallback)(
                (e) => {
                  r(() => {
                    t((t) => {
                      const n = { ...t };
                      return delete n[e.key], n;
                    });
                  });
                },
                [r]
              ),
            };
          })(),
          i = ((e, t) =>
            (0, a.useCallback)(
              (n) => (r, i, o, s, a) => {
                const l = new y({
                  node: r,
                  view: i,
                  getPos: o,
                  decorations: s,
                  innerDecorations: a,
                  options: {
                    ...n,
                    onUpdate() {
                      var t;
                      null == (t = n.onUpdate) || t.call(n), e(l);
                    },
                    selectNode() {
                      var t;
                      null == (t = n.selectNode) || t.call(n), e(l);
                    },
                    deselectNode() {
                      var t;
                      null == (t = n.deselectNode) || t.call(n), e(l);
                    },
                    destroy() {
                      var e;
                      null == (e = n.destroy) || e.call(n), t(l);
                    },
                  },
                });
                return e(l, !1), l;
              },
              [t, e]
            ))(t, n),
          o = ((e, t) =>
            (0, a.useCallback)(
              (n) => (r) => {
                const i = new S({
                  view: r,
                  options: {
                    ...n,
                    update: (t, r) => {
                      var o;
                      null == (o = n.update) || o.call(n, t, r), e(i);
                    },
                    destroy: () => {
                      var e;
                      null == (e = n.destroy) || e.call(n), t(i);
                    },
                  },
                });
                return e(i, !1), i;
              },
              [t, e]
            ))(t, n),
          s = ((e, t) =>
            (0, a.useCallback)(
              (n) =>
                (r, i = {}) => {
                  const o = new A({ pos: r, options: n }),
                    s = {
                      ...i,
                      destroy: (e) => {
                        var n;
                        null == (n = i.destroy) || n.call(i, e), t(o);
                      },
                    };
                  return (
                    (o.spec = s),
                    d.p.widget(r, (t, n) => (o.bind(t, n), e(o), o.dom), s)
                  );
                },
              [t, e]
            ))(t, n),
          l = (0, a.useMemo)(() => Object.values(r), [r]);
        return a.createElement(
          m.Provider,
          { value: i },
          a.createElement(
            v.Provider,
            { value: o },
            a.createElement(N.Provider, { value: s }, e, l)
          )
        );
      };
    },
    20745: function (e, t, n) {
      n.d(t, {
        w: function () {
          return a;
        },
      });
      const r = function (e) {
        if (null === e || void 0 === e) return o;
        if ("function" === typeof e) return i(e);
        if ("object" === typeof e)
          return Array.isArray(e)
            ? (function (e) {
                const t = [];
                let n = -1;
                for (; ++n < e.length; ) t[n] = r(e[n]);
                return i(o);
                function o(...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                }
              })(e)
            : (function (e) {
                const t = e;
                return i(n);
                function n(n) {
                  const r = n;
                  let i;
                  for (i in e) if (r[i] !== t[i]) return !1;
                  return !0;
                }
              })(e);
        if ("string" === typeof e)
          return (function (e) {
            return i(t);
            function t(t) {
              return t && t.type === e;
            }
          })(e);
        throw new Error("Expected function, string, or object as test");
      };
      function i(e) {
        return function (t, n, r) {
          return Boolean(
            s(t) &&
              e.call(this, t, "number" === typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function o() {
        return !0;
      }
      function s(e) {
        return null !== e && "object" === typeof e && "type" in e;
      }
      const a = r([
        "break",
        "delete",
        "emphasis",
        "footnote",
        "footnoteReference",
        "image",
        "imageReference",
        "inlineCode",
        "inlineMath",
        "link",
        "linkReference",
        "mdxJsxTextElement",
        "mdxTextExpression",
        "strong",
        "text",
        "textDirective",
      ]);
    },
    529535: function (e, t, n) {
      n.d(t, {
        B: function () {
          return i;
        },
      });
      const r = {};
      function i(e, t) {
        const n = t || r;
        return o(
          e,
          "boolean" !== typeof n.includeImageAlt || n.includeImageAlt,
          "boolean" !== typeof n.includeHtml || n.includeHtml
        );
      }
      function o(e, t, n) {
        if (
          (function (e) {
            return Boolean(e && "object" === typeof e);
          })(e)
        ) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return s(e.children, t, n);
        }
        return Array.isArray(e) ? s(e, t, n) : "";
      }
      function s(e, t, n) {
        const r = [];
        let i = -1;
        for (; ++i < e.length; ) r[i] = o(e[i], t, n);
        return r.join("");
      }
    },
    979094: function (e, t, n) {
      n.d(t, {
        r: function () {
          return s;
        },
      });
      o(/[A-Za-z]/), o(/[\dA-Za-z]/), o(/[#-'*+\--9=?A-Z^-~]/);
      o(/\d/), o(/[\dA-Fa-f]/), o(/[!-/:-@[-`{-~]/);
      const r = o(/\p{P}|\p{S}/u),
        i = o(/\s/);
      function o(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
      function s(e) {
        return null === e ||
          (function (e) {
            return null !== e && (e < 0 || 32 === e);
          })(e) ||
          i(e)
          ? 1
          : r(e)
          ? 2
          : void 0;
      }
    },
    661571: function (e, t, n) {
      n.d(t, {
        VK: function () {
          return x;
        },
        zK: function () {
          return N;
        },
        S0: function () {
          return E;
        },
      });
      var r = n(102396);
      const i = Math.pow(2, 16);
      function o(e) {
        return 65535 & e;
      }
      class s {
        constructor(e, t, n) {
          (this.pos = e), (this.delInfo = t), (this.recover = n);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class a {
        constructor(e, t = !1) {
          if (((this.ranges = e), (this.inverted = t), !e.length && a.empty))
            return a.empty;
        }
        recover(e) {
          let t = 0,
            n = o(e);
          if (!this.inverted)
            for (let r = 0; r < n; r++)
              t += this.ranges[3 * r + 2] - this.ranges[3 * r + 1];
          return (
            this.ranges[3 * n] +
            t +
            (function (e) {
              return (e - (65535 & e)) / i;
            })(e)
          );
        }
        mapResult(e, t = 1) {
          return this._map(e, t, !1);
        }
        map(e, t = 1) {
          return this._map(e, t, !0);
        }
        _map(e, t, n) {
          let r = 0,
            o = this.inverted ? 2 : 1,
            a = this.inverted ? 1 : 2;
          for (let l = 0; l < this.ranges.length; l += 3) {
            let c = this.ranges[l] - (this.inverted ? r : 0);
            if (c > e) break;
            let u = this.ranges[l + o],
              p = this.ranges[l + a],
              d = c + u;
            if (e <= d) {
              let o =
                c + r + ((u ? (e == c ? -1 : e == d ? 1 : t) : t) < 0 ? 0 : p);
              if (n) return o;
              let a = e == (t < 0 ? c : d) ? null : l / 3 + (e - c) * i,
                h = e == c ? 2 : e == d ? 1 : 4;
              return (t < 0 ? e != c : e != d) && (h |= 8), new s(o, h, a);
            }
            r += p - u;
          }
          return n ? e + r : new s(e + r, 0, null);
        }
        touches(e, t) {
          let n = 0,
            r = o(t),
            i = this.inverted ? 2 : 1,
            s = this.inverted ? 1 : 2;
          for (let o = 0; o < this.ranges.length; o += 3) {
            let t = this.ranges[o] - (this.inverted ? n : 0);
            if (t > e) break;
            let a = this.ranges[o + i];
            if (e <= t + a && o == 3 * r) return !0;
            n += this.ranges[o + s] - a;
          }
          return !1;
        }
        forEach(e) {
          let t = this.inverted ? 2 : 1,
            n = this.inverted ? 1 : 2;
          for (let r = 0, i = 0; r < this.ranges.length; r += 3) {
            let o = this.ranges[r],
              s = o - (this.inverted ? i : 0),
              a = o + (this.inverted ? 0 : i),
              l = this.ranges[r + t],
              c = this.ranges[r + n];
            e(s, s + l, a, a + c), (i += c - l);
          }
        }
        invert() {
          return new a(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(e) {
          return 0 == e ? a.empty : new a(e < 0 ? [0, -e, 0] : [0, 0, e]);
        }
      }
      a.empty = new a([]);
      const l = Object.create(null);
      class c {
        getMap() {
          return a.empty;
        }
        merge(e) {
          return null;
        }
        static fromJSON(e, t) {
          if (!t || !t.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let n = l[t.stepType];
          if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
          return n.fromJSON(e, t);
        }
        static jsonID(e, t) {
          if (e in l)
            throw new RangeError("Duplicate use of step JSON ID " + e);
          return (l[e] = t), (t.prototype.jsonID = e), t;
        }
      }
      class u {
        constructor(e, t) {
          (this.doc = e), (this.failed = t);
        }
        static ok(e) {
          return new u(e, null);
        }
        static fail(e) {
          return new u(null, e);
        }
        static fromReplace(e, t, n, i) {
          try {
            return u.ok(e.replace(t, n, i));
          } catch (o) {
            if (o instanceof r.e4) return u.fail(o.message);
            throw o;
          }
        }
      }
      function p(e, t, n) {
        let i = [];
        for (let r = 0; r < e.childCount; r++) {
          let o = e.child(r);
          o.content.size && (o = o.copy(p(o.content, t, o))),
            o.isInline && (o = t(o, n, r)),
            i.push(o);
        }
        return r.HY.fromArray(i);
      }
      class d extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = e.resolve(this.from),
            i = n.node(n.sharedDepth(this.to)),
            o = new r.p2(
              p(
                t.content,
                (e, t) =>
                  e.isAtom && t.type.allowsMarkType(this.mark.type)
                    ? e.mark(this.mark.addToSet(e.marks))
                    : e,
                i
              ),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, o);
        }
        invert() {
          return new h(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new d(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof d &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new d(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new d(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addMark", d);
      class h extends c {
        constructor(e, t, n) {
          super(), (this.from = e), (this.to = t), (this.mark = n);
        }
        apply(e) {
          let t = e.slice(this.from, this.to),
            n = new r.p2(
              p(t.content, (e) => e.mark(this.mark.removeFromSet(e.marks)), e),
              t.openStart,
              t.openEnd
            );
          return u.fromReplace(e, this.from, this.to, n);
        }
        invert() {
          return new d(this.from, this.to, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return (t.deleted && n.deleted) || t.pos >= n.pos
            ? null
            : new h(t.pos, n.pos, this.mark);
        }
        merge(e) {
          return e instanceof h &&
            e.mark.eq(this.mark) &&
            this.from <= e.to &&
            this.to >= e.from
            ? new h(
                Math.min(this.from, e.from),
                Math.max(this.to, e.to),
                this.mark
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new h(t.from, t.to, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeMark", h);
      class f extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          if (t) {
            let e = this.mark.addToSet(t.marks);
            if (e.length == t.marks.length) {
              for (let n = 0; n < t.marks.length; n++)
                if (!t.marks[n].isInSet(e)) return new f(this.pos, t.marks[n]);
              return new f(this.pos, this.mark);
            }
          }
          return new m(this.pos, this.mark);
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new f(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new f(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("addNodeMark", f);
      class m extends c {
        constructor(e, t) {
          super(), (this.pos = e), (this.mark = t);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at mark step's position");
          let n = t.type.create(
            t.attrs,
            null,
            this.mark.removeFromSet(t.marks)
          );
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(n), 0, t.isLeaf ? 0 : 1)
          );
        }
        invert(e) {
          let t = e.nodeAt(this.pos);
          return t && this.mark.isInSet(t.marks)
            ? new f(this.pos, this.mark)
            : this;
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new m(t.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON"
            );
          return new m(t.pos, e.markFromJSON(t.mark));
        }
      }
      c.jsonID("removeNodeMark", m);
      class g extends c {
        constructor(e, t, n, r = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.slice = n),
            (this.structure = r);
        }
        apply(e) {
          return this.structure && k(e, this.from, this.to)
            ? u.fail("Structure replace would overwrite content")
            : u.fromReplace(e, this.from, this.to, this.slice);
        }
        getMap() {
          return new a([this.from, this.to - this.from, this.slice.size]);
        }
        invert(e) {
          return new g(
            this.from,
            this.from + this.slice.size,
            e.slice(this.from, this.to)
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1);
          return t.deletedAcross && n.deletedAcross
            ? null
            : new g(t.pos, Math.max(t.pos, n.pos), this.slice);
        }
        merge(e) {
          if (!(e instanceof g) || e.structure || this.structure) return null;
          if (
            this.from + this.slice.size != e.from ||
            this.slice.openEnd ||
            e.slice.openStart
          ) {
            if (e.to != this.from || this.slice.openStart || e.slice.openEnd)
              return null;
            {
              let t =
                this.slice.size + e.slice.size == 0
                  ? r.p2.empty
                  : new r.p2(
                      e.slice.content.append(this.slice.content),
                      e.slice.openStart,
                      this.slice.openEnd
                    );
              return new g(e.from, this.to, t, this.structure);
            }
          }
          {
            let t =
              this.slice.size + e.slice.size == 0
                ? r.p2.empty
                : new r.p2(
                    this.slice.content.append(e.slice.content),
                    this.slice.openStart,
                    e.slice.openEnd
                  );
            return new g(
              this.from,
              this.to + (e.to - e.from),
              t,
              this.structure
            );
          }
        }
        toJSON() {
          let e = { stepType: "replace", from: this.from, to: this.to };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.from || "number" != typeof t.to)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new g(t.from, t.to, r.p2.fromJSON(e, t.slice), !!t.structure);
        }
      }
      c.jsonID("replace", g);
      class y extends c {
        constructor(e, t, n, r, i, o, s = !1) {
          super(),
            (this.from = e),
            (this.to = t),
            (this.gapFrom = n),
            (this.gapTo = r),
            (this.slice = i),
            (this.insert = o),
            (this.structure = s);
        }
        apply(e) {
          if (
            this.structure &&
            (k(e, this.from, this.gapFrom) || k(e, this.gapTo, this.to))
          )
            return u.fail("Structure gap-replace would overwrite content");
          let t = e.slice(this.gapFrom, this.gapTo);
          if (t.openStart || t.openEnd)
            return u.fail("Gap is not a flat range");
          let n = this.slice.insertAt(this.insert, t.content);
          return n
            ? u.fromReplace(e, this.from, this.to, n)
            : u.fail("Content does not fit in gap");
        }
        getMap() {
          return new a([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(e) {
          let t = this.gapTo - this.gapFrom;
          return new y(
            this.from,
            this.from + this.slice.size + t,
            this.from + this.insert,
            this.from + this.insert + t,
            e
              .slice(this.from, this.to)
              .removeBetween(this.gapFrom - this.from, this.gapTo - this.from),
            this.gapFrom - this.from,
            this.structure
          );
        }
        map(e) {
          let t = e.mapResult(this.from, 1),
            n = e.mapResult(this.to, -1),
            r = e.map(this.gapFrom, -1),
            i = e.map(this.gapTo, 1);
          return (t.deletedAcross && n.deletedAcross) || r < t.pos || i > n.pos
            ? null
            : new y(
                t.pos,
                n.pos,
                r,
                i,
                this.slice,
                this.insert,
                this.structure
              );
        }
        toJSON() {
          let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (e.slice = this.slice.toJSON()),
            this.structure && (e.structure = !0),
            e
          );
        }
        static fromJSON(e, t) {
          if (
            "number" != typeof t.from ||
            "number" != typeof t.to ||
            "number" != typeof t.gapFrom ||
            "number" != typeof t.gapTo ||
            "number" != typeof t.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON"
            );
          return new y(
            t.from,
            t.to,
            t.gapFrom,
            t.gapTo,
            r.p2.fromJSON(e, t.slice),
            t.insert,
            !!t.structure
          );
        }
      }
      function k(e, t, n) {
        let r = e.resolve(t),
          i = n - t,
          o = r.depth;
        for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
          o--, i--;
        if (i > 0) {
          let e = r.node(o).maybeChild(r.indexAfter(o));
          for (; i > 0; ) {
            if (!e || e.isLeaf) return !0;
            (e = e.firstChild), i--;
          }
        }
        return !1;
      }
      function b(e) {
        return { type: e, attrs: null };
      }
      function v(e, t) {
        return !(!e || !t || e.isLeaf || !e.canAppend(t));
      }
      c.jsonID("replaceAround", y);
      class w extends c {
        constructor(e, t, n) {
          super(), (this.pos = e), (this.attr = t), (this.value = n);
        }
        apply(e) {
          let t = e.nodeAt(this.pos);
          if (!t) return u.fail("No node at attribute step's position");
          let n = Object.create(null);
          for (let r in t.attrs) n[r] = t.attrs[r];
          n[this.attr] = this.value;
          let i = t.type.create(n, null, t.marks);
          return u.fromReplace(
            e,
            this.pos,
            this.pos + 1,
            new r.p2(r.HY.from(i), 0, t.isLeaf ? 0 : 1)
          );
        }
        getMap() {
          return a.empty;
        }
        invert(e) {
          return new w(
            this.pos,
            this.attr,
            e.nodeAt(this.pos).attrs[this.attr]
          );
        }
        map(e) {
          let t = e.mapResult(this.pos, 1);
          return t.deletedAfter ? null : new w(t.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(e, t) {
          if ("number" != typeof t.pos || "string" != typeof t.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new w(t.pos, t.attr, t.value);
        }
      }
      c.jsonID("attr", w);
      let S = class extends Error {};
      (S = function e(t) {
        let n = Error.call(this, t);
        return (n.__proto__ = e.prototype), n;
      }),
        ((S.prototype = Object.create(Error.prototype)).constructor = S),
        (S.prototype.name = "TransformError");
      class x {
        constructor(e, t) {
          var n;
          (this.match = e),
            (this.match = e),
            (this.handler =
              "string" == typeof t
                ? ((n = t),
                  function (e, t, r, i) {
                    let o = n;
                    if (t[1]) {
                      let e = t[0].lastIndexOf(t[1]);
                      o += t[0].slice(e + t[1].length);
                      let n = (r += e) - i;
                      n > 0 && ((o = t[0].slice(e - n, e) + o), (r = i));
                    }
                    return e.tr.insertText(o, r, i);
                  })
                : t);
        }
      }
      new x(/--$/, "\u2014"),
        new x(/\.\.\.$/, "\u2026"),
        new x(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "\u201c"),
        new x(/"$/, "\u201d"),
        new x(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "\u2018"),
        new x(/'$/, "\u2019");
      function E(e, t, n = null, r) {
        return new x(e, (e, i, o, s) => {
          let a = n instanceof Function ? n(i) : n,
            l = e.tr.delete(o, s),
            c = l.doc.resolve(o).blockRange(),
            u =
              c &&
              (function (e, t, n = null, r = e) {
                let i = (function (e, t) {
                    let { parent: n, startIndex: r, endIndex: i } = e,
                      o = n.contentMatchAt(r).findWrapping(t);
                    if (!o) return null;
                    let s = o.length ? o[0] : t;
                    return n.canReplaceWith(r, i, s) ? o : null;
                  })(e, t),
                  o =
                    i &&
                    (function (e, t) {
                      let { parent: n, startIndex: r, endIndex: i } = e,
                        o = n.child(r),
                        s = t.contentMatch.findWrapping(o.type);
                      if (!s) return null;
                      let a = (s.length ? s[s.length - 1] : t).contentMatch;
                      for (let l = r; a && l < i; l++)
                        a = a.matchType(n.child(l).type);
                      return a && a.validEnd ? s : null;
                    })(r, t);
                return o
                  ? i.map(b).concat({ type: t, attrs: n }).concat(o.map(b))
                  : null;
              })(c, t, a);
          if (!u) return null;
          l.wrap(c, u);
          let p = l.doc.resolve(o - 1).nodeBefore;
          return (
            p &&
              p.type == t &&
              (function (e, t) {
                let n = e.resolve(t),
                  r = n.index();
                return (
                  v(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1)
                );
              })(l.doc, o - 1) &&
              (!r || r(i, p)) &&
              l.join(o - 1),
            l
          );
        });
      }
      function N(e, t, n = null) {
        return new x(e, (e, r, i, o) => {
          let s = e.doc.resolve(i),
            a = n instanceof Function ? n(r) : n;
          return s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), t)
            ? e.tr.delete(i, o).setBlockType(i, i, t, a)
            : null;
        });
      }
    },
    956907: function (e, t, n) {
      function r(e) {
        e.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        };
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        (r.displayName = "clike"),
        (r.aliases = []);
    },
    133906: function (e, t, n) {
      function r(e) {
        !(function (e) {
          var t =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: RegExp(
                "@[\\w-](?:" +
                  /[^;{\s"']|\s+(?!\s)/.source +
                  "|" +
                  t.source +
                  ")*?" +
                  /(?:;|(?=\s*\{))/.source
              ),
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  t.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  t.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: t, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            n.tag.addAttribute("style", "css"));
        })(e);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        (r.displayName = "css"),
        (r.aliases = []);
    },
    416514: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(956907);
      function i(e) {
        e.register(r.Z),
          (e.languages.javascript = e.languages.extend("clike", {
            "class-name": [
              e.languages.clike["class-name"],
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                lookbehind: !0,
              },
            ],
            keyword: [
              { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
              {
                pattern:
                  /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0,
              },
            ],
            function:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number: {
              pattern: RegExp(
                /(^|[^\w$])/.source +
                  "(?:" +
                  /NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|" +
                  /\d+(?:_\d+)*n/.source +
                  "|" +
                  /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                    .source +
                  ")" +
                  /(?![\w$])/.source
              ),
              lookbehind: !0,
            },
            operator:
              /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
          })),
          (e.languages.javascript["class-name"][0].pattern =
            /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
          e.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern: RegExp(
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/
                  .source +
                  /\//.source +
                  "(?:" +
                  /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
                    .source +
                  "|" +
                  /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                    .source +
                  ")" +
                  /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
                    .source
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                "regex-source": {
                  pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                  lookbehind: !0,
                  alias: "language-regex",
                  inside: e.languages.regex,
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/,
              },
            },
            "function-variable": {
              pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
              alias: "function",
            },
            parameter: [
              {
                pattern:
                  /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              {
                pattern:
                  /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              {
                pattern:
                  /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              {
                pattern:
                  /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
          }),
          e.languages.insertBefore("javascript", "string", {
            hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
            "template-string": {
              pattern:
                /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
              greedy: !0,
              inside: {
                "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                interpolation: {
                  pattern:
                    /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                  lookbehind: !0,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: e.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
            "string-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
              lookbehind: !0,
              greedy: !0,
              alias: "property",
            },
          }),
          e.languages.insertBefore("javascript", "operator", {
            "literal-property": {
              pattern:
                /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
              lookbehind: !0,
              alias: "property",
            },
          }),
          e.languages.markup &&
            (e.languages.markup.tag.addInlined("script", "javascript"),
            e.languages.markup.tag.addAttribute(
              /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
                .source,
              "javascript"
            )),
          (e.languages.js = e.languages.javascript);
      }
      (i.displayName = "javascript"), (i.aliases = ["js"]);
    },
    658430: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(416514),
        i = n(678990);
      function o(e) {
        e.register(r.Z),
          e.register(i.Z),
          (function (e) {
            var t = e.util.clone(e.languages.javascript),
              n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
              r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
              i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
            function o(e, t) {
              return (
                (e = e
                  .replace(/<S>/g, function () {
                    return n;
                  })
                  .replace(/<BRACES>/g, function () {
                    return r;
                  })
                  .replace(/<SPREAD>/g, function () {
                    return i;
                  })),
                RegExp(e, t)
              );
            }
            (i = o(i).source),
              (e.languages.jsx = e.languages.extend("markup", t)),
              (e.languages.jsx.tag.pattern = o(
                /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                  .source
              )),
              (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
              (e.languages.jsx.tag.inside["attr-value"].pattern =
                /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
              (e.languages.jsx.tag.inside.tag.inside["class-name"] =
                /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
              (e.languages.jsx.tag.inside.comment = t.comment),
              e.languages.insertBefore(
                "inside",
                "attr-name",
                {
                  spread: {
                    pattern: o(/<SPREAD>/.source),
                    inside: e.languages.jsx,
                  },
                },
                e.languages.jsx.tag
              ),
              e.languages.insertBefore(
                "inside",
                "special-attr",
                {
                  script: {
                    pattern: o(/=<BRACES>/.source),
                    alias: "language-javascript",
                    inside: {
                      "script-punctuation": {
                        pattern: /^=(?=\{)/,
                        alias: "punctuation",
                      },
                      rest: e.languages.jsx,
                    },
                  },
                },
                e.languages.jsx.tag
              );
            var s = function (e) {
                return e
                  ? "string" === typeof e
                    ? e
                    : "string" === typeof e.content
                    ? e.content
                    : e.content.map(s).join("")
                  : "";
              },
              a = function (t) {
                for (var n = [], r = 0; r < t.length; r++) {
                  var i = t[r],
                    o = !1;
                  if (
                    ("string" !== typeof i &&
                      ("tag" === i.type &&
                      i.content[0] &&
                      "tag" === i.content[0].type
                        ? "</" === i.content[0].content[0].content
                          ? n.length > 0 &&
                            n[n.length - 1].tagName ===
                              s(i.content[0].content[1]) &&
                            n.pop()
                          : "/>" === i.content[i.content.length - 1].content ||
                            n.push({
                              tagName: s(i.content[0].content[1]),
                              openedBraces: 0,
                            })
                        : n.length > 0 &&
                          "punctuation" === i.type &&
                          "{" === i.content
                        ? n[n.length - 1].openedBraces++
                        : n.length > 0 &&
                          n[n.length - 1].openedBraces > 0 &&
                          "punctuation" === i.type &&
                          "}" === i.content
                        ? n[n.length - 1].openedBraces--
                        : (o = !0)),
                    (o || "string" === typeof i) &&
                      n.length > 0 &&
                      0 === n[n.length - 1].openedBraces)
                  ) {
                    var l = s(i);
                    r < t.length - 1 &&
                      ("string" === typeof t[r + 1] ||
                        "plain-text" === t[r + 1].type) &&
                      ((l += s(t[r + 1])), t.splice(r + 1, 1)),
                      r > 0 &&
                        ("string" === typeof t[r - 1] ||
                          "plain-text" === t[r - 1].type) &&
                        ((l = s(t[r - 1]) + l), t.splice(r - 1, 1), r--),
                      (t[r] = new e.Token("plain-text", l, null, l));
                  }
                  i.content && "string" !== typeof i.content && a(i.content);
                }
              };
            e.hooks.add("after-tokenize", function (e) {
              ("jsx" !== e.language && "tsx" !== e.language) || a(e.tokens);
            });
          })(e);
      }
      (o.displayName = "jsx"), (o.aliases = []);
    },
    348768: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(678990);
      function i(e) {
        e.register(r.Z),
          (function (e) {
            var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
            function n(e) {
              return (
                (e = e.replace(/<inner>/g, function () {
                  return t;
                })),
                RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
              );
            }
            var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
                .source,
              i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
                /__/g,
                function () {
                  return r;
                }
              ),
              o =
                /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                  .source;
            (e.languages.markdown = e.languages.extend("markup", {})),
              e.languages.insertBefore("markdown", "prolog", {
                "front-matter-block": {
                  pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    punctuation: /^---|---$/,
                    "front-matter": {
                      pattern: /\S+(?:\s+\S+)*/,
                      alias: ["yaml", "language-yaml"],
                      inside: e.languages.yaml,
                    },
                  },
                },
                blockquote: {
                  pattern: /^>(?:[\t ]*>)*/m,
                  alias: "punctuation",
                },
                table: {
                  pattern: RegExp("^" + i + o + "(?:" + i + ")*", "m"),
                  inside: {
                    "table-data-rows": {
                      pattern: RegExp("^(" + i + o + ")(?:" + i + ")*$"),
                      lookbehind: !0,
                      inside: {
                        "table-data": {
                          pattern: RegExp(r),
                          inside: e.languages.markdown,
                        },
                        punctuation: /\|/,
                      },
                    },
                    "table-line": {
                      pattern: RegExp("^(" + i + ")" + o + "$"),
                      lookbehind: !0,
                      inside: { punctuation: /\||:?-{3,}:?/ },
                    },
                    "table-header-row": {
                      pattern: RegExp("^" + i + "$"),
                      inside: {
                        "table-header": {
                          pattern: RegExp(r),
                          alias: "important",
                          inside: e.languages.markdown,
                        },
                        punctuation: /\|/,
                      },
                    },
                  },
                },
                code: [
                  {
                    pattern:
                      /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  {
                    pattern: /^```[\s\S]*?^```$/m,
                    greedy: !0,
                    inside: {
                      "code-block": {
                        pattern:
                          /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                        lookbehind: !0,
                      },
                      "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                      punctuation: /```/,
                    },
                  },
                ],
                title: [
                  {
                    pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                    alias: "important",
                    inside: { punctuation: /==+$|--+$/ },
                  },
                  {
                    pattern: /(^\s*)#.+/m,
                    lookbehind: !0,
                    alias: "important",
                    inside: { punctuation: /^#+|#+$/ },
                  },
                ],
                hr: {
                  pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                  lookbehind: !0,
                  alias: "punctuation",
                },
                list: {
                  pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                  lookbehind: !0,
                  alias: "punctuation",
                },
                "url-reference": {
                  pattern:
                    /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                  inside: {
                    variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                    string:
                      /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                    punctuation: /^[\[\]!:]|[<>]/,
                  },
                  alias: "url",
                },
                bold: {
                  pattern: n(
                    /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                      .source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    content: {
                      pattern: /(^..)[\s\S]+(?=..$)/,
                      lookbehind: !0,
                      inside: {},
                    },
                    punctuation: /\*\*|__/,
                  },
                },
                italic: {
                  pattern: n(
                    /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                      .source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    content: {
                      pattern: /(^.)[\s\S]+(?=.$)/,
                      lookbehind: !0,
                      inside: {},
                    },
                    punctuation: /[*_]/,
                  },
                },
                strike: {
                  pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    content: {
                      pattern: /(^~~?)[\s\S]+(?=\1$)/,
                      lookbehind: !0,
                      inside: {},
                    },
                    punctuation: /~~?/,
                  },
                },
                "code-snippet": {
                  pattern:
                    /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                  lookbehind: !0,
                  greedy: !0,
                  alias: ["code", "keyword"],
                },
                url: {
                  pattern: n(
                    /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                      .source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    operator: /^!/,
                    content: {
                      pattern: /(^\[)[^\]]+(?=\])/,
                      lookbehind: !0,
                      inside: {},
                    },
                    variable: {
                      pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                      lookbehind: !0,
                    },
                    url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                    string: {
                      pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                      lookbehind: !0,
                    },
                  },
                },
              }),
              ["url", "bold", "italic", "strike"].forEach(function (t) {
                ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                  function (n) {
                    t !== n &&
                      (e.languages.markdown[t].inside.content.inside[n] =
                        e.languages.markdown[n]);
                  }
                );
              }),
              e.hooks.add("after-tokenize", function (e) {
                ("markdown" !== e.language && "md" !== e.language) ||
                  (function e(t) {
                    if (t && "string" !== typeof t)
                      for (var n = 0, r = t.length; n < r; n++) {
                        var i = t[n];
                        if ("code" === i.type) {
                          var o = i.content[1],
                            s = i.content[3];
                          if (
                            o &&
                            s &&
                            "code-language" === o.type &&
                            "code-block" === s.type &&
                            "string" === typeof o.content
                          ) {
                            var a = o.content
                                .replace(/\b#/g, "sharp")
                                .replace(/\b\+\+/g, "pp"),
                              l =
                                "language-" +
                                (a = (/[a-z][\w-]*/i.exec(a) || [
                                  "",
                                ])[0].toLowerCase());
                            s.alias
                              ? "string" === typeof s.alias
                                ? (s.alias = [s.alias, l])
                                : s.alias.push(l)
                              : (s.alias = [l]);
                          }
                        } else e(i.content);
                      }
                  })(e.tokens);
              }),
              e.hooks.add("wrap", function (t) {
                if ("code-block" === t.type) {
                  for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
                    var o = t.classes[r],
                      s = /language-(.+)/.exec(o);
                    if (s) {
                      n = s[1];
                      break;
                    }
                  }
                  var a = e.languages[n];
                  if (a) t.content = e.highlight(t.content.value, a, n);
                  else if (n && "none" !== n && e.plugins.autoloader) {
                    var l =
                      "md-" +
                      new Date().valueOf() +
                      "-" +
                      Math.floor(1e16 * Math.random());
                    (t.attributes.id = l),
                      e.plugins.autoloader.loadLanguages(n, function () {
                        var t = document.getElementById(l);
                        t &&
                          (t.innerHTML = e.highlight(
                            t.textContent,
                            e.languages[n],
                            n
                          ));
                      });
                  }
                }
              });
            RegExp(e.languages.markup.tag.pattern.source, "gi"),
              String.fromCodePoint || String.fromCharCode;
            e.languages.md = e.languages.markdown;
          })(e);
      }
      (i.displayName = "markdown"), (i.aliases = ["md"]);
    },
    678990: function (e, t, n) {
      function r(e) {
        (e.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [
                    { pattern: /^=/, alias: "attr-equals" },
                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                  ],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
          (e.languages.markup.tag.inside["attr-value"].inside.entity =
            e.languages.markup.entity),
          (e.languages.markup.doctype.inside["internal-subset"].inside =
            e.languages.markup),
          e.hooks.add("wrap", function (e) {
            "entity" === e.type &&
              (e.attributes.title = e.content.value.replace(/&amp;/, "&"));
          }),
          Object.defineProperty(e.languages.markup.tag, "addInlined", {
            value: function (t, n) {
              var r = {};
              (r["language-" + n] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: e.languages[n],
              }),
                (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
              var i = {
                "included-cdata": {
                  pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                  inside: r,
                },
              };
              i["language-" + n] = {
                pattern: /[\s\S]+/,
                inside: e.languages[n],
              };
              var o = {};
              (o[t] = {
                pattern: RegExp(
                  /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                    /__/g,
                    function () {
                      return t;
                    }
                  ),
                  "i"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: i,
              }),
                e.languages.insertBefore("markup", "cdata", o);
            },
          }),
          Object.defineProperty(e.languages.markup.tag, "addAttribute", {
            value: function (t, n) {
              e.languages.markup.tag.inside["special-attr"].push({
                pattern: RegExp(
                  /(^|["'\s])/.source +
                    "(?:" +
                    t +
                    ")" +
                    /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                  "i"
                ),
                lookbehind: !0,
                inside: {
                  "attr-name": /^[^\s=]+/,
                  "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                      value: {
                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                        lookbehind: !0,
                        alias: [n, "language-" + n],
                        inside: e.languages[n],
                      },
                      punctuation: [
                        { pattern: /^=/, alias: "attr-equals" },
                        /"|'/,
                      ],
                    },
                  },
                },
              });
            },
          }),
          (e.languages.html = e.languages.markup),
          (e.languages.mathml = e.languages.markup),
          (e.languages.svg = e.languages.markup),
          (e.languages.xml = e.languages.extend("markup", {})),
          (e.languages.ssml = e.languages.xml),
          (e.languages.atom = e.languages.xml),
          (e.languages.rss = e.languages.xml);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        (r.displayName = "markup"),
        (r.aliases = ["atom", "html", "mathml", "rss", "ssml", "svg", "xml"]);
    },
    506356: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(658430),
        i = n(334560);
      function o(e) {
        e.register(r.Z),
          e.register(i.Z),
          (function (e) {
            var t = e.util.clone(e.languages.typescript);
            (e.languages.tsx = e.languages.extend("jsx", t)),
              delete e.languages.tsx.parameter,
              delete e.languages.tsx["literal-property"];
            var n = e.languages.tsx.tag;
            (n.pattern = RegExp(
              /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
              n.pattern.flags
            )),
              (n.lookbehind = !0);
          })(e);
      }
      (o.displayName = "tsx"), (o.aliases = []);
    },
    334560: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(416514);
      function i(e) {
        e.register(r.Z),
          (function (e) {
            (e.languages.typescript = e.languages.extend("javascript", {
              "class-name": {
                pattern:
                  /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              builtin:
                /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
            })),
              e.languages.typescript.keyword.push(
                /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
                /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
                /\btype\b(?=\s*(?:[\{*]|$))/
              ),
              delete e.languages.typescript.parameter,
              delete e.languages.typescript["literal-property"];
            var t = e.languages.extend("typescript", {});
            delete t["class-name"],
              (e.languages.typescript["class-name"].inside = t),
              e.languages.insertBefore("typescript", "function", {
                decorator: {
                  pattern: /@[$\w\xA0-\uFFFF]+/,
                  inside: {
                    at: { pattern: /^@/, alias: "operator" },
                    function: /^[\s\S]+/,
                  },
                },
                "generic-function": {
                  pattern:
                    /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                  greedy: !0,
                  inside: {
                    function:
                      /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                    generic: {
                      pattern: /<[\s\S]+/,
                      alias: "class-name",
                      inside: t,
                    },
                  },
                },
              }),
              (e.languages.ts = e.languages.typescript);
          })(e);
      }
      (i.displayName = "typescript"), (i.aliases = ["ts"]);
    },
  },
]);
