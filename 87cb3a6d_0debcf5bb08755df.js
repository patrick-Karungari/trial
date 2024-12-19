"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [56461],
  {
    275534: function (e, t, r) {
      r.d(t, {
        CX: function () {
          return ht;
        },
        F3: function () {
          return ve;
        },
        mH: function () {
          return Et;
        },
        UE: function () {
          return Lt;
        },
        vt: function () {
          return Ne;
        },
        ui: function () {
          return Ie;
        },
        BU: function () {
          return Pt;
        },
      });
      var a = r(61242),
        n = r.n(a),
        o = r(266726),
        i = r.n(o),
        s = r(819783),
        l = r.n(s),
        d = r(827378),
        c = r(399212),
        u = r(585912),
        f = r(610685),
        v = r(331542);
      function h(e, t, r) {
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
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          a,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              a,
              n = {},
              o = Object.keys(e);
            for (a = 0; a < o.length; a++)
              (r = o[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (a = 0; a < o.length; a++)
            (r = o[a]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      var g = 0;
      class m {
        constructor() {
          this.id = "".concat(g++);
        }
      }
      var w = new WeakMap(),
        M = new WeakMap(),
        b = new WeakMap(),
        x = new WeakMap(),
        k = new WeakMap(),
        y = new WeakMap(),
        L = new WeakMap(),
        C = new WeakMap(),
        D = new WeakMap(),
        E = new WeakMap(),
        O = new WeakMap(),
        B = new WeakMap(),
        S = new WeakMap(),
        F = new WeakMap(),
        P = new WeakMap(),
        R = new WeakMap(),
        N = new WeakMap(),
        T = new WeakMap(),
        W = new WeakMap(),
        j = new WeakMap(),
        A = new WeakMap(),
        I = Symbol("placeholder"),
        q = Symbol("mark-placeholder"),
        Y = globalThis.Text,
        U = (e) =>
          (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
        $ = (e) => _(e) && 1 === e.nodeType,
        _ = (e) => {
          var t = U(e);
          return !!t && e instanceof t.Node;
        },
        z = (e) => {
          var t = e && e.anchorNode && U(e.anchorNode);
          return !!t && e instanceof t.Selection;
        },
        V = (e) => _(e) && 3 === e.nodeType,
        K = (e, t, r) => {
          for (
            var a, { childNodes: n } = e, o = n[t], i = t, s = !1, l = !1;
            ((_((a = o)) && 8 === a.nodeType) ||
              ($(o) && 0 === o.childNodes.length) ||
              ($(o) && "false" === o.getAttribute("contenteditable"))) &&
            (!s || !l);

          )
            i >= n.length
              ? ((s = !0), (i = t - 1), (r = "backward"))
              : i < 0
              ? ((l = !0), (i = t + 1), (r = "forward"))
              : ((o = n[i]), (t = i), (i += "forward" === r ? 1 : -1));
          return [o, t];
        },
        H = (e, t, r) => {
          var [a] = K(e, t, r);
          return a;
        },
        X = (e) => {
          var t = "";
          if (V(e) && e.nodeValue) return e.nodeValue;
          if ($(e)) {
            for (var r of Array.from(e.childNodes)) t += X(r);
            var a = getComputedStyle(e).getPropertyValue("display");
            ("block" !== a && "list" !== a && "BR" !== e.tagName) ||
              (t += "\n");
          }
          return t;
        },
        J = /data-slate-fragment="(.+?)"/m,
        Q = (e, t, r) => {
          var { target: a } = t;
          if ($(a) && a.matches('[contentEditable="false"]')) return !1;
          var { document: n } = ve.getWindow(e);
          if (n.contains(a)) return ve.hasDOMNode(e, a, { editable: !0 });
          var o = r.find((e) => {
            var { addedNodes: t, removedNodes: r } = e;
            for (var n of t) if (n === a || n.contains(a)) return !0;
            for (var o of r) if (o === a || o.contains(a)) return !0;
          });
          return !(!o || o === t) && Q(e, o, r);
        },
        Z = parseInt(d.version.split(".")[0], 10) >= 17,
        G =
          "undefined" !== typeof navigator &&
          "undefined" !== typeof window &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        ee =
          "undefined" !== typeof navigator &&
          /Mac OS X/.test(navigator.userAgent),
        te =
          "undefined" !== typeof navigator &&
          /Android/.test(navigator.userAgent),
        re =
          "undefined" !== typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        ae =
          "undefined" !== typeof navigator &&
          /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        ne =
          "undefined" !== typeof navigator &&
          /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
        oe =
          "undefined" !== typeof navigator &&
          /Chrome/i.test(navigator.userAgent),
        ie =
          "undefined" !== typeof navigator &&
          /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
        se =
          "undefined" !== typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
            navigator.userAgent
          ),
        le =
          "undefined" !== typeof navigator &&
          /.*QQBrowser/.test(navigator.userAgent),
        de =
          "undefined" !== typeof navigator &&
          /.*UCBrowser/.test(navigator.userAgent),
        ce =
          "undefined" !== typeof navigator &&
          /.*Wechat/.test(navigator.userAgent),
        ue = !(
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
        ),
        fe =
          !ie &&
          !ne &&
          "undefined" !== typeof globalThis &&
          globalThis.InputEvent &&
          "function" === typeof globalThis.InputEvent.prototype.getTargetRanges,
        ve = {
          isComposing: (e) => !!B.get(e),
          getWindow(e) {
            var t = b.get(e);
            if (!t)
              throw new Error(
                "Unable to find a host window element for this editor"
              );
            return t;
          },
          findKey(e, t) {
            var r = C.get(t);
            return r || ((r = new m()), C.set(t, r)), r;
          },
          findPath(e, t) {
            for (var r = [], a = t; ; ) {
              var n = M.get(a);
              if (null == n) {
                if (u.ML.isEditor(a)) return r;
                break;
              }
              var o = w.get(a);
              if (null == o) break;
              r.unshift(o), (a = n);
            }
            throw new Error(
              "Unable to find the path for Slate node: ".concat(
                u.o4.stringify(t)
              )
            );
          },
          findDocumentOrShadowRoot(e) {
            var t = ve.toDOMNode(e, e),
              r = t.getRootNode();
            return (r instanceof Document || r instanceof ShadowRoot) &&
              null != r.getSelection
              ? r
              : t.ownerDocument;
          },
          isFocused: (e) => !!O.get(e),
          isReadOnly: (e) => !!E.get(e),
          blur(e) {
            var t = ve.toDOMNode(e, e),
              r = ve.findDocumentOrShadowRoot(e);
            O.set(e, !1), r.activeElement === t && t.blur();
          },
          focus(e) {
            var t = ve.toDOMNode(e, e),
              r = ve.findDocumentOrShadowRoot(e);
            O.set(e, !0),
              r.activeElement !== t && t.focus({ preventScroll: !0 });
          },
          deselect(e) {
            var { selection: t } = e,
              r = ve.findDocumentOrShadowRoot(e).getSelection();
            r && r.rangeCount > 0 && r.removeAllRanges(), t && u.YR.deselect(e);
          },
          hasDOMNode(e, t) {
            var r,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { editable: n = !1 } = a,
              o = ve.toDOMNode(e, e);
            try {
              r = $(t) ? t : t.parentElement;
            } catch (i) {
              if (
                !i.message.includes(
                  'Permission denied to access property "nodeType"'
                )
              )
                throw i;
            }
            return (
              !!r &&
              r.closest("[data-slate-editor]") === o &&
              (!(n && !r.isContentEditable) ||
                ("boolean" === typeof r.isContentEditable &&
                  r.closest('[contenteditable="false"]') === o) ||
                !!r.getAttribute("data-slate-zero-width"))
            );
          },
          insertData(e, t) {
            e.insertData(t);
          },
          insertFragmentData: (e, t) => e.insertFragmentData(t),
          insertTextData: (e, t) => e.insertTextData(t),
          setFragmentData(e, t, r) {
            e.setFragmentData(t, r);
          },
          toDOMNode(e, t) {
            var r = D.get(e),
              a = u.ML.isEditor(t)
                ? x.get(e)
                : null === r || void 0 === r
                ? void 0
                : r.get(ve.findKey(e, t));
            if (!a)
              throw new Error(
                "Cannot resolve a DOM node from Slate node: ".concat(
                  u.o4.stringify(t)
                )
              );
            return a;
          },
          toDOMPoint(e, t) {
            var r,
              [a] = u.ML.node(e, t.path),
              n = ve.toDOMNode(e, a);
            u.ML.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
              var o = Array.from(
                  n.querySelectorAll(
                    "[data-slate-string], [data-slate-zero-width]"
                  )
                ),
                i = 0,
                s = 0;
              s < o.length;
              s++
            ) {
              var l = o[s],
                d = l.childNodes[0];
              if (null != d && null != d.textContent) {
                var { length: c } = d.textContent,
                  f = l.getAttribute("data-slate-length"),
                  v = i + (null == f ? c : parseInt(f, 10)),
                  h = o[s + 1];
                if (
                  t.offset === v &&
                  null !== h &&
                  void 0 !== h &&
                  h.hasAttribute("data-slate-mark-placeholder")
                ) {
                  var p,
                    g = h.childNodes[0];
                  r = [
                    g instanceof Y ? g : h,
                    null !== (p = h.textContent) &&
                    void 0 !== p &&
                    p.startsWith("\ufeff")
                      ? 1
                      : 0,
                  ];
                  break;
                }
                if (t.offset <= v) {
                  r = [d, Math.min(c, Math.max(0, t.offset - i))];
                  break;
                }
                i = v;
              }
            }
            if (!r)
              throw new Error(
                "Cannot resolve a DOM point from Slate point: ".concat(
                  u.o4.stringify(t)
                )
              );
            return r;
          },
          toDOMRange(e, t) {
            var { anchor: r, focus: a } = t,
              n = u.e6.isBackward(t),
              o = ve.toDOMPoint(e, r),
              i = u.e6.isCollapsed(t) ? o : ve.toDOMPoint(e, a),
              s = ve.getWindow(e).document.createRange(),
              [l, d] = n ? i : o,
              [c, f] = n ? o : i,
              v = !!($(l) ? l : l.parentElement).getAttribute(
                "data-slate-zero-width"
              ),
              h = !!($(c) ? c : c.parentElement).getAttribute(
                "data-slate-zero-width"
              );
            return s.setStart(l, v ? 1 : d), s.setEnd(c, h ? 1 : f), s;
          },
          toSlateNode(e, t) {
            var r = $(t) ? t : t.parentElement;
            r &&
              !r.hasAttribute("data-slate-node") &&
              (r = r.closest("[data-slate-node]"));
            var a = r ? y.get(r) : null;
            if (!a)
              throw new Error(
                "Cannot resolve a Slate node from DOM node: ".concat(r)
              );
            return a;
          },
          findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var { clientX: r, clientY: a, target: n } = t;
            if (null == r || null == a)
              throw new Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t)
              );
            var o,
              i = ve.toSlateNode(e, t.target),
              s = ve.findPath(e, i);
            if (u.ML.isVoid(e, i)) {
              var l = n.getBoundingClientRect(),
                d = e.isInline(i)
                  ? r - l.left < l.left + l.width - r
                  : a - l.top < l.top + l.height - a,
                c = u.ML.point(e, s, { edge: d ? "start" : "end" }),
                f = d ? u.ML.before(e, c) : u.ML.after(e, c);
              if (f) return u.ML.range(e, f);
            }
            var { document: v } = ve.getWindow(e);
            if (v.caretRangeFromPoint) o = v.caretRangeFromPoint(r, a);
            else {
              var h = v.caretPositionFromPoint(r, a);
              h &&
                ((o = v.createRange()).setStart(h.offsetNode, h.offset),
                o.setEnd(h.offsetNode, h.offset));
            }
            if (!o)
              throw new Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t)
              );
            return ve.toSlateRange(e, o, { exactMatch: !1, suppressThrow: !1 });
          },
          toSlatePoint(e, t, r) {
            var { exactMatch: a, suppressThrow: n } = r,
              [o, i] = a
                ? t
                : ((e) => {
                    var [t, r] = e;
                    if ($(t) && t.childNodes.length) {
                      var a = r === t.childNodes.length,
                        n = a ? r - 1 : r;
                      for (
                        [t, n] = K(t, n, a ? "backward" : "forward"), a = n < r;
                        $(t) && t.childNodes.length;

                      ) {
                        var o = a ? t.childNodes.length - 1 : 0;
                        t = H(t, o, a ? "backward" : "forward");
                      }
                      r = a && null != t.textContent ? t.textContent.length : 0;
                    }
                    return [t, r];
                  })(t),
              s = o.parentNode,
              l = null,
              d = 0;
            if (s) {
              var c,
                f,
                v = ve.toDOMNode(e, e),
                h = s.closest('[data-slate-void="true"]'),
                p = h && v.contains(h) ? h : null,
                g = s.closest("[data-slate-leaf]"),
                m = null;
              if (g) {
                if ((l = g.closest('[data-slate-node="text"]'))) {
                  var w = ve.getWindow(e).document.createRange();
                  w.setStart(l, 0), w.setEnd(o, i);
                  var M = w.cloneContents();
                  [
                    ...Array.prototype.slice.call(
                      M.querySelectorAll("[data-slate-zero-width]")
                    ),
                    ...Array.prototype.slice.call(
                      M.querySelectorAll("[contenteditable=false]")
                    ),
                  ].forEach((e) => {
                    te &&
                    !a &&
                    e.hasAttribute("data-slate-zero-width") &&
                    e.textContent.length > 0 &&
                    "\ufeff" !== e.textContext
                      ? e.textContent.startsWith("\ufeff") &&
                        (e.textContent = e.textContent.slice(1))
                      : e.parentNode.removeChild(e);
                  }),
                    (d = M.textContent.length),
                    (m = l);
                }
              } else if (p) {
                for (
                  var b = p.querySelectorAll("[data-slate-leaf]"), x = 0;
                  x < b.length;
                  x++
                ) {
                  var k = b[x];
                  if (ve.hasDOMNode(e, k)) {
                    g = k;
                    break;
                  }
                }
                g
                  ? ((l = g.closest('[data-slate-node="text"]')),
                    (d = (m = g).textContent.length),
                    m
                      .querySelectorAll("[data-slate-zero-width]")
                      .forEach((e) => {
                        d -= e.textContent.length;
                      }))
                  : (d = 1);
              }
              m &&
                d === m.textContent.length &&
                te &&
                "z" === m.getAttribute("data-slate-zero-width") &&
                null !== (c = m.textContent) &&
                void 0 !== c &&
                c.startsWith("\ufeff") &&
                (s.hasAttribute("data-slate-zero-width") ||
                  (re &&
                    null !== (f = m.textContent) &&
                    void 0 !== f &&
                    f.endsWith("\n\n"))) &&
                d--;
            }
            if (te && !l && !a) {
              var y = s.hasAttribute("data-slate-node")
                ? s
                : s.closest("[data-slate-node]");
              if (y && ve.hasDOMNode(e, y, { editable: !0 })) {
                var L = ve.toSlateNode(e, y),
                  { path: C, offset: D } = u.ML.start(e, ve.findPath(e, L));
                return (
                  y.querySelector("[data-slate-leaf]") || (D = i),
                  { path: C, offset: D }
                );
              }
            }
            if (!l) {
              if (n) return null;
              throw new Error(
                "Cannot resolve a Slate point from DOM point: ".concat(t)
              );
            }
            var E = ve.toSlateNode(e, l);
            return { path: ve.findPath(e, E), offset: d };
          },
          toSlateRange(e, t, r) {
            var a,
              n,
              o,
              i,
              s,
              { exactMatch: l, suppressThrow: d } = r;
            if (
              ((z(t) ? t.anchorNode : t.startContainer) &&
                (z(t)
                  ? ((a = t.anchorNode),
                    (n = t.anchorOffset),
                    (o = t.focusNode),
                    (i = t.focusOffset),
                    (s =
                      oe &&
                      window.document.activeElement &&
                      window.document.activeElement.shadowRoot
                        ? t.anchorNode === t.focusNode &&
                          t.anchorOffset === t.focusOffset
                        : t.isCollapsed))
                  : ((a = t.startContainer),
                    (n = t.startOffset),
                    (o = t.endContainer),
                    (i = t.endOffset),
                    (s = t.collapsed))),
              null == a || null == o || null == n || null == i)
            )
              throw new Error(
                "Cannot resolve a Slate range from DOM range: ".concat(t)
              );
            var c = ve.toSlatePoint(e, [a, n], {
              exactMatch: l,
              suppressThrow: d,
            });
            if (!c) return null;
            var f = s
              ? c
              : ve.toSlatePoint(e, [o, i], { exactMatch: l, suppressThrow: d });
            if (!f) return null;
            var v = { anchor: c, focus: f };
            return (
              u.e6.isExpanded(v) &&
                u.e6.isForward(v) &&
                $(o) &&
                u.ML.void(e, { at: v.focus, mode: "highest" }) &&
                (v = u.ML.unhangRange(e, v, { voids: !0 })),
              v
            );
          },
          hasRange(e, t) {
            var { anchor: r, focus: a } = t;
            return u.ML.hasPath(e, r.path) && u.ML.hasPath(e, a.path);
          },
          androidScheduleFlush(e) {
            var t;
            null === (t = P.get(e)) || void 0 === t || t();
          },
          androidPendingDiffs: (e) => T.get(e),
        },
        he = ue ? d.useLayoutEffect : d.useEffect,
        pe = ["anchor", "focus"],
        ge = ["anchor", "focus"],
        me = (e, t) =>
          Object.keys(e).length === Object.keys(t).length &&
          Object.keys(e).every((r) => t.hasOwnProperty(r) && e[r] === t[r]),
        we = (e, t) => {
          if (e.length !== t.length) return !1;
          for (var r = 0; r < e.length; r++) {
            var a = e[r],
              n = t[r],
              o = p(a, pe),
              i = p(n, ge);
            if (!u.e6.equals(a, n) || a[I] !== n[I] || !me(o, i)) return !1;
          }
          return !0;
        },
        Me = (e) => {
          var { isLast: t, leaf: r, parent: a, text: n } = e,
            o = ye(),
            i = ve.findPath(o, n),
            s = u.y$.parent(i),
            l = !0 === r[q];
          return o.isVoid(a)
            ? d.createElement(xe, { length: u.NB.string(a).length })
            : "" !== r.text ||
              a.children[a.children.length - 1] !== n ||
              o.isInline(a) ||
              "" !== u.ML.string(o, s)
            ? "" === r.text
              ? d.createElement(xe, { isMarkPlaceholder: l })
              : t && "\n" === r.text.slice(-1)
              ? d.createElement(be, { isTrailing: !0, text: r.text })
              : d.createElement(be, { text: r.text })
            : d.createElement(xe, { isLineBreak: !0, isMarkPlaceholder: l });
        },
        be = (e) => {
          var { text: t, isTrailing: r = !1 } = e,
            a = (0, d.useRef)(null),
            n = () =>
              ""
                .concat(null !== t && void 0 !== t ? t : "")
                .concat(r ? "\n" : "");
          return (
            he(() => {
              var e = n();
              a.current &&
                a.current.textContent !== e &&
                (a.current.textContent = e);
            }),
            a.current
              ? d.createElement("span", { "data-slate-string": !0, ref: a })
              : d.createElement(
                  "span",
                  { "data-slate-string": !0, ref: a },
                  n()
                )
          );
        },
        xe = (e) => {
          var {
              length: t = 0,
              isLineBreak: r = !1,
              isMarkPlaceholder: a = !1,
            } = e,
            n = {
              "data-slate-zero-width": r ? "n" : "z",
              "data-slate-length": t,
            };
          return (
            a && (n["data-slate-mark-placeholder"] = !0),
            d.createElement(
              "span",
              Object.assign({}, n),
              te && r ? null : "\ufeff",
              r ? d.createElement("br", null) : null
            )
          );
        },
        ke = (0, d.createContext)(null),
        ye = () => {
          var e = (0, d.useContext)(ke);
          if (!e)
            throw new Error(
              "The `useSlateStatic` hook must be used inside the <Slate> component's context."
            );
          return e;
        },
        Le = (e) => {
          var {
              leaf: t,
              isLast: r,
              text: a,
              parent: n,
              renderPlaceholder: o,
              renderLeaf: i = (e) => d.createElement(De, Object.assign({}, e)),
            } = e,
            s = (0, d.useRef)(null),
            l = ye();
          (0, d.useEffect)(() => {
            var e = null === s || void 0 === s ? void 0 : s.current,
              t = ve.toDOMNode(l, l);
            if (e && t)
              return (
                (t.style.minHeight = "".concat(e.clientHeight, "px")),
                k.set(l, e),
                () => {
                  (t.style.minHeight = "auto"), k.delete(l);
                }
              );
          }, [s, t]);
          var c = d.createElement(Me, {
            isLast: r,
            leaf: t,
            parent: n,
            text: a,
          });
          if (t[I]) {
            var u = {
              children: t.placeholder,
              attributes: {
                "data-slate-placeholder": !0,
                style: {
                  position: "absolute",
                  pointerEvents: "none",
                  width: "100%",
                  maxWidth: "100%",
                  display: "block",
                  opacity: "0.333",
                  userSelect: "none",
                  textDecoration: "none",
                },
                contentEditable: !1,
                ref: s,
              },
            };
            c = d.createElement(d.Fragment, null, o(u), c);
          }
          return i({
            attributes: { "data-slate-leaf": !0 },
            children: c,
            leaf: t,
            text: a,
          });
        },
        Ce = d.memo(
          Le,
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            u.xv.equals(t.leaf, e.leaf) &&
            t.leaf[I] === e.leaf[I]
        ),
        De = (e) => {
          var { attributes: t, children: r } = e;
          return d.createElement("span", Object.assign({}, t), r);
        },
        Ee = (e) => {
          for (
            var {
                decorations: t,
                isLast: r,
                parent: a,
                renderPlaceholder: n,
                renderLeaf: o,
                text: i,
              } = e,
              s = ye(),
              l = (0, d.useRef)(null),
              c = u.xv.decorations(i, t),
              f = ve.findKey(s, i),
              v = [],
              h = 0;
            h < c.length;
            h++
          ) {
            var p = c[h];
            v.push(
              d.createElement(Ce, {
                isLast: r && h === c.length - 1,
                key: "".concat(f.id, "-").concat(h),
                renderPlaceholder: n,
                leaf: p,
                text: i,
                parent: a,
                renderLeaf: o,
              })
            );
          }
          return (
            he(() => {
              var e = D.get(s);
              l.current
                ? (null === e || void 0 === e || e.set(f, l.current),
                  L.set(i, l.current),
                  y.set(l.current, i))
                : (null === e || void 0 === e || e.delete(f), L.delete(i));
            }),
            d.createElement("span", { "data-slate-node": "text", ref: l }, v)
          );
        },
        Oe = d.memo(
          Ee,
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.text === e.text &&
            we(t.decorations, e.decorations)
        ),
        Be = (e) => {
          var {
              decorations: t,
              element: r,
              renderElement: a = (e) =>
                d.createElement(Fe, Object.assign({}, e)),
              renderPlaceholder: o,
              renderLeaf: i,
              selection: s,
            } = e,
            l = ye(),
            c = je(),
            f = l.isInline(r),
            v = ve.findKey(l, r),
            h = (0, d.useCallback)(
              (e) => {
                var t = D.get(l);
                e
                  ? (null === t || void 0 === t || t.set(v, e),
                    L.set(r, e),
                    y.set(e, r))
                  : (null === t || void 0 === t || t.delete(v), L.delete(r));
              },
              [l, v, r]
            ),
            p = Te({
              decorations: t,
              node: r,
              renderElement: a,
              renderPlaceholder: o,
              renderLeaf: i,
              selection: s,
            }),
            g = { "data-slate-node": "element", ref: h };
          if (
            (f && (g["data-slate-inline"] = !0), !f && u.ML.hasInlines(l, r))
          ) {
            var m = u.NB.string(r),
              b = n()(m);
            "rtl" === b && (g.dir = b);
          }
          if (u.ML.isVoid(l, r)) {
            (g["data-slate-void"] = !0), !c && f && (g.contentEditable = !1);
            var x = f ? "span" : "div",
              [[k]] = u.NB.texts(r);
            (p = d.createElement(
              x,
              {
                "data-slate-spacer": !0,
                style: {
                  height: "0",
                  color: "transparent",
                  outline: "none",
                  position: "absolute",
                },
              },
              d.createElement(Oe, {
                renderPlaceholder: o,
                decorations: [],
                isLast: !1,
                parent: r,
                text: k,
              })
            )),
              w.set(k, 0),
              M.set(k, r);
          }
          return a({ attributes: g, children: p, element: r });
        },
        Se = d.memo(
          Be,
          (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            we(e.decorations, t.decorations) &&
            (e.selection === t.selection ||
              (!!e.selection &&
                !!t.selection &&
                u.e6.equals(e.selection, t.selection)))
        ),
        Fe = (e) => {
          var { attributes: t, children: r, element: a } = e,
            n = ye().isInline(a) ? "span" : "div";
          return d.createElement(
            n,
            Object.assign({}, t, { style: { position: "relative" } }),
            r
          );
        },
        Pe = (0, d.createContext)(() => []),
        Re = (0, d.createContext)(!1),
        Ne = () => (0, d.useContext)(Re),
        Te = (e) => {
          for (
            var {
                decorations: t,
                node: r,
                renderElement: a,
                renderPlaceholder: n,
                renderLeaf: o,
                selection: i,
              } = e,
              s = (0, d.useContext)(Pe),
              l = ye(),
              c = ve.findPath(l, r),
              f = [],
              v = u.W_.isElement(r) && !l.isInline(r) && u.ML.hasInlines(l, r),
              h = 0;
            h < r.children.length;
            h++
          ) {
            var p = c.concat(h),
              g = r.children[h],
              m = ve.findKey(l, g),
              b = u.ML.range(l, p),
              x = i && u.e6.intersection(b, i),
              k = s([g, p]);
            for (var y of t) {
              var L = u.e6.intersection(y, b);
              L && k.push(L);
            }
            u.W_.isElement(g)
              ? f.push(
                  d.createElement(
                    Re.Provider,
                    { key: "provider-".concat(m.id), value: !!x },
                    d.createElement(Se, {
                      decorations: k,
                      element: g,
                      key: m.id,
                      renderElement: a,
                      renderPlaceholder: n,
                      renderLeaf: o,
                      selection: x,
                    })
                  )
                )
              : f.push(
                  d.createElement(Oe, {
                    decorations: k,
                    key: m.id,
                    isLast: v && h === r.children.length - 1,
                    parent: r,
                    renderPlaceholder: n,
                    renderLeaf: o,
                    text: g,
                  })
                ),
              w.set(g, h),
              M.set(g, r);
          }
          return f;
        },
        We = (0, d.createContext)(!1),
        je = () => (0, d.useContext)(We),
        Ae = (0, d.createContext)(null),
        Ie = () => {
          var e = (0, d.useContext)(Ae);
          if (!e)
            throw new Error(
              "The `useSlate` hook must be used inside the <Slate> component's context."
            );
          var { editor: t } = e;
          return t;
        },
        qe = {
          bold: "mod+b",
          compose: ["down", "left", "right", "up", "backspace", "enter"],
          moveBackward: "left",
          moveForward: "right",
          moveWordBackward: "ctrl+left",
          moveWordForward: "ctrl+right",
          deleteBackward: "shift?+backspace",
          deleteForward: "shift?+delete",
          extendBackward: "shift+left",
          extendForward: "shift+right",
          italic: "mod+i",
          insertSoftBreak: "shift+enter",
          splitBlock: "enter",
          undo: "mod+z",
        },
        Ye = {
          moveLineBackward: "opt+up",
          moveLineForward: "opt+down",
          moveWordBackward: "opt+left",
          moveWordForward: "opt+right",
          deleteBackward: ["ctrl+backspace", "ctrl+h"],
          deleteForward: ["ctrl+delete", "ctrl+d"],
          deleteLineBackward: "cmd+shift?+backspace",
          deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
          deleteWordBackward: "opt+shift?+backspace",
          deleteWordForward: "opt+shift?+delete",
          extendLineBackward: "opt+shift+up",
          extendLineForward: "opt+shift+down",
          redo: "cmd+shift+z",
          transposeCharacter: "ctrl+t",
        },
        Ue = {
          deleteWordBackward: "ctrl+shift?+backspace",
          deleteWordForward: "ctrl+shift?+delete",
          redo: ["ctrl+y", "ctrl+shift+z"],
        },
        $e = (e) => {
          var t = qe[e],
            r = Ye[e],
            a = Ue[e],
            n = t && (0, f.TB)(t),
            o = r && (0, f.TB)(r),
            i = a && (0, f.TB)(a);
          return (e) =>
            !(!n || !n(e)) || !!(ee && o && o(e)) || !(ee || !i || !i(e));
        },
        _e = {
          isBold: $e("bold"),
          isCompose: $e("compose"),
          isMoveBackward: $e("moveBackward"),
          isMoveForward: $e("moveForward"),
          isDeleteBackward: $e("deleteBackward"),
          isDeleteForward: $e("deleteForward"),
          isDeleteLineBackward: $e("deleteLineBackward"),
          isDeleteLineForward: $e("deleteLineForward"),
          isDeleteWordBackward: $e("deleteWordBackward"),
          isDeleteWordForward: $e("deleteWordForward"),
          isExtendBackward: $e("extendBackward"),
          isExtendForward: $e("extendForward"),
          isExtendLineBackward: $e("extendLineBackward"),
          isExtendLineForward: $e("extendLineForward"),
          isItalic: $e("italic"),
          isMoveLineBackward: $e("moveLineBackward"),
          isMoveLineForward: $e("moveLineForward"),
          isMoveWordBackward: $e("moveWordBackward"),
          isMoveWordForward: $e("moveWordForward"),
          isRedo: $e("redo"),
          isSoftBreak: $e("insertSoftBreak"),
          isSplitBlock: $e("splitBlock"),
          isTransposeCharacter: $e("transposeCharacter"),
          isUndo: $e("undo"),
        },
        ze = {
          subtree: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
        };
      class Ve extends d.Component {
        constructor() {
          super(...arguments),
            (this.context = null),
            (this.manager = null),
            (this.mutationObserver = null);
        }
        observe() {
          var e,
            { node: t } = this.props;
          if (!t.current)
            throw new Error(
              "Failed to attach MutationObserver, `node` is undefined"
            );
          null === (e = this.mutationObserver) ||
            void 0 === e ||
            e.observe(t.current, ze);
        }
        componentDidMount() {
          var { receivedUserInput: e } = this.props,
            t = this.context;
          (this.manager = ((e, t) => {
            var r = [],
              a = () => {
                r = [];
              };
            return {
              registerMutations: (a) => {
                if (t.current) {
                  var n = a.filter((t) => Q(e, t, a));
                  r.push(...n);
                }
              },
              restoreDOM: function () {
                r.reverse().forEach((e) => {
                  "characterData" !== e.type
                    ? (e.removedNodes.forEach((t) => {
                        e.target.insertBefore(t, e.nextSibling);
                      }),
                      e.addedNodes.forEach((t) => {
                        e.target.removeChild(t);
                      }))
                    : (e.target.textContent = e.oldValue);
                }),
                  a();
              },
              clear: a,
            };
          })(t, e)),
            (this.mutationObserver = new MutationObserver(
              this.manager.registerMutations
            )),
            this.observe();
        }
        getSnapshotBeforeUpdate() {
          var e,
            t,
            r,
            a,
            n =
              null === (e = this.mutationObserver) || void 0 === e
                ? void 0
                : e.takeRecords();
          null !== n &&
            void 0 !== n &&
            n.length &&
            (null === (a = this.manager) ||
              void 0 === a ||
              a.registerMutations(n));
          return (
            null === (t = this.mutationObserver) ||
              void 0 === t ||
              t.disconnect(),
            null === (r = this.manager) || void 0 === r || r.restoreDOM(),
            null
          );
        }
        componentDidUpdate() {
          var e;
          null === (e = this.manager) || void 0 === e || e.clear(),
            this.observe();
        }
        componentWillUnmount() {
          var e;
          null === (e = this.mutationObserver) ||
            void 0 === e ||
            e.disconnect();
        }
        render() {
          return this.props.children;
        }
      }
      Ve.contextType = ke;
      var Ke = te
        ? Ve
        : (e) => {
            var { children: t } = e;
            return d.createElement(d.Fragment, null, t);
          };
      function He(e, t) {
        var { path: r, diff: a } = t;
        if (!u.ML.hasPath(e, r)) return !1;
        var n = u.NB.get(e, r);
        if (!u.xv.isText(n)) return !1;
        if (a.start !== n.text.length || 0 === a.text.length)
          return n.text.slice(a.start, a.start + a.text.length) === a.text;
        var o = u.y$.next(r);
        if (!u.ML.hasPath(e, o)) return !1;
        var i = u.NB.get(e, o);
        return u.xv.isText(i) && i.text.startsWith(a.text);
      }
      function Xe(e, t) {
        var { start: r, end: a, text: n } = t,
          o = e.slice(r, a),
          i = (function (e, t) {
            for (var r = Math.min(e.length, t.length), a = 0; a < r; a++)
              if (e.charAt(a) !== t.charAt(a)) return a;
            return r;
          })(o, n),
          s = (function (e, t, r) {
            for (var a = Math.min(e.length, t.length, r), n = 0; n < a; n++)
              if (e.charAt(e.length - n - 1) !== t.charAt(t.length - n - 1))
                return n;
            return a;
          })(o, n, Math.min(o.length - i, n.length - i)),
          l = { start: r + i, end: a - s, text: n.slice(i, n.length - s) };
        return l.start === l.end && 0 === l.text.length ? null : l;
      }
      function Je(e, t, r) {
        var a = Math.min(t.start, r.start),
          n = Math.max(0, Math.min(t.start + t.text.length, r.end) - r.start),
          o = (function (e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1;
              a < t;
              a++
            )
              r[a - 1] = arguments[a];
            return r.reduce(
              (e, t) => e.slice(0, t.start) + t.text + e.slice(t.end),
              e
            );
          })(e, t, r),
          i = Math.max(
            r.start + r.text.length,
            t.start +
              t.text.length +
              (t.start + t.text.length > r.start ? r.text.length : 0) -
              n
          ),
          s = o.slice(a, i);
        return Xe(e, {
          start: a,
          end: Math.max(t.end, r.end - t.text.length + (t.end - t.start)),
          text: s,
        });
      }
      function Qe(e) {
        var { path: t, diff: r } = e;
        return {
          anchor: { path: t, offset: r.start },
          focus: { path: t, offset: r.end },
        };
      }
      function Ze(e, t) {
        var { path: r, offset: a } = t;
        if (!u.ML.hasPath(e, r)) return null;
        var n = u.NB.get(e, r);
        if (!u.xv.isText(n)) return null;
        var o = u.ML.above(e, { match: (t) => u.ML.isBlock(e, t), at: r });
        if (!o) return null;
        for (; a > n.text.length; ) {
          var i = u.ML.next(e, { at: r, match: u.xv.isText });
          if (!i || !u.y$.isDescendant(i[1], o[1])) return null;
          (a -= n.text.length), (n = i[0]), (r = i[1]);
        }
        return { path: r, offset: a };
      }
      function Ge(e, t) {
        var r = Ze(e, t.anchor);
        if (!r) return null;
        if (u.e6.isCollapsed(t)) return { anchor: r, focus: r };
        var a = Ze(e, t.focus);
        return a ? { anchor: r, focus: a } : null;
      }
      function et(e, t, r) {
        var a = T.get(e),
          n =
            null === a || void 0 === a
              ? void 0
              : a.find((e) => {
                  var { path: r } = e;
                  return u.y$.equals(r, t.path);
                });
        if (!n || t.offset <= n.diff.start)
          return u.E9.transform(t, r, { affinity: "backward" });
        var { diff: o } = n;
        if (t.offset <= o.start + o.text.length) {
          var i = { path: t.path, offset: o.start },
            s = u.E9.transform(i, r, { affinity: "backward" });
          return s
            ? { path: s.path, offset: s.offset + t.offset - o.start }
            : null;
        }
        var l = {
            path: t.path,
            offset: t.offset - o.text.length + o.end - o.start,
          },
          d = u.E9.transform(l, r, { affinity: "backward" });
        return d
          ? "split_node" === r.type &&
            u.y$.equals(r.path, t.path) &&
            l.offset < r.position &&
            o.start < r.position
            ? d
            : {
                path: d.path,
                offset: d.offset + o.text.length - o.end + o.start,
              }
          : null;
      }
      function tt(e, t, r) {
        var a = et(e, t.anchor, r);
        if (!a) return null;
        if (u.e6.isCollapsed(t)) return { anchor: a, focus: a };
        var n = et(e, t.focus, r);
        return n ? { anchor: a, focus: n } : null;
      }
      function rt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function at(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? rt(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : rt(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function nt(e) {
        var {
            editor: t,
            scheduleOnDOMSelectionChange: r,
            onDOMSelectionChange: a,
          } = e,
          n = !1,
          o = null,
          i = null,
          s = null,
          l = 0,
          d = !1,
          c = () => {
            var e = j.get(t);
            if ((j.delete(t), e)) {
              var { selection: r } = t,
                a = Ge(t, e);
              !a || (r && u.e6.equals(a, r)) || u.YR.select(t, a);
            }
          },
          f = () => {
            var e;
            if (
              (i && (clearTimeout(i), (i = null)),
              s && (clearTimeout(s), (s = null)),
              m() || g())
            ) {
              n || ((n = !0), setTimeout(() => (n = !1))),
                g() && (n = "action");
              var o =
                t.selection &&
                u.ML.rangeRef(t, t.selection, { affinity: "forward" });
              N.set(t, t.marks), W.get(t), T.get(t);
              for (
                var l,
                  f = !(null === (e = T.get(t)) || void 0 === e || !e.length);
                (l = null === (v = T.get(t)) || void 0 === v ? void 0 : v[0]);

              ) {
                var v,
                  h,
                  p = R.get(t);
                void 0 !== p && (R.delete(t), (t.marks = p)),
                  p && !1 === d && (d = null);
                var w = Qe(l);
                (t.selection && u.e6.equals(t.selection, w)) ||
                  u.YR.select(t, w),
                  l.diff.text
                    ? u.ML.insertText(t, l.diff.text)
                    : u.ML.deleteFragment(t),
                  T.set(
                    t,
                    null === (h = T.get(t)) || void 0 === h
                      ? void 0
                      : h.filter((e) => {
                          var { id: t } = e;
                          return t !== l.id;
                        })
                  ),
                  He(t, l) ||
                    ((f = !1),
                    W.delete(t),
                    N.delete(t),
                    (n = "action"),
                    j.delete(t),
                    r.cancel(),
                    a.cancel(),
                    null === o || void 0 === o || o.unref());
              }
              var M = null === o || void 0 === o ? void 0 : o.unref();
              if (
                (!M ||
                  j.get(t) ||
                  (t.selection && u.e6.equals(M, t.selection)) ||
                  u.YR.select(t, M),
                g())
              )
                (() => {
                  var e = W.get(t);
                  if ((W.delete(t), e)) {
                    if (e.at) {
                      var r = u.E9.isPoint(e.at) ? Ze(t, e.at) : Ge(t, e.at);
                      if (!r) return;
                      var a = u.ML.range(t, r);
                      (t.selection && u.e6.equals(t.selection, a)) ||
                        u.YR.select(t, r);
                    }
                    e.run();
                  }
                })();
              else {
                f && r(), r.flush(), a.flush(), c();
                var b = N.get(t);
                N.delete(t), void 0 !== b && ((t.marks = b), t.onChange());
              }
            } else c();
          },
          v = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              r = k.get(t);
            r &&
              (m() || e
                ? (r.style.display = "none")
                : r.style.removeProperty("display"));
          },
          h = (e, r) => {
            var a,
              n = null !== (a = T.get(t)) && void 0 !== a ? a : [];
            T.set(t, n);
            var o = u.NB.leaf(t, e),
              i = n.findIndex((t) => u.y$.equals(t.path, e));
            if (i < 0)
              return (
                Xe(o.text, r) && n.push({ path: e, diff: r, id: l++ }), void v()
              );
            var s = Je(o.text, n[i].diff, r);
            if (!s) return n.splice(i, 1), void v();
            n[i] = at(at({}, n[i]), {}, { diff: s });
          },
          p = function (e) {
            var { at: n } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (d = !1),
              j.delete(t),
              r.cancel(),
              a.cancel(),
              g() && f(),
              W.set(t, { at: n, run: e }),
              (s = setTimeout(f));
          },
          g = () => !!W.get(t),
          m = () => {
            var e;
            return !(null === (e = T.get(t)) || void 0 === e || !e.length);
          },
          w = () => {
            g() || (s = setTimeout(f));
          };
        return {
          flush: f,
          scheduleFlush: w,
          hasPendingDiffs: m,
          hasPendingAction: g,
          hasPendingChanges: () => g() || m(),
          isFlushing: () => n,
          handleUserSelect: (e) => {
            j.set(t, e), i && (clearTimeout(i), (i = null));
            var { selection: r } = t;
            if (e) {
              var a = !r || !u.y$.equals(r.anchor.path, e.anchor.path),
                n =
                  !r ||
                  !u.y$.equals(
                    r.anchor.path.slice(0, -1),
                    e.anchor.path.slice(0, -1)
                  );
              ((a && d) || n) && (d = !1),
                (!a && m()) || (i = setTimeout(f, 200));
            }
          },
          handleCompositionEnd: (e) => {
            o && clearTimeout(o),
              (o = setTimeout(() => {
                B.set(t, !1), f();
              }, 25));
          },
          handleCompositionStart: (e) => {
            B.set(t, !0), o && (clearTimeout(o), (o = null));
          },
          handleDOMBeforeInput: (e) => {
            var r;
            i && (clearTimeout(i), (i = null));
            var { inputType: a } = e,
              n = null,
              o = e.dataTransfer || e.data || void 0;
            !1 !== d &&
              "insertText" !== a &&
              "insertCompositionText" !== a &&
              (d = !1);
            var [s] = e.getTargetRanges();
            s &&
              (n = ve.toSlateRange(t, s, {
                exactMatch: !1,
                suppressThrow: !0,
              }));
            var l = ve.getWindow(t).getSelection();
            if (
              (!n &&
                l &&
                ((s = l),
                (n = ve.toSlateRange(t, l, {
                  exactMatch: !1,
                  suppressThrow: !0,
                }))),
              (n = null !== (r = n) && void 0 !== r ? r : t.selection))
            ) {
              if (u.e6.isExpanded(n) && a.startsWith("delete")) {
                var [c, f] = u.e6.edges(n);
                if (
                  u.NB.leaf(t, c.path).text.length === c.offset &&
                  0 === f.offset
                ) {
                  var v = u.ML.next(t, { at: c.path, match: u.xv.isText });
                  v &&
                    u.y$.equals(v[1], f.path) &&
                    (n = { anchor: f, focus: f });
                }
              }
              if (u.e6.isExpanded(n) && a.startsWith("delete")) {
                if (u.y$.equals(n.anchor.path, n.focus.path)) {
                  var [g, m] = u.e6.edges(n);
                  return h(n.anchor.path, {
                    text: "",
                    end: m.offset,
                    start: g.offset,
                  });
                }
                var M = a.endsWith("Backward") ? "backward" : "forward";
                return p(() => u.ML.deleteFragment(t, { direction: M }), {
                  at: n,
                });
              }
              switch (a) {
                case "deleteByComposition":
                case "deleteByCut":
                case "deleteByDrag":
                  return p(() => u.ML.deleteFragment(t), { at: n });
                case "deleteContent":
                case "deleteContentForward":
                  var { anchor: b } = n;
                  if (u.e6.isCollapsed(n)) {
                    var x = u.NB.leaf(t, b.path);
                    if (b.offset < x.text.length)
                      return h(b.path, {
                        text: "",
                        start: b.offset,
                        end: b.offset + 1,
                      });
                  }
                  return p(() => u.ML.deleteForward(t), { at: n });
                case "deleteContentBackward":
                  var k,
                    { anchor: y } = n;
                  return (z(s)
                    ? s.isCollapsed
                    : !(null === (k = s) || void 0 === k || !k.collapsed)) &&
                    u.e6.isCollapsed(n) &&
                    y.offset > 0
                    ? h(y.path, {
                        text: "",
                        start: y.offset - 1,
                        end: y.offset,
                      })
                    : p(() => u.ML.deleteBackward(t), { at: n });
                case "deleteEntireSoftLine":
                  return p(
                    () => {
                      u.ML.deleteBackward(t, { unit: "line" }),
                        u.ML.deleteForward(t, { unit: "line" });
                    },
                    { at: n }
                  );
                case "deleteHardLineBackward":
                  return p(() => u.ML.deleteBackward(t, { unit: "block" }), {
                    at: n,
                  });
                case "deleteSoftLineBackward":
                  return p(() => u.ML.deleteBackward(t, { unit: "line" }), {
                    at: n,
                  });
                case "deleteHardLineForward":
                  return p(() => u.ML.deleteForward(t, { unit: "block" }), {
                    at: n,
                  });
                case "deleteSoftLineForward":
                  return p(() => u.ML.deleteForward(t, { unit: "line" }), {
                    at: n,
                  });
                case "deleteWordBackward":
                  return p(() => u.ML.deleteBackward(t, { unit: "word" }), {
                    at: n,
                  });
                case "deleteWordForward":
                  return p(() => u.ML.deleteForward(t, { unit: "word" }), {
                    at: n,
                  });
                case "insertLineBreak":
                  return p(() => u.ML.insertSoftBreak(t), { at: n });
                case "insertParagraph":
                  return p(() => u.ML.insertBreak(t), { at: n });
                case "insertCompositionText":
                case "deleteCompositionText":
                case "insertFromComposition":
                case "insertFromDrop":
                case "insertFromPaste":
                case "insertFromYank":
                case "insertReplacementText":
                case "insertText":
                  if (
                    "DataTransfer" ===
                    (null === o || void 0 === o ? void 0 : o.constructor.name)
                  )
                    return p(() => ve.insertData(t, o), { at: n });
                  if ("string" === typeof o && o.includes("\n"))
                    return p(() => u.ML.insertSoftBreak(t), {
                      at: u.e6.end(n),
                    });
                  var L = null !== o && void 0 !== o ? o : "";
                  if (
                    (R.get(t) && (L = L.replace("\ufeff", "")),
                    u.y$.equals(n.anchor.path, n.focus.path))
                  ) {
                    var [C, D] = u.e6.edges(n),
                      E = { start: C.offset, end: D.offset, text: L };
                    if (L && d && "insertCompositionText" === a) {
                      var O = d.start + d.text.search(/\S|$/);
                      E.start + E.text.search(/\S|$/) === O + 1 &&
                      E.end === d.start + d.text.length
                        ? ((E.start -= 1), (d = null), w())
                        : (d = !1);
                    } else
                      d =
                        "insertText" === a &&
                        (null === d
                          ? E
                          : !(
                              !d ||
                              !u.e6.isCollapsed(n) ||
                              d.end + d.text.length !== C.offset
                            ) && at(at({}, d), {}, { text: d.text + L }));
                    return void h(C.path, E);
                  }
                  return p(() => u.ML.insertText(t, L), { at: n });
              }
            }
          },
          handleKeyDown: (e) => {
            m() || (v(!0), setTimeout(v));
          },
          handleDomMutations: (e) => {
            var r;
            m() ||
              g() ||
              (e.some((r) => Q(t, r, e)) &&
                (null === (r = A.get(t)) || void 0 === r || r()));
          },
          handleInput: () => {
            (!g() && m()) || f();
          },
        };
      }
      var ot = ["node"];
      function it(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      var st = { subtree: !0, childList: !0, characterData: !0 };
      function lt(e) {
        var { node: t } = e,
          r = p(e, ot);
        if (!te) return null;
        var a = ye(),
          n = (function () {
            var e = (0, d.useRef)(!1);
            return (
              (0, d.useEffect)(
                () => (
                  (e.current = !0),
                  () => {
                    e.current = !1;
                  }
                ),
                []
              ),
              e.current
            );
          })(),
          [o] = (0, d.useState)(() =>
            nt(
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? it(Object(r), !0).forEach(function (t) {
                        h(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : it(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })({ editor: a }, r)
            )
          );
        return (
          (function (e, t, r) {
            var [a] = (0, d.useState)(() => new MutationObserver(t));
            he(() => {
              a.takeRecords();
            }),
              (0, d.useEffect)(() => {
                if (!e.current)
                  throw new Error(
                    "Failed to attach MutationObserver, `node` is undefined"
                  );
                return a.observe(e.current, r), () => a.disconnect();
              }, []);
          })(t, o.handleDomMutations, st),
          P.set(a, o.scheduleFlush),
          n && o.flush(),
          o
        );
      }
      var dt = [
          "autoFocus",
          "decorate",
          "onDOMBeforeInput",
          "placeholder",
          "readOnly",
          "renderElement",
          "renderLeaf",
          "renderPlaceholder",
          "scrollSelectionIntoView",
          "style",
          "as",
        ],
        ct = ["text"];
      function ut(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ut(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ut(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var vt = (e) => d.createElement(d.Fragment, null, Te(e)),
        ht = (e) => {
          var {
              autoFocus: t,
              decorate: r = gt,
              onDOMBeforeInput: a,
              placeholder: o,
              readOnly: s = !1,
              renderElement: c,
              renderLeaf: f,
              renderPlaceholder: v = (e) =>
                d.createElement(pt, Object.assign({}, e)),
              scrollSelectionIntoView: h = mt,
              style: g = {},
              as: m = "div",
            } = e,
            w = p(e, dt),
            M = Ie(),
            [k, C] = (0, d.useState)(!1),
            D = (0, d.useRef)(null),
            F = (0, d.useRef)([]),
            { onUserInput: P, receivedUserInput: T } = (function () {
              var e = ye(),
                t = (0, d.useRef)(!1),
                r = (0, d.useRef)(0),
                a = (0, d.useCallback)(() => {
                  if (!t.current) {
                    t.current = !0;
                    var a = ve.getWindow(e);
                    a.cancelAnimationFrame(r.current),
                      (r.current = a.requestAnimationFrame(() => {
                        t.current = !1;
                      }));
                  }
                }, []);
              return (
                (0, d.useEffect)(
                  () => () => cancelAnimationFrame(r.current),
                  []
                ),
                { receivedUserInput: t, onUserInput: a }
              );
            })(),
            [, W] = (0, d.useReducer)((e) => e + 1, 0);
          A.set(M, W), E.set(M, s);
          var j = (0, d.useMemo)(
            () => ({
              isDraggingInternally: !1,
              isUpdatingSelection: !1,
              latestElement: null,
              hasMarkPlaceholder: !1,
            }),
            []
          );
          (0, d.useEffect)(() => {
            D.current && t && D.current.focus();
          }, [t]);
          var Y = (0, d.useCallback)(
              l()(() => {
                if (
                  (te || !ve.isComposing(M)) &&
                  (!j.isUpdatingSelection ||
                    (null !== V && void 0 !== V && V.isFlushing())) &&
                  !j.isDraggingInternally
                ) {
                  var e = ve.findDocumentOrShadowRoot(M),
                    { activeElement: t } = e,
                    r = ve.toDOMNode(M, M),
                    a = e.getSelection();
                  if (
                    (t === r
                      ? ((j.latestElement = t), O.set(M, !0))
                      : O.delete(M),
                    !a)
                  )
                    return u.YR.deselect(M);
                  var { anchorNode: n, focusNode: o } = a,
                    i = Mt(M, n) || bt(M, n),
                    l = Mt(M, o) || bt(M, o);
                  if (i && l) {
                    var d = ve.toSlateRange(M, a, {
                      exactMatch: !1,
                      suppressThrow: !0,
                    });
                    d &&
                      (ve.isComposing(M) ||
                      (null !== V && void 0 !== V && V.hasPendingChanges()) ||
                      (null !== V && void 0 !== V && V.isFlushing())
                        ? null === V || void 0 === V || V.handleUserSelect(d)
                        : u.YR.select(M, d));
                  }
                  !s || (i && l) || u.YR.deselect(M);
                }
              }, 100),
              [s]
            ),
            z = (0, d.useMemo)(() => i()(Y, 0), [Y]),
            V = lt({
              node: D,
              onDOMSelectionChange: Y,
              scheduleOnDOMSelectionChange: z,
            });
          he(() => {
            var e;
            D.current && (e = U(D.current))
              ? (b.set(M, e),
                x.set(M, D.current),
                L.set(M, D.current),
                y.set(D.current, M))
              : L.delete(M);
            var { selection: t } = M,
              r = ve.findDocumentOrShadowRoot(M).getSelection();
            if (
              r &&
              ve.isFocused(M) &&
              (null === V || void 0 === V || !V.hasPendingAction())
            ) {
              var a = (e) => {
                  var a = "None" !== r.type;
                  if (t || a) {
                    var n = x.get(M),
                      o = !1;
                    if (
                      (n.contains(r.anchorNode) &&
                        n.contains(r.focusNode) &&
                        (o = !0),
                      a && o && t && !e)
                    ) {
                      var i = ve.toSlateRange(M, r, {
                        exactMatch: !0,
                        suppressThrow: !0,
                      });
                      if (i && u.e6.equals(i, t)) {
                        var s;
                        if (!j.hasMarkPlaceholder) return;
                        var { anchorNode: l } = r;
                        if (
                          null !== l &&
                          void 0 !== l &&
                          null !== (s = l.parentElement) &&
                          void 0 !== s &&
                          s.hasAttribute("data-slate-mark-placeholder")
                        )
                          return;
                      }
                    }
                    if (!t || ve.hasRange(M, t)) {
                      j.isUpdatingSelection = !0;
                      var d = t && ve.toDOMRange(M, t);
                      return (
                        d
                          ? (u.e6.isBackward(t)
                              ? r.setBaseAndExtent(
                                  d.endContainer,
                                  d.endOffset,
                                  d.startContainer,
                                  d.startOffset
                                )
                              : r.setBaseAndExtent(
                                  d.startContainer,
                                  d.startOffset,
                                  d.endContainer,
                                  d.endOffset
                                ),
                            h(M, d))
                          : r.removeAllRanges(),
                        d
                      );
                    }
                    M.selection = ve.toSlateRange(M, r, {
                      exactMatch: !1,
                      suppressThrow: !0,
                    });
                  }
                },
                n = a(),
                o =
                  "action" ===
                  (null === V || void 0 === V ? void 0 : V.isFlushing());
              if (te && o) {
                var i = null,
                  s = requestAnimationFrame(() => {
                    if (o) {
                      var e = (e) => {
                        try {
                          ve.toDOMNode(M, M).focus(), a(e);
                        } catch (t) {}
                      };
                      e(),
                        (i = setTimeout(() => {
                          e(!0), (j.isUpdatingSelection = !1);
                        }));
                    }
                  });
                return () => {
                  cancelAnimationFrame(s), i && clearTimeout(i);
                };
              }
              setTimeout(() => {
                n && re && ve.toDOMNode(M, M).focus();
                j.isUpdatingSelection = !1;
              });
            }
          });
          var K = (0, d.useCallback)(
            (e) => {
              if ((P(), !s && Mt(M, e.target) && !kt(e, a))) {
                var t;
                if (V) return V.handleDOMBeforeInput(e);
                z.flush(), Y.flush();
                var { selection: r } = M,
                  { inputType: n } = e,
                  o = e.dataTransfer || e.data || void 0,
                  i =
                    "insertCompositionText" === n ||
                    "deleteCompositionText" === n;
                if (i && ve.isComposing(M)) return;
                var l = !1;
                if (
                  "insertText" === n &&
                  r &&
                  u.e6.isCollapsed(r) &&
                  e.data &&
                  1 === e.data.length &&
                  /[a-z ]/i.test(e.data) &&
                  0 !== r.anchor.offset
                ) {
                  var d, c;
                  (l = !0), M.marks && (l = !1);
                  var { anchor: f } = r,
                    [v, h] = ve.toDOMPoint(M, f),
                    p =
                      null === (d = v.parentElement) || void 0 === d
                        ? void 0
                        : d.closest("a"),
                    g = ve.getWindow(M);
                  if (l && p && ve.hasDOMNode(M, p)) {
                    var m,
                      w =
                        null === g || void 0 === g
                          ? void 0
                          : g.document
                              .createTreeWalker(p, NodeFilter.SHOW_TEXT)
                              .lastChild();
                    w === v &&
                      (null === (m = w.textContent) || void 0 === m
                        ? void 0
                        : m.length) === h &&
                      (l = !1);
                  }
                  if (
                    l &&
                    v.parentElement &&
                    "pre" ===
                      (null === g ||
                      void 0 === g ||
                      null === (c = g.getComputedStyle(v.parentElement)) ||
                      void 0 === c
                        ? void 0
                        : c.whiteSpace)
                  ) {
                    var b = u.ML.above(M, {
                      at: f.path,
                      match: (e) => u.ML.isBlock(M, e),
                    });
                    b && u.NB.string(b[0]).includes("\t") && (l = !1);
                  }
                }
                if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                  var [x] = e.getTargetRanges();
                  if (x) {
                    var k = ve.toSlateRange(M, x, {
                      exactMatch: !1,
                      suppressThrow: !1,
                    });
                    if (!r || !u.e6.equals(r, k)) {
                      l = !1;
                      var y =
                        !i && M.selection && u.ML.rangeRef(M, M.selection);
                      u.YR.select(M, k), y && S.set(M, y);
                    }
                  }
                }
                if (i) return;
                if (
                  (l || e.preventDefault(),
                  r && u.e6.isExpanded(r) && n.startsWith("delete"))
                ) {
                  var L = n.endsWith("Backward") ? "backward" : "forward";
                  return void u.ML.deleteFragment(M, { direction: L });
                }
                switch (n) {
                  case "deleteByComposition":
                  case "deleteByCut":
                  case "deleteByDrag":
                    u.ML.deleteFragment(M);
                    break;
                  case "deleteContent":
                  case "deleteContentForward":
                    u.ML.deleteForward(M);
                    break;
                  case "deleteContentBackward":
                    u.ML.deleteBackward(M);
                    break;
                  case "deleteEntireSoftLine":
                    u.ML.deleteBackward(M, { unit: "line" }),
                      u.ML.deleteForward(M, { unit: "line" });
                    break;
                  case "deleteHardLineBackward":
                    u.ML.deleteBackward(M, { unit: "block" });
                    break;
                  case "deleteSoftLineBackward":
                    u.ML.deleteBackward(M, { unit: "line" });
                    break;
                  case "deleteHardLineForward":
                    u.ML.deleteForward(M, { unit: "block" });
                    break;
                  case "deleteSoftLineForward":
                    u.ML.deleteForward(M, { unit: "line" });
                    break;
                  case "deleteWordBackward":
                    u.ML.deleteBackward(M, { unit: "word" });
                    break;
                  case "deleteWordForward":
                    u.ML.deleteForward(M, { unit: "word" });
                    break;
                  case "insertLineBreak":
                    u.ML.insertSoftBreak(M);
                    break;
                  case "insertParagraph":
                    u.ML.insertBreak(M);
                    break;
                  case "insertFromComposition":
                  case "insertFromDrop":
                  case "insertFromPaste":
                  case "insertFromYank":
                  case "insertReplacementText":
                  case "insertText":
                    "insertFromComposition" === n &&
                      ve.isComposing(M) &&
                      (C(!1), B.set(M, !1)),
                      "DataTransfer" ===
                      (null === o || void 0 === o ? void 0 : o.constructor.name)
                        ? ve.insertData(M, o)
                        : "string" === typeof o &&
                          (l
                            ? F.current.push(() => u.ML.insertText(M, o))
                            : u.ML.insertText(M, o));
                }
                var D =
                  null === (t = S.get(M)) || void 0 === t ? void 0 : t.unref();
                S.delete(M),
                  !D ||
                    (M.selection && u.e6.equals(M.selection, D)) ||
                    u.YR.select(M, D);
              }
            },
            [s, a]
          );
          he(
            () => (
              D.current && fe && D.current.addEventListener("beforeinput", K),
              () => {
                D.current &&
                  fe &&
                  D.current.removeEventListener("beforeinput", K);
              }
            ),
            [K]
          ),
            he(() => {
              var e = ve.getWindow(M);
              return (
                e.document.addEventListener("selectionchange", z),
                () => {
                  e.document.removeEventListener("selectionchange", z);
                }
              );
            }, [z]);
          var H = r([M, []]);
          if (
            o &&
            1 === M.children.length &&
            1 === Array.from(u.NB.texts(M)).length &&
            "" === u.NB.string(M) &&
            !k
          ) {
            var X = u.ML.start(M, []);
            H.push({ [I]: !0, placeholder: o, anchor: X, focus: X });
          }
          var { marks: J } = M;
          if (
            ((j.hasMarkPlaceholder = !1),
            M.selection && u.e6.isCollapsed(M.selection) && J)
          ) {
            var { anchor: Q } = M.selection,
              Z = u.NB.leaf(M, Q.path),
              ee = p(Z, ct);
            if (!u.xv.equals(Z, J, { loose: !0 })) {
              j.hasMarkPlaceholder = !0;
              var ne = Object.fromEntries(
                Object.keys(ee).map((e) => [e, null])
              );
              H.push(
                ft(ft(ft({ [q]: !0 }, ne), J), {}, { anchor: Q, focus: Q })
              );
            }
          }
          return (
            (0, d.useEffect)(() => {
              setTimeout(() => {
                var { selection: e } = M;
                if (e) {
                  var { anchor: t } = e,
                    r = u.NB.leaf(M, t.path);
                  if (J && !u.xv.equals(r, J, { loose: !0 }))
                    return void R.set(M, J);
                }
                R.delete(M);
              });
            }),
            d.createElement(
              We.Provider,
              { value: s },
              d.createElement(
                Pe.Provider,
                { value: r },
                d.createElement(
                  Ke,
                  { node: D, receivedUserInput: T },
                  d.createElement(
                    m,
                    Object.assign(
                      {
                        role: s ? void 0 : "textbox",
                        "aria-multiline": !s || void 0,
                      },
                      w,
                      {
                        spellCheck: !(!fe && ue) && w.spellCheck,
                        autoCorrect: fe || !ue ? w.autoCorrect : "false",
                        autoCapitalize: fe || !ue ? w.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !s,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: D,
                        style: ft(
                          {
                            position: "relative",
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                          },
                          g
                        ),
                        onBeforeInput: (0, d.useCallback)(
                          (e) => {
                            if (
                              !fe &&
                              !s &&
                              !xt(e, w.onBeforeInput) &&
                              Mt(M, e.target) &&
                              (e.preventDefault(), !ve.isComposing(M))
                            ) {
                              var t = e.data;
                              u.ML.insertText(M, t);
                            }
                          },
                          [s]
                        ),
                        onInput: (0, d.useCallback)((e) => {
                          if (V) V.handleInput();
                          else {
                            for (var t of F.current) t();
                            F.current = [];
                          }
                        }, []),
                        onBlur: (0, d.useCallback)(
                          (e) => {
                            if (
                              !s &&
                              !j.isUpdatingSelection &&
                              Mt(M, e.target) &&
                              !xt(e, w.onBlur)
                            ) {
                              var t = ve.findDocumentOrShadowRoot(M);
                              if (j.latestElement !== t.activeElement) {
                                var { relatedTarget: r } = e;
                                if (
                                  r !== ve.toDOMNode(M, M) &&
                                  (!$(r) ||
                                    !r.hasAttribute("data-slate-spacer"))
                                ) {
                                  if (
                                    null != r &&
                                    _(r) &&
                                    ve.hasDOMNode(M, r)
                                  ) {
                                    var a = ve.toSlateNode(M, r);
                                    if (u.W_.isElement(a) && !M.isVoid(a))
                                      return;
                                  }
                                  if (ae) {
                                    var n = t.getSelection();
                                    null === n ||
                                      void 0 === n ||
                                      n.removeAllRanges();
                                  }
                                  O.delete(M);
                                }
                              }
                            }
                          },
                          [s, w.onBlur]
                        ),
                        onClick: (0, d.useCallback)(
                          (e) => {
                            if (
                              wt(M, e.target) &&
                              !xt(e, w.onClick) &&
                              _(e.target)
                            ) {
                              var t = ve.toSlateNode(M, e.target),
                                r = ve.findPath(M, t);
                              if (!u.ML.hasPath(M, r) || u.NB.get(M, r) !== t)
                                return;
                              if (3 === e.detail && r.length >= 1) {
                                var a = r;
                                if (!u.ML.isBlock(M, t)) {
                                  var n,
                                    o = u.ML.above(M, {
                                      match: (e) => u.ML.isBlock(M, e),
                                      at: r,
                                    });
                                  a =
                                    null !==
                                      (n =
                                        null === o || void 0 === o
                                          ? void 0
                                          : o[1]) && void 0 !== n
                                      ? n
                                      : r.slice(0, 1);
                                }
                                var i = u.ML.range(M, a);
                                return void u.YR.select(M, i);
                              }
                              if (s) return;
                              var l = u.ML.start(M, r),
                                d = u.ML.end(M, r),
                                c = u.ML.void(M, { at: l }),
                                f = u.ML.void(M, { at: d });
                              if (c && f && u.y$.equals(c[1], f[1])) {
                                var v = u.ML.range(M, l);
                                u.YR.select(M, v);
                              }
                            }
                          },
                          [s, w.onClick]
                        ),
                        onCompositionEnd: (0, d.useCallback)(
                          (e) => {
                            if (Mt(M, e.target)) {
                              if (
                                (ve.isComposing(M) && (C(!1), B.set(M, !1)),
                                null === V ||
                                  void 0 === V ||
                                  V.handleCompositionEnd(e),
                                xt(e, w.onCompositionEnd) || te)
                              )
                                return;
                              if (
                                !ae &&
                                !se &&
                                !G &&
                                !le &&
                                !ce &&
                                !de &&
                                e.data
                              ) {
                                var t = R.get(M);
                                R.delete(M),
                                  void 0 !== t &&
                                    (N.set(M, M.marks), (M.marks = t)),
                                  u.ML.insertText(M, e.data);
                                var r = N.get(M);
                                N.delete(M), void 0 !== r && (M.marks = r);
                              }
                            }
                          },
                          [w.onCompositionEnd]
                        ),
                        onCompositionUpdate: (0, d.useCallback)(
                          (e) => {
                            Mt(M, e.target) &&
                              !xt(e, w.onCompositionUpdate) &&
                              (ve.isComposing(M) || (C(!0), B.set(M, !0)));
                          },
                          [w.onCompositionUpdate]
                        ),
                        onCompositionStart: (0, d.useCallback)(
                          (e) => {
                            if (Mt(M, e.target)) {
                              if (
                                (null === V ||
                                  void 0 === V ||
                                  V.handleCompositionStart(e),
                                xt(e, w.onCompositionStart) || te)
                              )
                                return;
                              C(!0);
                              var { selection: t } = M;
                              if (t) {
                                if (u.e6.isExpanded(t))
                                  return void u.ML.deleteFragment(M);
                                var r = u.ML.above(M, {
                                  match: (e) => u.ML.isInline(M, e),
                                  mode: "highest",
                                });
                                if (r) {
                                  var [, a] = r;
                                  if (u.ML.isEnd(M, t.anchor, a)) {
                                    var n = u.ML.after(M, a);
                                    u.YR.setSelection(M, {
                                      anchor: n,
                                      focus: n,
                                    });
                                  }
                                }
                              }
                            }
                          },
                          [w.onCompositionStart]
                        ),
                        onCopy: (0, d.useCallback)(
                          (e) => {
                            Mt(M, e.target) &&
                              !xt(e, w.onCopy) &&
                              (e.preventDefault(),
                              ve.setFragmentData(M, e.clipboardData, "copy"));
                          },
                          [w.onCopy]
                        ),
                        onCut: (0, d.useCallback)(
                          (e) => {
                            if (!s && Mt(M, e.target) && !xt(e, w.onCut)) {
                              e.preventDefault(),
                                ve.setFragmentData(M, e.clipboardData, "cut");
                              var { selection: t } = M;
                              if (t)
                                if (u.e6.isExpanded(t)) u.ML.deleteFragment(M);
                                else {
                                  var r = u.NB.parent(M, t.anchor.path);
                                  u.ML.isVoid(M, r) && u.YR.delete(M);
                                }
                            }
                          },
                          [s, w.onCut]
                        ),
                        onDragOver: (0, d.useCallback)(
                          (e) => {
                            if (wt(M, e.target) && !xt(e, w.onDragOver)) {
                              var t = ve.toSlateNode(M, e.target);
                              u.ML.isVoid(M, t) && e.preventDefault();
                            }
                          },
                          [w.onDragOver]
                        ),
                        onDragStart: (0, d.useCallback)(
                          (e) => {
                            if (
                              !s &&
                              wt(M, e.target) &&
                              !xt(e, w.onDragStart)
                            ) {
                              var t = ve.toSlateNode(M, e.target),
                                r = ve.findPath(M, t);
                              if (
                                u.ML.isVoid(M, t) ||
                                u.ML.void(M, { at: r, voids: !0 })
                              ) {
                                var a = u.ML.range(M, r);
                                u.YR.select(M, a);
                              }
                              (j.isDraggingInternally = !0),
                                ve.setFragmentData(M, e.dataTransfer, "drag");
                            }
                          },
                          [s, w.onDragStart]
                        ),
                        onDrop: (0, d.useCallback)(
                          (e) => {
                            if (!s && wt(M, e.target) && !xt(e, w.onDrop)) {
                              e.preventDefault();
                              var t = M.selection,
                                r = ve.findEventRange(M, e),
                                a = e.dataTransfer;
                              u.YR.select(M, r),
                                j.isDraggingInternally &&
                                  (!t ||
                                    u.e6.equals(t, r) ||
                                    u.ML.void(M, { at: r, voids: !0 }) ||
                                    u.YR.delete(M, { at: t })),
                                ve.insertData(M, a),
                                ve.isFocused(M) || ve.focus(M);
                            }
                            j.isDraggingInternally = !1;
                          },
                          [s, w.onDrop]
                        ),
                        onDragEnd: (0, d.useCallback)(
                          (e) => {
                            !s &&
                              j.isDraggingInternally &&
                              w.onDragEnd &&
                              wt(M, e.target) &&
                              w.onDragEnd(e),
                              (j.isDraggingInternally = !1);
                          },
                          [s, w.onDragEnd]
                        ),
                        onFocus: (0, d.useCallback)(
                          (e) => {
                            if (
                              !s &&
                              !j.isUpdatingSelection &&
                              Mt(M, e.target) &&
                              !xt(e, w.onFocus)
                            ) {
                              var t = ve.toDOMNode(M, M),
                                r = ve.findDocumentOrShadowRoot(M);
                              if (
                                ((j.latestElement = r.activeElement),
                                re && e.target !== t)
                              )
                                return void t.focus();
                              O.set(M, !0);
                            }
                          },
                          [s, w.onFocus]
                        ),
                        onKeyDown: (0, d.useCallback)(
                          (e) => {
                            if (!s && Mt(M, e.target)) {
                              null === V || void 0 === V || V.handleKeyDown(e);
                              var { nativeEvent: t } = e;
                              if (
                                (ve.isComposing(M) &&
                                  !1 === t.isComposing &&
                                  (B.set(M, !1), C(!1)),
                                xt(e, w.onKeyDown) || ve.isComposing(M))
                              )
                                return;
                              var { selection: r } = M,
                                a =
                                  M.children[null !== r ? r.focus.path[0] : 0],
                                o = "rtl" === n()(u.NB.string(a));
                              if (_e.isRedo(t)) {
                                e.preventDefault();
                                var i = M;
                                return void (
                                  "function" === typeof i.redo && i.redo()
                                );
                              }
                              if (_e.isUndo(t)) {
                                e.preventDefault();
                                var l = M;
                                return void (
                                  "function" === typeof l.undo && l.undo()
                                );
                              }
                              if (_e.isMoveLineBackward(t))
                                return (
                                  e.preventDefault(),
                                  void u.YR.move(M, {
                                    unit: "line",
                                    reverse: !0,
                                  })
                                );
                              if (_e.isMoveLineForward(t))
                                return (
                                  e.preventDefault(),
                                  void u.YR.move(M, { unit: "line" })
                                );
                              if (_e.isExtendLineBackward(t))
                                return (
                                  e.preventDefault(),
                                  void u.YR.move(M, {
                                    unit: "line",
                                    edge: "focus",
                                    reverse: !0,
                                  })
                                );
                              if (_e.isExtendLineForward(t))
                                return (
                                  e.preventDefault(),
                                  void u.YR.move(M, {
                                    unit: "line",
                                    edge: "focus",
                                  })
                                );
                              if (_e.isMoveBackward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && u.e6.isCollapsed(r)
                                    ? u.YR.move(M, { reverse: !o })
                                    : u.YR.collapse(M, { edge: "start" }))
                                );
                              if (_e.isMoveForward(t))
                                return (
                                  e.preventDefault(),
                                  void (r && u.e6.isCollapsed(r)
                                    ? u.YR.move(M, { reverse: o })
                                    : u.YR.collapse(M, { edge: "end" }))
                                );
                              if (_e.isMoveWordBackward(t))
                                return (
                                  e.preventDefault(),
                                  r &&
                                    u.e6.isExpanded(r) &&
                                    u.YR.collapse(M, { edge: "focus" }),
                                  void u.YR.move(M, {
                                    unit: "word",
                                    reverse: !o,
                                  })
                                );
                              if (_e.isMoveWordForward(t))
                                return (
                                  e.preventDefault(),
                                  r &&
                                    u.e6.isExpanded(r) &&
                                    u.YR.collapse(M, { edge: "focus" }),
                                  void u.YR.move(M, {
                                    unit: "word",
                                    reverse: o,
                                  })
                                );
                              if (fe) {
                                if (
                                  (oe || ae) &&
                                  r &&
                                  (_e.isDeleteBackward(t) ||
                                    _e.isDeleteForward(t)) &&
                                  u.e6.isCollapsed(r)
                                ) {
                                  var d = u.NB.parent(M, r.anchor.path);
                                  if (
                                    u.W_.isElement(d) &&
                                    u.ML.isVoid(M, d) &&
                                    (u.ML.isInline(M, d) || u.ML.isBlock(M, d))
                                  )
                                    return (
                                      e.preventDefault(),
                                      void u.ML.deleteBackward(M, {
                                        unit: "block",
                                      })
                                    );
                                }
                              } else {
                                if (
                                  _e.isBold(t) ||
                                  _e.isItalic(t) ||
                                  _e.isTransposeCharacter(t)
                                )
                                  return void e.preventDefault();
                                if (_e.isSoftBreak(t))
                                  return (
                                    e.preventDefault(),
                                    void u.ML.insertSoftBreak(M)
                                  );
                                if (_e.isSplitBlock(t))
                                  return (
                                    e.preventDefault(), void u.ML.insertBreak(M)
                                  );
                                if (_e.isDeleteBackward(t))
                                  return (
                                    e.preventDefault(),
                                    void (r && u.e6.isExpanded(r)
                                      ? u.ML.deleteFragment(M, {
                                          direction: "backward",
                                        })
                                      : u.ML.deleteBackward(M))
                                  );
                                if (_e.isDeleteForward(t))
                                  return (
                                    e.preventDefault(),
                                    void (r && u.e6.isExpanded(r)
                                      ? u.ML.deleteFragment(M, {
                                          direction: "forward",
                                        })
                                      : u.ML.deleteForward(M))
                                  );
                                if (_e.isDeleteLineBackward(t))
                                  return (
                                    e.preventDefault(),
                                    void (r && u.e6.isExpanded(r)
                                      ? u.ML.deleteFragment(M, {
                                          direction: "backward",
                                        })
                                      : u.ML.deleteBackward(M, {
                                          unit: "line",
                                        }))
                                  );
                                if (_e.isDeleteLineForward(t))
                                  return (
                                    e.preventDefault(),
                                    void (r && u.e6.isExpanded(r)
                                      ? u.ML.deleteFragment(M, {
                                          direction: "forward",
                                        })
                                      : u.ML.deleteForward(M, { unit: "line" }))
                                  );
                                if (_e.isDeleteWordBackward(t))
                                  return (
                                    e.preventDefault(),
                                    void (r && u.e6.isExpanded(r)
                                      ? u.ML.deleteFragment(M, {
                                          direction: "backward",
                                        })
                                      : u.ML.deleteBackward(M, {
                                          unit: "word",
                                        }))
                                  );
                                if (_e.isDeleteWordForward(t))
                                  return (
                                    e.preventDefault(),
                                    void (r && u.e6.isExpanded(r)
                                      ? u.ML.deleteFragment(M, {
                                          direction: "forward",
                                        })
                                      : u.ML.deleteForward(M, { unit: "word" }))
                                  );
                              }
                            }
                          },
                          [s, w.onKeyDown]
                        ),
                        onPaste: (0, d.useCallback)(
                          (e) => {
                            s ||
                              !Mt(M, e.target) ||
                              xt(e, w.onPaste) ||
                              (fe &&
                                !((e) =>
                                  e.clipboardData &&
                                  "" !==
                                    e.clipboardData.getData("text/plain") &&
                                  1 === e.clipboardData.types.length)(
                                  e.nativeEvent
                                )) ||
                              (e.preventDefault(),
                              ve.insertData(M, e.clipboardData));
                          },
                          [s, w.onPaste]
                        ),
                      }
                    ),
                    d.createElement(vt, {
                      decorations: H,
                      node: M,
                      renderElement: c,
                      renderPlaceholder: v,
                      renderLeaf: f,
                      selection: M.selection,
                    })
                  )
                )
              )
            )
          );
        },
        pt = (e) => {
          var { attributes: t, children: r } = e;
          return d.createElement(
            "span",
            Object.assign({}, t),
            r,
            te && d.createElement("br", null)
          );
        },
        gt = () => [],
        mt = (e, t) => {
          if (!e.selection || (e.selection && u.e6.isCollapsed(e.selection))) {
            var r = t.startContainer.parentElement;
            (r.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
              (0, c.Z)(r, { scrollMode: "if-needed" }),
              delete r.getBoundingClientRect;
          }
        },
        wt = (e, t) => _(t) && ve.hasDOMNode(e, t),
        Mt = (e, t) => _(t) && ve.hasDOMNode(e, t, { editable: !0 }),
        bt = (e, t) => {
          if (E.get(e)) return !1;
          var r = wt(e, t) && ve.toSlateNode(e, t);
          return u.ML.isVoid(e, r);
        },
        xt = (e, t) => {
          if (!t) return !1;
          var r = t(e);
          return null != r
            ? r
            : e.isDefaultPrevented() || e.isPropagationStopped();
        },
        kt = (e, t) => {
          if (!t) return !1;
          var r = t(e);
          return null != r ? r : e.defaultPrevented;
        },
        yt = (0, d.createContext)(!1),
        Lt = () => (0, d.useContext)(yt);
      var Ct = (0, d.createContext)({});
      var Dt = ["editor", "children", "onChange", "value"],
        Et = (e) => {
          var { editor: t, children: r, onChange: a, value: n } = e,
            o = p(e, Dt),
            i = (0, d.useRef)(!1),
            [s, l] = d.useState(() => {
              if (!u.NB.isNodeList(n))
                throw new Error(
                  "[Slate] value is invalid! Expected a list of elements" +
                    "but got: ".concat(u.o4.stringify(n))
                );
              if (!u.ML.isEditor(t))
                throw new Error(
                  "[Slate] editor is invalid! you passed:" +
                    "".concat(u.o4.stringify(t))
                );
              return (t.children = n), Object.assign(t, o), { v: 0, editor: t };
            }),
            { selectorContext: c, onChange: f } = (function (e) {
              var t = (0, d.useRef)([]).current,
                r = (0, d.useRef)({ editor: e }).current,
                a = (0, d.useCallback)((e) => {
                  (r.editor = e), t.forEach((t) => t(e));
                }, []);
              return {
                selectorContext: (0, d.useMemo)(
                  () => ({
                    getSlate: () => r.editor,
                    addEventListener: (e) => (
                      t.push(e),
                      () => {
                        t.splice(t.indexOf(e), 1);
                      }
                    ),
                  }),
                  [t, r]
                ),
                onChange: a,
              };
            })(t),
            v = (0, d.useCallback)(() => {
              a && a(t.children), l((e) => ({ v: e.v + 1, editor: t })), f(t);
            }, [a]);
          F.set(t, v),
            (0, d.useEffect)(
              () => () => {
                F.set(t, () => {}), (i.current = !0);
              },
              []
            );
          var [h, g] = (0, d.useState)(ve.isFocused(t));
          return (
            (0, d.useEffect)(() => {
              g(ve.isFocused(t));
            }),
            he(() => {
              var e = () => g(ve.isFocused(t));
              return Z
                ? (document.addEventListener("focusin", e),
                  document.addEventListener("focusout", e),
                  () => {
                    document.removeEventListener("focusin", e),
                      document.removeEventListener("focusout", e);
                  })
                : (document.addEventListener("focus", e, !0),
                  document.addEventListener("blur", e, !0),
                  () => {
                    document.removeEventListener("focus", e, !0),
                      document.removeEventListener("blur", e, !0);
                  });
            }, []),
            d.createElement(
              Ct.Provider,
              { value: c },
              d.createElement(
                Ae.Provider,
                { value: s },
                d.createElement(
                  ke.Provider,
                  { value: s.editor },
                  d.createElement(yt.Provider, { value: h }, r)
                )
              )
            )
          );
        },
        Ot = (e, t) => {
          var r = (t.top + t.bottom) / 2;
          return e.top <= r && e.bottom >= r;
        },
        Bt = (e, t, r) => {
          var a = ve.toDOMRange(e, t).getBoundingClientRect(),
            n = ve.toDOMRange(e, r).getBoundingClientRect();
          return Ot(a, n) && Ot(n, a);
        };
      function St(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? St(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : St(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Pt = (e) => {
          var t = e,
            {
              apply: r,
              onChange: a,
              deleteBackward: n,
              addMark: o,
              removeMark: i,
            } = t;
          return (
            D.set(t, new WeakMap()),
            (t.addMark = (e, r) => {
              var a, n;
              null === (a = P.get(t)) || void 0 === a || a(),
                !R.get(t) &&
                  null !== (n = T.get(t)) &&
                  void 0 !== n &&
                  n.length &&
                  R.set(t, null),
                N.delete(t),
                o(e, r);
            }),
            (t.removeMark = (e) => {
              var r;
              !R.get(t) &&
                null !== (r = T.get(t)) &&
                void 0 !== r &&
                r.length &&
                R.set(t, null),
                N.delete(t),
                i(e);
            }),
            (t.deleteBackward = (e) => {
              if ("line" !== e) return n(e);
              if (t.selection && u.e6.isCollapsed(t.selection)) {
                var r = u.ML.above(t, {
                  match: (e) => u.ML.isBlock(t, e),
                  at: t.selection,
                });
                if (r) {
                  var [, a] = r,
                    o = u.ML.range(t, a, t.selection.anchor),
                    i = ((e, t) => {
                      var r = u.ML.range(e, u.e6.end(t)),
                        a = Array.from(u.ML.positions(e, { at: t })),
                        n = 0,
                        o = a.length,
                        i = Math.floor(o / 2);
                      if (Bt(e, u.ML.range(e, a[n]), r))
                        return u.ML.range(e, a[n], r);
                      if (a.length < 2)
                        return u.ML.range(e, a[a.length - 1], r);
                      for (; i !== a.length && i !== n; )
                        Bt(e, u.ML.range(e, a[i]), r) ? (o = i) : (n = i),
                          (i = Math.floor((n + o) / 2));
                      return u.ML.range(e, a[o], r);
                    })(t, o);
                  u.e6.isCollapsed(i) || u.YR.delete(t, { at: i });
                }
              }
            }),
            (t.apply = (e) => {
              var a = [],
                n = T.get(t);
              if (null !== n && void 0 !== n && n.length) {
                var o = n
                  .map((t) =>
                    (function (e, t) {
                      var { path: r, diff: a, id: n } = e;
                      switch (t.type) {
                        case "insert_text":
                          return !u.y$.equals(t.path, r) || t.offset >= a.end
                            ? e
                            : t.offset <= a.start
                            ? {
                                diff: {
                                  start: t.text.length + a.start,
                                  end: t.text.length + a.end,
                                  text: a.text,
                                },
                                id: n,
                                path: r,
                              }
                            : {
                                diff: {
                                  start: a.start,
                                  end: a.end + t.text.length,
                                  text: a.text,
                                },
                                id: n,
                                path: r,
                              };
                        case "remove_text":
                          return !u.y$.equals(t.path, r) || t.offset >= a.end
                            ? e
                            : t.offset + t.text.length <= a.start
                            ? {
                                diff: {
                                  start: a.start - t.text.length,
                                  end: a.end - t.text.length,
                                  text: a.text,
                                },
                                id: n,
                                path: r,
                              }
                            : {
                                diff: {
                                  start: a.start,
                                  end: a.end - t.text.length,
                                  text: a.text,
                                },
                                id: n,
                                path: r,
                              };
                        case "split_node":
                          return !u.y$.equals(t.path, r) || t.position >= a.end
                            ? {
                                diff: a,
                                id: n,
                                path: u.y$.transform(r, t, {
                                  affinity: "backward",
                                }),
                              }
                            : t.position > a.start
                            ? {
                                diff: {
                                  start: a.start,
                                  end: Math.min(t.position, a.end),
                                  text: a.text,
                                },
                                id: n,
                                path: r,
                              }
                            : {
                                diff: {
                                  start: a.start - t.position,
                                  end: a.end - t.position,
                                  text: a.text,
                                },
                                id: n,
                                path: u.y$.transform(r, t, {
                                  affinity: "forward",
                                }),
                              };
                        case "merge_node":
                          return u.y$.equals(t.path, r)
                            ? {
                                diff: {
                                  start: a.start + t.position,
                                  end: a.end + t.position,
                                  text: a.text,
                                },
                                id: n,
                                path: u.y$.transform(r, t),
                              }
                            : { diff: a, id: n, path: u.y$.transform(r, t) };
                      }
                      var o = u.y$.transform(r, t);
                      return o ? { diff: a, path: o, id: n } : null;
                    })(t, e)
                  )
                  .filter(Boolean);
                T.set(t, o);
              }
              var i = j.get(t);
              i && j.set(t, tt(t, i, e));
              var s = W.get(t);
              if (null !== s && void 0 !== s && s.at) {
                var l = u.E9.isPoint(null === s || void 0 === s ? void 0 : s.at)
                  ? et(t, s.at, e)
                  : tt(t, s.at, e);
                W.set(t, l ? Ft(Ft({}, s), {}, { at: l }) : null);
              }
              switch (e.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                case "split_node":
                  a.push(...Rt(t, e.path));
                  break;
                case "set_selection":
                  var d;
                  null === (d = S.get(t)) || void 0 === d || d.unref(),
                    S.delete(t);
                  break;
                case "insert_node":
                case "remove_node":
                  a.push(...Rt(t, u.y$.parent(e.path)));
                  break;
                case "merge_node":
                  var c = u.y$.previous(e.path);
                  a.push(...Rt(t, c));
                  break;
                case "move_node":
                  var f = u.y$.common(
                    u.y$.parent(e.path),
                    u.y$.parent(e.newPath)
                  );
                  a.push(...Rt(t, f));
              }
              for (var [v, h] of (r(e), a)) {
                var [p] = u.ML.node(t, v);
                C.set(p, h);
              }
            }),
            (t.setFragmentData = (e) => {
              var { selection: r } = t;
              if (r) {
                var [a, n] = u.e6.edges(r),
                  o = u.ML.void(t, { at: a.path }),
                  i = u.ML.void(t, { at: n.path });
                if (!u.e6.isCollapsed(r) || o) {
                  var s = ve.toDOMRange(t, r),
                    l = s.cloneContents(),
                    d = l.childNodes[0];
                  if (
                    (l.childNodes.forEach((e) => {
                      e.textContent && "" !== e.textContent.trim() && (d = e);
                    }),
                    i)
                  ) {
                    var [c] = i,
                      f = s.cloneRange(),
                      v = ve.toDOMNode(t, c);
                    f.setEndAfter(v), (l = f.cloneContents());
                  }
                  if (
                    (o && (d = l.querySelector("[data-slate-spacer]")),
                    Array.from(
                      l.querySelectorAll("[data-slate-zero-width]")
                    ).forEach((e) => {
                      var t = "n" === e.getAttribute("data-slate-zero-width");
                      e.textContent = t ? "\n" : "";
                    }),
                    V(d))
                  ) {
                    var h = d.ownerDocument.createElement("span");
                    (h.style.whiteSpace = "pre"),
                      h.appendChild(d),
                      l.appendChild(h),
                      (d = h);
                  }
                  var p = t.getFragment(),
                    g = JSON.stringify(p),
                    m = window.btoa(encodeURIComponent(g));
                  d.setAttribute("data-slate-fragment", m),
                    e.setData("application/x-slate-fragment", m);
                  var w = l.ownerDocument.createElement("div");
                  return (
                    w.appendChild(l),
                    w.setAttribute("hidden", "true"),
                    l.ownerDocument.body.appendChild(w),
                    e.setData("text/html", w.innerHTML),
                    e.setData("text/plain", X(w)),
                    l.ownerDocument.body.removeChild(w),
                    e
                  );
                }
              }
            }),
            (t.insertData = (e) => {
              t.insertFragmentData(e) || t.insertTextData(e);
            }),
            (t.insertFragmentData = (e) => {
              var r =
                e.getData("application/x-slate-fragment") ||
                ((e) => {
                  var t = e.getData("text/html"),
                    [, r] = t.match(J) || [];
                  return r;
                })(e);
              if (r) {
                var a = decodeURIComponent(window.atob(r)),
                  n = JSON.parse(a);
                return t.insertFragment(n), !0;
              }
              return !1;
            }),
            (t.insertTextData = (e) => {
              var r = e.getData("text/plain");
              if (r) {
                var a = r.split(/\r\n|\r|\n/),
                  n = !1;
                for (var o of a)
                  n && u.YR.splitNodes(t, { always: !0 }),
                    t.insertText(o),
                    (n = !0);
                return !0;
              }
              return !1;
            }),
            (t.onChange = () => {
              v.unstable_batchedUpdates(() => {
                var e = F.get(t);
                e && e(), a();
              });
            }),
            t
          );
        },
        Rt = (e, t) => {
          var r = [];
          for (var [a, n] of u.ML.levels(e, { at: t })) {
            var o = ve.findKey(e, a);
            r.push([n, o]);
          }
          return r;
        };
    },
  },
]);
