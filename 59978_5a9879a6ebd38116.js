"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [59978],
  {
    959978: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return ce;
        },
      });
      var n = s(824246),
        r = s(827378),
        i = s(722030),
        o = s(416534),
        c = s(916353),
        a = s(60042),
        l = s.n(a),
        d = s(128771),
        u = s(592284),
        m = s(257881),
        h = s(203577),
        p = s(569302),
        x = s(298784),
        f = s.n(x),
        v = s(138944),
        b = s(444832),
        j = s(713222),
        g = s(775222),
        y = s(456552),
        C = s(657294);
      const w = ({ isRadioButton: e, isSelected: t }) =>
        (0, n.jsx)("i", {
          className: (0, v.default)(
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
              : (0, n.jsx)(j.J, { icon: "check", size: "sm" })),
        });
      var S = ({ course: e, item: t, courseProgress: s, sectionIndex: c }) => {
          const { 0: a, 1: l } = (0, r.useState)([]),
            { 0: d, 1: u } = (0, r.useState)(!1),
            { 0: h, 1: p } = (0, r.useState)(!1),
            { 0: x, 1: j } = (0, r.useState)(""),
            { 0: S, 1: k } = (0, r.useState)(""),
            { 0: N, 1: P } = (0, r.useState)(!1),
            I = (0, C.B)((e) => e.addToMultipleChoiceCompleteness);
          (0, r.useEffect)(() => {
            if (s.courseAnswer) {
              const r = s.courseAnswer[t.id];
              if (r) {
                var e, n;
                r.isComplete && I(t.id),
                  P(null !== (e = r.isComplete) && void 0 !== e && e);
                const s = (
                  null !== (n = t.contents.choices) && void 0 !== n ? n : []
                )
                  .map((e, t) => (r.contents.includes(e.id) ? t : -1))
                  .filter((e) => -1 !== e);
                l(s);
              }
            }
          }, [s, t.contents.choices, t.id, I]);
          const { mutate: A, isLoading: T } = (0, y.useMutation)(
            (n) =>
              m.Z.labeling.checkCourseV2Answer(e._id, {
                courseProgressId: s._id,
                sectionIndex: c,
                itemId: t.id,
                selectedAnswerIds: n,
              }),
            {
              onSuccess: (e) => {
                u(!1),
                  p(!1),
                  e.noCorrectAnswerRequired
                    ? (P(!0), I(t.id))
                    : e.isCorrect
                    ? (P(!0), u(!0), j(e.explanation), I(t.id))
                    : (P(e.isComplete),
                      p(!0),
                      k(e.hint),
                      e.isComplete && I(t.id));
              },
              onError: () => {
                g.c.track("Multiple Choice - Failed to retrieve answer");
              },
            }
          );
          return (0, n.jsxs)("div", {
            className: "p-6",
            children: [
              (0, n.jsx)("div", {
                className: "text-sm pb-4",
                children: t.contents.question,
              }),
              (0, n.jsx)("div", {
                className: "grid grid-cols-[1fr_1fr] gap-2",
                children: f().map(t.contents.choices, (e, s) => {
                  const r = f().includes(a, s);
                  return (0, n.jsxs)(
                    "div",
                    {
                      className: (0, v.default)([
                        "border-solid border rounded-lg mb-4",
                        "hover:bg-neutral-50 transition-colors bg-neutral-0",
                        "cursor-pointer",
                        "flex justify-between items-center font-medium",
                        { "border-neutral-300": !r, "border-primary-500": r },
                      ]),
                      onClick: () =>
                        ((e) => {
                          if (t.contents.singleSelect) return l([e]);
                          const s = f().cloneDeep(a);
                          f().includes(s, e) ? f().pull(s, e) : s.push(e), l(s);
                        })(s),
                      children: [
                        (0, n.jsx)("div", {
                          className: "p-6",
                          children: e.answer || "",
                        }),
                        (0, n.jsx)("div", {
                          className: "mr-4",
                          children: (0, n.jsx)(w, {
                            isRadioButton: t.contents.singleSelect,
                            isSelected: r,
                          }),
                        }),
                      ],
                    },
                    s
                  );
                }),
              }),
              !N &&
                (0, n.jsx)("div", {
                  className: "w-full px-6 pb-6 flex justify-center",
                  children: (0, n.jsx)(o.zx, {
                    disabled: 0 === a.length,
                    className: "w-60",
                    size: "lg",
                    fullWidth: !0,
                    variant: "primary",
                    onClick: () => A(a.map((e) => t.contents.choices[e].id)),
                    children: "Submit Answer",
                  }),
                }),
              T &&
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(i.$, {
                    className: "flex justify-center",
                    size: "sm",
                  }),
                }),
              !t.contents.hideAnswerFeedback &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    d &&
                      (0, n.jsx)(b.j, {
                        className: "mb-4",
                        title: "Correct!",
                        subtitle: x,
                        background: "white",
                        variant: "success",
                      }),
                    h &&
                      (0, n.jsx)(b.j, {
                        className: "mb-4",
                        title: "Not quite! " + (N ? "" : "Try again"),
                        subtitle: S,
                        background: "white",
                        variant: "danger",
                      }),
                  ],
                }),
              !!t.contents.hideAnswerFeedback &&
                (d || h) &&
                (0, n.jsx)(b.j, {
                  className: "mb-4",
                  title: "Answer has been recorded",
                  background: "white",
                  variant: "neutral",
                }),
            ],
          });
        },
        k = s(220453);
      function N({ markdownString: e }) {
        return (0, n.jsx)("div", {
          dangerouslySetInnerHTML: { __html: k.ZP.render(e) },
        });
      }
      var P = ({ item: e }) =>
          (0, n.jsx)("div", {
            className: "ql-editor p-6",
            children: (0, n.jsx)(N, { markdownString: e.contents.body || "" }),
          }),
        I = s(692975),
        A = s(776845);
      var T = ({ item: e }) => {
          const t = (0, r.useRef)(null),
            { 0: s, 1: i } = (0, r.useState)(0),
            o = (0, r.useRef)(0),
            { videoCompleteness: c, addVideoCompleteness: a } = (0, C.B)(
              (e) => ({
                videoCompleteness: e.videoCompleteness,
                addVideoCompleteness: e.addVideoCompleteness,
              })
            ),
            l = e.contents.allowSkimming || c.has(e.id);
          return (
            (0, r.useEffect)(() => {
              var e;
              const n =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getInternalPlayer();
              if (!n || l) return;
              const r = () => {
                n.currentTime > s + 1 && (n.currentTime = o.current);
              };
              return (
                n.addEventListener("timeupdate", r),
                () => n.removeEventListener("timeupdate", r)
              );
            }, [s, l]),
            (0, n.jsx)("div", {
              className: "p-6",
              children:
                e.contents.videoUrl &&
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("div", {
                      className: "rounded-lg overflow-hidden w-full",
                      children: (0, n.jsx)(I.Z, {
                        ref: t,
                        controls: !0,
                        width: "100%",
                        url: e.contents.videoUrl,
                        onEnded: () => {
                          a(e.id);
                        },
                        onProgress: (e) => {
                          const n = e.playedSeconds;
                          var r;
                          !l && n > s + 1
                            ? null === (r = t.current) ||
                              void 0 === r ||
                              r.seekTo(o.current, "seconds")
                            : ((o.current = n), i(Math.max(n, s)));
                        },
                        onSeek: (e) => {
                          var n;
                          !l &&
                            e > s &&
                            (null === (n = t.current) ||
                              void 0 === n ||
                              n.seekTo(o.current, "seconds"));
                        },
                        progressInterval: 100,
                        config: {
                          file: { attributes: { crossOrigin: "true" } },
                        },
                      }),
                    }),
                    e.contents.videoCaption &&
                      (0, n.jsx)(A.ZT.Subtitle3, {
                        className: "mt-2 text-center",
                        children: e.contents.videoCaption,
                      }),
                  ],
                }),
            })
          );
        },
        O = s(775143),
        E = s(107555),
        z = s(599789);
      function R(e, t, s, n, r, i, o) {
        try {
          var c = e[i](o),
            a = c.value;
        } catch (l) {
          return void s(l);
        }
        c.done ? t(a) : Promise.resolve(a).then(n, r);
      }
      function B(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (n, r) {
            var i = e.apply(t, s);
            function o(e) {
              R(i, n, r, o, c, "next", e);
            }
            function c(e) {
              R(i, n, r, o, c, "throw", e);
            }
            o(void 0);
          });
        };
      }
      var $ = ({ item: e, user: t, setIsBenchmarkFinished: s }) => {
          var o;
          const { 0: c, 1: a } = (0, r.useState)(void 0),
            { 0: l, 1: d } = (0, r.useState)(!1),
            { 0: u, 1: h } = (0, r.useState)(null),
            { 0: p, 1: x } = (0, r.useState)(!1),
            { 0: v, 1: b } = (0, r.useState)(!0),
            { 0: j, 1: g } = (0, r.useState)([]),
            { 0: C, 1: w } = (0, r.useState)([]),
            { 0: S, 1: k } = (0, r.useState)(void 0),
            { 0: N, 1: P } = (0, r.useState)(void 0),
            I = e.contents.benchmarkId,
            { refetch: A } = (0, y.useQuery)(
              "loadScenarioAndPreviousAttempts",
              B(function* () {
                var e;
                const s = t.id,
                  n = yield (0, O.fetchApi)(
                    `/training/training_attempts/${I}/${s}`,
                    { parseAndHandle: !0 }
                  );
                let r,
                  i,
                  o = {},
                  c = (null === n || void 0 === n ? void 0 : n.trainingAttempts)
                    ? null === (e = f().last(n.trainingAttempts)) ||
                      void 0 === e
                      ? void 0
                      : e._id
                    : void 0;
                if (c) {
                  const e = yield (0, O.fetchApi)(`/training/view/${c}`, {
                    parseAndHandle: !0,
                  });
                  (i = e.trainingScenario),
                    (o = e.submissionResponse),
                    (r = e.leaderboard),
                    g(n.trainingAttempts);
                } else {
                  const e = yield (0, O.fetchApi)(`/training/begin/${I}`, {
                    parseAndHandle: !0,
                  });
                  (i = e.trainingScenario),
                    (r = e.leaderboard),
                    (c = e.trainingAttempt);
                  const t = yield (0, O.fetchApi)(
                    `/training/training_attempts/${I}/${s}`,
                    { parseAndHandle: !0 }
                  );
                  g(t.trainingAttempts);
                }
                const l = yield (0, O.fetchApi)(`/config/${i.project}`, {
                  parseAndHandle: !0,
                });
                return (
                  k(l),
                  a(i),
                  P(o),
                  w(r),
                  b(!1),
                  {
                    trainingScenario: i,
                    scenarioProjectConfig: l,
                    submissionResponse: o,
                    scenarioLeaderboard: r,
                  }
                );
              }),
              { enabled: !1, staleTime: 3e5, cacheTime: 6e5 }
            ),
            { refetch: T } = (0, y.useQuery)(
              "checkScenarioStatus",
              B(function* () {
                if (I) {
                  x(!0);
                  const e = yield m.Z.labeling.getTrainingScenarioStatus(I);
                  d(e.isTutorial ? e.foundAttempt : e.passedBar),
                    s(e.isTutorial ? e.foundAttempt : e.passedBar),
                    h(e.throttleTimeMs),
                    x(!1);
                }
              }),
              { enabled: !1, staleTime: 3e5, cacheTime: 6e5 }
            );
          return (
            (0, r.useEffect)(() => {
              T(), A();
            }, [T, A, e]),
            u
              ? null
              : (0, n.jsx)("div", {
                  className: "my-4",
                  children: l
                    ? (0, n.jsx)("div", {
                        className:
                          "flex items-center justify-center h-40 scenario-box",
                        children: (0, n.jsx)("p", {
                          children:
                            "You finished this practice task! Continue to the next section",
                        }),
                      })
                    : v
                    ? (0, n.jsx)("div", {
                        className:
                          "flex items-center justify-center h-40 scenario-box",
                        children: (0, n.jsx)(i.$, { size: "lg" }),
                      })
                    : (0, n.jsx)("div", {
                        className:
                          "flex justify-center flex-wrap xl:flex-nowrap h-full",
                        children:
                          c &&
                          S &&
                          (0, n.jsx)(E.Z, {
                            hideBackButton: !0,
                            simpleFeedbackModalClosing: !0,
                            trainingAttempt:
                              null === (o = f().last(j)) || void 0 === o
                                ? void 0
                                : o._id,
                            trainingScenario: c,
                            isCorpUser: t.isCorporateUser || !1,
                            name: c,
                            submissionResponse: N,
                            toggleShowingFeedback: () => {},
                            leaderboard: C,
                            config: S,
                            query: { trainingId: c.id },
                            overrideAnswerKeyCooldown: !1,
                            user: t,
                            serverRendered: !1,
                            projectConfig: S,
                            onFeedbackCloseLoading: p,
                            courseVersion: z.CourseVersion.V2,
                            hideHeader: !0,
                          }),
                      }),
                })
          );
        },
        F = s(339389);
      var _ = ({ course: e, item: t, courseProgress: s, sectionIndex: c }) => {
          var a, l, d, u, h;
          const { 0: p, 1: x } = (0, r.useState)(
            null !==
              (h =
                null === s ||
                void 0 === s ||
                null === (a = s.courseAnswer) ||
                void 0 === a ||
                null === (l = a[t.id]) ||
                void 0 === l
                  ? void 0
                  : l.contents) && void 0 !== h
              ? h
              : ""
          );
          var f;
          const { 0: v, 1: b } = (0, r.useState)(
              null !==
                (f =
                  null === s ||
                  void 0 === s ||
                  null === (d = s.courseAnswer) ||
                  void 0 === d ||
                  null === (u = d[t.id]) ||
                  void 0 === u
                    ? void 0
                    : u.contents) && void 0 !== f
                ? f
                : ""
            ),
            j =
              (t.contents.minCharacters &&
                p.length < t.contents.minCharacters) ||
              (t.contents.maxCharacters && p.length > t.contents.maxCharacters),
            { addTextResponseCompleteness: w } = (0, C.B)((e) => ({
              addTextResponseCompleteness: e.addTextResponseCompleteness,
            }));
          (0, r.useEffect)(() => {
            if (s.courseAnswer) {
              const e = s.courseAnswer[t.id];
              e && e.isComplete && w(t.id);
            }
          }, [s, t.id, w]);
          const { mutate: S, isLoading: k } = (0, y.useMutation)(
            (n) =>
              m.Z.labeling.recordCourseV2TextResponse(e._id, {
                courseProgressId: s._id,
                sectionIndex: c,
                itemId: t.id,
                textResponseValue: n,
              }),
            {
              onSuccess: () => {
                b(p), w(t.id);
              },
              onError: () => {
                g.c.track("Text Response - Failed to retrieve response");
              },
            }
          );
          return (0, n.jsxs)("div", {
            className: "p-6",
            children: [
              (0, n.jsx)("div", {
                className: "text-sm pb-4",
                children: t.contents.question,
              }),
              (0, n.jsx)("div", {
                className: "text-sm text-gray-600 text-right",
                children:
                  t.contents.minCharacters && t.contents.maxCharacters
                    ? `${t.contents.minCharacters} min char | ${t.contents.maxCharacters} max char`
                    : t.contents.minCharacters
                    ? `${t.contents.minCharacters} min char`
                    : t.contents.maxCharacters
                    ? `${t.contents.maxCharacters} max char`
                    : null,
              }),
              (0, n.jsx)("div", { className: "sp__1" }),
              (0, n.jsx)(F.K, {
                placeholder: "Type answer here...",
                value: p,
                onChange: (e) => {
                  x(e.target.value);
                },
              }),
              (0, n.jsxs)("div", {
                className: "text-sm text-gray-600 text-right",
                children: ["Char count: ", p.length],
              }),
              (0, n.jsx)("div", {
                className: "w-full px-6 pb-6 flex justify-center",
                children: (0, n.jsx)(o.zx, {
                  disabled: j || k || p === v,
                  className: "w-60",
                  size: "lg",
                  fullWidth: !0,
                  variant: "primary",
                  onClick: () => S(p),
                  children: p === v && "" !== v ? "Answered" : "Submit Answer",
                }),
              }),
              k &&
                (0, n.jsx)("div", {
                  children: (0, n.jsx)(i.$, {
                    className: "flex justify-center",
                    size: "sm",
                  }),
                }),
            ],
          });
        },
        V = s(61714),
        M = s(45713);
      function Z(e, t, s) {
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
      function L(e) {
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
              Z(e, t, s[t]);
            });
        }
        return e;
      }
      const q = r.lazy(() =>
          Promise.all([
            s.e(68143),
            s.e(11642),
            s.e(82178),
            s.e(86260),
            s.e(29736),
            s.e(16732),
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
            s.e(14843),
          ]).then(s.bind(s, 418196))
        ),
        H = ({ item: e }) => {
          var t;
          const { data: s, isLoading: o } = (0, M.PzI)(
            null !== (t = e.contents.taskId) && void 0 !== t ? t : ""
          );
          return (0, n.jsx)("div", {
            className: "scaleui scale-theme scale-tailwind",
            children:
              !o && s
                ? (0, n.jsx)(r.Suspense, {
                    fallback: (0, n.jsx)("div", {
                      className: "flex justify-center items-center",
                      children: (0, n.jsx)(i.$, {
                        size: "md",
                        className: "m-4",
                      }),
                    }),
                    children: (0, n.jsx)(q, {
                      params: s.params,
                      responses: s.responses,
                      reviewLevel: s.reviewLevel,
                      chatTaskFeatureConfig: s.chatTaskFeatureConfig,
                      readOnly: !0,
                    }),
                  })
                : (0, n.jsx)("div", {
                    className: "flex justify-center items-center",
                    children: (0, n.jsx)(i.$, { size: "md", className: "m-4" }),
                  }),
          });
        };
      var D = (e) =>
        (0, n.jsx)(V.aH, { client: M.Ehq, children: (0, n.jsx)(H, L({}, e)) });
      function U(e, t, s) {
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
      function K(e) {
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
              U(e, t, s[t]);
            });
        }
        return e;
      }
      const Q = r.lazy(() =>
          Promise.all([s.e(50084), s.e(53717), s.e(66473)])
            .then(s.bind(s, 342696))
            .then((e) => ({ default: e.ChatPreviewApp }))
        ),
        W = ({ item: e }) => {
          var t;
          const { data: s, isLoading: o } = (0, M.r4r)(
            null !== (t = e.contents.chatV2TaskId) && void 0 !== t ? t : ""
          );
          return (0, n.jsx)("div", {
            className: "scaleui scale-theme scale-tailwind",
            children:
              !o && s
                ? (0, n.jsx)(r.Suspense, {
                    fallback: (0, n.jsx)("div", {
                      className: "flex justify-center items-center",
                      children: (0, n.jsx)(i.$, {
                        size: "md",
                        className: "m-4",
                      }),
                    }),
                    children: (0, n.jsx)(
                      Q,
                      {
                        params: s.params,
                        response: s.response,
                        showOutline: !1,
                      },
                      e.contents.chatV2TaskId
                    ),
                  })
                : (0, n.jsx)("div", {
                    className: "flex justify-center items-center",
                    children: (0, n.jsx)(i.$, { size: "md", className: "m-4" }),
                  }),
          });
        };
      var X = (e) =>
          (0, n.jsx)(V.aH, {
            client: M.Ehq,
            children: (0, n.jsx)(W, K({}, e)),
          }),
        J = s(720227),
        Y = s(539728);
      function G(e, t, s, n, r, i, o) {
        try {
          var c = e[i](o),
            a = c.value;
        } catch (l) {
          return void s(l);
        }
        c.done ? t(a) : Promise.resolve(a).then(n, r);
      }
      function ee(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (n, r) {
            var i = e.apply(t, s);
            function o(e) {
              G(i, n, r, o, c, "next", e);
            }
            function c(e) {
              G(i, n, r, o, c, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function te(e, t, s) {
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
      function se(e) {
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
              te(e, t, s[t]);
            });
        }
        return e;
      }
      const ne = ({ title: e }) =>
          (0, n.jsx)("div", {
            className: "p-4 border-b border-neutral-200",
            children: (0, n.jsx)("strong", {
              className: "text-base flex justify-start items-center",
              children: e,
            }),
          }),
        re = (e) => {
          const { canAlwaysContinue: t, isBenchmarkFinished: s } = e,
            a = (0, p.X)((e) => e.canSubmitCourseBenchmark),
            u = (0, p.X)((e) => e.handleSubmitCourseBenchmark),
            { 0: x, 1: f } = (0, r.useState)(s || t),
            { 0: v, 1: b } = (0, r.useState)(!1),
            { 0: j, 1: g } = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            g(!1);
          }, [e.sectionIndex]),
            (0, r.useEffect)(() => {
              f(s);
            }, [s]);
          const { 0: y, 1: C } = (0, r.useState)(a),
            w = e.course.sections.length === e.sectionIndex + 1,
            S = e.sectionIndex > 0;
          (0, r.useEffect)(() => {
            C(a);
          }, [a]);
          const { 0: k, 1: N } = (0, r.useState)(!1),
            P = (function () {
              var t = ee(function* () {
                try {
                  const t = yield m.Z.labeling.getTrainingScenarioStatus(
                    e.benchmarkId
                  );
                  yield m.Z.labeling.submitBenchmarkAccuracyV2(
                    e.courseProgress._id,
                    {
                      benchmarkAccuracy: t.scenarioAccuracy,
                      benchmarkSectionItemId: e.courseSectionItems[0].id,
                      benchmarkId: e.benchmarkId,
                    }
                  ),
                    (t.isTutorial ? t.foundAttempt : t.passedBar)
                      ? (f(!0), g(!0))
                      : f(!1);
                } catch (t) {}
              });
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            I = (function () {
              var e = ee(function* () {
                try {
                  b(!0), u && (yield u(h.a5.Submit)), yield P(), b(!1);
                } catch (e) {}
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            A = l()(
              "fixed right-2 box-border overflow-hidden bg-primary-50 p-4 rounded-md",
              "border-2 border-primary-100 hover:border-primary-400",
              "z-[400]",
              { "w-[300px]": v, "w-[200px]": j }
            );
          return (0, n.jsx)("div", {
            children: (0, n.jsxs)("div", {
              className:
                "fixed bottom-0 left-0 right-0 py-3 px-4 flex justify-between bg-neutral-0 border-t border-neutral-200",
              children: [
                v &&
                  (0, n.jsx)("div", {
                    className: A,
                    style: { bottom: "5rem" },
                    children: (0, n.jsxs)("div", {
                      className: "text-primary-400 flex flex-col gap-1",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "flex flex-row items-center justify-between",
                          children: (0, n.jsxs)("div", {
                            className: "flex flex-row gap-4 items-center",
                            children: [
                              (0, n.jsx)(i.$, { size: "sm" }),
                              (0, n.jsx)("p", {
                                className:
                                  "text-sm font-medium text-primary-400",
                                children: "Submitting Practice Task",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)("p", {
                          className: "text-xs font-light",
                          children:
                            "Please wait while we validate and submit your practice task",
                        }),
                      ],
                    }),
                  }),
                j &&
                  (0, n.jsx)("div", {
                    className: A,
                    style: { bottom: "5rem" },
                    children: (0, n.jsx)("div", {
                      className: "text-primary-400 flex flex-col gap-1",
                      children: (0, n.jsx)("div", {
                        className: "flex flex-row items-center justify-between",
                        children: (0, n.jsx)("div", {
                          className: "flex flex-row gap-4 items-center",
                          children: (0, n.jsx)("p", {
                            className: "text-sm font-medium text-primary-400",
                            children: "Practice Task Succeeded!",
                          }),
                        }),
                      }),
                    }),
                  }),
                (0, n.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, n.jsx)(d.Z, { onClick: () => N(!0) }),
                    (0, n.jsx)(Y.c, { open: k, onClose: () => N(!1) }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, n.jsx)(o.zx, {
                      size: "lg",
                      variant: "neutral",
                      onClick: e.handlePrevious,
                      disabled: !S,
                      children: "Back",
                    }),
                    (0, n.jsx)(c.u, {
                      delayDuration: 0,
                      text: e.continueButtonTooltipMessage || "",
                      side: "top",
                      target: (0, n.jsx)("span", {
                        children: x
                          ? (0, n.jsx)(o.zx, {
                              size: "lg",
                              variant: "primary",
                              onClick: ee(function* () {
                                yield e.handleContinue();
                              }),
                              children: w ? "Finish" : "Continue",
                            })
                          : (0, n.jsx)(o.zx, {
                              size: "lg",
                              variant: "primary",
                              onClick: ee(function* () {
                                C(!1), yield I(), C(!0);
                              }),
                              disabled: !y,
                              children: "Submit",
                            }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ie = (e) => {
          const { canAlwaysContinue: t, courseSectionItems: s } = e,
            { 0: i, 1: a } = (0, r.useState)(t),
            {
              multipleChoiceCompleteness: l,
              videoCompleteness: m,
              textResponseCompleteness: h,
            } = (0, C.B)((e) => ({
              multipleChoiceCompleteness: e.multipleChoiceCompleteness,
              videoCompleteness: e.videoCompleteness,
              textResponseCompleteness: e.textResponseCompleteness,
            })),
            p = e.course.sections.length === e.sectionIndex + 1,
            x = e.sectionIndex > 0,
            { 0: f, 1: v } = (0, r.useState)("");
          (0, r.useEffect)(() => {
            v("");
            let e = !0;
            for (const t of s) {
              if (t.type === u.E5.MultipleChoice && !l.has(t.id)) {
                (e = !1), v("Please complete all questions before continuing");
                break;
              }
              if (t.type === u.E5.Video && !m.has(t.id)) {
                (e = !1), v("Please complete the video before continuing");
                break;
              }
              if (t.type === u.E5.TextResponse && !h.has(t.id)) {
                (e = !1),
                  v("Please complete the text response before continuing");
                break;
              }
            }
            a(e || t);
          }, [l, m, h, t, s]);
          const { 0: b, 1: j } = (0, r.useState)(!1);
          return (0, n.jsx)("div", {
            children: (0, n.jsxs)("div", {
              className:
                "fixed bottom-0 left-0 right-0 py-3 px-4 flex justify-between bg-neutral-0 border-t border-neutral-200",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, n.jsx)(d.Z, { onClick: () => j(!0) }),
                    (0, n.jsx)(Y.c, { open: b, onClose: () => j(!1) }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, n.jsx)(o.zx, {
                      size: "lg",
                      variant: "neutral",
                      onClick: e.handlePrevious,
                      disabled: !x,
                      children: "Back",
                    }),
                    (0, n.jsx)(c.u, {
                      delayDuration: 0,
                      text: e.continueButtonTooltipMessage || f || "",
                      side: "top",
                      target: (0, n.jsx)("span", {
                        children: (0, n.jsx)(o.zx, {
                          size: "lg",
                          variant: "primary",
                          onClick: ee(function* () {
                            a(!1), yield e.handleContinue();
                          }),
                          disabled: !i,
                          children: p ? "Finish" : "Continue",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function oe(e, t, s, r) {
        switch (t.type) {
          case u.E5.RichText:
            return (0, n.jsx)(P, { item: t });
          case u.E5.MultipleChoice:
            return (0, n.jsx)(S, {
              item: t,
              sectionIndex: r,
              courseProgress: s,
              course: e,
            });
          case u.E5.Video:
            return (0, n.jsx)(T, { item: t });
          case u.E5.TextResponse:
            return (0, n.jsx)(_, {
              item: t,
              sectionIndex: r,
              courseProgress: s,
              course: e,
            });
          case u.E5.Task:
            return (0, n.jsx)(D, { item: t });
          case u.E5.ChatV2:
            return (0, n.jsx)(X, { item: t });
          default:
            return (0, n.jsx)("div", {
              children: "Section Type Not Implemented",
            });
        }
      }
      var ce = (e) => {
        const { 0: t, 1: s } = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          window.scrollTo(0, 0);
        }, [e.sectionIndex]);
        if (
          1 === e.courseSectionItems.length &&
          e.courseSectionItems[0].type === u.E5.Benchmark
        ) {
          const r = e.courseSectionItems[0];
          return (0, n.jsxs)(
            "div",
            {
              className: "pb-20",
              children: [
                (0, n.jsx)(ne, { title: e.title }),
                (0, n.jsx)("div", {
                  children: (0, n.jsx)($, {
                    item: r,
                    user: e.user,
                    setIsBenchmarkFinished: s,
                  }),
                }),
                !e.hideFooter &&
                  (0, n.jsx)(
                    re,
                    se({}, e, {
                      isBenchmarkFinished: t,
                      benchmarkId: r.contents.benchmarkId,
                    })
                  ),
              ],
            },
            e.courseSectionItems[0].id
          );
        }
        return (0, n.jsx)("div", {
          className: (0, J.m)(!e.hideFooter && "pb-20"),
          children: (0, n.jsx)("div", {
            className:
              "max-w-screen-lg mx-auto border-solid border border-neutral-200 rounded-lg mb-4 bg-utility-white",
            children: (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)(ne, { title: e.title }),
                e.courseSectionItems.map((t, s) =>
                  (0, n.jsx)(
                    "div",
                    {
                      children: oe(
                        e.course,
                        t,
                        e.courseProgress,
                        e.sectionIndex
                      ),
                    },
                    `${t.id}-${s}`
                  )
                ),
                !e.hideFooter && (0, n.jsx)(ie, se({}, e)),
              ],
            }),
          }),
        });
      };
    },
    657294: function (e, t, s) {
      s.d(t, {
        B: function () {
          return o;
        },
      });
      var n = s(236125);
      function r(e, t, s) {
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
      const i = {
          multipleChoiceCompleteness: new Set(),
          videoCompleteness: new Set(),
          textResponseCompleteness: new Set(),
        },
        o = (0, n.Ue)((e) =>
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
                  r(e, t, s[t]);
                });
            }
            return e;
          })({}, i, {
            setMultipleChoiceCompleteness: (t) => {
              e(() => ({ multipleChoiceCompleteness: t }));
            },
            addToMultipleChoiceCompleteness: (t) => {
              e((e) => {
                const s = new Set(e.multipleChoiceCompleteness);
                return s.add(t), { multipleChoiceCompleteness: s };
              });
            },
            addVideoCompleteness: (t) => {
              e((e) => {
                const s = new Set(e.videoCompleteness);
                return s.add(t), { videoCompleteness: s };
              });
            },
            addTextResponseCompleteness: (t) => {
              e((e) => {
                const s = new Set(e.textResponseCompleteness);
                return s.add(t), { textResponseCompleteness: s };
              });
            },
          })
        );
    },
  },
]);
