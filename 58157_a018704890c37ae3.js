(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [58157],
  {
    690085: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
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
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function u(e, t, r) {
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
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                u(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function f() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return function (e) {
          return t.reduceRight(function (e, t) {
            return t(e);
          }, e);
        };
      }
      function h(e) {
        return function t() {
          for (
            var r = this, n = arguments.length, i = new Array(n), o = 0;
            o < n;
            o++
          )
            i[o] = arguments[o];
          return i.length >= e.length
            ? e.apply(this, i)
            : function () {
                for (
                  var e = arguments.length, n = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  n[o] = arguments[o];
                return t.apply(r, [].concat(i, n));
              };
        };
      }
      function p(e) {
        return {}.toString.call(e).includes("Object");
      }
      function d(e) {
        return "function" === typeof e;
      }
      r.d(t, {
        SV: function () {
          return ce;
        },
        ZP: function () {
          return de;
        },
      });
      var g = h(function (e, t) {
          throw new Error(e[t] || e.default);
        })({
          initialIsRequired: "initial state is required",
          initialType: "initial state should be an object",
          initialContent: "initial state shouldn't be an empty object",
          handlerType: "handler should be an object or a function",
          handlersType: "all handlers should be a functions",
          selectorType: "selector should be a function",
          changeType: "provided value of changes should be an object",
          changeField:
            'it seams you want to change a field in the state which is not specified in the "initial" state',
          default: "an unknown error accured in `state-local` package",
        }),
        y = {
          changes: function (e, t) {
            return (
              p(t) || g("changeType"),
              Object.keys(t).some(function (t) {
                return (
                  (r = e), (n = t), !Object.prototype.hasOwnProperty.call(r, n)
                );
                var r, n;
              }) && g("changeField"),
              t
            );
          },
          selector: function (e) {
            d(e) || g("selectorType");
          },
          handler: function (e) {
            d(e) || p(e) || g("handlerType"),
              p(e) &&
                Object.values(e).some(function (e) {
                  return !d(e);
                }) &&
                g("handlersType");
          },
          initial: function (e) {
            var t;
            e || g("initialIsRequired"),
              p(e) || g("initialType"),
              (t = e),
              Object.keys(t).length || g("initialContent");
          },
        };
      function m(e, t) {
        return d(t) ? t(e.current) : t;
      }
      function v(e, t) {
        return (e.current = l(l({}, e.current), t)), t;
      }
      function b(e, t, r) {
        return (
          d(t)
            ? t(e.current)
            : Object.keys(r).forEach(function (r) {
                var n;
                return null === (n = t[r]) || void 0 === n
                  ? void 0
                  : n.call(t, e.current[r]);
              }),
          r
        );
      }
      var w = {
          create: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            y.initial(e), y.handler(t);
            var r = { current: e },
              n = h(b)(r, t),
              i = h(v)(r),
              o = h(y.changes)(e),
              a = h(m)(r);
            function s() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : function (e) {
                      return e;
                    };
              return y.selector(e), e(r.current);
            }
            function u(e) {
              f(n, i, o, a)(e);
            }
            return [s, u];
          },
        },
        O = w,
        j = {
          paths: {
            vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs",
          },
        };
      var S = function (e) {
        return function t() {
          for (
            var r = this, n = arguments.length, i = new Array(n), o = 0;
            o < n;
            o++
          )
            i[o] = arguments[o];
          return i.length >= e.length
            ? e.apply(this, i)
            : function () {
                for (
                  var e = arguments.length, n = new Array(e), o = 0;
                  o < e;
                  o++
                )
                  n[o] = arguments[o];
                return t.apply(r, [].concat(i, n));
              };
        };
      };
      var E = function (e) {
        return {}.toString.call(e).includes("Object");
      };
      var x = {
          configIsRequired: "the configuration object is required",
          configType: "the configuration object should be an object",
          default:
            "an unknown error accured in `@monaco-editor/loader` package",
          deprecation:
            "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  ",
        },
        k = S(function (e, t) {
          throw new Error(e[t] || e.default);
        })(x),
        M = {
          config: function (e) {
            return (
              e || k("configIsRequired"),
              E(e) || k("configType"),
              e.urls
                ? (console.warn(x.deprecation),
                  { paths: { vs: e.urls.monacoBase } })
                : e
            );
          },
        },
        P = M,
        C = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return function (e) {
            return t.reduceRight(function (e, t) {
              return t(e);
            }, e);
          };
        };
      var R = function e(t, r) {
          return (
            Object.keys(r).forEach(function (n) {
              r[n] instanceof Object &&
                t[n] &&
                Object.assign(r[n], e(t[n], r[n]));
            }),
            o(o({}, t), r)
          );
        },
        T = { type: "cancelation", msg: "operation is manually canceled" };
      var V,
        I,
        N = function (e) {
          var t = !1,
            r = new Promise(function (r, n) {
              e.then(function (e) {
                return t ? n(T) : r(e);
              }),
                e.catch(n);
            });
          return (
            (r.cancel = function () {
              return (t = !0);
            }),
            r
          );
        },
        L = O.create({
          config: j,
          isInitialized: !1,
          resolve: null,
          reject: null,
          monaco: null,
        }),
        A =
          ((I = 2),
          (function (e) {
            if (Array.isArray(e)) return e;
          })((V = L)) ||
            (function (e, t) {
              if (
                "undefined" !== typeof Symbol &&
                Symbol.iterator in Object(e)
              ) {
                var r = [],
                  n = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (
                    var a, s = e[Symbol.iterator]();
                    !(n = (a = s.next()).done) &&
                    (r.push(a.value), !t || r.length !== t);
                    n = !0
                  );
                } catch (u) {
                  (i = !0), (o = u);
                } finally {
                  try {
                    n || null == s.return || s.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return r;
              }
            })(V, I) ||
            (function (e, t) {
              if (e) {
                if ("string" === typeof e) return s(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? s(e, t)
                    : void 0
                );
              }
            })(V, I) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()),
        _ = A[0],
        D = A[1];
      function B(e) {
        return document.body.appendChild(e);
      }
      function q(e) {
        var t = _(function (e) {
            return { config: e.config, reject: e.reject };
          }),
          r = (function (e) {
            var t = document.createElement("script");
            return e && (t.src = e), t;
          })("".concat(t.config.paths.vs, "/loader.js"));
        return (
          (r.onload = function () {
            return e();
          }),
          (r.onerror = t.reject),
          r
        );
      }
      function F() {
        var e = _(function (e) {
            return { config: e.config, resolve: e.resolve, reject: e.reject };
          }),
          t = window.require;
        t.config(e.config),
          t(
            ["vs/editor/editor.main"],
            function (t) {
              U(t), e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      }
      function U(e) {
        _().monaco || D({ monaco: e });
      }
      var z = new Promise(function (e, t) {
          return D({ resolve: e, reject: t });
        }),
        H = {
          config: function (e) {
            var t = P.config(e),
              r = t.monaco,
              n = a(t, ["monaco"]);
            D(function (e) {
              return { config: R(e.config, n), monaco: r };
            });
          },
          init: function () {
            var e = _(function (e) {
              return {
                monaco: e.monaco,
                isInitialized: e.isInitialized,
                resolve: e.resolve,
              };
            });
            if (!e.isInitialized) {
              if ((D({ isInitialized: !0 }), e.monaco))
                return e.resolve(e.monaco), N(z);
              if (window.monaco && window.monaco.editor)
                return U(window.monaco), e.resolve(window.monaco), N(z);
              C(B, q)(F);
            }
            return N(z);
          },
          __getMonacoInstance: function () {
            return _(function (e) {
              return e.monaco;
            });
          },
        },
        Z = H,
        J = r(827378),
        W = r(723615),
        G = r.n(W);
      function X() {
        return (
          (X =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          X.apply(this, arguments)
        );
      }
      const Y = {
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      };
      var $ = function ({ content: e }) {
        return J.createElement("div", { style: Y }, e);
      };
      var K = {
        wrapper: {
          display: "flex",
          position: "relative",
          textAlign: "initial",
        },
        fullWidth: { width: "100%" },
        hide: { display: "none" },
      };
      function Q({
        width: e,
        height: t,
        isEditorReady: r,
        loading: n,
        _ref: i,
        className: o,
        wrapperProps: a,
      }) {
        return J.createElement(
          "section",
          X({ style: { ...K.wrapper, width: e, height: t } }, a),
          !r && J.createElement($, { content: n }),
          J.createElement("div", {
            ref: i,
            style: { ...K.fullWidth, ...(!r && K.hide) },
            className: o,
          })
        );
      }
      Q.propTypes = {
        width: G().oneOfType([G().number, G().string]).isRequired,
        height: G().oneOfType([G().number, G().string]).isRequired,
        loading: G().oneOfType([G().element, G().string]).isRequired,
        isEditorReady: G().bool.isRequired,
        className: G().string,
        wrapperProps: G().object,
      };
      var ee = Q,
        te = (0, J.memo)(ee);
      var re = function (e) {
        (0, J.useEffect)(e, []);
      };
      var ne = function (e, t, r = !0) {
        const n = (0, J.useRef)(!0);
        (0, J.useEffect)(
          n.current || !r
            ? () => {
                n.current = !1;
              }
            : e,
          t
        );
      };
      function ie() {}
      function oe(e, t, r, n) {
        return (
          (function (e, t) {
            return e.editor.getModel(ae(e, t));
          })(e, n) ||
          (function (e, t, r, n) {
            return e.editor.createModel(t, r, n && ae(e, n));
          })(e, t, r, n)
        );
      }
      function ae(e, t) {
        return e.Uri.parse(t);
      }
      function se({
        original: e,
        modified: t,
        language: r,
        originalLanguage: n,
        modifiedLanguage: i,
        originalModelPath: o,
        modifiedModelPath: a,
        keepCurrentOriginalModel: s,
        keepCurrentModifiedModel: u,
        theme: c,
        loading: l,
        options: f,
        height: h,
        width: p,
        className: d,
        wrapperProps: g,
        beforeMount: y,
        onMount: m,
      }) {
        const [v, b] = (0, J.useState)(!1),
          [w, O] = (0, J.useState)(!0),
          j = (0, J.useRef)(null),
          S = (0, J.useRef)(null),
          E = (0, J.useRef)(null),
          x = (0, J.useRef)(m),
          k = (0, J.useRef)(y);
        re(() => {
          const e = Z.init();
          return (
            e
              .then((e) => (S.current = e) && O(!1))
              .catch(
                (e) =>
                  "cancelation" !==
                    (null === e || void 0 === e ? void 0 : e.type) &&
                  console.error("Monaco initialization: error:", e)
              ),
            () =>
              j.current
                ? (function () {
                    const e = j.current.getModel();
                    var t, r;
                    s ||
                      null === (t = e.original) ||
                      void 0 === t ||
                      t.dispose();
                    u ||
                      null === (r = e.modified) ||
                      void 0 === r ||
                      r.dispose();
                    j.current.dispose();
                  })()
                : e.cancel()
          );
        }),
          ne(
            () => {
              const e = j.current.getModifiedEditor();
              e.getOption(S.current.editor.EditorOption.readOnly)
                ? e.setValue(t)
                : t !== e.getValue() &&
                  (e.executeEdits("", [
                    {
                      range: e.getModel().getFullModelRange(),
                      text: t,
                      forceMoveMarkers: !0,
                    },
                  ]),
                  e.pushUndoStop());
            },
            [t],
            v
          ),
          ne(
            () => {
              j.current.getModel().original.setValue(e);
            },
            [e],
            v
          ),
          ne(
            () => {
              const { original: e, modified: t } = j.current.getModel();
              S.current.editor.setModelLanguage(e, n || r),
                S.current.editor.setModelLanguage(t, i || r);
            },
            [r, n, i],
            v
          ),
          ne(
            () => {
              S.current.editor.setTheme(c);
            },
            [c],
            v
          ),
          ne(
            () => {
              j.current.updateOptions(f);
            },
            [f],
            v
          );
        const M = (0, J.useCallback)(() => {
            k.current(S.current);
            const s = oe(S.current, e, n || r, o),
              u = oe(S.current, t, i || r, a);
            j.current.setModel({ original: s, modified: u });
          }, [r, t, i, e, n, o, a]),
          P = (0, J.useCallback)(() => {
            (j.current = S.current.editor.createDiffEditor(E.current, {
              automaticLayout: !0,
              ...f,
            })),
              M(),
              S.current.editor.setTheme(c),
              b(!0);
          }, [f, c, M]);
        return (
          (0, J.useEffect)(() => {
            v && x.current(j.current, S.current);
          }, [v]),
          (0, J.useEffect)(() => {
            !w && !v && P();
          }, [w, v, P]),
          J.createElement(te, {
            width: p,
            height: h,
            isEditorReady: v,
            loading: l,
            _ref: E,
            className: d,
            wrapperProps: g,
          })
        );
      }
      (se.propTypes = {
        original: G().string,
        modified: G().string,
        language: G().string,
        originalLanguage: G().string,
        modifiedLanguage: G().string,
        originalModelPath: G().string,
        modifiedModelPath: G().string,
        keepCurrentOriginalModel: G().bool,
        keepCurrentModifiedModel: G().bool,
        theme: G().string,
        loading: G().oneOfType([G().element, G().string]),
        options: G().object,
        width: G().oneOfType([G().number, G().string]),
        height: G().oneOfType([G().number, G().string]),
        className: G().string,
        wrapperProps: G().object,
        beforeMount: G().func,
        onMount: G().func,
      }),
        (se.defaultProps = {
          theme: "light",
          loading: "Loading...",
          options: {},
          keepCurrentOriginalModel: !1,
          keepCurrentModifiedModel: !1,
          width: "100%",
          height: "100%",
          wrapperProps: {},
          beforeMount: ie,
          onMount: ie,
        });
      var ue = se,
        ce = (0, J.memo)(ue);
      var le = function (e) {
        const t = (0, J.useRef)();
        return (
          (0, J.useEffect)(() => {
            t.current = e;
          }, [e]),
          t.current
        );
      };
      const fe = new Map();
      function he({
        defaultValue: e,
        defaultLanguage: t,
        defaultPath: r,
        value: n,
        language: i,
        path: o,
        theme: a,
        line: s,
        loading: u,
        options: c,
        overrideServices: l,
        saveViewState: f,
        keepCurrentModel: h,
        width: p,
        height: d,
        className: g,
        wrapperProps: y,
        beforeMount: m,
        onMount: v,
        onChange: b,
        onValidate: w,
      }) {
        const [O, j] = (0, J.useState)(!1),
          [S, E] = (0, J.useState)(!0),
          x = (0, J.useRef)(null),
          k = (0, J.useRef)(null),
          M = (0, J.useRef)(null),
          P = (0, J.useRef)(v),
          C = (0, J.useRef)(m),
          R = (0, J.useRef)(null),
          T = (0, J.useRef)(n),
          V = le(o),
          I = (0, J.useRef)(!1);
        re(() => {
          const e = Z.init();
          return (
            e
              .then((e) => (x.current = e) && E(!1))
              .catch(
                (e) =>
                  "cancelation" !==
                    (null === e || void 0 === e ? void 0 : e.type) &&
                  console.error("Monaco initialization: error:", e)
              ),
            () =>
              k.current
                ? (function () {
                    var e, t;
                    null === (e = R.current) || void 0 === e || e.dispose(),
                      h
                        ? f && fe.set(o, k.current.saveViewState())
                        : null === (t = k.current.getModel()) ||
                          void 0 === t ||
                          t.dispose();
                    k.current.dispose();
                  })()
                : e.cancel()
          );
        }),
          ne(
            () => {
              const r = oe(x.current, e || n, t || i, o);
              r !== k.current.getModel() &&
                (f && fe.set(V, k.current.saveViewState()),
                k.current.setModel(r),
                f && k.current.restoreViewState(fe.get(o)));
            },
            [o],
            O
          ),
          ne(
            () => {
              k.current.updateOptions(c);
            },
            [c],
            O
          ),
          ne(
            () => {
              k.current.getOption(x.current.editor.EditorOption.readOnly)
                ? k.current.setValue(n)
                : n !== k.current.getValue() &&
                  (k.current.executeEdits("", [
                    {
                      range: k.current.getModel().getFullModelRange(),
                      text: n,
                      forceMoveMarkers: !0,
                    },
                  ]),
                  k.current.pushUndoStop());
            },
            [n],
            O
          ),
          ne(
            () => {
              x.current.editor.setModelLanguage(k.current.getModel(), i);
            },
            [i],
            O
          ),
          ne(
            () => {
              void 0 !== s && k.current.revealLine(s);
            },
            [s],
            O
          ),
          ne(
            () => {
              x.current.editor.setTheme(a);
            },
            [a],
            O
          );
        const N = (0, J.useCallback)(() => {
          if (!I.current) {
            C.current(x.current);
            const s = o || r,
              u = oe(x.current, n || e, t || i, s);
            (k.current = x.current.editor.create(
              M.current,
              { model: u, automaticLayout: !0, ...c },
              l
            )),
              f && k.current.restoreViewState(fe.get(s)),
              x.current.editor.setTheme(a),
              j(!0),
              (I.current = !0);
          }
        }, [e, t, r, n, i, o, c, l, f, a]);
        return (
          (0, J.useEffect)(() => {
            O && P.current(k.current, x.current);
          }, [O]),
          (0, J.useEffect)(() => {
            !S && !O && N();
          }, [S, O, N]),
          (T.current = n),
          (0, J.useEffect)(() => {
            var e, t;
            O &&
              b &&
              (null === (e = R.current) || void 0 === e || e.dispose(),
              (R.current =
                null === (t = k.current) || void 0 === t
                  ? void 0
                  : t.onDidChangeModelContent((e) => {
                      b(k.current.getValue(), e);
                    })));
          }, [O, b]),
          (0, J.useEffect)(() => {
            if (O) {
              const e = x.current.editor.onDidChangeMarkers((e) => {
                var t;
                const r =
                  null === (t = k.current.getModel()) || void 0 === t
                    ? void 0
                    : t.uri;
                if (r) {
                  if (e.find((e) => e.path === r.path)) {
                    const e = x.current.editor.getModelMarkers({ resource: r });
                    null === w || void 0 === w || w(e);
                  }
                }
              });
              return () => {
                null === e || void 0 === e || e.dispose();
              };
            }
          }, [O, w]),
          J.createElement(te, {
            width: p,
            height: d,
            isEditorReady: O,
            loading: u,
            _ref: M,
            className: g,
            wrapperProps: y,
          })
        );
      }
      (he.propTypes = {
        defaultValue: G().string,
        defaultPath: G().string,
        defaultLanguage: G().string,
        value: G().string,
        language: G().string,
        path: G().string,
        theme: G().string,
        line: G().number,
        loading: G().oneOfType([G().element, G().string]),
        options: G().object,
        overrideServices: G().object,
        saveViewState: G().bool,
        keepCurrentModel: G().bool,
        width: G().oneOfType([G().number, G().string]),
        height: G().oneOfType([G().number, G().string]),
        className: G().string,
        wrapperProps: G().object,
        beforeMount: G().func,
        onMount: G().func,
        onChange: G().func,
        onValidate: G().func,
      }),
        (he.defaultProps = {
          theme: "light",
          loading: "Loading...",
          options: {},
          overrideServices: {},
          saveViewState: !0,
          keepCurrentModel: !1,
          width: "100%",
          height: "100%",
          wrapperProps: {},
          beforeMount: ie,
          onMount: ie,
          onValidate: ie,
        });
      var pe = he,
        de = (0, J.memo)(pe);
    },
    787989: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return o;
        },
      });
      var n = r(824246),
        i = r(720227);
      const o = ({ className: e, children: t }) =>
        (0, n.jsx)("div", {
          className: (0, i.m)(
            "relative overflow-hidden bg-neutral-200 h-4 w-32 animate-[scale-skeleton-pulse_2s_ease-in-out_0.5s_infinite] after:animate-[scale-skeleton-wave_2s_linear_0.5s_infinite] after:absolute after: after:transform-[translateX(-100%)] after:bottom-0 after:left-0 after:right-0 after:top-0 after:content-[''] after:bg-[linear-gradient(90deg,transparent,rgb(243,244,246),transparent)]",
            e
          ),
          children: t,
        });
    },
    167606: function (e) {
      var t, r;
      (t = this),
        (r = function () {
          function e(t, r, n) {
            return (
              (this.id = ++e.highestId),
              (this.name = t),
              (this.symbols = r),
              (this.postprocess = n),
              this
            );
          }
          function t(e, t, r, n) {
            (this.rule = e),
              (this.dot = t),
              (this.reference = r),
              (this.data = []),
              (this.wantedBy = n),
              (this.isComplete = this.dot === e.symbols.length);
          }
          function r(e, t) {
            (this.grammar = e),
              (this.index = t),
              (this.states = []),
              (this.wants = {}),
              (this.scannable = []),
              (this.completed = {});
          }
          function n(e, t) {
            (this.rules = e), (this.start = t || this.rules[0].name);
            var r = (this.byName = {});
            this.rules.forEach(function (e) {
              r.hasOwnProperty(e.name) || (r[e.name] = []), r[e.name].push(e);
            });
          }
          function i() {
            this.reset("");
          }
          function o(e, t, o) {
            if (e instanceof n) {
              var a = e;
              o = t;
            } else a = n.fromCompiled(e, t);
            for (var s in ((this.grammar = a),
            (this.options = { keepHistory: !1, lexer: a.lexer || new i() }),
            o || {}))
              this.options[s] = o[s];
            (this.lexer = this.options.lexer), (this.lexerState = void 0);
            var u = new r(a, 0);
            (this.table = [u]),
              (u.wants[a.start] = []),
              u.predict(a.start),
              u.process(),
              (this.current = 0);
          }
          function a(e) {
            var t = typeof e;
            if ("string" === t) return e;
            if ("object" === t) {
              if (e.literal) return JSON.stringify(e.literal);
              if (e instanceof RegExp) return e.toString();
              if (e.type) return "%" + e.type;
              if (e.test) return "<" + String(e.test) + ">";
              throw new Error("Unknown symbol type: " + e);
            }
          }
          return (
            (e.highestId = 0),
            (e.prototype.toString = function (e) {
              var t =
                "undefined" === typeof e
                  ? this.symbols.map(a).join(" ")
                  : this.symbols.slice(0, e).map(a).join(" ") +
                    " \u25cf " +
                    this.symbols.slice(e).map(a).join(" ");
              return this.name + " \u2192 " + t;
            }),
            (t.prototype.toString = function () {
              return (
                "{" +
                this.rule.toString(this.dot) +
                "}, from: " +
                (this.reference || 0)
              );
            }),
            (t.prototype.nextState = function (e) {
              var r = new t(
                this.rule,
                this.dot + 1,
                this.reference,
                this.wantedBy
              );
              return (
                (r.left = this),
                (r.right = e),
                r.isComplete && ((r.data = r.build()), (r.right = void 0)),
                r
              );
            }),
            (t.prototype.build = function () {
              var e = [],
                t = this;
              do {
                e.push(t.right.data), (t = t.left);
              } while (t.left);
              return e.reverse(), e;
            }),
            (t.prototype.finish = function () {
              this.rule.postprocess &&
                (this.data = this.rule.postprocess(
                  this.data,
                  this.reference,
                  o.fail
                ));
            }),
            (r.prototype.process = function (e) {
              for (
                var t = this.states, r = this.wants, n = this.completed, i = 0;
                i < t.length;
                i++
              ) {
                var a = t[i];
                if (a.isComplete) {
                  if ((a.finish(), a.data !== o.fail)) {
                    for (var s = a.wantedBy, u = s.length; u--; ) {
                      var c = s[u];
                      this.complete(c, a);
                    }
                    if (a.reference === this.index) {
                      var l = a.rule.name;
                      (this.completed[l] = this.completed[l] || []).push(a);
                    }
                  }
                } else {
                  if ("string" !== typeof (l = a.rule.symbols[a.dot])) {
                    this.scannable.push(a);
                    continue;
                  }
                  if (r[l]) {
                    if ((r[l].push(a), n.hasOwnProperty(l))) {
                      var f = n[l];
                      for (u = 0; u < f.length; u++) {
                        var h = f[u];
                        this.complete(a, h);
                      }
                    }
                  } else (r[l] = [a]), this.predict(l);
                }
              }
            }),
            (r.prototype.predict = function (e) {
              for (
                var r = this.grammar.byName[e] || [], n = 0;
                n < r.length;
                n++
              ) {
                var i = r[n],
                  o = this.wants[e],
                  a = new t(i, 0, this.index, o);
                this.states.push(a);
              }
            }),
            (r.prototype.complete = function (e, t) {
              var r = e.nextState(t);
              this.states.push(r);
            }),
            (n.fromCompiled = function (t, r) {
              var i = t.Lexer;
              t.ParserStart && ((r = t.ParserStart), (t = t.ParserRules));
              var o = new n(
                (t = t.map(function (t) {
                  return new e(t.name, t.symbols, t.postprocess);
                })),
                r
              );
              return (o.lexer = i), o;
            }),
            (i.prototype.reset = function (e, t) {
              (this.buffer = e),
                (this.index = 0),
                (this.line = t ? t.line : 1),
                (this.lastLineBreak = t ? -t.col : 0);
            }),
            (i.prototype.next = function () {
              if (this.index < this.buffer.length) {
                var e = this.buffer[this.index++];
                return (
                  "\n" === e &&
                    ((this.line += 1), (this.lastLineBreak = this.index)),
                  { value: e }
                );
              }
            }),
            (i.prototype.save = function () {
              return { line: this.line, col: this.index - this.lastLineBreak };
            }),
            (i.prototype.formatError = function (e, t) {
              var r = this.buffer;
              if ("string" === typeof r) {
                var n = r
                    .split("\n")
                    .slice(Math.max(0, this.line - 5), this.line),
                  i = r.indexOf("\n", this.index);
                -1 === i && (i = r.length);
                var o = this.index - this.lastLineBreak,
                  a = String(this.line).length;
                return (
                  (t += " at line " + this.line + " col " + o + ":\n\n"),
                  (t += n
                    .map(function (e, t) {
                      return s(this.line - n.length + t + 1, a) + " " + e;
                    }, this)
                    .join("\n")),
                  (t += "\n" + s("", a + o) + "^\n")
                );
              }
              return t + " at index " + (this.index - 1);
              function s(e, t) {
                var r = String(e);
                return Array(t - r.length + 1).join(" ") + r;
              }
            }),
            (o.fail = {}),
            (o.prototype.feed = function (e) {
              var t,
                n = this.lexer;
              for (n.reset(e, this.lexerState); ; ) {
                try {
                  if (!(t = n.next())) break;
                } catch (y) {
                  var o = new r(this.grammar, this.current + 1);
                  throw (
                    (this.table.push(o),
                    ((u = new Error(this.reportLexerError(y))).offset =
                      this.current),
                    (u.token = y.token),
                    u)
                  );
                }
                var a = this.table[this.current];
                this.options.keepHistory || delete this.table[this.current - 1];
                var s = this.current + 1;
                (o = new r(this.grammar, s)), this.table.push(o);
                for (
                  var u,
                    c = void 0 !== t.text ? t.text : t.value,
                    l = n.constructor === i ? t.value : t,
                    f = a.scannable,
                    h = f.length;
                  h--;

                ) {
                  var p = f[h],
                    d = p.rule.symbols[p.dot];
                  if (
                    d.test
                      ? d.test(l)
                      : d.type
                      ? d.type === t.type
                      : d.literal === c
                  ) {
                    var g = p.nextState({
                      data: l,
                      token: t,
                      isToken: !0,
                      reference: s - 1,
                    });
                    o.states.push(g);
                  }
                }
                if ((o.process(), 0 === o.states.length))
                  throw (
                    (((u = new Error(this.reportError(t))).offset =
                      this.current),
                    (u.token = t),
                    u)
                  );
                this.options.keepHistory && (a.lexerState = n.save()),
                  this.current++;
              }
              return (
                a && (this.lexerState = n.save()),
                (this.results = this.finish()),
                this
              );
            }),
            (o.prototype.reportLexerError = function (e) {
              var t,
                r,
                n = e.token;
              return (
                n
                  ? ((t =
                      "input " + JSON.stringify(n.text[0]) + " (lexer error)"),
                    (r = this.lexer.formatError(n, "Syntax error")))
                  : ((t = "input (lexer error)"), (r = e.message)),
                this.reportErrorCommon(r, t)
              );
            }),
            (o.prototype.reportError = function (e) {
              var t =
                  (e.type ? e.type + " token: " : "") +
                  JSON.stringify(void 0 !== e.value ? e.value : e),
                r = this.lexer.formatError(e, "Syntax error");
              return this.reportErrorCommon(r, t);
            }),
            (o.prototype.reportErrorCommon = function (e, t) {
              var r = [];
              r.push(e);
              var n = this.table.length - 2,
                i = this.table[n],
                o = i.states.filter(function (e) {
                  var t = e.rule.symbols[e.dot];
                  return t && "string" !== typeof t;
                });
              return (
                0 === o.length
                  ? (r.push(
                      "Unexpected " +
                        t +
                        ". I did not expect any more input. Here is the state of my parse table:\n"
                    ),
                    this.displayStateStack(i.states, r))
                  : (r.push(
                      "Unexpected " +
                        t +
                        ". Instead, I was expecting to see one of the following:\n"
                    ),
                    o
                      .map(function (e) {
                        return this.buildFirstStateStack(e, []) || [e];
                      }, this)
                      .forEach(function (e) {
                        var t = e[0],
                          n = t.rule.symbols[t.dot],
                          i = this.getSymbolDisplay(n);
                        r.push("A " + i + " based on:"),
                          this.displayStateStack(e, r);
                      }, this)),
                r.push(""),
                r.join("\n")
              );
            }),
            (o.prototype.displayStateStack = function (e, t) {
              for (var r, n = 0, i = 0; i < e.length; i++) {
                var o = e[i],
                  a = o.rule.toString(o.dot);
                a === r
                  ? n++
                  : (n > 0 &&
                      t.push("    ^ " + n + " more lines identical to this"),
                    (n = 0),
                    t.push("    " + a)),
                  (r = a);
              }
            }),
            (o.prototype.getSymbolDisplay = function (e) {
              return (function (e) {
                var t = typeof e;
                if ("string" === t) return e;
                if ("object" === t) {
                  if (e.literal) return JSON.stringify(e.literal);
                  if (e instanceof RegExp) return "character matching " + e;
                  if (e.type) return e.type + " token";
                  if (e.test) return "token matching " + String(e.test);
                  throw new Error("Unknown symbol type: " + e);
                }
              })(e);
            }),
            (o.prototype.buildFirstStateStack = function (e, t) {
              if (-1 !== t.indexOf(e)) return null;
              if (0 === e.wantedBy.length) return [e];
              var r = e.wantedBy[0],
                n = [e].concat(t),
                i = this.buildFirstStateStack(r, n);
              return null === i ? null : [e].concat(i);
            }),
            (o.prototype.save = function () {
              var e = this.table[this.current];
              return (e.lexerState = this.lexerState), e;
            }),
            (o.prototype.restore = function (e) {
              var t = e.index;
              (this.current = t),
                (this.table[t] = e),
                this.table.splice(t + 1),
                (this.lexerState = e.lexerState),
                (this.results = this.finish());
            }),
            (o.prototype.rewind = function (e) {
              if (!this.options.keepHistory)
                throw new Error("set option `keepHistory` to enable rewinding");
              this.restore(this.table[e]);
            }),
            (o.prototype.finish = function () {
              var e = [],
                t = this.grammar.start;
              return (
                this.table[this.table.length - 1].states.forEach(function (r) {
                  r.rule.name === t &&
                    r.dot === r.rule.symbols.length &&
                    0 === r.reference &&
                    r.data !== o.fail &&
                    e.push(r);
                }),
                e.map(function (e) {
                  return e.data;
                })
              );
            }),
            { Parser: o, Grammar: n, Rule: e }
          );
        }),
        e.exports ? (e.exports = r()) : (t.nearley = r());
    },
    180518: function (e, t, r) {
      "use strict";
      function n() {
        return (
          (n = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          n.apply(this, arguments)
        );
      }
      r.d(t, {
        g7: function () {
          return c;
        },
      });
      var i = r(827378);
      function o(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              "function" === typeof e
                ? e(t)
                : null !== e && void 0 !== e && (e.current = t);
            })(e, t)
          );
      }
      function a(e, t, r) {
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
      function s(e) {
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
              a(e, t, r[t]);
            });
        }
        return e;
      }
      function u(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      const c = (0, i.forwardRef)((e, t) => {
        const { children: r } = e,
          o = u(e, ["children"]),
          a = i.Children.toArray(r),
          s = a.find(h);
        if (s) {
          const e = s.props.children,
            r = a.map((t) =>
              t === s
                ? i.Children.count(e) > 1
                  ? i.Children.only(null)
                  : (0, i.isValidElement)(e)
                  ? e.props.children
                  : null
                : t
            );
          return (0, i.createElement)(
            l,
            n({}, o, { ref: t }),
            (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, i.createElement)(l, n({}, o, { ref: t }), r);
      });
      c.displayName = "Slot";
      const l = (0, i.forwardRef)((e, t) => {
        const { children: r } = e,
          n = u(e, ["children"]);
        return (0, i.isValidElement)(r)
          ? (0, i.cloneElement)(
              r,
              s(
                {},
                (function (e, t) {
                  const r = s({}, t);
                  for (const n in t) {
                    const i = e[n],
                      o = t[n];
                    /^on[A-Z]/.test(n)
                      ? i && o
                        ? (r[n] = (...e) => {
                            o(...e), i(...e);
                          })
                        : i && (r[n] = i)
                      : "style" === n
                      ? (r[n] = s({}, i, o))
                      : "className" === n &&
                        (r[n] = [i, o].filter(Boolean).join(" "));
                  }
                  return s({}, e, r);
                })(n, r.props),
                { ref: t ? o(t, r.ref) : r.ref }
              )
            )
          : i.Children.count(r) > 1
          ? i.Children.only(null)
          : null;
      });
      l.displayName = "SlotClone";
      const f = ({ children: e }) => (0, i.createElement)(i.Fragment, null, e);
      function h(e) {
        return (0, i.isValidElement)(e) && e.type === f;
      }
    },
    223841: function (e, t, r) {
      "use strict";
      var n = r(786192);
      t.Z = function (e, t, r) {
        void 0 === t && (t = 0),
          void 0 === r && (r = []),
          (0, n.Z)(function () {
            var r = setTimeout(e, t);
            return function () {
              clearTimeout(r);
            };
          }, r);
      };
    },
    786192: function (e, t, r) {
      "use strict";
      var n = r(827378);
      t.Z = function (e, t) {
        var r = (0, n.useRef)(!0);
        (0, n.useEffect)(function () {
          if (!r.current) return e();
          r.current = !1;
        }, t);
      };
    },
  },
]);
