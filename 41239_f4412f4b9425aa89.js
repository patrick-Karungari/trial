"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41239],
  {
    460327: function (e, t, s) {
      s.d(t, {
        sw: function () {
          return Oe;
        },
        ZP: function () {
          return st;
        },
      });
      var n = s(824246),
        i = s(679892),
        a = s.n(i),
        r = s(298784),
        o = s.n(r),
        c = s(827378),
        l = s(692975),
        d = s(713222),
        h = s(416534),
        u = s(916353),
        p = s(722030),
        m = s(594802),
        x = s(444832),
        g = s(339389),
        v = s(159400),
        f = s(962929),
        b = s(185272),
        y = s(775143),
        j = s(220453),
        w = s(608139),
        C = s.n(w),
        k = s(599789),
        S = s(75896),
        T = s(893827),
        A = s(64499),
        N = s(872383),
        L = s(881620),
        I = s(257881),
        E = s(772944),
        M = s(111657),
        R = s(161320),
        P = s.n(R),
        D = s(604375),
        O = s(101409),
        V = s(113463),
        Z = s(761114),
        F = s(421805),
        B = s(159710),
        z = s(775222),
        q = s(14781),
        _ = s(138944),
        H = s(502218),
        U = s(128771),
        $ = s(433310),
        G = s(482625),
        J = s(983876),
        W = s(444506),
        K = s(820999),
        Y = s(554211);
      var Q = ({
          disablePasting: e = !1,
          handleOnTextChange: t,
          handleMouseLeave: s,
          value: i = "",
          initialValue: a,
          isDisabled: r = !1,
          onShiftEnter: o,
          useDefault: l = !1,
        }) => {
          const { 0: d, 1: h } = (0, c.useState)(0),
            u = (0, c.useRef)(null),
            p = (0, c.useRef)(null),
            m = (0, c.useRef)(null),
            x = "outlier-responseText",
            g = (0, Y.ZP)("chat-enable-markdown-tiptap", {}, !1),
            v = (0, c.useCallback)(
              (e, s, n) => {
                null === t || void 0 === t || t(e, s), h(n);
              },
              [t]
            );
          (0, c.useEffect)(() => {
            const e = (e) => {
                e.shiftKey && "Enter" === e.key && o && o();
              },
              t = p.current;
            return (
              t && t.addEventListener("keydown", e),
              () => {
                t && t.removeEventListener("keydown", e);
              }
            );
          }, [o]),
            (0, c.useEffect)(() => {
              var e;
              a &&
                (null === u ||
                  void 0 === u ||
                  null === (e = u.current) ||
                  void 0 === e ||
                  e.update(a));
            }, [a]);
          const f =
            l || g
              ? (0, n.jsx)("div", {
                  onMouseLeave: s,
                  id: x,
                  children: (0, n.jsxs)(W.C, {
                    initialContent: i,
                    children: [
                      (0, n.jsx)(J.Z, {}),
                      (0, n.jsx)(K.Nf, {
                        children: (0, n.jsx)(K.ML, {
                          content: i,
                          onContentChange: (e, s) => {
                            null === t || void 0 === t || t(e, s);
                          },
                          disablePaste: e,
                          readOnly: r,
                        }),
                      }),
                    ],
                  }),
                })
              : (0, n.jsx)(G.ZP.Wrapper, {
                  children: (0, n.jsx)(G.ZP, {
                    milkdownRef: u,
                    cardRef: m,
                    text: i,
                    onChange: v,
                    disablePasting: e,
                    handleMouseLeave: s,
                    childId: x,
                    milkdownEditorConfig: { enableMathPlugin: !0 },
                    readOnly: r,
                    enableSpellingCheck: !0,
                  }),
                });
          return (0, n.jsxs)("div", {
            className: "grid relative duration-300",
            children: [
              (0, n.jsx)("div", {
                ref: p,
                id: `milkdown-editor-${x}`,
                children: f,
              }),
              (0, n.jsxs)("div", {
                className: "flex items-center justify-end text-sm",
                style: { color: "#6B7280" },
                children: [d, " word", 1 === d ? "" : "s"],
              }),
            ],
          });
        },
        X = s(107555),
        ee = s(897075),
        te = s(285556),
        se = s(228401),
        ne = s(507099),
        ie = s(368663),
        ae = s(114200),
        re = s(611716);
      var oe = ({ isSuccess: e, resume: t, setResume: s }) =>
          (0, n.jsx)("div", {
            className: "mb-4",
            children: (0, n.jsx)(re.Z, {
              file: t,
              onFileChanged: s,
              isSuccess: e,
            }),
          }),
        ce = s(167469),
        le = s(528863),
        de = s(456552),
        he = s(98283);
      function ue(e, t, s, n, i, a, r) {
        try {
          var o = e[a](r),
            c = o.value;
        } catch (le) {
          return void s(le);
        }
        o.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function pe(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (n, i) {
            var a = e.apply(t, s);
            function r(e) {
              ue(a, n, i, r, o, "next", e);
            }
            function o(e) {
              ue(a, n, i, r, o, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function me() {
        return (me = pe(function* (e) {
          const { backgroundChecks: t } = yield (0, y.fetchApi)(
            "/worker/profile/background_checks",
            { method: "GET", query: { backgroundCheckSlug: e.toString() } }
          ).then(y.handleErrorsAndJsonify);
          if (!t) return null;
          if (
            (t.filter(
              (e) => e.invitationStatus !== ce.CheckrInvitationStatus.Expired
            ),
            !t || 0 === t.length)
          )
            return null;
          const s = t.filter(
            (e) => e.invitationStatus === ce.CheckrInvitationStatus.Completed
          );
          return s.length > 0 ? s[0] : t[0];
        })).apply(this, arguments);
      }
      const xe = ({
          user: e,
          requestedBackgroundCheck: t,
          completedBackgroundCheck: s,
          setCompletedBackgroundCheck: i,
          setErrorText: r,
        }) => {
          let {
            data: o,
            isLoading: l,
            refetch: u,
          } = (0, de.useQuery)({
            queryKey: ["latestBackgroundCheckEntry"],
            queryFn: () =>
              (function (e) {
                return me.apply(this, arguments);
              })(t),
            onError: (e) => {
              r(
                "Failed to fetch Background Check status. Please try again.\nIf this continues, please reach out to the email above for support"
              );
            },
            retry: 3,
          });
          const p = (0, c.useMemo)(
              () =>
                e.firstName &&
                e.lastName &&
                e.usStateCode &&
                e.ipCountryCode &&
                "US" === e.ipCountryCode,
              [e]
            ),
            m = (0, de.useMutation)({
              mutationFn: pe(function* () {
                return yield (0,
                y.fetchApi)("/worker/profile/checkr_invitation", { method: "POST", body: { taskerId: e._id, backgroundCheckSlug: [t], usStateCode: e.usStateCode }, parseAndHandle: !0 });
              }),
            }),
            x = (0, c.useMemo)(() => (o ? o.invitationLink : void 0), [o]);
          (0, c.useEffect)(() => {
            o &&
              o.invitationStatus === ce.CheckrInvitationStatus.Completed &&
              !s &&
              i(!0);
          }, [o, i, s]);
          const g = (function () {
              var e = pe(function* () {
                const e = yield u();
                e.isSuccess
                  ? (r(""), (o = e.data))
                  : r(
                      "Failed to fetch Background Check status. Please try again.\nIf this continues, please reach out to the email above for support"
                    );
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            v = (function () {
              var e = pe(function* () {
                if (!x && p) {
                  const e = yield m.mutateAsync();
                  if (!e || 0 === e.backgroundChecks.length)
                    return void r(
                      "Failed to open Background Check invitation. Please try again.\nIf this continues, please reach out to the email above for support"
                    );
                  o = e.backgroundChecks[0];
                }
                o && null !== o.invitationLink
                  ? (r(""), window.open(o.invitationLink, "_blank"))
                  : r(
                      "Failed to open Background Check invitation. Please try again.\nIf this continues, please reach out to the email above for support"
                    );
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
          let f = "Complete Background Check";
          const b = (0, c.useMemo)(() => l || s, [l, s]);
          return (
            (f = s ? "Invitation Completed" : "Complete Checkr Invitation"),
            (0, n.jsxs)("div", {
              className: "jsx-6a3c0c1b64799989 container",
              children: [
                !p &&
                  (0, n.jsx)(le.j, {
                    errorText:
                      "You must based in the US and have a first name, last name, and address complete on your profile before you can complete a background check.",
                    cta: {
                      onClick: () => {
                        (0, he.ZP)({}, "/expert/profile");
                      },
                      text: "Update Profile",
                      variant: "neutral",
                    },
                    errorHeader:
                      "You're not eligible to complete a background check",
                  }),
                p &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: "jsx-6a3c0c1b64799989",
                        children: (0, n.jsx)("div", {
                          className: "jsx-6a3c0c1b64799989 row",
                          children: (0, n.jsxs)("span", {
                            className: "jsx-6a3c0c1b64799989 name-and-status",
                            children: [
                              (0, n.jsx)("span", {
                                className: "jsx-6a3c0c1b64799989 entry-name",
                                children: `${ce.FriendlyBackgroundCheckNames[t]}`,
                              }),
                              (0, n.jsxs)("span", {
                                className: "jsx-6a3c0c1b64799989",
                                children: [
                                  " ",
                                  (0, n.jsx)(ge, {
                                    invitationStatus:
                                      null === o || void 0 === o
                                        ? void 0
                                        : o.invitationStatus,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "jsx-6a3c0c1b64799989 launcher-container",
                        children: (0, n.jsx)("div", {
                          className: "jsx-6a3c0c1b64799989 row",
                          children: (0, n.jsx)("span", {
                            style: { width: "100%" },
                            className: "jsx-6a3c0c1b64799989 launcher",
                            children: (0, n.jsxs)("div", {
                              className: "jsx-6a3c0c1b64799989 actions",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "jsx-6a3c0c1b64799989 row button",
                                  children: (0, n.jsx)(h.zx, {
                                    disabled: b,
                                    onClick: v,
                                    type: "button",
                                    fullWidth: !0,
                                    children: f,
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className: "jsx-6a3c0c1b64799989 row button",
                                  children: (0, n.jsxs)(h.zx, {
                                    disabled: b,
                                    onClick: g,
                                    type: "button",
                                    fullWidth: !0,
                                    children: [
                                      (0, n.jsx)(d.J, {
                                        icon: "sync-alt",
                                        variant: "white",
                                        size: "sm",
                                      }),
                                      " \xa0 Refresh Status",
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                (0, n.jsx)(a(), {
                  id: "6a3c0c1b64799989",
                  children:
                    ".container.jsx-6a3c0c1b64799989{border:1px solid var(--color-RemoGray20);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-top:16px;max-width:700px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.row.jsx-6a3c0c1b64799989{padding:0 14px}.row.jsx-6a3c0c1b64799989 span.entry-name.jsx-6a3c0c1b64799989{font-weight:500}.row.jsx-6a3c0c1b64799989 span.name-and-status.jsx-6a3c0c1b64799989{padding:12px 0 6px 0;display:block}.row.jsx-6a3c0c1b64799989 span.jsx-6a3c0c1b64799989{width:100%;max-width:100%}.button.jsx-6a3c0c1b64799989{padding-bottom:2%;padding-top:2%}.launcher-container.jsx-6a3c0c1b64799989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#complete-background-check-button.jsx-6a3c0c1b64799989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#refresh-background-check-status-button.jsx-6a3c0c1b64799989{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:right;-webkit-box-align:right;-ms-flex-align:right;align-items:right}@media(max-width:600px){.row.jsx-6a3c0c1b64799989{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.row.jsx-6a3c0c1b64799989 span.launcher.jsx-6a3c0c1b64799989{margin:0}}",
                }),
              ],
            })
          );
        },
        ge = ({ invitationStatus: e }) => {
          let t = "black";
          const s = e ? ce.FriendlyCheckrInvitationStatuses[e] : "Required";
          if (e === ce.CheckrInvitationStatus.Completed) t = "#C9A500";
          return (0, n.jsxs)("span", {
            className:
              a().dynamic([["c6e7a5744477752", [t]]]) + " status-legend",
            children: [
              `${s}`,
              (0, n.jsx)(a(), {
                id: "c6e7a5744477752",
                dynamic: [t],
                children: `.status-legend.__jsx-style-dynamic-selector{color:${t};font-weight:500;font-size:12px;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px 8px;gap:4px;width:68px;height:24px;background:#f3f4f6;-webkit-border-radius:1e3px;-moz-border-radius:1e3px;border-radius:1e3px}`,
              }),
            ],
          });
        };
      var ve = s(385462);
      const fe = ({
        user: e,
        requestedBackgroundCheck: t,
        completedBackgroundCheck: s,
        setCompletedBackgroundCheck: i,
      }) => {
        const { 0: a, 1: r } = (0, c.useState)("");
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: "px-4 pb-1 text-xs",
              children: [
                "Please contact us at",
                " ",
                (0, n.jsx)("b", {
                  children: (0, n.jsx)("a", {
                    href: `mailto:${ve.MAILBOXES.OUTLIER.SUPPORT.email}?subject=Support Request`,
                    onClick: () => z.c.track(q.v.SupportRequest),
                    children: ve.MAILBOXES.OUTLIER.SUPPORT.email,
                  }),
                }),
                " ",
                "if you need help.",
              ],
            }),
            (0, n.jsx)("div", {
              className: "my-2 px-4 verifications",
              children: (0, n.jsxs)("div", {
                className:
                  "background-check-unit -mt-4 pb-2 [&>div]:bg-neutral-0 [&_button]:bg-primary-400 [&_button]:hover:text-neutral-0 ",
                children: [
                  (0, n.jsx)(xe, {
                    user: e,
                    requestedBackgroundCheck: t,
                    completedBackgroundCheck: s,
                    setCompletedBackgroundCheck: i,
                    setErrorText: r,
                  }),
                  a &&
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("p", {
                        className: "error-text",
                        style: {
                          color: "#FF0000",
                          background: "none",
                          fontFamily:
                            "\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                          textAlign: "left",
                          whiteSpace: "pre",
                          wordSpacing: "normal",
                          wordBreak: "normal",
                          wordWrap: "normal",
                          lineHeight: "1.5",
                          MozTabSize: "4",
                          OTabSize: "4",
                          tabSize: "4",
                          WebkitHyphens: "none",
                          MozHyphens: "none",
                          msHyphens: "none",
                          fontSize: "10px",
                        },
                        children: a,
                      }),
                    }),
                ],
              }),
            }),
          ],
        });
      };
      var be = s(539728);
      function ye(e, t, s, n, i, a, r) {
        try {
          var o = e[a](r),
            c = o.value;
        } catch (le) {
          return void s(le);
        }
        o.done ? t(c) : Promise.resolve(c).then(n, i);
      }
      function je(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (n, i) {
            var a = e.apply(t, s);
            function r(e) {
              ye(a, n, i, r, o, "next", e);
            }
            function o(e) {
              ye(a, n, i, r, o, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function we(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              we(e, t, s[t]);
            });
        }
        return e;
      }
      const ke = c.lazy(() =>
          Promise.all([
            s.e(68143),
            s.e(11642),
            s.e(82178),
            s.e(86260),
            s.e(29736),
            s.e(16732),
            s.e(34051),
            s.e(12816),
            s.e(74707),
            s.e(72086),
            s.e(79913),
            s.e(56696),
            s.e(13959),
            s.e(90321),
            s.e(51505),
            s.e(36407),
            s.e(47792),
            s.e(19059),
            s.e(49529),
            s.e(77045),
            s.e(7539),
            s.e(35045),
            s.e(82746),
            s.e(20692),
            s.e(63909),
            s.e(87823),
            s.e(5962),
            s.e(18289),
            s.e(67984),
            s.e(73853),
            s.e(19288),
            s.e(47650),
            s.e(46608),
            s.e(55100),
            s.e(65566),
            s.e(19775),
            s.e(51941),
            s.e(31573),
            s.e(74891),
            s.e(29688),
          ]).then(s.bind(s, 418196))
        ),
        Se = c.lazy(() =>
          Promise.all([s.e(50084), s.e(53717), s.e(66473)])
            .then(s.bind(s, 342696))
            .then((e) => ({ default: e.ChatPreviewApp }))
        );
      function Te({ markdownString: e = "", className: t }) {
        const s = Ae();
        return (0, n.jsx)("div", {
          className: (0, _.default)("ql-editor", t, s.markdown),
          dangerouslySetInnerHTML: { __html: j.ZP.render(e) },
        });
      }
      const Ae = (0, D.ZL)({
          markdown: {
            "& a": { color: "#3B76A5" },
            "& a:hover": { textDecoration: "underline" },
          },
        }),
        Ne = ({ isRadioButton: e, isSelected: t }) =>
          (0, n.jsx)("i", {
            className: (0, _.default)(
              "w-4 h-4 border bg-neutral-50 flex justify-center items-center",
              {
                "rounded-sm": !e,
                "rounded-full": e,
                "border-neutral-300": !t,
                "border-primary-500": t,
              }
            ),
            children:
              t &&
              (e
                ? (0, n.jsx)("i", {
                    className:
                      "w-2.5 h-2.5 border-[1px] rounded-full bg-primary-500",
                  })
                : (0, n.jsx)(d.J, { icon: "check", size: "sm" })),
          }),
        Le = (e) =>
          (0, n.jsxs)("div", {
            className: (0, _.default)("course-title", e.className),
            children: [
              e.displayType &&
                (0, n.jsx)("em", {
                  className:
                    "block mb-4 text-base font-bold tracking-wide uppercase",
                  children: e.displayType,
                }),
              (0, n.jsxs)("strong", {
                className: "text-base flex justify-start items-center",
                children: [
                  e.showOutlierLogo
                    ? (0, n.jsx)("span", {
                        className:
                          "w-12 h-12 mr-3 py-3 px-[7px] rounded-sm [&>img]:object-cover [&>img]:object-left overflow-hidden shadow-[0px_2px_3px_0px_#0000001A,0px_2px_4px_2px_#0000000D]",
                        children: (0, n.jsx)(H.Z, {}),
                      })
                    : e.titleIcon
                    ? (0, n.jsx)(d.J, {
                        icon: e.titleIcon,
                        size: "md",
                        hasBackground: !0,
                        className: "min-w-[32px] mr-3",
                      })
                    : null,
                  e.title,
                ],
              }),
            ],
          }),
        Ie = ({ description: e, className: t }) =>
          e
            ? (0, n.jsx)(Te, { className: t || "", markdownString: e })
            : (0, n.jsx)("div", { className: "pt-6" }),
        Ee = ({ instruction: e }) => {
          const { 0: t, 1: s } = (0, c.useState)(!1),
            i = `<iframe src="${e}"></iframe>`;
          return o().isEmpty(e)
            ? null
            : (0, n.jsxs)("div", {
                className: "mx-4 flex cursor-pointer",
                onClick: () => {
                  if (
                    null === e || void 0 === e
                      ? void 0
                      : e.includes("remotasks.com")
                  ) {
                    const t = new URL(e),
                      s =
                        window.location.origin +
                        "/expert" +
                        t.pathname.replace("/en", "") +
                        t.search +
                        t.hash;
                    window.open(s, "_blank");
                  } else
                    !(null === e || void 0 === e
                      ? void 0
                      : e.includes("instruction")) || e.includes("/expert")
                      ? s(!t)
                      : window.open("/expert" + e, "_blank");
                },
                children: [
                  (0, n.jsx)(h.zx, {
                    variant: "white",
                    size: "lg",
                    children: "Instructions",
                  }),
                  (0, n.jsx)(ie.d, {
                    isOpen: t,
                    instruction: i,
                    instructionsURL: e,
                    onClose: () => s(!1),
                  }),
                ],
              });
        },
        Me = (e) => {
          var t;
          const { canContinue: s, onCanContinue: i, canAlwaysContinue: a } = e,
            { 0: r, 1: o } = (0, c.useState)(
              e.canContinue || e.canAlwaysContinue
            ),
            l = void 0 !== e.isLoading && e.isLoading,
            d = !!(null === (t = e.course.initialTestInfo) || void 0 === t
              ? void 0
              : t.isInitialTest),
            p = e.course.sections.length - 1 === e.sectionIndex,
            m = e.sectionIndex > 0 && !d;
          (0, c.useEffect)(() => {
            null === i || void 0 === i || i(s || a), o(s || a);
          }, [s, i, a]);
          const { 0: x, 1: g } = (0, c.useState)(!1);
          return (0, n.jsxs)("div", {
            children: [
              e.sectionActions &&
                (0, n.jsxs)("div", {
                  className: "flex",
                  children: [e.sectionActions, e.sectionMessage],
                }),
              !e.hideFooter &&
                (0, n.jsxs)("div", {
                  className:
                    "fixed bottom-0 left-0 right-0 py-3 px-4 flex justify-between bg-neutral-0 border-t border-neutral-200",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)(U.Z, { onClick: () => g(!0) }),
                            (0, n.jsx)(be.c, { open: x, onClose: () => g(!1) }),
                          ],
                        }),
                        (0, n.jsx)(Ee, { instruction: e.course.instruction }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, n.jsx)(h.zx, {
                          size: "lg",
                          variant: "neutral",
                          onClick: e.handlePrevious,
                          disabled: !m,
                          children: "Back",
                        }),
                        (0, n.jsx)(u.u, {
                          delayDuration: 0,
                          text: e.continueButtonTooltipMessage || "",
                          side: "top",
                          target: (0, n.jsx)("span", {
                            children: (0, n.jsx)(h.zx, {
                              size: "lg",
                              variant: "primary",
                              onClick: je(function* () {
                                o(!1), yield e.handleContinue(), o(!0);
                              }),
                              disabled: !r || l,
                              children: p ? "Finish" : "Continue",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        Re = (e) =>
          (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(Le, {
                    className: "p-4 border-b border-neutral-200",
                    displayType: e.displayType,
                    title: e.title,
                    titleIcon: e.titleIcon,
                    showOutlierLogo: e.showOutlierLogo,
                  }),
                  !e.hideDescription &&
                    (0, n.jsx)(Ie, {
                      description: e.contents.description,
                      className: e.descriptionClassName,
                    }),
                  e.children || e.content,
                ],
              }),
              (0, n.jsx)(Me, Ce({}, e)),
            ],
          });
      class Pe extends c.Component {
        render() {
          if (!o().isEmpty(this.props.instructionList)) {
            const e = this.props.labels || [],
              t = this.props.instructionItemIds || [],
              s = !o().isEmpty(e) || !o().isEmpty(t),
              i = (n) =>
                !s ||
                !!n.global ||
                !!o().some(n.labels, (t) => e.includes(t)) ||
                t.includes(n._id);
            return (0, n.jsx)(S.ZP, {
              instructionList: this.props.instructionList,
              bringGlobalToBottom: s,
              filter: i,
              isFullInstructions: !s,
              emitMetrics: !!this.props.emitMetrics,
            });
          }
          return null;
        }
      }
      class De extends c.Component {
        render() {
          return this.props.instructionObjectId
            ? (0, n.jsx)("div", {
                children: (0, n.jsx)(T.Z, {
                  instructionObjectId: this.props.instructionObjectId,
                }),
              })
            : null;
        }
      }
      const Oe = (e) => {
          const t = [
            k.VerificationInquiryStatus.Approved,
            k.VerificationInquiryStatus.Declined,
            k.VerificationInquiryStatus.Failed,
            k.VerificationInquiryStatus.MarkedForReview,
          ];
          class s extends c.Component {
            componentDidMount() {
              var e = this;
              return je(function* () {
                e.checkAccountVerificationStatus(!1),
                  e.checkLinkedInVerification(),
                  e.runGoldCheckIfEnabled();
              })();
            }
            renderContent() {
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  !this.state.numVerificationsFailed &&
                    (0, n.jsxs)("div", {
                      className: "px-4 text-xs",
                      children: [
                        "You have ",
                        this.state.numRemainingVerificationsRequired,
                        " more verification(s) to complete before continuing.",
                      ],
                    }),
                  (0, n.jsxs)("div", {
                    className: "px-4 pb-1 text-xs",
                    children: [
                      "Please contact us to",
                      " ",
                      (0, n.jsx)("b", {
                        children: (0, n.jsx)("a", {
                          href: `mailto:${ve.MAILBOXES.OUTLIER.SUPPORT.email}?subject=Support Request`,
                          onClick: () => z.c.track(q.v.SupportRequest),
                          children: ve.MAILBOXES.OUTLIER.SUPPORT.email,
                        }),
                      }),
                      " ",
                      "if you need help.",
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "my-2 px-4 verifications",
                    children: this.props.contents.templates.map((e) =>
                      (0, n.jsx)(
                        "div",
                        {
                          className:
                            "template-verification-unit -mt-4 pb-2 [&>div]:bg-neutral-0 [&_button]:bg-primary-400 [&_button]:hover:text-neutral-0 ",
                          children: (0, n.jsx)(E.j, {
                            userVerifications: this.state.verifications,
                            templateId: e,
                            user: this.props.user,
                            loading: this.state.loading,
                            onVerificationCompleted:
                              this.onVerificationCompleted,
                            onVerificationEvent: this.onVerificationEvent,
                          }),
                        },
                        e
                      )
                    ),
                  }),
                  this.props.contents.enableLinkedInVerification &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: "mb-3 px-4",
                          children: (0, n.jsx)("div", {
                            className: "flex flex-row justify-between",
                            children: (0, n.jsx)("span", {
                              className: "block mt-1 text-lg font-thin",
                              children: (0, n.jsx)("strong", {
                                children: "Connect Your LinkedIn Account",
                              }),
                            }),
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "my-5 max-w-[700px] px-4 [&>div]:bg-neutral-0",
                          children: (0, n.jsx)(ne.Z, {
                            verified: this.state.isLinkedInVerified,
                            userId: this.props.user._id,
                            redirectUrl: window.location.href,
                            platform: k.TaskingPlatform.Outlier,
                            required:
                              this.props.contents
                                .isLinkedInVerificationRequired,
                            vanityName: this.state.linkedinVanityName,
                          }),
                        }),
                      ],
                    }),
                ],
              });
            }
            renderSectionMessage() {
              return (0, n.jsxs)("div", {
                className: "w-full mb-4 px-4 flex justify-between items-center",
                children: [
                  (0, n.jsxs)("div", {
                    className: "font-bold",
                    children: [
                      this.state.numVerificationsFailed
                        ? (0, n.jsxs)("span", {
                            className: "flex items-center text-danger-500",
                            children: [
                              (0, n.jsx)(d.J, {
                                icon: "times",
                                variant: "danger",
                              }),
                              " Your verification has been declined. Please continue the course to proceed tasking on other projects.",
                            ],
                          })
                        : 0 === this.state.numRemainingVerificationsRequired
                        ? (0, n.jsxs)("span", {
                            className: "flex items-center text-success-500",
                            children: [
                              (0, n.jsx)(d.J, {
                                icon: "check",
                                variant: "success",
                              }),
                              " All verifications complete!",
                            ],
                          })
                        : (0, n.jsx)("span", {
                            className: "text-primary-500",
                            children:
                              "You have not yet completed all required verifications.",
                          }),
                      (0, n.jsx)("div", {
                        children:
                          this.props.contents.isLinkedInVerificationRequired &&
                          (this.state.isLinkedInVerified
                            ? (0, n.jsxs)("span", {
                                className: "flex items-center text-success-500",
                                children: [
                                  (0, n.jsx)(d.J, {
                                    icon: "check",
                                    variant: "success",
                                  }),
                                  " Your LinkedIn is connected!",
                                ],
                              })
                            : (0, n.jsx)("span", {
                                className: "text-primary-500",
                                children:
                                  "You must connect your LinkedIn account to continue.",
                              })),
                      }),
                    ],
                  }),
                  (0, n.jsxs)(h.zx, {
                    disabled:
                      0 === this.state.numRemainingVerificationsRequired ||
                      this.state.loading,
                    onClick: this.checkAccountVerificationStatus,
                    children: [
                      (0, n.jsx)(d.J, {
                        icon: "sync-alt",
                        variant: "white",
                        size: "sm",
                      }),
                      " \xa0 Refresh Status",
                    ],
                  }),
                ],
              });
            }
            render() {
              return (0, n.jsx)("div", {
                className: "pb-20",
                children: (0, n.jsx)("div", {
                  className:
                    "max-w-screen-sm mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                  style: { background: "white" },
                  children: (0, n.jsx)(
                    e,
                    Ce({}, this.props, {
                      titleIcon: "user",
                      content: this.renderContent(),
                      sectionMessage: this.renderSectionMessage(),
                      sectionActions: (0, n.jsx)("div", {}),
                      canContinue:
                        (0 === this.state.numRemainingVerificationsRequired ||
                          this.state.numVerificationsFailed > 0) &&
                        (this.state.isLinkedInVerified ||
                          !this.props.contents.isLinkedInVerificationRequired),
                    })
                  ),
                }),
              });
            }
            constructor(e) {
              super(e);
              var s = this;
              this.checkLinkedInVerification = je(function* () {
                const e = yield (0, y.fetchApi)(
                  "/worker/profile/has_linkedin_vanity_name",
                  { method: "GET" }
                ).then(y.handleErrorsAndJsonify);
                if ((s.setState({ isLinkedInVerified: e }), e)) {
                  const { linkedinVanityName: e } = yield (0, y.fetchApi)(
                    "/worker/profile/linkedin_vanity_name",
                    { method: "GET" }
                  ).then(y.handleErrorsAndJsonify);
                  s.setState({ linkedinVanityName: e });
                } else s.setState({ linkedinVanityName: void 0 }), s.state.isLinkedInVerificationRequired && s.setState({ numRemainingVerificationsRequired: s.state.numRemainingVerificationsRequired + 1 });
              });
              var n = this;
              this.runGoldCheckIfEnabled = je(function* () {
                if (n.props.contents.enablePersonaGoldCheck)
                  try {
                    yield (0, y.fetchApi)("/fraud/run_gold_check", {
                      method: "POST",
                      parseAndHandle: !0,
                    });
                  } catch (le) {
                    $.Z.warn("Failed to run gold check", le);
                  }
              });
              var i = this;
              this.getNumRemainingVerificationsRequired = (function () {
                var e = je(function* (e, t, s) {
                  let n = s.length,
                    a = 0;
                  const r = Object.entries(k.equivalentPersonaTemplates),
                    o = [];
                  for (const i of s) {
                    if (o.includes(i)) continue;
                    const s = r.find((e) => e.includes(i)) || [i],
                      c = t.filter(
                        (e) =>
                          e.status === k.VerificationInquiryStatus.Approved &&
                          s.includes(e.templateId)
                      ),
                      l = t.filter(
                        (e) =>
                          e.status === k.VerificationInquiryStatus.Declined &&
                          s.includes(e.templateId)
                      );
                    c.length
                      ? n--
                      : !c.length &&
                        l.length >= k.MAX_VERIFICATION_ATTEMPTS_PER_TEMPLATE &&
                        (z.c.track(q.v.IdentityDecline, { userId: e._id }),
                        yield (0, y.fetchApi)("/worker/verifications/decline", {
                          method: "POST",
                          parseAndHandle: !0,
                          body: { userId: e._id },
                        }),
                        a++),
                      o.push(...s);
                  }
                  return (
                    !(yield (0, y.fetchApi)(
                      "/worker/profile/has_linkedin_vanity_name",
                      { method: "GET" }
                    ).then(y.handleErrorsAndJsonify)) &&
                      i.state.isLinkedInVerificationRequired &&
                      (n += 1),
                    z.c.track(q.v.NumRemainingVerificationsRequired, {
                      numberRemainingVerificationsRequired: n,
                      numberVerificationsFailed: a,
                    }),
                    {
                      numRemainingVerificationsRequired: n,
                      numVerificationsFailed: a,
                    }
                  );
                });
                return function (t, s, n) {
                  return e.apply(this, arguments);
                };
              })();
              var a = this;
              this.checkAccountVerificationStatus = je(function* (e = !0) {
                a.setState({ loading: !0 });
                const { userVerifications: t } = yield (0, y.fetchApi)(
                    "/worker/real_verifications",
                    {
                      method: "GET",
                      parseAndHandle: !0,
                      query: {
                        templatesToInclude: a.props.contents.templates,
                        maxVerificationsPerTemplate:
                          k.DEFAULT_MAX_VERIFICATIONS_PER_TEMPLATE,
                      },
                    }
                  ),
                  {
                    numRemainingVerificationsRequired: s,
                    numVerificationsFailed: n,
                  } = yield a.getNumRemainingVerificationsRequired(
                    a.props.user,
                    t,
                    a.props.contents.templates
                  );
                z.c.track(q.v.CheckAccountVerificationStatus, {
                  verifications: t,
                  numRemainingVerificationsRequired: s,
                  numVerificationsFailed: n,
                }),
                  a.setState({
                    verifications: t,
                    numRemainingVerificationsRequired: s,
                    numVerificationsFailed: n,
                  }),
                  e && (yield new Promise((e) => setTimeout(e, 1e3))),
                  a.setState({ loading: !1 });
              });
              var r = this;
              (this.updateVerificationSource = (function () {
                var e = je(function* (e) {
                  (yield (0, y.fetchApi)("/worker/verifications/updateSource", {
                    method: "POST",
                    parseAndHandle: !0,
                    body: {
                      inquiryId: e,
                      source:
                        r.props.contents.source || k.VerificationSource.Course,
                    },
                  })) ||
                    $.Z.warn(
                      `Failed to update source for inquiry ${e}, source should be ${
                        r.props.contents.source || k.VerificationSource.Course
                      }`
                    );
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
                (this.onVerificationCompleted = (e) => {
                  var s = this;
                  return (function () {
                    var n = je(function* ({
                      inquiryId: n,
                      status: i,
                      fields: a,
                    }) {
                      var r, o;
                      s.setState({ loading: !0 });
                      (null ===
                        (o =
                          null === (r = s.props.user) || void 0 === r
                            ? void 0
                            : r.tags) || void 0 === o
                        ? void 0
                        : o.includes(k.TEST_ACCOUNT_TAG_ID)) &&
                        (yield (0, y.fetchApi)("/worker/verifications", {
                          method: "POST",
                          body: { inquiryId: n, templateId: e, status: i },
                        }));
                      let c = 0;
                      const l = setInterval(
                        je(function* () {
                          yield s.checkAccountVerificationStatus(), (c += 1);
                          const e = 4 === c,
                            i = s.state.verifications.find(
                              (e) => e.inquiryId === n && t.includes(e.status)
                            ),
                            a =
                              s.props.contents.source ||
                              k.VerificationSource.Course;
                          i &&
                            i.source !== a &&
                            (yield s.updateVerificationSource(n)),
                            (e || i) &&
                              (s.setState({ loading: !1 }), clearInterval(l));
                        }),
                        3e3
                      );
                      z.c.track(q.v.VerificationCompleted),
                        s.setState({ loading: !1 });
                    });
                    return function (e) {
                      return n.apply(this, arguments);
                    };
                  })();
                });
              var o = this;
              (this.onVerificationEvent = (function () {
                var e = je(function* (e, t) {
                  if ((o.setState({ loading: !0 }), "start" === e)) {
                    z.c.track(q.v.StartVerification);
                    let e = 0;
                    const s = 3,
                      n = setInterval(
                        je(function* () {
                          yield o.checkAccountVerificationStatus(), (e += 1);
                          const i = e === s,
                            a = o.state.verifications.find(
                              (e) =>
                                e.inquiryId ===
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.inquiryId)
                            );
                          a &&
                            (yield o.updateVerificationSource(
                              null === t || void 0 === t ? void 0 : t.inquiryId
                            )),
                            (i || a) &&
                              (z.c.track(q.v.ReachedMaxTries),
                              o.setState({ loading: !1 }),
                              clearInterval(n));
                        }),
                        3e3
                      );
                  }
                  o.setState({ loading: !1 });
                });
                return function (t, s) {
                  return e.apply(this, arguments);
                };
              })()),
                (this.state = {
                  numRemainingVerificationsRequired:
                    e.contents.templates.length,
                  isLinkedInVerificationRequired:
                    e.contents.isLinkedInVerificationRequired,
                  numVerificationsFailed: 0,
                  loading: !1,
                  verifications: [],
                  isLinkedInVerified: !1,
                });
            }
          }
          return s;
        },
        Ve = (e) => {
          const { 0: t, 1: s } = (0, c.useState)(!1);
          return (0, n.jsx)(
            Re,
            Ce({}, e, {
              content: null,
              canContinue: t,
              children: (0, n.jsx)(ee.Z, {
                user: e.user,
                setCanContinue: s,
                type: k.CourseSectionType.ScheduleInterview,
                title: e.title,
                contents: e.contents,
                courseId: e.course._id,
              }),
            })
          );
        },
        Ze = ((e) => {
          class t extends c.Component {
            componentDidMount() {
              var e = this;
              return je(function* () {
                var t;
                e.checkScenarioStatus(),
                  e.loadPreviousAttempts(),
                  window.addEventListener("focus", e.checkScenarioStatus);
                const s =
                  null === (t = e.props.course.grantedPermissions[0]) ||
                  void 0 === t
                    ? void 0
                    : t.permissionGroup;
                if (s) {
                  const t = yield (0, N.V3)({
                    feature: "use-new-gis-training-tool",
                    querystring: C().stringify(
                      o().pickBy({ permissionGroupId: s })
                    ),
                  });
                  e.setState({ useNewTrainingPage: t });
                }
              })();
            }
            componentWillUnmount() {
              window.removeEventListener("focus", this.checkScenarioStatus);
            }
            renderContent() {
              if (this.state.throttleTimeMs) return null;
              const e =
                  o().get(this.props.course, "sections", []).length - 1 !==
                  this.props.sectionIndex
                    ? "" +
                      ("&course_url=" +
                        encodeURIComponent(window.location.href))
                    : "",
                t = this.props.contents.scenarioId.trim(),
                s = this.props.contents.reviewLevel
                  ? `&reviewLevel=${this.props.contents.reviewLevel}`
                  : "",
                i = this.state.useNewTrainingPage
                  ? `/gis/training/${t}`
                  : `/expert/training?trainingId=${t}${s}${e}`,
                a = (0, L.Gb)(i),
                r = () => {
                  (this.state.useNewTrainingPage &&
                    this.state.previousAttempts.length) ||
                    window.open(a, "_blank");
                };
              return (0, n.jsx)("div", {
                className: "my-4",
                children:
                  this.state.loadingScenario || this.state.loading
                    ? (0, n.jsx)("div", {
                        className:
                          "flex items-center justify-center h-40 scenario-box",
                        children: (0, n.jsx)(p.$, { size: "lg" }),
                      })
                    : this.state.hasValidAttempt
                    ? (0, n.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-center p-24 bg-neutral-0 ",
                        children: (0, n.jsx)("p", {
                          children: (0, n.jsxs)("span", {
                            className: "flex items-center justify-center ",
                            children: [
                              "Scenario Done \xa0 ",
                              (0, n.jsx)(d.J, { icon: "check" }),
                            ],
                          }),
                        }),
                      })
                    : (0, n.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-center p-24 bg-neutral-0 hover:cursor-pointer ",
                        onClick: () => r(),
                        children: (0, n.jsx)("p", {
                          children: (0, n.jsxs)("span", {
                            className:
                              "flex items-center justify-center hover:underline",
                            children: [
                              "Open Scenario \xa0 ",
                              (0, n.jsx)(d.J, { icon: "bullseye" }),
                            ],
                          }),
                        }),
                      }),
              });
            }
            renderSectionActions() {
              return this.state.hasValidAttempt || this.state.loading
                ? (0, n.jsx)("div", {})
                : (0, n.jsx)("div", {
                    children: (0, n.jsxs)(h.zx, {
                      onClick: this.checkScenarioStatus,
                      children: [
                        (0, n.jsx)(d.J, { icon: "sync-alt", variant: "white" }),
                        " \xa0 Refresh Scenario Status",
                      ],
                    }),
                  });
            }
            renderSectionMessage() {
              return (0, n.jsx)("div", {
                className: "mb-2 font-bold text-center",
                children: this.state.hasValidAttempt
                  ? (0, n.jsxs)("span", {
                      className:
                        "flex items-center justify-center text-primary-600",
                      children: [
                        (0, n.jsx)(d.J, { icon: "check", variant: "primary" }),
                        " \xa0 Scenario done!",
                      ],
                    })
                  : (0, n.jsx)("div", {
                      className: "ml-4 text-lg text-neutral-500",
                      children: this.state.throttleTimeMs
                        ? (0, n.jsx)("span", {
                            className: "text-danger-700 ",
                            children: (0, A._W)(this.state.throttleTimeMs),
                          })
                        : (0, n.jsx)("span", {
                            children: "Scenario not completed yet.",
                          }),
                    }),
              });
            }
            render() {
              return (0, n.jsx)(
                e,
                Ce({}, this.props, {
                  handleContinue: () =>
                    this.props.handleContinue({
                      scenarioAccuracy: this.state.scenarioAccuracy,
                    }),
                  displayType: "Onboarding Scenario",
                  content: this.renderContent(),
                  sectionActions: this.renderSectionActions(),
                  sectionMessage: this.renderSectionMessage(),
                  canContinue: this.state.hasValidAttempt,
                  continueButtonTooltipMessage:
                    this.props.canAlwaysContinue || this.state.hasValidAttempt
                      ? void 0
                      : "Complete the assigned Onboarding Scenario to continue",
                })
              );
            }
            constructor(e) {
              super(e);
              var t = this;
              this.checkScenarioStatus = je(function* () {
                var e, s, n;
                t.setState({ loading: !0 });
                const i = !!(null === (e = t.props.course.initialTestInfo) ||
                  void 0 === e
                    ? void 0
                    : e.isInitialTest),
                  a = yield I.Z.labeling.getTrainingScenarioStatus(
                    t.props.contents.scenarioId
                  );
                t.setState({
                  hasValidAttempt:
                    i || a.isTutorial ? a.foundAttempt : a.passedBar,
                  throttleTimeMs: a.throttleTimeMs,
                  loading: !1,
                  scenarioAccuracy: a.scenarioAccuracy,
                }),
                  null === (n = (s = t.props).setCourseSectionInput) ||
                    void 0 === n ||
                    n.call(s, a.scenarioAccuracy);
              });
              var s = this;
              (this.loadPreviousAttempts = je(function* () {
                s.setState({ loadingScenario: !0 });
                const e = s.props.user.id,
                  t = yield (0, y.fetchApi)(
                    `/training/training_attempts/${s.props.contents.scenarioId}/${e}`,
                    { parseAndHandle: !0 }
                  );
                s.setState({
                  previousAttempts: t.trainingAttempts,
                  loadingScenario: !1,
                });
              })),
                (this.state = {
                  hasValidAttempt: !1,
                  loading: !1,
                  throttleTimeMs: null,
                  useNewTrainingPage: !1,
                  loadingScenario: !1,
                  previousAttempts: [],
                });
            }
          }
          return t;
        })(Re),
        Fe = ((e) => {
          class t extends c.Component {
            renderContent() {
              return o().isEmpty(
                o().get(this.props.contents, "instructionList")
              )
                ? null
                : (0, n.jsx)(
                    Pe,
                    Ce({}, this.props.contents, { emitMetrics: !0 })
                  );
            }
            render() {
              return (0, n.jsx)(
                e,
                Ce({}, this.props, {
                  content: this.renderContent(),
                  canContinue: !0,
                })
              );
            }
          }
          return t;
        })(Re),
        Be = ((e) => {
          class t extends c.Component {
            renderContent() {
              return o().get(this.props.contents, "instructionObjectId")
                ? (0, n.jsx)(De, Ce({}, this.props.contents))
                : null;
            }
            render() {
              return (0, n.jsx)(
                e,
                Ce({}, this.props, {
                  content: this.renderContent(),
                  canContinue: !0,
                })
              );
            }
          }
          return t;
        })(Re),
        ze = ((e) => {
          class t extends c.Component {
            renderContent() {
              return (0, n.jsx)(Te, {
                className: "pt-0 px-6 pb-6",
                markdownString: this.props.contents.body,
              });
            }
            render() {
              return (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)("div", {
                  className: "pb-20",
                  children: (0, n.jsx)("div", {
                    className:
                      "max-w-screen-lg mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                    style: { background: "white" },
                    children: (0, n.jsx)(
                      e,
                      Ce({}, this.props, {
                        descriptionClassName: "pt-6 px-6 pb-0",
                        title: this.props.title,
                        titleIcon: "file-alt",
                        content: this.renderContent(),
                        canContinue: !0,
                        isCertification: this.props.course.isCertification,
                      })
                    ),
                  }),
                }),
              });
            }
          }
          return t;
        })(Re),
        qe = ((e) => {
          class t extends c.Component {
            renderContent() {
              var e;
              const t = (
                null === (e = this.props.userFlags) || void 0 === e
                  ? void 0
                  : e["quality-AB-course-subtitles"]
              )
                ? o()
                    .get(this.props, "contents.videoSubtitles", [])
                    .map(({ srcLang: e, src: t }) => ({
                      kind: "subtitles",
                      src: t,
                      srcLang: e,
                      default: !0,
                    }))
                : [];
              return (0, n.jsx)("div", {
                className: "py-6",
                children: (0, n.jsx)(l.Z, {
                  controls: !0,
                  ref: this.videoRef,
                  width: "100%",
                  height: "50vh",
                  url: this.props.contents.videoUrl,
                  onEnded: this.handleVideoDone,
                  onProgress: (e) =>
                    this.handleUpdateCurrentTime(e.playedSeconds),
                  onSeek: this.handleOnSeek,
                  config: {
                    file: { attributes: { crossOrigin: "true" }, tracks: t },
                  },
                }),
              });
            }
            render() {
              return (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)("div", {
                  className: "pb-20",
                  children: (0, n.jsx)("div", {
                    className:
                      "max-w-screen-lg border-solid border border-neutral-200 rounded-lg mb-4 mx-4",
                    style: { background: "white" },
                    children: (0, n.jsx)(
                      e,
                      Ce({}, this.props, {
                        descriptionClassName: "pt-6 px-6 pb-0",
                        title: this.props.title,
                        titleIcon: "file-alt",
                        content: this.renderContent(),
                        canContinue:
                          this.state.isVideoDone || !!this.props.readOnly,
                        isCertification: this.props.course.isCertification,
                        continueButtonTooltipMessage:
                          this.props.canAlwaysContinue ||
                          this.state.isVideoDone ||
                          this.props.readOnly
                            ? void 0
                            : "Watch the video until the end to continue",
                      })
                    ),
                  }),
                }),
              });
            }
            constructor(e) {
              super(e),
                (this.handleVideoDone = () => {
                  this.setState({ isVideoDone: !0 });
                }),
                (this.handleUpdateCurrentTime = (e) => {
                  this.setState({
                    currentTime: e,
                    maxSecondsPlayed: Math.max(e, this.state.maxSecondsPlayed),
                  });
                }),
                (this.handleOnSeek = (e) => {
                  if (
                    this.props.readOnly ||
                    e <= this.state.maxSecondsPlayed ||
                    this.state.isVideoDone ||
                    this.props.contents.allowSkimming
                  )
                    return;
                  e - this.state.currentTime > 0.01 &&
                    this.videoRef.current.seekTo(
                      this.state.currentTime,
                      "seconds"
                    );
                }),
                (this.videoRef = c.createRef()),
                (this.state = {
                  isVideoDone: !1,
                  currentTime: 0,
                  maxSecondsPlayed: 0,
                });
            }
          }
          return t;
        })(Re),
        _e = ((e) => {
          class t extends c.Component {
            componentDidMount() {
              var e = this;
              return je(function* () {
                e.fetchExistingAnswers();
                const t = yield I.Z.labeling.getCourseAnswers({
                  name: e.props.course.name,
                  selectedChoices: [],
                  sectionIndex: e.props.sectionIndex,
                  skipGrading: e.props.skipGrading,
                });
                e.setState({ answers: t.answers }),
                  e.props.readOnly &&
                    !e.props.course.isCertification &&
                    e.setState({ selectedChoices: t.answers });
              })();
            }
            get canCheckAnswer() {
              return !this.state.isLastAttemptCorrect;
            }
            renderContent() {
              const {
                  choices: e,
                  explanation: t,
                  hint: s,
                } = this.props.contents,
                { isLastAttemptCorrect: i, showFeedback: a } = this.state,
                r = s && a && !i,
                c = t && a && i;
              return (0, n.jsxs)("div", {
                className: "px-6",
                children: [
                  (0, n.jsx)("div", {
                    className: "grid grid-cols-[1fr_1fr] gap-2",
                    children: o().map(e, this.renderChoice),
                  }),
                  c &&
                    (0, n.jsx)(x.j, {
                      className: "mb-4",
                      title: "Correct!",
                      subtitle: t,
                      background: "white",
                      variant: "success",
                    }),
                  r &&
                    (0, n.jsx)(x.j, {
                      className: "mb-4",
                      title: "Not quite! Try again",
                      subtitle: s,
                      background: "white",
                      variant: "danger",
                    }),
                ],
              });
            }
            renderSectionActions() {
              return this.props.course.isCertification &&
                !this.props.skipGrading
                ? null
                : (0, n.jsxs)("div", {
                    className:
                      "w-full px-6 pb-6 flex justify-between items-center",
                    children: [
                      (0, n.jsx)("div", {
                        className: "flex items-center text-xs",
                        children:
                          this.state.showFeedback &&
                          (this.state.isLastAttemptCorrect
                            ? !this.props.contents.explanation &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(x.j, {
                                  title: "Correct!",
                                  background: "white",
                                  variant: "success",
                                }),
                              })
                            : !this.props.contents.hint &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(x.j, {
                                  title: "Not quite! Try again",
                                  background: "white",
                                  variant: "danger",
                                }),
                              })),
                      }),
                      !this.state.isLastAttemptCorrect &&
                        (0, n.jsx)(h.zx, {
                          className: "w-60",
                          size: "lg",
                          fullWidth: !0,
                          variant: "primary",
                          onClick: this.handleCheckAnswer,
                          disabled: !this.canCheckAnswer || this.props.readOnly,
                          children: "Check Answer",
                        }),
                    ],
                  });
            }
            canContinue() {
              return (
                (!!this.state.isLastAttemptCorrect ||
                  this.props.course.isCertification) &&
                !!this.state.selectedChoices.length
              );
            }
            fetchExistingAnswers() {
              var e = this;
              return je(function* () {
                e.setState({ isLoading: !0 });
                const t = (yield (0, te.ZP)(
                  null,
                  `internal/courses/course-answers/${e.props.course._id}`
                ))[e.props.sectionIndex];
                if (
                  (null === t || void 0 === t ? void 0 : t.sectionType) !==
                    k.CourseSectionType.MultipleChoice ||
                  (e.props.contents.singleSelect &&
                    t.contents.answer.length > 1)
                )
                  return void e.setState({ isLoading: !1 });
                const s = [];
                t.contents.answer.forEach((t) => {
                  const n = e.props.contents.choices.indexOf(t);
                  n >= 0 && s.push(n);
                }),
                  e.setState({ isLoading: !1, selectedChoices: s });
              })();
            }
            render() {
              return (0, n.jsx)("div", {
                className:
                  "mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                style: { background: "white" },
                children: (0, n.jsx)(
                  e,
                  Ce({}, this.props, {
                    descriptionClassName: "p-6",
                    title: this.props.title,
                    titleIcon: "question-circle",
                    handleContinue: () =>
                      this.props.handleContinue({
                        selectedChoices: this.state.selectedChoices,
                      }),
                    content: this.renderContent(),
                    sectionActions: this.renderSectionActions(),
                    canContinue: this.canContinue(),
                    isLoading: this.state.isLoading,
                    continueButtonTooltipMessage:
                      this.props.canAlwaysContinue ||
                      this.state.isLastAttemptCorrect
                        ? void 0
                        : "Answer correctly to continue",
                    isCertification: this.props.course.isCertification,
                  })
                ),
              });
            }
            constructor(e) {
              super(e),
                (this.handleToggleChoice = (e) => {
                  if (this.props.contents.singleSelect)
                    return this.setState({ selectedChoices: [e] });
                  const t = o().cloneDeep(this.state.selectedChoices);
                  o().includes(t, e) ? o().pull(t, e) : t.push(e),
                    this.setState({ selectedChoices: t });
                }),
                (this.isCorrect = () => {
                  let e = !1;
                  return (
                    (e =
                      this.props.contents.singleSelect ||
                      this.props.contents.requireAllAnswers
                        ? o().isEqual(
                            this.state.selectedChoices.sort(),
                            this.state.answers.sort()
                          )
                        : 0 !== this.state.selectedChoices.length &&
                          0 ===
                            o().difference(
                              this.state.selectedChoices,
                              this.state.answers
                            ).length),
                    !this.state.answers.length || e
                  );
                });
              var t = this;
              (this.handleCheckAnswer = je(function* () {
                t.isCorrect()
                  ? t.setState({ isLastAttemptCorrect: !0, showFeedback: !0 })
                  : t.setState({ isLastAttemptCorrect: !1, showFeedback: !0 });
              })),
                (this.renderChoice = (e, t) => {
                  const s = o().includes(this.state.selectedChoices, t);
                  return (0, n.jsxs)(
                    "div",
                    {
                      className: (0, _.default)([
                        "border-solid border rounded-lg mb-4",
                        "hover:bg-neutral-50 transition-colors bg-neutral-0",
                        "[&>img]:w-52 [&>img]:h-52",
                        "[&_p]:hover:cursor-pointer",
                        "flex justify-between items-center font-medium",
                        {
                          "border-neutral-300": !s,
                          "border-primary-500": s,
                          "opacity-70 pointer-events-none":
                            this.state.isLastAttemptCorrect,
                          "pointer-events-none": this.props.readOnly,
                        },
                      ]),
                      onClick: () => this.handleToggleChoice(t),
                      children: [
                        (0, n.jsx)(Te, { markdownString: e }),
                        (0, n.jsx)("div", {
                          className: "mr-4",
                          children: (0, n.jsx)(Ne, {
                            isRadioButton: this.props.contents.singleSelect,
                            isSelected: s,
                          }),
                        }),
                      ],
                    },
                    `${e}+${t}`
                  );
                }),
                (this.state = {
                  isLoading: !1,
                  lastAttemptTime: null,
                  selectedChoices: [],
                  showFeedback: !1,
                  showInstructionHint: !1,
                  answers: [],
                });
            }
          }
          return t;
        })(Re),
        He = ((e) => {
          class t extends c.Component {
            componentDidMount() {
              this.fetchExistingAnswers(),
                document.addEventListener("copy", this.handleCopyTextEvent),
                document.addEventListener("paste", this.handlePasteEvent);
            }
            componentWillUnmount() {
              document.removeEventListener("copy", this.handleCopyTextEvent),
                document.removeEventListener("paste", this.handlePasteEvent);
            }
            get canCheckAnswer() {
              return (
                !this.state.isLastAttemptCorrect &&
                (!this.state.lastAttemptTime ||
                  this.checkAnswerCooldownSeconds < 0)
              );
            }
            get checkAnswerCooldownSeconds() {
              return this.state.lastAttemptTime
                ? 7 - P()().diff(this.state.lastAttemptTime) / 1e3
                : 0;
            }
            renderContent() {
              const {
                  explanation: e,
                  hint: t,
                  questions: s,
                  isFreeform: i,
                  allowFreeformCopyPaste: r,
                } = this.props.contents,
                { isLastAttemptCorrect: c, showFeedback: l } = this.state,
                d = t && l && !c,
                h = e && l && c,
                u =
                  !c &&
                  o().get(this.props.course, "instructionList") &&
                  !this.props.course.instructionList.refreshersOnly;
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-cf2985a28295e61b px-6",
                    children: o().map(s, (e, t) => {
                      var s, a, o;
                      return (0, n.jsxs)(
                        "div",
                        {
                          className: "jsx-cf2985a28295e61b mb-4 w-full",
                          children: [
                            (0, n.jsx)("label", {
                              className: "jsx-cf2985a28295e61b mb-1 block",
                              children: (0, n.jsx)("strong", {
                                className: "jsx-cf2985a28295e61b",
                                children: e.label,
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "jsx-cf2985a28295e61b sp__1",
                            }),
                            i
                              ? (0, n.jsx)(Q, {
                                  disablePasting: !r,
                                  handleOnTextChange: (s, n) => {
                                    const i = { label: e.label, response: s };
                                    this.handleResponseEdit(+t, i, !r),
                                      r || this.detectAutotyper(+t, e.label, n),
                                      (this.props.qualificationId ||
                                        this.props.workerSkillId) &&
                                        this.handleUpdateBehaviourLog(
                                          +t,
                                          i,
                                          null,
                                          n
                                        );
                                  },
                                  handleMouseLeave: () =>
                                    this.onMouseLeave(e.label, !1),
                                  value:
                                    null === (s = this.state.responses[+t]) ||
                                    void 0 === s
                                      ? void 0
                                      : s.response,
                                  isDisabled: this.props.readOnly,
                                  useDefault: !0,
                                })
                              : (0, n.jsx)(m.n, {
                                  id: `text-response-${t}`,
                                  placeholder: "Type answer here...",
                                  value:
                                    null !==
                                      (o =
                                        null ===
                                          (a = this.state.responses[+t]) ||
                                        void 0 === a
                                          ? void 0
                                          : a.response) && void 0 !== o
                                      ? o
                                      : "",
                                  onMouseLeave: () =>
                                    this.onMouseLeave(e.label, i),
                                  onChange: (s) => {
                                    const n = {
                                      label: e.label,
                                      response: s.target.value,
                                    };
                                    this.handleResponseEdit(+t, n, !1);
                                  },
                                  disabled: this.props.readOnly,
                                }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  h &&
                    (0, n.jsx)("div", {
                      className: "jsx-cf2985a28295e61b mb-4 px-4",
                      children: (0, n.jsx)(x.j, {
                        title: "Correct!",
                        subtitle: e,
                        background: "neutral",
                        variant: "success",
                      }),
                    }),
                  d &&
                    (0, n.jsx)("div", {
                      className: "jsx-cf2985a28295e61b mb-4 px-4",
                      children: (0, n.jsx)(x.j, {
                        title: "Not quite! Try again",
                        subtitle: t,
                        background: "neutral",
                        variant: "danger",
                      }),
                    }),
                  u &&
                    (0, n.jsxs)("div", {
                      className: "jsx-cf2985a28295e61b feedback-section",
                      children: [
                        (0, n.jsx)("span", {
                          style: { marginRight: 16, flexShrink: 0 },
                          className: "jsx-cf2985a28295e61b",
                          children: (0, n.jsx)(O.Z, {
                            emoji: "\ud83d\udcd6",
                            size: "24px",
                          }),
                        }),
                        (0, n.jsxs)("span", {
                          className: "jsx-cf2985a28295e61b",
                          children: [
                            "Feel free to",
                            " ",
                            (0, n.jsx)("a", {
                              onClick: () =>
                                this.setState({ showInstructionHint: !0 }),
                              className: "jsx-cf2985a28295e61b",
                              children: "double check the instructions!",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, n.jsx)(a(), {
                    id: "cf2985a28295e61b",
                    children:
                      ".feedback-section.jsx-cf2985a28295e61b{background:var(--color-RemoGray01);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);padding:16px;margin-top:16px;font-size:16px;font-weight:bold;margin-bottom:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",
                  }),
                ],
              });
            }
            renderSectionActions() {
              return this.props.course.isCertification
                ? null
                : (0, n.jsxs)("div", {
                    className:
                      "w-full pt-2 px-6 pb-6 flex justify-between items-center",
                    children: [
                      (0, n.jsx)("div", {
                        className: "flex items-center text-xs",
                        children:
                          this.state.showFeedback &&
                          (this.state.isLastAttemptCorrect
                            ? !this.props.contents.explanation &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(x.j, {
                                  title: "Correct!",
                                  background: "white",
                                  variant: "success",
                                }),
                              })
                            : !this.props.contents.hint &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(x.j, {
                                  title: "Not quite! Try again",
                                  background: "white",
                                  variant: "danger",
                                }),
                              })),
                      }),
                      !this.state.isLastAttemptCorrect &&
                        (0, n.jsx)(h.zx, {
                          className: "w-60",
                          size: "lg",
                          fullWidth: !0,
                          variant: "primary",
                          onClick: this.handleCheckAnswer,
                          disabled: !this.canCheckAnswer,
                          children: "Check Answer",
                        }),
                    ],
                  });
            }
            allFieldsHaveValues() {
              return (
                this.state.responses.filter((e) =>
                  null === e || void 0 === e ? void 0 : e.response
                ).length === this.props.contents.questions.length
              );
            }
            canContinue() {
              return (
                (!!this.state.isLastAttemptCorrect ||
                  !!this.props.skipGrading ||
                  this.props.course.isCertification) &&
                this.allFieldsHaveValues()
              );
            }
            fetchExistingAnswers() {
              var e = this;
              return je(function* () {
                e.setState({ isLoading: !0 });
                const t = (yield (0, te.ZP)(
                  null,
                  `internal/courses/course-answers/${e.props.course._id}`
                ))[e.props.sectionIndex];
                if (
                  (null === t || void 0 === t ? void 0 : t.sectionType) !==
                  k.CourseSectionType.TextResponse
                )
                  return void e.setState({ isLoading: !1 });
                const s = [];
                t.contents.questions.forEach((e, n) => {
                  s.push({ label: e, response: t.contents.answers[n] });
                }),
                  e.setState({ isLoading: !1, responses: s });
              })();
            }
            render() {
              var t, s, i, a;
              return (0, n.jsx)("div", {
                className: "pb-20",
                children: (0, n.jsx)("div", {
                  className: (0, _.default)(
                    "mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                    {
                      "max-w-screen-sm": !(null === (t = this.props) ||
                      void 0 === t ||
                      null === (s = t.contents) ||
                      void 0 === s
                        ? void 0
                        : s.isFreeform),
                      "max-w-screen-lg":
                        null === (i = this.props) ||
                        void 0 === i ||
                        null === (a = i.contents) ||
                        void 0 === a
                          ? void 0
                          : a.isFreeform,
                    }
                  ),
                  style: { background: "white" },
                  children: (0, n.jsx)(
                    e,
                    Ce({}, this.props, {
                      descriptionClassName: "pt-6 px-6 pb-6",
                      titleIcon: "pencil",
                      handleContinue: () => {
                        const { isFreeform: e } = this.props.contents;
                        if (
                          e &&
                          (this.props.qualificationId ||
                            this.props.workerSkillId)
                        ) {
                          const e = this.getAttemptBehaviourLog();
                          return this.props.handleContinue({
                            textResponses: this.state.responses,
                            attemptBehaviourLog: e,
                          });
                        }
                        return this.props.handleContinue({
                          textResponses: this.state.responses,
                        });
                      },
                      content: this.renderContent(),
                      sectionActions: this.renderSectionActions(),
                      isLoading: this.state.isLoading,
                      canContinue: this.canContinue(),
                      continueButtonTooltipMessage:
                        this.props.canAlwaysContinue ||
                        this.state.isLastAttemptCorrect ||
                        this.props.skipGrading
                          ? void 0
                          : "Answer all the questions correctly to continue",
                      isCertification: this.props.course.isCertification,
                    })
                  ),
                }),
              });
            }
            constructor(e) {
              super(e),
                (this.handleTick = () => {
                  this.checkAnswerCooldownSeconds > 0
                    ? this.forceUpdate()
                    : (this.setState({
                        lastAttemptTime: null,
                        isLastAttemptCorrect: void 0,
                      }),
                      clearInterval(this.intervalId));
                }),
                (this.debouncedUpdateBehaviourLog = o().debounce((e, t, s) => {
                  var n, i, a, r;
                  if (!s || !s.length) return;
                  const c =
                      (null !==
                        (a =
                          null === (n = o().last(s)) || void 0 === n
                            ? void 0
                            : n.timestamp) && void 0 !== a
                        ? a
                        : 0) -
                      (null !==
                        (r =
                          null === (i = o().first(s)) || void 0 === i
                            ? void 0
                            : i.timestamp) && void 0 !== r
                        ? r
                        : 0),
                    l = o().cloneDeep(this.state.activeTimeTyping);
                  (l[t] = (this.state.activeTimeTyping[t] || 0) + c),
                    this.setState({ activeTimeTyping: l });
                  const d = s.map((e) => e.lengthDiff),
                    h = o().cloneDeep(this.state.lengthDiffLog);
                  (h[t] = [...(this.state.lengthDiffLog[t] || []), ...d]),
                    this.setState({ lengthDiffLog: h });
                  const u = o().cloneDeep(this.state.typingEvents);
                  (u[t] = []), this.setState({ typingEvents: u });
                }, 800)),
                (this.handleCopyTextEvent = (e) => {
                  var t;
                  const s =
                    null === (t = window.getSelection()) || void 0 === t
                      ? void 0
                      : t.toString();
                  if (
                    s &&
                    e.target instanceof Element &&
                    !["textarea", "input"].includes(
                      e.target.tagName.toLowerCase()
                    )
                  ) {
                    const e = Date.now();
                    this.setState({
                      copyEventsLog: [
                        ...this.state.copyEventsLog,
                        { text: s, timestamp: e },
                      ],
                    });
                  }
                }),
                (this.handlePasteEvent = (e) => {
                  if (e.clipboardData) {
                    const t = e.clipboardData.getData("text/plain"),
                      s = Date.now();
                    this.setState({
                      pasteEventsLog: [
                        ...this.state.pasteEventsLog,
                        { text: t, timestamp: s },
                      ],
                    });
                  }
                }),
                (this.getAttemptBehaviourLog = () => {
                  const e = o().uniq([
                      ...Object.keys(this.state.activeTimeTyping),
                      ...Object.keys(this.state.numAutotyperDetected),
                      ...Object.keys(this.state.lengthDiffLog),
                      ...Object.keys(this.state.numMouseLeaves),
                    ]),
                    t = {};
                  for (const j of e) {
                    var s;
                    const e = o().first(
                      this.state.responses.filter((e) => e.label === j)
                    );
                    if (!e || !e.response) continue;
                    const r = e.response,
                      c = this.state.lengthDiffLog[j] || [],
                      l = c.filter((e) => e < 0).map((e) => -e),
                      d = c.filter((e) => e > 1);
                    var n, i, a;
                    t[j] = {
                      numBackspaces: l.length,
                      avgBackspaceLength: o().mean(l),
                      maxBackspaceLength: o().max(l),
                      numOfCopyPaste: d.length,
                      avgCopyPasteLength: o().mean(d),
                      maxCopyPasteLength: o().max(d),
                      activeTimeTyping: this.state.activeTimeTyping[j],
                      numAutotyperDetected:
                        null !== (n = this.state.numAutotyperDetected[j]) &&
                        void 0 !== n
                          ? n
                          : 0,
                      totalChanges:
                        null !== (i = c.length) && void 0 !== i ? i : 0,
                      numMouseLeaves:
                        null !== (a = this.state.numMouseLeaves[j]) &&
                        void 0 !== a
                          ? a
                          : 0,
                      lengthDiffLog: c,
                      charCount: null === r || void 0 === r ? void 0 : r.length,
                      wordCount: r
                        ? null === (s = o().words(r)) || void 0 === s
                          ? void 0
                          : s.length
                        : void 0,
                    };
                  }
                  const r = this.state.copyEventsLog;
                  let c;
                  if (r && r.length > 0) {
                    var l, d;
                    const e = r.map((e) => e.text);
                    var h, u, p;
                    c = {
                      copyTextLog: e,
                      copyTimestampLog: r.map((e) => e.timestamp),
                      maxCopyTextLength:
                        null !==
                          (h =
                            null === (l = o().maxBy(e, (e) => e.length)) ||
                            void 0 === l
                              ? void 0
                              : l.length) && void 0 !== h
                          ? h
                          : 0,
                      minCopyTextLength:
                        null !==
                          (u =
                            null === (d = o().minBy(e, (e) => e.length)) ||
                            void 0 === d
                              ? void 0
                              : d.length) && void 0 !== u
                          ? u
                          : 0,
                      avgCopyTextLength: o().meanBy(e, (e) =>
                        null !==
                          (p =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== p
                          ? p
                          : 0
                      ),
                      numCopyEvents: e.length,
                    };
                  }
                  const m = this.state.pasteEventsLog;
                  let x;
                  if (m && m.length > 0) {
                    var g, v;
                    const e = m.map((e) => e.text);
                    var f, b, y;
                    x = {
                      pasteTextLog: e,
                      pasteTimestampLog: m.map((e) => e.timestamp),
                      maxPasteTextLength:
                        null !==
                          (f =
                            null === (g = o().maxBy(e, (e) => e.length)) ||
                            void 0 === g
                              ? void 0
                              : g.length) && void 0 !== f
                          ? f
                          : 0,
                      minPasteTextLength:
                        null !==
                          (b =
                            null === (v = o().minBy(e, (e) => e.length)) ||
                            void 0 === v
                              ? void 0
                              : v.length) && void 0 !== b
                          ? b
                          : 0,
                      avgPasteTextLength: o().meanBy(e, (e) =>
                        null !==
                          (y =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== y
                          ? y
                          : 0
                      ),
                      numPasteEvents: e.length,
                    };
                  }
                  return {
                    textFields: t,
                    copyTextEvents: c,
                    pasteTextEvents: x,
                  };
                }),
                (this.handleUpdateBehaviourLog = (e, t, s, n) => {
                  var i, a, r;
                  const c =
                      t.response.length -
                      (null !==
                        (r =
                          null === (i = this.state.responses[e]) ||
                          void 0 === i ||
                          null === (a = i.response) ||
                          void 0 === a
                            ? void 0
                            : a.length) && void 0 !== r
                        ? r
                        : 0),
                    l =
                      n ||
                      (null === s || void 0 === s
                        ? void 0
                        : s.nativeEvent.timeStamp) ||
                      Date.now(),
                    d = o().cloneDeep(this.state.typingEvents);
                  (d[t.label] = [
                    ...(this.state.typingEvents[t.label] || []),
                    { timestamp: l, lengthDiff: c },
                  ]),
                    this.setState({ typingEvents: d }),
                    this.debouncedUpdateBehaviourLog(e, t.label, d[t.label]);
                }),
                (this.onMouseLeave = (e, t) => {
                  if (
                    t &&
                    (this.props.qualificationId || this.props.workerSkillId)
                  ) {
                    const t = o().cloneDeep(this.state.numMouseLeaves);
                    (t[e] = (this.state.numMouseLeaves[e] || 0) + 1),
                      this.setState({ numMouseLeaves: t });
                  }
                }),
                (this.handleResponseEdit = (e, t, s) => {
                  var n, i;
                  const a = /(\|.*\|[\r\n|\r|\n])+\|[-| :]+[|]/.test(
                    t.response
                  );
                  var r;
                  if (
                    s &&
                    t.response.length -
                      (null !==
                        (r =
                          null === (n = this.state.responses[e]) ||
                          void 0 === n ||
                          null === (i = n.response) ||
                          void 0 === i
                            ? void 0
                            : i.length) && void 0 !== r
                        ? r
                        : 0) >
                      M.h9 &&
                    !a
                  )
                    return;
                  const c = o().cloneDeep(this.state.responses);
                  (c[e] = t), this.setState({ responses: c });
                }),
                (this.detectAutotyper = (e, t, s) => {
                  if (!this.state.lastKeystrokeTimestamp)
                    return void this.setState({ lastKeystrokeTimestamp: s });
                  const n = s - this.state.lastKeystrokeTimestamp,
                    i =
                      n < Z.eH
                        ? [...this.state.keystrokeIntervals, n].slice(-Z.vx)
                        : [];
                  var a, r;
                  if (
                    i.length === Z.vx &&
                    o().mean(i) >
                      (null !== (a = o().max(i)) && void 0 !== a ? a : 0) -
                        (null !== (r = o().min(i)) && void 0 !== r ? r : 0)
                  ) {
                    if (
                      (this.setState({
                        keystrokeIntervals: [],
                        lastKeystrokeTimestamp: s,
                      }),
                      this.props.qualificationId || this.props.workerSkillId)
                    ) {
                      const e = o().cloneDeep(this.state.numAutotyperDetected);
                      (e[t] = (this.state.numAutotyperDetected[t] || 0) + 1),
                        this.setState({ numAutotyperDetected: e });
                    }
                  } else
                    this.setState({
                      keystrokeIntervals: i,
                      lastKeystrokeTimestamp: s,
                    });
                });
              var t = this;
              (this.handleCheckAnswer = je(function* () {
                (yield (0, y.fetchApi)("/courses/checkAnswer", {
                  method: "POST",
                  body: {
                    name: t.props.course.name,
                    textResponses: t.state.responses,
                    sectionIndex: t.props.sectionIndex,
                  },
                }).then(y.handleErrorsAndJsonify)).isCorrect
                  ? t.setState({ isLastAttemptCorrect: !0, showFeedback: !0 })
                  : (t.setState({
                      isLastAttemptCorrect: !1,
                      lastAttemptTime: P()(),
                      showFeedback: !0,
                    }),
                    (t.intervalId = window.setInterval(t.handleTick, 1e3)));
              })),
                (this.state = {
                  isLoading: !1,
                  lastAttemptTime: null,
                  responses: [],
                  showFeedback: !1,
                  showInstructionHint: !1,
                  keystrokeIntervals: [],
                  lastKeystrokeTimestamp: null,
                  typingEvents: {},
                  lengthDiffLog: {},
                  activeTimeTyping: {},
                  numMouseLeaves: {},
                  numAutotyperDetected: {},
                  copyEventsLog: [],
                  pasteEventsLog: [],
                });
            }
          }
          return (0, F.Zh)("course", { withRef: !0 })(t);
        })(Re),
        Ue = ((e) => {
          class t extends c.Component {
            renderContent() {
              const {
                  questions: e,
                  isFreeform: t,
                  allowFreeformCopyPaste: s,
                } = this.props.contents,
                i = (0, n.jsxs)("div", {
                  className: "pt-3",
                  children: [
                    (0, n.jsx)("div", {
                      className: "pb-2 px-6 text-xs text-neutral-500",
                      children:
                        "This is your answer. You can edit it before submitting.",
                    }),
                    o().map(this.state.responses, (e, t) => {
                      var s = this,
                        i = this;
                      return (0, n.jsx)("div", {
                        className: "pb-4 px-4 whitespace-pre-wrap",
                        children: (0, n.jsx)("button", {
                          className:
                            "bg-neutral-0 border-neutral-200 relative w-full flex flex-col rounded-lg border border-box transition-shadow transition-border group focus:ring-2 text-left",
                          children: (0, n.jsxs)("div", {
                            className:
                              "flex flex-row w-full px-4 py-3 items-center",
                            children: [
                              (0, n.jsx)("div", {
                                children: (0, n.jsx)(d.J, {
                                  icon: "user",
                                  variant: "neutral",
                                  size: "lg",
                                  className: "w-12 h-12 rounded shadow-lg",
                                }),
                              }),
                              this.state.isEditingMessage
                                ? (0, n.jsxs)(c.Fragment, {
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "flex w-full flex-col gap-1 ml-2 flex-1",
                                        children: (0, n.jsx)(se.Z, {
                                          children: (0, n.jsx)(g.K, {
                                            id: "text",
                                            value: this.state.editedMessage,
                                            onChange: (function () {
                                              var e = je(function* (e) {
                                                return s.setState({
                                                  editedMessage: e.target.value,
                                                });
                                              });
                                              return function (t) {
                                                return e.apply(this, arguments);
                                              };
                                            })(),
                                            onKeyDown: (e) => {
                                              e.shiftKey &&
                                                13 === e.keyCode &&
                                                (e.preventDefault(),
                                                this.handleEditResponse(
                                                  this.state.editedMessage,
                                                  t
                                                ));
                                            },
                                            onFocus: (e) => {
                                              const t = e.target;
                                              (t.style.height = "auto"),
                                                (t.style.height =
                                                  t.scrollHeight + "px");
                                            },
                                            autoFocus: !0,
                                            dynamic: !0,
                                            className: "flex flex-1",
                                            textAreaWrapperClassName:
                                              "flex flex-1",
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "px-2",
                                        children: (0, n.jsxs)("div", {
                                          className:
                                            "flex flex-row items-center",
                                          children: [
                                            (0, n.jsx)(u.u, {
                                              text: "Finish editing",
                                              side: "top",
                                              target: (0, n.jsx)("div", {
                                                children: (0, n.jsx)(d.J, {
                                                  variant: "success",
                                                  size: "sm",
                                                  icon: "check",
                                                  onClick: je(function* () {
                                                    return (
                                                      i.handleEditResponse(
                                                        i.state.editedMessage,
                                                        t
                                                      ),
                                                      i.setState({
                                                        isEditingMessage: !1,
                                                      }),
                                                      !0
                                                    );
                                                  }),
                                                }),
                                              }),
                                            }),
                                            (0, n.jsx)(u.u, {
                                              text: "Cancel editing",
                                              side: "top",
                                              target: (0, n.jsx)("div", {
                                                children: (0, n.jsx)(d.J, {
                                                  variant: "danger",
                                                  size: "sm",
                                                  icon: "ban",
                                                  onClick: () => {
                                                    this.setState({
                                                      isEditingMessage: !1,
                                                    });
                                                  },
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  })
                                : (0, n.jsxs)(c.Fragment, {
                                    children: [
                                      (0, n.jsx)("div", {
                                        className: "flex-1 ml-4 w-full",
                                        children: (0, n.jsx)("div", {
                                          className:
                                            "flex flex-col gap-1 w-full",
                                          children: (0, n.jsx)(se.Z, {
                                            children: (0, n.jsx)("div", {
                                              className: "min-w-0",
                                              children: (0, n.jsx)(v.U, {
                                                markdown: e,
                                                enableMath: !0,
                                                enableHtml: !0,
                                                enableSoftBreaks: !0,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "px-2",
                                        children: (0, n.jsx)("div", {
                                          className:
                                            "transition-opacity opacity-0 group-hover:opacity-100",
                                          children: (0, n.jsxs)("div", {
                                            className:
                                              "flex flex-row items-center",
                                            children: [
                                              (0, n.jsx)(u.u, {
                                                text: "Copy this chat message",
                                                side: "top",
                                                target: (0, n.jsx)("div", {
                                                  children: (0, n.jsx)(d.J, {
                                                    variant: "neutral",
                                                    size: "sm",
                                                    icon: "copy",
                                                    className:
                                                      "transition-colors hover:bg-neutral-100",
                                                    onClick: (t) => {
                                                      t.stopPropagation(),
                                                        navigator.clipboard.writeText(
                                                          e
                                                        );
                                                    },
                                                  }),
                                                }),
                                              }),
                                              !this.props.readOnly &&
                                                (0, n.jsx)(u.u, {
                                                  text: "Edit this chat message",
                                                  side: "top",
                                                  target: (0, n.jsx)("div", {
                                                    children: (0, n.jsx)(d.J, {
                                                      variant: "neutral",
                                                      size: "sm",
                                                      icon: "edit",
                                                      className:
                                                        "transition-colors hover:bg-neutral-100",
                                                      onClick: () => {
                                                        this.setState({
                                                          editedMessage: e,
                                                          isEditingMessage: !0,
                                                        });
                                                      },
                                                    }),
                                                  }),
                                                }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                        }),
                      });
                    }),
                  ],
                });
              var a, r;
              const l = (0, n.jsxs)("div", {
                className: "pt-3 pb-6 px-6 relative",
                children: [
                  (0, n.jsxs)("div", {
                    className: "pb-2 text-xs text-neutral-500",
                    children: [
                      "You're answering to Prompt ",
                      this.state.selectedPromptIndex + 1,
                      ".",
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "border border-neutral-200 rounded-lg",
                    children: (0, n.jsxs)(f.Z, {
                      title: "",
                      description: "",
                      className: "w-full",
                      children: [
                        (0, n.jsx)("form", {
                          className: "relative flex",
                          children: t
                            ? (0, n.jsx)("div", {
                                className: "w-full",
                                children: (0, n.jsx)(Q, {
                                  disablePasting: !s,
                                  handleOnTextChange: (e, t) => {
                                    this.handleResponseToEnterEdit(e, !s),
                                      s || this.detectAutotyper(t);
                                  },
                                  value:
                                    null !== (a = this.state.responseToEnter) &&
                                    void 0 !== a
                                      ? a
                                      : "",
                                  isDisabled: this.state.responses.length >= 1,
                                  onShiftEnter: () => {
                                    this.handleAddResponse();
                                  },
                                }),
                              })
                            : (0, n.jsx)(g.K, {
                                id: "text",
                                disabled: this.state.responses.length >= 1,
                                placeholder: "Write your response...",
                                className:
                                  "text-neutral-900 overflow-hidden transition-colors border-transparent rounded resize-none ring-0 grow text-14 focus:ring-primary-600 focus:ring-1 placeholder:text-neutral-400 outline-none",
                                value:
                                  null !== (r = this.state.responseToEnter) &&
                                  void 0 !== r
                                    ? r
                                    : "",
                                rows: 3,
                                onChange: (e) => {
                                  const t = e.target.value;
                                  this.handleResponseToEnterEdit(t, !1);
                                },
                                onKeyDown: (e) => {
                                  e.shiftKey &&
                                    13 === e.keyCode &&
                                    this.handleAddResponse();
                                },
                                style: { fontSize: 14 },
                              }),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex items-center justify-between mt-3 text-neutral-600",
                          children: [
                            (0, n.jsx)("div", {
                              className: "px-2",
                              children:
                                this.state.responses.length < 1 &&
                                (0, n.jsxs)("span", {
                                  children: [
                                    "Press ",
                                    (0, n.jsx)(V.Z, { children: "Shift" }),
                                    " + ",
                                    (0, n.jsx)(V.Z, { children: "Enter" }),
                                    " to submit your message.",
                                  ],
                                }),
                            }),
                            (0, n.jsx)("div", {
                              className: "flex gap-2",
                              children: (0, n.jsx)(h.zx, {
                                disabled: this.state.responses.length >= 1,
                                onClick: this.handleAddResponse,
                                children: "Add Message",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
              return (0, n.jsxs)(c.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: "pb-2 px-6 text-xs text-neutral-500",
                    children:
                      "Please ensure you select the desired prompt below. Then, write the answer in the textbox.",
                  }),
                  (0, n.jsx)("div", {
                    className: "px-6 grid gap-2 grid-cols-2 grid-rows-1",
                    children: o().map(e, (e, t) =>
                      (0, n.jsx)("div", {
                        className: (0, _.default)("b-2 cursor-pointer", {
                          "pointer-events-none": this.props.readOnly,
                        }),
                        onClick: () => {
                          this.handleSelectedPromptChange(t);
                        },
                        children: (0, n.jsxs)("div", {
                          className: (0, _.default)(
                            "border py-5 px-4 rounded-lg shadow-[0_2px_4px_0_#0000000D] relative bg-neutral-0",
                            {
                              "border-neutral-200":
                                t !== this.state.selectedPromptIndex,
                              "border-primary-500":
                                t === this.state.selectedPromptIndex,
                            }
                          ),
                          children: [
                            (0, n.jsx)("span", {
                              className: "absolute top-5 right-4",
                              children: (0, n.jsx)(Ne, {
                                isRadioButton: !0,
                                isSelected:
                                  t === this.state.selectedPromptIndex,
                              }),
                            }),
                            (0, n.jsxs)("span", {
                              className: "w-full mb-2 pr-10 block font-bold",
                              children: ["Prompt ", t + 1],
                            }),
                            e,
                          ],
                        }),
                      })
                    ),
                  }),
                  this.state.responses.length > 0
                    ? i
                    : this.state.isLoading
                    ? (0, n.jsx)("div", {
                        className: "flex justify-center items-center my-4",
                        children: (0, n.jsx)(p.$, { size: "lg" }),
                      })
                    : l,
                ],
              });
            }
            canContinue() {
              var e;
              return (
                !!String(this.state.selectedPromptIndex) &&
                !!(null === (e = this.state.responses) || void 0 === e
                  ? void 0
                  : e.length)
              );
            }
            fetchExistingAnswers() {
              var e = this;
              return je(function* () {
                e.setState({ isLoading: !0 });
                const t = (yield (0, te.ZP)(
                  null,
                  `internal/courses/course-answers/${e.props.course._id}`
                ))[e.props.sectionIndex];
                if (
                  (null === t || void 0 === t ? void 0 : t.sectionType) !==
                  k.CourseSectionType.PromptSelectionResponse
                )
                  return void e.setState({ isLoading: !1 });
                const s = e.props.contents.questions.indexOf(t.contents.label);
                if (-1 === s) return void e.setState({ isLoading: !1 });
                const n = [];
                t.contents.responses.forEach((e) => {
                  n.push(e);
                }),
                  e.setState({
                    isLoading: !1,
                    selectedPromptIndex: s,
                    responses: n,
                  });
              })();
            }
            componentDidMount() {
              this.fetchExistingAnswers();
            }
            render() {
              var t;
              return (0, n.jsx)("div", {
                className:
                  "max-w-screen-lg mx-auto border-solid border border-neutral-200 rounded-lg bg-white mb-4",
                children: (0, n.jsx)(
                  e,
                  Ce({}, this.props, {
                    descriptionClassName: "p-6",
                    title:
                      this.props.title ||
                      "Select one of the prompts to respond to",
                    titleIcon: "comment",
                    handleContinue: () => {
                      var e, t;
                      return this.props.handleContinue({
                        chatResponses: {
                          label:
                            null === (e = this.props.contents) ||
                            void 0 === e ||
                            null === (t = e.questions) ||
                            void 0 === t
                              ? void 0
                              : t.find(
                                  (e, t) => t === this.state.selectedPromptIndex
                                ),
                          responses: this.state.responses,
                        },
                      });
                    },
                    content: this.renderContent(),
                    canContinue: this.canContinue(),
                    isLoading: this.state.isLoading,
                    continueButtonTooltipMessage:
                      this.props.canAlwaysContinue ||
                      (null === (t = this.state.responses) || void 0 === t
                        ? void 0
                        : t.length)
                        ? void 0
                        : "Submit your response to continue",
                    isCertification: this.props.course.isCertification,
                  })
                ),
              });
            }
            constructor(e) {
              super(e),
                (this.handleResponseToEnterEdit = (e, t) => {
                  const s = /(\|.*\|[\r\n|\r|\n])+\|[-| :]+[|]/.test(e);
                  var n;
                  (t &&
                    e.length -
                      (null !== (n = this.state.responseToEnter.length) &&
                      void 0 !== n
                        ? n
                        : 0) >
                      M.h9 &&
                    !s) ||
                    this.setState({ responseToEnter: e });
                }),
                (this.handleSelectedPromptChange = (e) => {
                  this.setState({ selectedPromptIndex: e });
                }),
                (this.handleAddResponse = () => {
                  this.setState((e) => ({
                    responses: [...e.responses, this.state.responseToEnter],
                    responseToEnter: "",
                  }));
                }),
                (this.handleEditResponse = (e, t) => {
                  this.setState((s) => ({
                    responses: s.responses.map((s, n) => (n === t ? e : s)),
                  }));
                }),
                (this.detectAutotyper = (e) => {
                  if (!this.state.lastKeystrokeTimestamp)
                    return void this.setState({ lastKeystrokeTimestamp: e });
                  const t = e - this.state.lastKeystrokeTimestamp,
                    s =
                      t < Z.eH
                        ? [...this.state.keystrokeIntervals, t].slice(-Z.vx)
                        : [];
                  var n, i;
                  s.length === Z.vx &&
                  o().mean(s) >
                    (null !== (n = o().max(s)) && void 0 !== n ? n : 0) -
                      (null !== (i = o().min(s)) && void 0 !== i ? i : 0)
                    ? this.setState({
                        keystrokeIntervals: [],
                        lastKeystrokeTimestamp: e,
                        responseToEnter: "",
                      })
                    : this.setState({
                        keystrokeIntervals: s,
                        lastKeystrokeTimestamp: e,
                      });
                }),
                (this.state = {
                  isLoading: !0,
                  responseToEnter: "",
                  responses: [],
                  selectedPromptIndex: 0,
                  keystrokeIntervals: [],
                  lastKeystrokeTimestamp: null,
                  isEditingMessage: !1,
                  editedMessage: "",
                  editableMessageIconHover: !1,
                });
            }
          }
          return (0, F.Zh)("course", { withRef: !0 })(t);
        })(Re),
        $e = ((e) => {
          class t extends c.Component {
            componentDidMount() {
              this.fetchExistingAnswers(),
                document.addEventListener("copy", this.handleCopyTextEvent),
                document.addEventListener("paste", this.handlePasteEvent);
            }
            componentWillUnmount() {
              document.removeEventListener("copy", this.handleCopyTextEvent),
                document.removeEventListener("paste", this.handlePasteEvent);
            }
            renderOriginalTextContent(e, t) {
              var s;
              return (0, n.jsxs)(c.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-148c16f33337689c w-full px-6 pb-2",
                    children: (0, n.jsx)(B.Z, {
                      fullWidth: !0,
                      title: "Model Response",
                      originalText: e.answer,
                      originalTextColor: "#374151",
                      addedDiffColor: "#bbd9f1",
                      newText:
                        null === (s = this.state.responses[+t]) || void 0 === s
                          ? void 0
                          : s.response,
                      className: "-mt-4",
                      alwaysShowOriginalText: !0,
                    }),
                  }),
                  (0, n.jsx)(a(), {
                    id: "148c16f33337689c",
                    children:
                      ".original-text-content.jsx-148c16f33337689c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}",
                  }),
                ],
              });
            }
            renderEditableTextContent(e, t) {
              var s;
              const { isFreeform: i, allowFreeformCopyPaste: r } =
                this.props.contents;
              return (0, n.jsxs)(c.Fragment, {
                children: [
                  (0, n.jsxs)("div", {
                    className: "jsx-101c3219eec3b98d w-full px-6",
                    children: [
                      e.label &&
                        (0, n.jsx)("label", {
                          className: "jsx-101c3219eec3b98d",
                          children: (0, n.jsx)("strong", {
                            className: "jsx-101c3219eec3b98d block pt-6 pb-4",
                            children: e.label,
                          }),
                        }),
                      (0, n.jsx)("div", {
                        className: "jsx-101c3219eec3b98d sp__1",
                      }),
                      (0, n.jsx)(Q, {
                        disablePasting: !r,
                        handleOnTextChange: (s, n) => {
                          const a = new DOMParser(),
                            o = {
                              label: e.label,
                              response:
                                a.parseFromString(s, "text/html")
                                  .documentElement.textContent || "",
                            };
                          this.handleResponseEdit(+t, o),
                            i && !r && this.detectAutotyper(+t, e.label, n),
                            i &&
                              (this.props.qualificationId ||
                                this.props.workerSkillId) &&
                              this.handleUpdateBehaviourLog(+t, o, null, n);
                        },
                        handleMouseLeave: () => this.onMouseLeave(e.label),
                        value:
                          null === (s = this.state.responses[+t]) ||
                          void 0 === s
                            ? void 0
                            : s.response,
                        initialValue: this.state.initialResponses[+t],
                        isDisabled: this.props.readOnly,
                      }),
                      (0, n.jsx)("br", { className: "jsx-101c3219eec3b98d" }),
                    ],
                  }),
                  (0, n.jsx)(a(), {
                    id: "101c3219eec3b98d",
                    children:
                      ".editable-text-content.jsx-101c3219eec3b98d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}",
                  }),
                ],
              });
            }
            canContinue() {
              return (
                this.state.responses.filter((e) =>
                  null === e || void 0 === e ? void 0 : e.response
                ).length === this.props.contents.questions.length
              );
            }
            fetchExistingAnswers() {
              var e = this;
              return je(function* () {
                e.setState({ isLoading: !0 });
                const t = (yield (0, te.ZP)(
                  null,
                  `internal/courses/course-answers/${e.props.course._id}`
                ))[e.props.sectionIndex];
                if (
                  (null === t || void 0 === t ? void 0 : t.sectionType) !==
                  k.CourseSectionType.TextResponseRewrite
                )
                  return void e.setState({ isLoading: !1 });
                const s = [],
                  n = [];
                t.contents.questions.forEach((e, i) => {
                  s.push({ label: e, response: t.contents.answers[i] }),
                    n.push(t.contents.answers[i]);
                }),
                  e.setState({
                    isLoading: !1,
                    responses: s,
                    initialResponses: n,
                  });
              })();
            }
            render() {
              const { questions: t, description: s } = this.props.contents,
                i = s.replace(/(<([^>]+)>)/gi, ""),
                a = () => {
                  const e = this.getAttemptBehaviourLog();
                  return this.props.handleContinue({
                    textResponses: this.state.responses,
                    attemptBehaviourLog: e,
                  });
                };
              return (0, n.jsx)(c.Fragment, {
                children: o().map(t, (t, s) =>
                  (0, n.jsxs)(c.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "max-w-screen-lg mx-auto mb-4 border-solid border border-neutral-200 rounded-lg",
                        style: { background: "white" },
                        children: (0, n.jsx)(
                          e,
                          Ce({}, this.props, {
                            descriptionClassName: "pt-6 px-6 pb-4",
                            title: "Improve the Model's response",
                            hideDescription: !i || s > 0,
                            showOutlierLogo: !0,
                            handleContinue: a,
                            content: this.renderOriginalTextContent(t, s),
                            canContinue: this.canContinue(),
                            isLoading: this.state.isLoading,
                            continueButtonTooltipMessage:
                              this.state.responses.filter((e) =>
                                null === e || void 0 === e ? void 0 : e.response
                              ).length < this.props.contents.questions.length
                                ? "Complete all responses to continue"
                                : void 0,
                            isCertification: this.props.course.isCertification,
                          })
                        ),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "max-w-screen-lg mx-auto mb-20 border-solid border border-neutral-200 rounded-lg",
                        style: { background: "white" },
                        children: (0, n.jsx)(
                          e,
                          Ce({}, this.props, {
                            descriptionClassName: "pt-6 px-6 pb-4",
                            title:
                              "Please improve the model's response by rewriting or editing it",
                            titleIcon: "edit",
                            hideDescription: !0,
                            handleContinue: a,
                            content: this.renderEditableTextContent(t, s),
                            canContinue: this.canContinue(),
                            isLoading: this.state.isLoading,
                            continueButtonTooltipMessage:
                              this.state.responses.filter((e) =>
                                null === e || void 0 === e ? void 0 : e.response
                              ).length < this.props.contents.questions.length
                                ? "Complete all responses to continue"
                                : void 0,
                            isCertification: this.props.course.isCertification,
                          })
                        ),
                      }),
                    ],
                  })
                ),
              });
            }
            constructor(e) {
              super(e),
                (this.debouncedUpdateBehaviourLog = o().debounce((e, t, s) => {
                  var n, i, a, r;
                  if (!s || !s.length) return;
                  const c =
                      (null !==
                        (a =
                          null === (n = o().last(s)) || void 0 === n
                            ? void 0
                            : n.timestamp) && void 0 !== a
                        ? a
                        : 0) -
                      (null !==
                        (r =
                          null === (i = o().first(s)) || void 0 === i
                            ? void 0
                            : i.timestamp) && void 0 !== r
                        ? r
                        : 0),
                    l = o().cloneDeep(this.state.activeTimeTyping);
                  (l[t] = (this.state.activeTimeTyping[t] || 0) + c),
                    this.setState({ activeTimeTyping: l });
                  const d = s.map((e) => e.lengthDiff),
                    h = o().cloneDeep(this.state.lengthDiffLog);
                  (h[t] = [...(this.state.lengthDiffLog[t] || []), ...d]),
                    this.setState({ lengthDiffLog: h });
                  const u = o().cloneDeep(this.state.typingEvents);
                  (u[t] = []), this.setState({ typingEvents: u });
                }, 800)),
                (this.handleCopyTextEvent = (e) => {
                  var t;
                  const s =
                    null === (t = window.getSelection()) || void 0 === t
                      ? void 0
                      : t.toString();
                  if (
                    s &&
                    e.target instanceof Element &&
                    !["textarea", "input"].includes(
                      e.target.tagName.toLowerCase()
                    )
                  ) {
                    const e = Date.now();
                    this.setState({
                      copyEventsLog: [
                        ...this.state.copyEventsLog,
                        { text: s, timestamp: e },
                      ],
                    });
                  }
                }),
                (this.handlePasteEvent = (e) => {
                  if (e.clipboardData) {
                    const t = e.clipboardData.getData("text/plain"),
                      s = Date.now();
                    this.setState({
                      pasteEventsLog: [
                        ...this.state.pasteEventsLog,
                        { text: t, timestamp: s },
                      ],
                    });
                  }
                }),
                (this.getAttemptBehaviourLog = () => {
                  const e = o().uniq([
                      ...Object.keys(this.state.activeTimeTyping),
                      ...Object.keys(this.state.numAutotyperDetected),
                      ...Object.keys(this.state.lengthDiffLog),
                      ...Object.keys(this.state.numMouseLeaves),
                    ]),
                    t = {};
                  for (const j of e) {
                    var s;
                    const e = o().first(
                      this.state.responses.filter((e) => e.label === j)
                    );
                    if (!e || !e.response) continue;
                    const r = e.response,
                      c = this.state.lengthDiffLog[j] || [],
                      l = c.filter((e) => e < 0).map((e) => -e),
                      d = c.filter((e) => e > 1);
                    var n, i, a;
                    t[j] = {
                      numBackspaces: l.length,
                      avgBackspaceLength: o().mean(l),
                      maxBackspaceLength: o().max(l),
                      numOfCopyPaste: d.length,
                      avgCopyPasteLength: o().mean(d),
                      maxCopyPasteLength: o().max(d),
                      activeTimeTyping: this.state.activeTimeTyping[j],
                      numAutotyperDetected:
                        null !== (n = this.state.numAutotyperDetected[j]) &&
                        void 0 !== n
                          ? n
                          : 0,
                      totalChanges:
                        null !== (i = c.length) && void 0 !== i ? i : 0,
                      numMouseLeaves:
                        null !== (a = this.state.numMouseLeaves[j]) &&
                        void 0 !== a
                          ? a
                          : 0,
                      lengthDiffLog: c,
                      charCount: null === r || void 0 === r ? void 0 : r.length,
                      wordCount: r
                        ? null === (s = o().words(r)) || void 0 === s
                          ? void 0
                          : s.length
                        : void 0,
                    };
                  }
                  const r = this.state.copyEventsLog;
                  let c;
                  if (r && r.length > 0) {
                    var l, d;
                    const e = r.map((e) => e.text);
                    var h, u, p;
                    c = {
                      copyTextLog: e,
                      copyTimestampLog: r.map((e) => e.timestamp),
                      maxCopyTextLength:
                        null !==
                          (h =
                            null === (l = o().maxBy(e, (e) => e.length)) ||
                            void 0 === l
                              ? void 0
                              : l.length) && void 0 !== h
                          ? h
                          : 0,
                      minCopyTextLength:
                        null !==
                          (u =
                            null === (d = o().minBy(e, (e) => e.length)) ||
                            void 0 === d
                              ? void 0
                              : d.length) && void 0 !== u
                          ? u
                          : 0,
                      avgCopyTextLength: o().meanBy(e, (e) =>
                        null !==
                          (p =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== p
                          ? p
                          : 0
                      ),
                      numCopyEvents: e.length,
                    };
                  }
                  const m = this.state.pasteEventsLog;
                  let x;
                  if (m && m.length > 0) {
                    var g, v;
                    const e = m.map((e) => e.text);
                    var f, b, y;
                    x = {
                      pasteTextLog: e,
                      pasteTimestampLog: m.map((e) => e.timestamp),
                      maxPasteTextLength:
                        null !==
                          (f =
                            null === (g = o().maxBy(e, (e) => e.length)) ||
                            void 0 === g
                              ? void 0
                              : g.length) && void 0 !== f
                          ? f
                          : 0,
                      minPasteTextLength:
                        null !==
                          (b =
                            null === (v = o().minBy(e, (e) => e.length)) ||
                            void 0 === v
                              ? void 0
                              : v.length) && void 0 !== b
                          ? b
                          : 0,
                      avgPasteTextLength: o().meanBy(e, (e) =>
                        null !==
                          (y =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== y
                          ? y
                          : 0
                      ),
                      numPasteEvents: e.length,
                    };
                  }
                  return {
                    textFields: t,
                    copyTextEvents: c,
                    pasteTextEvents: x,
                  };
                }),
                (this.handleUpdateBehaviourLog = (e, t, s, n) => {
                  var i, a, r;
                  const c =
                      t.response.length -
                      (null !==
                        (r =
                          null === (i = this.state.responses[e]) ||
                          void 0 === i ||
                          null === (a = i.response) ||
                          void 0 === a
                            ? void 0
                            : a.length) && void 0 !== r
                        ? r
                        : 0),
                    l =
                      n ||
                      (null === s || void 0 === s
                        ? void 0
                        : s.nativeEvent.timeStamp) ||
                      Date.now(),
                    d = o().cloneDeep(this.state.typingEvents);
                  (d[t.label] = [
                    ...(this.state.typingEvents[t.label] || []),
                    { timestamp: l, lengthDiff: c },
                  ]),
                    this.setState({ typingEvents: d }),
                    this.debouncedUpdateBehaviourLog(e, t.label, d[t.label]);
                }),
                (this.onMouseLeave = (e) => {
                  if (this.props.qualificationId || this.props.workerSkillId) {
                    const t = o().cloneDeep(this.state.numMouseLeaves);
                    (t[e] = (this.state.numMouseLeaves[e] || 0) + 1),
                      this.setState({ numMouseLeaves: t });
                  }
                }),
                (this.handleResponseEdit = (e, t) => {
                  var s, n;
                  const i = /(\|.*\|[\r\n|\r|\n])+\|[-| :]+[|]/.test(
                    t.response
                  );
                  var a;
                  if (
                    t.response.length -
                      (null !==
                        (a =
                          null === (s = this.state.responses[e]) ||
                          void 0 === s ||
                          null === (n = s.response) ||
                          void 0 === n
                            ? void 0
                            : n.length) && void 0 !== a
                        ? a
                        : 0) >
                      M.h9 &&
                    !i
                  )
                    return;
                  const r = o().cloneDeep(this.state.responses);
                  (r[e] = t), this.setState({ responses: r });
                }),
                (this.detectAutotyper = (e, t, s) => {
                  if (!this.state.lastKeystrokeTimestamp)
                    return void this.setState({ lastKeystrokeTimestamp: s });
                  const n = s - this.state.lastKeystrokeTimestamp,
                    i =
                      n < Z.eH
                        ? [...this.state.keystrokeIntervals, n].slice(-Z.vx)
                        : [];
                  var a, r;
                  if (
                    i.length === Z.vx &&
                    o().mean(i) >
                      (null !== (a = o().max(i)) && void 0 !== a ? a : 0) -
                        (null !== (r = o().min(i)) && void 0 !== r ? r : 0)
                  ) {
                    if (
                      (this.setState({
                        keystrokeIntervals: [],
                        lastKeystrokeTimestamp: s,
                      }),
                      this.props.qualificationId || this.props.workerSkillId)
                    ) {
                      const e = o().cloneDeep(this.state.numAutotyperDetected);
                      (e[t] = (this.state.numAutotyperDetected[t] || 0) + 1),
                        this.setState({ numAutotyperDetected: e });
                    }
                  } else
                    this.setState({
                      keystrokeIntervals: i,
                      lastKeystrokeTimestamp: s,
                    });
                }),
                (this.state = {
                  isLoading: !1,
                  responses: e.contents.questions.map((e) => ({
                    label: e.label,
                    response: e.answer,
                  })),
                  initialResponses: [],
                  keystrokeIntervals: [],
                  lastKeystrokeTimestamp: null,
                  typingEvents: {},
                  lengthDiffLog: {},
                  activeTimeTyping: {},
                  numMouseLeaves: {},
                  numAutotyperDetected: {},
                  copyEventsLog: [],
                  pasteEventsLog: [],
                });
            }
          }
          return (0, F.Zh)("course", { withRef: !0 })(t);
        })(Re),
        Ge = ((e) => {
          class t extends c.Component {
            renderContent() {
              return (0, n.jsx)("div", {
                className: "px-4 pb-4",
                children: (0, n.jsx)("iframe", {
                  className: "w-full h-[60vh]",
                  src: this.props.contents.iframeUrl,
                }),
              });
            }
            render() {
              return (0, n.jsx)("div", {
                className:
                  "w-full mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                style: { background: "white" },
                children: (0, n.jsx)(
                  e,
                  Ce({}, this.props, {
                    titleIcon: "eye",
                    content: this.renderContent(),
                    canContinue: !0,
                  })
                ),
              });
            }
          }
          return t;
        })(Re),
        Je = Oe(Re),
        We = ((e) => {
          class t extends c.Component {
            handleResponseEdit(e, t) {
              this.setState((s) => ({
                checkedOrText: Ce({}, s.checkedOrText, { [e]: t }),
              }));
            }
            handleChange(e, t) {
              this.setState((s) => ({
                checkedOrText: Ce({}, s.checkedOrText, {
                  [e]: t.target.checked,
                }),
              }));
            }
            renderContent() {
              const e = o().get(this.props, "contents.items", []),
                { checkedOrText: t } = this.state;
              return (0, n.jsx)("div", {
                className: "pb-6",
                children: e.map((e, s) => {
                  var i;
                  return e.isText
                    ? (0, n.jsxs)(
                        "div",
                        {
                          children: [
                            (0, n.jsx)(Te, {
                              className: "pt-6 px-6 pb-3",
                              markdownString: e.body,
                            }),
                            (0, n.jsx)("label", {
                              className: "block mb-1 px-6 text-xs font-medium",
                              children: e.textBoxLabel,
                            }),
                            (0, n.jsx)(m.n, {
                              id: `confirm-text-${s}`,
                              className: "px-6",
                              onPaste: void 0,
                              value:
                                null !==
                                  (i = String(this.state.checkedOrText[s])) &&
                                void 0 !== i
                                  ? i
                                  : "",
                              onChange: (e) => {
                                this.handleResponseEdit(s, e.target.value);
                              },
                              disabled: this.props.readOnly,
                            }),
                          ],
                        },
                        s
                      )
                    : (0, n.jsxs)(
                        "div",
                        {
                          children: [
                            (0, n.jsx)(Te, {
                              className: "pt-6 px-6 pb-3",
                              markdownString: e.body,
                            }),
                            (0, n.jsx)(b.X, {
                              className: "px-6",
                              id: `confirm-checkbox-${s}`,
                              label: e.checkboxLabel,
                              checked: t[s],
                              onChange: this.handleChange.bind(this, s),
                              disabled: this.props.readOnly,
                            }),
                          ],
                        },
                        s
                      );
                }),
              });
            }
            fetchExistingAnswers() {
              var e = this;
              return je(function* () {
                e.setState({ isLoading: !0 });
                const t = (yield (0, te.ZP)(
                  null,
                  `internal/courses/course-answers/${e.props.course._id}`
                ))[e.props.sectionIndex];
                if (
                  (null === t || void 0 === t ? void 0 : t.sectionType) !==
                  k.CourseSectionType.Confirm
                )
                  return void e.setState({ isLoading: !1 });
                const s = {};
                let n = 0;
                e.props.contents.items.forEach((e, i) => {
                  (null === e || void 0 === e ? void 0 : e.isText)
                    ? ((s[i] = t.contents[n]), (n += 1))
                    : (s[i] = !0);
                }),
                  e.setState({ isLoading: !1, checkedOrText: s });
              })();
            }
            componentDidMount() {
              this.fetchExistingAnswers();
            }
            render() {
              const t = o().every(this.state.checkedOrText, (e) =>
                "string" === typeof e ? e.length > 0 : e
              );
              return (0, n.jsx)("div", {
                className: "pb-20",
                children: (0, n.jsx)("div", {
                  className:
                    "max-w-screen-lg mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                  style: { background: "white" },
                  children: (0, n.jsx)(
                    e,
                    Ce({}, this.props, {
                      descriptionClassName: "pt-6 px-6 pb-0",
                      titleIcon: "check-circle",
                      handleContinue: () => {
                        const e = Object.values(
                          this.state.checkedOrText
                        ).filter((e) => "string" === typeof e);
                        this.props.handleContinue({ confirmResponses: e });
                      },
                      content: this.renderContent(),
                      canContinue: t,
                      continueButtonTooltipMessage:
                        this.props.canAlwaysContinue || t
                          ? void 0
                          : "Confirm all the items to continue",
                      isLoading: this.state.isLoading,
                    })
                  ),
                }),
              });
            }
            constructor(e) {
              super(e);
              const { contents: t } = e;
              this.state = {
                isLoading: !1,
                checkedOrText: o().mapValues(t.items, (e) => !!e.isText && ""),
              };
            }
          }
          return (0, F.Zh)("course", { withRef: !0 })(t);
        })(Re),
        Ke = ((e) => {
          class t extends c.Component {
            componentDidMount() {
              var e = this;
              return je(function* () {
                e.checkScenarioStatus(),
                  e.loadScenarioAndPreviousAttempts(),
                  window.addEventListener("focus", e.checkScenarioStatus);
              })();
            }
            componentWillUnmount() {
              window.removeEventListener("focus", this.checkScenarioStatus);
            }
            renderContent() {
              var e;
              return this.state.throttleTimeMs
                ? null
                : (0, n.jsx)("div", {
                    className: "my-4",
                    children: this.state.hasValidAttempt
                      ? (0, n.jsx)("div", {
                          className:
                            "flex items-center justify-center h-40 scenario-box",
                          children: (0, n.jsx)("p", {
                            children:
                              "You finished this Scenario! Continue to the next section",
                          }),
                        })
                      : this.state.loadingScenario
                      ? (0, n.jsx)("div", {
                          className:
                            "flex items-center justify-center h-40 scenario-box",
                          children: (0, n.jsx)(p.$, { size: "lg" }),
                        })
                      : (0, n.jsx)("div", {
                          className:
                            "flex justify-center flex-wrap xl:flex-nowrap h-full",
                          children:
                            this.state.trainingScenario &&
                            this.state.scenarioProjectConfig &&
                            (0, n.jsx)(X.Z, {
                              hideBackButton: !0,
                              simpleFeedbackModalClosing: !0,
                              trainingAttempt:
                                null ===
                                  (e = o().last(this.state.previousAttempts)) ||
                                void 0 === e
                                  ? void 0
                                  : e._id,
                              trainingScenario: this.state.trainingScenario,
                              isCorpUser: this.props.user.isCorporateUser || !1,
                              name: this.state.trainingScenario,
                              submissionResponse: this.state.submissionResponse,
                              toggleShowingFeedback: () => {},
                              leaderboard: this.state.scenarioLeaderboard,
                              config: this.state.scenarioProjectConfig,
                              query: {
                                trainingId: this.state.trainingScenario.id,
                              },
                              overrideAnswerKeyCooldown: !1,
                              user: this.props.user,
                              serverRendered: !1,
                              projectConfig: this.state.scenarioProjectConfig,
                              onFeedbackClose: this.checkScenarioStatus,
                              onFeedbackCloseLoading: this.state.loading,
                            }),
                        }),
                  });
            }
            renderSectionActions() {
              return this.state.hasValidAttempt || this.state.loading
                ? (0, n.jsx)("div", {
                    className: "pb-2 pl-2",
                    children: (0, n.jsxs)(h.zx, {
                      children: [
                        (0, n.jsx)(d.J, { icon: "sync-alt", variant: "white" }),
                        " \xa0 Checking",
                      ],
                    }),
                  })
                : (0, n.jsx)("div", {
                    className: "pb-2 pl-2",
                    children: (0, n.jsxs)(h.zx, {
                      onClick: this.checkScenarioStatus,
                      children: [
                        (0, n.jsx)(d.J, { icon: "sync-alt", variant: "white" }),
                        " \xa0 Refresh Scenario Status",
                      ],
                    }),
                  });
            }
            renderSectionMessage() {
              return (0, n.jsx)("div", {
                className: "pb-2 flex items-center",
                children: this.state.hasValidAttempt
                  ? (0, n.jsx)("span", {
                      className: "ml-4 text-xs text-neutral-500",
                      children: "Scenario done!",
                    })
                  : (0, n.jsx)("div", {
                      className: "ml-4 text-xs text-neutral-500",
                      children: this.state.throttleTimeMs
                        ? (0, n.jsx)("span", {
                            className: "text-danger-700 ",
                            children: (0, A._W)(this.state.throttleTimeMs),
                          })
                        : (0, n.jsx)("span", {
                            children: "Scenario not completed yet.",
                          }),
                    }),
              });
            }
            render() {
              return (0, n.jsx)("div", {
                className:
                  "w-full mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                style: { background: "white" },
                children: (0, n.jsx)(
                  e,
                  Ce({}, this.props, {
                    handleContinue: () =>
                      this.props.handleContinue({
                        scenarioAccuracy: this.state.scenarioAccuracy,
                      }),
                    content: this.renderContent(),
                    sectionActions: this.renderSectionActions(),
                    sectionMessage: this.renderSectionMessage(),
                    canContinue: this.state.hasValidAttempt,
                  })
                ),
              });
            }
            constructor(e) {
              super(e);
              var t = this;
              this.loadScenarioAndPreviousAttempts = je(function* () {
                var e;
                t.setState({ loadingScenario: !0 });
                const s = t.props.user.id,
                  n = yield (0, y.fetchApi)(
                    `/training/training_attempts/${t.props.contents.scenarioId}/${s}`,
                    { parseAndHandle: !0 }
                  );
                let i,
                  a,
                  r = {},
                  c =
                    null ===
                      (e = o().last(
                        null === n || void 0 === n ? void 0 : n.trainingAttempts
                      )) || void 0 === e
                      ? void 0
                      : e._id;
                if (c) {
                  const e = yield (0, y.fetchApi)(`/training/view/${c}`, {
                    parseAndHandle: !0,
                  });
                  (a = e.trainingScenario),
                    (r = e.submissionResponse),
                    (i = e.leaderboard),
                    t.setState({ previousAttempts: n.trainingAttempts });
                } else {
                  const e = yield (0, y.fetchApi)(
                    `/training/begin/${t.props.contents.scenarioId}`,
                    { parseAndHandle: !0 }
                  );
                  (a = e.trainingScenario),
                    (i = e.leaderboard),
                    (c = e.trainingAttempt);
                  const n = yield (0, y.fetchApi)(
                    `/training/training_attempts/${t.props.contents.scenarioId}/${s}`,
                    { parseAndHandle: !0 }
                  );
                  t.setState({ previousAttempts: n.trainingAttempts });
                }
                const l = yield (0, y.fetchApi)(`/config/${a.project}`, {
                  parseAndHandle: !0,
                });
                t.setState({
                  scenarioProjectConfig: l,
                  trainingScenario: a,
                  submissionResponse: r,
                  loadingScenario: !1,
                  scenarioLeaderboard: i,
                });
              });
              var s = this;
              (this.checkScenarioStatus = je(function* () {
                var e;
                s.setState({ loading: !0 });
                const t = !!(null === (e = s.props.course.initialTestInfo) ||
                  void 0 === e
                    ? void 0
                    : e.isInitialTest),
                  n = yield I.Z.labeling.getTrainingScenarioStatus(
                    s.props.contents.scenarioId
                  );
                s.setState({
                  hasValidAttempt:
                    t || n.isTutorial ? n.foundAttempt : n.passedBar,
                  throttleTimeMs: n.throttleTimeMs,
                  loading: !1,
                  scenarioAccuracy: n.scenarioAccuracy,
                });
              })),
                (this.state = {
                  trainingScenario: void 0,
                  hasValidAttempt: !1,
                  throttleTimeMs: null,
                  loading: !1,
                  loadingScenario: !1,
                  previousAttempts: [],
                  scenarioLeaderboard: [],
                });
            }
          }
          return t;
        })(Re),
        Ye = ((e) => {
          class t extends c.Component {
            fetchChatPromptAndResponses(e) {
              var t = this;
              return je(function* () {
                const {
                  params: s,
                  responses: n,
                  chatTaskFeatureConfig: i,
                  reviewLevel: a,
                } = yield (0, te.ZP)(
                  null,
                  `internal/courses/chat-preview-content/${e}`
                );
                s &&
                  n &&
                  t.setState({
                    params: s,
                    responses: n,
                    chatTaskFeatureConfig: i,
                    reviewLevel: a,
                  });
              })();
            }
            componentDidMount() {
              var e = this;
              return je(function* () {
                const t = o().get(e.props, "contents.chatTaskId");
                yield e.fetchChatPromptAndResponses(t);
              })();
            }
            renderContent() {
              return (0, n.jsx)("div", {
                className: "scaleui scale-theme scale-tailwind",
                children:
                  this.state.params && this.state.responses
                    ? (0, n.jsx)(c.Suspense, {
                        fallback: (0, n.jsx)(p.$, {
                          size: "md",
                          className: "m-4",
                        }),
                        children: (0, n.jsx)(ke, {
                          params: this.state.params,
                          responses: this.state.responses,
                          reviewLevel: this.state.reviewLevel,
                          chatTaskFeatureConfig:
                            this.state.chatTaskFeatureConfig,
                          readOnly: !0,
                        }),
                      })
                    : (0, n.jsx)(p.$, { size: "md", className: "m-4" }),
              });
            }
            render() {
              return (0, n.jsx)("div", {
                className: "pb-20",
                children: (0, n.jsx)("div", {
                  className:
                    "max-w-screen-lg mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                  style: { background: "white" },
                  children: (0, n.jsx)(
                    e,
                    Ce({}, this.props, {
                      titleIcon: "check-circle",
                      handleContinue: () => {
                        this.props.handleContinue();
                      },
                      content: this.renderContent(),
                      canContinue: !0,
                      isLoading: !this.state.params || !this.state.responses,
                    })
                  ),
                }),
              });
            }
            constructor(e) {
              super(e), (this.state = {});
            }
          }
          return (0, F.Zh)("course", { withRef: !0 })(t);
        })(Re),
        Qe = ((e) => {
          class t extends c.Component {
            fetchChatPromptAndResponses(e) {
              var t = this;
              return je(function* () {
                const {
                  id: s,
                  params: n,
                  response: i,
                } = yield (0, te.ZP)(
                  null,
                  `internal/courses/chat-experimental-preview-content/${e}`
                );
                s && n && i && t.setState({ id: s, params: n, response: i });
              })();
            }
            componentDidMount() {
              var e = this;
              return je(function* () {
                const t = o().get(e.props, "contents.chatTaskId");
                yield e.fetchChatPromptAndResponses(t);
              })();
            }
            renderContent() {
              return (0, n.jsx)("div", {
                className:
                  "scaleui scale-theme scale-tailwind justify-center items-center overflow-y-auto",
                children:
                  this.state.id && this.state.params && this.state.response
                    ? (0, n.jsx)(c.Suspense, {
                        fallback: (0, n.jsx)(p.$, {
                          size: "md",
                          className: "m-4",
                        }),
                        children: (0, n.jsx)("div", {
                          className: "h-screen flex-grow overflow-y-auto",
                          children: (0, n.jsx)(
                            Se,
                            {
                              params: this.state.params,
                              response: this.state.response,
                              showOutline: !1,
                            },
                            this.state.id
                          ),
                        }),
                      })
                    : (0, n.jsx)("div", {
                        className: "flex items-center justify-center h-full",
                        children: (0, n.jsx)(p.$, {
                          size: "md",
                          className: "m-4",
                        }),
                      }),
              });
            }
            render() {
              return (0, n.jsx)("div", {
                className: "pb-20",
                children: (0, n.jsx)("div", {
                  className:
                    "max-w-screen-lg mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                  style: { background: "white" },
                  children: (0, n.jsx)(
                    e,
                    Ce({}, this.props, {
                      titleIcon: "check-circle",
                      handleContinue: () => {
                        this.props.handleContinue();
                      },
                      content: this.renderContent(),
                      canContinue: !0,
                      isLoading: !this.state.params || !this.state.response,
                    })
                  ),
                }),
              });
            }
            constructor(e) {
              super(e), (this.state = {});
            }
          }
          return (0, F.Zh)("course")(t);
        })(Re),
        Xe = ((e) => {
          class t extends c.Component {
            componentDidMount() {
              var e = this;
              return je(function* () {
                e.checkResumeScreeningStatus(),
                  e.loadResumeScreeningConfigs(),
                  window.addEventListener(
                    "focus",
                    e.checkResumeScreeningStatus
                  );
              })();
            }
            componentWillUnmount() {
              window.removeEventListener(
                "focus",
                this.checkResumeScreeningStatus
              );
            }
            renderContent() {
              return (0, n.jsx)("div", {
                className: "my-4",
                children: (0, n.jsx)(oe, {
                  isSuccess:
                    this.state.hasValidAttempt ||
                    !!this.state.existingResume ||
                    this.state.isUpdatingResume ||
                    this.state.isScreeningResume,
                  resume: this.state.resume,
                  setResume: this.setResume,
                }),
              });
            }
            renderSectionActions() {
              return this.state.hasValidAttempt
                ? (0, n.jsx)("div", {
                    className: "pb-2 pl-2",
                    children: (0, n.jsxs)(h.zx, {
                      variant: "secondary",
                      disabled: !0,
                      children: [
                        (0, n.jsx)(d.J, { icon: "sync-alt", variant: "white" }),
                        " \xa0 Refresh Status",
                      ],
                    }),
                  })
                : (this.state.loading && this.state.isScreeningResume) ||
                  this.state.isUpdatingResume
                ? (0, n.jsx)("div", {
                    className: "pb-2 pl-2",
                    children: (0, n.jsxs)(h.zx, {
                      variant: "secondary",
                      disabled: !0,
                      children: [
                        (0, n.jsx)(d.J, { icon: "spinner", variant: "white" }),
                        " \xa0 Loading",
                      ],
                    }),
                  })
                : this.state.isScreeningResume && !this.state.hasValidAttempt
                ? (0, n.jsx)("div", {
                    className: "pb-2 pl-2",
                    children: (0, n.jsxs)(h.zx, {
                      onClick: this.checkResumeScreeningStatus,
                      children: [
                        (0, n.jsx)(d.J, { icon: "sync-alt", variant: "white" }),
                        " \xa0 Refresh Status",
                      ],
                    }),
                  })
                : this.state.resume && !this.state.hasValidAttempt
                ? (0, n.jsx)("div", {
                    className: "pb-2 pl-2",
                    children: (0, n.jsxs)(h.zx, {
                      onClick: this.saveAndScreenResume,
                      children: [
                        (0, n.jsx)(d.J, { icon: "upload", variant: "white" }),
                        " \xa0 Submit Resume",
                      ],
                    }),
                  })
                : void 0;
            }
            renderSectionMessage() {
              return (0, n.jsx)("div", {
                className: "pb-2 flex items-center",
                children: this.state.hasValidAttempt
                  ? (0, n.jsx)("span", {
                      className: "ml-4 text-xs text-neutral-500",
                      children:
                        "Processing done! Continue or finish the course",
                    })
                  : this.state.isScreeningResume
                  ? (0, n.jsx)("div", {
                      className: "ml-4 text-xs text-neutral-500",
                      children: this.state.throttleTimeMs
                        ? (0, n.jsx)("span", {
                            className: "text-danger-700 ",
                            children: (0, A._W)(this.state.throttleTimeMs),
                          })
                        : (0, n.jsx)("span", {
                            children: "Resume is being processed ...",
                          }),
                    })
                  : (0, n.jsx)("div", {
                      className: "ml-4 text-xs text-neutral-500",
                      children:
                        this.state.throttleTimeMs &&
                        (0, n.jsx)("span", {
                          className: "text-danger-700 ",
                          children: (0, A._W)(this.state.throttleTimeMs),
                        }),
                    }),
              });
            }
            render() {
              return (0, n.jsx)(
                e,
                Ce({}, this.props, {
                  handleContinue: () =>
                    this.props.handleContinue({
                      screeningResult: this.state.screeningResult,
                    }),
                  content: this.renderContent(),
                  sectionActions: this.renderSectionActions(),
                  sectionMessage: this.renderSectionMessage(),
                  canContinue:
                    this.state.hasValidAttempt ||
                    this.state.isMissingResumeConfig,
                })
              );
            }
            constructor(e) {
              super(e),
                (this.skipResumeScreen = () => {
                  this.setState({
                    isMissingResumeConfig: !0,
                    screeningResult: 1,
                  });
                });
              var t = this;
              this.loadResumeScreeningConfigs = je(function* () {
                const e = t.props.contents.selectedResumeScreeningConfigId;
                e ? t.setState({ resumeConfigId: e }) : t.skipResumeScreen();
              });
              var s = this;
              this.checkResumeScreeningStatus = je(function* () {
                s.setState({ loading: !0 });
                const e = yield I.Z.labeling.getCourseProgress(
                    s.props.course._id
                  ),
                  { courseProgress: t } = e;
                (null === t || void 0 === t ? void 0 : t.resumeProcessStatus) &&
                  t.resumeProcessStatus ===
                    k.ResumeScreeningStatus.Processing &&
                  s.setState({ isScreeningResume: !0 });
                const { certificationSectionScores: n } =
                    null === t || void 0 === t ? void 0 : t.certificationInfo,
                  i = s.props.sectionIndex;
                if (n) {
                  (null === n || void 0 === n ? void 0 : n.length) > i &&
                    s.setState({
                      screeningResult: n[i],
                      isScreeningResume: !1,
                      hasValidAttempt: !0,
                    });
                }
                s.setState({ loading: !1 });
              });
              var n = this;
              this.saveResume = je(function* () {
                n.state.resume &&
                  (yield (0, ae.uv)(n.state.resume),
                  n.setState({
                    isUpdatingResume: !1,
                    existingResume: n.state.resume,
                  }));
              });
              var i = this;
              this.screenResume = je(function* () {
                if (i.state.existingResume && i.state.resumeConfigId) {
                  (yield I.Z.labeling.screenCourseResume(i.props.course._id, {
                    configId: i.state.resumeConfigId,
                    sectionIndex: i.props.sectionIndex,
                  })).arn && i.setState({ isScreeningResume: !0 });
                }
              });
              var a = this;
              (this.saveAndScreenResume = je(function* () {
                a.setState({ loading: !0 }),
                  yield a.saveResume(),
                  a.state.isMissingResumeConfig
                    ? a.setState({ hasValidAttempt: !0, loading: !1 })
                    : (yield a.screenResume(), a.setState({ loading: !1 }));
              })),
                (this.handleOpenResume = () => {
                  this.setState({ isUpdatingResume: !0 });
                }),
                (this.handleCloseResume = () => {
                  this.setState({ isUpdatingResume: !1 }),
                    this.setState({ resume: void 0 });
                }),
                (this.setResume = (e) => {
                  this.setState({ resume: e });
                }),
                (this.state = {
                  hasValidAttempt: !1,
                  throttleTimeMs: null,
                  resume: void 0,
                  loading: !1,
                  isUpdatingResume: !1,
                  isScreeningResume: !1,
                  isMissingResumeConfig: !1,
                });
            }
          }
          return t;
        })(Re),
        et = ((e) => {
          class t extends c.Component {
            renderContent() {
              return (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)(fe, {
                  user: this.props.user,
                  requestedBackgroundCheck: this.state.requestedBackgroundCheck,
                  completedBackgroundCheck: this.state.completedBackgroundCheck,
                  setCompletedBackgroundCheck: (e) => {
                    this.setState({ completedBackgroundCheck: e });
                  },
                }),
              });
            }
            render() {
              return (0, n.jsx)("div", {
                className: "pb-20",
                children: (0, n.jsx)("div", {
                  className:
                    "max-w-screen-sm mx-auto border-solid border border-neutral-200 rounded-lg mb-4",
                  style: { background: "white" },
                  children: (0, n.jsx)(
                    e,
                    Ce({}, this.props, {
                      titleIcon: "user",
                      content: this.renderContent(),
                      canContinue: this.state.completedBackgroundCheck,
                      sectionActions: (0, n.jsx)("div", {}),
                    })
                  ),
                }),
              });
            }
            constructor(e) {
              super(e),
                (this.state = {
                  completedBackgroundCheck: !1,
                  requestedBackgroundCheck: this.props.contents.requiredReport,
                });
            }
          }
          return t;
        })(Re);
      class tt extends c.Component {
        render() {
          const e = Ce({}, this.props, { ref: this.props.forwardRef });
          switch (this.props.type) {
            case k.CourseSectionType.Scenario:
              return (0, n.jsx)(Ze, Ce({}, e));
            case k.CourseSectionType.InstructionList:
              return (0, n.jsx)(Fe, Ce({}, e));
            case k.CourseSectionType.InstructionObject:
              return (0, n.jsx)(Be, Ce({}, e));
            case k.CourseSectionType.RichText:
              return (0, n.jsx)(ze, Ce({}, e));
            case k.CourseSectionType.Video:
              return (0, n.jsx)(qe, Ce({}, e));
            case k.CourseSectionType.MultipleChoice:
              return (0, n.jsx)(_e, Ce({}, e));
            case k.CourseSectionType.TextResponse:
              return (0, n.jsx)(He, Ce({}, e));
            case k.CourseSectionType.PromptSelectionResponse:
              return (0, n.jsx)(Ue, Ce({}, e));
            case k.CourseSectionType.TextResponseRewrite:
              return (0, n.jsx)($e, Ce({}, e));
            case k.CourseSectionType.Iframe:
              return (0, n.jsx)(Ge, Ce({}, e));
            case k.CourseSectionType.AccountVerification:
              return (0, n.jsx)(Je, Ce({}, e));
            case k.CourseSectionType.Confirm:
              return (0, n.jsx)(We, Ce({}, e));
            case k.CourseSectionType.Rating:
              return (0, n.jsx)(Ke, Ce({}, e));
            case k.CourseSectionType.ScheduleInterview:
              return (0, n.jsx)(Ve, Ce({}, e));
            case k.CourseSectionType.ChatTaskReadOnly:
              return (0, n.jsx)(Ye, Ce({}, e));
            case k.CourseSectionType.ChatExperimentalReadOnly:
              return (0, n.jsx)(Qe, Ce({}, e));
            case k.CourseSectionType.ResumeScreening:
              return (0, n.jsx)(Xe, Ce({}, e));
            case k.CourseSectionType.BackgroundCheck:
              return (0, n.jsx)(et, Ce({}, e));
            default:
              return null;
          }
        }
      }
      var st = (0, c.forwardRef)((e, t) =>
        (0, n.jsx)(tt, Ce({}, e, { forwardRef: t }))
      );
    },
    611716: function (e, t, s) {
      var n = s(824246),
        i = s(138944),
        a = s(827378),
        r = s(722030),
        o = s(416534),
        c = s(926263);
      function l(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              l(e, t, s[t]);
            });
        }
        return e;
      }
      t.Z = ({
        className: e,
        file: t,
        onFileChanged: s,
        isSuccess: l,
        hasExistingResume: h,
        extractionError: u,
      }) => {
        const [p, m] = a.useState();
        (0, a.useEffect)(() => {
          u && m(u);
        }, [u]);
        const [x, g] = a.useState(!1),
          v = a.useCallback(
            (e, t) => (
              m(void 0),
              s(void 0),
              g(!0),
              t.length > 1
                ? m("Please upload only one file")
                : t.length
                ? m("Please upload files in .pdf format")
                : (s(e[0]), void g(!1))
            ),
            [s]
          ),
          { getRootProps: f, getInputProps: b } = (0, c.u)({
            onDrop: v,
            multiple: !1,
            accept: ".pdf",
          }),
          y = () =>
            (0, n.jsxs)("div", {
              className: "flex flex-col items-center justify-center",
              children: [
                (0, n.jsx)("div", {
                  className: "pl-12",
                  children: (0, n.jsx)("img", {
                    className: "w-auto sm:h-40 max-sm:h-32",
                    src: "/static/img/outlier/3d-resume.svg",
                  }),
                }),
                l
                  ? (0, n.jsx)("h1", {
                      className: "text-2xl font-medium text-neutral-700 my-4",
                      children: "Thank you!",
                    })
                  : h
                  ? (0, n.jsx)("h1", {
                      className: "text-2xl font-medium text-neutral-700 my-4",
                      children: "Processing...",
                    })
                  : (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("h1", {
                          className:
                            "text-2xl font-medium text-neutral-700 my-4",
                          children: "Upload your Resume",
                        }),
                        (0, n.jsx)("p", {
                          className:
                            "text-base font-normal text-grey-200 sm:w-[35rem] leading-6 mb-2",
                          children:
                            "We need this information to match you with the best projects.",
                        }),
                      ],
                    }),
              ],
            });
        return (0, n.jsx)("div", {
          className: (0, i.default)(
            "rounded w-full h-90 gap-4 sm:p-8 max-sm:p-4 flex flex-col items-center justify-center",
            e
          ),
          children: (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className:
                "flex flex-col justify-center items-center w-full p-5 text-center",
              children: [
                (0, n.jsx)(y, {}),
                l
                  ? (0, n.jsx)("p", {
                      className: "text-sm font-bold leading-5 pt-2 pb-4",
                      children:
                        "Thank you for submitting your resume. Please be patient while we process it.",
                    })
                  : (0, n.jsx)(
                      "div",
                      d({}, f(), {
                        children:
                          t && !p
                            ? (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col items-center justify-center",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "flex flex-row item-center justify-center pt-2 gap-4",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "flex flex-col item-center justify-center text-sm font-medium text-neutral-700",
                                      children: t.name,
                                    }),
                                  }),
                                  (0, n.jsx)(r.$, {
                                    size: "md",
                                    className: "my-4",
                                  }),
                                ],
                              })
                            : (0, n.jsx)("div", {
                                className:
                                  "item-center justify-center p-3 mb-4",
                                children:
                                  (!x && !h) || p
                                    ? (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          (0, n.jsx)("input", d({}, b())),
                                          (0, n.jsx)(o.zx, {
                                            size: "lg",
                                            className:
                                              "leading-loose p-3 px-10 mb-2 rounded-md text-sm text-center",
                                            children: "Upload Resume",
                                          }),
                                          (0, n.jsx)("p", {
                                            className:
                                              "text-xs text-neutral-500 py-2 text-center",
                                            children:
                                              "Please upload a PDF file. The file should not contain images.",
                                          }),
                                          p &&
                                            !p.includes("File language") &&
                                            (0, n.jsx)("p", {
                                              className:
                                                "mt-4 mb-2 text-danger-500",
                                              children:
                                                "Please try again or upload a different file.",
                                            }),
                                          p &&
                                            p.includes("File language") &&
                                            (0, n.jsx)("p", {
                                              className:
                                                "mt-4 mb-2 text-danger-500",
                                              children:
                                                "We detected that this resume is not in English. Please ensure it is in English and reupload.",
                                            }),
                                        ],
                                      })
                                    : (0, n.jsx)(r.$, {
                                        size: "md",
                                        className: "m-4",
                                      }),
                              }),
                      })
                    ),
                (0, n.jsx)("p", {
                  className:
                    "text-[10px] text-neutral-400 sm:w-[35rem] text-center",
                  children:
                    "PLEASE NOTE: We collect, retain and use personal data for our professional business purposes, including notifying you of opportunities that may be of interest and sharing with our affiliates. We limit the personal data we collect to that which we believe is appropriate and necessary to manage applicants' needs, provide our services, and comply with applicable laws. Any information we collect in connection with your application will be treated in accordance with our internal policies and programs designed to protect personal data.",
                }),
              ],
            }),
          }),
        });
      };
    },
    595334: function (e, t, s) {
      s.d(t, {
        n: function () {
          return r;
        },
      });
      var n = s(236125);
      function i(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      const a = { showRemainingTriesPopup: !1 },
        r = (0, n.Ue)((e) =>
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(s);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  i(e, t, s[t]);
                });
            }
            return e;
          })({}, a, {
            setShowRemainingTriesPopup: (t) => {
              e(() => ({ showRemainingTriesPopup: t }));
            },
          })
        );
    },
    285563: function (e, t, s) {
      var n = s(824246),
        i = s(827378),
        a = s(776845),
        r = s(916353),
        o = s(339389),
        c = s(416534),
        l = s(138944);
      t.Z = ({ ratingOnSubmit: e, courseGrade: t, courseStatus: s }) => {
        const { 0: d, 1: h } = (0, i.useState)(void 0),
          { 0: u, 1: p } = (0, i.useState)(""),
          m = {
            1: "Terrible",
            2: "Bad",
            3: "Just ok",
            4: "Pretty good",
            5: "Perfect",
          },
          x = {
            1: "I would have been better off skipping this module",
            2: "Learning through this module was very challenging",
            3: "Learning through this module was somewhat challenging",
            4: "Learning through this module was easy, but could be improved with minor changes",
            5: "Learning through this module was easy and delightful",
          };
        return (0, n.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center text-center mt-4",
          children: [
            void 0 !== t &&
              (0, n.jsx)("div", {
                className: "p-4 mb-8",
                children: (0, n.jsxs)(a.ZT.H2, {
                  children: [
                    "You ",
                    s,
                    "pass" === s && "ed",
                    " with a score of ",
                    (100 * t).toFixed(2),
                    "%",
                  ],
                }),
              }),
            (0, n.jsx)(a.ZT.H3, { children: "Module Survey" }),
            (0, n.jsxs)("div", {
              className: "mt-8",
              children: [
                (0, n.jsx)(a.ZT.H5, {
                  children: "How satisfied are you with this module?",
                }),
                (0, n.jsx)("div", {
                  className: "grid grid-cols-5 mt-4",
                  children: [1, 2, 3, 4, 5].map((e) =>
                    (0, n.jsx)(
                      "div",
                      {
                        children: (0, n.jsx)(r.u, {
                          text: x[e],
                          target: (0, n.jsxs)(
                            "div",
                            {
                              className: (0, l.default)([
                                "flex flex-col items-center justify-center text-lg font-semibold border border-neutral-300",
                                "cursor-pointer hover:bg-neutral-100 bg-neutral-0 aspect-square border-solid",
                                { "bg-neutral-200": e === d },
                              ]),
                              onClick: () => h(e),
                              children: [
                                e,
                                (0, n.jsx)(a.ZT.Subtitle3, {
                                  className: "mt-2",
                                  children: m[e],
                                }),
                              ],
                            },
                            e
                          ),
                        }),
                      },
                      e
                    )
                  ),
                }),
                (0, n.jsxs)("div", {
                  className: "mt-16",
                  children: [
                    (0, n.jsx)(a.ZT.H5, {
                      children:
                        "Please share any additional comments or suggestions regarding your rating.",
                    }),
                    (0, n.jsx)(o.K, {
                      className: "mt-4",
                      value: u,
                      required: !1,
                      onChange: (e) => p(e.target.value),
                    }),
                  ],
                }),
                (0, n.jsx)(c.zx, {
                  className: "mt-4",
                  disabled: !d,
                  onClick: () => e(d, u),
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      };
    },
    114200: function (e, t, s) {
      s.d(t, {
        uv: function () {
          return i;
        },
        Qu: function () {
          return a;
        },
        wt: function () {
          return r;
        },
        t$: function () {
          return o;
        },
      });
      var n = s(285556);
      const i = (e) => {
          const t = new FormData();
          return (
            t.append("file", e),
            (0, n.ZP)(null, "/internal/skills/entry/parse_resume", {
              method: "POST",
              body: t,
            })
          );
        },
        a = (e) => e.filter((e) => "country" === e.name)[0],
        r = (e) => e.filter((e) => "state" === e.name)[0],
        o =
          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjNDI4NUY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNy42NCA5LjJjMC0uNjMtLjA2LTEuMjUtLjE2LTEuODRIOXYzLjQ5aDQuODRhNC4xNCA0LjE0IDAgMCAxLTEuOCAyLjcxdjIuMjZoMi45MmE4Ljc4IDguNzggMCAwIDAgMi42OC02LjYyeiIvPjxwYXRoIGZpbGw9IiMzNEE4NTMiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMThhOC42IDguNiAwIDAgMCA1Ljk2LTIuMThsLTIuOTEtMi4yNmE1LjQgNS40IDAgMCAxLTguMDktMi44NWgtM3YyLjMzQTkgOSAwIDAgMCA5IDE4eiIvPjxwYXRoIGZpbGw9IiNGQkJDMDUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMuOTYgMTAuNzFhNS40MSA1LjQxIDAgMCAxIDAtMy40MlY0Ljk2aC0zYTkgOSAwIDAgMCAwIDguMDhsMy0yLjMzeiIvPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMy41OGMxLjMyIDAgMi41LjQ1IDMuNDQgMS4zNWwyLjU4LTIuNTlBOSA5IDAgMCAwIC45NiA0Ljk1bDMgMi4zNEE1LjM2IDUuMzYgMCAwIDEgOSAzLjU4eiIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDE4IDAgMTggMTggMCAxOCIvPjwvZz48L3N2Zz4=)";
    },
    977608: function (e, t, s) {
      s.d(t, {
        _2: function () {
          return p;
        },
        B: function () {
          return u;
        },
        jK: function () {
          return m;
        },
        wq: function () {
          return h;
        },
      });
      var n = s(298784),
        i = s.n(n);
      const a = /\b[0-9a-f]{24}\b/g,
        r =
          /\b[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+(\+outlier)?)+\b/g,
        o =
          /^arn:aws:states:[a-z0-9-]+:[0-9]{12}:execution:[a-zA-Z0-9-_]*:[a-zA-Z0-9-_]*$/,
        c = /\b(?:scale-cds:\/\/)?([0-9a-f]{24}\/[A-Za-z0-9_-]{15})(?:#.+)?\b/,
        l = /^[nermh]-[a-zA-Z0-9]{21}/,
        d = /^DIS-[a-zA-Z0-9]{16}/;
      function h(e) {
        return x(e, a);
      }
      function u(e) {
        return x(e, r);
      }
      function p(e) {
        var t, s, n, i;
        return null !==
          (i =
            null !==
              (n =
                null !==
                  (s =
                    null !== (t = e.match(a)) && void 0 !== t
                      ? t
                      : e.match(o)) && void 0 !== s
                  ? s
                  : e.match(c)) && void 0 !== n
              ? n
              : e.match(l)) && void 0 !== i
          ? i
          : e.match(d);
      }
      function m(e) {
        if (e.match(c)) {
          const t = `scale-cds://${
            (function (e) {
              return x(e, c);
            })(e)[1]
          }`;
          return t;
        }
        return e.match(l)
          ? e
          : e.match(a)
          ? h(e)[0]
          : e.match(o) || e.match(d)
          ? e
          : void 0;
      }
      function x(e, t) {
        const s = e.match(t) || [];
        return i().uniq(s);
      }
    },
    287216: function (e, t, s) {
      var n = s(827378);
      function i(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }
      t.Z = (e = new Set()) => {
        const { 0: t, 1: s } = (0, n.useState)(e),
          a = (0, n.useMemo)(
            () => ({
              add: (e) => s((t) => new Set([...Array.from(t), e])),
              remove: (e) =>
                s((t) => new Set(Array.from(t).filter((t) => t !== e))),
              toggle: (e) =>
                s((t) =>
                  t.has(e)
                    ? new Set(Array.from(t).filter((t) => t !== e))
                    : new Set([...Array.from(t), e])
                ),
              set: (e) => s(e),
              reset: () => s(e),
            }),
            [s]
          ),
          r = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(s);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  i(e, t, s[t]);
                });
            }
            return e;
          })({ has: (0, n.useCallback)((e) => t.has(e), [t]) }, a);
        return [t, r];
      };
    },
    492181: function (e, t, s) {
      var n = s(824246);
      t.Z = () =>
        (0, n.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 315,
          height: 179,
          fill: "none",
          children: [
            (0, n.jsxs)("g", {
              clipPath: "url(#a)",
              children: [
                (0, n.jsx)("path", {
                  fill: "#E6E6E6",
                  d: "M237.443 168.441h-51.084l1.732-22.531h47.621l1.731 22.531Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#E6E6E6",
                  d: "M240.906 165.842h-57.144v5.199h57.144v-5.199Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#3F3D56",
                  d: "M309.74.755H114.496a5.195 5.195 0 0 0-5.195 5.2v119.157h205.634V5.955a5.205 5.205 0 0 0-3.207-4.804 5.19 5.19 0 0 0-1.988-.396Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#E6E6E6",
                  d: "M109.301 125.112v19.498a5.205 5.205 0 0 0 1.521 3.677 5.188 5.188 0 0 0 3.674 1.523H309.74a5.191 5.191 0 0 0 3.673-1.523 5.204 5.204 0 0 0 1.522-3.677v-19.498H109.301ZM304.978 11.588H119.691v103.991h185.287V11.588Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#3F3D56",
                  d: "M212.334 142.444a5.198 5.198 0 0 0 5.195-5.2 5.197 5.197 0 0 0-5.195-5.199 5.197 5.197 0 0 0-5.195 5.199c0 2.872 2.326 5.2 5.195 5.2Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#fff",
                  d: "M125.468 15.98a.987.987 0 1 0-.001-1.973.987.987 0 0 0 .001 1.973ZM129.21 15.98a.986.986 0 1 0 0-1.972.986.986 0 0 0 0 1.972ZM132.952 15.98a.986.986 0 1 0 0-1.972.986.986 0 0 0 0 1.972ZM299.638 18.346H124.482v87.336h175.156V18.346Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#E6E6E6",
                  d: "M136.125 31.63a.618.618 0 0 0-.619.62v31.327a.62.62 0 0 0 .619.62h36.146a.62.62 0 0 0 .619-.62V32.25a.62.62 0 0 0-.619-.62h-36.146ZM194.162 31.731a.618.618 0 0 0-.62.62v31.226a.62.62 0 0 0 .62.62h36.03a.62.62 0 0 0 .619-.62V32.351a.62.62 0 0 0-.619-.62h-36.03ZM251.589 31.404a.618.618 0 0 0-.618.62v31.553a.62.62 0 0 0 .618.62h36.406a.618.618 0 0 0 .619-.62V32.024a.625.625 0 0 0-.619-.62h-36.406ZM136.786 79.704a1.281 1.281 0 0 0 0 2.563h33.984a1.281 1.281 0 0 0 0-2.563h-33.984Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#3B76A5",
                  d: "M136.786 85.799a1.281 1.281 0 0 0 0 2.563h15.301a1.281 1.281 0 0 0 0-2.563h-15.301Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#E6E6E6",
                  d: "M195.446 79.704a1.28 1.28 0 0 0 0 2.563h33.984a1.281 1.281 0 0 0 0-2.563h-33.984Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#3B76A5",
                  d: "M195.446 85.799a1.281 1.281 0 0 0 0 2.563h15.302a1.277 1.277 0 0 0 1.277-1.282 1.28 1.28 0 0 0-1.277-1.281h-15.302Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#E6E6E6",
                  d: "M252.64 79.704a1.281 1.281 0 0 0 0 2.563h33.984a1.281 1.281 0 0 0 0-2.563H252.64ZM136.786 73.41a1.28 1.28 0 0 0 0 2.562h33.984a1.282 1.282 0 0 0 0-2.563h-33.984ZM195.446 73.41a1.28 1.28 0 0 0 0 2.563h33.984a1.282 1.282 0 0 0 0-2.564h-33.984ZM252.64 73.41a1.28 1.28 0 0 0 0 2.562h33.984a1.282 1.282 0 0 0 0-2.563H252.64Z",
                }),
                (0, n.jsx)("path", {
                  fill: "#3B76A5",
                  d: "M252.64 85.799a1.281 1.281 0 0 0 0 2.563h15.301a1.281 1.281 0 0 0 0-2.563H252.64Z",
                }),
              ],
            }),
            (0, n.jsx)("path", {
              fill: "#3F3D56",
              d: "M164.748 72.351h-62.866V71H73.377v1.351H10.252c-.558 0-1.111.115-1.627.338-.516.223-.985.55-1.38.961-.394.412-.708.901-.921 1.44A4.601 4.601 0 0 0 6 76.785v89.779c0 1.176.448 2.304 1.245 3.136A4.164 4.164 0 0 0 10.252 171h154.496a4.167 4.167 0 0 0 3.007-1.299 4.536 4.536 0 0 0 1.245-3.136V76.786c0-.582-.11-1.159-.324-1.697a4.455 4.455 0 0 0-.921-1.439 4.248 4.248 0 0 0-1.38-.961 4.103 4.103 0 0 0-1.627-.338Z",
            }),
            (0, n.jsx)("path", { fill: "#fff", d: "M163 81H12v87h151V81Z" }),
            (0, n.jsx)("path", {
              fill: "#3B76A5",
              d: "M87.5 77c.828 0 1.5-.448 1.5-1s-.672-1-1.5-1-1.5.448-1.5 1 .672 1 1.5 1Z",
            }),
            (0, n.jsx)("path", {
              fill: "#3F3D56",
              d: "M57 113h-4a1.002 1.002 0 0 1-1-1v-4a1.003 1.003 0 0 1 1-1h4a1.002 1.002 0 0 1 1 1v4a1.003 1.003 0 0 1-1 1Zm-4-5.333a.335.335 0 0 0-.333.333v4c0 .088.035.173.097.236a.335.335 0 0 0 .236.097h4a.335.335 0 0 0 .333-.333v-4a.335.335 0 0 0-.333-.333h-4Z",
            }),
            (0, n.jsx)("path", { fill: "#3F3D56", d: "M121 112H52v1h69v-1Z" }),
            (0, n.jsx)("path", { fill: "#3B76A5", d: "M119 130h-16v5h16v-5Z" }),
            (0, n.jsx)("path", {
              fill: "#3F3D56",
              d: "M120.073 133h-15.146a.895.895 0 0 1-.655-.293A1.042 1.042 0 0 1 104 132v-4c0-.265.098-.519.272-.707a.895.895 0 0 1 .655-.293h15.146c.246 0 .481.106.655.293.174.188.272.442.272.707v4c0 .265-.098.519-.272.707a.895.895 0 0 1-.655.293Zm-15.146-5.333a.298.298 0 0 0-.218.097.35.35 0 0 0-.091.236v4a.35.35 0 0 0 .091.236.298.298 0 0 0 .218.097h15.146c.082 0 .16-.035.218-.097a.35.35 0 0 0 .091-.236v-4a.35.35 0 0 0-.091-.236.298.298 0 0 0-.218-.097h-15.146Z",
            }),
            (0, n.jsx)("path", {
              fill: "#000",
              d: "M129 168H12V87l117 81Z",
              opacity: 0.1,
            }),
            (0, n.jsx)("path", {
              fill: "#3F3D56",
              d: "M172.95 166.304h-14.728v-1.088a.215.215 0 0 0-.13-.2.22.22 0 0 0-.08-.016h-5.05a.22.22 0 0 0-.08.016.215.215 0 0 0-.13.2v1.088h-3.156v-1.088a.218.218 0 0 0-.13-.2.225.225 0 0 0-.081-.016h-5.049a.225.225 0 0 0-.081.016.213.213 0 0 0-.114.117.231.231 0 0 0-.016.083v1.088h-3.156v-1.088a.215.215 0 0 0-.13-.2.22.22 0 0 0-.08-.016h-5.05a.22.22 0 0 0-.08.016.215.215 0 0 0-.13.2v1.088h-3.156v-1.088a.218.218 0 0 0-.13-.2.225.225 0 0 0-.081-.016h-5.049a.225.225 0 0 0-.081.016.224.224 0 0 0-.114.117.231.231 0 0 0-.016.083v1.088h-3.156v-1.088a.215.215 0 0 0-.13-.2.215.215 0 0 0-.08-.016h-5.05a.22.22 0 0 0-.08.016.215.215 0 0 0-.13.2v1.088h-3.156v-1.088a.218.218 0 0 0-.13-.2.225.225 0 0 0-.081-.016h-5.049a.225.225 0 0 0-.081.016.224.224 0 0 0-.114.117.231.231 0 0 0-.016.083v1.088h-3.156v-1.088a.215.215 0 0 0-.13-.2.215.215 0 0 0-.08-.016H66.697a.222.222 0 0 0-.08.016.214.214 0 0 0-.13.2v1.088h-3.156v-1.088a.22.22 0 0 0-.13-.2.222.222 0 0 0-.08-.016h-5.05a.222.222 0 0 0-.08.016.215.215 0 0 0-.13.2v1.088h-3.156v-1.088a.219.219 0 0 0-.13-.2.222.222 0 0 0-.08-.016h-5.05a.222.222 0 0 0-.081.016.213.213 0 0 0-.114.117.22.22 0 0 0-.016.083v1.088h-3.156v-1.088a.219.219 0 0 0-.13-.2.222.222 0 0 0-.08-.016h-5.05a.221.221 0 0 0-.08.016.213.213 0 0 0-.114.117.219.219 0 0 0-.016.083v1.088h-3.156v-1.088a.219.219 0 0 0-.13-.2.222.222 0 0 0-.08-.016h-5.05a.221.221 0 0 0-.081.016.213.213 0 0 0-.114.117.219.219 0 0 0-.016.083v1.088h-3.156v-1.088a.221.221 0 0 0-.062-.153.213.213 0 0 0-.068-.047.222.222 0 0 0-.08-.016h-5.05a.222.222 0 0 0-.08.016.215.215 0 0 0-.13.2v1.088h-3.156v-1.088a.221.221 0 0 0-.062-.153.215.215 0 0 0-.068-.047.222.222 0 0 0-.08-.016h-5.05a.222.222 0 0 0-.081.016.213.213 0 0 0-.114.117.221.221 0 0 0-.016.083v1.088H5.05c-.663 0-1.32.134-1.933.394-.612.26-1.17.641-1.638 1.122a5.193 5.193 0 0 0-1.095 1.68A5.289 5.289 0 0 0 0 171.481v2.341c0 1.374.532 2.691 1.479 3.662A4.987 4.987 0 0 0 5.049 179H172.95a4.95 4.95 0 0 0 1.933-.394 5.058 5.058 0 0 0 1.638-1.122 5.197 5.197 0 0 0 1.095-1.68 5.309 5.309 0 0 0 .384-1.982v-2.341c0-.68-.131-1.353-.384-1.981a5.197 5.197 0 0 0-1.095-1.68 5.043 5.043 0 0 0-1.638-1.122 4.95 4.95 0 0 0-1.933-.394ZM127.089 138H46.911a.9.9 0 0 1-.644-.273.943.943 0 0 1-.267-.658v-34.138c0-.247.096-.483.267-.658a.9.9 0 0 1 .644-.273h80.178a.9.9 0 0 1 .644.273.94.94 0 0 1 .267.658v34.138a.94.94 0 0 1-.267.658.9.9 0 0 1-.644.273Zm-80.178-35.379a.301.301 0 0 0-.215.091.313.313 0 0 0-.089.219v34.138c0 .082.032.161.09.219a.301.301 0 0 0 .214.091h80.178c.08 0 .158-.033.215-.091a.322.322 0 0 0 .089-.219v-34.138a.322.322 0 0 0-.089-.219.303.303 0 0 0-.215-.091H46.911Z",
            }),
            (0, n.jsx)("path", {
              fill: "#3F3D56",
              d: "M57 123h-4a1.002 1.002 0 0 1-1-1v-4a1.003 1.003 0 0 1 1-1h4a1.002 1.002 0 0 1 1 1v4a1.003 1.003 0 0 1-1 1Zm-4-5.333a.335.335 0 0 0-.333.333v4c0 .088.035.173.097.236a.335.335 0 0 0 .236.097h4a.335.335 0 0 0 .333-.333v-4a.335.335 0 0 0-.333-.333h-4Z",
            }),
            (0, n.jsx)("path", { fill: "#3F3D56", d: "M121 121H52v2h69v-2Z" }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "a",
                children: (0, n.jsx)("path", {
                  fill: "#fff",
                  d: "M109 0h206v172H109z",
                }),
              }),
            }),
          ],
        });
    },
  },
]);
