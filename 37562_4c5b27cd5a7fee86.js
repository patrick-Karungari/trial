"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37562],
  {
    923376: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = e.ANNOTATION_PATH_PUBLIC_PROPERTIES = void 0);
      var o,
        n = (o = r(298784)) && o.__esModule ? o : { default: o };
      const a = ["scene", "numFrames", "props", "version"];
      e.ANNOTATION_PATH_PUBLIC_PROPERTIES = a;
      e.default = class {
        toJSON() {
          return n.default.pick(this, this._publicProperties);
        }
        isStatic(t) {
          return void 0 !== this.props.static[t];
        }
        isPerFrame(t) {
          return void 0 !== this.props.perFrame[t];
        }
        getProp(t, e, r) {
          if (this.isStatic(t)) return this.getStaticProp(t);
          if (this.isPerFrame(t)) return this.getPropAtFrame(t, e, r);
          if (void 0 !== r) return r;
          throw new Error(`Path does not have property: ${t}`);
        }
        getPropAtFrame(t, e, r) {
          if (!this.isPerFrame(t))
            throw new Error(`GPAF property is not per-frame: ${t}`);
          return void 0 === this.props.perFrame[t][e] && void 0 !== r
            ? r
            : this.props.perFrame[t][e];
        }
        getStaticProp(t) {
          if (!this.isStatic(t))
            throw new Error(`GSP property is not static: ${t}`);
          return this.props.static[t];
        }
        getEntireProp(t) {
          return this.isStatic(t)
            ? this.getStaticProp(t)
            : this.isPerFrame(t)
            ? this.props.perFrame[t]
            : void 0;
        }
        setPropAtFrame(t, e, r) {
          if (!this.isPerFrame(t))
            throw new Error(`SPAF property is not per-frame: ${t}`);
          const o = this.props.perFrame[t][e];
          return (this.props.perFrame[t][e] = r), o;
        }
        setStaticProp(t, e) {
          if (!this.isStatic(t))
            throw new Error(`SSP property is not static: ${t}`);
          const r = this.props.static[t];
          return (this.props.static[t] = e), r;
        }
        setEntirePerFrameProp(t, e) {
          if (!this.isPerFrame(t))
            throw new Error(`SEPFP property is not per-frame: ${t}`);
          const r = this.props.perFrame[t];
          return (this.props.perFrame[t] = e), r;
        }
        makeStatic(t, e) {
          let r;
          return (
            this.isPerFrame(t) &&
              ((r = this.props.perFrame[t]), delete this.props.perFrame[t]),
            (this.props.static[t] = e),
            r
          );
        }
        makePerFrame(t, e) {
          let r;
          return (
            this.isStatic(t) &&
              ((r = this.props.static[t]), delete this.props.static[t]),
            (this.props.perFrame[t] = new Array(this.numFrames)),
            this.props.perFrame[t].fill(e),
            r
          );
        }
        deleteAtFrame(t) {
          for (const e of Object.keys(this.props.perFrame))
            delete this.props.perFrame[e][t];
        }
        deleteAllProps() {
          this.props = { static: {}, perFrame: {} };
        }
        setEntireProps(t) {
          this.props = t;
        }
        setNumFrames(t) {
          this.numFrames = t;
        }
        deleteStaticProp(t) {
          delete this.props.static[t];
        }
        deleteEntirePerFrameProp(t) {
          delete this.props.perFrame[t];
        }
        hasProp(t, e) {
          if (e ?? this.isStatic(t)) {
            const e = this.getStaticProp(t);
            return void 0 !== e && null !== e;
          }
          return !!this.isPerFrame(t);
        }
        hasPropAtFrame(t, e) {
          if (!this.isPerFrame(t)) return !1;
          const r = this.getPropAtFrame(t, e);
          return void 0 !== r && null !== r;
        }
        hasStaticProp(t) {
          if (!this.isStatic(t)) return !1;
          const e = this.getStaticProp(t);
          return void 0 !== e && null !== e;
        }
        constructor(t, e = a) {
          n.default.defaults(this, n.default.pick(t, e), {
            version: -1,
            props: { static: {}, perFrame: {} },
          }),
            (this._publicProperties = e);
        }
      };
    },
    914524: function (t, e, r) {
      (e.rm = function ({
        perAnnotationErrors: t,
        nextAnnotations: e,
        previousAnnotations: r,
        baseAnnotations: o,
      }) {
        if (!r) return t;
        let n = t;
        return (
          r.forEach((t) => {
            const r = i.getAnnotationId(t),
              s = e.find((t) => i.getAnnotationId(t) === r),
              u = o?.find((t) => i.getAnnotationId(t) === r);
            s
              ? (n = u
                  ? m({
                      perAnnotationErrors: n,
                      taskAnnotation: u,
                      auditAnnotation: s,
                    })
                  : f({ perAnnotationErrors: n, auditAnnotation: s }))
              : ((n = n.filter(
                  (t) => t.annotationId !== r || "missing" !== t.errorType
                )),
                u &&
                  n.push({
                    annotationId: r,
                    severity: a.ErrorSeverityLevel.Critical,
                    errorType: "extraneous",
                    comment: "",
                    isFixed: !0,
                    taskLabel: u?.label,
                    taskBox: P(u),
                  }));
          }),
          n
        );
      }),
        (e.e0 = f),
        (e.wo = function (t, e, r) {
          const o = t.filter(
              (t) => !(e.has(t.annotationId) && t.frameNum === r)
            ),
            n = t.map((t) => t.annotationId);
          return (
            e.forEach((t) => {
              n.includes(t) ||
                o.push({
                  annotationId: t,
                  severity: a.ErrorSeverityLevel.Critical,
                  errorType: "extraneous",
                  comment: "",
                  isFixed: !0,
                  frameNum: r,
                });
            }),
            o
          );
        }),
        (e.E4 = function (t, e, r, o) {
          if (e.length !== r.length || r.length !== o.length)
            throw new Error(
              "Invalid lengths for audit annotations, task annotations, and frameNums"
            );
          let n = t;
          for (let a = 0; a < o.length; a++)
            n = m({
              perAnnotationErrors: n,
              auditAnnotation: e[a],
              taskAnnotation: r[a],
              frameNum: o[a],
            });
          return n;
        }),
        (e.IG = P),
        (e.VA = function (t, e, r) {
          const o = (function (t, e) {
              if (t === c.TaskType.SegmentAnnotation) {
                const t = s.default.get(e, "labelMapping", {});
                return s.default.flatMap(s.default.values(t), (t) =>
                  s.default.isArray(t)
                    ? s.default.map(t, (t) => p.getLabelId(t.index))
                    : t.numPixels
                    ? [p.getLabelId(t.index)]
                    : []
                );
              }
              if (
                [
                  ...d.twoDSingleFrameTypes,
                  c.TaskType.DocumentTranscription,
                  c.TaskType.DocumentModel,
                ].includes(t)
              ) {
                const t = s.default.get(e, "annotations", []);
                return s.default.map(t, (t) => i.getAnnotationId(t));
              }
              if (e?.annotationPaths) {
                const t = e.annotationPaths ?? [];
                return s.default.map(t, (t) => i.getAnnotationId(t));
              }
              return [];
            })(t, r),
            n = e.map((t) => t.annotationId),
            a = e.filter((t) => !t.ignored).map((t) => t.annotationId),
            u = s.default.uniq([...o, ...n]).length,
            l = s.default.uniq(n).length,
            m = s.default.uniq([...o, ...a]).length,
            f = s.default.uniq(a).length,
            y = e.filter((t) => t.disputeStatus),
            h = s.default.uniq(
              y
                .filter((t) => "no_dispute" !== t.disputeStatus)
                .map((t) => t.annotationId)
            ).length;
          return {
            numAnnotations: u,
            numErrors: l,
            numDisputes: s.default.isEmpty(y) ? void 0 : h,
            numNonIgnoredAnnotations: m,
            numNonIgnoredErrors: f,
          };
        }),
        (e._I = function (t, e, r, o) {
          const n = t.filter((t) => !t.parent),
            a = e.filter((t) => !t.parent),
            i = A(n, a, r, o),
            u = (function (t, e, r, o) {
              return s.default.map(A(e, t, o, r), (t) => ({
                ...t,
                errorType: "extraneous",
              }));
            })(n, a, r, o),
            l = (function (t, e, r, o) {
              const n = s.default.compact(
                  s.default.intersection(
                    s.default.map(t, "uuid"),
                    s.default.map(e, "uuid")
                  )
                ),
                a = s.default.keyBy(t, "uuid"),
                i = s.default.keyBy(e, "uuid"),
                u = s.default.compact(
                  s.default.intersection(
                    s.default.map(r, "id"),
                    s.default.map(o, "id")
                  )
                ),
                l = s.default.keyBy(r, "id"),
                d = s.default.keyBy(o, "id"),
                c = s.default.reduce(
                  n,
                  (t, e) =>
                    m({
                      perAnnotationErrors: t,
                      auditAnnotation: i[e],
                      taskAnnotation: a[e],
                    }),
                  []
                ),
                p = s.default.reduce(
                  u,
                  (t, e) =>
                    m({
                      perAnnotationErrors: t,
                      auditAnnotation: {
                        uuid: d[e].id,
                        attributes: d[e].attributes ?? {},
                        label: d[e].label,
                      },
                      taskAnnotation: {
                        uuid: l[e].id,
                        attributes: l[e].attributes ?? {},
                        label: l[e].label,
                      },
                    }),
                  []
                );
              return c.concat(p);
            })(n, a, r, o);
          return s.default.concat(i, u, l);
        }),
        (e.Wv = function (t = {}, e = {}) {
          const r = s.default.uniq([
            ...s.default.keys(t),
            ...s.default.keys(e),
          ]);
          return r
            .filter((r) => !s.default.isEqual(t[r], e[r]))
            .map((t) => ({
              annotationId: "global",
              errorType: "attribute",
              attribute: t,
              severity: a.ErrorSeverityLevel.Default,
              comment: "",
              isFixed: !0,
            }));
        });
      var o,
        n = r(308408),
        a = r(952328),
        i = r(808704),
        s = (o = r(298784)) && o.__esModule ? o : { default: o },
        u = r(750364),
        l = r(230046),
        d = r(599789),
        c = r(167469),
        p = r(516812);
      function m({
        perAnnotationErrors: t,
        auditAnnotation: e,
        taskAnnotation: r,
        frameNum: o,
      }) {
        const [n, a] = s.default.partition(
            t,
            (t) => t.annotationId === i.getAnnotationId(e)
          ),
          l = (function (t, e, r) {
            return [...y(t, e), ...g(t, e), ...h(t, e)].map((o) => ({
              ...o,
              isFixed: !0,
              auditLabel: t.label,
              taskLabel: e.label,
              frameNum: r?.frameNum,
              auditBox: P(t),
              taskBox: P(e),
            }));
          })(e, r, { frameNum: o });
        s.default.isNil(o) || l.forEach((t) => (t.frameNum = o));
        return [...a, ...u.mergeFixedErrors(n, l, { frameNum: o })];
      }
      function f({
        perAnnotationErrors: t,
        auditAnnotation: e,
        taskAnnotation: r,
      }) {
        const [o, n] = s.default.partition(
          t,
          (t) => t.annotationId === i.getAnnotationId(e)
        );
        return [
          ...n,
          ...o.map((t) => ({
            ...t,
            isFixed: !0,
            auditLabel: e.label,
            taskLabel: r?.label,
            auditBox: P(e),
            taskBox: P(r),
          })),
        ];
      }
      function y(t, e) {
        if (!t.geometry || t.geometry !== e.geometry) return [];
        return l.getConverterForGeometry(t.geometry).labelerFormsEqual(t, e)
          ? []
          : [
              {
                annotationId: i.getAnnotationId(e),
                errorType: "geometry",
                severity: a.ErrorSeverityLevel.Default,
                comment: "",
              },
            ];
      }
      function h(t, e) {
        return s.default
          .uniq([
            ...s.default.keys(t.attributes),
            ...s.default.keys(e.attributes),
          ])
          .filter(
            (r) =>
              !s.default.isEqual(
                s.default.get(t.attributes, r),
                s.default.get(e.attributes, r)
              )
          )
          .map((t) => ({
            annotationId: i.getAnnotationId(e),
            errorType: "attribute",
            attribute: t,
            severity: a.ErrorSeverityLevel.Default,
            comment: "",
          }));
      }
      function g(t, e) {
        return e.label === t.label
          ? []
          : [
              {
                annotationId: i.getAnnotationId(e),
                errorType: "class",
                severity: a.ErrorSeverityLevel.Default,
                comment: "",
              },
            ];
      }
      const v = ["width", "height", "left", "top"],
        b = ["rotation"];
      function P(t) {
        if (!t) return;
        const e = (function (t) {
          if (!t.geometry) return t;
          return l.getConverterForGeometry(t.geometry).toApiFormat(t);
        })(t);
        return (function (t) {
          return (
            t.geometry === n.AnnotationGeometry.Box &&
            v.every((e) => s.default.isNumber(s.default.get(t, e)))
          );
        })(e)
          ? s.default.pick(e, [...v, ...b])
          : void 0;
      }
      function F(t, e, r) {
        return s.default.isEmpty(e) || 0 === r
          ? []
          : s.default.flatMap(e, (e) => {
              const o = s.default.find(
                t,
                (t) => i.getAnnotationId(t) === i.getAnnotationId(e)
              );
              return s.default.reduce(
                s.default.range(0, r),
                (t, r) =>
                  e.frames?.[r]
                    ? t.concat(
                        s.default.map(
                          A(s.default.compact([o?.frames[r]]), [e.frames[r]]),
                          (t) => ({ ...t, frameNum: r })
                        )
                      )
                    : t,
                []
              );
            });
      }
      function x(t) {
        return s.default.flatMap(t, (t) =>
          s.default.filter(
            s.default.map(t.frames, (e, r) => ({
              uuid: t.uuid,
              frame: r,
              annotation: e,
            })),
            (t) => t.annotation
          )
        );
      }
      function A(t, e, r, o) {
        const n = s.default.map(s.default.differenceBy(e, t, "uuid"), (t) => ({
            annotationId: t.uuid || "",
            severity: a.ErrorSeverityLevel.Critical,
            errorType: "missing",
            comment: "",
            isFixed: !0,
            auditLabel: t.label,
            auditBox: P(t),
          })),
          i =
            r && o
              ? s.default.concat(
                  s.default.map(s.default.differenceBy(o, r, "id"), (t) => ({
                    annotationId: t.id || "",
                    severity: a.ErrorSeverityLevel.Critical,
                    errorType: "missing",
                    comment: "",
                    isFixed: !0,
                    auditLabel: t.label,
                  }))
                )
              : [];
        return n.concat(i);
      }
    },
    750364: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLastWorkerResponse = function (t, e) {
          if (t && !t.is_customer_fix) return t;
          const r = (e ?? []).filter((t) => !t.is_customer_fix);
          if (r.length) return a.default.last(r);
        }),
        (e.isDuplicateError = c),
        (e.mergeFixedErrors = function (t, e, r) {
          const o = e.filter((e) => !t.some((t) => c(e, t)));
          return t
            .filter(
              (t) =>
                t.frameNum !== r?.frameNum ||
                !(function (t, e) {
                  const r = !e.some((e) => c(t, e));
                  return !!t.isFixed && r;
                })(t, e)
            )
            .concat(o);
        }),
        (e.auditPerAnnotationCustomers =
          e.auditPerAnnotationTaskTypes =
          e.auditGridModeTaskTypes =
            void 0);
      var o = r(599789),
        n = r(167469),
        a = s(r(298784)),
        i = s(r(210918));
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      const u = [n.TaskType.Categorization];
      e.auditGridModeTaskTypes = u;
      const l = [
        ...o.twoDTypes,
        n.TaskType.DocumentTranscription,
        n.TaskType.LidarTopdown,
      ];
      e.auditPerAnnotationTaskTypes = l;
      const d = [
        i.default.Pegasus,
        i.default.Comet,
        "5d13f585be01b2049e255001",
      ];
      function c(t, e) {
        return (
          t.annotationId === e.annotationId &&
          t.errorType === e.errorType &&
          t.attribute === e.attribute &&
          t.frameNum === e.frameNum
        );
      }
      e.auditPerAnnotationCustomers = d;
    },
    983736: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BoxConverter = void 0);
      var o,
        n = (o = r(298784)) && o.__esModule ? o : { default: o },
        a = r(60271),
        i = r(308408);
      const s = {
        toLabelerFormat(t, e = !1) {
          const r = {
            ...n.default.omit(t, ["left", "top"]),
            x: t.left,
            y: t.top,
          };
          return (
            e && ((r.geometry = i.AnnotationGeometry.Box), delete r.type),
            delete r.vertices,
            r
          );
        },
        toApiFormat(t, e = !1, r) {
          if (!t) return null;
          const o = !!r?.geometries?.box?.integer_pixels,
            s = {
              ...n.default.omit(t, ["x", "y", "height", "width"]),
              left: o ? Math.round(t.x) : t.x,
              top: o ? Math.round(t.y) : t.y,
              height: o ? Math.round(t.height) : t.height,
              width: o ? Math.round(t.width) : t.width,
            };
          return (
            e && ((s.type = i.AnnotationGeometry.Box), delete s.geometry),
            n.default.isNil(s.rotation) ||
              (s.vertices = a.getRotatedVertices({
                height: s.height,
                width: s.width,
                rotation: s.rotation,
                center: { x: s.left + s.width / 2, y: s.top + s.height / 2 },
                returnMidpoints: !1,
              })),
            s
          );
        },
        toPerFrameFormat(t, e) {
          const r = !!e?.geometries?.box?.integer_pixels;
          return {
            left: t.map((t) => t && (r ? Math.round(t.x) : t.x)),
            top: t.map((t) => t && (r ? Math.round(t.y) : t.y)),
            width: t.map((t) => t && (r ? Math.round(t.width) : t.width)),
            height: t.map((t) => t && (r ? Math.round(t.height) : t.height)),
            rotation: t.map((t) => t && (t.rotation || 0)),
          };
        },
        fromPerFrameFormat: (t, e) =>
          n.default.isNil(t.left[e]) ||
          n.default.isNil(t.top[e]) ||
          n.default.isNil(t.width[e]) ||
          n.default.isNil(t.height[e])
            ? {}
            : {
                x: t.left[e],
                y: t.top[e],
                width: t.width[e],
                height: t.height[e],
                ...(n.default.isNil(t.rotation[e])
                  ? {}
                  : { rotation: t.rotation[e] }),
              },
        labelerFormsEqual(t, e) {
          let r =
            Math.round(t.x) === Math.round(e.x) &&
            Math.round(t.y) === Math.round(e.y) &&
            Math.round(t.width) === Math.round(e.width) &&
            Math.round(t.height) === Math.round(e.height);
          return (
            (t.rotation || e.rotation) &&
              (r =
                r &&
                Math.round(t.rotation ?? 1 / 0) ===
                  Math.round(e.rotation ?? 1 / 0)),
            r
          );
        },
      };
      e.BoxConverter = s;
    },
    28202: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.annotationsToCuboids = function (t) {
          return t.map((t) =>
            t.geometry && t.geometry === a.AnnotationGeometry.Ellipse
              ? {
                  ...i.EllipseConverter.toLabelerFormat(t),
                  uuid: t.uuid || n.default.v4(),
                }
              : t.geometry && t.geometry !== a.AnnotationGeometry.Cuboid
              ? { ...t, uuid: t.uuid || n.default.v4() }
              : l.toLabelerFormat(t)
          );
        }),
        (e.CuboidConverter = void 0);
      var o = s(r(298784)),
        n = s(r(711719)),
        a = r(308408),
        i = r(479935);
      function s(t) {
        return t && t.__esModule ? t : { default: t };
      }
      const u = (t, e, r) => ({
          type: "edge",
          x1: t.x,
          y1: t.y,
          x2: e.x,
          y2: e.y,
          description: r,
        }),
        l = {
          toLabelerFormat(t, e) {
            const r = (e) => {
                const r = t.vertices.filter((t) => t.description === e);
                return r.length > 0 ? r[0] : null;
              },
              n = r(a.CuboidVertexDesc.FaceTopLeft),
              i = r(a.CuboidVertexDesc.FaceBottomRight),
              [s, u] = [n.x, n.y],
              [l, d] = [i.x, i.y];
            let c;
            const p = r(a.CuboidVertexDesc.SideTopCorner),
              m = r(a.CuboidVertexDesc.SideBottomCorner);
            if (p && m) {
              const t = p.x,
                [e, r] = [p.y, m.y];
              c = { ex: t, ey1: e, ey2: r };
            }
            const f = {
              ...o.default.omit(t, ["edges", "extra", "pts2d", "pts3d"]),
              face: { x1: s, y1: u, x2: l, y2: d },
              edge: c,
            };
            return (
              e && ((f.geometry = a.AnnotationGeometry.Cuboid), delete f.type),
              f
            );
          },
          toApiFormat(t, e) {
            if (!t || !t.face) return null;
            const r = t.label,
              o = t.attributes;
            let { x1: n, y1: i, x2: s, y2: l } = t.face;
            ([n, s] = [Math.min(n, s), Math.max(n, s)]),
              ([i, l] = [Math.min(i, l), Math.max(i, l)]);
            const d = {
                type: "vertex",
                x: n,
                y: i,
                description: a.CuboidVertexDesc.FaceTopLeft,
              },
              c = {
                type: "vertex",
                x: n,
                y: l,
                description: a.CuboidVertexDesc.FaceBottomLeft,
              },
              p = {
                type: "vertex",
                x: s,
                y: i,
                description: a.CuboidVertexDesc.FaceTopRight,
              },
              m = {
                type: "vertex",
                x: s,
                y: l,
                description: a.CuboidVertexDesc.FaceBottomRight,
              };
            let f = [d, c, p, m];
            const y = [
              u(d, p, a.CuboidEdgeDesc.FaceTop),
              u(p, m, a.CuboidEdgeDesc.FaceRight),
              u(m, c, a.CuboidEdgeDesc.FaceBottom),
              u(c, d, a.CuboidEdgeDesc.FaceLeft),
            ];
            let h = y,
              g = [];
            if (t.edge) {
              let { ex: e, ey1: r, ey2: o } = t.edge;
              [r, o] = [Math.min(r, o), Math.max(r, o)];
              const i = {
                  type: "vertex",
                  x: e,
                  y: r,
                  description: a.CuboidVertexDesc.SideTopCorner,
                },
                l = {
                  type: "vertex",
                  x: e,
                  y: o,
                  description: a.CuboidVertexDesc.SideBottomCorner,
                };
              (g =
                e < (n + s) / 2
                  ? [
                      u(d, i, a.CuboidEdgeDesc.SideTop),
                      u(i, l, a.CuboidEdgeDesc.SideBack),
                      u(l, c, a.CuboidEdgeDesc.SideBottom),
                      u(c, d),
                    ]
                  : [
                      u(p, i, a.CuboidEdgeDesc.SideTop),
                      u(i, l, a.CuboidEdgeDesc.SideBack),
                      u(l, m, a.CuboidEdgeDesc.SideBottom),
                      u(m, p),
                    ]),
                (f = f.concat([i, l])),
                (h = h.concat(g.slice(0, 3)));
            }
            const v = {
              ...(t.is_base_annotation ? { is_base_annotation: !0 } : {}),
              geometry: a.AnnotationGeometry.Cuboid,
              label: r,
              attributes: o,
              vertices: f,
              edges: h,
              uuid: t.uuid,
              extra: { face: y, side: g },
              metadata: t.metadata,
              ...(t.scenarioParams ? { scenarioParams: t.scenarioParams } : {}),
            };
            return (
              e && ((v.type = a.AnnotationGeometry.Cuboid), delete v.geometry),
              v
            );
          },
          toPerFrameFormat(t) {
            const e = t.map((t) => t && this.toApiFormat(t));
            return {
              vertices: e.map((t) => t && t.vertices),
              edges: e.map((t) => (t?.edges ? t.edges : null)),
            };
          },
          fromPerFrameFormat(t, e) {
            if (!t.vertices[e] || !t.edges[e]) return {};
            const r = { vertices: t.vertices[e], edges: t.edges[e] },
              o = this.toLabelerFormat(r);
            return { face: o.face, edge: o.edge };
          },
          labelerFormsEqual: (t, e) => !0,
        };
      e.CuboidConverter = l;
    },
    479935: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EllipseConverter = void 0);
      var o,
        n = (o = r(298784)) && o.__esModule ? o : { default: o },
        a = r(60271),
        i = r(308408);
      const s = {
        toLabelerFormat(t, e) {
          const r = t.vertices.map((t) => [t.x, t.y]),
            o = [(r[0][0] + r[2][0]) / 2, (r[0][1] + r[2][1]) / 2],
            a = r.map((t) => [t[0] - o[0], t[1] - o[1]]),
            s = Math.atan2(a[1][1], a[1][0]),
            u = [Math.cos(s), 1 * Math.sin(s)],
            l = [-1 * Math.sin(s), Math.cos(s)],
            d = a.map((t) => [
              u[0] * t[0] + u[1] * t[1],
              l[0] * t[0] + l[1] * t[1],
            ]),
            c = {
              ...n.default.omit(t, ["vertices"]),
              center: o,
              rotation: s,
              width: d[1][0] - d[3][0],
              height: d[2][1] - d[0][1],
            };
          return (
            e && ((c.geometry = i.AnnotationGeometry.Ellipse), delete c.type), c
          );
        },
        toApiFormat(t, e) {
          if (!t) return null;
          const r = a.getRotatedVertices({
              height: t.height,
              width: t.width,
              rotation: t.rotation,
              center: { x: t.center[0], y: t.center[1] },
              returnMidpoints: !0,
            }),
            o = {
              ...n.default.omit(t, ["center", "rotation", "width", "height"]),
              vertices: r,
            };
          return (
            e && ((o.type = i.AnnotationGeometry.Ellipse), delete o.geometry), o
          );
        },
        toPerFrameFormat: (t) => ({
          vertices: t
            .map((t) => t && s.toApiFormat(t))
            .map((t) => t && t.vertices),
        }),
        fromPerFrameFormat(t, e) {
          if (!t.vertices[e]) return {};
          const r = { vertices: t.vertices[e] },
            o = this.toLabelerFormat(r);
          return {
            center: o.center,
            rotation: o.rotation,
            width: o.width,
            height: o.height,
          };
        },
        labelerFormsEqual(t, e) {
          let r =
            Math.round(t.width) === Math.round(e.width) &&
            Math.round(t.rotation) === Math.round(e.rotation) &&
            Math.round(t.height) === Math.round(e.height);
          return (
            (r =
              r &&
              n.default.isEqualWith(
                t.center,
                e.center,
                (t, e) => Math.round(t.x) === Math.round(e.y)
              )),
            r
          );
        },
      };
      e.EllipseConverter = s;
    },
    176665: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LineConverter = void 0);
      var o = r(308408),
        n = r(60271);
      const a = {
        toLabelerFormat(t, e) {
          const r = { ...t };
          return (
            e && ((r.geometry = o.AnnotationGeometry.Line), delete r.type), r
          );
        },
        toApiFormat(t, e) {
          if (!t) return null;
          const r = { ...t };
          return (
            e && ((r.type = o.AnnotationGeometry.Line), delete r.geometry), r
          );
        },
        toPerFrameFormat: (t) => ({ vertices: t.map((t) => t && t.vertices) }),
        fromPerFrameFormat: (t, e) =>
          t.vertices[e] ? { vertices: t.vertices[e] } : {},
        labelerFormsEqual: (t, e) =>
          n.orderedPointArraysEqual(t.vertices, e.vertices),
      };
      e.LineConverter = a;
    },
    752696: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PointConverter = void 0);
      var o,
        n = (o = r(298784)) && o.__esModule ? o : { default: o },
        a = r(308408);
      const i = {
        toLabelerFormat(t, e) {
          const r = { ...t };
          return (
            e && ((r.geometry = a.AnnotationGeometry.Point), delete r.type), r
          );
        },
        toApiFormat(t, e) {
          if (!t) return null;
          const r = { ...t };
          return (
            e && ((r.type = a.AnnotationGeometry.Point), delete r.geometry), r
          );
        },
        toPerFrameFormat: (t) => ({
          x: t.map((t) => t && t.x),
          y: t.map((t) => t && t.y),
        }),
        fromPerFrameFormat: (t, e) =>
          n.default.isNil(t.x[e]) || n.default.isNil(t.y[e])
            ? {}
            : { x: t.x[e], y: t.y[e] },
        labelerFormsEqual: (t, e) =>
          Math.round(t.x) === Math.round(e.x) &&
          Math.round(t.y) === Math.round(e.y),
      };
      e.PointConverter = i;
    },
    413487: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PolygonConverter = void 0);
      var o = r(308408),
        n = r(60271);
      const a = {
        toLabelerFormat(t, e) {
          const r = { ...t };
          return (
            e && ((r.geometry = o.AnnotationGeometry.Polygon), delete r.type), r
          );
        },
        toApiFormat(t, e) {
          if (!t) return null;
          const r = { ...t };
          return (
            e && ((r.type = o.AnnotationGeometry.Polygon), delete r.geometry), r
          );
        },
        toPerFrameFormat(t) {
          let e = !1;
          const r = t.map((t) =>
            t?.multiple_polygon_vertices
              ? ((e = !0), t?.multiple_polygon_vertices)
              : null
          );
          return {
            vertices: t.map((t) => t && t.vertices),
            ...(e ? { multiple_polygon_vertices: r } : {}),
          };
        },
        fromPerFrameFormat(t, e) {
          if (!t.vertices[e]) return {};
          let r;
          return (
            t.multiple_polygon_vertices?.[e] &&
              (r = t.multiple_polygon_vertices[e]),
            {
              vertices: t.vertices[e],
              ...(r ? { multiple_polygon_vertices: r } : {}),
            }
          );
        },
        labelerFormsEqual: (t, e) =>
          n.orderedPointArraysEqual(t.vertices, e.vertices),
      };
      e.PolygonConverter = a;
    },
    95930: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.expandGroups = function (t, e) {
          const r = o.default.groupBy(t, e),
            a = [];
          return (
            o.default.each(o.default.keys(r), (t) => {
              const i = r[t][0];
              a.push(i),
                r[t].length > 1 &&
                  o.default.each(r[t].slice(1), (r) => {
                    const o = n.default.v4(),
                      i = { ...r, parent: t, [e]: o };
                    a.push(i);
                  });
            }),
            a
          );
        }),
        (e.combineGroups = function (t, e = !1) {
          return o.default.map(t, (r) => {
            if (r.parent) {
              const n = o.default.find(t, (t) => t.uuid === r.parent),
                a = e ? r.uuid : n.uuid,
                i = e ? { parent: r.parent } : {},
                s = o.default.map(r.frames, (t, e) => {
                  if (!t) return null;
                  const r = o.default.get(n, ["frames", e, "attributes"]);
                  return {
                    uuid: a,
                    vertices: t.vertices,
                    attributes: r,
                    geometry: t.geometry,
                  };
                });
              return {
                uuid: a,
                label: n.label,
                attributes: n.attributes,
                ...(r.geometry ? { geometry: r.geometry } : {}),
                ...(r.type ? { type: r.type } : {}),
                ...(r.vertices ? { vertices: r.vertices } : {}),
                ...(r.frames ? { frames: s } : {}),
                ...(r.is_base_annotation ? { is_base_annotation: !0 } : {}),
                ...(r.scenarioParams
                  ? { scenarioParams: r.scenarioParams }
                  : {}),
                ...i,
              };
            }
            return r;
          });
        }),
        (e.getGroup = e.isFragment = void 0);
      var o = a(r(298784)),
        n = a(r(711719));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.isFragment = (t) => !!t.parent;
      e.getGroup = (t, e) => {
        const r = o.default.find(e, (e) => e.uuid === t);
        if (!r || !r.parent) return r;
        const n = o.default.find(e, (t) => t.uuid === r.parent);
        return n || r;
      };
    },
    230046: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getConverterForGeometry = f),
        (e.convertAnnotations = function (t, e) {
          const r = t.map((t) => f(t.type || e).toLabelerFormat(t, !0));
          return d.expandGroups(r, "uuid");
        }),
        (e.convertVideoAnnotations = function (t, e) {
          return c.responseToLabelerFormat(t, e);
        });
      var o = r(308408),
        n = r(752696),
        a = r(176665),
        i = r(983736),
        s = r(479935),
        u = r(28202),
        l = r(413487),
        d = r(95930),
        c = r(783710),
        p = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var r in t)
              if (Object.prototype.hasOwnProperty.call(t, r)) {
                var o =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, r)
                    : {};
                o.get || o.set ? Object.defineProperty(e, r, o) : (e[r] = t[r]);
              }
          return (e.default = t), e;
        })(r(95930));
      Object.keys(p).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in e && e[t] === p[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return p[t];
              },
            }));
      });
      const m = {
        [o.AnnotationGeometry.Point]: n.PointConverter,
        [o.AnnotationGeometry.Line]: a.LineConverter,
        [o.AnnotationGeometry.Box]: i.BoxConverter,
        [o.AnnotationGeometry.Ellipse]: s.EllipseConverter,
        [o.AnnotationGeometry.Cuboid]: u.CuboidConverter,
        [o.AnnotationGeometry.Polygon]: l.PolygonConverter,
        [o.AnnotationGeometry.ExtremalPoints]: void 0,
        [o.AnnotationGeometry.LidarCuboid]: void 0,
        [o.AnnotationGeometry.LidarPoint]: void 0,
      };
      function f(t) {
        const e = m[t];
        if (void 0 === e) throw new Error(`No converter found for type: ${t}`);
        return e;
      }
    },
    516812: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getLabelId = s),
        (e.updatePerLabelErrors = function (t, e, r, o, n = !1) {
          const f = a.default.groupBy(t, "annotationId"),
            y = new Map();
          for (const a of l(e)) {
            const t = s(a.index);
            y.set(t, a);
          }
          const h = new Map();
          for (const a of l(r)) {
            const t = s(a.index);
            h.set(t, a);
          }
          const g = new Map();
          for (const a of l(o ?? {})) {
            const t = s(a.index);
            g.set(t, a);
          }
          const v = a.default.uniq([...y.keys(), ...h.keys()]);
          return a.default.flatMap(a.default.uniq(v), (t) => {
            const e = f[t] ?? [],
              r = y.get(t),
              a = h.get(t),
              s = g.get(t);
            return (function (t, e, r, o, n) {
              if (o) return t;
              const a = (function (t, e, r) {
                return [
                  ...d(t, e, r),
                  ...c(t, e, r),
                  ...p(t, e),
                  ...m(t, e),
                ].map((r) => ({
                  ...r,
                  isFixed: !0,
                  auditLabel: t?.label,
                  taskLabel: e?.label,
                }));
              })(e, r, n);
              return i.mergeFixedErrors(t, a);
            })(e, r, a, u(r, s, o), n);
          });
        });
      var o,
        n = r(952328),
        a = (o = r(298784)) && o.__esModule ? o : { default: o },
        i = r(750364);
      function s(t) {
        return `label-${t}`;
      }
      const u = (t, e, r) => {
        if (a.default.isNil(r)) return !0;
        if (t?.numPixels !== e?.numPixels) return !1;
        return !(
          a.default
            .uniq([
              ...a.default.keys(t?.attributes),
              ...a.default.keys(e?.attributes),
            ])
            .filter(
              (r) => !a.default.isEqual(t?.attributes?.[r], e?.attributes?.[r])
            ).length > 0
        );
      };
      function* l(t) {
        for (const [e, r] of Object.entries(t))
          if (a.default.isArray(r)) for (const t of r) yield { ...t, label: e };
          else yield { ...r, label: e };
      }
      function d(t, e, r) {
        return (t?.numPixels && !e?.numPixels) || (t && !e)
          ? [
              {
                annotationId: s(t.index),
                errorType: r ? "missing" : "geometry",
                severity: n.ErrorSeverityLevel.Critical,
                comment: "",
              },
            ]
          : [];
      }
      function c(t, e, r) {
        return !t?.numPixels && e?.numPixels
          ? [
              {
                annotationId: s(e.index),
                errorType: r ? "extraneous" : "geometry",
                severity: n.ErrorSeverityLevel.Critical,
                comment: "",
              },
            ]
          : [];
      }
      function p(t, e) {
        return t?.numPixels && e?.numPixels && t.numPixels !== e.numPixels
          ? [
              {
                annotationId: s(t.index),
                errorType: "geometry",
                severity: n.ErrorSeverityLevel.Default,
                comment: "",
              },
            ]
          : [];
      }
      function m(t, e) {
        if (!t || !e) return [];
        return a.default
          .uniq([
            ...a.default.keys(t.attributes),
            ...a.default.keys(e.attributes),
          ])
          .filter(
            (r) => !a.default.isEqual(t.attributes?.[r], e.attributes?.[r])
          )
          .map((e) => ({
            annotationId: s(t.index),
            errorType: "attribute",
            attribute: e,
            severity: n.ErrorSeverityLevel.Default,
            comment: "",
          }));
      }
    },
    528429: function (t, e) {
      e.H = function (t) {
        return (
          !!t &&
          ((e = t.attachments),
          !!e &&
            e.every((t) => {
              return "string" !== typeof (e = t) && "type" in e;
              var e;
            }))
        );
        var e;
      };
    },
    783710: function (t, e, r) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getAnnotationFromAnnotationPath = function (t, e, r) {
          const o = t.find((t) => e === u.getAnnotationId(t));
          if (!o) return;
          const n = o.frames[r];
          if (!n) return;
          return n;
        }),
        (e.default =
          e.responseToLabelerFormat =
          e.submissionToResponseFormat =
          e.labelerToSubmissionFormat =
          e.VIDEO_ANNOTATION_PATH_PUBLIC_PROPERTIES =
            void 0);
      var o = l(r(298784)),
        n = l(r(711719)),
        a = l(r(923376)),
        i = r(308408),
        s = r(230046),
        u = r(808704);
      function l(t) {
        return t && t.__esModule ? t : { default: t };
      }
      const d = [
        "scene",
        "annotationId",
        "numFrames",
        "type",
        "props",
        "version",
        "scenarioParams",
      ];
      function c(t) {
        return o.default.map(o.default.range(t.numFrames), (e) =>
          (function (t, e) {
            const r = p.fromJSON(t);
            if (!r.existsAtFrame(e)) return;
            const o = {
              uuid: r.annotationId,
              type: r.type,
              attributes: r.getProp("attributes", e),
              label: void 0,
              is_base_annotation: void 0,
              corruption: void 0,
            };
            if (r.type === i.AnnotationGeometry.Cuboid)
              (o.edges = r.getProp("edges", e)),
                (o.vertices = r.getProp("vertices", e));
            else if (
              r.type === i.AnnotationGeometry.Polygon ||
              r.type === i.AnnotationGeometry.Line ||
              r.type === i.AnnotationGeometry.Ellipse
            ) {
              if (
                ((o.vertices = r.getProp("vertices", e)),
                r.isPerFrame("multiple_polygon_vertices"))
              ) {
                const t = r.getProp("multiple_polygon_vertices", e);
                t && (o.multiple_polygon_vertices = t);
              }
            } else
              r.type === i.AnnotationGeometry.Point
                ? ((o.x = r.getProp("x", e)), (o.y = r.getProp("y", e)))
                : ((o.top = r.getProp("top", e)),
                  (o.left = r.getProp("left", e)),
                  (o.height = r.getProp("height", e)),
                  (o.width = r.getProp("width", e)),
                  t.props.perFrame.rotation?.[e] &&
                    (o.rotation = r.getProp("rotation", e)));
            try {
              o.is_base_annotation = r.getProp("is_base_annotation", e);
            } catch (a) {
              if (
                "Path does not have property: is_base_annotation" !== a.message
              )
                throw a;
            }
            try {
              o.label = r.getProp("label", e);
            } catch (s) {
              if ("Path does not have property: label" !== s.message) throw s;
            }
            const n = r.getProp("corruption", e, null);
            return (
              n && (o.corruption = n),
              r.scenarioParams && (o.scenarioParams = r.scenarioParams),
              o
            );
          })(t, e)
        );
      }
      e.VIDEO_ANNOTATION_PATH_PUBLIC_PROPERTIES = d;
      e.labelerToSubmissionFormat = (t, e, r, n) => {
        const a = new Set(o.default.map(r, "uuid")),
          i = o.default.filter(
            r,
            (t) => !t.parent || (t.parent && a.has(t.parent))
          );
        return s.combineGroups(i).map((r) => {
          const o = n || e.attachments.length,
            a = r.geometry,
            i = s.getConverterForGeometry(a);
          return {
            scene: t,
            numFrames: o,
            annotationId: r.uuid,
            type: r.geometry,
            props: {
              static: {
                label: r.label,
                is_base_annotation: r.is_base_annotation,
                ...(r.corruption ? { corruption: r.corruption } : {}),
              },
              perFrame: {
                attributes: r.attributes,
                ...i.toPerFrameFormat(r.frames, e),
              },
            },
            ...(r.scenarioParams ? { scenarioParams: r.scenarioParams } : {}),
          };
        });
      };
      e.submissionToResponseFormat = async (t, e, r) => {
        const n = o.default.map(e.paths, (t) => c(p.fromJSON(t))),
          a = t.params.attachments?.length,
          i = o.default.max(n.map((t) => t.length));
        if (r && !(a === i)) {
          const e = { subtaskNumFrames: a, annotationNumFrames: i, id: t._id };
          r.info("Response annotations snapshot", JSON.stringify(e));
        }
        return o.default.map(
          o.default.range(0, Math.max(a ?? 0, i ?? 0)),
          (t) => {
            const e = [];
            for (const r of n) r[t] && e.push(r[t]);
            return { annotations: e };
          }
        );
      };
      e.responseToLabelerFormat = (t, e) => {
        const r = {},
          o = [];
        return (
          t.forEach(({ annotations: t }, a) => {
            const i = new Set();
            t.forEach((t) => {
              const { label: u, type: l, scenarioParams: d, corruption: c } = t;
              let p,
                m = t.uuid;
              i.has(m) && ((p = m), (m = n.default.v4())), i.add(m);
              const f = l || e,
                y = s.getConverterForGeometry(f);
              m in r ||
                ((r[m] = o.length),
                o.push({
                  uuid: m,
                  label: u,
                  frames: [],
                  attributes: [],
                  is_base_annotation: !!t.is_base_annotation,
                  geometry: f,
                  ...(p ? { parent: p } : {}),
                  ...(d ? { scenarioParams: d } : {}),
                  ...(c ? { corruption: c } : {}),
                }));
              const h = r[m];
              (o[h].frames[a] = {
                ...y.toLabelerFormat(t),
                uuid: m,
                is_base_annotation: !!t.is_base_annotation,
                attributes: t.attributes,
                geometry: f,
                ...(p ? { parent: p } : {}),
              }),
                (o[h].attributes[a] = Object.assign({}, t.attributes));
            });
          }),
          o
        );
      };
      class p extends a.default {
        static fromJSON(t) {
          return new p(t);
        }
        existsAtFrame(t) {
          return this.type === i.AnnotationGeometry.Cuboid
            ? o.default.every(
                ["edges", "vertices"].map((e) => this.hasPropAtFrame(e, t))
              )
            : this.type === i.AnnotationGeometry.Point
            ? o.default.every(["x", "y"].map((e) => this.hasPropAtFrame(e, t)))
            : this.type === i.AnnotationGeometry.Polygon ||
              this.type === i.AnnotationGeometry.Line ||
              this.type === i.AnnotationGeometry.Ellipse
            ? o.default.every(
                ["vertices"].map((e) => this.hasPropAtFrame(e, t))
              )
            : o.default.every(
                ["width", "height", "left", "top"].map((e) =>
                  this.hasPropAtFrame(e, t)
                )
              );
        }
        constructor(t) {
          super(t, d);
        }
      }
      e.default = p;
    },
  },
]);
