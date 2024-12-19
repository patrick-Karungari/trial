"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92794],
  {
    384193: function (e, t, n) {
      n.d(t, {
        J: function () {
          return c;
        },
      });
      var i = n(824246),
        r = n(827378),
        o = n(29538),
        s = n(599789),
        a = n(775143),
        l = n(507099);
      function u(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const c = ({
        user: e,
        setCurrentStepSubmission: t,
        setIsCurrentStepReadyForSubmission: n,
        fromOnboarding: c = !1,
        currentStepState: d,
        remediationState: m,
      }) => {
        const { 0: p, 1: f } = (0, r.useState)(!1),
          { 0: v, 1: h } = (0, r.useState)(""),
          { 0: x, 1: y } = (0, r.useState)(void 0),
          { 0: b, 1: j } = (0, r.useState)(!1),
          { 0: g, 1: N } = (0, r.useState)(!0),
          S = (function () {
            var e,
              t =
                ((e = function* () {
                  N(!0);
                  const e = yield (0, a.fetchApi)(
                    "/worker/profile/linkedin_details",
                    { method: "GET" }
                  ).then(a.handleErrorsAndJsonify);
                  f(
                    !!(null === e || void 0 === e
                      ? void 0
                      : e.linkedinVanityName)
                  ),
                    h(
                      null === e || void 0 === e ? void 0 : e.linkedinVanityName
                    ),
                    y(
                      null === e || void 0 === e
                        ? void 0
                        : e.linkedinAuthenticatedAt
                    ),
                    N(!1);
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var o = e.apply(t, n);
                    function s(e) {
                      u(o, i, r, s, a, "next", e);
                    }
                    function a(e) {
                      u(o, i, r, s, a, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return (
          (0, r.useEffect)(() => {
            S();
          }, []),
          (0, r.useEffect)(() => {
            const e =
              x &&
              (null === m || void 0 === m ? void 0 : m.startedAt) &&
              x > (null === m || void 0 === m ? void 0 : m.startedAt);
            j(!!e);
            (!p && !b && !c) || (p && (b || c))
              ? (t({ stepType: o.s0.CONNECT_LINKEDIN, vanityName: v }), n(!0))
              : n(!1);
          }, [d, p, x, b, m, t, n, v, c]),
          (0, i.jsx)(i.Fragment, {
            children:
              !g &&
              (0, i.jsxs)("div", {
                className: "pb-4 space-y-4",
                children: [
                  (0, i.jsx)("div", {
                    className: "text-sm",
                    children: c
                      ? ""
                      : p
                      ? "Make sure your LinkedIn account is up to date."
                      : "If you have a LinkedIn account, please connect it here.",
                  }),
                  (0, i.jsx)(l.Z, {
                    verified: (b || c) && p,
                    redirectUrl: window.location.href,
                    userId: null === e || void 0 === e ? void 0 : e.id,
                    platform: s.TaskingPlatform.Outlier,
                    required: !1,
                    vanityName: (b || c) && p ? v : void 0,
                    fromOnboarding: c,
                  }),
                ],
              }),
          })
        );
      };
    },
    445487: function (e, t, n) {
      n.d(t, {
        uH: function () {
          return ae;
        },
        tk: function () {
          return ue;
        },
      });
      var i = n(824246),
        r = n(827378),
        o = n(713222),
        s = n(722030),
        a = n(29538);
      var l = ({ stepTypes: e, currentStepIndex: t, isLoading: n }) => {
          const l = (0, r.useCallback)(
              (e) =>
                e > t
                  ? "border"
                  : e === t
                  ? "bg-primary-50 border-2"
                  : e < t
                  ? "bg-success-50 border-neutral-500 border"
                  : "neutral",
              [t]
            ),
            u = (0, r.useCallback)(
              (e) =>
                e > t
                  ? "font-light"
                  : e === t
                  ? "font-bold"
                  : e < t
                  ? "font-light text-neutral-500"
                  : "neutral",
              [t]
            ),
            c = (0, r.useCallback)(
              (e) =>
                e > t || e === t
                  ? (e + 1).toString()
                  : e < t
                  ? (0, i.jsx)(o.J, { icon: "check" })
                  : "neutral",
              [t]
            );
          return (null === e || void 0 === e ? void 0 : e.length)
            ? n
              ? (0, i.jsx)("div", {
                  className: "flex justify-center items-center",
                  children: (0, i.jsx)(s.$, { size: "md" }),
                })
              : (0, i.jsx)("div", {
                  className: "scaleui outlier-theme scale-tailwind",
                  children: (0, i.jsx)("div", {
                    className: "flex flex-col items-start gap-10",
                    children: e.map((e, t) =>
                      (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(
                          "div",
                          {
                            className:
                              "flex flex-row justify-center items-center gap-2",
                            children: [
                              (0, i.jsx)("div", {
                                className: `flex justify-center items-center rounded-full w-8 h-8 ${l(
                                  t
                                )}`,
                                children: (0, i.jsx)("div", {
                                  className: `${u(t)}`,
                                  children: c(t),
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: `max-md:hidden text-center text-sm ${u(
                                  t
                                )}`,
                                children: (0, a.mI)(e),
                              }),
                            ],
                          },
                          t
                        ),
                      })
                    ),
                  }),
                })
            : null;
        },
        u = n(185272);
      const c = ({
        setIsCurrentStepReadyForSubmission: e,
        setCurrentStepSubmission: t,
      }) => {
        const { 0: n, 1: o } = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            n && (t({ stepType: a.s0.PRIVACY_POLICY }), e(!0)), e(n);
          }, [n, t, e]),
          (0, i.jsx)("div", {
            className: "flex flex-col justify-between h-full",
            children: (0, i.jsx)("div", {
              children: (0, i.jsxs)("div", {
                className: "pb-8 space-y-4 h-full w-full",
                children: [
                  (0, i.jsxs)("div", {
                    className: "text-sm",
                    children: [
                      "Your privacy is important to us. Please read the",
                      " ",
                      (0, i.jsx)("a", {
                        className: "underline",
                        href: "https://outlier.ai/legal/privacy-policy",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Privacy Policy",
                      }),
                      " ",
                      "carefully to understand how we will collect, use, and disclose your personal information, and what choices you have with respect to your personal information.",
                    ],
                  }),
                  (0, i.jsx)(u.X, {
                    className: "pt-4",
                    label:
                      "I have read and agree to the Outlier Privacy Policy.",
                    checked: n,
                    onChange: (e) => o(e.target.checked),
                  }),
                ],
              }),
            }),
          })
        );
      };
      var d = n(456552),
        m = n(416534),
        p = n(792739),
        f = n(572111),
        v = n.n(f),
        h = n(599789),
        x = n(986004),
        y = n(775143),
        b = n(298784),
        j = n.n(b),
        g = n(285556);
      function N(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const S = (e) => {
        return (0, d.useQuery)(
          "useGetRemediationState",
          ((t = function* () {
            return yield (0, g.ZP)(null, "/internal/remediation/state", {
              method: "GET",
            });
          }),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, r) {
              var o = t.apply(e, n);
              function s(e) {
                N(o, i, r, s, a, "next", e);
              }
              function a(e) {
                N(o, i, r, s, a, "throw", e);
              }
              s(void 0);
            });
          }),
          {
            refetchOnWindowFocus: !1,
            onSuccess: e,
            onError: (e) => (0, g.vj)(e, { handleHttp: !0 }),
          }
        );
        var t;
      };
      function I(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const C = (e) => {
        const t = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          "useSaveRemediationStep",
          (function () {
            var e,
              t =
                ((e = function* (e) {
                  const t = new FormData();
                  return (
                    t.append("step", JSON.stringify(e.step)),
                    e.file && t.append("file", e.file),
                    yield (0, g.ZP)(null, "/internal/remediation/save_step", {
                      method: "POST",
                      body: t,
                    })
                  );
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var o = e.apply(t, n);
                    function s(e) {
                      I(o, i, r, s, a, "next", e);
                    }
                    function a(e) {
                      I(o, i, r, s, a, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          {
            onSuccess: () => {
              t.invalidateQueries("useGetRemediationState"), e();
            },
            onError: (e) => (0, g.vj)(e, { handleHttp: !0 }),
          }
        );
      };
      function w(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const E = (e) => {
        const t = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          "useStartRemediation",
          ((n = function* () {
            return (0, g.ZP)(null, "/internal/remediation/start", {
              method: "POST",
            });
          }),
          function () {
            var e = this,
              t = arguments;
            return new Promise(function (i, r) {
              var o = n.apply(e, t);
              function s(e) {
                w(o, i, r, s, a, "next", e);
              }
              function a(e) {
                w(o, i, r, s, a, "throw", e);
              }
              s(void 0);
            });
          }),
          {
            onSuccess: () => {
              t.invalidateQueries("useGetRemediationState"), e();
            },
            onError: (e) => (0, g.vj)(e, { handleHttp: !0 }),
          }
        );
        var n;
      };
      function L(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const T = (e) => {
        const t = (0, d.useQueryClient)();
        return (0, d.useMutation)(
          "useUpdateCurrentStep",
          (function () {
            var e,
              t =
                ((e = function* (e) {
                  return yield (0, g.ZP)(
                    null,
                    "/internal/remediation/update_current_step",
                    { method: "POST", body: e }
                  );
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var o = e.apply(t, n);
                    function s(e) {
                      L(o, i, r, s, a, "next", e);
                    }
                    function a(e) {
                      L(o, i, r, s, a, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          {
            onSuccess: () => {
              t.invalidateQueries("useGetRemediationState"), e();
            },
            onError: (e) => (0, g.vj)(e, { handleHttp: !0 }),
          }
        );
      };
      function O(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const M = (e) => {
        return (0, d.useQuery)(
          "useGetFirstApprovedVerificationIdClass",
          ((t = function* () {
            return yield (0, g.ZP)(
              null,
              "internal/worker/verifications/first_approved_id_class",
              { method: "GET" }
            );
          }),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, r) {
              var o = t.apply(e, n);
              function s(e) {
                O(o, i, r, s, a, "next", e);
              }
              function a(e) {
                O(o, i, r, s, a, "throw", e);
              }
              s(void 0);
            });
          }),
          {
            refetchOnWindowFocus: !1,
            onSuccess: e,
            onError: (e) => (0, g.vj)(e, { handleHttp: !0 }),
          }
        );
        var t;
      };
      var k = n(59524),
        A = n(824385),
        P = n(939186);
      function R(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      function D(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = e.apply(t, n);
            function s(e) {
              R(o, i, r, s, a, "next", e);
            }
            function a(e) {
              R(o, i, r, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function _(e, t, n) {
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
      const z = ({ infoText: e, icon: t }) =>
          (0, i.jsxs)("div", {
            className:
              "flex items-center px-3 py-2 mb-3 rounded-lg border border-neutral-200 w-full",
            children: [
              (0, i.jsx)(p.G, {
                className:
                  "p-2.5 mr-3 rounded-full bg-neutral-100 text-neutral-700",
                icon: t,
              }),
              (0, i.jsx)("span", {
                className: "text-neutral-800 font-medium ",
                children: e,
              }),
            ],
          }),
        F = ({
          user: e,
          setCurrentStepSubmission: t,
          setIsCurrentStepReadyForSubmission: n,
        }) => {
          const o = (0, r.useRef)(null),
            {
              data: l,
              isLoading: u,
              refetch: c,
              isRefetching: p,
            } = (0, d.useQuery)(
              "workerVerifications",
              ((f = [h.VerificationTemplate.OutlierAlternativeId]),
              D(function* () {
                return yield (0,
                y.fetchApi)("/worker/real_verifications", { method: "GET", parseAndHandle: !0, query: { templatesToInclude: f, maxVerificationsPerTemplate: h.DEFAULT_MAX_VERIFICATIONS_PER_TEMPLATE } });
              }))
            );
          var f;
          const { data: b, isLoading: g } = M(),
            { 0: N, 1: S } = (0, r.useState)(!1),
            I = h.VerificationTemplate.OutlierAlternativeId.toString(),
            C = (0, r.useCallback)(
              D(function* () {
                c();
              }),
              [c]
            );
          (0, r.useEffect)(() => {
            const e = j().find(
              null === l || void 0 === l ? void 0 : l.userVerifications,
              (e) => a.tH.includes(e.status)
            );
            e &&
              (t({ stepType: a.s0.ALTERNATIVE_IDV, inquiryId: e.inquiryId }),
              n(!0),
              S(!0));
          }, [t, n, l]);
          let w = j().filter(
            null === l || void 0 === l ? void 0 : l.userVerifications,
            (e) =>
              I === e.templateId &&
              [
                h.VerificationInquiryStatus.Created,
                h.VerificationInquiryStatus.Started,
                h.VerificationInquiryStatus.Transitioned,
              ].includes(e.status)
          );
          w = j().orderBy(w, (e) => new Date(e.createdAt), ["desc"]);
          const E = w.length > 0 ? w[0] : void 0,
            L = (0, r.useCallback)(
              D(function* () {
                var t, n;
                (0,
                k.Kz)(A.j.PersonaTriggeredEvent, { userId: e.id, source: P.o.SELF_REMEDIATION });
                let i = null;
                const r =
                  null === (t = null === e || void 0 === e ? void 0 : e.tags) ||
                  void 0 === t
                    ? void 0
                    : t.includes(h.TEST_ACCOUNT_TAG_ID);
                if (E) {
                  const e = yield (0, y.fetchApi)(
                    "/worker/verifications/resume",
                    {
                      method: "POST",
                      body: {
                        inquiryId:
                          null === E || void 0 === E ? void 0 : E.inquiryId,
                      },
                      parseAndHandle: !0,
                    }
                  );
                  i = j().get(
                    null === e || void 0 === e ? void 0 : e.meta,
                    "session-token"
                  );
                }
                (o.current = new window.Persona.Client(
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                          Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                              n,
                              e
                            ).enumerable;
                          })
                        )),
                        i.forEach(function (t) {
                          _(e, t, n[t]);
                        });
                    }
                    return e;
                  })(
                    {},
                    E
                      ? {
                          inquiryId:
                            null === E || void 0 === E ? void 0 : E.inquiryId,
                          sessionToken: i,
                        }
                      : { templateId: I },
                    {
                      environment: !x.IS_PROD || r ? "sandbox" : "production",
                      referenceId: e.id,
                      fields: { previous_identification_class: b },
                      onComplete: C(),
                    }
                  )
                )),
                  null === o ||
                    void 0 === o ||
                    null === (n = o.current) ||
                    void 0 === n ||
                    n.open();
              }),
              [b, E, C, I, e.id, null === e || void 0 === e ? void 0 : e.tags]
            );
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)("div", {
                className: "pb-4",
                children: (0, i.jsx)("div", {
                  className: "text-sm",
                  children:
                    "Complete the identity verification with an ID different from the one you initially used.",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "pb-8 space-y-2",
                children: [
                  (0, i.jsx)(z, {
                    infoText:
                      "Make sure your ID type you upload is the same as the selected type",
                    icon: "fa-regular fa-id-card fa-fw",
                  }),
                  (0, i.jsx)(z, {
                    infoText:
                      "Make sure your ID is legible and there is good lighting and nothing is blocking any important data",
                    icon: "fa-regular fa-lightbulb fa-fw",
                  }),
                  (0, i.jsx)(z, {
                    infoText: "Make sure your ID is not expired.",
                    icon: "fa-regular fa-calendar fa-fw",
                  }),
                ],
              }),
              g || u || p
                ? (0, i.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, i.jsx)(s.$, { size: "sm" }),
                  })
                : (0, i.jsxs)("div", {
                    className: "flex justify-center",
                    children: [
                      (0, i.jsx)(v(), {
                        url: "https://cdn.withpersona.com/dist/persona-v4.7.1.js",
                      }),
                      (0, i.jsx)(m.zx, {
                        onClick: () => {
                          L();
                        },
                        size: "lg",
                        variant: "primary",
                        disabled: N,
                        children: N
                          ? "Verification Complete"
                          : E
                          ? "Resume Verification"
                          : "Start Verification",
                      }),
                    ],
                  }),
            ],
          });
        };
      var Y = n(594802),
        Z = n(629814),
        V = n(944896);
      const H = ({
        user: e,
        setCurrentStepSubmission: t,
        setIsCurrentStepReadyForSubmission: n,
        currentStepState: s,
      }) => {
        const { 0: l, 1: u } = (0, r.useState)(!1),
          c = e.phoneNumberAlphabeticCountryCode || e.countryCode || "",
          d = `${(0, Z.getCountryFlagEmoji)(c)} +${(0,
          Z.phoneCodeFromCountryCode)(c)}`;
        var p;
        const { 0: f, 1: v } = (0, r.useState)(
            null !== (p = e.localPhoneNumber) && void 0 !== p ? p : ""
          ),
          { 0: h, 1: x } = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            const i =
              f === e.localPhoneNumber &&
              !!(null === s || void 0 === s ? void 0 : s.savedAt);
            i &&
              t({
                stepType: a.s0.VERIFY_PHONE_NUMBER,
                countryCode: (0, Z.phoneCodeFromCountryCode)(c) || void 0,
                phoneNumber: f,
              }),
              x(i),
              n(i);
          }, [e, f, s, n, t, c]),
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)("div", {
                className: "pb-4 space-y-4",
                children: (0, i.jsx)("div", {
                  className: "text-sm",
                  children:
                    "Make sure your phone number is correct and verify it. If you need to update your phone number, please change it below.",
                }),
              }),
              (0, i.jsx)("div", {
                className: "max-w-lg space-y-4 pb-8",
                children: (0, i.jsxs)("div", {
                  className: "flex flex-row gap-2",
                  children: [
                    (0, i.jsx)(Y.n, {
                      className: "w-24",
                      value: d,
                      disabled: !0,
                    }),
                    (0, i.jsx)(Y.n, {
                      id: "phoneNumber",
                      placeholder: "Phone Number",
                      onChange: (e) => v(e.target.value),
                      type: "number",
                      autoComplete: "tel-national",
                      inputMode: "tel",
                      value: f,
                      hideSpinner: !0,
                    }),
                    (0, i.jsx)("div", {
                      className: "pl-4",
                      children: (0, i.jsx)(m.zx, {
                        disabled: h,
                        onClick: () => {
                          u(!0);
                        },
                        size: "lg",
                        variant: "primary",
                        children: h ? "Verified" : "Verify",
                      }),
                    }),
                    h &&
                      (0, i.jsx)(o.J, {
                        icon: "check-circle",
                        variant: "success",
                      }),
                    (0, i.jsx)(V.P, {
                      user: e,
                      isOpen: l,
                      onClose: () => {
                        t({
                          stepType: a.s0.VERIFY_PHONE_NUMBER,
                          countryCode:
                            (0, Z.phoneCodeFromCountryCode)(c) || void 0,
                          phoneNumber: f,
                        }),
                          n(!0),
                          x(!0),
                          u(!1);
                      },
                      displayText: "",
                      newPhoneNumber:
                        f !== e.localPhoneNumber
                          ? `${(0, Z.phoneCodeFromCountryCode)(c)}${f}`
                          : void 0,
                      onDismiss: () => {
                        u(!1);
                      },
                      finishButtonText: "Next",
                      skipReverification: !0,
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var G = n(926263);
      function U(e, t, n) {
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
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              U(e, t, n[t]);
            });
        }
        return e;
      }
      const B = ({ file: e, handleFileChanged: t }) => {
          const [n, a] = r.useState(),
            [l, u] = r.useState(!1),
            c = r.useCallback(
              (e, n) => (
                a(void 0),
                t(void 0),
                u(!0),
                n.length > 1
                  ? a("Please upload only one file")
                  : n.length
                  ? a("Please upload files in .pdf format")
                  : (t(e[0]), void u(!1))
              ),
              [t]
            ),
            { getRootProps: d, getInputProps: p } = (0, G.u)({
              onDrop: c,
              multiple: !1,
              accept: ".pdf, .png, .jpg, .jpeg",
            });
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className:
                "flex flex-col justify-center items-center p-5 text-center",
              children: (0, i.jsx)(
                "div",
                Q({}, d(), {
                  children:
                    e && !n
                      ? (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)("div", {
                            className:
                              "flex flex-row items-center justify-center",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "flex flex-col item-center justify-center text-sm font-medium text-neutral-700",
                                children: e.name,
                              }),
                              (0, i.jsx)(o.J, {
                                icon: "trash",
                                onClick: () => {
                                  t(void 0);
                                },
                              }),
                            ],
                          }),
                        })
                      : (0, i.jsx)("div", {
                          className: "flex items-center justify-center",
                          children:
                            l && !n
                              ? (0, i.jsx)(s.$, {
                                  size: "md",
                                  className: "m-4",
                                })
                              : (0, i.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-center bg-neutral-200 w-96 h-96 rounded-full",
                                  children: [
                                    (0, i.jsx)("input", Q({}, p())),
                                    (0, i.jsx)("img", {
                                      className: "w-auto h-32",
                                      src: "/static/img/outlier/upload-document.svg",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "font-bold pb-2",
                                      children: "Drag and drop files",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "text-neutral-500 pb-2",
                                      children: "or",
                                    }),
                                    (0, i.jsx)(m.zx, {
                                      children: "Browse Files",
                                    }),
                                    (0, i.jsx)("div", {
                                      className:
                                        "pt-2 text-xs text-neutral-500",
                                      children: "Maximum file size: 25MB",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "text-xs text-neutral-500",
                                      children: "Format: PDF, PNG, JPEG, JPG",
                                    }),
                                  ],
                                }),
                        }),
                })
              ),
            }),
          });
        },
        q = ({
          setIsCurrentStepReadyForSubmission: e,
          setCurrentStepSubmission: t,
          file: n,
          setFile: o,
        }) => {
          (0, r.useEffect)(() => {
            n
              ? (t({ stepType: a.s0.PROOF_OF_PHYSICAL_ADDRESS }), e(!0))
              : (t(void 0), e(!1));
          }, [e, t, n]);
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsxs)("div", {
                className: "pb-4 space-y-4",
                children: [
                  (0, i.jsx)("div", {
                    className: "text-sm",
                    children:
                      "Upload proof of physical address. Acceptable documents include current lease agreements, mortgage statements (within the last 30 days), utility bills (within the last 30 days)",
                  }),
                  (0, i.jsx)("div", {
                    className: "text-sm",
                    children:
                      "We currently only accept documents in English. The document provided must be a photograph or scan of a physical document. Please note that the ID you used to sign up for your Outlier account does not qualify as proof of address.",
                  }),
                ],
              }),
              (0, i.jsx)(B, {
                file: n,
                handleFileChanged: (n) => {
                  n
                    ? (o(n),
                      t({ stepType: a.s0.PROOF_OF_PHYSICAL_ADDRESS }),
                      e(!0))
                    : (o(void 0), t(void 0), e(!1));
                },
              }),
            ],
          });
        };
      var $ = n(384193),
        W = n(339389);
      const J = ({
          setCurrentStepSubmission: e,
          setIsCurrentStepReadyForSubmission: t,
          currentStepState: n,
        }) => {
          var o;
          const { 0: s, 1: l } = (0, r.useState)(
            null !== (o = null === n || void 0 === n ? void 0 : n.details) &&
              void 0 !== o
              ? o
              : ""
          );
          return (
            t(!0),
            (0, r.useEffect)(() => {
              var e;
              l(
                null !==
                  (e = null === n || void 0 === n ? void 0 : n.details) &&
                  void 0 !== e
                  ? e
                  : ""
              );
            }, [l, null === n || void 0 === n ? void 0 : n.details]),
            (0, r.useEffect)(() => {
              e({ stepType: a.s0.ADDITIONAL_DETAILS, details: s });
            }, [s, e]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  className: "pb-4 space-y-4",
                  children: [
                    (0, i.jsx)("div", {
                      className: "text-sm",
                      children:
                        "Please provide any additional details that could help us verify your identity and credentials.",
                    }),
                    (0, i.jsxs)("div", {
                      className: "text-sm",
                      children: [
                        "For example:",
                        (0, i.jsxs)("ul", {
                          className: "list-disc pl-12",
                          children: [
                            (0, i.jsx)("li", {
                              children:
                                "Links to any additional professional accounts, such as Google Scholar, Github, etc.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "Any other email addresses or phone numbers you own or have owned in the past",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(W.K, {
                  className: "w-full",
                  value: s,
                  onChange: (e) => {
                    l(e.target.value);
                  },
                  rows: 5,
                }),
              ],
            })
          );
        },
        X = [
          a.s0.VERIFY_PHONE_NUMBER,
          a.s0.PROOF_OF_PHYSICAL_ADDRESS,
          a.s0.CONNECT_LINKEDIN,
          a.s0.ADDITIONAL_DETAILS,
        ],
        K = (e) => {
          switch (e.stepType) {
            case a.s0.VERIFY_PHONE_NUMBER:
              return `+${e.countryCode} ${e.phoneNumber}`;
            case a.s0.PROOF_OF_PHYSICAL_ADDRESS:
              return e.fileName;
            case a.s0.CONNECT_LINKEDIN:
              return `${e.vanityName}`;
            case a.s0.ADDITIONAL_DETAILS:
              return e.details;
            default:
              return "";
          }
        },
        ee = (e) => {
          switch (e) {
            case a.s0.VERIFY_PHONE_NUMBER:
              return "Phone number";
            case a.s0.PROOF_OF_PHYSICAL_ADDRESS:
              return "Proof of address";
            case a.s0.CONNECT_LINKEDIN:
              return "LinkedIn profile";
            case a.s0.ADDITIONAL_DETAILS:
              return "Additional details";
            default:
              return "";
          }
        },
        te = ({
          remediationState: e,
          setCurrentStepSubmission: t,
          setIsCurrentStepReadyForSubmission: n,
        }) => (
          (0, r.useEffect)(() => {
            t({ stepType: a.s0.REVIEW_AND_SUBMIT }), n(!0);
          }, [t, n]),
          (0, i.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, i.jsx)("div", {
                className: "text-sm pb-6",
                children: "Review all of your information before you submit.",
              }),
              X.map((t, n) => {
                var r;
                const o =
                  null === e ||
                  void 0 === e ||
                  null === (r = e.steps) ||
                  void 0 === r
                    ? void 0
                    : r.find((e) => e.stepType === t);
                return (0, i.jsxs)(i.Fragment, {
                  children: [
                    n > 0 &&
                      (0, i.jsx)("div", {
                        className: "h-0 border border-neutral-100",
                      }),
                    (0, i.jsx)("div", { children: ee(t) }),
                    (0, i.jsx)("div", { children: o ? K(o) : "" }),
                  ],
                });
              }),
            ],
          })
        );
      var ne = n(952332),
        ie = n(98283);
      function re(e, t, n) {
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
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              re(e, t, n[t]);
            });
        }
        return e;
      }
      const se = (e) => {
          switch (e.stepType) {
            case a.s0.PRIVACY_POLICY:
              return (0, i.jsx)(c, oe({}, e));
            case a.s0.ALTERNATIVE_IDV:
              return (0, i.jsx)(F, oe({}, e));
            case a.s0.VERIFY_PHONE_NUMBER:
              return (0, i.jsx)(H, oe({}, e));
            case a.s0.PROOF_OF_PHYSICAL_ADDRESS:
              return (0, i.jsx)(q, oe({}, e));
            case a.s0.CONNECT_LINKEDIN:
              return (0, i.jsx)($.J, oe({}, e));
            case a.s0.ADDITIONAL_DETAILS:
              return (0, i.jsx)(J, oe({}, e));
            case a.s0.REVIEW_AND_SUBMIT:
              return (0, i.jsx)(te, oe({}, e));
            case a.s0.PROOF_OF_EMPLOYMENT:
            default:
              return (0, i.jsx)(i.Fragment, {});
          }
        },
        ae = (e) => {
          const { isLoading: t, data: n, refetch: o } = S(() => {}),
            { mutate: s, isLoading: u } = C(o),
            { mutate: c, isLoading: d } = T(o),
            { 0: p, 1: f } = (0, r.useState)(void 0),
            { 0: v, 1: h } = (0, r.useState)(0),
            { 0: x, 1: y } = (0, r.useState)(void 0),
            { 0: b, 1: j } = (0, r.useState)(!1),
            { 0: g, 1: N } = (0, r.useState)(void 0);
          (0, r.useEffect)(() => {
            var e;
            y(
              ((e) => {
                var t;
                return (null === e || void 0 === e ? void 0 : e.currentStep)
                  ? null === e ||
                    void 0 === e ||
                    null === (t = e.steps) ||
                    void 0 === t
                    ? void 0
                    : t.find((t) => t.stepType === e.currentStep)
                  : void 0;
              })(n)
            ),
              h(
                (null === (e = n) || void 0 === e ? void 0 : e.currentStep) &&
                  (null === e || void 0 === e ? void 0 : e.requiredStepTypes)
                  ? e.requiredStepTypes.findIndex((t) => t === e.currentStep)
                  : 0
              );
          }, [n, y, v]);
          const I = (e, t) => {
              if (v + t < e.length) {
                const n = e[v + t];
                c({ newCurrentStep: n }), f(void 0), j(!1);
              }
            },
            w = !b || u || t || d,
            E = u || t || d || 0 === v;
          var L, O;
          return (0, i.jsxs)("div", {
            className: "pb-24 text-neutral-900 w-[1050px] mx-auto",
            children: [
              (0, i.jsx)("div", {
                className: "mb-2",
                children: (0, i.jsx)(ne.M, {
                  title: "Additional Information",
                  description:
                    "Your progress will be saved, so you can continue from where you left off.",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-row border border-neutral-200 rounded-lg",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "bg-neutral-100 min-w-[320px] p-8 border-r border-neutral-200",
                    children: (0, i.jsx)(l, {
                      stepTypes:
                        null !==
                          (L =
                            null === n || void 0 === n
                              ? void 0
                              : n.requiredStepTypes) && void 0 !== L
                          ? L
                          : [],
                      currentStepIndex: v,
                      isLoading: t,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col w-full",
                    children: [
                      (0, i.jsx)("div", {
                        className: "p-8 w-full h-full",
                        children:
                          !t &&
                          (0, i.jsx)(se, {
                            stepType:
                              null !==
                                (O =
                                  null === n || void 0 === n
                                    ? void 0
                                    : n.currentStep) && void 0 !== O
                                ? O
                                : a.s0.PRIVACY_POLICY,
                            currentStepState: x,
                            setCurrentStepSubmission: f,
                            setIsCurrentStepReadyForSubmission: j,
                            user: e.user,
                            file: g,
                            setFile: N,
                            remediationState: n,
                          }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-row items-center m-8 justify-between",
                        children: [
                          (0, i.jsx)(m.zx, {
                            onClick: () => {
                              (null === n || void 0 === n
                                ? void 0
                                : n.requiredStepTypes) &&
                                I(n.requiredStepTypes, -1);
                            },
                            disabled: E,
                            className: "pl-4",
                            size: "lg",
                            variant: "secondary",
                            children: "Back",
                          }),
                          (0, i.jsx)(m.zx, {
                            onClick:
                              (null === n || void 0 === n
                                ? void 0
                                : n.currentStep) === a.s0.REVIEW_AND_SUBMIT
                                ? () => {
                                    s({
                                      step: {
                                        stepType: a.s0.REVIEW_AND_SUBMIT,
                                      },
                                    }),
                                      (0, ie.ZP)({}, "/expert");
                                  }
                                : () => {
                                    s({
                                      step: oe(
                                        {},
                                        null !== p && void 0 !== p ? p : {}
                                      ),
                                      file: g,
                                    }),
                                      (null === n || void 0 === n
                                        ? void 0
                                        : n.requiredStepTypes) &&
                                        I(n.requiredStepTypes, 1);
                                  },
                            disabled: w,
                            className: "pr-4",
                            size: "lg",
                            variant: "primary",
                            children:
                              (null === n || void 0 === n
                                ? void 0
                                : n.currentStep) === a.s0.REVIEW_AND_SUBMIT
                                ? "Submit"
                                : "Continue",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var le = n(776845);
      const ue = () => {
        const { 0: e, 1: t } = (0, r.useState)(!1),
          { isLoading: n, data: o } = S(() => {}),
          { mutate: l, isLoading: u } = E(() => {
            (0, ie.ZP)({}, "/expert/remediation");
          }),
          c = () => {
            t(!0),
              (null === o || void 0 === o ? void 0 : o.status) !==
              a.O6.IN_PROGRESS
                ? l()
                : (0, ie.ZP)({}, "/expert/remediation");
          };
        return (0, i.jsx)(i.Fragment, {
          children:
            !n &&
            (0, i.jsxs)("div", {
              className:
                "w-full p-4 rounded-lg flex flex-col gap-2 items-center justify-center mb-2 bg-utility-white",
              children: [
                (0, i.jsx)("img", {
                  className: "w-[200px] h-auto",
                  src:
                    ((d = null === o || void 0 === o ? void 0 : o.status),
                    d && d !== a.O6.IN_PROGRESS
                      ? "/static/img/outlier/remediation-under-review.svg"
                      : "/static/img/outlier/additional-info.svg"),
                }),
                (0, i.jsx)(le.ZT.H4, {
                  className: "mt-4",
                  children: ((e) =>
                    e && e !== a.O6.IN_PROGRESS
                      ? "Your information is under review"
                      : "We need more information from you")(
                    null === o || void 0 === o ? void 0 : o.status
                  ),
                }),
                (0, i.jsx)(le.ZT.Paragraph3, {
                  className: "text-center w-[80%]",
                  children: ((e) =>
                    e && e !== a.O6.IN_PROGRESS
                      ? "Thanks for submitting additional information. We are now reviewing it. We\u2019ll get back to you by email within three business days."
                      : "Your account is temporarily paused because we\u2019ve noticed some unusual activity. Please provide additional information to continue working on Outlier.")(
                    null === o || void 0 === o ? void 0 : o.status
                  ),
                }),
                (0, i.jsx)("div", {
                  className: "p-2",
                  children: ((t) =>
                    e
                      ? (0, i.jsx)(s.$, { size: "sm" })
                      : t && t !== a.O6.IN_PROGRESS
                      ? (0, i.jsx)(i.Fragment, {})
                      : (0, i.jsx)(m.zx, {
                          disabled: u || n,
                          onClick: c,
                          children: t ? "Resume" : "Start",
                        }))(null === o || void 0 === o ? void 0 : o.status),
                }),
              ],
            }),
        });
        var d;
      };
    },
    944896: function (e, t, n) {
      n.d(t, {
        P: function () {
          return z;
        },
      });
      var i = n(824246),
        r = n(827378),
        o = n(691067),
        s = n(776845),
        a = n(416534),
        l = n(720227),
        u = n(713222);
      const c = ({ title: e, icon: t, selected: n, onClick: r, disabled: o }) =>
        (0, i.jsxs)("div", {
          className: (0, l.m)(
            "scaleui outlier-theme border rounded border-neutral-200 p-4 hover:bg-neutral-100 cursor-pointer flex items-center gap-1",
            n && "bg-primary-50 border-primary-400 hover:bg-primary-100",
            o && "bg-neutral-200"
          ),
          onClick: o ? void 0 : r,
          children: [
            (0, i.jsx)(u.J, { icon: t, hasBackground: !0, variant: "neutral" }),
            (0, i.jsx)(s.ZT.Paragraph2, { children: e }),
          ],
        });
      var d,
        m,
        p,
        f = n(924337),
        v = n(307615);
      !(function (e) {
        (e.SEND_CODE = "send_code"), (e.VERIFY_CODE = "verify_code");
      })(d || (d = {})),
        (function (e) {
          (e.SMS = "sms"),
            (e.EMAIL = "email"),
            (e.SECONDARY_EMAIL = "secondary_email");
        })(m || (m = {})),
        (function (e) {
          (e.VERIFICATION_ERROR =
            "Incorrect verification code. Please try again."),
            (e.DAILY_RATE_LIMIT_ERROR =
              "You have exceeded the limit on phone verification attempts. Please try again later."),
            (e[
              (e.HIT_COOLDOWN_ERROR = `Please wait ${v.I8} seconds before requesting a new code.`)
            ] = "HIT_COOLDOWN_ERROR"),
            (e.HIT_COOLDOWN_ERROR_RESOLVED = "You can now request a new code."),
            (e.COUNTRY_ERROR =
              "We detected a mismatch in countries between your location and phone country code - contact your team lead to declare travel."),
            (e.DUPLICATE_PHONE_ERROR =
              "This phone number is already associated with another account."),
            (e.PHONE_ERROR = "Oops, an error occurred! Please try again.");
        })(p || (p = {}));
      var h = n(775222),
        x = n(634403),
        y = n(285556),
        b = n(161320),
        j = n.n(b),
        g = n(629814);
      function N(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      function S(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = e.apply(t, n);
            function s(e) {
              N(o, i, r, s, a, "next", e);
            }
            function a(e) {
              N(o, i, r, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      const I = (e, t, n, i) => {
        const { 0: o, 1: s } = (0, r.useState)([]),
          { 0: a, 1: l } = (0, r.useState)(!1),
          u = (0, r.useCallback)(
            S(function* () {
              s([]),
                l(!0),
                h.c.track(
                  "Submitted Phone Number For Two-Factor Authentication",
                  { user: e._id }
                );
              try {
                const i = {
                  body: JSON.stringify({
                    phoneNumber: n || e.localPhoneNumber || e.phoneNumber,
                    countryCode:
                      e.phoneNumberCallingCountryCode ||
                      (0, g.phoneCodeFromCountryCode)(e.countryCode || ""),
                    email:
                      t === m.EMAIL
                        ? e.email
                        : t === m.SECONDARY_EMAIL
                        ? e.secondaryEmail
                        : void 0,
                    channel: t === m.SMS ? m.SMS : m.EMAIL,
                    isResetPhoneNumber: !!n,
                  }),
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                };
                yield (0, y.ZP)(null, "internal/mfa_start", i);
              } catch (i) {
                h.c.track(
                  "Submitted Phone Number For Two-Factor Verification Error",
                  {
                    user: e._id,
                    countryCode: e.phoneNumberCallingCountryCode,
                    phoneNumber: n || e.localPhoneNumber,
                    error: i,
                  }
                ),
                  429 === i.response.status
                    ? i.response.cooldownHit
                      ? s((e) => [...e, p.HIT_COOLDOWN_ERROR])
                      : s((e) => [...e, p.DAILY_RATE_LIMIT_ERROR])
                    : 403 === i.response.status
                    ? s((e) => [...e, p.COUNTRY_ERROR])
                    : 422 === i.response.status && i.response.message
                    ? s((e) => [...e, i.response.message])
                    : 409 === i.response.status
                    ? s((e) => [...e, p.DUPLICATE_PHONE_ERROR])
                    : s((e) => [...e, p.PHONE_ERROR]);
              } finally {
                l(!1);
              }
            }),
            [e, t, n]
          ),
          c = (0, r.useCallback)(
            (function () {
              var r = S(function* (r) {
                s([]),
                  l(!0),
                  h.c.track("Entered Code For Verification", { user: e._id });
                try {
                  const o = {
                      body: JSON.stringify({
                        phoneNumber: n || e.localPhoneNumber || e.phoneNumber,
                        countryCode:
                          e.phoneNumberCallingCountryCode ||
                          (0, g.phoneCodeFromCountryCode)(e.countryCode || ""),
                        email:
                          t === m.EMAIL
                            ? e.email
                            : t === m.SECONDARY_EMAIL
                            ? e.secondaryEmail
                            : void 0,
                        verificationCode: r,
                        channel: t === m.SMS ? m.SMS : m.EMAIL,
                        isResetPhoneNumber: !!n,
                        checkForReverification: !!n && !i,
                      }),
                      headers: { "Content-Type": "application/json" },
                      method: "POST",
                    },
                    { user: a, validated: u } = yield (0, y.ZP)(
                      null,
                      "internal/mfa_check",
                      o
                    );
                  if (!u) return s((e) => [...e, p.VERIFICATION_ERROR]), !1;
                  x.Z.setTransient("internal/logged_in_user", a),
                    h.c.track("Completed Phone Verification Flow", {
                      user: a._id,
                    });
                } catch (o) {
                  return (
                    h.c.track("Submitted Verification Code Error", {
                      user: e._id,
                      countryCode: e.phoneNumberCallingCountryCode,
                      phoneNumber: n || e.localPhoneNumber,
                      error: o,
                    }),
                    429 === o.response.status
                      ? s((e) => [...e, p.DAILY_RATE_LIMIT_ERROR])
                      : s((e) => [...e, p.PHONE_ERROR]),
                    !1
                  );
                } finally {
                  l(!1);
                }
                return !0;
              });
              return function (e) {
                return r.apply(this, arguments);
              };
            })(),
            [e, n, t, i]
          );
        return { loading: a, errors: o, handleSendCode: u, handleCheckCode: c };
      };
      function C(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const w = ({
        show: e,
        user: t,
        handleNext: n,
        displayText: o,
        allowEmail: l,
        disableNext: u,
        newPhoneNumber: d,
        skipReverification: p,
      }) => {
        const { 0: v, 1: h } = (0, r.useState)(m.SMS),
          x = d || t.phoneNumber,
          { handleSendCode: y } = I(t, v, d, p),
          b = (0, r.useCallback)(
            ((j = function* () {
              yield y(), n(v);
            }),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (n, i) {
                var r = j.apply(e, t);
                function o(e) {
                  C(r, n, i, o, s, "next", e);
                }
                function s(e) {
                  C(r, n, i, o, s, "throw", e);
                }
                o(void 0);
              });
            }),
            [n, y, v]
          );
        var j;
        return e
          ? (0, i.jsxs)("div", {
              className: "scaleui outlier-theme flex flex-col gap-4",
              children: [
                (0, i.jsx)(s.ZT.H3, { children: "Verify Your Account" }),
                (0, i.jsxs)(s.ZT.Paragraph2, {
                  className: "whitespace-normal break-words",
                  children: [
                    null !== o && void 0 !== o
                      ? o
                      : "We need to reverify to your account for security reasons.",
                    l
                      ? " Select a delivery method and we will send you a verification code."
                      : " Hit continue to receive a verification code via SMS.",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, i.jsx)(c, {
                      title: `SMS text to ${(0, f.YY)(x)}`,
                      icon: ["far", "mobile"],
                      selected: v === m.SMS,
                      onClick: () => h(m.SMS),
                    }),
                    l &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          !(0, f.Q_)(t.email) &&
                            (0, i.jsx)(c, {
                              title: `Email to ${(0, f.of)(t.email)}`,
                              icon: ["far", "envelope"],
                              selected: v === m.EMAIL,
                              onClick: () => h(m.EMAIL),
                            }),
                          !(0, f.Q_)(t.secondaryEmail) &&
                            (0, i.jsx)(c, {
                              title: `Email to ${(0, f.of)(t.secondaryEmail)}`,
                              icon: ["far", "envelope"],
                              selected: v === m.SECONDARY_EMAIL,
                              onClick: () => h(m.SECONDARY_EMAIL),
                            }),
                        ],
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "flex items-center gap-2 justify-end",
                  children: (0, i.jsx)(a.zx, {
                    onClick: b,
                    disabled: u,
                    variant: "primary",
                    size: "lg",
                    children: "Continue",
                  }),
                }),
              ],
            })
          : null;
      };
      var E = n(554211),
        L = n(32301),
        T = n(943170),
        O = n.n(T),
        M = n(969249),
        k = n(385462);
      function A(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      function P(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, r) {
            var o = e.apply(t, n);
            function s(e) {
              A(o, i, r, s, a, "next", e);
            }
            function a(e) {
              A(o, i, r, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      const R = ({
          show: e,
          user: t,
          verificationMode: n,
          handleNext: o,
          handleBack: l,
          newPhoneNumber: u,
          finishButtonText: c,
          skipReverification: d,
        }) => {
          const { 0: p, 1: x } = (0, r.useState)(""),
            y = (0, r.useMemo)(
              () =>
                n === m.SMS
                  ? ` phone number ${(0, f.YY)(u || t.phoneNumber)}`
                  : n === m.EMAIL
                  ? ` email ${(0, f.of)(t.email)}`
                  : `${(0, f.of)(t.secondaryEmail)}`,
              [u, t.email, t.phoneNumber, t.secondaryEmail, n]
            ),
            { 0: b, 1: g } = (0, r.useState)(!1),
            { 0: N, 1: S } = (0, r.useState)(),
            { 0: C, 1: w } = (0, r.useState)(1),
            { 0: E, 1: L } = (0, r.useState)(0),
            T = (0, r.useMemo)(() => {
              const e = C > 2 || E > 2;
              return e && h.c.track("Verification Support Message Shown"), e;
            }, [C, E]),
            {
              loading: M,
              errors: A,
              handleSendCode: R,
              handleCheckCode: _,
            } = I(t, n, u, d),
            z = (0, r.useCallback)(
              P(function* () {
                x(""),
                  w((e) => e + 1),
                  S(j()(new Date()).add(v.I8 + 5, "seconds")),
                  yield R();
              }),
              [R]
            ),
            F = (0, r.useCallback)(
              (function () {
                var e = P(function* (e) {
                  L((e) => e + 1);
                  const t = yield _(e);
                  g(t);
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [_]
            );
          (0, r.useEffect)(() => {
            e && S(j()().add(v.I8 + 5, "seconds"));
          }, [e]);
          const Y = ((e) => {
            const { 0: t, 1: n } = (0, r.useState)(j()());
            return (
              (0, r.useEffect)(() => {
                if (!e) return;
                let t;
                return (
                  e.isAfter() &&
                    (t = setInterval(() => {
                      n(j()());
                    }, 1e3)),
                  e.isBefore() && t ? () => clearInterval(t) : void 0
                );
              }, [e]),
              e
                ? ` (${j()(
                    null === e || void 0 === e ? void 0 : e.diff(t)
                  ).format("in s[s]")})`
                : ""
            );
          })(N);
          return e
            ? (0, i.jsxs)("div", {
                className:
                  "scaleui outlier-theme flex flex-col gap-4 scaleui scale-tailwind",
                children: [
                  (0, i.jsx)(s.ZT.H3, { children: "Enter Verification Code" }),
                  (0, i.jsxs)(s.ZT.Paragraph2, {
                    className: "whitespace-normal break-words",
                    children: [
                      "A 6-digit verification code was sent to your ",
                      y,
                    ],
                  }),
                  (0, i.jsx)(O(), {
                    value: p,
                    length: 6,
                    validChars: "0-9",
                    placeholder: "",
                    autoFocus: !0,
                    onComplete: (e) => {
                      F(e);
                    },
                    onChange: (e) => {
                      x(e);
                    },
                    classNames: {
                      character: "character-new",
                      characterInactive: "character--inactive",
                      characterSelected: "character--selected",
                    },
                    inputProps: { className: "text-transparent" },
                  }),
                  (0, i.jsxs)(a.zx, {
                    variant: "neutral",
                    onClick: z,
                    disabled:
                      (null === N || void 0 === N ? void 0 : N.isAfter()) || M,
                    size: "sm",
                    className:
                      "w-fit bg-transparent border-transparent shadow-none",
                    children: [
                      "Resend code",
                      (null === N || void 0 === N ? void 0 : N.isAfter())
                        ? Y
                        : "",
                    ],
                  }),
                  !!A.length &&
                    (0, i.jsx)("div", {
                      className: "flex flex-col gap-1",
                      children: A.map((e) =>
                        (0, i.jsx)(
                          s.ZT.Paragraph3,
                          { className: "text-[#B71C1C]", children: e },
                          e
                        )
                      ),
                    }),
                  T &&
                    (0, i.jsxs)("div", {
                      className:
                        "text-sm p-4 bg-primary-50 border border-primary-300 rounded",
                      children: [
                        (0, i.jsx)(s.ZT.H5, {
                          className: "font-bold mb-1",
                          children: "Having trouble?",
                        }),
                        (0, i.jsxs)(s.ZT.Paragraph3, {
                          className: "leading-tight",
                          children: [
                            "Contact us at",
                            " ",
                            (0, i.jsx)("a", {
                              className: "underline",
                              href: `mailto:${k.MAILBOXES.OUTLIER.ACCOUNT_ACCESS.email}`,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children:
                                k.MAILBOXES.OUTLIER.ACCOUNT_ACCESS.email,
                            }),
                            " ",
                            "for help.",
                          ],
                        }),
                      ],
                    }),
                  (0, i.jsxs)("div", {
                    className: "flex items-center gap-2 justify-end",
                    children: [
                      (0, i.jsx)(a.zx, {
                        onClick: () => l(),
                        disabled: M,
                        variant: "white",
                        size: "lg",
                        children: "Back",
                      }),
                      (0, i.jsx)(a.zx, {
                        onClick: () => o(b),
                        disabled: !b || M,
                        variant: "primary",
                        size: "lg",
                        children: null !== c && void 0 !== c ? c : "Done",
                      }),
                    ],
                  }),
                  (0, i.jsx)("style", { children: D(b, !!A.length, M) }),
                ],
              })
            : null;
        },
        D = (e, t, n) =>
          `\n  .character-new {\n    font-size: 24px;\n    border: none !important;\n    border-radius: 4px 4px 0px 0px;\n    border-bottom: 2px solid !important;\n    color: ${
            e ? M.wL.Green800 : t && !n ? M.wL.Red900 : M.wL.Blue900
          }  !important;\n    background: ${
            e ? M.wL.Green50 : t && !n ? M.wL.Red50 : M.wL.Neutral100
          }  !important;\n    border-bottom-color: ${
            e ? M.wL.Green800 : t && !n ? M.wL.Red900 : M.wL.Blue900
          }  !important;\n  }\n  \n  .character--selected {\n    outline: 2px solid ${
            M.wL.Blue900
          } !important;\n  }\n\n  .character--inactive {\n    border-bottom-color: ${
            M.wL.CoolGray30
          } !important;\n  }\n`,
        _ = ({
          user: e,
          onClose: t,
          displayText: n,
          newPhoneNumber: o,
          finishButtonText: s,
          skipReverification: a,
        }) => {
          const { 0: l, 1: u } = (0, r.useState)(d.SEND_CODE),
            { 0: c, 1: p } = (0, r.useState)(m.SMS),
            f = (0, E.ZP)("enable-email-2fa", { userId: e._id }, !1),
            h = (0, v.xZ)(e),
            { isLoading: x, data: y } = (0, L.S9)(() => {}),
            b = (0, r.useCallback)((e) => {
              p(e), u(d.VERIFY_CODE);
            }, []),
            j = (0, r.useCallback)(
              (e) => {
                t(e || !1);
              },
              [t]
            ),
            g = (0, r.useCallback)(() => {
              u(d.SEND_CODE);
            }, []);
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(w, {
                show: l === d.SEND_CODE,
                user: e,
                handleNext: b,
                displayText: n,
                allowEmail: f || h || y,
                disableNext: x,
                newPhoneNumber: o,
              }),
              (0, i.jsx)(R, {
                show: l === d.VERIFY_CODE,
                user: e,
                verificationMode: c,
                handleNext: j,
                handleBack: g,
                newPhoneNumber: o,
                finishButtonText: s,
                skipReverification: a,
              }),
            ],
          });
        },
        z = ({
          user: e,
          isOpen: t,
          onClose: n,
          displayText: r,
          newPhoneNumber: s,
          onDismiss: a,
          finishButtonText: l,
          skipReverification: u,
        }) =>
          (0, i.jsx)(o.u, {
            open: t,
            onClose: a,
            hideTitle: !a,
            isStrictClose: !0,
            className: "scaleui scale-tailwind scale-theme",
            innerClassName: "max-w-[500px]",
            children: (0, i.jsx)(_, {
              user: e,
              onClose: n,
              displayText: r,
              newPhoneNumber: s,
              finishButtonText: l,
              skipReverification: u,
            }),
          });
    },
    101409: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(824246),
        r = n(679892),
        o = n.n(r),
        s = (n(827378), n(149791));
      var a = ({ emoji: e, size: t = "1em" }) => {
        const n = t.replace(".", "_");
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("span", {
              dangerouslySetInnerHTML: { __html: s.Z.parse(e) },
              className:
                o().dynamic([["a253585a42e447b6", [n, t, t]]]) +
                " " +
                `emoji-icon size-${n}`,
            }),
            (0, i.jsx)(o(), {
              id: "a253585a42e447b6",
              dynamic: [n, t, t],
              children: `.emoji-icon img{display:inline-block;vertical-align:-.1em}.emoji-icon.size-${n} img{height:${t};width:${t}}`,
            }),
          ],
        });
      };
    },
    602963: function (e, t, n) {
      var i = n(824246),
        r = n(679892),
        o = n.n(r);
      n(827378);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: "jsx-ef428a7cc429b7a2",
          children: (0, i.jsx)(o(), {
            id: "ef428a7cc429b7a2",
            children:
              ".social-button{color:white;font-size:14px;text-align:start;background:#333;margin-bottom:14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;overflow:hidden;-webkit-transition:all 100ms ease-out;-moz-transition:all 100ms ease-out;-o-transition:all 100ms ease-out;transition:all 100ms ease-out}.social-button:hover{-webkit-filter:brightness(95%);filter:brightness(95%)}.social-button:active{-webkit-filter:brightness(95%);filter:brightness(95%)}.social-button .social-button-icon{width:46px;height:46px;background-position:center;background-repeat:no-repeat;-webkit-background-size:18px 18px;-moz-background-size:18px 18px;-o-background-size:18px 18px;background-size:18px 18px;display:inline-block;vertical-align:middle;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.social-button .social-button-icon.github-icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTkuNSAwQTkuMzcgOS4zNyAwIDAgMCAwIDkuMjNhOS4yNiA5LjI2IDAgMCAwIDYuNSA4Ljc1Yy40Ny4wOS42NS0uMi42NS0uNDRsLS4wMi0xLjcyYy0yLjY0LjU2LTMuMi0xLjA5LTMuMi0xLjA5LS40My0xLjA2LTEuMDUtMS4zNS0xLjA1LTEuMzUtLjg3LS41Ny4wNi0uNTYuMDYtLjU2Ljk2LjA3IDEuNDYuOTUgMS40Ni45NS44NSAxLjQxIDIuMjIgMSAyLjc2Ljc3LjA5LS42LjM0LTEgLjYtMS4yMy0yLjEtLjI0LTQuMzItMS4wMy00LjMyLTQuNTYgMC0xLjAxLjM3LTEuODMuOTgtMi40OC0uMS0uMjMtLjQzLTEuMTcuMDktMi40NCAwIDAgLjgtLjI1IDIuNjEuOTRhOS4zIDkuMyAwIDAgMSA0Ljc2IDBjMS44MS0xLjIgMi42LS45NCAyLjYtLjk0LjUzIDEuMjcuMiAyLjIuMSAyLjQ0LjYxLjY1Ljk4IDEuNDcuOTggMi40OCAwIDMuNTQtMi4yMiA0LjMyLTQuMzQgNC41NS4zNC4yOS42NS44NS42NSAxLjdsLS4wMiAyLjU0YzAgLjI1LjE4LjUzLjY2LjQ0QTkuMjYgOS4yNiAwIDAgMCAxOSA5LjIzQzE5IDQuMTMgMTQuNzUgMCA5LjUgMHoiLz48L3N2Zz4=)}.social-button .social-button-icon.google-icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjNDI4NUY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNy42NCA5LjJjMC0uNjMtLjA2LTEuMjUtLjE2LTEuODRIOXYzLjQ5aDQuODRhNC4xNCA0LjE0IDAgMCAxLTEuOCAyLjcxdjIuMjZoMi45MmE4Ljc4IDguNzggMCAwIDAgMi42OC02LjYyeiIvPjxwYXRoIGZpbGw9IiMzNEE4NTMiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMThhOC42IDguNiAwIDAgMCA1Ljk2LTIuMThsLTIuOTEtMi4yNmE1LjQgNS40IDAgMCAxLTguMDktMi44NWgtM3YyLjMzQTkgOSAwIDAgMCA5IDE4eiIvPjxwYXRoIGZpbGw9IiNGQkJDMDUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMuOTYgMTAuNzFhNS40MSA1LjQxIDAgMCAxIDAtMy40MlY0Ljk2aC0zYTkgOSAwIDAgMCAwIDguMDhsMy0yLjMzeiIvPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMy41OGMxLjMyIDAgMi41LjQ1IDMuNDQgMS4zNWwyLjU4LTIuNTlBOSA5IDAgMCAwIC45NiA0Ljk1bDMgMi4zNEE1LjM2IDUuMzYgMCAwIDEgOSAzLjU4eiIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDE4IDAgMTggMTggMCAxOCIvPjwvZz48L3N2Zz4=)}.social-button .social-button-icon.linkedin-icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC45OCAzLjVjMCAxLjM4MS0xLjExIDIuNS0yLjQ4IDIuNXMtMi40OC0xLjExOS0yLjQ4LTIuNWMwLTEuMzggMS4xMS0yLjUgMi40OC0yLjVzMi40OCAxLjEyIDIuNDggMi41em0uMDIgNC41aC01djE2aDV2LTE2em03Ljk4MiAwaC00Ljk2OHYxNmg0Ljk2OXYtOC4zOTljMC00LjY3IDYuMDI5LTUuMDUyIDYuMDI5IDB2OC4zOTloNC45ODh2LTEwLjEzMWMwLTcuODgtOC45MjItNy41OTMtMTEuMDE4LTMuNzE0di0yLjE1NXoiLz48L3N2Zz4=)}.social-button .social-button-text{letter-spacing:.5px;font-weight:bold;line-height:46px;height:46px;-webkit-padding-start:12px;-moz-padding-start:12px;padding-inline-start:12px;position:relative;-webkit-box-flex:2;-webkit-flex-grow:2;-moz-box-flex:2;-ms-flex-positive:2;flex-grow:2}.social-button.google-button{-webkit-padding-start:4px;-moz-padding-start:4px;padding-inline-start:4px;background:#f5f5f5}.social-button.google-button .social-button-text{color:#404040;background-color:#f5f5f5}.social-button.github-button{background:#222}.social-button.github-button .social-button-text{background-color:#333}.social-button.saml-button{background:#3c2697}.social-button.saml-button .social-button-text{color:white;background-color:#116}.social-button.linkedin-button{-webkit-padding-start:4px;-moz-padding-start:4px;padding-inline-start:4px;background:#f5f5f5}.social-button.linkedin-button .social-button-text{color:#404040;background-color:#f5f5f5}",
          }),
        });
    },
    32301: function (e, t, n) {
      n.d(t, {
        pC: function () {
          return s;
        },
        S6: function () {
          return m;
        },
        F6: function () {
          return l;
        },
        S9: function () {
          return f;
        },
        Wj: function () {
          return c;
        },
      });
      var i = n(456552),
        r = n(285556);
      function o(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const s = (e) => {
        return (0, i.useQuery)(
          "useCanSubmitTravelRequests",
          ((t = function* () {
            return (yield (0, r.ZP)(
              null,
              "/internal/location_policy/travel_request/can_submit",
              { method: "GET" }
            )).canSubmit;
          }),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, r) {
              var s = t.apply(e, n);
              function a(e) {
                o(s, i, r, a, l, "next", e);
              }
              function l(e) {
                o(s, i, r, a, l, "throw", e);
              }
              a(void 0);
            });
          }),
          {
            refetchOnWindowFocus: !1,
            onSuccess: e,
            onError: (e) => (0, r.vj)(e, { handleHttp: !0 }),
          }
        );
        var t;
      };
      function a(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const l = (e) => {
        const t = (0, i.useQueryClient)();
        return (0, i.useMutation)(
          "useCreateTravelRequest",
          (function () {
            var e,
              t =
                ((e = function* (e) {
                  return (0, r.ZP)(
                    null,
                    "/internal/location_policy/travel_request",
                    { method: "POST", body: e }
                  );
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var o = e.apply(t, n);
                    function s(e) {
                      a(o, i, r, s, l, "next", e);
                    }
                    function l(e) {
                      a(o, i, r, s, l, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          {
            onSuccess: () => {
              t.invalidateQueries("useListTravelRequests"), e();
            },
            onError: (e) => (0, r.vj)(e, { handleHttp: !0 }),
          }
        );
      };
      n(526943);
      function u(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const c = (e) => {
        const t = (0, i.useQueryClient)();
        return (0, i.useMutation)(
          "useUpdateTravelRequest",
          (function () {
            var e,
              t =
                ((e = function* (e) {
                  return (0, r.ZP)(
                    null,
                    `/internal/location_policy/travel_request/${e.id}`,
                    { method: "POST", body: e }
                  );
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var o = e.apply(t, n);
                    function s(e) {
                      u(o, i, r, s, a, "next", e);
                    }
                    function a(e) {
                      u(o, i, r, s, a, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          {
            onSuccess: () => {
              t.invalidateQueries("useListTravelRequests"), e();
            },
            onError: (e) => (0, r.vj)(e, { handleHttp: !0 }),
          }
        );
      };
      function d(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const m = (e) => {
        const t = (0, i.useQueryClient)();
        return (0, i.useMutation)(
          "useCancelTravelRequest",
          (function () {
            var e,
              t =
                ((e = function* (e) {
                  return (0, r.ZP)(
                    null,
                    `/internal/location_policy/travel_request/${e.id}/cancel`,
                    { method: "POST" }
                  );
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, r) {
                    var o = e.apply(t, n);
                    function s(e) {
                      d(o, i, r, s, a, "next", e);
                    }
                    function a(e) {
                      d(o, i, r, s, a, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          {
            onSuccess: () => {
              t.invalidateQueries("useListTravelRequests"), e();
            },
            onError: (e) => (0, r.vj)(e, { handleHttp: !0 }),
          }
        );
      };
      function p(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const f = (e) => {
        return (0, i.useQuery)(
          "useIsUsingApprovedTravelRequest",
          ((t = function* () {
            return (yield (0, r.ZP)(
              null,
              "/internal/location_policy/travel_request/using_approved_travel",
              { method: "GET" }
            )).isUsingApprovedTravelRequest;
          }),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, r) {
              var o = t.apply(e, n);
              function s(e) {
                p(o, i, r, s, a, "next", e);
              }
              function a(e) {
                p(o, i, r, s, a, "throw", e);
              }
              s(void 0);
            });
          }),
          {
            refetchOnWindowFocus: !1,
            onSuccess: e,
            onError: (e) => (0, r.vj)(e, { handleHttp: !0 }),
          }
        );
        var t;
      };
    },
    526943: function (e, t, n) {
      n.d(t, {
        B: function () {
          return s;
        },
      });
      var i = n(456552),
        r = n(285556);
      function o(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      const s = (e) => {
        return (0, i.useQuery)(
          "useListTravelRequests",
          ((t = function* () {
            return (yield (0, r.ZP)(
              null,
              "/internal/location_policy/travel_requests",
              { method: "GET" }
            )).travelRequests;
          }),
          function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, r) {
              var s = t.apply(e, n);
              function a(e) {
                o(s, i, r, a, l, "next", e);
              }
              function l(e) {
                o(s, i, r, a, l, "throw", e);
              }
              a(void 0);
            });
          }),
          {
            refetchOnWindowFocus: !1,
            onSuccess: e,
            onError: (e) => (0, r.vj)(e, { handleHttp: !0 }),
          }
        );
        var t;
      };
    },
    507099: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = n(824246),
        r = (n(827378), n(773851)),
        o = n(602963),
        s = n(599789),
        a = n(792739),
        l = n(285556),
        u = n(604375),
        c = n(788524),
        d = n(416534),
        m = n(713222);
      function p(e, t, n, i, r, o, s) {
        try {
          var a = e[o](s),
            l = a.value;
        } catch (u) {
          return void n(u);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, r);
      }
      var f = ({
          verified: e,
          userId: t,
          redirectUrl: n,
          platform: f = s.TaskingPlatform.Remotasks,
          required: v = !1,
          vanityName: h = "",
          fromOnboarding: x = !1,
        }) => {
          const y = {};
          let b;
          f === s.TaskingPlatform.Remotasks
            ? (b = "/internal/login/remotasks/linkedin-remotasks")
            : f === s.TaskingPlatform.Outlier &&
              (b = "/internal/login/outlier/linkedin-outlier"),
            n && (y.redirect_url = n),
            t && (y.userId = t);
          const j = (0, r.buildURL)("", b, y),
            g = (function () {
              var t,
                n =
                  ((t = function* () {
                    try {
                      (yield (0, l.ZP)(
                        null,
                        "internal/worker/profile/unlink_linkedin",
                        { method: "POST" }
                      )).ok && ((e = !1), window.location.reload());
                    } catch (t) {
                      (0, l.cF)(t, "Failed to unlink LinkedIn account");
                    }
                  }),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (i, r) {
                      var o = t.apply(e, n);
                      function s(e) {
                        p(o, i, r, s, a, "next", e);
                      }
                      function a(e) {
                        p(o, i, r, s, a, "throw", e);
                      }
                      s(void 0);
                    });
                  });
              return function () {
                return n.apply(this, arguments);
              };
            })();
          if (f === s.TaskingPlatform.Outlier) {
            const t =
              "https://scale-static-assets.s3.us-west-2.amazonaws.com/outlier/images/linkedin.png";
            return (0, i.jsxs)("div", {
              className:
                "flex items-center px-4 py-3 border rounded-lg min-w-fit max-sm:flex-wrap gap-4",
              style: { border: "1px solid var(--color-RemoGray20)" },
              children: [
                (0, i.jsx)("div", {
                  className:
                    "flex shrink-0 w-12 h-12 p-[7.5px] justify-center items-center gap-[7.5px] rounded bg-white shadow",
                  children: (0, i.jsx)("img", {
                    src: t,
                    className: "rounded pl-0.5",
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-col flex-grow mx-4",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, i.jsx)("p", {
                          className: "text-sm font-medium",
                          children: "LinkedIn Account",
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-2 max-h-6 pl-0.5",
                          children:
                            (v || e) &&
                            (0, i.jsx)(c.V, {
                              variant: e ? "success" : "neutral",
                              children: e ? "Connected" : "Required",
                            }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: "text-sm mt-2 text-neutral-500",
                      style: { wordBreak: "break-word" },
                      children: e
                        ? `LinkedIn account ${h} connected`
                        : "Connect your LinkedIn account to verify your identity. You can unlink your account at any time.",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  children: e
                    ? x
                      ? null
                      : (0, i.jsx)(d.zx, {
                          className: "px-2 py-2 w-max",
                          variant: "white",
                          onClick: () => g(),
                          children: "Disconnect",
                        })
                    : (0, i.jsx)(d.zx, {
                        className: "px-2 py-2 w-max",
                        variant: "primary",
                        onClick: () => {
                          window.location.href = j;
                        },
                        children: "Connect LinkedIn",
                      }),
                }),
                e &&
                  (0, i.jsx)(m.J, {
                    icon: "check-circle",
                    variant: "primary",
                    size: "lg",
                  }),
              ],
            });
          }
          return e
            ? (0, i.jsxs)("div", {
                style: { display: "flex", flexGrow: 1 },
                children: [
                  (0, i.jsx)(o.Z, {}),
                  (0, i.jsxs)("p", {
                    style: { width: "50%" },
                    className: "social-button linkedin-button",
                    children: [
                      (0, i.jsx)("span", {
                        className: "social-button-icon linkedin-icon",
                      }),
                      (0, i.jsxs)("span", {
                        className: "social-button-text",
                        children: [" ", "linkedin verified"],
                      }),
                    ],
                  }),
                  (0, i.jsx)(u.u, {
                    title: "Unlink Your LinkedIn Account",
                    children: (0, i.jsx)(u.hU, {
                      size: "small",
                      onClick: () => g(),
                      children: (0, i.jsx)(a.G, {
                        icon: "unlink",
                        color: "grey",
                      }),
                    }),
                  }),
                ],
              })
            : (0, i.jsxs)("div", {
                style: { display: "flex", flexGrow: 1 },
                children: [
                  (0, i.jsx)(o.Z, {}),
                  (0, i.jsxs)("a", {
                    href: j,
                    style: { width: "50%" },
                    className: "social-button linkedin-button",
                    children: [
                      (0, i.jsx)("span", {
                        className: "social-button-icon linkedin-icon",
                      }),
                      (0, i.jsxs)("span", {
                        className: "social-button-text",
                        children: [" ", "connect to linkedin"],
                      }),
                    ],
                  }),
                ],
              });
        },
        v = f;
    },
  },
]);
