"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7555],
  {
    333470: function (e, s, t) {
      var n = t(824246),
        i = t(679892),
        r = t.n(i),
        a = t(827378),
        o = t(881620),
        d = t(802638),
        c = t(298784),
        l = t.n(c),
        p = t(194892),
        u = t(808704),
        h = t(64499),
        m = t(513473),
        b = t(183316),
        x = t(220453);
      function g(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      const f = [
        u.GraderBuckets.Missing,
        u.GraderBuckets.Extraneous,
        u.GraderBuckets.Incorrect,
      ];
      class y extends a.Component {
        get graderResponse() {
          return this.props.submissionResponse.graderResponse;
        }
        renderTrainingAttemptId() {
          return (0, n.jsx)(
            "div",
            { children: `Training Attempt Id: ${this.props.trainingAttempt}` },
            "trainingAttemptId"
          );
        }
        renderInlineGraderAnnotations() {
          var e, s;
          const t =
            null === (e = this.props.trainingScenario) || void 0 === e
              ? void 0
              : e.params;
          if (!t) return null;
          const i =
            null === (s = this.graderResponse) || void 0 === s
              ? void 0
              : s.inlineAnnotationsList;
          if (!i) return null;
          const r =
              null === i || void 0 === i
                ? void 0
                : i.filter((e) => {
                    var s;
                    return (
                      (null === (s = e.graderConfig) || void 0 === s
                        ? void 0
                        : s.isGraded) &&
                      1 !== (null === e || void 0 === e ? void 0 : e.score)
                    );
                  }),
            a = [...t.before, ...t.turn, ...t.after];
          return (0, n.jsx)(
            "div",
            {
              children: l().map(r, (e, s) => {
                var t, i, r;
                const o = null === e || void 0 === e ? void 0 : e.responseIndex,
                  d = null === e || void 0 === e ? void 0 : e.score,
                  c = null === e || void 0 === e ? void 0 : e.selectedResponse,
                  l =
                    null === e ||
                    void 0 === e ||
                    null === (t = e.graderConfig) ||
                    void 0 === t
                      ? void 0
                      : t.validAnswers.join(", "),
                  p =
                    null === e ||
                    void 0 === e ||
                    null === (i = e.graderConfig) ||
                    void 0 === i ||
                    null === (r = i.stepConfig) ||
                    void 0 === r
                      ? void 0
                      : r.fieldId,
                  u = a.find((s) => {
                    var t, n;
                    return (
                      s.id ===
                      (null === e ||
                      void 0 === e ||
                      null === (t = e.graderConfig) ||
                      void 0 === t ||
                      null === (n = t.stepConfig) ||
                      void 0 === n
                        ? void 0
                        : n.stepId)
                    );
                  }),
                  h = null === u || void 0 === u ? void 0 : u.title;
                return (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("strong", {
                      children: [" Error #", s + 1, " "],
                    }),
                    (0, n.jsxs)("div", { children: ["Field Title: ", h] }),
                    (0, n.jsxs)("div", { children: ["Field ID: ", p] }),
                    (0, n.jsxs)("div", { children: ["Response #: ", o] }),
                    (0, n.jsxs)("div", {
                      children: ["Your Weighted Score: ", d],
                    }),
                    (0, n.jsxs)("div", { children: ["Your Answer: ", c] }),
                    (0, n.jsxs)("div", { children: ["Valid Answers: ", l] }),
                  ],
                });
              }),
            },
            "inlineGraderAnnotations"
          );
        }
        renderGlobalErrorScores() {
          var e;
          if (
            !(null === (e = this.graderResponse) || void 0 === e
              ? void 0
              : e.globalErrorScores)
          )
            return;
          const s = this.graderResponse.globalErrorScores,
            t = l().map(s, (e) => {
              var s;
              const t = e.intermediates && l().size(e.intermediates) > 1,
                i = e.correctWork !== e.totalWork,
                r =
                  0 !==
                  (null === e ||
                  void 0 === e ||
                  null === (s = e.graderConfig) ||
                  void 0 === s
                    ? void 0
                    : s.defaultWeight);
              if (i && r) {
                let s = (0, u.getErrorCategoryName)(e);
                const i = e.intermediates || 0;
                return (
                  !t &&
                    i &&
                    ((s += " ("),
                    (s += l()
                      .map(
                        i,
                        (e, s) =>
                          `${s}: ${
                            l().isNumber(e) && !l().isInteger(e)
                              ? e.toFixed(2)
                              : e
                          }`
                      )
                      .join(", ")),
                    (s += ")")),
                  (0, n.jsx)("li", { children: s })
                );
              }
            });
          return 0 !== t.length
            ? (0, n.jsxs)(
                "div",
                {
                  children: [
                    (0, n.jsx)("strong", { children: "Summary" }),
                    (0, n.jsx)("ul", { children: t }),
                  ],
                },
                "globalErrorScores"
              )
            : void 0;
        }
        getChatSubmittedAndExpectedResponse(e) {
          let s = (0, m.Hm)(l().get(e, "currentAnnotation.frames[0]")),
            t = (0, m.Hm)(l().get(e, "correctAnnotation.frames[0]"));
          return (
            (s = void 0 === s ? "(missing)" : `${s}`),
            (t = `${t}`),
            { yourResponse: s, expected: t }
          );
        }
        renderMatchedErrorScoresChat() {
          var e, s, t;
          const i =
            null === (e = this.props.trainingScenario) || void 0 === e
              ? void 0
              : e.params;
          if (!i) return null;
          const o = [...i.before, ...i.turn, ...i.after];
          if (
            !(null === (s = this.graderResponse) || void 0 === s
              ? void 0
              : s.matchedAnnotationsList)
          )
            return null;
          const d =
              this.props.submissionResponse.passedAccuracyBar &&
              this.props.submissionResponse.passedSpeedBar,
            c = this.graderResponse.matchedAnnotationsList,
            p =
              (null === (t = this.props.trainingScenario.graderParams) ||
              void 0 === t
                ? void 0
                : t.perAnnotationFeedback) || {},
            h = (0, u.getBucketedGradedAnnotations)(c, p),
            m = {};
          var b;
          (m[u.GraderBuckets.Missing] =
            this.graderResponse.matchedAnnotationsList.filter(
              (e) => e.correctAnnotation
            ).length),
            (m[u.GraderBuckets.Incorrect] =
              this.graderResponse.matchedAnnotationsList
                .filter((e) => e.correctAnnotation)
                .map((e) => {
                  var s;
                  return null !==
                    (b =
                      null === (s = e.scores) || void 0 === s
                        ? void 0
                        : s
                            .filter(
                              (e) =>
                                !["missing", "extraneous"].includes(
                                  e.graderType
                                )
                            )
                            .filter((e) => {
                              var s;
                              return (
                                0 !==
                                (null === (s = e.graderConfig) || void 0 === s
                                  ? void 0
                                  : s.defaultWeight)
                              );
                            }).length) && void 0 !== b
                    ? b
                    : 0;
                })
                .reduce((e, s) => e + s, 0));
          const g = {};
          return (
            (g[u.GraderBuckets.Missing] = h[u.GraderBuckets.Missing].length),
            (g[u.GraderBuckets.Incorrect] = h[u.GraderBuckets.Incorrect]
              .map((e) => {
                var s;
                return (
                  (null === (s = e.errors) || void 0 === s
                    ? void 0
                    : s.length) || 0
                );
              })
              .reduce((e, s) => e + s, 0)),
            (0, n.jsxs)(a.Fragment, {
              children: [
                l().map(f, (e) => {
                  if (l().isNil(h) || l().isEmpty(h[e])) return null;
                  const s = h[e];
                  return (0, n.jsxs)(
                    "div",
                    {
                      className: "jsx-81fa3863ed7808a4 bucket",
                      children: [
                        this.props.trainingScenario.feedbackMessage &&
                          (0, n.jsxs)("div", {
                            className:
                              "jsx-81fa3863ed7808a4 " +
                              ((d
                                ? "feedbackMessage"
                                : "feedbackMessageFail") || ""),
                            children: [
                              (0, n.jsx)("div", {
                                className: "jsx-81fa3863ed7808a4 bucket-name",
                                children: "Feedback",
                              }),
                              (0, n.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: x.ZP.render(
                                    this.props.trainingScenario.feedbackMessage
                                  ),
                                },
                                className: "jsx-81fa3863ed7808a4",
                              }),
                            ],
                          }),
                        m[e] &&
                          (0, n.jsxs)("div", {
                            className: "jsx-81fa3863ed7808a4 bucket-totals",
                            children: [g[e], " errors"],
                          }),
                        (0, n.jsx)("div", {
                          className: "jsx-81fa3863ed7808a4",
                          children: l().map(s, (e) => {
                            const s = l().get(
                              e,
                              "currentAnnotation.frames[0].chatTaskAnnotationMetadata"
                            );
                            let t = l().get(e, "metadata.props.label");
                            if (s) {
                              var i;
                              const e = s.stepId,
                                n = o.find((s) => s.id === e),
                                r =
                                  null ===
                                    (i = l()
                                      .get(n, "params.fields", [])
                                      .find(
                                        (e) => e.field_id === s.originalFieldId
                                      )) || void 0 === i
                                    ? void 0
                                    : i.title;
                              n &&
                                n.title &&
                                (t = `${n.title} | Response#: ${
                                  s.responseIndex + 1
                                }${
                                  void 0 === s.candidateIndex
                                    ? ""
                                    : ` | Candidate#: ${s.candidateIndex + 1}`
                                }${
                                  void 0 === s.originalFieldId
                                    ? ""
                                    : ` | Field: ${
                                        null !== r && void 0 !== r
                                          ? r
                                          : s.originalFieldId
                                      }`
                                }`);
                            }
                            if (!t) return null;
                            const { yourResponse: r, expected: a } =
                              this.getChatSubmittedAndExpectedResponse(e);
                            return (0, n.jsxs)(
                              "div",
                              {
                                className: "jsx-81fa3863ed7808a4 bucket-item",
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "jsx-81fa3863ed7808a4 bucket-item-name",
                                    children: t,
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "jsx-81fa3863ed7808a4",
                                    children: ["Your response: ", r],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "jsx-81fa3863ed7808a4",
                                    children: ["Expected: ", a],
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    },
                    e
                  );
                }),
                (0, n.jsx)(r(), {
                  id: "81fa3863ed7808a4",
                  children:
                    ".feedbackMessage.jsx-81fa3863ed7808a4{padding:8px;font-size:14px;border:1px solid#19b629;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-bottom:12px}.feedbackMessageFail.jsx-81fa3863ed7808a4{padding:8px;font-size:14px;border:1px solid#ec322f;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-bottom:12px}.bucket.jsx-81fa3863ed7808a4{padding:16px;font-size:14px}.bucket-name.jsx-81fa3863ed7808a4{letter-spacing:.5px;font-weight:500;opacity:.5}.bucket-totals.jsx-81fa3863ed7808a4{margin-top:4px;font-weight:500}.bucket-item.jsx-81fa3863ed7808a4{margin:16px 0}.bucket-item-name.jsx-81fa3863ed7808a4{margin-bottom:8px;font-weight:500}.bucket-errors.jsx-81fa3863ed7808a4{margin-left:16px}",
                }),
              ],
            })
          );
        }
        renderInlineGraderInstructiveFeedbackMessage() {
          var e, s, t, i, r;
          return (null === (e = this.props.trainingScenario) ||
          void 0 === e ||
          null === (s = e.benchmark) ||
          void 0 === s
            ? void 0
            : s.isInstructiveBenchmark) &&
            (null === (t = this.graderResponse) || void 0 === t
              ? void 0
              : t.inlineAnnotationsList)
            ? l().isNil(
                null === (i = this.props.trainingScenario) || void 0 === i
                  ? void 0
                  : i.feedbackMessage
              )
              ? void 0
              : (0, n.jsx)("div", {
                  className: "inline-grader-feedback-message",
                  children: (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsxs)("strong", {
                        children: ["Feedback Message: ", (0, n.jsx)("br", {})],
                      }),
                      null === (r = this.props.trainingScenario) || void 0 === r
                        ? void 0
                        : r.feedbackMessage,
                    ],
                  }),
                })
            : null;
        }
        renderGraderResponse() {
          const e = new URLSearchParams(window.location.search),
            s = e.get("trainingId");
          var t;
          const i =
              null !== (t = Boolean(e.get("isVerificationAttempt"))) &&
              void 0 !== t &&
              t,
            a = 1 === this.props.submissionResponse.accuracy;
          return (0, n.jsxs)("div", {
            className:
              "jsx-2b3bd2a18eb650f2 grader-response branded-scroll--neutral",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "jsx-2b3bd2a18eb650f2 grader-response-header scale-tailwind scale-theme scaleui flex flex-row items-center space-x-2",
                children: [
                  !a && "Error Summary",
                  i && s && a && (0, n.jsx)(b.Z, { benchmarkId: s, passed: a }),
                ],
              }),
              this.renderInlineGraderInstructiveFeedbackMessage(),
              this.renderInlineGraderAnnotations(),
              this.renderGlobalErrorScores(),
              this.renderMatchedErrorScoresChat(),
              (0, n.jsx)(r(), {
                id: "2b3bd2a18eb650f2",
                children:
                  ".grader-response.jsx-2b3bd2a18eb650f2{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:480px;overflow:auto;background:white;border-top:1px solid var(--color-RemoGray01);border-left:1px solid var(--color-RemoGray01);font-size:15px}.grader-response-header.jsx-2b3bd2a18eb650f2{height:52px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid var(--color-RemoGray01);font-weight:500}.grader-response-explanation.jsx-2b3bd2a18eb650f2{padding:0 16px;margin-bottom:8px;font-weight:400;font-style:italic}",
              }),
            ],
          });
        }
        get perfDisplay() {
          var e, s, t;
          const {
              passedAccuracyBar: i,
              passedSpeedBar: r,
              timeSpentSecs: a,
              accuracy: o,
              passedBar: d,
              throttleTimeMs: c,
              isSpotterEvaluation: p,
            } = this.props.submissionResponse,
            u =
              null === (e = this.props.trainingScenario) ||
              void 0 === e ||
              null === (s = e.params) ||
              void 0 === s ||
              null === (t = s.spotterBenchmarkParams) ||
              void 0 === t
                ? void 0
                : t.expectedOutcome,
            {
              isInstructiveBenchmark: m,
              isConditionallyInstructiveBenchmark: b,
              isConditionallyInstructiveBenchmarkPassed: x,
            } = this.props,
            g = i && r,
            f = `${(100 * Math.max(0, o)).toFixed(2)}%`,
            y = "#19B629",
            k = "#F2C94C",
            j = "#EC322F",
            v = c
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("span", {
                      children: (0, n.jsx)("b", {
                        children: (0, n.jsx)("u", { children: (0, h._W)(c) }),
                      }),
                    }),
                  ],
                })
              : "";
          let w, S;
          if (m)
            1 === o || (b && x)
              ? ((S = y),
                (w = p
                  ? (0, n.jsxs)("span", {
                      children: [
                        (0, n.jsxs)("strong", {
                          children: ["You correctly ", u, " this task!"],
                        }),
                        " Great work!",
                        " ",
                      ],
                    })
                  : (0, n.jsxs)("span", {
                      children: [
                        (0, n.jsxs)("strong", {
                          children: ["Your accuracy on this task was ", f, "!"],
                        }),
                        " Great work!",
                        " ",
                      ],
                    })))
              : d
              ? ((S = k),
                (w = (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsxs)("strong", {
                      children: ["Your accuracy on this task was ", f, "."],
                    }),
                    " Pretty good!",
                    " ",
                  ],
                })))
              : ((S = j),
                (w = (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsxs)("strong", {
                      children: ["Your accuracy on this task was ", f, "."],
                    }),
                    " ",
                  ],
                })));
          else if (g)
            (S = y),
              (w = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsx)("strong", { children: "Congratulations!" }),
                  " You successfully completed this challenge. Your response was ",
                  f,
                  " accurate.",
                ],
              }));
          else if (i) {
            const e = `${Math.floor(a / 60)}:${l().padStart(
              Math.floor(a % 60).toString(),
              2,
              "0"
            )}`;
            (S = k),
              (w = (0, n.jsxs)("span", {
                children: [
                  "Your response was accurate, but your time of ",
                  (0, n.jsx)("strong", { children: e }),
                  " wasn't quite fast enough.",
                  v,
                ],
              }));
          } else
            (S = j),
              (w = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsxs)("strong", {
                    children: ["Your response was ", f, " accurate."],
                  }),
                  " ",
                  "Take a look at the error summary to see why.",
                  v,
                ],
              }));
          return { message: w, color: S };
        }
        get ctaButtons() {
          const {
              passedAccuracyBar: e,
              passedSpeedBar: s,
              accuracy: t,
              submitted: i,
              throttleTimeMs: d,
            } = this.props.submissionResponse,
            {
              backToQueue: c,
              isInstructiveBenchmark: l,
              showFixAnswer: p,
              isConditionallyInstructiveBenchmark: u,
              isConditionallyInstructiveBenchmarkPassed: h,
              simpleFeedbackModalClosing: m,
            } = this.props,
            b = e && s,
            x = u && h;
          return (0, n.jsxs)("div", {
            className: "jsx-9966e1d7a541c6b cta-buttons",
            children: [
              m
                ? (0, n.jsx)(a.Fragment, {
                    children: (0, n.jsx)("div", {
                      onClick: this.props.makeChanges,
                      className: "jsx-9966e1d7a541c6b cta-button primary",
                      children: "Close",
                    }),
                  })
                : (0, n.jsx)(a.Fragment, {
                    children:
                      d && !u
                        ? (0, n.jsx)("div", {
                            className: "jsx-9966e1d7a541c6b cta-button primary",
                            children: (0, n.jsx)(o.ZP, {
                              href: "/onboarding-center",
                              children: (0, n.jsx)("span", {
                                style: { color: "white" },
                                className: "jsx-9966e1d7a541c6b",
                                children: "Back to Onboarding Center",
                              }),
                            }),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              l &&
                                (0, n.jsx)(a.Fragment, {
                                  children:
                                    1 === t || i || x
                                      ? (0, n.jsx)("div", {
                                          onClick: c,
                                          className:
                                            "jsx-9966e1d7a541c6b cta-button primary",
                                          children: "Back to Queue",
                                        })
                                      : (0, n.jsx)("div", {
                                          onClick: c,
                                          className:
                                            "jsx-9966e1d7a541c6b cta-button primary",
                                          children: "Fix Answer",
                                        }),
                                }),
                              !l &&
                                !b &&
                                (0, n.jsxs)(a.Fragment, {
                                  children: [
                                    s &&
                                      (0, n.jsxs)(a.Fragment, {
                                        children: [
                                          (0, n.jsx)("div", {
                                            onClick: () =>
                                              this.props.retryTraining(),
                                            className:
                                              "jsx-9966e1d7a541c6b cta-button secondary",
                                            children: "Clear & Restart",
                                          }),
                                          p &&
                                            (0, n.jsx)("div", {
                                              onClick: this.props.makeChanges,
                                              className:
                                                "jsx-9966e1d7a541c6b cta-button primary",
                                              children: "Fix Answer",
                                            }),
                                        ],
                                      }),
                                    !s &&
                                      (0, n.jsx)(a.Fragment, {
                                        children: (0, n.jsx)("div", {
                                          onClick: () =>
                                            this.props.retryTraining(),
                                          className:
                                            "jsx-9966e1d7a541c6b cta-button primary",
                                          children: "Retry",
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                  }),
              (0, n.jsx)(r(), {
                id: "9966e1d7a541c6b",
                children:
                  ".cta-buttons.jsx-9966e1d7a541c6b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.cta-button.jsx-9966e1d7a541c6b{-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:rgba(255,255,255,.2);cursor:pointer}.cta-button.jsx-9966e1d7a541c6b+.cta-button.jsx-9966e1d7a541c6b{margin-left:16px}.cta-button.primary.jsx-9966e1d7a541c6b{padding:4px 12px;font-weight:500;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.cta-button.primary.jsx-9966e1d7a541c6b:hover{background:rgba(255,255,255,.25)}.cta-button.secondary.jsx-9966e1d7a541c6b{padding:4px 0px;background:none;font-weight:normal}",
              }),
            ],
          });
        }
        renderMultiTaskResponse() {
          const e = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var t = null != arguments[s] ? arguments[s] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (s) {
                  g(e, s, t[s]);
                });
            }
            return e;
          })({}, this.props.trainingScenario, {
            attemptId:
              this.props.trainingAttempt || this.props.trainingScenario._id,
            instruction: this.props.trainingScenario.instructions,
          });
          return (0, n.jsx)(p.Z, {
            subtask: e,
            responses: [this.props.responses[0]],
          });
        }
        renderHeader() {
          return (0, n.jsxs)("div", {
            style: { background: this.perfDisplay.color },
            className: "jsx-73684222cea1b66 header",
            children: [
              (0, n.jsx)("div", {
                className: "jsx-73684222cea1b66",
                children: this.perfDisplay.message,
              }),
              this.props.isCorpUser && this.renderTrainingAttemptId(),
              (0, n.jsx)("div", {
                className: "jsx-73684222cea1b66",
                children: this.ctaButtons,
              }),
              (0, n.jsx)(r(), {
                id: "73684222cea1b66",
                children:
                  ".header.jsx-73684222cea1b66{height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:15px}",
              }),
            ],
          });
        }
        renderRedirect() {
          const e = new URLSearchParams(window.location.search);
          if (e.has("course_url")) {
            const s = decodeURIComponent(e.get("course_url"));
            return (0, n.jsx)(o.ZP, {
              href: s,
              children: "Continue Your Course",
            });
          }
          return (0, n.jsx)(o.ZP, {
            href: "/en/expert",
            children: "Return to Dashboard",
          });
        }
        renderBody() {
          return (0, n.jsxs)(a.Fragment, {
            children: [
              this.renderMultiTaskResponse(),
              this.renderGraderResponse(),
            ],
          });
        }
        render() {
          const e =
            this.props.submissionResponse.passedAccuracyBar &&
            this.props.submissionResponse.passedSpeedBar;
          return (0, n.jsxs)(d.u_, {
            isOpen: !0,
            margin: "32px 0",
            contentOverflow: "hidden",
            minWidth: "95vw",
            children: [
              (0, n.jsxs)("div", {
                className: "jsx-2462bf8c655d337c container",
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-2462bf8c655d337c feedback-header",
                    children: this.renderHeader(),
                  }),
                  e &&
                    !this.props.simpleFeedbackModalClosing &&
                    (0, n.jsx)("div", {
                      className: "jsx-2462bf8c655d337c redirect-header",
                      children: this.renderRedirect(),
                    }),
                  (0, n.jsx)("div", {
                    className: "jsx-2462bf8c655d337c feedback-body",
                    children: this.renderBody(),
                  }),
                ],
              }),
              (0, n.jsx)(r(), {
                id: "2462bf8c655d337c",
                children:
                  ".container.jsx-2462bf8c655d337c{height:-webkit-calc(100vh - 64px);height:-moz-calc(100vh - 64px);height:calc(100vh - 64px);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}.feedback-header.jsx-2462bf8c655d337c{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;width:95vw}.redirect-header.jsx-2462bf8c655d337c{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;padding:10px;margin:auto}.feedback-body.jsx-2462bf8c655d337c{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:95vw;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:scroll}",
              }),
            ],
          });
        }
      }
      (y.defaultProps = { showFixAnswer: !0 }), (s.Z = y);
    },
    13848: function (e, s, t) {
      var n = t(824246),
        i = t(679892),
        r = t.n(i),
        a = t(827378),
        o = t(881620),
        d = t(802638),
        c = t(298784),
        l = t.n(c),
        p = t(167469),
        u = t(194892),
        h = t(245203),
        m = t(64499);
      function b(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      class x extends a.Component {
        get graderResponse() {
          return this.props.submissionResponse.graderResponse;
        }
        renderTrainingAttemptId() {
          return (0, n.jsx)(
            "div",
            { children: `Training Attempt Id: ${this.props.trainingAttempt}` },
            "trainingAttemptId"
          );
        }
        get perfDisplay() {
          const {
              passedAccuracyBar: e,
              passedSpeedBar: s,
              timeSpentSecs: t,
              accuracy: i,
              passedBar: r,
              throttleTimeMs: a,
            } = this.props.submissionResponse,
            {
              isInstructiveBenchmark: o,
              allowedToSeeAnswerKey: d,
              isConditionallyInstructiveBenchmark: c,
              isConditionallyInstructiveBenchmarkPassed: u,
            } = this.props,
            { params: h, taskType: b } = this.props.trainingScenario,
            x = e && s,
            g = `${(100 * Math.max(0, i)).toFixed(2)}%`,
            f = "#008EFF",
            y = "#19B629",
            k = "#F2C94C",
            j = "#EC322F",
            v = a
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("span", {
                      children: (0, n.jsx)("b", {
                        children: (0, n.jsx)("u", { children: (0, m._W)(a) }),
                      }),
                    }),
                  ],
                })
              : "";
          let w, S;
          if (!1 === h.showGrade)
            (S = f),
              (w = (0, n.jsxs)("span", {
                children: [
                  "Review all of your errors to see how well you did. Ask a trainer or on Slack when you are not sure.",
                  v,
                ],
              }));
          else if (o) {
            const e = b === p.TaskType.SegmentAnnotation;
            1 === i || (e && i >= 0.5) || (c && u)
              ? ((S = y),
                (w = (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsxs)("strong", {
                      children: ["Your accuracy on this task was ", g, "!"],
                    }),
                    " Great work!",
                    " ",
                  ],
                })))
              : r
              ? ((S = k),
                (w = (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsxs)("strong", {
                      children: ["Your accuracy on this task was ", g, "."],
                    }),
                    " Pretty good!",
                    d &&
                      "Take a look at the Answer Key to identify issues to improve on.",
                  ],
                })))
              : ((S = j),
                (w = (0, n.jsxs)("span", {
                  children: [
                    (0, n.jsxs)("strong", {
                      children: ["Your accuracy on this task was ", g, "."],
                    }),
                    d &&
                      "Take a look at the Answer Key to identify issues to improve on.",
                  ],
                })));
          } else if (x)
            (S = y),
              (w = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsx)("strong", { children: "Congratulations!" }),
                  " You successfully completed this challenge.",
                ],
              }));
          else if (e) {
            const e = `${Math.floor(t / 60)}:${l().padStart(
              Math.floor(t % 60).toString(),
              2,
              "0"
            )}`;
            (S = k),
              (w = (0, n.jsxs)("span", {
                children: [
                  "Your response was accurate, but your time of ",
                  (0, n.jsx)("strong", { children: e }),
                  " wasn't quite fast enough.",
                  v,
                ],
              }));
          } else
            (S = j),
              (w = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsxs)("strong", {
                    children: ["Your response was ", g, " accurate."],
                  }),
                  " ",
                  d && "Take a look at the Answer Key to identify issues.",
                  v,
                ],
              }));
          return { message: w, color: S };
        }
        get ctaButtons() {
          const {
              passedAccuracyBar: e,
              passedSpeedBar: s,
              accuracy: t,
              submitted: i,
              throttleTimeMs: d,
            } = this.props.submissionResponse,
            {
              backToQueue: c,
              isInstructiveBenchmark: l,
              isConditionallyInstructiveBenchmark: p,
              isConditionallyInstructiveBenchmarkPassed: u,
              simpleFeedbackModalClosing: h,
            } = this.props,
            m = e && s,
            b = p && u;
          return (0, n.jsxs)("div", {
            className: "jsx-9966e1d7a541c6b cta-buttons",
            children: [
              h
                ? (0, n.jsx)(a.Fragment, {
                    children: (0, n.jsx)("div", {
                      onClick: this.props.makeChanges,
                      className: "jsx-9966e1d7a541c6b cta-button primary",
                      children: "Close",
                    }),
                  })
                : (0, n.jsx)(a.Fragment, {
                    children:
                      d && !p
                        ? (0, n.jsx)("div", {
                            className: "jsx-9966e1d7a541c6b cta-button primary",
                            children: (0, n.jsx)(o.ZP, {
                              href: "/onboarding-center",
                              children: (0, n.jsx)("span", {
                                style: { color: "white" },
                                className: "jsx-9966e1d7a541c6b",
                                children: "Back to Onboarding Center",
                              }),
                            }),
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              l &&
                                (0, n.jsx)(a.Fragment, {
                                  children:
                                    1 === t || i || b
                                      ? (0, n.jsx)("div", {
                                          onClick: c,
                                          className:
                                            "jsx-9966e1d7a541c6b cta-button primary",
                                          children: "Back to Queue",
                                        })
                                      : (0, n.jsx)("div", {
                                          onClick: c,
                                          className:
                                            "jsx-9966e1d7a541c6b cta-button primary",
                                          children: "Fix Answer",
                                        }),
                                }),
                              !l &&
                                !m &&
                                (0, n.jsxs)(a.Fragment, {
                                  children: [
                                    s &&
                                      (0, n.jsxs)(a.Fragment, {
                                        children: [
                                          (0, n.jsx)("div", {
                                            onClick: () =>
                                              this.props.retryTraining(),
                                            className:
                                              "jsx-9966e1d7a541c6b cta-button secondary",
                                            children: "Clear & Restart",
                                          }),
                                          (0, n.jsx)("div", {
                                            onClick: this.props.makeChanges,
                                            className:
                                              "jsx-9966e1d7a541c6b cta-button primary",
                                            children: "Fix Answer",
                                          }),
                                        ],
                                      }),
                                    !s &&
                                      (0, n.jsx)(a.Fragment, {
                                        children: (0, n.jsx)("div", {
                                          onClick: this.props.retryTraining,
                                          className:
                                            "jsx-9966e1d7a541c6b cta-button primary",
                                          children: "Retry",
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          }),
                  }),
              (0, n.jsx)(r(), {
                id: "9966e1d7a541c6b",
                children:
                  ".cta-buttons.jsx-9966e1d7a541c6b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.cta-button.jsx-9966e1d7a541c6b{-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:rgba(255,255,255,.2);cursor:pointer}.cta-button.jsx-9966e1d7a541c6b+.cta-button.jsx-9966e1d7a541c6b{margin-left:16px}.cta-button.primary.jsx-9966e1d7a541c6b{padding:4px 12px;font-weight:500;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.cta-button.primary.jsx-9966e1d7a541c6b:hover{background:rgba(255,255,255,.25)}.cta-button.secondary.jsx-9966e1d7a541c6b{padding:4px 0px;background:none;font-weight:normal}",
              }),
            ],
          });
        }
        renderMultiTaskResponse() {
          const e = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var t = null != arguments[s] ? arguments[s] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (s) {
                  b(e, s, t[s]);
                });
            }
            return e;
          })({}, this.props.trainingScenario, {
            instruction: this.props.trainingScenario.instructions,
          });
          if (!this.props.allowedToSeeAnswerKey)
            return (0, n.jsx)(h.Z, {
              subtask: e,
              responses: [this.props.responses[0]],
            });
          const s = [...this.props.responses];
          return (
            this.props.diffingResponse && s.push(...this.props.diffingResponse),
            (0, n.jsx)(u.Z, {
              subtask: e,
              responses: s,
              diffingResponse: this.props.diffingResponse,
              diffingResponseName: "Problem Zones",
            })
          );
        }
        renderHeader() {
          return (0, n.jsxs)("div", {
            style: { background: this.perfDisplay.color },
            className: "jsx-73684222cea1b66 header",
            children: [
              (0, n.jsx)("div", {
                className: "jsx-73684222cea1b66",
                children: this.perfDisplay.message,
              }),
              this.props.isCorpUser && this.renderTrainingAttemptId(),
              (0, n.jsx)("div", {
                className: "jsx-73684222cea1b66",
                children: this.ctaButtons,
              }),
              (0, n.jsx)(r(), {
                id: "73684222cea1b66",
                children:
                  ".header.jsx-73684222cea1b66{height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:15px}",
              }),
            ],
          });
        }
        renderRedirect() {
          const e = new URLSearchParams(window.location.search);
          if (e.has("course_url")) {
            const s = decodeURIComponent(e.get("course_url"));
            return (0, n.jsx)(o.ZP, {
              href: s,
              children: "Continue Your Course",
            });
          }
          return (0, n.jsx)(o.ZP, {
            href: "/onboarding-center",
            children: "Return to Onboarding Center",
          });
        }
        renderBody() {
          const { passedAccuracyBar: e, passedSpeedBar: s } =
            this.props.submissionResponse;
          return e && s
            ? (0, n.jsxs)("div", {
                className: "jsx-71cfad0d76e6360f completion-message",
                children: [
                  !this.props.simpleFeedbackModalClosing &&
                    this.renderRedirect(),
                  (0, n.jsx)(r(), {
                    id: "71cfad0d76e6360f",
                    children:
                      ".completion-message.jsx-71cfad0d76e6360f{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:64px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:rgba(0,0,0,.5)}",
                  }),
                ],
              })
            : this.renderMultiTaskResponse();
        }
        render() {
          return (0, n.jsxs)(d.u_, {
            isOpen: !0,
            margin: "32px 0",
            contentOverflow: "hidden",
            maxWidth: "100vw",
            children: [
              (0, n.jsxs)("div", {
                className: "jsx-e79ce5b65509592 container",
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-e79ce5b65509592 feedback-header",
                    children: this.renderHeader(),
                  }),
                  (0, n.jsx)("div", {
                    className: "jsx-e79ce5b65509592 feedback-body",
                    children: this.renderBody(),
                  }),
                ],
              }),
              (0, n.jsx)(r(), {
                id: "e79ce5b65509592",
                children:
                  ".container.jsx-e79ce5b65509592{height:-webkit-calc(100vh - 64px);height:-moz-calc(100vh - 64px);height:calc(100vh - 64px);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.feedback-header.jsx-e79ce5b65509592{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.feedback-body.jsx-e79ce5b65509592{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden}",
              }),
            ],
          });
        }
      }
      s.Z = x;
    },
    583951: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return C;
        },
      });
      var n = t(824246),
        i = t(679892),
        r = t.n(i),
        a = t(827378),
        o = t(881620),
        d = t(802638),
        c = t(298784),
        l = t.n(c),
        p = t(194892),
        u = t(245203),
        h = t(68649),
        m = t(808704),
        b = t(885748),
        x = t(626407),
        g = t.n(x);
      const f = [
          m.GraderBuckets.Missing,
          m.GraderBuckets.Extraneous,
          m.GraderBuckets.Incorrect,
        ],
        y = (e) => e && e.frames && e.frames[0].text,
        k = (e, s) => {
          const t = s && s.props && s.props.label;
          for (const n of (0, b.depthFirstLabels)(e))
            if (n.name === t) return n;
        },
        j = (e) => {
          var s, t;
          const { submissionResponse: i, trainingScenario: r } = e,
            o = w(),
            d =
              null ===
                (s = null === i || void 0 === i ? void 0 : i.graderResponse) ||
              void 0 === s
                ? void 0
                : s.matchedAnnotationsList,
            c =
              null === r ||
              void 0 === r ||
              null === (t = r.graderParams) ||
              void 0 === t
                ? void 0
                : t.perAnnotationFeedback,
            p = a.useMemo(() => {
              var e;
              return null !==
                (e = (0, m.getBucketedGradedAnnotations)(
                  null !== d && void 0 !== d ? d : [],
                  null !== c && void 0 !== c ? c : {}
                )) && void 0 !== e
                ? e
                : {};
            }, [d, c]);
          return (0, n.jsxs)("div", {
            className: o.graderResponse,
            children: [
              (0, n.jsx)("div", {
                className: o.graderResponseHeader,
                children: "Error Summary",
              }),
              f.map((e) => {
                const s = p[e];
                if (!(null === s || void 0 === s ? void 0 : s.length))
                  return null;
                const t = l().groupBy(s, (e) => e.metadata.props.type),
                  i = l().size(t.relationship);
                return (0, n.jsxs)(
                  "div",
                  {
                    className: o.bucket,
                    children: [
                      (0, n.jsxs)("div", {
                        className: o.bucketHeader,
                        children: [
                          (0, n.jsx)("div", {
                            className: o.bucketName,
                            children: e,
                          }),
                          (0, n.jsx)("div", {
                            className: o.bucketCount,
                            children: s.length,
                          }),
                        ],
                      }),
                      l().map(t.annotation, (s) =>
                        (0, n.jsx)(
                          v,
                          {
                            labels: r.params.labels,
                            bucketName: e,
                            gradedAnnotation: s,
                          },
                          s.metadata.props.id
                        )
                      ),
                      i > 0 &&
                        (0, n.jsxs)("div", {
                          children: [
                            "+ errors from ",
                            i,
                            " ",
                            g()("relationship", i),
                          ],
                        }),
                    ],
                  },
                  e
                );
              }),
            ],
          });
        };
      j.displayName = "TrainingFeedbackSummary";
      const v = (e) => {
        const { labels: s, bucketName: t, gradedAnnotation: i } = e,
          r = w(),
          a = (e, s) => {
            var t;
            return (0, n.jsx)("span", {
              children: `"${e}" (${
                null !==
                  (t = null === s || void 0 === s ? void 0 : s.display_name) &&
                void 0 !== t
                  ? t
                  : null === s || void 0 === s
                  ? void 0
                  : s.name
              })`,
            });
          },
          o = t !== m.GraderBuckets.Missing,
          d = t !== m.GraderBuckets.Extraneous,
          c = y(i.currentAnnotation) || y(i.correctAnnotation),
          p = y(i.correctAnnotation) || y(i.currentAnnotation),
          u = k(s, i.currentAnnotation),
          h = k(s, i.correctAnnotation);
        return (0, n.jsxs)("div", {
          className: r.bucketItem,
          children: [
            (0, n.jsxs)("div", {
              className: r.bucketItemName,
              children: [
                o && a(c, u),
                o &&
                  d &&
                  (0, n.jsx)("span", {
                    className: r.elevatedText,
                    children: "\xa0 \u2192 \xa0",
                  }),
                d && a(p, h),
              ],
            }),
            (0, n.jsx)("div", {
              className: r.bucketItemErrors,
              children: l().map(i.errors, (e) =>
                (0, n.jsx)("div", { className: r.errorMessage, children: e })
              ),
            }),
          ],
        });
      };
      v.displayName = "TrainingFeedbackAnnotationRow";
      const w = (0, h.ZL)({
        graderResponse: {
          overflowX: "hidden",
          overflowY: "auto",
          flexShrink: 0,
          width: 360,
          overflow: "auto",
          background: "white",
          borderTop: "1px solid var(--color-RemoGray01)",
          borderLeft: "1px solid var(--color-RemoGray01)",
          fontSize: "15px",
        },
        graderResponseHeader: {
          height: 52,
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid var(--color-RemoGray01)",
          fontWeight: 400,
        },
        elevatedText: { display: "inline-block", marginBottom: 9 },
        bucket: {
          padding: 16,
          fontSize: "14px",
          borderTop: "1px solid #e6e6e6",
        },
        bucketHeader: {
          display: "flex",
          flexDirection: "row",
          marginBottom: 13,
        },
        bucketName: {
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          fontWeight: 400,
          opacity: 1,
        },
        bucketCount: { fontWeight: 400, opacity: 0.5, marginLeft: "auto" },
        bucketItem: { margin: "16px 0" },
        bucketItemName: { marginBottom: 8, fontWeight: 400 },
        bucketItemErrors: { marginLeft: 16 },
        errorMessage: {
          color: "rgba(0, 0, 0, 0.5)",
          paddingTop: 4,
          paddingBottom: 4,
        },
      });
      var S = j;
      function T(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      var C = (e) => {
        const {
            passedAccuracyBar: s,
            passedSpeedBar: t,
            timeSpentSecs: i,
            accuracy: c,
            passedBar: h,
            submitted: m,
            earnedReward: b,
          } = e.submissionResponse,
          {
            isInstructiveBenchmark: x,
            allowedToSeeAnswerKey: g,
            isConditionallyInstructiveBenchmark: f,
            isConditionallyInstructiveBenchmarkPassed: y,
            simpleFeedbackModalClosing: k,
          } = e,
          { params: j } = e.trainingScenario,
          v = s && t,
          w = `${(100 * Math.max(0, c)).toFixed(2)}%`,
          C = "#008EFF",
          R = "#19B629",
          A = "#F2C94C",
          P = "#EC322F";
        let F, N;
        if (!1 === j.showGrade)
          (N = C),
            (F = (0, n.jsx)("span", {
              children:
                "Review all of your errors to see how well you did. Ask a trainer or on Slack when you are not sure.",
            }));
        else if (x)
          1 === c || (f && y)
            ? ((N = R),
              (F = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsxs)("strong", {
                    children: ["Your accuracy on this task was ", w, "!"],
                  }),
                  " Great work!",
                  " ",
                ],
              })))
            : h
            ? ((N = A),
              (F = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsxs)("strong", {
                    children: ["Your accuracy on this task was ", w, "."],
                  }),
                  " Pretty good!",
                  g &&
                    "Take a look at the Answer Key to identify issues to improve on.",
                ],
              })))
            : ((N = P),
              (F = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsxs)("strong", {
                    children: ["Your accuracy on this task was ", w, "."],
                  }),
                  g &&
                    "Take a look at the Answer Key to identify issues to improve on.",
                ],
              })));
        else if (v)
          (N = R),
            (F = (0, n.jsxs)("span", {
              children: [
                (0, n.jsx)("strong", { children: "Congratulations!" }),
                " You successfully completed this challenge.",
              ],
            }));
        else if (s) {
          const e = Math.floor(i / 60),
            s = Math.floor(i % 60),
            t = `${e}:${l().padStart(s.toString(), 2, "0")}`;
          (N = A),
            (F = (0, n.jsxs)("span", {
              children: [
                "Your response was accurate, but your time of ",
                (0, n.jsx)("strong", { children: t }),
                " wasn't quite fast enough.",
              ],
            }));
        } else
          (N = P),
            (F = (0, n.jsxs)("span", {
              children: [
                (0, n.jsxs)("strong", {
                  children: ["Your response was ", w, " accurate."],
                }),
                " ",
                g && "Take a look at the Answer Key to identify issues.",
              ],
            }));
        const I = { message: F, color: N },
          { backToQueue: B } = e,
          O = f && y,
          _ = (0, n.jsxs)("div", {
            className: "jsx-25691d5b6853096b cta-buttons",
            children: [
              k
                ? (0, n.jsx)(a.Fragment, {
                    children: (0, n.jsx)("div", {
                      onClick: e.makeChanges,
                      className: "jsx-25691d5b6853096b cta-button primary",
                      children: "Close",
                    }),
                  })
                : (0, n.jsxs)(a.Fragment, {
                    children: [
                      x &&
                        (0, n.jsx)(a.Fragment, {
                          children:
                            1 === c || m || O
                              ? (0, n.jsx)("div", {
                                  onClick: B,
                                  className:
                                    "jsx-25691d5b6853096b cta-button primary",
                                  children: "Back to Queue",
                                })
                              : (0, n.jsx)("div", {
                                  onClick: B,
                                  className:
                                    "jsx-25691d5b6853096b cta-button primary",
                                  children: "Fix Answer",
                                }),
                        }),
                      !x &&
                        !v &&
                        (0, n.jsxs)(a.Fragment, {
                          children: [
                            t &&
                              (0, n.jsxs)(a.Fragment, {
                                children: [
                                  (0, n.jsx)("div", {
                                    onClick: e.retryTraining,
                                    className:
                                      "jsx-25691d5b6853096b cta-button secondary",
                                    children: "Clear & Restart",
                                  }),
                                  (0, n.jsx)("div", {
                                    onClick: e.makeChanges,
                                    className:
                                      "jsx-25691d5b6853096b cta-button primary",
                                    children: "Fix Answer",
                                  }),
                                ],
                              }),
                            !t &&
                              (0, n.jsx)(a.Fragment, {
                                children: (0, n.jsx)("div", {
                                  onClick: e.retryTraining,
                                  className:
                                    "jsx-25691d5b6853096b cta-button primary",
                                  children: "Retry",
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
              (0, n.jsx)(r(), {
                id: "25691d5b6853096b",
                children:
                  ".cta-buttons.jsx-25691d5b6853096b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.cta-button.jsx-25691d5b6853096b{-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:rgba(255,255,255,.2);cursor:pointer}.cta-button.jsx-25691d5b6853096b+.cta-button.jsx-25691d5b6853096b{margin-left:16px}.cta-button.primary.jsx-25691d5b6853096b{padding:4px 12px;font-weight:400;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.cta-button.primary.jsx-25691d5b6853096b:hover{background:rgba(255,255,255,.25)}.cta-button.secondary.jsx-25691d5b6853096b{padding:4px 0px;background:none;font-weight:normal}",
              }),
            ],
          });
        let z;
        const M = new URLSearchParams(window.location.search);
        if (!k)
          if (M.has("course_url")) {
            const e = decodeURIComponent(M.get("course_url"));
            z = (0, n.jsx)(o.ZP, { href: e, children: "Continue Your Course" });
          } else
            z = (0, n.jsx)(o.ZP, {
              href: "/onboarding-center",
              children: "Return to Onboarding Center",
            });
        const { rewardAmountHundredthsOfCents: Z } = e.trainingScenario,
          E = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var t = null != arguments[s] ? arguments[s] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (s) {
                  T(e, s, t[s]);
                });
            }
            return e;
          })({}, e.trainingScenario, {
            instruction: e.trainingScenario.instructions,
          }),
          L = !(Z > 0);
        let $;
        return (
          v &&
            !x &&
            ($ =
              b || L
                ? L
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        "Complete more Training Courses to become enabled on more challenging, higher-paying tasks.\xa0\xa0",
                        z,
                      ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        "You earned $",
                        Z / 1e4,
                        " for your great work. If you use these skills on tasks, you can do them faster and earn more!\xa0\xa0",
                        z,
                      ],
                    })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      "You've already claimed the reward for this challenge.\xa0\xa0",
                      z,
                    ],
                  })),
          (0, n.jsxs)(d.u_, {
            isOpen: !0,
            margin: "32px 0",
            contentOverflow: "hidden",
            maxWidth: "100vw",
            children: [
              (0, n.jsxs)("div", {
                className: "jsx-d6867e5b1ab5e00 container",
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-d6867e5b1ab5e00 feedback-header",
                    children: (0, n.jsxs)("div", {
                      style: { background: I.color },
                      className: "jsx-d6867e5b1ab5e00 header",
                      children: [
                        (0, n.jsx)("div", {
                          className: "jsx-d6867e5b1ab5e00",
                          children: I.message,
                        }),
                        e.isCorpUser &&
                          (0, n.jsx)(
                            "div",
                            {
                              className: "jsx-d6867e5b1ab5e00",
                              children: `Training Attempt Id: ${e.trainingAttempt}`,
                            },
                            "trainingAttemptId"
                          ),
                        (0, n.jsx)("div", {
                          className: "jsx-d6867e5b1ab5e00",
                          children: _,
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "jsx-d6867e5b1ab5e00 feedback-body",
                    children:
                      v && !x
                        ? (0, n.jsx)("div", {
                            className: "jsx-d6867e5b1ab5e00 completion-message",
                            children: $,
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              g &&
                                (0, n.jsx)(S, {
                                  trainingScenario: e.trainingScenario,
                                  submissionResponse: e.submissionResponse,
                                }),
                              e.allowedToSeeAnswerKey
                                ? (0, n.jsx)(p.Z, {
                                    subtask: E,
                                    responses: e.responses,
                                    diffingResponse: e.diffingResponse,
                                    diffingResponseName: "Problem Zones",
                                    hideLabels: !0,
                                  })
                                : (0, n.jsx)(u.Z, {
                                    subtask: E,
                                    responses: [e.responses[0]],
                                  }),
                            ],
                          }),
                  }),
                ],
              }),
              (0, n.jsx)(r(), {
                id: "d6867e5b1ab5e00",
                children:
                  ".completion-message.jsx-d6867e5b1ab5e00{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:64px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:rgba(0,0,0,.5)}.header.jsx-d6867e5b1ab5e00{height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:15px}.container.jsx-d6867e5b1ab5e00{height:-webkit-calc(100vh - 64px);height:-moz-calc(100vh - 64px);height:calc(100vh - 64px);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.feedback-header.jsx-d6867e5b1ab5e00{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.feedback-body.jsx-d6867e5b1ab5e00{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden}",
              }),
            ],
          })
        );
      };
    },
    821095: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return Z;
        },
      });
      var n = t(824246),
        i = t(679892),
        r = t.n(i),
        a = t(827378),
        o = t(881620),
        d = t(802638),
        c = t(298784),
        l = t.n(c),
        p = t(321382),
        u = t(220453),
        h = t(692975),
        m = t(431350),
        b = t(629586),
        x = t(68649),
        g = t(857428);
      const f = {
          [g.S.Video]:
            "Watch the following short video to understand the correct answer:",
          [g.S.Markdown]:
            "Read the following explanation to understand the correct answer:",
        },
        y = ({ content: e, onViewedContent: s }) => {
          const t = j();
          return (0, n.jsx)("div", {
            className: t.videoContainer,
            children: (0, n.jsx)(h.Z, {
              controls: !0,
              height: "100%",
              url: e.videoUrl,
              onEnded: s,
            }),
          });
        },
        k = ({ content: e, onViewedContent: s }) => (
          a.useEffect(() => {
            setTimeout(() => {
              s();
            }, 3e3);
          }, [s]),
          (0, n.jsx)("div", {
            dangerouslySetInnerHTML: { __html: u.ZP.render(e.markdownText) },
          })
        ),
        j = (0, x.ZL)({
          container: { background: "white", padding: 36, minHeight: "80vh" },
          header: { marginTop: 0 },
          contentContainer: { marginTop: 16, display: "flex", height: "70vh" },
          videoContainer: {
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
          },
          continueButtonContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 16,
          },
        });
      var v = ({ instructionReminder: e, onClose: s }) => {
          const [t, i] = a.useState(!1),
            r = j();
          var o;
          const d =
            null !== (o = e.description) && void 0 !== o
              ? o
              : f[e.content.type];
          return (0, n.jsxs)("div", {
            className: r.container,
            children: [
              (0, n.jsx)(b.H1, { children: d }),
              (0, n.jsxs)("div", {
                className: r.contentContainer,
                children: [
                  e.content.type === g.S.Video &&
                    (0, n.jsx)(y, {
                      content: e.content,
                      onViewedContent: () => i(!0),
                    }),
                  e.content.type === g.S.Markdown &&
                    (0, n.jsx)(k, {
                      content: e.content,
                      onViewedContent: () => i(!0),
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className: r.continueButtonContainer,
                children: (0, n.jsx)(m.zx, {
                  onClick: s,
                  disabled: !t,
                  type: "primary",
                  children: "View Feedback",
                }),
              }),
            ],
          });
        },
        w = t(775222),
        S = t(604375),
        T = t(746332),
        C = t(60042),
        R = t.n(C),
        A = t(599789),
        P = t(554211),
        F = t(50682),
        N = t.n(F);
      const I = (0, t(66443).Z)("benchmarkreporting");
      var B = t(807556),
        O = t(285556);
      function _(e, s, t, n, i, r, a) {
        try {
          var o = e[r](a),
            d = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? s(d) : Promise.resolve(d).then(n, i);
      }
      function z(e) {
        return function () {
          var s = this,
            t = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(s, t);
            function a(e) {
              _(r, n, i, a, o, "next", e);
            }
            function o(e) {
              _(r, n, i, a, o, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function M(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      var Z = (e) => {
        var s;
        const {
            passedAccuracyBar: t,
            passedSpeedBar: i,
            timeSpentSecs: c,
            accuracy: u,
            passedBar: h,
            submitted: m,
            earnedReward: b,
            graderResponse: x,
            instructionReminder: g,
          } = e.submissionResponse,
          f = (0, P.ZP)("show-bm-rewards", { projectId: e.project }, !1),
          [y, k] = a.useState(!1),
          j = (0, P.ZP)(
            "disable-bm-reporting",
            { projectId: e.trainingScenario.project },
            !1
          ),
          C = a.useCallback(
            z(function* () {
              if (j) return void k(!1);
              if (e.isCorpUser) return void k(!0);
              const { success: s, allowReporting: t } = yield (0, O.ZP)(
                null,
                `corp-api/qm/benchmark/allow-reporting/${e.trainingScenario.project}/${e.loggedUserId}`,
                { method: "GET" }
              );
              s && t && k(!0);
            }),
            [j, e.loggedUserId, e.trainingScenario.project, e.isCorpUser]
          );
        a.useEffect(() => {
          C();
        }, [C]);
        const {
            isInstructiveBenchmark: F,
            allowedToSeeAnswerKey: _,
            isConditionallyInstructiveBenchmark: Z,
            isConditionallyInstructiveBenchmarkPassed: E,
            simpleFeedbackModalClosing: L,
          } = e,
          {
            params: $,
            trainingType: D,
            rewardAmountHundredthsOfCents: G,
          } = e.trainingScenario,
          U = D === A.TrainingScenarioType.AccuracyBenchmark,
          V = t && i,
          Y = `${(100 * Math.max(0, u)).toFixed(2)}%`,
          H = "#008EFF",
          K = "#19B629",
          W = "#F2C94C",
          q = "#EC322F";
        let Q, X;
        if (!1 === $.showGrade || U)
          (X = H),
            (Q = (0, n.jsx)("span", {
              children: "Your submission will be reviewed.",
            }));
        else if (F)
          h || (Z && E)
            ? ((X = K),
              (Q = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsxs)("strong", {
                    children: ["Your accuracy on this task was ", Y, "!"],
                  }),
                  " Great work!",
                  " ",
                  f && `This task earned you $${G / 1e4}.`,
                ],
              })))
            : ((X = q),
              (Q = (0, n.jsxs)("span", {
                children: [
                  (0, n.jsxs)("strong", {
                    children: ["Your accuracy on this task was ", Y, "."],
                  }),
                  _ &&
                    "Take a look at the Answer Key to identify issues to improve on.",
                ],
              })));
        else if (V)
          (X = K),
            (Q = (0, n.jsxs)("span", {
              children: [
                (0, n.jsx)("strong", { children: "Congratulations!" }),
                " You successfully completed this challenge.",
              ],
            }));
        else if (t) {
          const e = Math.floor(c / 60),
            s = Math.floor(c % 60),
            t = `${e}:${l().padStart(s.toString(), 2, "0")}`;
          (X = W),
            (Q = (0, n.jsxs)("span", {
              children: [
                "Your response was accurate, but your time of ",
                (0, n.jsx)("strong", { children: t }),
                " wasn't quite fast enough.",
              ],
            }));
        } else
          (X = q),
            (Q = (0, n.jsxs)("span", {
              children: [
                (0, n.jsxs)("strong", {
                  children: ["Your response was ", Y, " accurate."],
                }),
                " ",
                _ && "Take a look at the Answer Key to identify issues.",
              ],
            }));
        const J = { message: Q, color: X },
          { backToQueue: ee } = e,
          se = Z && E,
          [te, ne] = a.useState(!0),
          ie = (function () {
            var s = z(function* (s, t) {
              ne(!1);
              const n = {
                reports: [
                  {
                    worker: e.loggedUserId,
                    trainingAttempt:
                      e.trainingAttempt || e.submissionResponse._id || "",
                    reason: s,
                    explanation: t,
                    reportedAt: new Date(),
                  },
                ],
              };
              yield (0, O.ZP)(
                null,
                `corp-api/qm/benchmark/${e.trainingScenario.id}`,
                { method: "PUT", body: n }
              ),
                e.trainingScenario &&
                  ((e, s, t, n) => {
                    I.incr("reportTask", 1, {
                      projectId: e || "undefined_project_id",
                      taskId: s || "undefined_task_id",
                      userId: t || "undefined_user_id",
                      explanation: n || "undefined_explanation",
                    });
                  })(
                    e.trainingScenario.project,
                    e.trainingScenario.id,
                    e.loggedUserId,
                    t
                  );
            });
            return function (e, t) {
              return s.apply(this, arguments);
            };
          })(),
          re =
            te &&
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("div", {
                  "data-tip":
                    "Report if you disagree with the answer key. You must still Fix Answer and resubmit to pass.",
                  children: (0, n.jsx)(B.Z, {
                    disabled: !1,
                    handleReport: ie,
                    style: {
                      marginRight: 12,
                      backgroundColor: "var(--color-RemoGold)",
                      color: "white",
                    },
                    buttonText: "Report",
                    reportBodyText:
                      "Please let us know what's wrong with this task so we can make tasking better for you.",
                    reportHeaderText: "Report this task",
                    explanationPlaceholder:
                      "I disagree with the answer key because...",
                    closeModalOnReport: !0,
                    isBenchmarkReporting: !0,
                  }),
                }),
                (0, n.jsx)(N(), { place: "left" }),
              ],
            }),
          ae = (0, n.jsxs)("div", {
            className: "jsx-25691d5b6853096b cta-buttons",
            children: [
              L
                ? (0, n.jsx)(a.Fragment, {
                    children: (0, n.jsx)("div", {
                      onClick: e.makeChanges,
                      className: "jsx-25691d5b6853096b cta-button primary",
                      children: "Close",
                    }),
                  })
                : (0, n.jsxs)(a.Fragment, {
                    children: [
                      F &&
                        (0, n.jsx)(a.Fragment, {
                          children:
                            h || m || se
                              ? (0, n.jsx)("div", {
                                  onClick: ee,
                                  className:
                                    "jsx-25691d5b6853096b cta-button primary",
                                  children: "Back to Queue",
                                })
                              : (0, n.jsxs)(a.Fragment, {
                                  children: [
                                    y && re,
                                    (0, n.jsx)("div", {
                                      onClick: ee,
                                      className:
                                        "jsx-25691d5b6853096b cta-button primary",
                                      children: "Fix Answer",
                                    }),
                                  ],
                                }),
                        }),
                      !F &&
                        !V &&
                        !U &&
                        (0, n.jsxs)(a.Fragment, {
                          children: [
                            i &&
                              (0, n.jsxs)(a.Fragment, {
                                children: [
                                  y && re,
                                  (0, n.jsx)("div", {
                                    onClick: e.retryTraining,
                                    className:
                                      "jsx-25691d5b6853096b cta-button secondary",
                                    children: "Clear & Restart",
                                  }),
                                  (0, n.jsx)("div", {
                                    onClick: e.makeChanges,
                                    className:
                                      "jsx-25691d5b6853096b cta-button primary",
                                    children: "Fix Answer",
                                  }),
                                ],
                              }),
                            !i &&
                              (0, n.jsx)(a.Fragment, {
                                children: (0, n.jsx)("div", {
                                  onClick: e.retryTraining,
                                  className:
                                    "jsx-25691d5b6853096b cta-button primary",
                                  children: "Retry",
                                }),
                              }),
                          ],
                        }),
                    ],
                  }),
              (0, n.jsx)(r(), {
                id: "25691d5b6853096b",
                children:
                  ".cta-buttons.jsx-25691d5b6853096b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.cta-button.jsx-25691d5b6853096b{-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:rgba(255,255,255,.2);cursor:pointer}.cta-button.jsx-25691d5b6853096b+.cta-button.jsx-25691d5b6853096b{margin-left:16px}.cta-button.primary.jsx-25691d5b6853096b{padding:4px 12px;font-weight:400;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.cta-button.primary.jsx-25691d5b6853096b:hover{background:rgba(255,255,255,.25)}.cta-button.secondary.jsx-25691d5b6853096b{padding:4px 0px;background:none;font-weight:normal}",
              }),
            ],
          });
        let oe;
        const de = new URLSearchParams(window.location.search);
        L ||
          (oe = de.has("course_url")
            ? (0, n.jsx)("a", {
                style: { whiteSpace: "pre-wrap", wordWrap: "break-word" },
                onClick: () => window.close(),
                children: "Continue Your Course (Closes this tab)",
              })
            : (0, n.jsx)(o.ZP, {
                href: "/onboarding-center",
                children: "Return to Onboarding Center",
              }));
        const ce = (function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var t = null != arguments[s] ? arguments[s] : {},
                n = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  })
                )),
                n.forEach(function (s) {
                  M(e, s, t[s]);
                });
            }
            return e;
          })({}, e.trainingScenario, {
            instruction: e.trainingScenario.instructions,
          }),
          le = !(G > 0);
        let pe;
        V &&
          !F &&
          (pe =
            b || le
              ? le
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "Complete more Training Courses to become enabled on more challenging, higher-paying tasks.\xa0\xa0",
                      oe,
                    ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      "You earned $",
                      G / 1e4,
                      " for your great work. If you use these skills on tasks, you can do them faster and earn more!\xa0\xa0",
                      oe,
                    ],
                  })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    "You've already claimed the reward for this challenge.\xa0\xa0",
                    oe,
                  ],
                }));
        const ue = x.graderDiffResponse,
          [he, me] = a.useState(!!g);
        a.useEffect(() => {
          g &&
            (he
              ? w.c.track("Instruction Reminder Shown", {
                  instructionReminderId: g._id,
                  trainingAttempt: e.trainingAttempt,
                })
              : w.c.track("Instruction Reminder Completed", {
                  instructionReminderId: g._id,
                  trainingAttempt: e.trainingAttempt,
                }));
        }, [g, e.trainingAttempt, he]);
        const be = (0, S.ZL)({
          header: {
            height: "56px",
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            fontSize: "15px",
            [`@media (max-width: ${T.MOBILE_THRESHOLD})`]: {
              height: "auto",
              padding: "16px",
              flexDirection: "column",
            },
          },
          headerSectionResponsive: {
            [`@media (max-width: ${T.MOBILE_THRESHOLD})`]: {
              marginBottom: "8px",
            },
          },
        })();
        return (0, n.jsxs)(d.u_, {
          isOpen: !0,
          margin: "32px 0",
          contentOverflow: "hidden",
          maxWidth: "100vw",
          children: [
            !!g &&
              he &&
              (0, n.jsx)(v, { instructionReminder: g, onClose: () => me(!1) }),
            !he &&
              (0, n.jsxs)("div", {
                className: "jsx-795bdccce560f4b6 container",
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-795bdccce560f4b6 feedback-header",
                    children: (0, n.jsxs)("div", {
                      style: { background: J.color },
                      className:
                        "jsx-795bdccce560f4b6 " + (R()(be.header) || ""),
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "jsx-795bdccce560f4b6 " +
                            (R()(be.headerSectionResponsive) || ""),
                          children: J.message,
                        }),
                        e.isCorpUser &&
                          (0, n.jsx)(
                            "div",
                            {
                              className:
                                "jsx-795bdccce560f4b6 " +
                                (R()(be.headerSectionResponsive) || ""),
                              children: `Training Attempt Id: ${e.trainingAttempt}`,
                            },
                            "trainingAttemptId"
                          ),
                        (0, n.jsx)("div", {
                          className: "jsx-795bdccce560f4b6",
                          children: ae,
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "jsx-795bdccce560f4b6 feedback-body",
                    children: [
                      (l().isNil($.showGrade) || $.showGrade) &&
                        (0, n.jsx)(n.Fragment, {
                          children:
                            V && !F
                              ? (0, n.jsx)("div", {
                                  className:
                                    "jsx-795bdccce560f4b6 completion-message",
                                  children: pe,
                                })
                              : (0, n.jsx)(p.Z, {
                                  params: ce.params,
                                  graderDiffResponse: ue,
                                  feedbackComment:
                                    (null === (s = e.trainingScenario.params) ||
                                    void 0 === s
                                      ? void 0
                                      : s.feedbackComment) ||
                                    e.trainingScenario.feedbackMessage,
                                  loggedUserId: e.loggedUserId,
                                  useProtectedText: e.useProtectedText,
                                  project: e.project,
                                  passedChallenge: V,
                                }),
                        }),
                      !1 === $.showGrade &&
                        (0, n.jsx)("div", {
                          className: "jsx-795bdccce560f4b6 completion-message",
                          children: "Your submission will be reviewed.",
                        }),
                    ],
                  }),
                ],
              }),
            (0, n.jsx)(r(), {
              id: "795bdccce560f4b6",
              children:
                ".completion-message.jsx-795bdccce560f4b6{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:64px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;color:rgba(0,0,0,.5)}.container.jsx-795bdccce560f4b6{height:-webkit-calc(100vh - 64px);height:-moz-calc(100vh - 64px);height:calc(100vh - 64px);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.grader-response.jsx-795bdccce560f4b6{overflow-x:hidden!important;overflow-y:auto;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:360px;overflow:auto;background:white;border-top:1px solid var(--color-RemoGray01);border-left:1px solid var(--color-RemoGray01);font-size:15px}.grader-response-header.jsx-795bdccce560f4b6{height:52px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid var(--color-RemoGray01);font-weight:400}.feedback-header.jsx-795bdccce560f4b6{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.feedback-body.jsx-795bdccce560f4b6{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden;width:100%}",
            }),
          ],
        });
      };
    },
    183316: function (e, s, t) {
      var n = t(824246),
        i = t(827378),
        r = t(916353),
        a = t(416534),
        o = t(285556),
        d = t(298784),
        c = t.n(d);
      function l(e, s, t, n, i, r, a) {
        try {
          var o = e[r](a),
            d = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? s(d) : Promise.resolve(d).then(n, i);
      }
      function p(e) {
        return function () {
          var s = this,
            t = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(s, t);
            function a(e) {
              l(r, n, i, a, o, "next", e);
            }
            function o(e) {
              l(r, n, i, a, o, "throw", e);
            }
            a(void 0);
          });
        };
      }
      s.Z = ({ benchmarkId: e, updateBenchmarkState: s, passed: t = !1 }) => {
        const { 0: d, 1: l } = (0, i.useState)([]),
          { 0: u, 1: h } = (0, i.useState)(!1),
          m = (function () {
            var t = p(function* () {
              try {
                yield (0, o.ZP)(null, `internal/training/approve/${e}`, {
                  method: "POST",
                }),
                  s && s(),
                  h(!0),
                  alert("Successfully verified benchmark: " + e);
              } catch (t) {
                (0, o.vj)(t), alert("Failed to verify benchmark: " + e);
              }
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
        (0, i.useEffect)(() => {
          let s = !1;
          const t = (function () {
            var t = p(function* () {
              const { attempts: t } = yield (0, o.ZP)(
                null,
                "/corp-api/qm/individual-benchmark-metrics/attempts-since-last-update",
                { method: "POST", body: { scenarioId: e } }
              );
              s || l(t);
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return (
            t(),
            () => {
              s = !0;
            }
          );
        }, [e]);
        const b = c().some(d, (e) => e.accuracy < 1),
          x = (d.length >= 1 && b) || t;
        return (0, n.jsx)(r.u, {
          text: u
            ? "This benchmark has been verified."
            : 0 === d.length
            ? "Verification attempt must be completed to allow marking benchmark as verified."
            : b
            ? "Attempts didn't meet the pass threshold. You can't verify this benchmark."
            : "Verify this benchmark",
          asChild: !1,
          delayDuration: 0,
          target: (0, n.jsx)(a.zx, {
            onClick: () => m(),
            disabled: !x || u,
            variant: "primary",
            children: u ? "Verified" : "Mark Benchmark as Verified",
          }),
        });
      };
    },
    308609: function (e, s, t) {
      function n(e, ...s) {
        s.forEach((s) => {
          e[s] = e[s].bind(e);
        });
      }
      t.d(s, {
        Z: function () {
          return n;
        },
      });
    },
    484815: function (e, s, t) {
      t.d(s, {
        em: function () {
          return o;
        },
        mW: function () {
          return c;
        },
        $L: function () {
          return p;
        },
        ty: function () {
          return h;
        },
        cx: function () {
          return b;
        },
        nN: function () {
          return g;
        },
        BF: function () {
          return y;
        },
        L2: function () {
          return j;
        },
      });
      var n = t(285556),
        i = t(581698);
      function r(e, s, t, n, i, r, a) {
        try {
          var o = e[r](a),
            d = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? s(d) : Promise.resolve(d).then(n, i);
      }
      function a(e) {
        return function () {
          var s = this,
            t = arguments;
          return new Promise(function (n, i) {
            var a = e.apply(s, t);
            function o(e) {
              r(a, n, i, o, d, "next", e);
            }
            function d(e) {
              r(a, n, i, o, d, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function o(e) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = a(function* ({ context: e }) {
          const s = yield (0, n.ZP)(e, "internal/canAccessLidar", {
            returnRawResponse: !0,
          });
          return s && s.ok;
        })).apply(this, arguments);
      }
      function c() {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = a(function* (e = {}, { context: s, cache: t = !1 } = {}) {
          const n = w(t);
          return (yield n(s, "internal/projects", { query: e })).docs;
        })).apply(this, arguments);
      }
      function p() {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = a(function* (e = {}, { context: s } = {}) {
          const t = w(!1);
          return yield t(s, "internal/projects", { method: "POST", body: e });
        })).apply(this, arguments);
      }
      function h(e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = a(function* (e, s = {}, { context: t } = {}) {
          const n = `internal/projects/${e}`,
            i = w(!1);
          return yield i(t, n, { method: "PUT", body: s });
        })).apply(this, arguments);
      }
      function b(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = a(function* (e, { context: s } = {}) {
          const t = `internal/projects/${e}/pin`,
            n = w(!1);
          return yield n(s, t, { method: "PUT" });
        })).apply(this, arguments);
      }
      function g(e) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = a(function* (e, { context: s } = {}) {
          const t = `internal/projects/${e}/unpin`,
            n = w(!1);
          return yield n(s, t, { method: "PUT" });
        })).apply(this, arguments);
      }
      function y(e) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = a(function* (e, { context: s } = {}) {
          const t = `internal/projects/${e}/archive`,
            n = w(!1);
          return yield n(s, t, { method: "PUT" });
        })).apply(this, arguments);
      }
      function j(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = a(function* (e, { context: s } = {}) {
          const t = `internal/projects/${e}/unarchive`,
            n = w(!1);
          return yield n(s, t, { method: "PUT" });
        })).apply(this, arguments);
      }
      function w(e) {
        return e ? i.Z : n.ZP;
      }
    },
    107555: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return Se;
        },
      });
      var n = t(824246),
        i = t(679892),
        r = t.n(i),
        a = t(60042),
        o = t.n(a),
        d = t(298784),
        c = t.n(d),
        l = t(827378),
        p = t(792739),
        u = t(959807),
        h = t.n(u),
        m = t(468891),
        b = t(604375),
        x = t(885564),
        g = t(687192),
        f = t(942662),
        y = t(4369),
        k = t(416534),
        j = t(802638),
        v = t(876116),
        w = t(128819),
        S = t(392886);
      const T = 3600,
        C = (e) => {
          const s = parseInt(e, 10),
            t = Math.floor(s / T),
            n = Math.floor((s - t * T) / 60);
          return `${t ? t + ":" : ""}${n}:${((e) => (e < 10 ? `0${e}` : e))(
            s - t * T - 60 * n
          )}`;
        };
      var R = t(98283),
        A = t(285556),
        P = t(308609),
        F = t(891765),
        N = t(75384),
        I = t(700190),
        B = t(279220),
        O = t(599789),
        _ = t(167469),
        z = t(537425);
      function M(e, s, t, n, i, r, a) {
        try {
          var o = e[r](a),
            d = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? s(d) : Promise.resolve(d).then(n, i);
      }
      function Z(e) {
        return function () {
          var s = this,
            t = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(s, t);
            function a(e) {
              M(r, n, i, a, o, "next", e);
            }
            function o(e) {
              M(r, n, i, a, o, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function E(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      function L(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (s) {
              E(e, s, t[s]);
            });
        }
        return e;
      }
      var $ = (e) => {
        const { 0: s, 1: t } = (0, l.useState)(),
          { 0: n, 1: i } = (0, l.useState)(),
          { 0: r, 1: a } = (0, l.useState)();
        (0, B.Z)(
          Z(function* () {
            if (!e || !e.assignmentId) return;
            const { assignmentId: s } = e,
              n = `internal/guided_workflow/scenario/${s}`,
              i = yield (0, A.ZP)(null, n);
            i && i.enabled && t(i.workflow);
          }),
          [e]
        ),
          (0, B.Z)(
            Z(function* () {
              if (!(null === e || void 0 === e ? void 0 : e.projectId)) return;
              const s = `internal/ontology/${e.projectId}`,
                t = yield (0, A.ZP)(null, s);
              t && (i(t.ontologyHistory), a(t.ontologyInstructions));
            }),
            [e]
          );
        const o = !!s,
          d = L(
            {},
            (0, z.T)(e),
            null === e || void 0 === e ? void 0 : e.featureFlags,
            { canUseGuidedWorkflowBar: o }
          ),
          p = (0, l.useContext)(N.ZP),
          u =
            !c().includes(
              O.twoDTypes,
              null === e || void 0 === e ? void 0 : e.type
            ) &&
            (null === e || void 0 === e ? void 0 : e.type) !==
              _.TaskType.DocumentTranscription &&
            (null === e || void 0 === e ? void 0 : e.type) !==
              _.TaskType.TextCollection &&
            (null === e || void 0 === e ? void 0 : e.type) !==
              _.TaskType.Chat &&
            (null === e || void 0 === e ? void 0 : e.type) !==
              _.TaskType.ChatExperimental &&
            (null === e || void 0 === e ? void 0 : e.type) !==
              _.TaskType.ChatV2,
          h = (0, I.h)(
            `internal/config/${
              null === e || void 0 === e ? void 0 : e.projectId
            }`,
            { shouldShortCircuit: u }
          );
        if (!e) return;
        const m = {
          loggedUserId: null === p || void 0 === p ? void 0 : p._id,
          taskerWorkflowDefinition: s,
          ontologyHistory: n,
          ontologyInstructions: r,
          config: h.response,
          projectConfig: h.response,
        };
        return L({}, e, m, { featureFlags: d });
      };
      var D = (e) => {
          const { assignment: s, newRenderFunction: t } = e;
          return t($(s));
        },
        G = t(68649),
        U = t(518496);
      const V = (0, G.ZL)({
        root: { pointerEvents: "none" },
        paper: { background: "none", boxShadow: "none" },
      });
      var Y = ({ element: e }) => {
          const s = e.getBoundingClientRect(),
            t = s.height + 14,
            i = s.width + 14,
            a = V();
          return (0, n.jsxs)(U.ZP, {
            elevation: 9,
            open: !0,
            anchorEl: e,
            anchorOrigin: { vertical: "center", horizontal: "left" },
            transformOrigin: { vertical: "center", horizontal: "left" },
            classes: { root: a.root, paper: a.paper },
            children: [
              (0, n.jsxs)("div", {
                className:
                  r().dynamic([["dc7826e970a7c84f", [i, t]]]) +
                  " tutorial-highlight",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      r().dynamic([["dc7826e970a7c84f", [i, t]]]) +
                      " tutorial-highlight-rect-container",
                    children: (0, n.jsx)("svg", {
                      className: r().dynamic([["dc7826e970a7c84f", [i, t]]]),
                      children: (0, n.jsx)("rect", {
                        id: "box",
                        x: "0",
                        y: "0",
                        width: i,
                        height: t,
                        className:
                          r().dynamic([["dc7826e970a7c84f", [i, t]]]) +
                          " tutorial-highlight-rect",
                      }),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      r().dynamic([["dc7826e970a7c84f", [i, t]]]) +
                      " tutorial-highlight-arrow-container",
                    children: (0, n.jsx)(p.G, {
                      icon: "arrow-left",
                      style: {
                        marginLeft: "10px",
                        fontSize: "50px",
                        color: y.w.ScaleBlue,
                      },
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(r(), {
                id: "dc7826e970a7c84f",
                dynamic: [i, t],
                children: `.tutorial-highlight.__jsx-style-dynamic-selector{z-index:99!important;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;pointer-events:none;background:none}.tutorial-highlight-rect-container.__jsx-style-dynamic-selector{width:${i}px;height:${t}px;-webkit-animation-name:pulse;-moz-animation-name:pulse;-o-animation-name:pulse;animation-name:pulse;-webkit-animation-duration:3s;-moz-animation-duration:3s;-o-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite}.tutorial-highlight-rect.__jsx-style-dynamic-selector{fill:none;stroke:#0076ff;stroke-width:8;stroke-opacity:.9}@keyframes pulse{from{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(.85);-moz-transform:scale(.85);-o-transform:scale(.85);transform:scale(.85)}to{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}`,
              }),
            ],
          });
        },
        H = t(287731),
        K = t(255774),
        W = t(333470),
        q = t(583951),
        Q = t(821095),
        X = t(13848),
        J = t(271682),
        ee = t(160337),
        se = t(626199),
        te = t(161320),
        ne = t.n(te),
        ie = t(881620),
        re = t(775222),
        ae = t(135277),
        oe = t(556583),
        de = t(950743),
        ce = t(237896),
        le = t(153987),
        pe = t(484815),
        ue = t(433310);
      function he(e, s, t, n, i, r, a) {
        try {
          var o = e[r](a),
            d = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? s(d) : Promise.resolve(d).then(n, i);
      }
      function me(e) {
        return function () {
          var s = this,
            t = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(s, t);
            function a(e) {
              he(r, n, i, a, o, "next", e);
            }
            function o(e) {
              he(r, n, i, a, o, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function be(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      function xe(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (s) {
              be(e, s, t[s]);
            });
        }
        return e;
      }
      const ge = (function () {
        var e = me(function* (e) {
          const s = yield le.Z.getInitialProps(e),
            t =
              (e.user.trainerProject || e.user.isCorporateUser) &&
              e.query.show_answer,
            n = e.user.isCorporateUser;
          n ||
            "disabled" !== e.authCache.trainingScenario.benchmark.status ||
            ue.Z.error(
              `trainingScenario benchmark status is disabled for tasker ${e.user._id}, and training scenario is ${e.authCache.trainingScenario._id} and project ${e.authCache.trainingScenario.project}`
            );
          const i = yield (0, A.ZP)(
            e,
            `internal/config/${e.authCache.trainingScenario.project}`
          );
          return xe({}, s, e.authCache, {
            query: e.query,
            overrideAnswerKeyCooldown: t,
            isCorpUser: n,
            projectConfig: i,
          });
        });
        return function (s) {
          return e.apply(this, arguments);
        };
      })();
      var fe = t(278668),
        ye = t(553999);
      function ke(e, s, t, n, i, r, a) {
        try {
          var o = e[r](a),
            d = o.value;
        } catch (c) {
          return void t(c);
        }
        o.done ? s(d) : Promise.resolve(d).then(n, i);
      }
      function je(e) {
        return function () {
          var s = this,
            t = arguments;
          return new Promise(function (n, i) {
            var r = e.apply(s, t);
            function a(e) {
              ke(r, n, i, a, o, "next", e);
            }
            function o(e) {
              ke(r, n, i, a, o, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ve(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      function we(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (s) {
              ve(e, s, t[s]);
            });
        }
        return e;
      }
      class Se extends l.Component {
        get defaultState() {
          return {
            showingInstructions: !0,
            showingSummary: !1,
            showingLeaderboard: !0,
            responseIndex: 0,
            currentTutorialStep: 0,
            isTutorial: !1,
            isVerificationAttempt: !1,
          };
        }
        get taskComponent() {
          return this.task.current;
        }
        waitForLoad() {
          var e = this;
          return je(function* () {
            for (; !e.taskComponent || !e.taskComponent.labeler; )
              yield h().delay(500);
          })();
        }
        UNSAFE_componentWillMount() {
          this.setState(this.defaultState);
        }
        componentDidMount() {
          var e = this;
          return je(function* () {
            var s;
            window.addEventListener("keydown", (s) => {
              e.onTutorialInteraction({
                type: ae.TutorialStep.Shortcut,
                shortcutTrigger: [s.key],
              });
            }),
              setInterval(e.updateHighlightedElement, 2e3);
            const t = new URLSearchParams(window.location.search),
              n = Boolean(t.get("isVerificationAttempt"));
            e.setState({
              isVerificationAttempt: null !== n && void 0 !== n && n,
            }),
              (null === (s = e.props.trainingScenario) || void 0 === s
                ? void 0
                : s.benchmark.type) === O.BenchmarkType.Tutorial &&
                e.setState({ isTutorial: !0 }),
              e.props.submissionResponse &&
                (yield e.waitForLoad(),
                e.setState({
                  submissionResponse: e.props.submissionResponse,
                  showingSummary: !0,
                  showingInstructions: !1,
                })),
              re.c.track("Training - Opens BM"),
              e.logMetrics();
          })();
        }
        logMetrics() {
          try {
            var e, s;
            if (this.props.throttleTimeMs)
              re.c.track("Throttled training page", {
                scenarioId:
                  null === (e = this.props.trainingScenario) || void 0 === e
                    ? void 0
                    : e._id,
                projectId:
                  null === (s = this.props.trainingScenario) || void 0 === s
                    ? void 0
                    : s.project,
              });
          } catch (t) {}
        }
        canViewAnswerKey() {
          return (
            this.props.overrideAnswerKeyCooldown ||
            (this.state.submissionResponse &&
              this.state.submissionResponse.timeSpentSecs >=
                this.props.trainingScenario.minimumAttemptTimeSeconds)
          );
        }
        startTraining() {
          if (this.taskComponent) {
            this.taskComponent.taskTimer.reset(0);
          }
          this.setState({ showingInstructions: !1 });
        }
        getSubmitDisabledStatus() {
          var e;
          const s = c().size(
              null === (e = this.props.trainingScenario) || void 0 === e
                ? void 0
                : e.tutorialSteps
            ),
            { currentTutorialStep: t } = this.state;
          return s && t < s
            ? {
                canSubmit: !1,
                submitTooltip:
                  "Follow all the steps to finish this training scenario.",
              }
            : { canSubmit: !0, submitTooltip: null };
        }
        onSubmit(e, s) {
          var t = this;
          return je(function* () {
            const e = c().get(
              t.props.trainingScenario,
              "graderParams.version",
              1
            );
            if (t.props.query.edit_scenario || t.props.query.edit_answer_key)
              return (
                yield t.submitScenarioEdit(!!t.props.query.edit_answer_key),
                void t.setState({ scenarioUpdated: !0 })
              );
            const { ready: n, submissionResponse: i } = yield (0, A.ZP)(
                null,
                `internal/training/complete/${
                  t.props.trainingScenario.taskType
                }/${t.props.trainingAttempt}?${m.stringify({
                  grader_version: e,
                })}`,
                { method: "POST", body: s }
              ),
              r = (e) => {
                e.passedSpeedBar && e.passedAccuracyBar
                  ? re.c.track("Training - Passed Linter")
                  : re.c.track(
                      "Training - Prompt/Response/Task linter triggered"
                    ),
                  t.setState({
                    lastSubmittedProblemZones: e.problemZonesResponse,
                    submissionResponse: e,
                    showingGrade: !0,
                  }),
                  t.showSummary();
              };
            if (t.state.isTutorial && n) {
              const e = we({}, i, {
                passedBar: !0,
                passedAccuracyBar: !0,
                passedSpeedBar: !0,
              });
              return void r(e);
            }
            if (n) return void r(i);
            const a = setInterval(
              je(function* () {
                const { submissionResponse: e, ready: s } = yield (0, A.ZP)(
                  null,
                  `internal/training/fetch/${t.props.trainingAttempt}`
                );
                s &&
                  (clearInterval(a),
                  t.state.isTutorial &&
                    r(
                      we({}, e, {
                        passedBar: !0,
                        passedAccuracyBar: !0,
                        passedSpeedBar: !0,
                      })
                    ),
                  r(e));
              }),
              5e3
            );
          })();
        }
        onTutorialInteraction(e) {
          var s, t, n;
          const { currentTutorialStep: i } = this.state;
          ((e, s) => {
            if (e.type !== (null === s || void 0 === s ? void 0 : s.type))
              return !1;
            if (e.type === ae.TutorialStep.SelectAnnotation) {
              const t = s,
                { startFrame: n, endFrame: i } = t;
              return (
                !((n && e.startFrame < n) || (i && e.endFrame > i)) &&
                e.annotationId === t.annotationId
              );
            }
            if (e.type === ae.TutorialStep.LidarFeature) {
              const r = s;
              if (e.featureName !== r.featureName) return !1;
              if (c().isEmpty(r.featureOpts)) return !0;
              var t;
              const a = null !== (t = r.featureOpts) && void 0 !== t ? t : {},
                o = a.threshold,
                d = a.value;
              var n;
              const l = null !== (n = e.featureOpts) && void 0 !== n ? n : {},
                p = l.value;
              return (
                (!a.subFeature || a.subFeature === l.subFeature) &&
                (c().isFinite(o) && c().isFinite(d)
                  ? !!c().isFinite(p) && Math.abs(d - p) <= o
                  : !!c().isNil(d) ||
                    d ===
                      (null === (i = e.featureOpts) || void 0 === i
                        ? void 0
                        : i.value))
              );
              var i;
            }
            return c().isEqual(e, s);
          })(
            e,
            null === (s = this.props.trainingScenario) ||
              void 0 === s ||
              null === (t = s.tutorialSteps) ||
              void 0 === t ||
              null === (n = t[i]) ||
              void 0 === n
              ? void 0
              : n.interaction
          ) && this.setState({ currentTutorialStep: i + 1 });
        }
        retryTraining(e = !1) {
          var s;
          if (
            (re.c.track("Training - Redo BM"),
            (null === (s = this.props.trainingScenario) || void 0 === s
              ? void 0
              : s.taskType) === _.TaskType.LidarAnnotation)
          ) {
            const s = new URL(window.location.href);
            !0 === e
              ? s.searchParams.set("retry", "1")
              : s.searchParams.delete("retry"),
              (window.location.href = s.href);
          } else {
            var t;
            (null === (t = this.taskComponent) || void 0 === t
              ? void 0
              : t.discardChanges) && this.taskComponent.discardChanges(),
              window.location.reload();
          }
        }
        makeChanges() {
          if (this.taskComponent) {
            const e = this.taskComponent.taskTimer,
              s = 1e3 * this.state.submissionResponse.timeSpentSecs;
            e.reset(s), this.taskComponent.resetSubmit();
          }
          this.hideSummary();
        }
        exit() {
          (0, R.ZP)(null, "/dashboard");
        }
        get includeInitialResponse() {
          var e, s;
          const { user: t, query: n } = this.props;
          return (
            t.isCorporateUser &&
            (null === n || void 0 === n ? void 0 : n.view_initial_response) &&
            (null === (e = this.props.trainingScenario) ||
            void 0 === e ||
            null === (s = e.params) ||
            void 0 === s
              ? void 0
              : s.initialScene)
          );
        }
        get responsesReady() {
          return !!this.state.submissionResponse;
        }
        get initialTrainingScenarioSubtask() {
          var e, s, t;
          return (
            null === (e = this.props.query) || void 0 === e
              ? void 0
              : e.view_initial_response
          )
            ? null === (s = this.props.trainingScenario) ||
              void 0 === s ||
              null === (t = s.params) ||
              void 0 === t
              ? void 0
              : t.initialScene
            : void 0;
        }
        get scenesToLoad() {
          return [
            this.props.trainingAttempt,
            this.initialTrainingScenarioSubtask,
          ].filter((e) => !!e);
        }
        render2DScenarioHeader() {
          const e = this.props.user.accountType === O.AccountType.Expert;
          return (0, n.jsxs)("div", {
            className: "jsx-695fe4a0b9e08858 training-header",
            children: [
              (0, n.jsxs)("div", {
                className: "jsx-695fe4a0b9e08858 training-header__meta",
                children: [
                  (0, n.jsx)("span", {
                    className: "jsx-695fe4a0b9e08858 training-header__title",
                    children: (0, n.jsx)("strong", {
                      className: "jsx-695fe4a0b9e08858",
                      children: this.props.trainingScenario.name,
                    }),
                  }),
                  (0, n.jsx)("span", {
                    className: "jsx-695fe4a0b9e08858 training-header__subtitle",
                    children: (0, n.jsx)("strong", {
                      className: "jsx-695fe4a0b9e08858",
                      children: this.props.trainingScenario.description,
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "jsx-695fe4a0b9e08858 training-header__subtitle",
                children:
                  !0 !== this.props.hideBackButton &&
                  (0, n.jsxs)(f.Z, {
                    type: "link",
                    onClick: this.props.toggleShowingFeedback,
                    style: {
                      color: "rgba(0,0,0,0.4)",
                      marginLeft: "8px",
                      marginTop: "8px",
                    },
                    href: e ? "/expert" : "/dashboard",
                    children: [
                      (0, n.jsx)(p.G, { icon: "chevron-left" }),
                      "\xa0 Back To Dashboard",
                    ],
                  }),
              }),
              (0, n.jsx)(r(), {
                id: "695fe4a0b9e08858",
                children:
                  "@media screen and (max-width:768px){.training-header.jsx-695fe4a0b9e08858{z-index:1;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid rgba(0,0,0,.1);-webkit-box-shadow:0px 0px 8px rgba(0,0,0,.05);-moz-box-shadow:0px 0px 8px rgba(0,0,0,.05);box-shadow:0px 0px 8px rgba(0,0,0,.05);background:white;color:black;font-size:15px}.training-header__meta.jsx-695fe4a0b9e08858 span.jsx-695fe4a0b9e08858{padding-right:16px}.training-header__title.jsx-695fe4a0b9e08858{font-size:20px}.training-header__subtitle.jsx-695fe4a0b9e08858{color:rgba(0,0,0,.4)}}",
              }),
            ],
          });
        }
        renderLeaderboard() {
          if (this.props.leaderboard)
            return (0, n.jsxs)("div", {
              className:
                "jsx-4324743f279bcd63 " +
                (o()("leaderboard", {
                  hidden: !this.state.showingLeaderboard,
                }) || ""),
              children: [
                (0, n.jsxs)("div", {
                  className: "jsx-4324743f279bcd63 leaderboard-header",
                  children: [
                    "\ud83c\udfc6 ",
                    this.props.trainingScenario.name,
                    " Leaderboard",
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "jsx-4324743f279bcd63 leaderboard-list",
                  children: this.props.leaderboard.length
                    ? this.props.leaderboard.map((e, s) =>
                        (0, n.jsxs)(
                          "div",
                          {
                            className: "jsx-4324743f279bcd63 leaderboard-item",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "jsx-4324743f279bcd63",
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "jsx-4324743f279bcd63 ranking",
                                    children: s + 1,
                                  }),
                                  " ",
                                  e.worker,
                                ],
                              }),
                              (0, n.jsx)("span", {
                                className: "jsx-4324743f279bcd63",
                                children:
                                  "speed" ===
                                  this.props.trainingScenario.trainingType
                                    ? C(e.score)
                                    : `${Math.floor(100 * e.score)}%`,
                              }),
                            ],
                          },
                          s
                        )
                      )
                    : (0, n.jsx)("div", {
                        className: "jsx-4324743f279bcd63 leaderboard-item",
                        children: "No training scores yet",
                      }),
                }),
                (0, n.jsx)("div", {
                  className: "jsx-4324743f279bcd63 leaderboard-close",
                  children: (0, n.jsx)("a", {
                    onClick: this.hideLeaderboard,
                    className: "jsx-4324743f279bcd63 btn-flat",
                    children: "Hide",
                  }),
                }),
                (0, n.jsx)(r(), {
                  id: "4324743f279bcd63",
                  children:
                    ".leaderboard.jsx-4324743f279bcd63{-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);padding:12px 16px;background:rgba(255,255,255,.9);color:black;font-weight:bold;font-size:13px;-webkit-transition:top.5s ease-in-out;-moz-transition:top.5s ease-in-out;-o-transition:top.5s ease-in-out;transition:top.5s ease-in-out;position:absolute;top:0;pointer-events:auto}.leaderboard.hidden.jsx-4324743f279bcd63{top:-360px}.leaderboard-list.jsx-4324743f279bcd63{margin-top:16px}.leaderboard-item.jsx-4324743f279bcd63 .ranking.jsx-4324743f279bcd63{display:inline-block;width:16px}.leaderboard-item.jsx-4324743f279bcd63{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.leaderboard-close.jsx-4324743f279bcd63{margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.leaderboard-close.jsx-4324743f279bcd63 .btn-flat.jsx-4324743f279bcd63{background:rgba(0,0,0,0);-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;overflow:hidden;padding:.5em;-webkit-transition:background.3s ease-in-out;-moz-transition:background.3s ease-in-out;-o-transition:background.3s ease-in-out;transition:background.3s ease-in-out}.leaderboard-close.jsx-4324743f279bcd63 .btn-flat.jsx-4324743f279bcd63:hover{background:rgba(0,0,0,.08)}.leaderboard-close.jsx-4324743f279bcd63 .btn-flat.jsx-4324743f279bcd63:not(:first-of-type){margin-left:.5em}",
                }),
              ],
            });
        }
        renderScenarioUpdated() {
          if (this.state.scenarioUpdated)
            return (0, n.jsxs)(j.u_, {
              isOpen: !0,
              children: [
                (0, n.jsx)("div", {
                  className: "jsx-504828f3394fd24e section",
                  children: '"Scenario updated!"',
                }),
                (0, n.jsx)(r(), {
                  id: "504828f3394fd24e",
                  children:
                    ".section.jsx-504828f3394fd24e{padding:32px}.section.jsx-504828f3394fd24e+.section.jsx-504828f3394fd24e{border-top:1px solid var(--bg-gray-light)}",
                }),
              ],
            });
        }
        renderTutorialHighlight() {
          if (this.state.highlightedElement)
            return (0, n.jsx)(Y, { element: this.state.highlightedElement });
        }
        renderTutorialProgress() {
          var e, s, t;
          const i = c().size(
            null === (e = this.props.trainingScenario) || void 0 === e
              ? void 0
              : e.tutorialSteps
          );
          if (!i || this.state.showingInstructions) return;
          const { currentTutorialStep: a } = this.state,
            o =
              null === (s = this.props.trainingScenario) ||
              void 0 === s ||
              null === (t = s.tutorialSteps) ||
              void 0 === t
                ? void 0
                : t[a];
          var d;
          const l =
              null !==
                (d = null === o || void 0 === o ? void 0 : o.instructions) &&
              void 0 !== d
                ? d
                : "All done! Once you have fixed these errors, submit your scenario.",
            p =
              (null === o || void 0 === o ? void 0 : o.allowContinue) ||
              (null === o || void 0 === o ? void 0 : o.type) ===
                ae.TutorialStep.Text
                ? (0, n.jsx)("p", {
                    style: {
                      textDecoration: "underline",
                      color: "white",
                      cursor: "pointer",
                    },
                    onClick: () =>
                      this.setState({
                        currentTutorialStep: this.state.currentTutorialStep + 1,
                      }),
                    children: "Click here to continue",
                  })
                : null;
          return (0, n.jsxs)("div", {
            className: "jsx-e3cb8d9f95dad905 tutorial-progress-container",
            children: [
              (0, n.jsxs)("div", {
                className: "jsx-e3cb8d9f95dad905 tutorial-progress-text",
                children: [
                  (0, n.jsxs)("h3", {
                    className: "jsx-e3cb8d9f95dad905",
                    children: ["(", a + 1, "/", i + 1, ") ", l],
                  }),
                  p,
                ],
              }),
              (0, n.jsx)("div", {
                className: "jsx-e3cb8d9f95dad905 progress-bar-container",
                children: (0, n.jsx)("div", {
                  className: "jsx-e3cb8d9f95dad905 progress-bar",
                  children: (0, n.jsx)(F.ZP, {
                    completed: a,
                    total: i,
                    height: 25,
                    fillColor: "#2ecc71",
                    backgroundColor: "#c4e5d2",
                  }),
                }),
              }),
              (0, n.jsx)(r(), {
                id: "e3cb8d9f95dad905",
                children:
                  ".tutorial-progress-container.jsx-e3cb8d9f95dad905{pointer-events:none;position:fixed;top:100px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);z-index:99!important}.tutorial-progress-text.jsx-e3cb8d9f95dad905{pointer-events:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:300px;text-align:center;background-color:rgba(0,0,0,.5);-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}h3.jsx-e3cb8d9f95dad905{color:white;margin:8px}.progress-bar-container.jsx-e3cb8d9f95dad905{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px}.progress-bar.jsx-e3cb8d9f95dad905{width:250px;display:inline-block;margin-left:auto;margin-right:auto}",
              }),
            ],
          });
        }
        renderTaskPage() {
          var e;
          const {
            query: s,
            trainingScenario: t,
            projectConfig: i,
          } = this.props;
          if (!t || !t.params) return;
          let r;
          var a;
          c().get(this.state, "submissionResponse.processedResponse")
            ? (r = c().get(this.state, "submissionResponse.processedResponse"))
            : c().get(s, "edit_answer_key") ||
              (t.benchmark.type === O.BenchmarkType.Tutorial &&
                t.benchmark.tutorialMode === ye.Xn.Instructor)
            ? (r = t.expectedResponse)
            : (t.taskType === _.TaskType.Chat &&
                t.benchmark.isAttempterBenchmark) ||
              (r = t.initialResponse);
          const o = {
            trainingScenario: t,
            isTestQuestion: !0,
            config: this.props.config,
            projectConfig: i,
            showHeader: !1,
            showFooter: !0,
            isTrainingFeedbackOpen: this.state.showingSummary,
            onSubmit: this.onSubmit,
            getSubmitDisabledStatus: this.getSubmitDisabledStatus,
            onRetryTraining: this.retryTraining,
            closeTrainingFeedback: this.hideSummary,
            trainingResponse: this.state.submissionResponse,
            fixResponse: r,
            instruction: t.instructions,
            instructionObjectId: t.instructionObjectId,
            userFlags: this.props.user.featureFlags,
            loggedUserId: this.props.user.id,
            useProtectedText: t.useProtectedText,
            isSimultaneousEditing: !!s.edit_diff,
            ocrTextUrls: this.getOCRTextUrls(
              null !== (a = t.attachmentS3Downloads) && void 0 !== a ? a : []
            ),
            courseVersion: this.props.courseVersion,
            hideHeader: this.props.hideHeader,
          };
          (0, se.Hz)(t);
          const d = this.transformToAssignment(t, r);
          var l;
          d &&
            t &&
            t.expectedResponse &&
            t.tutorialResponse &&
            t.benchmark.type === O.BenchmarkType.Tutorial &&
            ((d.expectedResponse = t.expectedResponse),
            (d.tutorialResponse = t.tutorialResponse),
            (d.isTutorialBenchmark = !0),
            (d.isVerificationAttempt = !0),
            d.tutorialMode ||
              (d.tutorialMode =
                null !== (l = t.tutorialMode) && void 0 !== l
                  ? l
                  : t.benchmark.tutorialMode));
          const u = s.overrideReviewLevel || s.reviewLevel;
          if (d && u) {
            const e = parseInt(u);
            isNaN(e) || (d.overrideReviewLevel = e);
          }
          const h =
            "string" === typeof t.project
              ? t.project
              : null === (e = t.project) || void 0 === e
              ? void 0
              : e._id;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              this.props.courseVersion === O.CourseVersion.V2 &&
                !c().isNil(h) &&
                (0, n.jsx)("div", {
                  className: "pr-1",
                  children: (0, n.jsx)(k.zx, {
                    variant: "white",
                    onClick: () => {
                      const e = `/expert/instruction/${h}`;
                      let s = window.location.origin + e;
                      (null === d || void 0 === d ? void 0 : d.assignmentId) &&
                        (s += `?assignmentId=${d.assignmentId}`),
                        window.open(s, "_blank");
                    },
                    children: (0, n.jsx)(p.G, { size: "sm", icon: "books" }),
                  }),
                }),
              (0, n.jsx)(D, {
                assignment: d,
                newRenderFunction: (e) => {
                  switch (e.type) {
                    case _.TaskType.AudioTranscription:
                      return (0, n.jsx)(v.Gi, we({ ref: this.task }, o, t));
                    case _.TaskType.Categorization:
                      return t.params.taxonomies
                        ? (0, n.jsx)(
                            v.kq,
                            we({ ref: this.task }, o, t, {
                              examAttemptId:
                                t.params.attachment_type ===
                                  O.AttachmentType.JSON &&
                                this.props.trainingAttempt,
                            }),
                            t._id
                          )
                        : (0, n.jsx)(v.LO, we({ ref: this.task }, o, t));
                    case _.TaskType.Comparison:
                      return (0, n.jsx)(v.FS, we({ ref: this.task }, o, t));
                    case _.TaskType.DataCollection:
                      return (0, n.jsx)(v.kv, we({ ref: this.task }, o, t));
                    case _.TaskType.ImageAnnotation:
                    case _.TaskType.PointAnnotation:
                    case _.TaskType.LineAnnotation:
                    case _.TaskType.Annotation:
                    case _.TaskType.CuboidAnnotation:
                    case _.TaskType.PolygonAnnotation:
                      return (0, n.jsx)(J.M5, {
                        children: (0, n.jsx)(
                          v.B,
                          we({ ref: this.task }, o, t, { assignment: e })
                        ),
                      });
                    case _.TaskType.SegmentAnnotation:
                      return (0, n.jsx)(
                        v.lb,
                        we({ ref: this.task }, o, t, { assignment: e })
                      );
                    case _.TaskType.Transcription:
                      return (0, n.jsx)(v._N, we({ ref: this.task }, o, t));
                    case _.TaskType.VideoAnnotation:
                    case _.TaskType.VideoBoxAnnotation:
                    case _.TaskType.VideoCuboidAnnotation:
                    case _.TaskType.VideoPolygonAnnotation:
                      return (0, n.jsx)(J.M5, {
                        children: (0, n.jsx)(
                          v.xe,
                          we({ ref: this.task }, o, t, { assignment: e }),
                          t._id
                        ),
                      });
                    case _.TaskType.VideoPlaybackAnnotation:
                      return (0, n.jsx)(
                        v.sE,
                        we({ ref: this.task }, o, t, { assignment: e })
                      );
                    case _.TaskType.LidarAnnotation:
                    case _.TaskType.LidarSegmentation:
                    case _.TaskType.SensorFusion:
                      return (0, n.jsx)(Te, {
                        trainingAttemptId: this.props.trainingAttempt,
                      });
                    case _.TaskType.NamedEntityRecognition:
                      return (0, n.jsx)(
                        v.bs,
                        we({ ref: this.task }, o, t),
                        t._id
                      );
                    case _.TaskType.TextCollection:
                      return t.params.externalAmsLink
                        ? (0, n.jsx)(
                            v.fT,
                            we({ ref: this.task }, o, t, { assignment: e }),
                            t._id
                          )
                        : (0, n.jsx)(
                            v.JO,
                            we({ ref: this.task }, o, t, {
                              assignment: e,
                              tasker: this.props.user,
                            }),
                            t._id
                          );
                    case _.TaskType.DocumentTranscription:
                      return (0, n.jsx)(
                        v.QH,
                        we({ ref: this.task }, o, t, { assignment: e })
                      );
                    case _.TaskType.Chat:
                      return (0, n.jsx)(
                        v.JL,
                        we({ ref: this.task }, o, t, { assignment: e })
                      );
                    case _.TaskType.ChatExperimental:
                    case _.TaskType.ChatV2:
                      return (0, n.jsx)(
                        v.bb,
                        we({ ref: this.task }, o, t, { assignment: e })
                      );
                  }
                  return null;
                },
              }),
            ],
          });
        }
        renderChatFeedback() {
          if (!this.state.showingSummary) return null;
          var e, s;
          if (
            this.state.showingSummary &&
            this.state.isTutorial &&
            !this.state.isVerificationAttempt
          )
            return void (
              this.props.onFeedbackCloseLoading ||
              null === (s = (e = this.props).onFeedbackClose) ||
              void 0 === s ||
              s.call(e)
            );
          const t = [
            {
              name: ee.DiffView.TaskerResponse,
              response: c().get(
                this.state,
                "submissionResponse.processedResponse"
              ),
              graderResponse: this.state.submissionResponse.graderResponse,
              graderParams: this.props.trainingScenario.graderParams,
            },
          ];
          return (0, n.jsx)(W.Z, {
            makeChanges: this.props.simpleFeedbackModalClosing
              ? this.makeChanges
              : this.hideSummary,
            trainingScenario: this.props.trainingScenario,
            trainingAttempt: this.props.trainingAttempt,
            submissionResponse: this.state.submissionResponse,
            retryTraining: this.retryTraining,
            responses: t,
            isCorpUser: this.props.isCorpUser,
            diffingResponse: this.state.lastSubmittedProblemZones,
            config: this.props.config,
            simpleFeedbackModalClosing: this.props.simpleFeedbackModalClosing,
          });
        }
        render2DFeedback() {
          var e;
          if (!this.state.showingSummary) return null;
          const s = this.canViewAnswerKey(),
            t = [
              {
                name: ee.DiffView.TaskerResponse,
                response: c().get(
                  this.state,
                  "submissionResponse.processedResponse"
                ),
                graderResponse: s
                  ? this.state.submissionResponse.graderResponse
                  : null,
                graderParams: s
                  ? this.props.trainingScenario.graderParams
                  : null,
              },
              {
                name: ee.DiffView.AnswerKey,
                response:
                  this.state.submissionResponse.closestExpectedResponse ||
                  this.props.trainingScenario.expectedResponse,
                graderResponse: this.state.submissionResponse.graderResponse,
                graderParams: this.props.trainingScenario.graderParams,
                isAnswerKey: !0,
              },
            ],
            i =
              null === (e = this.state.submissionResponse) || void 0 === e
                ? void 0
                : e.visualDiff;
          return (
            i &&
              t.unshift({
                name: ee.DiffView.VisualDiff,
                response: i,
                graderResponse: s
                  ? this.state.submissionResponse.graderResponse
                  : null,
                graderParams: s
                  ? this.props.trainingScenario.graderParams
                  : null,
              }),
            (0, n.jsx)(K.Z, {
              makeChanges: this.props.simpleFeedbackModalClosing
                ? this.makeChanges
                : this.hideSummary,
              trainingScenario: this.props.trainingScenario,
              trainingAttempt: this.props.trainingAttempt,
              submissionResponse: this.state.submissionResponse,
              retryTraining: this.retryTraining,
              responses: t,
              allowedToSeeAnswerKey: s,
              isCorpUser: this.props.isCorpUser,
              diffingResponse: this.state.lastSubmittedProblemZones,
              config: this.props.config,
              simpleFeedbackModalClosing: this.props.simpleFeedbackModalClosing,
            })
          );
        }
        renderNERFeedback() {
          if (!this.state.showingSummary) return null;
          const e = this.canViewAnswerKey(),
            s = this.state.submissionResponse,
            t = [
              {
                name: ee.DiffView.TaskerResponse,
                response: s && s.processedResponse,
                graderResponse: e ? s.graderResponse : null,
                graderParams: e
                  ? this.props.trainingScenario.graderParams
                  : null,
              },
              {
                name: ee.DiffView.AnswerKey,
                response:
                  this.state.submissionResponse.closestExpectedResponse ||
                  this.props.trainingScenario.expectedResponse,
                graderResponse: this.state.submissionResponse.graderResponse,
                graderParams: this.props.trainingScenario.graderParams,
                isAnswerKey: !0,
              },
            ];
          return (0, n.jsx)(q.Z, {
            makeChanges: this.props.simpleFeedbackModalClosing
              ? this.makeChanges
              : this.hideSummary,
            name: this.props.name,
            showingGrade: this.state.showingGrade,
            trainingScenario: this.props.trainingScenario,
            submissionResponse: this.state.submissionResponse,
            retryTraining: this.retryTraining,
            responses: t,
            allowedToSeeAnswerKey: e,
            diffingResponse: this.state.lastSubmittedProblemZones,
            isCorpUser: this.props.isCorpUser,
            trainingAttempt: this.props.trainingAttempt,
            backToQueue: () => {},
            simpleFeedbackModalClosing: this.props.simpleFeedbackModalClosing,
          });
        }
        renderTextCollectionFeedback() {
          var e;
          if (!this.state.showingSummary) return null;
          const s = this.canViewAnswerKey(),
            t = this.state.submissionResponse,
            i = [
              {
                name: ee.DiffView.TaskerResponse,
                response: t && t.processedResponse,
                isAnswerKey: !1,
              },
              {
                name: ee.DiffView.AnswerKey,
                response:
                  this.state.submissionResponse.closestExpectedResponse ||
                  this.props.trainingScenario.expectedResponse,
                isAnswerKey: !0,
              },
            ];
          return (0, n.jsx)(Q.Z, {
            makeChanges: this.props.simpleFeedbackModalClosing
              ? this.makeChanges
              : this.hideSummary,
            name: this.props.name,
            showingGrade: this.state.showingGrade,
            trainingScenario: this.props.trainingScenario,
            submissionResponse: this.state.submissionResponse,
            retryTraining: this.retryTraining,
            responses: i,
            allowedToSeeAnswerKey: s,
            diffingResponse: this.state.lastSubmittedProblemZones,
            isCorpUser: this.props.isCorpUser,
            trainingAttempt: this.props.trainingAttempt,
            backToQueue: () => {},
            loggedUserId: this.props.user.id,
            useProtectedText: this.props.trainingScenario.useProtectedText,
            project:
              null === (e = this.props.trainingScenario) || void 0 === e
                ? void 0
                : e.project,
            simpleFeedbackModalClosing: this.props.simpleFeedbackModalClosing,
          });
        }
        renderDocumentTranscriptionFeedback() {
          var e, s;
          if (!this.state.showingSummary) return null;
          const t = this.canViewAnswerKey(),
            i = [
              {
                name: ee.DiffView.TaskerResponse,
                response:
                  null === (e = this.state.submissionResponse) || void 0 === e
                    ? void 0
                    : e.processedResponse,
                graderResponse: t
                  ? this.state.submissionResponse.graderResponse
                  : null,
                graderParams: t
                  ? this.props.trainingScenario.graderParams
                  : null,
              },
              {
                name: ee.DiffView.AnswerKey,
                response:
                  this.state.submissionResponse.closestExpectedResponse ||
                  this.props.trainingScenario.expectedResponse,
                graderResponse: this.state.submissionResponse.graderResponse,
                graderParams: this.props.trainingScenario.graderParams,
                isAnswerKey: !0,
              },
            ],
            r =
              null === (s = this.state.submissionResponse) || void 0 === s
                ? void 0
                : s.visualDiff;
          var a;
          return (
            r &&
              i.unshift({
                name: ee.DiffView.VisualDiff,
                response: r,
                graderResponse: t
                  ? this.state.submissionResponse.graderResponse
                  : null,
                graderParams: t
                  ? this.props.trainingScenario.graderParams
                  : null,
              }),
            (0, n.jsx)(X.Z, {
              makeChanges: this.props.simpleFeedbackModalClosing
                ? this.makeChanges
                : this.hideSummary,
              trainingScenario: this.props.trainingScenario,
              trainingAttempt: this.props.trainingAttempt,
              submissionResponse: this.state.submissionResponse,
              retryTraining: this.retryTraining,
              responses: i,
              allowedToSeeAnswerKey: t,
              isCorpUser: this.props.isCorpUser,
              diffingResponse:
                null !== (a = this.state.lastSubmittedProblemZones) &&
                void 0 !== a
                  ? a
                  : [],
              simpleFeedbackModalClosing: this.props.simpleFeedbackModalClosing,
            })
          );
        }
        renderWithWrapper(e) {
          return (0, n.jsx)(b.ag, {
            children: (0, n.jsxs)("div", {
              className:
                "jsx-115bb87f811755a2 tasks__container scaler flex-column",
              children: [
                window.location.pathname.includes("/expert")
                  ? (0, n.jsx)(ce.Z, { title: "Training" })
                  : (0, n.jsx)(w.Z, { title: "Instruction" }),
                (0, n.jsx)(x.Z, {}),
                (0, n.jsx)(y.Z, {}),
                (0, n.jsx)(S.Z, {}),
                (0, n.jsx)(l.Suspense, {
                  fallback: (0, n.jsx)(g.Z, {}),
                  children: e,
                }),
                (0, n.jsx)(r(), {
                  id: "115bb87f811755a2",
                  children:
                    ".flex-column.jsx-115bb87f811755a2{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}",
                }),
              ],
            }),
          });
        }
        renderThrottlePage() {
          return this.renderWithWrapper(
            (0, n.jsxs)("div", {
              style: {
                marginLeft: "25%",
                marginRight: "25%",
                marginTop: "10%",
                textAlign: "center",
              },
              children: [
                (0, n.jsx)("h2", { children: "Better luck next time" }),
                (0, n.jsx)("p", {
                  children:
                    "Unfortunately, you've run out of attempts for this scenario!",
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "You can try again in ",
                    (0, n.jsx)("b", {
                      children: ne()
                        .duration(this.props.throttleTimeMs)
                        .humanize(),
                    }),
                  ],
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "In the mean time, head on back to the",
                    " ",
                    (0, n.jsx)(ie.ZP, {
                      href: "/onboarding-center",
                      children: (0, n.jsx)("a", {
                        href: "/onboarding-center",
                        children: "onboarding center",
                      }),
                    }),
                    "!",
                  ],
                }),
              ],
            })
          );
        }
        render() {
          if (!this.props.trainingScenario) return;
          if (
            this.props.trainingScenario.taskType ===
              _.TaskType.LidarAnnotation ||
            this.props.trainingScenario.taskType ===
              _.TaskType.LidarSegmentation ||
            this.props.trainingScenario.taskType === _.TaskType.SensorFusion
          )
            return (0, n.jsx)(Te, {
              trainingAttemptId: this.props.trainingAttempt,
            });
          const [e, s] = this.getFeedbackComponents();
          return c().isFinite(this.props.throttleTimeMs)
            ? this.renderThrottlePage()
            : this.renderWithWrapper(
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    e,
                    this.renderTutorialProgress(),
                    this.renderTutorialHighlight(),
                    this.renderTaskPage(),
                    (0, n.jsx)(H.Z, {
                      showingInstructions: this.state.showingInstructions,
                      trainingScenario: this.props.trainingScenario,
                      startTraining: this.startTraining,
                    }),
                    s,
                    this.renderScenarioUpdated(),
                  ],
                })
              );
        }
        constructor(e, s) {
          super(e, s),
            (this.updateHighlightedElement = () => {
              var e, s, t;
              const { currentTutorialStep: n } = this.state,
                i =
                  null === (e = this.props.trainingScenario) ||
                  void 0 === e ||
                  null === (s = e.tutorialSteps) ||
                  void 0 === s ||
                  null === (t = s[n]) ||
                  void 0 === t
                    ? void 0
                    : t.highlightCSSClass;
              var r, a;
              const o =
                i &&
                (null !==
                  (a =
                    null !== (r = document.getElementsByClassName(i)[0]) &&
                    void 0 !== r
                      ? r
                      : document.getElementById(i)) && void 0 !== a
                  ? a
                  : document.querySelector(i));
              o !== this.state.highlightedElement &&
                this.setState({ highlightedElement: o });
            }),
            (this.showLeaderboard = () =>
              this.setState({ showingLeaderboard: !0 })),
            (this.hideLeaderboard = () =>
              this.setState({ showingLeaderboard: !1 })),
            (this.showSummary = () => this.setState({ showingSummary: !0 })),
            (this.hideSummary = () => this.setState({ showingSummary: !1 }));
          var t = this;
          (this.submitScenarioEdit = (function () {
            var e = je(function* (e) {
              const s = { type: t.props.trainingScenario.taskType };
              yield (0,
              A.ZP)(null, `internal/training/update/${t.props.trainingScenario._id}`, { method: "POST", query: we({}, e ? { isAnswerKey: 1 } : {}), body: s });
            });
            return function (s) {
              return e.apply(this, arguments);
            };
          })()),
            (this.getOCRTextUrls = (0, oe.default)((e) =>
              c().compact(e.map((e) => e.ocrTextUrl))
            )),
            (this.transformToAssignment = (0, oe.default)(de.Z)),
            (this.getFeedbackComponents = () => {
              const e = this.props.trainingScenario.taskType;
              return e === _.TaskType.NamedEntityRecognition
                ? [this.render2DScenarioHeader(), this.renderNERFeedback()]
                : e === _.TaskType.TextCollection
                ? [
                    this.render2DScenarioHeader(),
                    this.renderTextCollectionFeedback(),
                  ]
                : e === _.TaskType.DocumentTranscription
                ? [
                    this.render2DScenarioHeader(),
                    this.renderDocumentTranscriptionFeedback(),
                  ]
                : e === _.TaskType.Chat ||
                  e === _.TaskType.ChatExperimental ||
                  e === _.TaskType.ChatV2
                ? [this.render2DScenarioHeader(), this.renderChatFeedback()]
                : [this.render2DScenarioHeader(), this.render2DFeedback()];
            }),
            (0, P.Z)(
              this,
              "onSubmit",
              "startTraining",
              "retryTraining",
              "waitForLoad",
              "makeChanges",
              "renderWithWrapper",
              "onTutorialInteraction",
              "getSubmitDisabledStatus",
              "updateHighlightedElement",
              "exit"
            ),
            (this.task = l.createRef());
        }
      }
      (Se.getPageConfig = () => ({
        user: {
          authorize: (function () {
            var e = me(function* (e) {
              const {
                  query: {
                    trainingId: s,
                    attemptId: t,
                    edit_scenario: n,
                    edit_answer_key: i,
                    edit_diff: r,
                    retry: a,
                    view_initial_response: o,
                  },
                  user: d,
                } = e,
                c = !!d.trainerProject;
              if (!s && !t) return [!1];
              let l;
              if (t)
                l = yield (0, A.ZP)(e, `internal/training/view/${t}`, {
                  query: o ? { with_initial_cuboids: 1 } : {},
                });
              else if ((n || i || r) && c) {
                const t = yield (0, A.ZP)(e, `internal/training/edit/${s}`);
                l = xe({}, t, {
                  trainingAttempt: r
                    ? t.trainingScenario._id
                    : t.trainingScenario.params[
                        i ? "answerScene" : "initialScene"
                      ],
                });
              } else
                l = yield (0, A.ZP)(
                  e,
                  `internal/training/begin/${s}${a ? "?retry=1" : ""}`
                );
              return {
                success:
                  !l ||
                  !(0, O.isTaskTypeLidar)(
                    _.TaskType[l.trainingScenario.taskType]
                  ) ||
                  (yield (0, pe.em)({ context: e })),
                cache: l,
              };
            });
            return function (s) {
              return e.apply(this, arguments);
            };
          })(),
          kinds: ["worker", "expert"],
          required: !0,
        },
      })),
        (Se.getInitialProps = ge);
      const Te = l.memo(function (e) {
        return (
          l.useEffect(() => {
            const s = new URLSearchParams(window.location.search),
              t = Object.fromEntries(s.entries()),
              n = { sceneId: e.trainingAttemptId };
            t.spoof && (n.spoof = t.spoof),
              (window.location.href = (0, fe.vI)(n));
          }, [e.trainingAttemptId]),
          (0, n.jsx)("p", { children: "Loading LidarLite..." })
        );
      });
    },
  },
]);
