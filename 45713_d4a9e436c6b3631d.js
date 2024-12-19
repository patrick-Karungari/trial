"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [45713],
  {
    596565: function (e, t, r) {
      r.d(t, {
        XZ: function () {
          return s;
        },
        NA: function () {
          return a;
        },
        hs: function () {
          return u;
        },
        Fe: function () {
          return c;
        },
        zA: function () {
          return l;
        },
        Tk: function () {
          return p;
        },
        G0: function () {
          return d;
        },
        Vo: function () {
          return f;
        },
      });
      var n = r(298784),
        o = r.n(n),
        i = r(604658);
      function s(e) {
        return e
          .split(".")
          .filter((e) => "properties" !== e && "items" !== e)
          .map(
            (e) => (
              e.match(/SBQ[a-z]/g) &&
                (e = e.replace(/(?<=SBQ)[a-z]/g, (e) => e.toUpperCase())),
              o().startCase(e)
            )
          )
          .join(" > ");
      }
      function a(e, t, r) {
        const n = e.split(".");
        let o = n[0],
          i = null === t || void 0 === t ? void 0 : t[o];
        for (let s = 1; s < n.length; s++) {
          const e = n[s];
          if ("items" === e || "anyOf" === e || "oneOf" === e) {
            const e = r[o] || 0;
            i = null === i || void 0 === i ? void 0 : i[e];
          } else if ("then" === e || "else" === e) {
            const e = r.then;
            i = null === i || void 0 === i ? void 0 : i[e];
          } else i = null === i || void 0 === i ? void 0 : i[e];
          o += "." + e;
        }
        return i;
      }
      function u(e, t) {
        const r = e.split(".");
        let n = r[0],
          o = r[0];
        for (let i = 1; i < r.length; i++) {
          const e = r[i];
          if ("items" === e) {
            o += "." + (t[n] || 0);
          } else o += "." + e;
          n += "." + e;
        }
        return o;
      }
      function c(e) {
        return e
          .split(".")
          .filter((e) => !i.GN.includes(e))
          .join(".");
      }
      function l(e) {
        return d(p(e));
      }
      function p(e) {
        return e.split(".");
      }
      function d(e) {
        return ("properties." + e.join(".properties.")).replace(
          /properties.items/g,
          "items"
        );
      }
      function f(e, t) {
        return e ? (t ? e + "." + t : "" + e) : "" + t;
      }
    },
    375126: function (e, t, r) {
      r.d(t, {
        kR: function () {
          return d;
        },
        Q2: function () {
          return f;
        },
        NK: function () {
          return y;
        },
        $I: function () {
          return v;
        },
        Oh: function () {
          return h;
        },
        xd: function () {
          return S;
        },
        e5: function () {
          return I;
        },
        LK: function () {
          return C;
        },
        oY: function () {
          return k;
        },
        gT: function () {
          return q;
        },
      });
      var n = r(596565),
        o = r(298784),
        i = r.n(o),
        s = r(23491),
        a = r(285556),
        u = r(468891);
      function c(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function l(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function s(e) {
              c(i, n, o, s, a, "next", e);
            }
            function a(e) {
              c(i, n, o, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function d(e, t, r) {
        return (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" === typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
              )),
              n.forEach(function (t) {
                p(e, t, r[t]);
              });
          }
          return e;
        })({ valuesOnly: !0, type: e.type, configsPaths: r }, t);
      }
      function f(e, t, r) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = l(function* (e, t, r) {
          const n = d(e, t, r);
          return yield (0,
          a.ZP)(null, `corp-api/lookup/${e.id}/config?${u.stringify(n)}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function y(e) {
        const t = new Map();
        return e.forEach((e) => t.set(e.path, e)), t;
      }
      function v(e) {
        const t = new Map();
        return e.forEach((e) => t.set(e.newPath || e.path, e)), t;
      }
      function h(e, t, r, n, o, i, s, a, u) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = l(function* (e, t, r, o, i, s, u, c, l) {
          const p = b(r, s),
            f = {};
          for (const a in p) {
            const e = C(p[a], i, (0, n.Tk)(a));
            f[a] = e;
          }
          const g = d(e, u),
            { config: y, version: v } = yield (0, a.ZP)(
              null,
              `corp-api/lookup/${e.id}/config`,
              {
                method: "POST",
                body: {
                  lastVersion: t,
                  query: g,
                  changes: f,
                  attributes: u,
                  type: c,
                  user: l,
                  valuesOnly: !0,
                },
              }
            );
          return { config: y, version: v };
        })).apply(this, arguments);
      }
      const j = [
          "properties.type",
          "properties.key",
          "properties.currentVersion",
          "properties.fieldVersions",
          "properties.changeLog",
        ],
        S = (e, t, r) => {
          if (null == e) return {};
          const n = P(e, t, r);
          return w(n, t, r);
        },
        P = (e, t, r, n = [], o = [], s = {}) => {
          const a = n.join("."),
            u = n.length ? i().get(e, a) : e;
          if (u.hidden) return s;
          const c = (t.get(a) || {}).newPath,
            l = c || o.join("."),
            p = l ? l.split(".") : [];
          if (c) {
            const e = [...p, "oldPath"].join(".");
            i().set(s, e, a);
          }
          return (
            i().set(s, l, {}),
            Object.entries(u).forEach(([o, a]) => {
              if (i().isPlainObject(a)) {
                const i = [...n, o],
                  a = [...p, o];
                P(e, t, r, i, a, s);
              } else {
                const e = [...p, o].join(".");
                i().set(s, e, a);
              }
            }),
            s
          );
        },
        w = (e, t, r, n = [], o = i().cloneDeep(e)) => {
          const s = n.join("."),
            a = n.length ? i().get(e, s) : e,
            u = r.get(s) || t.get(s) || {};
          return (
            j.includes(s) ||
              a.hidden ||
              ("properties" in a && i().set(o, [...n, "type"], "object"),
              Object.entries(a).forEach(([s, a]) => {
                const u = [...n, s];
                i().isPlainObject(a) ? w(e, t, r, u, o) : i().set(o, u, a);
              }),
              Object.entries(u).forEach(([e, t]) => {
                const r = [...n, e];
                i().set(o, r, t);
              })),
            o
          );
        };
      function I(e, t, r = []) {
        if (!e) return e;
        const o = (0, n.G0)(r),
          a = r.length ? i().get(t, o) : t;
        if (a && (0, s.TD)(a.type, "string") && "Code" === a.widget)
          return JSON.stringify(e);
        if (Array.isArray(e)) return e.map((e) => I(e, t, [...r, "items"]));
        if (i().isPlainObject(e)) {
          const n = {};
          for (const o in e) n[o] = I(e[o], t, [...r, o]);
          return n;
        }
        return e;
      }
      function C(e, t, r = []) {
        if (!e) return e;
        const o = (0, n.G0)(r),
          a = r.length ? i().get(t, o) : t;
        if (a && (0, s.TD)(a.type, "string") && "Code" === a.widget)
          try {
            return JSON.parse(e);
          } catch (u) {
            return e;
          }
        if (Array.isArray(e)) return e.map((e) => C(e, t, [...r, "items"]));
        if (i().isPlainObject(e)) {
          const n = {};
          for (const o in e) n[o] = C(e[o], t, [...r, o]);
          return n;
        }
        return e;
      }
      const k = (e, t, r = [], o = [], s = {}) => {
          if (i().isEmpty(e)) return s;
          const a = o.join("."),
            u = r.join("."),
            c = r.length ? i().get(e, u) : e,
            l = i().keys(c);
          if (Array.isArray(c) || !i().isPlainObject(c) || !l.length) {
            var p;
            const e =
                (null === (p = t.get(a)) || void 0 === p
                  ? void 0
                  : p.newPath) || "",
              r = (0, n.Fe)(e) || u;
            return i().set(s, r, c), s;
          }
          return (
            l.forEach((n) => {
              const i = [...o, "properties", n],
                a = [...r, n];
              k(e, t, a, i, s);
            }),
            s
          );
        },
        q = (e, t, r, o = [], s = [], a = {}) => {
          if (null == e) return a;
          const u = s.join("."),
            c = o.join("."),
            l = o.length ? i().get(e, c) : e,
            p = i().keys(l);
          if (Array.isArray(l) || !i().isPlainObject(l) || !p.length) {
            var d;
            const e =
                (null === (d = t.get(u)) || void 0 === d ? void 0 : d.path) ||
                "",
              s = (0, n.Fe)(e) || c,
              p = C(l, r, o);
            return i().set(a, s, i().cloneDeep(p)), a;
          }
          return (
            p.forEach((n) => {
              const i = [...s, "properties", n],
                u = [...o, n];
              q(e, t, r, u, i, a);
            }),
            a
          );
        },
        b = (e, t) => {
          if (null == e) return {};
          const r = {};
          return (
            i()
              .keys(e)
              .forEach((o) => {
                const i = (0, n.zA)(o),
                  s = t.get(i),
                  a = (null === s || void 0 === s ? void 0 : s.path) || i,
                  u = (0, n.Fe)(a);
                r[u] = e[o];
              }),
            r
          );
        };
    },
    336351: function (e, t, r) {
      r.d(t, {
        PO: function () {
          return f;
        },
        Cy: function () {
          return y;
        },
        AX: function () {
          return v;
        },
        I8: function () {
          return h;
        },
      });
      var n = r(433310),
        o = r(389401),
        i = r(298784),
        s = r.n(i),
        a = (r(827378), r(285556));
      function u(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function c(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function s(e) {
              u(i, n, o, s, a, "next", e);
            }
            function a(e) {
              u(i, n, o, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function l(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              l(e, t, r[t]);
            });
        }
        return e;
      }
      function d() {
        return (d = c(function* (e, t, r, o, i, s) {
          try {
            const u = yield (0, a.ZP)(
              null,
              "internal/expert-management/statsForProject",
              {
                method: "POST",
                body: {
                  projectId: e,
                  columns: t,
                  startTimestamp: r.getTime(),
                  endTimestamp: o.getTime(),
                  workerSpecialization: i,
                  maxGQAScore: s,
                },
              }
            );
            return u.success
              ? u.data
              : (n.Z.error("Failed to fetch project data for projectId", {
                  projectId: e,
                }),
                {});
          } catch (u) {
            return (
              n.Z.error("Failed to fetch project data for projectId", {
                projectId: e,
              }),
              {}
            );
          }
        })).apply(this, arguments);
      }
      function f(e, t, r, n = !0, i, a) {
        const [u, c] = r,
          l = [];
        s().isNil(i) || l.push(`workerSpecialization=${i}`),
          s().isNil(a) || l.push(`maxGQAScore=${a}`);
        const f = (0, o.a)(
          ["projectDataProviderQuery", e, t.join(","), u, c, ...l],
          () =>
            (function (e, t, r, n, o, i) {
              return d.apply(this, arguments);
            })(e, t, u, c, i, a),
          { enabled: n }
        );
        return p({}, f, { data: f.data });
      }
      function g(e, t, r) {
        const [n, o] = t;
        return ["projectDataProviderQuery", e, r.join(","), n, o];
      }
      function y(e, t, r, n) {
        const o = g(e, r, n);
        t.invalidateQueries({ queryKey: o });
      }
      function v(e, t, r, n, o) {
        const i = g(t, o, n);
        e.setQueryData(i, r);
      }
      function h(e, t, r, n, o) {
        const i = g(e, n, r),
          s = t.getQueryData(i);
        return v(t, e, o, r, n), s;
      }
    },
    307752: function (e, t, r) {
      r.d(t, {
        rq: function () {
          return u;
        },
        g5: function () {
          return c;
        },
        vz: function () {
          return l;
        },
        cc: function () {
          return d;
        },
        wR: function () {
          return f;
        },
        M4: function () {
          return g;
        },
        PP: function () {
          return y;
        },
        yG: function () {
          return v;
        },
        z2: function () {
          return h;
        },
        T1: function () {
          return m;
        },
        Vr: function () {
          return j;
        },
        A: function () {
          return S;
        },
        wt: function () {
          return P;
        },
        B1: function () {
          return w;
        },
        O3: function () {
          return I;
        },
        gq: function () {
          return C;
        },
      });
      var n = r(285556),
        o = r(959807),
        i = r.n(o);
      function s(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function a(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function a(e) {
              s(i, n, o, a, u, "next", e);
            }
            function u(e) {
              s(i, n, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function u(e, t) {
        return (0, n.ZP)(null, "internal/task-template/validate", {
          method: "POST",
          body: { paramsJson: JSON.stringify(t), type: e },
        });
      }
      function c(e) {
        return (0, n.ZP)(null, `internal/task-template/${e}`);
      }
      function l(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (
          (p = a(function* (e) {
            const { numChunks: t } = yield (0, n.ZP)(
                null,
                `internal/task-template/${e}/num-asset-chunks`
              ),
              r = [],
              o = yield i().map(
                Array(t).fill(0),
                (function () {
                  var t = a(function* (t, r) {
                    return yield (0,
                    n.ZP)(null, `internal/task-template/${e}/assets/${r}`);
                  });
                  return function (e, r) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            return o.forEach(({ assets: e }) => r.push(...e)), { assets: r };
          })),
          p.apply(this, arguments)
        );
      }
      function d(e, t, r) {
        return (0, n.ZP)(null, `internal/task-template/${e}/assets-tasks`, {
          method: "POST",
          body: { assetId: t, uniqueIds: r },
        });
      }
      function f(e, t, r, o, i) {
        return (0, n.ZP)(null, `internal/task-template/${e}/upload`, {
          method: "POST",
          body: {
            csvData: t,
            batchId: r,
            skipAttachmentProcessing: o,
            uniqueIdColumns: i,
          },
        });
      }
      function g(e, t) {
        return (0, n.ZP)(null, `internal/task-template/${e}/retry-upload`, {
          method: "POST",
          body: { assetId: t },
        });
      }
      function y(e, t, r) {
        return (0, n.ZP)(
          null,
          `internal/task-template/${e}/acknowledge-asset-failure`,
          { method: "POST", body: { assetId: t, acknowledgedFailure: r } }
        );
      }
      function v(e, t, r = !1) {
        return (0, n.ZP)(null, `internal/task-template/${e}`, {
          method: "POST",
          body: {
            partialTemplateJson: JSON.stringify(t),
            skipJsonFormatMode: r,
          },
        });
      }
      function h(e, t) {
        return (0, n.ZP)(
          null,
          `internal/task-template/${e}/fetch-fields-with-internal-fields`,
          { method: "POST", body: { fields: t } }
        );
      }
      function m(e, t) {
        return (0, n.ZP)(
          null,
          `internal/task-template/${e}/task-categorization-metadata`,
          { method: "POST", body: { taskCategorization: t } }
        );
      }
      function j(e) {
        return (0, n.ZP)(
          null,
          `internal/task-template/${e}/task-categorization-metadata`
        );
      }
      function S(e, t) {
        return (0, n.ZP)(
          null,
          `internal/task-template/${e}/task-categorization-batch-metrics`,
          { method: "POST", body: { batchId: t } }
        );
      }
      function P(e) {
        return (0, n.ZP)(
          null,
          `internal/task-template/chat-task-feature-config/${e}`
        );
      }
      function w(e, t) {
        return (0, n.ZP)(
          null,
          `internal/task-template/chat-task-feature-config/${e}`,
          { method: "POST", body: { chatTaskFeatureConfig: t } }
        );
      }
      function I(e) {
        return (0, n.ZP)(
          null,
          `internal/task-template/${e}/parse-workspace-containers`,
          { method: "GET" }
        );
      }
      function C(e, t, r) {
        return (0, n.ZP)(
          null,
          `internal/task-template/${e}/update-benchmark-template`,
          { method: "POST", body: { reviewLevel: t, benchmarkTemplate: r } }
        );
      }
    },
    448230: function (e, t, r) {
      r.d(t, {
        X2: function () {
          return i;
        },
      });
      var n,
        o = r(635003);
      !(function (e) {
        (e.Base = "/allocation"),
          (e.Teams = "/teams"),
          (e.Projects = "/projects"),
          (e.Contributors = "/contributors"),
          (e.UserLookup = "/user-lookup");
      })(n || (n = {}));
      n.Contributors, n.Teams, n.Projects, n.UserLookup;
      function i(e) {
        return `${o.Yw.Allocation}${n.UserLookup}/${e}`;
      }
    },
    75941: function (e, t, r) {
      r.d(t, {
        J: function () {
          return y;
        },
      });
      var n = r(824246),
        o = r(679892),
        i = r.n(o),
        s = r(827378),
        a = r(986910),
        u = r(792739),
        c = r(416534),
        l = r(691067),
        p = r(776845),
        d = r(159400),
        f = r(635003),
        g = "/_next/static/media/ihj.ab0fafd8.gif";
      function y(e, t, r, o, i, s, u, c, l) {
        a.Am.error(
          (0, n.jsx)(h, {
            errorId: e,
            queryType: t,
            userMessage: r,
            serverMessage: o,
            clientMessage: i,
            statusCode: s,
            url: u,
            args: c,
            context: l,
          }),
          { closeButton: m, autoClose: 7e3, closeOnClick: !1 }
        ),
          a.Am.clearWaitingQueue({ containerId: f.E.ID });
      }
      function v(e) {
        try {
          return JSON.stringify(e, null, 2);
        } catch (t) {
          return "Error stringifying object";
        }
      }
      const h = ({
          errorId: e,
          queryType: t,
          userMessage: r,
          serverMessage: o,
          clientMessage: a,
          statusCode: u,
          url: f,
          args: y,
          context: h,
        }) => {
          const { 0: m, 1: j } = (0, s.useState)(!1),
            { 0: S, 1: P } = (0, s.useState)(!1),
            w = `Debug info for ${t} error`,
            I = `https://app.datadoghq.com/logs?query=%40logId%3A${e}`,
            C = "```json\n" + v(y) + "\n```",
            k = "```json\n" + v(h) + "\n```";
          return (0, n.jsxs)("div", {
            className:
              "jsx-1e4dd2bccd9d57c1 scaleui scale-theme scale-tailwind flex flex-col px-1",
            children: [
              r,
              (0, n.jsx)("div", {
                className: "jsx-1e4dd2bccd9d57c1",
                children: (0, n.jsx)(c.zx, {
                  className: "mt-4 w-fit",
                  variant: "neutral",
                  onClick: () => j(!m),
                  children: "Open debug info",
                }),
              }),
              (0, n.jsx)(l.u, {
                open: m,
                onClose: () => j(!1),
                title: (0, n.jsxs)("div", {
                  className: "jsx-1e4dd2bccd9d57c1 flex justify-center gap-2",
                  children: [
                    S &&
                      (0, n.jsx)("div", {
                        style: {
                          display: "inline-block",
                          width: 25,
                          height: 25,
                        },
                        className: "jsx-1e4dd2bccd9d57c1",
                        children: (0, n.jsx)("img", {
                          src: g,
                          style: { maxWidth: "100%", maxHeight: "100%" },
                          className: "jsx-1e4dd2bccd9d57c1",
                        }),
                      }),
                    w,
                    S &&
                      (0, n.jsx)("div", {
                        style: {
                          display: "inline-block",
                          width: 25,
                          height: 25,
                        },
                        className: "jsx-1e4dd2bccd9d57c1",
                        children: (0, n.jsx)("img", {
                          src: g,
                          style: { maxWidth: "100%", maxHeight: "100%" },
                          className: "jsx-1e4dd2bccd9d57c1",
                        }),
                      }),
                  ],
                }),
                children: (0, n.jsxs)("div", {
                  className: "jsx-1e4dd2bccd9d57c1 flex flex-col",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "jsx-1e4dd2bccd9d57c1 row flex gap-2",
                      children: [
                        (0, n.jsx)(c.zx, {
                          variant: "neutral",
                          icon: { type: "copy" },
                          onClick: () => {
                            navigator.clipboard.writeText(e), P(!0);
                          },
                          children: "Copy Datadog logId",
                        }),
                        (0, n.jsx)(c.zx, {
                          variant: "neutral",
                          icon: { type: "external-link-alt" },
                          onClick: () => {
                            window.open(I, "_blank"), P(!0);
                          },
                          children: "Open in Datadog",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "jsx-1e4dd2bccd9d57c1 row",
                      children: [
                        (0, n.jsx)(p.ZT.Subtitle3, {
                          children: "Client debug message",
                        }),
                        (0, n.jsx)(p.ZT.Paragraph3, {
                          children:
                            null !== a && void 0 !== a
                              ? a
                              : "No client debug message provided.",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "jsx-1e4dd2bccd9d57c1 row",
                      children: [
                        (0, n.jsx)(p.ZT.Subtitle3, {
                          children: "Server debug message",
                        }),
                        (0, n.jsx)(p.ZT.Paragraph3, {
                          className: "whitespace-pre-line",
                          children: o
                            ? JSON.stringify(o, null, 2).replace(/\\n/g, "\n")
                            : "No server debug message provided.",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "jsx-1e4dd2bccd9d57c1 row",
                      children: [
                        (0, n.jsx)(p.ZT.Subtitle3, { children: "Status code" }),
                        (0, n.jsx)(p.ZT.Paragraph3, {
                          children:
                            null !== u && void 0 !== u
                              ? u
                              : "No status code provided.",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "jsx-1e4dd2bccd9d57c1 row",
                      children: [
                        (0, n.jsx)(p.ZT.Subtitle3, { children: "URL" }),
                        (0, n.jsx)(p.ZT.Paragraph3, {
                          children:
                            null !== f && void 0 !== f ? f : "No URL provided.",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "jsx-1e4dd2bccd9d57c1 row",
                      children: [
                        (0, n.jsx)(p.ZT.Subtitle3, {
                          children:
                            "query" === t ? "Query key" : "Mutation args",
                        }),
                        (0, n.jsx)(d.U, { className: "mt-2", markdown: C }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "jsx-1e4dd2bccd9d57c1",
                      children: [
                        (0, n.jsx)(p.ZT.Subtitle3, {
                          children: "Additional context",
                        }),
                        h
                          ? (0, n.jsx)(d.U, { className: "mt-2", markdown: k })
                          : (0, n.jsx)(p.ZT.Paragraph3, {
                              children: "No additional context provided.",
                            }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(i(), {
                id: "1e4dd2bccd9d57c1",
                children:
                  ".row.jsx-1e4dd2bccd9d57c1{width:500px;margin-bottom:20px}",
              }),
            ],
          });
        },
        m = ({ closeToast: e }) =>
          (0, n.jsx)(u.G, {
            icon: ["fas", "times"],
            className: "scale-tailwind cursor-pointer",
            onClick: (t) => e(t),
            size: "lg",
          });
    },
    45713: function (e, t, r) {
      r.d(t, {
        Ehq: function () {
          return T;
        },
        KL5: function () {
          return E;
        },
        UHq: function () {
          return Z;
        },
        mCI: function () {
          return O;
        },
        Yq8: function () {
          return D;
        },
        qbx: function () {
          return $;
        },
        QZO: function () {
          return F;
        },
        z: function () {
          return A;
        },
        ajv: function () {
          return R;
        },
        d$i: function () {
          return K;
        },
        xw5: function () {
          return G;
        },
        arZ: function () {
          return B;
        },
        Vw9: function () {
          return Q;
        },
        zeO: function () {
          return N;
        },
        qSC: function () {
          return L;
        },
        hS5: function () {
          return x;
        },
        tyr: function () {
          return U;
        },
        IZk: function () {
          return _;
        },
        LyN: function () {
          return V;
        },
        c7P: function () {
          return M;
        },
        vrU: function () {
          return J;
        },
        hPt: function () {
          return W;
        },
        QB8: function () {
          return z;
        },
        Qe6: function () {
          return H;
        },
        mA9: function () {
          return Y;
        },
        ig$: function () {
          return X;
        },
        bpE: function () {
          return ee;
        },
        FYh: function () {
          return te;
        },
        f3X: function () {
          return re;
        },
        sS2: function () {
          return ne;
        },
        yYk: function () {
          return oe;
        },
        oFU: function () {
          return ie;
        },
        lbG: function () {
          return se;
        },
        GFN: function () {
          return ae;
        },
        $Mf: function () {
          return ue;
        },
        ohE: function () {
          return ce;
        },
        flJ: function () {
          return le;
        },
        Hvs: function () {
          return pe;
        },
        aat: function () {
          return de;
        },
        cE3: function () {
          return fe;
        },
        _ZL: function () {
          return ge;
        },
        y6O: function () {
          return ye;
        },
        igJ: function () {
          return ve;
        },
        lBR: function () {
          return he;
        },
        b7x: function () {
          return me;
        },
        oOk: function () {
          return je;
        },
        O8x: function () {
          return Se;
        },
        BNp: function () {
          return Pe;
        },
        OO$: function () {
          return we;
        },
        zFK: function () {
          return Ie;
        },
        p4M: function () {
          return Ce;
        },
        r3d: function () {
          return ke;
        },
        K5h: function () {
          return qe;
        },
        gcI: function () {
          return be;
        },
        RBr: function () {
          return Te;
        },
        eL4: function () {
          return Ee;
        },
        mr1: function () {
          return Ze;
        },
        GET: function () {
          return Oe;
        },
        SaT: function () {
          return De;
        },
        PYZ: function () {
          return $e;
        },
        Slp: function () {
          return Fe;
        },
        IxA: function () {
          return Ae;
        },
        WWw: function () {
          return Re;
        },
        ndy: function () {
          return Ke;
        },
        wJA: function () {
          return Ge;
        },
        $4W: function () {
          return Be;
        },
        LSR: function () {
          return Qe;
        },
        kxR: function () {
          return Ne;
        },
        D17: function () {
          return Le;
        },
        kHb: function () {
          return xe;
        },
        AUI: function () {
          return Ue;
        },
        H5A: function () {
          return _e;
        },
        G95: function () {
          return Ve;
        },
        ghy: function () {
          return Me;
        },
        WqH: function () {
          return Je;
        },
        PzI: function () {
          return We;
        },
        r4r: function () {
          return ze;
        },
        RDg: function () {
          return He;
        },
        UqN: function () {
          return Ye;
        },
        B38: function () {
          return Xe;
        },
        Z$$: function () {
          return et;
        },
        Iyt: function () {
          return tt;
        },
        dqo: function () {
          return rt;
        },
        D0l: function () {
          return nt;
        },
        wvb: function () {
          return ot;
        },
        AEE: function () {
          return it;
        },
        Vaz: function () {
          return st;
        },
        SmL: function () {
          return at;
        },
        biN: function () {
          return ut;
        },
        $cE: function () {
          return ct;
        },
        TLh: function () {
          return lt;
        },
        lUY: function () {
          return pt;
        },
        vCj: function () {
          return dt;
        },
        E9E: function () {
          return ft;
        },
        i9D: function () {
          return gt;
        },
        YFx: function () {
          return yt;
        },
        Avp: function () {
          return vt;
        },
        VvI: function () {
          return ht;
        },
        RMW: function () {
          return mt;
        },
        KMX: function () {
          return jt;
        },
        Gm2: function () {
          return St;
        },
        tVl: function () {
          return Pt;
        },
        raj: function () {
          return wt;
        },
        rS$: function () {
          return It;
        },
        d_U: function () {
          return Ct;
        },
        qxj: function () {
          return kt;
        },
        Wp6: function () {
          return qt;
        },
        ae1: function () {
          return bt;
        },
        aTy: function () {
          return Tt;
        },
        JjJ: function () {
          return Et;
        },
        jym: function () {
          return Zt;
        },
        OF8: function () {
          return Ot;
        },
        gDC: function () {
          return Dt;
        },
        dRY: function () {
          return $t;
        },
        xIU: function () {
          return Ft;
        },
        h6x: function () {
          return At;
        },
        TvW: function () {
          return Rt;
        },
        o2J: function () {
          return Kt;
        },
        x4h: function () {
          return Gt;
        },
        ODZ: function () {
          return Bt;
        },
        sk9: function () {
          return Qt;
        },
        JwB: function () {
          return Nt;
        },
        BI8: function () {
          return Lt;
        },
        dlM: function () {
          return xt;
        },
        tqI: function () {
          return Ut;
        },
        ptB: function () {
          return _t;
        },
        aWG: function () {
          return Vt;
        },
        WEv: function () {
          return Mt;
        },
        ZD4: function () {
          return Jt;
        },
        Kyi: function () {
          return Wt;
        },
        eDN: function () {
          return zt;
        },
        HOz: function () {
          return Ht;
        },
        UT6: function () {
          return Yt;
        },
        ato: function () {
          return Xt;
        },
        D2Q: function () {
          return er;
        },
        Egp: function () {
          return tr;
        },
        l5A: function () {
          return rr;
        },
        bI1: function () {
          return nr;
        },
        PSl: function () {
          return or;
        },
        fzI: function () {
          return ir;
        },
        Ffn: function () {
          return sr;
        },
        qvg: function () {
          return ar;
        },
        z0l: function () {
          return ur;
        },
        loh: function () {
          return cr;
        },
        Qsg: function () {
          return lr;
        },
        MK1: function () {
          return pr;
        },
        zsR: function () {
          return dr;
        },
      });
      var n = r(476101),
        o = r(324465),
        i = r(551620),
        s = r(389401),
        a = r(338415),
        u = r(61714),
        c = r(719844),
        l = r(986910),
        p = r(336351),
        d = r(428907),
        f = r(307752),
        g = r(966133),
        y = r(75941),
        v = r(711719),
        h = r.n(v),
        m = (r(298784), r(285556)),
        j = r(187728);
      function S(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function P(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function s(e) {
              S(i, n, o, s, a, "next", e);
            }
            function a(e) {
              S(i, n, o, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function w(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              w(e, t, r[t]);
            });
        }
        return e;
      }
      function C() {
        return "localhost" === window.location.hostname;
      }
      const k = (0, g.jl)();
      const q = new n.t({
          onError: function (e, t) {
            var r, n;
            const o =
              null !== (n = e.userMessage) && void 0 !== n
                ? n
                : "An error occurred. If the problem persists, please Slack @genai-ops-app-oncall in #genai-ops-hub.";
            var i;
            const s =
              null !== (i = e.serverMessage) && void 0 !== i
                ? i
                : null === (r = e.response) || void 0 === r
                ? void 0
                : r.message;
            var a;
            const u =
                null !== (a = e.clientMessage) && void 0 !== a
                  ? a
                  : e.toString(),
              c = null === t || void 0 === t ? void 0 : t.queryHash,
              l = h().v4();
            var p;
            k.error("GenAI Ops Hub query error", {
              logId: l,
              statusCode:
                null !== (p = e.status) && void 0 !== p
                  ? p
                  : "Unknown status code.",
              userMessage: o,
              serverMessage: s,
              clientMessage: u,
              error: e,
              queryKey: c,
            }),
              C() && (0, y.J)(l, "query", o, s, u, e.status, e.url, c);
          },
        }),
        b = new o.L({
          onError: function (e, t, r, n) {
            var o, i, s, a;
            const u =
              null !== (a = e.userMessage) && void 0 !== a
                ? a
                : "An error occurred. If the problem persists, please Slack @genai-ops-app-oncall in #genai-ops-hub.";
            var c;
            const l =
              null !== (c = e.serverMessage) && void 0 !== c
                ? c
                : null === (o = e.response) || void 0 === o
                ? void 0
                : o.message;
            var p;
            const d =
                null !== (p = e.clientMessage) && void 0 !== p
                  ? p
                  : e.toString(),
              f = h().v4();
            var g;
            (null === (i = n.meta) || void 0 === i
              ? void 0
              : i.ignoreGlobalErrorLogging) ||
              k.error("GenAI Ops Hub mutation error", {
                logId: f,
                statusCode:
                  null !== (g = e.status) && void 0 !== g
                    ? g
                    : "Unknown status code.",
                userMessage: u,
                serverMessage: l,
                clientMessage: d,
                error: e,
                variables: t,
                context: r,
              }),
              (null === (s = n.meta) || void 0 === s
                ? void 0
                : s.overrideGlobalErrorToast) ||
                (0, y.J)(f, "mutation", u, l, d, e.status, e.url, t, r);
          },
        }),
        T = C()
          ? new i.S({
              queryCache: q,
              mutationCache: b,
              defaultOptions: {
                queries: { retry: 1, refetchOnWindowFocus: !1 },
              },
            })
          : new i.S({
              queryCache: q,
              mutationCache: b,
              defaultOptions: { queries: { refetchOnWindowFocus: !1 } },
            }),
        E = {
          projectGroup: {
            all: ["projectGroup"],
            lists: () => [...E.projectGroup.all, "list"],
            nodes: () => [...E.projectGroup.all, "node"],
            nodeSummaries: () => [...E.projectGroup.all, "node-summary"],
            pendingNodeSummaries: () => [
              ...E.projectGroup.all,
              "pending-node-summary",
            ],
            benchmarksStatistics: () => [
              ...E.projectGroup.all,
              "benchmark-statistics",
            ],
            sxsQualitySignals: () => [
              ...E.projectGroup.all,
              "sxs-quality-signals",
            ],
            slaGroupDataKey: () => [...E.projectConfigs.all, "slaGroupData"],
            attemptsByReviewLevel: () => [
              ...E.projectGroup.all,
              "attempt-by-review-level",
            ],
            list: () => ({
              queryKey: [...E.projectGroup.lists()],
              queryFn: () => c.O.findProjectGroups(),
            }),
            node: ({ projectId: e }) => ({
              queryKey: [...E.projectGroup.nodes(), e],
              queryFn: () => c.O.findProjectGroupNode(e),
              enabled: !!e,
            }),
            nodeSummary: ({ projectId: e, filters: t }) => ({
              queryKey: [
                ...E.projectGroup.nodeSummaries(),
                e,
                t.batchId,
                t.specializations,
                t.workerSkillSpecializations,
                t.creationDateRange,
                t.updatedDateRange,
                t.workStarted,
              ],
              queryFn: () => c.O.fetchNodeSummary(e, t),
            }),
            pendingNodeSummary: ({ projectId: e }) => ({
              queryKey: [...E.projectGroup.pendingNodeSummaries(), e],
              queryFn: () => c.O.fetchPendingNodeSummary(e),
            }),
            benchmarkStatistics: ({
              projectId: e,
              startDate: t,
              endDate: r,
              workerSpecialization: n,
            }) => ({
              queryKey: [...E.projectGroup.benchmarksStatistics(), e, t, r, n],
              queryFn: () => c.O.fetchBenchmarkStatistics(e, t, r, n),
            }),
            sxsQualitySignal: ({ projectId: e, startDate: t, endDate: r }) => ({
              queryKey: [...E.projectGroup.sxsQualitySignals(), e, t, r],
              queryFn: () =>
                c.O.getProjectSxsQualitySignals({
                  projectId: e,
                  startDate: t,
                  endDate: r,
                }),
            }),
            attemptByReviewLevel: ({
              projectId: e,
              dateRange: t,
              filters: r,
            }) => ({
              queryKey: [...E.projectGroup.attemptsByReviewLevel(), e, t, r],
              queryFn: () =>
                c.O.getAttemptsByReviewLevel({
                  projectId: e,
                  dateRange: t,
                  filters: r,
                }),
            }),
            attemptsByReviewLevelByDate: ({
              projectId: e,
              dateRange: t,
              filters: r,
            }) => ({
              queryKey: [
                ...E.projectGroup.attemptsByReviewLevel(),
                e,
                t.toString(),
                r,
                "by-date",
              ],
              queryFn: () =>
                c.O.getAttemptsByReviewLevelByDate({
                  projectId: e,
                  dateRange: t,
                  filters: r,
                }),
            }),
            batches: ({ projectId: e, search: t, status: r }) => ({
              queryKey: [...E.projectGroup.all, e, "batches", t, r],
              queryFn: () => c.O.getBatches(e, t, r),
            }),
          },
          projectConfigs: {
            all: ["projectConfigs"],
            tags: () => [...E.projectConfigs.all, "tags"],
            tagsNames: () => [...E.projectConfigs.all, "tagsNames"],
            tagsNamesOrIds: () => [...E.projectConfigs.all, "tagsNamesOrIds"],
            find: ({ projectIds: e, configsToFetch: t }) => ({
              queryKey: [...E.projectConfigs.all, e, t],
              queryFn: () => c.O.findProjectConfigs(e, t),
              enabled: !!(null === e || void 0 === e ? void 0 : e.length),
            }),
            metadata: () => ({
              queryKey: [...E.projectConfigs.all, "metadata"],
              queryFn: () => c.O.getConfigMetadata(),
            }),
            data: ({
              configMeta: e,
              configAttributes: t,
              configsPaths: r,
            }) => ({
              queryKey: [...E.projectConfigs.all, "data", e, t, r],
              queryFn: () => c.O.getConfigData(e, t, r),
            }),
            tagsById: (e) => ({
              queryFn: P(function* () {
                return yield c.O.getTagsById(e);
              }),
              queryKey: [...E.projectConfigs.tags(), e],
            }),
            tagsByNameOrId: (e) => ({
              queryFn: P(function* () {
                return /[0-9a-hA-H]{24}/.test(e)
                  ? yield c.O.getTagsById([e])
                  : yield c.O.getTagsByName(e);
              }),
              enabled: !!e,
              queryKey: [...E.projectConfigs.tagsNamesOrIds(), e],
            }),
            hubstaffProjects: () => ({
              all: ["hubstaffProjects"],
              fetch: ({ projectHubstaff: e, createdProjectId: t }) => ({
                queryKey: [...E.projectConfigs.all, "hubstaffProjects"],
                queryFn: () => c.O.updateHubstaffProject(e, t),
              }),
            }),
          },
          devErrorsTesting: {
            all: ["devErrorsTesting"],
            devError: ({ projectId: e, status: t }) => ({
              queryKey: [...E.devErrorsTesting.all, e],
              queryFn: () => c.O.getDevError(e, t),
            }),
          },
          attemptAudit: {
            all: ["attemptAudits"],
            attemptAuditLookups: () => [...E.attemptAudit.all, "lookup"],
            attemptAuditLookup: ({ taskId: e }) => ({
              queryKey: [...E.attemptAudit.attemptAuditLookups(), e],
              queryFn: () => c.O.attemptAuditLookup(e),
            }),
          },
          subtasks: {
            all: ["substasks"],
            unclaimedSubstasksResponses: () => [
              ...E.projectGroup.all,
              "unclaimed-responses",
            ],
            unclaimedSubstasksResponse: ({ projectId: e }) => ({
              queryKey: [...E.subtasks.unclaimedSubstasksResponses(), e],
              queryFn: () => c.O.findUnclaimedSubstasksResponse(e),
            }),
          },
          taskAttempts: {
            all: ["taskAttempts"],
            forTaskLookup: () => [...E.taskAttempts.all, "forTaskLookup"],
            getForTaskLookup: (e) => ({
              queryKey: [...E.taskAttempts.forTaskLookup(), e],
              queryFn: () => c.O.getTaskAttemptForTaskLookup(e),
              enabled: !!e,
            }),
          },
          projects: {
            all: ["projects"],
            details: () => [...E.projects.all, "details"],
            taskers: () => [...E.projects.all, "taskers"],
            isActive: () => [...E.projects.all, "isActive"],
            linkedProjects: (e) => ({
              queryKey: [...E.projects.all, "linkedProjects", e],
              queryFn: () => c.O.getLinkedProjectOptionsFromIds(e),
            }),
            projectRoles: () => [...E.projects.all, "projectRoles"],
            exampleSubtasks: () => [...E.projects.all, "subtasks"],
            qmProjects: () => [...E.projects.all, "qmProjects"],
            projectCosts: () => [...E.projects.all, "projectCosts"],
            lintersRatesStatsKey: () => [
              ...E.projects.all,
              "lintersRatesStats",
            ],
            l8EscalatedTasksRateKey: () => [
              ...E.projects.all,
              "l8ScalatedTasksRate",
            ],
            cheatingFlaggedTasksKey: () => [
              ...E.projects.all,
              "cheatingFlaggedTasks",
            ],
            searches: () => [...E.projects.all, "search"],
            taskersWithStrikeTagsKey: () => [
              ...E.projects.all,
              "taskersWithStrikeTags",
            ],
            projectFinanceGuardrails: () => [
              ...E.projects.all,
              "projectFinanceGuardrails",
            ],
            projectFinanceAlerts: () => [
              ...E.projects.all,
              "projectFinanceAlerts",
            ],
            slaGroupKey: () => [...E.projects.all, "slaGroup"],
            workerTeamsKey: () => [...E.projects.all, "workerTeams"],
            workerTeamsDataByProjectIdKey: () => [
              ...E.projects.all,
              "workerTeamsDataByProjectId",
            ],
            assignmentsDataByProjectIdKey: () => [
              ...E.projects.all,
              "assignmentsDataByProjectId",
            ],
            chatTaskFeatureConfigKey: () => [
              ...E.projects.all,
              "chatTaskFeatureConfig",
            ],
            projectsNames: () => [...E.projects.all, "projectsNames"],
            slaGroups: () => [...E.projects.all, "slaGroups"],
            projectPipelineV3Config: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, "projectPipelineV3Config"],
              queryFn: () => c.O.fetchProjectPipelineV3Config({ projectId: e }),
            }),
            projectConfigs: ({ projectId: e, configAttributes: t }) => ({
              queryKey: [...E.projects.all, "projectConfigs", e],
              queryFn: () =>
                c.O.fetchProjectConfigs({ projectId: e, configAttributes: t }),
            }),
            projectPriorities: (e) => ({
              queryKey: [...E.projects.all, "projectPriorities", e.toString()],
              queryFn: () => c.O.fetchProjectPriorities(e),
            }),
            projectPriority: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, "projectPriority", e],
              queryFn: () => c.O.fetchProjectPriority({ projectId: e }),
            }),
            projectThroughput: ({
              projectId: e,
              throughputType: t,
              scrollStartDateTime: r,
              scrollEndDateTime: n,
            }) => ({
              queryKey: [...E.projects.all, "projectThroughput", e, t, r, n],
              queryFn: () =>
                c.O.fetchProjectThroughput({
                  projectId: e,
                  throughputType: t,
                  scrollStartDateTime: r,
                  scrollEndDateTime: n,
                }),
            }),
            projectHistoricalRampPlanData: ({
              projectId: e,
              startDate: t,
              endDate: r,
            }) => ({
              queryKey: [...E.projects.all, "historicalRampPlan", e, t, r],
              queryFn: () =>
                c.O.fetchHistoricalRampPlanData({
                  projectId: e,
                  startDate: t,
                  endDate: r,
                }),
            }),
            tasker: ({ projectId: e, query: t }) => ({
              queryKey: [
                ...E.projects.taskers(),
                e,
                t.offset,
                t.limit,
                t.emailOrId,
              ],
              queryFn: () => c.O.findProjectTaskers(e, t),
              keepPreviousData: !0,
            }),
            exampleSubtask: ({ projectId: e }) => ({
              queryKey: [...E.projects.exampleSubtasks(), e],
              queryFn: () => c.O.findProjectExampleSubtasks(e),
            }),
            detail: ({ projectId: e }) => ({
              queryKey: [...E.projects.details(), e],
              queryFn: () => c.O.getProjectById(e),
              enabled: !!e,
            }),
            projectName: (e) => ({
              queryKey: [...E.projects.projectsNames(), e],
              queryFn: () => c.O.getProjectsByIds(e),
              enabled: !!(null === e || void 0 === e ? void 0 : e.length),
            }),
            qmProject: ({ projectId: e }) => ({
              queryKey: [...E.projects.qmProjects(), e],
              queryFn: () => c.O.getQMProject(e),
              enabled: !!e,
            }),
            projectDefaultErrorCategories: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, e, "projectDefaultErrorCategories"],
              queryFn: () => c.O.getProjectDefaultErrorCategories(e),
            }),
            projectSpecificErrorCategories: ({ projectId: e }) => ({
              queryKey: [
                ...E.projects.all,
                e,
                "projectSpecificErrorCategories",
              ],
              queryFn: () => c.O.getProjectSpecificErrorCategories(e),
            }),
            defaultErrorCategoriesEnabled: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, e, "defaultErrorCategoriesEnabled"],
              queryFn: () => c.O.getUseDefaultErrorCategories(e),
            }),
            projectFieldIds: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, e, "projectFieldIds"],
              queryFn: () => c.O.getProjectFieldIds(e),
            }),
            projectCostsByDate: ({ fromDate: e, toDate: t, projectId: r }) => ({
              queryKey: [...E.projects.projectCosts(), r, e, t],
              queryFn: () => c.O.getProjectCostsByDate(e, t, r),
            }),
            projectCostsDaily: ({ projectId: e }) => ({
              queryKey: [...E.projects.projectCosts(), e, "daily"],
              queryFn: () => c.O.getProjectCostsYesterdayAndToday(e),
            }),
            projectCostsCumulative: ({ projectId: e }) => ({
              queryKey: [...E.projects.projectCosts(), e, "cumulative"],
              queryFn: () => c.O.getProjectCostsCumulative(e),
            }),
            projectCostsPerTask: ({ projectId: e, forceUpdate: t }) => ({
              queryKey: [...E.projects.projectCosts(), e, "perTask"],
              queryFn: () => c.O.getProjectCostsPerTask(e, t),
            }),
            projectCostsPerAttemptByReviewLevel: ({ projectId: e }) => ({
              queryKey: [
                ...E.projects.projectCosts(),
                e,
                "perAttemptByReviewLevel",
              ],
              queryFn: () => c.O.getProjectCostPerAttemptByReviewLevel(e),
            }),
            projectFinanceAlertConfigs: ({ projectId: e }) => ({
              queryKey: [...E.projects.projectFinanceAlerts(), e],
              queryFn: () => c.O.getProjectFinanceAlertConfigs(e),
            }),
            projectPausedHistory: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, e, "projectPausedHistory"],
              queryFn: () => c.O.getProjectPausedHistory(e),
            }),
            projectNotificationsSlackChannel: ({ projectId: e }) => ({
              queryKey: [
                ...E.projects.all,
                e,
                "projectNotificationsSlackChannel",
              ],
              queryFn: () => c.O.getProjectNotificationsSlackChannel(e),
            }),
            lintersRatesStats: ({ projectId: e, dateRange: t }) => ({
              queryKey: [...E.projects.lintersRatesStatsKey(), e, t],
              queryFn: () =>
                c.O.getLinterRatesStats({ projectId: e, from: t[0], to: t[1] }),
            }),
            l8EscalatedTasksRate: ({ projectId: e }) => ({
              queryKey: [...E.projects.l8EscalatedTasksRateKey(), e],
              queryFn: () => c.O.getL8EscalatedTasksRate({ projectId: e }),
            }),
            taskersWithStrikeTags: ({ projectId: e }) => ({
              queryKey: [...E.projects.taskersWithStrikeTagsKey(), e],
              queryFn: () => c.O.getTaskersWithStrikeTags({ projectId: e }),
            }),
            cheatingFlaggedTasks: ({ projectId: e }) => ({
              queryKey: [...E.projects.cheatingFlaggedTasksKey(), e],
              queryFn: () => c.O.getCheatingFlaggedTasks({ projectId: e }),
            }),
            tasksTouchedByConfirmedCheaters: ({ projectId: e }) => ({
              queryKey: [
                ...E.projects.all,
                e,
                "useTasksTouchedByConfirmedCheaters",
              ],
              queryFn: () =>
                c.O.getTasksTouchedByConfirmedCheaters({ projectId: e }),
            }),
            workersDeactivatedForCheating: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, e, "workersDeactivatedForCheating"],
              queryFn: () =>
                c.O.getWorkersDeactivatedForCheating({ projectId: e }),
            }),
            search: ({ searchText: e }) => ({
              queryKey: [...E.projects.all, "search", e],
              queryFn: () => c.O.findGenAIProjects(e),
              enabled: !!e,
            }),
            projectLibraryEntry: ({ filters: e }) => ({
              queryKey: ["getProjectLibraryEntries", e],
              queryFn: () => c.O.fetchProjectLibraryEntries(e),
            }),
            status: ({ projectId: e }) => ({
              queryKey: [...E.projects.isActive(), e],
              queryFn: () => c.O.getIsProjectActive(e),
            }),
            prebuildStatus: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, "prebuildStatus", e],
              queryFn: () => c.O.getProjectPrebuildStatus(e),
            }),
            marketplaceStatus: ({ projectId: e }) => ({
              queryKey: [...E.projects.all, "marketplaceStatus", e],
              queryFn: () => c.O.getProjectMarketplaceStatus({ projectId: e }),
            }),
            roles: ({ projectId: e, filters: t }) => ({
              queryKey: [...E.projects.projectRoles(), e, t],
              queryFn: () => c.O.getProjectRoles(e, t),
            }),
            slaGroup: ({ projectId: e }) => ({
              queryKey: [...E.projects.slaGroupKey(), e],
              queryFn: () => c.O.getSLAGroupByProjectId(e),
            }),
            slaGroupParentData: ({ projectGroupId: e }) => ({
              queryKey: [...E.projectGroup.slaGroupDataKey(), e],
              queryFn: () => c.O.getSLAGroupByProjectGroupId(e),
            }),
            workerTeams: ({ projectId: e }) => ({
              queryKey: [...E.projects.workerTeamsKey(), e],
              queryFn: () => c.O.getWorkerTeams(e),
            }),
            allWorkerTeams: () => ({
              queryKey: [...E.projects.all, "allWorkerTeams"],
              queryFn: () => c.O.getAllWorkerTeams(),
            }),
            projectLibraryEntryById: ({ projectIds: e }) => ({
              queryKey: ["getProjectLibraryEntriesByIds", e],
              queryFn: () => c.O.fetchProjectLibraryEntriesByIds(e),
            }),
            chatTaskFeatureConfig: ({ projectId: e }) => ({
              queryKey: [...E.projects.chatTaskFeatureConfigKey(), e],
              queryFn: () => c.O.fetchChatTaskFeatureConfig(e),
            }),
            taskTemplate: ({ projectId: e }) => ({
              queryKey: ["taskTemplate", e],
              queryFn: () => c.O.fetchTaskTemplate(e),
            }),
            workspaceContainerFields: ({ projectId: e }) => ({
              queryKey: ["taskTemplate", "workspaceContainerFields", e],
              queryFn: () => (0, f.O3)(e),
            }),
            workerTeamsDataByProjectId: ({ projectId: e }) => ({
              queryKey: [...E.projects.workerTeamsDataByProjectIdKey(), e],
              queryFn: () => c.O.getWorkerTeamsDataByProjectId(e),
            }),
            assignmentsDataByProjectId: ({ projectId: e }) => ({
              queryKey: [...E.projects.assignmentsDataByProjectIdKey(), e],
              queryFn: () => c.O.assignmentsDataByProjectId(e),
            }),
            reviewLevels: ({ projectId: e }) => ({
              queryKey: ["reviewLevels", e],
              queryFn: () => c.O.getReviewLevels(e),
            }),
            taskModels: ({ projectId: e }) => ({
              queryKey: [e],
              queryFn: () => c.O.getProjectTaskModels(e),
            }),
            throttleStats: ({ projectId: e }) => ({
              queryKey: ["throttleStats", e],
              queryFn: () => c.O.getThrottleStats(e),
            }),
          },
          templates: {
            projectSetupDefaultTemplates: () => ({
              queryKey: [],
              queryFn: () => c.O.getProjectSetupDefaultTemplates(),
            }),
          },
          taskReplications: {
            all: ["taskReplications"],
            fetch: ({ projectId: e }) => ({
              queryKey: [...E.taskReplications.all, e],
              queryFn: () => c.O.fetchTaskReplications(e),
            }),
          },
          audits: {
            all: ["audits"],
            chatBulkAudits: ({ projectId: e }) => ({
              queryKey: [...E.audits.all, e],
              queryFn: () => c.O.getChatBulkAudits(e),
            }),
          },
          qcSpecDoc: {
            qualityControlSpecDoc: ["qualityControlSpecDoc"],
            archieSpecDoc: ["archieSpecDoc"],
            precisionRecallResults: ["precisionRecallResults"],
            getQualityControlSpecDoc: ({ projectId: e }) => ({
              queryKey: [...E.qcSpecDoc.qualityControlSpecDoc, e],
              queryFn: () => c.O.getQualityControlSpecDoc(e),
              staleTime: 1e4,
            }),
            getArchieQCSpecDoc: ({ projectId: e }) => ({
              queryKey: [...E.qcSpecDoc.archieSpecDoc, e],
              queryFn: () => c.O.getArchieQCSpecDoc(e),
              staleTime: 1e4,
            }),
            specDifferences: ["specDifferences"],
            getSpecDifferences: ({ projectId: e }) => ({
              queryKey: [...E.qcSpecDoc.specDifferences, e],
              queryFn: () => c.O.checkSpecDifferences(e),
              staleTime: 1e4,
            }),
            syncSpec: ({ projectId: e }) => ({
              queryKey: [...E.qcSpecDoc.specDifferences, "sync", e],
              queryFn: () => c.O.syncSpecDoc(e),
            }),
          },
          qcEndpointResponse: {
            all: ["qcEndpointResponse"],
            getArchieQCEndpointResponse: ({
              projectId: e,
              attemptIds: t,
              specDocRubrics: r,
            }) => ({
              queryKey: [...E.qcEndpointResponse.all],
              queryFn: () => c.O.getArchieQCEndpointResponse(e, t, r),
              staleTime: 5e3,
            }),
          },
          bmCreationEndpointResponse: {
            all: ["bmCreationEndpointResponse"],
            runArchieBMCreationEndpointResponse: ({ projectId: e }) => ({
              queryKey: [...E.bmCreationEndpointResponse.all],
              queryFn: () => c.O.runArchieBMCreationEndpointResponse(e),
              staleTime: 5e3,
            }),
          },
          users: {
            all: ["users"],
            scaliensKey: () => [...E.users.all],
            isUserFromQcTeam: () => [...E.users.all, "isUserFromQcTeam"],
            lookupScaliens: ({ email: e }) => ({
              queryKey: [...E.users.scaliensKey(), e],
              queryFn: () => c.O.lookupScaliens(e),
            }),
            lookupUsersByEmail: ({ email: e }) => ({
              queryKey: [...E.users.all, "lookupUsersByEmail", e],
              queryFn: () => c.O.lookupUsersByEmail(e),
            }),
            fetchUser: ({ userId: e }) => ({
              queryKey: [...E.users.all, e],
              queryFn: () => c.O.fetchUser(e),
            }),
            fetchSkillEntries: ({ workerId: e, filter: t }) => ({
              queryKey: [...E.users.all, "skillEntries", e, !!t],
              queryFn: () =>
                c.O.getWorkerSkillEntriesByWorkerId({
                  workerId: e,
                  filter: !!t,
                }),
            }),
            searchTags: ({ search: e }) => ({
              queryKey: [...E.users.all, "search-tags", e],
              queryFn: () => c.O.searchTags(e),
              enabled: !!e,
            }),
            findCustomers: ({ objectIds: e }) => ({
              queryKey: [...E.users.all, "customers", e],
              queryFn: () => c.O.findCustomers(e),
            }),
            linkedinVanityName: ({ userId: e }) => ({
              queryKey: [...E.users.all, "linkedin-vanity-name", e],
              queryFn: () => c.O.getLinkedinVanityName(e),
            }),
            fraudProfile: ({ userId: e }) => ({
              queryKey: [...E.users.all, "fraud-profile", e],
              queryFn: () => (0, j.Gu)(e),
              enabled: !!e,
            }),
            onboardingState: ({ userId: e }) => ({
              queryKey: [...E.users.all, "onboarding-state", e],
              queryFn: () => c.O.tryToFetchUserOnboardingState(e),
              enabled: !!e,
            }),
            userFromQCTeam: () => ({
              queryKey: [...E.users.isUserFromQcTeam()],
              queryFn: () => c.O.isUserFromQCTeam(),
            }),
            validateHasRole: ({ corpRole: e }) => ({
              queryKey: [...E.users.all, "validateHasRole", e],
              queryFn: () => c.O.validateHasRole({ corpRole: e }),
            }),
            getFullstory: ({ userId: e }) => ({
              queryKey: [...E.users.all, "fullstory", e],
              queryFn: () => c.O.getUserFullstory(e),
              enabled: !!e,
            }),
          },
          teams: {
            all: ["teams"],
            fetchTeams: () => ({
              queryKey: [...E.teams.all],
              queryFn: () => c.O.getAllWorkerTeams(),
            }),
            searchTeams: ({ searchText: e }) => ({
              queryKey: [...E.teams.all, "search", e],
              queryFn: () => c.O.searchTeams(e),
            }),
            fetchTeam: ({ teamId: e }) => ({
              queryKey: [...E.teams.all, e],
              queryFn: () => c.O.fetchTeam(e),
            }),
            fetchTeamContributors: ({ teamId: e }) => ({
              queryKey: [...E.teams.all, "contributors", e],
              queryFn: () => c.O.fetchTeamContributors(e),
            }),
            fetchTeamConfig: ({ teamId: e }) => ({
              queryKey: [...E.teams.all, "config", e],
              queryFn: () => c.O.fetchTeamConfig(e),
            }),
            fetchTeamAssignmentsWithExtras: ({
              teamId: e,
              includeInherited: t,
            }) => ({
              queryKey: [...E.teams.all, "assignments", e, t],
              queryFn: () => c.O.fetchTeamAssignmentsWithExtras(e, t),
            }),
            fetchTeamAssignmentEvents: ({ teamId: e }) => ({
              queryKey: [...E.teams.all, "assignmentEvents", e],
              queryFn: () => c.O.fetchTeamAssignmentEvents(e),
            }),
            fetchTeamContributorEvents: ({ teamId: e }) => ({
              queryKey: [...E.teams.all, "contributorEvents", e],
              queryFn: () => c.O.fetchTeamContributorEvents(e),
            }),
          },
          admin: {
            all: ["admin"],
            finances: () => [...E.admin.all, "finances"],
            financeGlobalConfigs: () => ({
              queryKey: [...E.admin.finances(), "globalConfigs"],
              queryFn: () => c.O.getFinanceGlobalConfigs(),
            }),
            financeGuardrailConfigs: ({ projectId: e }) => ({
              queryKey: [...E.admin.finances(), "guardrailConfigs", e],
              queryFn: () => c.O.getFinanceGuardrailConfigs(e),
            }),
            billingApprovalRequests: () => ({
              queryKey: [...E.admin.finances(), "approvalRequests"],
              queryFn: () => c.O.getAllBillingApprovalRequests(),
            }),
            financeApprovalRequests: () => ({
              queryKey: [...E.admin.finances(), "approvalRequests"],
              queryFn: () => c.O.getAllFinanceApprovalRequests(),
            }),
            financeApprovalRequestByProjectId: ({ projectId: e }) => ({
              queryKey: [...E.admin.financeApprovalRequests().queryKey, e],
              queryFn: () => c.O.getFinanceApprovalRequestsByProjectId(e),
            }),
            createFinanceApprovalRequest: (e) => ({
              queryKey: [...E.admin.finances(), "createApprovalRequest"],
              queryFn: () => c.O.createFinanceApprovalRequest(e),
            }),
            userAndProjectNames: (e) => ({
              queryKey: [
                ...E.admin.financeApprovalRequests().queryKey,
                "userAndProjectNames",
              ],
              queryFn: () => c.O.getUserAndProjectNames(e),
            }),
            userAndProjectBillingNames: (e) => ({
              queryKey: [
                ...E.admin.financeApprovalRequests().queryKey,
                "userAndProjectNames",
              ],
              queryFn: () => c.O.getUserAndProjectNames(e),
            }),
            permittedEmails: () => ({
              queryKey: [...E.admin.all, "permittedEmails"],
              queryFn: () => c.O.getPermittedEmails(),
            }),
            defaults: () => ({
              queryKey: [...E.admin.all, "defaults"],
              queryFn: () => c.O.getAdminFinanceDefaults(),
            }),
          },
          jobs: {
            all: ["jobs"],
            byQuery: (e) => ({
              queryKey: [...E.jobs.all, e],
              queryFn: () => c.O.fetchJobsByQuery(e),
            }),
            cache: ({ corpJobId: e }) => ({
              queryKey: [...E.jobs.all, e],
              queryFn: () => c.O.fetchCorpJobCache(e),
            }),
          },
          redash: {
            all: ["redash"],
            runQuery: ({ queryUrl: e, queryParams: t }) => ({
              queryKey: [...E.redash.all, e, JSON.stringify(t)],
              queryFn: () =>
                c.O.runRedashQuery({ queryUrl: e, queryParams: t }),
            }),
          },
          courses: {
            courseById: ({ courseId: e }) => ({
              queryKey: ["getCourseById", e],
              queryFn: () => c.O.getCourseById(e || ""),
              enabled: !!e,
            }),
          },
          coursesv2: {
            all: ["coursesv2"],
            courseV2LibraryEntryById: ({ projectId: e }) => ({
              queryKey: ["getCourseV2LibraryEntriesById", e],
              queryFn: () => c.O.fetchCourseV2LibraryEntriesById(e),
            }),
            createOrUpdateCourseV2: (e) => ({
              queryKey: ["createOrUpdateCourseV2", e],
              queryFn: () => c.O.createOrUpdateCourseV2(e),
            }),
            courseV2ById: ({ courseId: e }) => ({
              queryKey: ["getCourseV2ById", e],
              queryFn: () => c.O.getCourseV2ById(e),
            }),
            courseV2Templates: () => ({
              queryKey: ["getCourseV2Templates"],
              queryFn: () => c.O.getAllCourseV2Templates(),
            }),
            existingQualificationByCourseName: ({ name: e }) => ({
              queryKey: ["existingQualificationByCourseName"],
              queryFn: () => c.O.getQualificationByCourseName(e),
            }),
            courseV2ReadOnlyChatTask: ({ taskId: e }) => ({
              queryKey: ["courseV2ReadOnlyChatTask", e],
              queryFn: () => c.O.getCourseV2ReadOnlyChatTask(e),
            }),
            courseV2ReadOnlyChatV2Task: ({ taskId: e }) => ({
              queryKey: ["courseV2ReadOnlyChatV2Task", e],
              queryFn: () => c.O.getCourseV2ReadOnlyChatV2Task(e),
            }),
          },
          projectRoles: {
            all: ["projectRoles"],
            projectRolesByUser: (e) => ({
              queryKey: [...E.projectRoles.all, e],
              queryFn: () => c.O.getProjectRolesByUser(e),
              enabled: !!e,
            }),
            qmsByProjects: (e) => ({
              queryKey: [...E.projectRoles.all, "qmsByProjects", e],
              queryFn: () => c.O.getQMsByProjects(e),
              enabled: !!(null === e || void 0 === e ? void 0 : e.length),
            }),
            flagsForStaleRoles: (e) => ({
              queryKey: [...E.projectRoles.all, "flagsForStaleRoles", e],
              queryFn: () => c.O.getFlagsForStaleRoles(e),
            }),
            operationsRoster: () => ({
              queryKey: [...E.projectRoles.all, "operationsRoster"],
              queryFn: () => c.O.getOperationsRoster(),
            }),
            operationsRosterForWeeklyRolePopUp: () => ({
              queryKey: [
                ...E.projectRoles.all,
                "operationsRosterForWeeklyRolePopUp",
              ],
              queryFn: () => c.O.getOperationsRosterForWeeklyRolePopUp(),
            }),
          },
          lookup: {
            all: ["lookup"],
            search: ({ searchText: e }) => ({
              queryKey: [...E.lookup.all, "search", e],
              queryFn: () => c.O.lookupSearch(e),
            }),
            object: (e) => ({
              queryKey: [...E.lookup.all, e],
              queryFn: () => c.O.lookupObject(e),
            }),
          },
          pipelineV3: {
            all: ["pipeline-v3"],
            history: (e) => ({
              queryKey: [...E.pipelineV3.all, e],
              queryFn: () => c.O.getPipelineV3History(e),
            }),
          },
          billing: {
            projectBillingPartitions: ({ projectId: e }) => ({
              queryKey: ["projectBillingPartitions", e],
              queryFn: () => c.O.getProjectBillingPartitions(e),
            }),
            projectBillingProposalApprovers: ({ projectId: e }) => ({
              queryKey: ["projectBillingProposalApprovers", e],
              queryFn: () => c.O.getProjectBillingProposalApprovers(e),
            }),
          },
          modelRegistry: {
            getModelEndpoints: () => ({
              queryKey: ["modelEndpoints"],
              queryFn: () => c.O.getModelEndpoints(),
            }),
          },
          schemaRegistry: {
            getJSONSchemas: () => ({
              queryKey: ["jsonSchemas"],
              queryFn: () => c.O.getJSONSchemas(),
            }),
            getProjectSchemaId: ({ projectId: e }) => ({
              queryKey: ["projectSchemaId", e],
              queryFn: () => c.O.getProjectSchemaId(e),
            }),
            getProjectSchema: ({ projectId: e }) => ({
              queryKey: ["projectSchema", e],
              queryFn: () => c.O.getProjectSchema(e),
            }),
            validateSingleJSON: ({ schemaId: e, json: t }) => ({
              queryKey: ["validateSingleJSON", e, t],
              queryFn: () => c.O.validateSingleJSON(e, t),
            }),
          },
        },
        Z = (e) => (0, s.a)(I({}, E.projectGroup.node(e))),
        O = (e) => (0, s.a)(I({}, E.projects.qmProject({ projectId: e }))),
        D = (e) =>
          (0, s.a)(
            I({}, E.projects.projectDefaultErrorCategories({ projectId: e }))
          ),
        $ = (e) =>
          (0, s.a)(
            I({}, E.projects.projectSpecificErrorCategories({ projectId: e }))
          ),
        F = (e) =>
          (0, s.a)(
            I({}, E.projects.defaultErrorCategoriesEnabled({ projectId: e }))
          ),
        A = (e) =>
          (0, s.a)(I({}, E.projects.projectFieldIds({ projectId: e }))),
        R = (e) =>
          (0, s.a)(I({}, E.projects.projectPausedHistory({ projectId: e }))),
        K = (e, t, r) =>
          (0, s.a)(
            I(
              {},
              E.projects.projectCostsByDate({
                fromDate: e,
                toDate: t,
                projectId: r,
              })
            )
          ),
        G = (e) =>
          (0, s.a)(I({}, E.projects.projectCostsDaily({ projectId: e }))),
        B = (e) =>
          (0, s.a)(I({}, E.projects.projectCostsCumulative({ projectId: e }))),
        Q = (e, t = !1) =>
          (0, s.a)(
            I(
              {},
              E.projects.projectCostsPerTask({ projectId: e, forceUpdate: t })
            )
          ),
        N = (e) =>
          (0, s.a)(
            I(
              {},
              E.projects.projectCostsPerAttemptByReviewLevel({ projectId: e })
            )
          ),
        L = (e) =>
          (0, s.a)(
            I({}, E.projects.projectFinanceAlertConfigs({ projectId: e }))
          ),
        x = (e) =>
          (0, s.a)(I({}, E.admin.financeGuardrailConfigs({ projectId: e }))),
        U = (e) => (0, s.a)(I({}, E.admin.userAndProjectNames(e))),
        _ = (e) =>
          (0, s.a)(
            I({}, E.admin.financeApprovalRequestByProjectId({ projectId: e }))
          ),
        V = () =>
          (0, a.D)({
            mutationFn: ({ request: e }) => c.O.createFinanceApprovalRequest(e),
            onSuccess: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              }),
                (0, l.Am)("Budget request was created successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
            onError: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              });
            },
          }),
        M = () =>
          (0, a.D)({
            mutationFn: ({ request: e, id: t }) =>
              c.O.updateFinanceApprovalRequest(e, t),
            onSuccess: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              }),
                (0, l.Am)("Budget request was updated successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
            onError: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              });
            },
          }),
        J = ({ projectIds: e, configsToFetch: t }) =>
          (0, s.a)(
            I({}, E.projectConfigs.find({ projectIds: e, configsToFetch: t }))
          ),
        W = (e) => {
          const t = (0, u.NL)();
          return (0, a.D)({
            mutationFn: () => c.O.deleteUserAuthenticators(e),
            onSuccess: () => {
              l.Am.success("MFA data deleted successfully"),
                t.invalidateQueries(E.lookup.object(e).queryKey);
            },
          });
        },
        z = (e, t) => {
          const r = (0, u.NL)();
          return (0, a.D)({
            mutationFn: () => c.O.changeBPOUniversalStaffingPermission(e, t),
            onSuccess: () => {
              l.Am.success(
                "Universal staffing permissions updated successfully"
              ),
                r.invalidateQueries(E.lookup.object(e).queryKey);
            },
          });
        },
        H = (e) => {
          const t = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (t) => c.O.updateWhiteListSettings(e, t),
            onSuccess: () => {
              l.Am.success("User IP white list updated successfully"),
                t.invalidateQueries(E.lookup.object(e).queryKey);
            },
          });
        },
        Y = (e, t) => {
          const r = (0, u.NL)();
          return (0, a.D)({
            mutationFn: () => c.O.toggleBPOAdmin(e, t),
            onSuccess: () => {
              l.Am.success("User BPO Admin status updated successfully"),
                r.invalidateQueries(E.lookup.object(e).queryKey);
            },
          });
        },
        X = (e) => {
          const t = (0, u.NL)();
          return (0, a.D)({
            mutationFn: () => c.O.updateTags(e),
            onSuccess: () => {
              l.Am.success("User tags updated successfully"),
                t.invalidateQueries(E.lookup.object(e.userId).queryKey);
            },
          });
        },
        ee = (e) => {
          const t = (0, u.NL)();
          return (0, a.D)({
            mutationFn: () => c.O.createTag(e),
            onSuccess: () => {
              l.Am.success("User tag created successfully"),
                e.userId &&
                  t.invalidateQueries(E.lookup.object(e.userId).queryKey);
            },
          });
        },
        te = ({ search: e }) =>
          (0, s.a)(I({}, E.users.searchTags({ search: e }))),
        re = ({ projectId: e }) =>
          (0, s.a)(I({}, E.projects.taskTemplate({ projectId: e }))),
        ne = ({ projectId: e }) =>
          (0, s.a)(
            I({}, E.projects.workspaceContainerFields({ projectId: e }))
          ),
        oe = ({ projectId: e }) =>
          (0, s.a)(I({}, E.projects.chatTaskFeatureConfig({ projectId: e }))),
        ie = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, chatTaskFeatureConfig: t }) {
                return yield c.O.updateChatTaskFeatureConfig(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({
                queryKey: E.projects.chatTaskFeatureConfigKey(),
                exact: !1,
              });
            },
          }),
        se = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, pipelineV3HookConfig: t }) {
                return yield c.O.updatePipelineV3HookConfig(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          }),
        ae = ({ projectId: e, filters: t }) =>
          (0, s.a)(
            I({}, E.projectGroup.nodeSummary({ projectId: e, filters: t }), {
              staleTime: 3e5,
            })
          ),
        ue = ({ projectId: e }) =>
          (0, s.a)(
            I({}, E.projectGroup.pendingNodeSummary({ projectId: e }), {
              staleTime: 3e5,
            })
          );
      function ce(e) {
        return (0, s.a)(I({}, E.projectGroup.attemptByReviewLevel(e)));
      }
      const le = ({ projectId: e }) =>
          (0, s.a)(
            I({}, E.qcSpecDoc.getQualityControlSpecDoc({ projectId: e }))
          ),
        pe = ({ projectId: e }) =>
          (0, s.a)(I({}, E.qcSpecDoc.getArchieQCSpecDoc({ projectId: e }))),
        de = ({ projectId: e }) =>
          (0, a.D)({
            mutationFn: (t) => c.O.createArchieQCSpecDoc(e, t),
            onSuccess: () => {
              const t = [...E.qcSpecDoc.archieSpecDoc, e];
              T.invalidateQueries({ queryKey: t }),
                T.invalidateQueries({
                  queryKey: [...E.qcSpecDoc.specDifferences, e],
                });
            },
          }),
        fe = ({ projectId: e }) =>
          (0, a.D)({
            mutationFn: ({ groundTruthAttemptIds: t, requirements: r }) =>
              c.O.calculatePrecisionRecallResults(e, t, r),
            onSuccess: () => {
              const t = [...E.qcSpecDoc.precisionRecallResults, e];
              T.invalidateQueries({ queryKey: t });
            },
          }),
        ge = ({ projectId: e }) =>
          (0, a.D)({
            mutationFn: ({
              specDocRubrics: t,
              projectSpecificErrorCategories: r,
            }) => c.O.createQCSpecDoc(e, t, r),
            onSuccess: () => {
              const t = [...E.qcSpecDoc.qualityControlSpecDoc, e];
              T.invalidateQueries({ queryKey: t }),
                T.refetchQueries({ queryKey: t });
            },
          }),
        ye = ({ projectId: e }) =>
          (0, a.D)({
            mutationFn: ({ requirements: t, errorCategories: r }) =>
              c.O.updateArchieQCSpecDoc(e, t, r),
            onSuccess: () => {
              const t = [...E.qcSpecDoc.archieSpecDoc, e];
              T.invalidateQueries({ queryKey: t }),
                T.refetchQueries({ queryKey: t });
            },
          }),
        ve = ({ projectId: e }) =>
          (0, s.a)(I({}, E.qcSpecDoc.getSpecDifferences({ projectId: e }))),
        he = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({
                projectId: e,
                type: t = "missing",
                taxonomy: r,
                criteria: n,
              }) {
                return yield c.O.syncSpecDoc(e, {
                  type: t,
                  taxonomy: r,
                  criteria: n,
                });
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: (t, { projectId: r }) => {
              e.invalidateQueries(E.qcSpecDoc.archieSpecDoc),
                e.invalidateQueries(E.qcSpecDoc.specDifferences),
                e.invalidateQueries([...E.qcSpecDoc.archieSpecDoc, r]);
            },
            onError: (e) => {
              l.Am.error(e.message || "Failed to sync spec doc");
            },
          });
        },
        me = ({ projectId: e }) =>
          (0, a.D)({
            mutationFn: ({ projectId: e, attemptIds: t, archieQCInput: r }) =>
              c.O.getArchieQCEndpointResponse(e, t, r),
            onSuccess: () => {
              const t = [...E.qcEndpointResponse.all, e];
              T.invalidateQueries({ queryKey: t });
            },
          }),
        je = ({ projectId: e }) =>
          (0, a.D)({
            mutationFn: () => c.O.runArchieBMCreationEndpointResponse(e),
            onSuccess: () => {
              const t = [...E.bmCreationEndpointResponse.all, e];
              T.invalidateQueries({ queryKey: t });
            },
          });
      function Se({ projectId: e }) {
        return (0, s.a)(I({}, E.audits.chatBulkAudits({ projectId: e })));
      }
      const Pe = ({ projectId: e, auditName: t, shouldClaim: r = !1 }) => {
          const n = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var n = P(function* (n) {
                return c.O.createChatBulkAuditBatch(e, n, t, r);
              });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ["audits", e] });
            },
          });
        },
        we = ({ projectId: e, filters: t, selectedFilter: r }) => (
          (t = t.filter((e) => e.secondary && e.tertiary)),
          (0, a.D)({
            mutationFn: (function () {
              var n = P(function* (n) {
                return c.O.chatBulkAuditFilteredTasks({
                  projectId: e,
                  filters: t,
                  sampleNumber: n,
                  selectedFilter: r,
                });
              });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
          })
        ),
        Ie = ({ projectId: e }) =>
          (0, s.a)(I({}, E.projects.reviewLevels({ projectId: e }))),
        Ce = (e) => (0, s.a)(I({}, E.projects.linkedProjects(e)));
      function ke(e) {
        return (0, s.a)(I({}, E.projectGroup.batches(e)));
      }
      const qe = ({ projectId: e, changes: t, dateRange: r }) => {
          const n = (0, u.NL)();
          return (0, a.D)({
            mutationFn: () =>
              c.O.updateQualitySignalValidations({ changes: t }),
            onMutate: () =>
              (0, p.I8)(e, n, ["projectQCValidations"], r, (e = {}) =>
                (0, d.ZP)(
                  e,
                  (e) => (
                    e.projectQCValidations || (e.projectQCValidations = []),
                    Object.entries(t).forEach(([t, r]) => {
                      var n;
                      const o =
                          null !==
                            (n = e.projectQCValidations.find(
                              (e) => e.attemptAuditId === t
                            )) && void 0 !== n
                            ? n
                            : {},
                        i = e.projectQCValidations.findIndex(
                          (e) => e.attemptAuditId === t
                        );
                      i >= 0
                        ? (e.projectQCValidations[i] = I({}, o, r))
                        : e.projectQCValidations.push(I({}, o, r));
                    }),
                    e
                  )
                )
              ),
            onSuccess: () => {
              (0, p.Cy)(e, n, r, ["projectQCValidations"]),
                (0, p.Cy)(e, n, r, ["projectQCAverage"]);
            },
            onError(t, o, i) {
              (0, p.AX)(n, e, () => i, ["projectQCValidations"], r);
            },
          });
        },
        be = ({ projectId: e, changes: t, dateRange: r }) => {
          const n = (0, u.NL)();
          return (0, a.D)({
            mutationFn: () =>
              c.O.createOrUpdateQualitySignalVerification({ changes: t }),
            onMutate: () =>
              (0, p.I8)(
                e,
                n,
                ["projectQualitySignalVerifications"],
                r,
                (e = {}) => {
                  const r = Object.entries(t).reduce((t, [r, n]) => {
                    var o, i;
                    const s =
                      null !==
                        (i =
                          null === e ||
                          void 0 === e ||
                          null === (o = e.projectQualitySignalVerifications) ||
                          void 0 === o
                            ? void 0
                            : o[r]) && void 0 !== i
                        ? i
                        : {};
                    return (t[r] = I({}, s, n)), t;
                  }, {});
                  return (0, d.ZP)(
                    e,
                    (e) => (
                      e.projectQualitySignalVerifications ||
                        (e.projectQualitySignalVerifications = {}),
                      (e.projectQualitySignalVerifications = I(
                        {},
                        e.projectQualitySignalVerifications,
                        r
                      )),
                      e
                    )
                  );
                }
              ),
            onSuccess: () => {
              (0, p.Cy)(e, n, r, ["projectQualitySignalVerifications"]),
                (0, p.Cy)(e, n, r, ["projectGQAAverage"]);
            },
            onError(t, o, i) {
              (0, p.AX)(
                n,
                e,
                () => i,
                ["projectQualitySignalVerifications"],
                r
              );
            },
          });
        },
        Te = (e) =>
          (0, a.D)({
            mutationFn: () => c.O.createTasks(e),
            onSuccess: ({ message: e }) => {
              (0, l.Am)(e, {
                type: "success",
                autoClose: 2e3,
                position: "top-right",
              });
            },
            onError: ({ message: e }) => {
              (0, l.Am)(e, {
                type: "error",
                autoClose: 2e3,
                position: "top-right",
              });
            },
          }),
        Ee = (e) =>
          (0, a.D)({
            mutationFn: () => c.O.createSandboxTestUsers(e),
            onSuccess: ({ message: e }) => {
              (0, l.Am)(e, {
                type: "success",
                autoClose: 2e3,
                position: "top-right",
              });
            },
            onError: ({ message: e }) => {
              (0, l.Am)(e, {
                type: "error",
                autoClose: 2e3,
                position: "top-right",
              });
            },
          }),
        Ze = (e, t) =>
          (0, s.a)(I({}, E.projects.tasker({ projectId: e, query: t }))),
        Oe = (e) =>
          (0, s.a)(I({}, E.projects.exampleSubtask({ projectId: e })));
      function De(e) {
        return (0, s.a)(I({}, E.projectGroup.attemptsByReviewLevelByDate(e)));
      }
      const $e = (e) => (0, s.a)(I({}, E.projects.detail(e))),
        Fe = (e) => (0, s.a)(I({}, E.projects.projectName(e))),
        Ae = () => (0, s.a)(I({}, E.projectConfigs.metadata())),
        Re = ({ configMeta: e, configAttributes: t, configsPaths: r }) =>
          (0, s.a)(
            I(
              {},
              E.projectConfigs.data({
                configMeta: e,
                configAttributes: t,
                configsPaths: r,
              }),
              { enabled: !!t }
            )
          ),
        Ke = ({
          configMeta: e,
          configAttributes: t,
          lastVersion: r,
          configJsonSchema: n,
        }) =>
          (0, a.D)({
            mutationFn: ({ changes: o }) =>
              c.O.updateConfigData({
                configMeta: e,
                configAttributes: t,
                lastVersion: r,
                configJsonSchema: n,
                changes: o,
              }),
            onSuccess: () => {
              l.Am.success("Saved changes on config!"),
                T.invalidateQueries(
                  E.projectConfigs.data({ configMeta: e, configAttributes: t })
                    .queryKey
                );
            },
          }),
        Ge = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ emails: e, projectId: t, batchId: r }) {
                return c.O.generateInviteLinks({
                  emails: e,
                  projectId: t,
                  batchId: r,
                });
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              (0, l.Am)("Links generated successfully", {
                type: "success",
                autoClose: 2e3,
                position: "top-left",
              });
            },
          });
      function Be({ projectId: e, dateRange: t }) {
        return (0, s.a)(
          I({}, E.projects.lintersRatesStats({ projectId: e, dateRange: t }))
        );
      }
      function Qe({ projectId: e }) {
        return (0, s.a)(
          I({}, E.projects.l8EscalatedTasksRate({ projectId: e }))
        );
      }
      function Ne({ projectId: e }) {
        return (0, s.a)(
          I({}, E.projects.workersDeactivatedForCheating({ projectId: e }))
        );
      }
      function Le({ projectId: e }) {
        return (0, s.a)(
          I({}, E.projects.taskersWithStrikeTags({ projectId: e }))
        );
      }
      function xe({ projectId: e }) {
        return (0, s.a)(
          I({}, E.projects.cheatingFlaggedTasks({ projectId: e }))
        );
      }
      const Ue = ({ projectId: e }) =>
          (0, s.a)(
            I({}, E.projects.tasksTouchedByConfirmedCheaters({ projectId: e }))
          ),
        _e = ({ searchText: e }) =>
          (0, s.a)(I({}, E.projects.search({ searchText: e }))),
        Ve = (e) =>
          (0, s.a)(
            I({}, E.projects.projectLibraryEntryById({ projectIds: e }))
          ),
        Me = (e) =>
          (0, s.a)(
            I({}, E.coursesv2.courseV2LibraryEntryById({ projectId: e }))
          ),
        Je = (e, t) =>
          (0, s.a)(
            I({}, E.coursesv2.existingQualificationByCourseName({ name: e }), {
              enabled: t,
            })
          ),
        We = (e) =>
          (0, s.a)(I({}, E.coursesv2.courseV2ReadOnlyChatTask({ taskId: e }))),
        ze = (e) =>
          (0, s.a)(
            I({}, E.coursesv2.courseV2ReadOnlyChatV2Task({ taskId: e }))
          ),
        He = (e) => (0, s.a)(I({}, E.jobs.byQuery(e))),
        Ye = (e) => {
          const { corpJobId: t, isJobFinished: r } = e;
          return (0, s.a)(
            I({}, E.jobs.cache({ corpJobId: t }), {
              refetchInterval: 1e4,
              enabled: !!t && !r,
            })
          );
        },
        Xe = (e) => {
          const { queryUrl: t, queryParams: r } = e;
          return (0, s.a)(
            I({}, E.redash.runQuery({ queryUrl: t, queryParams: r }))
          );
        };
      function et({ userId: e }) {
        return (0, s.a)(
          ["user-enable-disable-history", e],
          P(function* () {
            const t = `corp-api/lookup/${e}/permissioningHistory`;
            return yield (0, m.ZP)(null, t, { method: "GET" });
          })
        );
      }
      const tt = (e) =>
          (0, s.a)(I({}, E.taskReplications.fetch({ projectId: e }))),
        rt = () => (0, s.a)(I({}, E.users.userFromQCTeam())),
        nt = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ actionId: e }) {
                return c.O.revertAdminAction(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              e.invalidateQueries({
                queryKey: ["user-enable-disable-history"],
              }),
                l.Am.success("Successfully reverted admin action");
            },
          });
        },
        ot = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, taskIds: t }) {
                return c.O.quarantineTaskReplications(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: (t) => {
              e.invalidateQueries({
                queryKey: ["taskReplications", t.projectId],
              });
            },
          });
        },
        it = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, taskIds: t }) {
                return c.O.unquarantineTaskReplications(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: (t) => {
              e.invalidateQueries({
                queryKey: ["taskReplications", t.projectId],
              });
            },
          });
        },
        st = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* (e) {
                return c.O.provisionSphereWorkspaceLinks(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          }),
        at = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* (e) {
                return c.O.updateProjectDetails(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              e.invalidateQueries({ queryKey: E.projects.qmProjects() }),
                e.invalidateQueries({
                  queryKey: ["getProjectLibraryEntriesByIds"],
                }),
                (0, l.Am)("Project updated successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          });
        },
        ut = (e) => {
          var t;
          return (0, s.a)(
            I({}, E.projectConfigs.tagsById(e), {
              enabled: !!(null === e || void 0 === e ? void 0 : e.length),
              initialData:
                null !==
                  (t = T.getQueryData(E.projectConfigs.tags(), {
                    exact: !1,
                  })) && void 0 !== t
                  ? t
                  : void 0,
            })
          );
        },
        ct = (e) => (0, s.a)(I({}, E.projectConfigs.tagsByNameOrId(e))),
        lt = ({ projectId: e, filters: t }) =>
          (0, s.a)(I({}, E.projects.roles({ projectId: e, filters: t }))),
        pt = (e) => (0, s.a)(I({}, E.projects.workerTeams({ projectId: e }))),
        dt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, userId: t }) {
                return c.O.archiveProject(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({ queryKey: E.projects.searches() }),
                (0, l.Am)("Project disabled successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          }),
        ft = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e }) {
                return c.O.runLookupCommand(e, "bumpProjectActivity");
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({ queryKey: E.projects.searches() }),
                (0, l.Am)("Project's activity bumped successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          }),
        gt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, maxTaskCount: t }) {
                return c.O.enableProject(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({ queryKey: E.projects.searches() }),
                (0, l.Am)("Project enabled successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          }),
        yt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, userEmail: t, userId: r }) {
                return c.O.updateProjectPauseStatus(e, t, r);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({ queryKey: E.projects.searches() }),
                (0, l.Am)("Project pause status updated successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          }),
        vt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ requestId: e, reviewerUserId: t }) {
                return c.O.approveFinanceApprovalRequest(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              }),
                (0, l.Am)("Finance approval request approved successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          }),
        ht = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ requestId: e, reviewerUserId: t }) {
                return c.O.rejectFinanceApprovalRequest(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              }),
                (0, l.Am)("Finance approval request rejected successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          }),
        mt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({
                requestId: e,
                commenterUserId: t,
                commentString: r,
              }) {
                return c.O.commentFinanceApprovalRequest(e, t, r);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              });
            },
          }),
        jt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ requestId: e }) {
                return c.O.cancelFinanceApprovalRequest(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              T.invalidateQueries({
                queryKey: E.admin.financeApprovalRequests().queryKey,
              }),
                (0, l.Am)("Finance approval request cancelled successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          }),
        St = ({ projectId: e }) =>
          (0, s.a)(
            I({}, E.projects.workerTeamsDataByProjectId({ projectId: e }))
          ),
        Pt = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ newProjectRoles: e }) {
                return c.O.addProjectRoles(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              e.invalidateQueries({ queryKey: E.projects.projectRoles() }),
                (0, l.Am)("Roles added successfully", {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          });
        },
        wt = ({ projectId: e }) =>
          (0, s.a)(
            I({}, E.projects.assignmentsDataByProjectId({ projectId: e }))
          ),
        It = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ rolesToUpdate: e }) {
                return c.O.updateProjectRoles(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: (t) => {
              var r;
              if (
                null === t ||
                void 0 === t ||
                null === (r = t.some) ||
                void 0 === r
                  ? void 0
                  : r.call(t, (e) =>
                      null === e || void 0 === e ? void 0 : e.updatedAt
                    )
              )
                e.invalidateQueries({ queryKey: E.projects.projectRoles() }),
                  (0, l.Am)("Roles modified successfully", {
                    type: "success",
                    autoClose: 2e3,
                    position: "top-right",
                  });
              else {
                var n;
                const e =
                  (null === t ||
                  void 0 === t ||
                  null === (n = t[0]) ||
                  void 0 === n
                    ? void 0
                    : n.message) || "Error updating roles";
                (0, l.Am)(e, {
                  type: "error",
                  autoClose: 4e3,
                  position: "top-right",
                });
              }
            },
          });
        },
        Ct = ({ email: e }) =>
          (0, s.a)(I({}, E.users.lookupScaliens({ email: e }))),
        kt = ({ workerId: e, filter: t }) =>
          (0, s.a)(
            I({}, E.users.fetchSkillEntries({ workerId: e, filter: t }))
          ),
        qt = ({ userId: e }) =>
          (0, s.a)(I({}, E.users.fraudProfile({ userId: e }))),
        bt = ({ userId: e }) =>
          (0, s.a)(I({}, E.users.onboardingState({ userId: e }))),
        Tt = ({ userId: e }) =>
          (0, s.a)(I({}, E.users.getFullstory({ userId: e }))),
        Et = (e) => (0, s.a)(I({}, E.users.linkedinVanityName({ userId: e }))),
        Zt = ({ userId: e }) =>
          (0, s.a)(I({}, E.users.fetchUser({ userId: e }))),
        Ot = (e) => (0, s.a)(I({}, E.projects.prebuildStatus(e))),
        Dt = (e) => (0, s.a)(I({}, E.projects.marketplaceStatus(e))),
        $t = (e) => (0, s.a)(I({}, E.projects.projectPriority(e))),
        Ft = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ projectId: e, body: t }) {
                return c.O.saveProjectPriority(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: (e, { projectId: t, throughputType: r }) => {
              T.invalidateQueries({
                queryKey: E.projects.projectPriority({ projectId: t }).queryKey,
              }),
                T.invalidateQueries({
                  queryKey: E.projects.projectThroughput({
                    projectId: t,
                    throughputType: r,
                  }).queryKey,
                });
            },
          }),
        At = ({ projectId: e, configAttributes: t }) =>
          (0, s.a)(
            I(
              {},
              E.projects.projectConfigs({ projectId: e, configAttributes: t })
            )
          ),
        Rt = (e) => (0, s.a)(I({}, E.projects.projectThroughput(e))),
        Kt = (e) =>
          (0, s.a)(I({}, E.projects.projectHistoricalRampPlanData(e))),
        Gt = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* (e) {
                return c.O.createOrUpdateCourseV2(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: (t) => {
              e.invalidateQueries({ queryKey: [t.courseId] }),
                e.invalidateQueries([
                  "getCourseV2LibraryEntriesById",
                  t.projectId,
                ]),
                (0, l.Am)(
                  "Course saved successfully... please publish your course to validate",
                  { type: "success", autoClose: 5e3, position: "top-right" }
                );
            },
          });
        },
        Bt = (e, t) =>
          (0, s.a)(
            I({}, E.coursesv2.courseV2ById({ courseId: e }), { enabled: t })
          ),
        Qt = (e) => (0, s.a)(I({}, E.courses.courseById({ courseId: e }))),
        Nt = () => (0, s.a)(I({}, E.coursesv2.courseV2Templates())),
        Lt = (e) => (0, s.a)(I({}, E.projectRoles.projectRolesByUser(e))),
        xt = () => (0, a.D)((e) => c.O.updateCourseV2Enablement(e)),
        Ut = () => (0, a.D)((e) => c.O.updateCourseV2Archived(e)),
        _t = () => {
          const e = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var e = P(function* (e) {
                return c.O.publishCourseV2(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: (t) => {
              !1 === t.success
                ? (0, l.Am)(t.message)
                : (e.invalidateQueries(["getCourseV2ById", t.courseId]),
                  e.invalidateQueries([
                    "getCourseV2LibraryEntriesById",
                    t.projectId,
                  ]),
                  (0, l.Am)("Course published successfully", {
                    type: "success",
                    autoClose: 2e3,
                    position: "top-right",
                  }));
            },
          });
        },
        Vt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* (e) {
                return yield c.O.createLinearIssue(e);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          }),
        Mt = (e) => (0, s.a)(I({}, E.lookup.object(e))),
        Jt = (e) => (0, s.a)(I({}, E.taskAttempts.getForTaskLookup(e))),
        Wt = (e) => (0, s.a)(I({}, E.pipelineV3.history(e))),
        zt = ({ objectId: e }) => {
          const t = (0, u.NL)();
          return (0, a.D)({
            mutationFn: (function () {
              var t = P(function* (t) {
                const { command: r, successMessage: n, args: o } = t;
                return (
                  yield c.O.runLookupCommand(e, r, o), { successMessage: n }
                );
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            onSuccess: ({ successMessage: r }) => {
              t.invalidateQueries({ queryKey: E.lookup.object(e).queryKey }),
                (0, l.Am)(r, {
                  type: "success",
                  autoClose: 2e3,
                  position: "top-right",
                });
            },
          });
        },
        Ht = (e) => (0, s.a)(I({}, E.users.findCustomers({ objectIds: e }))),
        Yt = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* (e) {
                return c.O.approveBillingProposal(e.billingProposal);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          }),
        Xt = (e) =>
          (0, s.a)(I({}, E.billing.projectBillingPartitions({ projectId: e }))),
        er = (e) =>
          (0, s.a)(
            I({}, E.billing.projectBillingProposalApprovers({ projectId: e }))
          ),
        tr = (e) => (0, s.a)(I({}, E.projects.taskModels({ projectId: e }))),
        rr = (e) => (0, s.a)(I({}, E.projects.throttleStats({ projectId: e }))),
        nr = (e) =>
          (0, a.D)({
            mutationFn: (e) =>
              e.id ? c.O.updateJSONSchema(e) : c.O.addJSONSchema(e),
            onSuccess: (t, r) => {
              var n;
              const o = r.id ? "updated" : "added";
              (0, l.Am)(`JSON Schema ${r.name} ${o} successfully`, {
                type: "success",
                autoClose: 2e3,
                position: "top-right",
              }),
                null === e ||
                  void 0 === e ||
                  null === (n = e.onSuccess) ||
                  void 0 === n ||
                  n.call(e);
            },
          }),
        or = () => (0, s.a)(I({}, E.schemaRegistry.getJSONSchemas())),
        ir = () =>
          (0, a.D)({
            mutationFn: (function () {
              var e = P(function* ({ schemaId: e, projectId: t }) {
                return c.O.assignJSONSchemaToProject(e, t);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              (0, l.Am)("JSON Schema assigned to project successfully", {
                type: "success",
                autoClose: 2e3,
                position: "top-right",
              });
            },
          }),
        sr = (e) =>
          (0, s.a)(
            I({}, E.schemaRegistry.getProjectSchemaId({ projectId: e }))
          ),
        ar = (e) =>
          (0, s.a)(I({}, E.schemaRegistry.getProjectSchema({ projectId: e }))),
        ur = (e, t, r) =>
          (0, s.a)(
            I(
              {},
              E.schemaRegistry.validateSingleJSON({ schemaId: e, json: t }),
              { enabled: null === r || void 0 === r ? void 0 : r.enabled }
            )
          ),
        cr = () =>
          (0, a.D)({
            mutationFn: ({ customer: e, files: t }) =>
              c.O.validateDelivery(e, t),
          }),
        lr = (e, t, r) =>
          (0, s.a)(["extractFileInfo", e, t], () => c.O.extractFileInfo(e, t), {
            enabled: null === r || void 0 === r ? void 0 : r.enabled,
          }),
        pr = (e) =>
          (0, a.D)({
            mutationFn: ({ customer: e, files: t }) =>
              c.O.summarizeDeliveries(e, t),
            onSuccess: (t) => {
              var r;
              null === e ||
                void 0 === e ||
                null === (r = e.onSuccess) ||
                void 0 === r ||
                r.call(e, t);
            },
          }),
        dr = (e) =>
          (0, a.D)({
            mutationFn: ({ projectIds: e }) => c.O.syncKratosSchema(e),
            onSuccess: (t) => {
              var r;
              null === e ||
                void 0 === e ||
                null === (r = e.onSuccess) ||
                void 0 === r ||
                r.call(e, t);
            },
          });
    },
    719844: function (e, t, r) {
      r.d(t, {
        O: function () {
          return C;
        },
      });
      var n = r(285556),
        o = r(351281),
        i = r(468891),
        s = r(298784),
        a = r.n(s),
        u = r(599789),
        c = r(375126),
        l = r(596565),
        p = r(167469),
        d = r(284015),
        f = r(726992),
        g = r(208604),
        y = r(635003),
        v = r(977608),
        h = r(59524),
        m = r(975840),
        j = r(448230);
      function S(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function P(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, r);
            function s(e) {
              S(i, n, o, s, a, "next", e);
            }
            function a(e) {
              S(i, n, o, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function w(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              w(e, t, r[t]);
            });
        }
        return e;
      }
      class C {}
      (C.getDevError = (function () {
        var e = P(function* (e, t) {
          const r = "corp-api/corp-project-group-manager/dev-errors-testing";
          try {
            return yield (0,
            n.ZP)(null, r, { method: "GET", query: { projectId: e, status: t } });
          } catch (a) {
            var i, s;
            throw new o.Z(
              a.status,
              "Some descriptive user-facing message about fetching. This will appear in the user-facing error toast.",
              null !==
                (s =
                  null === (i = a.response) || void 0 === i
                    ? void 0
                    : i.message) && void 0 !== s
                ? s
                : a.toString(),
              "Some specific client context about fetching for debugging.",
              r
            );
          }
        });
        return function (t, r) {
          return e.apply(this, arguments);
        };
      })()),
        (C.mutateDevError = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/corp-project-group-manager/dev-errors-testing";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { status: e, project: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Some descriptive user-facing message about mutating. This will appear in the user-facing error toast.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                "Some specific client context about mutating for debugging.",
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.toggleBPOAdmin = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/lookup/${e}/runCommand/bpoAdminToggle`;
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { isBPOAdmin: t } });
            } catch (s) {
              var i;
              throw new o.Z(
                s.status,
                `Error toggling BPO admin for user ${e}.`,
                null !== (i = s.message) && void 0 !== i ? i : s.toString(),
                `Error toggling BPO admin for user ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateWhiteListSettings = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/lookup/${e}/runCommand/setWorkerIpWhitelist`;
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { ipWhitelist: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                `Error while updating whitelist settings for user: ${e}`,
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error while updating whitelist settings for user: ${e}`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.searchTags = (function () {
          var e = P(function* (e) {
            const t = "corp-api/tags";
            try {
              const r = yield (0, n.ZP)(null, t, { query: { search: e } });
              return null === r || void 0 === r ? void 0 : r.tags;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Error while fetching tags for search: ${e}`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error while fetching tags for search: ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateTags = (function () {
          var e = P(function* ({ userId: e, tagsToAdd: t, tagsToRemove: r }) {
            const i = `corp-api/tags/updateUserTags/${e}`;
            try {
              const e = yield (0, n.ZP)(null, i, {
                method: "POST",
                body: { tagsToAdd: t, tagsToRemove: r },
              });
              return null === e || void 0 === e ? void 0 : e.tags;
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                `Error while updating tags for user: ${e}`,
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error while updating tags for user: ${e}`,
                i
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createTag = (function () {
          var e = P(function* ({ name: e, userId: t }) {
            const r = "corp-api/tags";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { name: e, userId: t } });
            } catch (a) {
              var i;
              let n = `Error while creating tag ${e}`;
              var s;
              throw (
                (t && (n += ` for user: ${t}`),
                new o.Z(
                  a.status,
                  n,
                  null !==
                    (s =
                      null === (i = a.response) || void 0 === i
                        ? void 0
                        : i.message) && void 0 !== s
                    ? s
                    : a.toString(),
                  n,
                  r
                ))
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.changeBPOUniversalStaffingPermission = (function () {
          var e = P(function* (e, t) {
            const r = t
              ? `corp-api/allow_universal/${e}`
              : `corp-api/disallow_universal/${e}`;
            try {
              return yield (0, n.ZP)(null, r, { method: "POST" });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                `Error while updating universal staffing permission for user: ${e}. To update this the user has to be BPO admin.`,
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error while updating universal staffing permission for user: ${e}`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.deleteUserAuthenticators = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/${e}/runCommand/deleteUserAuthenticators`;
            try {
              return yield (0, n.ZP)(null, t, { method: "POST" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't delete user authenticators for ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error deleting user authenticators ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getLinkedinVanityName = (function () {
          var e = P(function* (e) {
            const t = `corp-api/linkedin/linkedin_vanity_name/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't get Linkedin vanity name for ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting Linkedin vanity name for ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findProjectGroupNode = (function () {
          var e = P(function* (e) {
            const t = `corp-api/corp-project-group-manager/projectGroupNode/${e}`;
            try {
              const { result: e } = yield (0, n.ZP)(null, t);
              return e;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't getting project group node.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project group node for project ID ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findProjectGroups = P(function* () {
          const e = "corp-api/corp-project-group-manager/projectGroups";
          try {
            const { result: t } = yield (0, n.ZP)(null, e);
            return t;
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get project groups.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting project groups",
              e
            );
          }
        })),
        (C.updateProjectGroupConfig = (function () {
          var e = P(function* ({
            projectGroupNodeId: e,
            configChanges: t,
            filteredChildren: r,
          }) {
            const i = "corp-api/corp-project-group-manager/projectGroupConfigs";
            try {
              return yield (0, n.ZP)(null, i, {
                method: "POST",
                body: {
                  projectGroupNodeId: e,
                  configChanges: t,
                  filteredChildren: r,
                },
              });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't get project group configs.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting project group configs for projectGroupNode ID ${e}`,
                i
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findUnclaimedSubstasksResponse = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/${e}/unclaimedSubtasksRteReservation`;
            try {
              return (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get unclaimed subtasks response.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting unclaimed subtasks response for project ID ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getTaskAttemptForTaskLookup = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/${e}/taskAttempts`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get task attempts for task lookup.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting task attempts for task ID ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getLinkedProjectOptionsFromIds = (function () {
          var e = P(function* (e) {
            return (yield (0,
            n.ZP)(null, "/corp-api/billing-hub/project/linked-projects-names", { query: { projectIds: e } })).projects;
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchNodeSummary = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/lookup/${e}/pipelineV3HumanNodesSummary`,
              i = new URLSearchParams();
            t.batchId && i.append("batchId", t.batchId),
              t.specializations &&
                i.append("specializations", t.specializations.join(",")),
              t.workerSkillSpecializations &&
                i.append(
                  "workerSkillSpecializations",
                  t.workerSkillSpecializations.join(",")
                ),
              t.creationDateRange &&
                i.append("creationDateRange", t.creationDateRange.toString()),
              t.updatedDateRange &&
                i.append("updatedDateRange", t.updatedDateRange.toString()),
              void 0 !== t.workStarted &&
                i.append("workStarted", t.workStarted.toString());
            const s = `${r}?${i.toString()}`;
            try {
              return yield (0, n.ZP)(null, s, { method: "GET" });
            } catch (c) {
              var a, u;
              throw new o.Z(
                c.status,
                "Couldn't get pipeline nodes summary.",
                null !==
                  (u =
                    null === (a = c.response) || void 0 === a
                      ? void 0
                      : a.message) && void 0 !== u
                  ? u
                  : c.toString(),
                `Error getting pipelineV3HumanNodesSummary for project ID ${e}`,
                s
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchPendingNodeSummary = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/${e}/pipelineV3PendingNodesSummary`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get pending pipeline nodes summary.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting pipelineV3HumanNodesSummary for project ID ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchBenchmarkStatistics = (function () {
          var e = P(function* (e, t, r, i) {
            const s =
              "/corp-api/qm/benchmark-project-metrics/benchmark-statistics";
            try {
              return yield (0,
              n.ZP)(null, s, { method: "GET", query: { projectId: e, startDate: t, endDate: r, workerSpecialization: i } });
            } catch (c) {
              var a, u;
              throw new o.Z(
                c.status,
                "Couldn't get benchmark statistics.",
                null !==
                  (u =
                    null === (a = c.response) || void 0 === a
                      ? void 0
                      : a.message) && void 0 !== u
                  ? u
                  : c.toString(),
                `Error getting benchmark statistics for project ID ${e}`,
                s
              );
            }
          });
          return function (t, r, n, o) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getAttemptsByReviewLevel = (function () {
          var e = P(function* (e) {
            const { projectId: t, dateRange: r, filters: i } = e,
              s =
                "internal/self_serve/qualityProfile/getTaskAttemptInfoByProjectAndDateRange";
            try {
              const e = yield (0, n.ZP)(null, s, {
                method: "GET",
                query: {
                  projectId: t,
                  dateRange: r,
                  filterScaleUsers: i.filterScaleUsers,
                  filterRemotasksUsers: i.filterRemotasksUsers,
                  workerSpecialization: i.workerSpecialization,
                },
              });
              return a().groupBy(e, "attemptedAtReviewLevel");
            } catch (l) {
              var u, c;
              throw new o.Z(
                l.status,
                "Couldn't get task attempts.",
                null !==
                  (c =
                    null === (u = l.response) || void 0 === u
                      ? void 0
                      : u.message) && void 0 !== c
                  ? c
                  : l.toString(),
                `Error getting task attempt info for project ID ${t}`,
                s
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateManualAuditStatus = (function () {
          var e = P(function* ({ projectId: e, changes: t }) {
            const r =
              "internal/self_serve/qualityProfile/manual_updates_by_tasker";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "PUT", body: { projectId: e, changes: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Issue updating manual audit status.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error updating manual audit status for project ID ${e}`,
                r
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.isUserFromQCTeam = P(function* () {
          const e = "internal/self_serve/qualityProfile/isUserFromQCTeam";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET", query: {} });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't define if user is QC or not.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting user QC status.",
              e
            );
          }
        })),
        (C.updateQualitySignalValidations = (function () {
          var e = P(function* ({ changes: e }) {
            const t =
              "internal/self_serve/qualityProfile/bulkUpdateQualityValidations";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { qualityValidationChanges: Object.entries(e).map(([e, t]) => I({}, t, { attemptAuditId: e })) } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Issue creating/updating quality validations.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error creating/updating quality validations.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createOrUpdateQualitySignalVerification = (function () {
          var e = P(function* ({ changes: e }) {
            const t =
              "internal/self_serve/qualityProfile/bulkCreateOrUpdateQualitySignalVerifications";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { signals: Object.values(e) } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Issue creating/updating quality signal verifications.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error creating/updating quality signal verifications.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createProject = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/projectSetup";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Issue creating project: ${e.projectName}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error creating project: ${e.projectName}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createTasks = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/taskCreation";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't create tasks.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error creating tasks.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createSandboxTestUsers = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/sandbox/test_users";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't create Sandbox test users.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error creating sandbox test users.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.importProject = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/importProject";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't import project with project ID ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error importing project with project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectSetupDefaultTemplates = P(function* () {
          const e =
            "corp-api/corp-project-group-manager/projectSetupDefaultTemplates";
          try {
            return (yield (0,
            n.ZP)(null, e, { method: "GET", query: {} })).templates;
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get default templates for project setup.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting default templates for project setup.",
              e
            );
          }
        })),
        (C.getAttemptsByReviewLevelByDate = (function () {
          var e = P(function* (e) {
            const { projectId: t, dateRange: r, filters: i } = e,
              s =
                "internal/self_serve/qualityProfile/getTaskAttemptsAverageGroupedByDay";
            try {
              const e = yield (0, n.ZP)(null, s, {
                method: "GET",
                query: {
                  projectId: t,
                  dateRange: r,
                  filterScaleUsers: i.filterScaleUsers,
                  filterRemotasksUsers: i.filterRemotasksUsers,
                },
              });
              return Object.values(e);
            } catch (c) {
              var a, u;
              throw new o.Z(
                c.status,
                "Couldn't get task attempts in the given date range.",
                null !==
                  (u =
                    null === (a = c.response) || void 0 === a
                      ? void 0
                      : a.message) && void 0 !== u
                  ? u
                  : c.toString(),
                `Error getting task attempts for project ID ${t} in date range ${r}.`,
                s
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getWorkerSkillEntriesByWorkerId = (function () {
          var e = P(function* ({ workerId: e, filter: t }) {
            const r =
              "internal/self_serve/qualityProfile/getWorkerSkillWithMetadataByWorkerId";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "GET", query: { workerId: e, filter: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Could not get worker skill entries.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error getting worker skill entries by worker ID ${e}.`,
                r
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findProjectConfigs = (function () {
          var e = P(function* (e, t) {
            const r = "internal/config/bulk_project_configs/find";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "GET", query: { projectIds: e, configsPaths: null === t || void 0 === t ? void 0 : t.join(",") } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't get project configs.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error getting project configs for project IDs ${e.toString()}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findProjectTaskers = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/specialized-review/${e}/taskers`;
            try {
              return yield (0, n.ZP)(null, r, { method: "GET", query: t });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't get specialized review taskers.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error getting specialized review taskers for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findProjectExampleSubtasks = (function () {
          var e = P(function* (e) {
            const t = `corp-api/specialized-review/${e}/example-subtasks`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get example subtasks for specialized review.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting example subtasks for specialized review for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectById = (function () {
          var e = P(function* (e) {
            const t = `corp-api/projects/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get projects.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project name for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectsByIds = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/projectsNames";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectIds: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get projects.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project names for project IDs ${e.toString()}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getSLAGroupByProjectId = (function () {
          var e = P(function* (e) {
            const t = `corp-api/project-groups?projectId=${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get SLA group for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting SLA group for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getConfigMetadata = P(function* () {
          const e =
            "https://scale-static-assets.s3.us-west-2.amazonaws.com/configMetadata.json";
          try {
            return (yield fetch(e)).json();
          } catch (n) {
            var t, r;
            throw new o.Z(
              n.status,
              "Couldn't get config metadata.",
              null !==
                (r =
                  null === (t = n.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : n.toString(),
              "Error getting config metadata from Scale static assets.",
              e
            );
          }
        })),
        (C.getConfigData = (function () {
          var e = P(function* (e, t, r) {
            try {
              return yield (0, c.Q2)(e, t, r);
            } catch (s) {
              var n, i;
              throw new o.Z(
                s.status,
                "Couldn't get config data.",
                null !==
                  (i =
                    null === (n = s.response) || void 0 === n
                      ? void 0
                      : n.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error getting config data from fetchConfig.",
                ""
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getQMProject = (function () {
          var e = P(function* (e) {
            const t = `corp-api/qm/projects/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectDefaultErrorCategories = (function () {
          var e = P(function* (e) {
            const t = `corp-api/auditErrorCategories/defaultErrorCategories/${e}`;
            try {
              return (yield (0,
              n.ZP)(null, t, { method: "GET" })).errorCategories;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project default error categories.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project default error categories for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectSpecificErrorCategories = (function () {
          var e = P(function* (e) {
            const t = `corp-api/auditErrorCategories/projectSpecificErrorCategories/${e}`;
            try {
              return (yield (0,
              n.ZP)(null, t, { method: "GET" })).errorCategories;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project specific error categories.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project specific error categories for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getUseDefaultErrorCategories = (function () {
          var e = P(function* (e) {
            const t = `corp-api/auditErrorCategories/shouldUseDefaultErrorCategories/${e}`;
            try {
              return (yield (0,
              n.ZP)(null, t, { method: "GET" })).useDefaultErrorCategories;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get use default error categories.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting use default error categories for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectFieldIds = (function () {
          var e = P(function* (e) {
            const t = `corp-api/auditErrorCategories/fieldIds/${e}`;
            try {
              return (yield (0, n.ZP)(null, t, { method: "GET" })).fieldIds;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project field ids.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project field ids for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectCostsByDate = (function () {
          var e = P(function* (e, t, r) {
            const i = "corp-api/corp-project-group-manager/projectCosts";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "GET", query: { fromDate: e, toDate: t, projectId: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                `Couldn't get project costs in date range ${e} to ${t}.`,
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Couldn't get project costs for project ID ${r} in date range ${e} to ${t}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectCostsCumulative = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/projectCosts/cumulative";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get cumulative project costs.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting cumulative project costs for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectCostsPerTask = (function () {
          var e = P(function* (e, t = !1) {
            const r =
              "corp-api/corp-project-group-manager/projectCosts/perTask";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "GET", query: { projectId: e, forceUpdate: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't get project costs per task.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error getting project costs per task for project ID ${e}.`,
                r
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectCostPerAttemptByReviewLevel = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/projectCosts/costPerAttemptByReviewLevel";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project costs per attempt/review level.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project costs per attempt/review level for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectCostsYesterdayAndToday = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/projectCosts/daily";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get daily project costs.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting daily project costs for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectFinanceAlertConfigs = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/projectAlerts/financeAlertConfigs";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get finance alert configs for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting finance alert configs for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getFinanceGlobalConfigs = P(function* () {
          const e =
            "corp-api/corp-project-group-manager/admin/financeGlobalConfigs";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get finance global configs.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting finance global configs.",
              e
            );
          }
        })),
        (C.getFinanceGuardrailConfigs = (function () {
          var e = P(function* (e) {
            const t = `corp-api/corp-project-group-manager/admin/financeGuardrailConfigs/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get finance guardrail configs.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting finance guardrail configs for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateFinanceAlertConfig = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/projectAlerts/financeAlertConfigs";
            try {
              return (0, n.ZP)(null, t, { method: "PUT", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get finance alert configs.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting finance alert configs for project ID ${e.projectId}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateFinanceGuardrailConfig = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/projectAlerts/financeGuardrailConfigs";
            try {
              return (0, n.ZP)(null, t, { method: "PUT", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't update finance guardrail configs.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error updating finance guardrail configs for project ID ${e.projectId}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateProjectPauseStatus = (function () {
          var e = P(function* (e, t, r) {
            const i = "corp-api/corp-project-group-manager/pauseProject";
            try {
              return (0,
              n.ZP)(null, i, { method: "PUT", body: { projectId: e, userEmail: t, userId: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't pause project.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error pausing project for project ID ${e}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectPausedHistory = (function () {
          var e = P(function* (e) {
            const t = `corp-api/corp-project-group-manager/pausedHistory/${e}`;
            try {
              return (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project pause history.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project pause history for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectNotificationsSlackChannel = (function () {
          var e = P(function* (e) {
            const t = `corp-api/corp-project-group-manager/notifications/slack/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Slack channel for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting Slack channel for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateProjectNotificationsSlackChannel = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/corp-project-group-manager/notifications/slack";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "PUT", body: { slackChannel: t, projectId: e } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't update Slack channel for project.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error updating Slack channel for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getManyExplainQueue = (function () {
          var e = P(function* (e, t, r) {
            return yield (0,
            n.ZP)(null, "corp-api/corp-project-group-manager/manyExplainQueue", { method: "POST", body: { workerIds: e, projectId: r, skipProjectIds: t } });
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getPermittedEmails = P(function* () {
          const e = "corp-api/random-configs?name=pod-lead-center-users";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get Pod Lead Center users.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting Pod Lead Center users.",
              e
            );
          }
        })),
        (C.getProjectBillingProposalApprovers = (function () {
          var e = P(function* (e) {
            const t = `corp-api/corp-project-group-manager/billingProposalApprovers/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't get Billing Proposal Approvers for Project : ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error getting Billing Proposal Approvers.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getAllBillingApprovalRequests = P(function* () {
          const e =
            "corp-api/corp-project-group-manager/billingApprovalRequests";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get all billing approval requests.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting all billing approval requests.",
              e
            );
          }
        })),
        (C.getAllFinanceApprovalRequests = P(function* () {
          const e =
            "corp-api/corp-project-group-manager/financeApprovalRequests";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get all finance approval requests.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting all finance approval requests.",
              e
            );
          }
        })),
        (C.getFinanceApprovalRequestsByProjectId = (function () {
          var e = P(function* (e) {
            const t = `corp-api/corp-project-group-manager/financeApprovalRequests/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get finance approval requests for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting finance approval requests for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createFinanceApprovalRequest = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/financeApprovalRequests/create";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: I({}, e) });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't create finance approval request.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error creating finance approval request for project ID ${e.projectId}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.approveFinanceApprovalRequest = (function () {
          var e = P(function* (e, t) {
            const r =
              "corp-api/corp-project-group-manager/financeApprovalRequests/approve";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "PUT", body: { requestId: e, reviewerUserId: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't approval finance approval request.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error approving finance approval request for request ID ${e}, reviewerUser ID ${t}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateFinanceApprovalRequest = (function () {
          var e = P(function* (e, t) {
            const r =
              "corp-api/corp-project-group-manager/financeApprovalRequests/update";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "PUT", body: I({}, e, { _id: t }) });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't update finance approval request.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error updating finance approval request for request ID ${t}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createOrUpdateCourseV2 = (function () {
          var e = P(function* (e) {
            const t = "internal/coursesV2/courses";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't create/update course.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error creating/updating v2 course.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.publishCourseV2 = (function () {
          var e = P(function* (e) {
            const t = "internal/coursesV2/publish";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't publish course: ${e.name}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error publishing v2 course for project ID ${e.project}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateCourseV2Enablement = (function () {
          var e = P(function* (e) {
            const t = "internal/coursesV2/updateEnablement";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't update course enablement.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error updating v2 course enablement for course ID ${e.courseId}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateCourseV2Archived = (function () {
          var e = P(function* (e) {
            const t = "internal/coursesV2/updateArchived";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't ${e.archived ? "archive" : "unarchive"} course.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error ${
                  e.archived ? "archiving" : "unarchiving"
                } v2 course for course ID ${e.courseId}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.rejectFinanceApprovalRequest = (function () {
          var e = P(function* (e, t) {
            const r =
              "corp-api/corp-project-group-manager/financeApprovalRequests/reject";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "PUT", body: { requestId: e, reviewerUserId: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't reject finance approval request.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error rejecting finance approval request for request ID ${e}, reviewerUser ID ${t}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.commentFinanceApprovalRequest = (function () {
          var e = P(function* (e, t, r) {
            const i =
              "corp-api/corp-project-group-manager/financeApprovalRequests/comment";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "PUT", body: { requestId: e, commenterUserId: t, commentString: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't submit finance approval request comment.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error submitting finance approval request comment for request ID ${e}, commenterUser ID ${t}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.cancelFinanceApprovalRequest = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/financeApprovalRequests/cancel";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "PUT", body: { requestId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't cancel finance approval request.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error canceling finance approval request for request ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getUserAndProjectNames = (function () {
          var e = P(function* (e) {
            const t =
              "corp-api/corp-project-group-manager/financeApprovalRequests/userAndProjectNames";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { approvalRequests: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get finance approval request user & project names.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error getting finance approval request user & project names.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getAdminFinanceDefaults = P(function* () {
          const e = "corp-api/corp-project-group-manager/adminFinance/defaults";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get admin finance defaults.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting admin finance defaults.",
              e
            );
          }
        })),
        (C.updateAdminFinanceDefaults = (function () {
          var e = P(function* ({
            pagerDutyUserEmail: e,
            slackPodLeadEmails: t,
          }) {
            const r =
              "corp-api/corp-project-group-manager/adminFinance/defaults";
            try {
              return yield (0, n.ZP)(null, r, {
                method: "PUT",
                body: { pagerDutyUserEmail: e, slackPodLeadEmails: t },
              });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't update admin finance defaults.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                "Error updating admin finance defaults.",
                r
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.revertAdminAction = (function () {
          var e = P(function* (e) {
            const t = `corp-api/admin_action/${e}/revert`;
            try {
              return yield (0, n.ZP)(null, t, { method: "POST" });
            } catch (u) {
              var r, i, s, a;
              throw new o.Z(
                u.status,
                "Couldn't revert admin action.",
                null !==
                  (s =
                    null === (r = u.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== s
                  ? s
                  : u.toString(),
                null !==
                  (a =
                    null === (i = u.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== a
                  ? a
                  : u.toString(),
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.runRedashQuery = (function () {
          var e = P(function* (e) {
            const t = {
                queryParams: JSON.stringify(e.queryParams),
                queryUrl: (0, m.D0)(e.queryUrl),
              },
              r = "corp-api/redash/fetchQuery";
            try {
              return yield (0, n.ZP)(null, r, { method: "GET", query: t });
            } catch (c) {
              var i, s, a, u;
              throw new o.Z(
                c.status,
                "Couldn't run redash query.",
                null !==
                  (a =
                    null === (i = c.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== a
                  ? a
                  : c.toString(),
                null !==
                  (u =
                    null === (s = c.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== u
                  ? u
                  : c.toString(),
                r
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateConfigData = (function () {
          var e = P(function* ({
            configMeta: e,
            configAttributes: t,
            lastVersion: r,
            changes: i,
            configJsonSchema: s,
          }) {
            const a = {};
            for (const n in i) {
              const e = i[n],
                t = (0, c.LK)(e, s, (0, l.Tk)(n));
              a[n] = t;
            }
            const u = `corp-api/lookup/${e.id}/config`;
            try {
              return yield (0, n.ZP)(null, u, {
                method: "POST",
                body: {
                  lastVersion: r,
                  query: (0, c.kR)(e, t),
                  changes: a,
                  attributes: t,
                  type: e.type,
                  valuesOnly: !0,
                },
              });
            } catch (f) {
              var p, d;
              throw new o.Z(
                f.status,
                "Couldn't update config data.",
                null !==
                  (d =
                    null === (p = f.response) || void 0 === p
                      ? void 0
                      : p.message) && void 0 !== d
                  ? d
                  : f.toString(),
                `Error updating config data for configMeta ID ${e.id}.`,
                u
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.attemptAuditLookup = (function () {
          var e = P(function* (e) {
            const t = `corp-api/attemptAudit/lookup/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get audit attempt for task.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting audit attempt for task ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getBatches = (function () {
          var e = P(function* (e, t, r) {
            const i = "corp-api/find/batches";
            try {
              return yield (0,
              n.ZP)(null, i, { query: { projectId: e, search: t, status: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't get task batches.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting task batches for project ID ${e}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.generateInviteLinks = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/generateInviteLinks";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't generate invite links.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error generating invite links for ${e.projectId}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getLinterRatesStats = (function () {
          var e = P(function* ({ projectId: e, from: t, to: r }) {
            const i = "internal/genai/linterRatesStats";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "GET", query: { projectId: e, from: t.toString(), to: r.toString() } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Coulnd't get linter rater stats.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting linter rater stats for project ID ${e}.`,
                i
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getL8EscalatedTasksRate = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = "internal/genai/cheating/l8EscalatedTaskRate";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get L8 escalated task rate",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting L8 escalated task rate for project ID ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getTaskersWithStrikeTags = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = "internal/genai/cheating/taskersWithStrikeTags";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get taskers with strike tags.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting taskers with strike tags for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getCheatingFlaggedTasks = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = "internal/genai/cheating/cheatingFlaggedTasks";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get cheating flagged tasks",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting cheating flagged tasks for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getTasksTouchedByConfirmedCheaters = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = "internal/genai/cheating/tasksTouchedByConfirmedCheaters";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get tasks touched by confirmed cheaters",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting tasks touched by confirmed cheaters for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getWorkersDeactivatedForCheating = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = "internal/genai/cheating/workersDeactivatedForCheating";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get workers deactivated for cheating",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting workers deactivated for cheating for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findGenAIProjects = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/searchGenAiProjects";
            try {
              const r = yield (0, n.ZP)(null, t, {
                query: { includeTestProjects: !1, search: e },
              });
              return a().orderBy(
                r.projects,
                ["isActive", "isDisabled"],
                ["desc", "asc"]
              );
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get GenAI projects search results.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting GenAI projects search results for searchText ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getQMsByProjects = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/getQMsByProjects";
            try {
              return (yield (0,
              n.ZP)(null, t, { query: { projectIds: e } })).qmsByProjects;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get QMs info.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error getting QMs info for weekly project checkup.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getFlagsForStaleRoles = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/flagsForStaleRoles";
            try {
              const r = yield (0, n.ZP)(null, t, {
                query: { userId: e },
                method: "GET",
              });
              if (!r.success)
                throw new Error("Failed to get flags for stale roles");
              return r.flagsForStaleRoles;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get flags for stale roles.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error getting flags for stale roles.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createCSATResponses = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/csat/createResponses";
            try {
              return (yield (0,
              n.ZP)(null, t, { body: { responses: e }, method: "POST" })).success;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't create CSAT responses.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error creating CSAT responses.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getOperationsRoster = P(function* () {
          const e = "internal/genai/getOperationsRoster";
          try {
            const t = yield (0, n.ZP)(null, e, {});
            if (t.success) return t.operationsRosterEmails;
            throw new Error(t.message);
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Error getting Operations roster",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting Operations roster",
              e
            );
          }
        })),
        (C.getOperationsRosterForWeeklyRolePopUp = P(function* () {
          const e = "internal/genai/getOperationsRosterForWeeklyRolePopUp";
          try {
            const t = yield (0, n.ZP)(null, e, {});
            if (t.success) return t.emailsForWeeklyRolePopUp;
            throw new Error(t.message);
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Error getting Operations roster for weekly role pop up",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting Operations roster for weekly role pop up",
              e
            );
          }
        })),
        (C.fetchProjectLibraryEntries = (function () {
          var e = P(function* (e) {
            var t;
            const r =
                null !==
                  (t = null === e || void 0 === e ? void 0 : e.filters) &&
                void 0 !== t
                  ? t
                  : [],
              i = "internal/genai/getProjectLibraryEntries";
            try {
              return yield (0,
              n.ZP)(null, i, { body: { includeTestProjects: !1, businessUnit: p.BusinessUnit.GenerativeAIDataEngine, businessUnitProduct: p.BusinessUnitProduct.RLHF, operator: null === e || void 0 === e ? void 0 : e.operator, multiSearchKeys: r.filter((e) => "projectName" === e.field && e.value && e.value.length > 0).map((e) => e.value), projectGroupSearchKeys: r.filter((e) => "projectGroupName" === e.field && e.value && e.value.length > 0).map((e) => e.value), customerIdSearchKeys: r.filter((e) => "customerId" === e.field).map((e) => e.value), projectTypes: r.filter((e) => "projectType" === e.field && e.value && e.value.length > 0), projectMediums: r.filter((e) => "projectMedium" === e.field && e.value && e.value.length > 0), projectUseCases: r.filter((e) => "projectUseCase" === e.field && e.value && e.value.length > 0), statuses: r.filter((e) => "activityStatus" === e.field), pods: r.filter((e) => "pod" === e.field && e.value && e.value.length > 0), latestActivity: r.filter((e) => "latestActivity" === e.field).map((e) => e.value), onPlatform: r.filter((e) => "onPlatform" === e.field), paused: r.filter((e) => "paused" === e.field), taskTypes: r.filter((e) => "taskType" === e.field) }, method: "POST" });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't get Project Library.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting Project Library entries with filters: ${r.toString()}.`,
                i
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchProjectLibraryEntriesByIds = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/getProjectLibraryEntriesByIds";
            try {
              return yield (0,
              n.ZP)(null, t, { body: { projectIds: e }, method: "POST" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Project Library entries.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting Project Library entries for project IDs: ${e.toString()}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchCourseV2LibraryEntriesById = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/getCourseV2LibraryEntriesById";
            try {
              return yield (0,
              n.ZP)(null, t, { body: { projectId: e }, method: "POST" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Course Library for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting v2 Course Library entries for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getCourseV2ById = (function () {
          var e = P(function* (e) {
            const t = `internal/genai/getCourseV2/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get course.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting v2 course for course ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getUserFullstory = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/${e}/fullstory`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              if (404 === s.status) return null;
              throw new o.Z(
                s.status,
                `Couldn't get user fullstory for user ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error while getting user fullstory for user ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.tryToFetchUserOnboardingState = (function () {
          var e = P(function* (e) {
            const t = `corp-api/onboarding-control-panel/userOnboardingState/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              if (404 === s.status) return null;
              throw new o.Z(
                s.status,
                `Couldn't get user onboarding state for user ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error while getting user onboarding state for user ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getAllCourseV2Templates = P(function* () {
          const e = "internal/coursesV2/getAllCoursesV2Templates";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get all course templates.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting all v2 course templates.",
              e
            );
          }
        })),
        (C.getQualificationByCourseName = (function () {
          var e = P(function* (e) {
            return yield (0,
            n.ZP)(null, "internal/coursesV2/checkQualificationExists", { body: { name: e }, method: "POST" });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getCourseV2ReadOnlyChatTask = (function () {
          var e = P(function* (e) {
            const t = `internal/courses/chat-preview-content/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get course chat task.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting v2 chat task for task ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getCourseV2ReadOnlyChatV2Task = (function () {
          var e = P(function* (e) {
            const t = `internal/courses/chat-experimental-preview-content/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get course chatv2 task.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting v2 chatv2 task for task ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getCourseById = (function () {
          var e = P(function* (e) {
            const t = `internal/courses/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get course.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting course for course ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchCorpJobCache = (function () {
          var e = P(function* (e) {
            if (!e) return { cache: !1, value: {} };
            const t = `corp-api/jobs/job/${e}/cachedValue`;
            try {
              return yield (0, n.ZP)(null, t);
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Corp job.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting cached Corp job for corpJob ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchJobsByQuery = (function () {
          var e = P(function* (e) {
            const t = "corp-api/jobs/list";
            try {
              return {
                jobs: yield (0, n.ZP)(null, t, { method: "GET", query: e }),
              };
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Corp jobs.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting Corp jobs for query ${JSON.stringify(e)}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.startCorpJob = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/jobs/${e}`;
            try {
              return yield (0, n.ZP)(null, r, { method: "POST", body: t });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                `Couldn't start Corp job: ${e}.`,
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error starting Corp job for job name ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTaskReplications = (function () {
          var e = P(function* (e) {
            const t = `corp-api/task-replication/${e}`;
            try {
              return yield (0, n.ZP)(null, t);
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get task replications for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting task replications for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getChatBulkAudits = (function () {
          var e = P(function* (e) {
            const t = `corp-api/chatBulkAudit/batch/project/${e}`;
            try {
              return yield (0, n.ZP)(null, t);
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Chat bulk audits for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting Chat bulk audits for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getQualityControlSpecDoc = (function () {
          var e = P(function* (e) {
            const t = `internal/archieQC/get_latest_quality_control_spec_doc/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Quality Control Spec Doc.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting Quality Control Spec Doc for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.checkSpecDifferences = (function () {
          var e = P(function* (e) {
            const t = `internal/archieQC/check_spec_differences/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't check spec differences.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error checking spec differences for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.syncSpecDoc = (function () {
          var e = P(function* (e, t) {
            const r = "internal/archieQC/sync_spec_doc";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: I({ projectId: e }, t) });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't sync Archie QC Spec Doc.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error syncing Archie QC Spec Doc for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getArchieQCSpecDoc = (function () {
          var e = P(function* (e) {
            const t = `internal/archieQC/get_archie_qc_spec_doc/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get ArchieQC Spec Doc.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting ArchieQC Spec Doc for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createQCSpecDoc = (function () {
          var e = P(function* (e, t, r) {
            const i = "internal/archieQC/update_spec_doc_rubrics";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "POST", body: { projectId: e, newSpecDocRubrics: t, newProjectSpecificErrorCategories: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't update Quality Control Spec Doc.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error updating Quality Control Spec Doc for project ID ${e}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateArchieQCSpecDoc = (function () {
          var e = P(function* (e, t, r) {
            const i = "internal/archieQC/update_archie_spec_doc_requirements";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "POST", body: { projectId: e, requirements: t, newErrorCategories: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't update Archie QC Spec Doc.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error updating Archie QC Spec Doc for project ID ${e}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createArchieQCSpecDoc = (function () {
          var e = P(function* (e, t) {
            const r = "internal/archieQC/create_archie_qc_spec_doc";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: I({ projectId: e }, t && { setupLinearTicket: t }) });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't create Archie QC Spec Doc.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error creating Archie QC Spec Doc for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.calculatePrecisionRecallResults = (function () {
          var e = P(function* (e, t, r) {
            const i = "internal/archieQC/calculate_precision_recall_results";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "POST", body: { projectId: e, groundTruthAttemptIds: t, requirements: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't calculate Precision Recall Results.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error calculating Precision Recall Results for project ID ${e}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getArchieQCEndpointResponse = (function () {
          var e = P(function* (e, t, r) {
            const i = "internal/archieQC/run_archie_qc_endpoint";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "POST", body: { projectId: e, attemptIds: t, archieQCInput: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't get response from ArchieQC endpoint.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting ArchieQC response for project ID ${e} and attempt IDs ${t}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.runArchieBMCreationEndpointResponse = (function () {
          var e = P(function* (e) {
            const t = "internal/archieBM/run_archie_bm_creation_endpoint";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get response from ArchieBM endpoint.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting ArchieBM response for project ID ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createChatBulkAuditBatch = (function () {
          var e = P(function* (e, t, r, i, s, a, u, c) {
            const l = t
                .split(/\s+|,/)
                .map((e) => e.trim())
                .filter((e) => e),
              p = "corp-api/chatBulkAudit/batch";
            try {
              return yield (0,
              n.ZP)(null, p, { method: "POST", body: { projectId: e, name: r, objectIds: l, claimTasks: i, objectType: s, dateRange: a, limit: u, reviewLevels: c } });
            } catch (g) {
              var d, f;
              throw new o.Z(
                g.status,
                `Couldn't create Chat bulk audit batch: ${r}`,
                null !==
                  (f =
                    null === (d = g.response) || void 0 === d
                      ? void 0
                      : d.message) && void 0 !== f
                  ? f
                  : g.toString(),
                `Error creating Chat bulk audit batch for project ID ${e}, auditName ${r}.`,
                p
              );
            }
          });
          return function (t, r, n, o, i, s, a, u) {
            return e.apply(this, arguments);
          };
        })()),
        (C.chatBulkAuditFilteredTasks = (function () {
          var e = P(function* ({
            projectId: e,
            filters: t,
            sampleNumber: r,
            selectedFilter: i,
          }) {
            const s = "Custom Filter" === i,
              a = [
                u.ChatBulkAuditDefaultFilters.RECENT_L_NEG_1_ATTEMPTS,
                u.ChatBulkAuditDefaultFilters.RECENT_L0_ATTEMPTS,
                u.ChatBulkAuditDefaultFilters.RECENT_L4_ATTEMPTS,
                u.ChatBulkAuditDefaultFilters.RECENT_L10_ATTEMPTS,
                u.ChatBulkAuditDefaultFilters.RECENT_L12_ATTEMPTS,
              ].includes(i),
              c = {};
            s &&
              t.forEach((e) => {
                if ("Review Level" === e.primary && e.secondary && e.tertiary)
                  if (
                    ((c.reviewLevels = c.reviewLevels || []),
                    Array.isArray(e.tertiary))
                  )
                    e.tertiary.forEach((e) => {
                      const t = parseInt(e, 10);
                      !isNaN(t) && c.reviewLevels && c.reviewLevels.push(t);
                    });
                  else {
                    const t = parseInt(e.tertiary, 10);
                    isNaN(t) || c.reviewLevels.push(t);
                  }
              });
            const l = `corp-api/chatBulkAudit/tasks/${e}`;
            try {
              const e = yield (0, n.ZP)(null, l, {
                method: "POST",
                body: JSON.stringify({
                  filters: c,
                  sampleNumber: r,
                  selectedFilter: i,
                }),
                headers: { "Content-Type": "application/json" },
              });
              let o = [];
              if (e) {
                const r = s ? t.filter((e) => e.secondary && e.tertiary) : [];
                o =
                  s || a
                    ? ((e, t = []) => {
                        let r = [];
                        if (
                          (e.allIds && (r = Object.values(e.allIds).flat()),
                          e.nonAuditedIds && t.length > 0)
                        ) {
                          const n = t.find(
                              (e) => "Has been Audited" === e.primary
                            ),
                            o = new Set(Object.values(e.nonAuditedIds).flat());
                          n &&
                            (r =
                              "false" === n.tertiary
                                ? Object.values(e.nonAuditedIds).flat()
                                : r.filter((e) => !o.has(e)));
                        }
                        return r;
                      })(e, r)
                    : [];
              }
              return o;
            } catch (f) {
              var p, d;
              throw new o.Z(
                f.status,
                "Couldn't get filtered Chat bulk audit tasks.",
                null !==
                  (d =
                    null === (p = f.response) || void 0 === p
                      ? void 0
                      : p.message) && void 0 !== d
                  ? d
                  : f.toString(),
                `Error getting filtered Chat bulk audit tasks for project ID ${e}.`,
                l
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.quarantineTaskReplications = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/task-replication/quarantine";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { projectId: e, taskIds: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't quarantine task replications.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error quarantining task replications for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.unquarantineTaskReplications = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/task-replication/unquarantine";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { projectId: e, taskIds: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't unquarantine task replications.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error unquarantining task replications for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.provisionSphereWorkspaceLinks = (function () {
          var e = P(function* (e) {
            const t = "internal/genai/provisionWorkspaceLinks";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't create Sphere workspace links.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error creating Sphere workspace links.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getTagsById = (function () {
          var e = P(function* (e) {
            const t = "corp-api/lookup/batch";
            try {
              return (yield (0,
              n.ZP)(null, t, { method: "POST", body: { batch: e.map((e) => ({ id: e, type: d.INamedObjectTypes.Tag })) } })).objects;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get tags.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting tags for the provided IDs: ${e.join(", ")}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectSxsQualitySignals = (function () {
          var e = P(function* ({ projectId: e, startDate: t, endDate: r }) {
            const i =
              "internal/self_serve/qualityProfile/getProjectSxsQualitySignals";
            try {
              return yield (0,
              n.ZP)(null, i, { method: "GET", query: { projectId: e, startDate: t.toString(), endDate: r.toString() } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                `Couldn't get project SXS quality signals in date range ${t} to ${r}.`,
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting project SXS quality signals for project ID ${e} in date range ${t} to ${r}.`,
                i
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getTagsByName = (function () {
          var e = P(function* (e) {
            const t = "corp-api/tags";
            try {
              return (yield (0, n.ZP)(null, t, { query: { search: e } })).tags;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't get tags for ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting tags for search ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateHubstaffProject = (function () {
          var e = P(function* (e, t) {
            const r = `/internal/hubstaff/project/${e}/update`;
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { project: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't update Hubstaff project.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error updating Hubstaff project for projectHubstaff ${e}, createdProject ID ${t}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getIsProjectActive = (function () {
          var e = P(function* (e) {
            const t = `corp-api/project/${e}/isActive`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project status.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project active status for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectRoles = (function () {
          var e = P(function* (e, t) {
            var r;
            const i = `corp-api/qm/project_roles/?project=${e}&${
              null !==
                (r =
                  null === t || void 0 === t
                    ? void 0
                    : t.map((e) => `role=${e}`).join("&")) && void 0 !== r
                ? r
                : ""
            }`;
            try {
              return yield (0, n.ZP)(null, i, { method: "GET" });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't get project roles.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting project roles for project ID ${e}.`,
                i
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getWorkerTeams = (function () {
          var e = P(function* (e) {
            const t = `corp-api/worker_teams/list_teams_by_project/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get worker teams.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting worker teams for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateProjectDetails = (function () {
          var e = P(function* (e) {
            const t = "corp-api/update_project_details";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't update project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error updating project ID ${e.project}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateProjectSLAGroup = (function () {
          var e = P(function* (
            {
              projectGroupId: e,
              name: t,
              projectIds: r,
              description: i,
              businessUnitProduct: s,
              businessUnit: a,
              fulfillmentMechanism: u,
              slaCadence: c,
              status: l,
            },
            p
          ) {
            const d = `corp-api/project-groups/${e}`;
            try {
              return yield (0, n.ZP)(null, d, {
                method: "PUT",
                body: {
                  name: t,
                  projectIds: r,
                  description: i,
                  businessUnit: a,
                  slaCadence: c,
                  status: l,
                  businessUnitProduct: s,
                  fulfillmentMechanism: u,
                  diff: p,
                },
              });
            } catch (y) {
              var f, g;
              throw new o.Z(
                y.status,
                "Couldn't update project SLA group.",
                null !==
                  (g =
                    null === (f = y.response) || void 0 === f
                      ? void 0
                      : f.message) && void 0 !== g
                  ? g
                  : y.toString(),
                `Error updating project SLA group for projectGroup ID ${e}.`,
                d
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.archiveProject = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/projects/${e}/maxCompletableTasks`;
            try {
              return (
                (0, h.Kz)(h.ju.ProjectArchiveEvent, {
                  projectId: e,
                  userId: t,
                  archivedAt: new Date(),
                }),
                yield (0, n.ZP)(null, r, {
                  method: "PUT",
                  body: { maxCompletableTasks: 0 },
                })
              );
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't archive project.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error disabling project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.enableProject = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/projects/${e}/maxCompletableTasks`;
            try {
              return yield (0,
              n.ZP)(null, r, { method: "PUT", body: { maxCompletableTasks: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't enable project.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error enabling project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTaskTemplate = (function () {
          var e = P(function* (e) {
            const t = `internal/self_serve/task_template/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get task template for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting task template for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchChatTaskFeatureConfig = (function () {
          var e = P(function* (e) {
            const t = `internal/task-template/chat-task-feature-config/${e}`;
            try {
              return yield (0, n.ZP)(null, t);
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get Chat Task feature config for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting Chat Task feature config for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateChatTaskFeatureConfig = (function () {
          var e = P(function* (e, t) {
            const r = `internal/task-template/chat-task-feature-config/${e}`;
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { chatTaskFeatureConfig: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't update Chat Task feature config for project.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error updating Chat Task feature config for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createProjectSLAGroup = (function () {
          var e = P(function* ({
            name: e,
            projectIds: t,
            description: r,
            businessUnit: i,
            slaCadence: s,
            status: a,
            businessUnitProduct: c,
            fulfillmentMechanism: l,
            endActiveProjectRoles: p,
          }) {
            if (p) {
              const e = t.map((e) => {
                  const t = `corp-api/qm/project_roles/?project=${e}`;
                  try {
                    return (0, n.ZP)(null, t, { method: "GET" });
                  } catch (s) {
                    var r, i;
                    throw new o.Z(
                      s.status,
                      "Couldn't get project roles.",
                      null !==
                        (i =
                          null === (r = s.response) || void 0 === r
                            ? void 0
                            : r.message) && void 0 !== i
                        ? i
                        : s.toString(),
                      `Error getting project roles for project ID ${e}.`,
                      t
                    );
                  }
                }),
                r = (yield Promise.all(e))
                  .flat()
                  .filter(
                    (e) =>
                      !e.stopDate ||
                      (e.stopDate && new Date(e.stopDate) > new Date())
                  )
                  .map((e) => ({
                    projectRoleId: e._id,
                    newStartDate: (0, f.default)(
                      new Date(e.startDate),
                      new Date()
                    )
                      ? (0, g.default)(new Date(), u.DAY_MS)
                      : e.startDate,
                    newEndDate: new Date(),
                  })),
                i = "corp-api/qm/project_role_events/";
              try {
                yield (0, n.ZP)(null, i, { method: "PATCH", body: r });
              } catch (j) {
                var d, y;
                throw new o.Z(
                  j.status,
                  "Couldn't remove project roles.",
                  null !==
                    (y =
                      null === (d = j.response) || void 0 === d
                        ? void 0
                        : d.message) && void 0 !== y
                    ? y
                    : j.toString(),
                  `Error removing project roles for project IDs ${t.join(
                    ", "
                  )}.`,
                  i
                );
              }
            }
            const v = "corp-api/project-groups";
            try {
              return yield (0, n.ZP)(null, v, {
                method: "POST",
                body: {
                  name: e,
                  projectIds: t,
                  description: r,
                  businessUnitProduct: c,
                  slaCadence: s,
                  status: a,
                  businessUnit: i,
                  fulfillmentMechanism: l,
                },
              });
            } catch (j) {
              var h, m;
              throw new o.Z(
                j.status,
                "Couldn't create/update project SLA group.",
                null !==
                  (m =
                    null === (h = j.response) || void 0 === h
                      ? void 0
                      : h.message) && void 0 !== m
                  ? m
                  : j.toString(),
                "Error creating or updating project SLA group.",
                v
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getSLAGroupByProjectGroupId = (function () {
          var e = P(function* (e) {
            const t = `corp-api/project-groups/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project SLA group.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project SLA group for projectGroup ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updatePipelineV3HookConfig = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/pipelineV3/updatePipelineV3HookConfig/${e}`;
            try {
              return yield (0, n.ZP)(null, r, { method: "POST", body: t });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't update pipelineV3 hook config.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error updating pipelineV3 hook config for project ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getWorkersByWorkerTeam = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/worker_teams/team/${e}/members`;
            try {
              return yield (0,
              n.ZP)(null, r, { method: "GET", query: { limit: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't get workers by worker team.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error getting workers by worker team ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getAllWorkerTeams = P(function* () {
          const e = "corp-api/worker_teams/list-worker-teams";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get all worker teams.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting all worker teams.",
              e
            );
          }
        })),
        (C.getWorkerTeamsDataByProjectId = (function () {
          var e = P(function* (e) {
            const t = `corp-api/worker_teams/teams_and_members_by_project/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get worker team info.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting worker team info for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.searchTeams = (function () {
          var e = P(function* (e) {
            const t = "corp-api/worker_teams/autocomplete";
            try {
              return (yield (0,
              n.ZP)(null, t, { method: "GET", query: { search: e } })).results;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't search worker teams.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error searching worker teams.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTeam = (function () {
          var e = P(function* (e) {
            const t = `corp-api/worker_teams/team/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get worker team.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting worker team for team ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTeamContributors = (function () {
          var e = P(function* (e) {
            const t = `corp-api/worker_teams/team/${e}/contributors`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get worker team contributors.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting worker team contributors for team ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTeamConfig = (function () {
          var e = P(function* (e) {
            const t = `corp-api/worker_teams/team/${e}/config`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get worker team config.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting worker team config for team ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTeamAssignmentsWithExtras = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/worker_teams/team/${e}/team_assignments_with_extras?includeInherited=${t}`;
            try {
              return yield (0, n.ZP)(null, r, { method: "GET" });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't get worker team assignments.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error getting worker team assignments for team ID ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTeamAssignmentEvents = (function () {
          var e = P(function* (e) {
            const t = `corp-api/worker_teams/team/${e}/assignment_events`;
            try {
              return (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get worker team assignment events.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting worker team assignment events for team ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchTeamContributorEvents = (function () {
          var e = P(function* (e) {
            const t = `corp-api/worker_teams/team/${e}/contributor_events`;
            try {
              return (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get worker team contributor events.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting worker team contributor events for team ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectMarketplaceStatus = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = `internal/user-projects/${e}/marketplaceStatus`;
            try {
              return (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project marketplace status.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error getting project marketplace status.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectPrebuildStatus = (function () {
          var e = P(function* (e) {
            const t = `internal/user-projects/${e}/prebuildStatus`;
            try {
              return (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project prebuild status.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project prebuild status for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchProjectPriorities = (function () {
          var e = P(function* (e) {
            const t = "internal/user-projects/project-priority";
            try {
              return (0,
              n.ZP)(null, t, { method: "GET", query: { workerSkills: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project priorities.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error getting project priorities.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.validateHasRole = (function () {
          var e = P(function* ({ corpRole: e }) {
            const t = `corp-api/find/corppermissionroles/validate?corpRoleId=${e}`;
            try {
              return yield (0, n.ZP)(null, t);
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't validate role.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error validating role ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchProjectPriority = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = `internal/project-demand/${e}/projectPriority`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't get priority for project: ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project priority for projectId: ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.saveProjectPriority = (function () {
          var e = P(function* (e, t) {
            const r = `internal/project-demand/${e}/projectPriority`;
            try {
              return yield (0, n.ZP)(null, r, { method: "POST", body: t });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                `Couldn't save priority for project: ${e}.`,
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error saving project priority for projectId: ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchProjectPipelineV3Config = (function () {
          var e = P(function* ({ projectId: e }) {
            const t = `corp-api/pipelinev3/${e}`;
            try {
              return (yield (0, n.ZP)(null, t, { method: "GET" })).config;
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't get pipelineV3 config for project: ${e}.`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting pipelineV3 config for projectId: ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchProjectConfigs = (function () {
          var e = P(function* ({ projectId: e, configAttributes: t }) {
            const r = I({ type: "project" }, t),
              s = `corp-api/lookup/${e}/config?${i.stringify(r)}`;
            try {
              return yield (0, n.ZP)(null, s, { method: "GET" });
            } catch (c) {
              var a, u;
              throw new o.Z(
                c.status,
                `Couldn't get config for project: ${e}.`,
                null !==
                  (u =
                    null === (a = c.response) || void 0 === a
                      ? void 0
                      : a.message) && void 0 !== u
                  ? u
                  : c.toString(),
                `Error getting config for projectId: ${e}.`,
                s
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchProjectThroughput = (function () {
          var e = P(function* ({
            projectId: e,
            throughputType: t,
            scrollStartDateTime: r,
            scrollEndDateTime: i,
          }) {
            const s = `internal/project-demand/${e}/projectThroughput`;
            try {
              return yield (0, n.ZP)(null, s, {
                method: "GET",
                query: {
                  throughputType: t,
                  scrollStartDateTime: r,
                  scrollEndDateTime: i,
                },
              });
            } catch (c) {
              var a, u;
              throw new o.Z(
                c.status,
                `Couldn't get project throughput for projectId: ${e}.`,
                null !==
                  (u =
                    null === (a = c.response) || void 0 === a
                      ? void 0
                      : a.message) && void 0 !== u
                  ? u
                  : c.toString(),
                `Error getting project throughput for projectId: ${e}.`,
                s
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchHistoricalRampPlanData = (function () {
          var e = P(function* ({ projectId: e, startDate: t, endDate: r }) {
            const i = `internal/ramp-plan/${e}/taskAttemptAggregation`;
            try {
              return yield (0,
              n.ZP)(null, i, { method: "GET", query: { startDate: t, endDate: r } });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                "Couldn't get historic ramp plan data.",
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error getting historical ramp plan data for project ID ${e}.`,
                i
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.assignmentsDataByProjectId = (function () {
          var e = P(function* (e) {
            const t = `internal/user-projects/${e}/assignments`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get assignment entries for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting assignment entries for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getReviewLevels = (function () {
          var e = P(function* (e) {
            const t = `corp-api/chatBulkAudit/reviewLevels/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get review levels for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting review levels for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getThrottleStats = (function () {
          var e = P(function* (e) {
            const t = `internal/permissions/project/${e}/throttle_status`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get throttle count statistics for project.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting throttle count statistics for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.lookupScaliens = (function () {
          var e = P(function* (e) {
            if (!e) return Promise.resolve({});
            const t = "corp-api/find/scaliens";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { email: encodeURIComponent(e.replace(/ /g, ".")), includeAllUsers: !0 } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't perform Scalien lookup.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error performing Scalien lookup for email ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.lookupUsersByEmail = (function () {
          var e = P(function* (e) {
            if (!e) return Promise.resolve({});
            const t = "corp-api/find/usersByEmail";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { email: encodeURIComponent(e.replace(/ /g, ".")), includeAllUsers: !0 } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't perform lookup users by email.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error performing users lookup by email ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.fetchUser = (function () {
          var e = P(function* (e) {
            if (!e) return Promise.resolve({});
            const t = `corp-api/user/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get user.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting user for user ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.addProjectRoles = (function () {
          var e = P(function* (e) {
            const t = "corp-api/qm/project_role_events/";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't add project roles.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error adding project roles for project IDs ${e
                  .map((e) => e.project)
                  .toString()}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateProjectRoles = (function () {
          var e = P(function* (e) {
            const t = "corp-api/qm/project_role_events/";
            try {
              return yield (0, n.ZP)(null, t, { method: "PATCH", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't update project roles.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error updating project roles for project role IDs ${e
                  .map((e) => e.projectRoleId)
                  .toString()}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectRolesByUser = (function () {
          var e = P(function* (e) {
            const t = "corp-api/qm/project_roles";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { user: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project roles for user.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project roles for user ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateLastStaffingTime = (function () {
          var e = P(function* (e) {
            const t = "corp-api/qm/project_roles/last_staffing_time";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { user: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't update last staffing time for user.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error updating last staffing time for user ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.createLinearIssue = (function () {
          var e = P(function* (e) {
            try {
              return yield (0,
              n.ZP)(null, "corp-api/corp-project-group-manager/linear/issues", { method: "POST", body: e });
            } catch (t) {
              throw new Error(
                `Failed to create issue: ${t.message || t.toString()}`
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectTaskModels = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/projectTaskModels";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { projectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project task models",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project task models for project ID ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.lookupObject = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't lookup for this object id: "${e}".`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error looking up for id: ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.lookupPreview = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/lookup/preview/${t}/${e}`;
            try {
              return yield (0, n.ZP)(null, r, { method: "GET" });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                `Couldn't lookup for this object id: "${e}" of type "${t}".`,
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error looking up for id: ${e} of type ${t}`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.lookupSearch = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/searchPreview/${e}`;
            try {
              if ((0, v._2)(e) || (0, v.B)(e)) {
                const r = yield (0, n.ZP)(null, t, { method: "GET" });
                return r.type === d.INamedObjectTypes.Task
                  ? [
                      {
                        id: e,
                        name: y.MU.Task,
                        type: "OpsHub",
                        redirectLookup: `${y.Yw.Projects}/${r.project_id}/${y.s4.Throughput}/tasks/${r.task_id}`,
                      },
                    ]
                  : r.type === d.INamedObjectTypes.TaskAttempt
                  ? [
                      {
                        id: e,
                        name: y.MU.TaskAttempt,
                        type: "OpsHub",
                        redirectLookup: `${y.Yw.Projects}/${r.project_id}/${y.s4.Throughput}/tasks/${r.task_id}/${r.attempt_id}`,
                      },
                    ]
                  : r.type === d.INamedObjectTypes.User
                  ? [
                      {
                        id: e,
                        name: y.MU.User,
                        type: "OpsHub",
                        redirectLookup: (0, j.X2)(r.user_id),
                      },
                    ]
                  : [
                      {
                        id: e,
                        name: y.MU.Corp,
                        type: "Corp",
                        redirectLookup: `${y.Yw.CorpLookup}/${e}`,
                      },
                    ];
              }
              return [
                {
                  id: e,
                  name: y.MU.Corp,
                  type: "Corp",
                  redirectLookup: `${y.Yw.CorpSearch}`,
                  redirectLookupSearch: `?q=${e}`,
                },
              ];
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Couldn't lookup for this object id: "${e}".`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error looking up for id: ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getPipelineV3History = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/${e}/pipelineHistory`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (r) {
              return { executions: [], manualInterventions: [], _id: e };
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.runLookupCommand = (function () {
          var e = P(function* (e, t, r) {
            const i = `corp-api/lookup/${e}/runCommand/${t}`;
            try {
              return yield (0, n.ZP)(null, i, { method: "POST", body: r });
            } catch (u) {
              var s, a;
              throw new o.Z(
                u.status,
                `Failed to run ${t} on object with id ${e}.`,
                null !==
                  (a =
                    null === (s = u.response) || void 0 === s
                      ? void 0
                      : s.message) && void 0 !== a
                  ? a
                  : u.toString(),
                `Error running ${t} on object with id ${e}.`,
                i
              );
            }
          });
          return function (t, r, n) {
            return e.apply(this, arguments);
          };
        })()),
        (C.findCustomers = (function () {
          var e = P(function* (e) {
            const t = "corp-api/find/customers";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "GET", query: { objectId: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Failed to find users from string ${e}`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error running finding users from joined string ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getSearchPreview = (function () {
          var e = P(function* (e) {
            const t = `corp-api/lookup/searchPreview/${e}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Failed to get search preview for ${e}`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting search preview for ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateProjectSettingsBillingVersion = (function () {
          var e = P(function* (e, t) {
            const r = `corp-api/billing-versions/project-setup/update/${e}`;
            try {
              yield (0,
              n.ZP)(null, r, { method: "post", body: { podWorkflow: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                `Failed to update project settings billing version for project ${e}`,
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error updating project settings billing version for project ${e}`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectBillingPartitions = (function () {
          var e = P(function* (e) {
            const t = `corp-api/billing-versions/partitions/${e}`;
            try {
              return yield (0, n.ZP)(null, t, {});
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Failed to get project settings billing version for project ${e}`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project settings billing version for project ${e}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.approveBillingProposal = (function () {
          var e = P(function* (e) {
            const t = "corp-api/billing-versions/approve-billing-proposal/";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "post", body: { billingProposal: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                `Failed to approve billing proposal for project ${e.projectId}`,
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error to approving billing proposal for project ${e.projectId}`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.recallPipelineTasks = (function () {
          var e = P(function* (e) {
            const t = "corp-api/corp-project-group-manager/recallPipelineTasks";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't recall pipeline tasks.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                "Error recalling pipeline tasks.",
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.quarantineTasks = (function () {
          var e = P(function* (e, t) {
            const r =
              "corp-api/corp-project-group-manager/quarantinePipelineTasks";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { taskIds: e, reason: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't quarantine tasks.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                "Error quarantining tasks.",
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.addModelEndpoint = (function () {
          var e = P(function* (e) {
            const t = "corp-api/model-registry/new";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't add new model endpoint.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error adding model endpoint ${e.name} - ${e.url}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateModelEndpoint = (function () {
          var e = P(function* (e) {
            const t = "corp-api/model-registry/update";
            try {
              return yield (0, n.ZP)(null, t, { method: "PUT", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't update model endpoint.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error updating model endpoint ${e.name} - ${e.url}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getModelEndpoints = P(function* () {
          const e = "corp-api/model-registry/";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get model endpoints.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting model endpoints.",
              e
            );
          }
        })),
        (C.validateDelivery = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/delivery-nexus/validate";
            try {
              const o = new FormData();
              return (
                o.append("customer", e),
                t.forEach((e, t) => {
                  o.append("files", e, e.name);
                }),
                yield (0, n.ZP)(null, r, { method: "POST", body: o })
              );
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't validate delivery files.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                "Error validating delivery files.",
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.extractFileInfo = (function () {
          var e = P(function* (e, t) {
            try {
              const r = new FormData();
              e.forEach((e) => {
                r.append("files", e);
              }),
                r.append("datestamp", t.toISOString());
              return yield (0,
              n.ZP)(null, "corp-api/s3-upload/get-file-info", { method: "POST", body: r });
            } catch (i) {
              var r;
              throw new o.Z(
                i.status,
                "Couldn't extract file info.",
                null !== (r = i.message) && void 0 !== r ? r : i.toString(),
                "Error extracting file info.",
                "corp-api/s3-upload/get-file-info"
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.summarizeDeliveries = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/delivery-nexus/summary";
            try {
              const o = new FormData();
              return (
                o.append("customer", e),
                t.forEach((e, t) => {
                  o.append("files", e, e.name);
                }),
                yield (0, n.ZP)(null, r, { method: "POST", body: o })
              );
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't summarize deliveries.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                "Error summarizing deliveries.",
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.syncKratosSchema = (function () {
          var e = P(function* (e) {
            const t = "corp-api/delivery-nexus/sync-kratos-schema";
            try {
              return yield (0,
              n.ZP)(null, t, { method: "POST", body: { projectIds: e } });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't sync Kratos schema.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error syncing Kratos schema for project IDs ${e.toString()}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.addJSONSchema = (function () {
          var e = P(function* (e) {
            const t = "corp-api/schema-registry/";
            try {
              return yield (0, n.ZP)(null, t, { method: "POST", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't add new JSON schema.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error adding JSON schema ${e.name}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.updateJSONSchema = (function () {
          var e = P(function* (e) {
            const t = `corp-api/schema-registry/${e.id}`;
            try {
              return yield (0, n.ZP)(null, t, { method: "PUT", body: e });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't update JSON schema.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error updating JSON schema ${e.name}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getJSONSchemas = P(function* () {
          const e = "corp-api/schema-registry/";
          try {
            return yield (0, n.ZP)(null, e, { method: "GET" });
          } catch (i) {
            var t, r;
            throw new o.Z(
              i.status,
              "Couldn't get JSON schemas.",
              null !==
                (r =
                  null === (t = i.response) || void 0 === t
                    ? void 0
                    : t.message) && void 0 !== r
                ? r
                : i.toString(),
              "Error getting JSON schemas.",
              e
            );
          }
        })),
        (C.assignJSONSchemaToProject = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/schema-registry/assign";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { schemaId: e, projectId: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't assign JSON schema to project.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error assigning JSON schema ${e} to project ${t}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectSchemaId = (function () {
          var e = P(function* (e) {
            const t = `corp-api/schema-registry/project/${e}/schemaId`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project schema id.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project schema id for project ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.getProjectSchema = (function () {
          var e = P(function* (e) {
            const t = `corp-api/schema-registry/project/${e}/schema`;
            try {
              return yield (0, n.ZP)(null, t, { method: "GET" });
            } catch (s) {
              var r, i;
              throw new o.Z(
                s.status,
                "Couldn't get project schema.",
                null !==
                  (i =
                    null === (r = s.response) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== i
                  ? i
                  : s.toString(),
                `Error getting project schema for project ${e}.`,
                t
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (C.validateSingleJSON = (function () {
          var e = P(function* (e, t) {
            const r = "corp-api/schema-registry/validate";
            try {
              return yield (0,
              n.ZP)(null, r, { method: "POST", body: { schemaId: e, json: t } });
            } catch (a) {
              var i, s;
              throw new o.Z(
                a.status,
                "Couldn't validate single JSON.",
                null !==
                  (s =
                    null === (i = a.response) || void 0 === i
                      ? void 0
                      : i.message) && void 0 !== s
                  ? s
                  : a.toString(),
                `Error validating single JSON against schema ${e}.`,
                r
              );
            }
          });
          return function (t, r) {
            return e.apply(this, arguments);
          };
        })());
    },
    187728: function (e, t, r) {
      r.d(t, {
        Gu: function () {
          return s;
        },
        pj: function () {
          return a;
        },
        zn: function () {
          return u;
        },
        zC: function () {
          return c;
        },
        s0: function () {
          return l;
        },
      });
      var n = r(285556);
      function o(e, t, r, n, o, i, s) {
        try {
          var a = e[i](s),
            u = a.value;
        } catch (c) {
          return void r(c);
        }
        a.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      function i(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, i) {
            var s = e.apply(t, r);
            function a(e) {
              o(s, n, i, a, u, "next", e);
            }
            function u(e) {
              o(s, n, i, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      const s = (function () {
          var e = i(function* (e) {
            return yield (0,
            n.ZP)(null, "corp-api/fraud/tasker", { method: "GET", query: { taskerId: e } });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        a = (function () {
          var e = i(function* () {
            return yield (0,
            n.ZP)(null, "corp-api/fraud/fraud_center_permissions", { method: "GET" });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = i(function* (e) {
            return yield (0,
            n.ZP)(null, "corp-api/fraud/fraud_center_permissions", { method: "POST", body: e });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        c = (function () {
          var e = i(function* (e) {
            return yield (0,
            n.ZP)(null, "corp-api/fraud/fraud_center_permissions", { method: "DELETE", body: e });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        l = (function () {
          var e = i(function* (e) {
            return yield (0, n.ZP)(null, `corp-api/user_lookup/${e}`);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    351281: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      class n extends Error {
        constructor(e, t, r, n, o) {
          super(n),
            (this.status = e),
            (this.userMessage = t),
            (this.serverMessage = r),
            (this.clientMessage = n),
            (this.url = o);
        }
      }
    },
  },
]);
