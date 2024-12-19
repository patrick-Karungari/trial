"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [10659],
  {
    691067: function (e, t, n) {
      n.d(t, {
        u: function () {
          return f;
        },
      });
      var r = n(824246),
        o = n(983341),
        l = n(754202),
        a = n(827378),
        i = n(720227),
        u = n(776845),
        s = n(713222);
      const c = "scale-theme",
        d = !1,
        f = ({
          open: e,
          onClose: t,
          children: n,
          actions: f,
          className: p,
          innerClassName: m,
          innerPanelClassName: v,
          PanelComponent: g = "div",
          title: h,
          theme: w = c,
          hideTitle: E,
          isStrictClose: y = d,
        }) => {
          const b = (0, a.useCallback)(() => {
            if (!y && t) return t();
          }, [y, t]);
          return (0, r.jsx)(o.u, {
            appear: !0,
            show: e,
            as: a.Fragment,
            children: (0, r.jsxs)(l.V, {
              as: "div",
              onClose: b,
              className: (0, i.m)("scaleui relative z-modal", w, p),
              children: [
                (0, r.jsx)(o.u.Child, {
                  as: a.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-50",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-50",
                  leaveTo: "opacity-0",
                  children: (0, r.jsx)("div", {
                    className: (0, i.m)(
                      "fixed inset-0",
                      "federal-theme" === w
                        ? "bg-neutral-50"
                        : "bg-neutral-1000"
                    ),
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "fixed inset-0 flex items-center justify-center p-4",
                  children: (0, r.jsx)(o.u.Child, {
                    as: a.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, r.jsxs)(l.V.Panel, {
                      as: g,
                      className: (0, i.m)(
                        "min-w-[400px] max-w-full max-h-full text-left align-middle transition-all transform rounded-lg shadow-xl bg-neutral-0 flex flex-col flex-nowrap overflow-hidden",
                        m
                      ),
                      children: [
                        !E &&
                          (0, r.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full px-4 py-2 border-b border-neutral-200 shrink-0 gap-2",
                            children: [
                              h
                                ? (0, r.jsx)(l.V.Title, {
                                    as: a.Fragment,
                                    children: (0, r.jsx)(u.ZT.Subtitle2, {
                                      children: h,
                                    }),
                                  })
                                : null,
                              t &&
                                (0, r.jsx)(s.J, {
                                  rounded: !0,
                                  icon: "times",
                                  onClick: t,
                                  className: "ml-auto",
                                }),
                            ],
                          }),
                        (0, r.jsx)("div", {
                          className: (0, i.m)(
                            "p-4 text-neutral-700 bg-neutral-0 overflow-y-auto flex-grow",
                            v
                          ),
                          children: n,
                        }),
                        f
                          ? (0, r.jsx)("div", {
                              className:
                                "px-4 py-2 border-t border-neutral-200 shrink-0",
                              children: f,
                            })
                          : null,
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        };
    },
    483093: function (e, t) {
      var n;
      (t.H = void 0),
        (t.H = n),
        (function (e) {
          (e.ARRIVED_AT_PII_COLLECTION = "arrived_at_pii_collection"),
            (e.COMPLETED_PII_COLLECTION = "completed_pii_collection"),
            (e.ARRIVED_IDENTITY_VERIFICATION = "arrived_identity_verification");
        })(n || (t.H = n = {}));
    },
    327940: function (e, t, n) {
      n.d(t, {
        d: function () {
          return p;
        },
        f: function () {
          return d;
        },
      });
      var r = n(827378),
        o = n(822652),
        l = n(436616),
        a = n(285804),
        i = n(492296),
        u = n(711981);
      let s = (0, r.createContext)(null);
      function c() {
        let e = (0, r.useContext)(s);
        if (null === e) {
          let e = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, c), e);
        }
        return e;
      }
      function d() {
        let [e, t] = (0, r.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, r.useMemo)(
            () =>
              function (e) {
                let n = (0, u.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            r = n.indexOf(e);
                          return -1 !== r && n.splice(r, 1), n;
                        })
                    )
                  ),
                  o = (0, r.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return r.createElement(s.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let f = (0, l.yV)(function (e, t) {
          let n = (0, o.M)(),
            { id: r = `headlessui-description-${n}`, ...u } = e,
            s = c(),
            d = (0, i.T)(t);
          (0, a.e)(() => s.register(r), [r, s.register]);
          let f = { ref: d, ...s.props, id: r };
          return (0,
          l.sY)({ ourProps: f, theirProps: u, slot: s.slot || {}, defaultTag: "p", name: s.name || "Description" });
        }),
        p = Object.assign(f, {});
    },
    754202: function (e, t, n) {
      n.d(t, {
        V: function () {
          return pe;
        },
      });
      var r = n(827378),
        o = n.t(r, 2),
        l = n(257953),
        a = n(436616),
        i = n(492296),
        u = n(507723),
        s = n(54518),
        c = n(822652),
        d = n(401074),
        f = n(914784),
        p = n(904818),
        m = n(711981),
        v = n(11119),
        g = n(266412),
        h = n(237957),
        w = n(26822),
        E = n(996661),
        y = n(716620),
        b = n(984625);
      var T = ((e) => (
        (e[(e.None = 1)] = "None"),
        (e[(e.InitialFocus = 2)] = "InitialFocus"),
        (e[(e.TabLock = 4)] = "TabLock"),
        (e[(e.FocusLock = 8)] = "FocusLock"),
        (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
        (e[(e.All = 30)] = "All"),
        e
      ))(T || {});
      let C = (0, a.yV)(function (e, t) {
          let n = (0, r.useRef)(null),
            o = (0, i.T)(n, t),
            { initialFocus: u, containers: s, features: c = 30, ...T } = e;
          (0, d.H)() || (c = 1);
          let C = (0, h.i)(n);
          !(function ({ ownerDocument: e }, t) {
            let n = (0, r.useRef)(null);
            (0, w.O)(
              null == e ? void 0 : e.defaultView,
              "focusout",
              (e) => {
                t && (n.current || (n.current = e.target));
              },
              !0
            ),
              (0, y.q)(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, p.C5)(n.current),
                  (n.current = null));
              }, [t]);
            let o = (0, r.useRef)(!1);
            (0, r.useEffect)(
              () => (
                (o.current = !1),
                () => {
                  (o.current = !0),
                    (0, E.Y)(() => {
                      o.current && ((0, p.C5)(n.current), (n.current = null));
                    });
                }
              ),
              []
            );
          })({ ownerDocument: C }, Boolean(16 & c));
          let O = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            o
          ) {
            let l = (0, r.useRef)(null),
              a = (0, g.t)();
            return (
              (0, y.q)(() => {
                if (!o) return;
                let r = t.current;
                r &&
                  (0, E.Y)(() => {
                    if (!a.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t)
                        return void (l.current = t);
                    } else if (r.contains(t)) return void (l.current = t);
                    null != n && n.current
                      ? (0, p.C5)(n.current)
                      : (0, p.jA)(r, p.TO.First) === p.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (l.current = null == e ? void 0 : e.activeElement);
                  });
              }, [o]),
              l
            );
          })(
            { ownerDocument: C, container: n, initialFocus: u },
            Boolean(2 & c)
          );
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: r,
            },
            o
          ) {
            let l = (0, g.t)();
            (0, w.O)(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!o || !l.current) return;
                let a = new Set(null == n ? void 0 : n.current);
                a.add(t);
                let i = r.current;
                if (!i) return;
                let u = e.target;
                u && u instanceof HTMLElement
                  ? x(a, u)
                    ? ((r.current = u), (0, p.C5)(u))
                    : (e.preventDefault(), e.stopPropagation(), (0, p.C5)(i))
                  : (0, p.C5)(r.current);
              },
              !0
            );
          })(
            {
              ownerDocument: C,
              container: n,
              containers: s,
              previousActiveElement: O,
            },
            Boolean(8 & c)
          );
          let P = (0, v.l)(),
            R = (0, m.z)((e) => {
              let t = n.current;
              t &&
                (0, l.E)(P.current, {
                  [v.N.Forwards]: () => {
                    (0, p.jA)(t, p.TO.First, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                  [v.N.Backwards]: () => {
                    (0, p.jA)(t, p.TO.Last, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                });
            }),
            S = (0, b.G)(),
            D = (0, r.useRef)(!1),
            k = {
              ref: o,
              onKeyDown(e) {
                "Tab" == e.key &&
                  ((D.current = !0),
                  S.requestAnimationFrame(() => {
                    D.current = !1;
                  }));
              },
              onBlur(e) {
                let t = new Set(null == s ? void 0 : s.current);
                t.add(n);
                let r = e.relatedTarget;
                r instanceof HTMLElement &&
                  "true" !== r.dataset.headlessuiFocusGuard &&
                  (x(t, r) ||
                    (D.current
                      ? (0, p.jA)(
                          n.current,
                          (0, l.E)(P.current, {
                            [v.N.Forwards]: () => p.TO.Next,
                            [v.N.Backwards]: () => p.TO.Previous,
                          }) | p.TO.WrapAround,
                          { relativeTo: e.target }
                        )
                      : e.target instanceof HTMLElement &&
                        (0, p.C5)(e.target)));
              },
            };
          return r.createElement(
            r.Fragment,
            null,
            Boolean(4 & c) &&
              r.createElement(f._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: R,
                features: f.A.Focusable,
              }),
            (0, a.sY)({
              ourProps: k,
              theirProps: T,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            Boolean(4 & c) &&
              r.createElement(f._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: R,
                features: f.A.Focusable,
              })
          );
        }),
        O = Object.assign(C, { features: T });
      function x(e, t) {
        var n;
        for (let r of e)
          if (null != (n = r.current) && n.contains(t)) return !0;
        return !1;
      }
      var P = n(791084),
        R = n(949765),
        S = n(327940),
        D = n(901635),
        k = n(285804);
      let A = (0, r.createContext)(() => {});
      A.displayName = "StackContext";
      var L,
        F =
          (((L = F || {})[(L.Add = 0)] = "Add"),
          (L[(L.Remove = 1)] = "Remove"),
          L);
      function M({
        children: e,
        onUpdate: t,
        type: n,
        element: o,
        enabled: l,
      }) {
        let a = (0, r.useContext)(A),
          i = (0, m.z)((...e) => {
            null == t || t(...e), a(...e);
          });
        return (
          (0, k.e)(() => {
            let e = void 0 === l || !0 === l;
            return (
              e && i(0, n, o),
              () => {
                e && i(1, n, o);
              }
            );
          }, [i, n, o, l]),
          r.createElement(A.Provider, { value: i }, e)
        );
      }
      var N = n(116490);
      const _ =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        { useState: j, useEffect: I, useLayoutEffect: V, useDebugValue: Y } = o;
      function H(e) {
        const t = e.getSnapshot,
          n = e.value;
        try {
          const e = t();
          return !_(n, e);
        } catch {
          return !0;
        }
      }
      const B = !(
          "undefined" != typeof window &&
          "undefined" != typeof window.document &&
          "undefined" != typeof window.document.createElement
        )
          ? function (e, t, n) {
              return t();
            }
          : function (e, t, n) {
              const r = t(),
                [{ inst: o }, l] = j({ inst: { value: r, getSnapshot: t } });
              return (
                V(() => {
                  (o.value = r), (o.getSnapshot = t), H(o) && l({ inst: o });
                }, [e, r, t]),
                I(
                  () => (
                    H(o) && l({ inst: o }),
                    e(() => {
                      H(o) && l({ inst: o });
                    })
                  ),
                  [e]
                ),
                Y(r),
                r
              );
            },
        z = "useSyncExternalStore" in o ? o.useSyncExternalStore : B;
      var $ = n(271907);
      function q() {
        let e;
        return {
          before({ doc: t }) {
            var n;
            let r = t.documentElement;
            e =
              (null != (n = t.defaultView) ? n : window).innerWidth -
              r.clientWidth;
          },
          after({ doc: t, d: n }) {
            let r = t.documentElement,
              o = r.clientWidth - r.offsetWidth,
              l = e - o;
            n.style(r, "paddingRight", `${l}px`);
          },
        };
      }
      var W = n(371218);
      function U() {
        if (!(0, W.gn)()) return {};
        let e;
        return {
          before() {
            e = window.pageYOffset;
          },
          after({ doc: t, d: n, meta: r }) {
            function o(e) {
              return r.containers
                .flatMap((e) => e())
                .some((t) => t.contains(e));
            }
            n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
            let l = null;
            n.addEventListener(
              t,
              "click",
              (e) => {
                if (e.target instanceof HTMLElement)
                  try {
                    let n = e.target.closest("a");
                    if (!n) return;
                    let { hash: r } = new URL(n.href),
                      a = t.querySelector(r);
                    a && !o(a) && (l = a);
                  } catch {}
              },
              !0
            ),
              n.addEventListener(
                t,
                "touchmove",
                (e) => {
                  e.target instanceof HTMLElement &&
                    !o(e.target) &&
                    e.preventDefault();
                },
                { passive: !1 }
              ),
              n.add(() => {
                window.scrollTo(0, window.pageYOffset + e),
                  l &&
                    l.isConnected &&
                    (l.scrollIntoView({ block: "nearest" }), (l = null));
              });
          },
        };
      }
      function Z(e) {
        let t = {};
        for (let n of e) Object.assign(t, n(t));
        return t;
      }
      let G = (function (e, t) {
        let n = e(),
          r = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (r.add(e), () => r.delete(e)),
          dispatch(e, ...o) {
            let l = t[e].call(n, ...o);
            l && ((n = l), r.forEach((e) => e()));
          },
        };
      })(() => new Map(), {
        PUSH(e, t) {
          var n;
          let r =
            null != (n = this.get(e))
              ? n
              : { doc: e, count: 0, d: (0, $.k)(), meta: new Set() };
          return r.count++, r.meta.add(t), this.set(e, r), this;
        },
        POP(e, t) {
          let n = this.get(e);
          return n && (n.count--, n.meta.delete(t)), this;
        },
        SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
          let r = { doc: e, d: t, meta: Z(n) },
            o = [
              U(),
              q(),
              {
                before({ doc: e, d: t }) {
                  t.style(e.documentElement, "overflow", "hidden");
                },
              },
            ];
          o.forEach(({ before: e }) => (null == e ? void 0 : e(r))),
            o.forEach(({ after: e }) => (null == e ? void 0 : e(r)));
        },
        SCROLL_ALLOW({ d: e }) {
          e.dispose();
        },
        TEARDOWN({ doc: e }) {
          this.delete(e);
        },
      });
      function J(e, t, n) {
        let r = (function (e) {
            return z(e.subscribe, e.getSnapshot, e.getSnapshot);
          })(G),
          o = e ? r.get(e) : void 0,
          l = !!o && o.count > 0;
        return (
          (0, k.e)(() => {
            if (e && t)
              return G.dispatch("PUSH", e, n), () => G.dispatch("POP", e, n);
          }, [t, e]),
          l
        );
      }
      G.subscribe(() => {
        let e = G.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            r = 0 !== n.count;
          ((r && !e) || (!r && e)) &&
            G.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && G.dispatch("TEARDOWN", n);
        }
      });
      let K = new Map(),
        Q = new Map();
      function X(e, t = !0) {
        (0, k.e)(() => {
          var n;
          if (!t) return;
          let r = "function" == typeof e ? e() : e.current;
          if (!r) return;
          let o = null != (n = Q.get(r)) ? n : 0;
          return (
            Q.set(r, o + 1),
            0 !== o ||
              (K.set(r, {
                "aria-hidden": r.getAttribute("aria-hidden"),
                inert: r.inert,
              }),
              r.setAttribute("aria-hidden", "true"),
              (r.inert = !0)),
            function () {
              var e;
              if (!r) return;
              let t = null != (e = Q.get(r)) ? e : 1;
              if ((1 === t ? Q.delete(r) : Q.set(r, t - 1), 1 !== t)) return;
              let n = K.get(r);
              n &&
                (null === n["aria-hidden"]
                  ? r.removeAttribute("aria-hidden")
                  : r.setAttribute("aria-hidden", n["aria-hidden"]),
                (r.inert = n.inert),
                K.delete(r));
            }
          );
        }, [e, t]);
      }
      var ee,
        te =
          (((ee = te || {})[(ee.Open = 0)] = "Open"),
          (ee[(ee.Closed = 1)] = "Closed"),
          ee),
        ne = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(ne || {});
      let re = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        oe = (0, r.createContext)(null);
      function le(e) {
        let t = (0, r.useContext)(oe);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Dialog /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, le), t);
        }
        return t;
      }
      function ae(e, t) {
        return (0, l.E)(t.type, re, e, t);
      }
      oe.displayName = "DialogContext";
      let ie = a.AN.RenderStrategy | a.AN.Static;
      let ue = (0, a.yV)(function (e, t) {
          let n = (0, c.M)(),
            {
              id: o = `headlessui-dialog-${n}`,
              open: s,
              onClose: p,
              initialFocus: v,
              __demoMode: g = !1,
              ...E
            } = e,
            [y, b] = (0, r.useState)(0),
            T = (0, D.oJ)();
          void 0 === s && null !== T && (s = (T & D.ZM.Open) === D.ZM.Open);
          let C = (0, r.useRef)(new Set()),
            x = (0, r.useRef)(null),
            k = (0, i.T)(x, t),
            A = (0, r.useRef)(null),
            L = (0, h.i)(x),
            _ = e.hasOwnProperty("open") || null !== T,
            j = e.hasOwnProperty("onClose");
          if (!_ && !j)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!_)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!j)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if ("boolean" != typeof s)
            throw new Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s}`
            );
          if ("function" != typeof p)
            throw new Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${p}`
            );
          let I = s ? 0 : 1,
            [V, Y] = (0, r.useReducer)(ae, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, r.createRef)(),
            }),
            H = (0, m.z)(() => p(!1)),
            B = (0, m.z)((e) => Y({ type: 0, id: e })),
            z = !!(0, d.H)() && !g && 0 === I,
            $ = y > 1,
            q = null !== (0, r.useContext)(oe),
            W = $ ? "parent" : "leaf",
            U = null !== T && (T & D.ZM.Closing) === D.ZM.Closing,
            Z = !q && !U && z,
            G = (0, r.useCallback)(() => {
              var e, t;
              return null !=
                (t = Array.from(
                  null !=
                    (e = null == L ? void 0 : L.querySelectorAll("body > *"))
                    ? e
                    : []
                ).find(
                  (e) =>
                    "headlessui-portal-root" !== e.id &&
                    e.contains(A.current) &&
                    e instanceof HTMLElement
                ))
                ? t
                : null;
            }, [A]);
          X(G, Z);
          let K = !!$ || z,
            Q = (0, r.useCallback)(() => {
              var e, t;
              return null !=
                (t = Array.from(
                  null !=
                    (e =
                      null == L
                        ? void 0
                        : L.querySelectorAll("[data-headlessui-portal]"))
                    ? e
                    : []
                ).find(
                  (e) => e.contains(A.current) && e instanceof HTMLElement
                ))
                ? t
                : null;
            }, [A]);
          X(Q, K);
          let ee = (0, m.z)(() => {
              var e, t;
              return [
                ...Array.from(
                  null !=
                    (e =
                      null == L
                        ? void 0
                        : L.querySelectorAll(
                            "html > *, body > *, [data-headlessui-portal]"
                          ))
                    ? e
                    : []
                ).filter(
                  (e) =>
                    !(
                      e === document.body ||
                      e === document.head ||
                      !(e instanceof HTMLElement) ||
                      e.contains(A.current) ||
                      (V.panelRef.current && e.contains(V.panelRef.current))
                    )
                ),
                null != (t = V.panelRef.current) ? t : x.current,
              ];
            }),
            te = !(!z || $);
          (0, N.O)(() => ee(), H, te);
          let ne = !($ || 0 !== I);
          (0, w.O)(null == L ? void 0 : L.defaultView, "keydown", (e) => {
            ne &&
              (e.defaultPrevented ||
                (e.key === u.R.Escape &&
                  (e.preventDefault(), e.stopPropagation(), H())));
          }),
            (function (e, t, n = () => [document.body]) {
              J(e, t, (e) => {
                var t;
                return {
                  containers: [...(null != (t = e.containers) ? t : []), n],
                };
              });
            })(L, !(U || 0 !== I || q), ee),
            (0, r.useEffect)(() => {
              if (0 !== I || !x.current) return;
              let e = new ResizeObserver((e) => {
                for (let t of e) {
                  let e = t.target.getBoundingClientRect();
                  0 === e.x &&
                    0 === e.y &&
                    0 === e.width &&
                    0 === e.height &&
                    H();
                }
              });
              return e.observe(x.current), () => e.disconnect();
            }, [I, x, H]);
          let [re, le] = (0, S.f)(),
            ue = (0, r.useMemo)(
              () => [{ dialogState: I, close: H, setTitleId: B }, V],
              [I, V, H, B]
            ),
            se = (0, r.useMemo)(() => ({ open: 0 === I }), [I]),
            ce = {
              ref: k,
              id: o,
              role: "dialog",
              "aria-modal": 0 === I || void 0,
              "aria-labelledby": V.titleId,
              "aria-describedby": re,
            };
          return r.createElement(
            M,
            {
              type: "Dialog",
              enabled: 0 === I,
              element: x,
              onUpdate: (0, m.z)((e, t, n) => {
                "Dialog" === t &&
                  (0, l.E)(e, {
                    [F.Add]() {
                      C.current.add(n), b((e) => e + 1);
                    },
                    [F.Remove]() {
                      C.current.add(n), b((e) => e - 1);
                    },
                  });
              }),
            },
            r.createElement(
              R.O,
              { force: !0 },
              r.createElement(
                P.h,
                null,
                r.createElement(
                  oe.Provider,
                  { value: ue },
                  r.createElement(
                    P.h.Group,
                    { target: x },
                    r.createElement(
                      R.O,
                      { force: !1 },
                      r.createElement(
                        le,
                        { slot: se, name: "Dialog.Description" },
                        r.createElement(
                          O,
                          {
                            initialFocus: v,
                            containers: C,
                            features: z
                              ? (0, l.E)(W, {
                                  parent: O.features.RestoreFocus,
                                  leaf: O.features.All & ~O.features.FocusLock,
                                })
                              : O.features.None,
                          },
                          (0, a.sY)({
                            ourProps: ce,
                            theirProps: E,
                            slot: se,
                            defaultTag: "div",
                            features: ie,
                            visible: 0 === I,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            r.createElement(f._, { features: f.A.Hidden, ref: A })
          );
        }),
        se = (0, a.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: o = `headlessui-dialog-backdrop-${n}`, ...l } = e,
            [{ dialogState: u }, s] = le("Dialog.Backdrop"),
            d = (0, i.T)(t);
          (0, r.useEffect)(() => {
            if (null === s.panelRef.current)
              throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
              );
          }, [s.panelRef]);
          let f = (0, r.useMemo)(() => ({ open: 0 === u }), [u]);
          return r.createElement(
            R.O,
            { force: !0 },
            r.createElement(
              P.h,
              null,
              (0, a.sY)({
                ourProps: { ref: d, id: o, "aria-hidden": !0 },
                theirProps: l,
                slot: f,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          );
        }),
        ce = (0, a.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: o = `headlessui-dialog-panel-${n}`, ...l } = e,
            [{ dialogState: u }, s] = le("Dialog.Panel"),
            d = (0, i.T)(t, s.panelRef),
            f = (0, r.useMemo)(() => ({ open: 0 === u }), [u]),
            p = (0, m.z)((e) => {
              e.stopPropagation();
            });
          return (0,
          a.sY)({ ourProps: { ref: d, id: o, onClick: p }, theirProps: l, slot: f, defaultTag: "div", name: "Dialog.Panel" });
        }),
        de = (0, a.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: o = `headlessui-dialog-overlay-${n}`, ...l } = e,
            [{ dialogState: u, close: d }] = le("Dialog.Overlay"),
            f = (0, i.T)(t),
            p = (0, m.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, s.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), d();
              }
            }),
            v = (0, r.useMemo)(() => ({ open: 0 === u }), [u]);
          return (0,
          a.sY)({ ourProps: { ref: f, id: o, "aria-hidden": !0, onClick: p }, theirProps: l, slot: v, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        fe = (0, a.yV)(function (e, t) {
          let n = (0, c.M)(),
            { id: o = `headlessui-dialog-title-${n}`, ...l } = e,
            [{ dialogState: u, setTitleId: s }] = le("Dialog.Title"),
            d = (0, i.T)(t);
          (0, r.useEffect)(() => (s(o), () => s(null)), [o, s]);
          let f = (0, r.useMemo)(() => ({ open: 0 === u }), [u]);
          return (0,
          a.sY)({ ourProps: { ref: d, id: o }, theirProps: l, slot: f, defaultTag: "h2", name: "Dialog.Title" });
        }),
        pe = Object.assign(ue, {
          Backdrop: se,
          Panel: ce,
          Overlay: de,
          Title: fe,
          Description: S.d,
        });
    },
    26822: function (e, t, n) {
      n.d(t, {
        O: function () {
          return l;
        },
      });
      var r = n(827378),
        o = n(437349);
      function l(e, t, n, l) {
        let a = (0, o.E)(n);
        (0, r.useEffect)(() => {
          function n(e) {
            a.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, l),
            () => e.removeEventListener(t, n, l)
          );
        }, [e, t, l]);
      }
    },
    11119: function (e, t, n) {
      n.d(t, {
        N: function () {
          return a;
        },
        l: function () {
          return i;
        },
      });
      var r = n(827378),
        o = n(437349);
      var l,
        a =
          (((l = a || {})[(l.Forwards = 0)] = "Forwards"),
          (l[(l.Backwards = 1)] = "Backwards"),
          l);
      function i() {
        let e = (0, r.useRef)(0);
        return (
          (function (e, t, n) {
            let l = (0, o.E)(t);
            (0, r.useEffect)(() => {
              function t(e) {
                l.current(e);
              }
              return (
                window.addEventListener(e, t, n),
                () => window.removeEventListener(e, t, n)
              );
            }, [e, n]);
          })(
            "keydown",
            (t) => {
              "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0);
            },
            !0
          ),
          e
        );
      }
    },
    716620: function (e, t, n) {
      n.d(t, {
        q: function () {
          return l;
        },
      });
      var r = n(827378),
        o = n(711981);
      function l(e, t) {
        let n = (0, r.useRef)([]),
          l = (0, o.z)(e);
        (0, r.useEffect)(() => {
          let e = [...n.current];
          for (let [r, o] of t.entries())
            if (n.current[r] !== o) {
              let r = l(t, e);
              return (n.current = t), r;
            }
        }, [l, ...t]);
      }
    },
    371218: function (e, t, n) {
      function r() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function o() {
        return r() || /Android/gi.test(window.navigator.userAgent);
      }
      n.d(t, {
        gn: function () {
          return r;
        },
        tq: function () {
          return o;
        },
      });
    },
  },
]);
