(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [43120],
  {
    363465: function (e, t, n) {
      "use strict";
      function o(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    362475: function (e, t, n) {
      "use strict";
      function o(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    153817: function (e, t, n) {
      "use strict";
      n.d(t, {
        kK: function () {
          return r;
        },
        Re: function () {
          return i;
        },
        Zq: function () {
          return a;
        },
      });
      var o = n(362475);
      function r(e) {
        return e instanceof (0, o.Z)(e).Element || e instanceof Element;
      }
      function i(e) {
        return e instanceof (0, o.Z)(e).HTMLElement || e instanceof HTMLElement;
      }
      function a(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof (0, o.Z)(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
    },
    146087: function (e, t, n) {
      "use strict";
      var o = n(363465),
        r = n(153817);
      t.Z = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              i = t.attributes[e] || {},
              a = t.elements[e];
            (0, r.Re)(a) &&
              (0, o.Z)(a) &&
              (Object.assign(a.style, n),
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                !1 === t
                  ? a.removeAttribute(e)
                  : a.setAttribute(e, !0 === t ? "" : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0",
              },
              arrow: { position: "absolute" },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var i = t.elements[e],
                  a = t.attributes[e] || {},
                  s = Object.keys(
                    t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                  ).reduce(function (e, t) {
                    return (e[t] = ""), e;
                  }, {});
                (0, r.Re)(i) &&
                  (0, o.Z)(i) &&
                  (Object.assign(i.style, s),
                  Object.keys(a).forEach(function (e) {
                    i.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ["computeStyles"],
      };
    },
    453553: function (e, t, n) {
      "use strict";
      n.d(t, {
        fi: function () {
          return ve;
        },
      });
      var o = n(153817),
        r = Math.max,
        i = Math.min,
        a = Math.round,
        s = n(362475);
      function f() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function p() {
        return !/^((?!chrome|android).)*safari/i.test(f());
      }
      function c(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var r = e.getBoundingClientRect(),
          i = 1,
          f = 1;
        t &&
          (0, o.Re)(e) &&
          ((i = (e.offsetWidth > 0 && a(r.width) / e.offsetWidth) || 1),
          (f = (e.offsetHeight > 0 && a(r.height) / e.offsetHeight) || 1));
        var c = ((0, o.kK)(e) ? (0, s.Z)(e) : window).visualViewport,
          u = !p() && n,
          l = (r.left + (u && c ? c.offsetLeft : 0)) / i,
          d = (r.top + (u && c ? c.offsetTop : 0)) / f,
          m = r.width / i,
          h = r.height / f;
        return {
          width: m,
          height: h,
          top: d,
          right: l + m,
          bottom: d + h,
          left: l,
          x: l,
          y: d,
        };
      }
      function u(e) {
        var t = (0, s.Z)(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      var l = n(363465);
      function d(e) {
        return (
          ((0, o.kK)(e) ? e.ownerDocument : e.document) || window.document
        ).documentElement;
      }
      function m(e) {
        return c(d(e)).left + u(e).scrollLeft;
      }
      function h(e) {
        return (0, s.Z)(e).getComputedStyle(e);
      }
      function T(e) {
        var t = h(e),
          n = t.overflow,
          o = t.overflowX,
          r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + r + o);
      }
      function y(e, t, n) {
        void 0 === n && (n = !1);
        var r = (0, o.Re)(t),
          i =
            (0, o.Re)(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = a(t.width) / e.offsetWidth || 1,
                o = a(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== o;
            })(t),
          f = d(t),
          p = c(e, i, n),
          h = { scrollLeft: 0, scrollTop: 0 },
          y = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (("body" !== (0, l.Z)(t) || T(f)) &&
              (h = (function (e) {
                return e !== (0, s.Z)(e) && (0, o.Re)(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : u(e);
                var t;
              })(t)),
            (0, o.Re)(t)
              ? (((y = c(t, !0)).x += t.clientLeft), (y.y += t.clientTop))
              : f && (y.x = m(f))),
          {
            x: p.left + h.scrollLeft - y.x,
            y: p.top + h.scrollTop - y.y,
            width: p.width,
            height: p.height,
          }
        );
      }
      function g(e) {
        var t = c(e),
          n = e.offsetWidth,
          o = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - o) <= 1 && (o = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: o }
        );
      }
      function v(e) {
        return "html" === (0, l.Z)(e)
          ? e
          : e.assignedSlot ||
              e.parentNode ||
              ((0, o.Zq)(e) ? e.host : null) ||
              d(e);
      }
      function b(e) {
        return ["html", "body", "#document"].indexOf((0, l.Z)(e)) >= 0
          ? e.ownerDocument.body
          : (0, o.Re)(e) && T(e)
          ? e
          : b(v(e));
      }
      function O(e, t) {
        var n;
        void 0 === t && (t = []);
        var o = b(e),
          r = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = (0, s.Z)(o),
          a = r ? [i].concat(i.visualViewport || [], T(o) ? o : []) : o,
          f = t.concat(a);
        return r ? f : f.concat(O(v(a)));
      }
      function A(e) {
        return ["table", "td", "th"].indexOf((0, l.Z)(e)) >= 0;
      }
      function w(e) {
        return (0, o.Re)(e) && "fixed" !== h(e).position
          ? e.offsetParent
          : null;
      }
      function R(e) {
        for (
          var t = (0, s.Z)(e), n = w(e);
          n && A(n) && "static" === h(n).position;

        )
          n = w(n);
        return n &&
          ("html" === (0, l.Z)(n) ||
            ("body" === (0, l.Z)(n) && "static" === h(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(f());
                if (
                  /Trident/i.test(f()) &&
                  (0, o.Re)(e) &&
                  "fixed" === h(e).position
                )
                  return null;
                var n = v(e);
                for (
                  (0, o.Zq)(n) && (n = n.host);
                  (0, o.Re)(n) && ["html", "body"].indexOf((0, l.Z)(n)) < 0;

                ) {
                  var r = h(n);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var k = "top",
        x = "bottom",
        E = "right",
        S = "left",
        P = "auto",
        L = [k, x, E, S],
        _ = "start",
        D = "end",
        M = "viewport",
        j = "popper",
        Q = L.reduce(function (e, t) {
          return e.concat([t + "-" + _, t + "-" + D]);
        }, []),
        I = [].concat(L, [P]).reduce(function (e, t) {
          return e.concat([t, t + "-" + _, t + "-" + D]);
        }, []),
        C = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      function V(e) {
        var t = new Map(),
          n = new Set(),
          o = [];
        function r(e) {
          n.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!n.has(e)) {
                  var o = t.get(e);
                  o && r(o);
                }
              }),
            o.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || r(e);
          }),
          o
        );
      }
      function N(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (n) {
                Promise.resolve().then(function () {
                  (t = void 0), n(e());
                });
              })),
            t
          );
        };
      }
      var Z = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function K() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function W(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          r = void 0 === n ? [] : n,
          i = t.defaultOptions,
          a = void 0 === i ? Z : i;
        return function (e, t, n) {
          void 0 === n && (n = a);
          var i = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, Z, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            f = !1,
            p = {
              state: i,
              setOptions: function (n) {
                var f = "function" === typeof n ? n(i.options) : n;
                c(),
                  (i.options = Object.assign({}, a, i.options, f)),
                  (i.scrollParents = {
                    reference: (0, o.kK)(e)
                      ? O(e)
                      : e.contextElement
                      ? O(e.contextElement)
                      : [],
                    popper: O(t),
                  });
                var u = (function (e) {
                  var t = V(e);
                  return C.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(r, i.options.modifiers))
                );
                return (
                  (i.orderedModifiers = u.filter(function (e) {
                    return e.enabled;
                  })),
                  i.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      o = void 0 === n ? {} : n,
                      r = e.effect;
                    if ("function" === typeof r) {
                      var a = r({ state: i, name: t, instance: p, options: o }),
                        f = function () {};
                      s.push(a || f);
                    }
                  }),
                  p.update()
                );
              },
              forceUpdate: function () {
                if (!f) {
                  var e = i.elements,
                    t = e.reference,
                    n = e.popper;
                  if (K(t, n)) {
                    (i.rects = {
                      reference: y(t, R(n), "fixed" === i.options.strategy),
                      popper: g(n),
                    }),
                      (i.reset = !1),
                      (i.placement = i.options.placement),
                      i.orderedModifiers.forEach(function (e) {
                        return (i.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var o = 0; o < i.orderedModifiers.length; o++)
                      if (!0 !== i.reset) {
                        var r = i.orderedModifiers[o],
                          a = r.fn,
                          s = r.options,
                          c = void 0 === s ? {} : s,
                          u = r.name;
                        "function" === typeof a &&
                          (i =
                            a({ state: i, options: c, name: u, instance: p }) ||
                            i);
                      } else (i.reset = !1), (o = -1);
                  }
                }
              },
              update: N(function () {
                return new Promise(function (e) {
                  p.forceUpdate(), e(i);
                });
              }),
              destroy: function () {
                c(), (f = !0);
              },
            };
          if (!K(e, t)) return p;
          function c() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            p.setOptions(n).then(function (e) {
              !f && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            p
          );
        };
      }
      var B = { passive: !0 };
      var q = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            o = e.options,
            r = o.scroll,
            i = void 0 === r || r,
            a = o.resize,
            f = void 0 === a || a,
            p = (0, s.Z)(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            i &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, B);
              }),
            f && p.addEventListener("resize", n.update, B),
            function () {
              i &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, B);
                }),
                f && p.removeEventListener("resize", n.update, B);
            }
          );
        },
        data: {},
      };
      function U(e) {
        return e.split("-")[0];
      }
      function Y(e) {
        return e.split("-")[1];
      }
      function H(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function F(e) {
        var t,
          n = e.reference,
          o = e.element,
          r = e.placement,
          i = r ? U(r) : null,
          a = r ? Y(r) : null,
          s = n.x + n.width / 2 - o.width / 2,
          f = n.y + n.height / 2 - o.height / 2;
        switch (i) {
          case k:
            t = { x: s, y: n.y - o.height };
            break;
          case x:
            t = { x: s, y: n.y + n.height };
            break;
          case E:
            t = { x: n.x + n.width, y: f };
            break;
          case S:
            t = { x: n.x - o.width, y: f };
            break;
          default:
            t = { x: n.x, y: n.y };
        }
        var p = i ? H(i) : null;
        if (null != p) {
          var c = "y" === p ? "height" : "width";
          switch (a) {
            case _:
              t[p] = t[p] - (n[c] / 2 - o[c] / 2);
              break;
            case D:
              t[p] = t[p] + (n[c] / 2 - o[c] / 2);
          }
        }
        return t;
      }
      var X = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = F({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        },
        z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function J(e) {
        var t,
          n = e.popper,
          o = e.popperRect,
          r = e.placement,
          i = e.variation,
          f = e.offsets,
          p = e.position,
          c = e.gpuAcceleration,
          u = e.adaptive,
          l = e.roundOffsets,
          m = e.isFixed,
          T = f.x,
          y = void 0 === T ? 0 : T,
          g = f.y,
          v = void 0 === g ? 0 : g,
          b = "function" === typeof l ? l({ x: y, y: v }) : { x: y, y: v };
        (y = b.x), (v = b.y);
        var O = f.hasOwnProperty("x"),
          A = f.hasOwnProperty("y"),
          w = S,
          P = k,
          L = window;
        if (u) {
          var _ = R(n),
            M = "clientHeight",
            j = "clientWidth";
          if (
            (_ === (0, s.Z)(n) &&
              "static" !== h((_ = d(n))).position &&
              "absolute" === p &&
              ((M = "scrollHeight"), (j = "scrollWidth")),
            (_ = _),
            r === k || ((r === S || r === E) && i === D))
          )
            (P = x),
              (v -=
                (m && _ === L && L.visualViewport
                  ? L.visualViewport.height
                  : _[M]) - o.height),
              (v *= c ? 1 : -1);
          if (r === S || ((r === k || r === x) && i === D))
            (w = E),
              (y -=
                (m && _ === L && L.visualViewport
                  ? L.visualViewport.width
                  : _[j]) - o.width),
              (y *= c ? 1 : -1);
        }
        var Q,
          I = Object.assign({ position: p }, u && z),
          C =
            !0 === l
              ? (function (e, t) {
                  var n = e.x,
                    o = e.y,
                    r = t.devicePixelRatio || 1;
                  return { x: a(n * r) / r || 0, y: a(o * r) / r || 0 };
                })({ x: y, y: v }, (0, s.Z)(n))
              : { x: y, y: v };
        return (
          (y = C.x),
          (v = C.y),
          c
            ? Object.assign(
                {},
                I,
                (((Q = {})[P] = A ? "0" : ""),
                (Q[w] = O ? "0" : ""),
                (Q.transform =
                  (L.devicePixelRatio || 1) <= 1
                    ? "translate(" + y + "px, " + v + "px)"
                    : "translate3d(" + y + "px, " + v + "px, 0)"),
                Q)
              )
            : Object.assign(
                {},
                I,
                (((t = {})[P] = A ? v + "px" : ""),
                (t[w] = O ? y + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var G = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              o = n.gpuAcceleration,
              r = void 0 === o || o,
              i = n.adaptive,
              a = void 0 === i || i,
              s = n.roundOffsets,
              f = void 0 === s || s,
              p = {
                placement: U(t.placement),
                variation: Y(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: r,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                J(
                  Object.assign({}, p, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: a,
                    roundOffsets: f,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  J(
                    Object.assign({}, p, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: f,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        $ = n(146087);
      var ee = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              n = e.options,
              o = e.name,
              r = n.offset,
              i = void 0 === r ? [0, 0] : r,
              a = I.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n) {
                    var o = U(e),
                      r = [S, k].indexOf(o) >= 0 ? -1 : 1,
                      i =
                        "function" === typeof n
                          ? n(Object.assign({}, t, { placement: e }))
                          : n,
                      a = i[0],
                      s = i[1];
                    return (
                      (a = a || 0),
                      (s = (s || 0) * r),
                      [S, E].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s }
                    );
                  })(n, t.rects, i)),
                  e
                );
              }, {}),
              s = a[t.placement],
              f = s.x,
              p = s.y;
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += f),
              (t.modifiersData.popperOffsets.y += p)),
              (t.modifiersData[o] = a);
          },
        },
        te = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function ne(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return te[e];
        });
      }
      var oe = { start: "end", end: "start" };
      function re(e) {
        return e.replace(/start|end/g, function (e) {
          return oe[e];
        });
      }
      function ie(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, o.Zq)(n)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function ae(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function se(e, t, n) {
        return t === M
          ? ae(
              (function (e, t) {
                var n = (0, s.Z)(e),
                  o = d(e),
                  r = n.visualViewport,
                  i = o.clientWidth,
                  a = o.clientHeight,
                  f = 0,
                  c = 0;
                if (r) {
                  (i = r.width), (a = r.height);
                  var u = p();
                  (u || (!u && "fixed" === t)) &&
                    ((f = r.offsetLeft), (c = r.offsetTop));
                }
                return { width: i, height: a, x: f + m(e), y: c };
              })(e, n)
            )
          : (0, o.kK)(t)
          ? (function (e, t) {
              var n = c(e, !1, "fixed" === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : ae(
              (function (e) {
                var t,
                  n = d(e),
                  o = u(e),
                  i = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = r(
                    n.scrollWidth,
                    n.clientWidth,
                    i ? i.scrollWidth : 0,
                    i ? i.clientWidth : 0
                  ),
                  s = r(
                    n.scrollHeight,
                    n.clientHeight,
                    i ? i.scrollHeight : 0,
                    i ? i.clientHeight : 0
                  ),
                  f = -o.scrollLeft + m(e),
                  p = -o.scrollTop;
                return (
                  "rtl" === h(i || n).direction &&
                    (f += r(n.clientWidth, i ? i.clientWidth : 0) - a),
                  { width: a, height: s, x: f, y: p }
                );
              })(d(e))
            );
      }
      function fe(e, t, n, a) {
        var s =
            "clippingParents" === t
              ? (function (e) {
                  var t = O(v(e)),
                    n =
                      ["absolute", "fixed"].indexOf(h(e).position) >= 0 &&
                      (0, o.Re)(e)
                        ? R(e)
                        : e;
                  return (0, o.kK)(n)
                    ? t.filter(function (e) {
                        return (
                          (0, o.kK)(e) && ie(e, n) && "body" !== (0, l.Z)(e)
                        );
                      })
                    : [];
                })(e)
              : [].concat(t),
          f = [].concat(s, [n]),
          p = f[0],
          c = f.reduce(function (t, n) {
            var o = se(e, n, a);
            return (
              (t.top = r(o.top, t.top)),
              (t.right = i(o.right, t.right)),
              (t.bottom = i(o.bottom, t.bottom)),
              (t.left = r(o.left, t.left)),
              t
            );
          }, se(e, p, a));
        return (
          (c.width = c.right - c.left),
          (c.height = c.bottom - c.top),
          (c.x = c.left),
          (c.y = c.top),
          c
        );
      }
      function pe(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function ce(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      function ue(e, t) {
        void 0 === t && (t = {});
        var n = t,
          r = n.placement,
          i = void 0 === r ? e.placement : r,
          a = n.strategy,
          s = void 0 === a ? e.strategy : a,
          f = n.boundary,
          p = void 0 === f ? "clippingParents" : f,
          u = n.rootBoundary,
          l = void 0 === u ? M : u,
          m = n.elementContext,
          h = void 0 === m ? j : m,
          T = n.altBoundary,
          y = void 0 !== T && T,
          g = n.padding,
          v = void 0 === g ? 0 : g,
          b = pe("number" !== typeof v ? v : ce(v, L)),
          O = h === j ? "reference" : j,
          A = e.rects.popper,
          w = e.elements[y ? O : h],
          R = fe(
            (0, o.kK)(w) ? w : w.contextElement || d(e.elements.popper),
            p,
            l,
            s
          ),
          S = c(e.elements.reference),
          P = F({
            reference: S,
            element: A,
            strategy: "absolute",
            placement: i,
          }),
          _ = ae(Object.assign({}, A, P)),
          D = h === j ? _ : S,
          Q = {
            top: R.top - D.top + b.top,
            bottom: D.bottom - R.bottom + b.bottom,
            left: R.left - D.left + b.left,
            right: D.right - R.right + b.right,
          },
          I = e.modifiersData.offset;
        if (h === j && I) {
          var C = I[i];
          Object.keys(Q).forEach(function (e) {
            var t = [E, x].indexOf(e) >= 0 ? 1 : -1,
              n = [k, x].indexOf(e) >= 0 ? "y" : "x";
            Q[e] += C[n] * t;
          });
        }
        return Q;
      }
      var le = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            o = e.name;
          if (!t.modifiersData[o]._skip) {
            for (
              var r = n.mainAxis,
                i = void 0 === r || r,
                a = n.altAxis,
                s = void 0 === a || a,
                f = n.fallbackPlacements,
                p = n.padding,
                c = n.boundary,
                u = n.rootBoundary,
                l = n.altBoundary,
                d = n.flipVariations,
                m = void 0 === d || d,
                h = n.allowedAutoPlacements,
                T = t.options.placement,
                y = U(T),
                g =
                  f ||
                  (y === T || !m
                    ? [ne(T)]
                    : (function (e) {
                        if (U(e) === P) return [];
                        var t = ne(e);
                        return [re(e), t, re(t)];
                      })(T)),
                v = [T].concat(g).reduce(function (e, n) {
                  return e.concat(
                    U(n) === P
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            o = n.placement,
                            r = n.boundary,
                            i = n.rootBoundary,
                            a = n.padding,
                            s = n.flipVariations,
                            f = n.allowedAutoPlacements,
                            p = void 0 === f ? I : f,
                            c = Y(o),
                            u = c
                              ? s
                                ? Q
                                : Q.filter(function (e) {
                                    return Y(e) === c;
                                  })
                              : L,
                            l = u.filter(function (e) {
                              return p.indexOf(e) >= 0;
                            });
                          0 === l.length && (l = u);
                          var d = l.reduce(function (t, n) {
                            return (
                              (t[n] = ue(e, {
                                placement: n,
                                boundary: r,
                                rootBoundary: i,
                                padding: a,
                              })[U(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(d).sort(function (e, t) {
                            return d[e] - d[t];
                          });
                        })(t, {
                          placement: n,
                          boundary: c,
                          rootBoundary: u,
                          padding: p,
                          flipVariations: m,
                          allowedAutoPlacements: h,
                        })
                      : n
                  );
                }, []),
                b = t.rects.reference,
                O = t.rects.popper,
                A = new Map(),
                w = !0,
                R = v[0],
                D = 0;
              D < v.length;
              D++
            ) {
              var M = v[D],
                j = U(M),
                C = Y(M) === _,
                V = [k, x].indexOf(j) >= 0,
                N = V ? "width" : "height",
                Z = ue(t, {
                  placement: M,
                  boundary: c,
                  rootBoundary: u,
                  altBoundary: l,
                  padding: p,
                }),
                K = V ? (C ? E : S) : C ? x : k;
              b[N] > O[N] && (K = ne(K));
              var W = ne(K),
                B = [];
              if (
                (i && B.push(Z[j] <= 0),
                s && B.push(Z[K] <= 0, Z[W] <= 0),
                B.every(function (e) {
                  return e;
                }))
              ) {
                (R = M), (w = !1);
                break;
              }
              A.set(M, B);
            }
            if (w)
              for (
                var q = function (e) {
                    var t = v.find(function (t) {
                      var n = A.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (R = t), "break";
                  },
                  H = m ? 3 : 1;
                H > 0;
                H--
              ) {
                if ("break" === q(H)) break;
              }
            t.placement !== R &&
              ((t.modifiersData[o]._skip = !0),
              (t.placement = R),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function de(e, t, n) {
        return r(e, i(t, n));
      }
      var me = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            o = e.name,
            a = n.mainAxis,
            s = void 0 === a || a,
            f = n.altAxis,
            p = void 0 !== f && f,
            c = n.boundary,
            u = n.rootBoundary,
            l = n.altBoundary,
            d = n.padding,
            m = n.tether,
            h = void 0 === m || m,
            T = n.tetherOffset,
            y = void 0 === T ? 0 : T,
            v = ue(t, {
              boundary: c,
              rootBoundary: u,
              padding: d,
              altBoundary: l,
            }),
            b = U(t.placement),
            O = Y(t.placement),
            A = !O,
            w = H(b),
            P = "x" === w ? "y" : "x",
            L = t.modifiersData.popperOffsets,
            D = t.rects.reference,
            M = t.rects.popper,
            j =
              "function" === typeof y
                ? y(Object.assign({}, t.rects, { placement: t.placement }))
                : y,
            Q =
              "number" === typeof j
                ? { mainAxis: j, altAxis: j }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
            I = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            C = { x: 0, y: 0 };
          if (L) {
            if (s) {
              var V,
                N = "y" === w ? k : S,
                Z = "y" === w ? x : E,
                K = "y" === w ? "height" : "width",
                W = L[w],
                B = W + v[N],
                q = W - v[Z],
                F = h ? -M[K] / 2 : 0,
                X = O === _ ? D[K] : M[K],
                z = O === _ ? -M[K] : -D[K],
                J = t.elements.arrow,
                G = h && J ? g(J) : { width: 0, height: 0 },
                $ = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                ee = $[N],
                te = $[Z],
                ne = de(0, D[K], G[K]),
                oe = A
                  ? D[K] / 2 - F - ne - ee - Q.mainAxis
                  : X - ne - ee - Q.mainAxis,
                re = A
                  ? -D[K] / 2 + F + ne + te + Q.mainAxis
                  : z + ne + te + Q.mainAxis,
                ie = t.elements.arrow && R(t.elements.arrow),
                ae = ie
                  ? "y" === w
                    ? ie.clientTop || 0
                    : ie.clientLeft || 0
                  : 0,
                se = null != (V = null == I ? void 0 : I[w]) ? V : 0,
                fe = W + re - se,
                pe = de(h ? i(B, W + oe - se - ae) : B, W, h ? r(q, fe) : q);
              (L[w] = pe), (C[w] = pe - W);
            }
            if (p) {
              var ce,
                le = "x" === w ? k : S,
                me = "x" === w ? x : E,
                he = L[P],
                Te = "y" === P ? "height" : "width",
                ye = he + v[le],
                ge = he - v[me],
                ve = -1 !== [k, S].indexOf(b),
                be = null != (ce = null == I ? void 0 : I[P]) ? ce : 0,
                Oe = ve ? ye : he - D[Te] - M[Te] - be + Q.altAxis,
                Ae = ve ? he + D[Te] + M[Te] - be - Q.altAxis : ge,
                we =
                  h && ve
                    ? (function (e, t, n) {
                        var o = de(e, t, n);
                        return o > n ? n : o;
                      })(Oe, he, Ae)
                    : de(h ? Oe : ye, he, h ? Ae : ge);
              (L[P] = we), (C[P] = we - he);
            }
            t.modifiersData[o] = C;
          }
        },
        requiresIfExists: ["offset"],
      };
      var he = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            n = e.state,
            o = e.name,
            r = e.options,
            i = n.elements.arrow,
            a = n.modifiersData.popperOffsets,
            s = U(n.placement),
            f = H(s),
            p = [S, E].indexOf(s) >= 0 ? "height" : "width";
          if (i && a) {
            var c = (function (e, t) {
                return pe(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : ce(e, L)
                );
              })(r.padding, n),
              u = g(i),
              l = "y" === f ? k : S,
              d = "y" === f ? x : E,
              m =
                n.rects.reference[p] +
                n.rects.reference[f] -
                a[f] -
                n.rects.popper[p],
              h = a[f] - n.rects.reference[f],
              T = R(i),
              y = T
                ? "y" === f
                  ? T.clientHeight || 0
                  : T.clientWidth || 0
                : 0,
              v = m / 2 - h / 2,
              b = c[l],
              O = y - u[p] - c[d],
              A = y / 2 - u[p] / 2 + v,
              w = de(b, A, O),
              P = f;
            n.modifiersData[o] =
              (((t = {})[P] = w), (t.centerOffset = w - A), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            o = void 0 === n ? "[data-popper-arrow]" : n;
          null != o &&
            ("string" !== typeof o ||
              (o = t.elements.popper.querySelector(o))) &&
            ie(t.elements.popper, o) &&
            (t.elements.arrow = o);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Te(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function ye(e) {
        return [k, E, x, S].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ge = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              o = t.rects.reference,
              r = t.rects.popper,
              i = t.modifiersData.preventOverflow,
              a = ue(t, { elementContext: "reference" }),
              s = ue(t, { altBoundary: !0 }),
              f = Te(a, o),
              p = Te(s, r, i),
              c = ye(f),
              u = ye(p);
            (t.modifiersData[n] = {
              referenceClippingOffsets: f,
              popperEscapeOffsets: p,
              isReferenceHidden: c,
              hasPopperEscaped: u,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": c,
                "data-popper-escaped": u,
              }));
          },
        },
        ve = W({ defaultModifiers: [q, X, G, $.Z, ee, le, me, he, ge] });
    },
    372680: function (e, t) {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REQUEST_PROJECT_ROLES_LINK =
          t.userHasActiveSpecificRole =
          t.shouldShowRemoAdminProjectRole =
          t.RoleList =
          t.RoleDescription =
          t.Role =
            void 0),
        (t.Role = n),
        (function (e) {
          (e.EM = "Engagement Manager"),
            (e.STO = "STO"),
            (e.DRI = "Ops DRI"),
            (e.QualitySystems = "Quality Systems"),
            (e.CoursesInstructions = "Courses and Instructions"),
            (e.QM = "QM"),
            (e.TaskerManagement = "Tasker Management"),
            (e.QualityAudits = "Quality Audits"),
            (e.QARValidator = "QM QAR Validator"),
            (e.QIRValidator = "QM QIR Validator"),
            (e.QARAuditor = "QAR Auditor"),
            (e.QIRAuditor = "QIR Auditor"),
            (e.ProjectPlanning = "Project Planning"),
            (e.TaskerCommunication = "Tasker Communication"),
            (e.EngineeringSupport = "Engineering Support"),
            (e.RemoAdminQATasker = "RemoAdmin QA/Tasker"),
            (e.RemoAdminReviewer = "RemoAdmin Reviewer"),
            (e.KeepLoopRemoAdmin = "Keep in Loop (with RemoAdmin)"),
            (e.KeepLoop = "Keep in Loop"),
            (e.OPs = "Ops (Unspecified Role, Performing Project Work)"),
            (e.DeliveryOpsTeamMember = "Delivery Ops Team Member"),
            (e.CentralOpsTeamMember = "Central Ops Team Member"),
            (e.NonDeliveryFunction = "Non-Delivery Function");
        })(n || (t.Role = n = {}));
      const o = {
        [n.EM]: {
          role: n.EM,
          label: "Engagement Manager",
          helpText:
            "This person is responsible for the customer relationship and tracking consumption, amongst other things.",
        },
        [n.STO]: {
          role: n.STO,
          label: "STO",
          helpText:
            "Single Threaded Owner. Main person responsible for project execution and results.",
        },
        [n.DRI]: {
          role: n.DRI,
          label: "Ops DRI",
          helpText:
            "This is the person responsible for delivering quality and throughput for that specific queue.",
        },
        [n.QualitySystems]: {
          role: n.QualitySystems,
          label: "Quality Systems",
          helpText:
            "This person configures and monitors the systems used to measure tasker and annotation quality on the queue.",
        },
        [n.CoursesInstructions]: {
          role: n.CoursesInstructions,
          label: "Courses and Instructions",
          helpText:
            "This person works to create and maintain clear instructions and effective courses.",
        },
        [n.QM]: {
          role: n.QM,
          label: "QM",
          helpText:
            "Queue Manager. This person is responsible for adjusting the queue to make sure SLAs are attained and taskers are properly incentivized.",
        },
        [n.TaskerManagement]: {
          role: n.TaskerManagement,
          label: "Tasker Management",
          helpText:
            "This person manages allocation, promotions, demotions, and disabling permissions for tasters on this project.",
        },
        [n.QualityAudits]: {
          role: n.QualityAudits,
          label: "Quality Audits",
          helpText:
            "This person is directly auditing work from taskers to identify quality issues.",
        },
        [n.QARValidator]: {
          role: n.QARValidator,
          label: "QM QAR Validator",
          helpText:
            "This person is responsible for resolving issues identified in the queue by the QAR process.",
        },
        [n.QIRValidator]: {
          role: n.QIRValidator,
          label: "QM QIR Validator",
          helpText:
            "This person is responsible for resolving issues identified in the queue by the QIR process.",
        },
        [n.QARAuditor]: {
          role: n.QARAuditor,
          label: "QAR Auditor",
          helpText:
            "A person from the QAR team that is responsible for identifying issues in the queue by the QAR process.",
        },
        [n.QIRAuditor]: {
          role: n.QIRAuditor,
          label: "QIR Auditor",
          helpText:
            "A person from the QIR team that is responsible for identifying issues in the queue by the QIR process.",
        },
        [n.ProjectPlanning]: {
          role: n.ProjectPlanning,
          label: "Project Planning",
          helpText:
            "This person is responsible for ensuring throughput and/or turnaround time is hitting targets.",
        },
        [n.TaskerCommunication]: {
          role: n.TaskerCommunication,
          label: "Tasker Communication",
          helpText:
            "This person is communicating with taskers or tasker support resources to answer questions and resolve concerns.",
        },
        [n.EngineeringSupport]: {
          role: n.EngineeringSupport,
          label: "Engineering Support",
          helpText:
            "This is someone supporting the project in a technical capacity \u2014 either as a FE, SWE, SE, or MLE.",
        },
        [n.RemoAdminQATasker]: {
          role: n.RemoAdminQATasker,
          label: "RemoAdmin QA/Tasker",
          helpText: "RemoAdmin QA or Tasker.",
        },
        [n.RemoAdminReviewer]: {
          role: n.RemoAdminReviewer,
          label: "RemoAdmin Operation Reviewer",
          helpText:
            "Reviews QA Operations and work performed by RemoAdmin QAs/Taskers.",
        },
        [n.KeepLoopRemoAdmin]: {
          role: n.KeepLoopRemoAdmin,
          label: "Keep in Loop (with RemoAdmin)",
          helpText:
            'This is the same as "Keep in Loop". The difference is that this gives access to the project in RemoAdmin, so it needs authorization.',
        },
        [n.KeepLoop]: {
          role: n.KeepLoop,
          label: "Keep in Loop",
          helpText:
            "This is someone who doesn't fit into the other categories but who wants to be informed about this project.",
        },
        [n.OPs]: {
          role: n.OPs,
          label: "Ops (Unspecified Role, Performing Project Work)",
          helpText: "Ops (Unspecified Role, Performing Project Work).",
        },
        [n.DeliveryOpsTeamMember]: {
          role: n.DeliveryOpsTeamMember,
          label: "Delivery Ops Team Member",
          helpText:
            "Catch-all role for all OPMs, OAs, non-STO SPLs, etc. that are working on the project.",
        },
        [n.CentralOpsTeamMember]: {
          role: n.CentralOpsTeamMember,
          label: "Central Ops Team Member",
          helpText:
            "Non-member of the Operations team person allowed to work on the project.",
        },
        [n.NonDeliveryFunction]: {
          role: n.NonDeliveryFunction,
          label: "Non-Delivery Function",
          helpText:
            "Someone who is not part of the delivery team but needs temporary access to the project.",
        },
      };
      t.RoleDescription = o;
      const r = [
        o[n.EM],
        o[n.STO],
        o[n.DeliveryOpsTeamMember],
        o[n.CentralOpsTeamMember],
      ];
      t.RoleList = r;
      const i = new Set([
        n.RemoAdminQATasker,
        n.KeepLoopRemoAdmin,
        n.RemoAdminReviewer,
      ]);
      t.shouldShowRemoAdminProjectRole = (e) => {
        const t = e.role && i.has(e.role),
          n = !0 === e.user.isRemoAdmin,
          o = [];
        e.user.remoAdminPersonas?.forEach((e) => {
          e.enabled &&
            e.projects?.forEach((e) => {
              o.push(e);
            });
        });
        const r = o.includes(e.project._id);
        return !t || (t && n && r);
      };
      t.userHasActiveSpecificRole = (e, t, n) =>
        n.find(
          (n) =>
            n.role === e &&
            n.user._id === t &&
            new Date(n.startDate) < new Date() &&
            (!n.stopDate || new Date(n.stopDate) > new Date())
        );
      t.REQUEST_PROJECT_ROLES_LINK =
        "https://scale.atlassian.net/servicedesk/customer/portal/35";
    },
    500718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TAXONOMY_OWNER_PROJECT_ROLES =
          t.SPLIT_TAXONOMY_PRODUCT_TYPES =
          t.PROJECT_TASKTYPE_TO_TAXONOMY_TARGET_TASKTYPES =
          t.BACKFILL_SUPPORTED_TYPES =
          t.GLOBAL_TRACK_ATTRIBUTE_SUPPORTED_TYPES =
          t.ANNOTATE_UPLOADED_EXAMPLES_SUPPORTED_TYPES =
          t.JSON_PREVIEW_SUPPORTED_TYPES =
          t.ALLOWED_PRODUCT_TYPES =
            void 0);
      var o = n(167469),
        r = n(372680);
      const i = [
        o.TaskType.SensorFusion,
        o.TaskType.MultiStage,
        o.TaskType.LidarAnnotation,
        o.TaskType.LidarLinking,
        o.TaskType.LidarTopdown,
        o.TaskType.SegmentAnnotation,
        o.TaskType.LidarSegmentation,
        o.TaskType.VideoAnnotation,
        o.TaskType.ImageAnnotation,
        o.TaskType.VideoPlaybackAnnotation,
      ];
      t.ALLOWED_PRODUCT_TYPES = i;
      const a = [
        o.TaskType.SensorFusion,
        o.TaskType.MultiStage,
        o.TaskType.LidarTopdown,
        o.TaskType.VideoAnnotation,
        o.TaskType.ImageAnnotation,
        o.TaskType.VideoPlaybackAnnotation,
      ];
      t.JSON_PREVIEW_SUPPORTED_TYPES = a;
      const s = [
        o.TaskType.ImageAnnotation,
        o.TaskType.LidarLinking,
        o.TaskType.LidarTopdown,
      ];
      t.ANNOTATE_UPLOADED_EXAMPLES_SUPPORTED_TYPES = s;
      const f = [
        o.TaskType.LidarAnnotation,
        o.TaskType.LidarLinking,
        o.TaskType.VideoAnnotation,
        o.TaskType.SensorFusion,
        o.TaskType.VideoPlaybackAnnotation,
      ];
      t.GLOBAL_TRACK_ATTRIBUTE_SUPPORTED_TYPES = f;
      const p = [
        o.TaskType.LidarTopdown,
        o.TaskType.SegmentAnnotation,
        o.TaskType.LidarLinking,
        o.TaskType.LidarSegmentation,
        o.TaskType.SensorFusion,
        o.TaskType.MultiStage,
        o.TaskType.LidarAnnotation,
        o.TaskType.VideoAnnotation,
        o.TaskType.ImageAnnotation,
        o.TaskType.VideoPlaybackAnnotation,
      ];
      t.BACKFILL_SUPPORTED_TYPES = p;
      const c = {
        [o.TaskType.SensorFusion]: i,
        [o.TaskType.MultiStage]: i,
        [o.TaskType.LidarAnnotation]: [o.TaskType.LidarAnnotation],
        [o.TaskType.LidarLinking]: [o.TaskType.LidarLinking],
        [o.TaskType.LidarTopdown]: [o.TaskType.LidarTopdown],
        [o.TaskType.SegmentAnnotation]: [o.TaskType.SegmentAnnotation],
        [o.TaskType.LidarSegmentation]: [o.TaskType.LidarSegmentation],
        [o.TaskType.VideoAnnotation]: [o.TaskType.VideoAnnotation],
        [o.TaskType.ImageAnnotation]: [o.TaskType.ImageAnnotation],
        [o.TaskType.VideoPlaybackAnnotation]: [
          o.TaskType.VideoPlaybackAnnotation,
        ],
      };
      t.PROJECT_TASKTYPE_TO_TAXONOMY_TARGET_TASKTYPES = c;
      const u = [o.TaskType.SensorFusion, o.TaskType.MultiStage];
      t.SPLIT_TAXONOMY_PRODUCT_TYPES = u;
      const l = [r.Role.EM, r.Role.DRI, r.Role.STO, r.Role.CoursesInstructions];
      t.TAXONOMY_OWNER_PROJECT_ROLES = l;
    },
    654335: function (e) {
      var t = "undefined" !== typeof Element,
        n = "function" === typeof Map,
        o = "function" === typeof Set,
        r = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, a) {
        if (e === a) return !0;
        if (e && a && "object" == typeof e && "object" == typeof a) {
          if (e.constructor !== a.constructor) return !1;
          var s, f, p, c;
          if (Array.isArray(e)) {
            if ((s = e.length) != a.length) return !1;
            for (f = s; 0 !== f--; ) if (!i(e[f], a[f])) return !1;
            return !0;
          }
          if (n && e instanceof Map && a instanceof Map) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(f = c.next()).done; )
              if (!a.has(f.value[0])) return !1;
            for (c = e.entries(); !(f = c.next()).done; )
              if (!i(f.value[1], a.get(f.value[0]))) return !1;
            return !0;
          }
          if (o && e instanceof Set && a instanceof Set) {
            if (e.size !== a.size) return !1;
            for (c = e.entries(); !(f = c.next()).done; )
              if (!a.has(f.value[0])) return !1;
            return !0;
          }
          if (r && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
            if ((s = e.length) != a.length) return !1;
            for (f = s; 0 !== f--; ) if (e[f] !== a[f]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === a.source && e.flags === a.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === a.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === a.toString();
          if ((s = (p = Object.keys(e)).length) !== Object.keys(a).length)
            return !1;
          for (f = s; 0 !== f--; )
            if (!Object.prototype.hasOwnProperty.call(a, p[f])) return !1;
          if (t && e instanceof Element) return !1;
          for (f = s; 0 !== f--; )
            if (
              (("_owner" !== p[f] && "__v" !== p[f] && "__o" !== p[f]) ||
                !e.$$typeof) &&
              !i(e[p[f]], a[p[f]])
            )
              return !1;
          return !0;
        }
        return e !== e && a !== a;
      }
      e.exports = function (e, t) {
        try {
          return i(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
  },
]);
