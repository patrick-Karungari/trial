"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [75143],
  {
    947072: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
        A: function () {
          return w;
        },
      });
      var i = n(824246),
        o = n(679892),
        r = n.n(o),
        s = n(298784),
        a = n.n(s),
        c = n(827378),
        d = n(208528),
        u = n(60042),
        l = n.n(u),
        p = n(792739),
        f = n(773851),
        m = n(942662),
        h = n(411356),
        y = n(802638),
        b = n(775222),
        g = n(599789),
        S = n(167469),
        T = n(369985);
      const x = {
          [g.BasicLidarCorruptions.BasicLabel]: "Labels / Attributes",
          [g.BasicLidarCorruptions.BasicAttribute]: "Labels / Attributes",
          [g.BasicLidarCorruptions.BasicRecall]:
            "Missing / Unnecessary Cuboids",
          [g.BasicLidarCorruptions.BasicRecallPedestrian]:
            "Missing Pedestrian Cuboids",
          [g.BasicLidarCorruptions.BasicZ]: "Cuboids Don't Touch the Ground",
          [g.BasicLidarCorruptions.BasicPosition]:
            "Position, Cuboids are Not Centered",
          [g.BasicLidarCorruptions.BasicSize]: "Sizing, Missing Points",
          [g.BasicLidarCorruptions.BasicMissingKeyframe]:
            "Position / Sizing at Each Frame",
          [g.BasicLidarCorruptions.BasicParkedAttribute]:
            "Stationary Vehicle Not Parked",
          [g.BasicVideoCorruptions.Height]: "Box Sizing",
          [g.BasicVideoCorruptions.SingleFrameSize]: "Box Sizing",
          [g.BasicVideoCorruptions.GroupedAttribute]: "Labels / Attributes",
          [g.BasicVideoCorruptions.Attribute]: "Labels / Attributes",
          [g.BasicVideoCorruptions.GlobalPathAttributeText]:
            "Annotation Path Attribute",
          [g.BasicLidarSegCorruptions.Label]: "Incorrect Instance Labels",
          [g.BasicLidarSegCorruptions.Instance]: "Instances Must be Unique",
          [g.BasicTextCollectionCorruptions.RemoveCategory]:
            "Missing Categories",
          [g.BasicTextCollectionCorruptions.RemoveItem]: "Missing Items",
          [g.BasicTextCollectionCorruptions.RemovePrice]: "Incorrect Prices",
          [g.BasicTextCollectionCorruptions.RemoveExtra]: "Missing Extras",
          [g.BasicTextCollectionCorruptions.RemoveOption]: "Missing Options",
          [g.BasicTextCollectionCorruptions.MutatePrice]: "Incorrect Prices",
          [g.BasicTextCollectionCorruptions.RemoveModel]: "Missing Model",
          [g.BasicTextCollectionCorruptions.MutateProductDescription]:
            "Incorrect Description",
          [g.BasicTextCollectionCorruptions.MutateUPC]: "Incorrect UPC",
          [g.BasicSemsegCorruptions.Label]: "Incorrect Labels",
          [g.BasicImageCorruptions.Missing]: "Missing Annotation",
          [g.BasicImageCorruptions.Extraneous]: "Extraneous Annotation",
          [g.BasicDocumentCorruptions.Typo]: "Incorrect Labels",
        },
        k = (0, f.remotasksURL)("/feedback"),
        v = (0, f.remotasksURL)("/activity");
      function C({
        corruptionAccuracy: e = -1,
        improvedAccuracyCorruptionTypes: t = [],
        lowAccuracyCorruptionTypes: n = [],
        taskType: o,
      }) {
        const [s, a] = (0, d.Z)(!1),
          [c, u] = (0, d.Z)(!0),
          l = n.length > 0;
        return (0, i.jsxs)(y.u_, {
          contentLabel: "CorruptionWarning",
          maxWidth: "500px",
          isOpen: c,
          children: [
            (0, i.jsxs)(T.kn, {
              children: [
                (0, i.jsx)(T.pH, {
                  icon: l ? "lightbulb-exclamation" : "badge-check",
                  color: l ? "#000000" : "#19B629",
                }),
                l
                  ? "Your last review had quality issues"
                  : "Your last review had high quality",
              ],
            }),
            (0, i.jsx)(T.Ys, {
              children: (0, i.jsx)(w, {
                corruptionAccuracy: e,
                improvedAccuracyCorruptionTypes: t,
                lowAccuracyCorruptionTypes: n,
                taskType: o,
              }),
            }),
            (0, i.jsxs)(T.tu, {
              children: [
                (0, i.jsx)("div", {
                  className: "jsx-9ffbd012d7916494 checkbox",
                  children: (0, i.jsxs)(h.__, {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    },
                    children: [
                      (0, i.jsx)(h.o2, { checked: s, onChange: a }),
                      (0, i.jsx)("span", {
                        className: "jsx-9ffbd012d7916494 guidelines",
                        children: "I agree to the reviewing guidelines",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "jsx-9ffbd012d7916494 submit",
                  children: (0, i.jsx)(m.Z, {
                    type: "primary",
                    disabled: l && !s,
                    onClick: u,
                    style: { width: "100%" },
                    children: "Begin Task",
                  }),
                }),
              ],
            }),
            (0, i.jsx)(r(), {
              id: "9ffbd012d7916494",
              children:
                ".checkbox.jsx-9ffbd012d7916494{-webkit-flex:1 0 68%;-ms-flex:1 0 68%;flex:1 0 68%;margin-right:2%}.guidelines.jsx-9ffbd012d7916494{margin-left:5px;display:inline-block}.submit.jsx-9ffbd012d7916494{-webkit-flex:1 0 30%;-ms-flex:1 0 30%;flex:1 0 30%}",
            }),
          ],
        });
      }
      function w({
        corruptionAccuracy: e = -1,
        improvedAccuracyCorruptionTypes: t = [],
        lowAccuracyCorruptionTypes: n = [],
        postReviewSubmission: o = !1,
        taskType: s,
      }) {
        (0, c.useEffect)(() => {
          !(function (e = [], t = []) {
            const n = e.map((e) => ({ type: e, feedback: "failed" })),
              i = t.map((e) => ({ type: e, feedback: "improved" })),
              o = [...n, ...i];
            b.c.track("Corruption Warning Modal Loaded", { corruptions: o });
          })(n, t);
        }, [n, t]);
        const a = n.length > 0,
          d = t.length > 0,
          u = e >= 0,
          l = (function (e) {
            return e === S.TaskType.LidarAnnotation;
          })(s);
        return (0, i.jsxs)("div", {
          className: "jsx-8c73455c55b7821f",
          children: [
            !a &&
              (0, i.jsx)("div", {
                className: "jsx-8c73455c55b7821f message",
                children:
                  "Good job passing our automatic quality checks in this review!",
              }),
            a && (0, i.jsx)(A, { corruptionTypes: n }),
            d && (0, i.jsx)(A, { corruptionTypes: t, isImprovement: !0 }),
            (0, i.jsx)(I, { postReviewSubmission: o, hasQualityIssues: a }),
            o && u && l && (0, i.jsx)(_, { corruptionAccuracy: e }),
            (0, i.jsx)(r(), {
              id: "8c73455c55b7821f",
              children: ".message.jsx-8c73455c55b7821f{padding-bottom:10px}",
            }),
          ],
        });
      }
      function A({ corruptionTypes: e, isImprovement: t = !1 }) {
        return (0, i.jsx)(R, {
          title: t ? "Improvement" : "Issues",
          icon: "clipboard-check",
          children: (0, i.jsxs)(c.Fragment, {
            children: [
              j(e).map((e) =>
                (0, i.jsx)(
                  "span",
                  {
                    className:
                      "jsx-a53807d08bc41796 " +
                      (l()("tag", t ? "tag--improvement" : "tag--issue") || ""),
                    children: e,
                  },
                  e
                )
              ),
              (0, i.jsx)(r(), {
                id: "a53807d08bc41796",
                children:
                  ".tag.jsx-a53807d08bc41796{-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;display:inline-block;margin:8px 8px 8px 0;padding:8px;white-space:nowrap}.tag--improvement.jsx-a53807d08bc41796{background-color:#d9eeff}.tag--issue.jsx-a53807d08bc41796{background-color:#fbd0cf}",
              }),
            ],
          }),
        });
      }
      function I({ hasQualityIssues: e, postReviewSubmission: t }) {
        return (0, i.jsx)(R, {
          title: "Support",
          icon: "lightbulb",
          children: (0, i.jsxs)(c.Fragment, {
            children: [
              e &&
                !t &&
                (0, i.jsx)("div", {
                  className: "jsx-178e30db1f9bbdd5 support-reminder",
                  children:
                    "Remember to pay attention to these quality issues. We will let you know after submitting if you are improving!",
                }),
              e
                ? (0, i.jsxs)("div", {
                    className: "jsx-178e30db1f9bbdd5",
                    children: [
                      "If quality issues continue in future tasks, you will be removed as a Reviewer. We recommend reviewing task instructions and courses to improve your skills, visiting the",
                      " ",
                      (0, i.jsx)("a", {
                        href: k,
                        className: "jsx-178e30db1f9bbdd5",
                        children: "feedback center",
                      }),
                      " and your",
                      " ",
                      (0, i.jsx)("a", {
                        href: v,
                        className: "jsx-178e30db1f9bbdd5",
                        children: "task log",
                      }),
                      ", and using Slack to ask questions.",
                    ],
                  })
                : (0, i.jsxs)("div", {
                    className: "jsx-178e30db1f9bbdd5",
                    children: [
                      "Keep improving your skills by reviewing task instructions and courses, visiting the",
                      " ",
                      (0, i.jsx)("a", {
                        href: k,
                        className: "jsx-178e30db1f9bbdd5",
                        children: "feedback center",
                      }),
                      " and your",
                      " ",
                      (0, i.jsx)("a", {
                        href: v,
                        className: "jsx-178e30db1f9bbdd5",
                        children: "task log",
                      }),
                      ", and using Slack to ask questions.",
                    ],
                  }),
              (0, i.jsx)(r(), {
                id: "178e30db1f9bbdd5",
                children:
                  ".support-reminder.jsx-178e30db1f9bbdd5{padding-bottom:10px}",
              }),
            ],
          }),
        });
      }
      function _({ corruptionAccuracy: e = -1 }) {
        if (e < 0) return null;
        let t =
          "Your payout will not be immediately affected, but if our manual quality checks reveal that your quality is low, your pay may be reduced and you may be demoted to an attempter.";
        return (
          100 === e
            ? (t = "You will receive a $1 bonus for this review.")
            : e < 50 &&
              (t = "Your payout for this review will be reduced by 50%."),
          (0, i.jsx)(R, { title: "Payout", icon: "badge-dollar", children: t })
        );
      }
      function R({ icon: e, title: t, children: n }) {
        return (0, i.jsxs)("div", {
          className: "jsx-bd6792ab18570ebb section",
          children: [
            (0, i.jsxs)("div", {
              className: "jsx-bd6792ab18570ebb section-title",
              children: [
                (0, i.jsx)(p.G, { icon: e }),
                " ",
                (0, i.jsx)("div", {
                  className: "jsx-bd6792ab18570ebb section-title__title",
                  children: t,
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "jsx-bd6792ab18570ebb section-children",
              children: n,
            }),
            (0, i.jsx)(r(), {
              id: "bd6792ab18570ebb",
              children:
                ".section.jsx-bd6792ab18570ebb{color:#000}.section.jsx-bd6792ab18570ebb:not(:last-child){padding-bottom:10px}.section-title.jsx-bd6792ab18570ebb{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:14px;font-weight:bold;padding-bottom:2px}.section-title__title.jsx-bd6792ab18570ebb{margin-left:11px}.section-children.jsx-bd6792ab18570ebb{font-size:14px;padding:1px}",
            }),
          ],
        });
      }
      function j(e) {
        return a().compact(e.map((e) => x[e]));
      }
    },
    203577: function (e, t, n) {
      n.d(t, {
        a5: function () {
          return i;
        },
        I8: function () {
          return N;
        },
        fq: function () {
          return o;
        },
        oS: function () {
          return L;
        },
        HA: function () {
          return B;
        },
        Qz: function () {
          return F;
        },
      });
      var i,
        o,
        r = n(824246),
        s = n(679892),
        a = n.n(s),
        c = n(827378),
        d = n(298784),
        u = n.n(d),
        l = n(959807),
        p = n.n(l),
        f = n(50682),
        m = n.n(f),
        h = n(792739),
        y = n(648628),
        b = n.n(y),
        g = n(101409),
        S = n(942662),
        T = n(802638),
        x = n(210918),
        k = n(997653),
        v = n(599789),
        C = n(167469),
        w = n(369985),
        A = n(947072),
        I = n(883617),
        _ = n(554211),
        R = n(841892),
        j = n(433310);
      function E(e, t, n, i, o, r, s) {
        try {
          var a = e[r](s),
            c = a.value;
        } catch (d) {
          return void n(d);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      function P(e, t, n) {
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
      function O(e) {
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
              P(e, t, n[t]);
            });
        }
        return e;
      }
      function N(e) {
        switch (e) {
          case i.Approve:
            return v.TaskReviewOutcome.Accepted;
          case i.ApproveWithChanges:
            return v.TaskReviewOutcome.Fixed;
          case i.Reject:
          case i.SendBackToQueue:
          case i.SendBackToQueueWithChanges:
            return v.TaskReviewOutcome.Rejected;
          default:
            return;
        }
      }
      !(function (e) {
        (e[(e.Submit = 0)] = "Submit"),
          (e[(e.Approve = 1)] = "Approve"),
          (e[(e.Reject = 2)] = "Reject"),
          (e[(e.ApproveWithChanges = 3)] = "ApproveWithChanges"),
          (e[(e.SendBackToQueue = 4)] = "SendBackToQueue"),
          (e[(e.SendBackToQueueWithChanges = 5)] =
            "SendBackToQueueWithChanges"),
          (e[(e.Continue = 6)] = "Continue");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Send = 0)] = "Send"),
            (e[(e.Sending = 1)] = "Sending"),
            (e[(e.Sent = 2)] = "Sent"),
            (e[(e.Failed = 3)] = "Failed");
        })(o || (o = {}));
      const L = {
        [i.SendBackToQueueWithChanges]: {
          [o.Send]: "Send Back To Queue With Changes",
          [o.Sending]: "Send Back To Queue With Changes",
          [o.Sent]: "Sent Back To Queue With Changes",
          [o.Failed]: "Send Back To Queue With Changes Failed",
        },
        [i.Submit]: {
          [o.Send]: "Submit Task",
          [o.Sending]: "Submitting",
          [o.Sent]: "Submitted",
          [o.Failed]: "Submit Failed",
        },
        [i.Approve]: {
          [o.Send]: "Approve Task",
          [o.Sending]: "Approving",
          [o.Sent]: "Approved",
          [o.Failed]: "Approve Failed",
        },
        [i.Reject]: {
          [o.Send]: "Reject Task",
          [o.Sending]: "Rejecting",
          [o.Sent]: "Rejected",
          [o.Failed]: "Reject Failed",
        },
        [i.ApproveWithChanges]: {
          [o.Send]: "Approve With Changes",
          [o.Sending]: "Approving With Changes",
          [o.Sent]: "Approved With Changes",
          [o.Failed]: "Approve With Changes Failed",
        },
        [i.SendBackToQueue]: {
          [o.Send]: "Send Back To Queue",
          [o.Sending]: "Sending Back To Queue",
          [o.Sent]: "Sent Back To Queue",
          [o.Failed]: "Send Back To Queue Failed",
        },
        [i.Continue]: {
          [o.Send]: "Continue",
          [o.Sending]: "Continue",
          [o.Sent]: "Continue",
          [o.Failed]: "Could Not Continue",
        },
      };
      function B({
        annotationCount: e = 0,
        children: t,
        disableModal: n = !1,
        estimate: i = 8e3,
        nextTaskHandler: s,
        preSendChecks: d,
        sendHandler: l,
        taskProjectId: f,
        getTimeSpent: m,
        setTimeSpent: y,
        taskType: P,
        taskUserId: O,
        type: N,
        lowAccuracyCorruptionTypes: B,
        improvedAccuracyCorruptionTypes: F,
        corruptionAccuracy: M,
        autoloadNextAssignment: U = !1,
        isTestQuestion: G,
        hideOnFail: D,
        postCompletionFeedback: W,
        shortcutEnabled: z,
        attemptSubmittedAndGraded: Q,
        setPostSubmissionGraph: $,
        taskId: Z,
        assignmentId: H,
        reviewLevel: Y,
        shouldPreventSend: q = !1,
      }) {
        var K;
        const { 0: V, 1: J } = (0, c.useState)(!1),
          { 0: X, 1: ee } = (0, c.useState)(0),
          { 0: te, 1: ne } = (0, c.useState)(o.Send),
          ie = (0, _.ZP)("show-submit-confirmation", { projectId: f }, !1),
          oe = (0, _.ZP)("show-post-submission-graph", { projectId: f }, !1);
        (0, c.useEffect)(() => {
          P === C.TaskType.LidarAnnotation &&
            Q &&
            te === o.Sending &&
            (ee(100), ne(o.Sent));
        }, [te, Q, P]);
        const re = (0, c.useCallback)(
          ((se = function* () {
            var e, t, r;
            if (
              v.twoDTypes.includes(P) &&
              ie &&
              (null !== (r = null === y || void 0 === y ? void 0 : y()) &&
              void 0 !== r
                ? r
                : (null !==
                    (t =
                      null === m ||
                      void 0 === m ||
                      null === (e = m()) ||
                      void 0 === e
                        ? void 0
                        : e.taskTimeSpent) && void 0 !== t
                    ? t
                    : 0) > 6e3) &&
              !confirm("Confirm submission?")
            )
              return;
            if (d && !(yield d())) return;
            const a = new Date().getTime();
            ne(o.Sending);
            const c = setInterval(() => {
              const e = new Date().getTime(),
                t = Math.floor(e - a),
                n = Math.floor((100 * t) / i);
              n <= 99 && ee(n);
            }, 50);
            try {
              yield l(N),
                clearInterval(c),
                !0 === q
                  ? ne(o.Send)
                  : P !== C.TaskType.LidarAnnotation &&
                    (ee(100),
                    yield p().delay(200),
                    n && U
                      ? (ne(o.Sent),
                        oe
                          ? null === $ || void 0 === $ || $(!0)
                          : null === s || void 0 === s || s())
                      : ne(n ? o.Send : o.Sent));
            } catch (u) {
              throw (
                (clearInterval(c),
                ne(o.Failed),
                D && !G && (yield p().delay(3e3), de()),
                n && (yield p().delay(3e3), ne(o.Send)),
                (0, k.dO)(u, "approve-with-changes-failed", {
                  extras: { taskUserId: O, taskProjectId: f },
                }),
                j.Z.error("Approve attempt failure.", {
                  errorType: "approve-attempt-failed",
                  error: u,
                  errorMessage: u.message,
                  errorStack: u.stack,
                  taskUserId: O,
                  taskProjectId: f,
                  taskId: Z,
                  assignmentId: H,
                  reviewLevel: Y,
                }),
                u)
              );
            }
          }),
          function () {
            var e = this,
              t = arguments;
            return new Promise(function (n, i) {
              var o = se.apply(e, t);
              function r(e) {
                E(o, n, i, r, s, "next", e);
              }
              function s(e) {
                E(o, n, i, r, s, "throw", e);
              }
              r(void 0);
            });
          }),
          [d, i, l, n, U, s, P, oe, Z, H, Y]
        );
        var se;
        (0, R.oB)(re, N, !z || te !== o.Send);
        const ae = (0, c.useCallback)(() => {
            J(!0);
          }, []),
          ce = (0, c.useCallback)(() => {
            if (G) return de();
            ae(), null === s || void 0 === s || s();
          }, [s, ae]),
          de = (0, c.useCallback)(() => {
            J(!1), ne(o.Send);
          }, []),
          { name: ue, emoji: le } = (0, x.getLidarNickname)(O, f, P),
          pe = O || f || P,
          fe = (function (e, t) {
            switch (e) {
              case C.TaskType.Annotation:
              case C.TaskType.VideoBoxAnnotation:
                return 1 === t ? "box" : "boxes";
              case C.TaskType.AudioTranscription:
                return 1 === t ? "word" : "words";
              case C.TaskType.Categorization:
                return 1 === t ? "taxonomy" : "taxonomies";
              case C.TaskType.Comparison:
              case C.TaskType.DataCollection:
                return 1 === t ? "field" : "fields";
              case C.TaskType.LaneAnnotation:
                return 1 === t ? "lane" : "lanes";
              case C.TaskType.CuboidAnnotation:
              case C.TaskType.LidarAnnotation:
              case C.TaskType.LidarLinking:
              case C.TaskType.LidarStitching:
              case C.TaskType.VideoCuboidAnnotation:
                return 1 === t ? "cuboid" : "cuboids";
              case C.TaskType.LineAnnotation:
                return 1 === t ? "line" : "lines";
              case C.TaskType.PointAnnotation:
                return 1 === t ? "point" : "points";
              case C.TaskType.PolygonAnnotation:
                return 1 === t ? "polygon" : "polygons";
              case C.TaskType.Transcription:
                return 1 === t ? "transcription" : "transcriptions";
              case C.TaskType.LidarSegmentation:
              case C.TaskType.SegmentAnnotation:
                return 1 === t ? "point" : "points";
              case C.TaskType.FixAnnotation:
              case C.TaskType.NamedEntityRecognition:
              case C.TaskType.PhoneCall:
              default:
                return "annotations";
            }
          })(P, e),
          me =
            !u().isUndefined(B) || !u().isUndefined(F) || !u().isUndefined(M),
          he = b()(m ? m().taskTimeSpent : 0);
        var ye;
        return (0, r.jsxs)(c.Fragment, {
          children: [
            (0, r.jsxs)(T.u_, {
              isOpen: !n && te !== o.Send,
              maxWidth: 480,
              top: "50%",
              transform: "translateY(-50%)",
              margin: "auto",
              children: [
                (0, r.jsxs)(w.kn, {
                  children: [
                    te === o.Sending &&
                      (0, r.jsx)(w.pH, { icon: "sync-alt", color: "#008EFF" }),
                    te === o.Sent &&
                      (0, r.jsx)(w.pH, {
                        icon: "check-circle",
                        color: "#008EFF",
                      }),
                    te === o.Failed &&
                      (0, r.jsx)(w.pH, {
                        icon: "exclamation-triangle",
                        color: "#008EFF",
                      }),
                    te === o.Sending &&
                      `Your task is ${L[N][
                        o.Sending
                      ].toLowerCase()}... please do not refresh or close this window`,
                    te === o.Sent &&
                      `Your task was successfully ${L[N][
                        o.Sent
                      ].toLowerCase()}!`,
                    te === o.Failed && L[N][o.Failed],
                  ],
                }),
                (0, r.jsxs)(w.Ys, {
                  children: [
                    !!pe &&
                      (0, r.jsxs)("div", {
                        className: "jsx-b9f02d2a6f71af85 body__item",
                        children: [(0, r.jsx)(g.Z, { emoji: le }), " ", ue],
                      }),
                    !!e &&
                      !!fe &&
                      (0, r.jsxs)("div", {
                        className: "jsx-b9f02d2a6f71af85 body__item",
                        children: [
                          (0, r.jsx)(h.G, { icon: "user-tag" }),
                          " ",
                          e,
                          " ",
                          fe,
                        ],
                      }),
                    (0, r.jsxs)("div", {
                      className: "jsx-b9f02d2a6f71af85 body__item",
                      children: [
                        (0, r.jsx)(h.G, { icon: "clock" }),
                        " ",
                        he,
                        " taken",
                      ],
                    }),
                  ],
                }),
                me &&
                  (0, r.jsx)(w.Ys, {
                    children: (0, r.jsx)(A.A, {
                      lowAccuracyCorruptionTypes: B,
                      improvedAccuracyCorruptionTypes: F,
                      corruptionAccuracy: M,
                      taskType: P,
                    }),
                  }),
                te === o.Sent &&
                  W &&
                  (0, r.jsx)(w.Ys, {
                    children: (0, r.jsx)("div", {
                      style: { fontWeight: "normal", color: "black" },
                      className: "jsx-b9f02d2a6f71af85",
                      children: (0, r.jsx)(I.Z, { text: W }),
                    }),
                  }),
                (0, r.jsxs)(w.tu, {
                  children: [
                    te === o.Sending &&
                      (0, r.jsx)(c.Fragment, {
                        children: (0, r.jsxs)("div", {
                          className: "jsx-b9f02d2a6f71af85 progress",
                          children: [
                            (0, r.jsx)("div", {
                              style: { width: `${X}%` },
                              className: "jsx-b9f02d2a6f71af85 progress__bar",
                            }),
                            (0, r.jsxs)("div", {
                              className: "jsx-b9f02d2a6f71af85 progress__text",
                              children: [X, "%"],
                            }),
                          ],
                        }),
                      }),
                    te === o.Sent &&
                      (0, r.jsx)("div", {
                        className: "jsx-b9f02d2a6f71af85 footer__item",
                        children: (0, r.jsx)(S.Z, {
                          type: "button",
                          onClick: ce,
                          primary: !0,
                          style: { width: "100%" },
                          disabled: V,
                          children: G ? "Review My Results" : "Next Task",
                        }),
                      }),
                    te === o.Failed &&
                      (0, r.jsx)("div", {
                        className: "jsx-b9f02d2a6f71af85 footer__item",
                        children: (0, r.jsx)(S.Z, {
                          type: "button",
                          onClick: de,
                          primary: !0,
                          style: { width: "100%" },
                          disabled: V,
                          children: "Close",
                        }),
                      }),
                  ],
                }),
              ],
            }),
            t({
              disabled: te !== o.Send,
              onClick: re,
              text:
                null !==
                  (ye =
                    null === L ||
                    void 0 === L ||
                    null === (K = L[N]) ||
                    void 0 === K
                      ? void 0
                      : K[te]) && void 0 !== ye
                  ? ye
                  : "Next (error)",
            }),
            (0, r.jsx)(a(), {
              id: "b9f02d2a6f71af85",
              children:
                ".body__item.jsx-b9f02d2a6f71af85:not(:last-child){margin-right:25px}.footer__item.jsx-b9f02d2a6f71af85{-webkit-flex:1 0 49%;-ms-flex:1 0 49%;flex:1 0 49%}.footer__item.jsx-b9f02d2a6f71af85:not(:last-child){margin-right:2%}.progress.jsx-b9f02d2a6f71af85{background:rgba(0,142,255,.5);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;height:34px;overflow:hidden;position:relative;width:100%}.progress__bar.jsx-b9f02d2a6f71af85{background:#008eff;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;height:100%;left:0;position:absolute;top:0}.progress__text.jsx-b9f02d2a6f71af85{color:#fff;font-size:11px;font-weight:500;height:100%;line-height:34px;position:relative;text-align:center;width:100%;z-index:1}",
            }),
          ],
        });
      }
      function F({
        appearance: e = "default",
        arrows: t = !1,
        disabled: n,
        hasMargin: o = !0,
        onClick: s,
        children: a,
        tooltip: c,
        type: d,
      }) {
        let u = {};
        return (
          "default" !== e ||
            (d !== i.Submit && d !== i.Continue) ||
            (u = {
              style: { marginLeft: o ? "15px" : "0" },
              primary: !0,
              disabled: n,
              onClick: s,
              tooltip: c,
              type: "button",
            }),
          "lidar" === e &&
            d === i.Submit &&
            (u = {
              primary: !0,
              disabled: n,
              onClick: s,
              tooltip: c,
              type: "button",
              arrows: t,
              size: "lg",
              className: "full",
            }),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                "data-tip": c || "Submit task when complete",
                "data-for": "submit-tooltip",
                children: (0, r.jsx)(S.Z, O({}, u, { children: a })),
              }),
              (0, r.jsx)(m(), { id: "submit-tooltip", delayShow: 250 }),
            ],
          })
        );
      }
    },
    369985: function (e, t, n) {
      n.d(t, {
        kn: function () {
          return a;
        },
        pH: function () {
          return c;
        },
        Ys: function () {
          return d;
        },
        tu: function () {
          return u;
        },
      });
      var i = n(824246),
        o = n(679892),
        r = n.n(o),
        s = (n(827378), n(792739));
      function a({ children: e }) {
        return (0, i.jsxs)("div", {
          className: "jsx-2b1716236f75cef3 header",
          children: [
            e,
            (0, i.jsx)(r(), {
              id: "2b1716236f75cef3",
              children:
                ".header.jsx-2b1716236f75cef3{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#000;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:20px;font-weight:600;padding:28.5px;text-align:left}",
            }),
          ],
        });
      }
      function c({ icon: e, color: t = "#008EFF" }) {
        return (0, i.jsxs)("div", {
          className: "jsx-11272ab49c8a1413 header-icon",
          children: [
            (0, i.jsx)(s.G, { icon: e, color: t }),
            (0, i.jsx)(r(), {
              id: "11272ab49c8a1413",
              children:
                ".header-icon.jsx-11272ab49c8a1413{font-size:31px;line-height:31px;margin-right:20.5px}",
            }),
          ],
        });
      }
      function d({ children: e }) {
        return (0, i.jsxs)("div", {
          className: "jsx-15f08a4afc80dd1 body",
          children: [
            e,
            (0, i.jsx)(r(), {
              id: "15f08a4afc80dd1",
              children:
                ".body.jsx-15f08a4afc80dd1{border-top:1px solid#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:25px;color:#000;font-weight:500}",
            }),
          ],
        });
      }
      function u({ children: e }) {
        return (0, i.jsxs)("div", {
          className: "jsx-69f3c649b4d7be64 footer",
          children: [
            e,
            (0, i.jsx)(r(), {
              id: "69f3c649b4d7be64",
              children:
                ".footer.jsx-69f3c649b4d7be64{border-top:1px solid#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:25px}",
            }),
          ],
        });
      }
    },
    841892: function (e, t, n) {
      n.d(t, {
        p7: function () {
          return a;
        },
        ve: function () {
          return c;
        },
        oB: function () {
          return d;
        },
      });
      var i = n(271682),
        o = n(938644),
        r = n(986004),
        s = n(203577);
      function a(e, t, n) {
        (0, i.ZP)({
          trigger: o.zd[o.PO.MakeChanges],
          action: e.action,
          disabled: e.disabled,
          description: "Make changes",
          type: o.PO.MakeChanges,
          group: o.Jl.ReviewButtons,
          forceNotEditable: !0,
        }),
          (0, i.ZP)({
            trigger: o.zd[o.PO.RejectReview],
            action: t.action,
            disabled: t.disabled,
            description: "Send attempt back to queue",
            type: o.PO.RejectReview,
            group: o.Jl.ReviewButtons,
            forceNotEditable: !0,
          }),
          (0, i.ZP)({
            trigger: o.zd[o.PO.CancelActionReview],
            action: n.action,
            disabled: n.disabled,
            description: "Cancel current action",
            type: o.PO.CancelActionReview,
            group: o.Jl.ReviewButtons,
            forceNotEditable: !0,
          });
      }
      function c(e, t = !1) {
        (0, i.ZP)({
          trigger: o.zd[o.PO.SkipStudioTask],
          action: e.action,
          disabled: e.disabled,
          description: `Skip ${t ? "review" : "attempt"} task`,
          type: o.PO.SkipStudioTask,
          group: t ? o.Jl.ReviewButtons : o.Jl.AttemptButtons,
          forceNotEditable: !0,
        });
      }
      function d(e, t, n) {
        let a,
          c = o.$g,
          d = "",
          u = o.Jl.ReviewButtons;
        switch (t) {
          case s.a5.Submit:
            (c = o.zd[o.PO.SubmitTask]),
              (d = "Submit"),
              (a = o.PO.SubmitTask),
              (u = o.Jl.AttemptButtons);
            break;
          case s.a5.Approve:
          case s.a5.ApproveWithChanges:
            (c = o.zd[o.PO.ApproveReview]),
              (d = "Approve"),
              (a = o.PO.ApproveReview);
            break;
          case s.a5.Reject:
          case s.a5.SendBackToQueue:
          case s.a5.SendBackToQueueWithChanges:
            (c = o.zd[o.PO.RejectReview]),
              (d = "Reject / send back to queue"),
              (a = o.PO.RejectReview);
        }
        (0, i.ZP)({
          trigger: c,
          action: e,
          description: d,
          type: a,
          group: u,
          disabled: n,
          forceNotEditable: !r.IS_FEDERAL,
        });
      }
    },
    775143: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SET_CURRENT_USER: function () {
            return R;
          },
          EXTEND_BATCH: function () {
            return j;
          },
          COMPLETE_ASSIGNMENTS: function () {
            return E;
          },
          SHOW_CORRUPTION_FEEDBACK: function () {
            return P;
          },
          SHOW_POST_COMPLETION_FEEDBACK: function () {
            return O;
          },
          SKIP_ASSIGNMENT: function () {
            return N;
          },
          REPORT_ASSIGNMENT: function () {
            return L;
          },
          FLAG_ASSIGNMENT: function () {
            return B;
          },
          NEXT_ASSIGNMENT: function () {
            return F;
          },
          UPDATE_CLAIMS: function () {
            return M;
          },
          UPDATE_PROJECT_BENCHMARK_METRICS: function () {
            return U;
          },
          COMPLETE_INSTRUCTIVE: function () {
            return G;
          },
          SET_BONUSES: function () {
            return D;
          },
          DISPLAY_NEW_BONUS: function () {
            return W;
          },
          CONFIRM_READY_FOR_NEXT_TASK: function () {
            return z;
          },
          AWAIT_CONFIRMATION_FOR_TASKING: function () {
            return Q;
          },
          AWAIT_CONFIRMATION_FOR_SKIP_TASK: function () {
            return $;
          },
          SET_PRECALCULATED_PAY: function () {
            return Z;
          },
          handleErrorsAndJsonify: function () {
            return H;
          },
          fetchCorp: function () {
            return K;
          },
          fetchApi: function () {
            return V;
          },
          fetchCurrentUser: function () {
            return J;
          },
          updateBenchmarkStats: function () {
            return X;
          },
          fetchNextAssignments: function () {
            return re;
          },
          skipBatch: function () {
            return se;
          },
          skipTask: function () {
            return ae;
          },
          reportTask: function () {
            return ce;
          },
          flagTask: function () {
            return de;
          },
          nextTask: function () {
            return ue;
          },
          checkAssignmentClaim: function () {
            return fe;
          },
          refreshAssignmentClaims: function () {
            return me;
          },
          completeAttempt: function () {
            return he;
          },
          completeSupplementalCourse: function () {
            return ye;
          },
          completeReviewAssignment: function () {
            return be;
          },
          onExit: function () {
            return ge;
          },
          completeReviewAssignments: function () {
            return Te;
          },
          TRAINING_ACTIONS: function () {
            return xe;
          },
          fetchCourse: function () {
            return Ce;
          },
          beginCourse: function () {
            return we;
          },
          skipCourse: function () {
            return Ae;
          },
          continueCourse: function () {
            return Ie;
          },
          certificationTimeRemainingSecsSync: function () {
            return _e;
          },
          fetchBonuses: function () {
            return Re;
          },
          displayNewBonus: function () {
            return je;
          },
          acceptProjectPricing: function () {
            return Ee;
          },
          rejectProjectPricing: function () {
            return Pe;
          },
          awaitConfirmationForNextTask: function () {
            return Oe;
          },
          awaitConfirmationForSkipTask: function () {
            return Ne;
          },
          fetchNextAssignmentsOnSkip: function () {
            return Le;
          },
          confirmReadyForNextTask: function () {
            return Be;
          },
        });
      var i = n(298784),
        o = n.n(i),
        r = n(252708),
        s = n.n(r),
        a = n(468891),
        c = n(959807),
        d = n.n(c),
        u = n(459025),
        l = n(285556),
        p = n(203441),
        f = n(626199),
        m = n(797680),
        h = n(98283),
        y = n(433310),
        b = n(791257),
        g = n(775222),
        S = n(951041),
        T = n(599789),
        x = n(167469),
        k = n(350615),
        v = n(746332),
        C = n(761077),
        w = n(203577),
        A = n(872383);
      function I(e, t, n, i, o, r, s) {
        try {
          var a = e[r](s),
            c = a.value;
        } catch (d) {
          return void n(d);
        }
        a.done ? t(c) : Promise.resolve(c).then(i, o);
      }
      function _(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function s(e) {
              I(r, i, o, s, a, "next", e);
            }
            function a(e) {
              I(r, i, o, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      const R = "SET_CURRENT_USER",
        j = "EXTEND_BATCH",
        E = "COMPLETE_ASSIGNMENTS",
        P = "SHOW_CORRUPTION_FEEDBACK",
        O = "SHOW_POST_COMPLETION_FEEDBACK",
        N = "SKIP_ASSIGNMENT",
        L = "REPORT_ASSIGNMENT",
        B = "FLAG_ASSIGNMENT",
        F = "NEXT_ASSIGNMENT",
        M = "UPDATE_CLAIMS",
        U = "UPDATE_PROJECT_BENCHMARK_METRICS",
        G = "COMPLETE_INSTRUCTIVE",
        D = "SET_BONUSES",
        W = "DISPLAY_NEW_BONUS",
        z = "CONFIRM_READY_FOR_NEXT_TASK",
        Q = "AWAIT_CONFIRMATION_FOR_TASKING",
        $ = "AWAIT_CONFIRMATION_FOR_SKIP_TASK",
        Z = "SET_PRECALCULATED_PAY";
      function H(e) {
        return Y.apply(this, arguments);
      }
      function Y() {
        return (Y = _(function* (e) {
          if (!e.ok) throw new p.Z(e.statusText, yield (0, m.u)(e));
          return e.json();
        })).apply(this, arguments);
      }
      function q(e, t, n = {}) {
        let i = e.slice();
        return (
          (n.returnRawResponse = !n.parseAndHandle),
          delete n.parseAndHandle,
          n.body &&
            ((n.body = JSON.stringify(n.body)),
            n.headers || (n.headers = { "Content-Type": "application/json" })),
          n.query && (i = `${i}?${a.stringify(n.query)}`),
          delete n.query,
          (0, l.ZP)(null, `${t}${i}`, n)
        );
      }
      function K(e, t = {}) {
        return q(e, "corp-api", t);
      }
      function V(e, t = {}) {
        return q(e, "internal", t);
      }
      function J(e) {
        return (function () {
          var t = _(function* (t) {
            (e = e || (yield V("/logged_in_user").then(H))),
              t({ type: R, user: e });
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function X() {
        return (function () {
          var e = _(function* (e, t) {
            const n = o().get(t(), "batch.assignments", []),
              i = o().uniq(
                n
                  .map((e) => o().get(e.project, "_id", e.project))
                  .filter((e) => !!e)
              ),
              r = "?projects=" + i.join("&projects="),
              s =
                i.length > 0
                  ? yield V(`/scaler/work/project-benchmark-stats${r}`).then(H)
                  : {};
            e({ type: U, perProjectBenchmarkMetrics: s });
          });
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
      }
      function ee(e) {
        const t = te();
        if (e && !t) {
          const e = Date.now();
          localStorage.setItem("isFetchingQueueTimestamp", e.toString());
        } else localStorage.removeItem("isFetchingQueueTimestamp");
      }
      function te() {
        const e = localStorage.getItem("isFetchingQueueTimestamp");
        if (!e) return !1;
        const t = parseInt(e, 10);
        return Date.now() - t <= 1e4;
      }
      function ne(e) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = _(function* (e) {
          try {
            for (; te(); ) yield d().delay(3e3);
            return ee(!0), yield V(e).then(H);
          } finally {
            ee(!1);
          }
        })).apply(this, arguments);
      }
      function oe() {
        return (oe = _(function* (e) {
          return (yield (0, A.O8)({ feature: "fetch-queue-atomically" }))
            ? yield ne(e)
            : yield V(e).then(H);
        })).apply(this, arguments);
      }
      function re(e, t = !1, n) {
        (0, v.isMobileUserAgent)(window.navigator.userAgent) &&
          (e.mobileAgent = 1);
        const i = o().omit(e, "review_mode", "limit");
        var r;
        e &&
          e.review_mode &&
          (i.kind =
            "0" === (r = e.review_mode)
              ? "task"
              : "1" === r
              ? "review"
              : void 0);
        const a =
          ((c = i),
          o()
            .map(c, (e, t) => (e ? `&${t}=${e}` : ""))
            .join(""));
        var c;
        return (function () {
          var e = _(function* (e, i) {
            const r = i();
            if (o().get(r, "batch.assignments.length", 0) > 2)
              return void X()(e, i);
            const c = null !== n && void 0 !== n ? n : 1;
            try {
              const t = `/v2/tasks/new_queue?limit=${c}${a}`,
                n = yield (function (e) {
                  return oe.apply(this, arguments);
                })(t),
                i = o().uniqBy(n, (e) =>
                  null === e || void 0 === e ? void 0 : e._id
                ),
                r = i[0];
              if (
                (null === r || void 0 === r ? void 0 : r.redirectLink) &&
                (null === r || void 0 === r ? void 0 : r.assignmentType) ===
                  T.AssignmentType.Redirect
              ) {
                const e = r.redirectLink;
                return void (e && (window.location.href = e));
              }
              try {
                {
                  const e = (0, S.zY)(),
                    t =
                      "scale-experimental" === u.get("branch") &&
                      "scale-experimental" !== e,
                    n = !u.get("branch") && "scale-experimental" === e;
                  (t || n) &&
                    (y.Z.warn(
                      `Refreshing user because their deploy changed old=${e} new=${u.get(
                        "branch"
                      )}`
                    ),
                    window.location.reload());
                }
              } catch (d) {
                y.Z.error(
                  "Got error trying to determine user's correct branch in queue logic"
                );
              }
              const s = i.filter(
                (e) => e.assignmentType === T.AssignmentType.Course
              )[0];
              s && e({ type: xe.SET_COURSE, course: s }),
                e({ type: xe.SET_LOADING, isLoading: !1 }),
                e({ type: j, assignments: (0, f.WG)(i) }),
                e(X());
            } catch (l) {
              if (l.response && 403 === l.response.status)
                l.response.error === k.Fs
                  ? (window.location = "/account")
                  : (window.location = "/forbidden");
              else if (l.response && 429 === l.response.status)
                s().error(
                  "You have refreshed this page too quickly, or opened many windows at the same time. Please slow down, and don't refresh across multiple windows. You can retry after one minute.",
                  { timeout: "none" }
                );
              else if ((s().error(l.message, { timeout: 3e3 }), t)) throw l;
            }
          });
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })();
      }
      function se(e, t, n, i) {
        return (function () {
          var o = _(function* (o, r) {
            const s = yield V("/batch/skip", {
              method: "POST",
              body: { batchId: t, info: { skipReason: n, skipExplanation: i } },
            }).then(H);
            s.tooManySkips
              ? alert(
                  "You have already reached the limit on skips for the day."
                )
              : (re(e)(o, r), o({ type: N, response: s }));
          });
          return function (e, t) {
            return o.apply(this, arguments);
          };
        })();
      }
      function ae(e, t, n, i) {
        const r = (0, S.tQ)();
        y.Z.warn("Skipped Task", {
          assignmentId: t._id,
          attemptId: t.attemptId,
          skipReason: n,
          skipExplanation: i,
          pageLoadId: r,
        });
        const s = { skipReason: n, skipExplanation: i };
        let a, c, d;
        return (
          (0, b.isLegacyReviewAssignment)(t)
            ? ((c = [t.attemptId]),
              t.childIds && (c = c.concat(o().compact(t.childIds))),
              (d = "/attempts/unassign"))
            : ((a = [t._id]),
              t.childIds && (a = a.concat(o().compact(t.childIds))),
              (d = "/tasks/unassign")),
          (function () {
            var t = _(function* (t) {
              const n = yield V(d, {
                method: "POST",
                body: {
                  taskIds: a,
                  attemptIds: c,
                  isSkippedTask: !0,
                  isSkipUserInitiated: !0,
                  info: s,
                },
              }).then(H);
              return (
                n.tooManySkips
                  ? alert(
                      "You have already reached the limit on skips for the day."
                    )
                  : (t(re(e)), t({ type: N, response: n })),
                n
              );
            });
            return function (e) {
              return t.apply(this, arguments);
            };
          })()
        );
      }
      function ce(e, t, n, i) {
        const o = (0, S.tQ)();
        return (
          y.Z.warn("Reported Task", {
            assignmentId: t._id,
            attemptId: t.attemptId,
            reportReason: n,
            reportExplanation: i,
            pageLoadId: o,
          }),
          (function () {
            var r = _(function* (r, s) {
              const a = yield V("/tasks/report", {
                method: "POST",
                body: { taskId: t._id, reportReason: n, reportExplanation: i },
              }).then(H);
              a.tooManySkips
                ? (alert(
                    "You have already reached the limit on reports for the day."
                  ),
                  y.Z.warn("Task Report Limit Reached", {
                    assignmentId: t._id,
                    attemptId: t.attemptId,
                    reportReason: n,
                    reportExplanation: i,
                    pageLoadId: o,
                  }))
                : (re(e)(r, s), r({ type: L, response: a }));
            });
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })()
        );
      }
      function de(e, t, n, i) {
        const o = (0, S.tQ)();
        return (
          y.Z.warn("Flagged Task", {
            assignmentId: t._id,
            attemptId: t.attemptId,
            flagCategory: n,
            reason: i,
            pageLoadId: o,
          }),
          (function () {
            var o = _(function* (o, r) {
              const s = yield V("/tasks/flag", {
                method: "POST",
                body: { taskId: t._id, flagCategory: n, reason: i },
              }).then(H);
              re(e)(o, r), o({ type: B, response: s });
            });
            return function (e, t) {
              return o.apply(this, arguments);
            };
          })()
        );
      }
      function ue(e, t = !1, n) {
        return (function () {
          var i = _(function* (i, r) {
            try {
              if (t) window.location.href = "/qa/audit";
              else {
                const t = r();
                o().get(t, "batch.forceFixAssignment") ||
                  (i({ type: F }), yield re(e, !0, n)(i, r));
              }
            } catch (s) {
              window.location.reload();
            }
          });
          return function (e, t) {
            return i.apply(this, arguments);
          };
        })();
      }
      const le = [
          "task_id",
          "timeSpentSecs",
          "timeSpentLoadingSecs",
          "oldTimeSpentSecs",
        ],
        pe = {
          annotation: [...le, "annotations"],
          audiotranscription: le,
          fixannotation: [...le, "annotation"],
          polygonannotation: [...le, "annotations"],
          lineannotation: [...le, "annotations"],
          laneannotation: [...le, "annotations"],
          pointannotation: [...le, "annotations"],
        };
      function fe({
        stage: e,
        task: t,
        attempt: n,
        elapsedTime: i,
        force: r,
        multiReplicaIndex: s,
      }) {
        return (function () {
          var c = _(function* (c) {
            const { forceClaim: d } = a.parse(window.location.search),
              u = {
                stage: e,
                task: t,
                attempt: n,
                elapsedTime: i,
                usingForceClaimLink: "1" === d,
                multiReplicaIndex: s,
              },
              {
                tasks: l,
                attempts: p,
                stages: f,
                currentPageHasEditLock: m,
                otherUserHasLock: h,
                canOverride: y,
                hasForcePermission: b,
                needsRefresh: g,
              } = yield V("/tasks/check_claim", {
                method: "POST",
                body: u,
              }).then(H);
            if (b && r) return;
            const S = {};
            o().each(o().concat(l, p, f), (e) => {
              var t, n, i;
              const o = new Date(e.claimedUntil);
              o.setSeconds(o.getSeconds() - T.pipelinev3NodeGracePeriodSeconds);
              const r = new Date(e.maxClaim || Date.now() + 1e3);
              r.setSeconds(r.getSeconds() - T.pipelinev3NodeGracePeriodSeconds),
                (S[e.id] = {
                  claimed: e.claimed,
                  claimedUntil: o,
                  maxClaim: r,
                  idleMinutes: parseInt(e.idleMinutes),
                  checkedAt: new Date(e.checkedAt),
                  checkedAtClientTime: new Date(),
                  hasWarning: e.hasWarning,
                  warningParams: e.warningParams,
                  corruptionFeedback: e.corruptionFeedback,
                  needsRefresh: !!e.needsRefresh,
                  payableTime: {
                    maxPayableMinutes: parseInt(
                      null === (t = e.payableTime) || void 0 === t
                        ? void 0
                        : t.maxPayableMinutes
                    ),
                    additionalMinutesPerTurn: parseInt(
                      null === (n = e.payableTime) || void 0 === n
                        ? void 0
                        : n.additionalMinutesPerTurn
                    ),
                    additionalMinutesPerRewrite: parseInt(
                      null === (i = e.payableTime) || void 0 === i
                        ? void 0
                        : i.additionalMinutesPerRewrite
                    ),
                  },
                  claimMinutes: parseInt(e.claimMinutes),
                });
            }),
              c({
                type: M,
                claims: S,
                currentPageHasEditLock: m,
                otherUserHasLock: h,
                canOverride: y,
                needsRefresh: g,
              });
          });
          return function (e) {
            return c.apply(this, arguments);
          };
        })();
      }
      function me({
        stages: e,
        tasks: t,
        attempts: n,
        elapsedTime: i,
        force: r,
      }) {
        return (function () {
          var s = _(function* (s) {
            const a = {
                reclaim: { tasks: t, attempts: n, stages: e },
                elapsedTime: i,
              },
              c = yield V("/tasks/check_claim", {
                method: "POST",
                body: a,
              }).then(H);
            if (c.hasForcePermission && r) return;
            const d = {};
            o().each(o().concat(c.tasks, c.attempts, c.stages), (e) => {
              var t, n, i;
              const o = new Date(e.claimedUntil);
              o.setSeconds(o.getSeconds() - T.pipelinev3NodeGracePeriodSeconds);
              const r = new Date(e.maxClaim || Date.now() + 1e3);
              r.setSeconds(r.getSeconds() - T.pipelinev3NodeGracePeriodSeconds),
                (d[e.id] = {
                  claimed: e.claimed,
                  claimedUntil: o,
                  maxClaim: r,
                  idleMinutes: parseInt(e.idleMinutes),
                  checkedAt: new Date(e.checkedAt),
                  checkedAtClientTime: new Date(),
                  hasWarning: e.hasWarning,
                  warningParams: e.warningParams,
                  corruptionFeedback: e.corruptionFeedback,
                  payableTime: {
                    maxPayableMinutes: parseInt(
                      null === (t = e.payableTime) || void 0 === t
                        ? void 0
                        : t.maxPayableMinutes
                    ),
                    additionalMinutesPerTurn: parseInt(
                      null === (n = e.payableTime) || void 0 === n
                        ? void 0
                        : n.additionalMinutesPerTurn
                    ),
                    additionalMinutesPerRewrite: parseInt(
                      null === (i = e.payableTime) || void 0 === i
                        ? void 0
                        : i.additionalMinutesPerRewrite
                    ),
                  },
                  claimMinutes: parseInt(e.claimMinutes),
                });
            }),
              s({ type: M, claims: d });
          });
          return function (e) {
            return s.apply(this, arguments);
          };
        })();
      }
      function he(e, t, n = {}) {
        return (
          n.timeSpentLoadingSecs || (n.timeSpentLoadingSecs = -1),
          ((e) => {
            const t = pe[e] || [];
            return (e) => {
              o().each(t, (t) => {
                if (!o().has(e, t))
                  throw Error(`${t} is required in \`completeAttempt\``);
              });
            };
          })(t)(n),
          (n.toolSource = C.xC.Classic),
          (function () {
            var i = _(function* (i, o) {
              const r = t === x.TaskType.Categorization,
                s = { body: n, method: "POST" };
              let a;
              if (r) {
                const n = (function () {
                  var n = _(function* () {
                    (a = yield V(`/complete/${t}`, s).then(H)), re(e)(i, o);
                  });
                  return function () {
                    return n.apply(this, arguments);
                  };
                })();
                yield n();
              } else if (((a = yield V(`/complete/${t}`, s).then(H)), !a)) return;
              return (
                a.trainingAttempt &&
                  i({ type: G, instructiveResponse: a.trainingAttempt }),
                a.precalculatedPay &&
                  i({ type: Z, precalculatedPay: a.precalculatedPay }),
                g.c.track(
                  "Completed Task",
                  {
                    time_elapsed_in_seconds: n.timeSpentSecs,
                    task_id: n.task_id,
                    num_annotations: n.annotations && n.annotations.length,
                    type: t,
                  },
                  { traits: { pageLoadId: (0, S.tQ)() } }
                ),
                a
              );
            });
            return function (e, t) {
              return i.apply(this, arguments);
            };
          })()
        );
      }
      function ye(e) {
        return (function () {
          var t = _(function* (t, n) {
            t({ type: F }),
              t({
                type: xe.SET_COURSE_PROGRESS,
                courseProgress: { currentSection: -1 },
              });
            const i = n().batch.assignments.filter(
              (e) => e.assignmentType === T.AssignmentType.Course
            )[0];
            t({ type: xe.SET_COURSE, course: i }), i || re(e)(t, n);
          });
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })();
      }
      function be(
        e,
        t,
        {
          isCorrect: n,
          timeSpentSecs: i,
          populateHypothesis: r,
          oldTimeSpentSecs: s,
          timeSpentLoadingSecs: a,
          trueReviewOutcome: c,
          reviewChanges: d,
          benchmark: u,
          comments: l,
          fullstorySession: p,
          extra: f,
          auditResult: m,
          categorizationResult: b,
          taskFeedback: T,
          sendType: x,
          linterMetrics: k,
          documentRotation: v,
          documentRotationPerPage: A,
          attemptBehaviourLog: I,
          enabledFeatures: R,
          multiViewNodes: j,
        },
        E = () => {}
      ) {
        return (function () {
          var N = _(function* (_) {
            var N;
            const L = {
                attemptId: t.attemptId,
                reviewTimeSecs: i,
                reviewOldTimeSecs: s,
                reviewTimeLoadingSecs: a,
                attemptVersion: t.attemptVersion,
                trueReviewOutcome:
                  null !== c && void 0 !== c
                    ? c
                    : void 0 !== x
                    ? (0, w.I8)(x)
                    : void 0,
                reviewResult: n ? "correct" : "incorrect",
                populateHypothesis: r,
                reviewChanges: d,
                benchmark: u,
                comments: l,
                fullstorySession: p,
                extra: f,
                auditResult: m,
                categorizationResult: b,
                taskFeedback: T,
                toolSource: C.xC.Classic,
                sendType: void 0 !== x ? w.a5[x] : void 0,
                linterMetrics: k,
                documentRotation: v,
                documentRotationPerPage: A,
                attemptBehaviourLog: I,
                enabledFeatures: R,
                ontology:
                  d &&
                  (null === (N = t.params) || void 0 === N
                    ? void 0
                    : N.ontology),
                multiViewNodes: j,
              },
              B = yield V(`/complete/review/${t.type}`, {
                body: L,
                method: "POST",
              }).then(H);
            if (!B) return;
            yield E(),
              y.Z.log(
                `Succesfully completed review: ${t.attemptId} with taskFeedback ${T}`
              );
            const F = o().get(B, "corruptionFeedback.corruptionAccuracy"),
              M =
                null === B || void 0 === B ? void 0 : B.postCompletionFeedback;
            if (0 === F || F)
              _({
                type: P,
                corruptionFeedback: B.corruptionFeedback,
                corruptionFeedbackAttempt: B.attempt,
                confidenceAction: B.confidenceAction,
                reviewTimeSecs: L.reviewTimeSecs,
              });
            else {
              if (
                (B.trainingAttempt &&
                  _({ type: G, instructiveResponse: B.trainingAttempt }),
                B.precalculatedPay &&
                  _({ type: Z, precalculatedPay: B.precalculatedPay }),
                M && _({ type: O, postCompletionFeedback: M }),
                !1 === o().get(B.trainingAttempt, "submitted"))
              )
                return B;
              (e = o().omit(e, "lidarId")),
                B.confidenceAction
                  ? (0, h.ZP)(
                      null,
                      `/corrected_reviews?confidenceAction=${B.confidenceAction}`
                    )
                  : g.c.track(
                      "Completed Task",
                      {
                        time_elapsed_in_seconds: L.reviewTimeSecs,
                        type: t.type,
                      },
                      { traits: { pageLoadId: (0, S.tQ)() } }
                    );
            }
            return B;
          });
          return function (e) {
            return N.apply(this, arguments);
          };
        })();
      }
      function ge(e, t) {
        const n = (function () {
          var e = _(function* (e, t, n) {
            const i = yield V(`/complete/exit/${t}`, {
              body: { attemptId: e, numChildNodes: n },
              method: "POST",
            }).then(H);
            return (
              i &&
                g.c.track(
                  "Exited task",
                  { attemptId: e, type: t },
                  { traits: { pageLoadId: (0, S.tQ)() } }
                ),
              i
            );
          });
          return function (t, n, i) {
            return e.apply(this, arguments);
          };
        })();
        return (function () {
          var e = _(function* (e) {
            yield d().map(
              t,
              (function () {
                var t = _(function* (t) {
                  const i = t.id || t.attemptId || t.task;
                  if (!i) return;
                  const r = o().compact(t.childIds || []),
                    s = yield n(i, t.type, r.length);
                  if (!s) return;
                  s.precalculatedPay &&
                    e({ type: Z, precalculatedPay: s.precalculatedPay });
                  const a = [];
                  for (const e of r) a.push(n(e, t.type, r.length));
                  const c = yield Promise.all(a);
                  for (const e of c) if (!e) return;
                });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              { concurrency: 3 }
            );
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      }
      const Se = (function () {
        var e = _(function* (
          e,
          {
            isCorrect: t,
            timeSpentSecs: n,
            populateHypothesis: i,
            oldTimeSpentSecs: o,
            timeSpentLoadingSecs: r,
            reviewChanges: s,
            benchmark: a,
            comments: c,
            fullstorySession: d,
            extra: u,
            auditResult: l,
            taskFeedback: p,
          }
        ) {
          const f = {
            attemptId: e.attemptId,
            reviewTimeSecs: n,
            reviewOldTimeSecs: o,
            reviewTimeLoadingSecs: r,
            attemptVersion: e.attemptVersion,
            reviewResult: t ? "correct" : "incorrect",
            populateHypothesis: i,
            reviewChanges: s,
            benchmark: a,
            comments: c,
            fullstorySession: d,
            extra: u,
            auditResult: l,
            taskFeedback: p,
          };
          yield V(`/complete/review/${e.type}`, {
            body: f,
            method: "POST",
          }).then(H),
            g.c.track(
              "Completed Task",
              { time_elapsed_in_seconds: f.reviewTimeSecs, type: e.type },
              { traits: { pageLoadId: (0, S.tQ)() } }
            );
        });
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })();
      function Te(e, t, n) {
        return (function () {
          var i = _(function* (i) {
            yield d().map(
              t,
              (function () {
                var e = _(function* (e, t) {
                  try {
                    yield Se(e, n[t]);
                  } catch (i) {}
                });
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              { concurrency: 3 }
            ),
              i({ type: E, assignments: t }),
              i(re((e = o().omit(e, "lidarId"))));
          });
          return function (e) {
            return i.apply(this, arguments);
          };
        })();
      }
      const xe = {
        SET_LOADING: "TRAINING_ACTIONS/SET_LOADING",
        SET_COURSE: "TRAINING_ACTIONS/SET_COURSE",
        SET_COURSE_PROGRESS: "TRAINING_ACTIONS/SET_COURSE_PROGRESS",
        SET_COURSE_ERROR: "TRAINING_ACTIONS/SET_COURSE_ERROR",
      };
      function ke(e, t) {
        var n;
        const i =
          null === t ||
          void 0 === t ||
          null === (n = t.certificationInfo) ||
          void 0 === n
            ? void 0
            : n.randomizedSections;
        i && i.length > 0 && (e.sections = i);
      }
      function ve(e, t) {
        const n = null === t || void 0 === t ? void 0 : t.overridingSections;
        n && n.length > 0 && (e.sections = n);
      }
      function Ce(e, t) {
        return (function () {
          var n = _(function* (n) {
            n({ type: xe.SET_LOADING, isLoading: !0 });
            let i = !1;
            let o = `/courses/${encodeURIComponent(e)}`;
            t && (o += `?tag=${t}`);
            const r = yield V(o, {})
              .then(H)
              .catch((e) => ((i = !0), e.response));
            if (i)
              return (
                n({ type: xe.SET_LOADING, isLoading: !1 }),
                void n({
                  type: xe.SET_COURSE_ERROR,
                  courseError:
                    r.error || "There was an error loading the course",
                })
              );
            const { course: s, courseProgress: a } = r;
            ke(s, a),
              ve(s, a),
              n({ type: xe.SET_COURSE, course: s }),
              n({ type: xe.SET_COURSE_PROGRESS, courseProgress: a }),
              n({ type: xe.SET_LOADING, isLoading: !1 });
          });
          return function (e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function we(e, t) {
        return (function () {
          var n = _(function* (n, i) {
            n({ type: xe.SET_LOADING, isLoading: !0 });
            const o = { method: "POST", body: { permissionId: t } },
              r = yield V(`/courses/${e}/begin`, o).then(H),
              s = i().training.course,
              { courseProgress: a } = r;
            ke(s, a),
              ve(s, a),
              n({ type: xe.SET_COURSE, course: s }),
              n({ type: xe.SET_COURSE_PROGRESS, courseProgress: a }),
              n({ type: xe.SET_LOADING, isLoading: !1 });
          });
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })();
      }
      function Ae(e, t) {
        return (function () {
          var n = _(function* (n, i) {
            n({ type: xe.SET_LOADING, isLoading: !0 });
            yield V(`/courses/${t}/skip`, { method: "POST" }).then(H),
              n({ type: xe.SET_LOADING, isLoading: !1 }),
              n({ type: F });
            const o = i().batch.assignments.filter(
              (e) => e.assignmentType === T.AssignmentType.Course
            )[0];
            n({ type: xe.SET_COURSE, course: o }), o || re(e)(n, i);
          });
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })();
      }
      function Ie(e, t) {
        return (function () {
          var n = _(function* (n) {
            n({ type: xe.SET_LOADING, isLoading: !0 });
            const i = { method: "POST", body: t },
              o = yield V(`/courses/${e}/continue`, i).then(H),
              { courseProgress: r } = o;
            ve(r.course, r),
              n({
                type: xe.SET_COURSE_PROGRESS,
                courseProgress: o.courseProgress,
              }),
              n({ type: xe.SET_LOADING, isLoading: !1 });
          });
          return function (e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function _e(e, t) {
        return (function () {
          var n = _(function* (n) {
            const i = {
                method: "POST",
                body: { certificationTimeRemainingSecs: t },
              },
              o = yield V(
                `/courses/${e}/certificationTimeRemainingSecsSync`,
                i
              ).then(H);
            n({
              type: xe.SET_COURSE_PROGRESS,
              courseProgress: o.courseProgress,
            });
          });
          return function (e) {
            return n.apply(this, arguments);
          };
        })();
      }
      function Re(e = !1) {
        return (function () {
          var t = _(function* (t) {
            const n = yield V("/scaler/work/bonuses/current_and_completed", {
              method: "GET",
            }).then(H);
            t({ type: D, bonuses: n, first: e });
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function je(e) {
        return (function () {
          var t = _(function* (t) {
            t({ type: W, bonus: e });
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function Ee(e, t) {
        return _(function* () {
          yield V("/rateconsent/accept", {
            method: "POST",
            body: { projectId: e, rate: t },
          }).then(H),
            window.location.reload(),
            yield d().delay(5e3);
        });
      }
      function Pe(e, t) {
        return _(function* () {
          yield V("/rateconsent/reject", {
            method: "POST",
            body: { projectId: e, rate: t },
          }).then(H),
            window.location.reload(),
            yield d().delay(5e3);
        });
      }
      function Oe() {
        return (function () {
          var e = _(function* (e) {
            e({ type: Q });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      }
      function Ne(e, t, n, i) {
        const r = (0, S.tQ)();
        y.Z.warn("Skipped Task", {
          assignmentId: t._id,
          attemptId: t.attemptId,
          skipReason: n,
          skipExplanation: i,
          pageLoadId: r,
        });
        const s = { skipReason: n, skipExplanation: i };
        let a, c, d;
        return (
          (0, b.isLegacyReviewAssignment)(t)
            ? ((c = [t.attemptId]),
              t.childIds && (c = c.concat(o().compact(t.childIds))),
              (d = "/attempts/unassign"))
            : ((a = [t._id]),
              t.childIds && (a = a.concat(o().compact(t.childIds))),
              (d = "/tasks/unassign")),
          (function () {
            var e = _(function* (e) {
              const t = yield V(d, {
                method: "POST",
                body: {
                  taskIds: a,
                  attemptIds: c,
                  isSkippedTask: !0,
                  isSkipUserInitiated: !0,
                  info: s,
                },
              }).then(H);
              return (
                t.tooManySkips
                  ? alert(
                      "You have already reached the limit on skips for the day."
                    )
                  : e({ type: $ }),
                t
              );
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })()
        );
      }
      function Le(e) {
        return (function () {
          var t = _(function* (t) {
            t(re(e)), t({ type: N });
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
      }
      function Be() {
        return (function () {
          var e = _(function* (e) {
            e({ type: z });
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      }
    },
  },
]);
