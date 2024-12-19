(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [78855],
  {
    17556: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          capitalize: function () {
            return a.Z;
          },
          createChainedFunction: function () {
            return i.Z;
          },
          createSvgIcon: function () {
            return s.Z;
          },
          debounce: function () {
            return o.Z;
          },
          deprecatedPropType: function () {
            return r;
          },
          isMuiElement: function () {
            return l.Z;
          },
          ownerDocument: function () {
            return c.Z;
          },
          ownerWindow: function () {
            return u.Z;
          },
          requirePropFactory: function () {
            return d;
          },
          setRef: function () {
            return p.Z;
          },
          unstable_useId: function () {
            return g.Z;
          },
          unsupportedProp: function () {
            return m;
          },
          useControlled: function () {
            return h.Z;
          },
          useEventCallback: function () {
            return f.Z;
          },
          useForkRef: function () {
            return C.Z;
          },
          useIsFocusVisible: function () {
            return y.Z;
          },
        });
      var a = n(233056),
        i = n(514256),
        s = n(428291),
        o = n(588069);
      function r(e, t) {
        return function () {
          return null;
        };
      }
      var l = n(387526),
        c = n(244506),
        u = n(307872);
      function d(e) {
        return function () {
          return null;
        };
      }
      var p = n(214926);
      function m(e, t, n, a, i) {
        return null;
      }
      var h = n(209655),
        f = n(420926),
        C = n(601487),
        g = n(164294),
        y = n(270137);
    },
    332676: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a.createSvgIcon;
          },
        });
      var a = n(17556);
    },
    981646: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var a = n(814484),
        i = n(197308),
        s = n(827378),
        o = n(479789),
        r = n(312480),
        l = n(925608),
        c = n(922399),
        u = n(611934),
        d = n(824246),
        p = (0, u.Z)(
          (0, d.jsx)("path", {
            d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
          }),
          "Person"
        ),
        m = n(561503),
        h = n(57739);
      function f(e) {
        return (0, h.Z)("MuiAvatar", e);
      }
      (0, m.Z)("MuiAvatar", [
        "root",
        "colorDefault",
        "circular",
        "rounded",
        "square",
        "img",
        "fallback",
      ]);
      const C = [
          "alt",
          "children",
          "className",
          "component",
          "imgProps",
          "sizes",
          "src",
          "srcSet",
          "variant",
        ],
        g = (0, l.ZP)("div", {
          name: "MuiAvatar",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
          },
        })(({ theme: e, ownerState: t }) =>
          (0, i.Z)(
            {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width: 40,
              height: 40,
              fontFamily: e.typography.fontFamily,
              fontSize: e.typography.pxToRem(20),
              lineHeight: 1,
              borderRadius: "50%",
              overflow: "hidden",
              userSelect: "none",
            },
            "rounded" === t.variant && {
              borderRadius: (e.vars || e).shape.borderRadius,
            },
            "square" === t.variant && { borderRadius: 0 },
            t.colorDefault &&
              (0, i.Z)(
                { color: (e.vars || e).palette.background.default },
                e.vars
                  ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
                  : {
                      backgroundColor:
                        "light" === e.palette.mode
                          ? e.palette.grey[400]
                          : e.palette.grey[600],
                    }
              )
          )
        ),
        y = (0, l.ZP)("img", {
          name: "MuiAvatar",
          slot: "Img",
          overridesResolver: (e, t) => t.img,
        })({
          width: "100%",
          height: "100%",
          textAlign: "center",
          objectFit: "cover",
          color: "transparent",
          textIndent: 1e4,
        }),
        v = (0, l.ZP)(p, {
          name: "MuiAvatar",
          slot: "Fallback",
          overridesResolver: (e, t) => t.fallback,
        })({ width: "75%", height: "75%" });
      var x = s.forwardRef(function (e, t) {
        const n = (0, c.Z)({ props: e, name: "MuiAvatar" }),
          {
            alt: l,
            children: u,
            className: p,
            component: m = "div",
            imgProps: h,
            sizes: x,
            src: T,
            srcSet: b,
            variant: k = "circular",
          } = n,
          w = (0, a.Z)(n, C);
        let j = null;
        const L = (function ({
            crossOrigin: e,
            referrerPolicy: t,
            src: n,
            srcSet: a,
          }) {
            const [i, o] = s.useState(!1);
            return (
              s.useEffect(() => {
                if (!n && !a) return;
                o(!1);
                let i = !0;
                const s = new Image();
                return (
                  (s.onload = () => {
                    i && o("loaded");
                  }),
                  (s.onerror = () => {
                    i && o("error");
                  }),
                  (s.crossOrigin = e),
                  (s.referrerPolicy = t),
                  (s.src = n),
                  a && (s.srcset = a),
                  () => {
                    i = !1;
                  }
                );
              }, [e, t, n, a]),
              i
            );
          })((0, i.Z)({}, h, { src: T, srcSet: b })),
          S = T || b,
          A = S && "error" !== L,
          E = (0, i.Z)({}, n, { colorDefault: !A, component: m, variant: k }),
          R = ((e) => {
            const { classes: t, variant: n, colorDefault: a } = e,
              i = {
                root: ["root", n, a && "colorDefault"],
                img: ["img"],
                fallback: ["fallback"],
              };
            return (0, r.Z)(i, f, t);
          })(E);
        return (
          (j = A
            ? (0, d.jsx)(
                y,
                (0, i.Z)(
                  {
                    alt: l,
                    src: T,
                    srcSet: b,
                    sizes: x,
                    ownerState: E,
                    className: R.img,
                  },
                  h
                )
              )
            : null != u
            ? u
            : S && l
            ? l[0]
            : (0, d.jsx)(v, { className: R.fallback })),
          (0, d.jsx)(
            g,
            (0, i.Z)(
              { as: m, ownerState: E, className: (0, o.Z)(R.root, p), ref: t },
              w,
              { children: j }
            )
          )
        );
      });
    },
    565920: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return s;
        },
      });
      var a = n(824246),
        i = n(776845);
      const s = ({ setIsSupportModalOpen: e }) =>
        (0, a.jsxs)("div", {
          className:
            "w-full p-4 rounded-lg flex flex-col gap-2 items-center justify-center mb-2 bg-utility-white",
          children: [
            (0, a.jsx)("img", {
              className: "w-[200px] h-auto",
              src: "/static/img/outlier/3d-lock.svg",
            }),
            (0, a.jsx)(i.ZT.H4, {
              className: "mt-4",
              children: "This is a duplicate account",
            }),
            (0, a.jsxs)(i.ZT.Paragraph3, {
              className: "text-center w-[80%]",
              children: [
                "Please log out and sign in to your primary account. If you believe this is a mistake,",
                " ",
                (0, a.jsx)("span", {
                  className: "cursor-pointer text-primary-500",
                  onClick: () => e(!0),
                  children: "contact support",
                }),
                ".",
              ],
            }),
          ],
        });
    },
    77030: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return v;
        },
      });
      var a = n(824246),
        i = n(827378),
        s = n(776845),
        o = n(722030),
        r = n(416534),
        l = n(456552),
        c = n(190551),
        u = n(138944),
        d = n(713222),
        p = n(788524),
        m = n(502345);
      const h = ({ account: e, selected: t, loggedInAs: n, onClick: i }) => {
        const o = e.maskedEmail,
          r = e.maskedPhoneNumber,
          l = e.maskedVerifiedWorkerSkills;
        return (0, a.jsxs)("div", {
          className: (0, u.default)([
            "w-full border box-border p-4 rounded-lg border-neutral-200 hover:bg-neutral-100 cursor-pointer relative",
            t && "border-primary-500 border-2",
          ]),
          onClick: i,
          children: [
            (0, a.jsxs)("div", {
              className: "flex justify-between items-start",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    o &&
                      (0, a.jsxs)("div", {
                        className: "flex gap-1 items-center",
                        children: [
                          (0, a.jsx)(d.J, {
                            icon: ["far", "envelope"],
                            iconClassName: t
                              ? "text-primary-500"
                              : "text-neutral-400",
                          }),
                          (0, a.jsx)(s.ZT.Paragraph2, {
                            className: "text-bold",
                            children: o,
                          }),
                        ],
                      }),
                    r &&
                      (0, a.jsxs)("div", {
                        className: "flex gap-1 items-center",
                        children: [
                          (0, a.jsx)(d.J, {
                            icon: ["far", "phone"],
                            iconClassName: t
                              ? "text-primary-500"
                              : "text-neutral-400",
                          }),
                          (0, a.jsx)(s.ZT.Paragraph2, {
                            className: "text-bold",
                            children: r,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex gap-1 items-center",
                  children: (0, a.jsxs)(s.ZT.Paragraph3, {
                    className: "text-neutral-500",
                    children: [
                      "created ",
                      (0, m.default)(new Date(e.createdAt), "PPPPp"),
                    ],
                  }),
                }),
              ],
            }),
            !!l.length &&
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "border-t border-neutral-200 h-0 w-full mt-4 mb-2",
                  }),
                  (0, a.jsx)(s.ZT.Paragraph2, {
                    className: "text-neutral-500",
                    children: "Skills associated with this account",
                  }),
                  (0, a.jsx)("div", {
                    className: "flex gap-1 items-center",
                    children: l.map((e) =>
                      (0, a.jsx)(
                        p.V,
                        {
                          variant: "neutral",
                          size: "sm",
                          children: e.displayName,
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
            n &&
              (0, a.jsx)(p.V, {
                variant: "neutral",
                size: "sm",
                className: "absolute right-2 top-10",
                children: "Logged In",
              }),
          ],
        });
      };
      var f = n(691067),
        C = n(185272);
      const g = ({
        isOpen: e,
        onClose: t,
        onConfirm: n,
        confirming: o,
        needsLogout: l,
      }) => {
        const [c, u] = (0, i.useState)(!1),
          d = () => {
            u(!1), t();
          };
        return (0, a.jsx)(f.u, {
          open: e,
          onClose: d,
          hideTitle: !0,
          className: "scaleui scale-tailwind outlier-theme",
          innerClassName: "max-w-[520px]",
          actions: (0, a.jsxs)("div", {
            className: "flex items-center gap-2 justify-end",
            children: [
              (0, a.jsx)(r.zx, {
                variant: "secondary",
                onClick: d,
                children: "Cancel",
              }),
              (0, a.jsx)(r.zx, {
                variant: "primary",
                onClick: n,
                disabled: o || !c,
                children: l ? "Confirm and logout" : "Confirm",
              }),
            ],
          }),
          children: (0, a.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, a.jsx)(s.ZT.H4, {
                children: "Confirm default account selection",
              }),
              l
                ? (0, a.jsx)(s.ZT.Paragraph2, {
                    children:
                      "The account you selected will be designated as your primary account. You will be unable to work while logged in to any other accounts. Please be certain that you have access to the account you elected to keep. You will be logged out of this session.",
                  })
                : (0, a.jsx)(s.ZT.Paragraph2, {
                    children:
                      "You are designating this account to be your primary account. All other accounts will be marked as duplicate and blocked from working.",
                  }),
              (0, a.jsx)(s.ZT.Paragraph2, {
                children:
                  "We will be monitoring your selection for any unusual activity over the next three business days. We'll let you know if anything doesn't look right.",
              }),
              (0, a.jsx)(C.X, {
                label: "I understand that only one account can task",
                checked: c,
                onChange: (e) => u(e.target.checked),
              }),
            ],
          }),
        });
      };
      var y = n(527565);
      const v = ({
        user: e,
        onNext: t,
        closeModal: n,
        setIsSupportModalOpen: u,
      }) => {
        const [d, p] = (0, i.useState)(null),
          [m, f] = (0, i.useState)(!1),
          [C, v] = (0, i.useState)(!1),
          x = (0, i.useCallback)(() => f(!0), []),
          { data: T, isLoading: b } = (0, l.useQuery)(
            ["duplicate-accounts", e._id],
            c.C0,
            { staleTime: 6e4 }
          ),
          k = (0, i.useMemo)(() => {
            var e, t, n;
            return null !==
              (n =
                null ===
                  (t =
                    null ===
                      (e =
                        null === T || void 0 === T
                          ? void 0
                          : T.maskedDupGroup) || void 0 === e
                      ? void 0
                      : e.maskedDupUsers) || void 0 === t
                  ? void 0
                  : t.sort(
                      (e, t) =>
                        Number(t.isRequestingUser) - Number(e.isRequestingUser)
                    )) && void 0 !== n
              ? n
              : [];
          }, [T]),
          w = (0, i.useMemo)(() => {
            var e, t;
            return null !==
              (t =
                null ===
                  (e =
                    null === T || void 0 === T ? void 0 : T.maskedDupGroup) ||
                void 0 === e
                  ? void 0
                  : e.dupGroupId) && void 0 !== t
              ? t
              : "";
          }, [T]),
          j = (0, i.useCallback)(async () => {
            (null === d || void 0 === d ? void 0 : d.maskedUserId) &&
              ((null === d || void 0 === d ? void 0 : d.isRequestingUser)
                ? (v(!0), await (0, c.Fy)(d.maskedUserId, w), f(!1), v(!1), t())
                : (v(!0),
                  await (0, c.Fy)(d.maskedUserId, w),
                  f(!1),
                  v(!1),
                  (0, y.kS)("/expert/login")));
          }, [d, t, w]),
          L = (0, i.useCallback)(() => {
            u(!0), n && n();
          }, [u, n]);
        return (0, a.jsxs)("div", {
          className: "flex flex-col w-full items-center",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-6 max-w-[560px]",
              children: [
                (0, a.jsx)(s.ZT.H2, {
                  className: "whitespace-nowrap",
                  children: "Select a default account",
                }),
                (0, a.jsxs)(s.ZT.Paragraph2, {
                  children: [
                    "We've noticed that your account shares identifying characteristics with another Outlier account. Please select one of the accounts below to proceed. You will not be able to work while signed in with any other account, per",
                    " ",
                    (0, a.jsx)("a", {
                      className: "cursor-pointer text-primary-500",
                      href: "https://outlier.ai/legal/terms-of-use",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Outlier's Terms of Use",
                    }),
                    ". If you believe there has been a mistake, please",
                    " ",
                    (0, a.jsx)("span", {
                      className: "cursor-pointer text-primary-500",
                      onClick: L,
                      children: "contact support",
                    }),
                    ".",
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "flex flex-col gap-1 w-full",
                  children:
                    b || !k
                      ? (0, a.jsx)(o.$, { size: "lg" })
                      : k.map((e) =>
                          (0, a.jsx)(
                            h,
                            {
                              account: e,
                              selected:
                                (null === d || void 0 === d
                                  ? void 0
                                  : d.maskedUserId) === e.maskedUserId,
                              loggedInAs: e.isRequestingUser,
                              onClick: () => p(e),
                            },
                            e.maskedUserId
                          )
                        ),
                }),
                (0, a.jsx)("div", {
                  className:
                    "w-full px-4 pt-2 pb-4 flex sticky bottom-0 bg-[#FFFFFF]",
                  children: (0, a.jsx)(r.zx, {
                    className: "ml-auto",
                    onClick: x,
                    disabled: !d,
                    children: "Set as primary",
                  }),
                }),
              ],
            }),
            (0, a.jsx)(g, {
              isOpen: m,
              onClose: () => f(!1),
              onConfirm: j,
              confirming: C,
              needsLogout: !(null === d || void 0 === d
                ? void 0
                : d.isRequestingUser),
            }),
          ],
        });
      };
    },
    403196: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return u;
        },
      });
      var a = n(824246),
        i = n(827378),
        s = n(691067),
        o = n(77030);
      const r = ({
        user: e,
        isOpen: t,
        onClose: n,
        setIsSupportModalOpen: i,
      }) =>
        (0, a.jsx)(s.u, {
          open: t,
          onClose: n,
          hideTitle: !0,
          className: "scaleui scale-tailwind outlier-theme",
          innerClassName: "max-w-[800px]",
          innerPanelClassName: "pb-0",
          children: (0, a.jsx)(o.L, {
            user: e,
            onNext: n,
            closeModal: n,
            setIsSupportModalOpen: i,
          }),
        });
      var l = n(776845),
        c = n(416534);
      const u = ({ user: e, refetch: t, setIsSupportModalOpen: n }) => {
        const [s, o] = (0, i.useState)(!1),
          u = (0, i.useCallback)(() => {
            o(!1), t();
          }, [t]);
        return (0, a.jsxs)("div", {
          className:
            "w-full p-4 rounded-lg flex flex-col gap-2 items-center justify-center mb-2 bg-utility-white",
          children: [
            (0, a.jsx)("img", {
              className: "w-[200px] h-auto",
              src: "/static/img/outlier/verify_identity.svg",
            }),
            (0, a.jsx)(l.ZT.H4, {
              className: "mt-4",
              children: "Resolve duplicate accounts",
            }),
            (0, a.jsxs)(l.ZT.Paragraph3, {
              className: "text-center w-[60%]",
              children: [
                "We've noticed that your account shares identifying characteristics with another Outlier account. Please select one of the accounts to proceed. You will not be able to work while signed in with any other account, per",
                " ",
                (0, a.jsx)("a", {
                  className: "cursor-pointer text-primary-500",
                  href: "https://outlier.ai/legal/terms-of-use",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Outlier's Terms of Use",
                }),
                " ",
                "If you believe there has been a mistake, please",
                " ",
                (0, a.jsx)("span", {
                  className: "cursor-pointer text-primary-500",
                  onClick: () => n(!0),
                  children: "contact support",
                }),
                ".",
              ],
            }),
            (0, a.jsx)(c.zx, {
              variant: "primary",
              onClick: () => o(!0),
              children: "Review accounts",
            }),
            (0, a.jsx)(r, {
              user: e,
              isOpen: s,
              onClose: u,
              setIsSupportModalOpen: n,
            }),
          ],
        });
      };
    },
    619998: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return p;
        },
      });
      var a = n(824246),
        i = n(277488);
      const s = () =>
          (0, a.jsx)(i.A, {
            explanation: (0, a.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, a.jsx)("div", {
                  className: "font-bold text-xl",
                  children: " Project unavailable in your region",
                }),
                (0, a.jsx)("div", {
                  children: "Thank you for your interest in joining Outlier.",
                }),
                (0, a.jsx)("div", {
                  children:
                    "We appreciate the time you've taken to sign up. Unfortunately the project you applied to is unavailable in your region at this time. We will notify you when work becomes available in your region.",
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-flag.svg",
          }),
        o = () =>
          (0, a.jsx)(i.A, {
            explanation: (0, a.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, a.jsx)("div", {
                  className: "font-bold text-xl",
                  children: "Multiple accounts detected",
                }),
                (0, a.jsx)("div", {
                  children:
                    "We have detected that the account associated with this email address shares some identifying characteristics with another account.",
                }),
                (0, a.jsx)("div", {
                  children:
                    "As a reminder, our Terms of Use prohibit users from holding multiple accounts, so we will be placing a hold on this account.",
                }),
                (0, a.jsx)("div", {
                  className: "font-bold",
                  children:
                    "Please log in to your original account to continue.",
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-lock.svg",
          }),
        r = () =>
          (0, a.jsx)(i.A, {
            explanation: (0, a.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, a.jsx)("div", {
                  className: "font-bold text-xl",
                  children: "You are currently ineligible to work on projects ",
                }),
                (0, a.jsx)("div", {
                  children:
                    "This determination has been made on the basis of previous task submissions, which did not meet the exacting standards demanded by our customers. We are not accepting appeals at this time.",
                }),
                (0, a.jsx)("div", {
                  children:
                    "If a new project becomes available for which you may qualify, we will let you know via email.",
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-flag.svg",
          }),
        l = () =>
          (0, a.jsx)(i.A, {
            explanation: (0, a.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, a.jsx)("div", {
                  className: "font-bold text-xl",
                  children: "Potential Community Guidelines violation detected",
                }),
                (0, a.jsx)("div", {
                  children:
                    "After multiple warnings, you have been removed from your project due to concerns about work quality or average task time that potentially constitute violations of our Community Guidelines.",
                }),
                (0, a.jsx)("div", {
                  children:
                    "You will receive payment of any outstanding balance in your account during the next payment cycle, which is processed weekly on Tuesdays and, depending on your method of payment, may take up to 48 hours to appear in your account.",
                }),
                (0, a.jsx)("div", {
                  children:
                    "Please email accountaccess@outlier.ai if you believe there has been an error.",
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/3d-flag.svg",
          }),
        c = {
          "65c290b1ce9eaacb074fb21d": "System abuse holding",
          "65b3eb831e8e881176c5eb87": "Duplicate account",
          "65b3eb969df31e36ba886aa1": "Duplicate account",
          "65bc48af05c0352d9ce11776": "Geographic permissioning",
          "65bc4893e72d8086496a2c2e": "Geographic permissioning",
          "65bc4870d56908f701b33acb": "Geographic permissioning",
          "65b8633a1fce0a2c92fd499d": "Persona failed",
          "65a98319daa24011ec5051e9": "Persona failed",
        };
      var u = n(364984);
      const d = () =>
          (0, a.jsx)(i.A, {
            explanation: (0, a.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, a.jsx)("div", {
                  className: "font-bold text-xl",
                  children: "Thank you for your interest",
                }),
                (0, a.jsx)("div", {
                  children:
                    "We appreciate you taking the time to sign up and sincerely appreciate your interest in Outlier. Unfortunately at this time, we don't have any projects that fit your skill sets. We always have new projects and will notify you if there is a project that\u2019s a good fit in the future!",
                }),
              ],
            }),
            iconSrc: "/static/img/outlier/clouds.svg",
          }),
        p = ({
          workerTeamId: e,
          isFailed: t,
          workerTeamType: n,
          additionalContent: i,
          children: p,
          userId: m,
        }) => {
          if (!e) return p;
          if (t) return (0, a.jsx)(d, {});
          const h = c[e];
          if ("low_quality" === n)
            return (0, a.jsxs)("div", {
              className: "space-y-6",
              children: [(0, a.jsx)(r, {}), i],
            });
          switch (h) {
            case "Duplicate account":
              return (0, a.jsx)(o, {});
            case "System abuse holding":
              return (0, a.jsx)(l, {});
            case "Geographic permissioning":
              return (0, a.jsx)(s, {});
            case "Persona failed":
              return (0, a.jsx)(u.S, { userId: m });
            default:
              return p;
          }
        };
    },
    717955: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return g;
        },
      });
      var a = n(824246),
        i = n(691067),
        s = n(776845),
        o = n(416534),
        r = n(713222),
        l = n(722030),
        c = n(827378),
        u = n(456552),
        d = n(14781),
        p = n(527565);
      var m = function () {
        return (0, a.jsxs)("svg", {
          width: "232",
          height: "140",
          viewBox: "0 0 232 140",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsxs)("g", {
              style: { mixBlendMode: "multiply" },
              children: [
                (0, a.jsx)("path", {
                  opacity: "0.03",
                  d: "M200.125 52.794C160.189 29.74 118.974 29.74 79.0239 52.794C59.0561 64.328 49.0723 76.0328 49.0723 87.7517C49.0723 99.4707 59.0561 111.175 79.0239 122.71C118.959 145.763 160.175 145.763 200.125 122.71C220.092 111.175 230.076 99.4707 230.076 87.7517C230.076 76.0328 220.092 64.328 200.125 52.794Z",
                  fill: "#FCFCFC",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.06",
                  d: "M198.603 52.794C158.668 29.74 117.452 29.74 77.5025 52.794C57.5347 64.328 47.5508 76.0328 47.5508 87.7517C47.5508 99.4707 57.5347 111.175 77.5025 122.71C117.438 145.763 158.653 145.763 198.603 122.71C218.571 111.175 228.555 99.4707 228.555 87.7517C228.555 76.0328 218.571 64.328 198.603 52.794Z",
                  fill: "#F9F9F9",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.09",
                  d: "M197.082 52.794C157.146 29.74 115.931 29.74 75.9809 52.794C56.0132 64.328 46.0293 76.0328 46.0293 87.7517C46.0293 99.4707 56.0132 111.175 75.9809 122.71C115.916 145.763 157.132 145.763 197.082 122.71C217.049 111.175 227.033 99.4707 227.033 87.7517C227.033 76.0328 217.049 64.328 197.082 52.794Z",
                  fill: "#F5F5F5",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.12",
                  d: "M195.558 52.794C155.623 29.74 114.407 29.74 74.4575 52.794C54.4897 64.328 44.5059 76.0328 44.5059 87.7517C44.5059 99.4707 54.4897 111.175 74.4575 122.71C114.393 145.763 155.608 145.763 195.558 122.71C215.526 111.175 225.51 99.4707 225.51 87.7517C225.51 76.0328 215.526 64.328 195.558 52.794Z",
                  fill: "#F2F2F2",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.15",
                  d: "M194.037 52.794C154.101 29.74 112.886 29.74 72.936 52.794C52.9682 64.328 42.9844 76.0328 42.9844 87.7517C42.9844 99.4707 52.9682 111.175 72.936 122.71C112.872 145.763 154.087 145.763 194.037 122.71C214.004 111.175 223.988 99.4707 223.988 87.7517C223.988 76.0328 214.004 64.328 194.037 52.794Z",
                  fill: "#EFEFEF",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.18",
                  d: "M192.515 52.794C152.58 29.74 111.364 29.74 71.4145 52.794C51.4468 64.328 41.4629 76.0328 41.4629 87.7517C41.4629 99.4707 51.4468 111.175 71.4145 122.71C111.35 145.763 152.566 145.763 192.515 122.71C212.483 111.175 222.467 99.4707 222.467 87.7517C222.467 76.0328 212.483 64.328 192.515 52.794Z",
                  fill: "#ECECEC",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.21",
                  d: "M190.996 52.794C151.06 29.74 109.845 29.74 69.895 52.794C49.9272 64.328 39.9434 76.0328 39.9434 87.7517C39.9434 99.4707 49.9272 111.175 69.895 122.71C109.831 145.763 151.046 145.763 190.996 122.71C210.964 111.175 220.947 99.4707 220.947 87.7517C220.947 76.0328 210.964 64.328 190.996 52.794Z",
                  fill: "#E8E8E8",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.24",
                  d: "M189.472 52.794C149.537 29.74 108.321 29.74 68.3716 52.794C48.4038 64.328 38.4199 76.0328 38.4199 87.7517C38.4199 99.4707 48.4038 111.175 68.3716 122.71C108.307 145.763 149.523 145.763 189.472 122.71C209.44 111.175 219.424 99.4707 219.424 87.7517C219.424 76.0328 209.44 64.328 189.472 52.794Z",
                  fill: "#E5E5E5",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.27",
                  d: "M187.951 52.794C148.015 29.74 106.8 29.74 66.8501 52.794C46.8823 64.328 36.8984 76.0328 36.8984 87.7517C36.8984 99.4707 46.8823 111.175 66.8501 122.71C106.786 145.763 148.001 145.763 187.951 122.71C207.919 111.175 217.902 99.4707 217.902 87.7517C217.902 76.0328 207.919 64.328 187.951 52.794Z",
                  fill: "#E2E2E2",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.3",
                  d: "M186.427 52.794C146.492 29.74 105.276 29.74 65.3266 52.794C45.3589 64.328 35.375 76.0328 35.375 87.7517C35.375 99.4707 45.3589 111.175 65.3266 122.71C105.262 145.763 146.478 145.763 186.427 122.71C206.395 111.175 216.379 99.4707 216.379 87.7517C216.379 76.0328 206.395 64.328 186.427 52.794Z",
                  fill: "#DFDFDF",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.33",
                  d: "M184.906 52.794C144.97 29.74 103.755 29.74 63.8051 52.794C43.8374 64.328 33.8535 76.0328 33.8535 87.7517C33.8535 99.4707 43.8374 111.175 63.8051 122.71C103.741 145.763 144.956 145.763 184.906 122.71C204.874 111.175 214.857 99.4707 214.857 87.7517C214.857 76.0328 204.874 64.328 184.906 52.794Z",
                  fill: "#DBDBDB",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.36",
                  d: "M183.384 52.794C143.449 29.74 102.233 29.74 62.2837 52.794C42.3159 64.328 32.332 76.0328 32.332 87.7517C32.332 99.4707 42.3159 111.175 62.2837 122.71C102.219 145.763 143.435 145.763 183.384 122.71C203.352 111.175 213.336 99.4707 213.336 87.7517C213.336 76.0328 203.352 64.328 183.384 52.794Z",
                  fill: "#D8D8D8",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.39",
                  d: "M181.865 52.794C141.929 29.74 100.714 29.74 60.7641 52.794C40.7964 64.328 30.8125 76.0328 30.8125 87.7517C30.8125 99.4707 40.7964 111.175 60.7641 122.71C100.7 145.763 141.915 145.763 181.865 122.71C201.833 111.175 211.816 99.4707 211.816 87.7517C211.816 76.0328 201.833 64.328 181.865 52.794Z",
                  fill: "#D5D5D5",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.42",
                  d: "M180.355 52.794C140.42 29.74 99.2041 29.74 59.2544 52.794C39.2866 64.328 29.3027 76.0328 29.3027 87.7517C29.3027 99.4707 39.2866 111.175 59.2544 122.71C99.1899 145.763 140.405 145.763 180.355 122.71C200.323 111.175 210.307 99.4707 210.307 87.7517C210.307 76.0328 200.323 64.328 180.355 52.794Z",
                  fill: "#D2D2D2",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.45",
                  d: "M178.834 52.794C138.898 29.74 97.6826 29.74 57.7329 52.794C37.7651 64.328 27.7812 76.0328 27.7812 87.7517C27.7812 99.4707 37.7651 111.175 57.7329 122.71C97.6684 145.763 138.884 145.763 178.834 122.71C198.801 111.175 208.785 99.4707 208.785 87.7517C208.785 76.0328 198.801 64.328 178.834 52.794Z",
                  fill: "#CECECE",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.48",
                  d: "M177.312 52.794C137.377 29.74 96.1611 29.74 56.2114 52.794C36.2436 64.328 26.2598 76.0328 26.2598 87.7517C26.2598 99.4707 36.2436 111.175 56.2114 122.71C96.1469 145.763 137.362 145.763 177.312 122.71C197.28 111.175 207.264 99.4707 207.264 87.7517C207.264 76.0328 197.28 64.328 177.312 52.794Z",
                  fill: "#CBCBCB",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.52",
                  d: "M175.789 52.794C135.853 29.74 94.6377 29.74 54.688 52.794C34.7202 64.328 24.7363 76.0328 24.7363 87.7517C24.7363 99.4707 34.7202 111.175 54.688 122.71C94.6235 145.763 135.839 145.763 175.789 122.71C195.756 111.175 205.74 99.4707 205.74 87.7517C205.74 76.0328 195.756 64.328 175.789 52.794Z",
                  fill: "#C8C8C8",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.55",
                  d: "M174.267 52.794C134.332 29.74 93.1162 29.74 53.1665 52.794C33.1987 64.328 23.2148 76.0328 23.2148 87.7517C23.2148 99.4707 33.1987 111.175 53.1665 122.71C93.102 145.763 134.318 145.763 174.267 122.71C194.235 111.175 204.219 99.4707 204.219 87.7517C204.219 76.0328 194.235 64.328 174.267 52.794Z",
                  fill: "#C5C5C5",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.58",
                  d: "M172.75 52.794C132.814 29.74 91.5986 29.74 51.6489 52.794C31.6811 64.328 21.6973 76.0328 21.6973 87.7517C21.6973 99.4707 31.6811 111.175 51.6489 122.71C91.5844 145.763 132.8 145.763 172.75 122.71C192.717 111.175 202.701 99.4707 202.701 87.7517C202.701 76.0328 192.717 64.328 172.75 52.794Z",
                  fill: "#C1C1C1",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.61",
                  d: "M171.226 52.794C131.291 29.74 90.0753 29.74 50.1255 52.794C30.1578 64.328 20.1738 76.0328 20.1738 87.7517C20.1738 99.4707 30.1578 111.175 50.1255 122.71C90.0611 145.763 131.277 145.763 171.226 122.71C191.194 111.175 201.178 99.4707 201.178 87.7517C201.178 76.0328 191.194 64.328 171.226 52.794Z",
                  fill: "#BEBEBE",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.64",
                  d: "M169.703 52.794C129.767 29.74 88.5518 29.74 48.602 52.794C28.6343 64.328 18.6504 76.0328 18.6504 87.7517C18.6504 99.4707 28.6343 111.175 48.602 122.71C88.5375 145.763 129.753 145.763 169.703 122.71C189.67 111.175 199.654 99.4707 199.654 87.7517C199.654 76.0328 189.67 64.328 169.703 52.794Z",
                  fill: "#BBBBBB",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.67",
                  d: "M168.181 52.794C128.246 29.74 87.0303 29.74 47.0805 52.794C27.1128 64.328 17.1289 76.0328 17.1289 87.7517C17.1289 99.4707 27.1128 111.175 47.0805 122.71C87.0161 145.763 128.232 145.763 168.181 122.71C188.149 111.175 198.133 99.4707 198.133 87.7517C198.133 76.0328 188.149 64.328 168.181 52.794Z",
                  fill: "#B8B8B8",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.7",
                  d: "M166.66 52.794C126.724 29.74 85.5088 29.74 45.5591 52.794C25.5913 64.328 15.6074 76.0328 15.6074 87.7517C15.6074 99.4707 25.5913 111.175 45.5591 122.71C85.4946 145.763 126.71 145.763 166.66 122.71C186.627 111.175 196.611 99.4707 196.611 87.7517C196.611 76.0328 186.627 64.328 166.66 52.794Z",
                  fill: "#B4B4B4",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.73",
                  d: "M165.136 52.794C125.201 29.74 83.9853 29.74 44.0356 52.794C24.0679 64.328 14.084 76.0328 14.084 87.7517C14.084 99.4707 24.0679 111.175 44.0356 122.71C83.9711 145.763 125.187 145.763 165.136 122.71C185.104 111.175 195.088 99.4707 195.088 87.7517C195.088 76.0328 185.104 64.328 165.136 52.794Z",
                  fill: "#B1B1B1",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.76",
                  d: "M163.617 52.794C123.681 29.74 82.4658 29.74 42.5161 52.794C22.5483 64.328 12.5645 76.0328 12.5645 87.7517C12.5645 99.4707 22.5483 111.175 42.5161 122.71C82.4516 145.763 123.667 145.763 163.617 122.71C183.585 111.175 193.568 99.4707 193.568 87.7517C193.568 76.0328 183.585 64.328 163.617 52.794Z",
                  fill: "#AEAEAE",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.79",
                  d: "M162.095 52.794C122.16 29.74 80.9443 29.74 40.9946 52.794C21.0268 64.328 11.043 76.0328 11.043 87.7517C11.043 99.4707 21.0268 111.175 40.9946 122.71C80.9301 145.763 122.146 145.763 162.095 122.71C182.063 111.175 192.047 99.4707 192.047 87.7517C192.047 76.0328 182.063 64.328 162.095 52.794Z",
                  fill: "#ABABAB",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.82",
                  d: "M160.572 52.794C120.636 29.74 79.4209 29.74 39.4712 52.794C19.5034 64.328 9.51953 76.0328 9.51953 87.7517C9.51953 99.4707 19.5034 111.175 39.4712 122.71C79.4067 145.763 120.622 145.763 160.572 122.71C180.54 111.175 190.524 99.4707 190.524 87.7517C190.524 76.0328 180.54 64.328 160.572 52.794Z",
                  fill: "#A7A7A7",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.85",
                  d: "M159.064 52.794C119.129 29.74 77.9131 29.74 37.9633 52.794C17.9956 64.328 8.01172 76.0328 8.01172 87.7517C8.01172 99.4707 17.9956 111.175 37.9633 122.71C77.8989 145.763 119.114 145.763 159.064 122.71C179.032 111.175 189.016 99.4707 189.016 87.7517C189.016 76.0328 179.032 64.328 159.064 52.794Z",
                  fill: "#A4A4A4",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.88",
                  d: "M157.543 52.794C117.607 29.74 76.3916 29.74 36.4419 52.794C16.4741 64.328 6.49023 76.0328 6.49023 87.7517C6.49023 99.4707 16.4741 111.175 36.4419 122.71C76.3774 145.763 117.593 145.763 157.543 122.71C177.51 111.175 187.494 99.4707 187.494 87.7517C187.494 76.0328 177.51 64.328 157.543 52.794Z",
                  fill: "#A1A1A1",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.91",
                  d: "M156.023 52.794C116.088 29.74 74.8721 29.74 34.9223 52.794C14.9546 64.328 4.9707 76.0328 4.9707 87.7517C4.9707 99.4707 14.9546 111.175 34.9223 122.71C74.8579 145.763 116.073 145.763 156.023 122.71C175.991 111.175 185.975 99.4707 185.975 87.7517C185.975 76.0328 175.991 64.328 156.023 52.794Z",
                  fill: "#9E9E9E",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.94",
                  d: "M154.5 52.794C114.564 29.74 73.3486 29.74 33.3989 52.794C13.4311 64.328 3.44727 76.0328 3.44727 87.7517C3.44727 99.4707 13.4311 111.175 33.3989 122.71C73.3344 145.763 114.55 145.763 154.5 122.71C174.467 111.175 184.451 99.4707 184.451 87.7517C184.451 76.0328 174.467 64.328 154.5 52.794Z",
                  fill: "#9A9A9A",
                }),
                (0, a.jsx)("path", {
                  opacity: "0.97",
                  d: "M152.98 52.794C113.045 29.74 71.8291 29.74 31.8794 52.794C11.9116 64.328 1.92773 76.0328 1.92773 87.7517C1.92773 99.4707 11.9116 111.175 31.8794 122.71C71.8149 145.763 113.03 145.763 152.98 122.71C172.948 111.175 182.932 99.4707 182.932 87.7517C182.932 76.0328 172.948 64.328 152.98 52.794Z",
                  fill: "#979797",
                }),
                (0, a.jsx)("path", {
                  d: "M151.457 52.794C111.521 29.74 70.3057 29.74 30.3559 52.794C10.3882 64.328 0.404297 76.0328 0.404297 87.7517C0.404297 99.4707 10.3882 111.175 30.3559 122.71C70.2914 145.763 111.507 145.763 151.457 122.71C171.424 111.175 181.408 99.4707 181.408 87.7517C181.408 76.0328 171.424 64.328 151.457 52.794Z",
                  fill: "#949494",
                }),
              ],
            }),
            (0, a.jsx)("path", {
              d: "M151.457 105.259C111.521 128.313 70.3057 128.313 30.3559 105.259C10.3882 93.725 0.404297 82.0203 0.404297 70.3013V87.7517C0.404297 99.4707 10.3882 111.175 30.3559 122.71C70.2914 145.763 111.507 145.763 151.457 122.71C171.424 111.175 181.408 99.4707 181.408 87.7517V70.3013C181.408 82.0203 171.424 93.725 151.457 105.259Z",
              fill: "url(#paint0_linear_456_7049)",
            }),
            (0, a.jsx)("path", {
              d: "M151.457 35.3435C111.521 12.2896 70.3057 12.2896 30.3559 35.3435C10.3882 46.8776 0.404297 58.5823 0.404297 70.3013C0.404297 82.0203 10.3882 93.725 30.3559 105.259C70.2914 128.313 111.507 128.313 151.457 105.259C171.424 93.725 181.408 82.0203 181.408 70.3013C181.408 58.5823 171.424 46.8776 151.457 35.3435Z",
              fill: "#EF5619",
            }),
            (0, a.jsx)("path", {
              d: "M121.547 52.6091C101.337 40.9328 80.4737 40.9328 60.2642 52.6091C50.1523 58.4401 45.1035 64.3707 45.1035 70.3013C45.1035 76.2319 50.1523 82.1625 60.2642 87.9935C80.4737 99.6698 101.337 99.6698 121.547 87.9935C131.659 82.1625 136.708 76.2319 136.708 70.3013C136.708 64.3707 131.659 58.4401 121.547 52.6091Z",
              fill: "#EF6719",
            }),
            (0, a.jsx)("mask", {
              id: "mask0_456_7049",
              style: { maskType: "luminance" },
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "18",
              width: "182",
              height: "105",
              children: (0, a.jsx)("path", {
                d: "M151.457 35.3435C111.521 12.2896 70.3057 12.2896 30.3559 35.3435C10.3882 46.8776 0.404297 58.5823 0.404297 70.3013C0.404297 82.0203 10.3882 93.725 30.3559 105.259C70.2914 128.313 111.507 128.313 151.457 105.259C171.424 93.725 181.408 82.0203 181.408 70.3013C181.408 58.5823 171.424 46.8776 151.457 35.3435Z",
                fill: "white",
              }),
            }),
            (0, a.jsx)("g", {
              mask: "url(#mask0_456_7049)",
              children: (0, a.jsxs)("g", {
                style: { mixBlendMode: "multiply" },
                children: [
                  (0, a.jsx)("path", {
                    opacity: "0.03",
                    d: "M179.314 6.85672C166.784 -0.368082 155.719 -1.7476 149.092 2.07813L142.564 5.84696C141.853 6.2594 141.227 6.74295 140.615 7.26917C132.907 3.91277 126.237 3.55722 121.956 6.03186L116.85 8.97583C113.622 10.8389 111.73 14.2664 111.73 19.1446C111.73 25.7152 115.172 33.6084 120.676 40.9754L115.77 49.7789L128.84 50.0775C132.409 53.4197 136.363 56.4206 140.53 58.8241C149.817 64.1858 158.023 65.3805 163.285 62.9627C166.329 65.3662 169.5 67.5849 172.8 69.4764C178.119 72.5484 183.154 74.5395 187.719 75.5492L204.416 94.4645L210.944 90.6957L204.97 73.103L209.564 70.4577C213.674 68.0826 216.092 63.7307 216.092 57.5157C216.092 41.2599 199.637 18.5757 179.328 6.85672H179.314Z",
                    fill: "#FEF9F7",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.06",
                    d: "M177.027 6.85672C164.497 -0.368082 153.432 -1.7476 146.805 2.07813L140.277 5.84696C139.566 6.2594 138.94 6.74295 138.328 7.26917C130.62 3.91277 123.95 3.55722 119.669 6.03186L114.563 8.97583C111.335 10.8389 109.443 14.2664 109.443 19.1446C109.443 25.7152 112.885 33.6084 118.389 40.9754L113.482 49.7789L126.553 50.0775C130.122 53.4197 134.076 56.4206 138.243 58.8241C147.53 64.1858 155.736 65.3805 160.998 62.9627C164.042 65.3662 167.213 67.5849 170.513 69.4764C175.832 72.5484 180.866 74.5395 185.432 75.5492L202.128 94.4645L208.656 90.6957L202.683 73.103L207.277 70.4577C211.387 68.0826 213.805 63.7307 213.805 57.5157C213.805 41.2599 197.35 18.5757 177.041 6.85672H177.027Z",
                    fill: "#FCF2F0",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.09",
                    d: "M174.747 6.85672C162.218 -0.368082 151.153 -1.7476 144.525 2.07813L137.997 5.84696C137.286 6.2594 136.646 6.74295 136.049 7.26917C128.341 3.91277 121.671 3.55722 117.39 6.03186L112.284 8.97583C109.056 10.8389 107.164 14.2664 107.164 19.1446C107.164 25.7152 110.606 33.6084 116.11 40.9754L111.203 49.7789L124.273 50.0775C127.843 53.4197 131.797 56.4206 135.964 58.8241C145.251 64.1858 153.457 65.3805 158.719 62.9627C161.763 65.3662 164.934 67.5849 168.234 69.4764C173.553 72.5484 178.587 74.5395 183.152 75.5492L199.849 94.4645L206.377 90.6957L200.404 73.103L204.998 70.4577C209.108 68.0826 211.525 63.7307 211.525 57.5157C211.525 41.2599 195.071 18.5757 174.761 6.85672H174.747Z",
                    fill: "#FBECE8",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.12",
                    d: "M172.46 6.85672C159.93 -0.368082 148.866 -1.7476 142.238 2.07813L135.71 5.84696C134.999 6.2594 134.373 6.74295 133.762 7.26917C126.054 3.91277 119.383 3.55722 115.103 6.03186L109.997 8.97583C106.768 10.8389 104.877 14.2664 104.877 19.1446C104.877 25.7152 108.319 33.6084 113.823 40.9754L108.916 49.7789L121.986 50.0775C125.556 53.4197 129.51 56.4206 133.677 58.8241C142.964 64.1858 151.17 65.3805 156.432 62.9627C159.475 65.3662 162.647 67.5849 165.946 69.4764C171.265 72.5484 176.3 74.5395 180.865 75.5492L197.562 94.4645L204.09 90.6957L198.117 73.103L202.71 70.4577C206.821 68.0826 209.238 63.7307 209.238 57.5157C209.238 41.2599 192.783 18.5757 172.474 6.85672H172.46Z",
                    fill: "#F9E6E0",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.15",
                    d: "M170.185 6.85672C157.655 -0.368082 146.59 -1.7476 139.963 2.07813L133.435 5.84696C132.724 6.2594 132.098 6.74295 131.487 7.26917C123.778 3.91277 117.108 3.55722 112.827 6.03186L107.722 8.97583C104.493 10.8389 102.602 14.2664 102.602 19.1446C102.602 25.7152 106.043 33.6084 111.547 40.9754L106.641 49.7789L119.711 50.0775C123.28 53.4197 127.234 56.4206 131.401 58.8241C140.688 64.1858 148.894 65.3805 154.156 62.9627C157.2 65.3662 160.372 67.5849 163.671 69.4764C168.99 72.5484 174.025 74.5395 178.59 75.5492L195.287 94.4645L201.815 90.6957L195.841 73.103L200.435 70.4577C204.545 68.0826 206.963 63.7307 206.963 57.5157C206.963 41.2599 190.508 18.5757 170.199 6.85672H170.185Z",
                    fill: "#F8DFD8",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.18",
                    d: "M167.911 6.85672C155.382 -0.368082 144.317 -1.7476 137.689 2.07813L131.162 5.84696C130.45 6.2594 129.825 6.74295 129.213 7.26917C121.505 3.91277 114.835 3.55722 110.554 6.03186L105.448 8.97583C102.22 10.8389 100.328 14.2664 100.328 19.1446C100.328 25.7152 103.77 33.6084 109.274 40.9754L104.367 49.7789L117.437 50.0775C121.007 53.4197 124.961 56.4206 129.128 58.8241C138.415 64.1858 146.621 65.3805 151.883 62.9627C154.927 65.3662 158.098 67.5849 161.398 69.4764C166.717 72.5484 171.751 74.5395 176.317 75.5492L193.013 94.4645L199.541 90.6957L193.568 73.103L198.162 70.4577C202.272 68.0826 204.69 63.7307 204.69 57.5157C204.69 41.2599 188.235 18.5757 167.925 6.85672H167.911Z",
                    fill: "#F6D9D1",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.21",
                    d: "M165.618 6.85672C153.089 -0.368082 142.024 -1.7476 135.397 2.07813L128.869 5.84696C128.158 6.2594 127.518 6.74295 126.92 7.26917C119.212 3.91277 112.542 3.55722 108.261 6.03186L103.155 8.97583C99.9267 10.8389 98.0352 14.2664 98.0352 19.1446C98.0352 25.7152 101.477 33.6084 106.981 40.9754L102.074 49.7789L115.144 50.0775C118.714 53.4197 122.668 56.4206 126.835 58.8241C136.122 64.1858 144.328 65.3805 149.59 62.9627C152.634 65.3662 155.805 67.5849 159.105 69.4764C164.424 72.5484 169.458 74.5395 174.024 75.5492L190.72 94.4645L197.248 90.6957L191.275 73.103L195.869 70.4577C199.979 68.0826 202.397 63.7307 202.397 57.5157C202.397 41.2599 185.942 18.5757 165.633 6.85672H165.618Z",
                    fill: "#F5D2C9",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.24",
                    d: "M163.345 6.85672C150.815 -0.368082 139.751 -1.7476 133.123 2.07813L126.595 5.84696C125.884 6.2594 125.244 6.74295 124.647 7.26917C116.938 3.91277 110.268 3.55722 105.987 6.03186L100.882 8.97583C97.6532 10.8389 95.7617 14.2664 95.7617 19.1446C95.7617 25.7152 99.2034 33.6084 104.707 40.9754L99.8008 49.7789L112.871 50.0775C116.441 53.4197 120.394 56.4206 124.561 58.8241C133.848 64.1858 142.054 65.3805 147.317 62.9627C150.36 65.3662 153.532 67.5849 156.831 69.4764C162.15 72.5484 167.185 74.5395 171.75 75.5492L188.447 94.4645L194.975 90.6957L189.001 73.103L193.595 70.4577C197.705 68.0826 200.123 63.7307 200.123 57.5157C200.123 41.2599 183.668 18.5757 163.359 6.85672H163.345Z",
                    fill: "#F3CCC1",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.27",
                    d: "M161.067 6.85672C148.538 -0.368082 137.473 -1.7476 130.846 2.07813L124.318 5.84696C123.607 6.2594 122.981 6.74295 122.369 7.26917C114.661 3.91277 107.991 3.55722 103.71 6.03186L98.6043 8.97583C95.3759 10.8389 93.4844 14.2664 93.4844 19.1446C93.4844 25.7152 96.9261 33.6084 102.43 40.9754L97.5234 49.7789L110.593 50.0775C114.163 53.4197 118.117 56.4206 122.284 58.8241C131.571 64.1858 139.777 65.3805 145.039 62.9627C148.083 65.3662 151.254 67.5849 154.554 69.4764C159.873 72.5484 164.907 74.5395 169.473 75.5492L186.169 94.4645L192.697 90.6957L186.724 73.103L191.318 70.4577C195.428 68.0826 197.846 63.7307 197.846 57.5157C197.846 41.2599 181.391 18.5757 161.082 6.85672H161.067Z",
                    fill: "#F2C6B9",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.3",
                    d: "M158.779 6.85672C146.249 -0.368082 135.184 -1.7476 128.557 2.07813L122.029 5.84696C121.318 6.2594 120.692 6.74295 120.08 7.26917C112.372 3.91277 105.702 3.55722 101.421 6.03186L96.3153 8.97583C93.0869 10.8389 91.1953 14.2664 91.1953 19.1446C91.1953 25.7152 94.6371 33.6084 100.141 40.9754L95.2344 49.7789L108.304 50.0775C111.874 53.4197 115.828 56.4206 119.995 58.8241C129.282 64.1858 137.488 65.3805 142.75 62.9627C145.794 65.3662 148.965 67.5849 152.265 69.4764C157.584 72.5484 162.619 74.5395 167.184 75.5492L183.88 94.4645L190.408 90.6957L184.435 73.103L189.029 70.4577C193.139 68.0826 195.557 63.7307 195.557 57.5157C195.557 41.2599 179.102 18.5757 158.793 6.85672H158.779Z",
                    fill: "#F0BFB2",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.33",
                    d: "M156.501 6.85672C143.972 -0.368082 132.907 -1.7476 126.279 2.07813L119.751 5.84696C119.04 6.2594 118.4 6.74295 117.803 7.26917C110.095 3.91277 103.424 3.55722 99.1436 6.03186L94.0379 8.97583C90.8095 10.8389 88.918 14.2664 88.918 19.1446C88.918 25.7152 92.3597 33.6084 97.8636 40.9754L92.9571 49.7789L106.027 50.0775C109.597 53.4197 113.551 56.4206 117.718 58.8241C127.005 64.1858 135.211 65.3805 140.473 62.9627C143.516 65.3662 146.688 67.5849 149.987 69.4764C155.307 72.5484 160.341 74.5395 164.906 75.5492L181.603 94.4645L188.131 90.6957L182.158 73.103L186.751 70.4577C190.862 68.0826 193.279 63.7307 193.279 57.5157C193.279 41.2599 176.824 18.5757 156.515 6.85672H156.501Z",
                    fill: "#EFB9AA",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.36",
                    d: "M154.212 6.85672C141.682 -0.368082 130.618 -1.7476 123.99 2.07813L117.462 5.84696C116.751 6.2594 116.111 6.74295 115.514 7.26917C107.806 3.91277 101.135 3.55722 96.8546 6.03186L91.7488 8.97583C88.5204 10.8389 86.6289 14.2664 86.6289 19.1446C86.6289 25.7152 90.0706 33.6084 95.5745 40.9754L90.6679 49.7789L103.738 50.0775C107.308 53.4197 111.261 56.4206 115.429 58.8241C124.716 64.1858 132.922 65.3805 138.184 62.9627C141.227 65.3662 144.399 67.5849 147.698 69.4764C153.017 72.5484 158.052 74.5395 162.617 75.5492L179.314 94.4645L185.842 90.6957L179.869 73.103L184.462 70.4577C188.573 68.0826 190.99 63.7307 190.99 57.5157C190.99 41.2599 174.535 18.5757 154.226 6.85672H154.212Z",
                    fill: "#EEB3A2",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.39",
                    d: "M151.939 6.85672C139.409 -0.368082 128.344 -1.7476 121.717 2.07813L115.189 5.84696C114.478 6.2594 113.838 6.74295 113.24 7.26917C105.532 3.91277 98.862 3.55722 94.5811 6.03186L89.4755 8.97583C86.2471 10.8389 84.3555 14.2664 84.3555 19.1446C84.3555 25.7152 87.7973 33.6084 93.3012 40.9754L88.3946 49.7789L101.465 50.0775C105.034 53.4197 108.988 56.4206 113.155 58.8241C122.442 64.1858 130.648 65.3805 135.91 62.9627C138.954 65.3662 142.125 67.5849 145.425 69.4764C150.744 72.5484 155.779 74.5395 160.344 75.5492L177.041 94.4645L183.569 90.6957L177.595 73.103L182.189 70.4577C186.299 68.0826 188.717 63.7307 188.717 57.5157C188.717 41.2599 172.262 18.5757 151.953 6.85672H151.939Z",
                    fill: "#ECAC9B",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.42",
                    d: "M149.663 6.85672C137.134 -0.368082 126.069 -1.7476 119.441 2.07813L112.913 5.84696C112.202 6.2594 111.562 6.74295 110.965 7.26917C103.257 3.91277 96.5866 3.55722 92.3057 6.03186L87.2 8.97583C83.9716 10.8389 82.0801 14.2664 82.0801 19.1446C82.0801 25.7152 85.5218 33.6084 91.0257 40.9754L86.1192 49.7789L99.1892 50.0775C102.759 53.4197 106.713 56.4206 110.88 58.8241C120.167 64.1858 128.373 65.3805 133.635 62.9627C136.679 65.3662 139.85 67.5849 143.15 69.4764C148.469 72.5484 153.503 74.5395 158.068 75.5492L174.765 94.4645L181.293 90.6957L175.32 73.103L179.914 70.4577C184.024 68.0826 186.441 63.7307 186.441 57.5157C186.441 41.2599 169.987 18.5757 149.678 6.85672H149.663Z",
                    fill: "#EBA693",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.45",
                    d: "M147.372 6.85672C134.843 -0.368082 123.778 -1.7476 117.15 2.07813L110.622 5.84696C109.911 6.2594 109.271 6.74295 108.674 7.26917C100.966 3.91277 94.2956 3.55722 90.0147 6.03186L84.909 8.97583C81.6806 10.8389 79.7891 14.2664 79.7891 19.1446C79.7891 25.7152 83.2308 33.6084 88.7347 40.9754L83.8281 49.7789L96.8981 50.0775C100.468 53.4197 104.422 56.4206 108.589 58.8241C117.876 64.1858 126.082 65.3805 131.344 62.9627C134.388 65.3662 137.559 67.5849 140.859 69.4764C146.178 72.5484 151.212 74.5395 155.777 75.5492L172.474 94.4645L179.002 90.6957L173.029 73.103L177.623 70.4577C181.733 68.0826 184.15 63.7307 184.15 57.5157C184.15 41.2599 167.696 18.5757 147.386 6.85672H147.372Z",
                    fill: "#E9A08B",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.48",
                    d: "M145.095 6.85672C132.565 -0.368082 121.501 -1.7476 114.873 2.07813L108.345 5.84696C107.634 6.2594 106.994 6.74295 106.397 7.26917C98.6883 3.91277 92.0182 3.55722 87.7374 6.03186L82.6317 8.97583C79.4033 10.8389 77.5117 14.2664 77.5117 19.1446C77.5117 25.7152 80.9535 33.6084 86.4574 40.9754L81.5508 49.7789L94.6209 50.0775C98.1906 53.4197 102.144 56.4206 106.311 58.8241C115.598 64.1858 123.804 65.3805 129.067 62.9627C132.11 65.3662 135.282 67.5849 138.581 69.4764C143.9 72.5484 148.935 74.5395 153.5 75.5492L170.197 94.4645L176.725 90.6957L170.751 73.103L175.345 70.4577C179.455 68.0826 181.873 63.7307 181.873 57.5157C181.873 41.2599 165.418 18.5757 145.109 6.85672H145.095Z",
                    fill: "#E89983",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.52",
                    d: "M142.808 6.85672C130.278 -0.368082 119.213 -1.7476 112.586 2.07813L106.058 5.84696C105.347 6.2594 104.707 6.74295 104.11 7.26917C96.4012 3.91277 89.7311 3.55722 85.4503 6.03186L80.3446 8.97583C77.1162 10.8389 75.2246 14.2664 75.2246 19.1446C75.2246 25.7152 78.6663 33.6084 84.1702 40.9754L79.2637 49.7789L92.3338 50.0775C95.9035 53.4197 99.8572 56.4206 104.024 58.8241C113.311 64.1858 121.517 65.3805 126.78 62.9627C129.823 65.3662 132.995 67.5849 136.294 69.4764C141.613 72.5484 146.648 74.5395 151.213 75.5492L167.91 94.4645L174.438 90.6957L168.464 73.103L173.058 70.4577C177.168 68.0826 179.586 63.7307 179.586 57.5157C179.586 41.2599 163.131 18.5757 142.822 6.85672H142.808Z",
                    fill: "#E6937C",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.55",
                    d: "M140.532 6.85672C128.003 -0.368082 116.938 -1.7476 110.31 2.07813L103.783 5.84696C103.072 6.2594 102.432 6.74295 101.834 7.26917C94.1258 3.91277 87.4557 3.55722 83.1749 6.03186L78.0691 8.97583C74.8407 10.8389 72.9492 14.2664 72.9492 19.1446C72.9492 25.7152 76.3909 33.6084 81.8949 40.9754L76.9882 49.7789L90.0583 50.0775C93.628 53.4197 97.5818 56.4206 101.749 58.8241C111.036 64.1858 119.242 65.3805 124.504 62.9627C127.548 65.3662 130.719 67.5849 134.019 69.4764C139.338 72.5484 144.372 74.5395 148.938 75.5492L165.634 94.4645L172.162 90.6957L166.189 73.103L170.783 70.4577C174.893 68.0826 177.311 63.7307 177.311 57.5157C177.311 41.2599 160.856 18.5757 140.547 6.85672H140.532Z",
                    fill: "#E58C74",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.58",
                    d: "M138.255 6.85672C125.725 -0.368082 114.661 -1.7476 108.033 2.07813L101.505 5.84696C100.794 6.2594 100.154 6.74295 99.5569 7.26917C91.8485 3.91277 85.1784 3.55722 80.8975 6.03186L75.7919 8.97583C72.5635 10.8389 70.6719 14.2664 70.6719 19.1446C70.6719 25.7152 74.1137 33.6084 79.6176 40.9754L74.711 49.7789L87.781 50.0775C91.3508 53.4197 95.3045 56.4206 99.4715 58.8241C108.759 64.1858 116.965 65.3805 122.227 62.9627C125.27 65.3662 128.442 67.5849 131.741 69.4764C137.06 72.5484 142.095 74.5395 146.66 75.5492L163.357 94.4645L169.885 90.6957L163.912 73.103L168.505 70.4577C172.616 68.0826 175.033 63.7307 175.033 57.5157C175.033 41.2599 158.578 18.5757 138.269 6.85672H138.255Z",
                    fill: "#E3866C",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.61",
                    d: "M135.966 6.85672C123.436 -0.368082 112.372 -1.7476 105.744 2.07813L99.2162 5.84696C98.5051 6.2594 97.8651 6.74295 97.2678 7.26917C89.5594 3.91277 82.8893 3.55722 78.6085 6.03186L73.5027 8.97583C70.2743 10.8389 68.3828 14.2664 68.3828 19.1446C68.3828 25.7152 71.8245 33.6084 77.3285 40.9754L72.4219 49.7789L85.492 50.0775C89.0617 53.4197 93.0154 56.4206 97.1825 58.8241C106.469 64.1858 114.676 65.3805 119.938 62.9627C122.981 65.3662 126.153 67.5849 129.452 69.4764C134.771 72.5484 139.806 74.5395 144.371 75.5492L161.068 94.4645L167.596 90.6957L161.623 73.103L166.216 70.4577C170.326 68.0826 172.744 63.7307 172.744 57.5157C172.744 41.2599 156.289 18.5757 135.98 6.85672H135.966Z",
                    fill: "#E28064",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.64",
                    d: "M133.691 6.85672C121.161 -0.368082 110.096 -1.7476 103.469 2.07813L96.9408 5.84696C96.2297 6.2594 95.5897 6.74295 94.9924 7.26917C87.2841 3.91277 80.6139 3.55722 76.3331 6.03186L71.2273 8.97583C67.9989 10.8389 66.1074 14.2664 66.1074 19.1446C66.1074 25.7152 69.5491 33.6084 75.0531 40.9754L70.1464 49.7789L83.2165 50.0775C86.7862 53.4197 90.74 56.4206 94.9071 58.8241C104.194 64.1858 112.4 65.3805 117.662 62.9627C120.706 65.3662 123.877 67.5849 127.177 69.4764C132.496 72.5484 137.531 74.5395 142.096 75.5492L158.792 94.4645L165.32 90.6957L159.347 73.103L163.941 70.4577C168.051 68.0826 170.469 63.7307 170.469 57.5157C170.469 41.2599 154.014 18.5757 133.705 6.85672H133.691Z",
                    fill: "#E0795D",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.67",
                    d: "M131.402 6.85672C118.872 -0.368082 107.807 -1.7476 101.18 2.07813L94.6518 5.84696C93.9407 6.2594 93.3007 6.74295 92.7033 7.26917C84.995 3.91277 78.3249 3.55722 74.044 6.03186L68.9383 8.97583C65.7099 10.8389 63.8184 14.2664 63.8184 19.1446C63.8184 25.7152 67.2602 33.6084 72.7641 40.9754L67.8575 49.7789L80.9275 50.0775C84.4973 53.4197 88.4509 56.4206 92.618 58.8241C101.905 64.1858 110.111 65.3805 115.373 62.9627C118.417 65.3662 121.588 67.5849 124.888 69.4764C130.207 72.5484 135.242 74.5395 139.807 75.5492L156.504 94.4645L163.031 90.6957L157.058 73.103L161.652 70.4577C165.762 68.0826 168.18 63.7307 168.18 57.5157C168.18 41.2599 151.725 18.5757 131.416 6.85672H131.402Z",
                    fill: "#DF7355",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.7",
                    d: "M129.124 6.85672C116.595 -0.368082 105.53 -1.7476 98.9024 2.07813L92.3744 5.84696C91.6633 6.2594 91.0233 6.74295 90.426 7.26917C82.7176 3.91277 76.0475 3.55722 71.7667 6.03186L66.6609 8.97583C63.4325 10.8389 61.541 14.2664 61.541 19.1446C61.541 25.7152 64.9827 33.6084 70.4867 40.9754L65.5801 49.7789L78.6502 50.0775C82.2199 53.4197 86.1736 56.4206 90.3407 58.8241C99.6277 64.1858 107.834 65.3805 113.096 62.9627C116.139 65.3662 119.311 67.5849 122.611 69.4764C127.93 72.5484 132.964 74.5395 137.529 75.5492L154.226 94.4645L160.754 90.6957L154.781 73.103L159.374 70.4577C163.485 68.0826 165.902 63.7307 165.902 57.5157C165.902 41.2599 149.448 18.5757 129.138 6.85672H129.124Z",
                    fill: "#DE6D4D",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.73",
                    d: "M126.849 6.85672C114.319 -0.368082 103.254 -1.7476 96.6269 2.07813L90.099 5.84696C89.3879 6.2594 88.7479 6.74295 88.1506 7.26917C80.4423 3.91277 73.7721 3.55722 69.4913 6.03186L64.3855 8.97583C61.1571 10.8389 59.2656 14.2664 59.2656 19.1446C59.2656 25.7152 62.7073 33.6084 68.2113 40.9754L63.3046 49.7789L76.3747 50.0775C79.9444 53.4197 83.8982 56.4206 88.0653 58.8241C97.3523 64.1858 105.558 65.3805 110.821 62.9627C113.864 65.3662 117.036 67.5849 120.335 69.4764C125.654 72.5484 130.689 74.5395 135.254 75.5492L151.951 94.4645L158.479 90.6957L152.505 73.103L157.099 70.4577C161.209 68.0826 163.627 63.7307 163.627 57.5157C163.627 41.2599 147.172 18.5757 126.863 6.85672H126.849Z",
                    fill: "#DC6646",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.76",
                    d: "M124.56 6.85672C112.03 -0.368082 100.965 -1.7476 94.3379 2.07813L87.81 5.84696C87.0989 6.2594 86.4589 6.74295 85.8615 7.26917C78.1532 3.91277 71.4831 3.55722 67.2022 6.03186L62.0966 8.97583C58.8681 10.8389 56.9766 14.2664 56.9766 19.1446C56.9766 25.7152 60.4184 33.6084 65.9223 40.9754L61.0157 49.7789L74.0857 50.0775C77.6555 53.4197 81.6092 56.4206 85.7762 58.8241C95.0632 64.1858 103.269 65.3805 108.531 62.9627C111.575 65.3662 114.747 67.5849 118.046 69.4764C123.365 72.5484 128.4 74.5395 132.965 75.5492L149.662 94.4645L156.19 90.6957L150.216 73.103L154.81 70.4577C158.92 68.0826 161.338 63.7307 161.338 57.5157C161.338 41.2599 144.883 18.5757 124.574 6.85672H124.56Z",
                    fill: "#DB603E",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.79",
                    d: "M122.286 6.85672C109.757 -0.368082 98.692 -1.7476 92.0645 2.07813L85.5365 5.84696C84.8254 6.2594 84.1997 6.74295 83.5881 7.26917C75.8798 3.91277 69.2096 3.55722 64.9288 6.03186L59.823 8.97583C56.5946 10.8389 54.7031 14.2664 54.7031 19.1446C54.7031 25.7152 58.1448 33.6084 63.6488 40.9754L58.7422 49.7789L71.8123 50.0775C75.382 53.4197 79.3357 56.4206 83.5028 58.8241C92.7898 64.1858 100.996 65.3805 106.258 62.9627C109.302 65.3662 112.473 67.5849 115.773 69.4764C121.092 72.5484 126.126 74.5395 130.692 75.5492L147.388 94.4645L153.916 90.6957L147.943 73.103L152.537 70.4577C156.647 68.0826 159.065 63.7307 159.065 57.5157C159.065 41.2599 142.61 18.5757 122.301 6.85672H122.286Z",
                    fill: "#D95A36",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.82",
                    d: "M119.993 6.85672C107.464 -0.368082 96.3989 -1.7476 89.7714 2.07813L83.2435 5.84696C82.5324 6.2594 81.9067 6.74295 81.2951 7.26917C73.5868 3.91277 66.9167 3.55722 62.6358 6.03186L57.5301 8.97583C54.3017 10.8389 52.4102 14.2664 52.4102 19.1446C52.4102 25.7152 55.8519 33.6084 61.3558 40.9754L56.4492 49.7789L69.5192 50.0775C73.089 53.4197 77.0427 56.4206 81.2098 58.8241C90.4968 64.1858 98.7029 65.3805 103.965 62.9627C107.009 65.3662 110.18 67.5849 113.48 69.4764C118.799 72.5484 123.833 74.5395 128.399 75.5492L145.095 94.4645L151.623 90.6957L145.65 73.103L150.244 70.4577C154.354 68.0826 156.772 63.7307 156.772 57.5157C156.772 41.2599 140.317 18.5757 120.008 6.85672H119.993Z",
                    fill: "#D8532E",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.85",
                    d: "M117.72 6.85672C105.19 -0.368082 94.1255 -1.7476 87.4981 2.07813L80.9701 5.84696C80.259 6.2594 79.619 6.74295 79.0217 7.26917C71.3133 3.91277 64.6432 3.55722 60.3624 6.03186L55.2567 8.97583C52.0283 10.8389 50.1367 14.2664 50.1367 19.1446C50.1367 25.7152 53.5785 33.6084 59.0824 40.9754L54.1758 49.7789L67.2459 50.0775C70.8156 53.4197 74.7693 56.4206 78.9364 58.8241C88.2234 64.1858 96.4295 65.3805 101.692 62.9627C104.735 65.3662 107.907 67.5849 111.206 69.4764C116.525 72.5484 121.56 74.5395 126.125 75.5492L142.822 94.4645L149.35 90.6957L143.376 73.103L147.97 70.4577C152.08 68.0826 154.498 63.7307 154.498 57.5157C154.498 41.2599 138.043 18.5757 117.734 6.85672H117.72Z",
                    fill: "#D64D27",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.88",
                    d: "M115.445 6.85672C102.915 -0.368082 91.8502 -1.7476 85.2227 2.07813L78.6947 5.84696C77.9836 6.2594 77.3436 6.74295 76.7463 7.26917C69.038 3.91277 62.3678 3.55722 58.087 6.03186L52.9812 8.97583C49.7528 10.8389 47.8613 14.2664 47.8613 19.1446C47.8613 25.7152 51.303 33.6084 56.807 40.9754L51.9004 49.7789L64.9704 50.0775C68.5401 53.4197 72.4939 56.4206 76.661 58.8241C85.948 64.1858 94.1541 65.3805 99.4163 62.9627C102.46 65.3662 105.631 67.5849 108.931 69.4764C114.25 72.5484 119.284 74.5395 123.85 75.5492L140.546 94.4645L147.074 90.6957L141.101 73.103L145.695 70.4577C149.805 68.0826 152.223 63.7307 152.223 57.5157C152.223 41.2599 135.768 18.5757 115.459 6.85672H115.445Z",
                    fill: "#D5461F",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.91",
                    d: "M113.155 6.85672C100.626 -0.368082 89.561 -1.7476 82.9335 2.07813L76.4057 5.84696C75.6946 6.2594 75.0688 6.74295 74.4572 7.26917C66.7489 3.91277 60.0788 3.55722 55.7979 6.03186L50.6922 8.97583C47.4638 10.8389 45.5723 14.2664 45.5723 19.1446C45.5723 25.7152 49.014 33.6084 54.5179 40.9754L49.6113 49.7789L62.6813 50.0775C66.2511 53.4197 70.2049 56.4206 74.3719 58.8241C83.6589 64.1858 91.865 65.3805 97.1272 62.9627C100.171 65.3662 103.342 67.5849 106.642 69.4764C111.961 72.5484 116.995 74.5395 121.561 75.5492L138.257 94.4645L144.785 90.6957L138.812 73.103L143.406 70.4577C147.516 68.0826 149.934 63.7307 149.934 57.5157C149.934 41.2599 133.479 18.5757 113.17 6.85672H113.155Z",
                    fill: "#D34017",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.94",
                    d: "M110.876 6.85672C98.3466 -0.368082 87.2818 -1.7476 80.6543 2.07813L74.1264 5.84696C73.4153 6.2594 72.7895 6.74295 72.1779 7.26917C64.4696 3.91277 57.7995 3.55722 53.5186 6.03186L48.413 8.97583C45.1846 10.8389 43.293 14.2664 43.293 19.1446C43.293 25.7152 46.7348 33.6084 52.2387 40.9754L47.3321 49.7789L60.4021 50.0775C63.9719 53.4197 67.9256 56.4206 72.0926 58.8241C81.3796 64.1858 89.5857 65.3805 94.8479 62.9627C97.8914 65.3662 101.063 67.5849 104.362 69.4764C109.682 72.5484 114.716 74.5395 119.281 75.5492L135.978 94.4645L142.506 90.6957L136.533 73.103L141.127 70.4577C145.237 68.0826 147.654 63.7307 147.654 57.5157C147.654 41.2599 131.199 18.5757 110.89 6.85672H110.876Z",
                    fill: "#D23A0F",
                  }),
                  (0, a.jsx)("path", {
                    opacity: "0.97",
                    d: "M108.603 6.85672C96.0731 -0.368082 85.0084 -1.7476 78.3809 2.07813L71.8529 5.84696C71.1418 6.2594 70.5161 6.74295 69.9045 7.26917C62.1962 3.91277 55.526 3.55722 51.2452 6.03186L46.1394 8.97583C42.911 10.8389 41.0195 14.2664 41.0195 19.1446C41.0195 25.7152 44.4612 33.6084 49.9652 40.9754L45.0585 49.7789L58.1286 50.0775C61.6983 53.4197 65.6521 56.4206 69.8192 58.8241C79.1062 64.1858 87.3123 65.3805 92.5745 62.9627C95.618 65.3662 98.7895 67.5849 102.089 69.4764C107.408 72.5484 112.443 74.5395 117.008 75.5492L133.705 94.4645L140.233 90.6957L134.259 73.103L138.853 70.4577C142.963 68.0826 145.381 63.7307 145.381 57.5157C145.381 41.2599 128.926 18.5757 108.617 6.85672H108.603Z",
                    fill: "#D03308",
                  }),
                  (0, a.jsx)("path", {
                    d: "M106.314 6.85672C93.784 -0.368082 82.7192 -1.7476 76.0917 2.07813L69.5639 5.84696C68.8528 6.2594 68.2128 6.74295 67.6154 7.26917C59.9071 3.91277 53.237 3.55722 48.9561 6.03186L43.8504 8.97583C40.622 10.8389 38.7305 14.2664 38.7305 19.1446C38.7305 25.7152 42.1722 33.6084 47.6761 40.9754L42.7695 49.7789L55.8395 50.0775C59.4093 53.4197 63.3631 56.4206 67.5301 58.8241C76.8171 64.1858 85.0232 65.3805 90.2854 62.9627C93.3289 65.3662 96.5004 67.5849 99.8 69.4764C105.119 72.5484 110.154 74.5395 114.719 75.5492L131.416 94.4645L137.944 90.6957L131.97 73.103L136.564 70.4577C140.674 68.0826 143.092 63.7307 143.092 57.5157C143.092 41.2599 126.637 18.5757 106.328 6.85672H106.314Z",
                    fill: "#CF2D00",
                  }),
                ],
              }),
            }),
            (0, a.jsx)("path", {
              d: "M72.635 9.77228C62.8218 4.1119 54.1606 3.03102 48.9554 6.03187L43.8496 8.97585C49.0549 5.975 57.7161 7.05588 67.5294 12.7163C83.4296 21.8895 96.3148 39.6528 96.3148 52.3815C96.3148 57.2597 94.4232 60.6872 91.1948 62.5503L96.3005 59.6063C99.5289 57.7432 101.42 54.3157 101.42 49.4376C101.42 36.7088 88.5353 18.9455 72.635 9.77228Z",
              fill: "url(#paint1_linear_456_7049)",
            }),
            (0, a.jsx)("path", {
              d: "M67.5301 12.7162C57.7169 7.05587 49.0556 5.97499 43.8504 8.97584C40.622 10.8389 38.7305 14.2664 38.7305 19.1446C38.7305 25.7152 42.1722 33.6084 47.6761 40.9755L42.7695 49.7789L55.8395 50.0776C59.4093 53.4197 63.3631 56.4206 67.5301 58.8241C77.3433 64.4845 86.0045 65.5654 91.1955 62.5645C94.4239 60.7014 96.3155 57.2739 96.3155 52.3958C96.3155 39.667 83.4304 21.9037 67.5301 12.7304V12.7162Z",
              fill: "#FFC600",
            }),
            (0, a.jsx)("path", {
              d: "M137.928 90.6815L131.4 94.4503L125.143 75.9617L131.656 72.1928L137.928 90.6815Z",
              fill: "url(#paint2_linear_456_7049)",
            }),
            (0, a.jsx)("path", {
              d: "M106.312 6.85672C93.7826 -0.368082 82.7178 -1.7476 76.0904 2.07813L69.5625 5.84697C76.2042 2.02123 87.2547 3.38657 99.7844 10.6256C120.093 22.3446 136.548 45.0287 136.548 61.2845C136.548 67.4996 134.131 71.8515 130.02 74.2266L136.548 70.4577C140.658 68.0826 143.076 63.7307 143.076 57.5157C143.076 41.2599 126.621 18.5757 106.312 6.85672Z",
              fill: "url(#paint3_linear_456_7049)",
            }),
            (0, a.jsx)("path", {
              d: "M125.142 75.9617C126.963 75.6203 128.598 75.0373 130.035 74.2124C134.145 71.8373 136.563 67.4854 136.563 61.2703C136.563 45.0145 120.108 22.3304 99.7986 10.6114C87.269 3.38659 76.2043 2.00703 69.5768 5.83276C65.4524 8.20784 63.0488 12.5882 63.0488 18.8175C63.0488 35.0733 79.5037 57.7433 99.8128 69.4622C105.132 72.5342 110.167 74.5252 114.732 75.5208L131.428 94.4361L125.156 75.9475L125.142 75.9617Z",
              fill: "#B1D400",
            }),
            (0, a.jsx)("path", {
              d: "M99.9306 32.3284C98.0817 31.2617 96.4178 31.1622 95.2089 31.8591L90.5156 34.5613C91.7245 33.8644 93.3885 33.9639 95.2374 35.0306C98.9209 37.1639 101.908 42.3407 101.908 46.5931C101.908 48.7264 101.154 50.2197 99.9591 50.9166L104.652 48.2144C105.861 47.5176 106.601 46.0242 106.601 43.8909C106.601 39.6385 103.614 34.4617 99.9306 32.3284Z",
              fill: "white",
            }),
            (0, a.jsx)("path", {
              d: "M88.5684 38.899C88.5684 43.1656 91.555 48.3282 95.2527 50.4615C97.1016 51.5282 98.7656 51.6277 99.9745 50.9308C101.183 50.234 101.923 48.7406 101.923 46.6073C101.923 42.3549 98.9363 37.1781 95.2527 35.0448C93.4039 33.9781 91.7399 33.8786 90.531 34.5755C89.3221 35.2724 88.5684 36.7657 88.5684 38.899Z",
              fill: "#F0F0F0",
            }),
            (0, a.jsx)("path", {
              d: "M82.5076 24.421C81.1565 23.6388 79.9334 23.5677 79.0374 24.0796L75.5957 26.0707C76.4775 25.5587 77.7148 25.6298 79.0659 26.412C81.7681 27.9765 83.9725 31.7738 83.9725 34.9026C83.9725 36.467 83.4178 37.5621 82.5361 38.0741L85.9778 36.0831C86.8595 35.5711 87.4142 34.476 87.4142 32.9115C87.4142 29.7827 85.224 25.9854 82.5076 24.421Z",
              fill: "white",
            }),
            (0, a.jsx)("path", {
              d: "M74.1602 29.228C74.1602 32.3569 76.3504 36.1541 79.0668 37.7186C80.4179 38.5008 81.641 38.5719 82.537 38.0599C83.4187 37.5479 83.9734 36.4528 83.9734 34.8884C83.9734 31.7595 81.7832 27.9623 79.0668 26.3978C77.7157 25.6156 76.4926 25.5445 75.5966 26.0565C74.7148 26.5685 74.1602 27.6636 74.1602 29.228Z",
              fill: "#F0F0F0",
            }),
            (0, a.jsx)("path", {
              d: "M117.252 44.275C115.901 43.4928 114.678 43.4217 113.782 43.9337L110.34 45.9247C111.222 45.4127 112.459 45.4839 113.81 46.2661C116.512 47.8305 118.717 51.6278 118.717 54.7567C118.717 56.3211 118.162 57.4162 117.28 57.9281L120.722 55.9371C121.604 55.4251 122.158 54.33 122.158 52.7655C122.158 49.6367 119.968 45.8394 117.252 44.275Z",
              fill: "white",
            }),
            (0, a.jsx)("path", {
              d: "M108.918 49.082C108.918 52.2109 111.108 56.0082 113.825 57.5726C115.176 58.3548 116.399 58.426 117.295 57.914C118.177 57.402 118.731 56.3069 118.731 54.7424C118.731 51.6136 116.541 47.8163 113.825 46.2519C112.473 45.4697 111.25 45.3986 110.354 45.9106C109.473 46.4225 108.918 47.5176 108.918 49.082Z",
              fill: "#F0F0F0",
            }),
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsxs)("linearGradient", {
                  id: "paint0_linear_456_7049",
                  x1: "0.404297",
                  y1: "105.145",
                  x2: "181.408",
                  y2: "105.145",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { "stop-color": "#FF682B" }),
                    (0, a.jsx)("stop", {
                      offset: "0.07",
                      "stop-color": "#FF6A2E",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.3",
                      "stop-color": "#FF6D31",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.55",
                      "stop-color": "#F65C20",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.74",
                      "stop-color": "#F3571B",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#C93000",
                    }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "paint1_linear_456_7049",
                  x1: "58.2423",
                  y1: "0.670163",
                  x2: "93.2712",
                  y2: "61.3556",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { "stop-color": "#FFA500" }),
                    (0, a.jsx)("stop", {
                      offset: "0.06",
                      "stop-color": "#FFA700",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.3",
                      "stop-color": "#FFAA00",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.55",
                      "stop-color": "#FF9900",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.74",
                      "stop-color": "#FF9400",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#FF6D00",
                    }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "paint2_linear_456_7049",
                  x1: "126.75",
                  y1: "75.0372",
                  x2: "136.321",
                  y2: "91.6201",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { "stop-color": "#99C900" }),
                    (0, a.jsx)("stop", {
                      offset: "0.03",
                      "stop-color": "#99C900",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.3",
                      "stop-color": "#99C900",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.41",
                      "stop-color": "#8AC500",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.55",
                      "stop-color": "#80C200",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.74",
                      "stop-color": "#7EC200",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#7EC200",
                    }),
                  ],
                }),
                (0, a.jsxs)("linearGradient", {
                  id: "paint3_linear_456_7049",
                  x1: "87.9374",
                  y1: "-4.76268",
                  x2: "132.666",
                  y2: "72.6906",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, a.jsx)("stop", { "stop-color": "#99C900" }),
                    (0, a.jsx)("stop", {
                      offset: "0.03",
                      "stop-color": "#99C900",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.3",
                      "stop-color": "#99C900",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.41",
                      "stop-color": "#8AC500",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.55",
                      "stop-color": "#80C200",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.74",
                      "stop-color": "#7EC200",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      "stop-color": "#7EC200",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var h = n(621837),
        f = n(719031);
      const C = async () =>
          await (0, p.ZP)(
            "internal/experts/qualification/onboarding/join-discourse"
          ),
        g = ({ user: e, analytics: t }) => {
          const n = !!(null === e || void 0 === e
              ? void 0
              : e.scaleDiscourseId),
            [p, g] = (0, c.useState)(!1),
            [y, v] = (0, c.useState)(!e.scaleDiscourseId),
            [x, T] = (0, c.useState)(!n),
            [b, k] = (0, c.useState)(!1),
            {
              lastSkipped: w,
              numTimesSkipped: j,
              setLastSkipped: L,
              setNumTimesSkipped: S,
            } = "undefined" === typeof window
              ? {
                  lastSkipped: void 0,
                  setLastSkipped: () => {},
                  numTimesSkipped: 0,
                  setNumTimesSkipped: () => {},
                }
              : {
                  lastSkipped: localStorage.getItem("discourse.lastSkipped")
                    ? new Date(localStorage.getItem("discourse.lastSkipped"))
                    : void 0,
                  setLastSkipped: (e) => {
                    localStorage.setItem(
                      "discourse.lastSkipped",
                      e.toISOString()
                    );
                  },
                  numTimesSkipped: localStorage.getItem(
                    "discourse.numTimesSkipped"
                  )
                    ? parseInt(
                        localStorage.getItem("discourse.numTimesSkipped")
                      )
                    : 0,
                  setNumTimesSkipped: (e) => {
                    localStorage.setItem(
                      "discourse.numTimesSkipped",
                      e.toString()
                    );
                  },
                },
            A = (0, c.useCallback)(() => {
              v(!1), T(!1);
            }, []);
          (0, u.useQuery)("discourseStatus", C, {
            enabled: y,
            refetchInterval: !(!p || !y) && 1e4,
            refetchIntervalInBackground: !0,
            onSuccess: (e) => {
              e && (t.track(d.v.JoinDiscourseUserJoinedDiscourse), A());
            },
          });
          const E = (0, f.B)("outlier_discourse_sso_enable", {}, void 0),
            R = (0, c.useMemo)(() => {
              if ("undefined" === typeof E) return;
              let t = h.SS[h.BZ.OutlierDiscourse];
              return (
                (t += E
                  ? "/session/sso?return_path=/"
                  : `/signup?email=${e.email
                      .replace(/\+outlier$/, "")
                      .replace("+worker", "")}`),
                t
              );
            }, [e.email, E]),
            N = (0, c.useCallback)(() => {
              t.track(d.v.JoinDiscourseUserClickedToJoinDiscourse),
                g(!0),
                setTimeout(() => {
                  t.track(d.v.JoinDiscourseUserCanSeeSkipButton), k(!0);
                }, 18e4),
                window.open(R, "_blank");
            }, [R, t]),
            P = (0, c.useCallback)(() => {
              L(new Date()),
                S(j + 1),
                t.track(d.v.JoinDiscourseUserClickedToSkipJoiningDiscourse),
                A();
            }, [A, L, S, j, t]),
            I = (0, c.useMemo)(
              () => !w || new Date().valueOf() - w.valueOf() > 864e5,
              [w]
            );
          return n || !I
            ? null
            : (0, a.jsx)(i.u, {
                className: "scaleui scale-tailwind outlier-theme scale-theme",
                innerClassName: "max-w-2xl",
                open: x,
                isStrictClose: !0,
                hideTitle: !0,
                children: (0, a.jsxs)("div", {
                  className:
                    "p-[25px] flex justify-center items-center flex-col gap-4",
                  children: [
                    (0, a.jsx)("div", {
                      className: "pl-8 h-[140px]",
                      children: (0, a.jsx)(m, {}),
                    }),
                    (0, a.jsx)(s.ZT.H3, { children: "Join Outlier Community" }),
                    (0, a.jsx)(s.ZT.Paragraph1, {
                      className: "text-center",
                      children:
                        "Please create an account on Outlier Community before continuing with tasking.",
                    }),
                    (0, a.jsx)(s.ZT.Paragraph1, {
                      className: "text-center",
                      children:
                        "We're transitioning away from Slack to a platform that encourages more community forum style engagement where we'll be able to build in more integrations with Outlier.",
                    }),
                    (0, a.jsxs)(o.zx, {
                      size: "lg",
                      onClick: N,
                      disabled: !R || p,
                      children: [
                        "Join Outlier Community",
                        p
                          ? (0, a.jsx)(l.$, { className: "pl-2", size: "sm" })
                          : (0, a.jsx)(r.J, {
                              variant: "white",
                              icon: ["fas", "external-link-alt"],
                            }),
                      ],
                    }),
                    b &&
                      (0, a.jsx)(o.zx, {
                        size: "lg",
                        onClick: P,
                        children: "Having trouble? Skip for now",
                      }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-row gap-2 bg-neutral-100 p-4 rounded-md",
                      children: [
                        (0, a.jsx)(r.J, {
                          className: "my-auto",
                          icon: ["far", "info-circle"],
                        }),
                        "undefined" === typeof E
                          ? null
                          : E
                          ? (0, a.jsx)(s.ZT.Paragraph3, {
                              children:
                                "Once you have joined, it may take up to a minute to refresh the status. If you're still having trouble, please reach out to your QM.",
                            })
                          : (0, a.jsx)(s.ZT.Paragraph3, {
                              children:
                                "Once you have joined, it may take up to a minute to refresh the status. If you're still having trouble, please confirm that the email address matches the email you used to log in to Outlier exactly. If you are using an Outlier provisioned account, please reach out to your QM.",
                            }),
                      ],
                    }),
                  ],
                }),
              });
        };
    },
    998563: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return g;
        },
      });
      var a = n(824246),
        i = n(583469),
        s = n(419998),
        o = n(389401),
        r = n(527565);
      var l = n(325363),
        c = n(519215),
        u = n(830155),
        d = n(837302),
        p = n(621576),
        m = n(938060),
        h = n(842659),
        f = n(167469),
        C = n(827378);
      const g = ({
        navigateToUrl: e,
        trackScreeningCardEvent: t,
        isLegacyOutlier: n = !1,
      }) => {
        const [g, y] = (0, C.useState)(0),
          { data: v, isLoading: x } = (0, o.a)(
            ["incomplete-screening-assignments"],
            async () =>
              (0, r.ZP)("/internal/screening/incomplete-screening-assignments")
          );
        if (x || !v || 0 === v.length) return null;
        const T = v.find(
            (e) => e.screeningStatus === f.ScreeningStatus.InProgress.valueOf()
          ),
          b = v[g % v.length],
          k = [
            f.ScreeningStatus.Completed.valueOf(),
            f.ScreeningStatus.ReviewRequired.valueOf(),
          ].includes(b.screeningStatus);
        return (0, a.jsxs)(c.Z, {
          variant: "surface",
          className: "p-5 w-[360px]",
          children: [
            (0, a.jsxs)(u.kC, {
              direction: "row",
              align: "center",
              className: "pb-3",
              children: [
                (0, a.jsx)(d.xv, { size: "4", children: "Skills" }),
                v.length > 1 &&
                  (0, a.jsxs)(d.xv, {
                    className: "ml-auto text-neutral-11",
                    size: "2",
                    children: [(g % v.length) + 1, " of", " ", v.length],
                  }),
              ],
            }),
            (0, a.jsx)("hr", { className: "border-neutral-6" }),
            (0, a.jsxs)(u.kC, {
              direction: "row",
              align: "center",
              children: [
                v.length > 1 &&
                  (0, a.jsx)(p.J, {
                    label: "left",
                    icon: i.A35,
                    size: "4",
                    color: "gray",
                    className: "hover:cursor-pointer",
                    onClick: () => y((g + v.length - 1) % v.length),
                  }),
                (0, a.jsxs)(u.kC, {
                  direction: "column",
                  align: "center",
                  gap: "3",
                  className: "pt-3 px-1 h-full",
                  children: [
                    (0, a.jsx)("img", {
                      style: { height: "75px" },
                      src: n
                        ? `/static/img/outlier/skills/${(0, l.I)(
                            b.screeningTitle
                          )}.svg`
                        : `/assets/skills/${(0, l.I)(b.screeningTitle)}.svg`,
                      alt: `${b.screeningTitle} icon`,
                      className: "ml-8",
                    }),
                    (0, a.jsx)(d.xv, {
                      size: "3",
                      className: "text-neutral-12",
                      children: b.screeningTitle,
                    }),
                    (0, a.jsxs)(d.xv, {
                      weight: "light",
                      size: "2",
                      align: "center",
                      className: "text-neutral-11",
                      children: [
                        "Get access to more projects by verifying your ",
                        b.screeningTitle,
                        " ",
                        "skills. Failing the screening won't reduce your earning potential.",
                      ],
                    }),
                    (0, a.jsx)(m.u, {
                      content: k
                        ? "Screening is being graded"
                        : "Another screening in progress",
                      hidden:
                        (T && T.screeningId === b.screeningId) || (!T && !k),
                      children: (0, a.jsx)(h.z, {
                        size: "2",
                        variant: "outline",
                        color: "neutral",
                        disabled: (T && T.screeningId !== b.screeningId) || k,
                        onClick: () => {
                          t({ screeningId: b.screeningId }),
                            e((0, s.p)(`/screening?id=${b.screeningId}`));
                        },
                        className: "w-full cursor-pointer",
                        children:
                          T && T.screeningId === b.screeningId
                            ? "Continue Screening"
                            : "Start Screening",
                      }),
                    }),
                  ],
                }),
                v.length > 1 &&
                  (0, a.jsx)(p.J, {
                    label: "right",
                    icon: i._tD,
                    size: "4",
                    color: "gray",
                    className: "hover:cursor-pointer",
                    onClick: () => y((g + 1) % v.length),
                  }),
              ],
            }),
          ],
        });
      };
    },
    315584: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return C;
        },
      });
      var a = n(824246),
        i = n(583469),
        s = n(419998),
        o = n(205353),
        r = n(764607),
        l = n(792564),
        c = n(7550),
        u = n(621576),
        d = n(837302),
        p = n(167469),
        m = n(599789),
        h = n(61714),
        f = n(827378);
      const C = ({ isLegacyOutlier: e = !1 }) => {
        const t = (0, h.NL)(),
          [n, C] = (0, f.useState)(!1),
          { data: g, isLoading: y } = (0, o.a)({
            types: [m.ProductNotificationType.ScreeningStatusDashboardCallout],
            statuses: [m.ProductNotificationStatus.Unread],
          }),
          v = (
            (null === g || void 0 === g
              ? void 0
              : g.ScreeningStatusDashboardCallout) || []
          )
            .filter((e) => new Date(e.createdAt) > new Date(Date.now() - 864e5))
            .sort(
              (e, t) =>
                new Date(e.createdAt).getTime() -
                new Date(t.createdAt).getTime()
            ),
          { markNotificationAsSeen: x } = (0, r.Z)();
        if (
          ((0, f.useEffect)(() => {
            if (!v || 0 === v.length) return void C(!1);
            if (n) return;
            v[v.length - 1].content.screeningOutcome !==
            p.ScreeningOutcome.Pending.valueOf()
              ? (async function () {
                  C(!0),
                    t.invalidateQueries(["incomplete-screening-assignments"]),
                    await Promise.all(v.map(x));
                })()
              : C(!1);
          }, [v, x, t, n]),
          y || 0 === v.length)
        )
          return null;
        const T = v[v.length - 1].content;
        return T.screeningOutcome === p.ScreeningOutcome.Failed.valueOf()
          ? null
          : (0, a.jsxs)(c.fC, {
              size: "2",
              color:
                T.screeningOutcome === p.ScreeningOutcome.Pending.valueOf()
                  ? "accent"
                  : "success",
              children: [
                (0, a.jsx)(c.JO, {
                  children: (0, a.jsx)(u.J, {
                    icon:
                      T.screeningOutcome ===
                      p.ScreeningOutcome.Pending.valueOf()
                        ? i.sqG
                        : i.fV7,
                    label: "info",
                    size: "1",
                  }),
                }),
                (0, a.jsx)(c.xv, {
                  children:
                    T.screeningStatus === p.ScreeningStatus.InProgress.valueOf()
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            "You started the ",
                            T.screeningTitle,
                            " screening. Click",
                            " ",
                            (0, a.jsx)(d.rU, {
                              underline: "hover",
                              href: (0, s.p)(
                                `${e ? l.Ih : ""}/screening?id=${T.screeningId}`
                              ),
                              children: "here",
                            }),
                            " ",
                            "to continue your screening before it expires.",
                          ],
                        })
                      : T.screeningOutcome ===
                        p.ScreeningOutcome.Pending.valueOf()
                      ? `We're grading your ${T.screeningTitle} screening now. It may take a minute...`
                      : `Congratulations, you passed the ${T.screeningTitle} screening!`,
                }),
              ],
            });
      };
    },
    34070: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return c;
        },
      });
      var a = n(824246),
        i = n(713222),
        s = n(776845),
        o = n(599789),
        r = n(205353),
        l = n(462252);
      const c = () => {
        var e, t, n;
        const c = null !== (e = (0, l.O)(!0).data) && void 0 !== e ? e : "",
          { data: u, isLoading: d } = (0, r.a)({
            types: [o.ProductNotificationType.None],
            statuses: [o.ProductNotificationStatus.Unread],
            refetchInterval: 3e4,
          }),
          p =
            null !==
              (n =
                null ===
                  (t =
                    null === u || void 0 === u
                      ? void 0
                      : u.DashboardAlertBanner) || void 0 === t
                  ? void 0
                  : t.slice(0, 1)) && void 0 !== n
              ? n
              : [];
        if (!p || 0 === p.length || d) return null;
        return (0, a.jsx)(a.Fragment, {
          children: p.map((e, t) => {
            if (!("content" in e)) return null;
            const { title: n, body: o, ctaText: r, ctaUrl: l } = e.content,
              u = ((e) => {
                if (e)
                  return (
                    null === e || void 0 === e
                      ? void 0
                      : e.startsWith("https://tryoutlier.zendesk.com")
                  )
                    ? `${c}${e}`
                    : e;
              })(l);
            return (0, a.jsxs)(
              "div",
              {
                className:
                  "bg-white shadow-md rounded-lg flex items-center justify-between py-4 pr-4 mb-4 relative before:content-[''] before:bg-[#FFC107] before:w-1 before:absolute before:top-0 before:left-0 before:bottom-0 before:rounded-l-lg",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center pl-3 pr-4",
                    children: [
                      (0, a.jsx)(i.J, {
                        icon: "diamond-exclamation",
                        className: "pr-3",
                        iconClassName: "text-yellow-500",
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)(s.ZT.Subtitle3, {
                            className: "text-medium font-medium",
                            children: n,
                          }),
                          (0, a.jsx)(s.ZT.Paragraph1, {
                            className: "text-xs text-gray-500",
                            children: o,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l &&
                    (0, a.jsx)("a", {
                      href: u,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "h-10 flex items-center font-medium text-sm px-2 py-4 rounded-lg bg-neutral-0 text-neutral-900 flex-shrink-0 whitespace-nowrap border hover:bg-neutral-200 border-neutral-200 focus:ring-neutral-200",
                      children: r,
                    }),
                ],
              },
              t
            );
          }),
        });
      };
    },
    260218: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return c;
        },
      });
      var a = n(824246),
        i = n(416534),
        s = n(599789),
        o = n(205353),
        r = n(287847),
        l = n(792564);
      const c = ({ blockedTemplateIds: e = [] }) => {
        var t, n;
        const { data: c, isLoading: u } = (0, o.a)({
            statuses: [s.ProductNotificationStatus.Unread],
            refetchInterval: 3e4,
          }),
          d =
            null !==
              (n =
                null ===
                  (t =
                    null === c || void 0 === c
                      ? void 0
                      : c.DashboardInfoBanner) || void 0 === t
                  ? void 0
                  : t
                      .filter(
                        (t) => "templateId" in t && !e.includes(t.templateId)
                      )
                      .slice(0, 1)) && void 0 !== n
              ? n
              : [],
          { mutate: p, isLoading: m } = (0, r.y)();
        if (!d || 0 === d.length) return null;
        const h = (e) => {
          var t;
          if (
            (p({
              notificationId: e.id,
              status: s.ProductNotificationStatus.Acknowledged,
            }),
            !("content" in e))
          )
            return;
          const n =
            null === (t = e.content) || void 0 === t ? void 0 : t.ctaUrl;
          n && window.open(n, "_blank");
        };
        function f(e) {
          const t = document.createElement("textarea");
          return (t.innerHTML = e), t.value;
        }
        const C = (e) =>
            (0, a.jsx)(i.zx, {
              variant: "primary",
              className: "ml-auto justify-center w-[100px]",
              disabled: u || m,
              onClick: () =>
                ((e) => {
                  h(e),
                    window.location.replace(
                      `${l.YK}/en/expert/resource_library`
                    );
                })(e),
              children: "View",
            }),
          g = (e) => {
            var t;
            return "content" in e &&
              null !== (t = e.content.ctaText) &&
              void 0 !== t
              ? t
              : "Dismiss";
          };
        return (0, a.jsx)(a.Fragment, {
          children: d.map((e, t) => {
            if (!("content" in e)) return null;
            const { body: n, imgUrl: s } = e.content;
            return (0, a.jsx)(
              "div",
              {
                className:
                  "flex p-4 bg-utility-offWhite rounded-xl items-center",
                children: (0, a.jsxs)("div", {
                  className: "flex items-center w-full gap-8",
                  children: [
                    (0, a.jsx)("img", {
                      className: "",
                      src: s,
                      width: 120,
                      height: 120,
                      alt: "",
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)("p", {
                        className: "text-sm text-neutral-700 pt-2",
                        dangerouslySetInnerHTML: { __html: f(n) },
                      }),
                    }),
                    "671438e629703bc5d195a490" === e.templateId
                      ? C(e)
                      : (0, a.jsx)(i.zx, {
                          variant: "primary",
                          className: "ml-auto justify-center w-[100px]",
                          disabled: u || m,
                          onClick: () => h(e),
                          children: g(e),
                        }),
                  ],
                }),
              },
              t
            );
          }),
        });
      };
    },
    579183: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return u;
        },
      });
      var a = n(824246),
        i = n(691067),
        s = n(713222),
        o = n(416534),
        r = n(599789),
        l = n(205353),
        c = n(287847);
      const u = () => {
        var e, t;
        const { data: n, isLoading: u } = (0, l.a)({
            statuses: [r.ProductNotificationStatus.Unread],
            refetchInterval: 3e4,
          }),
          d =
            null ===
              (t =
                null ===
                  (e = null === n || void 0 === n ? void 0 : n.InfoModal) ||
                void 0 === e
                  ? void 0
                  : e.filter(
                      (e) => e.status === r.ProductNotificationStatus.Unread
                    )) || void 0 === t
              ? void 0
              : t[0],
          { mutate: p, isLoading: m } = (0, c.y)();
        if (!d || !("content" in d)) return null;
        const {
            title: h,
            body: f,
            imgUrl: C,
            buttonText: g,
            buttonUrl: y,
          } = d.content,
          v = () => {
            if (
              (p({
                notificationId: d.id,
                status: r.ProductNotificationStatus.Acknowledged,
              }),
              y)
            ) {
              /^(https?:)/.test(y)
                ? (window.location.href = y)
                : (window.location.pathname = y);
            }
          };
        return (0, a.jsx)(i.u, {
          className: "scaleui outlier-theme scale-theme",
          innerClassName: "max-w-lg top-[20%] min-w-[700px]",
          onClose: () => {},
          open: !0,
          hideTitle: !0,
          children: (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "flex justify-end",
                children: (0, a.jsx)(s.J, {
                  className: "cursor-pointer",
                  icon: "close",
                  size: "lg",
                  onClick: v,
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center flex-col gap-6 pb-8 px-8",
                children: [
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("img", {
                        className: "h-[160px]",
                        src: C,
                        alt: "Important Information!",
                        width: 260,
                        height: 260,
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-2 text-center mb-4",
                        children: [
                          (0, a.jsx)("div", {
                            className: "text-2xl font-bold",
                            dangerouslySetInnerHTML: { __html: h },
                          }),
                          (0, a.jsx)("div", {
                            className: "text-lg text-neutral-400",
                            dangerouslySetInnerHTML: { __html: f },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(o.zx, {
                    variant: "primary",
                    className: "w-[200px] justify-center",
                    disabled: u || m,
                    onClick: v,
                    children: g,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    683489: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return k;
        },
      });
      var a = n(824246),
        i = n(205353),
        s = n(287847),
        o = n(830155),
        r = n(837302),
        l = n(842659),
        c = n(599789),
        u = n(389401);
      var d = n(527565);
      var p = n(913627),
        m = n(519215),
        h = n(938060),
        f = n(621576),
        C = n(583469),
        g = n(298784),
        y = n.n(g);
      const v = ({ projectId: e, userId: t, reviewLevel: n }) => {
        var i, s;
        const { isLoading: l, data: c } = (({ projectId: e, userId: t }) =>
            (0, u.a)(
              ["project", e, "summary"],
              async () =>
                (0, d.ZP)(`/internal/user-projects/${t}/project/${e}/summary`),
              { enabled: !!e && "all-project-ids" !== e }
            ))({ projectId: e, userId: t }),
          g = null === c || void 0 === c ? void 0 : c.name,
          v =
            null !==
              (s =
                null ===
                  (i =
                    null === c || void 0 === c
                      ? void 0
                      : c.genAIProjectTypes) || void 0 === i
                  ? void 0
                  : i.join(", ")) && void 0 !== s
              ? s
              : "",
          x = null === c || void 0 === c ? void 0 : c.description,
          { isLoading: T, data: b } = ((e, t) =>
            (0, u.a)({
              queryKey: ["project-pay-rate-info", e, t],
              queryFn: async () => {
                const n = new URLSearchParams(
                  Object.assign(
                    { projectId: e },
                    t ? { reviewLevel: t.toString() } : {}
                  )
                );
                return (0, d.ZP)(
                  `/internal/scaler/pay_rate_card?${n.toString()}`
                );
              },
              select: (e) => e.payRateInfo,
            }))(e, n),
          k = l || T,
          { baseRate: w, payTypeEnding: j } =
            ((L = b),
            y().isNil(L)
              ? {
                  baseRate: void 0,
                  trainingRate: void 0,
                  payTypeEnding: "hour",
                }
              : y().isNil(L.payPerTaskBaseRate)
              ? {
                  baseRate: L.hourlyRate,
                  trainingRate: L.trainingHourlyRate,
                  payTypeEnding: "hour",
                }
              : {
                  baseRate: L.payPerTaskBaseRate,
                  trainingRate: L.payPerTaskTrainingRate,
                  payTypeEnding: "task",
                });
        var L;
        return (0, a.jsx)(p.O, {
          loading: k,
          minHeight: "80px",
          children: (0, a.jsx)(m.Z, {
            size: "1",
            children: (0, a.jsxs)(o.kC, {
              p: "1",
              children: [
                (0, a.jsx)(o.xu, {
                  className: "flex-none w-2/3",
                  children: (0, a.jsxs)(o.kC, {
                    direction: "column",
                    gap: "1",
                    children: [
                      (0, a.jsx)(r.xv, {
                        size: "1",
                        color: "neutral",
                        weight: "medium",
                        children: v,
                      }),
                      (0, a.jsx)(r.xv, {
                        size: "5",
                        weight: "medium",
                        style: {
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        },
                        children: g,
                      }),
                      (0, a.jsx)(r.xv, {
                        size: "1",
                        color: "neutral",
                        style: {
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        },
                        children: x,
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(o.xu, {
                  className: "flex-none w-1/3",
                  children: (0, a.jsx)(o.kC, {
                    justify: "center",
                    align: "center",
                    className: "h-full",
                    children: (0, a.jsxs)(o.kC, {
                      direction: "column",
                      children: [
                        (0, a.jsxs)(o.kC, {
                          children: [
                            (0, a.jsx)(r.xv, {
                              size: "4",
                              weight: "medium",
                              children: w ? `$${w.toFixed(2)}` : "--",
                            }),
                            (0, a.jsxs)(r.xv, {
                              size: "4",
                              weight: "medium",
                              color: "neutral",
                              children: ["/", j],
                            }),
                          ],
                        }),
                        (0, a.jsx)(r.xv, {
                          size: "1",
                          weight: "light",
                          color: "neutral",
                          children: (0, a.jsxs)(o.kC, {
                            direction: "row",
                            align: "center",
                            gap: "1",
                            children: [
                              "Deliverable rate",
                              (0, a.jsx)(h.u, {
                                content:
                                  "The rate you are paid while working on tasks that will be delivered to the customer.",
                                children: (0, a.jsx)(f.J, {
                                  size: "1",
                                  label: "icon",
                                  icon: C.sqG,
                                }),
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
          }),
        });
      };
      var x = n(827378),
        T = n(3396);
      const b = new Map([
          ["-1", c.ReviewLevel.Attempt],
          ["0", c.ReviewLevel.Normal],
          ["1", c.ReviewLevel.Level1],
          ["4", c.ReviewLevel.ReviewConsensus],
          ["10", c.ReviewLevel.Corp],
        ]),
        k = ({
          setProjectId: e,
          setReviewLevel: t,
          setShowProjectModal: n,
          onClick: u,
        }) => {
          var d, p;
          const { isLoading: m, data: h } = (0, T.y)(),
            { data: f, isLoading: C } = (0, i.a)({
              statuses: [c.ProductNotificationStatus.Unread],
              refetchInterval: 3e4,
            }),
            g =
              null ===
                (p =
                  null ===
                    (d =
                      null === f || void 0 === f
                        ? void 0
                        : f.DirectAssignModal) || void 0 === d
                    ? void 0
                    : d.filter(
                        (e) => e.status === c.ProductNotificationStatus.Unread
                      )) || void 0 === p
                ? void 0
                : p[0],
            { mutate: y, isLoading: k } = (0, s.y)(),
            [w, j] = (0, x.useState)(!0);
          if (C || k || m) return null;
          if (!g || !("content" in g)) return null;
          const {
            projectId: L,
            reviewLevel: S,
            partialPayAmountCents: A,
          } = g.content;
          e && e(L), t && t(b.get(S));
          const E = b.get(S),
            R = Number(A);
          return (0, a.jsx)(o.Vq.fC, {
            open: w,
            children: (0, a.jsx)(o.Vq.VY, {
              children: (0, a.jsx)("div", {
                className: "scale-tailwind",
                children: (0, a.jsxs)(o.kC, {
                  direction: "column",
                  gap: "4",
                  children: [
                    (0, a.jsx)(r.xv, {
                      size: "7",
                      children:
                        "You have been matched with a higher priority project",
                    }),
                    (0, a.jsx)(r.xv, {
                      size: "2",
                      children:
                        "Your expertise is needed for this higher priority project. During this time you will exclusively be on this project.",
                    }),
                    !isNaN(R) &&
                      R > 0 &&
                      (0, a.jsxs)(r.xv, {
                        size: "4",
                        color: "neutral",
                        weight: "medium",
                        children: [
                          "Earnings ",
                          (0, a.jsx)(r.xv, {
                            className: "text-[#171717]",
                            children:
                              ((N = 100 * R), `$${(N / 1e4).toFixed(2)}`),
                          }),
                        ],
                      }),
                    h &&
                      (0, a.jsx)(v, {
                        projectId: L,
                        userId: h._id,
                        reviewLevel: E,
                      }),
                    (0, a.jsx)(o.kC, {
                      justify: "end",
                      align: "center",
                      children: (0, a.jsx)(l.z, {
                        size: "3",
                        radius: "small",
                        variant: "solid",
                        className:
                          "w-[128px] bg-[#1B0030] cursor-pointer outline-none",
                        onClick: () => {
                          j(!1),
                            n && n(!0),
                            window.location.pathname.includes(
                              "/expert/tasks"
                            ) ||
                              y({
                                notificationId: g.id,
                                status:
                                  c.ProductNotificationStatus.Acknowledged,
                              }),
                            u && u();
                        },
                        children: (0, a.jsx)(r.xv, {
                          size: "3",
                          className: "whitespace-nowrap",
                          children: "Got it",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
          var N;
        };
    },
    3396: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return s;
        },
      });
      var a = n(527565),
        i = n(389401);
      const s = () =>
        (0, i.a)(["logged-in-user"], async () =>
          (0, a.ZP)("/internal/logged_in_user")
        );
    },
    22336: function (e, t, n) {
      "use strict";
      n.d(t, {
        Wq: function () {
          return s;
        },
        v9: function () {
          return o;
        },
      });
      var a,
        i = n(419998);
      !(function (e) {
        (e.Account = "My Account"),
          (e.Pay = "Pay"),
          (e.Skills = "Skills"),
          (e.AccountSecurity = "Account Security"),
          (e.TravelRequests = "Travel Requests");
      })(a || (a = {}));
      const s = {
        [a.Account]: (0, i.p)("/expert/profile"),
        [a.Pay]: (0, i.p)("/expert/profile/pay"),
        [a.Skills]: (0, i.p)("/expert/profile/skills"),
        [a.AccountSecurity]: (0, i.p)("/expert/profile/account-security"),
        [a.TravelRequests]: (0, i.p)("/expert/profile/travel-requests"),
      };
      var o;
      !(function (e) {
        (e.AccountingTax = "AccountingTax"),
          (e.Geography = "Geography"),
          (e.ArchitectureEngineering = "ArchitectureEngineering"),
          (e.Geometry = "Geometry"),
          (e.Art = "Art"),
          (e.HealthcareMedicine = "HealthcareMedicine"),
          (e.ArtsHumanities = "ArtsHumanities"),
          (e.HumanResources = "HumanResources"),
          (e.AutoTechnician = "AutoTechnician"),
          (e.Languages = "Languages"),
          (e.Biology = "Biology"),
          (e.Literature = "Literature"),
          (e.BiomedicalEngineering = "BiomedicalEngineering"),
          (e.MachineLearning = "MachineLearning"),
          (e.Business = "Business"),
          (e.Management = "Management"),
          (e.Calculus = "Calculus"),
          (e.MarketingSales = "MarketingSales"),
          (e.CameraFilmSpecialist = "CameraFilmSpecialist"),
          (e.MechanicalEngineering = "MechanicalEngineering"),
          (e.ChemicalEngineering = "ChemicalEngineering"),
          (e.MediaCommunications = "MediaCommunications"),
          (e.Chemistry = "Chemistry"),
          (e.MedicalKnowledge = "MedicalKnowledge"),
          (e.ClimateScience = "ClimateScience"),
          (e.MedicalScience = "MedicalScience"),
          (e.ClinicalMedicine = "ClinicalMedicine"),
          (e.Microbiology = "Microbiology"),
          (e.Coding = "Coding"),
          (e.Music = "Music"),
          (e.CriticalReading = "CriticalReading"),
          (e.Nutrition = "Nutrition"),
          (e.CreativeWriting = "CreativeWriting"),
          (e.OperationsManagement = "OperationsManagement"),
          (e.CyberSecurity = "CyberSecurity"),
          (e.Pharmacy = "Pharmacy"),
          (e.Education = "Education"),
          (e.Poetry = "Poetry"),
          (e.ElectricalEngineering = "ElectricalEngineering"),
          (e.Psychiatry = "Psychiatry"),
          (e.Electronics = "Electronics"),
          (e.PublicHelp = "PublicHelp"),
          (e.EnergyPower = "EnergyPower"),
          (e.Science = "Science"),
          (e.Entertainment = "Entertainment"),
          (e.SelfHelp = "SelfHelp"),
          (e.Finance = "Finance"),
          (e.TechnicalWriting = "TechnicalWriting"),
          (e.Fitness = "Fitness"),
          (e.Technology = "Technology"),
          (e.Generalists = "Generalists"),
          (e.TravelTranspotation = "TravelTranspotation");
      })(o || (o = {}));
    },
    325363: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return i;
        },
      });
      var a = n(22336);
      const i = (e) => {
        switch (e) {
          case "Accounting&Tax":
            return a.v9.AccountingTax;
          case "Geography":
            return a.v9.Geography;
          case "Architecture & Engineering":
            return a.v9.ArchitectureEngineering;
          case "Geometry":
            return a.v9.Geometry;
          case "Art":
          case "ArtTheory":
          case "Design":
            return a.v9.Art;
          case "Healthcare&Medicine":
          case "Diagnostics & Laboratory Medicine":
          case "Neuro Science":
          case "Nursing":
            return a.v9.HealthcareMedicine;
          case "Arts&Humanities":
            return a.v9.ArtsHumanities;
          case "HumanResources":
            return a.v9.HumanResources;
          case "Language":
          case "Afar":
          case "Afrikaans":
          case "Albanian":
          case "Amazigh":
          case "Amharic":
          case "Arabic":
          case "Arabic (ar-EG)":
          case "Arabic (ar-SA)":
          case "Arabic (ar-ST)":
          case "Araona":
          case "Armenian":
          case "Ashaninka":
          case "Aymara":
          case "Azerbaijani":
          case "Bangla":
          case "Baure":
          case "Belarusian":
          case "Bengali":
          case "Bengali (bn-IN)":
          case "Bengali (bn-Latn)":
          case "Besiro":
          case "Bosnian":
          case "Bulgarian":
          case "Burmese":
          case "Canichana":
          case "Carolinian":
          case "Castilian":
          case "Catalan":
          case "Cavineno":
          case "Cayubaba":
          case "Chacobo":
          case "Chamorro":
          case "Chewa":
          case "Chibarwe":
          case "Chichewa":
          case "Chiman":
          case "Chinese":
          case "Chinese (yue-CN)":
          case "Chinese (zh-CN)":
          case "Chinese (zh-HK)":
          case "Chinese (zh-TW)":
          case "Comorian":
          case "Croatian":
          case "Czech":
          case "Danish":
          case "Dhivehi":
          case "Dutch":
          case "Dzongkha":
          case "English":
          case "English (en-AU)":
          case "English (en-CA)":
          case "English (en-GB)":
          case "English (en-IE)":
          case "English (en-IN)":
          case "English (en-NZ)":
          case "English (en-SG)":
          case "English (en-US)":
          case "English (en-ZA)":
          case "Ese Ejja":
          case "Eskimo":
          case "Estonian":
          case "Ewe":
          case "Faroese":
          case "Farsi":
          case "Fiji Hindi":
          case "Fijian":
          case "Filipino":
          case "Finnish":
          case "French":
          case "French (fr-BE)":
          case "French (fr-CA)":
          case "French (fr-CH)":
          case "French (fr-FR)":
          case "Galician":
          case "Georgian":
          case "German":
          case "German (de-AT)":
          case "German (de-CH)":
          case "German (de-DE)":
          case "Greek":
          case "Guarani":
          case "Guarasu'we":
          case "Guarayu":
          case "Gujarati":
          case "Gujarati (gu-IN)":
          case "Gujarati (gu-Latn)":
          case "Haitian Creole":
          case "Hausa":
          case "Hebrew":
          case "Hindi":
          case "Hindi (hi-IN)":
          case "Hindi (hi-Latn)":
          case "Hiri Motu":
          case "Hungarian":
          case "Icelandic":
          case "Igbo":
          case "Indonesian":
          case "Irish":
          case "Italian":
          case "Italian (it-CH)":
          case "Italian (it-IT)":
          case "Itonama":
          case "Japanese":
          case "Kalanga":
          case "Kannada":
          case "Kazakh":
          case "Khmer":
          case "Khoisan":
          case "Kinyarwanda":
          case "Kirundi":
          case "Korean":
          case "Kurdish":
          case "Kyrgyz":
          case "Lao":
          case "Latin":
          case "Latvian":
          case "Leco":
          case "Lithuanian":
          case "Luxembourgish":
          case "Macedonian":
          case "Machajuyai-Kallawaya":
          case "Machineri":
          case "Malagasy":
          case "Malay":
          case "Malayalam":
          case "Maltese":
          case "Maori":
          case "Marathi":
          case "Marathi (mr-IN)":
          case "Marathi (mr-Latn)":
          case "Maropa":
          case "Mojeno-Ignaciano":
          case "Mojeno-Trinitario":
          case "Mongolian":
          case "Montenegrin":
          case "More":
          case "Morisien":
          case "Moseten":
          case "Movima":
          case "Nambya":
          case "Nauruan":
          case "Ndau":
          case "Ndebele":
          case "Nepali":
          case "Niuean":
          case "Norfuk":
          case "Northern Sotho":
          case "Norwegian":
          case "Oromo":
          case "Pacawara":
          case "Palauan":
          case "Papiamentu":
          case "Pashto":
          case "Persian":
          case "Pitkern":
          case "Polish":
          case "Polynesian":
          case "Portuguese":
          case "Portuguese (pt-BR)":
          case "Portuguese (pt-PT)":
          case "Punjabi":
          case "Puquina":
          case "Quechua":
          case "Romanian":
          case "Romansh":
          case "Russian":
          case "Sami":
          case "Samoan":
          case "Sango":
          case "Serbian":
          case "Sesotho sa Leboa":
          case "Seychellois Creole":
          case "Shangani":
          case "Shona":
          case "Sinhala":
          case "Siriono":
          case "Slovak":
          case "Slovene":
          case "Slovenian":
          case "Somali":
          case "Sotho":
          case "Southern Ndebele":
          case "Spanish":
          case "Spanish (es-419)":
          case "Spanish (es-AR)":
          case "Spanish (es-CL)":
          case "Spanish (es-ES)":
          case "Spanish (es-MX)":
          case "Spanish (es-US)":
          case "Swahili":
          case "Swazi":
          case "Swedish":
          case "Tacana":
          case "Tagalog":
          case "Tajik":
          case "Tamil":
          case "Tamil (ta-IN)":
          case "Tamil (ta-Latn)":
          case "Tapiete":
          case "Telugu":
          case "Tetum":
          case "Thai":
          case "Tigrinya":
          case "Tok Pisin":
          case "Tokelauan":
          case "Tonga":
          case "Tongan":
          case "Toromona":
          case "Tsonga":
          case "Tswana":
          case "Turkish":
          case "Turkmen":
          case "Tuvaluan":
          case "Ukrainian":
          case "Urdu":
          case "Urdu (ur-IN)":
          case "Urdu (ur-PK)":
          case "Uru-Chipaya":
          case "Uzbek":
          case "Venda":
          case "Vietnamese":
          case "Weenhayek":
          case "Xhosa":
          case "Yaminawa":
          case "Yoruba":
          case "Yuki":
          case "Yuracare":
          case "Zamuco":
          case "Zulu":
            return a.v9.Languages;
          case "Biology":
          case "Anatomy and Physiology":
          case "Genetics":
          case "MolecularBiology":
            return a.v9.Biology;
          case "Literature":
          case "History":
          case "Linguistics":
            return a.v9.Literature;
          case "BiomedicalEngineering":
            return a.v9.BiomedicalEngineering;
          case "Machine Learning":
            return a.v9.MachineLearning;
          case "Business":
            return a.v9.Business;
          case "Management":
          case "Facilitators":
            return a.v9.Management;
          case "Calculus":
          case "DataScience":
          case "Mathematics":
          case "Algebra":
          case "Prealgebra":
          case "Precalculus":
          case "Probability & Statistics":
          case "Trig":
            return a.v9.Calculus;
          case "Marketing&Sales":
            return a.v9.MarketingSales;
          case "Camera&FilmSpecialist":
            return a.v9.CameraFilmSpecialist;
          case "Mechanical Engineering":
            return a.v9.MechanicalEngineering;
          case "Chemical Engineering":
            return a.v9.ChemicalEngineering;
          case "Media&Communication":
            return a.v9.MediaCommunications;
          case "Chemistry":
            return a.v9.Chemistry;
          case "MedicalKnowledge":
            return a.v9.MedicalKnowledge;
          case "Climate Science":
          case "Earth Sciences":
          case "Agriculture":
            return a.v9.ClimateScience;
          case "Basic Medical Science":
            return a.v9.MedicalScience;
          case "Clinical Medicine":
            return a.v9.ClinicalMedicine;
          case "Microbiology":
            return a.v9.Microbiology;
          case "Coding":
          case "ComputerScience":
          case "AWS":
          case "Android Jetpack Compose":
          case "Apex":
          case "Assembly":
          case "Bash":
          case "C (programming)":
          case "C#":
          case "C++":
          case "CSS":
          case "Dart":
          case "GIT":
          case "Go":
          case "Google App Script":
          case "Google Spreadsheets formula":
          case "HTML":
          case "Haskell":
          case "JSON":
          case "Java":
          case "JavaScript":
          case "Kotlin":
          case "Lua":
          case "Markdown":
          case "Matlab":
          case "MongoDB":
          case "NoSQL":
          case "Objective C":
          case "PHP":
          case "Perl":
          case "Python":
          case "R (programming)":
          case "Ruby":
          case "Rust":
          case "SQL":
          case "Scala":
          case "Shell":
          case "Spreadsheets formula":
          case "Swift":
          case "Typescript":
          case "Visual Basic":
          case "XML":
          case "YAML":
            return a.v9.Coding;
          case "Music":
          case "Audio Technician":
            return a.v9.Music;
          case "CriticalReading":
          case "Sociology":
          case "Law":
          case "SocialSciences":
            return a.v9.CriticalReading;
          case "Nutrition":
            return a.v9.Nutrition;
          case "CreativeWriting":
            return a.v9.CreativeWriting;
          case "Operations Management":
            return a.v9.OperationsManagement;
          case "Cyber Security":
            return a.v9.CyberSecurity;
          case "Pharmacy":
            return a.v9.Pharmacy;
          case "Education":
          case "K-12":
          case "Tutoring":
          case "Counseling":
            return a.v9.Education;
          case "Poetry":
            return a.v9.Poetry;
          case "Electrical Engineering":
            return a.v9.ElectricalEngineering;
          case "Psychiatry":
          case "Psychology":
            return a.v9.Psychiatry;
          case "Electronics":
            return a.v9.Electronics;
          case "Public Health":
            return a.v9.PublicHelp;
          case "Energy & Power":
            return a.v9.EnergyPower;
          case "Science":
          case "Materials":
          case "Nuclear Physics":
          case "Physics":
          case "STEM":
          case "Engineering":
          case "Bioengineering":
          case "CivilEngineering":
            return a.v9.Science;
          case "Entertainment":
            return a.v9.Entertainment;
          case "Self-Help":
            return a.v9.SelfHelp;
          case "Finance":
          case "Economics":
            return a.v9.Finance;
          case "TechnicalWriting":
            return a.v9.TechnicalWriting;
          case "Fitness":
          case "Sports":
            return a.v9.Fitness;
          case "Technology":
            return a.v9.Technology;
          case "Generalist":
          case "Generalist Stem":
          case "Red Team Generalist":
          case "Safety Generalist":
          case "Expert":
          case "OffPlatform":
          default:
            return a.v9.Generalists;
          case "Travel&Transportation":
            return a.v9.TravelTranspotation;
        }
      };
    },
    987696: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return R;
        },
      });
      var a = n(824246),
        i = n(827378),
        s = n(691067),
        o = n(722030),
        r = n(916353),
        l = n(788524),
        c = n(667332),
        u = n(416534),
        d = n(412937),
        p = n(713222),
        m = n(594802),
        h = n(784200),
        f = n(264221),
        C = n(167469),
        g = n(61714),
        y = n(338415),
        v = n(527565);
      var x = n(389401);
      const T = (e) =>
          (0, x.a)(
            ["useFetchReferralRewardInfo"],
            async () =>
              await (0, v.ZP)("/internal/referrals/reward-info", {
                method: "GET",
              }),
            { onSuccess: e }
          ),
        b = h.z.object({
          firstName: h.z.string(),
          lastName: h.z.string(),
          email: h.z.string().email(),
        });
      var k = ({ open: e, onClose: t, user: n, trackEvent: h }) => {
          var x;
          const [k, w] = (0, i.useState)(""),
            [j, L] = (0, i.useState)(""),
            [S, A] = (0, i.useState)(""),
            [E, R] = (0, i.useState)(""),
            [N, P] = (0, i.useState)(!1),
            [I, M] = (0, i.useState)(!1),
            [_, O] = (0, i.useState)(!1),
            [D, F] = (0, i.useState)("");
          (0, i.useEffect)(() => {
            (async () => {
              const e = await (0, v.ZP)(
                `/internal/experts/job-board/encrypted-referrer-id/${n.id}`,
                { method: "GET" }
              );
              F(e.id);
            })();
          }, [n]);
          const B = b.safeParse({ firstName: k, lastName: j, email: S }),
            {
              mutate: U,
              isLoading: Z,
              error: W,
              isError: Q,
            } = ((e) => {
              const t = (0, g.NL)();
              return (0, y.D)({
                mutationKey: ["submitReferral"],
                mutationFn: async (e) =>
                  await (0, v.ZP)("/internal/referrals/submit", {
                    method: "POST",
                    body: JSON.stringify({
                      first_name: e.firstName,
                      last_name: e.lastName,
                      email: e.email,
                      external_job_id: e.externalJobId,
                    }),
                  }),
                onSuccess: () => {
                  t.invalidateQueries(["useFetchReferrals"]).catch(() => {}),
                    e();
                },
              });
            })(t),
            { data: V, isLoading: z, isError: H } = T(),
            G = e,
            J = (0, i.useCallback)(() => {
              t();
            }, [t]);
          if (z || H || !V)
            return (0, a.jsx)(s.u, {
              innerClassName: "w-2 scaleui outlier-theme",
              onClose: J,
              open: G,
              title: "Refer a candidate",
              children: (0, a.jsx)("div", {
                className: "w-full h-[80vh] flex justify-center items-center",
                children: (0, a.jsx)(o.$, { size: "lg" }),
              }),
            });
          const $ = Math.max(
              ...V.jobs.map((e) => e.reward_amount_hundredths_of_cents)
            ),
            Y = Math.min(
              ...V.jobs.map((e) => e.reward_amount_hundredths_of_cents)
            );
          let q = "";
          q =
            Y === $
              ? `Earn ${(0, C.formatReferralRewardAmount)(
                  Y
                )} for every friend who passes assessments and completes 10 hours of work on deliverable tasks.`
              : `Earn between ${(0, C.formatReferralRewardAmount)(Y)} - ${(0,
                C.formatReferralRewardAmount)(
                  $
                )} for every friend who passes assessments and completes 10 hours of work on deliverable tasks. \n    Referral rates vary depending on expertise and location of the person who is being referred.`;
          const K = V.jobs
            .sort(
              (e, t) =>
                t.reward_amount_hundredths_of_cents -
                e.reward_amount_hundredths_of_cents
            )
            .map((e) => ({
              id: e.external_id,
              name: (0, a.jsxs)("div", {
                className: "w-full",
                children: [
                  (0, a.jsxs)("div", {
                    className: "w-full flex flex-row items-center space-x-2",
                    children: [
                      (0, a.jsx)(r.u, {
                        text: e.title,
                        target: (0, a.jsx)("div", {
                          className:
                            "flex-1 overflow-hidden text-ellipsis whitespace-nowrap",
                          children: e.title,
                        }),
                      }),
                      (0, a.jsxs)(l.V, {
                        variant: "success",
                        children: [
                          (0, C.formatReferralRewardAmount)(
                            e.reward_amount_hundredths_of_cents
                          ),
                          " reward",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "text-xs text-neutral-500 text-wrap",
                    children: e.location,
                  }),
                ],
              }),
            }));
          return (0, a.jsx)(s.u, {
            innerClassName: "w-[600px] scaleui outlier-theme scale-tailwind",
            onClose: J,
            open: G,
            title: "Refer your friends!",
            children: (0, a.jsxs)("div", {
              className: "space-y-4",
              children: [
                (0, a.jsx)("p", { children: q }),
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between w-full mb-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "text-sm font-medium flex flex-col gap-0.5",
                      children: [
                        "Send a personal referral link",
                        (0, a.jsx)(c.p, {
                          className: "text-neutral-500",
                          children:
                            "This link will allow your referrals to apply to any open Outlier opportunity.",
                        }),
                      ],
                    }),
                    N
                      ? (0, a.jsx)(u.zx, {
                          icon: { position: "left", type: ["fas", "check"] },
                          size: "sm",
                          variant: "success",
                          children: "Copied!",
                        })
                      : (0, a.jsx)(u.zx, {
                          icon: {
                            position: "left",
                            type: ["far", "clipboard"],
                          },
                          size: "sm",
                          variant: "white",
                          onClick: () => (
                            P(!0),
                            navigator.clipboard
                              .writeText((0, C.getJobLinkForJobBoard)(D))
                              .catch(() => {}),
                            h({
                              type: C.ReferralInteractionType
                                .COPY_BOARD_LINK_CLICKED,
                            }),
                            void setTimeout(() => {
                              P(!1);
                            }, 5e3)
                          ),
                          children: "Copy link",
                        }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "font-medium text-neutral-700",
                      children: [
                        "Send an opportunity listing",
                        (0, a.jsx)(c.p, {
                          className: "text-neutral-500 w-[432px]",
                          children:
                            "This link will take your referrals directly to an opportunity listing, maximizing your chances of receiving a reward.",
                        }),
                      ],
                    }),
                    I
                      ? (0, a.jsx)(u.zx, {
                          icon: { position: "left", type: ["fas", "check"] },
                          size: "sm",
                          variant: "success",
                          children: "Copied!",
                        })
                      : (0, a.jsx)(u.zx, {
                          icon: {
                            position: "left",
                            type: ["far", "clipboard"],
                          },
                          size: "sm",
                          variant: "white",
                          onClick: () => (
                            M(!0),
                            navigator.clipboard
                              .writeText((0, C.getJobLinkForJobId)(E, D))
                              .catch(() => {}),
                            h({
                              type: C.ReferralInteractionType
                                .COPY_JOB_LINK_CLICKED,
                              jobPostId: E,
                            }),
                            void setTimeout(() => {
                              M(!1);
                            }, 5e3)
                          ),
                          disabled: !E,
                          children: "Copy link",
                        }),
                  ],
                }),
                (0, a.jsx)(d.S, {
                  isInPortal: !0,
                  hasAdaptiveWidth: !0,
                  className: "",
                  optionClassName: "w-full max-w-full",
                  optionsClassName: "w-full max-w-full",
                  buttonClassName: "h-13",
                  floatClassName: "h-full",
                  label: "",
                  placeholder: "Search or select an opportunity",
                  menuDirection: "bottom",
                  options: K,
                  selectedOptionId: E,
                  setSelected: (e) => {
                    R(e === E ? "" : e);
                  },
                  variant: "default",
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-between cursor-pointer",
                      onClick: () => O(!_),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col",
                          children: [
                            (0, a.jsx)("div", {
                              className: "",
                              children: "Want to refer someone?",
                            }),
                            (0, a.jsx)(c.p, {
                              className: "text-neutral-500 w-[500px]",
                              children:
                                "We'll send them your referral link by email.",
                            }),
                          ],
                        }),
                        (0, a.jsx)(p.J, {
                          icon: ["fas", "chevron-down"],
                          className:
                            "transition-all " + (_ ? "rotate-180" : ""),
                        }),
                      ],
                    }),
                    _ &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "mt-2 grid grid-cols-2 gap-4",
                            children: [
                              (0, a.jsx)(m.n, {
                                onChange: (e) => {
                                  w(e.target.value);
                                },
                                value: k,
                                id: "firstName",
                                label: "First Name *",
                                type: "text",
                              }),
                              (0, a.jsx)(m.n, {
                                onChange: (e) => {
                                  L(e.target.value);
                                },
                                value: j,
                                id: "lastName",
                                label: "Last Name *",
                                type: "text",
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-4",
                            children: (0, a.jsx)(m.n, {
                              onChange: (e) => {
                                A(e.target.value);
                              },
                              value: S,
                              id: "email",
                              label: "Email Address *",
                              type: "text",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "mt-4 flex items-center justify-end w-full",
                            children: (0, a.jsx)(u.zx, {
                              className: "px-3 py-2",
                              variant: "primary",
                              size: "lg",
                              onClick: (e) => {
                                e.preventDefault();
                                U({
                                  firstName: k,
                                  lastName: j,
                                  email: S,
                                  externalJobId: E || void 0,
                                }),
                                  h({
                                    type: C.ReferralInteractionType
                                      .REFERRAL_SUBMITTED,
                                    jobPostId: E,
                                  });
                              },
                              disabled: !B.success || Z,
                              children: Z
                                ? (0, a.jsx)(o.$, { size: "sm" })
                                : "Submit referral",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                Q &&
                  (0, a.jsx)("div", {
                    className: "border px-4 py-3 rounded",
                    style: { color: "rgb(239 68 68)" },
                    children: (0, a.jsx)("span", {
                      className: "block sm:inline",
                      children: `${
                        f.G4[
                          null === (x = W.response) || void 0 === x
                            ? void 0
                            : x.errors
                        ] || f.K1
                      }`,
                    }),
                  }),
              ],
            }),
          });
        },
        w = n(583469),
        j = n(621576);
      var L = ({
          center: e,
          eligibilityText: t,
          requirementsText: n,
          referralCallToAction: o,
        }) => {
          const r = e ? "center" : "left",
            l = !!t,
            [c, d] = (0, i.useState)(!1);
          return (0, a.jsxs)("div", {
            children: [
              l &&
                (0, a.jsx)("div", {
                  className: `pb-2 text-${r} text-xs text-neutral-600 font-bold`,
                  children: "\ud83c\udf89 Limited time referral rate increase!",
                }),
              e && !l
                ? (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-center text-base mb-2 font-bold",
                        children: "Refer and earn!",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-center text-[#64748B]",
                        children: o,
                      }),
                    ],
                  })
                : (0, a.jsx)("div", {
                    className: `text-${r} text-xs text-neutral-600`,
                    children: o,
                  }),
              (0, a.jsxs)("div", {
                className: `flex pt-2 items-${r} justify-${r}`,
                children: [
                  (0, a.jsxs)(u.zx, {
                    className: `text-${r} text-xs text-info-600 font-normal`,
                    onClick: () => d(!0),
                    variant: "transparent",
                    size: "sm",
                    children: [
                      (0, a.jsx)(j.J, {
                        label: "info",
                        icon: w.sqG,
                        className: "mr-2",
                      }),
                      " See reward eligibility details",
                    ],
                  }),
                  (0, a.jsx)(s.u, {
                    className: "",
                    innerClassName: "max-w-sm",
                    title: "Referral Reward Eligibility Details",
                    open: c,
                    onClose: () => d(!1),
                    theme: "scale-theme",
                    children: (0, a.jsxs)("div", {
                      className: "pb-4",
                      children: [
                        l &&
                          (0, a.jsxs)("p", {
                            className: "text-sm mt-2",
                            children: [
                              (0, a.jsx)("h2", {
                                className: "font-bold",
                                children: "Eligibility Window:",
                              }),
                              t,
                            ],
                          }),
                        (0, a.jsxs)("p", {
                          className: "text-sm mt-" + (l ? 4 : 2),
                          children: [
                            (0, a.jsx)("h2", {
                              className: "font-bold",
                              children: "Requirements:",
                            }),
                            n,
                          ],
                        }),
                        (0, a.jsxs)("p", {
                          className: "text-sm mt-4",
                          children: [
                            (0, a.jsx)("h2", {
                              className: "font-bold",
                              children: "Restrictions:",
                            }),
                            "A referral candidate must not have already applied to a job with Outlier, have been referred to Outlier in the past, or already be an existing user on Outlier. If any of these restrictions apply to a candidate who uses your referral link, they will still be considered as a normal applicant, but you will not be eligible to receive a referral reward from them.",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        S = n(719031),
        A = n(599789),
        E = n(792564);
      var R = (0, i.memo)(
        ({
          user: e,
          getSpoofedUrl: t,
          emptyStateAssetUrl: n,
          trackEvent: s,
        }) => {
          var o;
          const { data: c, isLoading: d } = ((e, t, n) =>
              (0, x.a)(
                ["useFetchEligibility", e.id],
                async () =>
                  (
                    await (0, v.ZP)("/internal/referrals/eligible", {
                      method: "GET",
                    })
                  ).eligible,
                { refetchOnWindowFocus: !1, onSuccess: n, enabled: t }
              ))(e, !0),
            m =
              null === (o = e.tags) || void 0 === o
                ? void 0
                : o.includes(A.TEST_ACCOUNT_TAG_ID),
            h = (0, S.B)("outlier-referrals", { userId: e._id }, !1),
            g = e && (m || (!d && c && h)),
            [y, b] = (0, i.useState)(!1),
            {
              data: w,
              isLoading: j,
              isError: R,
            } = (0, x.a)(
              ["useFetchReferrals"],
              async () =>
                (await (0, v.ZP)("/internal/referrals/v2", { method: "GET" }))
                  .referrals,
              { refetchOnWindowFocus: !1, onSuccess: N }
            );
          var N;
          const { data: P, isLoading: I, isError: M } = T(),
            _ = (null !== w && void 0 !== w ? w : []).slice(0, 5),
            O = () => {
              b(!0), s({ type: C.ReferralInteractionType.MODAL_OPENED });
            },
            D = () => {
              b(!1);
            },
            {
              personalRateExpiration: F,
              personalRateCreatedAt: B,
              personalRateExpirationFull: U,
              personalRateCreatedAtFull: Z,
              personalRateExpirationTime: W,
              personalRateCreatedAtTime: Q,
            } = (0, i.useMemo)(() => {
              let [e, t, n, a, i, s] = ["", "", "", "", "", ""];
              if (
                (null === P || void 0 === P
                  ? void 0
                  : P.personal_rate_expiration) &&
                (null === P || void 0 === P
                  ? void 0
                  : P.personal_rate_created_at)
              ) {
                const [o, r] = [
                  new Date(P.personal_rate_expiration),
                  new Date(P.personal_rate_created_at),
                ];
                (e = o.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  timeZone: "UTC",
                })),
                  (t = r.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    timeZone: "UTC",
                  })),
                  (n = o.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })),
                  (a = r.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })),
                  (i = o.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "UTC",
                    hour12: !1,
                  })),
                  (s = r.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "UTC",
                    hour12: !1,
                  }));
              }
              return {
                personalRateExpiration: e,
                personalRateCreatedAt: t,
                personalRateExpirationFull: n,
                personalRateCreatedAtFull: a,
                personalRateExpirationTime: i,
                personalRateCreatedAtTime: s,
              };
            }, [P]),
            { personalRateEffective: V, referralCallToAction: z } = (0,
            i.useMemo)(() => {
              if (!P)
                return { personalRateEffective: !1, referralCallToAction: "" };
              const e = Math.max(
                  ...P.jobs.map((e) => e.reward_amount_hundredths_of_cents)
                ),
                t = P.personal_rate,
                n = t && t >= e,
                a = P.personal_rate_referred_user_reward;
              return {
                personalRateEffective: n,
                referralCallToAction:
                  (n
                    ? `Earn ${(0, C.formatReferralRewardAmount)(
                        t
                      )} for each referral who passes assessments and completes 10 hours of tasking if they apply between ${B} and ${F}!`
                    : `Earn up to ${(0, C.formatReferralRewardAmount)(
                        e
                      )} for every referral who passes assessments and completes 10 hours of tasking!`) +
                  (a
                    ? ` Your candidate will also receive ${(0,
                      C.formatReferralRewardAmount)(a)}.`
                    : ""),
              };
            }, [P, F, B]),
            H = V
              ? `Your boosted referral rate has been active since ${Q} on ${Z} and expires at ${W} on ${U} in UTC time zone. Any referrals submitted during this window will be eligible for a ${(0,
                C.formatReferralRewardAmount)(
                  null === P || void 0 === P ? void 0 : P.personal_rate
                )} reward. If you're sending a referral link, the recipient must apply for a job using the link for the referral to be considered submitted. Please note that referrals submitted outside of this window are still eligible for a reward, but the reward amount will be calculated based on the reward rate at time of referral creation.`
              : void 0,
            G = `Your referral candidate must pass all assessments and complete 10 hours of tasking in order for you ${
              (
                null === P || void 0 === P
                  ? void 0
                  : P.personal_rate_referred_user_reward
              )
                ? "and your candidate to receive your respective rewards"
                : "to receive the referral reward"
            }.${
              V
                ? " This does not need to be completed within the eligibility window."
                : ""
            }`;
          return g
            ? d || I || j
              ? (0, a.jsx)("div", {
                  className:
                    "h-[222px] w-[400px] p-4 rounded-lg bg-neutral-100 self-start animate-pulse",
                })
              : R || M || !P
              ? (0, a.jsx)("div", {
                  className: "flex flex-col items-center justify-center p-20",
                  children: (0, a.jsxs)("h2", {
                    className: "flex items-center justify-center",
                    children: [
                      (0, a.jsx)(p.J, {
                        icon: "exclamation-circle",
                        variant: "danger",
                      }),
                      "\xa0 There was an error loading your referrals",
                    ],
                  }),
                })
              : (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsxs)("div", {
                    className:
                      "h-full p-4 rounded-lg shadow-sm bg-neutral-0 self-start text-center w-full max-w-[400px]",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                          (0, a.jsx)(p.J, {
                            icon: "user-plus",
                            hasBackground: !0,
                            onClick: O,
                          }),
                          (0, a.jsx)("div", {
                            className: "text-sm font-medium",
                            children: "Referrals",
                          }),
                          _.length > 0 &&
                            (0, a.jsx)("button", {
                              onClick: O,
                              className: "text-[#3B76A5] ml-auto text-xs p-1",
                              children: (0, a.jsxs)("span", {
                                className: "flex items-center ",
                                children: [
                                  (0, a.jsx)(p.J, {
                                    icon: "plus",
                                    variant: "info",
                                    size: "sm",
                                  }),
                                  "Add referral",
                                ],
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-col",
                        style: { height: "calc(100% - 48px)" },
                        children:
                          _.length > 0
                            ? (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col relative text-left h-full justify-between",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "overflow-hidden",
                                    children: [
                                      (0, a.jsx)(L, {
                                        center: !1,
                                        eligibilityText: H,
                                        requirementsText: G,
                                        referralCallToAction: z,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "pt-4 grid grid-cols-2 gap-4 font-bold",
                                        children: [
                                          (0, a.jsx)("div", {
                                            children: "Name",
                                          }),
                                          (0, a.jsx)("div", {
                                            children: "Status",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("hr", {
                                        className: "my-2 border-t",
                                        style: { color: "lightgray" },
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "flex flex-col flex-grow",
                                        children: _.map((e) => {
                                          const { variant: t, tooltip: n } = (0,
                                          f.Pe)(e.status, e.taskingHours);
                                          return (0, a.jsx)(
                                            "div",
                                            {
                                              className: "mb-4",
                                              style: { color: "dimgray" },
                                              children: (0, a.jsxs)("div", {
                                                className:
                                                  "grid grid-cols-2 gap-4",
                                                children: [
                                                  (0, a.jsxs)("span", {
                                                    className:
                                                      "whitespace-nowrap overflow-hidden text-ellipsis",
                                                    children: [
                                                      e.first_name,
                                                      " ",
                                                      e.last_name,
                                                    ],
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "rounded-full",
                                                    children: (0, a.jsx)(l.V, {
                                                      variant: t,
                                                      children: (0, a.jsx)(
                                                        r.u,
                                                        {
                                                          text: n,
                                                          targetClassName:
                                                            "block",
                                                          target: (0, a.jsx)(
                                                            "div",
                                                            {
                                                              className:
                                                                "whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] max-md:max-w-[56px]",
                                                              children: (0,
                                                              f.Ol)(
                                                                e.status,
                                                                e.taskingHours,
                                                                e.rewardAmountInHundredthsOfCents
                                                              ),
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            },
                                            e.id
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      window.open(
                                        t(`${E.YK}/en/expert/referrals`),
                                        "_blank"
                                      ),
                                        s({
                                          type: C.ReferralInteractionType
                                            .VIEW_ALL_REFERRALS_CLICKED,
                                        });
                                    },
                                    className: "text-[#3B76A5] text-xs",
                                    children: (0, a.jsxs)("span", {
                                      className: "flex items-center",
                                      children: [
                                        "See all referrals",
                                        (0, a.jsx)(p.J, {
                                          icon: "arrow-right",
                                          variant: "info",
                                          size: "sm",
                                        }),
                                      ],
                                    }),
                                  }),
                                  y &&
                                    (0, a.jsx)(k, {
                                      open: y,
                                      onClose: D,
                                      user: e,
                                      trackEvent: s,
                                    }),
                                ],
                              })
                            : (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "flex justify-center items-center mb-4 ml-6",
                                    children: (0, a.jsx)("img", {
                                      src: n,
                                      className: "w-auto h-[75px]",
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "pb-4",
                                    children: (0, a.jsx)(L, {
                                      center: !0,
                                      eligibilityText: H,
                                      requirementsText: G,
                                      referralCallToAction: z,
                                    }),
                                  }),
                                  (0, a.jsxs)(u.zx, {
                                    className: "text-[#3B76A5]",
                                    onClick: O,
                                    variant: "outline",
                                    children: [
                                      (0, a.jsx)(p.J, {
                                        icon: "plus",
                                        size: "sm",
                                        variant: "info",
                                      }),
                                      "Add referral",
                                    ],
                                  }),
                                  y &&
                                    (0, a.jsx)(k, {
                                      open: y,
                                      onClose: D,
                                      user: e,
                                      trackEvent: s,
                                    }),
                                ],
                              }),
                      }),
                    ],
                  }),
                })
            : null;
        }
      );
    },
    264221: function (e, t, n) {
      "use strict";
      n.d(t, {
        Pe: function () {
          return i;
        },
        Ol: function () {
          return s;
        },
        G4: function () {
          return o;
        },
        K1: function () {
          return r;
        },
      });
      var a = n(167469);
      function i(e, t) {
        switch (e) {
          case a.ReferralStage.WAITING_FOR_APPLICATION:
            return {
              variant: "neutral",
              tooltip:
                "Your referral has been submitted, we are waiting for their application",
            };
          case a.ReferralStage.IN_REVIEW:
            return {
              variant: "neutral",
              tooltip:
                "Your referral has been submitted, we are reviewing their application",
            };
          case a.ReferralStage.ONBOARDING:
            return {
              variant: "info",
              tooltip:
                "Your referral candidate has successfully joined Outlier and is currently in the onboarding process",
            };
          case a.ReferralStage.COMPLETED_ONBOARDING:
            return {
              variant: "info",
              tooltip: t
                ? `Your referral candidate has completed ${t} hour(s) of tasking, you will receive your reward once they complete 10 hours`
                : "Your referral candidate has completed onboarding and you will receive your reward once they complete 10 hours of tasking",
            };
          case a.ReferralStage.PAYMENT_PROCESSING:
            return {
              variant: "secondary",
              tooltip:
                "Your referral was successful and we are processing your payment! This should take up to a few days.",
            };
          case a.ReferralStage.PAID:
            return {
              variant: "success",
              tooltip:
                "Your payment for this referral has been processed and should be reflected on your earnings page",
            };
          case a.ReferralStage.REJECTED:
            return {
              variant: "danger",
              tooltip:
                "Unfortunately your referral did not meet necessary criteria",
            };
          case a.ReferralStage.FROZEN:
            return {
              variant: "info",
              tooltip:
                "You've gone above the maximum number of referrals at this reward amount",
            };
        }
      }
      function s(e, t, n) {
        return e === a.ReferralStage.PAID && n
          ? `${e} $${(n / 1e4).toFixed(2)}`
          : e === a.ReferralStage.COMPLETED_ONBOARDING && t
          ? `tasking: ${t}/10 hours`
          : e;
      }
      const o = {
          [a.InvalidReferralReason.EXISTING_REFERRAL]:
            "That user has already been referred to Outlier.",
          [a.InvalidReferralReason.EXISTING_USER]:
            "This email is associated with an existing user on Outlier",
          [a.InvalidReferralReason.EXISTING_APPLICATION]:
            "This email is associated with an existing application to Outlier.",
          [a.InvalidReferralReason.INELIGIBLE_REFERRER]:
            "Unfortunately you're ineligible to submit referrals at this time.",
          [a.InvalidReferralReason.INVALID_JOB_ID]:
            "The job selected is invalid.",
        },
        r =
          "Unfortunately we're not able to submit referrals at the moment. Please contact support.";
    },
    709791: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return T;
        },
      });
      var a = n(824246),
        i = n(827378),
        s = n(713222),
        o = n(722030),
        r = n(983341),
        l = n(754202),
        c = n(213665),
        u = n(416534);
      const d = ({ children: e }) =>
          (0, a.jsx)("div", {
            className: "flex text-neutral-700 text-sm",
            children: e,
          }),
        p = ({ children: e }) =>
          (0, a.jsx)("div", {
            className: "flex text-neutral-700",
            children: e,
          }),
        m = ({ children: e }) =>
          (0, a.jsx)("div", {
            className: "flex text-neutral-500 text-xs",
            children: e,
          }),
        h = ({ title: e, value: t, description: n, icon: i }) =>
          (0, a.jsxs)("div", {
            className: "py-3 px-2 flex items-center",
            children: [
              (0, a.jsx)("div", {
                className:
                  "rounded-full bg-neutral-100 flex items-center justify-center w-7 h-7",
                children: i,
              }),
              (0, a.jsxs)("div", {
                className: "pr-4 pl-4 flex-column space-y-1",
                children: [e, t && t, n && n],
              }),
            ],
          }),
        f = ({
          open: e,
          onConfirm: t,
          children: n,
          title: s,
          icon: o,
          description: d,
          buttonLabel: p,
          dataList: m,
        }) =>
          (0, a.jsx)(r.u, {
            appear: !0,
            show: e,
            as: i.Fragment,
            children: (0, a.jsxs)(l.V, {
              as: "div",
              onClose: () => {},
              className:
                "relative z-modal scaleui outlier-theme scale-tailwind",
              children: [
                (0, a.jsx)(r.u.Child, {
                  as: i.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-50",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-50",
                  leaveTo: "opacity-0",
                  children: (0, a.jsx)("div", {
                    className: "fixed inset-0 bg-neutral-1000",
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "fixed inset-0 flex flex-col items-center justify-center p-4 overflow-y-auto",
                  children: (0, a.jsx)(r.u.Child, {
                    as: i.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, a.jsxs)(l.V.Panel, {
                      className:
                        "min-w-[200px] max-w-[700px] overflow-hidden transition-all transform rounded-lg shadow-xl bg-neutral-0 scale-tailwind",
                      children: [
                        (0, a.jsxs)("div", {
                          id: "header",
                          className: "px-4 p-2 w-full",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex flex-row items-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "w-10 h-10 pt-1",
                                  children: o,
                                }),
                                (0, a.jsx)("h1", {
                                  className:
                                    "text-base font-medium text-slate-700",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, a.jsx)("h2", {
                              className: "text-sm pt-1 pb-2 text-neutral-500",
                              children: d,
                            }),
                            (0, a.jsx)(c.i, {
                              className: "w-full bg-neutral-200",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          id: "content",
                          className: "px-4 overflow-y-auto",
                          style: { maxHeight: "calc(80vh - 150px)" },
                          children: (0, a.jsx)("div", {
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
                                      icon: i,
                                    }) =>
                                      (0, a.jsx)(h, {
                                        title: e,
                                        value: t,
                                        description: n,
                                        icon: i,
                                      })
                                  ),
                          }),
                        }),
                        (0, a.jsx)("div", { id: "children", children: n }),
                        (0, a.jsx)("div", {
                          id: "footer",
                          className: "w-full h-16",
                          children: (0, a.jsxs)("div", {
                            className:
                              "px-4 pb-4 flex flex-col items-end bg-white",
                            children: [
                              (0, a.jsx)(c.i, {
                                className: "w-full bg-neutral-200",
                              }),
                              (0, a.jsx)(u.zx, {
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
      var C = n(43977),
        g = n(527565),
        y = n(526106),
        v = n(844478);
      const x = i.createContext({ showProjectInfo: !1 }),
        T = ({
          children: e,
          projectId: t,
          isFFEnabled: n,
          onClose: r = () => {},
        }) => {
          const [l, c] = (0, i.useState)(!1),
            [u, h] = (0, i.useState)(!1),
            [T, b] = (0, i.useState)(),
            k = (0, i.useCallback)(async (e) => {
              const t = await (0, g.ZP)(
                `/internal/experts/project/isProjectChanged?projectId=${e}`,
                { method: "GET" }
              );
              if (t.changed) {
                const { earningRateData: e } = await (0, g.ZP)(
                  "internal/scaler/pay_rate_card"
                );
                (null === e || void 0 === e ? void 0 : e.length) &&
                  (b({ paymentInfo: e, projectChanged: t }), h(!0));
              }
            }, []);
          (0, i.useEffect)(() => {
            t && n && k(t);
            const e = setInterval(() => {
              t && n && k(t);
            }, 3e5);
            return () => {
              clearInterval(e);
            };
          }, [t, n, k]);
          const w = (0, i.useCallback)(async () => {
              c(!0),
                t &&
                  (await (0, g.ZP)(
                    "/internal/experts/project/setCurrentActive",
                    { method: "POST", body: JSON.stringify({ projectId: t }) }
                  )),
                h(!1),
                r(),
                c(!1);
            }, [t, r]),
            j = (e) => {
              if (!e) return !1;
              return !!/(<([^>]+)>)/gi.test(e);
            },
            L = (0, i.useMemo)(() => {
              var e, t, n;
              return {
                open: u,
                title: "You\u2019ve been assigned to a New Project",
                description: (
                  null ===
                    (e =
                      null === T || void 0 === T ? void 0 : T.projectChanged) ||
                  void 0 === e
                    ? void 0
                    : e.reason
                )
                  ? y.bK[
                      null ===
                        (t =
                          null === T || void 0 === T
                            ? void 0
                            : T.projectChanged) || void 0 === t
                        ? void 0
                        : t.reason
                    ]
                  : y.bK[v.WorkerTeamAssignmentReason.Generic],
                dataList:
                  null ===
                    (n = null === T || void 0 === T ? void 0 : T.paymentInfo) ||
                  void 0 === n
                    ? void 0
                    : n.map((e) => {
                        var t, n, i, o;
                        return {
                          title: (0, a.jsx)(d, { children: e.title }),
                          description:
                            e.description &&
                            (0, a.jsx)(m, {
                              children: j(e.description)
                                ? (0, a.jsx)("div", {
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
                            (0, a.jsx)(p, {
                              children: (0, a.jsxs)(a.Fragment, {
                                children: [
                                  e.paymentProvider &&
                                    (0, a.jsxs)("div", {
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
                                    ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "text-neutral-700",
                                            children:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.subtitleHourRate.bolded,
                                          }),
                                          (0, a.jsx)("div", {
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
                                    : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                          (0, a.jsx)("div", {
                                            className: "text-neutral-700",
                                            children:
                                              null ===
                                                (i =
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.subtitle) ||
                                              void 0 === i
                                                ? void 0
                                                : i.bolded,
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "text-neutral-500 ml-1",
                                            children:
                                              null ===
                                                (o =
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.subtitle) ||
                                              void 0 === o
                                                ? void 0
                                                : o.unbolded,
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                            }),
                          icon: (0, a.jsx)(s.J, { icon: e.icon }),
                        };
                      }),
                onConfirm: w,
                icon: (0, a.jsx)(C.Z, {}),
                buttonLabel: (0, a.jsx)("div", {
                  className: "flex justify-center items-center w-[200px]",
                  children: l
                    ? (0, a.jsx)(o.$, { size: "xs" })
                    : "Acknowledge and Start Project",
                }),
              };
            }, [u, T, l, w]);
          return (0, a.jsxs)(x.Provider, {
            value: { showProjectInfo: u },
            children: [(0, a.jsx)(f, Object.assign({}, L)), e],
          });
        };
    },
    561102: function (e, t, n) {
      "use strict";
      n.d(t, {
        vb: function () {
          return a;
        },
        ZC: function () {
          return i;
        },
      });
      const a = (e, t = {}) => {
          const n = Object.assign({ showYear: !0 }, t);
          let a = new Date(e).toLocaleDateString("en-US", {
            dateStyle: "medium",
            timeZone: "UTC",
          });
          return n.showYear || (a = a.replace(/, \d{4}/, "")), `${a}`;
        },
        i = (e) => {
          const t = Math.floor(e / 3600),
            n = Math.floor((e % 3600) / 60),
            a = Math.floor(e % 60);
          return `${t ? `${t}h ` : ""}${n || (!n && t && a) ? `${n}m ` : ""}${
            a ? `${a.toFixed(0)}s` : ""
          }`;
        };
    },
    842659: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var a = n(830155);
      const i = (0, n(179420).b)(a.zx);
    },
    7550: function (e, t, n) {
      "use strict";
      n.d(t, {
        JO: function () {
          return o;
        },
        fC: function () {
          return s;
        },
        xv: function () {
          return r;
        },
      });
      var a = n(830155),
        i = n(179420);
      const s = (0, i.b)(a.UW.fC),
        o = (0, i.b)(a.UW.JO),
        r = (0, i.b)(a.UW.xv);
    },
    519215: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(830155);
      const i = (0, n(179420).b)(a.Zb);
    },
    913627: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return i;
        },
      });
      var a = n(830155);
      const i = (0, n(179420).b)(a.Od);
    },
    938060: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return i;
        },
      });
      var a = n(830155);
      const i = (0, n(179420).b)(a.u);
    },
    551216: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return d;
        },
      });
      var a = n(824246),
        i = n(792739),
        s = n(347206),
        o = n.n(s),
        r = n(827378),
        l = n(720227),
        c = n(788524);
      const u = !0,
        d = (0, r.memo)(
          (0, r.forwardRef)(
            (
              {
                header: e,
                target: t,
                tags: n,
                children: s,
                className: d,
                buttonClassName: p,
                iconClassName: m,
                contentContainerClassName: h,
                startOpen: f,
                unmount: C = u,
                expanded: g,
                onChange: y,
              },
              v
            ) => {
              const [x, T] = (0, r.useState)(!!g || !!f),
                b = void 0 === g ? x : g,
                k = (0, r.useMemo)(
                  () =>
                    o()(e)
                      ? (0, a.jsxs)("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-sm font-medium",
                              children: e,
                            }),
                            null === n || void 0 === n
                              ? void 0
                              : n.map((e) =>
                                  (0, a.jsx)(
                                    c.V,
                                    {
                                      icon: e.icon,
                                      variant: e.variant,
                                      children: e.value,
                                    },
                                    e.value
                                  )
                                ),
                          ],
                        })
                      : e,
                  [e, n]
                );
              return (0, a.jsxs)("div", {
                className: (0, l.m)("rounded-lg shadow bg-neutral-0 h-fit", d),
                ref: v,
                children: [
                  (0, a.jsxs)("button", {
                    "data-testid": "accordion-button",
                    className: (0, l.m)(
                      "flex items-center w-full px-4 py-3",
                      p
                    ),
                    onClick: () => (y ? y(event, !g) : T(!x)),
                    type: "button",
                    children: [
                      k,
                      (0, a.jsx)(i.G, {
                        icon: "chevron-down",
                        className: (0, l.m)(
                          "text-sm text-neutral-400 transition-transform ml-auto",
                          b && "transform -rotate-180",
                          m
                        ),
                      }),
                    ],
                  }),
                  (b || !C) &&
                    (0, a.jsx)("div", {
                      className: (0, l.m)(
                        "px-4 pb-3 pt-0",
                        !b && !C && "hidden",
                        h
                      ),
                      children: s || t,
                    }),
                ],
              });
            }
          )
        );
    },
    787989: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return s;
        },
      });
      var a = n(824246),
        i = n(720227);
      const s = ({ className: e, children: t }) =>
        (0, a.jsx)("div", {
          className: (0, i.m)(
            "relative overflow-hidden bg-neutral-200 h-4 w-32 animate-[scale-skeleton-pulse_2s_ease-in-out_0.5s_infinite] after:animate-[scale-skeleton-wave_2s_linear_0.5s_infinite] after:absolute after: after:transform-[translateX(-100%)] after:bottom-0 after:left-0 after:right-0 after:top-0 after:content-[''] after:bg-[linear-gradient(90deg,transparent,rgb(243,244,246),transparent)]",
            e
          ),
          children: t,
        });
    },
    327999: function (e, t, n) {
      "use strict";
      (t.wX = s),
        (t.Xd = function (e) {
          return s(e).length > 0;
        });
      var a = n(202466);
      const i = [
        "Aardvark",
        "Abacus",
        "Abra",
        "Aguila",
        "Airdale",
        "Airedale",
        "Albatross",
        "Alligator",
        "Allosaurus",
        "Alpaca",
        "Amsel",
        "Anaconda",
        "Anteater",
        "Antelope",
        "Aracari",
        "Armadillo",
        "Axolotl ",
        "Baboon",
        "Badger",
        "Barracuda",
        "Beaver",
        "Bee",
        "Boar",
        "Bulba",
        "Bulbasaur",
        "Camel",
        "Capybara",
        "Cardinal",
        "Cat",
        "Centipede",
        "Centipede",
        "Charmander",
        "Cheetah",
        "Cherry",
        "Chihuahua",
        "Chinchilla ",
        "Chipmunk",
        "Circus",
        "Condor",
        "Cougar",
        "Cow",
        "Crab",
        "Crayfish",
        "Deer",
        "Dog",
        "Dolphin",
        "Dove",
        "Dragon",
        "Drongo",
        "Elephant",
        "Elk",
        "Emu",
        "Falcon",
        "Ferret",
        "Firefly",
        "Flamingo",
        "Flounder",
        "Fox",
        "Frog",
        "Gaius",
        "Gazelle",
        "Gecko",
        "Geodude",
        "Giraffe",
        "Goat",
        "Goldfinch",
        "Goldfish",
        "Goose",
        "Gorilla",
        "Hammerhead",
        "Hedgeh(deprecated)",
        "Hedgehog",
        "Hippo",
        "Horse",
        "Ibex",
        "Ibis",
        "Iguana",
        "Imbe",
        "Impala",
        "Indri",
        "Iris",
        "Ivysaur",
        "Jackal",
        "Jackrabbit",
        "Koala",
        "Lazarus",
        "Lemur",
        "Leopard",
        "Lion",
        "Mallard",
        "Mamba",
        "Mammoth",
        "Manta",
        "Marlin",
        "Meerkat",
        "Merlin",
        "Mongoose",
        "Monkey",
        "Moose",
        "Mustang",
        "Narwhal",
        "Nazgul",
        "Nighthawk",
        "Nightingale",
        "Numbat",
        "Octopus",
        "Omega",
        "Orangutan",
        "Ostrich",
        "Otter",
        "Owl",
        "Oyster",
        "Panther",
        "Parr(deprecated)",
        "Parrot",
        "Partridge",
        "Peacock",
        "Pelican",
        "Penguin",
        "Platypus",
        "Quail",
        "Rabbit",
        "Racco(deprecated)",
        "Raccoon",
        "Rattle Snake",
        "Raven",
        "Rhino",
        "Roadrunner",
        "Sable",
        "Salamander",
        "Sandfish",
        "Seagull",
        "Seahorse",
        "Seal",
        "SeaMonkey",
        "Shark",
        "Shiba",
        "Simba",
        "Skunk",
        "Sloth",
        "Snow Leopard",
        "Snowberry",
        "Sparrow",
        "Squid",
        "Squirrel",
        "Stallion",
        "Stegosaurus",
        "Stingray",
        "Tiger",
        "Toucan",
        "Turtle",
        "Unicorn",
        "Urchin",
        "Venus",
        "Vertigo",
        "Vulture",
        "Wallaby",
        "Walrus",
        "Whale",
        "Woodpecker",
        "Yeti",
        "Zebra",
      ];
      function s(e) {
        return e ? a.extractWordsFromText(e, i) : [];
      }
    },
    650906: function (e, t) {
      "use strict";
      t.z = function (e) {
        if (void 0 === e) return !1;
        return -1 !== e && e < 1;
      };
    },
    372680: function (e, t) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REQUEST_PROJECT_ROLES_LINK =
          t.userHasActiveSpecificRole =
          t.shouldShowRemoAdminProjectRole =
          t.RoleList =
          t.RoleDescription =
          t.Role =
            void 0),
        (t.Role = n),
        (function (e) {
          (e.EM = "Engagement Manager"),
            (e.STO = "STO"),
            (e.DRI = "Ops DRI"),
            (e.QualitySystems = "Quality Systems"),
            (e.CoursesInstructions = "Courses and Instructions"),
            (e.QM = "QM"),
            (e.TaskerManagement = "Tasker Management"),
            (e.QualityAudits = "Quality Audits"),
            (e.QARValidator = "QM QAR Validator"),
            (e.QIRValidator = "QM QIR Validator"),
            (e.QARAuditor = "QAR Auditor"),
            (e.QIRAuditor = "QIR Auditor"),
            (e.ProjectPlanning = "Project Planning"),
            (e.TaskerCommunication = "Tasker Communication"),
            (e.EngineeringSupport = "Engineering Support"),
            (e.RemoAdminQATasker = "RemoAdmin QA/Tasker"),
            (e.RemoAdminReviewer = "RemoAdmin Reviewer"),
            (e.KeepLoopRemoAdmin = "Keep in Loop (with RemoAdmin)"),
            (e.KeepLoop = "Keep in Loop"),
            (e.OPs = "Ops (Unspecified Role, Performing Project Work)"),
            (e.DeliveryOpsTeamMember = "Delivery Ops Team Member"),
            (e.CentralOpsTeamMember = "Central Ops Team Member"),
            (e.NonDeliveryFunction = "Non-Delivery Function");
        })(n || (t.Role = n = {}));
      const a = {
        [n.EM]: {
          role: n.EM,
          label: "Engagement Manager",
          helpText:
            "This person is responsible for the customer relationship and tracking consumption, amongst other things.",
        },
        [n.STO]: {
          role: n.STO,
          label: "STO",
          helpText:
            "Single Threaded Owner. Main person responsible for project execution and results.",
        },
        [n.DRI]: {
          role: n.DRI,
          label: "Ops DRI",
          helpText:
            "This is the person responsible for delivering quality and throughput for that specific queue.",
        },
        [n.QualitySystems]: {
          role: n.QualitySystems,
          label: "Quality Systems",
          helpText:
            "This person configures and monitors the systems used to measure tasker and annotation quality on the queue.",
        },
        [n.CoursesInstructions]: {
          role: n.CoursesInstructions,
          label: "Courses and Instructions",
          helpText:
            "This person works to create and maintain clear instructions and effective courses.",
        },
        [n.QM]: {
          role: n.QM,
          label: "QM",
          helpText:
            "Queue Manager. This person is responsible for adjusting the queue to make sure SLAs are attained and taskers are properly incentivized.",
        },
        [n.TaskerManagement]: {
          role: n.TaskerManagement,
          label: "Tasker Management",
          helpText:
            "This person manages allocation, promotions, demotions, and disabling permissions for tasters on this project.",
        },
        [n.QualityAudits]: {
          role: n.QualityAudits,
          label: "Quality Audits",
          helpText:
            "This person is directly auditing work from taskers to identify quality issues.",
        },
        [n.QARValidator]: {
          role: n.QARValidator,
          label: "QM QAR Validator",
          helpText:
            "This person is responsible for resolving issues identified in the queue by the QAR process.",
        },
        [n.QIRValidator]: {
          role: n.QIRValidator,
          label: "QM QIR Validator",
          helpText:
            "This person is responsible for resolving issues identified in the queue by the QIR process.",
        },
        [n.QARAuditor]: {
          role: n.QARAuditor,
          label: "QAR Auditor",
          helpText:
            "A person from the QAR team that is responsible for identifying issues in the queue by the QAR process.",
        },
        [n.QIRAuditor]: {
          role: n.QIRAuditor,
          label: "QIR Auditor",
          helpText:
            "A person from the QIR team that is responsible for identifying issues in the queue by the QIR process.",
        },
        [n.ProjectPlanning]: {
          role: n.ProjectPlanning,
          label: "Project Planning",
          helpText:
            "This person is responsible for ensuring throughput and/or turnaround time is hitting targets.",
        },
        [n.TaskerCommunication]: {
          role: n.TaskerCommunication,
          label: "Tasker Communication",
          helpText:
            "This person is communicating with taskers or tasker support resources to answer questions and resolve concerns.",
        },
        [n.EngineeringSupport]: {
          role: n.EngineeringSupport,
          label: "Engineering Support",
          helpText:
            "This is someone supporting the project in a technical capacity \u2014 either as a FE, SWE, SE, or MLE.",
        },
        [n.RemoAdminQATasker]: {
          role: n.RemoAdminQATasker,
          label: "RemoAdmin QA/Tasker",
          helpText: "RemoAdmin QA or Tasker.",
        },
        [n.RemoAdminReviewer]: {
          role: n.RemoAdminReviewer,
          label: "RemoAdmin Operation Reviewer",
          helpText:
            "Reviews QA Operations and work performed by RemoAdmin QAs/Taskers.",
        },
        [n.KeepLoopRemoAdmin]: {
          role: n.KeepLoopRemoAdmin,
          label: "Keep in Loop (with RemoAdmin)",
          helpText:
            'This is the same as "Keep in Loop". The difference is that this gives access to the project in RemoAdmin, so it needs authorization.',
        },
        [n.KeepLoop]: {
          role: n.KeepLoop,
          label: "Keep in Loop",
          helpText:
            "This is someone who doesn't fit into the other categories but who wants to be informed about this project.",
        },
        [n.OPs]: {
          role: n.OPs,
          label: "Ops (Unspecified Role, Performing Project Work)",
          helpText: "Ops (Unspecified Role, Performing Project Work).",
        },
        [n.DeliveryOpsTeamMember]: {
          role: n.DeliveryOpsTeamMember,
          label: "Delivery Ops Team Member",
          helpText:
            "Catch-all role for all OPMs, OAs, non-STO SPLs, etc. that are working on the project.",
        },
        [n.CentralOpsTeamMember]: {
          role: n.CentralOpsTeamMember,
          label: "Central Ops Team Member",
          helpText:
            "Non-member of the Operations team person allowed to work on the project.",
        },
        [n.NonDeliveryFunction]: {
          role: n.NonDeliveryFunction,
          label: "Non-Delivery Function",
          helpText:
            "Someone who is not part of the delivery team but needs temporary access to the project.",
        },
      };
      t.RoleDescription = a;
      const i = [
        a[n.EM],
        a[n.STO],
        a[n.DeliveryOpsTeamMember],
        a[n.CentralOpsTeamMember],
      ];
      t.RoleList = i;
      const s = new Set([
        n.RemoAdminQATasker,
        n.KeepLoopRemoAdmin,
        n.RemoAdminReviewer,
      ]);
      t.shouldShowRemoAdminProjectRole = (e) => {
        const t = e.role && s.has(e.role),
          n = !0 === e.user.isRemoAdmin,
          a = [];
        e.user.remoAdminPersonas?.forEach((e) => {
          e.enabled &&
            e.projects?.forEach((e) => {
              a.push(e);
            });
        });
        const i = a.includes(e.project._id);
        return !t || (t && n && i);
      };
      t.userHasActiveSpecificRole = (e, t, n) =>
        n.find(
          (n) =>
            n.role === e &&
            n.user._id === t &&
            new Date(n.startDate) < new Date() &&
            (!n.stopDate || new Date(n.stopDate) > new Date())
        );
      t.REQUEST_PROJECT_ROLES_LINK =
        "https://scale.atlassian.net/servicedesk/customer/portal/35";
    },
    318308: function (e, t, n) {
      "use strict";
      t.Z = function (e, { workerFacing: t = !1, rapid: n = !1 } = {}) {
        if (!e) return "All";
        let a = i.default.get(o, [e, t ? "worker" : "customer"]);
        n &&
          e === s.TaskType.DataCollection &&
          (a = "Project Setup Incomplete");
        n && e === s.TaskType.TextCollection && (a = `${a} / Categorization`);
        a || t || (a = r[e]);
        return a || i.default.startCase(e);
      };
      var a,
        i = (a = n(298784)) && a.__esModule ? a : { default: a },
        s = n(167469);
      const o = {
          [s.TaskType.Annotation]: {
            customer: "2D Box Annotation",
            worker: "Box Annotation",
          },
          [s.TaskType.AudioCollection]: {
            customer: "Audio Collection",
            worker: "Audio Collection",
          },
          [s.TaskType.AudioTranscription]: {
            customer: "Audio Transcription",
            worker: "Audio Transcription",
          },
          [s.TaskType.Categorization]: {
            customer: "Categorization",
            worker: "Categorization",
          },
          [s.TaskType.Comparison]: {
            customer: "Comparison",
            worker: "Comparison",
          },
          [s.TaskType.ContentModel]: {
            customer: "Content Model",
            worker: "Content Model",
          },
          [s.TaskType.CuboidAnnotation]: {
            customer: "3D Cuboid Annotation",
            worker: "Cuboid Annotation",
          },
          [s.TaskType.DataCollection]: {
            customer: "Data Collection",
            worker: "Data Collection",
          },
          [s.TaskType.DocumentCorrection]: {
            customer: "Document Correction",
            worker: "Document Correction",
          },
          [s.TaskType.DocumentTranscription]: {
            customer: "Document Transcription",
            worker: "Document Transcription",
          },
          [s.TaskType.DocumentModel]: {
            customer: "Document Model",
            worker: "Document Model",
          },
          [s.TaskType.ImageAnnotation]: {
            customer: "General Image Annotation",
            worker: "Image Annotation",
          },
          [s.TaskType.LidarAnnotation]: {
            customer: "Lidar Annotation",
            worker: "Lidar Annotation",
          },
          [s.TaskType.LidarSegmentation]: {
            customer: "Lidar Segmentation",
            worker: "Lidar Segmentation",
          },
          [s.TaskType.LineAnnotation]: {
            customer: "Line & Spline Annotation",
            worker: "Line Annotation",
          },
          [s.TaskType.NamedEntityRecognition]: {
            customer: "Named Entity Recognition",
            worker: "Text Highlighting",
          },
          [s.TaskType.PointAnnotation]: {
            customer: "Point Annotation",
            worker: "Point Annotation",
          },
          [s.TaskType.PolygonAnnotation]: {
            customer: "Polygon Annotation",
            worker: "Polygon Annotation",
          },
          [s.TaskType.SegmentAnnotation]: {
            customer: "2D Semantic Segmentation",
            worker: "Image Segmentation",
          },
          [s.TaskType.TextCollection]: {
            customer: "Text Collection",
            worker: "Text Collection",
          },
          [s.TaskType.Transcription]: {
            customer: "OCR Transcription",
            worker: "Transcription",
          },
          [s.TaskType.VideoAnnotation]: {
            customer: "General Video Annotation",
            worker: "Video Annotation",
          },
          [s.TaskType.VideoBoxAnnotation]: {
            customer: "Video Box Annotation",
            worker: "Video Box Annotation",
          },
          [s.TaskType.VideoCaptioning]: {
            customer: "Video Captioning",
            worker: "Video Captioning",
          },
          [s.TaskType.VideoCuboidAnnotation]: {
            customer: "Video Cuboid Annotation",
            worker: "Video Cuboid Annotation",
          },
          [s.TaskType.VideoPolygonAnnotation]: {
            customer: "Video Polygon Annotation",
            worker: "Video Polygon Annotation",
          },
          [s.TaskType.VideoPlaybackAnnotation]: {
            customer: "Video Playback Annotation",
            worker: "Video Playback Annotation",
          },
          [s.TaskType.GenericDataCollection]: {
            customer: "Generic Data Collection",
            worker: "Generic Data Collection",
          },
          [s.TaskType.MultiModalTranscription]: {
            customer: "Multimodal Transcription",
            worker: "Multimodal Transcription",
          },
          [s.TaskType.LidarLinking]: {
            customer: "Lidar 2D/3D Linking",
            worker: "",
          },
          [s.TaskType.LidarStitching]: {
            customer: "Lidar Stitching",
            worker: "",
          },
          [s.TaskType.LidarTopdown]: { customer: "Lidar Topdown", worker: "" },
          [s.TaskType.FixAnnotation]: {
            customer: "Single Box Annotation",
            worker: "Classic - Single Box",
          },
          [s.TaskType.LaneAnnotation]: {
            customer: "Lane Annotation",
            worker: "Classic - Lanes",
          },
          [s.TaskType.PhoneCall]: {
            customer: "Phone Call",
            worker: "Classic - Phone Call",
          },
          [s.TaskType.Chat]: {
            customer: "Chat (Legacy)",
            worker: "Chat (Legacy)",
          },
          [s.TaskType.ChatExperimental]: { customer: "Chat", worker: "Chat" },
          [s.TaskType.ChatV2]: { customer: "Chat", worker: "Chat" },
          [s.TaskType.MultiChat]: {
            customer: "Multi-Chat",
            worker: "Multi-Chat",
          },
        },
        r = {
          "semantic-segmentation": "Semantic Segmentation",
          "sensor-fusion-cuboids": "Sensor Fusion Cuboids",
          "sensor-fusion-segmentation": "Sensor Fusion Segmentation",
          audiospeech: "Audio Speech",
          boxannotation: "2D Box Annotation",
          imageannotation: "Image Annotation",
          imagecategorization: "Image Categorization",
          imagerecognition: "Image Recognition",
          otherannotation: "Other Annotation",
          sentimentanalysis: "Sentiment & Intent Analysis",
          textcategorization: "Text Categorization",
          textclassification: "Text Classification",
          utterancecollection: "Utterance Collection",
          lidartopdown: "Lidar Top-Down Annotation",
        };
    },
    14781: function (e, t) {
      "use strict";
      var n;
      (t.v = void 0),
        (t.v = n),
        (function (e) {
          (e.IdentityDecline = "Identity Decline"),
            (e.NumRemainingVerificationsRequired =
              "Number Remaining Verifications Required"),
            (e.VerificationCompleted = "Verification Completed"),
            (e.StartVerification = "Start Verification"),
            (e.ReachedMaxTries = "Reached Max Tries Of Tries"),
            (e.CheckAccountVerificationStatus =
              "Check Account Verification Status"),
            (e.SupportRequest = "Support Request"),
            (e.DownloadEarningsCSV = "Download Earnings CSV"),
            (e.EarningsViewUnderMaintenance =
              "Earnings View Under Maintenance"),
            (e.SubmittedPhoneNumberForVerification =
              "Submitted Phone Number For Verification"),
            (e.SubmittedPhoneNumberForVerificationError =
              "Submitted Phone Number For Verification Error"),
            (e.ClickedContinueVerifyPhone = "Clicked Continue - Verify Phone"),
            (e.ClickedContinueModifyInformation =
              "Clicked Continue - Modify Information"),
            (e.PhoneNumberInputFocused = "Phone Number Input Focused"),
            (e.SubmitLanguages = "Submit Languages"),
            (e.LanguagesSaved = "Languages Saved"),
            (e.LanguagesSelected = "Languages Selected"),
            (e.SkipWorkerSkillsSelection = "Skip Worker Skills Selection"),
            (e.SelectWorkerSkills = "Select Worker Skills"),
            (e.WorkerSkillsSaved = "Worker Skills Saved"),
            (e.SubmitWorkerSkills = "Submit Worker Skills"),
            (e.FinishIdentityVerification = "Finish Identity Verification"),
            (e.VerificationApproved = "Verification Approved"),
            (e.IsVerificationUnderReview = "Is Verification Under Review"),
            (e.ResumePersonaVerification = "Resume Persona Verification"),
            (e.LoadPersonaVerification = "Load Persona Verification"),
            (e.JoinSlackUserClickedToJoinSlack =
              "Join Slack - User clicked to join slack"),
            (e.JoinSlackUserCanSeeSkipButton =
              "Join Slack - User Can See Skip Button"),
            (e.JoinSlackUserClickedToSkipJoiningSlack =
              "Join Slack - User Clicked To Skip Joining Slack"),
            (e.JoinSlackUserJoinedSlack = "Join Slack - User Joined Slack"),
            (e.JoinDiscourseUserClickedToJoinDiscourse =
              "Join Discourse - User clicked to join discourse"),
            (e.JoinDiscourseUserCanSeeSkipButton =
              "Join Discourse - User Can See Skip Button"),
            (e.JoinDiscourseUserClickedToSkipJoiningDiscourse =
              "Join Discourse - User Clicked To Skip Joining Discourse"),
            (e.JoinDiscourseUserJoinedDiscourse =
              "Join Discourse - User Joined Discourse"),
            (e.JoinDiscourseUserBypassedDiscourse =
              "Join Discourse - User Bypassed Discourse"),
            (e.TrainingErroredGettingCourseInfo =
              "Training - Errored Getting Course Info"),
            (e.TrainingContinueToAssessment =
              "Training - Continue To Assessment"),
            (e.TrainingSkipAssessment = "Training - Skip Assessment"),
            (e.TrainingAssessmentNotEnabledOrUserIsOrganic =
              "Training - Assessment Not Enabled Or User Is Organic"),
            (e.TrainingNoAssessmentQualificationFound =
              "Training - No Assessment Qualification Found"),
            (e.TrainingNoPendingQualificationFound =
              "Training - No Pending Qualification Found"),
            (e.ConfirmYourInformationViewLoaded =
              "Confirm Your Information View Loaded"),
            (e.PhoneVerificationCodeViewLoaded =
              "Phone Verification Code View Loaded"),
            (e.LanguagesViewLoaded = "Languages View Loaded"),
            (e.ExpertiseViewLoaded = "Expertise View Loaded"),
            (e.ProgrammingExpertiseViewLoaded =
              "Programming Expertise View Loaded"),
            (e.IdentityVerificationViewLoaded =
              "Identity Verification View Loaded"),
            (e.JoinSlackViewLoaded = "Join Slack View Loaded"),
            (e.JoinDiscourseViewLoaded = "Join Discourse View Loaded"),
            (e.AssesmentOverviewViewLoaded = "Assesment Overview View Loaded"),
            (e.LocationPolicyWarning = "Location Policy Warning Page Loaded"),
            (e.PhoneNumberChangeAborted = "Phone Number Change Aborted"),
            (e.PhoneNumberChangeReverificationFailed =
              "Phone Number Change Reverification Failed"),
            (e.PhoneNumberChange2FAFailed = "Phone Number Change 2FA Failed"),
            (e.PhoneNumberChangeSuccess = "Phone Number Change Success"),
            (e.PhoneNumberChangeStarted = "Phone Number Change Started"),
            (e.ViewResourceLibraryPage = "View Resource Library Page"),
            (e.ViewResourceLibraryModule = "View Resource Library Module");
        })(n || (t.v = n = {}));
    },
    354166: function (e, t, n) {
      "use strict";
      t.a = void 0;
      var a = n(599789);
      const i =
          "\n  <p>Hey there! We currently have no available projects in your area of expertise.</p>\n  <p>We will alert you via email when new projects are available.</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n  ",
        s =
          "\n  <p>The project you are currently on limits the number of tasks each person can complete every 20 minutes.</p>\n  <p>Come back soon to continue working!</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n",
        o =
          "\n  <p>Hey there! The project you are assigned to currently does not support the device you are working on.</p>\n  <p>Please switch to a non-mobile device to continue working. Thanks!</p>\n",
        r =
          "\n  <p>Hey there! We currently do not have payment info for your account.</p>\n  <p>In order to continue working and ensure that payments are smooth and efficient, please set up your banking info in your profile page.</p>\n",
        l =
          "\n  <p>Congrats \u2014 you're on track to earn more than $600 on Outlier this year.</p>\n  <p>Please take a moment to submit your W-9 form in order to continue working.</p>\n",
        c =
          "\n  <p>Hey there! Outlier is transitioning to a new payment provider, Hyperwallet, a Paypal Company.</p>\n  <p>You will need to update your pay information in your profile page before Outlier can match you with your next project.</p>\n",
        u =
          "\n  <p>Hey there! A project that you previously rejected is still available to you if you'd like to choose to work on it.</p>\n  <p>Otherwise, you will be eligible for new projects as they become available.</p>\n",
        d = {};
      t.a = d;
      for (const b of a.WaitingOnTasksEmptyQueueReasons)
        d[b] =
          "\n  <p>Good job! Your tasks in your previously active project have now been completed. </p>\n  <br/>\n  <p>We will alert you via email when new projects are available. Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n";
      for (const b of a.BugEmptyQueueReasons)
        d[b] =
          "\n  <p>Hey there! We're currently unable to find a project for you.</p>\n  <p>We will alert you via email when new projects are available.</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n  ";
      for (const b of a.OperatorActionableEmptyQueueReasons) d[b] = i;
      for (const b of a.ConfigExclusionEmptyQueueReasons) d[b] = i;
      for (const b of a.PendingTimeEmptyQueueReasons)
        b === a.EmptyQueueReason.RapidShadowProjectTimeout
          ? (d[b] = s)
          : (d[b] =
              "Hey there! The project you are currently assigned to has a limit on the number of task attempts that need to receive reviews before you can continue. We are actively working on finding reviewers to review your tasks. Thank you for your patience!");
      for (const b of a.GenericEmptyQueueReasons)
        d[b] =
          "\n  <p>Hey there! We're currently unable to find a project for you.</p>\n  <p>We will alert you via email when new projects are available.</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n  ";
      for (const b of a.AssessmentFailedEmptyQueueReasons)
        d[b] =
          "\n  <p>Unfortunately, you did not meet the quality threshold on your assessments.</p>\n  <p>As a result, you have been removed from the project.</p>\n  <p>We will alert you via email when new projects are available.</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n";
      for (const b of a.ThrottlingEmptyQueueReasons)
        d[b] =
          "\n  <p>The project you are currently on limits the number of tasks each person can complete daily. </p>\n  <p>We will alert you via email when new projects are available.</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n";
      (d[a.EmptyQueueReason.InvalidDeviceType] = o),
        (d[a.EmptyQueueReason.PaySetup] = r),
        (d[a.EmptyQueueReason.TaxSetup] = l),
        (d[a.EmptyQueueReason.KYCInfoCollection] = c),
        (d[a.EmptyQueueReason.TaskWallWaiting] =
          "\n  <p>Hey there! We need a few minutes to set up your tasks. Thanks for your patience!</p>\n  <p>Come back soon to continue working!</p>\n"),
        (d[a.EmptyQueueReason.ContributorPausedProject] = u),
        (d[a.EmptyQueueReason.Disabled] =
          "\n  <p>We have found quality issues from your work on your previous project.</p>\n  <p>We will alert you via email when new projects are available.</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n"),
        (d[a.EmptyQueueReason.QualificationListFailed] =
          "\n  <p>This project has requirements that you are not qualified for. As a result, you cannot access the project.</p>\n  <p>We will alert you via email when new projects are available.</p>\n  <p>Please note that there's nothing more you need to do, and support cannot speed up this process.</p>\n");
      const p =
          "In the meantime, please select a recommended project below or visit the Marketplace.",
        m = {
          description: "We currently do not have any available tasks for you.",
          subtext:
            "Thank you for patience. We will notify you when this is resolved. In the meantime, please select a recommended project below or visit the Marketplace",
        };
      const h = {
          description:
            "This project has no available work to claim, we will notify you when there are new tasks available.",
          subtext: p,
        },
        f = {
          description: "Your assessment tasks for being reviewed for quality.",
          subtext:
            "Feel free to choose another project in the meantime, and we will notify you when results are available.",
        },
        C = {
          description:
            "This project limits the number of tasks each person can complete daily.",
          subtext: p,
        },
        g = {
          description: "This project is currently setting up tasks.",
          subtext: p,
        },
        y = {
          description:
            "Unfortunately, you did not meet the quality threshold on your assessments. As a result, you have been removed from the project.",
          subtext: p,
        },
        v = {
          description:
            "This project limits the number of tasks awaiting review. We are actively working on reviewing your tasks.",
          subtext:
            "Feel free to choose another project in the meantime, and we will notify you once we have completed our review.",
        },
        x = {
          description:
            "This project has requirements that you are not qualified for. As a result, you cannot access the project.",
          subtext:
            "Please select a recommended project below or visit the Marketplace to find a new project.",
        },
        T = {
          [a.EmptyQueueReason.InvalidDeviceType]: {
            description: o,
            subtext: "",
          },
          [a.EmptyQueueReason.PaySetup]: { description: r, subtext: "" },
          [a.EmptyQueueReason.TaxSetup]: { description: l, subtext: "" },
          [a.EmptyQueueReason.KYCInfoCollection]: {
            description: c,
            subtext: "",
          },
          [a.EmptyQueueReason.ContributorPausedProject]: {
            description: u,
            subtext: "",
          },
        };
      for (const b of a.ThrottlingEmptyQueueReasons) T[b] = C;
      for (const b of a.PendingTimeEmptyQueueReasons)
        switch (b) {
          case a.EmptyQueueReason.RapidShadowProjectTimeout:
            T[b] = { display: s, subtext: p };
            break;
          case a.EmptyQueueReason.TaskWallThrottle:
            T[b] = f;
            break;
          case a.EmptyQueueReason.TaskWallWaiting:
            T[b] = g;
            break;
          default:
            T[b] = v;
        }
      for (const b of a.WaitingOnTasksEmptyQueueReasons) T[b] = h;
      for (const b of a.BugEmptyQueueReasons) T[b] = m;
      for (const b of a.ConfigErrorEmptyQueueReasons) T[b] = m;
      for (const b of a.GenericEmptyQueueReasons) T[b] = m;
      for (const b of a.AssessmentFailedEmptyQueueReasons) T[b] = y;
      (T[a.EmptyQueueReason.Disabled] = {
        description:
          "We have found quality issues from your work on this project. We recommend trying another project that could be better suited to your skills.",
        subtext:
          "Select a recommended project below or visit the Marketplace. If you believe this is an error, you may submit an appeal.",
      }),
        (T[a.EmptyQueueReason.QualificationListFailed] = x);
    },
    526106: function (e, t, n) {
      "use strict";
      t.bK = void 0;
      var a = n(599789),
        i = n(844478);
      const s =
          "\n  <p><strong>Project and task availability depend on customer demand and requirements.</strong></p>\n  <br/>\n  <p>As a result, you have been assigned to a new project. Unfortunately, returning to your previous project is not an option at this time.</p>\n",
        o =
          "Unfortunately, you did not meet the minimum quality standards of your project. We have found you the opportunity to work on a new project that might be a better fit for your skills.",
        r = "Please see the following details around your new work on Outlier.",
        l = {
          [i.WorkerTeamAssignmentReason.ProjectClosure]:
            "Your current project has concluded. We have found you the opportunity to task on a new project.",
          [i.WorkerTeamAssignmentReason.PriorityChange]: s,
          [i.WorkerTeamAssignmentReason.LimitedWork]:
            "Due to a change in task availability, we have found you the opportunity to task  on a new project.",
          [i.WorkerTeamAssignmentReason.SelfRequest]:
            "As per your own request, we have found you an opportunity to task on a new project.",
          [i.WorkerTeamAssignmentReason.NewOrReactivated]:
            "Congrats! You have the opportunity to start tasking.",
          [i.WorkerTeamAssignmentReason.Fraud]: o,
          [i.WorkerTeamAssignmentReason.PoorQuality]: o,
          [i.WorkerTeamAssignmentReason.AllocationMistake]:
            "Due to an allocation error we are placing you back on the correct project.",
          [i.WorkerTeamAssignmentReason.Promotion]: r,
          [i.WorkerTeamAssignmentReason.Demotion]: r,
          [i.WorkerTeamAssignmentReason.Generic]: r,
          [i.WorkerTeamAssignmentReason.NoTaskerFacingReason]: r,
          [i.WorkerTeamAssignmentReason.Training]:
            "Congrats! You have the opportunity to start training for a project.",
        };
      t.bK = l;
      const c = {};
      const u = "skip this copy";
      for (const d of a.WaitingOnTasksEmptyQueueReasons)
        c[d] =
          "\n  <p><strong>Good job! Your tasks in your previously active project have now been completed.</strong></p>\n  <br/>\n  <p>While you wait for more tasks to become available, we have made a new project that meets your skills and expertise available to you.</p>\n";
      for (const d of a.BugEmptyQueueReasons) c[d] = u;
      for (const d of a.ConfigErrorEmptyQueueReasons) c[d] = s;
      for (const d of a.PendingTimeEmptyQueueReasons)
        a.EmptyQueueReason.RapidShadowProjectTimeout, (c[d] = u);
      for (const d of a.GenericEmptyQueueReasons) c[d] = u;
      for (const d of a.AssessmentFailedEmptyQueueReasons)
        c[d] =
          "\n  <p><strong>Unfortunately, you did not meet the quality threshold on your assessments.</strong></p>\n  <br/>\n  <p>As a result, you have been removed from the project. However, we have made a new project that meets your skills and expertise available to you.</p>\n";
      for (const d of a.ThrottlingEmptyQueueReasons)
        c[d] =
          "\n  <p><strong>The project you are currently on limits the number of tasks each person can complete daily.</strong></p>\n  <br/>\n  <p>While you wait to be able to complete more tasks in the original project, we have made a new project that meets your skills and expertise available to you.</p>\n";
      (c[a.EmptyQueueReason.InvalidDeviceType] = u),
        (c[a.EmptyQueueReason.PaySetup] = u),
        (c[a.EmptyQueueReason.KYCInfoCollection] = u),
        (c[a.EmptyQueueReason.TaskWallWaiting] = u),
        (c[a.EmptyQueueReason.ContributorPausedProject] = u),
        (c[a.EmptyQueueReason.Disabled] =
          "\n  <p><strong>We have found quality issues from your work on your previous project.</strong></p>\n  <br/>\n  <p>In the meantime, we have found you available tasks on a new project.</p>\n"),
        (c[i.WorkerTeamAssignmentReason.PriorityChange] = s),
        (c.skip = u);
    },
    202466: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extractWordsFromText =
          t.isValidObjectId =
          t.OBJECT_ID_REGEX =
            void 0);
      const n = /^[a-f\d]{24}$/i;
      t.OBJECT_ID_REGEX = n;
      t.isValidObjectId = (e) => n.test(e);
      t.extractWordsFromText = (e, t) => {
        const n = new RegExp(`(?<=\\b|_)(?:${t.join("|")})(?=\\b|_)`, "gi"),
          a = e.match(n) || [];
        return [...new Set(a.map((e) => e.toLowerCase()))];
      };
    },
    500718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TAXONOMY_OWNER_PROJECT_ROLES =
          t.SPLIT_TAXONOMY_PRODUCT_TYPES =
          t.PROJECT_TASKTYPE_TO_TAXONOMY_TARGET_TASKTYPES =
          t.BACKFILL_SUPPORTED_TYPES =
          t.GLOBAL_TRACK_ATTRIBUTE_SUPPORTED_TYPES =
          t.ANNOTATE_UPLOADED_EXAMPLES_SUPPORTED_TYPES =
          t.JSON_PREVIEW_SUPPORTED_TYPES =
          t.ALLOWED_PRODUCT_TYPES =
            void 0);
      var a = n(167469),
        i = n(372680);
      const s = [
        a.TaskType.SensorFusion,
        a.TaskType.MultiStage,
        a.TaskType.LidarAnnotation,
        a.TaskType.LidarLinking,
        a.TaskType.LidarTopdown,
        a.TaskType.SegmentAnnotation,
        a.TaskType.LidarSegmentation,
        a.TaskType.VideoAnnotation,
        a.TaskType.ImageAnnotation,
        a.TaskType.VideoPlaybackAnnotation,
      ];
      t.ALLOWED_PRODUCT_TYPES = s;
      const o = [
        a.TaskType.SensorFusion,
        a.TaskType.MultiStage,
        a.TaskType.LidarTopdown,
        a.TaskType.VideoAnnotation,
        a.TaskType.ImageAnnotation,
        a.TaskType.VideoPlaybackAnnotation,
      ];
      t.JSON_PREVIEW_SUPPORTED_TYPES = o;
      const r = [
        a.TaskType.ImageAnnotation,
        a.TaskType.LidarLinking,
        a.TaskType.LidarTopdown,
      ];
      t.ANNOTATE_UPLOADED_EXAMPLES_SUPPORTED_TYPES = r;
      const l = [
        a.TaskType.LidarAnnotation,
        a.TaskType.LidarLinking,
        a.TaskType.VideoAnnotation,
        a.TaskType.SensorFusion,
        a.TaskType.VideoPlaybackAnnotation,
      ];
      t.GLOBAL_TRACK_ATTRIBUTE_SUPPORTED_TYPES = l;
      const c = [
        a.TaskType.LidarTopdown,
        a.TaskType.SegmentAnnotation,
        a.TaskType.LidarLinking,
        a.TaskType.LidarSegmentation,
        a.TaskType.SensorFusion,
        a.TaskType.MultiStage,
        a.TaskType.LidarAnnotation,
        a.TaskType.VideoAnnotation,
        a.TaskType.ImageAnnotation,
        a.TaskType.VideoPlaybackAnnotation,
      ];
      t.BACKFILL_SUPPORTED_TYPES = c;
      const u = {
        [a.TaskType.SensorFusion]: s,
        [a.TaskType.MultiStage]: s,
        [a.TaskType.LidarAnnotation]: [a.TaskType.LidarAnnotation],
        [a.TaskType.LidarLinking]: [a.TaskType.LidarLinking],
        [a.TaskType.LidarTopdown]: [a.TaskType.LidarTopdown],
        [a.TaskType.SegmentAnnotation]: [a.TaskType.SegmentAnnotation],
        [a.TaskType.LidarSegmentation]: [a.TaskType.LidarSegmentation],
        [a.TaskType.VideoAnnotation]: [a.TaskType.VideoAnnotation],
        [a.TaskType.ImageAnnotation]: [a.TaskType.ImageAnnotation],
        [a.TaskType.VideoPlaybackAnnotation]: [
          a.TaskType.VideoPlaybackAnnotation,
        ],
      };
      t.PROJECT_TASKTYPE_TO_TAXONOMY_TARGET_TASKTYPES = u;
      const d = [a.TaskType.SensorFusion, a.TaskType.MultiStage];
      t.SPLIT_TAXONOMY_PRODUCT_TYPES = d;
      const p = [i.Role.EM, i.Role.DRI, i.Role.STO, i.Role.CoursesInstructions];
      t.TAXONOMY_OWNER_PROJECT_ROLES = p;
    },
    844478: function (e, t) {
      "use strict";
      var n, a, i, s, o, r;
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
        (t.WorkerTeamLoanStatus = a),
        (function (e) {
          (e.Loaned = "loaned"),
            (e.LoanStarted = "loan_started"),
            (e.Returned = "just_returned");
        })(a || (t.WorkerTeamLoanStatus = a = {})),
        (t.WorkerTeamReturnReason = i),
        (function (e) {
          (e.DateCondition = "date_condition"),
            (e.TaskAvailability = "task_availability"),
            (e.HoursCondition = "hours_condition"),
            (e.Manual = "manual");
        })(i || (t.WorkerTeamReturnReason = i = {})),
        (t.WorkerTeamAssignmentReason = s),
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
        })(s || (t.WorkerTeamAssignmentReason = s = {})),
        (t.WorkerTeamAssignmentDuration = o),
        (function (e) {
          (e.Temporary = "temporary"),
            (e.Permanent = "permanent"),
            (e.Unknown = "unknown");
        })(o || (t.WorkerTeamAssignmentDuration = o = {})),
        (t.UpdateModes = r),
        (function (e) {
          (e.OVERWRITE = "overwrite"),
            (e.ADD_FIRST = "add_first"),
            (e.ADD_LAST = "add_last"),
            (e.REMOVE = "remove");
        })(r || (t.UpdateModes = r = {}));
    },
    582246: function (e, t, n) {
      "use strict";
      t.G6 = t.oj = t.NS = t.tT = t.rs = t.n8 = t.Ry = t.hN = t.BR = void 0;
      var a,
        i = n(167469);
      (t.BR = a),
        (function (e) {
          (e.Time = "time"),
            (e.Task = "task"),
            (e.Attempt = "attempt"),
            (e.Review = "review"),
            (e.Course = "course"),
            (e.WebinarSession = "webinarSession");
        })(a || (t.BR = a = {}));
      var s;
      a.Time,
        a.Task,
        a.Course,
        a.WebinarSession,
        (t.hN = s),
        (function (e) {
          (e.Hours = "hours"),
            (e.Tasks = "tasks"),
            (e.Attempts = "attempts"),
            (e.Reviews = "reviews"),
            (e.Courses = "courses"),
            (e.WebinarSessions = "webinarSessions");
        })(s || (t.hN = s = {}));
      const o = {
        [a.Time]: s.Hours,
        [a.Task]: s.Tasks,
        [a.Attempt]: s.Attempts,
        [a.Review]: s.Reviews,
        [a.Course]: s.Courses,
        [a.WebinarSession]: s.WebinarSessions,
      };
      var r;
      (t.Ry = o),
        (function (e) {
          (e.StartAtDate = "startAtDate"),
            (e.EndsAtDate = "endsAtDate"),
            (e.StartAndEndsAtDate = "startAndEndsAtDate");
        })(r || (r = {}));
      a.Time,
        s.Hours,
        a.Task,
        s.Tasks,
        a.Attempt,
        s.Attempts,
        a.Review,
        s.Reviews,
        a.Course,
        s.Courses,
        a.WebinarSession,
        s.WebinarSessions;
      var l, c;
      a.Time,
        s.Hours,
        a.Task,
        s.Tasks,
        a.Attempt,
        s.Attempts,
        a.Review,
        s.Reviews,
        a.Course,
        s.Courses,
        a.WebinarSession,
        s.WebinarSessions,
        (t.n8 = l),
        (function (e) {
          (e.ACTIVE = "active"),
            (e.UPCOMING = "upcoming"),
            (e.COMPLETED = "completed");
        })(l || (t.n8 = l = {})),
        (t.rs = c),
        (function (e) {
          (e.ACTIVE = "active"),
            (e.UPCOMING = "upcoming"),
            (e.EARNED = "earned"),
            (e.EXPIRED = "expired"),
            (e.PARTIALLY_EARNED = "partially earned");
        })(c || (t.rs = c = {}));
      const u = {
        [c.ACTIVE]: {
          icon: "calendar",
          iconColor: "text-neutral-700",
          background: "bg-neutral-100",
          variant: "black",
        },
        [c.UPCOMING]: {
          icon: "clock",
          iconColor: "text-warning-800",
          background: "bg-warning-100",
          variant: "warning",
        },
        [c.EARNED]: {
          icon: "check-circle",
          iconColor: "text-success-600",
          background: "bg-success-50",
          variant: "success",
        },
        [c.PARTIALLY_EARNED]: {
          icon: "check-circle",
          iconColor: "text-success-600",
          background: "bg-success-50",
          variant: "success",
        },
        [c.EXPIRED]: {
          icon: "exclamation-triangle",
          iconColor: "text-neutral-700",
          background: "bg-neutral-100",
          variant: "black",
        },
      };
      t.tT = u;
      const d = {
        [a.Time]:
          "Qualifying mission hours include hours working on submitted tasks in Outlier (not including time spent on courses or webinars) as well as any hours working off-platform as tracked in Hubstaff or Data Compute.",
        [a.Task]:
          "The number of on-platform attempts and reviews you complete. This excludes any third-party work.",
        [a.Attempt]:
          "The number of on-platform attempts you complete. This excludes any third-party work.",
        [a.Review]:
          "The number of on-platform reviews you complete. This excludes any third-party work.",
        [a.Course]: "",
        [a.WebinarSession]: "",
      };
      t.NS = d;
      const p = {
        [a.Task]: {
          stopColor1: "#99BECC",
          stopColor2: "#5D92A1",
          stopColor3: "#99BECC",
        },
        [a.Attempt]: {
          stopColor1: "#99BECC",
          stopColor2: "#5D92A1",
          stopColor3: "#99BECC",
        },
        [a.Review]: {
          stopColor1: "#E4B9B0",
          stopColor2: "#CC72AA",
          stopColor3: "#E4B9B0",
        },
        [a.Time]: {
          stopColor1: "#B899C8",
          stopColor2: "#CC72AA",
          stopColor3: "#B899C8",
        },
        [a.Course]: {
          stopColor1: "#B899C8",
          stopColor2: "#CC72AA",
          stopColor3: "#B899C8",
        },
        [a.WebinarSession]: {
          stopColor1: "#B899C8",
          stopColor2: "#CC72AA",
          stopColor3: "#B899C8",
        },
      };
      var m, h, f;
      (t.oj = p),
        (function (e) {
          (e.None = ""), (e.Platinum = "platinum");
        })(m || (m = {})),
        (function (e) {
          (e.EmptyQueue = "Empty Queue"),
            (e.AlreadyNotified = "Already Notified"),
            (e.NotEnoughTasks = "Not Enough Tasks"),
            (e.NoSmsSend = "Cannot send SMS");
        })(h || (h = {})),
        (t.G6 = f),
        (function (e) {
          (e.Activation = "Non-project Based - Activation/Reactivation"),
            (e.THroughput = "Non-project Based - Throughput"),
            (e.ProjectBased = "Project Based");
        })(f || (t.G6 = f = {}));
    },
    137609: function (e, t) {
      "use strict";
      var n, a, i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CancelReason =
          t.FreezeReason =
          t.UpdatePaymentStatusAction =
            void 0),
        (t.UpdatePaymentStatusAction = n),
        (function (e) {
          (e.Freeze = "Freeze Payments"),
            (e.Unfreeze = "Unfreeze Payments"),
            (e.Cancel = "Cancel Payments"),
            (e.ForceIntoPeriod = "Force Payments Into Next Payout");
        })(n || (t.UpdatePaymentStatusAction = n = {})),
        (t.FreezeReason = a),
        (function (e) {
          (e.Temporary = "Temporary"),
            (e.UnusualActivity = "Unusual activity"),
            (e.Outage = "Outage"),
            (e.Ban = "Ban");
        })(a || (t.FreezeReason = a = {})),
        (t.CancelReason = i),
        (function (e) {
          (e.Spam = "Spam"),
            (e.Fraud = "Fraud"),
            (e.Outage = "Outage"),
            (e.Expired = "Expired");
        })(i || (t.CancelReason = i = {}));
    },
    845234: function (e, t) {
      "use strict";
      var n;
      (t.F = void 0),
        (t.F = n),
        (function (e) {
          (e.Subtask = "SUBTASK_IN_QUEUE"),
            (e.Course = "COURSE_IN_QUEUE"),
            (e.Benchmark = "BENCHMARK_IN_QUEUE"),
            (e.Redirect = "REDIRECT_IN_QUEUE"),
            (e.TaskAttempt = "TASK_ATTEMPT_IN_QUEUE"),
            (e.AccountVerification = "ACCOUNT_VERIFIACTION_IN_QUEUE"),
            (e.OutlierQualification = "OUTLIER_QUALIFICATION_IN_QUEUE");
        })(n || (t.F = n = {}));
    },
    985630: function (e) {
      e.exports = function (e) {
        return e.split("");
      };
    },
    339158: function (e, t, n) {
      var a = n(975733);
      e.exports = function (e, t, n) {
        var i = e.length;
        return (n = void 0 === n ? i : n), !t && n >= i ? e : a(e, t, n);
      };
    },
    262690: function (e, t, n) {
      var a = n(339158),
        i = n(825348),
        s = n(863528),
        o = n(365567);
      e.exports = function (e) {
        return function (t) {
          t = o(t);
          var n = i(t) ? s(t) : void 0,
            r = n ? n[0] : t.charAt(0),
            l = n ? a(n, 1).join("") : t.slice(1);
          return r[e]() + l;
        };
      };
    },
    825348: function (e) {
      var t = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      e.exports = function (e) {
        return t.test(e);
      };
    },
    863528: function (e, t, n) {
      var a = n(985630),
        i = n(825348),
        s = n(84890);
      e.exports = function (e) {
        return i(e) ? s(e) : a(e);
      };
    },
    84890: function (e) {
      var t = "[\\ud800-\\udfff]",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        a = "\\ud83c[\\udffb-\\udfff]",
        i = "[^\\ud800-\\udfff]",
        s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        o = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        r = "(?:" + n + "|" + a + ")" + "?",
        l = "[\\ufe0e\\ufe0f]?",
        c =
          l + r + ("(?:\\u200d(?:" + [i, s, o].join("|") + ")" + l + r + ")*"),
        u = "(?:" + [i + n + "?", n, s, o, t].join("|") + ")",
        d = RegExp(a + "(?=" + a + ")|" + u + c, "g");
      e.exports = function (e) {
        return e.match(d) || [];
      };
    },
    698052: function (e, t, n) {
      var a = n(365567),
        i = n(276744);
      e.exports = function (e) {
        return i(a(e).toLowerCase());
      };
    },
    276744: function (e, t, n) {
      var a = n(262690)("toUpperCase");
      e.exports = a;
    },
    654335: function (e) {
      var t = "undefined" !== typeof Element,
        n = "function" === typeof Map,
        a = "function" === typeof Set,
        i = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function s(e, o) {
        if (e === o) return !0;
        if (e && o && "object" == typeof e && "object" == typeof o) {
          if (e.constructor !== o.constructor) return !1;
          var r, l, c, u;
          if (Array.isArray(e)) {
            if ((r = e.length) != o.length) return !1;
            for (l = r; 0 !== l--; ) if (!s(e[l], o[l])) return !1;
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (u = e.entries(); !(l = u.next()).done; )
              if (!o.has(l.value[0])) return !1;
            for (u = e.entries(); !(l = u.next()).done; )
              if (!s(l.value[1], o.get(l.value[0]))) return !1;
            return !0;
          }
          if (a && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (u = e.entries(); !(l = u.next()).done; )
              if (!o.has(l.value[0])) return !1;
            return !0;
          }
          if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((r = e.length) != o.length) return !1;
            for (l = r; 0 !== l--; ) if (e[l] !== o[l]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === o.source && e.flags === o.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === o.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === o.toString();
          if ((r = (c = Object.keys(e)).length) !== Object.keys(o).length)
            return !1;
          for (l = r; 0 !== l--; )
            if (!Object.prototype.hasOwnProperty.call(o, c[l])) return !1;
          if (t && e instanceof Element) return !1;
          for (l = r; 0 !== l--; )
            if (
              (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l]) ||
                !e.$$typeof) &&
              !s(e[c[l]], o[c[l]])
            )
              return !1;
          return !0;
        }
        return e !== e && o !== o;
      }
      e.exports = function (e, t) {
        try {
          return s(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    418638: function (e, t, n) {
      "use strict";
      var a = n(560974),
        i = n(827378),
        s = n(279220);
      t.Z = function (e, t) {
        void 0 === t && (t = []);
        var n = (0, i.useState)(0),
          o = n[0],
          r = n[1],
          l = (0, s.Z)(e, (0, a.__spreadArrays)(t, [o])),
          c = l.loading,
          u = (0, i.useCallback)(function () {
            c ||
              r(function (e) {
                return e + 1;
              });
          }, (0, a.__spreadArrays)(t, [c]));
        return (0, a.__assign)((0, a.__assign)({}, l), { retry: u });
      };
    },
    995632: function (e, t, n) {
      "use strict";
      var a = n(827378);
      t.Z = function (e) {
        var t = (0, a.useState)(e),
          n = t[0],
          i = t[1];
        return [
          n,
          (0, a.useCallback)(
            function (e) {
              i(
                "boolean" === typeof e
                  ? e
                  : function (e) {
                      return !e;
                    }
              );
            },
            [i]
          ),
        ];
      };
    },
    986910: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ix: function () {
          return w;
        },
        Am: function () {
          return M;
        },
      });
      var a = n(827378),
        i = n(138944);
      const s = (e) => "number" == typeof e && !isNaN(e),
        o = (e) => "string" == typeof e,
        r = (e) => "function" == typeof e,
        l = (e) => (o(e) || r(e) ? e : null),
        c = (e) => (0, a.isValidElement)(e) || o(e) || r(e) || s(e);
      function u(e) {
        let {
          enter: t,
          exit: n,
          appendPosition: i = !1,
          collapse: s = !0,
          collapseDuration: o = 300,
        } = e;
        return function (e) {
          let {
            children: r,
            position: l,
            preventExitTransition: c,
            done: u,
            nodeRef: d,
            isIn: p,
          } = e;
          const m = i ? `${t}--${l}` : t,
            h = i ? `${n}--${l}` : n,
            f = (0, a.useRef)(0);
          return (
            (0, a.useLayoutEffect)(() => {
              const e = d.current,
                t = m.split(" "),
                n = (a) => {
                  a.target === d.current &&
                    (e.dispatchEvent(new Event("d")),
                    e.removeEventListener("animationend", n),
                    e.removeEventListener("animationcancel", n),
                    0 === f.current &&
                      "animationcancel" !== a.type &&
                      e.classList.remove(...t));
                };
              e.classList.add(...t),
                e.addEventListener("animationend", n),
                e.addEventListener("animationcancel", n);
            }, []),
            (0, a.useEffect)(() => {
              const e = d.current,
                t = () => {
                  e.removeEventListener("animationend", t),
                    s
                      ? (function (e, t, n) {
                          void 0 === n && (n = 300);
                          const { scrollHeight: a, style: i } = e;
                          requestAnimationFrame(() => {
                            (i.minHeight = "initial"),
                              (i.height = a + "px"),
                              (i.transition = `all ${n}ms`),
                              requestAnimationFrame(() => {
                                (i.height = "0"),
                                  (i.padding = "0"),
                                  (i.margin = "0"),
                                  setTimeout(t, n);
                              });
                          });
                        })(e, u, o)
                      : u();
                };
              p ||
                (c
                  ? t()
                  : ((f.current = 1),
                    (e.className += ` ${h}`),
                    e.addEventListener("animationend", t)));
            }, [p]),
            a.createElement(a.Fragment, null, r)
          );
        };
      }
      function d(e, t) {
        return {
          content: e.content,
          containerId: e.props.containerId,
          id: e.props.toastId,
          theme: e.props.theme,
          type: e.props.type,
          data: e.props.data || {},
          isLoading: e.props.isLoading,
          icon: e.props.icon,
          status: t,
        };
      }
      const p = {
          list: new Map(),
          emitQueue: new Map(),
          on(e, t) {
            return (
              this.list.has(e) || this.list.set(e, []),
              this.list.get(e).push(t),
              this
            );
          },
          off(e, t) {
            if (t) {
              const n = this.list.get(e).filter((e) => e !== t);
              return this.list.set(e, n), this;
            }
            return this.list.delete(e), this;
          },
          cancelEmit(e) {
            const t = this.emitQueue.get(e);
            return (
              t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
            );
          },
          emit(e) {
            this.list.has(e) &&
              this.list.get(e).forEach((t) => {
                const n = setTimeout(() => {
                  t(...[].slice.call(arguments, 1));
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []),
                  this.emitQueue.get(e).push(n);
              });
          },
        },
        m = (e) => {
          let { theme: t, type: n, ...i } = e;
          return a.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "100%",
            height: "100%",
            fill:
              "colored" === t
                ? "currentColor"
                : `var(--toastify-icon-color-${n})`,
            ...i,
          });
        },
        h = {
          info: function (e) {
            return a.createElement(
              m,
              { ...e },
              a.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
              })
            );
          },
          warning: function (e) {
            return a.createElement(
              m,
              { ...e },
              a.createElement("path", {
                d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
              })
            );
          },
          success: function (e) {
            return a.createElement(
              m,
              { ...e },
              a.createElement("path", {
                d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
              })
            );
          },
          error: function (e) {
            return a.createElement(
              m,
              { ...e },
              a.createElement("path", {
                d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
              })
            );
          },
          spinner: function () {
            return a.createElement("div", { className: "Toastify__spinner" });
          },
        };
      function f(e) {
        const [, t] = (0, a.useReducer)((e) => e + 1, 0),
          [n, i] = (0, a.useState)([]),
          u = (0, a.useRef)(null),
          m = (0, a.useRef)(new Map()).current,
          f = (e) => -1 !== n.indexOf(e),
          C = (0, a.useRef)({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: e,
            containerId: null,
            isToastActive: f,
            getToast: (e) => m.get(e),
          }).current;
        function g(e) {
          let { containerId: t } = e;
          const { limit: n } = C.props;
          !n ||
            (t && C.containerId !== t) ||
            ((C.count -= C.queue.length), (C.queue = []));
        }
        function y(e) {
          i((t) => (null == e ? [] : t.filter((t) => t !== e)));
        }
        function v() {
          const {
            toastContent: e,
            toastProps: t,
            staleId: n,
          } = C.queue.shift();
          T(e, t, n);
        }
        function x(e, n) {
          let { delay: i, staleId: f, ...g } = n;
          if (
            !c(e) ||
            (function (e) {
              return (
                !u.current ||
                (C.props.enableMultiContainer &&
                  e.containerId !== C.props.containerId) ||
                (m.has(e.toastId) && null == e.updateId)
              );
            })(g)
          )
            return;
          const { toastId: x, updateId: b, data: k } = g,
            { props: w } = C,
            j = () => y(x),
            L = null == b;
          L && C.count++;
          const S = {
            ...w,
            style: w.toastStyle,
            key: C.toastKey++,
            ...g,
            toastId: x,
            updateId: b,
            data: k,
            closeToast: j,
            isIn: !1,
            className: l(g.className || w.toastClassName),
            bodyClassName: l(g.bodyClassName || w.bodyClassName),
            progressClassName: l(g.progressClassName || w.progressClassName),
            autoClose:
              !g.isLoading &&
              ((A = g.autoClose),
              (E = w.autoClose),
              !1 === A || (s(A) && A > 0) ? A : E),
            deleteToast() {
              const e = d(m.get(x), "removed");
              m.delete(x), p.emit(4, e);
              const n = C.queue.length;
              if (
                ((C.count =
                  null == x ? C.count - C.displayedToast : C.count - 1),
                C.count < 0 && (C.count = 0),
                n > 0)
              ) {
                const e = null == x ? C.props.limit : 1;
                if (1 === n || 1 === e) C.displayedToast++, v();
                else {
                  const t = e > n ? n : e;
                  C.displayedToast = t;
                  for (let e = 0; e < t; e++) v();
                }
              } else t();
            },
          };
          var A, E;
          (S.iconOut = (function (e) {
            let { theme: t, type: n, isLoading: i, icon: l } = e,
              c = null;
            const u = { theme: t, type: n };
            return (
              !1 === l ||
                (r(l)
                  ? (c = l(u))
                  : (0, a.isValidElement)(l)
                  ? (c = (0, a.cloneElement)(l, u))
                  : o(l) || s(l)
                  ? (c = l)
                  : i
                  ? (c = h.spinner())
                  : ((e) => e in h)(n) && (c = h[n](u))),
              c
            );
          })(S)),
            r(g.onOpen) && (S.onOpen = g.onOpen),
            r(g.onClose) && (S.onClose = g.onClose),
            (S.closeButton = w.closeButton),
            !1 === g.closeButton || c(g.closeButton)
              ? (S.closeButton = g.closeButton)
              : !0 === g.closeButton &&
                (S.closeButton = !c(w.closeButton) || w.closeButton);
          let R = e;
          (0, a.isValidElement)(e) && !o(e.type)
            ? (R = (0, a.cloneElement)(e, {
                closeToast: j,
                toastProps: S,
                data: k,
              }))
            : r(e) && (R = e({ closeToast: j, toastProps: S, data: k })),
            w.limit && w.limit > 0 && C.count > w.limit && L
              ? C.queue.push({ toastContent: R, toastProps: S, staleId: f })
              : s(i)
              ? setTimeout(() => {
                  T(R, S, f);
                }, i)
              : T(R, S, f);
        }
        function T(e, t, n) {
          const { toastId: a } = t;
          n && m.delete(n);
          const s = { content: e, props: t };
          m.set(a, s),
            i((e) => [...e, a].filter((e) => e !== n)),
            p.emit(4, d(s, null == s.props.updateId ? "added" : "updated"));
        }
        return (
          (0, a.useEffect)(
            () => (
              (C.containerId = e.containerId),
              p
                .cancelEmit(3)
                .on(0, x)
                .on(1, (e) => u.current && y(e))
                .on(5, g)
                .emit(2, C),
              () => {
                m.clear(), p.emit(3, C);
              }
            ),
            []
          ),
          (0, a.useEffect)(() => {
            (C.props = e), (C.isToastActive = f), (C.displayedToast = n.length);
          }),
          {
            getToastToRender: function (t) {
              const n = new Map(),
                a = Array.from(m.values());
              return (
                e.newestOnTop && a.reverse(),
                a.forEach((e) => {
                  const { position: t } = e.props;
                  n.has(t) || n.set(t, []), n.get(t).push(e);
                }),
                Array.from(n, (e) => t(e[0], e[1]))
              );
            },
            containerRef: u,
            isToastActive: f,
          }
        );
      }
      function C(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientX
          : e.clientX;
      }
      function g(e) {
        return e.targetTouches && e.targetTouches.length >= 1
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function y(e) {
        const [t, n] = (0, a.useState)(!1),
          [i, s] = (0, a.useState)(!1),
          o = (0, a.useRef)(null),
          l = (0, a.useRef)({
            start: 0,
            x: 0,
            y: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            boundingRect: null,
            didMove: !1,
          }).current,
          c = (0, a.useRef)(e),
          {
            autoClose: u,
            pauseOnHover: d,
            closeToast: p,
            onClick: m,
            closeOnClick: h,
          } = e;
        function f(t) {
          if (e.draggable) {
            "touchstart" === t.nativeEvent.type &&
              t.nativeEvent.preventDefault(),
              (l.didMove = !1),
              document.addEventListener("mousemove", T),
              document.addEventListener("mouseup", b),
              document.addEventListener("touchmove", T),
              document.addEventListener("touchend", b);
            const n = o.current;
            (l.canCloseOnClick = !0),
              (l.canDrag = !0),
              (l.boundingRect = n.getBoundingClientRect()),
              (n.style.transition = ""),
              (l.x = C(t.nativeEvent)),
              (l.y = g(t.nativeEvent)),
              "x" === e.draggableDirection
                ? ((l.start = l.x),
                  (l.removalDistance =
                    n.offsetWidth * (e.draggablePercent / 100)))
                : ((l.start = l.y),
                  (l.removalDistance =
                    n.offsetHeight *
                    (80 === e.draggablePercent
                      ? 1.5 * e.draggablePercent
                      : e.draggablePercent / 100)));
          }
        }
        function y(t) {
          if (l.boundingRect) {
            const { top: n, bottom: a, left: i, right: s } = l.boundingRect;
            "touchend" !== t.nativeEvent.type &&
            e.pauseOnHover &&
            l.x >= i &&
            l.x <= s &&
            l.y >= n &&
            l.y <= a
              ? x()
              : v();
          }
        }
        function v() {
          n(!0);
        }
        function x() {
          n(!1);
        }
        function T(n) {
          const a = o.current;
          l.canDrag &&
            a &&
            ((l.didMove = !0),
            t && x(),
            (l.x = C(n)),
            (l.y = g(n)),
            (l.delta =
              "x" === e.draggableDirection ? l.x - l.start : l.y - l.start),
            l.start !== l.x && (l.canCloseOnClick = !1),
            (a.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
            (a.style.opacity =
              "" + (1 - Math.abs(l.delta / l.removalDistance))));
        }
        function b() {
          document.removeEventListener("mousemove", T),
            document.removeEventListener("mouseup", b),
            document.removeEventListener("touchmove", T),
            document.removeEventListener("touchend", b);
          const t = o.current;
          if (l.canDrag && l.didMove && t) {
            if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
              return s(!0), void e.closeToast();
            (t.style.transition = "transform 0.2s, opacity 0.2s"),
              (t.style.transform = `translate${e.draggableDirection}(0)`),
              (t.style.opacity = "1");
          }
        }
        (0, a.useEffect)(() => {
          c.current = e;
        }),
          (0, a.useEffect)(
            () => (
              o.current && o.current.addEventListener("d", v, { once: !0 }),
              r(e.onOpen) &&
                e.onOpen((0, a.isValidElement)(e.children) && e.children.props),
              () => {
                const e = c.current;
                r(e.onClose) &&
                  e.onClose(
                    (0, a.isValidElement)(e.children) && e.children.props
                  );
              }
            ),
            []
          ),
          (0, a.useEffect)(
            () => (
              e.pauseOnFocusLoss &&
                (document.hasFocus() || x(),
                window.addEventListener("focus", v),
                window.addEventListener("blur", x)),
              () => {
                e.pauseOnFocusLoss &&
                  (window.removeEventListener("focus", v),
                  window.removeEventListener("blur", x));
              }
            ),
            [e.pauseOnFocusLoss]
          );
        const k = {
          onMouseDown: f,
          onTouchStart: f,
          onMouseUp: y,
          onTouchEnd: y,
        };
        return (
          u && d && ((k.onMouseEnter = x), (k.onMouseLeave = v)),
          h &&
            (k.onClick = (e) => {
              m && m(e), l.canCloseOnClick && p();
            }),
          {
            playToast: v,
            pauseToast: x,
            isRunning: t,
            preventExitTransition: i,
            toastRef: o,
            eventHandlers: k,
          }
        );
      }
      function v(e) {
        let { closeToast: t, theme: n, ariaLabel: i = "close" } = e;
        return a.createElement(
          "button",
          {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: "button",
            onClick: (e) => {
              e.stopPropagation(), t(e);
            },
            "aria-label": i,
          },
          a.createElement(
            "svg",
            { "aria-hidden": "true", viewBox: "0 0 14 16" },
            a.createElement("path", {
              fillRule: "evenodd",
              d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
            })
          )
        );
      }
      function x(e) {
        let {
          delay: t,
          isRunning: n,
          closeToast: s,
          type: o = "default",
          hide: l,
          className: c,
          style: u,
          controlledProgress: d,
          progress: p,
          rtl: m,
          isIn: h,
          theme: f,
        } = e;
        const C = l || (d && 0 === p),
          g = {
            ...u,
            animationDuration: `${t}ms`,
            animationPlayState: n ? "running" : "paused",
            opacity: C ? 0 : 1,
          };
        d && (g.transform = `scaleX(${p})`);
        const y = (0, i.default)(
            "Toastify__progress-bar",
            d
              ? "Toastify__progress-bar--controlled"
              : "Toastify__progress-bar--animated",
            `Toastify__progress-bar-theme--${f}`,
            `Toastify__progress-bar--${o}`,
            { "Toastify__progress-bar--rtl": m }
          ),
          v = r(c)
            ? c({ rtl: m, type: o, defaultClassName: y })
            : (0, i.default)(y, c);
        return a.createElement("div", {
          role: "progressbar",
          "aria-hidden": C ? "true" : "false",
          "aria-label": "notification timer",
          className: v,
          style: g,
          [d && p >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
            d && p < 1
              ? null
              : () => {
                  h && s();
                },
        });
      }
      const T = (e) => {
          const {
              isRunning: t,
              preventExitTransition: n,
              toastRef: s,
              eventHandlers: o,
            } = y(e),
            {
              closeButton: l,
              children: c,
              autoClose: u,
              onClick: d,
              type: p,
              hideProgressBar: m,
              closeToast: h,
              transition: f,
              position: C,
              className: g,
              style: T,
              bodyClassName: b,
              bodyStyle: k,
              progressClassName: w,
              progressStyle: j,
              updateId: L,
              role: S,
              progress: A,
              rtl: E,
              toastId: R,
              deleteToast: N,
              isIn: P,
              isLoading: I,
              iconOut: M,
              closeOnClick: _,
              theme: O,
            } = e,
            D = (0, i.default)(
              "Toastify__toast",
              `Toastify__toast-theme--${O}`,
              `Toastify__toast--${p}`,
              { "Toastify__toast--rtl": E },
              { "Toastify__toast--close-on-click": _ }
            ),
            F = r(g)
              ? g({ rtl: E, position: C, type: p, defaultClassName: D })
              : (0, i.default)(D, g),
            B = !!A || !u,
            U = { closeToast: h, type: p, theme: O };
          let Z = null;
          return (
            !1 === l ||
              (Z = r(l)
                ? l(U)
                : (0, a.isValidElement)(l)
                ? (0, a.cloneElement)(l, U)
                : v(U)),
            a.createElement(
              f,
              {
                isIn: P,
                done: N,
                position: C,
                preventExitTransition: n,
                nodeRef: s,
              },
              a.createElement(
                "div",
                { id: R, onClick: d, className: F, ...o, style: T, ref: s },
                a.createElement(
                  "div",
                  {
                    ...(P && { role: S }),
                    className: r(b)
                      ? b({ type: p })
                      : (0, i.default)("Toastify__toast-body", b),
                    style: k,
                  },
                  null != M &&
                    a.createElement(
                      "div",
                      {
                        className: (0, i.default)("Toastify__toast-icon", {
                          "Toastify--animate-icon Toastify__zoom-enter": !I,
                        }),
                      },
                      M
                    ),
                  a.createElement("div", null, c)
                ),
                Z,
                a.createElement(x, {
                  ...(L && !B ? { key: `pb-${L}` } : {}),
                  rtl: E,
                  theme: O,
                  delay: u,
                  isRunning: t,
                  isIn: P,
                  closeToast: h,
                  hide: m,
                  type: p,
                  style: j,
                  className: w,
                  controlledProgress: B,
                  progress: A || 0,
                })
              )
            )
          );
        },
        b = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: `Toastify--animate Toastify__${e}-enter`,
              exit: `Toastify--animate Toastify__${e}-exit`,
              appendPosition: t,
            }
          );
        },
        k = u(b("bounce", !0)),
        w =
          (u(b("slide", !0)),
          u(b("zoom")),
          u(b("flip")),
          (0, a.forwardRef)((e, t) => {
            const {
                getToastToRender: n,
                containerRef: s,
                isToastActive: o,
              } = f(e),
              { className: c, style: u, rtl: d, containerId: p } = e;
            function m(e) {
              const t = (0, i.default)(
                "Toastify__toast-container",
                `Toastify__toast-container--${e}`,
                { "Toastify__toast-container--rtl": d }
              );
              return r(c)
                ? c({ position: e, rtl: d, defaultClassName: t })
                : (0, i.default)(t, l(c));
            }
            return (
              (0, a.useEffect)(() => {
                t && (t.current = s.current);
              }, []),
              a.createElement(
                "div",
                { ref: s, className: "Toastify", id: p },
                n((e, t) => {
                  const n = t.length
                    ? { ...u }
                    : { ...u, pointerEvents: "none" };
                  return a.createElement(
                    "div",
                    { className: m(e), style: n, key: `container-${e}` },
                    t.map((e, n) => {
                      let { content: i, props: s } = e;
                      return a.createElement(
                        T,
                        {
                          ...s,
                          isIn: o(s.toastId),
                          style: {
                            ...s.style,
                            "--nth": n + 1,
                            "--len": t.length,
                          },
                          key: `toast-${s.key}`,
                        },
                        i
                      );
                    })
                  );
                })
              )
            );
          }));
      (w.displayName = "ToastContainer"),
        (w.defaultProps = {
          position: "top-right",
          transition: k,
          autoClose: 5e3,
          closeButton: v,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          closeOnClick: !0,
          draggable: !0,
          draggablePercent: 80,
          draggableDirection: "x",
          role: "alert",
          theme: "light",
        });
      let j,
        L = new Map(),
        S = [],
        A = 1;
      function E() {
        return "" + A++;
      }
      function R(e) {
        return e && (o(e.toastId) || s(e.toastId)) ? e.toastId : E();
      }
      function N(e, t) {
        return (
          L.size > 0 ? p.emit(0, e, t) : S.push({ content: e, options: t }),
          t.toastId
        );
      }
      function P(e, t) {
        return { ...t, type: (t && t.type) || e, toastId: R(t) };
      }
      function I(e) {
        return (t, n) => N(t, P(e, n));
      }
      function M(e, t) {
        return N(e, P("default", t));
      }
      (M.loading = (e, t) =>
        N(
          e,
          P("default", {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t,
          })
        )),
        (M.promise = function (e, t, n) {
          let a,
            { pending: i, error: s, success: l } = t;
          i &&
            (a = o(i) ? M.loading(i, n) : M.loading(i.render, { ...n, ...i }));
          const c = {
              isLoading: null,
              autoClose: null,
              closeOnClick: null,
              closeButton: null,
              draggable: null,
              delay: 100,
            },
            u = (e, t, i) => {
              if (null == t) return void M.dismiss(a);
              const s = { type: e, ...c, ...n, data: i },
                r = o(t) ? { render: t } : t;
              return (
                a ? M.update(a, { ...s, ...r }) : M(r.render, { ...s, ...r }), i
              );
            },
            d = r(e) ? e() : e;
          return (
            d.then((e) => u("success", l, e)).catch((e) => u("error", s, e)), d
          );
        }),
        (M.success = I("success")),
        (M.info = I("info")),
        (M.error = I("error")),
        (M.warning = I("warning")),
        (M.warn = M.warning),
        (M.dark = (e, t) => N(e, P("default", { theme: "dark", ...t }))),
        (M.dismiss = (e) => {
          L.size > 0
            ? p.emit(1, e)
            : (S = S.filter((t) => null != e && t.options.toastId !== e));
        }),
        (M.clearWaitingQueue = function (e) {
          return void 0 === e && (e = {}), p.emit(5, e);
        }),
        (M.isActive = (e) => {
          let t = !1;
          return (
            L.forEach((n) => {
              n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
          );
        }),
        (M.update = function (e, t) {
          void 0 === t && (t = {}),
            setTimeout(() => {
              const n = (function (e, t) {
                let { containerId: n } = t;
                const a = L.get(n || j);
                return a && a.getToast(e);
              })(e, t);
              if (n) {
                const { props: a, content: i } = n,
                  s = { ...a, ...t, toastId: t.toastId || e, updateId: E() };
                s.toastId !== e && (s.staleId = e);
                const o = s.render || i;
                delete s.render, N(o, s);
              }
            }, 0);
        }),
        (M.done = (e) => {
          M.update(e, { progress: 1 });
        }),
        (M.onChange = (e) => (
          p.on(4, e),
          () => {
            p.off(4, e);
          }
        )),
        (M.POSITION = {
          TOP_LEFT: "top-left",
          TOP_RIGHT: "top-right",
          TOP_CENTER: "top-center",
          BOTTOM_LEFT: "bottom-left",
          BOTTOM_RIGHT: "bottom-right",
          BOTTOM_CENTER: "bottom-center",
        }),
        (M.TYPE = {
          INFO: "info",
          SUCCESS: "success",
          WARNING: "warning",
          ERROR: "error",
          DEFAULT: "default",
        }),
        p
          .on(2, (e) => {
            (j = e.containerId || e),
              L.set(j, e),
              S.forEach((e) => {
                p.emit(0, e.content, e.options);
              }),
              (S = []);
          })
          .on(3, (e) => {
            L.delete(e.containerId || e),
              0 === L.size && p.off(0).off(1).off(5);
          });
    },
  },
]);
