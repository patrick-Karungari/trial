"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93827],
  {
    295953: function (e, t, n) {
      var i = n(824246),
        o = (n(827378), n(60042)),
        r = n.n(o),
        a = n(792739);
      const s = (0, n(68649).ZL)({
        container: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexFlow: "column nowrap",
          flexWrap: "nowrap",
        },
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
        },
        exampleTypeClickable: { cursor: "pointer" },
      });
      t.Z = ({
        exampleType: e,
        disabled: t,
        setExampleType: n,
        readOnly: o,
      }) => {
        const l = s();
        return (0, i.jsx)("div", {
          className: l.container,
          children: (0, i.jsxs)("div", {
            className: l.exampleTypeSelector,
            children: [
              (!o || "good" === e) &&
                (0, i.jsxs)("div", {
                  className: r()(l.exampleType, {
                    [l.exampleTypeClickable]: !t,
                  }),
                  onClick: () => !t && n("good"),
                  style: "good" === e ? { border: "1px solid green" } : {},
                  children: [
                    (0, i.jsx)(a.G, {
                      icon: "check-circle",
                      color: "green",
                      style: {
                        fontSize: "11px",
                        lineHeight: "16px",
                        marginRight: 8,
                        opacity: 0.5,
                      },
                    }),
                    "Well labeled example",
                  ],
                }),
              (!o || "bad" === e) &&
                (0, i.jsxs)("div", {
                  className: r()(l.exampleType, {
                    [l.exampleTypeClickable]: !t,
                  }),
                  onClick: () => !t && n("bad"),
                  style: "bad" === e ? { border: "1px solid red" } : {},
                  children: [
                    (0, i.jsx)(a.G, {
                      icon: "times-circle",
                      color: "red",
                      style: {
                        fontSize: "11px",
                        lineHeight: "16px",
                        marginRight: 8,
                        opacity: 0.3,
                      },
                    }),
                    "Poorly labeled example",
                  ],
                }),
            ],
          }),
        });
      };
    },
    507212: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return E;
        },
      });
      var i = n(824246),
        o = n(679892),
        r = n.n(o),
        a = n(827378),
        s = n(687192),
        l = n(604375),
        c = n(792739),
        d = n(68649),
        p = n(176832),
        u = n(271682),
        h = n(295953),
        m = n(275534),
        x = n(718755),
        f = n(585912),
        g = n(257881),
        y = n(684570),
        b = n(167469),
        v = n(71764),
        j = n(149719),
        w = n(569465),
        k = n(376189),
        S = n(298784),
        O = n.n(S);
      function T(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function C(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              T(r, i, o, a, s, "next", e);
            }
            function s(e) {
              T(r, i, o, a, s, "throw", e);
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
      function N(e) {
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
              I(e, t, n[t]);
            });
        }
        return e;
      }
      const E =
          "What does this example illustrate? Click here to add a description.",
        P = (0, d.ZL)({
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
        });
      t.Z = ({
        modalOpen: e,
        lastSelection: t,
        project: n,
        uploadedAssets: o,
        taxonomy: d,
        location: S,
        caption: T,
        setModalOpen: I,
        handleSave: Z,
        trayExamples: R,
        setTrayExamples: D,
      }) => {
        const L = P(),
          { 0: A, 1: M } = (0, a.useState)(0),
          { 0: z } = (0, a.useState)({}),
          { 0: B } = (0, a.useState)({}),
          { 0: F, 1: G } = (0, a.useState)("good"),
          { 0: W, 1: H } = (0, a.useState)(!1),
          { 0: U, 1: Y } = (0, a.useState)(T),
          { 0: $, 1: _ } = (0, a.useState)(void 0),
          { 0: q, 1: V } = (0, a.useState)(""),
          { 0: Q, 1: X } = (0, a.useState)(R || S.examples || []),
          { 0: K, 1: J } = (0, a.useState)(!1),
          { 0: ee, 1: te } = (0, a.useState)(!1),
          { 0: ne, 1: ie } = (0, a.useState)(-1),
          { 0: oe, 1: re } = (0, a.useState)(!1),
          { fetchUnprocessedAttachments: ae } = (0, k.Z)(),
          { taskType: se } = (0, j.kc)(),
          le = (0, m.ui)(),
          ce = (function () {
            var e = C(function* (e) {
              return (
                z[e] ||
                  (z[e] = (yield g.Z.selfserve.fetchAssetS3URL({
                    assetId: e,
                  })).signedURL),
                z[e]
              );
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          de = (function () {
            var e = C(function* () {
              if (he.current) {
                const e = yield he.current.getReviewChanges();
                return se === b.TaskType.Categorization
                  ? e.taxonomies && e.taxonomies.length > 0
                  : e.annotations && e.annotations.length > 0;
              }
              return !1;
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          pe = (function () {
            var e = C(function* (e) {
              return (
                B[e] ||
                  (B[e] = (yield g.Z.selfserve.fetchAssetPages({
                    assetId: e,
                  })).pageURLs),
                B[e]
              );
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ue = (function () {
            var e = C(function* (e, t) {
              const { attachment: n } =
                yield g.Z.selfserve.fetchAssetToTemplateAttachment({
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
          e && M(0);
        }, [e]),
          (0, a.useEffect)(() => {
            let e = !1;
            function t() {
              return (t = C(function* () {
                if (o && o.length > 0) {
                  _(void 0);
                  const i = yield (0, y.kh)(
                    null !== se && void 0 !== se ? se : n.type,
                    o[A],
                    d,
                    !0,
                    ce,
                    pe,
                    n.useTextCollectionTemplate ? ue : void 0,
                    n
                  );
                  var t;
                  if (
                    i.attachments &&
                    O().every(i.attachments, (e) => "unprocessed" === e.type)
                  )
                    i.attachments = yield ae(
                      null !== (t = i.attachments) && void 0 !== t ? t : []
                    );
                  e ||
                    _(
                      N({}, x.sampleTask, {
                        type: null !== se && void 0 !== se ? se : n.type,
                        params: i,
                        assignment: {
                          projectId: n.id,
                          params: i,
                          type: null !== se && void 0 !== se ? se : n.type,
                          featureFlags: {
                            showSidebar:
                              (null !== se && void 0 !== se ? se : n.type) ===
                                b.TaskType.NamedEntityRecognition || void 0,
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
                o &&
                  o[A + 1] &&
                  (null !== se && void 0 !== se ? se : n.type) ===
                    b.TaskType.DocumentTranscription &&
                  g.Z.selfserve.fetchAssetPages({ assetId: o[A + 1]._id });
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
          }, [n, o, d, A]);
        const he = (0, a.useRef)(),
          me = (function () {
            var e = C(function* () {
              if ((H(!0), he.current && n)) {
                const t = yield he.current.getReviewChanges(),
                  i = o[A]._id,
                  r = {
                    project: n.id,
                    type: null !== se && void 0 !== se ? se : n.type,
                    uploadedAsset: i,
                    taxonomy: d,
                    response: t,
                  };
                try {
                  const { taskId: e, msg: t } =
                    yield g.Z.selfserve.setInstructionsExample(r);
                  if (!t) {
                    const t = { taskId: e, isGoodExample: "good" === F };
                    (t.caption = U),
                      f.YR.setNodes(
                        le,
                        { examples: [...Q, t] },
                        { at: S.path }
                      ),
                      X([...Q, t]),
                      xe(),
                      D && D([...Q, t]);
                  }
                  V("");
                } catch (e) {
                  V("verify that the response is valid");
                }
                H(!1);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          xe = () => {
            J(!0), re(!0), setTimeout(() => J(!1), 2e3);
          },
          fe = (e) => {
            ie(e), te(!0);
          };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            ee &&
              (0, i.jsx)(v.Z, {
                isOpen: ee,
                message:
                  "do you want to change images without saving the example?",
                onSubmit: () => {
                  M(ne), ie(-1), re(!1), te(!1);
                },
                onRequestClose: () => te(!1),
              }),
            (0, i.jsxs)(l.Vq, {
              classes: { root: L.dialogRoot, paper: L.dialog },
              maxWidth: "lg",
              open: e,
              onClose: (e) => {
                ("keydown" === (null === e || void 0 === e ? void 0 : e.type) &&
                  27 === (null === e || void 0 === e ? void 0 : e.keyCode)) ||
                  (!W && t && t.anchor && f.YR.select(le, t), Z && Z(), I(!1));
              },
              children: [
                (0, i.jsx)(l.$N, {
                  children: (0, i.jsx)("div", {
                    style: {
                      textAlign: "center",
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "20px",
                    },
                    children:
                      "Create both well labeled and poorly labeled examples",
                  }),
                }),
                (0, i.jsxs)(l.cZ, {
                  children: [
                    (!o || 0 === o.length) &&
                      (0, i.jsx)("h6", {
                        className: "jsx-8b0aa6d31560dfb1",
                        children: "No assets to display...",
                      }),
                    o &&
                      o.length > 0 &&
                      (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(h.Z, {
                            exampleType: F,
                            setExampleType: G,
                            disabled: W,
                            readOnly: !1,
                          }),
                          q.length > 0 &&
                            (0, i.jsx)(l.bZ, {
                              severity: "error",
                              style: { marginTop: "2px", marginBottom: "12px" },
                              children: q,
                            }),
                          K &&
                            (0, i.jsx)(l.bZ, {
                              severity: "success",
                              style: { marginTop: "2px", marginBottom: "12px" },
                              children: "example created!",
                            }),
                          $
                            ? (0, i.jsx)(w.Z, {
                                children: (0, i.jsx)(a.Suspense, {
                                  fallback: (0, i.jsx)(s.Z, {
                                    style: { paddingBottom: "16px" },
                                  }),
                                  children: (0, i.jsx)("div", {
                                    className: "jsx-8b0aa6d31560dfb1 component",
                                    children: (0, i.jsx)(u.M5, {
                                      children: (0, i.jsx)(p.Z, {
                                        taskType: $.type,
                                        taskProps: $,
                                        taskRef: he,
                                        isTaxonomyDisplay:
                                          "categorization" !==
                                          (null !== se && void 0 !== se
                                            ? se
                                            : n.type),
                                      }),
                                    }),
                                  }),
                                }),
                              })
                            : (0, i.jsx)(s.Z, {
                                style: { paddingBottom: "16px" },
                              }),
                          (0, i.jsx)("input", {
                            value: U,
                            placeholder: E,
                            style: {
                              opacity: 0.75,
                              marginTop: 12,
                              textAlign: "center",
                              border: 0,
                              fontSize: "14px",
                              width: "100%",
                            },
                            onFocus: (e) => (e.target.placeholder = ""),
                            onBlur: (e) => (e.target.placeholder = E),
                            onChange: (e) => {
                              e.preventDefault(), Y(e.target.value);
                            },
                            className: "jsx-8b0aa6d31560dfb1",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "jsx-8b0aa6d31560dfb1 " +
                              (L.selectorControls || ""),
                            children: [
                              (0, i.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "jump to first asset",
                                children: (0, i.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, i.jsx)("a", {
                                    onClick: C(function* () {
                                      W ||
                                        (!oe && (yield de())
                                          ? fe(0)
                                          : (M(0), re(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, i.jsx)(c.G, {
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
                              (0, i.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "view previous asset",
                                children: (0, i.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, i.jsx)("a", {
                                    style: { marginLeft: "8px" },
                                    onClick: C(function* () {
                                      const e = (A - 1 + o.length) % o.length;
                                      W ||
                                        (!oe && (yield de())
                                          ? fe(e)
                                          : (M(e), re(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, i.jsx)(c.G, {
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
                              (0, i.jsxs)("p", {
                                style: { margin: "0px 10px 0px 10px" },
                                className: "jsx-8b0aa6d31560dfb1",
                                children: [A + 1, " of ", o.length],
                              }),
                              (0, i.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "view next asset",
                                children: (0, i.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, i.jsx)("a", {
                                    style: { marginRight: "8px" },
                                    onClick: C(function* () {
                                      const e = (A + 1) % o.length;
                                      W ||
                                        (!oe && (yield de())
                                          ? fe(e)
                                          : (M(e), re(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, i.jsx)(c.G, {
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
                              (0, i.jsx)(l.u, {
                                arrow: !0,
                                placement: "top",
                                title: "jump to last asset",
                                children: (0, i.jsx)("div", {
                                  className: "jsx-8b0aa6d31560dfb1",
                                  children: (0, i.jsx)("a", {
                                    onClick: C(function* () {
                                      const e = o.length - 1;
                                      W ||
                                        (!oe && (yield de())
                                          ? fe(e)
                                          : (M(e), re(!1)));
                                    }),
                                    className: "jsx-8b0aa6d31560dfb1",
                                    children: (0, i.jsx)(c.G, {
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
                    (0, i.jsx)(r(), {
                      id: "8b0aa6d31560dfb1",
                      children:
                        ".component{height:540px}.component,.component .task{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:0;min-width:0;width:100%;overflow:auto}.task__splitpane{position:relative;overflow:auto}",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "jsx-8b0aa6d31560dfb1 " + (L.createButton || ""),
                      children: (0, i.jsx)(l.zx, {
                        type: "primary",
                        onClick: me,
                        disabled: W,
                        children: W ? "Saving" : "Save example",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    449863: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(257881),
        o = n(456552);
      const r = (e, t, n, r) =>
        (0, o.useQuery)(
          ["use-instruction-task-data", e],
          () =>
            i.Z.selfserve.fetchInstructionExample({
              task: e,
              projectTemplateId: n,
              notRequiredInstructionExample: r,
            }),
          t ? { cacheTime: 3e5 } : { cacheTime: 0 }
        );
    },
    893827: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return We;
        },
      });
      var i = n(824246),
        o = n(827378),
        r = n(68649),
        a = n(335331),
        s = n(679892),
        l = n.n(s),
        c = n(257881),
        d = n(585912),
        p = n(505940),
        u = n(275534),
        h = n(318681),
        m = n(390547),
        x = n(792739),
        f = n(400070),
        g = n(298784),
        y = n.n(g),
        b = n(542280);
      function v(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      const j = (0, r.ZL)({
          sectionButton: {
            outline: "none",
            background: "#F8F8F8",
            border: "none",
            padding: "4px 6px",
            marginLeft: 6,
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 500,
            color: "#DD45D3",
            cursor: "pointer",
            transition: "background 120ms ease-out",
            "&:hover": { background: b.ZP.colors.periwinkle25 },
          },
          questionMenu: {
            position: "absolute",
            top: 32,
            left: 6,
            background: "white",
            padding: 4,
            borderRadius: 8,
            minWidth: 200,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          },
          menuItem: {
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            fontWeight: 400,
            padding: 8,
            borderRadius: 4,
            cursor: "pointer",
            "&:hover": { background: b.ZP.colors.periwinkle25 },
          },
        }),
        w = ({ lastSelection: e, shouldShowLabeledExamples: t }) => {
          const n = j(),
            { 0: r, 1: a } = (0, o.useState)(!1),
            s = (0, u.ui)(),
            l = (t) => {
              let n;
              "iframe" === t
                ? (n = { type: "iframe", url: "", children: [{ text: "" }] })
                : "exampleLabel" === t &&
                  (n = {
                    type: "label-section",
                    labelName: y().startCase(y().toLower("Label Name...")),
                    examples: [],
                    children: [{ text: "" }],
                  }),
                n &&
                  (d.YR.select(s, e),
                  d.YR.insertNodes(s, n),
                  d.YR.insertNodes(s, {
                    type: "paragraph",
                    children: [{ text: " " }],
                  })),
                a(!r);
            },
            p = (function () {
              var t,
                n =
                  ((t = function* (t) {
                    if (t && t.length > 0) {
                      const { assetId: n } =
                        yield c.Z.selfserve.uploadInstructionImage({
                          file: t.item(0),
                        });
                      if (n) {
                        const t = {
                          type: "image",
                          assetId: n,
                          children: [{ text: "" }],
                        };
                        d.YR.select(s, e),
                          d.YR.insertNodes(s, t),
                          d.YR.insertNodes(s, {
                            type: "paragraph",
                            children: [{ text: " " }],
                          });
                      }
                    }
                    a(!r);
                  }),
                  function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (i, o) {
                      var r = t.apply(e, n);
                      function a(e) {
                        v(r, i, o, a, s, "next", e);
                      }
                      function s(e) {
                        v(r, i, o, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function (e) {
                return n.apply(this, arguments);
              };
            })();
          return (0, i.jsxs)("div", {
            style: { position: "relative", margin: "16px 0" },
            children: [
              (0, i.jsx)("button", {
                style: { color: b.ZP.colors.periwinkle100 },
                className: n.sectionButton,
                onClick: (e) => {
                  e.preventDefault(), a(!r);
                },
                children: "Insert",
              }),
              r &&
                (0, i.jsxs)("div", {
                  className: n.questionMenu,
                  children: [
                    (0, i.jsxs)("div", {
                      className: n.menuItem,
                      onClick: () => l("iframe"),
                      children: [
                        (0, i.jsx)(x.G, {
                          icon: "anchor",
                          color: "#555",
                          style: { width: 16, height: 16, marginRight: 12 },
                        }),
                        "Iframe (embed URL)",
                      ],
                    }),
                    (0, i.jsx)("label", {
                      htmlFor: "file-upload",
                      children: (0, i.jsxs)("div", {
                        className: n.menuItem,
                        children: [
                          (0, i.jsx)(x.G, {
                            icon: "image",
                            color: "#555",
                            style: { width: 16, height: 16, marginRight: 12 },
                          }),
                          "Image or PDF",
                        ],
                      }),
                    }),
                    (0, i.jsx)("input", {
                      style: { display: "none", opacity: 0 },
                      id: "file-upload",
                      type: "file",
                      accept: "image/*,application/pdf",
                      onChange: (e) => p(e.target.files),
                    }),
                    t &&
                      (0, i.jsxs)("div", {
                        className: n.menuItem,
                        onClick: () => l("exampleLabel"),
                        children: [
                          (0, i.jsx)(x.G, {
                            icon: "tag",
                            color: "#555",
                            style: { width: 16, height: 16, marginRight: 12 },
                          }),
                          "Labeled Examples",
                        ],
                      }),
                  ],
                }),
            ],
          });
        };
      var k = n(604375),
        S = n(995632),
        O = n(161320),
        T = n.n(O);
      const C = (0, r.ZL)({
        container: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        dialog: { width: "500px", overflow: "hidden", margin: "2% auto 20px" },
        dialogRoot: { zIndex: "110 !important" },
        createButton: { paddingTop: "15px" },
      });
      var I = ({
        modalOpen: e,
        setModalOpen: t,
        changeDescription: n,
        setChangeDescription: o,
      }) => {
        const r = C(),
          a = (e) => {
            ("keydown" === (null === e || void 0 === e ? void 0 : e.type) &&
              27 === (null === e || void 0 === e ? void 0 : e.keyCode)) ||
              t(!1);
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)(k.Vq, {
            classes: { root: r.dialogRoot, paper: r.dialog },
            open: e,
            onClose: a,
            children: [
              (0, i.jsx)(k.$N, {
                children: (0, i.jsx)("div", {
                  style: {
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                  },
                  children:
                    "Provide a brief summary of changes for labelers (optional)",
                }),
              }),
              (0, i.jsx)(k.cZ, {
                children: (0, i.jsxs)("div", {
                  className: r.container,
                  children: [
                    (0, i.jsx)(k.oi, {
                      size: "large",
                      fullWidth: !0,
                      placeholder: "Brief summary of changes",
                      label: "Description",
                      value: n,
                      onChange: (e) => {
                        o(e.target.value);
                      },
                    }),
                    (0, i.jsx)("div", {
                      className: r.createButton,
                      children: (0, i.jsx)(k.zx, {
                        type: "primary",
                        onClick: a,
                        children: "Confirm",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      function N(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      const E = (0, b.ZL)((e) => ({
        toolbar: {
          background: "#F8F8F8",
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: e.spacing(0, 2),
          minWidth: 600,
        },
        menuButton: { marginRight: e.spacing(2) },
        activeIcon: { color: `${e.colors.primary1} !important` },
        icon: { width: 18, height: 18 },
        text: { fontSize: "16px", fontWeight: "normal" },
        actions: {
          display: "flex",
          marginLeft: "auto",
          justifyContent: "end",
          alignItems: "center",
        },
        updateActions: {
          width: "300px",
          display: "flex",
          marginRight: e.spacing(2),
          marginLeft: e.spacing(2),
        },
      }));
      var P = ({
        toggleMark: e,
        toggleBlock: t,
        isBlockActive: n,
        isMarkActive: r,
        lastSelection: a,
        shouldShowLabeledExamples: s = !0,
        handleSave: l,
        updatedAt: c,
        isDirty: d = !0,
        isOnboardingComplete: p = !0,
      }) => {
        const g = E(),
          y = (0, u.ui)(),
          [b, v] = (0, S.Z)(!1),
          [j, O] = (0, S.Z)(!1),
          [C, P] = (0, S.Z)(!1),
          { 0: Z, 1: R } = (0, o.useState)(""),
          [D, L] = (0, S.Z)(!1),
          A = (0, o.useCallback)(() => {
            j || P(!0), O();
          }, [j, O, P]),
          M = (n, i, o = "mark") => {
            n.preventDefault(),
              "mark" === o ? e(y, i) : "block" === o && t(y, i);
          };
        return (0, i.jsxs)(h.Z, {
          className: g.toolbar,
          children: [
            [1, 2, 3, 4].map((e, t) =>
              (0, i.jsx)(
                f.ZP,
                {
                  placement: "bottom",
                  title: `Header Level ${t + 1}`,
                  children: (0, i.jsx)(m.Z, {
                    edge: "start",
                    color: "inherit",
                    onMouseDown: (e) => M(e, `heading-${t + 1}`, "block"),
                    children: (0, i.jsx)("span", {
                      className: `${g.text} ${
                        n(y, `heading-${t + 1}`) ? g.activeIcon : ""
                      } `,
                      children: `H${t + 1}`,
                    }),
                  }),
                },
                t
              )
            ),
            (0, i.jsx)(f.ZP, {
              placement: "bottom",
              title: "Bold",
              children: (0, i.jsx)(m.Z, {
                edge: "start",
                color: "inherit",
                onMouseDown: (e) => M(e, "bold"),
                children: (0, i.jsx)(x.G, {
                  icon: "bold",
                  className: `${g.icon} ${r(y, "bold") ? g.activeIcon : ""}`,
                }),
              }),
            }),
            (0, i.jsx)(f.ZP, {
              placement: "bottom",
              title: "Italic",
              children: (0, i.jsx)(m.Z, {
                edge: "start",
                color: "inherit",
                onMouseDown: (e) => M(e, "italic"),
                children: (0, i.jsx)(x.G, {
                  icon: "italic",
                  className: `${g.icon} ${r(y, "italic") ? g.activeIcon : ""} `,
                }),
              }),
            }),
            (0, i.jsx)(f.ZP, {
              placement: "bottom",
              title: "Underline",
              children: (0, i.jsx)(m.Z, {
                edge: "start",
                color: "inherit",
                onMouseDown: (e) => M(e, "underline"),
                children: (0, i.jsx)(x.G, {
                  icon: "underline",
                  className: `${g.icon} ${
                    r(y, "underline") ? g.activeIcon : ""
                  } `,
                }),
              }),
            }),
            (0, i.jsx)(f.ZP, {
              placement: "bottom",
              title: "Bulleted List",
              children: (0, i.jsx)(m.Z, {
                edge: "start",
                color: "inherit",
                onMouseDown: (e) => M(e, "bulleted-list", "block"),
                children: (0, i.jsx)(x.G, {
                  icon: "list",
                  className: `${g.icon} ${
                    n(y, "bulleted-list") ? g.activeIcon : ""
                  } `,
                }),
              }),
            }),
            (0, i.jsx)(f.ZP, {
              placement: "bottom",
              title: "Numbered List",
              children: (0, i.jsx)(m.Z, {
                edge: "start",
                color: "inherit",
                onMouseDown: (e) => M(e, "numbered-list", "block"),
                children: (0, i.jsx)(x.G, {
                  icon: "list-ol",
                  className: `${g.icon} ${
                    n(y, "numbered-list") ? g.activeIcon : ""
                  } `,
                }),
              }),
            }),
            (0, i.jsx)(w, { lastSelection: a, shouldShowLabeledExamples: s }),
            c &&
              (0, i.jsxs)("div", {
                style: { marginLeft: 8 },
                children: ["Updated: ", T()(c).format("MM/DD/YY hh:mmA")],
              }),
            (0, i.jsx)(i.Fragment, {
              children:
                l &&
                (0, i.jsxs)("div", {
                  className: g.actions,
                  children: [
                    p &&
                      (0, i.jsxs)("div", {
                        className: g.updateActions,
                        children: [
                          C &&
                            (0, i.jsx)(I, {
                              modalOpen: C,
                              setModalOpen: P,
                              changeDescription: Z,
                              setChangeDescription: R,
                            }),
                          (0, i.jsx)(k.XZ, {
                            label: "update labelers",
                            checked: j,
                            onChange: A,
                          }),
                          (0, i.jsx)(f.ZP, {
                            title:
                              "Force labelers to reread the new instructions.",
                            placement: "top",
                            children: (0, i.jsx)("div", {
                              style: {
                                paddingLeft: "4px",
                                lineHeight: "32px",
                                textAlign: "center",
                              },
                              children: (0, i.jsx)(x.G, {
                                icon: "question-circle",
                                color: "gray",
                              }),
                            }),
                          }),
                          (0, i.jsx)(k.XZ, {
                            label: "update tasks",
                            checked: b,
                            onChange: v,
                          }),
                          (0, i.jsx)(f.ZP, {
                            title:
                              "Update existing pending tasks with new instructions.",
                            placement: "top",
                            children: (0, i.jsx)("div", {
                              style: {
                                paddingLeft: "4px",
                                lineHeight: "32px",
                                textAlign: "center",
                              },
                              children: (0, i.jsx)(x.G, {
                                icon: "question-circle",
                                color: "gray",
                              }),
                            }),
                          }),
                        ],
                      }),
                    (0, i.jsxs)(k.zx, {
                      type: "primary",
                      disabled: !l || !d || D,
                      onClick:
                        ((z = function* () {
                          l && (L(!0), yield l(b, j, Z), R(""), L(!1));
                        }),
                        function () {
                          var e = this,
                            t = arguments;
                          return new Promise(function (n, i) {
                            var o = z.apply(e, t);
                            function r(e) {
                              N(o, n, i, r, a, "next", e);
                            }
                            function a(e) {
                              N(o, n, i, r, a, "throw", e);
                            }
                            r(void 0);
                          });
                        }),
                      children: [
                        "Save",
                        !!D &&
                          (0, i.jsx)(k.D8, {
                            size: 12,
                            color: "primary",
                            style: { marginLeft: 8 },
                          }),
                      ],
                    }),
                  ],
                }),
            }),
          ],
        });
        var z;
      };
      const Z = ({ onClick: e }) =>
        (0, i.jsx)(m.Z, {
          edge: "start",
          color: "inherit",
          onMouseDown: () => e(),
          children: (0, i.jsx)(x.G, {
            style: { width: 16, height: 16, cursor: "pointer", opacity: 0.75 },
            icon: "trash",
          }),
        });
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
      const D = ({
        attributes: e,
        children: t,
        element: n,
        readOnly: r,
        setInfoMsg: a,
      }) => {
        const { url: s } = n,
          l = (0, u.ui)(),
          { 0: c, 1: p } = (0, o.useState)(s);
        return (0, i.jsxs)(
          "div",
          (function (e) {
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
                  R(e, t, n[t]);
                });
            }
            return e;
          })({}, e, {
            style: { border: "1px solid #E6E6E6" },
            children: [
              !r &&
                (0, i.jsxs)("div", {
                  style: { display: "flex" },
                  children: [
                    (0, i.jsx)("div", {
                      style: {
                        left: "96%",
                        position: "relative",
                        color: b.ZP.colors.primary1,
                      },
                      children: (0, i.jsx)(Z, {
                        onClick: () => {
                          d.YR.delete(l, { at: u.F3.findPath(l, n) });
                        },
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      contentEditable: !1,
                      style: { width: "90%", display: "flex" },
                      children: [
                        (0, i.jsx)("div", {
                          style: {
                            opacity: 0.5,
                            fontSize: "16px",
                            paddingRight: "8px",
                            paddingTop: "8px",
                          },
                          children: "url:",
                        }),
                        (0, i.jsx)("div", {
                          style: { paddingTop: "4px", width: "100%" },
                          children: (0, i.jsx)(k.oi, {
                            placeholder:
                              "Enter publicly accessible url to embed in this iframe",
                            fullWidth: !0,
                            autoFocus: !1,
                            value: c,
                            onChange: (e) => {
                              e.preventDefault(), p(e.target.value);
                              const t = u.F3.findPath(l, n);
                              d.YR.setNodes(
                                l,
                                { url: e.target.value },
                                { at: t }
                              );
                            },
                            onBlur: (e) => {
                              a &&
                                (a(
                                  "Please make sure your url is publicly accessible!"
                                ),
                                setTimeout(() => a(""), 5e3));
                            },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, i.jsx)("div", {
                contentEditable: !1,
                children: (0, i.jsx)("div", {
                  style: { padding: "75% 0 0 0", position: "relative" },
                  children: (0, i.jsx)("iframe", {
                    src: s,
                    frameBorder: "0",
                    style: {
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    },
                  }),
                }),
              }),
              t,
            ],
          })
        );
      };
      var L = n(285556);
      function A(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function M(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              A(r, i, o, a, s, "next", e);
            }
            function s(e) {
              A(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function z(e, t, n) {
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
      const B = ({ attributes: e, children: t, element: n }) => {
        const { assetId: r } = n,
          { 0: a, 1: s } = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            function e() {
              return (e = M(function* () {
                try {
                  const e = yield c.Z.selfserve.fetchInstructionAssetS3URL({
                    assetId: r,
                  });
                  e && s(e);
                } catch (e) {
                  (0, L.vj)(e, { handleHttp: !0 });
                }
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, [r]),
          (0, i.jsxs)(
            "div",
            (function (e) {
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
                    z(e, t, n[t]);
                  });
              }
              return e;
            })({}, e, {
              className:
                "jsx-1779f09ba0f2df0 " +
                ((e && null != e.className && e.className) || "imageContainer"),
              children: [
                (0, i.jsx)("div", {
                  contentEditable: !1,
                  style: { display: "flex" },
                  className: "jsx-1779f09ba0f2df0",
                  children: a
                    ? (0, i.jsx)(i.Fragment, {
                        children:
                          "application/pdf" === a.mimeType
                            ? (0, i.jsx)("object", {
                                data: a.signedURL + "#toolbar=0",
                                type: "application/pdf",
                                width: "100%",
                                height: "800",
                                className: "jsx-1779f09ba0f2df0",
                              })
                            : (0, i.jsx)("img", {
                                src: a.signedURL,
                                className: "jsx-1779f09ba0f2df0",
                              }),
                      })
                    : (0, i.jsx)("div", {
                        className: "jsx-1779f09ba0f2df0",
                        children: "loading...",
                      }),
                }),
                t,
                (0, i.jsx)(l(), {
                  id: "1779f09ba0f2df0",
                  children:
                    ".button.jsx-1779f09ba0f2df0{opacity:0;position:relative;right:-33%;top:-12px}.imageContainer.jsx-1779f09ba0f2df0:hover .button.jsx-1779f09ba0f2df0{opacity:1}",
                }),
              ],
            })
          )
        );
      };
      var F = n(167469),
        G = n(687192),
        W = n(295953),
        H = n(176832),
        U = n(271682),
        Y = n(599789),
        $ = n(550814),
        _ = n(431350),
        q = n(718755),
        V = n(456552),
        Q = n(507212),
        X = n(449863),
        K = n(569465),
        J = n(376189);
      function ee(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function te(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              ee(r, i, o, a, s, "next", e);
            }
            function s(e) {
              ee(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ne(e, t, n) {
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
      function ie(e) {
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
              ne(e, t, n[t]);
            });
        }
        return e;
      }
      const oe = (0, b.ZL)({
        dialog: { width: "100%", overflow: "hidden", margin: "3% auto 20px" },
        zIndexHigh: { zIndex: "2000 !important" },
        zIndexLow: { zIndex: "110 !important" },
        title: { textAlign: "center" },
      });
      var re = ({
        modalOpen: e,
        taskInfo: t,
        taskId: n,
        location: r,
        lastSelection: a,
        readOnly: s,
        setModalOpen: p,
        hasOpenedExample: h,
        projectTemplateId: m,
        handleUpdateExample: x,
      }) => {
        const f = oe(),
          { 0: g, 1: b } = (0, o.useState)(!1),
          v = (0, o.useRef)(),
          j = (0, u.ui)(),
          { 0: w, 1: S } = (0, o.useState)(""),
          { 0: O, 1: T } = (0, o.useState)(""),
          { 0: C, 1: I } = (0, o.useState)(void 0),
          { data: N } = (0, X.Z)(n, s, m),
          { goodExample: E, caption: P } = t,
          { params: Z, response: R, type: D, projectId: L, status: A } = N,
          { 0: M, 1: z } = (0, o.useState)(P),
          { 0: B, 1: F } = (0, o.useState)(E ? "good" : "bad"),
          ee = (0, V.useQueryClient)(),
          { fetchUnprocessedAttachments: ne } = (0, J.Z)(),
          re = !s && C && A === Y.TaskStatus.Completed;
        (0, o.useEffect)(() => {
          let e = !1;
          function t() {
            return (t = te(function* () {
              if (!g && Z && D && L) {
                I(void 0);
                const i = Z;
                var t;
                if (
                  i &&
                  i.attachments &&
                  i.attachments.length > 0 &&
                  y().every(i.attachments, (e) => "unprocessed" === e.type)
                )
                  i.attachments = yield ne(
                    null !== (t = i.attachments) && void 0 !== t ? t : []
                  );
                e ||
                  (h && h(n, E),
                  I(
                    ie({}, q.sampleTask, {
                      assignment: { params: i, projectId: L, type: D },
                      type: D,
                      params: i,
                      fixResponse: R,
                      timerDisabled: !0,
                      shouldWarnOnExit: !1,
                      readOnly: !re,
                      editable: re,
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
        const ae = () => {
            S("Task update failed"), setTimeout(() => S(""), 2e3);
          },
          se = (function () {
            var e = te(function* () {
              if ((T(""), S(""), b(!0), r && r.examples)) {
                const e = [...r.examples],
                  t = y().map(e, (e) => {
                    if (e.taskId === n) {
                      const t = { isGoodExample: "good" === B };
                      return (t.caption = M), Object.assign({}, e, t);
                    }
                    return e;
                  });
                d.YR.setNodes(j, { examples: t }, { at: r.path });
              }
              if (v.current)
                try {
                  const e = yield v.current.getReviewChanges(),
                    t = yield c.Z.selfserve.updateInstructionsExample({
                      task: n,
                      response: e,
                    });
                  ee.invalidateQueries(["use-instruction-task-data", n]),
                    t.success
                      ? (I(ie({}, C, { fixResponse: e })),
                        T("Task updated"),
                        setTimeout(() => T(""), 2e3))
                      : ae();
                } catch (e) {
                  ae();
                }
              b(!1),
                x && x({ taskId: n, caption: M, isGoodExample: "good" === B });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, i.jsxs)(k.Vq, {
          classes: { root: s ? f.zIndexHigh : f.zIndexLow, paper: f.dialog },
          maxWidth: "lg",
          open: e,
          onClose: (e) => {
            ("keydown" === (null === e || void 0 === e ? void 0 : e.type) &&
              27 === (null === e || void 0 === e ? void 0 : e.keyCode)) ||
              (a && a.anchor && d.YR.select(j, a), p(!1));
          },
          children: [
            (0, i.jsx)(k.$N, {
              children: (0, i.jsx)("div", {
                className: f.title,
                children: "Example",
              }),
            }),
            (0, i.jsxs)(k.cZ, {
              children: [
                !C &&
                  (0, i.jsx)("h6", {
                    className: "jsx-78deb52573c15da2",
                    children: "No Images to display...",
                  }),
                C &&
                  A !== Y.TaskStatus.Completed &&
                  (0, i.jsx)($.Z, {
                    severity: "info",
                    style: { marginTop: "16px" },
                    children: "Annotations are still being processed",
                  }),
                w.length > 0 &&
                  (0, i.jsx)($.Z, {
                    severity: "error",
                    style: { marginTop: "2px", marginBottom: "12px" },
                    children: w,
                  }),
                O.length > 0 &&
                  (0, i.jsx)($.Z, {
                    severity: "success",
                    style: { marginTop: "2px", marginBottom: "12px" },
                    children: O,
                  }),
                C &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(W.Z, {
                        exampleType: B,
                        setExampleType: (e) => {
                          s || F(e);
                        },
                        disabled: s,
                        readOnly: s,
                      }),
                      (0, i.jsx)(K.Z, {
                        children: (0, i.jsx)(o.Suspense, {
                          fallback: (0, i.jsx)(G.Z, {
                            style: { paddingBottom: "16px" },
                          }),
                          children: (0, i.jsx)("div", {
                            className: "jsx-78deb52573c15da2 component",
                            children: (0, i.jsx)(U.M5, {
                              children: (0, i.jsx)(H.Z, {
                                taskType: C.type,
                                taskProps: C,
                                taskRef: v,
                                isTaxonomyDisplay: !0,
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                (0, i.jsx)(l(), {
                  id: "78deb52573c15da2",
                  children:
                    ".component{height:540px}.component,.component .task{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:0;min-width:0;width:100%;overflow:auto}.task__splitpane{position:relative;overflow:auto}",
                }),
                re &&
                  (0, i.jsx)("input", {
                    value: M,
                    placeholder: Q.Q,
                    style: {
                      opacity: 0.75,
                      marginTop: 12,
                      textAlign: "center",
                      border: 0,
                      fontSize: "14px",
                      width: "100%",
                    },
                    onFocus: (e) => (e.target.placeholder = ""),
                    onBlur: (e) => (e.target.placeholder = Q.Q),
                    onChange: (e) => {
                      e.preventDefault(), z(e.target.value);
                    },
                    className: "jsx-78deb52573c15da2",
                  }),
                P &&
                  !re &&
                  (0, i.jsx)("div", {
                    style: {
                      marginTop: 12,
                      textAlign: "center",
                      background: "white",
                      border: 0,
                      fontSize: "14px",
                      width: "100%",
                    },
                    className: "jsx-78deb52573c15da2",
                    children: P,
                  }),
              ],
            }),
            re
              ? (0, i.jsx)(k.kX, {
                  children: (0, i.jsx)(_.zx, {
                    onClick: () => se(),
                    disabled: g || !re,
                    type: "primary",
                    children: "Update",
                  }),
                })
              : (0, i.jsx)(i.Fragment, {}),
          ],
        });
      };
      function ae(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function se(e, t, n) {
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
      function le(e) {
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
              se(e, t, n[t]);
            });
        }
        return e;
      }
      const ce = ({
          taskId: e,
          isGoodExample: t,
          location: n,
          index: r,
          caption: a,
          readOnly: s,
          onDelete: l,
          hasOpenedExample: c,
          projectTemplateId: d,
          onUpdate: p,
        }) => {
          const h = de(),
            m = (0, u.ui)(),
            { 0: f, 1: g } = (0, o.useState)(!1),
            { 0: y, 1: b } = (0, o.useState)(null),
            { isLoading: v, data: j } = (0, X.Z)(e, s, d);
          if (v) return (0, i.jsx)("div", { children: "Loading..." });
          const w = t ? "green" : "red",
            { attachmentType: k, attachment: S } = ((e) => {
              if (!e) return { attachmentType: null, attachment: null };
              let t, n;
              const i = e.type;
              return (
                i === F.TaskType.TextCollection
                  ? ((t = e.params.attachments[0].type),
                    (n = e.params.attachments[0].content))
                  : i === F.TaskType.NamedEntityRecognition
                  ? ((t = "text"), (n = e.params.text))
                  : i === F.TaskType.DocumentTranscription
                  ? ((t = "image"), (n = e.params.attachments[0]))
                  : ((t = e.params.attachment_type), (n = e.params.attachment)),
                { attachmentType: t, attachment: n }
              );
            })(j);
          return (0, i.jsxs)("div", {
            className: h.label,
            children: [
              f &&
                (0, i.jsx)(re, {
                  modalOpen: f,
                  lastSelection: y,
                  setModalOpen: (e) => g(e),
                  taskId: e,
                  location: n,
                  taskInfo: le({}, j, { goodExample: t, caption: a }),
                  readOnly: s,
                  hasOpenedExample: c,
                  projectTemplateId: d,
                  handleUpdateExample: p,
                }),
              (0, i.jsx)("div", {
                children: (0, i.jsxs)("div", {
                  onClick: (function () {
                    var e,
                      t =
                        ((e = function* (e) {
                          e.preventDefault(), b(m.selection), g(!0);
                        }),
                        function () {
                          var t = this,
                            n = arguments;
                          return new Promise(function (i, o) {
                            var r = e.apply(t, n);
                            function a(e) {
                              ae(r, i, o, a, s, "next", e);
                            }
                            function s(e) {
                              ae(r, i, o, a, s, "throw", e);
                            }
                            a(void 0);
                          });
                        });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                  children: [
                    (0, i.jsx)("div", {
                      children: ((e) => {
                        const t = !s && (0, i.jsx)(Z, { onClick: () => l() });
                        let n = null;
                        return (
                          "pdf" === k
                            ? (n = (0, i.jsx)(x.G, {
                                icon: ["far", "file-pdf"],
                              }))
                            : "image" === k
                            ? (n = (0, i.jsx)(x.G, {
                                icon: ["far", "file-image"],
                              }))
                            : "audio" === k
                            ? (n = (0, i.jsx)(x.G, {
                                icon: ["far", "file-audio"],
                              }))
                            : "website" === k
                            ? (n = (0, i.jsx)(x.G, { icon: ["far", "globe"] }))
                            : "text" === k
                            ? (n = (0, i.jsx)(x.G, {
                                icon: ["far", "file-alt"],
                              }))
                            : "video" === k &&
                              (n = (0, i.jsx)(x.G, { icon: ["far", "video"] })),
                          (0, i.jsxs)("div", {
                            style: {
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            },
                            children: [
                              n,
                              " ",
                              (0, i.jsxs)("span", {
                                style: { padding: "4px" },
                                children: ["Example ", e],
                              }),
                              " ",
                              t,
                            ],
                          })
                        );
                      })(r + 1),
                    }),
                    (0, i.jsx)("div", {
                      className: h.preview,
                      style: { border: `2px solid ${w}` },
                      children:
                        ((O = S),
                        (T = k),
                        O && T
                          ? "image" === T || "unprocessed" === T
                            ? (0, i.jsx)("img", {
                                className: h.img,
                                src: O,
                                crossOrigin: "anonymous",
                              })
                            : "text" === T
                            ? (0, i.jsx)("div", {
                                className: h.text,
                                children: O,
                              })
                            : "pdf" === T
                            ? (0, i.jsx)("object", {
                                className: h.pdf,
                                data: O,
                              })
                            : "audio" === T || "transcription_audio" === T
                            ? (0, i.jsx)("audio", {
                                className: h.audio,
                                src: O,
                                controls: !0,
                              })
                            : "website" === T
                            ? (0, i.jsx)("div", {
                                className: h.website,
                                children: O,
                              })
                            : "video" === T
                            ? (0, i.jsx)("video", {
                                className: h.video,
                                src: O,
                              })
                            : null
                          : (0, i.jsx)("div", {
                              className: h.text,
                              children: "Error loading example.",
                            })),
                    }),
                  ],
                }),
              }),
            ],
          });
          var O, T;
        },
        de = (0, r.ZL)({
          label: { "&:hover $button": { opacity: 1 }, position: "relative" },
          button: {
            opacity: "0",
            top: "-6px",
            right: "-6px",
            position: "absolute",
            zIndex: 1,
            color: "gray",
          },
          preview: {
            width: "120px",
            height: "120px",
            position: "relative",
            overflow: "hidden",
          },
          img: { objectFit: "cover", width: "120px", height: "120px" },
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
        }),
        pe = (0, k.ZL)({
          loadingIconContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          container: {
            scrollbarWidth: "none",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: b.ZP.spacing(3),
            borderRadius: "8px",
            marginTop: "8px",
            overflowX: "auto",
            overflowY: "hidden",
            padding: "4px",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
          },
          example: {
            border: "1px dashed #CCCCCC",
            borderRadius: "4px",
            height: "64px",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "64px",
          },
          descriptionText: { opacity: 0.5 },
          addMoreBtn: { color: b.ZP.colors.periwinkle100 },
        });
      var ue = ({
        examples: e,
        element: t,
        location: n,
        setLocation: o,
        readOnly: r,
        handleDeleteExample: a,
        setExampleModalOpen: s,
        setExampleSelectionGridOpen: l,
        hasOpenedExample: c,
        projectTemplateId: d,
        isMigration: p,
      }) => {
        const h = pe(),
          m = (0, u.ui)();
        return (0, i.jsx)("div", {
          children: (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: h.descriptionText,
                children:
                  "Green border indicates well annotated example and red border indicates poorly annotated example",
              }),
              (0, i.jsx)("div", {
                className: h.container,
                children: e.map((s, l) =>
                  (0, i.jsx)(
                    "div",
                    {
                      onClick: () => {
                        o({ examples: e, path: u.F3.findPath(m, t) });
                      },
                      children: (0, i.jsx)(ce, {
                        taskId: s.taskId,
                        isGoodExample: s.isGoodExample,
                        location: n,
                        onDelete: () => a(s.taskId),
                        readOnly: r,
                        index: l,
                        caption: s.caption,
                        hasOpenedExample: c,
                        projectTemplateId: d,
                        isMigration: p,
                      }),
                    },
                    l
                  )
                ),
              }),
              0 === e.length &&
                !r &&
                (0, i.jsx)("div", {
                  className: h.example,
                  children: (0, i.jsx)("a", {
                    onClick: () => {
                      o({ examples: e, path: u.F3.findPath(m, t) }),
                        l ? l(!0) : s(!0);
                    },
                    children: "+ Add examples",
                  }),
                }),
              e.length > 0 &&
                !r &&
                (0, i.jsx)("a", {
                  onClick: () => {
                    o({ examples: e, path: u.F3.findPath(m, t) }),
                      l ? l(!0) : s(!0);
                  },
                  className: h.addMoreBtn,
                  children: "Add more examples",
                }),
            ],
          }),
        });
      };
      function he(e, t, n) {
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
      const me = ({
          attributes: e,
          children: t,
          element: n,
          readOnly: r,
          location: a,
          setLocation: s,
          setExampleModalOpen: l,
          setExampleSelectionGridOpen: c,
          hasOpenedExample: p,
          projectTemplateId: h,
          isMigration: m,
        }) => {
          const x = xe(),
            f = (0, u.ui)(),
            { labelName: g, examples: y } = n,
            { 0: b, 1: v } = (0, o.useState)(y.length < 10),
            { 0: j, 1: w } = (0, o.useState)(g);
          return (0, i.jsxs)(
            "div",
            (function (e) {
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
                    he(e, t, n[t]);
                  });
              }
              return e;
            })({}, e, {
              contentEditable: !1,
              className: x.labelBlock,
              children: [
                (0, i.jsxs)("div", {
                  className: x.labelHeader,
                  children: [
                    (0, i.jsx)("div", {
                      className: x.labelNameContainer,
                      children: (0, i.jsx)("input", {
                        className: x.labelName,
                        value: j,
                        disabled: r,
                        onChange: (e) => {
                          e.preventDefault(), w(e.target.value);
                        },
                        onBlur: (e) => {
                          e.preventDefault();
                          const t = u.F3.findPath(f, n);
                          d.YR.setNodes(f, { labelName: j }, { at: t });
                        },
                      }),
                    }),
                    (0, i.jsxs)("button", {
                      className: x.toggleButton,
                      onClick: () => {
                        s({ examples: y, path: u.F3.findPath(f, n) }), v(!b);
                      },
                      children: [
                        b ? "Hide" : "Show",
                        " examples (",
                        y.length,
                        ")",
                      ],
                    }),
                  ],
                }),
                y &&
                  b &&
                  (0, i.jsx)(ue, {
                    readOnly: r,
                    examples: y,
                    element: n,
                    location: a,
                    setLocation: s,
                    setExampleModalOpen: l,
                    setExampleSelectionGridOpen: c,
                    handleDeleteExample: (e) => {
                      if (r) return;
                      const t = u.F3.findPath(f, n),
                        i = y.filter((t) => t.taskId !== e);
                      d.YR.setNodes(f, { examples: i }, { at: t });
                    },
                    hasOpenedExample: p,
                    projectTemplateId: h,
                    isMigration: m,
                  }),
                (0, i.jsx)("div", { children: t }),
              ],
            })
          );
        },
        xe = (0, r.ZL)({
          labelBlock: {
            background: "#f2f2f2",
            borderRadius: 8,
            margin: "16px 12px",
            padding: 16,
          },
          labelHeader: { display: "flex" },
          labelNameContainer: { width: "40%", flexShrink: 0, fontWeight: 500 },
          labelName: {
            border: 0,
            background: "#f2f2f2",
            fontWeight: 500,
            fontSize: "16px",
            width: "100%",
          },
          toggleButton: {
            color: b.ZP.colors.periwinkle100,
            outline: "none",
            position: "relative",
            marginLeft: "auto",
            border: "none",
            padding: "0 8px",
            height: 20,
            flexShrink: 0,
            borderRadius: 50,
            background: "transparent",
            fontSize: 12,
            fontWeight: 500,
            cursor: "pointer",
            transition: "background 120ms ease-out",
            "&:hover": { background: "white" },
            "&:disabled": { opacity: 0.5 },
          },
        });
      function fe(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function ge(e, t, n) {
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
      function ye(e) {
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
              ge(e, t, n[t]);
            });
        }
        return e;
      }
      const be = ["numbered-list", "bulleted-list"],
        ve = ["label-section", "iframe"],
        je = (e) => {
          const { isVoid: t } = e;
          return (e.isVoid = (e) => !!ve.includes(e.type) || t(e)), e;
        },
        we = (e) => {
          const { attributes: t, children: n, element: o } = e;
          switch (o.type) {
            case "block-quote":
              return (0, i.jsx)(
                "blockquote",
                ye({}, t, {
                  style: {
                    borderLeft: "2px solid #ddd",
                    marginLeft: 0,
                    marginRight: 0,
                    paddingLeft: "10px",
                    color: "#666",
                    fontStyle: "italic",
                  },
                  children: n,
                })
              );
            case "bulleted-list":
              return (0, i.jsx)("ul", ye({}, t, { children: n }));
            case "heading-1":
              return n &&
                n.props &&
                n.props.node &&
                n.props.node.children.length > 0
                ? (0, i.jsx)(
                    "section",
                    ye(
                      {
                        id:
                          "#" +
                          n.props.node.children[0].text.split(" ").join("_") +
                          "-h1",
                      },
                      t,
                      { children: (0, i.jsx)("h1", { children: n }) }
                    )
                  )
                : (0, i.jsx)("h1", ye({}, t, { children: n }));
            case "heading-2":
              return (0, i.jsx)("h2", ye({}, t, { children: n }));
            case "heading-3":
              return (0, i.jsx)("h3", ye({}, t, { children: n }));
            case "heading-4":
              return (0, i.jsx)("h4", ye({}, t, { children: n }));
            case "list-item":
              return (0, i.jsx)("li", ye({}, t, { children: n }));
            case "numbered-list":
              return (0, i.jsx)("ol", ye({}, t, { children: n }));
            case "label-section":
              return (0, i.jsx)(me, ye({}, e, { children: n }));
            case "image":
              return (0, i.jsx)(B, ye({}, e, { children: n }));
            case "iframe":
              return (0, i.jsx)(D, ye({}, e, { children: n }));
            default:
              return (0, i.jsx)("p", ye({}, t, { children: n }));
          }
        },
        ke = ({ attributes: e, children: t, leaf: n }) => (
          n.bold && (t = (0, i.jsx)("strong", { children: t })),
          n.code && (t = (0, i.jsx)("code", { children: t })),
          n.italic && (t = (0, i.jsx)("em", { children: t })),
          n.underline && (t = (0, i.jsx)("u", { children: t })),
          (0, i.jsx)("span", ye({}, e, { children: t }))
        ),
        Se = (e, t) => {
          Oe(e, t) ? d.ML.removeMark(e, t) : d.ML.addMark(e, t, !0);
        },
        Oe = (e, t) => {
          const n = d.ML.marks(e);
          return !!n && !0 === n[t];
        },
        Te = (e, t) => {
          const [n] = d.ML.nodes(e, {
            match: (e) =>
              !d.ML.isEditor(e) && d.W_.isElement(e) && e.type === t,
          });
          return !!n;
        },
        Ce = (e, t) => {
          const n = Te(e, t),
            i = be.includes(t);
          d.YR.unwrapNodes(e, {
            match: (e) =>
              be.includes(!d.ML.isEditor(e) && d.W_.isElement(e) && e.type),
            split: !0,
          });
          const o = { type: n ? "paragraph" : i ? "list-item" : t };
          if ((d.YR.setNodes(e, o), !n && i)) {
            const n = { type: t, children: [] };
            d.YR.wrapNodes(e, n);
          }
        };
      var Ie = ({
          blocks: e,
          setBlocks: t,
          project: n,
          uploadedAssets: r,
          taxonomy: s,
          readOnly: h,
          hasSensitiveContent: m = !1,
          handleSave: x,
          isDirty: f = !1,
          isEdgeCase: g = !1,
          setInfoMsg: y,
          updatedAt: b,
          hasOpenedExample: v,
          projectTemplateId: j,
        }) => {
          var w;
          const { 0: k, 1: S } = (0, o.useState)(null),
            { 0: O, 1: T } = (0, o.useState)(null),
            { 0: C, 1: I } = (0, o.useState)(!1),
            N = (0, o.useMemo)(() => je((0, p.VC)((0, u.BU)((0, d.Jh)()))), []),
            E = (0, o.useCallback)(
              (e) =>
                (0, i.jsx)(
                  we,
                  ye({}, e, {
                    setInfoMsg: y,
                    readOnly: h,
                    location: k,
                    setLocation: S,
                    setExampleModalOpen: I,
                    hasOpenedExample: v,
                    projectTemplateId: j,
                  })
                ),
              [h, k]
            ),
            Z = (function () {
              var e,
                t =
                  ((e = function* () {
                    const { isWorker: e } =
                      yield c.Z.selfserve.adultContentToggle({
                        blockAdultContent: !0,
                      });
                    e && (window.location.href = "/");
                  }),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (i, o) {
                      var r = e.apply(t, n);
                      function a(e) {
                        fe(r, i, o, a, s, "next", e);
                      }
                      function s(e) {
                        fe(r, i, o, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            R = (0, o.useCallback)((e) => (0, i.jsx)(ke, ye({}, e)), []);
          return (0, i.jsxs)("div", {
            className: "jsx-d9c381bd5a1ff838 slate",
            children: [
              !!(null === n ||
              void 0 === n ||
              null === (w = n.taxonomy) ||
              void 0 === w
                ? void 0
                : w.param_chunks) &&
                (0, i.jsx)("h1", {
                  style: { color: "blue" },
                  className: "jsx-d9c381bd5a1ff838",
                  children:
                    "This project contains different types of tasks. Please refer to the relevant instruction sections for the questions and annotations you are given.",
                }),
              g &&
                (0, i.jsx)("h1", {
                  style: { color: "orange" },
                  className: "jsx-d9c381bd5a1ff838",
                  children:
                    'This is an edge case detection task. The primary goal is to determine whether the following instructions are detailed and specific enough to complete the task WITHOUT AMBIGUITY. Please provide your feedback in the "edge case feedback" modal at the bottom of the task page.',
                }),
              m &&
                (0, i.jsxs)("h1", {
                  style: { color: "red" },
                  className: "jsx-d9c381bd5a1ff838",
                  children: [
                    "WARNING: this project may contain sensitive content. If you're not comfortable with this, please ",
                    (0, i.jsx)("a", {
                      onClick: Z,
                      className: "jsx-d9c381bd5a1ff838",
                      children: "exit now",
                    }),
                    " to work on other projects.",
                  ],
                }),
              !h &&
                (0, i.jsx)(a.NL, {
                  when: f,
                  message:
                    "Are you sure you want to leave? Your changes have not been saved.",
                }),
              (0, i.jsxs)(u.mH, {
                editor: N,
                value: e,
                onChange: (e) => t(e),
                children: [
                  C &&
                    (0, i.jsx)(Q.Z, {
                      modalOpen: C,
                      setModalOpen: (e) => I(e),
                      project: n,
                      uploadedAssets: r,
                      taxonomy: s,
                      location: k,
                      lastSelection: N.selection,
                      handleSave: f ? x : void 0,
                    }),
                  !h &&
                    (0, i.jsx)(P, {
                      isMarkActive: Oe,
                      isBlockActive: Te,
                      toggleMark: Se,
                      toggleBlock: Ce,
                      lastSelection: O,
                      handleSave: x,
                      shouldShowLabeledExamples: s && r,
                      updatedAt: b,
                    }),
                  (0, i.jsx)("div", {
                    style: { overflowY: "auto", overflowX: "hidden" },
                    className: "jsx-d9c381bd5a1ff838",
                    children: (0, i.jsx)(u.CX, {
                      renderElement: E,
                      renderLeaf: R,
                      placeholder: "Type here...",
                      spellCheck: !0,
                      autoFocus: !0,
                      readOnly: h,
                      onBlur: () => {
                        T(N.selection);
                      },
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(l(), {
                id: "d9c381bd5a1ff838",
                children:
                  ".slate section{-webkit-border-top-right-radius:0px!important;-moz-border-radius-topright:0px!important;border-top-right-radius:0px!important;width:100%;height:100%;-webkit-border-bottom-right-radius:0px!important;-moz-border-radius-bottomright:0px!important;border-bottom-right-radius:0px!important;border:0px!important;border-left:0;border-top:0;margin-top:0px!important}.slate{color:black}",
              }),
            ],
          });
        },
        Ne = n(879815),
        Ee = n(608139),
        Pe = n.n(Ee),
        Ze = n(684570),
        Re = n(942662),
        De = n(554211),
        Le = n(650735),
        Ae = n(59524);
      function Me(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
      function ze(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var r = e.apply(t, n);
            function a(e) {
              Me(r, i, o, a, s, "next", e);
            }
            function s(e) {
              Me(r, i, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function Be(e, t, n) {
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
      const Fe = new V.QueryClient({
          defaultOptions: { queries: { refetchOnWindowFocus: !1 } },
        }),
        Ge = (0, r.ZL)({
          buttons: {
            marginTop: "10px",
            flexShrink: 0,
            padding: 5,
            display: "flex",
            gap: 10,
          },
          outerContainer: {
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          },
          documentContainer: { overflow: "auto", marginLeft: 24 },
          documentWrapper: {
            maxWidth: "68%",
            height: "75vh",
            borderRadius: 12,
            marginTop: 24,
            border: "1px solid #E6E6E6",
            textAlign: "left",
            paddingTop: 32,
            paddingLeft: 32,
            paddingRight: 32,
            overflow: "auto",
            background: "white",
          },
          instructionWrapper: {
            width: "1000px !important",
            overflow: "auto",
            padding: 32,
            background: "white",
          },
          banner: {
            textAlign: "center",
            width: "100%",
            height: "50px",
            background: "green",
            color: "white",
            fontSize: "16px",
            padding: "15px",
            fontWeight: 600,
          },
        });
      var We = ({
        user: e,
        project: t,
        instructionObjectId: n,
        onSave: r,
        isEdgeCase: s,
        isPreviewImg: l = !1,
        startTasks: d,
        startButtonText: p,
        isReviewMode: u,
      }) => {
        const h = !!n || !t,
          m = Ge(),
          { 0: f, 1: g } = (0, o.useState)([
            { type: "heading-2", children: [{ text: "Loading..." }] },
          ]),
          { 0: v, 1: j } = (0, o.useState)(void 0),
          { 0: w, 1: k } = (0, o.useState)(!0),
          { 0: S, 1: O } = (0, o.useState)(!1),
          { 0: T, 1: C } = (0, o.useState)(null),
          { 0: I, 1: N } = (0, o.useState)(""),
          { 0: E, 1: P } = (0, o.useState)(""),
          { 0: Z, 1: R } = (0, o.useState)(!1),
          { 0: D, 1: L } = (0, o.useState)(!1),
          { 0: A, 1: M } = (0, o.useState)(null),
          { 0: z, 1: B } = (0, o.useState)(void 0),
          { 0: G, 1: W } = (0, o.useState)(void 0),
          H = (0, o.useRef)(null),
          U = d && !!p,
          Y =
            (null === e || void 0 === e ? void 0 : e.spoofed) ||
            ((null === e || void 0 === e ? void 0 : e.email) &&
              (null === e || void 0 === e
                ? void 0
                : e.email.endsWith("scale.com"))),
          { 0: _, 1: q } = (0, o.useState)(!1),
          { 0: Q, 1: X } = (0, o.useState)(!1),
          { 0: K, 1: J } = (0, o.useState)(!1),
          ee = (0, De.ZP)("use-rapid-instruction-limits", {}, !1),
          { 0: te, 1: ne } = (0, o.useState)(0),
          { 0: ie, 1: oe } = (0, o.useState)(0),
          { 0: re, 1: ae } = (0, o.useState)(0),
          { 0: se, 1: le } = (0, o.useState)([]),
          { 0: ce, 1: de } = (0, o.useState)([]),
          { 0: pe, 1: ue } = (0, o.useState)(0),
          he = (0, o.useMemo)(() => !ee || (_ && Q && K), [ee, _, Q, K]),
          { 0: me, 1: xe } = (0, o.useState)(null),
          fe = (0, a.k6)();
        (0, o.useEffect)(() => {
          ne(new Date().getTime());
        }, [ne]),
          (0, o.useEffect)(() => {
            if (!Q && U) {
              let e = 20;
              const t = setInterval(function () {
                0 === e && (clearInterval(t), X(!0)), (e -= 1);
              }, 1e3);
              return () => {
                clearInterval(t);
              };
            }
          }, [U, Q, n]),
          (0, o.useEffect)(() => {
            function e() {
              return (e = ze(function* () {
                let e;
                if ((k(!0), n)) {
                  try {
                    if (
                      ((e = yield c.Z.selfserve.fetchProjectInstructions({
                        instructionObjectId: n,
                        showChangeDescriptions: U,
                      })),
                      e.instructions)
                    ) {
                      if (U) {
                        const e =
                          yield c.Z.selfserve.fetchUserHasSeenInstructions({
                            instructionObjectId: n,
                          });
                        e && (X(e), q(!0), J(!0));
                      }
                      const t =
                        u && e.reviewInstructions
                          ? e.reviewInstructions
                          : e.instructions;
                      g(t), j(t), L(e.hasSensitiveContent), ye();
                      let i = 0,
                        o = 0;
                      e.instructions.map(
                        (e) =>
                          y().has(e, "examples") &&
                          e.examples.map((e) => (e.isGoodExample ? i++ : o++))
                      ),
                        oe(i),
                        ae(o),
                        i + o === 0 && J(!0),
                        k(!1),
                        e.updatedAt && B(e.updatedAt);
                    } else
                      g([
                        {
                          type: "heading-2",
                          children: [
                            {
                              text: `ERROR: no instructions exist for ID ${n}`,
                            },
                          ],
                        },
                      ]),
                        k(!1);
                  } catch (a) {
                    N("failed to find the instructions"), k(!1);
                  }
                  return void ue(pe + 1);
                }
                if (!t)
                  return void alert(
                    "ERROR: component must be provided ID of either a Project or InstructionObject"
                  );
                try {
                  e = yield c.Z.selfserve.fetchProjectInstructions({
                    project: t.id,
                  });
                } catch (a) {
                  N("failed to find the instructions"), k(!1);
                }
                const { taxonomy: i } =
                  yield c.Z.selfserve.fetchProjectTaxonomy({ project: t.id });
                xe(i),
                  e.instructions
                    ? (g(e.instructions),
                      j(e.instructions),
                      L(e.hasSensitiveContent),
                      e.updatedAt && B(e.updatedAt))
                    : g((0, Ne.y$)(i, t.name, t.type)),
                  k(!1);
                const o = (yield c.Z.selfserve.fetchProjectAssets({
                    project: t.id,
                  })).uploadedAssets,
                  r = o.filter((e) => !!e.usedForLabeledExample);
                C(r.length > 0 ? r : o),
                  o.length > 0 &&
                    t.type === F.TaskType.DocumentTranscription &&
                    c.Z.selfserve.fetchAssetPages({ assetId: o[0]._id }),
                  ue(pe + 1);
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, [t, n]),
          (0, o.useEffect)(() => {
            function e() {
              return (e = ze(function* () {
                if (t) {
                  const {
                    feedback: e,
                    score: n,
                    instructionFeedbackSummary: i,
                  } = yield c.Z.selfserve.fetchInstructionPageFeedback({
                    project: t.id,
                  });
                  e.length > 0 && M({ feedback: e, score: n }),
                    i && i.length > 0 && W(i);
                }
              })).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, [t]);
        const ge = (function () {
            var e = ze(function* (e, n = !1, i) {
              O(!0);
              try {
                const o = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      i = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols &&
                      (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(
                            n,
                            e
                          ).enumerable;
                        })
                      )),
                      i.forEach(function (t) {
                        Be(e, t, n[t]);
                      });
                  }
                  return e;
                })(
                  {
                    project: t.id,
                    instructions: f,
                    updateTasks: e,
                    updateLabelers: n,
                  },
                  i && { changeDescription: i }
                );
                yield c.Z.selfserve.setProjectInstructions(o),
                  j(f),
                  B(void 0),
                  r && r(),
                  (0, Le.bd)(t) &&
                    (yield c.Z.studio.trackEvent({
                      event: "Studio Instructions Saved",
                    })),
                  R(!0),
                  setTimeout(() => R(!1), 5e3);
              } catch (o) {
                N("failed to save");
              }
              O(!1);
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ye = y().debounce(() => {
            if (_) return;
            const e = H.current;
            if (!e || e.scrollHeight < 1e3) q(!0);
            else if (U && !he) {
              e.scrollHeight - e.scrollTop - 500 <= e.clientHeight && q(!0);
            }
          }, 10),
          be = !y().isEqual(f, v),
          ve = G || (null === A || void 0 === A ? void 0 : A.feedback) || [];
        return (0, i.jsx)(V.QueryClientProvider, {
          client: Fe,
          children: (0, i.jsxs)("div", {
            className: m.outerContainer,
            children: [
              U &&
                (0, i.jsx)("div", {
                  className: m.banner,
                  children:
                    "Read all instructions and view examples to continue!",
                }),
              (0, i.jsx)("div", {
                className: m.documentContainer,
                ref: H,
                onScroll: ye,
                children: (0, i.jsxs)("div", {
                  style: { display: l ? "block" : "flex" },
                  children: [
                    (0, i.jsxs)("div", {
                      className: h ? m.instructionWrapper : m.documentWrapper,
                      children: [
                        E &&
                          (0, i.jsx)($.Z, {
                            severity: "warning",
                            style: { marginTop: "6px", marginBottom: "6px" },
                            children: E,
                          }),
                        I.length > 0 &&
                          (0, i.jsx)($.Z, {
                            severity: "error",
                            style: { marginTop: "6px", marginBottom: "6px" },
                            children: I,
                          }),
                        Z &&
                          (0, i.jsxs)($.Z, {
                            severity: "success",
                            style: { marginTop: "6px", marginBottom: "6px" },
                            children: [
                              "Successfully saved! If applicable, please",
                              " ",
                              (0, i.jsx)("a", {
                                onClick: () => {
                                  fe.push(
                                    `/${(0, Ze.MT)(
                                      fe.location.pathname
                                    )}/quality?` +
                                      Pe().stringify({
                                        project: t.id,
                                        spoof: (
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.spoofed
                                        )
                                          ? e._id
                                          : void 0,
                                      })
                                  );
                                },
                                children: "update your quality tasks",
                              }),
                              "!",
                            ],
                          }),
                        (0, i.jsx)(
                          Ie,
                          {
                            readOnly: h,
                            blocks: f,
                            setBlocks: g,
                            project: t,
                            taxonomy: me,
                            uploadedAssets: T,
                            hasSensitiveContent: D,
                            isDirty: be,
                            handleSave:
                              S || (!be && !(0, Le.bd)(t)) || w ? void 0 : ge,
                            isEdgeCase: s,
                            setInfoMsg: P,
                            updatedAt: z,
                            hasOpenedExample: (e, t) => {
                              if (U) {
                                const n = t ? se : ce;
                                (t ? le : de)([...n, e]);
                                const i =
                                    n.length + 1 >= Math.min(3, t ? ie : re),
                                  o =
                                    (t ? ce : se).length >=
                                    Math.min(3, t ? re : ie);
                                i && o && J(!0);
                              }
                            },
                          },
                          pe
                        ),
                      ],
                    }),
                    !h &&
                      (0, i.jsx)("div", {
                        style: {
                          background: "white",
                          borderRadius: 12,
                          width: "21%",
                          marginLeft: 12,
                          paddingTop: 32,
                          paddingLeft: 32,
                          paddingRight: 32,
                          marginTop: 24,
                        },
                        children:
                          A && A.feedback
                            ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                  (0, i.jsx)("div", {
                                    style: { color: b.ZP.colors.periwinkle100 },
                                    children:
                                      "Feedback from recent calibration batch",
                                  }),
                                  A.score > -1 &&
                                    (0, i.jsxs)("div", {
                                      style: { marginTop: 12 },
                                      children: [
                                        (0, i.jsx)("div", {
                                          style: {
                                            fontWeight: "bold",
                                            marginBottom: 8,
                                          },
                                          children:
                                            "Overall Calibration Score:",
                                        }),
                                        Array.from(
                                          Array(Math.round((5 * A.score) / 100))
                                        ).map((e) =>
                                          (0, i.jsx)(
                                            x.G,
                                            { icon: "star", color: "gold" },
                                            e
                                          )
                                        ),
                                        Array.from(
                                          Array(
                                            5 - Math.round((5 * A.score) / 100)
                                          )
                                        ).map((e) =>
                                          (0, i.jsx)(
                                            x.G,
                                            { icon: "star", color: "gray" },
                                            e
                                          )
                                        ),
                                        (0, i.jsxs)("span", {
                                          style: {
                                            marginLeft: 12,
                                            fontWeight: "bold",
                                          },
                                          children: [Math.round(A.score), "%"],
                                        }),
                                      ],
                                    }),
                                  (0, i.jsx)("div", {
                                    style: {
                                      marginTop: 16,
                                      fontWeight: "bold",
                                    },
                                    children: "Feedback:",
                                  }),
                                  (0, i.jsx)("div", {
                                    style: {
                                      height: "60vh",
                                      overflowY: "scroll",
                                    },
                                    children: ve.map((e) =>
                                      (0, i.jsx)(
                                        "li",
                                        {
                                          style: {
                                            marginLeft: 16,
                                            paddingBottom: 4,
                                            lineHeight: 1.5,
                                          },
                                          children: e,
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                ],
                              })
                            : (0, i.jsxs)("p", {
                                style: { opacity: 0.75 },
                                children: [
                                  (0, i.jsx)("strong", {
                                    children:
                                      "Write guidelines for completing your tasks.",
                                  }),
                                  " ",
                                  (0, i.jsx)("br", {}),
                                  "To host the instructions for collaborative editing, you can use this\xa0",
                                  (0, i.jsx)("a", {
                                    href: "https://docs.google.com/document/d/1fjgRSni7PNzMCSKw7NqVfGAp29phcf3NzrAojUhpVUY/edit",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "template",
                                  }),
                                  " ",
                                  "and then embed it as an iframe.",
                                ],
                              }),
                      }),
                  ],
                }),
              }),
              U &&
                (0, i.jsxs)("div", {
                  className: m.buttons,
                  children: [
                    (0, i.jsx)(Re.Z, {
                      disabled: !he,
                      size: "lg",
                      primary: !0,
                      arrows: !0,
                      onClick: () => {
                        function e() {
                          return (e = ze(function* () {
                            if (n) {
                              const e = Math.round(
                                (new Date().getTime() - te) / 1e3
                              );
                              yield c.Z.selfserve.setUserHasSeenInstructions({
                                instructionObjectId: n,
                                timeSpentSecs: e,
                                usingInstructionRestrictions: ee,
                              });
                              const t = {
                                isNewInstruction: !1,
                                isOnboardingFlow: !1,
                                isDuringTasking: !1,
                                openTabButtonClicked: !1,
                                startTime: te,
                                closeTime: new Date().getTime(),
                              };
                              yield (0, Ae.Kz)(
                                Ae.ju.InstructionRenderRecord,
                                t
                              );
                            }
                          })).apply(this, arguments);
                        }
                        d &&
                          (d(),
                          (function () {
                            e.apply(this, arguments);
                          })());
                      },
                      children: he
                        ? p
                        : Q
                        ? _
                          ? se.length < Math.min(ie, 3)
                            ? "View more well-labeled examples"
                            : "View more poorly labeled examples"
                          : "Read the entire page"
                        : "Take more time to read the instructions",
                    }),
                    Y &&
                      (0, i.jsx)(Re.Z, {
                        size: "lg",
                        arrows: !0,
                        onClick: d,
                        children: "Force Start (corp user)",
                      }),
                  ],
                }),
            ],
          }),
        });
      };
    },
    569465: function (e, t, n) {
      var i = n(824246),
        o = n(827378),
        r = n(68649),
        a = n(792739),
        s = n(997653);
      const l = ({
          errorId: e,
          errorMessage: t,
          _errorInfo: n,
          componentDisplayName: o,
          hint: r,
        }) => {
          const s = c();
          return (0, i.jsxs)("div", {
            className: s.errorContainer,
            children: [
              (0, i.jsx)("div", {
                className: s.errorIcon,
                children: (0, i.jsx)(a.G, {
                  className: s.icon,
                  icon: "exclamation-triangle",
                }),
              }),
              (0, i.jsxs)(
                "div",
                {
                  className: s.errorContent,
                  children: [
                    (0, i.jsx)("h2", {
                      children: "An unexpected error has occurred",
                    }),
                    r
                      ? (0, i.jsx)("div", { children: r })
                      : (0, i.jsx)("div", {
                          children:
                            "Hint: either the task's taxonomy is malformed or the asset has failed to load.",
                        }),
                    e && (0, i.jsxs)("div", { children: ["Error ID: ", e] }),
                    t &&
                      (0, i.jsxs)("div", { children: ["Error Message: ", t] }),
                  ],
                },
                o
              ),
            ],
          });
        },
        c = (0, r.ZL)((e) => ({
          errorContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          },
          errorIcon: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            margin: e.spacing(2),
          },
          icon: { fontSize: 32, color: e.palette.warning.main },
          errorContent: {
            display: "flex",
            flexDirection: "column",
            gap: e.spacing(1),
          },
        }));
      class d extends o.Component {
        componentDidCatch(e, t) {
          const n = (0, s.dO)(e, "generic", t);
          this.setState({
            errorId: n,
            error: !0,
            errorInfo: t,
            errorMessage: e && e.message,
          });
        }
        render() {
          return this.state.error
            ? (0, i.jsx)(l, {
                errorId: this.state.errorId,
                errorMessage: this.state.errorMessage,
                _errorInfo: this.state.errorInfo,
                componentDisplayName: "unknown",
                hint: this.props.hint,
              })
            : this.props.children;
        }
        constructor(...e) {
          super(...e), (this.state = {});
        }
      }
      t.Z = d;
    },
    71764: function (e, t, n) {
      var i = n(824246),
        o = n(679892),
        r = n.n(o),
        a = (n(827378), n(802638)),
        s = n(542280),
        l = n(776136);
      t.Z = ({
        isOpen: e,
        canSubmit: t = !0,
        message: n,
        onSubmit: o,
        onRequestClose: c,
        marginAmount: d,
      }) =>
        (0, i.jsxs)(a.u_, {
          maxWidth: 600,
          isOpen: e,
          onRequestClose: c,
          contentLabel: "Confirmation",
          margin: d,
          children: [
            (0, i.jsx)(a.xB, { onRequestClose: c, children: "Confirmation" }),
            (0, i.jsx)(a.fe, { children: n }),
            (0, i.jsx)(a.mz, {
              children: (0, i.jsxs)("div", {
                className: "jsx-186b16cd0a3c6117 actions",
                children: [
                  (0, i.jsx)(l.Z, {
                    secondary: !0,
                    onClick: c,
                    children: "Cancel",
                  }),
                  (0, i.jsx)(l.Z, {
                    disabled: !t,
                    onClick: o,
                    style: {
                      color: "white",
                      background: s.ZP.colors.primary1,
                      marginLeft: 12,
                    },
                    children: "Confirm",
                  }),
                ],
              }),
            }),
            (0, i.jsx)(r(), {
              id: "186b16cd0a3c6117",
              children:
                ".actions.jsx-186b16cd0a3c6117{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}",
            }),
          ],
        });
    },
    376189: function (e, t, n) {
      var i = n(827378),
        o = n(599789),
        r = n(872383);
      function a(e, t, n, i, o, r, a) {
        try {
          var s = e[r](a),
            l = s.value;
        } catch (c) {
          return void n(c);
        }
        s.done ? t(l) : Promise.resolve(l).then(i, o);
      }
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
      function l(e) {
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
              s(e, t, n[t]);
            });
        }
        return e;
      }
      t.Z = () => {
        const { 0: e, 1: t } = (0, i.useState)([]),
          { 0: n, 1: s } = (0, i.useState)(!1),
          c = (0, i.useCallback)(
            (function () {
              var e,
                n =
                  ((e = function* (e) {
                    if (!e.length) return;
                    s(!0);
                    const n = new AbortController(),
                      i = setTimeout(() => n.abort(), 5e3),
                      a = yield (0, r.V3)({
                        feature: "studio-privacy-mode-assume-image",
                      }),
                      c = yield Promise.all(
                        e.map((e) =>
                          fetch(e.content, {
                            method: "HEAD",
                            signal: n.signal,
                          }).catch((e) => {})
                        )
                      );
                    clearTimeout(i);
                    const d = e.map((e, t) => {
                      let n = o.AttachmentType.Unprocessed;
                      if (a)
                        return (
                          (n = o.AttachmentType.Image), l({}, e, { type: n })
                        );
                      const i = c[t];
                      if (!i) return l({}, e);
                      const r = ((e) => {
                        const t = {},
                          n = e.keys();
                        let i = n.next();
                        for (; i.value; )
                          (t[i.value] = e.get(i.value)), (i = n.next());
                        return t;
                      })(i.headers)["content-type"];
                      return (
                        r.match("image/*")
                          ? (n = o.AttachmentType.Image)
                          : r.match("text/*")
                          ? (n = o.AttachmentType.Text)
                          : r.match("video/*")
                          ? (n = o.AttachmentType.Video)
                          : "application/pdf" === r
                          ? (n = o.AttachmentType.PDF)
                          : r.match("audio/*") && (n = o.AttachmentType.Audio),
                        l({}, e, { type: n })
                      );
                    });
                    return t(d), s(!1), d;
                  }),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (i, o) {
                      var r = e.apply(t, n);
                      function s(e) {
                        a(r, i, o, s, l, "next", e);
                      }
                      function l(e) {
                        a(r, i, o, s, l, "throw", e);
                      }
                      s(void 0);
                    });
                  });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            []
          );
        return { attachments: e, isLoading: n, fetchUnprocessedAttachments: c };
      };
    },
  },
]);
