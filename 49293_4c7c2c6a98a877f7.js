"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [49293],
  {
    513473: function (e, t, n) {
      t.Hm = void 0;
      var o,
        s = n(854358),
        i = n(963494),
        r = n(673793),
        a = (o = n(298784)) && o.__esModule ? o : { default: o },
        l = n(810755);
      const d = "__FIELD_ID_DELIMITER__/",
        c = (e, t) => {
          let n = 0,
            o = 0;
          for (let s = 0; s < e.responses.length; s++) {
            const o = t.responses[s],
              i = e.responses[s];
            if (!n && o.step_id !== i.step_id) {
              n = s;
              break;
            }
          }
          if (n)
            for (let i = e.responses.length - 1; i > n; i--) {
              if (
                e.responses[i].type === s.InteractionStepType.MultiTurnContinue
              ) {
                o = i;
                break;
              }
            }
          if (n || o) {
            const s = a.default.cloneDeep(e.responses);
            s.splice(n, o - n + 1);
            for (let e = n; e < t.responses.length; e++) s[e].index = e;
            return s;
          }
          return e.responses;
        };
      function u({
        stepType: e,
        responseIndex: t,
        fieldId: n,
        candidateIndex: o,
        likertValue: s,
      }) {
        const i = (() => {
            if (!n) return;
            const e = n.split(d);
            return 2 === e.length ? e[1] : void 0;
          })(),
          r = i ? ` | Field: ${i}` : "";
        return void 0 !== o
          ? `${e} | #Response: ${t + 1} | #Candidate: ${o + 1}${
              s ? ` | Rating: ${s}` : ""
            }${r}`
          : `${e} | #Response: ${t + 1}${r}`;
      }
      function f({
        stepType: e,
        responseIndex: t,
        label: n,
        start: o,
        end: s,
      }) {
        return `${e} | #Response: ${
          t + 1
        } | Label: ${n} | Start: ${o} | End: ${s}`;
      }
      async function p(e, t, n, o, d) {
        let c = d ? h(e) : y(e);
        const f = d ? h(o) : y(o);
        f &&
          (c = (function (e, t) {
            const n = a.default.cloneDeep(e),
              o = [];
            for (const [s, r] of Object.entries(t.annotations))
              r.type === i.TextCollectionFieldType.Boolean &&
                o.push({ fieldId: s, annotation: r });
            for (const s of o)
              Object.keys(n.annotations).includes(s.fieldId) ||
                !1 !== s.annotation.response[0] ||
                (n.annotations[s.fieldId] = s.annotation);
            return n;
          })(c, f));
        return (await r.textCollectionTransformFn(c, t, n, f)).map((e) => {
          const t = e.frames[0].chatTaskAnnotationMetadata;
          l.assertDefined(t);
          const n = u({
              stepType: d
                ? s.InteractionStepType.TextCollectionPerResponse
                : s.InteractionStepType.TextCollection,
              fieldId: e.frames[0].field_id,
              ...t,
            }),
            o = (() => {
              let e = "";
              return (
                a.default.isNil(t.responseIndex) || (e += `${t.responseIndex}`),
                a.default.isNil(t.candidateIndex) ||
                  (e += `/${t.candidateIndex}`),
                a.default.isNil(t.originalFieldId) ||
                  (e += `/${t.originalFieldId}`),
                e
              );
            })();
          return {
            props: { ...e.props, label: n, id: o },
            frames: a.default.fromPairs(
              Object.entries(e.frames).map(([e, n]) => [
                e,
                {
                  ...n,
                  chatTaskAnnotationMetadata: t,
                  chatGraderAnnotationType: "textcollection",
                },
              ])
            ),
          };
        });
      }
      function y(e) {
        if (!e) return;
        const t = { annotations: {} };
        for (const n of e.responses) {
          const e = n.index;
          if (
            n.contextType !== s.ContextType.Skipped &&
            (n.type === s.InteractionStepType.TextCollection ||
              n.type === s.InteractionStepType.QualityMeasurement)
          ) {
            const o = a.default.fromPairs(
              Object.entries(n.context.response.annotations)
                .filter(
                  ([e, t]) => t.type !== i.TextCollectionFieldType.FieldSet
                )
                .map(([t, o]) => {
                  const s = `${e}/${d}${t}`;
                  return [
                    s,
                    {
                      ...o,
                      field_id: s,
                      chatTaskAnnotationMetadata: {
                        stepId: n.step_id,
                        responseIndex: e,
                        originalFieldId: t,
                      },
                    },
                  ];
                })
            );
            Object.assign(t.annotations, o);
          }
        }
        return t;
      }
      function h(e) {
        if (!e) return;
        const t = { annotations: {} };
        for (const n of e.responses) {
          const e = n.index;
          n.type === s.InteractionStepType.TextCollectionPerResponse &&
            Object.entries(n.context.annotations).forEach(([o, s]) => {
              const r =
                  n.context.candidates.find((e) => e.id === o)?.index ?? -1,
                l = a.default.fromPairs(
                  Object.entries(s.annotations)
                    .filter(
                      ([e, t]) => t.type !== i.TextCollectionFieldType.FieldSet
                    )
                    .map(([t, o]) => {
                      const s = `${e}/${r}/${d}${t}`;
                      return [
                        s,
                        {
                          ...o,
                          field_id: s,
                          chatTaskAnnotationMetadata: {
                            stepId: n.step_id,
                            responseIndex: e,
                            candidateIndex: r,
                            originalFieldId: t,
                          },
                        },
                      ];
                    })
                );
              Object.assign(t.annotations, l);
            });
        }
        return t;
      }
      t.Hm = (e) => {
        if (e) {
          switch (e.chatGraderAnnotationType) {
            case "textcollection":
              return e.response?.[0]?.given;
            case "namedentityrecognition":
              return e.text;
            case "model-response-selector":
              return x(e);
            case "processsupervision":
              return e.rating;
            case "model-response-ranking":
              return e.rankings;
          }
          return e.response ? e.response : void 0;
        }
      };
      const x = (e) => {
        if (!e) return;
        if (-1 === e.selectedIndex) return;
        const t =
          void 0 !== e.likertValueRaw ? `, Score: ${e.likertValueRaw}` : "";
        return `${
          void 0 !== e.selectedIndex
            ? `Response ${e.selectedIndex + 1}`
            : e.selectedId
        }${t}`;
      };
    },
    952302: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getTextCollectionGraderDiffResponse =
          t.getFieldDefinitionsWithFieldSet =
          t.getFieldDefinitions =
          t.matchFieldSetResponseArray =
          t.compareFieldSet =
          t.compareFieldSets =
          t.compareUnitField =
          t.compareUnitFields =
            void 0);
      var o = u(n(298784)),
        s = n(222357),
        i = n(889794),
        r = n(963494),
        a = n(934788),
        l = u(n(952256)),
        d = n(764848),
        c = n(918397);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const f = ["name"],
        p = ["option_name", "item_name"],
        y = ["category_menu_hours"],
        h = (e) => {
          if (e.type === r.TextCollectionFieldType.FieldSet)
            return e.response.map((e) =>
              ((e) => {
                const t = o.default.sortBy(Object.entries(e), "field_id");
                for (const [s, i] of t)
                  if (
                    i.type === r.TextCollectionFieldType.Text &&
                    o.default.some(f, (e) => s.toLowerCase().endsWith(e))
                  )
                    return o.default.sortBy(i.response).join("-");
                const [, n] = t[0];
                return h(n).join("-");
              })(e)
            );
          if (e.type === r.TextCollectionFieldType.Datetime) {
            return o.default
              .sortBy(e.response, ["year", "month", "day", "hour", "minute"])
              .map(
                (e) => `${e.year}-${e.month}-${e.day}-${e.hour}-${e.minute}`
              );
          }
          return o.default.sortBy(e.response).map((e) => String(e));
        },
        x = (e, t) => {
          let n = 0,
            s = 0,
            r = 0,
            a = 0;
          const l = [];
          o.default.map(t, (e, t) => {
            i.isUnitFieldAnnotation(e) && !y.includes(t) && l.push(t);
          });
          for (const o of l) {
            const i = t[o],
              l = e[o];
            if (void 0 === l) continue;
            const {
              distance: d,
              maxDistance: c,
              isName: u,
              noCriticalOverlap: f,
            } = m(l, i);
            if (u && f) return 10;
            u ? ((n = d), (s = c)) : ((r += d), (a = c));
          }
          const d = a ? r / a : 0,
            c = s ? n / s : 0;
          return a && s ? o.default.mean([c, d]) : a ? d : s ? c : 0;
        };
      t.compareUnitFields = x;
      const m = (e, t) => {
        let n = 0,
          s = 0,
          i = !1;
        const c =
          t.type === r.TextCollectionFieldType.Text &&
          o.default.some(f, (e) => t.field_id.toLowerCase().endsWith(e));
        if (c) {
          const o = e.response?.[0] || "",
            r = t.response?.[0] || "",
            a = o
              ?.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""),
            c = r
              ?.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
          if (p.includes(t.field_id)) {
            const e = d.gradeFreeText(a, c, d.TextComparisonMethod.TokenIOU);
            i = !!e.totalWork && 0 === e.correctWork;
          }
          (n = l.default(a, c) / Math.max(a.length, c.length)), (s = 1);
        } else {
          const o = h(t),
            i = h(e);
          a.redundantIou(o, i) < 0.5 && (n = 1), (s = 1);
        }
        return { distance: n, maxDistance: s, isName: c, noCriticalOverlap: i };
      };
      t.compareUnitField = m;
      const g = (e, t) => {
        let n = 0,
          s = 0;
        const r = [];
        return (
          o.default.map(t, (e, t) => {
            i.isFieldSetAnnotation(e) && r.push(t);
          }),
          o.default.map(r, (o) => {
            const i = t[o],
              r = e[o];
            if (void 0 === r || 0 === i.response.length) return;
            const { distance: a, maxDistance: l } = T(r, i);
            (n += a), (s += l);
          }),
          s ? n / s : 0
        );
      };
      t.compareFieldSets = g;
      const T = (e, t) => {
        const n = F(e.response, t.response),
          s = o.default.filter(
            n,
            (e) => !!e.givenAnnotation && !!e.expectedAnnotation
          ),
          i = o.default.filter(n, (e) => !e.givenAnnotation);
        return {
          distance: 1 - s.length / (s.length + i.length),
          maxDistance: 1,
        };
      };
      t.compareFieldSet = T;
      const F = (e, t, n, s, i, r) => {
        const a = [],
          l = o.default.cloneDeep(e);
        if (1 === e.length && 1 === t.length)
          return [{ givenAnnotation: e[0], expectedAnnotation: t[0] }];
        const d = o.default.flatten(
            l.map((e, a) =>
              t.map((t, l) => {
                const d = ((e, t, n = !1, s = !1, i = !1) => {
                  if (s) return 1 - +n;
                  if (0 === Object.entries(t).length) return 1;
                  let r = 0,
                    a = 0;
                  const l = [];
                  return (
                    (r = x(e, t)),
                    l.push(r),
                    i && ((a = g(e, t)), l.push(a)),
                    o.default.mean(l) - 0.2 * +n
                  );
                })(e, t, !!n?.[a] && n?.[a] === s?.[l], !!i, !!r);
                return { i: a, j: l, distance: d };
              })
            )
          ),
          c = o.default.sortBy(d, "distance"),
          u = {},
          f = {};
        c.forEach(({ i: e, j: t, distance: n }) => {
          if (e in u || t in f || n > 0.7) return;
          const o = { distance: n };
          (u[e] = { idx: t, metadata: o }), (f[t] = { idx: e, metadata: o });
        });
        const p = [];
        t.map((e, t) => {
          const n = f?.[t]?.idx;
          if (void 0 !== n) {
            const t = l[n];
            p.push(n), a.push({ givenAnnotation: t, expectedAnnotation: e });
          } else a.push({ givenAnnotation: void 0, expectedAnnotation: e });
        }),
          o.default.pullAt(l, p);
        for (const o of l)
          a.push({ givenAnnotation: o, expectedAnnotation: void 0 });
        return a;
      };
      t.matchFieldSetResponseArray = F;
      const A = (e, t, n) => {
          const o = [];
          if (i.isFieldSetAnnotation(e))
            for (const i of e.response) {
              const e = {};
              for (const [o, s] of Object.entries(i)) e[o] = A(s, t, n);
              t === s.GraderResult.Extraneous
                ? o.push({ result: t, given: e })
                : o.push({ result: t, expected: e });
            }
          else
            for (const i of e.response)
              t === s.GraderResult.Extraneous
                ? o.push({ result: t, given: i })
                : o.push({ result: t, expected: i });
          const a =
            e.type === r.TextCollectionFieldType.AttachmentUpload
              ? { type: e.type, field_id: e.field_id, response: o }
              : e.type === r.TextCollectionFieldType.TranscriptionText
              ? {
                  field_id: e.field_id,
                  type: e.type,
                  response: o,
                  tags: e.tags,
                }
              : { field_id: e.field_id, type: e.type, response: o };
          return (
            e.fieldWasReadOnly && (a.fieldWasReadOnly = e.fieldWasReadOnly),
            e.chatTaskAnnotationMetadata &&
              (a.chatTaskAnnotationMetadata = e.chatTaskAnnotationMetadata),
            v(a, n),
            a
          );
        },
        _ = (e) => e.map((e) => (e ?? "").trim().replace(/\s+/g, " ")),
        C = (e, t, n) => {
          if (i.isFieldSetAnnotation(t))
            return ((e, t, n) => {
              const o = [],
                i = F(
                  e.response,
                  t.response,
                  e.uuids,
                  t.uuids,
                  n?.context?.useOnlyUuids,
                  !0
                );
              for (const r of i) {
                const e = r.givenAnnotation,
                  t = r.expectedAnnotation,
                  i = R(e, t, n);
                void 0 === e
                  ? o.push({ result: s.GraderResult.Missing, expected: i })
                  : void 0 === t
                  ? o.push({ result: s.GraderResult.Extraneous, given: i })
                  : o.push({
                      result: s.GraderResult.Matched,
                      given: i,
                      hasCorrectChildren: !0,
                    });
              }
              return {
                field_id: t.field_id,
                type: r.TextCollectionFieldType.FieldSet,
                response: o,
              };
            })(e, t, n);
          if (i.isUnitFieldAnnotation(t)) {
            const o = ((e, t) => {
              const n = [],
                o =
                  e.type === r.TextCollectionFieldType.Text ||
                  e.type === r.TextCollectionFieldType.Autocomplete
                    ? _(e.response)
                    : e.response,
                i =
                  t.type === r.TextCollectionFieldType.Text ||
                  t.type === r.TextCollectionFieldType.Autocomplete
                    ? _(t.response)
                    : t.response;
              for (const r of a.redundantIntersection(o, i))
                n.push({ result: s.GraderResult.Correct, given: r });
              const l = a.redundantDifference(i, o),
                d = a.redundantDifference(o, i),
                c = Math.min(l.length, d.length);
              for (let r = 0; r < c; ++r)
                n.push({
                  result: s.GraderResult.Incorrect,
                  given: d[r],
                  expected: l[r],
                });
              l
                .slice(c)
                .forEach((e) =>
                  n.push({ result: s.GraderResult.Missing, expected: e })
                ),
                d
                  .slice(c)
                  .forEach((e) =>
                    n.push({ result: s.GraderResult.Extraneous, given: e })
                  );
              const u =
                t.type === r.TextCollectionFieldType.TranscriptionText
                  ? {
                      field_id: t.field_id,
                      type: t.type,
                      response: n,
                      tags: t.tags,
                    }
                  : { field_id: t.field_id, type: t.type, response: n };
              return (
                t.fieldWasReadOnly && (u.fieldWasReadOnly = t.fieldWasReadOnly),
                e.chatTaskAnnotationMetadata &&
                  (u.chatTaskAnnotationMetadata = e.chatTaskAnnotationMetadata),
                u
              );
            })(e, t);
            return v(o, n.fieldDefinitions), o;
          }
          return { field_id: "rlhf_history", type: t.type, response: [] };
        },
        v = (e, t) => {
          if (e.type === r.TextCollectionFieldType.Category && t[e.field_id]) {
            const n = t[e.field_id];
            for (const t of e.response) {
              const e = t;
              (e.categoryMetadata = { given: {}, expected: {} }),
                (e.result !== s.GraderResult.Correct &&
                  e.result !== s.GraderResult.Incorrect &&
                  e.result !== s.GraderResult.Extraneous) ||
                  (e.categoryMetadata.given = c.getAllCategoryFullPathLabels(
                    n.choices,
                    e.given
                  )),
                (e.result !== s.GraderResult.Missing &&
                  e.result !== s.GraderResult.Incorrect) ||
                  (e.categoryMetadata.expected = c.getAllCategoryFullPathLabels(
                    n.choices,
                    e.expected
                  ));
            }
          }
        },
        b = (e, t) => {
          switch (t) {
            case "all_fields":
              return e;
            case "no_field":
              return {};
            default:
              return o.default.fromPairs(
                Object.entries(e).filter(([e]) => t.includes(e))
              );
          }
        },
        R = (e, t, n) => {
          const {
              matchedAnnotations: o,
              missingAnnotations: i,
              extraneousAnnotations: r,
            } = ((e, t) => {
              if (void 0 === e && void 0 === t)
                return {
                  missingAnnotations: {},
                  extraneousAnnotations: {},
                  matchedAnnotations: {},
                };
              if (void 0 === e)
                return {
                  missingAnnotations: t,
                  extraneousAnnotations: {},
                  matchedAnnotations: {},
                };
              if (void 0 === t)
                return {
                  missingAnnotations: {},
                  extraneousAnnotations: e,
                  matchedAnnotations: {},
                };
              {
                const n = Object.keys(e),
                  o = Object.keys(t),
                  s = {},
                  i = {},
                  r = {};
                for (const l of a.redundantIntersection(n, o))
                  r[l] = { expectedAnnotation: t[l], givenAnnotation: e[l] };
                for (const t of a.redundantDifference(n, o)) i[t] = e[t];
                for (const e of a.redundantDifference(o, n)) s[e] = t[e];
                return {
                  missingAnnotations: s,
                  extraneousAnnotations: i,
                  matchedAnnotations: r,
                };
              }
            })(e, t),
            l = {};
          return (
            Object.entries(b(o, n.fieldFilter)).forEach(
              ([e, { givenAnnotation: t, expectedAnnotation: o }]) =>
                (l[e] = C(t, o, n))
            ),
            Object.entries(b(r, n.fieldFilter)).forEach(
              ([e, t]) =>
                (l[e] = A(t, s.GraderResult.Extraneous, n.fieldDefinitions))
            ),
            Object.entries(b(i, n.fieldFilter)).forEach(
              ([e, t]) =>
                (l[e] = A(t, s.GraderResult.Missing, n.fieldDefinitions))
            ),
            l
          );
        },
        I = (e) => {
          let t = !0;
          for (const [, n] of Object.entries(e))
            if (s.isFieldSetGraderAnnotation(n)) {
              let e = !0;
              for (const t of n.response)
                t.result === s.GraderResult.Matched
                  ? ((t.hasCorrectChildren = I(t.given)),
                    (e = e && t.hasCorrectChildren))
                  : (e = !1);
              t = t && e;
            } else
              t =
                t &&
                n.response.every((e) => e.result === s.GraderResult.Correct);
          return t;
        },
        M = (e) => {
          const t = {};
          for (const n of e)
            if (
              n.type === r.TextCollectionFieldType.FieldSet ||
              n.type === r.TextCollectionFieldType.Form
            ) {
              const e = M(n.fields);
              for (const [n, o] of Object.entries(e)) t[n] = o;
            } else t[n.field_id] = n;
          return t;
        };
      t.getFieldDefinitions = M;
      const $ = (e) => {
        const t = {};
        for (const n of e)
          if (n.type === r.TextCollectionFieldType.Form) {
            const e = $(n.fields);
            for (const [n, o] of Object.entries(e)) t[n] = o;
          } else t[n.field_id] = n;
        return t;
      };
      t.getFieldDefinitionsWithFieldSet = $;
      t.getTextCollectionGraderDiffResponse = (e, t, n) => {
        const o = {
          fieldDefinitions: M(n?.taskFields || []),
          fieldFilter:
            ((s = n?.fieldsWhitelist || []), 0 === s.length ? "all_fields" : s),
          context: n,
        };
        var s;
        const i = R(e.annotations, t.annotations, o);
        return I(i), { annotations: i };
      };
    },
    673793: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.textCollectionTransformFn = void 0);
      var o,
        s = (o = n(298784)) && o.__esModule ? o : { default: o },
        i = n(952302),
        r = n(963494),
        a = n(222357);
      const l = (e, t, n, o, i, d, c) => {
        if (n.type === r.TextCollectionFieldType.RLHFHistory) return [];
        if (n.type !== r.TextCollectionFieldType.FieldSet)
          return [
            {
              props: {
                label: e,
                id: t,
                parentGiven: d,
                grandParentGiven: c,
                textCollectionFieldType: n.type,
              },
              frames: { 0: n },
            },
          ];
        const u = [];
        return (
          n.response.forEach((e, n) => {
            let r = [];
            const c = e.result === a.GraderResult.Matched;
            e.result === a.GraderResult.Matched ||
            e.result === a.GraderResult.Extraneous
              ? (r = Object.entries(e.given))
              : e.result === a.GraderResult.Missing &&
                (r = Object.entries(e.expected));
            const f = s.default.flatMap(r, ([e, s]) =>
              l(e, `${t}/${n}/${e}`, s, o, i, c, d)
            );
            u.push(...f);
          }),
          u
        );
      };
      t.textCollectionTransformFn = async (e, t, n, o) => {
        if (!e) return [];
        const r = o || s.default.cloneDeep(e);
        return (async (e, t) =>
          s.default.flatMap(Object.entries(e.annotations), ([e, n], o) =>
            l(e, e, n, o, t, !0, !0)
          ))(i.getTextCollectionGraderDiffResponse(e, r, n), t);
      };
    },
    885748: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.depthFirstLabelsInheritAttributes = function e(t, n, o) {
          for (const s of t) {
            const t = s.attributes ? { ...o, ...s.attributes } : o,
              i = { name: s.name, attributes: t };
            if ((n.push(i), s.children)) {
              const o = e(s.children, n, t);
              n = [...o];
            }
          }
          return n;
        }),
        (t.depthFirstLabels = i),
        (t.mergeLabelAttributes = function (e) {
          const t = (function (e) {
              const t = new Map();
              for (const n of i(e)) {
                const e = t.get(n.name) ?? [];
                s.default.each(n.children, (o) => {
                  t.set(o.name, [...e, n]);
                });
              }
              return t;
            })(e),
            n = new Map();
          for (const o of i(e)) {
            const e = s.default.map(t.get(o.name), (e) => e.attributes),
              i = s.default.compact([...e, o.attributes]);
            n.set(o.name, s.default.assign({}, ...i));
          }
          return n;
        });
      var o,
        s = (o = n(298784)) && o.__esModule ? o : { default: o };
      function* i(e) {
        for (const t of e) yield t, t.children && (yield* i(t.children));
      }
    },
  },
]);
