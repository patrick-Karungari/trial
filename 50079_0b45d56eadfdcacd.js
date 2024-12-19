"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [50079],
  {
    616576: function (e, t, n) {
      var i = n(824246),
        s = (n(827378), n(298784)),
        r = n.n(s),
        o = n(68649),
        a = n(626407),
        l = n.n(a),
        c = n(431350),
        d = n(599789),
        u = n(951730),
        p = n(4369);
      const h = (e) => {
        const {
            customerReviewStatus: t,
            numAnnotations: n,
            numErrors: s,
            onShowErrorSummary: o,
            numDisputes: a,
            warning: d,
          } = e,
          p = f();
        let h;
        return (
          r().isNil(a)
            ? s > 0 &&
              (h = (0, i.jsxs)(c.Av, {
                onClick: o,
                className: p.incorrect,
                children: [s, " incorrect ", l()("annotation", s, !1)],
              }))
            : (h = (0, i.jsxs)(c.Av, {
                onClick: o,
                className: a > 0 ? p.incorrect : "",
                children: [a, " disputed ", l()("annotation", a, !1)],
              })),
          (0, i.jsxs)("div", {
            className: p.left,
            children: [
              !!t &&
                (0, i.jsxs)("div", {
                  className: p.status,
                  children: [
                    (0, i.jsx)(u.Z, { color: m(t) }),
                    (0, i.jsx)("span", {
                      className: p.statusText,
                      children: x(t),
                    }),
                  ],
                }),
              (0, i.jsx)("div", {
                className: p.legend,
                children: l()("annotation", n, !0),
              }),
              h,
              d && (0, i.jsx)("div", { children: d }),
            ],
          })
        );
      };
      h.displayName = "AuditPerAnnotationSummary";
      const f = (0, o.ZL)({
        left: {
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
        legend: {
          fontSize: "14px",
          lineHeight: "20px",
          color: "#404040",
          marginLeft: 16,
          marginRight: 16,
        },
        status: { marginLeft: 16, marginRight: 16 },
        statusText: {
          fontSize: "14px",
          lineHeight: "20px",
          color: "#404040",
          marginLeft: 8,
        },
        incorrect: {
          fontSize: "14px",
          lineHeight: "20px",
          color: p.w.RemoRed,
          marginRight: 16,
        },
      });
      function m(e) {
        switch (e) {
          case d.CustomerReviewStatus.Accepted:
            return u.C.Green;
          case d.CustomerReviewStatus.Rejected:
            return u.C.Red;
          case d.CustomerReviewStatus.Fixed:
            return u.C.Yellow;
          default:
            return u.C.Grey;
        }
      }
      function x(e) {
        switch (e) {
          case d.CustomerReviewStatus.Accepted:
            return "Accepted";
          case d.CustomerReviewStatus.Rejected:
            return "Rejected";
          case d.CustomerReviewStatus.Fixed:
            return "Fixed";
          default:
            return "Ready";
        }
      }
      t.Z = h;
    },
    448586: function (e, t, n) {
      n.d(t, {
        D: function () {
          return a;
        },
      });
      var i = n(824246),
        s = n(827378),
        r = n(604375),
        o = n(802638);
      const a = s.memo(function ({ bid: e }) {
        const { 0: t, 1: n } = (0, s.useState)(!1),
          a = (0, s.useCallback)(() => n(!0), []),
          l = (0, s.useCallback)(() => n(!1), []),
          c = (null === e || void 0 === e ? void 0 : e.amountCC) || 0,
          d = (0, s.useMemo)(
            () => (null == c ? "" : (c / 1e4).toFixed(2)),
            [c]
          );
        return (
          (0, s.useEffect)(() => {
            n(!!c);
          }, [c]),
          e
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    style: { paddingRight: "100px" },
                    children: (0, i.jsx)(r.zx, {
                      onClick: a,
                      children: "Task Price",
                    }),
                  }),
                  (0, i.jsxs)(o.u_, {
                    isOpen: t,
                    contentLabel: "Task Price",
                    onRequestClose: l,
                    children: [
                      (0, i.jsx)(o.xB, {
                        onRequestClose: l,
                        children: "Task Price",
                      }),
                      (0, i.jsx)(o.fe, {
                        children: (0, i.jsxs)("div", {
                          style: { textAlign: "center" },
                          children: [
                            (0, i.jsxs)(r.H1, { children: ["$", d] }),
                            (0, i.jsxs)("p", {
                              children: [
                                "Claim this task at a price of ",
                                d,
                                " or press Skip at the bottom of the page to see a new task.",
                                " ",
                                (0, i.jsx)("b", {
                                  children:
                                    "If you think the price is too low given the difficulty of this task, skip it",
                                }),
                                ", but you will not be able to see this task again. You can close this window and look at the task before deciding. You can re-open this window by clicking Task Price at the bottom of the page.",
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null
        );
      });
    },
    722974: function (e, t, n) {
      var i = n(824246),
        s = n(827378),
        r = n(68649),
        o = n(138944),
        a = n(971599),
        l = n(792739);
      const c = (0, r.ZL)({
          lintErrors: {
            marginLeft: "12px",
            alignSelf: "stretch",
            display: "flex",
            alignItems: "center",
            position: "relative",
          },
          lintErrorsTarget: {
            padding: "0 12px",
            height: "36px",
            minWidth: "60px",
            borderRadius: "var(--border-radius)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&.error": { background: "var(--color-reject)" },
            "&.warning": { background: "#f4b01f" },
          },
        }),
        d = ({ lintErrors: e, toggleShowingErrors: t }) => {
          const n = c(),
            s = e.filter(
              (e) => e.severity === a.LintSeverity.ERROR && !e.dismissed
            ),
            r = e.filter(
              (e) => e.severity !== a.LintSeverity.ERROR && !e.dismissed
            );
          return (0, i.jsx)("div", {
            className: n.lintErrors,
            children: (0, i.jsxs)("div", {
              className: (0, o.default)(n.lintErrorsTarget, {
                error: !!s.length,
                warning: !s.length,
              }),
              onClick: t,
              children: [
                (0, i.jsx)(l.G, {
                  icon: "exclamation-triangle",
                  style: { fontSize: "14px", marginRight: "8px" },
                }),
                s.length + r.length,
              ],
            }),
          });
        };
      t.Z = s.memo(d);
    },
    397672: function (e, t, n) {
      var i = n(824246),
        s = n(827378),
        r = n(431350),
        o = n(604375),
        a = n(810365),
        l = n(841892);
      function c(e, t, n, i, s, r, o) {
        try {
          var a = e[r](o),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, s);
      }
      t.Z = (e) => {
        const {
            handleSkip: t,
            id: n,
            type: d,
            project: u,
            canSkip: p,
            response: h,
            isReview: f,
            segmentationResponse: m,
          } = e,
          x = (0, s.useMemo)(
            () => ({
              _id: n,
              task_id: n,
              type: d,
              project: u,
              response: h,
              isReview: !!f,
            }),
            [n, f, u, h, d]
          ),
          g = (0, s.useCallback)(
            ((v = function* () {
              m && (x.response = yield m()), t(x);
            }),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (n, i) {
                var s = v.apply(e, t);
                function r(e) {
                  c(s, n, i, r, o, "next", e);
                }
                function o(e) {
                  c(s, n, i, r, o, "throw", e);
                }
                r(void 0);
              });
            }),
            [t, m, x]
          );
        var v;
        return (
          (0, l.ve)({
            action: () => {
              g();
            },
            disabled: !p,
          }),
          (0, i.jsx)("div", {
            children: (0, i.jsx)(o.u, {
              placement: "left",
              arrow: !0,
              title: p
                ? ""
                : m
                ? "Comment required to skip task. Shift + right click on task to leave comment"
                : "Comment required to skip task. Right click on task to leave comment.",
              children: (0, i.jsx)("div", {
                children: (0, i.jsxs)(
                  r.zx,
                  {
                    htmlType: "button",
                    onClick: g,
                    disabled: !p,
                    children: [
                      "Skip Task",
                      (0, i.jsx)("span", {
                        style: { marginLeft: 4 },
                        children: (0, i.jsx)(a.x, { trigger: "alt+s" }),
                      }),
                    ],
                  },
                  "SkipTaskStudio"
                ),
              }),
            }),
          })
        );
      };
    },
    4490: function (e, t, n) {
      n.d(t, {
        H: function () {
          return g;
        },
      });
      var i = n(824246),
        s = n(827378),
        r = n(802638),
        o = n(68649),
        a = n(162491),
        l = n(411356),
        c = n(285556),
        d = n(298784),
        u = n.n(d),
        p = n(629586),
        h = n(604375),
        f = n(687192);
      function m(e, t, n, i, s, r, o) {
        try {
          var a = e[r](o),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, s);
      }
      function x(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, s) {
            var r = e.apply(t, n);
            function o(e) {
              m(r, i, s, o, a, "next", e);
            }
            function a(e) {
              m(r, i, s, o, a, "throw", e);
            }
            o(void 0);
          });
        };
      }
      const g = ({ hasPadding: e = !0, onClick: t, disabled: n }) =>
          (0, i.jsx)("div", {
            style: { paddingRight: e ? "12px" : "0" },
            children: (0, i.jsx)(l.zx, {
              onClick: t,
              textTransform: "none",
              disabled: n,
              children: "edge case feedback",
            }),
          }),
        v = (0, o.ZL)({
          text: { opacity: 0.75, paddingBottom: "12px", paddingTop: "12px" },
          button: { float: "right", paddingTop: "12px", paddingBottom: "16px" },
          quote: {
            borderLeft: "3px solid var(--color-RemoBlue)",
            paddingLeft: "8px",
            opacity: 0.75,
          },
        });
      t.Z = ({ openModal: e, shadowSubtask: t, onClose: n, setSubmit: o }) => {
        const d = v(),
          { 0: m, 1: g } = (0, s.useState)([]),
          { 0: j, 1: b } = (0, s.useState)(null),
          { 0: y, 1: k } = (0, s.useState)(""),
          { 0: S, 1: C } = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          let e = !1;
          function n() {
            return (n = x(function* () {
              const n = { subtask: t },
                { history: i, feedback: s } = yield (0, c.ZP)(
                  null,
                  "internal/self_serve/fetch_edge_case_info",
                  { query: n }
                );
              e ||
                (g(i),
                b(u().get(s, "taskerResponse.isEdgeCase", null)),
                k(u().get(s, "taskerResponse.summary", "")),
                u().get(s, "taskerResponse.readyForCustomer", !1) && o(),
                C(!1));
            })).apply(this, arguments);
          }
          return (
            C(!0),
            (function () {
              n.apply(this, arguments);
            })(),
            function () {
              e = !0;
            }
          );
        }, [t]);
        const w = (function () {
          var e = x(function* () {
            const e = {
              subtask: t,
              feedback: JSON.stringify({ isEdgeCase: j, summary: y }),
            };
            yield (0, c.ZP)(null, "internal/self_serve/edge_case_feedback", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }),
              o(),
              n();
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
        return (0, i.jsxs)(r.u_, {
          zIndex: 1050,
          maxWidth: 850,
          isOpen: e,
          onRequestClose: n,
          contentLabel: "Edge Case Feedback",
          children: [
            (0, i.jsx)(r.xB, {
              onRequestClose: n,
              children: "Edge Case Feedback",
            }),
            (0, i.jsx)(r.fe, {
              children: S
                ? (0, i.jsx)("div", {
                    style: { height: "100%" },
                    children: (0, i.jsx)(f.Z, {}),
                  })
                : (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsxs)(p.H3, {
                        children: [
                          "Review feedback from ",
                          m.length,
                          " taskers:",
                        ],
                      }),
                      (0, i.jsx)("br", {}),
                      (0, i.jsx)("br", {}),
                      (0, i.jsx)("div", {
                        style: { maxHeight: "250px", overflowY: "scroll" },
                        children: m.map((e, t) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              style: { marginBottom: "10px" },
                              children: [
                                (0, i.jsx)(h.Af, {
                                  size: "small",
                                  color: "secondary",
                                  label: `Issue: ${e.reason}`,
                                }),
                                e.description &&
                                  (0, i.jsx)("blockquote", {
                                    className: d.quote,
                                    children: e.description,
                                  }),
                                !e.description &&
                                  (0, i.jsx)("blockquote", {
                                    className: d.quote,
                                    children: (0, i.jsx)("i", {
                                      children: "No description provided",
                                    }),
                                  }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                      (0, i.jsx)("br", {}),
                      (0, i.jsx)(p.x, {
                        children:
                          "Do you think it's actually unclear how to complete this task (given the project's instructions)?",
                      }),
                      (0, i.jsx)(h.Ee, {
                        value: u().isNil(j) ? null : String(j),
                        onChange: (e) => b("true" === e),
                        children: [
                          { label: "Yes", value: "true" },
                          { label: "No", value: "false" },
                        ].map(({ value: e, label: t }) =>
                          (0, i.jsx)(
                            h.Y8,
                            {
                              disabled: !1,
                              value: e,
                              label: t,
                              labelPlacement: "end",
                            },
                            e
                          )
                        ),
                      }),
                      j &&
                        (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)("br", {}),
                            (0, i.jsx)(p.x, {
                              children:
                                "Write a brief summary for the customer explaining exactly what about the instructions is unclear or missing.",
                            }),
                            (0, i.jsx)(a.Z, {
                              placeholder: "This task is unclear because...",
                              value: y,
                              onChange: (e) => k(e.target.value),
                              style: { height: "100px" },
                            }),
                            y.length < 40 &&
                              (0, i.jsx)("div", {
                                style: { color: "red", opacity: 0.75 },
                                children: "(explanation is too short)",
                              }),
                          ],
                        }),
                      (0, i.jsx)("div", {
                        className: d.button,
                        children: (0, i.jsx)(l.zx, {
                          onClick: () => w(),
                          primary: !0,
                          disabled: u().isNil(j) || (j && y.length < 40),
                          textTransform: "none",
                          children: "Submit",
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        });
      };
    },
    298869: function (e, t, n) {
      n.d(t, {
        dj: function () {
          return x;
        },
        T2: function () {
          return v;
        },
      });
      var i = n(824246),
        s = n(827378),
        r = n(68649),
        o = n(431350),
        a = n(285556),
        l = n(604375),
        c = n(267321),
        d = n(48725),
        u = n(554211),
        p = n(59524),
        h = n(433310),
        f = n(792739);
      function m(e, t, n, i, s, r, o) {
        try {
          var a = e[r](o),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, s);
      }
      const x = ({ hasPadding: e = !0, onClick: t, disabled: n }) =>
          (0, i.jsx)("div", {
            style: { paddingRight: e ? "12px" : "0" },
            children: (0, i.jsx)(o.zx, {
              onClick: t,
              disabled: n,
              children: "Help",
            }),
          }),
        g = (0, r.ZL)({
          descriptionBox: {
            minHeight: 200,
            paddingLeft: "18px",
            paddingRight: "18px",
          },
          subjectBox: {
            paddingBottom: "12px",
            paddingTop: "20px",
            paddingLeft: "18px",
            paddingRight: "18px",
          },
          languageBox: {
            paddingBottom: "20px",
            paddingTop: "12px",
            paddingLeft: "18px",
            paddingRight: "18px",
            display: "flex",
            "flex-direction": "column",
          },
          submitButtonBox: {
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            paddingBottom: "20px",
            paddingTop: "20px",
          },
          doneButtonBox: {
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
            paddingBottom: "20px",
            paddingTop: "20px",
          },
          progress: {
            paddingTop: "200px",
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
          },
          sideModal: {
            "& .MuiPaper-root": {
              position: "absolute",
              top: 0,
              right: 0,
              margin: "0 !important",
              width: 420,
              bottom: 0,
              borderRadius: "0 !important",
              maxHeight: "inherit",
            },
          },
          close: {
            paddingTop: "20px",
            paddingRight: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            color: "black",
            "font-size": "13px",
            cursor: "pointer",
            opacity: 0.7,
          },
          catagoryBox: {
            marginTop: "100px",
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "50px",
            border: "2px solid black",
            borderRadius: "5px",
          },
          catagoryBoxContainer: { marginTop: "100px" },
        }),
        v = (e) => {
          const t = (0, u.ZP)("in_task_support_poc_dev", {}, !1),
            n = (0, u.ZP)(
              "in_task_support_poc_dev_by_project",
              { projectId: e },
              !1
            );
          return t && n;
        };
      t.ZP = ({ openModal: e, taskId: t, onClose: n, userId: r }) => {
        const u = g(),
          { 0: x, 1: v } = (0, s.useState)(""),
          { 0: j, 1: b } = (0, s.useState)("English"),
          { 0: y, 1: k } = (0, s.useState)(""),
          { 0: S, 1: C } = (0, s.useState)(!1),
          { 0: w, 1: R } = (0, s.useState)(!0),
          { 0: T, 1: E } = (0, s.useState)(!1),
          N = (function () {
            var e,
              n =
                ((e = function* () {
                  if (0 === x.length && 0 === y.length)
                    return (
                      h.Z.info(
                        "InTaskSupportEvent Empty Content Submit Button Click"
                      ),
                      (0, p.Kz)(p.ju.InTaskSupportEvent, {
                        userId: null !== r && void 0 !== r ? r : "",
                        taskId: t,
                        eventName: "Empty Content Submit Button Click",
                        subjectText: x,
                        descriptionText: y,
                      }),
                      alert("Empty Subject and Description")
                    );
                  h.Z.info("InTaskSupportEvent Submit Button Click"),
                    (0, p.Kz)(p.ju.InTaskSupportEvent, {
                      userId: null !== r && void 0 !== r ? r : "",
                      taskId: t,
                      eventName: "Submit Button Click",
                      subjectText: x,
                      descriptionText: y,
                    });
                  const e = {
                    ticket: JSON.stringify({
                      taskId: t,
                      preferedLanguage: j,
                      subjectText: x,
                      descriptionText: y,
                    }),
                  };
                  E(!0),
                    yield (0, a.ZP)(
                      null,
                      "internal/self_serve/submit_task_support_ticket",
                      { method: "POST", body: e }
                    ),
                    E(!1),
                    C(!0);
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (i, s) {
                    var r = e.apply(t, n);
                    function o(e) {
                      m(r, i, s, o, a, "next", e);
                    }
                    function a(e) {
                      m(r, i, s, o, a, "throw", e);
                    }
                    o(void 0);
                  });
                });
            return function () {
              return n.apply(this, arguments);
            };
          })();
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsxs)(d.ZP, {
              className: u.sideModal,
              open: e && w,
              onClose: n,
              children: [
                (0, i.jsx)(d.$N, {
                  className: u.catagoryBox,
                  children: (0, i.jsxs)("div", {
                    onClick: () => {
                      window.open(
                        "https://support.remotasks.com/hc/en-us/requests/new",
                        "_blank"
                      );
                    },
                    children: [
                      (0, i.jsx)(l.H2, {
                        children:
                          "If this is a platform issue, click this box.",
                      }),
                      (0, i.jsx)("div", {}),
                      (0, i.jsx)(l.H3, { children: "Example platform issues" }),
                      (0, i.jsxs)("ul", {
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(l.H3, {
                              children: "Can I get added to the project?",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(l.H3, {
                              children:
                                "I have been disabled/removed and would like to be added back. ",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(l.H3, {
                              children: "When will I get paid? ",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(d.$N, {
                  className: u.catagoryBox,
                  children: (0, i.jsxs)("div", {
                    onClick: () => {
                      R(!1);
                    },
                    children: [
                      (0, i.jsx)(l.H2, {
                        children:
                          "If you need specific help about this task or this project. Click this box.",
                      }),
                      (0, i.jsx)("div", {}),
                      (0, i.jsx)(l.H3, { children: "Example task issues" }),
                      (0, i.jsxs)("ul", {
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(l.H3, {
                              children:
                                "Do we label people sitting in an open restaurant as pedestrians?",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(l.H3, {
                              children:
                                "What if a unit of measure is given but I don\u2019t see the a matching label option?",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(l.H3, {
                              children:
                                "What should I do if there are two brand names?",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(d.ZP, {
              className: u.sideModal,
              open: e && !S && !T && !w,
              onClose: n,
              children: [
                (0, i.jsx)("div", {
                  className: u.close,
                  onClick: () => {
                    n(),
                      (0, p.Kz)(p.ju.InTaskSupportEvent, {
                        userId: null !== r && void 0 !== r ? r : "",
                        taskId: t,
                        eventName: "Close Button Click Before Submit",
                      });
                  },
                  children: (0, i.jsx)(f.G, { icon: "times" }),
                }),
                (0, i.jsx)(d.$N, {
                  children: (0, i.jsx)("span", {
                    children: "Submit A Tasking Question",
                  }),
                }),
                (0, i.jsx)("div", {
                  children: (0, i.jsxs)(d.cZ, {
                    children: [
                      (0, i.jsxs)("p", {
                        children: [
                          "We\u2019d love to help improve your quality to increase your payout! Please use this tool to ask training questions.",
                          " ",
                        ],
                      }),
                      " ",
                      (0, i.jsx)("p", {
                        children:
                          "This is currently a beta version of this feature available to a small pool of taskers.",
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: u.subjectBox,
                  children: [
                    (0, i.jsx)("label", { children: "Subject *" }),
                    (0, i.jsx)(l.oi, {
                      size: "large",
                      fullWidth: !0,
                      value: x,
                      label: "Please provide subject before click submit",
                      onChange: (e) => {
                        v(e.target.value);
                      },
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: u.languageBox,
                  children: [
                    (0, i.jsx)("label", { children: "Prefered Language *" }),
                    (0, i.jsx)(c.Ph, {
                      value: j,
                      onChange: (e) => b(e.target.value),
                      children: ["English", "Spanish"].map((e) =>
                        (0, i.jsx)(c.Wx, { value: e, children: e }, e)
                      ),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: u.descriptionBox,
                  children: [
                    (0, i.jsx)("label", { children: "Description *" }),
                    (0, i.jsx)(d.fS, {
                      style: { fontSize: 12 },
                      children:
                        "Please include if possible cuboid name, label instance number, frame, etc",
                    }),
                    (0, i.jsx)(l.oi, {
                      size: "large",
                      fullWidth: !0,
                      multiline: !0,
                      value: y,
                      label: "Please provide description before click submit",
                      onChange: (e) => {
                        k(e.target.value);
                      },
                      rows: 10,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: u.submitButtonBox,
                  children: (0, i.jsx)(o.zx, {
                    onClick: N,
                    type: "primary",
                    disabled: T,
                    children: "Submit",
                  }),
                }),
              ],
            }),
            (0, i.jsx)(d.ZP, {
              className: u.sideModal,
              open: e && T,
              onClose: n,
              children: (0, i.jsx)("div", {
                className: u.progress,
                children: (0, i.jsx)(l.D8, { size: 20 }),
              }),
            }),
            (0, i.jsxs)(d.ZP, {
              className: u.sideModal,
              open: e && S && !w,
              onClose: n,
              children: [
                (0, i.jsx)(d.$N, {
                  children: (0, i.jsx)("span", {
                    children: "Thanks for submitting a training question",
                  }),
                }),
                (0, i.jsx)(d.cZ, {
                  children: (0, i.jsx)("p", {
                    children:
                      "We're glad you're investing in improving your quality of tasking.",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: u.doneButtonBox,
                  children: (0, i.jsx)(o.zx, {
                    onClick: () => n(),
                    type: "primary",
                    children: "Done",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    194892: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var i = n(824246),
        s = n(827378),
        r = n(245203),
        o = n(160337),
        a = n(222357),
        l = n(68649),
        c = n(616576),
        d = n(914524);
      const u = (e) => {
        const { onShowErrorSummary: t, response: n, taskType: s } = e,
          r = p(),
          {
            numAnnotations: o,
            numErrors: a,
            numDisputes: l,
          } = (0, d.VA)(s, n.perAnnotationErrors, n);
        return (0, i.jsx)("div", {
          className: r.footer,
          children: (0, i.jsx)(c.Z, {
            numAnnotations: o,
            numErrors: a,
            numDisputes: l,
            readOnly: !0,
            onShowErrorSummary: t,
          }),
        });
      };
      u.displayName = "AuditFeedbackFooter";
      const p = (0, l.ZL)({
        footer: {
          height: 64,
          background: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingRight: 16,
          position: "absolute",
          bottom: 0,
        },
      });
      var h = u,
        f = n(376189),
        m = n(528429);
      function x(e, t, n, i, s, r, o) {
        try {
          var a = e[r](o),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, s);
      }
      function g(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, s) {
            var r = e.apply(t, n);
            function o(e) {
              x(r, i, s, o, a, "next", e);
            }
            function a(e) {
              x(r, i, s, o, a, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function v(e, t, n) {
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
      function j(e) {
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
              v(e, t, n[t]);
            });
        }
        return e;
      }
      var b = (e) => {
        const { 0: t, 1: n } = (0, s.useState)(!1),
          { 0: l, 1: c } = (0, s.useState)(!1),
          { 0: d, 1: u } = (0, s.useState)(e.subtask),
          { fetchUnprocessedAttachments: p } = (0, f.Z)();
        (0, s.useEffect)(() => {
          function e() {
            return (e = g(function* () {
              if (!(0, m.H)(d.params)) return;
              const e = d.params;
              var t;
              var n;
              const i =
                null !==
                  (n = (
                    null !==
                      (t =
                        null === e || void 0 === e ? void 0 : e.attachments) &&
                    void 0 !== t
                      ? t
                      : []
                  ).filter(
                    (e) =>
                      "string" !== typeof e &&
                      "type" in e &&
                      "unprocessed" === e.type
                  )) && void 0 !== n
                  ? n
                  : [];
              var s;
              i &&
                i.length > 0 &&
                ((e.attachments = yield p(
                  null !== (s = e.attachments) && void 0 !== s ? s : []
                )),
                (d.params.attachments = e.attachments),
                u(j({}, d)));
            })).apply(this, arguments);
          }
          !(function () {
            e.apply(this, arguments);
          })();
        }, []);
        const x = () => {
            c(!0);
          },
          v = () => {
            c(!1);
          },
          b = (function () {
            var e = g(function* () {
              c(!1);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          y = () => {
            n(!1);
          },
          k = () => {
            var n;
            if (
              null === (n = e.subtask.response) || void 0 === n
                ? void 0
                : n.perAnnotationErrors
            ) {
              return {
                isMakingChanges: !1,
                onStartFeedback: x,
                open: l,
                onClose: v,
                perAnnotationErrors: e.subtask.response.perAnnotationErrors,
                onSetErrors: b,
                showErrorSummary: t,
                onHideErrorSummary: y,
                isAuditPlusDispute: !1,
                readOnly: !0,
              };
            }
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r.Z, {
              responses: (() => {
                var t;
                const n = [...e.responses];
                if (
                  e.conciseMode &&
                  (null === (t = e.finalDiffResponse) || void 0 === t
                    ? void 0
                    : t.annotations)
                ) {
                  const t = Object.values(e.finalDiffResponse.annotations)
                      .flatMap((e) => e.response)
                      .map((e) => e.result),
                    i =
                      t.filter((e) => e === a.GraderResult.Correct).length ===
                      t.length,
                    s = n.find((e) => e.name === o.DiffView.TaskerResponse);
                  if (i && s) return [s];
                }
                e.stepDiffResponse &&
                  n.push({
                    name: o.DiffView.StepDiff,
                    displayName: o.DiffView.StepDiff,
                    graderDiffResponse: e.stepDiffResponse,
                  }),
                  e.finalDiffResponse &&
                    n.push({
                      name: o.DiffView.VisualDiff,
                      displayName: "Diff to Final",
                      graderDiffResponse: e.finalDiffResponse,
                    }),
                  e.scenarioDiffResponse &&
                    n.push({
                      name: o.DiffView.VisualDiff,
                      displayName: "Initial to Expected Diff",
                      graderDiffResponse: e.scenarioDiffResponse,
                    });
                const i = e.responses.find(
                  (e) => e.name === o.DiffView.ProblemZones
                );
                if (i) {
                  const e = (e) => {
                    var t, n, s, r;
                    return !!(null === i ||
                    void 0 === i ||
                    null === (t = i.response) ||
                    void 0 === t ||
                    null === (n = t.annotations) ||
                    void 0 === n ||
                    null === (s = n[e]) ||
                    void 0 === s ||
                    null === (r = s.annotations) ||
                    void 0 === r
                      ? void 0
                      : r.length);
                  };
                  i.isFrameRejected = e;
                }
                return n;
              })(),
              config: e.config,
              subtask: d,
              auditCorruptions: e.auditCorruptions,
              hideLabels: e.hideLabels,
              auditPerAnnotation: k(),
              customDivHeight: e.customDivHeight,
            }),
            !!k() &&
              (0, i.jsx)(h, {
                onShowErrorSummary: () => {
                  n(!0);
                },
                response: e.subtask.response,
                taskType: e.subtask.type,
              }),
          ],
        });
      };
    },
    951730: function (e, t, n) {
      n.d(t, {
        C: function () {
          return i;
        },
      });
      var i,
        s = n(824246),
        r = n(679892),
        o = n.n(r);
      n(827378);
      !(function (e) {
        (e.Green = "green"),
          (e.Red = "red"),
          (e.Yellow = "yellow"),
          (e.Blue = "blue"),
          (e.Indigo = "indigo"),
          (e.Grey = "grey");
      })(i || (i = {}));
      const a = (e) => {
        switch (e) {
          case i.Green:
            return "#49D271";
          case i.Red:
            return "#FF1D52";
          case i.Yellow:
            return "#FFC900";
          case i.Blue:
            return "#0074FF";
          case i.Indigo:
            return "#6A5DF9";
          case i.Grey:
          default:
            return "#cccccc";
        }
      };
      t.Z = ({ color: e }) =>
        (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className: o().dynamic([["bfad748fddc1735f", [a(e)]]]),
            }),
            (0, s.jsx)(o(), {
              id: "bfad748fddc1735f",
              dynamic: [a(e)],
              children: `div.__jsx-style-dynamic-selector{background:${a(
                e
              )};width:8px;height:8px;display:inline-block;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%}`,
            }),
          ],
        });
    },
    551556: function (e, t, n) {
      n.d(t, {
        I: function () {
          return s;
        },
      });
      var i = n(827378);
      t.Z = i.useEffect;
      const s = i.useLayoutEffect;
    },
    276522: function (e, t, n) {
      var i = n(167469),
        s = n(285556),
        r = n(827378),
        o = n(279220),
        a = n(210918);
      function l(e, t, n, i, s, r, o) {
        try {
          var a = e[r](o),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, s);
      }
      t.Z = function (e, t, n, c = !1) {
        var d;
        const u = null !== (d = e._id) && void 0 !== d ? d : e,
          p =
            t === i.TaskType.TextCollection ||
            t === i.TaskType.ImageAnnotation ||
            t === i.TaskType.SegmentAnnotation ||
            t === i.TaskType.Chat,
          h =
            t === i.TaskType.TextCollection ||
            t === i.TaskType.ImageAnnotation ||
            t === i.TaskType.SegmentAnnotation ||
            t === i.TaskType.Chat,
          { 0: f, 1: m } = (0, r.useState)(!1),
          { 0: x, 1: g } = (0, r.useState)(!1),
          { 0: v, 1: j } = (0, r.useState)(!1);
        var b;
        return (
          (0, o.Z)(
            ((b = function* () {
              const {
                sensitiveContentReportingEnabledForAttempt: e,
                sensitiveContentReportingEnabledForReview: t,
                highRiskSensitiveContentReportingEnabledForAttempt: n,
                highRiskSensitiveContentReportingEnabledForReview: i,
                registerTaskAttemptsEnabledForSensitiveContentReporting: r,
              } = yield (0, s.ZP)(
                null,
                `internal/sensitive-content-reporting/config/${u}`,
                { method: "GET" }
              );
              m(c ? t : e), g(c ? i : n), j(r);
            }),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (n, i) {
                var s = b.apply(e, t);
                function r(e) {
                  l(s, n, i, r, o, "next", e);
                }
                function o(e) {
                  l(s, n, i, r, o, "throw", e);
                }
                r(void 0);
              });
            })
          ),
          {
            enableSensitiveContentReporting: f && p,
            enableHighRiskSensitiveContentReporting: x && h,
            enableRegisterTaskAttemptForSensitiveContentReporting: v,
            useBulbaSensitiveContentReporting: (0, a.isAnyGaiusCustomerId)(n),
          }
        );
      };
    },
    66443: function (e, t, n) {
      var i = n(285556);
      function s(e, t, n, i, s, r, o) {
        try {
          var a = e[r](o),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, s);
      }
      const r = [],
        o = [],
        a = [],
        l = [];
      let c = null;
      const d = (function () {
        var e,
          t =
            ((e = function* () {
              if (r.length || o.length || a.length || l.length)
                try {
                  const e = {
                    incrMetricsBin: [...r],
                    gaugeMetricsBin: [...o],
                    histogramMetricsBin: [...a],
                    distributionMetricsBin: [...l],
                  };
                  (r.length = 0),
                    (o.length = 0),
                    (a.length = 0),
                    (l.length = 0),
                    yield (0, i.ZP)(
                      null,
                      "internal/frontendMetrics/flushMetrics",
                      {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: { "Content-Type": "application/json" },
                      }
                    );
                } catch (e) {}
            }),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (i, r) {
                var o = e.apply(t, n);
                function a(e) {
                  s(o, i, r, a, l, "next", e);
                }
                function l(e) {
                  s(o, i, r, a, l, "throw", e);
                }
                a(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })();
      class u {
        constructor(e) {
          (this.namespace = e),
            (this.incr = (e, t, n) => {
              r.push({ key: p(this.namespace, e), value: t, tags: n });
            }),
            (this.gauge = (e, t, n) => {
              o.push({ key: p(this.namespace, e), value: t, tags: n });
            }),
            (this.histogram = (e, t, n) => {
              a.push({ key: p(this.namespace, e), value: t, tags: n });
            }),
            (this.distribution = (e, t, n) => {
              l.push({ key: p(this.namespace, e), value: t, tags: n });
            });
        }
      }
      const p = (e, t) => (e && e.length > 0 ? e + "." + t : t);
      t.Z = (e) => {
        if ((c || (c = setInterval(() => d(), 1e4)), Array.isArray(e))) {
          const t = e.join(".");
          return new u(t);
        }
        return new u(e);
      };
    },
    680840: function (e, t, n) {
      n.d(t, {
        r0: function () {
          return r;
        },
        aE: function () {
          return o;
        },
      });
      var i = n(167469);
      const s = (0, n(66443).Z)("textcollection"),
        r = (e, t, n, r) => {
          e === i.TaskType.TextCollection &&
            s.incr("lintTask", 1, {
              projectName: t || "undefined_project_name",
              projectId: n || "undefined_project_id",
              assignmentId: r || "undefined_assignment_id",
            });
        },
        o = (e, t) => {
          e &&
            e === i.TaskType.TextCollection &&
            s.incr("viewTask", 1, {
              projectName: t || "undefined_project_name",
            });
        };
    },
  },
]);
