"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [82625],
  {
    885287: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return T;
        },
      });
      var o = n(824246),
        r = n(152813),
        i = n(827378),
        l = n(89916),
        a = n(792739),
        s = n(416534),
        c = n(722030),
        d = n(713222),
        u = n(892328),
        m = n(60042),
        f = n.n(m),
        p = n(483519),
        v = n(616711),
        g = n(283888),
        h = n(135338),
        x = n(232337),
        b = n(729316),
        y = n(154184),
        w = n(298784),
        k = n.n(w);
      const j = ({
        childId: e,
        allowExecution: t,
        customCodeEnvironments: n,
      }) => {
        const { node: m, setAttrs: w, view: j, getPos: C } = (0, r.js)(),
          {
            childIdToReadOnlyState: S,
            setSelectedCustomCodeEnvironment: E,
            getSelectedCustomCodeEnvironment: O,
          } = (0, g.U)();
        var N;
        const P = null === (N = S[e]) || void 0 === N || N,
          { 0: T, 1: I } = (0, i.useState)(
            Object.keys(l.fullLanguageMap).find((e) => e === m.attrs.language)
              ? m.attrs.language
              : "text"
          ),
          { 0: R, 1: A } = (0, i.useState)(m.textContent),
          { 0: M, 1: D } = (0, i.useState)(!1),
          { 0: L, 1: F } = (0, i.useState)(!1),
          { 0: z, 1: H } = (0, i.useState)(!1),
          { 0: U, 1: B } = (0, i.useState)(y.A.STDOUT),
          W = (0, i.useMemo)(
            () =>
              x
                .createHash("sha256")
                .update(`${e}-${R}-${T}-codeEditorWithExecution`)
                .digest("hex"),
            [e, T, R]
          );
        var Z, X;
        const { 0: _, 1: $ } = (0, i.useState)(
          null !==
            (X =
              null !== (Z = O(W)) && void 0 !== Z
                ? Z
                : null === n || void 0 === n
                ? void 0
                : n.find((e) => e.language === T)) && void 0 !== X
            ? X
            : void 0
        );
        (0, i.useEffect)(() => {
          var e;
          _ &&
            (null === _ || void 0 === _ ? void 0 : _.name) !==
              (null === (e = O(W)) || void 0 === e ? void 0 : e.name) &&
            E(W, _);
        }, [_, W, E, O]);
        const {
            outputValue: K,
            isFetching: V,
            fetchError: q,
            loadingTaskIdForLogging: J,
            submissionResponse: G,
            handleExecuteCode: Q,
            setOutputValue: Y,
          } = (0, h.Z)({
            storeKey: W,
            code: R,
            language: T,
            customCodeEnvironment: _,
            onExecutionComplete: (e) => {
              if (
                k().isNil(null === e || void 0 === e ? void 0 : e.stderr) &&
                k().isNil(null === e || void 0 === e ? void 0 : e.stdout)
              )
                return B(y.A.STDOUT), void H(!0);
              k().isNil(null === e || void 0 === e ? void 0 : e.stderr)
                ? k().isNil(null === e || void 0 === e ? void 0 : e.stdout) ||
                  (B(y.A.STDOUT), H(!0))
                : (B(y.A.STDERR), H(!0));
            },
          }),
          ee = l.LANGUAGE_OPTIONS.find(({ id: e }) => e === T) || !!_;
        (0, i.useEffect)(() => {
          ee || H(!1);
        }, [ee]);
        return (0, o.jsx)("div", {
          className: f()({
            "w-[97%]": !M,
            "fixed top-0 left-0 w-full h-full bg-utility-black/50 flex flex-col justify-center items-center z-[10002]":
              M,
          }),
          onClick: (e) => {
            e.target === e.currentTarget && D(!1);
          },
          children: (0, o.jsxs)("div", {
            className: f()("flex flex-row", { "w-full justify-start": !M }),
            children: [
              (0, o.jsxs)("div", {
                className: f()({
                  "flex flex-col w-9/12": !M && z,
                  "flex flex-col w-full": !M && !z,
                  "z-[10002]": M,
                }),
                children: [
                  (0, o.jsxs)("div", {
                    className: f()(
                      "flex flex-row rounded-t-lg h-16 justify-between bg-[#2d2d30]",
                      { "w-[65vw]": M, "w-full": !M }
                    ),
                    children: [
                      (0, o.jsx)(b.y, {
                        className: f()("flex flex-row", { "z-[10003]": L }),
                        selectMenuClassName: "pl-1 pt-2",
                        selectMenuButtonClassName: "h-12 w-32",
                        customCodeEnvironments: n,
                        selectedLanguage: T,
                        selectedCustomCodeEnvironment: _,
                        handleLanguageChange: (e) => {
                          w({ language: e }), I(e);
                        },
                        setSelectedCustomCodeEnvironment: $,
                        onBlur: () => F(!0),
                        useFullLanguageOptions: !0,
                        disabled: P,
                      }),
                      ee &&
                        t &&
                        (0, o.jsx)("div", {
                          className: "pt-3 pr-4",
                          children: (0, o.jsxs)(s.zx, {
                            className: f()("h-10", {
                              "w-[102px]": V,
                              "w-24": !V,
                            }),
                            onClick: () => Q(),
                            size: "sm",
                            variant: "primary",
                            disabled: V || J,
                            children: [
                              V
                                ? (0, o.jsx)(c.$, {
                                    className: "",
                                    size: "xs",
                                    variant: "primary",
                                  })
                                : (0, o.jsx)(a.G, { icon: "play" }),
                              (0, o.jsx)("span", {
                                className: "pl-2",
                                children: V ? "Executing" : "Run Code",
                              }),
                            ],
                          }),
                        }),
                      (0, o.jsxs)("div", {
                        className: "flex flex-row pr-2 pt-4",
                        children: [
                          !P &&
                            (0, o.jsx)(d.J, {
                              icon: "trash",
                              variant: "white",
                              onClick: () => {
                                (() => {
                                  var e;
                                  const t =
                                    null !== (e = C()) && void 0 !== e ? e : 0;
                                  j.dispatch(
                                    j.state.tr.delete(t, t + m.nodeSize)
                                  );
                                })();
                              },
                              tooltipProps: { side: "top" },
                              tooltip: "Delete Code Block",
                            }),
                          (0, o.jsx)(d.J, {
                            icon: "copy",
                            variant: "white",
                            onClick: (e) => {
                              e.stopPropagation(),
                                navigator.clipboard.writeText(R);
                            },
                            tooltipProps: { side: "top" },
                            tooltip: "Copy Code",
                          }),
                          (0, o.jsx)(d.J, {
                            icon: M ? "compress-arrows-alt" : "expand-alt",
                            variant: "white",
                            onClick: (e) => {
                              e.stopPropagation(), D((e) => !e);
                            },
                            tooltipProps: { side: "top" },
                            tooltip: "Expand Editor",
                          }),
                          !z &&
                            t &&
                            ee &&
                            (0, o.jsx)(d.J, {
                              icon: z ? "arrow-to-left" : "arrow-to-right",
                              variant: "white",
                              onClick: (e) => {
                                e.stopPropagation(), H(!z);
                              },
                              tooltipProps: { side: "top" },
                              tooltip: "Open Output/Errors Tab",
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    children: (0, o.jsx)(u.B, {
                      className: f()(
                        "flex flex-row bg-[#2d2d30] rounded-b-lg",
                        { "h-64 w-full": !M, "h-[80vh] w-[65vw] z-[10000]": M }
                      ),
                      value: R,
                      onChange: (e) => {
                        const t = R;
                        if (t === e) return;
                        var n;
                        const o =
                          (null !== (n = C()) && void 0 !== n ? n : 0) + 1;
                        if ("" === e && m.content.size > 0) {
                          const n = o,
                            r = o + t.length;
                          if (n >= r) return;
                          return j.dispatch(j.state.tr.delete(n, r)), void A(e);
                        }
                        j.dispatch(
                          j.state.tr.replaceWith(
                            o,
                            o + t.length,
                            j.state.schema.text(e)
                          )
                        ),
                          A(e);
                      },
                      onKeyDown: (e) => {
                        if ("Enter" === e.code) {
                          if (e.metaKey || e.ctrlKey) {
                            var t;
                            const e =
                                (null !== (t = C()) && void 0 !== t ? t : 0) +
                                m.nodeSize,
                              n = v.Bs.near(j.state.doc.resolve(e), 1),
                              o = j.state.tr.setSelection(n).scrollIntoView();
                            return j.dispatch(o), void j.focus();
                          }
                          return void e.stopPropagation();
                        }
                        var n;
                        const o = j.state.doc.nodeAt(
                          null !== (n = C()) && void 0 !== n ? n : 0
                        );
                        "Backspace" === e.code &&
                          0 ===
                            (null === o || void 0 === o
                              ? void 0
                              : o.content.size) &&
                          (e.stopPropagation(), e.preventDefault());
                      },
                      editorProps: { language: T, theme: "vs-dark" },
                      editorOptions: {
                        fontSize: 14,
                        minimap: { enabled: M },
                        scrollBeyondLastLine: !1,
                        padding: { top: 19, bottom: 8 },
                        formatOnPaste: !0,
                        formatOnType: !0,
                        renderLineHighlight: "none",
                        readOnly: P,
                        hover: { enabled: !1 },
                        inlineSuggest: { enabled: M },
                        readOnlyMessage: {
                          value: "Editor is in read-only mode",
                        },
                      },
                    }),
                  }),
                ],
              }),
              ee &&
                z &&
                (0, o.jsx)(p.Z, {
                  className: "w-full",
                  outputValue: null !== K && void 0 !== K ? K : "",
                  setOutputTabOpen: H,
                  tab: U,
                  setTab: (e) => {
                    var t;
                    if (e === y.A.STDOUT)
                      B(y.A.STDOUT),
                        Y(
                          null !==
                            (t =
                              null === G || void 0 === G ? void 0 : G.stdout) &&
                            void 0 !== t
                            ? t
                            : null
                        );
                    else if (e === y.A.STDERR) {
                      var n;
                      B(y.A.STDERR),
                        Y(
                          null !==
                            (n =
                              null === G || void 0 === G ? void 0 : G.stderr) &&
                            void 0 !== n
                            ? n
                            : null
                        );
                    }
                  },
                  fetchError: q,
                  fullScreenEnabled: M,
                  fullWidthEnabled: !1,
                }),
            ],
          }),
        });
      };
      var C = (0, i.memo)(j),
        S = n(138944),
        E = n(113463);
      const O = [
          "text",
          "bash",
          "c",
          "cpp",
          "csharp",
          "dart",
          "erlang",
          "haskell",
          "html",
          "java",
          "js",
          "kotlin",
          "lua",
          "objectivec",
          "ocaml",
          "php",
          "python",
          "rb",
          "rust",
          "scala",
          "sql",
          "text",
          "typescript",
          "yaml",
        ],
        N = ({ childId: e, allowExecution: t, customCodeEnvironments: n }) => {
          const { selected: i } = (0, r.js)();
          return (0, o.jsx)("div", {
            className: i ? "ProseMirror-selectednode" : "",
            children: (0, o.jsx)("div", {
              contentEditable: "false",
              suppressContentEditableWarning: !0,
              className: "mb-2 flex justify-between scale-theme",
              children: (0, o.jsx)(C, {
                childId: e,
                allowExecution: t,
                customCodeEnvironments: n,
              }),
            }),
          });
        },
        P = () => {
          const {
            contentRef: e,
            selected: t,
            node: n,
            setAttrs: i,
          } = (0, r.js)();
          return (0, o.jsxs)("div", {
            className: (0, S.default)(
              t ? "ProseMirror-selectednode" : "",
              "not-prose my-4 rounded bg-neutral-100 p-5 shadow dark:bg-gray-800"
            ),
            children: [
              (0, o.jsxs)("div", {
                contentEditable: "false",
                suppressContentEditableWarning: !0,
                className: "mb-2 flex justify-between",
                children: [
                  (0, o.jsx)("select", {
                    className:
                      "!focus:shadow-none cursor-pointer rounded !border-0 bg-neutral-0 shadow-sm focus:ring-2 focus:ring-offset-2 dark:bg-black",
                    value: n.attrs.language || "text",
                    onChange: (e) => {
                      i({ language: e.target.value });
                    },
                    children: O.map((e) =>
                      (0, o.jsx)("option", { value: e, children: e }, e)
                    ),
                  }),
                  (0, o.jsx)("button", {
                    className:
                      "inline-flex items-center justify-center rounded border border-neutral-200 bg-neutral-0 px-4 py-2 text-base font-medium leading-6 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 dark:bg-black",
                    onClick: (e) => {
                      e.preventDefault(),
                        navigator.clipboard.writeText(n.textContent);
                    },
                    children: "Copy",
                  }),
                ],
              }),
              (0, o.jsx)("pre", {
                spellCheck: !1,
                className: "!m-0 !mb-4",
                children: (0, o.jsx)("code", {
                  ref: e,
                  onKeyDown: (e) => {
                    "Tab" === e.key && e.preventDefault();
                  },
                }),
              }),
              (0, o.jsxs)("span", {
                className: "p-2 rounded-md text-neutral-400 text-sm ",
                children: [
                  "Exit the codeblock by ",
                  (0, o.jsx)(E.Z, { children: "cmd" }),
                  " + ",
                  (0, o.jsx)(E.Z, { children: "enter" }),
                ],
              }),
            ],
          });
        };
      var T = ({
        childId: e,
        allowExecution: t,
        useDeprecated: n,
        customCodeEnvironments: r,
      }) =>
        n
          ? (0, o.jsx)(P, {})
          : (0, o.jsx)(N, {
              childId: e,
              allowExecution: t,
              customCodeEnvironments: r,
            });
    },
    171152: function (e, t, n) {
      n.d(t, {
        O: function () {
          return f;
        },
      });
      var o = n(824246),
        r = n(827378),
        i = n(298784),
        l = n.n(i),
        a = n(813110),
        s = n(276281),
        c = n(983341),
        d = n(655187),
        u = n(534522);
      function m(e, t, n) {
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
      const f = ({
        view: e,
        anchorRef: t,
        editorRef: n,
        canEdit: i,
        readOnly: f,
        childId: p,
        enableEditorClickAway: v,
        isLeftPosition: g = !1,
        isInlinePosition: h = !1,
      }) => {
        const x = (0, r.useContext)(u.p),
          { workerId: b } = x,
          y = (0, a.y)((e) => e.selectWorkerComment),
          w = (0, a.y)((e) =>
            e.workerComments
              .filter(
                (e) =>
                  !l().isNil(e.workerCommentId) &&
                  e.childId === p &&
                  !l().isNil(e.locationStart) &&
                  !l().isNil(e.locationEnd) &&
                  l().isNil(e.feedbackResponse)
              )
              .sort((e, t) => e.locationStart - t.locationStart)
          ),
          k = (0, a.y)((e) => e.selectedWorkerComment),
          j = w.findIndex((e) => e.workerCommentId === k),
          C = -1 !== j ? w.at(j) : void 0;
        var S;
        const E =
            null !==
              (S = null === C || void 0 === C ? void 0 : C.locationStart) &&
            void 0 !== S
              ? S
              : -1,
          O =
            e && E >= 0 && E <= e.state.doc.content.size
              ? e.coordsAtPos(E)
              : void 0,
          N = O && t ? O.top - t.getBoundingClientRect().top : 0,
          { 0: P, 1: T } = (0, r.useState)(null),
          { styles: I, attributes: R } = (0, s.D)(t, P, {
            placement: g ? "left-start" : "right-start",
            modifiers: [
              { name: "offset", options: { offset: [N, 28] } },
              { name: "preventOverflow", options: { mainAxis: !1 } },
            ],
          });
        if (
          ((0, r.useEffect)(() => {
            if (!x.enableUnifiedFeedback)
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            function e(e) {
              !P ||
                P.contains(e.target) ||
                P.outerHTML.includes(e.target.outerHTML) ||
                (!v &&
                  ((null === n || void 0 === n
                    ? void 0
                    : n.outerHTML.includes(e.target.outerHTML)) ||
                    (null === n || void 0 === n
                      ? void 0
                      : n.contains(e.target)))) ||
                y(null);
            }
          }, [P, n, v, y, x.enableUnifiedFeedback]),
          !e || !C || l().isNil(C.locationStart) || l().isNil(C.locationEnd))
        )
          return null;
        const A = (0, o.jsx)(d.Z, {
          workerComment: C,
          selectedCommentIndex: j,
          unresolvedComments: w,
          canEdit: i && C.author === b,
          readOnly: f,
          isInlinePosition: h,
        });
        return x.enableUnifiedFeedback || (h && !C)
          ? null
          : h
          ? A
          : (0, o.jsx)(
              "div",
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
                      m(e, t, n[t]);
                    });
                }
                return e;
              })({ ref: T, style: I.popper }, R.popper, {
                className: "z-30",
                children: (0, o.jsx)(
                  c.u,
                  {
                    show: !0,
                    appear: !0,
                    enter: "transition-all duration-300",
                    enterFrom: "opacity-0 -translate-y-1",
                    enterTo: "opacity-100 translate-y-0",
                    leave: "transition-all duration-300",
                    leaveFrom: "opacity-100 translate-y-0",
                    leaveTo: "opacity-0 -translate-y-1",
                    as: "div",
                    children: A,
                  },
                  C.workerCommentId
                ),
              })
            );
      };
    },
    49851: function (e, t, n) {
      var o = n(824246),
        r = n(240910),
        i = n(634397),
        l = n(152813),
        a = n(916115),
        s = n(339389),
        c = n(216228),
        d = n(827378);
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
      const m = [{ id: "Preview" }, { id: "Source" }];
      t.Z = () => {
        const { node: e, setAttrs: t } = (0, l.js)(),
          n = (0, d.useMemo)(() => e.attrs.value, [e.attrs.value]),
          f = (0, d.useRef)(null),
          [p, v] = (0, i.fz)(),
          { 0: g, 1: h } = (0, d.useState)("Preview");
        return (
          (0, d.useEffect)(() => {
            requestAnimationFrame(() => {
              if (f.current && "Preview" === g && !p)
                try {
                  c.Z.render(
                    n,
                    f.current,
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
                            u(e, t, n[t]);
                          });
                      }
                      return e;
                    })({}, v().ctx.get(r.QR.key), { displayMode: !0 })
                  );
                } catch (e) {}
            });
          }, [n, v, p, g]),
          (0, o.jsxs)("div", {
            children: [
              (0, o.jsx)("div", {
                className: "flex",
                children: (0, o.jsx)(a.m, {
                  className: "mr-auto",
                  tabs: m,
                  value: g,
                  onChange: (e) => h(e),
                }),
              }),
              "Preview" === g &&
                (0, o.jsx)("div", {
                  className:
                    "mt-2 px-3 text-center border border-neutral-300 rounded-md text-neutral-700 overflow-auto",
                  ref: f,
                }),
              "Source" === g &&
                (0, o.jsx)("div", {
                  className: "mt-2 relative",
                  children: (0, o.jsx)(s.K, {
                    onChange: (e) => {
                      t({ value: e.target.value });
                    },
                    defaultValue: n,
                  }),
                }),
            ],
          })
        );
      };
    },
    838007: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var o = n(824246),
        r = n(827378),
        i = n(813110),
        l = n(276281),
        a = n(534522);
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
      const c = ({
        view: e,
        anchorRef: t,
        childId: n,
        isLeftPosition: c = !1,
        target: d,
      }) => {
        const u = (0, i.y)((e) => e.selection),
          m =
            !u.empty && e && u.from >= 0 && u.from <= e.state.doc.content.size
              ? e.coordsAtPos(u.from)
              : void 0,
          f = m && t ? m.top - t.getBoundingClientRect().top : 0,
          { 0: p, 1: v } = (0, r.useState)(null),
          { styles: g, attributes: h } = (0, l.D)(t, p, {
            placement: c ? "left-start" : "right-start",
            modifiers: [
              { name: "offset", options: { offset: [f, 28] } },
              { name: "preventOverflow", options: { mainAxis: !1 } },
            ],
          });
        return (0, r.useContext)(a.p).enableUnifiedFeedback ||
          !e ||
          u.empty ||
          u.childId !== n
          ? null
          : (0, o.jsx)(
              "div",
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
                      s(e, t, n[t]);
                    });
                }
                return e;
              })({ ref: v, style: g.popper }, h.popper, {
                className: "z-30 flex",
                children: d,
              })
            );
      };
    },
    482625: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return $e;
        },
      });
      var o = n(824246),
        r = n(827378),
        i = n(216706),
        l = n(634397),
        a = n(102396),
        s = n(15687),
        c = n(47161),
        d = n(240910),
        u = n(830790),
        m = n(310118),
        f = n(918312),
        p = n(137424),
        v = n(134294),
        g = n(468832),
        h = n(813043),
        x = n(325453),
        b = n(616711),
        y = n(942105);
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
      const k = ({ disablePasting: e, onPaste: t, onMouseLeave: n }) =>
        (0, y.x6)((o) => {
          var r;
          o.update(i.i8, (e) =>
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
                    w(e, t, n[t]);
                  });
              }
              return e;
            })({}, e, {
              editable:
                null !== (r = e.editable) && void 0 !== r ? r : () => !0,
            })
          );
          const l = new b.H$("DOM_EVENT_HANDLER");
          return new b.Sy({
            key: l,
            props: {
              handleDOMEvents: {
                paste: (n, o) => {
                  if ((null === t || void 0 === t || t(o), e))
                    return o.preventDefault(), !0;
                },
                mouseleave: (e, t) => (null === n || void 0 === n || n(t), !1),
              },
            },
          });
        });
      var j = n(152813),
        C = n(348768),
        S = n(133906),
        E = n(416514),
        O = n(334560),
        N = n(658430),
        P = n(506356),
        T = n(792739),
        I = n(60042),
        R = n.n(I);
      const A = [
          { icon: "redo", command: f.Ow },
          { icon: "undo", command: f.N7 },
          { icon: "h1", command: c.Ar, prop: 1 },
          { icon: "h2", command: c.Ar, prop: 2 },
          { icon: "h3", command: c.Ar, prop: 3 },
          { icon: "bold", command: c.gG },
          { icon: "italic", command: c.QF },
          { icon: "list", command: c.$m },
          { icon: "list-ol", command: c.vd },
          { icon: "quote-right", command: c.vs },
          { icon: "table", command: u.Jp },
          { icon: "code", command: c.s3 },
        ],
        M = ({ children: e, onClick: t, disabled: n }) =>
          (0, o.jsx)("button", {
            className: R()(
              "flex w-10 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:hover:bg-neutral-100 disabled:text-neutral-200 text-neutral-900",
              { "hover:bg-neutral-200": !n }
            ),
            onMouseDown: (e) => {
              t(), e.preventDefault();
            },
            disabled: n,
            children: e,
          });
      var D,
        L = ({ readOnly: e }) => {
          const [t, n] = (0, l.fz)(),
            r = n();
          return (0, o.jsx)("div", {
            className:
              "flex border-b h-10 box-border border-neutral-200 bg-neutral-50 sticky top-0 z-10",
            children: A.map(({ icon: n, command: i, prop: l }) =>
              (0, o.jsx)(
                M,
                {
                  onClick: () => {
                    var e;
                    null === r ||
                      void 0 === r ||
                      null === (e = r.action) ||
                      void 0 === e ||
                      e.call(r, (0, y.lB)(i.key, l));
                  },
                  disabled: e || t,
                  children: (0, o.jsx)(T.G, { icon: n }),
                },
                n.toString()
              )
            ),
          });
        },
        F = n(103276),
        z = n(905454),
        H = n(176905),
        U = n(138944);
      !(function (e) {
        (e.Delete = "delete"),
          (e.ArrowUpward = "arrow_upward"),
          (e.ArrowBack = "arrow_back"),
          (e.ArrowDownward = "arrow_downward"),
          (e.ArrowForward = "arrow_forward"),
          (e.FormatAlignLeft = "format_align_left"),
          (e.FormatAlignCenter = "format_align_center"),
          (e.FormatAlignRight = "format_align_right");
      })(D || (D = {}));
      const B = {
          [D.Delete]: "trash",
          [D.ArrowUpward]: "arrow-up",
          [D.ArrowBack]: "arrow-left",
          [D.ArrowDownward]: "arrow-down",
          [D.ArrowForward]: "arrow-right",
          [D.FormatAlignLeft]: "align-left",
          [D.FormatAlignCenter]: "align-center",
          [D.FormatAlignRight]: "align-right",
        },
        W = (0, y.Tu)(null, "tableTooltip"),
        Z = ({ onClick: e, icon: t }) =>
          (0, o.jsx)("button", {
            className: (0, U.default)(
              "inline-flex items-center justify-center rounded border border-neutral-200 bg-neutral-50 px-4 py-2 text-neutral-600 font-medium leading-6 shadow-sm z-10"
            ),
            onClick: e,
            children: (0, o.jsx)(T.G, { icon: B[t] }),
          }),
        X = (0, F.Z)("TABLE"),
        _ = () => {
          var e;
          const t = (0, r.useRef)(null),
            { view: n } = (0, j.UF)(),
            a = (0, r.useRef)(),
            [s, c] = (0, l.fz)(),
            d =
              n.state.selection instanceof z.Xc &&
              n.state.selection.isRowSelection(),
            m =
              n.state.selection instanceof z.Xc &&
              n.state.selection.isColSelection(),
            f = d && m,
            p =
              d &&
              "table_header" ===
                (null ===
                  (e = n.state.doc.nodeAt(n.state.selection.$headCell.pos)) ||
                void 0 === e
                  ? void 0
                  : e.type.name);
          return (
            (0, r.useEffect)(() => {
              if (t.current && !s && !a.current && n && n.state) {
                const e = new F.p({
                  content: t.current,
                  tippyOptions: { zIndex: 30 },
                  shouldShow: () => !1,
                });
                e.update(n);
                const o = c();
                o &&
                  o.ctx &&
                  o.ctx.isInjected(W.key) &&
                  (o.ctx.set(W.key, e), (a.current = e));
              }
              return () => {
                var e;
                null === (e = a.current) || void 0 === e || e.destroy();
              };
            }, [c, s, n]),
            (0, o.jsx)("div", {
              className: "hidden",
              children: (0, o.jsxs)("div", {
                className: "flex",
                ref: t,
                children: [
                  !f &&
                    !p &&
                    d &&
                    (0, o.jsx)(Z, {
                      icon: D.ArrowUpward,
                      onClick: () => {
                        var e, t;
                        s ||
                          (null === (e = c()) ||
                            void 0 === e ||
                            e.action((e) => {
                              e.get(i.Xo).call(u.In.key);
                            }),
                          null === (t = a.current) || void 0 === t || t.hide());
                      },
                    }),
                  !f &&
                    m &&
                    (0, o.jsx)(Z, {
                      icon: D.ArrowBack,
                      onClick: () => {
                        var e, t;
                        s ||
                          (null === (e = c()) ||
                            void 0 === e ||
                            e.action((e) => {
                              e.get(i.Xo).call(u.ge.key);
                            }),
                          null === (t = a.current) || void 0 === t || t.hide());
                      },
                    }),
                  (f || !p) &&
                    (0, o.jsx)(Z, {
                      icon: D.Delete,
                      onClick: () => {
                        var e, t;
                        s ||
                          (null === (e = c()) ||
                            void 0 === e ||
                            e.action((e) => {
                              e.get(i.Xo).call(u.KN.key);
                            }),
                          null === (t = a.current) || void 0 === t || t.hide());
                      },
                    }),
                  !f &&
                    d &&
                    (0, o.jsx)(Z, {
                      icon: D.ArrowDownward,
                      onClick: () => {
                        var e, t;
                        s ||
                          (null === (e = c()) ||
                            void 0 === e ||
                            e.action((e) => {
                              e.get(i.Xo).call(u.hy.key);
                            }),
                          null === (t = a.current) || void 0 === t || t.hide());
                      },
                    }),
                  !f &&
                    m &&
                    (0, o.jsx)(Z, {
                      icon: D.ArrowForward,
                      onClick: () => {
                        var e, t;
                        s ||
                          (null === (e = c()) ||
                            void 0 === e ||
                            e.action((e) => {
                              e.get(i.Xo).call(u.S$.key);
                            }),
                          null === (t = a.current) || void 0 === t || t.hide());
                      },
                    }),
                  !f &&
                    m &&
                    (0, o.jsx)(Z, {
                      icon: D.FormatAlignLeft,
                      onClick: () => {
                        var e;
                        s ||
                          null === (e = c()) ||
                          void 0 === e ||
                          e.action((e) => {
                            e.get(i.Xo).call(u.a2.key, "left");
                          });
                      },
                    }),
                  !f &&
                    m &&
                    (0, o.jsx)(Z, {
                      icon: D.FormatAlignCenter,
                      onClick: () => {
                        var e;
                        s ||
                          null === (e = c()) ||
                          void 0 === e ||
                          e.action((e) => {
                            e.get(i.Xo).call(u.a2.key, "center");
                          });
                      },
                    }),
                  !f &&
                    m &&
                    (0, o.jsx)(Z, {
                      icon: D.FormatAlignRight,
                      onClick: () => {
                        var e;
                        s ||
                          null === (e = c()) ||
                          void 0 === e ||
                          e.action((e) => {
                            e.get(i.Xo).call(u.a2.key, "right");
                          });
                      },
                    }),
                ],
              }),
            })
          );
        },
        $ = () => {
          const { spec: e } = (0, j.YX)(),
            t = null === e || void 0 === e ? void 0 : e.type;
          var n;
          const a =
              null !== (n = null === e || void 0 === e ? void 0 : e.index) &&
              void 0 !== n
                ? n
                : 0,
            [s, c] = (0, l.fz)(),
            d = (0, r.useRef)(null),
            { 0: m, 1: f } = (0, r.useState)(!1),
            p = (0, r.useMemo)(
              () =>
                (0, U.default)(
                  "hover:bg-primary-200 absolute cursor-pointer bg-neutral-200",
                  m ? "ring-2" : ""
                ),
              [m]
            ),
            v = (0, r.useMemo)(
              () =>
                "left" === t
                  ? "w-2 h-full -left-3.5 top-0"
                  : "top" === t
                  ? "right-px h-2 left-0 -top-3.5"
                  : "h-3 w-3 -left-4 -top-4 rounded-full",
              [t]
            );
          return (0, o.jsx)("div", {
            ref: d,
            draggable: "top-left" !== t,
            className: [v, p].join(" "),
            onClick: (e) => {
              var n;
              e.stopPropagation();
              const o = d.current;
              !s &&
                o &&
                (null === (n = c()) ||
                  void 0 === n ||
                  n.action((e) => {
                    var n;
                    const r = e.get(W.key);
                    null ===
                      (n =
                        null === r || void 0 === r
                          ? void 0
                          : r.getInstance()) ||
                      void 0 === n ||
                      n.setProps({
                        getReferenceClientRect: () => o.getBoundingClientRect(),
                      }),
                      null === r || void 0 === r || r.show();
                    const l = e.get(i.Xo);
                    "left" === t
                      ? l.call(u.Cx.key, a)
                      : "top" === t
                      ? l.call(u.ie.key, a)
                      : l.call(u.II.key);
                  }));
            },
            onDragStart: (t) => {
              t.stopPropagation();
              const n = {
                index: null === e || void 0 === e ? void 0 : e.index,
                type: null === e || void 0 === e ? void 0 : e.type,
              };
              t.dataTransfer.setData(
                "application/milkdown-table-sort",
                JSON.stringify(n)
              ),
                (t.dataTransfer.effectAllowed = "move");
            },
            onDragOver: (e) => {
              f(!0),
                e.stopPropagation(),
                e.preventDefault(),
                (e.dataTransfer.dropEffect = "move");
            },
            onDragLeave: () => {
              f(!1);
            },
            onDrop: (n) => {
              if ((f(!1), "top-left" === t)) return;
              const o = null === e || void 0 === e ? void 0 : e.index;
              if (s || null == o) return;
              const r = n.dataTransfer.getData(
                "application/milkdown-table-sort"
              );
              try {
                var l;
                const { index: e, type: t } = JSON.parse(r);
                null === (l = c()) ||
                  void 0 === l ||
                  l.action((n) => {
                    const r = n.get(i.Xo),
                      l = { from: Number(e), to: o };
                    r.call("left" === t ? u.fj.key : u.d2.key, l);
                  });
              } catch (a) {}
            },
          });
        },
        K = (e) =>
          (0, y.x6)(() => {
            const t = new b.H$("MILKDOWN_TABLE_SELECTOR");
            return new b.Sy({
              key: t,
              state: {
                init: () => ({ decorations: H.EH.empty, pos: 0 }),
                apply(t, n, o, r) {
                  const i = (0, u.Lq)(0, t.selection);
                  if (!i) return { decorations: H.EH.empty, pos: 0 };
                  const l = (0, u.uU)(0, t.selection);
                  if (!l) return { decorations: H.EH.empty, pos: 0 };
                  const a = e({ as: "div", component: $ }),
                    [s] = i;
                  if (!s) return { decorations: H.EH.empty, pos: 0 };
                  const c = [];
                  return (
                    c.push(a(s.pos + 1, { type: "top-left" })),
                    i.forEach((e, t) => {
                      c.push(a(e.pos + 1, { type: "left", index: t }));
                    }),
                    l.forEach((e, t) => {
                      c.push(a(e.pos + 1, { type: "top", index: t }));
                    }),
                    n.pos === s.pos && o.doc.eq(r.doc)
                      ? n
                      : { decorations: H.EH.create(t.doc, c), pos: s.pos }
                  );
                },
              },
              props: { decorations: (e) => t.getState(e).decorations },
            });
          });
      var V = n(885287),
        q = n(49851);
      var J = () => {
          const { 0: e, 1: t } = (0, r.useState)(!1),
            n = (0, r.useRef)(null),
            i = (0, r.useRef)(),
            { view: a } = (0, j.UF)(),
            [s, c] = (0, l.fz)();
          (0, r.useEffect)(() => {
            const e = n.current;
            if (s || !e) return;
            const t = c();
            return t
              ? ((i.current = new h.ZJ({
                  ctx: t.ctx,
                  content: e,
                  tippyOptions: {
                    placement: "left",
                    delay: 0,
                    popperOptions: {
                      modifiers: [
                        {
                          name: "flip",
                          options: { fallbackPlacements: ["left"] },
                        },
                      ],
                    },
                    animation: !1,
                  },
                })),
                () => {
                  var e;
                  null === (e = i.current) || void 0 === e || e.destroy();
                })
              : void 0;
          }, [c, s]),
            (0, r.useEffect)(() => {
              var e;
              null === (e = i.current) || void 0 === e || e.update(a);
            });
          return (0, o.jsx)("div", {
            className: "hidden",
            children: (0, o.jsx)("div", {
              ref: n,
              onDragStart: () => {
                t(!0);
              },
              onDragEnd: () => {
                t(!1);
              },
              className: R()(
                "relative text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 p-1 rounded",
                { "cursor-grab": !e, "cursor-grabbing": e }
              ),
              children: (0, o.jsx)(T.G, { icon: "grip-vertical" }),
            }),
          });
        },
        G = n(253086),
        Q = n(417093),
        Y = n(534522),
        ee = n(228401);
      function te(e, t) {
        const n = e.before(),
          o = e.doc.textBetween(n, e.pos, "\n", "\0"),
          r =
            ((i = t.mentionTrigger),
            t.allowSpace
              ? new RegExp("(^|\\s)" + i + "([\\w-\\+]+\\s?[\\w-\\+]*)$")
              : new RegExp("(^|\\s)" + i + "([\\w-\\+]+)$"));
        var i;
        const l = o.match(r);
        if (l) {
          (l.index = l[0].startsWith(" ") ? l.index + 1 : l.index),
            (l[0] = l[0].startsWith(" ")
              ? l[0].substring(1, l[0].length)
              : l[0]);
          const t = e.start() + l.index;
          return { range: { from: t, to: t + l[0].length }, queryText: l[2] };
        }
      }
      const ne = (function () {
        let e = null;
        return function (t, n, o) {
          return (
            (o = o || this),
            clearTimeout(e),
            (e = setTimeout(function () {
              t.apply(o, arguments);
            }, n)),
            e
          );
        };
      })();
      function oe(e) {
        const { mentionCandidates: t } = e,
          n = {
            mentionTrigger: "@",
            allowSpace: !0,
            getSuggestions: (e, n) => {
              n(t);
            },
            getSuggestionsHTML: (e) =>
              '<style>.suggestion-item:hover { font-weight: bold; background-color: #f0f0f0; }</style><div class="suggestion-item-list" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); width: 100%;">' +
              e
                .map(
                  (e) =>
                    '<div class="suggestion-item" style="padding: 10px; cursor: pointer; width: 100%; border-radius: 5px;">' +
                    e.name +
                    (e.subtext
                      ? '<div style="font-size: 0.8em; color: #888;">' +
                        e.subtext.substring(0, 50) +
                        (e.subtext.length > 50 ? "..." : "") +
                        "</div>"
                      : "") +
                    "</div>"
                )
                .join("") +
              "</div>",
            activeClass: "suggestion-item-active",
            suggestionTextClass: "prosemirror-suggestion",
            maxNoOfSuggestions: 10,
            delay: 500,
          };
        e = Object.assign({}, n, e);
        const o = document.createElement("div");
        let r = null;
        const i = function () {
            o.style.display = "none";
          },
          l = function (e, t) {
            var n;
            const r =
                null === (n = o.querySelector(".suggestion-item-list")) ||
                void 0 === n
                  ? void 0
                  : n.childNodes,
              i = null === r || void 0 === r ? void 0 : r[e];
            null === i || void 0 === i || i.classList.remove(t);
          },
          a = function (e, t) {
            var n;
            const r =
                null === (n = o.querySelector(".suggestion-item-list")) ||
                void 0 === n
                  ? void 0
                  : n.childNodes,
              i = null === r || void 0 === r ? void 0 : r[e];
            null === i || void 0 === i || i.classList.add(t);
          },
          s = function (e, t, n) {
            l(t.index, null === n || void 0 === n ? void 0 : n.activeClass),
              (t.index = e),
              a(t.index, null === n || void 0 === n ? void 0 : n.activeClass);
          },
          c = function (e, t) {
            const n = t.suggestions[t.index],
              o = { name: n.name, id: n.id },
              r = e.state.schema.nodes.mention.create(o),
              i = e.state.tr.replaceWith(t.range.from, t.range.to, r),
              l = e.state.apply(i);
            e.updateState(l);
          };
        return new b.Sy({
          key: new b.H$("autosuggestions"),
          state: {
            init: () => ({
              active: !1,
              range: { from: 0, to: 0 },
              text: "",
              suggestions: [],
              index: 0,
            }),
            apply(t, n) {
              const o = {
                  active: !1,
                  range: { from: 0, to: 0 },
                  text: "",
                  suggestions: [],
                  index: 0,
                },
                r = t.selection;
              if (r.from !== r.to) return o;
              const i = te(r.$from, e);
              return (
                i &&
                  ((o.active = !0),
                  (o.range = i.range),
                  (o.type = i.type),
                  (o.text = i.queryText)),
                o
              );
            },
          },
          props: {
            handleKeyDown(t, n) {
              const o = this.getState(t.state);
              if (!o.active && !o.suggestions.length) return !1;
              const s = 13 === n.keyCode,
                d = 40 === n.keyCode,
                u = 38 === n.keyCode,
                m = 27 === n.keyCode;
              return d
                ? ((function (e, t, n) {
                    l(
                      t.index,
                      null === n || void 0 === n ? void 0 : n.activeClass
                    ),
                      t.index++,
                      (t.index =
                        t.index === t.suggestions.length ? 0 : t.index),
                      a(
                        t.index,
                        null === n || void 0 === n ? void 0 : n.activeClass
                      );
                  })(0, o, e),
                  !0)
                : u
                ? ((function (e, t, n) {
                    l(
                      t.index,
                      null === n || void 0 === n ? void 0 : n.activeClass
                    ),
                      t.index--,
                      (t.index =
                        -1 === t.index ? t.suggestions.length - 1 : t.index),
                      a(
                        t.index,
                        null === n || void 0 === n ? void 0 : n.activeClass
                      );
                  })(0, o, e),
                  !0)
                : s
                ? (c(t, o), !0)
                : !!m &&
                  (clearTimeout(r),
                  i(),
                  (this.state = {
                    active: !1,
                    range: { from: 0, to: 0 },
                    text: "",
                    suggestions: [],
                    index: 0,
                  }),
                  !0);
            },
            decorations(n) {
              const { active: o, range: r } = this.getState(n),
                i = n.doc,
                l = [];
              return (
                o &&
                  l.push(
                    H.p.inline(
                      r.from,
                      r.to,
                      { class: "bg-warning-100 " + e.suggestionTextClass },
                      { inclusiveLeft: !0, inclusiveRight: !0 }
                    )
                  ),
                i.forEach((e, n) => {
                  const o = e.textContent;
                  let r;
                  t.forEach((e) => {
                    const t = new RegExp(`@${e.name}`, "g");
                    for (; null !== (r = t.exec(o)); ) {
                      const e = r.index + 1,
                        t = e + r[0].length,
                        o = n + e,
                        i = n + t;
                      l.push(
                        H.p.inline(
                          o,
                          i,
                          { class: "bg-warning-100 font-bold" },
                          { inclusiveLeft: !0, inclusiveRight: !0 }
                        )
                      );
                    }
                  });
                }),
                H.EH.create(i, l)
              );
            },
          },
          view() {
            return {
              update: (t) => {
                const n = this.key.getState(t.state);
                if (!n.text) return i(), void clearTimeout(r);
                r = ne(
                  function () {
                    e.getSuggestions(n.text, function (r) {
                      (n.suggestions = r),
                        (function (e, t, n, r) {
                          (o.innerHTML =
                            null === r || void 0 === r
                              ? void 0
                              : r.getSuggestionsHTML(n)),
                            o
                              .querySelectorAll(".suggestion-item")
                              .forEach(function (n, o) {
                                n.addEventListener("click", function () {
                                  c(e, t), e.focus();
                                }),
                                  n.addEventListener("mouseover", function () {
                                    s(o, t, r);
                                  }),
                                  n.addEventListener("mouseout", function () {
                                    s(o, t, r);
                                  });
                              }),
                            a(t.index, r.activeClass);
                          const i = e
                              .domAtPos(e.state.selection.$from.pos)
                              .node.querySelector("." + r.suggestionTextClass),
                            l = i.getBoundingClientRect();
                          document.body.appendChild(o),
                            o.classList.add("suggestion-item-container"),
                            (o.style.position = "fixed"),
                            (o.style.left = l.left + "px");
                          const d = i.offsetHeight + l.top;
                          (o.style.top = d + "px"),
                            (o.style.display = "block"),
                            (o.style.zIndex = "999999");
                        })(t, n, r, e);
                    });
                  },
                  e.delay,
                  this
                );
              },
            };
          },
        });
      }
      const re = (0, y.yU)("mention", (e) => ({
        group: "inline",
        inline: !0,
        atom: !0,
        attrs: { id: {}, name: {} },
        selectable: !1,
        draggable: !1,
        toDOM: (e) => [
          "span",
          {
            "data-mention-id": e.attrs.id,
            "data-mention-name": e.attrs.name,
            class: "prosemirror-mention-node bg-warning-100",
          },
          "@" + e.attrs.name,
        ],
        parseDOM: [
          {
            tag: "span[data-mention-id][data-mention-name]",
            getAttrs: (e) => ({
              id: e.getAttribute("data-mention-id"),
              name: e.getAttribute("data-mention-name"),
            }),
          },
        ],
        parseMarkdown: {
          match: ({ type: e }) => "text" === e,
          runner: (e, t, n) => {
            const o = t.id,
              r = t.name;
            e.openNode(n, { id: o, name: r }), e.closeNode();
          },
        },
        toMarkdown: {
          match: (e) => "mention" === e.type.name,
          runner: (e, t) => {
            e.addNode("text", void 0, "@" + t.attrs.name, {
              id: t.attrs.id,
              name: t.attrs.name,
            });
          },
        },
      }));
      var ie = n(759784),
        le = n(764186),
        ae = n(171152),
        se = n(838007),
        ce = n(813110),
        de = n(283888),
        ue = n(525834),
        me = n(722030),
        fe = n(916353),
        pe = n(713222),
        ve = n(480224),
        ge = n(854358),
        he = n(298784),
        xe = n(285556);
      function be(e, t, n, o, r, i, l) {
        try {
          var a = e[i](l),
            s = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(s) : Promise.resolve(s).then(o, r);
      }
      function ye(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(t, n);
            function l(e) {
              be(i, o, r, l, a, "next", e);
            }
            function a(e) {
              be(i, o, r, l, a, "throw", e);
            }
            l(void 0);
          });
        };
      }
      function we(e, t, n) {
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
      function ke(e) {
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
              we(e, t, n[t]);
            });
        }
        return e;
      }
      const je = new b.H$("LanguageToolPlugin");
      var Ce;
      !(function (e) {
        (e.Fetching = "languageToolIsFetching"),
          (e.SelectedMatchUpdated = "selectedMatchUpdated"),
          (e.Update = "languageToolUpdate");
      })(Ce || (Ce = {}));
      const Se = (0, ve.oM)(
          { enabled: () => !1, language: ge.SupportedLanguages.auto },
          "languageToolConfig"
        ),
        Ee = (0, ve.oM)(
          {
            isFetching: !1,
            selectedMatch: null,
            anchorElement: null,
            ignoredWords: new Set(),
            matches: [],
          },
          "languageToolState"
        ),
        Oe = (0, i.uW)("languageToolDismiss"),
        Ne = (0, i.uW)("languageToolAcceptSuggestion");
      const Pe = (e) => (
        e.inject(Se),
        e.inject(Ee),
        ye(function* () {
          yield e.wait(i.R3), yield e.wait(i.rm);
          let t = H.EH.empty,
            n = [],
            o = !1;
          const r = (t, n) => {
            e.update(Ee, (e) =>
              ke({}, e, {
                selectedMatch: null !== t && void 0 !== t ? t : null,
                anchorElement: null !== n && void 0 !== n ? n : null,
              })
            );
          };
          e.get(i.Xo).create(Oe, (n) => (o, r) => {
            const { ignoredWords: i } = e.get(Ee);
            if (!n) return !1;
            const { from: l, to: a } =
              null === n || void 0 === n ? void 0 : n.matchSelection.range;
            (t = t.remove(t.find(l, a))),
              null === r || void 0 === r || r(o.tr.setMeta(Ce.Update, !0));
            const s = o.doc.textBetween(l, a);
            return (
              i.add(s),
              e.update(Ee, (e) =>
                ke({}, e, {
                  ignoredWords: i,
                  selectedMatch: null,
                  anchorElement: null,
                })
              ),
              c(o.doc),
              !0
            );
          }),
            e.get(i.Xo).create(Ne, (n) => (o, r) => {
              if (!n) return !1;
              const { from: i, to: l } = n.matchSelection.range;
              t = t.remove(t.find(i, l));
              const a = o.tr.insertText(n.replacement.value, i, l);
              return (
                null === r || void 0 === r || r(a),
                e.update(Ee, (e) =>
                  ke({}, e, { selectedMatch: null, anchorElement: null })
                ),
                c(a.doc),
                !0
              );
            });
          const l = (function () {
              var n = ye(function* (n, o, r) {
                const { enabled: l, language: a } = e.get(Se);
                if (!l()) return;
                const { ignoredWords: s, matches: c } = e.get(Ee);
                if (!a || !o) return;
                const d = yield (0, xe.ZP)(
                    null,
                    "internal/genai/languageTool",
                    {
                      body: { text: o, language: a },
                      maxRetries: 2,
                      method: "POST",
                      parseAndHandle: !0,
                      redirectOnUnauthorized: !0,
                    }
                  ),
                  { matches: u } = d,
                  m = [],
                  f = [];
                for (const e of u) {
                  const t = e.offset + r,
                    n = t + e.length,
                    i = o.substring(e.offset, e.offset + e.length);
                  s.has(i) ||
                    (f.push({ match: e, range: { from: t, to: n } }),
                    m.push(
                      ((p = e),
                      (v = t),
                      (g = n),
                      H.p.inline(v, g, {
                        class:
                          "grammar-error underline decoration-danger-500 decoration-wavy underline-offset-2 cursor-pointer",
                        nodeName: "span",
                        match: JSON.stringify({ match: p, from: v, to: g }),
                      }))
                    ));
                }
                var p, v, g;
                const h = t.find(r, r + o.length);
                (t = t.remove(h)), (t = t.add(n, m));
                const x = c.filter(
                  (e) => e.range.to < r || e.range.from > r + o.length
                );
                e.update(Ee, (e) => ke({}, e, { matches: [...f, ...x] }));
                const b = e.get(i.U7);
                b.dispatch(b.state.tr.setMeta(Ce.Update, !0));
              });
              return function (e, t, o) {
                return n.apply(this, arguments);
              };
            })(),
            a = (0, he.debounce)(l, 100);
          let s = 0;
          const c = (function () {
              var t = ye(function* (t, r = 0) {
                n = [];
                let i = 0;
                null === t ||
                  void 0 === t ||
                  t.descendants((e, t) => {
                    if (!e.isText) return void (i += 1);
                    const o = { text: "", from: -1, to: -1 };
                    var l, a, s;
                    n[i]
                      ? ((o.text =
                          n[i].text +
                          (null !== (l = e.text) && void 0 !== l ? l : "")),
                        (o.from = n[i].from + r),
                        (o.to = o.from + o.text.length + r))
                      : ((o.text =
                          null !== (a = e.text) && void 0 !== a ? a : ""),
                        (o.from = t + r),
                        (o.to =
                          t +
                          r +
                          (null !== (s = e.text) && void 0 !== s ? s : "")
                            .length));
                    n[i] = o;
                  }),
                  (n = n.filter(Boolean));
                let a = "";
                const s = [];
                let c = 0 + r,
                  d = !0,
                  u = 1 + r;
                for (const { text: e, from: o, to: l } of n) {
                  if (d) {
                    const e = o - u;
                    e > 0 && (a += Array(e + 1).join(" "));
                  } else (c = o), (d = !0);
                  if (
                    ((u = l), (a += e), a.trim().split(/\s+/).length >= 500)
                  ) {
                    const e = s.length ? c : c + 1;
                    s.push({ from: e, text: a }), (a = ""), (d = !1);
                  }
                }
                s.push({ from: s.length ? c : 1, text: a });
                const m = s.map(({ text: e, from: n }) => l(t, e, n));
                e.update(Ee, (e) => ke({}, e, { isFetching: !0 })),
                  Promise.all(m)
                    .then(
                      (t) => (
                        e.update(Ee, (e) => ke({}, e, { isFetching: !1 })), t
                      )
                    )
                    .catch((e) => {
                      console.error(e);
                    }),
                  (o = !0);
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            d = (0, he.debounce)(c, 300),
            u = new b.Sy({
              key: je,
              props: {
                decorations(e) {
                  return this.getState(e);
                },
                attributes: { spellcheck: "false" },
                handlePaste(t) {
                  const { enabled: n } = e.get(Se);
                  if (!n()) return !1;
                  const { docChanged: o } = t.state.tr;
                  return o && d(t.state.tr.doc), !1;
                },
                handleClick(e, t, n) {
                  d(e.state.tr.doc);
                  const o = n.target;
                  if (o && o.className && /grammar-error/.test(o.className)) {
                    var i;
                    const e =
                      null === (i = o.getAttribute("match")) || void 0 === i
                        ? void 0
                        : i.trim();
                    if (!e) return void r();
                    const { match: t, from: n, to: l } = JSON.parse(e);
                    return (
                      e && r({ match: t, range: { from: n, to: l } }, o), !0
                    );
                  }
                },
              },
              state: {
                init: (n, o) => {
                  const { enabled: r } = e.get(Se);
                  return r()
                    ? ((t = H.EH.create(o.doc, [])), c(o.doc), t)
                    : H.EH.empty;
                },
                apply: (n) => {
                  const { enabled: r } = e.get(Se);
                  if (!r()) return H.EH.empty;
                  if (n.getMeta(Ce.Update)) return t;
                  if (n.docChanged)
                    if (o) {
                      const {
                        selection: { from: t, to: o },
                      } = n;
                      let r = { node: n.doc, pos: 0 };
                      n.doc.descendants((e, n) => {
                        if (!e.isBlock) return !1;
                        const [i, l] = [n, n + e.nodeSize];
                        return i <= t && o <= l
                          ? (e.descendants((e, i) => {
                              const [l, a] = [n + i, n + i + e.nodeSize];
                              l <= t &&
                                o <= a &&
                                (r = { node: e, pos: n + i + 1 });
                            }),
                            !1)
                          : void 0;
                      }),
                        r.node &&
                          "doc" !== r.node.type.name &&
                          ((t, n) => {
                            const { enabled: o } = e.get(Se);
                            if (!o()) return;
                            const r = t.textContent,
                              i = n !== s ? l(t, r, n) : a(t, r, n);
                            i &&
                              (e.update(Ee, (e) =>
                                ke({}, e, { isFetching: !0 })
                              ),
                              i
                                .then((t) =>
                                  e.update(Ee, (e) =>
                                    ke({}, e, { isFetching: !1 })
                                  )
                                )
                                .catch((e) => console.error(e))),
                              (s = n);
                          })(r.node, r.pos + 1),
                        r.node && "doc" === r.node.type.name && d(n.doc);
                    } else d(n.doc);
                  return (t = t.map(n.mapping, n.doc)), t;
                },
              },
            });
          return (
            e.update(i.ZV, (e) => [...e, u]),
            e.update(Se, (e) => ke({}, e, { isFetching: !0 })),
            setTimeout(() => {
              e.isInjected(Se) &&
                e.update(Se, (e) => ke({}, e, { isFetching: !1 }));
            }, 5e3),
            ye(function* () {
              e.update(i.ZV, (e) => e.filter((e) => e !== u)),
                e.remove(Se),
                e.remove(Ee),
                e.get(i.Xo).remove(Oe),
                e.get(i.Xo).remove(Ne);
            })
          );
        })
      );
      function Te() {
        const { 0: e, 1: t } = (0, r.useState)(!1),
          { 0: n, 1: i } = (0, r.useState)([]),
          [a, s] = (0, l.fz)(),
          c = s();
        if (
          ((0, r.useEffect)(() => {
            const e = (function (e) {
                if (!e) return;
                return e.ctx.inject(Ee), e.ctx.get(Ee).isFetching;
              })(c),
              n = (function (e) {
                if (!e) return;
                return e.ctx.inject(Ee), e.ctx.get(Ee).matches;
              })(c);
            (0, he.isNil)(n) || i(n), (0, he.isNil)(e) || t(e);
            const o =
              null === c || void 0 === c
                ? void 0
                : c.ctx.use(Ee).on((e) => {
                    t(e.isFetching), i(e.matches);
                  });
            return () => {
              null === o || void 0 === o || o();
            };
          }, [c]),
          a)
        )
          return null;
        const d = e ? "Checking grammar" : "Grammar mistakes",
          u = n.length;
        return e
          ? (0, o.jsx)(me.$, { size: "sm" })
          : (0, o.jsx)(fe.u, {
              text: d,
              delayDuration: 0,
              target: (0, o.jsx)("div", {
                className: (0, U.default)(
                  "rounded-full text-neutral-0 w-6 h-6 flex items-center justify-center select-none transition-all",
                  { "bg-info-300": !u, "bg-danger-300": u }
                ),
                children: u || (0, o.jsx)(pe.J, { icon: "check", size: "sm" }),
              }),
            });
      }
      var Ie = n(276281),
        Re = n(983341),
        Ae = n(219502);
      function Me(e, t, n) {
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
      function De(e) {
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
              Me(e, t, n[t]);
            });
        }
        return e;
      }
      const Le = () => {
        const [e, t] = (0, l.fz)(),
          n = t(),
          { 0: a, 1: s } = (0, r.useState)(null),
          { 0: c, 1: d } = (0, r.useState)(null),
          { 0: u, 1: m } = (0, r.useState)(null);
        (0, r.useEffect)(() => {
          const e = null === n || void 0 === n ? void 0 : n.ctx.get(Ee);
          (0, he.isNil)(e) || (d(e.anchorElement), m(e.selectedMatch));
          return null === n || void 0 === n
            ? void 0
            : n.ctx.use(Ee).on((e) => {
                d(e.anchorElement), m(e.selectedMatch);
              });
        }, [n]);
        const { styles: f, attributes: p } = (0, Ie.D)(c, a, {
          placement: "top",
          modifiers: [
            { name: "preventOverflow", options: { mainAxis: !1 } },
            { name: "flip", options: { fallbackPlacements: ["bottom"] } },
          ],
        });
        (0, r.useEffect)(() => {
          function e(e) {
            !a ||
              a.contains(e.target) ||
              a.outerHTML.includes(e.target.outerHTML) ||
              null === n ||
              void 0 === n ||
              n.ctx.update(Ee, (e) =>
                De({}, e, { selectedMatch: null, anchorElement: null })
              );
          }
          return (
            document.addEventListener("mousedown", e),
            () => {
              document.removeEventListener("mousedown", e);
            }
          );
        }, [a, null === n || void 0 === n ? void 0 : n.ctx]);
        const v = (0, r.useCallback)(() => {
            null === n ||
              void 0 === n ||
              n.ctx.get(i.Xo).call(Oe, { matchSelection: u });
          }, [u, null === n || void 0 === n ? void 0 : n.ctx]),
          g = (0, r.useCallback)(
            (e, t) => {
              null === n ||
                void 0 === n ||
                n.ctx.get(i.Xo).call(Ne, { matchSelection: e, replacement: t });
            },
            [null === n || void 0 === n ? void 0 : n.ctx]
          );
        if (e) return null;
        const h = (0, o.jsxs)(Ae.p, {
          className: "max-w-xs",
          children: [
            (0, o.jsx)(Ae.p.Header, {
              className: "px-1 flex flex-col border-b border-neutral-200 mb-2",
              children: (0, o.jsx)("div", {
                className: "w-full flex flex-row justify-start",
                children: (0, o.jsx)(Ae.p.HeaderLeft, {
                  className: "gap-1 flex flex-row justify-start",
                  children: (0, o.jsx)(Ae.p.Button, {
                    onClick: v,
                    icon: "trash",
                    tooltip: "Dismiss",
                  }),
                }),
              }),
            }),
            (0, o.jsxs)("div", {
              className:
                "px-3 pb-2 text-neutral-700 text-left text-sm w-full overflow-y-auto break-words",
              children: [
                null === u || void 0 === u ? void 0 : u.match.message,
                (null === u || void 0 === u ? void 0 : u.match.replacements) &&
                  u.match.replacements.length > 0 &&
                  (0, o.jsxs)("div", {
                    className: "mt-2",
                    children: [
                      (0, o.jsx)("div", {
                        className: "font-semibold",
                        children: "Suggestions:",
                      }),
                      (0, o.jsx)("ul", {
                        className: "flex gap-1",
                        children:
                          null === u || void 0 === u
                            ? void 0
                            : u.match.replacements
                                .slice(0, 3)
                                .map((e, t) =>
                                  (0, o.jsx)(
                                    "li",
                                    {
                                      onClick: () => g(u, e),
                                      className:
                                        "bg-danger-200 rounded-lg p-1 cursor-pointer",
                                      children: e.value,
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
        return (0, o.jsx)(
          "div",
          De({ ref: s, style: f.popper }, p.popper, {
            className: "z-30",
            children: (0, o.jsx)(Re.u, {
              show: !(0, he.isNil)(c) && !(0, he.isNil)(u),
              appear: !0,
              enter: "transition-all duration-300",
              enterFrom: "opacity-0 -translate-y-1",
              enterTo: "opacity-100 translate-y-0",
              leave: "transition-all duration-300",
              leaveFrom: "opacity-100 translate-y-0",
              leaveTo: "opacity-0 -translate-y-1",
              as: "div",
              children: h,
            }),
          })
        );
      };
      var Fe = n(667211),
        ze = n(400507);
      function He(e, t, n, o, r, i, l) {
        try {
          var a = e[i](l),
            s = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(s) : Promise.resolve(s).then(o, r);
      }
      function Ue(e, t, n) {
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
      function Be(e) {
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
              Ue(e, t, n[t]);
            });
        }
        return e;
      }
      function We(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      const Ze = ({ readOnly: e = !1 }) => {
          const [t, n] = (0, l.fz)();
          if (t) return null;
          const r = n();
          if (!r) return null;
          const a = r.ctx.get(i.im),
            s = a.doc.textBetween(0, a.doc.content.size, "\n\n", "\n");
          return (0, o.jsx)(ie.Z, { text: s, active: !e });
        },
        Xe = (0, r.memo)(function ({
          milkdownRef: e,
          cardRef: t = { current: null },
          text: n,
          onChange: b,
          onBlur: w,
          disablePasting: T = !1,
          setShowDisablePastingAlert: I,
          handleMouseLeave: R,
          milkdownEditorConfig: A,
          codingConfig: M,
          readOnly: D = !1,
          childId: F = "",
          enableInlineComments: z = !1,
          enableSpellingCheck: H = !1,
          enableGrammarCheck: U = !1,
          enableRTLText: B,
          enableWordCounter: Z,
          turnIndex: $,
          useDeprecatedCodeBlock: te = !1,
          overrideTextSelectionCommentEnabled: ne = !1,
        }) {
          var ie, me, fe, pe, ve, he, xe, be;
          const ye = (0, r.useContext)(Y.p),
            {
              canEditComments: we,
              areCommentsReadOnly: ke,
              forceInlineCommentPosition: je,
            } = ye,
            { 0: Ce, 1: Ee } = (0, r.useState)(null),
            Oe = (0, ce.y)((e) => e.selection),
            Ne = (0, r.useRef)(D),
            Ie = (0, r.useRef)(z),
            Re = (0, r.useRef)(U),
            Ae = ue.Z.getState(),
            Me = (function (e) {
              if (e)
                return Object.values(ge.SupportedLanguages).includes(e) ||
                  Object.values(ge.SupportedLanguages).includes(e.split("-")[0])
                  ? e
                  : void 0;
            })(null === Ae || void 0 === Ae ? void 0 : Ae.language_code),
            De = (0, r.useRef)(w),
            Ue = (0, r.useRef)(b),
            [, Xe] = (0, l.fz)(),
            _e = (0, r.useRef)(!1);
          (0, r.useEffect)(() => {
            De.current = w;
          }, [w]),
            (0, r.useEffect)(() => {
              Ue.current = b;
            }, [b]);
          const $e = !!je,
            Ke = (Ie.current && Ne.current && !!we) || ne,
            Ve = Ke || !!ye.enableFactChecker,
            qe = Ke && !Oe.empty,
            Je = ye.enableFactChecker && !Oe.empty,
            Ge = (0, de.U)((e) => e.setReadOnlyStateForChildId),
            Qe = (0, j.eK)(),
            Ye = (0, j.AQ)(),
            et = (0, j.mg)(),
            tt = (0, r.useMemo)(
              () =>
                [
                  u.r0,
                  X,
                  W,
                  (e) => {
                    return (
                      (t = function* () {
                        e.set(X.key, { view: Qe({ component: _ }) });
                      }),
                      function () {
                        var e = this,
                          n = arguments;
                        return new Promise(function (o, r) {
                          var i = t.apply(e, n);
                          function l(e) {
                            He(i, o, r, l, a, "next", e);
                          }
                          function a(e) {
                            He(i, o, r, l, a, "throw", e);
                          }
                          l(void 0);
                        });
                      }
                    );
                    var t;
                  },
                  K(Ye),
                ].flat(),
              [Qe, Ye]
            ),
            nt = (0, r.useMemo)(
              () =>
                (null === A || void 0 === A ? void 0 : A.enableMathPlugin)
                  ? [
                      (0, y.u)(d.Nh.node, () =>
                        et({ component: q.Z, stopEvent: () => !0 })
                      ),
                      d.mA,
                    ].flat()
                  : [],
              [et, null === A || void 0 === A ? void 0 : A.enableMathPlugin]
            ),
            ot = (0, r.useMemo)(
              () =>
                [
                  (0, y.u)(c.W0.node, () =>
                    et({
                      component: (0, r.memo)((e) => {
                        var t,
                          { node: n } = e,
                          r = We(e, ["node"]);
                        return (0, o.jsx)(
                          V.Z,
                          Be({}, r, {
                            childId: F,
                            customCodeEnvironments:
                              null === M || void 0 === M
                                ? void 0
                                : M.customCodeEnvironments,
                            allowExecution:
                              null !==
                                (t =
                                  null === M || void 0 === M
                                    ? void 0
                                    : M.enableExecutableCodeMarkdown) &&
                              void 0 !== t
                                ? t
                                : null === A || void 0 === A
                                ? void 0
                                : A.enableExecutableCodeBlocks,
                            useDeprecated: te,
                          })
                        );
                      }),
                    })
                  ),
                ].flat(),
              [
                et,
                null === M || void 0 === M
                  ? void 0
                  : M.enableExecutableCodeMarkdown,
                null === A || void 0 === A
                  ? void 0
                  : A.enableExecutableCodeBlocks,
                null === M || void 0 === M ? void 0 : M.customCodeEnvironments,
                F,
                te,
              ]
            ),
            rt = (0, r.useMemo)(() => {
              var e;
              return (
                null === A ||
                void 0 === A ||
                null === (e = A.mentionCandidates) ||
                void 0 === e
                  ? void 0
                  : e.length
              )
                ? [
                    (0, y.x6)(() =>
                      oe({
                        mentionCandidates:
                          null === A || void 0 === A
                            ? void 0
                            : A.mentionCandidates,
                      })
                    ),
                    re,
                  ]
                : [];
            }, [null === A || void 0 === A ? void 0 : A.mentionCandidates]);
          (0, l.jE)(
            (e) =>
              i.ML.make()
                .config((t) => {
                  t.set(i.KP, e), t.set(i.Dn, n);
                })
                .config((e) => {
                  const t = e.get(m.QC);
                  t.markdownUpdated((e, t, n) => {
                    if (t !== n) {
                      var o;
                      const n = e.get(i.U7),
                        { state: r } = n,
                        { tr: l } = r,
                        a = l.time,
                        s = (0, le.Ht)(t);
                      null === (o = Ue.current) ||
                        void 0 === o ||
                        o.call(Ue, t, a, s);
                    }
                  }),
                    t.blur((e) => {
                      var t;
                      const n = e.get(i.U7),
                        { doc: o } = n.state,
                        r = e.get(i.Ck)(o);
                      null === (t = De.current) ||
                        void 0 === t ||
                        t.call(De, r),
                        (_e.current = !1);
                    }),
                    t.focus(() => {
                      _e.current = !0;
                    }),
                    e.update(i.i8, (e) =>
                      Be({}, e, {
                        editable: () => !Ne.current,
                        attributes: {
                          spellcheck: H ? "true" : "false",
                          class:
                            "milkdown-theme-override milkdown-theme-prism-override max-w-full min-h-[120px]",
                        },
                      })
                    ),
                    e.set(c.zO.key, () => ({ class: "text-sm" })),
                    e.set(G.X7.key, { childId: F, enabled: z }),
                    e.set(Q.iV.key, { enabled: () => !0, childId: F }),
                    e.update(Se, (e) =>
                      Be({}, e, {
                        enabled: () =>
                          (
                            null === Ae || void 0 === Ae
                              ? void 0
                              : Ae.language_code
                          )
                            ? Re.current && void 0 !== Me
                            : Re.current,
                        language:
                          null !== Me && void 0 !== Me
                            ? Me
                            : ge.SupportedLanguages.en,
                      })
                    ),
                    e.set(p.RI.key, { type: "space", size: 4 }),
                    e.set(v.Vn.key, {
                      configureRefractor: (e) => {
                        e.register(C.Z),
                          e.register(S.Z),
                          e.register(E.Z),
                          e.register(O.Z),
                          e.register(N.Z),
                          e.register(P.Z);
                      },
                    }),
                    e.set(i.$D, { fences: !0 }),
                    e.set(h.Ge.key, { view: Qe({ component: J }) }),
                    e.set(x.ox.key, { width: 3, class: "!bg-primary-300" });
                })
                .config(s.Q)
                .use(m.X3)
                .use(f.m8)
                .use(c.iO)
                .use(tt)
                .use(v.MS)
                .use(p.WY)
                .use(g.Q$)
                .use(
                  k({
                    disablePasting: T,
                    onPaste: T
                      ? () => (null === I || void 0 === I ? void 0 : I(!0))
                      : () => {},
                    onMouseLeave: R,
                  })
                )
                .use(ot)
                .use(nt)
                .use(h.Ge)
                .use(x.oc)
                .use(G.BJ)
                .use(Q.Q)
                .use(rt)
                .use(Pe),
            [F]
          ),
            (0, G.NC)(Xe),
            (0, r.useEffect)(() => {
              (Ne.current = D), Ge(F, D);
              const e = Xe();
              if (!e) return;
              const t = e.ctx.get(i.U7);
              t && t.setProps({ editable: () => !D });
            }, [D, F, Ge]),
            (0, r.useEffect)(() => {
              Ie.current = z;
            }, [z]),
            (0, r.useEffect)(() => {
              Re.current = U;
            }, [U]),
            (0, r.useEffect)(() => {
              const e = Xe();
              (null === e || void 0 === e ? void 0 : e.ctx.get(G.X7.key)) &&
                (null === e ||
                  void 0 === e ||
                  e.ctx.update(G.X7.key, (e) => Be({}, e, { enabled: z })));
            }, [z]),
            (0, r.useEffect)(() => {
              const e = Xe();
              if (!e || _e.current) return;
              const t = e.action((e) => {
                const t = e.get(i.U7);
                return e.get(i.Ck)(t.state.doc);
              });
              n !== t && e.action((0, y.ko)(n, !0));
            }, [n, Xe]),
            (0, r.useImperativeHandle)(e, () => ({
              update: (e) => {
                const t = Xe();
                null === t ||
                  void 0 === t ||
                  t.action((t) => {
                    const n = t.get(i.U7),
                      o = t.get(i._z)(e);
                    if (!o) return;
                    const r = n.state;
                    n.dispatch(
                      r.tr.replace(
                        0,
                        r.doc.content.size,
                        new a.p2(o.content, 0, 0)
                      )
                    );
                  });
              },
            }));
          const it = (0, o.jsxs)("div", {
              className:
                "box-border overflow-hidden relative leading-normal border rounded-md border-solid resize-none border-neutral-200 focus-within:ring-2 ring-primary-400",
              ref: Ee,
              children: [
                (0, o.jsx)(L, { readOnly: D }),
                (0, o.jsx)(ee.Z, {
                  enableRTL: B,
                  children: (0, o.jsxs)("div", {
                    className: "w-full",
                    children: [
                      (0, o.jsx)("div", {
                        className:
                          "py-2 pr-2 pl-10 max-h-[600px] min-h-[120px] break-words overflow-scroll overflow-x-auto overscroll-none w-full " +
                          (D && !Ve ? "cursor-not-allowed" : ""),
                        children: (0, o.jsx)(l.Nl, {}),
                      }),
                      [Z, U].some((e) => e) &&
                        (0, o.jsxs)("div", {
                          className:
                            "border-t border-neutral-200 px-2 py-1 bg-neutral-50 flex justify-between",
                          children: [
                            (0, o.jsx)("div", {
                              children: Z && (0, o.jsx)(Ze, { readOnly: D }),
                            }),
                            (0, o.jsx)("div", {
                              children: U && (0, o.jsx)(Te, {}),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
            lt = (0, o.jsx)(ae.O, {
              view:
                null === (ie = Xe()) ||
                void 0 === ie ||
                null === (me = ie.ctx) ||
                void 0 === me
                  ? void 0
                  : me.get(i.U7),
              anchorRef: t.current,
              editorRef: Ce,
              readOnly: !!ke,
              enableEditorClickAway: !!D,
              canEdit: !!we,
              childId: F,
              isInlinePosition: $e,
            }),
            at = (0, o.jsx)(se.M, {
              view:
                null === (fe = Xe()) ||
                void 0 === fe ||
                null === (pe = fe.ctx) ||
                void 0 === pe
                  ? void 0
                  : pe.get(i.U7),
              anchorRef: t.current,
              childId: F,
              target: (0, o.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  qe &&
                    (0, o.jsx)(Fe.x, {
                      view:
                        null === (ve = Xe()) ||
                        void 0 === ve ||
                        null === (he = ve.ctx) ||
                        void 0 === he
                          ? void 0
                          : he.get(i.U7),
                      childId: F,
                      turnIndex: $,
                    }),
                  Je && (0, o.jsx)(ze.Z, {}),
                ],
              }),
            });
          return (0, o.jsxs)(o.Fragment, {
            children: [
              $e
                ? (0, o.jsxs)("div", {
                    className: "flex w-full gap-1",
                    children: [
                      (0, o.jsx)("div", {
                        className: "flex-grow",
                        children: it,
                      }),
                      qe &&
                        (0, o.jsx)(Fe.x, {
                          view:
                            null === (xe = Xe()) ||
                            void 0 === xe ||
                            null === (be = xe.ctx) ||
                            void 0 === be
                              ? void 0
                              : be.get(i.U7),
                          childId: F,
                          turnIndex: $,
                        }),
                    ],
                  })
                : (0, o.jsxs)(o.Fragment, { children: [it, lt, at] }),
              (0, o.jsx)(Le, {}),
            ],
          });
        }),
        _e = (0, r.memo)(function ({ children: e }) {
          return (0,
          o.jsx)(l.iz, { children: (0, o.jsx)(j.cL, { children: e }) });
        });
      var $e = Object.assign(Xe, { Wrapper: _e });
    },
    253086: function (e, t, n) {
      n.d(t, {
        X7: function () {
          return x;
        },
        NC: function () {
          return k;
        },
        BJ: function () {
          return j;
        },
      });
      var o = n(616711),
        r = n(942105),
        i = n(176905),
        l = n(166180),
        a = n(827378),
        s = n(813110),
        c = n(102396),
        d = n(298784),
        u = n.n(d),
        m = n(60042),
        f = n.n(m),
        p = n(216706);
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
              v(e, t, n[t]);
            });
        }
        return e;
      }
      const h = new o.H$("inlineCommentsPlugin"),
        x = (0, r.Tu)({ childId: "", enabled: !1 }, "inlineCommentConfig");
      function b(e, t, n) {
        const o = s.y.getState().selectedWorkerComment,
          r = (function (e, t) {
            return e.workerComments.filter(
              (e) =>
                e.childId === t &&
                !u().isNil(e.locationStart) &&
                !u().isNil(e.locationEnd) &&
                u().isNil(e.feedbackResponse)
            );
          })(t, n).map((e) =>
            i.p.inline(
              e.locationStart,
              e.locationEnd,
              {
                class: f()(
                  "comment hover:bg-primary-200 hover:cursor-pointer",
                  {
                    "bg-primary-100": e.workerCommentId !== o,
                    "bg-primary-200": e.workerCommentId === o,
                  }
                ),
                id: e.workerCommentId,
              },
              { inclusiveLeft: !0, inclusiveRight: !0 }
            )
          );
        return i.EH.create(e, r);
      }
      function y() {
        return s.y.getState();
      }
      const w = (0, r.x6)(
          (e) =>
            new o.Sy({
              key: h,
              state: {
                init(t, { doc: n }) {
                  const o = y(),
                    { childId: r } = e.get(x.key);
                  return { initVersion: !0, state: o, decorations: b(n, o, r) };
                },
                apply(t, n) {
                  let o = t.getMeta(h);
                  const { childId: r } = e.get(x.key);
                  var i, l;
                  return (
                    !o && n.initVersion && (o = n.state),
                    t.docChanged || o
                      ? {
                          initVersion: !1,
                          state: g({}, y(), {
                            workerComments: [
                              ...(null !==
                                (i =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.workerComments) && void 0 !== i
                                ? i
                                : n.state.workerComments),
                            ],
                            selectedWorkerComment:
                              null !==
                                (l =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.selectedWorkerComment) && void 0 !== l
                                ? l
                                : n.state.selectedWorkerComment,
                          }),
                          decorations: b(
                            t.doc,
                            null !== o && void 0 !== o ? o : n.state,
                            r
                          ),
                        }
                      : n
                  );
                },
              },
              props: {
                handleClick(e, t, n) {
                  const o = n.target;
                  if (o && o.className && o.id && /comment/.test(o.className)) {
                    const t = s.y.getState();
                    t.selectWorkerComment(o.id);
                    const n = e.state.tr;
                    return (
                      null === n || void 0 === n || n.setMeta(h, t),
                      n &&
                        queueMicrotask(() => {
                          null === e || void 0 === e || e.dispatch(n);
                        }),
                      !0
                    );
                  }
                },
                decorations(e) {
                  var t, n;
                  return null !==
                    (n =
                      null === (t = this.getState(e)) || void 0 === t
                        ? void 0
                        : t.decorations) && void 0 !== n
                    ? n
                    : i.EH.empty;
                },
              },
              filterTransaction(t, n) {
                const { childId: o, enabled: r } = e.get(x.key);
                if (!r) return !0;
                const i = h.getState(n).state.workerComments,
                  a = t.doc.nodeSize - t.before.nodeSize,
                  d = !t.before.eq(t.doc);
                if (
                  1 === t.steps.length &&
                  t.steps[0] instanceof l.Pu &&
                  t.steps[0].slice.content instanceof c.HY &&
                  t.steps[0].slice.content.content &&
                  1 === t.steps[0].slice.content.content.length &&
                  "" === t.steps[0].slice.content.content[0].textContent
                )
                  return !0;
                function m(
                  e,
                  t = "You have to rate the comment to be able to edit the highlighted area!"
                ) {
                  s.y.getState().selectWorkerComment(e[0].workerCommentId),
                    window.alert(t);
                }
                if (d) {
                  const e = t.selection.from - a,
                    n = i.filter(
                      (e) =>
                        e.childId === o &&
                        !u().isNil(e.locationStart) &&
                        !u().isNil(e.locationEnd) &&
                        u().isNil(e.feedbackResponse)
                    ),
                    r = n.filter(
                      (t) =>
                        (t.locationStart < e && t.locationEnd > e) ||
                        (a < 0 && t.locationEnd === e)
                    );
                  if (r.length) return m(r), !1;
                  if (a < -1) {
                    const e = n.filter(
                      (e) =>
                        (e.locationEnd > t.selection.from &&
                          e.locationEnd < t.selection.from + Math.abs(a)) ||
                        (e.locationStart < t.selection.from + Math.abs(a) &&
                          e.locationStart > t.selection.from)
                    );
                    for (const n of e) {
                      const e = n.locationEnd - t.selection.from;
                      if (n.locationEnd - e <= n.locationStart)
                        return (
                          m(
                            [n],
                            "You have to rate the comment to be able to delete the highlighted area!"
                          ),
                          !1
                        );
                    }
                  }
                  if (-1 === a) {
                    const t = n.filter(
                      (t) => t.locationStart < e && t.locationEnd >= e
                    );
                    if (t.length && t[0].locationStart === t[0].locationEnd + a)
                      return (
                        m(
                          t,
                          "You have to rate the comment to be able to remove the highlighted area!"
                        ),
                        !1
                      );
                  }
                  const l = n.map((n) => {
                      if (
                        (a < -1 &&
                          n.locationEnd > t.selection.from &&
                          n.locationEnd < t.selection.from + Math.abs(a)) ||
                        (n.locationStart < t.selection.from + Math.abs(a) &&
                          n.locationStart > t.selection.from)
                      ) {
                        const e = n.locationEnd - t.selection.from;
                        return g({}, n, {
                          locationStart: n.locationStart,
                          locationEnd: n.locationEnd
                            ? n.locationEnd - e
                            : void 0,
                        });
                      }
                      return n.locationStart >= e
                        ? g({}, n, {
                            locationStart: n.locationStart
                              ? n.locationStart + a
                              : void 0,
                            locationEnd: n.locationEnd
                              ? n.locationEnd + a
                              : void 0,
                          })
                        : n.locationStart < e && n.locationEnd >= e
                        ? g({}, n, {
                            locationStart: n.locationStart,
                            locationEnd: n.locationEnd
                              ? n.locationEnd + a
                              : void 0,
                          })
                        : g({}, n);
                    }),
                    c = l.map((e) => ({
                      id: e.workerCommentId,
                      updater: ([t, n]) => [e.locationStart, e.locationEnd],
                    }));
                  setTimeout(
                    () => s.y.getState().batchUpdateWorkerCommentLocations(c),
                    10
                  ),
                    t.setMeta(h, g({}, s.y.getState(), { workerComments: l }));
                }
                return !0;
              },
            })
        ),
        k = (e) => {
          (0, a.useEffect)(
            () =>
              s.y.subscribe(
                (e) => e,
                (t, n) => {
                  if (
                    t.selectedWorkerComment === n.selectedWorkerComment &&
                    t.workerComments.length === n.workerComments.length
                  )
                    return;
                  const o = e(),
                    r = null === o || void 0 === o ? void 0 : o.ctx.get(p.U7),
                    i = null === r || void 0 === r ? void 0 : r.state.tr;
                  null === i || void 0 === i || i.setMeta(h, t),
                    i && (null === r || void 0 === r || r.dispatch(i));
                }
              ),
            []
          );
        },
        j = [w, x];
    },
    417093: function (e, t, n) {
      n.d(t, {
        iV: function () {
          return c;
        },
        Q: function () {
          return u;
        },
      });
      var o = n(616711),
        r = n(942105),
        i = n(176905),
        l = n(813110);
      const a = (0, r.x6)((e) => {
          const { enabled: t } = e.get(c.key);
          return new o.Sy({
            state: {
              init: () => ({ deco: i.EH.empty }),
              apply(e, t, n, o) {
                const r = o.selection;
                if (r) {
                  const e = [
                    i.p.inline(
                      r.$from.pos,
                      r.$to.pos,
                      { class: "bg-warning-100" },
                      { inclusiveLeft: !0, inclusiveRight: !0 }
                    ),
                  ];
                  return { deco: i.EH.create(o.doc, e) };
                }
                return t;
              },
            },
            props: {
              decorations(e) {
                return e && t() && this.getState(e)
                  ? this.getState(e).deco
                  : null;
              },
            },
          });
        }),
        s = (0, r.Tu)({}, "textSelectionSpec"),
        c = (0, r.Tu)(
          { enabled: () => !1, childId: "" },
          "textSelectionConfig"
        ),
        d = (0, r.x6)(
          (e) =>
            new o.Sy({
              view: () => ({
                update: (t) => {
                  const { enabled: n, childId: o } = e.get(c.key);
                  if (!n()) return;
                  const { state: r } = t,
                    i = r.selection,
                    a = l.y.getState();
                  (a.selection.empty && i.empty) ||
                    a.setSelection({
                      empty: i.empty,
                      from: i.from,
                      to: i.to,
                      childId: o,
                      text: i.empty ? "" : r.doc.textBetween(i.from, i.to),
                    });
                },
              }),
            })
        ),
        u = [s, c, d, a];
    },
    476536: function (e, t, n) {
      var o = n(824246),
        r = n(339389),
        i = n(416534),
        l = n(827378),
        a = n(219502);
      t.Z = ({
        commentText: e,
        setCommentText: t,
        submitComment: n,
        discardComment: s,
        disableAutoFocus: c = !1,
      }) => {
        const d = (0, l.useRef)(null);
        return (0, o.jsxs)(a.p, {
          className: "w-80",
          children: [
            (0, o.jsx)(a.p.Header, {
              className: "px-3 border-b border-neutral-200",
              children: (0, o.jsx)(a.p.HeaderLeft, {
                children: (0, o.jsx)(a.p.Subtitle, {
                  children: "Add a comment",
                }),
              }),
            }),
            (0, o.jsx)(a.p.Body, {
              className: "border-t-0",
              children: (0, o.jsx)(r.K, {
                className: "pt-1",
                ref: d,
                id: "dynamic-textarea",
                rows: 1,
                onFocus: (e) => {
                  const t = e.target;
                  (t.style.height = "auto"),
                    (t.style.height = t.scrollHeight + "px"),
                    (t.style.maxHeight = "16rem");
                },
                autoFocus: !c,
                dynamic: !0,
                resizable: !1,
                onChange: (e) => {
                  t(e.target.value);
                },
                value: e,
                onKeyDown: (t) => {
                  t.shiftKey && "Enter" === t.key && (t.preventDefault(), n(e)),
                    "Escape" === t.key && s();
                },
              }),
            }),
            (0, o.jsxs)(a.p.Footer, {
              className: "flex gap-2 justify-end border-t-0",
              children: [
                (0, o.jsx)(i.zx, {
                  onClick: s,
                  size: "sm",
                  variant: "neutral",
                  children: "Cancel",
                }),
                (0, o.jsx)(i.zx, {
                  onClick: () => {
                    n(e);
                  },
                  size: "sm",
                  variant: "primary",
                  children: "Comment",
                }),
              ],
            }),
          ],
        });
      };
    },
    667211: function (e, t, n) {
      n.d(t, {
        x: function () {
          return d;
        },
      });
      var o = n(824246),
        r = n(616711),
        i = n(827378),
        l = n(813110),
        a = n(711719),
        s = n(476536),
        c = n(534522);
      const d = ({ view: e, childId: t, overrideChildId: n, turnIndex: d }) => {
        const u = (0, l.y)((e) => e.selection),
          m = (0, l.y)((e) => e.deleteSelection),
          f = (0, l.y)((e) => e.addWorkerComment),
          p = (0, l.y)((e) => e.selectWorkerComment),
          v = (0, i.useContext)(c.p),
          { 0: g, 1: h } = (0, i.useState)(""),
          x = () => {
            null === e || void 0 === e || e.dom.blur(),
              null === e ||
                void 0 === e ||
                e.dispatch(
                  null === e || void 0 === e
                    ? void 0
                    : e.state.tr.setSelection(
                        r.Bs.create(
                          null === e || void 0 === e ? void 0 : e.state.doc,
                          0
                        )
                      )
                ),
              m();
          };
        return (0, o.jsx)(s.Z, {
          commentText: g,
          setCommentText: h,
          submitComment: (e) => {
            if (e.length) {
              const o = (0, a.v4)();
              f({
                workerCommentId: o,
                author: v.workerId,
                comment: e,
                turn: d,
                childId: t,
                locationStart: u.from,
                locationEnd: u.to,
                overrideChildId: n,
              }),
                p(o);
            }
            x();
          },
          discardComment: x,
          disableAutoFocus: !0,
        });
      };
    },
    655187: function (e, t, n) {
      var o = n(824246),
        r = n(339389),
        i = n(416534),
        l = n(572368),
        a = n(138944),
        s = n(298784),
        c = n(827378),
        d = n(813110),
        u = n(219502),
        m = n(720227);
      t.Z = ({
        workerComment: e,
        selectedCommentIndex: t,
        unresolvedComments: n,
        canEdit: f,
        readOnly: p,
        isInlinePosition: v = !1,
      }) => {
        const g = (0, d.y)((e) => e.updateWorkerComment),
          h = (0, d.y)((e) => e.deleteWorkerComment),
          x = (0, d.y)((e) => e.addFeedbackResponseToWorkerComment),
          b = (0, d.y)((e) => e.selectWorkerComment),
          { 0: y, 1: w } = (0, c.useState)(!1),
          { 0: k, 1: j } = (0, c.useState)(e.comment),
          C =
            !y && t - 1 >= 0 && n.at(t - 1)
              ? () => {
                  b(n.at(t - 1).workerCommentId);
                }
              : void 0,
          S =
            !y && t + 1 < n.length && n.at(t + 1)
              ? () => {
                  b(n.at(t + 1).workerCommentId);
                }
              : void 0,
          E = () => {
            (0, s.isNil)(C) ? ((0, s.isNil)(S) ? b(null) : S()) : C();
          },
          O = (0, c.useCallback)(() => {
            k.length && g(e.workerCommentId, k), w(!1);
          }, [k, g, e]),
          N = (0, c.useCallback)(() => {
            j(e.comment), w(!1);
          }, [j, e]),
          P = (0, c.useCallback)(
            (e) => {
              e.shiftKey && "Enter" === e.key && (e.preventDefault(), O()),
                "Escape" === e.key && N();
            },
            [O, N]
          ),
          T = (t) => {
            x(e.workerCommentId, t), E();
          },
          I = (0, c.useRef)(null);
        return (0, o.jsxs)(u.p, {
          className: (0, a.default)(
            "text-neutral-700 text-left text-sm break-words",
            { "max-w-xs": !y && !v, "w-80": y || v }
          ),
          children: [
            (0, o.jsxs)(u.p.Header, {
              className: "px-1 flex flex-col border-b border-neutral-200 mb-2",
              children: [
                (0, o.jsxs)("div", {
                  className: "w-full flex flex-row justify-start",
                  children: [
                    (0, o.jsxs)(u.p.HeaderLeft, {
                      className: "gap-1 flex flex-row justify-start",
                      children: [
                        (0, o.jsx)(u.p.Button, {
                          icon: "chevron-left",
                          onClick: C,
                          disabled: (0, s.isNil)(C),
                        }),
                        (0, o.jsx)(u.p.Button, {
                          icon: "chevron-right",
                          onClick: S,
                          disabled: (0, s.isNil)(S),
                        }),
                      ],
                    }),
                    (0, o.jsxs)(u.p.HeaderRight, {
                      children: [
                        !f &&
                          !p &&
                          (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)(u.p.Button, {
                                onClick: () => {
                                  T(l.FeedbackResponseType.Accept);
                                },
                                icon: [
                                  e.feedbackResponse ===
                                  l.FeedbackResponseType.Accept
                                    ? "fas"
                                    : "far",
                                  "thumbs-up",
                                ],
                              }),
                              (0, o.jsx)(u.p.Button, {
                                onClick: () => {
                                  T(l.FeedbackResponseType.Dismiss);
                                },
                                icon: [
                                  e.feedbackResponse ===
                                  l.FeedbackResponseType.Dismiss
                                    ? "fas"
                                    : "far",
                                  "thumbs-down",
                                ],
                              }),
                            ],
                          }),
                        f &&
                          !p &&
                          (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)(u.p.Button, {
                                onClick: () => {
                                  j(e.comment), w(!0);
                                },
                                icon: ["far", "edit"],
                                disabled: y,
                              }),
                              (0, o.jsx)(u.p.Button, {
                                onClick: () => {
                                  h(e.workerCommentId), E();
                                },
                                icon: ["far", "trash-alt"],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                !y &&
                  !!e.title &&
                  (0, o.jsx)(u.p.Subtitle, {
                    className: "px-2 w-full font-semibold",
                    children: e.title,
                  }),
              ],
            }),
            (0, o.jsx)("div", {
              className: (0, m.m)(
                "px-3 pb-2 w-full",
                !y && "max-h-64 overflow-y-auto whitespace-pre-wrap"
              ),
              children: y
                ? (0, o.jsx)(r.K, {
                    className: "pt-1",
                    ref: I,
                    id: "dynamic-textarea",
                    rows: 1,
                    onFocus: (e) => {
                      const t = e.target;
                      (t.style.height = "auto"),
                        (t.style.height = t.scrollHeight + "px"),
                        (t.style.maxHeight = "16rem");
                    },
                    autoFocus: !0,
                    dynamic: !0,
                    resizable: !1,
                    onChange: (e) => {
                      j(e.target.value);
                    },
                    value: k,
                    onKeyDown: P,
                  })
                : e.comment,
            }),
            y &&
              (0, o.jsxs)(u.p.Footer, {
                className: "flex gap-2 justify-end border-t-0",
                children: [
                  (0, o.jsx)(i.zx, {
                    onClick: N,
                    size: "sm",
                    variant: "neutral",
                    children: "Cancel",
                  }),
                  (0, o.jsx)(i.zx, {
                    onClick: O,
                    size: "sm",
                    variant: "primary",
                    children: "Save",
                  }),
                ],
              }),
          ],
        });
      };
    },
    525834: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const o = (0, n(236125).Ue)(() => ({}));
    },
  },
]);
