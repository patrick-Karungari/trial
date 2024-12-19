"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [69058],
  {
    633407: function (e, s, i) {
      i.d(s, {
        ef: function () {
          return r;
        },
        Ld: function () {
          return n;
        },
      });
      var t = i(599789);
      const r = (e) => e.target - e.progress,
        n = (e) =>
          e.status === t.BonusStatus.Resolved && e.amountHundredthsOfCents > 0;
    },
    135431: function (e, s, i) {
      var t = i(824246),
        r = i(827378),
        n = i(679892),
        o = i.n(n),
        c = i(298784),
        a = i.n(c),
        d = i(138944),
        l = i(792739),
        u = i(881620),
        p = i(50682),
        m = i.n(p),
        h = i(308609),
        g = i(220453),
        x = i(761114),
        b = i(431350),
        f = i(687192),
        v = i(746188),
        S = i(663307),
        j = i(368663),
        y = i(68649),
        E = i(421805),
        O = i(161320),
        R = i.n(O),
        T = i(60042),
        I = i.n(T),
        _ = i(604375),
        L = i(746332),
        w = i(336235),
        H = i(907607),
        C = i(775222),
        k = i(599789),
        N = i(659277);
      function P(e, s, i, t, r, n, o) {
        try {
          var c = e[n](o),
            a = c.value;
        } catch (d) {
          return void i(d);
        }
        c.done ? s(a) : Promise.resolve(a).then(t, r);
      }
      function M(e, s, i) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = i),
          e
        );
      }
      function D(e) {
        for (var s = 1; s < arguments.length; s++) {
          var i = null != arguments[s] ? arguments[s] : {},
            t = Object.keys(i);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable;
              })
            )),
            t.forEach(function (s) {
              M(e, s, i[s]);
            });
        }
        return e;
      }
      const A = (0, y.ZL)({
          courseHeader: { marginBottom: "32px", paddingInlineStart: "32px" },
          courseHeaderResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: { display: "none" },
          },
          logo: { width: "120px", display: "inline-block" },
        }),
        B = (e) => {
          const s = A();
          return (0, t.jsx)("div", {
            className: I()(s.courseHeader, {
              [s.courseHeaderResponsive]: e.responsive,
            }),
            children: (0, t.jsx)(u.ZP, {
              href: "/dashboard",
              children: (0, t.jsx)("a", {
                children: (0, t.jsx)("div", {
                  className: s.logo,
                  children: (0, t.jsx)(v.Z, { fill: "black" }),
                }),
              }),
            }),
          });
        },
        G = (0, y.ZL)({
          bar: { height: 16, width: 360, display: "flex" },
          barResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: { width: "100%" },
          },
          segment: ({ dir: e }) => ({
            height: "100%",
            margin: 0,
            width: "auto",
            flexGrow: 1,
            background: "rgba(255, 255, 255, 0.1)",
            pointerEvents: "none",
            "&.filled, &.halfFilled": {
              pointerEvents: "all",
              background: "rgba(255, 255, 255, 1)",
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": { boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)" },
            },
            "&.halfFilled": { opacity: 0.5 },
            "&:first-child": {
              borderTopLeftRadius: "rtl" === e ? 0 : 100,
              borderBottomLeftRadius: "rtl" === e ? 0 : 100,
              borderTopRightRadius: "rtl" === e ? 100 : 0,
              borderBottomRightRadius: "rtl" === e ? 100 : 0,
            },
            "&:nth-last-child(2)": {
              borderTopLeftRadius: "rtl" === e ? 100 : 0,
              borderBottomLeftRadius: "rtl" === e ? 100 : 0,
              borderTopRightRadius: "rtl" === e ? 0 : 100,
              borderBottomRightRadius: "rtl" === e ? 0 : 100,
            },
          }),
          courseHeader: {
            padding: "32px",
            backgroundColor: "var(--color-RemoGreen)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          courseHeaderResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              padding: "16px",
              flexDirection: "column",
              maxHeight: "87px",
              alignItems: "flex-start",
            },
          },
          courseTitle: {
            marginInlineEnd: "32px",
            fontSize: "18px",
            fontWeight: 500,
            display: "flex",
          },
          courseTitleResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              marginInlineEnd: "0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          },
          courseProgress: { flexShrink: 0 },
          courseProgressResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              width: "100%",
              marginTop: "16px",
            },
          },
          certificationTimeRemaining: { fontSize: "18px" },
        }),
        F = (e) => {
          const { t: s, i18n: i } = (0, E.$G)("course"),
            r = G({ dir: i.dir() }),
            n = X("title", i.language, e.course);
          return (0, t.jsxs)("div", {
            className: I()(r.courseHeader, {
              [r.courseHeaderResponsive]: e.responsive,
            }),
            children: [
              (0, t.jsxs)("div", {
                className: I()(r.courseTitle, {
                  [r.courseTitleResponsive]: e.responsive,
                }),
                children: [
                  !a().isEmpty(e.course.instruction) &&
                    (0, t.jsx)(U, {
                      instruction: e.course.instruction,
                      responsive: e.responsive,
                    }),
                  n,
                ],
              }),
              (0, t.jsx)("div", {
                className: I()(r.courseProgress, {
                  [r.courseProgressResponsive]: e.responsive,
                }),
                children: (() => {
                  const s = X("sections", i.language, e.course),
                    n = s.length,
                    o = a().map(s, "title");
                  return (
                    o.push("Review"),
                    (0, t.jsxs)("div", {
                      className: I()(r.bar, {
                        [r.barResponsive]: e.responsive,
                      }),
                      children: [
                        a().map(a().range(n + 1), (s, i) => {
                          let n, c;
                          return (
                            s <= e.courseProgress.currentSection &&
                              (e.currentSection ===
                                e.courseProgress.currentSection ||
                              s === e.currentSection
                                ? (c = !0)
                                : (n = !0)),
                            (0, t.jsx)(
                              "div",
                              {
                                onClick: e.course.isCertification
                                  ? a().noop
                                  : () => e.handleSectionNavigate(s),
                                "data-tip": o[s],
                                "data-for": "header-tooltip",
                                className: (0, d.default)(r.segment, {
                                  filled: c,
                                  halfFilled: n,
                                }),
                              },
                              i
                            )
                          );
                        }),
                        (0, t.jsx)(m(), { id: "header-tooltip" }),
                      ],
                    })
                  );
                })(),
              }),
              e.course.isCertification &&
                void 0 !== e.certificationTimeRemainingSecs &&
                e.courseProgress.currentSection !== e.course.sections.length &&
                (0, t.jsxs)("div", {
                  className: r.certificationTimeRemaining,
                  children: [
                    s("certification-time-remaining"),
                    ":",
                    " ",
                    R()
                      .utc(
                        R()
                          .duration(e.certificationTimeRemainingSecs, "seconds")
                          .asMilliseconds()
                      )
                      .format("HH:mm:ss"),
                  ],
                }),
            ],
          });
        },
        U = ({ instruction: e, responsive: s }) => {
          const { 0: i, 1: n } = (0, r.useState)(!1),
            o = (0, w.Z)(`(max-width: ${L.MOBILE_THRESHOLD})`),
            c = `<iframe src="${e}"></iframe>`;
          return (0, t.jsxs)("div", {
            className: "launcher",
            onClick: () => {
              if (
                null === e || void 0 === e ? void 0 : e.includes("instruction")
              )
                window.open(e, "_blank");
              else {
                if (s && o) {
                  const e = document.createElement("div");
                  e.innerHTML = c || "";
                  const s = e.querySelector("iframe");
                  if (s && s.attributes.getNamedItem("src")) {
                    const e = s.attributes.getNamedItem("src").value;
                    if ((0, H.i)(e)) return void window.open(e, "_blank");
                  }
                }
                n(!i);
              }
            },
            children: [
              (0, t.jsx)("span", {
                className: "cta",
                children: (0, t.jsx)(l.G, { icon: "info-circle" }),
              }),
              (0, t.jsx)(j.d, {
                isOpen: i,
                instruction: c,
                instructionsURL: e,
                onClose: () => n(!1),
              }),
              (0, t.jsx)("style", {
                children:
                  "\n        .launcher {\n          margin: 0 24px 0 0;\n          display: flex;\n          cursor: pointer;\n        }\n\n        .launcher .cta {\n          color: white;\n        }\n      ",
              }),
            ],
          });
        },
        z = ({ course: e }) => {
          const s = e.permissionsRequired;
          return (0, t.jsxs)("div", {
            className: "jsx-10081c135d9e78b2 requirements-list",
            children: [
              (0, t.jsxs)(
                "div",
                {
                  className: "jsx-10081c135d9e78b2 requirement",
                  children: [
                    (0, t.jsx)("em", {
                      className: "jsx-10081c135d9e78b2",
                      children: (0, t.jsx)(l.G, { icon: "check" }),
                    }),
                    "Willingness to learn!",
                  ],
                },
                "first"
              ),
              a().map(s, (e) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: "jsx-10081c135d9e78b2 requirement",
                    children: [
                      (0, t.jsx)("em", {
                        className: "jsx-10081c135d9e78b2",
                        children: (0, t.jsx)(l.G, { icon: "check" }),
                      }),
                      "Enabled on ",
                      (0, t.jsx)("strong", {
                        className: "jsx-10081c135d9e78b2",
                        children: e.name || e.title,
                      }),
                      " tasks",
                    ],
                  },
                  e.title
                )
              ),
              (0, t.jsx)(o(), {
                id: "10081c135d9e78b2",
                children:
                  ".requirements-list.jsx-10081c135d9e78b2{margin-top:32px}.requirement.jsx-10081c135d9e78b2{margin-bottom:24px;font-weight:bold}em.jsx-10081c135d9e78b2{-webkit-padding-end:8px;-moz-padding-end:8px;padding-inline-end:8px;color:var(--color-RemoGreen)}",
              }),
            ],
          });
        },
        Z = (e) => {
          const {
              isInQueue: s,
              query: i,
              course: r,
              actions: n,
              onCourseStart: c,
            } = e,
            { t: d, i18n: l } = (0, E.$G)("course"),
            u = X("title", l.language, e.course),
            p = X("description", l.language, e.course),
            m = a().round(r.totalRewardHundredthsOfCents / 1e4, 2);
          return (0, t.jsxs)("div", {
            className:
              o().dynamic([
                [
                  "d72b249bf6d587f",
                  [L.MOBILE_THRESHOLD, L.MOBILE_THRESHOLD, L.MOBILE_THRESHOLD],
                ],
              ]) + " course-intro",
            children: [
              s && (0, t.jsx)(Q, { course: r }),
              a().round(r.totalRewardHundredthsOfCents / 100) > 0 &&
                (0, t.jsx)("div", {
                  className:
                    o().dynamic([
                      [
                        "d72b249bf6d587f",
                        [
                          L.MOBILE_THRESHOLD,
                          L.MOBILE_THRESHOLD,
                          L.MOBILE_THRESHOLD,
                        ],
                      ],
                    ]) + " reward",
                  children: d("intro-pay", { pay: `$${m}` }),
                }),
              (0, t.jsxs)("div", {
                className:
                  o().dynamic([
                    [
                      "d72b249bf6d587f",
                      [
                        L.MOBILE_THRESHOLD,
                        L.MOBILE_THRESHOLD,
                        L.MOBILE_THRESHOLD,
                      ],
                    ],
                  ]) + " title",
                children: [
                  d("intro-welcome"),
                  " ",
                  (0, t.jsx)("strong", {
                    className: o().dynamic([
                      [
                        "d72b249bf6d587f",
                        [
                          L.MOBILE_THRESHOLD,
                          L.MOBILE_THRESHOLD,
                          L.MOBILE_THRESHOLD,
                        ],
                      ],
                    ]),
                    children: u,
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  o().dynamic([
                    [
                      "d72b249bf6d587f",
                      [
                        L.MOBILE_THRESHOLD,
                        L.MOBILE_THRESHOLD,
                        L.MOBILE_THRESHOLD,
                      ],
                    ],
                  ]) + " body",
                children: [
                  p &&
                    (0, t.jsxs)("div", {
                      className:
                        o().dynamic([
                          [
                            "d72b249bf6d587f",
                            [
                              L.MOBILE_THRESHOLD,
                              L.MOBILE_THRESHOLD,
                              L.MOBILE_THRESHOLD,
                            ],
                          ],
                        ]) + " description",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            o().dynamic([
                              [
                                "d72b249bf6d587f",
                                [
                                  L.MOBILE_THRESHOLD,
                                  L.MOBILE_THRESHOLD,
                                  L.MOBILE_THRESHOLD,
                                ],
                              ],
                            ]) + " label",
                          children: d("intro-curriculum"),
                        }),
                        (0, t.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: g.ZP.render(p || ""),
                          },
                          className: o().dynamic([
                            [
                              "d72b249bf6d587f",
                              [
                                L.MOBILE_THRESHOLD,
                                L.MOBILE_THRESHOLD,
                                L.MOBILE_THRESHOLD,
                              ],
                            ],
                          ]),
                        }),
                      ],
                    }),
                  !a().isEmpty(r.permissionsRequired) &&
                    (0, t.jsxs)("div", {
                      className:
                        o().dynamic([
                          [
                            "d72b249bf6d587f",
                            [
                              L.MOBILE_THRESHOLD,
                              L.MOBILE_THRESHOLD,
                              L.MOBILE_THRESHOLD,
                            ],
                          ],
                        ]) + " requirements",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            o().dynamic([
                              [
                                "d72b249bf6d587f",
                                [
                                  L.MOBILE_THRESHOLD,
                                  L.MOBILE_THRESHOLD,
                                  L.MOBILE_THRESHOLD,
                                ],
                              ],
                            ]) + " label",
                          children: d("requirements"),
                        }),
                        (0, t.jsx)(z, { course: r }),
                      ],
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  o().dynamic([
                    [
                      "d72b249bf6d587f",
                      [
                        L.MOBILE_THRESHOLD,
                        L.MOBILE_THRESHOLD,
                        L.MOBILE_THRESHOLD,
                      ],
                    ],
                  ]) + " footer",
                children: [
                  (0, t.jsx)(b.zx, {
                    style: { width: "100%" },
                    type: "primary",
                    onClick: c,
                    children: d("start"),
                  }),
                  r.canSkip &&
                    (0, t.jsx)(b.zx, {
                      onClick: () => n.skipCourse(i, r._id),
                      children: "Skip (Corp only)",
                    }),
                ],
              }),
              (0, t.jsx)(o(), {
                id: "d72b249bf6d587f",
                dynamic: [
                  L.MOBILE_THRESHOLD,
                  L.MOBILE_THRESHOLD,
                  L.MOBILE_THRESHOLD,
                ],
                children: `.course-intro.__jsx-style-dynamic-selector{color:black}.title.__jsx-style-dynamic-selector{border-bottom:1px solid var(--color-RemoGray10);font-size:20px;padding:32px}@media(max-width:${L.MOBILE_THRESHOLD}){.title.__jsx-style-dynamic-selector{font-size:18px;padding:32px}}.body.__jsx-style-dynamic-selector{margin-bottom:32px;display:grid;grid-template-columns:auto auto;grid-column-gap:96px;font-size:18px;padding:32px}@media(max-width:${L.MOBILE_THRESHOLD}){.body.__jsx-style-dynamic-selector{grid-column-gap:initial;font-size:12px}}.footer.__jsx-style-dynamic-selector{background:var(--color-RemoGray01);width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;padding:16px}@media(max-width:${L.MOBILE_THRESHOLD}){.footer.__jsx-style-dynamic-selector{position:absolute;bottom:0;background:var(--color-RemoGray01);width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:16px}}.requirements.__jsx-style-dynamic-selector{width:360px;-webkit-padding-start:48px;-moz-padding-start:48px;padding-inline-start:48px;-webkit-border-start:1px solid var(--color-RemoGray01);-moz-border-start:1px solid var(--color-RemoGray01);border-inline-start:1px solid var(--color-RemoGray01)}.label.__jsx-style-dynamic-selector{margin-bottom:1em;font-weight:600;font-size:18px;color:var(--color-RemoGreen)}.reward.__jsx-style-dynamic-selector{margin:32px 32px 0;padding:8px 16px!important;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:var(--color-RemoGreen);color:white;font-weight:500}`,
              }),
            ],
          });
        },
        $ = (0, y.ZL)({
          courseSummary: { padding: "32px" },
          courseSummaryResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              height: "calc(100% - 87px)",
              overflowY: "scroll",
            },
          },
          courseSummaryActions: {
            marginTop: "64px",
            display: "flex",
            alignItems: "center",
          },
          courseSummaryActionsResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              flexDirection: "column",
              marginTop: "0",
            },
          },
          courseSummaryIntro: { lineHeight: "2em" },
          courseSummaryList: { margin: "32px 0" },
        }),
        q = (e) => {
          var s, i;
          const r = $(),
            {
              course: n,
              handleReviewCourse: o,
              handleCompleteSupplementalCourse: c,
              returnUrl: d,
              query: l,
            } = e,
            { t: u, i18n: p } = (0, E.$G)("course"),
            m = X("title", p.language, n),
            h = X("sections", p.language, n);
          let x;
          var b, f;
          e.course.isCertification &&
            (x =
              ((null === (b = e.courseProgress.certificationInfo) ||
              void 0 === b ||
              null === (f = b.certificationPassedSections) ||
              void 0 === f
                ? void 0
                : f.length) || 0) /
              e.course.sections.filter((e) => S.Z0.includes(e.type)).length);
          return (0, t.jsxs)("div", {
            className: I()(r.courseSummary, {
              [r.courseSummaryResponsive]: e.responsive,
            }),
            children: [
              !e.course.isCertification &&
                (0, t.jsx)("div", {
                  className: r.courseSummaryIntro,
                  children: a().isEmpty(
                    n.summaryMessageOnCompletionOrCertificationPass
                  )
                    ? (0, t.jsxs)("div", {
                        children: [
                          u("done-great-job"),
                          " ",
                          (0, t.jsx)("strong", { children: m }),
                          ".",
                        ],
                      })
                    : (0, t.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: g.ZP.render(
                            n.summaryMessageOnCompletionOrCertificationPass ||
                              ""
                          ),
                        },
                      }),
                }),
              e.course.isCertification
                ? (
                    null === (s = e.courseProgress) ||
                    void 0 === s ||
                    null === (i = s.certificationInfo) ||
                    void 0 === i
                      ? void 0
                      : i.certificationPassed
                  )
                  ? (0, t.jsx)("div", {
                      children: a().isEmpty(
                        n.summaryMessageOnCompletionOrCertificationPass
                      )
                        ? (0, t.jsxs)("div", {
                            children: [
                              u("passed-the-certification"),
                              " ",
                              (0, t.jsx)("strong", { children: m }),
                              ".",
                              !e.course.useCertificationScoreSumThreshold &&
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("br", {}),
                                    (0, t.jsx)("br", {}),
                                    u("certification-accuracy"),
                                    " ",
                                    (0, t.jsxs)("strong", {
                                      children: [
                                        Math.floor(
                                          100 *
                                            (null !== x && void 0 !== x ? x : 0)
                                        ),
                                        "%",
                                      ],
                                    }),
                                    ".",
                                  ],
                                }),
                            ],
                          })
                        : (0, t.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: g.ZP.render(
                                n.summaryMessageOnCompletionOrCertificationPass ||
                                  ""
                              ),
                            },
                          }),
                    })
                  : (0, t.jsx)("div", {
                      children: a().isEmpty(n.summaryMessageOnCertificationFail)
                        ? (0, t.jsxs)("div", {
                            children: [
                              u("failed-the-certification"),
                              " ",
                              (0, t.jsx)("strong", { children: m }),
                              ".",
                              !e.course.useCertificationScoreSumThreshold &&
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("br", {}),
                                    (0, t.jsx)("br", {}),
                                    u("certification-accuracy"),
                                    " ",
                                    (0, t.jsxs)("strong", {
                                      children: [
                                        Math.floor(
                                          100 *
                                            (null !== x && void 0 !== x ? x : 0)
                                        ),
                                        "%",
                                      ],
                                    }),
                                    ".",
                                  ],
                                }),
                            ],
                          })
                        : (0, t.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: g.ZP.render(
                                n.summaryMessageOnCertificationFail || ""
                              ),
                            },
                          }),
                    })
                : null,
              !e.course.isCertification &&
                (0, t.jsx)("div", {
                  className: r.courseSummaryList,
                  children: a().map(h, (e, s) =>
                    (0, t.jsx)(W, { section: e }, s)
                  ),
                }),
              (0, t.jsx)("div", {
                className: I()(r.courseSummaryActions, {
                  [r.courseSummaryActionsResponsive]: e.responsive,
                }),
                children: (0, t.jsx)(V, {
                  query: l,
                  returnUrl: d,
                  onContinueTasking: c,
                  disableReview: !!e.course.isCertification,
                  onReviewCourse: o,
                  responsive: e.responsive,
                  redirectURLUponCourseCompletion:
                    e.course.redirectURLUponCourseCompletion,
                }),
              }),
            ],
          });
        },
        W = (e) => {
          const { section: s } = e;
          return (0, t.jsxs)("div", {
            className: "jsx-82a33bba39b72bc7 section",
            children: [
              (0, t.jsx)("strong", {
                className: "jsx-82a33bba39b72bc7",
                children: (0, t.jsx)(l.G, { icon: "check" }),
              }),
              s.title,
              (0, t.jsx)(o(), {
                id: "82a33bba39b72bc7",
                children:
                  ".section.jsx-82a33bba39b72bc7{margin:24px 0}.section.jsx-82a33bba39b72bc7 strong.jsx-82a33bba39b72bc7{-webkit-padding-end:12px;-moz-padding-end:12px;padding-inline-end:12px;color:var(--color-RemoGreen)}",
              }),
            ],
          });
        },
        K = (0, y.ZL)({
          divider: { width: "16px" },
          dividerResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: { height: "16px" },
          },
        }),
        V = (e) => {
          const s = K(),
            {
              query: i,
              returnUrl: n,
              disableReview: o,
              onContinueTasking: c,
              onReviewCourse: a,
              redirectURLUponCourseCompletion: d,
            } = e,
            { t: l } = (0, E.$G)("course");
          let u = null;
          if (n) {
            const e = n.replace(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;()]/gi, ""),
              s = i.redirect_url
                ? i.redirect_url.replace(
                    /[^-A-Za-z0-9+&@#/%?=~_|!:,.;()]/gi,
                    ""
                  )
                : "";
            u = (0, t.jsx)(b.zx, {
              type: "primary",
              href: s ? `${e}?redirect_url=${s}` : e,
              onClick: () => {
                C.c.track("Training - Completes course");
              },
              children: "Continue",
            });
          } else
            u = d
              ? (0, t.jsx)(b.zx, {
                  type: "primary",
                  href: d,
                  onClick: () => {
                    C.c.track("Training - Completes course");
                  },
                  children: "Continue",
                })
              : c
              ? (0, t.jsx)(b.zx, {
                  type: "primary",
                  onClick: () => {
                    C.c.track("Training - Completes course"), c();
                  },
                  children: "Continue Tasking",
                })
              : (0, t.jsx)(b.zx, {
                  type: "primary",
                  href: "/tasks",
                  onClick: () => {
                    C.c.track("Training - Completes course");
                  },
                  children: l("start-tasking"),
                });
          return (0, t.jsxs)(r.Fragment, {
            children: [
              u,
              (0, t.jsx)("div", {
                className: I()(s.divider, {
                  [s.dividerResponsive]: e.responsive,
                }),
              }),
              !o &&
                (0, t.jsx)(b.zx, { onClick: a, children: l("review-course") }),
            ],
          });
        },
        Q = (e) => {
          const { t: s } = (0, E.$G)("course"),
            { course: i } = e;
          return (0, t.jsxs)("div", {
            className: "jsx-9e0ecbc44965fbe4 queue-course-title",
            children: [
              (0, t.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: `${s("intro-top")} <strong>${a().join(
                    i.permissionGroupsBlocked,
                    ", "
                  )}</strong> project.`,
                },
                className: "jsx-9e0ecbc44965fbe4",
              }),
              (0, t.jsx)("a", {
                href: "https://remotasks.zendesk.com/hc/articles/360022619273-Courses-Will-Now-Appear-While-Tasking",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "jsx-9e0ecbc44965fbe4 btn-clear",
                children: s("intro-learn-more"),
              }),
              (0, t.jsx)(o(), {
                id: "9e0ecbc44965fbe4",
                children:
                  ".queue-course-title.jsx-9e0ecbc44965fbe4{padding:16px 32px;background-color:var(--color-RemoGreen);color:white;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn-clear.jsx-9e0ecbc44965fbe4{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:block;-webkit-padding-start:16px;-moz-padding-start:16px;padding-inline-start:16px;padding:8px 16px;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:rgba(255,255,255,.1);color:white;font-weight:500;cursor:pointer}",
              }),
            ],
          });
        };
      class Y extends r.Component {
        componentDidMount() {
          this.props.userFromGetInitialProps &&
            this.props.actions.fetchCurrentUser(
              this.props.userFromGetInitialProps
            ),
            this.props.query.id &&
              this.props.actions.fetchCourse(
                this.props.query.id,
                this.props.query.tag
              ),
            window.addEventListener("beforeunload", this.handleUnmount);
        }
        componentDidUpdate(e) {
          var s,
            i = this;
          return ((s = function* () {
            const { course: s, courseProgress: t } = i.props.training;
            if (!a().isEmpty(s) && !a().isEmpty(t)) {
              var r;
              if (i.state.currentSection === s.sections.length && i.timerID)
                return (
                  clearInterval(i.timerID),
                  void (
                    i.state.certificationTimeRemainingSecs &&
                    i.setState({ certificationTimeRemainingSecs: void 0 })
                  )
                );
              (null === (r = t.certificationInfo) || void 0 === r
                ? void 0
                : r.certificationTimeRemainingSecs) &&
                (void 0 === i.state.certificationTimeRemainingSecs &&
                  i.setState({
                    certificationTimeRemainingSecs:
                      t.certificationInfo.certificationTimeRemainingSecs,
                  }),
                null === i.timerID &&
                  -1 !== i.state.currentSection &&
                  i.state.currentSection !== s.sections.length &&
                  void 0 !== i.state.certificationTimeRemainingSecs &&
                  (i.timerID = setInterval(() => {
                    const e = i.state.certificationTimeRemainingSecs;
                    e > 0
                      ? i.setState({ certificationTimeRemainingSecs: e - 1 })
                      : i.props.actions.certificationTimeRemainingSecsSync(
                          t._id,
                          0
                        );
                  }, 1e3)));
            }
            const n = a().get(e, [
                "training",
                "courseProgress",
                "currentSection",
              ]),
              o = a().get(i.props, [
                "training",
                "courseProgress",
                "currentSection",
              ]);
            void 0 === o || o === n || i.setState({ currentSection: o });
          }),
          function () {
            var e = this,
              i = arguments;
            return new Promise(function (t, r) {
              var n = s.apply(e, i);
              function o(e) {
                P(n, t, r, o, c, "next", e);
              }
              function c(e) {
                P(n, t, r, o, c, "throw", e);
              }
              o(void 0);
            });
          })();
        }
        componentWillUnmount() {
          this.handleUnmount();
        }
        handleUnmount() {
          void 0 !== this.state.certificationTimeRemainingSecs &&
            this.props.actions.certificationTimeRemainingSecsSync(
              this.props.training.courseProgress._id,
              this.state.certificationTimeRemainingSecs
            ),
            clearInterval(this.timerID);
        }
        handleStart() {
          var e;
          this.props.actions.beginCourse(
            this.props.training.course._id,
            this.props.permissionId
          ),
            C.c.track("Course Started", {
              user:
                null === (e = this.props.user) || void 0 === e ? void 0 : e._id,
              courseId: this.props.training.course._id,
            });
        }
        handlePrevious() {
          this.state.currentSection > 0 &&
            this.setState({ currentSection: this.state.currentSection - 1 });
        }
        handleContinue(e) {
          var s, i;
          this.props.actions.continueCourse(
            this.props.training.courseProgress._id,
            D({}, e, {
              certificationTimeRemainingSecs:
                this.state.certificationTimeRemainingSecs,
              currentSectionState: this.state.currentSection,
            })
          );
          const t = this.state.isReviewing
            ? this.state.currentSection
            : null !==
                (i =
                  null === (s = this.props.training.courseProgress) ||
                  void 0 === s
                    ? void 0
                    : s.currentSection) && void 0 !== i
            ? i
            : this.state.currentSection;
          this.setState({ currentSection: t + 1 });
        }
        handleSectionNavigate(e) {
          var s;
          !!(null === (s = this.props.training.course.initialTestInfo) ||
          void 0 === s
            ? void 0
            : s.isInitialTest) || this.setState({ currentSection: e });
        }
        handleReviewCourse() {
          this.setState({ currentSection: 0, isReviewing: !0 });
        }
        renderCourseSection() {
          var e;
          const { course: s, courseProgress: i } = this.props.training;
          if (this.state.currentSection >= s.sections.length)
            return (0, t.jsx)(q, {
              query: this.props.query,
              responsive: this.props.mobile,
              course: s,
              courseProgress: i,
              returnUrl: this.props.returnUrl,
              handleReviewCourse: () => this.handleReviewCourse(),
              handleCompleteSupplementalCourse:
                this.props.handleCompleteSupplementalCourse,
            });
          const n = X("sections", this.props.i18n.language, s)[
            this.state.currentSection
          ];
          return (0, r.createElement)(
            x.ZP,
            D({ responsive: this.props.mobile }, n, {
              sectionIndex: this.state.currentSection,
              course: s,
              actions: this.props.actions,
              handlePrevious: this.handlePrevious,
              canAlwaysContinue:
                this.state.currentSection < i.currentSection ||
                (s.isCertification &&
                  ![
                    k.CourseSectionType.Scenario,
                    k.CourseSectionType.AccountVerification,
                    k.CourseSectionType.Video,
                  ].includes(n.type)),
              handleContinue: this.handleContinue,
              key: this.state.currentSection,
              userFlags:
                null === (e = this.props.user) || void 0 === e
                  ? void 0
                  : e.featureFlags,
              user: this.props.user,
            })
          );
        }
        renderCourse() {
          const {
            training: e,
            isInQueue: s,
            assignments: i,
            courseId: r,
          } = this.props;
          if (e.isLoading)
            return (0, t.jsxs)("div", {
              className: "jsx-8d3b96866fe1f577 loading",
              children: [
                (0, t.jsx)(f.Z, {}),
                (0, t.jsx)(o(), {
                  id: "8d3b96866fe1f577",
                  children:
                    ".loading.jsx-8d3b96866fe1f577{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;padding:100px}",
                }),
              ],
            });
          if (this.props.training.courseError)
            return (0, t.jsxs)("div", {
              className: "jsx-5b15d25ab31919c5 content",
              children: [
                (0, t.jsxs)("h2", {
                  className: "jsx-5b15d25ab31919c5",
                  children: [
                    (0, t.jsx)(l.G, {
                      icon: "exclamation-circle",
                      color: "var(--color-RemoRed)",
                    }),
                    "\xa0 There was an error loading this course",
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "jsx-5b15d25ab31919c5",
                  children: this.props.training.courseError,
                }),
                (0, t.jsx)(o(), {
                  id: "5b15d25ab31919c5",
                  children:
                    ".content.jsx-5b15d25ab31919c5{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;padding:100px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}",
                }),
              ],
            });
          const n = a().get(i, [0, "courseList"], []),
            c = n.indexOf(r);
          if (-1 === this.state.currentSection)
            return (0, t.jsx)(
              Z,
              D({}, e, {
                actions: this.props.actions,
                isInQueue: s,
                numCourses: n.length - c,
                query: this.props.query,
                permissionId: this.props.permissionId,
                onCourseStart: this.handleStart.bind(this),
              })
            );
          const d = a().get(
              this.props,
              [
                "training",
                "courseProgress",
                "certificationInfo",
                "certificationAttemptsSections",
              ],
              []
            ),
            u =
              e.courseProgress.currentSection === this.state.currentSection &&
              (d[this.state.currentSection] || 0) >= 1;
          return (0, t.jsxs)("div", {
            className: I()({
              [this.props.classes.courseWrapperResponsive]: this.props.mobile,
            }),
            children: [
              (0, t.jsx)(
                F,
                D({}, e, {
                  currentSection: this.state.currentSection,
                  handleSectionNavigate: this.handleSectionNavigate,
                  isInQueue: s,
                  certificationTimeRemainingSecs:
                    this.state.certificationTimeRemainingSecs,
                  responsive: this.props.mobile,
                })
              ),
              u &&
                (0, t.jsx)(_.bZ, {
                  severity: "warning",
                  style: { margin: "1rem" },
                  children: "Ooops! That doesn't seem right. Please try again.",
                }),
              this.renderCourseSection(),
            ],
          });
        }
        render() {
          return (0, t.jsx)("div", {
            className: this.props.classes.coursePage,
            children: (0, t.jsxs)("div", {
              className: this.props.classes.courseContainer,
              children: [
                !this.props.isInQueue &&
                  (0, t.jsx)(
                    B,
                    D({ responsive: this.props.mobile }, this.props.training)
                  ),
                (0, t.jsx)("div", {
                  className: I()(this.props.classes.courseCard, {
                    [this.props.classes.courseCardResponsive]:
                      this.props.mobile,
                  }),
                  children: this.renderCourse(),
                }),
              ],
            }),
          });
        }
        constructor(e) {
          super(e),
            (this.timerID = null),
            (this.state = { currentSection: -1, isReviewing: !1 }),
            (0, h.Z)(
              this,
              "handlePrevious",
              "handleContinue",
              "handleSectionNavigate",
              "handleUnmount"
            );
        }
      }
      const X = (e, s, i) =>
          s === S._J.English ||
          !S.V2.includes(e) ||
          a().isEmpty((i.localizedContent || {})[s])
            ? a().get(i, e)
            : a().get(i.localizedContent, [s, e]),
        J = (0, _.kc)({
          coursePage: {
            height: "100%",
            width: "100vw",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "var(--color-RemoGray01)",
          },
          courseContainer: {
            width: "80vw",
            maxWidth: "1080px",
            padding: "64px 0",
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              padding: 0,
              width: "100vw",
              height: "100vh",
            },
          },
          courseContainerResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              height: "100%",
              padding: "32px",
              width: "100%",
            },
          },
          courseCard: {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
            borderRadius: "var(--border-radius)",
            background: "white",
            overflow: "hidden",
          },
          courseCardResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: {
              height: "100%",
              overflow: "scroll",
            },
          },
          courseWrapperResponsive: {
            [`@media (max-width: ${L.MOBILE_THRESHOLD})`]: { height: "100%" },
          },
        });
      var ee;
      s.Z = (0, E.Zh)("course")(
        (0, _.D2)(J)(
          ((ee = (0, N.ZP)(Y)),
          (e) => {
            const s = (0, w.Z)(`(max-width: ${L.MOBILE_THRESHOLD})`);
            return (0, t.jsx)(ee, D({ mobile: s }, e));
          })
        )
      );
    },
    463953: function (e, s, i) {
      i.d(s, {
        K: function () {
          return f;
        },
        ZS: function () {
          return v;
        },
        ZP: function () {
          return E;
        },
      });
      var t = i(824246),
        r = i(298784),
        n = i.n(r),
        o = i(827378),
        c = i(520977),
        a = i(935870),
        d = i(25207),
        l = i(128819),
        u = i(885564),
        p = i(392886),
        m = i(775143),
        h = i(563247),
        g = i(634403),
        x = i(237896);
      const b = (e) => n().pickBy(e, n().isFunction);
      function f(e) {
        var s, i, t, r;
        return {
          user: e.user,
          batch: e.batch,
          batchStatus: e.batch.status,
          assignments: e.batch.assignments,
          claims: e.batch.claims,
          training: e.training,
          forceFixAssignment: e.batch.forceFixAssignment,
          postCompletionFeedback: e.batch.postCompletionFeedback,
          previousInstructiveAttemptResponse:
            e.batch.previousInstructiveAttemptResponse,
          previousInstructiveAttemptId: e.batch.previousInstructiveAttemptId,
          perProjectAccuracies: e.batch.perProjectAccuracies,
          perProjectTopMistakes: e.batch.perProjectTopMistakes,
          perProjectInstructionItemAccuracies:
            e.batch.perProjectInstructionItemAccuracies,
          perProjectInstructionItemLastSeen:
            e.batch.perProjectInstructionItemLastSeen,
          perProjectPassRate: e.batch.perProjectPassRate,
          currentProjectAccuracyBucket: e.batch.currentProjectAccuracyBucket,
          readyForTasking:
            null === (s = e.batch.readyForTasking) || void 0 === s || s,
          skippedTask: null !== (i = e.batch.skippedTask) && void 0 !== i && i,
          precalculatedPay:
            null !== (t = e.batch.precalculatedPay) && void 0 !== t ? t : null,
          isExitingTask:
            null !== (r = e.batch.isExitingTask) && void 0 !== r && r,
        };
      }
      function v(e) {
        const s = b(m);
        return { actions: (0, d.DE)(s, e) };
      }
      const S = (0, d.UY)(b(h));
      const j = (0, d.md)(a.Z),
        y = (0, d.MT)(S, j);
      class E extends o.Component {
        componentDidMount() {
          g.Z.flushExpired(),
            m.fetchApi("/scaler/ping"),
            setInterval(() => m.fetchApi("/scaler/ping"), 3e5);
        }
        render() {
          const { children: e } = this.props;
          return (0, t.jsxs)("div", {
            style: { height: "100%" },
            children: [
              this.props.isExpert ? (0, t.jsx)(x.Z, {}) : (0, t.jsx)(l.Z, {}),
              (0, t.jsx)(u.Z, {}),
              (0, t.jsx)(p.Z, {}),
              (0, t.jsx)(c.zt, { store: y, children: e }),
            ],
          });
        }
      }
    },
    563247: function (e, s, i) {
      i.r(s),
        i.d(s, {
          PENDING: function () {
            return d;
          },
          ACTIVE: function () {
            return l;
          },
          ENDED: function () {
            return u;
          },
          batch: function () {
            return h;
          },
          user: function () {
            return g;
          },
          training: function () {
            return b;
          },
        });
      var t = i(298784),
        r = i.n(t),
        n = i(791257),
        o = i(599789),
        c = i(775143),
        a = i(633407);
      const d = "PENDING",
        l = "ACTIVE",
        u = "ENDED",
        p = { assignments: [], claims: {}, status: d },
        m = (e) =>
          e.assignmentType !== o.AssignmentType.Course &&
          (0, n.isLegacyReviewAssignment)(e)
            ? e.attemptId
            : e._id;
      function h(e = p, s) {
        switch (s.type) {
          case c.EXTEND_BATCH: {
            const i = new Set(r().keys(e.claims));
            let t = e.assignments ? e.assignments.slice() : [];
            t = t.concat(s.assignments.filter((e) => !i.has(m(e))));
            const n = Object.assign(
              {},
              (function (e) {
                const s = {};
                for (const i of e) {
                  const e = new Date();
                  s[m(i)] = {
                    claimed: !0,
                    claimedUntil: e,
                    checkedAtClientTime: e,
                    checkedAt: e,
                    idleMinutes: 1,
                    maxClaim: new Date(Date.now() + 864e5),
                  };
                }
                return s;
              })(t),
              e.claims
            );
            return Object.assign({}, e, {
              assignments: t,
              claims: n,
              status: t.length ? l : u,
            });
          }
          case c.UPDATE_CLAIMS: {
            const {
                currentPageHasEditLock: i,
                otherUserHasLock: t,
                canOverride: n,
              } = s,
              o = Object.assign(e.claims, s.claims);
            return Object.assign(
              {},
              e,
              { claims: o, otherUserHasLock: t, canOverrideEditLock: n },
              r().isBoolean(i) ? { currentPageHasEditLock: i } : {}
            );
          }
          case c.UPDATE_PROJECT_BENCHMARK_METRICS: {
            const i = s.perProjectBenchmarkMetrics;
            return Object.assign({}, e, i);
          }
          case c.CONFIRM_READY_FOR_NEXT_TASK:
            return Object.assign({}, e, {
              readyForTasking: !0,
              skippedTask: !1,
              precalculatedPay: null,
            });
          case c.AWAIT_CONFIRMATION_FOR_TASKING:
            return Object.assign({}, e, { readyForTasking: !1 });
          case c.AWAIT_CONFIRMATION_FOR_SKIP_TASK:
            return Object.assign({}, e, {
              readyForTasking: !1,
              skippedTask: !0,
            });
          case c.NEXT_ASSIGNMENT:
          case c.SKIP_ASSIGNMENT:
          case c.REPORT_ASSIGNMENT:
          case c.FLAG_ASSIGNMENT:
            return e.assignments.length > 1
              ? Object.assign({}, e, {
                  assignments: e.assignments.slice(1),
                  forceFixAssignment: null,
                })
              : Object.assign({}, e, {
                  assignments: [],
                  status: d,
                  forceFixAssignment: null,
                });
          case c.COMPLETE_ASSIGNMENTS:
            return e.assignments.length - s.assignments.length > 1
              ? Object.assign({}, e, {
                  assignments: r().difference(e.assignments, s.assignments),
                  forceFixAssignment: null,
                })
              : Object.assign({}, e, {
                  assignments: [],
                  status: d,
                  forceFixAssignment: null,
                });
          case c.SHOW_CORRUPTION_FEEDBACK: {
            const i = Object.assign({}, e);
            return (
              r().get(i, [
                "claims",
                s.corruptionFeedbackAttempt,
                "corruptionFeedback",
              ]) &&
                (i.claims[s.corruptionFeedbackAttempt].corruptionFeedback =
                  Object.assign(s.corruptionFeedback, {
                    postReviewSubmission: !0,
                    confidenceAction: s.confidenceAction,
                    reviewTimeSecs: s.reviewTimeSecs,
                  })),
              i
            );
          }
          case c.SHOW_POST_COMPLETION_FEEDBACK:
            return Object.assign({}, e, {
              postCompletionFeedback: s.postCompletionFeedback,
            });
          case c.COMPLETE_INSTRUCTIVE:
            if (!r().isEmpty(s.instructiveResponse)) {
              const i = r().last(s.instructiveResponse.newInstructiveAttempts),
                t =
                  r().get(i, "response") ||
                  r().get(s.instructiveResponse, "response"),
                n = !s.instructiveResponse.submitted;
              return Object.assign({}, e, {
                forceFixAssignment: n,
                previousInstructiveAttemptResponse: t,
                previousInstructiveAttemptId:
                  s.instructiveResponse._id.toString(),
              });
            }
            return e;
          case c.SET_PRECALCULATED_PAY:
            return Object.assign({}, e, {
              precalculatedPay: s.precalculatedPay,
            });
          case c.SET_BONUSES: {
            const i = r().groupBy(e.bonuses, "_id"),
              t = r().map(e.newBonuses, "_id");
            let n = [];
            return (
              s.first ||
                (n = r().filter(
                  s.bonuses,
                  (e) =>
                    (0, a.Ld)(e) &&
                    (!r().has(i, e._id) || !(0, a.Ld)(i[e._id][0])) &&
                    !r().includes(t, e._id)
                )),
              Object.assign({}, e, {
                bonuses: s.bonuses,
                newBonuses: r().concat(e.newBonuses || [], n),
              })
            );
          }
          case c.DISPLAY_NEW_BONUS: {
            const i = r().filter(e.newBonuses, (e) => e._id !== s.bonus._id);
            return Object.assign({}, e, { newBonuses: i });
          }
          default:
            return e;
        }
      }
      function g(e = null, s) {
        return s.type === c.SET_CURRENT_USER ? s.user : e;
      }
      const x = {
        isLoading: !0,
        course: {},
        courseProgress: {},
        courseError: null,
      };
      function b(e = x, s) {
        switch (s.type) {
          case c.TRAINING_ACTIONS.SET_LOADING:
            return Object.assign({}, e, { isLoading: s.isLoading });
          case c.TRAINING_ACTIONS.SET_COURSE:
            return (
              (function (e = {}) {
                const s = r().find(
                  r().get(e, "sections"),
                  (e) => e.type === o.CourseSectionType.InstructionList
                );
                e.instructionList = r().get(s, "contents.instructionList");
              })(s.course),
              Object.assign({}, e, { course: s.course })
            );
          case c.TRAINING_ACTIONS.SET_COURSE_PROGRESS:
            return Object.assign({}, e, { courseProgress: s.courseProgress });
          case c.TRAINING_ACTIONS.SET_COURSE_ERROR:
            return Object.assign({}, e, { courseError: s.courseError });
          default:
            return e;
        }
      }
    },
  },
]);
