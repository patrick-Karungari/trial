"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [84101],
  {
    53355: function (t, e, n) {
      n.d(e, {
        ML: function () {
          return $t;
        },
        hj: function () {
          return B;
        },
        VK: function () {
          return S;
        },
        vc: function () {
          return Dt;
        },
        NB: function () {
          return Rt;
        },
        DK: function () {
          return zt;
        },
        nU: function () {
          return b;
        },
        XP: function () {
          return ot;
        },
        Ov: function () {
          return Ht;
        },
        Rw: function () {
          return Pt;
        },
        N2: function () {
          return rt;
        },
        b5: function () {
          return st;
        },
        qv: function () {
          return it;
        },
        u9: function () {
          return lt;
        },
        QC: function () {
          return ut;
        },
        Nl: function () {
          return u;
        },
        d1: function () {
          return ct;
        },
        Jo: function () {
          return nt;
        },
        tI: function () {
          return ht;
        },
        jo: function () {
          return f;
        },
        m7: function () {
          return v;
        },
        bR: function () {
          return vt;
        },
        EG: function () {
          return yt;
        },
        xh: function () {
          return K;
        },
        Cf: function () {
          return Nt;
        },
        K9: function () {
          return Lt;
        },
        P1: function () {
          return g;
        },
        x2: function () {
          return It;
        },
        pr: function () {
          return bt;
        },
        zK: function () {
          return jt;
        },
        S0: function () {
          return Bt;
        },
      });
      var o = n(616711),
        r = n(515463),
        s = n(436927),
        i = n(102396),
        a = n(8465),
        c = n(555089),
        d = n(249234);
      function l(t) {
        const { state: e, transaction: n } = t;
        let { selection: o } = n,
          { doc: r } = n,
          { storedMarks: s } = n;
        return {
          ...e,
          apply: e.apply.bind(e),
          applyTransaction: e.applyTransaction.bind(e),
          plugins: e.plugins,
          schema: e.schema,
          reconfigure: e.reconfigure.bind(e),
          toJSON: e.toJSON.bind(e),
          get storedMarks() {
            return s;
          },
          get selection() {
            return o;
          },
          get doc() {
            return r;
          },
          get tr() {
            return (o = n.selection), (r = n.doc), (s = n.storedMarks), n;
          },
        };
      }
      class p {
        constructor(t) {
          (this.editor = t.editor),
            (this.rawCommands = this.editor.extensionManager.commands),
            (this.customState = t.state);
        }
        get hasCustomState() {
          return !!this.customState;
        }
        get state() {
          return this.customState || this.editor.state;
        }
        get commands() {
          const { rawCommands: t, editor: e, state: n } = this,
            { view: o } = e,
            { tr: r } = n,
            s = this.buildProps(r);
          return Object.fromEntries(
            Object.entries(t).map(([t, e]) => [
              t,
              (...t) => {
                const n = e(...t)(s);
                return (
                  r.getMeta("preventDispatch") ||
                    this.hasCustomState ||
                    o.dispatch(r),
                  n
                );
              },
            ])
          );
        }
        get chain() {
          return () => this.createChain();
        }
        get can() {
          return () => this.createCan();
        }
        createChain(t, e = !0) {
          const { rawCommands: n, editor: o, state: r } = this,
            { view: s } = o,
            i = [],
            a = !!t,
            c = t || r.tr,
            d = {
              ...Object.fromEntries(
                Object.entries(n).map(([t, n]) => [
                  t,
                  (...t) => {
                    const o = this.buildProps(c, e),
                      r = n(...t)(o);
                    return i.push(r), d;
                  },
                ])
              ),
              run: () => (
                a ||
                  !e ||
                  c.getMeta("preventDispatch") ||
                  this.hasCustomState ||
                  s.dispatch(c),
                i.every((t) => !0 === t)
              ),
            };
          return d;
        }
        createCan(t) {
          const { rawCommands: e, state: n } = this,
            o = t || n.tr,
            r = this.buildProps(o, false),
            s = Object.fromEntries(
              Object.entries(e).map(([t, e]) => [
                t,
                (...t) => e(...t)({ ...r, dispatch: void 0 }),
              ])
            );
          return { ...s, chain: () => this.createChain(o, false) };
        }
        buildProps(t, e = !0) {
          const { rawCommands: n, editor: o, state: r } = this,
            { view: s } = o,
            i = {
              tr: t,
              editor: o,
              view: s,
              state: l({ state: r, transaction: t }),
              dispatch: e ? () => {} : void 0,
              chain: () => this.createChain(t, e),
              can: () => this.createCan(t),
              get commands() {
                return Object.fromEntries(
                  Object.entries(n).map(([t, e]) => [t, (...t) => e(...t)(i)])
                );
              },
            };
          return i;
        }
      }
      function u(t, e, n) {
        if (void 0 === t.config[e] && t.parent) return u(t.parent, e, n);
        if ("function" === typeof t.config[e]) {
          return t.config[e].bind({
            ...n,
            parent: t.parent ? u(t.parent, e, n) : null,
          });
        }
        return t.config[e];
      }
      function h(t) {
        return {
          baseExtensions: t.filter((t) => "extension" === t.type),
          nodeExtensions: t.filter((t) => "node" === t.type),
          markExtensions: t.filter((t) => "mark" === t.type),
        };
      }
      function m(t) {
        const e = [],
          { nodeExtensions: n, markExtensions: o } = h(t),
          r = [...n, ...o],
          s = {
            default: null,
            rendered: !0,
            renderHTML: null,
            parseHTML: null,
            keepOnSplit: !0,
            isRequired: !1,
          };
        return (
          t.forEach((t) => {
            const n = u(t, "addGlobalAttributes", {
              name: t.name,
              options: t.options,
              storage: t.storage,
              extensions: r,
            });
            if (!n) return;
            n().forEach((t) => {
              t.types.forEach((n) => {
                Object.entries(t.attributes).forEach(([t, o]) => {
                  e.push({ type: n, name: t, attribute: { ...s, ...o } });
                });
              });
            });
          }),
          r.forEach((t) => {
            const n = { name: t.name, options: t.options, storage: t.storage },
              o = u(t, "addAttributes", n);
            if (!o) return;
            const r = o();
            Object.entries(r).forEach(([n, o]) => {
              const r = { ...s, ...o };
              "function" ===
                typeof (null === r || void 0 === r ? void 0 : r.default) &&
                (r.default = r.default()),
                (null === r || void 0 === r ? void 0 : r.isRequired) &&
                  void 0 ===
                    (null === r || void 0 === r ? void 0 : r.default) &&
                  delete r.default,
                e.push({ type: t.name, name: n, attribute: r });
            });
          }),
          e
        );
      }
      function f(t, e) {
        if ("string" === typeof t) {
          if (!e.nodes[t])
            throw Error(
              `There is no node type named '${t}'. Maybe you forgot to add the extension?`
            );
          return e.nodes[t];
        }
        return t;
      }
      function g(...t) {
        return t
          .filter((t) => !!t)
          .reduce((t, e) => {
            const n = { ...t };
            return (
              Object.entries(e).forEach(([t, e]) => {
                if (n[t])
                  if ("class" === t) {
                    const o = e ? e.split(" ") : [],
                      r = n[t] ? n[t].split(" ") : [],
                      s = o.filter((t) => !r.includes(t));
                    n[t] = [...r, ...s].join(" ");
                  } else if ("style" === t) {
                    const o = e
                        ? e
                            .split(";")
                            .map((t) => t.trim())
                            .filter(Boolean)
                        : [],
                      r = n[t]
                        ? n[t]
                            .split(";")
                            .map((t) => t.trim())
                            .filter(Boolean)
                        : [],
                      s = new Map();
                    r.forEach((t) => {
                      const [e, n] = t.split(":").map((t) => t.trim());
                      s.set(e, n);
                    }),
                      o.forEach((t) => {
                        const [e, n] = t.split(":").map((t) => t.trim());
                        s.set(e, n);
                      }),
                      (n[t] = Array.from(s.entries())
                        .map(([t, e]) => `${t}: ${e}`)
                        .join("; "));
                  } else n[t] = e;
                else n[t] = e;
              }),
              n
            );
          }, {});
      }
      function v(t, e) {
        return e
          .filter((t) => t.attribute.rendered)
          .map((e) =>
            e.attribute.renderHTML
              ? e.attribute.renderHTML(t.attrs) || {}
              : { [e.name]: t.attrs[e.name] }
          )
          .reduce((t, e) => g(t, e), {});
      }
      function y(t) {
        return "function" === typeof t;
      }
      function b(t, e, ...n) {
        return y(t) ? (e ? t.bind(e)(...n) : t(...n)) : t;
      }
      function k(t, e) {
        return "style" in t
          ? t
          : {
              ...t,
              getAttrs: (n) => {
                const o = t.getAttrs ? t.getAttrs(n) : t.attrs;
                if (!1 === o) return !1;
                const r = e.reduce((t, e) => {
                  const o = e.attribute.parseHTML
                    ? e.attribute.parseHTML(n)
                    : (function (t) {
                        return "string" !== typeof t
                          ? t
                          : t.match(/^[+-]?(?:\d*\.)?\d+$/)
                          ? Number(t)
                          : "true" === t || ("false" !== t && t);
                      })(n.getAttribute(e.name));
                  return null === o || void 0 === o ? t : { ...t, [e.name]: o };
                }, {});
                return { ...o, ...r };
              },
            };
      }
      function w(t) {
        return Object.fromEntries(
          Object.entries(t).filter(
            ([t, e]) =>
              ("attrs" !== t ||
                !(function (t = {}) {
                  return (
                    0 === Object.keys(t).length && t.constructor === Object
                  );
                })(e)) &&
              null !== e &&
              void 0 !== e
          )
        );
      }
      function x(t, e) {
        var n;
        const o = m(t),
          { nodeExtensions: r, markExtensions: s } = h(t),
          a =
            null === (n = r.find((t) => u(t, "topNode"))) || void 0 === n
              ? void 0
              : n.name,
          c = Object.fromEntries(
            r.map((n) => {
              const r = o.filter((t) => t.type === n.name),
                s = {
                  name: n.name,
                  options: n.options,
                  storage: n.storage,
                  editor: e,
                },
                i = w({
                  ...t.reduce((t, e) => {
                    const o = u(e, "extendNodeSchema", s);
                    return { ...t, ...(o ? o(n) : {}) };
                  }, {}),
                  content: b(u(n, "content", s)),
                  marks: b(u(n, "marks", s)),
                  group: b(u(n, "group", s)),
                  inline: b(u(n, "inline", s)),
                  atom: b(u(n, "atom", s)),
                  selectable: b(u(n, "selectable", s)),
                  draggable: b(u(n, "draggable", s)),
                  code: b(u(n, "code", s)),
                  whitespace: b(u(n, "whitespace", s)),
                  defining: b(u(n, "defining", s)),
                  isolating: b(u(n, "isolating", s)),
                  attrs: Object.fromEntries(
                    r.map((t) => {
                      var e;
                      return [
                        t.name,
                        {
                          default:
                            null ===
                              (e =
                                null === t || void 0 === t
                                  ? void 0
                                  : t.attribute) || void 0 === e
                              ? void 0
                              : e.default,
                        },
                      ];
                    })
                  ),
                }),
                a = b(u(n, "parseHTML", s));
              a && (i.parseDOM = a.map((t) => k(t, r)));
              const c = u(n, "renderHTML", s);
              c && (i.toDOM = (t) => c({ node: t, HTMLAttributes: v(t, r) }));
              const d = u(n, "renderText", s);
              return d && (i.toText = d), [n.name, i];
            })
          ),
          d = Object.fromEntries(
            s.map((n) => {
              const r = o.filter((t) => t.type === n.name),
                s = {
                  name: n.name,
                  options: n.options,
                  storage: n.storage,
                  editor: e,
                },
                i = w({
                  ...t.reduce((t, e) => {
                    const o = u(e, "extendMarkSchema", s);
                    return { ...t, ...(o ? o(n) : {}) };
                  }, {}),
                  inclusive: b(u(n, "inclusive", s)),
                  excludes: b(u(n, "excludes", s)),
                  group: b(u(n, "group", s)),
                  spanning: b(u(n, "spanning", s)),
                  code: b(u(n, "code", s)),
                  attrs: Object.fromEntries(
                    r.map((t) => {
                      var e;
                      return [
                        t.name,
                        {
                          default:
                            null ===
                              (e =
                                null === t || void 0 === t
                                  ? void 0
                                  : t.attribute) || void 0 === e
                              ? void 0
                              : e.default,
                        },
                      ];
                    })
                  ),
                }),
                a = b(u(n, "parseHTML", s));
              a && (i.parseDOM = a.map((t) => k(t, r)));
              const c = u(n, "renderHTML", s);
              return (
                c && (i.toDOM = (t) => c({ mark: t, HTMLAttributes: v(t, r) })),
                [n.name, i]
              );
            })
          );
        return new i.V_({ topNode: a, nodes: c, marks: d });
      }
      function M(t, e) {
        return e.nodes[t] || e.marks[t] || null;
      }
      function E(t, e) {
        return Array.isArray(e)
          ? e.some((e) => ("string" === typeof e ? e : e.name) === t.name)
          : e;
      }
      function O(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t);
      }
      class S {
        constructor(t) {
          (this.find = t.find), (this.handler = t.handler);
        }
      }
      function C(t) {
        var e;
        const { editor: n, from: o, to: r, text: s, rules: i, plugin: a } = t,
          { view: c } = n;
        if (c.composing) return !1;
        const d = c.state.doc.resolve(o);
        if (
          d.parent.type.spec.code ||
          (null === (e = d.nodeBefore || d.nodeAfter) || void 0 === e
            ? void 0
            : e.marks.find((t) => t.type.spec.code))
        )
          return !1;
        let u = !1;
        const h =
          ((t, e = 500) => {
            let n = "";
            const o = t.parentOffset;
            return (
              t.parent.nodesBetween(Math.max(0, o - e), o, (t, e, r, s) => {
                var i, a;
                const c =
                  (null === (a = (i = t.type.spec).toText) || void 0 === a
                    ? void 0
                    : a.call(i, { node: t, pos: e, parent: r, index: s })) ||
                  t.textContent ||
                  "%leaf%";
                n += t.isAtom && !t.isText ? c : c.slice(0, Math.max(0, o - e));
              }),
              n
            );
          })(d) + s;
        return (
          i.forEach((t) => {
            if (u) return;
            const e = ((t, e) => {
              if (O(e)) return e.exec(t);
              const n = e(t);
              if (!n) return null;
              const o = [n.text];
              return (
                (o.index = n.index),
                (o.input = t),
                (o.data = n.data),
                n.replaceWith &&
                  (n.text.includes(n.replaceWith) ||
                    console.warn(
                      '[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'
                    ),
                  o.push(n.replaceWith)),
                o
              );
            })(h, t.find);
            if (!e) return;
            const i = c.state.tr,
              d = l({ state: c.state, transaction: i }),
              m = { from: o - (e[0].length - s.length), to: r },
              {
                commands: f,
                chain: g,
                can: v,
              } = new p({ editor: n, state: d });
            null !==
              t.handler({
                state: d,
                range: m,
                match: e,
                commands: f,
                chain: g,
                can: v,
              }) &&
              i.steps.length &&
              (i.setMeta(a, { transform: i, from: o, to: r, text: s }),
              c.dispatch(i),
              (u = !0));
          }),
          u
        );
      }
      function T(t) {
        const { editor: e, rules: n } = t,
          r = new o.Sy({
            state: {
              init: () => null,
              apply(t, o) {
                const s = t.getMeta(r);
                if (s) return s;
                const i = t.getMeta("applyInputRules");
                return (
                  !!i &&
                    setTimeout(() => {
                      const { from: t, text: o } = i,
                        s = t + o.length;
                      C({
                        editor: e,
                        from: t,
                        to: s,
                        text: o,
                        rules: n,
                        plugin: r,
                      });
                    }),
                  t.selectionSet || t.docChanged ? null : o
                );
              },
            },
            props: {
              handleTextInput: (t, o, s, i) =>
                C({ editor: e, from: o, to: s, text: i, rules: n, plugin: r }),
              handleDOMEvents: {
                compositionend: (t) => (
                  setTimeout(() => {
                    const { $cursor: o } = t.state.selection;
                    o &&
                      C({
                        editor: e,
                        from: o.pos,
                        to: o.pos,
                        text: "",
                        rules: n,
                        plugin: r,
                      });
                  }),
                  !1
                ),
              },
              handleKeyDown(t, o) {
                if ("Enter" !== o.key) return !1;
                const { $cursor: s } = t.state.selection;
                return (
                  !!s &&
                  C({
                    editor: e,
                    from: s.pos,
                    to: s.pos,
                    text: "\n",
                    rules: n,
                    plugin: r,
                  })
                );
              },
            },
            isInputRules: !0,
          });
        return r;
      }
      class P {
        constructor(t) {
          (this.find = t.find), (this.handler = t.handler);
        }
      }
      function A(t) {
        const {
            editor: e,
            state: n,
            from: o,
            to: r,
            rule: s,
            pasteEvent: i,
            dropEvent: a,
          } = t,
          { commands: c, chain: d, can: l } = new p({ editor: e, state: n }),
          u = [];
        n.doc.nodesBetween(o, r, (t, e) => {
          if (!t.isTextblock || t.type.spec.code) return;
          const p = Math.max(o, e),
            h = Math.min(r, e + t.content.size);
          ((t, e, n) => {
            if (O(e)) return [...t.matchAll(e)];
            const o = e(t, n);
            return o
              ? o.map((e) => {
                  const n = [e.text];
                  return (
                    (n.index = e.index),
                    (n.input = t),
                    (n.data = e.data),
                    e.replaceWith &&
                      (e.text.includes(e.replaceWith) ||
                        console.warn(
                          '[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'
                        ),
                      n.push(e.replaceWith)),
                    n
                  );
                })
              : [];
          })(t.textBetween(p - e, h - e, void 0, "\ufffc"), s.find, i).forEach(
            (t) => {
              if (void 0 === t.index) return;
              const e = p + t.index + 1,
                o = e + t[0].length,
                r = { from: n.tr.mapping.map(e), to: n.tr.mapping.map(o) },
                h = s.handler({
                  state: n,
                  range: r,
                  match: t,
                  commands: c,
                  chain: d,
                  can: l,
                  pasteEvent: i,
                  dropEvent: a,
                });
              u.push(h);
            }
          );
        });
        return u.every((t) => null !== t);
      }
      function $(t) {
        const { editor: e, rules: n } = t;
        let r = null,
          s = !1,
          i = !1,
          a =
            "undefined" !== typeof ClipboardEvent
              ? new ClipboardEvent("paste")
              : null,
          c = "undefined" !== typeof DragEvent ? new DragEvent("drop") : null;
        const d = ({ state: t, from: n, to: o, rule: r, pasteEvt: s }) => {
          const i = t.tr,
            d = l({ state: t, transaction: i });
          if (
            A({
              editor: e,
              state: d,
              from: Math.max(n - 1, 0),
              to: o.b - 1,
              rule: r,
              pasteEvent: s,
              dropEvent: c,
            }) &&
            i.steps.length
          )
            return (
              (c =
                "undefined" !== typeof DragEvent
                  ? new DragEvent("drop")
                  : null),
              (a =
                "undefined" !== typeof ClipboardEvent
                  ? new ClipboardEvent("paste")
                  : null),
              i
            );
        };
        return n.map(
          (t) =>
            new o.Sy({
              view(t) {
                const e = (e) => {
                  var n;
                  r = (
                    null === (n = t.dom.parentElement) || void 0 === n
                      ? void 0
                      : n.contains(e.target)
                  )
                    ? t.dom.parentElement
                    : null;
                };
                return (
                  window.addEventListener("dragstart", e),
                  {
                    destroy() {
                      window.removeEventListener("dragstart", e);
                    },
                  }
                );
              },
              props: {
                handleDOMEvents: {
                  drop: (t, e) => (
                    (i = r === t.dom.parentElement), (c = e), !1
                  ),
                  paste: (t, e) => {
                    var n;
                    const o =
                      null === (n = e.clipboardData) || void 0 === n
                        ? void 0
                        : n.getData("text/html");
                    return (
                      (a = e),
                      (s = !!(null === o || void 0 === o
                        ? void 0
                        : o.includes("data-pm-slice"))),
                      !1
                    );
                  },
                },
              },
              appendTransaction: (e, n, o) => {
                const r = e[0],
                  c = "paste" === r.getMeta("uiEvent") && !s,
                  l = "drop" === r.getMeta("uiEvent") && !i,
                  p = r.getMeta("applyPasteRules"),
                  u = !!p;
                if (!c && !l && !u) return;
                if (u) {
                  const { from: e, text: n } = p,
                    r = e + n.length,
                    s = ((t) => {
                      var e;
                      const n = new ClipboardEvent("paste", {
                        clipboardData: new DataTransfer(),
                      });
                      return (
                        null === (e = n.clipboardData) ||
                          void 0 === e ||
                          e.setData("text/html", t),
                        n
                      );
                    })(n);
                  return d({
                    rule: t,
                    state: o,
                    from: e,
                    to: { b: r },
                    pasteEvt: s,
                  });
                }
                const h = n.doc.content.findDiffStart(o.doc.content),
                  m = n.doc.content.findDiffEnd(o.doc.content);
                return "number" === typeof h && m && h !== m.b
                  ? d({ rule: t, state: o, from: h, to: m, pasteEvt: a })
                  : void 0;
              },
            })
        );
      }
      class N {
        constructor(t, e) {
          (this.splittableMarks = []),
            (this.editor = e),
            (this.extensions = N.resolve(t)),
            (this.schema = x(this.extensions, e)),
            this.setupExtensions();
        }
        static resolve(t) {
          const e = N.sort(N.flatten(t)),
            n = (function (t) {
              const e = t.filter((e, n) => t.indexOf(e) !== n);
              return Array.from(new Set(e));
            })(e.map((t) => t.name));
          return (
            n.length &&
              console.warn(
                `[tiptap warn]: Duplicate extension names found: [${n
                  .map((t) => `'${t}'`)
                  .join(", ")}]. This can lead to issues.`
              ),
            e
          );
        }
        static flatten(t) {
          return t
            .map((t) => {
              const e = u(t, "addExtensions", {
                name: t.name,
                options: t.options,
                storage: t.storage,
              });
              return e ? [t, ...this.flatten(e())] : t;
            })
            .flat(10);
        }
        static sort(t) {
          return t.sort((t, e) => {
            const n = u(t, "priority") || 100,
              o = u(e, "priority") || 100;
            return n > o ? -1 : n < o ? 1 : 0;
          });
        }
        get commands() {
          return this.extensions.reduce((t, e) => {
            const n = u(e, "addCommands", {
              name: e.name,
              options: e.options,
              storage: e.storage,
              editor: this.editor,
              type: M(e.name, this.schema),
            });
            return n ? { ...t, ...n() } : t;
          }, {});
        }
        get plugins() {
          const { editor: t } = this,
            e = N.sort([...this.extensions].reverse()),
            n = [],
            o = [],
            r = e
              .map((e) => {
                const r = {
                    name: e.name,
                    options: e.options,
                    storage: e.storage,
                    editor: t,
                    type: M(e.name, this.schema),
                  },
                  i = [],
                  a = u(e, "addKeyboardShortcuts", r);
                let c = {};
                if (
                  ("mark" === e.type &&
                    u(e, "exitable", r) &&
                    (c.ArrowRight = () =>
                      Dt.handleExit({ editor: t, mark: e })),
                  a)
                ) {
                  const e = Object.fromEntries(
                    Object.entries(a()).map(([e, n]) => [
                      e,
                      () => n({ editor: t }),
                    ])
                  );
                  c = { ...c, ...e };
                }
                const d = (0, s.h)(c);
                i.push(d);
                const l = u(e, "addInputRules", r);
                E(e, t.options.enableInputRules) && l && n.push(...l());
                const p = u(e, "addPasteRules", r);
                E(e, t.options.enablePasteRules) && p && o.push(...p());
                const h = u(e, "addProseMirrorPlugins", r);
                if (h) {
                  const t = h();
                  i.push(...t);
                }
                return i;
              })
              .flat();
          return [
            T({ editor: t, rules: n }),
            ...$({ editor: t, rules: o }),
            ...r,
          ];
        }
        get attributes() {
          return m(this.extensions);
        }
        get nodeViews() {
          const { editor: t } = this,
            { nodeExtensions: e } = h(this.extensions);
          return Object.fromEntries(
            e
              .filter((t) => !!u(t, "addNodeView"))
              .map((e) => {
                const n = this.attributes.filter((t) => t.type === e.name),
                  o = {
                    name: e.name,
                    options: e.options,
                    storage: e.storage,
                    editor: t,
                    type: f(e.name, this.schema),
                  },
                  r = u(e, "addNodeView", o);
                if (!r) return [];
                return [
                  e.name,
                  (o, s, i, a, c) => {
                    const d = v(o, n);
                    return r()({
                      node: o,
                      view: s,
                      getPos: i,
                      decorations: a,
                      innerDecorations: c,
                      editor: t,
                      extension: e,
                      HTMLAttributes: d,
                    });
                  },
                ];
              })
          );
        }
        setupExtensions() {
          this.extensions.forEach((t) => {
            var e;
            this.editor.extensionStorage[t.name] = t.storage;
            const n = {
              name: t.name,
              options: t.options,
              storage: t.storage,
              editor: this.editor,
              type: M(t.name, this.schema),
            };
            if ("mark" === t.type) {
              (null === (e = b(u(t, "keepOnSplit", n))) || void 0 === e || e) &&
                this.splittableMarks.push(t.name);
            }
            const o = u(t, "onBeforeCreate", n),
              r = u(t, "onCreate", n),
              s = u(t, "onUpdate", n),
              i = u(t, "onSelectionUpdate", n),
              a = u(t, "onTransaction", n),
              c = u(t, "onFocus", n),
              d = u(t, "onBlur", n),
              l = u(t, "onDestroy", n);
            o && this.editor.on("beforeCreate", o),
              r && this.editor.on("create", r),
              s && this.editor.on("update", s),
              i && this.editor.on("selectionUpdate", i),
              a && this.editor.on("transaction", a),
              c && this.editor.on("focus", c),
              d && this.editor.on("blur", d),
              l && this.editor.on("destroy", l);
          });
        }
      }
      function I(t) {
        return (
          "Object" ===
            (function (t) {
              return Object.prototype.toString.call(t).slice(8, -1);
            })(t) &&
          t.constructor === Object &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function j(t, e) {
        const n = { ...t };
        return (
          I(t) &&
            I(e) &&
            Object.keys(e).forEach((o) => {
              I(e[o]) && I(t[o]) ? (n[o] = j(t[o], e[o])) : (n[o] = e[o]);
            }),
          n
        );
      }
      class B {
        constructor(t = {}) {
          (this.type = "extension"),
            (this.name = "extension"),
            (this.parent = null),
            (this.child = null),
            (this.config = { name: this.name, defaultOptions: {} }),
            (this.config = { ...this.config, ...t }),
            (this.name = this.config.name),
            t.defaultOptions &&
              Object.keys(t.defaultOptions).length > 0 &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`
              ),
            (this.options = this.config.defaultOptions),
            this.config.addOptions &&
              (this.options = b(u(this, "addOptions", { name: this.name }))),
            (this.storage =
              b(
                u(this, "addStorage", {
                  name: this.name,
                  options: this.options,
                })
              ) || {});
        }
        static create(t = {}) {
          return new B(t);
        }
        configure(t = {}) {
          const e = this.extend({
            ...this.config,
            addOptions: () => j(this.options, t),
          });
          return (e.name = this.name), (e.parent = this.parent), e;
        }
        extend(t = {}) {
          const e = new B({ ...this.config, ...t });
          return (
            (e.parent = this),
            (this.child = e),
            (e.name = t.name ? t.name : e.parent.name),
            t.defaultOptions &&
              Object.keys(t.defaultOptions).length > 0 &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`
              ),
            (e.options = b(u(e, "addOptions", { name: e.name }))),
            (e.storage = b(
              u(e, "addStorage", { name: e.name, options: e.options })
            )),
            e
          );
        }
      }
      function D(t, e, n) {
        const { from: o, to: r } = e,
          { blockSeparator: s = "\n\n", textSerializers: i = {} } = n || {};
        let a = "";
        return (
          t.nodesBetween(o, r, (t, n, c, d) => {
            var l;
            t.isBlock && n > o && (a += s);
            const p = null === i || void 0 === i ? void 0 : i[t.type.name];
            if (p)
              return (
                c &&
                  (a += p({ node: t, pos: n, parent: c, index: d, range: e })),
                !1
              );
            t.isText &&
              (a +=
                null === (l = null === t || void 0 === t ? void 0 : t.text) ||
                void 0 === l
                  ? void 0
                  : l.slice(Math.max(o, n) - n, r - n));
          }),
          a
        );
      }
      function R(t) {
        return Object.fromEntries(
          Object.entries(t.nodes)
            .filter(([, t]) => t.spec.toText)
            .map(([t, e]) => [t, e.spec.toText])
        );
      }
      const z = B.create({
        name: "clipboardTextSerializer",
        addOptions: () => ({ blockSeparator: void 0 }),
        addProseMirrorPlugins() {
          return [
            new o.Sy({
              key: new o.H$("clipboardTextSerializer"),
              props: {
                clipboardTextSerializer: () => {
                  const { editor: t } = this,
                    { state: e, schema: n } = t,
                    { doc: o, selection: r } = e,
                    { ranges: s } = r,
                    i = Math.min(...s.map((t) => t.$from.pos)),
                    a = Math.max(...s.map((t) => t.$to.pos)),
                    c = R(n);
                  return D(
                    o,
                    { from: i, to: a },
                    {
                      ...(void 0 !== this.options.blockSeparator
                        ? { blockSeparator: this.options.blockSeparator }
                        : {}),
                      textSerializers: c,
                    }
                  );
                },
              },
            }),
          ];
        },
      });
      function L(t, e, n = { strict: !0 }) {
        const o = Object.keys(e);
        return (
          !o.length ||
          o.every((o) =>
            n.strict ? e[o] === t[o] : O(e[o]) ? e[o].test(t[o]) : e[o] === t[o]
          )
        );
      }
      function H(t, e, n = {}) {
        return t.find((t) => t.type === e && L(t.attrs, n));
      }
      function F(t, e, n = {}) {
        return !!H(t, e, n);
      }
      function _(t, e, n = {}) {
        if (!t || !e) return;
        let o = t.parent.childAfter(t.parentOffset);
        if (
          (t.parentOffset === o.offset &&
            0 !== o.offset &&
            (o = t.parent.childBefore(t.parentOffset)),
          !o.node)
        )
          return;
        const r = H([...o.node.marks], e, n);
        if (!r) return;
        let s = o.index,
          i = t.start() + o.offset,
          a = s + 1,
          c = i + o.node.nodeSize;
        for (
          H([...o.node.marks], e, n);
          s > 0 && r.isInSet(t.parent.child(s - 1).marks);

        )
          (s -= 1), (i -= t.parent.child(s).nodeSize);
        for (
          ;
          a < t.parent.childCount && F([...t.parent.child(a).marks], e, n);

        )
          (c += t.parent.child(a).nodeSize), (a += 1);
        return { from: i, to: c };
      }
      function V(t, e) {
        if ("string" === typeof t) {
          if (!e.marks[t])
            throw Error(
              `There is no mark type named '${t}'. Maybe you forgot to add the extension?`
            );
          return e.marks[t];
        }
        return t;
      }
      function K(t) {
        return t instanceof o.Bs;
      }
      function W(t = 0, e = 0, n = 0) {
        return Math.min(Math.max(t, e), n);
      }
      function q(t, e = null) {
        if (!e) return null;
        const n = o.Y1.atStart(t),
          r = o.Y1.atEnd(t);
        if ("start" === e || !0 === e) return n;
        if ("end" === e) return r;
        const s = n.from,
          i = r.to;
        return "all" === e
          ? o.Bs.create(t, W(0, s, i), W(t.content.size, s, i))
          : o.Bs.create(t, W(e, s, i), W(e, s, i));
      }
      function U() {
        return (
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod",
          ].includes(navigator.platform) ||
          (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
      }
      const G = (t) => {
        const e = t.childNodes;
        for (let n = e.length - 1; n >= 0; n -= 1) {
          const o = e[n];
          3 === o.nodeType && o.nodeValue && /^(\n\s\s|\n)$/.test(o.nodeValue)
            ? t.removeChild(o)
            : 1 === o.nodeType && G(o);
        }
        return t;
      };
      function J(t) {
        const e = `<body>${t}</body>`,
          n = new window.DOMParser().parseFromString(e, "text/html").body;
        return G(n);
      }
      function Y(t, e, n) {
        n = { slice: !0, parseOptions: {}, ...n };
        const o = "string" === typeof t;
        if ("object" === typeof t && null !== t)
          try {
            if (Array.isArray(t) && t.length > 0)
              return i.HY.fromArray(t.map((t) => e.nodeFromJSON(t)));
            const o = e.nodeFromJSON(t);
            return n.errorOnInvalidContent && o.check(), o;
          } catch (r) {
            if (n.errorOnInvalidContent)
              throw new Error("[tiptap error]: Invalid JSON content", {
                cause: r,
              });
            return (
              console.warn(
                "[tiptap warn]: Invalid content.",
                "Passed value:",
                t,
                "Error:",
                r
              ),
              Y("", e, n)
            );
          }
        if (o) {
          if (n.errorOnInvalidContent) {
            let o = !1,
              r = "";
            const s = new i.V_({
              topNode: e.spec.topNode,
              marks: e.spec.marks,
              nodes: e.spec.nodes.append({
                __tiptap__private__unknown__catch__all__node: {
                  content: "inline*",
                  group: "block",
                  parseDOM: [
                    {
                      tag: "*",
                      getAttrs: (t) => (
                        (o = !0),
                        (r = "string" === typeof t ? t : t.outerHTML),
                        null
                      ),
                    },
                  ],
                },
              }),
            });
            if (
              (n.slice
                ? i.aw.fromSchema(s).parseSlice(J(t), n.parseOptions)
                : i.aw.fromSchema(s).parse(J(t), n.parseOptions),
              n.errorOnInvalidContent && o)
            )
              throw new Error("[tiptap error]: Invalid HTML content", {
                cause: new Error(`Invalid element found: ${r}`),
              });
          }
          const o = i.aw.fromSchema(e);
          return n.slice
            ? o.parseSlice(J(t), n.parseOptions).content
            : o.parse(J(t), n.parseOptions);
        }
        return Y("", e, n);
      }
      function X() {
        return (
          "undefined" !== typeof navigator && /Mac/.test(navigator.platform)
        );
      }
      function Q(t, e, n = {}) {
        const { from: o, to: r, empty: s } = t.selection,
          i = e ? f(e, t.schema) : null,
          a = [];
        t.doc.nodesBetween(o, r, (t, e) => {
          if (t.isText) return;
          const n = Math.max(o, e),
            s = Math.min(r, e + t.nodeSize);
          a.push({ node: t, from: n, to: s });
        });
        const c = r - o,
          d = a
            .filter((t) => !i || i.name === t.node.type.name)
            .filter((t) => L(t.node.attrs, n, { strict: !1 }));
        if (s) return !!d.length;
        return d.reduce((t, e) => t + e.to - e.from, 0) >= c;
      }
      function Z(t, e) {
        return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
      }
      function tt(t, e) {
        const n = "string" === typeof e ? [e] : e;
        return Object.keys(t).reduce(
          (e, o) => (n.includes(o) || (e[o] = t[o]), e),
          {}
        );
      }
      function et(t, e, n = {}, o = {}) {
        return Y(t, e, {
          slice: !1,
          parseOptions: n,
          errorOnInvalidContent: o.errorOnInvalidContent,
        });
      }
      function nt(t, e) {
        const n = V(e, t.schema),
          { from: o, to: r, empty: s } = t.selection,
          i = [];
        s
          ? (t.storedMarks && i.push(...t.storedMarks),
            i.push(...t.selection.$head.marks()))
          : t.doc.nodesBetween(o, r, (t) => {
              i.push(...t.marks);
            });
        const a = i.find((t) => t.type.name === n.name);
        return a ? { ...a.attrs } : {};
      }
      function ot(t, e) {
        const n = new a.wx(t);
        return (
          e.forEach((t) => {
            t.steps.forEach((t) => {
              n.step(t);
            });
          }),
          n
        );
      }
      function rt(t, e) {
        const n = [];
        return (
          t.descendants((t, o) => {
            e(t) && n.push({ node: t, pos: o });
          }),
          n
        );
      }
      function st(t, e, n) {
        const o = [];
        return (
          t.nodesBetween(e.from, e.to, (t, e) => {
            n(t) && o.push({ node: t, pos: e });
          }),
          o
        );
      }
      function it(t, e) {
        for (let n = t.depth; n > 0; n -= 1) {
          const o = t.node(n);
          if (e(o))
            return {
              pos: n > 0 ? t.before(n) : 0,
              start: t.start(n),
              depth: n,
              node: o,
            };
        }
      }
      function at(t) {
        return (e) => it(e.$from, t);
      }
      function ct(t, e) {
        const n = i.PW.fromSchema(e).serializeFragment(t),
          o = document.implementation.createHTMLDocument().createElement("div");
        return o.appendChild(n), o.innerHTML;
      }
      function dt(t, e) {
        return D(t, { from: 0, to: t.content.size }, e);
      }
      function lt(t, e) {
        const n = Z("string" === typeof e ? e : e.name, t.schema);
        return "node" === n
          ? (function (t, e) {
              const n = f(e, t.schema),
                { from: o, to: r } = t.selection,
                s = [];
              t.doc.nodesBetween(o, r, (t) => {
                s.push(t);
              });
              const i = s.reverse().find((t) => t.type.name === n.name);
              return i ? { ...i.attrs } : {};
            })(t, e)
          : "mark" === n
          ? nt(t, e)
          : {};
      }
      function pt(t) {
        const e = (function (t, e = JSON.stringify) {
          const n = {};
          return t.filter((t) => {
            const o = e(t);
            return !Object.prototype.hasOwnProperty.call(n, o) && (n[o] = !0);
          });
        })(t);
        return 1 === e.length
          ? e
          : e.filter(
              (t, n) =>
                !e
                  .filter((t, e) => e !== n)
                  .some(
                    (e) =>
                      t.oldRange.from >= e.oldRange.from &&
                      t.oldRange.to <= e.oldRange.to &&
                      t.newRange.from >= e.newRange.from &&
                      t.newRange.to <= e.newRange.to
                  )
            );
      }
      function ut(t) {
        const { mapping: e, steps: n } = t,
          o = [];
        return (
          e.maps.forEach((t, r) => {
            const s = [];
            if (t.ranges.length)
              t.forEach((t, e) => {
                s.push({ from: t, to: e });
              });
            else {
              const { from: t, to: e } = n[r];
              if (void 0 === t || void 0 === e) return;
              s.push({ from: t, to: e });
            }
            s.forEach(({ from: t, to: n }) => {
              const s = e.slice(r).map(t, -1),
                i = e.slice(r).map(n),
                a = e.invert().map(s, -1),
                c = e.invert().map(i);
              o.push({
                oldRange: { from: a, to: c },
                newRange: { from: s, to: i },
              });
            });
          }),
          pt(o)
        );
      }
      function ht(t, e, n) {
        const o = [];
        return (
          t === e
            ? n
                .resolve(t)
                .marks()
                .forEach((e) => {
                  const r = _(n.resolve(t), e.type);
                  r && o.push({ mark: e, ...r });
                })
            : n.nodesBetween(t, e, (t, e) => {
                t &&
                  void 0 !==
                    (null === t || void 0 === t ? void 0 : t.nodeSize) &&
                  o.push(
                    ...t.marks.map((n) => ({
                      from: e,
                      to: e + t.nodeSize,
                      mark: n,
                    }))
                  );
              }),
          o
        );
      }
      function mt(t, e, n) {
        return Object.fromEntries(
          Object.entries(n).filter(([n]) => {
            const o = t.find((t) => t.type === e && t.name === n);
            return !!o && o.attribute.keepOnSplit;
          })
        );
      }
      function ft(t, e, n = {}) {
        const { empty: o, ranges: r } = t.selection,
          s = e ? V(e, t.schema) : null;
        if (o)
          return !!(t.storedMarks || t.selection.$from.marks())
            .filter((t) => !s || s.name === t.type.name)
            .find((t) => L(t.attrs, n, { strict: !1 }));
        let i = 0;
        const a = [];
        if (
          (r.forEach(({ $from: e, $to: n }) => {
            const o = e.pos,
              r = n.pos;
            t.doc.nodesBetween(o, r, (t, e) => {
              if (!t.isText && !t.marks.length) return;
              const n = Math.max(o, e),
                s = Math.min(r, e + t.nodeSize);
              (i += s - n),
                a.push(...t.marks.map((t) => ({ mark: t, from: n, to: s })));
            });
          }),
          0 === i)
        )
          return !1;
        const c = a
            .filter((t) => !s || s.name === t.mark.type.name)
            .filter((t) => L(t.mark.attrs, n, { strict: !1 }))
            .reduce((t, e) => t + e.to - e.from, 0),
          d = a
            .filter((t) => !s || (t.mark.type !== s && t.mark.type.excludes(s)))
            .reduce((t, e) => t + e.to - e.from, 0);
        return (c > 0 ? c + d : c) >= i;
      }
      function gt(t, e) {
        const { nodeExtensions: n } = h(e),
          o = n.find((e) => e.name === t);
        if (!o) return !1;
        const r = b(
          u(o, "group", {
            name: o.name,
            options: o.options,
            storage: o.storage,
          })
        );
        return "string" === typeof r && r.split(" ").includes("list");
      }
      function vt(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
        var o;
        if (n) {
          if ("hardBreak" === t.type.name) return !0;
          if (t.isText)
            return /^\s*$/m.test(
              null !== (o = t.text) && void 0 !== o ? o : ""
            );
        }
        if (t.isText) return !t.text;
        if (t.isAtom || t.isLeaf) return !1;
        if (0 === t.content.childCount) return !0;
        if (e) {
          let o = !0;
          return (
            t.content.forEach((t) => {
              !1 !== o &&
                (vt(t, { ignoreWhitespace: n, checkChildren: e }) || (o = !1));
            }),
            o
          );
        }
        return !1;
      }
      function yt(t) {
        return t instanceof o.qv;
      }
      function bt(t, e, n) {
        const o = t.state.doc.content.size,
          r = W(e, 0, o),
          s = W(n, 0, o),
          i = t.coordsAtPos(r),
          a = t.coordsAtPos(s, -1),
          c = Math.min(i.top, a.top),
          d = Math.max(i.bottom, a.bottom),
          l = Math.min(i.left, a.left),
          p = Math.max(i.right, a.right),
          u = {
            top: c,
            bottom: d,
            left: l,
            right: p,
            width: p - l,
            height: d - c,
            x: l,
            y: c,
          };
        return { ...u, toJSON: () => u };
      }
      function kt(t, e) {
        const n =
          t.storedMarks ||
          (t.selection.$to.parentOffset && t.selection.$from.marks());
        if (n) {
          const o = n.filter((t) =>
            null === e || void 0 === e ? void 0 : e.includes(t.type.name)
          );
          t.tr.ensureMarks(o);
        }
      }
      const wt = (t, e) => {
          const n = at((t) => t.type === e)(t.selection);
          if (!n) return !0;
          const o = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
          if (void 0 === o) return !0;
          const r = t.doc.nodeAt(o);
          return (
            n.node.type !== (null === r || void 0 === r ? void 0 : r.type) ||
            !(0, a.Mn)(t.doc, n.pos) ||
            (t.join(n.pos), !0)
          );
        },
        xt = (t, e) => {
          const n = at((t) => t.type === e)(t.selection);
          if (!n) return !0;
          const o = t.doc.resolve(n.start).after(n.depth);
          if (void 0 === o) return !0;
          const r = t.doc.nodeAt(o);
          return (
            n.node.type !== (null === r || void 0 === r ? void 0 : r.type) ||
            !(0, a.Mn)(t.doc, o) ||
            (t.join(o), !0)
          );
        };
      var Mt = Object.freeze({
        __proto__: null,
        blur:
          () =>
          ({ editor: t, view: e }) => (
            requestAnimationFrame(() => {
              var n;
              t.isDestroyed ||
                (e.dom.blur(),
                null ===
                  (n =
                    null === window || void 0 === window
                      ? void 0
                      : window.getSelection()) ||
                  void 0 === n ||
                  n.removeAllRanges());
            }),
            !0
          ),
        clearContent:
          (t = !1) =>
          ({ commands: e }) =>
            e.setContent("", t),
        clearNodes:
          () =>
          ({ state: t, tr: e, dispatch: n }) => {
            const { selection: o } = e,
              { ranges: r } = o;
            return (
              !n ||
              (r.forEach(({ $from: n, $to: o }) => {
                t.doc.nodesBetween(n.pos, o.pos, (t, n) => {
                  if (t.type.isText) return;
                  const { doc: o, mapping: r } = e,
                    s = o.resolve(r.map(n)),
                    i = o.resolve(r.map(n + t.nodeSize)),
                    c = s.blockRange(i);
                  if (!c) return;
                  const d = (0, a.k9)(c);
                  if (t.type.isTextblock) {
                    const { defaultType: t } = s.parent.contentMatchAt(
                      s.index()
                    );
                    e.setNodeMarkup(c.start, t);
                  }
                  (d || 0 === d) && e.lift(c, d);
                });
              }),
              !0)
            );
          },
        command: (t) => (e) => t(e),
        createParagraphNear:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.mD)(t, e),
        cut:
          (t, e) =>
          ({ editor: n, tr: r }) => {
            const { state: s } = n,
              i = s.doc.slice(t.from, t.to);
            r.deleteRange(t.from, t.to);
            const a = r.mapping.map(e);
            return (
              r.insert(a, i.content),
              r.setSelection(new o.Bs(r.doc.resolve(a - 1))),
              !0
            );
          },
        deleteCurrentNode:
          () =>
          ({ tr: t, dispatch: e }) => {
            const { selection: n } = t,
              o = n.$anchor.node();
            if (o.content.size > 0) return !1;
            const r = t.selection.$anchor;
            for (let s = r.depth; s > 0; s -= 1) {
              if (r.node(s).type === o.type) {
                if (e) {
                  const e = r.before(s),
                    n = r.after(s);
                  t.delete(e, n).scrollIntoView();
                }
                return !0;
              }
            }
            return !1;
          },
        deleteNode:
          (t) =>
          ({ tr: e, state: n, dispatch: o }) => {
            const r = f(t, n.schema),
              s = e.selection.$anchor;
            for (let t = s.depth; t > 0; t -= 1) {
              if (s.node(t).type === r) {
                if (o) {
                  const n = s.before(t),
                    o = s.after(t);
                  e.delete(n, o).scrollIntoView();
                }
                return !0;
              }
            }
            return !1;
          },
        deleteRange:
          (t) =>
          ({ tr: e, dispatch: n }) => {
            const { from: o, to: r } = t;
            return n && e.delete(o, r), !0;
          },
        deleteSelection:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.NE)(t, e),
        enter:
          () =>
          ({ commands: t }) =>
            t.keyboardShortcut("Enter"),
        exitCode:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.uo)(t, e),
        extendMarkRange:
          (t, e = {}) =>
          ({ tr: n, state: r, dispatch: s }) => {
            const i = V(t, r.schema),
              { doc: a, selection: c } = n,
              { $from: d, from: l, to: p } = c;
            if (s) {
              const t = _(d, i, e);
              if (t && t.from <= l && t.to >= p) {
                const e = o.Bs.create(a, t.from, t.to);
                n.setSelection(e);
              }
            }
            return !0;
          },
        first: (t) => (e) => {
          const n = "function" === typeof t ? t(e) : t;
          for (let t = 0; t < n.length; t += 1) if (n[t](e)) return !0;
          return !1;
        },
        focus:
          (t = null, e = {}) =>
          ({ editor: n, view: o, tr: r, dispatch: s }) => {
            e = { scrollIntoView: !0, ...e };
            const i = () => {
              U() && o.dom.focus(),
                requestAnimationFrame(() => {
                  n.isDestroyed ||
                    (o.focus(),
                    (null === e || void 0 === e ? void 0 : e.scrollIntoView) &&
                      n.commands.scrollIntoView());
                });
            };
            if ((o.hasFocus() && null === t) || !1 === t) return !0;
            if (s && null === t && !K(n.state.selection)) return i(), !0;
            const a = q(r.doc, t) || n.state.selection,
              c = n.state.selection.eq(a);
            return (
              s &&
                (c || r.setSelection(a),
                c && r.storedMarks && r.setStoredMarks(r.storedMarks),
                i()),
              !0
            );
          },
        forEach: (t, e) => (n) => t.every((t, o) => e(t, { ...n, index: o })),
        insertContent:
          (t, e) =>
          ({ tr: n, commands: o }) =>
            o.insertContentAt(
              { from: n.selection.from, to: n.selection.to },
              t,
              e
            ),
        insertContentAt:
          (t, e, n) =>
          ({ tr: r, dispatch: s, editor: i }) => {
            var c;
            if (s) {
              let s;
              n = {
                parseOptions: {},
                updateSelection: !0,
                applyInputRules: !1,
                applyPasteRules: !1,
                ...n,
              };
              try {
                s = Y(e, i.schema, {
                  parseOptions: {
                    preserveWhitespace: "full",
                    ...n.parseOptions,
                  },
                  errorOnInvalidContent:
                    null !== (c = n.errorOnInvalidContent) && void 0 !== c
                      ? c
                      : i.options.enableContentCheck,
                });
              } catch (d) {
                return (
                  i.emit("contentError", {
                    editor: i,
                    error: d,
                    disableCollaboration: () => {
                      console.error(
                        "[tiptap error]: Unable to disable collaboration at this point in time"
                      );
                    },
                  }),
                  !1
                );
              }
              let { from: l, to: p } =
                  "number" === typeof t
                    ? { from: t, to: t }
                    : { from: t.from, to: t.to },
                u = !0,
                h = !0;
              if (
                (("type" in s ? [s] : s).forEach((t) => {
                  t.check(),
                    (u = !!u && t.isText && 0 === t.marks.length),
                    (h = !!h && t.isBlock);
                }),
                l === p && h)
              ) {
                const { parent: t } = r.doc.resolve(l);
                t.isTextblock &&
                  !t.type.spec.code &&
                  !t.childCount &&
                  ((l -= 1), (p += 1));
              }
              let m;
              u
                ? ((m = Array.isArray(e)
                    ? e.map((t) => t.text || "").join("")
                    : "object" === typeof e && e && e.text
                    ? e.text
                    : e),
                  r.insertText(m, l, p))
                : ((m = s), r.replaceWith(l, p, m)),
                n.updateSelection &&
                  (function (t, e, n) {
                    const r = t.steps.length - 1;
                    if (r < e) return;
                    const s = t.steps[r];
                    if (!(s instanceof a.Pu || s instanceof a.FC)) return;
                    const i = t.mapping.maps[r];
                    let c = 0;
                    i.forEach((t, e, n, o) => {
                      0 === c && (c = o);
                    }),
                      t.setSelection(o.Y1.near(t.doc.resolve(c), n));
                  })(r, r.steps.length - 1, -1),
                n.applyInputRules &&
                  r.setMeta("applyInputRules", { from: l, text: m }),
                n.applyPasteRules &&
                  r.setMeta("applyPasteRules", { from: l, text: m });
            }
            return !0;
          },
        joinBackward:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.al)(t, e),
        joinDown:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.Ig)(t, e),
        joinForward:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.Y_)(t, e),
        joinItemBackward:
          () =>
          ({ state: t, dispatch: e, tr: n }) => {
            try {
              const o = (0, a.GJ)(t.doc, t.selection.$from.pos, -1);
              return (
                null !== o && void 0 !== o && (n.join(o, 2), e && e(n), !0)
              );
            } catch (o) {
              return !1;
            }
          },
        joinItemForward:
          () =>
          ({ state: t, dispatch: e, tr: n }) => {
            try {
              const o = (0, a.GJ)(t.doc, t.selection.$from.pos, 1);
              return (
                null !== o && void 0 !== o && (n.join(o, 2), e && e(n), !0)
              );
            } catch (o) {
              return !1;
            }
          },
        joinTextblockBackward:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.rr)(t, e),
        joinTextblockForward:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.cR)(t, e),
        joinUp:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.MI)(t, e),
        keyboardShortcut:
          (t) =>
          ({ editor: e, view: n, tr: o, dispatch: r }) => {
            const s = (function (t) {
                const e = t.split(/-(?!$)/);
                let n,
                  o,
                  r,
                  s,
                  i = e[e.length - 1];
                "Space" === i && (i = " ");
                for (let a = 0; a < e.length - 1; a += 1) {
                  const t = e[a];
                  if (/^(cmd|meta|m)$/i.test(t)) s = !0;
                  else if (/^a(lt)?$/i.test(t)) n = !0;
                  else if (/^(c|ctrl|control)$/i.test(t)) o = !0;
                  else if (/^s(hift)?$/i.test(t)) r = !0;
                  else {
                    if (!/^mod$/i.test(t))
                      throw new Error(`Unrecognized modifier name: ${t}`);
                    U() || X() ? (s = !0) : (o = !0);
                  }
                }
                return (
                  n && (i = `Alt-${i}`),
                  o && (i = `Ctrl-${i}`),
                  s && (i = `Meta-${i}`),
                  r && (i = `Shift-${i}`),
                  i
                );
              })(t).split(/-(?!$)/),
              i = s.find((t) => !["Alt", "Ctrl", "Meta", "Shift"].includes(t)),
              a = new KeyboardEvent("keydown", {
                key: "Space" === i ? " " : i,
                altKey: s.includes("Alt"),
                ctrlKey: s.includes("Ctrl"),
                metaKey: s.includes("Meta"),
                shiftKey: s.includes("Shift"),
                bubbles: !0,
                cancelable: !0,
              }),
              c = e.captureTransaction(() => {
                n.someProp("handleKeyDown", (t) => t(n, a));
              });
            return (
              null === c ||
                void 0 === c ||
                c.steps.forEach((t) => {
                  const e = t.map(o.mapping);
                  e && r && o.maybeStep(e);
                }),
              !0
            );
          },
        lift:
          (t, e = {}) =>
          ({ state: n, dispatch: o }) =>
            !!Q(n, f(t, n.schema), e) && (0, c.xb)(n, o),
        liftEmptyBlock:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.X0)(t, e),
        liftListItem:
          (t) =>
          ({ state: e, dispatch: n }) => {
            const o = f(t, e.schema);
            return (0, d.IB)(o)(e, n);
          },
        newlineInCode:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.QK)(t, e),
        resetAttributes:
          (t, e) =>
          ({ tr: n, state: o, dispatch: r }) => {
            let s = null,
              i = null;
            const a = Z("string" === typeof t ? t : t.name, o.schema);
            return (
              !!a &&
              ("node" === a && (s = f(t, o.schema)),
              "mark" === a && (i = V(t, o.schema)),
              r &&
                n.selection.ranges.forEach((t) => {
                  o.doc.nodesBetween(t.$from.pos, t.$to.pos, (t, o) => {
                    s &&
                      s === t.type &&
                      n.setNodeMarkup(o, void 0, tt(t.attrs, e)),
                      i &&
                        t.marks.length &&
                        t.marks.forEach((r) => {
                          i === r.type &&
                            n.addMark(
                              o,
                              o + t.nodeSize,
                              i.create(tt(r.attrs, e))
                            );
                        });
                  });
                }),
              !0)
            );
          },
        scrollIntoView:
          () =>
          ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0),
        selectAll:
          () =>
          ({ tr: t, commands: e }) =>
            e.setTextSelection({ from: 0, to: t.doc.content.size }),
        selectNodeBackward:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c._M)(t, e),
        selectNodeForward:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.o)(t, e),
        selectParentNode:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.N0)(t, e),
        selectTextblockEnd:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.nw)(t, e),
        selectTextblockStart:
          () =>
          ({ state: t, dispatch: e }) =>
            (0, c.U9)(t, e),
        setContent:
          (t, e = !1, n = {}, o = {}) =>
          ({ editor: r, tr: s, dispatch: i, commands: a }) => {
            var c, d;
            const { doc: l } = s;
            if ("full" !== n.preserveWhitespace) {
              const a = et(t, r.schema, n, {
                errorOnInvalidContent:
                  null !== (c = o.errorOnInvalidContent) && void 0 !== c
                    ? c
                    : r.options.enableContentCheck,
              });
              return (
                i &&
                  s
                    .replaceWith(0, l.content.size, a)
                    .setMeta("preventUpdate", !e),
                !0
              );
            }
            return (
              i && s.setMeta("preventUpdate", !e),
              a.insertContentAt({ from: 0, to: l.content.size }, t, {
                parseOptions: n,
                errorOnInvalidContent:
                  null !== (d = o.errorOnInvalidContent) && void 0 !== d
                    ? d
                    : r.options.enableContentCheck,
              })
            );
          },
        setMark:
          (t, e = {}) =>
          ({ tr: n, state: o, dispatch: r }) => {
            const { selection: s } = n,
              { empty: i, ranges: a } = s,
              c = V(t, o.schema);
            if (r)
              if (i) {
                const t = nt(o, c);
                n.addStoredMark(c.create({ ...t, ...e }));
              } else
                a.forEach((t) => {
                  const r = t.$from.pos,
                    s = t.$to.pos;
                  o.doc.nodesBetween(r, s, (t, o) => {
                    const i = Math.max(o, r),
                      a = Math.min(o + t.nodeSize, s);
                    t.marks.find((t) => t.type === c)
                      ? t.marks.forEach((t) => {
                          c === t.type &&
                            n.addMark(i, a, c.create({ ...t.attrs, ...e }));
                        })
                      : n.addMark(i, a, c.create(e));
                  });
                });
            return (function (t, e, n) {
              var o;
              const { selection: r } = e;
              let s = null;
              if ((K(r) && (s = r.$cursor), s)) {
                const e =
                  null !== (o = t.storedMarks) && void 0 !== o ? o : s.marks();
                return !!n.isInSet(e) || !e.some((t) => t.type.excludes(n));
              }
              const { ranges: i } = r;
              return i.some(({ $from: e, $to: o }) => {
                let r =
                  0 === e.depth &&
                  t.doc.inlineContent &&
                  t.doc.type.allowsMarkType(n);
                return (
                  t.doc.nodesBetween(e.pos, o.pos, (t, e, o) => {
                    if (r) return !1;
                    if (t.isInline) {
                      const e = !o || o.type.allowsMarkType(n),
                        s =
                          !!n.isInSet(t.marks) ||
                          !t.marks.some((t) => t.type.excludes(n));
                      r = e && s;
                    }
                    return !r;
                  }),
                  r
                );
              });
            })(o, n, c);
          },
        setMeta:
          (t, e) =>
          ({ tr: n }) => (n.setMeta(t, e), !0),
        setNode:
          (t, e = {}) =>
          ({ state: n, dispatch: o, chain: r }) => {
            const s = f(t, n.schema);
            return s.isTextblock
              ? r()
                  .command(
                    ({ commands: t }) => !!(0, c.uJ)(s, e)(n) || t.clearNodes()
                  )
                  .command(({ state: t }) => (0, c.uJ)(s, e)(t, o))
                  .run()
              : (console.warn(
                  '[tiptap warn]: Currently "setNode()" only supports text block nodes.'
                ),
                !1);
          },
        setNodeSelection:
          (t) =>
          ({ tr: e, dispatch: n }) => {
            if (n) {
              const { doc: n } = e,
                r = W(t, 0, n.content.size),
                s = o.qv.create(n, r);
              e.setSelection(s);
            }
            return !0;
          },
        setTextSelection:
          (t) =>
          ({ tr: e, dispatch: n }) => {
            if (n) {
              const { doc: n } = e,
                { from: r, to: s } =
                  "number" === typeof t ? { from: t, to: t } : t,
                i = o.Bs.atStart(n).from,
                a = o.Bs.atEnd(n).to,
                c = W(r, i, a),
                d = W(s, i, a),
                l = o.Bs.create(n, c, d);
              e.setSelection(l);
            }
            return !0;
          },
        sinkListItem:
          (t) =>
          ({ state: e, dispatch: n }) => {
            const o = f(t, e.schema);
            return (0, d.bw)(o)(e, n);
          },
        splitBlock:
          ({ keepMarks: t = !0 } = {}) =>
          ({ tr: e, state: n, dispatch: r, editor: s }) => {
            const { selection: i, doc: c } = e,
              { $from: d, $to: l } = i,
              p = mt(
                s.extensionManager.attributes,
                d.node().type.name,
                d.node().attrs
              );
            if (i instanceof o.qv && i.node.isBlock)
              return (
                !(!d.parentOffset || !(0, a.Ax)(c, d.pos)) &&
                (r &&
                  (t && kt(n, s.extensionManager.splittableMarks),
                  e.split(d.pos).scrollIntoView()),
                !0)
              );
            if (!d.parent.isBlock) return !1;
            const u = l.parentOffset === l.parent.content.size,
              h =
                0 === d.depth
                  ? void 0
                  : (function (t) {
                      for (let e = 0; e < t.edgeCount; e += 1) {
                        const { type: n } = t.edge(e);
                        if (n.isTextblock && !n.hasRequiredAttrs()) return n;
                      }
                      return null;
                    })(d.node(-1).contentMatchAt(d.indexAfter(-1)));
            let m = u && h ? [{ type: h, attrs: p }] : void 0,
              f = (0, a.Ax)(e.doc, e.mapping.map(d.pos), 1, m);
            if (
              (m ||
                f ||
                !(0, a.Ax)(
                  e.doc,
                  e.mapping.map(d.pos),
                  1,
                  h ? [{ type: h }] : void 0
                ) ||
                ((f = !0), (m = h ? [{ type: h, attrs: p }] : void 0)),
              r)
            ) {
              if (
                f &&
                (i instanceof o.Bs && e.deleteSelection(),
                e.split(e.mapping.map(d.pos), 1, m),
                h && !u && !d.parentOffset && d.parent.type !== h)
              ) {
                const t = e.mapping.map(d.before()),
                  n = e.doc.resolve(t);
                d.node(-1).canReplaceWith(n.index(), n.index() + 1, h) &&
                  e.setNodeMarkup(e.mapping.map(d.before()), h);
              }
              t && kt(n, s.extensionManager.splittableMarks),
                e.scrollIntoView();
            }
            return f;
          },
        splitListItem:
          (t, e = {}) =>
          ({ tr: n, state: r, dispatch: s, editor: c }) => {
            var d;
            const l = f(t, r.schema),
              { $from: p, $to: u } = r.selection,
              h = r.selection.node;
            if ((h && h.isBlock) || p.depth < 2 || !p.sameParent(u)) return !1;
            const m = p.node(-1);
            if (m.type !== l) return !1;
            const g = c.extensionManager.attributes;
            if (
              0 === p.parent.content.size &&
              p.node(-1).childCount === p.indexAfter(-1)
            ) {
              if (
                2 === p.depth ||
                p.node(-3).type !== l ||
                p.index(-2) !== p.node(-2).childCount - 1
              )
                return !1;
              if (s) {
                let t = i.HY.empty;
                const r = p.index(-1) ? 1 : p.index(-2) ? 2 : 3;
                for (let e = p.depth - r; e >= p.depth - 3; e -= 1)
                  t = i.HY.from(p.node(e).copy(t));
                const s =
                    p.indexAfter(-1) < p.node(-2).childCount
                      ? 1
                      : p.indexAfter(-2) < p.node(-3).childCount
                      ? 2
                      : 3,
                  a = { ...mt(g, p.node().type.name, p.node().attrs), ...e },
                  c =
                    (null === (d = l.contentMatch.defaultType) || void 0 === d
                      ? void 0
                      : d.createAndFill(a)) || void 0;
                t = t.append(i.HY.from(l.createAndFill(null, c) || void 0));
                const u = p.before(p.depth - (r - 1));
                n.replace(u, p.after(-s), new i.p2(t, 4 - r, 0));
                let h = -1;
                n.doc.nodesBetween(u, n.doc.content.size, (t, e) => {
                  if (h > -1) return !1;
                  t.isTextblock && 0 === t.content.size && (h = e + 1);
                }),
                  h > -1 && n.setSelection(o.Bs.near(n.doc.resolve(h))),
                  n.scrollIntoView();
              }
              return !0;
            }
            const v =
                u.pos === p.end() ? m.contentMatchAt(0).defaultType : null,
              y = { ...mt(g, m.type.name, m.attrs), ...e },
              b = { ...mt(g, p.node().type.name, p.node().attrs), ...e };
            n.delete(p.pos, u.pos);
            const k = v
              ? [
                  { type: l, attrs: y },
                  { type: v, attrs: b },
                ]
              : [{ type: l, attrs: y }];
            if (!(0, a.Ax)(n.doc, p.pos, 2)) return !1;
            if (s) {
              const { selection: t, storedMarks: e } = r,
                { splittableMarks: o } = c.extensionManager,
                i = e || (t.$to.parentOffset && t.$from.marks());
              if ((n.split(p.pos, 2, k).scrollIntoView(), !i || !s)) return !0;
              const a = i.filter((t) => o.includes(t.type.name));
              n.ensureMarks(a);
            }
            return !0;
          },
        toggleList:
          (t, e, n, o = {}) =>
          ({
            editor: r,
            tr: s,
            state: i,
            dispatch: a,
            chain: c,
            commands: d,
            can: l,
          }) => {
            const { extensions: p, splittableMarks: u } = r.extensionManager,
              h = f(t, i.schema),
              m = f(e, i.schema),
              { selection: g, storedMarks: v } = i,
              { $from: y, $to: b } = g,
              k = y.blockRange(b),
              w = v || (g.$to.parentOffset && g.$from.marks());
            if (!k) return !1;
            const x = at((t) => gt(t.type.name, p))(g);
            if (k.depth >= 1 && x && k.depth - x.depth <= 1) {
              if (x.node.type === h) return d.liftListItem(m);
              if (
                gt(x.node.type.name, p) &&
                h.validContent(x.node.content) &&
                a
              )
                return c()
                  .command(() => (s.setNodeMarkup(x.pos, h), !0))
                  .command(() => wt(s, h))
                  .command(() => xt(s, h))
                  .run();
            }
            return n && w && a
              ? c()
                  .command(() => {
                    const t = l().wrapInList(h, o),
                      e = w.filter((t) => u.includes(t.type.name));
                    return s.ensureMarks(e), !!t || d.clearNodes();
                  })
                  .wrapInList(h, o)
                  .command(() => wt(s, h))
                  .command(() => xt(s, h))
                  .run()
              : c()
                  .command(() => !!l().wrapInList(h, o) || d.clearNodes())
                  .wrapInList(h, o)
                  .command(() => wt(s, h))
                  .command(() => xt(s, h))
                  .run();
          },
        toggleMark:
          (t, e = {}, n = {}) =>
          ({ state: o, commands: r }) => {
            const { extendEmptyMarkRange: s = !1 } = n,
              i = V(t, o.schema);
            return ft(o, i, e)
              ? r.unsetMark(i, { extendEmptyMarkRange: s })
              : r.setMark(i, e);
          },
        toggleNode:
          (t, e, n = {}) =>
          ({ state: o, commands: r }) => {
            const s = f(t, o.schema),
              i = f(e, o.schema),
              a = Q(o, s, n);
            let c;
            return (
              o.selection.$anchor.sameParent(o.selection.$head) &&
                (c = o.selection.$anchor.parent.attrs),
              a ? r.setNode(i, c) : r.setNode(s, { ...c, ...n })
            );
          },
        toggleWrap:
          (t, e = {}) =>
          ({ state: n, commands: o }) => {
            const r = f(t, n.schema);
            return Q(n, r, e) ? o.lift(r) : o.wrapIn(r, e);
          },
        undoInputRule:
          () =>
          ({ state: t, dispatch: e }) => {
            const n = t.plugins;
            for (let o = 0; o < n.length; o += 1) {
              const r = n[o];
              let s;
              if (r.spec.isInputRules && (s = r.getState(t))) {
                if (e) {
                  const e = t.tr,
                    n = s.transform;
                  for (let t = n.steps.length - 1; t >= 0; t -= 1)
                    e.step(n.steps[t].invert(n.docs[t]));
                  if (s.text) {
                    const n = e.doc.resolve(s.from).marks();
                    e.replaceWith(s.from, s.to, t.schema.text(s.text, n));
                  } else e.delete(s.from, s.to);
                }
                return !0;
              }
            }
            return !1;
          },
        unsetAllMarks:
          () =>
          ({ tr: t, dispatch: e }) => {
            const { selection: n } = t,
              { empty: o, ranges: r } = n;
            return (
              o ||
                (e &&
                  r.forEach((e) => {
                    t.removeMark(e.$from.pos, e.$to.pos);
                  })),
              !0
            );
          },
        unsetMark:
          (t, e = {}) =>
          ({ tr: n, state: o, dispatch: r }) => {
            var s;
            const { extendEmptyMarkRange: i = !1 } = e,
              { selection: a } = n,
              c = V(t, o.schema),
              { $from: d, empty: l, ranges: p } = a;
            if (!r) return !0;
            if (l && i) {
              let { from: t, to: e } = a;
              const o =
                  null === (s = d.marks().find((t) => t.type === c)) ||
                  void 0 === s
                    ? void 0
                    : s.attrs,
                r = _(d, c, o);
              r && ((t = r.from), (e = r.to)), n.removeMark(t, e, c);
            } else
              p.forEach((t) => {
                n.removeMark(t.$from.pos, t.$to.pos, c);
              });
            return n.removeStoredMark(c), !0;
          },
        updateAttributes:
          (t, e = {}) =>
          ({ tr: n, state: o, dispatch: r }) => {
            let s = null,
              i = null;
            const a = Z("string" === typeof t ? t : t.name, o.schema);
            return (
              !!a &&
              ("node" === a && (s = f(t, o.schema)),
              "mark" === a && (i = V(t, o.schema)),
              r &&
                n.selection.ranges.forEach((t) => {
                  const r = t.$from.pos,
                    a = t.$to.pos;
                  o.doc.nodesBetween(r, a, (t, o) => {
                    s &&
                      s === t.type &&
                      n.setNodeMarkup(o, void 0, { ...t.attrs, ...e }),
                      i &&
                        t.marks.length &&
                        t.marks.forEach((s) => {
                          if (i === s.type) {
                            const c = Math.max(o, r),
                              d = Math.min(o + t.nodeSize, a);
                            n.addMark(c, d, i.create({ ...s.attrs, ...e }));
                          }
                        });
                  });
                }),
              !0)
            );
          },
        wrapIn:
          (t, e = {}) =>
          ({ state: n, dispatch: o }) => {
            const r = f(t, n.schema);
            return (0, c.ym)(r, e)(n, o);
          },
        wrapInList:
          (t, e = {}) =>
          ({ state: n, dispatch: o }) => {
            const r = f(t, n.schema);
            return (0, d.KI)(r, e)(n, o);
          },
      });
      const Et = B.create({ name: "commands", addCommands: () => ({ ...Mt }) }),
        Ot = B.create({
          name: "editable",
          addProseMirrorPlugins() {
            return [
              new o.Sy({
                key: new o.H$("editable"),
                props: { editable: () => this.editor.options.editable },
              }),
            ];
          },
        }),
        St = B.create({
          name: "focusEvents",
          addProseMirrorPlugins() {
            const { editor: t } = this;
            return [
              new o.Sy({
                key: new o.H$("focusEvents"),
                props: {
                  handleDOMEvents: {
                    focus: (e, n) => {
                      t.isFocused = !0;
                      const o = t.state.tr
                        .setMeta("focus", { event: n })
                        .setMeta("addToHistory", !1);
                      return e.dispatch(o), !1;
                    },
                    blur: (e, n) => {
                      t.isFocused = !1;
                      const o = t.state.tr
                        .setMeta("blur", { event: n })
                        .setMeta("addToHistory", !1);
                      return e.dispatch(o), !1;
                    },
                  },
                },
              }),
            ];
          },
        }),
        Ct = B.create({
          name: "keymap",
          addKeyboardShortcuts() {
            const t = () =>
                this.editor.commands.first(({ commands: t }) => [
                  () => t.undoInputRule(),
                  () =>
                    t.command(({ tr: e }) => {
                      const { selection: n, doc: r } = e,
                        { empty: s, $anchor: i } = n,
                        { pos: a, parent: c } = i,
                        d =
                          i.parent.isTextblock && a > 0
                            ? e.doc.resolve(a - 1)
                            : i,
                        l = d.parent.type.spec.isolating,
                        p = i.pos - i.parentOffset,
                        u =
                          l && 1 === d.parent.childCount
                            ? p === i.pos
                            : o.Y1.atStart(r).from === a;
                      return (
                        !(
                          !s ||
                          !c.type.isTextblock ||
                          c.textContent.length ||
                          !u ||
                          (u && "paragraph" === i.parent.type.name)
                        ) && t.clearNodes()
                      );
                    }),
                  () => t.deleteSelection(),
                  () => t.joinBackward(),
                  () => t.selectNodeBackward(),
                ]),
              e = () =>
                this.editor.commands.first(({ commands: t }) => [
                  () => t.deleteSelection(),
                  () => t.deleteCurrentNode(),
                  () => t.joinForward(),
                  () => t.selectNodeForward(),
                ]),
              n = {
                Enter: () =>
                  this.editor.commands.first(({ commands: t }) => [
                    () => t.newlineInCode(),
                    () => t.createParagraphNear(),
                    () => t.liftEmptyBlock(),
                    () => t.splitBlock(),
                  ]),
                "Mod-Enter": () => this.editor.commands.exitCode(),
                Backspace: t,
                "Mod-Backspace": t,
                "Shift-Backspace": t,
                Delete: e,
                "Mod-Delete": e,
                "Mod-a": () => this.editor.commands.selectAll(),
              },
              r = { ...n },
              s = {
                ...n,
                "Ctrl-h": t,
                "Alt-Backspace": t,
                "Ctrl-d": e,
                "Ctrl-Alt-Backspace": e,
                "Alt-Delete": e,
                "Alt-d": e,
                "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                "Ctrl-e": () => this.editor.commands.selectTextblockEnd(),
              };
            return U() || X() ? s : r;
          },
          addProseMirrorPlugins() {
            return [
              new o.Sy({
                key: new o.H$("clearDocument"),
                appendTransaction: (t, e, n) => {
                  const r = t.some((t) => t.docChanged) && !e.doc.eq(n.doc),
                    s = t.some((t) => t.getMeta("preventClearDocument"));
                  if (!r || s) return;
                  const { empty: i, from: a, to: c } = e.selection,
                    d = o.Y1.atStart(e.doc).from,
                    u = o.Y1.atEnd(e.doc).to;
                  if (i || !(a === d && c === u)) return;
                  if (!vt(n.doc)) return;
                  const h = n.tr,
                    m = l({ state: n, transaction: h }),
                    { commands: f } = new p({ editor: this.editor, state: m });
                  return f.clearNodes(), h.steps.length ? h : void 0;
                },
              }),
            ];
          },
        }),
        Tt = B.create({
          name: "tabindex",
          addProseMirrorPlugins() {
            return [
              new o.Sy({
                key: new o.H$("tabindex"),
                props: {
                  attributes: () =>
                    this.editor.isEditable ? { tabindex: "0" } : {},
                },
              }),
            ];
          },
        });
      var Pt = Object.freeze({
        __proto__: null,
        ClipboardTextSerializer: z,
        Commands: Et,
        Editable: Ot,
        FocusEvents: St,
        Keymap: Ct,
        Tabindex: Tt,
      });
      class At {
        get name() {
          return this.node.type.name;
        }
        constructor(t, e, n = !1, o = null) {
          (this.currentNode = null),
            (this.actualDepth = null),
            (this.isBlock = n),
            (this.resolvedPos = t),
            (this.editor = e),
            (this.currentNode = o);
        }
        get node() {
          return this.currentNode || this.resolvedPos.node();
        }
        get element() {
          return this.editor.view.domAtPos(this.pos).node;
        }
        get depth() {
          var t;
          return null !== (t = this.actualDepth) && void 0 !== t
            ? t
            : this.resolvedPos.depth;
        }
        get pos() {
          return this.resolvedPos.pos;
        }
        get content() {
          return this.node.content;
        }
        set content(t) {
          let e = this.from,
            n = this.to;
          if (this.isBlock) {
            if (0 === this.content.size)
              return void console.error(
                `You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`
              );
            (e = this.from + 1), (n = this.to - 1);
          }
          this.editor.commands.insertContentAt({ from: e, to: n }, t);
        }
        get attributes() {
          return this.node.attrs;
        }
        get textContent() {
          return this.node.textContent;
        }
        get size() {
          return this.node.nodeSize;
        }
        get from() {
          return this.isBlock
            ? this.pos
            : this.resolvedPos.start(this.resolvedPos.depth);
        }
        get range() {
          return { from: this.from, to: this.to };
        }
        get to() {
          return this.isBlock
            ? this.pos + this.size
            : this.resolvedPos.end(this.resolvedPos.depth) +
                (this.node.isText ? 0 : 1);
        }
        get parent() {
          if (0 === this.depth) return null;
          const t = this.resolvedPos.start(this.resolvedPos.depth - 1),
            e = this.resolvedPos.doc.resolve(t);
          return new At(e, this.editor);
        }
        get before() {
          let t = this.resolvedPos.doc.resolve(
            this.from - (this.isBlock ? 1 : 2)
          );
          return (
            t.depth !== this.depth &&
              (t = this.resolvedPos.doc.resolve(this.from - 3)),
            new At(t, this.editor)
          );
        }
        get after() {
          let t = this.resolvedPos.doc.resolve(
            this.to + (this.isBlock ? 2 : 1)
          );
          return (
            t.depth !== this.depth &&
              (t = this.resolvedPos.doc.resolve(this.to + 3)),
            new At(t, this.editor)
          );
        }
        get children() {
          const t = [];
          return (
            this.node.content.forEach((e, n) => {
              const o = e.isBlock && !e.isTextblock,
                r = this.pos + n + 1,
                s = this.resolvedPos.doc.resolve(r);
              if (!o && s.depth <= this.depth) return;
              const i = new At(s, this.editor, o, o ? e : null);
              o && (i.actualDepth = this.depth + 1),
                t.push(new At(s, this.editor, o, o ? e : null));
            }),
            t
          );
        }
        get firstChild() {
          return this.children[0] || null;
        }
        get lastChild() {
          const t = this.children;
          return t[t.length - 1] || null;
        }
        closest(t, e = {}) {
          let n = null,
            o = this.parent;
          for (; o && !n; ) {
            if (o.node.type.name === t)
              if (Object.keys(e).length > 0) {
                const t = o.node.attrs,
                  n = Object.keys(e);
                for (let o = 0; o < n.length; o += 1) {
                  const r = n[o];
                  if (t[r] !== e[r]) break;
                }
              } else n = o;
            o = o.parent;
          }
          return n;
        }
        querySelector(t, e = {}) {
          return this.querySelectorAll(t, e, !0)[0] || null;
        }
        querySelectorAll(t, e = {}, n = !1) {
          let o = [];
          if (!this.children || 0 === this.children.length) return o;
          const r = Object.keys(e);
          return (
            this.children.forEach((s) => {
              if (!(n && o.length > 0)) {
                if (s.node.type.name === t) {
                  r.every((t) => e[t] === s.node.attrs[t]) && o.push(s);
                }
                (n && o.length > 0) ||
                  (o = o.concat(s.querySelectorAll(t, e, n)));
              }
            }),
            o
          );
        }
        setAttribute(t) {
          const e = this.editor.state.selection;
          this.editor
            .chain()
            .setTextSelection(this.from)
            .updateAttributes(this.node.type.name, t)
            .setTextSelection(e.from)
            .run();
        }
      }
      class $t extends class {
        constructor() {
          this.callbacks = {};
        }
        on(t, e) {
          return (
            this.callbacks[t] || (this.callbacks[t] = []),
            this.callbacks[t].push(e),
            this
          );
        }
        emit(t, ...e) {
          const n = this.callbacks[t];
          return n && n.forEach((t) => t.apply(this, e)), this;
        }
        off(t, e) {
          const n = this.callbacks[t];
          return (
            n &&
              (e
                ? (this.callbacks[t] = n.filter((t) => t !== e))
                : delete this.callbacks[t]),
            this
          );
        }
        removeAllListeners() {
          this.callbacks = {};
        }
      } {
        constructor(t = {}) {
          var e, n;
          super(),
            (this.isFocused = !1),
            (this.isInitialized = !1),
            (this.extensionStorage = {}),
            (this.options = {
              element: document.createElement("div"),
              content: "",
              injectCSS: !0,
              injectNonce: void 0,
              extensions: [],
              autofocus: !1,
              editable: !0,
              editorProps: {},
              parseOptions: {},
              coreExtensionOptions: {},
              enableInputRules: !0,
              enablePasteRules: !0,
              enableCoreExtensions: !0,
              enableContentCheck: !1,
              onBeforeCreate: () => null,
              onCreate: () => null,
              onUpdate: () => null,
              onSelectionUpdate: () => null,
              onTransaction: () => null,
              onFocus: () => null,
              onBlur: () => null,
              onDestroy: () => null,
              onContentError: ({ error: t }) => {
                throw t;
              },
              onPaste: () => null,
              onDrop: () => null,
            }),
            (this.isCapturingTransaction = !1),
            (this.capturedTransaction = null),
            this.setOptions(t),
            this.createExtensionManager(),
            this.createCommandManager(),
            this.createSchema(),
            this.on("beforeCreate", this.options.onBeforeCreate),
            this.emit("beforeCreate", { editor: this }),
            this.on("contentError", this.options.onContentError),
            this.createView(),
            this.injectCSS(),
            this.on("create", this.options.onCreate),
            this.on("update", this.options.onUpdate),
            this.on("selectionUpdate", this.options.onSelectionUpdate),
            this.on("transaction", this.options.onTransaction),
            this.on("focus", this.options.onFocus),
            this.on("blur", this.options.onBlur),
            this.on("destroy", this.options.onDestroy),
            this.options.onPaste &&
              this.registerPlugin(
                ((e = this.options.onPaste),
                new o.Sy({
                  key: new o.H$("tiptapPaste"),
                  props: {
                    handlePaste: (t, n, o) => {
                      e(n, o);
                    },
                  },
                }))
              ),
            this.options.onDrop &&
              this.registerPlugin(
                ((n = this.options.onDrop),
                new o.Sy({
                  key: new o.H$("tiptapDrop"),
                  props: {
                    handleDrop: (t, e, o, r) => {
                      n(e, o, r);
                    },
                  },
                }))
              ),
            window.setTimeout(() => {
              this.isDestroyed ||
                (this.commands.focus(this.options.autofocus),
                this.emit("create", { editor: this }),
                (this.isInitialized = !0));
            }, 0);
        }
        get storage() {
          return this.extensionStorage;
        }
        get commands() {
          return this.commandManager.commands;
        }
        chain() {
          return this.commandManager.chain();
        }
        can() {
          return this.commandManager.can();
        }
        injectCSS() {
          this.options.injectCSS &&
            document &&
            (this.css = (function (t, e, n) {
              const o = document.querySelector(
                `style[data-tiptap-style${n ? `-${n}` : ""}]`
              );
              if (null !== o) return o;
              const r = document.createElement("style");
              return (
                e && r.setAttribute("nonce", e),
                r.setAttribute("data-tiptap-style" + (n ? `-${n}` : ""), ""),
                (r.innerHTML = t),
                document.getElementsByTagName("head")[0].appendChild(r),
                r
              );
            })(
              '.ProseMirror {\n  position: relative;\n}\n\n.ProseMirror {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  white-space: break-spaces;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  font-feature-settings: "liga" 0; /* the above doesn\'t seem to work in Edge */\n}\n\n.ProseMirror [contenteditable="false"] {\n  white-space: normal;\n}\n\n.ProseMirror [contenteditable="false"] [contenteditable="true"] {\n  white-space: pre-wrap;\n}\n\n.ProseMirror pre {\n  white-space: pre-wrap;\n}\n\nimg.ProseMirror-separator {\n  display: inline !important;\n  border: none !important;\n  margin: 0 !important;\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  margin: 0;\n}\n\n.ProseMirror-gapcursor:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-hideselection *::selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection *::-moz-selection {\n  background: transparent;\n}\n\n.ProseMirror-hideselection * {\n  caret-color: transparent;\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n\n.tippy-box[data-animation=fade][data-state=hidden] {\n  opacity: 0\n}',
              this.options.injectNonce
            ));
        }
        setOptions(t = {}) {
          (this.options = { ...this.options, ...t }),
            this.view &&
              this.state &&
              !this.isDestroyed &&
              (this.options.editorProps &&
                this.view.setProps(this.options.editorProps),
              this.view.updateState(this.state));
        }
        setEditable(t, e = !0) {
          this.setOptions({ editable: t }),
            e &&
              this.emit("update", { editor: this, transaction: this.state.tr });
        }
        get isEditable() {
          return this.options.editable && this.view && this.view.editable;
        }
        get state() {
          return this.view.state;
        }
        registerPlugin(t, e) {
          const n = y(e)
              ? e(t, [...this.state.plugins])
              : [...this.state.plugins, t],
            o = this.state.reconfigure({ plugins: n });
          this.view.updateState(o);
        }
        unregisterPlugin(t) {
          if (this.isDestroyed) return;
          const e = "string" === typeof t ? `${t}$` : t.key,
            n = this.state.reconfigure({
              plugins: this.state.plugins.filter((t) => !t.key.startsWith(e)),
            });
          this.view.updateState(n);
        }
        createExtensionManager() {
          var t, e;
          const n = [
            ...(this.options.enableCoreExtensions
              ? [
                  Ot,
                  z.configure({
                    blockSeparator:
                      null ===
                        (e =
                          null === (t = this.options.coreExtensionOptions) ||
                          void 0 === t
                            ? void 0
                            : t.clipboardTextSerializer) || void 0 === e
                        ? void 0
                        : e.blockSeparator,
                  }),
                  Et,
                  St,
                  Ct,
                  Tt,
                ].filter(
                  (t) =>
                    "object" !== typeof this.options.enableCoreExtensions ||
                    !1 !== this.options.enableCoreExtensions[t.name]
                )
              : []),
            ...this.options.extensions,
          ].filter((t) =>
            ["extension", "node", "mark"].includes(
              null === t || void 0 === t ? void 0 : t.type
            )
          );
          this.extensionManager = new N(n, this);
        }
        createCommandManager() {
          this.commandManager = new p({ editor: this });
        }
        createSchema() {
          this.schema = this.extensionManager.schema;
        }
        createView() {
          let t;
          try {
            t = et(
              this.options.content,
              this.schema,
              this.options.parseOptions,
              { errorOnInvalidContent: this.options.enableContentCheck }
            );
          } catch (s) {
            if (
              !(s instanceof Error) ||
              ![
                "[tiptap error]: Invalid JSON content",
                "[tiptap error]: Invalid HTML content",
              ].includes(s.message)
            )
              throw s;
            this.emit("contentError", {
              editor: this,
              error: s,
              disableCollaboration: () => {
                (this.options.extensions = this.options.extensions.filter(
                  (t) => "collaboration" !== t.name
                )),
                  this.createExtensionManager();
              },
            }),
              (t = et(
                this.options.content,
                this.schema,
                this.options.parseOptions,
                { errorOnInvalidContent: !1 }
              ));
          }
          const e = q(t, this.options.autofocus);
          this.view = new r.tk(this.options.element, {
            ...this.options.editorProps,
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: o.yy.create({ doc: t, selection: e || void 0 }),
          });
          const n = this.state.reconfigure({
            plugins: this.extensionManager.plugins,
          });
          this.view.updateState(n), this.createNodeViews(), this.prependClass();
          this.view.dom.editor = this;
        }
        createNodeViews() {
          this.view.isDestroyed ||
            this.view.setProps({ nodeViews: this.extensionManager.nodeViews });
        }
        prependClass() {
          this.view.dom.className = `tiptap ${this.view.dom.className}`;
        }
        captureTransaction(t) {
          (this.isCapturingTransaction = !0),
            t(),
            (this.isCapturingTransaction = !1);
          const e = this.capturedTransaction;
          return (this.capturedTransaction = null), e;
        }
        dispatchTransaction(t) {
          if (this.view.isDestroyed) return;
          if (this.isCapturingTransaction)
            return this.capturedTransaction
              ? void t.steps.forEach((t) => {
                  var e;
                  return null === (e = this.capturedTransaction) || void 0 === e
                    ? void 0
                    : e.step(t);
                })
              : void (this.capturedTransaction = t);
          const e = this.state.apply(t),
            n = !this.state.selection.eq(e.selection);
          this.emit("beforeTransaction", {
            editor: this,
            transaction: t,
            nextState: e,
          }),
            this.view.updateState(e),
            this.emit("transaction", { editor: this, transaction: t }),
            n && this.emit("selectionUpdate", { editor: this, transaction: t });
          const o = t.getMeta("focus"),
            r = t.getMeta("blur");
          o &&
            this.emit("focus", {
              editor: this,
              event: o.event,
              transaction: t,
            }),
            r &&
              this.emit("blur", {
                editor: this,
                event: r.event,
                transaction: t,
              }),
            t.docChanged &&
              !t.getMeta("preventUpdate") &&
              this.emit("update", { editor: this, transaction: t });
        }
        getAttributes(t) {
          return lt(this.state, t);
        }
        isActive(t, e) {
          const n = "string" === typeof t ? t : null,
            o = "string" === typeof t ? e : t;
          return (function (t, e, n = {}) {
            if (!e) return Q(t, null, n) || ft(t, null, n);
            const o = Z(e, t.schema);
            return "node" === o ? Q(t, e, n) : "mark" === o && ft(t, e, n);
          })(this.state, n, o);
        }
        getJSON() {
          return this.state.doc.toJSON();
        }
        getHTML() {
          return ct(this.state.doc.content, this.schema);
        }
        getText(t) {
          const { blockSeparator: e = "\n\n", textSerializers: n = {} } =
            t || {};
          return dt(this.state.doc, {
            blockSeparator: e,
            textSerializers: { ...R(this.schema), ...n },
          });
        }
        get isEmpty() {
          return vt(this.state.doc);
        }
        getCharacterCount() {
          return (
            console.warn(
              '[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'
            ),
            this.state.doc.content.size - 2
          );
        }
        destroy() {
          this.emit("destroy"),
            this.view && this.view.destroy(),
            this.removeAllListeners();
        }
        get isDestroyed() {
          var t;
          return !(null === (t = this.view) || void 0 === t
            ? void 0
            : t.docView);
        }
        $node(t, e) {
          var n;
          return (
            (null === (n = this.$doc) || void 0 === n
              ? void 0
              : n.querySelector(t, e)) || null
          );
        }
        $nodes(t, e) {
          var n;
          return (
            (null === (n = this.$doc) || void 0 === n
              ? void 0
              : n.querySelectorAll(t, e)) || null
          );
        }
        $pos(t) {
          const e = this.state.doc.resolve(t);
          return new At(e, this);
        }
        get $doc() {
          return this.$pos(0);
        }
      }
      function Nt(t) {
        return new S({
          find: t.find,
          handler: ({ state: e, range: n, match: o }) => {
            const r = b(t.getAttributes, void 0, o);
            if (!1 === r || null === r) return null;
            const { tr: s } = e,
              i = o[o.length - 1],
              a = o[0];
            if (i) {
              const o = a.search(/\S/),
                c = n.from + a.indexOf(i),
                d = c + i.length;
              if (
                ht(n.from, n.to, e.doc)
                  .filter((e) =>
                    e.mark.type.excluded.find(
                      (n) => n === t.type && n !== e.mark.type
                    )
                  )
                  .filter((t) => t.to > c).length
              )
                return null;
              d < n.to && s.delete(d, n.to),
                c > n.from && s.delete(n.from + o, c);
              const l = n.from + o + i.length;
              s.addMark(n.from + o, l, t.type.create(r || {})),
                s.removeStoredMark(t.type);
            }
          },
        });
      }
      function It(t) {
        return new S({
          find: t.find,
          handler: ({ state: e, range: n, match: o }) => {
            const r = b(t.getAttributes, void 0, o) || {},
              { tr: s } = e,
              i = n.from;
            let a = n.to;
            const c = t.type.create(r);
            if (o[1]) {
              let t = i + o[0].lastIndexOf(o[1]);
              t > a ? (t = a) : (a = t + o[1].length);
              const e = o[0][o[0].length - 1];
              s.insertText(e, i + o[0].length - 1), s.replaceWith(t, a, c);
            } else if (o[0]) {
              const e = t.type.isInline ? i : i - 1;
              s.insert(e, t.type.create(r)).delete(
                s.mapping.map(i),
                s.mapping.map(a)
              );
            }
            s.scrollIntoView();
          },
        });
      }
      function jt(t) {
        return new S({
          find: t.find,
          handler: ({ state: e, range: n, match: o }) => {
            const r = e.doc.resolve(n.from),
              s = b(t.getAttributes, void 0, o) || {};
            if (
              !r.node(-1).canReplaceWith(r.index(-1), r.indexAfter(-1), t.type)
            )
              return null;
            e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, s);
          },
        });
      }
      function Bt(t) {
        return new S({
          find: t.find,
          handler: ({ state: e, range: n, match: o, chain: r }) => {
            const s = b(t.getAttributes, void 0, o) || {},
              i = e.tr.delete(n.from, n.to),
              c = i.doc.resolve(n.from).blockRange(),
              d = c && (0, a.nd)(c, t.type, s);
            if (!d) return null;
            if ((i.wrap(c, d), t.keepMarks && t.editor)) {
              const { selection: n, storedMarks: o } = e,
                { splittableMarks: r } = t.editor.extensionManager,
                s = o || (n.$to.parentOffset && n.$from.marks());
              if (s) {
                const t = s.filter((t) => r.includes(t.type.name));
                i.ensureMarks(t);
              }
            }
            if (t.keepAttributes) {
              const e =
                "bulletList" === t.type.name || "orderedList" === t.type.name
                  ? "listItem"
                  : "taskList";
              r().updateAttributes(e, s).run();
            }
            const l = i.doc.resolve(n.from - 1).nodeBefore;
            l &&
              l.type === t.type &&
              (0, a.Mn)(i.doc, n.from - 1) &&
              (!t.joinPredicate || t.joinPredicate(o, l)) &&
              i.join(n.from - 1);
          },
        });
      }
      class Dt {
        constructor(t = {}) {
          (this.type = "mark"),
            (this.name = "mark"),
            (this.parent = null),
            (this.child = null),
            (this.config = { name: this.name, defaultOptions: {} }),
            (this.config = { ...this.config, ...t }),
            (this.name = this.config.name),
            t.defaultOptions &&
              Object.keys(t.defaultOptions).length > 0 &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`
              ),
            (this.options = this.config.defaultOptions),
            this.config.addOptions &&
              (this.options = b(u(this, "addOptions", { name: this.name }))),
            (this.storage =
              b(
                u(this, "addStorage", {
                  name: this.name,
                  options: this.options,
                })
              ) || {});
        }
        static create(t = {}) {
          return new Dt(t);
        }
        configure(t = {}) {
          const e = this.extend({
            ...this.config,
            addOptions: () => j(this.options, t),
          });
          return (e.name = this.name), (e.parent = this.parent), e;
        }
        extend(t = {}) {
          const e = new Dt(t);
          return (
            (e.parent = this),
            (this.child = e),
            (e.name = t.name ? t.name : e.parent.name),
            t.defaultOptions &&
              Object.keys(t.defaultOptions).length > 0 &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`
              ),
            (e.options = b(u(e, "addOptions", { name: e.name }))),
            (e.storage = b(
              u(e, "addStorage", { name: e.name, options: e.options })
            )),
            e
          );
        }
        static handleExit({ editor: t, mark: e }) {
          const { tr: n } = t.state,
            o = t.state.selection.$from;
          if (o.pos === o.end()) {
            const r = o.marks();
            if (
              !!!r.find(
                (t) =>
                  (null === t || void 0 === t ? void 0 : t.type.name) === e.name
              )
            )
              return !1;
            const s = r.find(
              (t) =>
                (null === t || void 0 === t ? void 0 : t.type.name) === e.name
            );
            return (
              s && n.removeStoredMark(s),
              n.insertText(" ", o.pos),
              t.view.dispatch(n),
              !0
            );
          }
          return !1;
        }
      }
      class Rt {
        constructor(t = {}) {
          (this.type = "node"),
            (this.name = "node"),
            (this.parent = null),
            (this.child = null),
            (this.config = { name: this.name, defaultOptions: {} }),
            (this.config = { ...this.config, ...t }),
            (this.name = this.config.name),
            t.defaultOptions &&
              Object.keys(t.defaultOptions).length > 0 &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`
              ),
            (this.options = this.config.defaultOptions),
            this.config.addOptions &&
              (this.options = b(u(this, "addOptions", { name: this.name }))),
            (this.storage =
              b(
                u(this, "addStorage", {
                  name: this.name,
                  options: this.options,
                })
              ) || {});
        }
        static create(t = {}) {
          return new Rt(t);
        }
        configure(t = {}) {
          const e = this.extend({
            ...this.config,
            addOptions: () => j(this.options, t),
          });
          return (e.name = this.name), (e.parent = this.parent), e;
        }
        extend(t = {}) {
          const e = new Rt(t);
          return (
            (e.parent = this),
            (this.child = e),
            (e.name = t.name ? t.name : e.parent.name),
            t.defaultOptions &&
              Object.keys(t.defaultOptions).length > 0 &&
              console.warn(
                `[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${e.name}".`
              ),
            (e.options = b(u(e, "addOptions", { name: e.name }))),
            (e.storage = b(
              u(e, "addStorage", { name: e.name, options: e.options })
            )),
            e
          );
        }
      }
      class zt {
        constructor(t, e, n) {
          (this.isDragging = !1),
            (this.component = t),
            (this.editor = e.editor),
            (this.options = { stopEvent: null, ignoreMutation: null, ...n }),
            (this.extension = e.extension),
            (this.node = e.node),
            (this.decorations = e.decorations),
            (this.innerDecorations = e.innerDecorations),
            (this.view = e.view),
            (this.HTMLAttributes = e.HTMLAttributes),
            (this.getPos = e.getPos),
            this.mount();
        }
        mount() {}
        get dom() {
          return this.editor.view.dom;
        }
        get contentDOM() {
          return null;
        }
        onDragStart(t) {
          var e, n, r, s, i, a, c;
          const { view: d } = this.editor,
            l = t.target,
            p =
              3 === l.nodeType
                ? null === (e = l.parentElement) || void 0 === e
                  ? void 0
                  : e.closest("[data-drag-handle]")
                : l.closest("[data-drag-handle]");
          if (
            !this.dom ||
            (null === (n = this.contentDOM) || void 0 === n
              ? void 0
              : n.contains(l)) ||
            !p
          )
            return;
          let u = 0,
            h = 0;
          if (this.dom !== p) {
            const e = this.dom.getBoundingClientRect(),
              n = p.getBoundingClientRect(),
              o =
                null !== (r = t.offsetX) && void 0 !== r
                  ? r
                  : null === (s = t.nativeEvent) || void 0 === s
                  ? void 0
                  : s.offsetX,
              c =
                null !== (i = t.offsetY) && void 0 !== i
                  ? i
                  : null === (a = t.nativeEvent) || void 0 === a
                  ? void 0
                  : a.offsetY;
            (u = n.x - e.x + o), (h = n.y - e.y + c);
          }
          null === (c = t.dataTransfer) ||
            void 0 === c ||
            c.setDragImage(this.dom, u, h);
          const m = this.getPos();
          if ("number" !== typeof m) return;
          const f = o.qv.create(d.state.doc, m),
            g = d.state.tr.setSelection(f);
          d.dispatch(g);
        }
        stopEvent(t) {
          var e;
          if (!this.dom) return !1;
          if ("function" === typeof this.options.stopEvent)
            return this.options.stopEvent({ event: t });
          const n = t.target;
          if (
            !(
              this.dom.contains(n) &&
              !(null === (e = this.contentDOM) || void 0 === e
                ? void 0
                : e.contains(n))
            )
          )
            return !1;
          const r = t.type.startsWith("drag"),
            s = "drop" === t.type;
          if (
            (["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) ||
              n.isContentEditable) &&
            !s &&
            !r
          )
            return !0;
          const { isEditable: i } = this.editor,
            { isDragging: a } = this,
            c = !!this.node.type.spec.draggable,
            d = o.qv.isSelectable(this.node),
            l = "copy" === t.type,
            p = "paste" === t.type,
            u = "cut" === t.type,
            h = "mousedown" === t.type;
          if ((!c && d && r && t.preventDefault(), c && r && !a))
            return t.preventDefault(), !1;
          if (c && i && !a && h) {
            const t = n.closest("[data-drag-handle]");
            t &&
              (this.dom === t || this.dom.contains(t)) &&
              ((this.isDragging = !0),
              document.addEventListener(
                "dragend",
                () => {
                  this.isDragging = !1;
                },
                { once: !0 }
              ),
              document.addEventListener(
                "drop",
                () => {
                  this.isDragging = !1;
                },
                { once: !0 }
              ),
              document.addEventListener(
                "mouseup",
                () => {
                  this.isDragging = !1;
                },
                { once: !0 }
              ));
          }
          return !(a || s || l || p || u || (h && d));
        }
        ignoreMutation(t) {
          if (!this.dom || !this.contentDOM) return !0;
          if ("function" === typeof this.options.ignoreMutation)
            return this.options.ignoreMutation({ mutation: t });
          if (this.node.isLeaf || this.node.isAtom) return !0;
          if ("selection" === t.type) return !1;
          if (
            this.dom.contains(t.target) &&
            "childList" === t.type &&
            (U() ||
              "Android" === navigator.platform ||
              /android/i.test(navigator.userAgent)) &&
            this.editor.isFocused
          ) {
            if (
              [
                ...Array.from(t.addedNodes),
                ...Array.from(t.removedNodes),
              ].every((t) => t.isContentEditable)
            )
              return !1;
          }
          return (
            (this.contentDOM === t.target && "attributes" === t.type) ||
            !this.contentDOM.contains(t.target)
          );
        }
        updateAttributes(t) {
          this.editor.commands.command(({ tr: e }) => {
            const n = this.getPos();
            return (
              "number" === typeof n &&
              (e.setNodeMarkup(n, void 0, { ...this.node.attrs, ...t }), !0)
            );
          });
        }
        deleteNode() {
          const t = this.getPos();
          if ("number" !== typeof t) return;
          const e = t + this.node.nodeSize;
          this.editor.commands.deleteRange({ from: t, to: e });
        }
      }
      function Lt(t) {
        return new P({
          find: t.find,
          handler: ({ state: e, range: n, match: o, pasteEvent: r }) => {
            const s = b(t.getAttributes, void 0, o, r);
            if (!1 === s || null === s) return null;
            const { tr: i } = e,
              a = o[o.length - 1],
              c = o[0];
            let d = n.to;
            if (a) {
              const o = c.search(/\S/),
                r = n.from + c.indexOf(a),
                l = r + a.length;
              if (
                ht(n.from, n.to, e.doc)
                  .filter((e) =>
                    e.mark.type.excluded.find(
                      (n) => n === t.type && n !== e.mark.type
                    )
                  )
                  .filter((t) => t.to > r).length
              )
                return null;
              l < n.to && i.delete(l, n.to),
                r > n.from && i.delete(n.from + o, r),
                (d = n.from + o + a.length),
                i.addMark(n.from + o, d, t.type.create(s || {})),
                i.removeStoredMark(t.type);
            }
          },
        });
      }
      function Ht(t) {
        return t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
    },
  },
]);
