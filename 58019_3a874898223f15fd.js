"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [58019, 16915],
  {
    753705: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var r = n(814484),
        o = n(197308),
        a = n(827378),
        i = n(479789),
        s = n(312480),
        l = n(376948),
        c = n(318508),
        u = n(922399),
        d = n(925608),
        p = n(561503),
        m = n(57739);
      function f(e) {
        return (0, m.Z)("MuiStep", e);
      }
      (0, p.Z)("MuiStep", [
        "root",
        "horizontal",
        "vertical",
        "alternativeLabel",
        "completed",
      ]);
      var v = n(824246);
      const h = [
          "active",
          "children",
          "className",
          "component",
          "completed",
          "disabled",
          "expanded",
          "index",
          "last",
        ],
        g = (0, d.ZP)("div", {
          name: "MuiStep",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[n.orientation],
              n.alternativeLabel && t.alternativeLabel,
              n.completed && t.completed,
            ];
          },
        })(({ ownerState: e }) =>
          (0, o.Z)(
            {},
            "horizontal" === e.orientation && {
              paddingLeft: 8,
              paddingRight: 8,
            },
            e.alternativeLabel && { flex: 1, position: "relative" }
          )
        );
      var b = a.forwardRef(function (e, t) {
        const n = (0, u.Z)({ props: e, name: "MuiStep" }),
          {
            active: d,
            children: p,
            className: m,
            component: b = "div",
            completed: y,
            disabled: x,
            expanded: w = !1,
            index: j,
            last: T,
          } = n,
          R = (0, r.Z)(n, h),
          {
            activeStep: k,
            connector: S,
            alternativeLabel: L,
            orientation: C,
            nonLinear: N,
          } = a.useContext(l.Z);
        let [Z = !1, E = !1, A = !1] = [d, y, x];
        k === j
          ? (Z = void 0 === d || d)
          : !N && k > j
          ? (E = void 0 === y || y)
          : !N && k < j && (A = void 0 === x || x);
        const I = a.useMemo(
            () => ({
              index: j,
              last: T,
              expanded: w,
              icon: j + 1,
              active: Z,
              completed: E,
              disabled: A,
            }),
            [j, T, w, Z, E, A]
          ),
          P = (0, o.Z)({}, n, {
            active: Z,
            orientation: C,
            alternativeLabel: L,
            completed: E,
            disabled: A,
            expanded: w,
            component: b,
          }),
          _ = ((e) => {
            const {
                classes: t,
                orientation: n,
                alternativeLabel: r,
                completed: o,
              } = e,
              a = {
                root: ["root", n, r && "alternativeLabel", o && "completed"],
              };
            return (0, s.Z)(a, f, t);
          })(P),
          M = (0, v.jsxs)(
            g,
            (0, o.Z)(
              { as: b, className: (0, i.Z)(_.root, m), ref: t, ownerState: P },
              R,
              { children: [S && L && 0 !== j ? S : null, p] }
            )
          );
        return (0,
        v.jsx)(c.Z.Provider, { value: I, children: S && !L && 0 !== j ? (0, v.jsxs)(a.Fragment, { children: [S, M] }) : M });
      });
    },
    318508: function (e, t, n) {
      const r = n(827378).createContext({});
      t.Z = r;
    },
    540632: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P;
        },
      });
      var r = n(814484),
        o = n(197308),
        a = n(827378),
        i = n(479789),
        s = n(312480),
        l = n(925608),
        c = n(922399),
        u = n(611934),
        d = n(824246),
        p = (0, u.Z)(
          (0, d.jsx)("path", {
            d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z",
          }),
          "CheckCircle"
        ),
        m = (0, u.Z)(
          (0, d.jsx)("path", {
            d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
          }),
          "Warning"
        ),
        f = n(549523),
        v = n(561503),
        h = n(57739);
      function g(e) {
        return (0, h.Z)("MuiStepIcon", e);
      }
      var b,
        y = (0, v.Z)("MuiStepIcon", [
          "root",
          "active",
          "completed",
          "error",
          "text",
        ]);
      const x = ["active", "className", "completed", "error", "icon"],
        w = (0, l.ZP)(f.Z, {
          name: "MuiStepIcon",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })(({ theme: e }) => ({
          display: "block",
          transition: e.transitions.create("color", {
            duration: e.transitions.duration.shortest,
          }),
          color: (e.vars || e).palette.text.disabled,
          [`&.${y.completed}`]: { color: (e.vars || e).palette.primary.main },
          [`&.${y.active}`]: { color: (e.vars || e).palette.primary.main },
          [`&.${y.error}`]: { color: (e.vars || e).palette.error.main },
        })),
        j = (0, l.ZP)("text", {
          name: "MuiStepIcon",
          slot: "Text",
          overridesResolver: (e, t) => t.text,
        })(({ theme: e }) => ({
          fill: (e.vars || e).palette.primary.contrastText,
          fontSize: e.typography.caption.fontSize,
          fontFamily: e.typography.fontFamily,
        }));
      var T = a.forwardRef(function (e, t) {
          const n = (0, c.Z)({ props: e, name: "MuiStepIcon" }),
            {
              active: a = !1,
              className: l,
              completed: u = !1,
              error: f = !1,
              icon: v,
            } = n,
            h = (0, r.Z)(n, x),
            y = (0, o.Z)({}, n, { active: a, completed: u, error: f }),
            T = ((e) => {
              const { classes: t, active: n, completed: r, error: o } = e,
                a = {
                  root: ["root", n && "active", r && "completed", o && "error"],
                  text: ["text"],
                };
              return (0, s.Z)(a, g, t);
            })(y);
          if ("number" === typeof v || "string" === typeof v) {
            const e = (0, i.Z)(l, T.root);
            return f
              ? (0, d.jsx)(
                  w,
                  (0, o.Z)({ as: m, className: e, ref: t, ownerState: y }, h)
                )
              : u
              ? (0, d.jsx)(
                  w,
                  (0, o.Z)({ as: p, className: e, ref: t, ownerState: y }, h)
                )
              : (0, d.jsxs)(
                  w,
                  (0, o.Z)({ className: e, ref: t, ownerState: y }, h, {
                    children: [
                      b ||
                        (b = (0, d.jsx)("circle", {
                          cx: "12",
                          cy: "12",
                          r: "12",
                        })),
                      (0, d.jsx)(j, {
                        className: T.text,
                        x: "12",
                        y: "12",
                        textAnchor: "middle",
                        dominantBaseline: "central",
                        ownerState: y,
                        children: v,
                      }),
                    ],
                  })
                );
          }
          return v;
        }),
        R = n(376948),
        k = n(318508);
      function S(e) {
        return (0, h.Z)("MuiStepLabel", e);
      }
      var L = (0, v.Z)("MuiStepLabel", [
        "root",
        "horizontal",
        "vertical",
        "label",
        "active",
        "completed",
        "error",
        "disabled",
        "iconContainer",
        "alternativeLabel",
        "labelContainer",
      ]);
      const C = [
          "children",
          "className",
          "componentsProps",
          "error",
          "icon",
          "optional",
          "slotProps",
          "StepIconComponent",
          "StepIconProps",
        ],
        N = (0, l.ZP)("span", {
          name: "MuiStepLabel",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, t[n.orientation]];
          },
        })(({ ownerState: e }) =>
          (0, o.Z)(
            {
              display: "flex",
              alignItems: "center",
              [`&.${L.alternativeLabel}`]: { flexDirection: "column" },
              [`&.${L.disabled}`]: { cursor: "default" },
            },
            "vertical" === e.orientation && {
              textAlign: "left",
              padding: "8px 0",
            }
          )
        ),
        Z = (0, l.ZP)("span", {
          name: "MuiStepLabel",
          slot: "Label",
          overridesResolver: (e, t) => t.label,
        })(({ theme: e }) =>
          (0, o.Z)({}, e.typography.body2, {
            display: "block",
            transition: e.transitions.create("color", {
              duration: e.transitions.duration.shortest,
            }),
            [`&.${L.active}`]: {
              color: (e.vars || e).palette.text.primary,
              fontWeight: 500,
            },
            [`&.${L.completed}`]: {
              color: (e.vars || e).palette.text.primary,
              fontWeight: 500,
            },
            [`&.${L.alternativeLabel}`]: { marginTop: 16 },
            [`&.${L.error}`]: { color: (e.vars || e).palette.error.main },
          })
        ),
        E = (0, l.ZP)("span", {
          name: "MuiStepLabel",
          slot: "IconContainer",
          overridesResolver: (e, t) => t.iconContainer,
        })(() => ({
          flexShrink: 0,
          display: "flex",
          paddingRight: 8,
          [`&.${L.alternativeLabel}`]: { paddingRight: 0 },
        })),
        A = (0, l.ZP)("span", {
          name: "MuiStepLabel",
          slot: "LabelContainer",
          overridesResolver: (e, t) => t.labelContainer,
        })(({ theme: e }) => ({
          width: "100%",
          color: (e.vars || e).palette.text.secondary,
          [`&.${L.alternativeLabel}`]: { textAlign: "center" },
        })),
        I = a.forwardRef(function (e, t) {
          var n;
          const l = (0, c.Z)({ props: e, name: "MuiStepLabel" }),
            {
              children: u,
              className: p,
              componentsProps: m = {},
              error: f = !1,
              icon: v,
              optional: h,
              slotProps: g = {},
              StepIconComponent: b,
              StepIconProps: y,
            } = l,
            x = (0, r.Z)(l, C),
            { alternativeLabel: w, orientation: j } = a.useContext(R.Z),
            {
              active: L,
              disabled: I,
              completed: P,
              icon: _,
            } = a.useContext(k.Z),
            M = v || _;
          let W = b;
          M && !W && (W = T);
          const D = (0, o.Z)({}, l, {
              active: L,
              alternativeLabel: w,
              completed: P,
              disabled: I,
              error: f,
              orientation: j,
            }),
            O = ((e) => {
              const {
                  classes: t,
                  orientation: n,
                  active: r,
                  completed: o,
                  error: a,
                  disabled: i,
                  alternativeLabel: l,
                } = e,
                c = {
                  root: [
                    "root",
                    n,
                    a && "error",
                    i && "disabled",
                    l && "alternativeLabel",
                  ],
                  label: [
                    "label",
                    r && "active",
                    o && "completed",
                    a && "error",
                    i && "disabled",
                    l && "alternativeLabel",
                  ],
                  iconContainer: [
                    "iconContainer",
                    r && "active",
                    o && "completed",
                    a && "error",
                    i && "disabled",
                    l && "alternativeLabel",
                  ],
                  labelContainer: ["labelContainer", l && "alternativeLabel"],
                };
              return (0, s.Z)(c, S, t);
            })(D),
            q = null != (n = g.label) ? n : m.label;
          return (0,
          d.jsxs)(N, (0, o.Z)({ className: (0, i.Z)(O.root, p), ref: t, ownerState: D }, x, { children: [M || W ? (0, d.jsx)(E, { className: O.iconContainer, ownerState: D, children: (0, d.jsx)(W, (0, o.Z)({ completed: P, active: L, error: f, icon: M }, y)) }) : null, (0, d.jsxs)(A, { className: O.labelContainer, ownerState: D, children: [u ? (0, d.jsx)(Z, (0, o.Z)({ ownerState: D }, q, { className: (0, i.Z)(O.label, null == q ? void 0 : q.className), children: u })) : null, h] })] }));
        });
      I.muiName = "StepLabel";
      var P = I;
    },
    542489: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var r = n(814484),
        o = n(197308),
        a = n(827378),
        i = n(479789),
        s = n(312480),
        l = n(922399),
        c = n(925608),
        u = n(561503),
        d = n(57739);
      function p(e) {
        return (0, d.Z)("MuiStepper", e);
      }
      (0, u.Z)("MuiStepper", [
        "root",
        "horizontal",
        "vertical",
        "alternativeLabel",
      ]);
      var m = n(23618),
        f = n(376948),
        v = n(318508);
      function h(e) {
        return (0, d.Z)("MuiStepConnector", e);
      }
      (0, u.Z)("MuiStepConnector", [
        "root",
        "horizontal",
        "vertical",
        "alternativeLabel",
        "active",
        "completed",
        "disabled",
        "line",
        "lineHorizontal",
        "lineVertical",
      ]);
      var g = n(824246);
      const b = ["className"],
        y = (0, c.ZP)("div", {
          name: "MuiStepConnector",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[n.orientation],
              n.alternativeLabel && t.alternativeLabel,
              n.completed && t.completed,
            ];
          },
        })(({ ownerState: e }) =>
          (0, o.Z)(
            { flex: "1 1 auto" },
            "vertical" === e.orientation && { marginLeft: 12 },
            e.alternativeLabel && {
              position: "absolute",
              top: 12,
              left: "calc(-50% + 20px)",
              right: "calc(50% + 20px)",
            }
          )
        ),
        x = (0, c.ZP)("span", {
          name: "MuiStepConnector",
          slot: "Line",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.line, t[`line${(0, m.Z)(n.orientation)}`]];
          },
        })(({ ownerState: e, theme: t }) => {
          const n =
            "light" === t.palette.mode
              ? t.palette.grey[400]
              : t.palette.grey[600];
          return (0, o.Z)(
            {
              display: "block",
              borderColor: t.vars ? t.vars.palette.StepConnector.border : n,
            },
            "horizontal" === e.orientation && {
              borderTopStyle: "solid",
              borderTopWidth: 1,
            },
            "vertical" === e.orientation && {
              borderLeftStyle: "solid",
              borderLeftWidth: 1,
              minHeight: 24,
            }
          );
        });
      var w = a.forwardRef(function (e, t) {
        const n = (0, l.Z)({ props: e, name: "MuiStepConnector" }),
          { className: c } = n,
          u = (0, r.Z)(n, b),
          { alternativeLabel: d, orientation: p = "horizontal" } = a.useContext(
            f.Z
          ),
          { active: w, disabled: j, completed: T } = a.useContext(v.Z),
          R = (0, o.Z)({}, n, {
            alternativeLabel: d,
            orientation: p,
            active: w,
            completed: T,
            disabled: j,
          }),
          k = ((e) => {
            const {
                classes: t,
                orientation: n,
                alternativeLabel: r,
                active: o,
                completed: a,
                disabled: i,
              } = e,
              l = {
                root: [
                  "root",
                  n,
                  r && "alternativeLabel",
                  o && "active",
                  a && "completed",
                  i && "disabled",
                ],
                line: ["line", `line${(0, m.Z)(n)}`],
              };
            return (0, s.Z)(l, h, t);
          })(R);
        return (0,
        g.jsx)(y, (0, o.Z)({ className: (0, i.Z)(k.root, c), ref: t, ownerState: R }, u, { children: (0, g.jsx)(x, { className: k.line, ownerState: R }) }));
      });
      const j = [
          "activeStep",
          "alternativeLabel",
          "children",
          "className",
          "component",
          "connector",
          "nonLinear",
          "orientation",
        ],
        T = (0, c.ZP)("div", {
          name: "MuiStepper",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              t[n.orientation],
              n.alternativeLabel && t.alternativeLabel,
            ];
          },
        })(({ ownerState: e }) =>
          (0, o.Z)(
            { display: "flex" },
            "horizontal" === e.orientation && {
              flexDirection: "row",
              alignItems: "center",
            },
            "vertical" === e.orientation && { flexDirection: "column" },
            e.alternativeLabel && { alignItems: "flex-start" }
          )
        ),
        R = (0, g.jsx)(w, {});
      var k = a.forwardRef(function (e, t) {
        const n = (0, l.Z)({ props: e, name: "MuiStepper" }),
          {
            activeStep: c = 0,
            alternativeLabel: u = !1,
            children: d,
            className: m,
            component: v = "div",
            connector: h = R,
            nonLinear: b = !1,
            orientation: y = "horizontal",
          } = n,
          x = (0, r.Z)(n, j),
          w = (0, o.Z)({}, n, {
            alternativeLabel: u,
            orientation: y,
            component: v,
          }),
          k = ((e) => {
            const { orientation: t, alternativeLabel: n, classes: r } = e,
              o = { root: ["root", t, n && "alternativeLabel"] };
            return (0, s.Z)(o, p, r);
          })(w),
          S = a.Children.toArray(d).filter(Boolean),
          L = S.map((e, t) =>
            a.cloneElement(
              e,
              (0, o.Z)({ index: t, last: t + 1 === S.length }, e.props)
            )
          ),
          C = a.useMemo(
            () => ({
              activeStep: c,
              alternativeLabel: u,
              connector: h,
              nonLinear: b,
              orientation: y,
            }),
            [c, u, h, b, y]
          );
        return (0,
        g.jsx)(f.Z.Provider, { value: C, children: (0, g.jsx)(T, (0, o.Z)({ as: v, ownerState: w, className: (0, i.Z)(k.root, m), ref: t }, x, { children: L })) });
      });
    },
    376948: function (e, t, n) {
      const r = n(827378).createContext({});
      t.Z = r;
    },
    719646: function (e, t, n) {
      n.d(t, {
        ze: function () {
          return a;
        },
        zU: function () {
          return s;
        },
        Rc: function () {
          return l;
        },
      });
      var r = n(389401),
        o = n(527565);
      n(234334).QualificationType.ContributorAgreement;
      const a = ({ enabled: e }) =>
          (0, r.a)(
            ["peek-queue"],
            async () =>
              await (0, o.ZP)("/internal/v2/tasks/peek_queue", {
                method: "GET",
              }),
            { enabled: e }
          ),
        i = (e) => {
          var t;
          return (
            !e ||
            0 ===
              (null === (t = e.assignments) || void 0 === t ? void 0 : t.length)
          );
        },
        s = (e) => {
          var t;
          if (!i(e))
            return null ===
              (t = null === e || void 0 === e ? void 0 : e.assignments[0]) ||
              void 0 === t
              ? void 0
              : t.qualificationList;
        },
        l = (e) => {
          const t = s(e);
          return null === t || void 0 === t ? void 0 : t.qualificationListId;
        };
    },
    709791: function (e, t, n) {
      n.d(t, {
        v: function () {
          return w;
        },
      });
      var r = n(824246),
        o = n(827378),
        a = n(713222),
        i = n(722030),
        s = n(983341),
        l = n(754202),
        c = n(213665),
        u = n(416534);
      const d = ({ children: e }) =>
          (0, r.jsx)("div", {
            className: "flex text-neutral-700 text-sm",
            children: e,
          }),
        p = ({ children: e }) =>
          (0, r.jsx)("div", {
            className: "flex text-neutral-700",
            children: e,
          }),
        m = ({ children: e }) =>
          (0, r.jsx)("div", {
            className: "flex text-neutral-500 text-xs",
            children: e,
          }),
        f = ({ title: e, value: t, description: n, icon: o }) =>
          (0, r.jsxs)("div", {
            className: "py-3 px-2 flex items-center",
            children: [
              (0, r.jsx)("div", {
                className:
                  "rounded-full bg-neutral-100 flex items-center justify-center w-7 h-7",
                children: o,
              }),
              (0, r.jsxs)("div", {
                className: "pr-4 pl-4 flex-column space-y-1",
                children: [e, t && t, n && n],
              }),
            ],
          }),
        v = ({
          open: e,
          onConfirm: t,
          children: n,
          title: a,
          icon: i,
          description: d,
          buttonLabel: p,
          dataList: m,
        }) =>
          (0, r.jsx)(s.u, {
            appear: !0,
            show: e,
            as: o.Fragment,
            children: (0, r.jsxs)(l.V, {
              as: "div",
              onClose: () => {},
              className:
                "relative z-modal scaleui outlier-theme scale-tailwind",
              children: [
                (0, r.jsx)(s.u.Child, {
                  as: o.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-50",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-50",
                  leaveTo: "opacity-0",
                  children: (0, r.jsx)("div", {
                    className: "fixed inset-0 bg-neutral-1000",
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "fixed inset-0 flex flex-col items-center justify-center p-4 overflow-y-auto",
                  children: (0, r.jsx)(s.u.Child, {
                    as: o.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, r.jsxs)(l.V.Panel, {
                      className:
                        "min-w-[200px] max-w-[700px] overflow-hidden transition-all transform rounded-lg shadow-xl bg-neutral-0 scale-tailwind",
                      children: [
                        (0, r.jsxs)("div", {
                          id: "header",
                          className: "px-4 p-2 w-full",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, r.jsx)("div", {
                                  className: "w-10 h-10 pt-1",
                                  children: i,
                                }),
                                (0, r.jsx)("h1", {
                                  className:
                                    "text-base font-medium text-slate-700",
                                  children: a,
                                }),
                              ],
                            }),
                            (0, r.jsx)("h2", {
                              className: "text-sm pt-1 pb-2 text-neutral-500",
                              children: d,
                            }),
                            (0, r.jsx)(c.i, {
                              className: "w-full bg-neutral-200",
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          id: "content",
                          className: "px-4 overflow-y-auto",
                          style: { maxHeight: "calc(80vh - 150px)" },
                          children: (0, r.jsx)("div", {
                            id: "item-1",
                            className: "",
                            children:
                              null === m || void 0 === m
                                ? void 0
                                : m.map(
                                    ({
                                      title: e,
                                      value: t,
                                      description: n,
                                      icon: o,
                                    }) =>
                                      (0, r.jsx)(f, {
                                        title: e,
                                        value: t,
                                        description: n,
                                        icon: o,
                                      })
                                  ),
                          }),
                        }),
                        (0, r.jsx)("div", { id: "children", children: n }),
                        (0, r.jsx)("div", {
                          id: "footer",
                          className: "w-full h-16",
                          children: (0, r.jsxs)("div", {
                            className:
                              "px-4 pb-4 flex flex-col items-end bg-white",
                            children: [
                              (0, r.jsx)(c.i, {
                                className: "w-full bg-neutral-200",
                              }),
                              (0, r.jsx)(u.zx, {
                                className: "mt-4 py-2 focus:ring-transparent",
                                onClick: t,
                                children: p,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
      var h = n(43977),
        g = n(527565),
        b = n(526106),
        y = n(844478);
      const x = o.createContext({ showProjectInfo: !1 }),
        w = ({
          children: e,
          projectId: t,
          isFFEnabled: n,
          onClose: s = () => {},
        }) => {
          const [l, c] = (0, o.useState)(!1),
            [u, f] = (0, o.useState)(!1),
            [w, j] = (0, o.useState)(),
            T = (0, o.useCallback)(async (e) => {
              const t = await (0, g.ZP)(
                `/internal/experts/project/isProjectChanged?projectId=${e}`,
                { method: "GET" }
              );
              if (t.changed) {
                const { earningRateData: e } = await (0, g.ZP)(
                  "internal/scaler/pay_rate_card"
                );
                (null === e || void 0 === e ? void 0 : e.length) &&
                  (j({ paymentInfo: e, projectChanged: t }), f(!0));
              }
            }, []);
          (0, o.useEffect)(() => {
            t && n && T(t);
            const e = setInterval(() => {
              t && n && T(t);
            }, 3e5);
            return () => {
              clearInterval(e);
            };
          }, [t, n, T]);
          const R = (0, o.useCallback)(async () => {
              c(!0),
                t &&
                  (await (0, g.ZP)(
                    "/internal/experts/project/setCurrentActive",
                    { method: "POST", body: JSON.stringify({ projectId: t }) }
                  )),
                f(!1),
                s(),
                c(!1);
            }, [t, s]),
            k = (e) => {
              if (!e) return !1;
              return !!/(<([^>]+)>)/gi.test(e);
            },
            S = (0, o.useMemo)(() => {
              var e, t, n;
              return {
                open: u,
                title: "You\u2019ve been assigned to a New Project",
                description: (
                  null ===
                    (e =
                      null === w || void 0 === w ? void 0 : w.projectChanged) ||
                  void 0 === e
                    ? void 0
                    : e.reason
                )
                  ? b.bK[
                      null ===
                        (t =
                          null === w || void 0 === w
                            ? void 0
                            : w.projectChanged) || void 0 === t
                        ? void 0
                        : t.reason
                    ]
                  : b.bK[y.WorkerTeamAssignmentReason.Generic],
                dataList:
                  null ===
                    (n = null === w || void 0 === w ? void 0 : w.paymentInfo) ||
                  void 0 === n
                    ? void 0
                    : n.map((e) => {
                        var t, n, o, i;
                        return {
                          title: (0, r.jsx)(d, { children: e.title }),
                          description:
                            e.description &&
                            (0, r.jsx)(m, {
                              children: k(e.description)
                                ? (0, r.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                      __html: e.description,
                                    },
                                  })
                                : e.paymentProvider
                                ? ""
                                : e.description,
                            }),
                          value:
                            (e.paymentProvider ||
                              e.subtitleHourRate ||
                              e.subtitle) &&
                            (0, r.jsx)(p, {
                              children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                  e.paymentProvider &&
                                    (0, r.jsxs)("div", {
                                      className: "text-neutral-500",
                                      children: [
                                        e.paymentProvider.name,
                                        " - ",
                                        e.description,
                                      ],
                                    }),
                                  (
                                    null === (t = e.subtitleHourRate) ||
                                    void 0 === t
                                      ? void 0
                                      : t.showRate
                                  )
                                    ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("div", {
                                            className: "text-neutral-700",
                                            children:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.subtitleHourRate.bolded,
                                          }),
                                          (0, r.jsx)("div", {
                                            className: "text-neutral-500 ml-1",
                                            children:
                                              null ===
                                                (n =
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.subtitleHourRate) ||
                                              void 0 === n
                                                ? void 0
                                                : n.unbolded,
                                          }),
                                        ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("div", {
                                            className: "text-neutral-700",
                                            children:
                                              null ===
                                                (o =
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.subtitle) ||
                                              void 0 === o
                                                ? void 0
                                                : o.bolded,
                                          }),
                                          (0, r.jsx)("div", {
                                            className: "text-neutral-500 ml-1",
                                            children:
                                              null ===
                                                (i =
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.subtitle) ||
                                              void 0 === i
                                                ? void 0
                                                : i.unbolded,
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            }),
                          icon: (0, r.jsx)(a.J, { icon: e.icon }),
                        };
                      }),
                onConfirm: R,
                icon: (0, r.jsx)(h.Z, {}),
                buttonLabel: (0, r.jsx)("div", {
                  className: "flex justify-center items-center w-[200px]",
                  children: l
                    ? (0, r.jsx)(i.$, { size: "xs" })
                    : "Acknowledge and Start Project",
                }),
              };
            }, [u, w, l, R]);
          return (0, r.jsxs)(x.Provider, {
            value: { showProjectInfo: u },
            children: [(0, r.jsx)(v, Object.assign({}, S)), e],
          });
        };
    },
    213665: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var r = n(824246),
        o = n(720227);
      const a = "horizontal",
        i = ({ direction: e = a, className: t }) =>
          "horizontal" === e
            ? (0, r.jsx)("div", {
                className: (0, o.m)("scaleui w-full h-[1px] bg-neutral-300", t),
              })
            : (0, r.jsx)("div", {
                className: (0, o.m)("scaleui w-[1px] h-full bg-neutral-300", t),
              });
    },
    526106: function (e, t, n) {
      t.bK = void 0;
      var r = n(599789),
        o = n(844478);
      const a =
          "\n  <p><strong>Project and task availability depend on customer demand and requirements.</strong></p>\n  <br/>\n  <p>As a result, you have been assigned to a new project. Unfortunately, returning to your previous project is not an option at this time.</p>\n",
        i =
          "Unfortunately, you did not meet the minimum quality standards of your project. We have found you the opportunity to work on a new project that might be a better fit for your skills.",
        s = "Please see the following details around your new work on Outlier.",
        l = {
          [o.WorkerTeamAssignmentReason.ProjectClosure]:
            "Your current project has concluded. We have found you the opportunity to task on a new project.",
          [o.WorkerTeamAssignmentReason.PriorityChange]: a,
          [o.WorkerTeamAssignmentReason.LimitedWork]:
            "Due to a change in task availability, we have found you the opportunity to task  on a new project.",
          [o.WorkerTeamAssignmentReason.SelfRequest]:
            "As per your own request, we have found you an opportunity to task on a new project.",
          [o.WorkerTeamAssignmentReason.NewOrReactivated]:
            "Congrats! You have the opportunity to start tasking.",
          [o.WorkerTeamAssignmentReason.Fraud]: i,
          [o.WorkerTeamAssignmentReason.PoorQuality]: i,
          [o.WorkerTeamAssignmentReason.AllocationMistake]:
            "Due to an allocation error we are placing you back on the correct project.",
          [o.WorkerTeamAssignmentReason.Promotion]: s,
          [o.WorkerTeamAssignmentReason.Demotion]: s,
          [o.WorkerTeamAssignmentReason.Generic]: s,
          [o.WorkerTeamAssignmentReason.NoTaskerFacingReason]: s,
          [o.WorkerTeamAssignmentReason.Training]:
            "Congrats! You have the opportunity to start training for a project.",
        };
      t.bK = l;
      const c = {};
      const u = "skip this copy";
      for (const d of r.WaitingOnTasksEmptyQueueReasons)
        c[d] =
          "\n  <p><strong>Good job! Your tasks in your previously active project have now been completed.</strong></p>\n  <br/>\n  <p>While you wait for more tasks to become available, we have made a new project that meets your skills and expertise available to you.</p>\n";
      for (const d of r.BugEmptyQueueReasons) c[d] = u;
      for (const d of r.ConfigErrorEmptyQueueReasons) c[d] = a;
      for (const d of r.PendingTimeEmptyQueueReasons)
        r.EmptyQueueReason.RapidShadowProjectTimeout, (c[d] = u);
      for (const d of r.GenericEmptyQueueReasons) c[d] = u;
      for (const d of r.AssessmentFailedEmptyQueueReasons)
        c[d] =
          "\n  <p><strong>Unfortunately, you did not meet the quality threshold on your assessments.</strong></p>\n  <br/>\n  <p>As a result, you have been removed from the project. However, we have made a new project that meets your skills and expertise available to you.</p>\n";
      for (const d of r.ThrottlingEmptyQueueReasons)
        c[d] =
          "\n  <p><strong>The project you are currently on limits the number of tasks each person can complete daily.</strong></p>\n  <br/>\n  <p>While you wait to be able to complete more tasks in the original project, we have made a new project that meets your skills and expertise available to you.</p>\n";
      (c[r.EmptyQueueReason.InvalidDeviceType] = u),
        (c[r.EmptyQueueReason.PaySetup] = u),
        (c[r.EmptyQueueReason.KYCInfoCollection] = u),
        (c[r.EmptyQueueReason.TaskWallWaiting] = u),
        (c[r.EmptyQueueReason.ContributorPausedProject] = u),
        (c[r.EmptyQueueReason.Disabled] =
          "\n  <p><strong>We have found quality issues from your work on your previous project.</strong></p>\n  <br/>\n  <p>In the meantime, we have found you available tasks on a new project.</p>\n"),
        (c[o.WorkerTeamAssignmentReason.PriorityChange] = a),
        (c.skip = u);
    },
    844478: function (e, t) {
      var n, r, o, a, i, s;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UpdateModes =
          t.WorkerTeamAssignmentDuration =
          t.WorkerTeamAssignmentReason =
          t.WorkerTeamReturnReason =
          t.WorkerTeamLoanStatus =
          t.WorkerTeamEventType =
            void 0),
        (t.WorkerTeamEventType = n),
        (function (e) {
          (e.CreateTeam = "create_team"),
            (e.DeleteTeam = "delete_team"),
            (e.MoveTeam = "move_team"),
            (e.UpdateTeamConfig = "update_team_config"),
            (e.AddWorker = "add_worker"),
            (e.RemoveWorker = "remove_worker"),
            (e.UpdateManagers = "update_managers"),
            (e.UpdateType = "update_type"),
            (e.UpdateQualificationList = "update_qualification_list");
        })(n || (t.WorkerTeamEventType = n = {})),
        (t.WorkerTeamLoanStatus = r),
        (function (e) {
          (e.Loaned = "loaned"),
            (e.LoanStarted = "loan_started"),
            (e.Returned = "just_returned");
        })(r || (t.WorkerTeamLoanStatus = r = {})),
        (t.WorkerTeamReturnReason = o),
        (function (e) {
          (e.DateCondition = "date_condition"),
            (e.TaskAvailability = "task_availability"),
            (e.HoursCondition = "hours_condition"),
            (e.Manual = "manual");
        })(o || (t.WorkerTeamReturnReason = o = {})),
        (t.WorkerTeamAssignmentReason = a),
        (function (e) {
          (e.ProjectClosure = "project_closure"),
            (e.PriorityChange = "priority_change"),
            (e.LimitedWork = "limited_work"),
            (e.SelfRequest = "self_request"),
            (e.NewOrReactivated = "new_or_reactivated"),
            (e.Promotion = "promotion"),
            (e.Demotion = "demotion"),
            (e.PoorQuality = "poor_quality"),
            (e.Fraud = "fraud"),
            (e.AllocationMistake = "allocation_mistake"),
            (e.Generic = "generic"),
            (e.NoTaskerFacingReason = "no_tasker_facing_reason"),
            (e.Training = "training"),
            (e.WorkerInactive = "worker_inactive");
        })(a || (t.WorkerTeamAssignmentReason = a = {})),
        (t.WorkerTeamAssignmentDuration = i),
        (function (e) {
          (e.Temporary = "temporary"),
            (e.Permanent = "permanent"),
            (e.Unknown = "unknown");
        })(i || (t.WorkerTeamAssignmentDuration = i = {})),
        (t.UpdateModes = s),
        (function (e) {
          (e.OVERWRITE = "overwrite"),
            (e.ADD_FIRST = "add_first"),
            (e.ADD_LAST = "add_last"),
            (e.REMOVE = "remove");
        })(s || (t.UpdateModes = s = {}));
    },
    440778: function (e, t) {
      var n;
      (t.GR = t.wm = void 0),
        (t.wm = n),
        (function (e) {
          (e.ACCOUNT_VERIFICATION = "Phone Verification"),
            (e.SELECT_SKILLS = "Select Skills"),
            (e.PERSONA_VERIFICATION = "Identity Verification");
        })(n || (t.wm = n = {}));
      const r = [
        {
          key: n.ACCOUNT_VERIFICATION,
          displayText: n.ACCOUNT_VERIFICATION,
          isSkippable: !1,
          redirectUrl: "/expert/onboarding/phone-verification",
        },
        {
          key: n.SELECT_SKILLS,
          displayText: n.SELECT_SKILLS,
          isSkippable: !0,
          redirectUrl: "/expert/onboarding/worker-skills",
        },
        {
          key: n.PERSONA_VERIFICATION,
          displayText: n.PERSONA_VERIFICATION,
          redirectUrl: "/expert/onboarding/worker-skills",
          isSkippable: !1,
        },
      ];
      t.GR = r;
    },
    592284: function (e, t) {
      var n;
      (t.E5 = void 0),
        (t.E5 = n),
        (function (e) {
          (e.RichText = "rich_text"),
            (e.MultipleChoice = "multiple_choice"),
            (e.Video = "video"),
            (e.Benchmark = "benchmark"),
            (e.TextResponse = "text_response"),
            (e.Task = "task"),
            (e.ChatV2 = "chat_v2");
        })(n || (t.E5 = n = {}));
    },
    975840: function (e, t) {
      (t.D0 = function (e) {
        const t = n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
          r = new RegExp(`${t}/queries/(\\d*)`);
        return e.match(r)?.[1];
      }),
        (t.DH = t.Dj = t.OW = void 0);
      const n = "https://redash.scale.com";
      var r, o, a, i;
      (t.OW = r),
        (function (e) {
          (e.Query = "query"), (e.Dashboard = "dashboard");
        })(r || (t.OW = r = {})),
        (t.Dj = o),
        (function (e) {
          (e.Query = "query"),
            (e.Number = "number"),
            (e.Dropdown = "enum"),
            (e.Date = "date"),
            (e.DateTime = "datetime-local"),
            (e.DateTimeWithSeconds = "datetime-with-seconds"),
            (e.DateRange = "date-range"),
            (e.DateTimeRange = "datetime-range"),
            (e.DateTimeRangeWithSeconds = "datetime-range-with-seconds");
        })(o || (t.Dj = o = {})),
        (function (e) {
          (e.CHART = "CHART"), (e.TABLE = "TABLE"), (e.COUNTER = "COUNTER");
        })(a || (a = {})),
        (t.DH = i),
        (function (e) {
          (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.STARTED = 2)] = "STARTED"),
            (e[(e.SUCCESS = 3)] = "SUCCESS"),
            (e[(e.FAILURE = 4)] = "FAILURE"),
            (e[(e.CANCELLED = 5)] = "CANCELLED");
        })(i || (t.DH = i = {}));
    },
    535885: function (e, t, n) {
      n.d(t, {
        i: function () {
          return s;
        },
        t: function () {
          return o;
        },
      });
      var r = n(734051);
      const o = (e, t, n) => e.split(t).join(n);
      let a = (0, r.Map)();
      const i = (e) => {
          if ("string" !== typeof e) return e;
          let t = a.get(e);
          if (t) return t;
          let n = o(o(o(e, "_", " "), ".", " "), "-", " ")
            .replace(/  +/g, " ")
            .split(" ")
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
            .join(" ");
          return (a = a.set(e, n)), n;
        },
        s = (e, t = !0) =>
          t
            ? "string" === typeof t
              ? ((e, t) => {
                  switch (t) {
                    case "ol":
                      if ("number" === typeof e) return e + 1 + ".";
                      break;
                    case "upper":
                      if ("string" === typeof e) return e.toUpperCase();
                      break;
                    case "lower":
                      if ("string" === typeof e) return e.toLowerCase();
                      break;
                    case "upper-beauty":
                      if ("string" === typeof e) return i(e).toUpperCase();
                      break;
                    case "lower-beauty":
                      if ("string" === typeof e) return i(e).toLowerCase();
                      break;
                    case "beauty-text":
                      if ("string" === typeof e && isNaN(1 * e)) return i(e);
                      break;
                    case "beauty-igno-lead":
                      if ("string" === typeof e) {
                        let t = 0;
                        do {
                          if (null === new RegExp(/[.\-_]/g).exec(e[t])) break;
                          t++;
                        } while (t < e.length);
                        return e.slice(0, t) + i(e.slice(t));
                      }
                  }
                  return e;
                })(e, t)
              : i(e)
            : e;
    },
    680991: function (e, t, n) {
      n.d(t, {
        df: function () {
          return i;
        },
        xw: function () {
          return a;
        },
        oG: function () {
          return o;
        },
      });
      var r = n(734051);
      function o(e) {
        return (
          r.Map.isMap(e) || r.OrderedMap.isOrderedMap(e) || r.List.isList(e),
          "object" !== typeof e || null === e
            ? e
            : Array.isArray(e)
            ? (0, r.Seq)(e).map(o).toList()
            : (0, r.Seq)(e).map(o).toOrderedMap()
        );
      }
      const a = (e = {}) => new r.OrderedMap(o(e)),
        i = (e = {}) => new r.Map((0, r.fromJS)(e));
    },
    185174: function (e, t, n) {
      n.d(t, {
        E: function () {
          return r;
        },
      });
      const r = (e) =>
        (null === e || void 0 === e ? void 0 : e.get("$id")) ||
        (null === e || void 0 === e ? void 0 : e.get("id"));
    },
    23491: function (e, t, n) {
      n.d(t, {
        i2: function () {
          return r.i;
        },
        PG: function () {
          return d.P;
        },
        df: function () {
          return o.df;
        },
        xw: function () {
          return o.xw;
        },
        oG: function () {
          return o.oG;
        },
        Gf: function () {
          return l.getDisplayName;
        },
        EJ: function () {
          return a.E;
        },
        Xy: function () {
          return l.isEqual;
        },
        Fw: function () {
          return s;
        },
        gf: function () {
          return d.g;
        },
        X$: function () {
          return l.memo;
        },
        zb: function () {
          return c.mergeSchema;
        },
        uo: function () {
          return u.moveItem;
        },
        TD: function () {
          return p.TD;
        },
        Nl: function () {
          return p.Nl;
        },
        TC: function () {
          return p.TC;
        },
        ju: function () {
          return m.schemaTypeToDistinct;
        },
        db: function () {
          return f.d;
        },
        tm: function () {
          return r.t;
        },
        nj: function () {
          return h.n;
        },
        Yx: function () {
          return v.useImmutable;
        },
      });
      var r = n(535885),
        o = n(680991),
        a = n(185174),
        i = n(734051);
      function s(e, t = !0) {
        return (
          "object" !== typeof e || null === e
            ? "string" !== typeof e &&
              "boolean" !== typeof e &&
              "number" !== typeof e &&
              (t = !1)
            : i.List.isList(e) || i.Map.isMap(e) || i.Record.isRecord(e)
            ? (0, i.Seq)(e).forEach((e) => (t = s(e, t)))
            : (t = !1),
          t
        );
      }
      var l = n(947738),
        c = n(761845),
        u = n(727133),
        d = n(739353),
        p = n(285763),
        m = n(631190),
        f = n(652645),
        v = n(899625),
        h = n(502083);
    },
    947738: function (e, t, n) {
      n.r(t),
        n.d(t, {
          getDisplayName: function () {
            return a;
          },
          isEqual: function () {
            return s;
          },
          memo: function () {
            return l;
          },
        });
      var r = n(827378),
        o = n(734051);
      function a(e) {
        return e.displayName || e.name || "Anonymous";
      }
      const i = (e, t) =>
          o.List.isList(t) || o.Map.isMap(t) || o.Record.isRecord(t)
            ? t.equals(e)
            : Array.isArray(t)
            ? e === t
            : "object" === typeof t
            ? Object.is(e, t)
            : e === t,
        s = (e, t) => {
          const n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length || !n.every((e) => r.includes(e)))
            return !1;
          for (let o in t) if (!i(e[o], t[o])) return !1;
          return !0;
        },
        l = (e) => {
          const t = r.memo(e, s);
          return (t.displayName = a(e)), t;
        };
    },
    761845: function (e, t, n) {
      n.r(t),
        n.d(t, {
          mergeSchema: function () {
            return o;
          },
        });
      var r = n(734051);
      const o = (e, t = (0, r.Map)()) => {
        t.get("properties") &&
          (e = e.get("properties")
            ? e.update(
                "properties",
                (e) =>
                  (e = e.merge(
                    t
                      .get("properties")
                      .map((t, n) => (e.get(n) ? o(e.get(n), t) : t))
                  ))
              )
            : e.set("properties", t.get("properties"))),
          t.get("required") &&
            (e = e.get("required")
              ? e.set("required", e.get("required").concat(t.get("required")))
              : e.set("required", t.get("required"))),
          t.get("enum") &&
            (e = e.update("enum", (e = (0, r.List)()) =>
              e.concat(t.get("enum")).toSet().toList()
            )),
          t.get("oneOf") &&
            (e = e.set(
              "oneOf",
              e.get("oneOf")
                ? e.get("oneOf").concat(t.get("oneOf"))
                : t.get("oneOf")
            ));
        let n = t;
        return (
          (n = n.deleteAll(["properties", "required", "enum"])),
          (e = e.mergeDeep(n))
        );
      };
    },
    727133: function (e, t, n) {
      n.r(t),
        n.d(t, {
          moveItem: function () {
            return o;
          },
        });
      var r = n(734051);
      const o = (e, t, n) => {
        if (!e || n < 0 || e.size <= n || t < 0 || e.size <= t) return e;
        if (r.List.isList(e)) {
          const r = e.get(t);
          return e.splice(t, 1).splice(n, 0, r);
        }
        return e;
      };
    },
    739353: function (e, t, n) {
      n.d(t, {
        g: function () {
          return r;
        },
        P: function () {
          return o;
        },
      });
      const r = (e = {}, t) => (
          "number" === typeof t.get("minLength") &&
            (e.minLength = t.get("minLength")),
          "number" === typeof t.get("maxLength") &&
            (e.maxLength = t.get("maxLength")),
          "number" === typeof t.get("minimum") && (e.min = t.get("minimum")),
          "number" === typeof t.get("maximum") && (e.max = t.get("maximum")),
          "number" === typeof t.get("multipleOf") &&
            (e.step = t.get("multipleOf")),
          t.get("pattern") && (e.pattern = t.get("pattern")),
          e
        ),
        o = (e, t) => {
          if (e)
            for (let n in e.validity)
              "valid" !== n && (t = !!t && !e.validity[n]);
          return t;
        };
    },
    285763: function (e, t, n) {
      n.d(t, {
        TD: function () {
          return r;
        },
        TC: function () {
          return o;
        },
        Nl: function () {
          return a;
        },
      });
      const r = (e, t) =>
          Boolean(
            "undefined" !== typeof e &&
              ("string" === typeof e ? e === t : e.includes(t))
          ),
        o = (e) => r(e, "number") || r(e, "integer"),
        a = (e, t) =>
          Boolean(
            "undefined" !== typeof e &&
              ("string" === typeof e
                ? t.includes(e)
                : t.reduce((t, n) => t || e.includes(n), !1))
          );
    },
    631190: function (e, t, n) {
      n.r(t),
        n.d(t, {
          schemaTypeToDistinct: function () {
            return o;
          },
        });
      var r = n(734051);
      const o = (e, t = ["null"]) => {
        let n;
        if (!e) return n;
        if ("string" === typeof e) n = e;
        else if (
          (Array.isArray(e) && 1 === e.length) ||
          ("size" in e && 1 === e.size)
        )
          n = e.join();
        else {
          const o = e.reduce(
            (e, n) => (t.includes(n) ? e : e.push(n)),
            (0, r.List)()
          );
          1 === o.size && (n = o.join());
        }
        return n;
      };
    },
    652645: function (e, t, n) {
      n.d(t, {
        d: function () {
          return r;
        },
      });
      const r = (e) =>
        e.sort((e, t = "") =>
          "string" === typeof e
            ? e.localeCompare(t)
            : "number" === typeof e
            ? e > t
            : 1
        );
    },
    502083: function (e, t, n) {
      n.d(t, {
        n: function () {
          return o;
        },
      });
      var r = n(827378);
      const o = (e, t, n) => {
        const o = r.useRef(void 0),
          [a, i] = r.useState({ changed: !1, value: void 0 });
        r.useEffect(() => {
          window.clearTimeout(o.current), i({ changed: !1, value: e });
        }, [e, o]),
          r.useEffect(() => {
            if ("undefined" !== typeof a.value && a.changed)
              return (
                (o.current = window.setTimeout(() => {
                  n(a.value);
                }, t)),
                () => window.clearTimeout(o.current)
              );
          }, [a, i, t, o, n]);
        const s = r.useCallback(
            (e) => {
              a.value !== e && (window.clearTimeout(o.current), n(a.value));
            },
            [n, a]
          ),
          l = r.useCallback(
            (e) => {
              i({ changed: !0, value: e });
            },
            [i]
          );
        return {
          bubbleBounce: s,
          bounceVal: a,
          setBounceVal: i,
          changeBounceVal: l,
        };
      };
    },
    899625: function (e, t, n) {
      n.r(t),
        n.d(t, {
          useImmutable: function () {
            return a;
          },
        });
      var r = n(827378),
        o = n(734051);
      function a(e) {
        var t;
        const n = r.useRef(e);
        return (
          (((0, o.isImmutable)(n.current) || o.Record.isRecord(e)) &&
            null !== (t = n.current) &&
            void 0 !== t &&
            t.equals(e)) ||
            (n.current = e),
          n.current
        );
      }
    },
    99907: function (e, t, n) {
      function r(e) {
        if (null === e || !0 === e || !1 === e) return NaN;
        var t = Number(e);
        return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    64083: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n(99907),
        o = n(332825),
        a = n(685902);
      function i(e, t) {
        (0, a.Z)(2, arguments);
        var n = (0, o.default)(e),
          i = (0, r.Z)(t);
        return isNaN(i)
          ? new Date(NaN)
          : i
          ? (n.setDate(n.getDate() + i), n)
          : n;
      }
    },
    726992: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(332825),
        o = n(685902);
      function a(e, t) {
        (0, o.Z)(2, arguments);
        var n = (0, r.default)(e),
          a = (0, r.default)(t);
        return n.getTime() > a.getTime();
      }
    },
    208604: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var r = n(64083),
        o = n(685902),
        a = n(99907);
      function i(e, t) {
        (0, o.Z)(2, arguments);
        var n = (0, a.Z)(t);
        return (0, r.default)(e, -n);
      }
    },
  },
]);
