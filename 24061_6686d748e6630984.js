(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [24061],
  {
    455491: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return l;
        },
      });
      var n = r(824246),
        o = r(791209),
        i = r(827378),
        a = r(720227),
        c = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          }
          return r;
        };
      const s = { className: "", variant: o.Sz, size: o.Cg },
        u = {
          primary: "focus:ring-primary-500",
          secondary: "focus:ring-primary-50",
          outline: "focus:ring-primary-400",
          neutral: "focus:ring-neutral-200",
          success: "focus:ring-success-100",
          info: "focus:ring-info-100",
          danger: "focus:ring-danger-100",
          warning: "focus:ring-warning-100",
          transparent: "focus:ring-neutral-100",
          black: "focus:ring-neutral-700",
          white: "focus:ring-neutral-0",
        },
        l = (0, i.forwardRef)((e, t) => {
          var {
              variant: r = s.variant,
              size: l = s.size,
              className: f,
              indeterminate: p,
              checked: d,
              disabled: y,
            } = e,
            v = c(e, [
              "variant",
              "size",
              "className",
              "indeterminate",
              "checked",
              "disabled",
            ]);
          const b = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              "boolean" === typeof p &&
                (null === b || void 0 === b ? void 0 : b.current) &&
                (b.current.indeterminate = p);
            }, [t, p]),
            (0, n.jsx)(
              "input",
              Object.assign({}, v, {
                ref: t || b,
                className: (0, a.m)(
                  "w-4 h-4 border-solid rounded border-neutral-300",
                  y ? "text-neutral-400 cursor-not-allowed" : o.m4[r],
                  u[r],
                  f
                ),
                type: "checkbox",
                checked: d,
                disabled: y,
              })
            )
          );
        });
    },
    185272: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return c;
        },
      });
      var n = r(824246),
        o = r(827378),
        i = r(720227),
        a = r(455491);
      const c = ({
        label: e,
        id: t,
        checked: r,
        indeterminate: c = !1,
        onChange: s,
        hideLabel: u = !1,
        name: l,
        className: f,
        variant: p,
        color: d,
        disabled: y,
        autoComplete: v,
        labelClassName: b,
      }) => {
        const h = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            h.current && (h.current.indeterminate = c);
          }, [c]),
          (0, n.jsxs)("div", {
            className: (0, i.m)("scaleui relative flex items-center", f),
            children: [
              (0, n.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0, n.jsx)(a.C, {
                  ref: h,
                  id: t,
                  name: l || t,
                  checked: r,
                  onChange: s,
                  disabled: y,
                  variant: p,
                  autoComplete: v,
                }),
              }),
              d &&
                (0, n.jsx)("span", {
                  className: "pl-3",
                  children: (0, n.jsx)("div", {
                    className: "w-4 h-4 rounded-md",
                    style: { background: d },
                  }),
                }),
              e &&
                (0, n.jsx)("label", {
                  htmlFor: t,
                  className: (0, i.m)(
                    "ml-3 text-sm text-neutral-700",
                    u && "sr-only",
                    y && "text-neutral-500 cursor-not-allowed",
                    b
                  ),
                  children: e,
                }),
            ],
          })
        );
      };
    },
    29538: function (e, t, r) {
      "use strict";
      t.tH = t.Ig = t.mI = t.s0 = t.O6 = void 0;
      var n,
        o,
        i,
        a,
        c = r(599789);
      (t.O6 = n),
        (function (e) {
          (e.IN_PROGRESS = "in_progress"),
            (e.SUBMITTED = "submitted"),
            (e.APPROVED = "approved"),
            (e.DENIED = "denied");
        })(n || (t.O6 = n = {})),
        (t.s0 = o),
        (function (e) {
          (e.PRIVACY_POLICY = "privacy_policy"),
            (e.ALTERNATIVE_IDV = "alternative_idv"),
            (e.VERIFY_PHONE_NUMBER = "verify_phone_number"),
            (e.PROOF_OF_PHYSICAL_ADDRESS = "proof_of_physical_address"),
            (e.PROOF_OF_EMPLOYMENT = "proof_of_employment"),
            (e.CONNECT_LINKEDIN = "connect_linkedin"),
            (e.ADDITIONAL_DETAILS = "additional_details"),
            (e.REVIEW_AND_SUBMIT = "review_and_submit");
        })(o || (t.s0 = o = {})),
        (function (e) {
          (e.UTILITY_BILL = "utility_bill"),
            (e.BANK_STATEMENT = "bank_statement"),
            (e.LEASE_AGREEMENT = "lease_agreement"),
            (e.RENT_RECEIPT = "rent_receipt"),
            (e.MORTGAGE_STATEMENT = "mortgage_statement"),
            (e.TAX_DOCUMENT = "tax_document");
        })(i || (i = {})),
        (function (e) {
          (e.EMPLOYMENT_VERIFICATION_LETTER = "employment_verification_letter"),
            (e.PAY_STUB = "pay_stub"),
            (e.BANK_STATEMENT = "bank_statement"),
            (e.TAX_DOCUMENT = "tax_document");
        })(a || (a = {}));
      o.PRIVACY_POLICY,
        o.ALTERNATIVE_IDV,
        o.VERIFY_PHONE_NUMBER,
        o.PROOF_OF_PHYSICAL_ADDRESS,
        o.CONNECT_LINKEDIN,
        o.ADDITIONAL_DETAILS,
        o.REVIEW_AND_SUBMIT;
      t.mI = (e) => {
        switch (e) {
          case o.PRIVACY_POLICY:
            return "Review privacy policy";
          case o.ALTERNATIVE_IDV:
            return "Alternative identity verification";
          case o.VERIFY_PHONE_NUMBER:
            return "Verify phone number";
          case o.PROOF_OF_PHYSICAL_ADDRESS:
            return "Proof of address";
          case o.PROOF_OF_EMPLOYMENT:
            return "Proof of employment";
          case o.CONNECT_LINKEDIN:
            return "Connect LinkedIn";
          case o.ADDITIONAL_DETAILS:
            return "Additional details";
          case o.REVIEW_AND_SUBMIT:
            return "Review & submit";
          default:
            return "";
        }
      };
      t.Ig = "66fc08c7c6ccded55535b50e";
      const s = [
        c.VerificationInquiryStatus.Completed,
        c.VerificationInquiryStatus.Approved,
      ];
      t.tH = s;
    },
    939186: function (e, t) {
      "use strict";
      var r;
      (t.o = void 0),
        (t.o = r),
        (function (e) {
          (e.OUTLIER_ONBOARDING_BACKEND_CALL = "outlier_onboarding_backend"),
            (e.OUTLIER_ONBOARDING_CLIENT_CALL = "outlier_onboarding_client"),
            (e.REMOTASKS_ONBOARDING = "remo_onboarding"),
            (e.SELF_REMEDIATION = "self_remediation"),
            (e.PERSONAL_IDENTITY_INFO = "personal_identity_info"),
            (e.REVERIFICATION = "reverification"),
            (e.OUTLIER_COMPONENTS_REVERIFICATION =
              "outlier_components_reverification"),
            (e.OUTLIER_COMPONENTS_REVERIFICATION_BACKEND =
              "outlier_components_reverification_backend"),
            (e.ACCOUNT_VERIFICATION = "account_verification"),
            (e.IDENTITY_VERIFICATION = "identity_verification");
        })(r || (t.o = r = {}));
    },
    572111: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        o = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        i = r(827378),
        a = (n = i) && n.__esModule ? n : { default: n },
        c = r(723615);
      var s = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var r = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" !== typeof t && "function" !== typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (r.scriptLoaderId = "id" + r.constructor.idCount++), r;
        }
        return (
          (function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props,
                  t = e.onError,
                  r = e.onLoad,
                  n = e.url;
                this.constructor.loadedScripts[n]
                  ? r()
                  : this.constructor.erroredScripts[n]
                  ? t()
                  : this.constructor.scriptObservers[n]
                  ? (this.constructor.scriptObservers[n][this.scriptLoaderId] =
                      this.props)
                  : ((this.constructor.scriptObservers[n] = (function (
                      e,
                      t,
                      r
                    ) {
                      return (
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (e[t] = r),
                        e
                      );
                    })({}, this.scriptLoaderId, this.props)),
                    this.createScript());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                var e = this.props.url,
                  t = this.constructor.scriptObservers[e];
                t && delete t[this.scriptLoaderId];
              },
            },
            {
              key: "createScript",
              value: function () {
                var e = this,
                  t = this.props,
                  r = t.onCreate,
                  n = t.url,
                  o = t.attributes,
                  i = document.createElement("script");
                r(),
                  o &&
                    Object.keys(o).forEach(function (e) {
                      return i.setAttribute(e, o[e]);
                    }),
                  (i.src = n),
                  i.hasAttribute("async") || (i.async = 1);
                var a = function (t) {
                  var r = e.constructor.scriptObservers[n];
                  Object.keys(r).forEach(function (o) {
                    t(r[o]) &&
                      delete e.constructor.scriptObservers[n][e.scriptLoaderId];
                  });
                };
                (i.onload = function () {
                  (e.constructor.loadedScripts[n] = !0),
                    a(function (e) {
                      return e.onLoad(), !0;
                    });
                }),
                  (i.onerror = function () {
                    (e.constructor.erroredScripts[n] = !0),
                      a(function (e) {
                        return e.onError(), !0;
                      });
                  }),
                  document.body.appendChild(i);
              },
            },
            {
              key: "render",
              value: function () {
                return null;
              },
            },
          ]),
          t
        );
      })(a.default.Component);
      (s.propTypes = {
        attributes: c.PropTypes.object,
        onCreate: c.PropTypes.func,
        onError: c.PropTypes.func.isRequired,
        onLoad: c.PropTypes.func.isRequired,
        url: c.PropTypes.string.isRequired,
      }),
        (s.defaultProps = {
          attributes: {},
          onCreate: function () {},
          onError: function () {},
          onLoad: function () {},
        }),
        (s.scriptObservers = {}),
        (s.loadedScripts = {}),
        (s.erroredScripts = {}),
        (s.idCount = 0),
        (t.default = s),
        (e.exports = t.default);
    },
    943170: function (e, t, r) {
      (() => {
        var e = {
            184: (e, t) => {
              var r;
              !(function () {
                "use strict";
                var n = {}.hasOwnProperty;
                function o() {
                  for (var e = [], t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    if (r) {
                      var i = typeof r;
                      if ("string" === i || "number" === i) e.push(r);
                      else if (Array.isArray(r)) {
                        if (r.length) {
                          var a = o.apply(null, r);
                          a && e.push(a);
                        }
                      } else if ("object" === i) {
                        if (
                          r.toString !== Object.prototype.toString &&
                          !r.toString.toString().includes("[native code]")
                        ) {
                          e.push(r.toString());
                          continue;
                        }
                        for (var c in r) n.call(r, c) && r[c] && e.push(c);
                      }
                    }
                  }
                  return e.join(" ");
                }
                e.exports
                  ? ((o.default = o), (e.exports = o))
                  : void 0 ===
                      (r = function () {
                        return o;
                      }.apply(t, [])) || (e.exports = r);
              })();
            },
            28: (e, t, r) => {
              "use strict";
              r.d(t, { Z: () => c });
              var n = r(81),
                o = r.n(n),
                i = r(645),
                a = r.n(i)()(o());
              a.push([
                e.id,
                "/* :where() gives the styles specificity 0, which makes them overridable */\n:where(.vi__wrapper) {\n  position: relative;\n  width: min-content;\n}\n\n.vi {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-sizing: border-box;\n  position: absolute;\n  color: transparent;\n  background: transparent;\n  caret-color: transparent;\n  outline: none;\n  border: 0 none transparent;\n}\n\n.vi::selection {\n  background: transparent;\n}\n\n:where(.vi__container) {\n  display: flex;\n  gap: 8px;\n  height: 50px;\n  width: 300px;\n}\n\n:where(.vi__character) {\n  height: 100%;\n  flex-grow: 1;\n  flex-basis: 0;\n  text-align: center;\n  font-size: 36px;\n  line-height: 50px;\n  color: black;\n  background-color: white;\n  border: 1px solid black;\n  cursor: default;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n:where(.vi__character--inactive) {\n  color: dimgray;\n  background-color: lightgray;\n}\n\n:where(.vi__character--selected) {\n  outline: 2px solid cornflowerblue;\n  color: cornflowerblue;\n}\n",
                "",
              ]);
              const c = a;
            },
            645: (e) => {
              "use strict";
              e.exports = function (e) {
                var t = [];
                return (
                  (t.toString = function () {
                    return this.map(function (t) {
                      var r = "",
                        n = void 0 !== t[5];
                      return (
                        t[4] && (r += "@supports (".concat(t[4], ") {")),
                        t[2] && (r += "@media ".concat(t[2], " {")),
                        n &&
                          (r += "@layer".concat(
                            t[5].length > 0 ? " ".concat(t[5]) : "",
                            " {"
                          )),
                        (r += e(t)),
                        n && (r += "}"),
                        t[2] && (r += "}"),
                        t[4] && (r += "}"),
                        r
                      );
                    }).join("");
                  }),
                  (t.i = function (e, r, n, o, i) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (n)
                      for (var c = 0; c < this.length; c++) {
                        var s = this[c][0];
                        null != s && (a[s] = !0);
                      }
                    for (var u = 0; u < e.length; u++) {
                      var l = [].concat(e[u]);
                      (n && a[l[0]]) ||
                        (void 0 !== i &&
                          (void 0 === l[5] ||
                            (l[1] = "@layer"
                              .concat(
                                l[5].length > 0 ? " ".concat(l[5]) : "",
                                " {"
                              )
                              .concat(l[1], "}")),
                          (l[5] = i)),
                        r &&
                          (l[2]
                            ? ((l[1] = "@media "
                                .concat(l[2], " {")
                                .concat(l[1], "}")),
                              (l[2] = r))
                            : (l[2] = r)),
                        o &&
                          (l[4]
                            ? ((l[1] = "@supports ("
                                .concat(l[4], ") {")
                                .concat(l[1], "}")),
                              (l[4] = o))
                            : (l[4] = "".concat(o))),
                        t.push(l));
                    }
                  }),
                  t
                );
              };
            },
            81: (e) => {
              "use strict";
              e.exports = function (e) {
                return e[1];
              };
            },
            703: (e, t, r) => {
              "use strict";
              var n = r(414);
              function o() {}
              function i() {}
              (i.resetWarningCache = o),
                (e.exports = function () {
                  function e(e, t, r, o, i, a) {
                    if (a !== n) {
                      var c = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw ((c.name = "Invariant Violation"), c);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o,
                  };
                  return (r.PropTypes = r), r;
                });
            },
            697: (e, t, r) => {
              e.exports = r(703)();
            },
            414: (e) => {
              "use strict";
              e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            },
          },
          n = {};
        function o(t) {
          var r = n[t];
          if (void 0 !== r) return r.exports;
          var i = (n[t] = { id: t, exports: {} });
          return e[t](i, i.exports, o), i.exports;
        }
        (o.n = (e) => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return o.d(t, { a: t }), t;
        }),
          (o.d = (e, t) => {
            for (var r in t)
              o.o(t, r) &&
                !o.o(e, r) &&
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          }),
          (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (o.r = (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var i = {};
        (() => {
          "use strict";
          o.r(i), o.d(i, { default: () => g });
          const e = r(827378);
          var t = o.n(e),
            n = o(184),
            a = o.n(n),
            c = o(697),
            s = o.n(c),
            u = o(28);
          function l(e) {
            return (
              (l =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    }),
              l(e)
            );
          }
          var f = ["className", "type"],
            p = ["className"];
          function d(e, t, r) {
            return (
              (t = (function (e) {
                var t = (function (e, t) {
                  if ("object" !== l(e) || null === e) return e;
                  var r = e[Symbol.toPrimitive];
                  if (void 0 !== r) {
                    var n = r.call(e, "string");
                    if ("object" !== l(n)) return n;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return String(e);
                })(e);
                return "symbol" === l(t) ? t : String(t);
              })(t)) in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function y() {
            return (
              (y = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  }),
              y.apply(this, arguments)
            );
          }
          function v(e, t) {
            if (null == e) return {};
            var r,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]));
            }
            return o;
          }
          function b(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    o,
                    i,
                    a,
                    c = [],
                    s = !0,
                    u = !1;
                  try {
                    if (((i = (r = r.call(e)).next), 0 === t)) {
                      if (Object(r) !== r) return;
                      s = !1;
                    } else
                      for (
                        ;
                        !(s = (n = i.call(r)).done) &&
                        (c.push(n.value), c.length !== t);
                        s = !0
                      );
                  } catch (e) {
                    (u = !0), (o = e);
                  } finally {
                    try {
                      if (
                        !s &&
                        null != r.return &&
                        ((a = r.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (u) throw o;
                    }
                  }
                  return c;
                }
              })(e, t) ||
              h(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          }
          function h(e, t) {
            if (e) {
              if ("string" == typeof e) return _(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? _(e, t)
                  : void 0
              );
            }
          }
          function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          var m = (0, e.forwardRef)(function (r, n) {
            var o = r.value,
              i = r.length,
              c = r.validChars,
              s = r.placeholder,
              l = r.autoFocus,
              m = r.passwordMode,
              g = r.inputProps,
              O = r.containerProps,
              E = r.classNames,
              I = r.onChange,
              N = r.onFocus,
              T = r.onBlur,
              S = r.onComplete,
              A = b((0, e.useState)(""), 2),
              P = A[0],
              C = A[1],
              R = b((0, e.useState)(!1), 2),
              w = R[0],
              j = R[1],
              x = (0, e.useRef)(null);
            (0, e.useEffect)(
              function () {
                l && x.current.focus();
              },
              [l]
            );
            var L,
              D = function () {
                x.current.focus();
              },
              k = function () {
                return null != o ? o : P;
              },
              M = g.className,
              F = g.type,
              V = v(g, f),
              U = O.className,
              B = v(O, p);
            return t().createElement(
              "div",
              { className: "vi__wrapper" },
              t().createElement(
                "input",
                y(
                  {
                    "aria-label": "verification input",
                    spellCheck: !1,
                    value: k(),
                    onChange: function (e) {
                      var t = e.target.value.replace(/\s/g, "");
                      RegExp("^[".concat(c, "]{0,").concat(i, "}$")).test(t) &&
                        (I && (null == I || I(t)),
                        C(t),
                        t.length === i && (null == S || S(t)));
                    },
                    ref: function (e) {
                      (x.current = e),
                        "function" == typeof n ? n(e) : n && (n.current = e);
                    },
                    className: a()("vi", M),
                    onKeyDown: function (e) {
                      [
                        "ArrowLeft",
                        "ArrowRight",
                        "ArrowUp",
                        "ArrowDown",
                      ].includes(e.key) && e.preventDefault();
                    },
                    onFocus: function () {
                      j(!0), null == N || N();
                    },
                    onBlur: function () {
                      j(!1), null == T || T();
                    },
                    onSelect: function (e) {
                      var t = e.target.value;
                      e.target.setSelectionRange(t.length, t.length);
                    },
                    type: m ? "password" : F,
                  },
                  V
                )
              ),
              t().createElement(
                "div",
                y(
                  {
                    "data-testid": "container",
                    className: a()("vi__container", E.container, U),
                    onClick: function () {
                      return x.current.focus();
                    },
                  },
                  B
                ),
                ((L = Array(i)),
                (function (e) {
                  if (Array.isArray(e)) return _(e);
                })(L) ||
                  (function (e) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null != e[Symbol.iterator]) ||
                      null != e["@@iterator"]
                    )
                      return Array.from(e);
                  })(L) ||
                  h(L) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()).map(function (e, r) {
                  var n;
                  return t().createElement(
                    "div",
                    {
                      className: a()(
                        "vi__character",
                        E.character,
                        ((n = {
                          "vi__character--selected":
                            (k().length === r ||
                              (k().length === r + 1 && i === r + 1)) &&
                            w,
                        }),
                        d(
                          n,
                          E.characterSelected,
                          (k().length === r ||
                            (k().length === r + 1 && i === r + 1)) &&
                            w
                        ),
                        d(n, "vi__character--inactive", k().length < r),
                        d(n, E.characterInactive, k().length < r),
                        n)
                      ),
                      onClick: D,
                      id: "field-".concat(r),
                      "data-testid": "character-".concat(r),
                      key: r,
                    },
                    m && k()[r] ? "*" : k()[r] || s
                  );
                })
              ),
              t().createElement("style", {
                dangerouslySetInnerHTML: { __html: u.Z },
              })
            );
          });
          (m.displayName = "VerificationInput"),
            (m.propTypes = {
              value: s().string,
              length: s().number,
              validChars: s().string,
              placeholder: s().string,
              autoFocus: s().bool,
              passwordMode: s().bool,
              inputProps: s().object,
              containerProps: s().object,
              classNames: s().shape({
                container: s().string,
                character: s().string,
                characterInactive: s().string,
                characterSelected: s().string,
              }),
              onChange: s().func,
              onFocus: s().func,
              onBlur: s().func,
              onComplete: s().func,
            }),
            (m.defaultProps = {
              length: 6,
              validChars: "A-Za-z0-9",
              placeholder: "\xb7",
              autoFocus: !1,
              inputProps: {},
              containerProps: {},
              classNames: {},
            });
          const g = m;
        })();
        var a = t;
        for (var c in i) a[c] = i[c];
        i.__esModule && Object.defineProperty(a, "__esModule", { value: !0 });
      })();
    },
  },
]);
