"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [53987],
  {
    101409: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return s;
        },
      });
      var t = n(824246),
        o = n(679892),
        i = n.n(o),
        a = (n(827378), n(149791));
      var s = ({ emoji: e, size: r = "1em" }) => {
        const n = r.replace(".", "_");
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("span", {
              dangerouslySetInnerHTML: { __html: a.Z.parse(e) },
              className:
                i().dynamic([["a253585a42e447b6", [n, r, r]]]) +
                " " +
                `emoji-icon size-${n}`,
            }),
            (0, t.jsx)(i(), {
              id: "a253585a42e447b6",
              dynamic: [n, r, r],
              children: `.emoji-icon img{display:inline-block;vertical-align:-.1em}.emoji-icon.size-${n} img{height:${r};width:${r}}`,
            }),
          ],
        });
      };
    },
    102947: function (e, r, n) {
      var t = n(824246);
      n(827378);
      function o(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      r.Z = (e) =>
        (0, t.jsxs)(
          "svg",
          (function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var n = null != arguments[r] ? arguments[r] : {},
                t = Object.keys(n);
              "function" === typeof Object.getOwnPropertySymbols &&
                (t = t.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                t.forEach(function (r) {
                  o(e, r, n[r]);
                });
            }
            return e;
          })({}, e, {
            viewBox: "0 0 420 64",
            fill: "none",
            style: { width: "100%", display: "block" },
            children: [
              (0, t.jsx)("path", { d: "M28 0H0V64H28V0Z", fill: "#29CD9C" }),
              (0, t.jsx)("path", {
                d: "M50 0C42.27 0 36 6.27 36 14V28H50C57.73 28 64 21.73 64 14V0H50Z",
                fill: "#29CD9C",
              }),
              (0, t.jsx)("path", {
                d: "M132.8 16V22.18H129.35C123.94 22.18 121.24 25.27 121.24 31.03V48H114.7V16.18H119.12L120.23 20.52C122.51 17.5 125.63 16 129.97 16H132.8Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M167.27 32.1599C167.27 32.8799 167.21 33.5899 167.13 34.3099H141.3C142.12 39.4699 145.83 42.6399 151.04 42.6399C154.84 42.6399 157.92 40.8799 159.6 37.9799H166.49C163.96 44.6999 158.15 48.7799 151.04 48.7799C141.74 48.7799 134.69 41.5999 134.69 32.0899C134.69 22.5699 141.72 15.3999 151.04 15.3999C160.79 15.3999 167.27 22.8999 167.27 32.1599ZM151.04 21.3099C146.12 21.3099 142.54 24.2799 141.46 28.9999H160.7C159.54 24.1599 155.89 21.3099 151.04 21.3099Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M209.8 15.45C216.51 15.45 221.04 20.55 221.04 27.76V48H214.5V29.37C214.5 24.25 212.27 21.32 208.31 21.32C204.09 21.32 200.85 25.18 200.85 30.6V48H194.46V29.37C194.46 24.25 192.25 21.32 188.26 21.32C184.03 21.32 180.76 25.18 180.76 30.6V48H174.22V16.18H178.86L179.98 20.29C182.37 17.31 186 15.45 189.87 15.45C194.18 15.45 197.6 17.57 199.42 21.02C201.73 17.6 205.6 15.45 209.8 15.45Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M244.59 48.7701C234.86 48.7701 227.57 41.6501 227.57 32.0801C227.57 22.4601 234.85 15.3901 244.59 15.3901C254.31 15.3901 261.6 22.5001 261.6 32.0801C261.6 41.6501 254.3 48.7801 244.59 48.7701ZM254.94 32.0901C254.94 26.0001 250.61 21.6501 244.58 21.6501C238.56 21.6501 234.22 26.0001 234.22 32.0901C234.22 38.1801 238.55 42.5301 244.58 42.5301C250.61 42.5301 254.94 38.1801 254.94 32.0901Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M285.97 42.06V48H281.11C274.14 48 269.84 43.7 269.84 36.67V21.78H264.15V20.51L275.22 8.73999H276.33V16.17H285.8V21.77H276.38V36.14C276.38 39.93 278.49 42.05 282.34 42.05H285.97V42.06Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M323.65 16.1599V47.9799H318.37L317.73 44.1099C314.85 47.0299 310.83 48.7699 306.19 48.7699C296.71 48.7699 289.62 41.6099 289.62 32.0699C289.62 22.5099 296.71 15.3999 306.19 15.3999C310.88 15.3999 314.94 17.1699 317.83 20.1399L318.59 16.1599H323.65ZM317.09 32.0699C317.09 26.0699 312.71 21.6299 306.71 21.6299C300.71 21.6299 296.29 26.1099 296.29 32.0699C296.29 38.0299 300.72 42.5099 306.71 42.5099C312.71 42.5099 317.09 38.0699 317.09 32.0699Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M330.57 37.9001H336.96C337.13 41.2701 339.95 43.0201 343.79 43.0201C347.3 43.0201 350 41.5301 350 38.8701C350 35.8501 346.58 35.1601 342.69 34.5001C337.39 33.5901 331.14 32.3901 331.14 25.0101C331.14 19.3001 336.07 15.3901 343.48 15.3901C350.88 15.3901 355.67 19.4201 355.8 25.5901H349.6C349.47 22.5601 347.17 20.9401 343.33 20.9401C339.71 20.9401 337.48 22.4801 337.48 24.8001C337.48 27.6101 340.73 28.1601 344.56 28.8001C349.94 29.7001 356.47 30.7401 356.47 38.5801C356.47 44.7601 351.32 48.7701 343.56 48.7701C335.83 48.7801 330.74 44.5001 330.57 37.9001Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M374.67 34.42H370.71V48H364.17V4.77002H370.71V28.48H374.72L383.31 16.17H391.06L380.29 31.44L392.2 48H384.2L374.67 34.42Z",
                fill: "black",
              }),
              (0, t.jsx)("path", {
                d: "M394.1 37.9001H400.49C400.66 41.2701 403.48 43.0201 407.32 43.0201C410.83 43.0201 413.53 41.5301 413.53 38.8701C413.53 35.8501 410.11 35.1601 406.22 34.5001C400.92 33.5901 394.67 32.3901 394.67 25.0101C394.67 19.3001 399.6 15.3901 407.01 15.3901C414.41 15.3901 419.2 19.4201 419.33 25.5901H413.13C413 22.5601 410.7 20.9401 406.86 20.9401C403.24 20.9401 401.01 22.4801 401.01 24.8001C401.01 27.6101 404.26 28.1601 408.09 28.8001C413.47 29.7001 420 30.7401 420 38.5801C420 44.7601 414.85 48.7701 407.09 48.7701C399.35 48.7801 394.27 44.5001 394.1 37.9001Z",
                fill: "black",
              }),
            ],
          })
        );
    },
    746188: function (e, r, n) {
      var t = n(102947);
      r.Z = t.Z;
    },
    593821: function (e, r, n) {
      n.d(r, {
        ZP: function () {
          return h;
        },
        RT: function () {
          return f;
        },
        t7: function () {
          return m;
        },
      });
      var t = n(824246),
        o = n(679892),
        i = n.n(o),
        a = n(408504),
        s = n.n(a),
        c = (n(827378), n(976844)),
        l = n(686677);
      const d = (0, c.Z)();
      (l.default.onRouteChangeStart = (e) => d.emit("routeChangeStart", e)),
        (l.default.onRouteChangeComplete = (e) =>
          d.emit("routeChangeComplete", e)),
        (l.default.onRouteChangeError = (e, r) =>
          d.emit("routeChangeError", { err: e, url: r }));
      var u = d;
      let p;
      function m() {
        p ||
          (p = setTimeout(() => {
            s().start(), (p = null);
          }, 1e3));
      }
      function f() {
        p ? (clearTimeout(p), (p = null)) : s().done();
      }
      u.on("routeChangeStart", m),
        u.on("routeChangeComplete", f),
        u.on("routeChangeError", f),
        s().configure({ showSpinner: !1 });
      var h = () =>
        (0, t.jsx)(i(), {
          id: "9865718e4b5d306f",
          children:
            "#nprogress{pointer-events:none}#nprogress .bar{background:#69ba6d;position:fixed;z-index:100002;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;-webkit-box-shadow:0 0 10px#29d,0 0 5px#29d;-moz-box-shadow:0 0 10px#29d,0 0 5px#29d;box-shadow:0 0 10px#29d,0 0 5px#29d;opacity:1;-webkit-transform:rotate(3deg)translate(0px,-4px);-ms-transform:rotate(3deg)translate(0px,-4px);-webkit-transform:rotate(3deg)translate(0px,-4px);-moz-transform:rotate(3deg)translate(0px,-4px);-ms-transform:rotate(3deg)translate(0px,-4px);-o-transform:rotate(3deg)translate(0px,-4px);transform:rotate(3deg)translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;-moz-animation:nprogress-spinner 400ms linear infinite;-o-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}",
        });
    },
    875333: function (e, r, n) {
      n.d(r, {
        in: function () {
          return d;
        },
        bE: function () {
          return m;
        },
        FR: function () {
          return f;
        },
        pi: function () {
          return h;
        },
        dc: function () {
          return x;
        },
      });
      var t = n(824246),
        o = n(504456),
        i = n(827378),
        a = n(554211),
        s = n(772122);
      function c(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      function l(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            t.forEach(function (r) {
              c(e, r, n[r]);
            });
        }
        return e;
      }
      const d = { projectId: "", auditBatchId: "" },
        u = {
          isRemoAdmin: !1,
          canRequestProject: !1,
          isQAPlus: !1,
          isQA: !1,
          isFraudAuditor: !1,
          userId: "",
          remoAdminPersonas: [],
          selectedProject: "",
          selectedProjectName: "",
          setSelectedProject: (e) => {},
          setSelectedProjectName: (e) => {},
          setCurrentPersona: (e) => {},
          hidePII: !1,
          hideCustomer: !1,
          isQMOperator: !1,
          isTSM: !1,
          isTSMDRI: !1,
          isQIR: !1,
          canMoveTeamWorkers: !1,
          auditBatchId: "",
          setAuditBatchId: (e) => {},
        },
        p = i.createContext(u),
        m = () => i.useContext(p),
        f = ({ user: e, url: r, children: n }) => {
          var s, c;
          const l =
              (null === r ||
              void 0 === r ||
              null === (s = r.query) ||
              void 0 === s
                ? void 0
                : s.projectId) ||
              (null === r ||
              void 0 === r ||
              null === (c = r.query) ||
              void 0 === c
                ? void 0
                : c.project),
            { 0: u, 1: m } = (0, i.useState)(
              null !== l && void 0 !== l ? l : ""
            ),
            { 0: f, 1: h } = (0, i.useState)(
              null !== l && void 0 !== l ? l : ""
            ),
            { 0: x, 1: g } = (0, i.useState)("");
          var v;
          const { 0: b, 1: j } = (0, i.useState)(
              (0, o.getDefaultPersona)(
                null !== (v = e.remoAdminPersonas) && void 0 !== v ? v : []
              )
            ),
            w = (0, a.ZP)(
              "selfserve-remoadmin-tools",
              { userId: e._id },
              void 0
            ),
            {
              isQMOperator: y,
              hideCustomer: k,
              isTSM: P,
              isTSMDRI: C,
              isQIR: S,
              canMoveTeamWorkers: O,
              hidePII: I,
              isQAPlus: R,
              isQA: E,
              isFraudAuditor: N,
            } = (0, i.useMemo)(() => {
              var e;
              const r = (e) => !!b && (0, o.checkDataScope)(b, e),
                n = r(["qm"]),
                t = r(["tsm", "tsmDRI"]),
                i = r(["tsmDRI"]),
                a = r(["qir"]),
                s = r(["qaplus"]),
                c = r(["qa"]),
                l = r(["fraud_auditor"]);
              return {
                isQMOperator: n,
                isTSM: t,
                isTSMDRI: i,
                isQIR: a,
                canMoveTeamWorkers:
                  !!(null === b ||
                  void 0 === b ||
                  null === (e = b.tools) ||
                  void 0 === e
                    ? void 0
                    : e.includes(o.RemoAdminTool.Teams)) &&
                  (t || n),
                hidePII: !n && !a && !t,
                isQAPlus: s,
                isQA: c,
                hideCustomer: !a && !n,
                isFraudAuditor: l,
              };
            }, [b]),
            { remoAdminPersonas: L, userIsContractorOrFTE: T } = (0,
            i.useMemo)(() => {
              var r;
              return {
                remoAdminPersonas:
                  null !== (r = e.remoAdminPersonas) && void 0 !== r ? r : [],
                userIsContractorOrFTE: (0, o.isFTEOrContractorEmail)(e.email),
              };
            }, [e]),
            Z = (0, i.useMemo)(
              () =>
                !!(
                  e.isCorporateUser ||
                  (null === b || void 0 === b ? void 0 : b.isSelfServe) ||
                  w
                ),
              [e, b, w]
            ),
            H = (0, i.useMemo)(() => {
              const e = !(null === b || void 0 === b
                ? void 0
                : b.applyToAllProjects);
              return T && (y || P || S) && e;
            }, [b, T, y, P, S]);
          var M;
          return (
            (0, i.useEffect)(() => {
              d.projectId = u;
            }, [u]),
            (0, i.useEffect)(() => {
              d.auditBatchId = x;
            }, [x]),
            (0, t.jsx)(p.Provider, {
              value: {
                userId: e._id,
                isRemoAdmin: null !== (M = e.isRemoAdmin) && void 0 !== M && M,
                canRequestProject: H,
                selfServeTools: Z,
                remoAdminPersonas: L,
                setSelectedProject: m,
                selectedProjectName: f,
                setSelectedProjectName: h,
                selectedProject: u,
                setCurrentPersona: j,
                currentPersona: b,
                hideCustomer: k,
                hidePII: I,
                isQMOperator: y,
                isTSM: P,
                isTSMDRI: C,
                isQIR: S,
                canMoveTeamWorkers: O,
                isQAPlus: R,
                isQA: E,
                isFraudAuditor: N,
                auditBatchId: x,
                setAuditBatchId: g,
              },
              children: n,
            })
          );
        },
        h = (e) =>
          (0, s.YI)(
            (0, s.MD)(e)(
              (0, s.$s)("withRemoAdminCtx")((r) => {
                const n = m();
                return (0, t.jsx)(
                  e,
                  l({ ref: r.forwardedRef, remoAdminCtx: n }, r)
                );
              })
            )
          ),
        x = (e, r) =>
          l({}, e, { usePageTracker: !0, pageType: `remo-admin:${r}` });
      r.ZP = p;
    },
    433190: function (e, r, n) {
      var t = n(824246),
        o = (n(827378), n(881620)),
        i = n(68649),
        a = n(746188),
        s = n(746332);
      const c = (0, i.ZL)({
        container: {
          width: "130px",
          cursor: "pointer",
          [`@media (max-width: ${s.MOBILE_THRESHOLD})`]: {
            marginRight: "auto",
          },
        },
      });
      r.Z = (e) => {
        const r = c();
        return e.href
          ? (0, t.jsx)(o.ZP, {
              href: e.href,
              as: e.href,
              children: (0, t.jsx)("div", {
                className: r.container,
                children: (0, t.jsx)(a.Z, { fill: "#000000" }),
              }),
            })
          : (0, t.jsx)("div", {
              className: r.container,
              children: (0, t.jsx)(a.Z, { fill: "#000000" }),
            });
      };
    },
    764191: function (e, r, n) {
      var t = n(824246),
        o = n(679892),
        i = n.n(o),
        a = (n(827378), n(986004));
      r.Z = (e) => {
        const { style: r } = e;
        if (!a.IS_FEDERAL) return (0, t.jsx)("div", {});
        let n = "alert-header";
        return (
          a.CLASSIFICATION.includes("SECRET") && (n += " red"),
          (0, t.jsxs)("div", {
            style: r,
            className: "jsx-633145ccabe3d4c0 " + (n || ""),
            children: [
              a.CLASSIFICATION,
              (0, t.jsx)(i(), {
                id: "633145ccabe3d4c0",
                children:
                  ".alert-header.jsx-633145ccabe3d4c0{color:white;background:#006700;text-align:center;z-index:1}.red.jsx-633145ccabe3d4c0{background:#d00000}",
              }),
            ],
          })
        );
      };
    },
    153987: function (e, r, n) {
      n.d(r, {
        Z: function () {
          return me;
        },
      });
      var t = n(824246),
        o = n(827378),
        i = n(4369),
        a = n(593821),
        s = n(298784),
        c = n.n(s),
        l = n(949423),
        d = n(251596),
        u = n(68649),
        p = n(128819),
        m = n(746332),
        f = n(433190),
        h = n(60042),
        x = n.n(h),
        g = n(881620);
      const v = (0, u.ZL)((e) => ({
        navItem: {
          color: "inherit",
          marginInlineEnd: "32px",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { margin: "4px 8px" },
        },
        navItemActive: {
          color: e.colors.green,
          "&::after": {
            bottom: -18,
            height: 2,
            content: '" "',
            display: "block",
            position: "relative",
            marginTop: -2,
            background: e.colors.green,
            [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { display: "none" },
          },
        },
        notification: {
          borderRadius: "50%",
          background: "#F1F8F5",
          color: "#479E6A",
          width: 20,
          height: 20,
          fontSize: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 8,
        },
        wrapper: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }));
      var b = (e) => {
          const r = v();
          return (0, t.jsx)(g.ZP, {
            href: e.path,
            children: (0, t.jsx)("a", {
              className: x()(r.navItem, {
                [r.navItemActive]: e.currentPath === e.path,
              }),
              children: (0, t.jsxs)("div", {
                className: r.wrapper,
                children: [
                  e.title,
                  e.notificationNumber
                    ? (0, t.jsx)("div", {
                        className: r.notification,
                        children: (0, t.jsx)("span", {
                          children: e.notificationNumber,
                        }),
                      })
                    : null,
                ],
              }),
            }),
          });
        },
        j = n(679892),
        w = n.n(j);
      var y = (e) =>
          (0, t.jsxs)("div", {
            className: "jsx-8109421bff1800dd scaler-nav-dropdown",
            children: [
              e.children,
              (0, t.jsx)(w(), {
                id: "8109421bff1800dd",
                children:
                  ".scaler-nav-dropdown{margin-top:16px;background:white;text-align:left;min-width:160px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 2px 2px rgba(0,0,0,.2);-moz-box-shadow:0 2px 2px rgba(0,0,0,.2);box-shadow:0 2px 2px rgba(0,0,0,.2);z-index:1000;overflow:hidden}.scaler-nav-dropdown a{display:block;padding:12px 20px;border-bottom:1px solid var(--color-RemoGray10);color:inherit;font-size:14px;-webkit-transition:background-color.2s;-moz-transition:background-color.2s;-o-transition:background-color.2s;transition:background-color.2s}.scaler-nav-dropdown a:hover{background:var(--color-RemoGray01)}.scaler-nav-dropdown a{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.scaler-nav-dropdown a:last-child{border:0}",
              }),
            ],
          }),
        k = n(792739),
        P = n(101409),
        C = n(274352),
        S = n(421805),
        O = n(250634),
        I = n(105633);
      function R(e, r, n, t, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? r(c) : Promise.resolve(c).then(t, o);
      }
      const E = (0, u.ZL)({
          menuItem: { width: "160px" },
          itemRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          },
          itemCheckmark: { opacity: "0.6" },
        }),
        N = (function () {
          var e,
            r =
              ((e = function* (e) {
                yield S.ag.changeLanguage(e);
              }),
              function () {
                var r = this,
                  n = arguments;
                return new Promise(function (t, o) {
                  var i = e.apply(r, n);
                  function a(e) {
                    R(i, t, o, a, s, "next", e);
                  }
                  function s(e) {
                    R(i, t, o, a, s, "throw", e);
                  }
                  a(void 0);
                });
              });
          return function (e) {
            return r.apply(this, arguments);
          };
        })();
      var L = (e) => {
          const r = E(),
            { language: n, langLabel: o } = e,
            i = S.ag.language;
          return (0, t.jsx)(I.Z, {
            className: r.menuItem,
            onClick: () => N(n),
            children: (0, t.jsxs)("div", {
              className: r.itemRow,
              children: [
                o,
                i === n &&
                  (0, t.jsx)(k.G, {
                    className: r.itemCheckmark,
                    icon: "check",
                  }),
              ],
            }),
          });
        },
        T = n(434592);
      function Z(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      function H(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            t.forEach(function (r) {
              Z(e, r, n[r]);
            });
        }
        return e;
      }
      const M = (0, u.ZL)({
        languageSelector: {
          color: "inherit",
          marginInlineEnd: "32px",
          fontSize: "18px",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { margin: "0 8px" },
        },
      });
      var _ = () => {
          const e = M(),
            r = "rtl" === S.ag.dir() ? "left" : "right";
          return (0, t.jsx)(d.ZP, {
            variant: "popover",
            children: (n) =>
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(
                    "a",
                    H({ className: e.languageSelector }, (0, d.LI)(n), {
                      children: (0, t.jsx)(k.G, { icon: "language" }),
                    })
                  ),
                  (0, t.jsxs)(
                    O.Z,
                    H({}, (0, d.wK)(n), {
                      getContentAnchorEl: null,
                      anchorOrigin: { vertical: "bottom", horizontal: r },
                      transformOrigin: { vertical: "top", horizontal: r },
                      children: [
                        (0, t.jsx)(L, {
                          language: T.Languages.English,
                          langLabel: "English",
                        }),
                        (0, t.jsx)(L, {
                          language: T.Languages.Spanish,
                          langLabel: "Espa\xf1ol",
                        }),
                        (0, t.jsx)(L, {
                          language: T.Languages.Arabic,
                          langLabel: "\u0639\u0631\u0628\u0649",
                        }),
                        (0, t.jsx)(L, {
                          language: T.Languages.German,
                          langLabel: "Deutsche",
                        }),
                        (0, t.jsx)(L, {
                          language: T.Languages.Korean,
                          langLabel: "Korean",
                        }),
                      ],
                    })
                  ),
                ],
              }),
          });
        },
        A = n(986004);
      function D(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      function F(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            t.forEach(function (r) {
              D(e, r, n[r]);
            });
        }
        return e;
      }
      const z = (e, r) => {
          if (!e.firstName && !e.lastName) return r("header-your-account");
          const n = e.firstName && e.lastName ? " " : "";
          return `${e.firstName || ""}${n}${e.lastName || ""}`;
        },
        V = (0, u.ZL)({
          profileName: {
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            cursor: "pointer",
            userSelect: "none",
            [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { margin: "0 8px" },
          },
          name: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "inline-block",
            [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { display: "none" },
          },
          profileIconMobile: {
            display: "none",
            [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: {
              display: "inline-block",
            },
          },
        });
      var $ = (e) => {
          const { user: r, normalizedPathname: n } = e,
            { t: o } = (0, S.$G)("dashboard"),
            i = V();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: "jsx-f9518c497623c521 profile",
                children: [
                  (0, t.jsx)(_, {}),
                  (0, t.jsx)(b, {
                    path: "/announcements",
                    currentPath: n,
                    title: (0, t.jsx)(k.G, { icon: "bell" }),
                  }),
                  (0, t.jsx)(d.ZP, {
                    variant: "popper",
                    children: (e) =>
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsxs)(
                            "div",
                            F({}, (0, d.LI)(e), {
                              className:
                                "jsx-f9518c497623c521 " + (i.profileName || ""),
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "jsx-f9518c497623c521 " + (i.name || ""),
                                  children: z(r, o),
                                }),
                                (0, t.jsx)(k.G, {
                                  className: i.profileIconMobile,
                                  icon: "user",
                                }),
                              ],
                            })
                          ),
                          (0, t.jsx)(
                            l.Z,
                            F({}, (0, d.Rg)(e), {
                              style: { zIndex: 1e3 },
                              placement: "bottom-end",
                              children: (0, t.jsxs)(y, {
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "jsx-f9518c497623c521 profile-info",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "jsx-f9518c497623c521 profile-info-row",
                                        children: r.isRemotaskPro
                                          ? (0, t.jsxs)("div", {
                                              className:
                                                "jsx-f9518c497623c521 profile-info-badge badge-remotaskspro",
                                              children: [
                                                (0, t.jsx)("span", {
                                                  style: {
                                                    paddingRight: "12px",
                                                  },
                                                  className:
                                                    "jsx-f9518c497623c521",
                                                  children: (0, t.jsx)(P.Z, {
                                                    emoji: "\u26a1\ufe0f",
                                                    size: "18px",
                                                  }),
                                                }),
                                                "Remotasks Pro",
                                              ],
                                            })
                                          : null,
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "jsx-f9518c497623c521 profile-info-row",
                                        children: r.isReviewer
                                          ? (0, t.jsxs)("div", {
                                              className:
                                                "jsx-f9518c497623c521 profile-info-badge badge-reviewer",
                                              children: [
                                                (0, t.jsx)("span", {
                                                  style: {
                                                    paddingRight: "12px",
                                                  },
                                                  className:
                                                    "jsx-f9518c497623c521",
                                                  children: (0, t.jsx)(P.Z, {
                                                    emoji: "\ud83c\udf1f",
                                                    size: "18px",
                                                  }),
                                                }),
                                                "Remo Reviewer",
                                              ],
                                            })
                                          : null,
                                      }),
                                      (0, t.jsxs)("div", {
                                        className:
                                          "jsx-f9518c497623c521 profile-info-row",
                                        children: [
                                          (0, t.jsx)("label", {
                                            className: "jsx-f9518c497623c521",
                                            children: "Remotasks ID",
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "jsx-f9518c497623c521 mono",
                                            children: r.id,
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className:
                                          "jsx-f9518c497623c521 profile-info-row",
                                        children: [
                                          (0, t.jsx)("label", {
                                            className: "jsx-f9518c497623c521",
                                            children: "Email",
                                          }),
                                          (0, t.jsx)("div", {
                                            className: "jsx-f9518c497623c521",
                                            children: r.email,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)(g.ZP, {
                                    href: "/account",
                                    children: (0, t.jsx)("a", {
                                      className: "jsx-f9518c497623c521",
                                      children: "Account",
                                    }),
                                  }),
                                  !A.IS_FEDERAL &&
                                    (0, t.jsx)("a", {
                                      href: "/terms",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className: "jsx-f9518c497623c521",
                                      children: "Terms",
                                    }),
                                  (0, t.jsx)("a", {
                                    onClick: () => (0, C.ZP)("/login?logout=1"),
                                    className:
                                      "jsx-f9518c497623c521 logout-button",
                                    children: "Logout",
                                  }),
                                ],
                              }),
                            })
                          ),
                        ],
                      }),
                  }),
                ],
              }),
              (0, t.jsx)(w(), {
                id: "f9518c497623c521",
                children:
                  "div.jsx-f9518c497623c521{}.profile.jsx-f9518c497623c521{display:contents}.language-selector.jsx-f9518c497623c521{color:inherit;-webkit-margin-end:32px;-moz-margin-end:32px;margin-inline-end:32px}.profile-info.jsx-f9518c497623c521{border-bottom:1px solid var(--color-RemoGray10);padding:16px 20px;font-size:14px}.profile-info.jsx-f9518c497623c521 .profile-info-row.jsx-f9518c497623c521+.profile-info-row.jsx-f9518c497623c521{margin-top:12px}.profile-info.jsx-f9518c497623c521 label.jsx-f9518c497623c521{opacity:.5;font-weight:500}.profile-info.jsx-f9518c497623c521 .mono.jsx-f9518c497623c521{padding:2px;background:var(--color-RemoGray01);font-family:var(--font-family-code)}.profile-info-badge.jsx-f9518c497623c521{margin-bottom:16px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:500;font-size:13px;text-transform:uppercase}.badge-reviewer.jsx-f9518c497623c521{color:var(--color-RemoGold)}.badge-remotaskspro.jsx-f9518c497623c521{color:var(--color-RemoGreen)}",
              }),
            ],
          });
        },
        W = n(554211),
        B = n(972943),
        Q = n(875333),
        q = n(557950),
        U = n(604375),
        G = n(680816),
        Y = n(700190),
        K = n(285556),
        J = n(433310),
        X = n(628746);
      function ee(e, r, n, t, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? r(c) : Promise.resolve(c).then(t, o);
      }
      function re(e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (t, o) {
            var i = e.apply(r, n);
            function a(e) {
              ee(i, t, o, a, s, "next", e);
            }
            function s(e) {
              ee(i, t, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function ne(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      function te(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            t.forEach(function (r) {
              ne(e, r, n[r]);
            });
        }
        return e;
      }
      const oe = (0, u.ZL)(() => ({
        wrapper: {
          marginBottom: "32px",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: {
            justifyContent: "flex-start",
            flexDirection: "row-reverse",
            alignItems: "center",
            padding: "16px",
          },
        },
        mobileMenu: {
          display: "none",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { display: "block" },
        },
        container: {
          width: "1200px",
          display: "flex",
          alignItems: "center",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: {
            width: "calc(100% - 12.25px)",
            justifyContent: "flex-end",
            paddingRight: "16px",
          },
        },
        nav: {
          marginInlineStart: "64px",
          flexGrow: 1,
          display: "flex",
          position: "relative",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: {
            display: "none",
            flexDirection: "column",
            margin: "0",
          },
        },
        navMobileOpen: {
          display: "flex",
          position: "absolute",
          top: "64px",
          right: "16px",
          background: "white",
          padding: "16px",
          zIndex: 1,
          boxShadow: "0 10px 20px -10px rgba(0,0,0,.4)",
          borderRadius: "var(--border-radius)",
        },
        navItem: {
          color: "inherit",
          marginInlineEnd: "32px",
          [`@media (max-width: ${m.MOBILE_THRESHOLD})`]: { margin: "4px 8px" },
        },
      }));
      var ie = (e) => {
          var r, n, a, s;
          const u = oe(),
            { 0: m, 1: h } = (0, o.useState)(!1),
            { 0: g, 1: v } = (0, o.useState)(!0),
            { 0: j, 1: w } = (0, o.useState)(!1),
            P = e.url
              ? (C = e.url.pathname).endsWith("/")
                ? C.substring(0, C.length - 1)
                : C
              : "";
          var C;
          const O = (0, Y.h)("internal/scaler/balance/summary_metrics"),
            I = (0, Y.h)("internal/scaler/feedback/unread-count"),
            R = (function () {
              var e = re(function* () {
                var e, r;
                const n =
                  null ===
                    (r =
                      null ===
                        (e =
                          null === Intl || void 0 === Intl
                            ? void 0
                            : Intl.DateTimeFormat()) || void 0 === e
                        ? void 0
                        : e.resolvedOptions()) || void 0 === r
                    ? void 0
                    : r.timeZone;
                if (n)
                  try {
                    yield (0, K.ZP)(null, "internal/scaler/timezone", {
                      method: "POST",
                      body: { timezone: n },
                    });
                  } catch (t) {}
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
          (0, o.useEffect)(() => {
            R();
          }, []);
          const E = (0, W.ZP)("new-balance-page", { userId: e.user.id }, !1),
            N = (0, W.ZP)("view-balance-page", { userId: e.user._id }, !0);
          let L = !0;
          ((e.user.workerSource && !E) || !N) && (L = !1);
          const T = (0, W.ZP)("hide-help-center", { userId: e.user.id }, !1),
            Z = !(
              !(0, W.ZP)(
                "disable-training-center-for-country",
                {
                  countryCode:
                    null === (r = e.user) || void 0 === r
                      ? void 0
                      : r.ipCountryCode,
                },
                !1
              ) ||
              (null === (n = e.user) || void 0 === n ? void 0 : n.workerSource)
            ),
            H = (0, o.useContext)(Q.ZP),
            { t: M } = (0, S.$G)("dashboard");
          let _ = "",
            D = "";
          if (e.user.pendingLanguageTag) {
            const r = B.h9[e.user.pendingLanguageTag];
            if (r) {
              const e = 1,
                n = r.leveledCourses[e];
              if (n) {
                const e = r.name;
                (_ = `You have not been certified in the language: ${c().toUpper(
                  e
                )}. Please take the certification exam to receive tasks! (Refresh the page if you've taken it already.)`),
                  (D = `/course?id=${n}`);
              }
            }
          }
          const F =
            !O.loading &&
            (null === (a = O.response) || void 0 === a
              ? void 0
              : a.estimatedPayout);
          c().isNil((0, X.FR)(e.user)) &&
            !A.IS_FEDERAL &&
            F &&
            ((_ =
              "Please go to your account page to set up your payment method."),
            (D = "/account"));
          const z = _
              ? (0, t.jsx)("div", {
                  style: { paddingBottom: 40 },
                  children: (0, t.jsx)(U.A9, {
                    open: g,
                    anchorOrigin: { vertical: "top", horizontal: "center" },
                    children: (0, t.jsx)(U.bZ, {
                      icon: (0, t.jsx)(k.G, {
                        icon: "check-circle",
                        size: "sm",
                      }),
                      severity: "warning",
                      onClose: () => {
                        v(!1);
                      },
                      children: D
                        ? (0, t.jsx)("a", { href: D, children: _ })
                        : _,
                    }),
                  }),
                })
              : null,
            V = `isTaxBlocked:${e.user.id}`,
            ee = (0, o.useCallback)(
              (e) => {
                w(e);
                try {
                  window.localStorage.setItem(V, e);
                } catch (r) {
                  J.Z.error(
                    `Error while setting tax block status in localStorage: ${r}`
                  );
                }
              },
              [V]
            );
          var ne;
          return (
            (0, o.useEffect)(() => {
              const r = (e) => {
                  ee(e.detail);
                },
                n = (function () {
                  var r = re(function* () {
                    const r = yield (0, G.mE)(e.user);
                    ee(r);
                  });
                  return function () {
                    return r.apply(this, arguments);
                  };
                })();
              return (
                window.addEventListener("toggleTaxBlock", r),
                w("true" === window.localStorage.getItem(V)),
                n(),
                () => {
                  window.removeEventListener("toggleTaxBlock", r);
                }
              );
            }, [V, e.user, ee]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(i.Z, {}),
                (0, t.jsx)(p.Z, {}),
                j &&
                  (0, t.jsxs)(U.bZ, {
                    severity: "error",
                    children: [
                      "Please submit your required tax forms prior to continuing to task. You can do so in your",
                      " ",
                      (0, t.jsx)("a", {
                        href: "/account",
                        children: "account",
                      }),
                      ".",
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: u.wrapper,
                  children: [
                    (0, t.jsx)(k.G, {
                      className: u.mobileMenu,
                      icon: "bars",
                      onClick: () => h(!m),
                    }),
                    (0, t.jsxs)("div", {
                      className: u.container,
                      children: [
                        (0, t.jsx)(f.Z, { href: "/dashboard" }),
                        (0, t.jsxs)("div", {
                          className: x()(u.nav, { [u.navMobileOpen]: m }),
                          children: [
                            (0, t.jsx)(b, {
                              path: "/dashboard",
                              currentPath: P,
                              title: M("header-dashboard"),
                            }),
                            e.customerQueueRedirectLink
                              ? (0, t.jsx)(b, {
                                  path: e.customerQueueRedirectLink,
                                  currentPath: P,
                                  title:
                                    "/bulba" === e.customerQueueRedirectLink
                                      ? "Bulba Project"
                                      : "Project",
                                })
                              : null,
                            e.enableOnboardingHub
                              ? (0, t.jsx)(b, {
                                  path: "/hub",
                                  currentPath: P,
                                  title: "Onboarding",
                                })
                              : null,
                            (0, t.jsx)(b, {
                              path: "/tasklog",
                              currentPath: P,
                              title: M("header-task-log"),
                            }),
                            L &&
                              (0, t.jsx)(b, {
                                path: "/balance",
                                currentPath: P,
                                title: M("header-balance"),
                              }),
                            Z
                              ? null
                              : (0, t.jsx)(b, {
                                  path: "/onboarding-center",
                                  currentPath: P,
                                  title: M("header-training"),
                                }),
                            !A.IS_FEDERAL &&
                              (0, t.jsx)(b, {
                                path: "/missions",
                                currentPath: P,
                                title: M("header-missions"),
                              }),
                            (0, t.jsx)(b, {
                              path: "/feedback",
                              currentPath: P,
                              title: M("header-feedback"),
                              notificationNumber:
                                null !==
                                  (ne =
                                    null === (s = I.response) || void 0 === s
                                      ? void 0
                                      : s.totalCount) && void 0 !== ne
                                  ? ne
                                  : 0,
                            }),
                            !A.IS_FEDERAL &&
                              (0, t.jsx)(d.ZP, {
                                variant: "popper",
                                children: (e) =>
                                  (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(
                                        "a",
                                        te(
                                          { className: u.navItem },
                                          (0, d.LI)(e),
                                          { children: M("header-support") }
                                        )
                                      ),
                                      (0, t.jsx)(
                                        l.Z,
                                        te({}, (0, d.Rg)(e), {
                                          placement: "bottom-start",
                                          children: (0, t.jsxs)(y, {
                                            children: [
                                              !T &&
                                                (0, t.jsx)("a", {
                                                  target: "_blank",
                                                  rel: "noopener noreferrer",
                                                  href: "/support",
                                                  children: "Help Center",
                                                }),
                                              (0, t.jsx)("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://remotasks.zendesk.com/hc/en-us/community/topics",
                                                children: "Community",
                                              }),
                                              (0, t.jsx)("a", {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: q.DISCOURSE_COMMUNITY_LOGIN_LINK,
                                                children:
                                                  "Join our Remotasks Forums",
                                              }),
                                            ],
                                          }),
                                        })
                                      ),
                                    ],
                                  }),
                              }),
                            H.isRemoAdmin
                              ? (0, t.jsx)(b, {
                                  path: "/remoadmin",
                                  currentPath: P,
                                  title: M("remo-admin-tools"),
                                })
                              : null,
                          ],
                        }),
                        (0, t.jsx)($, {
                          classes: u,
                          user: e.user,
                          normalizedPathname: P,
                        }),
                      ],
                    }),
                  ],
                }),
                z,
              ],
            })
          );
        },
        ae = n(764191),
        se = n(634403);
      function ce(e, r, n, t, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? r(c) : Promise.resolve(c).then(t, o);
      }
      function le(e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (t, o) {
            var i = e.apply(r, n);
            function a(e) {
              ce(i, t, o, a, s, "next", e);
            }
            function s(e) {
              ce(i, t, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function de(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      function ue(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            t.forEach(function (r) {
              de(e, r, n[r]);
            });
        }
        return e;
      }
      class pe extends o.Component {
        static getInitialProps(e) {
          return le(function* () {
            const { user: r, url: n } = e;
            return { user: r, serverRendered: !!e.req, url: n };
          })();
        }
        componentDidMount() {
          var e = this;
          return le(function* () {
            se.Z.flushExpired(),
              se.Z.setTransientIfEmpty(
                "internal/logged_in_user",
                e.props.user,
                e.props.serverRendered
              );
            const [r, { offPlatformProjectConfig: n }] = yield Promise.all([
              (0, K.ZP)(
                null,
                "/internal/onboardingHubPage/enableOnboardingHub"
              ),
              (0, K.ZP)(null, "/internal/scaler/root_node_info"),
            ]);
            e.setState({
              customerQueueRedirectLink:
                null === n || void 0 === n
                  ? void 0
                  : n.customerQueueRedirectLink,
              enableOnboardingHub: r.enableOnboardingHub,
            });
          })();
        }
        render() {
          var e;
          const r = ue({}, this.props, {
            customerQueueRedirectLink: this.state.customerQueueRedirectLink,
            enableOnboardingHub: this.state.enableOnboardingHub,
          });
          var n;
          const o = c().startsWith(
            null !==
              (n =
                null === (e = this.props.url) || void 0 === e
                  ? void 0
                  : e.pathname) && void 0 !== n
              ? n
              : "",
            "/expert/"
          );
          return (0, t.jsxs)("div", {
            ref: (e) => e && (window.dims = e),
            children: [
              (0, t.jsx)(i.Z, {}),
              (0, t.jsx)(a.ZP, {}),
              (0, t.jsxs)(Q.FR, {
                user: this.props.user,
                url: this.props.url,
                children: [
                  A.IS_FEDERAL && (0, t.jsx)(ae.Z, {}),
                  !this.props.hideNavbar &&
                    !o &&
                    this.props.user &&
                    (0, t.jsx)(ie, ue({}, r)),
                  this.props.children,
                  A.IS_FEDERAL &&
                    window.dims &&
                    (0, t.jsx)(ae.Z, {
                      style:
                        window.innerHeight > window.dims.clientHeight
                          ? { bottom: 0, position: "fixed", width: "100%" }
                          : {},
                    }),
                ],
              }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.state = {
              customerQueueRedirectLink: void 0,
              enableOnboardingHub: void 0,
            });
        }
      }
      var me = pe;
    },
    33086: function (e, r, n) {
      n.d(r, {
        q: function () {
          return c;
        },
      });
      n(824246);
      var t = n(298784),
        o = n.n(t),
        i = n(827378),
        a = n(285556);
      const s = {
          get: (e) => (0, a.ZP)(null, e),
          post: (e, r) => (0, a.ZP)(null, e, { method: "POST", body: r }),
          clearCache: o().noop,
          cacheVersion: 0,
        },
        c = i.createContext(s);
    },
    700190: function (e, r, n) {
      n.d(r, {
        h: function () {
          return i;
        },
      });
      var t = n(827378),
        o = n(33086);
      const i = (e, r) => {
        const { get: n, cacheVersion: i } = (0, t.useContext)(o.q),
          { 0: a, 1: s } = (0, t.useState)({
            response: void 0,
            loading: !0,
            errored: !1,
            statusCode: null,
          });
        return (
          (0, t.useEffect)(() => {
            if (null === r || void 0 === r ? void 0 : r.shouldShortCircuit)
              return;
            s({ response: void 0, loading: !0, errored: !1 });
            let t = !1;
            const o = Date.now();
            return (
              n(e, {
                skipCache: null === r || void 0 === r ? void 0 : r.skipCache,
              })
                .then((e) => {
                  if (t) return;
                  const r = Date.now() - o;
                  s({ response: e, timeMs: r, loading: !1, errored: !1 });
                })
                .catch((r) => {
                  t ||
                    (console.error("failed to fetch", e, r),
                    s({
                      response: void 0,
                      loading: !1,
                      errored: !0,
                      statusCode: r.status,
                    }));
                }),
              () => {
                t = !0;
              }
            );
          }, [e, i, null === r || void 0 === r ? void 0 : r.refetchState]),
          a
        );
      };
    },
    772122: function (e, r, n) {
      n.d(r, {
        $s: function () {
          return u;
        },
        YI: function () {
          return p;
        },
        MD: function () {
          return m;
        },
      });
      var t = n(824246),
        o = n(827378),
        i = n(298784),
        a = n.n(i),
        s = n(655839),
        c = n.n(s);
      function l(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        );
      }
      const d = (e) => (r) => a().assign(r, { displayName: e });
      function u(e) {
        return (r) =>
          d(
            `${e}(${(function (e) {
              var r;
              return null !== (r = e.displayName) && void 0 !== r ? r : e.name;
            })(r)})`
          )(r);
      }
      const p = (e) =>
        o.forwardRef(
          d("")((r, n) =>
            (0, t.jsx)(
              e,
              (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var n = null != arguments[r] ? arguments[r] : {},
                    t = Object.keys(n);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (t = t.concat(
                      Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                      })
                    )),
                    t.forEach(function (r) {
                      l(e, r, n[r]);
                    });
                }
                return e;
              })({}, r, { forwardedRef: n })
            )
          )
        );
      function m(e) {
        return (r) => c()(r, e);
      }
    },
    680816: function (e, r, n) {
      n.d(r, {
        yl: function () {
          return A;
        },
        Nw: function () {
          return _;
        },
        mE: function () {
          return F;
        },
        D7: function () {
          return D;
        },
        Qr: function () {
          return M;
        },
        ej: function () {
          return V;
        },
      });
      var t = n(824246),
        o = n(827378),
        i = n(285556),
        a = n(162676);
      const s = "/support",
        c = (0, t.jsxs)("p", {
          children: [
            "You have not completed a W-9 form yet. If you believe this is in error, please",
            " ",
            (0, t.jsx)("a", { href: s, children: "contact support." }),
          ],
        }),
        l = (0, t.jsx)("p", {
          children: "You have not completed a W-9 form yet.",
        }),
        d = (0, t.jsxs)("p", {
          children: [
            "Please complete your W-9 tax form to ensure smooth processing of payouts. For more information, please visit our ",
            (0, t.jsx)("a", { href: s, children: "help center." }),
          ],
        }),
        u = (0, t.jsx)("p", {
          children:
            "Please complete your W-9 tax form to ensure smooth processing of payouts.",
        }),
        p = (0, t.jsxs)("p", {
          children: [
            "Please submit your IRS required W-9 tax form prior to continuing to task. For more information, please visit our ",
            (0, t.jsx)("a", { href: s, children: "help center." }),
          ],
        }),
        m = (0, t.jsx)("p", {
          children:
            "Please submit your IRS required W-9 tax form prior to continuing to task.",
        }),
        f = (0, t.jsxs)("p", {
          children: [
            "Your W-9 is currently being processed by the IRS. This can take around a couple of hours. For more information, please visit our ",
            (0, t.jsx)("a", { href: s, children: "help center." }),
          ],
        }),
        h = (0, t.jsx)("p", {
          children:
            "Your W-9 is currently being processed by the IRS. This can take around a couple of hours.",
        }),
        x = (e) => {
          switch (e) {
            case "US_PERMANENT_ADDRESS":
              return (0, t.jsxs)("span", {
                children: [
                  "The Form W-8 provided includes a permanent address in the US. Please review the",
                  " ",
                  (0, t.jsx)("a", {
                    href: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test",
                    children: "substantial presence test",
                  }),
                  " ",
                  "to determine whether a Form W-9 should be provided.",
                ],
              });
            case "PO_BOX_PERMANENT_ADDRESS":
              return (0, t.jsx)("span", {
                children:
                  "The Form W-8 provided includes a P.O. Box as a permanent address. Please provide a physical address.",
              });
            case "US_MAILING_ADDRESS":
              return (0, t.jsxs)("span", {
                children: [
                  "The Form W-8 provided includes a mailing address in the US. Please review the",
                  " ",
                  (0, t.jsx)("a", {
                    href: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test",
                    children: "substantial presence test",
                  }),
                  " ",
                  "to determine whether a Form W-9 should be provided.",
                ],
              });
            case "EXPIRED_FORM":
              return (0, t.jsx)("span", {
                children:
                  "The Form W-8 previously submitted has expired. Please re-submit.",
              });
            case "CARE_OF_PERMANENT_ADDRESS":
              return (0, t.jsx)("span", {
                children:
                  "The Form W-8 provided includes a Care-of address as a permanent address. Please provide a direct, physical address.",
              });
            default:
              return (0, t.jsxs)("span", {
                children: [
                  "Please reach out to support with this error code: ",
                  e,
                ],
              });
          }
        },
        g = (e) =>
          (0, t.jsxs)(t.Fragment, {
            children: [
              !e &&
                (0, t.jsx)("p", {
                  children:
                    "The TIN on your W-9 does not match the name provided, per the IRS. Please review their information on your W-9 to ensure that both the name and TIN are accurate and resubmit.",
                }),
              e &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("span", {
                      children:
                        "The following issues were found with your W-8 form:",
                    }),
                    e.map((e, r) =>
                      (0, t.jsx)(
                        "li",
                        { className: "mt-4", children: x(e.issue_type) },
                        `w8-issue-${r + 1}`
                      )
                    ),
                  ],
                }),
            ],
          }),
        v = g,
        b = (e) =>
          (0, t.jsxs)("p", {
            children: [
              "Your 1099 for ",
              e,
              " will be available to download by January 31, ",
              e + 1,
              " if you have earned more than $600 in ",
              e,
              ", are a U.S. person, and have submitted a valid W-9.",
            ],
          }),
        j = b,
        w = (e) =>
          (0, t.jsxs)("p", {
            children: [
              "In order to provide you a 1099 form for ",
              e,
              ", please ensure you have submitted a valid W-9.",
            ],
          });
      var y = n(788524);
      var k = ({ title: e, description: r, primaryCTA: n, tagVariant: o }) =>
          (0, t.jsx)("div", {
            className: "mt-4",
            children: (0, t.jsx)("div", {
              className: "flex w-full mb-4",
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)("h2", {
                    className: "text-xl font-semibold",
                    children: [
                      e,
                      n !== a.gw.NotRequired &&
                        (0, t.jsx)(y.V, {
                          className: "ml-1",
                          variant: o,
                          size: "sm",
                          children: n,
                        }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: "mt-2", children: r }),
                ],
              }),
            }),
          }),
        P = n(989369),
        C = n(433310),
        S = n(416534),
        O = n(723533);
      function I(e, r, n, t, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? r(c) : Promise.resolve(c).then(t, o);
      }
      var R = ({ embedRequestObject: e }) => {
        const { 0: r, 1: n } = (0, o.useState)(""),
          { 0: a, 1: s } = (0, o.useState)(""),
          c = (0, o.useMemo)(() => !(r || a), [r, a]);
        return (
          (0, o.useEffect)(() => {
            const e = (function () {
              var e,
                r =
                  ((e = function* () {
                    const e = yield (0, i.ZP)(
                      null,
                      "internal/worker/tax/w9_download_link"
                    );
                    s(e.error || ""), n(e.w9DownloadLink || "");
                  }),
                  function () {
                    var r = this,
                      n = arguments;
                    return new Promise(function (t, o) {
                      var i = e.apply(r, n);
                      function a(e) {
                        I(i, t, o, a, s, "next", e);
                      }
                      function s(e) {
                        I(i, t, o, a, s, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return r.apply(this, arguments);
              };
            })();
            e();
            const r = setInterval(e, 1e3 * (O.Ar - 60));
            return () => clearInterval(r);
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("p", {
                children:
                  "You may be required to update your W-9 if you have an update to your personal information such as a change to your marital status, address, or number of dependents.",
              }),
              (0, t.jsxs)("div", {
                id: "form-w9-accepted-description",
                className: "mt-4 mb-2",
                children: [
                  !c &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(S.zx, {
                          variant: "outline",
                          className: "focus:ring-0",
                          onClick: () => V(r, a),
                          children: "View W-9",
                        }),
                        (0, t.jsx)(S.zx, {
                          variant: "outline",
                          className: "ml-2 focus:ring-0",
                          onClick: () => M(e),
                          children: "Update W-9",
                        }),
                      ],
                    }),
                  c && (0, t.jsx)("span", { children: "Download loading..." }),
                ],
              }),
            ],
          })
        );
      };
      function E(e, r, n, t, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? r(c) : Promise.resolve(c).then(t, o);
      }
      var N = ({ year: e }) => {
          const { 0: r, 1: n } = (0, o.useState)(""),
            { 0: a, 1: s } = (0, o.useState)(""),
            { 0: c, 1: l } = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              const r = (function () {
                var r,
                  t =
                    ((r = function* () {
                      l(!0);
                      const { downloadUrl: r, error: t } = yield (0, i.ZP)(
                        null,
                        "internal/worker/tax/1099_download_link",
                        { query: { year: e } }
                      );
                      n(r || ""), s(t || ""), l(!1);
                    }),
                    function () {
                      var e = this,
                        n = arguments;
                      return new Promise(function (t, o) {
                        var i = r.apply(e, n);
                        function a(e) {
                          E(i, t, o, a, s, "next", e);
                        }
                        function s(e) {
                          E(i, t, o, a, s, "throw", e);
                        }
                        a(void 0);
                      });
                    });
                return function () {
                  return t.apply(this, arguments);
                };
              })();
              r();
              const t = setInterval(r, 1e3 * (O.M$ - 60));
              return () => clearInterval(t);
            }, [e]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("p", {
                  children: ["Please find your 1099 form below for ", e, "."],
                }),
                (0, t.jsxs)("div", {
                  id: "form-1099-ready-description",
                  className: "mt-4 mb-2",
                  children: [
                    !c &&
                      (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)(S.zx, {
                          variant: "outline",
                          className: "focus:ring-0",
                          onClick: () => V(r, a),
                          children: "View 1099",
                        }),
                      }),
                    c &&
                      (0, t.jsx)("span", { children: "Download loading..." }),
                  ],
                }),
              ],
            })
          );
        },
        L = n(444614),
        T = n(599789);
      function Z(e, r, n, t, o, i, a) {
        try {
          var s = e[i](a),
            c = s.value;
        } catch (l) {
          return void n(l);
        }
        s.done ? r(c) : Promise.resolve(c).then(t, o);
      }
      function H(e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (t, o) {
            var i = e.apply(r, n);
            function a(e) {
              Z(i, t, o, a, s, "next", e);
            }
            function s(e) {
              Z(i, t, o, a, s, "throw", e);
            }
            a(void 0);
          });
        };
      }
      const M = (function () {
          var e = H(function* (e) {
            const { user: r, setIsLoading: n, setStartedW9Collection: t } = e;
            if (r.spoofed)
              return void alert(
                "You cannot submit a user's W-9 if you are spoofing them!"
              );
            t(!0), n(!0);
            const { bearerToken: o } = yield (0, i.ZP)(
                null,
                "internal/worker/tax/get_taxbit_bearer_token"
              ),
              a = new P.ZP({ bearerToken: o });
            let s;
            n(!1);
            try {
              s = yield a.ui.taxDocumentation.collect({
                hostElement: document.querySelector("#tax-info-container"),
                data: {
                  documentType: "UNDETERMINED",
                  name: `${r.firstName} ${r.lastName}`,
                  address: { country: "US" },
                },
              });
            } catch (c) {
              C.Z.error(c);
            }
            try {
              yield null === s || void 0 === s ? void 0 : s.formCompletion,
                z(e);
            } catch (l) {
              C.Z.error(l);
            }
          });
          return function (r) {
            return e.apply(this, arguments);
          };
        })(),
        _ = (e, r, n) => {
          const { platform: o } = r,
            i = {
              [a.gw.NotAvailable]: {
                description: o === T.TaskingPlatform.Outlier ? l : c,
                tagVariant: "neutral",
              },
              [a.gw.NotRequired]: {
                description: o === T.TaskingPlatform.Outlier ? u : d,
                tagVariant: "warning",
              },
              [a.gw.Required]: {
                description: o === T.TaskingPlatform.Outlier ? m : p,
                tagVariant: "danger",
              },
              [a.gw.Processing]: {
                description: o === T.TaskingPlatform.Outlier ? h : f,
                tagVariant: "info",
              },
              [a.gw.Rejected]: {
                description: o === T.TaskingPlatform.Outlier ? v(n) : g(n),
                tagVariant: "danger",
              },
              [a.gw.Accepted]: {
                description: (0, t.jsx)(R, { embedRequestObject: r }),
                tagVariant: "success",
              },
            };
          return i[e]
            ? (0, t.jsx)(k, {
                title: "W-9",
                description: i[e].description,
                primaryCTA: e,
                tagVariant: i[e].tagVariant,
              })
            : (0, t.jsx)(t.Fragment, {});
        },
        A = (e) => {
          const { status: r, year: n, platform: o } = e,
            i = {
              [a.no.NotAvailable]: {
                description: o === T.TaskingPlatform.Outlier ? j(n) : b(n),
                tagVariant: "neutral",
              },
              [a.no.PendingAction]: {
                description: w(n),
                tagVariant: "warning",
              },
              [a.no.Ready]: {
                description: (0, t.jsx)(N, { year: n }),
                tagVariant: "success",
              },
            };
          return i[r]
            ? (0, t.jsx)(k, {
                title: "1099",
                description: i[r].description,
                primaryCTA: r,
                tagVariant: i[r].tagVariant,
              })
            : (0, t.jsx)(t.Fragment, {});
        },
        D = (function () {
          var e = H(function* () {
            return yield (0, i.ZP)(null, "internal/worker/tax/w9_status");
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        F = (function () {
          var e = H(function* (e) {
            return (
              (0, L.t)(e) &&
              (yield (0, i.ZP)(null, "internal/worker/tax/w9_blocked"))
            );
          });
          return function (r) {
            return e.apply(this, arguments);
          };
        })(),
        z = (function () {
          var e = H(function* (e) {
            const { setFormW9StatusComponent: r } = e;
            try {
              (yield (0, i.ZP)(null, "internal/worker/tax/w9_submit", {
                method: "POST",
              })).success &&
                (r(_(a.gw.Processing, e)),
                window.dispatchEvent(
                  new CustomEvent("toggleTaxBlock", { detail: !1 })
                ));
            } catch (n) {
              (0, i.vj)(n, { handleHttp: !0 });
            }
          });
          return function (r) {
            return e.apply(this, arguments);
          };
        })(),
        V = (e, r) => {
          r ? alert(r) : window.open(e, "_blank");
        };
    },
    128819: function (e, r, n) {
      var t = n(824246),
        o = n(188038),
        i = (n(827378), n(986004));
      r.Z = (e) => {
        const r = e.title || "Remotasks",
          n =
            e.description ||
            "Make money doing tasks.Start earning from home today!",
          a =
            e.ogImg || "https://www.remotasks.com/static/img/facebook-card.png",
          s =
            e.twImg || "https://www.remotasks.com/static/img/twitter-card.png";
        let c = "";
        "canary" === i.STACK && (c = "canary/"), i.IS_DEV && (c = "dev/");
        const l = "https://www.remotasks.com" + e.pathname;
        return (0, t.jsxs)(o.default, {
          children: [
            (0, t.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: `/static/img/favicons/${c}apple-touch-icon.png`,
            }),
            (0, t.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: `/static/img/favicons/${c}favicon-32x32.png`,
            }),
            (0, t.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: `/static/img/favicons/${c}favicon-16x16.png`,
            }),
            (0, t.jsx)("link", {
              rel: "shortcut icon",
              href: `/static/img/favicons/${c}favicon.ico`,
            }),
            (0, t.jsx)("link", {
              rel: "manifest",
              href: "/static/img/favicons/manifest.json",
            }),
            (0, t.jsx)("link", {
              rel: "mask-icon",
              href: "/static/img/favicons/safari-pinned-tab.svg",
              color: "#5bbad5",
            }),
            (0, t.jsx)("meta", { name: "theme-color", content: "#311263" }),
            (0, t.jsx)("meta", { name: "description", content: n }),
            (0, t.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, t.jsx)("meta", { name: "twitter:site", content: "@scaleapi" }),
            (0, t.jsx)("meta", {
              name: "twitter:creator",
              content: "@scaleapi",
            }),
            (0, t.jsx)("meta", { name: "twitter:title", content: r }),
            (0, t.jsx)("meta", { name: "twitter:description", content: n }),
            (0, t.jsx)("meta", { name: "twitter:image", content: s }),
            (0, t.jsx)("meta", { property: "og:url", content: l }),
            (0, t.jsx)("meta", { property: "og:type", content: "article" }),
            (0, t.jsx)("meta", { property: "og:title", content: r }),
            (0, t.jsx)("meta", { property: "og:description", content: n }),
            (0, t.jsx)("meta", { property: "og:image", content: a }),
            (0, t.jsx)("meta", {
              name: "google-site-verification",
              content: "uU4kAc_cN6upyJ6QnTKRW0Rth-CswQkMHKT1_JwxLCg",
            }),
            (0, t.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1.0, width=device-width",
            }),
            (0, t.jsx)("meta", {
              httpEquiv: "Accept-CH",
              content:
                "Sec-Ch-Ua, Sec-Ch-Ua-Arch, Sec-Ch-Ua-Full-Version, Sec-Ch-Ua-Mobile, Sec-Ch-Ua-Model, Sec-Ch-Ua-Platform, Sec-Ch-Ua-Platform-Version, Device-Memory, DPR, Viewport-Width",
            }),
            (0, t.jsx)("title", { children: r }),
          ],
        });
      };
    },
  },
]);
