"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [28922],
  {
    284779: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return x;
        },
      });
      var n = t(824246),
        i = t(679892),
        a = t.n(i),
        r = t(298784),
        s = t.n(r),
        l = t(827378),
        d = t(881620),
        c = t(60042),
        p = t.n(c),
        b = t(792739);
      class x extends l.Component {
        render() {
          const { textTransform: e, buttonType: o, form: t } = this.props,
            i = p()(this.props.type, this.props.size, {
              btn: !0,
              primary: this.props.primary,
              success: this.props.success,
              danger: this.props.danger,
              green: this.props.green,
              yellow: this.props.yellow,
              red: this.props.red,
              disabled: this.props.disabled,
              short: this.props.short,
              square: this.props.square,
              extraShadow: this.props.extraShadow,
              "no-borders": this.props.noBorders,
            });
          let r,
            s = this.props.children;
          return (
            "dropdown" === this.props.type &&
              (s = (0, n.jsxs)("div", {
                className: "jsx-468197e4559f122b",
                children: [
                  this.props.children,
                  (0, n.jsx)("svg", {
                    viewBox: "0 0 100 100",
                    className: "jsx-468197e4559f122b",
                    children: (0, n.jsx)("path", {
                      d: "m89.324 24.074h-78.598c-5.3711 0-7.2148 2.6133-4.4492 5.9883l38.531 43.445c2.7656 3.2227 7.5195 3.2227 10.438 0l38.379-43.445c2.9141-3.2188 1.0703-5.9883-4.3008-5.9883z",
                      className: "jsx-468197e4559f122b",
                    }),
                  }),
                  (0, n.jsx)(a(), {
                    id: "468197e4559f122b",
                    children:
                      "svg.jsx-468197e4559f122b{width:10px;margin-left:10px}",
                  }),
                ],
              })),
            this.props.icon &&
              (s = (0, n.jsxs)("div", {
                className: "jsx-eb3a6b2e691d53c6",
                children: [
                  (0, n.jsx)("span", {
                    className: "jsx-eb3a6b2e691d53c6",
                    children: this.props.icon,
                  }),
                  " ",
                  this.props.children,
                  (0, n.jsx)(a(), {
                    id: "eb3a6b2e691d53c6",
                    children:
                      "div.jsx-eb3a6b2e691d53c6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}span.jsx-eb3a6b2e691d53c6{margin-right:6px}",
                  }),
                ],
              })),
            this.props.arrows &&
              (s = (0, n.jsxs)("div", {
                children: [
                  this.props.children,
                  (0, n.jsxs)("span", {
                    style: {
                      marginLeft: "8px",
                      color: this.props.success ? "#00B8F4" : "inherit",
                    },
                    children: [
                      (0, n.jsx)("span", {
                        style: {
                          marginLeft: "4px",
                          opacity: 0.5,
                          display: "inline-block",
                        },
                        children: (0, n.jsx)(b.G, { icon: "caret-right" }),
                      }),
                      (0, n.jsx)("span", {
                        style: {
                          marginLeft: "4px",
                          opacity: 0.7,
                          display: "inline-block",
                        },
                        children: (0, n.jsx)(b.G, { icon: "caret-right" }),
                      }),
                      (0, n.jsx)("span", {
                        style: {
                          marginLeft: "4px",
                          opacity: 0.9,
                          display: "inline-block",
                        },
                        children: (0, n.jsx)(b.G, { icon: "caret-right" }),
                      }),
                    ],
                  }),
                ],
              })),
            (r =
              "button" === this.props.type
                ? "button"
                : "submit" === this.props.type
                ? "submit"
                : "dropdown" === this.props.type
                ? "dropdown"
                : this.props.href && !this.props.useRegularLink
                ? "prefetch-link"
                : "link"),
            (0, n.jsxs)("span", {
              "data-tip": this.props.tooltip,
              className:
                a().dynamic([
                  [
                    "aecad4343ea41486",
                    [e, "uppercase" === e ? "0.5px" : "auto"],
                  ],
                ]) +
                " " +
                (this.props.className || ""),
              children: [
                "button" === r &&
                  (0, n.jsx)("button", {
                    style: this.props.style,
                    disabled: this.props.disabled,
                    onClick: this.handleClick,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave,
                    type: o,
                    form: t,
                    title: this.props.title,
                    className:
                      a().dynamic([
                        [
                          "aecad4343ea41486",
                          [e, "uppercase" === e ? "0.5px" : "auto"],
                        ],
                      ]) +
                      " " +
                      (i || ""),
                    children: s,
                  }),
                "submit" === r &&
                  (0, n.jsx)("input", {
                    style: this.props.style,
                    type: "submit",
                    value: this.props.value,
                    className:
                      a().dynamic([
                        [
                          "aecad4343ea41486",
                          [e, "uppercase" === e ? "0.5px" : "auto"],
                        ],
                      ]) +
                      " " +
                      (i || ""),
                  }),
                "dropdown" === r &&
                  (0, n.jsxs)("div", {
                    className:
                      a().dynamic([
                        [
                          "aecad4343ea41486",
                          [e, "uppercase" === e ? "0.5px" : "auto"],
                        ],
                      ]) + " dropdown-container",
                    children: [
                      (0, n.jsx)("button", {
                        style: this.props.style,
                        disabled: this.props.disabled,
                        onClick: this.toggleDropdown,
                        className:
                          a().dynamic([
                            [
                              "aecad4343ea41486",
                              [e, "uppercase" === e ? "0.5px" : "auto"],
                            ],
                          ]) +
                          " " +
                          (i || ""),
                        children: s,
                      }),
                      (0, n.jsx)("div", {
                        style: {
                          display:
                            !0 === this.state.dropdownOpen ? "block" : "none",
                        },
                        className:
                          a().dynamic([
                            [
                              "aecad4343ea41486",
                              [e, "uppercase" === e ? "0.5px" : "auto"],
                            ],
                          ]) + " dropdown-content",
                        children: this.props.dropdownContent,
                      }),
                    ],
                  }),
                "prefetch-link" === r &&
                  (0, n.jsx)(d.ZP, {
                    href: this.props.href,
                    children: (0, n.jsx)("a", {
                      style: this.props.style,
                      onClick: this.handleClick,
                      onMouseEnter: this.props.onMouseEnter,
                      onMouseLeave: this.props.onMouseLeave,
                      rel: this.props.rel,
                      className:
                        a().dynamic([
                          [
                            "aecad4343ea41486",
                            [e, "uppercase" === e ? "0.5px" : "auto"],
                          ],
                        ]) +
                        " " +
                        (i || ""),
                      children: s,
                    }),
                  }),
                "link" === r &&
                  (0, n.jsx)("a", {
                    href: this.props.href,
                    target: this.props.target,
                    style: this.props.style,
                    onClick: this.handleClick,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave,
                    rel: this.props.rel,
                    className:
                      a().dynamic([
                        [
                          "aecad4343ea41486",
                          [e, "uppercase" === e ? "0.5px" : "auto"],
                        ],
                      ]) +
                      " " +
                      (i || ""),
                    children: s,
                  }),
                (0, n.jsx)(a(), {
                  id: "aecad4343ea41486",
                  dynamic: [e, "uppercase" === e ? "0.5px" : "auto"],
                  children: `span.full.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}span.full.__jsx-style-dynamic-selector .btn.__jsx-style-dynamic-selector{margin:0}button.__jsx-style-dynamic-selector,input.__jsx-style-dynamic-selector{font-family:var(--font-family)}button.__jsx-style-dynamic-selector,input.__jsx-style-dynamic-selector{border:0;outline:0}.btn.__jsx-style-dynamic-selector{border:0;outline:0;text-transform:${e};letter-spacing:${
                    "uppercase" === e ? "0.5px" : "auto"
                  };-webkit-border-radius:var(--border-radius,8px);-moz-border-radius:var(--border-radius,8px);border-radius:var(--border-radius,8px);background:white;color:#000;fill:black;font-size:14px;font-weight:500;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center;white-space:nowrap;cursor:pointer;border:none;-webkit-transition:.2s ease-out all;-moz-transition:.2s ease-out all;-o-transition:.2s ease-out all;transition:.2s ease-out all;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.03),0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.1);-moz-box-shadow:0 0 0 1px rgba(0,0,0,.03),0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.1);box-shadow:0 0 0 1px rgba(0,0,0,.03),0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.1)}@media only screen and (min-width:768px){.btn.__jsx-style-dynamic-selector{font-family:var(--font-family)}}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.1);-moz-box-shadow:0 2px 4px rgba(0,0,0,.1);box-shadow:0 2px 4px rgba(0,0,0,.1)}.sm.__jsx-style-dynamic-selector{font-size:13px;padding:5px 10px}.md.__jsx-style-dynamic-selector{font-size:14px;padding:7px 12px}.lg.__jsx-style-dynamic-selector{font-size:14px;padding:14px 20px}.full-width.__jsx-style-dynamic-selector{width:100%}.no-borders.__jsx-style-dynamic-selector{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.green.__jsx-style-dynamic-selector{background:#00ff07;color:#333;fill:#333}.green.__jsx-style-dynamic-selector:hover{background:rgb(0,230,6)}.yellow.__jsx-style-dynamic-selector{background:#ffca28;color:#333;fill:#333}.red.__jsx-style-dynamic-selector{background:var(--color-reject);color:white;fill:white}.purple.__jsx-style-dynamic-selector{background:#8215fe;color:white;fill:white}.gradient.__jsx-style-dynamic-selector{background-image:-webkit-linear-gradient(140deg,#8e0cff 0%,#ff4de9 40%,#f89558 100%);background-image:-moz-linear-gradient(140deg,#8e0cff 0%,#ff4de9 40%,#f89558 100%);background-image:-o-linear-gradient(140deg,#8e0cff 0%,#ff4de9 40%,#f89558 100%);background-image:linear-gradient(310deg,#8e0cff 0%,#ff4de9 40%,#f89558 100%);color:white;fill:white}.remoBlue.__jsx-style-dynamic-selector{background:var(--color-remo-blue);color:white;fill:white}.primary.__jsx-style-dynamic-selector{background:#2773ff;color:white;fill:white;-webkit-box-shadow:0 3px 4px rgba(0,0,0,.1);-moz-box-shadow:0 3px 4px rgba(0,0,0,.1);box-shadow:0 3px 4px rgba(0,0,0,.1)}.primary.__jsx-style-dynamic-selector:hover{background:rgb(35,104,230);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3)}.secondary.__jsx-style-dynamic-selector{background:rgba(43,153,216,.2);color:#2b99d8;letter-spacing:normal;fill:white;-webkit-box-shadow:0 3px 4px rgba(0,0,0,.1);-moz-box-shadow:0 3px 4px rgba(0,0,0,.1);box-shadow:0 3px 4px rgba(0,0,0,.1)}.secondary.__jsx-style-dynamic-selector:hover{background:rgba(43,153,216,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3)}.modal.__jsx-style-dynamic-selector{background:var(--color-pink);color:white}.modal.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3)}.success.__jsx-style-dynamic-selector{background:black;color:white;fill:white;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.2);-moz-box-shadow:0 2px 10px rgba(0,0,0,.2);box-shadow:0 2px 10px rgba(0,0,0,.2)}.success.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:0 3px 10px rgba(0,0,0,.4);-moz-box-shadow:0 3px 10px rgba(0,0,0,.4);box-shadow:0 3px 10px rgba(0,0,0,.4)}.successAlt.__jsx-style-dynamic-selector{background:rgb(23,182,41);color:white;fill:white;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.2);-moz-box-shadow:0 2px 10px rgba(0,0,0,.2);box-shadow:0 2px 10px rgba(0,0,0,.2)}.successAlt.__jsx-style-dynamic-selector:hover{background:rgb(20,159,36);-webkit-box-shadow:0 3px 10px rgba(0,0,0,.3);-moz-box-shadow:0 3px 10px rgba(0,0,0,.3);box-shadow:0 3px 10px rgba(0,0,0,.3)}.danger.__jsx-style-dynamic-selector{background:rgb(236,50,47);color:white;fill:white;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.2);-moz-box-shadow:0 2px 10px rgba(0,0,0,.2);box-shadow:0 2px 10px rgba(0,0,0,.2)}.danger.__jsx-style-dynamic-selector:hover{background:rgb(189,40,38);-webkit-box-shadow:0 3px 10px rgba(0,0,0,.3);-moz-box-shadow:0 3px 10px rgba(0,0,0,.3);box-shadow:0 3px 10px rgba(0,0,0,.3)}.hover-danger.__jsx-style-dynamic-selector:hover{color:white;fill:white;background:rgb(188,67,29);-webkit-box-shadow:0 3px 10px rgba(0,0,0,.3);-moz-box-shadow:0 3px 10px rgba(0,0,0,.3);box-shadow:0 3px 10px rgba(0,0,0,.3)}.dropdown.__jsx-style-dynamic-selector,.dropdown-content.__jsx-style-dynamic-selector{border:1px solid rgba(0,0,0,.05)}.link.__jsx-style-dynamic-selector{background:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;text-transform:none;letter-spacing:0;padding:0;color:var(--link-color)}.link.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.dropdown-container.__jsx-style-dynamic-selector .dropdown-content.__jsx-style-dynamic-selector{margin-top:10px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.05);-moz-box-shadow:0 1px 6px rgba(0,0,0,.05);box-shadow:0 1px 6px rgba(0,0,0,.05)}.info.__jsx-style-dynamic-selector{background:green;color:white;-webkit-box-shadow:0 5px 10px rgba(0,0,0,.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,.2);box-shadow:0 5px 10px rgba(0,0,0,.2)}.short.__jsx-style-dynamic-selector{height:35px;padding:10px 22px}.square.__jsx-style-dynamic-selector{padding:0;height:50px;min-width:50px}.disabled.__jsx-style-dynamic-selector{background:rgba(0,0,0,0);pointer-events:none;color:rgba(0,0,0,.2)}.extraShadow.__jsx-style-dynamic-selector{-webkit-box-shadow:0px 4px 20px rgba(0,0,0,.4);-moz-box-shadow:0px 4px 20px rgba(0,0,0,.4);box-shadow:0px 4px 20px rgba(0,0,0,.4)}.extraShadow.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:0 8px 20px rgba(0,0,0,.4);-moz-box-shadow:0 8px 20px rgba(0,0,0,.4);box-shadow:0 8px 20px rgba(0,0,0,.4)}`,
                }),
              ],
            })
          );
        }
        constructor(e) {
          super(e),
            (this.toggleDropdown = () => {
              this.setState((e) => ({ dropdownOpen: !e.dropdownOpen }));
            }),
            (this.handleClick = (e) => {
              if (this.props.onClick) {
                if (this.props.requireConfirmation) {
                  const e = this.props.confirmationMessage || "Are you sure?";
                  if (!window.confirm(e)) return;
                }
                this.props.onClick(e);
              }
            }),
            (this.state = { dropdownOpen: !1 });
        }
      }
      x.defaultProps = {
        type: "default",
        size: "md",
        arrows: !1,
        block: !1,
        green: !1,
        disabled: !1,
        tooltip: null,
        textTransform: "uppercase",
        useRegularLink: !1,
        onClick: s().noop,
        onMouseEnter() {},
        onMouseLeave() {},
      };
    },
    942662: function (e, o, t) {
      var n = t(284779);
      o.Z = n.Z;
    },
    411356: function (e, o, t) {
      t.d(o, {
        zx: function () {
          return s.Z;
        },
        l0: function () {
          return j;
        },
        o2: function () {
          return b.Z;
        },
        BZ: function () {
          return l;
        },
        M_: function () {
          return d;
        },
        rW: function () {
          return h;
        },
        oH: function () {
          return c.Z;
        },
        __: function () {
          return p.Z;
        },
        Ph: function () {
          return u.Z;
        },
        gx: function () {
          return m.Z;
        },
      });
      var n = t(824246),
        i = t(679892),
        a = t.n(i),
        r = t(827378),
        s = t(942662);
      var l = ({ style: e, children: o }) =>
        (0, n.jsxs)("div", {
          style: e,
          className: "jsx-1124b2725b73022f input-group",
          children: [
            o,
            (0, n.jsx)(a(), {
              id: "1124b2725b73022f",
              children:
                ".input-group{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:stretch;justify-content:stretch}.input-group .container{-webkit-flex:1;-ms-flex:1;flex:1}.input-group input{borderradius:0 4px 4px 0;marginleft:0;width:100%;-webkit-flex:1;-ms-flex:1;flex:1}",
            }),
          ],
        });
      var d = ({ children: e }) =>
          (0, n.jsxs)("span", {
            className: "jsx-552f44e45eb0a624 input-prepend",
            children: [
              e,
              (0, n.jsx)(a(), {
                id: "552f44e45eb0a624",
                children:
                  ".input-prepend{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:vertical;-ms-flex-direction:vertical;flex-direction:vertical;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px;-webkit-border-radius:4px 0 0 4px;-moz-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;background-color:var(--bg-gray-light-1);-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.03),0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.1);-moz-box-shadow:0 0 0 1px rgba(0,0,0,.03),0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.1);box-shadow:0 0 0 1px rgba(0,0,0,.03),0 1px 0 rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.1);font-size:14px;font-family:var(--font-family)}",
              }),
            ],
          }),
        c = t(805282),
        p = t(372275),
        b = t(569571);
      function x(e, o, t) {
        return (
          o in e
            ? Object.defineProperty(e, o, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = t),
          e
        );
      }
      function f(e) {
        for (var o = 1; o < arguments.length; o++) {
          var t = null != arguments[o] ? arguments[o] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (o) {
              x(e, o, t[o]);
            });
        }
        return e;
      }
      var h = (e) =>
          (0, n.jsxs)("label", {
            className: "jsx-1dfc60408a67f394 checkbox-label",
            children: [
              (0, n.jsx)(
                "input",
                f({ type: "radio" }, e, {
                  className:
                    "jsx-1dfc60408a67f394 " +
                    ((e && null != e.className && e.className) ||
                      "option-input radio"),
                })
              ),
              (0, n.jsx)(a(), {
                id: "1dfc60408a67f394",
                children:
                  '@keyframes click-wave{0%{height:14px;width:14px;opacity:.35;position:relative}100%{height:26px;width:26px;margin-left:-8px;margin-top:-8px;opacity:0}}.option-input.jsx-1dfc60408a67f394{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;position:relative;right:0;bottom:0;left:0;height:14px;width:14px;-webkit-transition:all.15s ease-out 0s;-moz-transition:all.15s ease-out 0s;-o-transition:all.15s ease-out 0s;transition:all.15s ease-out 0s;background:#fff;border:none;color:#fff;cursor:pointer;display:inline-block;margin-right:.5rem;outline:none;position:relative;z-index:1000;margin:0;margin-bottom:-2px;margin-right:4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:1px solid#f1f1f1;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1)}.option-input.jsx-1dfc60408a67f394:hover{background:#f9f9f9;border-color:transparent}.option-input.jsx-1dfc60408a67f394:checked{background:var(--link-color);-webkit-box-shadow:0 0px 4px 0 var(--link-color);-moz-box-shadow:0 0px 4px 0 var(--link-color);box-shadow:0 0px 4px 0 var(--link-color);border-color:transparent}.option-input.jsx-1dfc60408a67f394:checked::before{height:6px;width:6px;-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;position:absolute;left:3px;top:3px;content:"";background:white;display:inline-block;text-align:center;line-height:16px}.option-input.jsx-1dfc60408a67f394:checked::after{-webkit-animation:click-wave.3s;-moz-animation:click-wave.3s;-o-animation:click-wave.3s;animation:click-wave.3s;background:var(--link-color);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;content:"";display:block;position:relative;z-index:100}.option-input.radio.jsx-1dfc60408a67f394{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.option-input.radio.jsx-1dfc60408a67f394::after{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}',
              }),
            ],
          }),
        u = t(830514),
        m = t(162491),
        g = t(723615),
        w = t.n(g);
      function y(e, o, t) {
        return (
          o in e
            ? Object.defineProperty(e, o, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = t),
          e
        );
      }
      function k(e, o) {
        if (null == e) return {};
        var t,
          n,
          i = (function (e, o) {
            if (null == e) return {};
            var t,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (t = a[n]), o.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, o);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (t = a[n]),
              o.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      class j extends r.Component {
        render() {
          const e = this.props,
            { mode: o, children: t } = e,
            i = k(e, ["mode", "children"]),
            r = "vertical" === o || "grid" === o ? o : "horizontal";
          return (0, n.jsxs)(
            "form",
            (function (e) {
              for (var o = 1; o < arguments.length; o++) {
                var t = null != arguments[o] ? arguments[o] : {},
                  n = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(t).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })
                  )),
                  n.forEach(function (o) {
                    y(e, o, t[o]);
                  });
              }
              return e;
            })({}, i, {
              className: "jsx-c7a642aba060a1bc " + (r || ""),
              children: [
                t,
                (0, n.jsx)(a(), {
                  id: "c7a642aba060a1bc",
                  children:
                    "form.jsx-c7a642aba060a1bc{display:grid;width:100%;grid-column-gap:10px;grid-row-gap:20px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-column-end:1;max-width:500px;line-height:2}form.horizontal.jsx-c7a642aba060a1bc{grid-template-columns:140px auto;grid-row-gap:20px}form.vertical.jsx-c7a642aba060a1bc{grid-template-columns:100%;grid-gap:20px}form.grid.jsx-c7a642aba060a1bc{grid-template-columns:auto auto;grid-gap:20px}",
                }),
              ],
            })
          );
        }
      }
      (j.propTypes = { mode: w().string }),
        (j.defaultProps = { mode: "horizontal" });
    },
    569571: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return l;
        },
      });
      var n = t(824246),
        i = t(679892),
        a = t.n(i);
      t(827378);
      function r(e, o, t) {
        return (
          o in e
            ? Object.defineProperty(e, o, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = t),
          e
        );
      }
      function s(e) {
        for (var o = 1; o < arguments.length; o++) {
          var t = null != arguments[o] ? arguments[o] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (o) {
              r(e, o, t[o]);
            });
        }
        return e;
      }
      var l = (e) =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(
              "input",
              s({ type: "checkbox" }, e, {
                className:
                  "jsx-8ca4645870bc1fd5 " +
                  ((e && null != e.className && e.className) || "option-input"),
              })
            ),
            (0, n.jsx)(a(), {
              id: "8ca4645870bc1fd5",
              children:
                '.option-input.jsx-8ca4645870bc1fd5{background:#fff;width:14px;height:14px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;border:1px solid#f1f1f1;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:0 1px 2px rgba(0,0,0,.1);box-shadow:0 1px 2px rgba(0,0,0,.1);position:relative;display:inline-block;-webkit-transition:all 150ms ease-out;-moz-transition:all 150ms ease-out;-o-transition:all 150ms ease-out;transition:all 150ms ease-out;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;outline:none}.option-input.jsx-8ca4645870bc1fd5:hover:not(:disabled){background:#f9f9f9}.option-input.jsx-8ca4645870bc1fd5:disabled{-webkit-appearance:checkbox;-moz-appearance:checkbox;-ms-appearance:checkbox;appearance:checkbox;cursor:default}.option-input.jsx-8ca4645870bc1fd5:checked:not(:disabled){background:var(--link-color);border:1px solid var(--link-color);-webkit-box-shadow:0 0px 4px 0 var(--link-color);-moz-box-shadow:0 0px 4px 0 var(--link-color);box-shadow:0 0px 4px 0 var(--link-color)}.option-input.jsx-8ca4645870bc1fd5:checked:before{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MSA2MiI+ICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjguNzQgMzguMzVjLTMuOS0zLjYtMTAuMjEtMTAuMi0xNC40Mi0xNC40LTQuMi0zLjkxLTYuOS0uNjEtMTIgNC44LTUuNzEgNS43IDAgOC43IDguMSAxNi44MWwxNC43MiAxNC43MmM1LjQgNC44IDkuOS0yLjQgMTcuMTEtOS4zMWwyOS40My0yOS43M2M5LjMxLTkuMDEgMTEuNDEtOS4wMSAzLjktMTYuMjItNi42LTYuOS02LjMtNi45LTE2LjgxIDMuOS00LjggNC41LTI4LjUzIDI4LjUzLTMwLjAzIDI5LjQ0eiIvPjwvc3ZnPg==);font-size:12px;line-height:12px;width:10px;height:10px;position:absolute;left:1px;display:inline-block;text-align:center;z-index:1;-webkit-animation:grow 250ms ease-out 1 forwards;-moz-animation:grow 250ms ease-out 1 forwards;-o-animation:grow 250ms ease-out 1 forwards;animation:grow 250ms ease-out 1 forwards}.option-input.jsx-8ca4645870bc1fd5:checked:after{content:"";background:var(--link-color);-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;display:block;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-animation:wave 500ms ease-out 1 forwards;-moz-animation:wave 500ms ease-out 1 forwards;-o-animation:wave 500ms ease-out 1 forwards;animation:wave 500ms ease-out 1 forwards}@keyframes wave{0%{opacity:.35;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(2.4);-moz-transform:scale(2.4);-o-transform:scale(2.4);transform:scale(2.4)}}@keyframes grow{0%{opacity:0;-webkit-transform:scale(.5);-moz-transform:scale(.5);-o-transform:scale(.5);transform:scale(.5)}50%{opacity:1}100%{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}',
            }),
          ],
        });
    },
    372275: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return l;
        },
      });
      var n = t(824246),
        i = t(679892),
        a = t.n(i),
        r = (t(827378), t(60042)),
        s = t.n(r);
      var l = ({
        top: e,
        bold: o,
        align: t = "left",
        style: i,
        className: r,
        children: l,
      }) => {
        const d = s()(t, { bold: o, top: e });
        return (0, n.jsxs)("label", {
          style: i,
          className: "jsx-c82652cecf7d1534 " + (r || d || ""),
          children: [
            l,
            (0, n.jsx)(a(), {
              id: "c82652cecf7d1534",
              children:
                "label.jsx-c82652cecf7d1534{font-weight:normal;font-size:.9rem;line-height:2.2;display:block;cursor:pointer}label.left.jsx-c82652cecf7d1534{text-align:left}label.right.jsx-c82652cecf7d1534{text-align:right}label.bold.jsx-c82652cecf7d1534{font-weight:bold}label.top.jsx-c82652cecf7d1534{-webkit-align-self:start;-ms-flex-item-align:start;align-self:start}",
            }),
          ],
        });
      };
    },
    830514: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return f;
        },
      });
      var n = t(824246),
        i = t(679892),
        a = t.n(i),
        r = t(298784),
        s = t.n(r),
        l = t(827378),
        d = t(60042),
        c = t.n(d);
      function p(e, o, t) {
        return (
          o in e
            ? Object.defineProperty(e, o, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[o] = t),
          e
        );
      }
      function b(e) {
        for (var o = 1; o < arguments.length; o++) {
          var t = null != arguments[o] ? arguments[o] : {},
            n = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })
            )),
            n.forEach(function (o) {
              p(e, o, t[o]);
            });
        }
        return e;
      }
      class x extends l.Component {
        render() {
          const e = s().omit(
            this.props,
            "onChange",
            "blurOnChange",
            "fullWidth",
            "size",
            "className"
          );
          return (0, n.jsxs)("div", {
            className:
              "jsx-5113511efabfdfca " +
              (c()("wrapper", this.props.size, this.props.className, {
                full: !!this.props.fullWidth,
              }) || ""),
            children: [
              (0, n.jsx)(
                "select",
                b({ ref: this.selectRef, onChange: this.onChange }, e, {
                  className:
                    "jsx-5113511efabfdfca " +
                    ((e && null != e.className && e.className) || ""),
                  children: this.props.children,
                })
              ),
              (0, n.jsx)(a(), {
                id: "5113511efabfdfca",
                children:
                  'select.jsx-5113511efabfdfca{background-color:#f5f4f9;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);font-size:14px;font-family:var(--font-family);-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;border:0;padding-right:28px;cursor:pointer;height:26px;color:var(--color-form-input)}select.jsx-5113511efabfdfca:disabled{color:#999;pointer-events:none}.wrapper.jsx-5113511efabfdfca{display:inline-block;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;position:relative;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.wrapper.jsx-5113511efabfdfca::before{position:absolute;border:4px solid transparent;border-bottom:4px solid#636e7d;content:" ";display:block}.wrapper.jsx-5113511efabfdfca::after{position:absolute;border:4px solid transparent;border-top:4px solid#636e7d;content:" ";display:block}.full.jsx-5113511efabfdfca{width:100%}.full.jsx-5113511efabfdfca select.jsx-5113511efabfdfca{width:100%}.md.jsx-5113511efabfdfca select.jsx-5113511efabfdfca{height:30px;padding:0 28px 0 10px}.md.jsx-5113511efabfdfca::before{right:10px;top:4px}.md.jsx-5113511efabfdfca::after{right:10px;bottom:4px}.sm.jsx-5113511efabfdfca select.jsx-5113511efabfdfca{height:24px;padding:0 20px 0 6px}.sm.jsx-5113511efabfdfca::before{right:6px;top:2px}.sm.jsx-5113511efabfdfca::after{right:6px;bottom:2px}',
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.onChange = (e) => {
              this.props.onChange &&
                (this.props.onChange(e),
                this.props.blurOnChange && this.selectRef.current.blur());
            }),
            (this.selectRef = l.createRef());
        }
      }
      x.defaultProps = { size: "md", fullWidth: !1 };
      var f = x;
    },
    885564: function (e, o, t) {
      var n = t(824246),
        i = t(679892),
        a = t.n(i);
      t(827378);
      o.Z = () =>
        (0, n.jsx)(a(), {
          id: "f8c00c5e492180d9",
          children:
            '@font-face{font-family:var(--font-family);src:url("/static/global/fonts/a5b66773-6a36-469a-8f45-e08448130bf2.eot?#iefix");src:url("/static/global/fonts/a5b66773-6a36-469a-8f45-e08448130bf2.eot?#iefix")format(url("eot")),url("/static/global/fonts/3ba56aa2-c01d-4bfc-aae4-eac13ee2ebbc.woff2")format(url("woff2")),url("/static/global/fonts/51f1c13a-2c9b-4cba-9cbf-93317cbd3e10.woff")format(url("woff")),url("/static/global/fonts/7b11ae47-5126-4c06-8f61-fbee4b6a8461.ttf")format(url("truetype")),url("/static/global/fonts/d6936923-56f5-4284-bb73-3230f8a49594.svg#d6936923-56f5-4284-bb73-3230f8a49594")format(url("svg"));src:url("/static/global/fonts/a5b66773-6a36-469a-8f45-e08448130bf2.eot?#iefix")format("eot"),url("/static/global/fonts/3ba56aa2-c01d-4bfc-aae4-eac13ee2ebbc.woff2")format("woff2"),url("/static/global/fonts/51f1c13a-2c9b-4cba-9cbf-93317cbd3e10.woff")format("woff"),url("/static/global/fonts/7b11ae47-5126-4c06-8f61-fbee4b6a8461.ttf")format("truetype"),url("/static/global/fonts/d6936923-56f5-4284-bb73-3230f8a49594.svg#d6936923-56f5-4284-bb73-3230f8a49594")format("svg");font-weight:normal}@font-face{font-family:var(--font-family);src:url("/static/global/fonts/cd8a7ca1-a1a1-4902-9824-18890229b553.eot?#iefix");src:url("/static/global/fonts/cd8a7ca1-a1a1-4902-9824-18890229b553.eot?#iefix")format(url("eot")),url("/static/global/fonts/08591efc-f43b-4dc0-b066-e39bb77fd0d9.woff2")format(url("woff2")),url("/static/global/fonts/bb2822e9-2055-4c95-bd66-438a33d71a60.woff")format(url("woff")),url("/static/global/fonts/1796e78c-3f90-4d62-a510-d2f1ebc88d86.ttf")format(url("truetype")),url("/static/global/fonts/db703c36-bf80-4647-8190-abc666705582.svg#db703c36-bf80-4647-8190-abc666705582")format(url("svg"));src:url("/static/global/fonts/cd8a7ca1-a1a1-4902-9824-18890229b553.eot?#iefix")format("eot"),url("/static/global/fonts/08591efc-f43b-4dc0-b066-e39bb77fd0d9.woff2")format("woff2"),url("/static/global/fonts/bb2822e9-2055-4c95-bd66-438a33d71a60.woff")format("woff"),url("/static/global/fonts/1796e78c-3f90-4d62-a510-d2f1ebc88d86.ttf")format("truetype"),url("/static/global/fonts/db703c36-bf80-4647-8190-abc666705582.svg#db703c36-bf80-4647-8190-abc666705582")format("svg");font-weight:bold}body{margin:0 auto;padding:0;background-color:#fff;width:auto;text-rendering:geometricPrecision}.root{margin:0 auto;width:1024px}.root.o__loading{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}html,body{height:100%}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.sidebar{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:0 0 200px;-ms-flex:0 0 200px;flex:0 0 200px;width:200px}.sidebar__link{margin:18px 0;display:block;text-decoration:none}.sidebar{padding:40px 30px}section:not(#shadow-host-companion,.scaleui *,.chat-lite *){background-color:#fff;-webkit-border-top-right-radius:11px;-moz-border-radius-topright:11px;border-top-right-radius:11px;width:100%;-webkit-border-bottom-right-radius:12px;-moz-border-radius-bottomright:12px;border-bottom-right-radius:12px;border:1px solid#d4d8df;border-left:0;border-top:0;margin-top:50px}.boxes{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.box{padding:34px 76px;border:1px solid#dcdcdc;background-color:#fff;-webkit-box-shadow:0px 0px 10px 0px rgba(174,174,174,.14);-moz-box-shadow:0px 0px 10px 0px rgba(174,174,174,.14);box-shadow:0px 0px 10px 0px rgba(174,174,174,.14);-webkit-border-radius:11.59px;-moz-border-radius:11.59px;border-radius:11.59px;text-align:center;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:350px}.separator{width:100%;background-color:#d4d8df;height:1px}.table{border:1px solid#dcdcdc;-webkit-box-shadow:0px 0px 10px 0px rgba(174,174,174,.14);-moz-box-shadow:0px 0px 10px 0px rgba(174,174,174,.14);box-shadow:0px 0px 10px 0px rgba(174,174,174,.14);-webkit-border-radius:11px;-moz-border-radius:11px;border-radius:11px;width:764px}.table__body{-webkit-border-radius:11px;-moz-border-radius:11px;border-radius:11px;overflow:hidden}.double-bounce1,.double-bounce2{background-color:#26b2c3}@document url-prefix(){.tabs__container{left:202px}}.profile{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.small{font-size:12px;color:#51555d}#root{height:100%}.hsp__3{width:30px;height:1px;display:block;-webkit-flex:0 0 30px;-ms-flex:0 0 30px;flex:0 0 30px;content:""}.hsp__2{width:20px;height:1px;display:block;-webkit-flex:0 0 20px;-ms-flex:0 0 20px;flex:0 0 20px;content:""}.hsp__25{width:20px;height:1px;display:block;-webkit-flex:0 0 25px;-ms-flex:0 0 25px;flex:0 0 25px;content:""}.hsp__12{width:12px;height:1px;display:block;-webkit-flex:0 0 12px;-ms-flex:0 0 12px;flex:0 0 12px;content:""}.hsp__15{width:15px;height:1px;display:block;-webkit-flex:0 0 15px;-ms-flex:0 0 15px;flex:0 0 15px;content:""}.hsp__05{width:5px;height:1px;display:block;-webkit-flex:0 0 5px;-ms-flex:0 0 5px;flex:0 0 5px;content:""}.hsp__1{width:10px;height:1px;display:block;-webkit-flex:0 0 10px;-ms-flex:0 0 10px;flex:0 0 10px;content:""}.sp__05{display:block;height:5px;width:1px}.sp__15{display:block;height:15px;width:1px}.sp__1{display:block;height:10px;width:1px}.sp__2{display:block;height:20px;width:1px}.sp__3{display:block;height:30px;width:1px}.sp__5{display:block;height:50px;width:1px}.hsp__8{width:80px;height:1px;display:block}.btn:not(.chat-lite *){margin-left:auto;margin-right:auto;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;-moz-user-select:none}.btn.o__left{margin-left:0}.btn.o__danger{background-color:#c51919}.btn.o__danger:hover{background-color:rgb(177,23,23)}.btn.o__short{height:35px}.btn.o__xshort{height:25px;font-size:10px}.btn.o__xskinny{width:75px}.btn.o__skinny{width:100px}.btn.o__disabled,.button.o__disabled{opacity:.5}.btn.o__disabled:hover,.button.o__disabled:hover{opacity:.5;cursor:default;background:#26b2c3}.btn .double-spinner{width:10px;height:10px}.tabs__container{height:50px;top:0;-webkit-border-top-right-radius:11px;-moz-border-radius-topright:11px;border-top-right-radius:11px;position:absolute;left:200px;width:234px;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.tabs:not(.chat-lite *){display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:234px;height:50px;position:relative;-webkit-border-top-right-radius:11px;-moz-border-radius-topright:11px;border-top-right-radius:11px}.tabs__container--disabled{opacity:.6;pointer-events:none}.tab.o__test{left:115px;-webkit-border-top-right-radius:11px;-moz-border-radius-topright:11px;border-top-right-radius:11px}.tab:not(.chat-lite *){height:50px;padding:16px 40px;text-transform:uppercase;font-size:14px;letter-spacing:1px;color:#51555c;background-color:#fff;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;background-color:#eee;width:115px;border:1px solid#d9d9d9;border-left:0;text-decoration:none}.tab:hover,.tab.o__active{background-color:#fff;color:#26b2c3;cursor:pointer}.branded-scroll--neutral{overflow:auto}.branded-scroll--neutral::-webkit-scrollbar{-webkit-appearance:none;width:8px;height:8px}.branded-scroll--neutral::-webkit-scrollbar-corner,.branded-scroll--neutral::-webkit-scrollbar-track-piece{background-color:transparent}.branded-scroll--neutral::-webkit-scrollbar-thumb{-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;height:0px;background-color:rgba(0,0,0,.5)}.branded-scroll--neutral::-webkit-scrollbar-track{background-color:transparent}.branded-scroll{overflow:auto}.branded-scroll::-webkit-scrollbar{-webkit-appearance:none;width:10px;height:10px}.branded-scroll::-webkit-scrollbar-corner,.branded-scroll::-webkit-scrollbar-track-piece{background-color:transparent}.branded-scroll::-webkit-scrollbar-thumb{-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;height:0px;background-color:#247eff}.branded-scroll::-webkit-scrollbar-track{background-color:transparent}.s-alert-box{border:1px solid rgba(0,0,0,.2);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0px 4px 12px rgba(0,0,0,.2);-moz-box-shadow:0px 4px 12px rgba(0,0,0,.2);box-shadow:0px 4px 12px rgba(0,0,0,.2);padding:8px;background:black;color:white;font-weight:500;font-size:14px;font-family:inherit}.s-alert-box em{opacity:.5;font-style:normal}.s-alert-box-inner{margin-right:20px}.s-alert-close::before,.s-alert-close::after{background:rgba(255,255,255,1);-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.s-alert-close:hover::before,.s-alert-close:hover::after{background:rgba(255,255,255,.6)}.ReactModal__Body--open{overflow:hidden}.ReactModal__Content--after-open{overflow-x:hidden!important}',
        });
    },
    133696: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return b;
        },
      });
      var n = t(824246),
        i = t(679892),
        a = t.n(i),
        r = t(827378),
        s = t(168572),
        l = t(942662),
        d = t(220453),
        c = t(411356),
        p = t(313861);
      class b extends r.Component {
        componentDidMount() {
          this.state.platform || this.setState({ platform: (0, p.k)() });
        }
        UNSAFE_componentWillReceiveProps(e) {
          e.notification._id !== this.props.notification._id &&
            (this.setState({ readAnnouncementChecked: !1 }),
            document
              .getElementById("announcementModalGradientBar")
              .scrollIntoView());
        }
        onContinue() {
          this.state.readAnnouncementChecked &&
            this.props.onContinue &&
            this.props.onContinue(this.state.readAnnouncementChecked);
        }
        onCheckboxClicked() {
          this.setState((e) => ({
            readAnnouncementChecked: !e.readAnnouncementChecked,
          }));
        }
        onSkip() {
          this.props.onSkip();
        }
        renderTopBar() {
          var e;
          return (0, n.jsxs)("div", {
            id: "announcementModalGradientBar",
            className: "jsx-582b5305762f4057 gradientBar",
            children: [
              "Important announcement from your ",
              null === (e = this.state.platform) || void 0 === e
                ? void 0
                : e.name,
              " admins!",
              (0, n.jsx)(a(), {
                id: "582b5305762f4057",
                children:
                  ".gradientBar.jsx-582b5305762f4057{color:white;padding:16px;font-size:24px;text-align:center;background:#f77062;background:-webkit-linear-gradient(left,#f77062,#fe5196);background:-o-linear-gradient(right,#f77062,#fe5196);background:-moz-linear-gradient(right,#f77062,#fe5196);background:-webkit-linear-gradient(left,#f77062,#fe5196);background:-moz-linear-gradient(left,#f77062,#fe5196);background:-o-linear-gradient(left,#f77062,#fe5196);background:linear-gradient(to right,#f77062,#fe5196);font-weight:600}@media(max-width:1250px),(max-height:900px){.gradientBar.jsx-582b5305762f4057{font-size:15px}}",
              }),
            ],
          });
        }
        renderBubble() {
          var e, o, t, i, r, l, c;
          return (0, n.jsxs)("div", {
            className:
              a().dynamic([
                [
                  "b3bc02000811794b",
                  [
                    (null === (e = this.state.platform) || void 0 === e
                      ? void 0
                      : e.color) || "#04d2c6",
                    s.ZP.typography.fontFamily,
                  ],
                ],
              ]) + " bubble-container",
            children: [
              (0, n.jsx)("div", {
                className:
                  a().dynamic([
                    [
                      "b3bc02000811794b",
                      [
                        (null === (o = this.state.platform) || void 0 === o
                          ? void 0
                          : o.color) || "#04d2c6",
                        s.ZP.typography.fontFamily,
                      ],
                    ],
                  ]) + " bubble branded-scroll--neutral",
                children: (0, n.jsxs)("div", {
                  className: a().dynamic([
                    [
                      "b3bc02000811794b",
                      [
                        (null === (t = this.state.platform) || void 0 === t
                          ? void 0
                          : t.color) || "#04d2c6",
                        s.ZP.typography.fontFamily,
                      ],
                    ],
                  ]),
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        a().dynamic([
                          [
                            "b3bc02000811794b",
                            [
                              (null === (i = this.state.platform) ||
                              void 0 === i
                                ? void 0
                                : i.color) || "#04d2c6",
                              s.ZP.typography.fontFamily,
                            ],
                          ],
                        ]) + " bubble__header",
                      children: this.props.notification.name,
                    }),
                    (0, n.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: d.ZP.render(this.props.notification.body || ""),
                      },
                      className:
                        a().dynamic([
                          [
                            "b3bc02000811794b",
                            [
                              (null === (r = this.state.platform) ||
                              void 0 === r
                                ? void 0
                                : r.color) || "#04d2c6",
                              s.ZP.typography.fontFamily,
                            ],
                          ],
                        ]) + " bubble__content",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(a(), {
                id: "b3bc02000811794b",
                dynamic: [
                  (null === (l = this.state.platform) || void 0 === l
                    ? void 0
                    : l.color) || "#04d2c6",
                  s.ZP.typography.fontFamily,
                ],
                children: `.bubble-container.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;min-height:80px}.bubble.__jsx-style-dynamic-selector{width:80vw;padding:20px;margin:60px auto 32px;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:white;-webkit-box-shadow:0px 6px 12px rgba(0,0,0,.05);-moz-box-shadow:0px 6px 12px rgba(0,0,0,.05);box-shadow:0px 6px 12px rgba(0,0,0,.05);color:black;overflow:auto}.bubble__header.__jsx-style-dynamic-selector{padding:20px;font-size:24px;color:white;background:${
                  (null === (c = this.state.platform) || void 0 === c
                    ? void 0
                    : c.color) || "#04d2c6"
                };text-align:center;font-family:${
                  s.ZP.typography.fontFamily
                };font-weight:600}.bubble__content.__jsx-style-dynamic-selector{word-break:break-word;font-size:15px}@media(max-width:1250px),(max-height:900px){.bubble__header.__jsx-style-dynamic-selector{padding:10px;font-size:13px}.bubble.__jsx-style-dynamic-selector{padding:10px;margin:20px auto 20px}.bubble__content.__jsx-style-dynamic-selector{font-size:10px}}`,
              }),
            ],
          });
        }
        renderFooter() {
          var e, o;
          return (0, n.jsxs)("div", {
            className: "jsx-26efc858009a2222 footer",
            children: [
              (0, n.jsxs)("div", {
                className: "jsx-26efc858009a2222 footer-inner",
                children: [
                  (0, n.jsxs)("div", {
                    className: "jsx-26efc858009a2222 logo",
                    children: [
                      (0, n.jsx)("div", {
                        className: "jsx-26efc858009a2222 logo-container",
                        children:
                          null === (e = this.state.platform) || void 0 === e
                            ? void 0
                            : e.logo,
                      }),
                      (0, n.jsxs)("div", {
                        className: "jsx-26efc858009a2222 logo-caption",
                        children: [
                          null === (o = this.state.platform) || void 0 === o
                            ? void 0
                            : o.name,
                          " Support Team",
                        ],
                      }),
                    ],
                  }),
                  this.renderFooterContinue(),
                ],
              }),
              (0, n.jsx)(a(), {
                id: "26efc858009a2222",
                children:
                  ".footer.jsx-26efc858009a2222{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.footer-inner.jsx-26efc858009a2222{margin:0 auto 40px;width:80vw;max-width:960px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.logo.jsx-26efc858009a2222{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.logo-container.jsx-26efc858009a2222{max-width:160px;margin-top:20px}.logo-caption.jsx-26efc858009a2222{font-weight:bold;margin-top:20px}@media(max-width:1250px),(max-height:900px){.logo-caption.jsx-26efc858009a2222{margin-top:10px;font-size:10px}}",
              }),
            ],
          });
        }
        renderFooterContinue() {
          return (0, n.jsxs)("div", {
            className: "jsx-9db2db444745ce81 continueContainer",
            children: [
              (0, n.jsxs)("div", {
                onClick: this.onCheckboxClicked,
                className: "jsx-9db2db444745ce81 haveReadHolder",
                children: [
                  (0, n.jsx)(c.o2, {
                    checked: this.state.readAnnouncementChecked,
                  }),
                  (0, n.jsx)("span", {
                    className: "jsx-9db2db444745ce81",
                    children:
                      this.props.notification.acknowledgementText ||
                      "I have read the above",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                style: { width: "60px" },
                className: "jsx-9db2db444745ce81",
              }),
              (0, n.jsx)(l.Z, {
                type: "primary",
                disabled: !this.state.readAnnouncementChecked,
                onClick: this.onContinue,
                children: "Continue",
              }),
              this.props.isCorpUser &&
                (0, n.jsx)("div", {
                  className: "jsx-9db2db444745ce81 skipButton",
                  children: (0, n.jsx)(l.Z, {
                    onClick: this.onSkip,
                    children: "SKIP (INTERNAL ONLY)",
                  }),
                }),
              (0, n.jsx)(a(), {
                id: "9db2db444745ce81",
                children:
                  ".continueContainer.jsx-9db2db444745ce81{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;justify-content:center}.continueContainer.jsx-9db2db444745ce81 span.jsx-9db2db444745ce81{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:bold;font-size:20px}.haveReadHolder.jsx-9db2db444745ce81{cursor:pointer;margin-left:15px}.haveReadHolder.jsx-9db2db444745ce81 span.jsx-9db2db444745ce81{margin-left:6px}.haveReadHolder.jsx-9db2db444745ce81 input.jsx-9db2db444745ce81{cursor:pointer}.skipButton.jsx-9db2db444745ce81{margin-left:12px}@media(max-width:1250px),(max-height:900px){.continueContainer.jsx-9db2db444745ce81{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.haveReadHolder.jsx-9db2db444745ce81 span.jsx-9db2db444745ce81{margin-left:6px;font-size:8px}}",
              }),
            ],
          });
        }
        render() {
          return (0, n.jsxs)("div", {
            className: "jsx-3117e1aa0d01cb22 announcement-container",
            children: [
              (0, n.jsx)("img", {
                src: "/static/images/Konfeti.png",
                className: "jsx-3117e1aa0d01cb22 confetti",
              }),
              this.renderTopBar(),
              this.renderBubble(),
              this.renderFooter(),
              (0, n.jsx)(a(), {
                id: "6eee1a63d9396403",
                children: "html,body{overflow:hidden}",
              }),
              (0, n.jsx)(a(), {
                id: "55b2180a67c84a93",
                children:
                  ".announcement-container.jsx-3117e1aa0d01cb22{position:fixed;top:0;bottom:0;left:0;right:0;height:100vh;width:100vw;z-index:1000;background:rgba(245,244,247,.95);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.confetti.jsx-3117e1aa0d01cb22{position:absolute;right:0px}@media(max-width:1250px),(max-height:900px){.confetti.jsx-3117e1aa0d01cb22{display:none}}",
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.onContinue = this.onContinue.bind(this)),
            (this.onCheckboxClicked = this.onCheckboxClicked.bind(this)),
            (this.onSkip = this.onSkip.bind(this)),
            (this.state = {
              readAnnouncementChecked: !1,
              platform: e.platform,
            });
        }
      }
    },
    277262: function (e, o, t) {
      t.d(o, {
        Z: function () {
          return x;
        },
      });
      var n = t(824246),
        i = t(679892),
        a = t.n(i),
        r = t(827378),
        s = t(168572),
        l = t(942662),
        d = t(220453),
        c = t(411356),
        p = t(792739),
        b = t(604375);
      class x extends r.Component {
        UNSAFE_componentWillReceiveProps(e) {
          e.notification._id !== this.props.notification._id &&
            this.setState({ readAnnouncementChecked: !1 });
        }
        onContinue() {
          this.state.readAnnouncementChecked &&
            this.props.onContinue &&
            this.props.onContinue(this.state.readAnnouncementChecked);
        }
        onCheckboxClicked() {
          this.setState((e) => ({
            readAnnouncementChecked: !e.readAnnouncementChecked,
          }));
        }
        onSkip() {
          this.props.onSkip();
        }
        renderBubble() {
          return (0, n.jsxs)("div", {
            className:
              a().dynamic([
                ["fc99edf4b6a13b01", [s.ZP.typography.fontFamily]],
              ]) + " bubble-container",
            children: [
              (0, n.jsx)("div", {
                className:
                  a().dynamic([
                    ["fc99edf4b6a13b01", [s.ZP.typography.fontFamily]],
                  ]) + " bubble branded-scroll--neutral",
                children: (0, n.jsxs)("div", {
                  className: a().dynamic([
                    ["fc99edf4b6a13b01", [s.ZP.typography.fontFamily]],
                  ]),
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        a().dynamic([
                          ["fc99edf4b6a13b01", [s.ZP.typography.fontFamily]],
                        ]) + " bubble__header bubble__flex",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            a().dynamic([
                              [
                                "fc99edf4b6a13b01",
                                [s.ZP.typography.fontFamily],
                              ],
                            ]) + " bubble__flex",
                          children: [
                            (0, n.jsx)(p.G, {
                              icon: "exclamation-triangle",
                              color: "#FFC107",
                            }),
                            (0, n.jsx)("h4", {
                              className:
                                a().dynamic([
                                  [
                                    "fc99edf4b6a13b01",
                                    [s.ZP.typography.fontFamily],
                                  ],
                                ]) + " bubble__header_title",
                              children: this.props.notification.name,
                            }),
                          ],
                        }),
                        (0, n.jsx)(b.hU, {
                          size: "medium",
                          onClick: this.onSkip,
                          children: (0, n.jsx)(p.G, {
                            icon: "times",
                            color: "black",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: d.ZP.render(this.props.notification.body || ""),
                      },
                      className:
                        a().dynamic([
                          ["fc99edf4b6a13b01", [s.ZP.typography.fontFamily]],
                        ]) + " bubble__content",
                    }),
                    (0, n.jsxs)("div", {
                      style: { justifyContent: "flex-end" },
                      className:
                        a().dynamic([
                          ["fc99edf4b6a13b01", [s.ZP.typography.fontFamily]],
                        ]) + " bubble__flex",
                      children: [
                        (0, n.jsxs)("div", {
                          onClick: this.onCheckboxClicked,
                          className:
                            a().dynamic([
                              [
                                "fc99edf4b6a13b01",
                                [s.ZP.typography.fontFamily],
                              ],
                            ]) + " haveReadHolder bubble__flex",
                          children: [
                            (0, n.jsx)(c.o2, {
                              checked: this.state.readAnnouncementChecked,
                            }),
                            (0, n.jsx)("span", {
                              className: a().dynamic([
                                [
                                  "fc99edf4b6a13b01",
                                  [s.ZP.typography.fontFamily],
                                ],
                              ]),
                              children:
                                this.props.notification.acknowledgementText ||
                                "I agree to the new Terms of Use and Community Guidelines",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          style: { width: "60px" },
                          className: a().dynamic([
                            ["fc99edf4b6a13b01", [s.ZP.typography.fontFamily]],
                          ]),
                        }),
                        (0, n.jsx)(l.Z, {
                          type: "primary",
                          disabled: !this.state.readAnnouncementChecked,
                          onClick: this.onContinue,
                          children: "Continue",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(a(), {
                id: "fc99edf4b6a13b01",
                dynamic: [s.ZP.typography.fontFamily],
                children: `.bubble-container.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;min-height:50px}.bubble__flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bubble__header_title.__jsx-style-dynamic-selector{font-family:"Inter";font-style:normal;font-weight:500;font-size:21px;line-height:22px;margin-left:25px}.bubble.__jsx-style-dynamic-selector{width:80vw;max-width:960px;padding:10px 32px 10px 32px;margin:20%auto 32px;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);background:white;-webkit-box-shadow:0px 6px 12px rgba(0,0,0,.05);-moz-box-shadow:0px 6px 12px rgba(0,0,0,.05);box-shadow:0px 6px 12px rgba(0,0,0,.05);color:black;font-size:20px;overflow:auto;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.bubble__header.__jsx-style-dynamic-selector{font-size:24px;text-align:center;font-family:${s.ZP.typography.fontFamily};font-weight:600;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.bubble__content.__jsx-style-dynamic-selector{word-break:break-word;background:#f3f4f6;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;margin:10px;padding:5px 10px;font-size:16px}.haveReadHolder.__jsx-style-dynamic-selector{cursor:pointer;margin-left:15px}.haveReadHolder.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin-left:6px;font-size:14px}.haveReadHolder.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{cursor:pointer}`,
              }),
            ],
          });
        }
        render() {
          return (0, n.jsxs)("div", {
            className: "jsx-30582edad86b15f3 announcement-container",
            children: [
              this.renderBubble(),
              (0, n.jsx)(a(), {
                id: "6eee1a63d9396403",
                children: "html,body{overflow:hidden}",
              }),
              (0, n.jsx)(a(), {
                id: "58660702cd82b316",
                children:
                  ".announcement-container.jsx-30582edad86b15f3{position:fixed;top:0;bottom:0;left:0;right:0;height:100vh;width:100vw;z-index:1000;background:rgba(245,244,247,.95);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.confetti.jsx-30582edad86b15f3{position:absolute;right:0px}",
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.onContinue = this.onContinue.bind(this)),
            (this.onCheckboxClicked = this.onCheckboxClicked.bind(this)),
            (this.onSkip = this.onSkip.bind(this)),
            (this.state = { readAnnouncementChecked: !1 });
        }
      }
    },
    394456: function (e, o, t) {
      var n = t(824246),
        i = t(298784),
        a = t.n(i),
        r = t(827378),
        s = t(133696),
        l = t(277262),
        d = t(599789),
        c = t(75384),
        p = t(285556);
      function b(e, o, t, n, i, a, r) {
        try {
          var s = e[a](r),
            l = s.value;
        } catch (d) {
          return void t(d);
        }
        s.done ? o(l) : Promise.resolve(l).then(n, i);
      }
      function x(e) {
        return function () {
          var o = this,
            t = arguments;
          return new Promise(function (n, i) {
            var a = e.apply(o, t);
            function r(e) {
              b(a, n, i, r, s, "next", e);
            }
            function s(e) {
              b(a, n, i, r, s, "throw", e);
            }
            r(void 0);
          });
        };
      }
      class f extends r.Component {
        componentDidMount() {
          this.checkForAnnouncements(),
            (this.announcementCheckInterval = window.setInterval(
              this.checkForAnnouncements,
              36e5
            ));
        }
        componentWillUnmount() {
          this.announcementCheckInterval &&
            clearInterval(this.announcementCheckInterval);
        }
        sendAnnouncementSeen(e, o = !1) {
          return x(function* () {
            try {
              yield (0,
              p.ZP)(null, "internal/announcements/seen", { method: "POST", body: { announcement: e, acknowledged: o } });
            } catch (t) {
              (0, p.vj)(t, { handleHttp: !0 });
            }
          })();
        }
        checkForAnnouncements() {
          var e = this;
          return x(function* () {
            var o;
            const { load_announcements: t = !1 } =
                (null === (o = e.props.url) || void 0 === o
                  ? void 0
                  : o.query) || {},
              { spoofed: n } = e.props.user;
            if ((!n || t) && !e.state.announcement)
              try {
                const { announcements: o } = yield (0, p.ZP)(
                    null,
                    "internal/announcements/unread",
                    {
                      query: a().pick(e.props, [
                        "currentAssignment",
                        "includeQueueAnnouncements",
                      ]),
                    }
                  ),
                  [t] = o;
                e.setState({
                  announcements: o,
                  announcement: t,
                  announcementIdx: 0,
                });
              } catch (i) {
                (0, p.vj)(i, { handleHttp: !0 });
              }
          })();
        }
        onAnnouncementContinued(e) {
          const {
            announcement: o,
            announcements: t,
            announcementIdx: n,
          } = this.state;
          e && this.sendAnnouncementSeen(o._id, e);
          const i = n + 1,
            a = t[i];
          this.setState({ announcement: a, announcementIdx: i });
        }
        onAllAnnouncementsSkipped() {
          this.state.announcements.forEach((e) => {
            e.displayType !== d.AnnouncementDisplayType.LegalAcknowledgement &&
              this.sendAnnouncementSeen(e._id, !0);
          }),
            this.setState({ announcements: [], announcement: null });
        }
        render() {
          return (
            !!this.state.announcement &&
            (this.state.announcement.displayType !==
            d.AnnouncementDisplayType.LegalAcknowledgement
              ? (0, n.jsx)(s.Z, {
                  notification: this.state.announcement,
                  onContinue: this.onAnnouncementContinued,
                  onSkip: this.onAllAnnouncementsSkipped,
                  isCorpUser: this.props.user.isCorporateUser,
                })
              : (0, n.jsx)(l.Z, {
                  notification: this.state.announcement,
                  onContinue: this.onAnnouncementContinued,
                  onSkip: this.onAllAnnouncementsSkipped,
                  isCorpUser: this.props.user.isCorporateUser,
                }))
          );
        }
        constructor(e) {
          super(e),
            (this.onAnnouncementContinued =
              this.onAnnouncementContinued.bind(this)),
            (this.onAllAnnouncementsSkipped =
              this.onAllAnnouncementsSkipped.bind(this)),
            (this.checkForAnnouncements =
              this.checkForAnnouncements.bind(this)),
            (this.state = {});
        }
      }
      o.Z = (0, c.ns)(f);
    },
    313861: function (e, o, t) {
      t.d(o, {
        k: function () {
          return p;
        },
      });
      var n,
        i = t(824246),
        a = (t(827378), t(746188)),
        r = t(599789),
        s = t(502218),
        l = t(4369),
        d = t(337567);
      !(function (e) {
        (e.outlier = "outlier"),
          (e.remotasks = "remotasks"),
          (e.default = "default");
      })(n || (n = {}));
      const c = {
        [n.outlier]: {
          name: "Outlier",
          logo: (0, i.jsx)(s.Z, {}),
          color: l.w.RemoBlue,
        },
        [n.remotasks]: {
          name: "Remotasks",
          logo: (0, i.jsx)(a.Z, {}),
          color: l.w.RemoGreen,
        },
        [n.default]: { name: "", logo: null, color: "#000" },
      };
      function p(e) {
        if (e) {
          if (e.accountType === r.AccountType.Worker) return c[n.remotasks];
          if (e.accountType === r.AccountType.Expert) return c[n.outlier];
        }
        return window.location.hostname.includes("remotasks.com")
          ? c[n.remotasks]
          : (0, d.xL)(window.location.hostname)
          ? c[n.outlier]
          : window.location.hostname.includes("localhost")
          ? window.location.pathname.includes("/expert")
            ? c[n.outlier]
            : c[n.remotasks]
          : c[n.default];
      }
    },
  },
]);
