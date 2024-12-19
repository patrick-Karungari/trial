"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [19288],
  {
    547939: function (e, t, n) {
      n.d(t, {
        _O: function () {
          return i;
        },
        Q0: function () {
          return s;
        },
        KH: function () {
          return a;
        },
        mz: function () {
          return r;
        },
      });
      var o = n(599789);
      const i = 5,
        s = "ToolTutorials",
        a = "General",
        r = {
          [o.InstructionComponentType.Label]: {
            iconColor: "#00BFA5",
            iconName: "tag",
          },
          [o.InstructionComponentType.Attribute]: {
            iconColor: "#F8BB06",
            iconName: "asterisk",
          },
          [o.InstructionComponentType.Field]: {
            iconColor: "#F8BB06",
            iconName: "asterisk",
          },
          [o.InstructionComponentType.Rule]: {
            iconColor: "#EF3D57",
            iconName: "pencil-ruler",
          },
          [o.InstructionComponentType.RichText]: {
            iconColor: "#C634C3",
            iconName: "text-size",
          },
          [o.InstructionComponentType.Group]: {
            iconColor: "#6A11EA",
            iconName: "folder",
          },
          [o.AttachmentInstructionType.Iframe]: {
            iconColor: "#6A11EA",
            iconName: "link",
          },
          [o.AttachmentInstructionType.Image]: {
            iconColor: "#6A11EA",
            iconName: "file-image",
          },
          [o.AttachmentInstructionType.Pdf]: {
            iconColor: "#6A11EA",
            iconName: "file-pdf",
          },
          workflow: { iconColor: "#EF3D57", iconName: "list" },
          [s]: { iconColor: "#6DD2F0", iconName: "toolbox" },
        };
    },
    944765: function (e, t, n) {
      n.d(t, {
        S: function () {
          return I;
        },
        k: function () {
          return S;
        },
      });
      var o = n(824246),
        i = n(827378),
        s = n(298784),
        a = n.n(s),
        r = n(686677),
        l = n(872383),
        c = n(554211),
        d = n(59524),
        p = n(257881),
        u = n(433310),
        m = n(599789),
        h = n(951628),
        f = n(547939);
      var x = n(285556),
        v = n(749613);
      function y(e, t, n, o, i, s, a) {
        try {
          var r = e[s](a),
            l = r.value;
        } catch (c) {
          return void n(c);
        }
        r.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      function g(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var s = e.apply(t, n);
            function a(e) {
              y(s, o, i, a, r, "next", e);
            }
            function r(e) {
              y(s, o, i, a, r, "throw", e);
            }
            a(void 0);
          });
        };
      }
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
      function w(e) {
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
      }
      const j = i.createContext({
          quiz: void 0,
          setQuiz: (e) => {},
          title: "",
          enableDiff: !0,
          enableQuiz: !1,
          extraAlerts: {
            hasSensitiveContent: !1,
            isEdgeCase: !1,
            param_chunks: !1,
          },
          enableSidePanel: !1,
          hasVersionComparison: !1,
          shouldUseNGI: !1,
          handleStart: () => null,
          openQuiz: !1,
          setEnableDiff: (e) => null,
          setOpenQuiz: (e) => {},
          startButtonText: "",
          selectedSection: null,
          selectedPath: [],
          setSelectedPath: (e) => null,
          searchResult: null,
          setSearchResult: (e) => null,
          components: [],
          setComponents: () => null,
          showingInstructionsFn: (e) => null,
          setShowingInstructionsFn: (e) => {},
          isMobileView: !1,
          setIsMobileView: (e) => null,
          disableScrollOnMount: !1,
          scrollIntoView: -1,
          scrollToggle: !1,
          isLoading: !1,
          isEmbedded: !1,
          isCorpUser: !1,
          isOnboarding: !1,
          isRapidPreview: !1,
          typesGroup: [],
          timeSpentOnQuiz: 0,
          projectId: "",
          projectInstruction: null,
          customStartButton: void 0,
          doNotRenderChildrenSet: void 0,
        }),
        S = () => i.useContext(j);
      let T = null;
      const I = i.memo(
        ({
          projectId: e,
          assignmentId: t,
          startButtonText: n,
          isEmbedded: s,
          isMobileView: y,
          startTasks: b,
          user: S,
          userIsCustomer: I,
          isEdgeCase: C,
          isRapidPreview: k,
          instructionV2Res: N,
          children: E,
          customStartButton: z,
          disableDiff: O,
          disableScrollOnMount: A,
        }) => {
          const { query: P, pathname: D } = (0, r.useRouter)(),
            { id: R, componentId: Z, type: F, assignmentId: B, taskId: L } = P,
            { 0: _, 1: G } = (0, i.useState)(!1),
            { 0: Q, 1: $ } = (0, i.useState)(null),
            { 0: H, 1: M } = (0, i.useState)(),
            { 0: U, 1: W } = (0, i.useState)(0),
            { 0: V, 1: q } = (0, i.useState)(!1),
            { 0: X, 1: J } = (0, i.useState)(!1),
            { 0: K, 1: Y } = (0, i.useState)(!1),
            { 0: ee, 1: te } = (0, i.useState)(0),
            { 0: ne, 1: oe } = (0, i.useState)(!1),
            { 0: ie, 1: se } = (0, i.useState)(null !== y && void 0 !== y && y),
            { 0: ae, 1: re } = (0, i.useState)((e) => {}),
            { 0: le, 1: ce } = (0, i.useState)(null),
            { 0: de, 1: pe } = (0, i.useState)([]),
            { 0: ue, 1: me } = (0, i.useState)({ isEdgeCase: C }),
            { 0: he, 1: fe } = (0, i.useState)([F, Z]),
            { 0: xe, 1: ve } = (0, i.useState)(""),
            { 0: ye, 1: ge } = (0, i.useState)(!1),
            { 0: be, 1: we } = (0, i.useState)(-1),
            { 0: je, 1: Se } = (0, i.useState)(!1),
            { 0: Te, 1: Ie } = (0, i.useState)(!O),
            Ce = (0, c.ZP)("use-rapid-instruction-limits", {}, !1),
            ke = !!(
              (null === S || void 0 === S ? void 0 : S.spoofed) ||
              ((null === S || void 0 === S ? void 0 : S.email) &&
                (null === S || void 0 === S
                  ? void 0
                  : S.email.endsWith("scale.com")))
            ),
            Ne =
              !!I ||
              (null === S || void 0 === S ? void 0 : S.isCorporateUser) ||
              (null === S || void 0 === S ? void 0 : S.accountType) ===
                m.AccountType.User,
            Ee = null !== e && void 0 !== e ? e : R;
          (0, i.useEffect)(() => {
            void 0 !== y && se(y);
          }, [y]),
            (0, i.useEffect)(() => {
              W(new Date().getTime()),
                Ae(Te),
                g(function* () {
                  const t = yield (0, l.V3)({
                      feature: "use-instruction-side-panel",
                    }),
                    n = D.includes("/tasks"),
                    o = D.includes("/training");
                  q(!(!t || !e || (!n && !o)));
                })();
            }, [Ee, Te, N]);
          const ze = (0, i.useCallback)(
              g(function* () {
                if (Ee)
                  try {
                    const { tme: t } = yield (0, x.ZP)(
                      null,
                      "corp-api/remedialCourses/findTaskerMetricsEntry",
                      {
                        method: "POST",
                        body: {
                          worker: null === S || void 0 === S ? void 0 : S.id,
                          project: Ee,
                        },
                      }
                    );
                    var e;
                    return null !==
                      (e =
                        null === t || void 0 === t
                          ? void 0
                          : t.specializations) && void 0 !== e
                      ? e
                      : [];
                  } catch (t) {
                    return [];
                  }
                else
                  try {
                    return yield (0, x.ZP)(
                      null,
                      "corp-api/remedialCourses/findTaskerSpecializations",
                      {
                        method: "POST",
                        body: {
                          worker: null === S || void 0 === S ? void 0 : S.id,
                          taskId: L,
                        },
                      }
                    );
                  } catch (t) {
                    return [];
                  }
              }),
              [Ee, L, S]
            ),
            Oe = (0, i.useMemo)(() => {
              const e = new Set();
              return (
                de.forEach((t) => {
                  var n, o, i, s;
                  t.nodeType === m.InstructionComponentType.Label &&
                    (null === (n = t.content) ||
                      void 0 === n ||
                      null === (o = n.nestedAttributeIds) ||
                      void 0 === o ||
                      o.forEach((t) => {
                        e.add(t);
                      }),
                    null === (i = t.content) ||
                      void 0 === i ||
                      null === (s = i.nestedLabelIds) ||
                      void 0 === s ||
                      s.forEach((t) => {
                        e.add(t);
                      }));
                }),
                e
              );
            }, [de]);
          (0, i.useEffect)(() => {
            function e() {
              return (e = g(function* () {
                const e = yield ze(),
                  t = de.filter((t) => {
                    var n, o, i;
                    return (
                      !(
                        (null !==
                          (o =
                            null === (n = t.content) || void 0 === n
                              ? void 0
                              : n.specializations) && void 0 !== o
                          ? o
                          : []
                        ).length > 0
                      ) ||
                      (0, v.checkSpecializationsConfig)(
                        e,
                        null === (i = t.content) || void 0 === i
                          ? void 0
                          : i.specializations
                      )
                    );
                  });
                de.length !== t.length && pe(t);
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, [ze, de]);
          const Ae = (0, i.useCallback)(
              (function () {
                var e = g(function* (e) {
                  G(!0);
                  try {
                    if (
                      (N ||
                        (N = yield p.Z.selfserve.getProjectInstructionStatus(
                          Ee,
                          k ? void 0 : t || B
                        )),
                      !N)
                    )
                      return;
                    if (
                      N.ok &&
                      N.instruction &&
                      N.instruction.components &&
                      N.instruction.components.length > 0
                    ) {
                      $(N);
                      const {
                        instruction: t,
                        diffInstructions: o,
                        firstSeenProjectInstruction: i,
                        hasSensitiveContent: r,
                        param_chunks: l,
                        title: c,
                        quiz: d,
                      } = N;
                      (ue.hasSensitiveContent = r),
                        (ue.param_chunks = l),
                        Y(!!d),
                        me(w({}, ue)),
                        ve(c || ""),
                        d && M(d),
                        ge(void 0 !== o);
                      const p = !(!i || !s);
                      let f = (0, h.Ev)({
                        components: o && e ? o.components : t.components,
                        isOnboarding: p,
                        isCustomer: Ne,
                      });
                      try {
                        const e = [];
                        for (const t of f) {
                          const n = t.content.ontologyProjectId;
                          if (n) {
                            const { ontology: o } = yield (0, x.ZP)(
                                null,
                                `/internal/ontology_manager/latest_ontology/${n}`,
                                { method: "GET" }
                              ),
                              i = (e) =>
                                a().sortBy(
                                  e.map((e) => ({
                                    nodeName: e.display,
                                    nodeId: e.value,
                                    nodeType: m.InstructionComponentType.Field,
                                    iconName: "info",
                                    iconColor: "blue",
                                    content: {
                                      _id: e.value,
                                      type: m.InstructionComponentType.Field,
                                      title: e.display,
                                      description: e.description || "",
                                    },
                                    components: i(e.subchoices || []),
                                  })),
                                  (e) => e.nodeName
                                ),
                              s = i(o);
                            e.push(w({}, t, { components: s }));
                          } else e.push(t);
                        }
                        f = e;
                      } catch (n) {
                        u.Z.warn("ProjectInstructionProvider ", n);
                      }
                      pe(f), oe(p);
                    }
                  } catch (n) {
                    u.Z.warn("ProjectInstructionProvider ", n);
                  }
                  G(!1);
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [Ee, k]
            ),
            Pe = (0, i.useMemo)(() => {
              const [t, n] = he;
              if (null === de || void 0 === de ? void 0 : de.length) {
                if (a().isEmpty(a().compact(he)))
                  return ie || (V && e)
                    ? null
                    : w({}, de[0].content, { waitSeconds: de[0].waitSeconds });
                for (const e of de) {
                  if (e.nodeType === t && e.nodeId === n)
                    return w({}, e.content, { waitSeconds: e.waitSeconds });
                  if (
                    e.nodeType === m.InstructionComponentType.Group &&
                    e.components
                  )
                    for (const o of e.components)
                      if (o.nodeType === t && o.nodeId === n)
                        return w({}, o.content, { waitSeconds: o.waitSeconds });
                }
              }
              return null;
            }, [he, de, ie]);
          (0, i.useEffect)(() => {
            Pe &&
              (() => {
                if (a().isEmpty(he)) return;
                let e = -1,
                  t = [-1, -1];
                const [n, o] = he;
                if (
                  (de.forEach((i, s) => {
                    i.nodeType === n && i.nodeId === o
                      ? (e = s)
                      : i.nodeType === m.InstructionComponentType.Group &&
                        i.components &&
                        i.components.forEach((e, i) => {
                          e.nodeType === n && e.nodeId === o && (t = [s, i]);
                        });
                  }),
                  clearInterval(T),
                  e >= 0)
                )
                  de[e].waitSeconds &&
                    (T = setInterval(() => {
                      const t = [...de];
                      (t[e].waitSeconds -= 1),
                        0 === t[e].waitSeconds &&
                          (clearInterval(T), (t[e].waitSeconds = null)),
                        pe(t);
                    }, 1e3));
                else if (t[0] > -1 && t[1] > -1) {
                  const [e, n] = t,
                    o = de[e].components;
                  if (!o) return;
                  o[n].waitSeconds &&
                    (T = setInterval(() => {
                      const t = [...de],
                        o = t[e].components;
                      o &&
                        ((o[n].waitSeconds -= 1),
                        0 === o[n].waitSeconds &&
                          (clearInterval(T), (o[n].waitSeconds = null)),
                        pe(t));
                    }, 1e3));
                }
              })();
          }, [Pe]);
          const { startQuizTimer: De, pauseQuizTimer: Re } = (0, i.useMemo)(
            () =>
              ((e) => {
                let t;
                return {
                  startQuizTimer: () => {
                    t = setInterval(() => {
                      e((e) => e + 1);
                    }, 1e3);
                  },
                  pauseQuizTimer: () => {
                    clearInterval(t);
                  },
                };
              })(te),
            [te]
          );
          (0, i.useEffect)(() => {
            X ? De() : Re();
          }, [X]);
          const Ze = [];
          return (
            s || k
              ? Ne || Ze.push(f.Q0)
              : null === de ||
                void 0 === de ||
                de.forEach(({ nodeType: e }) => {
                  Ze.includes(e) || Ze.push(e);
                }),
            (0, o.jsx)(j.Provider, {
              value: {
                quiz: H,
                setQuiz: M,
                title: xe,
                enableQuiz: K,
                enableDiff: Te,
                extraAlerts: ue,
                enableSidePanel: V,
                projectInstruction: Q,
                shouldUseNGI: !!(null === Q || void 0 === Q
                  ? void 0
                  : Q.shouldUseNGI),
                hasVersionComparison: ye,
                handleStart: () => {
                  function e() {
                    return (e = g(function* () {
                      const e = a().get(Q, ["instruction", "_id"]);
                      if (e) {
                        const t = Math.round((new Date().getTime() - U) / 1e3);
                        yield p.Z.selfserve.setUserHasSeenInstructions({
                          instructionObjectId: e,
                          timeSpentSecs: t,
                          usingInstructionRestrictions: Ce,
                        });
                        const n = {
                          isNewInstruction: !0,
                          isOnboardingFlow: ne,
                          isDuringTasking: !1,
                          openTabButtonClicked: !1,
                          startTime: U,
                          closeTime: new Date().getTime(),
                        };
                        yield (0, d.Kz)(d.ju.InstructionRenderRecord, n);
                      }
                    })).apply(this, arguments);
                  }
                  b &&
                    (b(),
                    (function () {
                      e.apply(this, arguments);
                    })());
                },
                projectId: Ee,
                openQuiz: X,
                setOpenQuiz: J,
                startButtonText: n,
                showingInstructionsFn: ae,
                setEnableDiff: Ie,
                setShowingInstructionsFn: re,
                selectedSection: Pe,
                selectedPath: he,
                setSelectedPath: k
                  ? (e) => {
                      const [t, n] = e;
                      if (de)
                        if (a().isEmpty(e)) we(-1);
                        else
                          for (let o = 0; o < de.length; o++) {
                            const e = de[o];
                            if (e.nodeType === t && e.nodeId === n) {
                              Se(!je), we(o);
                              break;
                            }
                            if (
                              e.nodeType === m.InstructionComponentType.Group &&
                              e.components
                            )
                              for (let i = 0; i < e.components.length; i++) {
                                const s = e.components[i];
                                if (s.nodeType === t && s.nodeId === n) {
                                  Se(!je), we([o, i]);
                                  break;
                                }
                              }
                          }
                    }
                  : fe,
                searchResult: le,
                setSearchResult: ce,
                timeSpentOnQuiz: ee,
                components: de,
                setComponents: pe,
                isMobileView: V || ie,
                setIsMobileView: se,
                disableScrollOnMount: A,
                scrollIntoView: be,
                scrollToggle: je,
                isLoading: _,
                isEmbedded: s,
                isCorpUser: ke,
                isOnboarding: ne,
                isRapidPreview: k,
                typesGroup: Ze,
                customStartButton: z,
                doNotRenderChildrenSet: Oe,
              },
              children: E,
            })
          );
        }
      );
    },
    619288: function (e, t, n) {
      var o = n(824246),
        i = n(827378),
        s = n(542280),
        a = n(220453),
        r = n(581903),
        l = n(754991),
        c = n(60042),
        d = n.n(c),
        p = n(792739),
        u = n(944765),
        m = n(298784),
        h = n.n(m),
        f = n(692975),
        x = n(599789);
      const v = ({ sample: e, index: t, fullWidth: n }) => {
          const i = y(),
            {
              type: s,
              description: c,
              linkedTask: m,
              screenshotUrl: v,
              staticAsset: g,
              isNew: b,
              videoUrl: w,
              didChange: j,
            } = e,
            { isMobileView: S } = (0, u.k)(),
            T = s,
            I = T === x.InstructionExampleSampleType.Good,
            C = void 0 !== j;
          return (0, o.jsxs)("div", {
            className: d()(i.taskExampleWrapper, {
              [i.goodExample]: T === x.InstructionExampleSampleType.Good,
              [i.badExample]: T === x.InstructionExampleSampleType.Bad,
              [i.neutralExample]: T === x.InstructionExampleSampleType.Neutral,
              [i.fullWidth]: n || S,
              [i.hidden]: !j && C,
            }),
            children: [
              g &&
                !h().isEmpty(g) &&
                (0, o.jsx)(
                  l._,
                  {
                    readOnly: !0,
                    index: t,
                    preventOpen: !1,
                    handleDelete: () => {},
                    staticAsset: g,
                  },
                  e.title
                ),
              m &&
                (0, o.jsx)(r.S, {
                  taskId: m,
                  caption: c,
                  isGoodExample: I,
                  readOnly: !0,
                  index: t,
                }),
              w && (0, o.jsx)(f.Z, { controls: !0, width: "100%", url: w }),
              T &&
                [
                  x.InstructionExampleSampleType.Good,
                  x.InstructionExampleSampleType.Bad,
                ].includes(T) &&
                (0, o.jsxs)("div", {
                  className: i.correctness,
                  children: [
                    (0, o.jsx)(p.G, {
                      icon: I ? "check-circle" : "minus-circle",
                      color: I ? "#4FAD75" : "#B71C1C",
                    }),
                    I ? " Correct" : " Incorrect",
                  ],
                }),
              (b || j) &&
                (0, o.jsx)("strong", {
                  className: i.newBadge,
                  children: "New!",
                }),
              v && (0, o.jsx)("img", { src: v }),
              (0, o.jsx)("div", {
                children: (0, o.jsx)("p", {
                  className: i.description,
                  dangerouslySetInnerHTML: { __html: a.ZP.render(c || "") },
                }),
              }),
            ],
          });
        },
        y = (0, s.ZL)(() => ({
          description: {
            padding: "0 5px 0px 5px",
            display: "block",
            overflow: "scroll",
            "&::-webkit-scrollbar": { height: 0 },
            "& p": { margin: 0 },
            fontStyle: "italic",
          },
          taskExampleWrapper: {
            position: "relative",
            width: 170,
            border: "1px solid red",
            margin: "10px 20px 10px 0",
            borderRadius: 10,
            overflow: "hidden",
            "& img": { height: 150 },
            "&:hover": { opacity: 0.7 },
          },
          correctness: { fontSize: 13, padding: 5 },
          goodExample: { border: "2px solid #4FAD75", background: "#F9FCFB" },
          badExample: { border: "2px solid #B71C1C", background: "#FFF4F6" },
          neutralExample: {
            border: "2px solid #E0E0E0",
            background: "#F9F9F9",
          },
          fullWidth: { width: "100%", padding: 0 },
          hidden: { opacity: 0.25 },
          newBadge: {
            borderRadius: "1000px",
            padding: "4px 12px",
            position: "absolute",
            left: "4px",
            top: "4px",
            fontSize: "8px",
            background: "var(--color-RemoGreen)",
            userSelect: "none",
            cursor: "pointer",
          },
        }));
      t.Z = i.memo(v);
    },
    951628: function (e, t, n) {
      n.d(t, {
        OY: function () {
          return c;
        },
        Ev: function () {
          return d;
        },
        kN: function () {
          return p;
        },
      });
      var o = n(599789),
        i = n(298784),
        s = n.n(i),
        a = n(547939);
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
      function l(e) {
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
      const c = (e, t, n) => {
          const i = [];
          return (
            e.forEach((e, s) => {
              const {
                  nodeType: r,
                  nodeName: l,
                  nodeId: d,
                  content: p,
                  samples: u,
                  description: m,
                  title: h,
                  components: f,
                } = e,
                x = null !== n && void 0 !== n ? n : d;
              if (r === o.InstructionComponentType.Group) {
                const n = [...t, s],
                  o = { title: h, nodeId: x, path: [...t, s] };
                i.push(o), i.push(...c(e.components, [...n, "groups"], x));
              } else if (
                Object.values(o.InstructionComponentType).includes(r) ||
                r === a.Q0
              ) {
                const e = [...t, r, l],
                  { description: n, title: o, examples: s } = p,
                  a = { description: n, title: o, nodeId: x, path: e };
                i.push(a),
                  s && i.push(...c(s, [...e, "examples"], x)),
                  f && i.push(...c(f, t, x));
              } else if (u) {
                const e = [...t, s],
                  n = { description: m, title: h, nodeId: x, path: [...t, s] };
                i.push(n), i.push(...c(u, [...e, "samples"], x));
              } else {
                const n = {
                  description: m,
                  title: h,
                  nodeId: x,
                  path: [...t, s],
                  linkedTask: e.linkedTask,
                  staticAsset: e.staticAsset,
                  screenshotUrl: e.screenshotUrl,
                  type: e.type,
                };
                i.push(n);
              }
            }),
            i
          );
        },
        d = ({ components: e, isOnboarding: t, isCustomer: n }) => {
          const i = [],
            r = ((e) => {
              const t = {};
              return (
                e.forEach((e) => {
                  const { _id: n, title: o } = e;
                  t[o] = n;
                }),
                t
              );
            })(e);
          return (
            e.forEach((e) => {
              if (
                ((e) => {
                  if (!e || s().isEmpty(e)) return !0;
                  if (e.type === o.InstructionComponentType.Group)
                    return s().isEmpty(e.components);
                  const {
                    description: t,
                    labels: n,
                    attributes: i,
                    examples: a,
                  } = e;
                  return (
                    !t && s().isEmpty(n) && s().isEmpty(i) && s().isEmpty(a)
                  );
                })(e)
              )
                return;
              const c = {},
                { _id: p, type: u, title: m, isNew: h, diffStatus: f } = e,
                x =
                  h ||
                  t ||
                  f === o.InstructionDiffStatus.Addition ||
                  f === o.InstructionDiffStatus.Update
                    ? a._O
                    : null;
              if (u === o.InstructionComponentType.RichText) {
                var v;
                const n =
                  null ===
                    (v =
                      null === m || void 0 === m ? void 0 : m.toLowerCase()) ||
                  void 0 === v
                    ? void 0
                    : v.includes("workflow");
                (c.nodeName = m),
                  (c.nodeType = u),
                  (c.nodeId = p),
                  (c.iconName = n
                    ? a.mz.workflow.iconName
                    : a.mz[o.InstructionComponentType.RichText].iconName),
                  (c.iconColor = n
                    ? a.mz.workflow.iconColor
                    : a.mz[o.InstructionComponentType.RichText].iconColor),
                  (c.waitSeconds = x),
                  (c.content = l({}, e, {
                    diffStatus: t ? o.InstructionDiffStatus.Addition : f,
                    title: s().startCase(m),
                  }));
              }
              var y, g;
              (u === o.InstructionComponentType.Label &&
                ((c.nodeName = e.label || m),
                (c.nodeType = u),
                (c.nodeId = p),
                (c.iconName = a.mz[o.InstructionComponentType.Label].iconName),
                (c.iconColor =
                  a.mz[o.InstructionComponentType.Label].iconColor),
                (c.waitSeconds = x),
                (c.content = l({}, e, {
                  diffStatus: t ? o.InstructionDiffStatus.Addition : f,
                  title: s().startCase(e.label || m),
                }))),
              u === o.InstructionComponentType.Attribute &&
                ((c.nodeName = e.attribute || e.title),
                (c.nodeType = u),
                (c.nodeId = p),
                (c.iconName =
                  a.mz[o.InstructionComponentType.Attribute].iconName),
                (c.iconColor =
                  a.mz[o.InstructionComponentType.Attribute].iconColor),
                (c.waitSeconds = x),
                (c.content = l({}, e, {
                  diffStatus: t ? o.InstructionDiffStatus.Addition : f,
                  title: s().startCase(e.attribute || m),
                }))),
              u === o.InstructionComponentType.Field &&
                ((c.nodeName = m),
                (c.nodeType = u),
                (c.nodeId = p),
                (c.iconName = a.mz[o.InstructionComponentType.Field].iconName),
                (c.iconColor =
                  a.mz[o.InstructionComponentType.Field].iconColor),
                (c.waitSeconds = x),
                (c.content = l({}, e, {
                  diffStatus: t ? o.InstructionDiffStatus.Addition : f,
                  title: s().startCase(m),
                }))),
              u === o.InstructionComponentType.Group &&
                ((c.nodeName = m),
                (c.nodeType = u),
                (c.nodeId = null !== p && void 0 !== p ? p : m),
                (c.iconName = a.mz[o.InstructionComponentType.Group].iconName),
                (c.iconColor =
                  a.mz[o.InstructionComponentType.Group].iconColor),
                (c.waitSeconds = null),
                (c.components = d({
                  components: e.components,
                  isOnboarding: t,
                  isCustomer: n,
                })),
                (c.content = l({}, e, {
                  diffStatus: t ? o.InstructionDiffStatus.Addition : f,
                  components: c.components,
                  title: s().startCase(m),
                }))),
              u === o.InstructionComponentType.Rule) &&
                ((c.nodeName = m),
                (c.nodeId = p),
                (c.nodeType = u),
                (c.iconName = a.mz[o.InstructionComponentType.Rule].iconName),
                (c.iconColor = a.mz[o.InstructionComponentType.Rule].iconColor),
                (c.waitSeconds = x),
                (c.content = l({}, e, {
                  diffStatus: t ? o.InstructionDiffStatus.Addition : f,
                  title: s().startCase(m),
                  labels:
                    null === e ||
                    void 0 === e ||
                    null === (y = e.labels) ||
                    void 0 === y
                      ? void 0
                      : y.map((e) => ({ title: e, id: r[e] })),
                  attributes:
                    null === e ||
                    void 0 === e ||
                    null === (g = e.attributes) ||
                    void 0 === g
                      ? void 0
                      : g.map((e) => ({ title: e, id: r[e] })),
                })));
              u === o.InstructionComponentType.Attachment &&
                ((c.nodeName = m),
                (c.nodeId = p),
                (c.nodeType = u),
                e.attachmentType === o.AttachmentInstructionType.Iframe &&
                  ((c.iconName =
                    a.mz[o.AttachmentInstructionType.Iframe].iconName),
                  (c.iconColor =
                    a.mz[o.AttachmentInstructionType.Iframe].iconColor)),
                e.attachmentType === o.AttachmentInstructionType.Image &&
                  ((c.iconName =
                    a.mz[o.AttachmentInstructionType.Image].iconName),
                  (c.iconColor =
                    a.mz[o.AttachmentInstructionType.Image].iconColor)),
                e.attachmentType === o.AttachmentInstructionType.Pdf &&
                  ((c.iconName =
                    a.mz[o.AttachmentInstructionType.Pdf].iconName),
                  (c.iconColor =
                    a.mz[o.AttachmentInstructionType.Pdf].iconColor)),
                (c.waitSeconds = x),
                (c.content = l({}, e, {
                  diffStatus: t ? o.InstructionDiffStatus.Addition : f,
                  title: s().startCase(m),
                }))),
                i.push(c);
            }),
            i
          );
        },
        p = (e, t) => {
          const n = [];
          return (
            e.map((e) => {
              var o, i;
              (null === (o = e.content) || void 0 === o ? void 0 : o._id) &&
                t.includes(
                  null === (i = e.content) || void 0 === i ? void 0 : i._id
                ) &&
                n.push(e.content);
            }),
            n
          );
        };
    },
    111352: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return k;
        },
      });
      var o = n(824246),
        i = n(679892),
        s = n.n(i),
        a = n(827378),
        r = n(687192),
        l = n(604375),
        c = n(68649),
        d = n(176832),
        p = n(271682),
        u = n(718755),
        m = n(257881),
        h = n(684570),
        f = n(167469),
        x = n(149719),
        v = n(569465),
        y = n(376189),
        g = n(298784),
        b = n.n(g),
        w = n(792739),
        j = n(71764);
      function S(e, t, n, o, i, s, a) {
        try {
          var r = e[s](a),
            l = r.value;
        } catch (c) {
          return void n(c);
        }
        r.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      function T(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var s = e.apply(t, n);
            function a(e) {
              S(s, o, i, a, r, "next", e);
            }
            function r(e) {
              S(s, o, i, a, r, "throw", e);
            }
            a(void 0);
          });
        };
      }
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
              I(e, t, n[t]);
            });
        }
        return e;
      }
      const k =
          "What does this example illustrate? Click here to add a description.",
        N = (0, c.ZL)({
          container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexFlow: "column nowrap",
            flexWrap: "nowrap",
          },
          dialog: { width: "100%", overflow: "hidden", margin: "2% auto 20px" },
          dialogRoot: { zIndex: "110 !important" },
          exampleTypeSelector: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "12px",
          },
          exampleType: {
            margin: "8px",
            padding: "2px 8px 2px 8px",
            border: "1px solid #E6E6E6",
            borderRadius: "8px",
            cursor: "pointer",
          },
          selectorControls: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "24px",
          },
          createButton: {
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
          },
          editableCaption: {
            opacity: 0.9,
            marginTop: "0px",
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "16px",
            width: "100%",
          },
          captionContainer: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
          },
          captionHeader: {
            width: "100%",
            lineHeight: 1,
            color: "darkslategray",
            marginBottom: "8px",
          },
        });
      t.Z = ({
        modalOpen: e,
        project: t,
        uploadedAssets: n,
        taxonomy: i,
        setModalOpen: c,
        setTaskId: g,
        onBackToAssetSelection: S,
        setTasksWithProcessingAnnotationsResponses: I,
        initialCaption: E,
        resetNormalAssetCaption: z,
      }) => {
        const O = N(),
          { 0: A, 1: P } = (0, a.useState)(0),
          { 0: D } = (0, a.useState)({}),
          { 0: R } = (0, a.useState)({}),
          { 0: Z, 1: F } = (0, a.useState)(!1),
          { 0: B, 1: L } = (0, a.useState)(!1),
          { 0: _, 1: G } = (0, a.useState)(null !== E && void 0 !== E ? E : ""),
          { 0: Q, 1: $ } = (0, a.useState)(void 0),
          { 0: H, 1: M } = (0, a.useState)(""),
          { 0: U, 1: W } = (0, a.useState)(!1),
          { 0: V, 1: q } = (0, a.useState)(-1),
          { 0: X, 1: J } = (0, a.useState)(!1),
          { fetchUnprocessedAttachments: K } = (0, y.Z)(),
          { taskType: Y } = (0, x.kc)(),
          ee = (function () {
            var e = T(function* (e) {
              return (
                D[e] ||
                  (D[e] = (yield m.Z.selfserve.fetchAssetS3URL({
                    assetId: e,
                  })).signedURL),
                D[e]
              );
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          te = (function () {
            var e = T(function* (e) {
              return (
                R[e] ||
                  (R[e] = (yield m.Z.selfserve.fetchAssetPages({
                    assetId: e,
                  })).pageURLs),
                R[e]
              );
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ne = (function () {
            var e = T(function* (e, t) {
              const { attachment: n } =
                yield m.Z.selfserve.fetchAssetToTemplateAttachment({
                  assetId: e,
                  project: t.id,
                });
              return n;
            });
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        (0, a.useEffect)(() => {
          e && P(0);
        }, [e]),
          (0, a.useEffect)(() => {
            E && G(E);
          }, [E]),
          (0, a.useEffect)(() => {
            let e = !1;
            function o() {
              return (o = T(function* () {
                if (n && n.length > 0) {
                  $(void 0);
                  const s = yield (0, h.kh)(
                    null !== Y && void 0 !== Y ? Y : t.type,
                    n[A],
                    i,
                    !0,
                    ee,
                    te,
                    t.useTextCollectionTemplate ? ne : void 0,
                    t
                  );
                  var o;
                  if (
                    s.attachments &&
                    b().every(s.attachments, (e) => "unprocessed" === e.type)
                  )
                    s.attachments = yield K(
                      null !== (o = s.attachments) && void 0 !== o ? o : []
                    );
                  e ||
                    $(
                      C({}, u.sampleTask, {
                        type: null !== Y && void 0 !== Y ? Y : t.type,
                        params: s,
                        assignment: {
                          projectId: t.id,
                          params: s,
                          type: null !== Y && void 0 !== Y ? Y : t.type,
                          featureFlags: {
                            canLeaveInlineComments: !0,
                            canSeeInlineComments: !0,
                            showSidebar:
                              (null !== Y && void 0 !== Y ? Y : t.type) ===
                                f.TaskType.NamedEntityRecognition || void 0,
                          },
                        },
                        timerDisabled: !0,
                        shouldWarnOnExit: !1,
                        readOnly: !1,
                        editable: !0,
                        canEdit: !0,
                        isCustomer: !0,
                        showHeader: !1,
                        isTaxonomyDisplay: !0,
                        showFooter: !1,
                      })
                    );
                }
                n &&
                  n[A + 1] &&
                  (null !== Y && void 0 !== Y ? Y : t.type) ===
                    f.TaskType.DocumentTranscription &&
                  m.Z.selfserve.fetchAssetPages({ assetId: n[A + 1]._id });
              })).apply(this, arguments);
            }
            return (
              (function () {
                o.apply(this, arguments);
              })(),
              function () {
                e = !0;
              }
            );
          }, [t, n, i, A]);
        const oe = (0, a.useRef)(),
          ie = (function () {
            var e = T(function* () {
              if ((F(!0), oe.current && t)) {
                const o = yield oe.current.getReviewChanges(),
                  s = n[A]._id,
                  a = {
                    project: t.id,
                    type: null !== Y && void 0 !== Y ? Y : t.type,
                    uploadedAsset: s,
                    taxonomy: i,
                    response: o,
                  };
                try {
                  const { taskId: e, msg: t } =
                    yield m.Z.selfserve.setInstructionsExample(a);
                  t ||
                    (g(e, void 0, _),
                    I && I((t) => C({}, t, { [e]: o })),
                    ae()),
                    M("");
                } catch (e) {
                  M(
                    "Error creating example: Verify that the response is valid"
                  );
                }
                F(!1);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          se = (function () {
            var e = T(function* () {
              if (oe.current) {
                const e = yield oe.current.getReviewChanges();
                return Y === f.TaskType.Categorization
                  ? e.taxonomies && e.taxonomies.length > 0
                  : e.annotations && e.annotations.length > 0;
              }
              return !1;
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          ae = () => {
            W(!0),
              L(!0),
              setTimeout(() => {
                W(!1), le();
              }, 1e3);
          },
          re = (e) => {
            q(e), J(!0);
          },
          le = (e) => {
            ("keydown" === (null === e || void 0 === e ? void 0 : e.type) &&
              27 === (null === e || void 0 === e ? void 0 : e.keyCode)) ||
              (c(!1), z && z());
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            X &&
              (0, o.jsx)(j.Z, {
                isOpen: X,
                message:
                  "Do you want to change assets without saving the example?",
                onSubmit: () => {
                  P(V), q(-1), L(!1), J(!1);
                },
                onRequestClose: () => J(!1),
              }),
            (0, o.jsxs)(l.Vq, {
              classes: { root: O.dialogRoot, paper: O.dialog },
              maxWidth: "lg",
              open: e,
              onClose: le,
              children: [
                (0, o.jsx)(l.$N, {
                  children: (0, o.jsx)("div", {
                    style: {
                      textAlign: "center",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                    },
                    children: "Create an example task",
                  }),
                }),
                (0, o.jsxs)(l.cZ, {
                  children: [
                    (!n || 0 === n.length) &&
                      (0, o.jsx)("h6", {
                        className: "jsx-8b0aa6d31560dfb1",
                        children: "No assets to display...",
                      }),
                    n &&
                      n.length > 0 &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          H.length > 0 &&
                            (0, o.jsx)(l.bZ, {
                              severity: "error",
                              style: { marginTop: "2px", marginBottom: "12px" },
                              children: H,
                            }),
                          U &&
                            (0, o.jsx)(l.bZ, {
                              severity: "success",
                              style: { marginTop: "2px", marginBottom: "12px" },
                              children: "Example created!",
                            }),
                          Q
                            ? (0, o.jsx)(v.Z, {
                                children: (0, o.jsx)(a.Suspense, {
                                  fallback: (0, o.jsx)(r.Z, {
                                    style: { paddingBottom: "16px" },
                                  }),
                                  children: (0, o.jsx)("div", {
                                    className: "jsx-8b0aa6d31560dfb1 component",
                                    children: (0, o.jsx)(p.M5, {
                                      children: (0, o.jsx)(d.Z, {
                                        taskType: Q.type,
                                        taskProps: Q,
                                        taskRef: oe,
                                        isTaxonomyDisplay:
                                          "categorization" !==
                                          (null !== Y && void 0 !== Y
                                            ? Y
                                            : t.type),
                                      }),
                                    }),
                                  }),
                                }),
                              })
                            : (0, o.jsx)(r.Z, {
                                style: { paddingBottom: "16px" },
                              }),
                          (0, o.jsxs)("div", {
                            className:
                              "jsx-8b0aa6d31560dfb1 " +
                              (O.captionContainer || ""),
                            children: [
                              (0, o.jsx)("p", {
                                className:
                                  "jsx-8b0aa6d31560dfb1 " +
                                  (O.captionHeader || ""),
                                children: "Caption",
                              }),
                              (0, o.jsx)("input", {
                                value: _,
                                placeholder: k,
                                onFocus: (e) => (e.target.placeholder = ""),
                                onBlur: (e) => (e.target.placeholder = k),
                                onChange: (e) => {
                                  e.preventDefault(), G(e.target.value);
                                },
                                className:
                                  "jsx-8b0aa6d31560dfb1 " +
                                  (O.editableCaption || ""),
                              }),
                            ],
                          }),
                          (0, o.jsxs)("div", {
                            className:
                              "jsx-8b0aa6d31560dfb1 " +
                              (O.selectorControls || ""),
                            children: [
                              (0, o.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "jump to first asset",
                                children: (0, o.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, o.jsx)("a", {
                                    onClick: T(function* () {
                                      Z ||
                                        (!B && (yield se())
                                          ? re(0)
                                          : (P(0), L(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, o.jsx)(w.G, {
                                      icon: "angle-double-left",
                                      color: "black",
                                      style: {
                                        width: 16,
                                        height: 16,
                                        marginLeft: 8,
                                        marginTop: 4,
                                      },
                                    }),
                                  }),
                                }),
                              }),
                              (0, o.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "view previous asset",
                                children: (0, o.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, o.jsx)("a", {
                                    style: {
                                      marginLeft: "8px",
                                      marginRight: "8px",
                                    },
                                    onClick: T(function* () {
                                      const e = (A - 1 + n.length) % n.length;
                                      Z ||
                                        (!B && (yield se())
                                          ? re(e)
                                          : (P(e), L(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, o.jsx)(w.G, {
                                      icon: "angle-left",
                                      color: "black",
                                      style: {
                                        width: 16,
                                        height: 16,
                                        marginLeft: 8,
                                        marginTop: 4,
                                      },
                                    }),
                                  }),
                                }),
                              }),
                              (0, o.jsxs)("p", {
                                style: { margin: "0px 10px 0px 10px" },
                                className: "jsx-8b0aa6d31560dfb1",
                                children: [A + 1, " of ", n.length],
                              }),
                              (0, o.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "view next asset",
                                children: (0, o.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, o.jsx)("a", {
                                    style: { marginRight: "8px" },
                                    onClick: T(function* () {
                                      const e = (A + 1) % n.length;
                                      Z ||
                                        (!B && (yield se())
                                          ? re(e)
                                          : (P(e), L(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, o.jsx)(w.G, {
                                      icon: "angle-right",
                                      color: "black",
                                      style: {
                                        width: 16,
                                        height: 16,
                                        marginLeft: 8,
                                        marginTop: 4,
                                      },
                                    }),
                                  }),
                                }),
                              }),
                              (0, o.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "jump to last asset",
                                children: (0, o.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, o.jsx)("a", {
                                    onClick: T(function* () {
                                      const e = n.length - 1;
                                      Z ||
                                        (!B && (yield se())
                                          ? re(e)
                                          : (P(e), L(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, o.jsx)(w.G, {
                                      icon: "angle-double-right",
                                      color: "black",
                                      style: {
                                        width: 16,
                                        height: 16,
                                        marginLeft: 8,
                                        marginTop: 4,
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, o.jsx)(s(), {
                      id: "8b0aa6d31560dfb1",
                      children:
                        ".component{height:540px}.component,.component .task{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:0;min-width:0;width:100%;overflow:auto}.task__splitpane{position:relative;overflow:auto}",
                    }),
                  ],
                }),
                (0, o.jsxs)(l.kX, {
                  children: [
                    (0, o.jsx)(l.zx, {
                      type: "tertiary",
                      onClick: S,
                      disabled: Z,
                      children: "Back to Asset Selection",
                    }),
                    (0, o.jsx)(l.zx, {
                      type: "primary",
                      onClick: ie,
                      disabled: Z,
                      children: Z ? "Saving" : "Save example",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    581903: function (e, t, n) {
      n.d(t, {
        S: function () {
          return F;
        },
      });
      var o = n(824246),
        i = n(827378),
        s = n(542280),
        a = n(167469),
        r = n(679892),
        l = n.n(r),
        c = n(687192),
        d = n(604375),
        p = n(176832),
        u = n(271682),
        m = n(599789),
        h = n(550814),
        f = n(431350),
        x = n(718755),
        v = n(257881),
        y = n(456552),
        g = n(298784),
        b = n.n(g),
        w = n(449863),
        j = n(569465),
        S = n(376189),
        T = n(111352),
        I = n(944765);
      function C(e, t, n, o, i, s, a) {
        try {
          var r = e[s](a),
            l = r.value;
        } catch (c) {
          return void n(c);
        }
        r.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      function k(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var s = e.apply(t, n);
            function a(e) {
              C(s, o, i, a, r, "next", e);
            }
            function r(e) {
              C(s, o, i, a, r, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function N(e, t, n) {
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
      function E(e) {
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
              N(e, t, n[t]);
            });
        }
        return e;
      }
      const z = (0, s.ZL)({
        dialog: { width: "100%", overflow: "hidden", margin: "3% auto 20px" },
        zIndexHigh: { zIndex: "2000 !important" },
        zIndexLow: { zIndex: "110 !important" },
        title: { textAlign: "center" },
        closeButton: {
          position: "absolute",
          right: 20,
          top: 15,
          "&:hover": { cursor: "pointer" },
        },
        editableCaption: {
          opacity: 0.9,
          marginTop: "0px",
          textAlign: "center",
          border: "1px solid #ddd",
          borderRadius: "4px",
          fontSize: "16px",
          width: "100%",
        },
        captionContainer: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
        },
        captionHeader: {
          width: "100%",
          lineHeight: 1,
          color: "darkslategray",
          marginBottom: "8px",
        },
      });
      var O = ({
          modalOpen: e,
          taskInfo: t,
          taskId: n,
          readOnly: s,
          setModalOpen: a,
          hasOpenedExample: r,
          projectTemplateId: g,
          updateCaption: C,
          tasksWithProcessingAnnotationsResponses: N,
        }) => {
          const O = z(),
            { 0: A, 1: P } = (0, i.useState)(!1),
            D = (0, i.useRef)(),
            { 0: R, 1: Z } = (0, i.useState)(""),
            { 0: F, 1: B } = (0, i.useState)(""),
            { 0: L, 1: _ } = (0, i.useState)(void 0),
            { data: G } = (0, w.Z)(n, s, g, !0),
            { isMobileView: Q, enableSidePanel: $ } = (0, I.k)(),
            { goodExample: H, caption: M } = t,
            { 0: U, 1: W } = (0, i.useState)(M),
            { params: V, response: q, type: X, projectId: J, status: K } = G,
            Y = (0, y.useQueryClient)(),
            { fetchUnprocessedAttachments: ee } = (0, S.Z)(),
            te = Q && !$,
            ne = !s && L && K === m.TaskStatus.Completed;
          (0, i.useEffect)(() => {
            let e = !1;
            function t() {
              return (t = k(function* () {
                if (!A && V && X && J) {
                  _(void 0);
                  const o = V;
                  var t;
                  if (
                    o &&
                    o.attachments &&
                    o.attachments.length > 0 &&
                    b().every(o.attachments, (e) => "unprocessed" === e.type)
                  )
                    o.attachments = yield ee(
                      null !== (t = o.attachments) && void 0 !== t ? t : []
                    );
                  e ||
                    (r && r(n, H),
                    _(
                      E({}, x.sampleTask, {
                        assignment: {
                          params: o,
                          projectId: J,
                          type: X,
                          featureFlags: {
                            canLeaveInlineComments: !s,
                            canSeeInlineComments: !0,
                          },
                          initialInlineComments:
                            null === q || void 0 === q
                              ? void 0
                              : q.inlineComments,
                        },
                        type: X,
                        params: o,
                        fixResponse:
                          q || (null === N || void 0 === N ? void 0 : N[n]),
                        timerDisabled: !0,
                        shouldWarnOnExit: !1,
                        readOnly: !ne,
                        editable: ne,
                        isCustomer: !0,
                        showHeader: !1,
                        isTaxonomyDisplay: !0,
                        showFooter: !1,
                      })
                    ));
                }
              })).apply(this, arguments);
            }
            return (
              (function () {
                t.apply(this, arguments);
              })(),
              function () {
                e = !0;
              }
            );
          }, [t]);
          const oe = () => {
              Z("Task update failed"), setTimeout(() => Z(""), 2e3);
            },
            ie = (function () {
              var e = k(function* () {
                if ((B(""), Z(""), P(!0), D.current))
                  try {
                    const e = yield D.current.getReviewChanges(),
                      t = yield v.Z.selfserve.updateInstructionsExample({
                        task: n,
                        response: e,
                      });
                    Y.invalidateQueries(["use-instruction-task-data", n]),
                      t.success
                        ? (C && C(U),
                          _(E({}, L, { fixResponse: e })),
                          B("Task updated"),
                          setTimeout(() => B(""), 2e3))
                        : oe();
                  } catch (e) {
                    oe();
                  }
                P(!1);
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            se = (e) => {
              ("keydown" === (null === e || void 0 === e ? void 0 : e.type) &&
                27 === (null === e || void 0 === e ? void 0 : e.keyCode)) ||
                a(!1);
            };
          return (0, o.jsxs)(d.Vq, {
            classes: { root: s ? O.zIndexHigh : O.zIndexLow, paper: O.dialog },
            maxWidth: "lg",
            open: e,
            onClose: se,
            children: [
              (0, o.jsx)(d.$N, {
                children: (0, o.jsxs)("div", {
                  className: O.title,
                  children: [
                    "Example",
                    " ",
                    (0, o.jsx)("span", {
                      className: O.closeButton,
                      onClick: se,
                      children: "\u2715",
                    }),
                  ],
                }),
              }),
              (0, o.jsxs)(d.cZ, {
                children: [
                  te &&
                    (0, o.jsx)("div", {
                      className: "jsx-78deb52573c15da2",
                      children:
                        "example doesn't support for small screen, please view examples on desktop",
                    }),
                  !L &&
                    (0, o.jsx)("h6", {
                      className: "jsx-78deb52573c15da2",
                      children: "No Images to display...",
                    }),
                  L &&
                    K !== m.TaskStatus.Completed &&
                    (0, o.jsx)(h.Z, {
                      severity: "info",
                      style: { marginTop: "16px", marginBottom: "6px" },
                      children: "Annotations are still being processed",
                    }),
                  R.length > 0 &&
                    (0, o.jsx)(h.Z, {
                      severity: "error",
                      style: { marginTop: "2px", marginBottom: "12px" },
                      children: R,
                    }),
                  F.length > 0 &&
                    (0, o.jsx)(h.Z, {
                      severity: "success",
                      style: { marginTop: "2px", marginBottom: "12px" },
                      children: F,
                    }),
                  !te &&
                    L &&
                    (0, o.jsx)(o.Fragment, {
                      children: (0, o.jsx)(j.Z, {
                        children: (0, o.jsx)(i.Suspense, {
                          fallback: (0, o.jsx)(c.Z, {
                            style: { paddingBottom: "16px" },
                          }),
                          children: (0, o.jsx)("div", {
                            className: "jsx-78deb52573c15da2 component",
                            children: (0, o.jsx)(u.M5, {
                              children: (0, o.jsx)(p.Z, {
                                taskType: L.type,
                                taskProps: L,
                                taskRef: D,
                                isTaxonomyDisplay: !0,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  (0, o.jsx)(l(), {
                    id: "78deb52573c15da2",
                    children:
                      ".component{height:540px}.component,.component .task{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:0;min-width:0;width:100%;overflow:auto}.task__splitpane{position:relative;overflow:auto}",
                  }),
                  !s &&
                    (0, o.jsxs)("div", {
                      className:
                        "jsx-78deb52573c15da2 " + (O.captionContainer || ""),
                      children: [
                        (0, o.jsx)("p", {
                          className:
                            "jsx-78deb52573c15da2 " + (O.captionHeader || ""),
                          children: "Caption",
                        }),
                        (0, o.jsx)("input", {
                          value: U,
                          placeholder: T.Q,
                          onFocus: (e) => (e.target.placeholder = ""),
                          onBlur: (e) => (e.target.placeholder = T.Q),
                          onChange: (e) => {
                            e.preventDefault(), W(e.target.value);
                          },
                          className:
                            "jsx-78deb52573c15da2 " + (O.editableCaption || ""),
                        }),
                      ],
                    }),
                  M &&
                    s &&
                    (0, o.jsx)("div", {
                      style: {
                        marginTop: 12,
                        textAlign: "center",
                        background: "white",
                        border: 0,
                        fontSize: "16px",
                        width: "100%",
                      },
                      className: "jsx-78deb52573c15da2",
                      children: M,
                    }),
                ],
              }),
              ne
                ? (0, o.jsx)(d.kX, {
                    children: (0, o.jsx)(f.zx, {
                      onClick: () => ie(),
                      disabled: A || !ne,
                      type: "primary",
                      children: "Update",
                    }),
                  })
                : (0, o.jsx)(o.Fragment, {}),
            ],
          });
        },
        A = n(792739),
        P = n(390547);
      function D(e, t, n, o, i, s, a) {
        try {
          var r = e[s](a),
            l = r.value;
        } catch (c) {
          return void n(c);
        }
        r.done ? t(l) : Promise.resolve(l).then(o, i);
      }
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
      function Z(e) {
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
      const F = ({
          taskId: e,
          isGoodExample: t,
          caption: n,
          readOnly: s,
          hasOpenedExample: r,
          projectTemplateId: l,
          preventOpen: c,
          handleDelete: p,
          updateCaption: u,
          dragHandleProps: m,
          tasksWithProcessingAnnotationsResponses: h,
        }) => {
          const f = B(),
            { 0: x, 1: v } = (0, i.useState)(!1),
            { isLoading: y, data: g } = (0, w.Z)(e, s, l, !0),
            b = (0, i.useCallback)(
              (e) => {
                e.stopPropagation(), p && p();
              },
              [p]
            );
          if (y)
            return (0, o.jsx)("div", {
              className: f.loading,
              children: (0, o.jsx)(d.D8, {}),
            });
          const { attachmentType: j, attachment: S } = ((e) => {
            if (!e) return { attachmentType: null, attachment: null };
            let t, n;
            const o = e.type;
            return (
              o === a.TaskType.TextCollection
                ? ((t = e.params.attachments[0].type),
                  (n = e.params.attachments[0].content))
                : o === a.TaskType.NamedEntityRecognition
                ? ((t = "text"), (n = e.params.text))
                : o === a.TaskType.DocumentTranscription
                ? ((t = "image"), (n = e.params.attachments[0]))
                : ((t = e.params.attachment_type), (n = e.params.attachment)),
              { attachmentType: t, attachment: n }
            );
          })(g);
          return (0, o.jsxs)("div", {
            className: f.label,
            children: [
              x &&
                (0, o.jsx)(O, {
                  modalOpen: x,
                  setModalOpen: (e) => v(e),
                  taskId: e,
                  taskInfo: Z({}, g, { goodExample: t, caption: n }),
                  readOnly: s,
                  hasOpenedExample: r,
                  projectTemplateId: l,
                  updateCaption: u,
                  tasksWithProcessingAnnotationsResponses: h,
                }),
              (0, o.jsxs)("div", {
                onClick: (function () {
                  var e,
                    t =
                      ((e = function* (e) {
                        e.preventDefault(), c || v(!0);
                      }),
                      function () {
                        var t = this,
                          n = arguments;
                        return new Promise(function (o, i) {
                          var s = e.apply(t, n);
                          function a(e) {
                            D(s, o, i, a, r, "next", e);
                          }
                          function r(e) {
                            D(s, o, i, a, r, "throw", e);
                          }
                          a(void 0);
                        });
                      });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
                style: {
                  cursor: c ? "default" : "pointer",
                  width: "100%",
                  height: "100%",
                },
                children: [
                  (0, o.jsx)("div", {
                    className: f.preview,
                    children:
                      ((T = S),
                      (I = j),
                      T && I
                        ? "image" === I || "unprocessed" === I
                          ? (0, o.jsx)("img", {
                              className: f.img,
                              src: T,
                              crossOrigin: "anonymous",
                            })
                          : "text" === I
                          ? (0, o.jsx)("div", {
                              className: f.text,
                              children: T,
                            })
                          : "pdf" === I
                          ? (0, o.jsx)("object", { className: f.pdf, data: T })
                          : "audio" === I || "transcription_audio" === I
                          ? (0, o.jsx)("audio", {
                              className: f.audio,
                              src: T,
                              controls: !0,
                            })
                          : "website" === I
                          ? (0, o.jsx)("div", {
                              className: f.website,
                              children: T,
                            })
                          : "video" === I
                          ? (0, o.jsx)("video", { className: f.video, src: T })
                          : null
                        : (0, o.jsx)("div", {
                            className: f.text,
                            children: "Error loading example.",
                          })),
                  }),
                  (0, o.jsx)("div", { className: f.overlay }),
                  !s &&
                    (0, o.jsx)("div", {
                      className: f.checkbox,
                      onClick: b,
                      children: (0, o.jsx)(P.Z, {
                        size: "small",
                        children: (0, o.jsx)(A.G, {
                          icon: "trash",
                          color: "white",
                        }),
                      }),
                    }),
                  !!m &&
                    !s &&
                    (0, o.jsx)(
                      "div",
                      Z({ className: f.dragIcon }, m, {
                        children: (0, o.jsx)(P.Z, {
                          size: "small",
                          children: (0, o.jsx)(A.G, {
                            icon: "grip-vertical",
                            color: "white",
                          }),
                        }),
                      })
                    ),
                ],
              }),
            ],
          });
          var T, I;
        },
        B = (0, s.ZL)((e) => {
          var t, n, o, i;
          return {
            overlay: Z(
              { background: "rgba(0, 0, 0, 0.25)", position: "absolute" },
              null === (t = e.alignment) || void 0 === t ? void 0 : t.inset,
              {
                opacity: 0,
                pointerEvents: "none",
                transition: `opacity ${
                  null === (n = e.duration) || void 0 === n ? void 0 : n.short
                }ms ease-out`,
                zIndex: 1,
              }
            ),
            checkbox: {
              position: "absolute",
              top: e.spacing(1.5),
              left: e.spacing(4.5),
              opacity: 0,
              transform: `translate3d(0, ${
                null === e || void 0 === e ? void 0 : e.spacing(-0.5)
              }px, 0)`,
              pointerEvents: "none",
              transition: `all ${
                null === (o = e.duration) || void 0 === o ? void 0 : o.short
              }ms ease-out`,
              zIndex: 2,
            },
            dragIcon: {
              position: "absolute",
              top: e.spacing(1.5),
              left: e.spacing(1.5),
              opacity: 0,
              transform: `translate3d(0, ${
                null === e || void 0 === e ? void 0 : e.spacing(-0.5)
              }px, 0)`,
              pointerEvents: "none",
              transition: `all ${
                null === (i = e.duration) || void 0 === i ? void 0 : i.short
              }ms ease-out`,
              zIndex: 2,
            },
            checkboxRoot: {
              padding: 0,
              "@global svg": { height: 28, width: 28 },
            },
            label: {
              "&:hover $button": { opacity: 1 },
              position: "relative",
              height: "100%",
              width: "100%",
              "&:hover $checkbox": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                pointerEvents: "all",
              },
              "&:hover $dragIcon": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                pointerEvents: "all",
              },
              "&:hover $overlay": { opacity: 1 },
            },
            button: {
              opacity: "0",
              top: "-6px",
              right: "-6px",
              position: "absolute",
              zIndex: 1,
              color: "gray",
            },
            preview: { width: "100%", height: "100%", overflow: "hidden" },
            img: { objectFit: "cover", width: "100%", height: "100%" },
            pdf: {
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: "none",
            },
            audio: { width: "100%", height: "100%", background: "#dddddd" },
            video: {
              width: "100%",
              height: "100%",
              background: "#dddddd",
              padding: "2px",
              boxSizing: "border-box",
            },
            website: {
              background: "#dddddd",
              fontSize: "10px",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "4px",
            },
            text: {
              background: "#dddddd",
              fontSize: "10px",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "4px",
              maxHeight: "120px",
            },
            loading: {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            },
          };
        });
    },
    754991: function (e, t, n) {
      n.d(t, {
        _: function () {
          return T;
        },
      });
      var o = n(824246),
        i = n(257881),
        s = n(827378),
        a = n(542280),
        r = n(599789),
        l = n(604375),
        c = n(507212),
        d = n(298784),
        p = n.n(d);
      const u = (0, a.ZL)({
        component: { height: "540px" },
        dialog: { width: "100%", overflow: "hidden", margin: "3% auto 20px" },
        zIndexHigh: { zIndex: "2000 !important" },
        zIndexLow: { zIndex: "110 !important" },
        title: { textAlign: "center" },
        closeButton: {
          position: "absolute",
          right: 20,
          top: 15,
          "&:hover": { cursor: "pointer" },
        },
        img: { objectFit: "contain", width: "100%", height: "100%" },
        pdf: {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          pointerEvents: "none",
        },
        audio: { width: "100%", height: "100%", background: "#dddddd" },
        video: {
          width: "100%",
          height: "100%",
          background: "#dddddd",
          padding: "2px",
          boxSizing: "border-box",
        },
        website: {
          background: "#dddddd",
          fontSize: "10px",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: "4px",
        },
        text: {
          background: "#dddddd",
          fontSize: "10px",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          padding: "4px",
        },
        caption: {
          opacity: 0.9,
          marginTop: 12,
          textAlign: "center",
          border: 0,
          fontSize: "16px",
          width: "100%",
        },
        editableCaption: {
          border: "1px solid #ddd",
          borderRadius: "4px",
          marginTop: "0px",
        },
        captionContainer: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
        },
        captionHeader: {
          width: "100%",
          lineHeight: 1,
          color: "darkslategray",
          marginBottom: "8px",
        },
      });
      var m = ({
          modalOpen: e,
          setModalOpen: t,
          staticAssetAttachment: n,
          staticAssetAttachmentType: i,
          initialCaption: a,
          submitCaption: r,
        }) => {
          const d = u(),
            m = (e) => {
              ("keydown" === (null === e || void 0 === e ? void 0 : e.type) &&
                27 === (null === e || void 0 === e ? void 0 : e.keyCode)) ||
                (t(!1), !p().isNil(h) && r && r(h));
            },
            { 0: h, 1: f } = (0, s.useState)(a);
          return (0, o.jsxs)(l.Vq, {
            classes: { root: d.zIndexLow, paper: d.dialog },
            maxWidth: "lg",
            open: e,
            onClose: m,
            children: [
              (0, o.jsx)(l.$N, {
                children: (0, o.jsxs)("div", {
                  className: d.title,
                  children: [
                    "Example",
                    " ",
                    (0, o.jsx)("span", {
                      className: d.closeButton,
                      onClick: m,
                      children: "\u2715",
                    }),
                  ],
                }),
              }),
              (0, o.jsx)(l.cZ, {
                children: (0, o.jsx)("div", {
                  className: d.component,
                  children:
                    ((x = n),
                    (v = i),
                    x && v
                      ? "image" === v || "unprocessed" === v
                        ? (0, o.jsx)("img", {
                            className: d.img,
                            src: x,
                            crossOrigin: "anonymous",
                          })
                        : "text" === v
                        ? (0, o.jsx)("div", { className: d.text, children: x })
                        : "pdf" === v
                        ? (0, o.jsx)("object", { className: d.pdf, data: x })
                        : "audio" === v || "transcription_audio" === v
                        ? (0, o.jsx)("audio", {
                            className: d.audio,
                            src: x,
                            controls: !0,
                          })
                        : "website" === v
                        ? (0, o.jsx)("div", {
                            className: d.website,
                            children: x,
                          })
                        : "video" === v
                        ? (0, o.jsx)("video", { className: d.video, src: x })
                        : null
                      : (0, o.jsx)("div", {
                          className: d.text,
                          children: "Error loading example.",
                        })),
                }),
              }),
              (0, o.jsx)(l.kX, {
                children: r
                  ? (0, o.jsxs)("div", {
                      className: d.captionContainer,
                      children: [
                        (0, o.jsx)("p", {
                          className: d.captionHeader,
                          children: "Caption",
                        }),
                        (0, o.jsx)("input", {
                          value: h,
                          placeholder: c.Q,
                          className: `${d.caption} ${d.editableCaption}`,
                          onFocus: (e) => (e.target.placeholder = ""),
                          onBlur: (e) => (e.target.placeholder = c.Q),
                          onChange: (e) => {
                            e.preventDefault(), f(e.target.value);
                          },
                        }),
                      ],
                    })
                  : (0, o.jsx)("div", { className: d.caption, children: h }),
              }),
            ],
          });
          var x, v;
        },
        h = n(792739),
        f = n(400070),
        x = n(390547),
        v = n(44579);
      function y(e, t, n, o, i, s, a) {
        try {
          var r = e[s](a),
            l = r.value;
        } catch (c) {
          return void n(c);
        }
        r.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      function g(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var s = e.apply(t, n);
            function a(e) {
              y(s, o, i, a, r, "next", e);
            }
            function r(e) {
              y(s, o, i, a, r, "throw", e);
            }
            a(void 0);
          });
        };
      }
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
      function w(e) {
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
      }
      const j = (e) =>
          (null === e || void 0 === e ? void 0 : e.mimeType)
            ? e.mimeType.match("image/*")
              ? r.SelfServeSupportedAttachmentTypes.Image
              : e.mimeType.match("audio/*")
              ? r.SelfServeSupportedAttachmentTypes.Audio
              : e.mimeType.match("video/*")
              ? r.SelfServeSupportedAttachmentTypes.Video
              : e.mimeType.match("text/*") && void 0 === e.text
              ? r.SelfServeSupportedAttachmentTypes.DownloadableText
              : "text/json" === e.mimeType
              ? r.SelfServeSupportedAttachmentTypes.Json
              : e.mimeType.match("text/*")
              ? r.SelfServeSupportedAttachmentTypes.Text
              : "application/pdf" === e.mimeType
              ? r.SelfServeSupportedAttachmentTypes.Pdf
              : "unprocessed" === e.mimeType
              ? "unprocessed"
              : void 0
            : "null",
        S = (function () {
          var e = g(function* (e) {
            if (!e) return;
            const t = j(e);
            return ("text" !== t &&
              t !== r.SelfServeSupportedAttachmentTypes.Json) ||
              !e.text
              ? (yield i.Z.selfserve.fetchAssetS3URL(
                  w({}, e, { assetId: e._id })
                )).signedURL
              : e.text;
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        T = ({
          readOnly: e,
          preventOpen: t,
          handleDelete: n,
          staticAsset: i,
          dragHandleProps: a,
          initialCaption: r,
          submitCaption: c,
        }) => {
          const d = I(),
            { 0: p, 1: u } = (0, s.useState)(!1),
            { 0: y, 1: b } = (0, s.useState)(void 0),
            { 0: T, 1: C } = (0, s.useState)(void 0),
            { 0: k, 1: N } = (0, s.useState)(!0);
          (0, v.Z)(() => {
            S(i)
              .then((e) => {
                b(e), C(j(i)), N(!1);
              })
              .catch(() => {
                N(!1);
              });
          });
          const E = (0, s.useCallback)(
            (e) => {
              e.stopPropagation(), n && n();
            },
            [n]
          );
          return k
            ? (0, o.jsx)("div", {
                className: d.loading,
                children: (0, o.jsx)(l.D8, {}),
              })
            : (0, o.jsxs)("div", {
                className: d.label,
                children: [
                  p &&
                    (0, o.jsx)(m, {
                      modalOpen: p,
                      setModalOpen: (e) => u(e),
                      staticAssetAttachment: y,
                      staticAssetAttachmentType: T,
                      initialCaption: r,
                      submitCaption: c,
                    }),
                  (0, o.jsxs)("div", {
                    onClick: (function () {
                      var e = g(function* (e) {
                        e.preventDefault(), t || u(!0);
                      });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                    style: {
                      cursor: t ? "default" : "pointer",
                      width: "100%",
                      height: "100%",
                    },
                    children: [
                      (0, o.jsx)("div", {
                        className: d.preview,
                        children:
                          ((z = y),
                          (O = T),
                          z && O
                            ? "image" === O || "unprocessed" === O
                              ? (0, o.jsx)("img", {
                                  className: d.img,
                                  src: z,
                                  crossOrigin: "anonymous",
                                })
                              : "text" === O
                              ? (0, o.jsx)("div", {
                                  className: d.text,
                                  children: z,
                                })
                              : "pdf" === O
                              ? (0, o.jsx)("object", {
                                  className: d.pdf,
                                  data: z,
                                })
                              : "audio" === O || "transcription_audio" === O
                              ? (0, o.jsx)("audio", {
                                  className: d.audio,
                                  src: z,
                                  controls: !0,
                                })
                              : "website" === O
                              ? (0, o.jsx)("div", {
                                  className: d.website,
                                  children: z,
                                })
                              : "video" === O
                              ? (0, o.jsx)("video", {
                                  className: d.video,
                                  src: z,
                                })
                              : null
                            : (0, o.jsx)("div", {
                                className: d.text,
                                children: "Error loading example.",
                              })),
                      }),
                      !!(null === r || void 0 === r ? void 0 : r.length) &&
                        (0, o.jsx)("div", {
                          className: d.caption,
                          children: r,
                        }),
                      (0, o.jsx)("div", { className: d.overlay }),
                      !e &&
                        (0, o.jsx)("div", {
                          className: d.checkbox,
                          onClick: E,
                          children: (0, o.jsx)(f.ZP, {
                            title: "Delete example asset",
                            children: (0, o.jsx)(x.Z, {
                              size: "small",
                              children: (0, o.jsx)(h.G, {
                                icon: "trash",
                                color: "white",
                              }),
                            }),
                          }),
                        }),
                      !!a &&
                        !e &&
                        (0, o.jsx)(
                          "div",
                          w({ className: d.dragIcon }, a, {
                            children: (0, o.jsx)(f.ZP, {
                              title: "Drag to reorder asset",
                              children: (0, o.jsx)(x.Z, {
                                size: "small",
                                children: (0, o.jsx)(h.G, {
                                  icon: "grip-vertical",
                                  color: "white",
                                }),
                              }),
                            }),
                          })
                        ),
                    ],
                  }),
                ],
              });
          var z, O;
        },
        I = (0, a.ZL)((e) => {
          var t, n, o, i;
          return {
            overlay: w(
              { background: "rgba(0, 0, 0, 0.25)", position: "absolute" },
              null === (t = e.alignment) || void 0 === t ? void 0 : t.inset,
              {
                opacity: 0,
                pointerEvents: "none",
                transition: `opacity ${
                  null === (n = e.duration) || void 0 === n ? void 0 : n.short
                }ms ease-out`,
                zIndex: 1,
              }
            ),
            caption: {
              position: "absolute",
              bottom: 0,
              color: "black",
              fontSize: 14,
              background: "rgba(255, 255, 255, 0.75)",
              padding: "0.25rem",
              maxWidth: "100%",
              maxHeight: 32,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
            checkbox: {
              position: "absolute",
              top: e.spacing(1.5),
              left: e.spacing(4.5),
              opacity: 0,
              transform: `translate3d(0, ${
                null === e || void 0 === e ? void 0 : e.spacing(-0.5)
              }px, 0)`,
              pointerEvents: "none",
              transition: `all ${
                null === (o = e.duration) || void 0 === o ? void 0 : o.short
              }ms ease-out`,
              zIndex: 2,
            },
            dragIcon: {
              position: "absolute",
              top: e.spacing(1.5),
              left: e.spacing(1.5),
              opacity: 0,
              transform: `translate3d(0, ${
                null === e || void 0 === e ? void 0 : e.spacing(-0.5)
              }px, 0)`,
              pointerEvents: "none",
              transition: `all ${
                null === (i = e.duration) || void 0 === i ? void 0 : i.short
              }ms ease-out`,
              zIndex: 2,
            },
            checkboxRoot: {
              padding: 0,
              "@global svg": { height: 28, width: 28 },
            },
            label: {
              "&:hover $button": { opacity: 1 },
              position: "relative",
              width: "100%",
              height: "100%",
              "&:hover $checkbox": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                pointerEvents: "all",
              },
              "&:hover $dragIcon": {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                pointerEvents: "all",
              },
              "&:hover $overlay": { opacity: 1 },
            },
            button: {
              opacity: "0",
              top: "-6px",
              right: "-6px",
              position: "absolute",
              zIndex: 1,
              color: "gray",
            },
            preview: { width: "100%", height: "100%" },
            img: {
              objectFit: "cover",
              width: "100%",
              height: "100%",
              maxHeight: "100%",
              maxWidth: "100%",
            },
            pdf: {
              width: "100%",
              height: "100%",
              overflow: "hidden",
              pointerEvents: "none",
            },
            audio: { width: "100%", height: "100%", background: "#dddddd" },
            video: {
              width: "100%",
              height: "100%",
              background: "#dddddd",
              padding: "2px",
              boxSizing: "border-box",
            },
            website: {
              background: "#dddddd",
              fontSize: "10px",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "4px",
            },
            text: {
              background: "#dddddd",
              fontSize: "10px",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "4px",
            },
            loading: {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            },
          };
        });
    },
  },
]);
