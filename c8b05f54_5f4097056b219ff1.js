"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [11642],
  {
    209297: function (t, n, e) {
      e.d(n, {
        M_: function () {
          return xr;
        },
        ww: function () {
          return dr;
        },
      });
      var r = e(322627),
        i = e(490218),
        o = e(775912),
        a = e(576065),
        s = e(689173),
        u = e(827378),
        l = function (t) {
          return "object" === typeof t && t.hasOwnProperty("current");
        },
        c = (function () {
          function t() {
            this.subscriptions = new Set();
          }
          return (
            (t.prototype.add = function (t) {
              var n = this;
              return (
                this.subscriptions.add(t),
                function () {
                  n.subscriptions.delete(t);
                }
              );
            }),
            (t.prototype.notify = function (t, n, e) {
              var i, o;
              if (this.subscriptions.size)
                try {
                  for (
                    var a = (0, r.XA)(this.subscriptions), s = a.next();
                    !s.done;
                    s = a.next()
                  ) {
                    (0, s.value)(t, n, e);
                  }
                } catch (u) {
                  i = { error: u };
                } finally {
                  try {
                    s && !s.done && (o = a.return) && o.call(a);
                  } finally {
                    if (i) throw i.error;
                  }
                }
            }),
            (t.prototype.clear = function () {
              this.subscriptions.clear();
            }),
            t
          );
        })(),
        f = (function () {
          function t(t) {
            var n,
              e = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new c()),
              (this.renderSubscribers = new c()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, n) {
                void 0 === n && (n = !0),
                  (e.prev = e.current),
                  (e.current = t),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  n && e.renderSubscribers.notify(e.current);
                var r = (0, i.$B)(),
                  o = r.delta,
                  a = r.timestamp;
                e.lastUpdated !== a &&
                  ((e.timeDelta = o),
                  (e.lastUpdated = a),
                  i.ZP.postRender(e.scheduleVelocityCheck));
              }),
              (this.scheduleVelocityCheck = function () {
                return i.ZP.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== e.lastUpdated && (e.prev = e.current);
              }),
              this.set(t, !1),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, n) {
              void 0 === n && (n = !0),
                n && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, n);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? (0, o.Rv)(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var n = this;
              return (
                this.stop(),
                new Promise(function (e) {
                  n.stopAnimation = t(e);
                }).then(function () {
                  return n.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function p(t) {
        return new f(t);
      }
      var d = function (t) {
          return 1e3 * t;
        },
        h = {
          linear: o.GE,
          easeIn: o.YQ,
          easeInOut: o.mZ,
          easeOut: o.Vv,
          circIn: o.Z7,
          circInOut: o.X7,
          circOut: o.Bn,
          backIn: o.G2,
          backInOut: o.XL,
          backOut: o.CG,
          anticipate: o.LU,
          bounceIn: o.h9,
          bounceInOut: o.yD,
          bounceOut: o.gJ,
        },
        v = function (t) {
          if (Array.isArray(t)) {
            (0, a.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var n = (0, r.CR)(t, 4),
              e = n[0],
              i = n[1],
              s = n[2],
              u = n[3];
            return (0, o._s)(e, i, s, u);
          }
          return "string" === typeof t
            ? ((0, a.k)(void 0 !== h[t], "Invalid easing type '" + t + "'"),
              h[t])
            : t;
        },
        m = function (t, n) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof n && !Array.isArray(n)) ||
              !("string" !== typeof n || !s.PY.test(n) || n.startsWith("url(")))
          );
        },
        g = function (t) {
          return Array.isArray(t);
        },
        y = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        x = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 100 : 30,
            restDelta: 0.01,
            restSpeed: 10,
          };
        },
        b = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        E = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        C = {
          x: y,
          y: y,
          z: y,
          rotate: y,
          rotateX: y,
          rotateY: y,
          rotateZ: y,
          scaleX: x,
          scaleY: x,
          scale: x,
          opacity: b,
          backgroundColor: b,
          color: b,
          default: x,
        };
      function w(t) {
        var n = t.yoyo,
          e = t.loop,
          i = t.flip,
          o = t.ease,
          a = t.times,
          s = (0, r._T)(t, ["yoyo", "loop", "flip", "ease", "times"]),
          u = (0, r.pi)({}, s);
        return (
          a && (u.offset = a),
          s.duration && (u.duration = d(s.duration)),
          s.repeatDelay && (u.repeatDelay = d(s.repeatDelay)),
          o &&
            (u.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(o)
              ? o.map(v)
              : v(o)),
          "tween" === s.type && (u.type = "keyframes"),
          n
            ? (u.repeatType = "reverse")
            : e
            ? (u.repeatType = "loop")
            : i && (u.repeatType = "mirror"),
          (u.repeat = e || n || i || s.repeat),
          "spring" !== s.type && (u.type = "keyframes"),
          u
        );
      }
      function P(t, n, e) {
        var i;
        return (
          Array.isArray(n.to) &&
            ((null !== (i = t.duration) && void 0 !== i) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = (0, r.fl)(t.to)), (t.to[0] = t.from));
          })(n),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var n = (0, r._T)(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(n).length;
          })(t) ||
            (t = (0, r.pi)(
              (0, r.pi)({}, t),
              (function (t, n) {
                var e;
                return (
                  (e = g(n) ? E : C[t] || C.default), (0, r.pi)({ to: n }, e(n))
                );
              })(e, n.to)
            )),
          (0, r.pi)((0, r.pi)({}, n), w(t))
        );
      }
      function S(t, n, e, i) {
        return (
          void 0 === i && (i = {}),
          n.start(function (u) {
            var l,
              c,
              f = (function (t, n, e, i, u) {
                var l,
                  c = (function (t, n) {
                    return t[n] || t.default || t;
                  })(i, t),
                  f = null !== (l = c.from) && void 0 !== l ? l : n.get(),
                  p = m(t, e);
                "none" === f &&
                  p &&
                  "string" === typeof e &&
                  (f = s.PY.getAnimatableNone(e));
                var d = m(t, f);
                return (
                  (0, a.K)(
                    d === p,
                    "You are trying to animate " +
                      t +
                      ' from "' +
                      f +
                      '" to "' +
                      e +
                      '". ' +
                      f +
                      " is not an animatable value - to enable this animation set " +
                      f +
                      " to a value animatable to " +
                      e +
                      " via the `style` property."
                  ),
                  d && p && !1 !== c.type
                    ? function () {
                        var i = {
                          from: f,
                          to: e,
                          velocity: n.getVelocity(),
                          onComplete: u,
                          onUpdate: function (t) {
                            return n.set(t);
                          },
                        };
                        return "inertia" === c.type || "decay" === c.type
                          ? (0, o.II)((0, r.pi)((0, r.pi)({}, i), c))
                          : (0, o.jt)(
                              (0, r.pi)((0, r.pi)({}, P(c, i, t)), {
                                onUpdate: function (t) {
                                  var n;
                                  i.onUpdate(t),
                                    null === (n = c.onUpdate) ||
                                      void 0 === n ||
                                      n.call(c, t);
                                },
                                onComplete: function () {
                                  var t;
                                  i.onComplete(),
                                    null === (t = c.onComplete) ||
                                      void 0 === t ||
                                      t.call(c);
                                },
                              })
                            );
                      }
                    : function () {
                        var t;
                        return (
                          n.set(e),
                          u(),
                          null ===
                            (t =
                              null === c || void 0 === c
                                ? void 0
                                : c.onComplete) ||
                            void 0 === t ||
                            t.call(c),
                          { stop: function () {} }
                        );
                      }
                );
              })(t, n, e, i, u),
              p = (function (t, n) {
                var e, r, i, o, a;
                return null !==
                  (a =
                    null !==
                      (o =
                        null !==
                          (r =
                            null === (e = t[n]) || void 0 === e
                              ? void 0
                              : e.delay) && void 0 !== r
                          ? r
                          : null === (i = t.default) || void 0 === i
                          ? void 0
                          : i.delay) && void 0 !== o
                      ? o
                      : t.delay) && void 0 !== a
                  ? a
                  : 0;
              })(i, t),
              h = function () {
                return (c = f());
              };
            return (
              p ? (l = setTimeout(h, d(p))) : h(),
              function () {
                clearTimeout(l), null === c || void 0 === c || c.stop();
              }
            );
          })
        );
      }
      var A = function (t) {
          return g(t) ? t[t.length - 1] || 0 : t;
        },
        T = (0, r.pi)((0, r.pi)({}, s.Rx), { transform: Math.round }),
        V = {
          color: s.$_,
          backgroundColor: s.$_,
          outlineColor: s.$_,
          fill: s.$_,
          stroke: s.$_,
          borderColor: s.$_,
          borderTopColor: s.$_,
          borderRightColor: s.$_,
          borderBottomColor: s.$_,
          borderLeftColor: s.$_,
          borderWidth: s.px,
          borderTopWidth: s.px,
          borderRightWidth: s.px,
          borderBottomWidth: s.px,
          borderLeftWidth: s.px,
          borderRadius: s.px,
          radius: s.px,
          borderTopLeftRadius: s.px,
          borderTopRightRadius: s.px,
          borderBottomRightRadius: s.px,
          borderBottomLeftRadius: s.px,
          width: s.px,
          maxWidth: s.px,
          height: s.px,
          maxHeight: s.px,
          size: s.px,
          top: s.px,
          right: s.px,
          bottom: s.px,
          left: s.px,
          padding: s.px,
          paddingTop: s.px,
          paddingRight: s.px,
          paddingBottom: s.px,
          paddingLeft: s.px,
          margin: s.px,
          marginTop: s.px,
          marginRight: s.px,
          marginBottom: s.px,
          marginLeft: s.px,
          rotate: s.RW,
          rotateX: s.RW,
          rotateY: s.RW,
          rotateZ: s.RW,
          scale: s.bA,
          scaleX: s.bA,
          scaleY: s.bA,
          scaleZ: s.bA,
          skew: s.RW,
          skewX: s.RW,
          skewY: s.RW,
          distance: s.px,
          translateX: s.px,
          translateY: s.px,
          translateZ: s.px,
          x: s.px,
          y: s.px,
          z: s.px,
          perspective: s.px,
          transformPerspective: s.px,
          opacity: s.Fq,
          originX: s.$C,
          originY: s.$C,
          originZ: s.px,
          zIndex: T,
          fillOpacity: s.Fq,
          strokeOpacity: s.Fq,
          numOctaves: T,
        },
        L = [
          s.Rx,
          s.px,
          s.aQ,
          s.RW,
          s.vw,
          s.vh,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        B = function (t) {
          return function (n) {
            return n.test(t);
          };
        },
        k = function (t) {
          return L.find(B(t));
        },
        R = (0, r.fl)(L, [s.$_, s.PY]),
        D = function (t) {
          return R.find(B(t));
        },
        M = function (t) {
          return V[t];
        },
        O = function (t, n) {
          return n && "number" === typeof t ? n.transform(t) : t;
        };
      function U(t) {
        return Array.isArray(t);
      }
      function F(t) {
        return "string" === typeof t || U(t);
      }
      function I(t, n, e) {
        var i = {};
        return n
          ? ((i = (function (t) {
              return "function" === typeof t;
            })(n)
              ? n(
                  null !== e && void 0 !== e ? e : t.getVariantPayload(),
                  (function (t) {
                    var n = {};
                    return (
                      t.forEachValue(function (t, e) {
                        return (n[e] = t.get());
                      }),
                      n
                    );
                  })(t),
                  (function (t) {
                    var n = {};
                    return (
                      t.forEachValue(function (t, e) {
                        return (n[e] = t.getVelocity());
                      }),
                      n
                    );
                  })(t)
                )
              : n),
            (0, r.pi)({ transition: t.getDefaultTransition() }, i))
          : i;
      }
      function Y(t, n, e) {
        t.hasValue(n) ? t.getValue(n).set(e) : t.addValue(n, p(e));
      }
      function _(t, n, e) {
        var i = (void 0 === e ? {} : e).priority,
          o = t.makeTargetAnimatable(I(t, n), !1),
          a = o.transitionEnd,
          s = void 0 === a ? {} : a,
          u = (o.transition, (0, r._T)(o, ["transitionEnd", "transition"]));
        for (var l in (u = (0, r.pi)((0, r.pi)({}, u), s))) {
          var c = A(u[l]);
          Y(t, l, c), i || (t.baseTarget[l] = c);
        }
      }
      function Z(t, n) {
        (0, r.fl)(n)
          .reverse()
          .forEach(function (e) {
            var r;
            _(t, t.getVariant(e)),
              null === (r = t.variantChildren) ||
                void 0 === r ||
                r.forEach(function (t) {
                  Z(t, n);
                });
          });
      }
      function X(t, n) {
        return Array.isArray(n)
          ? Z(t, n)
          : "string" === typeof n
          ? Z(t, [n])
          : void _(t, n);
      }
      function H(t, n, e) {
        var r,
          i,
          o,
          u = Object.keys(n).filter(function (n) {
            return !t.hasValue(n);
          }),
          l = u.length;
        if (l)
          for (var c = 0; c < l; c++) {
            var f = u[c],
              d = n[f],
              h = null;
            if ((Array.isArray(d) && (h = d[0]), null === h)) {
              var v =
                null !== (r = e[f]) && void 0 !== r ? r : t.readNativeValue(f);
              (h = void 0 !== v ? v : n[f]),
                (0, a.k)(
                  null !== h,
                  'No initial value for "' +
                    f +
                    '" can be inferred. Ensure an initial value for "' +
                    f +
                    '" is defined on the component.'
                );
            }
            "string" === typeof h && /^\-?\d*\.?\d+$/.test(h)
              ? (h = parseFloat(h))
              : !D(h) && s.PY.test(d) && (h = s.PY.getAnimatableNone(d)),
              t.addValue(f, p(h)),
              (null !== (i = (o = e)[f]) && void 0 !== i) || (o[f] = h),
              (t.baseTarget[f] = h);
          }
      }
      function W(t, n) {
        if (n) return (n[t] || n.default || n).from;
      }
      function z(t, n, e) {
        var r,
          i,
          o = {};
        for (var a in t)
          o[a] =
            null !== (r = W(a, n)) && void 0 !== r
              ? r
              : null === (i = e.getValue(a)) || void 0 === i
              ? void 0
              : i.get();
        return o;
      }
      function j(t, n, e) {
        var i;
        return (
          void 0 === e && (e = {}),
          e.priority && t.activeOverrides.add(e.priority),
          t.resetIsAnimating(e.priority),
          (i = U(n)
            ? (function (t, n, e) {
                var i = (0, r.fl)(n)
                  .reverse()
                  .map(function (n) {
                    return $(t, n, e);
                  });
                return Promise.all(i);
              })(t, n, e)
            : F(n)
            ? $(t, n, e)
            : G(t, n, e)),
          t.onAnimationStart(),
          i.then(function () {
            return t.onAnimationComplete();
          })
        );
      }
      function $(t, n, e) {
        var i,
          o = (e && e.priority) || 0,
          a = t.getVariant(n),
          s = I(t, a, e && e.custom),
          u = s.transition || {},
          l = a
            ? function () {
                return G(t, s, e);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (i = t.variantChildrenOrder) || void 0 === i
              ? void 0
              : i.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var i = u.delayChildren;
                return (function (t, n, e, r, i, o, a) {
                  void 0 === e && (e = 0);
                  void 0 === r && (r = 0);
                  void 0 === i && (i = 1);
                  void 0 === o && (o = 0);
                  var s = [],
                    u = (t.variantChildrenOrder.size - 1) * r,
                    l =
                      1 === i
                        ? function (t) {
                            return t * r;
                          }
                        : function (t) {
                            return u - t * r;
                          };
                  return (
                    Array.from(t.variantChildrenOrder).forEach(function (t, r) {
                      var i = $(t, n, {
                        priority: o,
                        delay: e + l(r),
                        custom: a,
                      });
                      s.push(i);
                    }),
                    Promise.all(s)
                  );
                })(
                  t,
                  n,
                  (void 0 === i ? 0 : i) + r,
                  u.staggerChildren,
                  u.staggerDirection,
                  o,
                  null === e || void 0 === e ? void 0 : e.custom
                );
              }
            : function () {
                return Promise.resolve();
              },
          f = u.when;
        if (f) {
          var p = (0, r.CR)("beforeChildren" === f ? [l, c] : [c, l], 2),
            d = p[0],
            h = p[1];
          return d().then(h);
        }
        return Promise.all([
          l(),
          c(null === e || void 0 === e ? void 0 : e.delay),
        ]);
      }
      function G(t, n, e) {
        var i = void 0 === e ? {} : e,
          o = i.delay,
          a = void 0 === o ? 0 : o,
          s = i.priority,
          u = void 0 === s ? 0 : s,
          l = i.transitionOverride,
          c = i.custom,
          f = I(t, n, c);
        l && (f.transition = l);
        var p = t.makeTargetAnimatable(f),
          d = p.transitionEnd,
          h = p.transition,
          v = (0, r._T)(p, ["transitionEnd", "transition"]);
        u && (t.resolvedOverrides[u] = v);
        var m = [];
        for (var g in v) {
          var y = t.getValue(g);
          if (y && v && void 0 !== v[g]) {
            var x = v[g];
            u || (t.baseTarget[g] = A(x)),
              t.isAnimating.has(g) ||
                (t.isAnimating.add(g),
                m.push(S(g, y, x, (0, r.pi)({ delay: a }, h))));
          }
        }
        var b = Promise.all(m);
        return d
          ? b.then(function () {
              return _(t, d, { priority: u });
            })
          : b;
      }
      function N(t, n, e) {
        var r;
        (t.overrides[e] = n),
          null === (r = t.variantChildren) ||
            void 0 === r ||
            r.forEach(function (t) {
              N(t, n, e);
            });
      }
      function q(t, n) {
        var e = t.overrides[n];
        if (e) return j(t, e, { priority: n });
      }
      function K(t, n) {
        var e;
        if (
          (null === (e = t.variantChildrenOrder) ||
            void 0 === e ||
            e.forEach(function (t) {
              K(t, n);
            }),
          t.overrides[n])
        ) {
          t.activeOverrides.delete(n);
          var r = Q(t);
          if ((t.resetIsAnimating(), r)) t.overrides[r] && q(t, r);
          var i = t.resolvedOverrides[n];
          if (i) {
            var o = {};
            for (var a in t.baseTarget)
              void 0 !== i[a] && (o[a] = t.baseTarget[a]);
            t.onAnimationStart(),
              G(t, o).then(function () {
                t.onAnimationComplete();
              });
          }
        }
      }
      function Q(t) {
        return t.activeOverrides.size
          ? Math.max.apply(Math, (0, r.fl)(Array.from(t.activeOverrides)))
          : 0;
      }
      var J = (function () {
        function t(t, n) {
          var e = this;
          (this.children = new Set()),
            (this.baseTarget = {}),
            (this.overrides = []),
            (this.resolvedOverrides = []),
            (this.activeOverrides = new Set()),
            (this.isAnimating = new Set()),
            (this.latest = {}),
            (this.values = new Map()),
            (this.valueSubscriptions = new Map()),
            (this.config = {}),
            (this.isMounted = !1),
            (this.update = function () {
              return e.config.onUpdate(e.latest);
            }),
            (this.triggerRender = function () {
              return e.render();
            }),
            (this.ref = function (t) {
              t ? e.mount(t) : e.unmount(),
                e.externalRef &&
                  ("function" === typeof e.externalRef
                    ? e.externalRef(t)
                    : l(e.externalRef) && (e.externalRef.current = t));
            }),
            (this.parent = t),
            (this.rootParent = t ? t.rootParent : this),
            (this.treePath = t ? (0, r.fl)(t.treePath, [t]) : []),
            (this.depth = t ? t.depth + 1 : 0),
            (this.externalRef = n);
        }
        return (
          (t.prototype.getVariantPayload = function () {
            return this.config.custom;
          }),
          (t.prototype.getVariant = function (t) {
            var n;
            return null === (n = this.config.variants) || void 0 === n
              ? void 0
              : n[t];
          }),
          (t.prototype.addVariantChild = function (t) {
            this.variantChildren || (this.variantChildren = new Set()),
              this.variantChildren.add(t);
          }),
          (t.prototype.addVariantChildOrder = function (t) {
            this.variantChildrenOrder ||
              (this.variantChildrenOrder = new Set()),
              this.variantChildrenOrder.add(t);
          }),
          (t.prototype.onAnimationStart = function () {
            var t, n;
            null === (n = (t = this.config).onAnimationStart) ||
              void 0 === n ||
              n.call(t);
          }),
          (t.prototype.onAnimationComplete = function () {
            var t, n;
            this.isMounted &&
              (null === (n = (t = this.config).onAnimationComplete) ||
                void 0 === n ||
                n.call(t));
          }),
          (t.prototype.getDefaultTransition = function () {
            return this.config.transition;
          }),
          (t.prototype.resetIsAnimating = function (t) {
            var n;
            void 0 === t && (t = 0),
              this.isAnimating.clear(),
              t < Q(this) && this.checkOverrideIsAnimating(t),
              null === (n = this.variantChildren) ||
                void 0 === n ||
                n.forEach(function (n) {
                  return n.resetIsAnimating(t);
                });
          }),
          (t.prototype.checkOverrideIsAnimating = function (t) {
            for (var n = this.overrides.length, e = t + 1; e < n; e++) {
              var r = this.resolvedOverrides[e];
              if (r) for (var i in r) this.isAnimating.add(i);
            }
          }),
          (t.prototype.subscribe = function (t) {
            var n = this;
            return (
              this.children.add(t),
              function () {
                return n.children.delete(t);
              }
            );
          }),
          (t.prototype.hasValue = function (t) {
            return this.values.has(t);
          }),
          (t.prototype.addValue = function (t, n) {
            this.hasValue(t) && this.removeValue(t),
              this.values.set(t, n),
              this.setSingleStaticValue(t, n.get()),
              this.subscribeToValue(t, n);
          }),
          (t.prototype.removeValue = function (t) {
            var n;
            null === (n = this.valueSubscriptions.get(t)) ||
              void 0 === n ||
              n(),
              this.valueSubscriptions.delete(t),
              this.values.delete(t),
              delete this.latest[t];
          }),
          (t.prototype.getValue = function (t, n) {
            var e = this.values.get(t);
            return (
              void 0 === e &&
                void 0 !== n &&
                ((e = new f(n)), this.addValue(t, e)),
              e
            );
          }),
          (t.prototype.forEachValue = function (t) {
            this.values.forEach(t);
          }),
          (t.prototype.getInstance = function () {
            return this.element;
          }),
          (t.prototype.updateConfig = function (t) {
            void 0 === t && (t = {}), (this.config = (0, r.pi)({}, t));
          }),
          (t.prototype.setSingleStaticValue = function (t, n) {
            this.latest[t] = n;
          }),
          (t.prototype.setStaticValues = function (t, n) {
            if ("string" === typeof t) this.setSingleStaticValue(t, n);
            else for (var e in t) this.setSingleStaticValue(e, t[e]);
          }),
          (t.prototype.scheduleRender = function () {
            i.ZP.render(this.triggerRender, !1, !0);
          }),
          (t.prototype.scheduleUpdateLayoutDelta = function () {
            i.ZP.preRender(this.rootParent.updateLayoutDelta, !1, !0);
          }),
          (t.prototype.subscribeToValue = function (t, n) {
            var e = this,
              r = n.onChange(function (n) {
                e.setSingleStaticValue(t, n),
                  e.element &&
                    e.config.onUpdate &&
                    i.ZP.update(e.update, !1, !0);
              }),
              o = n.onRenderRequest(function () {
                e.element && e.scheduleRender();
              });
            this.valueSubscriptions.set(t, function () {
              r(), o();
            });
          }),
          (t.prototype.mount = function (t) {
            (0, a.k)(
              !!t,
              "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef"
            ),
              this.parent &&
                (this.removeFromParent = this.parent.subscribe(this)),
              (this.element = this.current = t);
          }),
          (t.prototype.unmount = function () {
            var t = this;
            this.forEachValue(function (n, e) {
              return t.removeValue(e);
            }),
              i.qY.update(this.update),
              i.qY.render(this.render),
              this.removeFromParent && this.removeFromParent();
          }),
          t
        );
      })();
      function tt(t) {
        return t;
      }
      function nt(t) {
        var n = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: n, max: t.bottom },
        };
      }
      function et(t) {
        return { x: (0, r.pi)({}, t.x), y: (0, r.pi)({}, t.y) };
      }
      var rt = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function it() {
        return { x: (0, r.pi)({}, rt), y: (0, r.pi)({}, rt) };
      }
      var ot = ["", "X", "Y", "Z"],
        at = new Set(),
        st = ["transformPerspective", "x", "y", "z"];
      function ut(t, n) {
        return st.indexOf(t) - st.indexOf(n);
      }
      ["perspective", "translate", "scale", "rotate", "skew"].forEach(function (
        t
      ) {
        var n = new Set(["rotate", "skew"]).has(t);
        ot.forEach(function (e) {
          var r = t + e;
          st.push(r), n && at.add(r);
        });
      });
      var lt = new Set(st);
      function ct(t) {
        return lt.has(t);
      }
      var ft = new Set(["originX", "originY", "originZ"]);
      function pt(t) {
        return ft.has(t);
      }
      var dt = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function ht(t, n) {
        var e = t.x,
          r = t.y;
        return (
          "translate3d(" +
          e.translate / n.x +
          "px, " +
          r.translate / n.y +
          "px, 0) scale(" +
          e.scale +
          ", " +
          r.scale +
          ")"
        );
      }
      var vt = ht(it(), { x: 1, y: 1 });
      function mt(t) {
        return t.startsWith("--");
      }
      function gt(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var yt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function xt(t, n, e) {
        void 0 === e && (e = 1),
          (0, a.k)(
            e <= 4,
            'Max CSS variable fallback depth detected in property "' +
              t +
              '". This may indicate a circular fallback dependency.'
          );
        var i = (0, r.CR)(
            (function (t) {
              var n = yt.exec(t);
              if (!n) return [,];
              var e = (0, r.CR)(n, 3);
              return [e[1], e[2]];
            })(t),
            2
          ),
          o = i[0],
          s = i[1];
        if (o) {
          var u = window.getComputedStyle(n).getPropertyValue(o);
          return u ? u.trim() : gt(s) ? xt(s, n, e + 1) : s;
        }
      }
      function bt(t, n) {
        return (t / (n.max - n.min)) * 100;
      }
      var Et = "_$css";
      var Ct = {
          process: function (t, n) {
            if ("string" === typeof t) {
              if (!s.px.test(t)) return t;
              t = parseFloat(t);
            }
            return bt(t, n.x) + "% " + bt(t, n.y) + "%";
          },
        },
        wt = {
          borderRadius: (0, r.pi)((0, r.pi)({}, Ct), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: Ct,
          borderTopRightRadius: Ct,
          borderBottomLeftRadius: Ct,
          borderBottomRightRadius: Ct,
          boxShadow: {
            process: function (t, n, e, r) {
              var i = t,
                a = t.includes("var("),
                u = [];
              a &&
                (t = t.replace(yt, function (t) {
                  return u.push(t), Et;
                }));
              var l = s.PY.parse(t);
              if (l.length > 5) return i;
              var c = s.PY.createTransformer(t),
                f = "number" !== typeof l[0] ? 1 : 0,
                p = e.x.scale * r.x,
                d = e.y.scale * r.y;
              (l[0 + f] /= p), (l[1 + f] /= d);
              var h = (0, o.CD)(p, d, 0.5);
              "number" === typeof l[2 + f] && (l[2 + f] /= h),
                "number" === typeof l[3 + f] && (l[3 + f] /= h);
              var v = c(l);
              if (a) {
                var m = 0;
                v = v.replace(Et, function () {
                  var t = u[m];
                  return m++, t;
                });
              }
              return v;
            },
          },
        };
      function Pt(t, n, e, r, i, o, a, s, u, l, c, f) {
        var p = a.enableHardwareAcceleration,
          d = a.transformTemplate,
          h = a.allowTransformNone;
        o.length = 0;
        var v = !1,
          m = !1,
          g = !0;
        for (var y in t) {
          var x = t[y],
            b = M(y),
            E = O(x, b);
          if (ct(y)) {
            if (((v = !0), (r[y] = E), o.push(y), !g)) continue;
            x !== (void 0 !== b.default ? b.default : 0) && (g = !1);
          } else if (pt(y)) (i[y] = E), (m = !0);
          else if ("transform" !== y || "function" !== typeof x) {
            var C = mt(y) ? e : n;
            if (s && wt[y]) {
              var w = wt[y].process(x, f, u, c),
                P = wt[y].applyTo;
              if (P) for (var S = P.length, A = 0; A < S; A++) C[P[A]] = w;
              else C[y] = w;
            } else C[y] = E;
          }
        }
        s
          ? ((n.transform = ht(l, c)),
            n.transform === vt && (n.transform = ""),
            v &&
              ((n.transform +=
                " " +
                (function (t, n) {
                  var e = "";
                  n.sort(ut);
                  for (var r = n.length, i = 0; i < r; i++) {
                    var o = n[i];
                    at.has(o) && (e += o + "(" + t[o] + ") ");
                  }
                  return e;
                })(r, o)),
              (n.transform = n.transform.trim())),
            d && (n.transform = d(r, n.transform)),
            (n.transformOrigin = (function (t) {
              var n = t.x,
                e = t.y;
              return 100 * n.origin + "% " + 100 * e.origin + "% 0";
            })(l)))
          : (v &&
              (n.transform = (function (t, n, e, r, i, o) {
                void 0 === i && (i = !0), void 0 === o && (o = !0);
                var a = "";
                n.sort(ut);
                for (var s = !1, u = n.length, l = 0; l < u; l++) {
                  var c = n[l];
                  (a += (dt[c] || c) + "(" + t[c] + ") "),
                    "z" === c && (s = !0);
                }
                return (
                  !s && i ? (a += "translateZ(0)") : (a = a.trim()),
                  e ? (a = e(t, r ? "" : a)) : o && r && (a = "none"),
                  a
                );
              })(r, o, d, g, p, h)),
            m &&
              (n.transformOrigin = (function (t) {
                var n = t.originX,
                  e = void 0 === n ? "50%" : n,
                  r = t.originY,
                  i = void 0 === r ? "50%" : r,
                  o = t.originZ;
                return e + " " + i + " " + (void 0 === o ? 0 : o);
              })(i)));
      }
      function St(t, n) {
        (t.min = n.min), (t.max = n.max);
      }
      function At(t, n, e) {
        return e + n * (t - e);
      }
      function Tt(t, n, e, r, i) {
        return void 0 !== i && (t = At(t, i, r)), At(t, e, r) + n;
      }
      function Vt(t, n, e, r, i) {
        void 0 === n && (n = 0),
          void 0 === e && (e = 1),
          (t.min = Tt(t.min, n, e, r, i)),
          (t.max = Tt(t.max, n, e, r, i));
      }
      function Lt(t, n) {
        var e = n.x,
          r = n.y;
        Vt(t.x, e.translate, e.scale, e.originPoint),
          Vt(t.y, r.translate, r.scale, r.originPoint);
      }
      function Bt(t, n, e, i) {
        var a = (0, r.CR)(i, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        (t.min = n.min), (t.max = n.max);
        var c = void 0 !== e[l] ? e[l] : 0.5,
          f = (0, o.CD)(n.min, n.max, c);
        Vt(t, e[s], e[u], f, e.scale);
      }
      var kt = ["x", "scaleX", "originX"],
        Rt = ["y", "scaleY", "originY"];
      function Dt(t, n, e, r, i) {
        return (
          (t = At((t -= n), 1 / e, r)), void 0 !== i && (t = At(t, 1 / i, r)), t
        );
      }
      function Mt(t, n, e) {
        var i = (0, r.CR)(e, 3),
          a = i[0],
          s = i[1],
          u = i[2];
        !(function (t, n, e, r, i) {
          void 0 === n && (n = 0),
            void 0 === e && (e = 1),
            void 0 === r && (r = 0.5);
          var a = (0, o.CD)(t.min, t.max, r) - n;
          (t.min = Dt(t.min, n, e, a, i)), (t.max = Dt(t.max, n, e, a, i));
        })(t, n[a], n[s], n[u], n.scale);
      }
      function Ot(t, n, e) {
        return (
          void 0 === n && (n = 0),
          void 0 === e && (e = 0.01),
          (0, o.TE)(t, n) < e
        );
      }
      function Ut(t) {
        return t.max - t.min;
      }
      function Ft(t, n) {
        var e,
          r = 0.5,
          i = Ut(t),
          a = Ut(n);
        return (
          a > i
            ? (r = (0, o.YD)(n.min, n.max - i, t.min))
            : i > a && (r = (0, o.YD)(t.min, t.max - a, n.min)),
          (e = r),
          (0, o.uZ)(0, 1, e)
        );
      }
      function It(t, n, e, r) {
        (t.origin = void 0 === r ? Ft(n, e) : r),
          (t.originPoint = (0, o.CD)(n.min, n.max, t.origin)),
          (t.scale = Ut(e) / Ut(n)),
          Ot(t.scale, 1, 1e-4) && (t.scale = 1),
          (t.translate = (0, o.CD)(e.min, e.max, t.origin) - t.originPoint),
          Ot(t.translate) && (t.translate = 0);
      }
      function Yt(t, n, e, r) {
        It(t.x, n.x, e.x, r), It(t.y, n.y, e.y, r);
      }
      function _t(t) {
        return [t("x"), t("y")];
      }
      function Zt(t, n) {
        return nt(
          (function (t, n) {
            var e = t.top,
              r = t.left,
              i = t.bottom,
              o = t.right;
            void 0 === n && (n = tt);
            var a = n({ x: r, y: e }),
              s = n({ x: o, y: i });
            return { top: a.y, left: a.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), n)
        );
      }
      var Xt,
        Ht = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Wt = function (t) {
          return Ht.has(t);
        },
        zt = function (t, n) {
          t.set(n, !1), t.set(n);
        },
        jt = function (t) {
          return t === s.Rx || t === s.px;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })(Xt || (Xt = {}));
      var $t = function (t, n) {
          return parseFloat(t.split(", ")[n]);
        },
        Gt = function (t, n) {
          return function (e, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return $t(o[1], n);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? $t(a[1], t) : 0;
          };
        },
        Nt = new Set(["x", "y", "z"]),
        qt = st.filter(function (t) {
          return !Nt.has(t);
        });
      var Kt = {
          width: function (t) {
            var n = t.x;
            return n.max - n.min;
          },
          height: function (t) {
            var n = t.y;
            return n.max - n.min;
          },
          top: function (t, n) {
            var e = n.top;
            return parseFloat(e);
          },
          left: function (t, n) {
            var e = n.left;
            return parseFloat(e);
          },
          bottom: function (t, n) {
            var e = t.y,
              r = n.top;
            return parseFloat(r) + (e.max - e.min);
          },
          right: function (t, n) {
            var e = t.x,
              r = n.left;
            return parseFloat(r) + (e.max - e.min);
          },
          x: Gt(4, 13),
          y: Gt(5, 14),
        },
        Qt = function (t, n, e, i) {
          void 0 === e && (e = {}),
            void 0 === i && (i = {}),
            (n = (0, r.pi)({}, n)),
            (i = (0, r.pi)({}, i));
          var o = Object.keys(n).filter(Wt),
            u = [],
            l = !1,
            c = [];
          if (
            (o.forEach(function (r) {
              var o = t.getValue(r);
              if (t.hasValue(r)) {
                var f,
                  p = e[r],
                  d = n[r],
                  h = k(p);
                if (g(d))
                  for (var v = d.length, m = null === d[0] ? 1 : 0; m < v; m++)
                    f
                      ? (0, a.k)(
                          k(d[m]) === f,
                          "All keyframes must be of the same type"
                        )
                      : ((f = k(d[m])),
                        (0, a.k)(
                          f === h || (jt(h) && jt(f)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                else f = k(d);
                if (h !== f)
                  if (jt(h) && jt(f)) {
                    var y = o.get();
                    "string" === typeof y && o.set(parseFloat(y)),
                      "string" === typeof d
                        ? (n[r] = parseFloat(d))
                        : Array.isArray(d) &&
                          f === s.px &&
                          (n[r] = d.map(parseFloat));
                  } else
                    (null === h || void 0 === h ? void 0 : h.transform) &&
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (0 === p || 0 === d)
                      ? 0 === p
                        ? o.set(f.transform(p))
                        : (n[r] = h.transform(d))
                      : (l ||
                          ((u = (function (t) {
                            var n = [];
                            return (
                              qt.forEach(function (e) {
                                var r = t.getValue(e);
                                void 0 !== r &&
                                  (n.push([e, r.get()]),
                                  r.set(e.startsWith("scale") ? 1 : 0));
                              }),
                              n.length && t.render(),
                              n
                            );
                          })(t)),
                          (l = !0)),
                        c.push(r),
                        (i[r] = void 0 !== i[r] ? i[r] : n[r]),
                        zt(o, d));
              }
            }),
            c.length)
          ) {
            var f = (function (t, n, e) {
              var r = n.getBoundingBox(),
                i = n.getComputedStyle(),
                o = i.display,
                a = {
                  top: i.top,
                  left: i.left,
                  bottom: i.bottom,
                  right: i.right,
                  transform: i.transform,
                };
              "none" === o &&
                n.setStaticValues("display", t.display || "block"),
                n.render();
              var s = n.getBoundingBox();
              return (
                e.forEach(function (e) {
                  var o = n.getValue(e);
                  zt(o, Kt[e](r, a)), (t[e] = Kt[e](s, i));
                }),
                t
              );
            })(n, t, c);
            return (
              u.length &&
                u.forEach(function (n) {
                  var e = (0, r.CR)(n, 2),
                    i = e[0],
                    o = e[1];
                  t.getValue(i).set(o);
                }),
              t.render(),
              { target: f, transitionEnd: i }
            );
          }
          return { target: n, transitionEnd: i };
        };
      function Jt(t, n, e, r) {
        return (function (t) {
          return Object.keys(t).some(Wt);
        })(n)
          ? Qt(t, n, e, r)
          : { target: n, transitionEnd: r };
      }
      var tn = function (t, n, e, i) {
          var o = (function (t, n, e) {
            var i,
              o = (0, r._T)(n, []),
              a = t.getInstance();
            if (!(a instanceof HTMLElement))
              return { target: o, transitionEnd: e };
            for (var s in (e && (e = (0, r.pi)({}, e)),
            t.forEachValue(function (t) {
              var n = t.get();
              if (gt(n)) {
                var e = xt(n, a);
                e && t.set(e);
              }
            }),
            o)) {
              var u = o[s];
              if (gt(u)) {
                var l = xt(u, a);
                l &&
                  ((o[s] = l),
                  e && ((null !== (i = e[s]) && void 0 !== i) || (e[s] = u)));
              }
            }
            return { target: o, transitionEnd: e };
          })(t, n, i);
          return Jt(t, (n = o.target), e, (i = o.transitionEnd));
        },
        nn = (function (t) {
          function n() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (
              (n.defaultConfig = {
                enableHardwareAcceleration: !0,
                allowTransformNone: !0,
              }),
              (n.style = {}),
              (n.reactStyle = {}),
              (n.vars = {}),
              (n.transform = {}),
              (n.transformOrigin = {}),
              (n.transformKeys = []),
              (n.config = n.defaultConfig),
              (n.isLayoutProjectionEnabled = !1),
              (n.layoutUpdateListeners = new c()),
              (n.layoutMeasureListeners = new c()),
              (n.viewportBoxUpdateListeners = new c()),
              (n.hasViewportBoxUpdated = !1),
              (n.targetBoxFinal = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (n.treeScale = { x: 1, y: 1 }),
              (n.prevTreeScale = { x: 1, y: 1 }),
              (n.delta = it()),
              (n.deltaFinal = it()),
              (n.deltaTransform = vt),
              (n.stopLayoutAxisAnimation = {
                x: function () {},
                y: function () {},
              }),
              (n.isTargetBoxLocked = !1),
              (n.axisProgress = { x: p(0), y: p(0) }),
              (n.updateLayoutDelta = function () {
                n.isLayoutProjectionEnabled && n.box && n.updateLayoutDeltas(),
                  n.children.forEach(en);
              }),
              n
            );
          }
          return (
            (0, r.ZT)(n, t),
            (n.prototype.removeValue = function (n) {
              t.prototype.removeValue.call(this, n),
                delete this.vars[n],
                delete this.style[n];
            }),
            (n.prototype.clean = function () {
              (this.style = {}), (this.vars = {}), (this.transform = {});
            }),
            (n.prototype.updateConfig = function (t) {
              void 0 === t && (t = {}),
                (this.config = (0, r.pi)((0, r.pi)({}, this.defaultConfig), t));
            }),
            (n.prototype.read = function (t) {
              return this.getComputedStyle()[t] || 0;
            }),
            (n.prototype.addValue = function (n, e) {
              t.prototype.addValue.call(this, n, e),
                n.startsWith("rotate") && (this.layoutOrigin = 0.5);
            }),
            (n.prototype.readNativeValue = function (t) {
              if (ct(t)) {
                var n = M(t);
                return (n && n.default) || 0;
              }
              return this.read(t);
            }),
            (n.prototype.makeTargetAnimatable = function (t, n) {
              void 0 === n && (n = !0);
              var e = t.transition,
                i = t.transitionEnd,
                o = (0, r._T)(t, ["transition", "transitionEnd"]),
                a = this.config.transformValues,
                s = z(o, e || {}, this);
              if (
                (a && (i && (i = a(i)), o && (o = a(o)), s && (s = a(s))), n)
              ) {
                H(this, o, s);
                var u = tn(this, o, s, i);
                (i = u.transitionEnd), (o = u.target);
              }
              return (0, r.pi)({ transition: e, transitionEnd: i }, o);
            }),
            (n.prototype.enableLayoutProjection = function () {
              this.isLayoutProjectionEnabled = !0;
            }),
            (n.prototype.hide = function () {
              !1 !== this.isVisible &&
                ((this.isVisible = !1), this.scheduleRender());
            }),
            (n.prototype.show = function () {
              !0 !== this.isVisible &&
                ((this.isVisible = !0), this.scheduleRender());
            }),
            (n.prototype.onLayoutUpdate = function (t) {
              return this.layoutUpdateListeners.add(t);
            }),
            (n.prototype.onLayoutMeasure = function (t) {
              return this.layoutMeasureListeners.add(t);
            }),
            (n.prototype.onViewportBoxUpdate = function (t) {
              return this.viewportBoxUpdateListeners.add(t);
            }),
            (n.prototype.layoutReady = function (t) {
              this.layoutUpdateListeners.notify(
                this.box,
                this.prevViewportBox || this.box,
                t
              );
            }),
            (n.prototype.getBoundingBox = function () {
              var t = this.config.transformPagePoint;
              return Zt(this.element, t);
            }),
            (n.prototype.getBoundingBoxWithoutTransforms = function () {
              var t,
                n,
                e = this.getBoundingBox();
              return (
                (t = e), (n = this.latest), Mt(t.x, n, kt), Mt(t.y, n, Rt), e
              );
            }),
            (n.prototype.getComputedStyle = function () {
              return window.getComputedStyle(this.element);
            }),
            (n.prototype.snapshotBoundingBox = function () {
              (this.prevViewportBox = this.getBoundingBoxWithoutTransforms()),
                this.rebaseTargetBox(!1, this.prevViewportBox);
            }),
            (n.prototype.rebaseTargetBox = function (t, n) {
              var e = this;
              void 0 === t && (t = !1), void 0 === n && (n = this.box);
              var r = this.axisProgress,
                i = r.x,
                o = r.y,
                a =
                  this.box &&
                  !this.isTargetBoxLocked &&
                  !i.isAnimating() &&
                  !o.isAnimating();
              (t || a) &&
                _t(function (t) {
                  var r = n[t],
                    i = r.min,
                    o = r.max;
                  e.setAxisTarget(t, i, o);
                });
            }),
            (n.prototype.measureLayout = function () {
              var t = this;
              (this.box = this.getBoundingBox()),
                (this.boxCorrected = et(this.box)),
                this.targetBox || (this.targetBox = et(this.box)),
                this.layoutMeasureListeners.notify(
                  this.box,
                  this.prevViewportBox || this.box
                ),
                i.ZP.update(function () {
                  return t.rebaseTargetBox();
                });
            }),
            (n.prototype.lockTargetBox = function () {
              this.isTargetBoxLocked = !0;
            }),
            (n.prototype.unlockTargetBox = function () {
              this.stopLayoutAnimation(), (this.isTargetBoxLocked = !1);
            }),
            (n.prototype.resetTransform = function () {
              var t = this.config.transformTemplate;
              (this.element.style.transform = t ? t({}, "") : "none"),
                this.scheduleRender();
            }),
            (n.prototype.setAxisTarget = function (t, n, e) {
              var r = this.targetBox[t];
              (r.min = n),
                (r.max = e),
                (this.hasViewportBoxUpdated = !0),
                this.rootParent.scheduleUpdateLayoutDelta();
            }),
            (n.prototype.startLayoutAxisAnimation = function (t, n) {
              var e,
                r = this,
                i = this.axisProgress[t],
                o = this.targetBox[t],
                a = o.min,
                s = o.max - a;
              return (
                i.clearListeners(),
                i.set(a),
                i.set(a),
                i.onChange(function (n) {
                  return r.setAxisTarget(t, n, n + s);
                }),
                null === (e = this.animateMotionValue) || void 0 === e
                  ? void 0
                  : e.call(this, t, i, 0, n)
              );
            }),
            (n.prototype.stopLayoutAnimation = function () {
              var t = this;
              _t(function (n) {
                return t.axisProgress[n].stop();
              });
            }),
            (n.prototype.updateLayoutDeltas = function () {
              var t, n, e, r, i;
              (t = this.boxCorrected),
                (n = this.box),
                St(t.x, n.x),
                St(t.y, n.y),
                this.parent &&
                  ((this.prevTreeScale.x = this.treeScale.x),
                  (this.prevTreeScale.y = this.treeScale.y),
                  (e = this.treeScale),
                  (r = this.parent.treeScale),
                  (i = this.parent.delta),
                  (e.x = r.x * i.x.scale),
                  (e.y = r.y * i.y.scale)),
                (function (t, n) {
                  for (var e = n.length, r = 0; r < e; r++) Lt(t, n[r].delta);
                })(this.boxCorrected, this.treePath),
                Yt(
                  this.delta,
                  this.boxCorrected,
                  this.targetBox,
                  this.layoutOrigin
                ),
                this.hasViewportBoxUpdated &&
                  this.viewportBoxUpdateListeners.notify(
                    this.targetBox,
                    this.delta
                  ),
                (this.hasViewportBoxUpdated = !1);
              var o = ht(this.delta, this.treeScale);
              (o === this.deltaTransform &&
                this.prevTreeScale.x === this.treeScale.x &&
                this.prevTreeScale.y === this.treeScale.y) ||
                this.scheduleRender(),
                (this.deltaTransform = o);
            }),
            (n.prototype.updateTransformDeltas = function () {
              var t, n, e;
              this.isLayoutProjectionEnabled &&
                this.box &&
                ((t = this.targetBoxFinal),
                (n = this.targetBox),
                (e = this.latest),
                Bt(t.x, n.x, e, kt),
                Bt(t.y, n.y, e, Rt),
                Yt(
                  this.deltaFinal,
                  this.boxCorrected,
                  this.targetBoxFinal,
                  this.layoutOrigin
                ));
            }),
            (n.prototype.build = function () {
              this.updateTransformDeltas(),
                void 0 !== this.isVisible &&
                  (this.style.visibility = this.isVisible
                    ? "visible"
                    : "hidden"),
                Pt(
                  this.latest,
                  this.style,
                  this.vars,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal
                );
            }),
            (n.prototype.render = function () {
              for (var t in (this.build(),
              Object.assign(this.element.style, this.style),
              this.vars))
                this.element.style.setProperty(t, this.vars[t]);
            }),
            n
          );
        })(J),
        en = function (t) {
          return t.updateLayoutDelta();
        };
      function rn(t) {
        var n = (0, u.useRef)(null);
        return null === n.current && (n.current = t()), n.current;
      }
      function on(t, n, e) {
        return "string" === typeof t ? t : s.px.transform(n + e * t);
      }
      var an = function (t, n) {
          return s.px.transform(t * n);
        },
        sn = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        un = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var ln = { x: 0, y: 0, width: 0, height: 0 };
      function cn(t, n, e, i, o, a, s, u, l, c, f, p, d, h, v) {
        var m = t.attrX,
          g = t.attrY,
          y = t.originX,
          x = t.originY,
          b = t.pathLength,
          E = t.pathSpacing,
          C = void 0 === E ? 1 : E,
          w = t.pathOffset,
          P = void 0 === w ? 0 : w;
        return (
          Pt(
            (0, r._T)(t, [
              "attrX",
              "attrY",
              "originX",
              "originY",
              "pathLength",
              "pathSpacing",
              "pathOffset",
            ]),
            i,
            e,
            o,
            a,
            s,
            u,
            f,
            p,
            d,
            h,
            v
          ),
          i.transform && ((n.transform = i.transform), delete i.transform),
          (void 0 !== y || void 0 !== x || n.transform) &&
            (n.transformOrigin = (function (t, n, e) {
              return on(n, t.x, t.width) + " " + on(e, t.y, t.height);
            })(l || ln, void 0 !== y ? y : 0.5, void 0 !== x ? x : 0.5)),
          void 0 !== m && (i.x = m),
          void 0 !== g && (i.y = g),
          void 0 !== c &&
            void 0 !== b &&
            (function (t, n, e, r, i, o) {
              void 0 === r && (r = 1),
                void 0 === i && (i = 0),
                void 0 === o && (o = !0);
              var a = o ? sn : un;
              t[a.offset] = an(-i, n);
              var s = an(e, n),
                u = an(r, n);
              t[a.array] = s + " " + u;
            })(i, c, b, C, P, !1),
          i
        );
      }
      var fn = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
        ]),
        pn = /([a-z])([A-Z])/g,
        dn = function (t) {
          return t.replace(pn, "$1-$2").toLowerCase();
        },
        hn = (function (t) {
          function n() {
            var n = (null !== t && t.apply(this, arguments)) || this;
            return (
              (n.attrs = {}),
              (n.defaultConfig = { enableHardwareAcceleration: !1 }),
              (n.config = n.defaultConfig),
              n
            );
          }
          return (
            (0, r.ZT)(n, t),
            (n.prototype.mount = function (n) {
              t.prototype.mount.call(this, n), this.measure();
            }),
            (n.prototype.measure = function () {
              try {
                this.dimensions =
                  "function" === typeof this.element.getBBox
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect();
              } catch (t) {
                this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              "path" === this.element.tagName &&
                (this.totalPathLength = this.element.getTotalLength());
            }),
            (n.prototype.clean = function () {
              t.prototype.clean.call(this), (this.attrs = {});
            }),
            (n.prototype.read = function (t) {
              return (t = fn.has(t) ? t : dn(t)), this.element.getAttribute(t);
            }),
            (n.prototype.build = function () {
              this.updateTransformDeltas(),
                cn(
                  this.latest,
                  this.style,
                  this.vars,
                  this.attrs,
                  this.transform,
                  this.transformOrigin,
                  this.transformKeys,
                  this.config,
                  this.dimensions,
                  this.totalPathLength,
                  this.isLayoutProjectionEnabled && !!this.box,
                  this.delta,
                  this.deltaFinal,
                  this.treeScale,
                  this.targetBoxFinal
                );
            }),
            (n.prototype.render = function () {
              for (var n in (t.prototype.render.call(this), this.attrs))
                this.element.setAttribute(fn.has(n) ? n : dn(n), this.attrs[n]);
            }),
            n
          );
        })(nn);
      var vn = new Set([
        "animate",
        "circle",
        "clipPath",
        "defs",
        "desc",
        "ellipse",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "filter",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "textPath",
        "tspan",
        "use",
        "view",
      ]);
      function mn(t) {
        return "string" === typeof t && vn.has(t);
      }
      var gn = (0, u.createContext)(null),
        yn = (0, u.createContext)({ variantContext: {} });
      function xn() {
        return (0, u.useContext)(yn).variantContext;
      }
      function bn() {
        return (0, u.useContext)(yn).visualElement;
      }
      var En = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "onLayoutAnimationComplete",
        "onViewportBoxUpdate",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "whileHover",
        "whileTap",
        "onHoverEnd",
        "onHoverStart",
      ]);
      function Cn(t) {
        return En.has(t);
      }
      var wn = function (t) {
        return !Cn(t);
      };
      try {
        var Pn = e(738657).Z;
        wn = function (t) {
          return t.startsWith("on") ? !Cn(t) : Pn(t);
        };
      } catch (Tr) {}
      var Sn = function (t) {
        return t instanceof f;
      };
      function An(t, n) {
        var e = n.layout,
          r = n.layoutId;
        return ct(t) || pt(t) || ((e || void 0 !== r) && !!wt[t]);
      }
      function Tn(t, n, e, r, i) {
        for (var o in (void 0 === r && (r = !1), r && (t.reactStyle = {}), e)) {
          var a = e[o],
            s = !1;
          if (Sn(a)) Bn.has(o) || (t.addValue(o, a), (s = !0));
          else if (An(o, i)) {
            if (t.hasValue(o)) {
              if (a !== n[o]) {
                if (Sn(n[o])) t.addValue(o, p(a));
                else t.getValue(o).set(a);
              }
            } else t.addValue(o, p(a));
            s = !0;
          } else r && (t.reactStyle[o] = a);
          s && (n[o] = a);
        }
      }
      var Vn,
        Ln,
        Bn = new Set([]),
        kn = function () {
          return {};
        },
        Rn = (0, u.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          features: [],
          isStatic: !1,
        });
      function Dn(t) {
        var n = t.animate,
          e = t.variants,
          r = t.inherit;
        return void 0 === r ? !!e && !n : r;
      }
      !(function (t) {
        (t[(t.Entering = 0)] = "Entering"),
          (t[(t.Present = 1)] = "Present"),
          (t[(t.Exiting = 2)] = "Exiting");
      })(Vn || (Vn = {})),
        (function (t) {
          (t[(t.Hide = 0)] = "Hide"), (t[(t.Show = 1)] = "Show");
        })(Ln || (Ln = {}));
      var Mn = {
          measureLayout: function (t) {
            return t.measureLayout();
          },
          layoutReady: function (t) {
            return t.layoutReady();
          },
        },
        On = function (t, n) {
          return t.depth - n.depth;
        };
      function Un() {
        var t = new Set();
        return {
          add: function (n) {
            return t.add(n);
          },
          flush: function (n) {
            var e = void 0 === n ? Mn : n,
              r = e.measureLayout,
              i = e.layoutReady,
              o = Array.from(t).sort(On);
            o.forEach(function (t) {
              return t.resetTransform();
            }),
              o.forEach(r),
              o.forEach(i),
              o.forEach(function (t) {
                t.isPresent && (t.presence = Vn.Present);
              }),
              t.clear();
          },
        };
      }
      function Fn(t) {
        return !!t.forceUpdate;
      }
      var In = (0, u.createContext)(Un()),
        Yn = (0, u.createContext)(Un()),
        _n = "undefined" !== typeof window ? u.useLayoutEffect : u.useEffect;
      function Zn() {
        var t = (0, u.useContext)(gn);
        if (null === t) return [!0, null];
        var n = t.isPresent,
          e = t.onExitComplete,
          r = t.register,
          i = zn();
        (0, u.useEffect)(function () {
          return r(i);
        }, []);
        return !n && e
          ? [
              !1,
              function () {
                return null === e || void 0 === e ? void 0 : e(i);
              },
            ]
          : [!0];
      }
      function Xn(t) {
        return null === t || t.isPresent;
      }
      var Hn = 0,
        Wn = function () {
          return Hn++;
        },
        zn = function () {
          return rn(Wn);
        };
      function jn(t, n) {
        void 0 === n && (n = !1);
        var e = (0, u.useRef)(!0);
        (!n || (n && e.current)) && t(), (e.current = !1);
      }
      function $n(t) {
        return "string" === typeof t || Array.isArray(t);
      }
      function Gn(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      function Nn(t, n) {
        var e = n.defaultFeatures,
          i = n.useVisualElement,
          o = n.render;
        return (0, u.forwardRef)(function (n, a) {
          var s = (0, u.useContext)(Rn).isStatic,
            l = i(t, n, s, a);
          !(function (t, n) {
            var e = rn(kn);
            for (var r in e) {
              var i = An(r, n),
                o = void 0 !== n[r],
                a = n.style && void 0 !== n.style[r],
                s = o && Sn(n[r]),
                u = a && Sn(n.style[r]);
              ((i && !o && !a) || (!i && !s && !u)) &&
                (t.removeValue(r), delete e[r]);
            }
            Tn(t, e, n, !1, n),
              n.style && Tn(t, e, n.style, !0, n),
              n.transformValues &&
                (t.reactStyle = n.transformValues(t.reactStyle));
          })(l, n);
          var c = (function (t, n, e) {
              var r,
                i,
                o = n.variants,
                a = n.initial,
                s = n.animate,
                l = n.whileTap,
                c = n.whileHover,
                f = xn(),
                p = f.parent,
                d = f.initial,
                h = f.animate,
                v = (0, u.useContext)(gn),
                m = $n(s) || $n(l) || $n(c) || Gn(s),
                g = o || m;
              !1 !==
                (a =
                  null !==
                    (r = null === v || void 0 === v ? void 0 : v.initial) &&
                  void 0 !== r
                    ? r
                    : a) ||
                Gn(s) ||
                (a = s);
              var y = (0, u.useMemo)(
                function () {
                  return {
                    parent: g ? t : p,
                    initial: $n(a) ? a : d,
                    animate: $n(s) ? s : h,
                  };
                },
                [e ? a : null]
              );
              return (
                jn(function () {
                  var n = a || d;
                  n && X(t, n);
                }, !e),
                g && !m && (null === p || void 0 === p || p.addVariantChild(t)),
                Xn(v) &&
                  (null === (i = t.variantChildrenOrder) ||
                    void 0 === i ||
                    i.clear()),
                (0, u.useEffect)(function () {
                  g &&
                    (null === p || void 0 === p || p.addVariantChildOrder(t));
                }),
                (0, u.useEffect)(function () {
                  return (
                    (t.isMounted = !0),
                    function () {
                      var n;
                      (t.isMounted = !1),
                        null ===
                          (n =
                            null === p || void 0 === p
                              ? void 0
                              : p.variantChildren) ||
                          void 0 === n ||
                          n.delete(t);
                    }
                  );
                }, []),
                jn(function () {
                  t.forEachValue(function (n, e) {
                    t.baseTarget[e] = n.get();
                  });
                }, !0),
                y
              );
            })(l, n, s),
            f = (function (t, n, e, i) {
              var o = (0, u.useContext)(Rn);
              if (n || "undefined" === typeof window) return null;
              for (
                var a = (0, r.fl)(t, o.features), s = a.length, l = [], c = 0;
                c < s;
                c++
              ) {
                var f = a[c],
                  p = f.shouldRender,
                  d = f.key,
                  h = f.getComponent;
                if (p(i)) {
                  var v = h(i);
                  v &&
                    l.push(
                      (0, u.createElement)(
                        v,
                        (0, r.pi)({ key: d }, i, {
                          visualElement: e,
                          inherit: Dn(i),
                        })
                      )
                    );
                }
              }
              return l;
            })(e, s, l, n),
            p = (0, u.useMemo)(
              function () {
                return { visualElement: l, variantContext: c };
              },
              [l, c]
            ),
            d = o(t, n, l);
          return (
            (function (t) {
              var n = (0, u.useContext)(In),
                e = (0, u.useContext)(Yn);
              _n(function () {
                return function () {
                  Fn(n) && n.remove(t), Fn(e) && e.remove(t);
                };
              }, []);
            })(l),
            (0, u.createElement)(
              u.Fragment,
              null,
              (0, u.createElement)(yn.Provider, { value: p }, d),
              f
            )
          );
        });
      }
      function qn(t) {
        var n = null;
        return function () {
          return (
            null === n &&
            ((n = t),
            function () {
              n = null;
            })
          );
        };
      }
      var Kn = qn("dragHorizontal"),
        Qn = qn("dragVertical");
      function Jn(t) {
        var n = !1;
        if ("y" === t) n = Qn();
        else if ("x" === t) n = Kn();
        else {
          var e = Kn(),
            r = Qn();
          e && r
            ? (n = function () {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return n;
      }
      function te(t, n, e, r) {
        return (
          t.addEventListener(n, e, r),
          function () {
            return t.removeEventListener(n, e, r);
          }
        );
      }
      function ne(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function ee(t) {
        return !!t.touches;
      }
      var re = { pageX: 0, pageY: 0 };
      function ie(t, n) {
        void 0 === n && (n = "page");
        var e = t.touches[0] || t.changedTouches[0] || re;
        return { x: e[n + "X"], y: e[n + "Y"] };
      }
      function oe(t, n) {
        return void 0 === n && (n = "page"), { x: t[n + "X"], y: t[n + "Y"] };
      }
      function ae(t, n) {
        return (
          void 0 === n && (n = "page"), { point: ee(t) ? ie(t, n) : oe(t, n) }
        );
      }
      function se(t) {
        return ae(t, "client");
      }
      var ue = function (t, n) {
          void 0 === n && (n = !1);
          var e,
            r = function (n) {
              return t(n, ae(n));
            };
          return n
            ? ((e = r),
              function (t) {
                var n = t instanceof MouseEvent;
                (!n || (n && 0 === t.button)) && e(t);
              })
            : r;
        },
        le = "undefined" !== typeof window,
        ce = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        fe = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function pe(t) {
        return le && null === window.onpointerdown
          ? t
          : le && null === window.ontouchstart
          ? fe[t]
          : le && null === window.onmousedown
          ? ce[t]
          : t;
      }
      function de(t, n, e, r) {
        return te(t, pe(n), ue(e, "pointerdown" === n), r);
      }
      function he(t, n, e, r) {
        return (function (t, n, e, r) {
          (0, u.useEffect)(
            function () {
              var i = t.current;
              if (e && i) return te(i, n, e, r);
            },
            [t, n, e, r]
          );
        })(t, pe(n), e && ue(e, "pointerdown" === n), r);
      }
      var ve = (function () {
        function t(t, n, e) {
          var a = this,
            s = (void 0 === e ? {} : e).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (a.lastMoveEvent && a.lastMoveEventInfo) {
                var t = ye(a.lastMoveEventInfo, a.history),
                  n = null !== a.startEvent,
                  e = (0, o.TE)(t.offset, { x: 0, y: 0 }) >= 3;
                if (n || e) {
                  var s = t.point,
                    u = (0, i.$B)().timestamp;
                  a.history.push((0, r.pi)((0, r.pi)({}, s), { timestamp: u }));
                  var l = a.handlers,
                    c = l.onStart,
                    f = l.onMove;
                  n ||
                    (c && c(a.lastMoveEvent, t),
                    (a.startEvent = a.lastMoveEvent)),
                    f && f(a.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, n) {
              (a.lastMoveEvent = t),
                (a.lastMoveEventInfo = me(n, a.transformPagePoint)),
                ne(t) && 0 === t.buttons
                  ? a.handlePointerUp(t, n)
                  : i.ZP.update(a.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, n) {
              a.end();
              var e = a.handlers.onEnd;
              if (e) {
                var r = ye(me(n, a.transformPagePoint), a.history);
                e && e(t, r);
              }
            }),
            !(ee(t) && t.touches.length > 1))
          ) {
            (this.handlers = n), (this.transformPagePoint = s);
            var u = me(ae(t), this.transformPagePoint),
              l = u.point,
              c = (0, i.$B)().timestamp;
            this.history = [(0, r.pi)((0, r.pi)({}, l), { timestamp: c })];
            var f = n.onSessionStart;
            f && f(t, ye(u, this.history)),
              (this.removeListeners = (0, o.zG)(
                de(window, "pointermove", this.handlePointerMove),
                de(window, "pointerup", this.handlePointerUp),
                de(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (t) {
            this.handlers = t;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              i.qY.update(this.updatePoint);
          }),
          t
        );
      })();
      function me(t, n) {
        return n ? { point: n(t.point) } : t;
      }
      function ge(t, n) {
        return { x: t.x - n.x, y: t.y - n.y };
      }
      function ye(t, n) {
        var e = t.point;
        return {
          point: e,
          delta: ge(e, be(n)),
          offset: ge(e, xe(n)),
          velocity: Ee(n, 0.1),
        };
      }
      function xe(t) {
        return t[0];
      }
      function be(t) {
        return t[t.length - 1];
      }
      function Ee(t, n) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var e = t.length - 1, r = null, i = be(t);
          e >= 0 && ((r = t[e]), !(i.timestamp - r.timestamp > d(n)));

        )
          e--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function Ce(t, n, e) {
        var r = n.min,
          i = n.max;
        return (
          void 0 !== r && t < r
            ? (t = e ? (0, o.CD)(r, t, e) : Math.max(t, r))
            : void 0 !== i &&
              t > i &&
              (t = e ? (0, o.CD)(i, t, e) : Math.min(t, i)),
          t
        );
      }
      function we(t, n, e) {
        return {
          min: void 0 !== n ? t.min + n : void 0,
          max: void 0 !== e ? t.max + e - (t.max - t.min) : void 0,
        };
      }
      function Pe(t, n) {
        var e,
          i = n.min - t.min,
          o = n.max - t.max;
        return (
          n.max - n.min < t.max - t.min &&
            ((i = (e = (0, r.CR)([o, i], 2))[0]), (o = e[1])),
          { min: t.min + i, max: t.min + o }
        );
      }
      var Se,
        Ae = new WeakMap(),
        Te = (function () {
          function t(t) {
            var n = t.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = n),
              this.visualElement.enableLayoutProjection(),
              Ae.set(n, this);
          }
          return (
            (t.prototype.start = function (t, n) {
              var e = this,
                r = void 0 === n ? {} : n,
                i = r.snapToCursor,
                a = void 0 !== i && i,
                s = r.cursorProgress;
              a && this.snapToCursor(t);
              var u = this.props.transformPagePoint;
              this.panSession = new ve(
                t,
                {
                  onSessionStart: function () {
                    e.stopMotion();
                  },
                  onStart: function (t, n) {
                    var r,
                      i,
                      a = e.props,
                      u = a.drag,
                      l = a.dragPropagation;
                    if (
                      !u ||
                      l ||
                      (e.openGlobalLock && e.openGlobalLock(),
                      (e.openGlobalLock = Jn(u)),
                      e.openGlobalLock)
                    ) {
                      e.prepareBoundingBox(),
                        e.visualElement.lockTargetBox(),
                        e.resolveDragConstraints();
                      var c = se(t).point;
                      _t(function (t) {
                        var n = e.visualElement.targetBox[t],
                          r = n.min,
                          i = n.max;
                        e.cursorProgress[t] = s ? s[t] : (0, o.YD)(r, i, c[t]);
                        var a = e.getAxisMotionValue(t);
                        a && (e.originPoint[t] = a.get());
                      }),
                        (e.isDragging = !0),
                        (e.currentDirection = null),
                        null === (i = (r = e.props).onDragStart) ||
                          void 0 === i ||
                          i.call(r, t, n);
                    }
                  },
                  onMove: function (t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s = e.props,
                      u = s.dragPropagation,
                      l = s.dragDirectionLock;
                    if (u || e.openGlobalLock) {
                      var c = n.offset;
                      if (l && null === e.currentDirection)
                        return (
                          (e.currentDirection = (function (t, n) {
                            void 0 === n && (n = 10);
                            var e = null;
                            Math.abs(t.y) > n
                              ? (e = "y")
                              : Math.abs(t.x) > n && (e = "x");
                            return e;
                          })(c)),
                          void (
                            null !== e.currentDirection &&
                            (null === (i = (r = e.props).onDirectionLock) ||
                              void 0 === i ||
                              i.call(r, e.currentDirection))
                          )
                        );
                      e.updateAxis("x", t, c),
                        e.updateAxis("y", t, c),
                        null === (a = (o = e.props).onDrag) ||
                          void 0 === a ||
                          a.call(o, t, n),
                        (Se = t);
                    }
                  },
                  onEnd: function (t, n) {
                    return e.stop(t, n);
                  },
                },
                { transformPagePoint: u }
              );
            }),
            (t.prototype.prepareBoundingBox = function () {
              var t = this.visualElement.getInstance(),
                n = t.style.transform;
              this.visualElement.resetTransform(),
                this.visualElement.measureLayout(),
                (t.style.transform = n),
                this.visualElement.rebaseTargetBox(
                  !0,
                  this.visualElement.getBoundingBoxWithoutTransforms()
                );
            }),
            (t.prototype.resolveDragConstraints = function () {
              var t = this,
                n = this.props.dragConstraints;
              (this.constraints =
                !!n &&
                (l(n)
                  ? this.resolveRefConstraints(this.visualElement.box, n)
                  : (function (t, n) {
                      var e = n.top,
                        r = n.left,
                        i = n.bottom,
                        o = n.right;
                      return { x: we(t.x, r, o), y: we(t.y, e, i) };
                    })(this.visualElement.box, n))),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  _t(function (n) {
                    t.getAxisMotionValue(n) &&
                      (t.constraints[n] = (function (t, n) {
                        var e = {};
                        return (
                          void 0 !== n.min && (e.min = n.min - t.min),
                          void 0 !== n.max && (e.max = n.max - t.min),
                          e
                        );
                      })(t.visualElement.box[n], t.constraints[n]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function (t, n) {
              var e = this.props,
                r = e.onMeasureDragConstraints,
                i = e.transformPagePoint,
                o = n.current;
              (0, a.k)(
                null !== o,
                "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
              ),
                (this.constraintsBox = Zt(o, i));
              var s = (function (t, n) {
                return { x: Pe(t.x, n.x), y: Pe(t.y, n.y) };
              })(t, this.constraintsBox);
              if (r) {
                var u = r(
                  (function (t) {
                    var n = t.x,
                      e = t.y;
                    return {
                      top: e.min,
                      bottom: e.max,
                      left: n.min,
                      right: n.max,
                    };
                  })(s)
                );
                (this.hasMutatedConstraints = !!u), u && (s = nt(u));
              }
              return s;
            }),
            (t.prototype.cancelDrag = function () {
              (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null));
            }),
            (t.prototype.stop = function (t, n) {
              var e;
              this.visualElement.unlockTargetBox(),
                null === (e = this.panSession) || void 0 === e || e.end(),
                (this.panSession = null);
              var r = this.isDragging;
              if ((this.cancelDrag(), r)) {
                var i = this.props,
                  o = i.dragMomentum,
                  a = i.dragElastic,
                  s = i.onDragEnd;
                if (o || a) {
                  var u = n.velocity;
                  this.animateDragEnd(u);
                }
                null === s || void 0 === s || s(t, n);
              }
            }),
            (t.prototype.snapToCursor = function (t) {
              var n = this;
              this.prepareBoundingBox(),
                _t(function (e) {
                  var r = n.getAxisMotionValue(e);
                  if (r) {
                    var i = se(t).point,
                      o = n.visualElement.box,
                      a = o[e].max - o[e].min,
                      s = o[e].min + a / 2,
                      u = i[e] - s;
                    (n.originPoint[e] = i[e]), r.set(u);
                  } else (n.cursorProgress[e] = 0.5), n.updateVisualElementAxis(e, t);
                });
            }),
            (t.prototype.updateAxis = function (t, n, e) {
              if (Ve(t, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(t)
                  ? this.updateAxisMotionValue(t, e)
                  : this.updateVisualElementAxis(t, n);
            }),
            (t.prototype.updateAxisMotionValue = function (t, n) {
              var e = this.getAxisMotionValue(t);
              if (n && e) {
                var r = this.props.dragElastic,
                  i = this.originPoint[t] + n[t],
                  o = this.constraints ? Ce(i, this.constraints[t], r) : i;
                e.set(o);
              }
            }),
            (t.prototype.updateVisualElementAxis = function (t, n) {
              var e,
                r = this.props.dragElastic,
                i = this.visualElement.box[t],
                o = i.max - i.min,
                a = this.cursorProgress[t],
                s = (function (t, n, e, r, i) {
                  var o = t - n * e;
                  return r ? Ce(o, r, i) : o;
                })(
                  se(n).point[t],
                  o,
                  a,
                  null === (e = this.constraints) || void 0 === e
                    ? void 0
                    : e[t],
                  r
                );
              this.visualElement.setAxisTarget(t, s, s + o);
            }),
            (t.prototype.updateProps = function (t) {
              var n = t.drag,
                e = void 0 !== n && n,
                i = t.dragDirectionLock,
                o = void 0 !== i && i,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                f = void 0 === c ? 0.35 : c,
                p = t.dragMomentum,
                d = void 0 === p || p,
                h = (0, r._T)(t, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum",
                ]);
              this.props = (0, r.pi)(
                {
                  drag: e,
                  dragDirectionLock: o,
                  dragPropagation: s,
                  dragConstraints: l,
                  dragElastic: f,
                  dragMomentum: d,
                },
                h
              );
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var n = this.props,
                e = n.layout,
                r = n.layoutId,
                i = "_drag" + t.toUpperCase();
              return this.props[i]
                ? this.props[i]
                : e || void 0 !== r
                ? void 0
                : this.visualElement.getValue(t, 0);
            }),
            (t.prototype.animateDragEnd = function (t) {
              var n = this,
                e = this.props,
                i = e.drag,
                o = e.dragMomentum,
                a = e.dragElastic,
                s = e.dragTransition,
                u = _t(function (e) {
                  if (Ve(e, i, n.currentDirection)) {
                    var u = n.constraints ? n.constraints[e] : {},
                      l = a ? 200 : 1e6,
                      c = a ? 40 : 1e7,
                      f = (0, r.pi)(
                        (0, r.pi)(
                          {
                            type: "inertia",
                            velocity: o ? t[e] : 0,
                            bounceStiffness: l,
                            bounceDamping: c,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        u
                      );
                    return n.getAxisMotionValue(e)
                      ? n.startAxisValueAnimation(e, f)
                      : n.visualElement.startLayoutAxisAnimation(e, f);
                  }
                });
              return Promise.all(u).then(function () {
                var t, e;
                null === (e = (t = n.props).onDragTransitionEnd) ||
                  void 0 === e ||
                  e.call(t);
              });
            }),
            (t.prototype.stopMotion = function () {
              var t = this;
              _t(function (n) {
                var e = t.getAxisMotionValue(n);
                e ? e.stop() : t.visualElement.stopLayoutAnimation();
              });
            }),
            (t.prototype.startAxisValueAnimation = function (t, n) {
              var e = this.getAxisMotionValue(t);
              if (e) {
                var r = e.get();
                return e.set(r), e.set(r), S(t, e, 0, n);
              }
            }),
            (t.prototype.scalePoint = function () {
              var t = this,
                n = this.props,
                e = n.drag,
                r = n.dragConstraints;
              if (l(r) && this.constraintsBox) {
                this.stopMotion();
                var i = { x: 0, y: 0 };
                _t(function (n) {
                  i[n] = Ft(t.visualElement.targetBox[n], t.constraintsBox[n]);
                }),
                  this.prepareBoundingBox(),
                  this.resolveDragConstraints(),
                  _t(function (n) {
                    if (Ve(n, e, null)) {
                      var r = (function (t, n, e) {
                          var r = t.max - t.min,
                            i = (0, o.CD)(n.min, n.max - r, e);
                          return { min: i, max: i + r };
                        })(
                          t.visualElement.targetBox[n],
                          t.constraintsBox[n],
                          i[n]
                        ),
                        a = r.min,
                        s = r.max;
                      t.visualElement.setAxisTarget(n, a, s);
                    }
                  });
              }
            }),
            (t.prototype.mount = function (t) {
              var n = this,
                e = de(t.getInstance(), "pointerdown", function (t) {
                  var e = n.props,
                    r = e.drag,
                    i = e.dragListener;
                  r && (void 0 === i || i) && n.start(t);
                }),
                r = te(window, "resize", function () {
                  n.scalePoint();
                }),
                i = t.onLayoutUpdate(function () {
                  n.isDragging && n.resolveDragConstraints();
                }),
                o = t.prevSnapshot;
              return (
                (null === o || void 0 === o ? void 0 : o.isDragging) &&
                  this.start(Se, { cursorProgress: o.cursorProgress }),
                function () {
                  null === e || void 0 === e || e(),
                    null === r || void 0 === r || r(),
                    null === i || void 0 === i || i(),
                    n.cancelDrag();
                }
              );
            }),
            t
          );
        })();
      function Ve(t, n, e) {
        return (!0 === n || n === t) && (null === e || e === t);
      }
      var Le = function (t) {
          return function (n) {
            return t(n), null;
          };
        },
        Be = Le(function (t) {
          var n = t.visualElement;
          return (function (t, n) {
            var e = t.dragControls,
              i = (0, u.useContext)(Rn).transformPagePoint,
              o = rn(function () {
                return new Te({ visualElement: n });
              });
            o.updateProps(
              (0, r.pi)((0, r.pi)({}, t), { transformPagePoint: i })
            ),
              (0, u.useEffect)(
                function () {
                  return e && e.subscribe(o);
                },
                [o]
              ),
              (0, u.useEffect)(function () {
                return o.mount(n);
              }, []);
          })((0, r._T)(t, ["visualElement"]), n);
        }),
        ke = {
          key: "drag",
          shouldRender: function (t) {
            return !!t.drag || !!t.dragControls;
          },
          getComponent: function () {
            return Be;
          },
        };
      function Re(t) {
        return (0, u.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var De = function (t, n) {
          return !!n && (t === n || De(t, n.parentElement));
        },
        Me = ["whileHover", "whileTap", "whileDrag"],
        Oe = function (t) {
          return Me.indexOf(t) + 1;
        },
        Ue = Oe("whileTap");
      var Fe = Oe("whileHover"),
        Ie = function (t) {
          return function (n, e) {
            ne(n) && t(n, e);
          };
        };
      function Ye(t, n) {
        !(function (t, n) {
          var e = t.onPan,
            r = t.onPanStart,
            i = t.onPanEnd,
            o = t.onPanSessionStart,
            a = e || r || i || o,
            s = (0, u.useRef)(null),
            l = (0, u.useContext)(Rn).transformPagePoint,
            c = {
              onSessionStart: o,
              onStart: r,
              onMove: e,
              onEnd: function (t, n) {
                (s.current = null), i && i(t, n);
              },
            };
          (0, u.useEffect)(function () {
            null !== s.current && s.current.updateHandlers(c);
          }),
            he(
              n,
              "pointerdown",
              a &&
                function (t) {
                  s.current = new ve(t, c, { transformPagePoint: l });
                }
            ),
            Re(function () {
              return s.current && s.current.end();
            });
        })(t, n),
          (function (t, n) {
            var e = t.onTap,
              r = t.onTapStart,
              i = t.onTapCancel,
              a = t.whileTap,
              s = e || r || i || a,
              l = (0, u.useRef)(!1),
              c = (0, u.useRef)(null);
            function f() {
              var t;
              null === (t = c.current) || void 0 === t || t.call(c),
                (c.current = null);
            }
            a && N(n, a, Ue);
            var p = (0, u.useRef)(null);
            (p.current = function (t, r) {
              var o = n.getInstance();
              if ((f(), l.current && o)) {
                (l.current = !1), a && K(n, Ue);
                var s = Jn(!0);
                s &&
                  (s(),
                  De(o, t.target)
                    ? null === e || void 0 === e || e(t, r)
                    : null === i || void 0 === i || i(t, r));
              }
            }),
              he(
                n,
                "pointerdown",
                s
                  ? function (t, e) {
                      f(),
                        (c.current = (0, o.zG)(
                          de(window, "pointerup", function (t, n) {
                            var e;
                            return null === (e = p.current) || void 0 === e
                              ? void 0
                              : e.call(p, t, n);
                          }),
                          de(window, "pointercancel", function (t, n) {
                            var e;
                            return null === (e = p.current) || void 0 === e
                              ? void 0
                              : e.call(p, t, n);
                          })
                        )),
                        n.getInstance() &&
                          !l.current &&
                          ((l.current = !0),
                          null === r || void 0 === r || r(t, e),
                          a && q(n, Ue));
                    }
                  : void 0
              ),
              Re(f);
          })(t, n),
          (function (t, n) {
            var e = t.whileHover,
              r = t.onHoverStart,
              i = t.onHoverEnd;
            e && N(n, e, Fe),
              he(
                n,
                "pointerenter",
                Ie(function (t, i) {
                  null === r || void 0 === r || r(t, i), e && q(n, Fe);
                })
              ),
              he(
                n,
                "pointerleave",
                Ie(function (t, r) {
                  null === i || void 0 === i || i(t, r), e && K(n, Fe);
                })
              );
          })(t, n);
      }
      var _e = [
          "onPan",
          "onPanStart",
          "onPanEnd",
          "onPanSessionStart",
          "onTap",
          "onTapStart",
          "onTapCancel",
          "whileTap",
          "whileHover",
          "onHoverStart",
          "onHoverEnd",
        ],
        Ze = Le(function (t) {
          var n = t.visualElement;
          Ye((0, r._T)(t, ["visualElement"]), n);
        }),
        Xe = {
          key: "gestures",
          shouldRender: function (t) {
            return _e.some(function (n) {
              return t.hasOwnProperty(n);
            });
          },
          getComponent: function () {
            return Ze;
          },
        },
        He = (function () {
          function t() {
            (this.hasMounted = !1),
              (this.pendingAnimations = []),
              (this.subscribers = new Set());
          }
          return (
            (t.prototype.subscribe = function (t) {
              var n = this;
              return (
                this.subscribers.add(t),
                function () {
                  return n.subscribers.delete(t);
                }
              );
            }),
            (t.prototype.start = function (t, n) {
              var e = this;
              if (this.hasMounted) {
                var r = [];
                return (
                  this.subscribers.forEach(function (e) {
                    var i = j(e, t, { transitionOverride: n });
                    r.push(i);
                  }),
                  Promise.all(r)
                );
              }
              return new Promise(function (r) {
                e.pendingAnimations.push({ animation: [t, n], resolve: r });
              });
            }),
            (t.prototype.set = function (t) {
              return (
                (0, a.k)(
                  this.hasMounted,
                  "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
                ),
                this.subscribers.forEach(function (n) {
                  X(n, t);
                })
              );
            }),
            (t.prototype.stop = function () {
              this.subscribers.forEach(function (t) {
                !(function (t) {
                  t.forEachValue(function (t) {
                    return t.stop();
                  });
                })(t);
              });
            }),
            (t.prototype.mount = function () {
              var t = this;
              (this.hasMounted = !0),
                this.pendingAnimations.forEach(function (n) {
                  var e = n.animation,
                    i = n.resolve;
                  t.start.apply(t, (0, r.fl)(e)).then(i);
                });
            }),
            (t.prototype.unmount = function () {
              (this.hasMounted = !1), this.stop();
            }),
            t
          );
        })(),
        We = Le(function (t) {
          var n = t.animate,
            e = t.exit,
            i = t.visualElement,
            o = (0, r.CR)(Zn(), 2),
            a = o[0],
            s = o[1],
            l = (0, u.useContext)(gn),
            c = (0, u.useRef)(!1),
            f =
              void 0 !== (null === l || void 0 === l ? void 0 : l.custom)
                ? l.custom
                : t.custom;
          (0, u.useEffect)(
            function () {
              a
                ? !c.current ||
                  !n ||
                  "boolean" === typeof n ||
                  n instanceof He ||
                  j(i, n)
                : (!c.current && e && j(i, e, { custom: f }).then(s),
                  (c.current = !0)),
                a && (c.current = !1);
            },
            [n, f, e, a, s, t]
          );
        }),
        ze = {
          key: "exit",
          shouldRender: function (t) {
            return !!t.exit && !Dn(t);
          },
          getComponent: function () {
            return We;
          },
        };
      function je(t, n) {
        void 0 === n && (n = !1);
        t.transition;
        var e = t.transitionEnd,
          i = (0, r._T)(t, ["transition", "transitionEnd"]);
        return n ? (0, r.pi)((0, r.pi)({}, i), e) : i;
      }
      var $e = function (t) {
        var n,
          e = t instanceof f ? t.get() : t;
        return Array.from(new Set((n = e) ? (Array.isArray(n) ? n : [n]) : []));
      };
      var Ge = {
          shouldRender: function (t) {
            return void 0 !== t.animate && !F(t.animate) && !Gn(t.animate);
          },
          Component: Le(function (t) {
            var n = t.animate;
            return (function (t, n, e) {
              var i = (0, u.useRef)(!0),
                o = (0, u.useRef)(null);
              o.current || (o.current = je(n, !0)),
                (0, u.useEffect)(
                  function () {
                    var a,
                      s,
                      u = {},
                      l = je(n),
                      c = je(n, !0);
                    for (var f in l) {
                      var p =
                          i.current &&
                          (!t.hasValue(f) || t.getValue(f).get() !== c[f]),
                        d = null !== c[f],
                        h =
                          ((a = o.current[f]),
                          void 0 !== (s = c[f]) &&
                            (Array.isArray(a) && Array.isArray(s)
                              ? !(function (t, n) {
                                  if (null === n) return !1;
                                  var e = n.length;
                                  if (e !== t.length) return !1;
                                  for (var r = 0; r < e; r++)
                                    if (n[r] !== t[r]) return !1;
                                  return !0;
                                })(s, a)
                              : a !== s));
                      d && (h || p) && (u[f] = l[f]);
                    }
                    (i.current = !1),
                      (o.current = (0, r.pi)((0, r.pi)({}, o.current), c)),
                      Object.keys(u).length &&
                        j(
                          t,
                          (0, r.pi)((0, r.pi)({}, u), {
                            transition: n.transition || e,
                            transitionEnd: n.transitionEnd,
                          })
                        );
                  },
                  [n]
                );
            })(t.visualElement, n, t.transition);
          }),
        },
        Ne = {
          shouldRender: function (t) {
            return (t.variants && !Gn(t.animate)) || F(t.animate);
          },
          Component: Le(function (t) {
            var n = t.animate,
              e = t.inherit,
              r = void 0 === e || e;
            return (function (t, n, e, r) {
              var i,
                o = $e(e),
                a = xn(),
                s =
                  null === (i = a.parent) || void 0 === i
                    ? void 0
                    : i.isMounted,
                l = (0, u.useRef)(!1);
              (0, u.useEffect)(
                function () {
                  var e,
                    i,
                    u = !1;
                  r
                    ? ((u = !!s), (o = $e(a.animate)))
                    : (u =
                        l.current ||
                        ((e = $e(n)), (i = o), e.join(",") !== i.join(","))),
                    u && j(t, o),
                    (l.current = !0);
                },
                [o.join(",")]
              );
            })(t.visualElement, t.initial, n, r);
          }),
        },
        qe = {
          shouldRender: function (t) {
            return Gn(t.animate);
          },
          Component: Le(function (t) {
            var n = t.animate;
            return (function (t, n) {
              var e = (0, u.useMemo)(
                function () {
                  return n.subscribe(t);
                },
                [n]
              );
              Re(function () {
                return null === e || void 0 === e ? void 0 : e();
              });
            })(t.visualElement, n);
          }),
        },
        Ke = {
          key: "animation",
          shouldRender: function () {
            return !0;
          },
          getComponent: function (t) {
            return Ge.shouldRender(t)
              ? Ge.Component
              : Ne.shouldRender(t)
              ? Ne.Component
              : qe.shouldRender(t)
              ? qe.Component
              : void 0;
          },
        };
      var Qe = (function (t) {
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (
            (n.frameTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
            (n.stopAxisAnimation = { x: void 0, y: void 0 }),
            (n.animate = function (t, e, i) {
              void 0 === i && (i = {});
              var o = i.originBox,
                a = i.targetBox,
                s = i.visibilityAction,
                u = i.shouldStackAnimate,
                l = (0, r._T)(i, [
                  "originBox",
                  "targetBox",
                  "visibilityAction",
                  "shouldStackAnimate",
                ]),
                c = n.props,
                f = c.visualElement,
                p = c.layout;
              if (!1 === u) return n.safeToRemove();
              var d = tr((e = o || e), (t = a || t)),
                h = _t(function (r) {
                  if ("position" === p) {
                    var i = t[r].max - t[r].min;
                    e[r].max = e[r].min + i;
                  }
                  if (!f.isTargetBoxLocked)
                    return void 0 === s
                      ? d
                        ? n.animateAxis(r, t[r], e[r], l)
                        : f.setAxisTarget(r, t[r].min, t[r].max)
                      : void (s === Ln.Hide ? f.hide() : f.show());
                });
              return (
                f.render(),
                Promise.all(h).then(function () {
                  var t, e;
                  null === (e = (t = n.props).onLayoutAnimationComplete) ||
                    void 0 === e ||
                    e.call(t),
                    f.isPresent ? (f.presence = Vn.Present) : n.safeToRemove();
                })
              );
            }),
            n
          );
        }
        return (
          (0, r.ZT)(n, t),
          (n.prototype.componentDidMount = function () {
            var t = this,
              n = this.props.visualElement;
            (n.animateMotionValue = S),
              n.enableLayoutProjection(),
              (this.unsubLayoutReady = n.onLayoutUpdate(this.animate)),
              n.updateConfig(
                (0, r.pi)((0, r.pi)({}, n.config), {
                  safeToRemove: function () {
                    return t.safeToRemove();
                  },
                })
              );
          }),
          (n.prototype.componentWillUnmount = function () {
            var t = this;
            this.unsubLayoutReady(),
              _t(function (n) {
                var e, r;
                return null === (r = (e = t.stopAxisAnimation)[n]) ||
                  void 0 === r
                  ? void 0
                  : r.call(e);
              });
          }),
          (n.prototype.animateAxis = function (t, n, e, r) {
            var i,
              a,
              s = void 0 === r ? {} : r,
              u = s.transition,
              l = s.crossfadeOpacity;
            null === (a = (i = this.stopAxisAnimation)[t]) ||
              void 0 === a ||
              a.call(i);
            var c,
              f = this.props.visualElement,
              p = this.frameTarget[t],
              d = f.axisProgress[t];
            d.clearListeners(),
              d.set(0),
              d.set(0),
              l && ((c = this.createCrossfadeAnimation(l)), f.show());
            var h = function () {
              var r = d.get() / 1e3;
              !(function (t, n, e, r) {
                (t.min = (0, o.CD)(n.min, e.min, r)),
                  (t.max = (0, o.CD)(n.max, e.max, r));
              })(p, e, n, r),
                f.setAxisTarget(t, p.min, p.max),
                null === c || void 0 === c || c(r);
            };
            h(), f.updateLayoutDelta();
            var v = d.onChange(h),
              m = S(
                "x" === t ? "layoutX" : "layoutY",
                d,
                1e3,
                u || this.props.transition || er
              ).then(v);
            return (
              (this.stopAxisAnimation[t] = function () {
                d.stop(), v();
              }),
              m
            );
          }),
          (n.prototype.createCrossfadeAnimation = function (t) {
            var n = this.props.visualElement.getValue("opacity", 0);
            return function (e) {
              n.set(ir((0, o.CD)(0, 1, e))), t.set(or((0, o.CD)(1, 0, e)));
            };
          }),
          (n.prototype.safeToRemove = function () {
            var t, n;
            null === (n = (t = this.props).safeToRemove) ||
              void 0 === n ||
              n.call(t);
          }),
          (n.prototype.render = function () {
            return null;
          }),
          n
        );
      })(u.Component);
      function Je(t) {
        var n = (0, r.CR)(Zn(), 2)[1];
        return (0, u.createElement)(Qe, (0, r.pi)({}, t, { safeToRemove: n }));
      }
      function tr(t, n) {
        return nr(t.x, n.x) || nr(t.y, n.y);
      }
      function nr(t, n) {
        return t.min !== n.min || t.max !== n.max;
      }
      var er = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function rr(t, n, e) {
        return function (r) {
          return r < t ? 0 : r > n ? 1 : e((0, o.YD)(t, n, r));
        };
      }
      var ir = rr(0, 0.5, o.Bn),
        or = rr(0.5, 0.95, o.GE),
        ar = {
          key: "animate-layout",
          shouldRender: function (t) {
            return !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return Je;
          },
        },
        sr = (function (t) {
          function n() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, r.ZT)(n, t),
            (n.prototype.componentDidMount = function () {
              var t = this.props,
                n = t.syncLayout,
                e = t.framerSyncLayout,
                r = t.visualElement;
              Fn(n) && n.register(r), Fn(e) && e.register(r);
            }),
            (n.prototype.getSnapshotBeforeUpdate = function () {
              var t = this.props,
                n = t.syncLayout,
                e = t.visualElement;
              return (
                Fn(n) ? n.syncUpdate() : (e.snapshotBoundingBox(), n.add(e)),
                null
              );
            }),
            (n.prototype.componentDidUpdate = function () {
              var t = this.props,
                n = t.syncLayout,
                e = t.visualElement;
              Fn(n) || n.flush(), e.rebaseTargetBox();
            }),
            (n.prototype.render = function () {
              return null;
            }),
            n
          );
        })(u.Component);
      function ur(t) {
        var n = (0, u.useContext)(In),
          e = (0, u.useContext)(Yn);
        return u.createElement(
          sr,
          (0, r.pi)({}, t, { syncLayout: n, framerSyncLayout: e })
        );
      }
      var lr = {
          key: "measure-layout",
          shouldRender: function (t) {
            return !!t.drag || !!t.layout || !!t.layoutId;
          },
          getComponent: function () {
            return ur;
          },
        },
        cr = [lr, Ke, ke, Xe, ze, ar],
        fr = {
          useVisualElement: function (t, n, e, i) {
            var o = bn(),
              a = rn(function () {
                return new (mn(t) ? hn : nn)(o, i);
              });
            a.updateConfig(
              (0, r.pi)(
                (0, r.pi)((0, r.pi)({}, a.config), {
                  enableHardwareAcceleration: !e,
                }),
                n
              )
            ),
              (a.layoutId = n.layoutId);
            var s = (0, u.useContext)(gn),
              l = null === s || s.isPresent;
            a.isPresent = void 0 !== n.isPresent ? n.isPresent : l;
            var c = null === s || void 0 === s ? void 0 : s.id;
            return (
              (a.isPresenceRoot = !o || o.presenceId !== c),
              (0, u.useEffect)(
                function () {
                  if (n.onViewportBoxUpdate)
                    return a.onViewportBoxUpdate(n.onViewportBoxUpdate);
                },
                [n.onViewportBoxUpdate]
              ),
              a
            );
          },
          render: function (t, n, e) {
            var i =
              "string" === typeof t
                ? (function (t) {
                    var n = {};
                    for (var e in t) wn(e) && (n[e] = t[e]);
                    return n;
                  })(n)
                : n;
            e.clean(), e.build();
            var o = mn(t)
              ? (function (t) {
                  return (0, r.pi)((0, r.pi)({}, t.attrs), {
                    style: (0, r.pi)({}, t.reactStyle),
                  });
                })(e)
              : (function (t, n) {
                  var e = n.drag,
                    i = {
                      style: (0, r.pi)(
                        (0, r.pi)((0, r.pi)({}, t.reactStyle), t.style),
                        t.vars
                      ),
                    };
                  return (
                    e &&
                      ((i.draggable = !1),
                      (i.style.userSelect = "none"),
                      (i.style.touchAction =
                        !0 === e ? "none" : "pan-" + ("x" === e ? "y" : "x"))),
                    i
                  );
                })(e, n);
            return (0, u.createElement)(
              t,
              (0, r.pi)((0, r.pi)((0, r.pi)({}, i), { ref: e.ref }), o)
            );
          },
        };
      function pr(t) {
        var n = (0, r.pi)((0, r.pi)({}, fr), { defaultFeatures: t });
        var e = new Map();
        return new Proxy(
          {
            custom: function (t) {
              return Nn(t, n);
            },
          },
          {
            get: function (t, r) {
              return "custom" === r
                ? t.custom
                : (e.has(r) || e.set(r, Nn(r, n)), e.get(r));
            },
          }
        );
      }
      var dr = pr(cr);
      var hr = 0;
      function vr() {
        var t = hr;
        return hr++, t;
      }
      var mr = function (t) {
        var n = t.children,
          e = t.initial,
          r = t.isPresent,
          i = t.onExitComplete,
          o = t.custom,
          a = t.presenceAffectsLayout,
          s = rn(gr),
          l = rn(vr),
          c = (0, u.useMemo)(
            function () {
              return {
                id: l,
                initial: e,
                isPresent: r,
                custom: o,
                onExitComplete: function (t) {
                  s.set(t, !0);
                  var n = !0;
                  s.forEach(function (t) {
                    t || (n = !1);
                  }),
                    n && (null === i || void 0 === i || i());
                },
                register: function (t) {
                  return (
                    s.set(t, !1),
                    function () {
                      return s.delete(t);
                    }
                  );
                },
              };
            },
            a ? void 0 : [r]
          );
        return (
          (0, u.useMemo)(
            function () {
              s.forEach(function (t, n) {
                return s.set(n, !1);
              });
            },
            [r]
          ),
          (0, u.createElement)(gn.Provider, { value: c }, n)
        );
      };
      function gr() {
        return new Map();
      }
      function yr(t) {
        return t.key || "";
      }
      var xr = function (t) {
        var n = t.children,
          e = t.custom,
          i = t.initial,
          o = void 0 === i || i,
          a = t.onExitComplete,
          s = t.exitBeforeEnter,
          l = t.presenceAffectsLayout,
          c = void 0 === l || l,
          f = (function () {
            var t = (0, u.useRef)(!1),
              n = (0, r.CR)((0, u.useState)(0), 2),
              e = n[0],
              i = n[1];
            return (
              Re(function () {
                return (t.current = !0);
              }),
              (0, u.useCallback)(
                function () {
                  !t.current && i(e + 1);
                },
                [e]
              )
            );
          })(),
          p = (0, u.useContext)(In);
        Fn(p) && (f = p.forceUpdate);
        var d = (0, u.useRef)(!0),
          h = (function (t) {
            var n = [];
            return (
              u.Children.forEach(t, function (t) {
                (0, u.isValidElement)(t) && n.push(t);
              }),
              n
            );
          })(n),
          v = (0, u.useRef)(h),
          m = (0, u.useRef)(new Map()).current,
          g = (0, u.useRef)(new Set()).current;
        if (
          ((function (t, n) {
            t.forEach(function (t) {
              var e = yr(t);
              n.set(e, t);
            });
          })(h, m),
          d.current)
        )
          return (
            (d.current = !1),
            (0, u.createElement)(
              u.Fragment,
              null,
              h.map(function (t) {
                return (0,
                u.createElement)(mr, { key: yr(t), isPresent: !0, initial: !!o && void 0, presenceAffectsLayout: c }, t);
              })
            )
          );
        for (
          var y = (0, r.fl)(h),
            x = v.current.map(yr),
            b = h.map(yr),
            E = x.length,
            C = 0;
          C < E;
          C++
        ) {
          var w = x[C];
          -1 === b.indexOf(w) ? g.add(w) : g.delete(w);
        }
        return (
          s && g.size && (y = []),
          g.forEach(function (t) {
            if (-1 === b.indexOf(t)) {
              var n = m.get(t);
              if (n) {
                var r = x.indexOf(t);
                y.splice(
                  r,
                  0,
                  (0, u.createElement)(
                    mr,
                    {
                      key: yr(n),
                      isPresent: !1,
                      onExitComplete: function () {
                        m.delete(t), g.delete(t);
                        var n = v.current.findIndex(function (n) {
                          return n.key === t;
                        });
                        v.current.splice(n, 1),
                          g.size || ((v.current = h), f(), a && a());
                      },
                      custom: e,
                      presenceAffectsLayout: c,
                    },
                    n
                  )
                );
              }
            }
          }),
          (y = y.map(function (t) {
            var n = t.key;
            return g.has(n)
              ? t
              : (0, u.createElement)(
                  mr,
                  { key: yr(t), isPresent: !0, presenceAffectsLayout: c },
                  t
                );
          })),
          (v.current = y),
          (0, u.createElement)(
            u.Fragment,
            null,
            g.size
              ? y
              : y.map(function (t) {
                  return (0, u.cloneElement)(t);
                })
          )
        );
      };
      function br(t, n) {
        return n && t !== n.lead
          ? { visibilityAction: Ln.Hide }
          : n &&
            t.presence !== Vn.Entering &&
            t === n.lead &&
            n.lead !== n.prevLead
          ? { visibilityAction: Ln.Show }
          : (t.presence === Vn.Entering
              ? (e = null === n || void 0 === n ? void 0 : n.getFollowOrigin())
              : t.presence === Vn.Exiting &&
                (r = null === n || void 0 === n ? void 0 : n.getFollowTarget()),
            { originBox: e, targetBox: r });
        var e, r;
      }
      function Er(t, n) {
        var e,
          r,
          i,
          o = {},
          a = n && n.lead,
          s = null === a || void 0 === a ? void 0 : a.presence;
        return (
          n && t === a
            ? t.presence === Vn.Entering
              ? (o.originBox = n.getFollowOrigin())
              : t.presence === Vn.Exiting && (o.targetBox = n.getFollowTarget())
            : n &&
              t === n.follow &&
              ((o.transition = n.getLeadTransition()),
              s === Vn.Entering
                ? (o.targetBox = n.getLeadTarget())
                : s === Vn.Exiting && (o.originBox = n.getLeadOrigin())),
          (null === (e = null === n || void 0 === n ? void 0 : n.follow) ||
          void 0 === e
            ? void 0
            : e.isPresenceRoot) ||
          (null === a || void 0 === a ? void 0 : a.isPresenceRoot)
            ? (n && t !== a
                ? n && t === n.follow
                  ? a &&
                    s !== Vn.Entering &&
                    s === Vn.Exiting &&
                    (o.crossfadeOpacity =
                      null ===
                        (i = null === n || void 0 === n ? void 0 : n.lead) ||
                      void 0 === i
                        ? void 0
                        : i.getValue("opacity", 1))
                  : (o.visibilityAction = Ln.Hide)
                : t.presence === Vn.Entering &&
                  (o.crossfadeOpacity =
                    null ===
                      (r = null === n || void 0 === n ? void 0 : n.follow) ||
                    void 0 === r
                      ? void 0
                      : r.getValue("opacity", 0)),
              o)
            : o
        );
      }
      var Cr = (function () {
        function t() {
          (this.order = []), (this.hasChildren = !1);
        }
        return (
          (t.prototype.add = function (t) {
            var n;
            if ((this.order.push(t), this.snapshot)) {
              (t.prevSnapshot = this.snapshot),
                (t.prevViewportBox = this.snapshot.boundingBox);
              var e = this.snapshot.latestMotionValues;
              for (var r in e)
                t.hasValue(r)
                  ? null === (n = t.getValue(r)) || void 0 === n || n.set(e[r])
                  : t.addValue(r, p(e[r]));
            }
            this.hasChildren = !0;
          }),
          (t.prototype.remove = function (t) {
            var n = this.order.findIndex(function (n) {
              return t === n;
            });
            -1 !== n && this.order.splice(n, 1);
          }),
          (t.prototype.updateLeadAndFollow = function () {
            (this.prevLead = this.lead), (this.prevFollow = this.follow);
            var t = (0, r.CR)(
                (function (t, n) {
                  for (
                    var e = (0, r.CR)(n, 2),
                      i = e[0],
                      o = e[1],
                      a = void 0,
                      s = 0,
                      u = void 0,
                      l = t.length,
                      c = !1,
                      f = l - 1;
                    f >= 0;
                    f--
                  ) {
                    var p = t[f];
                    if ((f === l - 1 && (c = p.isPresent), c)) a = p;
                    else {
                      var d = t[f - 1];
                      d && d.isPresent && (a = p);
                    }
                    if (a) {
                      s = f;
                      break;
                    }
                  }
                  if ((a || (a = t[0]), (u = t[s - 1]), a))
                    for (f = s - 1; f >= 0; f--)
                      if ((p = t[f]).isPresent) {
                        u = p;
                        break;
                      }
                  return (
                    a !== i &&
                      !c &&
                      u === o &&
                      t.find(function (t) {
                        return t === i;
                      }) &&
                      (a = i),
                    [a, u]
                  );
                })(this.order, [this.lead, this.follow]),
                2
              ),
              n = t[0],
              e = t[1];
            (this.lead = n), (this.follow = e);
          }),
          (t.prototype.updateSnapshot = function () {
            if (this.lead) {
              var t = {
                boundingBox: this.lead.prevViewportBox,
                latestMotionValues: {},
              };
              this.lead.forEachValue(function (n, e) {
                var r = n.get();
                ct(r) || (t.latestMotionValues[e] = r);
              });
              var n = Ae.get(this.lead);
              n &&
                n.isDragging &&
                ((t.isDragging = !0), (t.cursorProgress = n.cursorProgress)),
                (this.snapshot = t);
            }
          }),
          (t.prototype.isLeadPresent = function () {
            var t;
            return (
              this.lead &&
              (null === (t = this.lead) || void 0 === t
                ? void 0
                : t.presence) !== Vn.Exiting
            );
          }),
          (t.prototype.getFollowOrigin = function () {
            var t;
            return this.follow
              ? this.follow.prevViewportBox
              : null === (t = this.snapshot) || void 0 === t
              ? void 0
              : t.boundingBox;
          }),
          (t.prototype.getFollowTarget = function () {
            var t;
            return null === (t = this.follow) || void 0 === t ? void 0 : t.box;
          }),
          (t.prototype.getLeadOrigin = function () {
            var t;
            return null === (t = this.lead) || void 0 === t
              ? void 0
              : t.prevViewportBox;
          }),
          (t.prototype.getLeadTarget = function () {
            var t;
            return null === (t = this.lead) || void 0 === t ? void 0 : t.box;
          }),
          (t.prototype.getLeadTransition = function () {
            var t;
            return null === (t = this.lead) || void 0 === t
              ? void 0
              : t.config.transition;
          }),
          t
        );
      })();
      !(function (t) {
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (
            (n.children = new Set()),
            (n.stacks = new Map()),
            (n.hasMounted = !1),
            (n.updateScheduled = !1),
            (n.renderScheduled = !1),
            (n.syncContext = (0, r.pi)((0, r.pi)({}, Un()), {
              syncUpdate: function (t) {
                return n.scheduleUpdate(t);
              },
              forceUpdate: function () {
                (n.syncContext = (0, r.pi)({}, n.syncContext)),
                  n.scheduleUpdate(!0);
              },
              register: function (t) {
                return n.addChild(t);
              },
              remove: function (t) {
                return n.removeChild(t);
              },
            })),
            n
          );
        }
        (0, r.ZT)(n, t),
          (n.prototype.componentDidMount = function () {
            (this.hasMounted = !0), this.updateStacks();
          }),
          (n.prototype.componentDidUpdate = function () {
            this.startLayoutAnimation();
          }),
          (n.prototype.shouldComponentUpdate = function () {
            return (this.renderScheduled = !0), !0;
          }),
          (n.prototype.startLayoutAnimation = function () {
            var t = this;
            this.renderScheduled = this.updateScheduled = !1;
            var n = this.props.type;
            this.children.forEach(function (t) {
              t.isPresent
                ? t.presence !== Vn.Entering &&
                  (t.presence =
                    t.presence === Vn.Exiting ? Vn.Entering : Vn.Present)
                : (t.presence = Vn.Exiting);
            }),
              this.updateStacks();
            var e = "crossfade" === n ? Er : br,
              r = {
                measureLayout: function (t) {
                  return t.measureLayout();
                },
                layoutReady: function (n) {
                  var r = n.layoutId;
                  n.layoutReady(e(n, t.getStack(r)));
                },
              };
            this.children.forEach(function (n) {
              return t.syncContext.add(n);
            }),
              this.syncContext.flush(r),
              this.stacks.forEach(function (t) {
                return (t.snapshot = void 0);
              });
          }),
          (n.prototype.updateStacks = function () {
            this.stacks.forEach(function (t) {
              return t.updateLeadAndFollow();
            });
          }),
          (n.prototype.scheduleUpdate = function (t) {
            void 0 === t && (t = !1),
              (!t && this.updateScheduled) ||
                ((this.updateScheduled = !0),
                this.children.forEach(function (t) {
                  return t.snapshotBoundingBox();
                }),
                this.stacks.forEach(function (t) {
                  return t.updateSnapshot();
                }),
                (!t && this.renderScheduled) ||
                  ((this.renderScheduled = !0), this.forceUpdate()));
          }),
          (n.prototype.addChild = function (t) {
            this.children.add(t),
              this.addToStack(t),
              (t.presence = this.hasMounted ? Vn.Entering : Vn.Present);
          }),
          (n.prototype.removeChild = function (t) {
            this.scheduleUpdate(),
              this.children.delete(t),
              this.removeFromStack(t);
          }),
          (n.prototype.addToStack = function (t) {
            var n = this.getStack(t.layoutId);
            null === n || void 0 === n || n.add(t);
          }),
          (n.prototype.removeFromStack = function (t) {
            var n = this.getStack(t.layoutId);
            null === n || void 0 === n || n.remove(t);
          }),
          (n.prototype.getStack = function (t) {
            if (void 0 !== t)
              return (
                !this.stacks.has(t) && this.stacks.set(t, new Cr()),
                this.stacks.get(t)
              );
          }),
          (n.prototype.render = function () {
            return (0, u.createElement)(
              In.Provider,
              { value: this.syncContext },
              this.props.children
            );
          });
      })(u.Component);
      function wr() {
        return {
          scrollX: p(0),
          scrollY: p(0),
          scrollXProgress: p(0),
          scrollYProgress: p(0),
        };
      }
      wr();
      var Pr = p(null);
      if ("undefined" !== typeof window)
        if (window.matchMedia) {
          var Sr = window.matchMedia("(prefers-reduced-motion)"),
            Ar = function () {
              return Pr.set(Sr.matches);
            };
          Sr.addListener(Ar), Ar();
        } else Pr.set(!1);
      !(function () {
        function t() {
          this.componentControls = new Set();
        }
        (t.prototype.subscribe = function (t) {
          var n = this;
          return (
            this.componentControls.add(t),
            function () {
              return n.componentControls.delete(t);
            }
          );
        }),
          (t.prototype.start = function (t, n) {
            this.componentControls.forEach(function (e) {
              e.start(t.nativeEvent || t, n);
            });
          }),
          (t.prototype.updateConstraints = function () {
            this.componentControls.forEach(function (t) {
              t.prepareBoundingBox(), t.resolveDragConstraints();
            });
          });
      })();
      !(function (t) {
        function n() {
          var n = (null !== t && t.apply(this, arguments)) || this;
          return (n.initialState = {}), n;
        }
        (0, r.ZT)(n, t),
          (n.prototype.updateLayoutDelta = function () {}),
          (n.prototype.build = function () {}),
          (n.prototype.clean = function () {}),
          (n.prototype.makeTargetAnimatable = function (t) {
            var n = t.transition,
              e = t.transitionEnd,
              i = (0, r._T)(t, ["transition", "transitionEnd"]);
            return (
              H(this, i, z(i, n || {}, this)),
              (0, r.pi)({ transition: n, transitionEnd: e }, i)
            );
          }),
          (n.prototype.getBoundingBox = function () {
            return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          }),
          (n.prototype.readNativeValue = function (t) {
            return this.initialState[t] || 0;
          }),
          (n.prototype.render = function () {
            this.build();
          });
      })(J);
    },
  },
]);
