(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [17837],
  {
    683489: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return j;
        },
      });
      var r = n(824246),
        o = n(205353),
        i = n(287847),
        a = n(830155),
        u = n(837302),
        s = n(842659),
        c = n(599789),
        d = n(389401);
      var l = n(527565);
      var f = n(913627),
        p = n(519215),
        v = n(938060),
        y = n(621576),
        x = n(583469),
        b = n(298784),
        m = n.n(b);
      const g = ({ projectId: e, userId: t, reviewLevel: n }) => {
        var o, i;
        const { isLoading: s, data: c } = (({ projectId: e, userId: t }) =>
            (0, d.a)(
              ["project", e, "summary"],
              async () =>
                (0, l.ZP)(`/internal/user-projects/${t}/project/${e}/summary`),
              { enabled: !!e && "all-project-ids" !== e }
            ))({ projectId: e, userId: t }),
          b = null === c || void 0 === c ? void 0 : c.name,
          g =
            null !==
              (i =
                null ===
                  (o =
                    null === c || void 0 === c
                      ? void 0
                      : c.genAIProjectTypes) || void 0 === o
                  ? void 0
                  : o.join(", ")) && void 0 !== i
              ? i
              : "",
          T = null === c || void 0 === c ? void 0 : c.description,
          { isLoading: h, data: k } = ((e, t) =>
            (0, d.a)({
              queryKey: ["project-pay-rate-info", e, t],
              queryFn: async () => {
                const n = new URLSearchParams(
                  Object.assign(
                    { projectId: e },
                    t ? { reviewLevel: t.toString() } : {}
                  )
                );
                return (0, l.ZP)(
                  `/internal/scaler/pay_rate_card?${n.toString()}`
                );
              },
              select: (e) => e.payRateInfo,
            }))(e, n),
          j = s || h,
          { baseRate: w, payTypeEnding: A } =
            ((E = k),
            m().isNil(E)
              ? {
                  baseRate: void 0,
                  trainingRate: void 0,
                  payTypeEnding: "hour",
                }
              : m().isNil(E.payPerTaskBaseRate)
              ? {
                  baseRate: E.hourlyRate,
                  trainingRate: E.trainingHourlyRate,
                  payTypeEnding: "hour",
                }
              : {
                  baseRate: E.payPerTaskBaseRate,
                  trainingRate: E.payPerTaskTrainingRate,
                  payTypeEnding: "task",
                });
        var E;
        return (0, r.jsx)(f.O, {
          loading: j,
          minHeight: "80px",
          children: (0, r.jsx)(p.Z, {
            size: "1",
            children: (0, r.jsxs)(a.kC, {
              p: "1",
              children: [
                (0, r.jsx)(a.xu, {
                  className: "flex-none w-2/3",
                  children: (0, r.jsxs)(a.kC, {
                    direction: "column",
                    gap: "1",
                    children: [
                      (0, r.jsx)(u.xv, {
                        size: "1",
                        color: "neutral",
                        weight: "medium",
                        children: g,
                      }),
                      (0, r.jsx)(u.xv, {
                        size: "5",
                        weight: "medium",
                        style: {
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        },
                        children: b,
                      }),
                      (0, r.jsx)(u.xv, {
                        size: "1",
                        color: "neutral",
                        style: {
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        },
                        children: T,
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(a.xu, {
                  className: "flex-none w-1/3",
                  children: (0, r.jsx)(a.kC, {
                    justify: "center",
                    align: "center",
                    className: "h-full",
                    children: (0, r.jsxs)(a.kC, {
                      direction: "column",
                      children: [
                        (0, r.jsxs)(a.kC, {
                          children: [
                            (0, r.jsx)(u.xv, {
                              size: "4",
                              weight: "medium",
                              children: w ? `$${w.toFixed(2)}` : "--",
                            }),
                            (0, r.jsxs)(u.xv, {
                              size: "4",
                              weight: "medium",
                              color: "neutral",
                              children: ["/", A],
                            }),
                          ],
                        }),
                        (0, r.jsx)(u.xv, {
                          size: "1",
                          weight: "light",
                          color: "neutral",
                          children: (0, r.jsxs)(a.kC, {
                            direction: "row",
                            align: "center",
                            gap: "1",
                            children: [
                              "Deliverable rate",
                              (0, r.jsx)(v.u, {
                                content:
                                  "The rate you are paid while working on tasks that will be delivered to the customer.",
                                children: (0, r.jsx)(y.J, {
                                  size: "1",
                                  label: "icon",
                                  icon: x.sqG,
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
      var T = n(827378),
        h = n(3396);
      const k = new Map([
          ["-1", c.ReviewLevel.Attempt],
          ["0", c.ReviewLevel.Normal],
          ["1", c.ReviewLevel.Level1],
          ["4", c.ReviewLevel.ReviewConsensus],
          ["10", c.ReviewLevel.Corp],
        ]),
        j = ({
          setProjectId: e,
          setReviewLevel: t,
          setShowProjectModal: n,
          onClick: d,
        }) => {
          var l, f;
          const { isLoading: p, data: v } = (0, h.y)(),
            { data: y, isLoading: x } = (0, o.a)({
              statuses: [c.ProductNotificationStatus.Unread],
              refetchInterval: 3e4,
            }),
            b =
              null ===
                (f =
                  null ===
                    (l =
                      null === y || void 0 === y
                        ? void 0
                        : y.DirectAssignModal) || void 0 === l
                    ? void 0
                    : l.filter(
                        (e) => e.status === c.ProductNotificationStatus.Unread
                      )) || void 0 === f
                ? void 0
                : f[0],
            { mutate: m, isLoading: j } = (0, i.y)(),
            [w, A] = (0, T.useState)(!0);
          if (x || j || p) return null;
          if (!b || !("content" in b)) return null;
          const {
            projectId: E,
            reviewLevel: P,
            partialPayAmountCents: S,
          } = b.content;
          e && e(E), t && t(k.get(P));
          const R = k.get(P),
            C = Number(S);
          return (0, r.jsx)(a.Vq.fC, {
            open: w,
            children: (0, r.jsx)(a.Vq.VY, {
              children: (0, r.jsx)("div", {
                className: "scale-tailwind",
                children: (0, r.jsxs)(a.kC, {
                  direction: "column",
                  gap: "4",
                  children: [
                    (0, r.jsx)(u.xv, {
                      size: "7",
                      children:
                        "You have been matched with a higher priority project",
                    }),
                    (0, r.jsx)(u.xv, {
                      size: "2",
                      children:
                        "Your expertise is needed for this higher priority project. During this time you will exclusively be on this project.",
                    }),
                    !isNaN(C) &&
                      C > 0 &&
                      (0, r.jsxs)(u.xv, {
                        size: "4",
                        color: "neutral",
                        weight: "medium",
                        children: [
                          "Earnings ",
                          (0, r.jsx)(u.xv, {
                            className: "text-[#171717]",
                            children:
                              ((L = 100 * C), `$${(L / 1e4).toFixed(2)}`),
                          }),
                        ],
                      }),
                    v &&
                      (0, r.jsx)(g, {
                        projectId: E,
                        userId: v._id,
                        reviewLevel: R,
                      }),
                    (0, r.jsx)(a.kC, {
                      justify: "end",
                      align: "center",
                      children: (0, r.jsx)(s.z, {
                        size: "3",
                        radius: "small",
                        variant: "solid",
                        className:
                          "w-[128px] bg-[#1B0030] cursor-pointer outline-none",
                        onClick: () => {
                          A(!1),
                            n && n(!0),
                            window.location.pathname.includes(
                              "/expert/tasks"
                            ) ||
                              m({
                                notificationId: b.id,
                                status:
                                  c.ProductNotificationStatus.Acknowledged,
                              }),
                            d && d();
                        },
                        children: (0, r.jsx)(u.xv, {
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
          var L;
        };
    },
    3396: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return i;
        },
      });
      var r = n(527565),
        o = n(389401);
      const i = () =>
        (0, o.a)(["logged-in-user"], async () =>
          (0, r.ZP)("/internal/logged_in_user")
        );
    },
    561102: function (e, t, n) {
      "use strict";
      n.d(t, {
        vb: function () {
          return r;
        },
        ZC: function () {
          return o;
        },
      });
      const r = (e, t = {}) => {
          const n = Object.assign({ showYear: !0 }, t);
          let r = new Date(e).toLocaleDateString("en-US", {
            dateStyle: "medium",
            timeZone: "UTC",
          });
          return n.showYear || (r = r.replace(/, \d{4}/, "")), `${r}`;
        },
        o = (e) => {
          const t = Math.floor(e / 3600),
            n = Math.floor((e % 3600) / 60),
            r = Math.floor(e % 60);
          return `${t ? `${t}h ` : ""}${n || (!n && t && r) ? `${n}m ` : ""}${
            r ? `${r.toFixed(0)}s` : ""
          }`;
        };
    },
    842659: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var r = n(830155);
      const o = (0, n(179420).b)(r.zx);
    },
    519215: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(830155);
      const o = (0, n(179420).b)(r.Zb);
    },
    913627: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return o;
        },
      });
      var r = n(830155);
      const o = (0, n(179420).b)(r.Od);
    },
    938060: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return o;
        },
      });
      var r = n(830155);
      const o = (0, n(179420).b)(r.u);
    },
    935760: function (e, t) {
      "use strict";
      t.Z = void 0;
      var n = () =>
        ((new Date().getTime() / 1e3) | 0).toString(16) +
        "xxxxxxxxxxxxxxxx"
          .replace(/[x]/g, () => ((16 * Math.random()) | 0).toString(16))
          .toLowerCase();
      t.Z = n;
    },
    451674: function (e, t, n) {
      "use strict";
      t.Z = function (e) {
        const t = e.params,
          n = {
            isQueue: !0,
            projectName: c(e.project),
            projectId: d(e.project),
            type: e.type,
            params: t,
            lintVerdict: e.lintVerdict,
            lintResults: e.lintResults,
            legacyLidarExpirationDate: e.legacyLidarExpirationDate,
            feedbackTemplate: e.feedbackTemplate,
            bid: e.bid,
            location: e.location,
            metadata: e.metadata,
            isTutorialBenchmark: e.isTutorialBenchmark,
            tutorialResponse: e.isTutorialBenchmark
              ? e.tutorialResponse
              : void 0,
            tutorialMode: e.isTutorialBenchmark ? e.tutorialMode : void 0,
            expectedResponse: e.isTutorialBenchmark
              ? e.expectedResponse
              : void 0,
            preventSkip: e.preventSkip,
            isInitialBenchmark: e.isInitialBenchmark,
            projectConfig: e.projectConfig,
            taskTemplateVersion: e.taskTemplateVersion,
            modelEvalRun: e.modelEvalRun,
          },
          r =
            e.fixResponse?.inlineComments ??
            t?.hypothesis?.inlineComments ??
            [];
        if (o.isLegacyReviewAssignment(e)) {
          const t = e?.subtask?.reviewLevel ?? e?.reviewLevel ?? -1,
            o = -1 === t ? "?" : `${t}`,
            i = {
              reviewLevel: t,
              assignmentId: e.attemptId,
              subtaskId: e.id,
              initialInlineComments: r,
              loggedUserDisplayName: `R${o}`,
              ...n,
            };
          if ("feedbackMultiResponses" in e) {
            return {
              isReview: !0,
              isFeedback: !0,
              feedbackMultiResponses: f(e),
              existingAudit: e?.existingAudit,
              ...i,
            };
          }
          return { isReview: !0, isFeedback: !1, ...i };
        }
        {
          const t = {};
          return (
            "feedbackMultiResponses" in e && (t.feedbackMultiResponses = f(e)),
            {
              initialInlineComments: r,
              isReview: !1,
              isFeedback: !1,
              assignmentId: e.id,
              loggedUserDisplayName: "A",
              ...n,
              ...t,
            }
          );
        }
      };
      var r,
        o = n(791257),
        i = (r = n(298784)) && r.__esModule ? r : { default: r },
        a = n(230046),
        u = n(308408),
        s = n(167469);
      function c(e) {
        if ("string" === typeof e) return "";
        const t = i.default.get(e, "taskType", "");
        return i.default.get(e, ["permissionGroup", "title"], t);
      }
      function d(e) {
        return "string" === typeof e ? e : i.default.get(e, "_id", "");
      }
      const l = Object.freeze([
        s.TaskType.ImageAnnotation,
        s.TaskType.PointAnnotation,
        s.TaskType.LineAnnotation,
        s.TaskType.Annotation,
        s.TaskType.CuboidAnnotation,
        s.TaskType.PolygonAnnotation,
      ]);
      function f(e) {
        return i.default.map(e.feedbackMultiResponses, (t) => {
          if (l.includes(e.type)) {
            const n = t.response?.annotations,
              r = (function (e) {
                const t = e.type || e.taskType;
                return (
                  u.taskTypeToGeometry[t] ||
                  i.default.first(
                    i.default.keys(i.default.get(e.params, "geometries"))
                  )
                );
              })(e),
              o = a.convertAnnotations(n, r);
            return { ...t, response: { ...t.response, annotations: o } };
          }
          return t;
        });
      }
    },
    832561: function (e, t) {
      "use strict";
      t.Z = function (e) {
        return !!e.isReview;
      };
    },
    628556: function (e, t) {
      "use strict";
      (t.pv = function (e, t, n) {
        let r = e + ((1 - e) * (n - t) ** 2) / (1 - t) ** 2;
        r > 1 && (r = 1);
        return r;
      }),
        (t.JM = function (e, t) {
          return Math.floor(((e * t) / 1e4) * 100) / 100;
        });
    },
    524991: function (e, t) {
      "use strict";
      var n;
      (t.ZP = t.Go = void 0),
        (function (e) {
          (e.NebulaSemSeg = "5b27197d756c320019a1946a"),
            (e.SelectedV20TrainBs = "5d2929f66822fe0e736de49a"),
            (e.SelectedV23TrdevBs = "5d4b04fc55dfee0e6f41164a"),
            (e.SelectedV24DevBs = "5d4b05bc52b6580e7469835b"),
            (e.SwanLidar = "5b10952d36e66c2556ca1c66"),
            (e.TidalSemSeg1 = "5c86efe8403d38004f55c61d"),
            (e.ZooxSteamExhaustV2 = "5d391a09c1523f5ff7fe72a4"),
            (e.FalconExtendedRangeLinking = "5f6a0b2f0d4b11002c19ec05"),
            (e.FalconExtendedRangeLinkingSparse = "614d0e838d806d00346261ed"),
            (e.FalconExtendedRangeLinkingDense = "614d1397464b0d13db714167"),
            (e.FalconFramelessExtendedRangeLinking =
              "60ed32583bdc1800a54cead8"),
            (e.FalconHard = "60a40859c2730b00181e848e"),
            (e.BeeVilseck = "610356d5b451e50033afb1ac"),
            (e.WhaleLSS = "5c6f6427f81bf20050971ced");
        })(n || (n = {}));
      const r = {
        [n.FalconExtendedRangeLinking]: 15,
        [n.FalconExtendedRangeLinkingSparse]: 15,
        [n.FalconExtendedRangeLinkingDense]: 15,
        [n.FalconFramelessExtendedRangeLinking]: 10,
        [n.FalconHard]: 15,
      };
      t.Go = r;
      var o = n;
      t.ZP = o;
    },
    611539: function (e, t) {
      "use strict";
      var n, r, o, i;
      (t.Pd = t.Tt = t.ps = t.OY = void 0),
        (t.OY = n),
        (function (e) {
          (e.Attempt = "attempt"),
            (e.Review = "review"),
            (e.Reward = "reward"),
            (e.WorkLog = "worklog"),
            (e.QAOperationAssignment = "qaOperationAssignment"),
            (e.HubstaffOperation = "hubstaffOperation"),
            (e.CrCOperation = "crcOperation"),
            (e.IncompleteAttempt = "incompleteAttempt"),
            (e.Other = "other");
        })(n || (t.OY = n = {})),
        (t.ps = r),
        (function (e) {
          (e.Prepay = "prepay"),
            (e.Pay = "pay"),
            (e.CourseReward = "courseReward"),
            (e.BonusReward = "bonusReward"),
            (e.ManualReward = "manualReward"),
            (e.MissionReward = "missionReward"),
            (e.TrainingTask = "trainingTask"),
            (e.QualityBasedPay = "qualityBasedPay"),
            (e.PayAdjustment = "payAdjustment"),
            (e.ReferralReward = "referralReward"),
            (e.HubstaffOperation = "hubstaffOperation"),
            (e.CrCOperation = "crowd compute"),
            (e.WorkLog = "workLog"),
            (e.OvertimePay = "overtimePay"),
            (e.IncompleteAttempt = "incompleteAttempt"),
            (e.Other = "other");
        })(r || (t.ps = r = {})),
        (t.Tt = o),
        (function (e) {
          (e[(e.Amount = 1)] = "Amount"),
            (e[(e.Pay = 2)] = "Pay"),
            (e[(e.Bundle = 3)] = "Bundle");
        })(o || (t.Tt = o = {})),
        (t.Pd = i),
        (function (e) {
          (e.All = "all"), (e.Pending = "pending"), (e.Paid = "paid");
        })(i || (t.Pd = i = {}));
    },
    720408: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.validateIsTaskFeedbackTemplate = l),
        (t.validateIsFeedbackEntry = function (e) {
          return !v(e);
        }),
        (t.getFeedbackTemplateErr = f),
        (t.getFeedbackEntriesError = p),
        (t.getFeedbackEntryErr = v),
        (t.filterEntriesByReviewLevel =
          t.hasFeedbackTemplateForType =
          t.asFeedbackEntryChoice =
          t.defaultsFeedbackConditions =
          t.RRS_FEEDBACK_TO_TASKER_TITLE =
          t.reviewerRatingFeedbackEntry =
          t.blankFeedbackEntry =
          t.FeedbackConditions =
          t.TaskFeedbackInput =
            void 0);
      var r,
        o,
        i,
        a = (r = n(298784)) && r.__esModule ? r : { default: r };
      (t.TaskFeedbackInput = o),
        (function (e) {
          (e.Text = "text"),
            (e.Select = "select"),
            (e.MultiSelect = "multiSelect");
        })(o || (t.TaskFeedbackInput = o = {})),
        (t.FeedbackConditions = i),
        (function (e) {
          (e.Accept = "accept"),
            (e.SBTQ = "sbtq"),
            (e.MakeChanges = "makeChanges");
        })(i || (t.FeedbackConditions = i = {}));
      const u = { inputType: o.Select, title: "", choices: [], required: !0 };
      t.blankFeedbackEntry = u;
      const s = {
        inputType: o.Select,
        title: "Rate the quality of this task when you first received it",
        choices: [
          { label: "\u2b50\ufe0f", value: 1 },
          { label: "\u2b50\ufe0f\u2b50\ufe0f", value: 2 },
          { label: "\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f", value: 3 },
          {
            label: "\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",
            value: 4,
          },
          {
            label:
              "\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f",
            value: 5,
          },
        ],
        required: !0,
      };
      t.reviewerRatingFeedbackEntry = s;
      const c = "Feedback to previous tasker";
      t.RRS_FEEDBACK_TO_TASKER_TITLE = c;
      const d = {
        [i.Accept]: [s],
        [i.SBTQ]: [s, { inputType: o.Text, title: c, required: !0 }],
        [i.MakeChanges]: [s, { inputType: o.Text, title: c, required: !0 }],
      };
      function l(e) {
        return !f(e);
      }
      t.defaultsFeedbackConditions = d;
      function f(e) {
        if (
          !a.default.every(a.default.keys(e), (e) =>
            a.default.includes(a.default.values(i), e)
          )
        )
          return `Template categories must be one of ${Object.values(i).join(
            ", "
          )}. The following entries do not match:\n    ${a.default
            .filter(a.default.keys(e), (e) =>
              a.default.includes(a.default.values(i), e)
            )
            .join(", ")}`;
        for (const [t, n] of a.default.entries(e)) {
          const e = p(n);
          if (e) return `Problem with "${t}": ${e}.`;
        }
        return "object" !== typeof e
          ? "Feedback template must be an object"
          : "";
      }
      function p(e) {
        if (!Array.isArray(e)) return "Feedback entries must be an array";
        let t = 0;
        for (const n of e) {
          const r = v(n);
          if (r) return `Item ${t + 1} of ${e.length}: ${r}`;
          t++;
        }
        return "";
      }
      function v(e) {
        return e
          ? e.inputType
            ? a.default.some(o, (t) => t === e.inputType)
              ? e.title && a.default.isString(e.title)
                ? e.description && !a.default.isString(e.description)
                  ? "must have a nonempty description field (that is a string)"
                  : a.default.includes(
                      [o.Select, o.MultiSelect],
                      e.inputType
                    ) && a.default.isEmpty(e.choices)
                  ? "Select and Multiselect input types must have a nonempty list of choices"
                  : ""
                : "must have a nonempty title field (that is a string)"
              : `inputType must be one of ${Object.values(o).join(", ")}`
            : "lacks inputType field"
          : "is null or undefined";
      }
      t.asFeedbackEntryChoice = (e) =>
        "string" === typeof e ? { label: e, value: e } : e;
      t.hasFeedbackTemplateForType = (e, t) =>
        !a.default.isNil(t) && l(t) && e in t;
      t.filterEntriesByReviewLevel = (e, t) =>
        e.filter(
          (e) =>
            !(e.reviewLevels && !a.default.isUndefined(t)) ||
            e.reviewLevels.includes(t)
        );
    },
    948925: function (e, t) {
      "use strict";
      t.Rq = t.pr = void 0;
      var n;
      (t.pr = "g-recaptcha-response"),
        (t.Rq = n),
        (function (e) {
          (e.NUM_BACKSPACES = "numBackspaces"),
            (e.AVG_BACKSPACE_LENGTH = "avgBackspaceLength"),
            (e.MAX_BACKSPACE_LENGTH = "maxBackspaceLength"),
            (e.NUM_OF_COPY_PASTE = "numOfCopyPaste"),
            (e.AVG_COPY_PASTE_LENGTH = "avgCopyPasteLength"),
            (e.MAX_COPY_PASTE_LENGTH = "maxCopyPasteLength"),
            (e.ACTIVE_TIME_TYPING = "activeTimeTyping"),
            (e.NUM_AUTOTYPER_DETECTED = "numAutotyperDetected"),
            (e.TOTAL_CHANGES = "totalChanges"),
            (e.NUM_MOUSE_LEAVES = "numMouseLeaves"),
            (e.COPY_TEXT_LOG = "copyTextLog"),
            (e.MAX_COPY_TEXT_LENGTH = "maxCopyTextLength"),
            (e.MIN_COPY_TEXT_LENGTH = "minCopyTextLength"),
            (e.AVG_COPY_TEXT_LENGTH = "avgCopyTextLength"),
            (e.NUM_COPY_EVENTS = "numCopyEvents"),
            (e.PASTE_TEXT_LOG = "pasteTextLog"),
            (e.MAX_PASTE_TEXT_LENGTH = "maxPasteTextLength"),
            (e.MIN_PASTE_TEXT_LENGTH = "minPasteTextLength"),
            (e.AVG_PASTE_TEXT_LENGTH = "avgPasteTextLength"),
            (e.NUM_PASTE_EVENTS = "numPasteEvents");
        })(n || (t.Rq = n = {}));
    },
    118888: function (e, t, n) {
      "use strict";
      (t.zs = function (e, t = !1) {
        return (
          u.includes(e) ||
          (t && e === i.WorkerSource.ScaleAPI) ||
          e === i.WorkerSource.SandboxTestAccount
        );
      }),
        (t.KD = void 0);
      var r,
        o = (r = n(298784)) && r.__esModule ? r : { default: r },
        i = n(599789);
      o.default.values(i.PayoutJobStep);
      const a = {
        [i.PayoutJobType.Mxqa]: [i.WorkerSource.Mxqa],
        [i.PayoutJobType.MxqaGenAI]: [i.WorkerSource.MxqaGenAI],
        [i.PayoutJobType.Crowd]: [i.WorkerSource.Crowd],
        [i.PayoutJobType.Mod]: i.ModWorkerSources,
        [i.PayoutJobType.QAaaS]: [i.WorkerSource.QAaaS],
        [i.PayoutJobType.Inqa]: [i.WorkerSource.Inqa],
        [i.PayoutJobType.Usqa]: [i.WorkerSource.Usqa],
        [i.PayoutJobType.HD]: [i.WorkerSource.HD],
        [i.PayoutJobType.BpoLXT]: [i.WorkerSource.BpoLXT],
        [i.PayoutJobType.BpoMLG]: [i.WorkerSource.BpoMLG],
        [i.PayoutJobType.SupportAgent]: [i.WorkerSource.SupportAgent],
        [i.PayoutJobType.Pilots]: [i.WorkerSource.Pilots],
        [i.PayoutJobType.CrowdBPO]: i.CrowdBPOWorkerSources,
        [i.PayoutJobType.Arqa]: [i.WorkerSource.Arqa],
        [i.PayoutJobType.LatamCoder]: [i.WorkerSource.LatamCoder],
        [i.PayoutJobType.PilotsQa]: [i.WorkerSource.PilotsQa],
        [i.PayoutJobType.QueueManager]: [i.WorkerSource.QueueManager],
        [i.PayoutJobType.QCRemote]: [i.WorkerSource.QCRemote],
      };
      const u = Object.values(a).flat();
      t.KD = u;
    },
    137609: function (e, t) {
      "use strict";
      var n, r, o;
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
        (t.FreezeReason = r),
        (function (e) {
          (e.Temporary = "Temporary"),
            (e.UnusualActivity = "Unusual activity"),
            (e.Outage = "Outage"),
            (e.Ban = "Ban");
        })(r || (t.FreezeReason = r = {})),
        (t.CancelReason = o),
        (function (e) {
          (e.Spam = "Spam"),
            (e.Fraud = "Fraud"),
            (e.Outage = "Outage"),
            (e.Expired = "Expired");
        })(o || (t.CancelReason = o = {}));
    },
    151785: function (e, t, n) {
      "use strict";
      t.ZP = void 0;
      var r,
        o = (r = n(298784)) && r.__esModule ? r : { default: r },
        i = n(45834);
      var a = async function e(
        t,
        {
          timesRetried: n = 0,
          limit: r = 5,
          delay: a = "exponential",
          onRetry: u = o.default.noop,
        } = {}
      ) {
        try {
          return await t();
        } catch (s) {
          if (0 === r) throw s;
          "exponential" === a
            ? await i.sleep(1e3 * 2 ** n)
            : o.default.isArray(a)
            ? await i.sleep(a[n])
            : await i.sleep(a);
          const c = { delay: a, limit: r - 1, timesRetried: n + 1 };
          return u(s, c), e(t, { ...c, onRetry: u });
        }
      };
      t.ZP = a;
    },
    682545: function (e, t, n) {
      var r = n(881822)(n(377400), "DataView");
      e.exports = r;
    },
    164825: function (e, t, n) {
      var r = n(881822)(n(377400), "Promise");
      e.exports = r;
    },
    546151: function (e, t, n) {
      var r = n(881822)(n(377400), "Set");
      e.exports = r;
    },
    966902: function (e, t, n) {
      var r = n(881822)(n(377400), "WeakMap");
      e.exports = r;
    },
    906446: function (e) {
      e.exports = function (e, t, n, r) {
        var o = -1,
          i = null == e ? 0 : e.length;
        for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
        return n;
      };
    },
    985630: function (e) {
      e.exports = function (e) {
        return e.split("");
      };
    },
    240585: function (e) {
      var t = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      e.exports = function (e) {
        return e.match(t) || [];
      };
    },
    155829: function (e, t, n) {
      var r = n(799736),
        o = n(992360);
      e.exports = function (e) {
        return o(e) && "[object Arguments]" == r(e);
      };
    },
    826972: function (e, t, n) {
      var r = n(799736),
        o = n(284194),
        i = n(992360),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return i(e) && o(e.length) && !!a[r(e)];
        });
    },
    220186: function (e, t, n) {
      var r = n(756016),
        o = n(950962),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return o(e);
        var t = [];
        for (var n in Object(e))
          i.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
    },
    317646: function (e) {
      e.exports = function (e) {
        return function (t) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    975733: function (e) {
      e.exports = function (e, t, n) {
        var r = -1,
          o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t),
          (n = n > o ? o : n) < 0 && (n += o),
          (o = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
        return i;
      };
    },
    739334: function (e) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    339158: function (e, t, n) {
      var r = n(975733);
      e.exports = function (e, t, n) {
        var o = e.length;
        return (n = void 0 === n ? o : n), !t && n >= o ? e : r(e, t, n);
      };
    },
    262690: function (e, t, n) {
      var r = n(339158),
        o = n(825348),
        i = n(863528),
        a = n(365567);
      e.exports = function (e) {
        return function (t) {
          t = a(t);
          var n = o(t) ? i(t) : void 0,
            u = n ? n[0] : t.charAt(0),
            s = n ? r(n, 1).join("") : t.slice(1);
          return u[e]() + s;
        };
      };
    },
    368267: function (e, t, n) {
      var r = n(906446),
        o = n(69689),
        i = n(93254),
        a = RegExp("['\u2019]", "g");
      e.exports = function (e) {
        return function (t) {
          return r(i(o(t).replace(a, "")), e, "");
        };
      };
    },
    604248: function (e, t, n) {
      var r = n(317646)({
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s",
      });
      e.exports = r;
    },
    303533: function (e, t, n) {
      var r = n(682545),
        o = n(444538),
        i = n(164825),
        a = n(546151),
        u = n(966902),
        s = n(799736),
        c = n(76532),
        d = "[object Map]",
        l = "[object Promise]",
        f = "[object Set]",
        p = "[object WeakMap]",
        v = "[object DataView]",
        y = c(r),
        x = c(o),
        b = c(i),
        m = c(a),
        g = c(u),
        T = s;
      ((r && T(new r(new ArrayBuffer(1))) != v) ||
        (o && T(new o()) != d) ||
        (i && T(i.resolve()) != l) ||
        (a && T(new a()) != f) ||
        (u && T(new u()) != p)) &&
        (T = function (e) {
          var t = s(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? c(n) : "";
          if (r)
            switch (r) {
              case y:
                return v;
              case x:
                return d;
              case b:
                return l;
              case m:
                return f;
              case g:
                return p;
            }
          return t;
        }),
        (e.exports = T);
    },
    825348: function (e) {
      var t = RegExp(
        "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
      );
      e.exports = function (e) {
        return t.test(e);
      };
    },
    173909: function (e) {
      var t =
        /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      e.exports = function (e) {
        return t.test(e);
      };
    },
    756016: function (e) {
      var t = Object.prototype;
      e.exports = function (e) {
        var n = e && e.constructor;
        return e === (("function" == typeof n && n.prototype) || t);
      };
    },
    950962: function (e, t, n) {
      var r = n(558023)(Object.keys, Object);
      e.exports = r;
    },
    318125: function (e, t, n) {
      e = n.nmd(e);
      var r = n(139120),
        o = t && !t.nodeType && t,
        i = o && e && !e.nodeType && e,
        a = i && i.exports === o && r.process,
        u = (function () {
          try {
            var e = i && i.require && i.require("util").types;
            return e || (a && a.binding && a.binding("util"));
          } catch (t) {}
        })();
      e.exports = u;
    },
    558023: function (e) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    863528: function (e, t, n) {
      var r = n(985630),
        o = n(825348),
        i = n(84890);
      e.exports = function (e) {
        return o(e) ? i(e) : r(e);
      };
    },
    84890: function (e) {
      var t = "[\\ud800-\\udfff]",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        r = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        i = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        a = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        u = "(?:" + n + "|" + r + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?",
        c =
          s + u + ("(?:\\u200d(?:" + [o, i, a].join("|") + ")" + s + u + ")*"),
        d = "(?:" + [o + n + "?", n, i, a, t].join("|") + ")",
        l = RegExp(r + "(?=" + r + ")|" + d + c, "g");
      e.exports = function (e) {
        return e.match(l) || [];
      };
    },
    797025: function (e) {
      var t = "\\u2700-\\u27bf",
        n = "a-z\\xdf-\\xf6\\xf8-\\xff",
        r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        o =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        i = "[" + o + "]",
        a = "\\d+",
        u = "[\\u2700-\\u27bf]",
        s = "[" + n + "]",
        c = "[^\\ud800-\\udfff" + o + a + t + n + r + "]",
        d = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        f = "[" + r + "]",
        p = "(?:" + s + "|" + c + ")",
        v = "(?:" + f + "|" + c + ")",
        y = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
        x = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
        b =
          "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
        m = "[\\ufe0e\\ufe0f]?",
        g =
          m +
          b +
          ("(?:\\u200d(?:" +
            ["[^\\ud800-\\udfff]", d, l].join("|") +
            ")" +
            m +
            b +
            ")*"),
        T = "(?:" + [u, d, l].join("|") + ")" + g,
        h = RegExp(
          [
            f + "?" + s + "+" + y + "(?=" + [i, f, "$"].join("|") + ")",
            v + "+" + x + "(?=" + [i, f + p, "$"].join("|") + ")",
            f + "?" + p + "+" + y,
            f + "+" + x,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            a,
            T,
          ].join("|"),
          "g"
        );
      e.exports = function (e) {
        return e.match(h) || [];
      };
    },
    698052: function (e, t, n) {
      var r = n(365567),
        o = n(276744);
      e.exports = function (e) {
        return o(r(e).toLowerCase());
      };
    },
    69689: function (e, t, n) {
      var r = n(604248),
        o = n(365567),
        i = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        a = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
      e.exports = function (e) {
        return (e = o(e)) && e.replace(i, r).replace(a, "");
      };
    },
    802900: function (e, t, n) {
      var r = n(155829),
        o = n(992360),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        s = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (e) {
              return o(e) && a.call(e, "callee") && !u.call(e, "callee");
            };
      e.exports = s;
    },
    280068: function (e, t, n) {
      var r = n(828338),
        o = n(284194);
      e.exports = function (e) {
        return null != e && o(e.length) && !r(e);
      };
    },
    643854: function (e, t, n) {
      e = n.nmd(e);
      var r = n(377400),
        o = n(57714),
        i = t && !t.nodeType && t,
        a = i && e && !e.nodeType && e,
        u = a && a.exports === i ? r.Buffer : void 0,
        s = (u ? u.isBuffer : void 0) || o;
      e.exports = s;
    },
    284194: function (e) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    248519: function (e, t, n) {
      var r = n(826972),
        o = n(739334),
        i = n(318125),
        a = i && i.isTypedArray,
        u = a ? o(a) : r;
      e.exports = u;
    },
    57714: function (e) {
      e.exports = function () {
        return !1;
      };
    },
    276744: function (e, t, n) {
      var r = n(262690)("toUpperCase");
      e.exports = r;
    },
    93254: function (e, t, n) {
      var r = n(240585),
        o = n(173909),
        i = n(365567),
        a = n(797025);
      e.exports = function (e, t, n) {
        return (
          (e = i(e)),
          void 0 === (t = n ? void 0 : t)
            ? o(e)
              ? a(e)
              : r(e)
            : e.match(t) || []
        );
      };
    },
    448635: function (e, t, n) {
      "use strict";
      var r = n(145710);
      t.Z = function (e) {
        (0, r.Z)(function () {
          return e;
        });
      };
    },
    239447: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(827378),
        o = n(448635),
        i = function (e) {
          var t = (0, r.useRef)(0),
            n = (0, r.useState)(e),
            i = n[0],
            a = n[1],
            u = (0, r.useCallback)(function (e) {
              cancelAnimationFrame(t.current),
                (t.current = requestAnimationFrame(function () {
                  a(e);
                }));
            }, []);
          return (
            (0, o.Z)(function () {
              cancelAnimationFrame(t.current);
            }),
            [i, u]
          );
        },
        a = n(636618),
        u = function (e, t) {
          void 0 === e && (e = 1 / 0), void 0 === t && (t = 1 / 0);
          var n = i({
              width: a.C ? window.innerWidth : e,
              height: a.C ? window.innerHeight : t,
            }),
            o = n[0],
            u = n[1];
          return (
            (0, r.useEffect)(function () {
              if (a.C) {
                var e = function () {
                  u({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  window.addEventListener("resize", e),
                  function () {
                    window.removeEventListener("resize", e);
                  }
                );
              }
            }, []),
            o
          );
        };
    },
  },
]);
