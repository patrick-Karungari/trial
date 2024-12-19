"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4789],
  {
    457013: function (e, t, n) {
      var o = n(824246),
        i = (n(827378), n(90104)),
        r = n.n(i),
        s = n(434981),
        a = n.n(s),
        l = n(604375),
        c = n(792739),
        d = n(257881),
        u = n(944765);
      function m(e, t, n, o, i, r, s) {
        try {
          var a = e[r](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      const p = ({ NewLabel: e, title: t }) =>
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", {
                children: (0, o.jsxs)("strong", {
                  children: ["Welcome to ", a()(t), " "],
                }),
              }),
              (0, o.jsxs)("div", {
                children: [
                  "To get started, please read through all the ",
                  (0, o.jsx)(e, {}),
                  " instructions before proceeding.",
                  " ",
                ],
              }),
            ],
          }),
        h = ({ NewLabel: e, ChangedLabel: t }) =>
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", {
                children: (0, o.jsx)("strong", {
                  children: "New instructions available",
                }),
              }),
              (0, o.jsxs)("div", {
                children: [
                  "You are about to work on a task with a ",
                  (0, o.jsx)("b", {
                    children: "different version of the instructions",
                  }),
                  " than the previous task on which you worked.",
                ],
              }),
              (0, o.jsxs)("div", {
                children: [
                  "Please carefully read through all the ",
                  (0, o.jsx)(e, {}),
                  " and ",
                  (0, o.jsx)(t, {}),
                  " instructions before proceeding.",
                ],
              }),
            ],
          }),
        g = (0, l.ZL)((e) => ({
          container: {
            background: ({ isOnboarding: t, hasVersionComparison: n }) =>
              t ? e.colors.green : n ? e.colors.blue : e.colors.gray10,
            padding: 15,
            display: "flex",
            "& > div": { color: "white" },
            "& > div:first-child": { paddingRight: 20 },
            marginBottom: 10,
            [e.breakpoints.down("sm")]: { borderRadius: 0 },
          },
          newLabel: {
            color: ({ isOnboarding: t }) =>
              t ? e.colors.green : e.colors.blue,
            borderRadius: 30,
            background: "white",
            fontSize: 10,
            fontWeight: 500,
            padding: "2px 5px",
            margin: "0 2px",
          },
        }));
      t.Z = () => {
        const {
            isOnboarding: e,
            hasVersionComparison: t,
            title: n = "",
            extraAlerts: i,
            isMobileView: s,
          } = (0, u.k)(),
          a = g({ isOnboarding: !!e, hasVersionComparison: t });
        if (!e && !t && !r()(i)) return null;
        const { hasSensitiveContent: l, isEdgeCase: x, param_chunks: f } = i,
          b = () =>
            (0, o.jsx)("span", { className: a.newLabel, children: "New" }),
          v = (function () {
            var e,
              t =
                ((e = function* () {
                  const { isWorker: e } =
                    yield d.Z.selfserve.adultContentToggle({
                      blockAdultContent: !0,
                    });
                  e && (window.location.href = "/");
                }),
                function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (o, i) {
                    var r = e.apply(t, n);
                    function s(e) {
                      m(r, o, i, s, a, "next", e);
                    }
                    function a(e) {
                      m(r, o, i, s, a, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function () {
              return t.apply(this, arguments);
            };
          })();
        return (0, o.jsxs)("div", {
          className: a.container,
          style: { borderRadius: s ? 0 : 10 },
          children: [
            (0, o.jsx)("div", {
              children: (0, o.jsx)(c.G, { icon: "flag", color: "white" }),
            }),
            (0, o.jsxs)("div", {
              children: [
                e && (0, o.jsx)(p, { NewLabel: b, title: n }),
                t &&
                  (0, o.jsx)(h, {
                    NewLabel: b,
                    ChangedLabel: () =>
                      (0, o.jsx)("span", {
                        className: a.newLabel,
                        children: "Changed",
                      }),
                  }),
                f &&
                  (0, o.jsx)("li", {
                    children:
                      "This project contains different types of tasks. Please refer to the relevant instruction sections for the questions and annotations you are given.",
                  }),
                x &&
                  (0, o.jsx)("li", {
                    children:
                      'This is an edge case detection task. The primary goal is to determine whether the following instructions are detailed and specific enough to complete the task WITHOUT AMBIGUITY. Please provide your feedback in the "edge case feedback" modal at the bottom of the task page.',
                  }),
                l &&
                  (0, o.jsxs)("li", {
                    children: [
                      "WARNING: this project may contain sensitive content. If you're not comfortable with this, please ",
                      (0, o.jsx)("a", { onClick: v, children: "exit now" }),
                      "to work on other projects.",
                    ],
                  }),
              ],
            }),
          ],
        });
      };
    },
    563924: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return te;
        },
      });
      var o = n(824246),
        i = n(827378),
        r = n(298784),
        s = n.n(r),
        a = n(604375),
        l = n(599789),
        c = n(16717),
        d = n(220453),
        u = n(85913),
        m = n(619288),
        p = n(944765);
      var h = ({ example: e }) => {
          const { samples: t, description: n } = e,
            { isMobileView: i } = (0, p.k)();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", {
                dangerouslySetInnerHTML: { __html: d.ZP.render(n || "") },
              }),
              (0, o.jsx)("div", {
                style: {
                  display: i ? "unset" : "flex",
                  overflowX: "auto",
                  alignItems: "flex-start",
                },
                children:
                  t &&
                  t.map((e, t) => (0, o.jsx)(m.Z, { index: t, sample: e }, t)),
              }),
            ],
          });
        },
        g = n(792739);
      const x = (0, a.ZL)((e) => ({
        title: { fontWeight: 600 },
        hideIcon: { color: e.colors.gray50 },
        titleContainer: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }));
      var f = ({ contentData: e }) => {
          const t = x(),
            { title: n, examples: i, description: r } = e,
            { isMobileView: s } = (0, p.k)();
          return (0, o.jsxs)("div", {
            style: { display: s ? "block" : "grid" },
            children: [
              !s &&
                (0, o.jsxs)("div", {
                  className: t.titleContainer,
                  children: [
                    (0, o.jsx)("h3", { className: t.title, children: n }),
                    e.hiddenFromCustomer &&
                      (0, o.jsx)(g.G, {
                        className: t.hideIcon,
                        icon: "eye-slash",
                      }),
                  ],
                }),
              r &&
                (0, o.jsx)(u.Z, {
                  sectionName: "description",
                  children: (0, o.jsx)("div", {
                    dangerouslySetInnerHTML: { __html: d.ZP.render(r || "") },
                  }),
                }),
              (null === i || void 0 === i ? void 0 : i.length)
                ? (0, o.jsx)(u.Z, {
                    sectionName: "examples",
                    isNew: !1,
                    children: i.map((e, t) =>
                      (0, o.jsx)(
                        "div",
                        {
                          style: {
                            borderBottom:
                              t !== i.length - 1
                                ? "3px solid #E6E6E6"
                                : "transparent",
                          },
                          children: (0, o.jsx)(h, { example: e }, t),
                        },
                        `${t}-${t}`
                      )
                    ),
                  })
                : "",
            ],
          });
        },
        b = n(60042),
        v = n.n(b);
      const y = (0, a.ZL)((e) => ({
        container: {
          "& iframe": { width: "100%", height: "100vh" },
          "& div": {
            overflowX: "scroll",
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#D1D5DB",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
          },
        },
        mobileView: { padding: "10px 20px" },
        content: {
          "& p": { lineHeight: 1.6 },
          "&  strong": { fontWeight: 700 },
          "& ul": { paddingLeft: 20, listStyleType: "disc" },
          "& ol": { paddingLeft: 20, listStyleType: "decimal" },
        },
        hideIcon: { color: e.colors.gray50 },
        titleContainer: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }));
      var j = ({ contentData: e }) => {
        const t = y(),
          { description: n, title: i } = e,
          { isMobileView: r } = (0, p.k)();
        return (0, o.jsxs)("div", {
          className: v()(t.container, { [t.mobileView]: r }),
          children: [
            !r &&
              (0, o.jsxs)("div", {
                className: t.titleContainer,
                children: [
                  (0, o.jsx)("h3", {
                    dangerouslySetInnerHTML: {
                      __html: d.ZP.render(i.replace(/\n/g, "") || ""),
                    },
                  }),
                  e.hiddenFromCustomer &&
                    (0, o.jsx)(g.G, {
                      className: t.hideIcon,
                      icon: "eye-slash",
                    }),
                ],
              }),
            (0, o.jsx)("div", {
              className: t.content,
              dangerouslySetInnerHTML: {
                __html: d.ZP.render(
                  (null === n || void 0 === n
                    ? void 0
                    : n.replace(/\n/g, "")) || ""
                ),
              },
            }),
          ],
        });
      };
      const w = (0, a.ZL)((e) => ({
        title: { fontWeight: 600 },
        hideIcon: { color: e.colors.gray50 },
        titleContainer: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }));
      var k = ({ contentData: e }) => {
          const t = w(),
            { title: n, examples: i, description: r } = e,
            { isMobileView: s } = (0, p.k)();
          return (0, o.jsxs)("div", {
            children: [
              !s &&
                (0, o.jsxs)("div", {
                  className: t.titleContainer,
                  children: [
                    (0, o.jsx)("h3", { className: t.title, children: n }),
                    e.hiddenFromCustomer &&
                      (0, o.jsx)(g.G, {
                        className: t.hideIcon,
                        icon: "eye-slash",
                      }),
                  ],
                }),
              r &&
                (0, o.jsx)(u.Z, {
                  sectionName: "description",
                  children: (0, o.jsx)("div", {
                    dangerouslySetInnerHTML: { __html: d.ZP.render(r || "") },
                  }),
                }),
              !!(null === i || void 0 === i ? void 0 : i.length) &&
                (0, o.jsx)(u.Z, {
                  sectionName: "examples",
                  isNew: !1,
                  children: i.map((e, t) =>
                    (0, o.jsx)(
                      "div",
                      {
                        style: {
                          borderBottom:
                            t !== i.length - 1
                              ? "3px solid #E6E6E6"
                              : "transparent",
                        },
                        children: (0, o.jsx)(h, { example: e }, t),
                      },
                      `${t}-${t}`
                    )
                  ),
                }),
            ],
          });
        },
        C = n(285556);
      function S(e, t, n, o, i, r, s) {
        try {
          var a = e[r](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      const N = ({ choice: e }) => {
          const { choice: t, subchoices: n, examples: i } = e;
          return (0, o.jsxs)(u.Z, {
            sectionName: t,
            defaultOpen: !1,
            children: [
              (0, o.jsx)(o.Fragment, {
                children:
                  !!(null === i || void 0 === i ? void 0 : i.length) &&
                  (0, o.jsx)(u.Z, {
                    sectionName: "examples",
                    isNew: !1,
                    children: i.map((e, t) =>
                      (0, o.jsx)(
                        "div",
                        {
                          style: {
                            borderBottom:
                              t !== i.length - 1
                                ? "3px solid #E6E6E6"
                                : "transparent",
                          },
                          children: (0, o.jsx)(h, { example: e }, t),
                        },
                        `${t}-${t}`
                      )
                    ),
                  }),
              }),
              (0, o.jsx)(o.Fragment, {
                children:
                  n.length > 0 &&
                  (0, o.jsx)("div", {
                    children: n.map((e) => (0, o.jsx)(N, { choice: e }, e._id)),
                  }),
              }),
            ],
          });
        },
        z = (0, a.ZL)((e) => ({
          title: { fontWeight: 600 },
          hideIcon: { color: e.colors.gray50 },
          titleContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        }));
      var I = ({ contentData: e }) => {
          const t = z(),
            {
              title: n,
              examples: r,
              description: a,
              choices: c,
              ontologyProjectId: m,
            } = e,
            { isMobileView: x } = (0, p.k)(),
            [f, b] = i.useState(c || []);
          return (
            i.useEffect(() => {
              if (m) {
                const e = (function () {
                  var e,
                    t =
                      ((e = function* () {
                        try {
                          const { ontology: e } = yield (0, C.ZP)(
                              null,
                              `/internal/ontology_manager/latest_ontology/${m}`,
                              { method: "GET" }
                            ),
                            t = (e) =>
                              s().sortBy(
                                e.map((e) => ({
                                  _id: e.value,
                                  choice: e.display,
                                  subchoices: t(e.subchoices || []),
                                  title: "",
                                  description: "",
                                  examples: [
                                    {
                                      _id: "",
                                      title: "",
                                      description: e.description || "",
                                      samples: (e.videoUrlExamples || []).map(
                                        (e) => ({
                                          _id: e,
                                          type: l.InstructionExampleSampleType
                                            .Good,
                                          videoUrl: e,
                                        })
                                      ),
                                    },
                                  ],
                                })),
                                (e) => e.choice
                              ),
                            n = t(e);
                          b(n);
                        } catch (e) {}
                      }),
                      function () {
                        var t = this,
                          n = arguments;
                        return new Promise(function (o, i) {
                          var r = e.apply(t, n);
                          function s(e) {
                            S(r, o, i, s, a, "next", e);
                          }
                          function a(e) {
                            S(r, o, i, s, a, "throw", e);
                          }
                          s(void 0);
                        });
                      });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
                e();
              }
            }, [m]),
            (0, o.jsxs)("div", {
              children: [
                !x &&
                  (0, o.jsxs)("div", {
                    className: t.titleContainer,
                    children: [
                      (0, o.jsx)("h3", { className: t.title, children: n }),
                      e.hiddenFromCustomer &&
                        (0, o.jsx)(g.G, {
                          className: t.hideIcon,
                          icon: "eye-slash",
                        }),
                    ],
                  }),
                a &&
                  (0, o.jsx)(u.Z, {
                    sectionName: "description",
                    children: (0, o.jsx)("div", {
                      dangerouslySetInnerHTML: { __html: d.ZP.render(a || "") },
                    }),
                  }),
                !!(null === r || void 0 === r ? void 0 : r.length) &&
                  (0, o.jsx)(u.Z, {
                    sectionName: "examples",
                    isNew: !1,
                    children: r.map((e, t) =>
                      (0, o.jsx)(
                        "div",
                        {
                          style: {
                            borderBottom:
                              t !== r.length - 1
                                ? "3px solid #E6E6E6"
                                : "transparent",
                          },
                          children: (0, o.jsx)(h, { example: e }, t),
                        },
                        `${t}-${t}`
                      )
                    ),
                  }),
                f &&
                  f.length > 0 &&
                  (0, o.jsx)(u.Z, {
                    sectionName: "Taxonomy",
                    defaultOpen: !1,
                    children: f.map((e) => (0, o.jsx)(N, { choice: e }, e._id)),
                  }),
              ],
            })
          );
        },
        L = n(90104),
        T = n.n(L),
        E = n(547939);
      const P = (0, a.ZL)((e) => ({
        title: { fontWeight: 600 },
        itemWrapper: { display: "flex", flexWrap: "wrap" },
        item: {
          border: `1px solid ${e.colors.gray10}`,
          padding: 8,
          margin: "10px 10px 10px 0px",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          "& > strong": { paddingRight: 20 },
          "&:hover": { cursor: "pointer", background: e.colors.gray01 },
        },
        iconBox: {
          height: 20,
          width: 20,
          background: e.colors.gray10,
          borderRadius: 2,
          marginRight: 10,
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
        },
        hideIcon: { color: e.colors.gray50 },
        titleContainer: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }));
      var R = ({ contentData: e, setSelectedPath: t }) => {
          const n = P(),
            {
              title: i,
              examples: r,
              description: s,
              labels: a,
              attributes: c,
            } = e,
            { isMobileView: m } = (0, p.k)(),
            x = ({ items: e, iconName: t, onClick: i }) =>
              (0, o.jsx)("div", {
                className: n.itemWrapper,
                children: e.map(({ title: e, id: r }, s) =>
                  (0, o.jsxs)(
                    "span",
                    {
                      className: n.item,
                      onClick: () => i(r),
                      children: [
                        (0, o.jsx)("span", {
                          className: n.iconBox,
                          children: (0, o.jsx)(g.G, { icon: t }),
                        }),
                        (0, o.jsx)("strong", { children: e }),
                        (0, o.jsx)(g.G, { icon: "chevron-right" }),
                      ],
                    },
                    s
                  )
                ),
              });
          return (0, o.jsxs)("div", {
            style: { display: "grid" },
            children: [
              !m &&
                (0, o.jsxs)("div", {
                  className: n.titleContainer,
                  children: [
                    (0, o.jsx)("h3", { className: n.title, children: i }),
                    e.hiddenFromCustomer &&
                      (0, o.jsx)(g.G, {
                        className: n.hideIcon,
                        icon: "eye-slash",
                      }),
                  ],
                }),
              s &&
                (0, o.jsx)(u.Z, {
                  sectionName: "description",
                  children: (0, o.jsx)("div", {
                    dangerouslySetInnerHTML: { __html: d.ZP.render(s || "") },
                  }),
                }),
              !T()(a) &&
                (0, o.jsx)(u.Z, {
                  sectionName: "applied labels",
                  children: (0, o.jsx)(x, {
                    items: a,
                    iconName: E.mz[l.InstructionComponentType.Label].iconName,
                    onClick: (e) => {
                      t([l.InstructionComponentType.Label, e]);
                    },
                  }),
                }),
              !T()(c) &&
                (0, o.jsx)(u.Z, {
                  sectionName: "applied attributes",
                  children: (0, o.jsx)(x, {
                    items: c,
                    iconName:
                      E.mz[l.InstructionComponentType.Attribute].iconName,
                    onClick: (e) => {
                      t([l.InstructionComponentType.Attribute, e]);
                    },
                  }),
                }),
              !!(null === r || void 0 === r ? void 0 : r.length) &&
                (0, o.jsx)(u.Z, {
                  sectionName: "examples",
                  isNew: !1,
                  children: r.map((e, t) =>
                    (0, o.jsx)(
                      "div",
                      {
                        style: {
                          borderBottom:
                            t !== r.length - 1
                              ? "3px solid #E6E6E6"
                              : "transparent",
                        },
                        children: (0, o.jsx)(h, { example: e }, t),
                      },
                      `${t}-${t}`
                    )
                  ),
                }),
            ],
          });
        },
        O = n(48725),
        Z = n(257881);
      function D(e, t, n, o, i, r, s) {
        try {
          var a = e[r](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      const H = (0, a.ZL)((e) => ({
        title: { fontWeight: 600, position: "relative" },
        iframeContainer: {
          position: "relative",
          height: "90%",
          minHeight: 700,
        },
        iframe: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        },
        dialog: {
          "& .MuiPaper-root": {
            margin: "0 !important",
            width: "80vw",
            maxHeight: "inherit",
            padding: "0 10px",
            overflow: "scroll",
          },
        },
        container: {
          padding: 10,
          "& > button": { position: "relative", left: 130 },
        },
        btn: {
          position: "absolute",
          right: "5%",
          background: "none",
          color: e.colors.gray50,
          border: "none",
          padding: 0,
          font: "inherit",
          cursor: "pointer",
          outline: "inherit",
          frontWeight: 500,
          "&:hover": { color: e.colors.gray75 },
        },
        hideIcon: { color: e.colors.gray50 },
        titleContainer: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }));
      var A = ({ contentData: e }) => {
        const t = H(),
          { isMobileView: n } = (0, p.k)(),
          { description: r, title: s, attachmentType: a, attachmentUrl: c } = e,
          { 0: d, 1: u } = (0, i.useState)(""),
          { 0: m, 1: h } = (0, i.useState)(n);
        (0, i.useEffect)(() => {
          var e;
          (a !== l.AttachmentInstructionType.Image &&
            a !== l.AttachmentInstructionType.Pdf) ||
            ((e = function* () {
              try {
                const e = r,
                  t = yield Z.Z.selfserve.fetchInstructionAssetS3URL({
                    assetId: e,
                  });
                t && t.signedURL && u(t.signedURL);
              } catch (e) {
                (0, C.vj)(e, { handleHttp: !0 });
              }
            }),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var r = e.apply(t, n);
                function s(e) {
                  D(r, o, i, s, a, "next", e);
                }
                function a(e) {
                  D(r, o, i, s, a, "throw", e);
                }
                s(void 0);
              });
            })();
        }, [a, r]);
        const x = (0, i.useCallback)(
          ({ actionButton: n }) =>
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)("div", {
                  className: t.titleContainer,
                  children: [
                    (0, o.jsxs)("h3", { className: t.title, children: [s, n] }),
                    e.hiddenFromCustomer &&
                      (0, o.jsx)(g.G, {
                        className: t.hideIcon,
                        icon: "eye-slash",
                      }),
                  ],
                }),
                a === l.AttachmentInstructionType.Iframe &&
                  (0, o.jsx)("div", {
                    className: t.iframeContainer,
                    children: (0, o.jsx)("iframe", {
                      src: c,
                      frameBorder: "0",
                      className: t.iframe,
                    }),
                  }),
                a === l.AttachmentInstructionType.Image &&
                  (0, o.jsx)("img", { style: { maxHeight: 600 }, src: d }),
                a === l.AttachmentInstructionType.Pdf &&
                  (0, o.jsx)("object", {
                    data: d + "#toolbar=0",
                    type: "application/pdf",
                    width: "100%",
                    height: "600",
                  }),
              ],
            }),
          [c, d]
        );
        return n
          ? (0, o.jsxs)("div", {
              className: t.container,
              children: [
                (0, o.jsx)(x, {
                  actionButton: (0, o.jsx)("button", {
                    className: t.btn,
                    onClick: () => h(!0),
                    children: (0, o.jsx)(g.G, { icon: "window-restore" }),
                  }),
                }),
                (0, o.jsx)(O.ZP, {
                  open: m,
                  className: t.dialog,
                  onClose: () => h(!1),
                  children: (0, o.jsx)(x, {
                    actionButton: (0, o.jsx)("button", {
                      className: t.btn,
                      onClick: () => h(!1),
                      children: "\u2715",
                    }),
                  }),
                }),
              ],
            })
          : (0, o.jsx)(x, {});
      };
      const G = (0, a.ZL)(() => ({
        container: { "& iframe": { width: "100%", height: "100vh" } },
        mobileView: { padding: "10px 20px" },
        content: {
          "& p": { lineHeight: 1.6 },
          "&  strong": { fontWeight: 700 },
        },
        title: { fontWeight: 600 },
        groupSectionItemContainer: { marginBottom: "8px" },
      }));
      var B = ({ contentData: e, index: t }) => {
          const n = G(),
            { components: i, title: r } = e,
            { isMobileView: s } = (0, p.k)();
          return (0, o.jsxs)("div", {
            className: v()(n.container, { [n.mobileView]: s }),
            children: [
              (0, o.jsx)("h3", { className: n.title, children: r }),
              i.map((e, i) =>
                (0, o.jsx)(
                  "div",
                  {
                    className: n.groupSectionItemContainer,
                    children: (0, o.jsx)(te, {
                      contentData: e.content,
                      index: [t, i],
                    }),
                  },
                  e.nodeId
                )
              ),
            ],
          });
        },
        F = n(679892),
        $ = n.n(F);
      function W(e, t, n) {
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
      function _(e) {
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
              W(e, t, n[t]);
            });
        }
        return e;
      }
      const M = (e) => "IMG" === e.tagName,
        V = (e) => e && 1 === e.nodeType,
        q = (e) => {
          try {
            return Array.isArray(e)
              ? e.filter(M)
              : ((e) => NodeList.prototype.isPrototypeOf(e))(e)
              ? [].slice.call(e).filter(M)
              : V(e)
              ? [e].filter(M)
              : "string" === typeof e
              ? [].slice.call(document.querySelectorAll(e)).filter(M)
              : [];
          } catch (t) {
            throw new TypeError(
              "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
            );
          }
        },
        U = (e, t) => {
          const n = _({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
          if ("function" === typeof window.CustomEvent)
            return new CustomEvent(e, n);
          const o = document.createEvent("CustomEvent");
          return o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), o;
        },
        Q = (e, t = {}) => {
          const n =
              window.Promise ||
              function (e) {
                function t() {}
                e(t, t);
              },
            o = (...e) => {
              const t = e.reduce((e, t) => [...e, ...q(t)], []);
              return (
                t
                  .filter((e) => -1 === l.indexOf(e))
                  .forEach((e) => {
                    l.push(e), e.classList.add("medium-zoom-image");
                  }),
                c.forEach(({ type: e, listener: n, options: o }) => {
                  t.forEach((t) => {
                    t.addEventListener(e, n, o);
                  });
                }),
                a
              );
            },
            i = ({ target: e } = {}) => {
              const t = () => {
                let e,
                  t,
                  n = {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  };
                if (m.container)
                  if (m.container instanceof Object)
                    (n = _({}, n, m.container)),
                      (e = n.width - n.left - n.right - 2 * m.margin),
                      (t = n.height - n.top - n.bottom - 2 * m.margin);
                  else {
                    const e = V(m.container)
                        ? m.container
                        : document.querySelector(m.container),
                      {
                        width: t,
                        height: o,
                        left: i,
                        top: r,
                      } = e.getBoundingClientRect();
                    n = _({}, n, { width: t, height: o, left: i, top: r });
                  }
                (e = e || n.width - 2 * m.margin),
                  (t = t || n.height - 2 * m.margin);
                const o = p.zoomedHd || p.original,
                  {
                    top: i,
                    left: r,
                    width: s,
                    height: a,
                  } = o.getBoundingClientRect(),
                  l = e / s,
                  c = t / a,
                  d = Math.min(l, c),
                  u = `scale(${d}) translate3d(${
                    ((e - s) / 2 - r + m.margin + n.left) / d
                  }px, ${((t - a) / 2 - i + m.margin + n.top) / d}px, 0)`;
                (p.zoomed.style.transform = u),
                  p.zoomedHd && (p.zoomedHd.style.transform = u);
              };
              return new n((n) => {
                if (e && -1 === l.indexOf(e)) return void n(a);
                const o = () => {
                  (d = !1),
                    p.zoomed.removeEventListener("transitionend", o),
                    p.original.dispatchEvent(
                      U("medium-zoom:opened", { detail: { zoom: a } })
                    ),
                    n(a);
                };
                if (p.zoomed) n(a);
                else {
                  if (e) p.original = e;
                  else {
                    if (!(l.length > 0)) return void n(a);
                    [p.original] = l;
                  }
                  if (
                    (p.original.dispatchEvent(
                      U("medium-zoom:open", { detail: { zoom: a } })
                    ),
                    (u =
                      window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      0),
                    (d = !0),
                    (p.zoomed = ((e) => {
                      const {
                          top: t,
                          left: n,
                          width: o,
                          height: i,
                        } = e.getBoundingClientRect(),
                        r = e.cloneNode(),
                        s =
                          window.pageYOffset ||
                          document.documentElement.scrollTop ||
                          document.body.scrollTop ||
                          0,
                        a =
                          window.pageXOffset ||
                          document.documentElement.scrollLeft ||
                          document.body.scrollLeft ||
                          0;
                      return (
                        r.removeAttribute("id"),
                        (r.style.position = "absolute"),
                        (r.style.top = `${t + s}px`),
                        (r.style.left = `${n + a}px`),
                        (r.style.width = `${o}px`),
                        (r.style.height = `${i}px`),
                        (r.style.transform = ""),
                        r
                      );
                    })(p.original)),
                    document.body.appendChild(h),
                    m.template)
                  ) {
                    const e = V(m.template)
                      ? m.template
                      : document.querySelector(m.template);
                    (p.template = document.createElement("div")),
                      p.template.appendChild(e.content.cloneNode(!0)),
                      document.body.appendChild(p.template);
                  }
                  if (
                    (p.original.parentElement &&
                      "PICTURE" === p.original.parentElement.tagName &&
                      p.original.currentSrc &&
                      (p.zoomed.src = p.original.currentSrc),
                    document.body.appendChild(p.zoomed),
                    window.requestAnimationFrame(() => {
                      document.body.classList.add("medium-zoom--opened");
                    }),
                    p.original.classList.add("medium-zoom-image--hidden"),
                    p.zoomed.classList.add("medium-zoom-image--opened"),
                    p.zoomed.addEventListener("click", r),
                    p.zoomed.addEventListener("transitionend", o),
                    p.original.getAttribute("data-zoom-src"))
                  ) {
                    (p.zoomedHd = p.zoomed.cloneNode()),
                      p.zoomedHd.removeAttribute("srcset"),
                      p.zoomedHd.removeAttribute("sizes"),
                      p.zoomedHd.removeAttribute("loading"),
                      (p.zoomedHd.src = p.zoomed.getAttribute("data-zoom-src")),
                      (p.zoomedHd.onerror = () => {
                        clearInterval(e),
                          console.warn(
                            `Unable to reach the zoom image target ${p.zoomedHd.src}`
                          ),
                          (p.zoomedHd = null),
                          t();
                      });
                    const e = setInterval(() => {
                      p.zoomedHd.complete &&
                        (clearInterval(e),
                        p.zoomedHd.classList.add("medium-zoom-image--opened"),
                        p.zoomedHd.addEventListener("click", r),
                        document.body.appendChild(p.zoomedHd),
                        t());
                    }, 10);
                  } else if (p.original.hasAttribute("srcset")) {
                    (p.zoomedHd = p.zoomed.cloneNode()),
                      p.zoomedHd.removeAttribute("sizes"),
                      p.zoomedHd.removeAttribute("loading");
                    const e = p.zoomedHd.addEventListener("load", () => {
                      p.zoomedHd.removeEventListener("load", e),
                        p.zoomedHd.classList.add("medium-zoom-image--opened"),
                        p.zoomedHd.addEventListener("click", r),
                        document.body.appendChild(p.zoomedHd),
                        t();
                    });
                  } else t();
                }
              });
            },
            r = () =>
              new n((e) => {
                if (d || !p.original) return void e(a);
                const t = () => {
                  p.original.classList.remove("medium-zoom-image--hidden"),
                    document.body.removeChild(p.zoomed),
                    p.zoomedHd && document.body.removeChild(p.zoomedHd),
                    document.body.removeChild(h),
                    p.zoomed.classList.remove("medium-zoom-image--opened"),
                    p.template && document.body.removeChild(p.template),
                    (d = !1),
                    p.zoomed.removeEventListener("transitionend", t),
                    p.original.dispatchEvent(
                      U("medium-zoom:closed", { detail: { zoom: a } })
                    ),
                    (p.original = null),
                    (p.zoomed = null),
                    (p.zoomedHd = null),
                    (p.template = null),
                    e(a);
                };
                (d = !0),
                  document.body.classList.remove("medium-zoom--opened"),
                  (p.zoomed.style.transform = ""),
                  p.zoomedHd && (p.zoomedHd.style.transform = ""),
                  p.template &&
                    ((p.template.style.transition = "opacity 150ms"),
                    (p.template.style.opacity = 0)),
                  p.original.dispatchEvent(
                    U("medium-zoom:close", { detail: { zoom: a } })
                  ),
                  p.zoomed.addEventListener("transitionend", t);
              }),
            s = ({ target: e } = {}) => (p.original ? r() : i({ target: e })),
            a = {
              open: i,
              close: r,
              toggle: s,
              update: (e = {}) => {
                const t = e;
                if (
                  (e.background && (h.style.background = e.background),
                  e.container &&
                    e.container instanceof Object &&
                    (t.container = _({}, m.container, e.container)),
                  e.template)
                ) {
                  const n = V(e.template)
                    ? e.template
                    : document.querySelector(e.template);
                  t.template = n;
                }
                return (
                  (m = _({}, m, t)),
                  l.forEach((e) => {
                    e.dispatchEvent(
                      U("medium-zoom:update", { detail: { zoom: a } })
                    );
                  }),
                  a
                );
              },
              clone: (e = {}) => Q(_({}, m, e)),
              attach: o,
              detach: (...e) => {
                p.zoomed && r();
                const t =
                  e.length > 0 ? e.reduce((e, t) => [...e, ...q(t)], []) : l;
                return (
                  t.forEach((e) => {
                    e.classList.remove("medium-zoom-image"),
                      e.dispatchEvent(
                        U("medium-zoom:detach", { detail: { zoom: a } })
                      );
                  }),
                  (l = l.filter((e) => -1 === t.indexOf(e))),
                  a
                );
              },
              on: (e, t, n = {}) => (
                l.forEach((o) => {
                  o.addEventListener(`medium-zoom:${e}`, t, n);
                }),
                c.push({ type: `medium-zoom:${e}`, listener: t, options: n }),
                a
              ),
              off: (e, t, n = {}) => (
                l.forEach((o) => {
                  o.removeEventListener(`medium-zoom:${e}`, t, n);
                }),
                (c = c.filter(
                  (n) =>
                    !(
                      n.type === `medium-zoom:${e}` &&
                      n.listener.toString() === t.toString()
                    )
                )),
                a
              ),
              getOptions: () => m,
              getImages: () => l,
              getZoomedImage: () => p.original,
            };
          let l = [],
            c = [],
            d = !1,
            u = 0,
            m = t;
          const p = {
            original: null,
            zoomed: null,
            zoomedHd: null,
            template: null,
          };
          "[object Object]" === Object.prototype.toString.call(e)
            ? (m = e)
            : (e || "string" === typeof e) && o(e),
            (m = _(
              {
                margin: 0,
                background: "#fff",
                scrollOffset: 40,
                container: null,
                template: null,
              },
              m
            ));
          const h = ((e) => {
            const t = document.createElement("div");
            return (
              t.classList.add("medium-zoom-overlay"),
              (t.style.background = e),
              t
            );
          })(m.background);
          return (
            document.addEventListener("click", (e) => {
              const { target: t } = e;
              t !== h ? -1 !== l.indexOf(t) && s({ target: t }) : r();
            }),
            document.addEventListener("keyup", (e) => {
              const t = e.key || e.keyCode;
              ("Escape" !== t && "Esc" !== t && 27 !== t) || r();
            }),
            document.addEventListener("scroll", () => {
              if (d || !p.original) return;
              const e =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
              Math.abs(u - e) > m.scrollOffset && setTimeout(r, 150);
            }),
            window.addEventListener("resize", r),
            a
          );
        },
        Y = () =>
          (0, o.jsx)($(), {
            id: "7cd8046e79ea2505",
            children:
              ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;-webkit-transition:opacity 300ms;-moz-transition:opacity 300ms;-o-transition:opacity 300ms;transition:opacity 300ms;will-change:opacity;z-index:9998}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:-webkit-zoom-out;cursor:-moz-zoom-out;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in;-webkit-transition:-webkit-transform 300ms cubic-bezier(.2,0,.2,1)!important;-moz-transition:-moz-transform 300ms cubic-bezier(.2,0,.2,1)!important;-o-transition:-o-transform 300ms cubic-bezier(.2,0,.2,1)!important;transition:-webkit-transform 300ms cubic-bezier(.2,0,.2,1)!important;transition:-moz-transform 300ms cubic-bezier(.2,0,.2,1)!important;transition:-o-transform 300ms cubic-bezier(.2,0,.2,1)!important;transition:transform 300ms cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:-webkit-zoom-out;cursor:-moz-zoom-out;cursor:zoom-out;will-change:transform;z-index:9999}",
          });
      var X = Q,
        J = n(951628);
      const K = ({
          contentData: e,
          index: t,
          subAttributeContentData: n,
          subLabelContentData: r,
          depth: a = 0,
        }) => {
          const d = ee(),
            {
              isMobileView: u,
              setSelectedPath: m,
              isRapidPreview: h,
              scrollIntoView: x,
              scrollToggle: b,
              components: y,
            } = (0, p.k)(),
            w = null === e || void 0 === e ? void 0 : e.type,
            C = (0, i.useRef)(null),
            { 0: S, 1: N } = (0, i.useState)(0 === t);
          (0, i.useEffect)(() => {
            X(document.querySelectorAll("p img"));
          }, [e, S]),
            (0, i.useEffect)(() => {
              (x === t || s().isEqual(x, t)) &&
              (null === C || void 0 === C ? void 0 : C.current)
                ? ((C.current.style.display = "grid"),
                  N(!0),
                  setTimeout(() => {
                    var e;
                    return null === (e = C.current) || void 0 === e
                      ? void 0
                      : e.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                  }, 50))
                : Array.isArray(x) && t === x[0] && N(!0);
            }, [t, x, b]);
          let z = () => null;
          switch (w) {
            case l.InstructionComponentType.RichText:
              z = j;
              break;
            case l.InstructionComponentType.Label:
              z = f;
              break;
            case l.InstructionComponentType.Attribute:
              z = k;
              break;
            case l.InstructionComponentType.Field:
              z = I;
              break;
            case l.InstructionComponentType.Rule:
              z = R;
              break;
            case l.InstructionComponentType.Attachment:
              z = A;
              break;
            case l.InstructionComponentType.Group:
              z = B;
              break;
            default:
              (0, c.fX)(w);
          }
          var L;
          return (0, o.jsxs)("div", {
            className: v()(
              d.commonDetailStyles,
              u
                ? d.sidePanelContainer
                : h
                ? S
                  ? d.containerRapidPreview
                  : d.containerSmall
                : d.container
            ),
            ref: C,
            id:
              null !== (L = null === e || void 0 === e ? void 0 : e._id) &&
              void 0 !== L
                ? L
                : "",
            children: [
              (0, o.jsx)(Y, {}),
              h &&
                !S &&
                !!e &&
                (0, o.jsxs)("div", {
                  className: d.titleContainer,
                  onClick: () => N(!0),
                  children: [
                    (0, o.jsxs)("div", {
                      className: d.titleWithChevron,
                      children: [
                        (0, o.jsx)(g.G, { size: "sm", icon: "chevron-right" }),
                        (0, o.jsx)("h3", {
                          className: d.titleH3,
                          dangerouslySetInnerHTML: { __html: e.title || "" },
                        }),
                      ],
                    }),
                    e.hiddenFromCustomer &&
                      (0, o.jsx)(g.G, {
                        className: d.hideIcon,
                        icon: "eye-slash",
                      }),
                  ],
                }),
              h &&
                S &&
                (0, o.jsx)("div", {
                  className: d.collapseOverlay,
                  onClick: () => N(!1),
                }),
              (!h || S) &&
                (0, o.jsx)(z, { contentData: e, setSelectedPath: m, index: t }),
              n &&
                n.length > 0 &&
                (0, o.jsx)("div", {
                  className: d.subComponentSectionHead,
                  children: (0, o.jsx)("h3", { children: "SubAttributes:" }),
                }),
              null === n || void 0 === n
                ? void 0
                : n.map((e) =>
                    (0, o.jsx)(
                      K,
                      {
                        contentData: e,
                        index: t,
                        depth: a ? a + 1 : 1,
                        subAttributeContentData: (
                          null === e || void 0 === e
                            ? void 0
                            : e.nestedAttributeIds
                        )
                          ? (0, J.kN)(y, e.nestedAttributeIds)
                          : [],
                        subLabelContentData: (
                          null === e || void 0 === e ? void 0 : e.nestedLabelIds
                        )
                          ? (0, J.kN)(y, e.nestedLabelIds)
                          : [],
                      },
                      e._id
                    )
                  ),
              r &&
                r.length > 0 &&
                (0, o.jsx)("div", {
                  className: d.subComponentSectionHead,
                  children: (0, o.jsx)("h3", { children: "SubLabels:" }),
                }),
              null === r || void 0 === r
                ? void 0
                : r.map((e) =>
                    (0, o.jsx)(
                      K,
                      {
                        contentData: e,
                        index: t,
                        depth: a ? a + 1 : 1,
                        subAttributeContentData: (
                          null === e || void 0 === e
                            ? void 0
                            : e.nestedAttributeIds
                        )
                          ? (0, J.kN)(y, e.nestedAttributeIds)
                          : [],
                        subLabelContentData: (
                          null === e || void 0 === e ? void 0 : e.nestedLabelIds
                        )
                          ? (0, J.kN)(y, e.nestedLabelIds)
                          : [],
                      },
                      e._id
                    )
                  ),
            ],
          });
        },
        ee = (0, a.ZL)((e) => ({
          container: {
            border: `1px solid ${e.colors.gray10}`,
            background: "white",
            padding: "10px 20px",
            borderRadius: 10,
            color: e.colors.gray75,
            flex: 3,
            marginLeft: 20,
            "@global ins": {
              textDecoration: "underline",
              textDecorationColor: "#32a82a",
              textDecorationThickness: "3px",
              backgroundColor: "rgba(66, 171, 61, 0.28)",
            },
            "@global del": {
              textDecoration: "line-through",
              textDecorationColor: "red",
              textDecorationThickness: "2px",
              backgroundColor: "rgba(225, 66, 66, 0.28)",
            },
          },
          chevronExpanded: {},
          commonDetailStyles: {
            position: "relative",
            "& table, th, td": {
              paddingTop: 4,
              paddingLeft: 4,
              border: "1px solid",
              borderCollapse: "collapse",
            },
            "& h3": {
              fontSize: "1.125rem",
              lineHeight: 2,
              marginTop: 0,
              marginBottom: 0,
            },
            "& h3 p": { marginTop: 0, marginBottom: 0 },
          },
          sidePanelContainer: {
            height: "100%",
            overflow: "scroll",
            paddingBottom: 100,
            "@global ins": {
              textDecoration: "underline",
              textDecorationColor: "#32a82a",
              textDecorationThickness: "3px",
              backgroundColor: "rgba(66, 171, 61, 0.28)",
            },
            "@global del": {
              textDecoration: "line-through",
              textDecorationColor: "red",
              textDecorationThickness: "2px",
              backgroundColor: "rgba(225, 66, 66, 0.28)",
            },
          },
          containerRapidPreview: {
            border: `1px solid ${e.colors.gray10}`,
            background: "white",
            padding: "10px 20px",
            borderRadius: 10,
            color: e.colors.gray75,
            marginLeft: 20,
          },
          containerSmall: {
            border: `1px solid ${e.colors.gray10}`,
            background: "white",
            padding: "10px 20px",
            borderRadius: 10,
            color: e.colors.gray75,
            marginLeft: 20,
          },
          titleContainer: {
            flexDirection: "row",
            display: "flex",
            gap: 7,
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          },
          titleWithChevron: { display: "flex", gap: 7, alignItems: "center" },
          titleH3: {
            "white-space": "nowrap",
            overflow: "hidden",
            "text-overflow": "ellipsis",
          },
          subComponentSectionHead: {
            marginTop: 20,
            marginBottom: 10,
            marginLeft: 20,
            "white-space": "nowrap",
            overflow: "hidden",
            "text-overflow": "ellipsis",
          },
          collapseOverlay: {
            position: "absolute",
            height: "40px",
            width: "100%",
            cursor: "pointer",
          },
          hideIcon: { color: e.colors.gray50 },
        }));
      var te = K;
    },
    936874: function (e, t, n) {
      var o = n(824246),
        i = n(827378),
        r = n(604375),
        s = n(792739),
        a = n(242631),
        l = n(951628),
        c = n(944765);
      const d = (0, r.ZL)((e) => ({
        searchBar: {
          height: 30,
          maxWidth: 250,
          marginLeft: "auto",
          marginBottom: 10,
        },
        sidePanelContainer: { width: "100%", marginBottom: 0 },
        sidePanelRootStyle: { margin: "10px 12px", maxWidth: "90%" },
        root: { background: e.colors.gray05, "& fieldset": { border: "none" } },
      }));
      t.Z = () => {
        const e = d(),
          {
            isMobileView: t,
            setSelectedPath: n,
            components: u,
            setSearchResult: m,
          } = (0, c.k)(),
          { 0: p, 1: h } = (0, i.useState)(""),
          g = (0, i.useMemo)(() => (0, l.OY)(u, []), [u]),
          x = (0, i.useMemo)(
            () =>
              new a.Z(g, {
                includeScore: !0,
                includeMatches: !0,
                useExtendedSearch: !0,
                keys: ["title", "description"],
              }),
            [g]
          );
        return (0, o.jsx)("div", {
          className: t ? e.sidePanelContainer : e.searchBar,
          children: (0, o.jsx)(r.oi, {
            startAdornment: (0, o.jsx)(s.G, {
              icon: "search",
              color: t ? "var(--color-RemoGray50)" : "black",
            }),
            placeholder: t ? "Search..." : "Search Instructions",
            fullWidth: !0,
            classes: { root: t ? e.sidePanelRootStyle : e.root },
            value: p,
            onChange: (e) => {
              h(e.target.value);
            },
            onKeyDown: (e) => {
              if ((p || m(null), p && "Enter" === e.key)) {
                const e = x.search(`'"${p}"`);
                m(e.reverse()), n([]);
              }
            },
          }),
        });
      };
    },
    391779: function (e, t, n) {
      var o = n(824246),
        i = (n(827378), n(60042)),
        r = n.n(i),
        s = n(434981),
        a = n.n(s),
        l = n(599789),
        c = n(220453),
        d = n(604375),
        u = n(85913),
        m = n(792739),
        p = n(619288),
        h = n(547939),
        g = n(944765);
      function x(e, t, n) {
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
      function f(e) {
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
              x(e, t, n[t]);
            });
        }
        return e;
      }
      const b = (0, d.ZL)((e) => ({
        container: {
          border: `1px solid ${e.colors.gray10}`,
          background: "white",
          padding: "10px 20px",
          borderRadius: 10,
          color: e.colors.gray75,
          flex: 3,
          marginLeft: 20,
        },
        sidePanelContainer: {
          height: "100%",
          overflow: "scroll",
          "& h1": { fontSize: 15, marginLeft: 10 },
          paddingBottom: 100,
        },
        highlight: { background: "yellow" },
        clickable: {
          color: e.colors.blue,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": { cursor: "pointer", textDecoration: "underline" },
          "& svg": { marginRight: 6 },
        },
        smallerSize: { fontSize: 10 },
        circle: {
          height: 100,
          width: 100,
          borderRadius: "50%",
          background: e.colors.gray10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        },
        noResultContainer: {
          height: 700,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }));
      t.Z = () => {
        const e = b(),
          {
            isMobileView: t,
            searchResult: n,
            setSearchResult: i,
            setSelectedPath: s,
          } = (0, g.k)();
        var d;
        const x =
          null !== (d = null === n || void 0 === n ? void 0 : n.length) &&
          void 0 !== d
            ? d
            : 0;
        return (0, o.jsxs)("div", {
          className: t ? e.sidePanelContainer : e.container,
          children: [
            (0, o.jsxs)("h1", {
              children: [
                "Search Results (",
                x,
                " result",
                x <= 1 ? "" : "s",
                ")",
              ],
            }),
            !x &&
              (0, o.jsxs)("div", {
                className: e.noResultContainer,
                children: [
                  (0, o.jsx)("div", {
                    className: e.circle,
                    children: (0, o.jsx)(m.G, { icon: "search", size: "2x" }),
                  }),
                  (0, o.jsx)("div", { children: "No search results" }),
                ],
              }),
            null === n || void 0 === n
              ? void 0
              : n.map(({ item: n, matches: d }, g) => {
                  const { title: x, description: b } = ((t, n) => {
                      var i, r;
                      const s = {},
                        { path: c } = t,
                        d = c[0],
                        u =
                          d === l.InstructionComponentType.RichText ? h.KH : d,
                        p = (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(m.G, {
                              icon:
                                null === (i = h.mz[d]) || void 0 === i
                                  ? void 0
                                  : i.iconName,
                              color:
                                null === (r = h.mz[d]) || void 0 === r
                                  ? void 0
                                  : r.iconColor,
                            }),
                            " ",
                            a()(u),
                          ],
                        });
                      return (
                        n.map((t) => {
                          const { indices: n, key: i, value: r } = t;
                          if ("title" === i) {
                            let t = r;
                            for (const [i, s] of n)
                              t = (0, o.jsxs)("span", {
                                children: [
                                  r.substring(0, i),
                                  (0, o.jsx)("span", {
                                    className: e.highlight,
                                    children: r.substring(i, s + 1),
                                  }),
                                  r.substring(s + 1),
                                ],
                              });
                            s[i] = (0, o.jsxs)(o.Fragment, {
                              children: [p, " ", ">", " ", t],
                            });
                          } else if ("description" === i) {
                            let e = r;
                            const t = [];
                            for (const [i, s] of n) {
                              const e = document.createElement("span");
                              (e.style.cssText = "background:yellow"),
                                e.setAttribute("style", "background:yellow;"),
                                (e.innerText = r.substring(i, s + 1)),
                                t.push({ html: e, size: s + 1 - i });
                            }
                            let o = 0;
                            n.forEach(([n, i], r) => {
                              const { html: s, size: a } = t[r],
                                l = s.outerHTML;
                              (e =
                                e.substring(0, n + o) +
                                l +
                                e.substring(i + o + 1)),
                                (o += l.length - a);
                            }),
                              (s[i] = e);
                          }
                        }),
                        s.title ||
                          (s.title = (0, o.jsxs)(o.Fragment, {
                            children: [p, " ", ">", " ", c[1]],
                          })),
                        s.description || (s.description = t.description),
                        s
                      );
                    })(n, d),
                    { path: v, linkedTask: y, nodeId: j } = n,
                    w = (0, o.jsx)("span", {
                      onClick: () => {
                        s([v[0], j]), i(null);
                      },
                      className: r()(e.clickable, { [e.smallerSize]: t }),
                      children: x,
                    });
                  return (0, o.jsx)(
                    u.Z,
                    {
                      sectionName: w,
                      children: y
                        ? (0, o.jsx)(p.Z, {
                            sample: f({}, n, { description: b }),
                            index: g,
                          })
                        : b
                        ? (0, o.jsx)("small", {
                            dangerouslySetInnerHTML: {
                              __html: c.ZP.render(b || ""),
                            },
                          })
                        : (0, o.jsx)("small", { children: "No Description" }),
                    },
                    g
                  );
                }),
          ],
        });
      };
    },
    591771: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var o = n(824246),
        i = n(827378),
        r = n(298784),
        s = n.n(r),
        a = n(60042),
        l = n.n(a),
        c = n(604375),
        d = n(792739),
        u = n(599789),
        m = n(944765);
      const p = {
        [u.InstructionDiffStatus.Addition]: "New",
        [u.InstructionDiffStatus.Update]: "Changed",
        [u.InstructionDiffStatus.Deletion]: "Removed",
      };
      var h = n(232021);
      const g = (e) => {
          if (e.components) {
            return !!e.components.find(g) && u.InstructionDiffStatus.Addition;
          }
          return (
            !!(
              e.content &&
              "diffStatus" in e.content &&
              e.content.diffStatus
            ) && e.content.diffStatus
          );
        },
        x = ({
          component: e,
          nested: t,
          isGroupOpen: n,
          disableTimer: r,
          onClickItem: a,
          getComponentById: c,
        }) => {
          var b, v, y, j, w, k;
          const C = f(),
            { 0: S, 1: N } = (0, i.useState)(!1),
            { 0: z, 1: I } = (0, i.useState)(!1),
            {
              selectedPath: L,
              setSelectedPath: T,
              isOnboarding: E,
            } = (0, m.k)();
          let {
            nodeId: P,
            nodeName: R,
            nodeType: O,
            iconName: Z,
            iconColor: D,
            waitSeconds: H,
          } = e;
          const [A, G] = L,
            B = A === O && G === P,
            F = O === u.InstructionComponentType.Group;
          F &&
            (null === (b = e.components) || void 0 === b ? void 0 : b.length) &&
            (H = e.components.reduce((e, t) => e + Number(t.waitSeconds), 0));
          const $ = ({ diffStatus: e }) =>
              (0, o.jsx)("span", {
                className: l()(
                  C.diffLabel,
                  e === u.InstructionDiffStatus.Deletion && C.diffRemoved
                ),
                children: p[e],
              }),
            W = g(e);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("span", {
                className: l()(C.tab, {
                  [C.nested]: t,
                  [C.deletedComponent]: W === u.InstructionDiffStatus.Deletion,
                  [C.highlightedComponent]:
                    !B &&
                    H &&
                    !E &&
                    (W === u.InstructionDiffStatus.Addition ||
                      W === u.InstructionDiffStatus.Update),
                  [C.selectedComponent]: B,
                }),
                onClick: () => {
                  a(e);
                },
                children: (0, o.jsxs)("span", {
                  className: l()(C.componentHeader),
                  children: [
                    (0, o.jsx)("span", {
                      className: C.typeIcon,
                      style: { background: D + "26" },
                      children: (0, o.jsx)(d.G, { icon: Z, color: D }),
                    }),
                    s().startCase(R),
                    F &&
                      (0, o.jsx)("div", {
                        style: { marginLeft: "10px" },
                        children: (0, o.jsx)(d.G, {
                          icon: n ? "chevron-down" : "chevron-right",
                          color: "var(--color-RemoGray50)",
                        }),
                      }),
                    W && (0, o.jsx)($, { diffStatus: W }),
                    !F && H && B && !r && (0, o.jsx)(h.Z, { waitSeconds: H }),
                    (null === (v = e.content) || void 0 === v
                      ? void 0
                      : v.hiddenFromCustomer) &&
                      (0, o.jsx)(d.G, {
                        icon: "eye-slash",
                        color: "var(--color-RemoGray50)",
                        style: { marginLeft: "10px" },
                      }),
                  ],
                }),
              }),
              F &&
                e.components &&
                n &&
                (0, o.jsx)("div", {
                  style: { marginLeft: "14px" },
                  children: e.components.map((e) =>
                    (0, o.jsx)(
                      x,
                      {
                        nested: !0,
                        component: e,
                        isGroupOpen: !1,
                        onClickItem: () => {
                          T([e.nodeType, e.nodeId]);
                        },
                      },
                      e.nodeId
                    )
                  ),
                }),
              (null === (y = e.content) || void 0 === y
                ? void 0
                : y.nestedAttributeIds) &&
                e.content.nestedAttributeIds.length > 0 &&
                c &&
                (0, o.jsxs)("div", {
                  className: C.subComponent,
                  children: [
                    (0, o.jsxs)("div", {
                      className: C.subComponentHeader,
                      children: [
                        (0, o.jsx)(d.G, {
                          icon: S ? "chevron-down" : "chevron-right",
                          color: "var(--color-RemoGray50)",
                          onClick: (e) => {
                            e.stopPropagation(), e.preventDefault(), N(!S);
                          },
                        }),
                        (0, o.jsx)("div", {
                          className: C.subComponentText,
                          onClick: (e) => {
                            e.stopPropagation(), e.preventDefault(), N(!S);
                          },
                          children: "SubAttributes",
                        }),
                      ],
                    }),
                    S &&
                      (null === (j = e.content) || void 0 === j
                        ? void 0
                        : j.nestedAttributeIds.map((e) => {
                            const t = c(e);
                            return t
                              ? (0, o.jsx)(
                                  "a",
                                  {
                                    className: C.subComponentTitle,
                                    href: `#${t.content._id}`,
                                    children: (0, o.jsx)(
                                      x,
                                      {
                                        nested: !0,
                                        component: t,
                                        isGroupOpen: n,
                                        onClickItem: a,
                                        getComponentById: c,
                                      },
                                      t.content._id
                                    ),
                                  },
                                  t.content._id
                                )
                              : (0, o.jsx)(o.Fragment, {});
                          })),
                  ],
                }),
              (null === (w = e.content) || void 0 === w
                ? void 0
                : w.nestedLabelIds) &&
                e.content.nestedLabelIds.length > 0 &&
                c &&
                (0, o.jsxs)("div", {
                  className: C.subComponent,
                  children: [
                    (0, o.jsxs)("div", {
                      className: C.subComponentHeader,
                      children: [
                        (0, o.jsx)(d.G, {
                          icon: z ? "chevron-down" : "chevron-right",
                          color: "var(--color-RemoGray50)",
                          onClick: (e) => {
                            e.stopPropagation(), e.preventDefault(), I(!z);
                          },
                        }),
                        (0, o.jsx)("div", {
                          className: C.subComponentText,
                          onClick: (e) => {
                            e.stopPropagation(), e.preventDefault(), I(!z);
                          },
                          children: "SubLabels",
                        }),
                      ],
                    }),
                    z &&
                      (null === (k = e.content) || void 0 === k
                        ? void 0
                        : k.nestedLabelIds.map((e) => {
                            const t = c(e);
                            return t
                              ? (0, o.jsx)(
                                  "a",
                                  {
                                    className: C.subComponentTitle,
                                    href: `#${t.content._id}`,
                                    children: (0, o.jsx)(
                                      x,
                                      {
                                        nested: !0,
                                        component: t,
                                        isGroupOpen: n,
                                        onClickItem: a,
                                        getComponentById: c,
                                      },
                                      t.content._id
                                    ),
                                  },
                                  t.content._id
                                )
                              : (0, o.jsx)(o.Fragment, {});
                          })),
                  ],
                }),
            ],
          });
        },
        f = (0, c.ZL)((e) => ({
          scrollBehavior: { scrollBehavior: "smooth", textDecoration: "none" },
          nested: { paddingLeft: "20px !important" },
          selected: { background: "#F3F2FF", color: "#6A5DF9" },
          selectedComponent: { background: e.colors.gray05, padding: 10 },
          componentHeader: { display: "flex", alignItems: "center" },
          subComponent: {
            padding: "10px",
            alignItems: "center",
            marginLeft: "14px",
          },
          subComponentHeader: {
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            alignItems: "center",
            "&:hover": { color: "#6A5DF9" },
          },
          subComponentText: { marginLeft: "14px" },
          subComponentTitle: { color: "#000002", textDecoration: "none" },
          diffLabel: {
            color: e.colors.green,
            borderRadius: 30,
            background: "#F1F8F5",
            fontSize: 10,
            padding: "2px 5px",
            paddingLeft: "5px !important",
            margin: "0 3px",
            height: 15,
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          },
          diffRemoved: { color: "red" },
          tab: {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: 10,
            "&:hover": { color: "#6A5DF9" },
          },
          typeIcon: {
            width: 15,
            height: 15,
            borderRadius: 3,
            fontSize: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            flexShrink: 0,
          },
          highlightedComponent: { background: "#fffecd" },
          deletedComponent: { opacity: 0.5 },
        }));
      var b = x,
        v = n(44579);
      const y = (0, c.ZL)((e) => ({
        parentPositionSticky: {
          position: "sticky",
          top: "10px",
          alignSelf: "flex-start",
          display: "flex",
          height: "100%",
        },
        container: {
          background: "white",
          flex: 1,
          padding: 15,
          flexShrink: 0,
          minWidth: 250,
          maxWidth: 300,
          minHeight: "90%",
          overflowY: "scroll",
          "&::-webkit-scrollbar": { width: 0 },
          maxHeight: "75vh",
          color: e.colors.gray75,
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        },
        smContainer: {
          background: "white",
          flex: 1,
          flexShrink: 0,
          minHeight: "90%",
          maxHeight: "100%",
          overflowY: "scroll",
          color: e.colors.gray75,
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
          paddingBottom: 100,
        },
        navLine: {
          padding: 10,
          "& > span": { paddingLeft: 10 },
          "&:hover": { cursor: "pointer" },
        },
        mobileNavLine: {
          padding: 10,
          display: "flex",
          background: e.colors.gray01,
          justifyContent: "space-between",
          alignItems: "center",
          border: `1px solid ${e.colors.gray05}`,
          "& > span": { paddingLeft: 10, marginRight: "auto" },
          "&:hover": { cursor: "pointer" },
        },
        hideShowButton: {
          display: "flex",
          justifyContent: "center",
          background: "white",
          border: `1px solid ${e.colors.gray10}`,
          alignItems: "center",
          width: 16,
          height: 40,
          textAlign: "center",
          borderRadius: "0px 8px 7px 0px",
          padding: 4,
          marginBottom: 5,
          cursor: "pointer",
        },
        wrapper: {
          border: `1px solid ${e.colors.gray10}`,
          position: "relative",
          borderRadius: "10px 0px 10px 10px",
          overflow: "hidden",
        },
        smWrapper: { position: "relative", width: "100%", height: "100%" },
        shadow: {
          position: "absolute",
          left: 0,
          zIndex: 100,
          width: "100%",
          height: 10,
          background: "red",
        },
        shadowTop: {
          top: 0,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.35), transparent)",
          opacity: 0,
        },
        shadowBottom: {
          bottom: 0,
          opacity: 0,
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent)",
        },
      }));
      var j = ({ handleSetSelectedPath: e }) => {
        const t = y(),
          {
            selectedPath: n,
            setSelectedPath: r,
            setSearchResult: a,
            components: c,
            isMobileView: p,
            isRapidPreview: h,
            disableScrollOnMount: g,
            doNotRenderChildrenSet: x,
          } = (0, m.k)(),
          { 0: f, 1: j } = (0, i.useState)(!0),
          { 0: w, 1: k } = (0, i.useState)([]),
          C = null !== e && void 0 !== e ? e : r;
        (0, v.Z)(() => {
          if (!p && !g && c.length) {
            const e = c[0],
              { nodeType: t, nodeId: n } = e;
            if (t === u.InstructionComponentType.Group && e.components && !h) {
              const t = e.components[0];
              k([...w, e.nodeId]), C([t.nodeType, t.nodeId]);
            } else C([t, n]);
          }
        }),
          (0, i.useEffect)(() => {
            if (f) {
              const e = document.querySelector("#content"),
                t = document.querySelector("#wrapper"),
                n = document.querySelector("#shadow-top"),
                o = document.querySelector("#shadow-bottom"),
                i = e.scrollHeight - t.offsetHeight,
                r = function () {
                  const e = this.scrollTop / i;
                  (n.style.opacity = String(Math.min(e, 0.4))),
                    (o.style.opacity = String(Math.min(1 - e, 0.4)));
                };
              e.addEventListener("scroll", r);
              e.scrollHeight > e.clientHeight &&
                ((n.style.opacity = "0"), (o.style.opacity = "0.4"));
            }
          }, [f]);
        const S = (e) =>
          c.find((t) => {
            var n;
            return (
              t.content._id &&
              (null === t ||
              void 0 === t ||
              null === (n = t.content) ||
              void 0 === n
                ? void 0
                : n._id) === e
            );
          });
        return (0, o.jsxs)("div", {
          className: t.parentPositionSticky,
          children: [
            f &&
              (0, o.jsxs)("div", {
                id: "wrapper",
                className: p ? t.smWrapper : t.wrapper,
                children: [
                  (0, o.jsx)("div", {
                    id: "shadow-top",
                    className: l()(t.shadow, t.shadowTop),
                  }),
                  (0, o.jsx)("div", {
                    id: "shadow-bottom",
                    className: l()(t.shadow, t.shadowBottom),
                  }),
                  (0, o.jsx)("div", {
                    id: "content",
                    className: p ? t.smContainer : t.container,
                    children: c.map((e) => {
                      var t;
                      if (
                        (null === e ||
                        void 0 === e ||
                        null === (t = e.content) ||
                        void 0 === t
                          ? void 0
                          : t._id) &&
                        x &&
                        x.has(e.content._id)
                      )
                        return (0, o.jsx)(o.Fragment, {});
                      const { nodeType: i, nodeId: r } = e,
                        [l, c] = n,
                        d =
                          i === u.InstructionComponentType.Group &&
                          s().some(
                            e.components,
                            (e) => e.nodeId === c && l === e.nodeType
                          ),
                        m = w.includes(r);
                      return (0, o.jsx)(
                        b,
                        {
                          nested: !1,
                          component: e,
                          isGroupOpen: m,
                          onClickItem: (t) =>
                            ((e, t) => {
                              var n;
                              const { nodeType: o, nodeId: i } = e;
                              if (
                                o === u.InstructionComponentType.Group &&
                                (null === (n = e.components) || void 0 === n
                                  ? void 0
                                  : n.length)
                              ) {
                                if (w.includes(i)) {
                                  const e = w.filter((e) => e !== i);
                                  k(e);
                                } else k([...w, i]);
                                if (!h && !t && !p) {
                                  const t = e.components[0];
                                  C([t.nodeType, t.nodeId]);
                                }
                              } else C([o, i]);
                              a(null);
                            })(null !== t && void 0 !== t ? t : e, d),
                          getComponentById: S,
                        },
                        r
                      );
                    }),
                  }),
                ],
              }),
            !p &&
              (0, o.jsx)("div", {
                className: t.hideShowButton,
                onClick: () => j(!f),
                children: (0, o.jsx)(d.G, {
                  style: { fontSize: 14 },
                  icon: f ? "caret-left" : "caret-right",
                }),
              }),
          ],
        });
      };
    },
    232021: function (e, t, n) {
      var o = n(824246);
      n(827378);
      const i = (0, n(604375).ZL)((e) => ({
        loader: {
          border: "3px solid #ffffff",
          borderTop: `3px solid ${e.colors.green}`,
          borderRadius: "50%",
          width: 16,
          height: 16,
          animation: "$spin 1s linear infinite",
          "-webkit-animation": "$spin 1s linear infinite",
          display: "inline-flex",
        },
        "@keyframes spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "@-webkit-keyframes spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        counterWrapper: {
          position: "relative",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 5,
        },
        counter: { position: "absolute", fontSize: "0.6rem" },
      }));
      t.Z = ({ waitSeconds: e }) => {
        const t = i();
        return (0, o.jsxs)("div", {
          className: t.counterWrapper,
          children: [
            (0, o.jsx)("span", { className: t.loader }),
            (0, o.jsx)("span", { className: t.counter, children: e }),
          ],
        });
      };
    },
    804789: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ie;
        },
      });
      var o = n(824246),
        i = n(827378),
        r = n(298784),
        s = n.n(r),
        a = n(604375),
        l = n(746332),
        c = n(434981),
        d = n.n(c),
        u = n(936874),
        m = n(944765);
      const p = (0, a.ZL)(() => ({
        titleWrapper: {
          display: "flex",
          height: 100,
          alignItems: "center",
          justifyContent: "space-between",
        },
        title: { fontSize: 24, fontWeight: 500, color: "#1F2937" },
      }));
      var h = () => {
          const e = p(),
            { title: t, hasVersionComparison: n } = (0, m.k)();
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("div", {
                className: e.titleWrapper,
                children: (0, o.jsx)("div", {
                  className: e.title,
                  children: d()(t),
                }),
              }),
              !n && (0, o.jsx)(u.Z, {}),
            ],
          });
        },
        g = n(591771),
        x = n(563924),
        f = n(391779),
        b = n(457013),
        v = n(951628);
      const y = (0, a.ZL)((e) => ({
        background: {
          padding: "10px 20px",
          background: e.colors.gray01,
          color: e.colors.gray75,
          paddingBottom: 100,
        },
        containerScalers: {
          margin: "auto",
          position: "relative",
          maxWidth: "80vw",
          minHeight: "100vh",
          [e.breakpoints.down("md")]: { maxWidth: "95vw" },
        },
        contentWrapper: { display: "flex" },
        verticalWrapper: {
          display: "flex",
          flexDirection: "column",
          gap: e.spacing(1),
          flex: 3,
          minWidth: 0,
        },
      }));
      var j = () => {
          const {
              components: e,
              setSelectedPath: t,
              selectedSection: n,
              isRapidPreview: r,
              searchResult: s,
              isEmbedded: a,
              doNotRenderChildrenSet: l,
            } = (0, m.k)(),
            c = y(),
            d = () => {
              const n = decodeURI(window.location.hash.substring(1));
              if (e)
                for (const o of e)
                  if (o.nodeName === n) {
                    t([o.nodeType, o.nodeId]);
                    break;
                  }
            };
          return (
            (0, i.useEffect)(
              () => (
                window.addEventListener("hashchange", d),
                () => {
                  window.removeEventListener("hashchange", d);
                }
              ),
              [e]
            ),
            (0, o.jsx)("div", {
              className: c.background,
              children: (0, o.jsxs)("div", {
                className: c.containerScalers,
                children: [
                  !r && (0, o.jsx)(h, {}),
                  a && (0, o.jsx)(b.Z, {}),
                  (0, o.jsxs)("div", {
                    className: c.contentWrapper,
                    children: [
                      (0, o.jsx)(g.Z, {}),
                      r
                        ? (0, o.jsx)("div", {
                            className: c.verticalWrapper,
                            children: e.map((t, n) => {
                              var i, r, s, a, c, d;
                              if (
                                (null === (i = t.content) || void 0 === i
                                  ? void 0
                                  : i._id) &&
                                !(null === l || void 0 === l
                                  ? void 0
                                  : l.has(
                                      null === (r = t.content) || void 0 === r
                                        ? void 0
                                        : r._id
                                    ))
                              )
                                return (0, o.jsx)(
                                  x.Z,
                                  {
                                    contentData: t.content,
                                    index: n,
                                    subAttributeContentData: (
                                      null === (s = t.content) || void 0 === s
                                        ? void 0
                                        : s.nestedAttributeIds
                                    )
                                      ? (0, v.kN)(
                                          e,
                                          null === (a = t.content) ||
                                            void 0 === a
                                            ? void 0
                                            : a.nestedAttributeIds
                                        )
                                      : [],
                                    subLabelContentData: (
                                      null === (c = t.content) || void 0 === c
                                        ? void 0
                                        : c.nestedLabelIds
                                    )
                                      ? (0, v.kN)(
                                          e,
                                          null === (d = t.content) ||
                                            void 0 === d
                                            ? void 0
                                            : d.nestedLabelIds
                                        )
                                      : [],
                                  },
                                  n
                                );
                            }),
                          })
                        : !s &&
                          (null === n || void 0 === n ? void 0 : n.type) &&
                          (0, o.jsx)(x.Z, { contentData: n }),
                      s && (0, o.jsx)(f.Z, {}),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        w = n(2196),
        k = n(953666),
        C = n(4369);
      const S = (e) =>
          !!(null === e || void 0 === e
            ? void 0
            : e.find((e) =>
                e.components ? S(e.components) : !!e.waitSeconds
              )),
        N = (0, a.ZL)((e) => ({
          container: {
            width: "100%",
            padding: 20,
            background: "white",
            position: "fixed",
            bottom: 0,
            right: 0,
            borderTop: `1px solid ${e.colors.gray20}`,
            display: "flex",
          },
          startButton: {
            backgroundColor: C.w.ScaleBlue,
            color: "white",
            borderRadius: "0.5rem",
            marginLeft: "auto",
            display: "inline-block",
          },
          manuallyDisabled: { filter: "grayscale(1)", pointerEvents: "none" },
        }));
      var z = () => {
          const e = N(),
            {
              isCorpUser: t,
              components: n,
              startButtonText: i,
              handleStart: r,
              setOpenQuiz: s,
              enableQuiz: l,
              customStartButton: c,
            } = (0, m.k)(),
            d = !t && S(n);
          return (0, o.jsx)("div", {
            className: e.container,
            children: (0, o.jsx)(k.Z, {
              title: d ? "Please read all sections before tasking" : "",
              arrow: !0,
              placement: "top",
              children: (0, o.jsx)("div", {
                className: e.startButton,
                children: c
                  ? (0, o.jsx)("div", {
                      className: d ? e.manuallyDisabled : "",
                      children: c,
                    })
                  : i &&
                    (0, o.jsx)(a.zx, {
                      type: "primary",
                      disabled: d,
                      onClick: d
                        ? () => null
                        : () => {
                            l ? s(!0) : r();
                          },
                      children: l ? "Go To Concept Review" : i,
                    }),
              }),
            }),
          });
        },
        I = n(792739),
        L = n(285556),
        T = n(60042),
        E = n.n(T),
        P = n(679892),
        R = n.n(P),
        O = n(687192),
        Z = n(176832),
        D = n(271682),
        H = n(718755),
        A = n(449863),
        G = n(376189);
      function B(e, t, n, o, i, r, s) {
        try {
          var a = e[r](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      function F(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var r = e.apply(t, n);
            function s(e) {
              B(r, o, i, s, a, "next", e);
            }
            function a(e) {
              B(r, o, i, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function $(e, t, n) {
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
      function W(e) {
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
              $(e, t, n[t]);
            });
        }
        return e;
      }
      var _ = ({ linkedTask: e }) => {
        const { 0: t, 1: n } = (0, i.useState)(!1),
          r = (0, i.useRef)(),
          { 0: a, 1: l } = (0, i.useState)(void 0),
          { data: c = {} } = (0, A.Z)(e, !0, void 0, !0),
          { params: d, response: u, type: m, projectId: p } = c,
          { fetchUnprocessedAttachments: h } = (0, G.Z)();
        return (
          (0, i.useEffect)(() => {
            let e = !1;
            function o() {
              return (o = F(function* () {
                if (!t && d && m && p) {
                  l(void 0), n(!0);
                  const t = d;
                  var o;
                  if (
                    t &&
                    t.attachments &&
                    t.attachments.length > 0 &&
                    s().every(t.attachments, (e) => "unprocessed" === e.type)
                  )
                    t.attachments = yield h(
                      null !== (o = t.attachments) && void 0 !== o ? o : []
                    );
                  e ||
                    l(
                      W({}, H.sampleTask, {
                        assignment: { params: t, projectId: p, type: m },
                        type: m,
                        params: t,
                        fixResponse: u,
                        timerDisabled: !0,
                        shouldWarnOnExit: !1,
                        readOnly: !0,
                        editable: !1,
                        isCustomer: !0,
                        showHeader: !1,
                        isTaxonomyDisplay: !0,
                        showFooter: !1,
                      })
                    );
                }
                n(!1);
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
          }, [d, m, p]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              a &&
                (0, o.jsx)(o.Fragment, {
                  children: (0, o.jsx)(i.Suspense, {
                    fallback: (0, o.jsx)(O.Z, {
                      style: { paddingBottom: "16px" },
                    }),
                    children: (0, o.jsx)("div", {
                      className: "jsx-3df91aece280295b component",
                      children: (0, o.jsx)(D.M5, {
                        children: (0, o.jsx)(Z.Z, {
                          taskType: a.type,
                          taskProps: a,
                          taskRef: r,
                          isTaxonomyDisplay: !0,
                          compact: !0,
                        }),
                      }),
                    }),
                  }),
                }),
              (0, o.jsx)(R(), {
                id: "3df91aece280295b",
                children:
                  ".component{height:400px}.component,.component .task{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:0;min-width:0;width:100%;overflow:auto}.task__splitpane{position:relative;overflow:auto}",
              }),
            ],
          })
        );
      };
      const M = (0, a.ZL)((e) => ({
        container: {
          background: "white",
          padding: 20,
          borderRadius: 8,
          border: `1px solid ${e.colors.gray10}`,
          marginTop: 20,
        },
        optionBox: {
          border: `1px solid ${e.colors.gray50}`,
          padding: 10,
          textAlign: "center",
          "&:hover": { cursor: "pointer" },
        },
        selected: {
          background: "rgba(43, 153, 216, 0.05)",
          color: e.colors.blue,
          border: `1px solid ${e.colors.blue}`,
        },
        optionWrapper: {
          display: "flex",
          marginTop: 20,
          "& > div": { flex: 1 },
          "& > div:first-child": { borderRadius: "8px 0 0 8px" },
          "& > div:last-child": { borderRadius: "0 8px 8px 0" },
        },
        exampleContainer: {
          borderRadius: 8,
          overflow: "hidden",
          "box-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
        correct: {
          background: "#EAFAF6",
          color: "#03A574",
          border: "1px solid #03A574",
        },
        incorrect: {
          background: "#FDEEEE",
          color: "#B71C1C",
          border: "1px solid #B71C1C",
        },
        error: { color: e.colors.red, margin: "10px 0", fontWeight: 500 },
      }));
      var V = ({
          linkedTask: e,
          updateQuiz: t,
          isCorrect: n,
          response: i,
          index: r,
        }) => {
          const s = M();
          return (0, o.jsxs)("div", {
            className: s.container,
            children: [
              (0, o.jsxs)("h3", {
                children: [r, ". Is this labelled correctly?"],
              }),
              void 0 !== n &&
                !i &&
                (0, o.jsx)("div", {
                  className: s.error,
                  children: "This question is not complete.",
                }),
              !1 === n &&
                i &&
                (0, o.jsx)("div", {
                  className: s.error,
                  children:
                    "This answer is incorrect, please change and resubmit. If you\u2019re stuck check out the instructions",
                }),
              (0, o.jsx)("div", {
                className: s.exampleContainer,
                children: e && (0, o.jsx)(_, { linkedTask: e }),
              }),
              (0, o.jsx)("div", {
                className: s.optionWrapper,
                children: [
                  { description: "Yes", option: "good" },
                  { description: "No", option: "bad" },
                ].map(({ description: e, option: r }, a) => {
                  const l = i === r;
                  return (0, o.jsxs)(
                    "div",
                    {
                      className: E()(s.optionBox, {
                        [s.selected]: l,
                        [s.correct]: l && n,
                        [s.incorrect]: l && !1 === n,
                      }),
                      onClick: () => t(r),
                      children: [
                        l &&
                          "boolean" === typeof n &&
                          (0, o.jsx)(I.G, { icon: n ? "check" : "times" }),
                        "   " + e,
                      ],
                    },
                    a
                  );
                }),
              }),
            ],
          });
        },
        q = n(826585),
        U = n(257881);
      function Q(e, t, n, o, i, r, s) {
        try {
          var a = e[r](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      function Y(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var r = e.apply(t, n);
            function s(e) {
              Q(r, o, i, s, a, "next", e);
            }
            function a(e) {
              Q(r, o, i, s, a, "throw", e);
            }
            s(void 0);
          });
        };
      }
      function X(e, t, n) {
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
      function J(e) {
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
              X(e, t, n[t]);
            });
        }
        return e;
      }
      const K = (0, a.ZL)((e) => ({
        background: {
          position: "relative",
          padding: "30px 20px",
          background: "linear-gradient(180deg, #ECF8EB 300px, #F5F5F5 0%)",
          color: e.colors.gray75,
          height: "fit-content",
          paddingBottom: 100,
          "& h3": { fontWeight: 500, margin: "0 0 5px 0" },
        },
        containerScalers: {
          maxWidth: "1080px",
          margin: "auto",
          position: "relative",
          [e.breakpoints.down("md")]: { maxWidth: "95vw", padding: "0 16px" },
        },
        header: { display: "flex", justifyContent: "space-between" },
        buttonWrapper: {
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          "& svg": { marginLeft: 10 },
        },
        quizContainer: { position: "relative" },
        overlay: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "white",
          opacity: 0.1,
        },
        emptyQuiz: { margin: "auto 0", textAlign: "center" },
        loader: {
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 9999,
          background: "rgb(249,249,249,0.3)",
        },
      }));
      var ee = () => {
          const {
              title: e,
              handleStart: t,
              startButtonText: n,
              isCorpUser: r,
              setOpenQuiz: l,
              quiz: c,
              setQuiz: d,
              timeSpentOnQuiz: u,
              isMobileView: p,
            } = (0, m.k)(),
            h = K(),
            { 0: g, 1: x } = (0, i.useState)(
              !!(null === c || void 0 === c ? void 0 : c.isFinished) || null
            ),
            { 0: f, 1: b } = (0, i.useState)(!1),
            v = (0, i.useRef)(null),
            y = !r,
            j = (0, i.useCallback)(
              s().debounce(
                Y(function* () {
                  c &&
                    ((c.timeSpentSec += u), yield U.Z.selfserve.updateQuiz(c));
                }),
                1e3,
                { leading: !0, trailing: !0 }
              ),
              [c]
            );
          if (!c) return null;
          const w = null === c || void 0 === c ? void 0 : c.submission,
            k = (function () {
              var e = Y(function* () {
                x(null), b(!0);
                const e = yield U.Z.selfserve.getNextQuiz(c.taxonomyVersion);
                (null === e || void 0 === e ? void 0 : e.quiz)
                  ? d(e.quiz)
                  : d(void 0),
                  S(),
                  b(!1);
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            C = (function () {
              var e = Y(function* () {
                try {
                  b(!0), (c.timeSpentSec += u);
                  const e = yield U.Z.selfserve.submitQuiz(c),
                    { quiz: t } = e;
                  d(t), x(t.isFinished), S();
                } catch (e) {
                  (0, L.cF)(e);
                }
                b(!1);
              });
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            S = () => {
              null !== v.current &&
                v.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            },
            N = (0, o.jsx)(a.zx, {
              type: "primary",
              disabled: y,
              onClick: y
                ? () => null
                : () => {
                    t(), x(null);
                  },
              children: n,
            }),
            z = (0, o.jsx)(a.zx, {
              type: "error",
              onClick: k,
              children: "Try Again",
            });
          return p
            ? (0, o.jsxs)("div", {
                style: {
                  padding: 20,
                  margin: "0 auto",
                  width: "fit-content",
                  background:
                    "linear-gradient(180deg, #ECF8EB 300px, #F5F5F5 0%)",
                },
                children: [
                  (0, o.jsxs)("h2", {
                    className: h.header,
                    children: [
                      "Concept Review [",
                      e,
                      "]",
                      " ",
                      (0, o.jsx)(a.zx, {
                        variant: "outlined",
                        type: "secondary",
                        onClick: () => l(!1),
                        children: "View Instructions",
                      }),
                    ],
                  }),
                  (0, o.jsx)("br", {}),
                  (0, o.jsx)("h1", {
                    children:
                      "Sorry we don't support the concept view on small screen. Please switch to your desktop to complete the quiz",
                  }),
                  (0, o.jsx)("img", {
                    style: {
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      transform: "translateX(25%)",
                    },
                    src: "/static/images/unavailable/group.svg",
                    width: "400px",
                  }),
                ],
              })
            : (0, o.jsxs)("div", {
                className: h.background,
                children: [
                  f &&
                    (0, o.jsx)("div", {
                      className: h.loader,
                      children: (0, o.jsx)(a.$j, { center: !0, size: "md" }),
                    }),
                  (0, o.jsxs)("div", {
                    className: h.containerScalers,
                    ref: v,
                    children: [
                      (0, o.jsxs)("h2", {
                        className: h.header,
                        children: [
                          "Concept Review [",
                          e,
                          "]",
                          " ",
                          (0, o.jsx)(a.zx, {
                            variant: "outlined",
                            type: "secondary",
                            onClick: () => l(!1),
                            children: "View Instructions",
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        children:
                          "Now that you\u2019ve read the instructions, it\u2019s time to review your knowledge. Please complete the following questions correctly to start tasking. If you\u2019re unsure about any of these concepts, remember that you can always refer to the instructions in another tab to ensure that you get the right answers.",
                      }),
                      (0, o.jsx)("br", {}),
                      (null === w || void 0 === w ? void 0 : w.length)
                        ? (0, o.jsxs)(o.Fragment, {
                            children: [
                              "boolean" === typeof g &&
                                (0, o.jsx)(a.bZ, {
                                  severity: g ? "success" : "error",
                                  action: g ? N : z,
                                  children: g
                                    ? (0, o.jsx)("div", {
                                        children:
                                          "Congratulations you reached 100%! ",
                                      })
                                    : (0, o.jsxs)("div", {
                                        children: [
                                          "You did not receive a 100% score on your submission. Please retry.",
                                          " ",
                                          (0, o.jsx)("strong", {
                                            children: "Try Again",
                                          }),
                                          " on the bottom of the page",
                                        ],
                                      }),
                                }),
                              (0, o.jsxs)("div", {
                                className: h.quizContainer,
                                children: [
                                  null !== g &&
                                    (0, o.jsx)("div", { className: h.overlay }),
                                  w.map((e, t) => {
                                    switch (e.type) {
                                      case q.e8.ScenarioLabeling:
                                        return null;
                                      case q.e8.ExampleClassification:
                                        return (0, o.jsx)(
                                          V,
                                          J(
                                            {
                                              updateQuiz: (e) => {
                                                const n = [...w];
                                                (n[t].response = e),
                                                  (n[t].isCorrect = void 0),
                                                  d(
                                                    J({}, c, { submission: n })
                                                  ),
                                                  j();
                                              },
                                            },
                                            e,
                                            { index: t + 1 }
                                          )
                                        );
                                      default:
                                        return null;
                                    }
                                  }),
                                ],
                              }),
                              (0, o.jsx)("div", {
                                className: h.buttonWrapper,
                                children:
                                  "boolean" === typeof g
                                    ? !c.isFinished &&
                                      (0, o.jsxs)(a.zx, {
                                        type: "primary",
                                        onClick: k,
                                        children: [
                                          "Try Again ",
                                          (0, o.jsx)(I.G, { icon: "redo" }),
                                        ],
                                      })
                                    : (0, o.jsxs)(a.zx, {
                                        type: "primary",
                                        onClick: C,
                                        children: [
                                          "Submit Answers ",
                                          (0, o.jsx)(I.G, { icon: "arrow-up" }),
                                        ],
                                      }),
                              }),
                            ],
                          })
                        : (0, o.jsxs)("div", {
                            className: h.emptyQuiz,
                            children: [
                              (0, o.jsx)("h3", {
                                children:
                                  "Sorry we don't have quiz for this instruction right now, due to no examples available",
                              }),
                              (0, o.jsxs)("h3", {
                                children: ["please start tasking directly ", N],
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              });
        },
        te = ee;
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
      const oe = () => {
        const {
          isLoading: e,
          openQuiz: t,
          components: n,
          isEmbedded: r,
          isMobileView: c,
          setIsMobileView: d,
        } = (0, m.k)();
        return (
          (0, i.useEffect)(() => {
            const e = s().debounce(() => d((0, l.isSmallScreen)()), 400, {
              leading: !0,
              trailing: !0,
            });
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e), e.cancel();
              }
            );
          }, []),
          t
            ? (0, o.jsx)(te, {})
            : e
            ? (0, o.jsx)("div", {
                style: { marginTop: "50vh" },
                children: (0, o.jsx)(a.$j, {}),
              })
            : s().isEmpty(n)
            ? (0, o.jsxs)("div", {
                style: {
                  margin: "0 auto",
                  width: "fit-content",
                  padding: "10px",
                },
                children: [
                  (0, o.jsx)("br", {}),
                  (0, o.jsx)("h1", {
                    children:
                      "Instructions have not been created for this project yet.",
                  }),
                  (0, o.jsx)("img", {
                    style: {
                      position: "absolute",
                      bottom: 0,
                      transform: "translate(20%)",
                    },
                    src: "/static/images/unavailable/group.svg",
                    width: "600px",
                  }),
                  (0, o.jsx)("br", {}),
                  (0, o.jsx)("br", {}),
                  r && (0, o.jsx)(z, {}),
                ],
              })
            : (0, o.jsxs)(o.Fragment, {
                children: [
                  c ? (0, o.jsx)(w.Z, {}) : (0, o.jsx)(j, {}),
                  r && (0, o.jsx)(z, {}),
                ],
              })
        );
      };
      var ie = (e) =>
        (0, o.jsx)(
          m.S,
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
                  ne(e, t, n[t]);
                });
            }
            return e;
          })({}, e, { children: (0, o.jsx)(oe, {}) })
        );
    },
    2196: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var o = n(824246),
        i = n(827378),
        r = n(298784),
        s = n.n(r),
        a = n(604375),
        l = n(792739),
        c = n(944765),
        d = n(936874),
        u = n(591771),
        m = n(232021),
        p = n(563924),
        h = n(391779),
        g = n(457013),
        x = n(547939),
        f = n(60042),
        b = n.n(f);
      const v = (0, a.ZL)((e) => ({
        toggleSection: {
          padding: "8px 10px",
          borderBottom: `1px solid ${e.colors.gray05}`,
          display: "flex",
          alignItems: "center",
          "& > small": { paddingLeft: 10 },
        },
        switch: {
          position: "relative",
          display: "inline-block",
          width: 30,
          height: 17,
          "& input": { opacity: 0, width: 0, height: 0 },
        },
        slider: {
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: ({ checked: e }) => (e ? "#2196F3" : "#ccc"),
          "-webkit-transition": ".4s",
          transition: ".4s",
          borderRadius: 17,
          "&:before": {
            position: "absolute",
            content: '""',
            height: 13,
            width: 13,
            left: 2,
            bottom: 2,
            backgroundColor: "white",
            "-webkit-transition": ".4s",
            transition: ".4s",
            borderRadius: "50%",
          },
        },
        beforeStyle: {
          "&:before": {
            "-webkit-transform": "translateX(13px)",
            "-ms-transform": "translateX(13px)",
            transform: "translateX(13px)",
          },
        },
      }));
      var y = () => {
          const { enableDiff: e, setEnableDiff: t } = (0, c.k)(),
            n = v({ checked: e });
          return (0, o.jsxs)("div", {
            className: n.toggleSection,
            children: [
              (0, o.jsxs)("label", {
                className: n.switch,
                children: [
                  (0, o.jsx)("input", {
                    type: "checkbox",
                    checked: e,
                    onChange: (e) => {
                      t(e.target.checked);
                    },
                  }),
                  (0, o.jsx)("span", {
                    className: b()(n.slider, { [n.beforeStyle]: e }),
                  }),
                ],
              }),
              (0, o.jsx)("small", { children: " Show instructional changes" }),
            ],
          });
        },
        j = n(713222),
        w = n(691067),
        k = n(416534),
        C = n(883761),
        S = n(575334),
        N = n(1034);
      const z = ({ projectId: e }) => {
        const { 0: t, 1: n } = (0, i.useState)(!1),
          { data: r, executeGet: s } = (0, C.b)(),
          { 0: a, 1: c } = (0, i.useState)(0);
        (0, i.useEffect)(() => {
          const t = { projectId: e },
            n = { status: S.Y.Confirmed, limit: 10 };
          s(t, n);
        }, [s, e]);
        const d = (0, o.jsxs)("div", {
          style: { display: "flex", alignItems: "center", gap: 10 },
          children: [
            (0, o.jsxs)("div", {
              children: ["Stellar example (", a + 1, " of ", r.length, ")"],
            }),
            (0, o.jsxs)("div", {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "space-between",
              },
              children: [
                (0, o.jsx)(j.J, {
                  onClick: () => {
                    a > 0 && c(a - 1);
                  },
                  disabled: 0 === a,
                  children: (0, o.jsx)(l.G, { icon: "angle-left" }),
                }),
                (0, o.jsx)(j.J, {
                  onClick: () => {
                    a < r.length - 1 && c(a + 1);
                  },
                  disabled: a === r.length - 1,
                  children: (0, o.jsx)(l.G, { icon: "angle-right" }),
                }),
              ],
            }),
          ],
        });
        return r.length > 0
          ? (0, o.jsxs)("div", {
              className: "scaleui scale-theme scale-tailwind",
              children: [
                (0, o.jsx)(w.u, {
                  open: t,
                  onClose: () => n(!1),
                  className: "scaleui outlier-theme",
                  title: d,
                  innerClassName: "w-full h-full",
                  children: (0, o.jsxs)("div", {
                    className: "scaleui scale-theme scale-tailwind",
                    children: [
                      r[a].feedbackString,
                      (0, o.jsx)(N.o, { projectId: e, taskId: r[a].task }),
                    ],
                  }),
                }),
                (0, o.jsxs)(k.zx, {
                  variant: "secondary",
                  onClick: () => n(!0),
                  style: {
                    display: "flex",
                    gap: 10,
                    justifyContent: "space-between",
                  },
                  children: [
                    (0, o.jsx)(l.G, { icon: "tasks" }),
                    "Stellar examples",
                  ],
                }),
              ],
            })
          : null;
      };
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
      const L = (0, a.ZL)((e) => ({
        sidePanelContainer: {
          width: ({
            isOpen: e,
            isMobileView: t,
            enableSidePanel: n,
            biggerSidePanel: o,
          }) => (t && !n ? "100%" : e ? (o ? 800 : 320) : 0),
          display: ({ isOpen: e, isMobileView: t }) =>
            e || t ? "inline-block" : "none",
          borderRight: `1px solid ${e.colors.gray05}`,
          transition: "width 0.5s",
          paddingBottom: 190,
          overflow: "hidden",
          maxHeight: "90vh",
        },
        header: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 7px 10px 10px",
          color: e.colors.gray75,
          borderBottom: `1px solid ${e.colors.gray05}`,
          "& > strong": { marginRight: "auto" },
        },
        rightButtons: { display: "flex", gap: "0.25rem" },
        btn: {
          background: "none",
          color: e.colors.gray50,
          border: "none",
          padding: 0,
          font: "inherit",
          cursor: "pointer",
          outline: "inherit",
          frontWeight: 500,
          marginRight: 5,
          "&:hover": { color: e.colors.gray75 },
        },
        wrapper: { display: "flex" },
        btnwrapper: { display: "flex", paddingLeft: 12 },
        title: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
          "& > div:first-child": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        },
        typeIcon: {
          width: 15,
          height: 15,
          borderRadius: 3,
          fontSize: 10,
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        },
        navBtn: {
          border: "none",
          background: "none",
          borderRadius: 3,
          "&:hover": { cursor: "pointer" },
        },
      }));
      var T = ({ isOpen: e, onClose: t, projectId: n, assignmentId: r }) => {
          var f, b;
          const {
              title: v,
              components: j,
              selectedPath: w,
              setSelectedPath: k,
              selectedSection: C,
              isMobileView: S,
              enableSidePanel: N,
              searchResult: T,
              setSearchResult: E,
            } = (0, c.k)(),
            { 0: P, 1: R } = (0, i.useState)(!1),
            O = L({
              isOpen: e,
              isMobileView: S,
              enableSidePanel: N,
              biggerSidePanel: P,
            }),
            { 0: Z, 1: D } = (0, i.useState)({ backward: [], forward: [] });
          if (
            ((0, i.useEffect)(() => {
              const t = document.querySelector(".bar-container");
              t && (t.style.display = e ? "none" : "flex");
            }),
            s().isEmpty(j))
          )
            return (0, o.jsxs)("div", {
              style: {
                margin: "0 auto",
                width: "fit-content",
                display: e ? "block" : "none",
              },
              children: [
                (0, o.jsx)("br", {}),
                (0, o.jsx)("br", {}),
                (0, o.jsx)("h2", {
                  children:
                    "Instructions have not been created for this project yet.",
                }),
                (0, o.jsx)("img", {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    transform: "translate(70%,-200%)",
                    width: "200px",
                  },
                  src: "/static/images/unavailable/group.svg",
                  width: "600px",
                }),
              ],
            });
          const H = (e) => {
              const { backward: t } = Z;
              t.push(w),
                k(e),
                D(
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                          Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                              n,
                              e
                            ).enumerable;
                          })
                        )),
                        o.forEach(function (t) {
                          I(e, t, n[t]);
                        });
                    }
                    return e;
                  })({}, Z, { backward: [...t], forward: [] })
                );
            },
            A = [];
          null === j ||
            void 0 === j ||
            j.forEach(({ nodeType: e }) => {
              A.includes(e) || A.push(e);
            });
          let G = (0, o.jsx)("div", {
              children: null !== v && void 0 !== v ? v : "Instructions",
            }),
            B = null;
          if (null === C || void 0 === C ? void 0 : C.title) {
            var F, $;
            const e =
                null ===
                  ($ =
                    null === C ||
                    void 0 === C ||
                    null === (F = C.title) ||
                    void 0 === F
                      ? void 0
                      : F.toLowerCase()) || void 0 === $
                  ? void 0
                  : $.includes("workflow"),
              { iconName: t, iconColor: n } = e
                ? x.mz.workflow
                : (C.type && x.mz[C.type]) || { iconName: "", iconColor: "" };
            (B = (0, o.jsx)("span", {
              className: O.typeIcon,
              style: { background: n + "26" },
              children: (0, o.jsx)(l.G, { icon: t, color: n }),
            })),
              (G = (0, o.jsxs)("div", {
                children: [B, s().startCase(C.title)],
              }));
          }
          return (0, o.jsxs)("div", {
            className: O.sidePanelContainer,
            children: [
              (0, o.jsxs)("div", {
                className: O.header,
                children: [
                  (0, o.jsx)(a.u, {
                    arrow: !0,
                    title: "Table of contents",
                    placement: "bottom",
                    children: (0, o.jsx)("button", {
                      className: O.btn,
                      onClick: () => {
                        H([]), E(null);
                      },
                      children: (0, o.jsx)(l.G, {
                        icon: "home",
                        color: "var(--color-RemoGray50)",
                      }),
                    }),
                  }),
                  (0, o.jsxs)("strong", {
                    className: O.title,
                    children: [
                      G,
                      !!(null === C || void 0 === C ? void 0 : C.waitSeconds) &&
                        (0, o.jsx)(m.Z, { waitSeconds: C.waitSeconds }),
                    ],
                  }),
                  N &&
                    (0, o.jsxs)("div", {
                      className: O.rightButtons,
                      children: [
                        (0, o.jsx)(a.u, {
                          arrow: !0,
                          title: "Expand width",
                          placement: "bottom",
                          children: (0, o.jsx)("button", {
                            className: O.btn,
                            style: { marginRight: "4px" },
                            onClick: () => {
                              R(!P);
                            },
                            children: P
                              ? (0, o.jsx)(l.G, {
                                  icon: "chevron-double-left",
                                  color: "var(--color-RemoGray50)",
                                })
                              : (0, o.jsx)(l.G, {
                                  icon: "chevron-double-right",
                                  color: "var(--color-RemoGray50)",
                                }),
                          }),
                        }),
                        (0, o.jsx)(a.u, {
                          arrow: !0,
                          title: "Open in new tab",
                          placement: "bottom",
                          children: (0, o.jsx)("button", {
                            className: O.btn,
                            onClick: () => {
                              window.open(
                                window.location.origin +
                                  `/instruction/${n}?assignmentId=${r}`,
                                "_blank"
                              );
                            },
                            children: (0, o.jsx)(l.G, {
                              icon: "share-square",
                              color: "var(--color-RemoGray50)",
                            }),
                          }),
                        }),
                        (0, o.jsx)("button", {
                          className: O.btn,
                          onClick: t,
                          children: "\u2715",
                        }),
                      ],
                    }),
                ],
              }),
              "boolean" === typeof e ? (0, o.jsx)(y, {}) : (0, o.jsx)(g.Z, {}),
              (0, o.jsxs)("div", {
                className: O.wrapper,
                children: [
                  (0, o.jsx)("button", {
                    className: O.navBtn,
                    style: {
                      color: (
                        null === (f = Z.backward) || void 0 === f
                          ? void 0
                          : f.length
                      )
                        ? "var(--color-RemoGray50)"
                        : "var(--color-RemoGray20)",
                    },
                    onClick: () => {
                      const { backward: e, forward: t } = Z;
                      if (!e.length) return;
                      let n = e.pop();
                      for (; n === e[e.length - 1]; ) n = e.pop();
                      t.unshift(w),
                        k(n),
                        D({ backward: [...e], forward: [...t] });
                    },
                    children: (0, o.jsx)(l.G, {
                      icon: "angle-left",
                      size: "2x",
                    }),
                  }),
                  (0, o.jsx)("button", {
                    className: O.navBtn,
                    style: {
                      color: (
                        null === (b = Z.forward) || void 0 === b
                          ? void 0
                          : b.length
                      )
                        ? "var(--color-RemoGray50)"
                        : "var(--color-RemoGray20)",
                    },
                    onClick: () => {
                      const { backward: e, forward: t } = Z;
                      if (!t.length) return;
                      let n = t.shift();
                      for (; n === t[0]; ) n = t.shift();
                      e.push(w), k(n), D({ backward: [...e], forward: [...t] });
                    },
                    children: (0, o.jsx)(l.G, {
                      icon: "angle-right",
                      size: "2x",
                    }),
                  }),
                  (0, o.jsx)(d.Z, {}),
                ],
              }),
              T
                ? (0, o.jsx)(h.Z, {})
                : C
                ? (0, o.jsx)(p.Z, { contentData: C })
                : (0, o.jsx)(u.Z, { handleSetSelectedPath: H }),
              n &&
                (0, o.jsx)("div", {
                  className: O.btnwrapper,
                  children: (0, o.jsx)(z, { projectId: n }),
                }),
            ],
          });
        },
        E = T;
    },
    85913: function (e, t, n) {
      var o = n(824246),
        i = n(827378),
        r = n(604375),
        s = n(792739),
        a = n(944765);
      const l = (0, r.ZL)((e) => ({
        container: {
          borderRadius: 7,
          border: `1px solid ${e.colors.gray10}`,
          overflow: "hidden",
          marginTop: 15,
        },
        emptyStyle: {},
        sectionName: {
          fontWeight: 500,
          fontSize: 13,
          color: e.colors.gray50,
          background: e.colors.gray05,
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          justifyContent: "space-between",
          textTransform: "uppercase",
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        },
        sidePanelContentStyle: {
          padding: "5px 10px",
          "&  p": { lineHeight: 1.4 },
        },
        fullPageContentStyle: {
          padding: "10px 20px",
          "&  p": { margin: 0 },
          "&  strong": { fontWeight: 700 },
        },
        toggle: { "&:hover": { cursor: "pointer" } },
      }));
      t.Z = ({ sectionName: e, isNew: t, children: n, defaultOpen: r }) => {
        const c = l(),
          { isMobileView: d } = (0, a.k)(),
          { 0: u, 1: m } = (0, i.useState)(null === r || void 0 === r || r);
        return (0, o.jsxs)("div", {
          className: d ? c.emptyStyle : c.container,
          children: [
            (0, o.jsxs)("div", {
              className: c.sectionName,
              onClick: () => {
                m(!u);
              },
              children: [
                (0, o.jsxs)("span", {
                  children: [
                    e,
                    t &&
                      (0, o.jsx)("span", {
                        style: { color: "var(--color-RemoRed" },
                        children: " New!",
                      }),
                  ],
                }),
                (0, o.jsx)("span", {
                  className: c.toggle,
                  children: (0, o.jsx)(s.G, {
                    icon: u ? "chevron-down" : "chevron-up",
                  }),
                }),
              ],
            }),
            u &&
              (0, o.jsx)("div", {
                className: d ? c.sidePanelContentStyle : c.fullPageContentStyle,
                children: n,
              }),
          ],
        });
      };
    },
    1034: function (e, t, n) {
      n.d(t, {
        o: function () {
          return d;
        },
      });
      var o = n(824246),
        i = n(827378),
        r = n(722030),
        s = n(285556);
      function a(e, t, n, o, i, r, s) {
        try {
          var a = e[r](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      function l(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, i) {
            var r = e.apply(t, n);
            function s(e) {
              a(r, o, i, s, l, "next", e);
            }
            function l(e) {
              a(r, o, i, s, l, "throw", e);
            }
            s(void 0);
          });
        };
      }
      const c = i.lazy(() =>
          Promise.all([
            n.e(34701),
            n.e(68143),
            n.e(11642),
            n.e(82178),
            n.e(97778),
            n.e(86260),
            n.e(29736),
            n.e(16732),
            n.e(34051),
            n.e(12816),
            n.e(24292),
            n.e(95023),
            n.e(8704),
            n.e(74707),
            n.e(72086),
            n.e(79913),
            n.e(56696),
            n.e(13959),
            n.e(90321),
            n.e(51505),
            n.e(36407),
            n.e(47792),
            n.e(19059),
            n.e(49529),
            n.e(77045),
            n.e(7539),
            n.e(35045),
            n.e(82746),
            n.e(20692),
            n.e(63909),
            n.e(96815),
            n.e(87823),
            n.e(22826),
            n.e(5962),
            n.e(18289),
            n.e(67984),
            n.e(73853),
            n.e(19288),
            n.e(47650),
            n.e(46608),
            n.e(55100),
            n.e(82625),
            n.e(65566),
            n.e(19775),
            n.e(51941),
            n.e(31573),
            n.e(74891),
            n.e(42081),
          ]).then(n.bind(n, 418196))
        ),
        d = ({ projectId: e, taskId: t }) => {
          const { 0: n, 1: a } = (0, i.useState)(),
            { 0: d, 1: u } = (0, i.useState)(),
            { 0: m, 1: p } = (0, i.useState)(),
            { 0: h, 1: g } = (0, i.useState)(!1),
            { 0: x, 1: f } = (0, i.useState)();
          function b() {
            return (b = l(function* (e) {
              g(!0);
              try {
                const {
                  params: t,
                  responses: n,
                  chatTaskFeatureConfig: o,
                  reviewLevel: i,
                } = yield (0, s.ZP)(
                  null,
                  `internal/courses/chat-preview-content/${e}`
                );
                t && n && (a(t), u(n), f(i), p(o));
              } catch (t) {
                (0, s.cF)(t, "Failed to fetch ChatPromptAndResponses");
              }
              g(!1);
            })).apply(this, arguments);
          }
          return (
            (0, i.useEffect)(() => {
              !(function (e) {
                b.apply(this, arguments);
              })(t);
            }, [t]),
            (0, o.jsx)("div", {
              className: "scaleui scale-theme scale-tailwind",
              children: h
                ? (0, o.jsx)(r.$, { size: "md", className: "m-4" })
                : n &&
                  d &&
                  (0, o.jsx)(i.Suspense, {
                    fallback: (0, o.jsx)(r.$, { size: "md", className: "m-4" }),
                    children: (0, o.jsx)(c, {
                      params: n,
                      responses: d,
                      reviewLevel: x,
                      chatTaskFeatureConfig: m,
                      projectId: e,
                      readOnly: !0,
                    }),
                  }),
            })
          );
        };
    },
    883761: function (e, t, n) {
      n.d(t, {
        b: function () {
          return a;
        },
      });
      var o = n(780892),
        i = n(827378),
        r = n(257881);
      function s(e, t, n, o, i, r, s) {
        try {
          var a = e[r](s),
            l = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(l) : Promise.resolve(l).then(o, i);
      }
      const a = () => {
        const { 0: e, 1: t } = (0, i.useState)([]),
          [n, a] = (0, o.Z)(
            (function () {
              var e,
                n =
                  ((e = function* (e, n) {
                    if (!e) return;
                    const o = yield r.Z.genai.getStellarGenAITasksByProject(
                      e,
                      n
                    );
                    t(o.stellarTasks);
                  }),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (o, i) {
                      var r = e.apply(t, n);
                      function a(e) {
                        s(r, o, i, a, l, "next", e);
                      }
                      function l(e) {
                        s(r, o, i, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function (e, t) {
                return n.apply(this, arguments);
              };
            })(),
            []
          );
        return { data: e, getState: n, executeGet: a };
      };
    },
  },
]);
