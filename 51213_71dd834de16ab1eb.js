(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [51213],
  {
    113463: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(824246),
        r = n(679892),
        s = n.n(r);
      n(827378);
      var i = (e) =>
        (0, o.jsxs)("kbd", {
          style: e.style,
          className: "jsx-bf0fad026d3b48ff kbd",
          children: [
            e.children,
            (0, o.jsx)(s(), {
              id: "bf0fad026d3b48ff",
              children:
                ".kbd.jsx-bf0fad026d3b48ff{background-color:var(--color-RemoGray05);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;display:inline-block;margin:0 2px;padding:0 4px;min-width:20px;color:var(--color-RemoGray75);text-align:center;font-family:var(--font-family-code);font-weight:500;font-size:11px;text-transform:capitalize;line-height:20px;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.kbd.jsx-bf0fad026d3b48ff:hover{background-color:var(--color-RemoGray10);color:black}",
            }),
          ],
        });
    },
    358720: function (e, t, n) {
      "use strict";
      n.d(t, {
        bK: function () {
          return p;
        },
        Hp: function () {
          return m;
        },
        RZ: function () {
          return f;
        },
        t0: function () {
          return h;
        },
        Bi: function () {
          return g;
        },
        dK: function () {
          return v;
        },
        xg: function () {
          return x;
        },
        M$: function () {
          return y;
        },
        Ur: function () {
          return j;
        },
        l4: function () {
          return C;
        },
        Is: function () {
          return T;
        },
        gL: function () {
          return O;
        },
        IQ: function () {
          return E;
        },
        pk: function () {
          return P;
        },
        BH: function () {
          return R;
        },
        LD: function () {
          return A;
        },
        QA: function () {
          return L;
        },
        H9: function () {
          return B;
        },
        Yu: function () {
          return Z;
        },
        o7: function () {
          return F;
        },
        qn: function () {
          return W;
        },
        rt: function () {
          return K;
        },
        Kx: function () {
          return J;
        },
        S2: function () {
          return q;
        },
        t9: function () {
          return Y;
        },
        mQ: function () {
          return X;
        },
        Vf: function () {
          return ee;
        },
        L8: function () {
          return ne;
        },
        a9: function () {
          return re;
        },
        jH: function () {
          return ie;
        },
        xy: function () {
          return ae;
        },
        lp: function () {
          return le;
        },
        uF: function () {
          return ce;
        },
        rg: function () {
          return ue;
        },
        jP: function () {
          return pe;
        },
        s4: function () {
          return me;
        },
        MB: function () {
          return fe;
        },
        Xn: function () {
          return he;
        },
        DL: function () {
          return ge;
        },
        Cw: function () {
          return be;
        },
        LG: function () {
          return xe;
        },
        v2: function () {
          return ye;
        },
        uO: function () {
          return we;
        },
        cf: function () {
          return je;
        },
      });
      var o = n(827378),
        r = n(236125),
        s = n(225729),
        i = n(67370),
        a = n(854358),
        l = n(844159),
        c = n(298784),
        d = n(900218);
      const u =
          "**DISCLAIMER: The selected response is a placeholder for the chat history even though you selected no preference.**",
        p =
          "**DISCLAIMER: There is no model response in this turn. Expand this section to view the steps in the turn.**",
        m =
          "**DISCLAIMER: This turn has no visible steps and no model response.**";
      function f() {
        const e = (0, o.useContext)(s.p);
        if (!(null === e || void 0 === e ? void 0 : e.current))
          throw Error(
            "You have to wrap Chat component into ChatStoreContextProvider"
          );
        return e;
      }
      function h(e) {
        const t = (0, o.useContext)(s.p);
        if (!(null === t || void 0 === t ? void 0 : t.current))
          throw Error(
            "You have to wrap Chat component into ChatStoreContextProvider"
          );
        return (0, r.oR)(t.current, e);
      }
      function g(e) {
        return Object.values(e.completedSteps).every((e) => !1 !== e);
      }
      const b = (0, i.Mt)((e, t) => e.stepParams[t]);
      function v(e) {
        return h((t) => b(t, e));
      }
      function x() {
        return h((e) => e.stepParams.at(-1));
      }
      function y() {
        return h((e) => e.config);
      }
      const w = (0, i.HP)((e) => e.stepParams.slice(0, e.config.before.length));
      function j() {
        return h((e) => w(e));
      }
      (0, i.HP)((e) => {
        const t = e.config.turn.length + 1,
          n = e.stepParams.filter(
            (e) => e.stage === l.ChatTaskParamsStages.Turn
          ),
          o = [];
        for (let r = 0; r < n.length; r += t) {
          const e = n.slice(r, r + t);
          o.push(e);
        }
        return o;
      });
      const k = (0, i.HP)((e) => {
        const t = e.config.turn.length + 1,
          n = e.stepParams.filter(
            (e) => e.stage === l.ChatTaskParamsStages.Turn
          ),
          o = [];
        for (let r = 0; r < n.length; r += t) o.push(n[r].turn);
        return o;
      });
      function C() {
        return h((e) => k(e));
      }
      const S = (0, i.Mt)((e, t) =>
        e.stepParams.filter(
          (e) => e.stage === l.ChatTaskParamsStages.Turn && e.turn === t
        )
      );
      function T(e) {
        return h((t) => S(t, e));
      }
      const N = (0, i.Mt)((e, t) => {
        const n = e.stepParams.find(
          (e) =>
            e.stage === l.ChatTaskParamsStages.Turn &&
            e.turn === t &&
            e.type === a.InteractionStepType.MultiTurnContinue
        );
        if (!n) return !1;
        const o = e.responses.at(
          null === n || void 0 === n ? void 0 : n.responseIndex
        );
        return !(0, c.isNil)(o) && o.contextType !== a.ContextType.Skipped;
      });
      function O(e) {
        return h((t) => N(t, e));
      }
      function E(e) {
        return h((t) => {
          const n = t.stepParams.find(
            (t) =>
              t.stage === l.ChatTaskParamsStages.Turn &&
              t.turn === e &&
              t.type === a.InteractionStepType.MultiTurnContinue
          );
          if (!n) return [];
          const o = t.responses.at(n.responseIndex);
          if (!o) return [];
          const r = o.output,
            s = o.context,
            i = s.message.length
              ? s.message
              : (function (e, t, n) {
                  const o = (0, d.getMostRecentModelSelectorResponseForTurn)(
                    e,
                    t,
                    n
                  );
                  return o.length ? `${u}\n\n${o}` : p;
                })(t.responses, e, t.stepParams),
            c = {
              role: a.MessageRole.Assistant,
              content: i,
              attachments: s.modelResponseAttachments,
              messageMetadata: s.modelResponseMetadata,
            };
          if (!s.shouldContinue) return [c];
          return [
            c,
            {
              role: s.role || a.MessageRole.User,
              content: r,
              attachments: s.attachments,
              skipMessage: s.skipPromptInput || !1,
            },
          ];
        });
      }
      function P(e) {
        return h((t) => {
          const n = t.stepParams.find(
            (t) =>
              t.stage === l.ChatTaskParamsStages.Turn &&
              t.turn === e &&
              t.type === a.InteractionStepType.MultiTurnContinue
          );
          if (!n) return;
          const o = t.responses.at(n.responseIndex);
          return o ? o.context : void 0;
        });
      }
      const M = (0, i.Mt)((e, t) => {
        const n = e.stepParams.find(
          (e) =>
            e.stage === l.ChatTaskParamsStages.Turn &&
            e.turn === t &&
            e.type === a.InteractionStepType.MultiTurnContinue
        );
        if (n) return e.responses.at(n.responseIndex);
      });
      function R(e) {
        return h((t) => M(t, e));
      }
      const I = (0, i.HP)((e) =>
        e.stepParams.filter((e) => e.stage === l.ChatTaskParamsStages.After)
      );
      function A() {
        return h((e) => I(e));
      }
      const D = (0, i.Mt)((e, t) =>
        (0, d.isStepSequentiallySkippedAndVisible)(
          e.stepParams,
          e.responses,
          t,
          e.reviewLevel
        )
      );
      function L(e) {
        return h((t) => D(t, e));
      }
      const _ = (0, i.Mt)((e, t) => e.responses.length === t);
      function B(e) {
        return h((t) => _(t, e));
      }
      const $ = (0, i.Mt)((e, t) => {
        const n = e.stepParams.at(t);
        return !!n && (0, d.isStepVisible)(n, e.reviewLevel);
      });
      function Z(e) {
        return h((t) => $(t, e));
      }
      const H = (e, t) => {
          const n = e.stepParams.at(t);
          return (
            !!n &&
            (0, d.isConditionallyVisible)(
              n,
              e.responses,
              t,
              e.config.templateVariables
            )
          );
        },
        z = (0, i.Mt)((e, t) => H(e, t));
      function F(e) {
        return h((t) => z(t, e));
      }
      const V = (0, i.Mt)((e, t, n) => {
        const o = e.responses.at(t);
        if (
          o &&
          (n ||
            (null === o || void 0 === o ? void 0 : o.contextType) !==
              a.ContextType.Skipped)
        )
          return o;
      });
      function W(e, t) {
        return h((n) => V(n, e, null !== t && void 0 !== t && t));
      }
      const U = (0, i.Mt)((e, t, n) => {
        let o = e.responses.at(t);
        (o &&
          (n ||
            (null === o || void 0 === o ? void 0 : o.contextType) !==
              a.ContextType.Skipped)) ||
          (o = void 0);
        const r = e.completedSteps;
        return !!o && r[t];
      });
      function K(e, t) {
        return h((n) => U(n, e, null !== t && void 0 !== t && t));
      }
      function J() {
        return h((e) => {
          const t = e.config.before.find(
            (e) => e.type === a.InteractionStepType.PromptInput
          );
          var n;
          const o =
            null !== (n = (0, c.get)(t, "[0].params.params.display_type")) &&
            void 0 !== n
              ? n
              : (0, c.get)(t, "params.display_type");
          return null !== o && void 0 !== o
            ? o
            : a.ChatMessageDisplayType.Markdown;
        });
      }
      const G = (0, i.HP)((e) =>
        e.config.turn
          .filter((e) => l.RESPONSE_GENERATOR_STEPS.includes(e.type))
          .at(-1)
      );
      function q() {
        return h((e) => G(e));
      }
      const Q = (0, i.HP)((e) => {
        const t = (0, c.groupBy)(
          e.stepParams.filter((e) => e.stage === l.ChatTaskParamsStages.Turn),
          ({ turn: e }) => e
        );
        return !Object.values(t).every((t) => {
          const n = t.at(-1);
          return (
            !(0, c.isNil)(n) &&
            n.type === a.InteractionStepType.MultiTurnContinue &&
            !(0, c.isNil)(e.responses.at(n.responseIndex))
          );
        });
      });
      function Y() {
        return h((e) => Q(e));
      }
      function X(e) {
        return h((t) =>
          t.stepParams
            .filter(
              (t) =>
                t.stage === l.ChatTaskParamsStages.Turn &&
                t.turn === e &&
                t.type !== a.InteractionStepType.MultiTurnContinue
            )
            .map((e) => e.responseIndex)
            .some((e) => !t.completedSteps[e])
        );
      }
      function ee(e) {
        return h((t) => {
          if ((0, c.isNil)(e)) return [];
          var n, o;
          return (null !== (n = t.invalidStepIndices) && void 0 !== n ? n : [])
            .filter(
              (t) => (null === t || void 0 === t ? void 0 : t.turnIndex) === e
            )
            .map((e) =>
              null !== (o = e.errorMessage) && void 0 !== o
                ? o
                : "This turn has some steps that are not completed."
            );
        });
      }
      const te = (0, i.Mt)((e, t) => {
        const n = (
          (0, c.isNil)(t) ? e.stepParams : e.stepParams.slice(0, t + 1)
        )
          .filter((e) => e.stage === l.ChatTaskParamsStages.Turn)
          .at(-1);
        var o;
        return (
          (null !== (o = null === n || void 0 === n ? void 0 : n.turn) &&
          void 0 !== o
            ? o
            : 0) + 1
        );
      });
      function ne(e) {
        return h((t) => te(t, e));
      }
      const oe = (0, i.Mt)((e, t) => {
        const n = e.responses
          .filter(
            (n, o) =>
              e.stepParams[n.index].turn === t &&
              n.contextType !== a.ContextType.Skipped &&
              l.RESPONSE_GENERATOR_STEPS.includes(n.type) &&
              H(e, o)
          )
          .at(-1);
        var o;
        return null !== (o = null === n || void 0 === n ? void 0 : n.output) &&
          void 0 !== o
          ? o
          : "";
      });
      function re(e) {
        return h((t) => oe(t, e));
      }
      const se = (0, i.Mt)((e, t) => {
        const n = (0, c.isNil)(t) ? e.responses : e.responses.slice(0, t);
        for (let o = n.length - 1; o >= 0; o--) {
          const t = n[o];
          if (
            t.contextType !== a.ContextType.Skipped &&
            l.RESPONSE_GENERATOR_STEPS.includes(t.type) &&
            H(e, o)
          )
            return t;
          if (
            [
              a.InteractionStepType.PromptInput,
              a.InteractionStepType.MultiTurnContinue,
            ].includes(t.type)
          )
            break;
        }
        return null;
      });
      function ie(e) {
        return h((t) => se(t, e));
      }
      function ae(e) {
        var t, n;
        return null !==
          (n = null === (t = ie(e)) || void 0 === t ? void 0 : t.output) &&
          void 0 !== n
          ? n
          : "";
      }
      const le = (0, i.Mt)((e, t) => {
        const n = ((0, c.isNil)(t) ? e.responses : e.responses.slice(0, t))
          .filter((e) =>
            [
              a.InteractionStepType.PromptInput,
              a.InteractionStepType.MultiTurnContinue,
            ].includes(e.type)
          )
          .at(-1);
        return n ? (0, d.producePromptWithReferenceTexts)(n) : "";
      });
      function ce(e) {
        return h((t) => le(t, e));
      }
      const de = (0, i.Mt)((e, t, n) => {
        const o = e.responses
          .slice(0, t)
          .filter(
            (e) =>
              [
                a.InteractionStepType.PromptInput,
                a.InteractionStepType.MultiTurnContinue,
              ].includes(e.type) && e.step_id === n
          )
          .at(-1);
        return o ? (0, d.producePromptWithReferenceTexts)(o) : "";
      });
      function ue(e, t) {
        return h((n) => (t ? de(n, e, t) : ""));
      }
      function pe(e) {
        return h((t) => {
          const n = (0, c.isNil)(e) ? t.responses : t.responses.slice(0, e);
          return 0 === n.length ? null : n.at(-1);
        });
      }
      function me(e) {
        return h((t) => {
          var n;
          const o = ((0, c.isNil)(e) ? t.responses : t.responses.slice(0, e))
            .filter((e) =>
              [
                a.InteractionStepType.PromptInput,
                a.InteractionStepType.MultiTurnContinue,
              ].includes(e.type)
            )
            .at(-1);
          if (!o) return [];
          const r =
            null === (n = o.context) || void 0 === n ? void 0 : n.attachments;
          return null !== r && void 0 !== r ? r : [];
        });
      }
      function fe(e, t) {
        return h((n) => {
          var o;
          return null !==
            (o = ((0, c.isNil)(t) ? n.responses : n.responses.slice(0, t))
              .filter(
                (t, o) =>
                  t.type === e &&
                  t.contextType !== a.ContextType.Skipped &&
                  H(n, o)
              )
              .at(-1)) && void 0 !== o
            ? o
            : null;
        });
      }
      function he(e, t) {
        return h((n) =>
          ((0, c.isNil)(t) ? n.responses : n.responses.slice(0, t)).filter(
            (t) => t.type === e
          )
        );
      }
      function ge(e, t) {
        return h((n) => {
          const o = ((0, c.isNil)(t) ? n.responses : n.responses.slice(0, t))
            .filter(
              (t) => t.type === e && t.contextType !== a.ContextType.Skipped
            )
            .at(-1);
          if (!o) return null;
          var r;
          return null !== (r = n.stepParams.at(o.index)) && void 0 !== r
            ? r
            : null;
        });
      }
      function be(e, t) {
        return h((n) => {
          if (!e) return null;
          const o = ((0, c.isNil)(t) ? n.responses : n.responses.slice(0, t))
            .filter((t) => t.step_id === e)
            .at(-1);
          return o || null;
        });
      }
      const ve = (0, i.Mt)((e, t) => {
        var n;
        return null !== (n = e.turnVersionHistory[t]) && void 0 !== n ? n : 0;
      });
      function xe(e) {
        return h((t) => ve(t, e));
      }
      function ye(e) {
        return h((t) =>
          (0, d.constructChatHistory)({
            responses: t.responses,
            config: t.config,
            stepParamsWithStage: t.stepParams,
            responseIndex: e,
          })
        );
      }
      const we = (e) => {
          const t = ye(e),
            n = t.find((e) => e.role === a.MessageRole.User),
            o = t.find((e) => e.role === a.MessageRole.Assistant),
            r = h((e) =>
              e.config.turn.find((e) =>
                [
                  a.InteractionStepType.ProcessSupervision,
                  a.InteractionStepType.ExperimentalToolUse,
                ].includes(e.type)
              )
            );
          return {
            isEnabled:
              null === r || void 0 === r ? void 0 : r.params.limit_chat_history,
            promptRole: o ? a.MessageRole.Assistant : a.MessageRole.User,
            chatHistory: o ? [n] : [],
          };
        },
        je = () => ye().find((e) => e.role === a.MessageRole.System);
    },
    225729: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return o;
        },
      });
      const o = (0, n(827378).createContext)(null);
      o.Consumer;
    },
    403670: function (e, t, n) {
      "use strict";
      var o = n(824246),
        r = n(252302),
        s = n(154184),
        i = n(720227),
        a = n(827378),
        l = n(792739),
        c = n(134069),
        d = n(95251);
      function u(e, t, n) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              u(e, t, n[t]);
            });
        }
        return e;
      }
      const m = ({ tabs: e, value: t, onChange: n, className: r }) =>
          (0, o.jsx)("div", {
            className: (0, i.m)(
              "border-0 border-b border-solid scaleui border-neutral-200",
              r
            ),
            children: (0, o.jsx)("nav", {
              className: "flex -mb-px space-x-4",
              "aria-label": "Tabs",
              children: e.map((e) => {
                var r;
                const s = null !== (r = e.label) && void 0 !== r ? r : e.id;
                return (0, o.jsx)(
                  "button",
                  {
                    type: "button",
                    disabled: e.disabled,
                    className: (0, i.m)(
                      "whitespace-nowrap py-2 px-1 border-0 border-solid border-b-2 font-medium text-xs text-neutral-0",
                      e.id === t
                        ? "border-neutral-0"
                        : "border-transparent hover:border-primary-500"
                    ),
                    "aria-current": e.id === t ? "page" : void 0,
                    onClick: () => n(e.id),
                    children: (0, o.jsxs)("span", {
                      className: "flex items-center",
                      children: [
                        e.icon &&
                          (0, o.jsx)(l.G, { icon: e.icon, className: "mr-2" }),
                        s,
                        e.suffix &&
                          (0, o.jsx)("span", {
                            className: "ml-1",
                            children: e.suffix,
                          }),
                      ],
                    }),
                  },
                  e.id
                );
              }),
            }),
          }),
        f = ({ width: e, height: t, color: n }) =>
          (0, o.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: e,
            height: t,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: n,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, o.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, o.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
      t.Z = function ({
        outputValue: e,
        setOutputTabOpen: t,
        tab: n,
        setTab: u,
        fetchError: h,
      }) {
        const { 0: g, 1: b } = (0, a.useState)(!1),
          v = e.split(/\r\n|\r|\n/).length,
          x = (e) => {
            e.stopPropagation(), b(!g);
          };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: (0, i.m)(
              "group bg-transparent relative px-0 py-0",
              g ? "overflow-auto" : "overflow-hidden"
            ),
            children: [
              (0, o.jsxs)("div", {
                className:
                  "text-white text-xs font-mono font-medium px-3 flex items-center justify-between bg-neutral-800 rounded-t-md py-1.5",
                children: [
                  (0, o.jsx)(m, {
                    className: "border-none",
                    value: n,
                    tabs: [
                      { id: s.A.STDOUT, label: "Output" },
                      { id: s.A.STDERR, label: "Errors" },
                    ],
                    onChange: (e) => u(e),
                  }),
                  (0, o.jsxs)("div", {
                    className: "flex items-center justify-end",
                    children: [
                      v > 5 &&
                        g &&
                        (0, o.jsxs)("button", {
                          onClick: (e) => x(e),
                          className:
                            "border ml-1 rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0",
                          children: [
                            "Collapse",
                            (0, o.jsx)(l.G, {
                              icon: "chevron-up",
                              className: "ml-1",
                            }),
                          ],
                        }),
                      (0, o.jsx)("div", {
                        className: "pl-4",
                        children: (0, o.jsx)(d.f, { code: e }),
                      }),
                      (0, o.jsx)("button", {
                        onClick: () => t(!1),
                        className:
                          "ml-1 rounded-md py-1.5 pl-2 pr-1 text-xs flex items-center justify-center text-neutral-0",
                        children: (0, o.jsx)(f, {
                          width: 16,
                          height: 16,
                          color: "#FFFFFF",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("div", {
                    className: (0, i.m)(
                      "p-3 bg-neutral-900",
                      g
                        ? "max-h-[600px] overflow-auto rounded-b-md"
                        : "max-h-[97px] overflow-hidden",
                      v <= 5 || g ? "rounded-b-md" : "rounded-none"
                    ),
                    children: (0, o.jsx)(c.Z, {
                      children: h
                        ? "Error executing code - this usually occurs due to execution timeout. Please try again."
                        : e,
                      style: n === s.A.STDERR ? p({}, r.Q, r.V) : r.Q,
                      PreTag: "div",
                      CodeTag: "div",
                      showLineNumbers: !1,
                    }),
                  }),
                  v > 5 &&
                    !g &&
                    (0, o.jsx)("div", {
                      className:
                        "flex items-center justify-center py-2 text-white text-xs font-medium font-mono bg-neutral-900 rounded-b-md",
                      children: (0, o.jsxs)("button", {
                        onClick: (e) => x(e),
                        className:
                          "border ml-1 text-white rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0",
                        children: [
                          "Expand",
                          (0, o.jsx)(l.G, {
                            icon: "chevron-down",
                            className: "ml-1",
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    892328: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return m;
        },
      });
      var o = n(824246),
        r = n(690085),
        s = n(827378),
        i = n(922632),
        a = n(720227),
        l = n(601148),
        c = n(722030),
        d = n(667332);
      function u(e, t, n) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              u(e, t, n[t]);
            });
        }
        return e;
      }
      const m = ({
        className: e,
        label: t,
        labelDescription: n,
        required: u,
        disabled: m,
        error: f,
        value: h,
        name: g,
        helperText: b,
        autoFocus: v,
        onFocus: x,
        onBlur: y,
        onChange: w,
        onKeyDown: j,
        editorOptions: k = {
          fontSize: 14,
          minimap: { enabled: !1 },
          scrollBeyondLastLine: !1,
          padding: { top: 16, bottom: 16 },
          formatOnPaste: !0,
          formatOnType: !0,
          renderLineHighlight: "none",
        },
        editorProps: C = {},
        tooltipContentClassName: S,
      }) => {
        const { 0: T, 1: N } = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            if (T) {
              const e = () => {
                var e;
                null ===
                  (e =
                    null === T || void 0 === T
                      ? void 0
                      : T.getAction("editor.action.formatDocument")) ||
                  void 0 === e ||
                  e.run();
              };
              T.onDidChangeModelLanguageConfiguration(e),
                T.onDidLayoutChange(e),
                T.onDidFocusEditorWidget(() => {
                  null === x || void 0 === x || x();
                }),
                T.onDidBlurEditorWidget(() => {
                  e(), null === y || void 0 === y || y();
                }),
                T.onKeyDown((e) => {
                  null === j || void 0 === j || j(e);
                });
            }
          }, [T, x, y, j]),
          (0, o.jsxs)("div", {
            className: (0, a.m)("scaleui flex flex-col z-20", e),
            children: [
              (0, o.jsx)(l.A, {
                required: u,
                error: f,
                disabled: m,
                labelDescription: n,
                tooltipContentClassName: S,
                children: t,
              }),
              (0, o.jsx)(
                r.ZP,
                p({}, C, {
                  loading: (0, o.jsx)("div", {
                    className: (0, a.m)(
                      "h-full w-full flex items-center justify-center",
                      C.className
                    ),
                    children: (0, o.jsx)(c.$, {
                      size: "md",
                      variant: "primary",
                    }),
                  }),
                  wrapperProps: {
                    className: "shadow-sm overflow-hidden rounded-b-lg",
                    name: g,
                  },
                  options: k,
                  value: h,
                  onChange: w,
                  onMount: (e, t) => {
                    N(e),
                      t.languages.registerDocumentFormattingEditProvider(
                        "sql",
                        {
                          provideDocumentFormattingEdits: (e) => [
                            {
                              range: e.getFullModelRange(),
                              text: (0, i.WU)(e.getValue()),
                            },
                          ],
                        }
                      ),
                      t.languages.registerDocumentRangeFormattingEditProvider(
                        "sql",
                        {
                          provideDocumentRangeFormattingEdits: (e, t) => [
                            { range: t, text: (0, i.WU)(e.getValueInRange(t)) },
                          ],
                        }
                      ),
                      v && e.focus();
                  },
                })
              ),
              b
                ? (0, o.jsx)(d.p, {
                    error: f,
                    className: "px-1 w-full whitespace-pre-line",
                    children: b,
                  })
                : null,
            ],
          })
        );
      };
    },
    483519: function (e, t, n) {
      "use strict";
      var o = n(824246),
        r = n(604375),
        s = n(916115),
        i = n(713222),
        a = n(60042),
        l = n.n(a),
        c = n(154184),
        d = n(720227);
      const u = (0, r.ZL)(() => ({
        scrollBarColor: {
          scrollbarColor: "rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1)",
          scrollbarWidth: "thin",
        },
      }));
      t.Z = function ({
        className: e,
        outputValue: t,
        setOutputTabOpen: n,
        tab: r,
        setTab: a,
        fetchError: p,
        fullScreenEnabled: m,
        fullWidthEnabled: f,
      }) {
        const h = u();
        return (0, o.jsxs)("div", {
          className: (0, d.m)(
            l()(
              "flex flex-col",
              { "pl-4": m && !f, "pl-2 w-3/12": !m && !f },
              e
            )
          ),
          children: [
            (0, o.jsxs)("div", {
              className: l()(
                "flex flex-row rounded-t-lg h-16 justify-between bg-[#2d2d30]",
                { "w-full": !m, "w-[23vw]": m }
              ),
              children: [
                (0, o.jsx)(s.m, {
                  className: "pt-2 pl-3 border-none",
                  value: r,
                  tabs: [
                    { id: c.A.STDOUT, label: "Output" },
                    { id: c.A.STDERR, label: "Errors" },
                  ],
                  onChange: (e) => a(e),
                }),
                (0, o.jsx)("div", {
                  className: "pt-4 pr-2",
                  children: (0, o.jsx)(i.J, {
                    icon: "xmark",
                    variant: "white",
                    onClick: (e) => {
                      e.stopPropagation(), n(!1);
                    },
                    tooltipProps: { side: "top" },
                    tooltip: "Hide Output/Errors",
                  }),
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: l()("flex flex-row rounded-b-lg bg-[#1e1e1e]", {
                "h-[80vh] w-[23vw] z-[10002]": m,
                "h-64 w-full": !m,
              }),
              children: (0, o.jsx)("div", {
                className: l()(
                  "text-sm p-2 pl-3 overscroll-x-contain overflow-y-scroll font-mono w-full whitespace-pre-wrap",
                  h.scrollBarColor,
                  {
                    "text-neutral-0": r === c.A.STDOUT,
                    "text-danger-400": r === c.A.STDERR || p,
                  }
                ),
                children: p
                  ? "Error executing code - this usually occurs due to execution timeout. Please try again."
                  : t,
              }),
            }),
          ],
        });
      };
    },
    884400: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return ce;
        },
      });
      var o = n(824246),
        r = n(792739),
        s = n(827378),
        i = n(416534),
        a = n(722030),
        l = n(916353),
        c = n(244443),
        d = n(713222),
        u = n(776845),
        p = n(89916),
        m = n(60042),
        f = n.n(m),
        h = n(892328),
        g = n(483519),
        b = n(236125),
        v = n(527467),
        x = n(298784),
        y = n.n(x);
      function w(e, t, n) {
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
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              w(e, t, n[t]);
            });
        }
        return e;
      }
      const k = (0, b.Ue)()(
        (0, v.mW)((e, t) => ({
          scratchpadCodeState: {},
          setScratchpadCodeState: (t, n) => {
            e((e) => ({
              scratchpadCodeState: j({}, e.scratchpadCodeState, {
                [t]: y().merge(e.scratchpadCodeState[t], n),
              }),
            }));
          },
          getScratchpadCodeState: (e) => {
            const n = t().scratchpadCodeState[e];
            return n && 0 !== Object.keys(n).length ? n : null;
          },
        }))
      );
      var C = n(159400),
        S = n(720227);
      const T = ({
          className: e,
          codePopupButtonClassName: t,
          codeBlocks: n,
          codeBlockIndex: r,
          language: s,
          handleSetEditorCode: i,
          handleOpen: a,
          open: l,
        }) => {
          const c = n.reduce(
            (e, t) => (t.language === s ? e + t.code + "\n" : e),
            ""
          );
          return (0, o.jsx)("div", {
            className: (0, S.m)("flex flex-col bg-[#242424] rounded-b-lg", e),
            children: (0, o.jsxs)("div", {
              className: "flex flex-col w-full h-full pl-1",
              children: [
                (0, o.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, o.jsxs)("div", {
                      className:
                        "flex flex-row justify-between items-center pl-1 pt-1 h-16",
                      children: [
                        (0, o.jsxs)("div", {
                          className: "flex flex-row items-center",
                          children: [
                            (0, o.jsx)(d.J, {
                              icon: ["fas", "code"],
                              size: "md",
                              className:
                                "fill-neutral-300/50 stroke-success-500",
                              variant: "white",
                            }),
                            (0, o.jsx)(u.ZT.Subtitle4, {
                              className: "text-neutral-0 pl-1 text-lg",
                              children: "Code Snippets",
                            }),
                          ],
                        }),
                        (0, o.jsx)("div", {
                          className: "pr-2",
                          children: (0, o.jsx)(d.J, {
                            icon: l
                              ? ["fas", "chevron-down"]
                              : ["fas", "chevron-up"],
                            size: "md",
                            className: "fill-neutral-300/50 stroke-neutral-300",
                            variant: "white",
                            onClick: () => a(!l),
                          }),
                        }),
                      ],
                    }),
                    (0, o.jsx)("section", {
                      className: "ml-2",
                      children:
                        l &&
                        (0, o.jsx)(N, {
                          className:
                            "hover:bg-neutral-700 w-fit flex flex-row items-center",
                          variant: "long",
                          code: c,
                          language: s,
                          selected: !1,
                          title: "Replace Current Code With All Code Snippets",
                          icon: ["fas", "arrow-right"],
                          onClick: () => i(c),
                        }),
                    }),
                  ],
                }),
                (0, o.jsx)("section", {
                  className: "ml-2 mt-4 h-full overflow-y-hidden",
                  children:
                    l &&
                    (0, o.jsx)("div", {
                      className: "flex flex-row overflow-x-auto pb-2",
                      children: n.map((e, n) =>
                        (0, o.jsx)(
                          "div",
                          {
                            className: "w-32 h-20 pr-2 shrink-0",
                            children: (0, o.jsx)(N, {
                              className: t,
                              code: e.code,
                              language: e.language,
                              selected: r === n,
                              title: `Block ${(n + 1).toString()}`,
                              icon: ["far", "clipboard"],
                              onClickTransitionIcon: ["fas", "check"],
                              onClick: () => {
                                navigator.clipboard.writeText(e.code);
                              },
                            }),
                          },
                          n
                        )
                      ),
                    }),
                }),
              ],
            }),
          });
        },
        N = ({
          className: e,
          code: t,
          language: n,
          selected: r,
          title: i,
          onClick: a,
          icon: c,
          onClickTransitionIcon: u,
          variant: p = "block",
        }) => {
          const { 0: m, 1: f } = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              if (m) {
                const e = setTimeout(() => f(!1), 1e3);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [m]),
            (0, o.jsx)(l.u, {
              target: (0, o.jsx)("div", {
                className: (0, S.m)(
                  "bg-[#2d2d30] h-full w-full align-middle hover:cursor-pointer rounded-md",
                  e
                ),
                children: (0, o.jsxs)("div", {
                  className:
                    "block" === p
                      ? "flex flex-col h-full w-full md:flex-wrap justify-between"
                      : "flex items-center",
                  onClick: (e) => {
                    a && a(e), f(!0);
                  },
                  children: [
                    (0, o.jsxs)("div", {
                      className: "flex flex-col items-baseline p-2",
                      children: [
                        (0, o.jsx)("span", {
                          className: "text-neutral-0 text-xs font-medium",
                          children: i,
                        }),
                        r &&
                          (0, o.jsx)("span", {
                            className: "text-primary-300 text-[9px]",
                            children: " Current ",
                          }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: (0, S.m)(
                        "flex flex-row justify-end pr-1",
                        "block" === p ? "pb-1" : ""
                      ),
                      children:
                        m && u
                          ? (0, o.jsx)(d.J, {
                              icon: u,
                              size: "sm",
                              className:
                                "fill-neutral-300/50 stroke-neutral-300",
                              variant: "white",
                            })
                          : c &&
                            (0, o.jsx)(d.J, {
                              icon: c,
                              size: "sm",
                              className:
                                "fill-neutral-300/50 stroke-success-500",
                              variant: "white",
                            }),
                    }),
                  ],
                }),
              }),
              side: "top",
              delayDuration: 0.1,
              text: (0, o.jsx)("div", {
                className: "whitespace-pre-wrap",
                children: (0, o.jsx)(C.U, { markdown: `~~~${n}\n${t}\n~~~` }),
              }),
            })
          );
        };
      var O = n(135338),
        E = n(232337),
        P = n(729316),
        M = n(786980),
        R = n(243467);
      function I(e, t, n) {
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              I(e, t, n[t]);
            });
        }
        return e;
      }
      function D(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      const L = M.fC,
        _ = s.forwardRef((e, t) => {
          var { className: n } = e,
            r = D(e, ["className"]);
          return (0, o.jsx)(M.ck, A({ ref: t, className: f()("-mt-8", n) }, r));
        });
      _.displayName = "AccordionItem";
      const B = s.forwardRef((e, t) => {
        var { className: n, hint: r, children: s } = e,
          i = D(e, ["className", "hint", "children"]);
        return (0, o.jsx)(M.h4, {
          className: "flex",
          children: (0, o.jsxs)(
            M.xz,
            A(
              {
                ref: t,
                className: f()(
                  "flex flex-1 items-center text-sm transition-all justify-between [&[data-state=open]>div>svg]:rotate-90",
                  n
                ),
              },
              i,
              {
                children: [
                  (0, o.jsxs)("div", {
                    className: "flex gap-2 font-bold text-neutral-0",
                    children: [
                      (0, o.jsx)(R.XCv, {
                        className:
                          "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                      }),
                      s,
                    ],
                  }),
                  r &&
                    (0, o.jsx)("div", {
                      className: "text-muted-foreground",
                      children: r,
                    }),
                ],
              }
            )
          ),
        });
      });
      B.displayName = M.xz.displayName;
      const $ = s.forwardRef((e, t) => {
        var { className: n, children: r } = e,
          s = D(e, ["className", "children"]);
        return (0, o.jsx)(
          M.VY,
          A(
            {
              ref: t,
              className:
                "overflow-hidden text-sm pl-10 pr-3 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            },
            s,
            {
              children: (0, o.jsx)("div", {
                className: f()("pb-0 pt-0 text-neutral-0", n),
                children: r,
              }),
            }
          )
        );
      });
      $.displayName = M.VY.displayName;
      var Z,
        H = n(322107),
        z = n(428907),
        F = n(736166);
      !(function (e) {
        (e.None = "none"),
          (e.ExpandAll = "expand-all"),
          (e.CollapseAll = "collapse-all");
      })(Z || (Z = {}));
      const {
        Provider: V,
        useContextStore: W,
        useImperativeApi: U,
      } = (function (e) {
        const t = s.createContext(void 0);
        return {
          Provider: ({ children: n }) => {
            const { 0: r } = (0, s.useState)(() => (0, F.M)(e));
            return (0, o.jsx)(t.Provider, { value: r, children: n });
          },
          useContextStore: function (e) {
            const n = s.useContext(t);
            if (!n)
              throw new Error("useContextStore must be used within a Provider");
            return (0, b.oR)(n, e);
          },
          useImperativeApi: function () {
            const e = s.useContext(t);
            if (!e)
              throw new Error(
                "useImperativeApi must be used within a Provider"
              );
            return e;
          },
        };
      })((e) => ({
        globalValue: Z.None,
        onChangeGlobalValue: (t) => {
          e(
            (0, z.Uy)((e) => {
              e.globalValue = t;
            })
          );
        },
      }));
      function K(e, t, n) {
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
      function J(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function G({ className: e, children: t }) {
        return (0, o.jsx)(V, {
          children: (0, o.jsx)(q, { className: e, children: t }),
        });
      }
      function q({ className: e, children: t }) {
        const { globalValue: n, onChangeGlobalValue: a } = W((e) => ({
          globalValue: e.globalValue,
          onChangeGlobalValue: e.onChangeGlobalValue,
        }));
        return (
          (0, s.useEffect)(() => {
            a(Z.ExpandAll);
          }, [a]),
          (0, o.jsxs)("div", {
            className: f()("relative group", e),
            children: [
              (0, o.jsxs)(i.zx, {
                className:
                  "absolute top-2.5 right-3 h-6 group-hover:flex gap-2 bg-transparent hover:bg-secondary hidden",
                size: "sm",
                onClick: (e) => {
                  e.stopPropagation(),
                    a(n === Z.CollapseAll ? Z.ExpandAll : Z.CollapseAll);
                },
                children: [
                  (0, o.jsx)(r.G, { icon: H.iAX }),
                  n === Z.CollapseAll ? "Expand all" : "Collapse all",
                ],
              }),
              t,
            ],
          })
        );
      }
      var Q = (0, s.forwardRef)((e, t) => {
        var n,
          { children: r, defaultValue: i } = e,
          a = J(e, ["children", "defaultValue"]);
        const { 0: l, 1: c } = (0, s.useState)(
            null !== (n = i) && void 0 !== n ? n : []
          ),
          { globalValue: d, onChangeGlobalValue: u } = W((e) => ({
            globalValue: e.globalValue,
            onChangeGlobalValue: e.onChangeGlobalValue,
          })),
          p = s.Children.count(r);
        return (
          (0, s.useEffect)(() => {
            c((e) => {
              switch (d) {
                case Z.ExpandAll:
                  return [...Array(p).keys()].map((e, t) => `item-${t}`);
                case Z.CollapseAll:
                  return [];
                default:
                  return e;
              }
            });
          }, [d, p]),
          (0, o.jsx)(
            L,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  o.forEach(function (t) {
                    K(e, t, n[t]);
                  });
              }
              return e;
            })({ ref: t }, a, {
              type: "multiple",
              value: l,
              onValueChange: (e) => {
                d !== Z.None && u(Z.None), c(e);
              },
              children: r,
            })
          )
        );
      });
      Q.displayName = "NestedAccordion";
      function Y(e) {
        return (
          y().isNull(e) ||
          y().isBoolean(e) ||
          y().isNumber(e) ||
          y().isString(e)
        );
      }
      function X() {
        return (0, o.jsx)("span", {
          className:
            "text-[#ce9178] overflow-auto whitespace-pre-line break-words items-baseline",
          children: "Null",
        });
      }
      function ee({ value: e }) {
        return (0, o.jsx)("span", {
          className:
            "capitalize text-[#ce9178] overflow-auto whitespace-pre-line break-words items-baseline",
          children: e.toString(),
        });
      }
      function te({ value: e }) {
        return (0, o.jsx)("span", {
          className:
            "text-[#b5cea8] overflow-auto whitespace-pre-line break-words items-baseline",
          children: e,
        });
      }
      function ne({ value: e }) {
        return e.startsWith("http") || e.startsWith("https")
          ? (0, o.jsx)("a", {
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              style: { color: "#179fff" },
              className:
                "!text-[#179fff] overflow-auto whitespace-pre-line break-words items-baseline",
              children: e,
            })
          : (0, o.jsx)("span", {
              className:
                "text-[#ce9178] overflow-auto whitespace-pre-line break-words items-baseline",
              children: e,
            });
      }
      function oe({ value: e, depth: t = 0 }) {
        return e.every(Y)
          ? (0, o.jsx)("span", {
              className: "divide-x",
              children: e.map((e, t) =>
                (0, o.jsx)(
                  "span",
                  { className: "px-2 last:pr-0 first:pl-0", children: se(e) },
                  t
                )
              ),
            })
          : (0, o.jsx)(Q, {
              className: "w-full border-b-0",
              defaultValue: [t <= 3 ? "item-0" : ""],
              children: e.map((e, n) =>
                (0, o.jsxs)(
                  _,
                  {
                    value: `item-${n}`,
                    className: "w-full border-b-0 pb-0",
                    children: [
                      (0, o.jsx)(B, {
                        className:
                          "py-2 mb-1 pl-1 hover:bg-neutral-500 rounded",
                        children: `Item ${n + 1}`,
                      }),
                      (0, o.jsx)($, {
                        className:
                          "py-2 mb-3 -ml-7 pl-3 border-l border-neutral-500 overflow-scroll",
                        children: se(e, t + 1),
                      }),
                    ],
                  },
                  n
                )
              ),
            });
      }
      function re({ value: e, depth: t = 1 }) {
        return (0, o.jsx)("div", {
          children: Object.entries(e).map(([e, n], r) =>
            Y(n)
              ? (0, o.jsxs)(
                  "div",
                  {
                    style: { width: "120vw" },
                    className: "pb-3 mb-1 pl-2 flex items-baseline",
                    children: [
                      (0, o.jsx)("div", {
                        className: "whitespace-pre",
                        children: `${y().startCase(e)}:`,
                      }),
                      "\xa0",
                      (0, o.jsx)(l.u, {
                        asChild: !0,
                        target: (0, o.jsx)("div", {
                          className: "overflow-scroll",
                          children: se(n),
                        }),
                        text: (0, o.jsx)("div", {
                          className: "break-words max-w-md",
                          children: n,
                        }),
                      }),
                    ],
                  },
                  r
                )
              : (0, o.jsx)(
                  Q,
                  {
                    className: "w-full border-b-0",
                    defaultValue: [t <= 3 ? "item-0" : ""],
                    children: (0, o.jsxs)(_, {
                      value: "item-0",
                      className: "w-full border-b-0 pb-0",
                      children: [
                        (0, o.jsx)(B, {
                          className:
                            "py-2 mb-1 pl-1 hover:bg-neutral-500 relative rounded text-neutral-0",
                          children: `${y().startCase(e)}:`,
                        }),
                        (0, o.jsx)($, {
                          className:
                            "py-2 mb-3 -ml-7 pl-3 border-l border-neutral-500 overflow-scroll",
                          children: se(n, t + 1),
                        }),
                      ],
                    }),
                  },
                  r
                )
          ),
        });
      }
      function se(e, t = 1) {
        return y().isNull(e)
          ? (0, o.jsx)(X, {})
          : y().isBoolean(e)
          ? (0, o.jsx)(ee, { value: e })
          : y().isNumber(e)
          ? (0, o.jsx)(te, { value: e })
          : y().isString(e)
          ? (0, o.jsx)(ne, { value: e })
          : y().isArray(e)
          ? (0, o.jsx)(oe, { value: e, depth: t })
          : y().isObject(e)
          ? (0, o.jsx)(re, { value: e, depth: t })
          : null;
      }
      const ie = s.memo(({ className: e, content: t, disableYScroll: n }) => {
        const { 0: r, 1: i } = (0, s.useMemo)(() => {
          try {
            return [JSON.parse(t), !0];
          } catch (e) {
            return [t, !1];
          }
        }, [t]);
        return i
          ? (0, o.jsx)(G, {
              className: f()("px-3 pt-7 pb-2.5", !n && "overflow-y-auto", e),
              children: se(r),
            })
          : null;
      });
      ie.displayName = "JsonRenderer";
      const ae = { json: ie };
      var le = n(542280);
      const ce = (0, s.memo)(
          ({
            rawCode: e,
            originalLanguage: t,
            setOpen: n,
            codeBlocksInMarkdownText: m,
            codeBlockIndex: b,
            customCodeEnvironments: v,
          }) => {
            const x = ue(),
              { setScratchpadCodeState: y, getScratchpadCodeState: w } = k(),
              j = (0, s.useMemo)(
                () =>
                  E.createHash("sha256")
                    .update(`${e}-${t}-codingScratchpad}`)
                    .digest("hex"),
                [e, t]
              );
            var C;
            const N =
              null !==
                (C =
                  null === v || void 0 === v
                    ? void 0
                    : v.find((e) => e.language === t)) && void 0 !== C
                ? C
                : void 0;
            var M;
            const R = {
              code: e,
              language:
                null !==
                  (M = null === N || void 0 === N ? void 0 : N.language) &&
                void 0 !== M
                  ? M
                  : t,
              selectedCustomCodeEnvironment: N,
            };
            var I;
            (0, s.useEffect)(() => {
              w(j) || y(j, R);
            }, [j, w, y]);
            const {
                code: A,
                language: D,
                selectedCustomCodeEnvironment: L,
              } = null !== (I = w(j)) && void 0 !== I ? I : R,
              _ = !!p.LANGUAGE_OPTIONS.find(({ id: e }) => e === D) || !!L,
              { 0: B, 1: $ } = (0, s.useState)(m.length > 1),
              { 0: Z, 1: H } = (0, s.useState)(!0),
              {
                outputTabOpen: z,
                outputValue: F,
                tab: V,
                isFetching: W,
                fetchError: U,
                loadingTaskIdForLogging: K,
                handleExecuteCode: J,
                setOutputTabOpen: G,
                setTab: q,
              } = (0, O.Z)({
                storeKey: j,
                code: A,
                language: D,
                customCodeEnvironment: L,
              }),
              Q = (0, s.useMemo)(() => {
                if ("json" !== D)
                  return { formattingSuccessful: !1, formattedContent: A };
                const e = de[D.toLowerCase()];
                return e
                  ? e(A)
                  : { formattingSuccessful: !1, formattedContent: A };
              }, [A, D]),
              Y = ae[D],
              { formattingSuccessful: X, formattedContent: ee } = Q,
              te = !!Y && !!X,
              { 0: ne, 1: oe } = (0, s.useState)(te),
              re = (e) => {
                y(j, { code: e });
              };
            return (0, o.jsx)(o.Fragment, {
              children: (0, o.jsx)("div", {
                className:
                  "fixed top-0 left-0 w-full h-full bg-utility-black/50 flex flex-col justify-center items-center z-[2] text-danger",
                onClick: (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    ((e) => {
                      e.target === e.currentTarget && n(!1);
                    })(e);
                },
                children: (0, o.jsxs)("div", {
                  className: "flex flex-row w-[80vw] h-[80vh]",
                  children: [
                    (0, o.jsxs)("div", {
                      className: (0, S.m)(
                        "flex flex-col z-[2]",
                        !ne && z ? "w-9/12" : "w-full"
                      ),
                      children: [
                        (0, o.jsxs)("div", {
                          className:
                            "flex flex-row rounded-t-lg h-16 justify-between bg-[#2d2d30] w-full z-50",
                          children: [
                            (0, o.jsx)(P.y, {
                              selectMenuClassName: "pl-1 pt-2",
                              selectMenuButtonClassName:
                                "py-0 h-12 w-40 [&>p]:m-0",
                              selectMenuOptionClassName:
                                "list-none w-40 py-0.5 px-0",
                              customCodeEnvironments: v,
                              selectedLanguage: D,
                              selectedCustomCodeEnvironment: L,
                              handleLanguageChange: (e) => {
                                y(j, { language: e });
                              },
                              setSelectedCustomCodeEnvironment: (e) =>
                                y(j, { selectedCustomCodeEnvironment: e }),
                            }),
                            _ &&
                              (0, o.jsx)("div", {
                                className: "pt-3 pr-4",
                                children: (0, o.jsxs)(i.zx, {
                                  className: f()("h-10", {
                                    "w-[102px]": W,
                                    "w-24": !W,
                                  }),
                                  onClick: () => J(),
                                  size: "sm",
                                  variant: "primary",
                                  disabled: W || K,
                                  children: [
                                    W
                                      ? (0, o.jsx)(a.$, {
                                          className: "",
                                          size: "xs",
                                          variant: "primary",
                                        })
                                      : (0, o.jsx)(r.G, { icon: "play" }),
                                    (0, o.jsx)("span", {
                                      className: "pl-2",
                                      children: W ? "Executing" : "Run Code",
                                    }),
                                  ],
                                }),
                              }),
                            (0, o.jsxs)("div", {
                              className: "flex flex-row pr-2 pt-4",
                              children: [
                                te &&
                                  (0, o.jsx)(l.u, {
                                    asChild: !0,
                                    side: "top",
                                    target: (0, o.jsx)("div", {
                                      children: (0, o.jsx)(c.r, {
                                        className: "pr-3 pb-4",
                                        checked: ne,
                                        onCheckedChange: (e) => oe(e),
                                      }),
                                    }),
                                    text: (0, o.jsx)("div", {
                                      className:
                                        "whitespace-pre-wrap bg-neutral-1000",
                                      children: ne
                                        ? "Show Standard View"
                                        : "Show Pretty View",
                                    }),
                                    delayDuration: 0.1,
                                  }),
                                (0, o.jsx)(d.J, {
                                  icon: "copy",
                                  variant: "white",
                                  onClick: (e) => {
                                    e.stopPropagation(),
                                      navigator.clipboard.writeText(A);
                                  },
                                  tooltipProps: { side: "top" },
                                  tooltip: "Copy Code",
                                }),
                                !ne &&
                                  !z &&
                                  (0, o.jsx)(d.J, {
                                    icon: z
                                      ? "arrow-to-left"
                                      : "arrow-to-right",
                                    variant: "white",
                                    onClick: (e) => {
                                      e.stopPropagation(), G(!z);
                                    },
                                    tooltipProps: { side: "top" },
                                    tooltip: "Open Output/Errors Tab",
                                  }),
                                (0, o.jsx)(d.J, {
                                  icon: "xmark",
                                  variant: "white",
                                  onClick: (e) => {
                                    e.stopPropagation(), n(!1);
                                  },
                                  tooltipProps: { side: "top" },
                                  tooltip: "Close Scratchpad",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Z &&
                          !ne &&
                          (0, o.jsxs)("div", {
                            className:
                              "flex flex-row h-[4vh] bg-[#242424] px-2 justify-between items-center bg-neutral-9",
                            children: [
                              (0, o.jsxs)("div", {
                                className:
                                  "flex flex-row justify-center items-center gap-1",
                                children: [
                                  (0, o.jsx)("div", {
                                    children: (0, o.jsx)(d.J, {
                                      icon: "exclamation-circle",
                                      variant: "white",
                                      size: "sm",
                                    }),
                                  }),
                                  (0, o.jsx)(u.ZT.Paragraph1, {
                                    className: "text-neutral-0 text-xs",
                                    children:
                                      "Changes made in this scratchpad won't be saved in your response.",
                                  }),
                                ],
                              }),
                              (0, o.jsx)("div", {
                                children: (0, o.jsx)(d.J, {
                                  icon: "xmark",
                                  variant: "white",
                                  onClick: (e) => {
                                    e.stopPropagation(), H(!1);
                                  },
                                  size: "sm",
                                }),
                              }),
                            ],
                          }),
                        ne && te
                          ? (0, o.jsx)(Y, {
                              className: (0, S.m)(
                                "bg-neutral-900 overflow-auto text-neutral-0 flex-1 w-full whitespace-pre-line rounded-b-md",
                                x.scrollbarStyles
                              ),
                              content: ee,
                              disableYScroll: !0,
                            })
                          : (0, o.jsx)("div", {
                              className: "flex flex-col flex-1 min-h-0",
                              children: (0, o.jsx)(h.B, {
                                className:
                                  "flex flex-row bg-[#2d2d30] flex-1 min-h-0",
                                value: A,
                                onKeyDown: (e) => {
                                  "Space" === e.code && e.stopPropagation();
                                },
                                onChange: re,
                                editorProps: { language: D, theme: "vs-dark" },
                                editorOptions: {
                                  fontSize: 14,
                                  minimap: { enabled: !0 },
                                  scrollBeyondLastLine: !1,
                                  padding: { top: 19, bottom: 8 },
                                  formatOnPaste: !0,
                                  formatOnType: !0,
                                  renderLineHighlight: "none",
                                  readOnly: !1,
                                  hover: { enabled: !1 },
                                  inlineSuggest: { enabled: !0 },
                                  readOnlyMessage: {
                                    value: "Editor is in read-only mode",
                                  },
                                },
                              }),
                            }),
                        !ne &&
                          (0, o.jsx)(T, {
                            className: "z-[50]",
                            codeBlocks: m,
                            codeBlockIndex: b,
                            language: D,
                            handleSetEditorCode: re,
                            handleOpen: (e) => $(e),
                            open: B,
                          }),
                      ],
                    }),
                    !ne &&
                      z &&
                      (0, o.jsx)(g.Z, {
                        className: "flex-1 min-w-0 h-full w-3/12",
                        outputValue: null !== F && void 0 !== F ? F : "",
                        setOutputTabOpen: G,
                        tab: V,
                        setTab: q,
                        fetchError: U,
                        fullScreenEnabled: !0,
                        fullWidthEnabled: !1,
                      }),
                  ],
                }),
              }),
            });
          }
        ),
        de = {
          json: function (e) {
            try {
              const t = JSON.parse(e);
              return {
                formattingSuccessful: !0,
                formattedContent: JSON.stringify(t, null, 2),
              };
            } catch (t) {
              return { formattingSuccessful: !1, formattedContent: e };
            }
          },
        };
      const ue = (0, le.ZL)(() => ({
        scrollbarStyles: {
          "& div": {
            scrollbarColor: "rgba(248, 248, 242, 0.5) rgba(0, 0, 0, 0)",
            scrollbarWidth: "thin",
          },
        },
      }));
    },
    902818: function (e, t, n) {
      "use strict";
      var o = n(824246),
        r = n(792739),
        s = n(827378),
        i = n(749449),
        a = n(720227),
        l = n(722030),
        c = n(713222),
        d = n(252302),
        u = n(89916),
        p = n(403670),
        m = n(95251),
        f = n(884400),
        h = n(135338),
        g = n(534522),
        b = n(232337),
        v = n(283888),
        x = n(542280),
        y = n(60042),
        w = n.n(y);
      const j = (e) => u.fullLanguageMap[e] || e.toUpperCase(),
        k = (0, s.memo)(
          ({
            code: e,
            languageMatch: t,
            languageOverride: n,
            codeBlocksInMarkdownText: x,
            codeBlockIndex: y,
            autoRunDependenciesComplete: k,
            loading: S,
            defaultExpanded: T = !0,
          }) => {
            var N;
            const O = C(),
              { 0: E, 1: P } = (0, s.useState)(T);
            var M;
            const R =
                null !==
                  (M =
                    null !== n && void 0 !== n
                      ? n
                      : null === t || void 0 === t
                      ? void 0
                      : t[1].toLowerCase()) && void 0 !== M
                  ? M
                  : "",
              I = (0, s.useContext)(g.p),
              A =
                null === I ||
                void 0 === I ||
                null === (N = I.codingConfig) ||
                void 0 === N
                  ? void 0
                  : N.customCodeEnvironments,
              D =
                1 === (null === A || void 0 === A ? void 0 : A.length) ||
                ((!A || 0 === A.length) &&
                  !!u.LANGUAGE_OPTIONS.find(({ id: e }) => e === R)),
              L = (0, s.useMemo)(
                () =>
                  S
                    ? ""
                    : b
                        .createHash("sha256")
                        .update(`${e}-${R}-executableCodeBlock`)
                        .digest("hex"),
                [e, R, S]
              ),
              { getScratchpadOpenState: _, setScratchpadOpenState: B } = (0,
              v.U)(),
              [$, Z] = [_(L), (e) => B(L, e)],
              {
                outputTabOpen: H,
                outputValue: z,
                tab: F,
                isFetching: V,
                fetchError: W,
                loadingTaskIdForLogging: U,
                handleExecuteCode: K,
                setOutputTabOpen: J,
                setTab: G,
              } = (0, h.Z)({
                storeKey: L,
                code: e,
                language: R,
                customCodeEnvironment:
                  null === A || void 0 === A ? void 0 : A[0],
              }),
              q = (e) => {
                e.stopPropagation(), P(!E);
              };
            (0, s.useEffect)(() => {
              var e, t, n;
              const o =
                null !==
                  (n =
                    null === (e = I.codingConfig) || void 0 === e
                      ? void 0
                      : e.autoRunExecutableCodeBlocks) && void 0 !== n
                  ? n
                  : null === (t = I.generalMarkdownConfig) || void 0 === t
                  ? void 0
                  : t.autoRunExecutableCodeBlocks;
              k && D && o && K();
            }, [k, I.codingConfig, I.generalMarkdownConfig, D]);
            const Q = e.split(/\r\n|\r|\n/).length;
            return (0, o.jsx)(o.Fragment, {
              children: (0, o.jsxs)("div", {
                className: (0, a.m)(
                  "group bg-transparent relative px-0 py-0 scale-theme",
                  E ? "overflow-auto" : "overflow-hidden"
                ),
                children: [
                  (0, o.jsxs)("div", {
                    className:
                      "text-white text-xs font-medium font-mono px-3 flex items-center justify-between bg-neutral-800 rounded-t-md py-1.5",
                    children: [
                      (0, o.jsx)("span", {
                        className: "text-neutral-0",
                        children: j(R),
                      }),
                      (0, o.jsxs)("div", {
                        className: "flex items-center justify-end",
                        children: [
                          !S &&
                            D &&
                            (0, o.jsx)("div", {
                              className: "pr-1",
                              children: V
                                ? (0, o.jsx)(l.$, {
                                    className: "pr-2",
                                    size: "xs",
                                    variant: "primary",
                                  })
                                : (0, o.jsx)(c.J, {
                                    icon: ["far", "play"],
                                    className: "hover:bg-neutral-700/40",
                                    variant: "white",
                                    onClick: (e) => {
                                      e.stopPropagation(), K();
                                    },
                                    disabled: V || U,
                                    tooltip: "Run Code",
                                    tooltipProps: {
                                      side: "top",
                                      delayDuration: 100,
                                    },
                                  }),
                            }),
                          !S &&
                            A &&
                            (null === A || void 0 === A ? void 0 : A.length) >
                              1 &&
                            (0, o.jsx)(c.J, {
                              icon: ["far", "exclamation-circle"],
                              className: "hover:bg-neutral-800",
                              variant: "white",
                              tooltip:
                                "Please use the coding scratchpad (click on the pencil icon to the right) to execute and test your code.",
                              tooltipProps: { side: "top", delayDuration: 100 },
                            }),
                          !S &&
                            (0, o.jsx)("div", {
                              className: "pr-1",
                              children: (0, o.jsx)(c.J, {
                                icon: ["far", "pen"],
                                className: "hover:bg-neutral-700/40",
                                variant: "white",
                                onClick: (e) => {
                                  e.stopPropagation(),
                                    e.preventDefault(),
                                    Z(!0);
                                },
                                tooltip:
                                  "Scratchpad (changes made are not saved)",
                                tooltipProps: {
                                  side: "top",
                                  delayDuration: 100,
                                },
                              }),
                            }),
                          (0, o.jsx)("div", {
                            className: "pl-2 pr-3 pt-1",
                            children: (0, o.jsx)(m.f, { code: e }),
                          }),
                          Q > 15 &&
                            E &&
                            (0, o.jsxs)("button", {
                              onClick: (e) => q(e),
                              className:
                                "border ml-1 rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0",
                              children: [
                                "Collapse",
                                (0, o.jsx)(r.G, {
                                  icon: "chevron-up",
                                  className: "ml-1",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsx)("div", {
                        className: w()(
                          "p-3 bg-neutral-900",
                          E
                            ? "max-h-[900px] overflow-auto rounded-b-md"
                            : "max-h-[290px] overflow-hidden",
                          O.codeblockStyle
                        ),
                        children: (0, o.jsx)(i.Z, {
                          children: e,
                          style: d.Q,
                          language: R,
                          PreTag: "div",
                          CodeTag: "div",
                          showLineNumbers: !0,
                        }),
                      }),
                      Q > 15 &&
                        !E &&
                        (0, o.jsx)("div", {
                          className:
                            "flex items-center justify-center py-2 text-white text-xs font-medium font-mono bg-neutral-900 rounded-b-md",
                          children: (0, o.jsxs)("button", {
                            onClick: (e) => q(e),
                            className:
                              "border ml-1 text-white rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0",
                            children: [
                              "Expand",
                              (0, o.jsx)(r.G, {
                                icon: "chevron-down",
                                className: "ml-1",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  "text" !== R &&
                    H &&
                    (0, o.jsx)("div", {
                      className: "border-none pt-4",
                      onClick: (e) => e.stopPropagation(),
                      children: (0, o.jsx)(p.Z, {
                        className: "w-full h-40 p-0 whitespace-pre-line",
                        outputValue: null !== z && void 0 !== z ? z : "",
                        setOutputTabOpen: J,
                        tab: F,
                        setTab: G,
                        fetchError: W,
                        fullScreenEnabled: !1,
                        fullWidthEnabled: !0,
                      }),
                    }),
                  $ &&
                    (0, o.jsx)("div", {
                      className:
                        "fixed top-0 left-0 w-full h-full bg-utility-black/50 flex flex-col justify-center items-center z-[100]",
                      children: (0, o.jsx)(f.Q, {
                        rawCode: e,
                        originalLanguage: R,
                        codeBlocksInMarkdownText: x,
                        setOpen: Z,
                        codeBlockIndex: y,
                        customCodeEnvironments: A,
                      }),
                    }),
                ],
              }),
            });
          }
        );
      (k.displayName = "ExecutableCodeBlock"), (t.Z = k);
      const C = (0, x.ZL)(() => ({
        codeblockStyle: {
          '& div[class*="language-"]': {
            color: "rgb(248, 248, 242)",
            background: "none",
            fontFamily:
              '"Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            textAlign: "left",
            whiteSpace: "pre-wrap !important",
            wordSpacing: "normal",
            wordBreak: "normal",
            overflowWrap: "normal",
            lineHeight: "1.5",
            tabSize: 4,
            hyphens: "none",
            fontSize: "10px",
            width: "800px !important",
          },
          "& div": {
            scrollbarColor: "rgba(248, 248, 242, 0.5) rgba(0, 0, 0, 0)",
            scrollbarWidth: "thin",
          },
        },
      }));
    },
    729316: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return l;
        },
      });
      var o = n(824246),
        r = n(412937),
        s = n(720227),
        i = n(89916),
        a = n(827378);
      const l = ({
        className: e,
        selectMenuClassName: t,
        selectMenuButtonClassName: n,
        selectMenuOptionClassName: l,
        customCodeEnvironments: c,
        selectedLanguage: d,
        selectedCustomCodeEnvironment: u,
        useFullLanguageOptions: p,
        disabled: m,
        handleLanguageChange: f,
        setSelectedCustomCodeEnvironment: h,
        onBlur: g,
      }) => {
        const b = (0, a.useMemo)(
            () =>
              Object.keys(i.fullLanguageMap)
                .sort()
                .map((e) => ({ id: e, name: i.fullLanguageMap[e] })),
            []
          ),
          v = (0, a.useMemo)(() => {
            if (c && c.length > 0) {
              const e = c.map((e) => ({ id: e.name, name: "*" + e.name })),
                t = p
                  ? b
                  : [
                      ...i.LANGUAGE_OPTIONS,
                      ...i.SUPPORTED_PRETTY_PRINT_FORMATS,
                    ],
                n = new Set(e.map((e) => e.id));
              return [...e, ...t.filter((e) => !n.has(e.id))];
            }
            return p
              ? b
              : [...i.LANGUAGE_OPTIONS, ...i.SUPPORTED_PRETTY_PRINT_FORMATS];
          }, [c, p, b]);
        var x;
        return (0, o.jsx)("div", {
          className: (0, s.m)("flex flex-row z-[3] transform scale-[0.85]", e),
          children: (0, o.jsx)(r.S, {
            placeholder: "Select Environment",
            className: t,
            menuDirection: "bottom",
            selectedOptionId:
              null !== (x = null === u || void 0 === u ? void 0 : u.name) &&
              void 0 !== x
                ? x
                : d,
            setSelected: (e) => {
              const t =
                null === c || void 0 === c
                  ? void 0
                  : c.find((t) => t.name === e);
              t ? (f(t.language), h && h(t)) : (f(e), h && h(null));
            },
            options: v,
            floatStrategy: "fixed",
            buttonClassName: n,
            optionClassName: l,
            onBlur: g,
            disabled: m,
          }),
        });
      };
    },
    787529: function (e, t, n) {
      "use strict";
      n.d(t, {
        l0: function () {
          return a;
        },
        c$: function () {
          return l;
        },
        LQ: function () {
          return c;
        },
      });
      var o = n(775143),
        r = n(59524);
      function s(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function i(e, t, n) {
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
      const a = 108e5,
        l = (function () {
          var e,
            t =
              ((e = function* (e, t, n, s, a) {
                let l, c;
                try {
                  (l = yield (0, o.fetchApi)("/genai/executeSubmission", {
                    body: {
                      sourceCode: e,
                      language: t,
                      customEnvConfig: a
                        ? {
                            projectId: a.sphereEngineProjectId,
                            scenarioName: a.scenario,
                            entryPoint: a.entryPoint,
                            customEnvName: a.name,
                            useCustomFiles: !!a.customFiles,
                          }
                        : void 0,
                      assignmentId: s,
                    },
                    maxRetries: 3,
                    method: "POST",
                    parseAndHandle: !0,
                    redirectOnUnauthorized: !0,
                  })),
                    (c = null === l || void 0 === l ? void 0 : l.success);
                } catch (d) {
                  throw ((c = !1), d);
                } finally {
                  n &&
                    (yield (0, r.Kz)(
                      r.ju.SphereSubmissionEvent,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                            o = Object.keys(n);
                          "function" === typeof Object.getOwnPropertySymbols &&
                            (o = o.concat(
                              Object.getOwnPropertySymbols(n).filter(function (
                                e
                              ) {
                                return Object.getOwnPropertyDescriptor(n, e)
                                  .enumerable;
                              })
                            )),
                            o.forEach(function (t) {
                              i(e, t, n[t]);
                            });
                        }
                        return e;
                      })({}, n, { successfulExecution: c })
                    ));
                }
                return l;
              }),
              function () {
                var t = this,
                  n = arguments;
                return new Promise(function (o, r) {
                  var i = e.apply(t, n);
                  function a(e) {
                    s(i, o, r, a, l, "next", e);
                  }
                  function l(e) {
                    s(i, o, r, a, l, "throw", e);
                  }
                  a(void 0);
                });
              });
          return function (e, n, o, r, s) {
            return t.apply(this, arguments);
          };
        })(),
        c = (e) => {
          const t = [],
            n = /```(\w*)\s*(?:\r?\n)((?:.|[\r\n])*?)(?:\r?\n)```/g;
          let o;
          for (; null !== (o = n.exec(e)); ) {
            const [, e, n] = o;
            t.push({ language: e, code: n });
          }
          return t;
        };
    },
    135338: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return y;
        },
      });
      var o = n(827378),
        r = n(456552),
        s = n(787529),
        i = n(154184),
        a = n(298784),
        l = n.n(a),
        c = n(236125),
        d = n(527467);
      function u(e, t, n) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              u(e, t, n[t]);
            });
        }
        return e;
      }
      const m = (0, c.Ue)()(
        (0, d.mW)((e, t) => ({
          codeExecutionState: {},
          setCodeExecutionState: (t, n) => {
            e((e) => ({
              codeExecutionState: p({}, e.codeExecutionState, {
                [t]: l().merge(e.codeExecutionState[t], n),
              }),
            }));
          },
          getCodeExecutionState: (e) => {
            const n = t().codeExecutionState[e];
            return n && 0 !== Object.keys(n).length
              ? n
              : { outputTabOpen: !1, tab: i.A.STDOUT };
          },
        }))
      );
      var f = n(358720),
        h = n(534522),
        g = n(885894),
        b = n(257881);
      function v(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function x(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var s = e.apply(t, n);
            function i(e) {
              v(s, o, r, i, a, "next", e);
            }
            function a(e) {
              v(s, o, r, i, a, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var y = ({
        storeKey: e,
        code: t,
        language: n,
        customCodeEnvironment: a,
        onExecutionComplete: c,
      }) => {
        const { 0: d, 1: u } = (0, o.useState)(null),
          { 0: p, 1: v } = (0, o.useState)(!1),
          { setCodeExecutionState: y, getCodeExecutionState: w } = m();
        var j;
        const [k, C] = [
          null !== (j = w(e).outputTabOpen) && void 0 !== j && j,
          (t) => y(e, { outputTabOpen: t }),
        ];
        var S;
        const [T, N] = [
            null !== (S = w(e).tab) && void 0 !== S ? S : i.A.STDOUT,
            (t) => y(e, { tab: t }),
          ],
          O = (0, o.useContext)(h.p),
          E = (0, f.xg)(),
          P = (0, f.t0)((e) => e.reviewLevel),
          { isFetching: M, data: R } = (0, r.useQuery)(
            ["assignmentDetails", O.assignmentId],
            x(function* () {
              var e;
              return yield b.Z.genai.getAssignmentDetails({
                assignmentId:
                  null !== (e = O.assignmentId) && void 0 !== e ? e : "",
              });
            }),
            {
              enabled: !!O.assignmentId,
              refetchOnWindowFocus: !1,
              refetchOnMount: !1,
              refetchOnReconnect: !1,
              retry: !1,
              staleTime: s.l0,
            }
          );
        var I;
        const A = {
            taskId:
              null !== (I = O.taskId) && void 0 !== I
                ? I
                : null === R || void 0 === R
                ? void 0
                : R.taskId,
            projectId: O.projectId,
            assignmentId: O.assignmentId,
            workerId: O.workerId,
            stepId: null === E || void 0 === E ? void 0 : E.id,
            stepType: null === E || void 0 === E ? void 0 : E.type,
            reviewLevel: P,
            timestamp: new Date(),
            submissionType: g.U.ExecutableCodeBlock,
          },
          {
            isFetching: D,
            data: L,
            error: _,
            refetch: B,
          } = (0, r.useQuery)(
            [e],
            x(function* () {
              var e, o;
              return yield (0,
              s.c$)(t, n, A, null !== (o = null !== (e = O.taskId) && void 0 !== e ? e : O.assignmentId) && void 0 !== o ? o : null === R || void 0 === R ? void 0 : R.taskId, a);
            }),
            {
              enabled: !1,
              onSettled: (e) => {
                $(!0, e), c && c(e);
              },
            }
          );
        (0, o.useEffect)(() => {
          var e;
          L &&
            !p &&
            (N(
              l().isNil(null === L || void 0 === L ? void 0 : L.stderr) &&
                l().isNil(null === L || void 0 === L ? void 0 : L.stdout)
                ? i.A.STDOUT
                : (null === L || void 0 === L ? void 0 : L.stderr)
                ? i.A.STDERR
                : i.A.STDOUT
            ),
            u(
              l().isNil(null === L || void 0 === L ? void 0 : L.stderr) &&
                l().isNil(null === L || void 0 === L ? void 0 : L.stdout)
                ? ""
                : null !==
                    (e = null === L || void 0 === L ? void 0 : L.stderr) &&
                  void 0 !== e
                ? e
                : null === L || void 0 === L
                ? void 0
                : L.stdout
            ),
            v(!0));
        }, [L]);
        const $ = (e, t) => {
          if (
            l().isNil(null === t || void 0 === t ? void 0 : t.stderr) &&
            l().isNil(null === t || void 0 === t ? void 0 : t.stdout)
          )
            return N(i.A.STDOUT), u(""), void (e && C(!0));
          l().isNil(null === t || void 0 === t ? void 0 : t.stderr)
            ? l().isNil(null === t || void 0 === t ? void 0 : t.stdout) ||
              (N(i.A.STDOUT), u(t.stdout), e && C(!0))
            : (N(i.A.STDERR), u(t.stderr), e && C(!0));
        };
        return {
          outputTabOpen: k,
          outputValue: d,
          tab: T,
          setOutputTabOpen: C,
          setTab: (e) => {
            var t;
            if (e === i.A.STDOUT)
              N(i.A.STDOUT),
                u(
                  null !==
                    (t = null === L || void 0 === L ? void 0 : L.stdout) &&
                    void 0 !== t
                    ? t
                    : null
                );
            else if (e === i.A.STDERR) {
              var n;
              N(i.A.STDERR),
                u(
                  null !==
                    (n = null === L || void 0 === L ? void 0 : L.stderr) &&
                    void 0 !== n
                    ? n
                    : null
                );
            }
          },
          setOutputValue: u,
          isFetching: D,
          submissionResponse: L,
          fetchError: _,
          handleExecuteCode: B,
          loadingTaskIdForLogging: M,
        };
      };
    },
    95251: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return c;
        },
      });
      var o = n(824246),
        r = n(713222),
        s = n(636012),
        i = n.n(s),
        a = n(827378),
        l = n(720227);
      const c = ({ code: e }) => {
        const { 0: t, 1: n } = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            if (t) {
              const e = setTimeout(() => n(!1), 1e3);
              return () => {
                clearTimeout(e);
              };
            }
          }, [t]),
          (0, o.jsx)("span", {
            onClick: (e) => e.stopPropagation(),
            children: (0, o.jsx)("button", {
              type: "button",
              onClick: () => {
                i()(e), n(!0);
              },
              className: (0, l.m)(
                "group overflow-hidden py-1 text-xs font-medium backdrop-blur transition bg-neutral-700/30 hover:bg-neutral-700/40"
              ),
              children: t
                ? (0, o.jsx)(r.J, {
                    icon: ["fas", "check"],
                    className: "w-3 h-3 fill-neutral-300/50 stroke-success-500",
                    variant: "white",
                  })
                : (0, o.jsx)(r.J, {
                    icon: ["far", "clipboard"],
                    className: "w-3 h-3 fill-neutral-300/50 stroke-neutral-300",
                    variant: "white",
                  }),
            }),
          })
        );
      };
    },
    252302: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return o;
        },
        Q: function () {
          return r;
        },
      });
      const o = {
          'code[class*="language-"]': {
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
            hyphens: "none",
            fontSize: "10px",
          },
        },
        r = {
          'code[class*="language-"]': {
            color: "#f8f8f2",
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
            hyphens: "none",
            fontSize: "10px",
          },
          'pre[class*="language-"]': {
            color: "#f8f8f2",
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
            hyphens: "none",
            overflow: "auto",
            borderRadius: "0.3em",
          },
          ':not(pre) > code[class*="language-"]': {
            background: "#2E3440",
            padding: ".1em",
            borderRadius: ".3em",
            whiteSpace: "normal",
          },
          ':not(pre) > pre[class*="language-"]': { background: "#2E3440" },
          comment: { color: "#636f88" },
          prolog: { color: "#636f88" },
          doctype: { color: "#636f88" },
          cdata: { color: "#636f88" },
          punctuation: { color: "#81A1C1" },
          ".namespace": { Opacity: ".7" },
          property: { color: "#81A1C1" },
          tag: { color: "#81A1C1" },
          constant: { color: "#81A1C1" },
          symbol: { color: "#81A1C1" },
          deleted: { color: "#81A1C1" },
          number: { color: "#B48EAD" },
          boolean: { color: "#81A1C1" },
          selector: { color: "#A3BE8C" },
          "attr-name": { color: "#A3BE8C" },
          string: { color: "#A3BE8C" },
          char: { color: "#A3BE8C" },
          builtin: { color: "#A3BE8C" },
          inserted: { color: "#A3BE8C" },
          operator: { color: "#81A1C1" },
          entity: { color: "#81A1C1", cursor: "help" },
          url: { color: "#81A1C1" },
          ".language-css .token.string": { color: "#81A1C1" },
          ".style .token.string": { color: "#81A1C1" },
          variable: { color: "#81A1C1" },
          atrule: { color: "#88C0D0" },
          "attr-value": { color: "#88C0D0" },
          function: { color: "#88C0D0" },
          "class-name": { color: "#88C0D0" },
          keyword: { color: "#81A1C1" },
          regex: { color: "#EBCB8B" },
          important: { color: "#EBCB8B", fontWeight: "bold" },
          bold: { fontWeight: "bold" },
          italic: { fontStyle: "italic" },
        };
    },
    154184: function (e, t, n) {
      "use strict";
      var o;
      n.d(t, {
        A: function () {
          return o;
        },
      }),
        (function (e) {
          (e.STDOUT = "stdout"), (e.STDERR = "stderr");
        })(o || (o = {}));
    },
    449959: function (e, t, n) {
      "use strict";
      n.d(t, {
        uV: function () {
          return E;
        },
        L8: function () {
          return P;
        },
      });
      var o = n(824246),
        r = n(132157),
        s = n(787989),
        i = n(171810),
        a = n(885701),
        l = n(720227),
        c = n(787529),
        d = n(902818),
        u = n(298784),
        p = n.n(u),
        m = n(827378),
        f = n(275481),
        h = n(848084),
        g = n(843077),
        b = n(391089),
        v = n(179843),
        x = n(818454),
        y = n(554211),
        w = n(534522),
        j = n(820999),
        k = n(344660);
      function C(e, t, n) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              C(e, t, n[t]);
            });
        }
        return e;
      }
      function T(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      const N = (e) => {
          const t = (0, m.useRef)(null),
            n = (0, m.useContext)(w.p),
            { 0: r } = (0, m.useState)(e.markdown),
            i = (0, k.U)(),
            { data: a, isLoading: l } = (0, y._z)(
              "chat-preview-migration",
              { projectId: n.projectId },
              !1,
              !0,
              {
                refetchOnMount: !1,
                refetchOnReconnect: !1,
                refetchOnWindowFocus: !1,
                refetchInterval: !1,
                refetchIntervalInBackground: !1,
                retry: !1,
              }
            );
          return l
            ? (0, o.jsx)(s.O, { className: "w-full h-12 rounded" })
            : a
            ? (0, o.jsxs)(j.u3, {
                className: "min-h-fit",
                initialContent: r,
                enableMath: e.enableMath,
                defaultTokens: i,
                enableCodeExecution: e.enableExecutableCodeBlocks,
                children: [
                  (0, o.jsxs)(j.Nf, {
                    ref: t,
                    className: "border-none",
                    children: [
                      (0, o.jsx)(j.Tw, {}),
                      (0, o.jsx)(j.MB, {
                        className: e.className,
                        content: e.markdown,
                        textDirection: e.enableRTL ? "rtl" : void 0,
                      }),
                    ],
                  }),
                  (0, o.jsx)(j.qe, {
                    anchorRef: t,
                    enabled: n.enableFactChecker,
                  }),
                ],
              })
            : (0, o.jsx)(O, S({}, e));
        },
        O = ({
          markdown: e,
          className: t,
          autoRunDependenciesComplete: n,
          enableMath: s,
          enableSingleDollarTextMath: u,
          enableHtml: j,
          enableSoftBreaks: k,
          enableExecutableCodeBlocks: C,
          disableRehypeSanitize: N = !0,
          loading: O = !1,
          defaultExpandCodeBlocks: P = !0,
        }) => {
          const M = (0, m.useContext)(w.p),
            R = (0, m.useMemo)(
              () =>
                p().compact([
                  j ? h.Z : null,
                  j && !N ? g.Z : null,
                  s ? f.Z : null,
                ]),
              [j, s, N]
            ),
            I = (0, m.useMemo)(() => {
              const e = [v.Z];
              return (
                s && e.push([x.Z, { singleDollarTextMath: !!u }]),
                k && e.push(b.Z),
                e
              );
            }, [s, u, k]),
            A = (0, y.ZP)(
              "markdown-replace-with-double-dollar-sign",
              { projectId: M.projectId },
              !1
            );
          s && (A && (e = E(e)), (e = (0, i.h)(e)));
          const D = (0, c.LQ)(e);
          return (0, o.jsxs)("div", {
            children: [
              (0, o.jsx)("style", {
                children:
                  "\n  li pre {\n    padding: 0 !important;\n    border-radius: 0.5rem !important;\n  }\n",
              }),
              (0, o.jsx)(r.D, {
                remarkPlugins: I,
                rehypePlugins: R,
                children: e,
                className: (0, l.m)(
                  "prose prose-neutral prose-sm max-w-none break-words [&>pre]:p-0 [&>pre]:rounded-lg",
                  t,
                  s ? "text-neutral-700" : ""
                ),
                components: {
                  table: (e) =>
                    (0, o.jsx)("div", {
                      className: "overflow-x-auto",
                      children: (0, o.jsx)("table", S({}, e)),
                    }),
                  th: (e) =>
                    (0, o.jsx)("th", S({ className: "text-neutral-700" }, e)),
                  td: (e) =>
                    (0, o.jsx)("td", S({ className: "text-neutral-600" }, e)),
                  p: (e) =>
                    (0, o.jsx)("p", S({ className: "text-neutral-700" }, e)),
                  h1: (e) =>
                    (0, o.jsx)("h1", S({ className: "text-neutral-700" }, e)),
                  h2: (e) =>
                    (0, o.jsx)("h2", S({ className: "text-neutral-700" }, e)),
                  h3: (e) =>
                    (0, o.jsx)("h3", S({ className: "text-neutral-700" }, e)),
                  h4: (e) =>
                    (0, o.jsx)("h4", S({ className: "text-neutral-700" }, e)),
                  h5: (e) =>
                    (0, o.jsx)("h5", S({ className: "text-neutral-700" }, e)),
                  h6: (e) =>
                    (0, o.jsx)("h6", S({ className: "text-neutral-700" }, e)),
                  ul: (e) =>
                    (0, o.jsx)("ul", S({ className: "text-neutral-700" }, e)),
                  ol: (e) =>
                    (0, o.jsx)("ol", S({ className: "text-neutral-700" }, e)),
                  li: (e) =>
                    (0, o.jsx)("li", S({ className: "text-neutral-700" }, e)),
                  strong: (e) =>
                    (0, o.jsx)(
                      "strong",
                      S({ className: "text-neutral-700" }, e)
                    ),
                  a: (e) =>
                    (0, o.jsx)(
                      "a",
                      S({ target: "_blank", rel: "noopener noreferrer" }, e, {
                        className: (0, l.m)("text-neutral-700", e.className),
                      })
                    ),
                  code(e) {
                    const {
                        children: t,
                        className: r = "",
                        node: s,
                        inline: i,
                      } = e,
                      c = T(e, ["children", "className", "node", "inline"]),
                      u = /language-(\w+)/.exec(r),
                      p = D.findIndex(
                        (e) => e.code === String(t).replace(/\n$/, "")
                      );
                    return !i && C
                      ? (0, o.jsx)(d.Z, {
                          code: String(t).replace(/\n$/, ""),
                          languageMatch: u,
                          codeBlocksInMarkdownText: D,
                          codeBlockIndex: p,
                          autoRunDependenciesComplete: n,
                          loading: O,
                          defaultExpanded: P,
                        })
                      : i
                      ? (0, o.jsx)(
                          "code",
                          S({}, c, {
                            className: (0, l.m)("text-neutral-700", r),
                            children: t,
                          })
                        )
                      : (0, o.jsx)(a.d, {
                          code: String(t).replace(/\n$/, ""),
                          languageMatch: u,
                          initCollapsed: !P,
                        });
                  },
                  pre: (e) =>
                    C
                      ? (0, o.jsx)("div", { children: e.children })
                      : (0, o.jsx)("pre", S({}, e)),
                },
              }),
            ],
          });
        },
        E = (e) => {
          let t = e.replace(
            /\\\\\[((?:(?!\\\\\[).)*?)\\\\\]/gs,
            (e, t) => `$$${t}$$`
          );
          return (
            (t = t.replace(
              /\\\\\(((?:(?!\\\\\().)*?)\\\\\)/gs,
              (e, t) => `$$${t}$$`
            )),
            t
          );
        },
        P = m.memo(N);
    },
    717809: function (e, t, n) {
      "use strict";
      n.d(t, {
        TG: function () {
          return w;
        },
        ZP: function () {
          return k;
        },
        RP: function () {
          return j;
        },
      });
      var o = n(824246),
        r = n(855549),
        s = n(827378),
        i = n(60042),
        a = n.n(i),
        l = n(720227),
        c = n(63571),
        d = n(613911),
        u = n(722206),
        p = n(792739),
        m = n(919374),
        f = n(829714);
      function h() {
        const { editor: e } = (0, r.fi)(),
          { 0: t, 1: n } = (0, s.useState)(!1),
          { 0: i, 1: a } = (0, s.useState)(""),
          { 0: l, 1: c } = (0, s.useState)({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }),
          d = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            if (e)
              return (
                e.on("transaction", t),
                () => {
                  e.off("transaction", t), d.current && clearTimeout(d.current);
                }
              );
            function t({ transaction: e }) {
              const t = e.getMeta(f.j.WARNING);
              if (t) {
                const { message: e, coords: o } = t;
                a(e),
                  c(o),
                  n(!0),
                  d.current && clearTimeout(d.current),
                  (d.current = setTimeout(() => {
                    n(!1);
                  }, 3e3));
              }
            }
          }, [e]),
          (0, s.useEffect)(() => {
            function o() {
              n(!1);
            }
            if (e) {
              if (t)
                return (
                  e.on("transaction", o),
                  () => {
                    e.off("transaction", o);
                  }
                );
              e.off("transaction", o);
            }
          }, [e, t]),
          e && t
            ? (0, o.jsxs)("div", {
                className:
                  "flex items-center gap-2 font-medium transition-all bg-warning-50/90 text-warning-800 rounded-full px-2 py-1 fixed z-50 alert-tooltip -translate-y-[180%] -translate-x-[18px] pointer-events-none",
                style: {
                  left: `${l.right}px`,
                  top: `${l.top + window.scrollY}px`,
                },
                children: [(0, o.jsx)(p.G, { icon: m.xHz }), i],
              })
            : null
        );
      }
      var g = (0, s.memo)(h),
        b = n(298784);
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              v(e, t, n[t]);
            });
        }
        return e;
      }
      function y(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      const w = (0, s.createContext)(void 0),
        j = () => {
          const e = (0, s.useContext)(w);
          if (!e)
            throw new Error(
              "useEditorRendererContext must be used within a EditorRendererProvider"
            );
          return e;
        };
      function k(e) {
        var {
            className: t,
            content: n,
            placeholder: i,
            disabled: p,
            readOnly: m,
            disableCopy: f,
            disablePaste: h,
            onDisabledCopy: v,
            onDisabledPaste: w,
            onContentChange: k,
            onEditorBlur: C,
            onEditorFocus: S,
            onJsonChange: T,
            enableRTL: N = !1,
          } = e,
          O = y(e, [
            "className",
            "content",
            "placeholder",
            "disabled",
            "readOnly",
            "disableCopy",
            "disablePaste",
            "onDisabledCopy",
            "onDisabledPaste",
            "onContentChange",
            "onEditorBlur",
            "onEditorFocus",
            "onJsonChange",
            "enableRTL",
          ]);
        const [E, P] = (0, d.Z)(!1, 300),
          M = (0, c.Z)(k),
          R = (0, c.Z)(T),
          I = (0, c.Z)(C),
          A = (0, c.Z)(S),
          { editor: D } = (0, r.fi)(),
          { editorRef: L } = j(),
          _ = (0, s.useCallback)(
            ({ editor: e, transaction: t }) => {
              var n, o;
              const r = (0, u.Xm)(e);
              if (!r) return;
              const s = t.time,
                i = e.getJSON();
              null === (n = R.current) || void 0 === n || n.call(R, i),
                null === (o = M.current) || void 0 === o || o.call(M, r(), s);
            },
            [M, R]
          );
        return (
          (0, s.useEffect)(
            function () {
              null === D || void 0 === D || D.setEditable(!p && !m);
            },
            [D, p, m]
          ),
          (0, s.useEffect)(
            function () {
              D && D.commands.setTextDirection("auto");
            },
            [D]
          ),
          (0, s.useEffect)(
            function () {
              if (!D) return;
              const e = ({ editor: e, transaction: t, event: n }) => {
                  var o;
                  P(!0);
                  const r = (0, u.Xm)(e);
                  r &&
                    (null === (o = A.current) ||
                      void 0 === o ||
                      o.call(A, { content: r(), timestamp: t.time, event: n }));
                },
                t = ({ editor: e, transaction: t, event: n }) => {
                  var o;
                  P(!1);
                  const r = (0, u.Xm)(e);
                  r &&
                    (null === (o = I.current) ||
                      void 0 === o ||
                      o.call(I, { content: r(), timestamp: t.time, event: n }));
                };
              return (
                D.on("update", _),
                D.on("focus", e),
                D.on("blur", t),
                () => {
                  D.off("update", _), D.off("focus", e), D.off("blur", t);
                }
              );
            },
            [D, _, P, I, A]
          ),
          (0, s.useEffect)(
            function () {
              if (!D) return;
              const e = (0, u.BY)(D),
                t = (0, b.debounce)(e, 500);
              return (
                t(n, E),
                () => {
                  t.cancel();
                }
              );
            },
            [D, n, E]
          ),
          (0, s.useEffect)(
            function () {
              D &&
                D.commands.updatePlaceholder(
                  null !== i && void 0 !== i ? i : ""
                );
            },
            [D, i]
          ),
          (0, s.useEffect)(
            function () {
              D &&
                (D.commands.updateDisableCopy(!!f),
                D.commands.updateDisablePaste(!!h));
            },
            [D, f, h]
          ),
          (0, s.useEffect)(
            function () {
              D &&
                ((D.storage.noCopyPaste.onDisabledCopy = v),
                (D.storage.noCopyPaste.onDisabledPaste = w));
            },
            [D, v, w]
          ),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(g, {}),
              (0, o.jsx)(
                r.kg,
                x({}, O, {
                  className: (0, l.m)(
                    a()(
                      "relative w-full placeholder:text-neutral-100 bg-neutral-0 px-2 py-2 rounded-t-md rounded-b-md",
                      { "cursor-not-allowed opacity-50": p, "text-right": N },
                      t
                    )
                  ),
                  dir: N ? "rtl" : "ltr",
                  editor: D,
                  ref: L,
                })
              ),
            ],
          })
        );
      }
    },
    173130: function (e, t, n) {
      "use strict";
      var o = n(824246),
        r = n(827378),
        s = n(855549),
        i = n(60042),
        a = n.n(i),
        l = n(720227),
        c = n(643672);
      const d = (0, r.forwardRef)(function ({ children: e, className: t }, n) {
        const { editor: r } = (0, s.fi)(),
          i = (0, c.Z)();
        return r
          ? (0, o.jsx)("div", {
              ref: n,
              className: (0, l.m)(
                a()(
                  "box-border relative leading-normal border rounded-md border-solid resize-none border-neutral-200 ring-primary-400",
                  { "focus-within:ring-2": i },
                  t
                )
              ),
              children: e,
            })
          : null;
      });
      t.Z = (0, r.memo)(d);
    },
    444506: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return J;
        },
        C: function () {
          return Q;
        },
      });
      var o = n(824246),
        r = n(855549),
        s = n(917163),
        i = n(60042),
        a = n.n(i),
        l = n(720227),
        c = n(980991),
        d = n(939904),
        u = n(686356),
        p = n(722206),
        m = n(616711),
        f = n(53355),
        h = n(583469),
        g = n(792739),
        b = n(690085),
        v = n(827378),
        x = n(916353),
        y = n(713222);
      const w = (0, v.memo)(
        ({ isRunningCodeExecution: e, codeExecutionResponse: t }) => {
          var n;
          const r = (
            null !== (n = null === t || void 0 === t ? void 0 : t.stdout) &&
            void 0 !== n
              ? n
              : ""
          ).trim();
          var s;
          const i = (
            null !== (s = null === t || void 0 === t ? void 0 : t.stderr) &&
            void 0 !== s
              ? s
              : ""
          ).trim();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)("div", {
                className:
                  "flex items-center justify-between py-2 px-4 border-border border-t",
                children: [
                  (0, o.jsx)("div", {
                    className: "text-muted-contrast",
                    children: "Output",
                  }),
                  (0, o.jsx)(x.u, {
                    text: "Copy output to clipboard",
                    target: (0, o.jsx)(y.J, {
                      icon: "copy",
                      onClick: () => {
                        navigator.clipboard.writeText(
                          JSON.stringify(
                            null !== t && void 0 !== t ? t : "",
                            null,
                            2
                          )
                        );
                      },
                    }),
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: "pb-2 px-4",
                children: e
                  ? (0, o.jsx)("div", {
                      className: "text-muted-contrast",
                      children: "Running code execution...",
                    })
                  : r || i
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        r
                          ? (0, o.jsx)("div", {
                              className: "text-contrast",
                              children: r,
                            })
                          : null,
                        i
                          ? (0, o.jsx)("div", {
                              className: "text-error-text",
                              children: i,
                            })
                          : null,
                      ],
                    })
                  : t
                  ? (0, o.jsx)("div", {
                      className: "text-muted-contrast",
                      children: "Ok",
                    })
                  : null,
              }),
            ],
          });
        }
      );
      var j = n(780892),
        k = n(89916),
        C = n(787529);
      function S(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function T(e) {
        return k.LANGUAGE_OPTIONS.some(({ id: t }) => t === e);
      }
      function N({
        language: e,
        code: t,
        assignmentId: n = "assignmentId",
        customCodeEnvironment: o,
      }) {
        return (0, j.Z)(
          ((r = function* () {
            if (!T(e))
              return {
                success: !1,
                stderr: "Language not supported",
                stdout: "",
              };
            try {
              return yield (0, C.c$)(t, e, void 0, n, o);
            } catch (s) {
              var r;
              return (
                console.error(s),
                {
                  success: !1,
                  stderr:
                    null !==
                      (r = null === s || void 0 === s ? void 0 : s.message) &&
                    void 0 !== r
                      ? r
                      : "Error",
                  stdout: "",
                }
              );
            }
          }),
          function () {
            var e = this,
              t = arguments;
            return new Promise(function (n, o) {
              var s = r.apply(e, t);
              function i(e) {
                S(s, n, o, i, a, "next", e);
              }
              function a(e) {
                S(s, n, o, i, a, "throw", e);
              }
              i(void 0);
            });
          }),
          [e, t]
        );
        var r;
      }
      var O = n(412937),
        E = n(613911),
        P = n(534522),
        M = n(813110);
      function R(e, t, n) {
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
      function I(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              R(e, t, n[t]);
            });
        }
        return e;
      }
      const A = {
          javascript: "js",
          js: "js",
          typescript: "ts",
          ts: "ts",
          python: "python",
          java: "java",
          shell: "sh",
          c: "c",
          cpp: "cpp",
          jsx: "jsx",
          json: "json",
          plaintext: "text",
          html: "html",
          swift: "swift",
        },
        D = {
          javascript: "JavaScript",
          js: "JavaScript",
          typescript: "TypeScript",
          ts: "TypeScript",
          python: "Python",
          java: "Java",
          shell: "BashScript",
          c: "C",
          cpp: "C++",
          jsx: "JSX",
          json: "JSON",
          plaintext: "Plaintext",
          html: "HTML",
          swift: "Swift",
        },
        L = Object.entries(A).reduce((e, [t, n]) => ((e[n] = t), e), {}),
        _ = (0, v.memo)(
          ({ editor: e, node: t, getPos: n, updateAttributes: s }) => {
            var i, a, l, c, d, u, p;
            const { enableFactChecker: f } = (0, v.useContext)(P.p),
              y =
                L[
                  null === t ||
                  void 0 === t ||
                  null === (i = t.attrs) ||
                  void 0 === i
                    ? void 0
                    : i.language
                ] || L.text,
              { 0: j, 1: k } = (0, v.useState)(!e.isEditable),
              [C, S] = (0, E.Z)("", 200),
              R = (0, M.y)((e) => e.setSelection);
            var _;
            const B =
                null !==
                  (_ =
                    null === (a = t) ||
                    void 0 === a ||
                    null === (l = a.content) ||
                    void 0 === l ||
                    null === (c = l.content) ||
                    void 0 === c ||
                    null === (d = c[0]) ||
                    void 0 === d
                      ? void 0
                      : d.text) && void 0 !== _
                  ? _
                  : "",
              $ =
                null === (u = e.extensionStorage.noCopyPaste) || void 0 === u
                  ? void 0
                  : u.disableCopy,
              Z =
                null === (p = e.extensionStorage.noCopyPaste) || void 0 === p
                  ? void 0
                  : p.disablePaste,
              { 0: H, 1: z } = (0, v.useState)(null),
              { 0: F, 1: V } = (0, v.useState)(400);
            (0, v.useEffect)(() => {
              const t = ({ editor: e }) => {
                k(!e.isEditable);
              };
              return (
                e.on("update", t),
                () => {
                  e.off("update", t);
                }
              );
            }, [e]);
            const W = (0, v.useCallback)(() => {
                const { state: t, dispatch: o } = e.view,
                  { tr: r } = t,
                  s = n();
                o(r.setSelection(m.Bs.near(r.doc.resolve(Math.max(0, s)))));
              }, [n, e]),
              U = (0, v.useCallback)(() => {
                if (!e.isEditable) return;
                const { state: o, dispatch: r } = e.view,
                  { tr: s } = o,
                  i = n();
                s.delete(i, i + t.nodeSize),
                  e.commands.focus(i > 0 ? i - 1 : i),
                  r(s);
              }, [n, e.isEditable, e.commands, e.view, t.nodeSize]),
              K = (0, v.useCallback)((e) => {
                z(e), V(e.getContentHeight());
              }, []);
            (0, v.useEffect)(() => {
              const t = () => {
                  H && V(H.getContentHeight());
                },
                o =
                  null === H || void 0 === H
                    ? void 0
                    : H.onDidChangeCursorSelection(() => {
                        var e;
                        const t =
                          (null === (e = H.getModel()) || void 0 === e
                            ? void 0
                            : e.getValueInRange(
                                H.getSelection() || {
                                  startLineNumber: 0,
                                  startColumn: 0,
                                  endLineNumber: 0,
                                  endColumn: 0,
                                }
                              )) || "";
                        S(t);
                      }),
                r =
                  null === H || void 0 === H
                    ? void 0
                    : H.onDidChangeModelLanguageConfiguration(t),
                s =
                  null === H || void 0 === H ? void 0 : H.onDidLayoutChange(t),
                i =
                  null === H || void 0 === H
                    ? void 0
                    : H.onKeyDown((t) => {
                        const { state: o } = e.view,
                          { doc: r } = o,
                          s = n();
                        if ("Backspace" === t.code) {
                          const e = r.nodeAt(s);
                          (null === e || void 0 === e
                            ? void 0
                            : e.textContent) || U();
                        }
                        if ("ArrowDown" === t.code) {
                          const t = H.getPosition(),
                            n = H.getModel();
                          if (null === n || null === t) return;
                          const o = n.getLineCount();
                          t.lineNumber === o &&
                            (e.commands.exitCode(), e.commands.focus());
                        }
                        if ("ArrowUp" === t.code) {
                          const t = H.getPosition();
                          1 ===
                            (null === t || void 0 === t
                              ? void 0
                              : t.lineNumber) &&
                            (e.commands.insertParagraphBefore(),
                            e.commands.focus());
                        }
                        $ &&
                          (t.ctrlKey || t.metaKey) &&
                          33 === t.keyCode &&
                          t.preventDefault(),
                          Z &&
                            (t.ctrlKey || t.metaKey) &&
                            52 === t.keyCode &&
                            t.preventDefault();
                      }),
                a =
                  null === H || void 0 === H
                    ? void 0
                    : H.onDidFocusEditorWidget(() => {
                        W(), H.focus();
                      });
              return () => {
                null === o || void 0 === o || o.dispose(),
                  null === r || void 0 === r || r.dispose(),
                  null === s || void 0 === s || s.dispose(),
                  null === a || void 0 === a || a.dispose(),
                  null === i || void 0 === i || i.dispose();
              };
            }, [H, S, n, W, e, U]),
              (0, v.useEffect)(() => {
                C || e.commands.setCopilotOpen(!1);
              }, [e, C, R, n]);
            const J = (0, v.useCallback)(() => {
                if (!e) return;
                const t = n();
                e.commands.setCopilotSelection({
                  empty: "" === C,
                  text: C,
                  from: Math.max(0, t),
                  to: 0,
                }),
                  e.commands.setCopilotOpen(!0);
              }, [e, C, n]),
              G = (0, v.useCallback)(
                (o) => {
                  const { state: r, dispatch: s } = e.view,
                    { tr: i } = r,
                    a = r.schema.nodes.executableCodeBlock,
                    l = n();
                  let c;
                  if (o !== t.content.textBetween(0, t.content.size, "")) {
                    if (o) {
                      const e = a.create(I({}, t.attrs), r.schema.text(o));
                      c = i.replaceWith(l, l + t.nodeSize, e);
                    } else {
                      const e = a.create(I({}, t.attrs));
                      c = i.replaceWith(l, l + t.nodeSize, e);
                    }
                    c.setSelection(m.Bs.near(i.doc.resolve(Math.max(0, l)))),
                      s(c);
                  }
                },
                [n, e, t]
              ),
              [{ loading: q, value: Q }, Y] = N({ language: y, code: B });
            return (0, o.jsxs)(r.T5, {
              as: "div",
              contentEditable: !1,
              dir: "auto",
              className:
                "react-monaco-code-block bg-neutral-800 not-wysiwyg font-mono text-neutral-0 border-neutral-700 border rounded overflow-hidden",
              children: [
                (0, o.jsxs)("div", {
                  className:
                    "flex items-center py-2 px-4 gap-5 border-neutral-700 border-b rounded-t",
                  children: [
                    (0, o.jsx)("div", {
                      children: (0, o.jsx)(O.S, {
                        isInPortal: !0,
                        menuDirection: "bottom",
                        optionsClassName:
                          "scale-theme border border-neutral-400",
                        disabled: j,
                        selectedOptionId: y,
                        options: Object.keys(A).map((e) => ({
                          id: e,
                          name: D[e],
                        })),
                        setSelected: (e) => {
                          s({ language: A[e] });
                        },
                      }),
                    }),
                    T(y) &&
                      (0, o.jsx)(x.u, {
                        text: q
                          ? "Running code execution..."
                          : "Run code execution",
                        target: (0, o.jsx)("div", {
                          className: "flex items-center",
                          onClick: q ? void 0 : Y,
                          children: (0, o.jsx)(g.G, {
                            className:
                              "text-muted-contrast cursor-pointer h-4 w-4",
                            spin: q,
                            icon: q ? h.LM3 : h.zc,
                          }),
                        }),
                      }),
                    !$ &&
                      (0, o.jsx)(x.u, {
                        text: "Copy code to clipboard",
                        target: (0, o.jsx)(g.G, {
                          className: "text-muted-contrast cursor-pointer",
                          icon: h.kZ_,
                          onClick: (e) => {
                            e.preventDefault(),
                              navigator.clipboard.writeText(B);
                          },
                        }),
                      }),
                    e.isEditable &&
                      (0, o.jsx)(x.u, {
                        text: "Delete code block",
                        target: (0, o.jsx)("div", {
                          className: "flex items-center cursor-pointer",
                          children: (0, o.jsx)(g.G, {
                            onClick: U,
                            icon: h.XAH,
                            className:
                              "text-muted-contrast cursor-pointer h-4 w-4",
                          }),
                        }),
                      }),
                    C &&
                      f &&
                      (0, o.jsx)(x.u, {
                        text: "Copilot",
                        target: (0, o.jsx)("div", {
                          className: "flex items-center cursor-pointer",
                          children: (0, o.jsx)(g.G, {
                            onClick: J,
                            icon: h.Y$T,
                            className:
                              "text-muted-contrast cursor-pointer h-4 w-4",
                          }),
                        }),
                      }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "pr-4",
                  children: [
                    (0, o.jsx)(b.ZP, {
                      theme: "vs-dark",
                      height: F,
                      wrapperProps: { className: "reset-all-css rounded-b" },
                      value: B,
                      language: y,
                      options: {
                        lineNumbers: "on",
                        roundedSelection: !1,
                        scrollBeyondLastLine: !1,
                        minimap: { enabled: !1 },
                        padding: { top: 10, bottom: 10 },
                        lineDecorationsWidth: 5,
                        lineNumbersMinChars: 4,
                        unicodeHighlight: { ambiguousCharacters: !1 },
                        wordWrap: "on",
                        overviewRulerBorder: !1,
                        domReadOnly: j,
                        readOnly: j,
                      },
                      onMount: K,
                      onChange: (e) => {
                        H &&
                          (V(H.getContentHeight()),
                          null === G || void 0 === G || G(e));
                      },
                    }),
                    (q || Q) &&
                      (0, o.jsx)(w, {
                        isRunningCodeExecution: q,
                        codeExecutionResponse: Q,
                      }),
                  ],
                }),
              ],
            });
          }
        ),
        B = "language-",
        $ = /^```([a-z]+)?[\s\n]$/,
        Z = f.NB.create({
          name: "executableCodeBlock",
          content: "text*",
          group: "block",
          marks: "",
          code: !0,
          defining: !0,
          addStorage: () => ({
            markdown: {
              serialize(e, t) {
                const n = t.textContent || "";
                e.write("```" + (t.attrs.language || "")),
                  e.write("\n"),
                  e.text(n, !1),
                  e.ensureNewLine(),
                  e.write("```"),
                  e.closeBlock(t);
              },
              parse: {
                setup(e) {
                  var t;
                  e.set({
                    langPrefix:
                      null !== (t = this.options.languageClassPrefix) &&
                      void 0 !== t
                        ? t
                        : "language-",
                  });
                },
                updateDOM(e) {
                  e.innerHTML = e.innerHTML.replace(
                    /\n<\/code><\/pre>/g,
                    "</code></pre>"
                  );
                },
              },
            },
          }),
          addAttributes: () => ({
            language: {
              default: null,
              parseHTML: (e) => {
                var t;
                const n = [
                  ...((null === (t = e.firstElementChild) || void 0 === t
                    ? void 0
                    : t.classList) || []),
                ]
                  .filter((e) => e.startsWith(B))
                  .map((e) => e.replace(B, ""))[0];
                return n || null;
              },
              rendered: !1,
            },
          }),
          parseHTML: () => [{ tag: "pre", preserveWhitespace: "full" }],
          renderHTML: ({ node: e, HTMLAttributes: t }) => [
            "pre",
            t,
            [
              "code",
              { class: e.attrs.language ? B + e.attrs.language : null },
              0,
            ],
          ],
          addCommands() {
            return {
              setCodeBlock:
                (e) =>
                ({ commands: t }) =>
                  t.setNode(this.name, e),
              toggleCodeBlock:
                (e) =>
                ({ commands: t }) =>
                  t.toggleNode(this.name, "paragraph", e),
              insertParagraphBefore:
                () =>
                ({ tr: e, dispatch: t, state: { schema: n } }) => {
                  const { selection: o } = e,
                    { $from: r } = o,
                    s = r.before(r.depth),
                    i = n.nodes.paragraph.create(),
                    a = e.insert(s, i),
                    l = s + 1;
                  return a.setSelection(m.Bs.create(e.doc, l)), t && t(a), !0;
                },
            };
          },
          addKeyboardShortcuts: () => ({}),
          addInputRules() {
            return [
              (0, f.zK)({
                find: $,
                type: this.type,
                getAttributes: (e) => ({ language: e[1] }),
              }),
            ];
          },
          addProseMirrorPlugins() {
            return [
              new m.Sy({
                key: new m.H$("codeBlockVSCodeHandler"),
                props: {
                  handlePaste: (e, t) => {
                    if (!t.clipboardData) return !1;
                    if (this.editor.isActive(this.type.name)) return !1;
                    const n = t.clipboardData.getData("text/plain"),
                      o = t.clipboardData.getData("vscode-editor-data"),
                      r = o ? JSON.parse(o) : void 0,
                      s = null === r || void 0 === r ? void 0 : r.mode;
                    if (!n || !s) return !1;
                    const { tr: i, schema: a } = e.state,
                      l = a.text(n.replace(/\r\n?/g, "\n"));
                    return (
                      i.replaceSelectionWith(
                        this.type.create({ language: s }, l)
                      ),
                      i.selection.$from.parent.type !== this.type &&
                        i.setSelection(
                          m.Bs.near(
                            i.doc.resolve(Math.max(0, i.selection.from - 2))
                          )
                        ),
                      i.setMeta("paste", !0),
                      e.dispatch(i),
                      !0
                    );
                  },
                },
              }),
            ];
          },
          addNodeView: () => (0, r.fW)(_),
        });
      var H = n(144849),
        z = n(717809),
        F = n(483563),
        V = n(938910),
        W = n(128157),
        U = n(829714),
        K = n(172570);
      const J = {
        boldToken: V.BoldToken.ASTERISK,
        italicToken: V.ItalicToken.ASTERISK,
        bulletListToken: V.BulletListToken.ASTERISK,
        mathToken: V.MathToken.DOLLARS,
      };
      function G({ defaultTokens: e = J }) {
        const { editor: t } = (0, r.fi)();
        return (
          (0, v.useEffect)(() => {
            t &&
              ((t.storage.markdownExtensions.boldToken = e.boldToken),
              (t.storage.markdownExtensions.italicToken = e.italicToken),
              (t.storage.markdownExtensions.bulletListToken =
                e.bulletListToken),
              (t.storage.markdownExtensions.mathToken = e.mathToken));
          }, [t, e]),
          null
        );
      }
      function q({
        className: e,
        children: t,
        extensions: n,
        initialContent: i,
        defaultTokens: m = J,
        enableMath: f = !1,
      }) {
        const h = (0, v.useRef)(null),
          g = (0, r.jE)(
            {
              content: i,
              immediatelyRender: !1,
              extensions: [
                u.Z,
                H.Z.configure({
                  enableMath: f,
                  boldToken: m.boldToken,
                  italicToken: m.italicToken,
                  bulletListToken: m.bulletListToken,
                  mathToken: m.mathToken,
                }),
                p.ZP.configure({ type: "markdown" }),
                s.V.configure({
                  text: !1,
                  bold: !1,
                  italic: !1,
                  bulletList: !1,
                  listItem: !1,
                  codeBlock: !1,
                  paragraph: !1,
                }),
                d.Z,
                c.Z,
                Z,
                F.ZP.configure({
                  classes: {
                    base: "comment hover:cursor-pointer",
                    selection: "bg-warning-100",
                    comment: "bg-primary-100 hover:bg-primary-200",
                    selectedComment: "bg-primary-200",
                  },
                }),
                W.Z,
                U.Z,
                K.Z,
                ...(null !== n && void 0 !== n ? n : []),
              ],
              editorProps: {
                attributes: {
                  class: (0, l.m)(
                    a()(
                      "relative max-w-none [&>pre]:p-2 [&>pre]:rounded-lg focus:outline-none min-h-[60px] text-neutral-800 scale-tailwind wysiwyg wysiwyg-chat wysiwyg-sm",
                      e
                    )
                  ),
                },
              },
            },
            [f, null === m || void 0 === m ? void 0 : m.mathToken]
          );
        return g
          ? (0, o.jsxs)(r.rU.Provider, {
              value: { editor: g },
              children: [
                (0, o.jsx)(G, { defaultTokens: m }),
                (0, o.jsx)(z.TG.Provider, {
                  value: { editorRef: h },
                  children: t,
                }),
              ],
            })
          : null;
      }
      var Q = (0, v.memo)(q);
    },
    935018: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var o = n(824246),
        r = n(855549),
        s = n(60042),
        i = n.n(s),
        a = n(53355);
      var l = a.hj.create({
        name: "disableAllShortcuts",
        addKeyboardShortcuts: () => ({
          "Mod-b": () => !0,
          "Mod-i": () => !0,
          "Mod-u": () => !0,
          "Mod-shift-x": () => !0,
          "Mod-shift-h": () => !0,
          "Mod-e": () => !0,
          "Mod-alt-0": () => !0,
          "Mod-alt-1": () => !0,
          "Mod-alt-2": () => !0,
          "Mod-alt-3": () => !0,
          "Mod-alt-4": () => !0,
          "Mod-alt-5": () => !0,
          "Mod-alt-6": () => !0,
          "Mod-shift-7": () => !0,
          "Mod-shift-8": () => !0,
          "Mod-shift-9": () => !0,
          "Mod-shift-b": () => !0,
          "Mod-shift-l": () => !0,
          "Mod-shift-e": () => !0,
          "Mod-shift-r": () => !0,
          "Mod-shift-j": () => !0,
          "Mod-alt-c": () => !0,
          "Mod-,": () => !0,
          "Mod-.": () => !0,
          Enter: ({ editor: e }) => e.commands.keyboardShortcut("shift-Enter"),
        }),
      });
      var c = n(56065).U.extend({
          addStorage: () => ({
            markdown: {
              serialize: (e, t, n, o) => {
                for (let r = o + 1; r < n.childCount; r++)
                  if (n.child(r).type !== t.type)
                    return void ("inTable" in e && !e.inTable && e.write("\n"));
              },
              parse: {},
            },
          }),
        }),
        d = n(980991),
        u = n(939904),
        p = n(686356);
      const m = a.hj.create({
        addKeyboardShortcuts: () => ({
          Enter: ({ editor: e }) => e.commands.setHardBreak(),
          "Shift-Enter": () => !0,
        }),
      });
      var f = n(722206),
        h = n(917163),
        g = n(827378),
        b = n(717809),
        v = n(483563),
        x = n(128157),
        y = n(102396),
        w = n(829714),
        j = n(172570);
      function k(e, t, n) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              k(e, t, n[t]);
            });
        }
        return e;
      }
      function S({
        children: e,
        extensions: t,
        initialContent: n,
        editorProps: s,
      }) {
        var a;
        const k = (0, g.useRef)(null),
          S =
            null ===
              (a =
                null === t || void 0 === t
                  ? void 0
                  : t.find((e) => "mention" === e.name)) || void 0 === a
              ? void 0
              : a.options,
          T = (0, f.Uk)(null !== n && void 0 !== n ? n : "", S),
          N = (0, r.jE)(
            {
              content: T,
              immediatelyRender: !1,
              parseOptions: { preserveWhitespace: "full" },
              extensions: [
                p.Z,
                f.ZP.configure({ type: "text" }),
                h.Z.configure({
                  blockquote: !1,
                  bold: !1,
                  bulletList: !1,
                  code: !1,
                  codeBlock: !1,
                  heading: !1,
                  listItem: !1,
                  orderedList: !1,
                  strike: !1,
                  italic: !1,
                  hardBreak: !1,
                }),
                c,
                u.Z,
                d.Z,
                l,
                m,
                v.ZP.configure({
                  classes: {
                    base: "comment hover:cursor-pointer",
                    selection: "bg-warning-100",
                    comment: "bg-primary-100 hover:bg-primary-200",
                    selectedComment: "bg-primary-200",
                  },
                }),
                x.Z,
                w.Z,
                j.Z,
                ...(null !== t && void 0 !== t ? t : []),
              ],
              editorProps: C(
                {
                  attributes: {
                    class: i()(
                      "relative wysiwyg wysiwyg-sm max-w-none [&>pre]:p-2 [&>pre]:rounded-lg wysiwyg-p:text-neutral-800 focus:outline-none min-h-[60px]"
                    ),
                  },
                },
                s,
                {
                  handlePaste(e, t) {
                    var n;
                    const o =
                      null === (n = t.clipboardData) || void 0 === n
                        ? void 0
                        : n.getData("text/plain");
                    if (!o) return !1;
                    const r = (0, f.vT)(o, S)
                        .map((t) =>
                          "text" === t.type
                            ? e.state.schema.text(t.text)
                            : "hardBreak" === t.type
                            ? e.state.schema.node("hardBreak")
                            : "mention" === t.type
                            ? e.state.schema.node("mention")
                            : null
                        )
                        .filter(Boolean),
                      s = y.HY.fromArray(r),
                      i = e.state.tr.replaceSelectionWith(s, !1);
                    return e.dispatch(i), !0;
                  },
                }
              ),
            },
            []
          );
        return N
          ? (0, o.jsx)(r.rU.Provider, {
              value: { editor: N },
              children: (0, o.jsx)(b.TG.Provider, {
                value: { editorRef: k },
                children: e,
              }),
            })
          : null;
      }
    },
    643672: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var o = n(855549),
        r = n(827378);
      function s() {
        const { editor: e } = (0, o.fi)();
        var t;
        const { 0: n, 1: s } = (0, r.useState)(
          null !== (t = null === e || void 0 === e ? void 0 : e.isEditable) &&
            void 0 !== t &&
            t
        );
        return (
          (0, r.useEffect)(() => {
            if (e)
              return (
                s(e.isEditable),
                e.on("update", t),
                () => {
                  e.off("update", t);
                }
              );
            function t({ editor: e }) {
              s(e.isEditable);
            }
          }, [e]),
          n
        );
      }
    },
    820999: function (e, t, n) {
      "use strict";
      n.d(t, {
        ML: function () {
          return p.ZP;
        },
        Nf: function () {
          return l.Z;
        },
        bk: function () {
          return d;
        },
        UV: function () {
          return C;
        },
        yD: function () {
          return M.yD;
        },
        u3: function () {
          return he;
        },
        LZ: function () {
          return u.Z;
        },
        Tg: function () {
          return M.Tg;
        },
        MB: function () {
          return y;
        },
        Tw: function () {
          return E;
        },
        qe: function () {
          return T.Z;
        },
        bI: function () {
          return j;
        },
      });
      var o = n(824246),
        r = n(827378),
        s = n(792739);
      n(331542);
      var i = n(298784);
      n(285556);
      var a;
      !(function (e) {
        (e.SelectedMatchUpdated = "selectedMatchUpdated"),
          (e.LoadingUpdated = "languageToolLoading"),
          (e.ErrorsUpdated = "languageToolError"),
          (e.IgnoredWordsUpdated = "languageToolIgnoredWords");
      })(a || (a = {}));
      var l = n(173130),
        c = n(720227);
      function d({ children: e, className: t }) {
        return e
          ? (0, o.jsx)("div", {
              className: (0, c.m)(
                "border-t border-neutral-200 px-2 py-1 bg-neutral-50 rounded-b",
                t
              ),
              children: e,
            })
          : null;
      }
      var u = n(935018),
        p = n(717809),
        m = n(855549),
        f = n(60042),
        h = n.n(f),
        g = n(722206);
      function b(e, t, n) {
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
      function v(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function x(e) {
        var {
            className: t,
            content: n,
            disableCopy: s,
            onDisabledCopy: a,
            textDirection: l,
          } = e,
          d = v(e, [
            "className",
            "content",
            "disableCopy",
            "onDisabledCopy",
            "textDirection",
          ]);
        const { editor: u } = (0, m.fi)(),
          { editorRef: f } = (0, p.RP)();
        return (
          (0, r.useEffect)(
            function () {
              null === u || void 0 === u || u.setEditable(!1);
            },
            [u]
          ),
          (0, r.useEffect)(
            function () {
              if (!u) return;
              const e = (0, g.BY)(u),
                t = (0, i.debounce)(e, 1e3);
              return (
                t(n, !1),
                () => {
                  t.cancel();
                }
              );
            },
            [u, n]
          ),
          (0, r.useEffect)(
            function () {
              u && u.commands.updateDisableCopy(!!s);
            },
            [u, s]
          ),
          (0, r.useEffect)(
            function () {
              u && (u.storage.noCopyPaste.onDisabledCopy = a);
            },
            [u, a]
          ),
          (0, o.jsx)(
            m.kg,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  o.forEach(function (t) {
                    b(e, t, n[t]);
                  });
              }
              return e;
            })({}, d, {
              className: (0, c.m)(
                h()(
                  "relative w-full placeholder:text-muted-foreground px-2 py-2",
                  { "text-right": "rtl" === l },
                  t
                )
              ),
              dir: l,
              editor: u,
              ref: f,
            })
          )
        );
      }
      var y = (0, r.memo)(x),
        w = n(759784);
      function j() {
        const { editor: e } = (0, m.fi)();
        var t;
        const { 0: n, 1: s } = (0, r.useState)(
          null !== (t = null === e || void 0 === e ? void 0 : e.getText()) &&
            void 0 !== t
            ? t
            : ""
        );
        return (
          (0, r.useEffect)(() => {
            if (!e) return;
            const t = ({ editor: e }) => {
              const t = (0, g.Xm)(e);
              t && s(t());
            };
            return (
              e.on("update", t),
              () => {
                e.off("update", t);
              }
            );
          }, [e]),
          e ? (0, o.jsx)(w.Z, { text: n, active: e.isEditable }) : null
        );
      }
      var k = n(53355);
      var C = k.hj.create({
          name: "keyHandler",
          addOptions: () => ({ shortcuts: {} }),
          addKeyboardShortcuts() {
            return this.options.shortcuts;
          },
        }),
        S = (n(664098), n(822933)),
        T = n(526604),
        N = n(634954);
      function O() {
        const { editor: e } = (0, m.fi)();
        return e
          ? (0, o.jsx)(o.Fragment, {
              children: (0, o.jsx)(S.Z, {
                name: "ReadOnlyFloatingMenu",
                shouldShow: ({ editor: e }) =>
                  !e.isEditable && !e.state.selection.empty,
                children: (0, o.jsx)(N.k, {}),
              }),
            })
          : null;
      }
      var E = (0, r.memo)(O),
        P = n(483563),
        M = n(233979),
        R = n(444506),
        I = n(917163),
        A = n(980991),
        D = n(686356),
        L = n(782195),
        _ = n(616711),
        B = n(515463),
        $ = n(196920);
      function Z(e, t = []) {
        return e
          .map((e) => {
            const n = [...t, ...(e.properties ? e.properties.className : [])];
            return e.children
              ? Z(e.children, n)
              : { text: e.value, classes: n };
          })
          .flat();
      }
      function H(e) {
        return e.value || e.children || [];
      }
      function z({ doc: e, name: t, lowlight: n, defaultLanguage: o }) {
        const r = [];
        return (
          (0, k.N2)(e, (e) => e.type.name === t).forEach((e) => {
            var t;
            let s = e.pos + 1;
            const i = e.node.attrs.language || o,
              a = n.listLanguages();
            var l;
            Z(
              i &&
                (a.includes(i) ||
                  ((l = i), Boolean($.Z.getLanguage(l))) ||
                  (null === (t = n.registered) || void 0 === t
                    ? void 0
                    : t.call(n, i)))
                ? H(n.highlight(i, e.node.textContent))
                : H(n.highlightAuto(e.node.textContent))
            ).forEach((e) => {
              const t = s + e.text.length;
              if (e.classes.length) {
                const n = B.p.inline(s, t, { class: e.classes.join(" ") });
                r.push(n);
              }
              s = t;
            });
          }),
          B.EH.create(e, r)
        );
      }
      function F({ name: e, lowlight: t, defaultLanguage: n }) {
        if (
          !["highlight", "highlightAuto", "listLanguages"].every(
            (e) => "function" === typeof t[e]
          )
        )
          throw Error(
            "You should provide an instance of lowlight to use the code-block-lowlight extension"
          );
        const o = new _.Sy({
          key: new _.H$("lowlight"),
          state: {
            init: (o, { doc: r }) =>
              z({ doc: r, name: e, lowlight: t, defaultLanguage: n }),
            apply: (o, r, s, i) => {
              const a = s.selection.$head.parent.type.name,
                l = i.selection.$head.parent.type.name,
                c = (0, k.N2)(s.doc, (t) => t.type.name === e),
                d = (0, k.N2)(i.doc, (t) => t.type.name === e);
              return o.docChanged &&
                ([a, l].includes(e) ||
                  d.length !== c.length ||
                  o.steps.some(
                    (e) =>
                      void 0 !== e.from &&
                      void 0 !== e.to &&
                      c.some(
                        (t) =>
                          t.pos >= e.from && t.pos + t.node.nodeSize <= e.to
                      )
                  ))
                ? z({ doc: o.doc, name: e, lowlight: t, defaultLanguage: n })
                : r.map(o.mapping, o.doc);
            },
          },
          props: { decorations: (e) => o.getState(e) },
        });
        return o;
      }
      var V = n(831089),
        W = n(202537),
        U = n(95251),
        K = n(89916);
      const J = (e) => K.fullLanguageMap[e] || e.toUpperCase();
      var G = (0, r.memo)(function ({ node: e }) {
          var t, n, i, a, l, d;
          const u =
            null !==
              (d =
                null === (t = e) ||
                void 0 === t ||
                null === (n = t.content) ||
                void 0 === n ||
                null === (i = n.content) ||
                void 0 === i ||
                null === (a = i[0]) ||
                void 0 === a
                  ? void 0
                  : a.text) && void 0 !== d
              ? d
              : "";
          var p;
          const f =
              null !==
                (p =
                  null === e ||
                  void 0 === e ||
                  null === (l = e.attrs) ||
                  void 0 === l
                    ? void 0
                    : l.language) && void 0 !== p
                ? p
                : "plaintext",
            { 0: g, 1: b } = (0, r.useState)(!1),
            v = null !== f && void 0 !== f ? f : "",
            x = (e) => {
              e.stopPropagation(), b(!g);
            },
            y = u.split(/\r\n|\r|\n/).length;
          return (0,
          o.jsx)(m.T5, { className: "hljs rounded-md", children: (0, o.jsx)(o.Fragment, { children: (0, o.jsxs)("div", { className: (0, c.m)("group bg-transparent relative px-0 py-0 scale-theme", g ? "overflow-auto" : "overflow-hidden"), children: [(0, o.jsxs)("div", { className: "text-white text-xs font-medium font-mono px-3 flex items-center justify-between bg-neutral-800 rounded-t-md py-1.5", children: [(0, o.jsx)("span", { className: "text-neutral-0", children: J(v) }), (0, o.jsxs)("div", { className: "flex items-center justify-end", children: [(0, o.jsx)("div", { className: "pl-2 pr-3 pt-1", children: (0, o.jsx)(U.f, { code: u }) }), y > 15 && g && (0, o.jsxs)("button", { onClick: (e) => x(e), className: "border ml-1 rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0", children: ["Collapse", (0, o.jsx)(s.G, { icon: "chevron-up", className: "ml-1" })] })] })] }), (0, o.jsxs)("div", { children: [(0, o.jsx)("div", { className: h()("p-3 bg-neutral-900", g ? "max-h-[900px] overflow-auto rounded-b-md" : "max-h-[290px] overflow-hidden"), children: (0, o.jsx)(m.ms, { className: "not-wysiwyg font-mono" }) }), y > 15 && !g && (0, o.jsx)("div", { className: "flex font-mono items-center justify-center py-2 text-white text-xs font-medium bg-neutral-900 rounded-b-md", children: (0, o.jsxs)("button", { onClick: (e) => x(e), className: "border ml-1 text-white rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0", children: ["Expand", (0, o.jsx)(s.G, { icon: "chevron-down", className: "ml-1" })] }) })] })] }) }) });
        }),
        q = n(722030),
        Q = n(713222),
        Y = n(403670),
        X = n(884400),
        ee = n(283888),
        te = n(135338),
        ne = n(534522),
        oe = n(232337),
        re = n(787529);
      const se = (e) => K.fullLanguageMap[e] || e.toUpperCase();
      var ie = (0, r.memo)(function ({ editor: e, node: t }) {
        var n, i, a, l, d, u;
        const { 0: p } = (0, r.useState)(!1);
        var f;
        const b =
          null !==
            (f =
              null === (n = t) ||
              void 0 === n ||
              null === (i = n.content) ||
              void 0 === i ||
              null === (a = i.content) ||
              void 0 === a ||
              null === (l = a[0]) ||
              void 0 === l
                ? void 0
                : l.text) && void 0 !== f
            ? f
            : "";
        var v;
        const x =
            null !==
              (v =
                null === t ||
                void 0 === t ||
                null === (d = t.attrs) ||
                void 0 === d
                  ? void 0
                  : d.language) && void 0 !== v
              ? v
              : "plaintext",
          y = (0, g.Xm)(e)(),
          w = (0, re.LQ)(y),
          j = w.findIndex((e) => e.code === String(b).replace(/\n$/, "")),
          { 0: k, 1: C } = (0, r.useState)(!1),
          S = null !== x && void 0 !== x ? x : "",
          T = (0, r.useContext)(ne.p),
          N =
            null === T ||
            void 0 === T ||
            null === (u = T.codingConfig) ||
            void 0 === u
              ? void 0
              : u.customCodeEnvironments,
          O =
            1 === (null === N || void 0 === N ? void 0 : N.length) ||
            ((!N || 0 === N.length) &&
              !!K.LANGUAGE_OPTIONS.find(({ id: e }) => e === S)),
          E = (0, r.useMemo)(
            () =>
              p
                ? ""
                : oe
                    .createHash("sha256")
                    .update(`${b}-${S}-executableCodeBlock`)
                    .digest("hex"),
            [b, S, p]
          ),
          { getScratchpadOpenState: P, setScratchpadOpenState: M } = (0,
          ee.U)(),
          [R, I] = [P(E), (e) => M(E, e)],
          {
            outputTabOpen: A,
            outputValue: D,
            tab: L,
            isFetching: _,
            fetchError: B,
            loadingTaskIdForLogging: $,
            handleExecuteCode: Z,
            setOutputTabOpen: H,
            setTab: z,
          } = (0, te.Z)({
            storeKey: E,
            code: b,
            language: S,
            customCodeEnvironment: null === N || void 0 === N ? void 0 : N[0],
          }),
          F = (e) => {
            e.stopPropagation(), C(!k);
          },
          V = b.split(/\r\n|\r|\n/).length;
        return (0, o.jsx)(m.T5, {
          className: "hljs rounded-md",
          children: (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: (0, c.m)(
                "group bg-transparent relative px-0 py-0 scale-theme",
                k ? "overflow-auto" : "overflow-hidden"
              ),
              children: [
                (0, o.jsxs)("div", {
                  className:
                    "text-white text-xs font-medium font-mono px-3 flex items-center justify-between bg-neutral-800 rounded-t-md py-1.5",
                  children: [
                    (0, o.jsx)("span", {
                      className: "text-neutral-0",
                      children: se(S),
                    }),
                    (0, o.jsxs)("div", {
                      className: "flex items-center justify-end",
                      children: [
                        !p &&
                          O &&
                          (0, o.jsx)("div", {
                            className: "pr-1",
                            children: _
                              ? (0, o.jsx)(q.$, {
                                  className: "pr-2",
                                  size: "xs",
                                  variant: "primary",
                                })
                              : (0, o.jsx)(Q.J, {
                                  icon: ["far", "play"],
                                  className: "hover:bg-neutral-700/40",
                                  variant: "white",
                                  onClick: (e) => {
                                    e.stopPropagation(), Z();
                                  },
                                  disabled: _ || $,
                                  tooltip: "Run Code",
                                  tooltipProps: {
                                    side: "top",
                                    delayDuration: 100,
                                  },
                                }),
                          }),
                        !p &&
                          N &&
                          (null === N || void 0 === N ? void 0 : N.length) >
                            1 &&
                          (0, o.jsx)(Q.J, {
                            icon: ["far", "exclamation-circle"],
                            className: "hover:bg-neutral-800",
                            variant: "white",
                            tooltip:
                              "Please use the coding scratchpad (click on the pencil icon to the right) to execute and test your code.",
                            tooltipProps: { side: "top", delayDuration: 100 },
                          }),
                        !p &&
                          (0, o.jsx)("div", {
                            className: "pr-1",
                            children: (0, o.jsx)(Q.J, {
                              icon: ["far", "pen"],
                              className: "hover:bg-neutral-700/40",
                              variant: "white",
                              onClick: (e) => {
                                e.stopPropagation(), e.preventDefault(), I(!0);
                              },
                              tooltip:
                                "Scratchpad (changes made are not saved)",
                              tooltipProps: { side: "top", delayDuration: 100 },
                            }),
                          }),
                        (0, o.jsx)("div", {
                          className: "pl-2 pr-3 pt-1",
                          children: (0, o.jsx)(U.f, { code: b }),
                        }),
                        V > 11 &&
                          k &&
                          (0, o.jsxs)("button", {
                            onClick: (e) => F(e),
                            className:
                              "border ml-1 rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0",
                            children: [
                              "Collapse",
                              (0, o.jsx)(s.G, {
                                icon: "chevron-up",
                                className: "ml-1",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("div", {
                      className: h()(
                        "p-3 bg-neutral-900",
                        k
                          ? "max-h-[900px] overflow-auto rounded-b-md"
                          : "max-h-[290px] overflow-hidden"
                      ),
                      children: (0, o.jsx)(m.ms, {
                        className: "not-wysiwyg font-mono",
                      }),
                    }),
                    V > 11 &&
                      !k &&
                      (0, o.jsx)("div", {
                        className:
                          "flex items-center justify-center py-2 text-white text-xs font-medium font-mono bg-neutral-900 rounded-b-md",
                        children: (0, o.jsxs)("button", {
                          onClick: (e) => F(e),
                          className:
                            "border ml-1 text-white rounded-md py-1.5 px-2 text-xs flex items-center justify-center bg-neutral-600 border-neutral-500 text-neutral-0",
                          children: [
                            "Expand",
                            (0, o.jsx)(s.G, {
                              icon: "chevron-down",
                              className: "ml-1",
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                "text" !== S &&
                  A &&
                  (0, o.jsx)("div", {
                    className: "border-none pt-4",
                    onClick: (e) => e.stopPropagation(),
                    children: (0, o.jsx)(Y.Z, {
                      className: "w-full h-40 p-0 whitespace-pre-line",
                      outputValue: null !== D && void 0 !== D ? D : "",
                      setOutputTabOpen: H,
                      tab: L,
                      setTab: z,
                      fetchError: B,
                      fullScreenEnabled: !1,
                      fullWidthEnabled: !0,
                    }),
                  }),
                R &&
                  (0, o.jsx)("div", {
                    className:
                      "fixed top-0 left-0 w-full h-full bg-utility-black/50 flex flex-col justify-center items-center z-[100]",
                    children: (0, o.jsx)(X.Q, {
                      rawCode: b,
                      originalLanguage: S,
                      codeBlocksInMarkdownText: w,
                      setOpen: I,
                      codeBlockIndex: j,
                      customCodeEnvironments: N,
                    }),
                  }),
              ],
            }),
          }),
        });
      });
      function ae(e, t, n) {
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
      const le = (0, V.B)(W.y),
        ce = L.ZP.extend({
          addOptions() {
            var e;
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  o.forEach(function (t) {
                    ae(e, t, n[t]);
                  });
              }
              return e;
            })(
              {},
              null === (e = this.parent) || void 0 === e
                ? void 0
                : e.call(this),
              {
                enableCodeExecution: !1,
                languageClassPrefix: "language-",
                exitOnTripleEnter: !0,
                exitOnArrowDown: !0,
                defaultLanguage: null,
                HTMLAttributes: { class: "hljs" },
              }
            );
          },
          addStorage: () => ({
            markdown: {
              serialize(e, t) {
                const n = t.textContent || "";
                e.write("```" + (t.attrs.language || "")),
                  e.write("\n"),
                  e.text(n, !1),
                  e.ensureNewLine(),
                  e.write("```"),
                  e.closeBlock(t);
              },
              parse: {
                setup(e) {
                  var t;
                  e.set({
                    langPrefix:
                      null !== (t = this.options.languageClassPrefix) &&
                      void 0 !== t
                        ? t
                        : "language-",
                  });
                },
                updateDOM(e) {
                  e.innerHTML = e.innerHTML.replace(
                    /\n<\/code><\/pre>/g,
                    "</code></pre>"
                  );
                },
              },
            },
          }),
          addProseMirrorPlugins() {
            var e;
            return [
              ...((null === (e = this.parent) || void 0 === e
                ? void 0
                : e.call(this)) || []),
              F({
                name: this.name,
                lowlight: le,
                defaultLanguage: this.options.defaultLanguage,
              }),
            ];
          },
          addNodeView() {
            return this.options.enableCodeExecution
              ? (0, m.fW)(ie)
              : (0, m.fW)(G);
          },
        });
      var de = ce,
        ue = n(144849),
        pe = n(128157),
        me = n(829714);
      function fe({
        className: e,
        children: t,
        extensions: n,
        initialContent: s,
        defaultTokens: i = R.Z,
        enableMath: a = !1,
        enableCodeExecution: l = !1,
      }) {
        const d = (0, r.useRef)(null),
          u = (0, m.jE)(
            {
              content: s,
              immediatelyRender: !0,
              extensions: [
                D.Z,
                ue.Z.configure({
                  enableMath: a,
                  boldToken: i.boldToken,
                  italicToken: i.italicToken,
                  bulletListToken: i.bulletListToken,
                  mathToken: i.mathToken,
                }),
                g.ZP.configure({ type: "markdown" }),
                I.V.configure({
                  text: !1,
                  bold: !1,
                  italic: !1,
                  bulletList: !1,
                  listItem: !1,
                  codeBlock: !1,
                  paragraph: !1,
                }),
                A.Z,
                P.ZP.configure({
                  classes: {
                    base: "comment hover:cursor-pointer",
                    selection: "bg-warning-100",
                    comment: "bg-primary-100 hover:bg-primary-200",
                    selectedComment: "bg-primary-200",
                  },
                }),
                pe.Z.configure(),
                de.configure({ enableCodeExecution: l }),
                me.Z,
                ...(null !== n && void 0 !== n ? n : []),
              ],
              editorProps: {
                attributes: {
                  class: (0, c.m)(
                    h()(
                      "relative max-w-none [&>pre]:p-2 [&>pre]:rounded-lg focus:outline-none min-h-[60px] text-neutral-800 scale-tailwind wysiwyg wysiwyg-chat wysiwyg-sm",
                      e
                    )
                  ),
                },
              },
            },
            [a, l, null === i || void 0 === i ? void 0 : i.mathToken]
          );
        return u
          ? (0, o.jsx)(m.rU.Provider, {
              value: { editor: u },
              children: (0, o.jsx)(p.TG.Provider, {
                value: { editorRef: d },
                children: t,
              }),
            })
          : null;
      }
      var he = (0, r.memo)(fe);
    },
    829714: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var o,
        r = n(53355);
      !(function (e) {
        e.WARNING = "warning";
      })(o || (o = {}));
      const s = r.hj.create({
        name: "alert",
        addCommands: () => ({
          showWarning:
            (e) =>
            ({ editor: t, tr: n }) => {
              const { from: r } = t.state.selection,
                s = t.view.coordsAtPos(r);
              return n.setMeta(o.WARNING, { message: e, coords: s }), !0;
            },
        }),
      });
      t.Z = s;
    },
    722206: function (e, t, n) {
      "use strict";
      n.d(t, {
        BY: function () {
          return s;
        },
        Xm: function () {
          return i;
        },
        vT: function () {
          return a;
        },
        Uk: function () {
          return l;
        },
      });
      var o = n(53355),
        r = n(189058);
      function s(e) {
        var t, n;
        const o =
          null === (t = e.storage) ||
          void 0 === t ||
          null === (n = t.content) ||
          void 0 === n
            ? void 0
            : n.parseContent;
        if (!o)
          throw new Error(
            "Content parser is not available. Make sure the Content extension is enabled."
          );
        return o;
      }
      function i(e) {
        var t, n;
        const o =
          null === (t = e.storage) ||
          void 0 === t ||
          null === (n = t.content) ||
          void 0 === n
            ? void 0
            : n.getContent;
        if (!o)
          throw new Error(
            "Content serializer is not available. Make sure the Content extension is enabled."
          );
        return o;
      }
      function a(e, t) {
        const n = e
          .split("\n")
          .map((e, n, o) => {
            const s = n === o.length - 1;
            if ("" === e) return s ? [] : [{ type: "hardBreak" }];
            let i;
            return (
              (i = t
                ? (function (e, t = "@", n = [], o = !0) {
                    const s = (0, r.i)(t),
                      i = [...e.matchAll(s)];
                    let a = 0;
                    const l = [];
                    for (const r of i) {
                      const s = r.index + (r[0].startsWith(" ") ? 1 : 0),
                        i = r.index + r[0].length;
                      if (
                        (s > a &&
                          l.push({ type: "text", text: e.substring(a, s) }),
                        o)
                      ) {
                        const e = n.find(
                          (e) =>
                            r[2].startsWith(e.id) || r[2].startsWith(e.label)
                        );
                        if (e) {
                          l.push({
                            type: "mention",
                            attrs: { id: e.id, label: e.label },
                          });
                          const n = r[0]
                            .trim()
                            .replace(t, "")
                            .replace(e.label, "");
                          n.length && l.push({ type: "text", text: n });
                        } else l.push({ type: "text", text: r[1] });
                        r[0].endsWith(" ") &&
                          l.push({ type: "text", text: " " });
                      } else
                        l.push({
                          type: "mention",
                          attrs: { id: r[2].trim(), label: r[2].trim() },
                        });
                      a = i;
                    }
                    return (
                      a < e.length &&
                        l.push({ type: "text", text: e.substring(a) }),
                      l
                    );
                  })(e, t.char, t.items, t.parseKnownOnly)
                : [{ type: "text", text: e }]),
              s ? [...i] : [...i, { type: "hardBreak" }]
            );
          })
          .flat();
        return n;
      }
      function l(e, t) {
        return {
          type: "doc",
          content: [{ type: "paragraph", content: a(e, t).flat() }],
        };
      }
      const c = o.hj.create({
        name: "content",
        addOptions: () => ({ type: "text" }),
        addStorage() {
          return { type: this.options.type };
        },
        onBeforeCreate() {
          this.editor.storage.content = {
            type: this.options.type,
            getContent: () => {
              const e = this.options.type,
                t = this.editor.storage.markdown;
              if (!t && "markdown" === e)
                throw new Error("Markdown storage is not available");
              return "text" === e
                ? this.editor.getText()
                : "markdown" === e
                ? t.getMarkdown()
                : this.editor.getHTML();
            },
            parseContent: (e, t) => {
              const n = this.options.type,
                o = this.editor,
                r = t || o.isFocused;
              switch (n) {
                case "text":
                  if (!r && void 0 !== e && e !== o.getText()) {
                    const t = o.storage.mention,
                      n = l(e, null === t || void 0 === t ? void 0 : t.mention);
                    setTimeout(() => {
                      o.commands.setContent(n, !1);
                    });
                  }
                  break;
                case "markdown": {
                  const t = o.storage.markdown;
                  if (!t && "markdown" === n)
                    throw new Error("Markdown storage is not available");
                  const s = t.getMarkdown();
                  r ||
                    void 0 === e ||
                    e === s ||
                    o.commands.setContent(e, !1, { preserveWhitespace: !0 });
                  break;
                }
                case "html": {
                  const t = o.getHTML();
                  r ||
                    void 0 === e ||
                    e === t ||
                    setTimeout(() => {
                      o.commands.setContent(e, !1, {
                        preserveWhitespace: "full",
                      });
                    });
                }
              }
            },
          };
        },
      });
      t.ZP = c;
    },
    980991: function (e, t, n) {
      "use strict";
      var o = n(53355),
        r = n(616711);
      const s = o.hj.create({
        name: "noCopyPaste",
        addOptions: () => ({
          disableCopy: !1,
          disablePaste: !1,
          onDisabledCopy: () => {},
          onDisabledPaste: () => {},
        }),
        addStorage() {
          return {
            onDisabledCopy: this.options.onDisabledCopy,
            onDisabledPaste: this.options.onDisabledPaste,
          };
        },
        addCommands() {
          return {
            updateDisableCopy: (e) => () => (
              (this.options.disableCopy = e),
              this.editor.view.updateState(this.editor.state),
              !0
            ),
            updateDisablePaste: (e) => () => (
              (this.options.disablePaste = e),
              this.editor.view.updateState(this.editor.state),
              !0
            ),
          };
        },
        addProseMirrorPlugins() {
          const e = new r.H$("noCopyPastePlugin"),
            t = this.storage.onDisabledCopy,
            n = this.storage.onDisabledPaste;
          return [
            new r.Sy({
              key: e,
              props: {
                handleDOMEvents: {
                  copy: (e, n) =>
                    !!this.options.disableCopy &&
                    (n.preventDefault(), null === t || void 0 === t || t(), !0),
                  cut: (e, n) =>
                    !!this.options.disableCopy &&
                    (n.preventDefault(), null === t || void 0 === t || t(), !0),
                  paste: (e, t) =>
                    !!this.options.disablePaste &&
                    (t.preventDefault(), null === n || void 0 === n || n(), !0),
                },
              },
            }),
          ];
        },
      });
      t.Z = s;
    },
    939904: function (e, t, n) {
      "use strict";
      const o = n(386422).V.extend({
        addOptions: () => ({
          emptyEditorClass:
            "before:content-[attr(data-placeholder)] before:text-muted-foreground before:float-left before:h-0 before:pointer-events-none",
          emptyNodeClass: "is-empty",
          placeholder: "",
          showOnlyWhenEditable: !0,
          considerAnyAsEmpty: !1,
          showOnlyCurrent: !0,
          includeChildren: !1,
        }),
        addCommands() {
          return {
            updatePlaceholder: (e) => () => (
              (this.options.placeholder = e),
              this.editor.view.updateState(this.editor.state),
              !0
            ),
          };
        },
      });
      t.Z = o;
    },
    128157: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return o;
        },
      });
      var o,
        r = n(53355);
      !(function (e) {
        (e.ENABLED_CHANGE = "enabledChange"),
          (e.OPEN_CHANGE = "openChange"),
          (e.SELECTED_CHANGE = "selectedChange");
      })(o || (o = {})),
        (t.Z = new r.hj({
          name: "reviewerCopilot",
          addStorage: () => ({ enabled: !1, open: !1 }),
          addCommands() {
            return {
              setCopilotEnabled:
                (e) =>
                ({ tr: t }) => (
                  (this.storage.enabled = e), t.setMeta(o.ENABLED_CHANGE, e), !0
                ),
              setCopilotOpen:
                (e) =>
                ({ tr: t }) => (
                  (this.storage.open = e), t.setMeta(o.OPEN_CHANGE, e), !0
                ),
              setCopilotSelection:
                (e) =>
                ({ tr: t }) => (t.setMeta(o.SELECTED_CHANGE, e), !0),
            };
          },
        }));
    },
    172570: function (e, t, n) {
      "use strict";
      var o = n(53355),
        r = n(616711);
      const s = ["ltr", "rtl", "auto"],
        i = o.hj.create({
          name: "textDirection",
          addOptions: () => ({
            types: ["paragraph", "heading"],
            defaultDirection: "auto",
          }),
          addGlobalAttributes() {
            return [
              {
                types: this.options.types,
                attributes: {
                  dir: {
                    default: null,
                    rendered: !0,
                    parseHTML: (e) => e.dir || this.options.defaultDirection,
                    renderHTML: (e) => ({ dir: e.dir }),
                  },
                },
              },
            ];
          },
          addCommands() {
            return {
              setTextDirection:
                (e) =>
                ({ commands: t }) =>
                  !!s.includes(e) &&
                  ((this.options.defaultDirection = e),
                  this.options.types.every((n) =>
                    t.updateAttributes(n, { dir: e })
                  )),
            };
          },
          addProseMirrorPlugins() {
            return [
              new r.Sy({
                key: new r.H$("textDirection"),
                appendTransaction: (e, t, n) => {
                  if (!e.some((e) => e.docChanged)) return;
                  let o = !1;
                  const r = n.tr;
                  return (
                    n.doc.descendants((e, t) => {
                      if (this.options.types.includes(e.type.name)) {
                        if (null !== e.attrs.dir && e.textContent.length > 0)
                          return;
                        const n = r.storedMarks || [];
                        r.setNodeAttribute(
                          t,
                          "dir",
                          this.options.defaultDirection
                        );
                        for (const e of n) r.addStoredMark(e);
                        o = !0;
                      }
                    }),
                    o ? r : null
                  );
                },
              }),
            ];
          },
        });
      t.Z = i;
    },
    686356: function (e, t, n) {
      "use strict";
      var o = n(53355),
        r = n(616711),
        s = n(711719);
      function i(e, t, n) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              i(e, t, n[t]);
            });
        }
        return e;
      }
      const l = new Set();
      t.Z = new o.hj({
        name: "unique-id",
        priority: 99999,
        addOptions: () => ({
          attributeName: "id",
          createId: () => (0, s.v4)(),
        }),
        addGlobalAttributes() {
          return [
            {
              types: ["paragraph", "heading"],
              attributes: {
                [this.options.attributeName]: {
                  default: null,
                  rendered: !0,
                  keepOnSplit: !1,
                },
              },
            },
          ];
        },
        onCreate() {
          !(function (e, t, n) {
            const { tr: o, doc: r } = e,
              { attributeName: s, createId: i } = n;
            let c = !1;
            r.descendants((e, t) => {
              if ("codeBlock" === e.type.name) return !1;
              if (e.isTextblock && !e.attrs[s]) {
                const n = i();
                o.setNodeMarkup(t, void 0, a({}, e.attrs, { [s]: n })),
                  l.add(n),
                  (c = !0);
              }
            }),
              c && (o.setMeta("addToHistory", !1), t.dispatch(o));
          })(this.editor.state, this.editor.view, this.options);
        },
        addProseMirrorPlugins() {
          const { attributeName: e, createId: t } = this.options;
          return [
            new r.Sy({
              key: new r.H$("unique-id"),
              appendTransaction(n, r, s) {
                if (!n.some(({ docChanged: e }) => e)) return null;
                let i = !1;
                const c = s.tr,
                  d = (0, o.XP)(r.doc, n);
                return (
                  (0, o.QC)(d).forEach(({ newRange: n }) => {
                    (0, o.b5)(s.doc, n, (e) => e.isTextblock).forEach(
                      ({ node: n, pos: o }) => {
                        if (!n.attrs[e]) {
                          const r = t();
                          c.setNodeMarkup(
                            o,
                            void 0,
                            a({}, n.attrs, { [e]: r })
                          ),
                            l.add(r),
                            (i = !0);
                        }
                      }
                    );
                  }),
                  i ? c : null
                );
              },
            }),
          ];
        },
      });
    },
    483563: function (e, t, n) {
      "use strict";
      n.d(t, {
        Cw: function () {
          return o;
        },
        EQ: function () {
          return u;
        },
      });
      var o,
        r = n(53355),
        s = n(616711),
        i = n(515463),
        a = n(138944);
      function l(e, t, n) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              l(e, t, n[t]);
            });
        }
        return e;
      }
      !(function (e) {
        (e.CommentsUpdated = "Comment:Updated"),
          (e.Enabled = "Comment:Enabled"),
          (e.CommentSelected = "Comment:Selected"),
          (e.CommentPositionsUpdated = "Comment:PositionsUpdated");
      })(o || (o = {}));
      const d = r.hj.create({
          name: "comment",
          addOptions: () => ({
            enabled: !1,
            classes: {
              base: "comment-plugin",
              comment: "comment",
              selectedComment: "selected-comment",
              selection: "selection",
            },
          }),
          addStorage: () => ({
            enabled: !1,
            isFocused: !1,
            selectedCommentId: null,
            comments: [],
            selection: null,
          }),
          onCreate() {
            this.storage.enabled = this.options.enabled;
          },
          addCommands() {
            return {
              selectComment:
                (e) =>
                ({ tr: t }) =>
                  this.storage.selectedCommentId !== e &&
                  ((this.storage.selectedCommentId = e),
                  t.setMeta(o.CommentSelected, e),
                  t.setMeta(o.CommentsUpdated, !0),
                  !0),
              deselectComment:
                () =>
                ({ tr: e }) =>
                  null !== this.storage.selectedCommentId &&
                  ((this.storage.selectedCommentId = null),
                  e.setMeta(o.CommentSelected, null),
                  e.setMeta(o.CommentsUpdated, !0),
                  !0),
              deleteComment:
                (e) =>
                ({ tr: t }) =>
                  !!this.storage.comments.find((t) => t.id === e) &&
                  ((this.storage.comments = this.storage.comments.filter(
                    (t) => t.id !== e
                  )),
                  t.setMeta(o.CommentsUpdated, !0),
                  !0),
              addComment:
                (e) =>
                ({ tr: t }) =>
                  !this.storage.comments.find((t) => t.id === e.id) &&
                  (this.storage.comments.push(e),
                  t.setMeta(o.CommentsUpdated, !0),
                  !0),
              dropComments:
                () =>
                ({ tr: e }) =>
                  0 !== this.storage.comments.length &&
                  ((this.storage.comments = []),
                  e.setMeta(o.CommentsUpdated, !0),
                  !0),
              setComments:
                (e) =>
                ({ tr: t }) =>
                  !this.storage.isFocused &&
                  ((this.storage.comments = e),
                  (this.storage.selection = null),
                  t.setMeta(o.CommentsUpdated, !0),
                  !0),
              enableComments:
                () =>
                ({ tr: e }) =>
                  !this.storage.enabled &&
                  ((this.storage.enabled = !0), e.setMeta(o.Enabled, !0), !0),
              disableComments:
                () =>
                ({ tr: e }) =>
                  !!this.storage.enabled &&
                  ((this.storage.enabled = !1), e.setMeta(o.Enabled, !1), !0),
            };
          },
          onFocus() {
            this.storage.isFocused = !0;
          },
          onBlur() {
            this.storage.isFocused = !1;
          },
          addProseMirrorPlugins() {
            const e = this;
            return [
              new s.Sy({
                key: new s.H$("commentPlugin"),
                props: {
                  decorations(e) {
                    var t;
                    return null === (t = this.getState(e)) || void 0 === t
                      ? void 0
                      : t.decorators;
                  },
                  handleDOMEvents: {
                    click: (e, t) => {
                      const n = t.target;
                      return (
                        n &&
                        (null === n || void 0 === n
                          ? void 0
                          : n.classList.contains("comment")) &&
                        n.id
                          ? this.editor.commands.selectComment(n.id)
                          : this.editor.commands.deselectComment(),
                        !1
                      );
                    },
                  },
                },
                state: {
                  init: () => ({
                    decorators: i.EH.empty,
                    enabled: e.storage.enabled,
                  }),
                  apply: (t, n) => {
                    const r = t.getMeta(o.Enabled);
                    if (void 0 !== r)
                      return { decorators: n.decorators, enabled: r };
                    if (!n.enabled)
                      return { decorators: i.EH.empty, enabled: n.enabled };
                    const s = t.getMeta(o.CommentsUpdated);
                    let l = n.decorators;
                    return (
                      (t.docChanged || s) &&
                        (l = (function (e, t, n, o) {
                          const r = t.map((e) =>
                            i.p.inline(
                              e.range.from,
                              e.range.to,
                              {
                                class: (0, a.default)(o.base, {
                                  [o.comment]: e.id !== n,
                                  [o.selectedComment]: e.id === n,
                                }),
                                id: e.id,
                              },
                              {
                                id: e.id,
                                inclusiveLeft: !0,
                                inclusiveRight: !0,
                              }
                            )
                          );
                          return i.EH.create(e, r);
                        })(
                          t.doc,
                          e.storage.comments,
                          e.storage.selectedCommentId,
                          e.options.classes
                        )),
                      { decorators: l, enabled: n.enabled }
                    );
                  },
                },
                filterTransaction(t, n) {
                  const r = this.getState(n);
                  if (!(null === r || void 0 === r ? void 0 : r.enabled))
                    return !0;
                  const s = t.doc.nodeSize - t.before.nodeSize,
                    i = (
                      n,
                      r = "You have to rate the comment to be able to edit the highlighted area!"
                    ) => {
                      t.setMeta(o.CommentsUpdated, !0),
                        e.editor.commands.selectComment(n[0].id),
                        window.alert(r);
                    };
                  if (!t.before.eq(t.doc)) {
                    const n = t.selection.from - s,
                      r = e.storage.comments,
                      a = r.filter(
                        (e) =>
                          (e.range.from < n && e.range.to > n) ||
                          (s < 0 && e.range.to === n)
                      );
                    if (a.length) return i(a), !1;
                    if (s < -1) {
                      const e = r.filter(
                        (e) =>
                          (e.range.to > t.selection.from &&
                            e.range.to < t.selection.from + Math.abs(s)) ||
                          (e.range.from < t.selection.from + Math.abs(s) &&
                            e.range.from > t.selection.from)
                      );
                      for (const n of e) {
                        const e = n.range.to - t.selection.from;
                        if (n.range.to - e <= n.range.from)
                          return (
                            i(
                              [n],
                              "You have to rate the comment to be able to delete the highlighted area!"
                            ),
                            !1
                          );
                      }
                    }
                    if (-1 === s) {
                      const e = r.filter(
                        (e) => e.range.from < n && e.range.to >= n
                      );
                      if (e.length && e[0].range.from === e[0].range.to + s)
                        return (
                          i(
                            e,
                            "You have to rate the comment to be able to remove the highlighted area!"
                          ),
                          !1
                        );
                    }
                    const l = [];
                    (e.storage.comments = r.map((e) => {
                      if (
                        (s < -1 &&
                          e.range.to > t.selection.from &&
                          e.range.to < t.selection.from + Math.abs(s)) ||
                        (e.range.from < t.selection.from + Math.abs(s) &&
                          e.range.from > t.selection.from)
                      ) {
                        const n = e.range.to - t.selection.from,
                          o = { from: e.range.from, to: e.range.to - n };
                        return (
                          l.push({ id: e.id, range: o }), c({}, e, { range: o })
                        );
                      }
                      if (e.range.from >= n) {
                        const t = {
                          from: e.range.from + s,
                          to: e.range.to + s,
                        };
                        return (
                          l.push({ id: e.id, range: t }), c({}, e, { range: t })
                        );
                      }
                      return c({}, e);
                    })),
                      t.setMeta(o.CommentPositionsUpdated, l),
                      t.setMeta(o.CommentsUpdated, !0);
                  }
                  return !0;
                },
              }),
              new s.Sy({
                state: {
                  init: () => ({
                    deco: i.EH.empty,
                    enabled: e.storage.enabled,
                  }),
                  apply(t, n, r, s) {
                    const a = t.getMeta(o.Enabled);
                    if (void 0 !== a) return { deco: n.deco, enabled: a };
                    const l = s.selection;
                    if (l) {
                      return {
                        deco: i.EH.create(s.doc, [
                          i.p.inline(
                            l.$from.pos,
                            l.$to.pos,
                            { class: e.options.classes.selection },
                            { inclusiveLeft: !0, inclusiveRight: !0 }
                          ),
                        ]),
                        enabled: n.enabled,
                      };
                    }
                    return { deco: i.EH.empty, enabled: n.enabled };
                  },
                },
                props: {
                  decorations(t) {
                    var n;
                    return !(null === (n = this.getState(t)) || void 0 === n
                      ? void 0
                      : n.enabled) || e.editor.isEditable
                      ? null
                      : t && this.getState(t)
                      ? this.getState(t).deco
                      : null;
                  },
                },
              }),
            ];
          },
        }),
        u = (e) => {
          const { selection: t } = e.state;
          if (t.empty) return { range: null, content: "" };
          return {
            range: { from: t.$from.pos, to: t.$to.pos },
            content: t
              .content()
              .content.textBetween(0, t.content().content.size),
          };
        };
      t.ZP = d;
    },
    144849: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return q;
        },
      });
      var o = n(53355),
        r = n(416817),
        s = n(616711),
        i = n(938910);
      function a(e, t, n) {
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
      const l = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/,
        c = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g,
        d = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/,
        u = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g,
        p = (e) =>
          new s.Sy({
            key: new s.H$(`${e}-spaceless-punctuation`),
            appendTransaction: (t, n, o) => {
              let r = o.tr,
                s = !1;
              return (
                o.doc.descendants((t, n) => {
                  t.isText &&
                    t.marks.forEach((i) => {
                      if (i.type.name === e) {
                        const e = t.text;
                        if (
                          /[^\p{L}\p{N}\s]$/u.test(
                            null !== e && void 0 !== e ? e : ""
                          )
                        ) {
                          const e = n + t.nodeSize,
                            i = o.doc.textBetween(e, e + 1, null, "");
                          i &&
                            !/\s/.test(i) &&
                            ((r = r.insertText(" ", e)), (s = !0));
                        }
                      }
                    });
                }),
                s ? r : null
              );
            },
          });
      var m = r.ZP.extend({
          addStorage: () => ({
            markdown: {
              serialize: {
                open: (e, t) => t.attrs.token,
                close: (e, t) => t.attrs.token,
                mixable: !0,
                expelEnclosingWhitespace: !0,
              },
              parse: {
                setup(e) {
                  e.renderer.rules.strong_open = (e, t, n, o, r) => {
                    const s = e[t],
                      i = s.markup;
                    return s.attrSet("token", i), r.renderToken(e, t, n);
                  };
                },
              },
            },
          }),
          addCommands() {
            var e;
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  o.forEach(function (t) {
                    a(e, t, n[t]);
                  });
              }
              return e;
            })(
              {},
              null === (e = this.parent) || void 0 === e
                ? void 0
                : e.call(this),
              {
                toggleBoldWithDefaultToken:
                  () =>
                  ({ commands: e }) => {
                    var t;
                    const n =
                      null !==
                        (t =
                          this.editor.storage.markdownExtensions.boldToken) &&
                      void 0 !== t
                        ? t
                        : i.BoldToken.ASTERISK;
                    return e.toggleMark(this.name, { token: n }), !0;
                  },
              }
            );
          },
          addAttributes: () => ({
            token: { default: "**", renderHTML: (e) => ({ token: e.token }) },
          }),
          addInputRules() {
            return [
              (0, o.Cf)({
                find: l,
                type: this.type,
                getAttributes: () => ({ token: "**" }),
              }),
              (0, o.Cf)({
                find: d,
                type: this.type,
                getAttributes: () => ({ token: "__" }),
              }),
            ];
          },
          addPasteRules() {
            return [
              (0, o.K9)({
                find: c,
                type: this.type,
                getAttributes: () => ({ token: "**" }),
              }),
              (0, o.K9)({
                find: u,
                type: this.type,
                getAttributes: () => ({ token: "__" }),
              }),
            ];
          },
          addProseMirrorPlugins: () => [p("bold")],
        }),
        f = n(857074);
      function h(e, t, n) {
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
      const g = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/,
        b = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g,
        v = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/,
        x = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
      var y = f.ZP.extend({
          addStorage: () => ({
            markdown: {
              serialize: {
                open: (e, t) => t.attrs.token,
                close: (e, t) => t.attrs.token,
                mixable: !0,
                expelEnclosingWhitespace: !0,
              },
              parse: {
                setup(e) {
                  e.renderer.rules.em_open = (e, t, n, o, r) => {
                    const s = e[t],
                      i = s.markup;
                    return s.attrSet("token", i), r.renderToken(e, t, n);
                  };
                },
              },
            },
          }),
          addCommands() {
            var e;
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (o = o.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  o.forEach(function (t) {
                    h(e, t, n[t]);
                  });
              }
              return e;
            })(
              {},
              null === (e = this.parent) || void 0 === e
                ? void 0
                : e.call(this),
              {
                toggleItalicWithDefaultToken:
                  () =>
                  ({ commands: e }) => {
                    var t;
                    const n =
                      null !==
                        (t =
                          this.editor.storage.markdownExtensions.italicToken) &&
                      void 0 !== t
                        ? t
                        : i.ItalicToken.ASTERISK;
                    return e.toggleMark(this.name, { token: n }), !0;
                  },
              }
            );
          },
          addAttributes: () => ({
            token: { default: "*", renderHTML: (e) => ({ token: e.token }) },
          }),
          addInputRules() {
            return [
              (0, o.Cf)({
                find: g,
                type: this.type,
                getAttributes: () => ({ token: "*" }),
              }),
              (0, o.Cf)({
                find: v,
                type: this.type,
                getAttributes: () => ({ token: "_" }),
              }),
            ];
          },
          addPasteRules() {
            return [
              (0, o.K9)({
                find: b,
                type: this.type,
                getAttributes: () => ({ token: "*" }),
              }),
              (0, o.K9)({
                find: x,
                type: this.type,
                getAttributes: () => ({ token: "_" }),
              }),
            ];
          },
          addProseMirrorPlugins: () => [p("italic")],
        }),
        w = n(238379),
        j = n(251655);
      function k(e, t, n) {
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
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              k(e, t, n[t]);
            });
        }
        return e;
      }
      const S = /^\s*([-+*])\s$/;
      var T = w.ZP.extend({
          addStorage: () => ({
            markdown: {
              serialize: (e, t) => (
                Object.assign(t, { attrs: C({}, t.attrs, { tight: !0 }) }),
                e.renderList(t, "  ", () => t.attrs.token + " ")
              ),
              parse: {
                setup(e) {
                  e.renderer.rules.bullet_list_open = (e, t, n, o, r) => {
                    const s = e[t],
                      i = e[t + 1].markup || "";
                    return s.attrSet("token", i), r.renderToken(e, t, n);
                  };
                },
              },
            },
          }),
          addCommands() {
            var e;
            return C(
              {},
              null === (e = this.parent) || void 0 === e
                ? void 0
                : e.call(this),
              {
                toggleBulletListWithDefaultToken:
                  () =>
                  ({ commands: e }) => {
                    var t;
                    const n =
                      null !==
                        (t =
                          this.editor.storage.markdownExtensions
                            .bulletListToken) && void 0 !== t
                        ? t
                        : i.BulletListToken.ASTERISK;
                    return (
                      e.toggleList(
                        this.name,
                        this.options.itemTypeName,
                        this.options.keepMarks,
                        { token: n }
                      ),
                      !0
                    );
                  },
              }
            );
          },
          addAttributes: () => ({
            token: { default: "*", renderHTML: (e) => ({ token: e.token }) },
          }),
          addInputRules() {
            let e = (0, o.S0)({
              find: S,
              type: this.type,
              getAttributes: (e) => ({ token: e[1] }),
            });
            return (
              (this.options.keepMarks || this.options.keepAttributes) &&
                (e = (0, o.S0)({
                  find: S,
                  type: this.type,
                  keepMarks: this.options.keepMarks,
                  keepAttributes: this.options.keepAttributes,
                  getAttributes: (e) =>
                    (0, o.P1)(this.editor.getAttributes(j.Z.name), {
                      token: e[1],
                    }),
                  editor: this.editor,
                })),
              [e]
            );
          },
        }),
        N = n(491077),
        O = n(102396),
        E = n(8465);
      const P =
        (e) =>
        ({ state: t, dispatch: n }) => {
          const r = (0, o.jo)(e, t.schema),
            { $from: s } = t.selection;
          return (function (e, t) {
            return function (n, o) {
              const { $from: r, $to: s } = n.selection,
                i = r.blockRange(
                  s,
                  (t) => t.childCount > 0 && t.firstChild.type === e
                );
              if (!i) return !1;
              const a = i.startIndex;
              if (0 === a) return !1;
              const l = i.parent,
                c = l.child(a - 1);
              if (c.type !== e) return !1;
              if (o) {
                const r = l.type.name === T.name ? { token: t } : null,
                  s = c.lastChild && c.lastChild.type === l.type,
                  a = O.HY.from(s ? e.create() : null),
                  d = new O.p2(
                    O.HY.from(e.create(null, O.HY.from(l.type.create(r, a)))),
                    s ? 3 : 1,
                    0
                  ),
                  u = i.start,
                  p = i.end;
                o(
                  n.tr
                    .step(new E.FC(u - (s ? 3 : 1), p, u, p, d, 1, !0))
                    .scrollIntoView()
                );
              }
              return !0;
            };
          })(r, s.node(-2).attrs.token || "*")(t, n);
        };
      var M = N.Z.extend({
          addCommands: () => ({ customSinkListItem: (e) => P(e) }),
          addKeyboardShortcuts() {
            var e;
            return Object.assign(
              {},
              (null === (e = this.parent) || void 0 === e
                ? void 0
                : e.call(this)) || {},
              { Tab: () => this.editor.commands.customSinkListItem(this.name) }
            );
          },
        }),
        R = n(893665);
      var I = o.NB.create({
        name: "markdownHTMLNode",
        addStorage: () => ({
          markdown: {
            serialize(e, t, n) {
              this.editor.storage.markdown.options.html
                ? e.write(
                    (function (e, t) {
                      const n = e.type.schema,
                        r = (0, o.d1)(O.HY.from(e), n);
                      if (
                        e.isBlock &&
                        (t instanceof O.HY ||
                          t.type.name === n.topNodeType.name)
                      )
                        return (function (e) {
                          const t = (function (e) {
                            const t = `<body>${e}</body>`;
                            return new window.DOMParser().parseFromString(
                              t,
                              "text/html"
                            ).body;
                          })(e).firstElementChild;
                          return (
                            (t.innerHTML = t.innerHTML.trim()
                              ? `\n${t.innerHTML}\n`
                              : "\n"),
                            t.outerHTML
                          );
                        })(r);
                      return r;
                    })(t, n)
                  )
                : (console.warn(
                    `Tiptap Markdown: "${t.type.name}" node is only available in html mode`
                  ),
                  e.write(`[${t.type.name}]`)),
                t.isBlock && e.closeBlock(t);
            },
            parse: {},
          },
        }),
      });
      function A(e) {
        var t, n;
        return null !==
          (n =
            null === e ||
            void 0 === e ||
            null === (t = e.content) ||
            void 0 === t
              ? void 0
              : t.content) && void 0 !== n
          ? n
          : [];
      }
      var D = R.ZP.extend({
        addProseMirrorPlugins() {
          return [
            new s.Sy({
              props: {
                handlePaste: (e, t) => {
                  var n;
                  const o =
                    null === (n = t.clipboardData) || void 0 === n
                      ? void 0
                      : n.getData("text/html");
                  if (o) {
                    const t = document.createElement("div");
                    t.innerHTML = o;
                    const n = t.querySelector("table");
                    if (n) {
                      if (this.editor.isActive(this.type.name)) return !0;
                      n.querySelectorAll("td, th").forEach((e) => {
                        e.removeAttribute("colspan"),
                          e.removeAttribute("rowspan");
                      });
                      const o = n.querySelector("tr");
                      o &&
                        o.querySelectorAll("td").forEach((e) => {
                          const t = document.createElement("th");
                          (t.innerHTML = e.innerHTML), e.replaceWith(t);
                        });
                      const r = O.aw.fromSchema(e.state.schema).parse(t),
                        s = e.state.tr.replaceSelectionWith(r);
                      return e.dispatch(s), !0;
                    }
                  }
                  return !1;
                },
              },
            }),
          ];
        },
        addStorage: () => ({
          markdown: {
            serialize(e, t, n) {
              !(function (e) {
                const t = A(e),
                  n = t[0],
                  o = t.slice(1);
                if (A(n).some((e) => L(e) || e.childCount > 1)) return !1;
                if (o.some((e) => A(e).some((e) => L(e) || e.childCount > 1)))
                  return !1;
                return !0;
              })(t)
                ? I.storage.markdown.serialize.call(this, e, t, n)
                : ((e.inTable = !0),
                  t.forEach((t, n, o) => {
                    if (
                      (e.write("| "),
                      t.forEach((t, n, o) => {
                        o && e.write(" | ");
                        const r = t.firstChild;
                        (null === r || void 0 === r
                          ? void 0
                          : r.textContent.trim()) && e.renderInline(r);
                      }),
                      e.write(" |"),
                      e.ensureNewLine(),
                      !o)
                    ) {
                      const n = Array.from({ length: t.childCount })
                        .map(() => "---")
                        .join(" | ");
                      e.write(`| ${n} |`), e.ensureNewLine();
                    }
                  }),
                  e.closeBlock(t),
                  (e.inTable = !1));
            },
            parse: {},
          },
        }),
      });
      function L(e) {
        return e.attrs.colspan > 1 || e.attrs.rowspan > 1;
      }
      var _ = n(731248),
        B = n(77427),
        $ = _.Z.extend({
          addKeyboardShortcuts: () => ({
            Enter: ({ editor: e }) => {
              const { state: t, commands: n } = e;
              return (
                !!(0, B.Tr)(t.schema.nodes.tableCell)(t.selection) &&
                (n.setHardBreak(), !0)
              );
            },
          }),
        }),
        Z = n(695674).Z.extend({
          addKeyboardShortcuts: () => ({
            Enter: ({ editor: e }) => {
              const { state: t, commands: n } = e;
              return (
                !!(0, B.Tr)(t.schema.nodes.tableHeader)(t.selection) &&
                (n.setHardBreak(), !0)
              );
            },
          }),
        }),
        H = n(227202),
        z = n(119773),
        F = n(465259),
        V = n(959394),
        W = F.Z.extend({
          addKeyboardShortcuts: () => ({
            Enter: ({ editor: e }) => {
              var t;
              const { state: n } = e,
                { $from: o, $to: r } = n.selection;
              e.commands.setMeta("key", "enter");
              const s =
                "paragraph" === o.parent.type.name &&
                0 === o.parent.content.size;
              if (
                [
                  n.schema.nodes.listItem,
                  n.schema.nodes.tableCell,
                  n.schema.nodes.tableHeader,
                  n.schema.nodes.blockquote,
                  n.schema.nodes.image,
                ].some((e) => (0, B.Tr)(e)(n.selection))
              )
                return !1;
              if ("doc" === o.node().type.name) return !1;
              const i = 0 === o.parentOffset,
                a = o.parentOffset === o.node().content.size,
                l = o.doc.nodeAt(r.pos + 1),
                c =
                  l &&
                  "paragraph" === l.type.name &&
                  0 === l.content.size &&
                  "paragraph" === o.parent.type.name &&
                  a,
                d = o.index(o.depth - 1),
                u = e.getJSON(),
                p =
                  d - 1 >= 0
                    ? null === (t = u.content) || void 0 === t
                      ? void 0
                      : t[d - 1]
                    : null,
                m =
                  "paragraph" ===
                    (null === p || void 0 === p ? void 0 : p.type) &&
                  !(null === p || void 0 === p ? void 0 : p.content) &&
                  i &&
                  "paragraph" === o.parent.type.name;
              return (
                !!(s || c || m) &&
                (e.commands.showWarning(
                  "Try to avoid extra blank lines, if necessary use Shift + Enter"
                ),
                !0)
              );
            },
          }),
          addStorage: () => ({
            markdown: { serialize: V.Dm.nodes.paragraph, parse: {} },
          }),
        });
      var U = n(252856).Z.extend({
          addStorage: () => ({
            markdown: {
              serialize(e, t) {
                var n, o;
                e.text(
                  null ===
                    (o = null !== (n = t.text) && void 0 !== n ? n : "") ||
                    void 0 === o
                    ? void 0
                    : o.replace(/</g, "<").replace(/>/g, ">")
                );
              },
              parse: {},
            },
          }),
        }),
        K = n(404598),
        J = n(361165),
        G = n(664098);
      var q = o.hj.create({
        name: "markdownExtensions",
        addOptions: () => ({
          enableMath: !1,
          boldToken: i.BoldToken.ASTERISK,
          italicToken: i.ItalicToken.ASTERISK,
          bulletListToken: i.BulletListToken.ASTERISK,
          mathToken: i.MathToken.DOLLARS,
        }),
        addStorage() {
          return {
            boldToken: this.options.boldToken,
            italicToken: this.options.italicToken,
            bulletListToken: this.options.bulletListToken,
            mathToken: this.options.mathToken,
          };
        },
        addExtensions() {
          return [
            z.U.configure({ breaks: !1 }),
            m,
            y,
            T.configure({ keepAttributes: !0 }),
            M,
            D,
            $,
            Z,
            H.Z,
            W,
            U,
            K.ZP.configure({ allowBase64: !0 }),
            J.ZP,
            ...(this.options.enableMath
              ? [
                  G.Z.configure({
                    allowedRules: [
                      i.MathToken.DOLLARS,
                      i.MathToken.BRACKETS,
                      i.MathToken.ESCAPED_BRACKETS,
                    ],
                  }),
                ]
              : []),
          ];
        },
      });
    },
    664098: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var o = n(53355),
        r = n(938910);
      const s = (e, t = !1, n) => {
          const o = n > 0 && e[n - 1].charCodeAt(0);
          return t ? !o || 32 === o : !o || (92 !== o && (o < 48 || o > 57));
        },
        i = (e, t = !1, n) => {
          const o = e[n + 1] && e[n + 1].charCodeAt(0);
          return t
            ? !o || 32 === o || 46 === o || 44 === o || 59 === o
            : !o || o < 48 || o > 57;
        },
        a =
          '<math-display class="math-node" open="$open" close="$close">$content</math-display>',
        l =
          '<math-inline class="math-node" open="$open" close="$close">$content</math-inline>',
        c = {
          [r.MathToken.BRACKETS]: {
            inline: [
              {
                name: "math_inline_block_bracket",
                rex: /\\\[([\s\S]+?)\\\]/gy,
                tmpl: a,
                tag: "\\[",
                closingTag: "\\]",
                displayMode: !0,
                pre: s,
                post: i,
              },
              {
                name: "math_inline_bracket",
                rex: /\\\((.+?)\\\)/gy,
                tmpl: l,
                tag: "\\(",
                closingTag: "\\)",
              },
            ],
            block: [
              {
                name: "math_block_bracket",
                rex: /\\\[([\s\S]+?)\\\]/gmy,
                tmpl: a,
                tag: "\\[",
                closingTag: "\\]",
              },
            ],
          },
          [r.MathToken.ESCAPED_BRACKETS]: {
            inline: [
              {
                name: "math_inline_block_escaped_bracket",
                rex: /\\\\\[([\s\S]+?)\\\\\]/gy,
                tmpl: a,
                tag: "\\\\[",
                closingTag: "\\\\]",
                displayMode: !0,
                pre: s,
                post: i,
              },
              {
                name: "math_inline_escaped_bracket",
                rex: /\\\\\((.+?)\\\\\)/gy,
                tmpl: l,
                tag: "\\\\(",
                closingTag: "\\\\)",
              },
            ],
            block: [
              {
                name: "math_block_escaped_bracket",
                rex: /\\\\\[([\s\S]+?)\\\\\]/gmy,
                tmpl: a,
                tag: "\\\\[",
                closingTag: "\\\\]",
              },
            ],
          },
          [r.MathToken.DOLLARS]: {
            inline: [
              {
                name: "math_inline_double_dollars",
                rex: /\${2}([^$]*?[^\\])\${2}/gy,
                tmpl: a,
                tag: "$$",
                closingTag: "$$",
                displayMode: !0,
                pre: s,
                post: i,
              },
              {
                name: "math_inline_dollars",
                rex: /\$((?:[^\s\\])|(?:\S.*?[^\s\\]))\$/gy,
                tmpl: l,
                tag: "$",
                closingTag: "$",
                outerSpace: !1,
                pre: s,
                post: i,
              },
            ],
            block: [
              {
                name: "math_block_dollars",
                rex: /\${2}([^$]*?[^\\])\${2}/gmy,
                tmpl: a,
                tag: "$$",
                closingTag: "$$",
              },
            ],
          },
          gitlab: {
            inline: [
              {
                name: "math_inline_gitlab",
                rex: /\$`(.+?)`\$/gy,
                tmpl: l,
                tag: "$`",
                closingTag: "`$",
              },
            ],
            block: [
              {
                name: "math_block_gitlab",
                rex: /`{3}math\s*([^`]*?)\s*`{3}/gm,
                tmpl: a,
                tag: "```math",
                closingTag: "```",
              },
            ],
          },
        };
      function d(e) {
        return "$$" === e ? "$$$$" : e;
      }
      const u = (e) =>
          function (t, n) {
            const o = t.pos,
              r = t.src,
              s =
                r.startsWith(e.tag, (e.rex.lastIndex = o)) &&
                (!e.pre ||
                  e.pre(
                    r,
                    null === e || void 0 === e ? void 0 : e.outerSpace,
                    o
                  )) &&
                e.rex.exec(r),
              i =
                !!s &&
                o < e.rex.lastIndex &&
                (!e.post ||
                  e.post(
                    r,
                    null === e || void 0 === e ? void 0 : e.outerSpace,
                    e.rex.lastIndex - 1
                  ));
            if (i) {
              if (!n) {
                const n = t.push(e.name, "math", 0);
                (n.content = s[1]), (n.markup = e.tag);
              }
              t.pos = e.rex.lastIndex;
            }
            return i;
          },
        p = (e) =>
          function (t, n, o, r) {
            const s = t.bMarks[n] + t.tShift[n],
              i = t.src,
              a =
                i.startsWith(e.tag, (e.rex.lastIndex = s)) &&
                (!e.pre || e.pre(i, !1, s)) &&
                e.rex.exec(i),
              l =
                !!a &&
                s < e.rex.lastIndex &&
                (!e.post || e.post(i, !1, e.rex.lastIndex - 1));
            if (l && !r) {
              const r = e.rex.lastIndex - 1;
              let s;
              for (
                s = n;
                s < o && !(r >= t.bMarks[s] + t.tShift[s] && r <= t.eMarks[s]);
                s++
              );
              const i = t.lineMax,
                l = t.parentType;
              (t.lineMax = s),
                (t.parentType = "math"),
                "blockquote" === l &&
                  (a[1] = a[1].replace(/(\n*?^(?:\s*>)+)/gm, ""));
              const c = t.push(e.name, "math", 0);
              (c.block = !0),
                (c.tag = e.tag),
                (c.markup = ""),
                (c.content = a[1]),
                (c.info = a[a.length - 1]),
                (c.map = [n, s + 1]),
                (t.parentType = l),
                (t.lineMax = i),
                (t.line = s + 1);
            }
            return l;
          };
      var m = function (e, t) {
          const n = (function (e = [r.MathToken.DOLLARS]) {
            const t = { inline: [], block: [] };
            for (const n of e)
              n in c &&
                (t.inline.push(...c[n].inline), t.block.push(...c[n].block));
            return t;
          })(null === t || void 0 === t ? void 0 : t.delimiters);
          var o;
          const s =
            null !== (o = null === t || void 0 === t ? void 0 : t.outerSpace) &&
            void 0 !== o &&
            o;
          var i;
          const a =
            null !== (i = null === t || void 0 === t ? void 0 : t.rules) &&
            void 0 !== i
              ? i
              : "all";
          if ("all" === a || "inline" === a)
            for (const r of n.inline)
              s && "outerSpace" in r && (r.outerSpace = !0),
                e.inline.ruler.before("escape", r.name, u(r)),
                (e.renderer.rules[r.name] = (e, t) =>
                  r.tmpl
                    .replace(/\$content/, e[t].content)
                    .replace(/\$open/, r.tag)
                    .replace(/\$close/, r.closingTag));
          if ("all" === a || "block" === a)
            for (const r of n.block)
              e.block.ruler.before("fence", r.name, p(r)),
                (e.renderer.rules[r.name] = (e, t) =>
                  r.tmpl
                    .replace(/\$content/, e[t].content)
                    .replace(/\$open/, d(r.tag))
                    .replace(/\$close/, d(r.closingTag)));
        },
        f = n(616711),
        h = n(8465),
        g = n(436927),
        b = n(555089),
        v = n(216228);
      function x(e, t, n, o = !0) {
        return (r, s) => {
          const i = e.state,
            { to: a, from: l } = i.selection,
            { to: c, from: d } = r.selection;
          if (o && c !== d) return !1;
          const u = t > 0 ? c : d;
          if (n) {
            const e = r.doc.nodeSize - 2;
            if (t > 0 && u < e) return !1;
            if (t < 0 && u > 0) return !1;
          }
          if (s) {
            const n = t > 0 ? a : l;
            e.dispatch(i.tr.setSelection(f.Bs.create(i.doc, n))), e.focus();
          }
          return !0;
        };
      }
      var y = n(515463);
      function w(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      class j {
        static getInstance() {
          return this.instance || (this.instance = new j()), this.instance;
        }
        add(e) {
          this.queue.push(e), this.isProcessing || this.processQueue();
        }
        processQueue() {
          var e,
            t = this;
          return ((e = function* () {
            if (0 === t.queue.length) return void (t.isProcessing = !1);
            t.isProcessing = !0;
            const e = t.queue.shift();
            e &&
              (e(),
              yield new Promise((e) => setTimeout(e, 0)),
              t.processQueue());
          }),
          function () {
            var t = this,
              n = arguments;
            return new Promise(function (o, r) {
              var s = e.apply(t, n);
              function i(e) {
                w(s, o, r, i, a, "next", e);
              }
              function a(e) {
                w(s, o, r, i, a, "throw", e);
              }
              i(void 0);
            });
          })();
        }
        constructor() {
          (this.queue = []), (this.isProcessing = !1);
        }
      }
      class k {
        destroy() {
          this.closeEditor(!1),
            this._mathRenderElt &&
              (this._mathRenderElt.remove(), delete this._mathRenderElt),
            this._mathSrcElt &&
              (this._mathSrcElt.remove(), delete this._mathSrcElt),
            this._observer.disconnect(),
            this.dom.remove();
        }
        ensureFocus() {
          this._innerView &&
            this._outerView.hasFocus() &&
            this._innerView.focus();
        }
        update(e) {
          if (!e.sameMarkup(this._node)) return !1;
          if (((this._node = e), this._innerView)) {
            const t = this._innerView.state,
              n = e.content.findDiffStart(t.doc.content);
            if (null != n) {
              const o = e.content.findDiffEnd(t.doc.content);
              if (o) {
                let { a: r, b: s } = o;
                const i = n - Math.min(r, s);
                i > 0 && ((r += i), (s += i)),
                  this._innerView.dispatch(
                    t.tr.replace(n, s, e.slice(n, r)).setMeta("fromOutside", !0)
                  );
              }
            }
          }
          return this._isEditing || this.renderMath(), !0;
        }
        selectNode() {
          this._outerView.editable &&
            (this.dom.classList.add("ProseMirror-selectednode"),
            this._isEditing || this.openEditor());
        }
        deselectNode() {
          this.dom.classList.remove("ProseMirror-selectednode"),
            this._isEditing && this.closeEditor();
        }
        stopEvent(e) {
          return (
            void 0 !== this._innerView &&
            void 0 !== e.target &&
            this._innerView.dom.contains(e.target)
          );
        }
        ignoreMutation() {
          return !0;
        }
        renderMath() {
          if (!this._mathRenderElt)
            return void console.warn(
              "[prosemirror-math] Cannot render math: render element is undefined"
            );
          if (!this._isIntersecting) return;
          const e = this._node.content.firstChild;
          let t = "";
          if ((null !== e && (t = e.textContent.trim()), t.length < 1))
            for (
              this.dom.classList.add("empty-math");
              this._mathRenderElt.firstChild;

            )
              this._mathRenderElt.firstChild.remove();
          else
            this.dom.classList.remove("empty-math"),
              j.getInstance().add(() => {
                if (this._mathRenderElt && this.dom)
                  try {
                    var e, n;
                    v.Z.render(t, this._mathRenderElt, this._katexOptions),
                      null === (e = this._mathRenderElt) ||
                        void 0 === e ||
                        e.classList.remove("parse-error"),
                      null === (n = this.dom) ||
                        void 0 === n ||
                        n.setAttribute("title", "");
                  } catch (s) {
                    var o, r;
                    console.error(s),
                      null === (o = this._mathRenderElt) ||
                        void 0 === o ||
                        o.classList.add("parse-error"),
                      null === (r = this.dom) ||
                        void 0 === r ||
                        r.setAttribute("title", s.toString());
                  }
                else
                  console.warn(
                    "[prosemirror-math] Cannot render math: elements no longer exist"
                  );
              });
        }
        dispatchInner(e) {
          if (!this._innerView) return;
          const { state: t, transactions: n } =
            this._innerView.state.applyTransaction(e);
          if ((this._innerView.updateState(t), !e.getMeta("fromOutside"))) {
            const e = this._outerView.state.tr,
              t = h.KS.offset(this._getPos() + 1);
            for (let o = 0; o < n.length; o++) {
              const r = n[o].steps;
              for (let n = 0; n < r.length; n++) {
                const o = r[n].map(t);
                if (!o) throw Error("step discarded!");
                e.step(o);
              }
            }
            e.docChanged && this._outerView.dispatch(e);
          }
        }
        openEditor() {
          var e;
          if (this._innerView)
            return void console.warn(
              "[prosemirror-math] editor already open when openEditor was called"
            );
          this._innerView = new y.tk(this._mathSrcElt, {
            state: f.yy.create({
              doc: this._node,
              plugins: [
                (0, g.h)({
                  Tab: (e, t) => (t && t(e.tr.insertText("\t")), !0),
                  Backspace: (0, b.QF)(
                    b.NE,
                    (e) =>
                      !!e.selection.empty &&
                      !(this._node.textContent.length > 0) &&
                      (this._outerView.dispatch(
                        this._outerView.state.tr.insertText("")
                      ),
                      this._outerView.focus(),
                      !0)
                  ),
                  "Ctrl-Backspace": () => (
                    this._outerView.dispatch(
                      this._outerView.state.tr.insertText("")
                    ),
                    this._outerView.focus(),
                    !0
                  ),
                  Enter: (0, b.QF)(b.QK, x(this._outerView, 1, !1)),
                  "Ctrl-Enter": x(this._outerView, 1, !1),
                  ArrowLeft: x(this._outerView, -1, !0),
                  ArrowRight: x(this._outerView, 1, !0),
                  ArrowUp: x(this._outerView, -1, !0),
                  ArrowDown: x(this._outerView, 1, !0),
                }),
              ],
            }),
            dispatchTransaction: this.dispatchInner.bind(this),
          });
          const t = this._innerView.state;
          this._innerView.focus();
          const n =
            null ===
              (e = this._mathPluginKey.getState(this._outerView.state)) ||
            void 0 === e
              ? void 0
              : e.prevCursorPos;
          (null !== n && void 0 !== n) ||
            console.error(
              "[prosemirror-math] Error:  Unable to fetch math plugin state from key."
            );
          const o =
            (null !== n && void 0 !== n ? n : 0) <= this._getPos()
              ? 0
              : this._node.nodeSize - 2;
          this._innerView.dispatch(t.tr.setSelection(f.Bs.create(t.doc, o))),
            (this._isEditing = !0);
        }
        closeEditor(e = !0) {
          this._innerView &&
            (this._innerView.destroy(), (this._innerView = void 0)),
            e && this._isIntersecting && this.renderMath(),
            (this._isEditing = !1);
        }
        constructor(e, t, n, o = {}, r) {
          (this._isIntersecting = !1),
            (this._node = e),
            (this._outerView = t),
            (this._getPos = n),
            (this._mathPluginKey = r),
            (this._isEditing = !1),
            (this._katexOptions = Object.assign(
              { globalGroup: !0, throwOnError: !1 },
              o.katexOptions
            )),
            (this._tagName =
              o.tagName || this._node.type.name.replace("_", "-")),
            (this.dom = document.createElement(this._tagName)),
            this.dom.classList.add("math-node"),
            this.dom.setAttribute("open", this._node.attrs.open),
            this.dom.setAttribute("close", this._node.attrs.close),
            (this._mathRenderElt = document.createElement("span")),
            (this._mathRenderElt.textContent = ""),
            this._mathRenderElt.classList.add("math-render"),
            this.dom.appendChild(this._mathRenderElt),
            (this._mathSrcElt = document.createElement("span")),
            this._mathSrcElt.classList.add("math-src"),
            (this._mathSrcElt.spellcheck = !1),
            this.dom.appendChild(this._mathSrcElt),
            this.dom.addEventListener("click", () => this.ensureFocus()),
            (this._observer = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  (this._isIntersecting = e.isIntersecting),
                    e.isIntersecting && !this._isEditing && this.renderMath();
                });
              },
              { root: null, rootMargin: "50px", threshold: 0 }
            )),
            this._observer.observe(this.dom),
            this.renderMath();
        }
      }
      const C = new f.H$("prosemirror-math");
      function S(e) {
        return (t, n, o) => {
          const r = C.getState(n.state);
          if (!r) throw new Error("no math plugin!");
          return new k(
            t,
            n,
            o,
            { katexOptions: { displayMode: e, macros: r.macros } },
            C
          );
        };
      }
      const T = new f.Sy({
          key: C,
          state: {
            init: () => ({ macros: {}, prevCursorPos: 0 }),
            apply: (e, t, n) => ({
              macros: t.macros,
              prevCursorPos: n.selection.from,
            }),
          },
        }),
        N = /^\$\$?[\s\n]$/,
        O = /(?<!\\)\\\[[\s\n]$/,
        E = /\\\\\[[\s\n]$/;
      function P(e) {
        return new o.VK({
          find: e.find,
          handler: ({ state: t, range: n, match: r }) => {
            const s = (0, o.nU)(e.getAttributes, void 0, r) || {},
              { tr: i } = t,
              a = n.from;
            let l = n.to;
            const c = e.type.create(s);
            if (r[1]) {
              let e = a + r[0].lastIndexOf(r[1]);
              e > l ? (e = l) : (l = e + r[1].length);
              const t = r[0][r[0].length - 1];
              i.insertText(t, a + r[0].length - 1),
                i.replaceWith(e, l, c),
                (c.isTextblock || c.isInline) &&
                  i.setSelection(f.Bs.create(i.doc, e));
            } else if (r[0]) {
              const t = e.type.isInline ? a : a - 1,
                n = e.type.create(s);
              i.insert(t, n).delete(i.mapping.map(a), i.mapping.map(l)),
                (n.isTextblock || n.isInline) &&
                  i.setSelection(f.Bs.create(i.doc, t));
            }
            i.scrollIntoView();
          },
        });
      }
      var M = o.NB.create({
        name: "math_display",
        group: "block math",
        content: "text*",
        atom: !0,
        code: !0,
        addOptions: () => ({ allowedRules: [r.MathToken.DOLLARS] }),
        addStorage: () => ({
          markdown: {
            serialize(e, t) {
              e.text(`${t.attrs.open}`, !1),
                e.text(`${t.textContent}`, !1),
                e.text(`${t.attrs.close}`, !1),
                e.ensureNewLine();
            },
            parse: {
              setup(e) {
                const t = this.options.allowedRules;
                e.use(m, { delimiters: t, rules: "block" });
              },
            },
          },
        }),
        addAttributes: () => ({
          open: { default: "$$", renderHTML: (e) => ({ open: e.open }) },
          close: { default: "$$", renderHTML: (e) => ({ close: e.close }) },
        }),
        parseHTML: () => [{ tag: "math-display" }],
        renderHTML: ({ HTMLAttributes: e }) => [
          "math-display",
          (0, o.P1)(e, { class: "math-node" }),
          0,
        ],
        addInputRules() {
          const e = this.options.allowedRules,
            t = {
              [r.MathToken.DOLLARS]: P({
                find: N,
                type: this.type,
                getAttributes: { open: "$$", close: "$$" },
              }),
              [r.MathToken.ESCAPED_BRACKETS]: P({
                find: E,
                type: this.type,
                getAttributes: { open: "\\\\[", close: "\\\\]" },
              }),
              [r.MathToken.BRACKETS]: P({
                find: O,
                type: this.type,
                getAttributes: { open: "\\[", close: "\\]" },
              }),
              gitlab: P({
                find: /```math(.+)```/,
                type: this.type,
                getAttributes: { open: "```math", close: "```" },
              }),
            };
          return e.map((e) => t[e]);
        },
        addCommands() {
          return {
            setFormulaBlock:
              (e) =>
              ({ commands: t }) =>
                t.setNode(this.name, e),
            toggleFormulaBlock:
              () =>
              ({ commands: e }) => {
                var t;
                const n =
                  null !==
                    (t = this.editor.storage.markdownExtensions.mathToken) &&
                  void 0 !== t
                    ? t
                    : r.MathToken.DOLLARS;
                return e.toggleNode(
                  this.name,
                  "paragraph",
                  (function (e) {
                    switch (e) {
                      case r.MathToken.DOLLARS:
                        return { open: "$$", close: "$$" };
                      case r.MathToken.BRACKETS:
                        return { open: "\\[", close: "\\]" };
                      case r.MathToken.ESCAPED_BRACKETS:
                        return { open: "\\\\[", close: "\\\\]" };
                    }
                  })(n)
                );
              },
            unsetFormulaBlock:
              () =>
              ({ commands: e }) =>
                e.unsetMark(this.name),
          };
        },
        addNodeView() {
          return ({ node: e, getPos: t }) => S(!0)(e, this.editor.view, t);
        },
      });
      var R = o.NB.create({
        name: "math_inline",
        group: "inline math",
        content: "text*",
        inline: !0,
        atom: !0,
        addOptions: () => ({ allowedRules: [r.MathToken.DOLLARS] }),
        addStorage: () => ({
          markdown: {
            serialize(e, t) {
              e.text(`${t.attrs.open}${t.textContent}${t.attrs.close}`, !1);
            },
            parse: {
              setup(e) {
                const t = this.options.allowedRules;
                e.use(m, { delimiters: t, rules: "inline" });
              },
            },
          },
        }),
        parseHTML: () => [
          {
            tag: "math-inline",
            getAttrs: (e) => ({
              open: e.getAttribute("open") || "$",
              close: e.getAttribute("close") || "$",
            }),
          },
        ],
        addAttributes: () => ({
          open: { default: "$", renderHTML: (e) => ({ open: e.open }) },
          close: { default: "$", renderHTML: (e) => ({ close: e.close }) },
        }),
        renderHTML: ({ HTMLAttributes: e }) => [
          "math-inline",
          (0, o.P1)({ class: "math-node" }, e),
          0,
        ],
        addProseMirrorPlugins: () => [T],
        addNodeView() {
          return ({ node: e, getPos: t }) => S(!1)(e, this.editor.view, t);
        },
        addInputRules() {
          const e = (e, t, n, r, s) => {
              const i = { open: r, close: s },
                a = this.type,
                l = t.from,
                c = t.to,
                d = e.doc.resolve(l),
                u = d.index(),
                p = e.doc.resolve(c),
                m = (0, o.nU)(i, void 0, n) || {};
              if (!d.parent.canReplaceWith(u, p.index(), a)) return null;
              e.tr.replaceRangeWith(l, c, a.create(m, a.schema.text(n[1])));
            },
            t = this.options.allowedRules,
            n = {
              [r.MathToken.DOLLARS]: new o.VK({
                find: /\$(.+)\$/,
                handler: ({ state: t, range: n, match: o }) => {
                  e(t, n, o, "$", "$");
                },
              }),
              [r.MathToken.ESCAPED_BRACKETS]: new o.VK({
                find: /\\\\\((.+)\\\\\)/,
                handler: ({ state: t, range: n, match: o }) => {
                  e(t, n, o, "\\\\(", "\\\\)");
                },
              }),
              [r.MathToken.BRACKETS]: new o.VK({
                find: /(?<!\\)\\\((.+?)\\\)/,
                handler: ({ state: t, range: n, match: o }) => {
                  e(t, n, o, "\\(", "\\)");
                },
              }),
              gitlab: new o.VK({
                find: /\$`(.+)`\$/,
                handler: ({ state: t, range: n, match: o }) => {
                  e(t, n, o, "$`", "`$");
                },
              }),
            };
          return t.map((e) => n[e]);
        },
        addCommands() {
          return {
            setFormulaMark:
              (e) =>
              ({ commands: t }) =>
                t.setMark(this.name, e),
            toggleFormulaMark:
              () =>
              ({ state: e, dispatch: t }) => {
                const { selection: n } = e,
                  { from: o, to: s } = n;
                var i;
                const a = (function (e) {
                  switch (e) {
                    case r.MathToken.DOLLARS:
                      return { open: "$", close: "$" };
                    case r.MathToken.BRACKETS:
                      return { open: "\\(", close: "\\)" };
                    case r.MathToken.ESCAPED_BRACKETS:
                      return { open: "\\\\(", close: "\\\\)" };
                  }
                })(
                  null !==
                    (i = this.editor.storage.markdownExtensions.mathToken) &&
                    void 0 !== i
                    ? i
                    : r.MathToken.DOLLARS
                );
                let l = !1,
                  c = null;
                if (
                  (e.doc.nodesBetween(o, s, (e, t) => {
                    e.type === this.type && ((l = !0), (c = t));
                  }),
                  l && null !== c)
                ) {
                  if (t) {
                    const n = e.tr,
                      o = e.doc.nodeAt(c);
                    if (o) {
                      const t = e.schema.text(
                        (function (e) {
                          let t = "";
                          return (
                            e.forEach((e) => {
                              e.isText
                                ? (t += e.text)
                                : e.isLeaf && (t += e.textContent);
                            }),
                            t
                          );
                        })(o.content)
                      );
                      n.replaceRangeWith(c, c + o.nodeSize, t);
                    }
                    t(n);
                  }
                  return !0;
                }
                if (t) {
                  const { tr: n } = e,
                    r = e.doc.slice(o, s).content,
                    i = this.type.create(a, r);
                  n.replaceRangeWith(o, s, i),
                    n.setSelection(f.Bs.create(n.doc, o + 1, o + 1)),
                    t(n);
                }
                return !0;
              },
            unsetFormulaMark:
              () =>
              ({ commands: e }) =>
                e.unsetMark(this.name),
          };
        },
      });
      var I = o.hj.create({
        name: "MathExtensions",
        addOptions: () => ({ allowedRules: [r.MathToken.DOLLARS] }),
        addExtensions() {
          return [
            M.configure({ allowedRules: this.options.allowedRules }),
            R.configure({ allowedRules: this.options.allowedRules }),
          ];
        },
      });
    },
    189058: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return i;
        },
      });
      var o = n(600787);
      function r(e, t, n) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              r(e, t, n[t]);
            });
        }
        return e;
      }
      function i(e) {
        return new RegExp(
          "(?:^|\\s)(" + e + "(\\w+(?:\\s\\w+)?))(?:[.!?:;\\s]|$)",
          "g"
        );
      }
      t.Z = o.ZP.extend({
        addOptions() {
          var e;
          return s(
            {},
            null === (e = this.parent) || void 0 === e ? void 0 : e.call(this),
            { char: "@", items: [], parseKnownOnly: !0 }
          );
        },
        addStorage() {
          var e;
          return s(
            {},
            null === (e = this.parent) || void 0 === e ? void 0 : e.call(this),
            {
              mention: {
                char: this.options.char,
                items: this.options.items,
                parseKnownOnly: this.options.parseKnownOnly,
              },
              markdown: {
                serialize(e, t) {
                  var n;
                  e.text(
                    `${this.options.suggestion.char}${
                      null !== (n = t.attrs.label) && void 0 !== n
                        ? n
                        : t.attrs.id
                    }`
                  );
                },
                parse: {
                  setup(e) {
                    const t = this.options.HTMLAttributes.class,
                      n = this.options.suggestion.char,
                      o = this.options.parseKnownOnly;
                    e.use((e) => {
                      (e.renderer.rules.mention = (e, o) =>
                        `<span class="${t}" data-type="mention" data-id="${e[o].content}">${n}${e[o].content}</span>`),
                        e.core.ruler.after("inline", "mention", (e) => {
                          const t = i(n);
                          e.tokens.forEach((e) => {
                            if ("inline" !== e.type) return;
                            const { children: r } = e;
                            var s;
                            const i =
                              null !==
                                (s =
                                  null === r || void 0 === r
                                    ? void 0
                                    : r.flatMap((e) => {
                                        if ("text" !== e.type) return [e];
                                        const r = [...e.content.matchAll(t)];
                                        if (!r.length) return [e];
                                        let s = 0;
                                        const i = [];
                                        for (const t of r) {
                                          const r =
                                              t.index +
                                              (t[0].startsWith(" ") ? 1 : 0),
                                            a = t.index + t[0].length;
                                          if (
                                            (r > s &&
                                              i.push(
                                                Object.assign({}, e, {
                                                  type: "text",
                                                  content: e.content.substring(
                                                    s,
                                                    r
                                                  ),
                                                })
                                              ),
                                            o)
                                          ) {
                                            const o = this.options.items.find(
                                              (e) =>
                                                t[2].startsWith(e.id) ||
                                                t[2].startsWith(e.label)
                                            );
                                            if (o) {
                                              i.push(
                                                Object.assign({}, e, {
                                                  type: "mention",
                                                  content:
                                                    null === o || void 0 === o
                                                      ? void 0
                                                      : o.label,
                                                })
                                              );
                                              const r = t[0]
                                                .trim()
                                                .replace(n, "")
                                                .replace(o.label, "");
                                              r.length &&
                                                i.push(
                                                  Object.assign({}, e, {
                                                    type: "text",
                                                    content: r,
                                                  })
                                                );
                                            } else
                                              i.push(
                                                Object.assign({}, e, {
                                                  type: "text",
                                                  content: t[1],
                                                })
                                              );
                                            t[0].endsWith(" ") &&
                                              i.push(
                                                Object.assign({}, e, {
                                                  type: "text",
                                                  content: " ",
                                                })
                                              );
                                          } else
                                            i.push(
                                              Object.assign({}, e, {
                                                type: "mention",
                                                content: t[2].trim(),
                                              })
                                            );
                                          s = a;
                                        }
                                        return (
                                          s < e.content.length &&
                                            i.push(
                                              Object.assign({}, e, {
                                                type: "text",
                                                content: e.content.substring(s),
                                              })
                                            ),
                                          i
                                        );
                                      })) && void 0 !== s
                                ? s
                                : [];
                            e.children = i;
                          });
                        });
                    });
                  },
                },
              },
            }
          );
        },
      });
    },
    983876: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var o = n(824246),
        r = n(233979);
      function s({ enableMath: e = !1 }) {
        return (0, o.jsxs)(r.qJ, {
          children: [
            (0, o.jsx)(r.h6, {}),
            (0, o.jsx)(r.JH, {}),
            (0, o.jsx)(r.n3, {}),
            (0, o.jsx)(r.BI, {}),
            (0, o.jsx)(r.o0, {}),
            (0, o.jsx)(r.bt, {}),
            (0, o.jsx)(r.pu, {}),
            (0, o.jsx)(r.cU, {}),
            (0, o.jsx)(r.nk, {}),
            (0, o.jsx)(r.Px, {}),
            (0, o.jsx)(r.zI, {}),
            (0, o.jsx)(r.Ou, {}),
            e &&
              (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(r.tJ, {}), (0, o.jsx)(r.Rq, {})],
              }),
          ],
        });
      }
    },
    634954: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return l;
        },
      });
      var o = n(824246),
        r = n(713222),
        s = n(855549),
        i = n(827378),
        a = n(128157);
      function l() {
        const { editor: e } = (0, s.fi)(),
          { 0: t, 1: n } = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          if (e)
            return (
              e.on("transaction", t),
              () => {
                e.off("transaction", t);
              }
            );
          function t(e) {
            const t = e.transaction.getMeta(a.j.ENABLED_CHANGE);
            void 0 !== t && n(t);
          }
        }, [e]);
        const l = (0, i.useCallback)(() => {
          e &&
            (e.state.selection.empty ||
              e
                .chain()
                .focus()
                .setCopilotSelection({
                  empty: !1,
                  from: e.state.selection.from,
                  to: e.state.selection.to,
                  text: e.state.doc.content.textBetween(
                    e.state.selection.from,
                    e.state.selection.to
                  ),
                })
                .setCopilotOpen(!0)
                .run());
        }, [e]);
        return e && t
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(r.J, {
                tooltip: "Fact Checker",
                tooltipProps: { delayDuration: 0 },
                onClick: l,
                icon: "magnifying-glass",
                size: "sm",
              }),
            })
          : null;
      }
    },
    233979: function (e, t, n) {
      "use strict";
      n.d(t, {
        n3: function () {
          return u;
        },
        Ou: function () {
          return b;
        },
        tJ: function () {
          return j;
        },
        Rq: function () {
          return k;
        },
        bt: function () {
          return f;
        },
        BI: function () {
          return p;
        },
        yD: function () {
          return N;
        },
        pu: function () {
          return g;
        },
        Tg: function () {
          return E;
        },
        nk: function () {
          return v;
        },
        JH: function () {
          return c;
        },
        o0: function () {
          return m;
        },
        Px: function () {
          return y;
        },
        zI: function () {
          return w;
        },
        qJ: function () {
          return r;
        },
        h6: function () {
          return l;
        },
        cU: function () {
          return h;
        },
      });
      var o = n(824246);
      const r = ({ children: e }) =>
        (0, o.jsx)("div", {
          className:
            "flex border-solid border-neutral-300 border-b-[1px] bg-neutral-100 rounded-t-md overflow-x-auto",
          children: e,
        });
      var s = n(713222),
        i = n(855549),
        a = n(643672);
      function l() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Undo",
                tooltipProps: { delayDuration: 0 },
                onClick: () => e.chain().focus().undo().run(),
                icon: "undo",
                size: "sm",
                disabled: !e.can().undo() || !t,
              }),
            })
          : null;
      }
      function c() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Redo",
                tooltipProps: { delayDuration: 0 },
                onClick: () => e.chain().focus().redo().run(),
                icon: "redo",
                size: "sm",
                disabled: !e.can().redo() || !t,
              }),
            })
          : null;
      }
      function d({ type: e, icon: t, onToggle: n }) {
        const { editor: r } = (0, i.fi)(),
          l = (0, a.Z)();
        return r
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: e,
                tooltipProps: { delayDuration: 0 },
                selected: r.isActive(e),
                onClick: () => n(r),
                disabled: !l,
                icon: t,
                size: "sm",
              }),
            })
          : null;
      }
      const u = () =>
          (0, o.jsx)(d, {
            type: "bold",
            icon: "bold",
            onToggle: (e) =>
              e.chain().focus().toggleBoldWithDefaultToken().run(),
          }),
        p = () =>
          (0, o.jsx)(d, {
            type: "italic",
            icon: "italic",
            onToggle: (e) =>
              e.chain().focus().toggleItalicWithDefaultToken().run(),
          }),
        m = () =>
          (0, o.jsx)(d, {
            type: "strike",
            icon: "strikethrough",
            onToggle: (e) => e.chain().focus().toggleStrike().run(),
          }),
        f = () =>
          (0, o.jsx)(d, {
            type: "code",
            icon: "code-simple",
            onToggle: (e) => e.chain().focus().toggleCode().run(),
          });
      function h() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Unordered List",
                tooltipProps: { delayDuration: 0 },
                onClick: () =>
                  e.chain().focus().toggleBulletListWithDefaultToken().run(),
                icon: "list-ul",
                size: "sm",
                selected: e.isActive("bulletList"),
                disabled: !t,
              }),
            })
          : null;
      }
      function g() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Ordered List",
                tooltipProps: { delayDuration: 0 },
                onClick: () => e.chain().focus().toggleOrderedList().run(),
                icon: "list-ol",
                size: "sm",
                selected: e.isActive("orderedList"),
                disabled: !t,
              }),
            })
          : null;
      }
      function b() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Code Block",
                tooltipProps: { delayDuration: 0 },
                onClick: () => e.chain().focus().toggleCodeBlock().run(),
                icon: "code",
                size: "sm",
                selected: e.isActive("codeBlock"),
                disabled: !t,
              }),
            })
          : null;
      }
      function v() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Quote",
                tooltipProps: { delayDuration: 0 },
                onClick: () => e.chain().focus().toggleBlockquote().run(),
                icon: "quote-left",
                size: "sm",
                selected: e.isActive("blockquote"),
                disabled: !t,
              }),
            })
          : null;
      }
      var x = n(827378);
      function y() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return !e || (null === e || void 0 === e ? void 0 : e.isActive("table"))
          ? null
          : (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Insert Table",
                tooltipProps: { delayDuration: 0 },
                onClick: () =>
                  e
                    .chain()
                    .focus()
                    .insertTable({ rows: 3, cols: 3, withHeaderRow: !0 })
                    .run(),
                icon: "table",
                size: "sm",
                disabled: !t,
              }),
            });
      }
      function w() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)(),
          n = (0, x.useCallback)(() => {
            e &&
              (e.isActive("tableHeader")
                ? e.chain().focus().deleteRow().toggleHeaderRow().run()
                : e.chain().focus().deleteRow().run());
          }, [e]),
          r = (0, x.useCallback)(() => {
            e &&
              (e.isActive("tableHeader")
                ? e
                    .chain()
                    .toggleHeaderRow()
                    .addRowBefore()
                    .command(({ tr: t, chain: n }) => {
                      if (e.isActive("table")) {
                        const { anchor: e } = t.selection;
                        let o = 0;
                        return (
                          t.doc.descendants((t, n) => {
                            "table" === t.type.name &&
                              e >= n &&
                              e <= n + t.nodeSize &&
                              (o = n);
                          }),
                          n()
                            .focus(o + 2)
                            .toggleHeaderRow(),
                          !0
                        );
                      }
                      return !1;
                    })
                    .run()
                : e.chain().focus().addRowBefore().run());
          }, [e]);
        return e && t && e.isActive("table")
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)("div", {
                  className: "inline-block w-0.5 self-stretch bg-neutral-200",
                }),
                (0, o.jsx)("div", {
                  className: "p-2 text-xs flex items-center",
                  children: "Table:",
                }),
                (0, o.jsx)("div", {
                  className: "p-2",
                  children: (0, o.jsx)(s.J, {
                    tooltip: "Delete Table",
                    tooltipProps: { delayDuration: 0 },
                    onClick: () => e.chain().focus().deleteTable().run(),
                    icon: "times",
                    size: "sm",
                    disabled: !t,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "p-2",
                  children: (0, o.jsx)(s.J, {
                    tooltip: "Add row before",
                    tooltipProps: { delayDuration: 0 },
                    onClick: r,
                    icon: "diagram-previous",
                    size: "sm",
                    disabled: !t,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "p-2",
                  children: (0, o.jsx)(s.J, {
                    tooltip: "Add row after",
                    tooltipProps: { delayDuration: 0 },
                    onClick: () => e.chain().focus().addRowAfter().run(),
                    icon: "diagram-next",
                    size: "sm",
                    disabled: !t,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "p-2",
                  children: (0, o.jsx)(s.J, {
                    tooltip: "Delete row",
                    tooltipProps: { delayDuration: 0 },
                    onClick: n,
                    icon: "diagram-cells",
                    size: "sm",
                    disabled: !t,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "p-2",
                  children: (0, o.jsx)(s.J, {
                    tooltip: "Add column before",
                    tooltipProps: { delayDuration: 0 },
                    onClick: () => e.chain().focus().addColumnBefore().run(),
                    icon: "border-left",
                    size: "sm",
                    disabled: !t,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "p-2",
                  children: (0, o.jsx)(s.J, {
                    tooltip: "Add column after",
                    tooltipProps: { delayDuration: 0 },
                    onClick: () => e.chain().focus().addColumnAfter().run(),
                    icon: "border-right",
                    size: "sm",
                    disabled: !t,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "p-2",
                  children: (0, o.jsx)(s.J, {
                    tooltip: "Delete column",
                    tooltipProps: { delayDuration: 0 },
                    onClick: () => e.chain().focus().deleteColumn().run(),
                    icon: "border-none",
                    size: "sm",
                    disabled: !t,
                  }),
                }),
                (0, o.jsx)("div", {
                  className: "inline-block w-0.5 self-stretch bg-neutral-200",
                }),
              ],
            })
          : null;
      }
      function j() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Formula Block",
                tooltipProps: { delayDuration: 0 },
                onClick: () => e.chain().focus().toggleFormulaBlock().run(),
                icon: "square-root-variable",
                size: "sm",
                selected: e.isActive("math_display"),
                disabled: !t,
              }),
            })
          : null;
      }
      function k() {
        const { editor: e } = (0, i.fi)(),
          t = (0, a.Z)();
        return e
          ? (0, o.jsx)("div", {
              className: "p-2",
              children: (0, o.jsx)(s.J, {
                tooltip: "Inline Formula",
                tooltipProps: { delayDuration: 0 },
                onClick: () => e.chain().focus().toggleFormulaMark().run(),
                icon: "less-than-equal",
                size: "sm",
                selected: e.isActive("math_inline"),
                disabled: !t,
              }),
            })
          : null;
      }
      var C = n(822933),
        S = n(634954);
      function T({ enableMath: e = !1 }) {
        const { editor: t } = (0, i.fi)();
        return t
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(C.Z, {
                  name: "ReadOnlyFloatingMenu",
                  shouldShow: ({ editor: e }) =>
                    !e.isEditable && !e.state.selection.empty,
                  children: (0, o.jsx)(S.k, {}),
                }),
                (0, o.jsxs)(C.Z, {
                  name: "EditableFloatingMenu",
                  shouldShow: ({ editor: e }) =>
                    e.isEditable && !e.state.selection.empty,
                  children: [
                    (0, o.jsx)(u, {}),
                    (0, o.jsx)(p, {}),
                    (0, o.jsx)(m, {}),
                    (0, o.jsx)(f, {}),
                    e && (0, o.jsx)(k, {}),
                    (0, o.jsx)(S.k, {}),
                  ],
                }),
              ],
            })
          : null;
      }
      var N = (0, x.memo)(T);
      function O() {
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)(C.Z, {
            name: "PlaintextFloatingMenu",
            shouldShow: ({ editor: e }) => !e.state.selection.empty,
            children: (0, o.jsx)(S.k, {}),
          }),
        });
      }
      var E = (0, x.memo)(O);
      n(983876);
    },
    822933: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var o = n(824246),
        r = n(855549);
      function s({ name: e = "FloatingMenu", shouldShow: t, children: n }) {
        const { editor: s } = (0, r.fi)();
        return s
          ? (0, o.jsx)(r.NM, {
              pluginKey: e,
              shouldShow: t,
              editor: s,
              tippyOptions: { duration: 100 },
              children: (0, o.jsx)("div", {
                className:
                  "flex border-solid border-neutral-300 border bg-neutral-100 rounded-md shadow",
                children: n,
              }),
            })
          : null;
      }
    },
    526604: function (e, t, n) {
      "use strict";
      var o = n(824246),
        r = n(827378),
        s = n(400507),
        i = n(722030),
        a = n(219502),
        l = n(257881),
        c = n(456552),
        d = n(693865),
        u = n(534522),
        p = n(232095),
        m = n(855549),
        f = n(276281),
        h = n(358720),
        g = n(128157);
      function b(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              v(e, t, n[t]);
            });
        }
        return e;
      }
      const y = ({ enabled: e = !1, anchorRef: t, isLeftPosition: n = !1 }) => {
        const { editor: v } = (0, m.fi)(),
          { 0: y, 1: w } = (0, r.useState)(!1),
          { 0: j, 1: k } = (0, r.useState)({
            from: 0,
            to: 0,
            empty: !0,
            text: void 0,
          });
        (0, r.useEffect)(() => {
          v && (null === v || void 0 === v || v.commands.setCopilotEnabled(e));
        }, [v, e]),
          (0, r.useEffect)(() => {
            if (v)
              return (
                v.on("transaction", e),
                () => {
                  v.off("transaction", e);
                }
              );
            function e(e) {
              const t = e.transaction.getMeta(g.j.OPEN_CHANGE),
                n = e.transaction.getMeta(g.j.SELECTED_CHANGE);
              void 0 !== t && w(t), void 0 !== n && k(n);
            }
          }, [v]);
        const C = (0, d.Z)(j.text, 400),
          [S, T] = r.useState({}),
          N = [
            ...(0, h.Xn)(p.InteractionStepType.PromptInput),
            ...(0, h.Xn)(p.InteractionStepType.MultiTurnContinue),
          ].flatMap((e) => e.context.referenceTexts || []),
          { 0: O, 1: E } = (0, r.useState)(null),
          P = (0, r.useContext)(u.p),
          [M, R] = r.useState(0),
          {
            data: I,
            error: A,
            isLoading: D,
          } = (0, c.useQuery)({
            queryFn:
              ((L = function* () {
                return !C || C.length <= 15
                  ? Promise.resolve({ results: [], inferenceId: "" })
                  : l.Z.genai.fetchReviewerCopilotInference({
                      content: C,
                      taskId: P.taskId,
                      projectId: P.projectId,
                      assignmentId: P.assignmentId,
                      referenceTexts: N,
                    });
              }),
              function () {
                var e = this,
                  t = arguments;
                return new Promise(function (n, o) {
                  var r = L.apply(e, t);
                  function s(e) {
                    b(r, n, o, s, i, "next", e);
                  }
                  function i(e) {
                    b(r, n, o, s, i, "throw", e);
                  }
                  s(void 0);
                });
              }),
            queryKey: [open, C],
            staleTime: 1 / 0,
            enabled: e && y,
          });
        var L;
        (0, r.useEffect)(() => {
          R(0),
            T({}),
            C ||
              (w(!1),
              null === v || void 0 === v || v.commands.setCopilotOpen(!1));
        }, [v, C]);
        const _ = (0, r.useCallback)(() => {
            v && v.commands.setCopilotOpen(!1);
          }, [v]),
          B =
            j && v && j.from >= 0 && j.from <= v.view.state.doc.content.size
              ? v.view.coordsAtPos(j.from)
              : void 0,
          $ =
            B && t.current ? B.top - t.current.getBoundingClientRect().top : 0,
          { styles: Z, attributes: H } = (0, f.D)(t.current, O, {
            placement: n ? "left-start" : "right-start",
            modifiers: [
              { name: "offset", options: { offset: [$, 28] } },
              { name: "preventOverflow", options: { mainAxis: !1 } },
            ],
          });
        return !A && v && e && y
          ? (0, o.jsx)(
              "div",
              x({ ref: E, style: Z.popper }, H.popper, {
                className: "z-30 flex",
                children: (0, o.jsxs)(a.p, {
                  className: "w-80",
                  children: [
                    (0, o.jsxs)(a.p.Header, {
                      className: "px-3 border-b border-neutral-200",
                      children: [
                        (0, o.jsx)(a.p.HeaderLeft, {
                          children: (0, o.jsx)(a.p.Subtitle, {
                            children: "Fact Checker",
                          }),
                        }),
                        (0, o.jsxs)(a.p.HeaderRight, {
                          className: "gap-1 flex flex-row justify-start",
                          children: [
                            (null === I || void 0 === I ? void 0 : I.results) &&
                              I.results.length > 1 &&
                              (0, o.jsxs)(o.Fragment, {
                                children: [
                                  (0, o.jsx)(a.p.Button, {
                                    icon: "chevron-left",
                                    onClick: () => {
                                      M > 0 && R(M - 1);
                                    },
                                    disabled: 0 === M,
                                  }),
                                  (0, o.jsx)(a.p.Button, {
                                    icon: "chevron-right",
                                    onClick: () => {
                                      (null === I || void 0 === I
                                        ? void 0
                                        : I.results) &&
                                        I.results.length &&
                                        M < I.results.length - 1 &&
                                        R(M + 1);
                                    },
                                    disabled: M === I.results.length - 1,
                                  }),
                                ],
                              }),
                            (0, o.jsx)(a.p.Button, {
                              icon: "times",
                              onClick: _,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsxs)(a.p.Body, {
                      className: "border-t-0 mb-1",
                      children: [
                        D &&
                          (0, o.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, o.jsx)(i.$, { size: "sm" }),
                          }),
                        (null === I || void 0 === I ? void 0 : I.results) &&
                          I.results.length > 0 &&
                          M < I.results.length &&
                          I.inferenceId &&
                          (0, o.jsx)(s.e, {
                            inferenceId: I.inferenceId,
                            reviewerCopilotResult: I.results[M],
                            hasFeedback: !!S[I.results[M].id],
                            setFeedback: (e) => {
                              T((t) => x({}, t, { [I.results[M].id]: e }));
                            },
                          }),
                        (null === I || void 0 === I ? void 0 : I.results) &&
                          (!C || C.length <= 15) &&
                          (0, o.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, o.jsx)("div", {
                              children:
                                "The selection must be at least 15 characters long!",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              })
            )
          : null;
      };
      t.Z = (0, r.memo)(y);
    },
    534522: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return o;
        },
      });
      const o = (0, n(827378).createContext)({});
    },
    400507: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return R;
        },
      });
      var o = n(824246),
        r = n(827378),
        s = n(722030),
        i = n(776845),
        a = n(713222),
        l = n(412937),
        c = n(339389),
        d = n(416534),
        u = n(788524),
        p = n(37190),
        m = n(813110),
        f = n(219502),
        h = n(257881),
        g = n(456552),
        b = n(693865),
        v = n(854358),
        x = n(534522),
        y = n(784200),
        w = n(588039),
        j = n(441993),
        k = n(986910),
        C = n(358720),
        S = n(232095);
      function T(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function N(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var s = e.apply(t, n);
            function i(e) {
              T(s, o, r, i, a, "next", e);
            }
            function a(e) {
              T(s, o, r, i, a, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function O(e, t, n) {
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
      const E = y.z
        .object({
          feedbackResponse: y.z.nativeEnum(v.FeedbackResponseType),
          errorCategory: y.z.string().optional(),
          otherFeedback: y.z.string().optional(),
        })
        .refine(
          (e) =>
            e.feedbackResponse !== v.FeedbackResponseType.Dismiss ||
            ("Other" === e.errorCategory
              ? void 0 !== e.otherFeedback
              : void 0 !== e.errorCategory)
        );
      var P;
      !(function (e) {
        (e.IncorrectVerdict = "Incorrect Verdict"),
          (e.IncorrectReasoning = "Incorrect Reasoning"),
          (e.ReasoningTooWordy = "Reasoning too wordy"),
          (e.IncorrectLinks = "Incorrect Links"),
          (e.TooManyLinks = "Too many links"),
          (e.IncorrectClaimHighlighted = "Incorrect Claim Highlighted"),
          (e.Other = "Other");
      })(P || (P = {}));
      const M = ({
          inferenceId: e,
          reviewerCopilotResult: t,
          hasFeedback: n,
          setFeedback: u,
        }) => {
          const {
              handleSubmit: p,
              watch: m,
              setValue: f,
            } = (0, w.cI)({ mode: "onBlur", resolver: (0, j.F)(E) }),
            g = m("feedbackResponse"),
            b = m("errorCategory"),
            x = m("otherFeedback"),
            [y, C] = r.useState(!1),
            S = (0, r.useCallback)(
              (function () {
                var n = N(function* (n) {
                  if (!y) {
                    C(!0);
                    try {
                      yield h.Z.genai.sendReviewerCopilotFeedback({
                        inferenceId: e,
                        claimId: t.id,
                        result: n.feedbackResponse,
                        errorCategory: n.errorCategory,
                        otherFeedback: n.otherFeedback,
                      }),
                        u(n);
                    } catch (o) {
                      k.Am.error(o.message);
                    }
                    C(!1);
                  }
                });
                return function (e) {
                  return n.apply(this, arguments);
                };
              })(),
              [y, C, e, t.id, u]
            );
          return y
            ? (0, o.jsx)("div", {
                className: "mt-2",
                children: (0, o.jsx)(s.$, { size: "sm" }),
              })
            : n
            ? (0, o.jsx)("div", {
                className: "mt-2",
                children: (0, o.jsx)(i.ZT.Paragraph2, {
                  className: "font-medium",
                  children: "Thank you for your feedback!",
                }),
              })
            : (0, o.jsxs)("div", {
                className: "mt-2",
                children: [
                  (0, o.jsx)(i.ZT.Paragraph2, {
                    className: "font-medium",
                    children: "Was this helpful/accurate?",
                  }),
                  (0, o.jsxs)("div", {
                    className: "flex gap-2",
                    children: [
                      (0, o.jsx)(a.J, {
                        icon: [
                          g === v.FeedbackResponseType.Accept ? "fas" : "far",
                          "thumbs-up",
                        ],
                        size: "sm",
                        onClick: () => {
                          f("feedbackResponse", v.FeedbackResponseType.Accept),
                            p(S)();
                        },
                      }),
                      (0, o.jsx)(a.J, {
                        icon: [
                          g === v.FeedbackResponseType.Dismiss ? "fas" : "far",
                          "thumbs-down",
                        ],
                        size: "sm",
                        onClick: () =>
                          f("feedbackResponse", v.FeedbackResponseType.Dismiss),
                      }),
                    ],
                  }),
                  g === v.FeedbackResponseType.Dismiss &&
                    (0, o.jsxs)("div", {
                      className: "mt-2",
                      children: [
                        (0, o.jsx)(l.S, {
                          label: "Select Error Category",
                          options: Object.keys(P).map((e) => ({
                            id: e,
                            name: P[e],
                          })),
                          selectedOptionId: b || "",
                          setSelected: (e) => {
                            f("errorCategory", e), e !== P.Other && p(S)();
                          },
                        }),
                        b === P.Other &&
                          (0, o.jsxs)("div", {
                            className: "mt-2",
                            children: [
                              (0, o.jsx)(i.ZT.Paragraph2, {
                                className: "font-medium",
                                children: "Other Feedback:",
                              }),
                              (0, o.jsx)(c.K, {
                                value: x,
                                onChange: (e) =>
                                  f("otherFeedback", e.target.value),
                                rows: 2,
                              }),
                              (0, o.jsx)(d.zx, {
                                variant: "primary",
                                size: "sm",
                                onClick: p(S),
                                className: "mt-2",
                                children: "Submit",
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        },
        R = ({
          inferenceId: e,
          reviewerCopilotResult: t,
          hasFeedback: n,
          setFeedback: r,
        }) => {
          const { claim: s, verdict: a, reasoning: l, links: c } = t;
          return (0, o.jsxs)("div", {
            children: [
              s &&
                (0, o.jsx)("div", {
                  className: "mb-2",
                  children: (0, o.jsxs)(i.ZT.Paragraph2, {
                    children: [
                      (0, o.jsx)("span", {
                        className: "font-medium",
                        children: "Claim:",
                      }),
                      " ",
                      s,
                    ],
                  }),
                }),
              (0, o.jsxs)("div", {
                className: "flex flex-row gap-2 items-center mb-2",
                children: [
                  (0, o.jsx)(i.ZT.Paragraph2, {
                    className: "font-medium",
                    children: "Validation Verdict:",
                  }),
                  ((e) => {
                    const t = e.toLowerCase();
                    return t.includes("true")
                      ? (0, o.jsx)(u.V, {
                          variant: "success",
                          children: "True",
                        })
                      : t.includes("false")
                      ? (0, o.jsx)(u.V, {
                          variant: "danger",
                          children: "False",
                        })
                      : (0, o.jsx)(u.V, { variant: "neutral", children: e });
                  })(a),
                ],
              }),
              (0, o.jsx)("div", {
                className: "mb-2",
                children: (0, o.jsxs)(i.ZT.Paragraph2, {
                  children: [
                    (0, o.jsx)("span", {
                      className: "font-medium",
                      children: "Reasoning:",
                    }),
                    " ",
                    l,
                  ],
                }),
              }),
              null === c || void 0 === c
                ? void 0
                : c.map((e, t) =>
                    (0, o.jsxs)(
                      "a",
                      {
                        className: "flex gap-1 items-center text-primary-400",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: e,
                        children: [
                          new URL(e).hostname,
                          (0, o.jsx)(p.s, {
                            icon: ["fas", "external-link-alt"],
                            contrastText: !0,
                            edge: "end",
                            variant: "secondary",
                          }),
                        ],
                      },
                      t
                    )
                  ),
              (0, o.jsx)(
                M,
                {
                  inferenceId: e,
                  reviewerCopilotResult: t,
                  hasFeedback: n,
                  setFeedback: r,
                },
                t.id
              ),
            ],
          });
        };
      t.Z = () => {
        const [e, t] = r.useState(!1),
          n = (0, m.y)((e) => e.selection),
          i = (0, b.Z)(n.text, 1e3),
          [l, c] = r.useState({}),
          d = [
            ...(0, C.Xn)(S.InteractionStepType.PromptInput),
            ...(0, C.Xn)(S.InteractionStepType.MultiTurnContinue),
          ].flatMap((e) => e.context.referenceTexts || []),
          u = (0, r.useContext)(x.p),
          [p, v] = r.useState(0),
          {
            data: y,
            error: w,
            isLoading: j,
          } = (0, g.useQuery)({
            queryFn: N(function* () {
              return !i || i.length <= 15
                ? Promise.resolve({ results: [], inferenceId: "" })
                : h.Z.genai.fetchReviewerCopilotInference({
                    content: i,
                    taskId: u.taskId,
                    projectId: u.projectId,
                    assignmentId: u.assignmentId,
                    referenceTexts: d,
                  });
            }),
            queryKey: [i],
            staleTime: 1 / 0,
            enabled: e,
          });
        r.useEffect(() => {
          v(0), c({});
        }, [i]);
        return w
          ? null
          : (0, o.jsx)(o.Fragment, {
              children: e
                ? (0, o.jsxs)(f.p, {
                    className: "w-80",
                    children: [
                      (0, o.jsxs)(f.p.Header, {
                        className: "px-3 border-b border-neutral-200",
                        children: [
                          (0, o.jsx)(f.p.HeaderLeft, {
                            children: (0, o.jsx)(f.p.Subtitle, {
                              children: "Fact Checker",
                            }),
                          }),
                          (null === y || void 0 === y ? void 0 : y.results) &&
                            y.results.length > 1 &&
                            (0, o.jsxs)(f.p.HeaderRight, {
                              className: "gap-1 flex flex-row justify-start",
                              children: [
                                (0, o.jsx)(f.p.Button, {
                                  icon: "chevron-left",
                                  onClick: () => {
                                    p > 0 && v(p - 1);
                                  },
                                  disabled: 0 === p,
                                }),
                                (0, o.jsx)(f.p.Button, {
                                  icon: "chevron-right",
                                  onClick: () => {
                                    (null === y || void 0 === y
                                      ? void 0
                                      : y.results) &&
                                      y.results.length &&
                                      p < y.results.length - 1 &&
                                      v(p + 1);
                                  },
                                  disabled: p === y.results.length - 1,
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, o.jsxs)(f.p.Body, {
                        className: "border-t-0 mb-1",
                        children: [
                          j && (0, o.jsx)(s.$, { size: "sm" }),
                          (null === y || void 0 === y ? void 0 : y.results) &&
                            y.results.length > 0 &&
                            p < y.results.length &&
                            y.inferenceId &&
                            (0, o.jsx)(R, {
                              inferenceId: y.inferenceId,
                              reviewerCopilotResult: y.results[p],
                              hasFeedback: !!l[y.results[p].id],
                              setFeedback: (e) => {
                                c((t) =>
                                  (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                      var n =
                                          null != arguments[t]
                                            ? arguments[t]
                                            : {},
                                        o = Object.keys(n);
                                      "function" ===
                                        typeof Object.getOwnPropertySymbols &&
                                        (o = o.concat(
                                          Object.getOwnPropertySymbols(
                                            n
                                          ).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(
                                              n,
                                              e
                                            ).enumerable;
                                          })
                                        )),
                                        o.forEach(function (t) {
                                          O(e, t, n[t]);
                                        });
                                    }
                                    return e;
                                  })({}, t, { [y.results[p].id]: e })
                                );
                              },
                            }),
                        ],
                      }),
                    ],
                  })
                : (0, o.jsx)(a.J, {
                    icon: "magnifying-glass",
                    size: "md",
                    hasBackground: !0,
                    className: "text-primary-400",
                    onClick: () => t(!0),
                    tooltip: "Run fact-checking on the selected text.",
                  }),
            });
      };
    },
    283888: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return a;
        },
      });
      var o = n(236125),
        r = n(527467);
      function s(e, t, n) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              s(e, t, n[t]);
            });
        }
        return e;
      }
      const a = (0, o.Ue)()(
        (0, r.mW)((e, t) => ({
          childIdToReadOnlyState: {},
          setReadOnlyStateForChildId: (t, n) =>
            e((e) => ({
              childIdToReadOnlyState: i({}, e.childIdToReadOnlyState, {
                [t]: n,
              }),
            })),
          selectedCustomCodeEnvironment: {},
          setSelectedCustomCodeEnvironment: (t, n) =>
            e((e) => ({
              selectedCustomCodeEnvironment: i(
                {},
                e.selectedCustomCodeEnvironment,
                { [t]: n }
              ),
            })),
          getSelectedCustomCodeEnvironment: (e) =>
            t().selectedCustomCodeEnvironment[e],
          scratchpadOpenState: {},
          setScratchpadOpenState: (t, n) =>
            e((e) => ({
              scratchpadOpenState: i({}, e.scratchpadOpenState, { [t]: n }),
            })),
          getScratchpadOpenState: (e) => {
            var n;
            return (
              null !== (n = t().scratchpadOpenState[e]) && void 0 !== n && n
            );
          },
        }))
      );
    },
    63571: function (e, t, n) {
      "use strict";
      var o = n(827378);
      t.Z = function (e) {
        const t = (0, o.useRef)(e);
        return (t.current = e), t;
      };
    },
    344660: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return i;
        },
      });
      var o = n(827378),
        r = n(534522),
        s = n(938910);
      function i() {
        const e = (0, o.useContext)(r.p),
          t = null === e || void 0 === e ? void 0 : e.markdownSyntaxConfig;
        var n, i, a, l;
        return {
          boldToken:
            null !== (n = null === t || void 0 === t ? void 0 : t.boldToken) &&
            void 0 !== n
              ? n
              : s.BoldToken.ASTERISK,
          italicToken:
            null !==
              (i = null === t || void 0 === t ? void 0 : t.italicToken) &&
            void 0 !== i
              ? i
              : s.ItalicToken.ASTERISK,
          bulletListToken:
            null !==
              (a = null === t || void 0 === t ? void 0 : t.bulletListToken) &&
            void 0 !== a
              ? a
              : s.BulletListToken.ASTERISK,
          mathToken:
            null !== (l = null === t || void 0 === t ? void 0 : t.mathToken) &&
            void 0 !== l
              ? l
              : s.MathToken.DOLLARS,
        };
      }
    },
    613911: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(827378);
      function r(e, t) {
        const { 0: n, 1: r } = (0, o.useState)(e),
          s = (0, o.useRef)(null),
          i = (0, o.useRef)(!1);
        (0, o.useEffect)(
          () => (
            (i.current = !0),
            () => {
              i.current = !1;
            }
          ),
          []
        );
        return [
          n,
          (0, o.useCallback)(
            (e) => {
              null !== s.current && clearTimeout(s.current),
                (s.current = setTimeout(() => {
                  i.current && r(e), (s.current = null);
                }, t));
            },
            [r, t]
          ),
        ];
      }
    },
    813110: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return a;
        },
        y: function () {
          return l;
        },
      });
      var o = n(236125),
        r = n(527467);
      function s(e, t, n) {
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
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              s(e, t, n[t]);
            });
        }
        return e;
      }
      const a = (e, t) =>
          t
            ? `${e.type}-${e.responseIndex}-${t}`
            : `${e.type}-${e.responseIndex}`,
        l = (0, o.Ue)()(
          (0, r.mW)(
            (0, r.XR)((e, t) => ({
              workerComments: [],
              selectedWorkerComment: null,
              selection: { from: 0, to: 0, empty: !0, childId: "" },
              addWorkerComment: (t) => {
                t.comment.length &&
                  e((e) => ({ workerComments: [...e.workerComments, t] }));
              },
              setWorkerComments: (t) => {
                e({ workerComments: t });
              },
              setSelection: (t) => {
                e((e) => ({ selection: t }));
              },
              deleteSelection: () => {
                e({ selection: { from: 0, to: 0, empty: !0, childId: "" } });
              },
              getAllWorkerCommentsByChildId: (e) =>
                t().workerComments.filter((t) => t.childId === e),
              selectWorkerComment: (t) => {
                e((e) => ({ selectedWorkerComment: t }));
              },
              getWorkerCommentByChildId: (e) =>
                t().workerComments.find((t) => t.childId === e),
              getWorkerCommentById: (e) =>
                t().workerComments.find((t) => t.workerCommentId === e),
              updateWorkerComment: (t, n, o) => {
                e((e) => ({
                  workerComments: e.workerComments.map((e) =>
                    e.workerCommentId === t
                      ? i({}, e, {
                          comment: n,
                          title: null !== o && void 0 !== o ? o : e.title,
                        })
                      : e
                  ),
                }));
              },
              updateWorkerCommentLocation(t, n) {
                e((e) => ({
                  workerComments: e.workerComments.map((e) => {
                    if (e.workerCommentId === t) {
                      const [t, o] = n([e.locationStart, e.locationEnd]);
                      return i({}, e, { locationStart: t, locationEnd: o });
                    }
                    return e;
                  }),
                }));
              },
              batchUpdateWorkerCommentLocations(t) {
                e((e) => {
                  const n = t.map((e) => e.id);
                  return {
                    workerComments: e.workerComments.map((e) => {
                      if (n.includes(e.workerCommentId)) {
                        const n = t.find((t) => t.id === e.workerCommentId),
                          [o, r] = n.updater([e.locationStart, e.locationEnd]);
                        return i({}, e, { locationStart: o, locationEnd: r });
                      }
                      return e;
                    }),
                  };
                });
              },
              deleteWorkerComment: (t) => {
                e((e) => ({
                  workerComments: e.workerComments.filter(
                    (e) => e.workerCommentId !== t
                  ),
                }));
              },
              addFeedbackResponseToWorkerComment: (t, n) => {
                e((e) => ({
                  workerComments: e.workerComments.map((e) =>
                    e.workerCommentId === t
                      ? i({}, e, { feedbackResponse: n })
                      : e
                  ),
                }));
              },
              resetWorkerCommentsFromResponseIndex: (t, n) => {
                e((e) => {
                  const o = t.slice(n + 1).map((e) => a(e));
                  return {
                    workerComments: e.workerComments.filter(
                      (e) => !e.childId || !o.includes(e.childId)
                    ),
                  };
                });
              },
            }))
          )
        );
    },
    219502: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return y;
        },
      });
      var o = n(824246),
        r = n(827378),
        s = n(720227),
        i = n(792739),
        a = n(37190),
        l = n(916353),
        c = n(930640),
        d = n(983341),
        u = n(276281),
        p = n(92465),
        m = n.n(p),
        f = n(298784);
      function h(e, t, n) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              h(e, t, n[t]);
            });
        }
        return e;
      }
      function b(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              s = Object.keys(e);
            for (o = 0; o < s.length; o++)
              (n = s[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++)
            (n = s[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      const v = (0, r.forwardRef)((e, t) => {
          const {
              badge: n,
              disabled: r,
              onClick: i,
              icon: c,
              selected: d,
              tooltip: u,
              tooltipProps: p,
              className: m,
              iconProps: f,
              enableDisabledTooltip: h,
            } = e,
            b = (0, o.jsxs)("button", {
              ref: t,
              disabled: r,
              onClick: i,
              className: (0, s.m)(
                "scaleui transition-all relative border-none focus:outline-none focus:ring-0 flex items-center justify-center rounded w-6 h-6 focus:bg-neutral-300",
                d && "focus:bg-inherit bg-neutral-200",
                !d && "hover:bg-neutral-200 ",
                r && "cursor-not-allowed hover:bg-transparent",
                m
              ),
              "data-cy": e["data-cy"],
              children: [
                (0, o.jsx)(a.s, {
                  icon: c,
                  variant: "neutral",
                  size: "sm",
                  disabled: r,
                  contrastText: d,
                  iconProps: f,
                }),
                n &&
                  (0, o.jsx)("div", {
                    className:
                      "absolute inline-flex items-center justify-center w-5 h-5 text-xs text-neutral-900 bg-primary-100 border border-neutral-0 rounded-full -top-2 -right-2",
                    children: n,
                  }),
              ],
            });
          return u
            ? (0, o.jsx)(
                l.u,
                g(
                  { text: u, target: b, disabled: r && !h, delayDuration: 0 },
                  p
                )
              )
            : b;
        }),
        x = (0, r.createContext)({ cardReference: null, readOnly: !1 }),
        y = Object.assign(
          (e) => {
            const { className: t, children: n, readOnly: i = !1 } = e,
              { 0: a, 1: l } = (0, r.useState)(null);
            return (0, o.jsx)(
              "div",
              g({ "data-test": "step-card" }, e, {
                ref: l,
                className: (0, s.m)(
                  "w-full text-left border border-neutral-200 rounded-lg h-fit scaleui bg-neutral-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition-colors max-w-screen-xl",
                  t
                ),
                children: (0, o.jsx)(x.Provider, {
                  value: { cardReference: a, readOnly: i },
                  children: n,
                }),
              })
            );
          },
          {
            Header: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "flex items-center justify-between w-full bg-neutral-50 rounded-t-lg py-2 px-4",
                    t
                  ),
                })
              );
            },
            SubHeaderRow: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "flex w-full divide-x divide-neutral-200",
                    t
                  ),
                })
              );
            },
            SubHeader: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "flex items-center justify-between w-full bg-neutral-50 px-4 py-2",
                    t
                  ),
                })
              );
            },
            SubHeaderTitle: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "w-full text-neutral-600 font-medium text-xs",
                    t
                  ),
                })
              );
            },
            HeaderColumn: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)("w-full flex flex-col gap-[2px]", t),
                })
              );
            },
            HeaderLeft: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)("flex items-center w-full gap-3", t),
                })
              );
            },
            HeaderRight: (e) => {
              const { className: t, children: n } = e,
                { readOnly: i } = (0, r.useContext)(x);
              return (0, o.jsxs)(
                "div",
                g({}, e, {
                  className: (0, s.m)("flex ml-2 gap-2 items-center", t),
                  children: [
                    i &&
                      (0, o.jsx)("span", {
                        className: "text-xs text-neutral-500 whitespace-nowrap",
                        children: "Read-only",
                      }),
                    (0, o.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: n,
                    }),
                  ],
                })
              );
            },
            Icon: (e) => {
              const { className: t } = e;
              return (0, o.jsx)("div", {
                className: (0, s.m)(
                  "flex items-center justify-center rounded-full bg-neutral-0 border border-neutral-200 text-md text-neutral-500 w-8 h-8",
                  t
                ),
                children: (0, o.jsx)(i.G, g({}, e)),
              });
            },
            Image: (e) => {
              const { className: t } = e,
                n = b(e, ["className"]);
              return (0, o.jsx)("div", {
                className: (0, s.m)(
                  "flex items-center justify-center rounded-full bg-neutral-0 border border-neutral-200 text-md text-neutral-500 w-8 h-8",
                  t
                ),
                children: (0, o.jsx)(
                  "img",
                  g({}, n, { className: "rounded-full" })
                ),
              });
            },
            Superscript: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "w-full text-neutral-600 font-normal text-[10px]",
                    t
                  ),
                })
              );
            },
            Title: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "w-full text-neutral-600 font-semibold text-base",
                    t
                  ),
                })
              );
            },
            Subtitle: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "w-full text-neutral-600 font-normal text-xs",
                    t
                  ),
                })
              );
            },
            Button: v,
            Body: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "py-2 px-4 border-t border-neutral-100",
                    t
                  ),
                })
              );
            },
            Footer: (e) => {
              const { className: t } = e;
              return (0, o.jsx)(
                "div",
                g({}, e, {
                  className: (0, s.m)(
                    "flex items-center w-full px-4 py-3 border-t border-neutral-100",
                    t
                  ),
                })
              );
            },
            Popover: (e) => {
              const { cardReference: t } = (0, r.useContext)(x),
                { 0: n, 1: i } = (0, r.useState)(null),
                { 0: a, 1: l } = (0, r.useState)(null),
                p = e.useStepCardReference
                  ? t
                  : m()(e.referenceElement)
                  ? n
                  : e.referenceElement;
              var h, y;
              const { styles: w, attributes: j } = (0, u.D)(p, a, {
                  placement:
                    null !== (h = e.placement) && void 0 !== h
                      ? h
                      : "bottom-end",
                  modifiers:
                    null !== (y = e.modifiers) && void 0 !== y
                      ? y
                      : [{ name: "offset", options: { offset: [14, 14] } }],
                }),
                { children: k, isOpen: C, className: S } = e,
                T = b(e, ["children", "isOpen", "className"]);
              return (0, o.jsx)(c.J, {
                children: ({ open: t, close: r }) => {
                  const u = m()(e.isOpen) ? t : e.isOpen;
                  return (0, o.jsxs)(o.Fragment, {
                    children: [
                      !e.disablePopoverButton &&
                        (0, o.jsx)(
                          c.J.Button,
                          g({ ref: i, as: v }, T, { selected: u })
                        ),
                      (0, o.jsx)(
                        c.J.Panel,
                        g({ ref: l, style: w.popper }, j.popper, {
                          className: (0, s.m)("z-50", S),
                          static: !m()(C),
                          children: (0, o.jsx)(d.u, {
                            show: u,
                            appear: !0,
                            enter: "transition-all duration-300",
                            enterFrom: "opacity-0 -translate-y-1",
                            enterTo: "opacity-100 translate-y-0 ",
                            leave: "transition-all duration-300",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 -translate-y-1",
                            children: (0, f.isFunction)(k)
                              ? k({
                                  close: () => {
                                    var t;
                                    null === (t = e.onClose) ||
                                      void 0 === t ||
                                      t.call(e),
                                      r();
                                  },
                                  buttonReference: n,
                                  panelReference: a,
                                  referenceElement: p,
                                })
                              : k,
                          }),
                        })
                      ),
                    ],
                  });
                },
              });
            },
            Context: x,
          }
        );
    },
    228401: function (e, t, n) {
      "use strict";
      var o = n(824246),
        r = n(252708),
        s = n.n(r),
        i = n(720227);
      t.Z = ({
        enableRTL: e = !1,
        disableFlex: t = !1,
        disableContent: n = !1,
        disabledOpacity: r = 0.5,
        className: a = "",
        children: l,
      }) =>
        (0, o.jsxs)("div", {
          dir: e ? "rtl" : "ltr",
          className: (0, i.m)(
            t ? void 0 : "flex flex-1 relative",
            e ? "text-right" : void 0,
            "transition-opacity duration-500 ease-linear",
            a
          ),
          style: { opacity: n ? r : 1 },
          children: [
            n &&
              (0, o.jsx)("div", {
                className: "absolute w-full h-full z-[999]",
                onClick: () => {
                  s().warning(
                    "You must save changes before editing other steps.",
                    { timeout: 3e3 }
                  );
                },
              }),
            l,
          ],
        });
    },
    759784: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var o = n(824246),
        r = n(827378),
        s = n(682603),
        i = n(179843),
        a = n(656751),
        l = n(213280),
        c = n(943047),
        d = n(905035),
        u = n(642136),
        p = n(39892);
      function m(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function f(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var s = e.apply(t, n);
            function i(e) {
              m(s, o, r, i, a, "next", e);
            }
            function a(e) {
              m(s, o, r, i, a, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function h(e) {
        return e
          .replace(/\\[a-zA-Z]+/g, "")
          .replace(/[{}]/g, " ")
          .replace(/[%&_]/g, "")
          .replace(/\s+/g, " ")
          .trim();
      }
      function g(e) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = f(function* (e) {
          const t = e
            .replace(/\\?\\\(([\s\S]*?)\\?\\\)/g, "$$$1$$")
            .replace(/\\\\(\[)([\s\S]*?)\\\\(\])/g, (e, t, n) => `$$${n}$$`)
            .replace(/\\\[([\s\S]*?)\\\]/g, (e, t) => `$$${t}$$`);
          return (yield (0, u.l)()
            .use(l.Z)
            .use(i.Z)
            .use(a.Z)
            .use(() => (e) => {
              (0, p.Vn)(e, "table", (e) => {
                const t = [];
                (0, p.Vn)(e, "text", (e) => {
                  t.push(e.value);
                }),
                  (e.type = "paragraph"),
                  (e.children = [{ type: "text", value: t.join(" ") }]);
              }),
                (0, p.Vn)(e, "code", (e) => {
                  (e.type = "paragraph"),
                    (e.children = [{ type: "text", value: e.value }]);
                }),
                (0, p.Vn)(e, "inlineMath", (e) => {
                  (e.type = "text"), (e.value = h(e.value));
                }),
                (0, p.Vn)(e, "math", (e) => {
                  (e.type = "paragraph"),
                    (e.children = [{ type: "text", value: h(e.value) }]);
                }),
                (0, p.Vn)(e, "image", (e) => {
                  (e.type = "text"), (e.value = "");
                });
            })
            .use(d.Z)
            .use(() => (e) => {
              (0, p.Vn)(e, "text", (e) => {
                e.value = e.value.trim();
              });
            })
            .use(c.Z)
            .process(t)).toString();
        })).apply(this, arguments);
      }
      function v(e, t = "en") {
        const n = new Intl.Segmenter(t, { granularity: "word" }).segment(e);
        let o = 0,
          r = null;
        for (const s of n) {
          if (s.isWordLike) {
            if (r && "-" === r.segment) continue;
            o++;
          }
          r = s;
        }
        return o;
      }
      var x = n(358720),
        y = n(223841),
        w = n(44579);
      function j(e, t, n, o, r, s, i) {
        try {
          var a = e[s](i),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function k(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var s = e.apply(t, n);
            function i(e) {
              j(s, o, r, i, a, "next", e);
            }
            function a(e) {
              j(s, o, r, i, a, "throw", e);
            }
            i(void 0);
          });
        };
      }
      const C = ({ text: e, active: t = !0 }) => {
        const { 0: n, 1: i } = (0, r.useState)(0),
          a = (0, x.t0)((e) => e.languageCode);
        (0, y.Z)(
          k(function* () {
            const t = v(yield g(e), a);
            i(t);
          }),
          200,
          [e, a]
        ),
          (0, w.Z)(
            k(function* () {
              const t = v(yield g(e), a);
              i(t);
            })
          );
        const l = n.toLocaleString("en-US");
        return (0, o.jsx)(s.A, { label: `${l} words`, active: t });
      };
      var S = (0, r.memo)(C);
    },
    693865: function (e, t, n) {
      "use strict";
      var o = n(827378);
      t.Z = function (e, t) {
        const { 0: n, 1: r } = (0, o.useState)(e);
        return (
          (0, o.useEffect)(() => {
            const n = setTimeout(() => {
              r(e);
            }, t);
            return () => {
              clearTimeout(n);
            };
          }, [e, t]),
          n
        );
      };
    },
    545545: function () {},
    578028: function () {},
    850695: function () {},
    584215: function () {},
    347021: function () {},
    450471: function () {},
    171632: function () {},
  },
]);
