"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15397],
  {
    669749: function (e, t, i) {
      i.d(t, {
        AM: function () {
          return p;
        },
        S5: function () {
          return b;
        },
        sJ: function () {
          return f;
        },
        tw: function () {
          return v;
        },
        Uo: function () {
          return g;
        },
        iS: function () {
          return j;
        },
      });
      var n = i(824246),
        s = i(679892),
        o = i.n(s),
        a = i(827378),
        r = i(792739),
        l = i(208528),
        d = i(986004),
        c = i(162491);
      const p = ({
        required: e = !0,
        commentsInput: t,
        handleCommentsChange: i,
      }) => {
        const [s, p] = (0, l.Z)(!1),
          u = (0, a.useCallback)((e) => e.stopPropagation(), []),
          x = (0, a.useCallback)(
            (e) => {
              e.preventDefault(), i(e.target.value);
            },
            [i]
          ),
          b = "Please add feedback" + (e ? "" : " (Optional)"),
          m = (0, n.jsxs)("div", {
            className:
              o().dynamic([
                ["e8412e4fc4c873e5", [d.IS_FEDERAL ? "360px" : "120px"]],
              ]) + " inline-feedback",
            children: [
              (0, n.jsx)(c.Z, {
                rows: 1,
                className: "inline-feedback__input",
                placeholder: b,
                defaultValue: t,
                onKeyDown: u,
                onChange: x,
                style: { paddingRight: "16px" },
              }),
              (0, n.jsx)("div", {
                onClick: p,
                className:
                  o().dynamic([
                    ["e8412e4fc4c873e5", [d.IS_FEDERAL ? "360px" : "120px"]],
                  ]) + " inline-feedback__expand",
                children: (0, n.jsx)(r.G, { icon: "expand" }),
              }),
              (0, n.jsx)(o(), {
                id: "e8412e4fc4c873e5",
                dynamic: [d.IS_FEDERAL ? "360px" : "120px"],
                children: `.inline-feedback.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:${
                  d.IS_FEDERAL ? "360px" : "120px"
                };max-width:360px;margin-right:8px;margin-left:12px;position:relative}.inline-feedback__input.__jsx-style-dynamic-selector{width:100%;height:36px;border:1px solid rgba(0,0,0,.4);-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;text-indent:10px;color:black;font-size:12px;font-weight:700;padding-right:36px;-webkit-transition:.1s all;-moz-transition:.1s all;-o-transition:.1s all;transition:.1s all}.inline-feedback__expand.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;right:8px;top:10px;opacity:.5;-webkit-transition:-webkit-transform.2s;-moz-transition:-moz-transform.2s;-o-transition:-o-transform.2s;transition:-webkit-transform.2s;transition:-moz-transform.2s;transition:-o-transform.2s;transition:transform.2s}.inline-feedback__expand.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.inline-feedback__input.__jsx-style-dynamic-selector:focus+.inline-feedback__expand.__jsx-style-dynamic-selector{opacity:.9}`,
              }),
            ],
          }),
          h = (0, n.jsxs)("div", {
            className:
              o().dynamic([
                ["1bd2a204f2fcd587", [d.IS_FEDERAL ? "360px" : "120px"]],
              ]) + " popout-feedback--container",
            children: [
              (0, n.jsxs)("div", {
                className:
                  o().dynamic([
                    ["1bd2a204f2fcd587", [d.IS_FEDERAL ? "360px" : "120px"]],
                  ]) + " popout-feedback",
                children: [
                  (0, n.jsx)(c.Z, {
                    placeholder: b,
                    containerStyle: { flexGrow: 1 },
                    style: {
                      width: "100%",
                      paddingTop: "24px",
                      fontWeight: "bold",
                    },
                    onKeyDown: u,
                    onChange: x,
                    defaultValue: t,
                    shouldFocus: !0,
                  }),
                  (0, n.jsx)("div", {
                    onClick: p,
                    className:
                      o().dynamic([
                        [
                          "1bd2a204f2fcd587",
                          [d.IS_FEDERAL ? "360px" : "120px"],
                        ],
                      ]) + " popout-feedback__collapse",
                    children: (0, n.jsx)(r.G, { icon: "compress" }),
                  }),
                ],
              }),
              (0, n.jsx)(o(), {
                id: "1bd2a204f2fcd587",
                dynamic: [d.IS_FEDERAL ? "360px" : "120px"],
                children: `.popout-feedback--container.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;min-width:${
                  d.IS_FEDERAL ? "360px" : "120px"
                };max-width:360px;margin-right:8px;position:relative}.popout-feedback.__jsx-style-dynamic-selector{position:absolute;bottom:4px;right:0;left:0;height:400px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;background:white;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 10px 20px rgba(0,0,0,.1);-moz-box-shadow:0 10px 20px rgba(0,0,0,.1);box-shadow:0 10px 20px rgba(0,0,0,.1);z-index:3}.popout-feedback__collapse.__jsx-style-dynamic-selector{cursor:pointer;position:absolute;right:8px;top:8px;opacity:.5;-webkit-transition:-webkit-transform.2s;-moz-transition:-moz-transform.2s;-o-transition:-o-transform.2s;transition:-webkit-transform.2s;transition:-moz-transform.2s;transition:-o-transform.2s;transition:transform.2s;font-size:20px}.popout-feedback__collapse.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}`,
              }),
            ],
          });
        return s ? h : m;
      };
      var u = i(50682),
        x = i.n(u);
      const b = (e) =>
        (0, n.jsxs)("div", {
          "data-tip": e.tooltip,
          "data-for": `footer-button-${e.type}`,
          className: "jsx-b630dad507cc1989 footer-button-container",
          children: [
            (0, n.jsx)(x(), { id: `footer-button-${e.type}` }),
            (0, n.jsx)("button", {
              onClick: e.isDisabled ? () => {} : e.onClick,
              tabIndex: e.tabIndex,
              disabled: e.isDisabled,
              className: `jsx-b630dad507cc1989 footer-button ${e.type} ${
                e.isDisabled ? "disabled" : ""
              }`,
              children: e.children,
            }),
            (0, n.jsx)(o(), {
              id: "b630dad507cc1989",
              children:
                ".footer-button-container.jsx-b630dad507cc1989{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-left:12px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center}.footer-button.jsx-b630dad507cc1989{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;padding:8px 16px;-webkit-box-shadow:2px 4px 8px rgba(0,0,0,.05);-moz-box-shadow:2px 4px 8px rgba(0,0,0,.05);box-shadow:2px 4px 8px rgba(0,0,0,.05);border:0;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);font-family:var(--font-family);font-weight:bold;font-size:14px;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;-webkit-transition:box-shadow.2s;-moz-transition:box-shadow.2s;-o-transition:box-shadow.2s;transition:box-shadow.2s}.footer-button.disabled.jsx-b630dad507cc1989{pointer-events:none;opacity:.5}.footer-button.jsx-b630dad507cc1989:focus{outline:1px solid#aaa}.footer-button.jsx-b630dad507cc1989:hover{-webkit-box-shadow:2px 2px 8px rgba(0,0,0,.15);-moz-box-shadow:2px 2px 8px rgba(0,0,0,.15);box-shadow:2px 2px 8px rgba(0,0,0,.15)}.footer-button.submit.jsx-b630dad507cc1989{background:var(--link-color);color:white}.footer-button.accept.jsx-b630dad507cc1989{background:var(--color-accept);color:white}.footer-button.reject.jsx-b630dad507cc1989{background:var(--color-reject);color:white}.footer-button.edgecase.jsx-b630dad507cc1989{background:rgba(221,69,211,1);color:white}.footer-button.neutral.jsx-b630dad507cc1989{background:black;color:white}.footer-button.white.jsx-b630dad507cc1989{background:white;color:black}.footer-button.cancel.jsx-b630dad507cc1989{background:white;color:gray}.footer-button.rejectRapid.jsx-b630dad507cc1989{background:#e53935;color:white}.footer-button.acceptRapid.jsx-b630dad507cc1989{background:#479e6a;color:white}.footer-button.submitRapid.jsx-b630dad507cc1989{background:#039be5;color:white}.footer-button.editRapid.jsx-b630dad507cc1989{background:#e5e7eb;color:black}",
            }),
          ],
        });
      var m = i(60042),
        h = i.n(m);
      const f = ({
        isSubmitting: e,
        backgroundColor: t = "#fff",
        children: i,
      }) => {
        const s = h()("review-footer", { "completed--flash": e });
        return (0, n.jsxs)("div", {
          style: { backgroundColor: t },
          className: "jsx-9bab1bb40b5e82b4 " + (s || ""),
          children: [
            i,
            (0, n.jsx)(o(), {
              id: "9bab1bb40b5e82b4",
              children:
                ".review-footer.jsx-9bab1bb40b5e82b4{border-top:1px solid var(--bg-gray-light-1);padding:20px 20px;width:100vw;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}",
            }),
          ],
        });
      };
      class v extends a.Component {
        render() {
          const { minWidth: e } = this.props;
          return (0, n.jsxs)("div", {
            className:
              o().dynamic([["e94b06fee43e446d", [e || "100"]]]) +
              " review-footer__input",
            children: [
              (0, n.jsx)("form", {
                onSubmit: this.handleSubmit,
                className: o().dynamic([["e94b06fee43e446d", [e || "100"]]]),
                children: (0, n.jsx)("input", {
                  type: "text",
                  name: this.props.name,
                  placeholder: this.props.placeholder,
                  onKeyDown: (e) => e.stopPropagation(),
                  onChange: (e) =>
                    this.props.handleCommentsChange(e.target.value),
                  autoFocus: this.props.autoFocus,
                  className:
                    o().dynamic([["e94b06fee43e446d", [e || "100"]]]) +
                    " review-footer__comments",
                }),
              }),
              (0, n.jsx)(o(), {
                id: "e94b06fee43e446d",
                dynamic: [e || "100"],
                children: `.review-footer__input.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin-right:10px;min-width:${
                  e || "100"
                }px}.review-footer__comments.__jsx-style-dynamic-selector{width:100%;height:36px;padding:12px;outline:0;border:0;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);-webkit-box-shadow:0 4px 10px rgba(0,0,0,.05);-moz-box-shadow:0 4px 10px rgba(0,0,0,.05);box-shadow:0 4px 10px rgba(0,0,0,.05);font-size:14px;font-weight:bold;-webkit-transition:.2s all;-moz-transition:.2s all;-o-transition:.2s all;transition:.2s all}.review-footer__comments.__jsx-style-dynamic-selector::-webkit-input-placeholder{font-weight:normal}.review-footer__comments.__jsx-style-dynamic-selector:-moz-placeholder{font-weight:normal}.review-footer__comments.__jsx-style-dynamic-selector::-moz-placeholder{font-weight:normal}.review-footer__comments.__jsx-style-dynamic-selector:-ms-input-placeholder{font-weight:normal}.review-footer__comments.__jsx-style-dynamic-selector::-ms-input-placeholder{font-weight:normal}.review-footer__comments.__jsx-style-dynamic-selector::placeholder{font-weight:normal}.review-footer__comments.__jsx-style-dynamic-selector:hover{cursor:pointer}.review-footer__comments.__jsx-style-dynamic-selector:hover,.review-footer__comments.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 4px 10px rgba(0,0,0,.15);-moz-box-shadow:0 4px 10px rgba(0,0,0,.15);box-shadow:0 4px 10px rgba(0,0,0,.15)}`,
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.handleSubmit = (e) => {
              e.preventDefault(),
                e.stopPropagation(),
                this.props.handleSubmit && this.props.handleSubmit();
            });
        }
      }
      const g = ({ children: e }) =>
          (0, n.jsxs)("div", {
            className: "jsx-cd8e88b65b7c0234 review-footer__intro",
            children: [
              e,
              (0, n.jsx)(o(), {
                id: "cd8e88b65b7c0234",
                children:
                  ".review-footer__intro.jsx-cd8e88b65b7c0234{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",
              }),
            ],
          }),
        j = ({ children: e }) =>
          (0, n.jsxs)("div", {
            className: "jsx-c4a6464287fc1902 review-footer__actions",
            children: [
              e,
              (0, n.jsx)(o(), {
                id: "c4a6464287fc1902",
                children:
                  ".review-footer__actions.jsx-c4a6464287fc1902{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",
              }),
            ],
          });
    },
    490067: function (e, t, i) {
      var n = i(824246),
        s = i(298784),
        o = i.n(s),
        a = i(60042),
        r = i.n(a),
        l = i(827378),
        d = i(828254),
        c = i(113463),
        p = i(431350),
        u = i(604375),
        x = i(411356),
        b = i(161292),
        m = i(599789),
        h = i(167469),
        f = i(832763),
        v = i(875630),
        g = i(168572),
        j = i(239447),
        y = i(554211),
        k = i(448586),
        w = i(59524),
        C = i(433310),
        T = i(298869);
      function _(e, t, i) {
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
      function S(e) {
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
              _(e, t, i[t]);
            });
        }
        return e;
      }
      t.Z = (e) => {
        var t, i, s, a, f, g;
        const {
            assignment: _,
            corruptionsAuditCount: R,
            handleAuditResultChange: F,
            isCustomerQAMode: P,
            isSolid: z = !1,
            isSubmitting: Z,
            showAuditResultDropdown: L,
            toggleCorruptionsAudit: B,
            toggleShowingInstructions: O,
            toggleShowingShortcuts: H,
            toggleShowingExamples: D,
            toggleShowingSimilarExamples: W,
            auditFeedback: M,
            setAuditFeedback: U,
            isInstructionTask: V,
            setShowModal: $,
            isEdgeCaseTask: q,
            setShowEdgeCaseModal: Q,
            darkMode: G,
            workerId: Y,
            useV2: X,
            toggleUseV2: K,
          } = e,
          J = A();
        var ee;
        const te = null === (ee = e.canEdit) || void 0 === ee || ee,
          { 0: ie, 1: ne } = (0, l.useState)(!1),
          se = (0, v.Sp)({
            storageName: "visualExamplesShoutout",
            showing: "once",
          });
        var oe;
        const ae = (0, y.ZP)(
            "visual-examples-project",
            {
              projectId:
                null !==
                  (oe =
                    null === (t = _.project) || void 0 === t ? void 0 : t.id) &&
                void 0 !== oe
                  ? oe
                  : null === (i = _.project) || void 0 === i
                  ? void 0
                  : i._id,
            },
            !1
          ),
          re = (0, y.ZP)("visual-examples-user", { userId: Y }, !1);
        var le;
        const de = (0, y.ZP)(
            "in_task_support_poc_dev_by_project",
            {
              projectId:
                null !==
                  (le =
                    null === (s = _.project) || void 0 === s ? void 0 : s.id) &&
                void 0 !== le
                  ? le
                  : null === (a = _.project) || void 0 === a
                  ? void 0
                  : a._id,
            },
            !1
          ),
          ce = ae && re,
          pe = (0, v.Sp)({
            storageName: "similarExamplesShoutout",
            showing: "once",
          });
        var ue;
        const xe = (0, y.ZP)(
            "similar-examples-project",
            {
              projectId:
                null !==
                  (ue =
                    null === (f = _.project) || void 0 === f ? void 0 : f.id) &&
                void 0 !== ue
                  ? ue
                  : null === (g = _.project) || void 0 === g
                  ? void 0
                  : g._id,
            },
            !1
          ),
          { width: be } = (0, j.Z)(),
          me = (e) => {
            if (!U) return;
            const t = [];
            e.category && t.push("typePrimary", "typeSecondary", "hint"),
              e.typePrimary && t.push("typeSecondary");
            const i = o().omit(S({}, M, e), t);
            U(i);
          };
        return (0, n.jsxs)("div", {
          className: r()(J.reviewAssignmentFooter, {
            "completed--flash": Z,
            solid: z,
            [J.darkMode]: !!G,
          }),
          children: [
            ie &&
              (0, n.jsx)(T.ZP, {
                openModal: ie,
                taskId: _.id || _._id,
                userId: Y,
                onClose: () => ne(!1),
              }),
            P
              ? (0, n.jsx)("div", {
                  children: (0, n.jsx)("strong", {
                    children: "Was the task completed correctly?",
                  }),
                })
              : (0, n.jsxs)("div", {
                  children: [
                    O &&
                      (0, n.jsxs)(p.zx, {
                        onClick: O,
                        style: I,
                        children: [
                          "Instructions",
                          be > 1400 &&
                            (0, n.jsxs)("span", {
                              children: [
                                "\xa0\xa0\xa0",
                                (0, n.jsx)(c.Z, { children: "i" }),
                              ],
                            }),
                        ],
                      }),
                    H &&
                      (0, n.jsxs)(p.zx, {
                        onClick: H,
                        style: I,
                        children: [
                          "Shortcuts",
                          be > 1400 &&
                            (0, n.jsxs)("span", {
                              children: [
                                "\xa0\xa0\xa0",
                                (0, n.jsx)(c.Z, { children: "/" }),
                              ],
                            }),
                        ],
                      }),
                    D &&
                      ce &&
                      (0, n.jsx)(se.Tooltip, {
                        attachDisplay: "inline-block",
                        arrow: "bottom",
                        title: "Visual Examples Tool",
                        content:
                          "Click the Examples button to view relevant examples to help label this task!",
                        children: (0, n.jsx)(p.zx, {
                          onClick: D,
                          style: I,
                          children: "Examples",
                        }),
                      }),
                    W &&
                      xe &&
                      (0, n.jsx)(pe.Tooltip, {
                        attachDisplay: "inline-block",
                        arrow: "bottom",
                        title: "Visual Examples Tool",
                        content:
                          "Click the Examples button to view relevant examples to help label this task!",
                        children: (0, n.jsx)(p.zx, {
                          onClick: W,
                          style: I,
                          children: "Examples",
                        }),
                      }),
                  ],
                }),
            (() => {
              if (R)
                return (0, n.jsxs)(p.zx, {
                  onClick: B,
                  style: N,
                  children: ["\ud83d\ude08\xa0", R],
                });
            })(),
            (() => {
              var e;
              if (!L) return;
              const t = {
                  [m.AuditResult.Perfect]: "Perfect",
                  [m.AuditResult.Good]: "Good",
                  [m.AuditResult.Ok]: "OK",
                  [m.AuditResult.Bad]: "Bad",
                  [m.AuditResult.Terrible]: "Terrible",
                },
                i = {
                  [m.AuditResult.Good]: "Very Good",
                  [m.AuditResult.Ok]: "Needs Improvement",
                  [m.AuditResult.Bad]: "Bad",
                },
                s = o().keyBy(
                  null === _ ||
                    void 0 === _ ||
                    null === (e = _.params) ||
                    void 0 === e
                    ? void 0
                    : e.auditResultOptions
                ),
                a = o().isEmpty(s)
                  ? "594ab13cf54210060008fb06" === _.user
                    ? t
                    : i
                  : s;
              return (0, n.jsxs)("div", {
                style: { display: "flex", alignItems: "center" },
                children: [
                  (0, n.jsx)("strong", { children: "Audit Result:\xa0\xa0" }),
                  (0, n.jsxs)(x.Ph, {
                    onChange: (e) => F(e.target.value),
                    children: [
                      (0, n.jsx)("option", { value: "" }),
                      o().map(a, (e, t) =>
                        (0, n.jsx)("option", { value: t, children: e }, t)
                      ),
                    ],
                  }),
                ],
              });
            })(),
            (() => {
              var e;
              const t =
                _.type === h.TaskType.LidarAnnotation ||
                _.type === h.TaskType.ImageAnnotation ||
                _.type === h.TaskType.LidarTopdown;
              if (!(L && t)) return;
              const i = null === M || void 0 === M ? void 0 : M.category,
                s = null === M || void 0 === M ? void 0 : M.typePrimary,
                a = null === M || void 0 === M ? void 0 : M.typeSecondary,
                r = null === M || void 0 === M ? void 0 : M.hint;
              var l;
              const d = null !== (l = b.aB[i]) && void 0 !== l ? l : [];
              var c;
              const p =
                null !==
                  (c =
                    null === (e = b.aB[i]) || void 0 === e ? void 0 : e[s]) &&
                void 0 !== c
                  ? c
                  : [];
              var m;
              const f = null !== (m = b.Sp[i]) && void 0 !== m ? m : [];
              return (0, n.jsxs)("div", {
                style: { display: "flex", alignItems: "center" },
                children: [
                  (0, n.jsx)("strong", {
                    className: J.feedbackTemplateTitle,
                    children: "Error Categories:",
                  }),
                  (0, n.jsxs)(x.Ph, {
                    value: i,
                    fullWidth: !0,
                    className: J.errorFeedback,
                    onChange: (e) => me({ category: e.target.value }),
                    children: [
                      (0, n.jsx)("option", { value: "" }),
                      o().map(b.UH, (e, t) =>
                        (0, n.jsx)(
                          "option",
                          { value: e, title: e, children: e },
                          t
                        )
                      ),
                    ],
                  }),
                  (0, n.jsx)("strong", {
                    className: J.feedbackTemplateTitle,
                    children: "Type:",
                  }),
                  (0, n.jsxs)(x.Ph, {
                    value: s,
                    fullWidth: !0,
                    className: J.errorFeedback,
                    onChange: (e) => me({ typePrimary: e.target.value }),
                    children: [
                      (0, n.jsx)("option", { value: "" }),
                      o().map(d, (e, t) =>
                        (0, n.jsx)(
                          "option",
                          { value: t, title: t, children: t },
                          t
                        )
                      ),
                    ],
                  }),
                  (0, n.jsxs)(x.Ph, {
                    value: a,
                    fullWidth: !0,
                    className: J.errorFeedback,
                    onChange: (e) => me({ typeSecondary: e.target.value }),
                    children: [
                      (0, n.jsx)("option", { value: "" }),
                      o().map(null !== p && void 0 !== p ? p : [], (e) =>
                        (0, n.jsx)(
                          "option",
                          { value: e, title: e, children: e },
                          e
                        )
                      ),
                    ],
                  }),
                  (0, n.jsx)("strong", {
                    className: J.feedbackTemplateTitle,
                    children: "Frames:",
                  }),
                  (0, n.jsx)("div", {
                    className: J.feedbackFramesContainer,
                    children: (0, n.jsx)(u.oi, {
                      fullWidth: !0,
                      onChange: (e) => me({ frames: e.target.value }),
                    }),
                  }),
                  (0, n.jsx)("strong", {
                    className: J.feedbackTemplateTitle,
                    children: "Hint:",
                  }),
                  (0, n.jsxs)(x.Ph, {
                    value: r,
                    fullWidth: !0,
                    className: J.errorFeedback,
                    onChange: (e) => me({ hint: e.target.value }),
                    children: [
                      (0, n.jsx)("option", { value: "", title: "" }),
                      o().map(f, (e) =>
                        (0, n.jsx)(
                          "option",
                          { value: e, title: e, children: e },
                          e
                        )
                      ),
                    ],
                  }),
                ],
              });
            })(),
            V &&
              (0, n.jsx)(p.zx, {
                style: N,
                onClick: () => $ && $(!0),
                children: "Instruction Feedback",
              }),
            q &&
              (0, n.jsx)(p.zx, {
                style: N,
                onClick: () => Q && Q(!0),
                children: "Edge Case Feedback",
              }),
            (0, n.jsx)(k.D, {
              bid: null === _ || void 0 === _ ? void 0 : _.bid,
            }),
            !o().isNil(X) &&
              !o().isNil(K) &&
              (0, n.jsx)(p.zx, {
                onClick: K,
                style: E,
                children: X
                  ? "Use legacy VideoAnnotation UI"
                  : "Use VideoAnnotation V2 UI",
              }),
            (0, n.jsxs)("div", {
              style: { display: "flex", alignItems: "center" },
              children: [
                de &&
                  (0, n.jsx)(T.dj, {
                    onClick: () => {
                      (0, w.Kz)(w.ju.InTaskSupportEvent, {
                        userId: "12",
                        taskId: "12",
                        eventName: "Help Button Click",
                      }),
                        C.Z.info("InTaskSupportEvent Help Button Click"),
                        ne(!0);
                    },
                  }),
                te && (0, n.jsx)(d.Z, S({}, e)),
              ],
            }),
          ],
        });
      };
      const A = (0, f.ZL)({
          reviewAssignmentFooter: {
            display: "flex",
            alignItems: "center",
            maxHeight: "100%",
            maxWidth: "100%",
            flexWrap: "wrap",
            gap: 12,
            padding: 12,
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderTop: "1px solid rgba(0, 0, 0, 0.05)",
            "&.solid": { position: "relative" },
          },
          darkMode: {
            backgroundColor: g.ZP.colors.gray75,
            color: g.ZP.colors.gray05,
          },
          errorFeedback: { minWidth: "50px", maxWidth: "100px" },
          feedbackTemplateTitle: {
            whiteSpace: "nowrap",
            marginLeft: "10px",
            marginRight: "5px",
          },
          feedbackFramesContainer: { minWidth: "80px", maxWidth: "100px" },
          missingAnnotationsLabel: {
            color: g.ZP.colors.red,
            background: "white",
          },
        }),
        R = {
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
        N = S({}, R, {
          background: "white",
          border: "1px solid rgba(0, 0, 0, 0.15)",
          color: "black",
        }),
        I = S({}, R, { background: "black" }),
        E = S({}, R, { background: "var(--color-RemoBlue)" });
    },
    566896: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return ne;
        },
      });
      var n = i(824246),
        s = i(679892),
        o = i.n(s),
        a = i(827378),
        r = i(942662),
        l = i(113463),
        d = i(252708),
        c = i.n(d),
        p = i(402213),
        u = i(274521),
        x = i(101409),
        b = i(550814);
      class m extends a.Component {
        render() {
          return (0, n.jsx)(b.Z, {
            severity: "info",
            children: (0, n.jsxs)("span", {
              children: [
                (0, n.jsx)(x.Z, { emoji: "\ud83d\udd12" }),
                " ",
                (0, n.jsx)("strong", { children: "CONFIDENTIAL" }),
                " | High security review task",
              ],
            }),
          });
        }
      }
      var h = m,
        f = i(445486),
        v = i(674791),
        g = i(744074),
        j = i(863647),
        y = i(298784),
        k = i.n(y),
        w = i(60042),
        C = i.n(w),
        T = i(792739),
        _ = i(997653),
        S = i(775222),
        A = i(431350),
        R = i(48725),
        N = i(311549),
        I = i(954344);
      function E({ floating: e = !1 }) {
        const { 0: t, 1: i } = (0, a.useState)(!1),
          { 0: s, 1: r } = (0, a.useState)(""),
          l = (0, a.useCallback)(() => {
            i(!0);
          }, []),
          d = (0, a.useCallback)(() => {
            i(!1);
          }, []),
          p = (0, a.useCallback)(() => {
            const e = (0, _.U8)(),
              t = (0, _.dO)(new Error("Error report"), "warning", {
                comment: s,
                lastErrorEventId: e,
              });
            S.c.track("Error report", {
              comment: s,
              lastErrorEventId: e,
              reportErrorEventId: t,
            }),
              d(),
              r(""),
              c().success(
                `Issue report sent successfully! Your issue ID is ${t}`,
                { offset: 40, timeout: "none" }
              );
          }, [s, d]),
          u = (0, a.useCallback)((e) => {
            r(e.target.value);
          }, []);
        return (0, n.jsxs)(a.Fragment, {
          children: [
            (0, n.jsxs)("button", {
              onClick: l,
              "data-tip": "Report issue",
              "data-effect": "solid",
              className:
                "jsx-edb71f497308b5ec " + (C()("btn", { floating: e }) || ""),
              children: [
                (0, n.jsx)(T.G, { icon: "bug" }),
                (0, n.jsx)("span", {
                  className: "jsx-edb71f497308b5ec sr-only",
                  children: "Report issue",
                }),
              ],
            }),
            (0, n.jsxs)(R.ZP, {
              open: t,
              onClose: d,
              maxWidth: "sm",
              fullWidth: !0,
              children: [
                (0, n.jsx)(R.$N, {
                  disableTypography: !0,
                  children: (0, n.jsxs)("div", {
                    className: "jsx-edb71f497308b5ec title-wrapper",
                    children: [
                      (0, n.jsxs)(I.Z, {
                        variant: "h6",
                        component: "h2",
                        children: [
                          (0, n.jsx)(T.G, {
                            icon: "bug",
                            style: { marginRight: "11px" },
                          }),
                          " It looks like we\u2019re having issues",
                        ],
                      }),
                      (0, n.jsxs)("button", {
                        onClick: d,
                        className: "jsx-edb71f497308b5ec close",
                        children: [
                          (0, n.jsx)("span", {
                            className: "jsx-edb71f497308b5ec sr-only",
                            children: "Close",
                          }),
                          (0, n.jsx)(T.G, { icon: "times" }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)(R.cZ, {
                  children: (0, n.jsx)(N.Z, {
                    fullWidth: !0,
                    multiline: !0,
                    size: "large",
                    label: "Tell us more about what happened",
                    rows: "5",
                    onChange: u,
                    value: s,
                  }),
                }),
                (0, n.jsxs)(R.kX, {
                  children: [
                    (0, n.jsx)(A.zx, { onClick: d, children: "Cancel" }),
                    (0, n.jsx)(A.zx, {
                      type: "primary",
                      onClick: p,
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(o(), {
              id: "edb71f497308b5ec",
              children:
                ".btn.jsx-edb71f497308b5ec{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#191919;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:0;bottom:0;color:#a3a3a3;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;margin:0;padding:9px}.btn.jsx-edb71f497308b5ec:active{background:#333}.btn.floating.jsx-edb71f497308b5ec{height:29px;position:absolute;right:16px;top:16px;width:29px;z-index:999}.sr-only.jsx-edb71f497308b5ec{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.title-wrapper.jsx-edb71f497308b5ec{position:relative}.close.jsx-edb71f497308b5ec{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;border:0;color:#808080;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:12px;height:22px;-webkit-justify-content:center;justify-content:center;margin-top:-11px;padding:0;position:absolute;right:0;text-align:center;top:50%;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s;width:22px}.close.jsx-edb71f497308b5ec:hover{background:rgba(225,225,225,1)}",
            }),
          ],
        });
      }
      var F = i(660807),
        P = i(599789),
        z = i(167469),
        Z = i(629586),
        L = i(273151),
        B = i(285556),
        O = i(947072),
        H = i(935760),
        D = i(554211);
      function W({ onUserFlag: e, assignment: t, floating: i = !1 }) {
        var s;
        const r = (0, D.ZP)(
            "enable-user-flagging",
            { projectId: t.project._id },
            !1
          ),
          l =
            (null === t ||
            void 0 === t ||
            null === (s = t.project) ||
            void 0 === s
              ? void 0
              : s._id) && r,
          { 0: d, 1: c } = (0, a.useState)(!1),
          { 0: p, 1: u } = (0, a.useState)(""),
          x = (0, a.useCallback)(() => {
            c(!0);
          }, []),
          b = (0, a.useCallback)(() => {
            c(!1);
          }, []),
          m = (0, a.useCallback)(() => {
            e(P.QuarantineCategory.UserFlaggedBadData, p);
          }, [p, b]),
          h = (0, a.useCallback)((e) => {
            u(e.target.value);
          }, []);
        return l
          ? (0, n.jsxs)(a.Fragment, {
              children: [
                (0, n.jsxs)("button", {
                  onClick: x,
                  "data-tip": "Report bad task",
                  "data-effect": "solid",
                  className:
                    "jsx-edb71f497308b5ec " +
                    (C()("btn", { floating: i }) || ""),
                  children: [
                    (0, n.jsx)(T.G, { icon: "flag" }),
                    (0, n.jsx)("span", {
                      className: "jsx-edb71f497308b5ec sr-only",
                      children: "Flag task",
                    }),
                  ],
                }),
                (0, n.jsxs)(R.ZP, {
                  open: d,
                  onClose: b,
                  maxWidth: "sm",
                  fullWidth: !0,
                  children: [
                    (0, n.jsx)(R.$N, {
                      disableTypography: !0,
                      children: (0, n.jsxs)("div", {
                        className: "jsx-edb71f497308b5ec title-wrapper",
                        children: [
                          (0, n.jsxs)(I.Z, {
                            variant: "h6",
                            component: "h2",
                            children: [
                              (0, n.jsx)(T.G, {
                                icon: "flag",
                                style: { marginRight: "11px" },
                              }),
                              " What's wrong with this task?",
                            ],
                          }),
                          (0, n.jsxs)("button", {
                            onClick: b,
                            className: "jsx-edb71f497308b5ec close",
                            children: [
                              (0, n.jsx)("span", {
                                className: "jsx-edb71f497308b5ec sr-only",
                                children: "Close",
                              }),
                              (0, n.jsx)(T.G, { icon: "times" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(R.cZ, {
                      children: (0, n.jsx)(N.Z, {
                        fullWidth: !0,
                        multiline: !0,
                        size: "large",
                        label:
                          "Tell us why you're flagging - ONLY flag tasks with bad data!",
                        rows: "5",
                        onChange: h,
                        value: p,
                      }),
                    }),
                    (0, n.jsxs)(R.kX, {
                      children: [
                        (0, n.jsx)(A.zx, { onClick: b, children: "Cancel" }),
                        (0, n.jsx)(A.zx, {
                          type: "primary",
                          onClick: m,
                          children: "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(o(), {
                  id: "edb71f497308b5ec",
                  children:
                    ".btn.jsx-edb71f497308b5ec{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#191919;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:0;bottom:0;color:#a3a3a3;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;margin:0;padding:9px}.btn.jsx-edb71f497308b5ec:active{background:#333}.btn.floating.jsx-edb71f497308b5ec{height:29px;position:absolute;right:16px;top:16px;width:29px;z-index:999}.sr-only.jsx-edb71f497308b5ec{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.title-wrapper.jsx-edb71f497308b5ec{position:relative}.close.jsx-edb71f497308b5ec{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;border:0;color:#808080;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-size:12px;height:22px;-webkit-justify-content:center;justify-content:center;margin-top:-11px;padding:0;position:absolute;right:0;text-align:center;top:50%;-webkit-transition:all.3s;-moz-transition:all.3s;-o-transition:all.3s;transition:all.3s;width:22px}.close.jsx-edb71f497308b5ec:hover{background:rgba(225,225,225,1)}",
                }),
              ],
            })
          : (0, n.jsx)(n.Fragment, {});
      }
      var M = i(675749),
        U = i(343743),
        V = i(342374),
        $ = i(432429),
        q = i(355602),
        Q = i(746332),
        G = i(604375),
        Y = i(68649);
      const X = {
          backgroundColor: "lightblue",
          fontSize: "12px",
          paddingLeft: "5px",
          paddingRight: "5px",
          borderRadius: "0px",
          height: "19.5px",
        },
        K = (0, Y.ZL)({
          title: { paddingLeft: "5px" },
          itemValue: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.5,
          },
          dropdown: {
            color: "#fff",
            fontSize: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
            height: "19.5px",
            cursor: "pointer",
          },
          dropdownSelector: { cursor: "pointer" },
          buttonContainer: { height: "19.5px" },
          anchor: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "5px",
            paddingRight: "5px",
            height: "19.5px",
          },
        });
      var J = (e) => {
          const t = K();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: t.title,
                children: (0, n.jsx)(Z.x, {
                  medium: !0,
                  children: "Reset to attempt\xa0",
                }),
              }),
              (0, n.jsxs)("div", {
                className: t.itemValue,
                children: [
                  (0, n.jsx)("div", {
                    className: "review-assignment__dropdown",
                    children: (0, n.jsxs)("select", {
                      value: e.attemptDropdownValue,
                      onChange: e.handleDropdownSelect,
                      className: t.dropdownSelector,
                      children: [
                        (0, n.jsx)("option", {
                          value: -1,
                          children: "Select attempt",
                        }),
                        e.allResponses &&
                          e.allResponses.map((e, t) =>
                            (0, n.jsx)(
                              "option",
                              { value: t, children: t + 1 },
                              t
                            )
                          ),
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: t.buttonContainer,
                    children: (0, n.jsx)(G.u, {
                      title: (0, n.jsx)("div", {
                        children: "Click to reset to selected attempt",
                      }),
                      placement: "top",
                      children: (0, n.jsx)("a", {
                        onClick: e.handleRestoreAnnotationClick,
                        className: t.anchor,
                        children: (0, n.jsx)(r.Z, {
                          style: X,
                          children: " Reset ",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ee = i(555650),
        te = i(989282);
      function ie(e, t, i, n, s, o, a) {
        try {
          var r = e[o](a),
            l = r.value;
        } catch (d) {
          return void i(d);
        }
        r.done ? t(l) : Promise.resolve(l).then(n, s);
      }
      var ne = (e) => {
        var t, i, s, d, x, b, m, y, w, C, _, S, A, R, N, I, Y, X, K, ne, se;
        const oe = (0, L.O)(),
          { 0: ae, 1: re } = (0, a.useState)(void 0),
          le = (0, G.ac)(`(max-width: ${Q.MOBILE_THRESHOLD})`),
          de = (0, te.R)((e) => e.isDrawerOpen),
          ce = (0, te.R)((e) => e.setIsDrawerOpen),
          pe = e.allResponses;
        (0, a.useEffect)(() => (c().closeAll(), () => c().closeAll()), []);
        const ue =
            null ===
              (t =
                null === oe || void 0 === oe
                  ? void 0
                  : oe.labelerStateHook.assignment) || void 0 === t
              ? void 0
              : t.config,
          xe = null === ue || void 0 === ue ? void 0 : ue.quota;
        var be;
        const me =
            null !==
              (be =
                null === ue || void 0 === ue
                  ? void 0
                  : ue.spotterReviewLevel) && void 0 !== be
              ? be
              : P.defaultSpotterReviewLevel,
          he =
            (null === (i = e.assignment) || void 0 === i
              ? void 0
              : i.reviewLevel) === me &&
            (null === ue || void 0 === ue ? void 0 : ue.isSpotterEnabled);
        (0, a.useEffect)(() => {
          if (!he || !xe || !xe.enabled || !xe.weeklyQuota) return;
          const e = (function () {
            var e,
              t =
                ((e = function* () {
                  try {
                    const e = yield (0, B.ZP)(
                      null,
                      "internal/spotter/progress",
                      { method: "GET" }
                    );
                    re(e.progress);
                  } catch (e) {
                    (0, B.cF)(e, "Failed to fetch quota progress.");
                  }
                }),
                function () {
                  var t = this,
                    i = arguments;
                  return new Promise(function (n, s) {
                    var o = e.apply(t, i);
                    function a(e) {
                      ie(o, n, s, a, r, "next", e);
                    }
                    function r(e) {
                      ie(o, n, s, a, r, "throw", e);
                    }
                    a(void 0);
                  });
                });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          e();
        }, [xe, he]);
        const fe = (0, a.useMemo)(() => (0, H.Z)(), []);
        let ve = e.assignment.attemptId;
        ve === e.assignment._id && (ve = fe);
        const ge =
            null === (s = e.assignment) ||
            void 0 === s ||
            null === (d = s.project) ||
            void 0 === d
              ? void 0
              : d.permissionGroup,
          je = `/onboarding-center/project/${
            null === ge || void 0 === ge ? void 0 : ge._id
          }`,
          ye =
            null === (x = e.assignment) ||
            void 0 === x ||
            null === (b = x.project) ||
            void 0 === b
              ? void 0
              : b.auditErrorBatch,
          ke =
            null === (m = e.assignment) ||
            void 0 === m ||
            null === (y = m.project) ||
            void 0 === y
              ? void 0
              : y._id,
          we = null === (w = e.assignment) || void 0 === w ? void 0 : w.user,
          Ce = (0, D.ZP)(
            "rapid-should-show-audit-comments",
            { userId: we, projectId: ke },
            !1
          ),
          Te = (0, D.ZP)(
            "2d-review-level-display",
            {
              projectId:
                null === (C = e.assignment) || void 0 === C
                  ? void 0
                  : C.project._id,
            },
            !1
          ),
          { 0: _e, 1: Se } = (0, a.useState)(-1);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            !le &&
              (0, n.jsxs)("div", {
                children: [
                  e.hasWarning && (0, n.jsx)(p.Z, { isReview: !0 }),
                  "5ece18801c942100253e570a" ===
                    (null === (_ = e.assignment) || void 0 === _
                      ? void 0
                      : _.user) && (0, n.jsx)(h, {}),
                  (0, n.jsxs)("div", {
                    className: "jsx-fa3676b66a9335ac review-assignment__header",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "jsx-fa3676b66a9335ac review-assignment__meta",
                        children:
                          ge &&
                          (0, n.jsxs)("div", {
                            className:
                              "jsx-fa3676b66a9335ac review-assignment__meta-item",
                            children: [
                              (0, n.jsx)("div", {
                                className: "jsx-fa3676b66a9335ac",
                                children: (0, n.jsx)(Z.x, {
                                  medium: !0,
                                  children: "Project",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "jsx-fa3676b66a9335ac review-assignment__meta-item-value",
                                children: e.isScaleStudio
                                  ? (0, n.jsx)(Z.x, {
                                      children:
                                        null === (S = e.assignment) ||
                                        void 0 === S ||
                                        null === (A = S.project) ||
                                        void 0 === A
                                          ? void 0
                                          : A.name,
                                    })
                                  : (0, n.jsx)(Z.x, {
                                      children: (0, n.jsx)("a", {
                                        href: je,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "jsx-fa3676b66a9335ac",
                                        children:
                                          null === ge || void 0 === ge
                                            ? void 0
                                            : ge.title,
                                      }),
                                    }),
                              }),
                            ],
                          }),
                      }),
                      Te &&
                        (0, n.jsx)("div", {
                          className:
                            "jsx-fa3676b66a9335ac review-assignment__meta",
                          children: (0, n.jsxs)("div", {
                            className:
                              "jsx-fa3676b66a9335ac review-assignment__meta-item",
                            children: [
                              (0, n.jsx)("div", {
                                className: "jsx-fa3676b66a9335ac",
                                children: (0, n.jsx)(Z.x, {
                                  medium: !0,
                                  children: "Review Level",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "jsx-fa3676b66a9335ac review-assignment__meta-item-value",
                                children: (0, n.jsxs)(Z.x, {
                                  medium: !0,
                                  children: ["L", e.assignment.reviewLevel],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ye &&
                        (0, n.jsx)(M.Z, {
                          auditErrorBatchId: ye,
                          taskId: e.assignment._id,
                        }),
                      we &&
                        !!ke &&
                        (0, n.jsx)(U.Z, {
                          workerId: we,
                          projectId: ke,
                          reviewer: !0,
                        }),
                      e.claim &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              style: { width: "36px" },
                              className: "jsx-fa3676b66a9335ac",
                            }),
                            (0, n.jsx)(F.Z, {
                              claim: e.claim,
                              projectId: ke,
                              taskId: e.assignment._id,
                              startTimer: e.startTimer,
                              pauseTimer: e.pauseTimer,
                            }),
                          ],
                        }),
                      Ce &&
                        (null === (R = e.params) || void 0 === R
                          ? void 0
                          : R.hypothesis_comments) &&
                        (0, n.jsxs)(r.Z, {
                          textTransform: "none",
                          onClick: e.toggleShowingFeedback,
                          children: [
                            "Reviewer Comments \xa0 ",
                            (0, n.jsx)(l.Z, { children: "?" }),
                          ],
                        }),
                      (0, n.jsx)("div", {
                        style: { width: "36px" },
                        className: "jsx-fa3676b66a9335ac",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "jsx-fa3676b66a9335ac review-assignment__meta",
                        children:
                          e.autosaveEnabled &&
                          e.lastAutosaveTime &&
                          e.triggerAutosave &&
                          (0, n.jsx)("div", {
                            className:
                              "jsx-fa3676b66a9335ac review-assignment__meta-item",
                            children: (0, n.jsx)(g.Z, {
                              variant: "light",
                              lastAutosaveTime: e.lastAutosaveTime,
                              triggerAutosave: e.triggerAutosave,
                              discardAutosave: e.discardAutosave,
                              isAutosaving: e.isAutosaving,
                            }),
                          }),
                      }),
                      (null === (N = e.projectConfig) ||
                      void 0 === N ||
                      null === (I = N.annabelProjectConfig) ||
                      void 0 === I
                        ? void 0
                        : I.enableSubmit) &&
                        (0, n.jsx)("div", {
                          className:
                            "jsx-fa3676b66a9335ac review-assignment__meta",
                          children: (0, n.jsx)(ee.Z, {
                            subtaskId:
                              null === (Y = e.assignment) || void 0 === Y
                                ? void 0
                                : Y._id,
                            triggerAutosave: e.autosaveEnabled
                              ? e.triggerAutosave
                              : void 0,
                          }),
                        }),
                      e.restoreBaseAnnotations &&
                        e.hasBaseAnnotations &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              style: { width: "36px" },
                              className: "jsx-fa3676b66a9335ac",
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "jsx-fa3676b66a9335ac review-assignment__meta",
                              children: (0, n.jsx)("div", {
                                className:
                                  "jsx-fa3676b66a9335ac review-assignment__meta-item",
                                children: (0, n.jsx)(j.Z, {
                                  variant: "light",
                                  restoreBaseAnnotations:
                                    e.restoreBaseAnnotations,
                                }),
                              }),
                            }),
                          ],
                        }),
                      pe &&
                        pe.length &&
                        e.restoreAnnotationsFromAttempt &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              style: { width: "36px" },
                              className: "jsx-fa3676b66a9335ac",
                            }),
                            (0, n.jsx)("div", {
                              style: {
                                justifyContent: "center",
                                alignItems: "center",
                              },
                              className:
                                "jsx-fa3676b66a9335ac review-assignment__meta-item",
                              children: (0, n.jsx)(J, {
                                attemptDropdownValue: _e,
                                handleDropdownSelect: (e) =>
                                  Se(parseInt(e.target.value)),
                                allResponses: pe,
                                handleRestoreAnnotationClick: () =>
                                  -1 !== _e && e.restoreAnnotationsFromAttempt
                                    ? e.restoreAnnotationsFromAttempt(_e)
                                    : void 0,
                              }),
                            }),
                          ],
                        }),
                      !!e.scenarioId &&
                        e.setScenarioTime &&
                        (0, n.jsx)("div", {
                          className:
                            "jsx-fa3676b66a9335ac task-header__meta task-header__item",
                          children: (0, n.jsx)(V.Z, {
                            scenarioId: e.scenarioId,
                            setScenarioTime: e.setScenarioTime,
                          }),
                        }),
                      !!e.location &&
                        (0, n.jsx)("div", {
                          className:
                            "jsx-fa3676b66a9335ac task-header__meta task-header__item",
                          children: (0, n.jsx)($.Z, {
                            subtaskId: e.assignment._id,
                          }),
                        }),
                      (localStorage.showReviewLevelInHeader || he) &&
                        (0, n.jsxs)("div", {
                          className:
                            "jsx-fa3676b66a9335ac review-assignment__meta-item",
                          children: [
                            (0, n.jsx)("div", {
                              className: "jsx-fa3676b66a9335ac",
                              children: (0, n.jsx)(Z.x, {
                                medium: !0,
                                children: "Review Level\xa0",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "jsx-fa3676b66a9335ac review-assignment__meta-item-value",
                              children: (0, n.jsx)(Z.x, {
                                mono: !0,
                                children: he
                                  ? "Spotter"
                                  : `R${e.assignment.reviewLevel}`,
                              }),
                            }),
                          ],
                        }),
                      k().isNumber(ae) &&
                        (0, n.jsxs)("div", {
                          className:
                            "jsx-fa3676b66a9335ac review-assignment__meta-item",
                          children: [
                            (0, n.jsx)("div", {
                              className: "jsx-fa3676b66a9335ac",
                              children: (0, n.jsx)(Z.x, {
                                medium: !0,
                                children: "Weekly Quota Progress\xa0",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "jsx-fa3676b66a9335ac review-assignment__meta-item-value",
                              children: (0, n.jsxs)(Z.x, {
                                mono: !0,
                                children: [
                                  ae,
                                  "/",
                                  null === xe || void 0 === xe
                                    ? void 0
                                    : xe.weeklyQuota,
                                ],
                              }),
                            }),
                          ],
                        }),
                      (0, n.jsx)("div", {
                        className: "jsx-fa3676b66a9335ac",
                        children: (0, n.jsx)("div", {
                          className: "jsx-fa3676b66a9335ac",
                          children:
                            "fixannotation" === e.assignment.type &&
                            (0, n.jsxs)("div", {
                              className: "jsx-fa3676b66a9335ac",
                              children: [
                                (0, n.jsx)("a", {
                                  className: "jsx-fa3676b66a9335ac",
                                  children: " Hide Original Annotation: ",
                                }),
                                (0, n.jsx)("input", {
                                  type: "checkbox",
                                  name: "toggle_original_annotation",
                                  checked: !!e.hideOriginalAnnotation,
                                  onClick: (t) => {
                                    var i;
                                    return null ===
                                      (i = e.onChangeHideOriginal) ||
                                      void 0 === i
                                      ? void 0
                                      : i.call(e, t.currentTarget.checked);
                                  },
                                  className: "jsx-fa3676b66a9335ac",
                                }),
                              ],
                            }),
                        }),
                      }),
                      e.bonus && (0, n.jsx)(f.Z, { bonus: e.bonus }),
                      e.bonus &&
                        (null === (X = e.assignment) ||
                        void 0 === X ||
                        null === (K = X.project) ||
                        void 0 === K
                          ? void 0
                          : K._id) &&
                        (0, n.jsx)(v.Z, {
                          projectId:
                            null === (ne = e.assignment) ||
                            void 0 === ne ||
                            null === (se = ne.project) ||
                            void 0 === se
                              ? void 0
                              : se._id,
                          isAttempter: !1,
                        }),
                      void 0 !== e.recentAccuracy &&
                        (0, n.jsx)(u.Z, {
                          accuracy: e.recentAccuracy,
                          vertical: !0,
                        }),
                      void 0 !== e.passRate &&
                        (0, n.jsx)(u.Z, {
                          accuracy: e.passRate,
                          numCompleted: e.passNum,
                          vertical: !0,
                          project: k().get(
                            e.assignment.project,
                            "_id",
                            e.assignment.project
                          ),
                        }),
                      (0, n.jsxs)("div", {
                        className:
                          "jsx-fa3676b66a9335ac review-assignment__meta",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "jsx-fa3676b66a9335ac review-assignment__meta-item",
                            children: [
                              (0, n.jsx)("div", {
                                className: "jsx-fa3676b66a9335ac",
                                children: (0, n.jsx)(Z.x, {
                                  medium: !0,
                                  children: "Task ID\xa0",
                                }),
                              }),
                              (0, n.jsx)("div", {
                                className:
                                  "jsx-fa3676b66a9335ac review-assignment__meta-item-value",
                                children: e.isScaleStudio
                                  ? (0, n.jsx)(Z.x, {
                                      mono: !0,
                                      children: e.studioTaskId,
                                    })
                                  : (0, n.jsx)(Z.x, {
                                      mono: !0,
                                      children: e.assignment._id,
                                    }),
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            style: { width: "36px" },
                            className: "jsx-fa3676b66a9335ac",
                          }),
                          e.taskMetadata &&
                            (0, n.jsx)(q.Z, {
                              fromReviewHeader: !1,
                              taskMetadata: e.taskMetadata,
                            }),
                          !e.isScaleStudio &&
                            (0, n.jsxs)("div", {
                              className:
                                "jsx-fa3676b66a9335ac review-assignment__meta-item",
                              children: [
                                (0, n.jsx)("div", {
                                  className: "jsx-fa3676b66a9335ac",
                                  children: (0, n.jsx)(Z.x, {
                                    medium: !0,
                                    children: "Attempt ID\xa0",
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "jsx-fa3676b66a9335ac review-assignment__meta-item-value",
                                  children: (0, n.jsx)(Z.x, {
                                    mono: !0,
                                    children: ve,
                                  }),
                                }),
                              ],
                            }),
                          (0, n.jsx)("div", {
                            style: { width: "36px" },
                            className: "jsx-fa3676b66a9335ac",
                          }),
                          e.onUserFlag &&
                            (0, n.jsx)(W, {
                              onUserFlag: e.onUserFlag,
                              assignment: e.assignment,
                            }),
                          P.lidarTypes.includes(e.assignment.type) &&
                            (0, n.jsx)(E, {}),
                          e.assignment.type === z.TaskType.Chat &&
                            (0, n.jsx)(r.Z, {
                              onClick: () => ce(!de),
                              children: (0, n.jsx)(T.G, { icon: "thumbtack" }),
                            }),
                        ],
                      }),
                      (0, n.jsx)(o(), {
                        id: "fa3676b66a9335ac",
                        children:
                          ".review-assignment__header.jsx-fa3676b66a9335ac{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:12px;-webkit-box-shadow:0px 0px 8px rgba(0,0,0,.05);-moz-box-shadow:0px 0px 8px rgba(0,0,0,.05);box-shadow:0px 0px 8px rgba(0,0,0,.05);background:rgba(0,0,0,1);color:#fff;font-size:15px;white-space:nowrap}.review-assignment__meta.jsx-fa3676b66a9335ac{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.review-assignment__meta.jsx-fa3676b66a9335ac a.jsx-fa3676b66a9335ac{color:inherit;text-decoration:underline}.review-assignment__meta-item-value.jsx-fa3676b66a9335ac{opacity:.5}.review-assignment__benchmark-toggle.jsx-fa3676b66a9335ac{font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;opacity:.3}",
                      }),
                    ],
                  }),
                ],
              }),
            (() => {
              var t;
              const {
                  corruptionAccuracy: i,
                  improvedAccuracyCorruptionTypes: s,
                  lowAccuracyCorruptionTypes: o,
                  postReviewSubmission: a,
                } = (null === (t = e.claim) || void 0 === t
                  ? void 0
                  : t.corruptionFeedback) || {},
                r = e.assignment.type;
              return (
                (0 === i || i) &&
                (o || 0) &&
                !a &&
                !(
                  100 === i && P.skipCorrectCorruptionModalTaskTypes.includes(r)
                ) &&
                (0, n.jsx)(O.Z, {
                  lowAccuracyCorruptionTypes: o,
                  improvedAccuracyCorruptionTypes: s,
                  corruptionAccuracy: i,
                  taskType: r,
                })
              );
            })(),
          ],
        });
      };
    },
    828254: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return K;
        },
      });
      var n = i(824246),
        s = i(827378),
        o = i(298784),
        a = i.n(o),
        r = i(669749),
        l = i(872383),
        d = i(279220);
      function c(e, t, i, n, s, o, a) {
        try {
          var r = e[o](a),
            l = r.value;
        } catch (d) {
          return void i(d);
        }
        r.done ? t(l) : Promise.resolve(l).then(n, s);
      }
      var p = ({ feature: e, children: t }) =>
          t(
            (function (e) {
              const { loading: t, value: i = !1 } = (0, d.Z)(
                ((n = function* () {
                  return (0, l.V3)({ feature: e });
                }),
                function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (i, s) {
                    var o = n.apply(e, t);
                    function a(e) {
                      c(o, i, s, a, r, "next", e);
                    }
                    function r(e) {
                      c(o, i, s, a, r, "throw", e);
                    }
                    a(void 0);
                  });
                }),
                [e]
              );
              var n;
              return { loading: t, enabled: i };
            })(e)
          ),
        u = i(203577),
        x = i(250822),
        b = i(397672),
        m = i(106993),
        h = i(832763),
        f = i(50682),
        v = i.n(f),
        g = i(208528),
        j = i(431350),
        y = i(687192),
        k = i(599789),
        w = i(167469),
        C = i(524991),
        T = i(986004),
        _ = i(720408),
        S = i(792739),
        A = i(273151),
        R = i(55539),
        N = i(722974),
        I = i(965065),
        E = i(285556),
        F = i(604375);
      function P(e, t, i, n, s, o, a) {
        try {
          var r = e[o](a),
            l = r.value;
        } catch (d) {
          return void i(d);
        }
        r.done ? t(l) : Promise.resolve(l).then(n, s);
      }
      const z = ({
          assignmentId: e,
          enableRemotasksToggleEdgeCase: t,
          isEdgeCase: i,
          setIsEdgeCase: s,
          disableEdgeCaseButton: o,
          setDisableEdgeCaseButton: a,
        }) => {
          const r = Z(),
            l = (function () {
              var t,
                n =
                  ((t = function* () {
                    try {
                      a(!0);
                      const t = e;
                      let n = yield (0, E.ZP)(
                        null,
                        `internal/contentUnderstanding/get_task_tags/${t}`
                      );
                      if (n) {
                        const e = n.indexOf(I.$G.EdgeCase);
                        -1 === e ? n.push(I.$G.EdgeCase) : n.splice(e, 1);
                      } else n = [I.$G.EdgeCase];
                      yield (0, E.ZP)(
                        null,
                        "internal/contentUnderstanding/change_tags_worker",
                        { method: "POST", body: { subtaskId: t, tags: n } }
                      ),
                        (i = n.includes(I.$G.EdgeCase)),
                        s(!!i),
                        a(!1);
                    } catch (t) {
                      (0, E.vj)(t, { handleHttp: !0 });
                    }
                  }),
                  function () {
                    var e = this,
                      i = arguments;
                    return new Promise(function (n, s) {
                      var o = t.apply(e, i);
                      function a(e) {
                        P(o, n, s, a, r, "next", e);
                      }
                      function r(e) {
                        P(o, n, s, a, r, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return n.apply(this, arguments);
              };
            })();
          return (0, n.jsx)(n.Fragment, {
            children:
              t &&
              (0, n.jsx)("button", {
                className: r.edgeCaseButton,
                onClick: () => l(),
                disabled: o,
                style: {
                  background: i ? "rgba(221, 69, 211, 1)" : "#000000",
                  opacity: i ? 1 : 0.4,
                },
                children: "Edge Case",
              }),
          });
        },
        Z = (0, F.ZL)({
          edgeCaseButton: {
            background: "rgba(221, 69, 211, 1)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 16px",
            boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.05)",
            borderRadius: "var(--border-radius)",
            fontFamily: "var(--font-family)",
            fontWeight: "bold",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            cursor: "pointer",
            transition: "box-shadow 0.2s",
            marginLeft: 15,
            border: 0,
          },
        });
      var L = i(554211),
        B = i(807556),
        O = i(650735),
        H = i(841892),
        D = i(276522),
        W = i(810365),
        M = i(59524),
        U = i(433310),
        V = i(298869),
        $ = i(339963);
      function q(e, t, i, n, s, o, a) {
        try {
          var r = e[o](a),
            l = r.value;
        } catch (d) {
          return void i(d);
        }
        r.done ? t(l) : Promise.resolve(l).then(n, s);
      }
      function Q(e) {
        return function () {
          var t = this,
            i = arguments;
          return new Promise(function (n, s) {
            var o = e.apply(t, i);
            function a(e) {
              q(o, n, s, a, r, "next", e);
            }
            function r(e) {
              q(o, n, s, a, r, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function G(e, t, i) {
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
      function Y(e) {
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
              G(e, t, i[t]);
            });
        }
        return e;
      }
      const X = (e) => {
        var t, i, o, l, d, c, h, f, F, P, Z, q, G, X, K, ie, le, de;
        const ce = (0, A.O)(),
          {
            accept: pe,
            annotationCount: ue,
            assignment: xe,
            auditResult: be,
            canEdit: me,
            canRejectWithChanges: he,
            canReturnToQueue: fe,
            commentsInput: ve,
            corruptionAccuracy: ge,
            disableAccept: je,
            discardChanges: ye,
            disableCancelButton: ke,
            fixable: we,
            getTimeSpent: Ce,
            handleCommentsChange: Te,
            setTaskFeedback: _e,
            handleCustomerPreAudit: Se,
            improvedAccuracyCorruptionTypes: Ae,
            isAssignmentLoading: Re,
            isCustomerQAMode: Ne,
            isReturnToQueueDisabled: Ie = !1,
            isScaleStudio: Ee = !1,
            isSubmitDisabled: Fe = !1,
            isSubmitting: Pe,
            lintErrors: ze,
            lowAccuracyCorruptionTypes: Ze,
            madeChanges: Le,
            makeChanges: Be,
            makeChangesColor: Oe,
            makingChanges: He,
            nextTask: De,
            onRejectFixableWithNoFix: We,
            onUserSkip: Me,
            onUserSkipBatch: Ue,
            postCompletionFeedback: Ve,
            redoWording: $e,
            reject: qe,
            rejectWithChanges: Qe,
            returnToQueue: Ge,
            returnToQueueDisabledTooltip: Ye,
            submitDisabledTooltip: Xe,
            submitForZooxSteamCategorization: Ke,
            toggleShowingErrors: Je,
            workerId: et,
            isCorpUser: tt,
            onUserReport: it,
            getReviewChanges: nt,
            reRunLinter: st,
          } = e,
          ot = te(),
          { 0: at, 1: rt } = (0, s.useState)(!1),
          { 0: lt, 1: dt } = (0, s.useState)(!1),
          [ct, pt] = (0, g.Z)(!1),
          ut = xe.project && (0, O.Tv)(xe.project),
          xt = xe.project && (0, O.bd)(xe.project),
          bt = !!xe.isInstructionTask,
          mt = !ut && xe.type !== w.TaskType.Categorization,
          ht = xe.type === w.TaskType.LidarAnnotation,
          ft = [w.TaskType.TextCollection, w.TaskType.Chat].includes(xe.type),
          {
            enableSensitiveContentReporting: vt,
            enableHighRiskSensitiveContentReporting: gt,
            enableRegisterTaskAttemptForSensitiveContentReporting: jt,
            useBulbaSensitiveContentReporting: yt,
          } = (0, D.Z)(
            xe.project,
            xe.type,
            null === (t = xe.project) || void 0 === t ? void 0 : t.taskCustomer,
            !0
          ),
          kt = vt || gt,
          wt = [
            w.TaskType.LidarAnnotation,
            w.TaskType.NamedEntityRecognition,
            w.TaskType.TextCollection,
            w.TaskType.MultiModalTranscription,
          ].includes(xe.type),
          Ct = (e) => {
            ye(), pt(e);
          },
          Tt = () => {
            dt(!0);
          },
          _t = (function () {
            var e = Q(function* (e) {
              null === We || void 0 === We || We(e), dt(!1);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          St = () => {
            dt(!1);
          },
          At = !xt && (ht || xe.type === w.TaskType.LidarSegmentation),
          Rt =
            null === ce ||
            void 0 === ce ||
            null === (i = ce.labelerStateHook) ||
            void 0 === i ||
            null === (o = i.assignment) ||
            void 0 === o
              ? void 0
              : o.config,
          Nt = (0, R.x)(xe),
          It = (0, R.R)(xe),
          Et =
            (Nt &&
              !!(null === Rt || void 0 === Rt
                ? void 0
                : Rt.inlineCommentsEnabled)) ||
            (null === xe ||
            void 0 === xe ||
            null === (l = xe.params) ||
            void 0 === l
              ? void 0
              : l.isRedactionVerification),
          Ft =
            Et &&
            a().isEqual(
              null === ce ||
                void 0 === ce ||
                null === (d = ce.labelerStateHook) ||
                void 0 === d
                ? void 0
                : d.annotationsHook.inlineCommentsHook.allComments,
              null === ce ||
                void 0 === ce ||
                null === (c = ce.labelerStateHook) ||
                void 0 === c
                ? void 0
                : c.annotationsHook.inlineCommentsHook.initialComments
            ) &&
            !(null === xe ||
            void 0 === xe ||
            null === (h = xe.params) ||
            void 0 === h
              ? void 0
              : h.isRedactionVerification),
          Pt =
            (null === ce ||
            void 0 === ce ||
            null === (f = ce.labelerStateHook) ||
            void 0 === f ||
            null === (F = f.assignment) ||
            void 0 === F
              ? void 0
              : F.type) === w.TaskType.SegmentAnnotation,
          zt = { postCompletionFeedback: Ve },
          Zt = (function () {
            var e = Q(function* (e, t, i) {
              Et && Qe ? yield Qe(e, t, i) : yield Ge(e, t, i);
            });
            return function (t, i, n) {
              return e.apply(this, arguments);
            };
          })(),
          Lt = (function () {
            var e = Q(function* (e, t, i) {
              yield pe(e, t, i);
            });
            return function (t, i, n) {
              return e.apply(this, arguments);
            };
          })(),
          Bt = (function () {
            var e = Q(function* (e, t, i) {
              yield qe(e, t, i);
            });
            return function (t, i, n) {
              return e.apply(this, arguments);
            };
          })(),
          Ot = (function () {
            var e = Q(function* (e, t) {
              if (jt) {
                const i = !0;
                yield pe(u.a5.Approve, i, e, t);
              }
              null === it || void 0 === it || it(e, t);
            });
            return function (t, i) {
              return e.apply(this, arguments);
            };
          })();
        (0, H.p7)(
          { action: Be, disabled: !Ee || lt || ct || He || It || !we },
          {
            action: () => {
              Ct(!0);
            },
            disabled: !Ee || He || lt || ct,
          },
          {
            action: () => {
              ct && pt(!1), He && ye();
            },
            disabled: !Ee,
          }
        ),
          (0, H.ve)(
            {
              action: () => {
                var e;
                const t = wt
                  ? void 0
                  : {
                      inlineComments:
                        null === ce ||
                        void 0 === ce ||
                        null === (e = ce.labelerStateHook) ||
                        void 0 === e
                          ? void 0
                          : e.annotationsHook.inlineCommentsHook.allComments,
                    };
                Me({
                  _id: xe._id,
                  task_id: xe._id,
                  type: xe.type,
                  project: xe.project,
                  response: t,
                  isReview: !0,
                });
              },
              disabled:
                !Ee ||
                (!(null ===
                  (Z =
                    null === ce ||
                    void 0 === ce ||
                    null === (P = ce.labelerStateHook) ||
                    void 0 === P
                      ? void 0
                      : P.annotationsHook.inlineCommentsHook.allComments) ||
                void 0 === Z
                  ? void 0
                  : Z.length) &&
                  !wt),
            },
            !0
          );
        const Ht = (e) =>
            !a().isNil(xe.feedbackTemplate) &&
            (0, _.validateIsTaskFeedbackTemplate)(xe.feedbackTemplate) &&
            e in xe.feedbackTemplate,
          Dt = (e, t, i, n) => (e, i) => {
            const s = [];
            for (const t of xe.feedbackTemplate[n]) {
              const n = t.title;
              if (t.inputType === _.TaskFeedbackInput.Text) {
                const t = { title: n, response: e[n] };
                s.push(t);
              } else {
                const e = { title: n, response: i[n] };
                s.push(e);
              }
            }
            void 0 !== _e ? _e(s, t) : t();
          },
          Wt = (0, L.ZP)("remotasks-toggle-edge-case", { userId: et }, !1);
        var Mt;
        const Ut = (0, L.ZP)(
          "use-bad-prelabels-skip",
          {
            projectId:
              null !==
                (Mt =
                  null === (q = xe.project) || void 0 === q ? void 0 : q._id) &&
              void 0 !== Mt
                ? Mt
                : xe.project,
          },
          !1
        );
        var Vt;
        const $t = (0, L.ZP)(
          "use-ostrich-math-categories-skip",
          {
            projectId:
              null !==
                (Vt =
                  null === (G = xe.project) || void 0 === G ? void 0 : G._id) &&
              void 0 !== Vt
                ? Vt
                : xe.project,
          },
          !1
        );
        var qt;
        const Qt = (0, L.ZP)(
            "use-not-equipped-skip",
            {
              projectId:
                null !==
                  (qt =
                    null === (X = xe.project) || void 0 === X
                      ? void 0
                      : X._id) && void 0 !== qt
                  ? qt
                  : xe.project,
            },
            !1
          ),
          { 0: Gt, 1: Yt } = (0, s.useState)(!1),
          { 0: Xt, 1: Kt } = (0, s.useState)(!1),
          { 0: Jt, 1: ei } = (0, s.useState)(!1),
          ti = (0, L.ZP)(
            "in_task_support_poc_dev",
            { userId: xe.loggedUserId },
            !1
          );
        var ii;
        const ni = (0, L.ZP)(
            "in_task_support_poc_dev_by_project",
            {
              projectId:
                null !==
                  (ii =
                    null === (K = xe.project) || void 0 === K
                      ? void 0
                      : K.id) && void 0 !== ii
                  ? ii
                  : null === (ie = xe.project) || void 0 === ie
                  ? void 0
                  : ie._id,
            },
            !1
          ),
          si = ti && ni;
        var oi;
        const ai = (0, L.ZP)(
            "enable-model-response-comparison-modal",
            {
              projectId:
                null !==
                  (oi =
                    null === (le = xe.project) || void 0 === le
                      ? void 0
                      : le.id) && void 0 !== oi
                  ? oi
                  : null === (de = xe.project) || void 0 === de
                  ? void 0
                  : de._id,
            },
            !1
          ),
          [ri, li] = s.useState(!1),
          di = () => {
            var e;
            return null !==
              (e = a().get(
                xe,
                "fixResponse.annotations.rlhf_history.response[0].interactions[0].prompt"
              )) && void 0 !== e
              ? e
              : a().get(xe, "params.metadata.prompt");
          },
          ci = () => {
            var e;
            return null !==
              (e = a().get(
                xe,
                "fixResponse.annotations.rlhf_history.response[0].interactions[0].baselineResponse"
              )) && void 0 !== e
              ? e
              : a().get(
                  xe,
                  "params.metadata.BULBA_suggested_baseline_response[0]"
                );
          };
        (0, s.useEffect)(() => {
          const e = (function () {
            var e = Q(function* () {
              if (xe.type === w.TaskType.TextCollection)
                try {
                  const e = xe._id,
                    t = yield (0, E.ZP)(
                      null,
                      `internal/contentUnderstanding/get_task_tags/${e}`
                    );
                  Array.isArray(t) && t.includes(I.$G.EdgeCase)
                    ? Yt(!0)
                    : Yt(!1);
                } catch (e) {
                  (0, E.vj)(e, { handleHttp: !0 });
                }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e();
        }, [xe._id, xe.type, Gt, Yt]);
        const pi = (e) =>
            e.filter(
              (e) => !e.reviewLevels || e.reviewLevels.includes(xe.reviewLevel)
            ),
          ui = () =>
            (0, n.jsx)(n.Fragment, {
              children:
                xe.type === w.TaskType.TextCollection &&
                (0, n.jsx)(z, {
                  assignmentId: xe._id,
                  enableRemotasksToggleEdgeCase:
                    null !== Wt && void 0 !== Wt && Wt,
                  isEdgeCase: Gt,
                  setIsEdgeCase: Yt,
                  disableEdgeCaseButton: Xt,
                  setDisableEdgeCaseButton: Kt,
                }),
            }),
          xi = () =>
            (0, n.jsx)(n.Fragment, {
              children:
                si &&
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)(V.dj, {
                      onClick: () => {
                        (0, M.Kz)(M.ju.InTaskSupportEvent, {
                          userId: "12",
                          taskId: "12",
                          eventName: "Help Button Click",
                        }),
                          U.Z.info("InTaskSupportEvent Help Button Click"),
                          ei(!0);
                      },
                    }),
                    (0, n.jsx)(V.ZP, {
                      openModal: Jt,
                      taskId: xe.id,
                      userId: xe.loggedUserId,
                      onClose: () => ei(!1),
                    }),
                  ],
                }),
            }),
          bi = () => {
            if (
              !(null === ce || void 0 === ce
                ? void 0
                : ce.labelerStateHook.annotationsHook.ontologyChangeMap) ||
              w.ReviewLevelOrder.indexOf(xe.reviewLevel) <
                w.ReviewLevelOrder.indexOf(k.ReviewLevel.Level1)
            )
              return (0, n.jsx)(n.Fragment, {});
            return (0, n.jsx)(
              j.zx,
              {
                htmlType: "button",
                style: Y({}, oe, { opacity: Pe ? 0.5 : 1 }),
                onClick: () => {
                  var e, t;
                  null === ce ||
                    void 0 === ce ||
                    null === (e = ce.labelerStateHook) ||
                    void 0 === e ||
                    e.annotationsHook.setAnnotationFlags((e) =>
                      a().mapValues(e, (e) =>
                        Y(
                          {},
                          e,
                          { confirmed: !0 },
                          e.attributes && {
                            attributes: a().mapValues(e.attributes, (e) =>
                              Y({}, e, { confirmed: !0 })
                            ),
                          }
                        )
                      )
                    ),
                    null === ce ||
                      void 0 === ce ||
                      null === (t = ce.labelerStateHook) ||
                      void 0 === t ||
                      t.annotationsHook.setGlobalAttributeFlags((e) =>
                        a().mapValues(e, (e) => Y({}, e, { confirmed: !0 }))
                      );
                },
                children: "Confirm All Flags",
              },
              "confirmAllFlagsButton"
            );
          },
          mi = () =>
            kt &&
            (0, n.jsx)("div", {
              "data-tip":
                "Use this button to report any sensitive content in the task.",
              children: (0, n.jsx)(B.Z, {
                disabled: Pe,
                handleReport: Ot,
                enableSensitiveContentReporting: vt,
                enableHighRiskSensitiveContentReporting: gt,
                useBulbaSensitiveContentReporting: yt,
              }),
            }),
          hi = ({ batch: e = !1 } = {}) => {
            var t, i, s;
            return me
              ? Nt
                ? null
                : e || Me
                ? e && !Ue
                  ? null
                  : Ee
                  ? (0, n.jsx)(b.Z, {
                      id: xe._id,
                      type: xe.type,
                      project: xe.project,
                      canSkip:
                        !!(null ===
                          (i =
                            null === ce ||
                            void 0 === ce ||
                            null === (t = ce.labelerStateHook) ||
                            void 0 === t
                              ? void 0
                              : t.annotationsHook.inlineCommentsHook
                                  .allComments) || void 0 === i
                          ? void 0
                          : i.length) || wt,
                      response: wt
                        ? void 0
                        : {
                            inlineComments:
                              null === ce ||
                              void 0 === ce ||
                              null === (s = ce.labelerStateHook) ||
                              void 0 === s
                                ? void 0
                                : s.annotationsHook.inlineCommentsHook
                                    .allComments,
                          },
                      isReview: !0,
                      handleSkip: Me,
                    })
                  : (0, n.jsx)(
                      x.Z,
                      {
                        enableBadPrelabelSkip: Ut,
                        enableOstrichMathSkip: $t,
                        enableNotEquippedSkip: Qt,
                        enableOtherReason: e,
                        skipBodyText: e ? xe.batchSkipText : null,
                        skipHeaderText: e
                          ? "Having a hard time with these tasks?"
                          : void 0,
                        confirmButtonText: e ? "Opt out" : "Skip task",
                        buttonText: e ? "Opt out" : "Skip",
                        style: Y({}, oe, { opacity: Pe ? 0.5 : 1 }),
                        handleSkip: e ? Ue : Me,
                        bid: null === xe || void 0 === xe ? void 0 : xe.bid,
                        isInstructionTask: bt,
                        disabled: Pe,
                      },
                      e ? "skipBatchButton" : "skipButton"
                    )
                : null
              : null;
          },
          fi = (e) => {
            var t, i, s;
            const o = Nt ? "Reject" : $e || "Send Back To Queue";
            let a;
            Ft
              ? (a = `You must add comments (${
                  Pt ? "shift + " : ""
                }right click) before rejecting`)
              : e
              ? (a =
                  Ye ||
                  "Send back to queue disabled due to misuse or task has been sent back too many times. Please only send back if most of the task is not done.")
              : Le && !ht && (a = "This will discard your current edits");
            const l = At && !ve,
              d =
                !!(null === xe ||
                void 0 === xe ||
                null === (t = xe.params) ||
                void 0 === t
                  ? void 0
                  : t.requireChoiceForSBTQ) && !be,
              c = l || d || Ft,
              p = (t, i, s) => {
                const a = t || e || Ft;
                if (Ht(_.FeedbackConditions.SBTQ)) {
                  const e = pi(xe.feedbackTemplate.sbtq);
                  if (e.length)
                    return (0, n.jsx)(m.Z, {
                      handleSubmitFeedback: Dt(
                        0,
                        i,
                        0,
                        _.FeedbackConditions.SBTQ
                      ),
                      style: Y({}, ae, { opacity: a ? 0.5 : 1 }),
                      feedbackEntries: e,
                      buttonText: o,
                      confirmButtonText: s,
                      disabled: a,
                    });
                }
                return (0, n.jsxs)(j.zx, {
                  style: Y({}, ae, { opacity: a || Pe ? 0.5 : 1 }),
                  disabled: a || Pe,
                  onClick: () => {
                    Ct();
                  },
                  children: [
                    o,
                    xt &&
                      (0, n.jsx)("span", {
                        style: { marginLeft: 4 },
                        children: (0, n.jsx)(W.x, { trigger: "alt+r" }),
                      }),
                  ],
                });
              };
            return Ne
              ? (0, n.jsx)(
                  r.S5,
                  {
                    type: "reject",
                    onClick: () => {
                      Ct();
                    },
                    children: o,
                  },
                  "redo-link" + !!a
                )
              : (0, n.jsx)(
                  u.HA,
                  Y(
                    {
                      hideOnFail: ht,
                      annotationCount: ue,
                      nextTaskHandler: De,
                      sendHandler: Zt,
                      taskProjectId:
                        null === (i = xe.project) || void 0 === i
                          ? void 0
                          : i._id,
                      getTimeSpent: Ce,
                      taskType: xe.type,
                      taskUserId:
                        null === (s = xe.project) || void 0 === s
                          ? void 0
                          : s.taskCustomer,
                      type: u.a5.SendBackToQueue,
                      lowAccuracyCorruptionTypes: Ze,
                      improvedAccuracyCorruptionTypes: Ae,
                      corruptionAccuracy: ge,
                      disableModal:
                        Ne || !k.lidarTypesWithLinking.includes(xe.type),
                      autoloadNextAssignment: !k.lidarTypesWithLinking.includes(
                        xe.type
                      ),
                      shortcutEnabled: Ee && !c && !Fe && !Pe,
                    },
                    zt,
                    {
                      children: ({ disabled: e, onClick: t, text: i }) =>
                        (0, n.jsxs)("div", {
                          "data-for": "return-to-queue",
                          children: [
                            p(e, t, i),
                            (0, n.jsx)(v(), { id: "return-to-queue" }),
                          ],
                        }),
                    }
                  )
                );
          },
          vi = () =>
            ze && Je && ze.length
              ? (0, n.jsx)(N.Z, { lintErrors: ze, toggleShowingErrors: Je })
              : null,
          gi = () => {
            var t, i, s, o;
            const a = bi();
            let l = null;
            !fe || (Ne && !ht) || he || (l = fi(Ie));
            const d =
              Te &&
              (0, n.jsx)(
                r.AM,
                {
                  required: At && !ft,
                  commentsInput: ve,
                  handleCommentsChange: Te,
                },
                "feedbackInput"
              );
            let c,
              p = !1;
            Le
              ? ht && !ve
                ? ((p = !0),
                  (c =
                    "Please provide feedback to help the tasker improve in future tasks."))
                : e.isSubmitDisabled && ((p = !0), (c = Xe))
              : ((p = !0),
                (c =
                  "Please make at least one change and keep all fields valid"));
            const x = (e, t, i, s) => {
                const o = (function () {
                  var e = Q(function* () {
                    if (ai && ci() && di()) {
                      if (st && !(yield st())) return;
                      li(!0);
                    } else t();
                  });
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                if (
                  Ht(
                    s
                      ? _.FeedbackConditions.MakeChanges
                      : _.FeedbackConditions.SBTQ
                  )
                ) {
                  const a = pi(
                    s
                      ? xe.feedbackTemplate.makeChanges
                      : xe.feedbackTemplate.sbtq
                  );
                  if (a.length)
                    return (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)($.Z, {
                          isOpen: ri,
                          setIsOpen: li,
                          prompt: void 0,
                          rewriteText: void 0,
                          baselineText: void 0,
                          submitOnClose: t,
                          getReviewChanges: nt,
                          getPromptToRewrite: di,
                          getBaselineResponse: ci,
                        }),
                        (0, n.jsx)(m.Z, {
                          handleSubmitFeedback: Dt(
                            0,
                            o,
                            0,
                            s
                              ? _.FeedbackConditions.MakeChanges
                              : _.FeedbackConditions.SBTQ
                          ),
                          style: s ? ne : ae,
                          feedbackEntries: a,
                          buttonText: i,
                          confirmButtonText: i,
                          disabled: p || e || !me,
                        }),
                      ],
                    });
                }
                const a = s ? ne : ae;
                return (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($.Z, {
                      isOpen: ri,
                      setIsOpen: li,
                      prompt: void 0,
                      rewriteText: void 0,
                      baselineText: void 0,
                      submitOnClose: t,
                      getReviewChanges: nt,
                      getPromptToRewrite: di,
                      getBaselineResponse: ci,
                    }),
                    (0, n.jsxs)(j.zx, {
                      disabled: p || e || !me || Pe,
                      onClick: o,
                      style: Y({}, a, { opacity: p || Pe ? 0.5 : 1 }),
                      htmlType: "button",
                      children: [
                        i,
                        xt &&
                          (0, n.jsx)("span", {
                            style: { marginLeft: 4 },
                            children: (0, n.jsx)(W.x, { trigger: "alt+a" }),
                          }),
                      ],
                    }),
                  ],
                });
              },
              b = (0, n.jsx)(
                u.HA,
                Y(
                  {
                    hideOnFail: ht,
                    annotationCount: ue,
                    nextTaskHandler: De,
                    sendHandler: Bt,
                    taskProjectId:
                      null === (t = xe.project) || void 0 === t
                        ? void 0
                        : t._id,
                    getTimeSpent: Ce,
                    taskType: xe.type,
                    taskUserId:
                      null === (i = xe.project) || void 0 === i
                        ? void 0
                        : i.taskCustomer,
                    type: u.a5.ApproveWithChanges,
                    lowAccuracyCorruptionTypes: Ze,
                    improvedAccuracyCorruptionTypes: Ae,
                    corruptionAccuracy: ge,
                    disableModal:
                      Ne || !k.lidarTypesWithLinking.includes(xe.type),
                    autoloadNextAssignment: !k.lidarTypesWithLinking.includes(
                      xe.type
                    ),
                    requireConfirm: mt,
                    shortcutEnabled: Ee && !p && me && !Pe,
                  },
                  zt,
                  {
                    children: ({ disabled: e, onClick: t, text: i }) =>
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("div", {
                            "data-tip": c,
                            "data-for": "submit-disabled-fixing-submit",
                            children: x(e, t, i, !0),
                          }),
                          (0, n.jsx)(v(), {
                            id: "submit-disabled-fixing-submit",
                          }),
                        ],
                      }),
                  }
                ),
                "fixingSubmitButton"
              ),
              h =
                !ht &&
                !ke &&
                (0, n.jsxs)(j.zx, {
                  htmlType: "button",
                  disabled: Pe,
                  onClick: ye,
                  style: Y({}, oe, { opacity: Pe ? 0.5 : 1 }),
                  children: [
                    "Cancel",
                    xt &&
                      (0, n.jsx)("span", {
                        style: { marginLeft: 4 },
                        children: (0, n.jsx)(W.x, { trigger: "alt+c" }),
                      }),
                  ],
                }),
              f = vi();
            let g = null;
            ht &&
              (g = (0, n.jsxs)(
                "div",
                {
                  style: { marginLeft: "12px" },
                  children: [
                    (0, n.jsx)("span", {
                      "data-tip":
                        "Once you make changes, they cannot be discarded",
                      "data-for": "cancel-changes",
                      style: { color: "rgba(0, 0, 0, 0.4)" },
                      children: (0, n.jsx)(S.G, { icon: "question-circle" }),
                    }),
                    (0, n.jsx)(v(), { id: "cancel-changes" }),
                  ],
                },
                "tooltipTarget"
              ));
            const y =
                c ||
                (Ft
                  ? `You must add comments (${
                      Pt ? "shift + " : ""
                    }right click) before rejecting`
                  : void 0),
              w =
                !!he &&
                Qe &&
                (0, n.jsx)(
                  u.HA,
                  Y(
                    {
                      hideOnFail: ht,
                      annotationCount: ue,
                      nextTaskHandler: De,
                      sendHandler: Qe,
                      taskProjectId:
                        null === (s = xe.project) || void 0 === s
                          ? void 0
                          : s._id,
                      getTimeSpent: Ce,
                      taskType: xe.type,
                      taskUserId:
                        null === (o = xe.project) || void 0 === o
                          ? void 0
                          : o.taskCustomer,
                      type: u.a5.SendBackToQueueWithChanges,
                      lowAccuracyCorruptionTypes: Ze,
                      improvedAccuracyCorruptionTypes: Ae,
                      corruptionAccuracy: ge,
                      disableModal:
                        Ne || !k.lidarTypesWithLinking.includes(xe.type),
                      autoloadNextAssignment: !k.lidarTypesWithLinking.includes(
                        xe.type
                      ),
                      requireConfirm: mt,
                      shortcutEnabled: Ee && me && !Ft && !p,
                    },
                    zt,
                    {
                      children: ({ disabled: e, onClick: t, text: i }) =>
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("div", {
                              "data-tip": y,
                              "data-for":
                                "submit-disabled-rejecting-with-changes",
                              children: x(
                                p || e || !me || Ft,
                                t,
                                Nt ? "Reject with changes" : i,
                                !1
                              ),
                            }),
                            (0, n.jsx)(v(), {
                              id: "submit-disabled-rejecting-with-changes",
                            }),
                          ],
                        }),
                    }
                  ),
                  "rejectWithChangesButton"
                );
            return (0, n.jsxs)(n.Fragment, {
              children: [a, l, !Ee && !ft && d, h, w, b, f, g],
            });
          },
          ji = (e, t, i) => {
            const s = (function () {
              var e = Q(function* () {
                if (ai && ci() && di()) {
                  if (st && !(yield st())) return;
                  li(!0);
                } else t();
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
            if (Ht(_.FeedbackConditions.Accept)) {
              const o = pi(xe.feedbackTemplate.accept);
              if (o.length)
                return (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($.Z, {
                      isOpen: ri,
                      setIsOpen: li,
                      prompt: void 0,
                      rewriteText: void 0,
                      baselineText: void 0,
                      submitOnClose: t,
                      getReviewChanges: nt,
                      getPromptToRewrite: di,
                      getBaselineResponse: ci,
                    }),
                    (0, n.jsx)(m.Z, {
                      handleSubmitFeedback: Dt(
                        0,
                        s,
                        0,
                        _.FeedbackConditions.Accept
                      ),
                      style: Fe || e ? re : ne,
                      feedbackEntries: o,
                      buttonText: i,
                      confirmButtonText: i,
                      disabled: Fe || e || !me,
                    }),
                  ],
                });
            }
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)($.Z, {
                  isOpen: ri,
                  setIsOpen: li,
                  prompt: void 0,
                  rewriteText: void 0,
                  baselineText: void 0,
                  submitOnClose: t,
                  getReviewChanges: nt,
                  getPromptToRewrite: di,
                  getBaselineResponse: ci,
                }),
                (0, n.jsxs)(j.zx, {
                  disabled: Fe || e || !me || Pe,
                  onClick: s,
                  style: Fe || e || !me || Pe ? re : ne,
                  htmlType: "button",
                  children: [
                    i,
                    xt &&
                      (0, n.jsx)("span", {
                        style: { marginLeft: 4 },
                        children: (0, n.jsx)(W.x, { trigger: "alt+a" }),
                      }),
                  ],
                }),
              ],
            });
          };
        return (0, n.jsxs)("div", {
          className: ot.reviewAssignmentSubmitButtons,
          children: [
            xi(),
            (() => {
              var t;
              return Re
                ? (0, n.jsxs)("div", {
                    className: ot.isProcessing,
                    children: [
                      (0, n.jsx)(y.Z, {}),
                      (0, n.jsx)("span", {
                        style: { marginLeft: "12px" },
                        children: "Loading task",
                      }),
                    ],
                  })
                : Se && at
                ? (0, n.jsx)(ee, {
                    isSubmitting: Pe,
                    handleCustomerPreAudit: Se,
                    onCancel: () => {
                      rt(!1);
                    },
                    isScaleStudio: Ee,
                    disableFeedbackInput: ft,
                  })
                : lt
                ? (0, n.jsx)(J, {
                    enabled: !Pe,
                    initialComments: ve,
                    feedbackRequired: At,
                    onConfirm: _t,
                    onCancel: St,
                    isScaleStudio: Ee,
                    disableFeedbackInput: ft,
                  })
                : (null === (t = xe.project) || void 0 === t
                    ? void 0
                    : t._id) === C.ZP.ZooxSteamExhaustV2 &&
                  xe.reviewLevel === k.ReviewLevel.CalibrationAudit &&
                  Ke
                ? ((e, t, i) => {
                    var s, o, a, l;
                    return (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", { children: "Bar!!" }),
                        (0, n.jsx)(
                          u.HA,
                          Y(
                            {
                              disableModal: !0,
                              autoloadNextAssignment: !0,
                              sendHandler: pe,
                              taskProjectId:
                                null === (s = xe.project) || void 0 === s
                                  ? void 0
                                  : s._id,
                              getTimeSpent: Ce,
                              taskType: xe.type,
                              taskUserId:
                                null === (o = xe.project) || void 0 === o
                                  ? void 0
                                  : o.taskCustomer,
                              type: u.a5.Reject,
                            },
                            zt,
                            {
                              children: (t) =>
                                (0, n.jsx)(
                                  r.S5,
                                  Y({ type: "reject" }, t, {
                                    onClick: i(!1),
                                    children: e,
                                  })
                                ),
                            }
                          )
                        ),
                        (0, n.jsx)(
                          u.HA,
                          Y(
                            {
                              disableModal: !0,
                              autoloadNextAssignment: !0,
                              sendHandler: pe,
                              taskProjectId:
                                null === (a = xe.project) || void 0 === a
                                  ? void 0
                                  : a._id,
                              getTimeSpent: Ce,
                              taskType: xe.type,
                              taskUserId:
                                null === (l = xe.project) || void 0 === l
                                  ? void 0
                                  : l.taskCustomer,
                              type: u.a5.Reject,
                            },
                            zt,
                            {
                              children: (e) =>
                                (0, n.jsx)(
                                  r.S5,
                                  Y({ type: "accept" }, e, {
                                    onClick: i(!0),
                                    children: t,
                                  })
                                ),
                            }
                          )
                        ),
                      ],
                    });
                  })("No Steam", "Has Steam", Ke)
                : ct
                ? (() => {
                    var e, t, i;
                    const o = At && !ve,
                      a =
                        !!(null === xe ||
                        void 0 === xe ||
                        null === (e = xe.params) ||
                        void 0 === e
                          ? void 0
                          : e.requireChoiceForSBTQ) && !be,
                      l = o || a || Ft,
                      d = (0, n.jsx)(r.AM, {
                        required: At && !ft,
                        commentsInput: ve,
                        handleCommentsChange: Te,
                      }),
                      c = (e, t, i) => {
                        if (Ht(_.FeedbackConditions.SBTQ)) {
                          const s = pi(xe.feedbackTemplate.sbtq);
                          if (s.length)
                            return (0, n.jsx)(m.Z, {
                              handleSubmitFeedback: Dt(
                                0,
                                t,
                                0,
                                _.FeedbackConditions.SBTQ
                              ),
                              style: ae,
                              feedbackEntries: s,
                              buttonText: i,
                              confirmButtonText: i,
                              disabled: Fe || l || e,
                            });
                        }
                        return (0, n.jsxs)(j.zx, {
                          disabled: (Fe && !ct) || l || e || Pe,
                          onClick: t,
                          style: Y({}, ae, { opacity: Pe ? 0.5 : 1 }),
                          htmlType: "button",
                          children: [
                            i,
                            xt &&
                              (0, n.jsx)("span", {
                                style: { marginLeft: 4 },
                                children: (0, n.jsx)(W.x, { trigger: "alt+r" }),
                              }),
                          ],
                        });
                      },
                      p = (0, n.jsx)(
                        u.HA,
                        Y(
                          {
                            hideOnFail: ht,
                            annotationCount: ue,
                            nextTaskHandler: De,
                            sendHandler: Zt,
                            taskProjectId:
                              null === (t = xe.project) || void 0 === t
                                ? void 0
                                : t._id,
                            getTimeSpent: Ce,
                            taskType: xe.type,
                            taskUserId:
                              null === (i = xe.project) || void 0 === i
                                ? void 0
                                : i.taskCustomer,
                            type: u.a5.SendBackToQueue,
                            lowAccuracyCorruptionTypes: Ze,
                            improvedAccuracyCorruptionTypes: Ae,
                            corruptionAccuracy: ge,
                            disableModal:
                              Ne || !k.lidarTypesWithLinking.includes(xe.type),
                            autoloadNextAssignment:
                              !k.lidarTypesWithLinking.includes(xe.type),
                            shortcutEnabled: Ee && !l && !Fe && !Pe,
                          },
                          zt,
                          {
                            children: ({
                              disabled: e,
                              onClick: t,
                              text: i,
                            }) => {
                              const s = o
                                ? "Please provide feedback when rejecting this task."
                                : a
                                ? "Please select an audit option from the dropdown"
                                : ct
                                ? null
                                : Xe || null;
                              return (0, n.jsxs)("div", {
                                "data-tip": s,
                                "data-for": "reject-disabled",
                                children: [
                                  c(e, t, Nt ? "Reject" : i),
                                  !!s &&
                                    (0, n.jsx)(v(), {
                                      id: "reject-disabled",
                                      type: "dark",
                                      children: (0, n.jsx)("div", {
                                        style: {
                                          width: "200px",
                                          fontWeight: "bold",
                                        },
                                        children: s,
                                      }),
                                    }),
                                ],
                              });
                            },
                          }
                        )
                      ),
                      x = (0, n.jsxs)(j.zx, {
                        htmlType: "button",
                        disabled: Pe,
                        onClick: pt,
                        style: Y({}, oe, { opacity: Pe ? 0.5 : 1 }),
                        children: [
                          "Cancel",
                          xt &&
                            (0, n.jsx)("span", {
                              style: { marginLeft: 4 },
                              children: (0, n.jsx)(W.x, { trigger: "alt+c" }),
                            }),
                        ],
                      });
                    return (0, n.jsxs)(s.Fragment, {
                      children: [!Ee && !ft && d, x, p],
                    });
                  })()
                : He
                ? gi()
                : It || !we
                ? (() => {
                    var e, t, i, s, o;
                    const a = hi({ batch: !1 }),
                      r = hi({ batch: !0 }),
                      l = mi(),
                      d = At && !ve,
                      c =
                        !!(null === xe ||
                        void 0 === xe ||
                        null === (e = xe.params) ||
                        void 0 === e
                          ? void 0
                          : e.requireChoiceForSBTQ) && !be,
                      p = d || c || Ft,
                      x = (e, t, i) => {
                        if (Ht(_.FeedbackConditions.SBTQ)) {
                          const s = pi(xe.feedbackTemplate.sbtq);
                          if (s.length)
                            return (0, n.jsx)(m.Z, {
                              handleSubmitFeedback: Dt(
                                0,
                                t,
                                0,
                                _.FeedbackConditions.SBTQ
                              ),
                              style: ae,
                              feedbackEntries: s,
                              buttonText: i,
                              confirmButtonText: i,
                              disabled: Fe || p || e,
                            });
                        }
                        return (0, n.jsxs)(j.zx, {
                          disabled: (Fe && !ct) || p || e || Pe,
                          onClick: t,
                          style: Y({}, ae, { opacity: Pe ? 0.5 : 1 }),
                          htmlType: "button",
                          children: [
                            i,
                            xt &&
                              (0, n.jsx)("span", {
                                style: { marginLeft: 4 },
                                children: (0, n.jsx)(W.x, { trigger: "alt+r" }),
                              }),
                          ],
                        });
                      },
                      b = (0, n.jsx)(
                        u.HA,
                        Y(
                          {
                            hideOnFail: ht,
                            annotationCount: ue,
                            nextTaskHandler: De,
                            sendHandler: Et && Qe ? Qe : qe,
                            taskProjectId:
                              null === (t = xe.project) || void 0 === t
                                ? void 0
                                : t._id,
                            getTimeSpent: Ce,
                            taskType: xe.type,
                            taskUserId:
                              null === (i = xe.project) || void 0 === i
                                ? void 0
                                : i.taskCustomer,
                            type: u.a5.Reject,
                            lowAccuracyCorruptionTypes: Ze,
                            improvedAccuracyCorruptionTypes: Ae,
                            corruptionAccuracy: ge,
                            disableModal:
                              Ne || !k.lidarTypesWithLinking.includes(xe.type),
                            autoloadNextAssignment:
                              !k.lidarTypesWithLinking.includes(xe.type),
                            shortcutEnabled: Ee && me && !Ft,
                          },
                          zt,
                          {
                            children: ({
                              disabled: e,
                              onClick: t,
                              text: i,
                            }) => {
                              const s = d
                                ? "Please provide feedback when rejecting this task."
                                : c
                                ? "Please select an audit option from the dropdown"
                                : ct
                                ? null
                                : Xe || null;
                              return (0, n.jsxs)("div", {
                                "data-tip": s,
                                "data-for": "reject-disabled",
                                children: [
                                  x(e, t, Nt ? "Reject" : i),
                                  !!s &&
                                    (0, n.jsx)(v(), {
                                      id: "reject-disabled",
                                      type: "dark",
                                      children: (0, n.jsx)("div", {
                                        style: {
                                          width: "200px",
                                          fontWeight: "bold",
                                        },
                                        children: s,
                                      }),
                                    }),
                                ],
                              });
                            },
                          }
                        ),
                        "reject"
                      ),
                      h = (0, n.jsx)(
                        u.HA,
                        Y(
                          {
                            hideOnFail: ht,
                            annotationCount: ue,
                            nextTaskHandler: De,
                            sendHandler: pe,
                            taskProjectId:
                              null === (s = xe.project) || void 0 === s
                                ? void 0
                                : s._id,
                            getTimeSpent: Ce,
                            taskType: xe.type,
                            taskUserId:
                              null === (o = xe.project) || void 0 === o
                                ? void 0
                                : o.taskCustomer,
                            type: u.a5.Approve,
                            lowAccuracyCorruptionTypes: Ze,
                            improvedAccuracyCorruptionTypes: Ae,
                            corruptionAccuracy: ge,
                            disableModal:
                              Ne || !k.lidarTypesWithLinking.includes(xe.type),
                            autoloadNextAssignment:
                              !k.lidarTypesWithLinking.includes(xe.type),
                            shortcutEnabled: Ee && me,
                          },
                          zt,
                          {
                            children: ({ disabled: e, onClick: t, text: i }) =>
                              (0, n.jsxs)("div", {
                                "data-tip": !0,
                                "data-for": "submit-disabled-accept",
                                children: [
                                  ji(e, t, i),
                                  !!Xe &&
                                    (0, n.jsx)(v(), {
                                      id: "submit-disabled-accept",
                                      type: "dark",
                                      children: (0, n.jsx)("div", {
                                        style: {
                                          width: "200px",
                                          fontWeight: "bold",
                                        },
                                        children: Xe,
                                      }),
                                    }),
                                ],
                              }),
                          }
                        ),
                        "accept"
                      );
                    return [xi, l, r, a, b, h];
                  })()
                : (() => {
                    var t, i, s;
                    const { isCustomerQAMode: o, onRejectFixableWithNoFix: l } =
                        e,
                      { isSpotterSubtask: d, isSpotterFixingEnabled: c } = xe,
                      x = d && !c,
                      b = bi(),
                      m = x && !tt,
                      h = (0, n.jsx)(p, {
                        feature: "customer-pre-audit",
                        children: ({ enabled: e }) =>
                          e
                            ? (0, n.jsx)(j.zx, {
                                onClick: () => rt(!0),
                                style: Y({}, se, {
                                  background: Oe || se.background,
                                }),
                                htmlType: "button",
                                children: "Pre-Audit",
                              })
                            : null,
                      }),
                      f =
                        !m &&
                        (0, n.jsxs)(j.zx, {
                          disabled: !me || Pe,
                          onClick: Be,
                          style: Y({}, se, {
                            background: Oe || se.background,
                            opacity: !me || Pe ? 0.5 : 1,
                          }),
                          htmlType: "button",
                          children: [
                            "Make Changes",
                            x && " (CORP ONLY)",
                            xt &&
                              (0, n.jsx)("span", {
                                style: { marginLeft: 4 },
                                children: (0, n.jsx)(W.x, { trigger: "alt+m" }),
                              }),
                          ],
                        }),
                      g =
                        !je &&
                        (0, n.jsx)(
                          u.HA,
                          Y(
                            {
                              hideOnFail: ht,
                              annotationCount: ue,
                              nextTaskHandler: De,
                              sendHandler: Lt,
                              taskProjectId:
                                null === (t = xe.project) || void 0 === t
                                  ? void 0
                                  : t._id,
                              getTimeSpent: Ce,
                              taskType: xe.type,
                              taskUserId:
                                null === (i = xe.project) || void 0 === i
                                  ? void 0
                                  : i.taskCustomer,
                              type: u.a5.Approve,
                              lowAccuracyCorruptionTypes: Ze,
                              improvedAccuracyCorruptionTypes: Ae,
                              corruptionAccuracy: ge,
                              disableModal:
                                o ||
                                !k.lidarTypesWithLinking.includes(xe.type) ||
                                !!a().size(
                                  null === ce ||
                                    void 0 === ce ||
                                    null === (s = ce.labelerStateHook) ||
                                    void 0 === s
                                    ? void 0
                                    : s.annotationsHook.annotationFlags
                                ),
                              autoloadNextAssignment:
                                !k.lidarTypesWithLinking.includes(xe.type),
                              requireConfirm: mt,
                              shortcutEnabled:
                                (Ee || T.IS_FEDERAL) && !Fe && me && !Pe,
                            },
                            zt,
                            {
                              children: ({
                                disabled: e,
                                onClick: t,
                                text: i,
                              }) =>
                                (0, n.jsxs)("div", {
                                  "data-tip": !0,
                                  "data-for": "submit-disabled-accept",
                                  children: [
                                    ji(e, t, i),
                                    !!Xe &&
                                      (0, n.jsx)(v(), {
                                        id: "submit-disabled-accept",
                                        type: "dark",
                                        children: (0, n.jsx)("div", {
                                          style: {
                                            width: "200px",
                                            fontWeight: "bold",
                                          },
                                          children: Xe,
                                        }),
                                      }),
                                  ],
                                }),
                            }
                          ),
                          "acceptTask"
                        ),
                      y = fe && fi(Ie || !me),
                      w = hi({ batch: !1 }),
                      C = hi({ batch: !0 }),
                      _ = mi(),
                      S =
                        o &&
                        l &&
                        (0, n.jsx)(
                          r.S5,
                          { type: "reject", onClick: Tt, children: "Reject" },
                          "reject"
                        ),
                      A = vi(),
                      R = (0, n.jsx)(r.AM, {
                        required: At && !ft,
                        commentsInput: ve,
                        handleCommentsChange: Te,
                      });
                    return (0, n.jsxs)("div", {
                      className: ot.renderFixable,
                      children: [
                        b,
                        ui,
                        _,
                        !Ee && !ft && R,
                        C,
                        w,
                        y,
                        S,
                        h,
                        f,
                        g,
                        A,
                      ],
                    });
                  })();
            })(),
          ],
        });
      };
      X.defaultProps = { canEdit: !0 };
      var K = X;
      const J = (e) => {
          const {
              enabled: t,
              feedbackRequired: i,
              initialComments: o,
              onCancel: a,
              onConfirm: l,
              isScaleStudio: d,
              disableFeedbackInput: c,
            } = e,
            { 0: p, 1: u } = (0, s.useState)(o || "");
          return (0, n.jsxs)(s.Fragment, {
            children: [
              !d &&
                !c &&
                (0, n.jsx)(r.AM, {
                  commentsInput: o,
                  required: i && !c,
                  handleCommentsChange: u,
                }),
              (0, n.jsxs)("div", {
                "data-tip": i
                  ? "Please provide feedback when rejecting this task"
                  : null,
                "data-for": "reject-fixable",
                children: [
                  (0, n.jsx)(j.zx, {
                    disabled: !t || (i && !p),
                    onClick: () => {
                      l(p || "");
                    },
                    style: se,
                    htmlType: "button",
                    children: "Reject",
                  }),
                  (0, n.jsx)(v(), { id: "reject-fixable" }),
                ],
              }),
              (0, n.jsx)(j.zx, {
                disabled: !t,
                onClick: a,
                htmlType: "button",
                children: "Cancel",
              }),
            ],
          });
        },
        ee = (e) => {
          const {
              isSubmitting: t,
              initialComments: i,
              handleCustomerPreAudit: o,
              onCancel: a,
              isScaleStudio: l,
              disableFeedbackInput: d,
            } = e,
            { 0: c, 1: p } = (0, s.useState)(i || "");
          return (0, n.jsxs)(n.Fragment, {
            children: [
              !l &&
                !d &&
                (0, n.jsx)(r.AM, {
                  commentsInput: c,
                  required: !1,
                  handleCommentsChange: p,
                }),
              (0, n.jsx)(j.zx, {
                disabled: t,
                onClick: () => {
                  o({
                    comment: c,
                    reviewStatus:
                      k.CustomerReviewStatus.ExperimentalPreRejected,
                  });
                },
                style: se,
                htmlType: "button",
                children: "Pre-Reject",
              }),
              (0, n.jsx)(j.zx, {
                disabled: t,
                onClick: () => {
                  o({
                    comment: c,
                    reviewStatus:
                      k.CustomerReviewStatus.ExperimentalPreAccepted,
                  });
                },
                style: se,
                htmlType: "button",
                children: "Pre-Approve",
              }),
              (0, n.jsx)(
                r.S5,
                {
                  type: "cancel",
                  onClick: a,
                  isDisabled: t,
                  children: "Cancel",
                },
                "rejectCancelButton"
              ),
            ],
          });
        },
        te = (0, h.ZL)({
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
          renderFixable: {
            display: "flex",
            maxWidth: "100%",
            flexWrap: "wrap",
            gap: 10,
          },
          reviewAssignmentSubmitButtons: {
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
            maxWidth: "100%",
            flexWrap: "wrap",
            gap: 10,
          },
        }),
        ie = {
          border: 0,
          borderRadius: "8px",
          color: "white",
          fontSize: "12px",
          height: "36px",
          padding: "10px",
          whiteSpace: "nowrap",
        },
        ne = Y({}, ie, { background: "#7ED321" }),
        se = Y({}, ie, { background: "#F8BB06" }),
        oe = Y({}, ie, {
          background: "white",
          border: "1px solid rgba(0, 0, 0, 0.15)",
          color: "black",
        }),
        ae = Y({}, ie, { background: "#EB5424" }),
        re = Y({}, ie, { background: "#7ED321", opacity: "0.5" });
    },
    55539: function (e, t, i) {
      i.d(t, {
        x: function () {
          return s;
        },
        R: function () {
          return o;
        },
      });
      var n = i(599789);
      const s = (e) => {
          const t = null === e || void 0 === e ? void 0 : e.spotterConfig;
          var i;
          const s =
            null !==
              (i =
                null === t || void 0 === t ? void 0 : t.spotterReviewLevel) &&
            void 0 !== i
              ? i
              : n.defaultSpotterReviewLevel;
          return (
            (null === e || void 0 === e ? void 0 : e.reviewLevel) === s &&
            (null === t || void 0 === t ? void 0 : t.isSpotterEnabled)
          );
        },
        o = (e) => {
          const t = s(e),
            i = null === e || void 0 === e ? void 0 : e.spotterConfig;
          var o;
          const a =
            null !==
              (o =
                null === i || void 0 === i
                  ? void 0
                  : i.unfixableReviewLevels) && void 0 !== o
              ? o
              : [];
          var r;
          return (
            (t &&
              !(null !==
                (r =
                  null === i || void 0 === i
                    ? void 0
                    : i.spotterFixingEnabled) && void 0 !== r
                ? r
                : n.defaultSpotterIsFixingEnabled)) ||
            a.includes(e.reviewLevel)
          );
        };
    },
    161292: function (e, t, i) {
      var n, s;
      i.d(t, {
        UH: function () {
          return n;
        },
        aB: function () {
          return r;
        },
        Sp: function () {
          return l;
        },
        M4: function () {
          return d;
        },
      }),
        (function (e) {
          (e.WrongObjectType = "Wrong object type"),
            (e.Slipping = "Slipping"),
            (e.WrongLabelSize = "Wrong label size"),
            (e.WrongHeading = "Wrong heading"),
            (e.MissedActivation = "Missed activation"),
            (e.UnnecessaryActivation = "Unnecessary activation");
        })(n || (n = {})),
        (function (e) {
          (e.X_Axis = "X_Axis"),
            (e.Y_Axis = "Y_Axis"),
            (e.Z_Axis = "Z_Axis"),
            (e.X_Y_Axis = "X_Y_Axis"),
            (e.X_Z_Axis = "X_Z_Axis"),
            (e.Y_Z_Axis = "Y_Z_Axis"),
            (e.X_Y_Z_Axis = "X_Y_Z_Axis");
        })(s || (s = {}));
      const o = Object.values(s);
      var a;
      !(function (e) {
        (e.Internal = "Internal"),
          (e.External = "External"),
          (e.X_Axis = "X_Axis"),
          (e.Y_Axis = "Y_Axis"),
          (e.Z_Axis = "Z_Axis"),
          (e.Stationary = "Stationary"),
          (e.Dynamic = "Dynamic");
      })(a || (a = {}));
      const r = {
          [n.Slipping]: { [a.Internal]: o, [a.External]: o },
          [n.WrongLabelSize]: {
            [a.X_Axis]: ["Left", "Right", "Both"],
            [a.Y_Axis]: ["Front", "Back", "Both"],
            [a.Z_Axis]: ["Top", "Bottom", "Both"],
          },
          [n.WrongHeading]: {
            [a.Stationary]: ["Fanning", "Yaw", "Keyframes"],
            [a.Dynamic]: [
              "Path not smooth",
              "Corners stand out",
              "Uneven distance between frames",
            ],
          },
        },
        l = {
          [n.Slipping]: [
            "Use Spectogram, Timeline Views and Projected views to correct Slipping. You can use a part of the car with dense points as reference.",
            "Scrub through the frames using D. APC",
          ],
          [n.WrongLabelSize]: [
            "Choose the frame where car is the largest to Size",
            "Leave space for occluded part of the object",
            "Use Camera View to get reference for Size",
          ],
          [n.WrongHeading]: [
            "Use partial APC and dynamic APC to check the heading \u2013 the sides of the car should be parallel to the cuboid",
            "Use partial APC and dynamic APC to check the heading \u2013 the bumpers of the car should be parallel to the cuboid",
            "Use Grid View and Reference Marker in Overhead View \u2013 the sides of the car should be parallel to the cuboid",
            "Use Grid View and Reference Marker in Overhead View \u2013 the bumpers of the car should be parallel to the cuboid",
            "Use Heading Tool to smoothen pathway \u2013 the sides of the car should be parallel to the cuboid",
            "Use Heading Tool to smoothen pathway \u2013 the bumpers of the car should be parallel to the cuboid",
          ],
          [n.UnnecessaryActivation]: [
            "Use Spectogram to identify possible Unnecesary Activations, validate your finding in Projected View, Camera View and Lidar View and delete if necessary",
            "Use Top View to identify possible Unnecesaty Activations, validate your finding in Projected View, Camera View and Lidar View and delete if necessary",
          ],
          [n.MissedActivation]: [
            "Use Spectogram to identify possible Missed Activations, validate your finding in Projected View, Camera View and Lidar View and include if necessary",
            "Use Top View to identify possible Missed Activations, validate your finding in Projected View, Camera View and Lidar View and include if necessary",
          ],
          [n.WrongObjectType]: [
            "Use Camera View to correctly choose a Label for the object",
            "Check the Attributes you selected",
          ],
        };
      function d(e, t) {
        var i;
        const n = null !== t && void 0 !== t ? t : "";
        return [
          [
            (null === e || void 0 === e ? void 0 : e.category)
              ? `Error Category: ${e.category}`
              : "",
            (null === e || void 0 === e ? void 0 : e.typePrimary)
              ? `Type: ${e.typePrimary} ${
                  null !==
                    (i =
                      null === e || void 0 === e ? void 0 : e.typeSecondary) &&
                  void 0 !== i
                    ? i
                    : ""
                }`
              : "",
            (null === e || void 0 === e ? void 0 : e.frames)
              ? `Frames: ${e.frames}`
              : "",
            (null === e || void 0 === e ? void 0 : e.hint)
              ? `Hint: ${e.hint}`
              : "",
          ]
            .filter((e) => e && e.length > 0)
            .join("\n"),
          n,
        ]
          .filter((e) => e && e.length > 0)
          .join("\n\n");
      }
    },
    273151: function (e, t, i) {
      i.d(t, {
        K: function () {
          return l;
        },
        O: function () {
          return d;
        },
      });
      var n = i(824246),
        s = i(827378),
        o = i(298784),
        a = i.n(o);
      const r = (0, s.createContext)(null);
      r.displayName = "AnnotationTaskContext";
      const l = (e) =>
        (0, n.jsx)(r.Provider, {
          value: a().omit(e, "children"),
          children: e.children,
        });
      function d() {
        return (0, s.useContext)(r);
      }
    },
    106993: function (e, t, i) {
      var n = i(824246),
        s = i(679892),
        o = i.n(s),
        a = i(298784),
        r = i.n(a),
        l = i(60042),
        d = i.n(l),
        c = i(827378),
        p = i(50682),
        u = i.n(p),
        x = i(802638),
        b = i(162491),
        m = i(411356),
        h = i(416534),
        f = i(720408);
      function v(e) {
        var t;
        const i =
          null === (t = e.choices) || void 0 === t
            ? void 0
            : t.every((e) => {
                var t;
                return (
                  "string" !== typeof e &&
                  (null === (t = f.reviewerRatingFeedbackEntry.choices) ||
                  void 0 === t
                    ? void 0
                    : t.some(
                        (t) =>
                          "string" !== typeof t &&
                          t.value === e.value &&
                          t.label === e.label
                      ))
                );
              });
        return e.title === f.reviewerRatingFeedbackEntry.title && Boolean(i);
      }
      const g = { isModalOpen: !1, textReasons: {}, selectReasons: {} };
      class j extends c.Component {
        updateSelectResponses(e, t, i) {
          const n = r().cloneDeep(this.state.selectReasons);
          if (e === f.TaskFeedbackInput.Select) {
            const e = [];
            e.push(i), (n[t] = e);
          } else if (e === f.TaskFeedbackInput.MultiSelect)
            if (t in n)
              if (n[t].includes(i)) {
                const e = n[t].indexOf(i);
                n[t].splice(e, 1);
              } else n[t].push(i);
            else n[t] = [i];
          return n;
        }
        renderSelectFeedbackEntry(e) {
          const t = e.inputType,
            i = e.title,
            s = v(e) ? f.reviewerRatingFeedbackEntry.choices : e.choices,
            a = v(e) ? `${i}-${e.description}` : i;
          return (0, n.jsxs)("div", {
            className: "jsx-9d75daff34393566 reason",
            children: [
              (0, n.jsx)("div", {
                className: "jsx-9d75daff34393566",
                children:
                  null === s || void 0 === s
                    ? void 0
                    : s.map((e) => {
                        var i;
                        const s = (0, f.asFeedbackEntryChoice)(e);
                        return (0, n.jsx)(
                          "div",
                          {
                            onClick: () => {
                              this.setState({
                                selectReasons: this.updateSelectResponses(
                                  t,
                                  a,
                                  s.value
                                ),
                              });
                            },
                            className:
                              "jsx-9d75daff34393566 " +
                              (d()("choice_option", {
                                selected:
                                  null === (i = this.state.selectReasons[a]) ||
                                  void 0 === i
                                    ? void 0
                                    : i.includes(s.value),
                              }) || ""),
                            children: s.label,
                          },
                          s.value
                        );
                      }),
              }),
              (0, n.jsx)(o(), {
                id: "9d75daff34393566",
                children:
                  ".reason.jsx-9d75daff34393566{color:rgba(0,0,0,.6);font-size:14px;font-weight:bold}.choice_option.jsx-9d75daff34393566{display:inline-block;margin:12px 12px 12px 0;-webkit-box-shadow:0px 2px 4px rgba(0,0,0,.1);-moz-box-shadow:0px 2px 4px rgba(0,0,0,.1);box-shadow:0px 2px 4px rgba(0,0,0,.1);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);padding:8px 16px;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s;cursor:pointer}.choice_option.jsx-9d75daff34393566:hover{-webkit-box-shadow:0px 4px 8px rgba(0,0,0,.15);-moz-box-shadow:0px 4px 8px rgba(0,0,0,.15);box-shadow:0px 4px 8px rgba(0,0,0,.15)}.choice_option.selected.jsx-9d75daff34393566{background:var(--link-color);color:white;cursor:default}",
              }),
            ],
          });
        }
        updateTextResponses(e, t) {
          const i = r().cloneDeep(this.state.textReasons);
          return (i[e] = t), i;
        }
        renderTextFeedbackEntry(e) {
          const t = e.title;
          return (0, n.jsx)(b.Z, {
            onChange: (e) =>
              this.setState({
                textReasons: this.updateTextResponses(t, e.target.value),
              }),
            placeholder: "Enter text here",
          });
        }
        renderEntry(e) {
          return e.inputType === f.TaskFeedbackInput.Text
            ? this.renderTextFeedbackEntry(e)
            : this.renderSelectFeedbackEntry(e);
        }
        disableHelper() {
          for (const e of this.props.feedbackEntries) {
            if (void 0 !== e.required && !e.required) continue;
            const t = v(e)
                ? `${f.reviewerRatingFeedbackEntry.title}-${e.description}`
                : e.title,
              i =
                e.inputType === f.TaskFeedbackInput.Text
                  ? this.state.textReasons
                  : this.state.selectReasons;
            if (!(t in i) || 0 === i[t].length) return !0;
          }
          return !1;
        }
        renderModal() {
          const e = this.disableHelper();
          return (0, n.jsxs)(x.u_, {
            isOpen: this.state.isModalOpen,
            onRequestClose: this.closeModal,
            contentLabel: "Modal",
            maxWidth: "640px",
            children: [
              (0, n.jsxs)("div", {
                className: "jsx-2c490d8242eb10cf feedback",
                children: [
                  (0, n.jsxs)("div", {
                    className: "jsx-2c490d8242eb10cf intro",
                    children: [
                      (0, n.jsx)("h2", {
                        className: "jsx-2c490d8242eb10cf",
                        children:
                          this.props.feedbackHeaderText ||
                          "Please Provide Feedback",
                      }),
                      (0, n.jsx)("p", {
                        className: "jsx-2c490d8242eb10cf",
                        children:
                          this.props.feedbackBodyText ||
                          "Please provide feedback.",
                      }),
                    ],
                  }),
                  this.props.feedbackEntries.map((e, t) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className: "jsx-2c490d8242eb10cf section",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "jsx-2c490d8242eb10cf label",
                            children: [
                              e.inputType === f.TaskFeedbackInput.MultiSelect
                                ? e.title + " (select all that apply)"
                                : e.title,
                              (void 0 === e.required || e.required) &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)("span", {
                                      "data-tip": !0,
                                      "data-for": "asterisk",
                                      className:
                                        "jsx-2c490d8242eb10cf asterisk",
                                      children: "*",
                                    }),
                                    (0, n.jsx)(u(), {
                                      id: "asterisk",
                                      children: (0, n.jsx)("span", {
                                        className: "jsx-2c490d8242eb10cf",
                                        children: "require to answer",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          e.description &&
                            (0, n.jsx)("div", {
                              className: "jsx-2c490d8242eb10cf description",
                              children: e.description,
                            }),
                          this.renderEntry(e),
                        ],
                      },
                      `${e.title}-${t}`
                    )
                  ),
                  (0, n.jsx)("div", {
                    className: "jsx-2c490d8242eb10cf",
                    children: (0, n.jsx)("div", {
                      className: "jsx-2c490d8242eb10cf submit",
                      children: (0, n.jsxs)("div", {
                        "data-tip": e
                          ? "Please complete the feedback form."
                          : null,
                        "data-for": "feedback-disabled",
                        className: "jsx-2c490d8242eb10cf",
                        children: [
                          (0, n.jsx)(m.zx, {
                            size: "lg",
                            type: "button",
                            disabled: e,
                            onClick: () => {
                              this.props.handleSubmitFeedback(
                                this.state.textReasons,
                                this.state.selectReasons
                              ),
                                this.closeModal();
                            },
                            children: this.props.confirmButtonText || "Submit",
                          }),
                          (0, n.jsx)(u(), { id: "feedback-disabled" }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(o(), {
                id: "2c490d8242eb10cf",
                children:
                  ".feedback.jsx-2c490d8242eb10cf{padding:32px}.intro.jsx-2c490d8242eb10cf{font-size:16px;font-weight:bold}.intro.jsx-2c490d8242eb10cf h2.jsx-2c490d8242eb10cf{margin:0;font-size:20px}.intro.jsx-2c490d8242eb10cf p.jsx-2c490d8242eb10cf{margin:16px 0 32px;line-height:1.7}.section.jsx-2c490d8242eb10cf{margin:36px 0}.section.jsx-2c490d8242eb10cf .label.jsx-2c490d8242eb10cf{margin-bottom:8px;text-transform:uppercase;font-weight:bold;font-size:13px;letter-spacing:.5px}.section.jsx-2c490d8242eb10cf .description.jsx-2c490d8242eb10cf{margin-bottom:8px;font-size:13px;color:rgba(0,0,0,.45);letter-spacing:.5px;inline-size:100%;overflow-wrap:break-word}.submit.jsx-2c490d8242eb10cf{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center}.asterisk.jsx-2c490d8242eb10cf{color:red}",
              }),
            ],
          });
        }
        render() {
          const e = this.props.modernButtonStyle
            ? (0, n.jsx)(
                h.zx,
                {
                  style: this.props.style,
                  onClick: this.openModal,
                  disabled: this.props.disabled,
                  variant: this.props.variant,
                  children: this.props.buttonText,
                },
                "templateFeedbackButton"
              )
            : (0, n.jsx)(
                m.zx,
                {
                  type: "button",
                  style: this.props.style,
                  onClick: this.openModal,
                  disabled: this.props.disabled,
                  children: this.props.buttonText,
                },
                "templateFeedbackButton"
              );
          return (0, n.jsxs)("div", {
            children: [e, this.state.isModalOpen && this.renderModal()],
          });
        }
        constructor(e) {
          super(e),
            (this.openModal = () => {
              this.setState({ isModalOpen: !0 });
            }),
            (this.closeModal = () => {
              this.setState(g);
            }),
            (this.state = g);
        }
      }
      t.Z = j;
    },
    339963: function (e, t, i) {
      var n = i(824246),
        s = i(827378),
        o = i(298784),
        a = i.n(o),
        r = i(691067),
        l = i(68649),
        d = i(883617);
      function c(e, t, i, n, s, o, a) {
        try {
          var r = e[o](a),
            l = r.value;
        } catch (d) {
          return void i(d);
        }
        r.done ? t(l) : Promise.resolve(l).then(n, s);
      }
      const p = (0, l.ZL)({
        background: {
          backgroundColor: "white",
          width: "100%",
          padding: 20,
          height: "80vh",
          overflowY: "auto",
        },
        title: { width: "100%", paddingBottom: 20 },
        markdownContainer: {
          display: "flex",
          flexDirection: "row",
          height: "50%",
        },
        pairwiseHalf: { width: "50%" },
        titleBlock: {
          background: "#fafbfc",
          padding: 10,
          border: "1px solid #eee",
          fontWeight: "bold",
        },
        promptMarkdownBlock: {
          padding: 10,
          border: "1px solid #eee",
          overflowY: "auto",
          height: "25%",
        },
        markdownBlock: {
          padding: 10,
          border: "1px solid #eee",
          overflowY: "auto",
          height: "100%",
        },
      });
      t.Z = ({
        isOpen: e,
        setIsOpen: t,
        prompt: i,
        rewriteText: o,
        baselineText: l,
        submitOnClose: u,
        getReviewChanges: x,
        getBaselineResponse: b,
        getPromptToRewrite: m,
      }) => {
        const h = p(),
          { 0: f, 1: v } = (0, s.useState)("No prompt found."),
          { 0: g, 1: j } = (0, s.useState)("No baseline response found."),
          { 0: y, 1: k } = (0, s.useState)("No model rewrite response found.");
        return (
          (0, s.useEffect)(() => {
            const e = (function () {
              var e,
                t =
                  ((e = function* () {
                    if (x) {
                      const r = yield x();
                      var e, t, i, n, s, o;
                      k(
                        null !==
                          (t =
                            null !==
                              (e = a().get(r, [
                                "annotations",
                                "Rewrite:",
                                "response",
                                "0",
                              ])) && void 0 !== e
                              ? e
                              : a().get(
                                  r,
                                  "annotations.editCompletion_1.response[0]"
                                )) && void 0 !== t
                          ? t
                          : "No model rewrite response found."
                      ),
                        v(
                          null !==
                            (n =
                              null !==
                                (i = a().get(
                                  r,
                                  "annotations.rlhf_history.response[0].interactions[0].prompt"
                                )) && void 0 !== i
                                ? i
                                : null === m || void 0 === m
                                ? void 0
                                : m()) && void 0 !== n
                            ? n
                            : "No prompt found."
                        ),
                        j(
                          null !==
                            (o =
                              null !==
                                (s = a().get(
                                  r,
                                  "annotations.rlhf_history.response[0].interactions[0].baselineResponse"
                                )) && void 0 !== s
                                ? s
                                : null === b || void 0 === b
                                ? void 0
                                : b()) && void 0 !== o
                            ? o
                            : "No baseline response found."
                        );
                    }
                  }),
                  function () {
                    var t = this,
                      i = arguments;
                    return new Promise(function (n, s) {
                      var o = e.apply(t, i);
                      function a(e) {
                        c(o, n, s, a, r, "next", e);
                      }
                      function r(e) {
                        c(o, n, s, a, r, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return t.apply(this, arguments);
              };
            })();
            e();
          }, [x, b, m]),
          (0, n.jsx)(r.u, {
            open: e,
            onClose: () => {
              t(!1), u();
            },
            title: "Rewrite and Baseline Prompt Response Comparison",
            children: (0, n.jsxs)("div", {
              className: h.background,
              children: [
                (0, n.jsx)("div", {
                  className: h.title,
                  children:
                    "Hello! This popup is here to show you what the baseline response for this prompt would look like.\n  Please try to work towards writing rewrites that are as good, if not better, than the baseline response.\n  Notice what the baseline does well (e.g. content, markdown, presentation, etc) and how you could improve\n  your next rewrite based on this feedback. Please note that you may not go back and edit your rewrite.\n  However, you can view this as feedback and use it to guide your next rewrite.",
                }),
                (0, n.jsx)("div", {
                  className: h.titleBlock,
                  children: "Prompt",
                }),
                (0, n.jsx)("div", {
                  className: h.promptMarkdownBlock,
                  children: (0, n.jsx)(d.Z, {
                    text: null !== i && void 0 !== i ? i : f,
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: h.markdownContainer,
                  children: [
                    (0, n.jsxs)("div", {
                      className: h.pairwiseHalf,
                      children: [
                        (0, n.jsx)("div", {
                          className: h.titleBlock,
                          children: "Rewrite Response",
                        }),
                        (0, n.jsx)("div", {
                          className: h.markdownBlock,
                          children: (0, n.jsx)(d.Z, {
                            text: null !== o && void 0 !== o ? o : y,
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: h.pairwiseHalf,
                      children: [
                        (0, n.jsx)("div", {
                          className: h.titleBlock,
                          children: "Baseline Response",
                        }),
                        (0, n.jsx)("div", {
                          className: h.markdownBlock,
                          children: (0, n.jsx)(d.Z, {
                            text: null !== l && void 0 !== l ? l : g,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    659277: function (e, t, i) {
      i.d(t, {
        J7: function () {
          return h;
        },
        uI: function () {
          return v;
        },
      });
      var n = i(824246),
        s = i(827378),
        o = i(670644),
        a = i(285556),
        r = i(599789),
        l = i(772122),
        d = i(951041),
        c = i(875333),
        p = i(103496);
      function u(e, t, i, n, s, o, a) {
        try {
          var r = e[o](a),
            l = r.value;
        } catch (d) {
          return void i(d);
        }
        r.done ? t(l) : Promise.resolve(l).then(n, s);
      }
      function x(e, t, i) {
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
      function b(e) {
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
              x(e, t, i[t]);
            });
        }
        return e;
      }
      const m = s.createContext({}),
        h = () => {
          const e = (0, s.useContext)(m),
            [t, i, n] = (0, p.Z)("timer", f()),
            o = { getTimerData: t, setTimerData: i, subscribeTimerData: n };
          return e.getTimerData ? e : o;
        },
        f = () => ({
          startTime: Date.now(),
          lastTime: Date.now(),
          totalTime: 0,
          serverTimeSpent: 0,
        }),
        v = () => {
          const {
            getTimerData: e,
            setTimerData: t,
            subscribeTimerData: i,
          } = h();
          return [(0, o.useSyncExternalStore)(i, e), t];
        };
      t.ZP = (e) =>
        (0, l.YI)(
          (0, l.MD)(e)(
            (0, l.$s)("withV2Timer")((t) => {
              const [i, o, l] = (0, p.Z)("timer", f());
              if (t.timerDisabled)
                return (0, n.jsx)(m.Provider, {
                  value: {
                    getTimerData: i,
                    setTimerData: o,
                    subscribeTimerData: l,
                  },
                  children: (0, n.jsx)(e, b({ ref: t.forwardedRef }, t)),
                });
              const x =
                  1e3 *
                  (0, r.getTimerLoopIntervalSecs)(t.type, t.usePageTracker),
                h = t.usePageTracker,
                v =
                  t.loggedUserId &&
                  !t.debugMode &&
                  !t.isCorpMode &&
                  (!t.isTestQuestion || t.isScaleStudio) &&
                  !t.isCustomerReviewMode,
                g = Boolean(t.courseId) && !t.training.isLoading,
                j = v || h || g;
              var y;
              const k =
                  null !==
                    (y = new URLSearchParams(window.location.search).get(
                      "qaOperationId"
                    )) && void 0 !== y
                    ? y
                    : void 0,
                w = (0, s.useRef)(new Date()),
                C = (0, s.useCallback)(() => {
                  w.current = new Date();
                }, []),
                T = (0, d.tQ)(),
                _ = (0, s.useCallback)(
                  ((S = function* () {
                    const e = i(),
                      n =
                        new Date(e.startTime).getDay() !== new Date().getDay();
                    if (
                      (o({
                        startTime: n ? Date.now() : e.startTime,
                        lastTime: Date.now(),
                        totalTime: e.totalTime + Date.now() - e.lastTime,
                        serverTimeSpent: e.serverTimeSpent,
                      }),
                      !j)
                    )
                      return;
                    let s, r;
                    if (
                      (h
                        ? ((s = T), (r = "page"))
                        : g
                        ? ((s = t.courseId), (r = "course"))
                        : ((s = t._id), (r = "tick")),
                      t.isScaleStudio &&
                        t.isTestQuestion &&
                        (s = t.trainingAttemptId),
                      !s)
                    )
                      return;
                    const l = `internal/timer/${r}/${s}`,
                      d = {
                        active:
                          !!w.current && Date.now() - w.current.getTime() < x,
                      };
                    h && (d.pageType = t.pageType);
                    try {
                      const t = yield (0, a.ZP)(null, l, {
                        method: "PUT",
                        body: d,
                        query: {
                          project: c.in.projectId,
                          auditBatchId: c.in.auditBatchId,
                          pageUrl: window.location.pathname,
                          qaOperationId: k,
                        },
                      });
                      if ("tick" === r) {
                        const { timeSpent: i } = t;
                        o(b({}, e, { serverTimeSpent: Number(i) }));
                      }
                    } catch (p) {}
                    if (t.childIds)
                      for (const i of t.childIds)
                        i &&
                          (0, a.ZP)(null, `internal/timer/${r}/${i}`, {
                            method: "PUT",
                            body: d,
                            query: {
                              project: c.in.projectId,
                              auditBatchId: c.in.auditBatchId,
                              pageUrl: window.location.pathname,
                              qaOperationId: k,
                            },
                          });
                  }),
                  function () {
                    var e = this,
                      t = arguments;
                    return new Promise(function (i, n) {
                      var s = S.apply(e, t);
                      function o(e) {
                        u(s, i, n, o, a, "next", e);
                      }
                      function a(e) {
                        u(s, i, n, o, a, "throw", e);
                      }
                      o(void 0);
                    });
                  }),
                  [j, t._id, t.pageType, T, k, i, o]
                );
              var S;
              const A = (0, s.useCallback)(
                (function (e, t) {
                  let i;
                  return function (...n) {
                    clearTimeout(i),
                      (i = setTimeout(() => e.apply(this, n), t));
                  };
                })(_, x),
                [_, x]
              );
              return (
                (0, s.useEffect)(() => {
                  if (!j) return;
                  const e = () => (A(), null);
                  window.addEventListener("mousemove", C),
                    window.addEventListener("keydown", C),
                    window.addEventListener("beforeunload", e),
                    _();
                  const t = window.setInterval(_, x);
                  return () => {
                    window.removeEventListener("mousemove", C),
                      window.removeEventListener("keydown", C),
                      window.removeEventListener("beforeunload", e),
                      A(),
                      clearInterval(t);
                  };
                }, [_, A, C, j, x]),
                (0, n.jsx)(m.Provider, {
                  value: {
                    getTimerData: i,
                    setTimerData: o,
                    subscribeTimerData: l,
                  },
                  children: (0, n.jsx)(e, b({ ref: t.forwardedRef }, t)),
                })
              );
            })
          )
        );
    },
    945217: function (e, t, i) {
      i(824246), i(679892), i(827378), i(569571);
    },
    23919: function (e, t, i) {
      var n = i(824246),
        s = i(679892),
        o = i.n(s),
        a = i(827378),
        r = i(60042),
        l = i.n(r),
        d = i(792739),
        c = i(604375);
      const p = (
        {
          isOpen: e,
          label: t,
          tooltip: i,
          active: s = !1,
          disabled: a = !1,
          ddStyle: r = {},
          btnStyle: p = {},
          children: u,
          onSave: x,
          onOpen: b,
          onClear: m,
          onCancel: h,
        },
        f
      ) => {
        const v = s || e,
          g = (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                style: r,
                className: "jsx-bdb179fbe63f0584 dropdown",
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-bdb179fbe63f0584 content",
                    children: u,
                  }),
                  (0, n.jsxs)("div", {
                    style: p,
                    className: "jsx-bdb179fbe63f0584 buttons",
                    children: [
                      x &&
                        (0, n.jsx)(c.Av, {
                          type: "primary",
                          onClick: x,
                          children: "Save",
                        }),
                      m && (0, n.jsx)(c.Av, { onClick: m, children: "Clear" }),
                      h && (0, n.jsx)(c.Av, { onClick: h, children: "Cancel" }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(o(), {
                id: "bdb179fbe63f0584",
                children:
                  ".dropdown.jsx-bdb179fbe63f0584{left:0;z-index:9;top:38px;padding:12px;position:absolute;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#f8f8f8;-webkit-box-shadow:0px 0px 16px rgba(0,0,0,.1),0px 2px 4px rgba(0,0,0,.1);-moz-box-shadow:0px 0px 16px rgba(0,0,0,.1),0px 2px 4px rgba(0,0,0,.1);box-shadow:0px 0px 16px rgba(0,0,0,.1),0px 2px 4px rgba(0,0,0,.1)}.buttons.jsx-bdb179fbe63f0584{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding-top:12px;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;border-top:1px solid#e6e6e6}.content.jsx-bdb179fbe63f0584{max-height:400px;overflow:auto}",
              }),
            ],
          });
        return (0, n.jsxs)("div", {
          ref: f,
          className: "jsx-bd332316085eb527 filter",
          children: [
            (0, n.jsx)(c.u, {
              title: i,
              placement: "top",
              arrow: !0,
              children: (0, n.jsxs)("div", {
                style: { color: v ? "#3890f9" : "#000000" },
                onClick: b,
                className:
                  "jsx-bd332316085eb527 " +
                  (l()("select", { disabled: a }) || ""),
                children: [
                  (0, n.jsx)("div", {
                    className: "jsx-bd332316085eb527 label",
                    children: t,
                  }),
                  (0, n.jsx)("div", {
                    style: { color: e ? "#3890f9" : "#000000" },
                    className: "jsx-bd332316085eb527 caret",
                    children: (0, n.jsx)(d.G, {
                      icon: "caret-down",
                      style: { fontSize: 16 },
                    }),
                  }),
                ],
              }),
            }),
            !a && e ? g : null,
            (0, n.jsx)(o(), {
              id: "bd332316085eb527",
              children:
                ".filter.jsx-bd332316085eb527{cursor:pointer;padding:6px 16px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative;margin-right:16px;background:#f8f8f8;min-width:0}.select.jsx-bd332316085eb527{font-size:14px;line-height:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.select.disabled.jsx-bd332316085eb527{color:#808080!important}.select.jsx-bd332316085eb527 .label.jsx-bd332316085eb527{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.caret.jsx-bd332316085eb527{margin-left:10px;min-width:10px}",
            }),
          ],
        });
      };
      t.Z = a.forwardRef(p);
    },
    285017: function (e, t, i) {
      var n = i(824246),
        s = i(679892),
        o = i.n(s);
      i(827378);
      t.Z = ({ label: e, numResults: t, maxWidth: i }) =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("span", {
              style: { maxWidth: i },
              className: "jsx-d8dc38c746209262 label",
              children: e,
            }),
            t && t > 1
              ? (0, n.jsxs)("span", {
                  className: "jsx-d8dc38c746209262 counter",
                  children: ["+", t],
                })
              : null,
            (0, n.jsx)(o(), {
              id: "d8dc38c746209262",
              children:
                ".label.jsx-d8dc38c746209262{-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.counter.jsx-d8dc38c746209262{margin-left:5px}",
            }),
          ],
        });
    },
    965065: function (e, t, i) {
      i.d(t, {
        $G: function () {
          return n;
        },
      });
      var n;
      i(824246),
        i(827378),
        i(23919),
        i(945217),
        i(131119),
        i(142627),
        i(108631),
        i(285017);
      !(function (e) {
        e.EdgeCase = "edge-case";
      })(n || (n = {}));
    },
    131119: function (e, t, i) {
      i(827378), i(298784);
    },
    142627: function (e, t, i) {
      i(827378);
    },
  },
]);
