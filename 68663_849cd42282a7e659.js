"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [68663],
  {
    229759: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return y;
        },
        W: function () {
          return j;
        },
      });
      var o = s(824246),
        i = s(679892),
        n = s.n(i),
        r = s(298784),
        l = s.n(r),
        c = s(827378),
        a = s(50682),
        d = s.n(a),
        h = s(524306),
        u = s.n(h),
        p = s(792739);
      function x(e, t, s) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(s);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(s).filter(function (e) {
                return Object.getOwnPropertyDescriptor(s, e).enumerable;
              })
            )),
            o.forEach(function (t) {
              x(e, t, s[t]);
            });
        }
        return e;
      }
      class g extends c.Component {
        render() {
          const [e, t] = this.state.relativeMousePos,
            s = this.ref.current
              ? this.ref.current.getBoundingClientRect()
              : {},
            i = l().get(s, "width", 0),
            r = l().get(s, "height", 0);
          return (0, o.jsxs)("div", {
            style: f({}, this.props.containerStyle),
            onMouseMove: this.onMouseMove,
            onMouseLeave: this.onMouseLeave,
            onMouseEnter: this.onMouseEnter,
            ref: this.ref,
            className: "jsx-801e0b339c739146 image-parent",
            children: [
              (0, o.jsx)("img", {
                style: this.props.imageStyle,
                src: this.props.src,
                onClick: () => {
                  this.props.clickImageToOpenInNewTab &&
                    window.open(this.props.src, "_blank");
                },
                className:
                  "jsx-801e0b339c739146 " +
                  ((this.props.clickImageToOpenInNewTab ? "clickable" : "") ||
                    ""),
              }),
              this.state.hovered &&
                (0, o.jsx)("div", {
                  style: {
                    width: "100%",
                    height: "100%",
                    top: `${t}px`,
                    left: `${e}px`,
                  },
                  className: "jsx-801e0b339c739146 image-hover-parent",
                  children: (0, o.jsx)("div", {
                    style: {
                      backgroundPosition: `${(i / 2) * 1 - e}px ${
                        (r / 2) * 1 - t
                      }px`,
                      backgroundImage: `url(${this.props.src})`,
                      backgroundSize: `${i}px ${r}px`,
                    },
                    className: "jsx-801e0b339c739146 image-hover-child",
                  }),
                }),
              (0, o.jsx)(n(), {
                id: "801e0b339c739146",
                children:
                  ".image-parent.jsx-801e0b339c739146{position:relative;overflow:hidden;margin:8px 0}.image-hover-parent.jsx-801e0b339c739146{position:absolute;background:transparent;z-index:100;-webkit-transform:translate(-50%,-50%)scale(2);-moz-transform:translate(-50%,-50%)scale(2);-ms-transform:translate(-50%,-50%)scale(2);-o-transform:translate(-50%,-50%)scale(2);transform:translate(-50%,-50%)scale(2);overflow:hidden;pointer-events:none}.image-hover-child.jsx-801e0b339c739146{background-repeat:no-repeat;width:100%;height:100%}img.clickable.jsx-801e0b339c739146{cursor:pointer}",
              }),
            ],
          });
        }
        constructor(e) {
          super(e),
            (this.ref = c.createRef()),
            (this.getRelativeMousePos = (e) => {
              if (!this.ref.current) return e;
              const t = this.ref.current.getBoundingClientRect();
              return [e[0] - t.left, e[1] - t.top];
            }),
            (this.onMouseMove = (e) => {
              this.setState({
                relativeMousePos: this.getRelativeMousePos([e.pageX, e.pageY]),
              });
            }),
            (this.onMouseEnter = (e) => {
              this.setState({
                relativeMousePos: this.getRelativeMousePos([e.pageX, e.pageY]),
                hovered: !0,
              });
            }),
            (this.onMouseLeave = () => {
              this.setState({ hovered: !1 });
            }),
            (this.state = { relativeMousePos: [0, 0], hovered: !1 });
        }
      }
      g.defaultProps = {
        imageStyle: {},
        containerStyle: {},
        clickImageToOpenInNewTab: !0,
      };
      var m = s(883617),
        b = s(848941);
      function j(e) {
        if (e.global || !e.labels) return "Common Instructions";
        const t = e.labels.map((e) => l().startCase(e.replace(/_/g, " ")));
        return (
          t.slice(0, -2).join(", ") +
          (t.slice(0, -2).length ? ", " : "") +
          t.slice(-2).join(" and ")
        );
      }
      class v extends c.Component {
        renderExamples() {
          const e = this.props.instructionItem.examples || [];
          return (0, o.jsxs)("div", {
            className: "jsx-593bae46eadbe1ac",
            children: [
              l().map(e, (e) =>
                (0, o.jsxs)("div", {
                  className: "jsx-593bae46eadbe1ac",
                  children: [
                    (0, o.jsx)("div", {
                      className: "jsx-593bae46eadbe1ac example-description",
                      children: (0, o.jsx)(m.Z, { text: e.description || "" }),
                    }),
                    (0, o.jsxs)("div", {
                      className: "jsx-593bae46eadbe1ac example__images",
                      children: [
                        (0, o.jsx)("div", {
                          className:
                            "jsx-593bae46eadbe1ac correct__col example__col",
                          children:
                            !l().isEmpty(e.correct) &&
                            (0, o.jsxs)("div", {
                              className: "jsx-593bae46eadbe1ac",
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "jsx-593bae46eadbe1ac",
                                  children: "Correct",
                                }),
                                l().map(e.correct, (e) =>
                                  (0, o.jsx)(
                                    g,
                                    {
                                      src: e,
                                      imageStyle: {
                                        border: "solid #19b629 2px",
                                      },
                                    },
                                    e
                                  )
                                ),
                              ],
                            }),
                        }),
                        (0, o.jsx)("div", {
                          className:
                            "jsx-593bae46eadbe1ac incorrect__col example__col",
                          children:
                            !l().isEmpty(e.incorrect) &&
                            (0, o.jsxs)("div", {
                              className: "jsx-593bae46eadbe1ac",
                              children: [
                                (0, o.jsx)("h3", {
                                  className: "jsx-593bae46eadbe1ac",
                                  children: "Incorrect",
                                }),
                                l().map(e.incorrect, (e) =>
                                  (0, o.jsx)(
                                    g,
                                    {
                                      src: e,
                                      imageStyle: {
                                        border: "solid #ec322f 2px",
                                      },
                                    },
                                    e
                                  )
                                ),
                              ],
                            }),
                        }),
                      ],
                    }),
                  ],
                })
              ),
              (0, o.jsx)(n(), {
                id: "593bae46eadbe1ac",
                children:
                  ".example-description.jsx-593bae46eadbe1ac{margin-left:16px}.example__images.jsx-593bae46eadbe1ac{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.example__col.jsx-593bae46eadbe1ac{margin:5px;margin-left:auto;margin-right:auto;padding:0 20px;-webkit-flex:1;-ms-flex:1;flex:1}.correct__col.jsx-593bae46eadbe1ac h3.jsx-593bae46eadbe1ac{color:#19b629}.correct__col.jsx-593bae46eadbe1ac img.jsx-593bae46eadbe1ac{border:solid#19b629 2px}.incorrect__col.jsx-593bae46eadbe1ac h3.jsx-593bae46eadbe1ac{color:#ec322f}.incorrect__col.jsx-593bae46eadbe1ac img.jsx-593bae46eadbe1ac{border:solid#ec322f 2px}img.jsx-593bae46eadbe1ac{margin-bottom:20px;margin-left:auto;margin-right:auto;max-width:30vw;width:100%;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}h3.jsx-593bae46eadbe1ac{text-align:center}",
              }),
            ],
          });
        }
        copyId() {
          this.setState({ copyMessage: "Successfully copied ID!" }, () => {
            (0, b.$)(),
              setTimeout(() => {
                this.setState({ copyMessage: void 0 }), (0, b.$)();
              }, 2e3);
          });
        }
        renderCopyButton() {
          const e = this.props.instructionItem._id;
          return this.props.showInstructionItemIdOnHover
            ? (0, o.jsx)(u(), {
                text: e,
                onCopy: this.copyId.bind(this),
                children: (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)(
                      "div",
                      {
                        className: "copy-icon",
                        "data-tip":
                          this.state.copyMessage ||
                          "Copy Instruction Item ID to Clipboard",
                        "data-for": `annotation-list-actions-${e}`,
                        children: (0, o.jsx)(p.G, { icon: "copy" }),
                      },
                      this.state.copyMessage ? "copy" : "default"
                    ),
                    (0, o.jsx)(d(), {
                      id: `annotation-list-actions-${e}`,
                      ref: this.tooltipRef,
                    }),
                    (0, o.jsx)("textarea", { ref: this.textareaRef, value: e }),
                  ],
                }),
              })
            : null;
        }
        render() {
          return (0, o.jsxs)("div", {
            className: "instruction-item",
            children: [
              this.renderCopyButton(),
              (0, o.jsxs)("div", {
                style: { display: "flex" },
                children: [
                  (0, o.jsx)("div", {
                    style: { flex: 1 },
                    children: (0, o.jsx)(m.Z, {
                      text: this.props.instructionItem.text || "",
                    }),
                  }),
                  l().get(this.props.instructionItem, "examples", []).length >
                    0 &&
                    (0, o.jsx)("div", {
                      style: { flex: 1 },
                      children: this.renderExamples(),
                    }),
                ],
              }),
              this.props.showInstructionItemIdOnHover &&
                (0, o.jsx)(n(), {
                  id: "2302f4abadd5b7c4",
                  children:
                    ".instruction-item.jsx-2302f4abadd5b7c4{position:relative;-webkit-transition:.125s all;-moz-transition:.125s all;-o-transition:.125s all;transition:.125s all;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;padding-bottom:2px}.copy-icon.jsx-2302f4abadd5b7c4{position:absolute;right:8px;top:8px;visibility:hidden;-webkit-transition:.125s all;-moz-transition:.125s all;-o-transition:.125s all;transition:.125s all;cursor:pointer}.copy-icon.jsx-2302f4abadd5b7c4:hover{-webkit-transform:scale(1.05)rotate(2deg);-moz-transform:scale(1.05)rotate(2deg);-ms-transform:scale(1.05)rotate(2deg);-o-transform:scale(1.05)rotate(2deg);transform:scale(1.05)rotate(2deg)}.instruction-item.jsx-2302f4abadd5b7c4:hover{background-color:#f0f0f0}.instruction-item.jsx-2302f4abadd5b7c4:hover .copy-icon.jsx-2302f4abadd5b7c4{visibility:visible}.instruction-item.jsx-2302f4abadd5b7c4 textarea.jsx-2302f4abadd5b7c4{opacity:.01;height:0;position:absolute;z-index:-1}",
                }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            (this.textareaRef = c.createRef()),
            (this.tooltipRef = c.createRef()),
            (this.state = { copyMessage: void 0 });
        }
      }
      var y = v;
    },
    75896: function (e, t, s) {
      s.d(t, {
        bq: function () {
          return p;
        },
      });
      var o = s(824246),
        i = s(679892),
        n = s.n(i),
        r = s(298784),
        l = s.n(r),
        c = s(827378),
        a = s(229759),
        d = s(775222),
        h = s(75384);
      function u(e) {
        if (0 === e.length) return [];
        const t = [];
        let s = [];
        return (
          e.forEach((e) => {
            !(function (e, t) {
              return (
                void 0 === e ||
                !(!e.global || !t.global) ||
                (0, a.W)(e) === (0, a.W)(t)
              );
            })(s[0], e)
              ? (t.push(s), (s = [e]))
              : s.push(e);
          }),
          t.push(s),
          t
        );
      }
      function p(e) {
        const t = [...l().get(e, "objects_to_annotate", [])];
        if (l().isEmpty(t)) return () => !0;
        const s = [];
        for (; t.length > 0; ) {
          const e = t.shift();
          l().isString(e)
            ? s.push(e)
            : l().isObject(e) &&
              (l().isString(e.choice) && s.push(e.choice),
              l().isArray(e.subchoices) && t.push(...e.subchoices));
        }
        return (e) => e.global || l().some(e.labels, (e) => s.includes(e));
      }
      class x extends c.Component {
        showInstructionItemIdOnHover() {
          return (
            this.props.showInstructionItemIdOnHover ||
            l().get(this.props.user, "isCorporateUser")
          );
        }
        componentDidMount() {
          this.setState({ loadedAt: new Date() });
        }
        componentWillUnmount() {
          const { loadedAt: e } = this.state;
          if (e && this.props.emitMetrics) {
            const t = +new Date() - +e;
            d.c.track("Loaded Instructions", {
              timeElapsed: t,
              isFullInstructions: this.props.isFullInstructions,
            });
          }
        }
        renderInstructionCluster(e) {
          return 0 === e.length
            ? null
            : (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("h2", { children: (0, a.W)(e[0]) }),
                  e.map((e) =>
                    (0, o.jsx)(
                      a.Z,
                      {
                        instructionItem: e,
                        showInstructionItemIdOnHover:
                          this.showInstructionItemIdOnHover(),
                      },
                      e.name
                    )
                  ),
                ],
              });
        }
        selectSection(e) {
          this.setState({ selectedSection: e });
          const t = document.getElementById(e);
          t && t.scrollIntoView();
        }
        render() {
          let e = this.props.instructionList.instructionSet;
          this.props.filter && (e = e.filter(this.props.filter));
          const [t, s] = l().partition(e, (e) => !0 !== e.global),
            i = u(t),
            r = [s],
            c = this.props.bringGlobalToBottom ? [i, r] : [r, i];
          return (0, o.jsxs)("div", {
            className: "jsx-1535e907546f9bd4 container",
            children: [
              (0, o.jsxs)("div", {
                className: "jsx-1535e907546f9bd4 container",
                children: [
                  (0, o.jsx)("div", {
                    className: "jsx-1535e907546f9bd4 col col-1",
                    children: c.map((e, t) => {
                      const s = 0 === t && c.length > 1;
                      return e.map((e, i) => {
                        const n = `${t}-${i}`,
                          r = ["item-link"];
                        return (
                          this.state.selectedSection === n &&
                            r.push("selected"),
                          s && r.push("important"),
                          0 === e.length
                            ? null
                            : (0, o.jsx)(
                                "div",
                                {
                                  onClick: this.selectSection.bind(this, n),
                                  className:
                                    "jsx-1535e907546f9bd4 " +
                                    (r.join(" ") || ""),
                                  children: (0, a.W)(e[0]),
                                },
                                `${n}-label`
                              )
                        );
                      });
                    }),
                  }),
                  (0, o.jsx)("div", {
                    className: "jsx-1535e907546f9bd4 col col-3",
                    children: c.map((e, t) =>
                      e.map((e, s) => {
                        const i = `${t}-${s}`;
                        return (0, o.jsx)(
                          "div",
                          {
                            id: i,
                            className: "jsx-1535e907546f9bd4",
                            children: this.renderInstructionCluster(e),
                          },
                          `${i}-cluster`
                        );
                      })
                    ),
                  }),
                ],
              }),
              (0, o.jsx)(n(), {
                id: "1535e907546f9bd4",
                children:
                  ".container.jsx-1535e907546f9bd4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:800px;height:100%;max-height:80vh}.col.jsx-1535e907546f9bd4{overflow:scroll}.col-1.jsx-1535e907546f9bd4{-webkit-flex:1;-ms-flex:1;flex:1}.col-3.jsx-1535e907546f9bd4{-webkit-flex:3;-ms-flex:3;flex:3}.item-link.jsx-1535e907546f9bd4{-webkit-transition:.25s all;-moz-transition:.25s all;-o-transition:.25s all;transition:.25s all;cursor:pointer;padding:6px;width:90%}.item-link.jsx-1535e907546f9bd4:not(.selected):hover{background-color:#e0dfe6}div.item-link.selected.jsx-1535e907546f9bd4{background-color:var(--color-RemoGray75);color:#fff}.item-link.important.jsx-1535e907546f9bd4{background-color:#f5f4f9}",
              }),
            ],
          });
        }
        constructor(e) {
          super(e), (this.state = {});
        }
      }
      (x.defaultProps = {
        filter: () => !0,
        bringGlobalToBottom: !1,
        isFullInstructions: !0,
        showInstructionItemIdOnHover: !1,
        emitMetrics: !0,
      }),
        (t.ZP = (0, h.ns)(x));
    },
    948106: function (e, t, s) {
      var o = s(824246),
        i = s(679892),
        n = s.n(i),
        r = s(827378),
        l = s(68649),
        c = s(220453),
        a = s(746332),
        d = s(60042),
        h = s.n(d);
      const u = ({ instructions: e, backgroundColor: t }) => {
        const s = { __html: c.ZP.render(e) },
          i = (0, l.ZL)({
            instructionsContainer: {
              minHeight: "70vh",
              padding: "0 32px",
              display: "flex",
              alignItems: "stretch",
              backgroundColor: t || "#fff",
              [`@media (max-width: ${a.MOBILE_THRESHOLD})`]: { padding: 0 },
            },
          })();
        return (0, o.jsxs)("div", {
          className:
            "jsx-3f6a764f3f72bb08 " + (h()(i.instructionsContainer) || ""),
          children: [
            (0, o.jsx)("div", {
              dangerouslySetInnerHTML: s,
              className: "jsx-3f6a764f3f72bb08 instructions--markdown",
            }),
            (0, o.jsx)(n(), {
              id: "3f6a764f3f72bb08",
              children:
                ".instructions--markdown{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:left;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.instructions--markdown iframe{height:100%!important}.instructions--markdown img{max-width:600px}.instructions--markdown h1{font-weight:700;font-style:normal;font-size:40px;margin-left:-2.5px;line-height:45px;letter-spacing:-.028em}.instructions--markdown h2{font-weight:700;font-style:normal;font-size:36px;margin-left:-2.5px;line-height:38px;letter-spacing:-.028em}.instructions--markdown h3{font-weight:700;font-style:normal;font-size:28px;margin-left:-2.5px;line-height:33px;letter-spacing:-.028em}.instructions--markdown h4{font-weight:700;font-style:normal;font-size:24px;margin-left:-2.5px;line-height:26px;letter-spacing:-.028em}.instructions--markdown h5{font-weight:700;font-style:normal;font-size:18px;margin-left:-2.5px;line-height:22px;letter-spacing:-.028em}.instructions--markdown h6{font-weight:700;font-style:normal;font-size:18px;margin-left:-2.5px;line-height:20px;letter-spacing:-.028em}.instructions--markdown blockquote{background-color:#efefef;margin:0;padding:10px 30px}.instructions--markdown pre{background-color:#efefef;border:1px solid#ccc;padding:10px 40px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.instructions--markdown p{font-weight:400;font-style:normal;font-size:15px;line-height:1.6;letter-spacing:0}",
            }),
          ],
        });
      };
      t.Z = r.memo(u);
    },
    368663: function (e, t, s) {
      s.d(t, {
        d: function () {
          return E;
        },
      });
      var o = s(824246),
        i = s(298784),
        n = s.n(i),
        r = s(827378),
        l = s(550814),
        c = s(948106),
        a = s(802638),
        d = s(893827),
        h = s(75896),
        u = s(336235),
        p = s(746332),
        x = s(431350),
        f = s(679892),
        g = s.n(f),
        m = s(707814),
        b = s(68649),
        j = s(604375),
        v = s(792739),
        y = s(222091),
        w = s.n(y),
        k = s(995632),
        S = s(434515),
        I = s(455045);
      function C(e) {
        return e.reduce(
          (e, { choice: t, display: s, subchoices: o }) => (
            o && o.length > 0
              ? (e[t] = { display: s, subchoices: C(o) })
              : (e[t] = { display: s }),
            e
          ),
          {}
        );
      }
      var O = ({ ontologies: e, open: t, onClose: s }) => {
          const { 0: i, 1: l } = (0, r.useState)({ choice: "" }),
            { 0: c, 1: a } = (0, r.useState)(0),
            { 0: d, 1: h } = (0, r.useState)(1),
            [u, p] = (0, k.Z)(!1),
            x = (0, r.useMemo)(() => {
              const t = C(e[c].ontology),
                s = C(e[d].ontology),
                o = n().merge(t, s);
              return (0, m.transformObjectToOntology)(o);
            }, [e, c, d]),
            { 0: f, 1: g } = (0, r.useMemo)(() => {
              const t = {},
                s = {},
                o = w().diff(C(e[c].ontology), C(e[d].ontology));
              if (!o) return [t, s];
              function i(e, s) {
                for (const o of Object.keys(e))
                  e[o].subchoices && i(e[o].subchoices, s),
                    (t[o] = o in t ? "goldenrod" : s);
              }
              for (const e of o)
                if (e.path)
                  if ("D" === e.kind) {
                    const o = e.lhs.subchoices
                      ? (0, m.countSubchoices)(e.lhs.subchoices) + 1
                      : Object.keys(e.lhs).length;
                    for (const [t, i] of e.path.entries()) {
                      if (t === e.path.length - 1 && !e.lhs.subchoices) break;
                      const n = i + (t / 2 + 1);
                      n in s
                        ? (s[n].deletions += o)
                        : (s[n] = { additions: 0, deletions: o }),
                        t === e.path.length - 1 && (s[n].deletions -= 1);
                    }
                    var r;
                    (
                      null !== (r = e.lhs.display) && void 0 !== r
                        ? r
                        : e.lhs.subchoices
                    )
                      ? ((t[n().last(e.path)] =
                          n().last(e.path) in t ? "goldenrod" : "red"),
                        e.lhs.subchoices && i(e.lhs.subchoices, "red"))
                      : i(e.lhs, "red");
                  } else if ("N" === e.kind) {
                    const o = e.rhs.subchoices
                      ? (0, m.countSubchoices)(e.rhs.subchoices)
                      : Object.keys(e.rhs).length;
                    for (const [t, i] of e.path.entries()) {
                      if (t === e.path.length - 1 && !e.rhs.subchoices) break;
                      const n = i + (t / 2 + 1);
                      n in s
                        ? (s[n].additions += o)
                        : (s[n] = { additions: o, deletions: 0 });
                    }
                    var l;
                    (
                      null !== (l = e.rhs.display) && void 0 !== l
                        ? l
                        : e.rhs.subchoices
                    )
                      ? ((t[n().last(e.path)] =
                          n().last(e.path) in t ? "goldenrod" : "green"),
                        e.rhs.subchoices && i(e.rhs.subchoices, "green"))
                      : i(e.rhs, "green");
                  } else if ("E" === e.kind) {
                    for (const [t, o] of e.path.entries()) {
                      if (t === e.path.length - 2) break;
                      const i = o + (t / 2 + 1);
                      i in s
                        ? ((s[i].additions += 1), (s[i].deletions += 1))
                        : (s[i] = { additions: 1, deletions: 1 });
                    }
                    t[e.path[e.path.length - 2]] = "goldenrod";
                  }
              return [t, s];
            }, [e, c, d]),
            b = (0, r.useMemo)(() => {
              const e = JSON.parse(JSON.stringify(g));
              for (const t of Object.keys(e))
                e[t] && e[t].deletions > 0
                  ? (e[t] = { deletions: e[t].deletions })
                  : delete e[t];
              return e;
            }, [g]),
            y = (0, r.useMemo)(() => {
              const e = JSON.parse(JSON.stringify(g));
              for (const t of Object.keys(e))
                e[t] && e[t].additions > 0
                  ? (e[t] = { additions: e[t].additions })
                  : delete e[t];
              return e;
            }, [g]);
          return 0 === e.length
            ? (0, o.jsx)(j.$j, {})
            : (0, o.jsxs)(j.Vq, {
                open: t,
                onClose: s,
                style: { overflow: "hidden" },
                children: [
                  (0, o.jsx)(j.$N, {
                    children: (0, o.jsxs)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      },
                      children: [
                        (0, o.jsx)("span", {
                          style: { fontSize: 18 },
                          children: "Version Diff",
                        }),
                        (0, o.jsxs)("div", {
                          style: { display: "flex", paddingLeft: 30 },
                          children: [
                            (0, o.jsx)(I.Z, {
                              ontologies: e,
                              selectedOntology: c,
                              setSelectedOntology: a,
                            }),
                            (0, o.jsx)("div", {
                              style: { marginRight: 10 },
                              children: (0, o.jsx)(v.G, {
                                icon: ["far", "arrow-right"],
                                size: "sm",
                              }),
                            }),
                            (0, o.jsx)(I.Z, {
                              ontologies: e,
                              selectedOntology: d,
                              setSelectedOntology: h,
                            }),
                            (0, o.jsx)("div", {
                              onClick: () => p(!1),
                              style: { marginRight: 10, cursor: "pointer" },
                              children: (0, o.jsx)(v.G, {
                                icon: [u ? "far" : "fas", "line-columns"],
                                size: "sm",
                              }),
                            }),
                            (0, o.jsx)("div", {
                              onClick: () => p(!0),
                              style: { cursor: "pointer" },
                              children: (0, o.jsx)(v.G, {
                                icon: [u ? "fas" : "far", "align-justify"],
                                size: "sm",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsx)(j.cZ, {
                    children: (0, o.jsxs)("div", {
                      children: [
                        "Legend:",
                        (0, o.jsx)("span", {
                          style: { marginLeft: "10px", color: "green" },
                          children: "Additions",
                        }),
                        (0, o.jsx)("span", {
                          style: { marginLeft: "10px", color: "red" },
                          children: "Deletions",
                        }),
                        (0, o.jsx)("span", {
                          style: { marginLeft: "10px", color: "goldenrod" },
                          children: "Changes",
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsx)(j.cZ, {
                    style: {
                      display: "flex",
                      maxHeight: "60vh",
                      padding: "0px 0px 0px 10px",
                    },
                    children: u
                      ? (0, o.jsx)(S.Z, {
                          ontologies: [
                            {
                              name: "inline",
                              ontology: x,
                              rawOntology: "",
                              changeList: [],
                            },
                          ],
                          selectedOntology: 0,
                          colorMap: f,
                          changes: g,
                        })
                      : (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(S.Z, {
                              ontologies: e,
                              selectedOntology: c,
                              selectedChoice: i,
                              setSelectedChoice: l,
                              colorMap: f,
                              changes: b,
                            }),
                            (0, o.jsx)(S.Z, {
                              ontologies: e,
                              selectedOntology: d,
                              selectedChoice: i,
                              setSelectedChoice: l,
                              colorMap: f,
                              changes: y,
                            }),
                          ],
                        }),
                  }),
                ],
              });
        },
        N = s(283806),
        M = s(220453);
      const z =
        "https://static.scale.com/uploads/61095caaada54100bb515474/no_examples.png";
      var _ = ({ ontologyHistory: e, priorityLabels: t }) => {
        var s, i, l, c, a;
        const d = L(),
          { 0: h, 1: u } = (0, r.useState)({ choice: "" }),
          { 0: p, 1: x } = (0, r.useState)(0),
          { 0: f, 1: b } = (0, r.useState)(!1),
          v = r.useRef(null),
          y =
            h.description ||
            (h.attachments &&
              (null === (s = h.attachments) || void 0 === s
                ? void 0
                : s.length) > 0),
          w =
            !n().isEmpty(h.scenarios) ||
            !n().isEmpty(h.courses) ||
            !n().isEmpty(h.links);
        return (
          (0, r.useEffect)(() => {
            if ((x(e.length - 1), e.length > 0)) {
              const t = e[e.length - 1];
              (t.ontology = (0, m.sortChoices)(t.ontology)), u(t.ontology[0]);
            }
          }, [e]),
          0 === e.length
            ? (0, o.jsx)(j.$j, {})
            : (0, o.jsxs)("div", {
                ref: v,
                style: { height: "70vh" },
                className: "jsx-74bcf2991f4fce52 " + (d.viewer || ""),
                children: [
                  e.length >= 2 &&
                    (0, o.jsx)(O, {
                      ontologies: e,
                      open: f,
                      onClose: () => b(!1),
                    }),
                  (0, o.jsx)("div", {
                    className: "jsx-74bcf2991f4fce52 " + (d.list || ""),
                    children:
                      e[p] &&
                      (0, o.jsx)(S.Z, {
                        ontologies: e,
                        selectedOntology: p,
                        setSelectedOntology: x,
                        selectedChoice: h,
                        setSelectedChoice: u,
                        priorityLabels: t,
                      }),
                  }),
                  (0, o.jsxs)("div", {
                    className: "jsx-74bcf2991f4fce52 " + (d.information || ""),
                    children: [
                      (0, o.jsxs)("div", {
                        className: "jsx-74bcf2991f4fce52 " + (d.header || ""),
                        children: [
                          (0, o.jsx)("div", {
                            className:
                              "jsx-74bcf2991f4fce52 " + (d.title || ""),
                            children: (0, o.jsx)(j.H2, {
                              children:
                                null !== (k = h.display) && void 0 !== k
                                  ? k
                                  : h.choice,
                            }),
                          }),
                          e.length >= 2 &&
                            (0, o.jsx)("div", {
                              className:
                                "jsx-74bcf2991f4fce52 " + (d.actions || ""),
                              children: (0, o.jsx)(j.zx, {
                                onClick: () => b(!0),
                                type: "primary",
                                children: "Version Diff",
                              }),
                            }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className: "jsx-74bcf2991f4fce52 " + (d.details || ""),
                        children: [
                          y &&
                            (0, o.jsxs)("div", {
                              className:
                                "jsx-74bcf2991f4fce52 " + (d.description || ""),
                              children: [
                                (0, o.jsx)("div", {
                                  dangerouslySetInnerHTML: {
                                    __html: M.ZP.render(h.description || ""),
                                  },
                                  style: { paddingBottom: 10 },
                                  className: "jsx-74bcf2991f4fce52",
                                }),
                                null === (i = h.attachments) || void 0 === i
                                  ? void 0
                                  : i.map((e) =>
                                      (0, o.jsx)(
                                        "img",
                                        {
                                          src: e.url,
                                          className: "jsx-74bcf2991f4fce52",
                                        },
                                        e.url
                                      )
                                    ),
                                h.attachments &&
                                  !h.attachments.length &&
                                  (0, o.jsx)("img", {
                                    src: z,
                                    width: "30%",
                                    className: "jsx-74bcf2991f4fce52",
                                  }),
                              ],
                            }),
                          w &&
                            (0, o.jsxs)("div", {
                              className:
                                "jsx-74bcf2991f4fce52 " + (d.training || ""),
                              children: [
                                !n().isEmpty(h.courses) &&
                                  (0, o.jsx)(j.H3, { children: "Courses" }),
                                null === (l = h.courses) || void 0 === l
                                  ? void 0
                                  : l.map((e) => {
                                      var t;
                                      return (0, o.jsx)(
                                        N.Z,
                                        {
                                          path: `/course?id=${e.id}`,
                                          children:
                                            null !== (t = e.name) &&
                                            void 0 !== t
                                              ? t
                                              : e.id,
                                        },
                                        e.id
                                      );
                                    }),
                                !n().isEmpty(h.scenarios) &&
                                  (0, o.jsx)(j.H3, { children: "Scenarios" }),
                                null === (c = h.scenarios) || void 0 === c
                                  ? void 0
                                  : c.map((e) => {
                                      var t;
                                      return (0, o.jsx)(
                                        N.Z,
                                        {
                                          path: `/training?trainingId=${e.id}`,
                                          children:
                                            null !== (t = e.name) &&
                                            void 0 !== t
                                              ? t
                                              : e.id,
                                        },
                                        e.id
                                      );
                                    }),
                                !n().isEmpty(h.links) &&
                                  (0, o.jsx)(j.H3, { children: "Links" }),
                                null === (a = h.links) || void 0 === a
                                  ? void 0
                                  : a.map((e) =>
                                      (0, o.jsx)(
                                        "a",
                                        {
                                          href: e.url,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className: "jsx-74bcf2991f4fce52",
                                          children: e.url,
                                        },
                                        e.url
                                      )
                                    ),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)(g(), {
                    id: "74bcf2991f4fce52",
                    children: "li,p{line-height:1.2}",
                  }),
                ],
              })
        );
        var k;
      };
      const L = (0, b.ZL)((e) => ({
        viewer: { display: "flex", flexDirection: "row" },
        list: {
          borderRight: `1px solid ${e.colors.gray10}`,
          overflow: "auto",
          width: "50%",
        },
        information: { width: "100%", paddingLeft: 24 },
        header: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        title: { display: "flex", gap: `${e.spacing(1)}px` },
        actions: {
          display: "flex",
          alignItems: "center",
          gap: `${e.spacing(2)}px`,
          flexShrink: 0,
        },
        details: { display: "flex", height: "67vh" },
        description: { paddingRight: 12, overflow: "auto" },
        training: {
          borderLeft: `1px solid ${e.colors.gray10}`,
          display: "flex",
          flexDirection: "column",
          width: "20%",
          paddingLeft: 10,
        },
      }));
      var R;
      !(function (e) {
        (e.Instructions = "instructions"),
          (e.Ontology = "ontology"),
          (e.Guidance = "guidance");
      })(R || (R = {}));
      const E = ({
        assignment: e,
        isOpen: t,
        onClose: s,
        instruction: i,
        project: f,
        specializedInstructions: g,
        instructionList: m,
        instructionObjectId: b,
        taskParams: j,
        instructionsURL: v,
        zIndex: y,
        isReviewMode: w,
        handleOpenNewTab: k,
      }) => {
        var S, I;
        const C = (0, u.Z)(`(max-width: ${p.MOBILE_THRESHOLD})`),
          { 0: O, 1: N } = (0, r.useState)(R.Instructions),
          M = !!(
            (null === j || void 0 === j
              ? void 0
              : j.minilidarSinglePathInstruction) ||
            b ||
            m ||
            (null === (S = null === i || void 0 === i ? void 0 : i.trim()) ||
            void 0 === S
              ? void 0
              : S.length)
          );
        return (0, o.jsxs)(a.u_, {
          isOpen: t,
          onRequestClose: s,
          inset: C ? "0" : void 0,
          borderRadius: C ? "0" : void 0,
          margin: C ? "0" : b ? "1% auto 20px" : void 0,
          contentLabel: "Instructions",
          maxWidth: b ? "1064px" : "auto",
          maxHeight: b ? "97vh" : void 0,
          zIndex: y || 1e3,
          children: [
            (0, o.jsx)(a.xB, {
              onRequestClose: s,
              children: (0, o.jsxs)("div", {
                style: { display: "inline-flex" },
                children: [
                  (0, o.jsxs)("div", {
                    children: [
                      v &&
                        (0, o.jsx)("div", {
                          style: { position: "absolute" },
                          children: (0, o.jsx)(x.zx, {
                            href: v,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            type: "primary",
                            onClick: k,
                            children: "Open in New Tab",
                          }),
                        }),
                      (0, o.jsx)("div", {
                        onClick: () => N(R.Instructions),
                        style: {
                          cursor: "pointer",
                          fontWeight: O === R.Instructions ? 600 : 100,
                        },
                        children: "Instructions",
                      }),
                      g &&
                        (0, o.jsx)(l.Z, {
                          style: { marginTop: "10px" },
                          severity: "info",
                          children: g,
                        }),
                    ],
                  }),
                  (null === e || void 0 === e ? void 0 : e.ontologyHistory) &&
                    (0, o.jsx)("div", {
                      onClick: () => N(R.Ontology),
                      style: {
                        cursor: "pointer",
                        marginLeft: "30vw",
                        fontWeight: O === R.Ontology ? 600 : 100,
                      },
                      children: "Ontology",
                    }),
                  (null === e || void 0 === e
                    ? void 0
                    : e.ontologyInstructions) &&
                    (0, o.jsx)("div", {
                      onClick: () => N(R.Guidance),
                      style: {
                        cursor: "pointer",
                        marginLeft: "30vw",
                        fontWeight: O === R.Guidance ? 600 : 100,
                      },
                      children: "Guidance",
                    }),
                ],
              }),
            }),
            (0, o.jsxs)(a.fe, {
              children: [
                O === R.Instructions && !M && "No instructions available.",
                O === R.Instructions &&
                  M &&
                  ((!!(null === j || void 0 === j
                    ? void 0
                    : j.minilidarSinglePathInstruction) &&
                    (0, o.jsx)(c.Z, {
                      instructions: j.minilidarSinglePathInstruction,
                    })) ||
                    (b &&
                      (0, o.jsx)("div", {
                        style: { width: "1000px !important" },
                        children: (0, o.jsx)(d.Z, {
                          instructionObjectId: b,
                          isEdgeCase: !!(null === j || void 0 === j
                            ? void 0
                            : j.edgeCaseSubtask),
                          isReviewMode: w,
                        }),
                      })) ||
                    (!n().isEmpty(m) &&
                      !m.refreshersOnly &&
                      (0, o.jsx)(h.ZP, {
                        instructionList: m,
                        filter: (0, h.bq)(j),
                      })) ||
                    (i && (0, o.jsx)(c.Z, { instructions: i, project: f }))),
                O === R.Ontology &&
                  (null === e || void 0 === e ? void 0 : e.ontologyHistory) &&
                  (0, o.jsx)(_, {
                    ontologyHistory:
                      null === e || void 0 === e ? void 0 : e.ontologyHistory,
                    priorityLabels:
                      null === e ||
                      void 0 === e ||
                      null === (I = e.config) ||
                      void 0 === I
                        ? void 0
                        : I.priorityLabels,
                  }),
                O === R.Guidance &&
                  (null === e || void 0 === e
                    ? void 0
                    : e.ontologyInstructions) &&
                  (0, o.jsx)(_, {
                    ontologyHistory: [
                      null === e || void 0 === e
                        ? void 0
                        : e.ontologyInstructions,
                    ],
                  }),
              ],
            }),
          ],
        });
      };
    },
    434515: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return b;
        },
      });
      var o = s(824246),
        i = s(792739),
        n = s(707814),
        r = s(827378),
        l = s(287216),
        c = s(604375),
        a = s(138944),
        d = s(68649);
      const h = (0, d.ZL)(() => ({
        collapseButton: {
          cursor: "pointer",
          marginRight: 8,
          width: 16,
          fontSize: "12px",
          textAlign: "center",
          opacity: 0.5,
          "&:hover": { opacity: 1 },
        },
        headerTitle: { fontWeight: 500, width: "100%", alignItems: "center" },
        headerTitleCount: { color: "var(--color-RemoGray50)" },
        additionCount: { color: "green" },
        deletionCount: { color: "red" },
        node: {
          display: "flex",
          padding: "8px 8px",
          alignItems: "center",
          background: "white",
          userSelect: "none",
          cursor: "pointer",
          "&:hover": { background: "var(--color-RemoGray01)" },
          "&.isSelected": { background: "var(--color-RemoGray10)" },
        },
      }));
      var u = ({
          node: e,
          nodeRef: t,
          collapsed: s,
          onToggleCollapsed: n,
          selectedChoice: l,
          setSelectedChoice: c,
          color: d,
          change: u,
          priority: p,
        }) => {
          const x = h(),
            f = (0, r.useMemo)(() => Math.max(e.depth - 1, 0), [e.depth]),
            g = (0, r.useMemo)(
              () => ({ paddingLeft: 8 + 24 * f, color: d }),
              [f, d]
            ),
            m = e.subtreeSize - 1;
          var b;
          return (0, o.jsxs)("div", {
            ref: t,
            className: (0, a.default)(x.node, {
              isSelected: l && l.choice === e.choice,
            }),
            onClick: () => c && c(e),
            style: g,
            children: [
              m > 0
                ? (0, o.jsx)("div", {
                    className: x.collapseButton,
                    onClick: (t) => {
                      t.stopPropagation(), n(e.choice + e.depth);
                    },
                    children: (0, o.jsx)(i.G, {
                      icon: s ? "chevron-right" : "chevron-down",
                    }),
                  })
                : (0, o.jsx)("div", {
                    className: x.collapseButton,
                    style: { opacity: 0 },
                    children: (0, o.jsx)(i.G, {
                      color: "white",
                      icon: "chevron-right",
                    }),
                  }),
              (0, o.jsxs)("div", {
                className: x.headerTitle,
                children: [
                  null !== (b = e.display) && void 0 !== b ? b : e.choice,
                  " ",
                  m > 0 &&
                    (0, o.jsxs)("span", {
                      style: { color: "var(--color-RemoGray50)" },
                      children: ["(", e.subtreeSize - 1, ")"],
                    }),
                  " ",
                  u &&
                    (0, o.jsxs)("span", {
                      style: { color: "black" },
                      children: [
                        "(",
                        (0, o.jsx)("span", {
                          style: { color: "red" },
                          children: u.deletions > 0 && `-${u.deletions}`,
                        }),
                        u.deletions > 0 && u.additions > 0 && " ",
                        (0, o.jsx)("span", {
                          style: { color: "green" },
                          children: u.additions > 0 && `+${u.additions}`,
                        }),
                        ")",
                      ],
                    }),
                  p &&
                    (0, o.jsx)(i.G, {
                      icon: "arrow-up",
                      style: { marginLeft: "auto" },
                      color: "dodgerblue",
                    }),
                ],
              }),
            ],
          });
        },
        p = s(455045),
        x = s(223841);
      const f = (0, d.ZL)({
          rootTitle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginRight: 12,
            fontWeight: 500,
          },
          node: {
            display: "flex",
            padding: "8px 8px",
            alignItems: "center",
            background: "white",
          },
        }),
        g = ({ onSearch: e, searchQuery: t }) => {
          const s = f(),
            i = (0, r.useCallback)(
              (t) => {
                const s = t.target.value;
                e(s);
              },
              [e]
            );
          return (0, o.jsx)("div", {
            className: s.node,
            children: (0, o.jsx)("span", {
              className: s.rootTitle,
              children: (0, o.jsx)(c.oi, {
                onChange: i,
                placeholder: "Search Choices...",
                size: "medium",
                value: t,
                style: { width: "100%" },
              }),
            }),
          });
        };
      var m = r.memo(g);
      var b = ({
        ontologies: e,
        selectedOntology: t,
        setSelectedOntology: s,
        selectedChoice: a,
        setSelectedChoice: d,
        colorMap: h,
        changes: f,
        priorityLabels: g,
      }) => {
        const [b, j] = (0, l.Z)(),
          v = (0, r.useMemo)(() => {
            if (!e || 0 === e.length) return [];
            const t = [];
            for (const s of e)
              (s.ontology = (0, n.sortChoices)(s.ontology)), t.push(s);
            return t;
          }, [e]),
          y = (0, r.useMemo)(
            () => (v && 0 !== v.length ? v[t].ontology : []),
            [v, t]
          ),
          w = (0, r.useMemo)(
            () => y.some((e) => (0, n.isNestedChoice)(e)),
            [y]
          ),
          k = (0, r.useMemo)(() => new Set(g), [g]),
          { 0: S, 1: I } = (0, r.useState)(),
          { 0: C, 1: O } = (0, r.useState)(""),
          { 0: N, 1: M } = (0, r.useState)(new Set()),
          { 0: z, 1: _ } = (0, r.useState)(new Set()),
          L = (0, r.useCallback)(() => {
            I(void 0), O(""), M(new Set()), _(new Set());
          }, []),
          R = (0, r.useCallback)(
            (e) => {
              if (0 === e.length) return void L();
              const {
                node: t,
                matches: s,
                matchesString: o,
              } = (0, n.depthFirstSearchOntology)(
                { choice: "root", subchoices: y },
                e,
                !1
              );
              M(s), _(o), I(t);
            },
            [y]
          );
        (0, r.useEffect)(() => {
          1 === N.size && d && N.forEach((e) => d(e));
        }, [N]),
          (0, x.Z)(
            () => {
              R(C);
            },
            100,
            [C]
          );
        const E = (0, r.useMemo)(
            () => S || { choice: "root", subchoices: y },
            [S, y]
          ),
          Z = () => {
            const e = (0, n.getOntologyPreorderTraversal)({
              choice: "root",
              subchoices: y,
            })
              .filter((e) => e.depth > 0)
              .map((e) => e.choice + e.depth);
            for (const t of e) j.add(t);
          };
        (0, r.useEffect)(() => {
          0 === b.size && Z();
        }, [y]);
        const $ = (0, r.useMemo)(
            () =>
              (0, n.getOntologyPreorderTraversal)(E, b, h).filter(
                ({ choice: e, flagged: t }) => !t && "root" !== e
              ),
            [E, b, h]
          ),
          T = (0, r.useRef)(null),
          { 0: H, 1: P } = (0, r.useState)({}),
          { 0: G, 1: B } = (0, r.useState)("");
        var D;
        (0, r.useEffect)(() => {
          P((e) =>
            $.reduce(
              (t, s) => ((t[s.choice] = e[s.choice] || (0, r.createRef)()), t),
              {}
            )
          );
        }, [$]),
          (0, r.useEffect)(() => {
            if (!a) return;
            const e = (0, n.getIndicesToChoice)(y, a.choice);
            if (0 === e.length) return;
            let t = y,
              s = 0;
            for (; s + 1 < e.length; ) {
              const o = t[e[s]];
              b.has(o.choice + (s + 1)) && j.remove(o.choice + (s + 1)),
                (t = o.subchoices),
                s++;
            }
            B(a.choice);
          }, [a]),
          (0, r.useEffect)(() => {
            var e;
            if (!T.current || !G) return;
            const t = null === (e = H[G]) || void 0 === e ? void 0 : e.current;
            t &&
              (T.current.focus(),
              t.scrollIntoView({ block: "center", behavior: "smooth" }),
              B(""));
          }, [G, H]);
        const W =
          (null !== (D = e[t].name) && void 0 !== D ? D : "").length > 10;
        return (0, o.jsxs)("div", {
          style: { width: "100%", overflowX: "hidden" },
          children: [
            (0, o.jsxs)("div", {
              style: { display: W ? "block" : "flex", padding: s || w ? 8 : 0 },
              children: [
                s &&
                  (0, o.jsx)(p.Z, {
                    ontologies: e,
                    selectedOntology: t,
                    setSelectedOntology: s,
                  }),
                w &&
                  (0, o.jsxs)("div", {
                    style: { display: "flex" },
                    children: [
                      (0, o.jsx)(c.u, {
                        title: "Expand all ontology choices",
                        children: (0, o.jsx)("div", {
                          onClick: j.reset,
                          style: { fontSize: 30 },
                          children: (0, o.jsx)(i.G, {
                            icon: ["far", "plus-square"],
                            style: { cursor: "pointer" },
                            size: "sm",
                          }),
                        }),
                      }),
                      (0, o.jsx)(c.u, {
                        title: "Collapse all ontology choices",
                        children: (0, o.jsx)("div", {
                          onClick: Z,
                          style: { fontSize: 30, paddingLeft: 20 },
                          children: (0, o.jsx)(i.G, {
                            icon: ["far", "minus-square"],
                            style: { cursor: "pointer" },
                            size: "sm",
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            (0, o.jsx)(m, { searchQuery: C, onSearch: O }),
            (0, o.jsx)("div", {
              ref: T,
              children: $.map((e) => {
                var t;
                return (0, o.jsx)(
                  u,
                  {
                    node: e,
                    nodeRef: H[e.choice],
                    collapsed: b.has(e.choice + e.depth),
                    onToggleCollapsed: j.toggle,
                    selectedChoice: a,
                    setSelectedChoice: d,
                    color: h ? e.color : z.has(e.choice) ? "purple" : "black",
                    change: f && f[e.choice + e.depth],
                    priority: k.has(
                      null !== (t = e.display) && void 0 !== t ? t : e.choice
                    ),
                  },
                  e.choice + e.depth + e.color
                );
              }),
            }),
          ],
        });
      };
    },
    455045: function (e, t, s) {
      var o = s(824246),
        i = s(298784),
        n = s.n(i),
        r = (s(827378), s(604375));
      t.Z = ({
        ontologies: e,
        selectedOntology: t,
        setSelectedOntology: s,
      }) => {
        var i, l, c;
        return 1 === e.length
          ? (0, o.jsx)(o.Fragment, {})
          : (0, o.jsx)(r.Ph, {
              onChange: (e) => {
                s(e.target.value);
              },
              value: null !== t && void 0 !== t ? t : e.length - 1,
              placeholder:
                null !==
                  (l =
                    null === (i = n().nth(e, t)) || void 0 === i
                      ? void 0
                      : i.name) && void 0 !== l
                  ? l
                  : `v${t}`,
              style: { marginRight: 10, marginBottom: 10, maxWidth: 400 },
              children: e.map((e, t) =>
                (0, o.jsx)(
                  r.Wx,
                  {
                    value: t,
                    children:
                      null !== (c = e.name) && void 0 !== c ? c : `v${t}`,
                  },
                  t
                )
              ),
            });
      };
    },
    848941: function (e, t, s) {
      s.d(t, {
        $: function () {
          return r;
        },
      });
      var o = s(50682),
        i = s.n(o),
        n = s(298784);
      const r = s
        .n(n)()
        .debounce(() => {
          i().rebuild();
        });
    },
  },
]);
