(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [28769, 60390, 29872],
  {
    106525: function (e, t, n) {
      "use strict";
      var o = n(827378),
        r = n(536325),
        i = n(824246);
      t.Z = function (e) {
        const { children: t, defer: n = !1, fallback: a = null } = e,
          [s, l] = o.useState(!1);
        return (
          (0, r.Z)(() => {
            n || l(!0);
          }, [n]),
          o.useEffect(() => {
            n && l(!0);
          }, [n]),
          (0, i.jsx)(o.Fragment, { children: s ? t : a })
        );
      };
    },
    536325: function (e, t, n) {
      "use strict";
      var o = n(827378);
      const r = "undefined" !== typeof window ? o.useLayoutEffect : o.useEffect;
      t.Z = r;
    },
    751093: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return _;
        },
      });
      var o = n(814484),
        r = n(197308),
        i = n(827378),
        a = n(479789),
        s = n(312480),
        l = n(925608),
        c = n(922399),
        u = n(169761),
        d = n(561503),
        p = n(57739);
      function f(e) {
        return (0, p.Z)("MuiBackdrop", e);
      }
      (0, d.Z)("MuiBackdrop", ["root", "invisible"]);
      var m = n(824246);
      const y = [
          "children",
          "component",
          "components",
          "componentsProps",
          "className",
          "invisible",
          "open",
          "slotProps",
          "slots",
          "transitionDuration",
          "TransitionComponent",
        ],
        h = (0, l.ZP)("div", {
          name: "MuiBackdrop",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, n.invisible && t.invisible];
          },
        })(({ ownerState: e }) =>
          (0, r.Z)(
            {
              position: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              right: 0,
              bottom: 0,
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              WebkitTapHighlightColor: "transparent",
            },
            e.invisible && { backgroundColor: "transparent" }
          )
        );
      var _ = i.forwardRef(function (e, t) {
        var n, i, l;
        const d = (0, c.Z)({ props: e, name: "MuiBackdrop" }),
          {
            children: p,
            component: _ = "div",
            components: g = {},
            componentsProps: C = {},
            className: b,
            invisible: v = !1,
            open: k,
            slotProps: T = {},
            slots: E = {},
            transitionDuration: A,
            TransitionComponent: S = u.Z,
          } = d,
          O = (0, o.Z)(d, y),
          R = (0, r.Z)({}, d, { component: _, invisible: v }),
          w = ((e) => {
            const { classes: t, invisible: n } = e,
              o = { root: ["root", n && "invisible"] };
            return (0, s.Z)(o, f, t);
          })(R),
          P = null != (n = T.root) ? n : C.root;
        return (0,
        m.jsx)(S, (0, r.Z)({ in: k, timeout: A }, O, { children: (0, m.jsx)(h, (0, r.Z)({ "aria-hidden": !0 }, P, { as: null != (i = null != (l = E.root) ? l : g.Root) ? i : _, className: (0, a.Z)(w.root, b, null == P ? void 0 : P.className), ownerState: (0, r.Z)({}, R, null == P ? void 0 : P.ownerState), classes: w, ref: t, children: p })) }));
      });
    },
    638898: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var o = n(237491),
        r = n(341795),
        i = n(827378);
      function a(e) {
        var t,
          n,
          o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = a(e[t])) && (o && (o += " "), (o += n));
          else for (t in e) e[t] && (o && (o += " "), (o += t));
        return o;
      }
      var s = function () {
          for (var e, t, n = 0, o = ""; n < arguments.length; )
            (e = arguments[n++]) && (t = a(e)) && (o && (o += " "), (o += t));
          return o;
        },
        l = n(473656),
        c = n(711652),
        u = n(893772),
        d = n(96206),
        p = n(824246);
      const f = ["className", "component"];
      var m = n(152501);
      const y = (function (e = {}) {
        const {
            defaultTheme: t,
            defaultClassName: n = "MuiBox-root",
            generateClassName: a,
          } = e,
          m = (0, l.ZP)("div", {
            shouldForwardProp: (e) => "theme" !== e && "sx" !== e && "as" !== e,
          })(c.Z);
        return i.forwardRef(function (e, i) {
          const l = (0, d.Z)(t),
            c = (0, u.Z)(e),
            { className: y, component: h = "div" } = c,
            _ = (0, r.Z)(c, f);
          return (0,
          p.jsx)(m, (0, o.Z)({ as: h, ref: i, className: s(y, a ? a(n) : n), theme: l }, _));
        });
      })({
        defaultTheme: (0, n(896652).Z)(),
        defaultClassName: "MuiBox-root",
        generateClassName: m.Z.generate,
      });
      var h = y;
    },
    169761: function (e, t, n) {
      "use strict";
      var o = n(197308),
        r = n(814484),
        i = n(827378),
        a = n(408829),
        s = n(494776),
        l = n(942777),
        c = n(996958),
        u = n(824246);
      const d = [
          "addEndListener",
          "appear",
          "children",
          "easing",
          "in",
          "onEnter",
          "onEntered",
          "onEntering",
          "onExit",
          "onExited",
          "onExiting",
          "style",
          "timeout",
          "TransitionComponent",
        ],
        p = { entering: { opacity: 1 }, entered: { opacity: 1 } },
        f = i.forwardRef(function (e, t) {
          const n = (0, s.Z)(),
            f = {
              enter: n.transitions.duration.enteringScreen,
              exit: n.transitions.duration.leavingScreen,
            },
            {
              addEndListener: m,
              appear: y = !0,
              children: h,
              easing: _,
              in: g,
              onEnter: C,
              onEntered: b,
              onEntering: v,
              onExit: k,
              onExited: T,
              onExiting: E,
              style: A,
              timeout: S = f,
              TransitionComponent: O = a.ZP,
            } = e,
            R = (0, r.Z)(e, d),
            w = i.useRef(null),
            P = (0, c.Z)(w, h.ref, t),
            I = (e) => (t) => {
              if (e) {
                const n = w.current;
                void 0 === t ? e(n) : e(n, t);
              }
            },
            j = I(v),
            N = I((e, t) => {
              (0, l.n)(e);
              const o = (0, l.C)(
                { style: A, timeout: S, easing: _ },
                { mode: "enter" }
              );
              (e.style.webkitTransition = n.transitions.create("opacity", o)),
                (e.style.transition = n.transitions.create("opacity", o)),
                C && C(e, t);
            }),
            x = I(b),
            L = I(E),
            D = I((e) => {
              const t = (0, l.C)(
                { style: A, timeout: S, easing: _ },
                { mode: "exit" }
              );
              (e.style.webkitTransition = n.transitions.create("opacity", t)),
                (e.style.transition = n.transitions.create("opacity", t)),
                k && k(e);
            }),
            M = I(T);
          return (0, u.jsx)(
            O,
            (0, o.Z)(
              {
                appear: y,
                in: g,
                nodeRef: w,
                onEnter: N,
                onEntered: x,
                onEntering: j,
                onExit: D,
                onExited: M,
                onExiting: L,
                addEndListener: (e) => {
                  m && m(w.current, e);
                },
                timeout: S,
              },
              R,
              {
                children: (e, t) =>
                  i.cloneElement(
                    h,
                    (0, o.Z)(
                      {
                        style: (0, o.Z)(
                          {
                            opacity: 0,
                            visibility: "exited" !== e || g ? void 0 : "hidden",
                          },
                          p[e],
                          A,
                          h.props.style
                        ),
                        ref: P,
                      },
                      t
                    )
                  ),
              }
            )
          );
        });
      t.Z = f;
    },
    408829: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return h;
        },
      });
      var o = n(646931),
        r = n(691239),
        i = n(827378),
        a = n(331542),
        s = !1,
        l = n(811112),
        c = "unmounted",
        u = "exited",
        d = "entering",
        p = "entered",
        f = "exiting",
        m = (function (e) {
          function t(t, n) {
            var o;
            o = e.call(this, t, n) || this;
            var r,
              i = n && !n.isMounting ? t.enter : t.appear;
            return (
              (o.appearStatus = null),
              t.in
                ? i
                  ? ((r = u), (o.appearStatus = d))
                  : (r = p)
                : (r = t.unmountOnExit || t.mountOnEnter ? c : u),
              (o.state = { status: r }),
              (o.nextCallback = null),
              o
            );
          }
          (0, r.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === c ? { status: u } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== d && n !== p && (t = d)
                  : (n !== d && n !== p) || (t = f);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                o = this.props.timeout;
              return (
                (e = t = n = o),
                null != o &&
                  "number" !== typeof o &&
                  ((e = o.exit),
                  (t = o.enter),
                  (n = void 0 !== o.appear ? o.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === d)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : a.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === u &&
                  this.setState({ status: c });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                o = this.context ? this.context.isMounting : e,
                r = this.props.nodeRef ? [o] : [a.findDOMNode(this), o],
                i = r[0],
                l = r[1],
                c = this.getTimeouts(),
                u = o ? c.appear : c.enter;
              (!e && !n) || s
                ? this.safeSetState({ status: p }, function () {
                    t.props.onEntered(i);
                  })
                : (this.props.onEnter(i, l),
                  this.safeSetState({ status: d }, function () {
                    t.props.onEntering(i, l),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: p }, function () {
                          t.props.onEntered(i, l);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                o = this.props.nodeRef ? void 0 : a.findDOMNode(this);
              t && !s
                ? (this.props.onExit(o),
                  this.safeSetState({ status: f }, function () {
                    e.props.onExiting(o),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: u }, function () {
                          e.props.onExited(o);
                        });
                      });
                  }))
                : this.safeSetState({ status: u }, function () {
                    e.props.onExited(o);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (o) {
                  n && ((n = !1), (t.nextCallback = null), e(o));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : a.findDOMNode(this),
                o = null == e && !this.props.addEndListener;
              if (n && !o) {
                if (this.props.addEndListener) {
                  var r = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    i = r[0],
                    s = r[1];
                  this.props.addEndListener(i, s);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === c) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, o.Z)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return i.createElement(
                l.Z.Provider,
                { value: null },
                "function" === typeof n
                  ? n(e, r)
                  : i.cloneElement(i.Children.only(n), r)
              );
            }),
            t
          );
        })(i.Component);
      function y() {}
      (m.contextType = l.Z),
        (m.propTypes = {}),
        (m.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: y,
          onEntering: y,
          onEntered: y,
          onExit: y,
          onExiting: y,
          onExited: y,
        }),
        (m.UNMOUNTED = c),
        (m.EXITED = u),
        (m.ENTERING = d),
        (m.ENTERED = p),
        (m.EXITING = f);
      var h = m;
    },
    942777: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return o;
        },
        C: function () {
          return r;
        },
      });
      const o = (e) => e.scrollTop;
      function r(e, t) {
        var n, o;
        const { timeout: r, easing: i, style: a = {} } = e;
        return {
          duration:
            null != (n = a.transitionDuration)
              ? n
              : "number" === typeof r
              ? r
              : r[t.mode] || 0,
          easing:
            null != (o = a.transitionTimingFunction)
              ? o
              : "object" === typeof i
              ? i[t.mode]
              : i,
          delay: a.transitionDelay,
        };
      }
    },
    444832: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return p;
        },
      });
      var o = n(824246),
        r = n(60042),
        i = n.n(r),
        a = n(713222),
        s = n(416534);
      const l = "neutral",
        c = "neutral",
        u = "white",
        d = "white",
        p = ({
          title: e,
          subtitle: t,
          cta: n,
          onClose: r,
          className: p,
          variant: f = l,
          buttonVariant: m = c,
          background: y = u,
          backgroundVariant: h = d,
        }) =>
          (0, o.jsxs)("div", {
            className: i()(
              "flex items-center justify-between gap-3 w-full transition-colors rounded-lg scaleui text-neutral-900 h-fit overflow-hidden pr-4",
              {
                "bg-neutral-0": "white" === h || "white" === y,
                "bg-neutral-50": "neutral" === h || "neutral" === y,
              },
              p
            ),
            children: [
              (0, o.jsxs)("div", {
                className: "relative flex items-center h-full",
                children: [
                  (0, o.jsx)("div", {
                    className: i()("w-1 h-full rounded-l absolute", {
                      "bg-neutral-1000": "neutral" === f,
                      "bg-info-700": "info" === f,
                      "bg-success-500": "success" === f,
                      "bg-warning-500": "warning" === f,
                      "bg-danger-500": "danger" === f,
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className: "ml-3",
                    children: [
                      "neutral" === f &&
                        (0, o.jsx)(a.J, {
                          icon: "info-circle",
                          variant: "neutral",
                        }),
                      "info" === f &&
                        (0, o.jsx)(a.J, { icon: "megaphone", variant: "info" }),
                      "success" === f &&
                        (0, o.jsx)(a.J, {
                          icon: "check-circle",
                          variant: "success",
                        }),
                      "warning" === f &&
                        (0, o.jsx)(a.J, {
                          icon: "exclamation-circle",
                          variant: "warning",
                        }),
                      "danger" === f &&
                        (0, o.jsx)(a.J, {
                          icon: "exclamation-circle",
                          variant: "danger",
                        }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: "py-3 ml-3",
                    children: [
                      (0, o.jsx)("p", {
                        className: "text-sm font-medium",
                        children: e,
                      }),
                      t && "string" === typeof t
                        ? (0, o.jsx)("p", {
                            className: "text-xs font-normal",
                            children: t,
                          })
                        : (0, o.jsx)(o.Fragment, { children: t }),
                      n &&
                        (0, o.jsx)(s.zx, {
                          variant: m,
                          onClick: n.onClick,
                          className:
                            "md:hidden max-md:block truncate max-w-[200px] mt-2",
                          children: n.label,
                        }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: "flex items-center h-full space-x-2",
                children: [
                  n &&
                    (0, o.jsx)(s.zx, {
                      variant: m,
                      onClick: n.onClick,
                      className:
                        "max-md:hidden md:block truncate max-w-[200px]",
                      children: n.label,
                    }),
                  r &&
                    (0, o.jsx)("button", {
                      onClick: r,
                      className: "border-none",
                      children: (0, o.jsx)(a.J, { icon: "times" }),
                    }),
                ],
              }),
            ],
          });
    },
    691067: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return p;
        },
      });
      var o = n(824246),
        r = n(983341),
        i = n(754202),
        a = n(827378),
        s = n(720227),
        l = n(776845),
        c = n(713222);
      const u = "scale-theme",
        d = !1,
        p = ({
          open: e,
          onClose: t,
          children: n,
          actions: p,
          className: f,
          innerClassName: m,
          innerPanelClassName: y,
          PanelComponent: h = "div",
          title: _,
          theme: g = u,
          hideTitle: C,
          isStrictClose: b = d,
        }) => {
          const v = (0, a.useCallback)(() => {
            if (!b && t) return t();
          }, [b, t]);
          return (0, o.jsx)(r.u, {
            appear: !0,
            show: e,
            as: a.Fragment,
            children: (0, o.jsxs)(i.V, {
              as: "div",
              onClose: v,
              className: (0, s.m)("scaleui relative z-modal", g, f),
              children: [
                (0, o.jsx)(r.u.Child, {
                  as: a.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-50",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-50",
                  leaveTo: "opacity-0",
                  children: (0, o.jsx)("div", {
                    className: (0, s.m)(
                      "fixed inset-0",
                      "federal-theme" === g
                        ? "bg-neutral-50"
                        : "bg-neutral-1000"
                    ),
                  }),
                }),
                (0, o.jsx)("div", {
                  className:
                    "fixed inset-0 flex items-center justify-center p-4",
                  children: (0, o.jsx)(r.u.Child, {
                    as: a.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, o.jsxs)(i.V.Panel, {
                      as: h,
                      className: (0, s.m)(
                        "min-w-[400px] max-w-full max-h-full text-left align-middle transition-all transform rounded-lg shadow-xl bg-neutral-0 flex flex-col flex-nowrap overflow-hidden",
                        m
                      ),
                      children: [
                        !C &&
                          (0, o.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full px-4 py-2 border-b border-neutral-200 shrink-0 gap-2",
                            children: [
                              _
                                ? (0, o.jsx)(i.V.Title, {
                                    as: a.Fragment,
                                    children: (0, o.jsx)(l.ZT.Subtitle2, {
                                      children: _,
                                    }),
                                  })
                                : null,
                              t &&
                                (0, o.jsx)(c.J, {
                                  rounded: !0,
                                  icon: "times",
                                  onClick: t,
                                  className: "ml-auto",
                                }),
                            ],
                          }),
                        (0, o.jsx)("div", {
                          className: (0, s.m)(
                            "p-4 text-neutral-700 bg-neutral-0 overflow-y-auto flex-grow",
                            y
                          ),
                          children: n,
                        }),
                        p
                          ? (0, o.jsx)("div", {
                              className:
                                "px-4 py-2 border-t border-neutral-200 shrink-0",
                              children: p,
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
    952332: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var o = n(824246),
        r = n(720227),
        i = n(416534);
      const a = ({
        title: e,
        description: t,
        primaryCTA: n,
        secondaryCTA: a,
        className: s,
      }) =>
        (0, o.jsx)("div", {
          className: (0, r.m)("w-full scaleui", s),
          children: (0, o.jsxs)("div", {
            className: "flex justify-between w-full mb-4",
            children: [
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("h2", {
                    className: "text-xl font-semibold text-neutral-700",
                    children: e,
                  }),
                  (0, o.jsx)("div", {
                    className: "max-w-2xl mt-1 text-sm text-neutral-500",
                    children: t,
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: "space-x-4",
                children: [
                  a &&
                    (0, o.jsx)(i.zx, {
                      variant: "neutral",
                      size: a.size,
                      onClick: a.onClick,
                      children: a.label,
                    }),
                  n &&
                    (0, o.jsx)(i.zx, {
                      size: n.size,
                      onClick: n.onClick,
                      children: n.label,
                    }),
                ],
              }),
            ],
          }),
        });
    },
    49329: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var o = n(824246),
        r = n(720227),
        i = n(713222);
      const a = ({
        buttons: e,
        selected: t,
        onSelect: n,
        className: a,
        disabled: s,
        buttonClassName: l,
      }) =>
        (0, o.jsx)("span", {
          className: (0, r.m)(
            "inline-flex gap-1 border rounded-lg scaleui w-fit border-neutral-300 bg-neutral-0",
            a
          ),
          children: e.map((e) =>
            (0, o.jsxs)(
              "button",
              {
                disabled: s,
                onClick: () => n(e.id),
                className: (0, r.m)(
                  "inline-flex px-2.5 py-1.5 text-sm items-center rounded-lg font-medium transition-all justify-center text-neutral-700 focus:z-10 focus:ring-2 focus:ring-neutral-400 bg-neutral-0",
                  !!e.icon && e.label && "pr-4",
                  t === e.id
                    ? "ring-1 ring-neutral-500 bg-neutral-50 selected"
                    : s
                    ? ""
                    : "hover:bg-neutral-50",
                  s && "text-neutral-400 cursor-not-allowed ",
                  t === e.id &&
                    s &&
                    "bg-neutral-200 border-none ring-neutral-200 cursor-not-allowed ",
                  l
                ),
                children: [
                  e.icon &&
                    (0, o.jsx)(i.J, {
                      icon: e.icon,
                      size: "sm",
                      "aria-hidden": "true",
                    }),
                  e.label,
                ],
              },
              e.id
            )
          ),
        });
    },
    604658: function (e, t, n) {
      "use strict";
      t.FL = t.GN = t.$7 = t.Uq = t.iR = void 0;
      var o,
        r = (o = n(298784)) && o.__esModule ? o : { default: o };
      const i = (e) =>
        "object" !== typeof e || null === e
          ? e
          : e.leaf
          ? e.value
          : r.default.mapValues(e, i);
      t.iR = i;
      const a = ["if", "then", "else", "allOf", "oneOf", "anyOf"];
      t.Uq = a;
      const s = [...a, "properties"];
      t.$7 = s;
      const l = [...s, "items"];
      t.GN = l;
      const c = l.map((e) => e.toLowerCase());
      t.FL = c;
    },
    853085: function (e, t, n) {
      "use strict";
      t.cB = t.R2 = t.Ow = t.eE = void 0;
      var o,
        r = n(274374);
      const i = ((o = n(721006)) && o.__esModule ? o : { default: o }).default;
      t.eE = i;
      var a;
      (t.Ow = (e) =>
        e.map(({ name: e, pageTitle: t }) => ({
          name: t,
          type: r.SearchResultType.Tool,
          action: { type: r.SearchResultActionType.Link, path: "dct/" + e },
        }))),
        (t.R2 = a),
        (function (e) {
          (e.LayoutTest = "/layouttest"),
            (e.TasksAudit = "/tasks/audit"),
            (e.Demo = "/demo"),
            (e.GptDemo = "/gpt_demo"),
            (e.TxnDemo = "/txn_demo"),
            (e.GptDemoSearch = "/gpt_demo_search"),
            (e.Embedding = "/embedding"),
            (e.EditScenario = "/edit_scenario"),
            (e.CreateScenario = "/create_scenario"),
            (e.TextCollectionDemo = "/text_collection_demo"),
            (e.MlHilCategorizationDemo = "/ml_hil_categorization_demo"),
            (e.TrendDetectionDemo = "/trend_detection_demo"),
            (e.RobinMLDemo = "/robin_ml_demo"),
            (e.YetiMLDemo = "/yeti_ml_demo"),
            (e.MlTranscriptionDemo = "/ml_transcription_demo"),
            (e.TsModelPlayground = "/ts-model-playground"),
            (e.EntertainmentAI = "/entertainment-ai"),
            (e.LLM = "/llm"),
            (e.GenAIOpsHub = "/genai-ops-hub"),
            (e.GenAIImageDBDashboard = "/genai-imagedb-dashboard"),
            (e.ProjectResponseViewer = "/project_response_viewer"),
            (e.DisputeViewer = "/dispute/:taskId/id/:disputeId/viewer"),
            (e.AudioDemo = "/audio_demo"),
            (e.ProjectsFSSL = "/projects/fssl"),
            (e.CatalogMLDemo = "/catalog_ml_demo"),
            (e.ProjectsTCGWF = "/projects/tc_gwf"),
            (e.MayforceChatDemo = "/mayforce/chat-demo"),
            (e.MayforceExpertManagement = "/mayforce/expert-management"),
            (e.ExpertManagement = "/expert-management"),
            (e.GrowthCenter = "/growth-center"),
            (e.GrowthCenterResumeScreening = "/growth-center/resume-screening"),
            (e.GrowthCenterCommunication = "/growth-center/communication"),
            (e.ChatAdvancedAudit = "/chat/advanced-audit/:id"),
            (e.Screening = "/screening"),
            (e.NiceConfigs = "/nice_configs"),
            (e.NiceConfigsProject = "/nice_configs/project/:id"),
            (e.NiceConfigsTaskType = "/nice_configs/taskType/:taskType"),
            (e.NiceConfigsTaskCustomer = "/nice_configs/taskCustomer/:id"),
            (e.NiceConfigsTaskCustomerAndType =
              "/nice_configs/taskCustomerAndType/:id/:taskType"),
            (e.GlobalMapViewer = "/global_map_viewer"),
            (e.GlobalMapQuickEditor = "/global_map_quick_editor"),
            (e.Root = "/"),
            (e.Lookup = "/lookup/:id+"),
            (e.Scripts = "/scripts"),
            (e.Subtasks = "/subtasks/:id?"),
            (e.V3Tasks = "/v3tasks/:id?"),
            (e.V3Traits = "/v3traits"),
            (e.Tasks = "/tasks/:id?"),
            (e.Script = "/script/:id"),
            (e.DynamicCorp = "/dynamic_corp"),
            (e.DCT = "/dct/:name"),
            (e.Search = "/search"),
            (e.CompareAttempts = "/compare_attempts"),
            (e.EngTransformS3Url = "/eng/transform_s3_url"),
            (e.EngRandomConfigs = "/eng/random_configs/:name?"),
            (e.TaskActions = "/task_actions"),
            (e.PipelineStageActions = "/pipeline_stage_actions"),
            (e.UserActions = "/user_actions"),
            (e.BatchActions = "/batch_actions"),
            (e.ScalersNew = "/scalers/new"),
            (e.FraudDeprecated = "/fraud"),
            (e.Enforcement = "/enforcement"),
            (e.ScalersEmail = "/scalers/email"),
            (e.QuestersEmail = "/questers/email"),
            (e.ScalersAudit = "/scalers/:id/audit"),
            (e.ScalersNewProject = "/scalers/new_project"),
            (e.ScalersProject = "/scalers/project"),
            (e.ScalersAnnouncements = "/scalers/announcements"),
            (e.ScalersSlackChannels = "/scalers/slack_channels"),
            (e.ScalersLabelAssistant = "/scalers/label_assistant"),
            (e.ScalersHubstaffPortal = "/scalers/hubstaff_portal"),
            (e.ScalersQualifications = "/scalers/qualifications"),
            (e.ScalersTest = "/scalers/test"),
            (e.ScalersRecording = "/scalers/recording/:recordingId"),
            (e.ScalersRecordingBase = "/scalers/recording"),
            (e.TaskTypeManager = "/task_type_manager"),
            (e.Rapid = "/rapid"),
            (e.SLA = "/sla"),
            (e.SLASim = "/slasim"),
            (e.StatsBatch = "/stats/batch"),
            (e.StatsTaskerConfidenceStats = "/stats/tasker_confidence_stats"),
            (e.StatsReviewerConfidenceStats =
              "/stats/reviewer_confidence_stats"),
            (e.BPONeedsCorp = "/bpo/needs_corp"),
            (e.BPORecallTasks = "/bpo/recall_tasks"),
            (e.BPODemoteScalers = "/bpo/demote_scalers"),
            (e.BPOMassPermissioning = "/bpo/mass_permissioning"),
            (e.ProjectsMetrics = "/projects/metrics"),
            (e.ProjectsLabelHints = "/projects/label_hints"),
            (e.ProjectsBenchmarks = "/projects/benchmarks"),
            (e.ProjectsBulkTagBenchmarks = "/projects/bulk_tag_benchmarks"),
            (e.ProjectsImbeBulkTagBenchmarks =
              "/projects/imbe_bulk_tag_benchmarks"),
            (e.ProjectsBillingStructure = "/billing/billing_version_bulk_tool"),
            (e.AHTDampener = "/billing/aht_dampener"),
            (e.ProjectsCategorizationHints = "/projects/categorization_hints"),
            (e.ProjectsCategorizationThresholds =
              "/projects/categorization_thresholds"),
            (e.ProjectsBulkCreateBenchmarks =
              "/projects/bulk_create_benchmarks"),
            (e.ProjectsQuickLintersNew =
              "/projects/:projectId/quick_linters/new"),
            (e.ProjectsQuickLintersEdit =
              "/projects/:projectId/quick_linters/:quickLinterId/edit"),
            (e.BenchmarksCreateParameterized =
              "/benchmarks/create_parameterized"),
            (e.BenchmarksRecommend = "/benchmarks/recommend"),
            (e.BenchmarksParameterize = "/benchmarks/parameterize"),
            (e.Courses = "/courses"),
            (e.GenAICourses = "/courses/genai"),
            (e.CoursesWithId = "/courses/:courseId"),
            (e.ProjectRolesAuth = "/project_roles_auth"),
            (e.MyApprovals = "/my_approvals"),
            (e.BenchmarkAuditOperation = "/benchmark_audit_operation"),
            (e.BenchmarkAuditOperationNew = "/benchmark_audit_operation/new"),
            (e.StaffingExceptionRequests = "/staffing_exception_requests"),
            (e.StaffingAuthorizations = "/staffing_authorizations"),
            (e.RemedialCourses = "/remedial_courses"),
            (e.BacktestPay = "/backtest_pay"),
            (e.ConsentForms = "/consent_forms"),
            (e.AutoflagDashboard = "/autoflag_dashboard"),
            (e.Geocontext = "/geocontext"),
            (e.SpeedViewAudits = "/speed_view_audits"),
            (e.SpeedViewCustomerAudits = "/speed_view_customer_audits"),
            (e.CourseUtils = "/course_utils"),
            (e.Permissions = "/permissions"),
            (e.AddCorpUser = "/add_corp_user"),
            (e.AssignBenchmark = "/assign_benchmark"),
            (e.IncreasePriority = "/increase_priority"),
            (e.QueuePriority = "/queue_priority"),
            (e.UpdateInstructions = "/update_instructions"),
            (e.ScaleLabsNew = "/scale_labs/new"),
            (e.ScaleLabsMonitor = "/scale_labs/monitor"),
            (e.ScaleLabs = "/scale_labs"),
            (e.LidarLabs = "/lidar_labs"),
            (e.ExperimentResults = "/experiment_results/:experimentId"),
            (e.AutogenerateScenario = "/autogenerate_scenario"),
            (e.InstructionTaxonomies = "/instruction_taxonomies"),
            (e.Bonuses = "/bonuses"),
            (e.BenchmarkAudit = "/benchmark_audit"),
            (e.UploadFilesToS3 = "/upload_files_to_s3"),
            (e.V2UploadFilesToS3 = "/v2/upload_files_to_s3"),
            (e.UnexcludeWorkers = "/unexclude_workers"),
            (e.TuneResponseLinters = "/tune_response_linters/:corpjobid"),
            (e.TuneResponseLintersBase = "/tune_response_linters"),
            (e.Tune2DLinting = "/tune_2d_linting"),
            (e.CustomerDashboard = "/customer_dashboard"),
            (e.DragonfruitUtils = "/dragonfruit_utils"),
            (e.CherryCatalogUtils = "/cherry_catalog_utils"),
            (e.MelonAudioUtils = "/melon_audio_utils"),
            (e.ImbeUtils = "/imbe_utils"),
            (e.CherryInfUtils = "/cherry_inf_utils"),
            (e.BeeTTSUtils = "/bee_tts_utils"),
            (e.BeeRLHFUtils = "/bee_rlhf_utils"),
            (e.BulbaGenericProject = "/ops/bulba_generic_project"),
            (e.EsciUtils = "/esci_utils"),
            (e.FlamingoFairUtils = "/flamingo_fair_utils"),
            (e.RoadrunnerUtils = "/roadrunner_utils"),
            (e.BulbasaurUtils = "/bulbasaur_utils"),
            (e.OTSUtils = "/ots_utils"),
            (e.OTSUtilsV2 = "/ots_utils_v2"),
            (e.SensitiveContentUtils = "/sensitive_content_utils"),
            (e.TaskerLeaderboard = "/tasker-leaderboard"),
            (e.MiniLidarAssignment = "/mini_lidar_assignment"),
            (e.UnassignBotClaims = "/unassign_bot_claims"),
            (e.Undisable = "/undisable"),
            (e.Scenarios = "/scenarios"),
            (e.SmeAudit = "/sme_audit"),
            (e.SmeAuditBatch = "/sme_audit/:auditBatchId"),
            (e.SpeedAudit = "/speed_audit"),
            (e.SpeedAuditBatch = "/speed_audit/:auditBatchId"),
            (e.V2SpeedAudit = "/v2/speed_audit"),
            (e.V2SpeedAuditBatch = "/v2/speed_audit/:auditBatchId"),
            (e.GISJSONQuickEditor = "/gis_json_quick_editor"),
            (e.OpsUtils = "/ops_utils"),
            (e.SubtaskTaskIDConversion = "/ops_utils"),
            (e.EmailToTaskerIDConversion = "/ops_utils"),
            (e.ProxyFetch = "/proxy_fetch"),
            (e.QAHub = "/qa_hub"),
            (e.QualityLab = "/quality_lab"),
            (e.DolphinQA = "/dolphin_qa"),
            (e.Rewards = "/rewards"),
            (e.Tasks2D = "/2d_tasks"),
            (e.CatConsensusTweaker = "/cat_consensus_tweaker"),
            (e.ResponseLintersInfo = "/response_linters_info"),
            (e.Linting2D = "/2d_linting"),
            (e.LidarLinting = "/lidarlinting"),
            (e.LidarLiteLinting = "/lidarlitelinting"),
            (e.LinterConfigDocs = "/linter_config_docs"),
            (e.DisputeTaskIdDisputeId = "/dispute/:taskId/id/:disputeId"),
            (e.DisputeTask = "/dispute/:taskId"),
            (e.ScenarioDash = "/scenario_dash"),
            (e.SupplyLeverDash = "/supply_lever_dash"),
            (e.QIRSignal = "/qir_signal"),
            (e.SupplyProjectMetricDash = "/supply_project_metric_dash"),
            (e.EditCorpPermissionRoles = "/edit_corp_permission_roles"),
            (e.ContractsContractEditor = "/contracts/contract_editor"),
            (e.ContractsListContracts = "/contracts/list_contracts"),
            (e.SnowflakeStatus = "/snowflake_status"),
            (e.NERViewAuditErrors = "/ner/view_audit_errors"),
            (e.CustomersAudit = "/customers/:id/audit"),
            (e.DemosPipelineViewer = "/demos/pipeline_viewer"),
            (e.Explain = "/explain"),
            (e.TaskerJourney = "/tasker_journey"),
            (e.LidarTasks = "/lidartasks"),
            (e.LegoLidarTasks = "/legoLidarTasks"),
            (e.TeamTeamId = "/team/:teamId"),
            (e.TeamsId = "/teams/:id"),
            (e.Teams = "/teams"),
            (e.QM = "/qm"),
            (e.QMWorkflow = "/qm_workflow"),
            (e.DocMetrics = "/docmetrics"),
            (e.Jobs = "/jobs"),
            (e.ForgeWaitList = "/forge_wait_list"),
            (e.ForgeConfigs = "/forge_configs"),
            (e.MiniLidarCreateSubprojects = "/minilidar_create_subprojects"),
            (e.GuidedWorkflowsEdit = "/guided_workflows/edit"),
            (e.GuidedWorkflowsId = "/guided_workflows/:guidedWorkflowId"),
            (e.GuidedWorkflows = "/guided_workflows"),
            (e.QueueHealthReporting = "/queue_health_reporting"),
            (e.DailyPlanningProjectGroupId =
              "/daily_planning/:projectGroupId([0-9a-fA-F]{24})"),
            (e.DailyPlanning = "/daily_planning"),
            (e.ProjectGroups = "/project_groups"),
            (e.ProjectGroupProjectGroupId =
              "/project_group/:projectGroupId([0-9a-fA-F]{24})"),
            (e.ProjectGroup = "/project_group"),
            (e.ProjectCollections = "/project_collections"),
            (e.ProjectCollection =
              "/project_collection/:projectCollectionId([0-9a-fA-F]{24})"),
            (e.ProjectCollectionBase = "/project_collection"),
            (e.QATeamsTeamId = "/qateams/:teamId"),
            (e.PayoutJobs = "/payout_jobs"),
            (e.PDPQADashboard = "/pdp_qa_dashboard"),
            (e.GISTaskPipelineTool = "/gis_task_pipeline_tool"),
            (e.OntologyId = "/ontology/:id"),
            (e.LidarVizDash = "/lidar_viz_dash"),
            (e.ProductionMonitoring = "/production_monitoring"),
            (e.BulkActionBatches = "/bulk_action_batches"),
            (e.BulkProjectConfigs = "/bulk_project_configs"),
            (e.QARProjectId = "/QAR/:projectId?"),
            (e.QARSettings = "/QAR_settings"),
            (e.Hello = "/hello"),
            (e.GPTSQL = "/gptsql"),
            (e.ActivityTracker = "/activity_tracker"),
            (e.SignupFlowLinkId = "/signup-flow/:linkId?"),
            (e.ReviewWorkLog = "/review/work-log"),
            (e.ReviewProjectBilling = "/review/projects"),
            (e.ReviewActionId = "/review/:actionId?"),
            (e.ProgressBarDemo = "/progress_bar_demo"),
            (e.RuleEngine = "/rule_engine"),
            (e.PipelineSpecialActions = "/pipeline_special_actions"),
            (e.CopyLintersFromMultipleProjects =
              "/copy-linters-from-multiple-projects"),
            (e.SupportTicketProjectId = "/support_ticket/:projectId?"),
            (e.SupportTicketDetailTicketId =
              "/support_ticket_detail/:ticketId"),
            (e.CatalogTaxonomyTool = "/catalog_taxonomy_tool"),
            (e.OnboardingRequirementId =
              "/onboarding_requirement/:requirementId"),
            (e.OnboardingRequirementBase = "/onboarding_requirement/"),
            (e.OnboardingStageScreenId =
              "/onboarding_stage_screen/:stageScreenId"),
            (e.OnboardingStageScreenBase = "/onboarding_stage_screen/"),
            (e.OnboardingProjectStagesId =
              "/onboarding_project_stages/:projectStagesId"),
            (e.OnboardingProjectStages = "/onboarding_project_stages"),
            (e.LaunchEndpoints = "/launch/endpoints"),
            (e.BulbaBugEditor = "/bulba_bug_editor"),
            (e.BulbaBugs = "/bulba_bugs"),
            (e.BulbaQuestionTypeProjectMapping =
              "/bulba_question_type_project_mapping/:questionType"),
            (e.BulbaQuestionTypeProjectMappingBase =
              "/bulba_question_type_project_mapping"),
            (e.BulbaWorkerRecordUpload = "/bulba_worker_record_upload"),
            (e.AudienceNew = "/audience/new"),
            (e.AudienceAudienceId = "/audience/:audienceId"),
            (e.Audience = "/audience"),
            (e.NucleusProjectSync = "/nucleus_project_sync"),
            (e.MissionConfigNew = "/mission-config/new"),
            (e.MissionConfigConfigId = "/mission-config/:configId"),
            (e.MissionConfig = "/mission-config"),
            (e.PayStrataPermissions = "/pay-strata-permissions"),
            (e.CreateExperiment = "/experiments-platform/create_experiment"),
            (e.ViewExperiments = "/experiments-platform/view_experiments"),
            (e.MinimumWages = "/minimum-wages"),
            (e.PayTraits = "/pay-traits"),
            (e.PayTraitId = "/pay-trait/:payTraitId"),
            (e.ProjectPayTraits = "/project-pay-traits"),
            (e.WorkerPayStrata = "/worker-pay-strata"),
            (e.ProjectStrata = "/project-strata"),
            (e.PayBuckets = "/pay-buckets"),
            (e.PayBucketId = "/pay-bucket/:payBucketId"),
            (e.PayConfigs = "/pay-configs"),
            (e.LookupId = "/lookup/:id"),
            (e.TeamId = "/team/:id"),
            (e.SFURedoRecall = "/sfu_redo_recall"),
            (e.SFUTaskTracker = "/sfu_task_tracker/:id?"),
            (e.SFUSubstages = "/substages/:id"),
            (e.WorkerSkillManager = "/worker_skill_manager"),
            (e.WorkerTeamsManager = "/worker_teams_manager"),
            (e.ResumeScreening = "/resume_screening_jobs"),
            (e.ResumeCourseScreening = "/resume_screening_course_configs"),
            (e.ChatBulkAudit = "/chat_bulk_audit/:auditBatchId"),
            (e.ChatBulkAuditResults = "/chat_bulk_audit/:auditBatchId/results"),
            (e.SendEmailTemplate = "/send_email_template"),
            (e.Mist = "/mist"),
            (e.VoiceOfTheContributor = "/voice-of-the-contributor"),
            (e.MultistageTask = "/multistage/task/:id"),
            (e.MultistageProject = "/multistage/project/:id"),
            (e.MultistageStageInstance = "/multistage/stage-instance/:id"),
            (e.MAXREV = "/billing/maxrev"),
            (e.AcceptanceBilling = "/billing-hub/batch-acceptance"),
            (e.MagicBenchmarks = "/magic_benchmarks"),
            (e.RevenueGroupsDashboard = "/billing/revenue-groups"),
            (e.ProcessSuperVisionStepSplitter =
              "/process_supervision_step_splitter"),
            (e.StagedRollout = "/staged_rollout");
        })(a || (t.R2 = a = {}));
      const s = {
        [a.MissionConfigNew]: "Create A New Mission Config",
        [a.AudienceNew]: "Create A New Audience",
      };
      t.cB = s;
    },
    274374: function (e, t) {
      "use strict";
      var n, o, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.APISearchResultCategory =
          t.SearchResultActionType =
          t.SearchResultType =
            void 0),
        (t.SearchResultType = n),
        (function (e) {
          (e.Tool = "tool"),
            (e.CorpSearch = "corp_search"),
            (e.CorpLookup = "corp_lookup"),
            (e.Project = "project"),
            (e.Tasker = "tasker"),
            (e.Customer = "customer"),
            (e.Course = "course"),
            (e.Team = "team"),
            (e.CDSUrl = "cds_url"),
            (e.ProjectGroup = "project_group"),
            (e.Page = "page");
        })(n || (t.SearchResultType = n = {})),
        (t.SearchResultActionType = o),
        (function (e) {
          (e.CorpSearch = "corp_search"),
            (e.CorpLookup = "corp_lookup"),
            (e.Link = "link");
        })(o || (t.SearchResultActionType = o = {})),
        (t.APISearchResultCategory = r),
        (function (e) {
          (e.WorkerTeam = "Worker Team"),
            (e.Customer = "Customer"),
            (e.Tag = "Tag"),
            (e.PermissionGroup = "Permission Group"),
            (e.Course = "Course"),
            (e.Tasker = "Tasker"),
            (e.Expert = "Expert"),
            (e.Project = "Project"),
            (e.CDSUrl = "CDS URL"),
            (e.ProjectGroup = "Project Group");
        })(r || (t.APISearchResultCategory = r = {}));
    },
    18573: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeRecentPhoneVerificationCacheKey = function (e) {
          return `auth_recent_phone_verification:${e}`;
        }),
        (t.PERSONA_BYPASS_TAGS =
          t.BadTaskerType =
          t.LANGUAGES_COUNTRIES_QUALIFICATION =
          t.CODING_COUNTRIES_QUALIFICATION =
          t.SPECIALIST_COUNTRIES_QUALIFICATION =
          t.GENERALIST_COUNTRIES_QUALIFICATION =
          t.NOT_TRAVELING_QUALIFICATION =
          t.IDV_ID_USER_COUNTRY_MATCH_QUALIFICATION =
          t.IDV_DATABASE_CHECK_IF_APPLICABLE_QUALIFICATION =
          t.IDV_NO_ELECTRONIC_REPLICA_QUALIFICATION =
          t.ATTEMPTED_TO_CREATE_DUP_GROUP =
          t.PersonaVerificationCheck =
          t.schoolEmailRegex =
          t.NON_ENGLISH_RESUME_WT =
          t.RECENT_PHONE_VERIFICATION_CACHE_TTL_SECS =
          t.RECENT_PHONE_VERIFICATION_CACHE_KEY_PREFIX =
          t.ACCOUNT_DELETE_2FA_REQUIRED_MINUTES =
          t.MAX_TRAVEL_DAYS_PER_YEAR =
          t.TNSIgnoreTags =
          t.TNS_SEON_SCORE_IGNORE_TAG_ID =
          t.TNS_VPN_ALLOWED_TAG_ID =
          t.ALL_ALLOWED_COUNTRIES =
          t.COUNTRIES_BY_GROUP =
          t.GROUP_3_COUNTRY_CODES =
          t.GROUP_2_COUNTRY_CODES =
          t.GROUP_1_COUNTRY_CODES =
          t.GROUP_3_NAME =
          t.GROUP_2_NAME =
          t.GROUP_1_NAME =
          t.FLAG_RESTRICT_SIGNUP_FLOW_COUNTRIES =
          t.FLAG_RESTRICT_GROUP_3_COUNTRY_SIGNUP =
          t.FLAG_RESTRICT_GROUP_2_COUNTRY_SIGNUP =
            void 0);
      var o = n(167469);
      t.FLAG_RESTRICT_GROUP_2_COUNTRY_SIGNUP =
        "restrict-group-2-country-signup";
      t.FLAG_RESTRICT_GROUP_3_COUNTRY_SIGNUP =
        "restrict-group-3-country-signup";
      t.FLAG_RESTRICT_SIGNUP_FLOW_COUNTRIES = "restrict-signup-flow-countries";
      const r = "Group 1 (low risk)";
      t.GROUP_1_NAME = r;
      const i = "Group 2 (medium risk)";
      t.GROUP_2_NAME = i;
      const a = "Group 3 (high risk)";
      t.GROUP_3_NAME = a;
      const s = [
        o.CountryCode.US,
        o.CountryCode.CA,
        o.CountryCode.PR,
        o.CountryCode.MX,
        o.CountryCode.GB,
        o.CountryCode.AU,
        o.CountryCode.NZ,
        o.CountryCode.AR,
      ];
      t.GROUP_1_COUNTRY_CODES = s;
      const l = [
        o.CountryCode.PH,
        o.CountryCode.PE,
        o.CountryCode.CO,
        o.CountryCode.BR,
      ];
      t.GROUP_2_COUNTRY_CODES = l;
      const c = [
        o.CountryCode.IN,
        o.CountryCode.DZ,
        o.CountryCode.CM,
        o.CountryCode.EG,
        o.CountryCode.MG,
        o.CountryCode.MW,
        o.CountryCode.MA,
        o.CountryCode.ZA,
        o.CountryCode.TZ,
        o.CountryCode.BH,
        o.CountryCode.BD,
        o.CountryCode.KH,
        o.CountryCode.ID,
        o.CountryCode.IL,
        o.CountryCode.JP,
        o.CountryCode.JO,
        o.CountryCode.MY,
        o.CountryCode.MV,
        o.CountryCode.QA,
        o.CountryCode.SA,
        o.CountryCode.SG,
        o.CountryCode.KR,
        o.CountryCode.TW,
        o.CountryCode.TH,
        o.CountryCode.TR,
        o.CountryCode.AE,
        o.CountryCode.VN,
        o.CountryCode.AL,
        o.CountryCode.AD,
        o.CountryCode.AT,
        o.CountryCode.BE,
        o.CountryCode.BA,
        o.CountryCode.BG,
        o.CountryCode.IC,
        o.CountryCode.HR,
        o.CountryCode.CY,
        o.CountryCode.CZ,
        o.CountryCode.DK,
        o.CountryCode.EE,
        o.CountryCode.FO,
        o.CountryCode.FI,
        o.CountryCode.AX,
        o.CountryCode.FR,
        o.CountryCode.DE,
        o.CountryCode.GI,
        o.CountryCode.GR,
        o.CountryCode.GG,
        o.CountryCode.JE,
        o.CountryCode.HU,
        o.CountryCode.IS,
        o.CountryCode.IE,
        o.CountryCode.IM,
        o.CountryCode.IT,
        o.CountryCode.XK,
        o.CountryCode.LV,
        o.CountryCode.LI,
        o.CountryCode.LT,
        o.CountryCode.LU,
        o.CountryCode.MT,
        o.CountryCode.MC,
        o.CountryCode.ME,
        o.CountryCode.NL,
        o.CountryCode.NO,
        o.CountryCode.PL,
        o.CountryCode.PT,
        o.CountryCode.MK,
        o.CountryCode.RO,
        o.CountryCode.SM,
        o.CountryCode.RS,
        o.CountryCode.SK,
        o.CountryCode.SI,
        o.CountryCode.ES,
        o.CountryCode.SE,
        o.CountryCode.CH,
        o.CountryCode.VA,
        o.CountryCode.BS,
        o.CountryCode.BB,
        o.CountryCode.BZ,
        o.CountryCode.BM,
        o.CountryCode.KY,
        o.CountryCode.CR,
        o.CountryCode.DO,
        o.CountryCode.SV,
        o.CountryCode.GL,
        o.CountryCode.GT,
        o.CountryCode.HT,
        o.CountryCode.HN,
        o.CountryCode.JM,
        o.CountryCode.MS,
        o.CountryCode.NI,
        o.CountryCode.PA,
        o.CountryCode.KN,
        o.CountryCode.LC,
        o.CountryCode.TT,
        o.CountryCode.VG,
        o.CountryCode.VI,
        o.CountryCode.AS,
        o.CountryCode.BO,
        o.CountryCode.CL,
        o.CountryCode.EC,
        o.CountryCode.GF,
        o.CountryCode.GY,
        o.CountryCode.PY,
        o.CountryCode.SR,
        o.CountryCode.UY,
        o.CountryCode.VE,
      ];
      t.GROUP_3_COUNTRY_CODES = c;
      const u = { [r]: s, [i]: l, [a]: c };
      t.COUNTRIES_BY_GROUP = u;
      const d = [...s, ...l, ...c];
      t.ALL_ALLOWED_COUNTRIES = d;
      t.TNS_VPN_ALLOWED_TAG_ID = "65ca676da317aacc833c1c83";
      var p;
      (t.TNS_SEON_SCORE_IGNORE_TAG_ID = "6619825cba17570719d4ca01"),
        (t.TNSIgnoreTags = p),
        (function (e) {
          (e.seon_score = "6619825cba17570719d4ca01"),
            (e.mismatch_pii = "6618b371cbac322cfa7f1781"),
            (e.name_mismatch_id = "65b31c850ab66a9aff0e7fe1"),
            (e.name_mismatch_greenhouse = "6618b3679cad6085cd5f9047"),
            (e.name_mismatch_linkedin = "6618b36175284e400d3ce10a"),
            (e.name_mismatch_willo = "663bf29bdf634016986009af"),
            (e.shared_airtm = "65b806708013d1a172d9d838"),
            (e.reverification_wo_id = "663d1af0eb0fb6c8e330cb77"),
            (e.fraud_ml = "664d1101ea287d3517111cb1"),
            (e.name_mismatch_average = "6618f75db58a2e291e5fae32");
        })(p || (t.TNSIgnoreTags = p = {}));
      t.MAX_TRAVEL_DAYS_PER_YEAR = 180;
      t.ACCOUNT_DELETE_2FA_REQUIRED_MINUTES = 15;
      const f = "auth_recent_phone_verification";
      t.RECENT_PHONE_VERIFICATION_CACHE_KEY_PREFIX = f;
      t.RECENT_PHONE_VERIFICATION_CACHE_TTL_SECS = 900;
      t.NON_ENGLISH_RESUME_WT = "670968674c5440b099c1a336";
      var m;
      (t.schoolEmailRegex =
        /^.+@(.+?\.)?(edu|helsinki\.fi|ac\.uk|ac\.in|utoronto\.ca|ki\.se|edu\.eg|yorku\.ca|edu\.co)$/i),
        (t.PersonaVerificationCheck = m),
        (function (e) {
          (e.IdAamvaDatabaseLookup = "id_aamva_database_lookup"),
            (e.IdAccountComparison = "id_account_comparison"),
            (e.IdAgeComparison = "id_age_comparison"),
            (e.IdAgeInconsistencyDetection = "id_age_inconsistency_detection"),
            (e.IdAttributeComparison = "id_attribute_comparison"),
            (e.IdBarcodeDetection = "id_barcode_detection"),
            (e.IdBarcodeInconsistencyDetection =
              "id_barcode_inconsistency_detection"),
            (e.IdBlurDetection = "id_blur_detection"),
            (e.IdColorInconsistencyDetection =
              "id_color_inconsistency_detection"),
            (e.IdCompromisedDetection = "id_compromised_detection"),
            (e.IdDisallowedCountryDetection =
              "id_disallowed_country_detection"),
            (e.IdDisallowedTypeDetection = "id_disallowed_type_detection"),
            (e.IdDoubleSideDetection = "id_double_side_detection"),
            (e.IdElectronicReplicaDetection =
              "id_electronic_replica_detection"),
            (e.IdEntityDetection = "id_entity_detection"),
            (e.IdExpiredDetection = "id_expired_detection"),
            (e.IdExtractionInconsistencyDetection =
              "id_extraction_inconsistency_detection"),
            (e.IdExtractedPropertiesDetection =
              "id_extracted_properties_detection"),
            (e.IdFabricationDetection = "id_fabrication_detection"),
            (e.IdGlareDetection = "id_glare_detection"),
            (e.IdHandwritingDetection = "id_handwriting_detection"),
            (e.IdInconsistentRepeatDetection =
              "id_inconsistent_repeat_detection"),
            (e.IdInquiryComparison = "id_inquiry_comparison"),
            (e.IdMrzDetection = "id_mrz_detection"),
            (e.IdMrzInconsistencyDetection = "id_mrz_inconsistency_detection"),
            (e.IdNumberFormatInconsistencyDetection =
              "id_number_format_inconsistency_detection"),
            (e.IdPaperDetection = "id_paper_detection"),
            (e.IdPoBoxDetection = "id_po_box_detection"),
            (e.IdPortraitClarityDetection = "id_portrait_clarity_detection"),
            (e.IdPortraitDetection = "id_portrait_detection"),
            (e.IdPublicFigureDetection = "id_public_figure_detection"),
            (e.IdRealIdDetection = "id_real_id_detection"),
            (e.IdRepeatDetection = "id_repeat_detection"),
            (e.IdSelfieComparison = "id_selfie_comparison"),
            (e.IdTamperDetection = "id_tamper_detection"),
            (e.IdUnprocessableSubmissionDetection =
              "id_unprocessable_submission_detection"),
            (e.IdValidDatesDetection = "id_valid_dates_detection"),
            (e.IdVideoQualityDetection = "id_video_quality_detection"),
            (e.IdExperimentalModelDetection =
              "id_experimental_model_detection"),
            (e.IdCornerDetection = "id_corner_detection"),
            (e.SelfiePoseDetection = "selfie_pose_detection"),
            (e.SelfieLivenessDetection = "selfie_liveness_detection");
        })(m || (t.PersonaVerificationCheck = m = {}));
      t.ATTEMPTED_TO_CREATE_DUP_GROUP = "attempted_dup_group_creation";
      t.IDV_NO_ELECTRONIC_REPLICA_QUALIFICATION = "673cebbd6edddec5406b741e";
      t.IDV_DATABASE_CHECK_IF_APPLICABLE_QUALIFICATION =
        "673cebbd6edddec5406b7421";
      t.IDV_ID_USER_COUNTRY_MATCH_QUALIFICATION = "673cebbd6edddec5406b7424";
      t.NOT_TRAVELING_QUALIFICATION = "673cebbd6edddec5406b7427";
      t.GENERALIST_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b0";
      t.SPECIALIST_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b3";
      t.CODING_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b6";
      var y;
      (t.LANGUAGES_COUNTRIES_QUALIFICATION = "673cf2f1095a2188d2ad63b9"),
        (t.BadTaskerType = y),
        (function (e) {
          (e.Fraud = "is_fraud"),
            (e.Cheater = "is_cheater"),
            (e.SystemAbuser = "is_system_abuser"),
            (e.LowQuality = "is_low_quality");
        })(y || (t.BadTaskerType = y = {}));
      t.PERSONA_BYPASS_TAGS = [
        "675b2af5a269179de62012b0",
        "675b2afa7c45d32b8c9849f4",
        "675b2affb68261bf0678dac2",
        "67478d787a9bff9d69f1938f",
        "67467762cacf5260048a0dc2",
        "674677587aef5e4a84a6b8c1",
        "674677486f379368c32c5879",
        "6746604240b46ffe870508fb",
        "67465ecbefb1480575e930d8",
        "67465b7f7df850bd718b416b",
        "67465771d5995d391be8a136",
        "674656c6b1819216c4b3a2fc",
        "67465238b7716557e8aa80d3",
        "674651748c37dba5a1acca4f",
        "67463f2afb2da87e429a0db5",
        "67463f2500d2e9d350b1398f",
        "67463f279ecf3ac010e53ac5",
        "67463f1ae35c45eb21f2eac2",
        "67463f225a3ea04ed5ecf26e",
        "67463f1e8b1cd8bd775fdb0f",
        "675b24a836cdcf4b613e9805",
        "675b24e59064da0f74513acb",
        "675b24f368afbf12350ced37",
        "675b25053078cc5d7abee04f",
        "675b61519e06dcebc8847956",
        "675b61577830c6ea2e662a29",
      ];
    },
    553999: function (e, t) {
      "use strict";
      t.Cs = t.Xn = t.B8 = t.E2 = t.$j = t.$b = t.Hj = void 0;
      t.Hj = 5e3;
      t.$b = 100;
      t.$j = 14;
      t.E2 = (e) => ({
        _id: e.id,
        name: e.name,
        taskType: e.taskType,
        taskCustomer: e.taskCustomer.id,
        paramHistory: [],
        workerSources: e.workerSources,
      });
      var n, o;
      (t.B8 = 1e3),
        (t.Xn = n),
        (function (e) {
          (e.Course = "Course"),
            (e.Instructor = "Instructor"),
            (e.Practice = "Practice");
        })(n || (t.Xn = n = {})),
        (function (e) {
          (e.SceneConfigs = "sceneConfigs"), (e.InlineGrader = "inlineGrader");
        })(o || (o = {}));
      t.Cs = 1e5;
    },
    350615: function (e, t) {
      "use strict";
      t.Fs = void 0;
      t.Fs = "Tasker account is not verified";
    },
    200660: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "F", {
        enumerable: !0,
        get: function () {
          return o.DashboardPageType;
        },
      });
      var o = n(167469);
    },
    472146: function (e, t, n) {
      "use strict";
      t.d = void 0;
      var o,
        r = n(971599),
        i = n(101241),
        a = (o = n(298784)) && o.__esModule ? o : { default: o };
      const s = r.LintSeverity.WARNING;
      t.d = (e) => {
        let t = [];
        const n = a.default.flatten(a.default.values(e));
        return (
          i.getValidLintResults(n).forEach((e) => {
            const n = e.metadata?.issues ?? {};
            if (e.frontendSeverity === r.LintSeverity.DEBUG) return;
            const o = e.metadata?.globalIssues;
            if (o?.errorMap)
              return void t.push(
                new r.LintDiagnostic(e.name, e.frontendSeverity ?? s, {
                  message: e.message,
                  mustViewBeforeDismissing:
                    e.metadata?.mustViewBeforeDismissing ?? !1,
                  errorMap: o.errorMap,
                  hadLinterRuntimeException:
                    e.metadata?.hadLinterRuntimeException,
                  lintRuleName: e.metadata?.lintRuleName,
                  dismissalReasons: e.metadata?.dismissalReasons,
                  ontologyChoice: e.ontologyChoice,
                  lintPanelOrder: e.metadata?.lintPanelOrder,
                })
              );
            o?.fns && (t = t.concat(l(o.fns, "Extraneous objects", e))),
              o?.fps && (t = t.concat(l(o.fps, "Missing objects", e)));
            const i = a.default
                .toPairs(n)
                .map(([e, t]) =>
                  t.extra?.natsIssue ? { ...t.extra.natsIssue, id: e } : void 0
                )
                .filter((e) => !!e),
              c = a.default.map(a.default.toPairs(n), ([e, t]) => ({
                id: e,
                label: t.label,
                display: t.display,
                locations: t.locations ?? [],
                associatedUUIDs: t.associatedUUIDs ?? [],
                extra: t.extra,
                suggestedActions: t.suggestedActions ?? [],
                associatedCameraContexts: t.associatedCameraContexts ?? [],
                version: t.version,
                externalLintName: t.externalLintName,
                frame: t.frameNum,
                locationsByFrame: t.locationsByFrame,
                overrideFilter: t.overrideFilter,
              })),
              u = new r.LintDiagnostic(e.name, e.frontendSeverity ?? s, {
                message: e.message,
                mustViewBeforeDismissing:
                  e.metadata?.mustViewBeforeDismissing ?? !1,
                taskComponentAnnotations: c,
                natsIssues: a.default.isEmpty(i) ? void 0 : i,
                hadLinterRuntimeException:
                  e.metadata?.hadLinterRuntimeException,
                lintRuleName: e.metadata?.lintRuleName,
                dismissalReasons: e.metadata?.dismissalReasons,
                ontologyChoice: e.ontologyChoice,
                lintPanelOrder: e.metadata?.lintPanelOrder,
              });
            t.push(u);
          }),
          t
        );
      };
      const l = (e, t, n) => {
        const o = a.default.groupBy(e, "frame_no");
        return a.default.map(o, (e, o) => {
          const i = parseInt(o),
            l = !a.default.isNumber(i);
          return new r.LintDiagnostic(n.name, n.frontendSeverity ?? s, {
            message: n.message,
            mustViewBeforeDismissing:
              n.metadata?.mustViewBeforeDismissing ?? !1,
            taskComponentAnnotations: [
              {
                id: l ? `${t}` : `${t} in frame ${i + 1}`,
                display: l ? `${t}` : `${t} in frame ${i + 1}`,
                frame: l ? void 0 : i,
                locations: e.map((e) => ({
                  y: e.top,
                  x: e.left,
                  height: e.height,
                  width: e.width,
                })),
              },
            ],
          });
        });
      };
    },
    761077: function (e, t) {
      "use strict";
      var n;
      (t.xC = void 0),
        (t.xC = n),
        (function (e) {
          (e.Classic = "classic"),
            (e.LidarLite = "lidarlite"),
            (e.Annabel = "annabel"),
            (e.VideoCaptioning = "videocaptioning");
        })(n || (t.xC = n = {}));
    },
    952328: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getErrorAndSubTypesForErrorType = function (e, t) {
          const n = t.filter((t) => t.errorType === e);
          if (!n) return null;
          if (n.length > 1)
            throw Error(
              `Found ${n.length} instances of errType ${e}. Expected 1 instance in FixlessAuditErrorAndSubTypes.`
            );
          return n[0];
        }),
        (t.auditPlusDisputeOptions =
          t.DocumentErrorType =
          t.documentErrorOptions =
          t.errorOptions =
          t.BaseFixlessAuditErrorTypes =
          t.PROTECTED_FIXLESS_AUDIT_ERROR_TYPES =
          t.FixlessAuditsAttributeErrorType =
          t.FixlessAuditsExtraneousErrorType =
          t.FixlessAuditsMissingErrorType =
          t.FixlessAuditAnnotationErrorType =
          t.defaultFixlessAuditSeverity =
          t.ErrorSeverityLevel =
          t.MISSING_ANNOTATION_ID =
            void 0);
      var n;
      (t.MISSING_ANNOTATION_ID = ""),
        (t.ErrorSeverityLevel = n),
        (function (e) {
          (e.Critical = "critical"), (e.Default = "default");
        })(n || (t.ErrorSeverityLevel = n = {}));
      var o;
      (t.defaultFixlessAuditSeverity = [
        { name: "critical", weight: 2 },
        { name: "default", weight: 1 },
      ]),
        (t.FixlessAuditAnnotationErrorType = o),
        (function (e) {
          (e.Attribute = "attribute"),
            (e.Class = "class"),
            (e.Geometry = "geometry"),
            (e.Extraneous = "extraneous"),
            (e.Other = "other"),
            (e.Missing = "missing");
        })(o || (t.FixlessAuditAnnotationErrorType = o = {}));
      const r = "Missing";
      t.FixlessAuditsMissingErrorType = r;
      const i = "Extraneous";
      t.FixlessAuditsExtraneousErrorType = i;
      const a = "Attribute";
      t.FixlessAuditsAttributeErrorType = a;
      const s = [r, i, a];
      t.PROTECTED_FIXLESS_AUDIT_ERROR_TYPES = s;
      const l = [{ errorType: r }, { errorType: i }];
      t.BaseFixlessAuditErrorTypes = l;
      t.errorOptions = [
        { label: "Class", value: "class" },
        { label: "Geometry", value: "geometry" },
        { label: "Attribute", value: "attribute" },
        { label: "Extraneous", value: "extraneous" },
        { label: "Other", value: "other" },
        { label: "Missing", value: "missing" },
      ];
      var c;
      (t.documentErrorOptions = [
        { label: "Label", value: "class" },
        { label: "Location", value: "geometry" },
        { label: "Text", value: "text" },
        { label: "Links", value: "links" },
        { label: "Extraneous", value: "extraneous" },
        { label: "Other", value: "other" },
        { label: "Missing", value: "missing" },
      ]),
        (t.DocumentErrorType = c),
        (function (e) {
          (e.Label = "class"),
            (e.Location = "geometry"),
            (e.Text = "text"),
            (e.Links = "links"),
            (e.Extraneous = "extraneous"),
            (e.Missing = "missing"),
            (e.Other = "other");
        })(c || (t.DocumentErrorType = c = {}));
      t.auditPlusDisputeOptions = [
        { label: "Overfix/Ambiguous", value: "overfix" },
        { label: "Incorrect", value: "incorrect" },
        { label: "No Dispute", value: "no_dispute" },
      ];
    },
    284015: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "IPipelineV3ManualInterventionPreviewJson", {
          enumerable: !0,
          get: function () {
            return r.IPipelineV3ManualInterventionPreviewJson;
          },
        }),
        (t.INamedObjectTypes = void 0);
      var o,
        r = n(167469);
      (t.INamedObjectTypes = o),
        (function (e) {
          (e.User = "user"),
            (e.Project = "project"),
            (e.Subtask = "subtask"),
            (e.Task = "task"),
            (e.PermissionGroup = "permissionGroup"),
            (e.Course = "course"),
            (e.TaskAttempt = "taskAttempt"),
            (e.TaskReview = "taskReview"),
            (e.TrainingAttempt = "trainingAttempt"),
            (e.TrainingScenario = "trainingScenario"),
            (e.IncompleteTaskAttempt = "incompleteAttempt"),
            (e.Tag = "Tag"),
            (e.Persona = "Persona"),
            (e.ProjectSLAGroup = "projectSLAGroup"),
            (e.ProjectCollection = "projectCollection"),
            (e.PipelineV3ManualIntervention = "pipelineV3ManualIntervention"),
            (e.AccountVerification = "accountVerification"),
            (e.Redirect = "redirect"),
            (e.WorkerTeam = "workerTeam"),
            (e.Stage = "stage"),
            (e.Substage = "substage"),
            (e.Audience = "audience"),
            (e.Qualification = "qualification"),
            (e.QAOperation = "qaOperation");
        })(o || (t.INamedObjectTypes = o = {}));
    },
    956840: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mapProjectAttributesToProjectLlmTypes = function (e, t, n) {
          const o = new Set();
          for (const r of e) {
            const e = m[r];
            e && o.add(e);
          }
          for (const r of t) {
            const e = y[r];
            e && o.add(e);
          }
          for (const r of n) {
            const e = h[r];
            e && o.add(e);
          }
          return Array.from(o);
        }),
        (t.standardizeAndMaybeFindValidLanguageCode = function (e) {
          return (function (e) {
            if (a.default.isNil(e)) return;
            if (Object.values(b).includes(e)) return e;
            return;
          })(
            (function (e) {
              if (a.default.isNil(e)) return;
              return e.replace("-", "_");
            })(e)
          );
        }),
        (t.BILLING_PROPOSAL_OVERRIDE_ROLES =
          t.InitialProjectBillingConfigsState =
          t.BillingFlagList =
          t.BillingFlagsOptionsDescriptions =
          t.HourlyWorkTypes =
          t.CustomerWorkstreamOverride =
          t.LanguageCode =
          t.ProjectWorkUnit =
          t.BillingFlags =
          t.GenAIProjectAttributeTagIcons =
          t.GenAIProjectUseCase =
          t.GenAIProjectMedium =
          t.GenAIProjectType =
          t.ProjectLlmType =
          t.BillableProjectVisibilityTypes =
          t.ExternalProjectVisibilityTypes =
          t.ProjectVisibilityType =
          t.ProjectParameterGroupType =
            void 0);
      var o,
        r,
        i,
        a = (o = n(298784)) && o.__esModule ? o : { default: o },
        s = n(599789);
      (t.ProjectParameterGroupType = r),
        (function (e) {
          e.Billing = "billing";
        })(r || (t.ProjectParameterGroupType = r = {})),
        (t.ProjectVisibilityType = i),
        (function (e) {
          (e.Customer = "customer"),
            (e.PaidPilot = "paid_pilot"),
            (e.UnpaidPilot = "unpaid_pilot"),
            (e.DataStreams = "datastreams"),
            (e.Linked = "linked"),
            (e.Forecast = "forecast"),
            (e.Internal = "internal"),
            (e.InternalForCustomer = "internal_for_customer");
        })(i || (t.ProjectVisibilityType = i = {}));
      const l = [i.Customer];
      t.ExternalProjectVisibilityTypes = l;
      const c = [i.Customer, i.PaidPilot];
      var u, d, p, f;
      (t.BillableProjectVisibilityTypes = c),
        (t.ProjectLlmType = u),
        (function (e) {
          (e.RLHF = "RLHF"),
            (e.SFT = "SFT"),
            (e.Coding = "Coding"),
            (e.AdversarialTesting = "Red-Teaming"),
            (e.IF = "IF"),
            (e.ToolUse = "Tool Use"),
            (e.MultimodalImage = "Multimodal Image"),
            (e.MultimodalAudio = "Multimodal Audio"),
            (e.Eval = "Eval"),
            (e.Rewrite = "Rewrite"),
            (e.PromptGeneration = "Prompt Generation"),
            (e.Generation = "Generation (Deprecated)"),
            (e.Rating = "Rating (Deprecated)"),
            (e.Ranking = "Ranking (Deprecated)"),
            (e.RewriteEditing = "Rewrite/Editing (Deprecated)"),
            (e.MultiTurn = "Multi-turn (Deprecated)");
        })(u || (t.ProjectLlmType = u = {})),
        (t.GenAIProjectType = d),
        (function (e) {
          (e.SFT = "SFT"),
            (e.RLHF_PREF_RANKING = "RLHF: Pref Ranking"),
            (e.RLHF_PREF_RANKING_WITH_REWRITES =
              "RLHF: Pref Ranking with Rewrites"),
            (e.EVALS = "Evals"),
            (e.PROMPT_GENERATION = "Prompt Generation"),
            (e.PROCESS_SUPERVISION = "Process Supervision"),
            (e.CONTENT_UNDERSTANDING = "Content Understanding"),
            (e.OTHER = "Other");
        })(d || (t.GenAIProjectType = d = {})),
        (t.GenAIProjectMedium = p),
        (function (e) {
          (e.TEXT = "Text"),
            (e.MULTIMODAL_IMAGE = "Multimodal: Image"),
            (e.MULTIMODAL_VIDEO = "Multimodal: Video"),
            (e.MULTIMODAL_AUDIO = "Multimodal: Audio"),
            (e.CODE = "Code"),
            (e.DATA = "Data"),
            (e.DOCUMENTS = "Documents"),
            (e.OTHER = "Other");
        })(p || (t.GenAIProjectMedium = p = {})),
        (t.GenAIProjectUseCase = f),
        (function (e) {
          (e.GENERAL_INSTRUCTION_FOLLOWING = "General Instruction Following"),
            (e.PRECISE_INSTRUCTION_FOLLOWING = "Precise Instruction Following"),
            (e.AGENT_INSTRUCTION_FOLLOWING = "Agent Instruction Following"),
            (e.GROUNDED_NATURAL_LANGUAGE_UNDERSTANDING =
              "Grounded Natural Language Understanding"),
            (e.RAG = "RAG"),
            (e.FACTUALITY = "Factuality"),
            (e.CODE_EXECUTION_INTERPRETER =
              "Code Execution / Code Interpreter"),
            (e.ICE = "ICE"),
            (e.ASPIRATIONAL_CAPABILITY = "Aspirational Capability"),
            (e.REASONING = "Reasoning"),
            (e.AGENT_TRAJECTORIES = "Agent Trajectories"),
            (e.TOOL_USE = "Tool Use"),
            (e.ADVERSARIAL_PROMPTING_RED_TEAMING =
              "Adversarial Prompting / Red Teaming"),
            (e.SAFETY = "Safety"),
            (e.BORDERLINE_PROMPTING = "Borderline Prompting"),
            (e.PROCESS_SUPERVISION = "Process Supervision"),
            (e.OTHER = "Other");
        })(f || (t.GenAIProjectUseCase = f = {}));
      const m = {
          [d.SFT]: u.SFT,
          [d.RLHF_PREF_RANKING]: u.RLHF,
          [d.RLHF_PREF_RANKING_WITH_REWRITES]: u.RLHF,
          [d.EVALS]: u.Eval,
          [d.PROMPT_GENERATION]: u.PromptGeneration,
          [d.PROCESS_SUPERVISION]: null,
          [d.CONTENT_UNDERSTANDING]: null,
          [d.OTHER]: null,
        },
        y = {
          [p.TEXT]: null,
          [p.MULTIMODAL_IMAGE]: u.MultimodalImage,
          [p.MULTIMODAL_VIDEO]: null,
          [p.MULTIMODAL_AUDIO]: u.MultimodalAudio,
          [p.CODE]: u.Coding,
          [p.DATA]: null,
          [p.DOCUMENTS]: null,
          [p.OTHER]: null,
        },
        h = {
          [f.GENERAL_INSTRUCTION_FOLLOWING]: u.IF,
          [f.PRECISE_INSTRUCTION_FOLLOWING]: u.IF,
          [f.AGENT_INSTRUCTION_FOLLOWING]: u.IF,
          [f.GROUNDED_NATURAL_LANGUAGE_UNDERSTANDING]: null,
          [f.RAG]: null,
          [f.FACTUALITY]: null,
          [f.CODE_EXECUTION_INTERPRETER]: u.Coding,
          [f.ICE]: u.Coding,
          [f.ASPIRATIONAL_CAPABILITY]: null,
          [f.REASONING]: null,
          [f.AGENT_TRAJECTORIES]: null,
          [f.TOOL_USE]: u.ToolUse,
          [f.ADVERSARIAL_PROMPTING_RED_TEAMING]: u.AdversarialTesting,
          [f.SAFETY]: u.AdversarialTesting,
          [f.BORDERLINE_PROMPTING]: u.AdversarialTesting,
          [f.OTHER]: null,
          [f.PROCESS_SUPERVISION]: null,
        };
      var _, g, C, b, v, k;
      (t.GenAIProjectAttributeTagIcons = _),
        (function (e) {
          (e.TaskType = "tag"),
            (e.Type = "briefcase"),
            (e.Medium = "book"),
            (e.UseCase = "clipboard-check"),
            (e.Chat = "diagram-next"),
            (e.ChatExperimental = "flask"),
            (e.TextCollection = "table-columns"),
            (e.MultiChat = "clone"),
            (e.OnPlatform = "store"),
            (e.OffPlatform = "server"),
            (e.ChatModel = "head-side-gear"),
            (e.LinkedProjects = "link");
        })(_ || (t.GenAIProjectAttributeTagIcons = _ = {})),
        (t.BillingFlags = g),
        (function (e) {
          (e.isQIR = "isQir"),
            (e.isAuditPlus = "isAuditPlus"),
            (e.isPilot = "isPilot"),
            (e.isPaidPilot = "isPaidPilot"),
            (e.isFreePilot = "isFreePilot"),
            (e.isCapacityBuildingProject = "isCapacityBuildingProject"),
            (e.isTraining = "isTraining"),
            (e.isIdle = "isIdle"),
            (e.isBillableTraining = "isBillableTraining"),
            (e.benchmarksAreBillableOnProject =
              "benchmarksAreBillableOnProject"),
            (e.isExperimental = "isExperimental"),
            (e.isAssessmentTrainingProject = "isAssessmentTrainingProject"),
            (e.isSupport = "isSupport");
        })(g || (t.BillingFlags = g = {})),
        (t.ProjectWorkUnit = C),
        (function (e) {
          (e.Task = "task"),
            (e.Hour = "hour"),
            (e.Model = "model"),
            (e.None = "none");
        })(C || (t.ProjectWorkUnit = C = {})),
        (t.LanguageCode = b),
        (function (e) {
          (e.English = "en"),
            (e.EnglishAU = "en_AU"),
            (e.EnglishCA = "en_CA"),
            (e.EnglishGB = "en_GB"),
            (e.EnglishIndia = "en_IN"),
            (e.EnglishIE = "en_IE"),
            (e.EnglishNZ = "en_NZ"),
            (e.EnglishSG = "en_SG"),
            (e.EnglishUS = "en_US"),
            (e.EnglishZA = "en_ZA"),
            (e.Hindi = "hi_IN"),
            (e.HindiRomanized = "hi_IN_rom"),
            (e.HindiLatin = "hi_Latn"),
            (e.Indonesian = "id_ID"),
            (e.Tagalog = "tl_PH"),
            (e.Khmer = "km_KH"),
            (e.Urdu = "ur_IN"),
            (e.UrDuPakistan = "ur_PK"),
            (e.Kannada = "kn_IN"),
            (e.Malayalam = "ml_IN"),
            (e.Punjabi = "pa_IN"),
            (e.Telugu = "te_IN"),
            (e.TamilIndia = "ta_IN"),
            (e.Tamil = "ta_Taml"),
            (e.TamilLatn = "ta_Latn"),
            (e.Marathi = "mr_Deva"),
            (e.MarathiIndia = "mr_IN"),
            (e.MarathiLatn = "mr_Latn"),
            (e.BengaliScript = "bn_IN"),
            (e.BengaliRomanized = "bn_IN_rom"),
            (e.Bengali = "bn_Beng"),
            (e.BengaliLatn = "bn_Latn"),
            (e.GujaratiIndia = "gu_IN"),
            (e.Gujarati = "gu_Gujr"),
            (e.GujaratiLatn = "gu_Latn"),
            (e.Thai = "th_TH"),
            (e.PortugeseAbridged = "pt"),
            (e.PortugeseBrazil = "pt_BR"),
            (e.Bulgarian = "bg_BG"),
            (e.FrenchAbridged = "fr"),
            (e.French = "fr_FR"),
            (e.FrenchBE = "fr_BE"),
            (e.FrenchCanada = "fr_CA"),
            (e.FrenchCH = "fr_CH"),
            (e.Arabic = "ar_SA"),
            (e.ArabicEgypt = "ar_EG"),
            (e.ArabicEgyptRomanized = "ar_EG_rom"),
            (e.ArabicUnitedArabEmirates = "ar_AE"),
            (e.Turkish = "tr_TR"),
            (e.Chinese = "zh_CN"),
            (e.ChineseTraditional = "zh_TW"),
            (e.Portuguese = "pt_PT"),
            (e.ItalianCH = "it_CH"),
            (e.Italian = "it_IT"),
            (e.Croatian = "hr_HR"),
            (e.Russian = "ru_RU"),
            (e.Serbian = "sr_RS"),
            (e.Slovak = "sk_SK"),
            (e.Czech = "cs_CZ"),
            (e.Polish = "pl_PL"),
            (e.Romanian = "ro_RO"),
            (e.Greek = "el_GR"),
            (e.Vietnamese = "vi_VN"),
            (e.Slovenian = "sl_SI"),
            (e.Hungarian = "hu_HU"),
            (e.SpanishArgentina = "es_AR"),
            (e.SpanishCL = "es_CL"),
            (e.Spanish = "es_ES"),
            (e.SpanishMexico = "es_MX"),
            (e.SpanishLatinAmerica = "es_419"),
            (e.SpanishUS = "es_US"),
            (e.SpanishVenezuela = "es_VE"),
            (e.Korean = "ko_KR"),
            (e.Swahili = "sw_KE"),
            (e.SwahiliTanzania = "sw_TZ"),
            (e.Zulu = "zu_ZA"),
            (e.Japanese = "ja_JP"),
            (e.GermanAT = "de_AT"),
            (e.GermanCH = "de_CH"),
            (e.German = "de_DE"),
            (e.Hebrew = "he_IL"),
            (e.Ukrainian = "uk_UA"),
            (e.Danish = "da_DK"),
            (e.Dutch = "nl_NL"),
            (e.Persian = "fa_IR"),
            (e.Farsi = "fa_IR"),
            (e.Finnish = "fi_FI"),
            (e.Norwegian = "no_NO"),
            (e.Estonian = "et_EE"),
            (e.Latvian = "lv_LV"),
            (e.Armenian = "hy_AM"),
            (e.Lithuanian = "lt_LT"),
            (e.Azeri = "az_AZ"),
            (e.Catalan = "ca_ES"),
            (e.Swedish = "sv_SE"),
            (e.YueCN = "yue_CN"),
            (e.ChineseHK = "zh_HK"),
            (e.Flemish = "nl_BE"),
            (e.Malay = "ms_MY");
        })(b || (t.LanguageCode = b = {})),
        (t.CustomerWorkstreamOverride = v),
        (function (e) {
          (e.TrainingAndScreening = "Training/Screening"),
            (e.Other = "Other"),
            (e.Enterprise = "Enterprise"),
            (e.Generalists = "Generalists"),
            (e.Languages = "Languages"),
            (e.Pilots = "Pilots"),
            (e.Experts = "Experts"),
            (e.Coding = "Coding"),
            (e.Mathgen = "Mathgen"),
            (e.Safety = "Safety"),
            (e.NonAllocatedTraining = "Non Allocated Training"),
            (e.DomainExperts = "Domain Experts"),
            (e.Genesis = "Genesis");
        })(v || (t.CustomerWorkstreamOverride = v = {})),
        (t.HourlyWorkTypes = k),
        (function (e) {
          (e.Task = "Task"), (e.CRC = "CRC"), (e.Hubstaff = "Hubstaff");
        })(k || (t.HourlyWorkTypes = k = {}));
      const T = {
        [g.isQIR]: {
          name: "QIR Project",
          description:
            "Project is used for quality testing, but that quality testing is not billed to the customer.",
        },
        [g.isAuditPlus]: {
          name: "Audit Plus Project",
          description:
            "Project is used for quality test, but that quality testing is billed to the customer",
        },
        [g.isPaidPilot]: {
          name: "Paid Pilot Project",
          description: "Project is a pilot for which revenue will be received",
        },
        [g.isFreePilot]: {
          name: "Free Pilot Project",
          description: "Project is a pilot for which no revenue is planned.",
        },
        [g.isCapacityBuildingProject]: {
          name: "Capacity Building Project",
          description:
            "Project is used to provide work to taskers when our production projects don't have enough work to keep them occupied in order to prevent churn.",
        },
        [g.isTraining]: {
          name: "Training Project",
          description: "Project is used for training taskers",
        },
        [g.isBillableTraining]: {
          name: "Billable Training Project",
          description:
            "Project is used for training taskers, however the customer will be paying us for training.",
        },
        [g.isExperimental]: {
          name: "Experimental Project",
          description: "Project is used for experimental purposes internally",
        },
        [g.isSupport]: {
          name: "Support Project",
          description:
            "Project is used for non-project general support internally",
        },
      };
      t.BillingFlagsOptionsDescriptions = T;
      const E = Object.freeze(Object.values(g));
      var A;
      (t.BillingFlagList = E),
        (t.InitialProjectBillingConfigsState = A),
        (function (e) {
          (e.Pending = "pending"),
            (e.Approved = "approved"),
            (e.Rejected = "rejected");
        })(A || (t.InitialProjectBillingConfigsState = A = {}));
      const S = [
        s.AccessRole.Finance,
        s.AccessRole.Accounting,
        s.AccessRole.RevOps,
      ];
      t.BILLING_PROPOSAL_OVERRIDE_ROLES = S;
    },
    575334: function (e, t) {
      "use strict";
      var n;
      (t.Y = void 0),
        (t.Y = n),
        (function (e) {
          (e.Candidate = "candidate"),
            (e.Confirmed = "confirmed"),
            (e.Rejected = "rejected");
        })(n || (t.Y = n = {}));
    },
    204864: function (e, t, n) {
      "use strict";
      var o = n(127061),
        r = n(830816).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sample = function (e, t) {
          const n = e.filter((e, n) => n % t === 0);
          (e.length - 1) % t > 0 && n.push(e[e.length - 1]);
          return n;
        }),
        (t.base64StringToTypedArray = function (e, t) {
          if (u) {
            const n = r.from(e, "base64");
            return new t(
              n.buffer,
              n.byteOffset,
              n.length / t.BYTES_PER_ELEMENT
            );
          }
          {
            const n = i.default.decode(e);
            return new t(n);
          }
        }),
        (t.typedArrayToBase64String = function (e) {
          return u
            ? r.from(e.buffer).toString("base64")
            : i.default.encode(e.buffer);
        }),
        (t.flattenTypedArrays = function (e, t) {
          if (!e.length) return new t();
          const n = [];
          for (const o of e) n.push(...o);
          return t.from(n);
        }),
        (t.compareS3URLWithoutRegion = function (e, t) {
          const n = h(e),
            o = h(t);
          if (void 0 === n.Key || void 0 === o.Key) return e === t;
          return n.Bucket === o.Bucket && n.Key === o.Key;
        }),
        (t.fromS3Url = h),
        (t.toS3Url = _),
        (t.s3UrlToHTTPUrl = function (e) {
          const { Bucket: t, Key: n, Region: o } = h(e);
          if (!t || !n) return e;
          return _(t, n, "bucket-in-host", o);
        }),
        (t.attemptWithRetry = async function (e, t = 60, n = 3, o) {
          for (let i = 0; i < n; i++)
            try {
              return await e();
            } catch (r) {
              if (!(i + 1 < n)) throw r;
              o?.(i + 1), await g(1e3 * t);
            }
          throw new Error("impossible");
        }),
        (t.retryWithBackoff = async function (e, t) {
          let n = t?.retries ?? 3,
            o = t?.delayMs ?? 1e3;
          const r = t?.maxDelayMs ?? 6e4;
          let i;
          t?.disableJitter || (await g(1e3 * Math.random()));
          for (; n > 0; )
            try {
              return await e();
            } catch (a) {
              n--, (i = a), await g(o), (o = Math.min(2 * o, r));
            }
          if (void 0 !== t?.defaultValue) return t.defaultValue;
          throw i || new Error("Retry failed with unknown error.");
        }),
        (t.getStackTrace = C),
        (t.getCallSite = function () {
          const e = C({ skipLines: 2 }),
            [t, n] = e.split("\n").map((e) => e.split(" ")[1]);
          return {
            message: `${t} was called by ${n}`,
            stack: e,
            currentFn: t,
            caller: n,
          };
        }),
        (t.getStackBreadcrumbs = function ({
          logFile: e = !1,
          skipLines: t = 2,
        } = {}) {
          const n = C({ skipLines: t })
            .split("\n")
            .map((e) => e.split(" ")[1]);
          e || n.pop();
          return a.default.reverse(n).join(" > ");
        }),
        (t.fixStringIndentation = function (e) {
          const t = e.split("\n"),
            n = t[0].match(/^\s{2,}/g)?.length;
          if (!n) return e;
          if (t.every((e) => e.startsWith(t[0].slice(0, n))))
            return t.map((e) => e.slice(0, n)).join("\n");
          return e;
        }),
        (t.initializeRecordWithKeysFromEnum = function (e, t) {
          return a.default.fromPairs(a.default.values(e).map((e) => [e, t]));
        }),
        (t.enumValues = function (e) {
          return Object.keys(e)
            .filter((e) => Number.isNaN(+e))
            .map((t) => e[t]);
        }),
        (t.generateRandomSlug = function (e = 12) {
          const t =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
          let n = "";
          for (let o = 0; o < e; o++) {
            const e = Math.floor(Math.random() * t.length);
            n += t.charAt(e);
          }
          return n;
        }),
        (t.makeJsonCompatible =
          t.parseAnythingSeparatedIds =
          t.sleep =
          t.asyncTimeout =
          t.mapToTypedArrays =
            void 0);
      var i = c(n(188718)),
        a = c(n(298784)),
        s = c(n(137131)),
        l = n(312093);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const u = "undefined" !== typeof o ? o : 0;
      t.mapToTypedArrays = (e) => e.map((e) => Float32Array.from(e));
      t.asyncTimeout = async (e) => new Promise((t) => setTimeout(t, e));
      const d = {
          "(us|eu|ap|sa|ca|me)\\-\\w+\\-\\d+": "amazonaws.com",
          "cn\\-\\w+\\-\\d+": "amazonaws.com.cn",
          "us\\-gov\\-\\w+\\-\\d+": "amazonaws.com",
          "us\\-iso\\-\\w+\\-\\d+": "c2s.ic.gov",
          "us\\-isob\\-\\w+\\-\\d+": "sc2s.sgov.gov",
        },
        p = "((" + a.default.keys(d).join(")|(") + "))",
        f =
          "(" +
          a.default
            .uniq(a.default.values(d))
            .map((e) => e.replace(/\./g, "\\."))
            .join("|") +
          ")",
        m = new RegExp(`^([a-z0-9-.]+).s3([.-](dualstack\\.)?${p})?\\.${f}$`),
        y = new RegExp(`^s3([.-](dualstack\\.)?${p})?\\.${f}$`);
      function h(e) {
        const t = s.default.parse(e);
        try {
          t.pathname = decodeURIComponent(t.pathname || "");
        } catch (r) {
          return { Bucket: void 0, Key: void 0, Region: void 0 };
        }
        if (!t.hostname || !t.pathname)
          return { Bucket: void 0, Key: void 0, Region: void 0 };
        if ("s3:" === t.protocol)
          return {
            Bucket: t.hostname,
            Key: t.pathname.slice(1),
            Region: void 0,
          };
        const n = t.hostname.match(m);
        if (n) return { Bucket: n[1], Key: t.pathname.slice(1), Region: n[4] };
        const o = t.hostname.match(y);
        if (o) {
          const e = t.pathname.split("/");
          return { Bucket: e[1], Key: e.slice(2).join("/"), Region: o[3] };
        }
        return { Bucket: void 0, Key: void 0, Region: void 0 };
      }
      function _(e, t, n = "bucket-in-host", o) {
        const r =
            a.default.find(d, (e, t) => !!o?.match(new RegExp(`^${t}$`))) ??
            "amazonaws.com",
          i = encodeURIComponent(t).replace(/%2F/g, "/");
        switch (n) {
          case "bucket-in-host":
            return `https://${e}.s3.${o ? `${o}.` : ""}${r}/${i}`;
          case "s3":
            return `s3://${e}/${i}`;
        }
      }
      const g = (e) =>
        new Promise((t) => {
          setTimeout(t, e);
        });
      function C({ skipLines: e = 0 } = {}) {
        const t = (new Error().stack || "").split("\n").map((e) => e.trim());
        return t
          .splice("Error" === t[0] ? 2 : 1)
          .slice(e)
          .join("\n");
      }
      t.sleep = g;
      t.parseAnythingSeparatedIds = (e) => {
        const t = e.match(/[^,\s]+/g) || [];
        return a.default.uniq(t);
      };
      const b = (e) =>
        l.G.isString(e) || l.G.isNumber(e) || l.G.isBoolean(e) || null === e
          ? e
          : l.G.isDate(e)
          ? e.toISOString()
          : l.G.isArray(e)
          ? e.flatMap((e) => {
              if (null === e) return [null];
              const t = b(e);
              return null !== t ? [t] : [];
            })
          : l.G.isObject(e)
          ? Object.fromEntries(
              Object.entries(e).flatMap((e) => {
                const [t, n] = e;
                if (null === n) return [[t, null]];
                const o = b(n);
                return null !== o ? [[t, o]] : [];
              })
            )
          : null;
      t.makeJsonCompatible = b;
    },
    188718: function (e, t) {
      !(function () {
        "use strict";
        for (
          var e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            n = new Uint8Array(256),
            o = 0;
          o < e.length;
          o++
        )
          n[e.charCodeAt(o)] = o;
        (t.encode = function (t) {
          var n,
            o = new Uint8Array(t),
            r = o.length,
            i = "";
          for (n = 0; n < r; n += 3)
            (i += e[o[n] >> 2]),
              (i += e[((3 & o[n]) << 4) | (o[n + 1] >> 4)]),
              (i += e[((15 & o[n + 1]) << 2) | (o[n + 2] >> 6)]),
              (i += e[63 & o[n + 2]]);
          return (
            r % 3 === 2
              ? (i = i.substring(0, i.length - 1) + "=")
              : r % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
          );
        }),
          (t.decode = function (e) {
            var t,
              o,
              r,
              i,
              a,
              s = 0.75 * e.length,
              l = e.length,
              c = 0;
            "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
            var u = new ArrayBuffer(s),
              d = new Uint8Array(u);
            for (t = 0; t < l; t += 4)
              (o = n[e.charCodeAt(t)]),
                (r = n[e.charCodeAt(t + 1)]),
                (i = n[e.charCodeAt(t + 2)]),
                (a = n[e.charCodeAt(t + 3)]),
                (d[c++] = (o << 2) | (r >> 4)),
                (d[c++] = ((15 & r) << 4) | (i >> 2)),
                (d[c++] = ((3 & i) << 6) | (63 & a));
            return u;
          });
      })();
    },
    636012: function (e, t, n) {
      "use strict";
      var o = n(893185),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          a,
          s,
          l,
          c,
          u = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((a = o()),
            (s = document.createRange()),
            (l = document.getSelection()),
            ((c = document.createElement("span")).textContent = e),
            (c.style.all = "unset"),
            (c.style.position = "fixed"),
            (c.style.top = 0),
            (c.style.clip = "rect(0, 0, 0, 0)"),
            (c.style.whiteSpace = "pre"),
            (c.style.webkitUserSelect = "text"),
            (c.style.MozUserSelect = "text"),
            (c.style.msUserSelect = "text"),
            (c.style.userSelect = "text"),
            c.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = r[t.format] || r.default;
                  window.clipboardData.setData(i, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(c),
            s.selectNodeContents(c),
            l.addRange(s),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          u = !0;
        } catch (d) {
          n && console.error("unable to copy using execCommand: ", d),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (u = !0);
          } catch (d) {
            n && console.error("unable to copy using clipboardData: ", d),
              n && console.error("falling back to prompt"),
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, e);
          }
        } finally {
          l &&
            ("function" == typeof l.removeRange
              ? l.removeRange(s)
              : l.removeAllRanges()),
            c && document.body.removeChild(c),
            a();
        }
        return u;
      };
    },
    401792: function (e, t, n) {
      var o;
      !(function () {
        "use strict";
        var r = !(
            "undefined" === typeof window ||
            !window.document ||
            !window.document.createElement
          ),
          i = {
            canUseDOM: r,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners:
              r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
          };
        void 0 ===
          (o = function () {
            return i;
          }.call(t, n, t, e)) || (e.exports = o);
      })();
    },
    803996: function (e) {
      "use strict";
      e.exports = function (e, t, n, o, r, i, a, s) {
        if (!e) {
          var l;
          if (void 0 === t)
            l = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var c = [n, o, r, i, a, s],
              u = 0;
            (l = new Error(
              t.replace(/%s/g, function () {
                return c[u++];
              })
            )).name = "Invariant Violation";
          }
          throw ((l.framesToPop = 1), l);
        }
      };
    },
    648628: function (e) {
      var t = 1e3,
        n = 60 * t,
        o = 60 * n,
        r = 24 * o,
        i = 7 * r,
        a = 365.25 * r;
      function s(e, t, n, o) {
        var r = t >= 1.5 * n;
        return Math.round(e / n) + " " + o + (r ? "s" : "");
      }
      e.exports = function (e, l) {
        l = l || {};
        var c = typeof e;
        if ("string" === c && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var s =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!s) return;
            var l = parseFloat(s[1]);
            switch ((s[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return l * a;
              case "weeks":
              case "week":
              case "w":
                return l * i;
              case "days":
              case "day":
              case "d":
                return l * r;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return l * o;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return l * n;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return l * t;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return l;
              default:
                return;
            }
          })(e);
        if ("number" === c && isFinite(e))
          return l.long
            ? (function (e) {
                var i = Math.abs(e);
                if (i >= r) return s(e, i, r, "day");
                if (i >= o) return s(e, i, o, "hour");
                if (i >= n) return s(e, i, n, "minute");
                if (i >= t) return s(e, i, t, "second");
                return e + " ms";
              })(e)
            : (function (e) {
                var i = Math.abs(e);
                if (i >= r) return Math.round(e / r) + "d";
                if (i >= o) return Math.round(e / o) + "h";
                if (i >= n) return Math.round(e / n) + "m";
                if (i >= t) return Math.round(e / t) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    244218: function (e, t, n) {
      "use strict";
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var r = s(n(827378)),
        i = s(n(636012)),
        a = ["text", "onCopy", "options", "children"];
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function f(e, t) {
        return (
          (f =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          f(e, t)
        );
      }
      function m(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = _(e);
          if (t) {
            var r = _(this).constructor;
            n = Reflect.construct(o, arguments, r);
          } else n = o.apply(this, arguments);
          return y(this, n);
        };
      }
      function y(e, t) {
        if (t && ("object" === o(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return h(e);
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _(e) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          _(e)
        );
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var C = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && f(e, t);
        })(l, e);
        var t,
          n,
          o,
          s = m(l);
        function l() {
          var e;
          d(this, l);
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          return (
            g(
              h((e = s.call.apply(s, [this].concat(n)))),
              "onClick",
              function (t) {
                var n = e.props,
                  o = n.text,
                  a = n.onCopy,
                  s = n.children,
                  l = n.options,
                  c = r.default.Children.only(s),
                  u = (0, i.default)(o, l);
                a && a(o, u),
                  c &&
                    c.props &&
                    "function" === typeof c.props.onClick &&
                    c.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = u(e, a),
                  o = r.default.Children.only(t);
                return r.default.cloneElement(
                  o,
                  c(c({}, n), {}, { onClick: this.onClick })
                );
              },
            },
          ]) && p(t.prototype, n),
          o && p(t, o),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          l
        );
      })(r.default.PureComponent);
      (t.CopyToClipboard = C),
        g(C, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    524306: function (e, t, n) {
      "use strict";
      var o = n(244218).CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    585325: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bodyOpenClassName = t.portalClassName = void 0);
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(827378),
        a = f(i),
        s = f(n(331542)),
        l = f(n(723615)),
        c = f(n(156302)),
        u = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(952202)),
        d = n(363486),
        p = f(d);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" !== typeof t && "function" !== typeof t) ? e : t;
      }
      var h = (t.portalClassName = "ReactModalPortal"),
        _ = (t.bodyOpenClassName = "ReactModal__Body--open"),
        g = void 0 !== s.default.createPortal,
        C = g
          ? s.default.createPortal
          : s.default.unstable_renderSubtreeIntoContainer;
      function b(e) {
        return e();
      }
      var v = (function (e) {
        function t() {
          var e, n, r;
          m(this, t);
          for (var i = arguments.length, l = Array(i), u = 0; u < i; u++)
            l[u] = arguments[u];
          return (
            (n = r =
              y(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(l)
                )
              )),
            (r.removePortal = function () {
              !g && s.default.unmountComponentAtNode(r.node),
                b(r.props.parentSelector).removeChild(r.node);
            }),
            (r.portalRef = function (e) {
              r.portal = e;
            }),
            (r.renderPortal = function (e) {
              var n = C(
                r,
                a.default.createElement(
                  c.default,
                  o({ defaultStyles: t.defaultStyles }, e)
                ),
                r.node
              );
              r.portalRef(n);
            }),
            y(r, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          r(
            t,
            [
              {
                key: "componentDidMount",
                value: function () {
                  d.canUseDOM &&
                    (g || (this.node = document.createElement("div")),
                    (this.node.className = this.props.portalClassName),
                    b(this.props.parentSelector).appendChild(this.node),
                    !g && this.renderPortal(this.props));
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  if (d.canUseDOM) {
                    var t = e.isOpen;
                    if (this.props.isOpen || t) {
                      var n = b(this.props.parentSelector),
                        o = b(e.parentSelector);
                      o !== n &&
                        (n.removeChild(this.node), o.appendChild(this.node)),
                        !g && this.renderPortal(e);
                    }
                  }
                },
              },
              {
                key: "componentWillUpdate",
                value: function (e) {
                  d.canUseDOM &&
                    e.portalClassName !== this.props.portalClassName &&
                    (this.node.className = e.portalClassName);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if (d.canUseDOM && this.node && this.portal) {
                    var e = this.portal.state,
                      t = Date.now(),
                      n =
                        e.isOpen &&
                        this.props.closeTimeoutMS &&
                        (e.closesAt || t + this.props.closeTimeoutMS);
                    n
                      ? (e.beforeClose || this.portal.closeWithTimeout(),
                        setTimeout(this.removePortal, n - t))
                      : this.removePortal();
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  return d.canUseDOM && g
                    ? (!this.node &&
                        g &&
                        (this.node = document.createElement("div")),
                      C(
                        a.default.createElement(
                          c.default,
                          o(
                            {
                              ref: this.portalRef,
                              defaultStyles: t.defaultStyles,
                            },
                            this.props
                          )
                        ),
                        this.node
                      ))
                    : null;
                },
              },
            ],
            [
              {
                key: "setAppElement",
                value: function (e) {
                  u.setElement(e);
                },
              },
            ]
          ),
          t
        );
      })(i.Component);
      (v.propTypes = {
        isOpen: l.default.bool.isRequired,
        style: l.default.shape({
          content: l.default.object,
          overlay: l.default.object,
        }),
        portalClassName: l.default.string,
        bodyOpenClassName: l.default.string,
        className: l.default.oneOfType([
          l.default.string,
          l.default.shape({
            base: l.default.string.isRequired,
            afterOpen: l.default.string.isRequired,
            beforeClose: l.default.string.isRequired,
          }),
        ]),
        overlayClassName: l.default.oneOfType([
          l.default.string,
          l.default.shape({
            base: l.default.string.isRequired,
            afterOpen: l.default.string.isRequired,
            beforeClose: l.default.string.isRequired,
          }),
        ]),
        appElement: l.default.instanceOf(p.default),
        onAfterOpen: l.default.func,
        onRequestClose: l.default.func,
        closeTimeoutMS: l.default.number,
        ariaHideApp: l.default.bool,
        shouldFocusAfterRender: l.default.bool,
        shouldCloseOnOverlayClick: l.default.bool,
        shouldReturnFocusAfterClose: l.default.bool,
        parentSelector: l.default.func,
        aria: l.default.object,
        role: l.default.string,
        contentLabel: l.default.string,
        shouldCloseOnEsc: l.default.bool,
      }),
        (v.defaultProps = {
          isOpen: !1,
          portalClassName: h,
          bodyOpenClassName: _,
          ariaHideApp: !0,
          closeTimeoutMS: 0,
          shouldFocusAfterRender: !0,
          shouldCloseOnEsc: !0,
          shouldCloseOnOverlayClick: !0,
          shouldReturnFocusAfterClose: !0,
          parentSelector: function () {
            return document.body;
          },
        }),
        (v.defaultStyles = {
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }),
        (t.default = v);
    },
    156302: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        a = n(827378),
        s = h(a),
        l = h(n(723615)),
        c = y(n(741259)),
        u = h(n(16303)),
        d = y(n(952202)),
        p = y(n(268787)),
        f = y(n(740131)),
        m = h(n(363486));
      function y(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var _ = {
          overlay: "ReactModal__Overlay",
          content: "ReactModal__Content",
        },
        g = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" !== typeof t && "function" !== typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.setFocusAfterRender = function (e) {
                n.focusAfterRender = n.props.shouldFocusAfterRender && e;
              }),
              (n.setOverlayRef = function (e) {
                n.overlay = e;
              }),
              (n.setContentRef = function (e) {
                n.content = e;
              }),
              (n.afterClose = function () {
                var e = n.props,
                  t = e.appElement,
                  o = e.ariaHideApp;
                f.remove(n.props.bodyOpenClassName),
                  o && p.totalCount() < 1 && d.show(t),
                  n.props.shouldFocusAfterRender &&
                    (n.props.shouldReturnFocusAfterClose
                      ? (c.returnFocus(), c.teardownScopedFocus())
                      : c.popWithoutFocus());
              }),
              (n.open = function () {
                n.beforeOpen(),
                  n.state.afterOpen && n.state.beforeClose
                    ? (clearTimeout(n.closeTimer),
                      n.setState({ beforeClose: !1 }))
                    : (n.props.shouldFocusAfterRender &&
                        (c.setupScopedFocus(n.node), c.markForFocusLater()),
                      n.setState({ isOpen: !0 }, function () {
                        n.setState({ afterOpen: !0 }),
                          n.props.isOpen &&
                            n.props.onAfterOpen &&
                            n.props.onAfterOpen();
                      }));
              }),
              (n.close = function () {
                n.props.closeTimeoutMS > 0
                  ? n.closeWithTimeout()
                  : n.closeWithoutTimeout();
              }),
              (n.focusContent = function () {
                return n.content && !n.contentHasFocus() && n.content.focus();
              }),
              (n.closeWithTimeout = function () {
                var e = Date.now() + n.props.closeTimeoutMS;
                n.setState({ beforeClose: !0, closesAt: e }, function () {
                  n.closeTimer = setTimeout(
                    n.closeWithoutTimeout,
                    n.state.closesAt - Date.now()
                  );
                });
              }),
              (n.closeWithoutTimeout = function () {
                n.setState(
                  {
                    beforeClose: !1,
                    isOpen: !1,
                    afterOpen: !1,
                    closesAt: null,
                  },
                  n.afterClose
                );
              }),
              (n.handleKeyDown = function (e) {
                9 === e.keyCode && (0, u.default)(n.content, e),
                  n.props.shouldCloseOnEsc &&
                    27 === e.keyCode &&
                    (e.stopPropagation(), n.requestClose(e));
              }),
              (n.handleOverlayOnClick = function (e) {
                null === n.shouldClose && (n.shouldClose = !0),
                  n.shouldClose &&
                    n.props.shouldCloseOnOverlayClick &&
                    (n.ownerHandlesClose()
                      ? n.requestClose(e)
                      : n.focusContent()),
                  (n.shouldClose = null),
                  (n.moveFromContentToOverlay = null);
              }),
              (n.handleOverlayOnMouseUp = function () {
                null === n.moveFromContentToOverlay && (n.shouldClose = !1);
              }),
              (n.handleContentOnMouseUp = function () {
                n.shouldClose = !1;
              }),
              (n.handleOverlayOnMouseDown = function (e) {
                n.props.shouldCloseOnOverlayClick ||
                  e.target != n.overlay ||
                  e.preventDefault(),
                  (n.moveFromContentToOverlay = !1);
              }),
              (n.handleContentOnClick = function () {
                n.shouldClose = !1;
              }),
              (n.handleContentOnMouseDown = function () {
                (n.shouldClose = !1), (n.moveFromContentToOverlay = !1);
              }),
              (n.requestClose = function (e) {
                return n.ownerHandlesClose() && n.props.onRequestClose(e);
              }),
              (n.ownerHandlesClose = function () {
                return n.props.onRequestClose;
              }),
              (n.shouldBeClosed = function () {
                return !n.state.isOpen && !n.state.beforeClose;
              }),
              (n.contentHasFocus = function () {
                return (
                  document.activeElement === n.content ||
                  n.content.contains(document.activeElement)
                );
              }),
              (n.buildClassName = function (e, t) {
                var o =
                    "object" === ("undefined" === typeof t ? "undefined" : r(t))
                      ? t
                      : {
                          base: _[e],
                          afterOpen: _[e] + "--after-open",
                          beforeClose: _[e] + "--before-close",
                        },
                  i = o.base;
                return (
                  n.state.afterOpen && (i = i + " " + o.afterOpen),
                  n.state.beforeClose && (i = i + " " + o.beforeClose),
                  "string" === typeof t && t ? i + " " + t : i
                );
              }),
              (n.ariaAttributes = function (e) {
                return Object.keys(e).reduce(function (t, n) {
                  return (t["aria-" + n] = e[n]), t;
                }, {});
              }),
              (n.state = { afterOpen: !1, beforeClose: !1 }),
              (n.shouldClose = null),
              (n.moveFromContentToOverlay = null),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isOpen &&
                    (this.setFocusAfterRender(!0), this.open());
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (e) {
                  !this.props.isOpen && e.isOpen
                    ? (this.setFocusAfterRender(!0), this.open())
                    : this.props.isOpen && !e.isOpen && this.close();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.focusAfterRender &&
                    (this.focusContent(), this.setFocusAfterRender(!1));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.afterClose(), clearTimeout(this.closeTimer);
                },
              },
              {
                key: "beforeOpen",
                value: function () {
                  var e = this.props,
                    t = e.appElement,
                    n = e.ariaHideApp,
                    o = e.bodyOpenClassName;
                  f.add(o), n && d.hide(t);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.className,
                    n = e.overlayClassName,
                    r = e.defaultStyles,
                    i = t ? {} : r.content,
                    a = n ? {} : r.overlay;
                  return this.shouldBeClosed()
                    ? null
                    : s.default.createElement(
                        "div",
                        {
                          ref: this.setOverlayRef,
                          className: this.buildClassName("overlay", n),
                          style: o({}, a, this.props.style.overlay),
                          onClick: this.handleOverlayOnClick,
                          onMouseDown: this.handleOverlayOnMouseDown,
                          onMouseUp: this.handleOverlayOnMouseUp,
                          "aria-modal": "true",
                        },
                        s.default.createElement(
                          "div",
                          o(
                            {
                              ref: this.setContentRef,
                              style: o({}, i, this.props.style.content),
                              className: this.buildClassName("content", t),
                              tabIndex: "-1",
                              onKeyDown: this.handleKeyDown,
                              onMouseDown: this.handleContentOnMouseDown,
                              onMouseUp: this.handleContentOnMouseUp,
                              onClick: this.handleContentOnClick,
                              role: this.props.role,
                              "aria-label": this.props.contentLabel,
                            },
                            this.ariaAttributes(this.props.aria || {})
                          ),
                          this.props.children
                        )
                      );
                },
              },
            ]),
            t
          );
        })(a.Component);
      (g.defaultProps = { style: { overlay: {}, content: {} } }),
        (g.propTypes = {
          isOpen: l.default.bool.isRequired,
          defaultStyles: l.default.shape({
            content: l.default.object,
            overlay: l.default.object,
          }),
          style: l.default.shape({
            content: l.default.object,
            overlay: l.default.object,
          }),
          className: l.default.oneOfType([l.default.string, l.default.object]),
          overlayClassName: l.default.oneOfType([
            l.default.string,
            l.default.object,
          ]),
          bodyOpenClassName: l.default.string,
          ariaHideApp: l.default.bool,
          appElement: l.default.instanceOf(m.default),
          onAfterOpen: l.default.func,
          onRequestClose: l.default.func,
          closeTimeoutMS: l.default.number,
          shouldFocusAfterRender: l.default.bool,
          shouldCloseOnOverlayClick: l.default.bool,
          shouldReturnFocusAfterClose: l.default.bool,
          role: l.default.string,
          contentLabel: l.default.string,
          aria: l.default.object,
          children: l.default.node,
          shouldCloseOnEsc: l.default.bool,
        }),
        (t.default = g),
        (e.exports = t.default);
    },
    952202: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertNodeList = s),
        (t.setElement = function (e) {
          var t = e;
          if ("string" === typeof t) {
            var n = document.querySelectorAll(t);
            s(n, t), (t = "length" in n ? n[0] : n);
          }
          return (a = t || a);
        }),
        (t.validateElement = l),
        (t.hide = function (e) {
          l(e) && (e || a).setAttribute("aria-hidden", "true");
        }),
        (t.show = function (e) {
          l(e) && (e || a).removeAttribute("aria-hidden");
        }),
        (t.documentNotReadyOrSSRTesting = function () {
          a = null;
        }),
        (t.resetForTesting = function () {
          a = null;
        });
      var o,
        r = n(851280),
        i = (o = r) && o.__esModule ? o : { default: o };
      var a = null;
      function s(e, t) {
        if (!e || !e.length)
          throw new Error(
            "react-modal: No elements were found for selector " + t + "."
          );
      }
      function l(e) {
        return (
          !(!e && !a) ||
          ((0, i.default)(
            !1,
            [
              "react-modal: App element is not defined.",
              "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
              "This is needed so screen readers don't see main content",
              "when modal is opened. It is not recommended, but you can opt-out",
              "by setting `ariaHideApp={false}`.",
            ].join(" ")
          ),
          !1)
        );
      }
    },
    740131: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add = function (e) {
          e.split(" ")
            .map(o.add)
            .forEach(function (e) {
              return document.body.classList.add(e);
            });
        }),
        (t.remove = function (e) {
          var t = o.get();
          e.split(" ")
            .map(o.remove)
            .filter(function (e) {
              return 0 === t[e];
            })
            .forEach(function (e) {
              return document.body.classList.remove(e);
            });
        });
      var o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(268787));
    },
    741259: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.handleBlur = c),
        (t.handleFocus = u),
        (t.markForFocusLater = function () {
          a.push(document.activeElement);
        }),
        (t.returnFocus = function () {
          var e = null;
          try {
            return void (0 !== a.length && (e = a.pop()).focus());
          } catch (t) {
            console.warn(
              [
                "You tried to return focus to",
                e,
                "but it is not in the DOM anymore",
              ].join(" ")
            );
          }
        }),
        (t.popWithoutFocus = function () {
          a.length > 0 && a.pop();
        }),
        (t.setupScopedFocus = function (e) {
          (s = e),
            window.addEventListener
              ? (window.addEventListener("blur", c, !1),
                document.addEventListener("focus", u, !0))
              : (window.attachEvent("onBlur", c),
                document.attachEvent("onFocus", u));
        }),
        (t.teardownScopedFocus = function () {
          (s = null),
            window.addEventListener
              ? (window.removeEventListener("blur", c),
                document.removeEventListener("focus", u))
              : (window.detachEvent("onBlur", c),
                document.detachEvent("onFocus", u));
        });
      var o,
        r = n(314072),
        i = (o = r) && o.__esModule ? o : { default: o };
      var a = [],
        s = null,
        l = !1;
      function c() {
        l = !0;
      }
      function u() {
        if (l) {
          if (((l = !1), !s)) return;
          setTimeout(function () {
            s.contains(document.activeElement) ||
              ((0, i.default)(s)[0] || s).focus();
          }, 0);
        }
      }
    },
    268787: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.get = function () {
          return n;
        }),
        (t.add = function (e) {
          n[e] || (n[e] = 0);
          return (n[e] += 1), e;
        }),
        (t.remove = function (e) {
          n[e] && (n[e] -= 1);
          return e;
        }),
        (t.totalCount = function () {
          return Object.keys(n).reduce(function (e, t) {
            return e + n[t];
          }, 0);
        });
      var n = {};
    },
    363486: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.canUseDOM = void 0);
      var o,
        r = n(401792);
      var i = ((o = r) && o.__esModule ? o : { default: o }).default,
        a = i.canUseDOM ? window.HTMLElement : {};
      t.canUseDOM = i.canUseDOM;
      t.default = a;
    },
    16303: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, i.default)(e);
          if (!n.length) return void t.preventDefault();
          var o,
            r = t.shiftKey,
            a = n[0],
            s = n[n.length - 1];
          if (e === document.activeElement) return;
          s !== document.activeElement || r || (o = a);
          a === document.activeElement && r && (o = s);
          if (o) return t.preventDefault(), void o.focus();
          var l = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
          if (
            null == l ||
            "Chrome" == l[1] ||
            null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)
          )
            return;
          var c = n.indexOf(document.activeElement);
          c > -1 && (c += r ? -1 : 1);
          t.preventDefault(), n[c].focus();
        });
      var o,
        r = n(314072),
        i = (o = r) && o.__esModule ? o : { default: o };
      e.exports = t.default;
    },
    314072: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return [].slice.call(e.querySelectorAll("*"), 0).filter(i);
        });
      var n = /input|select|textarea|button|object/;
      function o(e) {
        var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
        if (t && !e.innerHTML) return !0;
        var n = window.getComputedStyle(e);
        return t
          ? "visible" !== n.getPropertyValue("overflow")
          : "none" == n.getPropertyValue("display");
      }
      function r(e, t) {
        var r = e.nodeName.toLowerCase();
        return (
          ((n.test(r) && !e.disabled) || ("a" === r && e.href) || t) &&
          (function (e) {
            for (var t = e; t && t !== document.body; ) {
              if (o(t)) return !1;
              t = t.parentNode;
            }
            return !0;
          })(e)
        );
      }
      function i(e) {
        var t = e.getAttribute("tabindex");
        null === t && (t = void 0);
        var n = isNaN(t);
        return (n || t >= 0) && r(e, !n);
      }
      e.exports = t.default;
    },
    761403: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o,
        r = n(585325),
        i = (o = r) && o.__esModule ? o : { default: o };
      (t.default = i.default), (e.exports = t.default);
    },
    851280: function (e) {
      "use strict";
      e.exports = function () {};
    },
    208528: function (e, t, n) {
      "use strict";
      var o = n(827378);
      t.Z = function (e) {
        var t = o.useState(e),
          n = t[0],
          r = t[1];
        return [
          n,
          o.useCallback(
            function (e) {
              r(
                "boolean" === typeof e
                  ? e
                  : function (e) {
                      return !e;
                    }
              );
            },
            [r]
          ),
        ];
      };
    },
    893185: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], o = 0;
          o < e.rangeCount;
          o++
        )
          n.push(e.getRangeAt(o));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    87336: function (e, t, n) {
      "use strict";
      n.d(t, {
        V3: function () {
          return l;
        },
        dJ: function () {
          return c;
        },
        Fz: function () {
          return D;
        },
        Zp: function () {
          return s;
        },
        Wd: function () {
          return S;
        },
        Kx: function () {
          return R;
        },
        Wc: function () {
          return r;
        },
      });
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function r(e, t, n) {
        void 0 === n && (n = !0);
        return o(o({}, e), {
          decode: function () {
            for (var o = [], r = 0; r < arguments.length; r++)
              o[r] = arguments[r];
            var i = e.decode.apply(e, o);
            return void 0 === i || (n && null === i) ? t : i;
          },
        });
      }
      function i(e, t) {
        if (null == e) return e;
        if (0 === e.length && (!t || (t && "" !== e))) return null;
        var n = e instanceof Array ? e[0] : e;
        return null == n || t || "" !== n ? n : null;
      }
      function a(e) {
        var t = (function (e) {
          return null == e || e instanceof Array ? e : "" === e ? [] : [e];
        })(e);
        return t;
      }
      var s = {
          encode: function (e) {
            return null == e ? e : String(e);
          },
          decode: function (e) {
            var t = i(e, !0);
            return null == t ? t : String(t);
          },
        },
        l = {
          encode: function (e) {
            return e;
          },
          decode: a,
        },
        c = {
          encode: function (e) {
            return null == e ? e : e ? "1" : "0";
          },
          decode: function (e) {
            var t = i(e);
            return null == t ? t : "1" === t || ("0" !== t && null);
          },
        },
        u = n(468891),
        d = function () {
          return (
            (d =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            d.apply(this, arguments)
          );
        };
      '{}[],":'.split("").map(function (e) {
        return [e, encodeURIComponent(e)];
      });
      function p(e, t, n) {
        var o = (0, u.stringify)(e, n);
        n && n.transformSearchString && (o = n.transformSearchString(o));
        var r = o.length ? "?" + o : "",
          i = (0, u.parseUrl)(t.href || "").url + r;
        return d(d({}, t), {
          key: "" + Date.now(),
          href: i,
          search: r,
          query: e,
        });
      }
      function f(e, t) {
        for (var n = {}, o = 0, r = Object.keys(t); o < r.length; o++) {
          var i = r[o],
            a = t[i];
          e[i]
            ? (n[i] = e[i].encode(t[i]))
            : (n[i] = null == a ? a : String(a));
        }
        return n;
      }
      var m = n(827378),
        y = Object.prototype.hasOwnProperty;
      function h(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e === 1 / t
          : e !== e && t !== t;
      }
      function _(e, t, n) {
        var o, r;
        if (h(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (var s = 0; s < i.length; s++) {
          var l =
            null !==
              (r =
                null === (o = null === n || void 0 === n ? void 0 : n[i[s]]) ||
                void 0 === o
                  ? void 0
                  : o.equals) && void 0 !== r
              ? r
              : h;
          if (!y.call(t, i[s]) || !l(e[i[s]], t[i[s]])) return !1;
        }
        return !0;
      }
      function g(e, t, n) {
        void 0 === n && (n = _);
        var o =
          ((null == e.current || null == t) && e.current === t) ||
          !n(e.current, t);
        m.useEffect(
          function () {
            o && (e.current = t);
          },
          [e, t, o]
        );
      }
      function C(e) {
        return "object" === typeof e
          ? "undefined" !== typeof window
            ? e.search
            : (0, u.extract)("" + e.pathname + (e.search ? e.search : ""))
          : "";
      }
      function b(e, t, n, o) {
        switch ((void 0 === n && (n = "pushIn"), n)) {
          case "replace":
          case "push":
            return p(e, t, o);
          default:
            return (function (e, t, n) {
              var o = t.query || (0, u.parse)(t.search);
              return p(d(d({}, o), e), t, n);
            })(e, t, o);
        }
      }
      var v = m.createContext({
        location: {},
        getLocation: function () {
          return {};
        },
        setLocation: function () {},
      });
      function k() {
        return m.useContext(v);
      }
      function T(e) {
        var t = e.history,
          n = e.location,
          o = e.children,
          r = e.stringifyOptions,
          i = m.useRef(n);
        m.useEffect(
          function () {
            i.current = n;
          },
          [n]
        );
        var a = m.useCallback(
            function () {
              return i.current;
            },
            [i]
          ),
          s = m.useCallback(
            function (e, n) {
              (i.current = b(
                e,
                null == t || null == t.location ? i.current : t.location,
                n,
                r
              )),
                t &&
                  (function (e, t, n) {
                    switch ((void 0 === n && (n = "pushIn"), n)) {
                      case "pushIn":
                      case "push":
                        e.push(t);
                        break;
                      default:
                        e.replace(t);
                    }
                  })(t, i.current, n);
            },
            [t, r]
          );
        return m.createElement(
          v.Provider,
          { value: { location: n, getLocation: a, setLocation: s } },
          o
        );
      }
      var E = (function (e) {
        var t = e,
          n = (0, u.parse)(t || "");
        return function (e) {
          return t !== e && ((t = e), (n = (0, u.parse)(t))), n;
        };
      })();
      function A(e, t, n, o, r, i) {
        var a,
          s = !_(o.current, n),
          l = null !== (a = n.equals) && void 0 !== a ? a : _,
          c = E(C(e)),
          u = !_(r.current, c[t]),
          d = u ? c[t] : r.current;
        if (!u && !s && void 0 !== i.current) return i.current;
        var p = n.decode(d);
        return ((null == i.current || null == p) && i.current === p) ||
          !l(i.current, p)
          ? p
          : i.current;
      }
      var S = function (e, t) {
        void 0 === t && (t = s);
        var n = k(),
          o = n.location,
          r = n.getLocation,
          i = n.setLocation,
          a = E(C(o)),
          l = m.useRef(),
          c = m.useRef(t),
          u = m.useRef(),
          d = A(o, e, t, c, l, u);
        g(l, a[e]), g(c, t), g(u, d, t.equals);
        var p = m.useCallback(
          function (n, o) {
            var a, s;
            if ("function" === typeof n) {
              var d = A(r(), e, t, c, l, u);
              (u.current = d), (s = t.encode(n(d)));
            } else s = t.encode(n);
            i((((a = {})[e] = s), a), o);
          },
          [t, e, i, r]
        );
        return [d, p];
      };
      function O(e, t, n, o, r, i) {
        var a = !_(n.current, t),
          s = E(C(e));
        if (!(o.current !== s) && !a && void 0 !== r.current)
          return { encodedValues: r.current, decodedValues: i.current };
        for (
          var l = r.current || {},
            c = i.current || {},
            u = {},
            d = {},
            p = 0,
            f = Object.keys(t);
          p < f.length;
          p++
        ) {
          var m = f[p],
            y = t[m],
            h = void 0,
            g = void 0;
          !_(l[m], s[m]) || void 0 === l[m]
            ? ((h = s[m]), (g = y.decode(h)))
            : ((h = l[m]), (g = c[m])),
            (u[m] = h),
            (d[m] = g);
        }
        return {
          encodedValues: u,
          decodedValues: !_(i.current, d, t) ? d : i.current,
        };
      }
      var R = function (e) {
        var t = k(),
          n = t.location,
          o = t.getLocation,
          r = t.setLocation,
          i = E(C(n)),
          a = m.useRef(e),
          s = m.useRef(i),
          l = m.useRef(void 0),
          c = m.useRef({}),
          u = O(n, (e = _(e, a.current) ? a.current : e), a, s, l, c),
          d = u.encodedValues,
          p = u.decodedValues;
        return (
          g(s, i),
          g(a, e),
          g(l, d),
          g(c, p, function (t, n) {
            return _(t, n, e);
          }),
          [
            p,
            m.useCallback(
              function (t, n) {
                var i;
                if ("function" === typeof t) {
                  var u = O(o(), e, a, s, l, c).decodedValues;
                  (c.current = u), (i = f(e, t(u)));
                } else i = f(e, t);
                r(i, n);
              },
              [e, r, o]
            ),
          ]
        );
      };
      var w,
        P,
        I,
        j,
        N = function () {
          return (
            (N =
              Object.assign ||
              function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }),
            N.apply(this, arguments)
          );
        };
      function x(e) {
        if (e === I && null != j) return j;
        var t = {
          replace: function (t) {
            e.navigate(t.protocol + "//" + t.host + t.pathname + t.search, {
              replace: !0,
            });
          },
          push: function (t) {
            e.navigate(t.protocol + "//" + t.host + t.pathname + t.search, {
              replace: !1,
            });
          },
          get location() {
            return e.location;
          },
        };
        return (I = e), (j = t), t;
      }
      function L(e) {
        var t = void 0 === e ? {} : e,
          n = t.history,
          o = t.location;
        if (
          ("undefined" !== typeof window &&
            (n ||
              (n = (function (e) {
                if (e === w && null != P) return P;
                var t = {
                  replace: function (t) {
                    e.replaceState(
                      t.state,
                      "",
                      t.protocol + "//" + t.host + t.pathname + t.search
                    );
                  },
                  push: function (t) {
                    e.pushState(
                      t.state,
                      "",
                      t.protocol + "//" + t.host + t.pathname + t.search
                    );
                  },
                  get location() {
                    return window.location;
                  },
                };
                return (w = e), (P = t), t;
              })(window.history)),
            o || (o = window.location)),
          !o)
        )
          throw new Error(
            "\n        Could not read the location. Is the router wired up correctly?\n      "
          );
        return { history: n, location: o };
      }
      function D(e) {
        var t = e.children,
          n = e.ReactRouterRoute,
          o = e.reachHistory,
          r = e.history,
          i = e.location,
          a = e.stringifyOptions,
          s = m.useRef(a),
          l = !_(s.current, a) ? a : s.current;
        return (
          m.useEffect(
            function () {
              s.current = l;
            },
            [l]
          ),
          n
            ? m.createElement(n, null, function (e) {
                return m.createElement(T, N({ stringifyOptions: l }, L(e)), t);
              })
            : o
            ? m.createElement(
                T,
                N({ stringifyOptions: l }, L({ history: x(o), location: i })),
                t
              )
            : m.createElement(
                T,
                N({ stringifyOptions: l }, L({ history: r, location: i })),
                t
              )
        );
      }
    },
    327940: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return f;
        },
        f: function () {
          return d;
        },
      });
      var o = n(827378),
        r = n(822652),
        i = n(436616),
        a = n(285804),
        s = n(492296),
        l = n(711981);
      let c = (0, o.createContext)(null);
      function u() {
        let e = (0, o.useContext)(c);
        if (null === e) {
          let e = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, u), e);
        }
        return e;
      }
      function d() {
        let [e, t] = (0, o.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, o.useMemo)(
            () =>
              function (e) {
                let n = (0, l.z)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let n = t.slice(),
                            o = n.indexOf(e);
                          return -1 !== o && n.splice(o, 1), n;
                        })
                    )
                  ),
                  r = (0, o.useMemo)(
                    () => ({
                      register: n,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [n, e.slot, e.name, e.props]
                  );
                return o.createElement(c.Provider, { value: r }, e.children);
              },
            [t]
          ),
        ];
      }
      let p = (0, i.yV)(function (e, t) {
          let n = (0, r.M)(),
            { id: o = `headlessui-description-${n}`, ...l } = e,
            c = u(),
            d = (0, s.T)(t);
          (0, a.e)(() => c.register(o), [o, c.register]);
          let p = { ref: d, ...c.props, id: o };
          return (0,
          i.sY)({ ourProps: p, theirProps: l, slot: c.slot || {}, defaultTag: "p", name: c.name || "Description" });
        }),
        f = Object.assign(p, {});
    },
    754202: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return fe;
        },
      });
      var o = n(827378),
        r = n.t(o, 2),
        i = n(257953),
        a = n(436616),
        s = n(492296),
        l = n(507723),
        c = n(54518),
        u = n(822652),
        d = n(401074),
        p = n(914784),
        f = n(904818),
        m = n(711981),
        y = n(11119),
        h = n(266412),
        _ = n(237957),
        g = n(26822),
        C = n(996661),
        b = n(716620),
        v = n(984625);
      var k = ((e) => (
        (e[(e.None = 1)] = "None"),
        (e[(e.InitialFocus = 2)] = "InitialFocus"),
        (e[(e.TabLock = 4)] = "TabLock"),
        (e[(e.FocusLock = 8)] = "FocusLock"),
        (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
        (e[(e.All = 30)] = "All"),
        e
      ))(k || {});
      let T = (0, a.yV)(function (e, t) {
          let n = (0, o.useRef)(null),
            r = (0, s.T)(n, t),
            { initialFocus: l, containers: c, features: u = 30, ...k } = e;
          (0, d.H)() || (u = 1);
          let T = (0, _.i)(n);
          !(function ({ ownerDocument: e }, t) {
            let n = (0, o.useRef)(null);
            (0, g.O)(
              null == e ? void 0 : e.defaultView,
              "focusout",
              (e) => {
                t && (n.current || (n.current = e.target));
              },
              !0
            ),
              (0, b.q)(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) && (0, f.C5)(n.current),
                  (n.current = null));
              }, [t]);
            let r = (0, o.useRef)(!1);
            (0, o.useEffect)(
              () => (
                (r.current = !1),
                () => {
                  (r.current = !0),
                    (0, C.Y)(() => {
                      r.current && ((0, f.C5)(n.current), (n.current = null));
                    });
                }
              ),
              []
            );
          })({ ownerDocument: T }, Boolean(16 & u));
          let E = (function (
            { ownerDocument: e, container: t, initialFocus: n },
            r
          ) {
            let i = (0, o.useRef)(null),
              a = (0, h.t)();
            return (
              (0, b.q)(() => {
                if (!r) return;
                let o = t.current;
                o &&
                  (0, C.Y)(() => {
                    if (!a.current) return;
                    let t = null == e ? void 0 : e.activeElement;
                    if (null != n && n.current) {
                      if ((null == n ? void 0 : n.current) === t)
                        return void (i.current = t);
                    } else if (o.contains(t)) return void (i.current = t);
                    null != n && n.current
                      ? (0, f.C5)(n.current)
                      : (0, f.jA)(o, f.TO.First) === f.fE.Error &&
                        console.warn(
                          "There are no focusable elements inside the <FocusTrap />"
                        ),
                      (i.current = null == e ? void 0 : e.activeElement);
                  });
              }, [r]),
              i
            );
          })(
            { ownerDocument: T, container: n, initialFocus: l },
            Boolean(2 & u)
          );
          !(function (
            {
              ownerDocument: e,
              container: t,
              containers: n,
              previousActiveElement: o,
            },
            r
          ) {
            let i = (0, h.t)();
            (0, g.O)(
              null == e ? void 0 : e.defaultView,
              "focus",
              (e) => {
                if (!r || !i.current) return;
                let a = new Set(null == n ? void 0 : n.current);
                a.add(t);
                let s = o.current;
                if (!s) return;
                let l = e.target;
                l && l instanceof HTMLElement
                  ? A(a, l)
                    ? ((o.current = l), (0, f.C5)(l))
                    : (e.preventDefault(), e.stopPropagation(), (0, f.C5)(s))
                  : (0, f.C5)(o.current);
              },
              !0
            );
          })(
            {
              ownerDocument: T,
              container: n,
              containers: c,
              previousActiveElement: E,
            },
            Boolean(8 & u)
          );
          let S = (0, y.l)(),
            O = (0, m.z)((e) => {
              let t = n.current;
              t &&
                (0, i.E)(S.current, {
                  [y.N.Forwards]: () => {
                    (0, f.jA)(t, f.TO.First, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                  [y.N.Backwards]: () => {
                    (0, f.jA)(t, f.TO.Last, {
                      skipElements: [e.relatedTarget],
                    });
                  },
                });
            }),
            R = (0, v.G)(),
            w = (0, o.useRef)(!1),
            P = {
              ref: r,
              onKeyDown(e) {
                "Tab" == e.key &&
                  ((w.current = !0),
                  R.requestAnimationFrame(() => {
                    w.current = !1;
                  }));
              },
              onBlur(e) {
                let t = new Set(null == c ? void 0 : c.current);
                t.add(n);
                let o = e.relatedTarget;
                o instanceof HTMLElement &&
                  "true" !== o.dataset.headlessuiFocusGuard &&
                  (A(t, o) ||
                    (w.current
                      ? (0, f.jA)(
                          n.current,
                          (0, i.E)(S.current, {
                            [y.N.Forwards]: () => f.TO.Next,
                            [y.N.Backwards]: () => f.TO.Previous,
                          }) | f.TO.WrapAround,
                          { relativeTo: e.target }
                        )
                      : e.target instanceof HTMLElement &&
                        (0, f.C5)(e.target)));
              },
            };
          return o.createElement(
            o.Fragment,
            null,
            Boolean(4 & u) &&
              o.createElement(p._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: O,
                features: p.A.Focusable,
              }),
            (0, a.sY)({
              ourProps: P,
              theirProps: k,
              defaultTag: "div",
              name: "FocusTrap",
            }),
            Boolean(4 & u) &&
              o.createElement(p._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: O,
                features: p.A.Focusable,
              })
          );
        }),
        E = Object.assign(T, { features: k });
      function A(e, t) {
        var n;
        for (let o of e)
          if (null != (n = o.current) && n.contains(t)) return !0;
        return !1;
      }
      var S = n(791084),
        O = n(949765),
        R = n(327940),
        w = n(901635),
        P = n(285804);
      let I = (0, o.createContext)(() => {});
      I.displayName = "StackContext";
      var j,
        N =
          (((j = N || {})[(j.Add = 0)] = "Add"),
          (j[(j.Remove = 1)] = "Remove"),
          j);
      function x({
        children: e,
        onUpdate: t,
        type: n,
        element: r,
        enabled: i,
      }) {
        let a = (0, o.useContext)(I),
          s = (0, m.z)((...e) => {
            null == t || t(...e), a(...e);
          });
        return (
          (0, P.e)(() => {
            let e = void 0 === i || !0 === i;
            return (
              e && s(0, n, r),
              () => {
                e && s(1, n, r);
              }
            );
          }, [s, n, r, i]),
          o.createElement(I.Provider, { value: s }, e)
        );
      }
      var L = n(116490);
      const D =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        { useState: M, useEffect: U, useLayoutEffect: F, useDebugValue: G } = r;
      function B(e) {
        const t = e.getSnapshot,
          n = e.value;
        try {
          const e = t();
          return !D(n, e);
        } catch {
          return !0;
        }
      }
      const V = !(
          "undefined" != typeof window &&
          "undefined" != typeof window.document &&
          "undefined" != typeof window.document.createElement
        )
          ? function (e, t, n) {
              return t();
            }
          : function (e, t, n) {
              const o = t(),
                [{ inst: r }, i] = M({ inst: { value: o, getSnapshot: t } });
              return (
                F(() => {
                  (r.value = o), (r.getSnapshot = t), B(r) && i({ inst: r });
                }, [e, o, t]),
                U(
                  () => (
                    B(r) && i({ inst: r }),
                    e(() => {
                      B(r) && i({ inst: r });
                    })
                  ),
                  [e]
                ),
                G(o),
                o
              );
            },
        H = "useSyncExternalStore" in r ? r.useSyncExternalStore : V;
      var q = n(271907);
      function W() {
        let e;
        return {
          before({ doc: t }) {
            var n;
            let o = t.documentElement;
            e =
              (null != (n = t.defaultView) ? n : window).innerWidth -
              o.clientWidth;
          },
          after({ doc: t, d: n }) {
            let o = t.documentElement,
              r = o.clientWidth - o.offsetWidth,
              i = e - r;
            n.style(o, "paddingRight", `${i}px`);
          },
        };
      }
      var z = n(371218);
      function Q() {
        if (!(0, z.gn)()) return {};
        let e;
        return {
          before() {
            e = window.pageYOffset;
          },
          after({ doc: t, d: n, meta: o }) {
            function r(e) {
              return o.containers
                .flatMap((e) => e())
                .some((t) => t.contains(e));
            }
            n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
            let i = null;
            n.addEventListener(
              t,
              "click",
              (e) => {
                if (e.target instanceof HTMLElement)
                  try {
                    let n = e.target.closest("a");
                    if (!n) return;
                    let { hash: o } = new URL(n.href),
                      a = t.querySelector(o);
                    a && !r(a) && (i = a);
                  } catch {}
              },
              !0
            ),
              n.addEventListener(
                t,
                "touchmove",
                (e) => {
                  e.target instanceof HTMLElement &&
                    !r(e.target) &&
                    e.preventDefault();
                },
                { passive: !1 }
              ),
              n.add(() => {
                window.scrollTo(0, window.pageYOffset + e),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          },
        };
      }
      function Y(e) {
        let t = {};
        for (let n of e) Object.assign(t, n(t));
        return t;
      }
      let Z = (function (e, t) {
        let n = e(),
          o = new Set();
        return {
          getSnapshot: () => n,
          subscribe: (e) => (o.add(e), () => o.delete(e)),
          dispatch(e, ...r) {
            let i = t[e].call(n, ...r);
            i && ((n = i), o.forEach((e) => e()));
          },
        };
      })(() => new Map(), {
        PUSH(e, t) {
          var n;
          let o =
            null != (n = this.get(e))
              ? n
              : { doc: e, count: 0, d: (0, q.k)(), meta: new Set() };
          return o.count++, o.meta.add(t), this.set(e, o), this;
        },
        POP(e, t) {
          let n = this.get(e);
          return n && (n.count--, n.meta.delete(t)), this;
        },
        SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
          let o = { doc: e, d: t, meta: Y(n) },
            r = [
              Q(),
              W(),
              {
                before({ doc: e, d: t }) {
                  t.style(e.documentElement, "overflow", "hidden");
                },
              },
            ];
          r.forEach(({ before: e }) => (null == e ? void 0 : e(o))),
            r.forEach(({ after: e }) => (null == e ? void 0 : e(o)));
        },
        SCROLL_ALLOW({ d: e }) {
          e.dispose();
        },
        TEARDOWN({ doc: e }) {
          this.delete(e);
        },
      });
      function K(e, t, n) {
        let o = (function (e) {
            return H(e.subscribe, e.getSnapshot, e.getSnapshot);
          })(Z),
          r = e ? o.get(e) : void 0,
          i = !!r && r.count > 0;
        return (
          (0, P.e)(() => {
            if (e && t)
              return Z.dispatch("PUSH", e, n), () => Z.dispatch("POP", e, n);
          }, [t, e]),
          i
        );
      }
      Z.subscribe(() => {
        let e = Z.getSnapshot(),
          t = new Map();
        for (let [n] of e) t.set(n, n.documentElement.style.overflow);
        for (let n of e.values()) {
          let e = "hidden" === t.get(n.doc),
            o = 0 !== n.count;
          ((o && !e) || (!o && e)) &&
            Z.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            0 === n.count && Z.dispatch("TEARDOWN", n);
        }
      });
      let $ = new Map(),
        J = new Map();
      function X(e, t = !0) {
        (0, P.e)(() => {
          var n;
          if (!t) return;
          let o = "function" == typeof e ? e() : e.current;
          if (!o) return;
          let r = null != (n = J.get(o)) ? n : 0;
          return (
            J.set(o, r + 1),
            0 !== r ||
              ($.set(o, {
                "aria-hidden": o.getAttribute("aria-hidden"),
                inert: o.inert,
              }),
              o.setAttribute("aria-hidden", "true"),
              (o.inert = !0)),
            function () {
              var e;
              if (!o) return;
              let t = null != (e = J.get(o)) ? e : 1;
              if ((1 === t ? J.delete(o) : J.set(o, t - 1), 1 !== t)) return;
              let n = $.get(o);
              n &&
                (null === n["aria-hidden"]
                  ? o.removeAttribute("aria-hidden")
                  : o.setAttribute("aria-hidden", n["aria-hidden"]),
                (o.inert = n.inert),
                $.delete(o));
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
      let oe = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        re = (0, o.createContext)(null);
      function ie(e) {
        let t = (0, o.useContext)(re);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Dialog /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ie), t);
        }
        return t;
      }
      function ae(e, t) {
        return (0, i.E)(t.type, oe, e, t);
      }
      re.displayName = "DialogContext";
      let se = a.AN.RenderStrategy | a.AN.Static;
      let le = (0, a.yV)(function (e, t) {
          let n = (0, u.M)(),
            {
              id: r = `headlessui-dialog-${n}`,
              open: c,
              onClose: f,
              initialFocus: y,
              __demoMode: h = !1,
              ...C
            } = e,
            [b, v] = (0, o.useState)(0),
            k = (0, w.oJ)();
          void 0 === c && null !== k && (c = (k & w.ZM.Open) === w.ZM.Open);
          let T = (0, o.useRef)(new Set()),
            A = (0, o.useRef)(null),
            P = (0, s.T)(A, t),
            I = (0, o.useRef)(null),
            j = (0, _.i)(A),
            D = e.hasOwnProperty("open") || null !== k,
            M = e.hasOwnProperty("onClose");
          if (!D && !M)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!D)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!M)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if ("boolean" != typeof c)
            throw new Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`
            );
          if ("function" != typeof f)
            throw new Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${f}`
            );
          let U = c ? 0 : 1,
            [F, G] = (0, o.useReducer)(ae, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, o.createRef)(),
            }),
            B = (0, m.z)(() => f(!1)),
            V = (0, m.z)((e) => G({ type: 0, id: e })),
            H = !!(0, d.H)() && !h && 0 === U,
            q = b > 1,
            W = null !== (0, o.useContext)(re),
            z = q ? "parent" : "leaf",
            Q = null !== k && (k & w.ZM.Closing) === w.ZM.Closing,
            Y = !W && !Q && H,
            Z = (0, o.useCallback)(() => {
              var e, t;
              return null !=
                (t = Array.from(
                  null !=
                    (e = null == j ? void 0 : j.querySelectorAll("body > *"))
                    ? e
                    : []
                ).find(
                  (e) =>
                    "headlessui-portal-root" !== e.id &&
                    e.contains(I.current) &&
                    e instanceof HTMLElement
                ))
                ? t
                : null;
            }, [I]);
          X(Z, Y);
          let $ = !!q || H,
            J = (0, o.useCallback)(() => {
              var e, t;
              return null !=
                (t = Array.from(
                  null !=
                    (e =
                      null == j
                        ? void 0
                        : j.querySelectorAll("[data-headlessui-portal]"))
                    ? e
                    : []
                ).find(
                  (e) => e.contains(I.current) && e instanceof HTMLElement
                ))
                ? t
                : null;
            }, [I]);
          X(J, $);
          let ee = (0, m.z)(() => {
              var e, t;
              return [
                ...Array.from(
                  null !=
                    (e =
                      null == j
                        ? void 0
                        : j.querySelectorAll(
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
                      e.contains(I.current) ||
                      (F.panelRef.current && e.contains(F.panelRef.current))
                    )
                ),
                null != (t = F.panelRef.current) ? t : A.current,
              ];
            }),
            te = !(!H || q);
          (0, L.O)(() => ee(), B, te);
          let ne = !(q || 0 !== U);
          (0, g.O)(null == j ? void 0 : j.defaultView, "keydown", (e) => {
            ne &&
              (e.defaultPrevented ||
                (e.key === l.R.Escape &&
                  (e.preventDefault(), e.stopPropagation(), B())));
          }),
            (function (e, t, n = () => [document.body]) {
              K(e, t, (e) => {
                var t;
                return {
                  containers: [...(null != (t = e.containers) ? t : []), n],
                };
              });
            })(j, !(Q || 0 !== U || W), ee),
            (0, o.useEffect)(() => {
              if (0 !== U || !A.current) return;
              let e = new ResizeObserver((e) => {
                for (let t of e) {
                  let e = t.target.getBoundingClientRect();
                  0 === e.x &&
                    0 === e.y &&
                    0 === e.width &&
                    0 === e.height &&
                    B();
                }
              });
              return e.observe(A.current), () => e.disconnect();
            }, [U, A, B]);
          let [oe, ie] = (0, R.f)(),
            le = (0, o.useMemo)(
              () => [{ dialogState: U, close: B, setTitleId: V }, F],
              [U, F, B, V]
            ),
            ce = (0, o.useMemo)(() => ({ open: 0 === U }), [U]),
            ue = {
              ref: P,
              id: r,
              role: "dialog",
              "aria-modal": 0 === U || void 0,
              "aria-labelledby": F.titleId,
              "aria-describedby": oe,
            };
          return o.createElement(
            x,
            {
              type: "Dialog",
              enabled: 0 === U,
              element: A,
              onUpdate: (0, m.z)((e, t, n) => {
                "Dialog" === t &&
                  (0, i.E)(e, {
                    [N.Add]() {
                      T.current.add(n), v((e) => e + 1);
                    },
                    [N.Remove]() {
                      T.current.add(n), v((e) => e - 1);
                    },
                  });
              }),
            },
            o.createElement(
              O.O,
              { force: !0 },
              o.createElement(
                S.h,
                null,
                o.createElement(
                  re.Provider,
                  { value: le },
                  o.createElement(
                    S.h.Group,
                    { target: A },
                    o.createElement(
                      O.O,
                      { force: !1 },
                      o.createElement(
                        ie,
                        { slot: ce, name: "Dialog.Description" },
                        o.createElement(
                          E,
                          {
                            initialFocus: y,
                            containers: T,
                            features: H
                              ? (0, i.E)(z, {
                                  parent: E.features.RestoreFocus,
                                  leaf: E.features.All & ~E.features.FocusLock,
                                })
                              : E.features.None,
                          },
                          (0, a.sY)({
                            ourProps: ue,
                            theirProps: C,
                            slot: ce,
                            defaultTag: "div",
                            features: se,
                            visible: 0 === U,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            o.createElement(p._, { features: p.A.Hidden, ref: I })
          );
        }),
        ce = (0, a.yV)(function (e, t) {
          let n = (0, u.M)(),
            { id: r = `headlessui-dialog-backdrop-${n}`, ...i } = e,
            [{ dialogState: l }, c] = ie("Dialog.Backdrop"),
            d = (0, s.T)(t);
          (0, o.useEffect)(() => {
            if (null === c.panelRef.current)
              throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
              );
          }, [c.panelRef]);
          let p = (0, o.useMemo)(() => ({ open: 0 === l }), [l]);
          return o.createElement(
            O.O,
            { force: !0 },
            o.createElement(
              S.h,
              null,
              (0, a.sY)({
                ourProps: { ref: d, id: r, "aria-hidden": !0 },
                theirProps: i,
                slot: p,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          );
        }),
        ue = (0, a.yV)(function (e, t) {
          let n = (0, u.M)(),
            { id: r = `headlessui-dialog-panel-${n}`, ...i } = e,
            [{ dialogState: l }, c] = ie("Dialog.Panel"),
            d = (0, s.T)(t, c.panelRef),
            p = (0, o.useMemo)(() => ({ open: 0 === l }), [l]),
            f = (0, m.z)((e) => {
              e.stopPropagation();
            });
          return (0,
          a.sY)({ ourProps: { ref: d, id: r, onClick: f }, theirProps: i, slot: p, defaultTag: "div", name: "Dialog.Panel" });
        }),
        de = (0, a.yV)(function (e, t) {
          let n = (0, u.M)(),
            { id: r = `headlessui-dialog-overlay-${n}`, ...i } = e,
            [{ dialogState: l, close: d }] = ie("Dialog.Overlay"),
            p = (0, s.T)(t),
            f = (0, m.z)((e) => {
              if (e.target === e.currentTarget) {
                if ((0, c.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), d();
              }
            }),
            y = (0, o.useMemo)(() => ({ open: 0 === l }), [l]);
          return (0,
          a.sY)({ ourProps: { ref: p, id: r, "aria-hidden": !0, onClick: f }, theirProps: i, slot: y, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        pe = (0, a.yV)(function (e, t) {
          let n = (0, u.M)(),
            { id: r = `headlessui-dialog-title-${n}`, ...i } = e,
            [{ dialogState: l, setTitleId: c }] = ie("Dialog.Title"),
            d = (0, s.T)(t);
          (0, o.useEffect)(() => (c(r), () => c(null)), [r, c]);
          let p = (0, o.useMemo)(() => ({ open: 0 === l }), [l]);
          return (0,
          a.sY)({ ourProps: { ref: d, id: r }, theirProps: i, slot: p, defaultTag: "h2", name: "Dialog.Title" });
        }),
        fe = Object.assign(le, {
          Backdrop: ce,
          Panel: ue,
          Overlay: de,
          Title: pe,
          Description: R.d,
        });
    },
    26822: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return i;
        },
      });
      var o = n(827378),
        r = n(437349);
      function i(e, t, n, i) {
        let a = (0, r.E)(n);
        (0, o.useEffect)(() => {
          function n(e) {
            a.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, n, i),
            () => e.removeEventListener(t, n, i)
          );
        }, [e, t, i]);
      }
    },
    11119: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return a;
        },
        l: function () {
          return s;
        },
      });
      var o = n(827378),
        r = n(437349);
      var i,
        a =
          (((i = a || {})[(i.Forwards = 0)] = "Forwards"),
          (i[(i.Backwards = 1)] = "Backwards"),
          i);
      function s() {
        let e = (0, o.useRef)(0);
        return (
          (function (e, t, n) {
            let i = (0, r.E)(t);
            (0, o.useEffect)(() => {
              function t(e) {
                i.current(e);
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
      "use strict";
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var o = n(827378),
        r = n(711981);
      function i(e, t) {
        let n = (0, o.useRef)([]),
          i = (0, r.z)(e);
        (0, o.useEffect)(() => {
          let e = [...n.current];
          for (let [o, r] of t.entries())
            if (n.current[o] !== r) {
              let o = i(t, e);
              return (n.current = t), o;
            }
        }, [i, ...t]);
      }
    },
    371218: function (e, t, n) {
      "use strict";
      function o() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function r() {
        return o() || /Android/gi.test(window.navigator.userAgent);
      }
      n.d(t, {
        gn: function () {
          return o;
        },
        tq: function () {
          return r;
        },
      });
    },
    721006: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"action":{"type":"link","path":"layouttest"},"name":"Layouttest","type":"tool"},{"action":{"type":"link","path":"tasks/audit"},"name":"Tasks Audit","type":"tool"},{"action":{"type":"link","path":"demo"},"name":"Demos","description":"Play around with different task types.","type":"demo"},{"action":{"type":"link","path":"mayForce/chat-demo"},"name":"Chat Task Demo","description":"Play around with Chat Task capabilities.","type":"demo"},{"action":{"type":"link","path":"gpt_demo"},"name":"Relevance Pipeline Demo (GPT-3)","description":"Shows off our unique human & ML pipeline, powered by GPT-3.","type":"demo"},{"action":{"type":"link","path":"txn_demo"},"name":"Txn Demo","type":"tool"},{"action":{"type":"link","path":"gpt_demo_search"},"name":"Search Relevance Demo (GPT-3)","description":"A fancy search relevance demo, powered by GPT-3.","type":"demo"},{"action":{"type":"link","path":"embedding"},"name":"Embedding","type":"tool"},{"action":{"type":"link","path":"edit_scenario"},"name":"Edit Scenario","type":"tool"},{"action":{"type":"link","path":"create_scenario"},"name":"Create Scenario","type":"tool"},{"action":{"type":"link","path":"text_collection_demo"},"name":"Text Collection Demo","type":"tool"},{"action":{"type":"link","path":"ml_hil_categorization_demo"},"name":"Ml Hil Categorization Demo","type":"tool"},{"action":{"type":"link","path":"project_response_viewer"},"name":"Project Response Viewer","type":"tool"},{"action":{"type":"link","path":"audio_demo"},"name":"Audio Demo","type":"tool"},{"action":{"type":"link","path":"projects/fssl"},"name":"Projects Fssl","type":"tool"},{"action":{"type":"link","path":"catalog_ml_demo"},"name":"Catalog Ml Demo","type":"tool"},{"action":{"type":"link","path":"projects/tc_gwf"},"name":"Projects Tc Gwf","type":"tool"},{"action":{"type":"link","path":""},"name":"","type":"tool"},{"action":{"type":"link","path":"scripts"},"name":"Scripts","type":"tool"},{"action":{"type":"link","path":"dynamic_corp"},"name":"Dynamic Corp","type":"tool"},{"action":{"type":"link","path":"search"},"name":"Search","type":"tool"},{"action":{"type":"link","path":"compare_attempts"},"name":"Compare Attempts","type":"tool"},{"action":{"type":"link","path":"eng/transform_s3_url"},"name":"Transform S3 URL","description":"From S3 to Cloudfront URL, which can be accessed without explicit AWS credentials.","type":"tool"},{"action":{"type":"link","path":"eng/random_configs"},"name":"Eng Random Configs","type":"tool"},{"action":{"type":"link","path":"task_actions"},"name":"Task Actions","type":"tool"},{"action":{"type":"link","path":"pipeline_stage_actions"},"name":"Pipeline Stage Actions","type":"tool"},{"action":{"type":"link","path":"user_actions"},"name":"User Actions","type":"tool"},{"action":{"type":"link","path":"batch_actions"},"name":"Batch Actions","type":"tool"},{"action":{"type":"link","path":"scalers/new"},"name":"Create Tasker","description":"Create a new tasker woo!","type":"tool"},{"action":{"type":"link","path":"scalers/email"},"name":"Email Taskers","description":"Blast an email to taskers (with filtering criteria).","type":"tool"},{"action":{"type":"link","path":"questers/email"},"name":"Email Questers","description":"Blast an email to questers (with filtering criteria).","type":"tool"},{"action":{"type":"link","path":"scalers/new_project"},"name":"Create New Project","type":"tool"},{"action":{"type":"link","path":"scalers/announcements"},"name":"Announcements","description":"Create an announcement that will show up in tasker\'s dashboard.","type":"tool"},{"action":{"type":"link","path":"scalers/referrals"},"name":"Add Referral","description":"Add a referral object between two taskers.","type":"tool"},{"action":{"type":"link","path":"scalers/recording"},"name":"Scalers Recording","type":"tool"},{"action":{"type":"link","path":"task_type_manager"},"name":"Task Type Configs","description":"Configure properties for a specific task type (e.g. levels of review, payouts).","type":"tool"},{"action":{"type":"link","path":"rapid/rapidometer"},"name":"Rapidometer","description":"Rapidometer overview and configuration page","type":"tool"},{"action":{"type":"link","path":"rapid/quality-dashboard"},"name":"Rapid Quality Dashboard","description":"Rapid quality dashboard","type":"tool"},{"action":{"type":"link","path":"rapid/rapidvideostitchingtools"},"name":"Rapid Video Stitching Tools","description":"Rapid-specific tools for video stitching","type":"tool"},{"action":{"type":"link","path":"rapid"},"name":"Rapid","type":"tool"},{"action":{"type":"link","path":"sla"},"name":"Sla","type":"tool"},{"action":{"type":"link","path":"slasim"},"name":"Slasim","type":"tool"},{"action":{"type":"link","path":"stats/batch"},"name":"Stats Batch","type":"tool"},{"action":{"type":"link","path":"stats/tasker_confidence_stats"},"name":"Stats Tasker Confidence Stats","type":"tool"},{"action":{"type":"link","path":"stats/reviewer_confidence_stats"},"name":"Stats Reviewer Confidence Stats","type":"tool"},{"action":{"type":"link","path":"bpo/needs_corp"},"name":"Needs Corp","description":"Tools for tasks in needs corp (aka L10 review). Can also quarantine tasks.","type":"tool"},{"action":{"type":"link","path":"bpo/recall_tasks"},"name":"Recall Tasks","description":"Recall a list of completed subtasks into review mode or subtask state.","type":"tool"},{"action":{"type":"link","path":"bpo/recall_tasks_V3"},"name":"Recall Tasks V3","description":"Recall a list of completed tasks into review mode or task state V3.","type":"tool"},{"action":{"type":"link","path":"bpo/demote_scalers"},"name":"Bpo Demote Scalers","type":"tool"},{"action":{"type":"link","path":"bpo/mass_permissioning"},"name":"BPO Permissions","description":"A page to take actions on scalers, and specifically for an entire BPO.","type":"tool"},{"action":{"type":"link","path":"projects/metrics"},"name":"Project Metrics","description":"Quickly view and compare project success metrics and understand current state.","type":"tool"},{"action":{"type":"link","path":"projects/label_hints"},"name":"Projects Label Hints","type":"tool"},{"action":{"type":"link","path":"projects/benchmarks"},"name":"Projects Benchmarks","type":"tool"},{"action":{"type":"link","path":"projects/bulk_tag_benchmarks"},"name":"Projects Bulk Tag Benchmarks","type":"tool"},{"action":{"type":"link","path":"projects/imbe_bulk_tag_benchmarks"},"name":"Imbe Bulk Tag Benchmarks","type":"tool"},{"action":{"type":"link","path":"projects/flamingo_actions"},"name":"Projects Flamingo Actions","type":"tool"},{"action":{"type":"link","path":"projects/categorization_hints"},"name":"Projects Categorization Hints","type":"tool"},{"action":{"type":"link","path":"projects/categorization_thresholds"},"name":"Projects Categorization Thresholds","type":"tool"},{"action":{"type":"link","path":"projects/bulk_create_benchmarks"},"name":"Projects Bulk Create Benchmarks","type":"tool"},{"action":{"type":"link","path":"benchmarks/create_parameterized"},"name":"Benchmarks Create Parameterized","type":"tool"},{"action":{"type":"link","path":"benchmarks/recommend"},"name":"Benchmarks Recommend","type":"tool"},{"action":{"type":"link","path":"benchmarks/parameterize"},"name":"Benchmarks Parameterize","type":"tool"},{"action":{"type":"link","path":"courses"},"name":"Training Courses","description":"A list of courses, and the ability to activate/deactivate or add a course.","type":"tool"},{"action":{"type":"link","path":"remedial_courses"},"name":"Remedial Courses","type":"tool"},{"action":{"type":"link","path":"backtest_pay"},"name":"Backtest Pay","type":"tool"},{"action":{"type":"link","path":"geocontext"},"name":"Geocontext","type":"tool"},{"action":{"type":"link","path":"speed_view_audits"},"name":"Speed View Audits","type":"tool"},{"action":{"type":"link","path":"course_utils"},"name":"Course Utils","description":"Search for (2D single-frame & semseg) subtasks that contain a specific label.","type":"tool"},{"action":{"type":"link","path":"permissions"},"name":"Permissions","type":"tool"},{"action":{"type":"link","path":"add_corp_user"},"name":"Add Corp User","type":"tool"},{"action":{"type":"link","path":"assign_benchmark"},"name":"Assign Benchmark","type":"tool"},{"action":{"type":"link","path":"increase_priority"},"name":"Increase Queue Priortiy","description":"Increase the priority of a batch of subtasks.","type":"tool"},{"action":{"type":"link","path":"queue_priority"},"name":"Queue Priority","type":"tool"},{"action":{"type":"link","path":"update_instructions"},"name":"Update instructions","description":"Specifically for projects where instructions are set at the task level.","type":"tool"},{"action":{"type":"link","path":"lidar_labs/new"},"name":"Lidar Labs New","type":"tool"},{"action":{"type":"link","path":"lidar_labs/monitor"},"name":"Lidar Labs Monitor","type":"tool"},{"action":{"type":"link","path":"lidar_labs"},"name":"Lidar Labs","type":"tool"},{"action":{"type":"link","path":"instruction_taxonomies"},"name":"Instruction Taxonomies","type":"tool"},{"action":{"type":"link","path":"bonuses"},"name":"Bonuses","type":"tool"},{"action":{"type":"link","path":"benchmark_audit"},"name":"Benchmark Audit","type":"tool"},{"action":{"type":"link","path":"upload_files_to_s3"},"name":"Upload Files To S3","type":"tool"},{"action":{"type":"link","path":"v2/upload_files_to_s3"},"name":"V2 Upload Files To S3","type":"tool"},{"action":{"type":"link","path":"unexclude_workers"},"name":"Unexclude Workers","type":"tool"},{"action":{"type":"link","path":"tune_2d_linting"},"name":"Tune 2d Linting","type":"tool"},{"action":{"type":"link","path":"trainee_assignments"},"name":"Trainees","description":"","type":"tool"},{"action":{"type":"link","path":"customer_dashboard"},"name":"Customer Dashboard","type":"tool"},{"action":{"type":"link","path":"dragonfruit_utils"},"name":"Dragonfruit Utils","type":"tool"},{"action":{"type":"link","path":"cherry_catalog_utils"},"name":"Cherry Catalog Utils","type":"tool"},{"action":{"type":"link","path":"melon_audio_utils"},"name":"Melon Audio Utils","type":"tool"},{"action":{"type":"link","path":"imbe_utils"},"name":"Imbe Utils","type":"tool"},{"action":{"type":"link","path":"cherry_inf_utils"},"name":"Cherry Inf Utils","type":"tool"},{"action":{"type":"link","path":"bee_tts_utils"},"name":"Bee TTS Utils","type":"tool"},{"action":{"type":"link","path":"bee_rlhf_utils"},"name":"Bee RLHF Utils","type":"tool"},{"action":{"type":"link","path":"ops/bulba_generic_project"},"name":"Bulba Generic Project","type":"tool"},{"action":{"type":"link","path":"tasker-leaderboard"},"name":"Tasker-leaderboard","type":"tool"},{"action":{"type":"link","path":"mini_lidar_assignment"},"name":"Mini Lidar Assignment","type":"tool"},{"action":{"type":"link","path":"ner/view_audit_errors"},"name":"Ner View Audit Errors","type":"tool"},{"action":{"type":"link","path":"unassign_bot_claims"},"name":"Unassign Bot Claims","type":"tool"},{"action":{"type":"link","path":"undisable"},"name":"Undisable Tasker","description":"Re-enable a tasker who got disabled because of poor attempts.","type":"tool"},{"action":{"type":"link","path":"scenarios"},"name":"Scenarios","description":"Links to scenarios on remotasks, and the ability to convert to benchmarks.","type":"tool"},{"action":{"type":"link","path":"speed_audit"},"name":"Speed Audit","type":"tool"},{"action":{"type":"link","path":"ops_utils"},"name":"Ops Utils","description":"","type":"tool"},{"action":{"type":"link","path":"proxy_fetch"},"name":"Proxy Fetch","type":"tool"},{"action":{"type":"link","path":"qa_hub"},"name":"Qa Hub","type":"tool"},{"action":{"type":"link","path":"quality_lab"},"name":"Quality Lab","type":"tool"},{"action":{"type":"link","path":"rewards"},"name":"Add Reward","description":"Add reward objects for a tasker.","type":"tool"},{"action":{"type":"link","path":"2d_tasks"},"name":"2d Tasks","type":"tool"},{"action":{"type":"link","path":"cat_consensus_tweaker"},"name":"Cat Consensus Tweaker","type":"tool"},{"action":{"type":"link","path":"2d_linting"},"name":"2D Linters","description":"Manage 2D linter configs.","type":"tool"},{"action":{"type":"link","path":"lidarlinting"},"name":"Lidar Linters","description":"Manage 3D lidar linter configs.","type":"tool"},{"action":{"type":"link","path":"lidarlitelinting"},"name":"Lidarlitelinting","type":"tool"},{"action":{"type":"link","path":"linter_config_docs"},"name":"Linter Config Docs","type":"tool"},{"action":{"type":"link","path":"scenario_dash"},"name":"Scenario Dash","description":"","type":"tool"},{"action":{"type":"link","path":"supply_lever_dash"},"name":"Supply Lever Dash","description":"","type":"tool"},{"action":{"type":"link","path":"qir_signal"},"name":"Qir Signal","type":"tool"},{"action":{"type":"link","path":"supply_project_metric_dash"},"name":"Supply Metrics Dash","description":"","type":"tool"},{"action":{"type":"link","path":"edit_corp_permission_roles"},"name":"Edit Corp Permission Roles","type":"tool"},{"action":{"type":"link","path":"contracts/contract_editor"},"name":"Contracts Contract Editor","type":"tool"},{"action":{"type":"link","path":"contracts/list_contracts"},"name":"Contracts List Contracts","type":"tool"},{"action":{"type":"link","path":"snowflake_status"},"name":"Snowflake Status","description":"Shows how far behind Snowflake is from the DB per object type.","type":"tool"},{"action":{"type":"link","path":"demos/pipeline_viewer"},"name":"Demos Pipeline Viewer","type":"tool"},{"action":{"type":"link","path":"explain"},"name":"Corp Explain","description":"","type":"tool"},{"action":{"type":"link","path":"allocation_explain"},"name":"Allocation Explain","type":"tool"},{"action":{"type":"link","path":"tasker_journey"},"name":"Tasker Journey Explain","type":"tool"},{"action":{"type":"link","path":"lidartasks"},"name":"Long Tasks: Lidar","description":"List of LiDAR tasks that contain information on individual LiDAR tasks","type":"tool"},{"action":{"type":"link","path":"teams"},"name":"Teams","type":"tool"},{"action":{"type":"link","path":"qm"},"name":"Qm","type":"tool"},{"action":{"type":"link","path":"qm_workflow"},"name":"Qm Workflow","type":"tool"},{"action":{"type":"link","path":"docmetrics"},"name":"Docmetrics","type":"tool"},{"action":{"type":"link","path":"jobs/all"},"name":"Jobs All","type":"tool"},{"action":{"type":"link","path":"jobs"},"name":"Jobs","type":"tool"},{"action":{"type":"link","path":"document/modelProjectConfiguration"},"name":"Document Modelprojectconfiguration","type":"tool"},{"action":{"type":"link","path":"document_ai_go_access_link"},"name":"Document Ai Go Access Link","type":"tool"},{"action":{"type":"link","path":"minilidar_create_subprojects"},"name":"Minilidar Create Subprojects","type":"tool"},{"action":{"type":"link","path":"guided_workflows/edit"},"name":"Guided Workflows Edit","type":"tool"},{"action":{"type":"link","path":"guided_workflows"},"name":"Guided Workflows","type":"tool"},{"action":{"type":"link","path":"queue_health_reporting"},"name":"Queue Health Reporting","type":"tool"},{"action":{"type":"link","path":"project_groups"},"name":"Project Groups","type":"tool"},{"action":{"type":"link","path":"qateams"},"name":"Qateams","type":"tool"},{"action":{"type":"link","path":"payout_jobs"},"name":"Payout Jobs","type":"tool"},{"action":{"type":"link","path":"pdp_qa_dashboard"},"name":"Pdp Qa Dashboard","type":"tool"},{"action":{"type":"link","path":"gis_task_pipeline_tool"},"name":"Gis Task Pipeline Tool","type":"tool"},{"action":{"type":"link","path":"hipaa"},"name":"Hipaa","type":"tool"},{"action":{"type":"link","path":"lidar_viz_dash"},"name":"Lidar Viz Dash","type":"tool"},{"action":{"type":"link","path":"production_monitoring"},"name":"Production Monitoring","type":"tool"},{"action":{"type":"link","path":"qar"},"name":"QAR: Queue Audit & Repair","description":"Queue Audit & Repair","type":"tool"},{"action":{"type":"link","path":"activity_tracker"},"name":"Activity Tracker","type":"tool"},{"action":{"type":"link","path":"progress_bar_demo"},"name":"Progress Bar Demo","type":"tool"},{"action":{"type":"link","path":"pipeline_special_actions"},"name":"Pipeline Special Actions","type":"tool"},{"action":{"type":"link","path":"global_map_viewer"},"name":"Global Map Viewer","type":"tool"},{"action":{"type":"link","path":"bpo/move_scalers"},"name":"Move Taskers","description":"Move taskers from one project to another.","type":"tool"},{"action":{"type":"link","path":"sla/index"},"name":"SLAs","description":"List of existing SLAs in the database","type":"tool"},{"action":{"type":"link","path":"sla/new"},"name":"Add SLA","description":"Add a new SLA into the database for project","type":"tool"},{"action":{"type":"link","path":"permissions/permissionsPage"},"name":"Onboarding Center Management","description":"Lists the permissions for taskers, according to the score for each permission.","type":"tool"},{"action":{"type":"link","path":"lidar_feedback"},"name":"Long Tasks: Needs Redo","description":"Tasks that need to be redone (lidar).","type":"tool"},{"action":{"type":"link","path":"videotasks"},"name":"Long Tasks: Video","description":"List of video tasks that contain information on individual video tasks.","type":"tool"},{"action":{"type":"link","path":"scalers/throttles"},"name":"Throttles","description":"View current throttles or add a new one.","type":"tool"},{"action":{"type":"link","path":"staffing"},"name":"Project Staffing","description":"View the attempter/reviewer list for a particular customer.","type":"tool"},{"action":{"type":"link","path":"bonuses/index"},"name":"Bonuses","description":"","type":"tool"},{"action":{"type":"link","path":"lidar"},"name":"Lidar Annotation Demo","description":"Play around with an already completed SemSeg LiDAR Task.","type":"demo"},{"action":{"type":"link","path":"nlp_demo"},"name":"NER Demo","description":"Play around with the NER (Named Entity Recognition) task type.","type":"demo"},{"action":{"type":"link","path":"dolphin_qa"},"name":"Dolphin QA","type":"tool"},{"action":{"type":"link","path":"signup-flow"},"name":"SignUp Flow","type":"tool"}]'
      );
    },
  },
]);
