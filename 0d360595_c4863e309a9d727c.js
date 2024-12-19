"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [35605],
  {
    288259: function (e, t, n) {
      n.d(t, {
        p: function () {
          return Le;
        },
        EH: function () {
          return He;
        },
      });
      var o = n(616711),
        r = n(102396),
        i = n(393291);
      const s = function (e) {
        for (var t = 0; ; t++) if (!(e = e.previousSibling)) return t;
      };
      const l = function (e, t, n, o) {
          return n && (c(e, t, n, o, -1) || c(e, t, n, o, 1));
        },
        a = /^(img|br|input|textarea|hr)$/i;
      function c(e, t, n, o, r) {
        for (;;) {
          if (e == n && t == o) return !0;
          if (t == (r < 0 ? 0 : d(e))) {
            let n = e.parentNode;
            if (
              !n ||
              1 != n.nodeType ||
              f(e) ||
              a.test(e.nodeName) ||
              "false" == e.contentEditable
            )
              return !1;
            (t = s(e) + (r < 0 ? 0 : 1)), (e = n);
          } else {
            if (1 != e.nodeType) return !1;
            if (
              "false" ==
              (e = e.childNodes[t + (r < 0 ? -1 : 0)]).contentEditable
            )
              return !1;
            t = r < 0 ? d(e) : 0;
          }
        }
      }
      function d(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function f(e) {
        let t;
        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
        return (
          t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
        );
      }
      const u = function (e) {
        return (
          e.focusNode &&
          l(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        );
      };
      function p(e, t) {
        let n = document.createEvent("Event");
        return (
          n.initEvent("keydown", !0, !0),
          (n.keyCode = e),
          (n.key = n.code = t),
          n
        );
      }
      const h = "undefined" != typeof navigator ? navigator : null,
        m = "undefined" != typeof document ? document : null,
        g = (h && h.userAgent) || "",
        v = /Edge\/(\d+)/.exec(g),
        b = /MSIE \d/.exec(g),
        y = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(g),
        w = !!(b || y || v),
        C = b ? document.documentMode : y ? +y[1] : v ? +v[1] : 0,
        S = !w && /gecko\/(\d+)/i.test(g);
      S && (/Firefox\/(\d+)/.exec(g) || [0, 0])[1];
      const D = !w && /Chrome\/(\d+)/.exec(g),
        N = !!D,
        x = D ? +D[1] : 0,
        T = !w && !!h && /Apple Computer/.test(h.vendor),
        k = T && (/Mobile\/\w+/.test(g) || (!!h && h.maxTouchPoints > 2)),
        E = k || (!!h && /Mac/.test(h.platform)),
        O = !!h && /Win/.test(h.platform),
        A = /Android \d/.test(g),
        P = !!m && "webkitFontSmoothing" in m.documentElement.style,
        M = P
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      const q = function (e) {
        e && (this.nodeName = e);
      };
      q.prototype = Object.create(null);
      new q();
      function I(e, t = null) {
        let n = e.domSelectionRange(),
          r = e.state.doc;
        if (!n.focusNode) return null;
        let i = e.docView.nearestDesc(n.focusNode),
          l = i && 0 == i.size,
          a = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
        if (a < 0) return null;
        let c,
          f,
          p = r.resolve(a);
        if (u(n)) {
          for (c = p; i && !i.node; ) i = i.parent;
          let e = i.node;
          if (
            i &&
            e.isAtom &&
            o.qv.isSelectable(e) &&
            i.parent &&
            (!e.isInline ||
              !(function (e, t, n) {
                for (let o = 0 == t, r = t == d(e); o || r; ) {
                  if (e == n) return !0;
                  let t = s(e);
                  if (!(e = e.parentNode)) return !1;
                  (o = o && 0 == t), (r = r && t == d(e));
                }
              })(n.focusNode, n.focusOffset, i.dom))
          ) {
            let e = i.posBefore;
            f = new o.qv(a == e ? p : r.resolve(e));
          }
        } else {
          let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
          if (t < 0) return null;
          c = r.resolve(t);
        }
        if (!f) {
          f = Y(
            e,
            c,
            p,
            "pointer" == t || (e.state.selection.head < p.pos && !l) ? 1 : -1
          );
        }
        return f;
      }
      function K(e) {
        return e.editable
          ? e.hasFocus()
          : H(e) &&
              document.activeElement &&
              document.activeElement.contains(e.dom);
      }
      function R(e, t = !1) {
        let n = e.state.selection;
        if ((L(e, n), K(e))) {
          if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && N) {
            let t = e.domSelectionRange(),
              n = e.domObserver.currentSelection;
            if (
              t.anchorNode &&
              n.anchorNode &&
              l(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)
            )
              return (
                (e.input.mouseDown.delayedSelectionSync = !0),
                void e.domObserver.setCurSelection()
              );
          }
          if ((e.domObserver.disconnectSelection(), e.cursorWrapper))
            !(function (e) {
              let t = e.domSelection(),
                n = document.createRange(),
                o = e.cursorWrapper.dom,
                r = "IMG" == o.nodeName;
              r ? n.setEnd(o.parentNode, s(o) + 1) : n.setEnd(o, 0);
              n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                !r &&
                  !e.state.selection.visible &&
                  w &&
                  C <= 11 &&
                  ((o.disabled = !0), (o.disabled = !1));
            })(e);
          else {
            let r,
              i,
              { anchor: s, head: l } = n;
            !V ||
              n instanceof o.Bs ||
              (n.$from.parent.inlineContent || (r = $(e, n.from)),
              n.empty || n.$from.parent.inlineContent || (i = $(e, n.to))),
              e.docView.setSelection(s, l, e.root, t),
              V && (r && z(r), i && z(i)),
              n.visible
                ? e.dom.classList.remove("ProseMirror-hideselection")
                : (e.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (e) {
                      let t = e.dom.ownerDocument;
                      t.removeEventListener(
                        "selectionchange",
                        e.input.hideSelectionGuard
                      );
                      let n = e.domSelectionRange(),
                        o = n.anchorNode,
                        r = n.anchorOffset;
                      t.addEventListener(
                        "selectionchange",
                        (e.input.hideSelectionGuard = () => {
                          (n.anchorNode == o && n.anchorOffset == r) ||
                            (t.removeEventListener(
                              "selectionchange",
                              e.input.hideSelectionGuard
                            ),
                            setTimeout(() => {
                              (K(e) && !e.state.selection.visible) ||
                                e.dom.classList.remove(
                                  "ProseMirror-hideselection"
                                );
                            }, 20));
                        })
                      );
                    })(e));
          }
          e.domObserver.setCurSelection(), e.domObserver.connectSelection();
        }
      }
      const V = T || (N && x < 63);
      function $(e, t) {
        let { node: n, offset: o } = e.docView.domFromPos(t, 0),
          r = o < n.childNodes.length ? n.childNodes[o] : null,
          i = o ? n.childNodes[o - 1] : null;
        if (T && r && "false" == r.contentEditable) return B(r);
        if (
          (!r || "false" == r.contentEditable) &&
          (!i || "false" == i.contentEditable)
        ) {
          if (r) return B(r);
          if (i) return B(i);
        }
      }
      function B(e) {
        return (
          (e.contentEditable = "true"),
          T && e.draggable && ((e.draggable = !1), (e.wasDraggable = !0)),
          e
        );
      }
      function z(e) {
        (e.contentEditable = "false"),
          e.wasDraggable && ((e.draggable = !0), (e.wasDraggable = null));
      }
      function L(e, t) {
        if (t instanceof o.qv) {
          let n = e.docView.descAt(t.from);
          n != e.lastSelectedViewDesc &&
            (F(e), n && n.selectNode(), (e.lastSelectedViewDesc = n));
        } else F(e);
      }
      function F(e) {
        e.lastSelectedViewDesc &&
          (e.lastSelectedViewDesc.parent &&
            e.lastSelectedViewDesc.deselectNode(),
          (e.lastSelectedViewDesc = void 0));
      }
      function Y(e, t, n, r) {
        return (
          e.someProp("createSelectionBetween", (o) => o(e, t, n)) ||
          o.Bs.between(t, n, r)
        );
      }
      function H(e) {
        let t = e.domSelectionRange();
        if (!t.anchorNode) return !1;
        try {
          return (
            e.dom.contains(
              3 == t.anchorNode.nodeType
                ? t.anchorNode.parentNode
                : t.anchorNode
            ) &&
            (e.editable ||
              e.dom.contains(
                3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode
              ))
          );
        } catch (n) {
          return !1;
        }
      }
      function W(e, t) {
        let { $anchor: n, $head: r } = e.selection,
          i = t > 0 ? n.max(r) : n.min(r),
          s = i.parent.inlineContent
            ? i.depth
              ? e.doc.resolve(t > 0 ? i.after() : i.before())
              : null
            : i;
        return s && o.Y1.findFrom(s, t);
      }
      function j(e, t) {
        return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()), !0;
      }
      function G(e, t, n) {
        let r = e.state.selection;
        if (!(r instanceof o.Bs)) {
          if (r instanceof o.qv && r.node.isInline)
            return j(e, new o.Bs(t > 0 ? r.$to : r.$from));
          {
            let n = W(e.state, t);
            return !!n && j(e, n);
          }
        }
        if (!r.empty || n.indexOf("s") > -1) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
          let n = W(e.state, t);
          return !!(n && n instanceof o.qv) && j(e, n);
        }
        if (!(E && n.indexOf("m") > -1)) {
          let n,
            i = r.$head,
            s = i.textOffset ? null : t < 0 ? i.nodeBefore : i.nodeAfter;
          if (!s || s.isText) return !1;
          let l = t < 0 ? i.pos - s.nodeSize : i.pos;
          return (
            !!(s.isAtom || ((n = e.docView.descAt(l)) && !n.contentDOM)) &&
            (o.qv.isSelectable(s)
              ? j(
                  e,
                  new o.qv(t < 0 ? e.state.doc.resolve(i.pos - s.nodeSize) : i)
                )
              : !!P &&
                j(e, new o.Bs(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize))))
          );
        }
      }
      function U(e) {
        return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length;
      }
      function X(e) {
        if ("false" == e.contentEditable) return !0;
        let t = e.pmViewDesc;
        return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName);
      }
      function _(e, t) {
        return t < 0
          ? (function (e) {
              let t = e.domSelectionRange(),
                n = t.focusNode,
                o = t.focusOffset;
              if (!n) return;
              let r,
                i,
                l = !1;
              S &&
                1 == n.nodeType &&
                o < U(n) &&
                X(n.childNodes[o]) &&
                (l = !0);
              for (;;)
                if (o > 0) {
                  if (1 != n.nodeType) break;
                  {
                    let e = n.childNodes[o - 1];
                    if (X(e)) (r = n), (i = --o);
                    else {
                      if (3 != e.nodeType) break;
                      (n = e), (o = n.nodeValue.length);
                    }
                  }
                } else {
                  if (Q(n)) break;
                  {
                    let t = n.previousSibling;
                    for (; t && X(t); )
                      (r = n.parentNode), (i = s(t)), (t = t.previousSibling);
                    if (t) (n = t), (o = U(n));
                    else {
                      if (((n = n.parentNode), n == e.dom)) break;
                      o = 0;
                    }
                  }
                }
              l ? Z(e, n, o) : r && Z(e, r, i);
            })(e)
          : J(e);
      }
      function J(e) {
        let t = e.domSelectionRange(),
          n = t.focusNode,
          o = t.focusOffset;
        if (!n) return;
        let r,
          i,
          l = U(n);
        for (;;)
          if (o < l) {
            if (1 != n.nodeType) break;
            if (!X(n.childNodes[o])) break;
            (r = n), (i = ++o);
          } else {
            if (Q(n)) break;
            {
              let t = n.nextSibling;
              for (; t && X(t); )
                (r = t.parentNode), (i = s(t) + 1), (t = t.nextSibling);
              if (t) (n = t), (o = 0), (l = U(n));
              else {
                if (((n = n.parentNode), n == e.dom)) break;
                o = l = 0;
              }
            }
          }
        r && Z(e, r, i);
      }
      function Q(e) {
        let t = e.pmViewDesc;
        return t && t.node && t.node.isBlock;
      }
      function Z(e, t, n) {
        if (3 != t.nodeType) {
          let e, o;
          (o = (function (e, t) {
            for (; e && t == e.childNodes.length && !f(e); )
              (t = s(e) + 1), (e = e.parentNode);
            for (; e && t < e.childNodes.length; ) {
              if (3 == (e = e.childNodes[t]).nodeType) return e;
              t = 0;
            }
          })(t, n))
            ? ((t = o), (n = 0))
            : (e = (function (e, t) {
                for (; e && !t && !f(e); ) (t = s(e)), (e = e.parentNode);
                for (; e && t; ) {
                  if (3 == (e = e.childNodes[t - 1]).nodeType) return e;
                  t = e.childNodes.length;
                }
              })(t, n)) && ((t = e), (n = e.nodeValue.length));
        }
        let o = e.domSelection();
        if (u(o)) {
          let e = document.createRange();
          e.setEnd(t, n), e.setStart(t, n), o.removeAllRanges(), o.addRange(e);
        } else o.extend && o.extend(t, n);
        e.domObserver.setCurSelection();
        let { state: r } = e;
        setTimeout(() => {
          e.state == r && R(e);
        }, 50);
      }
      function ee(e, t) {
        let n = e.state.doc.resolve(t);
        if (!N && !O && n.parent.inlineContent) {
          let o = e.coordsAtPos(t);
          if (t > n.start()) {
            let n = e.coordsAtPos(t - 1),
              r = (n.top + n.bottom) / 2;
            if (r > o.top && r < o.bottom && Math.abs(n.left - o.left) > 1)
              return n.left < o.left ? "ltr" : "rtl";
          }
          if (t < n.end()) {
            let n = e.coordsAtPos(t + 1),
              r = (n.top + n.bottom) / 2;
            if (r > o.top && r < o.bottom && Math.abs(n.left - o.left) > 1)
              return n.left > o.left ? "ltr" : "rtl";
          }
        }
        return "rtl" == getComputedStyle(e.dom).direction ? "rtl" : "ltr";
      }
      function te(e, t, n) {
        let r = e.state.selection;
        if ((r instanceof o.Bs && !r.empty) || n.indexOf("s") > -1) return !1;
        if (E && n.indexOf("m") > -1) return !1;
        let { $from: i, $to: s } = r;
        if (
          !i.parent.inlineContent ||
          e.endOfTextblock(t < 0 ? "up" : "down")
        ) {
          let n = W(e.state, t);
          if (n && n instanceof o.qv) return j(e, n);
        }
        if (!i.parent.inlineContent) {
          let n = t < 0 ? i : s,
            l = r instanceof o.C1 ? o.Y1.near(n, t) : o.Y1.findFrom(n, t);
          return !!l && j(e, l);
        }
        return !1;
      }
      function ne(e, t) {
        if (!(e.state.selection instanceof o.Bs)) return !0;
        let { $head: n, $anchor: r, empty: i } = e.state.selection;
        if (!n.sameParent(r)) return !0;
        if (!i) return !1;
        if (e.endOfTextblock(t > 0 ? "forward" : "backward")) return !0;
        let s = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
        if (s && !s.isText) {
          let o = e.state.tr;
          return (
            t < 0
              ? o.delete(n.pos - s.nodeSize, n.pos)
              : o.delete(n.pos, n.pos + s.nodeSize),
            e.dispatch(o),
            !0
          );
        }
        return !1;
      }
      function oe(e, t, n) {
        e.domObserver.stop(), (t.contentEditable = n), e.domObserver.start();
      }
      function re(e, t) {
        let n = t.keyCode,
          o = (function (e) {
            let t = "";
            return (
              e.ctrlKey && (t += "c"),
              e.metaKey && (t += "m"),
              e.altKey && (t += "a"),
              e.shiftKey && (t += "s"),
              t
            );
          })(t);
        if (8 == n || (E && 72 == n && "c" == o)) return ne(e, -1) || _(e, -1);
        if ((46 == n && !t.shiftKey) || (E && 68 == n && "c" == o))
          return ne(e, 1) || _(e, 1);
        if (13 == n || 27 == n) return !0;
        if (37 == n || (E && 66 == n && "c" == o)) {
          let t =
            37 == n ? ("ltr" == ee(e, e.state.selection.from) ? -1 : 1) : -1;
          return G(e, t, o) || _(e, t);
        }
        if (39 == n || (E && 70 == n && "c" == o)) {
          let t =
            39 == n ? ("ltr" == ee(e, e.state.selection.from) ? 1 : -1) : 1;
          return G(e, t, o) || _(e, t);
        }
        return 38 == n || (E && 80 == n && "c" == o)
          ? te(e, -1, o) || _(e, -1)
          : 40 == n || (E && 78 == n && "c" == o)
          ? (function (e) {
              if (!T || e.state.selection.$head.parentOffset > 0) return !1;
              let { focusNode: t, focusOffset: n } = e.domSelectionRange();
              if (
                t &&
                1 == t.nodeType &&
                0 == n &&
                t.firstChild &&
                "false" == t.firstChild.contentEditable
              ) {
                let n = t.firstChild;
                oe(e, n, "true"), setTimeout(() => oe(e, n, "false"), 20);
              }
              return !1;
            })(e) ||
            te(e, 1, o) ||
            J(e)
          : o == (E ? "m" : "c") && (66 == n || 73 == n || 89 == n || 90 == n);
      }
      function ie(e, t) {
        e.someProp("transformCopied", (n) => {
          t = n(t, e);
        });
        let n = [],
          { content: o, openStart: i, openEnd: s } = t;
        for (
          ;
          i > 1 && s > 1 && 1 == o.childCount && 1 == o.firstChild.childCount;

        ) {
          i--, s--;
          let e = o.firstChild;
          n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null),
            (o = e.content);
        }
        let l =
            e.someProp("clipboardSerializer") ||
            r.PW.fromSchema(e.state.schema),
          a = me(),
          c = a.createElement("div");
        c.appendChild(l.serializeFragment(o, { document: a }));
        let d,
          f = c.firstChild,
          u = 0;
        for (; f && 1 == f.nodeType && (d = pe[f.nodeName.toLowerCase()]); ) {
          for (let e = d.length - 1; e >= 0; e--) {
            let t = a.createElement(d[e]);
            for (; c.firstChild; ) t.appendChild(c.firstChild);
            c.appendChild(t), u++;
          }
          f = c.firstChild;
        }
        return (
          f &&
            1 == f.nodeType &&
            f.setAttribute(
              "data-pm-slice",
              `${i} ${s}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`
            ),
          {
            dom: c,
            text:
              e.someProp("clipboardTextSerializer", (n) => n(t, e)) ||
              t.content.textBetween(0, t.content.size, "\n\n"),
          }
        );
      }
      function se(e, t, n, o, i) {
        let s,
          l,
          a = i.parent.type.spec.code;
        if (!n && !t) return null;
        let c = t && (o || a || !n);
        if (c) {
          if (
            (e.someProp("transformPastedText", (n) => {
              t = n(t, a || o, e);
            }),
            a)
          )
            return t
              ? new r.p2(
                  r.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),
                  0,
                  0
                )
              : r.p2.empty;
          let n = e.someProp("clipboardTextParser", (n) => n(t, i, o, e));
          if (n) l = n;
          else {
            let n = i.marks(),
              { schema: o } = e.state,
              l = r.PW.fromSchema(o);
            (s = document.createElement("div")),
              t.split(/(?:\r\n?|\n)+/).forEach((e) => {
                let t = s.appendChild(document.createElement("p"));
                e && t.appendChild(l.serializeNode(o.text(e, n)));
              });
          }
        } else
          e.someProp("transformPastedHTML", (t) => {
            n = t(n, e);
          }),
            (s = (function (e) {
              let t = /^(\s*<meta [^>]*>)*/.exec(e);
              t && (e = e.slice(t[0].length));
              let n,
                o = me().createElement("div"),
                r = /<([a-z][^>\s]+)/i.exec(e);
              (n = r && pe[r[1].toLowerCase()]) &&
                (e =
                  n.map((e) => "<" + e + ">").join("") +
                  e +
                  n
                    .map((e) => "</" + e + ">")
                    .reverse()
                    .join(""));
              if (((o.innerHTML = e), n))
                for (let i = 0; i < n.length; i++)
                  o = o.querySelector(n[i]) || o;
              return o;
            })(n)),
            P &&
              (function (e) {
                let t = e.querySelectorAll(
                  N
                    ? "span:not([class]):not([style])"
                    : "span.Apple-converted-space"
                );
                for (let n = 0; n < t.length; n++) {
                  let o = t[n];
                  1 == o.childNodes.length &&
                    "\xa0" == o.textContent &&
                    o.parentNode &&
                    o.parentNode.replaceChild(
                      e.ownerDocument.createTextNode(" "),
                      o
                    );
                }
              })(s);
        let d = s && s.querySelector("[data-pm-slice]"),
          f =
            d &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              d.getAttribute("data-pm-slice") || ""
            );
        if (f && f[3])
          for (let r = +f[3]; r > 0; r--) {
            let e = s.firstChild;
            for (; e && 1 != e.nodeType; ) e = e.nextSibling;
            if (!e) break;
            s = e;
          }
        if (!l) {
          let t =
            e.someProp("clipboardParser") ||
            e.someProp("domParser") ||
            r.aw.fromSchema(e.state.schema);
          l = t.parseSlice(s, {
            preserveWhitespace: !(!c && !f),
            context: i,
            ruleFromNode: (e) =>
              "BR" != e.nodeName ||
              e.nextSibling ||
              !e.parentNode ||
              le.test(e.parentNode.nodeName)
                ? null
                : { ignore: !0 },
          });
        }
        if (f)
          l = (function (e, t) {
            if (!e.size) return e;
            let n,
              o = e.content.firstChild.type.schema;
            try {
              n = JSON.parse(t);
            } catch (a) {
              return e;
            }
            let { content: i, openStart: s, openEnd: l } = e;
            for (let c = n.length - 2; c >= 0; c -= 2) {
              let e = o.nodes[n[c]];
              if (!e || e.hasRequiredAttrs()) break;
              (i = r.HY.from(e.create(n[c + 1], i))), s++, l++;
            }
            return new r.p2(i, s, l);
          })(ue(l, +f[1], +f[2]), f[4]);
        else if (
          ((l = r.p2.maxOpen(
            (function (e, t) {
              if (e.childCount < 2) return e;
              for (let n = t.depth; n >= 0; n--) {
                let o,
                  i = t.node(n).contentMatchAt(t.index(n)),
                  s = [];
                if (
                  (e.forEach((e) => {
                    if (!s) return;
                    let t,
                      n = i.findWrapping(e.type);
                    if (!n) return (s = null);
                    if (
                      (t =
                        s.length && o.length && ce(n, o, e, s[s.length - 1], 0))
                    )
                      s[s.length - 1] = t;
                    else {
                      s.length &&
                        (s[s.length - 1] = de(s[s.length - 1], o.length));
                      let t = ae(e, n);
                      s.push(t), (i = i.matchType(t.type)), (o = n);
                    }
                  }),
                  s)
                )
                  return r.HY.from(s);
              }
              return e;
            })(l.content, i),
            !0
          )),
          l.openStart || l.openEnd)
        ) {
          let e = 0,
            t = 0;
          for (
            let n = l.content.firstChild;
            e < l.openStart && !n.type.spec.isolating;
            e++, n = n.firstChild
          );
          for (
            let n = l.content.lastChild;
            t < l.openEnd && !n.type.spec.isolating;
            t++, n = n.lastChild
          );
          l = ue(l, e, t);
        }
        return (
          e.someProp("transformPasted", (t) => {
            l = t(l, e);
          }),
          l
        );
      }
      const le =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function ae(e, t, n = 0) {
        for (let o = t.length - 1; o >= n; o--)
          e = t[o].create(null, r.HY.from(e));
        return e;
      }
      function ce(e, t, n, o, i) {
        if (i < e.length && i < t.length && e[i] == t[i]) {
          let s = ce(e, t, n, o.lastChild, i + 1);
          if (s) return o.copy(o.content.replaceChild(o.childCount - 1, s));
          if (
            o
              .contentMatchAt(o.childCount)
              .matchType(i == e.length - 1 ? n.type : e[i + 1])
          )
            return o.copy(o.content.append(r.HY.from(ae(n, e, i + 1))));
        }
      }
      function de(e, t) {
        if (0 == t) return e;
        let n = e.content.replaceChild(
            e.childCount - 1,
            de(e.lastChild, t - 1)
          ),
          o = e.contentMatchAt(e.childCount).fillBefore(r.HY.empty, !0);
        return e.copy(n.append(o));
      }
      function fe(e, t, n, o, i, s) {
        let l = t < 0 ? e.firstChild : e.lastChild,
          a = l.content;
        return (
          e.childCount > 1 && (s = 0),
          i < o - 1 && (a = fe(a, t, n, o, i + 1, s)),
          i >= n &&
            (a =
              t < 0
                ? l
                    .contentMatchAt(0)
                    .fillBefore(a, s <= i)
                    .append(a)
                : a.append(
                    l.contentMatchAt(l.childCount).fillBefore(r.HY.empty, !0)
                  )),
          e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(a))
        );
      }
      function ue(e, t, n) {
        return (
          t < e.openStart &&
            (e = new r.p2(
              fe(e.content, -1, t, e.openStart, 0, e.openEnd),
              t,
              e.openEnd
            )),
          n < e.openEnd &&
            (e = new r.p2(
              fe(e.content, 1, n, e.openEnd, 0, 0),
              e.openStart,
              n
            )),
          e
        );
      }
      const pe = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        tr: ["table", "tbody"],
        td: ["table", "tbody", "tr"],
        th: ["table", "tbody", "tr"],
      };
      let he = null;
      function me() {
        return he || (he = document.implementation.createHTMLDocument("title"));
      }
      const ge = {},
        ve = {};
      function be(e, t) {
        (e.input.lastSelectionOrigin = t),
          (e.input.lastSelectionTime = Date.now());
      }
      function ye(e) {
        return { left: e.clientX, top: e.clientY };
      }
      function we(e, t, n, o, r) {
        if (-1 == o) return !1;
        let i = e.state.doc.resolve(o);
        for (let s = i.depth + 1; s > 0; s--)
          if (
            e.someProp(t, (t) =>
              s > i.depth
                ? t(e, n, i.nodeAfter, i.before(s), r, !0)
                : t(e, n, i.node(s), i.before(s), r, !1)
            )
          )
            return !0;
        return !1;
      }
      function Ce(e, t, n) {
        e.focused || e.focus();
        let o = e.state.tr.setSelection(t);
        "pointer" == n && o.setMeta("pointer", !0), e.dispatch(o);
      }
      function Se(e, t, n, r, i) {
        return (
          we(e, "handleClickOn", t, n, r) ||
          e.someProp("handleClick", (n) => n(e, t, r)) ||
          (i
            ? (function (e, t) {
                if (-1 == t) return !1;
                let n,
                  r,
                  i = e.state.selection;
                i instanceof o.qv && (n = i.node);
                let s = e.state.doc.resolve(t);
                for (let l = s.depth + 1; l > 0; l--) {
                  let e = l > s.depth ? s.nodeAfter : s.node(l);
                  if (o.qv.isSelectable(e)) {
                    r =
                      n &&
                      i.$from.depth > 0 &&
                      l >= i.$from.depth &&
                      s.before(i.$from.depth + 1) == i.$from.pos
                        ? s.before(i.$from.depth)
                        : s.before(l);
                    break;
                  }
                }
                return (
                  null != r &&
                  (Ce(e, o.qv.create(e.state.doc, r), "pointer"), !0)
                );
              })(e, n)
            : (function (e, t) {
                if (-1 == t) return !1;
                let n = e.state.doc.resolve(t),
                  r = n.nodeAfter;
                return (
                  !!(r && r.isAtom && o.qv.isSelectable(r)) &&
                  (Ce(e, new o.qv(n), "pointer"), !0)
                );
              })(e, n))
        );
      }
      function De(e, t, n, o) {
        return (
          we(e, "handleDoubleClickOn", t, n, o) ||
          e.someProp("handleDoubleClick", (n) => n(e, t, o))
        );
      }
      function Ne(e, t, n, r) {
        return (
          we(e, "handleTripleClickOn", t, n, r) ||
          e.someProp("handleTripleClick", (n) => n(e, t, r)) ||
          (function (e, t, n) {
            if (0 != n.button) return !1;
            let r = e.state.doc;
            if (-1 == t)
              return (
                !!r.inlineContent &&
                (Ce(e, o.Bs.create(r, 0, r.content.size), "pointer"), !0)
              );
            let i = r.resolve(t);
            for (let s = i.depth + 1; s > 0; s--) {
              let t = s > i.depth ? i.nodeAfter : i.node(s),
                n = i.before(s);
              if (t.inlineContent)
                Ce(e, o.Bs.create(r, n + 1, n + 1 + t.content.size), "pointer");
              else {
                if (!o.qv.isSelectable(t)) continue;
                Ce(e, o.qv.create(r, n), "pointer");
              }
              return !0;
            }
          })(e, n, r)
        );
      }
      function xe(e) {
        return Me(e);
      }
      (ve.keydown = (e, t) => {
        let n = t;
        if (
          ((e.input.shiftKey = 16 == n.keyCode || n.shiftKey),
          !Ee(e, n) &&
            ((e.input.lastKeyCode = n.keyCode),
            (e.input.lastKeyCodeTime = Date.now()),
            !A || !N || 13 != n.keyCode))
        )
          if (
            (229 != n.keyCode && e.domObserver.forceFlush(),
            !k || 13 != n.keyCode || n.ctrlKey || n.altKey || n.metaKey)
          )
            e.someProp("handleKeyDown", (t) => t(e, n)) || re(e, n)
              ? n.preventDefault()
              : be(e, "key");
          else {
            let t = Date.now();
            (e.input.lastIOSEnter = t),
              (e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                e.input.lastIOSEnter == t &&
                  (e.someProp("handleKeyDown", (t) => t(e, p(13, "Enter"))),
                  (e.input.lastIOSEnter = 0));
              }, 200));
          }
      }),
        (ve.keyup = (e, t) => {
          16 == t.keyCode && (e.input.shiftKey = !1);
        }),
        (ve.keypress = (e, t) => {
          let n = t;
          if (
            Ee(e, n) ||
            !n.charCode ||
            (n.ctrlKey && !n.altKey) ||
            (E && n.metaKey)
          )
            return;
          if (e.someProp("handleKeyPress", (t) => t(e, n)))
            return void n.preventDefault();
          let r = e.state.selection;
          if (!(r instanceof o.Bs) || !r.$from.sameParent(r.$to)) {
            let t = String.fromCharCode(n.charCode);
            /[\r\n]/.test(t) ||
              e.someProp("handleTextInput", (n) =>
                n(e, r.$from.pos, r.$to.pos, t)
              ) ||
              e.dispatch(e.state.tr.insertText(t).scrollIntoView()),
              n.preventDefault();
          }
        });
      const Te = E ? "metaKey" : "ctrlKey";
      ge.mousedown = (e, t) => {
        let n = t;
        e.input.shiftKey = n.shiftKey;
        let o = xe(e),
          r = Date.now(),
          i = "singleClick";
        r - e.input.lastClick.time < 500 &&
          (function (e, t) {
            let n = t.x - e.clientX,
              o = t.y - e.clientY;
            return n * n + o * o < 100;
          })(n, e.input.lastClick) &&
          !n[Te] &&
          ("singleClick" == e.input.lastClick.type
            ? (i = "doubleClick")
            : "doubleClick" == e.input.lastClick.type && (i = "tripleClick")),
          (e.input.lastClick = {
            time: r,
            x: n.clientX,
            y: n.clientY,
            type: i,
          });
        let s = e.posAtCoords(ye(n));
        s &&
          ("singleClick" == i
            ? (e.input.mouseDown && e.input.mouseDown.done(),
              (e.input.mouseDown = new ke(e, s, n, !!o)))
            : ("doubleClick" == i ? De : Ne)(e, s.pos, s.inside, n)
            ? n.preventDefault()
            : be(e, "pointer"));
      };
      class ke {
        constructor(e, t, n, r) {
          let i, s;
          if (
            ((this.view = e),
            (this.pos = t),
            (this.event = n),
            (this.flushed = r),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = e.state.doc),
            (this.selectNode = !!n[Te]),
            (this.allowDefault = n.shiftKey),
            t.inside > -1)
          )
            (i = e.state.doc.nodeAt(t.inside)), (s = t.inside);
          else {
            let n = e.state.doc.resolve(t.pos);
            (i = n.parent), (s = n.depth ? n.before() : 0);
          }
          const l = r ? null : n.target,
            a = l ? e.docView.nearestDesc(l, !0) : null;
          this.target = a ? a.dom : null;
          let { selection: c } = e.state;
          ((0 == n.button &&
            i.type.spec.draggable &&
            !1 !== i.type.spec.selectable) ||
            (c instanceof o.qv && c.from <= s && c.to > s)) &&
            (this.mightDrag = {
              node: i,
              pos: s,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(
                !this.target ||
                !S ||
                this.target.hasAttribute("contentEditable")
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            e.root.addEventListener("mouseup", (this.up = this.up.bind(this))),
            e.root.addEventListener(
              "mousemove",
              (this.move = this.move.bind(this))
            ),
            be(e, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this.up),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => R(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(e) {
          if ((this.done(), !this.view.dom.contains(e.target))) return;
          let t = this.pos;
          this.view.state.doc != this.startDoc &&
            (t = this.view.posAtCoords(ye(e))),
            this.updateAllowDefault(e),
            this.allowDefault || !t
              ? be(this.view, "pointer")
              : Se(this.view, t.pos, t.inside, e, this.selectNode)
              ? e.preventDefault()
              : 0 == e.button &&
                (this.flushed ||
                  (T && this.mightDrag && !this.mightDrag.node.isAtom) ||
                  (N &&
                    !this.view.state.selection.visible &&
                    Math.min(
                      Math.abs(t.pos - this.view.state.selection.from),
                      Math.abs(t.pos - this.view.state.selection.to)
                    ) <= 2))
              ? (Ce(
                  this.view,
                  o.Y1.near(this.view.state.doc.resolve(t.pos)),
                  "pointer"
                ),
                e.preventDefault())
              : be(this.view, "pointer");
        }
        move(e) {
          this.updateAllowDefault(e),
            be(this.view, "pointer"),
            0 == e.buttons && this.done();
        }
        updateAllowDefault(e) {
          !this.allowDefault &&
            (Math.abs(this.event.x - e.clientX) > 4 ||
              Math.abs(this.event.y - e.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function Ee(e, t) {
        return (
          !!e.composing ||
          (!!(T && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) &&
            ((e.input.compositionEndedAt = -2e8), !0))
        );
      }
      (ge.touchstart = (e) => {
        (e.input.lastTouch = Date.now()), xe(e), be(e, "pointer");
      }),
        (ge.touchmove = (e) => {
          (e.input.lastTouch = Date.now()), be(e, "pointer");
        }),
        (ge.contextmenu = (e) => xe(e));
      const Oe = A ? 5e3 : -1;
      function Ae(e, t) {
        clearTimeout(e.input.composingTimeout),
          t > -1 && (e.input.composingTimeout = setTimeout(() => Me(e), t));
      }
      function Pe(e) {
        for (
          e.composing &&
          ((e.input.composing = !1),
          (e.input.compositionEndedAt = (function () {
            let e = document.createEvent("Event");
            return e.initEvent("event", !0, !0), e.timeStamp;
          })()));
          e.input.compositionNodes.length > 0;

        )
          e.input.compositionNodes.pop().markParentsDirty();
      }
      function Me(e, t = !1) {
        if (!(A && e.domObserver.flushingSoon >= 0)) {
          if (
            (e.domObserver.forceFlush(),
            Pe(e),
            t || (e.docView && e.docView.dirty))
          ) {
            let t = I(e);
            return (
              t && !t.eq(e.state.selection)
                ? e.dispatch(e.state.tr.setSelection(t))
                : e.updateState(e.state),
              !0
            );
          }
          return !1;
        }
      }
      (ve.compositionstart = ve.compositionupdate =
        (e) => {
          if (!e.composing) {
            e.domObserver.flush();
            let { state: t } = e,
              n = t.selection.$from;
            if (
              t.selection.empty &&
              (t.storedMarks ||
                (!n.textOffset &&
                  n.parentOffset &&
                  n.nodeBefore.marks.some((e) => !1 === e.type.spec.inclusive)))
            )
              (e.markCursor = e.state.storedMarks || n.marks()),
                Me(e, !0),
                (e.markCursor = null);
            else if (
              (Me(e),
              S &&
                t.selection.empty &&
                n.parentOffset &&
                !n.textOffset &&
                n.nodeBefore.marks.length)
            ) {
              let t = e.domSelectionRange();
              for (
                let n = t.focusNode, o = t.focusOffset;
                n && 1 == n.nodeType && 0 != o;

              ) {
                let t = o < 0 ? n.lastChild : n.childNodes[o - 1];
                if (!t) break;
                if (3 == t.nodeType) {
                  e.domSelection().collapse(t, t.nodeValue.length);
                  break;
                }
                (n = t), (o = -1);
              }
            }
            e.input.composing = !0;
          }
          Ae(e, Oe);
        }),
        (ve.compositionend = (e, t) => {
          e.composing &&
            ((e.input.composing = !1),
            (e.input.compositionEndedAt = t.timeStamp),
            (e.input.compositionPendingChanges = e.domObserver.pendingRecords()
              .length
              ? e.input.compositionID
              : 0),
            e.input.compositionPendingChanges &&
              Promise.resolve().then(() => e.domObserver.flush()),
            e.input.compositionID++,
            Ae(e, 20));
        });
      const qe = (w && C < 15) || (k && M < 604);
      function Ie(e, t, n, o, i) {
        let s = se(e, t, n, o, e.state.selection.$from);
        if (e.someProp("handlePaste", (t) => t(e, i, s || r.p2.empty)))
          return !0;
        if (!s) return !1;
        let l = (function (e) {
            return 0 == e.openStart &&
              0 == e.openEnd &&
              1 == e.content.childCount
              ? e.content.firstChild
              : null;
          })(s),
          a = l
            ? e.state.tr.replaceSelectionWith(l, o)
            : e.state.tr.replaceSelection(s);
        return (
          e.dispatch(
            a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")
          ),
          !0
        );
      }
      (ge.copy = ve.cut =
        (e, t) => {
          let n = t,
            o = e.state.selection,
            r = "cut" == n.type;
          if (o.empty) return;
          let i = qe ? null : n.clipboardData,
            s = o.content(),
            { dom: l, text: a } = ie(e, s);
          i
            ? (n.preventDefault(),
              i.clearData(),
              i.setData("text/html", l.innerHTML),
              i.setData("text/plain", a))
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n = e.dom.parentNode.appendChild(
                  document.createElement("div")
                );
                n.appendChild(t),
                  (n.style.cssText =
                    "position: fixed; left: -10000px; top: 10px");
                let o = getSelection(),
                  r = document.createRange();
                r.selectNodeContents(t),
                  e.dom.blur(),
                  o.removeAllRanges(),
                  o.addRange(r),
                  setTimeout(() => {
                    n.parentNode && n.parentNode.removeChild(n), e.focus();
                  }, 50);
              })(e, l),
            r &&
              e.dispatch(
                e.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut")
              );
        }),
        (ve.paste = (e, t) => {
          let n = t;
          if (e.composing && !A) return;
          let o = qe ? null : n.clipboardData,
            r = e.input.shiftKey && 45 != e.input.lastKeyCode;
          o && Ie(e, o.getData("text/plain"), o.getData("text/html"), r, n)
            ? n.preventDefault()
            : (function (e, t) {
                if (!e.dom.parentNode) return;
                let n =
                    e.input.shiftKey ||
                    e.state.selection.$from.parent.type.spec.code,
                  o = e.dom.parentNode.appendChild(
                    document.createElement(n ? "textarea" : "div")
                  );
                n || (o.contentEditable = "true"),
                  (o.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"),
                  o.focus();
                let r = e.input.shiftKey && 45 != e.input.lastKeyCode;
                setTimeout(() => {
                  e.focus(),
                    o.parentNode && o.parentNode.removeChild(o),
                    n
                      ? Ie(e, o.value, null, r, t)
                      : Ie(e, o.textContent, o.innerHTML, r, t);
                }, 50);
              })(e, n);
        });
      class Ke {
        constructor(e, t) {
          (this.slice = e), (this.move = t);
        }
      }
      const Re = E ? "altKey" : "ctrlKey";
      (ge.dragstart = (e, t) => {
        let n = t,
          r = e.input.mouseDown;
        if ((r && r.done(), !n.dataTransfer)) return;
        let i = e.state.selection,
          s = i.empty ? null : e.posAtCoords(ye(n));
        if (
          s &&
          s.pos >= i.from &&
          s.pos <= (i instanceof o.qv ? i.to - 1 : i.to)
        );
        else if (r && r.mightDrag)
          e.dispatch(
            e.state.tr.setSelection(o.qv.create(e.state.doc, r.mightDrag.pos))
          );
        else if (n.target && 1 == n.target.nodeType) {
          let t = e.docView.nearestDesc(n.target, !0);
          t &&
            t.node.type.spec.draggable &&
            t != e.docView &&
            e.dispatch(
              e.state.tr.setSelection(o.qv.create(e.state.doc, t.posBefore))
            );
        }
        let l = e.state.selection.content(),
          { dom: a, text: c } = ie(e, l);
        n.dataTransfer.clearData(),
          n.dataTransfer.setData(qe ? "Text" : "text/html", a.innerHTML),
          (n.dataTransfer.effectAllowed = "copyMove"),
          qe || n.dataTransfer.setData("text/plain", c),
          (e.dragging = new Ke(l, !n[Re]));
      }),
        (ge.dragend = (e) => {
          let t = e.dragging;
          window.setTimeout(() => {
            e.dragging == t && (e.dragging = null);
          }, 50);
        }),
        (ve.dragover = ve.dragenter = (e, t) => t.preventDefault()),
        (ve.drop = (e, t) => {
          let n = t,
            s = e.dragging;
          if (((e.dragging = null), !n.dataTransfer)) return;
          let l = e.posAtCoords(ye(n));
          if (!l) return;
          let a = e.state.doc.resolve(l.pos),
            c = s && s.slice;
          c
            ? e.someProp("transformPasted", (t) => {
                c = t(c, e);
              })
            : (c = se(
                e,
                n.dataTransfer.getData(qe ? "Text" : "text/plain"),
                qe ? null : n.dataTransfer.getData("text/html"),
                !1,
                a
              ));
          let d = !(!s || n[Re]);
          if (e.someProp("handleDrop", (t) => t(e, n, c || r.p2.empty, d)))
            return void n.preventDefault();
          if (!c) return;
          n.preventDefault();
          let f = c ? (0, i.nj)(e.state.doc, a.pos, c) : a.pos;
          null == f && (f = a.pos);
          let u = e.state.tr;
          d && u.deleteSelection();
          let p = u.mapping.map(f),
            h = 0 == c.openStart && 0 == c.openEnd && 1 == c.content.childCount,
            m = u.doc;
          if (
            (h
              ? u.replaceRangeWith(p, p, c.content.firstChild)
              : u.replaceRange(p, p, c),
            u.doc.eq(m))
          )
            return;
          let g = u.doc.resolve(p);
          if (
            h &&
            o.qv.isSelectable(c.content.firstChild) &&
            g.nodeAfter &&
            g.nodeAfter.sameMarkup(c.content.firstChild)
          )
            u.setSelection(new o.qv(g));
          else {
            let t = u.mapping.map(f);
            u.mapping.maps[u.mapping.maps.length - 1].forEach(
              (e, n, o, r) => (t = r)
            ),
              u.setSelection(Y(e, g, u.doc.resolve(t)));
          }
          e.focus(), e.dispatch(u.setMeta("uiEvent", "drop"));
        }),
        (ge.focus = (e) => {
          (e.input.lastFocus = Date.now()),
            e.focused ||
              (e.domObserver.stop(),
              e.dom.classList.add("ProseMirror-focused"),
              e.domObserver.start(),
              (e.focused = !0),
              setTimeout(() => {
                e.docView &&
                  e.hasFocus() &&
                  !e.domObserver.currentSelection.eq(e.domSelectionRange()) &&
                  R(e);
              }, 20));
        }),
        (ge.blur = (e, t) => {
          let n = t;
          e.focused &&
            (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            n.relatedTarget &&
              e.dom.contains(n.relatedTarget) &&
              e.domObserver.currentSelection.clear(),
            (e.focused = !1));
        }),
        (ge.beforeinput = (e, t) => {
          if (N && A && "deleteContentBackward" == t.inputType) {
            e.domObserver.flushSoon();
            let { domChangeCount: t } = e.input;
            setTimeout(() => {
              if (e.input.domChangeCount != t) return;
              if (
                (e.dom.blur(),
                e.focus(),
                e.someProp("handleKeyDown", (t) => t(e, p(8, "Backspace"))))
              )
                return;
              let { $cursor: n } = e.state.selection;
              n &&
                n.pos > 0 &&
                e.dispatch(
                  e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView()
                );
            }, 50);
          }
        });
      for (let et in ve) ge[et] = ve[et];
      function Ve(e, t) {
        if (e == t) return !0;
        for (let n in e) if (e[n] !== t[n]) return !1;
        for (let n in t) if (!(n in e)) return !1;
        return !0;
      }
      class $e {
        constructor(e, t) {
          (this.toDOM = e),
            (this.spec = t || Ye),
            (this.side = this.spec.side || 0);
        }
        map(e, t, n, o) {
          let { pos: r, deleted: i } = e.mapResult(
            t.from + o,
            this.side < 0 ? -1 : 1
          );
          return i ? null : new Le(r - n, r - n, this);
        }
        valid() {
          return !0;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof $e &&
              ((this.spec.key && this.spec.key == e.spec.key) ||
                (this.toDOM == e.toDOM && Ve(this.spec, e.spec))))
          );
        }
        destroy(e) {
          this.spec.destroy && this.spec.destroy(e);
        }
      }
      class Be {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Ye);
        }
        map(e, t, n, o) {
          let r = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n,
            i = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
          return r >= i ? null : new Le(r, i, this);
        }
        valid(e, t) {
          return t.from < t.to;
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof Be &&
              Ve(this.attrs, e.attrs) &&
              Ve(this.spec, e.spec))
          );
        }
        static is(e) {
          return e.type instanceof Be;
        }
        destroy() {}
      }
      class ze {
        constructor(e, t) {
          (this.attrs = e), (this.spec = t || Ye);
        }
        map(e, t, n, o) {
          let r = e.mapResult(t.from + o, 1);
          if (r.deleted) return null;
          let i = e.mapResult(t.to + o, -1);
          return i.deleted || i.pos <= r.pos
            ? null
            : new Le(r.pos - n, i.pos - n, this);
        }
        valid(e, t) {
          let n,
            { index: o, offset: r } = e.content.findIndex(t.from);
          return (
            r == t.from && !(n = e.child(o)).isText && r + n.nodeSize == t.to
          );
        }
        eq(e) {
          return (
            this == e ||
            (e instanceof ze &&
              Ve(this.attrs, e.attrs) &&
              Ve(this.spec, e.spec))
          );
        }
        destroy() {}
      }
      class Le {
        constructor(e, t, n) {
          (this.from = e), (this.to = t), (this.type = n);
        }
        copy(e, t) {
          return new Le(e, t, this.type);
        }
        eq(e, t = 0) {
          return (
            this.type.eq(e.type) &&
            this.from + t == e.from &&
            this.to + t == e.to
          );
        }
        map(e, t, n) {
          return this.type.map(e, this, t, n);
        }
        static widget(e, t, n) {
          return new Le(e, e, new $e(t, n));
        }
        static inline(e, t, n, o) {
          return new Le(e, t, new Be(n, o));
        }
        static node(e, t, n, o) {
          return new Le(e, t, new ze(n, o));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof Be;
        }
      }
      const Fe = [],
        Ye = {};
      class He {
        constructor(e, t) {
          (this.local = e.length ? e : Fe), (this.children = t.length ? t : Fe);
        }
        static create(e, t) {
          return t.length ? _e(t, e, 0, Ye) : We;
        }
        find(e, t, n) {
          let o = [];
          return (
            this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n), o
          );
        }
        findInner(e, t, n, o, r) {
          for (let i = 0; i < this.local.length; i++) {
            let s = this.local[i];
            s.from <= t &&
              s.to >= e &&
              (!r || r(s.spec)) &&
              n.push(s.copy(s.from + o, s.to + o));
          }
          for (let i = 0; i < this.children.length; i += 3)
            if (this.children[i] < t && this.children[i + 1] > e) {
              let s = this.children[i] + 1;
              this.children[i + 2].findInner(e - s, t - s, n, o + s, r);
            }
        }
        map(e, t, n) {
          return this == We || 0 == e.maps.length
            ? this
            : this.mapInner(e, t, 0, 0, n || Ye);
        }
        mapInner(e, t, n, o, r) {
          let i;
          for (let s = 0; s < this.local.length; s++) {
            let l = this.local[s].map(e, n, o);
            l && l.type.valid(t, l)
              ? (i || (i = [])).push(l)
              : r.onRemove && r.onRemove(this.local[s].spec);
          }
          return this.children.length
            ? (function (e, t, n, o, r, i, s) {
                let l = e.slice();
                for (let c = 0, d = i; c < n.maps.length; c++) {
                  let e = 0;
                  n.maps[c].forEach((t, n, o, i) => {
                    let s = i - o - (n - t);
                    for (let a = 0; a < l.length; a += 3) {
                      let i = l[a + 1];
                      if (i < 0 || t > i + d - e) continue;
                      let c = l[a] + d - e;
                      n >= c
                        ? (l[a + 1] = t <= c ? -2 : -1)
                        : o >= r && s && ((l[a] += s), (l[a + 1] += s));
                    }
                    e += s;
                  }),
                    (d = n.maps[c].map(d, -1));
                }
                let a = !1;
                for (let c = 0; c < l.length; c += 3)
                  if (l[c + 1] < 0) {
                    if (-2 == l[c + 1]) {
                      (a = !0), (l[c + 1] = -1);
                      continue;
                    }
                    let t = n.map(e[c] + i),
                      d = t - r;
                    if (d < 0 || d >= o.content.size) {
                      a = !0;
                      continue;
                    }
                    let f = n.map(e[c + 1] + i, -1) - r,
                      { index: u, offset: p } = o.content.findIndex(d),
                      h = o.maybeChild(u);
                    if (h && p == d && p + h.nodeSize == f) {
                      let o = l[c + 2].mapInner(n, h, t + 1, e[c] + i + 1, s);
                      o != We
                        ? ((l[c] = d), (l[c + 1] = f), (l[c + 2] = o))
                        : ((l[c + 1] = -2), (a = !0));
                    } else a = !0;
                  }
                if (a) {
                  let a = (function (e, t, n, o, r, i, s) {
                      function l(e, t) {
                        for (let i = 0; i < e.local.length; i++) {
                          let l = e.local[i].map(o, r, t);
                          l
                            ? n.push(l)
                            : s.onRemove && s.onRemove(e.local[i].spec);
                        }
                        for (let n = 0; n < e.children.length; n += 3)
                          l(e.children[n + 2], e.children[n] + t + 1);
                      }
                      for (let a = 0; a < e.length; a += 3)
                        -1 == e[a + 1] && l(e[a + 2], t[a] + i + 1);
                      return n;
                    })(l, e, t, n, r, i, s),
                    c = _e(a, o, 0, s);
                  t = c.local;
                  for (let e = 0; e < l.length; e += 3)
                    l[e + 1] < 0 && (l.splice(e, 3), (e -= 3));
                  for (let e = 0, t = 0; e < c.children.length; e += 3) {
                    let n = c.children[e];
                    for (; t < l.length && l[t] < n; ) t += 3;
                    l.splice(
                      t,
                      0,
                      c.children[e],
                      c.children[e + 1],
                      c.children[e + 2]
                    );
                  }
                }
                return new He(t.sort(Je), l);
              })(this.children, i || [], e, t, n, o, r)
            : i
            ? new He(i.sort(Je), Fe)
            : We;
        }
        add(e, t) {
          return t.length
            ? this == We
              ? He.create(e, t)
              : this.addInner(e, t, 0)
            : this;
        }
        addInner(e, t, n) {
          let o,
            r = 0;
          e.forEach((e, i) => {
            let s,
              l = i + n;
            if ((s = Ue(t, e, l))) {
              for (o || (o = this.children.slice()); r < o.length && o[r] < i; )
                r += 3;
              o[r] == i
                ? (o[r + 2] = o[r + 2].addInner(e, s, l + 1))
                : o.splice(r, 0, i, i + e.nodeSize, _e(s, e, l + 1, Ye)),
                (r += 3);
            }
          });
          let i = Ge(r ? Xe(t) : t, -n);
          for (let s = 0; s < i.length; s++)
            i[s].type.valid(e, i[s]) || i.splice(s--, 1);
          return new He(
            i.length ? this.local.concat(i).sort(Je) : this.local,
            o || this.children
          );
        }
        remove(e) {
          return 0 == e.length || this == We ? this : this.removeInner(e, 0);
        }
        removeInner(e, t) {
          let n = this.children,
            o = this.local;
          for (let r = 0; r < n.length; r += 3) {
            let o,
              i = n[r] + t,
              s = n[r + 1] + t;
            for (let t, n = 0; n < e.length; n++)
              (t = e[n]) &&
                t.from > i &&
                t.to < s &&
                ((e[n] = null), (o || (o = [])).push(t));
            if (!o) continue;
            n == this.children && (n = this.children.slice());
            let l = n[r + 2].removeInner(o, i + 1);
            l != We ? (n[r + 2] = l) : (n.splice(r, 3), (r -= 3));
          }
          if (o.length)
            for (let r, i = 0; i < e.length; i++)
              if ((r = e[i]))
                for (let e = 0; e < o.length; e++)
                  o[e].eq(r, t) &&
                    (o == this.local && (o = this.local.slice()),
                    o.splice(e--, 1));
          return n == this.children && o == this.local
            ? this
            : o.length || n.length
            ? new He(o, n)
            : We;
        }
        forChild(e, t) {
          if (this == We) return this;
          if (t.isLeaf) return He.empty;
          let n, o;
          for (let s = 0; s < this.children.length; s += 3)
            if (this.children[s] >= e) {
              this.children[s] == e && (n = this.children[s + 2]);
              break;
            }
          let r = e + 1,
            i = r + t.content.size;
          for (let s = 0; s < this.local.length; s++) {
            let e = this.local[s];
            if (e.from < i && e.to > r && e.type instanceof Be) {
              let t = Math.max(r, e.from) - r,
                n = Math.min(i, e.to) - r;
              t < n && (o || (o = [])).push(e.copy(t, n));
            }
          }
          if (o) {
            let e = new He(o.sort(Je), Fe);
            return n ? new je([e, n]) : e;
          }
          return n || We;
        }
        eq(e) {
          if (this == e) return !0;
          if (
            !(e instanceof He) ||
            this.local.length != e.local.length ||
            this.children.length != e.children.length
          )
            return !1;
          for (let t = 0; t < this.local.length; t++)
            if (!this.local[t].eq(e.local[t])) return !1;
          for (let t = 0; t < this.children.length; t += 3)
            if (
              this.children[t] != e.children[t] ||
              this.children[t + 1] != e.children[t + 1] ||
              !this.children[t + 2].eq(e.children[t + 2])
            )
              return !1;
          return !0;
        }
        locals(e) {
          return Qe(this.localsInner(e));
        }
        localsInner(e) {
          if (this == We) return Fe;
          if (e.inlineContent || !this.local.some(Be.is)) return this.local;
          let t = [];
          for (let n = 0; n < this.local.length; n++)
            this.local[n].type instanceof Be || t.push(this.local[n]);
          return t;
        }
      }
      (He.empty = new He([], [])), (He.removeOverlap = Qe);
      const We = He.empty;
      class je {
        constructor(e) {
          this.members = e;
        }
        map(e, t) {
          const n = this.members.map((n) => n.map(e, t, Ye));
          return je.from(n);
        }
        forChild(e, t) {
          if (t.isLeaf) return He.empty;
          let n = [];
          for (let o = 0; o < this.members.length; o++) {
            let r = this.members[o].forChild(e, t);
            r != We &&
              (r instanceof je ? (n = n.concat(r.members)) : n.push(r));
          }
          return je.from(n);
        }
        eq(e) {
          if (!(e instanceof je) || e.members.length != this.members.length)
            return !1;
          for (let t = 0; t < this.members.length; t++)
            if (!this.members[t].eq(e.members[t])) return !1;
          return !0;
        }
        locals(e) {
          let t,
            n = !0;
          for (let o = 0; o < this.members.length; o++) {
            let r = this.members[o].localsInner(e);
            if (r.length)
              if (t) {
                n && ((t = t.slice()), (n = !1));
                for (let e = 0; e < r.length; e++) t.push(r[e]);
              } else t = r;
          }
          return t ? Qe(n ? t : t.sort(Je)) : Fe;
        }
        static from(e) {
          switch (e.length) {
            case 0:
              return We;
            case 1:
              return e[0];
            default:
              return new je(
                e.every((e) => e instanceof He)
                  ? e
                  : e.reduce(
                      (e, t) => e.concat(t instanceof He ? t : t.members),
                      []
                    )
              );
          }
        }
      }
      function Ge(e, t) {
        if (!t || !e.length) return e;
        let n = [];
        for (let o = 0; o < e.length; o++) {
          let r = e[o];
          n.push(new Le(r.from + t, r.to + t, r.type));
        }
        return n;
      }
      function Ue(e, t, n) {
        if (t.isLeaf) return null;
        let o = n + t.nodeSize,
          r = null;
        for (let i, s = 0; s < e.length; s++)
          (i = e[s]) &&
            i.from > n &&
            i.to < o &&
            ((r || (r = [])).push(i), (e[s] = null));
        return r;
      }
      function Xe(e) {
        let t = [];
        for (let n = 0; n < e.length; n++) null != e[n] && t.push(e[n]);
        return t;
      }
      function _e(e, t, n, o) {
        let r = [],
          i = !1;
        t.forEach((t, s) => {
          let l = Ue(e, t, s + n);
          if (l) {
            i = !0;
            let e = _e(l, t, n + s + 1, o);
            e != We && r.push(s, s + t.nodeSize, e);
          }
        });
        let s = Ge(i ? Xe(e) : e, -n).sort(Je);
        for (let l = 0; l < s.length; l++)
          s[l].type.valid(t, s[l]) ||
            (o.onRemove && o.onRemove(s[l].spec), s.splice(l--, 1));
        return s.length || r.length ? new He(s, r) : We;
      }
      function Je(e, t) {
        return e.from - t.from || e.to - t.to;
      }
      function Qe(e) {
        let t = e;
        for (let n = 0; n < t.length - 1; n++) {
          let o = t[n];
          if (o.from != o.to)
            for (let r = n + 1; r < t.length; r++) {
              let i = t[r];
              if (i.from != o.from) {
                i.from < o.to &&
                  (t == e && (t = e.slice()),
                  (t[n] = o.copy(o.from, i.from)),
                  Ze(t, r, o.copy(i.from, o.to)));
                break;
              }
              i.to != o.to &&
                (t == e && (t = e.slice()),
                (t[r] = i.copy(i.from, o.to)),
                Ze(t, r + 1, i.copy(o.to, i.to)));
            }
        }
        return t;
      }
      function Ze(e, t, n) {
        for (; t < e.length && Je(n, e[t]) > 0; ) t++;
        e.splice(t, 0, n);
      }
      new WeakMap();
    },
  },
]);
