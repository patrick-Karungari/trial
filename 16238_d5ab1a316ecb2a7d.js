"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [16238],
  {
    280742: function (e, t, i) {
      var n = i(824246);
      t.Z = ({ text: e, width: t }) =>
        (0, n.jsx)("div", {
          className: "font-medium text-xs leading-5 whitespace-normal",
          style: { maxWidth: `${t}px` },
          children: e,
        });
    },
    675749: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        a = i(68649),
        s = i(285556),
        o = i(188359),
        l = i(298784),
        c = i.n(l),
        d = i(60042),
        u = i.n(d),
        p = i(746332);
      t.Z = ({ auditErrorBatchId: e, taskId: t }) => {
        const i = (0, a.ZL)((e) => ({
            feedbackButton: {
              width: "140px",
              height: "32px",
              borderRadius: "8px",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFFFFF",
              userSelect: "none",
              cursor: "pointer",
              [`@media (max-width: ${p.MOBILE_THRESHOLD})`]: {
                width: "120px",
                height: "28px",
                fontSize: "12px",
              },
            },
            newFeedbackColor: { background: "#29CD9C" },
            oldFeedbackColor: { background: e.colors.gray20 },
          }))(),
          { values: l } = (0, o.Z)("feedback-center-read-ids"),
          [d, h] = r.useState([]);
        r.useEffect(() => {
          (0, s.ZP)(null, `internal/scaler/audit_error_batch/${e}`, {
            method: "GET",
          })
            .then((e) => {
              h(e.auditErrorEntries.map((e) => e._id));
            })
            .catch((e) => {
              (0, s.vj)(e);
            });
        }, [e, h]);
        const m = c().difference(d, c().keys(l)).length,
          x = 0 !== m;
        return (0, n.jsx)("a", {
          className: u()(
            i.feedbackButton,
            x ? i.newFeedbackColor : i.oldFeedbackColor
          ),
          href: `/redirect?url=https://www.remotasks.com/error_batch?batchId=${e}&taskId=${t}&label=AuditErrorHeader`,
          target: "_blank",
          rel: "noopener noreferrer",
          children: x ? `New Feedback! (${m})` : "Your Feedback",
        });
      };
    },
    343743: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        a = i(68649),
        s = i(285556),
        o = i(298784),
        l = i.n(o),
        c = i(60042),
        d = i.n(c),
        u = i(351818),
        p = i(599789),
        h = i(101409),
        m = i(604375),
        x = i(809334),
        f = i(50682),
        g = i.n(f);
      const v = (0, a.ZL)((e) => ({
        bucketAnnouncement: {
          width: "170px",
          height: "32px",
          borderRadius: "8px",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFFFF",
          userSelect: "none",
          cursor: "pointer",
        },
        content: {
          maxWidth: 520,
          border: `1px solid ${e.colors.green}`,
          margin: "10px",
        },
        alertContent: {
          maxWidth: 520,
          border: "1px solid red",
          margin: "10px",
        },
        warningContent: {
          maxWidth: 520,
          border: "1px solid orange",
          margin: "10px",
        },
        gold: {
          background: e.colors.gold,
          "&:hover": { background: e.colors.gold },
        },
        multiplierLabel: { color: e.colors.green },
        silver: { background: "#C0bfbf", "&:hover": { background: "#C0bfbf" } },
        bronze: { background: "#e28743", "&:hover": { background: "#e28743" } },
        unranked: {
          background: "#FBCEB1",
          "&:hover": { background: "#FBCEB1" },
        },
        badge: { position: "absolute", top: "-10px", right: "-4px" },
      }));
      t.Z = ({ workerId: e, projectId: t, reviewer: i }) => {
        var a, o, c;
        const f = v(),
          [b, j] = r.useState(),
          [y, w] = r.useState(!1),
          k = i ? "Reviewer" : "Tasker";
        r.useEffect(() => {
          (0, s.ZP)(null, `internal/scaler/accuracy_bucket_pay/${t}`, {
            method: "GET",
          })
            .then((e) => {
              j(e);
            })
            .catch((e) => {
              (0, s.vj)(e);
            });
        }, [e, t, j]);
        const C = {
            [p.ProjectPayTier.Gold]: {
              style: f.gold,
              description: `Amazing Work! You are a Gold ${k} - one of the best. \n      Maintain your accuracy to remain in Gold and keep your high pay.`,
              title: `Gold ${k} `,
              emoji: "\ud83e\udd47",
            },
            [p.ProjectPayTier.Silver]: {
              style: f.silver,
              description: `Good Job! You are a Silver ${k}. Improve your accuracy to become Gold and receive even higher pay.`,
              title: `Silver ${k} `,
              emoji: "\ud83e\udd48",
            },
            [p.ProjectPayTier.Bronze]: {
              style: f.bronze,
              description: `Keep working hard! You are a Bronze ${k}. Review courses, improve your accuracy, and become Silver / Gold to receive even higher pay.`,
              title: `Bronze ${k} `,
              emoji: "\ud83e\udd49",
            },
            [p.ProjectPayTier.Unranked]: {
              style: f.unranked,
              description: `You are an unranked ${k}. We value your work! Continue tasking, improve your accuracy, and task faster to become ranked!`,
              title: `Unranked ${k} `,
              emoji: "",
            },
          },
          T = {
            [u.We.Alert]: {
              emoji: "\ud83d\udea8",
              tooltip: "Your tier has recently changed",
            },
            [u.We.Warning]: {
              emoji: "\u26a0\ufe0f",
              tooltip: "You are at risk for demotion",
            },
            [u.We.Info]: { emoji: "\u2139\ufe0f", tooltip: "Happy Tasking" },
          },
          S =
            null === b ||
            void 0 === b ||
            null === (a = b.messages) ||
            void 0 === a
              ? void 0
              : a[u.We.Info],
          N =
            null === b ||
            void 0 === b ||
            null === (o = b.messages) ||
            void 0 === o
              ? void 0
              : o[u.We.Warning],
          I =
            null === b ||
            void 0 === b ||
            null === (c = b.messages) ||
            void 0 === c
              ? void 0
              : c[u.We.Alert],
          E = l().isEmpty(I)
            ? l().isEmpty(N)
              ? u.We.Info
              : u.We.Warning
            : u.We.Alert,
          O = null === b || void 0 === b ? void 0 : b.tier;
        return l().isNil(O)
          ? null
          : (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)(x.Z, {
                  "data-tip": !0,
                  "data-for": "notification-tooltip",
                  className: d()(f.bucketAnnouncement, C[O].style),
                  onClick: () => w(!y),
                  children: [
                    (0, n.jsx)(h.Z, { emoji: C[O].emoji }),
                    C[O].title,
                    (0, n.jsx)(h.Z, { emoji: C[O].emoji }),
                    l().isNil(E)
                      ? null
                      : (0, n.jsxs)("span", {
                          className: f.badge,
                          children: [
                            (0, n.jsx)(h.Z, { emoji: T[E].emoji }),
                            (0, n.jsx)(g(), {
                              id: "notification-tooltip",
                              type: "dark",
                              children: T[E].tooltip,
                            }),
                          ],
                        }),
                  ],
                }),
                (0, n.jsxs)(m.Vq, {
                  open: y,
                  children: [
                    null === I || void 0 === I
                      ? void 0
                      : I.map((e) =>
                          (0, n.jsxs)(
                            m.cZ,
                            {
                              className: f.alertContent,
                              children: [
                                (0, n.jsx)(m.$N, { children: "Alert!" }),
                                (0, n.jsx)(m.fS, { children: e }),
                              ],
                            },
                            e
                          )
                        ),
                    null === N || void 0 === N
                      ? void 0
                      : N.map((e) =>
                          (0, n.jsxs)(
                            m.cZ,
                            {
                              className: f.warningContent,
                              children: [
                                (0, n.jsx)(m.$N, { children: "Warning!" }),
                                (0, n.jsx)(m.fS, { children: e }),
                              ],
                            },
                            e
                          )
                        ),
                    null === S || void 0 === S
                      ? void 0
                      : S.map((e) =>
                          (0, n.jsxs)(
                            m.cZ,
                            {
                              className: f.content,
                              children: [
                                (0, n.jsx)(m.$N, { children: "Info!" }),
                                (0, n.jsx)(m.fS, { children: e }),
                              ],
                            },
                            e
                          )
                        ),
                    (0, n.jsxs)(m.cZ, {
                      className: f.content,
                      children: [
                        (0, n.jsx)(m.$N, { children: C[O].title }),
                        (0, n.jsx)(m.fS, { children: C[O].description }),
                      ],
                    }),
                    (0, n.jsx)(m.kX, {
                      children: (0, n.jsx)(x.Z, {
                        color: "primary",
                        fullWidth: !0,
                        variant: "text",
                        onClick: () => w(!1),
                        children: "Continue Tasking",
                      }),
                    }),
                  ],
                }),
              ],
            });
      };
    },
    674791: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        a = i(60042),
        s = i.n(a),
        o = i(161320),
        l = i.n(o),
        c = i(50682),
        d = i.n(c),
        u = i(642321),
        p = i(954344),
        h = i(390547),
        m = i(840323),
        x = i(947424),
        f = i(634509),
        g = i(71995),
        v = i(124954),
        b = i(186107),
        j = i(777712),
        y = i(148340),
        w = i(101409),
        k = i(68649),
        C = i(285556),
        T = i(575904);
      const S = (0, k.ZL)({
          eligibleButton: {
            width: "140px",
            height: "32px",
            background: "#29CD9C",
            borderRadius: "8px",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
            userSelect: "none",
            cursor: "pointer",
          },
          moneyBagEmoji: { marginRight: 8 },
          dialogContainer: {
            maxWidth: "664px;",
            minHeight: "464px",
            maxHeight: "496px",
          },
          dialogTitle: {
            maxHeight: 80,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
          headerText: {
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "20px",
          },
          dollarSignIcon: { marginRight: "24px", color: "#2B99D8" },
          closeButton: { marginLeft: "auto" },
          dialogContent: { display: "flex", flexDirection: "column" },
          accuracyInfo: {
            background: "#F8F8F8",
            borderRadius: "4px",
            fontSize: "13px",
            marginTop: "16px",
            padding: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: 16,
          },
          explanationText: { fontSize: "14px" },
          explanationMessage: { fontSize: "14px" },
          infoIcon: {
            display: "flex",
            paddingRight: 8,
            color: "rgba(0,0,0,0.5)",
          },
          bonusHeaderContent: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
          tooltipInfoIcon: { display: "flex", paddingLeft: 8 },
          blowThresholdIcon: {
            display: "flex",
            color: "black",
            paddingLeft: 8,
          },
          bonusPriceContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
          accuracyText: { marginLeft: "auto" },
          accuracyPercentage: { marginLeft: "8px", fontWeight: 500 },
          tableContainer: {
            marginTop: 16,
            overflowY: "scroll",
            maxHeight: 196,
            minHeight: 128,
            flexGrow: 1,
          },
          headerCell: { padding: 8, backgroundColor: "white" },
          cell: { border: "none", padding: 8 },
          statusCell: {
            border: "none",
            padding: 8,
            display: "flex",
            flexDirection: "row",
            justifyContent: "baseline",
            alignItems: "center",
          },
          grey: { color: "#C4C4C4" },
          dotIcon: { display: "flex", paddingRight: 8 },
          red: { color: "#EA5F28" },
          green: { color: "#29CD9C" },
          disclaimerText: {
            width: "100%",
            textAlign: "center",
            fontSize: "13px",
            marginTop: "auto",
            marginBottom: 8,
          },
        }),
        N = () =>
          (0, n.jsx)("svg", {
            width: "11",
            height: "20",
            viewBox: "0 0 11 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              fill: "currentColor",
              d: "M7.84507 9.15289L3.79507 7.96789C3.32632 7.83289 3.00007 7.39414 3.00007 6.90664C3.00007 6.29539 3.49507 5.80039 4.10632 5.80039H6.59257C7.05007 5.80039 7.50007 5.93914 7.87507 6.19414C8.10382 6.34789 8.41132 6.31039 8.60632 6.11914L9.91132 4.84414C10.1776 4.58539 10.1401 4.15414 9.84382 3.92539C8.92507 3.20539 7.77757 2.80414 6.60007 2.80039V1.00039C6.60007 0.670391 6.33007 0.400391 6.00007 0.400391H4.80007C4.47007 0.400391 4.20007 0.670391 4.20007 1.00039V2.80039H4.10632C1.71757 2.80039 -0.202432 4.85164 0.0188181 7.28539C0.176318 9.01414 1.49632 10.4204 3.16132 10.9079L7.00507 12.0329C7.47382 12.1716 7.80007 12.6066 7.80007 13.0941C7.80007 13.7054 7.30507 14.2004 6.69382 14.2004H4.20757C3.75007 14.2004 3.30007 14.0616 2.92507 13.8066C2.69632 13.6529 2.38882 13.6904 2.19382 13.8816L0.888818 15.1566C0.622568 15.4154 0.660068 15.8466 0.956318 16.0754C1.87507 16.7954 3.02257 17.1966 4.20007 17.2004V19.0004C4.20007 19.3304 4.47007 19.6004 4.80007 19.6004H6.00007C6.33007 19.6004 6.60007 19.3304 6.60007 19.0004V17.1929C8.34757 17.1591 9.98632 16.1204 10.5638 14.4666C11.3701 12.1566 10.0163 9.78664 7.84507 9.15289Z",
            }),
          }),
        I = () =>
          (0, n.jsx)("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              fill: "currentColor",
              d: "M6.6681 4.99961L9.16985 2.49786C9.47685 2.19086 9.47685 1.69311 9.16985 1.38586L8.61385 0.829859C8.30685 0.522859 7.8091 0.522859 7.50185 0.829859L5.0001 3.33161L2.49835 0.829859C2.19135 0.522859 1.6936 0.522859 1.38635 0.829859L0.830348 1.38586C0.523348 1.69286 0.523348 2.19061 0.830348 2.49786L3.3321 4.99961L0.830348 7.50136C0.523348 7.80836 0.523348 8.30611 0.830348 8.61336L1.38635 9.16936C1.69335 9.47636 2.19135 9.47636 2.49835 9.16936L5.0001 6.66761L7.50185 9.16936C7.80885 9.47636 8.30685 9.47636 8.61385 9.16936L9.16985 8.61336C9.47685 8.30636 9.47685 7.80861 9.16985 7.50136L6.6681 4.99961Z",
            }),
          }),
        E = () =>
          (0, n.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              fill: "currentColor",
              d: "M6.9998 0.799805C3.57588 0.799805 0.799805 3.57688 0.799805 6.9998C0.799805 10.4247 3.57588 13.1998 6.9998 13.1998C10.4237 13.1998 13.1998 10.4247 13.1998 6.9998C13.1998 3.57688 10.4237 0.799805 6.9998 0.799805ZM6.9998 3.5498C7.5797 3.5498 8.0498 4.0199 8.0498 4.5998C8.0498 5.1797 7.5797 5.6498 6.9998 5.6498C6.4199 5.6498 5.9498 5.1797 5.9498 4.5998C5.9498 4.0199 6.4199 3.5498 6.9998 3.5498ZM8.3998 9.8998C8.3998 10.0655 8.26548 10.1998 8.0998 10.1998H5.8998C5.73413 10.1998 5.5998 10.0655 5.5998 9.8998V9.2998C5.5998 9.13413 5.73413 8.9998 5.8998 8.9998H6.1998V7.3998H5.8998C5.73413 7.3998 5.5998 7.26548 5.5998 7.0998V6.4998C5.5998 6.33413 5.73413 6.1998 5.8998 6.1998H7.4998C7.66548 6.1998 7.7998 6.33413 7.7998 6.4998V8.9998H8.0998C8.26548 8.9998 8.3998 9.13413 8.3998 9.2998V9.8998Z",
            }),
          }),
        O = () =>
          (0, n.jsx)("svg", {
            width: "8",
            height: "8",
            viewBox: "0 0 8 8",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("circle", {
              cx: "4",
              cy: "4",
              r: "4",
              fill: "currentColor",
            }),
          });
      t.Z = ({ projectId: e, isAttempter: t }) => {
        const [i, a] = r.useState(void 0),
          [o, c] = r.useState(!1),
          k = () => c(!1),
          P = S();
        if (
          (r.useEffect(() => {
            const i = {
              method: "GET",
              query: { projectId: e, isAttempter: t },
            };
            (0, C.ZP)(
              null,
              "internal/scaler/work/bonuses/progress/explanation",
              i
            )
              .then((e) => {
                a(e);
              })
              .catch((e) => {
                (0, C.vj)(e);
              });
          }, [e, t]),
          !i || !(0, T.mp)(i))
        )
          return null;
        const {
            tasks: R,
            acceptanceRate: L,
            acceptanceThreshold: Z,
            bonusAmountCents: A,
            message: _,
          } = i,
          B = `${(100 * L).toFixed(0)}%`,
          $ = `${(100 * Z).toFixed(0)}%`,
          z = `$${(A / 100).toFixed(2)}`,
          D = t ? "submit" : "review",
          M = t ? "Submitted" : "Reviewed",
          H = L >= Z;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: P.eligibleButton,
              onClick: () => c(!0),
              children: [
                (0, n.jsx)("span", {
                  className: P.moneyBagEmoji,
                  children: (0, n.jsx)(w.Z, { emoji: "\ud83d\udcb0" }),
                }),
                "Bonus Eligible",
              ],
            }),
            (0, n.jsxs)(u.Z, {
              "aria-labelledby": "customized-dialog-title",
              open: o,
              onClose: k,
              classes: { paper: P.dialogContainer },
              children: [
                (0, n.jsxs)(m.Z, {
                  disableTypography: !0,
                  id: "customized-dialog-title",
                  classes: { root: P.dialogTitle },
                  children: [
                    (0, n.jsx)("div", {
                      className: P.dollarSignIcon,
                      children: (0, n.jsx)(N, {}),
                    }),
                    (0, n.jsx)(p.Z, {
                      classes: { root: P.headerText },
                      children: "Bonus Eligible",
                    }),
                    (0, n.jsx)(h.Z, {
                      component: "div",
                      classes: { root: P.closeButton },
                      onClick: k,
                      children: (0, n.jsx)(I, {}),
                    }),
                  ],
                }),
                (0, n.jsxs)(x.Z, {
                  dividers: !0,
                  classes: { root: P.dialogContent },
                  children: [
                    (0, n.jsxs)(p.Z, {
                      gutterBottom: !0,
                      classes: { root: P.headerText },
                      children: [
                        "For every menu that gets accepted, you\u2019ll receive a ",
                        z,
                        " bonus!",
                      ],
                    }),
                    (0, n.jsxs)(p.Z, {
                      gutterBottom: !0,
                      classes: { root: P.explanationText },
                      children: [
                        "Menu transcription is a challenging task, so we will be rewarding high accuracy. For every menu you ",
                        D,
                        " that gets accepted, you'll receive a ",
                        z,
                        " bonus in addition to your regular pay.",
                      ],
                    }),
                    _ &&
                      (0, n.jsx)(p.Z, {
                        gutterBottom: !0,
                        classes: { root: P.explanationMessage },
                        children: (0, n.jsx)("strong", { children: _ }),
                      }),
                    (0, n.jsxs)(p.Z, {
                      gutterBottom: !0,
                      classes: { root: P.accuracyInfo },
                      children: [
                        (0, n.jsx)("span", {
                          className: P.infoIcon,
                          children: (0, n.jsx)(E, {}),
                        }),
                        (0, n.jsxs)("span", {
                          children: [
                            "You need to be above ",
                            $,
                            " acceptance to be eligible for this bonus.",
                          ],
                        }),
                        (0, n.jsx)("span", {
                          className: P.accuracyText,
                          children: "Your acceptance: ",
                        }),
                        (0, n.jsx)("span", {
                          className: s()({
                            [P.accuracyPercentage]: !0,
                            [P.green]: H,
                            [P.red]: !H,
                          }),
                          children: B,
                        }),
                      ],
                    }),
                    (0, n.jsx)(b.Z, {
                      classes: { root: P.tableContainer },
                      children: (0, n.jsxs)(f.Z, {
                        stickyHeader: !0,
                        children: [
                          (0, n.jsx)(j.Z, {
                            children: (0, n.jsxs)(y.Z, {
                              children: [
                                (0, n.jsx)(v.Z, {
                                  align: "left",
                                  className: P.headerCell,
                                  children: "Task ID",
                                }),
                                (0, n.jsx)(v.Z, {
                                  align: "left",
                                  className: P.headerCell,
                                  children: M,
                                }),
                                (0, n.jsx)(v.Z, {
                                  align: "left",
                                  className: P.headerCell,
                                  children: "Status",
                                }),
                                (0, n.jsx)(v.Z, {
                                  align: "left",
                                  className: P.headerCell,
                                  children: (0, n.jsxs)("div", {
                                    className: P.bonusHeaderContent,
                                    children: [
                                      "Bonus",
                                      (0, n.jsx)("div", {
                                        className: P.tooltipInfoIcon,
                                        "data-tip": !0,
                                        "data-for": "bonus-tooltip",
                                        children: (0, n.jsx)(E, {}),
                                      }),
                                      (0, n.jsx)(d(), {
                                        id: "bonus-tooltip",
                                        place: "top",
                                        children:
                                          "You will receive the bonus the week after you submit",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, n.jsx)(g.Z, {
                            children: R.slice(0, 30).map((e) =>
                              (0, n.jsxs)(
                                y.Z,
                                {
                                  children: [
                                    (0, n.jsx)(v.Z, {
                                      component: "th",
                                      scope: "row",
                                      classes: { root: P.cell },
                                      children: e.id,
                                    }),
                                    (0, n.jsx)(v.Z, {
                                      align: "left",
                                      classes: { root: P.cell },
                                      children: l()(e.submittedAt).fromNow(),
                                    }),
                                    (0, n.jsxs)(v.Z, {
                                      align: "left",
                                      classes: { root: P.statusCell },
                                      children: [
                                        (0, n.jsx)("div", {
                                          className: s()({
                                            [P.dotIcon]: !0,
                                            [P.green]:
                                              e.reviewStatus === T.cL.Accepted,
                                            [P.red]:
                                              e.reviewStatus === T.cL.Rejected,
                                            [P.grey]:
                                              e.reviewStatus === T.cL.Pending,
                                          }),
                                          children: (0, n.jsx)(O, {}),
                                        }),
                                        (0, n.jsx)("span", {
                                          className: s()({
                                            [P.grey]:
                                              e.reviewStatus === T.cL.Pending,
                                          }),
                                          children: e.reviewStatus,
                                        }),
                                      ],
                                    }),
                                    (0, n.jsx)(v.Z, {
                                      align: "left",
                                      classes: { root: P.cell },
                                      children:
                                        e.reviewStatus === T.cL.Pending
                                          ? (0, n.jsx)("span", {
                                              className: P.grey,
                                              children: "--",
                                            })
                                          : (0, n.jsx)("span", {
                                              className: s()({
                                                [P.green]:
                                                  e.reviewStatus ===
                                                    T.cL.Accepted && H,
                                                [P.grey]:
                                                  e.reviewStatus ===
                                                    T.cL.Accepted && !H,
                                              }),
                                              children: (0, n.jsxs)("div", {
                                                className:
                                                  P.bonusPriceContainer,
                                                children: [
                                                  "$",
                                                  (
                                                    (e.bonusAmount || 0) / 100
                                                  ).toFixed(2),
                                                  e.reviewStatus ===
                                                    T.cL.Accepted &&
                                                    !H &&
                                                    (0, n.jsxs)(n.Fragment, {
                                                      children: [
                                                        (0, n.jsx)("div", {
                                                          className:
                                                            P.blowThresholdIcon,
                                                          "data-tip": !0,
                                                          "data-for":
                                                            "below-threshold-tooltip",
                                                          children: (0, n.jsx)(
                                                            E,
                                                            {}
                                                          ),
                                                        }),
                                                        (0, n.jsxs)(d(), {
                                                          id: "below-threshold-tooltip",
                                                          place: "top",
                                                          children: [
                                                            "You must be above ",
                                                            $,
                                                            " acceptance to receive this bonus",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            }),
                                    }),
                                  ],
                                },
                                e.id
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(p.Z, {
                      classes: { root: P.disclaimerText },
                      children: (0, n.jsx)("em", {
                        children:
                          "This bonus only applies to this week and is subject to change.",
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
    445486: function (e, t, i) {
      var n = i(824246),
        r = i(679892),
        a = i.n(r),
        s = (i(827378), i(161320)),
        o = i.n(s),
        l = i(50682),
        c = i.n(l),
        d = i(101409),
        u = i(891765),
        p = i(629586),
        h = i(604375),
        m = i(746332);
      const x = (0, h.ZL)({
        bonusHeader: { textAlign: "center" },
        bonusProgress: {
          display: "flex",
          alignItems: "center",
          width: 400,
          marginLeft: 48,
          marginRight: 24,
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: {
            width: "auto",
            marginLeft: 0,
            marginRight: 0,
          },
        },
        bonusProgressContent: {
          marginLeft: 8,
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { marginLeft: 0 },
        },
        progressPrefix: {
          display: "none",
          userSelect: "none",
          marginRight: 8,
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { display: "inline" },
        },
        progressText: {
          color: "#2ecc71",
          userSelect: "none",
          marginLeft: 8,
          marginRight: 8,
        },
        progressBar: { flexGrow: 1, textAlign: "center" },
        progressCaption: {
          marginTop: 8,
          fontSize: 12,
          fontWeight: "bold",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { marginTop: 0 },
        },
        progressTooltip: {
          width: "240px",
          lineHeight: "1.5em",
          whiteSpace: "normal",
        },
      });
      t.Z = ({ bonus: e }) => {
        const {
            progress: t,
            target: i,
            name: r,
            currentPeriodEnd: s,
            amountPerPeriod: l,
            minAvgAccuracy: h,
            currentAccuracy: m,
          } = e,
          f = x(),
          g = o().utc(s).local().format("MMM Do ha"),
          v = ((l || 0) / 1e4).toFixed(2);
        let b = "",
          j = "";
        if (h)
          if (
            ((j += ` Average accuracy must be above ${
              100 * h
            }% to qualify and may take some time to update. You will earn your bonus once your work has been reviewed.`),
            m)
          ) {
            b = `Avg. accuracy: ${Math.round(
              100 * (Math.min(m, 1) + Number.EPSILON)
            )}% (need >${100 * h}% to qualify)`;
          } else b = `Average accuracy must be above ${100 * h}% to qualify.`;
        return (0, n.jsxs)("div", {
          className: "jsx-7f115ba039631152 " + (f.bonusHeader || ""),
          children: [
            (0, n.jsxs)("div", {
              "data-tip": !0,
              "data-for": "bonus-progress",
              className: "jsx-7f115ba039631152 " + (f.bonusProgress || ""),
              children: [
                (0, n.jsx)("div", {
                  className:
                    "jsx-7f115ba039631152 " + (f.bonusProgressContent || ""),
                  children: (0, n.jsxs)(p.x, {
                    medium: !0,
                    children: [
                      (0, n.jsx)("strong", {
                        className:
                          "jsx-7f115ba039631152 " + (f.progressPrefix || ""),
                        children: "Bonus:",
                      }),
                      (0, n.jsx)(d.Z, { emoji: "\ud83d\udcb0" }),
                      (0, n.jsxs)("strong", {
                        className:
                          "jsx-7f115ba039631152 " + (f.progressText || ""),
                        children: [t, "/", i],
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "jsx-7f115ba039631152 " + (f.progressBar || ""),
                  children: (0, n.jsx)(u.ZP, {
                    completed: t,
                    total: i,
                    fillColor: "#2ecc71",
                    backgroundColor: "#c4e5d2",
                  }),
                }),
                (0, n.jsx)(c(), {
                  id: "bonus-progress",
                  place: "bottom",
                  children: (0, n.jsxs)("div", {
                    className:
                      "jsx-7f115ba039631152 " + (f.progressTooltip || ""),
                    children: [
                      "You have completed ",
                      t,
                      " out of ",
                      i,
                      " tasks for bonus ",
                      r,
                      ". Do",
                      " ",
                      i - t,
                      " more tasks by ",
                      g,
                      " to get paid $",
                      v,
                      "!",
                      " ",
                      j && `(${j.trim()})`,
                    ],
                  }),
                }),
              ],
            }),
            b &&
              (0, n.jsx)("div", {
                className: "jsx-7f115ba039631152 " + (f.progressCaption || ""),
                children: b,
              }),
            (0, n.jsx)(a(), {
              id: "7f115ba039631152",
              children:
                'span[data-tip="true"].jsx-7f115ba039631152{margin-left:4px}',
            }),
          ],
        });
      };
    },
    555650: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        a = i(513091),
        s = i(68649),
        o = i(252708),
        l = i.n(o),
        c = i(604375),
        d = i(792739);
      function u(e, t, i, n, r, a, s) {
        try {
          var o = e[a](s),
            l = o.value;
        } catch (c) {
          return void i(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      const p = (0, s.ZL)({
        annabelLink: {
          maxWidth: 250,
          cursor: "pointer",
          color: "var(--color-RemoBlue)",
          textWrap: "wrap",
          padding: "0 1rem",
          fontWeight: 500,
        },
        annabelLinkButton: {
          width: 32,
          borderRadius: 16,
          background: "var(--color-RemoBlue)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          padding: "0.25rem 0",
          alignItems: "center",
        },
        dialogContent: { float: "right", display: "flex", gap: "0.5rem" },
      });
      function h({ subtaskId: e, triggerAutosave: t }) {
        const i = p(),
          { 0: s, 1: o } = (0, r.useState)(!0),
          { 0: h, 1: m } = (0, r.useState)(!1),
          x = (function () {
            var i,
              n =
                ((i = function* (i) {
                  e &&
                    (i &&
                      t &&
                      (l().info("Will redirect after autosaving..."),
                      yield t()),
                    window.open((0, a.y)(e), "_self"));
                }),
                function () {
                  var e = this,
                    t = arguments;
                  return new Promise(function (n, r) {
                    var a = i.apply(e, t);
                    function s(e) {
                      u(a, n, r, s, o, "next", e);
                    }
                    function o(e) {
                      u(a, n, r, s, o, "throw", e);
                    }
                    s(void 0);
                  });
                });
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        return s
          ? (0, n.jsxs)("div", {
              className: i.annabelLink,
              children: [
                (0, n.jsx)(c.u, {
                  arrow: !0,
                  title: "Will reload the page in the new tool",
                  children: (0, n.jsx)("span", {
                    onClick: () => {
                      t ? m(!0) : window.open((0, a.y)(e), "_self");
                    },
                    children:
                      "A new and improved annotation tool is available! ",
                  }),
                }),
                (0, n.jsx)(c.hU, {
                  onClick: () => o(!1),
                  size: "small",
                  children: (0, n.jsx)(d.G, {
                    icon: "times",
                    color: "gray",
                    size: "sm",
                  }),
                }),
                (0, n.jsxs)(c.Vq, {
                  open: h,
                  onClose: () => m(!1),
                  children: [
                    (0, n.jsx)(c.$N, {
                      children: "Autosave your work before switching tools?",
                    }),
                    (0, n.jsx)(c.cZ, {
                      children: (0, n.jsxs)("div", {
                        className: i.dialogContent,
                        children: [
                          (0, n.jsx)(c.zx, {
                            onClick: () => m(!1),
                            children: "Cancel",
                          }),
                          (0, n.jsx)(c.zx, {
                            type: "secondary",
                            onClick: () => x(!1),
                            children: "No",
                          }),
                          (0, n.jsx)(c.zx, {
                            type: "primary",
                            onClick: () => x(!0),
                            children: "Yes",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, n.jsx)(c.u, {
              arrow: !0,
              title: "There's a new and improved annotation tool!",
              children: (0, n.jsx)("div", {
                className: i.annabelLinkButton,
                onClick: () => o(!0),
                children: (0, n.jsx)(d.G, {
                  icon: "exclamation",
                  color: "white",
                }),
              }),
            });
      }
      t.Z = (0, r.memo)(h);
    },
    274521: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = i(824246),
        r = i(679892),
        a = i.n(r),
        s = i(827378),
        o = i(298784),
        l = i.n(o),
        c = i(50682),
        d = i.n(c),
        u = i(792739),
        p = i(101409);
      class h extends s.Component {
        render() {
          const e = this.props.vertical ? 8 : 16,
            t =
              l()
                .round(100 * (this.props.accuracy || 0), 2)
                .toString() + "%",
            i = "5d6a9dba33c6f9328611db8b" === this.props.project,
            r =
              l().isFinite(this.props.numCompleted) &&
              this.props.numCompleted > 0;
          return (0, n.jsxs)("div", {
            className:
              a().dynamic([
                [
                  "34e41aa109fbcca4",
                  [
                    this.props.vertical ? "font-size: 0.9em;" : "",
                    this.props.vertical ? "" : "width: 40%;",
                    this.props.vertical ? "flex-direction: column;" : "",
                    this.props.vertical ? "flex: 0.5;" : "",
                    e,
                    e / 2,
                    this.props.vertical ? "" : "  margin-left: 8px;",
                    e / 2,
                  ],
                ],
              ]) + " task-accuracy",
            children: [
              (0, n.jsxs)("div", {
                className:
                  a().dynamic([
                    [
                      "34e41aa109fbcca4",
                      [
                        this.props.vertical ? "font-size: 0.9em;" : "",
                        this.props.vertical ? "" : "width: 40%;",
                        this.props.vertical ? "flex-direction: column;" : "",
                        this.props.vertical ? "flex: 0.5;" : "",
                        e,
                        e / 2,
                        this.props.vertical ? "" : "  margin-left: 8px;",
                        e / 2,
                      ],
                    ],
                  ]) + " recent-quality",
                children: [
                  (0, n.jsx)("strong", {
                    className: a().dynamic([
                      [
                        "34e41aa109fbcca4",
                        [
                          this.props.vertical ? "font-size: 0.9em;" : "",
                          this.props.vertical ? "" : "width: 40%;",
                          this.props.vertical ? "flex-direction: column;" : "",
                          this.props.vertical ? "flex: 0.5;" : "",
                          e,
                          e / 2,
                          this.props.vertical ? "" : "  margin-left: 8px;",
                          e / 2,
                        ],
                      ],
                    ]),
                    children: i ? "Bonus Progress" : "Recent Quality",
                  }),
                  (0, n.jsx)("span", {
                    "data-tip": !0,
                    "data-for": "recent-quality",
                    className: a().dynamic([
                      [
                        "34e41aa109fbcca4",
                        [
                          this.props.vertical ? "font-size: 0.9em;" : "",
                          this.props.vertical ? "" : "width: 40%;",
                          this.props.vertical ? "flex-direction: column;" : "",
                          this.props.vertical ? "flex: 0.5;" : "",
                          e,
                          e / 2,
                          this.props.vertical ? "" : "  margin-left: 8px;",
                          e / 2,
                        ],
                      ],
                    ]),
                    children: i
                      ? (0, n.jsx)(p.Z, { emoji: "\ud83d\udcb0" })
                      : (0, n.jsx)(u.G, { icon: "question-circle" }),
                  }),
                  !l().isEmpty(this.props.topMistakes) &&
                    (0, n.jsx)("span", {
                      "data-tip": !0,
                      "data-for": "recent-mistakes",
                      className: a().dynamic([
                        [
                          "34e41aa109fbcca4",
                          [
                            this.props.vertical ? "font-size: 0.9em;" : "",
                            this.props.vertical ? "" : "width: 40%;",
                            this.props.vertical
                              ? "flex-direction: column;"
                              : "",
                            this.props.vertical ? "flex: 0.5;" : "",
                            e,
                            e / 2,
                            this.props.vertical ? "" : "  margin-left: 8px;",
                            e / 2,
                          ],
                        ],
                      ]),
                      children: (0, n.jsx)(u.G, {
                        icon: "exclamation-triangle",
                      }),
                    }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  a().dynamic([
                    [
                      "34e41aa109fbcca4",
                      [
                        this.props.vertical ? "font-size: 0.9em;" : "",
                        this.props.vertical ? "" : "width: 40%;",
                        this.props.vertical ? "flex-direction: column;" : "",
                        this.props.vertical ? "flex: 0.5;" : "",
                        e,
                        e / 2,
                        this.props.vertical ? "" : "  margin-left: 8px;",
                        e / 2,
                      ],
                    ],
                  ]) + " accuracy-bar",
                children: (0, n.jsx)("div", {
                  "data-tip": !0,
                  "data-for": "accuracy-bar-quality",
                  style: {
                    width: 100 * this.props.accuracy + "%",
                    filter: `hue-rotate(${
                      -140 * (1 - this.props.accuracy)
                    }deg)`,
                  },
                  className:
                    a().dynamic([
                      [
                        "34e41aa109fbcca4",
                        [
                          this.props.vertical ? "font-size: 0.9em;" : "",
                          this.props.vertical ? "" : "width: 40%;",
                          this.props.vertical ? "flex-direction: column;" : "",
                          this.props.vertical ? "flex: 0.5;" : "",
                          e,
                          e / 2,
                          this.props.vertical ? "" : "  margin-left: 8px;",
                          e / 2,
                        ],
                      ],
                    ]) + " accuracy",
                }),
              }),
              (0, n.jsx)(d(), {
                id: "recent-quality",
                place: "bottom",
                children: (0, n.jsx)("div", {
                  style: {
                    width: "240px",
                    lineHeight: "1.5em",
                    whiteSpace: "normal",
                  },
                  className: a().dynamic([
                    [
                      "34e41aa109fbcca4",
                      [
                        this.props.vertical ? "font-size: 0.9em;" : "",
                        this.props.vertical ? "" : "width: 40%;",
                        this.props.vertical ? "flex-direction: column;" : "",
                        this.props.vertical ? "flex: 0.5;" : "",
                        e,
                        e / 2,
                        this.props.vertical ? "" : "  margin-left: 8px;",
                        e / 2,
                      ],
                    ],
                  ]),
                  children: i
                    ? (0, n.jsxs)("span", {
                        className: a().dynamic([
                          [
                            "34e41aa109fbcca4",
                            [
                              this.props.vertical ? "font-size: 0.9em;" : "",
                              this.props.vertical ? "" : "width: 40%;",
                              this.props.vertical
                                ? "flex-direction: column;"
                                : "",
                              this.props.vertical ? "flex: 0.5;" : "",
                              e,
                              e / 2,
                              this.props.vertical ? "" : "  margin-left: 8px;",
                              e / 2,
                            ],
                          ],
                        ]),
                        children: [
                          "EARN A BONUS UP TO $15! If you complete 25 reviews in 24 hours with > 90% accuracy, you will get a bonus of $5! If you complete 50 reviews with > 90% accuracy in 24 hours, you will get a bonus of $15!",
                          r ? ` Your current accuracy is ${t}` : "",
                          r && this.props.accuracy < 0.9
                            ? " You have to raise your accuracy to be eligible for this bonus!"
                            : null,
                          " ",
                          void 0 !== this.props.numCompleted
                            ? ` You've completed ${
                                this.props.numCompleted
                              } tasks in the past day. ${
                                this.props.numCompleted < 50
                                  ? "Keep on going!"
                                  : ""
                              }`
                            : null,
                        ],
                      })
                    : (0, n.jsxs)("span", {
                        className: a().dynamic([
                          [
                            "34e41aa109fbcca4",
                            [
                              this.props.vertical ? "font-size: 0.9em;" : "",
                              this.props.vertical ? "" : "width: 40%;",
                              this.props.vertical
                                ? "flex-direction: column;"
                                : "",
                              this.props.vertical ? "flex: 0.5;" : "",
                              e,
                              e / 2,
                              this.props.vertical ? "" : "  margin-left: 8px;",
                              e / 2,
                            ],
                          ],
                        ]),
                        children: [
                          "Your recent quality is approximately ",
                          t,
                          ". Quality is calculated per project and only updates when we review your recent submissions. The higher your quality, the more you'll get paid!",
                        ],
                      }),
                }),
              }),
              (0, n.jsx)(d(), {
                id: "recent-mistakes",
                place: "bottom",
                children: (0, n.jsxs)("div", {
                  style: { width: "300px", lineHeight: "1.5em" },
                  className: a().dynamic([
                    [
                      "34e41aa109fbcca4",
                      [
                        this.props.vertical ? "font-size: 0.9em;" : "",
                        this.props.vertical ? "" : "width: 40%;",
                        this.props.vertical ? "flex-direction: column;" : "",
                        this.props.vertical ? "flex: 0.5;" : "",
                        e,
                        e / 2,
                        this.props.vertical ? "" : "  margin-left: 8px;",
                        e / 2,
                      ],
                    ],
                  ]),
                  children: [
                    "Recently, your top errors have been:",
                    l().map(this.props.topMistakes, (t, i) =>
                      (0, n.jsx)("div", {
                        className: a().dynamic([
                          [
                            "34e41aa109fbcca4",
                            [
                              this.props.vertical ? "font-size: 0.9em;" : "",
                              this.props.vertical ? "" : "width: 40%;",
                              this.props.vertical
                                ? "flex-direction: column;"
                                : "",
                              this.props.vertical ? "flex: 0.5;" : "",
                              e,
                              e / 2,
                              this.props.vertical ? "" : "  margin-left: 8px;",
                              e / 2,
                            ],
                          ],
                        ]),
                        children: `${i}, Error Rate: ${100 * t}%`,
                      })
                    ),
                  ],
                }),
              }),
              (0, n.jsx)(d(), {
                id: "accuracy-bar-quality",
                place: "bottom",
                children: (0, n.jsx)("div", {
                  className: a().dynamic([
                    [
                      "34e41aa109fbcca4",
                      [
                        this.props.vertical ? "font-size: 0.9em;" : "",
                        this.props.vertical ? "" : "width: 40%;",
                        this.props.vertical ? "flex-direction: column;" : "",
                        this.props.vertical ? "flex: 0.5;" : "",
                        e,
                        e / 2,
                        this.props.vertical ? "" : "  margin-left: 8px;",
                        e / 2,
                      ],
                    ],
                  ]),
                  children: t,
                }),
              }),
              (0, n.jsx)(a(), {
                id: "34e41aa109fbcca4",
                dynamic: [
                  this.props.vertical ? "font-size: 0.9em;" : "",
                  this.props.vertical ? "" : "width: 40%;",
                  this.props.vertical ? "flex-direction: column;" : "",
                  this.props.vertical ? "flex: 0.5;" : "",
                  e,
                  e / 2,
                  this.props.vertical ? "" : "  margin-left: 8px;",
                  e / 2,
                ],
                children: `.recent-quality.__jsx-style-dynamic-selector{${
                  this.props.vertical ? "font-size: 0.9em;" : ""
                }\n          }.task-accuracy.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 2em;${
                  this.props.vertical ? "" : "width: 40%;"
                }\n            ${
                  this.props.vertical ? "flex-direction: column;" : ""
                }\n            ${
                  this.props.vertical ? "flex: 0.5;" : ""
                }\n          }.accuracy-bar.__jsx-style-dynamic-selector{width:100%;height:${e}px;-webkit-border-radius:${
                  e / 2
                }px;-moz-border-radius:${e / 2}px;border-radius:${
                  e / 2
                }px;-webkit-flex:100;-ms-flex:100;flex:100;${
                  this.props.vertical ? "" : "  margin-left: 8px;"
                }\n            overflow: hidden;background:-webkit-linear-gradient(left,#e0e0e0,#ededed);background:-moz-linear-gradient(left,#e0e0e0,#ededed);background:-o-linear-gradient(left,#e0e0e0,#ededed);background:linear-gradient(to right,#e0e0e0,#ededed)}.accuracy.__jsx-style-dynamic-selector{background:-webkit-linear-gradient(left,#11ffbd,#aaffa9);background:-moz-linear-gradient(left,#11ffbd,#aaffa9);background:-o-linear-gradient(left,#11ffbd,#aaffa9);background:linear-gradient(to right,#11ffbd,#aaffa9);-webkit-border-radius:${
                  e / 2
                }px;-moz-border-radius:${e / 2}px;border-radius:${
                  e / 2
                }px;height:100%}span[data-tip="true"].__jsx-style-dynamic-selector{margin-left:4px}`,
              }),
            ],
          });
        }
      }
    },
    402213: function (e, t, i) {
      var n = i(824246),
        r = i(679892),
        a = i.n(r),
        s = i(608139),
        o = i.n(s),
        l = i(298784),
        c = i.n(l),
        d = i(827378),
        u = i(550814),
        p = i(942662),
        h = i(773851),
        m = i(775222);
      const x = `https://remotasks.zendesk.com/hc/en-us/articles/115008891388-my-accuracy-is-high-i-e-90-why-did-i-get-disabled-?${o().stringify(
          {
            utm_medium: "notification",
            utm_source: "remotasks",
            utm_campaign: "taskeraccuracy",
            utm_content: "warning",
          }
        )}`,
        f = (0, h.remotasksURL)("/feedback"),
        g = (0, n.jsx)(p.Z, {
          useRegularLink: !0,
          href: x,
          size: "sm",
          target: "_blank",
          rel: "noopener noreferrer",
          style: { marginLeft: 20 },
          children: "Learn More",
        });
      class v extends d.Component {
        componentDidMount() {
          m.c.track("Task Warning Banner Loaded");
        }
        getErrorQuestions(e) {
          return c().map(c().filter(c().map(e, "question")), c().startCase);
        }
        warningParamsText() {
          if (this.props.warningParams) {
            const e = this.getErrorQuestions(
                this.props.warningParams.warningCategories
              ),
              t = " on question";
            if (1 === e.length) {
              const i = e[0];
              return (0, n.jsxs)(n.Fragment, {
                children: [t, " ", (0, n.jsx)("strong", { children: i })],
              });
            }
            if (2 === e.length)
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  t,
                  "s ",
                  (0, n.jsx)("strong", { children: e[0] }),
                  " and ",
                  (0, n.jsx)("strong", { children: e[1] }),
                ],
              });
            if (e.length > 2) {
              const i = [t, "s "];
              for (const t of e.slice(0, e.length - 1))
                i.push((0, n.jsx)("strong", { children: t })), i.push(", ");
              return (
                i.push("and "),
                i.push((0, n.jsx)("strong", { children: c().last(e) })),
                (0, n.jsx)(n.Fragment, { children: i })
              );
            }
          }
          return "";
        }
        render() {
          const { isReview: e } = this.props;
          return (0, n.jsx)(u.Z, {
            severity: "error",
            action: g,
            children: (0, n.jsxs)("span", {
              className: "jsx-8699c06bb423f4d7",
              children: [
                (0, n.jsx)("strong", {
                  className: "jsx-8699c06bb423f4d7",
                  children: "WARNING:",
                }),
                " We have noticed that your recent work quality has been low",
                this.warningParamsText(),
                ".\xa0",
                e
                  ? "Please review every task carefully, or you may be disabled as a reviewer."
                  : (0, n.jsx)(d.Fragment, {
                      children:
                        "Please follow instructions carefully, or you may be disabled on this project.",
                    }),
                " Learn how to improve your quality at the ",
                (0, n.jsx)("a", {
                  href: f,
                  className: "jsx-8699c06bb423f4d7",
                  children: "feedback center",
                }),
                ".",
                (0, n.jsx)(a(), {
                  id: "8699c06bb423f4d7",
                  children:
                    ".alert{-webkit-justify-content:center;justify-content:center}",
                }),
              ],
            }),
          });
        }
      }
      t.Z = v;
    },
    315332: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = i(824246),
        r = i(298784),
        a = i(827378),
        s = i(691067),
        o = i(776845),
        l = i(49329),
        c = i(185272),
        d = i(339389),
        u = i(416534),
        p = i(428907);
      function h(e) {
        const { 0: t, 1: i } = (0, a.useState)(""),
          { 0: h, 1: m } = (0, a.useState)([]),
          { 0: x, 1: f } = (0, a.useState)(""),
          g = (0, r.cloneDeep)(e.categories);
        e.enableOtherReason && (g.other = "Other");
        const v = (0, r.keys)(g).map((e) => ({ id: e, label: g[e] })),
          b = (0, r.keys)(e.reasons[t]).map((i) => ({
            id: i,
            label: e.reasons[t][i],
          })),
          j = () => {
            i(""), m([]), f(""), e.onCloseModal();
          };
        return (
          (0, a.useEffect)(() => {
            t &&
              ("other" === t
                ? m(["other"])
                : e.requireExplanation && t
                ? m([e.categories[t]])
                : m([]));
          }, [t, e.requireExplanation]),
          (0, n.jsx)(s.u, {
            open: e.isModalOpen,
            onClose: j,
            title: e.headerText,
            innerClassName: "scale-tailwind",
            children: (0, n.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex flex-col gap-8",
                  children: [
                    (0, n.jsx)(o.ZT.Paragraph2, { children: e.bodyText }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, n.jsx)(o.ZT.Subtitle3, {
                          children: "Select a reason (Required)",
                        }),
                        (0, n.jsx)(l.f, {
                          buttons: v,
                          selected: t,
                          onSelect: (e) => i(e),
                        }),
                        b.map((e) =>
                          (0, n.jsx)(
                            c.X,
                            {
                              id: e.id,
                              label: e.label,
                              checked: h.includes(e.id),
                              onChange: () =>
                                m((t) =>
                                  (0, p.ZP)(t, (t) => {
                                    t.includes(e.id)
                                      ? t.splice(t.indexOf(e.id), 1)
                                      : t.push(e.id);
                                  })
                                ),
                            },
                            e.id
                          )
                        ),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, n.jsxs)(o.ZT.Subtitle3, {
                          children: [
                            "Add a comment",
                            " ",
                            e.requireExplanation || "other" === t
                              ? "(Required)"
                              : "(Optional)",
                          ],
                        }),
                        (0, n.jsx)(d.K, {
                          onChange: (e) => f(e.target.value),
                          value: x,
                          placeholder: e.explanationPlaceholder,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex gap-2 justify-end",
                  children: [
                    (0, n.jsx)(u.zx, {
                      size: "lg",
                      variant: "neutral",
                      onClick: j,
                      children: "Cancel",
                    }),
                    (0, n.jsx)(u.zx, {
                      size: "lg",
                      disabled:
                        ("other" !== t && 0 === h.length) ||
                        ((e.requireExplanation || "other" === t) && !x),
                      onClick: () => e.handleSubmit(h.join(","), x),
                      children: e.confirmButtonText,
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    250822: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = i(824246),
        r = i(827378),
        a = i(986004),
        s = i(431350),
        o = i(315332);
      function l(e, t, i) {
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
      function c(e) {
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
              l(e, t, i[t]);
            });
        }
        return e;
      }
      function d(e) {
        const { 0: t, 1: i } = (0, r.useState)(!1),
          l = "open" in e ? e.open : t,
          d = (t) => {
            e.onOpenChange ? e.onOpenChange(t) : i(t);
          };
        return (0, n.jsxs)("div", {
          children: [
            !e.avoidButtonRendering &&
              (0, n.jsx)(
                s.zx,
                {
                  htmlType: "button",
                  style: e.style,
                  onClick: () => d(!0),
                  disabled: e.disabled,
                  children: e.buttonText || "Skip",
                },
                "skipTask"
              ),
            (0, n.jsx)(o.Z, {
              handleSubmit: e.handleSkip,
              isModalOpen: l,
              onCloseModal: () => d(!1),
              reasons: e.enableOstrichMathSkip
                ? {}
                : c(
                    {},
                    a.SKIP_REASONS,
                    e.reportEnabled ? a.REPORT_REASONS : {},
                    e.bid ? a.SKIP_BID_REASONS : {},
                    e.enableNotEquippedSkip ? a.NOT_EQUIPPED_SKIP_REASONS : {}
                  ),
              categories: e.enableOstrichMathSkip
                ? c({}, a.OSTRICH_MATH_SKIP_CATEGORIES, a.REPORT_CATEGORIES)
                : c(
                    {},
                    e.enableBadPrelabelSkip
                      ? a.BAD_PRELABEL_TASK_SKIP_CATEGORIES
                      : {},
                    a.SKIP_CATEGORIES,
                    e.reportEnabled ? a.REPORT_CATEGORIES : {},
                    e.bid ? a.SKIP_BID_CATEGORIES : {},
                    e.isInstructionTask
                      ? a.INSTRUCTION_TASK_SKIP_CATEGORIES
                      : {},
                    e.enableNotEquippedSkip
                      ? a.NOT_EQUIPPED_SKIP_CATEGORIES
                      : {}
                  ),
              headerText: e.skipHeaderText || "Skip this task",
              bodyText:
                e.skipBodyText ||
                "You always have the option to skip a task. Please help us understand why so that we can make tasking better for you.",
              confirmButtonText: e.confirmButtonText || "Skip Task",
              explanationPlaceholder:
                e.explanationPlaceholder || "I'm skipping this task because...",
              requireExplanation: e.enableOstrichMathSkip,
            }),
          ],
        });
      }
    },
    355602: function (e, t, i) {
      var n = i(824246),
        r = (i(827378), i(542280)),
        a = i(307885),
        s = i(97716);
      t.Z = ({ taskMetadata: e, fromReviewHeader: t }) => {
        const i = t
          ? (0, n.jsx)("a", {
              style: { textDecoration: "underline" },
              children: (0, n.jsx)("strong", { children: "Metadata" }),
            })
          : (0, n.jsx)("a", {
              style: { color: r.ZP.colors.periwinkle100 },
              children: (0, n.jsx)("strong", { children: "Metadata" }),
            });
        return (0, n.jsx)("div", {
          style: { marginRight: r.ZP.spacing(2) },
          children: (0, n.jsx)(a.Z, {
            className: "",
            popover: (0, n.jsx)("div", {
              style: { width: 450, padding: 12 },
              children: (0, n.jsx)(s.X, {
                src: e,
                enableClipboard: !1,
                name: !1,
                displayDataTypes: !1,
                displayObjectSize: !1,
              }),
            }),
            targetOpen: i,
            targetClosed: i,
          }),
        });
      };
    },
    660807: function (e, t, i) {
      var n = i(824246),
        r = i(679892),
        a = i.n(r),
        s = i(827378),
        o = i(298784),
        l = i.n(o),
        c = i(473631),
        d = i(792739),
        u = i(518496),
        p = i(4369),
        h = i(746332),
        m = i(629586),
        x = i(68649),
        f = i(60042),
        g = i.n(f),
        v = i(161320),
        b = i.n(v),
        j = i(281706),
        y = i(730643);
      t.Z = (e) => {
        const t = e.claim,
          i = e.taskId,
          r = (0, x.ZL)({
            container: {
              display: "flex",
              alignItems: "center",
              marginLeft: "36px",
              [`@media (max-width: ${h.MOBILE_THRESHOLD})`]: {
                flexDirection: "column",
                alignItems: "start",
                marginLeft: "0",
              },
            },
            metaItem: {
              [`@media (max-width: ${h.MOBILE_THRESHOLD})`]: {
                display: "flex",
              },
            },
            deadline: { display: "flex", alignItems: "center", gap: "4px" },
            itemKey: {
              [`@media (max-width: ${h.MOBILE_THRESHOLD})`]: {
                marginRight: "8px",
              },
            },
            itemValue: { opacity: 0.5 },
          })(),
          {
            checkedAtClientTime: o,
            checkedAt: f,
            idleMinutes: v,
            maxClaim: w,
          } = Object.assign(
            {
              checkedAtClientTime: new Date(),
              checkedAt: new Date(),
              maxClaim: new Date(),
              idleMinutes: 1,
            },
            t
          ),
          k = new Date(Date.now() - o.getTime() + f.getTime()),
          C = t.claimedUntil || new Date(),
          T = (0, c.ZP)(C, k, "minutes") || 0,
          S = v,
          N = T >= 0.2 * S && T < 0.8 * S,
          I = T >= 0.8 * S ? p.w.RemoGreen : N ? p.w.RemoGold : p.w.RemoRed,
          E = (function (e, t) {
            const i = b()(e).utc(),
              n = b()(t).utc(),
              r = i.diff(n, "days"),
              a = i.diff(n, "hours") % 24,
              s = i.diff(n, "minutes") % 60;
            return `${r > 0 ? r + " days, " : ""}${a} hours, ${s} ${
              s > 1 ? "minutes" : "minute"
            }`;
          })(C, k),
          O = S > 120 ? `${l().round(S / 60, 1)} hours` : `${S} minutes`,
          P = (0, n.jsxs)("div", {
            className: r.metaItem,
            children: [
              (0, n.jsx)("div", {
                className: r.itemKey,
                children: (0, n.jsx)(m.x, {
                  medium: !0,
                  children: "Task Expires",
                }),
              }),
              (0, n.jsxs)("div", {
                style: { display: "flex", alignItems: "center" },
                children: [
                  (0, n.jsx)("span", {
                    style: { color: I, marginRight: "8px", fontSize: "10px" },
                    children: (0, n.jsx)(d.G, { icon: "circle" }),
                  }),
                  (0, n.jsx)("span", {
                    className: r.itemValue,
                    children: (0, n.jsx)(m.x, { children: E }),
                  }),
                ],
              }),
            ],
          }),
          R = (0, n.jsxs)("div", {
            className: r.metaItem,
            children: [
              (0, n.jsx)("div", {
                className: r.itemKey,
                children: (0, n.jsx)(m.x, {
                  medium: !0,
                  children: "Idle Time",
                }),
              }),
              (0, n.jsxs)("div", {
                style: { display: "flex", alignItems: "center" },
                children: [
                  (0, n.jsx)("span", {
                    style: { color: I, marginRight: "8px", fontSize: "10px" },
                    children: (0, n.jsx)(d.G, { icon: "circle" }),
                  }),
                  (0, n.jsx)("span", {
                    className: r.itemValue,
                    children: (0, n.jsx)(m.x, { children: O }),
                  }),
                ],
              }),
            ],
          }),
          L = new Intl.DateTimeFormat("default", {
            weekday: "long",
            hour: "numeric",
            minute: "numeric",
          }).format(w),
          Z = (0, n.jsxs)("div", {
            className: r.metaItem,
            children: [
              (0, n.jsxs)("div", {
                className: g()(r.deadline, r.itemKey),
                children: [
                  (0, n.jsx)(m.x, { medium: !0, children: "Deadline" }),
                  " ",
                  (0, n.jsx)(d.G, {
                    icon: "question-circle",
                    onClick: () => {
                      _(!0);
                    },
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: r.itemValue,
                children: (0, n.jsx)(m.x, { children: L }),
              }),
            ],
          }),
          [A, _] = s.useState(!1),
          B = document.getElementById("claim_timer_parent_element"),
          $ = (0, n.jsxs)(u.ZP, {
            open: A,
            anchorOrigin: { vertical: "bottom", horizontal: "left" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            anchorEl: B,
            children: [
              (0, n.jsxs)("div", {
                style: { width: "400px", padding: "5px 10px 10px 10px" },
                onMouseEnter: () => {
                  _(!0);
                },
                onMouseLeave: () => {
                  _(!1);
                },
                className: "jsx-7322804cda4cbeaa",
                children: [
                  (0, n.jsx)("h5", {
                    className: "jsx-7322804cda4cbeaa",
                    children: "What is the Deadline?",
                  }),
                  (0, n.jsx)("p", {
                    className: "jsx-7322804cda4cbeaa",
                    children:
                      "This is the hard expiration date for submitting your task. As long as you keep doing work in the task, expiration time will be increased up to this date.",
                  }),
                  (0, n.jsx)("h5", {
                    className: "jsx-7322804cda4cbeaa",
                    children: "What is the Idle Time?",
                  }),
                  (0, n.jsx)("p", {
                    className: "jsx-7322804cda4cbeaa",
                    children:
                      "This is how long you have until your task expires due to lack of activity. The maximum Idle Time depends on the current task type and project.",
                  }),
                  (0, n.jsx)("p", {
                    className: "jsx-7322804cda4cbeaa",
                    children:
                      "As long as you are actively working on the task, your task will not expire.",
                  }),
                  (0, n.jsx)("h5", {
                    className: "jsx-7322804cda4cbeaa",
                    children:
                      "My Idle Time is going down, even though I have been working on the task!",
                  }),
                  (0, n.jsx)("p", {
                    className: "jsx-7322804cda4cbeaa",
                    children:
                      "This can happen when we are unable to reach our servers. Check to make sure that you have a stable connection to the internet.",
                  }),
                  (0, n.jsx)("a", {
                    onClick: () => {
                      _(!1);
                    },
                    className: "jsx-7322804cda4cbeaa",
                    children: "Hide",
                  }),
                ],
              }),
              (0, n.jsx)(a(), {
                id: "7322804cda4cbeaa",
                children:
                  ".popover-times.jsx-7322804cda4cbeaa{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 0 10px 0;border-bottom:1px dashed var(--color-RemoGray10)}",
              }),
            ],
          }),
          { isPaused: z, showPauseButton: D } = (0, y.A)(
            null !== i && void 0 !== i ? i : ""
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            z &&
              (0, n.jsx)("div", {
                className:
                  "fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-30 flex justify-center items-center",
                children: (0, n.jsxs)("div", {
                  className: "bg-gray-800 rounded-lg p-6",
                  children: [
                    " ",
                    (0, n.jsxs)("div", {
                      className: "text-center p-4 bg-red-800 rounded shadow-lg",
                      children: [
                        (0, n.jsx)("p", {
                          className: "text-white text-xl font-extrabold",
                          children: "Task is paused",
                        }),
                        (0, n.jsx)("p", {
                          className: "text-white text-xl mt-2 font-extrabold",
                          children:
                            "All interactions are disabled until the task is resumed.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            (0, n.jsxs)("div", {
              id: "claim_timer_parent_element",
              className: r.container,
              children: [
                Z,
                (0, n.jsx)("div", { style: { width: "36px" } }),
                P,
                (0, n.jsx)("div", { style: { width: "36px" } }),
                R,
                D &&
                  (0, n.jsx)(j.Z, {
                    taskId: e.taskId,
                    pauseTimer: e.pauseTimer,
                    startTimer: e.startTimer,
                    claim: t,
                  }),
                $,
              ],
            }),
          ],
        });
      };
    },
    432429: function (e, t, i) {
      var n = i(824246),
        r = (i(827378), i(629586)),
        a = i(283806);
      t.Z = (e) => {
        const { subtaskId: t } = e;
        return (0, n.jsxs)("div", {
          className: "scenario",
          children: [
            (0, n.jsx)("div", {
              children: (0, n.jsx)(r.x, { medium: !0, children: "Geocontext" }),
            }),
            (0, n.jsx)(a.Z, {
              path: `/map?subtaskId=${t}`,
              children: "View Geocontext Map",
            }),
          ],
        });
      };
    },
    342374: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        a = i(629586),
        s = i(283806);
      t.Z = (e) => {
        const { scenarioId: t, setScenarioTime: i } = e,
          { 0: o, 1: l } = (0, r.useState)();
        return (0, n.jsxs)("div", {
          className: "scenario",
          children: [
            (0, n.jsx)("div", {
              children: (0, n.jsx)(a.x, {
                medium: !0,
                children: "Golden Task",
              }),
            }),
            (0, n.jsx)("div", {
              onClick: () => {
                o ||
                  l(
                    setInterval(
                      () =>
                        i((e) => (e < 1 ? (clearInterval(o), l(o), e) : e - 1)),
                      1e3
                    )
                  );
              },
              children: (0, n.jsx)(s.Z, {
                path: `/training?trainingId=${t}`,
                children: "View Golden Task",
              }),
            }),
          ],
        });
      };
    },
    744074: function (e, t, i) {
      var n,
        r = i(824246),
        a = i(827378),
        s = i(473631),
        o = i(792739),
        l = i(687192),
        c = i(629586),
        d = i(746332),
        u = i(68649),
        p = i(604375),
        h = i(271682),
        m = i(421334),
        x = i(938644);
      const f = (0, u.ZL)({
        autosaveHeader: (e) => ({
          color: null !== (n = e.headerColor) && void 0 !== n ? n : "white",
        }),
        itemValue: (e) => ({
          color: "light" === e.variant ? "white" : "black",
          display: "flex",
          alignItems: "center",
          [`@media (max-width: ${d.MOBILE_THRESHOLD})`]: { marginLeft: 20 },
        }),
        itemString: { opacity: 0.5 },
        itemAction: {
          display: "inline-block",
          marginLeft: "8px",
          cursor: "pointer",
          fontSize: "14px",
        },
        error: { color: "#ff4d4d", opacity: 0.8 },
        container: {
          [`@media (max-width: ${d.MOBILE_THRESHOLD})`]: {
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            marginLeft: "0",
          },
        },
      });
      t.Z = (e) => {
        const {
            lastAutosaveTime: t,
            triggerAutosave: i,
            discardAutosave: n,
            isAutosaving: d,
          } = e,
          { getTrigger: u } = (0, a.useContext)(h.cw),
          g = u(x.PO.Autosave);
        let v, b;
        t &&
          ((v = (0, s.ZP)(new Date(), t, "seconds")),
          v && (b = Math.floor(v / 60)));
        const j = f(e);
        return (0, r.jsxs)("div", {
          className: j.container,
          children: [
            (0, r.jsx)("div", {
              className: j.autosaveHeader,
              children: (0, r.jsx)(c.x, { medium: !0, children: "Last save" }),
            }),
            (0, r.jsxs)("div", {
              className: j.itemValue,
              children: [
                (0, r.jsx)("div", {
                  className: j.itemString,
                  children:
                    b && b > 0
                      ? (0, r.jsx)("span", {
                          className: b > 10 ? j.error : "",
                          children: (0, r.jsxs)(c.x, {
                            children: [
                              b,
                              " ",
                              1 === b ? "minute" : "minutes",
                              " ago",
                            ],
                          }),
                        })
                      : v && v > 5
                      ? (0, r.jsx)(c.x, { children: "A few seconds ago" })
                      : (0, r.jsx)(c.x, { children: "Just now!" }),
                }),
                d &&
                  (0, r.jsx)("span", {
                    className: j.itemAction,
                    children: (0, r.jsx)(l.Z, { size: "sssm" }),
                  }),
                !d &&
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(p.u, {
                        title: (0, r.jsxs)("div", {
                          children: [
                            "Click to save progress now ",
                            g && (0, m.UL)(g),
                          ],
                        }),
                        placement: "top",
                        children: (0, r.jsx)("a", {
                          className: j.itemAction,
                          onClick: i,
                          children: (0, r.jsx)(o.G, { icon: "sync-alt" }),
                        }),
                      }),
                      n &&
                        (0, r.jsx)(p.u, {
                          title: "Click to delete the save",
                          placement: "top",
                          children: (0, r.jsx)("span", {
                            className: j.itemAction,
                            onClick: n,
                            children: (0, r.jsx)(o.G, { icon: "times" }),
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
    281706: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        a = i(916353),
        s = i(416534),
        o = i(730643),
        l = i(280742),
        c = i(826897);
      t.Z = ({ taskId: e, claim: t }) => {
        const {
            isPaused: i,
            handlePauseClick: d,
            isLoading: u,
            disabledAutoPause: p,
          } = (0, o.A)(null !== e && void 0 !== e ? e : ""),
          h = (0, r.useRef)(new Date());
        (0, r.useEffect)(() => {
          const e = setInterval(() => {
              new Date().getTime() - h.current.getTime() >= 6e5 &&
                !i &&
                !p &&
                d();
            }, 5e3),
            t = () => {
              h.current = new Date();
            };
          return (
            window.addEventListener("mousemove", t),
            window.addEventListener("keydown", t),
            () => {
              window.removeEventListener("mousemove", t),
                window.removeEventListener("keydown", t),
                clearInterval(e);
            }
          );
        }, [i, p, d]);
        const { maxClaim: m } = (0, c.O)(t),
          x = new Intl.DateTimeFormat("default", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          }).format(m);
        return e
          ? (0, n.jsx)(a.u, {
              text: (0, n.jsx)(l.Z, {
                text: `Being efficient with your time factors into your\nquality rating. If you are not actively working\non the task, please pause the active tasking\ntimer.\n\nNote: Pausing will not impact the task due date.\nYour submission deadline will still be ${x}.`,
                width: 270,
              }),
              target: (0, n.jsx)(s.zx, {
                onClick: d,
                disabled: u,
                isLoading: u,
                variant: "white",
                children: (0, n.jsx)("div", {
                  className: "flex items-center gap-1",
                  children: (0, n.jsx)("span", {
                    children: i ? "Resume task" : "Pause task",
                  }),
                }),
              }),
            })
          : null;
      };
    },
    730643: function (e, t, i) {
      i.d(t, {
        A: function () {
          return o;
        },
      });
      var n = i(456552),
        r = i(285556);
      function a(e, t, i, n, r, a, s) {
        try {
          var o = e[a](s),
            l = o.value;
        } catch (c) {
          return void i(c);
        }
        o.done ? t(l) : Promise.resolve(l).then(n, r);
      }
      function s(e) {
        return function () {
          var t = this,
            i = arguments;
          return new Promise(function (n, r) {
            var s = e.apply(t, i);
            function o(e) {
              a(s, n, r, o, l, "next", e);
            }
            function l(e) {
              a(s, n, r, o, l, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function o(e) {
        const t = (0, n.useQueryClient)(),
          {
            data: i,
            isSuccess: a,
            refetch: o,
            isLoading: c,
          } = (0, n.useQuery)(
            ["pauseCapability", e],
            () =>
              (function (e) {
                return l.apply(this, arguments);
              })(e),
            {
              enabled: !!e,
              initialData: {
                Success: !1,
                Paused: !1,
                pauseDuration: 0,
                disabledAutoPause: !0,
              },
            }
          ),
          d = (0, n.useMutation)(
            (function () {
              var t = s(function* (t) {
                yield (0,
                r.ZP)(null, `internal/timer/${t ? "pause" : "resume"}/${e}`, { method: "POST" });
              });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            {
              onSuccess: () => {
                t.invalidateQueries(["pauseCapability", e]);
              },
            }
          );
        var u, p, h;
        return {
          isPaused: a && (null === i || void 0 === i ? void 0 : i.Paused),
          showPauseButton:
            a && (null === i || void 0 === i ? void 0 : i.Success),
          pausedDuration:
            null !==
              (u = null === i || void 0 === i ? void 0 : i.pausedDuration) &&
            void 0 !== u
              ? u
              : 0,
          pausedAt:
            null !== (p = null === i || void 0 === i ? void 0 : i.pausedAt) &&
            void 0 !== p
              ? p
              : 0,
          disabledAutoPause:
            null ===
              (h = null === i || void 0 === i ? void 0 : i.disabledAutoPause) ||
            void 0 === h ||
            h,
          handlePauseClick: () => {
            d.mutate(!i.Paused);
          },
          isLoading: d.isLoading || c,
          refetch: o,
        };
      }
      function l() {
        return (l = s(function* (e) {
          if (!e) return { Success: !1, Paused: !1 };
          return yield (0,
          r.ZP)(null, `internal/timer/pause/capability/${e}`, { method: "GET" });
        })).apply(this, arguments);
      }
    },
    863647: function (e, t, i) {
      var n = i(824246),
        r = (i(827378), i(792739)),
        a = i(604375),
        s = i(629586);
      var o;
      const l = (0, i(68649).ZL)({
        restoreHeader: (e) => ({
          color: null !== (o = e.headerColor) && void 0 !== o ? o : "white",
        }),
        itemValue: (e) => ({
          color: "light" === e.variant ? "white" : "black",
          opacity: 0.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }),
        itemAction: {
          display: "inline-block",
          marginLeft: "8px",
          cursor: "pointer",
          fontSize: "14px",
        },
      });
      t.Z = (e) => {
        const t = l(e);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("div", {
              className: t.restoreHeader,
              children: (0, n.jsx)(s.x, {
                medium: !0,
                children: "Restore base",
              }),
            }),
            (0, n.jsx)("div", {
              className: t.itemValue,
              children: (0, n.jsx)(a.u, {
                title: (0, n.jsx)("div", {
                  children: "Click to restore all missing base annotations",
                }),
                placement: "top",
                children: (0, n.jsx)("a", {
                  className: t.itemAction,
                  onClick: e.restoreBaseAnnotations,
                  children: (0, n.jsx)(r.G, {
                    icon: "history",
                    style: { color: "light" === e.variant ? "white" : "black" },
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    421334: function (e, t, i) {
      i.d(t, {
        UL: function () {
          return a;
        },
        vA: function () {
          return s;
        },
        dZ: function () {
          return o;
        },
        qL: function () {
          return l;
        },
        yv: function () {
          return c;
        },
      });
      var n = i(824246),
        r = (i(827378), i(113463));
      const a = (e) =>
          e.split("+").map((e, t) => (0, n.jsx)(r.Z, { children: e }, t)),
        s = { Control: "ctrl", Meta: "cmd", Alt: "alt", Shift: "shift" },
        o = "/",
        l = [",", "CapsLock", "/"],
        c = {
          ArrowDown: "down",
          ArrowUp: "up",
          ArrowLeft: "left",
          ArrowRight: "right",
        };
    },
    807556: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return E;
        },
      });
      var n = i(824246),
        r = i(827378),
        a = i(986004),
        s = i(315332),
        o = i(604375);
      const l = ({ onClick: e, disabled: t, buttonText: i }) => {
          const r = c();
          return (0, n.jsx)("div", {
            children: (0, n.jsxs)("button", {
              className: r.reviewerReportButton,
              style: { width: i ? 95 : 210 },
              onClick: e,
              disabled: t,
              children: [
                (0, n.jsx)("img", {
                  className: r.reportIcon,
                  src: "/static/img/components/labeler/reviewer-report.svg",
                  alt: "",
                }),
                (0, n.jsx)("div", {
                  className: r.buttonText,
                  style: i ? { width: 50 } : {},
                  children: i || "Report Sensitive Content ",
                }),
              ],
            }),
          });
        },
        c = (0, o.ZL)(() => ({
          reportIcon: { marginLeft: 4 },
          reviewerReportButton: {
            display: "flex",
            border: "1px solid var(--color-RemoRed)",
            fontSize: 14,
            borderRadius: 8,
            height: 30,
            cursor: "pointer",
            color: "#000000",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            "&:disabled": { opacity: 0.4 },
          },
          buttonText: { marginLeft: 5, color: "red", fontWeight: 600 },
        }));
      var d = i(298784),
        u = i.n(d),
        p = i(431350),
        h = i(762866),
        m = i(162491),
        x = i(751093),
        f = i(50682),
        g = i.n(f),
        v = i(792739);
      const b = 100002,
        j = (0, o.ZL)({
          category: {
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: 14,
            fontWeight: "bold",
          },
          reportTask: { padding: 32 },
          intro: {
            fontSize: 16,
            "& h2": { margin: 0, fontSize: 20, fontWeight: "bold" },
            "& p": { margin: "4px 0 32px", lineHeight: 1.7 },
          },
          section: {
            margin: "36px 0",
            "& .label": {
              marginBottom: 8,
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 13,
              color: "rgba(0, 0, 0, 0.25)",
              letterSpacing: 0.5,
            },
          },
          submit: { display: "flex", justifyContent: "center" },
        });
      var y = (e) => {
          const t = j(),
            { 0: i, 1: a } = (0, r.useState)(""),
            { 0: s, 1: l } = (0, r.useState)("");
          return (0, n.jsx)(x.Z, {
            open: e.isModalOpen,
            sx: { backdropFilter: "blur(5px)", zIndex: b },
            children: (0, n.jsx)(o.Vq, {
              open: e.isModalOpen,
              onClose: () => {
                a(""), l(""), e.onCloseModal();
              },
              maxWidth: "md",
              style: { zIndex: 100003 },
              children: (0, n.jsxs)("div", {
                className: t.reportTask,
                children: [
                  (0, n.jsxs)("div", {
                    className: t.intro,
                    children: [
                      (0, n.jsx)("h2", { children: e.headerText }),
                      (0, n.jsx)("p", { children: e.bodyText }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: t.section,
                    children: [
                      (0, n.jsx)("div", {
                        className: "label",
                        children: "Select a reason (required)",
                      }),
                      (0, n.jsx)("div", {
                        className: t.category,
                        children: (0, n.jsx)("div", {
                          children: u()
                            .keys(e.categories)
                            .map((t) => {
                              const r = e.categories[t],
                                s = e.tooltips[t];
                              return r && s
                                ? (0, n.jsx)(
                                    "div",
                                    {
                                      children: (0, n.jsx)("div", {
                                        onClick: () => a(t),
                                        children: (0, n.jsxs)("label", {
                                          children: [
                                            (0, n.jsx)(h.Y, {
                                              value: t,
                                              label: r,
                                              checked: t === i,
                                            }),
                                            " ",
                                            (0, n.jsx)(v.G, {
                                              "data-tip": !0,
                                              "data-for": t,
                                              icon: "info-circle",
                                              color: "lightgrey",
                                            }),
                                            (0, n.jsx)(g(), {
                                              id: t,
                                              place: "right",
                                              effect: "solid",
                                              children: s,
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                    t
                                  )
                                : null;
                            }),
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: t.section,
                    children: [
                      "other_harmful_content" === i
                        ? (0, n.jsx)("div", {
                            className: "label",
                            children: "Explain your reason (required)",
                          })
                        : (0, n.jsx)("div", {
                            className: "label",
                            children: "Explain your reason (optional)",
                          }),
                      (0, n.jsx)(m.Z, {
                        onChange: (e) => l(e.target.value),
                        value: s,
                        placeholder: e.explanationPlaceholder,
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    children:
                      ("other_harmful_content" !== i || s) &&
                      "" !== i &&
                      (0, n.jsx)("div", {
                        className: t.submit,
                        onClick: () => e.handleSubmit(i, s),
                        children: (0, n.jsx)(p.zx, {
                          children: e.confirmButtonText,
                        }),
                      }),
                  }),
                ],
              }),
            }),
          });
        },
        w = i(599789);
      function k(e, t, i) {
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
      const C = "Report this task for sensitive content",
        T =
          "Please let us know what's wrong with this task so we can make tasking better for you. If you see an issue that isn't related to sensitive content, contact the project support team for assistance.",
        S = "Report Task",
        N = "I'm reporting this task for sensitive content because...",
        I = (0, r.forwardRef)((e, t) => {
          const { 0: i, 1: o } = (0, r.useState)(!1),
            c = () => {
              o(!0);
            },
            d = () => {
              o(!1);
            };
          (0, r.useImperativeHandle)(t, () => ({
            openModal: c,
            closeModal: d,
            isModalOpen: i,
            disabled: e.disabled,
          }));
          const u = (t, i) => {
            var n;
            null === (n = e.handleReport) || void 0 === n || n.call(e, t, i),
              e.closeModalOnReport && d();
          };
          let p = {};
          return (
            e.useBulbaSensitiveContentReporting
              ? (p = w.BULBA_SENSITIVE_REPORT_CATEGORIES)
              : (e.enableHighRiskSensitiveContentReporting &&
                  (p = w.HIGH_RISK_SENSITIVE_CONTENT_REPORT_CATEGORIES),
                e.enableSensitiveContentReporting &&
                  (p = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var i = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(i);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(i).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                              i,
                              e
                            ).enumerable;
                          })
                        )),
                        n.forEach(function (t) {
                          k(e, t, i[t]);
                        });
                    }
                    return e;
                  })({}, p, w.SENSITIVE_CONTENT_REPORT_CATEGORIES))),
            (0, n.jsxs)("div", {
              children: [
                !e.avoidButtonRendering &&
                  (0, n.jsx)(l, {
                    onClick: c,
                    disabled: e.disabled,
                    style: e.style,
                    buttonText: e.buttonText,
                  }),
                e.isBenchmarkReporting &&
                  (0, n.jsx)(s.Z, {
                    handleSubmit: u,
                    isModalOpen: i,
                    onCloseModal: d,
                    reasons: w.BENCHMARK_REPORTING_REASONS,
                    categories: a.REPORT_CATEGORIES,
                    headerText: e.reportHeaderText || C,
                    bodyText: e.reportBodyText || T,
                    confirmButtonText: e.confirmButtonText || S,
                    explanationPlaceholder: e.explanationPlaceholder || N,
                  }),
                !e.isBenchmarkReporting &&
                  (0, n.jsx)(y, {
                    handleSubmit: u,
                    isModalOpen: i,
                    onCloseModal: d,
                    categories: p,
                    tooltips: w.SENSITIVE_CONTENT_REPORT_TOOLTIPS,
                    confirmButtonText: e.confirmButtonText || S,
                    bodyText: e.reportBodyText || T,
                    headerText: e.reportHeaderText || C,
                    explanationPlaceholder: e.explanationPlaceholder || N,
                  }),
              ],
            })
          );
        });
      I.displayName = "ReportTask";
      var E = I;
    },
    277631: function (e, t, i) {
      var n = i(824246),
        r = i(827378),
        a = i(655839),
        s = i.n(a);
      function o(e, t, i) {
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
      function l(e, t) {
        if (null == e) return {};
        var i,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var i,
              n,
              r = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (i = a[n]), t.indexOf(i) >= 0 || (r[i] = e[i]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (i = a[n]),
              t.indexOf(i) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, i) &&
                  (r[i] = e[i]));
        }
        return r;
      }
      t.Z = (e) => {
        function t(t, i) {
          var { dynamicForwardedRef: r } = t,
            a = l(t, ["dynamicForwardedRef"]);
          return (0, n.jsx)(
            e,
            (function (e) {
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
                    o(e, t, i[t]);
                  });
              }
              return e;
            })({}, a, { ref: i || r })
          );
        }
        return (
          s()(t, e),
          (t.displayName = `withForwardedRef(${e.displayName})`),
          r.forwardRef(t)
        );
      };
    },
    907607: function (e, t, i) {
      var n;
      function r(e) {
        if (e.trim().startsWith("https://"))
          try {
            if ("docs.google.com" === new URL(e).hostname) return n.Invalid;
          } catch (t) {
            if (!(t instanceof TypeError)) throw t;
          }
        if (e.trim().startsWith("<iframe")) {
          const i = document.createElement("div");
          i.innerHTML = e;
          const r = i.querySelector("iframe");
          if (!r) return n.NotApplicable;
          try {
            const e = new URL(r.src);
            if ("docs.google.com" === e.hostname) {
              const t = "true" === e.searchParams.get("embedded"),
                i = e.pathname.endsWith("/pub");
              return t && i ? n.Valid : n.Invalid;
            }
          } catch (t) {
            if (!(t instanceof TypeError)) throw t;
          }
        }
        return n.NotApplicable;
      }
      i.d(t, {
        U: function () {
          return n;
        },
        i: function () {
          return r;
        },
      }),
        (function (e) {
          (e[(e.NotApplicable = 0)] = "NotApplicable"),
            (e[(e.Invalid = 1)] = "Invalid"),
            (e[(e.Valid = 2)] = "Valid");
        })(n || (n = {}));
    },
    826897: function (e, t, i) {
      function n(e) {
        const t = new Date();
        t.setUTCDate(t.getUTCDate() + 1);
        const {
            checkedAtClientTime: i,
            checkedAt: n,
            idleMinutes: r,
            maxClaim: a,
            payableTime: s,
            claimMinutes: o,
          } = Object.assign(
            {
              checkedAtClientTime: new Date(),
              checkedAt: new Date(),
              maxClaim: t,
              idleMinutes: 1,
              claimMinutes: 1440,
            },
            e
          ),
          l = new Date(Date.now() - i.getTime() + n.getTime());
        return {
          maxClaim: a,
          idleMinutes: r,
          claimedUntil:
            (null === e || void 0 === e ? void 0 : e.claimedUntil) ||
            new Date(),
          claimMinutes: o,
          now: l,
          payableTime: s,
        };
      }
      i.d(t, {
        O: function () {
          return n;
        },
      });
    },
    188359: function (e, t, i) {
      var n = i(827378),
        r = i(298784),
        a = i.n(r),
        s = i(608429);
      function o(e, t, i) {
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
      t.Z = (e, t, i, r) => {
        const [l, c] = (0, s.Z)("local-store-set/" + e, {}, r);
        return (
          n.useEffect(() => {
            c((e) =>
              a().isNil(t)
                ? e
                : (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var i = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(i);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                          Object.getOwnPropertySymbols(i).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                              i,
                              e
                            ).enumerable;
                          })
                        )),
                        n.forEach(function (t) {
                          o(e, t, i[t]);
                        });
                    }
                    return e;
                  })({}, e, { [t]: null === i || void 0 === i || i })
            );
          }, [t, i, c]),
          { values: l }
        );
      };
    },
  },
]);
