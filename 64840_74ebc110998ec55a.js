"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [64840],
  {
    690845: function (e, t, i) {
      i.d(t, {
        Q: function () {
          return A;
        },
        Z: function () {
          return G;
        },
      });
      var n = i(824246),
        r = i(827378),
        s = i(279220),
        o = i(298784),
        a = i.n(o),
        l = i(138944),
        c = i(257881),
        u = i(98283),
        d = i(460327),
        p = i(686677),
        f = i(679892),
        g = i.n(f),
        v = i(220453),
        h = i(746332),
        m = i(722030),
        x = i(416534);
      var y = (e) => {
          const { course: t, handleBeginCourse: i } = e,
            s = a().get(e.course, "title"),
            o = a().get(e.course, "description");
          return (
            (0, r.useEffect)(() => {
              o || i(t._id);
            }, [t, o, i]),
            o
              ? (0, n.jsxs)("div", {
                  className:
                    g().dynamic([
                      [
                        "f167ab90d978a142",
                        [
                          h.MOBILE_THRESHOLD,
                          h.MOBILE_THRESHOLD,
                          h.MOBILE_THRESHOLD,
                        ],
                      ],
                    ]) + " course-intro",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        g().dynamic([
                          [
                            "f167ab90d978a142",
                            [
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                            ],
                          ],
                        ]) + " title",
                      children: (0, n.jsx)("strong", {
                        className: g().dynamic([
                          [
                            "f167ab90d978a142",
                            [
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                            ],
                          ],
                        ]),
                        children: s,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: v.ZP.render(o || "") },
                      className:
                        g().dynamic([
                          [
                            "f167ab90d978a142",
                            [
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                            ],
                          ],
                        ]) + " body",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        g().dynamic([
                          [
                            "f167ab90d978a142",
                            [
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                              h.MOBILE_THRESHOLD,
                            ],
                          ],
                        ]) + " footer",
                      children: (0, n.jsx)(x.zx, {
                        size: "lg",
                        variant: "primary",
                        onClick: () => {
                          i(t._id);
                        },
                        className: "max-w-sm justify-center",
                        fullWidth: !0,
                        children: "Start",
                      }),
                    }),
                    (0, n.jsx)(g(), {
                      id: "f167ab90d978a142",
                      dynamic: [
                        h.MOBILE_THRESHOLD,
                        h.MOBILE_THRESHOLD,
                        h.MOBILE_THRESHOLD,
                      ],
                      children: `.course-intro.__jsx-style-dynamic-selector{color:black}.title.__jsx-style-dynamic-selector{border-bottom:1px solid var(--color-RemoGray10);font-size:20px;padding:32px}@media(max-width:${h.MOBILE_THRESHOLD}){.title.__jsx-style-dynamic-selector{font-size:18px;padding:32px}}.body.__jsx-style-dynamic-selector{margin-bottom:32px;display:grid;grid-template-columns:auto auto;grid-column-gap:96px;font-size:18px;padding:32px}@media(max-width:${h.MOBILE_THRESHOLD}){.body.__jsx-style-dynamic-selector{grid-column-gap:initial;font-size:14px}}.footer.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;padding:16px}@media(max-width:${h.MOBILE_THRESHOLD}){.footer.__jsx-style-dynamic-selector{position:absolute;bottom:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:16px}}.requirements.__jsx-style-dynamic-selector{width:360px;-webkit-padding-start:48px;-moz-padding-start:48px;padding-inline-start:48px;-webkit-border-start:1px solid var(--color-RemoGray01);-moz-border-start:1px solid var(--color-RemoGray01);border-inline-start:1px solid var(--color-RemoGray01)}.label.__jsx-style-dynamic-selector{margin-bottom:1em;font-weight:600;font-size:18px;color:var(--color-RemoGreen)}.reward.__jsx-style-dynamic-selector{margin:32px 32px 0;padding:8px 16px!important;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:var(--color-RemoGreen);color:white;font-weight:500}`,
                    }),
                  ],
                })
              : (0, n.jsx)("div", {
                  className: "w-full h-[80vh] flex justify-center items-center",
                  children: (0, n.jsx)(m.$, { size: "lg" }),
                })
          );
        },
        b = i(161320),
        S = i.n(b);
      var j = (e) =>
          (0, n.jsx)("div", {
            className: "border-solid py-1 border-neutral-200",
            children: (0, n.jsx)("div", {
              className: "flex justify-between items-center",
              children:
                e.course.isCertification &&
                void 0 !== e.certificationTimeRemainingSecs &&
                e.courseProgress.currentSection !== e.course.sections.length &&
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("span", {
                      className: "px-5",
                      children: " Time Remaining",
                    }),
                    S()
                      .utc(
                        S()
                          .duration(e.certificationTimeRemainingSecs, "seconds")
                          .asMilliseconds()
                      )
                      .format("HH:mm:ss"),
                  ],
                }),
            }),
          }),
        I = i(713222),
        w = i(682603),
        T = i(776845),
        P = i(691067),
        C = i(599789),
        k = i(252708),
        O = i.n(k),
        R = i(775222),
        E = i(513622),
        L = i(792739),
        N = i(543885),
        _ = i(285563),
        Z = i(554211),
        M = i(595334);
      var H = ({ course: e, courseProgress: t, onContinue: i }) => {
          var r, s;
          if (
            !(
              Boolean(
                null === e || void 0 === e ? void 0 : e.isCertification
              ) &&
              Boolean(
                (!1 ===
                  (null === t ||
                  void 0 === t ||
                  null === (r = t.certificationInfo) ||
                  void 0 === r
                    ? void 0
                    : r.certificationPassed) &&
                  (null === e || void 0 === e
                    ? void 0
                    : e.summaryMessageOnCertificationFail)) ||
                  (!0 ===
                    (null === t ||
                    void 0 === t ||
                    null === (s = t.certificationInfo) ||
                    void 0 === s
                      ? void 0
                      : s.certificationPassed) &&
                    (null === e || void 0 === e
                      ? void 0
                      : e.summaryMessageOnCompletionOrCertificationPass))
              )
            ) ||
            !t
          )
            return null;
          const { certificationInfo: o } = t;
          return (0, n.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center text-center mt-4 gap-8",
            children: [
              (0, n.jsx)(T.ZT.H3, {
                children: (
                  null === o || void 0 === o ? void 0 : o.certificationPassed
                )
                  ? null === e || void 0 === e
                    ? void 0
                    : e.summaryMessageOnCompletionOrCertificationPass
                  : e.summaryMessageOnCertificationFail,
              }),
              (0, n.jsx)(x.zx, { onClick: i, children: "Continue" }),
            ],
          });
        },
        q = i(719646);
      function F(e, t, i, n, r, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void i(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function B(e) {
        return function () {
          var t = this,
            i = arguments;
          return new Promise(function (n, r) {
            var s = e.apply(t, i);
            function o(e) {
              F(s, n, r, o, a, "next", e);
            }
            function a(e) {
              F(s, n, r, o, a, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function Q(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              Q(e, t, i[t]);
            });
        }
        return e;
      }
      let D = null;
      const A = ({
        sections: e,
        estimatedTime: t,
        handleSectionNavigate: i,
      }) => {
        var s;
        const { 0: o, 1: c } = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            a().every(e, "isFinished") && c(!1);
          }, [e]),
          (0, n.jsxs)("div", {
            className:
              "my-3 mx-4 border border-neutral-200 rounded-lg items-center",
            children: [
              (0, n.jsxs)("div", {
                className: (0, l.default)(
                  "py-3 px-2 flex justify-between cursor-pointer",
                  { "border-b border-b-neutral-200": o }
                ),
                onClick: () => {
                  c((e) => !e);
                },
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex items-center flex-1 font-semibold text-base",
                    children: [
                      (0, n.jsx)(I.J, {
                        icon: o ? "chevron-down" : "chevron-right",
                        variant: "black",
                        size: "lg",
                      }),
                      (0, n.jsx)("span", {
                        className: "flex-1",
                        children:
                          null === (s = e[0].courseSectionGroup) || void 0 === s
                            ? void 0
                            : s.name,
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "pr-2 flex justify-end items-center",
                    children: [
                      (0, n.jsx)(w.A, {
                        className: "ml-2",
                        label: `${t} min.`,
                        leadingIcon: "clock",
                      }),
                      a().every(e, "isFinished") &&
                        (0, n.jsx)(L.G, {
                          color: "rgba(59, 118, 165, 1)",
                          className: "ml-2",
                          icon: "check-circle",
                        }),
                    ],
                  }),
                ],
              }),
              o &&
                (0, n.jsx)("div", {
                  className: "py-2",
                  children: e.map((e, t) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        onClick: () => {
                          "number" ===
                            typeof (null === e || void 0 === e
                              ? void 0
                              : e.sectionIndex) &&
                            i &&
                            i(
                              null === e || void 0 === e
                                ? void 0
                                : e.sectionIndex
                            );
                        },
                        className:
                          "py-2 px-4 flex " +
                          (e.isCurrent
                            ? "font-bold cursor-pointer"
                            : e.isFinished || e.isLatestSection
                            ? "cursor-pointer"
                            : "text-neutral-400 cursor-not-allowed"),
                        children: [
                          (0, n.jsxs)("span", {
                            className: "flex-1",
                            children: [t + 1, ". ", e.title || "(untitled)"],
                          }),
                          (0, n.jsxs)("span", {
                            className: "w-24 ml-4 text-right",
                            children: [
                              e.estimatedTime || 0,
                              " minute",
                              1 === e.estimatedTime ? "" : "s",
                            ],
                          }),
                        ],
                      },
                      `${e.title}-${t}`
                    )
                  ),
                }),
            ],
          })
        );
      };
      var G = ({
        user: e,
        courseId: t,
        returnToTasking: i,
        isInQueue: o,
        assignments: f,
        fetchCourseProgressPercent: g,
        isRedirecting: v,
        readOnly: h = !1,
      }) => {
        var b, S, w;
        const { query: k } = (0, p.useRouter)(),
          L = (0, N.wL)(),
          { 0: F, 1: Q } = (0, r.useState)(),
          { 0: G, 1: $ } = (0, r.useState)(""),
          { 0: V, 1: W } = (0, r.useState)(""),
          { 0: U, 1: J } = (0, r.useState)(-1),
          { 0: Y, 1: K } = (0, r.useState)(null),
          { 0: X, 1: ee } = (0, r.useState)([]),
          { 0: te, 1: ie } = (0, r.useState)(!0),
          { showRemainingTriesPopup: ne, setShowRemainingTriesPopup: re } = (0,
          M.n)((e) => ({
            showRemainingTriesPopup: e.showRemainingTriesPopup,
            setShowRemainingTriesPopup: e.setShowRemainingTriesPopup,
          })),
          { 0: se, 1: oe } = (0, r.useState)(!1),
          ae = h && F && F.completed,
          { data: le, isSuccess: ce } = (0, Z._z)("use-peek-queue", {}, !1),
          { data: ue, isFetching: de } = (0, q.ze)({
            enabled: ce && null !== le && void 0 !== le && le,
          }),
          { value: pe } = (0, s.Z)(
            B(function* () {
              if (le || de || !ce) return null;
              try {
                return yield (0, E.b4)();
              } catch (e) {
                return null;
              }
            }),
            []
          ),
          fe = le
            ? (0, q.Rc)(ue)
            : null === pe || void 0 === pe
            ? void 0
            : pe.qualificationListId,
          { value: ge, loading: ve } = (0, s.Z)(
            B(function* () {
              if (t)
                try {
                  const e = yield c.Z.labeling.getCourseInfo(t);
                  var i, n;
                  if (
                    (e.courseProgress &&
                      (Q(e.courseProgress), $(e.courseProgress._id)),
                    h)
                  )
                    (
                      null === (i = e.courseProgress) || void 0 === i
                        ? void 0
                        : i.completed
                    )
                      ? (null === (n = e.course) || void 0 === n
                          ? void 0
                          : n.isCertification) &&
                        W(
                          "This course can't be viewed after being completed. Please contact support if you believe this is an error."
                        )
                      : W(
                          "You can't view this course because you haven't completed it yet. Please contact support if you believe this is an error."
                        );
                  return e.course;
                } catch (s) {
                  var r;
                  const i = JSON.parse(JSON.stringify(s)),
                    n =
                      (null === i ||
                      void 0 === i ||
                      null === (r = i.response) ||
                      void 0 === r
                        ? void 0
                        : r.message) ||
                      "Something went wrong, please try again later.";
                  L.error(
                    `Failed to load course info - ${t}`,
                    {
                      courseId: t,
                      feature: "course",
                      qualificationListId: fe,
                      errorMessage: n,
                    },
                    s
                  ),
                    W(n),
                    R.c.track("Training - Errored getting course info.", {
                      userId: e._id,
                      courseId: t,
                      workerTeamId: e.activeWorkerTeam,
                      qualificationListId: fe,
                      errorMessage: n,
                    });
                }
            }),
            [t, fe]
          ),
          he =
            Boolean(
              null === ge || void 0 === ge ? void 0 : ge.isCertification
            ) &&
            Boolean(
              (!1 ===
                (null === F ||
                void 0 === F ||
                null === (b = F.certificationInfo) ||
                void 0 === b
                  ? void 0
                  : b.certificationPassed) &&
                (null === ge || void 0 === ge
                  ? void 0
                  : ge.summaryMessageOnCertificationFail)) ||
                (!0 ===
                  (null === F ||
                  void 0 === F ||
                  null === (S = F.certificationInfo) ||
                  void 0 === S
                    ? void 0
                    : S.certificationPassed) &&
                  (null === ge || void 0 === ge
                    ? void 0
                    : ge.summaryMessageOnCompletionOrCertificationPass))
            );
        const me = (function () {
          var e = B(function* (e) {
            try {
              const { courseProgress: t } = yield c.Z.labeling.beginCourse(e);
              t.completed
                ? R.c.track("Training - Viewing completed course")
                : R.c.track("Training - Starting course"),
                $(t._id),
                Y || K(t.certificationInfo.certificationTimeRemainingSecs);
              const i =
                (null === ge || void 0 === ge ? void 0 : ge.sections) || [];
              ee(i),
                (function (e) {
                  var t;
                  const i =
                    null === e ||
                    void 0 === e ||
                    null === (t = e.certificationInfo) ||
                    void 0 === t
                      ? void 0
                      : t.randomizedSections;
                  i && i.length > 0 && ee(i);
                })(t),
                (function (e) {
                  const t =
                    null === e || void 0 === e ? void 0 : e.overridingSections;
                  t && t.length > 0 && ee(t);
                })(t);
              const n = t.currentSection;
              h &&
              t.completed &&
              !(null === ge || void 0 === ge ? void 0 : ge.isCertification)
                ? J(0)
                : J(n),
                Q(t);
            } catch (t) {
              L.error(
                `Failed to begin course - ${e}`,
                { courseId: e, feature: "course" },
                t.message
              ),
                O().error(`Failed to begin course: ${t.message}`),
                R.c.track("Training - Failed to begin course");
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        (0, r.useEffect)(() => {
          a().isNil(U) || window.scrollTo(0, 0);
        }, [U]),
          (0, r.useEffect)(
            () => (
              ge &&
                U !== ge.sections.length &&
                null !== Y &&
                (D = setInterval(
                  B(function* () {
                    Y > 0 && K(Y - 1);
                  }),
                  1e3
                )),
              () => {
                B(function* () {
                  0 === Y &&
                    (yield c.Z.labeling.certificationTimeRemainingSecsSync(
                      G,
                      Y
                    ));
                })(),
                  clearInterval(D);
              }
            ),
            [Y, G, ge, U]
          );
        const xe = (e) => {
            const t = null === F || void 0 === F ? void 0 : F.currentSection;
            void 0 !== t &&
              (e > t ||
                (R.c.track("Training - Navigating between course sections"),
                J(e)));
          },
          ye = () => {
            U > 0 && J(U - 1);
          },
          be = (function () {
            var e = B(function* (e) {
              if (F && !ae) {
                const t = yield c.Z.labeling.continueCourse(
                  F._id,
                  z({}, e, {
                    certificationTimeRemainingSecs: Y,
                    currentSectionState: U,
                    readOnly: ae,
                  })
                );
                g && g(),
                  Q(t.courseProgress),
                  t.retry
                    ? re(!0)
                    : (R.c.track("Training - Completes individual section"),
                      J(U + 1));
              } else R.c.track("Training - Moves to next section without any changes"), J(U + 1);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          Se = (0, Z._z)("enable-course-rating", { userId: e._id }, !1).data,
          je = () => {
            o
              ? i()
              : "onboarding" === k.origin
              ? (0, u.ZP)({}, "/expert/onboarding")
              : k.returnTo
              ? (0, u.ZP)({}, k.returnTo)
              : (0, u.ZP)({}, "/expert");
          },
          Ie = (function () {
            var e = B(function* (e, t) {
              F &&
                !ae &&
                (yield c.Z.labeling.rateCourse(F._id, {
                  rating: e,
                  feedback: t,
                }),
                R.c.track("Training - Rated course")),
                je();
            });
            return function (t, i) {
              return e.apply(this, arguments);
            };
          })(),
          we = () => {
            if (!ge) return null;
            if (U >= X.length)
              return ae || !he || se
                ? ae || (null === F || void 0 === F ? void 0 : F.rating) || !Se
                  ? void je()
                  : (0, n.jsx)(_.Z, { ratingOnSubmit: Ie })
                : (0, n.jsx)(H, {
                    course: ge,
                    courseProgress: F,
                    onContinue: () => oe(!0),
                  });
            const t = X[U];
            return F
              ? (0, r.createElement)(
                  d.ZP,
                  z({}, t, {
                    sectionIndex: U,
                    course: ge,
                    handlePrevious: ye,
                    canAlwaysContinue: !!(
                      U < F.currentSection ||
                      ae ||
                      (ge.isCertification &&
                        ![
                          C.CourseSectionType.Scenario,
                          C.CourseSectionType.Rating,
                          C.CourseSectionType.AccountVerification,
                          C.CourseSectionType.RichText,
                          C.CourseSectionType.Confirm,
                          C.CourseSectionType.Video,
                          C.CourseSectionType.TextResponse,
                          C.CourseSectionType.TextResponseRewrite,
                          C.CourseSectionType.PromptSelectionResponse,
                          C.CourseSectionType.MultipleChoice,
                          C.CourseSectionType.ResumeScreening,
                          C.CourseSectionType.BackgroundCheck,
                        ].includes(t.type))
                    ),
                    handleContinue: be,
                    key: U,
                    userFlags: e.featureFlags,
                    user: e,
                    readOnly: ae,
                  })
                )
              : (O().error(
                  "Failed to load your course progress, please try again later!"
                ),
                void R.c.track("Training - Failed to load course progress"));
          },
          Te = (0, r.useMemo)(() => {
            const e = {};
            return (
              (
                (null === ge || void 0 === ge ? void 0 : ge.sections) || []
              ).forEach((t, i) => {
                if (t.courseSectionGroup) {
                  const n = t.courseSectionGroup.name;
                  e[n] || (e[n] = []),
                    (e[n] = [
                      ...e[n],
                      z({}, t, {
                        sectionIndex: i,
                        isCurrent: U === i,
                        isLatestSection:
                          (null === F || void 0 === F
                            ? void 0
                            : F.currentSection) === i,
                        isFinished:
                          !!(null === F || void 0 === F
                            ? void 0
                            : F.currentSection) &&
                          i <
                            (null === F || void 0 === F
                              ? void 0
                              : F.currentSection),
                      }),
                    ]);
                }
              }),
              e
            );
          }, [ge, null === F || void 0 === F ? void 0 : F.currentSection, U]),
          Pe =
            (null === (w = X[U]) || void 0 === w ? void 0 : w.type) ===
            C.CourseSectionType.Rating;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: (0, l.default)(
                "scaleui outlier-theme flex justify-between",
                {
                  "pl-[420px]":
                    te &&
                    !ve &&
                    !V &&
                    (null === ge || void 0 === ge
                      ? void 0
                      : ge.enableSectionGrouping),
                  "pl-14": !te,
                }
              ),
              children: [
                !ve &&
                  !V &&
                  (null === ge || void 0 === ge
                    ? void 0
                    : ge.enableSectionGrouping) &&
                  (0, n.jsx)("div", {
                    className: (0, l.default)(
                      "fixed top-[72px] bottom-[60px] left-0 bg-neutral-0 border-r border-r-neutral-200 overflow-y-scroll",
                      { "w-[420px]": te, "w-14": !te }
                    ),
                    children: (0, n.jsxs)("div", {
                      className: "pb-2",
                      children: [
                        (0, n.jsxs)("div", {
                          className: (0, l.default)(
                            "py-3 px-4 flex justify-between items-center font-semibold text-base",
                            { "border-b border-b-neutral-200": te }
                          ),
                          children: [
                            te &&
                              (0, n.jsx)("span", {
                                children: "Course Overview",
                              }),
                            (0, n.jsx)(I.J, {
                              icon: te ? "chevron-left" : "chevron-right",
                              size: "md",
                              onClick: () => {
                                ie((e) => !e);
                              },
                            }),
                          ],
                        }),
                        te &&
                          Object.values(Te).map((e, t) =>
                            (0, n.jsx)(
                              A,
                              {
                                sections: e,
                                estimatedTime: e.reduce(
                                  (e, t) => e + (t.estimatedTime || 0),
                                  0
                                ),
                                handleSectionNavigate: xe,
                                isCertification: !!(null === ge || void 0 === ge
                                  ? void 0
                                  : ge.isCertification),
                              },
                              `${e[0].title}-${t}-parent`
                            )
                          ),
                      ],
                    }),
                  }),
                (0, n.jsx)("div", {
                  className: (0, l.default)("w-[80vw] m-auto pb-10", {
                    "max-w-[1080px]": !Pe,
                    "max-w-screen-2xl": Pe,
                  }),
                  children: (0, n.jsx)("div", {
                    children: (() => {
                      if (V)
                        return (0, n.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center p-20",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center justify-center",
                              children: [
                                (0, n.jsx)(I.J, {
                                  icon: "exclamation-circle",
                                  variant: "danger",
                                }),
                                (0, n.jsx)(T.ZT.Subtitle2, {
                                  children:
                                    "There was an error loading this course.",
                                }),
                              ],
                            }),
                            (0, n.jsx)(T.ZT.Paragraph1, { children: V }),
                          ],
                        });
                      if (!ge || ve || v)
                        return (0, n.jsx)("div", {
                          className:
                            "w-full h-[80vh] flex justify-center items-center",
                          children: (0, n.jsx)(m.$, { size: "lg" }),
                        });
                      if (-1 === U) {
                        const e = a().get(f, [0, "courseList"], []),
                          i = e.indexOf(t);
                        return (0, n.jsx)(y, {
                          course: ge,
                          isInQueue: o,
                          numCourses: e.length - i,
                          handleBeginCourse: me,
                        });
                      }
                      return F
                        ? (0, n.jsxs)("div", {
                            children: [
                              (0, n.jsx)(j, {
                                course: ge,
                                sections: X,
                                courseProgress: F,
                                currentSection: U,
                                handleSectionNavigate: xe,
                                isInQueue: o,
                                certificationTimeRemainingSecs: Y,
                              }),
                              we(),
                            ],
                          })
                        : (0, n.jsx)("div", {
                            className:
                              "w-full h-[80vh] flex justify-center items-center",
                            children: (0, n.jsx)(m.$, { size: "lg" }),
                          });
                    })(),
                  }),
                }),
              ],
            }),
            (0, n.jsx)(P.u, {
              open: ne,
              onClose: () => {
                re(!1);
              },
              title: "Try again!",
              innerClassName: "max-w-sm",
              actions: (0, n.jsx)("div", {
                className: "flex items-center gap-2 justify-end",
                children: (0, n.jsx)(x.zx, {
                  onClick: () => {
                    re(!1);
                  },
                  children: "Retry",
                }),
              }),
              children:
                "You can try to answer this section again. Please note that if this is your last try and you answer incorrectly again, you won't be notified, and you'll continue to the next section anyways.",
            }),
          ],
        });
      };
    },
    461423: function (e, t, i) {
      i.d(t, {
        r: function () {
          return v;
        },
      });
      var n = i(824246),
        r = i(827378),
        s = i(679892),
        o = i.n(s),
        a = i(492181),
        l = i(59524),
        c = i(416534);
      const u = ({
        user: e,
        pageTitle: t,
        skipLabel: i,
        skipView: s,
        handleSkip: u,
      }) => (
        (0, r.useEffect)(() => {
          const i = {
            userId: null === e || void 0 === e ? void 0 : e.id,
            pageTitle: t,
          };
          (0, l.Kz)(l.ju.OutlierNoMobileEvent, i);
        }, [t, e.id]),
        (0, n.jsxs)("div", {
          className:
            "jsx-fa68611bcaf73128 scaleui scale-tailwind outlier-theme",
          children: [
            (0, n.jsx)("div", {
              style: { padding: "28% 0" },
              className:
                "jsx-fa68611bcaf73128 bg-gradient-to-br flex justify-center w-full",
              children: (0, n.jsx)(a.Z, {}),
            }),
            (0, n.jsxs)("div", {
              className:
                "jsx-fa68611bcaf73128 flex-col justify-center align-center w-full py-12 px-10",
              children: [
                (0, n.jsx)("h1", {
                  className:
                    "jsx-fa68611bcaf73128 text-lg font-medium text-slate-900",
                  children: "Switch Devices",
                }),
                (0, n.jsx)("h2", {
                  className:
                    "jsx-fa68611bcaf73128 leading-8 py-2 text-neutral-700",
                  children:
                    "This page's mobile view is currently under construction. To access this page, please use a desktop or laptop.",
                }),
                s &&
                  i &&
                  (0, n.jsx)(c.zx, {
                    className: "mt-6",
                    size: "lg",
                    onClick: u,
                    children: i,
                  }),
              ],
            }),
            (0, n.jsx)(o(), {
              id: "fa68611bcaf73128",
              children:
                ".bg-gradient-to-br.jsx-fa68611bcaf73128{background-image:-webkit-radial-gradient(72%92%,,hsla(61,48%,85%,.7)0px,transparent 50%),-webkit-radial-gradient(54%23%,,hsla(189,64%,73%,.7)0px,transparent 50%),-webkit-radial-gradient(18%13%,,hsla(195,33%,79%,.7)0px,transparent 50%),-webkit-radial-gradient(82%58%,,hsla(193,25%,65%,.7)0px,transparent 50%),-webkit-radial-gradient(3%94%,,hsla(215,48%,72%,.7)0px,transparent 50%),-webkit-radial-gradient(29%44%,,hsla(278,30%,79%,.7)0px,transparent 50%),-webkit-radial-gradient(84%15%,,hsla(323,47%,74%,.7)0px,transparent 50%);background-image:-moz-radial-gradient(72%92%,,hsla(61,48%,85%,.7)0px,transparent 50%),-moz-radial-gradient(54%23%,,hsla(189,64%,73%,.7)0px,transparent 50%),-moz-radial-gradient(18%13%,,hsla(195,33%,79%,.7)0px,transparent 50%),-moz-radial-gradient(82%58%,,hsla(193,25%,65%,.7)0px,transparent 50%),-moz-radial-gradient(3%94%,,hsla(215,48%,72%,.7)0px,transparent 50%),-moz-radial-gradient(29%44%,,hsla(278,30%,79%,.7)0px,transparent 50%),-moz-radial-gradient(84%15%,,hsla(323,47%,74%,.7)0px,transparent 50%);background-image:-o-radial-gradient(72%92%,,hsla(61,48%,85%,.7)0px,transparent 50%),-o-radial-gradient(54%23%,,hsla(189,64%,73%,.7)0px,transparent 50%),-o-radial-gradient(18%13%,,hsla(195,33%,79%,.7)0px,transparent 50%),-o-radial-gradient(82%58%,,hsla(193,25%,65%,.7)0px,transparent 50%),-o-radial-gradient(3%94%,,hsla(215,48%,72%,.7)0px,transparent 50%),-o-radial-gradient(29%44%,,hsla(278,30%,79%,.7)0px,transparent 50%),-o-radial-gradient(84%15%,,hsla(323,47%,74%,.7)0px,transparent 50%);background-image:radial-gradient(at 72%92%,hsla(61,48%,85%,.7)0px,transparent 50%),radial-gradient(at 54%23%,hsla(189,64%,73%,.7)0px,transparent 50%),radial-gradient(at 18%13%,hsla(195,33%,79%,.7)0px,transparent 50%),radial-gradient(at 82%58%,hsla(193,25%,65%,.7)0px,transparent 50%),radial-gradient(at 3%94%,hsla(215,48%,72%,.7)0px,transparent 50%),radial-gradient(at 29%44%,hsla(278,30%,79%,.7)0px,transparent 50%),radial-gradient(at 84%15%,hsla(323,47%,74%,.7)0px,transparent 50%)}.text-link.jsx-fa68611bcaf73128{color:#3b76a5}",
            }),
          ],
        })
      );
      var d = i(554211),
        p = i(456552),
        f = i(285556);
      function g(e, t, i, n, r, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void i(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      const v = ({
        pageTitle: e,
        user: t,
        skipLabel: i,
        skipView: r,
        handleSkip: s,
        children: o,
      }) => {
        const a = (0, d.ZP)("outlier-mobile-web", { pageTitle: e }, void 0),
          { data: l } = (0, p.useQuery)(
            ["genericdatacollection"],
            ((c = function* () {
              return (0, f.ZP)(null, "internal/scaler/genericdatacollection");
            }),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (i, n) {
                var r = c.apply(e, t);
                function s(e) {
                  g(r, i, n, s, o, "next", e);
                }
                function o(e) {
                  g(r, i, n, s, o, "throw", e);
                }
                s(void 0);
              });
            })
          );
        var c;
        const v =
          (null !== l && void 0 !== l ? l : []).length > 0 && "tasking" === e;
        return void 0 === a
          ? null
          : (0, n.jsx)("div", {
              className: "scaleui outlier-theme scale-tailwind h-full",
              children:
                a || v
                  ? (0, n.jsx)(n.Fragment, { children: o })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className: "min-[480px]:hidden h-full",
                          children: (0, n.jsx)(u, {
                            pageTitle: e,
                            user: t,
                            skipLabel: i,
                            skipView: r,
                            handleSkip: s,
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "max-[480px]:hidden h-full",
                          children: o,
                        }),
                      ],
                    }),
            });
      };
    },
    389245: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        s = i(638898),
        o = i(542489),
        a = i(753705),
        l = i(540632),
        c = i(792739),
        u = i(440778),
        d = i(686677);
      t.Z = ({
        actualStepKey: e,
        hideBack: t = !1,
        completedSteps: i = [],
      }) => {
        const p = (0, d.useRouter)(),
          f = u.GR.findIndex((t) => t.key === e),
          g = (0, r.useCallback)(() => {
            const e = u.GR[f - 1].redirectUrl;
            p.push({ pathname: e, query: "signup=true" });
          }, [f, p]);
        return (0, n.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            width: "100%",
            maxWidth: 700,
            margin: "0 auto",
          },
          children: [
            f > 0 &&
              !t &&
              (0, n.jsx)(c.G, {
                icon: "arrow-left",
                onClick: g,
                style: { cursor: "pointer" },
              }),
            (0, n.jsx)(s.Z, {
              sx: { width: "100%" },
              children: (0, n.jsx)(o.Z, {
                activeStep: f,
                sx: {
                  "& .MuiStepConnector-line": {
                    borderTopWidth: "1.5px",
                    borderColor: "#00A4C3",
                  },
                  ".MuiSvgIcon-root.Mui-active": {
                    borderRadius: "50%",
                    border: "4px solid #3B76A5",
                    color: "transparent",
                  },
                },
                children: u.GR.map((e, t) =>
                  (0, n.jsx)(
                    a.Z,
                    {
                      children: (0, n.jsx)(l.Z, {
                        StepIconComponent:
                          i.includes(e.key) || t < f
                            ? () =>
                                (0, n.jsx)("div", {
                                  style: {
                                    borderRadius: "50%",
                                    border: "4px solid #3B76A5",
                                    padding: "3px",
                                  },
                                  children: (0, n.jsx)(c.G, {
                                    size: "xs",
                                    icon: "check",
                                    color: "#3B76A5",
                                  }),
                                })
                            : void 0,
                        children: e.displayText,
                      }),
                    },
                    e.key
                  )
                ),
              }),
            }),
          ],
        });
      };
    },
    569302: function (e, t, i) {
      i.d(t, {
        x: function () {
          return n;
        },
        X: function () {
          return f;
        },
      });
      var n,
        r = i(298784),
        s = i.n(r),
        o = i(236125),
        a = i(527467),
        l = i(854358),
        c = i(553999);
      function u(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      !(function (e) {
        (e.SUCCESS = "success"), (e.ERROR = "error"), (e.INFO = "info");
      })(n || (n = {}));
      const d = ({
          fieldId: e,
          stepIndex: t,
          response: i,
          candidateId: r,
          expectedResponse: o,
          tutorialResponse: a,
        }) => {
          if (!a && !o) return null;
          if (
            a &&
            (({
              fieldId: e,
              stepIndex: t,
              tutorialResponse: i,
              candidateId: n,
            }) => {
              const r = i.responses[t];
              if (r.type === l.InteractionStepType.TextCollection)
                return !!r.fieldInstructions[e];
              if (
                r.type === l.InteractionStepType.TextCollectionPerResponse &&
                n
              )
                return !!r.candidates[n].fieldInstructions[e];
              if (
                r.type === l.InteractionStepType.ModelResponseSelector &&
                ("likertValueRaw" === e ||
                  "selectedIndex" === e ||
                  "justification" === e)
              )
                return !!r.stepInstructions[e];
              var s;
              return (
                r.type === l.InteractionStepType.QualityMeasurement &&
                !!(null === r ||
                void 0 === r ||
                null === (s = r.fieldInstructions) ||
                void 0 === s
                  ? void 0
                  : s[e])
              );
            })({
              fieldId: e,
              stepIndex: t,
              tutorialResponse: a,
              candidateId: r,
            })
          )
            try {
              const c = (({
                  fieldId: e,
                  stepIndex: t,
                  tutorialResponse: i,
                  candidateId: n,
                }) => {
                  const r = i.responses[t];
                  if (r.type === l.InteractionStepType.TextCollection)
                    return r.fieldInstructions[e].message.messageString;
                  if (
                    r.type ===
                      l.InteractionStepType.TextCollectionPerResponse &&
                    n
                  )
                    return r.candidates[n].fieldInstructions[e].message
                      .messageString;
                  if (
                    r.type === l.InteractionStepType.ModelResponseSelector &&
                    ("likertValueRaw" === e ||
                      "selectedIndex" === e ||
                      "justification" === e)
                  ) {
                    const t = r.stepInstructions[e];
                    return (
                      (null === t || void 0 === t
                        ? void 0
                        : t.message.messageString) || ""
                    );
                  }
                  if (r.type === l.InteractionStepType.QualityMeasurement) {
                    var s;
                    const t =
                      null === r ||
                      void 0 === r ||
                      null === (s = r.fieldInstructions) ||
                      void 0 === s
                        ? void 0
                        : s[e];
                    return (
                      (null === t || void 0 === t
                        ? void 0
                        : t.message.messageString) || ""
                    );
                  }
                  return "";
                })({
                  fieldId: e,
                  stepIndex: t,
                  tutorialResponse: a,
                  candidateId: r,
                }),
                u = (({
                  fieldId: e,
                  stepIndex: t,
                  response: i,
                  candidateId: r,
                  expectedResponse: o,
                  tutorialResponse: a,
                }) => {
                  var c;
                  const u = a.responses[t];
                  var d;
                  const p =
                    null !==
                      (d =
                        null === (c = o.responses[t].graderConfig) ||
                        void 0 === c
                          ? void 0
                          : c.gradedFields) && void 0 !== d
                      ? d
                      : void 0;
                  let f, g, v;
                  try {
                    if (u.type === l.InteractionStepType.TextCollection)
                      (f = u.fieldInstructions[e]),
                        (g = `context.response.annotations.${e}.response[0]`),
                        (v =
                          o.responses[t].context.response.annotations[e]
                            .response[0]);
                    else if (
                      u.type ===
                        l.InteractionStepType.TextCollectionPerResponse &&
                      r
                    )
                      (f = u.candidates[r].fieldInstructions[e]),
                        (g = `context.annotations.["${r}"].annotations.${e}.response[0]`),
                        (v =
                          o.responses[t].context.annotations[r].annotations[e]
                            .response[0]);
                    else if (
                      u.type !== l.InteractionStepType.ModelResponseSelector ||
                      ("likertValueRaw" !== e && "selectedIndex" !== e)
                    ) {
                      if (u.type !== l.InteractionStepType.QualityMeasurement)
                        return n.INFO;
                      (f = u.fieldInstructions[e]),
                        (g = `context.response.annotations.${e}.response[0]`),
                        (v =
                          o.responses[t].context.response.annotations[e]
                            .response[0]);
                    } else
                      (f = u.stepInstructions[e]),
                        (g = `context.${e}`),
                        (v = o.responses[t].context[e]);
                  } catch (h) {
                    return n.INFO;
                  }
                  if (f && f.message.isInfo) return n.INFO;
                  try {
                    const e = s().get(p, g);
                    return (e &&
                      e.isGraded &&
                      e.validAnswers &&
                      e.validAnswers.length > 0 &&
                      e.validAnswers.includes(i)) ||
                      s().isEqual(i, v)
                      ? n.SUCCESS
                      : n.ERROR;
                  } catch (m) {
                    return n.INFO;
                  }
                })({
                  fieldId: e,
                  stepIndex: t,
                  response: i,
                  candidateId: r,
                  expectedResponse: o,
                  tutorialResponse: a,
                }),
                d = (({
                  fieldId: e,
                  stepIndex: t,
                  tutorialResponse: i,
                  candidateId: n,
                }) => {
                  const r = i.responses[t];
                  if (r.type === l.InteractionStepType.TextCollection) {
                    const { highlight: t } = r.fieldInstructions[e];
                    return t
                      ? { highlightStrings: t.highlightStrings }
                      : void 0;
                  }
                  if (
                    r.type ===
                      l.InteractionStepType.TextCollectionPerResponse &&
                    n
                  ) {
                    const t = r.candidates[n].fieldInstructions[e];
                    return t && t.highlight
                      ? { highlightStrings: t.highlight.highlightStrings }
                      : void 0;
                  }
                  if (
                    r.type === l.InteractionStepType.ModelResponseSelector &&
                    ("likertValueRaw" === e ||
                      "selectedIndex" === e ||
                      "justification" === e)
                  ) {
                    const t = r.stepInstructions[e];
                    return t && t.highlight
                      ? { highlightStrings: t.highlight.highlightStrings }
                      : void 0;
                  }
                  if (r.type === l.InteractionStepType.QualityMeasurement) {
                    var s;
                    const t =
                      null === r ||
                      void 0 === r ||
                      null === (s = r.fieldInstructions) ||
                      void 0 === s
                        ? void 0
                        : s[e];
                    return t && t.highlight
                      ? { highlightStrings: t.highlight.highlightStrings }
                      : void 0;
                  }
                })({
                  fieldId: e,
                  stepIndex: t,
                  tutorialResponse: a,
                  candidateId: r,
                });
              return { message: c, messageType: u, highlight: d };
            } catch (c) {
              return null;
            }
          return null;
        },
        p = {
          tutorialResponse: void 0,
          expectedResponse: void 0,
          tutorialMode: c.Xn.Course,
          highlightStrings: void 0,
          highlightActive: !1,
          highlightFieldId: void 0,
          highlightType: void 0,
          canSubmitScenario: !1,
          acknowledgedTutorialFields: {},
          canSubmitCourseBenchmark: !1,
          handleSubmitCourseBenchmark: void 0,
        },
        f = (0, o.Ue)()(
          (0, a.mW)(
            (e, t) =>
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var i = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(i);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(i).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable;
                      })
                    )),
                    n.forEach(function (t) {
                      u(e, t, i[t]);
                    });
                }
                return e;
              })({}, p, {
                setTutorialResponse: (t) => {
                  e({ tutorialResponse: t }, !1, "setTutorialResponse");
                },
                setExpectedResponse: (t) => {
                  e({ expectedResponse: t }, !1, "setExpectedResponse");
                },
                getTutorialResponseForField: (e, i, n, r) => {
                  const { tutorialResponse: s, expectedResponse: o } = t();
                  return d({
                    fieldId: e,
                    stepIndex: i,
                    response: n,
                    candidateId: r,
                    tutorialResponse: s,
                    expectedResponse: o,
                  });
                },
                setHighlightStrings: (t) => {
                  e({ highlightStrings: t }, !1, "setHighlightStrings");
                },
                setHighlightActive: (t) => {
                  e({ highlightActive: t }, !1, "setHighlightActive");
                },
                setHighlightFieldId: (t) => {
                  e({ highlightFieldId: t }, !1, "setHighlightFieldId");
                },
                setHighlightType: (t) => {
                  e({ highlightType: t }, !1, "setHighlightType");
                },
                setTutorialMode: (t) => {
                  e({ tutorialMode: t }, !1, "setTutorialMode");
                },
                setCanSubmitScenario: (t) => {
                  e({ canSubmitScenario: t }, !1, "setCanSubmitScenario");
                },
                setAcknowledgedTutorialFields: (t) => {
                  e(
                    { acknowledgedTutorialFields: t },
                    !1,
                    "setAcknowledgedTutorialFields"
                  );
                },
                setCanSubmitCourseBenchmark: (t) => {
                  e(
                    { canSubmitCourseBenchmark: t },
                    !1,
                    "setCanSubmitCourseBenchmark"
                  );
                },
                setHandleSubmitCourseBenchmark: (t) => {
                  e(
                    { handleSubmitCourseBenchmark: t },
                    !1,
                    "setHandleSubmitCourseBenchmark"
                  );
                },
              }),
            { name: "tutorial-store" }
          )
        );
    },
    956232: function (e, t, i) {
      var n = i(827378),
        r = i(285556),
        s = i(456552),
        o = i(167469),
        a = i(234334),
        l = i(298784),
        c = i.n(l),
        u = i(261975),
        d = i(719646);
      function p(e, t, i, n, r, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void i(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      const f = [
        a.QualificationEntryStatus.Unstarted,
        a.QualificationEntryStatus.WorkerPending,
        a.QualificationEntryStatus.CorpPending,
      ];
      t.Z = (e, t) => {
        const { data: i, isSuccess: l } = (0, u._z)("use-peek-queue", {}, !1),
          { data: g, isLoading: v } = (0, d.ze)({
            enabled: l && null !== i && void 0 !== i && i,
          });
        var h;
        const { data: m, isLoading: x } = (0, s.useQuery)(
          [
            "internal/experts/qualification/info",
            null !== (h = null === e || void 0 === e ? void 0 : e.id) &&
            void 0 !== h
              ? h
              : "",
            t,
          ],
          ((y = function* () {
            return (0, r.ZP)(null, "internal/experts/qualification/info", {
              method: "GET",
              query: { findPending: t },
            });
          }),
          function () {
            var e = this,
              t = arguments;
            return new Promise(function (i, n) {
              var r = y.apply(e, t);
              function s(e) {
                p(r, i, n, s, o, "next", e);
              }
              function o(e) {
                p(r, i, n, s, o, "throw", e);
              }
              s(void 0);
            });
          }),
          { refetchOnWindowFocus: !1, staleTime: 6e4, enabled: !!e && !i && l }
        );
        var y;
        const b = !l || (i ? v : x),
          S = (0, n.useMemo)(() => (i ? (0, d.zU)(g) : m), [i, g, m]);
        return {
          data: (0, n.useMemo)(() => {
            var t;
            if (b) return { data: {}, isLoading: !0 };
            if (!S) return { data: {}, isLoading: !1 };
            let {
              requiredQualificationListInfo: i,
              qualificationListStatus: n,
              qualificationListTag: r,
              qualificationListId: s,
              requiredQualificationListProjectDescription: l,
              requiredQualificationListProjectId: u,
              requiredQualificationListProjectName: d,
              requiredQualificationListProjectDisplayName: p,
              teamDisplayName: g,
              teamDescription: v,
              projectId: h,
              team: m,
              firstDirectAssignment: x,
              reviewLevel: y,
            } = S;
            const j = new URLSearchParams(
                null === window ||
                void 0 === window ||
                null === (t = window.location) ||
                void 0 === t
                  ? void 0
                  : t.search
              ),
              I = j.get("testStatus"),
              w = j.get("testQualif");
            if (w) {
              const e = w.split(",");
              i.forEach((t, i) => {
                switch (e[i]) {
                  case "0":
                    t.qualificationStatus =
                      a.QualificationEntryStatus.Unstarted;
                    break;
                  case "1":
                    t.qualificationStatus =
                      a.QualificationEntryStatus.WorkerPending;
                    break;
                  case "2":
                    t.qualificationStatus =
                      a.QualificationEntryStatus.CorpPending;
                    break;
                  case "3":
                    t.qualificationStatus =
                      a.QualificationEntryStatus.Qualified;
                    break;
                  case "4":
                    t.qualificationStatus = a.QualificationEntryStatus.Failed;
                }
              });
            }
            switch (I) {
              case a.QualificationListStatus.Qualified:
                n = a.QualificationListStatus.Qualified;
                break;
              case a.QualificationListStatus.Failed:
                n = a.QualificationListStatus.Failed;
                break;
              case a.QualificationListStatus.Pending:
                n = a.QualificationListStatus.Pending;
            }
            const T =
                !i.length ||
                (i.length &&
                  (n === a.QualificationListStatus.Qualified ||
                    (null === e || void 0 === e ? void 0 : e.isRemoAdmin))),
              [P, C] = c().partition(
                i,
                (e) =>
                  f.includes(e.qualificationStatus) ||
                  a.ALWAYS_SHOWN_QUAL_TYPES.includes(e.qualificationType) ||
                  e.metadata.isAlwaysVisible
              );
            return {
              teamName: g,
              teamDescription: v,
              unstartedQualifications: P,
              completedQualifications: C.filter(
                (e) => e.qualificationType !== o.QualificationType.WorkerSkill
              ),
              failedQualifications: i.filter(
                (e) =>
                  e.qualificationStatus === a.QualificationEntryStatus.Failed
              ),
              canTask: T,
              qualificationListStatus: n,
              requiredQualificationListProjectId: u,
              requiredQualificationListProjectName: d,
              requiredQualificationListProjectDisplayName: p,
              requiredQualificationListProjectDescription: l,
              qualificationListTag: r,
              qualificationListId: s,
              projectId: h,
              activeWorkerTeamName: m,
              firstDirectAssignment: x,
              reviewLevel: y,
            };
          }, [b, S, null === e || void 0 === e ? void 0 : e.isRemoAdmin]),
          isLoading: b,
        };
      };
    },
    236609: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        s = i(686597),
        o = i(634403),
        a = i(256914),
        l = i(969249),
        c = i(237896),
        u = i(179087),
        d = i(166919),
        p = i(461423),
        f = i(163046),
        g = i(551620),
        v = i(61714);
      function h(e, t, i, n, r, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void i(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      const m = (e) => {
        const {
            user: t,
            serverRendered: i,
            children: h,
            contextName: m,
            courseProgressPercent: x,
            progressBarFractions: y,
          } = e,
          b = new g.S();
        return (
          (0, r.useEffect)(() => {
            o.Z.flushExpired(),
              o.Z.setTransientIfEmpty("internal/logged_in_user", t, i);
          }, []),
          (0, n.jsx)(v.aH, {
            client: b,
            children: (0, n.jsx)(a.Z, {
              theme: l.ZP,
              children: (0, n.jsxs)(f.Z, {
                otherValues: {
                  user: t,
                  isManageAccountModalOpen: !1,
                  setIsManageAccountModalOpen: () => {},
                  isPayEducationModalOpen: !1,
                  setIsPayEducationModalOpen: () => {},
                  bannersInfo: [],
                  setBannersInfo: () => {},
                },
                children: [
                  (0, n.jsx)(s.ZP, {}),
                  (0, n.jsx)(c.Z, {}),
                  (0, n.jsx)(p.r, {
                    pageTitle: "tasking",
                    user: t,
                    children: (0, n.jsxs)("div", {
                      className: "scaleui outlier-theme scale-tailwind",
                      children: [
                        (0, n.jsx)(d.h, {
                          className: "z-50 fixed w-full",
                          children: (0, n.jsx)(u.Z, {
                            user: t,
                            simple: !0,
                            title: m,
                            courseProgressPercent: x,
                            progressBarFractions: y,
                          }),
                        }),
                        (0, n.jsx)("main", {
                          children: (0, n.jsx)("div", {
                            className: "pb-6 pt-20 mx-auto",
                            children: h,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      (m.getPageConfig = () => ({ user: { kind: ["expert"], required: !0 } })),
        (m.getInitialProps = (function () {
          var e,
            t =
              ((e = function* (e) {
                const { user: t, url: i } = e;
                return { user: t, serverRendered: !!e.req, url: i };
              }),
              function () {
                var t = this,
                  i = arguments;
                return new Promise(function (n, r) {
                  var s = e.apply(t, i);
                  function o(e) {
                    h(s, n, r, o, a, "next", e);
                  }
                  function a(e) {
                    h(s, n, r, o, a, "throw", e);
                  }
                  o(void 0);
                });
              });
          return function (e) {
            return t.apply(this, arguments);
          };
        })()),
        (t.Z = m);
    },
    513622: function (e, t, i) {
      i.d(t, {
        b4: function () {
          return l;
        },
        Od: function () {
          return c;
        },
      });
      var n = i(285556),
        r = i(634403),
        s = i(430153);
      function o(e, t, i, n, r, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void i(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function a(e) {
        return function () {
          var t = this,
            i = arguments;
          return new Promise(function (n, r) {
            var s = e.apply(t, i);
            function a(e) {
              o(s, n, r, a, l, "next", e);
            }
            function l(e) {
              o(s, n, r, a, l, "throw", e);
            }
            a(void 0);
          });
        };
      }
      !(function () {
        var e = a(function* (e, t) {
          return (0, n.ZP)(null, `internal/scaler/projects/paused/${e}`, {
            method: "POST",
            body: { isPaused: t },
          }).then(() => {
            r.Z.remove("projectInformation");
          });
        });
      })();
      const l = (function () {
          var e = a(function* () {
            let e = r.Z.get("requiredQualificationListInfo");
            return (
              e ||
                ((e = yield (0, n.ZP)(
                  null,
                  "internal/experts/qualification/info",
                  { method: "GET" }
                )),
                r.Z.setTransient("requiredQualificationListInfo", e)),
              e
            );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        c =
          ((function () {
            var e = a(function* () {
              const e = {
                body: {
                  workerTeamId: s.af,
                  reason:
                    "Expert: Moving user to Generalist Screening team due to error loading course.",
                },
              };
              return yield (0,
              n.ZP)(null, "internal/experts/project/moveTeams", { method: "POST", body: e });
            });
          })(),
          (function () {
            var e = a(function* (e, t, i) {
              const r = { teamId: t, workerIds: e, projectId: i };
              return yield (0,
              n.ZP)(null, "internal/experts/qualification/many_qualification_list_info", { method: "POST", body: r });
            });
            return function (t, i, n) {
              return e.apply(this, arguments);
            };
          })());
    },
    66091: function (e, t, i) {
      i.r(t),
        i.d(t, {
          CoursesPageComponent: function () {
            return F;
          },
          default: function () {
            return Q;
          },
        });
      var n = i(824246),
        r = i(827378),
        s = i(604375),
        o = i(4369),
        a = i(690845),
        l = i(298784),
        c = i.n(l),
        u = i(98283),
        d = i(959978),
        p = i(686677),
        f = i(257881),
        g = i(722030),
        v = i(416534);
      var h = (e) => {
          const { course: t, handleBeginCourse: i } = e,
            s = c().get(e.course, "title"),
            o = c().get(e.course, "description");
          return (
            (0, r.useEffect)(() => {
              o || i(t._id);
            }, [t, o, i]),
            o
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("div", {
                      className: "border-b p-6 text-2xl",
                      children: (0, n.jsx)("strong", { children: s }),
                    }),
                    (0, n.jsx)("div", {
                      className: "text-lg p-6 mb-8",
                      children: o,
                    }),
                    (0, n.jsx)("div", {
                      className: "container flex justify-center p-4",
                      children: (0, n.jsx)(v.zx, {
                        size: "lg",
                        variant: "primary",
                        onClick: () => {
                          i(t._id);
                        },
                        className: "max-w-sm justify-center",
                        fullWidth: !0,
                        children: "Start",
                      }),
                    }),
                  ],
                })
              : (0, n.jsx)("div", {
                  className: "w-full h-[80vh] flex justify-center items-center",
                  children: (0, n.jsx)(g.$, { size: "lg" }),
                })
          );
        },
        m = i(252708),
        x = i.n(m),
        y = i(775222),
        b = i(285563),
        S = i(554211),
        j = i(285556),
        I = i(599789);
      function w(e, t, i, n, r, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void i(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function T(e) {
        return function () {
          var t = this,
            i = arguments;
          return new Promise(function (n, r) {
            var s = e.apply(t, i);
            function o(e) {
              w(s, n, r, o, a, "next", e);
            }
            function a(e) {
              w(s, n, r, o, a, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function P(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              P(e, t, i[t]);
            });
        }
        return e;
      }
      var k = ({ course: e, startingCourseProgress: t, user: i }) => {
          const { query: s, replace: o } = (0, p.useRouter)(),
            { 0: a, 1: l } = (0, r.useState)(-1),
            { 0: v, 1: m } = (0, r.useState)([]),
            { 0: w, 1: P } = (0, r.useState)(t),
            k = (0, S.ZP)(
              "coursev2-permission-redirect",
              { userId: i.id },
              void 0
            ),
            O = (0, S.ZP)(
              "coursev2-permission-project-redirect",
              { projectId: e.project },
              void 0
            );
          var R;
          const E = (0, S.ZP)(
            "can-view-enablement-resources",
            {
              userTagIds: (null !== (R = i.tags) && void 0 !== R ? R : []).join(
                ","
              ),
            },
            !1
          );
          (0, r.useEffect)(() => {
            const t = (function () {
              var t = T(function* () {
                if (O || k || E) return null;
                if (e && !1 === k && !1 === O)
                  try {
                    const t = yield f.Z.labeling.getCourseV2UserPermission(
                      i.id,
                      e._id
                    );
                    t && !t.hasPermission && o("/expert");
                  } catch (t) {
                    (0, j.vj)(t, { handleHttp: !0 });
                  }
              });
              return function () {
                return t.apply(this, arguments);
              };
            })();
            t();
          }, [i.id, k, e, o, O, E]);
          const L = (function () {
            var t = T(function* (t = !1) {
              E || (t = !1);
              try {
                const i = yield f.Z.labeling.beginCourseV2(e._id, t);
                P(i.courseProgress);
                const n =
                  (null === e || void 0 === e ? void 0 : e.sections) || [];
                m(n), l(i.courseProgress.currentSection || 0);
              } catch (i) {
                x().error(`Failed to begin course: ${i.message}`),
                  y.c.track("Training - Failed to begin course");
              }
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          (0, r.useEffect)(() => {
            c().isNil(a) || window.scrollTo(0, 0);
          }, [a]);
          const N = () => {
              a > 0 && l(a - 1);
            },
            _ = (function () {
              var e = T(function* (e) {
                if (w) {
                  const t = yield f.Z.labeling.continueCourseV2(
                    w._id,
                    C({}, e, { currentSectionState: a })
                  );
                  P(t.courseProgress),
                    y.c.track("Training - Completes individual section");
                } else y.c.track("Training - Moves to next section without any changes");
                l(a + 1);
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Z = (0, S._z)("enable-course-rating", { userId: i._id }, !1).data,
            M = () => {
              "onboarding" === s.origin
                ? (0, u.ZP)({}, "/expert/onboarding")
                : s.returnTo
                ? (0, u.ZP)({}, s.returnTo)
                : (0, u.ZP)({}, "/expert");
            },
            H = (function () {
              var e = T(function* (e, t) {
                w &&
                  (yield f.Z.labeling.rateCourseV2(w._id, {
                    rating: e,
                    feedback: t,
                  }),
                  y.c.track("Training - Rated course")),
                  M();
              });
              return function (t, i) {
                return e.apply(this, arguments);
              };
            })(),
            q = () => {
              if (!e) return null;
              if (a >= v.length) {
                if (
                  (null === w || void 0 === w ? void 0 : w.status) ===
                  I.CourseStatusTypeV2.InProgress
                )
                  return void l(0);
                if (!(null === w || void 0 === w ? void 0 : w.rating) && Z) {
                  var t;
                  const i = e.showFinalGrade;
                  return (0, n.jsx)(
                    b.Z,
                    C(
                      { ratingOnSubmit: H },
                      i && {
                        courseGrade:
                          null === w ||
                          void 0 === w ||
                          null === (t = w.courseGrade) ||
                          void 0 === t
                            ? void 0
                            : t.multipleChoiceGrade,
                        courseStatus:
                          null === w || void 0 === w ? void 0 : w.status,
                      }
                    )
                  );
                }
                return void M();
              }
              const r = v[a];
              return w
                ? (0, n.jsx)(d.Z, {
                    course: e,
                    courseProgress: w,
                    title: r.title,
                    user: i,
                    courseSectionItems: r.courseSectionItems,
                    sectionIndex: a,
                    handlePrevious: N,
                    handleContinue: _,
                    canAlwaysContinue: a < w.currentSection,
                  })
                : void 0;
            };
          return (0, n.jsx)("div", {
            className: "scaleui outlier-theme flex justify-between",
            children: (0, n.jsx)("div", {
              className: "w-[80vw] m-auto pb-10 max-w-[1080px]",
              children: (0, n.jsx)("div", {
                children:
                  -1 === a
                    ? (0, n.jsx)(h, {
                        course: e,
                        handleBeginCourse: () => L(!0),
                      })
                    : w
                    ? (0, n.jsx)("div", { children: q() })
                    : (0, n.jsx)("div", {
                        className:
                          "w-full h-[80vh] flex justify-center items-center",
                        children: (0, n.jsx)(g.$, { size: "lg" }),
                      }),
              }),
            }),
          });
        },
        O = i(746332),
        R = i(236609),
        E = i(389245),
        L = i(440778),
        N = i(956232),
        _ = i(709791);
      function Z(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      const M = (e) => {
        const { user: t } = e,
          { data: i } = (0, N.Z)(t);
        return (0, n.jsx)(
          _.v,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var i = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(i);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                  })
                )),
                n.forEach(function (t) {
                  Z(e, t, i[t]);
                });
            }
            return e;
          })({}, e, {
            projectId: null === i || void 0 === i ? void 0 : i.projectId,
          })
        );
      };
      function H(e, t, i, n, r, s, o) {
        try {
          var a = e[s](o),
            l = a.value;
        } catch (c) {
          return void i(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function q(e) {
        return function () {
          var t = this,
            i = arguments;
          return new Promise(function (n, r) {
            var s = e.apply(t, i);
            function o(e) {
              H(s, n, r, o, a, "next", e);
            }
            function a(e) {
              H(s, n, r, o, a, "throw", e);
            }
            o(void 0);
          });
        };
      }
      const F = ({ user: e, courseId: t, readOnly: i = !1 }) => {
          const { query: l } = (0, p.useRouter)(),
            c = !!l.signup,
            { 0: u, 1: d } = (0, r.useState)(),
            { 0: v, 1: h } = (0, r.useState)(),
            { 0: m, 1: x } = (0, r.useState)(),
            { 0: y, 1: b } = (0, r.useState)(!1),
            { 0: j, 1: I } = (0, r.useState)(!0),
            { 0: w, 1: T } = (0, r.useState)(),
            { 0: P, 1: C } = (0, r.useState)(),
            { 0: O, 1: N } = (0, r.useState)(!0),
            _ = (0, S.ZP)("outlier-project-change", {}, !1),
            Z = (0, r.useCallback)(
              q(function* () {
                let e, n, r, s;
                if ((N(!0), t)) {
                  var o;
                  try {
                    s = yield f.Z.labeling.getCourseInfo(t);
                  } catch (p) {
                    try {
                      var a;
                      (s = yield f.Z.labeling.getCourseV2Info(t)),
                        T(s.course),
                        C(s.courseProgress),
                        I(!1),
                        (r =
                          null === s ||
                          void 0 === s ||
                          null === (a = s.course) ||
                          void 0 === a
                            ? void 0
                            : a.title);
                    } catch (p) {}
                  }
                  if (
                    null === s ||
                    void 0 === s ||
                    null === (o = s.course) ||
                    void 0 === o
                      ? void 0
                      : o.visibleProgressBar
                  ) {
                    var l, c, u;
                    const t =
                        null === s ||
                        void 0 === s ||
                        null === (l = s.course) ||
                        void 0 === l
                          ? void 0
                          : l.sections.length,
                      o =
                        (null === s ||
                        void 0 === s ||
                        null === (c = s.courseProgress) ||
                        void 0 === c
                          ? void 0
                          : c.currentSection) || 0;
                    (e = i ? 100 : (100 / t) * o),
                      (n = t),
                      (r =
                        null === s ||
                        void 0 === s ||
                        null === (u = s.course) ||
                        void 0 === u
                          ? void 0
                          : u.title);
                  }
                }
                d(e), h(n), x(r), N(!1);
              }),
              [t, i]
            ),
            H = (0, r.useCallback)(
              q(function* () {
                let e, i, n;
                if (t) {
                  var r;
                  const l = yield f.Z.labeling.getCourseInfo(t);
                  if (
                    null === l ||
                    void 0 === l ||
                    null === (r = l.course) ||
                    void 0 === r
                      ? void 0
                      : r.visibleProgressBar
                  ) {
                    var s, o, a;
                    const t =
                      null === l ||
                      void 0 === l ||
                      null === (s = l.course) ||
                      void 0 === s
                        ? void 0
                        : s.sections.length;
                    (e =
                      (100 / t) *
                      ((null === l ||
                      void 0 === l ||
                      null === (o = l.courseProgress) ||
                      void 0 === o
                        ? void 0
                        : o.currentSection) || 0)),
                      (i = t),
                      (n =
                        null === l ||
                        void 0 === l ||
                        null === (a = l.course) ||
                        void 0 === a
                          ? void 0
                          : a.title);
                  }
                }
                d(e), h(i), x(n);
              }),
              [t]
            );
          return (
            (0, r.useEffect)(() => {
              Z();
            }, [t]),
            (0, n.jsx)(R.Z, {
              user: e,
              courseProgressPercent: u,
              progressBarFractions: v,
              contextName: m,
              children: (0, n.jsxs)(s.ag, {
                children: [
                  (0, n.jsx)(o.Z, {}),
                  O
                    ? (0, n.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, n.jsx)(g.$, { size: "lg" }),
                      })
                    : (0, n.jsx)(n.Fragment, {
                        children: j
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                c &&
                                  (0, n.jsx)("div", {
                                    style: { marginBottom: 42 },
                                    children: (0, n.jsx)(E.Z, {
                                      actualStepKey: L.wm.PERSONA_VERIFICATION,
                                    }),
                                  }),
                                (0, n.jsx)(M, {
                                  user: e,
                                  isFFEnabled: !!_ && !e.spoofed,
                                  onClose: () => (
                                    b(!0), (window.location.href = "/en/expert")
                                  ),
                                  children: (0, n.jsx)(a.Z, {
                                    isInQueue: !1,
                                    returnToTasking: () => {},
                                    user: e,
                                    courseId: t,
                                    fetchCourseProgressPercent: H,
                                    isRedirecting: y,
                                    readOnly: i,
                                  }),
                                }),
                              ],
                            })
                          : w &&
                            (0, n.jsx)(k, {
                              course: w,
                              startingCourseProgress: P,
                              user: e,
                            }),
                      }),
                ],
              }),
            })
          );
        },
        B = ({ user: e, courseId: t }) =>
          (0, n.jsx)(F, { user: e, courseId: t });
      (B.getInitialProps = (function () {
        var e = q(function* (e) {
          return e.query.id &&
            ((0, O.computeUserAgent)(e) ||
              (e.query.id !== I.MobileIntroCourseName &&
                e.query.id !== I.MobileIntroCourseId))
            ? { user: e.user, courseId: e.query.id, permissionId: e.query.pid }
            : ((0, u.ZP)(e, "/expert"), { pageProps: {} });
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })()),
        (B.getPageConfig = () => ({
          user: { kinds: ["expert"], required: !0 },
        }));
      var Q = B;
    },
  },
]);
