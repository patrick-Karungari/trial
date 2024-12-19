"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61114],
  {
    897075: function (e, t, s) {
      var i = s(824246),
        n = s(827378),
        a = s(663307),
        o = s(167191),
        r = s(230257),
        c = s(285556);
      function l(e, t, s, i, n, a, o) {
        try {
          var r = e[a](o),
            c = r.value;
        } catch (l) {
          return void s(l);
        }
        r.done ? t(c) : Promise.resolve(c).then(i, n);
      }
      function d(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var a = e.apply(t, s);
            function o(e) {
              l(a, i, n, o, r, "next", e);
            }
            function r(e) {
              l(a, i, n, o, r, "throw", e);
            }
            o(void 0);
          });
        };
      }
      t.Z = ({ user: e, setCanContinue: t, courseId: s, contents: l }) => {
        const { 0: h, 1: p } = (0, n.useState)(),
          { 0: u, 1: x } = (0, n.useState)(),
          { 0: m, 1: f } = (0, n.useState)({ blocked: !1, reason: void 0 }),
          { 0: g, 1: b } = (0, n.useState)(!1),
          { continueCriteria: v } = l,
          j = (0, n.useCallback)(
            (e) => {
              const s = new Date(e.startTime);
              p(s),
                (v === a.K2.SCHEDULED ||
                  (v === a.K2.COMPLETED &&
                    e.endTime &&
                    new Date() > new Date(e.endTime))) &&
                  t(!0);
            },
            [v, t]
          ),
          y = (0, n.useCallback)(
            d(function* () {
              try {
                const e = yield (0, c.ZP)(
                  null,
                  `/internal/courses/${s}/interviewBlocked`
                );
                f(e);
              } catch (e) {
                return void (0, c.cF)(e, "Failed to check interviewee status.");
              }
            }),
            [f, s]
          ),
          w = (0, n.useCallback)(
            d(function* () {
              let e;
              try {
                e = yield (0, c.ZP)(
                  null,
                  `/internal/courses/${s}/scheduledInterviews`
                );
              } catch (t) {
                return (
                  (0, c.cF)(
                    t,
                    "Failed to fetch scheduled interviews for user."
                  ),
                  void p(void 0)
                );
              }
              e.scheduledInterviews.length
                ? j(e.scheduledInterviews[0])
                : p(null);
            }),
            [j, s]
          ),
          k = (0, n.useCallback)(
            d(function* () {
              try {
                const e = yield (0, c.ZP)(
                  null,
                  `/internal/courses/${s}/interviewLink`
                );
                x(e.calendlySchedulingLink);
              } catch (e) {
                return (
                  (0, c.cF)(e, "Failed to fetch booking link for user."),
                  void x(void 0)
                );
              }
            }),
            [x, s]
          );
        if (
          ((0, r.pv)({
            onEventScheduled: d(function* () {
              v === a.K2.SCHEDULED && t(!0);
            }),
          }),
          (0, n.useEffect)(() => {
            const t = (function () {
              var e = d(function* () {
                b(!0), yield Promise.all([y(), w(), k()]), b(!1);
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e.banReason || t();
          }, [w, e.banReason, k, y]),
          g)
        )
          return (0, i.jsx)(o.Z, {});
        if (e.banReason || m.blocked)
          return (0, i.jsxs)("div", {
            children: [
              "You are ineligible to schedule an interview at this time. ",
              m.reason || "",
            ],
          });
        if (h) {
          const e = h.toLocaleString();
          return new Date() > h
            ? (0, i.jsxs)("div", {
                children: [
                  "You interviewed with Scale at ",
                  e,
                  ". You should hear from the team shortly.",
                ],
              })
            : (0, i.jsxs)("div", {
                children: [
                  "You are scheduled to interview with Scale on ",
                  e,
                  ". See you then!",
                ],
              });
        }
        if (!u)
          return (0, i.jsx)("div", {
            children:
              "There was an issue loading the Calendly widget. Please try again.",
          });
        const C = e.email.replace("+outlier", "");
        return (0, i.jsx)(r.KS, {
          url: u,
          prefill: {
            email: C,
            firstName: e.firstName,
            lastName: e.lastName,
            name: e.firstName + " " + e.lastName,
            smsReminderNumber: e.phoneNumber,
          },
        });
      };
    },
    602963: function (e, t, s) {
      var i = s(824246),
        n = s(679892),
        a = s.n(n);
      s(827378);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: "jsx-ef428a7cc429b7a2",
          children: (0, i.jsx)(a(), {
            id: "ef428a7cc429b7a2",
            children:
              ".social-button{color:white;font-size:14px;text-align:start;background:#333;margin-bottom:14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;overflow:hidden;-webkit-transition:all 100ms ease-out;-moz-transition:all 100ms ease-out;-o-transition:all 100ms ease-out;transition:all 100ms ease-out}.social-button:hover{-webkit-filter:brightness(95%);filter:brightness(95%)}.social-button:active{-webkit-filter:brightness(95%);filter:brightness(95%)}.social-button .social-button-icon{width:46px;height:46px;background-position:center;background-repeat:no-repeat;-webkit-background-size:18px 18px;-moz-background-size:18px 18px;-o-background-size:18px 18px;background-size:18px 18px;display:inline-block;vertical-align:middle;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.social-button .social-button-icon.github-icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOCI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTkuNSAwQTkuMzcgOS4zNyAwIDAgMCAwIDkuMjNhOS4yNiA5LjI2IDAgMCAwIDYuNSA4Ljc1Yy40Ny4wOS42NS0uMi42NS0uNDRsLS4wMi0xLjcyYy0yLjY0LjU2LTMuMi0xLjA5LTMuMi0xLjA5LS40My0xLjA2LTEuMDUtMS4zNS0xLjA1LTEuMzUtLjg3LS41Ny4wNi0uNTYuMDYtLjU2Ljk2LjA3IDEuNDYuOTUgMS40Ni45NS44NSAxLjQxIDIuMjIgMSAyLjc2Ljc3LjA5LS42LjM0LTEgLjYtMS4yMy0yLjEtLjI0LTQuMzItMS4wMy00LjMyLTQuNTYgMC0xLjAxLjM3LTEuODMuOTgtMi40OC0uMS0uMjMtLjQzLTEuMTcuMDktMi40NCAwIDAgLjgtLjI1IDIuNjEuOTRhOS4zIDkuMyAwIDAgMSA0Ljc2IDBjMS44MS0xLjIgMi42LS45NCAyLjYtLjk0LjUzIDEuMjcuMiAyLjIuMSAyLjQ0LjYxLjY1Ljk4IDEuNDcuOTggMi40OCAwIDMuNTQtMi4yMiA0LjMyLTQuMzQgNC41NS4zNC4yOS42NS44NS42NSAxLjdsLS4wMiAyLjU0YzAgLjI1LjE4LjUzLjY2LjQ0QTkuMjYgOS4yNiAwIDAgMCAxOSA5LjIzQzE5IDQuMTMgMTQuNzUgMCA5LjUgMHoiLz48L3N2Zz4=)}.social-button .social-button-icon.google-icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjNDI4NUY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNy42NCA5LjJjMC0uNjMtLjA2LTEuMjUtLjE2LTEuODRIOXYzLjQ5aDQuODRhNC4xNCA0LjE0IDAgMCAxLTEuOCAyLjcxdjIuMjZoMi45MmE4Ljc4IDguNzggMCAwIDAgMi42OC02LjYyeiIvPjxwYXRoIGZpbGw9IiMzNEE4NTMiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMThhOC42IDguNiAwIDAgMCA1Ljk2LTIuMThsLTIuOTEtMi4yNmE1LjQgNS40IDAgMCAxLTguMDktMi44NWgtM3YyLjMzQTkgOSAwIDAgMCA5IDE4eiIvPjxwYXRoIGZpbGw9IiNGQkJDMDUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMuOTYgMTAuNzFhNS40MSA1LjQxIDAgMCAxIDAtMy40MlY0Ljk2aC0zYTkgOSAwIDAgMCAwIDguMDhsMy0yLjMzeiIvPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMy41OGMxLjMyIDAgMi41LjQ1IDMuNDQgMS4zNWwyLjU4LTIuNTlBOSA5IDAgMCAwIC45NiA0Ljk1bDMgMi4zNEE1LjM2IDUuMzYgMCAwIDEgOSAzLjU4eiIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDE4IDAgMTggMTggMCAxOCIvPjwvZz48L3N2Zz4=)}.social-button .social-button-icon.linkedin-icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC45OCAzLjVjMCAxLjM4MS0xLjExIDIuNS0yLjQ4IDIuNXMtMi40OC0xLjExOS0yLjQ4LTIuNWMwLTEuMzggMS4xMS0yLjUgMi40OC0yLjVzMi40OCAxLjEyIDIuNDggMi41em0uMDIgNC41aC01djE2aDV2LTE2em03Ljk4MiAwaC00Ljk2OHYxNmg0Ljk2OXYtOC4zOTljMC00LjY3IDYuMDI5LTUuMDUyIDYuMDI5IDB2OC4zOTloNC45ODh2LTEwLjEzMWMwLTcuODgtOC45MjItNy41OTMtMTEuMDE4LTMuNzE0di0yLjE1NXoiLz48L3N2Zz4=)}.social-button .social-button-text{letter-spacing:.5px;font-weight:bold;line-height:46px;height:46px;-webkit-padding-start:12px;-moz-padding-start:12px;padding-inline-start:12px;position:relative;-webkit-box-flex:2;-webkit-flex-grow:2;-moz-box-flex:2;-ms-flex-positive:2;flex-grow:2}.social-button.google-button{-webkit-padding-start:4px;-moz-padding-start:4px;padding-inline-start:4px;background:#f5f5f5}.social-button.google-button .social-button-text{color:#404040;background-color:#f5f5f5}.social-button.github-button{background:#222}.social-button.github-button .social-button-text{background-color:#333}.social-button.saml-button{background:#3c2697}.social-button.saml-button .social-button-text{color:white;background-color:#116}.social-button.linkedin-button{-webkit-padding-start:4px;-moz-padding-start:4px;padding-inline-start:4px;background:#f5f5f5}.social-button.linkedin-button .social-button-text{color:#404040;background-color:#f5f5f5}",
          }),
        });
    },
    159710: function (e, t, s) {
      var i = s(824246),
        n = s(827378),
        a = s(122826);
      const o = (0, s(542280).ZL)((e) => ({
        container: ({ fullWidth: t }) => ({
          border: "1px solid",
          borderColor: e.colors.gray20,
          borderRadius: e.spacing(1),
          padding: "16px",
          margin: t ? "16px 0px 16px 0px" : "16px",
          width: t ? "100%" : "90%",
        }),
        title: {
          color: "#000000",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
          marginTop: "4px",
          marginBottom: "12px",
          display: "inline-block",
        },
      }));
      t.Z = (e) => {
        const {
            title: t,
            fullWidth: s,
            originalText: r,
            originalTextColor: c,
            addedDiffColor: l,
            newText: d,
            className: h,
            alwaysShowOriginalText: p,
          } = e,
          u = o({ fullWidth: s }),
          x = (0, n.useMemo)(() => {
            if (r && (d || p)) {
              const e = new a.diff_match_patch(),
                t = e.diff_main(r, d || "");
              e.diff_cleanupSemantic(t);
              return t.map((e, t) => {
                const s = 1 === e[0] ? l || "#bfb" : void 0,
                  n = -1 === e[0] ? "line-through" : void 0,
                  a = 1 === e[0] || -1 === e[0] ? "black" : c || "#888";
                return (0, i.jsx)(
                  "span",
                  {
                    style: {
                      backgroundColor: s,
                      color: a,
                      textDecoration: n,
                      textDecorationColor: "maroon",
                    },
                    children: e[1],
                  },
                  `diff_${t}`
                );
              });
            }
          }, [r, d]);
        return (0, i.jsx)("div", {
          className: h || "",
          children: (0, i.jsxs)("div", {
            className: u.container,
            children: [
              t &&
                (0, i.jsxs)("span", {
                  className: u.title,
                  children: [t, " (diff)"],
                }),
              (0, i.jsx)("div", {
                style: { whiteSpace: "pre-wrap" },
                children: x,
              }),
            ],
          }),
        });
      };
    },
    761114: function (e, t, s) {
      s.d(t, {
        eH: function () {
          return pe;
        },
        vx: function () {
          return he;
        },
        sw: function () {
          return ke;
        },
        vC: function () {
          return ye;
        },
        ZP: function () {
          return Ue;
        },
      });
      var i = s(824246),
        n = s(679892),
        a = s.n(n),
        o = s(298784),
        r = s.n(o),
        c = s(161320),
        l = s.n(c),
        d = s(827378),
        h = s(431350),
        p = s(792739),
        u = s(775143),
        x = s(220453),
        m = s(608139),
        f = s.n(m),
        g = s(101409),
        b = s(599789),
        v = s(663307),
        j = s(75896),
        y = s(802638),
        w = s(881620),
        k = s(893827),
        C = s(4369),
        S = s(746332),
        L = s(64499),
        I = s(421805),
        T = s(60042),
        A = s.n(T),
        N = s(604375),
        M = s(220373),
        E = s(265136),
        D = s(336235),
        R = s(872383),
        O = s(450755),
        _ = s(753332),
        V = s(557299);
      const B = ({ previousAttempts: e, browseAttempt: t }) =>
        (0, i.jsx)(O.Z, {
          children: e.map(
            ({
              _id: e,
              createdAt: s,
              accuracy: n,
              passedBar: a,
              submitted: o,
            }) => {
              const r = n ? 100 * n + "%" : "0%",
                c = l()(s).format("LL"),
                d = a ? "Passed" : o ? "Failed" : "Pending",
                p = o ? "Yes" : "No",
                u = e ? e.toString() : "";
              return (0, i.jsx)(i.Fragment, {
                children: (0, i.jsxs)(_.Z, {
                  alignItems: "flex-start",
                  children: [
                    (0, i.jsx)(V.Z, {
                      primary: c,
                      secondary: (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)("b", { children: "Status:" }),
                          " ",
                          d,
                          ", ",
                          (0, i.jsx)("b", { children: "Accuracy:" }),
                          " ",
                          r,
                          ",",
                          " ",
                          (0, i.jsx)("b", { children: "Submitted:" }),
                          " ",
                          p,
                        ],
                      }),
                    }),
                    (0, i.jsx)(h.zx, {
                      type: "secondary",
                      style: { alignSelf: "center" },
                      onClick: () => t(u),
                      children: "Browse Attempt",
                    }),
                  ],
                }),
              });
            }
          ),
        });
      var P = ({
          open: e,
          onClose: t,
          previousAttempts: s,
          newAttemptURL: n,
        }) => {
          const a = (e) => {
            window.open(`${n}/${e}`, "_blank");
          };
          return (0, i.jsxs)(N.Vq, {
            open: e,
            onClose: t,
            children: [
              (0, i.jsx)(N.$N, { children: "Hello again!" }),
              (0, i.jsxs)(N.cZ, {
                children: [
                  (0, i.jsx)(N.H3, {
                    children:
                      "It looks like you have already tried this scenario.",
                  }),
                  (0, i.jsx)("br", {}),
                  (0, i.jsx)(N.xv, {
                    children:
                      "Here is a list of all your previous attempts. Feel free to access them and continue from there!",
                  }),
                  (0, i.jsx)("br", {}),
                  (0, i.jsx)(B, { previousAttempts: s, browseAttempt: a }),
                ],
              }),
              (0, i.jsxs)(N.kX, {
                children: [
                  (0, i.jsx)(h.zx, {
                    type: "primary",
                    onClick: t,
                    children: "Cancel",
                  }),
                  (0, i.jsx)(h.zx, {
                    type: "primary",
                    onClick: () => a(n),
                    children: "Create new attempt",
                  }),
                ],
              }),
            ],
          });
        },
        H = s(411356),
        z = s(312346),
        q = s(252708),
        F = s.n(q),
        U = s(772944),
        Z = s(159710),
        G = s(775222),
        Y = s(692975),
        W = s(44468);
      const $ = (e) => {
          const t = Q();
          let s;
          const { 0: n, 1: a } = (0, d.useState)(1),
            { 0: o, 1: r } = (0, d.useState)(0),
            { 0: c, 1: l } = (0, d.useState)(!1),
            { 0: h, 1: u } = (0, d.useState)(!0),
            { 0: x, 1: m } = (0, d.useState)(!1),
            { 0: f, 1: g } = (0, d.useState)(0.5),
            { 0: b, 1: v } = (0, d.useState)(0),
            { 0: j, 1: y } = (0, d.useState)(0);
          return (
            (0, d.useEffect)(() => {
              const e = document.getElementById("reactVideoPlayerRef");
              e && e.addEventListener("contextmenu", (e) => e.preventDefault());
            }, [s]),
            (0, i.jsxs)("div", {
              className: t.videoWrapper,
              children: [
                (0, i.jsx)(Y.Z, {
                  width: "100%",
                  id: "reactVideoPlayerRef",
                  ref: (e) => {
                    s = e;
                  },
                  controls: !e.displayCustomControls,
                  url: e.url,
                  playing: c,
                  playbackRate: n,
                  volume: e.displayCustomControls ? (x ? 0 : f) : void 0,
                  onPlay: () => {
                    l(!0), u(!1);
                  },
                  onPause: () => {
                    l(!1), u(!0);
                  },
                  onEnded: e.onEnded,
                  onDuration: r,
                  progressInterval: 2.5,
                  onProgress: (e) => {
                    v(e.playedSeconds),
                      e.playedSeconds > j && y(e.playedSeconds);
                  },
                  config: e.config,
                }),
                e.displayCustomControls &&
                  (0, i.jsxs)("div", {
                    className: t.customControls,
                    children: [
                      (0, i.jsx)(W.Z, {
                        onClick: () => {
                          u(!h), l(!c);
                        },
                        children: (0, i.jsx)(p.G, {
                          color: "white",
                          size: "sm",
                          icon: c ? "pause" : "play",
                        }),
                      }),
                      (0, i.jsx)(W.Z, {
                        onClick: () => {
                          const e = Math.max(n - 0.25, 0.25);
                          a(e);
                        },
                        children: (0, i.jsx)(p.G, {
                          color: "white",
                          size: "sm",
                          icon: "backward",
                        }),
                      }),
                      n,
                      "x",
                      (0, i.jsx)(W.Z, {
                        onClick: () => {
                          const e = Math.min(n + 0.25, 2);
                          a(e);
                        },
                        children: (0, i.jsx)(p.G, {
                          color: "white",
                          size: "sm",
                          icon: "forward",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: t.progressBar,
                        children: (0, i.jsx)(N.iR, {
                          position: b,
                          onAdjust: (t) => {
                            s &&
                              (e.allowSkimming || t <= j
                                ? s.seekTo(t, "seconds")
                                : s.seekTo(j, "seconds"));
                          },
                          minVal: 0,
                          maxVal: o,
                        }),
                      }),
                      (0, i.jsx)(W.Z, {
                        onClick: () => {
                          m(!x);
                        },
                        children: (0, i.jsx)(p.G, {
                          color: "white",
                          size: "sm",
                          icon: x ? "volume-mute" : "volume-up",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: t.volumeProgressBar,
                        children: (0, i.jsx)(N.iR, {
                          onAdjust: (e) => {
                            g(e), m(!(e > 0));
                          },
                          position: f,
                          minVal: 0,
                          maxVal: 1,
                          disabled: !1,
                        }),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        Q = (0, M.Z)(() => ({
          videoWrapper: { position: "relative", width: "100%" },
          customControls: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 8,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          playButton: {
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          },
          pauseButton: {
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          },
          progressBar: {
            flex: 1,
            height: 4,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            margin: "0 8px",
          },
          volumeProgressBar: {
            flex: 0.2,
            height: 4,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            margin: "0 8px",
          },
        }));
      var K = s(572111),
        J = s.n(K),
        X = s(711719),
        ee = s.n(X),
        te = s(433310),
        se = s(507099),
        ie = s(897075),
        ne = s(285556),
        ae = s(635376);
      function oe(e, t, s, i, n, a, o) {
        try {
          var r = e[a](o),
            c = r.value;
        } catch (l) {
          return void s(l);
        }
        r.done ? t(c) : Promise.resolve(c).then(i, n);
      }
      function re(e) {
        return function () {
          var t = this,
            s = arguments;
          return new Promise(function (i, n) {
            var a = e.apply(t, s);
            function o(e) {
              oe(a, i, n, o, r, "next", e);
            }
            function r(e) {
              oe(a, i, n, o, r, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function ce(e, t, s) {
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
      function le(e) {
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
              ce(e, t, s[t]);
            });
        }
        return e;
      }
      const de = d.lazy(() =>
          Promise.all([
            s.e(34701),
            s.e(68143),
            s.e(11642),
            s.e(82178),
            s.e(97778),
            s.e(86260),
            s.e(29736),
            s.e(16732),
            s.e(34051),
            s.e(12816),
            s.e(24292),
            s.e(95023),
            s.e(8704),
            s.e(74707),
            s.e(72086),
            s.e(79913),
            s.e(56696),
            s.e(13959),
            s.e(90321),
            s.e(51505),
            s.e(36407),
            s.e(47792),
            s.e(19059),
            s.e(49529),
            s.e(77045),
            s.e(7539),
            s.e(35045),
            s.e(82746),
            s.e(20692),
            s.e(63909),
            s.e(96815),
            s.e(87823),
            s.e(5962),
            s.e(18289),
            s.e(67984),
            s.e(73853),
            s.e(19288),
            s.e(47650),
            s.e(46608),
            s.e(55100),
            s.e(82625),
            s.e(65566),
            s.e(19775),
            s.e(51941),
            s.e(31573),
            s.e(74891),
            s.e(8985),
          ]).then(s.bind(s, 418196))
        ),
        he = 50,
        pe = 2e3;
      function ue(e = "") {
        return (0, i.jsx)("div", {
          dangerouslySetInnerHTML: { __html: x.ZP.render(e) },
        });
      }
      const xe = (e) =>
          (0, i.jsxs)("div", {
            className: "jsx-4cf1a3abb6fb16c5 course-title",
            children: [
              (0, i.jsx)("em", {
                className: "jsx-4cf1a3abb6fb16c5",
                children: e.displayType,
              }),
              (0, i.jsx)("strong", {
                className: "jsx-4cf1a3abb6fb16c5",
                children: e.title,
              }),
              (0, i.jsx)(a(), {
                id: "4cf1a3abb6fb16c5",
                children:
                  ".course-title.jsx-4cf1a3abb6fb16c5{margin-bottom:32px}.course-title.jsx-4cf1a3abb6fb16c5 em.jsx-4cf1a3abb6fb16c5{display:block;margin-bottom:4px;font-style:normal;font-weight:bold;font-size:14px;text-transform:uppercase;letter-spacing:1px;opacity:.5}.course-title.jsx-4cf1a3abb6fb16c5 strong.jsx-4cf1a3abb6fb16c5{display:block;font-size:24px;font-weight:normal}",
              }),
            ],
          }),
        me = ({ description: e }) =>
          e
            ? (0, i.jsxs)("div", {
                className: "jsx-5a3505bf495e118a course-description ql-editor",
                children: [
                  ue(e),
                  (0, i.jsx)(a(), {
                    id: "5a3505bf495e118a",
                    children:
                      ".course-description.jsx-5a3505bf495e118a{margin:32px 0}",
                  }),
                ],
              })
            : null,
        fe = (0, M.Z)({
          courseFooter: {
            marginTop: "32px",
            [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: {
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
            [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: {
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
            [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: { padding: 0 },
          },
        }),
        ge = (e) => {
          var t;
          const s = fe(),
            { t: n } = (0, I.$G)("course"),
            a = e.canContinue || e.canAlwaysContinue,
            o = void 0 !== e.isLoading && e.isLoading,
            c = !!(null === (t = e.course.initialTestInfo) || void 0 === t
              ? void 0
              : t.isInitialTest),
            l = (0, d.useMemo)(
              () => Object.values(f().parse(location.search))[0],
              [location.search]
            ),
            { 0: p, 1: u } = (0, d.useState)("640023663ddb13b7c690cc7e" === l);
          (0, d.useEffect)(() => {
            if (p) {
              let e = 10;
              const t = setInterval(function () {
                0 === e && u(!1), (e -= 1);
              }, 1e3);
              return () => {
                clearInterval(t);
              };
            }
          }, [p]);
          const x =
            (r().isNil(e.isPrevEnabled) || e.isPrevEnabled) &&
            e.sectionIndex > 0 &&
            !e.isCertification &&
            !c;
          return (0, i.jsxs)("div", {
            className: s.courseFooter,
            children: [
              e.sectionActions &&
                (0, i.jsxs)("div", {
                  className: s.actions,
                  children: [e.sectionActions, e.sectionMessage],
                }),
              (0, i.jsxs)("div", {
                className: A()(s.continue, {
                  [s.continueResponsive]: e.responsive,
                }),
                children: [
                  (0, i.jsx)(h.zx, {
                    style: { width: "100%" },
                    onClick: e.handlePrevious,
                    disabled: !x,
                    children: n("back"),
                  }),
                  (0, i.jsx)(h.zx, {
                    style: { width: "100%" },
                    type: "primary",
                    onClick: () => {
                      G.c.track("Training - Completes individual section"),
                        e.handleContinue();
                    },
                    disabled: !a || o || p,
                    children: n("continue"),
                  }),
                ],
              }),
            ],
          });
        },
        be = {
          courseSectionResponsive: {
            [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: {
              height: "calc(100vh - 87px)",
              overflowY: "scroll",
              marginBottom: 112,
            },
          },
          courseSectionMain: { padding: "32px" },
        },
        ve = (0, N.D2)(be)((e) =>
          (0, i.jsxs)("div", {
            className: A()({
              [e.classes.courseSectionResponsive]: e.responsive,
            }),
            children: [
              (0, i.jsxs)("div", {
                className: e.classes.courseSectionMain,
                children: [
                  (0, i.jsx)(xe, {
                    displayType: e.displayType,
                    title: e.title,
                  }),
                  (0, i.jsx)(me, { description: e.contents.description }),
                  e.children || e.content,
                ],
              }),
              (0, i.jsx)(ge, le({}, e)),
            ],
          })
        ),
        je = b.VISUAL_DISTANCE_URLS.length;
      class ye extends d.Component {
        render() {
          if (!r().isEmpty(this.props.instructionList)) {
            const e = this.props.labels || [],
              t = this.props.instructionItemIds || [],
              s = !r().isEmpty(e) || !r().isEmpty(t),
              n = (i) =>
                !s ||
                !!i.global ||
                !!r().some(i.labels, (t) => e.includes(t)) ||
                t.includes(i._id);
            return (0, i.jsx)(j.ZP, {
              instructionList: this.props.instructionList,
              bringGlobalToBottom: s,
              filter: n,
              isFullInstructions: !s,
              emitMetrics: !!this.props.emitMetrics,
            });
          }
          return null;
        }
      }
      class we extends d.Component {
        render() {
          return this.props.instructionObjectId
            ? (0, i.jsx)("div", {
                children: (0, i.jsx)(k.Z, {
                  instructionObjectId: this.props.instructionObjectId,
                }),
              })
            : null;
        }
      }
      const ke = (e) => {
          const t = [
            b.VerificationInquiryStatus.Approved,
            b.VerificationInquiryStatus.Declined,
            b.VerificationInquiryStatus.Failed,
            b.VerificationInquiryStatus.MarkedForReview,
          ];
          class s extends d.Component {
            componentDidMount() {
              var e = this;
              return re(function* () {
                e.checkAccountVerificationStatus(!1),
                  e.checkFraud(),
                  e.checkLinkedInVerification();
              })();
            }
            componentDidUpdate(e, t) {
              var s = this;
              return re(function* () {
                (e.user === s.props.user &&
                  t.loadingFingerprintingScript ===
                    s.state.loadingFingerprintingScript) ||
                  s.checkFraud();
              })();
            }
            renderContent() {
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)("div", {
                    className: "jsx-657b77ad5a5695d1 container",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "jsx-657b77ad5a5695d1 row",
                        children: [
                          (0, i.jsx)("span", {
                            className:
                              "jsx-657b77ad5a5695d1 required-verifications",
                            children: (0, i.jsx)("strong", {
                              className: "jsx-657b77ad5a5695d1",
                              children: "Required Verifications",
                            }),
                          }),
                          (0, i.jsx)("span", {
                            className: "jsx-657b77ad5a5695d1",
                            children: (0, i.jsxs)(h.zx, {
                              disabled:
                                0 ===
                                  this.state
                                    .numRemainingVerificationsRequired ||
                                this.state.loading,
                              onClick: this.checkAccountVerificationStatus,
                              children: [
                                (0, i.jsx)(p.G, { icon: "sync-alt" }),
                                " \xa0 Refresh Status",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(a(), {
                        id: "657b77ad5a5695d1",
                        children:
                          ".container.jsx-657b77ad5a5695d1{margin-bottom:10px;max-width:700px}.row.jsx-657b77ad5a5695d1{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.row.jsx-657b77ad5a5695d1 span.required-verifications.jsx-657b77ad5a5695d1{margin-top:2px;display:block;font-size:20px;font-weight:normal}.row.jsx-657b77ad5a5695d1 span.jsx-657b77ad5a5695d1{width:50%;max-width:50%}.row.jsx-657b77ad5a5695d1 span.jsx-657b77ad5a5695d1:last-of-type{text-align:right}",
                      }),
                    ],
                  }),
                  !this.state.numVerificationsFailed &&
                    (0, i.jsxs)("div", {
                      children: [
                        "You have ",
                        this.state.numRemainingVerificationsRequired,
                        " more verification(s) to complete before continuing.",
                      ],
                    }),
                  (0, i.jsxs)("div", {
                    children: [
                      "Please visit our ",
                      (0, i.jsx)("a", {
                        href: "/support",
                        children: "Support Center",
                      }),
                      " if you need help.",
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "verifications",
                    style: { marginBottom: 50 },
                    children: this.props.contents.templates.map((e) =>
                      (0, i.jsx)(
                        "div",
                        {
                          className: "template-verification-unit",
                          children: (0, i.jsx)(U.j, {
                            userVerifications: this.state.verifications,
                            templateId: e,
                            user: this.props.user,
                            loading: this.state.loading,
                            onVerificationCompleted:
                              this.onVerificationCompleted,
                            onVerificationEvent: this.onVerificationEvent,
                          }),
                        },
                        e
                      )
                    ),
                  }),
                  this.props.contents.enableLinkedInVerification &&
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("div", {
                          style: {
                            marginTop: "2px",
                            display: "block",
                            fontSize: "20px",
                            fontWeight: "normal",
                          },
                          children: (0, i.jsx)("strong", {
                            children: "Connect your LinkedIn account",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          style: { marginTop: "2px" },
                          children:
                            "Connect your LinkedIn account to verify your identity. You can unlink your account at any time.",
                        }),
                        (0, i.jsx)("div", {
                          children:
                            "Clicking the button below will redirect you to LinkedIn to authorize Remotasks to access your account, and then back to Remotasks.",
                        }),
                        this.props.contents.isLinkedInVerificationRequired &&
                          !this.state.isLinkedInVerified &&
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)("strong", {
                              children:
                                "You must connect your LinkedIn account to continue.",
                            }),
                          }),
                        (0, i.jsx)("div", {
                          style: { paddingTop: "8px" },
                          children: (0, i.jsx)(se.Z, {
                            verified: this.state.isLinkedInVerified,
                            userId: this.props.user._id,
                            redirectUrl: window.location.href,
                          }),
                        }),
                      ],
                    }),
                ],
              });
            }
            renderSectionMessage() {
              return (0, i.jsx)("div", {
                children: (0, i.jsxs)("div", {
                  className: "jsx-2c7e3dacc715f201 message",
                  children: [
                    this.props.contents.templates.length > 0 &&
                      (0, i.jsx)("div", {
                        className: "jsx-2c7e3dacc715f201",
                        children: this.props.user
                          .personaVerificationCourseBypass
                          ? (0, i.jsxs)("span", {
                              className: "jsx-2c7e3dacc715f201 done",
                              children: [
                                (0, i.jsx)(p.G, { icon: "check" }),
                                " You don",
                                "'",
                                "t need to complete Persona verification. You can continue now.",
                              ],
                            })
                          : this.state.numVerificationsFailed
                          ? (0, i.jsxs)("span", {
                              className: "jsx-2c7e3dacc715f201 disabled",
                              children: [
                                (0, i.jsx)(p.G, { icon: "times" }),
                                " Your verification has been declined. Please continue the course to proceed tasking on other projects.",
                              ],
                            })
                          : 0 !==
                              this.state.numRemainingVerificationsRequired ||
                            this.state.fraudCheckFailed
                          ? this.state.loading
                            ? (0, i.jsx)("span", {
                                className: "jsx-2c7e3dacc715f201 pending",
                                children: (0, i.jsx)(N.D8, {
                                  size: "14px",
                                  color: "inherit",
                                }),
                              })
                            : this.state.numRemainingVerificationsRequired > 0
                            ? (0, i.jsx)("span", {
                                className: "jsx-2c7e3dacc715f201 pending",
                                children:
                                  "You have not yet completed all required verifications.",
                              })
                            : this.state.fraudCheckFailed
                            ? (0, i.jsxs)("span", {
                                className: "jsx-2c7e3dacc715f201 disabled",
                                children: [
                                  (0, i.jsx)(p.G, { icon: "times" }),
                                  " Unfortunately, we failed to verify your account. While we review your account, please file a ticket with our support team if you believe there was an error. You can file tickets",
                                  " ",
                                  (0, i.jsx)("a", {
                                    href: "https://support.remotasks.com/hc/en-us/requests/new",
                                    className: "jsx-2c7e3dacc715f201",
                                    children: "here",
                                  }),
                                  ".",
                                ],
                              })
                            : (0, i.jsx)("span", {
                                className: "jsx-2c7e3dacc715f201 pending",
                                children:
                                  "You have not yet completed all required verifications.",
                              })
                          : (0, i.jsxs)("span", {
                              className: "jsx-2c7e3dacc715f201 done",
                              children: [
                                (0, i.jsx)(p.G, { icon: "check" }),
                                " All verifications complete!",
                              ],
                            }),
                      }),
                    (0, i.jsx)("div", {
                      className: "jsx-2c7e3dacc715f201",
                      children:
                        this.props.contents.isLinkedInVerificationRequired &&
                        (this.state.isLinkedInVerified
                          ? (0, i.jsxs)("span", {
                              className: "jsx-2c7e3dacc715f201 done",
                              children: [
                                (0, i.jsx)(p.G, { icon: "check" }),
                                " Your LinkedIn is connected!",
                              ],
                            })
                          : (0, i.jsx)("span", {
                              className: "jsx-2c7e3dacc715f201 pending",
                              children:
                                "You must connect your LinkedIn account to continue.",
                            })),
                    }),
                    (0, i.jsx)(a(), {
                      id: "2c7e3dacc715f201",
                      children:
                        ".message.jsx-2c7e3dacc715f201{text-align:center;margin-bottom:8px;font-weight:bold}.message.jsx-2c7e3dacc715f201 .done.jsx-2c7e3dacc715f201{color:var(--color-RemoGreen)}.message.jsx-2c7e3dacc715f201 .disabled.jsx-2c7e3dacc715f201{color:var(--color-RemoRed)}",
                    }),
                  ],
                }),
              });
            }
            render() {
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(J(), {
                    url: b.SEON_DEVICE_FINGERPRINTING_URL,
                    onLoad: () => {
                      this.setState({ loadingFingerprintingScript: !1 });
                    },
                    onError: () => {
                      this.setState({
                        loadingFingerprintingScript: !1,
                        errorFingerprintingScript: !0,
                      });
                    },
                  }),
                  (0, i.jsx)(
                    e,
                    le({}, this.props, {
                      displayType: "Account Verification",
                      content: this.renderContent(),
                      sectionMessage: this.renderSectionMessage(),
                      sectionActions: (0, i.jsx)("div", {}),
                      canContinue:
                        this.props.user.personaVerificationCourseBypass ||
                        ((0 === this.state.numRemainingVerificationsRequired ||
                          this.state.numVerificationsFailed > 0) &&
                          (!this.props.contents
                            .isLinkedInVerificationRequired ||
                            this.state.isLinkedInVerified) &&
                          !1 === this.state.fraudCheckFailed),
                    })
                  ),
                ],
              });
            }
            constructor(e) {
              super(e);
              var s = this;
              this.runGoldCheckIfEnabled = re(function* () {
                if (s.props.contents.enablePersonaGoldCheck)
                  try {
                    yield (0, u.fetchApi)("/fraud/run_gold_check", {
                      method: "POST",
                      parseAndHandle: !0,
                    });
                  } catch (e) {
                    te.Z.warn("Failed to run gold check", e);
                  }
              });
              var i = this;
              this.checkFraud = re(function* () {
                if (
                  i.state.loadingFingerprintingScript ||
                  i.state.errorFingerprintingScript ||
                  !i.props.contents.enableFraudCheck
                )
                  (!i.state.errorFingerprintingScript &&
                    i.props.contents.enableFraudCheck) ||
                    i.setState({ checkedFraud: !0 });
                else {
                  i.setState({ loading: !0 }),
                    seon.config({
                      host: "seondf.com",
                      session_id: ee().v4(),
                      audio_fingerprint: !0,
                      canvas_fingerprint: !0,
                      webgl_fingerprint: !0,
                    });
                  const e = yield seon.getBase64Session();
                  yield (0, u.fetchApi)("/fraud/transaction", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: { actionType: "remotasks_signup", sessionPayload: e },
                  }).then(u.handleErrorsAndJsonify),
                    i.setState({ loading: !1, checkedFraud: !0 });
                  (yield i.hasFraudCheckFailed()) &&
                    i.setState({ fraudCheckFailed: !0 });
                }
              });
              var n = this;
              (this.checkLinkedInVerification = re(function* () {
                const e = yield (0, u.fetchApi)(
                  "/worker/profile/has_linkedin_vanity_name",
                  { method: "GET" }
                ).then(u.handleErrorsAndJsonify);
                n.setState({ isLinkedInVerified: e });
              })),
                (this.hasFraudCheckFailed = re(function* () {
                  const { fraudCheckFailed: e } = yield (0, u.fetchApi)(
                    "/worker/fraud/check",
                    { method: "POST", parseAndHandle: !0, body: {} }
                  );
                  return e;
                })),
                (this.getNumRemainingVerificationsRequired = (function () {
                  var e = re(function* (e, t, s) {
                    let i = s.length,
                      n = 0;
                    const a = Object.entries(b.equivalentPersonaTemplates),
                      o = [];
                    for (const r of s) {
                      if (o.includes(r)) continue;
                      const s =
                          r === b.VerificationTemplate.UserVerificationBestFit
                            ? (0, ae.d6)(e)
                            : r,
                        c = a.find((e) => e.includes(s)) || [s],
                        l = t.filter(
                          (e) =>
                            e.status === b.VerificationInquiryStatus.Approved &&
                            c.includes(e.templateId)
                        ),
                        d = t.filter(
                          (e) =>
                            e.status === b.VerificationInquiryStatus.Declined &&
                            c.includes(e.templateId)
                        );
                      l.length
                        ? i--
                        : !l.length &&
                          d.length >=
                            b.MAX_VERIFICATION_ATTEMPTS_PER_TEMPLATE &&
                          (yield (0, u.fetchApi)(
                            "/worker/verifications/decline",
                            {
                              method: "POST",
                              parseAndHandle: !0,
                              body: { userId: e._id },
                            }
                          ),
                          n++),
                        o.push(...c);
                    }
                    return {
                      numRemainingVerificationsRequired: i,
                      numVerificationsFailed: n,
                    };
                  });
                  return function (t, s, i) {
                    return e.apply(this, arguments);
                  };
                })());
              var a = this;
              this.checkAccountVerificationStatus = re(function* (e = !0) {
                var t;
                a.setState({ loading: !0 });
                const { userVerifications: s } = yield (0, u.fetchApi)(
                    "/worker/real_verifications",
                    {
                      method: "GET",
                      parseAndHandle: !0,
                      query: {
                        templatesToInclude: a.props.contents.templates,
                        maxVerificationsPerTemplate:
                          b.DEFAULT_MAX_VERIFICATIONS_PER_TEMPLATE,
                      },
                    }
                  ),
                  i = a.props.user;
                let n = [...s];
                const o =
                  null === (t = i.reverificationInfo) || void 0 === t
                    ? void 0
                    : t.lastTriggeredAt;
                o &&
                  (n = s.filter(
                    (e) =>
                      !b.reverificationTemplates.includes(e.templateId) ||
                      e.createdAt > o
                  ));
                const {
                  numRemainingVerificationsRequired: r,
                  numVerificationsFailed: c,
                } = yield a.getNumRemainingVerificationsRequired(
                  a.props.user,
                  n,
                  a.props.contents.templates
                );
                a.setState({
                  verifications: n,
                  numRemainingVerificationsRequired: r,
                  numVerificationsFailed: c,
                  loading: !1,
                }),
                  e && (yield new Promise((e) => setTimeout(e, 1e3)));
              });
              var o = this;
              (this.updateVerificationSource = (function () {
                var e = re(function* (e) {
                  (yield (0, u.fetchApi)("/worker/verifications/updateSource", {
                    method: "POST",
                    parseAndHandle: !0,
                    body: {
                      inquiryId: e,
                      source:
                        o.props.contents.source || b.VerificationSource.Course,
                    },
                  })) ||
                    te.Z.warn(
                      `Failed to update source for inquiry ${e}, source should be ${
                        o.props.contents.source || b.VerificationSource.Course
                      }`
                    );
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
                (this.onVerificationCompleted = (e) => {
                  var s = this;
                  return (function () {
                    var i = re(function* ({
                      inquiryId: i,
                      status: n,
                      fields: a,
                    }) {
                      var o, r;
                      s.setState({ loading: !0 });
                      (null ===
                        (r =
                          null === (o = s.props.user) || void 0 === o
                            ? void 0
                            : o.tags) || void 0 === r
                        ? void 0
                        : r.includes(b.TEST_ACCOUNT_TAG_ID)) &&
                        (yield (0, u.fetchApi)("/worker/verifications", {
                          method: "POST",
                          body: { inquiryId: i, templateId: e, status: n },
                        }));
                      let c = 0;
                      const l = setInterval(
                        re(function* () {
                          yield s.checkAccountVerificationStatus(), (c += 1);
                          const e = 4 === c,
                            n = s.state.verifications.find(
                              (e) => e.inquiryId === i && t.includes(e.status)
                            ),
                            a =
                              s.props.contents.source ||
                              b.VerificationSource.Course;
                          n &&
                            n.source !== a &&
                            (yield s.updateVerificationSource(i)),
                            (e || n) &&
                              (s.setState({ loading: !1 }), clearInterval(l));
                        }),
                        3e3
                      );
                      s.runGoldCheckIfEnabled(), s.setState({ loading: !1 });
                    });
                    return function (e) {
                      return i.apply(this, arguments);
                    };
                  })();
                });
              var r = this;
              (this.onVerificationEvent = (function () {
                var e = re(function* (e, t) {
                  if ((r.setState({ loading: !0 }), "start" === e)) {
                    let e = 0;
                    const s = 3,
                      i = setInterval(
                        re(function* () {
                          yield r.checkAccountVerificationStatus(), (e += 1);
                          const n = e === s,
                            a = r.state.verifications.find(
                              (e) =>
                                e.inquiryId ===
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.inquiryId)
                            );
                          a &&
                            (yield r.updateVerificationSource(
                              null === t || void 0 === t ? void 0 : t.inquiryId
                            )),
                            (n || a) &&
                              (r.setState({ loading: !1 }), clearInterval(i));
                        }),
                        3e3
                      );
                  }
                  r.setState({ loading: !1 });
                });
                return function (t, s) {
                  return e.apply(this, arguments);
                };
              })()),
                (this.state = {
                  numRemainingVerificationsRequired:
                    e.contents.templates.length,
                  numVerificationsFailed: 0,
                  loading: !1,
                  verifications: [],
                  loadingFingerprintingScript: !0,
                  errorFingerprintingScript: !1,
                  fraudCheckFailed: !1,
                  checkedFraud: !1,
                  isLinkedInVerified: !1,
                });
            }
          }
          return s;
        },
        Ce = (e) => {
          const { 0: t, 1: s } = (0, d.useState)(!1);
          return (0, i.jsx)(
            ve,
            le({}, e, {
              content: null,
              canContinue: t,
              children: (0, i.jsx)(ie.Z, {
                user: e.user,
                setCanContinue: s,
                type: b.CourseSectionType.ScheduleInterview,
                title: e.title,
                contents: e.contents,
                courseId: e.course._id,
              }),
            })
          );
        },
        Se = ((e) => {
          class t extends d.Component {
            get canCheckAnswer() {
              return (
                !this.state.isLastAttemptCorrect &&
                (!this.state.lastAttemptTime ||
                  this.checkAnswerCooldownSeconds < 0)
              );
            }
            get checkAnswerCooldownSeconds() {
              return this.state.lastAttemptTime
                ? 7 - l()().diff(this.state.lastAttemptTime) / 1e3
                : 0;
            }
            renderInstructions() {
              const e = () => this.setState({ showInstructionHint: !1 });
              return (0, i.jsxs)(y.u_, {
                isOpen: this.state.showInstructionHint,
                onRequestClose: e,
                contentLabel: "Instructions",
                maxWidth: "80vw",
                children: [
                  (0, i.jsx)(y.xB, {
                    onRequestClose: e,
                    children: this.props.t("instructions"),
                  }),
                  (0, i.jsx)(y.fe, {
                    children: (0, i.jsx)(j.ZP, {
                      instructionList: this.props.course.instructionList,
                      isFullInstructions: !1,
                    }),
                  }),
                ],
              });
            }
            componentDidMount() {
              var e = this;
              return re(function* () {
                const t = (yield e.checkCourseAnswers()) || [],
                  s = t.length > 0 ? [] : yield e.checkLocalAnswers();
                e.setState({ selectedChoices: t.length > 0 ? t : s || [] });
              })();
            }
            componentWillUnmount() {
              this.saveResponseLocal();
            }
            renderContent() {
              const {
                  choices: e,
                  explanation: t,
                  hint: s,
                } = this.props.contents,
                { isLastAttemptCorrect: n, showFeedback: o } = this.state,
                c = s && o && !n,
                l = t && o && n,
                h =
                  !n &&
                  r().get(this.props.course, "instructionList") &&
                  !this.props.course.instructionList.refreshersOnly;
              return (0, i.jsxs)(d.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "jsx-cf2985a28295e61b " +
                      (A()(this.props.classes.choices, {
                        [this.props.classes.choicesResponsive]:
                          this.props.responsive,
                      }) || ""),
                    children: r().map(e, this.renderChoice),
                  }),
                  l &&
                    (0, i.jsxs)("div", {
                      className: "jsx-cf2985a28295e61b feedback-section",
                      children: [
                        (0, i.jsx)("span", {
                          style: { marginRight: 16, flexShrink: 0 },
                          className: "jsx-cf2985a28295e61b",
                          children: (0, i.jsx)(g.Z, {
                            emoji: "\ud83c\udf1f",
                            size: "24px",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "jsx-cf2985a28295e61b",
                          children: t,
                        }),
                      ],
                    }),
                  c &&
                    (0, i.jsxs)("div", {
                      className: "jsx-cf2985a28295e61b feedback-section",
                      children: [
                        (0, i.jsx)("span", {
                          style: { marginRight: 16, flexShrink: 0 },
                          className: "jsx-cf2985a28295e61b",
                          children: (0, i.jsx)(g.Z, {
                            emoji: "\u26a0\ufe0f",
                            size: "24px",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "jsx-cf2985a28295e61b",
                          children: s,
                        }),
                      ],
                    }),
                  h &&
                    (0, i.jsxs)("div", {
                      className: "jsx-cf2985a28295e61b feedback-section",
                      children: [
                        (0, i.jsx)("span", {
                          style: { marginRight: 16, flexShrink: 0 },
                          className: "jsx-cf2985a28295e61b",
                          children: (0, i.jsx)(g.Z, {
                            emoji: "\ud83d\udcd6",
                            size: "24px",
                          }),
                        }),
                        (0, i.jsxs)("span", {
                          className: "jsx-cf2985a28295e61b",
                          children: [
                            "Feel free to",
                            " ",
                            (0, i.jsx)("a", {
                              onClick: () =>
                                this.setState({ showInstructionHint: !0 }),
                              className: "jsx-cf2985a28295e61b",
                              children: "double check the instructions!",
                            }),
                          ],
                        }),
                        this.renderInstructions(),
                      ],
                    }),
                  (0, i.jsx)(a(), {
                    id: "cf2985a28295e61b",
                    children:
                      ".feedback-section.jsx-cf2985a28295e61b{background:var(--color-RemoGray01);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);padding:16px;margin-top:16px;font-size:16px;font-weight:bold;margin-bottom:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",
                  }),
                ],
              });
            }
            renderSectionActions() {
              return (this.props.course.isCertification &&
                !this.props.skipGrading) ||
                (!this.props.course.isCertification &&
                  this.props.skipGrading) ||
                this.props.contents.noCorrectAnswerRequired
                ? null
                : (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.zx, {
                      style: { width: "100%" },
                      type: "primary",
                      onClick: this.handleCheckAnswer,
                      disabled: !this.canCheckAnswer,
                      children: this.props.t("check-answer"),
                    }),
                  });
            }
            renderSectionMessage() {
              return void 0 === this.state.isLastAttemptCorrect
                ? null
                : this.state.isLastAttemptCorrect
                ? (0, i.jsxs)("div", {
                    style: { color: C.w.RemoGreen, fontWeight: 500 },
                    children: [
                      (0, i.jsx)(p.G, { icon: "check" }),
                      " \xa0 ",
                      this.props.t("correct"),
                    ],
                  })
                : (0, i.jsxs)("div", {
                    style: { fontWeight: "bold" },
                    children: [
                      this.props.t("try-again-timer"),
                      " ",
                      (0, i.jsxs)("span", {
                        style: { opacity: 0.5 },
                        children: [
                          Math.round(this.checkAnswerCooldownSeconds),
                          " ",
                          this.props.t("seconds"),
                        ],
                      }),
                    ],
                  });
            }
            canContinue() {
              return (
                (!!this.state.isLastAttemptCorrect ||
                  this.props.course.isCertification) &&
                !!this.state.selectedChoices.length
              );
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, r().omit(this.props, ["classes"]), {
                  handleContinue: () => {
                    this.saveResponseLocal(),
                      this.props.handleContinue({
                        selectedChoices: this.state.selectedChoices,
                      });
                  },
                  content: this.renderContent(),
                  sectionActions: this.renderSectionActions(),
                  sectionMessage: this.renderSectionMessage(),
                  canContinue: this.canContinue() || !!this.props.skipGrading,
                  isCertification: this.props.course.isCertification,
                  isLoading: this.state.selectedChoices.length < 1,
                })
              );
            }
            constructor(e) {
              super(e),
                (this.handleTick = () => {
                  this.checkAnswerCooldownSeconds > 0
                    ? this.forceUpdate()
                    : (this.setState({
                        lastAttemptTime: null,
                        isLastAttemptCorrect: void 0,
                      }),
                      clearInterval(this.intervalId));
                }),
                (this.handleToggleChoice = (e) => {
                  if (
                    (this.props.contents.noCorrectAnswerRequired &&
                      this.setState({ isLastAttemptCorrect: !0 }),
                    this.props.contents.singleSelect)
                  )
                    return this.setState({ selectedChoices: [e] });
                  const t = r().cloneDeep(this.state.selectedChoices);
                  r().includes(t, e) ? r().pull(t, e) : t.push(e),
                    this.setState({ selectedChoices: t });
                });
              var t = this;
              (this.handleCheckAnswer = re(function* () {
                (yield (0, u.fetchApi)("/courses/checkAnswer", {
                  method: "POST",
                  body: {
                    name: t.props.course.name,
                    selectedChoices: t.state.selectedChoices,
                    sectionIndex: t.props.sectionIndex,
                  },
                }).then(u.handleErrorsAndJsonify)).isCorrect
                  ? t.setState({ isLastAttemptCorrect: !0, showFeedback: !0 })
                  : (t.setState({
                      isLastAttemptCorrect: !1,
                      lastAttemptTime: l()(),
                      showFeedback: !0,
                    }),
                    (t.intervalId = window.setInterval(t.handleTick, 1e3)));
              })),
                (this.renderChoice = (e, t) =>
                  (0, i.jsx)(
                    "div",
                    {
                      className: A()(this.props.classes.choice, {
                        [this.props.classes.choiceResponsive]:
                          this.props.responsive,
                        isSelected: r().includes(this.state.selectedChoices, t),
                      }),
                      onClick: () => this.handleToggleChoice(t),
                      children: ue(e),
                    },
                    `${e}+${t}`
                  ));
              var s = this;
              this.checkLocalAnswers = re(function* () {
                const { sectionIndex: e } = s.props,
                  t = s.props.title + "_" + e;
                return JSON.parse(sessionStorage.getItem(t) || "[]").filter(
                  (e) => -1 !== e
                );
              });
              var n = this;
              this.checkCourseAnswers = re(function* () {
                try {
                  var e;
                  const { course: t, sectionIndex: s } = n.props,
                    i = yield (0, u.fetchApi)("/courses/getSectionRecent", {
                      method: "POST",
                      body: { id: t._id, sectionIndex: s },
                    }).then(u.handleErrorsAndJsonify);
                  return (null === i ||
                  void 0 === i ||
                  null === (e = i.answers) ||
                  void 0 === e
                    ? void 0
                    : e.length) > 0
                    ? i.answers
                    : [];
                } catch (t) {
                  return [];
                }
              });
              var a = this;
              (this.saveResponseLocal = re(function* () {
                const { sectionIndex: e } = a.props,
                  { selectedChoices: t } = a.state;
                if (t.length < 1) return;
                const s = a.props.title + "_" + e;
                sessionStorage.setItem(
                  s,
                  JSON.stringify(a.state.selectedChoices)
                );
              })),
                (this.state = {
                  lastAttemptTime: null,
                  selectedChoices: [],
                  showFeedback: !1,
                  showInstructionHint: !1,
                });
            }
          }
          const s = (0, E.Z)({
            choice: {
              border: "1px solid var(--border-gray-light)",
              borderRadius: "var(--border-radius)",
              padding: "16px",
              margin: "16px 0",
              cursor: "pointer",
              transition: "all 0.1s",
              userSelect: "none",
              "&:hover": { boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" },
              "&.isSelected": {
                border: "1px solid var(--color-RemoBlue)",
                boxShadow: "0px 0px 0px 1px var(--color-RemoBlue)",
              },
              img: { maxWidth: "200px", maxHeight: "200px" },
            },
            choiceResponsive: {
              [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: {
                margin: "8px 0",
                padding: "0 16px",
              },
            },
            choices: {
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridColumnGap: "32px",
            },
            choicesResponsive: {
              [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: {
                display: "flex",
                flexDirection: "column",
              },
            },
          });
          return (0, I.Zh)("course")((0, N.D2)(s)(t));
        })(ve),
        Le = ((e) => {
          class t extends d.Component {
            componentDidMount() {
              var e = this;
              return re(function* () {
                var t;
                e.checkScenarioStatus(),
                  e.loadPreviousAttempts(),
                  window.addEventListener("focus", e.checkScenarioStatus);
                const s =
                  null === (t = e.props.course.grantedPermissions[0]) ||
                  void 0 === t
                    ? void 0
                    : t.permissionGroup;
                if (s) {
                  const t = yield (0, R.V3)({
                    feature: "use-new-gis-training-tool",
                    querystring: f().stringify(
                      r().pickBy({ permissionGroupId: s })
                    ),
                  });
                  e.setState({ useNewTrainingPage: t });
                }
              })();
            }
            componentWillUnmount() {
              window.removeEventListener("focus", this.checkScenarioStatus);
            }
            renderContent() {
              if (this.state.throttleTimeMs) return null;
              const e =
                  r().get(this.props.course, "sections", []).length - 1 !==
                  this.props.sectionIndex
                    ? "" +
                      ("&course_url=" +
                        encodeURIComponent(window.location.href))
                    : "",
                t = this.props.contents.scenarioId.trim(),
                s = this.props.contents.reviewLevel
                  ? `&reviewLevel=${this.props.contents.reviewLevel}`
                  : "",
                n = this.state.useNewTrainingPage
                  ? `/gis/training/${t}`
                  : `/training?trainingId=${t}${s}${e}`,
                o = (0, w.Gb)(n),
                c = () => {
                  this.state.useNewTrainingPage &&
                  this.state.previousAttempts.length
                    ? this.setState({ showAttemptsDialog: !0 })
                    : window.open(o, "_blank");
                };
              return (0, i.jsxs)("div", {
                className: a().dynamic([
                  [
                    "4d6a3eb52faecbe5",
                    [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                  ],
                ]),
                children: [
                  (0, i.jsx)("p", {
                    className: a().dynamic([
                      [
                        "4d6a3eb52faecbe5",
                        [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                      ],
                    ]),
                    children: this.props.t("keep-tab-open"),
                  }),
                  this.state.loadingScenario
                    ? (0, i.jsx)("div", {
                        className:
                          a().dynamic([
                            [
                              "4d6a3eb52faecbe5",
                              [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                            ],
                          ]) + " scenario-box",
                        children: (0, i.jsx)("p", {
                          className: a().dynamic([
                            [
                              "4d6a3eb52faecbe5",
                              [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                            ],
                          ]),
                          children: "'Loading'",
                        }),
                      })
                    : (0, i.jsx)("div", {
                        onClick: () => c(),
                        className:
                          a().dynamic([
                            [
                              "4d6a3eb52faecbe5",
                              [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                            ],
                          ]) + " scenario-box",
                        children: (0, i.jsx)("p", {
                          className: a().dynamic([
                            [
                              "4d6a3eb52faecbe5",
                              [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                            ],
                          ]),
                          children: (0, i.jsxs)("span", {
                            onClick: () => {
                              G.c.track("Training - Opens BM");
                            },
                            className: a().dynamic([
                              [
                                "4d6a3eb52faecbe5",
                                [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                              ],
                            ]),
                            children: [
                              this.props.t("open-scenario"),
                              " \xa0 ",
                              (0, i.jsx)(p.G, { icon: "bullseye" }),
                            ],
                          }),
                        }),
                      }),
                  (0, i.jsx)(P, {
                    open: this.state.showAttemptsDialog,
                    onClose: () => {
                      this.setState({ showAttemptsDialog: !1 });
                    },
                    previousAttempts: this.state.previousAttempts,
                    newAttemptURL: o,
                  }),
                  (0, i.jsx)(a(), {
                    id: "4d6a3eb52faecbe5",
                    dynamic: [S.MOBILE_THRESHOLD, S.MOBILE_THRESHOLD],
                    children: `.scenario-box.__jsx-style-dynamic-selector{padding:100px;background:var(--color-RemoGray01);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:"Monaco",monospace;font-size:16px;color:rgba(0,0,0,.5);cursor:pointer;opacity:.7}.scenario-box.__jsx-style-dynamic-selector:hover{opacity:1}@media(max-width:${S.MOBILE_THRESHOLD}){.scenario-box.__jsx-style-dynamic-selector{padding:0 16px;margin:-8px 0}.scenario-box.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:8px 0}}.scenario-box.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:hover{text-decoration:underline}@media(max-width:${S.MOBILE_THRESHOLD}){.scenario-box.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-size:12px}}`,
                  }),
                ],
              });
            }
            renderSectionActions() {
              return this.state.hasValidAttempt || this.state.loading
                ? (0, i.jsx)("div", {})
                : (0, i.jsx)("div", {
                    children: (0, i.jsxs)(h.zx, {
                      onClick: this.checkScenarioStatus,
                      children: [
                        (0, i.jsx)(p.G, { icon: "sync-alt" }),
                        " \xa0 ",
                        this.props.t("refresh-scenario-status"),
                      ],
                    }),
                  });
            }
            renderSectionMessage() {
              return (0, i.jsxs)("div", {
                className: "jsx-d6a3c6c4bb477aaa message",
                children: [
                  this.state.hasValidAttempt
                    ? (0, i.jsxs)("span", {
                        className: "jsx-d6a3c6c4bb477aaa done",
                        children: [
                          (0, i.jsx)(p.G, { icon: "check" }),
                          " \xa0 ",
                          this.props.t("scenario-done"),
                        ],
                      })
                    : (0, i.jsx)(i.Fragment, {
                        children: this.state.throttleTimeMs
                          ? (0, i.jsx)("span", {
                              className: "jsx-d6a3c6c4bb477aaa disabled",
                              children: (0, L._W)(this.state.throttleTimeMs),
                            })
                          : (0, i.jsx)("span", {
                              className: "jsx-d6a3c6c4bb477aaa pending",
                              children: this.props.t("scenario-not-done"),
                            }),
                      }),
                  (0, i.jsx)(a(), {
                    id: "d6a3c6c4bb477aaa",
                    children:
                      ".message.jsx-d6a3c6c4bb477aaa{text-align:center;margin-bottom:8px;font-weight:bold}.message.jsx-d6a3c6c4bb477aaa .done.jsx-d6a3c6c4bb477aaa{color:var(--color-RemoGreen)}.message.jsx-d6a3c6c4bb477aaa .disabled.jsx-d6a3c6c4bb477aaa{color:var(--color-RemoRed)}",
                  }),
                ],
              });
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  handleContinue: () =>
                    this.props.handleContinue({
                      scenarioAccuracy: this.state.scenarioAccuracy,
                    }),
                  displayType: this.props.t("training-scenario"),
                  content: this.renderContent(),
                  sectionActions: this.renderSectionActions(),
                  sectionMessage: this.renderSectionMessage(),
                  canContinue: this.state.hasValidAttempt,
                })
              );
            }
            constructor(e) {
              super(e);
              var t = this;
              this.checkScenarioStatus = re(function* () {
                var e;
                t.setState({ loading: !0 });
                const s = !!(null === (e = t.props.course.initialTestInfo) ||
                  void 0 === e
                    ? void 0
                    : e.isInitialTest),
                  i = yield (0, u.fetchApi)(
                    `/training/status/${t.props.contents.scenarioId}`,
                    { parseAndHandle: !0, query: { findAnyGraded: s } }
                  );
                t.setState({
                  hasValidAttempt: s ? i.foundAttempt : i.passedBar,
                  throttleTimeMs: i.throttleTimeMs,
                  loading: !1,
                  scenarioAccuracy: i.scenarioAccuracy,
                });
              });
              var s = this;
              (this.loadPreviousAttempts = re(function* () {
                s.setState({ loadingScenario: !0 });
                const e = s.props.user.id,
                  t = yield (0, u.fetchApi)(
                    `/training/training_attempts/${s.props.contents.scenarioId}/${e}`,
                    { parseAndHandle: !0 }
                  );
                s.setState({
                  previousAttempts: t.trainingAttempts,
                  loadingScenario: !1,
                });
              })),
                (this.state = {
                  hasValidAttempt: !1,
                  loading: !1,
                  throttleTimeMs: null,
                  useNewTrainingPage: !1,
                  showAttemptsDialog: !1,
                  loadingScenario: !1,
                  previousAttempts: [],
                });
            }
          }
          return (0, I.Zh)("course")(t);
        })(ve),
        Ie = ((e) => {
          class t extends d.Component {
            renderContent() {
              return (0, i.jsx)(N.vC, {
                content: x.ZP.render(this.props.contents.body),
              });
            }
            isLoading() {
              if (
                r().isNil(this.props.contents.requireInputs) ||
                !this.props.contents.requireInputs
              )
                return !1;
              const e = document.querySelectorAll(".ql-editor > div > input");
              if (!e || !e.length) return !1;
              let t,
                s = !0;
              for (const i of e) {
                const e = i;
                if (("checkbox" === e.type && !e.checked) || !e.value) {
                  s = !1;
                  break;
                }
                "radio" === e.type &&
                  (e.checked || r().isNil(t)) &&
                  (t = e.checked);
              }
              return !(s && (r().isNil(t) || t));
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  canContinue: !0,
                  isLoading: this.isLoading(),
                })
              );
            }
          }
          return t;
        })(ve),
        Te = ((e) => {
          class t extends d.Component {
            componentDidMount() {
              const e = () => {
                  const e = Math.floor(
                      window.screen.width * window.devicePixelRatio
                    ),
                    t = Math.floor(
                      window.screen.height * window.devicePixelRatio
                    );
                  this.setState({ resolutionWidth: e, resolutionHeight: t });
                },
                t = () => {
                  const e = (e) => {
                      const t = new XMLHttpRequest();
                      t.open("GET", e, !0),
                        (t.responseType = "blob"),
                        (t.onload = () => {
                          if (200 === t.status) {
                            const e =
                              +t.getResponseHeader("content-length") /
                              1024 /
                              1024;
                            this.setState({
                              videoSizeMB: this.state.videoSizeMB + e,
                            });
                          }
                        }),
                        t.send();
                    },
                    t = (e) => {
                      const t = e.src,
                        s = r().cloneDeep(this.state.pendingVideos);
                      r().remove(s, (e) => e === t),
                        this.setState({ pendingVideos: s });
                    };
                  b.HARDWARE_CALIBRATION_VIDEO_URLS.map((s, i) => {
                    const n = document.getElementById("video-root"),
                      a = document.createElement("video");
                    (a.id = i.toString()),
                      (a.width = 1),
                      (a.poster = b.HARDWARE_CALIBRATION_DISPLAY_URL),
                      (a.src = s),
                      (a.oncanplaythrough = () => t(a)),
                      n.appendChild(a),
                      e(s);
                  });
                };
              this.setState({ isCalibrating: !0, pageLoadedTime: new Date() }),
                (() => {
                  t(),
                    ((e) => {
                      let t,
                        s = null,
                        i = !1;
                      window.requestAnimationFrame ||
                        (window.requestAnimationFrame =
                          window.mozRequestAnimationFrame ||
                          window.webkitRequestAnimationFrame);
                      let n = 0;
                      const a = (o) => {
                        if ((t || (t = o), (n += 1), n > 50)) {
                          const a = Math.floor((1e3 * n) / (o - t));
                          i ||
                            (e.call(void 0, a),
                            (i = !0),
                            window.cancelAnimationFrame(s),
                            (s = null));
                        } else s = window.requestAnimationFrame(a);
                      };
                      window.requestAnimationFrame(a);
                    })(this.handleSetRefreshRate),
                    e();
                })();
            }
            componentDidUpdate() {
              this.state.isCalibrating &&
                void 0 === this.state.speedMB &&
                !this.state.pendingVideos.length &&
                this.recordVideoLoadingTime(),
                !this.state.isCalibrationDone &&
                  this.state.speedMB &&
                  this.state.refreshRate &&
                  this.state.resolutionWidth &&
                  this.state.resolutionHeight &&
                  this.setState({ isCalibrationDone: !0, isCalibrating: !1 });
            }
            renderContent() {
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    id: "video-root",
                    className: "jsx-80d033fc145726c",
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-80d033fc145726c info-container",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "jsx-80d033fc145726c info",
                        children: [
                          this.state.resolutionWidth &&
                          this.state.resolutionHeight
                            ? (0, i.jsx)("span", {
                                className: "jsx-80d033fc145726c",
                                children: "\u2705",
                              })
                            : (0, i.jsx)(N.$j, {
                                style: { width: "12px" },
                                size: "sssm",
                              }),
                          (0, i.jsx)("div", {
                            className: "jsx-80d033fc145726c hsp__1",
                          }),
                          (0, i.jsxs)("label", {
                            className: "jsx-80d033fc145726c",
                            children: [
                              (0, i.jsx)(p.G, { icon: "desktop" }),
                              " Display resolution check",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "jsx-80d033fc145726c info",
                        children: [
                          this.state.refreshRate
                            ? (0, i.jsx)("span", {
                                className: "jsx-80d033fc145726c",
                                children: "\u2705",
                              })
                            : (0, i.jsx)(N.$j, {
                                style: { width: "12px" },
                                size: "sssm",
                              }),
                          (0, i.jsx)("div", {
                            className: "jsx-80d033fc145726c hsp__1",
                          }),
                          (0, i.jsxs)("label", {
                            className: "jsx-80d033fc145726c",
                            children: [
                              (0, i.jsx)(p.G, { icon: "browser" }),
                              " ",
                              "  ",
                              " Screen refresh rate check",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "jsx-80d033fc145726c info",
                        children: [
                          this.state.speedMB
                            ? (0, i.jsx)("span", {
                                className: "jsx-80d033fc145726c",
                                children: "\u2705",
                              })
                            : (0, i.jsx)(N.$j, {
                                style: { width: "12px" },
                                size: "sssm",
                              }),
                          (0, i.jsx)("div", {
                            className: "jsx-80d033fc145726c hsp__1",
                          }),
                          (0, i.jsxs)("label", {
                            className: "jsx-80d033fc145726c",
                            children: [
                              (0, i.jsx)(p.G, { icon: "wifi" }),
                              " Network speed check",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(a(), {
                    id: "80d033fc145726c",
                    children:
                      ".info-container.jsx-80d033fc145726c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center}.info.jsx-80d033fc145726c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:280px}",
                  }),
                ],
              });
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  handleContinue: () =>
                    this.props.handleContinue({
                      calibrationResult: {
                        refreshRate: this.state.refreshRate,
                        resolutionWidth: this.state.resolutionWidth,
                        resolutionHeight: this.state.resolutionHeight,
                        speedMB: this.state.speedMB,
                      },
                    }),
                  content: this.renderContent(),
                  isLoading: !this.state.isCalibrationDone,
                  canContinue: !1,
                })
              );
            }
            constructor(e) {
              super(e),
                (this.recordVideoLoadingTime = () => {
                  const e =
                      (Date.now() - this.state.pageLoadedTime.getTime()) / 1e3,
                    t = this.state.videoSizeMB / e;
                  this.setState({ speedMB: t });
                }),
                (this.handleSetRefreshRate = (e) => {
                  this.setState({ refreshRate: e });
                }),
                (this.handleCalibrationDone = () => {
                  this.setState({ isCalibrationDone: !0, isCalibrating: !1 });
                }),
                (this.state = {
                  isCalibrationDone: !1,
                  isCalibrating: !1,
                  refreshRate: 0,
                  resolutionWidth: 0,
                  resolutionHeight: 0,
                  pageLoadedTime: void 0,
                  speedMB: void 0,
                  pendingVideos: r().cloneDeep(
                    b.HARDWARE_CALIBRATION_VIDEO_URLS
                  ),
                  videoSizeMB: 0,
                });
            }
          }
          return t;
        })(ve),
        Ae = ((e) => {
          class t extends d.Component {
            renderContent() {
              var e, t;
              const s = this.props.i18n.language,
                n =
                  (null ===
                    (e = r()
                      .get(this.props, "contents.videoSubtitles", [])
                      .find(({ srcLang: e }) => e === s)) || void 0 === e
                    ? void 0
                    : e.srcLang) || "en",
                a = (
                  null === (t = this.props.userFlags) || void 0 === t
                    ? void 0
                    : t["quality-AB-course-subtitles"]
                )
                  ? r()
                      .get(this.props, "contents.videoSubtitles", [])
                      .map(({ srcLang: e, src: t }) => ({
                        kind: "subtitles",
                        src: t,
                        srcLang: e,
                        default: e === n,
                      }))
                  : [];
              return (0, i.jsx)($, {
                displayCustomControls: !0,
                url: this.props.contents.videoUrl,
                onEnded: this.handleVideoDone,
                config: {
                  file: { attributes: { crossOrigin: "true" }, tracks: a },
                },
                allowSkimming: this.props.contents.allowSkimming,
              });
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  displayType: this.props.t("video"),
                  content: this.renderContent(),
                  canContinue: this.state.isVideoDone,
                })
              );
            }
            constructor(e) {
              var t;
              super(e),
                (this.handleVideoDone = () => {
                  this.setState({ isVideoDone: !0 });
                }),
                (this.state = {
                  isVideoDone:
                    null !== (t = e.contents.allowSkimming) &&
                    void 0 !== t &&
                    t,
                });
            }
          }
          return (0, I.Zh)("course")(t);
        })(ve),
        Ne = ((e) => {
          class t extends d.Component {
            renderContent() {
              return (0, i.jsxs)("div", {
                className: "jsx-fc9a386f62234d32",
                children: [
                  (0, i.jsx)("iframe", {
                    width: "100%",
                    src: this.props.contents.iframeUrl,
                    className: "jsx-fc9a386f62234d32",
                  }),
                  (0, i.jsx)(a(), {
                    id: "fc9a386f62234d32",
                    children: "iframe.jsx-fc9a386f62234d32{height:80vh}",
                  }),
                ],
              });
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  canContinue: !0,
                })
              );
            }
          }
          return t;
        })(ve),
        Me = ((e) => {
          class t extends d.Component {
            renderContent() {
              return r().isEmpty(
                r().get(this.props.contents, "instructionList")
              )
                ? null
                : (0, i.jsx)(
                    ye,
                    le({}, this.props.contents, { emitMetrics: !0 })
                  );
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  canContinue: !0,
                })
              );
            }
          }
          return t;
        })(ve),
        Ee = ((e) => {
          class t extends d.Component {
            renderContent() {
              return r().get(this.props.contents, "instructionObjectId")
                ? (0, i.jsx)(we, le({}, this.props.contents))
                : null;
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  canContinue: !0,
                })
              );
            }
          }
          return t;
        })(ve),
        De = ((e) => {
          class t extends d.Component {
            componentDidMount() {
              var e = this;
              return re(function* () {
                const t = (yield e.checkCourseAnswers()) || [],
                  s = t.length > 0 ? [] : yield e.checkLocalAnswers();
                e.setState({
                  responses: t.length > 0 ? t : s || e.state.responses,
                }),
                  document.addEventListener("copy", e.handleCopyTextEvent),
                  document.addEventListener("paste", e.handlePasteEvent);
              })();
            }
            componentWillUnmount() {
              this.saveResponseLocal(),
                document.removeEventListener("copy", this.handleCopyTextEvent),
                document.removeEventListener("paste", this.handlePasteEvent);
            }
            get canCheckAnswer() {
              return (
                !this.state.isLastAttemptCorrect &&
                (!this.state.lastAttemptTime ||
                  this.checkAnswerCooldownSeconds < 0)
              );
            }
            get checkAnswerCooldownSeconds() {
              return this.state.lastAttemptTime
                ? 7 - l()().diff(this.state.lastAttemptTime) / 1e3
                : 0;
            }
            renderInstructions() {
              const e = () => this.setState({ showInstructionHint: !1 });
              return (0, i.jsxs)(y.u_, {
                isOpen: this.state.showInstructionHint,
                onRequestClose: e,
                contentLabel: "Instructions",
                maxWidth: "80vw",
                children: [
                  (0, i.jsx)(y.xB, {
                    onRequestClose: e,
                    children: this.props.t("instructions"),
                  }),
                  (0, i.jsx)(y.fe, {
                    children: (0, i.jsx)(j.ZP, {
                      instructionList: this.props.course.instructionList,
                      isFullInstructions: !1,
                    }),
                  }),
                ],
              });
            }
            renderContent() {
              const {
                  explanation: e,
                  hint: t,
                  questions: s,
                  isFreeform: n,
                  allowFreeformCopyPaste: o,
                } = this.props.contents,
                { isLastAttemptCorrect: c, showFeedback: l } = this.state,
                h = t && l && !c,
                p = e && l && c,
                u =
                  !c &&
                  r().get(this.props.course, "instructionList") &&
                  !this.props.course.instructionList.refreshersOnly,
                x = (e) => (e.preventDefault(), !1);
              return (0, i.jsxs)(d.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className: "jsx-ea49c705d6d38fef questions",
                    children: r().map(s, (e, t) => {
                      var s, a;
                      return (0, i.jsxs)(
                        "div",
                        {
                          style: {
                            margin: "12px",
                            width: n ? "800px" : "200px",
                          },
                          className: "jsx-ea49c705d6d38fef",
                          children: [
                            (0, i.jsx)("label", {
                              className: "jsx-ea49c705d6d38fef",
                              children: (0, i.jsx)("strong", {
                                className: "jsx-ea49c705d6d38fef",
                                children: e.label,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "jsx-ea49c705d6d38fef sp__1",
                            }),
                            (0, i.jsx)(N.oi, {
                              placeholder: "Answer",
                              multiline: !!n,
                              rows: n ? 8 : 2,
                              value:
                                null !==
                                  (a =
                                    null === (s = this.state.responses[+t]) ||
                                    void 0 === s
                                      ? void 0
                                      : s.response) && void 0 !== a
                                  ? a
                                  : "",
                              fullWidth: !0,
                              onPaste: n && !o ? x : void 0,
                              onMouseLeave: () => this.onMouseLeave(e.label, n),
                              onChange: (s) => {
                                const i = {
                                  label: e.label,
                                  response: s.target.value,
                                };
                                this.handleResponseEdit(+t, i, n && !o),
                                  n &&
                                    !o &&
                                    this.detectAutotyper(
                                      +t,
                                      e.label,
                                      s.nativeEvent.timeStamp
                                    ),
                                  n &&
                                    (this.props.qualificationId ||
                                      this.props.workerSkillId) &&
                                    this.handleUpdateBehaviourLog(+t, i, s);
                              },
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  p &&
                    (0, i.jsxs)("div", {
                      className: "jsx-ea49c705d6d38fef feedback-section",
                      children: [
                        (0, i.jsx)("span", {
                          style: { marginRight: 16, flexShrink: 0 },
                          className: "jsx-ea49c705d6d38fef",
                          children: (0, i.jsx)(g.Z, {
                            emoji: "\ud83c\udf1f",
                            size: "24px",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "jsx-ea49c705d6d38fef",
                          children: e,
                        }),
                      ],
                    }),
                  h &&
                    (0, i.jsxs)("div", {
                      className: "jsx-ea49c705d6d38fef feedback-section",
                      children: [
                        (0, i.jsx)("span", {
                          style: { marginRight: 16, flexShrink: 0 },
                          className: "jsx-ea49c705d6d38fef",
                          children: (0, i.jsx)(g.Z, {
                            emoji: "\u26a0\ufe0f",
                            size: "24px",
                          }),
                        }),
                        (0, i.jsx)("span", {
                          className: "jsx-ea49c705d6d38fef",
                          children: t,
                        }),
                      ],
                    }),
                  u &&
                    (0, i.jsxs)("div", {
                      className: "jsx-ea49c705d6d38fef feedback-section",
                      children: [
                        (0, i.jsx)("span", {
                          style: { marginRight: 16, flexShrink: 0 },
                          className: "jsx-ea49c705d6d38fef",
                          children: (0, i.jsx)(g.Z, {
                            emoji: "\ud83d\udcd6",
                            size: "24px",
                          }),
                        }),
                        (0, i.jsxs)("span", {
                          className: "jsx-ea49c705d6d38fef",
                          children: [
                            "Feel free to",
                            " ",
                            (0, i.jsx)("a", {
                              onClick: () =>
                                this.setState({ showInstructionHint: !0 }),
                              className: "jsx-ea49c705d6d38fef",
                              children: "double check the instructions!",
                            }),
                          ],
                        }),
                        this.renderInstructions(),
                      ],
                    }),
                  (0, i.jsx)(a(), {
                    id: "ea49c705d6d38fef",
                    children:
                      ".questions.jsx-ea49c705d6d38fef{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.feedback-section.jsx-ea49c705d6d38fef{background:var(--color-RemoGray01);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);padding:16px;margin-top:16px;font-size:16px;font-weight:bold;margin-bottom:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}",
                  }),
                ],
              });
            }
            renderSectionActions() {
              return (this.props.course.isCertification &&
                !this.props.skipGrading) ||
                (!this.props.course.isCertification && this.props.skipGrading)
                ? null
                : (0, i.jsx)("div", {
                    children: (0, i.jsx)(h.zx, {
                      style: { width: "100%" },
                      type: "primary",
                      onClick: this.handleCheckAnswer,
                      disabled: !this.canCheckAnswer,
                      children: this.props.t("check-answer"),
                    }),
                  });
            }
            renderSectionMessage() {
              return void 0 === this.state.isLastAttemptCorrect
                ? null
                : this.state.isLastAttemptCorrect
                ? (0, i.jsxs)("div", {
                    style: { color: C.w.RemoGreen, fontWeight: 500 },
                    children: [
                      (0, i.jsx)(p.G, { icon: "check" }),
                      " \xa0 ",
                      this.props.t("correct"),
                    ],
                  })
                : (0, i.jsxs)("div", {
                    style: { fontWeight: "bold" },
                    children: [
                      this.props.t("try-again-timer"),
                      " ",
                      (0, i.jsxs)("span", {
                        style: { opacity: 0.5 },
                        children: [
                          Math.round(this.checkAnswerCooldownSeconds),
                          " ",
                          this.props.t("seconds"),
                        ],
                      }),
                    ],
                  });
            }
            isLoading() {
              return (
                this.state.responses.filter((e) =>
                  null === e || void 0 === e ? void 0 : e.response
                ).length < this.props.contents.questions.length
              );
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  handleContinue: () => {
                    const { isFreeform: e } = this.props.contents;
                    if (
                      (this.saveResponseLocal(),
                      e &&
                        (this.props.qualificationId ||
                          this.props.workerSkillId))
                    ) {
                      const e = this.getAttemptBehaviourLog();
                      return this.props.handleContinue({
                        textResponses: this.state.responses,
                        attemptBehaviourLog: e,
                      });
                    }
                    return this.props.handleContinue({
                      textResponses: this.state.responses,
                    });
                  },
                  displayType: this.props.t("pop-quiz"),
                  content: this.renderContent(),
                  sectionActions: this.renderSectionActions(),
                  sectionMessage: this.renderSectionMessage(),
                  canContinue:
                    !!this.state.isLastAttemptCorrect ||
                    !!this.props.skipGrading,
                  isLoading: this.isLoading(),
                  isCertification: this.props.course.isCertification,
                })
              );
            }
            constructor(e) {
              super(e);
              var t = this;
              this.checkLocalAnswers = re(function* () {
                const { sectionIndex: e } = t.props,
                  s = t.props.title + "_" + e;
                return JSON.parse(sessionStorage.getItem(s) || "[]");
              });
              var s = this;
              this.checkCourseAnswers = re(function* () {
                try {
                  var e, t;
                  const { course: i, sectionIndex: n } = s.props,
                    a = yield (0, u.fetchApi)("/courses/getSectionRecent", {
                      method: "POST",
                      body: { id: i._id, sectionIndex: n },
                    }).then(u.handleErrorsAndJsonify);
                  return (
                    (null === a ||
                    void 0 === a ||
                    null === (e = a.answers) ||
                    void 0 === e ||
                    null === (t = e.answers) ||
                    void 0 === t
                      ? void 0
                      : t.map((e, t) => ({
                          label: a.answers.questions[t],
                          response: e,
                        }))) || []
                  );
                } catch (i) {
                  return [];
                }
              });
              var i = this;
              (this.saveResponseLocal = re(function* () {
                const { sectionIndex: e } = i.props,
                  { responses: t } = i.state,
                  s = i.props.title + "_" + e;
                sessionStorage.setItem(s, JSON.stringify(t));
              })),
                (this.handleTick = () => {
                  this.checkAnswerCooldownSeconds > 0
                    ? this.forceUpdate()
                    : (this.setState({
                        lastAttemptTime: null,
                        isLastAttemptCorrect: void 0,
                      }),
                      clearInterval(this.intervalId));
                }),
                (this.debouncedUpdateBehaviourLog = r().debounce((e, t, s) => {
                  var i, n, a, o;
                  if (!s || !s.length) return;
                  const c =
                      (null !==
                        (a =
                          null === (i = r().last(s)) || void 0 === i
                            ? void 0
                            : i.timestamp) && void 0 !== a
                        ? a
                        : 0) -
                      (null !==
                        (o =
                          null === (n = r().first(s)) || void 0 === n
                            ? void 0
                            : n.timestamp) && void 0 !== o
                        ? o
                        : 0),
                    l = r().cloneDeep(this.state.activeTimeTyping);
                  (l[t] = (this.state.activeTimeTyping[t] || 0) + c),
                    this.setState({ activeTimeTyping: l });
                  const d = s.map((e) => e.lengthDiff),
                    h = r().cloneDeep(this.state.lengthDiffLog);
                  (h[t] = [...(this.state.lengthDiffLog[t] || []), ...d]),
                    this.setState({ lengthDiffLog: h });
                  const p = r().cloneDeep(this.state.typingEvents);
                  (p[t] = []), this.setState({ typingEvents: p });
                }, 800)),
                (this.handleCopyTextEvent = (e) => {
                  var t;
                  const s =
                    null === (t = window.getSelection()) || void 0 === t
                      ? void 0
                      : t.toString();
                  if (
                    s &&
                    e.target instanceof Element &&
                    !["textarea", "input"].includes(
                      e.target.tagName.toLowerCase()
                    )
                  ) {
                    const e = Date.now();
                    this.setState({
                      copyEventsLog: [
                        ...this.state.copyEventsLog,
                        { text: s, timestamp: e },
                      ],
                    });
                  }
                }),
                (this.handlePasteEvent = (e) => {
                  if (e.clipboardData) {
                    const t = e.clipboardData.getData("text/plain"),
                      s = Date.now();
                    this.setState({
                      pasteEventsLog: [
                        ...this.state.pasteEventsLog,
                        { text: t, timestamp: s },
                      ],
                    });
                  }
                }),
                (this.getAttemptBehaviourLog = () => {
                  const e = r().uniq([
                      ...Object.keys(this.state.activeTimeTyping),
                      ...Object.keys(this.state.numAutotyperDetected),
                      ...Object.keys(this.state.lengthDiffLog),
                      ...Object.keys(this.state.numMouseLeaves),
                    ]),
                    t = {};
                  for (const y of e) {
                    var s;
                    const e = r().first(
                      this.state.responses.filter((e) => e.label === y)
                    );
                    if (!e || !e.response) continue;
                    const o = e.response,
                      c = this.state.lengthDiffLog[y] || [],
                      l = c.filter((e) => e < 0).map((e) => -e),
                      d = c.filter((e) => e > 1);
                    var i, n, a;
                    t[y] = {
                      numBackspaces: l.length,
                      avgBackspaceLength: r().mean(l),
                      maxBackspaceLength: r().max(l),
                      numOfCopyPaste: d.length,
                      avgCopyPasteLength: r().mean(d),
                      maxCopyPasteLength: r().max(d),
                      activeTimeTyping: this.state.activeTimeTyping[y],
                      numAutotyperDetected:
                        null !== (i = this.state.numAutotyperDetected[y]) &&
                        void 0 !== i
                          ? i
                          : 0,
                      totalChanges:
                        null !== (n = c.length) && void 0 !== n ? n : 0,
                      numMouseLeaves:
                        null !== (a = this.state.numMouseLeaves[y]) &&
                        void 0 !== a
                          ? a
                          : 0,
                      lengthDiffLog: c,
                      charCount: null === o || void 0 === o ? void 0 : o.length,
                      wordCount: o
                        ? null === (s = r().words(o)) || void 0 === s
                          ? void 0
                          : s.length
                        : void 0,
                    };
                  }
                  const o = this.state.copyEventsLog;
                  let c;
                  if (o && o.length > 0) {
                    var l, d;
                    const e = o.map((e) => e.text);
                    var h, p, u;
                    c = {
                      copyTextLog: e,
                      copyTimestampLog: o.map((e) => e.timestamp),
                      maxCopyTextLength:
                        null !==
                          (h =
                            null === (l = r().maxBy(e, (e) => e.length)) ||
                            void 0 === l
                              ? void 0
                              : l.length) && void 0 !== h
                          ? h
                          : 0,
                      minCopyTextLength:
                        null !==
                          (p =
                            null === (d = r().minBy(e, (e) => e.length)) ||
                            void 0 === d
                              ? void 0
                              : d.length) && void 0 !== p
                          ? p
                          : 0,
                      avgCopyTextLength: r().meanBy(e, (e) =>
                        null !==
                          (u =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== u
                          ? u
                          : 0
                      ),
                      numCopyEvents: e.length,
                    };
                  }
                  const x = this.state.pasteEventsLog;
                  let m;
                  if (x && x.length > 0) {
                    var f, g;
                    const e = x.map((e) => e.text);
                    var b, v, j;
                    m = {
                      pasteTextLog: e,
                      pasteTimestampLog: x.map((e) => e.timestamp),
                      maxPasteTextLength:
                        null !==
                          (b =
                            null === (f = r().maxBy(e, (e) => e.length)) ||
                            void 0 === f
                              ? void 0
                              : f.length) && void 0 !== b
                          ? b
                          : 0,
                      minPasteTextLength:
                        null !==
                          (v =
                            null === (g = r().minBy(e, (e) => e.length)) ||
                            void 0 === g
                              ? void 0
                              : g.length) && void 0 !== v
                          ? v
                          : 0,
                      avgPasteTextLength: r().meanBy(e, (e) =>
                        null !==
                          (j =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== j
                          ? j
                          : 0
                      ),
                      numPasteEvents: e.length,
                    };
                  }
                  return {
                    textFields: t,
                    copyTextEvents: c,
                    pasteTextEvents: m,
                  };
                }),
                (this.handleUpdateBehaviourLog = (e, t, s) => {
                  var i, n, a;
                  const o =
                      t.response.length -
                      (null !==
                        (a =
                          null === (i = this.state.responses[e]) ||
                          void 0 === i ||
                          null === (n = i.response) ||
                          void 0 === n
                            ? void 0
                            : n.length) && void 0 !== a
                        ? a
                        : 0),
                    c = s.nativeEvent.timeStamp,
                    l = r().cloneDeep(this.state.typingEvents);
                  (l[t.label] = [
                    ...(this.state.typingEvents[t.label] || []),
                    { timestamp: c, lengthDiff: o },
                  ]),
                    this.setState({ typingEvents: l }),
                    this.debouncedUpdateBehaviourLog(e, t.label, l[t.label]);
                }),
                (this.onMouseLeave = (e, t) => {
                  if (
                    t &&
                    (this.props.qualificationId || this.props.workerSkillId)
                  ) {
                    const t = r().cloneDeep(this.state.numMouseLeaves);
                    (t[e] = (this.state.numMouseLeaves[e] || 0) + 1),
                      this.setState({ numMouseLeaves: t });
                  }
                }),
                (this.handleResponseEdit = (e, t, s) => {
                  var i, n, a;
                  if (
                    s &&
                    t.response.length -
                      (null !==
                        (a =
                          null === (i = this.state.responses[e]) ||
                          void 0 === i ||
                          null === (n = i.response) ||
                          void 0 === n
                            ? void 0
                            : n.length) && void 0 !== a
                        ? a
                        : 0) >
                      10
                  )
                    return;
                  const o = r().cloneDeep(this.state.responses);
                  (o[e] = t), this.setState({ responses: o });
                }),
                (this.detectAutotyper = (e, t, s) => {
                  if (!this.state.lastKeystrokeTimestamp)
                    return void this.setState({ lastKeystrokeTimestamp: s });
                  const i = s - this.state.lastKeystrokeTimestamp,
                    n =
                      i < pe
                        ? [...this.state.keystrokeIntervals, i].slice(-he)
                        : [];
                  var a, o;
                  if (
                    n.length === he &&
                    r().mean(n) >
                      (null !== (a = r().max(n)) && void 0 !== a ? a : 0) -
                        (null !== (o = r().min(n)) && void 0 !== o ? o : 0)
                  ) {
                    if (
                      (this.setState({
                        keystrokeIntervals: [],
                        lastKeystrokeTimestamp: s,
                      }),
                      this.props.qualificationId || this.props.workerSkillId)
                    ) {
                      const e = r().cloneDeep(this.state.numAutotyperDetected);
                      (e[t] = (this.state.numAutotyperDetected[t] || 0) + 1),
                        this.setState({ numAutotyperDetected: e });
                    }
                  } else
                    this.setState({
                      keystrokeIntervals: n,
                      lastKeystrokeTimestamp: s,
                    });
                });
              var n = this;
              (this.handleCheckAnswer = re(function* () {
                (yield (0, u.fetchApi)("/courses/checkAnswer", {
                  method: "POST",
                  body: {
                    name: n.props.course.name,
                    textResponses: n.state.responses,
                    sectionIndex: n.props.sectionIndex,
                  },
                }).then(u.handleErrorsAndJsonify)).isCorrect
                  ? n.setState({ isLastAttemptCorrect: !0, showFeedback: !0 })
                  : (n.setState({
                      isLastAttemptCorrect: !1,
                      lastAttemptTime: l()(),
                      showFeedback: !0,
                    }),
                    (n.intervalId = window.setInterval(n.handleTick, 1e3)));
              })),
                (this.state = {
                  lastAttemptTime: null,
                  responses: [],
                  showFeedback: !1,
                  showInstructionHint: !1,
                  keystrokeIntervals: [],
                  lastKeystrokeTimestamp: null,
                  typingEvents: {},
                  lengthDiffLog: {},
                  activeTimeTyping: {},
                  numMouseLeaves: {},
                  numAutotyperDetected: {},
                  copyEventsLog: [],
                  pasteEventsLog: [],
                });
            }
          }
          return (0, I.Zh)("course")(t);
        })(ve),
        Re = ((e) => {
          class t extends d.Component {
            componentDidMount() {
              var e = this;
              return re(function* () {
                const t = (yield e.checkCourseAnswers()) || [],
                  s = t.length > 0 ? [] : yield e.checkLocalAnswers();
                e.setState({
                  responses:
                    t.length > 0 ? t : s.length > 0 ? s : e.state.responses,
                }),
                  document.addEventListener("copy", e.handleCopyTextEvent),
                  document.addEventListener("paste", e.handlePasteEvent);
              })();
            }
            componentWillUnmount() {
              this.saveResponseLocal(),
                document.removeEventListener("copy", this.handleCopyTextEvent),
                document.removeEventListener("paste", this.handlePasteEvent);
            }
            renderContent() {
              const { questions: e } = this.props.contents,
                t = (e) => (e.preventDefault(), !1);
              return (0, i.jsxs)(d.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className: "jsx-8828f208206b5a8f questions",
                    children: r().map(e, (e, s) => {
                      var n, a, o;
                      return (0, i.jsxs)(
                        "div",
                        {
                          style: { margin: "12px", width: "800px" },
                          className: "jsx-8828f208206b5a8f",
                          children: [
                            (0, i.jsx)("label", {
                              className: "jsx-8828f208206b5a8f",
                              children: (0, i.jsx)("strong", {
                                className: "jsx-8828f208206b5a8f",
                                children: e.label,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "jsx-8828f208206b5a8f sp__1",
                            }),
                            (0, i.jsx)(Z.Z, {
                              fullWidth: !0,
                              originalText: e.answer,
                              newText:
                                null === (n = this.state.responses[+s]) ||
                                void 0 === n
                                  ? void 0
                                  : n.response,
                            }),
                            (0, i.jsx)(N.oi, {
                              placeholder: "Answer",
                              multiline: !0,
                              rows: 12,
                              value:
                                null !==
                                  (o =
                                    null === (a = this.state.responses[+s]) ||
                                    void 0 === a
                                      ? void 0
                                      : a.response) && void 0 !== o
                                  ? o
                                  : "",
                              fullWidth: !0,
                              onPaste: t,
                              onMouseLeave: () => this.onMouseLeave(e.label),
                              onChange: (t) => {
                                const i = {
                                  label: e.label,
                                  response: t.target.value,
                                };
                                this.handleResponseEdit(+s, i),
                                  this.detectAutotyper(
                                    +s,
                                    e.label,
                                    t.nativeEvent.timeStamp
                                  ),
                                  this.handleUpdateBehaviourLog(+s, i, t);
                              },
                            }),
                          ],
                        },
                        s
                      );
                    }),
                  }),
                  (0, i.jsx)(a(), {
                    id: "8828f208206b5a8f",
                    children:
                      ".questions.jsx-8828f208206b5a8f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}",
                  }),
                ],
              });
            }
            isLoading() {
              return (
                this.state.responses.filter((e) =>
                  null === e || void 0 === e ? void 0 : e.response
                ).length < this.props.contents.questions.length
              );
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  handleContinue: () => {
                    this.saveResponseLocal();
                    const e = this.getAttemptBehaviourLog();
                    return this.props.handleContinue({
                      textResponses: this.state.responses,
                      attemptBehaviourLog: e,
                    });
                  },
                  displayType: this.props.t("pop-quiz"),
                  content: this.renderContent(),
                  isLoading: this.isLoading(),
                  canContinue: !0,
                  isCertification: this.props.course.isCertification,
                })
              );
            }
            constructor(e) {
              super(e);
              var t = this;
              this.checkLocalAnswers = re(function* () {
                const { sectionIndex: e } = t.props,
                  s = t.props.title + "_" + e;
                return JSON.parse(sessionStorage.getItem(s) || "[]");
              });
              var s = this;
              this.checkCourseAnswers = re(function* () {
                try {
                  var e;
                  const { course: t, sectionIndex: i } = s.props,
                    n = yield (0, u.fetchApi)("/courses/getSectionRecent", {
                      method: "POST",
                      body: { id: t._id, sectionIndex: i },
                    }).then(u.handleErrorsAndJsonify);
                  return (
                    (null === n ||
                    void 0 === n ||
                    null === (e = n.questions) ||
                    void 0 === e
                      ? void 0
                      : e.map((e, t) => ({
                          label: e,
                          response: n.questions[t].answers,
                        }))) || []
                  );
                } catch (t) {
                  return [];
                }
              });
              var i = this;
              (this.saveResponseLocal = re(function* () {
                const { sectionIndex: e } = i.props,
                  { responses: t } = i.state;
                if (t.length < 1) return;
                const s = i.props.title + "_" + e;
                sessionStorage.setItem(s, JSON.stringify(t));
              })),
                (this.debouncedUpdateBehaviourLog = r().debounce((e, t, s) => {
                  var i, n, a, o;
                  if (!s || !s.length) return;
                  const c =
                      (null !==
                        (a =
                          null === (i = r().last(s)) || void 0 === i
                            ? void 0
                            : i.timestamp) && void 0 !== a
                        ? a
                        : 0) -
                      (null !==
                        (o =
                          null === (n = r().first(s)) || void 0 === n
                            ? void 0
                            : n.timestamp) && void 0 !== o
                        ? o
                        : 0),
                    l = r().cloneDeep(this.state.activeTimeTyping);
                  (l[t] = (this.state.activeTimeTyping[t] || 0) + c),
                    this.setState({ activeTimeTyping: l });
                  const d = s.map((e) => e.lengthDiff),
                    h = r().cloneDeep(this.state.lengthDiffLog);
                  (h[t] = [...(this.state.lengthDiffLog[t] || []), ...d]),
                    this.setState({ lengthDiffLog: h });
                  const p = r().cloneDeep(this.state.typingEvents);
                  (p[t] = []), this.setState({ typingEvents: p });
                }, 800)),
                (this.handleCopyTextEvent = (e) => {
                  var t;
                  const s =
                    null === (t = window.getSelection()) || void 0 === t
                      ? void 0
                      : t.toString();
                  if (
                    s &&
                    e.target instanceof Element &&
                    !["textarea", "input"].includes(
                      e.target.tagName.toLowerCase()
                    )
                  ) {
                    const e = Date.now();
                    this.setState({
                      copyEventsLog: [
                        ...this.state.copyEventsLog,
                        { text: s, timestamp: e },
                      ],
                    });
                  }
                }),
                (this.handlePasteEvent = (e) => {
                  if (e.clipboardData) {
                    const t = e.clipboardData.getData("text/plain"),
                      s = Date.now();
                    this.setState({
                      pasteEventsLog: [
                        ...this.state.pasteEventsLog,
                        { text: t, timestamp: s },
                      ],
                    });
                  }
                }),
                (this.getAttemptBehaviourLog = () => {
                  const e = r().uniq([
                      ...Object.keys(this.state.activeTimeTyping),
                      ...Object.keys(this.state.numAutotyperDetected),
                      ...Object.keys(this.state.lengthDiffLog),
                      ...Object.keys(this.state.numMouseLeaves),
                    ]),
                    t = {};
                  for (const y of e) {
                    var s;
                    const e = r().first(
                      this.state.responses.filter((e) => e.label === y)
                    );
                    if (!e || !e.response) continue;
                    const o = e.response,
                      c = this.state.lengthDiffLog[y] || [],
                      l = c.filter((e) => e < 0).map((e) => -e),
                      d = c.filter((e) => e > 1);
                    var i, n, a;
                    t[y] = {
                      numBackspaces: l.length,
                      avgBackspaceLength: r().mean(l),
                      maxBackspaceLength: r().max(l),
                      numOfCopyPaste: d.length,
                      avgCopyPasteLength: r().mean(d),
                      maxCopyPasteLength: r().max(d),
                      activeTimeTyping: this.state.activeTimeTyping[y],
                      numAutotyperDetected:
                        null !== (i = this.state.numAutotyperDetected[y]) &&
                        void 0 !== i
                          ? i
                          : 0,
                      totalChanges:
                        null !== (n = c.length) && void 0 !== n ? n : 0,
                      numMouseLeaves:
                        null !== (a = this.state.numMouseLeaves[y]) &&
                        void 0 !== a
                          ? a
                          : 0,
                      lengthDiffLog: c,
                      charCount: null === o || void 0 === o ? void 0 : o.length,
                      wordCount: o
                        ? null === (s = r().words(o)) || void 0 === s
                          ? void 0
                          : s.length
                        : void 0,
                    };
                  }
                  const o = this.state.copyEventsLog;
                  let c;
                  if (o && o.length > 0) {
                    var l, d;
                    const e = o.map((e) => e.text);
                    var h, p, u;
                    c = {
                      copyTextLog: e,
                      copyTimestampLog: o.map((e) => e.timestamp),
                      maxCopyTextLength:
                        null !==
                          (h =
                            null === (l = r().maxBy(e, (e) => e.length)) ||
                            void 0 === l
                              ? void 0
                              : l.length) && void 0 !== h
                          ? h
                          : 0,
                      minCopyTextLength:
                        null !==
                          (p =
                            null === (d = r().minBy(e, (e) => e.length)) ||
                            void 0 === d
                              ? void 0
                              : d.length) && void 0 !== p
                          ? p
                          : 0,
                      avgCopyTextLength: r().meanBy(e, (e) =>
                        null !==
                          (u =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== u
                          ? u
                          : 0
                      ),
                      numCopyEvents: e.length,
                    };
                  }
                  const x = this.state.pasteEventsLog;
                  let m;
                  if (x && x.length > 0) {
                    var f, g;
                    const e = x.map((e) => e.text);
                    var b, v, j;
                    m = {
                      pasteTextLog: e,
                      pasteTimestampLog: x.map((e) => e.timestamp),
                      maxPasteTextLength:
                        null !==
                          (b =
                            null === (f = r().maxBy(e, (e) => e.length)) ||
                            void 0 === f
                              ? void 0
                              : f.length) && void 0 !== b
                          ? b
                          : 0,
                      minPasteTextLength:
                        null !==
                          (v =
                            null === (g = r().minBy(e, (e) => e.length)) ||
                            void 0 === g
                              ? void 0
                              : g.length) && void 0 !== v
                          ? v
                          : 0,
                      avgPasteTextLength: r().meanBy(e, (e) =>
                        null !==
                          (j =
                            null === e || void 0 === e ? void 0 : e.length) &&
                        void 0 !== j
                          ? j
                          : 0
                      ),
                      numPasteEvents: e.length,
                    };
                  }
                  return {
                    textFields: t,
                    copyTextEvents: c,
                    pasteTextEvents: m,
                  };
                }),
                (this.handleUpdateBehaviourLog = (e, t, s) => {
                  var i, n, a;
                  const o =
                      t.response.length -
                      (null !==
                        (a =
                          null === (i = this.state.responses[e]) ||
                          void 0 === i ||
                          null === (n = i.response) ||
                          void 0 === n
                            ? void 0
                            : n.length) && void 0 !== a
                        ? a
                        : 0),
                    c = s.nativeEvent.timeStamp,
                    l = r().cloneDeep(this.state.typingEvents);
                  (l[t.label] = [
                    ...(this.state.typingEvents[t.label] || []),
                    { timestamp: c, lengthDiff: o },
                  ]),
                    this.setState({ typingEvents: l }),
                    this.debouncedUpdateBehaviourLog(e, t.label, l[t.label]);
                }),
                (this.onMouseLeave = (e) => {
                  if (this.props.qualificationId || this.props.workerSkillId) {
                    const t = r().cloneDeep(this.state.numMouseLeaves);
                    (t[e] = (this.state.numMouseLeaves[e] || 0) + 1),
                      this.setState({ numMouseLeaves: t });
                  }
                }),
                (this.handleResponseEdit = (e, t) => {
                  var s, i, n;
                  if (
                    t.response.length -
                      (null !==
                        (n =
                          null === (s = this.state.responses[e]) ||
                          void 0 === s ||
                          null === (i = s.response) ||
                          void 0 === i
                            ? void 0
                            : i.length) && void 0 !== n
                        ? n
                        : 0) >
                    10
                  )
                    return;
                  const a = r().cloneDeep(this.state.responses);
                  (a[e] = t), this.setState({ responses: a });
                }),
                (this.detectAutotyper = (e, t, s) => {
                  if (!this.state.lastKeystrokeTimestamp)
                    return void this.setState({ lastKeystrokeTimestamp: s });
                  const i = s - this.state.lastKeystrokeTimestamp,
                    n =
                      i < pe
                        ? [...this.state.keystrokeIntervals, i].slice(-he)
                        : [];
                  var a, o;
                  if (
                    n.length === he &&
                    r().mean(n) >
                      (null !== (a = r().max(n)) && void 0 !== a ? a : 0) -
                        (null !== (o = r().min(n)) && void 0 !== o ? o : 0)
                  ) {
                    if (
                      (this.setState({
                        keystrokeIntervals: [],
                        lastKeystrokeTimestamp: s,
                      }),
                      this.props.qualificationId || this.props.workerSkillId)
                    ) {
                      const e = r().cloneDeep(this.state.numAutotyperDetected);
                      (e[t] = (this.state.numAutotyperDetected[t] || 0) + 1),
                        this.setState({ numAutotyperDetected: e });
                    }
                  } else
                    this.setState({
                      keystrokeIntervals: n,
                      lastKeystrokeTimestamp: s,
                    });
                }),
                (this.state = {
                  responses: e.contents.questions.map((e) => ({
                    label: e.label,
                    response: e.answer,
                  })),
                  keystrokeIntervals: [],
                  lastKeystrokeTimestamp: null,
                  typingEvents: {},
                  lengthDiffLog: {},
                  activeTimeTyping: {},
                  numMouseLeaves: {},
                  numAutotyperDetected: {},
                  copyEventsLog: [],
                  pasteEventsLog: [],
                });
            }
          }
          return (0, I.Zh)("course")(t);
        })(ve),
        Oe = ((e) => {
          class t extends d.Component {
            handleChange(e, t) {
              const s = [...this.state.labels];
              (s[e] = t), this.setState({ labels: s });
            }
            renderContent() {
              const e = r().get(this.props, "contents.questions", []),
                { labels: t } = this.state,
                s = e.map(
                  ({ name: e, description: s, choices: n, freeform: a }, o) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        style: { marginBottom: 24 },
                        children: [
                          (0, i.jsx)("strong", { children: e }),
                          (0, i.jsx)("p", { children: s }),
                          (0, i.jsxs)("div", {
                            style: { display: "flex", flexDirection: "column" },
                            children: [
                              n &&
                                n.map((e) =>
                                  (0, i.jsx)(
                                    N.Y8,
                                    {
                                      value: e,
                                      label: e,
                                      labelPlacement: "end",
                                      checked: t[o] === e,
                                      onChange: (t) =>
                                        t.target.checked &&
                                        this.handleChange(o, e),
                                    },
                                    e
                                  )
                                ),
                              a &&
                                (0, i.jsx)(N.oi, {
                                  value: t[o],
                                  onChange: (e) =>
                                    this.handleChange(o, e.target.value),
                                }),
                            ],
                          }),
                        ],
                      },
                      o
                    )
                ),
                n = (0, i.jsx)(h.zx, {
                  onClick: () => {
                    this.setState({ submitted: !0 }),
                      F().success(
                        "Congrats, you've submitted your first task! Complete this course to see your payout!"
                      );
                  },
                  disabled:
                    !r().every(this.state.labels, (e) => e.length) ||
                    this.state.submitted,
                  style: { marginLeft: "auto", marginBottom: "-10vh" },
                  type: "primary",
                  children: "Submit Task",
                });
              return this.props.isMobile
                ? (0, i.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "-10vh",
                    },
                    children: [
                      (0, i.jsx)("div", {
                        style: {
                          height: "35vh",
                          overflow: "auto",
                          marginBottom: 24,
                        },
                        children: s,
                      }),
                      (0, i.jsx)("div", {
                        style: { borderTop: "1px solid gray" },
                      }),
                      (0, i.jsx)("div", {
                        style: { height: "38vh", overflow: "auto" },
                        dangerouslySetInnerHTML: {
                          __html: x.ZP.render(this.props.contents.attachment),
                        },
                      }),
                      (0, i.jsx)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: n,
                      }),
                    ],
                  })
                : (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "-10vh",
                        },
                        children: [
                          (0, i.jsx)("div", {
                            style: {
                              width: "67vw",
                              height: "65vh",
                              overflow: "auto",
                              marginRight: "3vw",
                            },
                            dangerouslySetInnerHTML: {
                              __html: x.ZP.render(
                                this.props.contents.attachment
                              ),
                            },
                          }),
                          (0, i.jsx)("div", {
                            style: {
                              width: "30vw",
                              height: "65vh",
                              overflow: "auto",
                            },
                            children: s,
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: n,
                      }),
                    ],
                  });
            }
            render() {
              const t = this.state.submitted;
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  canContinue: t,
                  isLoading: !t,
                })
              );
            }
            constructor(e) {
              super(e);
              const { contents: t } = e;
              this.state = { labels: t.questions.map(() => ""), submitted: !1 };
            }
          }
          return (0, I.Zh)("course")(
            ((s = `(max-width: ${S.MOBILE_THRESHOLD})`),
            (e) => (t) => {
              const n = (0, D.Z)(s);
              return (0, i.jsx)(e, le({ isMobile: n }, t));
            })(t)
          );
          var s;
        })(ve),
        _e = ((e) => {
          let t;
          !(function (e) {
            (e[(e.Setup = 0)] = "Setup"),
              (e[(e.AcuityCheck = 1)] = "AcuityCheck"),
              (e[(e.Complete = 2)] = "Complete");
          })(t || (t = {}));
          const s = [
              "\u2196",
              "\u2191",
              "\u2197",
              "\u2190",
              "",
              "\u2192",
              "\u2199",
              "\u2193",
              "\u2198",
            ],
            n = [0, 45, 90, -45, 135, -90, -135, -180];
          class o extends d.Component {
            componentDidUpdate() {
              this.state.step !== t.Complete &&
                this.state.responses.length >= this.state.answers.length &&
                this.setState({ step: t.Complete });
            }
            handleCardPlus() {
              this.setState((e) => ({
                adjustmentComplete: !0,
                cardWidth: e.cardWidth + 2,
              }));
            }
            handleCardMinus() {
              this.setState((e) => ({
                adjustmentComplete: !0,
                cardWidth: e.cardWidth - 2,
              }));
            }
            handleNextStep() {
              let e = t.Setup;
              this.state.step === t.Setup && (e = t.AcuityCheck),
                this.setState({ step: e });
            }
            handleArrowClick(e) {
              this.setState({ responses: [...this.state.responses, e] });
            }
            handleContinue() {
              if (this.state.step !== t.Complete) return this.handleNextStep();
              let e = 0;
              this.state.responses.map((t, s) => {
                t === this.state.answers[s] && (e += 1);
              });
              const s = 5.4 / (0.9357 * this.state.cardWidth);
              return this.props.handleContinue({
                visualTestResult: {
                  visualAcuityAccuracy: e / this.state.answers.length,
                },
                screenPhysicalSize: {
                  widthCM: window.screen.width * s,
                  heightCM: window.screen.height * s,
                },
              });
            }
            renderSetup() {
              return (0, i.jsxs)("div", {
                id: "setup-visual-acuity",
                style: {
                  visibility:
                    this.state.step !== t.Setup ? "hidden" : "visible",
                  height: this.state.step !== t.Setup ? "0px" : "100%",
                },
                className: "jsx-155ad479adcf24d3",
                children: [
                  (0, i.jsxs)("div", {
                    className: "jsx-155ad479adcf24d3 row",
                    children: [
                      (0, i.jsx)("h3", {
                        className: "jsx-155ad479adcf24d3",
                        children: " 1. Screen adjustment",
                      }),
                      (0, i.jsx)("p", {
                        className: "jsx-155ad479adcf24d3",
                        children:
                          "Adjust the distance between the two dashed lines on either side of the credit card image by clicking on the +/- button to measure exactly 5.4 cm or 2\u2033. Put a ruler up against your screen to measure the distance. You can also use the short side of a debit/credit card, which happens to measure exactly this distance!",
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "jsx-155ad479adcf24d3 screen-adjustment-container",
                        children: [
                          (0, i.jsx)(h.zx, {
                            style: {
                              float: "left",
                              marginTop: "100px",
                              maxWidth: "24px",
                            },
                            onClick: () => this.handleCardPlus(),
                            children: "+",
                          }),
                          (0, i.jsx)("div", {
                            style: { textAlign: "center", maxHeight: "200px" },
                            className: "jsx-155ad479adcf24d3",
                            children: (0, i.jsx)("img", {
                              id: "card",
                              src: b.VISUAL_ACUITY_CARD_URL,
                              alt: "card",
                              style: {
                                margin: "0 20px",
                                maxWidth: "500px",
                                height: "200px",
                                width: this.state.cardWidth,
                              },
                              className: "jsx-155ad479adcf24d3",
                            }),
                          }),
                          (0, i.jsx)(h.zx, {
                            style: { float: "right", marginTop: "100px" },
                            onClick: () => this.handleCardMinus(),
                            children: "-",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-155ad479adcf24d3 row",
                    children: [
                      (0, i.jsx)("h3", {
                        className: "jsx-155ad479adcf24d3",
                        children: " 2. Distance to screen",
                      }),
                      (0, i.jsx)("p", {
                        className: "jsx-155ad479adcf24d3",
                        children:
                          'Please make sure to keep your eyes about 50 to 100 cm (20"-40") from the screen. As a rough gauge, this distance is about an extended arm\u2019s length.',
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "jsx-155ad479adcf24d3 distance-screen-container",
                        children: (0, i.jsx)("img", {
                          src: b.VISUAL_ACUITY_DISTANCE_URL,
                          alt: "distance",
                          style: { width: "300px", margin: "50px 20px 0" },
                          className: "jsx-155ad479adcf24d3",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(a(), {
                    id: "155ad479adcf24d3",
                    children:
                      ".screen-adjustment-container.jsx-155ad479adcf24d3{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;margin:0 auto;overflow:visible;width:400px}.distance-screen-container.jsx-155ad479adcf24d3{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;text-align:center;margin:0 auto}.row.jsx-155ad479adcf24d3{padding:30px}",
                  }),
                ],
              });
            }
            renderQuestions() {
              const e = (0.104 * this.state.cardWidth) / 5.74;
              return (0, i.jsxs)("div", {
                style: {
                  visibility:
                    this.state.step === t.Setup ? "hidden" : "visible",
                  height: this.state.step === t.Setup ? "0px" : "100%",
                },
                className: "jsx-a3dcc2336e855f14",
                children: [
                  (0, i.jsx)("p", {
                    className: "jsx-a3dcc2336e855f14",
                    children: (0, i.jsx)("b", {
                      className: "jsx-a3dcc2336e855f14",
                      children: "Step 2:",
                    }),
                  }),
                  (0, i.jsx)("p", {
                    className: "jsx-a3dcc2336e855f14",
                    children:
                      'We will show you a series broken rings with gaps which make them look similar to the letter "C". The rings may appear in different sizes and orientations. The rings look like the three images below, but will be very, very small!',
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-a3dcc2336e855f14 sample-circles-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "jsx-a3dcc2336e855f14 sample-circle",
                        children: (0, i.jsx)("img", {
                          src: b.VISUAL_ACUITY_LANDOLTC_URL,
                          alt: "lc",
                          style: { width: "50px", margin: "0 auto" },
                          className: "jsx-a3dcc2336e855f14",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-a3dcc2336e855f14 sample-circle",
                        children: (0, i.jsx)("img", {
                          src: b.VISUAL_ACUITY_LANDOLTC_URL,
                          alt: "lc",
                          style: {
                            width: "50px",
                            margin: "0 auto",
                            transform: "rotate(90deg)",
                          },
                          className: "jsx-a3dcc2336e855f14",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-a3dcc2336e855f14 sample-circle",
                        children: (0, i.jsx)("img", {
                          src: b.VISUAL_ACUITY_LANDOLTC_URL,
                          alt: "lc",
                          style: {
                            width: "50px",
                            margin: "0 auto",
                            transform: "rotate(235deg)",
                          },
                          className: "jsx-a3dcc2336e855f14",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("p", {
                    className: "jsx-a3dcc2336e855f14",
                    children:
                      "Your task for each ring is to click the arrow button (amongst the 8 surrounding the central ring image) which points in the direction where the gap of the ring is from the center of the ring. To be clear, the ring in question appears in the center of the the 8 arrow buttons.",
                  }),
                  (0, i.jsxs)("p", {
                    className: "jsx-a3dcc2336e855f14",
                    children: [
                      "In the examples above, the gaps of the rings correspond to the",
                      (0, i.jsx)("b", {
                        className: "jsx-a3dcc2336e855f14",
                        children: "\u2192",
                      }),
                      ", \u2193, and \u2196, from left to right. If you are unsure about the direction of the gap in the ring when viewed from an arm\u2019s length distance from your screen, please make your best guess.",
                    ],
                  }),
                  (0, i.jsxs)("p", {
                    className: "jsx-a3dcc2336e855f14",
                    children: [
                      (0, i.jsx)("b", {
                        className: "jsx-a3dcc2336e855f14",
                        children: "Very important:",
                      }),
                      " Do not move closer to the screen during the test. It is crucial that you provide genuine answers.",
                      (0, i.jsx)("br", { className: "jsx-a3dcc2336e855f14" }),
                      "Start whenever you are ready!",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-a3dcc2336e855f14 table-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "jsx-a3dcc2336e855f14 table-box",
                        children: s.map((t, s) =>
                          t
                            ? (0, i.jsx)(
                                "div",
                                {
                                  className: "jsx-a3dcc2336e855f14",
                                  children: (0, i.jsx)(h.zx, {
                                    onClick: () =>
                                      this.handleArrowClick(s < 4 ? s : s - 1),
                                    disabled:
                                      this.state.responses.length >=
                                      this.state.answers.length,
                                    children: t,
                                  }),
                                },
                                s
                              )
                            : (0, i.jsx)(
                                "div",
                                {
                                  className:
                                    "jsx-a3dcc2336e855f14 ring-container",
                                  children: (0, i.jsx)("img", {
                                    id: "landolt",
                                    src: b.VISUAL_ACUITY_LANDOLTC_URL,
                                    alt: "lc",
                                    style: {
                                      width: e,
                                      margin: "0 auto",
                                      transform: `rotate(${
                                        n[
                                          this.state.answers[
                                            this.state.responses.length
                                          ]
                                        ] - 135
                                      }deg)`,
                                    },
                                    className: "jsx-a3dcc2336e855f14 ring-img",
                                  }),
                                },
                                s
                              )
                        ),
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-a3dcc2336e855f14 msg-container",
                        children:
                          this.state.responses.length <
                          this.state.answers.length
                            ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                  "Question ",
                                  (0, i.jsx)("b", {
                                    className: "jsx-a3dcc2336e855f14",
                                    children: this.state.responses.length + 1,
                                  }),
                                  " out of",
                                  " ",
                                  (0, i.jsx)("b", {
                                    className: "jsx-a3dcc2336e855f14",
                                    children: this.state.answers.length,
                                  }),
                                ],
                              })
                            : (0, i.jsx)("span", {
                                style: { color: "green" },
                                className: "jsx-a3dcc2336e855f14",
                                children: "Visual acuity check complete!",
                              }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(a(), {
                    id: "a3dcc2336e855f14",
                    children:
                      ".sample-circles-container.jsx-a3dcc2336e855f14{margin:30px auto;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;text-align:center}.sample-circle.jsx-a3dcc2336e855f14{text-align:center;width:30%}.table-container.jsx-a3dcc2336e855f14{text-align:center;margin:40px auto 10px;width:250px}.ring-container.jsx-a3dcc2336e855f14{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center}.ring-img.jsx-a3dcc2336e855f14{width:5px;margin:0 auto}.msg-container.jsx-a3dcc2336e855f14{text-align:center;font-size:small;margin-top:30px}.table-box.jsx-a3dcc2336e855f14{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.table-box.jsx-a3dcc2336e855f14>*.jsx-a3dcc2336e855f14{width:33.333%;padding:10px}",
                  }),
                ],
              });
            }
            renderContent() {
              return (0, i.jsxs)("div", {
                children: [this.renderSetup(), this.renderQuestions()],
              });
            }
            render() {
              const s =
                !this.state.adjustmentComplete ||
                (this.state.step === t.AcuityCheck &&
                  this.state.responses.length < this.state.answers.length);
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  handleContinue: () => this.handleContinue(),
                  canContinue: !0,
                  isLoading: s,
                  isPrevEnabled: this.state.step === t.Setup,
                })
              );
            }
            constructor(e) {
              super(e);
              const s = Array(5)
                .fill(0)
                .map(() => Math.floor(Math.random() * n.length));
              this.state = {
                step: t.Setup,
                answers: s,
                responses: [],
                adjustmentComplete: !1,
                cardWidth: 210,
              };
            }
          }
          return o;
        })(ve),
        Ve = ((e) => {
          class t extends d.Component {
            handleContinue() {
              const e =
                this.state.answers.circles === this.state.responses.circles &&
                this.state.answers.triangles === this.state.responses.triangles;
              return (
                e
                  ? alert("Great! Your answer is correct")
                  : alert(
                      "Your answer is incorrect. Try adjusting your screen brightness, the light in the room, or your position, and try again!"
                    ),
                this.props.handleContinue({
                  visualTestResult: { visualBrightnessCorrect: e },
                })
              );
            }
            renderContent() {
              return (0, i.jsxs)("div", {
                className: "jsx-a47ed4076ffd4650",
                children: [
                  (0, i.jsxs)("p", {
                    className: "jsx-a47ed4076ffd4650",
                    children: [
                      (0, i.jsx)("b", {
                        className: "jsx-a47ed4076ffd4650",
                        children: "IMPORTANT:",
                      }),
                      " You may ",
                      (0, i.jsx)("b", {
                        className: "jsx-a47ed4076ffd4650",
                        children: "change",
                      }),
                      " the brightness of your screen, light in your environment, or your position on your seat until you can see all of the shapes. Use this task to setup your system/environment and keep the setting until the end of this HIT.",
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "jsx-a47ed4076ffd4650 sp__2",
                  }),
                  (0, i.jsx)("div", {
                    className: "jsx-a47ed4076ffd4650 question-image",
                    children: (0, i.jsx)("img", {
                      src: this.state.imgUrl,
                      className: "jsx-a47ed4076ffd4650",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    style: { textAlign: "center", margin: "50px 0" },
                    className: "jsx-a47ed4076ffd4650",
                    children: (0, i.jsxs)("p", {
                      className: "jsx-a47ed4076ffd4650",
                      children: [
                        "Q. How many ",
                        (0, i.jsx)("b", {
                          className: "jsx-a47ed4076ffd4650",
                          children: "circles",
                        }),
                        " and ",
                        (0, i.jsx)("b", {
                          className: "jsx-a47ed4076ffd4650",
                          children: "triangles",
                        }),
                        " do you see in the image?",
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-a47ed4076ffd4650 responses",
                    children: [
                      (0, i.jsxs)("div", {
                        style: { margin: "12px", width: "200px" },
                        className: "jsx-a47ed4076ffd4650",
                        children: [
                          (0, i.jsx)("label", {
                            className: "jsx-a47ed4076ffd4650",
                            children: (0, i.jsx)("strong", {
                              className: "jsx-a47ed4076ffd4650",
                              children: "Circles",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "jsx-a47ed4076ffd4650 sp__1",
                          }),
                          (0, i.jsx)(H.oH, {
                            placeholder: "Answer",
                            onChange: (e) =>
                              this.setState(
                                le({}, this.state, {
                                  responses: le({}, this.state.responses, {
                                    circles: +e.target.value,
                                  }),
                                })
                              ),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        style: { margin: "12px", width: "200px" },
                        className: "jsx-a47ed4076ffd4650",
                        children: [
                          (0, i.jsx)("label", {
                            className: "jsx-a47ed4076ffd4650",
                            children: (0, i.jsx)("strong", {
                              className: "jsx-a47ed4076ffd4650",
                              children: "Triangles",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "jsx-a47ed4076ffd4650 sp__1",
                          }),
                          (0, i.jsx)(H.oH, {
                            placeholder: "Answer",
                            onChange: (e) =>
                              this.setState(
                                le({}, this.state, {
                                  responses: le({}, this.state.responses, {
                                    triangles: +e.target.value,
                                  }),
                                })
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(a(), {
                    id: "a47ed4076ffd4650",
                    children:
                      ".responses.jsx-a47ed4076ffd4650{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.question-image.jsx-a47ed4076ffd4650{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center}",
                  }),
                ],
              });
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  handleContinue: () => this.handleContinue(),
                  isLoading:
                    !this.state.responses.circles ||
                    !this.state.responses.triangles,
                  canContinue: !0,
                })
              );
            }
            constructor(e) {
              super(e);
              const t =
                b.VISUAL_BRIGHTNESS_URLS[
                  Math.floor(Math.random() * b.VISUAL_BRIGHTNESS_URLS.length)
                ];
              this.state = {
                imgUrl: t.imgUrl,
                answers: { circles: t.circles, triangles: t.triangles },
                responses: { circles: 0, triangles: 0 },
              };
            }
          }
          return t;
        })(ve),
        Be = ((e) => {
          class t extends d.Component {
            handleContinue() {
              const { questions: e, answers: t, index: s } = this.state;
              if (s < e.length - 1) return this.setState({ index: s + 1 });
              const i = e.every((e, s) => e.answer === Number(t[s]));
              return this.props.handleContinue({
                visualTestResult: { visualColorBlindnessCorrect: i },
              });
            }
            renderContent() {
              const { questions: e, index: t, answers: s } = this.state,
                n = e[t].imgUrl,
                o = s[t];
              return (0, i.jsxs)("div", {
                className: "jsx-28e5fda7a3f10251",
                children: [
                  (0, i.jsx)("p", {
                    className: "jsx-28e5fda7a3f10251",
                    children:
                      "Type in the number you see in the following pictures. In case you do not see a number input \u201cx\u201d.",
                  }),
                  (0, i.jsx)("div", {
                    className: "jsx-28e5fda7a3f10251 sp__2",
                  }),
                  (0, i.jsx)("div", {
                    className: "jsx-28e5fda7a3f10251 question-image",
                    children: (0, i.jsx)("img", {
                      src: n,
                      width: 256,
                      height: 256,
                      className: "jsx-28e5fda7a3f10251",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "jsx-28e5fda7a3f10251 responses",
                    children: (0, i.jsxs)("div", {
                      style: { margin: "12px", width: "200px" },
                      className: "jsx-28e5fda7a3f10251",
                      children: [
                        (0, i.jsx)("label", {
                          className: "jsx-28e5fda7a3f10251",
                          children: (0, i.jsx)("strong", {
                            className: "jsx-28e5fda7a3f10251",
                            children: "Enter Number:",
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "jsx-28e5fda7a3f10251 sp__1",
                        }),
                        (0, i.jsx)(H.oH, {
                          placeholder: "Answer",
                          value: o,
                          onChange: this.handleInputChange,
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(a(), {
                    id: "28e5fda7a3f10251",
                    children:
                      ".responses.jsx-28e5fda7a3f10251{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.question-image.jsx-28e5fda7a3f10251{width:256px;margin:0 auto}",
                  }),
                ],
              });
            }
            render() {
              const { index: t, answers: s } = this.state;
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  content: this.renderContent(),
                  handleContinue: () => this.handleContinue(),
                  isLoading: !s[t],
                  canContinue: !0,
                })
              );
            }
            constructor(e) {
              super(e),
                (this.handleInputChange = (e) => {
                  const t = e.currentTarget.value;
                  this.setState((e) => ({
                    answers: r().set([...e.answers], e.index, t),
                  }));
                });
              const t = r().shuffle(b.VISUAL_COLOR_BLINDNESS_URLS);
              this.state = {
                index: 0,
                questions: t,
                answers: r().fill(new Array(t.length), ""),
              };
            }
          }
          return t;
        })(ve),
        Pe = ((e) => {
          class t extends d.Component {
            componentWillUnmount() {
              this.hiddenTimeout && clearTimeout(this.hiddenTimeout);
            }
            handleContinue() {
              const { selectedChoice: e, index: t, correct: s } = this.state,
                i = b.VISUAL_DISTANCE_BASE === e ? s + 1 : s;
              if (t < je - 1)
                return this.setState(
                  {
                    index: t + 1,
                    selectedChoice: void 0,
                    correct: i,
                    hidden: !0,
                  },
                  () => {
                    this.hiddenTimeout = setTimeout(
                      () => this.setState({ hidden: !1 }),
                      1e3
                    );
                  }
                );
              {
                const e = i === je;
                return (
                  e
                    ? alert(
                        "Well done! You successfully pass the setup test, keep your distance to the screen as it is."
                      )
                    : alert(
                        'Are you sure? You may be too close, or too far away from your screen. Please make sure to keep your eyes about 50 to 100 cm (20"-40") from the screen. The minimum distance is about an arm\u2019s length as a rule of thumb.'
                      ),
                  this.props.handleContinue({
                    visualTestResult: { visualDistanceCorrect: e },
                  })
                );
              }
            }
            renderContent() {
              const {
                  index: e,
                  questions: t,
                  selectedChoice: s,
                  hidden: n,
                } = this.state,
                [o, r] = t[e],
                c = [
                  { label: "Quality of Image A is better.", value: o },
                  { label: "Quality of Image B is better.", value: r },
                  { label: "Difference is not detectable.", value: "" },
                ];
              return n
                ? (0, i.jsx)(N.$j, {})
                : (0, i.jsxs)("div", {
                    className: a().dynamic([
                      ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                    ]),
                    children: [
                      (0, i.jsxs)("h1", {
                        className: a().dynamic([
                          ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                        ]),
                        children: ["Visual Distance Test # ", e + 1],
                      }),
                      "Which image has a better quality compared to the other one? Pictures may be blurry.",
                      (0, i.jsx)("div", {
                        className:
                          a().dynamic([
                            ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                          ]) + " sp__2",
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          a().dynamic([
                            ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                          ]) + " questions-container",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              a().dynamic([
                                ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                              ]) + " question",
                            children: [
                              (0, i.jsx)("h2", {
                                className: a().dynamic([
                                  ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                                ]),
                                children: "Image A",
                              }),
                              (0, i.jsx)("img", {
                                src: o,
                                className: a().dynamic([
                                  ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                                ]),
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              a().dynamic([
                                ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                              ]) + " question",
                            children: [
                              (0, i.jsx)("h2", {
                                className: a().dynamic([
                                  ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                                ]),
                                children: "Image B",
                              }),
                              (0, i.jsx)("img", {
                                src: r,
                                className: a().dynamic([
                                  ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                                ]),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          a().dynamic([
                            ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                          ]) + " sp__3",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          a().dynamic([
                            ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                          ]) +
                          " " +
                          (A()(this.props.classes.choices, {
                            [this.props.classes.choicesResponsive]:
                              this.props.responsive,
                          }) || ""),
                        children: c.map((e, t) =>
                          (0, i.jsx)(
                            "div",
                            {
                              onClick: () =>
                                this.setState({ selectedChoice: e.value }),
                              className:
                                a().dynamic([
                                  ["d98345dfa59a7600", [S.MOBILE_THRESHOLD]],
                                ]) +
                                " " +
                                (A()(this.props.classes.choice, {
                                  [this.props.classes.choiceResponsive]:
                                    this.props.responsive,
                                  isSelected: s === e.value,
                                }) || ""),
                              children: ue(e.label),
                            },
                            `${t}`
                          )
                        ),
                      }),
                      (0, i.jsx)(a(), {
                        id: "d98345dfa59a7600",
                        dynamic: [S.MOBILE_THRESHOLD],
                        children: `.questions-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:2rem}@media(max-width:${S.MOBILE_THRESHOLD}){.questions-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}}.question.__jsx-style-dynamic-selector{margin-top:10px;-webkit-flex:1;-ms-flex:1;flex:1;max-width:425px}`,
                      }),
                    ],
                  });
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, r().omit(this.props, ["classes"]), {
                  content: this.renderContent(),
                  handleContinue: () => this.handleContinue(),
                  canContinue: !0,
                  isLoading: void 0 === this.state.selectedChoice,
                })
              );
            }
            constructor(e) {
              super(e),
                [b.VISUAL_DISTANCE_BASE, ...b.VISUAL_DISTANCE_URLS].forEach(
                  (e) => {
                    new Image().src = e;
                  }
                );
              const t = r()
                .shuffle(b.VISUAL_DISTANCE_URLS)
                .map((e) =>
                  Math.random() > 0.5
                    ? [e, b.VISUAL_DISTANCE_BASE]
                    : [b.VISUAL_DISTANCE_BASE, e]
                );
              this.state = {
                questions: t,
                index: 0,
                selectedChoice: void 0,
                correct: 0,
                hidden: !1,
              };
            }
          }
          const s = (0, E.Z)({
            choice: {
              border: "1px solid var(--border-gray-light)",
              borderRadius: "var(--border-radius)",
              padding: "16px",
              margin: "16px 0",
              cursor: "pointer",
              transition: "all 0.1s",
              userSelect: "none",
              "&:hover": { boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)" },
              "&.isSelected": {
                border: "1px solid var(--color-RemoBlue)",
                boxShadow: "0px 0px 0px 1px var(--color-RemoBlue)",
              },
              img: { maxWidth: "200px", maxHeight: "200px" },
            },
            choiceResponsive: {
              [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: {
                margin: "8px 0",
                padding: "0 16px",
              },
            },
            choices: {
              display: "grid",
              gridTemplateColumns: "auto auto",
              gridColumnGap: "32px",
            },
            choicesResponsive: {
              [`@media (max-width: ${S.MOBILE_THRESHOLD})`]: {
                display: "flex",
                flexDirection: "column",
              },
            },
          });
          return (0, I.Zh)("course")((0, N.D2)(s)(t));
        })(ve),
        He = ((e) => {
          class t extends d.Component {
            handleResponseEdit(e, t) {
              this.setState((s) => ({
                checkedOrText: le({}, s.checkedOrText, { [e]: t }),
              }));
            }
            handleChange(e, t) {
              this.setState((s) => ({
                checkedOrText: le({}, s.checkedOrText, {
                  [e]: t.target.checked,
                }),
              }));
            }
            renderContent() {
              const e = r().get(this.props, "contents.items", []),
                { checkedOrText: t } = this.state;
              return (0, i.jsx)("div", {
                children: e.map((e, s) => {
                  var n;
                  return e.isText
                    ? (0, i.jsxs)(
                        "div",
                        {
                          children: [
                            ue(e.body),
                            (0, i.jsx)("label", { children: e.textBoxLabel }),
                            (0, i.jsx)(N.oi, {
                              fullWidth: !0,
                              rows: 1,
                              onPaste: void 0,
                              value:
                                null !== (n = this.state.checkedOrText[s]) &&
                                void 0 !== n
                                  ? n
                                  : "",
                              onChange: (e) => {
                                this.handleResponseEdit(s, e.target.value);
                              },
                            }),
                          ],
                        },
                        s
                      )
                    : (0, i.jsxs)(
                        "div",
                        {
                          children: [
                            ue(e.body),
                            (0, i.jsx)(z.X, {
                              label: e.checkboxLabel,
                              checked: t[s],
                              onChange: this.handleChange.bind(this, s),
                            }),
                          ],
                        },
                        s
                      );
                }),
              });
            }
            render() {
              const t = r().every(this.state.checkedOrText, (e) =>
                "string" === typeof e ? e.length > 0 : e
              );
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  handleContinue: () => {
                    const e = Object.values(this.state.checkedOrText).filter(
                      (e) => "string" === typeof e
                    );
                    this.props.handleContinue({ confirmResponses: e });
                  },
                  content: this.renderContent(),
                  canContinue: t,
                  isLoading: !t,
                })
              );
            }
            constructor(e) {
              super(e);
              const { contents: t } = e;
              this.state = {
                checkedOrText: r().mapValues(t.items, (e) => !!e.isText && ""),
              };
            }
          }
          return (0, I.Zh)("course")(t);
        })(ve),
        ze = ke(ve),
        qe = ((e) => {
          class t extends d.Component {
            fetchChatPromptAndResponses(e) {
              var t = this;
              return re(function* () {
                const {
                  params: s,
                  responses: i,
                  chatTaskFeatureConfig: n,
                  reviewLevel: a,
                } = yield (0, ne.ZP)(
                  null,
                  `internal/courses/chat-preview-content/${e}`
                );
                s &&
                  i &&
                  t.setState({
                    params: s,
                    responses: i,
                    chatTaskFeatureConfig: n,
                    reviewLevel: a,
                  });
              })();
            }
            componentDidMount() {
              var e = this;
              return re(function* () {
                const t = r().get(e.props, "contents.chatTaskId");
                yield e.fetchChatPromptAndResponses(t);
              })();
            }
            renderContent() {
              return (0, i.jsx)("div", {
                className: "scaleui scale-theme scale-tailwind",
                children: (0, i.jsx)(d.Suspense, {
                  fallback: (0, i.jsx)("div", {
                    className: "m-4",
                    children: (0, i.jsx)(N.D8, {}),
                  }),
                  children:
                    this.state.params && this.state.responses
                      ? (0, i.jsx)(de, {
                          params: this.state.params,
                          responses: this.state.responses,
                          reviewLevel: this.state.reviewLevel,
                          chatTaskFeatureConfig:
                            this.state.chatTaskFeatureConfig,
                          readOnly: !0,
                        })
                      : (0, i.jsx)("div", {
                          className: "m-4",
                          children: (0, i.jsx)(N.D8, {}),
                        }),
                }),
              });
            }
            render() {
              return (0, i.jsx)(
                e,
                le({}, this.props, {
                  handleContinue: () => {
                    this.props.handleContinue();
                  },
                  content: this.renderContent(),
                  canContinue: !0,
                  isLoading: !this.state.params || !this.state.responses,
                })
              );
            }
            constructor(e) {
              super(e), (this.state = {});
            }
          }
          return (0, I.Zh)("course")(t);
        })(ve);
      class Fe extends d.Component {
        render() {
          switch (this.props.type) {
            case b.CourseSectionType.MultipleChoice:
              return (0, i.jsx)(Se, le({}, this.props));
            case b.CourseSectionType.Scenario:
              return (0, i.jsx)(Le, le({}, this.props));
            case b.CourseSectionType.RichText:
              return (0, i.jsx)(Ie, le({}, this.props));
            case b.CourseSectionType.Video:
              return (0, i.jsx)(Ae, le({}, this.props));
            case b.CourseSectionType.Iframe:
              return (0, i.jsx)(Ne, le({}, this.props));
            case b.CourseSectionType.InstructionList:
              return (0, i.jsx)(Me, le({}, this.props));
            case b.CourseSectionType.InstructionObject:
              return (0, i.jsx)(Ee, le({}, this.props));
            case b.CourseSectionType.HardwareCalibration:
              return (0, i.jsx)(Te, le({}, this.props));
            case b.CourseSectionType.TextResponse:
              return (0, i.jsx)(De, le({}, this.props));
            case b.CourseSectionType.TextResponseRewrite:
              return (0, i.jsx)(Re, le({}, this.props));
            case b.CourseSectionType.SampleTask:
              return (0, i.jsx)(Oe, le({}, this.props));
            case b.CourseSectionType.VisualTest:
              switch (this.props.contents.type) {
                case v.SK.Acuity:
                  return (0, i.jsx)(_e, le({}, this.props));
                case v.SK.Brightness:
                  return (0, i.jsx)(Ve, le({}, this.props));
                case v.SK.ColorBlindness:
                  return (0, i.jsx)(Be, le({}, this.props));
                case v.SK.Distance:
                  return (0, i.jsx)(Pe, le({}, this.props));
                default:
                  return null;
              }
            case b.CourseSectionType.Confirm:
              return (0, i.jsx)(He, le({}, this.props));
            case b.CourseSectionType.AccountVerification:
              return (0, i.jsx)(ze, le({}, this.props));
            case b.CourseSectionType.ScheduleInterview:
              return (0, i.jsx)(Ce, le({}, this.props));
            case b.CourseSectionType.ChatTaskReadOnly:
              return (0, i.jsx)(qe, le({}, this.props));
            default:
              return null;
          }
        }
      }
      var Ue = Fe;
    },
    772944: function (e, t, s) {
      s.d(t, {
        j: function () {
          return I;
        },
      });
      var i = s(824246),
        n = s(679892),
        a = s.n(n),
        o = s(827378),
        r = s(298784),
        c = s.n(r),
        l = s(161320),
        d = s.n(l),
        h = s(599789);
      const p = {
        [h.VerificationInquiryStatus.Completed]: "Pending",
        [h.VerificationInquiryStatus.Expired]: "Expired",
        [h.VerificationInquiryStatus.Approved]: "Approved",
        [h.VerificationInquiryStatus.Declined]: "Declined",
        [h.VerificationInquiryStatus.MarkedForReview]: "Marked for Review",
        [h.VerificationInquiryStatus.Failed]: "Failed",
        [h.VerificationInquiryStatus.Transitioned]: "Transitioned",
        [h.VerificationInquiryStatus.Started]: "Started",
        [h.VerificationInquiryStatus.Created]: "Created",
        [h.VerificationInquiryStatus.Redacted]: "Redacted",
      };
      var u = s(865391),
        x = s(635376),
        m = s(572111),
        f = s.n(m),
        g = s(604375),
        b = s(986004),
        v = s(775143),
        j = s(59524),
        y = s(939186);
      function w(e, t, s, i, n, a, o) {
        try {
          var r = e[a](o),
            c = r.value;
        } catch (l) {
          return void s(l);
        }
        r.done ? t(c) : Promise.resolve(c).then(i, n);
      }
      function k(e, t, s) {
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
      const C = [
          h.VerificationTemplate.SelfieOnlyReverification,
          h.VerificationTemplate.OutlierSelfieReverification,
        ],
        S = (e) => !C.includes(e),
        L = ({
          user: e,
          disabled: t,
          templateId: s,
          inquiryId: n,
          onVerificationCompleted: r,
          onVerificationEvent: l,
          buttonLabel: d,
        }) => {
          const p = (0, o.useRef)(null),
            u = (0, o.useCallback)(
              ((x = function* () {
                var t, i;
                (0, j.Kz)(j.ju.PersonaTriggeredEvent, {
                  userId: e.id,
                  source: y.o.REMOTASKS_ONBOARDING,
                });
                let a = null;
                const o =
                  null === (t = null === e || void 0 === e ? void 0 : e.tags) ||
                  void 0 === t
                    ? void 0
                    : t.includes(h.TEST_ACCOUNT_TAG_ID);
                if (n) {
                  const e = yield (0, v.fetchApi)(
                    "/worker/verifications/resume",
                    {
                      method: "POST",
                      body: { inquiryId: n },
                      parseAndHandle: !0,
                    }
                  );
                  a = c().get(
                    null === e || void 0 === e ? void 0 : e.meta,
                    "session-token"
                  );
                }
                (p.current = new window.Persona.Client(
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var s = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(s);
                      "function" === typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                          Object.getOwnPropertySymbols(s).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(
                              s,
                              e
                            ).enumerable;
                          })
                        )),
                        i.forEach(function (t) {
                          k(e, t, s[t]);
                        });
                    }
                    return e;
                  })(
                    {},
                    n ? { inquiryId: n, sessionToken: a } : { templateId: s },
                    {
                      environment: !b.IS_PROD || o ? "sandbox" : "production",
                      referenceId: null === e || void 0 === e ? void 0 : e.id,
                      fields: S(s)
                        ? {
                            "selected-country-code":
                              (null === e || void 0 === e
                                ? void 0
                                : e.verifiedCountryCode) ||
                              (null === e || void 0 === e
                                ? void 0
                                : e.ipCountryCode),
                            "email-address": e.email,
                          }
                        : { "email-address": e.email },
                      onComplete: r(s),
                      onEvent: l || (() => {}),
                    }
                  )
                )),
                  null === p ||
                    void 0 === p ||
                    null === (i = p.current) ||
                    void 0 === i ||
                    i.open();
              }),
              function () {
                var e = this,
                  t = arguments;
                return new Promise(function (s, i) {
                  var n = x.apply(e, t);
                  function a(e) {
                    w(n, s, i, a, o, "next", e);
                  }
                  function o(e) {
                    w(n, s, i, a, o, "throw", e);
                  }
                  a(void 0);
                });
              }),
              [
                null === e || void 0 === e ? void 0 : e.tags,
                null === e || void 0 === e ? void 0 : e.id,
                null === e || void 0 === e ? void 0 : e.verifiedCountryCode,
                null === e || void 0 === e ? void 0 : e.ipCountryCode,
                n,
                s,
                r,
                l,
              ]
            );
          var x;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: "jsx-717590a73aa5b8c0 actions",
                children: [
                  (0, i.jsx)(f(), {
                    url: "https://cdn.withpersona.com/dist/persona-v4.7.1.js",
                  }),
                  (0, i.jsx)(g.zx, {
                    disabled: t,
                    onClick: u,
                    type: "primary",
                    fullWidth: !0,
                    children: d,
                  }),
                ],
              }),
              (0, i.jsx)(a(), {
                id: "717590a73aa5b8c0",
                children:
                  "fieldset.jsx-717590a73aa5b8c0{outline:0;border:0;padding:0;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}label.jsx-717590a73aa5b8c0{display:block;margin-bottom:4px;font-weight:bold;color:rgba(0,0,0,.5)}.actions.jsx-717590a73aa5b8c0{background-color:rgb(74,145,230);color:white;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}",
              }),
            ],
          });
        },
        I = ({
          userVerifications: e,
          templateId: t,
          user: s,
          loading: n,
          onVerificationCompleted: o,
          onVerificationEvent: r,
        }) => {
          const l =
              t === h.VerificationTemplate.UserVerificationBestFit
                ? (0, x.d6)(s)
                : t,
            p = Object.entries(h.equivalentPersonaTemplates).find((e) =>
              e.includes(l)
            ) || [t],
            m = c().filter(
              e,
              (e) =>
                p.includes(e.templateId) &&
                ![
                  h.VerificationInquiryStatus.Expired,
                  h.VerificationInquiryStatus.Redacted,
                ].includes(e.status)
            ),
            f = c().orderBy(m, (e) => new Date(e.createdAt), ["desc"])[0],
            g = c().filter(m, (e) =>
              [
                h.VerificationInquiryStatus.Created,
                h.VerificationInquiryStatus.Started,
                h.VerificationInquiryStatus.Transitioned,
              ].includes(e.status)
            ),
            b = c().orderBy(g, (e) => new Date(e.createdAt), ["desc"])[0],
            v = m.length - g.length;
          let j = "Complete Verification",
            y = n,
            w = !1,
            k = f ? f.status : null,
            C = !1,
            S = !1;
          return (
            c().some(
              m,
              (e) => e.status === h.VerificationInquiryStatus.Approved
            )
              ? ((j = "Submitted"),
                (y = !0),
                (w = !0),
                (k = h.VerificationInquiryStatus.Approved))
              : c().some(
                  m,
                  (e) =>
                    e.status === h.VerificationInquiryStatus.MarkedForReview
                )
              ? ((j = "Waiting for review"),
                (y = !0),
                (k = h.VerificationInquiryStatus.MarkedForReview),
                (C = !0))
              : c().some(
                  m,
                  (e) => e.status === h.VerificationInquiryStatus.Completed
                )
              ? ((j = "Submitted"), (y = !0))
              : v >= h.MAX_VERIFICATION_ATTEMPTS_PER_TEMPLATE
              ? ((j = "Exceeded Max Attempts"), (y = !0))
              : b
              ? ((j = "Resume"), (S = !0))
              : v > 0 &&
                v < h.MAX_VERIFICATION_ATTEMPTS_PER_TEMPLATE &&
                (j = "Retry"),
            (0, i.jsxs)("div", {
              className: "jsx-7bf9a8f87b21cd85 container",
              children: [
                (0, i.jsxs)("div", {
                  className: "jsx-7bf9a8f87b21cd85",
                  children: [
                    (0, i.jsx)("div", {
                      className: "jsx-7bf9a8f87b21cd85 row",
                      children: (0, i.jsxs)("span", {
                        className: "jsx-7bf9a8f87b21cd85 name-and-status",
                        children: [
                          (0, i.jsx)("span", {
                            className: "jsx-7bf9a8f87b21cd85 entry-name",
                            children: `${u.xG[l]}`,
                          }),
                          !C &&
                            (0, i.jsxs)("span", {
                              className: "jsx-7bf9a8f87b21cd85",
                              children: [" ", (0, i.jsx)(T, { status: k })],
                            }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "jsx-7bf9a8f87b21cd85 row",
                      children: (0, i.jsx)("span", {
                        className:
                          "jsx-7bf9a8f87b21cd85 last-verification-title",
                        children: "PAST SUBMISSION",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "jsx-7bf9a8f87b21cd85 row",
                      children: (0, i.jsx)("span", {
                        className: "jsx-7bf9a8f87b21cd85 last-verification",
                        children: f
                          ? `Submitted on ${d()(f.createdAt).format(
                              "YYYY-MM-DD"
                            )}`
                          : "No past submissions",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "jsx-7bf9a8f87b21cd85 launcher-container",
                  children: (0, i.jsx)("div", {
                    className: "jsx-7bf9a8f87b21cd85 row",
                    children: (0, i.jsx)("span", {
                      style: { width: w ? "auto" : "100%" },
                      className: "jsx-7bf9a8f87b21cd85 launcher",
                      children:
                        !w &&
                        (0, i.jsx)(L, {
                          user: s,
                          disabled: y,
                          templateId: l,
                          onVerificationCompleted: o,
                          onVerificationEvent: r,
                          buttonLabel: j,
                          inquiryId: S
                            ? null === b || void 0 === b
                              ? void 0
                              : b.inquiryId
                            : null,
                        }),
                    }),
                  }),
                }),
                (0, i.jsx)(a(), {
                  id: "7bf9a8f87b21cd85",
                  children:
                    ".container.jsx-7bf9a8f87b21cd85{border:1px solid var(--color-RemoGray20);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin-top:16px;max-width:700px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.row.jsx-7bf9a8f87b21cd85{padding:0 14px}.row.jsx-7bf9a8f87b21cd85 span.entry-name.jsx-7bf9a8f87b21cd85{font-weight:500}.row.jsx-7bf9a8f87b21cd85 span.name-and-status.jsx-7bf9a8f87b21cd85{padding:12px 0 6px 0;display:block}.row.jsx-7bf9a8f87b21cd85 span.last-verification-title.jsx-7bf9a8f87b21cd85{font-size:9px;text-transform:uppercase}.row.jsx-7bf9a8f87b21cd85 span.last-verification.jsx-7bf9a8f87b21cd85{margin-bottom:12px;display:block}.row.jsx-7bf9a8f87b21cd85 span.jsx-7bf9a8f87b21cd85{width:100%;max-width:100%}.launcher-container.jsx-7bf9a8f87b21cd85{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media(max-width:600px){.row.jsx-7bf9a8f87b21cd85{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.row.jsx-7bf9a8f87b21cd85 span.launcher.jsx-7bf9a8f87b21cd85{margin:0}}",
                }),
              ],
            })
          );
        },
        T = ({ status: e }) => {
          let t = "black";
          const s = e ? p[e] : "Required";
          switch (e) {
            case h.VerificationInquiryStatus.Expired:
            case h.VerificationInquiryStatus.Declined:
              t = "red";
              break;
            case h.VerificationInquiryStatus.Approved:
              t = "var(--color-RemoGreen)";
              break;
            case h.VerificationInquiryStatus.Completed:
              t = "#C9A500";
          }
          return (0, i.jsxs)("span", {
            className:
              a().dynamic([["30228ee46052272", [t]]]) + " status-legend",
            children: [
              `${s}`,
              (0, i.jsx)(a(), {
                id: "30228ee46052272",
                dynamic: [t],
                children: `.status-legend.__jsx-style-dynamic-selector{color:${t};font-weight:500;font-size:12px;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px 8px;gap:4px;width:68px;height:24px;background:#f3f4f6;-webkit-border-radius:1e3px;-moz-border-radius:1e3px;border-radius:1e3px}`,
              }),
            ],
          });
        };
    },
    507099: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return m;
        },
      });
      var i = s(824246),
        n = (s(827378), s(773851)),
        a = s(602963),
        o = s(599789),
        r = s(792739),
        c = s(285556),
        l = s(604375),
        d = s(788524),
        h = s(416534),
        p = s(713222);
      function u(e, t, s, i, n, a, o) {
        try {
          var r = e[a](o),
            c = r.value;
        } catch (l) {
          return void s(l);
        }
        r.done ? t(c) : Promise.resolve(c).then(i, n);
      }
      var x = ({
          verified: e,
          userId: t,
          redirectUrl: s,
          platform: x = o.TaskingPlatform.Remotasks,
          required: m = !1,
          vanityName: f = "",
          fromOnboarding: g = !1,
        }) => {
          const b = {};
          let v;
          x === o.TaskingPlatform.Remotasks
            ? (v = "/internal/login/remotasks/linkedin-remotasks")
            : x === o.TaskingPlatform.Outlier &&
              (v = "/internal/login/outlier/linkedin-outlier"),
            s && (b.redirect_url = s),
            t && (b.userId = t);
          const j = (0, n.buildURL)("", v, b),
            y = (function () {
              var t,
                s =
                  ((t = function* () {
                    try {
                      (yield (0, c.ZP)(
                        null,
                        "internal/worker/profile/unlink_linkedin",
                        { method: "POST" }
                      )).ok && ((e = !1), window.location.reload());
                    } catch (t) {
                      (0, c.cF)(t, "Failed to unlink LinkedIn account");
                    }
                  }),
                  function () {
                    var e = this,
                      s = arguments;
                    return new Promise(function (i, n) {
                      var a = t.apply(e, s);
                      function o(e) {
                        u(a, i, n, o, r, "next", e);
                      }
                      function r(e) {
                        u(a, i, n, o, r, "throw", e);
                      }
                      o(void 0);
                    });
                  });
              return function () {
                return s.apply(this, arguments);
              };
            })();
          if (x === o.TaskingPlatform.Outlier) {
            const t =
              "https://scale-static-assets.s3.us-west-2.amazonaws.com/outlier/images/linkedin.png";
            return (0, i.jsxs)("div", {
              className:
                "flex items-center px-4 py-3 border rounded-lg min-w-fit max-sm:flex-wrap gap-4",
              style: { border: "1px solid var(--color-RemoGray20)" },
              children: [
                (0, i.jsx)("div", {
                  className:
                    "flex shrink-0 w-12 h-12 p-[7.5px] justify-center items-center gap-[7.5px] rounded bg-white shadow",
                  children: (0, i.jsx)("img", {
                    src: t,
                    className: "rounded pl-0.5",
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "flex flex-col flex-grow mx-4",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, i.jsx)("p", {
                          className: "text-sm font-medium",
                          children: "LinkedIn Account",
                        }),
                        (0, i.jsx)("div", {
                          className: "ml-2 max-h-6 pl-0.5",
                          children:
                            (m || e) &&
                            (0, i.jsx)(d.V, {
                              variant: e ? "success" : "neutral",
                              children: e ? "Connected" : "Required",
                            }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: "text-sm mt-2 text-neutral-500",
                      style: { wordBreak: "break-word" },
                      children: e
                        ? `LinkedIn account ${f} connected`
                        : "Connect your LinkedIn account to verify your identity. You can unlink your account at any time.",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  children: e
                    ? g
                      ? null
                      : (0, i.jsx)(h.zx, {
                          className: "px-2 py-2 w-max",
                          variant: "white",
                          onClick: () => y(),
                          children: "Disconnect",
                        })
                    : (0, i.jsx)(h.zx, {
                        className: "px-2 py-2 w-max",
                        variant: "primary",
                        onClick: () => {
                          window.location.href = j;
                        },
                        children: "Connect LinkedIn",
                      }),
                }),
                e &&
                  (0, i.jsx)(p.J, {
                    icon: "check-circle",
                    variant: "primary",
                    size: "lg",
                  }),
              ],
            });
          }
          return e
            ? (0, i.jsxs)("div", {
                style: { display: "flex", flexGrow: 1 },
                children: [
                  (0, i.jsx)(a.Z, {}),
                  (0, i.jsxs)("p", {
                    style: { width: "50%" },
                    className: "social-button linkedin-button",
                    children: [
                      (0, i.jsx)("span", {
                        className: "social-button-icon linkedin-icon",
                      }),
                      (0, i.jsxs)("span", {
                        className: "social-button-text",
                        children: [" ", "linkedin verified"],
                      }),
                    ],
                  }),
                  (0, i.jsx)(l.u, {
                    title: "Unlink Your LinkedIn Account",
                    children: (0, i.jsx)(l.hU, {
                      size: "small",
                      onClick: () => y(),
                      children: (0, i.jsx)(r.G, {
                        icon: "unlink",
                        color: "grey",
                      }),
                    }),
                  }),
                ],
              })
            : (0, i.jsxs)("div", {
                style: { display: "flex", flexGrow: 1 },
                children: [
                  (0, i.jsx)(a.Z, {}),
                  (0, i.jsxs)("a", {
                    href: j,
                    style: { width: "50%" },
                    className: "social-button linkedin-button",
                    children: [
                      (0, i.jsx)("span", {
                        className: "social-button-icon linkedin-icon",
                      }),
                      (0, i.jsxs)("span", {
                        className: "social-button-text",
                        children: [" ", "connect to linkedin"],
                      }),
                    ],
                  }),
                ],
              });
        },
        m = x;
    },
  },
]);
