"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [54981],
  {
    58739: function (e, t, s) {
      var i = s(824246);
      s(827378);
      t.Z = () =>
        (0, i.jsxs)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("path", { d: "M10.5 0H0V24H10.5V0Z", fill: "#29CD9C" }),
            (0, i.jsx)("path", {
              d: "M18.75 0C15.855 0 13.5 2.355 13.5 5.25V10.5H18.75C21.645 10.5 24 8.145 24 5.25V0H18.75Z",
              fill: "#29CD9C",
            }),
          ],
        });
    },
    801640: function (e, t, s) {
      s.d(t, {
        iA: function () {
          return x;
        },
        p3: function () {
          return v;
        },
        Td: function () {
          return u;
        },
        Th: function () {
          return h;
        },
        hr: function () {
          return y;
        },
        Tr: function () {
          return b;
        },
      });
      var i = s(824246),
        n = s(679892),
        o = s.n(n),
        r = s(827378),
        a = s(60042),
        l = s.n(a);
      function c(e, t, s) {
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
      function d(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      var u = (e) => {
        var {
            children: t,
            title: s,
            leftSep: n = !1,
            ellipsis: r = !1,
            border: a = !0,
            center: u = !1,
            right: p = !1,
            bold: m = !1,
            black: h = !1,
            striped: g = !1,
            padding: f = !1,
            maxPadding: b = !1,
            leftSepNoBorder: x = !1,
          } = e,
          v = d(e, [
            "children",
            "title",
            "leftSep",
            "ellipsis",
            "border",
            "center",
            "right",
            "bold",
            "black",
            "striped",
            "padding",
            "maxPadding",
            "leftSepNoBorder",
          ]);
        return (0, i.jsxs)(
          "td",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(s);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                  })
                )),
                i.forEach(function (t) {
                  c(e, t, s[t]);
                });
            }
            return e;
          })({}, v, {
            title: s,
            className:
              "jsx-cd2084286836d3b " +
              (l()("td", {
                leftSep: n,
                leftSepNoBorder: x,
                ellipsis: r,
                center: u,
                right: p,
                bold: m,
                black: h,
                striped: g,
                padding: f,
                maxPadding: b,
                border: a,
              }) || ""),
            children: [
              t,
              (0, i.jsx)(o(), {
                id: "cd2084286836d3b",
                children:
                  ".td.jsx-cd2084286836d3b{padding:12px 0}.td.border.jsx-cd2084286836d3b{border-top:1px solid#eee}.td.center.jsx-cd2084286836d3b{text-align:center}.td.right.jsx-cd2084286836d3b{text-align:right}.td.bold.jsx-cd2084286836d3b{font-weight:600}.td.black.jsx-cd2084286836d3b{color:black}.td.padding.jsx-cd2084286836d3b{padding:12px}.td.maxPadding.jsx-cd2084286836d3b{padding-top:18px;padding-bottom:18px}.td.leftSep.jsx-cd2084286836d3b{padding-left:10px;border-left:1px solid#eee}.td.leftSepNoBorder.jsx-cd2084286836d3b{padding-left:8px}.td.ellipsis.jsx-cd2084286836d3b{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}",
              }),
            ],
          })
        );
      };
      function p(e, t, s) {
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
      function m(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      var h = (e) => {
        var {
            children: t,
            colSpan: s,
            leftSepNoBorder: n = !1,
            leftSep: r = !1,
            smallFont: a = !1,
            smallLabel: c = !1,
            center: d = !1,
            bold: u = !1,
            black: h = !1,
            padding: g = !1,
            width: f,
          } = e,
          b = m(e, [
            "children",
            "colSpan",
            "leftSepNoBorder",
            "leftSep",
            "smallFont",
            "smallLabel",
            "center",
            "bold",
            "black",
            "padding",
            "width",
          ]);
        return (0, i.jsxs)(
          "th",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(s);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                  })
                )),
                i.forEach(function (t) {
                  p(e, t, s[t]);
                });
            }
            return e;
          })({}, b, {
            width: f,
            colSpan: s,
            className:
              "jsx-37d43d5e5a7f1947 " +
              (l()("th", {
                leftSepNoBorder: n,
                leftSep: r,
                smallFont: a,
                smallLabel: c,
                center: d,
                bold: u,
                black: h,
                padding: g,
              }) || ""),
            children: [
              t,
              (0, i.jsx)(o(), {
                id: "37d43d5e5a7f1947",
                children:
                  ".th.jsx-37d43d5e5a7f1947{text-transform:uppercase;font-size:12px;color:rgba(0,0,0,.4);line-height:2.4}.th.center.jsx-37d43d5e5a7f1947{text-align:center}.th.bold.jsx-37d43d5e5a7f1947{font-weight:600}.th.black.jsx-37d43d5e5a7f1947{color:black}.th.smallFont.jsx-37d43d5e5a7f1947{font-size:11px}.th.smallLabel.jsx-37d43d5e5a7f1947{line-height:1;font-size:80%}.th.leftSep.jsx-37d43d5e5a7f1947{padding-left:10px;border-left:1px solid#eee}.th.leftSepNoBorder.jsx-37d43d5e5a7f1947{padding-left:8px}.th.padding.jsx-37d43d5e5a7f1947{padding:12px 3px}",
              }),
            ],
          })
        );
      };
      function g(e, t, s) {
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
      function f(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      var b = r.forwardRef((e, t) => {
        var { children: s, striped: n = !1, stripedColor: r } = e,
          a = f(e, ["children", "striped", "stripedColor"]);
        return (0, i.jsxs)(
          "tr",
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var s = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(s);
              "function" === typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                  })
                )),
                i.forEach(function (t) {
                  g(e, t, s[t]);
                });
            }
            return e;
          })({}, a, {
            ref: t,
            className:
              o().dynamic([
                [
                  "a0205b4243ebcc05",
                  [null !== r && void 0 !== r ? r : "#f9f9f9"],
                ],
              ]) +
              " " +
              (l()("tr", { striped: n }) || ""),
            children: [
              s,
              (0, i.jsx)(o(), {
                id: "a0205b4243ebcc05",
                dynamic: [null !== r && void 0 !== r ? r : "#f9f9f9"],
                children: `.tr.striped.__jsx-style-dynamic-selector{background:${
                  null !== r && void 0 !== r ? r : "#f9f9f9"
                }}`,
              }),
            ],
          })
        );
      });
      const x = ({ children: e, style: t, border: s = !1, black: n = !0 }) =>
          (0, i.jsxs)("table", {
            style: t,
            className:
              "jsx-decfd180fb37febb " + (l()({ border: s, black: n }) || ""),
            children: [
              e,
              (0, i.jsx)(o(), {
                id: "decfd180fb37febb",
                children:
                  "table.jsx-decfd180fb37febb{width:100%;text-align:left}table.black.jsx-decfd180fb37febb{color:black}table.border.jsx-decfd180fb37febb{border-bottom:1px solid#eee}",
              }),
            ],
          }),
        v = ({ children: e }) => (0, i.jsx)("tbody", { children: e }),
        y = ({ children: e, style: t, className: s }) =>
          (0, i.jsx)("thead", { style: t, className: s, children: e });
    },
    164691: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = s(824246),
        n = s(776845),
        o = s(722030),
        r = s(416534),
        a = s(827378),
        l = s(285556);
      function c(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      var d = ({
        projectId: e,
        overrideInstructions: t,
        startTasks: s,
        hideStartTasks: d = !1,
      }) => {
        const { 0: u, 1: p } = (0, a.useState)(!0),
          { 0: m, 1: h } = (0, a.useState)(null !== t && void 0 !== t ? t : "");
        return (
          (0, a.useEffect)(() => {
            const s = (function () {
              var e,
                t =
                  ((e = function* (e) {
                    try {
                      const t = yield (function (e) {
                        return (0, l.ZP)(
                          null,
                          `internal/scaler/${e}/instructionUrl`,
                          { method: "GET" }
                        );
                      })(e);
                      h(t.instructionUrl), p(!1);
                    } catch (t) {}
                  }),
                  function () {
                    var t = this,
                      s = arguments;
                    return new Promise(function (i, n) {
                      var o = e.apply(t, s);
                      function r(e) {
                        c(o, i, n, r, a, "next", e);
                      }
                      function a(e) {
                        c(o, i, n, r, a, "throw", e);
                      }
                      r(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
            t ? (h(t), p(!1)) : s(e);
          }, [t, e]),
          (0, i.jsxs)("div", {
            className:
              "scaleui scaleui-tailwind scale-theme flex flex-col w-full h-full bg-neutral-700 p-8 overflow-auto",
            style: { gap: 32 },
            children: [
              !d &&
                (0, i.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, i.jsx)(n.ZT.Paragraph1, {
                    className: "text-neutral-0",
                    children:
                      "Read the instructions carefully, and proceed to the task once finished. Important: The timer for this task has started.",
                  }),
                }),
              u
                ? (0, i.jsx)("div", {
                    className: "flex justify-center",
                    style: {
                      width: "100%",
                      maxWidth: "75vw",
                      minHeight: 0,
                      flex: "1",
                      margin: "0 auto",
                    },
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, i.jsx)(o.$, { size: "sm", variant: "primary" }),
                        (0, i.jsx)(n.ZT.Paragraph1, {
                          className: "text-neutral-0",
                          children: "Loading instructions...",
                        }),
                      ],
                    }),
                  })
                : (0, i.jsx)("iframe", {
                    style: {
                      width: "100%",
                      maxWidth: "75vw",
                      flex: "1",
                      minHeight: 0,
                      margin: "0 auto",
                    },
                    className: "rounded border border-primary-300 bg-neutral-0",
                    src: m + "?embedded=true",
                    allowFullScreen: !0,
                  }),
              !d &&
                (0, i.jsx)("div", {
                  className: "w-full flex justify-center",
                  children: (0, i.jsx)(r.zx, {
                    size: "lg",
                    onClick: s,
                    children: "Start tasking",
                  }),
                }),
            ],
          })
        );
      };
    },
    981411: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = s(824246),
        n = s(827378);
      class o extends n.PureComponent {
        render() {
          let e = this.props.urls;
          return (
            this.props.disableTaskerPrefetchLimit ||
              (this.props.limitPrefetchedLargeImages
                ? (e = this.props.urls.slice(0, 5))
                : this.props.limitPrefetchedImages &&
                  (e = this.props.urls.slice(0, 60))),
            (0, i.jsx)("div", {
              className: "prerender",
              children: e.map((e) =>
                (0, i.jsx)(
                  "link",
                  { rel: "prefetch", crossOrigin: "anonymous", href: e },
                  e
                )
              ),
            })
          );
        }
      }
    },
    658178: function (e, t, s) {
      s.d(t, {
        H5: function () {
          return f;
        },
        $j: function () {
          return b;
        },
        Ck: function () {
          return v;
        },
        _d: function () {
          return y;
        },
        nH: function () {
          return j;
        },
        L7: function () {
          return S;
        },
      });
      var i = s(298784),
        n = s.n(i),
        o = s(257881),
        r = s(854358),
        a = s(599789),
        l = s(900218),
        c = s(844159),
        d = s(285556),
        u = s(151785);
      function p(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function m(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              p(o, i, n, r, a, "next", e);
            }
            function a(e) {
              p(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function h(e, t, s) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              h(e, t, s[t]);
            });
        }
        return e;
      }
      function f(e, t) {
        return (
          t &&
          !n().isUndefined(e) &&
          ![a.ReviewLevel.Attempt, a.ReviewLevel.ReviewConsensus].includes(e)
        );
      }
      function b(e) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = m(function* (e) {
          return yield (0, u.ZP)(
            m(function* () {
              const { response: t } = yield (0, d.ZP)(
                null,
                "internal/genai/loadChatResponse",
                { method: "POST", body: { response: e } }
              );
              return t;
            }),
            { limit: 3 }
          );
        })).apply(this, arguments);
      }
      function v({ response: e, config: t, reviewLevel: s, readOnly: i }) {
        if (n().isNil(s)) return e;
        const o = new l.ChatHistory(t, e),
          a = o.getFlattenedStepsWithResponses(),
          d = n().cloneDeep(e.responses);
        let u = "";
        for (let n = 0; n < a.length; n++) {
          const [e, m] = a[n];
          if (!e || !m)
            throw new Error(
              "step params or response is undefined when filtering responses for the current review level"
            );
          var p;
          const h =
            null !== (p = e.params.visibility_restricted) && void 0 !== p
              ? p
              : [];
          if (
            (0, l.isStepVisible)(e, s) ||
            !h.every((e) => s < e) ||
            t.turnLocking
          ) {
            if (
              (e.type === r.InteractionStepType.MultiTurnContinue &&
                (d[n].context = g({}, d[n].context, { message: u })),
              !i && e.type === r.InteractionStepType.QualityMeasurement)
            ) {
              const t = {
                type: e.type,
                context: o.getNullContext(e),
                contextType: r.ContextType.Skipped,
                output: u,
              };
              d[n] = g({}, d[n], t);
            }
            ((n < t.before.length &&
              e.type === r.InteractionStepType.PromptInput) ||
              c.RESPONSE_GENERATOR_STEPS.includes(e.type)) &&
              (u = m.output),
              (n !== t.before.length - 1 &&
                e.type !== r.InteractionStepType.MultiTurnContinue) ||
                (u = "");
          } else {
            let t = o.getNullContext(e);
            if (
              e.type === r.InteractionStepType.ModelResponseSelector &&
              e.params.force_consistent_responses
            ) {
              t = g({}, t, {
                candidates: m.context.candidates.filter(
                  (e) => "existing" !== e.id
                ),
              });
            }
            const s = {
              type: e.type,
              context: t,
              contextType: r.ContextType.Skipped,
              output: u,
            };
            d[n] = g({}, d[n], s);
          }
        }
        return g({}, e, { responses: d });
      }
      function y(e, t, s) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = m(function* (e, t, s) {
          const i = e.map((e) => {
            const {
              comment: i,
              childId: n,
              locationStart: o,
              locationEnd: r,
              overrideChildId: a,
              turn: l,
              title: c,
              quotedText: d,
            } = e;
            return {
              assignmentId: t,
              comment: i,
              author: s,
              childId: null !== a && void 0 !== a ? a : n,
              locationStart: o,
              locationEnd: r,
              turn: l,
              title: c,
              quotedText: d,
            };
          });
          i.length && (yield o.Z.genai.bulkAddWorkerComments({ requests: i }));
        })).apply(this, arguments);
      }
      function j(e, t) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = m(function* (e, t) {
          const s = e
            .filter((e) => !!e.feedbackResponse)
            .map((e) => {
              var s;
              return {
                workerCommentId:
                  null !== (s = e.workerCommentId) && void 0 !== s ? s : "",
                workerId: t,
                feedbackResponse: e.feedbackResponse,
              };
            });
          s.length &&
            (yield o.Z.genai.bulkAddFeedbackToWorkerComments({ requests: s }));
        })).apply(this, arguments);
      }
      function S(e, t) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = m(function* (e, t) {
          const {
            taskIds: s,
            responses: i,
            statuses: n,
            attempts: o,
            nodeIds: r,
            reviewLevels: a,
          } = yield (0, d.ZP)(null, "internal/genai/getReplicaTasks", {
            method: "POST",
            body: { nodeId: e, workerId: t },
          });
          return {
            taskIds: s,
            responses: i,
            statuses: n,
            attempts: o,
            nodeIds: r,
            reviewLevels: a,
          };
        })).apply(this, arguments);
      }
    },
    810365: function (e, t, s) {
      s.d(t, {
        x: function () {
          return r;
        },
      });
      var i = s(824246),
        n = (s(827378), s(604375)),
        o = s(113463);
      const r = ({ trigger: e }) => {
          const t = c(),
            s = a(e);
          return (0, i.jsx)("div", {
            children: s.map((e) =>
              (0, i.jsx)(
                "div",
                {
                  className: t.trigger,
                  children: (1 === e.length ? [e] : e.split("+")).map((e) =>
                    (0, i.jsx)(o.Z, { children: l[e] || e }, e)
                  ),
                },
                e
              )
            ),
          });
        },
        a = (e) => {
          const t = (e = (e =
            "undefined" !== typeof navigator &&
            -1 !== navigator.platform.toLowerCase().indexOf("mac")
              ? (e = e.replaceAll("alt", "opt")).replaceAll("Alt", "opt")
              : (e = e.replaceAll("cmd", "ctrl")).replaceAll(
                  "Cmd",
                  "ctrl"
                )).replace(/\s/g, "")).split(",");
          let s = t.lastIndexOf("");
          for (; s >= 0; )
            (t[s - 1] += ","), t.splice(s, 1), (s = t.lastIndexOf(""));
          return t;
        },
        l = { enter: "Enter", shift: "Shift", backspace: "Backspace" },
        c = (0, n.ZL)(() => ({
          trigger: {
            flex: "grow",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: "0.5em",
            "&:last-of-type": { marginBottom: 0 },
            "& em": { color: "var(--color-RemoGray50)", padding: "0 4px" },
          },
        }));
    },
    812326: function (e, t, s) {
      s.d(t, {
        _B: function () {
          return h;
        },
        Se: function () {
          return g;
        },
      });
      var i = s(824246),
        n = s(827378),
        o = s(655839),
        r = s.n(o),
        a = s(59524),
        l = s(23630),
        c = s.n(l);
      function d(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function u(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              d(o, i, n, r, a, "next", e);
            }
            function a(e) {
              d(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function p(e, t, s) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              p(e, t, s[t]);
            });
        }
        return e;
      }
      const h = (function () {
        var e = u(function* ({ taskTimer: e, loggedUserId: t, user: s }, i) {
          const n = null === e || void 0 === e ? void 0 : e.elapsedTime(),
            {
              jsHeapSizeLimit: o = 0,
              totalJSHeapSize: r = 0,
              usedJSHeapSize: l = 0,
            } = performance.memory || {},
            d = o > 0 ? l / o : 0,
            u = window.navigator.hardwareConcurrency,
            p = window.performance.timing.navigationStart,
            m = window.performance.timing.domComplete,
            h = i,
            g = (null === h || void 0 === h ? void 0 : h.renderer) || "",
            f = (null === h || void 0 === h ? void 0 : h.vendor) || "",
            b = (navigator.brave && (yield navigator.brave.isBrave())) || !1,
            x = c().getParser(window.navigator.userAgent),
            { browser: v, engine: y, os: k, platform: j } = x.getResult(),
            w = {
              userId: t || (null === s || void 0 === s ? void 0 : s.id),
              elapsedTime: n,
              jsHeapSizeLimit: o,
              totalJSHeapSize: r,
              usedJSHeapSize: l,
              memUsage: d,
              cpus: u,
              timingLoadingStart: p,
              timingLoadingEnd: m,
              gpuRenderer: g,
              gpuVendor: f,
              browser: v,
              engine: y,
              os: k,
              platform: j,
              isBrave: b,
            };
          (0, a.Kz)(a.ju.ScalerMachineInfo, w);
        });
        return function (t, s) {
          return e.apply(this, arguments);
        };
      })();
      function g() {
        const e = document.createElement("canvas").getContext("webgl"),
          t = { renderer: "", vendor: "" };
        if (e && e.getExtension) {
          var s;
          const i = e.getExtension("WEBGL_debug_renderer_info");
          null != i &&
            ((t.renderer = e.getParameter(i.UNMASKED_RENDERER_WEBGL)),
            (t.vendor = e.getParameter(i.UNMASKED_VENDOR_WEBGL))),
            null === (s = e.getExtension("WEBGL_lose_context")) ||
              void 0 === s ||
              s.loseContext();
        }
        return t;
      }
      t.ZP = (e) => {
        class t extends n.Component {
          componentDidMount() {
            (this.gpuInfo = g()), this.trackMachineInfo();
          }
          render() {
            return (0, i.jsx)(
              e,
              m({ ref: this.props.forwardedRef }, this.props)
            );
          }
          constructor(...e) {
            super(...e), (this.gpuInfo = void 0);
            var t = this;
            this.trackMachineInfo = u(function* () {
              yield h(t.props, t.gpuInfo),
                (t.trackMachineInfoTimeout = setTimeout(
                  t.trackMachineInfo,
                  6e4
                ));
            });
          }
        }
        function s(e, s) {
          return (0, i.jsx)(t, m({}, e, { forwardedRef: s }));
        }
        return (
          r()(t, e),
          (s.displayName = `withPerfTracking(${e.displayName})`),
          n.forwardRef(s)
        );
      };
    },
    875630: function (e, t, s) {
      s.d(t, {
        Sp: function () {
          return A;
        },
        q3: function () {
          return C;
        },
        x0: function () {
          return T;
        },
      });
      var i = s(824246),
        n = s(679892),
        o = s.n(n),
        r = s(827378),
        a = s(165218),
        l = s(60042),
        c = s.n(l),
        d = s(792739);
      class u extends r.Component {
        render() {
          const {
            title: e,
            content: t,
            extra: s,
            image: n,
            arrow: r,
            show: a,
            onClose: l,
            top: u,
            left: p,
            right: m,
            bottom: h,
            transform: g,
            tooltipColor: f,
            arrowPositionTop: b,
            tooltipWidth: x,
          } = this.props;
          return a
            ? (0, i.jsxs)("div", {
                style: { top: u, left: p, right: m, bottom: h, transform: g },
                className:
                  o().dynamic([
                    [
                      "4520cd820d96958",
                      [
                        null !== f && void 0 !== f ? f : "#008eff",
                        null !== x && void 0 !== x ? x : 224,
                        null !== f && void 0 !== f ? f : "#008eff",
                        null !== f && void 0 !== f ? f : "#008eff",
                        null !== f && void 0 !== f ? f : "#008eff",
                        null !== b && void 0 !== b ? b : "50%",
                        null !== f && void 0 !== f ? f : "#008eff",
                        null !== b && void 0 !== b ? b : "50%",
                      ],
                    ],
                  ]) +
                  " " +
                  (c()("tooltip-container", `animation-${r}`) || ""),
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      o().dynamic([
                        [
                          "4520cd820d96958",
                          [
                            null !== f && void 0 !== f ? f : "#008eff",
                            null !== x && void 0 !== x ? x : 224,
                            null !== f && void 0 !== f ? f : "#008eff",
                            null !== f && void 0 !== f ? f : "#008eff",
                            null !== f && void 0 !== f ? f : "#008eff",
                            null !== b && void 0 !== b ? b : "50%",
                            null !== f && void 0 !== f ? f : "#008eff",
                            null !== b && void 0 !== b ? b : "50%",
                          ],
                        ],
                      ]) +
                      " " +
                      (c()("wrapper", `arrow-${r}`) || ""),
                    children: [
                      (0, i.jsx)("strong", {
                        className: o().dynamic([
                          [
                            "4520cd820d96958",
                            [
                              null !== f && void 0 !== f ? f : "#008eff",
                              null !== x && void 0 !== x ? x : 224,
                              null !== f && void 0 !== f ? f : "#008eff",
                              null !== f && void 0 !== f ? f : "#008eff",
                              null !== f && void 0 !== f ? f : "#008eff",
                              null !== b && void 0 !== b ? b : "50%",
                              null !== f && void 0 !== f ? f : "#008eff",
                              null !== b && void 0 !== b ? b : "50%",
                            ],
                          ],
                        ]),
                        children: e,
                      }),
                      !!t &&
                        (0, i.jsx)("p", {
                          className: o().dynamic([
                            [
                              "4520cd820d96958",
                              [
                                null !== f && void 0 !== f ? f : "#008eff",
                                null !== x && void 0 !== x ? x : 224,
                                null !== f && void 0 !== f ? f : "#008eff",
                                null !== f && void 0 !== f ? f : "#008eff",
                                null !== f && void 0 !== f ? f : "#008eff",
                                null !== b && void 0 !== b ? b : "50%",
                                null !== f && void 0 !== f ? f : "#008eff",
                                null !== b && void 0 !== b ? b : "50%",
                              ],
                            ],
                          ]),
                          children: t,
                        }),
                      !!n &&
                        (0, i.jsx)("img", {
                          src: n,
                          className:
                            o().dynamic([
                              [
                                "4520cd820d96958",
                                [
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== x && void 0 !== x ? x : 224,
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== b && void 0 !== b ? b : "50%",
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== b && void 0 !== b ? b : "50%",
                                ],
                              ],
                            ]) + " image",
                        }),
                      s,
                      !!l &&
                        (0, i.jsx)("div", {
                          onClick: l,
                          className:
                            o().dynamic([
                              [
                                "4520cd820d96958",
                                [
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== x && void 0 !== x ? x : 224,
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== b && void 0 !== b ? b : "50%",
                                  null !== f && void 0 !== f ? f : "#008eff",
                                  null !== b && void 0 !== b ? b : "50%",
                                ],
                              ],
                            ]) + " close",
                          children: (0, i.jsx)(d.G, { icon: "times" }),
                        }),
                    ],
                  }),
                  (0, i.jsx)(o(), {
                    id: "4520cd820d96958",
                    dynamic: [
                      null !== f && void 0 !== f ? f : "#008eff",
                      null !== x && void 0 !== x ? x : 224,
                      null !== f && void 0 !== f ? f : "#008eff",
                      null !== f && void 0 !== f ? f : "#008eff",
                      null !== f && void 0 !== f ? f : "#008eff",
                      null !== b && void 0 !== b ? b : "50%",
                      null !== f && void 0 !== f ? f : "#008eff",
                      null !== b && void 0 !== b ? b : "50%",
                    ],
                    children: `.tooltip-container.__jsx-style-dynamic-selector{background:${
                      null !== f && void 0 !== f ? f : "#008eff"
                    };color:white;position:absolute;width:${
                      null !== x && void 0 !== x ? x : 224
                    }px;z-index:1000;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0px 2px 10px rgba(0,0,0,.2);-moz-box-shadow:0px 2px 10px rgba(0,0,0,.2);box-shadow:0px 2px 10px rgba(0,0,0,.2);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.tooltip-container.__jsx-style-dynamic-selector strong.__jsx-style-dynamic-selector{font-size:16px;margin-bottom:12px;padding-right:20px;display:block}.tooltip-container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;font-size:14px;line-height:20px}.tooltip-container.__jsx-style-dynamic-selector a{color:white!important;font-weight:normal!important;text-decoration:underline!important}.tooltip-container.__jsx-style-dynamic-selector a:hover{opacity:.6}.tooltip-container.__jsx-style-dynamic-selector .image.__jsx-style-dynamic-selector,.tooltip-container.__jsx-style-dynamic-selector img{display:block;margin:12px 0;width:100%;max-width:100%;height:auto;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.tooltip-container.__jsx-style-dynamic-selector .wrapper.__jsx-style-dynamic-selector{padding:12px;position:relative}.tooltip-container.__jsx-style-dynamic-selector .wrapper.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector{position:absolute;top:16px;right:16px;font-size:16px;opacity:.5;cursor:pointer;-webkit-transition:all 300ms;-moz-transition:all 300ms;-o-transition:all 300ms;transition:all 300ms}.tooltip-container.__jsx-style-dynamic-selector .wrapper.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector:hover{opacity:1}.tooltip-container.__jsx-style-dynamic-selector .wrapper.__jsx-style-dynamic-selector .close.__jsx-style-dynamic-selector:active{opacity:.8}.tooltip-container.__jsx-style-dynamic-selector .wrapper.__jsx-style-dynamic-selector:before{content:"";width:0;height:0;position:absolute}.tooltip-container.__jsx-style-dynamic-selector .wrapper.arrow-bottom.__jsx-style-dynamic-selector:before{border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid ${
                      null !== f && void 0 !== f ? f : "#008eff"
                    };bottom:-8px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.tooltip-container.__jsx-style-dynamic-selector .wrapper.arrow-top.__jsx-style-dynamic-selector:before{border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid ${
                      null !== f && void 0 !== f ? f : "#008eff"
                    };top:-8px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.tooltip-container.__jsx-style-dynamic-selector .wrapper.arrow-left.__jsx-style-dynamic-selector:before{border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid ${
                      null !== f && void 0 !== f ? f : "#008eff"
                    };top:${
                      null !== b && void 0 !== b ? b : "50%"
                    };left:-8px;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}.tooltip-container.__jsx-style-dynamic-selector .wrapper.arrow-right.__jsx-style-dynamic-selector:before{border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid ${
                      null !== f && void 0 !== f ? f : "#008eff"
                    };top:${
                      null !== b && void 0 !== b ? b : "50%"
                    };right:-8px;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%)}.tooltip-container.animation-bottom.__jsx-style-dynamic-selector{margin-top:-12px;-webkit-transform:translate(-50%,-100%);-moz-transform:translate(-50%,-100%);-ms-transform:translate(-50%,-100%);-o-transform:translate(-50%,-100%);transform:translate(-50%,-100%);-webkit-transform-origin:center bottom;-moz-transform-origin:center bottom;-ms-transform-origin:center bottom;-o-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation:ScaleOpeningBottom 300ms;-moz-animation:ScaleOpeningBottom 300ms;-o-animation:ScaleOpeningBottom 300ms;animation:ScaleOpeningBottom 300ms}.tooltip-container.animation-top.__jsx-style-dynamic-selector{margin-bottom:-12px;-webkit-transform:translate(-50%,100%);-moz-transform:translate(-50%,100%);-ms-transform:translate(-50%,100%);-o-transform:translate(-50%,100%);transform:translate(-50%,100%);-webkit-transform-origin:center top;-moz-transform-origin:center top;-ms-transform-origin:center top;-o-transform-origin:center top;transform-origin:center top;-webkit-animation:ScaleOpeningTop 300ms;-moz-animation:ScaleOpeningTop 300ms;-o-animation:ScaleOpeningTop 300ms;animation:ScaleOpeningTop 300ms}.tooltip-container.animation-left.__jsx-style-dynamic-selector{margin-right:-12px;-webkit-transform:translate(100%,-50%);-moz-transform:translate(100%,-50%);-ms-transform:translate(100%,-50%);-o-transform:translate(100%,-50%);transform:translate(100%,-50%);-webkit-transform-origin:center left;-moz-transform-origin:center left;-ms-transform-origin:center left;-o-transform-origin:center left;transform-origin:center left;-webkit-animation:ScaleOpeningLeft 300ms;-moz-animation:ScaleOpeningLeft 300ms;-o-animation:ScaleOpeningLeft 300ms;animation:ScaleOpeningLeft 300ms}.tooltip-container.animation-right.__jsx-style-dynamic-selector{margin-left:-12px;-webkit-transform:translate(-100%,-50%);-moz-transform:translate(-100%,-50%);-ms-transform:translate(-100%,-50%);-o-transform:translate(-100%,-50%);transform:translate(-100%,-50%);-webkit-transform-origin:center right;-moz-transform-origin:center right;-ms-transform-origin:center right;-o-transform-origin:center right;transform-origin:center right;-webkit-animation:ScaleOpeningRight 300ms;-moz-animation:ScaleOpeningRight 300ms;-o-animation:ScaleOpeningRight 300ms;animation:ScaleOpeningRight 300ms}.tooltip-container.animation-center.__jsx-style-dynamic-selector{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;-moz-transform-origin:center center;-ms-transform-origin:center center;-o-transform-origin:center center;transform-origin:center center;-webkit-animation:ScaleOpeningCenter 300ms;-moz-animation:ScaleOpeningCenter 300ms;-o-animation:ScaleOpeningCenter 300ms;animation:ScaleOpeningCenter 300ms}.tooltip-container.animation-none.__jsx-style-dynamic-selector{-webkit-transform-origin:center center;-moz-transform-origin:center center;-ms-transform-origin:center center;-o-transform-origin:center center;transform-origin:center center;-webkit-animation:ScaleOpeningNone 300ms;-moz-animation:ScaleOpeningNone 300ms;-o-animation:ScaleOpeningNone 300ms;animation:ScaleOpeningNone 300ms}@keyframes ScaleOpeningBottom{from{-webkit-transform:translate(-50%,-100%)scale(.5);-moz-transform:translate(-50%,-100%)scale(.5);-o-transform:translate(-50%,-100%)scale(.5);transform:translate(-50%,-100%)scale(.5)}to{-webkit-transform:translate(-50%,-100%)scale(1);-moz-transform:translate(-50%,-100%)scale(1);-o-transform:translate(-50%,-100%)scale(1);transform:translate(-50%,-100%)scale(1)}}@keyframes ScaleOpeningTop{from{-webkit-transform:translate(-50%,100%)scale(.5);-moz-transform:translate(-50%,100%)scale(.5);-o-transform:translate(-50%,100%)scale(.5);transform:translate(-50%,100%)scale(.5)}to{-webkit-transform:translate(-50%,100%)scale(1);-moz-transform:translate(-50%,100%)scale(1);-o-transform:translate(-50%,100%)scale(1);transform:translate(-50%,100%)scale(1)}}@keyframes ScaleOpeningLeft{from{-webkit-transform:translate(100%,-50%)scale(.5);-moz-transform:translate(100%,-50%)scale(.5);-o-transform:translate(100%,-50%)scale(.5);transform:translate(100%,-50%)scale(.5)}to{-webkit-transform:translate(100%,-50%)scale(1);-moz-transform:translate(100%,-50%)scale(1);-o-transform:translate(100%,-50%)scale(1);transform:translate(100%,-50%)scale(1)}}@keyframes ScaleOpeningRight{from{-webkit-transform:translate(-100%,-50%)scale(.5);-moz-transform:translate(-100%,-50%)scale(.5);-o-transform:translate(-100%,-50%)scale(.5);transform:translate(-100%,-50%)scale(.5)}to{-webkit-transform:translate(-100%,-50%)scale(1);-moz-transform:translate(-100%,-50%)scale(1);-o-transform:translate(-100%,-50%)scale(1);transform:translate(-100%,-50%)scale(1)}}@keyframes ScaleOpeningCenter{from{-webkit-transform:translate(-50%,-50%)scale(.5);-moz-transform:translate(-50%,-50%)scale(.5);-o-transform:translate(-50%,-50%)scale(.5);transform:translate(-50%,-50%)scale(.5)}to{-webkit-transform:translate(-50%,-50%)scale(1);-moz-transform:translate(-50%,-50%)scale(1);-o-transform:translate(-50%,-50%)scale(1);transform:translate(-50%,-50%)scale(1)}}@keyframes ScaleOpeningNone{from{-webkit-transform:scale(.5);-moz-transform:scale(.5);-o-transform:scale(.5);transform:scale(.5)}to{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}`,
                  }),
                ],
              })
            : null;
        }
      }
      u.defaultProps = {
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto",
      };
      class p extends r.Component {
        render() {
          const {
            top: e,
            left: t,
            right: s,
            bottom: n,
            attachPosition: r,
            onEnter: a,
          } = this.props;
          return (0, i.jsxs)("div", {
            style: { top: e, left: t, right: s, bottom: n },
            onMouseEnter: a,
            className:
              "jsx-6460537edce038b6 " + (c()("spot-container", r) || ""),
            children: [
              (0, i.jsx)("div", { className: "jsx-6460537edce038b6 spot" }),
              (0, i.jsx)(o(), {
                id: "6460537edce038b6",
                children:
                  ".spot-container.jsx-6460537edce038b6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.spot-container.jsx-6460537edce038b6 .spot.jsx-6460537edce038b6{width:40px;height:40px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border:solid 2px#008eff;-webkit-animation:SpotAnimation 1.5s infinite;-moz-animation:SpotAnimation 1.5s infinite;-o-animation:SpotAnimation 1.5s infinite;animation:SpotAnimation 1.5s infinite}.spot-container.top.jsx-6460537edce038b6{-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-ms-transform:translate(-50%,0);-o-transform:translate(-50%,0);transform:translate(-50%,0)}.spot-container.left.jsx-6460537edce038b6{-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-ms-transform:translate(0,-50%);-o-transform:translate(0,-50%);transform:translate(0,-50%)}.spot-container.right.jsx-6460537edce038b6{-webkit-transform:translate(0,-50%);-moz-transform:translate(0,-50%);-ms-transform:translate(0,-50%);-o-transform:translate(0,-50%);transform:translate(0,-50%)}.spot-container.bottom.jsx-6460537edce038b6{-webkit-transform:translate(-50%,0);-moz-transform:translate(-50%,0);-ms-transform:translate(-50%,0);-o-transform:translate(-50%,0);transform:translate(-50%,0)}.spot-container.center.jsx-6460537edce038b6{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@keyframes SpotAnimation{from{width:0;height:0;opacity:.8}to{width:40px;height:40px;opacity:0}}",
              }),
            ],
          });
        }
      }
      class m extends r.Component {
        componentDidMount() {
          var e;
          setTimeout(
            this.refreshTooltipPosition,
            null !== (e = this.props.delay) && void 0 !== e ? e : 0
          ),
            window.addEventListener("resize", this.refreshTooltipPosition);
        }
        componentWillUnmount() {
          window.removeEventListener("resize", this.refreshTooltipPosition);
        }
        componentDidUpdate(e) {
          (e.offsetY === this.props.offsetY &&
            e.offsetX === this.props.offsetX &&
            e.attachPosition === this.props.attachPosition) ||
            this.refreshTooltipPosition();
        }
        render() {
          const {
              children: e,
              content: t,
              attachDisplay: s,
              position: n,
              alignSelf: o,
            } = this.props,
            { top: r, left: a, right: l, bottom: c, mounted: d } = this.state,
            u = { display: s };
          return (
            n && (u.position = n),
            o && (u.alignSelf = o),
            (0, i.jsxs)("div", {
              ref: this.containerRef,
              style: u,
              children: [d && e({ top: r, left: a, right: l, bottom: c }), t],
            })
          );
        }
        constructor(e) {
          super(e),
            (this.refreshTooltipPosition = () => {
              if (!this.containerRef.current) return;
              const { offsetX: e, offsetY: t, attachPosition: s } = this.props,
                i = this.containerRef.current.getBoundingClientRect();
              let n = "auto",
                o = "auto",
                r = "auto",
                a = "auto";
              "bottom" === s
                ? ((n = t), (o = i.width / 2 + e))
                : "top" === s
                ? ((a = -t), (o = i.width / 2 + e))
                : "left" === s
                ? ((n = i.height / 2 + t), (r = -e))
                : "right" === s
                ? ((n = i.height / 2 + t), (o = e))
                : "center" === s
                ? ((n = i.height / 2 + t), (o = i.width / 2 + e))
                : "none" === s && ((n = t), (o = e)),
                this.setState({
                  top: n,
                  left: o,
                  right: r,
                  bottom: a,
                  mounted: !0,
                });
            }),
            (this.state = {
              top: "auto",
              left: "auto",
              bottom: "auto",
              right: "auto",
              mounted: !1,
            }),
            (this.containerRef = r.createRef());
        }
      }
      function h(e, t, s) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              h(e, t, s[t]);
            });
        }
        return e;
      }
      function f(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      m.defaultProps = {
        offsetX: 0,
        offsetY: 0,
        delay: 0,
        attachDisplay: "block",
      };
      class b extends r.Component {
        onShowTooltipWithSpot() {
          this.setState({ show: !0 });
        }
        renderBody({
          top: e,
          left: t,
          right: s,
          bottom: n,
          showWithSpot: o,
          props: r,
        }) {
          const a = (this.state.show && o) || !o,
            l = !this.state.show && o;
          return (0, i.jsxs)("div", {
            style: { position: "absolute" },
            children: [
              a &&
                (0, i.jsx)(
                  u,
                  g({}, r, { top: e, left: t, right: s, bottom: n })
                ),
              l &&
                (0, i.jsx)(p, {
                  attachPosition: r.arrow,
                  top: e,
                  left: t,
                  right: s,
                  bottom: n,
                  onEnter: this.onShowTooltipWithSpot,
                }),
            ],
          });
        }
        render() {
          const e = this.props,
            {
              children: t,
              position: s,
              alignSelf: n,
              attachDisplay: o,
              offsetX: r,
              offsetY: a,
              showWithSpot: l,
              delay: c,
            } = e,
            d = f(e, [
              "children",
              "position",
              "alignSelf",
              "attachDisplay",
              "offsetX",
              "offsetY",
              "showWithSpot",
              "delay",
            ]);
          return "absolute" === s
            ? this.renderBody({
                top: d.top || "auto",
                left: d.left || "auto",
                right: d.right || "auto",
                bottom: d.bottom || "auto",
                showWithSpot: l,
                props: d,
              })
            : (0, i.jsx)(m, {
                content: t,
                attachPosition: d.arrow,
                offsetX: r,
                offsetY: a,
                attachDisplay: o,
                delay: c,
                position: s,
                alignSelf: n,
                children: ({ top: e, left: t, right: s, bottom: i }) =>
                  this.renderBody({
                    top: e,
                    left: t,
                    right: s,
                    bottom: i,
                    showWithSpot: l,
                    props: d,
                  }),
              });
        }
        constructor(e) {
          super(e),
            (this.state = { show: !1 }),
            (this.onShowTooltipWithSpot =
              this.onShowTooltipWithSpot.bind(this));
        }
      }
      function x(e, t, s) {
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
      function v(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      b.defaultProps = {
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto",
      };
      class y extends r.Component {
        render() {
          const e = this.props,
            { children: t, icon: s } = e,
            n = v(e, ["children", "icon"]);
          return (0, i.jsxs)(
            "div",
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(s);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(s).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(s, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    x(e, t, s[t]);
                  });
              }
              return e;
            })({}, n, {
              className: "jsx-9916b684417fed3 button",
              children: [
                !!s &&
                  (0, i.jsx)("span", {
                    className: "jsx-9916b684417fed3 icon",
                    children: s,
                  }),
                t,
                (0, i.jsx)(o(), {
                  id: "9916b684417fed3",
                  children:
                    ".button.jsx-9916b684417fed3{background:rgba(0,0,0,.2);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;text-align:center;line-height:32px;text-transform:uppercase;font-weight:bold;-webkit-transition:all 200ms;-moz-transition:all 200ms;-o-transition:all 200ms;transition:all 200ms;cursor:pointer}.button.jsx-9916b684417fed3 .icon.jsx-9916b684417fed3{display:inline-block;margin-right:10px}.button.jsx-9916b684417fed3:hover{background:rgba(0,0,0,.4)}.button.jsx-9916b684417fed3:active{opacity:.8}",
                }),
              ],
            })
          );
        }
      }
      var k = s(433310);
      function j(e, t, s) {
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
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              j(e, t, s[t]);
            });
        }
        return e;
      }
      const S = "__TourFinished";
      function T(e) {
        return (t) => {
          const s = e[e.indexOf(t) + 1];
          return s || S;
        };
      }
      function C(e) {
        const t = r.createContext({
          currentStep: S,
          disabled: !1,
          earlyExit: !1,
          nextStep: () => {},
          finish: () => {},
          setStep: () => {},
        });
        function s() {
          return `tour-${e.storageName}`;
        }
        function n() {
          return !!localStorage.getItem(s());
        }
        t.displayName = `TourContext-${e.storageName}`;
        const l = (o) => {
            const { onFinish: a } = o,
              [l, c] = r.useState({
                currentStep:
                  "once" === (e.showing || "always") && n() ? S : o.initialStep,
                disabled: o.disabled || !1,
                earlyExit: o.earlyExit || !1,
                nextStep: () => {
                  c((e) =>
                    e.currentStep === S
                      ? e
                      : w({}, e, { currentStep: o.getNextStep(e.currentStep) })
                  );
                },
                finish: () => c((e) => w({}, e, { currentStep: S })),
                setStep: (e) => c((t) => w({}, t, { currentStep: e })),
              });
            return (
              r.useEffect(() => {
                if (l.currentStep === S) {
                  try {
                    localStorage.setItem(s(), "true");
                  } catch (e) {
                    k.Z.error(`Failed to set local storage for ${s()}`, e);
                  }
                  a && a();
                }
              }, [a, l.currentStep]),
              (0, i.jsx)(t.Provider, { value: l, children: o.children })
            );
          },
          c = r.memo((s) => {
            const n = r.useContext(t);
            if (n.disabled || n.currentStep === S) return s.children || null;
            const a = e.isFinalStep(n.currentStep),
              l = (0, i.jsx)(y, {
                icon: s.buttonIcon,
                onClick: (e) => {
                  s.onClick && s.onClick(e),
                    e.stopPropagation(),
                    n.nextStep(),
                    s.onStepDone && s.onStepDone();
                },
                children: s.buttonText || (a ? "Done" : "Next"),
              }),
              c = (0, i.jsxs)("div", {
                className: "jsx-947efc8ae2955e71 extra",
                children: [
                  s.customExtra || l,
                  (0, i.jsx)(o(), {
                    id: "947efc8ae2955e71",
                    children: ".extra.jsx-947efc8ae2955e71{margin-top:12px}",
                  }),
                ],
              });
            return (0, i.jsx)(
              b,
              w(
                {
                  show: n.currentStep === s.forStep,
                  onClose: () => {
                    n.earlyExit ? n.finish() : n.nextStep();
                  },
                  extra: c,
                },
                s,
                e.tooltipProps
              )
            );
          });
        return {
          Provider: (0, a.default)(() => Promise.resolve(l), {
            ssr: !1,
            loading: () => null,
          }),
          Tooltip: (0, a.default)(() => Promise.resolve(c), {
            ssr: !1,
            loading: () => null,
          }),
          Context: t,
          hasUserSeenTour: n,
          reset: () => {
            localStorage.deleteItem(s());
          },
        };
      }
      var I = r.createContext({ disabled: !1 });
      function R(e, t, s) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              R(e, t, s[t]);
            });
        }
        return e;
      }
      const A = ({ storageName: e, showing: t }) => {
        const s = C({
          storageName: "shoutouts-" + e,
          isFinalStep: () => !0,
          showing: t,
        });
        return {
          Tooltip: r.memo(function (e) {
            const { disabled: t } = r.useContext(I);
            return (0,
            i.jsx)(s.Provider, { initialStep: !0, disabled: t, getNextStep: () => S, children: (0, i.jsx)(s.Tooltip, P({ forStep: !0 }, e, { onStepDone: e.onClose })) });
          }),
          reset: () => s.reset(),
          hasUserSeen: s.hasUserSeenTour,
        };
      };
    },
    823935: function (e, t, s) {
      s.d(t, {
        R: function () {
          return b;
        },
        z: function () {
          return y;
        },
      });
      var i = s(824246),
        n = s(827378),
        o = s(133696),
        r = s(277262),
        a = s(75384),
        l = s(285556),
        c = s(599789),
        d = s(313861);
      function u(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function p(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              u(o, i, n, r, a, "next", e);
            }
            function a(e) {
              u(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function m(e, t, s) {
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
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              m(e, t, s[t]);
            });
        }
        return e;
      }
      function g(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      const f = n.createContext({
          fetchAnnouncement: (e) => Promise.resolve(),
        }),
        b = () => n.useContext(f),
        x = (function () {
          var e = p(function* (e, t = !1) {
            try {
              yield (0,
              l.ZP)(null, "internal/announcements/seen", { method: "POST", body: { announcement: e, acknowledged: t } });
            } catch (s) {
              (0, l.vj)(s, { handleHttp: !0 });
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        v = ({ announcementState: e, setAnnouncementState: t, user: s }) => {
          const n = (s) => {
              const {
                announcement: i,
                announcements: n,
                announcementIdx: o,
              } = e;
              s && x(i._id, s);
              const r = o + 1,
                a = n[r];
              (null === a || void 0 === a ? void 0 : a._id) && x(a._id),
                t({ announcement: a, announcementIdx: r, announcements: n });
            },
            a = () => {
              e.announcements.forEach((e) => {
                e.displayType !==
                  c.AnnouncementDisplayType.LegalAcknowledgement &&
                  x(e._id, !0);
              }),
                t({ announcements: [], announcement: null });
            },
            l = e.announcement;
          var u;
          const p =
            null !==
              (u = null === l || void 0 === l ? void 0 : l.displayType) &&
            void 0 !== u
              ? u
              : c.AnnouncementDisplayType.Standard;
          if (!l) return null;
          switch (p) {
            case c.AnnouncementDisplayType.Standard:
              return (0, i.jsx)(o.Z, {
                notification: l,
                onContinue: n,
                onSkip: a,
                isCorpUser: s.isCorporateUser,
                platform: (0, d.k)(s),
              });
            case c.AnnouncementDisplayType.LegalAcknowledgement:
              return (0, i.jsx)(r.Z, {
                notification: l,
                onContinue: n,
                onSkip: a,
                isCorpUser: s.isCorporateUser,
              });
            default:
              return null;
          }
        };
      var y = (0, a.ns)((e) => {
        var { children: t, displayLocation: s, url: o, user: r } = e,
          a = g(e, ["children", "displayLocation", "url", "user"]);
        const { 0: c, 1: d } = (0, n.useState)({
            announcement: null,
            announcements: [],
            announcementIdx: 0,
          }),
          u = (function () {
            var e = p(function* (e = {}) {
              const { load_announcements: t = !1 } =
                  (null === o || void 0 === o ? void 0 : o.query) || {},
                { spoofed: i } = r;
              if ((!i || t) && !c.announcement)
                try {
                  const { announcements: t } = yield (0, l.ZP)(
                      null,
                      "internal/announcements/unread",
                      { query: h({ displayLocation: s }, e.query) }
                    ),
                    [i] = t;
                  i &&
                    d({
                      announcements: t,
                      announcement: i,
                      announcementIdx: 0,
                    });
                } catch (n) {
                  (0, l.vj)(n, { handleHttp: !0 });
                }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, i.jsxs)(f.Provider, {
          value: { fetchAnnouncement: u },
          children: [
            (0, i.jsx)(
              v,
              h({ announcementState: c, setAnnouncementState: d, user: r }, a)
            ),
            t,
          ],
        });
      });
    },
    106440: function (e, t, s) {
      s.d(t, {
        zw: function () {
          return tn.z;
        },
        ZP: function () {
          return An;
        },
      });
      var i = s(824246),
        n = s(679892),
        o = s.n(n),
        r = s(827378),
        a = s(298784),
        l = s.n(a),
        c = s(686677),
        d = s(252708),
        u = s.n(d),
        p = s(468891),
        m = s(44579);
      class h extends r.Component {
        render() {
          const e =
            "minimal-light" === this.props.cardStyle
              ? {
                  background: "rgba(255, 255, 255, 0.7)",
                  boxShadow: "24px 24px 0px rgba(0, 0, 0, 0.02)",
                }
              : { boxShadow: "0 50px 100px -30px rgba(0, 0, 0, .5)" };
          return (0, i.jsxs)("div", {
            className: "jsx-f192cced25549fba fullscreen-card--container",
            children: [
              (0, i.jsx)("div", {
                style: e,
                className: "jsx-f192cced25549fba fullscreen-card",
                children: this.props.children,
              }),
              (0, i.jsx)(o(), {
                id: "f192cced25549fba",
                children:
                  ".fullscreen-card--container.jsx-f192cced25549fba{height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;background:var(--color-RemoGray01)}.fullscreen-card.jsx-f192cced25549fba{width:95vw;max-width:820px;margin:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:80px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;background:white;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}",
              }),
            ],
          });
        }
      }
      var g = h,
        f = s(942662),
        b = s(101409),
        x = s(881620),
        v = s(318308),
        y = s(629552),
        k = s(285556),
        j = s(746332),
        w = s.n(j),
        S = s(336235),
        T = s(554211),
        C = s(599789),
        I = s(167469),
        R = s(775222);
      function P(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      var A = (e) => {
          const { 0: t, 1: s } = (0, r.useState)([]),
            { 0: n, 1: a } = (0, r.useState)([]),
            c = (0, S.Z)(`(max-width: ${j.MOBILE_THRESHOLD})`),
            d = !(
              !(0, T.ZP)(
                "disable-training-center-for-country",
                { countryCode: e.user.ipCountryCode },
                !1
              ) || e.user.workerSource
            );
          var u;
          (0, m.Z)(
            ((u = function* () {
              const t = yield (0, k.ZP)(
                null,
                "internal/scaler/projects/paused"
              );
              s([]);
              const i = t.pausedPermissionGroups;
              i &&
                (l().remove(i, { canPause: !1 }),
                l().remove(i, { isActive: !0 })),
                a(i),
                (0, y.IO)(() => (0, y.xx)({})),
                R.c.track("Empty Queued", { user: e.user._id });
            }),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (s, i) {
                var n = u.apply(e, t);
                function o(e) {
                  P(n, s, i, o, r, "next", e);
                }
                function r(e) {
                  P(n, s, i, o, r, "throw", e);
                }
                o(void 0);
              });
            })
          );
          const p = () => {
            const e = l().isEmpty(t) ? null : t[0];
            return e
              ? (0, i.jsxs)("div", {
                  className: "jsx-f685d146e566e4be recommended-course",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "jsx-f685d146e566e4be",
                      children: [
                        (0, i.jsxs)("span", {
                          className: "jsx-f685d146e566e4be",
                          children: [
                            "This just in\u2026 there are many available tasks in the",
                            " ",
                            (0, i.jsxs)("em", {
                              className: "jsx-f685d146e566e4be",
                              children: [
                                e.title,
                                " ",
                                (0, v.Z)(e.taskType, { workerFacing: !0 }),
                              ],
                            }),
                            " ",
                            "project!",
                          ],
                        }),
                        (0, i.jsx)("span", {
                          style: { display: "inline-block", width: "12px" },
                          className: "jsx-f685d146e566e4be",
                        }),
                        (0, i.jsx)(f.Z, {
                          arrows: !0,
                          textTransform: "none",
                          href:
                            ((s = e),
                            `/onboarding-center/project/${s._id}${
                              l().isFinite(s.reviewLevel)
                                ? `?reviewLevel=${s.reviewLevel}`
                                : ""
                            }`),
                          children: "Go to the project",
                        }),
                      ],
                    }),
                    (0, i.jsx)(o(), {
                      id: "f685d146e566e4be",
                      children:
                        "@keyframes grow{from{-webkit-transform:scale(0);-moz-transform:scale(0);-o-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}.recommended-course.jsx-f685d146e566e4be{-webkit-animation:grow.5s;-moz-animation:grow.5s;-o-animation:grow.5s;animation:grow.5s;margin-top:32px;padding:16px;border:2px solid var(--color-RemoGreen);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:var(--color-RemoGreen);color:white;font-size:18px;font-weight:bold}.recommended-course.jsx-f685d146e566e4be span.jsx-f685d146e566e4be{line-height:2em}.recommended-course.jsx-f685d146e566e4be em.jsx-f685d146e566e4be{font-style:normal;opacity:.7}",
                    }),
                  ],
                })
              : null;
            var s;
          };
          return (0, i.jsx)(g, {
            cardStyle: "minimal-light",
            children: (0, i.jsx)("div", {
              children: (() => {
                const { user: t, query: s } = e;
                let a, u;
                const m = d
                  ? null
                  : (0, i.jsxs)("li", {
                      children: [
                        "Go to the",
                        " ",
                        (0, i.jsx)("a", {
                          children: (0, i.jsx)(x.ZP, {
                            href: "/onboarding-center",
                            children: "Onboarding Center",
                          }),
                        }),
                        " ",
                        "to get enabled on projects with tasks ",
                        (0, i.jsx)(b.Z, { emoji: "\ud83c\udf93" }),
                      ],
                    });
                if (
                  "lidar" !== s.type ||
                  l().isEmpty(
                    l().without(
                      t.allowedTaskTypes,
                      I.TaskType.LidarAnnotation,
                      I.TaskType.LidarSegmentation
                    )
                  )
                ) {
                  if (
                    "lidar" === s.type ||
                    c ||
                    !l().some(t.allowedTaskTypes, (e) => (0, C.isLidar)(e))
                  )
                    return (() => {
                      const { user: t } = e,
                        s = t.accountType === C.AccountType.Expert,
                        n = s
                          ? (0, i.jsx)(x.ZP, {
                              href: "/expert/",
                              children: "Back to Home Page ",
                            })
                          : (0, i.jsx)(x.ZP, {
                              href: "/dashboard",
                              children: "Back To Dashboard",
                            }),
                        a = s ? "/expert/profile" : "/account";
                      return (0, i.jsxs)(r.Fragment, {
                        children: [
                          (0, i.jsx)("h1", {
                            className: "jsx-89c205f6b1a5729d",
                            children: "Your task queue is currently empty.",
                          }),
                          (0, i.jsxs)("ul", {
                            className: "jsx-89c205f6b1a5729d",
                            children: [
                              (0, i.jsx)("li", {
                                className: "jsx-89c205f6b1a5729d",
                                children:
                                  "Large volumes of user requests can sometimes cause this - Please try refreshing",
                              }),
                              (0, i.jsxs)("li", {
                                className: "jsx-89c205f6b1a5729d",
                                children: [
                                  "Make sure you have a valid ",
                                  (0, i.jsx)(x.ZP, {
                                    href: a,
                                    children: "payment method",
                                  }),
                                  " set up to begin tasking.",
                                ],
                              }),
                              (0, i.jsx)("li", {
                                className: "jsx-89c205f6b1a5729d",
                                children:
                                  "If you are currently on a project and are expecting tasks in your queue, please contact the project's team in Slack.",
                              }),
                              (0, i.jsx)("li", {
                                className: "jsx-89c205f6b1a5729d",
                                children:
                                  "If you just completed your training project or screening, the team will review your submission and will send you an email and update in Remotasks as soon as we have the results.",
                              }),
                              !s &&
                                (0, i.jsxs)("li", {
                                  className: "jsx-89c205f6b1a5729d",
                                  children: [
                                    "We value your contribution to the development of AI. If you have any persisting issues, please contact our support team",
                                    " ",
                                    (0, i.jsx)("a", {
                                      href: "https://support.remotasks.com/hc/en-us/requests/new",
                                      className: "jsx-89c205f6b1a5729d",
                                      children: "here",
                                    }),
                                    ".",
                                  ],
                                }),
                            ],
                          }),
                          (0, i.jsx)("p", {
                            className: "jsx-89c205f6b1a5729d",
                            children: (0, i.jsx)("a", {
                              className: "jsx-89c205f6b1a5729d",
                              children: n,
                            }),
                          }),
                          (0, i.jsx)(o(), {
                            id: "4b2d48e7918c08e1",
                            children:
                              ".icon img{display:inline;height:1em;width:1em;vertical-align:-.1em}",
                          }),
                          (0, i.jsx)(o(), {
                            id: "c6a637fdc0931738",
                            children:
                              "h1.jsx-89c205f6b1a5729d{margin-top:0}ul.jsx-89c205f6b1a5729d,p.jsx-89c205f6b1a5729d{line-height:2em;font-weight:bold;font-size:18px;margin:36px 0}",
                          }),
                        ],
                      });
                    })();
                  (a = "Your classic task queue is empty"),
                    (u = (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsxs)("li", {
                          children: [
                            "This may be temporary if there are many other taskers working on the same projects - try refreshing ",
                            (0, i.jsx)(b.Z, { emoji: "\ud83d\udd04" }),
                          ],
                        }),
                        (0, i.jsxs)("li", {
                          children: [
                            "Make sure you have a valid ",
                            (0, i.jsx)(x.ZP, {
                              href: "/account",
                              children: "payment method",
                            }),
                            " set up to begin tasking. ",
                            (0, i.jsx)(b.Z, { emoji: "\ud83d\udcb3" }),
                          ],
                        }),
                        (0, i.jsxs)("li", {
                          children: [
                            "There may be available tasks in your ",
                            (0, i.jsx)(x.ZP, {
                              href: "/tasks?type=lidar",
                              children: "LiDAR queue",
                            }),
                            " ",
                            (0, i.jsx)(b.Z, { emoji: "\ud83d\udca1" }),
                          ],
                        }),
                        m,
                        n &&
                          n.length > 0 &&
                          (0, i.jsxs)("li", {
                            children: [
                              "Go to the",
                              " ",
                              (0, i.jsx)("a", {
                                children: (0, i.jsx)(x.ZP, {
                                  href: "/dashboard",
                                  children: "Dashboard",
                                }),
                              }),
                              " ",
                              "to resume any paused projects ",
                              (0, i.jsx)(b.Z, { emoji: "\u25b6\ufe0f" }),
                            ],
                          }),
                      ],
                    }));
                } else
                  (a = "Your LiDAR task queue is empty"),
                    (u = (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsxs)("li", {
                          children: [
                            "There may be available tasks in your ",
                            (0, i.jsx)(x.ZP, {
                              href: "/tasks",
                              children: "classic queue",
                            }),
                            " ",
                            (0, i.jsx)(b.Z, { emoji: "\ud83c\udf4e" }),
                          ],
                        }),
                        m,
                      ],
                    }));
                return (0, i.jsxs)(r.Fragment, {
                  children: [
                    (0, i.jsx)("h1", {
                      className: "jsx-251f883218c4dfa8",
                      children: a,
                    }),
                    (0, i.jsx)("p", {
                      className: "jsx-251f883218c4dfa8",
                      children: !c && u,
                    }),
                    !c && !d && p(),
                    (0, i.jsx)("p", {
                      className: "jsx-251f883218c4dfa8",
                      children: (0, i.jsx)("a", {
                        className: "jsx-251f883218c4dfa8",
                        children: (0, i.jsx)(x.ZP, {
                          href: "/dashboard",
                          children: "Back To Dashboard",
                        }),
                      }),
                    }),
                    (0, i.jsx)(o(), {
                      id: "4b2d48e7918c08e1",
                      children:
                        ".icon img{display:inline;height:1em;width:1em;vertical-align:-.1em}",
                    }),
                    (0, i.jsx)(o(), {
                      id: "4fc1567a2d531591",
                      children:
                        "h1.jsx-251f883218c4dfa8{margin-top:0}p.jsx-251f883218c4dfa8{line-height:2em;font-weight:bold;font-size:18px;margin:36px 0}",
                    }),
                  ],
                });
              })(),
            }),
          });
        },
        E = s(951041),
        O = s(986004),
        N = s(872383),
        L = s(220453),
        _ = s(210918),
        F = s(524991),
        D = s(893827),
        M = s(801640),
        Z = s(629586),
        z = s(608139),
        B = s.n(z),
        U = s(4369),
        H = s(164691),
        q = s(804789),
        $ = s(75896),
        V = s(764191),
        Q = s(604375);
      const W = "https://static.remotasks.com/uploads/shovel-man.gif";
      function G(e) {
        if (!e) return null;
        const t = new Date(e);
        return isNaN(t.getTime()) ? null : t;
      }
      function J(e) {
        if (!e.legacyLidarExpirationDate) return !1;
        const t = G(e.legacyLidarExpirationDate);
        return !!t && t >= new Date();
      }
      const Y = (0, Q.ZL)({
          header: { width: "100%", textAlign: "center" },
          expired: { backgroundColor: "var(--color-RemoGreen)" },
          countdown: { backgroundColor: "var(--color-RemoRed)" },
          inlineImg: { display: "inline-block" },
        }),
        K = (e) => {
          if (!e) return null;
          const t = +e - +new Date();
          return t > 0
            ? {
                days: Math.floor(t / 864e5),
                hours: Math.floor((t / 36e5) % 24),
                minutes: Math.floor((t / 1e3 / 60) % 60),
                seconds: Math.floor((t / 1e3) % 60),
              }
            : null;
        };
      var X = (e) => {
          const t = Y(),
            s = G(e.legacyLidarExpirationDate),
            { 0: n, 1: o } = (0, r.useState)(K(s));
          if (
            ((0, r.useEffect)(() => {
              const e = setInterval(() => {
                o(K(s));
              }, 1e3);
              return () => clearInterval(e);
            }, [e.legacyLidarExpirationDate]),
            !s)
          )
            return null;
          const a = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("h2", {
              children: [
                (0, i.jsx)(b.Z, { emoji: "\ud83d\udcd6" }),
                "\xa0You can learn more about how to use LidarLite, along with its numerous benefits,",
                " ",
                (0, i.jsx)("a", {
                  href:
                    "/migrate-to-lidarlite" +
                    (e.projectId ? "?project=" + e.projectId : ""),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "here",
                }),
                "\xa0",
                (0, i.jsx)(b.Z, { emoji: "\ud83d\udcd6" }),
              ],
            }),
          });
          return J(e) && n
            ? (0, i.jsxs)("div", {
                className: `${t.header} ${t.countdown}`,
                children: [
                  (0, i.jsxs)("h1", {
                    children: [
                      (0, i.jsx)("img", { src: W, className: t.inlineImg }),
                      "\xa0Warning: Soon, Lidar Classic will be disabled for this project.\xa0",
                      (0, i.jsx)("img", { src: W, className: t.inlineImg }),
                    ],
                  }),
                  (0, i.jsxs)("h1", {
                    children: [
                      (0, i.jsx)(b.Z, { emoji: "\u23f0", size: "24px" }),
                      "\xa0You have ",
                      n.days,
                      " days, ",
                      n.hours,
                      " hours, ",
                      n.minutes,
                      " minutes,",
                      " ",
                      n.seconds,
                      " seconds until you have to use LidarLite!\xa0",
                      (0, i.jsx)(b.Z, { emoji: "\u23f0", size: "24px" }),
                    ],
                  }),
                  a,
                ],
              })
            : (0, i.jsxs)("div", {
                className: `${t.header} ${t.expired}`,
                children: [
                  (0, i.jsxs)("h1", {
                    children: [
                      (0, i.jsx)(b.Z, { emoji: "\ud83c\udf89", size: "24px" }),
                      "\xa0All tasks in this project must use LidarLite now!\xa0",
                      (0, i.jsx)(b.Z, { emoji: "\ud83c\udf89", size: "24px" }),
                    ],
                  }),
                  a,
                ],
              });
        },
        ee = s(394456),
        te = s(278668),
        se = s(167191);
      function ie(e, t, s) {
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
      var ne = ({
        assignmentJson: e,
        cta: t,
        projectId: s,
        startTasks: n,
        isSensorFusion: o,
        isLidarCategorization: a,
      }) => {
        var l;
        const c =
            null !== (l = null === e || void 0 === e ? void 0 : e.subtaskId) &&
            void 0 !== l
              ? l
              : null === e || void 0 === e
              ? void 0
              : e.assignmentId,
          d = J({
            legacyLidarExpirationDate:
              null === e || void 0 === e ? void 0 : e.legacyLidarExpirationDate,
            projectId: s,
          }),
          u = oe(e),
          p = (function (e) {
            var t, s;
            if (
              null === e ||
              void 0 === e ||
              null === (t = e.params) ||
              void 0 === t
                ? void 0
                : t.classicScene
            )
              return !0;
            const i =
              null === e ||
              void 0 === e ||
              null === (s = e.params) ||
              void 0 === s
                ? void 0
                : s.lidar_metadata;
            if (!i || 0 === i.length) return !1;
            if (
              i.every((e) => !!(null === e || void 0 === e ? void 0 : e.images))
            )
              return !0;
            return !1;
          })(e),
          m = (0, T._z)("use-lidar-classic", { projectId: s }, !1);
        if (m.isLoading) return (0, i.jsx)(se.Z, {});
        const h = o || a || (u && !p),
          g = !m.data,
          b = (m.data || d || !u) && !h,
          x = (g && u) || h;
        return (0, i.jsxs)(r.Fragment, {
          children: [
            b &&
              (0, i.jsx)(f.Z, {
                size: "lg",
                primary: !x,
                arrows: !0,
                onClick: n,
                children: x ? "Open in Legacy View" : t,
              }),
            (x || !b) &&
              (0, i.jsxs)(r.Fragment, {
                children: [
                  "\xa0",
                  (0, i.jsx)(f.Z, {
                    size: "lg",
                    primary: !0,
                    arrows: !0,
                    onClick: () => {
                      window.location.href = (0, te.vI)(
                        (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {},
                              i = Object.keys(s);
                            "function" ===
                              typeof Object.getOwnPropertySymbols &&
                              (i = i.concat(
                                Object.getOwnPropertySymbols(s).filter(
                                  function (e) {
                                    return Object.getOwnPropertyDescriptor(s, e)
                                      .enumerable;
                                  }
                                )
                              )),
                              i.forEach(function (t) {
                                ie(e, t, s[t]);
                              });
                          }
                          return e;
                        })(
                          {},
                          Object.fromEntries(
                            new URLSearchParams(
                              window.location.search
                            ).entries()
                          ),
                          { sceneId: c }
                        )
                      );
                    },
                    children:
                      null !== t && void 0 !== t ? t : "Open in LidarLite",
                  }),
                ],
              }),
          ],
        });
      };
      function oe(e) {
        var t, s, i;
        return (
          !!(null === e ||
          void 0 === e ||
          null === (t = e.params) ||
          void 0 === t
            ? void 0
            : t.binaryScene) ||
          !!(null === e ||
          void 0 === e ||
          null === (s = e.params) ||
          void 0 === s
            ? void 0
            : s.binarySceneUrl) ||
          !!(null === e ||
          void 0 === e ||
          null === (i = e.params) ||
          void 0 === i
            ? void 0
            : i.binaryScenes)
        );
      }
      function re(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function ae(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              re(o, i, n, r, a, "next", e);
            }
            function a(e) {
              re(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function le(e, t, s) {
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
      function ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              le(e, t, s[t]);
            });
        }
        return e;
      }
      const de = 36e5;
      class ue extends r.Component {
        checkFeatureFlags() {
          var e = this;
          return ae(function* () {
            const t = yield (0, N.V3)({
              feature: "use-lidar-classic",
              querystring: B().stringify(
                l().pickBy({
                  userId: e.props.user.id,
                  projectId: e.props.project._id,
                })
              ),
            });
            e.setState({ isLidarLiteEnabled: !t });
          })();
        }
        componentDidMount() {
          this.checkFeatureFlags();
          const e = localStorage.getItem("showedInstructionsForRefresh");
          try {
            e &&
              this.props.project &&
              this.props.project._id &&
              JSON.parse(e).projectId === this.props.project._id &&
              !l().isNil(JSON.parse(e).expiration) &&
              new Date().getTime() < JSON.parse(e).expiration &&
              this.startTasks();
          } catch (t) {}
        }
        UNSAFE_componentWillMount() {
          const e =
            l().get(this.props.project, "_id") === F.ZP.ZooxSteamExhaustV2 &&
            9 === this.props.assignments[0].reviewLevel
              ? 'Check the scene for steam & exhaust - if found, submit by hitting "Has Steam" (where the usual approve/reject buttons are). Otherwise, submit with "No Steam".\n\n**Do not annotate any objects with cuboids during this review.**'
              : this.props.instructions;
          e &&
            (this.setState({ instructionsHTML: { __html: L.ZP.render(e) } }),
            this.fetchStitchedVideo());
        }
        UNSAFE_componentWillUpdate(e, t) {
          const s =
            this.props.project._id === F.ZP.ZooxSteamExhaustV2 &&
            9 === this.props.assignments[0].reviewLevel
              ? 'Check the scene for steam & exhaust - if found, submit by hitting "Has Steam" (where the usual approve/reject buttons are). Otherwise, submit with "No Steam".\n\n**Do not annotate any objects with cuboids during this review.**'
              : this.props.instructions;
          s && (t.instructionsHTML = { __html: L.ZP.render(s) });
        }
        startTasks() {
          var e = this;
          return ae(function* () {
            e.props.setLastInstructionHash &&
              e.props.setLastInstructionHash(e.props.instructionsHash),
              yield e.props.onClose();
          })();
        }
        fetchStitchedVideo() {
          var e = this;
          return ae(function* () {
            if (e.props.assignments[0].params.stitched_video) {
              const { stitched_video: t } = yield (0, k.ZP)(
                null,
                `internal/tasks/${e.props.assignments[0].id}/stitched-video`,
                { method: "GET" }
              );
              e.setState({ stitchedVideo: t });
            }
          })();
        }
        renderLidarNickname() {
          if ("lidarannotation" !== this.props.type) return null;
          const e = (0, _.getLidarNickname)(
            this.props.customer,
            this.props.project && this.props.project._id
          );
          return (0, i.jsxs)("div", {
            className: "jsx-5a8cd903fd30c46a lidar-nickname",
            children: [
              (0, i.jsx)(b.Z, { emoji: e.emoji, size: "2em" }),
              (0, i.jsxs)("span", {
                className: "jsx-5a8cd903fd30c46a lidar-nickname__text",
                children: [
                  (0, i.jsx)("strong", {
                    className: "jsx-5a8cd903fd30c46a",
                    children: e.name,
                  }),
                  " task",
                ],
              }),
              (0, i.jsx)(o(), {
                id: "5a8cd903fd30c46a",
                children:
                  ".lidar-nickname.jsx-5a8cd903fd30c46a{padding:32px 0;border-bottom:1px solid#eee;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center}.lidar-nickname__text.jsx-5a8cd903fd30c46a{margin-left:8px;font-size:16px}",
              }),
            ],
          });
        }
        renderStitchedVideo() {
          return (0, i.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: 1,
              maxWidth: "90vw",
              minWidth: "45vw",
            },
            children: [
              this.props.assignments[0].params.stitched_video &&
                this.state.stitchedVideo &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(Z.x, {
                      medium: !0,
                      children: "Original Annotations Video",
                    }),
                    (0, i.jsx)("video", {
                      src: this.state.stitchedVideo,
                      controls: !0,
                      loop: !0,
                      width: "100%",
                      height: "100%",
                    }),
                  ],
                }),
              this.props.assignments[0].params.task_sequence &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(Z.x, { medium: !0, children: "Task Sequence" }),
                    (0, i.jsxs)(M.iA, {
                      children: [
                        (0, i.jsx)(M.hr, {
                          children:
                            this.props.assignments[0].params.task_sequence[0].map(
                              (e, t) =>
                                (0, i.jsx)(M.Th, { children: `Camera ${t}` }, t)
                            ),
                        }),
                        (0, i.jsx)(M.p3, {
                          children:
                            this.props.assignments[0].params.task_sequence.map(
                              (e, t) =>
                                (0, i.jsx)(
                                  M.Tr,
                                  {
                                    children: e.map((e, s) =>
                                      (0, i.jsx)(
                                        M.Td,
                                        {
                                          children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            href: `/tasks?subtaskId=${e[5]}`,
                                            rel: "noopener noreferrer",
                                            children: `Frame ${t} task link`,
                                          }),
                                        },
                                        s
                                      )
                                    ),
                                  },
                                  t
                                )
                            ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        renderClassInfo() {
          let e = "";
          this.props.assignments[0].params.task_sequence.forEach((t, s) => {
            (e += `\n**Frame ${s}**\n`),
              t.forEach((t, s) => {
                const i = t[5];
                this.props.assignments[0].id === i
                  ? (e += "\n\ud83d\udc49 **")
                  : (e += "- "),
                  t.length > 6
                    ? (e +=
                        `Camera ${s} has the following inconsistent labels: ` +
                        t.slice(6).join(", "))
                    : (e += `Camera ${s} has no inconsistent labels.`),
                  (e += ` [Task link](/tasks?subtaskId=${i})`),
                  this.props.assignments[0].id === i &&
                    (e += "** \ud83d\udc48"),
                  (e += "\n");
              });
          });
          const t = L.ZP.render(e);
          return (0, i.jsx)("div", { dangerouslySetInnerHTML: { __html: t } });
        }
        render() {
          var e, t, s;
          const n = oe(this.props.assignmentJson);
          let r = "Please read the instructions below before starting.",
            a = "Start Tasking";
          if (
            this.props.type === I.TaskType.ChatExperimental ||
            this.props.type === I.TaskType.ChatV2
          )
            return (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(
                  ee.Z,
                  ce({ includeQueueAnnouncements: !0 }, this.props)
                ),
                (0, i.jsx)(H.Z, {
                  projectId: this.props.project._id,
                  startTasks: () => {
                    var e, t, s;
                    this.props.project &&
                      this.props.project._id &&
                      localStorage.setItem(
                        "showedInstructionsForRefresh",
                        JSON.stringify({
                          projectId: this.props.project._id,
                          expiration: this.props.claims
                            ? null !==
                                (s =
                                  null ===
                                    (e = Object.values(this.props.claims)[0]) ||
                                  void 0 === e ||
                                  null === (t = e.maxClaim) ||
                                  void 0 === t
                                    ? void 0
                                    : t.getTime()) && void 0 !== s
                              ? s
                              : de + Date.now()
                            : Date.now() + de,
                        })
                      );
                    this.startTasks();
                  },
                }),
              ],
            });
          this.props.isReviewMode &&
            ((r =
              "Verify that the following tasks are done according to the instructions below."),
            (a = "Start Reviewing")),
            this.props.isPracticeMode &&
              ((r = "You will be doing some practice questions. " + r),
              (a = "Begin practice questions"));
          const c =
              null === (e = this.props.assignmentJson) || void 0 === e
                ? void 0
                : e.legacyLidarExpirationDate,
            d =
              C.lidarTypes.includes(this.props.type) ||
              this.props.type === I.TaskType.SensorFusion,
            u =
              this.props.type === I.TaskType.Categorization &&
              n &&
              !!(null === (t = this.state) || void 0 === t
                ? void 0
                : t.isLidarLiteEnabled),
            { instructionV2Res: p, isEdgeCase: m, user: h } = this.props,
            g = n && !!c;
          if (!l().isEmpty(p)) {
            const e =
              d || u
                ? (0, i.jsx)(ne, {
                    projectId: this.props.project._id,
                    assignmentJson: this.props.assignmentJson,
                    startTasks: this.startTasks,
                    cta: a,
                    userId: this.props.user.id,
                    isSensorFusion: this.props.type === I.TaskType.SensorFusion,
                    isLidarCategorization: u,
                  })
                : null;
            return (0, i.jsxs)(i.Fragment, {
              children: [
                g &&
                  (0, i.jsx)(X, {
                    projectId: this.props.project._id,
                    legacyLidarExpirationDate: c,
                  }),
                (0, i.jsx)(q.Z, {
                  startTasks: this.startTasks,
                  startButtonText: a,
                  isEmbedded: !0,
                  user: h,
                  isEdgeCase: m,
                  instructionV2Res: p,
                  customStartButton: e,
                }),
              ],
            });
          }
          return (0, i.jsxs)("div", {
            className: "jsx-99bb8b8ace113d41 full-screen-instructions",
            children: [
              (0, i.jsx)(U.Z, {}),
              O.IS_FEDERAL && (0, i.jsx)(V.Z, {}),
              g &&
                (0, i.jsx)(X, {
                  projectId: this.props.project._id,
                  legacyLidarExpirationDate: c,
                }),
              (0, i.jsx)(
                ee.Z,
                ce({ includeQueueAnnouncements: !0 }, this.props)
              ),
              (0, i.jsxs)("div", {
                className:
                  "jsx-99bb8b8ace113d41 instructions__wrapper " +
                  (this.props.instructionList &&
                  !this.props.instructionList.refreshersOnly
                    ? "instructionlist"
                    : ""),
                children: [
                  !(null === (s = this.state) || void 0 === s
                    ? void 0
                    : s.newInstructionRes) &&
                    (0, i.jsx)("div", {
                      className: "jsx-99bb8b8ace113d41 instructions__title",
                      children: (0, i.jsx)(Z.x, { medium: !0, children: r }),
                    }),
                  ((this.props.assignments[0].params.stitched_video &&
                    this.state.stitchedVideo) ||
                    this.props.assignments[0].params.task_sequence) &&
                    (0, i.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        overflow: "auto",
                        padding: 10,
                      },
                      className: "jsx-99bb8b8ace113d41",
                      children: [
                        this.renderStitchedVideo(),
                        this.renderClassInfo(),
                      ],
                    }),
                  this.renderLidarNickname(),
                  (this.props.instructionObjectId &&
                    (0, i.jsx)(D.Z, {
                      user: this.props.user,
                      instructionObjectId: this.props.instructionObjectId,
                      isEdgeCase: this.props.isEdgeCase,
                      startTasks: d || u ? void 0 : this.startTasks,
                      startButtonText: a,
                      isReviewMode: this.props.isReviewMode,
                    })) ||
                    (!l().isEmpty(this.props.instructionList) &&
                      !this.props.instructionList.refreshersOnly &&
                      (0, i.jsx)("div", {
                        className:
                          "jsx-99bb8b8ace113d41 instructions__body branded-scroll--neutral",
                        children: (0, i.jsx)($.ZP, {
                          instructionList: this.props.instructionList,
                        }),
                      })) ||
                    (this.props.instructions &&
                      (0, i.jsx)("div", {
                        dangerouslySetInnerHTML: this.state.instructionsHTML,
                        className:
                          "jsx-99bb8b8ace113d41 instructions__body branded-scroll--neutral",
                      })),
                  (0, i.jsx)("div", {
                    className: "jsx-99bb8b8ace113d41 instructions__accept",
                    children:
                      d || u
                        ? (0, i.jsx)(ne, {
                            projectId: this.props.project._id,
                            assignmentJson: this.props.assignmentJson,
                            startTasks: this.startTasks,
                            cta: a,
                            userId: this.props.user.id,
                            isSensorFusion:
                              this.props.type === I.TaskType.SensorFusion,
                            isLidarCategorization: u,
                          })
                        : !this.props.instructionObjectId &&
                          (0, i.jsx)(f.Z, {
                            size: "lg",
                            primary: !0,
                            arrows: !0,
                            onClick: this.startTasks,
                            children: a,
                          }),
                  }),
                ],
              }),
              O.IS_FEDERAL && (0, i.jsx)(V.Z, {}),
              (0, i.jsx)(o(), {
                id: "e55fd2d0d63d8b91",
                children:
                  ".full-screen-instructions.jsx-99bb8b8ace113d41{width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;background:var(--color-RemoGray01)}.instructions__wrapper.jsx-99bb8b8ace113d41{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:90vw;min-width:45vw;margin:60px 0;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:white;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:4px 4px 8px rgba(0,0,0,.025);-moz-box-shadow:4px 4px 8px rgba(0,0,0,.025);box-shadow:4px 4px 8px rgba(0,0,0,.025);overflow:hidden;z-index:2}.instructions__wrapper.instructionlist.jsx-99bb8b8ace113d41{max-width:100vw}.instructions__title.jsx-99bb8b8ace113d41{z-index:2;padding:24px;background:rgb(154,161,171);color:white;text-align:center}.instructions__body.jsx-99bb8b8ace113d41{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-height:20vh;padding:24px;overflow:scroll;background:white;font-size:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.instructions__accept.jsx-99bb8b8ace113d41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin:24px 0}",
              }),
              (0, i.jsx)(o(), {
                id: "98bea62fb1349a85",
                children:
                  ".full-screen-instructions .instructions__body iframe{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;border:0;outline:0;height:auto!important;width:925pt!important}",
              }),
            ],
          });
        }
        constructor(e) {
          super(e), (this.startTasks = this.startTasks.bind(this));
        }
      }
      var pe = s(255774),
        me = s(333470),
        he = s(583951),
        ge = s(802638),
        fe = s(761878),
        be = s(633407);
      class xe extends r.Component {
        get title() {
          return `You just earned a $${(
            this.props.showBonus.amountHundredthsOfCents / 1e4
          ).toFixed(2)} bonus!`;
        }
        getNextBonus() {
          const e = new Date(),
            t = l().filter(
              this.props.bonuses,
              (t) =>
                t.status === C.BonusStatus.Pending &&
                new Date(t.currentPeriodEnd) > e &&
                t.progress < t.target
            );
          return l().minBy(t, be.ef);
        }
        renderHeader() {
          return (0, i.jsxs)("div", {
            className: "jsx-92f99bac857b2b87 header",
            children: [
              (0, i.jsxs)("h2", {
                className: "jsx-92f99bac857b2b87",
                children: [
                  (0, i.jsx)("span", {
                    className: "jsx-92f99bac857b2b87 emoji-wrapper",
                    children: (0, i.jsx)(b.Z, {
                      emoji: "\ud83e\udd11",
                      size: "28px",
                    }),
                  }),
                  (0, i.jsx)("span", {
                    className: "jsx-92f99bac857b2b87",
                    children: this.title,
                  }),
                ],
              }),
              (0, i.jsx)(o(), {
                id: "92f99bac857b2b87",
                children:
                  ".header.jsx-92f99bac857b2b87{height:56px;padding:0 16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;font-size:15px;background:green}.header.jsx-92f99bac857b2b87 h2.jsx-92f99bac857b2b87{color:white}.header.jsx-92f99bac857b2b87 .emoji-wrapper.jsx-92f99bac857b2b87{margin-right:15px;margin-left:35px}",
              }),
            ],
          });
        }
        renderDoneButton() {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: "jsx-3e0f1310447307af footer-wrapper",
                children: (0, i.jsx)(ge.mz, {
                  children: (0, i.jsx)(f.Z, {
                    success: !0,
                    onClick: this.props.onClick,
                    children: "Keep Earning!",
                  }),
                }),
              }),
              (0, i.jsx)(o(), {
                id: "3e0f1310447307af",
                children:
                  ".footer-wrapper.jsx-3e0f1310447307af{margin-top:auto;width:inherit}",
              }),
            ],
          });
        }
        renderBody() {
          let e;
          const t = this.getNextBonus();
          t &&
            (e = (0, i.jsxs)("div", {
              className: "jsx-95e2fe954238cc4 bonus-wrapper",
              children: [
                (0, i.jsx)("h3", {
                  className: "jsx-95e2fe954238cc4",
                  children: "You have another bonus coming up:",
                }),
                (0, i.jsx)(fe.Z, { bonus: t }),
                (0, i.jsx)(o(), {
                  id: "95e2fe954238cc4",
                  children:
                    ".bonus-wrapper.jsx-95e2fe954238cc4{margin-top:20px}",
                }),
              ],
            }));
          const s = this.props.showBonus.name,
            n = this.props.showBonus.target,
            r = C.nounsByBonusRule[this.props.showBonus.bonusRule] || "task",
            a = 1 !== n;
          return (0, i.jsxs)("div", {
            className: "jsx-84f152fb69754b7a earned-message",
            children: [
              (0, i.jsxs)("div", {
                className: "jsx-84f152fb69754b7a",
                children: [
                  (0, i.jsxs)("h3", {
                    className: "jsx-84f152fb69754b7a",
                    children: [
                      "Keep up the good work! You earned ",
                      (0, i.jsx)("span", {
                        className: "jsx-84f152fb69754b7a bonus-name",
                        children: s,
                      }),
                      " ",
                      "because of your great work on the last ",
                      n,
                      " ",
                      r,
                      a ? "s" : "",
                      ".",
                    ],
                  }),
                  e,
                ],
              }),
              this.renderDoneButton(),
              (0, i.jsx)(o(), {
                id: "84f152fb69754b7a",
                children:
                  ".earned-message.jsx-84f152fb69754b7a{width:100%;padding-top:50px;padding-left:64px;padding-right:64px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;text-align:center;color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}h3.jsx-84f152fb69754b7a{font-weight:300}.bonus-name.jsx-84f152fb69754b7a{font-weight:900}",
              }),
            ],
          });
        }
        render() {
          return (0, i.jsxs)(ge.u_, {
            isOpen: !0,
            contentOverflow: "hidden",
            maxWidth: "900px",
            margin: "50px auto auto auto",
            children: [
              (0, i.jsxs)("div", {
                className: "jsx-b4490f802260e1b2 container",
                children: [
                  (0, i.jsx)("div", {
                    className: "jsx-b4490f802260e1b2 earned-bonus-header",
                    children: this.renderHeader(),
                  }),
                  (0, i.jsx)("div", {
                    className: "jsx-b4490f802260e1b2 earned-bonus-body",
                    children: this.renderBody(),
                  }),
                ],
              }),
              (0, i.jsx)(o(), {
                id: "b4490f802260e1b2",
                children:
                  ".container.jsx-b4490f802260e1b2{height:-webkit-calc(100vh - 300px);height:-moz-calc(100vh - 300px);height:calc(100vh - 300px);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.earned-bonus-header.jsx-b4490f802260e1b2{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.earned-bonus-body.jsx-b4490f802260e1b2{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;overflow:hidden}",
              }),
            ],
          });
        }
      }
      var ve = xe,
        ye = s(981411),
        ke = s(185674),
        je = s(161320),
        we = s.n(je),
        Se = s(566896),
        Te = s(490067),
        Ce = s(50682),
        Ie = s.n(Ce),
        Re = s(308609),
        Pe = s(797680),
        Ae = s(161292),
        Ee = s(412636),
        Oe = s(971599),
        Ne = s(60042),
        Le = s.n(Ne),
        _e = s(669749),
        Fe = s(203577),
        De = s(250822),
        Me = s(397672),
        Ze = s(106993),
        ze = s(832763),
        Be = s(208528),
        Ue = s(431350),
        He = s(687192),
        qe = s(720408),
        $e = s(273151),
        Ve = s(650735);
      function Qe(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function We(e, t, s) {
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
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              We(e, t, s[t]);
            });
        }
        return e;
      }
      const Je = (e) => {
        var t, s, n, o, a, c;
        const d = (0, $e.O)(),
          {
            accept: u,
            assignment: p,
            canEdit: m,
            canRejectWithChanges: h,
            canReturnToQueue: g,
            disableAccept: f,
            discardChanges: b,
            disableCancelButton: x,
            fixable: v,
            getTimeSpent: y,
            isAssignmentLoading: k,
            isCustomerQAMode: j,
            isReturnToQueueDisabled: w = !1,
            isScaleStudio: S = !1,
            isSubmitDisabled: T = !1,
            isSubmitting: R,
            madeChanges: P,
            makeChanges: A,
            makeChangesColor: E,
            makingChanges: O,
            nextTask: N,
            onRejectFixableWithNoFix: L,
            onUserSkip: _,
            reject: F,
            rejectWithChanges: D,
            returnToQueue: M,
            returnToQueueDisabledTooltip: Z,
            submitDisabledTooltip: z,
            setTaskFeedback: B,
          } = e,
          U = Xe(),
          { 0: H, 1: q } = (0, r.useState)(!1),
          [$, V] = (0, Be.Z)(!1),
          Q = !!p.isInstructionTask,
          W = !(0, Ve.Tv)(p.project) && p.type !== I.TaskType.Categorization,
          G = () => {
            b(), V();
          },
          J = () => {
            q(!0);
          },
          Y = (function () {
            var e,
              t =
                ((e = function* (e) {
                  null === L || void 0 === L || L(e), q(!1);
                }),
                function () {
                  var t = this,
                    s = arguments;
                  return new Promise(function (i, n) {
                    var o = e.apply(t, s);
                    function r(e) {
                      Qe(o, i, n, r, a, "next", e);
                    }
                    function a(e) {
                      Qe(o, i, n, r, a, "throw", e);
                    }
                    r(void 0);
                  });
                });
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          K = () => {
            q(!1);
          },
          X =
            null === d ||
            void 0 === d ||
            null === (t = d.labelerStateHook) ||
            void 0 === t ||
            null === (s = t.assignment) ||
            void 0 === s
              ? void 0
              : s.config;
        var ee;
        const te =
            null !==
              (ee =
                null === X || void 0 === X ? void 0 : X.spotterReviewLevel) &&
            void 0 !== ee
              ? ee
              : C.defaultSpotterReviewLevel,
          se = !(
            p.reviewLevel !== te ||
            !(null === X || void 0 === X ? void 0 : X.isSpotterEnabled)
          );
        var ie;
        const ne =
            se &&
            !(null !==
              (ie =
                null === X || void 0 === X ? void 0 : X.spotterFixingEnabled) &&
            void 0 !== ie
              ? ie
              : C.defaultSpotterIsFixingEnabled),
          oe =
            (se &&
              !!(null === X || void 0 === X
                ? void 0
                : X.inlineCommentsEnabled)) ||
            (null === p ||
            void 0 === p ||
            null === (n = p.params) ||
            void 0 === n
              ? void 0
              : n.isRedactionVerification),
          re =
            oe &&
            l().isEqual(
              null === d ||
                void 0 === d ||
                null === (o = d.labelerStateHook) ||
                void 0 === o
                ? void 0
                : o.annotationsHook.inlineCommentsHook.allComments,
              null === d ||
                void 0 === d ||
                null === (a = d.labelerStateHook) ||
                void 0 === a
                ? void 0
                : a.annotationsHook.inlineCommentsHook.initialComments
            ) &&
            !(null === p ||
            void 0 === p ||
            null === (c = p.params) ||
            void 0 === c
              ? void 0
              : c.isRedactionVerification),
          ae = (e) =>
            void 0 !== p.feedbackTemplate &&
            (0, qe.validateIsTaskFeedbackTemplate)(p.feedbackTemplate) &&
            e in p.feedbackTemplate,
          le = (e) =>
            e.filter(
              (e) => !e.reviewLevels || e.reviewLevels.includes(p.reviewLevel)
            ),
          ce = (e, t, s, i) => (e, s) => {
            const n = [];
            for (const t of p.feedbackTemplate[i]) {
              const i = t.title;
              if (t.inputType === qe.TaskFeedbackInput.Text) {
                const t = { title: i, response: e[i] };
                n.push(t);
              } else {
                const e = { title: i, response: s[i] };
                n.push(e);
              }
            }
            void 0 !== B ? B(n, t) : t();
          },
          de = () => {
            var e, t, s;
            return m
              ? se
                ? null
                : _
                ? S
                  ? (0, i.jsx)(Me.Z, {
                      id: p._id,
                      type: p.type,
                      project: p.project,
                      canSkip: !!(null ===
                        (t =
                          null === d ||
                          void 0 === d ||
                          null === (e = d.labelerStateHook) ||
                          void 0 === e
                            ? void 0
                            : e.annotationsHook.inlineCommentsHook
                                .allComments) || void 0 === t
                        ? void 0
                        : t.length),
                      response: {
                        inlineComments:
                          null === d ||
                          void 0 === d ||
                          null === (s = d.labelerStateHook) ||
                          void 0 === s
                            ? void 0
                            : s.annotationsHook.inlineCommentsHook.allComments,
                      },
                      isReview: !0,
                      handleSkip: _,
                    })
                  : (0, i.jsx)(
                      De.Z,
                      {
                        confirmButtonText: "Skip task",
                        buttonText: "Skip",
                        style: Ge({}, it, { opacity: R ? 0.5 : 1 }),
                        handleSkip: _,
                        bid: null === p || void 0 === p ? void 0 : p.bid,
                        isInstructionTask: Q,
                        disabled: R,
                      },
                      "skipButton"
                    )
                : null
              : null;
          },
          ue = (e) => {
            const t = se ? "Reject" : "Send Back To Queue";
            let s;
            return (
              re
                ? (s = "You must add comments (right click) before rejecting")
                : e
                ? (s =
                    Z ||
                    "Send back to queue disabled due to misuse or task has been sent back too many times. Please only send back if most of the task is not done.")
                : P && (s = "This will discard your current edits"),
              j
                ? (0, i.jsx)(
                    _e.S5,
                    { type: "reject", onClick: G, children: t },
                    "redo-link" + !!s
                  )
                : (0, i.jsxs)("div", {
                    "data-tip": s,
                    "data-for": "return-to-queue",
                    children: [
                      (0, i.jsx)(Ue.zx, {
                        style: Ge({}, nt, { opacity: R ? 0.5 : 1 }),
                        disabled: e || re || R,
                        onClick: G,
                        children: t,
                      }),
                      (0, i.jsx)(Ie(), { id: "return-to-queue" }),
                    ],
                  })
            );
          };
        return (0, i.jsx)("div", {
          className: U.documentTranscriptionSubmitButtons,
          children: k
            ? (0, i.jsxs)("div", {
                className: U.isProcessing,
                children: [
                  (0, i.jsx)(He.Z, {}),
                  (0, i.jsx)("span", {
                    style: { marginLeft: "12px" },
                    children: "Loading task",
                  }),
                ],
              })
            : H
            ? (0, i.jsx)(Ke, {
                enabled: !R,
                onConfirm: Y,
                onCancel: K,
                isScaleStudio: S,
              })
            : $
            ? (() => {
                var e, t;
                const s = re,
                  n = (e, t, n) => {
                    if (ae(qe.FeedbackConditions.SBTQ)) {
                      const o = le(p.feedbackTemplate.sbtq);
                      if (o.length)
                        return (0, i.jsx)(Ze.Z, {
                          handleSubmitFeedback: ce(
                            0,
                            t,
                            0,
                            qe.FeedbackConditions.SBTQ
                          ),
                          style: nt,
                          feedbackEntries: o,
                          buttonText: n,
                          confirmButtonText: n,
                          disabled: T || s || e,
                        });
                    }
                    return (0, i.jsx)(Ue.zx, {
                      disabled: T || s || e || R,
                      onClick: t,
                      style: Ge({}, nt, { opacity: R ? 0.5 : 1 }),
                      htmlType: "button",
                      children: n,
                    });
                  },
                  o = (0, i.jsx)(Fe.HA, {
                    nextTaskHandler: N,
                    sendHandler: oe && D ? D : M,
                    taskProjectId:
                      null === (e = p.project) || void 0 === e ? void 0 : e._id,
                    getTimeSpent: y,
                    taskType: p.type,
                    taskUserId:
                      null === (t = p.project) || void 0 === t
                        ? void 0
                        : t.taskCustomer,
                    type: Fe.a5.SendBackToQueue,
                    disableModal:
                      j || !C.lidarTypesWithLinking.includes(p.type),
                    autoloadNextAssignment: !C.lidarTypesWithLinking.includes(
                      p.type
                    ),
                    children: ({ disabled: e, onClick: t, text: s }) =>
                      (0, i.jsx)("div", {
                        "data-for": "reject-disabled",
                        children: n(e, t, se ? "Reject" : s),
                      }),
                  }),
                  a = (0, i.jsx)(Ue.zx, {
                    htmlType: "button",
                    disabled: R,
                    onClick: V,
                    style: Ge({}, it, { opacity: R ? 0.5 : 1 }),
                    children: "Cancel",
                  });
                return (0, i.jsxs)(r.Fragment, { children: [a, o] });
              })()
            : O
            ? (() => {
                var t, s, n, o;
                let r,
                  a = null;
                !g || j || h || (a = ue(w));
                let l = !1;
                P
                  ? e.isSubmitDisabled && ((l = !0), (r = z))
                  : ((l = !0),
                    (r =
                      "Please make at least one change and keep all fields valid"));
                const c = (e, t, s) => {
                    if (ae(qe.FeedbackConditions.MakeChanges)) {
                      const n = le(p.feedbackTemplate.makeChanges);
                      if (n.length)
                        return (0, i.jsx)(Ze.Z, {
                          handleSubmitFeedback: ce(
                            0,
                            t,
                            0,
                            qe.FeedbackConditions.MakeChanges
                          ),
                          style: tt,
                          feedbackEntries: n,
                          buttonText: s,
                          confirmButtonText: s,
                          disabled: l || e || !m,
                        });
                    }
                    return (0, i.jsx)(Ue.zx, {
                      disabled: l || e || !m || R,
                      onClick: t,
                      style: Ge({}, tt, { opacity: l || R ? 0.5 : 1 }),
                      htmlType: "button",
                      children: s,
                    });
                  },
                  d = (0, i.jsx)(
                    Fe.HA,
                    {
                      nextTaskHandler: N,
                      sendHandler: F,
                      taskProjectId:
                        null === (t = p.project) || void 0 === t
                          ? void 0
                          : t._id,
                      getTimeSpent: y,
                      taskType: p.type,
                      taskUserId:
                        null === (s = p.project) || void 0 === s
                          ? void 0
                          : s.taskCustomer,
                      type: Fe.a5.ApproveWithChanges,
                      disableModal:
                        j || !C.lidarTypesWithLinking.includes(p.type),
                      autoloadNextAssignment: !C.lidarTypesWithLinking.includes(
                        p.type
                      ),
                      requireConfirm: W,
                      children: ({ disabled: e, onClick: t, text: s }) =>
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("div", {
                              "data-tip": r,
                              "data-for": "submit-disabled",
                              children: c(e, t, s),
                            }),
                            (0, i.jsx)(Ie(), { id: "submit-disabled" }),
                          ],
                        }),
                    },
                    "fixingSubmitButton"
                  ),
                  u =
                    !x &&
                    (0, i.jsx)(Ue.zx, {
                      htmlType: "button",
                      disabled: R,
                      onClick: b,
                      style: Ge({}, it, { opacity: R ? 0.5 : 1 }),
                      children: "Cancel",
                    }),
                  f =
                    r ||
                    (re
                      ? "You must add comments (right click) before rejecting"
                      : void 0),
                  v =
                    !!h &&
                    D &&
                    (0, i.jsx)(
                      Fe.HA,
                      {
                        nextTaskHandler: N,
                        sendHandler: D,
                        taskProjectId:
                          null === (n = p.project) || void 0 === n
                            ? void 0
                            : n._id,
                        getTimeSpent: y,
                        taskType: p.type,
                        taskUserId:
                          null === (o = p.project) || void 0 === o
                            ? void 0
                            : o.taskCustomer,
                        type: Fe.a5.SendBackToQueueWithChanges,
                        disableModal:
                          j || !C.lidarTypesWithLinking.includes(p.type),
                        autoloadNextAssignment:
                          !C.lidarTypesWithLinking.includes(p.type),
                        requireConfirm: W,
                        children: ({ disabled: e, onClick: t, text: s }) =>
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("div", {
                                "data-tip": f,
                                "data-for": "submit-disabled",
                                children: (0, i.jsx)(Ue.zx, {
                                  disabled: l || e || !m || re,
                                  onClick: t,
                                  style: nt,
                                  htmlType: "button",
                                  children: se ? "Reject with changes" : s,
                                }),
                              }),
                              (0, i.jsx)(Ie(), { id: "submit-disabled" }),
                            ],
                          }),
                      },
                      "rejectWithChangesButton"
                    );
                return (0, i.jsxs)(i.Fragment, { children: [a, u, v, d] });
              })()
            : ne || !v
            ? (() => {
                var e, t, s, n;
                const o = de(),
                  r = re
                    ? "You must add comments (right click) before rejecting"
                    : "";
                return [
                  o,
                  (0, i.jsx)(
                    Fe.HA,
                    {
                      nextTaskHandler: N,
                      sendHandler: oe && D ? D : F,
                      taskProjectId:
                        null === (e = p.project) || void 0 === e
                          ? void 0
                          : e._id,
                      getTimeSpent: y,
                      taskType: p.type,
                      taskUserId:
                        null === (t = p.project) || void 0 === t
                          ? void 0
                          : t.taskCustomer,
                      type: Fe.a5.Reject,
                      disableModal:
                        j || !C.lidarTypesWithLinking.includes(p.type),
                      autoloadNextAssignment: !C.lidarTypesWithLinking.includes(
                        p.type
                      ),
                      children: ({ disabled: e, onClick: t, text: s }) =>
                        (0, i.jsx)(_e.S5, {
                          type: "reject",
                          onClick: t,
                          isDisabled: e || !m || re,
                          tooltip: r,
                          children: s,
                        }),
                    },
                    "reject"
                  ),
                  (0, i.jsx)(
                    Fe.HA,
                    {
                      nextTaskHandler: N,
                      sendHandler: u,
                      taskProjectId:
                        null === (s = p.project) || void 0 === s
                          ? void 0
                          : s._id,
                      getTimeSpent: y,
                      taskType: p.type,
                      taskUserId:
                        null === (n = p.project) || void 0 === n
                          ? void 0
                          : n.taskCustomer,
                      type: Fe.a5.Approve,
                      disableModal:
                        j || !C.lidarTypesWithLinking.includes(p.type),
                      autoloadNextAssignment: !C.lidarTypesWithLinking.includes(
                        p.type
                      ),
                      children: ({ disabled: e, onClick: t, text: s }) =>
                        (0, i.jsx)(_e.S5, {
                          type: "accept",
                          onClick: t,
                          isDisabled: e || !m,
                          children: s,
                        }),
                    },
                    "accept"
                  ),
                ];
              })()
            : (() => {
                var t, s;
                const { isCustomerQAMode: n, onRejectFixableWithNoFix: o } = e,
                  { isSpotterSubtask: r, isSpotterFixingEnabled: a } = p,
                  l =
                    !(r && !a) &&
                    (0, i.jsx)(Ue.zx, {
                      disabled: !m || R,
                      onClick: A,
                      style: Ge({}, st, {
                        background: E || st.background,
                        opacity: !m || R ? 0.5 : 1,
                      }),
                      htmlType: "button",
                      children: "Make Changes",
                    }),
                  c = (e, t, s) => {
                    if (ae(qe.FeedbackConditions.Accept)) {
                      const n = le(p.feedbackTemplate.accept);
                      if (n.length)
                        return (0, i.jsx)(Ze.Z, {
                          handleSubmitFeedback: ce(
                            0,
                            t,
                            0,
                            qe.FeedbackConditions.Accept
                          ),
                          style: T || e ? ot : tt,
                          feedbackEntries: n,
                          buttonText: s,
                          confirmButtonText: s,
                          disabled: T || e || !m,
                        });
                    }
                    return (0, i.jsx)(Ue.zx, {
                      disabled: T || e || !m || R,
                      onClick: t,
                      style: T || e || !m || R ? ot : tt,
                      htmlType: "button",
                      children: s,
                    });
                  },
                  d =
                    !f &&
                    (0, i.jsx)(
                      Fe.HA,
                      {
                        nextTaskHandler: N,
                        sendHandler: u,
                        taskProjectId:
                          null === (t = p.project) || void 0 === t
                            ? void 0
                            : t._id,
                        getTimeSpent: y,
                        taskType: p.type,
                        taskUserId:
                          null === (s = p.project) || void 0 === s
                            ? void 0
                            : s.taskCustomer,
                        type: Fe.a5.Approve,
                        disableModal:
                          n || !C.lidarTypesWithLinking.includes(p.type),
                        autoloadNextAssignment:
                          !C.lidarTypesWithLinking.includes(p.type),
                        requireConfirm: W,
                        children: ({ disabled: e, onClick: t, text: s }) =>
                          (0, i.jsxs)("div", {
                            "data-tip": !0,
                            "data-for": "submit-disabled",
                            children: [
                              c(e, t, s),
                              !!z &&
                                (0, i.jsx)(Ie(), {
                                  id: "submit-disabled",
                                  type: "dark",
                                  children: (0, i.jsx)("div", {
                                    style: {
                                      width: "200px",
                                      fontWeight: "bold",
                                    },
                                    children: z,
                                  }),
                                }),
                            ],
                          }),
                      },
                      "acceptTask"
                    ),
                  h = g && ue(w || !m),
                  b = de(),
                  x =
                    n &&
                    o &&
                    (0, i.jsx)(
                      _e.S5,
                      { type: "reject", onClick: J, children: "Reject" },
                      "reject"
                    );
                return (0, i.jsxs)(i.Fragment, { children: [b, h, x, l, d] });
              })(),
        });
      };
      Je.defaultProps = { canEdit: !0 };
      var Ye = Je;
      const Ke = (e) => {
          const {
              enabled: t,
              initialComments: s,
              onCancel: n,
              onConfirm: o,
              isScaleStudio: a,
            } = e,
            { 0: l, 1: c } = (0, r.useState)(s || "");
          return (0, i.jsxs)(r.Fragment, {
            children: [
              !a &&
                (0, i.jsx)(_e.AM, {
                  commentsInput: s,
                  handleCommentsChange: c,
                }),
              (0, i.jsxs)("div", {
                "data-for": "reject-fixable",
                children: [
                  (0, i.jsx)(Ue.zx, {
                    disabled: !t || !l,
                    onClick: () => {
                      o(l || "");
                    },
                    style: st,
                    htmlType: "button",
                    children: "Reject",
                  }),
                  (0, i.jsx)(Ie(), { id: "reject-fixable" }),
                ],
              }),
              (0, i.jsx)(Ue.zx, {
                disabled: !t,
                onClick: n,
                htmlType: "button",
                children: "Cancel",
              }),
            ],
          });
        },
        Xe = (0, ze.ZL)({
          redoLink: {
            marginRight: "16px",
            color: "rgba(0, 0, 0, 0.4)",
            fontSize: "13px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            transition: "0.1s all",
            cursor: "pointer",
            "&:hover": { color: "rgba(0, 0, 0, 0.8)" },
          },
          isProcessing: {
            fontWeight: 900,
            fontSize: "14px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            whiteSpace: "nowrap",
          },
          documentTranscriptionSubmitButtons: {
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          },
        }),
        et = {
          border: 0,
          borderRadius: "8px",
          color: "white",
          display: "inlineBlock",
          fontSize: "12px",
          height: "36px",
          marginLeft: "12px",
          padding: "10px",
          whiteSpace: "nowrap",
        },
        tt = Ge({}, et, { background: "#7ED321" }),
        st = Ge({}, et, { background: "#F8BB06" }),
        it = Ge({}, et, {
          background: "white",
          border: "1px solid rgba(0, 0, 0, 0.15)",
          color: "black",
        }),
        nt = Ge({}, et, { background: "#EB5424" }),
        ot = Ge({}, et, { background: "#7ED321", opacity: "0.5" });
      var rt = s(113463),
        at = s(168572),
        lt = s(239447),
        ct = s(448586);
      function dt(e, t, s) {
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
      function ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              dt(e, t, s[t]);
            });
        }
        return e;
      }
      var pt = (e) => {
        const {
            assignment: t,
            isCustomerQAMode: s,
            isSolid: n = !1,
            isSubmitting: o,
            toggleShowingInstructions: r,
            toggleShowingShortcuts: a,
            isInstructionTask: l,
            setShowModal: c,
            isEdgeCaseTask: d,
            setShowEdgeCaseModal: u,
            darkMode: p,
          } = e,
          m = mt();
        var h;
        const g = null === (h = e.canEdit) || void 0 === h || h,
          { width: f } = (0, lt.Z)();
        return (0, i.jsxs)("div", {
          className: Le()(m.reviewAssignmentFooter, {
            "completed--flash": o,
            solid: n,
            [m.darkMode]: !!p,
          }),
          children: [
            s
              ? (0, i.jsx)("div", {
                  children: (0, i.jsx)("strong", {
                    children: "Was the task completed correctly?",
                  }),
                })
              : (0, i.jsxs)("div", {
                  children: [
                    r &&
                      (0, i.jsxs)(Ue.zx, {
                        onClick: r,
                        style: ft,
                        children: [
                          "Instructions",
                          f > 1400 &&
                            (0, i.jsxs)("span", {
                              children: [
                                "\xa0\xa0\xa0",
                                (0, i.jsx)(rt.Z, { children: "i" }),
                              ],
                            }),
                        ],
                      }),
                    a &&
                      (0, i.jsxs)(Ue.zx, {
                        onClick: a,
                        style: ft,
                        children: [
                          "Shortcuts",
                          f > 1400 &&
                            (0, i.jsxs)("span", {
                              children: [
                                "\xa0\xa0\xa0",
                                (0, i.jsx)(rt.Z, { children: "/" }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
            l &&
              (0, i.jsx)(Ue.zx, {
                style: gt,
                onClick: () => c && c(!0),
                children: "Instruction Feedback",
              }),
            d &&
              (0, i.jsx)(Ue.zx, {
                style: gt,
                onClick: () => u && u(!0),
                children: "Edge Case Feedback",
              }),
            (0, i.jsx)(ct.D, {
              bid: null === t || void 0 === t ? void 0 : t.bid,
            }),
            g && (0, i.jsx)(Ye, ut({}, e)),
          ],
        });
      };
      const mt = (0, ze.ZL)({
          reviewAssignmentFooter: {
            height: "70px",
            padding: "0px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderTop: "1px solid rgba(0, 0, 0, 0.05)",
            "&.solid": { position: "relative" },
          },
          darkMode: {
            backgroundColor: at.ZP.colors.gray75,
            color: at.ZP.colors.gray05,
          },
        }),
        ht = {
          border: 0,
          borderRadius: "8px",
          color: "white",
          display: "inlineBlock",
          fontSize: "12px",
          height: "36px",
          marginRight: "12px",
          padding: "10px",
          whiteSpace: "nowrap",
        },
        gt = ut({}, ht, {
          background: "white",
          border: "1px solid rgba(0, 0, 0, 0.15)",
          color: "black",
        }),
        ft = ut({}, ht, { background: "black" });
      var bt = s(227504),
        xt = s(55539),
        vt = s(781529),
        yt = s(4490);
      function kt(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function jt(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              kt(o, i, n, r, a, "next", e);
            }
            function a(e) {
              kt(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function wt(e, t, s) {
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
      function St(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              wt(e, t, s[t]);
            });
        }
        return e;
      }
      const Tt = ["website", "text", "pdf"],
        Ct = [I.TaskType.MultiModalTranscription];
      class It extends r.Component {
        static get minimumCooldownForAttachmentsWithoutLoadEvent() {
          return we()().add("2", "seconds");
        }
        UNSAFE_componentWillMount() {
          const e =
            !!this.props.assignment.params.attachment_type &&
            !l().includes(Tt, this.props.assignment.params.attachment_type);
          (this.assignmentStartTime = new Date()),
            (this.assignmentLoadTime = new Date()),
            this.setState({
              isAssignmentLoading: e,
              disabledCooldown: this.defaultCooldownForProps(this.props),
              makingChanges: !!this.props.makingChanges,
            });
        }
        componentDidMount() {
          this.forceUpdate(), this.updateFullstory();
        }
        UNSAFE_componentWillReceiveProps(e) {
          if (
            (this.updateFullstory(),
            e.assignment._id !== this.props.assignment._id)
          ) {
            const t =
              !!e.assignment.params.attachment_type &&
              !l().includes(Tt, e.assignment.params.attachment_type);
            (this.assignmentStartTime = new Date()),
              this.setState({
                isSubmitting: !1,
                submittedResponse: void 0,
                isAssignmentLoading: t,
                disabledCooldown: this.defaultCooldownForProps(e),
                makingChanges: !!e.fixable && e.makingChanges,
                madeChanges: e.madeChanges || !1,
                hideOriginalAnnotation: !1,
              });
          }
          l().isNil(e.isSubmitting) ||
            e.isSubmitting === this.props.isSubmitting ||
            this.setState({ isSubmitting: e.isSubmitting });
        }
        componentDidUpdate(e, t) {
          var s = this;
          return jt(function* () {
            if (
              s.state.corruptionsAuditResponse &&
              !t.corruptionsAuditResponse
            ) {
              const { missedCorruptionsByCuboidId: e, ghostCuboidPaths: t } =
                s.state.corruptionsAuditResponse;
              e &&
                (s.taskComponent.cuboidStore.setMissedCorruptions(e),
                s.taskComponent.cuboidStore.setGhostCuboidPaths(t));
            }
          })();
        }
        get feedbackComments() {
          return (0, Ae.M4)(this.state.auditFeedback, this.state.commentsInput);
        }
        get errorCounts() {
          return this.state.errorCounts;
        }
        defaultCooldownForProps(e) {
          var t;
          return e.isUserAdmin || e.isScaleStudio
            ? null
            : (null === (t = e.assignment) || void 0 === t
                ? void 0
                : t.params) &&
              l().includes(Tt, e.assignment.params.attachment_type)
            ? It.minimumCooldownForAttachmentsWithoutLoadEvent
            : null;
        }
        assignmentDidLoad() {
          (this.assignmentLoadTime = new Date()),
            this.setState({ isAssignmentLoading: !1 }),
            !this.props.query.auditCorruptions ||
              (this.props.assignment.type !== I.TaskType.LidarAnnotation &&
                this.props.assignment.type !== I.TaskType.LidarSegmentation) ||
              this.fetchCorruptionsAudit();
        }
        getReviewSubmitDisabledStatus() {
          let e;
          return this.showAuditResultDropdown && !this.state.auditResult
            ? {
                canSubmit: !1,
                submitTooltip:
                  "Please select an audit result from the dropdown below.",
              }
            : this.taskComponent
            ? this.state.isAssignmentLoading && !this.props.canReturnToQueue
              ? {
                  canSubmit: !1,
                  submitTooltip: "Wait for the assignment to finish loading.",
                }
              : this.state.disabledCooldown &&
                this.state.disabledCooldown.toDate() > new Date()
              ? {
                  canSubmit: !1,
                  submitTooltip:
                    "Take the time to fully review the task response.",
                }
              : (this.taskComponent.getSubmitDisabledStatus &&
                  ((e = this.taskComponent.getSubmitDisabledStatus()),
                  !e.canSubmit)) ||
                (this.taskComponent.getReviewSubmitDisabledStatus &&
                  ((e = this.taskComponent.getReviewSubmitDisabledStatus()),
                  !e.canSubmit)) ||
                (this.props.getReviewSubmitDisabledStatus &&
                  ((e = this.props.getReviewSubmitDisabledStatus()),
                  !e.canSubmit))
              ? e
              : this.props.fixable &&
                l().some(this.state.lintErrors, (e) => e.data.blocksSubmission)
              ? {
                  canSubmit: !1,
                  submitTooltip:
                    "Please fix all red errors in the Issues tab before submitting.",
                }
              : this.props.assignment.type !==
                  I.TaskType.DocumentTranscription &&
                this.props.fixable &&
                !l().every(this.state.lintErrors, (e) => e.dismissed)
              ? {
                  canSubmit: !1,
                  submitTooltip:
                    "Please fix or dismiss all quality checks before submitting.",
                }
              : l().get(this.props, "isInstructionTask", !1) &&
                !this.state.instructionFeedbackRead
              ? {
                  canSubmit: !1,
                  submitTooltip: "Please open the instruction feedback modal.",
                }
              : l().get(this.props, "isEdgeCaseTask", !1) &&
                !this.state.edgeCaseFeedbackRead
              ? {
                  canSubmit: !1,
                  submitTooltip: "Please submit the edge case feedback modal.",
                }
              : "604bfabb6427ed00177c67c5" !==
                  l().get(this.props, "assignment.project._id", "") ||
                0 !==
                  l().get(
                    this.props,
                    "assignment.fixResponse.annotations.unjudgeable.response[0]",
                    []
                  ).length ||
                this.state.makingChanges
              ? { canSubmit: !0, submitTooltip: null }
              : {
                  canSubmit: !1,
                  submitTooltip:
                    'Please pick the best provided response or mark the attempt as unjudgeable via the "Make Changes" button',
                }
            : {
                canSubmit: !1,
                submitTooltip: "Wait for the assignment to finish loading.",
              };
        }
        get showAuditResultDropdown() {
          var e;
          const { assignment: t, user: s } = this.props;
          if (
            (0, C.isContentAndLanguage)(t.type) ||
            [I.TaskType.DocumentTranscription, I.TaskType.Chat].includes(t.type)
          )
            return !1;
          const i = s.workerSource && C.QAWorkerSource.includes(s.workerSource),
            n = s.isCorporateUser,
            o =
              null === t ||
              void 0 === t ||
              null === (e = t.params) ||
              void 0 === e
                ? void 0
                : e.auditResultOptions;
          return i || n || !l().isEmpty(o);
        }
        handleAuditResultChange(e) {
          this.setState({ auditResult: e });
        }
        fetchCorruptionsAudit() {
          var e = this;
          return jt(function* () {
            if (!e.props.isUserAdmin) return;
            const { corruptionsAuditResponse: t } = yield (0, k.ZP)(
              null,
              `internal/lidar/${e.props.assignment._id}/audit_corruptions`
            );
            e.setState({ corruptionsAuditResponse: t });
          })();
        }
        toggleCorruptionsAudit() {
          this.setState((e) => ({
            showingCorruptionsAudit: !e.showingCorruptionsAudit,
          }));
        }
        updateFullstory() {
          (0, y.IO)(() => {
            (this.fullstorySession = (0, y.Hr)(!0)),
              (0, y.xx)({
                attemptId: this.props.assignment.attemptId,
                subtaskId: this.props.assignment._id,
              });
          }, !0);
        }
        setStateAsync(e) {
          return new Promise((t) => this.setState(e, t));
        }
        buildDisabledCooldown() {
          var e;
          let t =
            null === (e = this.state.disabledCooldown) || void 0 === e
              ? void 0
              : e.toDate();
          return (
            (!t || new Date() > t) && (t = new Date()),
            we()(t).add("1", "second").toDate()
          );
        }
        onChange(e) {
          var t = this;
          return jt(function* () {
            var s, i;
            if (void 0 !== e) {
              if (
                t.state.makingChanges &&
                (t.setState({ madeChanges: t.props.madeChanges || e }),
                null === (i = (s = t.props).onMadeChanges) ||
                  void 0 === i ||
                  i.call(s, e),
                !l().isEmpty(t.state.lintErrors))
              ) {
                const e =
                  t.taskComponent && (yield t.taskComponent.getReviewChanges());
                t.checkLintErrors({ taskResponse: e, fromMadeChanges: !0 });
              }
            } else t.forceUpdate();
          })();
        }
        discardChanges() {
          var e;
          this.setState({ madeChanges: !1 }),
            null === (e = this.taskComponent) ||
              void 0 === e ||
              e.discardChanges();
        }
        checkLintErrors({
          taskResponse: e,
          reviewedAnnotations: t = [],
          featureFlaggedLinters: s = {},
          fromMadeChanges: i = !1,
        }) {
          var n = this;
          return jt(function* () {
            const o = n.props.assignment.type;
            if (i && !(0, Ee.D0)(o))
              return l().every(n.state.lintErrors, (e) => e.dismissed);
            const r = (0, Ee.SW)(o, {
              task: n.props.assignment,
              subtask: n.props.assignment,
              response: e,
              reviewedAnnotations: t,
              featureFlaggedLinters: s,
              fromMadeChanges: i,
            });
            if (!i)
              if (n.taskComponent.delegatedLinter) {
                const e = yield n.taskComponent.delegatedLinter();
                r.push(...e);
              } else {
                const t = yield (0, vt.Ov)({
                  subtask: n.props.assignment,
                  response: e,
                });
                r.push(...t);
              }
            if (n.taskComponent.quickLinter) {
              const e = n.taskComponent.quickLinter();
              r.push(...e);
            }
            for (const e in r) {
              const t = l().find(n.state.lintErrors, (t) => t.id === r[e].id);
              t &&
                ((r[e].dismissed = t.dismissed),
                (r[e].createdAt = t.createdAt));
            }
            if (!i) {
              l().some(
                r,
                (e) =>
                  e.dismissed &&
                  +new Date() - e.createdAt.getTime() >
                    Oe.LintDiagnostic.MAX_ELAPSED_TIME_MS
              ) &&
                r.forEach((e) => {
                  (e.dismissed = !1), (e.createdAt = new Date());
                }),
                R.c.track(`Fired lint for ${o}`, {
                  numLints: r.length,
                  numActiveLints: r.filter((e) => !e.dismissed).length,
                  taskType: o,
                  attemptId: n.props.assignment.attemptId,
                  subtaskId: n.props.assignment._id,
                });
            }
            return (
              yield n.setStateAsync({ lintErrors: r }),
              l().every(n.state.lintErrors, (e) => e.dismissed)
            );
          })();
        }
        handleToggleErrorDismissed(e) {
          this.setState((t) => {
            const s = l().cloneDeep(t.lintErrors),
              i = l().findIndex(s, (t) => t.id === e);
            return (s[i].dismissed = !s[i].dismissed), { lintErrors: s };
          });
        }
        handleSubmitError(e) {
          u().error((0, Pe.V)(e, this.props.assignment._id), {
            timeout: "none",
          }),
            this.setState({ isSubmitting: !1, submittedResponse: void 0 });
        }
        computeMadeChanges() {
          var e;
          return (
            null === (e = this.taskComponent) || void 0 === e
              ? void 0
              : e.madeChanges
          )
            ? "boolean" === typeof this.taskComponent.madeChanges
              ? this.taskComponent.madeChanges
              : this.taskComponent.madeChanges()
            : this.state.madeChanges;
        }
        submit(e) {
          var t = this;
          return (function () {
            var s = jt(function* (s, i, n, o) {
              var r, a, c, d, p, m, h, g;
              const f = t.taskComponent.getReviewSubmitConfirmationMessage(
                !0,
                !1
              );
              if (f && !window.confirm(f)) return Promise.reject();
              const b = t.getReviewSubmitDisabledStatus();
              if (!b.canSubmit)
                return u().info(b.submitTooltip), Promise.reject();
              if (
                t.taskComponent.runReviewSubmitChecks &&
                !(yield t.taskComponent.runReviewSubmitChecks())
              )
                return Promise.reject();
              let x;
              const v = t.computeMadeChanges();
              if (
                t.props.fixable &&
                ((!e && v) || Ct.includes(t.props.assignment.type))
              )
                try {
                  x = yield t.taskComponent.getReviewChanges(!0);
                } catch (E) {
                  const e = E.expose
                    ? E.message
                    : "Error processing review corrections, please try again.";
                  return u().error(e, { timeout: 3e3 }), Promise.reject();
                }
              const y = (0, xt.R)(t.props.assignment);
              var k;
              const j =
                  e || y
                    ? null !== (k = t.props.assignment.fixResponse) &&
                      void 0 !== k
                      ? k
                      : t.props.fixResponse
                    : x,
                w =
                  null === (a = (r = t.taskComponent).getReviewedAnnotations) ||
                  void 0 === a
                    ? void 0
                    : a.call(r),
                S =
                  null ===
                    (d = (c = t.taskComponent).getFeatureFlaggedLinters) ||
                  void 0 === d
                    ? void 0
                    : d.call(c);
              if (t.props.fixable) {
                if (
                  !(yield t.checkLintErrors({
                    taskResponse: j,
                    reviewedAnnotations: w,
                    featureFlaggedLinters: S,
                  }))
                )
                  return Promise.reject();
              }
              let T;
              e &&
                l().includes(
                  [I.TaskType.LidarAnnotation, I.TaskType.LidarSegmentation],
                  t.props.assignment.type
                ) &&
                (T = yield t.taskComponent.getReviewChanges());
              const C = t.taskComponent,
                R = C.onReviewSubmitSuccess
                  ? C.onReviewSubmitSuccess.bind(C)
                  : () => {};
              t.taskComponent.clearFlushUpdatesTimeout &&
                t.taskComponent.clearFlushUpdatesTimeout(),
                t.taskComponent.filterRemoteFields &&
                  x &&
                  (yield t.taskComponent.filterRemoteFields(x)),
                i &&
                  ((e = !1),
                  (x = St({}, x, {
                    isReportedForSensitiveContent: !0,
                    sensitiveContentReportReason: n,
                    sensitiveContentReportExplanation: o,
                  }))),
                null === (m = (p = t.taskComponent).onSubmitCallback) ||
                  void 0 === m ||
                  m.call(p);
              const P =
                null === (g = (h = t.taskComponent).getAttemptBehaviourLog) ||
                void 0 === g
                  ? void 0
                  : g.call(h);
              t.taskComponent.props.setTimeSpent(),
                yield t.setStateAsync({
                  isSubmitting: !0,
                  submittedResponse: e,
                }),
                u().closeAll();
              try {
                var A;
                yield t.props.submit(
                  {
                    isCorrect: e,
                    reviewChanges: x,
                    extra: T,
                    populateHypothesis: !1,
                    timeSpentSecs:
                      t.taskComponent.taskTimer.elapsedTime() / 1e3,
                    oldTimeSpentSecs:
                      t.taskComponent.taskOldTimer.elapsedTime() / 1e3,
                    timeSpentLoadingSecs:
                      (t.assignmentLoadTime.getTime() -
                        t.assignmentStartTime.getTime()) /
                      1e3,
                    comments: t.feedbackComments,
                    errorCounts: {
                      critical: t.state.errorCounts.criticalCount,
                      non_critical: t.state.errorCounts.nonCriticalCount,
                      missing: t.state.errorCounts.missingCount,
                    },
                    fullstorySession: t.fullstorySession,
                    auditResult: t.state.auditResult,
                    categorizationResult: t.categorizationResult,
                    taskFeedback: t.state.taskFeedback,
                    documentRotation: t.taskComponent.documentRotation,
                    documentRotationPerPage:
                      t.taskComponent.documentRotationPerPage,
                    attemptBehaviourLog: P,
                  },
                  R
                ),
                  null === (A = t.props.actions) ||
                    void 0 === A ||
                    A.fetchBonuses();
              } catch (E) {
                throw (yield t.handleSubmitError(E), E);
              }
            });
            return function (e, t, i, n) {
              return s.apply(this, arguments);
            };
          })();
        }
        toggleShowingInstructions() {
          this.taskComponent && this.taskComponent.toggleShowingInstructions();
        }
        toggleShowingShortcuts() {
          this.taskComponent && this.taskComponent.toggleShowingShortcuts();
        }
        toggleShowingSimilarExamples() {
          this.taskComponent &&
            this.taskComponent.toggleShowingSimilarExamples();
        }
        handleErrorCountsChange(e) {
          this.setState({ errorCounts: e });
        }
        onChangeHideOriginal(e) {
          this.setState({ hideOriginalAnnotation: e });
        }
        onUpdateCorruptionFeedback(e, t) {
          var s = this;
          return jt(function* () {
            if (s.props.assignment.type === I.TaskType.LidarAnnotation)
              try {
                s.updateCorruption(Object.assign(e, { isUpdating: !0 }));
                const i = yield (0, k.ZP)(
                  null,
                  `internal/lidar/${s.props.assignment._id}/audit_corruptions/${e._id}`,
                  { method: "PUT", body: { qaAuditStatus: t } }
                );
                s.updateCorruption(i.corruption);
              } catch (i) {
                s.updateCorruption(Object.assign(e, { isUpdating: !1 }));
              }
          })();
        }
        updateCorruption(e) {
          const { cuboidId: t } = e,
            s =
              this.state.corruptionsAuditResponse.missedCorruptionsByCuboidId[
                t
              ],
            i = l().findIndex(s, { _id: e._id });
          s.splice(i, 1, e),
            this.setState((e) =>
              l().merge(e, {
                corruptionsAuditResponse: {
                  missedCorruptionsByCuboidId: { [t]: s },
                },
              })
            );
        }
        renderHeader() {
          var e, t, s, n, o;
          return (0, i.jsx)(Se.Z, {
            assignment: this.props.assignment,
            onChangeHideOriginal: this.onChangeHideOriginal,
            hideOriginalAnnotation: this.state.hideOriginalAnnotation,
            hasWarning:
              null === (e = this.props.claim) || void 0 === e
                ? void 0
                : e.hasWarning,
            recentAccuracy: this.props.assignment.recentAccuracy,
            passRate: this.props.assignment.passRate,
            passNum: this.props.assignment.passNum,
            triggerAutosave: this.triggerAutosave,
            autosaveEnabled:
              null === (t = this.taskComponent) ||
              void 0 === t ||
              null === (s = t.props) ||
              void 0 === s
                ? void 0
                : s.autosaveEnabled,
            lastAutosaveTime:
              null === (n = this.taskComponent) ||
              void 0 === n ||
              null === (o = n.getLastAutosaveTime) ||
              void 0 === o
                ? void 0
                : o.call(n),
            claim: this.props.claim,
            isAutosaving: this.state.isAutosaving,
            bonus: this.props.bonus,
            onUserFlag: this.props.onUserFlag,
            isScaleStudio: this.props.isScaleStudio,
            studioTaskId: l().get(this.props, "studioTaskId", ""),
            taskMetadata: l().get(this.props, "taskMetadata", ""),
            location: this.props.location,
            projectConfig: this.props.projectConfig,
          });
        }
        renderTask() {
          const e = this.props.taskPage;
          var t;
          return (0, i.jsx)("div", {
            className: "tasks__container scaler",
            children: r.cloneElement(e, {
              ref: (e) => (this.taskComponent = e),
              readOnly: !0,
              isReviewMode: !0,
              hidePreviousResponse: this.props.hidePreviousResponse,
              editable: this.state.makingChanges && this.props.canEdit,
              disableShortcuts: !this.state.makingChanges,
              attachmentDidLoad: this.assignmentDidLoad,
              makeChanges: this.makeChanges,
              isSubmittingTask: this.state.isSubmitting,
              onChange: this.onChange,
              hideOriginalAnnotation: this.state.hideOriginalAnnotation,
              timerDisabled: !!this.props.query.force,
              submitReview: this.submit(!1),
              onUpdateCorruptionFeedback: this.onUpdateCorruptionFeedback,
              corruptionsAuditResponse: this.state.corruptionsAuditResponse,
              showingErrors: this.state.showingErrors,
              lintErrors: this.state.lintErrors,
              rerunLinter: this.rerunLinter,
              onToggleErrorDismissed: this.handleToggleErrorDismissed,
              toggleShowingErrors: this.toggleShowingErrors,
              hasTrainingFeedbackPermission:
                null !== (t = e.props.hasTrainingFeedbackPermission) &&
                void 0 !== t
                  ? t
                  : this.props.user.hasTrainingFeedbackPermission,
              onTaskComponentLinterExecution:
                this.onTaskComponentLinterExecution,
              dismissAllLintErrors: this.dismissAllLintErrors,
            }),
          });
        }
        renderFooter({
          lowAccuracyCorruptionTypes: e,
          improvedAccuracyCorruptionTypes: t,
          corruptionAccuracy: s,
        }) {
          var n, o, r, a, c;
          const d = l().size(
              (null === (n = this.state.corruptionsAuditResponse) ||
              void 0 === n
                ? void 0
                : n.missedCorruptionsByCuboidId) || {}
            ),
            u = this.state.corruptionsAuditResponse
              ? this.state.corruptionsAuditResponse.missedLssSpamCorruptions
                  .length
              : 0,
            p =
              this.props.assignment.rejectedReviewer &&
              this.props.assignment.rejectedReviewer === this.props.user._id,
            m = l().get(this.props.assignment, "params.isFair", !1),
            h = !!this.props.assignment.qaFor,
            g =
              !this.props.skipDisabled &&
              ((!p &&
                (this.props.assignment.skippable || this.props.skippable)) ||
                this.props.isUserAdmin);
          return this.props.assignment.type === I.TaskType.DocumentTranscription
            ? (0, i.jsx)(pt, {
                toggleShowingInstructions:
                  this.toggleShowingInstructions.bind(this),
                toggleShowingShortcuts: this.toggleShowingShortcuts.bind(this),
                assignment: this.props.assignment,
                isSubmitting: this.state.isSubmitting,
                submittedResponse: this.state.submittedResponse,
                isAssignmentLoading: this.state.isAssignmentLoading,
                fixable: this.props.fixable,
                canEdit: this.props.canEdit,
                canReturnToQueue: !p && !h && this.props.canReturnToQueue,
                isReturnToQueueDisabled:
                  this.props.isReturnToQueueDisabled ||
                  !1 === this.getReviewSubmitDisabledStatus().canReturnToQueue,
                returnToQueueDisabledTooltip:
                  this.getReviewSubmitDisabledStatus().returnToQueueTooltip,
                returnToQueue: this.returnToQueue,
                canRejectWithChanges:
                  null === (o = this.taskComponent) || void 0 === o
                    ? void 0
                    : o.canRejectWithChanges,
                rejectWithChanges: this.rejectWithChanges,
                makingChanges: this.state.makingChanges,
                madeChanges: this.computeMadeChanges(),
                makeChanges: this.makeChanges,
                discardChanges: this.resetMakingChanges,
                isSubmitDisabled:
                  !this.getReviewSubmitDisabledStatus().canSubmit,
                submitDisabledTooltip:
                  this.getReviewSubmitDisabledStatus().submitTooltip,
                accept: this.props.onAccept || this.submit(!0),
                reject: this.props.onReject || this.submit(!1),
                onUserSkip: g && this.props.onUserSkip,
                onUserSkipBatch:
                  (this.props.assignment.batchSkippable ||
                    (this.props.isUserAdmin &&
                      this.props.assignment.batchId)) &&
                  this.props.onUserSkipBatch,
                nextTask: this.props.nextTask,
                lintErrors: this.state.lintErrors,
                isInstructionTask: this.props.isInstructionTask,
                setShowModal: this.setShowModal,
                isEdgeCaseTask: this.props.isEdgeCaseTask,
                setShowEdgeCaseModal: this.setShowEdgeCaseModal,
                setTaskFeedback: this.setTaskFeedback,
                isScaleStudio: this.props.isScaleStudio,
              })
            : (0, i.jsx)(Te.Z, {
                toggleShowingInstructions:
                  this.toggleShowingInstructions.bind(this),
                toggleShowingShortcuts: this.toggleShowingShortcuts.bind(this),
                toggleShowingSimilarExamples:
                  this.toggleShowingSimilarExamples.bind(this),
                assignment: this.props.assignment,
                isSubmitting: this.state.isSubmitting,
                submittedResponse: this.state.submittedResponse,
                isAssignmentLoading: this.state.isAssignmentLoading,
                fixable: this.props.fixable,
                canEdit: this.props.canEdit,
                canReturnToQueue: m
                  ? !h && this.props.canReturnToQueue
                  : !p && !h && this.props.canReturnToQueue,
                isReturnToQueueDisabled:
                  this.props.isReturnToQueueDisabled ||
                  !1 === this.getReviewSubmitDisabledStatus().canReturnToQueue,
                returnToQueueDisabledTooltip:
                  this.getReviewSubmitDisabledStatus().returnToQueueTooltip,
                returnToQueue: this.returnToQueue,
                canRejectWithChanges:
                  null === (r = this.taskComponent) || void 0 === r
                    ? void 0
                    : r.canRejectWithChanges,
                rejectWithChanges: this.rejectWithChanges,
                makingChanges: this.state.makingChanges,
                madeChanges: this.computeMadeChanges(),
                makeChanges: this.makeChanges,
                discardChanges: this.resetMakingChanges,
                isSubmitDisabled:
                  !this.getReviewSubmitDisabledStatus().canSubmit,
                submitDisabledTooltip:
                  this.getReviewSubmitDisabledStatus().submitTooltip,
                accept: this.props.onAccept || this.submit(!0),
                reject: this.props.onReject || this.submit(!1),
                onUserSkip: g && this.props.onUserSkip,
                onUserSkipBatch:
                  (this.props.assignment.batchSkippable ||
                    (this.props.isUserAdmin &&
                      this.props.assignment.batchId)) &&
                  this.props.onUserSkipBatch,
                commentsInput: this.state.commentsInput,
                auditFeedback: this.state.auditFeedback,
                setAuditFeedback: this.setAuditFeedback,
                handleCommentsChange: this.handleCommentsChange,
                toggleCorruptionsAudit: this.toggleCorruptionsAudit,
                corruptionsAuditCount: d + u,
                showAuditResultDropdown: this.showAuditResultDropdown,
                handleAuditResultChange: this.handleAuditResultChange,
                annotationCount:
                  this.taskComponent && this.taskComponent.getAnnotationCount
                    ? this.taskComponent.getAnnotationCount()
                    : void 0,
                getTimeSpent:
                  this.taskComponent &&
                  (null === (a = this.taskComponent.props) || void 0 === a
                    ? void 0
                    : a.getTimeSpent)
                    ? this.taskComponent.props.getTimeSpent
                    : void 0,
                nextTask: this.props.nextTask,
                lowAccuracyCorruptionTypes: e,
                improvedAccuracyCorruptionTypes: t,
                corruptionAccuracy: s,
                submitForZooxSteamCategorization:
                  this.submitForZooxSteamCategorization,
                lintErrors: this.state.lintErrors,
                toggleShowingErrors: this.toggleShowingErrors,
                auditResult: this.state.auditResult,
                postCompletionFeedback: this.props.postCompletionFeedback,
                isInstructionTask: this.props.isInstructionTask,
                setShowModal: this.setShowModal,
                isEdgeCaseTask: this.props.isEdgeCaseTask,
                setShowEdgeCaseModal: this.setShowEdgeCaseModal,
                setTaskFeedback: this.setTaskFeedback,
                isScaleStudio: this.props.isScaleStudio,
                workerId: this.props.user._id,
                isCorpUser: this.props.user.isCorporateUser,
                onUserReport:
                  this.taskComponent &&
                  (null === (c = this.taskComponent.props) || void 0 === c
                    ? void 0
                    : c.onUserReport)
                    ? this.taskComponent.props.onUserReport
                    : void 0,
                getReviewChanges:
                  this.taskComponent && this.taskComponent.getReviewChanges
                    ? this.taskComponent.getReviewChanges
                    : void 0,
                reRunLinter: this.rerunLinter,
                projectConfig: this.props.projectConfig,
              });
        }
        render() {
          var e, t;
          const {
              corruptionAccuracy: s,
              improvedAccuracyCorruptionTypes: n,
              lowAccuracyCorruptionTypes: r,
              postReviewSubmission: a,
            } = (null === (e = this.props.claim) || void 0 === e
              ? void 0
              : e.corruptionFeedback) || {},
            l = window.location.pathname.startsWith("/quester");
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(bt.Z, {
                taskTimer:
                  null === (t = this.taskComponent) || void 0 === t
                    ? void 0
                    : t.taskTimer,
                openModal:
                  void 0 !== this.state.showModal && this.state.showModal,
                subtask: this.props.assignment._id,
                onClose: () => this.setShowModal(!1),
                setSubmit: this.updateInstructionFeedbackExists,
                labels: [],
                isScaleStudio: this.props.isScaleStudio,
                feedbackRequired: !0,
              }),
              this.state.showEdgeCaseModal &&
                (0, i.jsx)(yt.Z, {
                  openModal: this.state.showEdgeCaseModal,
                  shadowSubtask: this.props.assignment._id,
                  onClose: () => this.setShowEdgeCaseModal(!1),
                  setSubmit: () => this.setEdgeCaseFeedbackRead(!0),
                }),
              (0, i.jsxs)("div", {
                className:
                  o().dynamic([
                    [
                      "5189d4e508bc11d2",
                      [O.IS_FEDERAL ? "96vh" : l ? "100%" : "100vh"],
                    ],
                  ]) + " review-assignment__container",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      o().dynamic([
                        [
                          "5189d4e508bc11d2",
                          [O.IS_FEDERAL ? "96vh" : l ? "100%" : "100vh"],
                        ],
                      ]) + " review-assignment__top",
                    children: this.renderHeader(),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      o().dynamic([
                        [
                          "5189d4e508bc11d2",
                          [O.IS_FEDERAL ? "96vh" : l ? "100%" : "100vh"],
                        ],
                      ]) + " review-assignment__main",
                    children: this.renderTask(),
                  }),
                  !this.props.hideFooter &&
                    (0, i.jsx)("div", {
                      className:
                        o().dynamic([
                          [
                            "5189d4e508bc11d2",
                            [O.IS_FEDERAL ? "96vh" : l ? "100%" : "100vh"],
                          ],
                        ]) + " review-assignment__bottom",
                      children: this.renderFooter({
                        lowAccuracyCorruptionTypes: a ? r : void 0,
                        improvedAccuracyCorruptionTypes: a ? n : void 0,
                        corruptionAccuracy: a ? s : void 0,
                      }),
                    }),
                  (0, i.jsxs)("div", {
                    className:
                      o().dynamic([
                        [
                          "5189d4e508bc11d2",
                          [O.IS_FEDERAL ? "96vh" : l ? "100%" : "100vh"],
                        ],
                      ]) + " review-assignment__hidden",
                    children: [this.props.children, (0, i.jsx)(Ie(), {})],
                  }),
                  (0, i.jsx)(o(), {
                    id: "5189d4e508bc11d2",
                    dynamic: [O.IS_FEDERAL ? "96vh" : l ? "100%" : "100vh"],
                    children: `.review-assignment__container.__jsx-style-dynamic-selector{height:${
                      O.IS_FEDERAL ? "96vh" : l ? "100%" : "100vh"
                    };display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.review-assignment__top.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.review-assignment__main.__jsx-style-dynamic-selector{min-height:0;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.review-assignment__bottom.__jsx-style-dynamic-selector{height:70px;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}`,
                  }),
                ],
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.makeChanges = () => {
              var e, t;
              this.setState({ makingChanges: !0 }),
                null === (t = (e = this.props).onMakingChanges) ||
                  void 0 === t ||
                  t.call(e, !0);
            }),
            (this.resetMakingChanges = () => {
              var e, t, s;
              this.setState({ makingChanges: !1, madeChanges: !1 }),
                null === (t = (e = this.props).onMakingChanges) ||
                  void 0 === t ||
                  t.call(e, !1),
                null === (s = this.taskComponent) ||
                  void 0 === s ||
                  s.discardChanges();
            });
          var t = this;
          (this.rejectWithChanges = jt(function* () {
            const e = yield t.taskComponent.getReviewChanges(),
              s = l().includes(
                [I.TaskType.LidarAnnotation, I.TaskType.LidarSegmentation],
                t.props.assignment.type
              ),
              i = t.taskComponent.getReviewSubmitConfirmationMessage(!1, !0);
            if (i && !window.confirm(i)) return Promise.reject();
            t.taskComponent.props.setTimeSpent(),
              yield t.setStateAsync({
                isSubmitting: !0,
                submittedResponse: !1,
              }),
              u().closeAll();
            try {
              yield t.props.submit({
                isCorrect: !1,
                populateHypothesis: !s,
                reviewChanges: e,
                trueReviewOutcome: C.TaskReviewOutcome.Rejected,
                timeSpentSecs: t.taskComponent.taskTimer.elapsedTime() / 1e3,
                oldTimeSpentSecs:
                  t.taskComponent.taskOldTimer.elapsedTime() / 1e3,
                timeSpentLoadingSecs:
                  (t.assignmentLoadTime.getTime() -
                    t.assignmentStartTime.getTime()) /
                  1e3,
                comments: t.feedbackComments,
                fullstorySession: t.fullstorySession,
                auditResult: t.state.auditResult,
                taskFeedback: t.state.taskFeedback,
                documentRotation: t.taskComponent.documentRotation,
                documentRotationPerPage:
                  t.taskComponent.documentRotationPerPage,
              });
            } catch (n) {
              throw (t.handleSubmitError(n), n);
            }
          })),
            (this.submitForZooxSteamCategorization = l().memoize((e) => {
              var t = this;
              return jt(function* () {
                var s, i;
                (t.categorizationResult = e),
                  yield t.submit(!0)(),
                  null === (i = (s = t.props).nextTask) ||
                    void 0 === i ||
                    i.call(s);
              });
            }));
          var s = this;
          (this.returnToQueue = jt(function* () {
            var e;
            const t = l().includes(
                [I.TaskType.LidarAnnotation, I.TaskType.LidarSegmentation],
                s.props.assignment.type
              ),
              i = s.taskComponent.getReviewSubmitConfirmationMessage(!1, !0);
            if (i && !window.confirm(i)) return Promise.reject();
            s.taskComponent.props.setTimeSpent(),
              yield s.setStateAsync({
                isSubmitting: !0,
                submittedResponse: !1,
              }),
              u().closeAll();
            const n = l().get(s.props, "isScaleStudio", !1)
              ? null === (e = s.taskComponent.getReviewChanges()) ||
                void 0 === e
                ? void 0
                : e.inlineComments
              : void 0;
            try {
              yield s.props.submit({
                isCorrect: !1,
                populateHypothesis: !t,
                reviewChanges: void 0,
                reviewInlineComments: n,
                timeSpentSecs: s.taskComponent.taskTimer.elapsedTime() / 1e3,
                oldTimeSpentSecs:
                  s.taskComponent.taskOldTimer.elapsedTime() / 1e3,
                timeSpentLoadingSecs:
                  (s.assignmentLoadTime.getTime() -
                    s.assignmentStartTime.getTime()) /
                  1e3,
                comments: s.feedbackComments,
                fullstorySession: s.fullstorySession,
                auditResult: s.state.auditResult,
                taskFeedback: s.state.taskFeedback,
                documentRotation: s.taskComponent.documentRotation,
                documentRotationPerPage:
                  s.taskComponent.documentRotationPerPage,
              });
            } catch (o) {
              throw (s.handleSubmitError(o), o);
            }
          })),
            (this.toggleShowingErrors = () => {
              this.setState({ showingErrors: !this.state.showingErrors });
            }),
            (this.handleCommentsChange = (e) => {
              this.setState({ commentsInput: e });
            }),
            (this.setTaskFeedback = (e, t) => {
              this.setState({ taskFeedback: e }, t);
            }),
            (this.setAuditFeedback = (e) => {
              this.setState({ auditFeedback: e });
            });
          var i = this;
          this.triggerAutosave = jt(function* () {
            var e;
            i.setState({ isAutosaving: !0 }),
              (null === (e = i.taskComponent) || void 0 === e
                ? void 0
                : e.triggerAutosave) &&
                (yield i.taskComponent.triggerAutosave()),
              i.setState({ isAutosaving: !1 });
          });
          var n = this;
          (this.rerunLinter = jt(function* () {
            var e;
            const t =
              n.props.fixable && n.state.madeChanges && n.taskComponent
                ? yield n.taskComponent.getReviewChanges()
                : null !== (e = n.props.assignment.fixResponse) && void 0 !== e
                ? e
                : n.props.fixResponse;
            return n.checkLintErrors({ taskResponse: t });
          })),
            (this.dismissAllLintErrors = () => {
              const e = this.state.lintErrors.map((e) =>
                e.data.blocksSubmission ? e : St({}, e, { dismissed: !0 })
              );
              this.setState({ lintErrors: e });
            }),
            (this.setShowModal = (e) => {
              this.setState({ showModal: e });
            }),
            (this.updateInstructionFeedbackExists = () => {
              this.setState({ instructionFeedbackRead: !0 });
            }),
            (this.setEdgeCaseFeedbackRead = (e) => {
              this.setState({ edgeCaseFeedbackRead: e });
            }),
            (this.setShowEdgeCaseModal = (e) => {
              this.setState({ showEdgeCaseModal: e });
            }),
            (this.onTaskComponentLinterExecution = (e) => {
              const t = [];
              for (const s of e) {
                const e = this.state.lintErrors.find((e) => e.id === s.id);
                e
                  ? t.push(St({}, s, { dismissed: e.dismissed }))
                  : t.push(St({}, s));
              }
              this.setState({ lintErrors: t });
            }),
            (0, Re.Z)(
              this,
              "assignmentDidLoad",
              "submit",
              "discardChanges",
              "onChange",
              "onChangeHideOriginal",
              "handleErrorCountsChange",
              "handleToggleErrorDismissed",
              "handleAuditResultChange",
              "updateFullstory",
              "onUpdateCorruptionFeedback",
              "toggleCorruptionsAudit",
              "setShowModal",
              "setShowEdgeCaseModal",
              "updateInstructionFeedbackExists"
            ),
            (this.state = {
              errorCounts: {
                criticalCount: 0,
                missingCount: 0,
                nonCriticalCount: 0,
              },
              hideOriginalAnnotation: !1,
              isAssignmentLoading: !1,
              isAutosaving: !1,
              isSubmitting: !1,
              madeChanges: !1,
              showingCorruptionsAudit: !1,
              showingErrors: !1,
              lintErrors: [],
              showModal: !1,
              instructionFeedbackRead: !1,
            }),
            setInterval(() => {
              this.forceUpdate();
            }, 3e4);
        }
      }
      var Rt = s(791257),
        Pt = s(135431),
        At = s(66091),
        Et = s(690845),
        Ot = s(160337),
        Nt = s(876116),
        Lt = s(257881),
        _t = s(773851);
      function Ft() {
        return null != window.electronBridge;
      }
      var Dt = s(563247),
        Mt = s(271682),
        Zt = s(433310),
        zt = s(59524),
        Bt = s(824385),
        Ut = s(821095),
        Ht = s(13848),
        qt = s(948925),
        $t = s(68649);
      function Vt(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      const Qt = (0, $t.ZL)((e) => ({
          container: { padding: e.spacing(2), width: 600, margin: "0 auto" },
          title: { marginBottom: e.spacing(2), display: "block" },
          subtaskItem: { padding: e.spacing(2), marginBottom: e.spacing(2) },
        })),
        Wt = (e, t = !1) => (t ? e : e.params);
      var Gt = (e) => {
          var { isAudit: t, subtasks: s } = e,
            n = Vt(e, ["isAudit", "subtasks"]);
          const o = Qt();
          return (0, i.jsxs)("div", {
            className: o.container,
            children: [
              (0, i.jsx)(Q.H1, {
                className: o.title,
                children: "Tasks for review",
              }),
              s.map((e) => {
                const { frameWindow: s, index: r } = Wt(e, t),
                  { start: a, end: c } = s;
                return (0, i.jsxs)(
                  Q.Xk,
                  {
                    className: o.subtaskItem,
                    children: [
                      (0, i.jsxs)(Q.H3, {
                        children: ["Task from ", a + 1, " to", " ", c],
                      }),
                      t &&
                        (0, i.jsx)("p", {
                          children: (0, i.jsxs)(Q.xv, {
                            children: [
                              "Status: ",
                              l().startCase(e.customerReviewStatus),
                            ],
                          }),
                        }),
                      (0, i.jsxs)(Q.Av, {
                        type: "primary",
                        href: t
                          ? `/audit?taskId=${n.taskId}&index=${r}`
                          : `/tasks?subtaskId=${e._id}&index=${r}`,
                        target: t ? "_self" : "_blank",
                        children: [t ? "Audit" : "Review", " task"],
                      }),
                    ],
                  },
                  r
                );
              }),
            ],
          });
        },
        Jt = s(952332),
        Yt = s(416534);
      const Kt = () =>
        (0, i.jsx)("div", {
          className: "flex flex-col items-center justify-center h-screen",
          children: (0, i.jsxs)("div", {
            className:
              "p-4 rounded-lg shadow-sm bg-neutral-0/50 backdrop-blur-lg min-w-fit border border-neutral-200",
            children: [
              (0, i.jsx)("div", {
                children: (0, i.jsx)(Jt.M, {
                  title: "Task Unavailable",
                  description:
                    "Apologies, this task is no longer available to you. Please continue to the next task if one is available.",
                  className: "border-b border-gray-200 pb-2",
                }),
              }),
              (0, i.jsx)("div", {
                className: "flex items-start justify-start mt-2 md:mt-0",
                children: (0, i.jsx)(Yt.zx, {
                  onClick: () => {
                    window.location.reload();
                  },
                  children: "Continue",
                }),
              }),
            ],
          }),
        });
      Kt.displayName = "InvalidClaim";
      var Xt = Kt,
        es = s(220373),
        ts = s(761114),
        ss = s(746188),
        is = s(775143);
      function ns(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function os(e, t, s) {
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
      function rs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              os(e, t, s[t]);
            });
        }
        return e;
      }
      const as = (0, es.Z)({
          verificationPage: {
            height: "100%",
            width: "100vw",
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "var(--color-RemoGray01)",
          },
          verificationContainer: {
            width: "80vw",
            maxWidth: "1080px",
            padding: "64px 0",
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: {
              padding: 0,
              width: "100vw",
              height: "100vh",
            },
          },
          verificationContainerResponsive: {
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: {
              height: "100%",
              padding: "32px",
              width: "100%",
            },
          },
          verificationCard: {
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
            borderRadius: "var(--border-radius)",
            background: "white",
            overflow: "hidden",
          },
          verificationCardResponsive: {
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: {
              height: "100%",
              overflow: "scroll",
            },
          },
          verificationWrapperResponsive: {
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: { height: "100%" },
          },
        }),
        ls = (0, es.Z)({
          verificationHeader: {
            marginBottom: "32px",
            paddingInlineStart: "32px",
          },
          verificationHeaderResponsive: {
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: { display: "none" },
          },
          logo: { width: "120px", display: "inline-block" },
        }),
        cs = (e) =>
          (0, i.jsxs)("div", {
            className: "jsx-3ebabb9c53cf3a18 verification-title",
            children: [
              (0, i.jsx)("em", {
                className: "jsx-3ebabb9c53cf3a18",
                children: e.displayType,
              }),
              (0, i.jsx)("strong", {
                className: "jsx-3ebabb9c53cf3a18",
                children: e.title,
              }),
              (0, i.jsx)(o(), {
                id: "3ebabb9c53cf3a18",
                children:
                  ".verification-title.jsx-3ebabb9c53cf3a18{margin-bottom:32px}.verification-title.jsx-3ebabb9c53cf3a18 em.jsx-3ebabb9c53cf3a18{display:block;margin-bottom:4px;font-style:normal;font-weight:bold;font-size:14px;text-transform:uppercase;letter-spacing:1px;opacity:.5}.verification-title.jsx-3ebabb9c53cf3a18 strong.jsx-3ebabb9c53cf3a18{display:block;font-size:24px;font-weight:normal}",
              }),
            ],
          }),
        ds = (0, es.Z)({
          verificationFooter: {
            marginTop: "32px",
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: {
              marginTop: 0,
              background: "var(--color-RemoGray01)",
              position: "absolute",
              bottom: 0,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 16,
            },
          },
          continue: {
            borderTop: "1px dashed var(--color-RemoGray01)",
            height: "120px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: 16,
            padding: "0 32px",
          },
          continueResponsive: {
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: {
              height: "initial",
              width: "100%",
              padding: 0,
            },
          },
          actions: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: 16,
            alignItems: "center",
            marginBottom: 16,
            padding: "0 32px",
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: { padding: 0 },
          },
        }),
        us = (e) => {
          const t = ds();
          return (0, i.jsxs)("div", {
            className: t.verificationFooter,
            children: [
              e.sectionActions &&
                (0, i.jsxs)("div", {
                  className: t.actions,
                  children: [e.sectionActions, e.sectionMessage],
                }),
              (0, i.jsxs)("div", {
                className: Le()(t.continue, {
                  [t.continueResponsive]: e.responsive,
                }),
                children: [
                  (0, i.jsx)("div", {}),
                  (0, i.jsx)(Ue.zx, {
                    style: { width: "100%" },
                    type: "primary",
                    onClick:
                      ((s = function* () {
                        yield (0, is.fetchApi)("/fraud/complete_verification", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: {},
                        }),
                          e.handleContinue();
                      }),
                      function () {
                        var e = this,
                          t = arguments;
                        return new Promise(function (i, n) {
                          var o = s.apply(e, t);
                          function r(e) {
                            ns(o, i, n, r, a, "next", e);
                          }
                          function a(e) {
                            ns(o, i, n, r, a, "throw", e);
                          }
                          r(void 0);
                        });
                      }),
                    disabled: !e.canContinue || e.isLoading,
                    children: "Continue",
                  }),
                ],
              }),
            ],
          });
          var s;
        },
        ps = {
          verificationSectionResponsive: {
            [`@media (max-width: ${j.MOBILE_THRESHOLD})`]: {
              height: "calc(100vh - 87px)",
              overflowY: "scroll",
              marginBottom: 112,
            },
          },
          verificationSectionMain: { padding: "32px" },
        },
        ms = (0, Q.D2)(ps)((e) =>
          (0, i.jsxs)("div", {
            className: Le()({
              [e.classes.verificationSectionResponsive]: e.responsive,
            }),
            children: [
              (0, i.jsxs)("div", {
                className: e.classes.verificationSectionMain,
                children: [
                  (0, i.jsx)(cs, {
                    displayType: e.displayType,
                    title: e.title,
                  }),
                  e.content,
                ],
              }),
              (0, i.jsx)(us, rs({}, e)),
            ],
          })
        ),
        hs = (e) => {
          const t = ls();
          return (0, i.jsx)("div", {
            className: Le()(t.verificationHeader, {
              [t.verificationHeaderResponsive]: e.responsive,
            }),
            children: (0, i.jsx)(x.ZP, {
              href: "/dashboard",
              children: (0, i.jsx)("a", {
                children: (0, i.jsx)("div", {
                  className: t.logo,
                  children: (0, i.jsx)(ss.Z, { fill: "black" }),
                }),
              }),
            }),
          });
        },
        gs = (0, ts.sw)(ms);
      var fs,
        bs =
          ((fs = (e) => {
            const t = as();
            return (0, i.jsx)("div", {
              className: t.verificationPage,
              children: (0, i.jsxs)("div", {
                className: t.verificationContainer,
                children: [
                  (0, i.jsx)(hs, { responsive: e.mobile }),
                  (0, i.jsx)("div", {
                    className: Le()(t.verificationCard, {
                      [t.verificationCardResponsive]: e.mobile,
                    }),
                    children: (0, i.jsx)(gs, rs({}, e)),
                  }),
                ],
              }),
            });
          }),
          (e) => {
            const t = (0, S.Z)(`(max-width: ${j.MOBILE_THRESHOLD})`);
            return (0, i.jsx)(fs, rs({ mobile: t }, e));
          }),
        xs = s(460327),
        vs = s(236609),
        ys = s(98283),
        ks = s(169047);
      function js(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function ws(e, t, s) {
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
      function Ss(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              ws(e, t, s[t]);
            });
        }
        return e;
      }
      function Ts(e = "") {
        return (0, i.jsx)("div", {
          className: "ql-editor",
          dangerouslySetInnerHTML: { __html: L.ZP.render(e) },
        });
      }
      const Cs = (e) =>
          (0, i.jsxs)("div", {
            className: "course-title",
            children: [
              (0, i.jsx)("em", {
                className:
                  "block mb-4 text-base font-bold tracking-wide uppercase",
                children: e.displayType,
              }),
              (0, i.jsx)("strong", { className: "text-lg", children: e.title }),
            ],
          }),
        Is = ({ description: e }) =>
          e ? (0, i.jsx)("div", { children: Ts(e) }) : null,
        Rs = (e) => {
          const t = (0, ks.Z)();
          return (0, i.jsxs)("div", {
            children: [
              e.sectionActions &&
                (0, i.jsxs)("div", {
                  className: "flex",
                  children: [e.sectionActions, e.sectionMessage],
                }),
              (0, i.jsx)("div", {
                className:
                  "fixed bottom-0 left-0 flex justify-between w-full h-16 px-10 p-3 shadow-lg bg-neutral-0 shadow-neutral-600",
                children: (0, i.jsx)(Yt.zx, {
                  variant: "primary",
                  className: "w-24 justify-center",
                  onClick:
                    ((s = function* () {
                      yield (0, is.fetchApi)("/fraud/complete_verification", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: {},
                      }),
                        t.verificationredirect && e.canContinue
                          ? (0, ys.ZP)({}, t.verificationredirect)
                          : yield e.handleContinue();
                    }),
                    function () {
                      var e = this,
                        t = arguments;
                      return new Promise(function (i, n) {
                        var o = s.apply(e, t);
                        function r(e) {
                          js(o, i, n, r, a, "next", e);
                        }
                        function a(e) {
                          js(o, i, n, r, a, "throw", e);
                        }
                        r(void 0);
                      });
                    }),
                  disabled: !e.canContinue || e.isLoading,
                  style: { position: "fixed", right: "30px" },
                  children: "Continue",
                }),
              }),
            ],
          });
          var s;
        },
        Ps = (0, xs.sw)((e) =>
          (0, i.jsxs)("div", {
            className: "my-7",
            children: [
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)(Cs, {
                    displayType: e.displayType,
                    title: e.title,
                  }),
                  (0, i.jsx)(Is, { description: e.contents.description }),
                  e.content,
                ],
              }),
              (0, i.jsx)(Rs, Ss({}, e)),
            ],
          })
        ),
        As = (e) =>
          (0, i.jsx)("div", {
            children: (0, i.jsx)("div", {
              className:
                "scaleui outlier-theme w-[80vw] max-w-[1080px] m-auto pb-10",
              children: (0, i.jsx)("div", {
                children: (0, i.jsx)(Ps, Ss({}, e)),
              }),
            }),
          });
      var Es = (e) =>
          (0, i.jsx)(vs.Z, {
            user: e.user,
            children: (0, i.jsx)(As, Ss({}, e)),
          }),
        Os = s(179087),
        Ns = s(492071),
        Ls = s(628746),
        _s = s(722324),
        Fs = s(543885),
        Ds = s(430153);
      const Ms = ({ user: e }) => {
        const { isLoading: t, data: s } = (0, T._z)(
            "outlier-marketplace",
            { userId: e.id },
            !1
          ),
          n = (0, Fs.wL)();
        s &&
          n.warn("Marketplace User Hits Empty Queue", {
            assignedProjectLayers: e.assignedProjectLayers,
            chosenProjectLayer: e.chosenProjectLayer,
            lastEQEvent: e.lastEmptyQueueEvent,
          });
        const o = `${Ds.ZA}/dashboard`;
        return (0, i.jsxs)("div", {
          className: "flex flex-col items-center justify-center gap-4",
          children: [
            (0, i.jsx)(Ns.Z, {}),
            (0, i.jsx)("div", {
              className: "text-lg font-medium text-slate-600",
              children: "Your task queue is currently empty",
            }),
            (0, i.jsx)("div", {
              className: "text-neutral-800 w-1/2 text-center",
              children: (0, Ls.s7)(e)
                ? "Make sure you have a valid payment method set up to begin tasking."
                : (0, i.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      (0, i.jsx)("div", {
                        children:
                          "Hang tight, we are looking for tasks that are a good fit for you. We will notify you as soon as new tasks are available.",
                      }),
                      (0, i.jsx)("div", {
                        children: "Please check back again later.",
                      }),
                    ],
                  }),
            }),
            (0, i.jsxs)("div", {
              className: "flex gap-4",
              children: [
                t
                  ? null
                  : s
                  ? (0, i.jsx)(Yt.zx, {
                      variant: "neutral",
                      onClick: () => window.location.replace(o),
                      children: "Back to home",
                    })
                  : (0, i.jsx)(x.ZP, {
                      href: "/expert/",
                      children: (0, i.jsx)(Yt.zx, {
                        variant: "neutral",
                        children: "Back to Home",
                      }),
                    }),
                (0, i.jsx)(_s.s, { user: e }),
              ],
            }),
          ],
        });
      };
      var Zs = ({ corpExplainPath: e }) =>
          (0, i.jsxs)("div", {
            className: "fullscreen-card--container",
            children: [
              (0, i.jsxs)("div", {
                className: "fullscreen-card",
                style: { boxShadow: "none" },
                children: [
                  (0, i.jsx)("svg", {
                    width: "10vh",
                    height: "10vh",
                    viewBox: "0 0 111 99",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, i.jsx)("path", {
                      d: "M3.4677 57.0375C0.637492 52.2479 0.637492 46.3698 3.4677 41.3625L22.626 8.27082C25.4562 3.26353 30.6812 0.433321 36.124 0.433321H74.6583C80.3188 0.433321 85.326 3.26353 88.1563 8.27082L107.315 41.3625C110.145 46.3698 110.145 52.2479 107.315 57.0375L88.1563 90.3469C85.326 95.3542 80.3188 98.1844 74.6583 98.1844H36.124C30.6812 98.1844 25.4562 95.3542 22.626 90.3469L3.4677 57.0375ZM55.5 21.3333C52.4521 21.3333 50.275 23.7281 50.275 26.5583V50.9417C50.275 53.9896 52.4521 56.1667 55.5 56.1667C58.3302 56.1667 60.725 53.9896 60.725 50.9417V26.5583C60.725 23.7281 58.3302 21.3333 55.5 21.3333ZM62.4667 70.1C62.4667 66.399 59.201 63.1333 55.5 63.1333C51.5812 63.1333 48.5333 66.399 48.5333 70.1C48.5333 74.0187 51.5812 77.0667 55.5 77.0667C59.201 77.0667 62.4667 74.0187 62.4667 70.1Z",
                      fill: "#29CD9C",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    id: "tax-block-reason",
                    children:
                      "You are blocked from tasking until you provide your tax forms in your account center.",
                  }),
                  (0, i.jsx)("div", {
                    className: "tax-unblock-instructions",
                    children:
                      "Once you've done so, come back and refresh this page.",
                  }),
                  (0, i.jsx)(x.ZP, {
                    href: "/account",
                    children: (0, i.jsx)(Q.zx, {
                      id: "tax-center-account-button",
                      variant: "contained",
                      children: "Go to Account Center",
                    }),
                  }),
                  e &&
                    (0, i.jsxs)("div", {
                      className: "tax-unblock-instructions",
                      children: [
                        "Were you expecting a task? Try using ",
                        (0, i.jsx)(x.ZP, { href: e, children: "Corp Explain" }),
                      ],
                    }),
                ],
              }),
              (0, i.jsx)("style", {
                children:
                  "\n        .fullscreen-card--container {\n          height: 100%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n\n        .fullscreen-card {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          height: 100%;\n          background: white;\n        }\n        \n        #tax-block-reason {\n          width: 60%;\n          font-style: normal;\n          font-weight: 500;\n          font-size: 1.25vw;\n          line-height: 150%;\n          text-align: center;\n          color: #374151;\n          margin-top: 2rem;\n          margin-bottom: 1rem;\n        }\n\n        #tax-center-account-button {\n          background-color: rgb(43, 153, 216);\n          color: white;\n          width: 60%;\n          padding-top: 1.5rem !important;\n          padding-bottom: 1.5rem !important;\n          margin-bottom: 1rem;\n        }\n\n        #tax-center-account-button span {\n          font-size: medium !important;\n        }\n\n        .tax-unblock-instructions {\n          font-style: normal;\n          font-weight: 400;\n          font-size: 0.8vw;\n          line-height: 150%;\n          text-align: center;\n          margin-bottom: 1rem;\n        }\n      ",
              }),
            ],
          }),
        zs = s(658178),
        Bs = s(776845);
      const Us = ({
        payText: e,
        actions: t,
        query: s,
        isInQATeam: n,
        setIsExitingTask: o,
      }) => {
        const r = (0, c.useRouter)();
        return (0, i.jsx)("div", {
          className: "flex items-center justify-center h-[100%]",
          children: (0, i.jsxs)("div", {
            className: "flex flex-col gap-4 items-center p-4 relative",
            style: { padding: "2rem" },
            children: [
              (0, i.jsx)("img", {
                className: "w-auto h-[120px] pl-8",
                src: "/static/img/outlier/3d-flag.svg",
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-2 w-[500px] items-center",
                children: [
                  (0, i.jsx)("div", {
                    className: "my-[12px]",
                    children: (0, i.jsx)(Bs.ZT.H3, {
                      className: "text-back",
                      children: "Task unavailable",
                    }),
                  }),
                  (0, i.jsx)(Bs.ZT.Paragraph1, {
                    className: "text-neutral-500 text-center",
                    children:
                      "Apologies, this task is no longer available to you due to a technical problem or a task allocation issue. You will be paid in full for the time you spent on this task.",
                  }),
                  (0, i.jsx)("div", {
                    className: "border-t-[1px] border-neutral-300 w-[100%]",
                  }),
                ],
              }),
              e
                ? (0, i.jsxs)("div", {
                    className:
                      "flex flex-col align-center justify-center gap-4 w-[100%] ",
                    children: [
                      e.map((e, t) =>
                        0 === t
                          ? (0, i.jsx)(
                              Bs.ZT.H5,
                              {
                                className: "text-black text-center",
                                children: e,
                              },
                              t
                            )
                          : (0, i.jsx)(
                              Bs.ZT.Paragraph1,
                              {
                                className: "text-black text-center",
                                children: e,
                              },
                              t
                            )
                      ),
                      (0, i.jsx)("div", {
                        className: "border-t-[1px] border-neutral-300 w-[100%]",
                      }),
                    ],
                  })
                : null,
              (0, i.jsx)("div", {
                className: "mb-4 w-[600px]",
                children: (0, i.jsx)(Bs.ZT.Paragraph1, {
                  className: "text-neutral-500 text-center",
                  children:
                    "It may take a few minutes for your pay to reflect in the earnings tab",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex gap-2",
                children: [
                  (0, i.jsx)(Yt.zx, {
                    className: "w-[160px] justify-center",
                    variant: "neutral",
                    size: "lg",
                    onClick: () => {
                      r.push("/en/expert");
                    },
                    children: (0, i.jsx)(Bs.ZT.Paragraph3, {
                      children: "Return to dashboard",
                    }),
                  }),
                  (0, i.jsx)(Yt.zx, {
                    className: "w-[160px] justify-center",
                    variant: "primary",
                    size: "lg",
                    onClick: () => {
                      null === t || void 0 === t || t.confirmReadyForNextTask(),
                        null === t || void 0 === t || t.nextTask(s, n),
                        o(!1);
                    },
                    children: (0, i.jsx)(Bs.ZT.Paragraph3, {
                      className: "text-secondary-600",
                      children: "Continue tasking",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      Us.displayName = "IncompleteTaskAttempt";
      var Hs = Us;
      const qs = ({ user: e }) => {
        const { isLoading: t, data: s } = (0, T._z)(
            "outlier-marketplace",
            { userId: e.id },
            !1
          ),
          n = `${Ds.ZA}/dashboard`;
        return (0, i.jsxs)("div", {
          className: "flex flex-col items-center justify-center gap-4",
          children: [
            (0, i.jsx)(Ns.Z, {}),
            (0, i.jsx)("div", {
              className: "text-lg font-medium text-slate-600",
              children:
                "Hang on! There are some more things you need to complete",
            }),
            (0, i.jsx)("div", {
              className: "text-neutral-800 w-1/2 text-center space-y-4 py-2",
              children:
                "There are some remaining requirements you must complete before you can work on tasks.",
            }),
            (0, i.jsx)("div", {
              className: "flex gap-4",
              children: t
                ? null
                : s
                ? (0, i.jsx)(Yt.zx, {
                    variant: "neutral",
                    onClick: () => window.location.replace(n),
                    children: "Go to dashboard",
                  })
                : (0, i.jsx)(x.ZP, {
                    href: "/expert/",
                    children: (0, i.jsx)(Yt.zx, {
                      variant: "neutral",
                      children: "Back to Home",
                    }),
                  }),
            }),
          ],
        });
      };
      var $s = s(551620),
        Vs = s(61714),
        Qs = s(127061);
      function Ws(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function Gs(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              Ws(o, i, n, r, a, "next", e);
            }
            function a(e) {
              Ws(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function Js(e, t, s) {
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
      function Ys(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              Js(e, t, s[t]);
            });
        }
        return e;
      }
      const Ks = (e, t) => !e || !t || e === t;
      class Xs extends r.Component {
        fetchShowNewInstructionFlag() {
          var e = this;
          return Gs(function* () {
            const t = yield (0, N.V3)({ feature: "instruction-render-v2" }),
              s = e.props.assignments[0] || {},
              i = e.getProjectIdFromAssignment(s);
            if (t && i)
              try {
                const t = yield Lt.Z.selfserve.getProjectInstructionStatus(
                  i,
                  s.id
                );
                if (
                  t.ok &&
                  t.instruction &&
                  t.instruction.components &&
                  t.instruction.components.length > 0
                ) {
                  const { shouldUseNGI: s } = t;
                  if (s)
                    return (
                      e.setState({ instructionV2Res: t }),
                      void e.setState({ isFetching: !1 })
                    );
                }
              } catch (n) {
                Zt.Z.warn(`project ${i} new instruction not found`);
              }
            e.setState({ isFetching: !1 }),
              e.setState({ instructionV2Res: {} });
          })();
        }
        fetchCanForceSkipInstructions() {
          var e = this;
          return Gs(function* () {
            const t = e.props.assignments[0] || {},
              s = e.getProjectIdFromAssignment(t),
              { isInitialBenchmark: i } = t,
              n = yield (0, N.V3)({
                feature: "force-skip-instructions-by-project",
                querystring: p.stringify({ projectId: s }),
              });
            e.setState({ forceSkipInstructions: n && i }),
              e.setState({ isFetchingForceSkipInstructions: !1 });
          })();
        }
        fetchIsMarketplaceUser() {
          var e = this;
          return Gs(function* () {
            const t = yield (0, N.V3)({
              feature: "outlier-marketplace",
              querystring: p.stringify({ userId: e.props.user.id }),
            });
            e.setState({ isMarketplaceUser: t }),
              e.setState({ isFetchingMarketplaceUser: !1 });
          })();
        }
        fetchShouldLogBrowserEvents() {
          var e = this;
          return Gs(function* () {
            const t = e.props.assignments[0] || {},
              s = e.getProjectIdFromAssignment(t),
              i = yield (0, N.V3)({
                feature: "frontend-browser-event-logging",
                querystring: p.stringify({ projectId: s }),
              });
            e.setState({ shouldLogBrowserEvents: i }, () => {
              "wasDiscarded" in document &&
                document.wasDiscarded &&
                e.logEventAction("refreshing from discard");
            }),
              e.setState({ isFetchingShouldLogBrowserEvents: !1 });
          })();
        }
        logEventAction(e) {
          var t;
          const s = this.getCurrentAssignments()[0],
            i = null === (t = this.props.user) || void 0 === t ? void 0 : t.id;
          this.state.shouldLogBrowserEvents &&
            ("visibilitychange" === e
              ? "hidden" === document.visibilityState
                ? Zt.Z.info(
                    `User ${i} is backgrounding the page for assignment ${
                      null === s || void 0 === s ? void 0 : s._id
                    }`
                  )
                : "visible" === document.visibilityState &&
                  Zt.Z.info(
                    `User ${i} is foregrounding the page for assignment ${
                      null === s || void 0 === s ? void 0 : s._id
                    }`
                  )
              : Zt.Z.info(
                  `User ${i} is ${e} the page for assignment ${
                    null === s || void 0 === s ? void 0 : s._id
                  }`
                ));
        }
        componentDidMount() {
          this.setState({
            fetchedCanReturnToQueue: !1,
            fetchingCanReturnToQueue: !1,
          }),
            this.setupContexts(),
            (this.boundLogEventActionUnload = this.logEventAction.bind(
              this,
              "unloading"
            )),
            (this.boundLogEventActionVisibilityChange =
              this.logEventAction.bind(this, "visibilitychange")),
            this.boundLogEventActionUnload &&
              this.boundLogEventActionVisibilityChange &&
              (window.addEventListener(
                "beforeunload",
                this.boundLogEventActionUnload
              ),
              document.addEventListener(
                "visibilitychange",
                this.boundLogEventActionVisibilityChange
              )),
            this.fetchTimerFlags();
        }
        componentWillUnmount() {
          zt.Ep(),
            R.c.clearContext(),
            this.boundLogEventActionUnload &&
              this.boundLogEventActionVisibilityChange &&
              (window.removeEventListener(
                "beforeunload",
                this.boundLogEventActionUnload
              ),
              document.removeEventListener(
                "visibilitychange",
                this.boundLogEventActionVisibilityChange
              ));
        }
        UNSAFE_componentWillUpdate(e) {
          2 === this.props.assignments.length &&
            l().get(e.assignments, "0._id") !==
              l().get(this.props.assignments, "0._id") &&
            this.props.onAssignmentFinished &&
            this.props.onAssignmentFinished(),
            this.props.batch.status !== Dt.ENDED &&
              e.batch.status === Dt.ENDED &&
              this.props.onAssignmentFinished &&
              this.props.onAssignmentFinished(),
            this.props.assignments.length &&
              this.state.lastAssignments.length &&
              this.props.assignments[0].id !==
                this.state.lastAssignments[0].id &&
              this.setState({ isNewAssignment: !0 });
        }
        componentDidUpdate() {
          if (
            (this.state.alerting ||
              this.state.completedEditLockCheck ||
              !1 !== this.props.batch.currentPageHasEditLock ||
              this.setState({ completedEditLockCheck: !0 }),
            this.props.assignments && this.props.assignments.length)
          ) {
            const e = this.props.assignments[0];
            this.state.lastAssignments.length
              ? e.id !== this.state.lastAssignments[0].id &&
                this.setState(({ lastAssignments: t }) => ({
                  lastAssignments: [e, ...t].slice(0, 2),
                }))
              : this.setState({ lastAssignments: [e] }),
              this.state.instructionV2Res ||
                this.state.isFetching ||
                (this.setState({ isFetching: !0 }),
                this.fetchShowNewInstructionFlag()),
              l().isNil(this.state.forceSkipInstructions) &&
                !this.state.isFetchingForceSkipInstructions &&
                (this.setState({ isFetchingForceSkipInstructions: !0 }),
                this.fetchCanForceSkipInstructions()),
              l().isNil(this.state.isMarketplaceUser) &&
                !this.state.isFetchingMarketplaceUser &&
                (this.setState({ isFetchingMarketplaceUser: !0 }),
                this.fetchIsMarketplaceUser()),
              l().isNil(this.state.shouldLogBrowserEvents) &&
                !this.state.isFetchingShouldLogBrowserEvents &&
                (this.setState({ isFetchingShouldLogBrowserEvents: !0 }),
                this.fetchShouldLogBrowserEvents()),
              this.state.isNewAssignment &&
                this.setState({ isNewAssignment: !1 });
          }
          this.setupContexts();
        }
        setupContexts() {
          const { assignments: e } = this.props;
          this.setAnalyticsContext(e[0]);
        }
        fetchTimerFlags() {
          var e = this;
          return Gs(function* () {
            const t = yield (0, N.V3)({
              feature: "enable-timer-for-force-claimed-task",
            });
            e.setState({ enableTimerForForceClaimedTask: t });
          })();
        }
        setAnalyticsContext(e) {
          var t, s;
          const {
              attemptId: i,
              id: n,
              isReviewMode: o,
              isReviewFix: r,
              type: a,
              taskType: c,
              project: d,
            } = l().pickBy(e),
            u = l().pickBy({
              attemptId: i,
              subtaskId: n,
              projectId: l().get(d, "_id", d),
              isReviewMode: o,
              isReviewFix: r,
              taskType: a || c,
              userId: this.props.user.id,
              isCorporateUser: this.props.user.isCorporateUser,
              pageLoadId: (0, E.tQ)(),
            });
          ("lidarannotation" !== (a || c) &&
            "lidarsegmentation" !== (a || c)) ||
            l().set(u, "currentUrl", window.location.href),
            R.c.setContext(u),
            zt.v(u),
            null === (s = (t = Zt.Z).setContext) ||
              void 0 === s ||
              s.call(t, u);
        }
        getCurrentAssignments() {
          const e = this.props.assignments[0];
          if (l().has(e, ["params", "lidar_linking", "task"])) {
            const t = l().get(e, ["params", "lidar_linking", "task"]);
            return this.props.assignments.filter(
              (e) => l().get(e, ["params", "lidar_linking", "task"]) === t
            );
          }
          return [e];
        }
        getInstructionHash(e) {
          return l().get(e, "instructionList._id", e.instruction_hash);
        }
        isFixable(e) {
          return !e.useBinaryResponse && !e.params.isRedactionVerification;
        }
        isValidClaim(e) {
          const t = this.props.claims[this.getIdForClaim(e)];
          return !!(null === t || void 0 === t ? void 0 : t.claimed);
        }
        needsRefresh(e) {
          const t = this.props.claims[this.getIdForClaim(e)];
          return null === t || void 0 === t ? void 0 : t.needsRefresh;
        }
        get isReviewMode() {
          return (0, Rt.isLegacyReviewAssignment)(this.props.assignments[0]);
        }
        get isEscalatedTaskMode() {
          var e, t;
          return !(
            (null === (e = this.props.assignments[0]) || void 0 === e
              ? void 0
              : e.type) !== I.TaskType.Categorization ||
            !(null === (t = this.props.assignments[0]) || void 0 === t
              ? void 0
              : t.isEscalatedTask)
          );
        }
        get shouldRenderInstructions() {
          var e, t;
          if (this.props.user.isCorporateUser || this.state.isMarketplaceUser)
            return !1;
          if (this.props.skipInstructions) return !1;
          if (this.state.forceSkipInstructions) return !1;
          if (
            null === (e = this.state.instructionV2Res) ||
            void 0 === e ||
            null === (t = e.quiz) ||
            void 0 === t
              ? void 0
              : t.isFinished
          )
            return !1;
          const s = this.getCurrentAssignments()[0];
          if (!s) return !1;
          if (
            !(this.getInstructionHash(s) !== this.state.lastInstructionHash) ||
            this.props.target
          )
            return !1;
          const i = this.state.lastAssignments[1];
          if (!i) return !0;
          const n = s.attemptId === s._id,
            o =
              this.getProjectIdFromAssignment(s) ===
              this.getProjectIdFromAssignment(i),
            r = s.type || s.taskType;
          return !(n || (r && (0, C.isContentAndLanguage)(r))) || !o;
        }
        fetchCanReturnToQueue(e, t, s, i) {
          var n = this;
          return Gs(function* () {
            var o;
            let r = !1,
              a = !1,
              l = !1;
            if (
              null === (o = n.props.assignments[0]) || void 0 === o
                ? void 0
                : o.isSpotterSubtask
            )
              (r = !0), (a = !1);
            else
              try {
                const o = yield (0, k.ZP)(
                  null,
                  `internal/scaler/reviews/canReturnToQueue?worker=${n.props.user.id}&subtaskId=${e}&projectId=${t}&taskType=${s}&taskCustomer=${i}`
                );
                (r = o.canReturnToQueue),
                  (a = o.isReturnToQueueDisabled),
                  (l = o.skipDisabled);
              } catch (c) {}
            n.setState({
              fetchingCanReturnToQueue: !1,
              fetchedCanReturnToQueue: !0,
              isReturnToQueueDisabled: a,
              canReturnToQueue: r,
              skipDisabled: l,
            });
          })();
        }
        isDoubleSubmit(e) {
          return (
            !!(
              e.length > 7 &&
              this.completedWork[e] &&
              Date.now() - this.completedWork[e].getTime() < 5e3
            ) || ((this.completedWork[e] = new Date()), !1)
          );
        }
        finishAttempt(e, t = !0) {
          Zt.Z.log("Called finish attempt", { shouldFetchNextTask: t }),
            t &&
              e !== I.TaskType.Categorization &&
              !this.props.fastSubmissionEnabled &&
              this.props.actions.fetchNextAssignments(this.props.query),
            this.props.actions.fetchBonuses();
        }
        renderInstructions(e) {
          var t, s, n, r, a, l;
          return (0, i.jsxs)("div", {
            className:
              "jsx-d4d994b4958f9dfe tasks__container scaler scaler-instructions",
            children: [
              (0, i.jsx)(ye.Z, {
                urls: (0, ke.P)(this.props.assignments),
                limitPrefetchedImages:
                  null === (t = this.props.assignmentJson) ||
                  void 0 === t ||
                  null === (s = t.featureFlags) ||
                  void 0 === s
                    ? void 0
                    : s.limitPrefetchedImages,
                limitPrefetchedLargeImages:
                  null === (n = this.props.assignmentJson) ||
                  void 0 === n ||
                  null === (r = n.featureFlags) ||
                  void 0 === r
                    ? void 0
                    : r.limitPrefetchedLargeImages,
                disableTaskerPrefetchLimit:
                  null === (a = this.props.assignmentJson) ||
                  void 0 === a ||
                  null === (l = a.featureFlags) ||
                  void 0 === l
                    ? void 0
                    : l.disableTaskerPrefetchLimit,
              }),
              (0, i.jsx)(
                ue,
                Ys(
                  {
                    currentAssignment: e.subtask || e._id,
                    customer: e.user,
                    type: e.type,
                    project: e.project,
                    isReviewMode: this.isReviewMode,
                    instructionsHash: this.getInstructionHash(e),
                    instructions: e.instruction,
                    instructionList: e.instructionList,
                    instructionObjectId: e.instructionObjectId,
                    setLastInstructionHash: this.setLastInstructionHash,
                    urgency: e.urgency,
                    onClose: this.handleInstructionsClose,
                    isEdgeCase: e.isEdgeCaseTask,
                    instructionV2Res: this.state.instructionV2Res,
                  },
                  this.props
                )
              ),
              (0, i.jsx)(o(), {
                id: "d4d994b4958f9dfe",
                children:
                  ".scaler-instructions.jsx-d4d994b4958f9dfe{height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}",
              }),
            ],
          });
        }
        render() {
          var e, t, s, n, r, a, c, d, u, m;
          const h = this.getCurrentAssignments(),
            g = h[0];
          let f = !1;
          if (this.state.feedback) {
            const e = l().cloneDeep(this.state.feedback),
              t = l().last(e.newInstructiveAttempts);
            l().assign(e, t),
              l().assign(e.trainingScenario, {
                instructionList: l().get(g, "instructionList"),
              });
            const s = [
                {
                  name: Ot.DiffView.TaskerResponse,
                  response: e.response,
                  graderResponse: e.graderResponse,
                  graderParams: e.graderParams,
                },
                {
                  name: Ot.DiffView.AnswerKey,
                  response:
                    e.closestExpectedResponse ||
                    e.trainingScenario.expectedResponse,
                  isAnswerKey: !0,
                  graderResponse: e.graderResponse,
                  graderParams: e.graderParams,
                },
              ],
              i = e.visualDiff;
            i &&
              s.unshift({
                name: Ot.DiffView.VisualDiff,
                response: i,
                graderResponse: e.graderResponse,
                graderParams: e.graderParams,
              });
            const n =
                this.props.userFromGetInitialProps &&
                this.props.userFromGetInitialProps._id,
              o = e.trainingScenario,
              r =
                !e.benchmarkScoreBelowDisableThresholdConditionalBM &&
                o.benchmark.isConditionallyInstructiveBenchmark,
              a = {
                name: o && o.name,
                showingGrade: !0,
                trainingScenario: o,
                submissionResponse: e,
                responses: s,
                allowedToSeeAnswerKey: !0,
                disableRetry: !0,
                backToQueue: this.backToQueue,
                isInstructiveBenchmark: !0,
                loggedUserId: n,
                useProtectedText: o.useProtectedText,
                isConditionallyInstructiveBenchmark:
                  o.benchmark.isConditionallyInstructiveBenchmark,
                isConditionallyInstructiveBenchmarkPassed:
                  !e.benchmarkScoreBelowDisableThresholdConditionalBM,
              };
            if (!r || this.state.feedback.hasFailedConditionally)
              return this.getFeedbackComponent(this.state.feedback.taskType, a);
            f = !0;
          }
          if (
            this.props.batch.newBonuses &&
            this.props.batch.newBonuses.length > 0
          ) {
            const e = this.props.batch.newBonuses[0];
            return (
              this.currentlyShowingBonusId !== e._id &&
                (R.c.track("Bonus modal shown"),
                (this.currentlyShowingBonusId = e._id)),
              (0, i.jsx)(ve, {
                showBonus: e,
                bonuses: this.props.batch.bonuses,
                onClick: () => this.onBonusModalClick(e),
              })
            );
          }
          if (
            ((this.currentlyShowingBonusId = null),
            this.props.batch.status === Dt.PENDING ||
              this.state.isFetching ||
              this.state.isNewAssignment ||
              this.props.isRedirecting)
          )
            return (0, i.jsx)("div", {
              className: "tasks__container scaler o__loading",
              children: (0, i.jsx)(He.Z, {}),
            });
          const b = window.location.pathname.includes("/expert/");
          if (!g) {
            const e =
              this.props.user.isCorporateUser || this.props.user.spoofed;
            if (b)
              return (0, i.jsxs)("div", {
                className: "scaleui outlier-theme scale-tailwind h-full",
                children: [
                  (0, i.jsx)("div", {
                    className: "bg-neutral-0 shadow-sm",
                    children: (0, i.jsx)(Os.Z, {
                      simple: !0,
                      showLogo: !0,
                      showMenu: !0,
                      user: this.props.user,
                    }),
                  }),
                  (0, i.jsx)(Ms, { user: this.props.user }),
                ],
              });
            const t =
              "true" ===
              window.localStorage.getItem(`isTaxBlocked:${this.props.user.id}`);
            if (e) {
              const {
                  project: e,
                  subtaskId: s,
                  lidarId: n,
                } = p.parse(document.location.search),
                r = s || n,
                a = l().pickBy(
                  Ys(
                    {
                      worker: encodeURIComponent(this.props.user.id),
                      subtask: r,
                    },
                    !r && { project: e }
                  )
                ),
                c = `/corp/explain?${p.stringify(a)}`;
              return t
                ? (0, i.jsx)(Zs, {
                    corpExplainPath: (0, _t.scaleDashboardURL)(c),
                  })
                : (0, i.jsxs)("div", {
                    className: "jsx-2f875baa97faecca",
                    children: [
                      (0, i.jsx)(A, {
                        config: this.props.config,
                        query: this.props.query,
                        user: this.props.user,
                      }),
                      (0, i.jsxs)("div", {
                        className: "jsx-2f875baa97faecca hint",
                        children: [
                          (0, i.jsxs)("span", {
                            className: "jsx-2f875baa97faecca",
                            children: [
                              "Corp User Tools",
                              (0, i.jsx)("br", {
                                className: "jsx-2f875baa97faecca",
                              }),
                            ],
                          }),
                          "Debugging an Empty Queue issue? Please use",
                          " ",
                          (0, i.jsx)("a", {
                            href: (0, _t.scaleDashboardURL)(c),
                            className: "jsx-2f875baa97faecca",
                            children: "Corp Explain",
                          }),
                          "!",
                        ],
                      }),
                      (0, i.jsx)(o(), {
                        id: "2f875baa97faecca",
                        children:
                          ".hint.jsx-2f875baa97faecca{position:absolute;width:100%;text-align:center;top:30px;font-size:16px}.hint.jsx-2f875baa97faecca span.jsx-2f875baa97faecca{color:purple;font-weight:bold}",
                      }),
                    ],
                  });
            }
            return t
              ? (0, i.jsx)(Zs, {})
              : (0, i.jsxs)("div", {
                  className: "tasks__container scaler",
                  children: [
                    (0, i.jsx)(ee.Z, Ys({}, this.props)),
                    (0, i.jsx)(A, {
                      config: this.props.config,
                      query: this.props.query,
                      user: this.props.user,
                    }),
                  ],
                });
          }
          if (g.assignmentType === C.AssignmentType.AccountVerification)
            return b
              ? (0, i.jsx)(Es, {
                  user: this.props.user,
                  contents: {
                    templates: g.templates || [],
                    description:
                      '<p>In order to continue working on Outlier, please complete the following account verification steps!</p><p><br></p><p>To verify your account, click on "Complete Verification". After clicking the button, a popup will appear. Follow the instructions in the popup to complete your verification.</p>',
                    source: C.VerificationSource.Task,
                    enableLinkedInVerification: !1,
                    isLinkedInVerificationRequired: !1,
                  },
                  handleContinue: this.nextTask,
                })
              : (0, i.jsx)(bs, {
                  user: this.props.user,
                  contents: {
                    enableFraudCheck: !0,
                    enablePersonaGoldCheck: !1,
                    templates: g.templates || [],
                    source: C.VerificationSource.Task,
                    enableLinkedInVerification: !1,
                    isLinkedInVerificationRequired: !1,
                  },
                  handleContinue: this.nextTask,
                });
          if (g.assignmentType === C.AssignmentType.Course) {
            var x;
            if (
              !!(null === (x = this.state.instructionV2Res) || void 0 === x
                ? void 0
                : x.quiz) &&
              this.shouldRenderInstructions
            )
              return this.renderInstructions(g);
            var v;
            if ("native" === g.courseType)
              return (0, i.jsx)(At.CoursesPageComponent, {
                user: this.props.user,
                courseId: null !== (v = g._id) && void 0 !== v ? v : "",
              });
            if (b) {
              const e = new $s.S();
              return (0, i.jsx)(Vs.aH, {
                client: e,
                children: (0, i.jsx)(
                  Et.Z,
                  Ys({}, this.props, {
                    isInQueue: !0,
                    courseId: l().get(
                      this.props,
                      ["training", "course", "_id"],
                      null
                    ),
                    returnToTasking: this.handleCompleteSupplementalCourse,
                  })
                ),
              });
            }
            return (0, i.jsx)(
              Pt.Z,
              Ys({}, this.props, {
                handleCompleteSupplementalCourse:
                  this.handleCompleteSupplementalCourse,
                isInQueue: !0,
                courseId: l().get(
                  this.props,
                  ["training", "course", "_id"],
                  null
                ),
              })
            );
          }
          if (
            (null === g || void 0 === g ? void 0 : g.redirectLink) &&
            (null === g || void 0 === g ? void 0 : g.assignmentType) ===
              C.AssignmentType.Redirect
          )
            return (
              window.open(g.redirectLink, "_self"), (0, i.jsx)(i.Fragment, {})
            );
          let y;
          this.needsRefresh(g) && window.location.reload();
          const k = (e) => this.setState({ isExitingTask: e });
          var j, w, S;
          if (this.state.isExitingTask)
            return (0, i.jsx)("div", {
              className: "scaleui outlier-theme scale-tailwind",
              children: (0, i.jsx)(Hs, {
                payText:
                  null === (j = this.props) ||
                  void 0 === j ||
                  null === (w = j.precalculatedPay) ||
                  void 0 === w
                    ? void 0
                    : w.payText,
                actions: this.props.actions,
                query: this.props.query,
                isInQATeam:
                  void 0 !==
                  (null === (S = this.props.userFromGetInitialProps) ||
                  void 0 === S
                    ? void 0
                    : S.qaTeamId),
                setIsExitingTask: k,
              }),
            });
          if (!this.isValidClaim(g) && !this.state.isExitingTask)
            return (0, i.jsx)("div", {
              className: "scaleui outlier-theme scale-tailwind",
              children: (0, i.jsx)(Xt, {}),
            });
          const T =
              this.props.userFromGetInitialProps &&
              this.props.userFromGetInitialProps.accountRole ===
                C.TeamRole.Admin,
            P = !l().isEmpty(
              null === (e = this.props.userFromGetInitialProps) || void 0 === e
                ? void 0
                : e.trainerProject
            ),
            E =
              this.props.userFromGetInitialProps &&
              this.props.userFromGetInitialProps._id,
            O =
              this.props.userFromGetInitialProps &&
              this.props.userFromGetInitialProps.flags;
          !this.props.isCustomerReviewMode &&
            (null === (t = g.params) || void 0 === t
              ? void 0
              : t.internal_instruction) &&
            (g.instruction = g.params.internal_instruction),
            !f &&
              this.props.forceFixAssignment &&
              this.props.previousInstructiveAttemptResponse &&
              this.props.previousInstructiveAttemptId === g.id &&
              (g.isReviewMode
                ? l().set(
                    g,
                    "fixResponse",
                    this.props.previousInstructiveAttemptResponse
                  )
                : l().set(
                    g,
                    "params.hypothesis",
                    this.props.previousInstructiveAttemptResponse
                  ));
          const N =
            null === (s = l().get(g.project, "_id", g.project)) || void 0 === s
              ? void 0
              : s.toString();
          if (this.props.perProjectAccuracies) {
            var L;
            const e =
                (null === (L = this.props.perProjectAccuracies) || void 0 === L
                  ? void 0
                  : L[N]) || {},
              t = g.isReviewMode ? e.reviewScore : e.attemptScore;
            void 0 !== t && (g.recentAccuracy = t);
          }
          if (this.props.perProjectTopMistakes) {
            const e = l().get(this.props.perProjectTopMistakes, N, {});
            l().isEmpty(e) || (g.topMistakes = e);
          }
          const _ = g.bmInstructionList || g.instructionList;
          if (this.props.perProjectInstructionItemAccuracies && _) {
            const e = l().get(
              this.props.perProjectInstructionItemAccuracies,
              N,
              {}
            );
            l().isEmpty(e) || (g.instructionItemAccuracies = e);
          }
          if (this.props.currentProjectAccuracyBucket && _) {
            const { currentProjectAccuracyBucket: e } = this.props;
            l().isEmpty(e) || (g.accuracyBucket = e);
          }
          if (this.props.perProjectInstructionItemLastSeen && _) {
            const e = l().get(
              this.props.perProjectInstructionItemLastSeen,
              N,
              {}
            );
            l().isEmpty(e) || (g.instructionItemLastSeen = e);
          }
          if (this.props.perProjectPassRate) {
            var F;
            const e =
                (null === (F = this.props.perProjectPassRate) || void 0 === F
                  ? void 0
                  : F[N]) || {},
              t = g.isReviewMode ? e.reviewScore : e.attemptScore,
              s = g.isReviewMode ? e.reviewNum : e.attemptNum;
            void 0 !== t && ((g.passRate = t), (g.passNum = s));
          }
          const D =
              !this.state.enableTimerForForceClaimedTask &&
              !!this.props.query.force,
            M = this.getBonusInProgress(),
            Z = this.props.fastSubmissionEnabled ? 2 : void 0;
          var z, B;
          const U = Ys({}, g, {
            timerDisabled: D,
            assignment: this.props.assignmentJson,
            autosaveEnabled: !0,
            completedTaskCount: this.completedTaskCount,
            onSubmit: this.completeAttempt,
            onAttachmentLoadingFail: this.onAttachmentLoadingFail,
            onUserSkip: this.onUserSkip,
            onUserReport: this.onUserReport,
            onUserFlag: this.onUserFlag,
            nextTask: () => this.nextTask(Z),
            refreshClaim: this.refreshClaim,
            checkClaim: this.checkClaim,
            claim: this.props.claims[this.getIdForClaim(g)],
            loggedUserIsAdmin: T,
            loggedUserIsTrainer: P,
            loggedUserId: E,
            loggedUserFlags: O,
            isReviewMode: this.isReviewMode,
            key: g._id,
            target: this.props.target,
            targetFrame: this.props.targetFrame,
            startFrame: this.props.startFrame,
            endFrame: this.props.endFrame,
            canEdit: !this.state.alerting && !this.props.query.readOnly,
            bonus: M,
            userFlags: this.props.user.featureFlags,
            postCompletionFeedback: this.props.postCompletionFeedback,
            tasker: this.props.user,
            projectConfig:
              null !==
                (z =
                  null === (n = this.props.assignmentJson) || void 0 === n
                    ? void 0
                    : n.projectConfig) && void 0 !== z
                ? z
                : g.projectConfig,
            isCalibration: this.props.isCalibration,
            instructionUrl: this.props.instructionUrl,
            isForced:
              null !== (B = this.props.query.forceClaim) && void 0 !== B
                ? B
                : this.props.query.force,
            onExit: this.onExit,
            isExitingTask: this.state.isExitingTask,
          });
          switch (g.type) {
            case I.TaskType.AudioTranscription:
              y = (0, i.jsx)(Nt.Gi, Ys({}, U));
              break;
            case I.TaskType.VideoAnnotation:
            case I.TaskType.VideoBoxAnnotation:
            case I.TaskType.VideoCuboidAnnotation:
            case I.TaskType.VideoPolygonAnnotation:
              y = (0, i.jsx)(Nt.xe, Ys({}, U));
              break;
            case I.TaskType.VideoPlaybackAnnotation:
              y = (0, i.jsx)(Nt.sE, Ys({}, U));
              break;
            case I.TaskType.ImageAnnotation:
            case I.TaskType.PointAnnotation:
            case I.TaskType.LineAnnotation:
            case I.TaskType.Annotation:
            case I.TaskType.CuboidAnnotation:
            case I.TaskType.PolygonAnnotation:
              y = (0, i.jsx)(Nt.B, Ys({}, U));
              break;
            case I.TaskType.SegmentAnnotation:
              y = (0, i.jsx)(Nt.lb, Ys({}, U, { config: this.props.config }));
              break;
            case I.TaskType.Categorization:
              if (U.params.binarySceneUrl) return (0, i.jsx)(ti, Ys({}, U));
              if (U.params.taxonomies) {
                if (this.isReviewMode) {
                  y = (0, i.jsx)(Nt.OK, Ys({}, U));
                  break;
                }
                y = (0, i.jsx)(Nt.kq, Ys({}, U));
                break;
              }
              y = (0, i.jsx)(Nt.LO, Ys({}, U));
              break;
            case I.TaskType.DataCollection:
              y = (0, i.jsx)(Nt.kv, Ys({}, U));
              break;
            case I.TaskType.GenericDataCollection:
              y = (0, i.jsx)(Nt.Vh, Ys({}, U));
              break;
            case I.TaskType.Transcription:
              y = (0, i.jsx)(Nt._N, Ys({}, U));
              break;
            case I.TaskType.Comparison:
              y = (0, i.jsx)(Nt.FS, Ys({}, U));
              break;
            case I.TaskType.NamedEntityRecognition:
              y = (0, i.jsx)(Nt.bs, Ys({}, U));
              break;
            case I.TaskType.LidarAnnotation:
            case I.TaskType.LidarSegmentation:
            case I.TaskType.LidarStitching:
            case I.TaskType.MultiStage:
            case I.TaskType.SensorFusion:
              return (0, i.jsx)(ti, Ys({}, U));
            case I.TaskType.VideoCaptioning:
              return (0, i.jsx)(si, Ys({}, U));
            case I.TaskType.TextCollection:
              y = this.isReviewMode
                ? (0, i.jsx)(Nt.mY, Ys({}, U))
                : C.AMS_UI_ENABLED_PROJECTS.includes(
                    this.getProjectIdFromAssignment(g) || ""
                  )
                ? (0, i.jsx)(Nt.fT, Ys({}, U))
                : (g.user &&
                    g.params.templateId &&
                    C.TEMPLATE_UI_ENABLED_CUSTOMERS.includes(g.user)) ||
                  "5d5b3a0fc99d660170d77ba5" === g.user
                ? (0, i.jsx)(Nt.WD, Ys({}, U))
                : (0, i.jsx)(Nt.JO, Ys({}, U));
              break;
            case I.TaskType.DocumentTranscription:
              (U.timerDisabled = !1),
                (y = this.isReviewMode
                  ? (0, i.jsx)(Nt.wN, Ys({}, U))
                  : (0, i.jsx)(Nt.QH, Ys({}, U)));
              break;
            case I.TaskType.MultiModalTranscription:
              y = (0, i.jsx)(Nt.MM, Ys({}, U));
              break;
            case I.TaskType.Chat:
              y = (0, i.jsx)(
                Nt.JL,
                Ys({}, U, {
                  nextTaskOnExpiration: () => this.nextTaskOnExpiration(Z),
                })
              );
              break;
            case I.TaskType.ChatExperimental:
            case I.TaskType.ChatV2:
              y = (0, i.jsx)(Q.ag, {
                children: (0, i.jsx)(
                  Nt.bb,
                  Ys({}, U, {
                    nextTaskOnExpiration: () => this.nextTaskOnExpiration(Z),
                  })
                ),
              });
              break;
            case I.TaskType.MultiChat:
              y = (0, i.jsx)(
                Nt.wo,
                Ys({}, U, {
                  nextTaskOnExpiration: () => this.nextTaskOnExpiration(Z),
                })
              );
              break;
            case I.TaskType.SweAgent:
              y = (0, i.jsx)(Nt.ib, Ys({}, U));
          }
          if (!y)
            return (
              this.state.isMarketplaceUser &&
                Zt.Z.error("Marketplace User Incorrectly Directed to Tasking", {
                  assignedProjectLayers: JSON.stringify(
                    this.props.user.assignedProjectLayers
                  ),
                  chosenProjectLayer: JSON.stringify(
                    this.props.user.chosenProjectLayer
                  ),
                  lastEQEvent: JSON.stringify(
                    this.props.user.lastEmptyQueueEvent
                  ),
                }),
              (0, i.jsxs)("div", {
                className: "scaleui outlier-theme scale-tailwind h-full",
                children: [
                  (0, i.jsx)("div", {
                    className: "bg-neutral-0 shadow-sm",
                    children: (0, i.jsx)(Os.Z, {
                      simple: !0,
                      showLogo: !0,
                      showMenu: !0,
                      user: this.props.user,
                    }),
                  }),
                  (0, i.jsx)(qs, { user: this.props.user }),
                ],
              })
            );
          const { siblingFrameWindows: H } = g.params;
          if (H && !this.props.query.index) {
            const e = l()
              .sortBy(l().entries(H), ([, e]) => e.start)
              .map(([e, t], s) => ({
                _id: e,
                params: { index: s, frameWindow: t },
              }));
            return (0, i.jsx)(Gt, { subtasks: e });
          }
          if (this.shouldRenderInstructions) return this.renderInstructions(g);
          const q = (0, i.jsx)(Q.A9, {
              open: this.state.alerting,
              anchorOrigin: { vertical: "top", horizontal: "center" },
              children: (0, i.jsx)(Q.bZ, {
                severity: this.state.alertSeverity,
                action:
                  this.state.alertAction &&
                  (0, i.jsxs)("div", {
                    style: { position: "relative" },
                    children: [
                      (0, i.jsx)(Q.Av, {
                        disabled: this.state.loadingLockStatus,
                        onClick: this.handleEditHereClick,
                        children: this.state.alertAction,
                      }),
                      this.state.loadingLockStatus &&
                        (0, i.jsx)(Q.D8, {
                          color: "secondary",
                          size: 20,
                          style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: -10,
                            marginLeft: -10,
                          },
                        }),
                    ],
                  }),
                children: this.state.alertMessage,
              }),
            }),
            $ = (0, i.jsx)(ye.Z, {
              urls: (0, ke.P)(this.props.assignments),
              limitPrefetchedImages:
                null === (r = this.props.assignmentJson) ||
                void 0 === r ||
                null === (a = r.featureFlags) ||
                void 0 === a
                  ? void 0
                  : a.limitPrefetchedImages,
              limitPrefetchedLargeImages:
                null === (c = this.props.assignmentJson) ||
                void 0 === c ||
                null === (d = c.featureFlags) ||
                void 0 === d
                  ? void 0
                  : d.limitPrefetchedLargeImages,
              disableTaskerPrefetchLimit:
                null === (u = this.props.assignmentJson) ||
                void 0 === u ||
                null === (m = u.featureFlags) ||
                void 0 === m
                  ? void 0
                  : m.disableTaskerPrefetchLimit,
            });
          if (
            this.isReviewMode &&
            (g.type !== I.TaskType.Chat ||
              (g.reviewLevel !== C.ReviewLevel.ReviewConsensus &&
                g.reviewLevel !== C.ReviewLevel.QIRAuditor))
          ) {
            var V;
            const e = this.getProjectIdFromAssignment(g),
              t = this.props.user.accountRole === C.TeamRole.Admin,
              s = g.useMultiReplicaView
                ? g.type === I.TaskType.ChatV2
                  ? this.completeReviewAllChildAssignments
                  : this.completeReviewChildAssignment
                : this.completeReviewAssignment;
            this.state.fetchedCanReturnToQueue ||
              this.state.fetchingCanReturnToQueue ||
              this.setState({ fetchingCanReturnToQueue: !0 }, () =>
                this.fetchCanReturnToQueue(g._id, e, g.type, g.user)
              );
            const n =
                !!this.state.fetchedCanReturnToQueue &&
                this.state.isReturnToQueueDisabled,
              o =
                !!this.state.fetchedCanReturnToQueue &&
                this.state.canReturnToQueue,
              r = this.isEscalatedTaskMode,
              a = g.type === I.TaskType.AudioTranscription || r,
              c = r;
            if ((0, C.isVideo)(g.type) && h.length > 1)
              return (0, i.jsx)("div", {
                className: "tasks__container scaler",
                children: (0, i.jsxs)(Mt.M5, {
                  children: [
                    $,
                    (0, i.jsx)(Nt.Gq, {
                      isReviewMode: !0,
                      timerDisabled: D,
                      user: this.props.user,
                      isUserAdmin: t,
                      loggedUserId: E,
                      fixable: this.isFixable(g),
                      canReturnToQueue: o,
                      skipDisabled: this.state.skipDisabled,
                      isReturnToQueueDisabled: n,
                      claim: this.props.claims[this.getIdForClaim(g)],
                      onSubmit: this.completeTaskLevelVideoReview,
                      onUserSkip: this.onUserSkip,
                      onUserSkipBatch: this.onUserSkipReviewBatch,
                      nextTask: this.nextTask,
                      userFlags: this.props.user.featureFlags,
                      assignments: h,
                      type: g.type,
                      projectId: g.project,
                      refreshClaim: this.refreshClaim,
                      checkClaim: this.checkClaim,
                    }),
                  ],
                }),
              });
            if (g.type === I.TaskType.Chat || g.type === I.TaskType.MultiChat) {
              const e = g.type === I.TaskType.Chat ? Nt.JL : Nt.wo;
              return (0, i.jsx)("div", {
                className: "tasks__container scaler",
                children: (0, i.jsx)(Mt.M5, {
                  children: (0, i.jsx)(
                    e,
                    Ys({}, U, {
                      nextTaskOnExpiration: () => this.nextTaskOnExpiration(Z),
                      onReviewSubmit: s,
                      canReturnToQueue: o,
                      isReturnToQueueDisabled: n,
                    })
                  ),
                }),
              });
            }
            return g.type === I.TaskType.ChatExperimental ||
              g.type === I.TaskType.ChatV2
              ? (0, i.jsx)("div", {
                  className: "tasks__container scaler",
                  children: (0, i.jsx)(
                    Nt.bb,
                    Ys({}, U, {
                      nextTaskOnExpiration: () => this.nextTaskOnExpiration(Z),
                      onReviewSubmit: s,
                      canReturnToQueue: o,
                      isReturnToQueueDisabled: n,
                    })
                  ),
                })
              : g.type === I.TaskType.SweAgent
              ? (0, i.jsx)("div", {
                  className: "tasks__container scaler",
                  children: (0, i.jsx)(
                    Nt.ib,
                    Ys({}, U, {
                      onReviewSubmit: s,
                      canReturnToQueue: o,
                      isReturnToQueueDisabled: n,
                    })
                  ),
                })
              : g.type === I.TaskType.VideoAnnotation ||
                g.type === I.TaskType.VideoBoxAnnotation ||
                g.type === I.TaskType.VideoCuboidAnnotation ||
                g.type === I.TaskType.VideoPolygonAnnotation
              ? (0, i.jsx)("div", {
                  className: "tasks__container scaler",
                  children: (0, i.jsxs)(Mt.M5, {
                    children: [
                      $,
                      (0, i.jsx)(
                        Nt.xe,
                        Ys(
                          {
                            isReviewMode: !0,
                            isFeedback:
                              null === (W = this.props.assignmentJson) ||
                              void 0 === W
                                ? void 0
                                : W.isFeedback,
                            timerDisabled: D,
                            assignment: this.props.assignmentJson,
                            instructions: g.instruction,
                            user: this.props.user,
                            config: this.props.config,
                            isUserAdmin: t,
                            query: this.props.query,
                            loggedUserId: E,
                            fixable: this.isFixable(g),
                            skipDisabled: this.state.skipDisabled,
                            canReturnToQueue: o,
                            isReturnToQueueDisabled: n,
                            claim: this.props.claims[this.getIdForClaim(g)],
                            onSubmit: s,
                            onUserSkip: this.onUserSkip,
                            onUserSkipBatch: this.onUserSkipReviewBatch,
                            nextTask: this.nextTask,
                            userFlags: this.props.user.featureFlags,
                            refreshClaim: this.refreshClaim,
                            checkClaim: this.checkClaim,
                            bonus: M,
                          },
                          g
                        )
                      ),
                    ],
                  }),
                })
              : g.type === I.TaskType.ImageAnnotation ||
                g.type === I.TaskType.PointAnnotation ||
                g.type === I.TaskType.LineAnnotation ||
                g.type === I.TaskType.Annotation ||
                g.type === I.TaskType.CuboidAnnotation ||
                g.type === I.TaskType.PolygonAnnotation
              ? (0, i.jsx)("div", {
                  className: "tasks__container scaler",
                  children: (0, i.jsxs)(Mt.M5, {
                    children: [
                      $,
                      (0, i.jsx)(
                        Nt.B,
                        Ys(
                          {
                            assignment: this.props.assignmentJson,
                            isReviewMode: !0,
                            isFeedback:
                              null === (G = this.props.assignmentJson) ||
                              void 0 === G
                                ? void 0
                                : G.isFeedback,
                            timerDisabled: D,
                            instructions: g.instruction,
                            user: this.props.user,
                            config: this.props.config,
                            isUserAdmin: t,
                            query: this.props.query,
                            loggedUserId: E,
                            fixable: this.isFixable(g),
                            skipDisabled: this.state.skipDisabled,
                            canReturnToQueue: o,
                            isReturnToQueueDisabled: n,
                            claim: this.props.claims[this.getIdForClaim(g)],
                            onSubmit: s,
                            onUserSkip: this.onUserSkip,
                            onUserSkipBatch: this.onUserSkipReviewBatch,
                            nextTask: this.nextTask,
                            userFlags: this.props.user.featureFlags,
                            refreshClaim: this.refreshClaim,
                            checkClaim: this.checkClaim,
                            bonus: M,
                          },
                          g
                        )
                      ),
                    ],
                  }),
                })
              : g.type === I.TaskType.SegmentAnnotation
              ? (0, i.jsx)("div", {
                  className: "tasks__container scaler",
                  children: (0, i.jsxs)(
                    Nt.lb,
                    Ys(
                      {
                        isReviewMode: !0,
                        isFeedback:
                          null === (J = this.props.assignmentJson) ||
                          void 0 === J
                            ? void 0
                            : J.isFeedback,
                        timerDisabled: D,
                        instructions: g.instruction,
                        user: this.props.user,
                        isUserAdmin: t,
                        query: this.props.query,
                        loggedUserId: E,
                        assignment: Ys({}, this.props.assignmentJson, g, {
                          taskerWorkflowDefinition:
                            null === (Y = this.props.assignmentJson) ||
                            void 0 === Y
                              ? void 0
                              : Y.taskerWorkflowDefinition,
                          initialInlineComments:
                            null === (K = this.props.assignmentJson) ||
                            void 0 === K
                              ? void 0
                              : K.initialInlineComments,
                          featureFlags:
                            null === (X = this.props.assignmentJson) ||
                            void 0 === X
                              ? void 0
                              : X.featureFlags,
                        }),
                        claim: this.props.claims[this.getIdForClaim(g)],
                        onSubmit: s,
                        onUserSkip: this.onUserSkip,
                        onUserSkipBatch: this.onUserSkipReviewBatch,
                        fixable: this.isFixable(g),
                        makingChanges: a,
                        hidePreviousResponse: c,
                        skipDisabled: this.state.skipDisabled,
                        canReturnToQueue: o,
                        isReturnToQueueDisabled: n,
                        bonus: M,
                        nextTask: this.nextTask,
                        actions: this.props.actions,
                        canEdit:
                          !this.state.alerting && !this.props.query.readOnly,
                        userFlags: this.props.user.featureFlags,
                        refreshClaim: this.refreshClaim,
                        checkClaim: this.checkClaim,
                      },
                      g,
                      { children: [$, q] }
                    )
                  ),
                })
              : g.type === I.TaskType.VideoPlaybackAnnotation
              ? (0, i.jsx)("div", {
                  className: "tasks__container scaler",
                  children: (0, i.jsx)(Mt.M5, {
                    children: (0, i.jsx)(
                      Nt.sE,
                      Ys(
                        {
                          isReviewMode: !0,
                          timerDisabled: D,
                          assignment: this.props.assignmentJson,
                          instructions: g.instruction,
                          user: this.props.user,
                          config: this.props.config,
                          isUserAdmin: t,
                          query: this.props.query,
                          loggedUserId: E,
                          fixable: this.isFixable(g),
                          skipDisabled: this.state.skipDisabled,
                          canReturnToQueue: o,
                          isReturnToQueueDisabled: n,
                          claim: this.props.claims[this.getIdForClaim(g)],
                          onSubmit: s,
                          onUserSkip: this.onUserSkip,
                          onUserSkipBatch: this.onUserSkipReviewBatch,
                          nextTask: this.nextTask,
                          refreshClaim: this.refreshClaim,
                          checkClaim: this.checkClaim,
                          bonus: M,
                        },
                        g
                      )
                    ),
                  }),
                })
              : (0, i.jsxs)(
                  It,
                  {
                    instructions: g.instruction,
                    user: this.props.user,
                    isUserAdmin: t,
                    query: this.props.query,
                    assignment: g,
                    claim: this.props.claims[this.getIdForClaim(g)],
                    submit: s,
                    onUserSkip: this.onUserSkip,
                    onUserSkipBatch: this.onUserSkipReviewBatch,
                    onUserFlag: this.onUserFlag,
                    fixable: this.isFixable(g),
                    makingChanges: a,
                    hidePreviousResponse: c,
                    skipDisabled: this.state.skipDisabled,
                    canReturnToQueue: o,
                    isReturnToQueueDisabled: n,
                    bonus: M,
                    taskPage: y,
                    nextTask: this.nextTask,
                    actions: this.props.actions,
                    canEdit: !this.state.alerting && !this.props.query.readOnly,
                    postCompletionFeedback: this.props.postCompletionFeedback,
                    isInstructionTask: l().get(g, "isInstructionTask", !1),
                    isEdgeCaseTask: l().get(g, "isEdgeCaseTask", !1),
                    projectConfig:
                      null === (V = this.props.assignmentJson) || void 0 === V
                        ? void 0
                        : V.projectConfig,
                    children: [$, q],
                  },
                  g._id
                );
            var W, G, J, Y, K, X;
          }
          return (0, i.jsx)("div", {
            className: "tasks__container scaler",
            children: (0, i.jsxs)(Mt.M5, { children: [$, y, q] }),
          });
        }
        constructor(...e) {
          super(...e),
            (this.completedTaskCount = 0),
            (this.completedWork = {}),
            (this.currentlyShowingBonusId = null),
            (this.state = {
              alerting: !1,
              skipDisabled: !0,
              canReturnToQueue: !1,
              enableTimerForForceClaimedTask: !1,
              completedEditLockCheck: !1,
              displayInstructiveModal: !1,
              fetchedCanReturnToQueue: !1,
              fetchingCanReturnToQueue: !1,
              isReturnToQueueDisabled: !1,
              lastAssignments: [],
              lastInstructionHash: null,
              loadingLockStatus: !1,
              instructionV2Res: void 0,
              isFetching: !1,
              isNewAssignment: !1,
              isExitingTask: !1,
            }),
            (this.boundLogEventActionUnload = void 0),
            (this.boundLogEventActionVisibilityChange = void 0),
            (this.backToQueue = () => {
              if (
                (Zt.Z.log("Called backToQueue"),
                this.state.feedback &&
                  this.state.feedback.trainingScenario.benchmark
                    .isConditionallyInstructiveBenchmark &&
                  !this.state.feedback
                    .benchmarkScoreBelowDisableThresholdConditionalBM)
              ) {
                var e;
                const t =
                  null === (e = this.state.feedback) || void 0 === e
                    ? void 0
                    : e.taskType;
                this.setState({ feedback: void 0 }, () => {
                  this.finishAttempt(t);
                });
              } else if (this.props.forceFixAssignment)
                this.setState({ feedback: void 0 });
              else if (l().get(this.state.feedback, "isReview"))
                this.setState({ feedback: void 0 });
              else {
                var t;
                const e =
                  null === (t = this.state.feedback) || void 0 === t
                    ? void 0
                    : t.taskType;
                this.setState({ feedback: void 0 }, () => {
                  this.finishAttempt(e);
                });
              }
            }),
            (this.setElectronContext = (e, t) => {
              if (Ft()) {
                const s = Ft ? window.electronBridge : null;
                s.setCurrentUser({ id: t.id, email: t.email }),
                  e[0] && s.setCurrentTaskId(e[0].id);
              } else {
                e.some(
                  (e) =>
                    e.user === _.default.Bee &&
                    [C.AccountType.Worker, C.AccountType.Expert].includes(
                      t.accountType
                    )
                ) &&
                  "production" !== Qs.env.ENV &&
                  c.default.push("/download");
              }
            }),
            (this.windowLocationReload = () => {
              window.location.reload();
            }),
            (this.getIdForClaim = (e) =>
              (0, Rt.isLegacyReviewAssignment)(e) ? e.attemptId : e._id),
            (this.getProjectIdFromAssignment = (e) =>
              e.project
                ? e.project._id
                  ? e.project._id.toString()
                  : e.project
                : null),
            (this.getBonusInProgress = () => {
              const e = this.props.assignments[0];
              if (!e) return;
              if (
                !l().includes(
                  C.bonusProgressBarEnabledTaskTypes,
                  e.type || e.taskType
                )
              )
                return;
              const t = this.getProjectIdFromAssignment(e),
                s = l().filter(
                  this.props.batch.bonuses,
                  (s) =>
                    s.status === C.BonusStatus.Pending &&
                    s.enableCompletionBeforeWindowEnd &&
                    l().includes(C.bonusProgressBarEnabledRules, s.bonusRule) &&
                    Ks(s.project, t) &&
                    Ks(s.taskType, e.type) &&
                    Ks(s.customer, e.taskCustomer) &&
                    l().isNumber(e.reviewLevel) &&
                    (l().isNil(s.minReviewLevel) ||
                      e.reviewLevel >= s.minReviewLevel) &&
                    (l().isNil(s.maxReviewLevel) ||
                      e.reviewLevel <= s.maxReviewLevel)
                );
              return l().minBy(s, be.ef);
            });
          var t = this;
          this.nextTask = (function () {
            var e = Gs(function* (e) {
              const s = t.getCurrentAssignments()[0],
                i = t.getProjectIdFromAssignment(s),
                n = yield (0, N.V3)({
                  feature: "experimental-task-speed-performance",
                  querystring: p.stringify({ projectId: i }),
                }),
                o = () => {
                  var s;
                  return t.props.actions.nextTask(
                    t.props.query,
                    void 0 !==
                      (null === (s = t.props.userFromGetInitialProps) ||
                      void 0 === s
                        ? void 0
                        : s.qaTeamId),
                    e
                  );
                },
                r =
                  (null === s || void 0 === s ? void 0 : s.type) &&
                  [I.TaskType.ChatExperimental, I.TaskType.ChatV2].includes(
                    s.type
                  ) &&
                  !n,
                a =
                  (null === s || void 0 === s ? void 0 : s.type) ===
                    I.TaskType.Chat || r;
              t.props.isInstructiveBM
                ? o()
                : a
                ? t.props.actions.awaitConfirmationForNextTask()
                : o();
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var s = this;
          this.nextTaskOnExpiration = (function () {
            var e = Gs(function* (e) {
              var t;
              s.props.actions.nextTask(
                s.props.query,
                void 0 !==
                  (null === (t = s.props.userFromGetInitialProps) ||
                  void 0 === t
                    ? void 0
                    : t.qaTeamId),
                e
              );
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var n = this;
          (this.setLastInstructionHash = (function () {
            var e = Gs(function* (e) {
              const t = n.state.lastAssignments[0],
                s = n.state.lastAssignments[1];
              e !== n.state.lastInstructionHash &&
                !n.props.target &&
                t &&
                s &&
                n.getProjectIdFromAssignment(t) ===
                  n.getProjectIdFromAssignment(s) &&
                (yield zt.Kz(Bt.j.InstructionsPageDisplayed, {
                  oldInstructionHash:
                    n.state.lastInstructionHash || "null_hash",
                  newInstructionHash: e,
                  oldAssignmentId: s.id || "ERR_no_last_assignment_id",
                  newAssignmentId: t.id || "ERR_no_current_assignment_id",
                })),
                n.setState({ lastInstructionHash: e });
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
            (this.acquireAnnotationLock = (function () {
              var e = Gs(function* (e) {
                return Zt.Z.log("Edit lock feature disabled - skipping check");
              });
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.handleInstructionsClose = () => {
              const [e] = this.props.assignments;
              if (C.EDIT_LOCK_ENABLED_TYPES.includes(e.type))
                return (
                  Zt.Z.log("Instructions closed, requesting edit lock"),
                  this.acquireAnnotationLock(e)
                );
            }),
            (this.handleEditHereClick = () => {
              const [e] = this.props.assignments;
              if (C.EDIT_LOCK_ENABLED_TYPES.includes(e.type))
                return (
                  Zt.Z.log("User saw alert and is requesting edit lock"),
                  this.acquireAnnotationLock(e)
                );
            }),
            (this.setEditLockAlert = Gs(function* () {
              return Zt.Z.log(
                "Edit lock feature disabled - skipping setEditLockAlert"
              );
            })),
            (this.onAttachmentLoadingFail = (
              e = "(TODO: pass down error message from task component)"
            ) => {
              u().error(
                "Failed to load the attachment for this task. Please refresh the page \u2013 if this continues happening, skip the task and report that it is not loading correctly.",
                { timeout: "none" }
              );
              const { assignments: t, query: s, user: i } = this.props,
                [{ _id: n, attemptId: o }] = t;
              Zt.Z.error(`Failed to load attachment: ${e.message || e}`, {
                assignmentId: n,
                attemptId: o,
                query: s,
                userId: i._id,
              });
            }),
            (this.onUserFlag = (e, t) => {
              this.props.actions.flagTask(
                this.props.query,
                this.props.assignments[0],
                e,
                t
              );
            }),
            (this.onUserReport = (e, t) => {
              this.props.actions.reportTask(
                this.props.query,
                this.props.assignments[0],
                e,
                t
              ),
                R.c.track("Task Reported", {
                  user: this.props.user._id,
                  attemptId: this.props.assignments[0].attemptId,
                  assignmentId: this.props.assignments[0].id,
                });
            });
          var o = this;
          (this.onUserSkip = (function () {
            var e = Gs(function* (e, t) {
              const s = o.getCurrentAssignments()[0],
                i = o.getProjectIdFromAssignment(s),
                n = yield (0, N.V3)({
                  feature: "experimental-task-speed-performance",
                  querystring: p.stringify({ projectId: i }),
                }),
                r = () =>
                  o.props.actions.skipTask(
                    o.props.query,
                    o.props.assignments[0],
                    e,
                    t
                  );
              return (
                R.c.track("Task Skipped", {
                  user: o.props.user._id,
                  attemptId: o.props.assignments[0].attemptId,
                  assignmentId: o.props.assignments[0].id,
                }),
                o.props.isInstructiveBM ||
                ((((null === s || void 0 === s ? void 0 : s.type) !==
                  I.TaskType.ChatExperimental &&
                  (null === s || void 0 === s ? void 0 : s.type) !==
                    I.TaskType.ChatV2) ||
                  n) &&
                  (null === s || void 0 === s ? void 0 : s.type) !==
                    I.TaskType.Chat)
                  ? r()
                  : o.props.actions.awaitConfirmationForSkipTask(
                      o.props.query,
                      o.props.assignments[0],
                      e,
                      t
                    )
              );
            });
            return function (t, s) {
              return e.apply(this, arguments);
            };
          })()),
            (this.onUserSkipReviewBatch = (e, t) => {
              this.props.actions.skipBatch(
                this.props.query,
                this.props.assignments[0].batch,
                e,
                t
              );
            });
          var r = this;
          this.refreshClaim = (function () {
            var e = Gs(function* (e) {
              ((r.props.user.isCorporateUser || r.props.user.isRemoAdmin) &&
                (r.props.query.force ||
                  (r.props.assignments[0].type === I.TaskType.LidarAnnotation &&
                    !r.isReviewMode))) ||
                r.props.actions.refreshAssignmentClaims({
                  stages: l().flatten(
                    l().map(
                      l().filter(
                        r.props.assignments,
                        (e) =>
                          e.assignmentType === C.AssignmentType.PipelineStage
                      ),
                      (e) =>
                        [e._id]
                          .concat(
                            e.childIds ? l().filter(e.childIds, (e) => !!e) : []
                          )
                          .map((e) => ({ id: e }))
                    )
                  ),
                  attempts: l().flatten(
                    l().map(
                      l().filter(r.props.assignments, (e) =>
                        (0, Rt.isLegacyReviewAssignment)(e)
                      ),
                      (e) =>
                        [e.attemptId.toString()]
                          .concat(
                            e.childIds ? l().filter(e.childIds, (e) => !!e) : []
                          )
                          .map((e) => ({ id: e }))
                    )
                  ),
                  tasks: l().flatten(
                    l().map(
                      l().filter(
                        r.props.assignments,
                        (e) =>
                          !(0, Rt.isLegacyReviewAssignment)(e) &&
                          e.assignmentType !== C.AssignmentType.PipelineStage
                      ),
                      (e) =>
                        [e._id]
                          .concat(
                            e.childIds ? l().filter(e.childIds, (e) => !!e) : []
                          )
                          .map((e) => ({ id: e }))
                    )
                  ),
                  elapsedTime: e,
                  force: !!r.props.query.force,
                });
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var a = this;
          (this.checkClaim = (function () {
            var e = Gs(function* (e) {
              if (
                a.props.user.isCorporateUser &&
                (a.props.query.force ||
                  (a.props.assignments[0].type === I.TaskType.LidarAnnotation &&
                    !a.isReviewMode))
              )
                return;
              const t = a.props.assignments[0];
              if ((0, Rt.isLegacyReviewAssignment)(t)) {
                var s, i;
                a.props.actions.checkAssignmentClaim({
                  attempt: { id: t.attemptId },
                  elapsedTime: e,
                  force: !!a.props.query.force,
                  multiReplicaIndex: t.childIds ? 0 : void 0,
                });
                for (
                  let n = 0;
                  n <
                  (null !==
                    (i =
                      null === (s = t.childIds) || void 0 === s
                        ? void 0
                        : s.length) && void 0 !== i
                    ? i
                    : 0);
                  n++
                )
                  t.childIds[n] &&
                    a.props.actions.checkAssignmentClaim({
                      attempt: { id: t.childIds[n] },
                      elapsedTime: e,
                      force: !!a.props.query.force,
                      multiReplicaIndex: n,
                    });
              } else if (t.assignmentType === C.AssignmentType.PipelineStage) {
                var n, o;
                a.props.actions.checkAssignmentClaim({
                  stage: { id: t._id },
                  elapsedTime: e,
                  force: !!a.props.query.force,
                });
                for (
                  let s = 0;
                  s <
                  (null !==
                    (o =
                      null === (n = t.childIds) || void 0 === n
                        ? void 0
                        : n.length) && void 0 !== o
                    ? o
                    : 0);
                  s++
                )
                  t.childIds[s] &&
                    a.props.actions.checkAssignmentClaim({
                      stage: { id: t.childIds[s] },
                      elapsedTime: e,
                      force: !!a.props.query.force,
                      multiReplicaIndex: s,
                    });
              } else {
                var r, l;
                a.props.actions.checkAssignmentClaim({
                  task: { id: t._id },
                  elapsedTime: e,
                  force: !!a.props.query.force,
                });
                for (
                  let s = 0;
                  s <
                  (null !==
                    (l =
                      null === (r = t.childIds) || void 0 === r
                        ? void 0
                        : r.length) && void 0 !== l
                    ? l
                    : 0);
                  s++
                )
                  t.childIds[s] &&
                    a.props.actions.checkAssignmentClaim({
                      task: { id: t.childIds[s] },
                      elapsedTime: e,
                      force: !!a.props.query.force,
                      multiReplicaIndex: s,
                    });
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
            (this.handleCompleteSupplementalCourse = () => {
              this.props.actions.completeSupplementalCourse(this.props.query);
            }),
            (this.onBonusModalClick = (e) => {
              R.c.track("Bonus modal button clicked"),
                this.props.actions.displayNewBonus(e);
            }),
            (this.completeInstructiveTask = () => {
              this.setState({ displayInstructiveModal: !1 });
            });
          var d = this;
          this.completeAttemptCore = (function () {
            var e = Gs(function* (e, t = {}) {
              if (d.props.fastSubmissionEnabled) {
                const i = Ys({}, t, { fast: !0 }),
                  n = yield d.props.actions.completeAttempt(
                    d.props.query,
                    e,
                    i
                  );
                var s;
                if (n.needsFullSubmission)
                  d.props.actions.completeAttempt(
                    d.props.query,
                    e,
                    Ys({}, t, {
                      subtaskVersion: (
                        +(null !== (s = t.subtaskVersion) && void 0 !== s
                          ? s
                          : "0") + 1
                      ).toString(),
                    })
                  );
                return n;
              }
              return d.props.actions.completeAttempt(d.props.query, e, t);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var m = this;
          this.completeAttempt = (function () {
            var e = Gs(function* (e, t = {}, s = !0) {
              const i = `${t.task_id}:${t.subtaskVersion}`;
              if (
                (Zt.Z.log("Called completeAttempt", {
                  type: e,
                  taskId: null === t || void 0 === t ? void 0 : t.task_id,
                }),
                !m.isDoubleSubmit(i))
              )
                try {
                  var n, o;
                  const i = yield null ===
                    (o = (n = m.props).executeRecaptchaV3) || void 0 === o
                    ? void 0
                    : o.call(n);
                  i && (t = Ys({}, t, { [qt.pr]: i })),
                    w().isMobileUserAgent(window.navigator.userAgent) &&
                      (t.completedOnMobile = !0);
                  const r = yield m.completeAttemptCore(e, t);
                  m.completedTaskCount++,
                    (null === r || void 0 === r ? void 0 : r.trainingAttempt)
                      ? m.setState({
                          feedback: Ys({}, r.trainingAttempt, {
                            closestExpectedResponse: r.closestExpectedResponse,
                            instructionReminder: r.instructionReminder,
                          }),
                        })
                      : m.setState({ feedback: void 0 }, () => {
                          m.finishAttempt(e, s);
                        });
                } catch (r) {
                  const e = m.getCurrentAssignments()[0];
                  u().error((0, Pe.V)(r, e.id), { timeout: "none" });
                }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var h = this;
          this.completeReviewAllChildAssignments = (function () {
            var e = Gs(function* (e, t = l().noop) {
              const s = h.getCurrentAssignments()[0],
                {
                  taskIds: i,
                  nodeIds: n,
                  attempts: o,
                } = yield (0, zs.L7)(s.attemptId, s.user);
              for (let r = 0; r < i.length; r++)
                yield h.completeReviewChildAssignment(
                  Ys({}, e, {
                    nodeId: n[r],
                    taskId: i[r],
                    attemptVersion: o[r],
                    reviewChanges: Ys(
                      {},
                      e.reviewChanges,
                      e.reviewChanges.replicas[r].response
                    ),
                    trueReviewOutcome:
                      e.reviewChanges.replicas[r].taskReviewStatus,
                  }),
                  t
                );
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var g = this;
          this.completeReviewChildAssignment = (function () {
            var e = Gs(function* (e, t = l().noop) {
              const s = Ys({}, g.props.batch.assignments[0], {
                  attemptId: e.nodeId,
                  attemptVersion: e.attemptVersion,
                }),
                i = `${s.attemptId}:${s.attemptVersion}`;
              if (g.isDoubleSubmit(i)) return;
              Zt.Z.log(
                `Complete Review Assignment for: ${
                  s.attemptId
                } with TaskFeedback: ${JSON.stringify(e.taskFeedback)}`
              );
              const n = yield g.props.actions.completeReviewAssignment(
                Ys({}, g.props.query, { taskId: e.taskId }),
                s,
                e,
                t
              );
              return (null === n || void 0 === n ? void 0 : n.trainingAttempt)
                ? g.setState({ feedback: n.trainingAttempt })
                : void 0;
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var f = this;
          this.completeReviewAssignment = (function () {
            var e = Gs(function* (e, t = l().noop) {
              const [s] = f.props.batch.assignments,
                i = `${s.attemptId}:${s.attemptVersion}`;
              if (f.isDoubleSubmit(i)) return;
              Zt.Z.log(
                `Complete Review Assignment for: ${
                  s.attemptId
                } with TaskFeedback: ${JSON.stringify(e.taskFeedback)}`
              );
              const n = yield f.props.actions.completeReviewAssignment(
                f.props.query,
                s,
                e,
                t
              );
              if (null === n || void 0 === n ? void 0 : n.trainingAttempt)
                return f.setState({ feedback: n.trainingAttempt });
              f.completedTaskCount++;
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          var b = this;
          this.onExit = Gs(function* () {
            b.setState({ isFetching: !0 }),
              yield b.props.actions.onExit(b.props.query, b.props.assignments),
              b.setState({ isExitingTask: !0, isFetching: !1 });
          });
          var x = this;
          (this.completeTaskLevelVideoReview = (function () {
            var e = Gs(function* (e) {
              const t = x.getCurrentAssignments();
              yield x.props.actions.completeReviewAssignments(
                x.props.query,
                t,
                e
              ),
                x.completedTaskCount++;
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
            (this.getFeedbackComponent = (e, t) =>
              e === I.TaskType.NamedEntityRecognition
                ? (0, i.jsx)(he.Z, Ys({}, t))
                : e === I.TaskType.TextCollection
                ? (0, i.jsx)(Ut.Z, Ys({}, t))
                : e === I.TaskType.DocumentTranscription
                ? (0, i.jsx)(Ht.Z, Ys({}, t))
                : e === I.TaskType.Chat ||
                  e === I.TaskType.ChatExperimental ||
                  e === I.TaskType.ChatV2
                ? (0, i.jsx)(me.Z, Ys({}, t))
                : (0, i.jsx)(pe.Z, Ys({}, t)));
        }
      }
      var ei = Xs;
      function ti(e) {
        if (
          (r.useEffect(() => {
            let t = "";
            const s = Object.fromEntries(
              new URLSearchParams(window.location.search).entries()
            );
            e.task_id && "subtask" !== e.assignmentType
              ? (t = (0, te.vI)(Ys({}, s, { taskId: e.task_id })))
              : e.id && (t = (0, te.vI)(Ys({}, s, { sceneId: e.id }))),
              t && (window.location.href = t);
          }, []),
          e.currentAuditWorkId)
        ) {
          const t = Object.fromEntries(
              new URLSearchParams(window.location.search).entries()
            ),
            s = (0, te.vI)(Ys({}, t, { sceneId: e.currentAuditWorkId }));
          return (0, i.jsx)("a", {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Open work in a new tab",
          });
        }
        return (0, i.jsx)("div", { children: "Loading lidar lite..." });
      }
      function si(e) {
        return (
          r.useEffect(() => {
            const t = Object.fromEntries(
                new URLSearchParams(window.location.search).entries()
              ),
              s = (0, te.PS)(Ys({}, t, { assignmentId: e.id }));
            s && (window.location.href = s);
          }, []),
          (0, i.jsx)("div", { children: "Loading video captioning tool..." })
        );
      }
      var ii = s(572111),
        ni = s.n(ii),
        oi = s(456552),
        ri = s(711719),
        ai = s.n(ri),
        li = s(520977),
        ci = s(463953);
      const di = (0, $t.ZL)({
        container: { height: "100%", display: "flex", flexDirection: "column" },
        top: ({ topHeight: e }) => ({ height: e }),
        centerRow: { display: "flex", flex: 1 },
        left: ({ leftWidth: e }) => ({ width: e }),
        main: { flex: 1 },
        right: ({ rightWidth: e }) => ({ width: e }),
      });
      var ui = (e) => {
          var t, s, n;
          const o = di({
            topHeight: null !== (t = e.topHeight) && void 0 !== t ? t : 56,
            leftWidth: null !== (s = e.leftWidth) && void 0 !== s ? s : 56,
            rightWidth: null !== (n = e.rightWidth) && void 0 !== n ? n : 360,
          });
          return (0, i.jsxs)("div", {
            className: o.container,
            children: [
              (0, i.jsx)("div", { className: o.top, children: e.top }),
              (0, i.jsxs)("div", {
                className: o.centerRow,
                children: [
                  (0, i.jsx)("div", { className: o.left, children: e.left }),
                  (0, i.jsx)("div", { className: o.main, children: e.main }),
                  (0, i.jsx)("div", { className: o.right, children: e.right }),
                ],
              }),
              (0, i.jsx)("div", {}),
            ],
          });
        },
        pi = s(138944);
      var mi = () =>
          (0, i.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", { d: "M12 24L0 12H12V24Z", fill: "#DD45D3" }),
              (0, i.jsx)("path", { d: "M24 24L0 0H24V24Z", fill: "#943CFF" }),
              (0, i.jsx)("path", { d: "M6 24L0 18H6V24Z", fill: "#FD9D52" }),
            ],
          }),
        hi = s(58739);
      const gi = (0, $t.ZL)({
        container: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#943CFF19",
          "&.remotasks": { background: "#29CD9C26" },
        },
      });
      var fi = (e) => {
          const t = gi();
          return (0, i.jsx)("div", {
            className: (0, pi.default)(t.container, { remotasks: e.remotasks }),
            children: e.remotasks ? (0, i.jsx)(hi.Z, {}) : (0, i.jsx)(mi, {}),
          });
        },
        bi = s(792739);
      const xi = (0, $t.ZL)({
        statusBarItem: {
          fontSize: "11px",
          lineHeight: "16px",
          margin: "0 8px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "4px 8px",
          borderRadius: 8,
          cursor: "pointer",
          "&:hover": { background: "var(--color-RemoGray05)" },
        },
        name: { fontWeight: 500, display: "flex", alignItems: "center" },
        icon: { marginLeft: 5.35, color: "var(--color-RemoGray50)" },
        value: {
          marginTop: 4,
          color: "black",
          maxWidth: 200,
          overflow: "auto",
        },
      });
      var vi = (e) => {
          const t = xi();
          return (0, i.jsxs)("div", {
            className: t.statusBarItem,
            children: [
              (0, i.jsxs)("div", {
                className: t.name,
                children: [
                  e.name,
                  (0, i.jsxs)("span", {
                    className: t.icon,
                    children: [
                      e.icon,
                      !e.icon && (0, i.jsx)(bi.G, { icon: "info-circle" }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: t.value, children: e.value }),
            ],
          });
        },
        yi = s(832561),
        ki = s(105633);
      const ji = (0, $t.ZL)({
        container: { height: "100%", display: "flex" },
        logo: { width: 56 },
        statusBar: { display: "flex", alignItems: "center" },
        actionButtons: {
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          "& > *": { marginRight: 16 },
        },
      });
      var wi = (e) => {
        var t, s, n;
        const { assignmentJson: o, assignmentActions: r } = e,
          a = ji(),
          c = l().compact([
            { name: "Project", value: o.projectName },
            {
              name: "Task ID",
              value: (0, yi.Z)(o) ? o.subtaskId : o.assignmentId,
            },
            o.isReview && { name: "Review ID", value: o.assignmentId },
          ]),
          d = l().compact([
            {
              variant: "text",
              type: "tertiary",
              name: "Skip",
              onClick: null === r || void 0 === r ? void 0 : r.skip,
            },
            o.isReview && {
              variant: "contained",
              type: "warning",
              name: "Fix",
              onClick: null === r || void 0 === r ? void 0 : r.makeChanges,
            },
            o.isReview && {
              variant: "contained",
              type: "success",
              name: "Accept",
              onClick: null === r || void 0 === r ? void 0 : r.accept,
            },
            !o.isReview && {
              variant: "contained",
              type: "success",
              name: "Submit",
              onClick: null === r || void 0 === r ? void 0 : r.submit,
            },
          ]),
          u = l().compact([
            o.isReview && {
              name: "Send back to queue",
              onClick: null === r || void 0 === r ? void 0 : r.reject,
              style: { color: "var(--color-RemoRed)" },
            },
            {
              name: "Report issue",
              onClick:
                null === (t = e.interfaceManager) || void 0 === t
                  ? void 0
                  : t.toggleShowingIssueReporter,
              divider: !0,
            },
            {
              name: "View instructions",
              onClick:
                null === (s = e.interfaceManager) || void 0 === s
                  ? void 0
                  : s.toggleShowingInstructions,
            },
            {
              name: "View shortcuts",
              onClick:
                null === (n = e.interfaceManager) || void 0 === n
                  ? void 0
                  : n.toggleShowingShortcuts,
            },
          ]);
        return (0, i.jsxs)("div", {
          className: a.container,
          children: [
            (0, i.jsx)("div", {
              className: a.logo,
              children: (0, i.jsx)(fi, { remotasks: !0 }),
            }),
            (0, i.jsx)("div", {
              className: a.statusBar,
              children: c.map((e) =>
                (0, i.jsx)(vi, { name: e.name, value: e.value }, e.name)
              ),
            }),
            (0, i.jsxs)("div", {
              className: a.actionButtons,
              children: [
                d.map((e) =>
                  (0, i.jsx)(
                    Q.Yd,
                    {
                      onClick: e.onClick,
                      type: e.type,
                      variant: e.variant,
                      children: e.name,
                    },
                    e.name
                  )
                ),
                (0, i.jsx)(Q.Qy, {
                  children: u.map((e) =>
                    (0, i.jsx)(
                      ki.Z,
                      {
                        style: e.style,
                        divider: !!e.divider,
                        onClick: e.onClick,
                        children: e.name,
                      },
                      e.name
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      };
      var Si = (e) => {
          var t;
          if (
            "imageannotation" !==
            (null === (t = e.assignmentJson) || void 0 === t ? void 0 : t.type)
          )
            throw new Error("Only imageannotation is supported");
          return (0, i.jsx)(ui, {
            top: (0, i.jsx)(wi, { assignmentJson: e.assignmentJson }),
          });
        },
        Ti = s(267560),
        Ci = s(451674),
        Ii = s(279220),
        Ri = s(75384),
        Pi = s(537425),
        Ai = s(469906),
        Ei = s(700190),
        Oi = s(335855);
      function Ni(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function Li(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              Ni(o, i, n, r, a, "next", e);
            }
            function a(e) {
              Ni(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function _i(e, t, s) {
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
      function Fi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              _i(e, t, s[t]);
            });
        }
        return e;
      }
      var Di = (e) => {
          const { 0: t, 1: s } = (0, r.useState)(void 0),
            { 0: i, 1: n } = (0, r.useState)(null),
            { 0: o, 1: a } = (0, r.useState)(void 0),
            { 0: c, 1: d } = (0, r.useState)(void 0),
            { 0: u, 1: p } = (0, r.useState)(void 0),
            { 0: m, 1: h } = (0, r.useState)(),
            { 0: g, 1: f } = (0, r.useState)(),
            { 0: b, 1: x } = (0, r.useState)(void 0),
            v = {
              projectId: e ? e.projectId : void 0,
              subtaskId: e
                ? (0, yi.Z)(e)
                  ? e.subtaskId
                  : e.assignmentId
                : void 0,
            };
          (0, Ii.Z)(
            Li(function* () {
              if (e && (0, Ai.o)(e)) {
                const e = `internal/namedentityrecognition/project/${v.projectId}`,
                  t = yield (0, k.ZP)(null, e);
                a(t.showSidebar);
              }
            }),
            [v.projectId]
          ),
            (0, Ii.Z)(
              Li(function* () {
                if (
                  (null === e || void 0 === e ? void 0 : e.assignmentId) &&
                  (e.type === I.TaskType.ChatExperimental ||
                    e.type === I.TaskType.ChatV2)
                ) {
                  const t = `internal/chatv2/${e.assignmentId}/disableRegen`,
                    s = yield (0, k.ZP)(null, t);
                  x(s.disableRegen);
                }
              }),
              [null === e || void 0 === e ? void 0 : e.assignmentId]
            ),
            (0, Ii.Z)(
              Li(function* () {
                if (!v.subtaskId) return;
                const e = `internal/guided_workflow/subtask/${v.subtaskId}`,
                  t = yield (0, k.ZP)(null, e);
                t && t.enabled && s(t.workflow);
              }),
              [v.projectId, v.subtaskId]
            ),
            (0, Ii.Z)(
              Li(function* () {
                if (!v.subtaskId) return;
                const e = `internal/multi_source_data/subtask/${v.subtaskId}`,
                  t = yield (0, k.ZP)(null, e);
                t && n(t.multiSourceMetadata);
              }),
              [v.projectId, v.subtaskId]
            ),
            (0, Ii.Z)(
              Li(function* () {
                if (!v.projectId) return;
                const e = yield (0, k.ZP)(
                  null,
                  `internal/ontology/${v.projectId}`
                );
                e &&
                  (e.ontologyHistory &&
                    e.ontologyHistory.length > 0 &&
                    h(e.ontologyHistory),
                  f(e.ontologyInstructions));
              }),
              [v.projectId]
            ),
            (0, Ii.Z)(
              Li(function* () {
                if (!v.subtaskId) return;
                const e = `internal/initialMessage/${v.subtaskId}`,
                  t = yield (0, k.ZP)(null, e);
                d(t);
              }),
              [v.subtaskId]
            ),
            (0, Ii.Z)(
              Li(function* () {
                if (!v.projectId) return;
                const e = `internal/spotter/audit_feedback?projectId=${v.projectId}`,
                  t = yield (0, k.ZP)(null, e);
                p(t.spotterFeedback);
              }),
              [v.projectId]
            );
          const y = (0, r.useContext)(Ri.ZP),
            j =
              !l().includes(
                C.twoDTypes,
                null === e || void 0 === e ? void 0 : e.type
              ) &&
              (null === e || void 0 === e ? void 0 : e.type) !==
                I.TaskType.DocumentTranscription &&
              (null === e || void 0 === e ? void 0 : e.type) !==
                I.TaskType.TextCollection &&
              (null === e || void 0 === e ? void 0 : e.type) !==
                I.TaskType.Chat &&
              (null === e || void 0 === e ? void 0 : e.type) !==
                I.TaskType.ChatExperimental &&
              (null === e || void 0 === e ? void 0 : e.type) !==
                I.TaskType.ChatV2,
            w =
              (0, T.o5)("can-leave-inline-comments", {}, { shortCircuit: j }) ||
              (null === e || void 0 === e ? void 0 : e.isScaleStudio),
            S = (e, t) =>
              -1 === e ||
              (t && (0, yi.Z)(t) && t.reviewLevel >= e) ||
              (t &&
                (0, yi.Z)(t) &&
                e === C.ReviewLevel.QIRLeadAuditor &&
                t.reviewLevel === C.ReviewLevel.QIRLeadAuditor) ||
              (t &&
                (0, yi.Z)(t) &&
                e === C.ReviewLevel.QIRAuditor &&
                (t.reviewLevel === C.ReviewLevel.QIRAuditor ||
                  t.reviewLevel === C.ReviewLevel.QIRLeadAuditor)),
            R = null === e || void 0 === e ? void 0 : e.projectConfig,
            P = !l().isNil(R) || j,
            A = (0, Ei.h)(
              `internal/config/${
                null === e || void 0 === e ? void 0 : e.projectId
              }`,
              { shouldShortCircuit: P }
            ),
            E = null !== R && void 0 !== R ? R : A.response;
          var O;
          const N =
            null !==
              (O =
                null === E || void 0 === E ? void 0 : E.spotterReviewLevel) &&
            void 0 !== O
              ? O
              : C.defaultSpotterReviewLevel;
          var L;
          const _ =
              w ||
              S(
                null !==
                  (L =
                    null === E || void 0 === E
                      ? void 0
                      : E.inlineCommentsFromReview) && void 0 !== L
                  ? L
                  : 10,
                e
              ) ||
              ((null === E || void 0 === E ? void 0 : E.isSpotterEnabled) &&
                S(N, e) &&
                (null === E || void 0 === E
                  ? void 0
                  : E.inlineCommentsEnabled)) ||
              !!localStorage.canLeaveInlineComments,
            F = {
              loggedUserId: null === y || void 0 === y ? void 0 : y._id,
              taskerWorkflowDefinition: t,
              gisMultiSourceMetadata: i,
              initialMessage: c,
              ontologyHistory: m,
              ontologyInstructions: g,
              config: E,
              spotterAuditFeedback: u,
            },
            D = (0, T.o5)(
              "can-reject-with-changes",
              { projectId: null === e || void 0 === e ? void 0 : e.projectId },
              { shortCircuit: j }
            ),
            M =
              ((z = e),
              !(-1 === (Z = 8) || (z && (0, yi.Z)(z) && z.reviewLevel === Z)) &&
                (D || _ || !!localStorage.canRejectWithChanges));
          var Z, z;
          const B =
              (0, T.o5)(
                "minimap",
                {
                  projectId: null === e || void 0 === e ? void 0 : e.projectId,
                },
                { shortCircuit: j }
              ) || !!localStorage.minimap,
            U = !!t,
            H = !!i,
            q = (0, T.o5)(
              "can-hide-resolved-and-outdated-comments",
              { projectId: null === e || void 0 === e ? void 0 : e.projectId },
              { shortCircuit: j }
            ),
            $ =
              (0, T.o5)(
                "annotation-review-checklist",
                {
                  projectId: null === e || void 0 === e ? void 0 : e.projectId,
                },
                { shortCircuit: j }
              ) || !!localStorage.annotationReviewChecklist,
            V =
              ((0, T.o5)(
                "block-submission-on-annotation-review-checklist",
                {
                  projectId: null === e || void 0 === e ? void 0 : e.projectId,
                },
                { shortCircuit: j }
              ) ||
                !!localStorage.blockSubmissionOnAnnotationReviewChecklist) &&
              !l().includes(
                ["R12", "R10"],
                null === e || void 0 === e ? void 0 : e.loggedUserDisplayName
              ),
            Q =
              (0, T.o5)(
                "use-bee-autolinking",
                {
                  projectId: null === e || void 0 === e ? void 0 : e.projectId,
                },
                { shortCircuit: j }
              ) || !!localStorage.useBeeAutolinking;
          var W;
          const G = (0, r.useMemo)(() => {
              var t;
              return !!l().find(
                null !==
                  (W =
                    null ===
                      (t = null === e || void 0 === e ? void 0 : e.params) ||
                    void 0 === t
                      ? void 0
                      : t.context_attachments) && void 0 !== W
                  ? W
                  : [],
                (e) => e.type === Oi.ContextAttachmentType.GIS_PHOTOCOLOR_PNG_V1
              );
            }, [null === e || void 0 === e ? void 0 : e.params]),
            J =
              ((0, T.o5)(
                "populate-lint-dismissal-l12",
                {
                  projectId: null === e || void 0 === e ? void 0 : e.projectId,
                },
                { shortCircuit: j }
              ) &&
                12 === (null === e || void 0 === e ? void 0 : e.reviewLevel)) ||
              !!localStorage.populateLintDismissal,
            Y =
              (0, T.o5)(
                "gis-show-goat-connections",
                {
                  projectId: null === e || void 0 === e ? void 0 : e.projectId,
                },
                { shortCircuit: j }
              ) || localStorage.gisShowGoatConnections,
            K =
              (0, T.o5)(
                "allow-create-lane-center-with",
                {
                  projectId: null === e || void 0 === e ? void 0 : e.projectId,
                },
                { shortCircuit: j }
              ) || localStorage.allowCreateLaneCenterWith,
            X = Fi({}, (0, Pi.T)(e), {
              canLeaveInlineComments: _,
              canSeeInlineComments: !0,
              canRejectWithChanges: M,
              canHideResolvedAndOutdatedComments: q,
              canAccessMinimap: B,
              canUseGuidedWorkflowBar: U,
              useReviewedAnnotationCheckmark: $,
              blockSubmissionOnAnnotationReviewChecklist: V,
              showSidebar: o,
              useBeeGisAutolinking: Q,
              populateFalsePositiveDismissalsOnTaskLoad: J,
              gisShowGoatConnections: Y,
              canUseMultiSourceData: H,
              hasPhotocolorContext: G,
              allowCreateLaneCenterWith: K,
              disableRegen: b,
            });
          var ee;
          if (e)
            return Fi({}, e, F, {
              featureFlags: X,
              isQueue: !0,
              projectConfig: E,
              reviewLevel:
                null !== (ee = e.reviewLevel) && void 0 !== ee
                  ? ee
                  : C.ReviewLevel.Attempt,
            });
        },
        Mi = s(551556);
      const Zi = "script";
      function zi(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function Bi({ siteKey: e, projectId: t }) {
        const s = `https://www.google.com/recaptcha/api.js?render=${e}`,
          { 0: i, 1: n } = (0, r.useState)("init"),
          o =
            (0, T.ZP)("use-recaptcha-v3", { projectId: t }, !1) ||
            localStorage.runRecaptchaV3Local;
        (0, Mi.Z)(() => {
          const e = "google-recaptcha-v3";
          return (
            !O.IS_FEDERAL &&
              o &&
              (function (e, t, s, i, n) {
                const o = e.getElementsByTagName(Zi)[0],
                  r = o;
                let a = o;
                (a = e.createElement(Zi)),
                  (a.id = t),
                  (a.src = s),
                  r && r.parentNode
                    ? r.parentNode.insertBefore(a, r)
                    : e.head.appendChild(a),
                  (a.onerror = n),
                  (a.onload = i);
              })(
                document,
                e,
                s,
                () => {
                  grecaptcha.ready(function () {
                    n("ready");
                  });
                },
                () => {
                  n("error");
                }
              ),
            () => {
              !(function (e, t) {
                const s = e.getElementById(t);
                var i;
                s &&
                  (null === (i = s.parentNode) ||
                    void 0 === i ||
                    i.removeChild(s));
              })(document, e),
                n("unmounted");
            }
          );
        }, [s, o]);
        const a = (function () {
          var t,
            s =
              ((t = function* () {
                if (O.IS_FEDERAL || !o || "ready" !== i) return null;
                try {
                  return yield grecaptcha.execute(e, { action: "submit" });
                } catch (s) {
                  var t;
                  const e = `Google recatchaV3 error: ${
                    null !==
                      (t = null === s || void 0 === s ? void 0 : s.message) &&
                    void 0 !== t
                      ? t
                      : "undefined"
                  }`;
                  u().error(e, { timeout: 3e3 });
                }
                return null;
              }),
              function () {
                var e = this,
                  s = arguments;
                return new Promise(function (i, n) {
                  var o = t.apply(e, s);
                  function r(e) {
                    zi(o, i, n, r, a, "next", e);
                  }
                  function a(e) {
                    zi(o, i, n, r, a, "throw", e);
                  }
                  r(void 0);
                });
              });
          return function () {
            return s.apply(this, arguments);
          };
        })();
        return { executeRecaptchaV3: a };
      }
      var Ui = (e) => {
          const t =
              (null === e || void 0 === e ? void 0 : e.loggedUserId) +
              "-" +
              (null === e || void 0 === e ? void 0 : e.assignmentId),
            [s, i] = r.useState(
              JSON.parse(localStorage.getItem(t)) || {
                count: 0,
                key: t,
                featureFlags: {},
              }
            );
          return (
            e &&
              e.featureFlags &&
              !l().isEqual(e.featureFlags, s.featureFlags) &&
              ((0, zt.Kz)(Bt.j.AssignmentJsonFeatureFlagsLog, {
                count: s.count + 1,
                projectName: e.projectName,
                projectId: e.projectId,
                type: e.type,
                loggedUserId: e.loggedUserId,
                assignmentId: e.assignmentId,
                assignmentFeatureFlags: e.featureFlags,
              }),
              i({ count: s.count + 1, key: t, featureFlags: e.featureFlags })),
            (0, r.useEffect)(() => {
              try {
                localStorage.setItem(t, JSON.stringify(s));
              } catch (e) {
                Zt.Z.warn(e.message), localStorage.removeItem(t);
              }
            }, [t, s]),
            s
          );
        },
        Hi = s(421805),
        qi = s(780892);
      function $i(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function Vi(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              $i(o, i, n, r, a, "next", e);
            }
            function a(e) {
              $i(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function Qi(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      const Wi = (0, $t.ZL)(() => ({
        buttonProgress: {
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: -12,
          marginLeft: -12,
        },
        buttonContainer: { position: "relative" },
      }));
      function Gi(e, t, s) {
        const i = [],
          n = e.split(t);
        for (let o = 0; o < n.length - 1; o++) i.push(n[o]), i.push(s);
        return i.push(n[n.length - 1]), i;
      }
      function Ji(e, t) {
        let s = [e];
        for (const [i, n] of Object.entries(t))
          s = l().flatMap(s, (e) =>
            "string" === typeof e && e.match(`{${i}}`) ? Gi(e, `{${i}}`, n) : e
          );
        return s;
      }
      var Yi = (e) => {
          var { currentAssignment: t } = e,
            s = Qi(e, ["currentAssignment"]);
          const { t: n } = (0, Hi.$G)("priceDiscovery"),
            r = Wi(),
            a = t.project._id,
            l = t.project.permissionGroup.title,
            c = t.rateConsent,
            d = c.lowerBound,
            u = c.upperBound,
            p = c.medianTimeSpentLowerBound,
            m = c.medianTimeSpentUpperBound,
            h = c.reviewLevel,
            [g, f] = (0, qi.Z)(
              Vi(function* () {
                try {
                  return yield s.actions.rejectProjectPricing(a, c);
                } catch (e) {
                  (0, k.vj)(e, { handleHttp: !0 });
                }
              }),
              [a, c]
            ),
            [b, x] = (0, qi.Z)(
              Vi(function* () {
                try {
                  return yield s.actions.acceptProjectPricing(a, c);
                } catch (e) {
                  (0, k.vj)(e, { handleHttp: !0 });
                }
              }),
              [a, c]
            ),
            v = g.loading || b.loading;
          return (0, i.jsxs)("div", {
            className: "jsx-cec53ce246701d63 page",
            children: [
              (0, i.jsxs)("div", {
                className: "jsx-cec53ce246701d63 content",
                children: [
                  (0, i.jsxs)("div", {
                    className: "jsx-cec53ce246701d63 header",
                    children: [l, " Pay Estimate"],
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-cec53ce246701d63 prediction",
                    children: [
                      n("greeting"),
                      (0, i.jsx)("br", { className: "jsx-cec53ce246701d63" }),
                      (0, i.jsx)("br", { className: "jsx-cec53ce246701d63" }),
                      Ji(n("prediction"), {
                        reviewLevel: n(-1 === h ? "attempters" : "reviewers"),
                        project: (0, i.jsx)("span", {
                          className: "jsx-cec53ce246701d63 bold",
                          children: l,
                        }),
                        quality: (0, i.jsx)("b", {
                          className: "jsx-cec53ce246701d63",
                          children: n("quality"),
                        }),
                        range: (0, i.jsxs)("span", {
                          className: "jsx-cec53ce246701d63 bold",
                          children: [" ", "$", d, "-", u, " "],
                        }),
                        time: (0, i.jsxs)("span", {
                          className: "jsx-cec53ce246701d63 bold",
                          children: [p, "-", m],
                        }),
                      }),
                      (0, i.jsx)("br", { className: "jsx-cec53ce246701d63" }),
                      (0, i.jsx)("br", { className: "jsx-cec53ce246701d63" }),
                      Ji(n("question"), {
                        project: (0, i.jsx)("span", {
                          className: "jsx-cec53ce246701d63 bold",
                          children: l,
                        }),
                        temporarily: (0, i.jsx)("b", {
                          className: "jsx-cec53ce246701d63",
                          children: n("temporarily"),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-cec53ce246701d63 warning",
                    children: [
                      "\u26a0\ufe0f ",
                      n("warning"),
                      " \u26a0\ufe0f :",
                      (0, i.jsx)("br", { className: "jsx-cec53ce246701d63" }),
                      (0, i.jsx)("br", { className: "jsx-cec53ce246701d63" }),
                      (0, i.jsxs)("ul", {
                        className: "jsx-cec53ce246701d63",
                        children: [
                          (0, i.jsx)("li", {
                            className: "jsx-cec53ce246701d63",
                            children: Ji(n("ifyoupause"), {
                              project: (0, i.jsx)("span", {
                                className: "jsx-cec53ce246701d63 bold",
                                children: l,
                              }),
                              reject: (0, i.jsx)("b", {
                                className: "jsx-cec53ce246701d63",
                                children: n("option-reject"),
                              }),
                              temporarily: (0, i.jsx)("b", {
                                className: "jsx-cec53ce246701d63",
                                children: n("temporarily"),
                              }),
                              nolonger: (0, i.jsx)("b", {
                                className: "jsx-cec53ce246701d63",
                                children: n("nolonger"),
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            className: "jsx-cec53ce246701d63",
                            children: Ji(n("ifyouaccept"), {
                              project: (0, i.jsx)("span", {
                                className: "jsx-cec53ce246701d63 bold",
                                children: l,
                              }),
                              accept: (0, i.jsx)("b", {
                                className: "jsx-cec53ce246701d63",
                                children: n("option-accept"),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-cec53ce246701d63 button-row",
                    children: [
                      (0, i.jsx)(Q.u, {
                        title: n("tooltip-reject"),
                        children: (0, i.jsxs)("div", {
                          className:
                            "jsx-cec53ce246701d63 " + (r.buttonContainer || ""),
                          children: [
                            (0, i.jsx)(Ue.zx, {
                              className: "reject-button",
                              style: { marginRight: 10 },
                              type: "tertiary",
                              onClick: f,
                              disabled: v,
                              children: n("option-reject"),
                            }),
                            g.loading &&
                              (0, i.jsx)(Q.D8, {
                                size: 24,
                                className: r.buttonProgress,
                              }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(Q.u, {
                        title: n("tooltip-accept"),
                        children: (0, i.jsxs)("div", {
                          className:
                            "jsx-cec53ce246701d63 " + (r.buttonContainer || ""),
                          children: [
                            (0, i.jsx)(Ue.zx, {
                              type: "primary",
                              onClick: x,
                              disabled: v,
                              children: n("option-accept"),
                            }),
                            b.loading &&
                              (0, i.jsx)(Q.D8, {
                                size: 24,
                                className: r.buttonProgress,
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(o(), {
                id: "cec53ce246701d63",
                children:
                  ".page.jsx-cec53ce246701d63{height:100vh;width:100vw;overflow:auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--color-RemoGray01)}.content.jsx-cec53ce246701d63{width:80vw;max-width:1080px;margin-top:64px;-webkit-box-shadow:0px 4px 8px rgba(0,0,0,.05);-moz-box-shadow:0px 4px 8px rgba(0,0,0,.05);box-shadow:0px 4px 8px rgba(0,0,0,.05);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:white;overflow:hidden}.content.jsx-cec53ce246701d63>div.jsx-cec53ce246701d63{padding:32px}.header.jsx-cec53ce246701d63{background-color:var(--color-RemoGreen);padding:20px 32px!important;color:white;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.title.jsx-cec53ce246701d63{font-size:20px}.bold.jsx-cec53ce246701d63{color:var(--color-RemoGreen);font-weight:bold}.prediction.jsx-cec53ce246701d63{font-size:18px}.warning.jsx-cec53ce246701d63{font-size:18px}.button-row.jsx-cec53ce246701d63{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}",
              }),
            ],
          });
        },
        Ki = s(812326),
        Xi = s(277631),
        en = s(680840),
        tn = s(823935),
        sn = s(722030),
        nn = s(997847),
        on = s(25722);
      function rn(e, t, s) {
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
      function an(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      const ln = (e) => {
        var { taskText: t, payText: s } = e,
          n = an(e, ["taskText", "payText"]);
        const o = (0, c.useRouter)(),
          r = (0, on.Z)();
        return (0, i.jsx)("div", {
          className: "flex items-center justify-center h-[100%]",
          children: (0, i.jsxs)("div", {
            className: "flex flex-col gap-4 items-center p-4 relative",
            children: [
              (0, i.jsx)("img", {
                className: "w-auto h-[120px] pl-8",
                src: n.skippedTask
                  ? "/static/img/outlier/skip.svg"
                  : "/static/img/outlier/check.svg",
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-2 w-[500px] items-center",
                children: [
                  (0, i.jsx)("div", {
                    className: "my-[12px]",
                    children: (0, i.jsx)(Bs.ZT.H3, {
                      className: "text-back",
                      children: t,
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "border-t-[1px] border-neutral-300 w-[100%]",
                  }),
                ],
              }),
              s
                ? (0, i.jsxs)("div", {
                    className:
                      "flex flex-col align-center justify-center gap-4 w-[100%] ",
                    children: [
                      s.map((e, t) =>
                        0 === t
                          ? (0, i.jsx)(
                              Bs.ZT.H5,
                              {
                                className: "text-black text-center",
                                children: e,
                              },
                              t
                            )
                          : (0, i.jsx)(
                              Bs.ZT.Paragraph1,
                              {
                                className: "text-black text-center",
                                children: e,
                              },
                              t
                            )
                      ),
                      (0, i.jsx)("div", {
                        className: "border-t-[1px] border-neutral-300 w-[100%]",
                      }),
                    ],
                  })
                : null,
              (0, i.jsx)("div", {
                className: "mb-4 w-[500px]",
                children: n.skippedTask
                  ? (0, i.jsx)("div", {
                      className: "text-sm text-center w-[100%]",
                      children:
                        "To continue tasking, click the button below to proceed. Note that once a task is found the task's claim timer will begin.",
                    })
                  : (0, i.jsx)(Bs.ZT.Paragraph1, {
                      className: "text-neutral-500",
                      children:
                        "It may take a few minutes for your pay to reflect in the earnings tab",
                    }),
              }),
              (0, i.jsxs)("div", {
                className: "flex gap-2",
                children: [
                  (0, i.jsx)(Yt.zx, {
                    className: "w-[160px] justify-center",
                    variant: "neutral",
                    size: "lg",
                    onClick: () => {
                      o.push(r("/en/expert"));
                    },
                    children: (0, i.jsx)(Bs.ZT.Paragraph3, {
                      children: "Return to dashboard",
                    }),
                  }),
                  (0, i.jsx)(Yt.zx, {
                    className: "w-[160px] justify-center",
                    variant: "primary",
                    size: "lg",
                    onClick: () => {
                      var e, t, s, i, o;
                      n.skippedTask
                        ? (null === (e = n.actions) ||
                            void 0 === e ||
                            e.confirmReadyForNextTask(),
                          null === (t = n.actions) ||
                            void 0 === t ||
                            t.nextTask(
                              n.query,
                              void 0 !==
                                (null === (s = n.userFromGetInitialProps) ||
                                void 0 === s
                                  ? void 0
                                  : s.qaTeamId)
                            ))
                        : (null === (i = n.actions) ||
                            void 0 === i ||
                            i.confirmReadyForNextTask(),
                          null === (o = n.actions) ||
                            void 0 === o ||
                            o.fetchNextAssignmentsOnSkip(n.query));
                    },
                    children: (0, i.jsx)(Bs.ZT.Paragraph3, {
                      className: "text-secondary-600",
                      children: "Continue tasking",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var cn = l().flowRight(
          Ki.ZP,
          Xi.Z
        )(
          (0, li.$j)(
            ci.K,
            ci.ZS
          )((e) =>
            (0, i.jsx)(
              ln,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var s = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(s);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(s).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable;
                      })
                    )),
                    i.forEach(function (t) {
                      rn(e, t, s[t]);
                    });
                }
                return e;
              })({}, e)
            )
          )
        ),
        dn = s(579042),
        un = s(996724),
        pn = s(704292);
      function mn(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function hn(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              mn(o, i, n, r, a, "next", e);
            }
            function a(e) {
              mn(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function gn(e, t, s) {
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
      const fn = ({ projectId: e, reviewLevel: t, user: s }) => {
        const n = (0, oi.useQueryClient)(),
          o = (0, c.useRouter)(),
          a = (0, on.Z)(),
          d = (0, un.Z)(e),
          u = (0, pn.z)(),
          { data: p, isLoading: m } = (0, Ti.s)({
            projectId: e,
            reviewLevel: String(t),
          }),
          { isLoading: h, data: g } = (0, T._z)(
            "outlier-marketplace",
            { userId: s.id },
            !1
          ),
          f = null === p || void 0 === p ? void 0 : p.payRateInfo,
          b = () => {
            o.push(a("/en/expert"));
          },
          {
            hourlyRate: x,
            uncappedHourlyPayRate: v,
            maxHourlyPayRate: y,
            legacyHourlyRate: j,
            payRateId: w,
            isStrataEnabledForProject: S,
            isFirstTimeStrataRate: C,
            isStrataHourlyRateChange: I,
          } = f || {},
          { 0: P, 1: A } = (0, r.useState)(!1),
          E = (function () {
            var i = hn(function* () {
              if (!(l().isNil(e) || l().isNil(t) || l().isNil(f))) {
                R.c.track("Accept post-task pay rate change", {
                  workerId: s.id,
                  projectId: e,
                  isMarketplaceUser: g,
                  isPayRateChange: I,
                  isFirstTimePayRate: C,
                  payRateId: w,
                }),
                  A(!0);
                try {
                  yield d.mutateAsync({
                    projectId: e,
                    reviewLevel: t,
                    hourlyRate: x,
                    payRateId: w,
                  }),
                    n.invalidateQueries(["pay-rate", e]),
                    n.invalidateQueries(["payRate", e]);
                } catch (i) {
                  return void A(!1);
                }
              }
            });
            return function () {
              return i.apply(this, arguments);
            };
          })(),
          O = (function () {
            var i = hn(function* () {
              if (l().isNil(e) || l().isNil(t) || l().isNil(f)) return;
              A(!0);
              const i = "rejecting pay rate change pre-task";
              R.c.track("Reject project", {
                workerId: s._id,
                projectId: e,
                reason: i,
                normalPayRate: v,
                cappedPayRate: y,
                baseRate: x,
                strataEnabled: S,
                isPayRateChange: I,
                isFirstTimePayRate: C,
                strataHourlyRate: S ? x : void 0,
                legacyHourlyRate: S ? j : void 0,
                isMarketplaceUser: g,
                payRateId: w,
              });
              try {
                yield u.mutateAsync({ projectId: e, isPaused: !1, reason: i });
              } catch (n) {
                return (0, k.vj)(n, { handleHttp: !0 }), void A(!1);
              }
              b();
            });
            return function () {
              return i.apply(this, arguments);
            };
          })(),
          N = !g || !C;
        return m || !f || h
          ? (0, i.jsx)("div", {
              className: "flex justify-center h-[100vh] items-center",
              children: (0, i.jsx)(sn.$, { size: "sm" }),
            })
          : (0, i.jsx)("div", {
              className: "flex items-center justify-center h-[100%]",
              children: (0, i.jsxs)("div", {
                className: "flex flex-col gap-4 items-center p-4 relative",
                children: [
                  (0, i.jsx)("img", {
                    className: "w-auto h-[120px] pl-8 mb-3",
                    src: "/static/img/outlier/info.svg",
                  }),
                  (0, i.jsxs)("div", {
                    className: "my-4",
                    children: [
                      (0, i.jsx)(Bs.ZT.H3, {
                        className: "text-back text-center",
                        children: C
                          ? "Accept Project Pay Terms"
                          : "Updated Project Pay Terms",
                      }),
                      (0, i.jsx)(dn.G_, {
                        payRateInfo: f,
                        isPayRateChangeScreen: !0,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "border-t-[1px] mb-6 border-neutral-300 w-[80%]",
                  }),
                  (0, i.jsx)(Bs.ZT.Paragraph1, {
                    className: "text-neutral-500 text-center mb-4",
                    children: "To continue tasking, click the button below.",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex w-[800px] justify-center gap-2",
                    children: [
                      N &&
                        (0, i.jsx)(Yt.zx, {
                          className: "w-[330px] justify-center",
                          variant: "neutral",
                          size: "lg",
                          disabled: P || d.isLoading || u.isLoading,
                          onClick: O,
                          children: (0, i.jsx)(Bs.ZT.Paragraph3, {
                            children: "Reject project",
                          }),
                        }),
                      (0, i.jsx)(Yt.zx, {
                        className: "w-[330px] justify-center",
                        variant: "primary",
                        size: "lg",
                        disabled: P || d.isLoading || u.isLoading,
                        onClick: E,
                        children: (0, i.jsx)(Bs.ZT.Paragraph3, {
                          className: "text-secondary-600",
                          children:
                            "Accept project pay terms and continue tasking",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "flex gap-2",
                    children: (0, i.jsx)("a", {
                      className: "text-blue-500 cursor-pointer",
                      onClick: b,
                      children: (0, i.jsx)(Bs.ZT.Paragraph3, {
                        children: (0, i.jsx)("strong", {
                          children: "Back to homepage",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            });
      };
      var bn = l().flowRight(
          Ki.ZP,
          Xi.Z
        )(
          (0, li.$j)(
            ci.K,
            ci.ZS
          )((e) =>
            (0, i.jsx)(
              fn,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var s = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(s);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(s).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable;
                      })
                    )),
                    i.forEach(function (t) {
                      gn(e, t, s[t]);
                    });
                }
                return e;
              })({}, e)
            )
          )
        ),
        xn = s(118888),
        vn = s(683489),
        yn = s(72120);
      const kn = new $s.S({
          defaultOptions: { queries: { refetchOnWindowFocus: !1 } },
        }),
        jn = () => {
          const e = (0, c.useRouter)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(yn.f, {
                actionHandler: () => {
                  window.location.href.includes("remotasks")
                    ? e.push("/en/dashboard")
                    : e.push("/en/expert");
                },
              }),
              (0, i.jsx)(Vs.aH, {
                client: kn,
                children: (0, i.jsx)(vn.x, {
                  onClick: () => {
                    e.push({ pathname: "/expert", query: e.query });
                  },
                }),
              }),
            ],
          });
        };
      var wn = s(830155);
      function Sn(e, t, s, i, n, o, r) {
        try {
          var a = e[o](r),
            l = a.value;
        } catch (c) {
          return void s(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(i, n);
      }
      function Tn(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var o = e.apply(t, s);
            function r(e) {
              Sn(o, i, n, r, a, "next", e);
            }
            function a(e) {
              Sn(o, i, n, r, a, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function Cn(e, t, s) {
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
      function In(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              Cn(e, t, s[t]);
            });
        }
        return e;
      }
      function Rn(e, t) {
        if (null == e) return {};
        var s,
          i,
          n = (function (e, t) {
            if (null == e) return {};
            var s,
              i,
              n = {},
              o = Object.keys(e);
            for (i = 0; i < o.length; i++)
              (s = o[i]), t.indexOf(s) >= 0 || (n[s] = e[s]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (s = o[i]),
              t.indexOf(s) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, s) &&
                  (n[s] = e[s]));
        }
        return n;
      }
      const Pn = (e) => {
        var t,
          { assignmentJson: s } = e,
          n = Rn(e, ["assignmentJson"]);
        const { 0: o, 1: a } = (0, r.useState)(!0),
          { 0: d, 1: u } = (0, r.useState)(!1),
          { 0: p, 1: h } = (0, r.useState)(!1),
          { 0: g, 1: f } = (0, r.useState)(""),
          { 0: b, 1: x } = (0, r.useState)(!0),
          { 0: v, 1: y } = (0, r.useState)(!1),
          j = (0, c.useRouter)(),
          { query: w } = j,
          { fetchAnnouncement: S } = (0, tn.R)();
        (0, m.Z)(
          Tn(function* () {
            n.actions.fetchBonuses(!0),
              n.actions.fetchNextAssignments(n.query),
              localStorage.getItem("experimentalTasksAccess") &&
                (a(!1),
                console.info(
                  "Type window.toggleExperimentalTasks() to use the new labeler"
                ),
                (window.toggleExperimentalTasks = () => {
                  a((e) => !e);
                }));
          })
        );
        const R = l().first(n.assignments);
        !s && R && (s = R && (0, Ci.Z)(R)),
          (0, r.useEffect)(() => {
            if (
              (null === R || void 0 === R ? void 0 : R.type) ===
                I.TaskType.ChatExperimental ||
              (null === R || void 0 === R ? void 0 : R.type) ===
                I.TaskType.ChatV2
            ) {
              const e = (function () {
                var e = Tn(function* () {
                  try {
                    const e = yield (0, k.ZP)(
                        null,
                        `internal/scaler/${R._id}/isCalibrationTask`
                      ),
                      { isCalibration: t } = yield e;
                    h(t);
                  } catch (e) {
                    return;
                  }
                });
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            }
          }, [R]),
          (0, r.useEffect)(() => {
            if (
              (null === R || void 0 === R ? void 0 : R.type) ===
                I.TaskType.ChatExperimental ||
              (null === R || void 0 === R ? void 0 : R.type) ===
                I.TaskType.ChatV2
            ) {
              if (!R.project) return;
              const e =
                  "string" === typeof R.project ? R.project : R.project._id,
                t = (function () {
                  var t = Tn(function* () {
                    try {
                      const t = yield (0, k.ZP)(
                          null,
                          `internal/scaler/${e}/instructionUrl`
                        ),
                        { instructionUrl: s } = yield t;
                      f(s);
                    } catch (t) {
                      return;
                    }
                  });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
              t();
            }
          }, [R]),
          (0, r.useEffect)(() => {
            var e, t, s;
            R &&
              ((0, en.aE)(
                null === R || void 0 === R ? void 0 : R.taskType,
                null === R ||
                  void 0 === R ||
                  null === (e = R.project) ||
                  void 0 === e
                  ? void 0
                  : e.toString()
              ),
              S({
                query: {
                  permissionGroup:
                    null === R ||
                    void 0 === R ||
                    null === (t = R.project) ||
                    void 0 === t ||
                    null === (s = t.permissionGroup) ||
                    void 0 === s
                      ? void 0
                      : s._id,
                  getUnreadQualityNotification: !0,
                },
              }));
          }, [R, S, h]),
          (0, r.useEffect)(() => {
            function e() {
              return (e = Tn(function* () {
                seon.config({
                  host: "seondf.com",
                  session_id: ai().v4(),
                  audio_fingerprint: !0,
                  canvas_fingerprint: !0,
                  webgl_fingerprint: !0,
                });
                const e = yield seon.getBase64Session();
                return yield (0, is.fetchApi)("/fraud/transaction", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: {
                    actionType: "forced_seon_transaction",
                    sessionPayload: e,
                  },
                }).then(is.handleErrorsAndJsonify);
              })).apply(this, arguments);
            }
            b ||
              v ||
              !n.user.forceSeonTransaction ||
              (function () {
                e.apply(this, arguments);
              })();
          }, [b, v, n.user]);
        const { data: P } = (0, oi.useQuery)(
            ["is-instructive-bm", null === R || void 0 === R ? void 0 : R._id],
            Tn(function* () {
              return (0,
              k.ZP)(null, `/internal/experts/check-instructive/${R._id}`);
            }),
            {
              refetchOnWindowFocus: !1,
              retry: !1,
              enabled: Boolean(R && R._id),
            }
          ),
          E =
            (null === R || void 0 === R ? void 0 : R.type) ===
              I.TaskType.Categorization && oe(R),
          N =
            ("1" === w.forceClaim &&
              !(
                l().includes(
                  [...C.lidarTypes, I.TaskType.SensorFusion],
                  null === R || void 0 === R ? void 0 : R.type
                ) || E
              )) ||
            "1" === w.skipInstructions,
          L = Di(s),
          _ =
            (null === R || void 0 === R ? void 0 : R.taskType) ===
              I.TaskType.TextCollection ||
            (null === R || void 0 === R ? void 0 : R.type) ===
              I.TaskType.TextCollection,
          F =
            _ ||
            (null === R || void 0 === R ? void 0 : R.assignmentType) !==
              C.AssignmentType.Course,
          D =
            (0, T.o5)(
              "cl-fast-submission-enabled",
              { projectId: null === L || void 0 === L ? void 0 : L.projectId },
              {
                shortCircuit: !(null === L || void 0 === L
                  ? void 0
                  : L.projectId),
                defaultValue: !1,
              }
            ) &&
            !(null === R || void 0 === R ? void 0 : R.isPipelineV3HumanNode) &&
            _,
          { data: M } = (0, T._z)("precalculate-prepayment", {}, !1, void 0, {
            refetchOnMount: !1,
            refetchOnReconnect: !1,
            refetchOnWindowFocus: !1,
            refetchInterval: !1,
            refetchIntervalInBackground: !1,
            retry: !1,
          }),
          Z =
            (null === R || void 0 === R ? void 0 : R.project) &&
            ("string" ===
            typeof (null === R || void 0 === R ? void 0 : R.project)
              ? null === R || void 0 === R
                ? void 0
                : R.project
              : null === R ||
                void 0 === R ||
                null === (t = R.project) ||
                void 0 === t
              ? void 0
              : t._id),
          z = null === R || void 0 === R ? void 0 : R.reviewLevel,
          B = (0, T.ZP)("outlier-strata-project-opt-out", { projectId: Z }, !1),
          U = (0, T.ZP)(
            "outlier-accept-pay-rate-changes-v2",
            { projectId: Z },
            !1
          ),
          H = !n.user.workerSource || (0, xn.zs)(n.user.workerSource, !0),
          q =
            n.user.accountType === C.AccountType.Expert ||
            n.user.isCorporateUser,
          { data: $, isLoading: V } = (0, Ti.s)({
            enabled: Boolean(B) && Boolean(U) && Boolean(R) && H && q,
            projectId: Z,
            reviewLevel: String(z),
          });
        (0, r.useEffect)(() => {
          if (
            n.mobileUserAgent &&
            (null === L || void 0 === L ? void 0 : L.projectId) &&
            !d
          ) {
            if ((u(!0), !F))
              return void (0, ys.ZP)(null, "/unavailable_mobile");
            const e = {
              worker: n.user._id,
              userAgent: n.mobileUserAgent,
              project: null === L || void 0 === L ? void 0 : L.projectId,
              assignment: null === L || void 0 === L ? void 0 : L.assignmentId,
            };
            (0, zt.Kz)(zt.ju.MobileRemotasksTaskingEngagement, e).catch((e) => {
              console.warn("Error logging events", e);
            });
          }
        }, [F, n.user._id, n.mobileUserAgent, L, d]),
          Ui(L);
        const { executeRecaptchaV3: Q } = Bi({
          siteKey: O.RECAPTCHA_SITE_KEY,
          projectId: null === L || void 0 === L ? void 0 : L.projectId,
        });
        if (null === R || void 0 === R ? void 0 : R.rateConsent)
          return (0, i.jsx)(Yi, In({ currentAssignment: R }, n));
        if (!n.readyForTasking && !n.isExitingTask) {
          const e = n.skippedTask
            ? "Task skipped"
            : "Task successfully submitted";
          if (M) {
            var W;
            const t =
              null === n ||
              void 0 === n ||
              null === (W = n.precalculatedPay) ||
              void 0 === W
                ? void 0
                : W.payText;
            return (0, i.jsx)(cn, In({ taskText: e, payText: t }, n));
          }
          return (0, i.jsxs)("div", {
            className: "flex flex-col gap-4 items-center p-4 relative top-1/3",
            children: [
              (0, i.jsx)("img", {
                className: "w-auto h-[120px] pl-8",
                src: n.skippedTask
                  ? "/static/img/outlier/skip.svg"
                  : "/static/img/outlier/check.svg",
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col gap-2 w-[500px] items-center",
                children: [
                  (0, i.jsx)("div", {
                    className: "text-lg font-bold",
                    children: e,
                  }),
                  (0, i.jsx)("div", {
                    className: "text-sm",
                    children:
                      "To continue tasking, click the button below to proceed. Note that once a task is found the task's claim timer will begin.",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "space-x-8",
                children: [
                  (0, i.jsx)(Yt.zx, {
                    variant: "neutral",
                    size: "lg",
                    onClick: () => {
                      j.push("/en/expert");
                    },
                    children: "Return to dashboard",
                  }),
                  (0, i.jsx)(Yt.zx, {
                    variant: "primary",
                    size: "lg",
                    onClick: () => {
                      var e, t, s, i, o;
                      n.skippedTask
                        ? (null === (e = n.actions) ||
                            void 0 === e ||
                            e.confirmReadyForNextTask(),
                          null === (t = n.actions) ||
                            void 0 === t ||
                            t.nextTask(
                              n.query,
                              void 0 !==
                                (null === (s = n.userFromGetInitialProps) ||
                                void 0 === s
                                  ? void 0
                                  : s.qaTeamId)
                            ))
                        : (null === (i = n.actions) ||
                            void 0 === i ||
                            i.confirmReadyForNextTask(),
                          null === (o = n.actions) ||
                            void 0 === o ||
                            o.fetchNextAssignmentsOnSkip(n.query));
                    },
                    children: "Continue tasking",
                  }),
                ],
              }),
            ],
          });
        }
        if (V)
          return (0, i.jsx)("div", {
            className: "flex justify-center h-[100vh] items-center",
            children: (0, i.jsx)(sn.$, { size: "sm" }),
          });
        const G = null === $ || void 0 === $ ? void 0 : $.payRateInfo,
          J = null === G || void 0 === G ? void 0 : G.isStrataHourlyRateChange,
          Y = !l().isNil(
            null === G || void 0 === G
              ? void 0
              : G.currentAssignmentWorkStartedAt
          );
        return H && J && B && U && !Y && q
          ? (0, i.jsx)(bn, { projectId: Z, reviewLevel: String(z) })
          : o ||
            "imageannotation" !== (null === R || void 0 === R ? void 0 : R.type)
          ? (0, i.jsx)(wn.Q2, {
              children: (0, i.jsxs)("div", {
                style: { height: "100vh" },
                children: [
                  (0, i.jsx)(jn, {}),
                  q && (0, i.jsx)(nn.j, { projectId: Z }),
                  n.user.forceSeonTransaction &&
                    (0, i.jsx)(ni(), {
                      url: C.SEON_DEVICE_FINGERPRINTING_URL,
                      onLoad: () => {
                        x(!1);
                      },
                      onError: () => {
                        Zt.Z.warn(
                          "Error loading SEON device fingerprinting script."
                        ),
                          y(!0),
                          x(!1);
                      },
                    }),
                  (0, i.jsx)(
                    ei,
                    In({ assignmentJson: L }, n, {
                      executeRecaptchaV3: Q,
                      fastSubmissionEnabled: D,
                      skipInstructions: N,
                      isRedirecting: n.isRedirecting,
                      isCalibration: p,
                      instructionUrl: g,
                      isInstructiveBM: null !== P && void 0 !== P && P,
                    })
                  ),
                ],
              }),
            })
          : R
          ? (0, i.jsx)(Si, { assignmentJson: L })
          : (0, i.jsx)(A, { config: n.config, query: n.query, user: n.user });
      };
      var An = l().flowRight(
        Ki.ZP,
        Xi.Z
      )((0, li.$j)(ci.K, ci.ZS)((e) => (0, i.jsx)(Pn, In({}, e))));
    },
    185674: function (e, t, s) {
      s.d(t, {
        P: function () {
          return a;
        },
      });
      var i = s(298784),
        n = s.n(i),
        o = s(167469);
      const r = [
          o.TaskType.LidarAnnotation,
          o.TaskType.LidarLinking,
          o.TaskType.LidarSegmentation,
          o.TaskType.LidarStitching,
          o.TaskType.SegmentAnnotation,
          o.TaskType.TextCollection,
          o.TaskType.VideoPlaybackAnnotation,
          o.TaskType.DocumentModel,
        ],
        a = (e) =>
          n().compact(
            n().uniq(
              n().flattenDeep(
                e
                  .filter(
                    (e) =>
                      !!e.params &&
                      "text" !== e.params.attachment_type &&
                      !n().includes(r, e.type)
                  )
                  .map((e) => {
                    var t, s;
                    return [
                      e.scale_internal_attachments,
                      e.scale_internal_attachment,
                      e.params.attachment,
                      "gis_tile_png_v1" !== e.params.attachment_format
                        ? e.type !== o.TaskType.VideoAnnotation
                          ? e.params.attachments
                          : []
                        : n().filter(
                            e.params.attachments,
                            (e) => e.includes(".png") || e.includes(".jpeg")
                          ),
                      n().map(
                        e.params.context_attachments,
                        ({ attachment: e }) => e
                      ),
                      null === (t = e.params.hypothesis) ||
                      void 0 === t ||
                      null === (s = t.annotations) ||
                      void 0 === s
                        ? void 0
                        : s.url,
                    ].filter((e) => !!e);
                  })
              )
            )
          );
    },
    761878: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = s(824246),
        n = s(298784),
        o = s.n(n),
        r = s(161320),
        a = s.n(r),
        l = (s(827378), s(50682)),
        c = s.n(l),
        d = s(599789),
        u = s(68649),
        p = s(629586);
      const m = (e) => !!e.minAuditsPerPeriod;
      var h = s(628556);
      const g = ({ bonus: e }) => {
          const t = f();
          if (!m(e)) {
            if (e.amountPerPeriod)
              return (0, i.jsx)("div", {
                className: t.amount,
                children: (0, i.jsxs)(p.H1, {
                  children: ["$", (e.amountPerPeriod / 1e4).toFixed(2)],
                }),
              });
            if (e.amountPerReview)
              return (0, i.jsx)("div", {
                className: t.amount,
                children: (0, i.jsxs)(p.H1, {
                  children: [
                    "$",
                    (e.amountPerReview / 1e4).toFixed(2),
                    (0, i.jsx)("span", {
                      className: t.label,
                      children: " per review",
                    }),
                  ],
                }),
              });
          }
          if (o().isNil(e.minAccuracy) || o().isNil(e.amountPerReview))
            return null;
          if (e.status === d.BonusStatus.Resolved)
            return (0, i.jsx)("div", {
              className: t.amount,
              children: (0, i.jsxs)(p.H1, {
                children: ["$", (e.amountHundredthsOfCents / 1e4).toFixed(2)],
              }),
            });
          const s =
              e.progress >= e.minAccuracy
                ? (0, h.pv)(0.2, e.minAccuracy, e.progress)
                : 0,
            n = (0, h.JM)(s, e.amountPerReview);
          return (0, i.jsx)("div", {
            className: t.amount,
            children: (0, i.jsxs)(p.H1, {
              children: [
                (0, i.jsxs)("span", {
                  className: t.label,
                  children: ["$", n.toFixed(2)],
                }),
                " ($",
                (e.amountPerReview / 1e4).toFixed(2),
                " max)",
                " ",
                (0, i.jsx)("span", {
                  className: t.label,
                  children: "per review",
                }),
              ],
            }),
          });
        },
        f = (0, u.ZL)((e) => ({
          amount: { margin: "12px 0", color: e.colors.green },
          label: { color: e.colors.gray50 },
        })),
        b = (0, u.ZL)({
          container: { width: "280px" },
          thresholds: {
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "120px auto",
            gridColumnGap: 16,
            gridRowGap: 2,
            opacity: 0.5,
          },
        });
      var x = (e) => {
        const {
            minAccuracy: t,
            amountPerReview: s,
            progress: n,
            status: o,
            amountHundredthsOfCents: r,
          } = e.bonus,
          a = b();
        if (!t) return null;
        const l = [t, 0.8, 0.95, 1],
          c = n < t + 0.6 * (1 - t) && o !== d.BonusStatus.Pending && r > 0,
          u = !c && n === t;
        return (0, i.jsxs)("div", {
          className: a.container,
          children: [
            u &&
              (0, i.jsx)("div", {
                children:
                  "You didn't get randomly audited this week, so your bonus defaulted to the minimum",
              }),
            c &&
              (0, i.jsx)("div", {
                children:
                  "You didn't receive much bonus this time because your QA audit accuracy was low",
              }),
            !u &&
              !c &&
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("div", {
                    children: (0, i.jsxs)(p.x, {
                      medium: !0,
                      children: [
                        "You will earn bonuses for every task if your QA audit accuracy is above",
                        " ",
                        Math.floor(100 * t),
                        "%",
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: a.thresholds,
                    children: l.map((e) =>
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsxs)(p.x, {
                              mono: !0,
                              children: [Math.floor(100 * e), "% accuracy"],
                            }),
                          }),
                          (0, i.jsx)("div", {
                            children: (0, i.jsxs)(p.x, {
                              mono: !0,
                              children: [
                                "$",
                                (0, h.JM)((0, h.pv)(0.2, t, e), s).toFixed(2),
                                " ",
                                "per task",
                              ],
                            }),
                          }),
                        ],
                      })
                    ),
                  }),
                ],
              }),
          ],
        });
      };
      function v(e, t, s) {
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            i.forEach(function (t) {
              v(e, t, s[t]);
            });
        }
        return e;
      }
      const k = ({ bonus: e, isMissedTarget: t }) => {
          const s = T();
          return t
            ? (0, i.jsx)("div", {
                className: `${s.bonusStatus} ${s.bonusStatusMissed}`,
                children: (0, i.jsx)(p.x, {
                  medium: !0,
                  children: "Missed Target",
                }),
              })
            : e.status === d.BonusStatus.Resolved &&
              e.amountHundredthsOfCents > 0
            ? (0, i.jsx)("div", {
                className: `${s.bonusStatus} ${s.bonusStatusPaid}`,
                children: (0, i.jsx)(p.x, { medium: !0, children: "Paid" }),
              })
            : a()(e.currentPeriodEnd).isBefore()
            ? (0, i.jsx)("div", {
                className: `${s.bonusStatus} ${s.bonusStatusFinalizing}`,
                children: (0, i.jsx)(p.x, {
                  medium: !0,
                  children: "Awaiting Finalization",
                }),
              })
            : (0, i.jsx)("div", {
                className: `${s.bonusStatus} ${s.bonusStatusInProgress}`,
                children: (0, i.jsx)(p.x, {
                  medium: !0,
                  children: "In Progress",
                }),
              });
        },
        j = ({ bonus: e }) => {
          const t = T();
          return (0, i.jsxs)("div", {
            className: t.dateRange,
            children: [
              a()(e.windowStart).format("MMM D"),
              " - ",
              a()(e.currentPeriodEnd).format("MMM D"),
            ],
          });
        },
        w = ({ name: e, isMissedTarget: t }) => {
          const s = T();
          return (0, i.jsx)("div", {
            className: t ? s.name : "",
            children: (0, i.jsx)(p.x, { medium: !0, children: e }),
          });
        },
        S = ({ bonus: e }) => {
          const t = T(),
            s =
              !o().isNil(e.currentAccuracy) &&
              Math.round(
                100 * (Math.min(e.currentAccuracy, 1) + Number.EPSILON)
              );
          return (0, i.jsxs)("div", {
            className: t.targets,
            children: [
              !m(e) &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", { children: "Tasks Submitted" }),
                    " ",
                    (0, i.jsxs)("div", {
                      children: [
                        e.progress,
                        " / ",
                        e.target,
                        e.eligible ? ` (${e.eligible} pending)` : "",
                        e.discarded ? ` (${e.discarded} discarded)` : "",
                      ],
                    }),
                    e.minAvgAccuracy &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("div", { children: "Average Accuracy" }),
                          (0, i.jsxs)("div", {
                            children: [
                              o().isNil(e.currentAccuracy)
                                ? (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)("span", {
                                        style: { opacity: 0.25 },
                                        children: "Unknown",
                                      }),
                                      " /",
                                      " ",
                                    ],
                                  })
                                : `${s} / `,
                              100 * e.minAvgAccuracy,
                              "%",
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              m(e) &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", { children: "Accuracy" }),
                    (0, i.jsxs)("div", { children: [100 * e.progress, "%"] }),
                  ],
                }),
              e.minAccuracy &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", { children: "Accuracy Threshold" }),
                    (0, i.jsxs)("div", {
                      children: [100 * e.minAccuracy, "%"],
                    }),
                  ],
                }),
            ],
          });
        },
        T = (0, u.ZL)((e) => ({
          container: {
            padding: "16px",
            color: e.colors.gray75,
            transition: "background 0.2s",
            "&:hover": { background: e.colors.gray01 },
          },
          bonusStatus: {
            marginBottom: 8,
            padding: "2px 8px",
            borderRadius: 2,
            display: "inline-block",
          },
          bonusStatusPaid: {
            background: e.colors.green,
            color: e.colors.white,
          },
          bonusStatusMissed: {
            background: e.colors.gray05,
            color: e.colors.gray50,
          },
          bonusStatusInProgress: {
            border: `1px solid ${e.colors.gray10}`,
            color: e.colors.gray50,
          },
          bonusStatusFinalizing: { border: `1px solid ${e.colors.gray10}` },
          missedTarget: { opacity: 0.5 },
          dateRange: { marginBottom: 8, color: e.colors.gray50 },
          name: { paddingBottom: 8 },
          targets: {
            display: "grid",
            gridTemplateColumns: "160px auto",
            gridColumnGap: 16,
            gridRowGap: 8,
          },
        }));
      var C = (e) => {
        const t = T(),
          s =
            (e.bonus.status === d.BonusStatus.Resolved &&
              e.bonus.amountHundredthsOfCents <= 0) ||
            (e.bonus.status === d.BonusStatus.Pending &&
              e.bonus.target > e.bonus.progress &&
              a()(e.bonus.currentPeriodEnd).isBefore());
        return (0, i.jsxs)("div", {
          className: t.container,
          "data-tip": m(e.bonus),
          "data-for": `bonusItemTooltip${e.bonus._id}`,
          children: [
            (0, i.jsx)(k, { bonus: e.bonus, isMissedTarget: s }),
            (0, i.jsxs)("div", {
              className: s ? t.missedTarget : "",
              children: [
                (0, i.jsx)(j, y({}, e)),
                (0, i.jsx)(w, { name: e.bonus.name, isMissedTarget: s }),
                s ? "" : (0, i.jsx)(g, y({}, e)),
                (0, i.jsx)(S, y({}, e)),
              ],
            }),
            m(e.bonus) &&
              (0, i.jsx)(c(), {
                id: `bonusItemTooltip${e.bonus._id}`,
                children: (0, i.jsx)(x, { bonus: e.bonus }),
              }),
          ],
        });
      };
    },
  },
]);
