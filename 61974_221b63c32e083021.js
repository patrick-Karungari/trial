"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61974],
  {
    360125: function (e, t, o) {
      o.d(t, {
        t: function () {
          return c;
        },
      });
      var n = o(824246),
        i = o(691067),
        r = o(416534),
        l = o(713222),
        a = o(776845);
      function c({ open: e, codename: t, onClose: o }) {
        return (0, n.jsx)(i.u, {
          className:
            "scaleui scale-theme scale-tailwind [&_form]:overflow-visible ",
          title: "Codenames Error",
          actions: (0, n.jsx)("div", {
            className: "flex items-center gap-2 justify-end",
            children: (0, n.jsx)(r.zx, {
              type: "button",
              variant: "danger",
              onClick: o,
              children: "Cancel",
            }),
          }),
          open: e,
          innerClassName: "",
          onClose: o,
          children: (0, n.jsxs)("div", {
            className: "flex items-center ",
            children: [
              (0, n.jsx)(l.J, {
                icon: "message-exclamation",
                variant: "danger",
                size: "lg",
              }),
              (0, n.jsxs)(a.ZT.Paragraph2, {
                children: [
                  "We detected the codename ",
                  t,
                  " in the name. Please avoid using codenames in names that are CB facing",
                ],
              }),
            ],
          }),
        });
      }
    },
    623387: function (e, t, o) {
      var n = o(824246),
        i = o(298784),
        r = o.n(i),
        l = o(827378),
        a = o(252708),
        c = o.n(a),
        s = o(411356),
        u = o(285556),
        d = o(802638),
        p = o(68649),
        f = o(604375),
        b = o(327999),
        h = o(360125);
      function x(e, t, o, n, i, r, l) {
        try {
          var a = e[r](l),
            c = a.value;
        } catch (s) {
          return void o(s);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function m(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(t, o);
            function l(e) {
              x(r, n, i, l, a, "next", e);
            }
            function a(e) {
              x(r, n, i, l, a, "throw", e);
            }
            l(void 0);
          });
        };
      }
      const g = Object.freeze({ name: "Change Name", group: "Change Group" }),
        y = (0, p.ZL)({ button: { marginLeft: 10, float: "right" } });
      t.Z = ({ projectId: e, isModalOpen: t, customer: o, hideModal: i }) => {
        const a = y(),
          { 0: p, 1: x } = (0, l.useState)(!1),
          { 0: v, 1: j } = (0, l.useState)(""),
          { 0: w, 1: C } = (0, l.useState)(""),
          { 0: S, 1: O } = (0, l.useState)("name"),
          { 0: k, 1: P } = (0, l.useState)(!1),
          { 0: L, 1: z } = (0, l.useState)(""),
          M = (function () {
            var t = m(function* () {
              x(!0);
              try {
                yield (0, u.ZP)(null, "corp-api/update_permission_group_name", {
                  method: "POST",
                  body: { name: v, title: w, project: e },
                }),
                  i(v),
                  j(""),
                  C("");
              } catch (t) {
                (0, u.vj)(t, { handleHttp: !0 });
              } finally {
                x(!1);
              }
            });
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          V = () => {
            j(""), C(""), i("");
          },
          A = (function () {
            var t = m(function* () {
              x(!0);
              try {
                yield (0, u.ZP)(
                  null,
                  "corp-api/update_project_permission_group",
                  {
                    method: "POST",
                    body: { project: e, permissionGroupName: v, customer: o },
                  }
                ),
                  c().success(
                    "New Permission Group it's being process, it could take some time to update."
                  ),
                  V();
              } catch (t) {
                (0, u.vj)(t, { handleHttp: !0 });
              } finally {
                x(!1);
              }
            });
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          Z = (function () {
            var e = m(function* () {
              if ((0, b.Xd)(v) || (0, b.Xd)(w)) {
                const e = (0, b.wX)(v),
                  t = (0, b.wX)(w);
                P(!0);
                const o = [...new Set([...e, ...t])];
                z(o.join(", "));
              } else "name" === S ? yield M() : yield A();
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(h.t, { open: k, codename: L, onClose: () => P(!1) }),
            (0, n.jsxs)(d.u_, {
              isOpen: t && !k,
              onRequestClose: V,
              children: [
                (0, n.jsxs)(d.xB, {
                  onRequestClose: V,
                  children: [
                    "Update Permission Group ",
                    "name" === S ? "Title" : "",
                  ],
                }),
                (0, n.jsxs)(d.fe, {
                  children: [
                    (0, n.jsx)(s.__, { children: "Select Action:" }),
                    (0, n.jsx)(f.Ee, {
                      value: S,
                      onChange: O,
                      children: r().map(g, (e, t) =>
                        (0, n.jsx)(f.Y8, { value: t, label: e }, e)
                      ),
                    }),
                    (0, n.jsx)(s.__, { children: "Permission Group:" }),
                    (0, n.jsx)(s.oH, {
                      value: w,
                      placeholder:
                        "name" === S
                          ? "Permission Group Title..."
                          : "Permission Group ID or Name...",
                      onChange: (e) => {
                        const t = e.target.value;
                        C(t), j(t.toLowerCase().replace(/ /g, "_"));
                      },
                    }),
                    (0, n.jsx)("br", {}),
                    w &&
                      "name" === S &&
                      (0, n.jsxs)("ul", {
                        children: [
                          (0, n.jsxs)("li", {
                            children: [
                              'Your permission group will be displayed as: "',
                              w,
                              '"',
                            ],
                          }),
                          (0, n.jsxs)("li", {
                            children: [
                              'Your permission group will be saved internally as: "',
                              v,
                              '"',
                            ],
                          }),
                        ],
                      }),
                    (0, n.jsx)(s.zx, {
                      primary: !0,
                      type: "button",
                      disabled: !w || p,
                      className: a.button,
                      onClick: Z,
                      children: p ? "Loading..." : "Save",
                    }),
                    (0, n.jsx)("br", {}),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    589593: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return N;
        },
      });
      var n = o(824246),
        i = o(679892),
        r = o.n(i),
        l = (o(827378), o(60042)),
        a = o.n(l);
      function c(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var s = (e) =>
        (0, n.jsxs)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  c(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",
                fill: e.color || "#DA57C8",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M14.59 23.12L9.16998 20V26.25L14.59 29.37V23.12Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M20 7.5L14.59 10.62L20 13.75L25.41 10.62L20 7.5Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M14.59 10.62L9.16998 13.75V20L14.59 23.12L20 20V13.75L14.59 10.62Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.83 13.75L25.41 10.62L20 13.75V20L25.41 23.12L30.83 20V13.75Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M25.41 23.13V29.38L30.83 26.25V20L25.41 23.13Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M14.59 10.62L9.16998 13.75V20L14.59 23.12L20 20V13.75L14.59 10.62Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M25.41 23.13V29.38L30.83 26.25V20L25.41 23.13Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M20 20L14.59 23.12V29.37L20 32.5L25.41 29.37V23.12L20 20Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M20 7.5L14.59 10.62L20 13.75L25.41 10.62L20 7.5Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M20 20L14.59 23.12V29.37L20 32.5L25.41 29.37V23.12L20 20Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.9",
                d: "M20 7.5L14.59 10.62L20 13.75L25.41 10.62L20 7.5Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.9",
                d: "M20 20L14.59 23.12V29.37L20 32.5L25.41 29.37V23.12L20 20Z",
                fill: "white",
              }),
            ],
          })
        );
      function u(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var d = (e) =>
        (0, n.jsxs)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  u(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",
                fill: e.color || "#29D683",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M20 7.5L9.16998 13.75V26.25L20 32.5L30.83 26.25V13.75L20 7.5Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.82 13.75H9.16998V16.25H30.82V13.75Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.82 18.75H9.16998V21.25H30.82V18.75Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.82 18.75H9.16998V21.25H30.82V18.75Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.82 23.75H9.16998V26.25H30.82V23.75Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.9",
                d: "M30.82 23.75H9.16998V26.25H30.82V23.75Z",
                fill: "white",
              }),
            ],
          })
        );
      function p(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var f = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  p(e, t, o[t]);
                });
            }
            return e;
          })(
            {
              style: { width: "100%", display: "block" },
              viewBox: "0 0 87 87",
            },
            e,
            {
              children: (0, n.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                  (0, n.jsx)("rect", {
                    fill: e.color || "#63B31C",
                    x: 0.4,
                    y: 0.4,
                    width: 86.6,
                    height: 86.6,
                    rx: 43.3,
                  }),
                  (0, n.jsxs)("g", {
                    fill: "#FFF",
                    children: [
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M67.14 30.17L43.7 16.64v9.02l-7.81-4.51v9.02l-7.82-4.51v9.02l-7.81-4.51v27.06L43.7 70.76v-9.02l7.81 4.51v-9.02l7.81 4.51v-9.02l7.82 4.51z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M59.32 34.68L35.89 21.15v9.02l-7.82-4.51v9.02l-7.81-4.51v27.06L43.7 70.76v-9.02l7.81 4.51v-9.02l7.81 4.51z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M51.51 39.19L28.07 25.66v9.02l-7.81-4.51v27.06L43.7 70.76v-9.02l7.81 4.51z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.9,
                        d: "M20.26 30.17v27.06L43.7 70.76V43.7z",
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      function b(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var h = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  b(e, t, o[t]);
                });
            }
            return e;
          })(
            {
              style: { width: "100%", display: "block" },
              viewBox: "0 0 88 87",
            },
            e,
            {
              children: (0, n.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                  (0, n.jsx)("rect", {
                    fill: e.color || "#1F77E0",
                    x: 0.93,
                    y: 0.4,
                    width: 86.6,
                    height: 86.6,
                    rx: 43.3,
                  }),
                  (0, n.jsxs)("g", {
                    fill: "#FFF",
                    children: [
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M44.23 16.64L20.8 30.17v27.06l23.43 13.53 23.44-13.53V30.17z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M55.95 23.4v.01-.01l-11.72-6.76-11.72 6.76V64l11.72 6.76L55.95 64v-.01.01l11.72-6.77V30.17z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M55.95 23.4v.01-.01l-11.72-6.76v54.12L55.95 64v-.01.01l11.72-6.77V30.17z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.9,
                        d: "M55.95 64l11.72-6.77V30.17L55.95 23.4z",
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      function x(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var m = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  x(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 60 60",
            children: (0, n.jsxs)("g", {
              fill: "none",
              children: [
                (0, n.jsx)("circle", {
                  cx: "30",
                  cy: "30",
                  r: "30",
                  fill: e.color || "#4A7AFA",
                }),
                (0, n.jsx)("path", {
                  fill: "#000000",
                  d: "M44.86 40.75l-7.06-5.83a12.5 12.5 0 1 0-2.31 2.31l5.83 7.06a2.51 2.51 0 1 0 3.54-3.53v-.01z",
                }),
                (0, n.jsx)("circle", {
                  cx: "27.89",
                  cy: "27.3",
                  r: "9.5",
                  fill: "#FFFFFF",
                  transform: "rotate(-45 27.894 27.302)",
                }),
                (0, n.jsx)("path", {
                  fill: e.color || "#4A7AFA",
                  d: "M36 24.84L25.39 35.45A8.5 8.5 0 0 0 36 24.84z",
                }),
                (0, n.jsx)("path", {
                  fill: e.color || "#4A7AFA",
                  d: "M21.88 33.32c.99.99 2.2 1.72 3.54 2.12L36 24.84a8.46 8.46 0 0 0-2.12-3.54l-.37-.34-12 12c.14.12.25.2.37.36z",
                  opacity: ".5",
                }),
              ],
            }),
          })
        );
      function g(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var y = (e) =>
        (0, n.jsxs)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  g(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            viewBox: "0 0 40 40",
            fill: "blue",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M20 40C31.0457 40 40 31.0457 40 20C40 8.95429 31.0457 0 20 0C8.95429 0 0 8.95429 0 20C0 31.0457 8.95429 40 20 40Z",
                fill: e.color || "#ED72E2",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M31.0219 26.3636L20.0001 32.7272L8.97827 26.3636V13.6363L20.0001 7.27271L31.0219 13.6363V26.3636Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M16.4001 23.6C18.3892 25.5891 21.611 25.5891 23.6001 23.6C23.8619 23.3382 24.0837 23.0582 24.2765 22.76L31.0219 13.6363L20.0001 7.27271L8.97827 13.6363L15.7237 22.76C15.9165 23.0582 16.1419 23.3382 16.4001 23.6Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.25",
                d: "M23.6001 16.4C21.611 14.4109 18.3892 14.4109 16.4001 16.4C16.1383 16.6618 15.9165 16.9418 15.7237 17.24L8.97827 26.3637L20.0001 32.7273L31.0219 26.3637L24.2765 17.24C24.0837 16.9418 23.8583 16.6618 23.6001 16.4Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M24.2763 17.24C24.0836 16.9418 23.8618 16.6618 23.6 16.4C21.6109 14.4109 18.389 14.4109 16.4 16.4C16.1381 16.6618 15.9163 16.9418 15.7236 17.24L13.6836 20L15.7236 22.76C15.9163 23.0582 16.1381 23.3382 16.4 23.6C18.389 25.5891 21.6109 25.5891 23.6 23.6C23.8618 23.3382 24.0836 23.0582 24.2763 22.76L26.3163 20L24.2763 17.24Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M20 22.5455C21.4059 22.5455 22.5455 21.4059 22.5455 20C22.5455 18.5942 21.4059 17.4546 20 17.4546C18.5942 17.4546 17.4546 18.5942 17.4546 20C17.4546 21.4059 18.5942 22.5455 20 22.5455Z",
                fill: e.color || "#ED72E2",
              }),
            ],
          })
        );
      function v(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var j = (e) =>
        (0, n.jsxs)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  v(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            viewBox: "0 0 26 26",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z",
                fill: e.color || "#00B7FF",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M20.0399 17.0625V8.9375L13.0004 4.875L5.96094 8.9375V17.0625L13.0004 21.125L20.0399 17.0625Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M13.0003 9.82866C13.5818 9.82866 14.0533 9.35721 14.0533 8.77566C14.0533 8.1941 13.5818 7.72266 13.0003 7.72266C12.4187 7.72266 11.9473 8.1941 11.9473 8.77566C11.9473 9.35721 12.4187 9.82866 13.0003 9.82866Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M9.34011 11.94C9.92167 11.94 10.3931 11.4685 10.3931 10.887C10.3931 10.3054 9.92167 9.83398 9.34011 9.83398C8.75855 9.83398 8.28711 10.3054 8.28711 10.887C8.28711 11.4685 8.75855 11.94 9.34011 11.94Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M9.34011 16.1656C9.92167 16.1656 10.3931 15.6941 10.3931 15.1126C10.3931 14.531 9.92167 14.0596 9.34011 14.0596C8.75855 14.0596 8.28711 14.531 8.28711 15.1126C8.28711 15.6941 8.75855 16.1656 9.34011 16.1656Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.9",
                d: "M9.34011 11.94C9.92167 11.94 10.3931 11.4685 10.3931 10.887C10.3931 10.3054 9.92167 9.83398 9.34011 9.83398C8.75855 9.83398 8.28711 10.3054 8.28711 10.887C8.28711 11.4685 8.75855 11.94 9.34011 11.94Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.9",
                d: "M9.34011 16.1656C9.92167 16.1656 10.3931 15.6941 10.3931 15.1126C10.3931 14.531 9.92167 14.0596 9.34011 14.0596C8.75855 14.0596 8.28711 14.531 8.28711 15.1126C8.28711 15.6941 8.75855 16.1656 9.34011 16.1656Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M16.6604 11.94C17.242 11.94 17.7134 11.4685 17.7134 10.887C17.7134 10.3054 17.242 9.83398 16.6604 9.83398C16.0789 9.83398 15.6074 10.3054 15.6074 10.887C15.6074 11.4685 16.0789 11.94 16.6604 11.94Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M16.6604 16.1656C17.242 16.1656 17.7134 15.6941 17.7134 15.1126C17.7134 14.531 17.242 14.0596 16.6604 14.0596C16.0789 14.0596 15.6074 14.531 15.6074 15.1126C15.6074 15.6941 16.0789 16.1656 16.6604 16.1656Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M13.0003 18.2779C13.5818 18.2779 14.0533 17.8064 14.0533 17.2249C14.0533 16.6433 13.5818 16.1719 13.0003 16.1719C12.4187 16.1719 11.9473 16.6433 11.9473 17.2249C11.9473 17.8064 12.4187 18.2779 13.0003 18.2779Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M13.0003 14.0533C13.5818 14.0533 14.0533 13.5818 14.0533 13.0003C14.0533 12.4187 13.5818 11.9473 13.0003 11.9473C12.4187 11.9473 11.9473 12.4187 11.9473 13.0003C11.9473 13.5818 12.4187 14.0533 13.0003 14.0533Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M13.0003 9.82866C13.5818 9.82866 14.0533 9.35721 14.0533 8.77566C14.0533 8.1941 13.5818 7.72266 13.0003 7.72266C12.4187 7.72266 11.9473 8.1941 11.9473 8.77566C11.9473 9.35721 12.4187 9.82866 13.0003 9.82866Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M13.0003 18.2779C13.5818 18.2779 14.0533 17.8064 14.0533 17.2249C14.0533 16.6433 13.5818 16.1719 13.0003 16.1719C12.4187 16.1719 11.9473 16.6433 11.9473 17.2249C11.9473 17.8064 12.4187 18.2779 13.0003 18.2779Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M13.0003 14.0533C13.5818 14.0533 14.0533 13.5818 14.0533 13.0003C14.0533 12.4187 13.5818 11.9473 13.0003 11.9473C12.4187 11.9473 11.9473 12.4187 11.9473 13.0003C11.9473 13.5818 12.4187 14.0533 13.0003 14.0533Z",
                fill: "white",
              }),
            ],
          })
        );
      function w(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var C = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  w(e, t, o[t]);
                });
            }
            return e;
          })(
            {
              style: { width: "100%", display: "block" },
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 87 87",
            },
            e,
            {
              children: (0, n.jsxs)("g", {
                fill: "none",
                children: [
                  (0, n.jsx)("rect", {
                    width: "86.6",
                    height: "86.6",
                    y: ".4",
                    fill: e.color || "#FFBB1A",
                    rx: "43.3",
                  }),
                  (0, n.jsxs)("g", {
                    fill: "#FFFFFF",
                    transform: "translate(20 17)",
                    children: [
                      (0, n.jsx)("path", {
                        d: "M23.5 0L7.83 9 0 13.5v27l15.67 9L23.5 54 47 40.5v-27L23.5 0zm-7.83 40.5v-27L39.17 27l-23.5 13.5z",
                        opacity: ".5",
                      }),
                      (0, n.jsx)("polygon", {
                        points: "23.596 0 47 13.5 47 22.5 39.202 27 8 9",
                        opacity: ".9",
                      }),
                      (0, n.jsx)("polygon", {
                        points: "46 40.286 22.748 54 15 49.429 15 40.286 46 22",
                        opacity: ".5",
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      function S(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var O = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  S(e, t, o[t]);
                });
            }
            return e;
          })(
            {
              style: { display: "block", width: "100%" },
              viewBox: "0 0 88 87",
            },
            e,
            {
              children: (0, n.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                  (0, n.jsx)("rect", {
                    fill: e.color || "#9631E7",
                    x: 0.7,
                    y: 0.4,
                    width: 86.6,
                    height: 86.6,
                    rx: 43.3,
                  }),
                  (0, n.jsxs)("g", {
                    fill: "#FFF",
                    children: [
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M44 16.64L20.56 30.17v27.06L44 70.76l23.44-13.53V30.17z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M20.56 30.17v27.06L44 70.76l23.44-13.53V30.17z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M20.56 57.23L44 70.76l23.44-13.53V30.17z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.9,
                        d: "M44 70.76l23.44-13.53V30.17z",
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      function k(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var P = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  k(e, t, o[t]);
                });
            }
            return e;
          })(
            {
              style: { width: "100%", display: "block" },
              viewBox: "0 0 87 87",
            },
            e,
            {
              children: (0, n.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                  (0, n.jsx)("rect", {
                    fill: e.color || "#3CC0A7",
                    transform: "rotate(-180 43.471 43.697)",
                    x: 0.171,
                    y: 0.397,
                    width: 86.6,
                    height: 86.6,
                    rx: 43.3,
                  }),
                  (0, n.jsxs)("g", {
                    fill: "#FFF",
                    children: [
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M20.03 30.17l23.44-13.54L66.9 30.17v27.06L43.47 70.76 20.03 57.23V30.17z",
                      }),
                      (0, n.jsx)("path", {
                        d: "M66.9 30.17l-11.72 6.77v.01-.01l-11.72-6.77-11.72 6.76-11.72-6.77v27.06h.01-.01l23.44 13.53h-.01.01v-.02.02L66.9 57.22h-.01.01V30.17zm-11.71 20.3l-11.72 6.77-11.72-6.77 11.72-6.76 11.72 6.76z",
                        opacity: 0.5,
                      }),
                      (0, n.jsx)("path", {
                        d: "M55.18 36.93v13.53l-11.72-6.77V30.16l11.72 6.77zM31.74 50.47V36.94l-11.72-6.77v27.06h.01-.01l23.44 13.53h-.01.01V57.23l-11.72-6.76z",
                        opacity: 0.9,
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      function L(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var z = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  L(e, t, o[t]);
                });
            }
            return e;
          })(
            {
              style: { width: "100%", display: "block" },
              viewBox: "0 0 87 87",
            },
            e,
            {
              children: (0, n.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                  (0, n.jsx)("rect", {
                    fill: e.color || "#FF7600",
                    x: 0.23,
                    y: 0.4,
                    width: 86.6,
                    height: 86.6,
                    rx: 43.3,
                  }),
                  (0, n.jsxs)("g", {
                    fill: "#FFF",
                    children: [
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M67 57.5L43.5 71 20 57.5v-27L43.5 17 67 30.5z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M67 50.75L49.5 61 32 50.75v-20.5L49.5 20 67 30.25z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M67 43.248L55.5 50 44 43.248V29.752L55.5 23 67 29.752z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.9,
                        d: "M67 37.503L61 41l-6-3.497v-7.006L61 27l6 3.497z",
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      function M(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var V = (e) =>
        (0, n.jsxs)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  M(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            style: { width: "100%", display: "block" },
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",
                fill: e.color || "#29D683",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.8269 26.2494V13.7506L20.0001 7.50116L9.17334 13.7506V26.2494L20.0001 32.5035L30.8269 26.2494Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M19.9999 15.127C20.8978 15.127 21.6258 14.3991 21.6258 13.5012C21.6258 12.6032 20.8978 11.8753 19.9999 11.8753C19.1019 11.8753 18.374 12.6032 18.374 13.5012C18.374 14.3991 19.1019 15.127 19.9999 15.127Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M14.3695 18.3741C15.2675 18.3741 15.9954 17.6462 15.9954 16.7483C15.9954 15.8503 15.2675 15.1224 14.3695 15.1224C13.4716 15.1224 12.7437 15.8503 12.7437 16.7483C12.7437 17.6462 13.4716 18.3741 14.3695 18.3741Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                d: "M14.3695 24.8776C15.2675 24.8776 15.9954 24.1497 15.9954 23.2517C15.9954 22.3538 15.2675 21.6259 14.3695 21.6259C13.4716 21.6259 12.7437 22.3538 12.7437 23.2517C12.7437 24.1497 13.4716 24.8776 14.3695 24.8776Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M25.6303 18.3741C26.5282 18.3741 27.2561 17.6462 27.2561 16.7483C27.2561 15.8503 26.5282 15.1224 25.6303 15.1224C24.7323 15.1224 24.0044 15.8503 24.0044 16.7483C24.0044 17.6462 24.7323 18.3741 25.6303 18.3741Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M19.9999 21.6259C20.8978 21.6259 21.6258 20.898 21.6258 20C21.6258 19.1021 20.8978 18.3741 19.9999 18.3741C19.1019 18.3741 18.374 19.1021 18.374 20C18.374 20.898 19.1019 21.6259 19.9999 21.6259Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M25.6303 24.8776C26.5282 24.8776 27.2561 24.1497 27.2561 23.2517C27.2561 22.3538 26.5282 21.6259 25.6303 21.6259C24.7323 21.6259 24.0044 22.3538 24.0044 23.2517C24.0044 24.1497 24.7323 24.8776 25.6303 24.8776Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M19.9999 28.1293C20.8978 28.1293 21.6258 27.4014 21.6258 26.5035C21.6258 25.6055 20.8978 24.8776 19.9999 24.8776C19.1019 24.8776 18.374 25.6055 18.374 26.5035C18.374 27.4014 19.1019 28.1293 19.9999 28.1293Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M19.9999 15.127C20.8978 15.127 21.6258 14.3991 21.6258 13.5012C21.6258 12.6032 20.8978 11.8753 19.9999 11.8753C19.1019 11.8753 18.374 12.6032 18.374 13.5012C18.374 14.3991 19.1019 15.127 19.9999 15.127Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M19.9999 21.6259C20.8978 21.6259 21.6258 20.898 21.6258 20C21.6258 19.1021 20.8978 18.3741 19.9999 18.3741C19.1019 18.3741 18.374 19.1021 18.374 20C18.374 20.898 19.1019 21.6259 19.9999 21.6259Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M19.9999 28.1293C20.8978 28.1293 21.6258 27.4014 21.6258 26.5035C21.6258 25.6055 20.8978 24.8776 19.9999 24.8776C19.1019 24.8776 18.374 25.6055 18.374 26.5035C18.374 27.4014 19.1019 28.1293 19.9999 28.1293Z",
                fill: "white",
              }),
            ],
          })
        );
      function A(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var Z = (e) =>
        (0, n.jsxs)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  A(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",
                fill: e.color || "#FF8FB1",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M25.4135 10.6236L20.0001 7.50116L9.17334 13.7506V20L25.4135 10.6236Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M14.5864 29.3764L19.9998 32.4988L30.8266 26.2494V20L14.5864 29.3764Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M14.5864 29.3764L19.9998 32.4988L30.8266 26.2494V20L14.5864 29.3764Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.9",
                d: "M14.5864 29.3764L19.9998 32.4988L30.8266 26.2494V20L14.5864 29.3764Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M22.7807 24.6466L14.5867 29.3764L9.17334 26.2494V20L15.9355 16.097V16.97V19.515H17.6445V17.806H19.3535V22.9376H17.6445V24.6466H22.7807Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M22.7807 24.6466L14.5867 29.3764L9.17334 26.2494V20L15.9355 16.097V16.97V19.515H17.6445V17.806H19.3535V22.9376H17.6445V24.6466H22.7807Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M22.7807 24.6466L14.5867 29.3764L9.17334 26.2494V20L15.9355 16.097V16.97V19.515H17.6445V17.806H19.3535V22.9376H17.6445V24.6466H22.7807Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M25.4134 10.6236L15.9399 16.097H20.2125H24.4896V19.515H22.7806V17.806H21.0716V22.9377H22.7806V24.6467L30.8268 20V13.7506L25.4134 10.6236Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M25.4134 10.6236L15.9399 16.097H20.2125H24.4896V19.515H22.7806V17.806H21.0716V22.9377H22.7806V24.6467L30.8268 20V13.7506L25.4134 10.6236Z",
                fill: "white",
              }),
            ],
          })
        );
      function F(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var I = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  F(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 60 60",
            children: (0, n.jsxs)("g", {
              fill: "none",
              children: [
                (0, n.jsx)("circle", {
                  cx: "30",
                  cy: "30",
                  r: "30",
                  fill: e.color || "#FF866E",
                }),
                (0, n.jsx)("path", {
                  fill: "#000000",
                  d: "M34.51 18.21H23.75a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h10.76l6.83 6.83a2 2 0 0 0 3.41-1.41V12.8a2 2 0 0 0-3.41-1.41l-6.83 6.82z",
                }),
                (0, n.jsx)("polygon", {
                  fill: "#FFFFFF",
                  points:
                    "35.75 21.21 25.75 21.21 25.75 30.21 35.75 30.21 41.75 36.21 41.75 15.21",
                }),
                (0, n.jsx)("rect", {
                  width: "4.5",
                  height: "9",
                  x: "26.75",
                  y: "21.21",
                  fill: e.color || "#FF866E",
                  transform: "rotate(180 29 25.71)",
                }),
                (0, n.jsx)("rect", {
                  width: "4.5",
                  height: "9",
                  x: "31.25",
                  y: "21.21",
                  fill: e.color || "#FF866E",
                  opacity: ".5",
                  transform: "rotate(180 33.5 25.71)",
                }),
                (0, n.jsx)("path", {
                  fill: "#FFFFFF",
                  d: "M40.75 17.63V33.8l-4.33-4.29-.29-.29h-9.41v-7h9.41l.29-.29 4.29-4.29.04-.01zm.96-2.4l-6 6h-10v9h10l6 6v-21z",
                }),
                (0, n.jsx)("rect", {
                  width: "18",
                  height: "3",
                  x: "13.25",
                  y: "36.21",
                  fill: "#000000",
                  rx: "1",
                }),
                (0, n.jsx)("rect", {
                  width: "18",
                  height: "3",
                  x: "13.25",
                  y: "42.21",
                  fill: "#000000",
                  rx: "1",
                }),
              ],
            }),
          })
        );
      function H(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var R = (e) =>
        (0, n.jsxs)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  H(e, t, o[t]);
                });
            }
            return e;
          })({}, e, {
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsx)("path", {
                d: "M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z",
                fill: e.color || "#FF8FB1",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.83 13.75V26.25L9.16998 13.75L20 7.5L30.83 13.75Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.83 13.75V26.25L9.16998 13.75L20 7.5L30.83 13.75Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.83 26.25L20 32.5L9.16998 26.25L20 20L30.83 26.25Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M30.83 26.25L20 32.5L9.16998 26.25L20 20L30.83 26.25Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.9",
                d: "M30.83 26.25L20 32.5L9.16998 26.25L20 20L30.83 26.25Z",
                fill: "white",
              }),
              (0, n.jsx)("path", {
                opacity: "0.5",
                d: "M9.16998 13.75V26.25L20 20L9.16998 13.75Z",
                fill: "white",
              }),
            ],
          })
        );
      function T(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var B = (e) =>
        (0, n.jsx)(
          "svg",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(o);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  T(e, t, o[t]);
                });
            }
            return e;
          })(
            {
              style: { width: "100%", display: "block" },
              viewBox: "0 0 88 87",
            },
            e,
            {
              children: (0, n.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                  (0, n.jsx)("rect", {
                    fill: e.color || "#E23E7C",
                    x: 0.47,
                    y: 0.4,
                    width: 86.6,
                    height: 86.6,
                    rx: 43.3,
                  }),
                  (0, n.jsxs)("g", {
                    fill: "#FFF",
                    children: [
                      (0, n.jsx)("path", {
                        d: "M43.77 16.64L20.33 30.17v27.06l23.44 13.53 23.44-13.53V30.17L43.77 16.64zm11.72 33.82l-11.72 6.77-11.72-6.77V36.93l11.72-6.77 11.72 6.77v13.53z",
                        opacity: 0.5,
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.5,
                        d: "M55.49 23.4L32.05 36.93V23.4l11.72-6.77zM32.05 64l23.44-13.53V64l-11.72 6.77z",
                      }),
                      (0, n.jsx)("path", {
                        opacity: 0.9,
                        d: "M20.33 43.7l23.44 13.53L32.05 64l-11.72-6.77zM67.2 43.7L43.76 30.17l11.72-6.77 11.72 6.77V43.7z",
                      }),
                    ],
                  }),
                ],
              }),
            }
          )
        );
      var D = ({ type: e, style: t, disabled: o }) => {
          const i = o ? "#636363" : void 0;
          return "sensor-fusion-cuboids" === e ||
            "lidarannotation" === e ||
            "lidarlinking" === e
            ? (0, n.jsx)(O, { color: i })
            : "sensor-fusion-segmentation" === e || "lidarsegmentation" === e
            ? (0, n.jsx)(V, { color: i })
            : "semantic-segmentation" === e || "segmentannotation" === e
            ? (0, n.jsx)(B, { color: i })
            : "cuboids" === e || "cuboidannotation" === e
            ? (0, n.jsx)(P, { color: i })
            : "polygonannotation" === e
            ? (0, n.jsx)(z, { color: i })
            : "twod-boxes" === e || "boxannotation" === e || "annotation" === e
            ? (0, n.jsx)(f, { color: i })
            : "lineannotation" === e
            ? (0, n.jsx)(h, { color: i })
            : "categorization" === e || "imagecategorization" === e
            ? (0, n.jsx)(R, { color: i, style: t })
            : "textcategorization" === e
            ? (0, n.jsx)(Z, { color: i, style: t })
            : "comparison" === e
            ? (0, n.jsx)(s, { color: i, style: t })
            : "datacollection" === e || "genericdatacollection" === e
            ? (0, n.jsx)(m, { color: i, style: t })
            : "audiotranscription" === e
            ? (0, n.jsx)(I, { color: i, style: t })
            : "transcription" === e
            ? (0, n.jsx)(d, { color: i, style: t })
            : "pointannotation" === e
            ? (0, n.jsx)(j, { color: i, style: t })
            : [
                "videoboxannotation",
                "video-annotation",
                "videoannotation",
              ].includes(e)
            ? (0, n.jsx)(C, { color: i, style: t })
            : (0, n.jsx)(y, { color: i });
        },
        E = D,
        G = o(318308);
      function $(e) {
        switch (e) {
          case "sensor-fusion-cuboids":
          case "sensor-fusion-segmentation":
          case "semantic-segmentation":
          case "segmentannotation":
          case "lidarsegmentation":
          case "lidarannotation":
          case "polygonannotation":
          case "boxannotation":
          case "annotation":
          case "cuboidannotation":
          case "polygons":
          case "lineannotation":
          case "comparison":
          case "categorization":
          case "imagecategorization":
          case "textcategorization":
          case "datacollection":
          case "audiotranscription":
          case "transcription":
          case "videoboxannotation":
          case "pointannotation":
            return e;
          default:
            return "imageannotation";
        }
      }
      var N = ({
        type: e,
        showTitle: t = !0,
        isWorker: o,
        compact: i,
        disabled: l,
      }) =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className:
                "jsx-99090497da50f8c4 " +
                (a()("pill", $(e), {
                  "pill--with-title": t,
                  "pill--without-title": !t,
                  "pill-compact": i,
                }) || ""),
              children: [
                (0, n.jsx)("span", {
                  className:
                    "jsx-99090497da50f8c4 " +
                    (a()("icon", { "icon--with-title": t }) || ""),
                  children: (0, n.jsx)(E, {
                    type: e,
                    style: { height: "24px", display: "block" },
                    disabled: l,
                  }),
                }),
                t &&
                  (0, n.jsx)("span", {
                    className:
                      "jsx-99090497da50f8c4 " + (a()("type-title") || ""),
                    children: (0, G.Z)(e, { workerFacing: o }),
                  }),
              ],
            }),
            (0, n.jsx)(r(), {
              id: "99090497da50f8c4",
              children:
                ".pill.jsx-99090497da50f8c4{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:11px;letter-spacing:.5px}.pill--with-title.jsx-99090497da50f8c4{padding-left:2px;padding-right:10px}.pill--without-title.jsx-99090497da50f8c4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.pill-compact.jsx-99090497da50f8c4{width:140px!important}.sensor-fusion-cuboids.jsx-99090497da50f8c4,.lidarannotation.jsx-99090497da50f8c4{background:var(--color-sensor-fusion-cuboids)}.sensor-fusion-segmentation.jsx-99090497da50f8c4,.lidarsegmentation.jsx-99090497da50f8c4{background:var(--color-sensor-fusion-segmentation)}.semantic-segmentation.jsx-99090497da50f8c4,.segmentannotation.jsx-99090497da50f8c4{background:var(--color-semantic-segmentation)}.boxannotation.jsx-99090497da50f8c4,.annotation.jsx-99090497da50f8c4{background:var(--color-twod-boxes)}.polygonannotation.jsx-99090497da50f8c4{background:var(--color-polygons)}.cuboidannotation.jsx-99090497da50f8c4{background:var(--color-cuboids)}.lineannotation.jsx-99090497da50f8c4{background:var(--color-lines-splines)}.imageannotation.jsx-99090497da50f8c4{background:#ed72e2}.videoboxannotation.jsx-99090497da50f8c4{background:var(--color-video-box-annotation)}.pointannotation.jsx-99090497da50f8c4{background:var(--color-point-annotation)}.categorization.jsx-99090497da50f8c4,.imagecategorization.jsx-99090497da50f8c4,.textcategorization.jsx-99090497da50f8c4{background:var(--color-categorization)}.comparison.jsx-99090497da50f8c4{background:rgb(218,87,200)}.datacollection.jsx-99090497da50f8c4{background:rgb(74,122,250)}.audiotranscription.jsx-99090497da50f8c4{background:rgb(255,134,110)}.transcription.jsx-99090497da50f8c4{background:#29d683}.icon.jsx-99090497da50f8c4{min-width:24px;width:24px;height:24px;display:inline-block;vertical-align:middle}.icon--with-title.jsx-99090497da50f8c4{margin-right:2px}.type-title.jsx-99090497da50f8c4{color:#fff;font-weight:bold;text-transform:uppercase;display:inline-block;vertical-align:middle}",
            }),
          ],
        });
    },
    608438: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = o(824246),
        i = o(679892),
        r = o.n(i),
        l = o(827378),
        a = o(452444);
      function c(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              c(e, t, o[t]);
            });
        }
        return e;
      }
      const u = (e, t) => {
        const o = !!e.loadOptions ? a.ZP.Async : a.ZP,
          i = e.menuMaxHeight || 200;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(
              o,
              s({ ref: t }, e, {
                className:
                  r().dynamic([["b679b59daf554921", [i, i - 2]]]) +
                  " " +
                  ((e && null != e.className && e.className) || ""),
              })
            ),
            (0, n.jsx)(r(), {
              id: "b679b59daf554921",
              dynamic: [i, i - 2],
              children: `.Select{position:relative}.Select,.Select div,.Select input,.Select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.Select.is-disabled>.Select-control{background-color:#f9f9f9}.Select.is-disabled>.Select-control:hover{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.Select.is-disabled .Select-arrow-zone{cursor:default;pointer-events:none;opacity:.35}.Select-control{background-color:#fff;border-color:#d9d9d9#ccc#b3b3b3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:1px solid#ccc;color:#333;cursor:default;display:table;border-spacing:0;border-collapse:separate;height:36px;outline:none;overflow:hidden;position:relative;width:100%}.Select-control:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.06);-moz-box-shadow:0 1px 0 rgba(0,0,0,.06);box-shadow:0 1px 0 rgba(0,0,0,.06)}.Select-control .Select-input:focus{outline:none}.is-searchable.is-open>.Select-control{cursor:text}.is-open>.Select-control{-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0;-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;background:#fff;border-color:#b3b3b3#ccc#d9d9d9}.is-open>.Select-control .Select-arrow{top:-2px;border-color:transparent transparent#999;border-width:0 5px 5px}.is-searchable.is-focused:not(.is-open)>.Select-control{cursor:text}.is-focused:not(.is-open)>.Select-control{border-color:#007eff;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.Select-placeholder,.Select--single>.Select-control .Select-value{bottom:0;color:#aaa;left:0;line-height:34px;padding-left:10px;padding-right:10px;position:absolute;right:0;top:0;max-width:100%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.has-value.Select--single>.Select-control .Select-value .Select-value-label,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value .Select-value-label{color:#333}.has-value.Select--single>.Select-control .Select-value a.Select-value-label,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label{cursor:pointer;text-decoration:none}.has-value.Select--single>.Select-control .Select-value a.Select-value-label:hover,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:hover,.has-value.Select--single>.Select-control .Select-value a.Select-value-label:focus,.has-value.is-pseudo-focused.Select--single>.Select-control .Select-value a.Select-value-label:focus{color:#007eff;outline:none;text-decoration:underline}.Select-input{height:34px;padding-left:10px;padding-right:10px;vertical-align:middle}.Select-input>input{width:100%;background:none transparent;border:0 none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;cursor:default;display:inline-block;font-family:inherit;font-size:inherit;margin:0;outline:none;line-height:14px;padding:8px 0 12px;-webkit-appearance:none}.is-focused .Select-input>input{cursor:text}.has-value.is-pseudo-focused .Select-input{opacity:0}.Select-control:not(.is-searchable)>.Select-input{outline:none}.Select-loading-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:16px}.Select-loading{-webkit-animation:Select-animation-spin 400ms infinite linear;-o-animation:Select-animation-spin 400ms infinite linear;-webkit-animation:Select-animation-spin 400ms infinite linear;-moz-animation:Select-animation-spin 400ms infinite linear;-o-animation:Select-animation-spin 400ms infinite linear;animation:Select-animation-spin 400ms infinite linear;width:16px;height:16px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:2px solid#ccc;border-right-color:#333;display:inline-block;position:relative;vertical-align:middle}.Select-clear-zone{-webkit-animation:Select-animation-fadeIn 200ms;-o-animation:Select-animation-fadeIn 200ms;-webkit-animation:Select-animation-fadeIn 200ms;-moz-animation:Select-animation-fadeIn 200ms;-o-animation:Select-animation-fadeIn 200ms;animation:Select-animation-fadeIn 200ms;color:#999;cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:17px}.Select-clear-zone:hover{color:#d0021b}.Select-clear{display:inline-block;font-size:18px;line-height:1}.Select--multi .Select-clear-zone{width:17px}.Select-arrow-zone{cursor:pointer;display:table-cell;position:relative;text-align:center;vertical-align:middle;width:25px;padding-right:5px}.Select-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px;display:inline-block;height:0;width:0;position:relative}.is-open .Select-arrow,.Select-arrow-zone:hover>.Select-arrow{border-top-color:#666}.Select--multi .Select-multi-value-wrapper{display:inline-block}.Select .Select-aria-only{display:inline-block;height:1px;width:1px;margin:-1px;clip:rect(0,0,0,0);overflow:hidden;float:left}@keyframes Select-animation-fadeIn{from{opacity:0}to{opacity:1}}@keyframes Select-animation-fadeIn{from{opacity:0}to{opacity:1}}.Select-menu-outer{-webkit-border-bottom-right-radius:4px;-moz-border-radius-bottomright:4px;border-bottom-right-radius:4px;-webkit-border-bottom-left-radius:4px;-moz-border-radius-bottomleft:4px;border-bottom-left-radius:4px;background-color:#fff;border:1px solid#ccc;border-top-color:#e6e6e6;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.06);-moz-box-shadow:0 1px 0 rgba(0,0,0,.06);box-shadow:0 1px 0 rgba(0,0,0,.06);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-top:-1px;max-height:${i}px;position:absolute;top:100%;width:100%;z-index:1;-webkit-overflow-scrolling:touch}.Select-menu{max-height:${
                i - 2
              }px;overflow-y:auto}.Select-option{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background-color:#fff;color:#666;cursor:pointer;display:block;padding:8px 10px}.Select-option:last-child{-webkit-border-bottom-right-radius:4px;-moz-border-radius-bottomright:4px;border-bottom-right-radius:4px;-webkit-border-bottom-left-radius:4px;-moz-border-radius-bottomleft:4px;border-bottom-left-radius:4px}.Select-option.is-selected{background-color:#f5faff;background-color:rgba(0,126,255,.04);color:#333}.Select-option.is-focused{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);color:#333}.Select-option.is-disabled{color:#ccc;cursor:default}.Select-noresults{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:#999;cursor:default;display:block;padding:8px 10px}.Select--multi .Select-input{vertical-align:middle;margin-left:10px;padding:0}.Select--multi.has-value .Select-input{margin-left:5px}.Select--multi .Select-value{background-color:#ebf5ff;background-color:rgba(0,126,255,.08);-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;border:1px solid#c2e0ff;border:1px solid rgba(0,126,255,.24);color:#007eff;display:inline-block;font-size:.9em;line-height:1.4;margin-left:5px;margin-top:5px;vertical-align:top}.Select--multi .Select-value-icon,.Select--multi .Select-value-label{display:inline-block;vertical-align:middle}.Select--multi .Select-value-label{-webkit-border-bottom-right-radius:2px;-moz-border-radius-bottomright:2px;border-bottom-right-radius:2px;-webkit-border-top-right-radius:2px;-moz-border-radius-topright:2px;border-top-right-radius:2px;cursor:default;padding:2px 5px}.Select--multi a.Select-value-label{color:#007eff;cursor:pointer;text-decoration:none}.Select--multi a.Select-value-label:hover{text-decoration:underline}.Select--multi .Select-value-icon{cursor:pointer;-webkit-border-bottom-left-radius:2px;-moz-border-radius-bottomleft:2px;border-bottom-left-radius:2px;-webkit-border-top-left-radius:2px;-moz-border-radius-topleft:2px;border-top-left-radius:2px;border-right:1px solid#c2e0ff;border-right:1px solid rgba(0,126,255,.24);padding:1px 5px 3px}.Select--multi .Select-value-icon:hover,.Select--multi .Select-value-icon:focus{background-color:#d8eafd;background-color:rgba(0,113,230,.08);color:#0071e6}.Select--multi .Select-value-icon:active{background-color:#c2e0ff;background-color:rgba(0,126,255,.24)}.Select--multi.is-disabled .Select-value{background-color:#fcfcfc;border:1px solid#e3e3e3;color:#333}.Select--multi.is-disabled .Select-value-icon{cursor:not-allowed;border-right:1px solid#e3e3e3}.Select--multi.is-disabled .Select-value-icon:hover,.Select--multi.is-disabled .Select-value-icon:focus,.Select--multi.is-disabled .Select-value-icon:active{background-color:#fcfcfc}@keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);-o-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes Select-animation-spin{to{-webkit-transform:rotate(1turn)}}`,
            }),
          ],
        });
      };
      var d = l.forwardRef(u);
    },
    720053: function (e, t, o) {
      var n = o(824246),
        i = o(827378),
        r = o(608438),
        l = o(285556),
        a = o(875333);
      function c(e, t, o, n, i, r, l) {
        try {
          var a = e[r](l),
            c = a.value;
        } catch (s) {
          return void o(s);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function s(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(t, o);
            function l(e) {
              c(r, n, i, l, a, "next", e);
            }
            function a(e) {
              c(r, n, i, l, a, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function u(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              u(e, t, o[t]);
            });
        }
        return e;
      }
      const p = () => "undefined" !== typeof localStorage;
      class f extends i.Component {
        componentDidUpdate(e) {
          this.props.value !== e.value &&
            this.storeRecentProject(this.props.value);
        }
        getRecentProjects() {
          return (
            (p() && JSON.parse(localStorage.getItem("recentProjects"))) || []
          );
        }
        storeRecentProject(e) {
          if (!p() || !e || !e.value) return;
          let t = this.getRecentProjects();
          (t = t.filter((t) => t.value !== e.value)),
            t.unshift(e),
            t.length > 8 && t.pop(),
            localStorage.setItem("recentProjects", JSON.stringify(t)),
            this.setState({ recentProjects: t });
        }
        getProjectResults(e) {
          var t = this;
          return s(function* () {
            var o;
            const {
                customer: n,
                taskType: i,
                disallowedTaskTypes: r,
                includeTestProjects: a,
                exclusivelySyntheticProjects: c,
                remoAdminPersonaId: s,
                remoAdminCtx: u,
              } = t.props,
              d =
                s ||
                (null === u ||
                void 0 === u ||
                null === (o = u.currentPersona) ||
                void 0 === o
                  ? void 0
                  : o._id);
            if (d) {
              const t = { personaId: d, search: e };
              return yield (0, l.ZP)(null, "internal/remo-admin/projects", {
                query: t,
              });
            }
            const p = Object.assign(
              {
                includeTestProjects: a,
                exclusivelySyntheticProjects: c,
                customer: n,
                search: e,
              },
              i ? { taskType: i } : { disallowedTaskTypes: r }
            );
            return (yield (0,
            l.ZP)(null, "corp-api/find/projects", { query: p })).projects;
          })();
        }
        fetchProjects(e) {
          var t = this;
          return s(function* () {
            const { customer: o, taskType: n, showAllByDefault: i } = t.props;
            if (!i && !e && (!o || !n)) {
              return { options: t.state.recentProjects };
            }
            try {
              const o = yield t.getProjectResults(e);
              var r;
              return {
                options:
                  null !==
                    (r = o.map((e) => {
                      var o;
                      const n = null !== (o = e.id) && void 0 !== o ? o : e._id;
                      return {
                        label: t.props.showProjectId
                          ? `${e.name} (${n})`
                          : e.name,
                        value: n,
                      };
                    })) && void 0 !== r
                    ? r
                    : [],
              };
            } catch (a) {
              return (0, l.vj)(a, { handleHttp: !0 }), [];
            }
          })();
        }
        render() {
          const { width: e } = this.props,
            { recentProjects: t } = this.state,
            o = d({}, this.props, {
              onChange: (e) => {
                var t, o, n, i, r, l;
                this.props.noRemoAdminCtxUpdate ||
                  (null === (n = this.props.remoAdminCtx) ||
                    void 0 === n ||
                    n.setSelectedProject(
                      null !==
                        (r = null === e || void 0 === e ? void 0 : e.value) &&
                        void 0 !== r
                        ? r
                        : ""
                    ),
                  null === (i = this.props.remoAdminCtx) ||
                    void 0 === i ||
                    i.setSelectedProjectName(
                      null !==
                        (l = null === e || void 0 === e ? void 0 : e.label) &&
                        void 0 !== l
                        ? l
                        : ""
                    ));
                null === (o = (t = this.props).onChange) ||
                  void 0 === o ||
                  o.call(t, e);
              },
            });
          return (0, n.jsx)("div", {
            style: { width: e },
            children: (0, i.createElement)(
              r.Z,
              d({}, o, {
                loadOptions: this.fetchProjects.bind(this),
                ignoreCase: !0,
                defaultOptions: t,
                key: t.length > 0 ? t[0].value : "recentProjects",
              })
            ),
          });
        }
        constructor(e) {
          var t;
          super(e),
            e.remoAdminCtx &&
              (null === (t = e.value) || void 0 === t ? void 0 : t.value) &&
              e.remoAdminCtx.setSelectedProject(e.value.value),
            (this.state = { recentProjects: this.getRecentProjects() });
        }
      }
      (f.defaultProps = {
        placeholder: "Select a project",
        showProjectId: !0,
        customer: null,
        taskType: null,
        disallowedTaskTypes: null,
        includeTestProjects: !0,
        exclusivelySyntheticProjects: !1,
        width: "500px",
        remoAdminPersonaId: void 0,
        remoAdminCtx: null,
      }),
        (t.Z = (0, a.pi)(f));
    },
    958008: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return j;
        },
      });
      var n = o(824246),
        i = o(827378),
        r = o(504456),
        l = o(875333),
        a = o(720053),
        c = o(604375),
        s = o(68649),
        u = o(792739),
        d = o(285556),
        p = o(977608),
        f = o(298784),
        b = o.n(f);
      function h(e, t, o, n, i, r, l) {
        try {
          var a = e[r](l),
            c = a.value;
        } catch (s) {
          return void o(s);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function x(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(t, o);
            function l(e) {
              h(r, n, i, l, a, "next", e);
            }
            function a(e) {
              h(r, n, i, l, a, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function m(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(o);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              m(e, t, o[t]);
            });
        }
        return e;
      }
      const y = (0, s.ZL)(() => ({
        selectProjectContainer: { display: "flex" },
        selectProject: { flex: "1" },
        manualIdInsertButtonContainer: { width: "auto" },
        manualIdInsertButton: {
          minWidth: "44px",
          height: "36px !important",
          padding: "0px 10px !important",
          marginLeft: "8px",
        },
        manualIdInsertDialogButton: { minWidth: "85px" },
      }));
      var v = (e) => {
          const t = y(),
            o = (0, l.bE)();
          if (o.isRemoAdmin && !o.currentPersona) {
            const t = e.remoAdminPersonaId
              ? o.remoAdminPersonas.find((e) => e._id)
              : (0, r.getDefaultPersona)(o.remoAdminPersonas);
            t && o.setCurrentPersona(t);
          }
          const s = i.useMemo(() => {
              var e;
              return null === (e = o.currentPersona) || void 0 === e
                ? void 0
                : e._id;
            }, [o.currentPersona]),
            { 0: f, 1: h } = (0, i.useState)(!1),
            { 0: m, 1: v } = (0, i.useState)(""),
            { 0: j, 1: w } = (0, i.useState)(!1),
            C = g({}, e, { remoAdminPersonaId: s, remoAdminCtx: o });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: t.selectProjectContainer,
                children: [
                  (0, n.jsx)("div", {
                    className: t.selectProject,
                    children: (0, n.jsx)(a.Z, g({}, C)),
                  }),
                  e.onManualIdInsert &&
                    e.multi &&
                    (0, n.jsx)("div", {
                      className: t.manualIdInsertButtonContainer,
                      children: (0, n.jsx)(c.zx, {
                        className: t.manualIdInsertButton,
                        onClick: () => {
                          h(!0);
                        },
                        children: (0, n.jsx)(u.G, { icon: "paste" }),
                      }),
                    }),
                ],
              }),
              (0, n.jsxs)(c.Vq, {
                fullWidth: !0,
                open: f,
                onClose: () => {
                  h(!1);
                },
                children: [
                  (0, n.jsx)(c.$N, { children: "Manual ID Insertion" }),
                  (0, n.jsxs)(c.cZ, {
                    children: [
                      (0, n.jsx)("div", {
                        children:
                          "Insert a comma-separated list of valid, existent Project IDs here:",
                      }),
                      (0, n.jsx)("div", {
                        children: (0, n.jsx)(c.oi, {
                          fullWidth: !0,
                          multiline: !0,
                          value: m,
                          onChange: (e) => v(e.target.value),
                          rows: 3,
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)(c.kX, {
                    style: { justifyContent: "flex-end" },
                    children: (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)(c.zx, {
                          className: t.manualIdInsertDialogButton,
                          disabled: j,
                          onClick: () => {
                            h(!1);
                          },
                          children: "Cancel",
                        }),
                        (0, n.jsx)(c.zx, {
                          type: "primary",
                          className: t.manualIdInsertDialogButton,
                          disabled: j,
                          onClick: x(function* () {
                            var t;
                            w(!0);
                            const n = b()
                                .uniq(m.split(","))
                                .map((e) => b().replace(e, /\s/g, ""))
                                .filter((e) => 1 === (0, p.wq)(e).length),
                              i = [];
                            n.forEach((e) => {
                              i.push(
                                x(function* () {
                                  try {
                                    return yield (0,
                                    d.ZP)(null, `corp-api/qm/projects/${e}`);
                                  } catch (t) {
                                    return null;
                                  }
                                })()
                              );
                            });
                            const r = b()
                              .compact(yield Promise.all(i))
                              .map((e) => ({
                                label: `${e.name} (${e.id})`,
                                value: e.id,
                              }));
                            var l, a;
                            e.noRemoAdminCtxUpdate ||
                              e.multi ||
                              null === o ||
                              void 0 === o ||
                              o.setSelectedProject(
                                null !==
                                  (a =
                                    null === (l = r[0]) || void 0 === l
                                      ? void 0
                                      : l.value) && void 0 !== a
                                  ? a
                                  : ""
                              );
                            null === (t = e.onManualIdInsert) ||
                              void 0 === t ||
                              t.call(e, r),
                              h(!1),
                              w(!1);
                          }),
                          children: j
                            ? (0, n.jsx)(c.D8, {
                                size: "10px",
                                color: "inherit",
                              })
                            : "Confirm",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        j = v;
    },
    917821: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = o(279220),
        i = o(285556);
      function r(e, t, o, n, i, r, l) {
        try {
          var a = e[r](l),
            c = a.value;
        } catch (s) {
          return void o(s);
        }
        a.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function l(e) {
        return function () {
          var t = this,
            o = arguments;
          return new Promise(function (n, i) {
            var l = e.apply(t, o);
            function a(e) {
              r(l, n, i, a, c, "next", e);
            }
            function c(e) {
              r(l, n, i, a, c, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function a() {
        return (a = l(function* (e) {
          if (e)
            return yield (0, i.ZP)(null, `corp-api/qm/projects/${e}`, {
              method: "GET",
            });
        })).apply(this, arguments);
      }
      function c(e, t = 0) {
        const o = (0, n.Z)(
          l(function* () {
            return (function (e) {
              return a.apply(this, arguments);
            })(e);
          }),
          [e, t]
        );
        return { loading: o.loading, error: o.error, project: o.value };
      }
    },
    635003: function (e, t, o) {
      o.d(t, {
        Hx: function () {
          return r;
        },
        Yw: function () {
          return l;
        },
        c0: function () {
          return a;
        },
        s4: function () {
          return c;
        },
        IW: function () {
          return s;
        },
        gQ: function () {
          return u;
        },
        $t: function () {
          return d;
        },
        xj: function () {
          return p;
        },
        gg: function () {
          return f;
        },
        zR: function () {
          return b;
        },
        qJ: function () {
          return h;
        },
        v5: function () {
          return m;
        },
        TQ: function () {
          return g;
        },
        IE: function () {
          return y;
        },
        cA: function () {
          return v;
        },
        OJ: function () {
          return j;
        },
        st: function () {
          return w;
        },
        Xw: function () {
          return C;
        },
        nM: function () {
          return S;
        },
        Hh: function () {
          return O;
        },
        MU: function () {
          return k;
        },
        mh: function () {
          return P;
        },
        _T: function () {
          return L;
        },
        qO: function () {
          return z;
        },
        Tg: function () {
          return M;
        },
        eK: function () {
          return V;
        },
        KD: function () {
          return A;
        },
        Cx: function () {
          return Z;
        },
        uB: function () {
          return F;
        },
        tO: function () {
          return I;
        },
        QH: function () {
          return H;
        },
        LK: function () {
          return R;
        },
        E: function () {
          return T;
        },
        WA: function () {
          return B;
        },
        hz: function () {
          return D;
        },
        pA: function () {
          return E;
        },
      });
      var n = o(853085),
        i = o(621837);
      const r = ["-1", "qir_auditor", "0", "1", "4", "10", "11", "12"];
      var l;
      !(function (e) {
        (e[(e.Main = n.R2.GenAIOpsHub)] = "Main"),
          (e[(e.Projects = `${n.R2.GenAIOpsHub}/projects`)] = "Projects"),
          (e[(e.Onboarding = `${n.R2.GenAIOpsHub}/onboarding`)] = "Onboarding"),
          (e[(e.CustomerSetup = `${n.R2.GenAIOpsHub}/customer-setup`)] =
            "CustomerSetup"),
          (e[(e.ProjectSetup = `${n.R2.GenAIOpsHub}/project-setup`)] =
            "ProjectSetup"),
          (e[
            (e.ProjectSetupLegacy = `${n.R2.GenAIOpsHub}/project-setup-legacy`)
          ] = "ProjectSetupLegacy"),
          (e[(e.ProjectLibrary = `${n.R2.GenAIOpsHub}/project-library`)] =
            "ProjectLibrary"),
          (e[(e.VerifiedCourses = `${n.R2.GenAIOpsHub}/verified-courses`)] =
            "VerifiedCourses"),
          (e[
            (e.CommunityManagement = `${n.R2.GenAIOpsHub}/community-management`)
          ] = "CommunityManagement"),
          (e[(e.Pay = `${n.R2.GenAIOpsHub}/pay`)] = "Pay"),
          (e[(e.SlaGroupSetup = `${n.R2.GenAIOpsHub}/SLA-groups-setup`)] =
            "SlaGroupSetup"),
          (e[(e.SlaGroups = `${n.R2.GenAIOpsHub}/SLA-groups`)] = "SlaGroups"),
          (e[(e.PodLeadCenter = `${n.R2.GenAIOpsHub}/pod-lead-center`)] =
            "PodLeadCenter"),
          (e[(e.Ots = `${n.R2.GenAIOpsHub}/ots`)] = "Ots"),
          (e[(e.Demos = `${n.R2.GenAIOpsHub}/demos`)] = "Demos"),
          (e[(e.Allocation = `${n.R2.GenAIOpsHub}/allocation`)] = "Allocation"),
          (e[(e.ModelExplorer = `${n.R2.GenAIOpsHub}/model-explorer`)] =
            "ModelExplorer"),
          (e[(e.Compass = `${n.R2.GenAIOpsHub}/compass`)] = "Compass"),
          (e.CorpLookup = "/lookup"),
          (e.CorpSearch = "/search"),
          (e.CorpDCT = "/dct"),
          (e[(e.V3Tasks = `${n.R2.GenAIOpsHub}/v3-tasks`)] = "V3Tasks"),
          (e[(e.OpsSearch = `${n.R2.GenAIOpsHub}/search/:searchId`)] =
            "OpsSearch"),
          (e[(e.Toolbox = `${n.R2.GenAIOpsHub}/toolbox`)] = "Toolbox"),
          (e[(e.ToolboxEmbedded = `${n.R2.GenAIOpsHub}/toolbox/embedded`)] =
            "ToolboxEmbedded"),
          (e[(e.Billing = `${n.R2.GenAIOpsHub}/billing`)] = "Billing"),
          (e[(e.ArchiveProject = `${n.R2.GenAIOpsHub}/archive-project`)] =
            "ArchiveProject"),
          (e[(e.CourseLibrary = `${n.R2.GenAIOpsHub}/course-library`)] =
            "CourseLibrary"),
          (e[
            (e.ExperimentPlatform = `${n.R2.GenAIOpsHub}/experiment-platform`)
          ] = "ExperimentPlatform"),
          (e[(e.NotificationCenter = `${n.R2.GenAIOpsHub}/notifications`)] =
            "NotificationCenter");
      })(l || (l = {}));
      const a = [
        { id: "barChart", name: "Bar chart" },
        { id: "table", name: "Table" },
      ];
      var c,
        s,
        u,
        d,
        p,
        f,
        b,
        h,
        x,
        m,
        g,
        y,
        v,
        j,
        w,
        C,
        S,
        O,
        k,
        P,
        L,
        z,
        M,
        V,
        A,
        Z,
        F,
        I,
        H;
      !(function (e) {
        (e.Linters = "linters"),
          (e.Training = "training"),
          (e.Configs = "configs"),
          (e.ChatTask = "chat-task"),
          (e.Tools = "tools"),
          (e.ProjectConfig = "project-config"),
          (e.Quality = "quality"),
          (e.Overview = "overview"),
          (e.Notifications = "notifications"),
          (e.Throughput = "throughput"),
          (e.BenchmarkCenter = "benchmark-center"),
          (e.Diversity = "diversity"),
          (e.Finance = "finance"),
          (e.Billing = "billing"),
          (e.DeliveryHub = "delivery-hub"),
          (e.Reporting = "reporting"),
          (e.RemoAdmin = "remo-admin"),
          (e.Reviewers = "reviewers"),
          (e.Jobs = "jobs"),
          (e.Toolbox = "toolbox");
      })(c || (c = {})),
        (function (e) {
          (e.Taxonomy = "taxonomy"), (e.Config = "config");
        })(s || (s = {})),
        (function (e) {
          (e.PipelineSnapshot = "pipeline-snapshot"),
            (e.PipelineEditor = "pipeline-editor"),
            (e.PipelineTasks = "tasks/:taskId?/:attemptId?"),
            (e.PipelineBatches = "batches");
        })(u || (u = {})),
        (function (e) {
          (e.AllocationAndQualifications = "allocation-and-qualifications"),
            (e.Graders = "graders"),
            (e.TimersAndThrottling = "timers-and-throttling"),
            (e.SpecializedRouting = "specialized-routing"),
            (e.AuditingAndRubrics = "auditing-and-rubrics"),
            (e.ChangeLogHistory = "change-log-history"),
            (e.ChatTask = "chat-task"),
            (e.TaskReplication = "task-replication"),
            (e.QualityImprovement = "quality-improvement"),
            (e.QualityControl = "quality-control"),
            (e.OffPlatform = "off-platform"),
            (e.AutoFeedback = "auto-feedback"),
            (e.Payments = "payments"),
            (e.PayPerTask = "pay-per-task");
        })(d || (d = {})),
        (function (e) {
          (e.Deliveries = "deliveries"),
            (e.DeliverySender = "delivery-sender"),
            (e.DeliveryFormatter = "delivery-formatter"),
            (e.SchemaRegistry = "schema-registry"),
            (e.OTSAddToTaskBank = "add-to-task-bank"),
            (e.OTSUploadBatches = "ots-task-bank-jobs");
        })(p || (p = {})),
        (function (e) {
          (e.SandboxTools = "sandbox-tools"),
            (e.CheatingDetection = "cheating-detection"),
            (e.ContributorRebirth = "contributor-rebirth"),
            (e.LintersEval = "linters-eval"),
            (e.SphereWorkspaceProvisioner = "sphere-workspace-provisioner"),
            (e.ShareTasks = "share-tasks"),
            (e.ExplainQueue = "explain-queue"),
            (e.ContributorDirectAssign = "contributor-direct-assign"),
            (e.TaskActions = "task-actions"),
            (e.ModelHealth = "model-health"),
            (e.BulbaBugLookupEditor = "bulba-bug-lookup-editor"),
            (e.ArchiveProject = "archive-project"),
            (e.DeliveryNexus = "delivery-nexus"),
            (e.S3Upload = "s3-upload");
        })(f || (f = {})),
        (function (e) {
          (e.ActivationControlPanel = "activation-control-panel"),
            (e.Instructions = "instructions"),
            (e.Courses = "courses"),
            (e.WebinarSessions = "webinar-sessions");
        })(b || (b = {})),
        (function (e) {
          (e.FinanceReport = "finance-report"),
            (e.FinanceRequests = "finance-requests"),
            (e.StellarQualityIncentives = "stellar-quality-incentives"),
            (e.PaySandbox = "pay-sandbox"),
            (e.CostCenter = "cost-center"),
            (e.PausedHistory = "paused-history");
        })(h || (h = {})),
        (function (e) {
          e.OverviewConfigs = "overview-configs";
        })(x || (x = {})),
        (function (e) {
          (e.QualityMetricsReport = "quality-metrics-report"),
            (e.ChatBulkAudit = "chat-bulk-audit"),
            (e.ErrorCategories = "chat-bulk-audit-error-categories"),
            (e.AutoReviewer = "auto-reviewer"),
            (e.QualityControlSpecDoc = "quality-control-spec-doc"),
            (e.ArchieQCControlCenter = "archieQC-control-center"),
            (e.ArchieQCResultsViewer = "archieQC-results-viewer");
        })(m || (m = {})),
        (function (e) {
          e.PromptDiversity = "prompt-diversity";
        })(g || (g = {})),
        (function (e) {
          (e.ProjectBenchmarks = "project-benchmarks"),
            (e.BenchmarkWall = "benchmark-wall"),
            (e.ArchieBenchmark = "archie-benchmark"),
            (e.ContributorMetrics = "contributor-metrics"),
            (e.AddBenchmarks = "add-benchmarks"),
            (e.Config = "configs");
        })(y || (y = {})),
        (function (e) {
          (e.Snapshot = "snapshot"), (e.Forecast = "forecast");
        })(v || (v = {})),
        (function (e) {
          (e.Editor = "editor"),
            (e.Configs = "configs"),
            (e.TaskPriority = "task-priority"),
            (e.RoutingHistory = "routing-history");
        })(j || (j = {})),
        (function (e) {
          (e.Timers = "timers"), (e.Throttles = "throttles");
        })(w || (w = {})),
        (function (e) {
          e.Setup = "setup";
        })(C || (C = {})),
        (function (e) {
          (e.Overview = "overview"),
            (e.Response = "view-response"),
            (e.Attempts = "attempts-history"),
            (e.Pipeline = "pipeline"),
            (e.JSON = "json");
        })(S || (S = {})),
        (function (e) {
          (e.Overview = "overview"),
            (e.Response = "view-response"),
            (e.JSON = "json");
        })(O || (O = {})),
        (function (e) {
          (e.Task = "Task"),
            (e.TaskAttempt = "Task Attempt"),
            (e.Corp = "Corp Lookup"),
            (e.User = "User");
        })(k || (k = {})),
        (function (e) {
          (e.ContributorSpecializations = "contributor-specializations"),
            (e.Configs = "configs");
        })(P || (P = {})),
        (function (e) {
          (e.ChatTaskConfigs = "chat-task-configs"),
            (e.GeneralConfigs = "general-configs"),
            (e.ReviewerFeedback = "reviewer-feedback"),
            (e.ReviewerFeedbackJson = "reviewer-feedback-json");
        })(L || (L = {})),
        (function (e) {
          (e.Configs = "configs"),
            (e.ManageReplications = "manage-replications");
        })(z || (z = {})),
        (function (e) {
          (e.Qualifications = "qualifications"), (e.Configs = "configs");
        })(M || (M = {})),
        (function (e) {
          (e.CanvasView = "canvas-view"), (e.FunnelView = "funnel-view");
        })(V || (V = {})),
        (function (e) {
          (e.BillingOverview = "billing-overview"),
            (e.BillingConfigs = "billing-configs"),
            (e.BillingActivity = "billing-activity");
        })(A || (A = {})),
        (function (e) {
          (e.ReviewerIdentification = "reviewer-identification"),
            (e.ReviewerManagement = "reviewer-management"),
            (e.ReviewerSpotterBenchmarks = "reviewer-spotter-benchmarks"),
            (e.ActionLogs = "action-logs"),
            (e.ContributorDeepDive = "contributor-deep-dive"),
            (e.ReviewerDisputes = "reviewer-disputes");
        })(Z || (Z = {})),
        (function (e) {
          (e.QCDesignation = "quality-control-designation"),
            (e.GradingInstructions = "grading-instructions");
        })(F || (F = {})),
        (function (e) {
          (e.SuspiciousContributors = "suspicious-contributors"),
            (e.CheatingFlaggedTasks = "cheating-flagged-tasks"),
            (e.TasksTouchedByConfirmedCheaters =
              "tasks-touched-by-confirmed-cheaters"),
            (e.WorkersDeactivatedForCheating =
              "workers-deactivated-for-cheating");
        })(I || (I = {})),
        (function (e) {
          (e.ExplainQueue = "explain-queue"),
            (e.MarketplaceDebugger = "marketplace-debugger");
        })(H || (H = {}));
      const R = "h-[280px]",
        T = { ID: "ops-hub-toast-container", LIMIT: 2, DRAGGABLE: !1 },
        B = "Community Management",
        D = "#slack-communities-eng",
        E = [i.BZ.Experts, i.BZ.Remotasks];
    },
    271599: function (e, t, o) {
      o.d(t, {
        v: function () {
          return n;
        },
      });
      const n = function (
        e,
        { excludeOuterQuotes: t = !1, copyRaw: o = !1 } = {}
      ) {
        const n = document.createElement("textarea"),
          i = o ? e : JSON.stringify(e);
        (n.value = t && !o ? i.slice(1, -1) : i),
          document.body.appendChild(n),
          n.select(),
          document.execCommand("copy"),
          document.body.removeChild(n);
      };
    },
  },
]);
