(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2993],
  {
    513091: function (e, t) {
      "use strict";
      t.y = function (e) {
        return `/annabel/?subtaskId=${e}`;
      };
    },
    172086: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPointInsidePolygon = function (e, t) {
          const s = e.length;
          if (s < 3) return !1;
          const a = { x: 1e9, y: t.y };
          let o = 0,
            h = 0;
          for (;;) {
            const l = (h + 1) % s;
            if (i(e[h], e[l], t, a)) {
              if (0 === r(e[h], t, e[l])) return n(e[h], t, e[l]);
              o += 1;
            }
            if (((h = l), 0 === h)) break;
          }
          return o % 2 === 1;
        });
      function n(e, t, n) {
        return (
          t.x <= Math.max(e.x, n.x) &&
          t.x >= Math.min(e.x, n.x) &&
          t.y <= Math.max(e.y, n.y) &&
          t.y >= Math.min(e.y, n.y)
        );
      }
      function r(e, t, n) {
        const r = (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
        return 0 === r ? 0 : r > 0 ? 1 : 2;
      }
      function i(e, t, i, s) {
        const a = r(e, t, i),
          o = r(e, t, s),
          h = r(i, s, e),
          l = r(i, s, t);
        return (
          (a !== o && h !== l) ||
          !(0 !== a || !n(e, i, t)) ||
          !(0 !== o || !n(e, s, t)) ||
          !(0 !== h || !n(i, e, s)) ||
          !(0 !== l || !n(i, t, s))
        );
      }
    },
    412636: function (e, t, n) {
      "use strict";
      t.SW = t.D0 = void 0;
      var r,
        i = (r = n(298784)) && r.__esModule ? r : { default: r },
        s = n(845851),
        a = n(130850),
        o = n(692600),
        h = n(169186),
        l = n(971599),
        u = n(167469);
      const f = {
          [u.TaskType.Transcription]: s.lintTranscription,
          [u.TaskType.SegmentAnnotation]: a.lintSegmentAnnotation,
          [u.TaskType.VideoAnnotation]: o.lintVideoAnnotation,
          [u.TaskType.VideoBoxAnnotation]: o.lintVideoAnnotation,
          [u.TaskType.VideoCuboidAnnotation]: o.lintVideoAnnotation,
          [u.TaskType.VideoPolygonAnnotation]: o.lintVideoAnnotation,
          [u.TaskType.ImageAnnotation]: h.lintImageAnnotation,
        },
        c = [
          u.TaskType.SegmentAnnotation,
          u.TaskType.TextCollection,
          u.TaskType.NamedEntityRecognition,
        ];
      t.D0 = (e) => !c.includes(e);
      t.SW = (e, t, n = l.LintSeverity.INFO) => {
        const r = i.default.get(f, e, () => []),
          s = [l.LintSeverity.ERROR];
        n === l.LintSeverity.WARNING
          ? s.push(l.LintSeverity.WARNING)
          : n === l.LintSeverity.INFO &&
            (s.push(l.LintSeverity.WARNING), s.push(l.LintSeverity.INFO));
        const a = r(t);
        return i.default.filter(a, (e) => i.default.includes(s, e.severity));
      };
    },
    339271: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dataQualityLinters = void 0);
      var r,
        i = (r = n(298784)) && r.__esModule ? r : { default: r },
        s = n(971599),
        a = n(599789),
        o = n(935866),
        h = n(101241);
      const l = (e, t) => {
        const n = [a.ReviewLevel.Attempt],
          r = [];
        if (!n.includes(t)) return r;
        const l = e.annotations;
        return (
          i.default.forEach(l, (e) => {
            if (o.isPolygonAnnotation(e)) {
              const t = e;
              r.push(
                ...((e, t) => {
                  const n = [];
                  if (e.vertices.length < 3) {
                    const e = new s.LintDiagnostic(
                      t,
                      s.LintSeverity.DISMISSABLE_ERROR,
                      {
                        message: `Annotation [${t}] must have at least 3 points in its polygon)`,
                        type: h.DataQualityLinterEnum
                          .NO_POLYGON_WITH_LESS_THAN_THREE_POINTS,
                      }
                    );
                    n.push(e);
                  }
                  return n;
                })(t, e.uuid)
              ),
                r.push(
                  ...((e, t) => {
                    const n = [],
                      r = new Set();
                    return (
                      i.default.forEach(e.vertices, (e) => {
                        if (r.has(e)) {
                          const r = new s.LintDiagnostic(
                            t,
                            s.LintSeverity.DISMISSABLE_ERROR,
                            {
                              message: `Annotation [${t}] cannot have duplicated point (${e.x}, ${e.y})`,
                              type: h.DataQualityLinterEnum.NO_DUPLICATE_POINTS,
                            }
                          );
                          n.push(r);
                        } else r.add(e);
                      }),
                      n
                    );
                  })(t, e.uuid)
                );
            }
          }),
          r
        );
      };
      t.dataQualityLinters = (e, t) => {
        const n = [];
        return n.push(...l(e, t)), n;
      };
    },
    408412: function (e, t) {
      "use strict";
      function n(e) {
        return e && e.type && e.params?.labels;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          const r = (e.trainingScenario?.params?.trainingLinters || [])
            .filter(n)
            .find((e) => e.type === t);
          if (
            r &&
            (function (e, t) {
              return e.type === t;
            })(r, t)
          )
            return r;
        });
    },
    935866: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getFinalPolygonArea =
          t.getPolygonArea =
          t.getPolygonsMap =
          t.getNodesMap =
          t.isPolygonAnnotation =
            void 0);
      var r,
        i = n(440169),
        s = n(172086),
        a = n(308408),
        o = (r = n(298784)) && r.__esModule ? r : { default: r };
      t.isPolygonAnnotation = (e) =>
        !(!e.geometry || e.geometry !== a.AnnotationGeometry.Polygon) ||
        !(!e.type || e.type !== a.AnnotationGeometry.Polygon);
      t.getNodesMap = (e, t, n) => {
        const r = { [e]: n[e], [t]: n[t] };
        let i = !0;
        const s = new Set(o.default.keys(r));
        for (; i; ) {
          i = !1;
          const e = o.default
            .flattenDeep(o.default.values(r))
            .filter((e) => !s.has(e));
          o.default.forEach(e, (e) => {
            e && !r[e] && ((r[e] = n[e] || []), (i = !0)), s.add(e);
          });
        }
        return r;
      };
      t.getPolygonsMap = (e, t) => {
        const n = Array.from(
            new Set(o.default.flattenDeep([o.default.entries(e)]))
          ),
          r = {};
        return (
          o.default.forEach(n, (e) => {
            r[e] = t.find((t) => t.uuid === e) ?? {};
          }),
          r
        );
      };
      t.getPolygonArea = (e) => i.polygonFor(e).getArea();
      t.getFinalPolygonArea = (e) => {
        let t = 0;
        const n = o.default.flattenDeep([...e].map((e) => e.vertices)),
          r = o.default.minBy(n, (e) => e.x),
          i = o.default.minBy(n, (e) => e.y),
          a = o.default.maxBy(n, (e) => e.x),
          h = o.default.maxBy(n, (e) => e.y);
        let l = null;
        for (const u of o.default.range(r.x, a.x))
          for (const n of o.default.range(i.y, h.y)) {
            const r = { x: u, y: n };
            if (l) {
              if (s.isPointInsidePolygon(l.vertices, r)) {
                t++;
                continue;
              }
              l = null;
            }
            const i = e.find((e) => s.isPointInsidePolygon(e.vertices, r));
            i && (t++, (l = i));
          }
        return t;
      };
    },
    169186: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lintImageAnnotation = void 0);
      var r,
        i = n(599789),
        s = (r = n(298784)) && r.__esModule ? r : { default: r },
        a = n(722715),
        o = n(101241),
        h = n(339271);
      const l = ["62c2c8453447790033a739c6", "61a7c74850120a002cafe687"];
      t.lintImageAnnotation = (e) => {
        const t = e.response,
          n = e.metadata;
        if (!n) return [];
        const r = n.reviewLevel ?? i.ReviewLevel.Attempt,
          u = e.runningFrontend,
          f = s.default.isString(n.projectId)
            ? n.projectId
            : s.default.isNil(n.projectId)
            ? null
            : n.projectId.toString(),
          c = [];
        return (
          u &&
            f &&
            l.includes(f) &&
            c.push(
              ...((e, t, n = []) => {
                const r = n.find((e) => {
                  if (
                    e?.condition?.scriptName !== o.ScriptLinterName.VisibleMask
                  )
                    return !1;
                  if (e.stage === o.LintStage.Backend) return !1;
                  switch (t) {
                    case i.ReviewLevel.Attempt:
                      return e.enableAttempt;
                    case i.ReviewLevel.Normal:
                      return e.enableL0;
                    case i.ReviewLevel.Level1:
                      return e.enableL1;
                    case i.ReviewLevel.Corp:
                      return e.enableL10;
                    case i.ReviewLevel.CorpFlagged:
                      return e.enableL11;
                    case i.ReviewLevel.Deliverable:
                      return e.enableL12;
                    default:
                      return !1;
                  }
                });
                if (!r) return [];
                const s = {
                    linkLabel: "Object Occlusion Links",
                    labels: [
                      "Bin",
                      "Human",
                      "Robot",
                      "Hole",
                      "Object",
                      "Compartment Wall",
                      "Occluded Part",
                    ],
                    coveredThreshold: 0.98,
                  },
                  h = r.message,
                  l = r.frontendSeverity,
                  u = r?.condition?.config ?? s;
                return a.executeVisibleMaskLinter(e, u, h, l);
              })(t, r, n.responseLintersRules)
            ),
          u && f && c.push(...h.dataQualityLinters(t, r)),
          c
        );
      };
    },
    130850: function (e, t, n) {
      "use strict";
      n(830816).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lintSegmentAnnotation = void 0);
      var r = o(n(298784)),
        i = n(971599),
        s = (n(139788), n(135277)),
        a = o(n(408412));
      o(n(210918));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const { ERROR: h, WARNING: l } = i.LintSeverity;
      new Set([
        "5e87f33bfd31cb002b0c970b",
        "5f90b3c28d9edd0024ab06ba",
        "5f455ae5fba2cf0025af74d0",
        "5e56774c5e3cbb0017dbbb49",
        "5fd9b5bac16483003328590b",
        "6066178d75cc250017e06fb7",
        "5eeac6d8e0617300c55d48e1",
        "5f4d4b1f338f3e00250019c5",
      ]);
      t.lintSegmentAnnotation = (e) => {
        const {
            task: t,
            subtask: n,
            response: o,
            featureFlaggedLinters: l,
            fromMadeChanges: u = !1,
          } = e,
          f = [];
        return (
          u ||
            (f.push(
              ...(({
                task: e,
                subtask: t,
                response: n,
                featureFlaggedLinters: o,
              }) => {
                const l = [],
                  u = o?.["opacity-workflow-linter"],
                  f = a.default(e, s.TrainingLinterType.CheckOpacityWorkflow);
                if (!u || !f) return l;
                const c = f.params.labels.length > 0,
                  p = c
                    ? r.default.pick(n.labelMapping, f.params.labels)
                    : n.labelMapping,
                  d = r.default.flatten(r.default.values(p));
                if (c) {
                  if (r.default.every(d, (e) => e.hasAdjustedOpacity)) return l;
                  const e = r.default.findKey(p, (e) =>
                    Array.isArray(e)
                      ? r.default.find(e, (e) => !e.hasAdjustedOpacity)
                      : !e.hasAdjustedOpacity
                  );
                  l.push(
                    new i.LintDiagnostic("opacity-workflow", h, {
                      message: `Be sure to adjust the opacity when reviewing every ${
                        e || "labeled"
                      } annotation to check for edge precission errors (shortcut is the '<' and '>' keys).`,
                    })
                  );
                } else
                  r.default.some(d, (e) => e.hasAdjustedOpacity) ||
                    l.push(
                      new i.LintDiagnostic("opacity-workflow", h, {
                        message:
                          "Be sure to adjust the opacity to get a clear view when checking label edges by using the '<' or '>' keys.",
                      })
                    );
                return l;
              })({ task: t, subtask: n, response: o, featureFlaggedLinters: l })
            ),
            f.push(
              ...(({
                task: e,
                subtask: t,
                response: n,
                featureFlaggedLinters: s,
              }) => {
                const a = [],
                  o = s?.["outline-workflow-linter"];
                if (!o) return a;
                const l = n.labelMapping,
                  u = r.default.pickBy(
                    l,
                    (e) => e.numPixels > 0 && !e.hasViewedWithOutlineTool
                  ),
                  f = r.default.keys(u);
                return (
                  r.default.isEmpty(f) ||
                    a.push(
                      new i.LintDiagnostic("outline-workflow", h, {
                        message: `You must use the outline tool to check for stray pixels on every label (use the 'o' key to enable) before submitting.\n Please use outline tool on the following labels: ${r.default.join(
                          f
                        )}`,
                      })
                    ),
                  a
                );
              })({ task: t, subtask: n, response: o, featureFlaggedLinters: l })
            ),
            f.push(
              ...(({
                task: e,
                subtask: t,
                response: n,
                featureFlaggedLinters: o,
              }) => {
                const l = [],
                  u = o?.["checkmark-workflow-linter"],
                  f = a.default(e, s.TrainingLinterType.CheckCheckmarkWorkflow);
                if (!u || !f) return l;
                const c = r.default.pick(n.labelMapping, f.params.labels),
                  p = r.default.flatten(r.default.values(c));
                if (!r.default.every(p, (e) => e.hasReviewed)) {
                  const e = r.default.findKey(c, (e) =>
                    Array.isArray(e)
                      ? r.default.find(e, (e) => !e.hasReviewed)
                      : !e.hasReviewed
                  );
                  l.push(
                    new i.LintDiagnostic("checkmark-workflow", h, {
                      message: `Please be sure to inspect every ${
                        e ? `instance of ${e}` : "label and instance"
                      } in the sidebar and mark them all as reviewed using the checkmark (or by pressing the 'shift' and 'space' keys at the same time).`,
                    })
                  );
                }
                return l;
              })({ task: t, subtask: n, response: o, featureFlaggedLinters: l })
            )),
          f
        );
      };
    },
    845851: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lintTranscription = void 0);
      var r,
        i = (r = n(298784)) && r.__esModule ? r : { default: r },
        s = n(971599);
      const { ERROR: a } = s.LintSeverity,
        o = "5b1059fea2a93f002e8e0b76";
      t.lintTranscription = ({ task: e, response: t }) => {
        const n = [];
        return (
          n.push(
            ...(({ task: e, response: t }) =>
              e.user?.toString() !== o
                ? []
                : i.default.get(t, "repeatable_fields", []).length > 3
                ? [
                    new s.LintDiagnostic("too-many-categories", a, {
                      message:
                        "You labeled more than three room labels. Please only select up to three room labels.",
                    }),
                  ]
                : [])({ task: e, response: t })
          ),
          n.push(
            ...(({ task: e, response: t }) => {
              if (e.user?.toString() !== o) return [];
              const n = [];
              let r = !1;
              for (const s of i.default.get(t, "repeatable_fields", [])) {
                const e = i.default.get(s, "title", []);
                n.includes(e) && (r = !0), n.push(e);
              }
              return r
                ? [
                    new s.LintDiagnostic("category-label-repeat", a, {
                      message:
                        "You repeated the same room category label. Please use each room category label once.",
                    }),
                  ]
                : [];
            })({ task: e, response: t })
          ),
          n
        );
      };
    },
    692600: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lintVideoAnnotation = void 0);
      var r,
        i = n(971599),
        s = (r = n(210918)) && r.__esModule ? r : { default: r };
      const { ERROR: a } = i.LintSeverity,
        o = [s.default.Narwhal],
        h = (e) => {
          if (e.paths)
            return e.paths[0]?.frames
              ? new Set(
                  e.paths
                    .filter((e) => e.frames.filter((e) => !!e).length)
                    .map((e) => e.annotationId || e.uuid)
                )
              : new Set(
                  e.paths
                    .filter(
                      (e) =>
                        e.props?.perFrame?.edges?.length ||
                        e.props?.perFrame?.x?.length ||
                        e.props?.perFrame?.vertices?.length ||
                        e.props?.perFrame?.width?.length
                    )
                    .map((e) => e.annotationId || e.uuid)
                );
          if (e.annotations) {
            const t = e.annotations;
            if (!t.length) return null;
            const n = new Set();
            for (const { annotations: e } of t)
              if (e?.length) for (const t of e) t.uuid && n.add(t.uuid);
            return n;
          }
          return null;
        };
      t.lintVideoAnnotation = (e) => {
        const {
            subtask: t,
            response: n,
            reviewedAnnotations: r,
            featureFlaggedLinters: s,
            fromMadeChanges: l = !1,
          } = e,
          u = [];
        return (
          l ||
            u.push(
              ...(({
                reviewedAnnotations: e,
                response: t,
                subtask: n,
                featureFlaggedLinters: r,
              }) => {
                const s = [],
                  h = r?.["checkmark-workflow-linter"];
                return h
                  ? (h &&
                      o.includes(n?.user) &&
                      t.paths.length > e.paths.length &&
                      s.push(
                        new i.LintDiagnostic("checkmark-workflow", a, {
                          message:
                            "Every annotation must be looked at and marked as Done (using the checkmark tool) before submitting this task.",
                        })
                      ),
                    s)
                  : s;
              })({
                subtask: t,
                reviewedAnnotations: r,
                response: n,
                featureFlaggedLinters: s,
                fromMadeChanges: l,
              })
            ),
          !1 === t.params?.can_delete_base_annotations &&
            u.push(
              ...(({ response: e, subtask: t }) => {
                const n = [];
                if (!t.params?.base_annotations) return n;
                if (
                  t.params?.can_edit_base_annotations &&
                  !1 !== t.params?.can_delete_base_annotations
                )
                  return n;
                const r = h(t.params.base_annotations);
                if (null === r) return n;
                const s = e ? h(e) : new Set();
                if (null === s) return n;
                for (const o of r)
                  s.has(o) ||
                    n.push(
                      new i.LintDiagnostic("base-annotations", a, {
                        message: `Response is missing an annotation from the base annotations (uuid ${o}).`,
                      })
                    );
                return n;
              })({ subtask: t, response: n })
            ),
          u
        );
      };
    },
    722715: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.executeVisibleMaskLinter = void 0);
      var r,
        i = (r = n(298784)) && r.__esModule ? r : { default: r },
        s = n(808704),
        a = n(971599),
        o = n(10814),
        h = n(935866);
      const l = 0.98;
      t.executeVisibleMaskLinter = (
        e,
        t,
        n = "There is a missing visible mask in the image. Please check links.",
        r = a.LintSeverity.WARNING
      ) => {
        const { linkLabel: u, labels: f, coveredThreshold: c = l } = t,
          p = e.annotations,
          d = e.links.filter((e) => e.label === u),
          _ = p.filter((e) => h.isPolygonAnnotation(e) && f.includes(e.label)),
          g = _.map((e) => e.uuid),
          y = {};
        i.default.forEach(d, (e) => {
          g.includes(e.from) &&
            g.includes(e.to) &&
            (y[e.from] || (y[e.from] = []), y[e.from].push(e.to));
        });
        const v = [];
        let m = 0;
        for (; m < 2; ) {
          m++;
          const e = {},
            t = {},
            l = {},
            u = () => {
              const n = i.default.keys(y).filter((e) => !v.includes(e));
              for (const r of n) {
                if (e[r]) continue;
                const n = [r];
                for (; n.length; ) {
                  const r = n[n.length - 1];
                  if (e[r]) (t[r] = !1), n.splice(n.length - 1);
                  else {
                    (e[r] = !0), (t[r] = !0);
                    for (const i of y[r] ?? [])
                      if (e[i]) {
                        if (t[i]) return { startNode: i, endNode: r };
                      } else n.push(i), (l[i] = r);
                  }
                }
              }
              return {};
            },
            { startNode: f, endNode: p } = u();
          if (!f || !p) break;
          const d = h.getNodesMap(f, p, y),
            g = h.getPolygonsMap(d, _),
            b = {},
            w = [];
          if (
            (i.default.forEach(d, (e, t) => {
              if (!e.length) return void (b[t] = h.getPolygonArea(g[t]));
              const { path: n } = o._subtractOverlappingAreas(
                g[t],
                e.map((e) => g[e])
              );
              i.default.isNil(n)
                ? w.push(s.getFriendlyAnnotationId(t))
                : (b[t] = h.getPolygonArea(n));
            }),
            !i.default.isEmpty(w))
          )
            return [
              new a.LintDiagnostic("visible-mask", r, {
                message: n,
                taskComponentAnnotations: [
                  {
                    id: f,
                    display: `Not visible area for annotations ${w.join(", ")}`,
                  },
                ],
              }),
            ];
          const k = i.default.flattenDeep(i.default.keys(d).map((e) => g[e])),
            T = h.getFinalPolygonArea(k);
          if (i.default.sum(i.default.values(b)) / T < c)
            return [
              new a.LintDiagnostic("visible-mask", r, {
                message: n,
                taskComponentAnnotations: [
                  {
                    id: f,
                    display: `Unexpected cyclical linking between annotations ${[
                      f,
                      p,
                    ]
                      .map((e) => s.getFriendlyAnnotationId(e))
                      .join(" - ")}`,
                  },
                ],
              }),
            ];
          v.push(...i.default.keys(d));
        }
        return [];
      };
    },
    473631: function (e, t, n) {
      "use strict";
      (t.Li = function (e, t, n = "HH:mm") {
        if (!e.startsWith("UTC "))
          throw new Error(
            `getLocalTime only supprots UTC time. Date ${e} is not supported`
          );
        const s = e.slice(3),
          a = i.default.utc(s, "YYYY-MM-DD HH:mm:ss"),
          o = r.default.last(t.split(" "));
        if (!o?.startsWith("GMT"))
          throw new Error(
            `timezone ${t} is not supported. Please update configuration if we need to support it!`
          );
        const h = r.default.toNumber(o.slice(3));
        if (!r.default.isNumber(h))
          throw new Error(
            `timezone ${t} is not supported. Please update configuration if we need to support it!`
          );
        return a.utcOffset(h).format(n);
      }),
        (t.ZP = void 0);
      var r = s(n(298784)),
        i = s(n(951154));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t, n = "seconds") {
        if (e && t) return i.default(e).utc().diff(i.default(t).utc(), n);
      }
      var o = a;
      t.ZP = o;
    },
    575904: function (e, t) {
      "use strict";
      var n;
      (t.mp = t.cL = void 0),
        (t.cL = n),
        (function (e) {
          (e.Pending = "Awaiting Review"),
            (e.Accepted = "Accepted"),
            (e.Rejected = "Rejected");
        })(n || (t.cL = n = {}));
      t.mp = (e) => !e.disabled;
    },
    351818: function (e, t) {
      "use strict";
      var n, r;
      (t.We = t.vw = void 0),
        (t.vw = n),
        (function (e) {
          (e.WorkerTeamPrimary = "WorkerTeamPrimary"),
            (e.WorkerTeamSecondary = "WorkerTeamSecondary"),
            (e.AssignedProjectLayers = "AssignedProjectLayers"),
            (e.TieredBursty = "TieredBursty"),
            (e.TieredPrimary = "TieredPrimary"),
            (e.TieredSecondary = "TieredSecondary"),
            (e.TieredTertiary = "TieredTertiary");
        })(n || (t.vw = n = {})),
        (t.We = r),
        (function (e) {
          (e.Info = "info"), (e.Alert = "alert"), (e.Warning = "warning");
        })(r || (t.We = r = {}));
    },
    135277: function (e, t) {
      "use strict";
      var n, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TrainingLinterType = t.TutorialStep = void 0),
        (t.TutorialStep = n),
        (function (e) {
          (e.SelectAnnotation = "select_annotation"),
            (e.Shortcut = "lidar_shortcut"),
            (e.LidarFeature = "lidar_feature"),
            (e.LoadComplete = "load_complete"),
            (e.Text = "text");
        })(n || (t.TutorialStep = n = {})),
        (t.TrainingLinterType = r),
        (function (e) {
          (e.CheckCheckmarkWorkflow = "CheckCheckmarkWorkflow"),
            (e.CheckOpacityWorkflow = "CheckOpacityWorkflow");
        })(r || (t.TrainingLinterType = r = {}));
    },
    10814: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._subtractOverlappingAreas = function (e, t, n = !1) {
          const r = i.default.cloneDeep(e);
          for (const i of t) {
            if (i.fake) continue;
            const t = h(r, i, n);
            if (!t) return { success: t, path: e };
          }
          if (i.default.isEmpty(r.vertices)) return { success: !0, path: e };
          return { success: !0, path: r };
        }),
        (t._subtractOverlappingAreasFromOthers = function (e, t, n = !1) {
          const r = i.default.cloneDeep(t);
          for (const i of r) {
            const r = h(i, e, n);
            if (!r) return { success: r, otherPaths: t };
          }
          return {
            success: !0,
            otherPaths: r.filter((e) => !i.default.isEmpty(e.vertices)),
          };
        }),
        (t.checkSelfIntersections = function (e, t) {
          if (t.length < 3 || e.length < 0) return !1;
          const n = t.map((e) => new s.geom.Coordinate(e.x, e.y)),
            r = e.map((e) => new s.geom.Coordinate(e.x, e.y));
          for (const a of r) {
            const e = s.geometryFactory.createLineString(n.slice(0, -1));
            if (
              s.geometryFactory
                .createLineString([a, i.default.last(n)])
                .intersects(e)
            )
              return !0;
            n.push(a);
          }
          return !1;
        }),
        (t.checkSelfIntersection = function (e, t) {
          if (t.length < 3) return !1;
          const n = i.default.map(
              t.slice(0, t.length - 1),
              (e) => new s.geom.Coordinate(e.x, e.y)
            ),
            r = s.geometryFactory.createLineString(n);
          return s.geometryFactory
            .createLineString([
              new s.geom.Coordinate(e.x, e.y),
              new s.geom.Coordinate(t[t.length - 1].x, t[t.length - 1].y),
            ])
            .intersects(r);
        }),
        (t.doPathsOverlap =
          t.pointsToSVG =
          t.isClockwise =
          t.getDistance =
          t.getCenter =
            void 0);
      var r,
        i = (r = n(298784)) && r.__esModule ? r : { default: r },
        s = n(440169),
        a = n(311311);
      function o(e, t, n) {
        const r = [];
        return (
          t.forEach((t) => {
            const a = (function (e, t, n) {
              let r = [e];
              const [a, ...h] = t;
              if (a)
                return (
                  (r = (function (e, t, n) {
                    if (e.length < 3) return null;
                    if (t.length < 3) return [e];
                    const r = s.polygonFor({ vertices: e }),
                      a = s.polygonFor({ vertices: t });
                    try {
                      const s = r.difference(a),
                        o = i.default.map(
                          i.default.range(s.getNumGeometries()),
                          (e) => s.getGeometryN(e)
                        );
                      if (r.covers(a)) return [u(e, t)];
                      if (!n)
                        return [
                          i.default
                            .maxBy(o, (e) => e.getArea())
                            .getCoordinates()
                            .slice(1)
                            .map(({ x: e, y: t }) => ({ x: e, y: t })),
                        ];
                      const h = [];
                      return (
                        o.forEach((e) => {
                          h.push(
                            e
                              .getCoordinates()
                              .slice(1)
                              .map(({ x: e, y: t }) => ({ x: e, y: t }))
                          );
                        }),
                        h
                      );
                    } catch (o) {
                      return null;
                    }
                  })(e, a, n)),
                  i.default.isNil(r) ? null : o(h, r, n)
                );
              return r;
            })(t, e, n);
            if (i.default.isNil(a)) return null;
            r.push(...a);
          }),
          r
        );
      }
      function h(e, t, n) {
        const r = o(
          a.splitPointsByFragment(t.vertices, t.multiple_polygon_vertices),
          a.splitPointsByFragment(e.vertices, e.multiple_polygon_vertices),
          n
        );
        if (i.default.isNil(r)) return !1;
        let s = [];
        i.default.each(r, (e) => {
          e && s?.push({ vertices: e });
        });
        const h = i.default.reduce(s, (e, t) => [...e, ...t.vertices], []);
        return (
          s.length <= 1 && (s = void 0),
          (e.vertices = h),
          s && (e.multiple_polygon_vertices = s),
          !0
        );
      }
      t.getCenter = (e = []) => {
        const t = i.default.min(e.map((e) => e.x)) || 0,
          n = i.default.min(e.map((e) => e.y)) || 0;
        return {
          x: (t + (i.default.max(e.map((e) => e.x)) || 0)) / 2,
          y: (n + (i.default.max(e.map((e) => e.y)) || 0)) / 2,
        };
      };
      const l = (e, t) =>
        Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      t.getDistance = l;
      t.isClockwise = (e) =>
        i.default.sum(
          i.default.zipWith(
            e,
            e.slice(1).concat(e[0]),
            ({ x: e, y: t }, { x: n, y: r }) => (t + r) * (e - n)
          )
        ) < 0;
      t.pointsToSVG = (e) =>
        i.default.map(e, ({ x: e, y: t }) => `${e},${t}`).join(" ");
      function u(e, t) {
        if (e.length < 3 || t.length < 3)
          throw new Error("Polygon must have at least 3 vertices");
        const n = s.polygonFor({ vertices: e }),
          r = s.polygonFor({ vertices: t });
        if (!n.covers(r))
          throw new Error("Polygon does not cover other polygon");
        let i,
          a,
          o = Number.MAX_VALUE;
        if (
          (e.forEach((e) => {
            t.forEach((t) => {
              const n = l(e, t);
              n < o && ((o = n), (i = e), (a = t));
            });
          }),
          !i || !a)
        )
          throw new Error("Could not find closest pair of points");
        const h = [...e.slice(e.indexOf(i)), ...e.slice(0, e.indexOf(i))],
          u = [...t.slice(t.indexOf(a) + 1), ...t.slice(0, t.indexOf(a) + 1)],
          c = 1e-5,
          p = (function (e, t) {
            const n = { x: t.x - e.x, y: t.y - e.y },
              r = { x: -n.y, y: n.x },
              i = Math.sqrt(r.x ** 2 + r.y ** 2);
            return { x: r.x / i, y: r.y / i };
          })(i, a),
          d = f(i, p, c),
          _ = f(a, p, c),
          g = f(i, p, -c),
          y = f(a, p, -c),
          v = [...h, d, _, ...u];
        if (s.polygonFor({ vertices: v }).isSimple()) return v;
        const m = [...h, g, y, ...u];
        if (s.polygonFor({ vertices: m }).isSimple()) return m;
        u.reverse();
        const b = [
            ...u.slice(u.indexOf(a) + 1),
            ...u.slice(0, u.indexOf(a) + 1),
          ],
          w = [...h, d, _, ...b];
        if (s.polygonFor({ vertices: w }).isSimple()) return w;
        return [...h, g, y, ...b];
      }
      function f(e, t, n = 0) {
        return { x: e.x + t.x * n, y: e.y + t.y * n };
      }
      t.doPathsOverlap = (e, t) => {
        const n = a.splitPointsByFragment(
            e.vertices,
            e.multiple_polygon_vertices
          ),
          r = a.splitPointsByFragment(t.vertices, t.multiple_polygon_vertices),
          o = i.default.map(n, (e) => s.polygonFor({ vertices: e })),
          h = i.default.map(r, (e) => s.polygonFor({ vertices: e }));
        return i.default.some(o, (e) =>
          i.default.some(h, (t) => e.intersects(t))
        );
      };
    },
    222091: function (e, t, n) {
      var r;
      !(function (i, s) {
        var a = (function (e) {
          var t = ["N", "E", "A", "D"];
          function n(e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          }
          function r(e, t) {
            Object.defineProperty(this, "kind", { value: e, enumerable: !0 }),
              t &&
                t.length &&
                Object.defineProperty(this, "path", {
                  value: t,
                  enumerable: !0,
                });
          }
          function i(e, t, n) {
            i.super_.call(this, "E", e),
              Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }),
              Object.defineProperty(this, "rhs", { value: n, enumerable: !0 });
          }
          function s(e, t) {
            s.super_.call(this, "N", e),
              Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
          }
          function a(e, t) {
            a.super_.call(this, "D", e),
              Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
          }
          function o(e, t, n) {
            o.super_.call(this, "A", e),
              Object.defineProperty(this, "index", {
                value: t,
                enumerable: !0,
              }),
              Object.defineProperty(this, "item", { value: n, enumerable: !0 });
          }
          function h(e, t, n) {
            var r = e.slice((n || t) + 1 || e.length);
            return (e.length = t < 0 ? e.length + t : t), e.push.apply(e, r), e;
          }
          function l(e) {
            var t = typeof e;
            return "object" !== t
              ? t
              : e === Math
              ? "math"
              : null === e
              ? "null"
              : Array.isArray(e)
              ? "array"
              : "[object Date]" === Object.prototype.toString.call(e)
              ? "date"
              : "function" === typeof e.toString && /^\/.*\//.test(e.toString())
              ? "regexp"
              : "object";
          }
          function u(e) {
            var t = 0;
            if (0 === e.length) return t;
            for (var n = 0; n < e.length; n++) {
              (t = (t << 5) - t + e.charCodeAt(n)), (t &= t);
            }
            return t;
          }
          function f(e) {
            var t = 0,
              n = l(e);
            if ("array" === n)
              return (
                e.forEach(function (e) {
                  t += f(e);
                }),
                t + u("[type: array, hash: " + t + "]")
              );
            if ("object" === n) {
              for (var r in e)
                if (e.hasOwnProperty(r)) {
                  var i =
                    "[ type: object, key: " +
                    r +
                    ", value hash: " +
                    f(e[r]) +
                    "]";
                  t += u(i);
                }
              return t;
            }
            return t + u("[ type: " + n + " ; value: " + e + "]");
          }
          function c(e, t, n, r, h, u, p, d) {
            (n = n || []), (p = p || []);
            var _ = (h = h || []).slice(0);
            if ("undefined" !== typeof u && null !== u) {
              if (r) {
                if ("function" === typeof r && r(_, u)) return;
                if ("object" === typeof r) {
                  if (r.prefilter && r.prefilter(_, u)) return;
                  if (r.normalize) {
                    var g = r.normalize(_, u, e, t);
                    g && ((e = g[0]), (t = g[1]));
                  }
                }
              }
              _.push(u);
            }
            "regexp" === l(e) &&
              "regexp" === l(t) &&
              ((e = e.toString()), (t = t.toString()));
            var y,
              v,
              m,
              b,
              w = typeof e,
              k = typeof t,
              T =
                "undefined" !== w ||
                (p &&
                  p.length > 0 &&
                  p[p.length - 1].lhs &&
                  Object.getOwnPropertyDescriptor(p[p.length - 1].lhs, u)),
              E =
                "undefined" !== k ||
                (p &&
                  p.length > 0 &&
                  p[p.length - 1].rhs &&
                  Object.getOwnPropertyDescriptor(p[p.length - 1].rhs, u));
            if (!T && E) n.push(new s(_, t));
            else if (!E && T) n.push(new a(_, e));
            else if (l(e) !== l(t)) n.push(new i(_, e, t));
            else if ("date" === l(e) && e - t !== 0) n.push(new i(_, e, t));
            else if ("object" === w && null !== e && null !== t) {
              for (y = p.length - 1; y > -1; --y)
                if (p[y].lhs === e) {
                  b = !0;
                  break;
                }
              if (b) e !== t && n.push(new i(_, e, t));
              else {
                if ((p.push({ lhs: e, rhs: t }), Array.isArray(e))) {
                  for (
                    d &&
                      (e.sort(function (e, t) {
                        return f(e) - f(t);
                      }),
                      t.sort(function (e, t) {
                        return f(e) - f(t);
                      })),
                      y = t.length - 1,
                      v = e.length - 1;
                    y > v;

                  )
                    n.push(new o(_, y, new s(void 0, t[y--])));
                  for (; v > y; ) n.push(new o(_, v, new a(void 0, e[v--])));
                  for (; y >= 0; --y) c(e[y], t[y], n, r, _, y, p, d);
                } else {
                  var L = Object.keys(e),
                    O = Object.keys(t);
                  for (y = 0; y < L.length; ++y)
                    (m = L[y]),
                      (b = O.indexOf(m)) >= 0
                        ? (c(e[m], t[m], n, r, _, m, p, d), (O[b] = null))
                        : c(e[m], void 0, n, r, _, m, p, d);
                  for (y = 0; y < O.length; ++y)
                    (m = O[y]) && c(void 0, t[m], n, r, _, m, p, d);
                }
                p.length = p.length - 1;
              }
            } else
              e !== t &&
                (("number" === w && isNaN(e) && isNaN(t)) ||
                  n.push(new i(_, e, t)));
          }
          function p(e, t, n, r, i) {
            var s = [];
            if ((c(e, t, s, r, null, null, null, i), n))
              for (var a = 0; a < s.length; ++a) n(s[a]);
            return s;
          }
          function d(e, t, n, r, i, s, a) {
            return c(e, t, n, r, i, s, a, !0);
          }
          function _(e, t, n, r) {
            var i = p(
              e,
              t,
              r
                ? function (e) {
                    e && r.push(e);
                  }
                : void 0,
              n
            );
            return r || (i.length ? i : void 0);
          }
          function g(e, t, n, r) {
            var i = p(
              e,
              t,
              r
                ? function (e) {
                    e && r.push(e);
                  }
                : void 0,
              n,
              !0
            );
            return r || (i.length ? i : void 0);
          }
          function y(e, t, n) {
            if (n.path && n.path.length) {
              var r,
                i = e[t],
                s = n.path.length - 1;
              for (r = 0; r < s; r++) i = i[n.path[r]];
              switch (n.kind) {
                case "A":
                  y(i[n.path[r]], n.index, n.item);
                  break;
                case "D":
                  delete i[n.path[r]];
                  break;
                case "E":
                case "N":
                  i[n.path[r]] = n.rhs;
              }
            } else
              switch (n.kind) {
                case "A":
                  y(e[t], n.index, n.item);
                  break;
                case "D":
                  e = h(e, t);
                  break;
                case "E":
                case "N":
                  e[t] = n.rhs;
              }
            return e;
          }
          function v(e, n, r) {
            if (
              ("undefined" === typeof r && n && ~t.indexOf(n.kind) && (r = n),
              e && r && r.kind)
            ) {
              for (
                var i = e, s = -1, a = r.path ? r.path.length - 1 : 0;
                ++s < a;

              )
                "undefined" === typeof i[r.path[s]] &&
                  (i[r.path[s]] =
                    "undefined" !== typeof r.path[s + 1] &&
                    "number" === typeof r.path[s + 1]
                      ? []
                      : {}),
                  (i = i[r.path[s]]);
              switch (r.kind) {
                case "A":
                  r.path &&
                    "undefined" === typeof i[r.path[s]] &&
                    (i[r.path[s]] = []),
                    y(r.path ? i[r.path[s]] : i, r.index, r.item);
                  break;
                case "D":
                  delete i[r.path[s]];
                  break;
                case "E":
                case "N":
                  i[r.path[s]] = r.rhs;
              }
            }
          }
          function m(e, t, n) {
            if (n.path && n.path.length) {
              var r,
                i = e[t],
                s = n.path.length - 1;
              for (r = 0; r < s; r++) i = i[n.path[r]];
              switch (n.kind) {
                case "A":
                  m(i[n.path[r]], n.index, n.item);
                  break;
                case "D":
                case "E":
                  i[n.path[r]] = n.lhs;
                  break;
                case "N":
                  delete i[n.path[r]];
              }
            } else
              switch (n.kind) {
                case "A":
                  m(e[t], n.index, n.item);
                  break;
                case "D":
                case "E":
                  e[t] = n.lhs;
                  break;
                case "N":
                  e = h(e, t);
              }
            return e;
          }
          function b(e, t, n) {
            if (e && t && n && n.kind) {
              var r,
                i,
                s = e;
              for (i = n.path.length - 1, r = 0; r < i; r++)
                "undefined" === typeof s[n.path[r]] && (s[n.path[r]] = {}),
                  (s = s[n.path[r]]);
              switch (n.kind) {
                case "A":
                  m(s[n.path[r]], n.index, n.item);
                  break;
                case "D":
                case "E":
                  s[n.path[r]] = n.lhs;
                  break;
                case "N":
                  delete s[n.path[r]];
              }
            }
          }
          function w(e, t, n) {
            e &&
              t &&
              p(e, t, function (r) {
                (n && !n(e, t, r)) || v(e, t, r);
              });
          }
          n(i, r),
            n(s, r),
            n(a, r),
            n(o, r),
            Object.defineProperties(_, {
              diff: { value: _, enumerable: !0 },
              orderIndependentDiff: { value: g, enumerable: !0 },
              observableDiff: { value: p, enumerable: !0 },
              orderIndependentObservableDiff: { value: d, enumerable: !0 },
              orderIndepHash: { value: f, enumerable: !0 },
              applyDiff: { value: w, enumerable: !0 },
              applyChange: { value: v, enumerable: !0 },
              revertChange: { value: b, enumerable: !0 },
              isConflict: {
                value: function () {
                  return "undefined" !== typeof $conflict;
                },
                enumerable: !0,
              },
            }),
            (_.DeepDiff = _),
            e && (e.DeepDiff = _);
          return _;
        })(i);
        void 0 ===
          (r = function () {
            return a;
          }.call(t, n, t, e)) || (e.exports = r);
      })(this);
    },
    610648: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(452364),
        s = [
          function () {},
          function (e, t, n, r) {
            if (r === t.length) throw new Error("Ran out of data");
            var i = t[r];
            (e[n] = i), (e[n + 1] = i), (e[n + 2] = i), (e[n + 3] = 255);
          },
          function (e, t, n, r) {
            if (r + 1 >= t.length) throw new Error("Ran out of data");
            var i = t[r];
            (e[n] = i), (e[n + 1] = i), (e[n + 2] = i), (e[n + 3] = t[r + 1]);
          },
          function (e, t, n, r) {
            if (r + 2 >= t.length) throw new Error("Ran out of data");
            (e[n] = t[r]),
              (e[n + 1] = t[r + 1]),
              (e[n + 2] = t[r + 2]),
              (e[n + 3] = 255);
          },
          function (e, t, n, r) {
            if (r + 3 >= t.length) throw new Error("Ran out of data");
            (e[n] = t[r]),
              (e[n + 1] = t[r + 1]),
              (e[n + 2] = t[r + 2]),
              (e[n + 3] = t[r + 3]);
          },
        ],
        a = [
          function () {},
          function (e, t, n, r) {
            var i = t[0];
            (e[n] = i), (e[n + 1] = i), (e[n + 2] = i), (e[n + 3] = r);
          },
          function (e, t, n) {
            var r = t[0];
            (e[n] = r), (e[n + 1] = r), (e[n + 2] = r), (e[n + 3] = t[1]);
          },
          function (e, t, n, r) {
            (e[n] = t[0]), (e[n + 1] = t[1]), (e[n + 2] = t[2]), (e[n + 3] = r);
          },
          function (e, t, n) {
            (e[n] = t[0]),
              (e[n + 1] = t[1]),
              (e[n + 2] = t[2]),
              (e[n + 3] = t[3]);
          },
        ];
      function o(e, t, n, r, i, a) {
        for (var o = e.width, h = e.height, l = e.index, u = 0; u < h; u++)
          for (var f = 0; f < o; f++) {
            var c = n(f, u, l);
            s[r](t, i, c, a), (a += r);
          }
        return a;
      }
      function h(e, t, n, r, i, s) {
        for (var o = e.width, h = e.height, l = e.index, u = 0; u < h; u++) {
          for (var f = 0; f < o; f++) {
            var c = i.get(r),
              p = n(f, u, l);
            a[r](t, c, p, s);
          }
          i.resetAfterLine();
        }
      }
      t.dataToBitMap = function (e, t) {
        var n,
          s = t.width,
          a = t.height,
          l = t.depth,
          u = t.bpp,
          f = t.interlace;
        if (8 !== l)
          var c = (function (e, t) {
            var n = [],
              r = 0;
            function i() {
              if (r === e.length) throw new Error("Ran out of data");
              var i,
                s,
                a,
                o,
                h,
                l,
                u,
                f,
                c = e[r];
              switch ((r++, t)) {
                default:
                  throw new Error("unrecognised depth");
                case 16:
                  (u = e[r]), r++, n.push((c << 8) + u);
                  break;
                case 4:
                  (u = 15 & c), (f = c >> 4), n.push(f, u);
                  break;
                case 2:
                  (h = 3 & c),
                    (l = (c >> 2) & 3),
                    (u = (c >> 4) & 3),
                    (f = (c >> 6) & 3),
                    n.push(f, u, l, h);
                  break;
                case 1:
                  (i = 1 & c),
                    (s = (c >> 1) & 1),
                    (a = (c >> 2) & 1),
                    (o = (c >> 3) & 1),
                    (h = (c >> 4) & 1),
                    (l = (c >> 5) & 1),
                    (u = (c >> 6) & 1),
                    (f = (c >> 7) & 1),
                    n.push(f, u, l, h, o, a, s, i);
              }
            }
            return {
              get: function (e) {
                for (; n.length < e; ) i();
                var t = n.slice(0, e);
                return (n = n.slice(e)), t;
              },
              resetAfterLine: function () {
                n.length = 0;
              },
              end: function () {
                if (r !== e.length) throw new Error("extra data found");
              },
            };
          })(e, l);
        n = l <= 8 ? new r(s * a * 4) : new Uint16Array(s * a * 4);
        var p,
          d,
          _ = Math.pow(2, l) - 1,
          g = 0;
        if (f) (p = i.getImagePasses(s, a)), (d = i.getInterlaceIterator(s, a));
        else {
          var y = 0;
          (d = function () {
            var e = y;
            return (y += 4), e;
          }),
            (p = [{ width: s, height: a }]);
        }
        for (var v = 0; v < p.length; v++)
          8 === l ? (g = o(p[v], n, d, u, e, g)) : h(p[v], n, d, u, c, _);
        if (8 === l) {
          if (g !== e.length) throw new Error("extra data found");
        } else c.end();
        return n;
      };
    },
    408178: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(926835);
      e.exports = function (e, t, n, s) {
        var a =
          -1 !==
          [i.COLORTYPE_COLOR_ALPHA, i.COLORTYPE_ALPHA].indexOf(s.colorType);
        if (s.colorType === s.inputColorType) {
          var o = (function () {
            var e = new ArrayBuffer(2);
            return (
              new DataView(e).setInt16(0, 256, !0), 256 !== new Int16Array(e)[0]
            );
          })();
          if (8 === s.bitDepth || (16 === s.bitDepth && o)) return e;
        }
        var h = 16 !== s.bitDepth ? e : new Uint16Array(e.buffer),
          l = 255,
          u = i.COLORTYPE_TO_BPP_MAP[s.inputColorType];
        4 !== u || s.inputHasAlpha || (u = 3);
        var f = i.COLORTYPE_TO_BPP_MAP[s.colorType];
        16 === s.bitDepth && ((l = 65535), (f *= 2));
        var c = new r(t * n * f),
          p = 0,
          d = 0,
          _ = s.bgColor || {};
        function g() {
          var e,
            t,
            n,
            r = l;
          switch (s.inputColorType) {
            case i.COLORTYPE_COLOR_ALPHA:
              (r = h[p + 3]), (e = h[p]), (t = h[p + 1]), (n = h[p + 2]);
              break;
            case i.COLORTYPE_COLOR:
              (e = h[p]), (t = h[p + 1]), (n = h[p + 2]);
              break;
            case i.COLORTYPE_ALPHA:
              (r = h[p + 1]), (t = e = h[p]), (n = e);
              break;
            case i.COLORTYPE_GRAYSCALE:
              (t = e = h[p]), (n = e);
              break;
            default:
              throw new Error(
                "input color type:" +
                  s.inputColorType +
                  " is not supported at present"
              );
          }
          return (
            s.inputHasAlpha &&
              (a ||
                ((r /= l),
                (e = Math.min(
                  Math.max(Math.round((1 - r) * _.red + r * e), 0),
                  l
                )),
                (t = Math.min(
                  Math.max(Math.round((1 - r) * _.green + r * t), 0),
                  l
                )),
                (n = Math.min(
                  Math.max(Math.round((1 - r) * _.blue + r * n), 0),
                  l
                )))),
            { red: e, green: t, blue: n, alpha: r }
          );
        }
        void 0 === _.red && (_.red = l),
          void 0 === _.green && (_.green = l),
          void 0 === _.blue && (_.blue = l);
        for (var y = 0; y < n; y++)
          for (var v = 0; v < t; v++) {
            var m = g();
            switch (s.colorType) {
              case i.COLORTYPE_COLOR_ALPHA:
              case i.COLORTYPE_COLOR:
                8 === s.bitDepth
                  ? ((c[d] = m.red),
                    (c[d + 1] = m.green),
                    (c[d + 2] = m.blue),
                    a && (c[d + 3] = m.alpha))
                  : (c.writeUInt16BE(m.red, d),
                    c.writeUInt16BE(m.green, d + 2),
                    c.writeUInt16BE(m.blue, d + 4),
                    a && c.writeUInt16BE(m.alpha, d + 6));
                break;
              case i.COLORTYPE_ALPHA:
              case i.COLORTYPE_GRAYSCALE:
                var b = (m.red + m.green + m.blue) / 3;
                8 === s.bitDepth
                  ? ((c[d] = b), a && (c[d + 1] = m.alpha))
                  : (c.writeUInt16BE(b, d),
                    a && c.writeUInt16BE(m.alpha, d + 2));
                break;
              default:
                throw new Error("unrecognised color Type " + s.colorType);
            }
            (p += u), (d += f);
          }
        return c;
      };
    },
    983979: function (e, t, n) {
      "use strict";
      var r = n(127061),
        i = n(830816).Buffer,
        s = n(971323),
        a = n(504957),
        o = (e.exports = function () {
          a.call(this),
            (this._buffers = []),
            (this._buffered = 0),
            (this._reads = []),
            (this._paused = !1),
            (this._encoding = "utf8"),
            (this.writable = !0);
        });
      s.inherits(o, a),
        (o.prototype.read = function (e, t) {
          this._reads.push({ length: Math.abs(e), allowLess: e < 0, func: t }),
            r.nextTick(
              function () {
                this._process(),
                  this._paused &&
                    this._reads.length > 0 &&
                    ((this._paused = !1), this.emit("drain"));
              }.bind(this)
            );
        }),
        (o.prototype.write = function (e, t) {
          return this.writable
            ? ((n = i.isBuffer(e) ? e : new i(e, t || this._encoding)),
              this._buffers.push(n),
              (this._buffered += n.length),
              this._process(),
              this._reads && 0 === this._reads.length && (this._paused = !0),
              this.writable && !this._paused)
            : (this.emit("error", new Error("Stream not writable")), !1);
          var n;
        }),
        (o.prototype.end = function (e, t) {
          e && this.write(e, t),
            (this.writable = !1),
            this._buffers &&
              (0 === this._buffers.length
                ? this._end()
                : (this._buffers.push(null), this._process()));
        }),
        (o.prototype.destroySoon = o.prototype.end),
        (o.prototype._end = function () {
          this._reads.length > 0 &&
            this.emit("error", new Error("Unexpected end of input")),
            this.destroy();
        }),
        (o.prototype.destroy = function () {
          this._buffers &&
            ((this.writable = !1),
            (this._reads = null),
            (this._buffers = null),
            this.emit("close"));
        }),
        (o.prototype._processReadAllowingLess = function (e) {
          this._reads.shift();
          var t = this._buffers[0];
          t.length > e.length
            ? ((this._buffered -= e.length),
              (this._buffers[0] = t.slice(e.length)),
              e.func.call(this, t.slice(0, e.length)))
            : ((this._buffered -= t.length),
              this._buffers.shift(),
              e.func.call(this, t));
        }),
        (o.prototype._processRead = function (e) {
          this._reads.shift();
          for (var t = 0, n = 0, r = new i(e.length); t < e.length; ) {
            var s = this._buffers[n++],
              a = Math.min(s.length, e.length - t);
            s.copy(r, t, 0, a),
              (t += a),
              a !== s.length && (this._buffers[--n] = s.slice(a));
          }
          n > 0 && this._buffers.splice(0, n),
            (this._buffered -= e.length),
            e.func.call(this, r);
        }),
        (o.prototype._process = function () {
          try {
            for (
              ;
              this._buffered > 0 && this._reads && this._reads.length > 0;

            ) {
              var e = this._reads[0];
              if (e.allowLess) this._processReadAllowingLess(e);
              else {
                if (!(this._buffered >= e.length)) break;
                this._processRead(e);
              }
            }
            this._buffers && !this.writable && this._end();
          } catch (t) {
            this.emit("error", t);
          }
        });
    },
    926835: function (e) {
      "use strict";
      e.exports = {
        PNG_SIGNATURE: [137, 80, 78, 71, 13, 10, 26, 10],
        TYPE_IHDR: 1229472850,
        TYPE_IEND: 1229278788,
        TYPE_IDAT: 1229209940,
        TYPE_PLTE: 1347179589,
        TYPE_tRNS: 1951551059,
        TYPE_gAMA: 1732332865,
        COLORTYPE_GRAYSCALE: 0,
        COLORTYPE_PALETTE: 1,
        COLORTYPE_COLOR: 2,
        COLORTYPE_ALPHA: 4,
        COLORTYPE_PALETTE_COLOR: 3,
        COLORTYPE_COLOR_ALPHA: 6,
        COLORTYPE_TO_BPP_MAP: { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 },
        GAMMA_DIVISION: 1e5,
      };
    },
    614115: function (e) {
      "use strict";
      var t = [];
      !(function () {
        for (var e = 0; e < 256; e++) {
          for (var n = e, r = 0; r < 8; r++)
            1 & n ? (n = 3988292384 ^ (n >>> 1)) : (n >>>= 1);
          t[e] = n;
        }
      })();
      var n = (e.exports = function () {
        this._crc = -1;
      });
      (n.prototype.write = function (e) {
        for (var n = 0; n < e.length; n++)
          this._crc = t[255 & (this._crc ^ e[n])] ^ (this._crc >>> 8);
        return !0;
      }),
        (n.prototype.crc32 = function () {
          return -1 ^ this._crc;
        }),
        (n.crc32 = function (e) {
          for (var n = -1, r = 0; r < e.length; r++)
            n = t[255 & (n ^ e[r])] ^ (n >>> 8);
          return -1 ^ n;
        });
    },
    503854: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(905023);
      var s = {
          0: function (e, t, n, r, i) {
            for (var s = 0; s < n; s++) r[i + s] = e[t + s];
          },
          1: function (e, t, n, r, i, s) {
            for (var a = 0; a < n; a++) {
              var o = a >= s ? e[t + a - s] : 0,
                h = e[t + a] - o;
              r[i + a] = h;
            }
          },
          2: function (e, t, n, r, i) {
            for (var s = 0; s < n; s++) {
              var a = t > 0 ? e[t + s - n] : 0,
                o = e[t + s] - a;
              r[i + s] = o;
            }
          },
          3: function (e, t, n, r, i, s) {
            for (var a = 0; a < n; a++) {
              var o = a >= s ? e[t + a - s] : 0,
                h = t > 0 ? e[t + a - n] : 0,
                l = e[t + a] - ((o + h) >> 1);
              r[i + a] = l;
            }
          },
          4: function (e, t, n, r, s, a) {
            for (var o = 0; o < n; o++) {
              var h = o >= a ? e[t + o - a] : 0,
                l = t > 0 ? e[t + o - n] : 0,
                u = t > 0 && o >= a ? e[t + o - (n + a)] : 0,
                f = e[t + o] - i(h, l, u);
              r[s + o] = f;
            }
          },
        },
        a = {
          0: function (e, t, n) {
            for (var r = 0, i = t + n, s = t; s < i; s++) r += Math.abs(e[s]);
            return r;
          },
          1: function (e, t, n, r) {
            for (var i = 0, s = 0; s < n; s++) {
              var a = s >= r ? e[t + s - r] : 0,
                o = e[t + s] - a;
              i += Math.abs(o);
            }
            return i;
          },
          2: function (e, t, n) {
            for (var r = 0, i = t + n, s = t; s < i; s++) {
              var a = t > 0 ? e[s - n] : 0,
                o = e[s] - a;
              r += Math.abs(o);
            }
            return r;
          },
          3: function (e, t, n, r) {
            for (var i = 0, s = 0; s < n; s++) {
              var a = s >= r ? e[t + s - r] : 0,
                o = t > 0 ? e[t + s - n] : 0,
                h = e[t + s] - ((a + o) >> 1);
              i += Math.abs(h);
            }
            return i;
          },
          4: function (e, t, n, r) {
            for (var s = 0, a = 0; a < n; a++) {
              var o = a >= r ? e[t + a - r] : 0,
                h = t > 0 ? e[t + a - n] : 0,
                l = t > 0 && a >= r ? e[t + a - (n + r)] : 0,
                u = e[t + a] - i(o, h, l);
              s += Math.abs(u);
            }
            return s;
          },
        };
      e.exports = function (e, t, n, i, o) {
        var h;
        if ("filterType" in i && -1 !== i.filterType) {
          if ("number" !== typeof i.filterType)
            throw new Error("unrecognised filter types");
          h = [i.filterType];
        } else h = [0, 1, 2, 3, 4];
        16 === i.bitDepth && (o *= 2);
        for (
          var l = t * o, u = 0, f = 0, c = new r((l + 1) * n), p = h[0], d = 0;
          d < n;
          d++
        ) {
          if (h.length > 1)
            for (var _ = 1 / 0, g = 0; g < h.length; g++) {
              var y = a[h[g]](e, f, l, o);
              y < _ && ((p = h[g]), (_ = y));
            }
          (c[u] = p), u++, s[p](e, f, l, c, u, o), (u += l), (f += l);
        }
        return c;
      };
    },
    327287: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(971323),
        s = n(983979),
        a = n(947279),
        o = (e.exports = function (e) {
          s.call(this);
          var t = [],
            n = this;
          (this._filter = new a(e, {
            read: this.read.bind(this),
            write: function (e) {
              t.push(e);
            },
            complete: function () {
              n.emit("complete", r.concat(t));
            },
          })),
            this._filter.start();
        });
      i.inherits(o, s);
    },
    955032: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(694029),
        s = n(947279);
      t.process = function (e, t) {
        var n = [],
          a = new i(e);
        return (
          new s(t, {
            read: a.read.bind(a),
            write: function (e) {
              n.push(e);
            },
            complete: function () {},
          }).start(),
          a.process(),
          r.concat(n)
        );
      };
    },
    947279: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(452364),
        s = n(905023);
      function a(e, t, n) {
        var r = e * t;
        return 8 !== n && (r = Math.ceil(r / (8 / n))), r;
      }
      var o = (e.exports = function (e, t) {
        var n = e.width,
          r = e.height,
          s = e.interlace,
          o = e.bpp,
          h = e.depth;
        if (
          ((this.read = t.read),
          (this.write = t.write),
          (this.complete = t.complete),
          (this._imageIndex = 0),
          (this._images = []),
          s)
        )
          for (var l = i.getImagePasses(n, r), u = 0; u < l.length; u++)
            this._images.push({
              byteWidth: a(l[u].width, o, h),
              height: l[u].height,
              lineIndex: 0,
            });
        else
          this._images.push({ byteWidth: a(n, o, h), height: r, lineIndex: 0 });
        this._xComparison = 8 === h ? o : 16 === h ? 2 * o : 1;
      });
      (o.prototype.start = function () {
        this.read(
          this._images[this._imageIndex].byteWidth + 1,
          this._reverseFilterLine.bind(this)
        );
      }),
        (o.prototype._unFilterType1 = function (e, t, n) {
          for (var r = this._xComparison, i = r - 1, s = 0; s < n; s++) {
            var a = e[1 + s],
              o = s > i ? t[s - r] : 0;
            t[s] = a + o;
          }
        }),
        (o.prototype._unFilterType2 = function (e, t, n) {
          for (var r = this._lastLine, i = 0; i < n; i++) {
            var s = e[1 + i],
              a = r ? r[i] : 0;
            t[i] = s + a;
          }
        }),
        (o.prototype._unFilterType3 = function (e, t, n) {
          for (
            var r = this._xComparison, i = r - 1, s = this._lastLine, a = 0;
            a < n;
            a++
          ) {
            var o = e[1 + a],
              h = s ? s[a] : 0,
              l = a > i ? t[a - r] : 0,
              u = Math.floor((l + h) / 2);
            t[a] = o + u;
          }
        }),
        (o.prototype._unFilterType4 = function (e, t, n) {
          for (
            var r = this._xComparison, i = r - 1, a = this._lastLine, o = 0;
            o < n;
            o++
          ) {
            var h = e[1 + o],
              l = a ? a[o] : 0,
              u = o > i ? t[o - r] : 0,
              f = o > i && a ? a[o - r] : 0,
              c = s(u, l, f);
            t[o] = h + c;
          }
        }),
        (o.prototype._reverseFilterLine = function (e) {
          var t,
            n = e[0],
            i = this._images[this._imageIndex],
            s = i.byteWidth;
          if (0 === n) t = e.slice(1, s + 1);
          else
            switch (((t = new r(s)), n)) {
              case 1:
                this._unFilterType1(e, t, s);
                break;
              case 2:
                this._unFilterType2(e, t, s);
                break;
              case 3:
                this._unFilterType3(e, t, s);
                break;
              case 4:
                this._unFilterType4(e, t, s);
                break;
              default:
                throw new Error("Unrecognised filter type - " + n);
            }
          this.write(t),
            i.lineIndex++,
            i.lineIndex >= i.height
              ? ((this._lastLine = null),
                this._imageIndex++,
                (i = this._images[this._imageIndex]))
              : (this._lastLine = t),
            i
              ? this.read(i.byteWidth + 1, this._reverseFilterLine.bind(this))
              : ((this._lastLine = null), this.complete());
        });
    },
    404183: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer;
      e.exports = function (e, t) {
        var n = t.depth,
          i = t.width,
          s = t.height,
          a = t.colorType,
          o = t.transColor,
          h = t.palette,
          l = e;
        return (
          3 === a
            ? (function (e, t, n, r, i) {
                for (var s = 0, a = 0; a < r; a++)
                  for (var o = 0; o < n; o++) {
                    var h = i[e[s]];
                    if (!h)
                      throw new Error("index " + e[s] + " not in palette");
                    for (var l = 0; l < 4; l++) t[s + l] = h[l];
                    s += 4;
                  }
              })(e, l, i, s, h)
            : (o &&
                (function (e, t, n, r, i) {
                  for (var s = 0, a = 0; a < r; a++)
                    for (var o = 0; o < n; o++) {
                      var h = !1;
                      if (
                        (1 === i.length
                          ? i[0] === e[s] && (h = !0)
                          : i[0] === e[s] &&
                            i[1] === e[s + 1] &&
                            i[2] === e[s + 2] &&
                            (h = !0),
                        h)
                      )
                        for (var l = 0; l < 4; l++) t[s + l] = 0;
                      s += 4;
                    }
                })(e, l, i, s, o),
              8 !== n &&
                (16 === n && (l = new r(i * s * 4)),
                (function (e, t, n, r, i) {
                  for (var s = Math.pow(2, i) - 1, a = 0, o = 0; o < r; o++)
                    for (var h = 0; h < n; h++) {
                      for (var l = 0; l < 4; l++)
                        t[a + l] = Math.floor((255 * e[a + l]) / s + 0.5);
                      a += 4;
                    }
                })(e, l, i, s, n))),
          l
        );
      };
    },
    452364: function (e, t) {
      "use strict";
      var n = [
        { x: [0], y: [0] },
        { x: [4], y: [0] },
        { x: [0, 4], y: [4] },
        { x: [2, 6], y: [0, 4] },
        { x: [0, 2, 4, 6], y: [2, 6] },
        { x: [1, 3, 5, 7], y: [0, 2, 4, 6] },
        { x: [0, 1, 2, 3, 4, 5, 6, 7], y: [1, 3, 5, 7] },
      ];
      (t.getImagePasses = function (e, t) {
        for (
          var r = [],
            i = e % 8,
            s = t % 8,
            a = (e - i) / 8,
            o = (t - s) / 8,
            h = 0;
          h < n.length;
          h++
        ) {
          for (
            var l = n[h], u = a * l.x.length, f = o * l.y.length, c = 0;
            c < l.x.length && l.x[c] < i;
            c++
          )
            u++;
          for (c = 0; c < l.y.length && l.y[c] < s; c++) f++;
          u > 0 && f > 0 && r.push({ width: u, height: f, index: h });
        }
        return r;
      }),
        (t.getInterlaceIterator = function (e) {
          return function (t, r, i) {
            var s = t % n[i].x.length,
              a = ((t - s) / n[i].x.length) * 8 + n[i].x[s],
              o = r % n[i].y.length;
            return 4 * a + (((r - o) / n[i].y.length) * 8 + n[i].y[o]) * e * 4;
          };
        });
    },
    993171: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(971323),
        s = n(504957),
        a = n(926835),
        o = n(298700),
        h = (e.exports = function (e) {
          s.call(this);
          var t = e || {};
          (this._packer = new o(t)),
            (this._deflate = this._packer.createDeflate()),
            (this.readable = !0);
        });
      i.inherits(h, s),
        (h.prototype.pack = function (e, t, n, i) {
          this.emit("data", new r(a.PNG_SIGNATURE)),
            this.emit("data", this._packer.packIHDR(t, n)),
            i && this.emit("data", this._packer.packGAMA(i));
          var s = this._packer.filterData(e, t, n);
          this._deflate.on("error", this.emit.bind(this, "error")),
            this._deflate.on(
              "data",
              function (e) {
                this.emit("data", this._packer.packIDAT(e));
              }.bind(this)
            ),
            this._deflate.on(
              "end",
              function () {
                this.emit("data", this._packer.packIEND()), this.emit("end");
              }.bind(this)
            ),
            this._deflate.end(s);
        });
    },
    35576: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = !0,
        s = n(546864);
      s.deflateSync || (i = !1);
      var a = n(926835),
        o = n(298700);
      e.exports = function (e, t) {
        if (!i)
          throw new Error(
            "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0"
          );
        var n = new o(t || {}),
          h = [];
        h.push(new r(a.PNG_SIGNATURE)),
          h.push(n.packIHDR(e.width, e.height)),
          e.gamma && h.push(n.packGAMA(e.gamma));
        var l = n.filterData(e.data, e.width, e.height),
          u = s.deflateSync(l, n.getDeflateOptions());
        if (((l = null), !u || !u.length))
          throw new Error("bad png - invalid compressed data response");
        return h.push(n.packIDAT(u)), h.push(n.packIEND()), r.concat(h);
      };
    },
    298700: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(926835),
        s = n(614115),
        a = n(408178),
        o = n(503854),
        h = n(546864),
        l = (e.exports = function (e) {
          if (
            ((this._options = e),
            (e.deflateChunkSize = e.deflateChunkSize || 32768),
            (e.deflateLevel = null != e.deflateLevel ? e.deflateLevel : 9),
            (e.deflateStrategy =
              null != e.deflateStrategy ? e.deflateStrategy : 3),
            (e.inputHasAlpha = null == e.inputHasAlpha || e.inputHasAlpha),
            (e.deflateFactory = e.deflateFactory || h.createDeflate),
            (e.bitDepth = e.bitDepth || 8),
            (e.colorType =
              "number" === typeof e.colorType
                ? e.colorType
                : i.COLORTYPE_COLOR_ALPHA),
            (e.inputColorType =
              "number" === typeof e.inputColorType
                ? e.inputColorType
                : i.COLORTYPE_COLOR_ALPHA),
            -1 ===
              [
                i.COLORTYPE_GRAYSCALE,
                i.COLORTYPE_COLOR,
                i.COLORTYPE_COLOR_ALPHA,
                i.COLORTYPE_ALPHA,
              ].indexOf(e.colorType))
          )
            throw new Error(
              "option color type:" +
                e.colorType +
                " is not supported at present"
            );
          if (
            -1 ===
            [
              i.COLORTYPE_GRAYSCALE,
              i.COLORTYPE_COLOR,
              i.COLORTYPE_COLOR_ALPHA,
              i.COLORTYPE_ALPHA,
            ].indexOf(e.inputColorType)
          )
            throw new Error(
              "option input color type:" +
                e.inputColorType +
                " is not supported at present"
            );
          if (8 !== e.bitDepth && 16 !== e.bitDepth)
            throw new Error(
              "option bit depth:" + e.bitDepth + " is not supported at present"
            );
        });
      (l.prototype.getDeflateOptions = function () {
        return {
          chunkSize: this._options.deflateChunkSize,
          level: this._options.deflateLevel,
          strategy: this._options.deflateStrategy,
        };
      }),
        (l.prototype.createDeflate = function () {
          return this._options.deflateFactory(this.getDeflateOptions());
        }),
        (l.prototype.filterData = function (e, t, n) {
          var r = a(e, t, n, this._options),
            s = i.COLORTYPE_TO_BPP_MAP[this._options.colorType];
          return o(r, t, n, this._options, s);
        }),
        (l.prototype._packChunk = function (e, t) {
          var n = t ? t.length : 0,
            i = new r(n + 12);
          return (
            i.writeUInt32BE(n, 0),
            i.writeUInt32BE(e, 4),
            t && t.copy(i, 8),
            i.writeInt32BE(s.crc32(i.slice(4, i.length - 4)), i.length - 4),
            i
          );
        }),
        (l.prototype.packGAMA = function (e) {
          var t = new r(4);
          return (
            t.writeUInt32BE(Math.floor(e * i.GAMMA_DIVISION), 0),
            this._packChunk(i.TYPE_gAMA, t)
          );
        }),
        (l.prototype.packIHDR = function (e, t) {
          var n = new r(13);
          return (
            n.writeUInt32BE(e, 0),
            n.writeUInt32BE(t, 4),
            (n[8] = this._options.bitDepth),
            (n[9] = this._options.colorType),
            (n[10] = 0),
            (n[11] = 0),
            (n[12] = 0),
            this._packChunk(i.TYPE_IHDR, n)
          );
        }),
        (l.prototype.packIDAT = function (e) {
          return this._packChunk(i.TYPE_IDAT, e);
        }),
        (l.prototype.packIEND = function () {
          return this._packChunk(i.TYPE_IEND, null);
        });
    },
    905023: function (e) {
      "use strict";
      e.exports = function (e, t, n) {
        var r = e + t - n,
          i = Math.abs(r - e),
          s = Math.abs(r - t),
          a = Math.abs(r - n);
        return i <= s && i <= a ? e : s <= a ? t : n;
      };
    },
    874409: function (e, t, n) {
      "use strict";
      var r = n(971323),
        i = n(546864),
        s = n(983979),
        a = n(327287),
        o = n(229713),
        h = n(610648),
        l = n(404183),
        u = (e.exports = function (e) {
          s.call(this),
            (this._parser = new o(e, {
              read: this.read.bind(this),
              error: this._handleError.bind(this),
              metadata: this._handleMetaData.bind(this),
              gamma: this.emit.bind(this, "gamma"),
              palette: this._handlePalette.bind(this),
              transColor: this._handleTransColor.bind(this),
              finished: this._finished.bind(this),
              inflateData: this._inflateData.bind(this),
              simpleTransparency: this._simpleTransparency.bind(this),
              headersFinished: this._headersFinished.bind(this),
            })),
            (this._options = e),
            (this.writable = !0),
            this._parser.start();
        });
      r.inherits(u, s),
        (u.prototype._handleError = function (e) {
          this.emit("error", e),
            (this.writable = !1),
            this.destroy(),
            this._inflate && this._inflate.destroy && this._inflate.destroy(),
            this._filter &&
              (this._filter.destroy(),
              this._filter.on("error", function () {})),
            (this.errord = !0);
        }),
        (u.prototype._inflateData = function (e) {
          if (!this._inflate)
            if (this._bitmapInfo.interlace)
              (this._inflate = i.createInflate()),
                this._inflate.on("error", this.emit.bind(this, "error")),
                this._filter.on("complete", this._complete.bind(this)),
                this._inflate.pipe(this._filter);
            else {
              var t =
                  (1 +
                    ((this._bitmapInfo.width *
                      this._bitmapInfo.bpp *
                      this._bitmapInfo.depth +
                      7) >>
                      3)) *
                  this._bitmapInfo.height,
                n = Math.max(t, i.Z_MIN_CHUNK);
              this._inflate = i.createInflate({ chunkSize: n });
              var r = t,
                s = this.emit.bind(this, "error");
              this._inflate.on("error", function (e) {
                r && s(e);
              }),
                this._filter.on("complete", this._complete.bind(this));
              var a = this._filter.write.bind(this._filter);
              this._inflate.on("data", function (e) {
                r &&
                  (e.length > r && (e = e.slice(0, r)), (r -= e.length), a(e));
              }),
                this._inflate.on("end", this._filter.end.bind(this._filter));
            }
          this._inflate.write(e);
        }),
        (u.prototype._handleMetaData = function (e) {
          (this._metaData = e),
            (this._bitmapInfo = Object.create(e)),
            (this._filter = new a(this._bitmapInfo));
        }),
        (u.prototype._handleTransColor = function (e) {
          this._bitmapInfo.transColor = e;
        }),
        (u.prototype._handlePalette = function (e) {
          this._bitmapInfo.palette = e;
        }),
        (u.prototype._simpleTransparency = function () {
          this._metaData.alpha = !0;
        }),
        (u.prototype._headersFinished = function () {
          this.emit("metadata", this._metaData);
        }),
        (u.prototype._finished = function () {
          this.errord ||
            (this._inflate
              ? this._inflate.end()
              : this.emit("error", "No Inflate block"),
            this.destroySoon());
        }),
        (u.prototype._complete = function (e) {
          if (!this.errord) {
            try {
              var t = h.dataToBitMap(e, this._bitmapInfo),
                n = l(t, this._bitmapInfo);
              t = null;
            } catch (r) {
              return void this._handleError(r);
            }
            this.emit("parsed", n);
          }
        });
    },
    873259: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = !0,
        s = n(546864),
        a = n(368621);
      s.deflateSync || (i = !1);
      var o = n(694029),
        h = n(955032),
        l = n(229713),
        u = n(610648),
        f = n(404183);
      e.exports = function (e, t) {
        if (!i)
          throw new Error(
            "To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0"
          );
        var n, c, p;
        var d = [];
        var _ = new o(e),
          g = new l(t, {
            read: _.read.bind(_),
            error: function (e) {
              n = e;
            },
            metadata: function (e) {
              c = e;
            },
            gamma: function (e) {
              p = e;
            },
            palette: function (e) {
              c.palette = e;
            },
            transColor: function (e) {
              c.transColor = e;
            },
            inflateData: function (e) {
              d.push(e);
            },
            simpleTransparency: function () {
              c.alpha = !0;
            },
          });
        if ((g.start(), _.process(), n)) throw n;
        var y,
          v = r.concat(d);
        if (((d.length = 0), c.interlace)) y = s.inflateSync(v);
        else {
          var m = (1 + ((c.width * c.bpp * c.depth + 7) >> 3)) * c.height;
          y = a(v, { chunkSize: m, maxLength: m });
        }
        if (((v = null), !y || !y.length))
          throw new Error("bad png - invalid inflate data response");
        var b = h.process(y, c);
        v = null;
        var w = u.dataToBitMap(b, c);
        b = null;
        var k = f(w, c);
        return (c.data = k), (c.gamma = p || 0), c;
      };
    },
    229713: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(926835),
        s = n(614115),
        a = (e.exports = function (e, t) {
          (this._options = e),
            (e.checkCRC = !1 !== e.checkCRC),
            (this._hasIHDR = !1),
            (this._hasIEND = !1),
            (this._emittedHeadersFinished = !1),
            (this._palette = []),
            (this._colorType = 0),
            (this._chunks = {}),
            (this._chunks[i.TYPE_IHDR] = this._handleIHDR.bind(this)),
            (this._chunks[i.TYPE_IEND] = this._handleIEND.bind(this)),
            (this._chunks[i.TYPE_IDAT] = this._handleIDAT.bind(this)),
            (this._chunks[i.TYPE_PLTE] = this._handlePLTE.bind(this)),
            (this._chunks[i.TYPE_tRNS] = this._handleTRNS.bind(this)),
            (this._chunks[i.TYPE_gAMA] = this._handleGAMA.bind(this)),
            (this.read = t.read),
            (this.error = t.error),
            (this.metadata = t.metadata),
            (this.gamma = t.gamma),
            (this.transColor = t.transColor),
            (this.palette = t.palette),
            (this.parsed = t.parsed),
            (this.inflateData = t.inflateData),
            (this.finished = t.finished),
            (this.simpleTransparency = t.simpleTransparency),
            (this.headersFinished = t.headersFinished || function () {});
        });
      (a.prototype.start = function () {
        this.read(i.PNG_SIGNATURE.length, this._parseSignature.bind(this));
      }),
        (a.prototype._parseSignature = function (e) {
          for (var t = i.PNG_SIGNATURE, n = 0; n < t.length; n++)
            if (e[n] !== t[n])
              return void this.error(new Error("Invalid file signature"));
          this.read(8, this._parseChunkBegin.bind(this));
        }),
        (a.prototype._parseChunkBegin = function (e) {
          for (
            var t = e.readUInt32BE(0), n = e.readUInt32BE(4), a = "", o = 4;
            o < 8;
            o++
          )
            a += String.fromCharCode(e[o]);
          var h = Boolean(32 & e[4]);
          if (this._hasIHDR || n === i.TYPE_IHDR) {
            if (
              ((this._crc = new s()),
              this._crc.write(new r(a)),
              this._chunks[n])
            )
              return this._chunks[n](t);
            h
              ? this.read(t + 4, this._skipChunk.bind(this))
              : this.error(new Error("Unsupported critical chunk type " + a));
          } else this.error(new Error("Expected IHDR on beggining"));
        }),
        (a.prototype._skipChunk = function () {
          this.read(8, this._parseChunkBegin.bind(this));
        }),
        (a.prototype._handleChunkEnd = function () {
          this.read(4, this._parseChunkEnd.bind(this));
        }),
        (a.prototype._parseChunkEnd = function (e) {
          var t = e.readInt32BE(0),
            n = this._crc.crc32();
          this._options.checkCRC && n !== t
            ? this.error(new Error("Crc error - " + t + " - " + n))
            : this._hasIEND || this.read(8, this._parseChunkBegin.bind(this));
        }),
        (a.prototype._handleIHDR = function (e) {
          this.read(e, this._parseIHDR.bind(this));
        }),
        (a.prototype._parseIHDR = function (e) {
          this._crc.write(e);
          var t = e.readUInt32BE(0),
            n = e.readUInt32BE(4),
            r = e[8],
            s = e[9],
            a = e[10],
            o = e[11],
            h = e[12];
          if (8 === r || 4 === r || 2 === r || 1 === r || 16 === r)
            if (s in i.COLORTYPE_TO_BPP_MAP)
              if (0 === a)
                if (0 === o)
                  if (0 === h || 1 === h) {
                    this._colorType = s;
                    var l = i.COLORTYPE_TO_BPP_MAP[this._colorType];
                    (this._hasIHDR = !0),
                      this.metadata({
                        width: t,
                        height: n,
                        depth: r,
                        interlace: Boolean(h),
                        palette: Boolean(s & i.COLORTYPE_PALETTE),
                        color: Boolean(s & i.COLORTYPE_COLOR),
                        alpha: Boolean(s & i.COLORTYPE_ALPHA),
                        bpp: l,
                        colorType: s,
                      }),
                      this._handleChunkEnd();
                  } else this.error(new Error("Unsupported interlace method"));
                else this.error(new Error("Unsupported filter method"));
              else this.error(new Error("Unsupported compression method"));
            else this.error(new Error("Unsupported color type"));
          else this.error(new Error("Unsupported bit depth " + r));
        }),
        (a.prototype._handlePLTE = function (e) {
          this.read(e, this._parsePLTE.bind(this));
        }),
        (a.prototype._parsePLTE = function (e) {
          this._crc.write(e);
          for (var t = Math.floor(e.length / 3), n = 0; n < t; n++)
            this._palette.push([e[3 * n], e[3 * n + 1], e[3 * n + 2], 255]);
          this.palette(this._palette), this._handleChunkEnd();
        }),
        (a.prototype._handleTRNS = function (e) {
          this.simpleTransparency(), this.read(e, this._parseTRNS.bind(this));
        }),
        (a.prototype._parseTRNS = function (e) {
          if (
            (this._crc.write(e), this._colorType === i.COLORTYPE_PALETTE_COLOR)
          ) {
            if (0 === this._palette.length)
              return void this.error(
                new Error("Transparency chunk must be after palette")
              );
            if (e.length > this._palette.length)
              return void this.error(
                new Error("More transparent colors than palette size")
              );
            for (var t = 0; t < e.length; t++) this._palette[t][3] = e[t];
            this.palette(this._palette);
          }
          this._colorType === i.COLORTYPE_GRAYSCALE &&
            this.transColor([e.readUInt16BE(0)]),
            this._colorType === i.COLORTYPE_COLOR &&
              this.transColor([
                e.readUInt16BE(0),
                e.readUInt16BE(2),
                e.readUInt16BE(4),
              ]),
            this._handleChunkEnd();
        }),
        (a.prototype._handleGAMA = function (e) {
          this.read(e, this._parseGAMA.bind(this));
        }),
        (a.prototype._parseGAMA = function (e) {
          this._crc.write(e),
            this.gamma(e.readUInt32BE(0) / i.GAMMA_DIVISION),
            this._handleChunkEnd();
        }),
        (a.prototype._handleIDAT = function (e) {
          this._emittedHeadersFinished ||
            ((this._emittedHeadersFinished = !0), this.headersFinished()),
            this.read(-e, this._parseIDAT.bind(this, e));
        }),
        (a.prototype._parseIDAT = function (e, t) {
          if (
            (this._crc.write(t),
            this._colorType === i.COLORTYPE_PALETTE_COLOR &&
              0 === this._palette.length)
          )
            throw new Error("Expected palette not found");
          this.inflateData(t);
          var n = e - t.length;
          n > 0 ? this._handleIDAT(n) : this._handleChunkEnd();
        }),
        (a.prototype._handleIEND = function (e) {
          this.read(e, this._parseIEND.bind(this));
        }),
        (a.prototype._parseIEND = function (e) {
          this._crc.write(e),
            (this._hasIEND = !0),
            this._handleChunkEnd(),
            this.finished && this.finished();
        });
    },
    614083: function (e, t, n) {
      "use strict";
      var r = n(873259),
        i = n(35576);
      (t.read = function (e, t) {
        return r(e, t || {});
      }),
        (t.write = function (e, t) {
          return i(e, t);
        });
    },
    139788: function (e, t, n) {
      "use strict";
      var r = n(830816).Buffer,
        i = n(127061),
        s = n(971323),
        a = n(504957),
        o = n(874409),
        h = n(993171),
        l = n(614083),
        u = (t.PNG = function (e) {
          a.call(this),
            (e = e || {}),
            (this.width = 0 | e.width),
            (this.height = 0 | e.height),
            (this.data =
              this.width > 0 && this.height > 0
                ? new r(4 * this.width * this.height)
                : null),
            e.fill && this.data && this.data.fill(0),
            (this.gamma = 0),
            (this.readable = this.writable = !0),
            (this._parser = new o(e)),
            this._parser.on("error", this.emit.bind(this, "error")),
            this._parser.on("close", this._handleClose.bind(this)),
            this._parser.on("metadata", this._metadata.bind(this)),
            this._parser.on("gamma", this._gamma.bind(this)),
            this._parser.on(
              "parsed",
              function (e) {
                (this.data = e), this.emit("parsed", e);
              }.bind(this)
            ),
            (this._packer = new h(e)),
            this._packer.on("data", this.emit.bind(this, "data")),
            this._packer.on("end", this.emit.bind(this, "end")),
            this._parser.on("close", this._handleClose.bind(this)),
            this._packer.on("error", this.emit.bind(this, "error"));
        });
      s.inherits(u, a),
        (u.sync = l),
        (u.prototype.pack = function () {
          return this.data && this.data.length
            ? (i.nextTick(
                function () {
                  this._packer.pack(
                    this.data,
                    this.width,
                    this.height,
                    this.gamma
                  );
                }.bind(this)
              ),
              this)
            : (this.emit("error", "No data provided"), this);
        }),
        (u.prototype.parse = function (e, t) {
          var n, r;
          t &&
            ((n = function (e) {
              this.removeListener("error", r), (this.data = e), t(null, this);
            }.bind(this)),
            (r = function (e) {
              this.removeListener("parsed", n), t(e, null);
            }.bind(this)),
            this.once("parsed", n),
            this.once("error", r));
          return this.end(e), this;
        }),
        (u.prototype.write = function (e) {
          return this._parser.write(e), !0;
        }),
        (u.prototype.end = function (e) {
          this._parser.end(e);
        }),
        (u.prototype._metadata = function (e) {
          (this.width = e.width),
            (this.height = e.height),
            this.emit("metadata", e);
        }),
        (u.prototype._gamma = function (e) {
          this.gamma = e;
        }),
        (u.prototype._handleClose = function () {
          this._parser.writable || this._packer.readable || this.emit("close");
        }),
        (u.bitblt = function (e, t, n, r, i, s, a, o) {
          if (
            ((r |= 0),
            (i |= 0),
            (s |= 0),
            (a |= 0),
            (o |= 0),
            (n |= 0) > e.width ||
              r > e.height ||
              n + i > e.width ||
              r + s > e.height)
          )
            throw new Error("bitblt reading outside image");
          if (
            a > t.width ||
            o > t.height ||
            a + i > t.width ||
            o + s > t.height
          )
            throw new Error("bitblt writing outside image");
          for (var h = 0; h < s; h++)
            e.data.copy(
              t.data,
              ((o + h) * t.width + a) << 2,
              ((r + h) * e.width + n) << 2,
              ((r + h) * e.width + n + i) << 2
            );
        }),
        (u.prototype.bitblt = function (e, t, n, r, i, s, a) {
          return u.bitblt(this, e, t, n, r, i, s, a), this;
        }),
        (u.adjustGamma = function (e) {
          if (e.gamma) {
            for (var t = 0; t < e.height; t++)
              for (var n = 0; n < e.width; n++)
                for (var r = (e.width * t + n) << 2, i = 0; i < 3; i++) {
                  var s = e.data[r + i] / 255;
                  (s = Math.pow(s, 1 / 2.2 / e.gamma)),
                    (e.data[r + i] = Math.round(255 * s));
                }
            e.gamma = 0;
          }
        }),
        (u.prototype.adjustGamma = function () {
          u.adjustGamma(this);
        });
    },
    368621: function (e, t, n) {
      "use strict";
      var r = n(127061),
        i = n(830816).Buffer,
        s = n(939619).ok,
        a = n(546864),
        o = n(971323),
        h = n(830816).kMaxLength;
      function l(e) {
        if (!(this instanceof l)) return new l(e);
        e && e.chunkSize < a.Z_MIN_CHUNK && (e.chunkSize = a.Z_MIN_CHUNK),
          a.Inflate.call(this, e),
          (this._offset =
            void 0 === this._offset ? this._outOffset : this._offset),
          (this._buffer = this._buffer || this._outBuffer),
          e && null != e.maxLength && (this._maxLength = e.maxLength);
      }
      function u(e, t) {
        t && r.nextTick(t),
          e._handle && (e._handle.close(), (e._handle = null));
      }
      function f(e, t) {
        return (function (e, t) {
          if (("string" === typeof t && (t = i.from(t)), !(t instanceof i)))
            throw new TypeError("Not a string or buffer");
          var n = e._finishFlushFlag;
          return null == n && (n = a.Z_FINISH), e._processChunk(t, n);
        })(new l(t), e);
      }
      (l.prototype._processChunk = function (e, t, n) {
        if ("function" === typeof n)
          return a.Inflate._processChunk.call(this, e, t, n);
        var r,
          o = this,
          l = e && e.length,
          f = this._chunkSize - this._offset,
          c = this._maxLength,
          p = 0,
          d = [],
          _ = 0;
        function g(e, t) {
          if (!o._hadError) {
            var n = f - t;
            if ((s(n >= 0, "have should not go down"), n > 0)) {
              var r = o._buffer.slice(o._offset, o._offset + n);
              if (
                ((o._offset += n),
                r.length > c && (r = r.slice(0, c)),
                d.push(r),
                (_ += r.length),
                0 === (c -= r.length))
              )
                return !1;
            }
            return (
              (0 === t || o._offset >= o._chunkSize) &&
                ((f = o._chunkSize),
                (o._offset = 0),
                (o._buffer = i.allocUnsafe(o._chunkSize))),
              0 === t && ((p += l - e), (l = e), !0)
            );
          }
        }
        this.on("error", function (e) {
          r = e;
        }),
          s(this._handle, "zlib binding closed");
        do {
          var y = this._handle.writeSync(
            t,
            e,
            p,
            l,
            this._buffer,
            this._offset,
            f
          );
          y = y || this._writeState;
        } while (!this._hadError && g(y[0], y[1]));
        if (this._hadError) throw r;
        if (_ >= h)
          throw (
            (u(this),
            new RangeError(
              "Cannot create final Buffer. It would be larger than 0x" +
                h.toString(16) +
                " bytes"
            ))
          );
        var v = i.concat(d, _);
        return u(this), v;
      }),
        o.inherits(l, a.Inflate),
        (e.exports = t = f),
        (t.Inflate = l),
        (t.createInflate = function (e) {
          return new l(e);
        }),
        (t.inflateSync = f);
    },
    694029: function (e) {
      "use strict";
      var t = (e.exports = function (e) {
        (this._buffer = e), (this._reads = []);
      });
      (t.prototype.read = function (e, t) {
        this._reads.push({ length: Math.abs(e), allowLess: e < 0, func: t });
      }),
        (t.prototype.process = function () {
          for (; this._reads.length > 0 && this._buffer.length; ) {
            var e = this._reads[0];
            if (
              !this._buffer.length ||
              !(this._buffer.length >= e.length || e.allowLess)
            )
              break;
            this._reads.shift();
            var t = this._buffer;
            (this._buffer = t.slice(e.length)),
              e.func.call(this, t.slice(0, e.length));
          }
          return this._reads.length > 0
            ? new Error(
                "There are some read requests waitng on finished stream"
              )
            : this._buffer.length > 0
            ? new Error("unrecognised content at end of stream")
            : void 0;
        });
    },
    505940: function (e, t, n) {
      "use strict";
      n.d(t, {
        VC: function () {
          return l;
        },
      });
      var r = n(413735),
        i = n(585912),
        s = {
          isHistory: (e) =>
            (0, r.P)(e) &&
            Array.isArray(e.redos) &&
            Array.isArray(e.undos) &&
            (0 === e.redos.length || i.OX.isOperationList(e.redos[0])) &&
            (0 === e.undos.length || i.OX.isOperationList(e.undos[0])),
        },
        a = (new WeakMap(), new WeakMap()),
        o = new WeakMap(),
        h = {
          isHistoryEditor: (e) => s.isHistory(e.history) && i.ML.isEditor(e),
          isMerging: (e) => o.get(e),
          isSaving: (e) => a.get(e),
          redo(e) {
            e.redo();
          },
          undo(e) {
            e.undo();
          },
          withoutMerging(e, t) {
            var n = h.isMerging(e);
            o.set(e, !1), t(), o.set(e, n);
          },
          withoutSaving(e, t) {
            var n = h.isSaving(e);
            a.set(e, !1), t(), a.set(e, n);
          },
        },
        l = (e) => {
          var t = e,
            { apply: n } = t;
          return (
            (t.history = { undos: [], redos: [] }),
            (t.redo = () => {
              var { history: e } = t,
                { redos: n } = e;
              if (n.length > 0) {
                var r = n[n.length - 1];
                h.withoutSaving(t, () => {
                  i.ML.withoutNormalizing(t, () => {
                    for (var e of r) t.apply(e);
                  });
                }),
                  e.redos.pop(),
                  e.undos.push(r);
              }
            }),
            (t.undo = () => {
              var { history: e } = t,
                { undos: n } = e;
              if (n.length > 0) {
                var r = n[n.length - 1];
                h.withoutSaving(t, () => {
                  i.ML.withoutNormalizing(t, () => {
                    var e = r.map(i.OX.inverse).reverse();
                    for (var n of e) t.apply(n);
                  });
                }),
                  e.redos.push(r),
                  e.undos.pop();
              }
            }),
            (t.apply = (e) => {
              var { operations: r, history: i } = t,
                { undos: s } = i,
                a = s[s.length - 1],
                o = a && a[a.length - 1],
                l = c(e, o),
                d = h.isSaving(t),
                _ = h.isMerging(t);
              if ((null == d && (d = f(e)), d)) {
                if (
                  (null == _ &&
                    (_ = null != a && (0 !== r.length || u(e, o) || l)),
                  a && _)
                )
                  l && a.pop(), a.push(e);
                else {
                  var g = [e];
                  s.push(g);
                }
                for (; s.length > 100; ) s.shift();
                p(e) && (i.redos = []);
              }
              n(e);
            }),
            t
          );
        },
        u = (e, t) =>
          "set_selection" === e.type ||
          !(
            !t ||
            "insert_text" !== e.type ||
            "insert_text" !== t.type ||
            e.offset !== t.offset + t.text.length ||
            !i.y$.equals(e.path, t.path)
          ) ||
          !(
            !t ||
            "remove_text" !== e.type ||
            "remove_text" !== t.type ||
            e.offset + e.text.length !== t.offset ||
            !i.y$.equals(e.path, t.path)
          ),
        f = (e, t) =>
          "set_selection" !== e.type ||
          (null != e.properties && null != e.newProperties),
        c = (e, t) =>
          !(!t || "set_selection" !== e.type || "set_selection" !== t.type),
        p = (e) => "set_selection" !== e.type;
    },
  },
]);
