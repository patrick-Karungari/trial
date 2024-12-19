"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [57881],
  {
    318814: function (n, t, e) {
      e.d(t, {
        vP: function () {
          return g;
        },
        rJ: function () {
          return T;
        },
        jP: function () {
          return S;
        },
      });
      var r = e(389401),
        i = e(338415),
        o = e(252708),
        u = e.n(o),
        l = e(637723),
        s = e(500718),
        a = e(298784),
        c = e.n(a),
        p = e(496206),
        f = e(599789);
      function y(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function d(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })
            )),
            r.forEach(function (t) {
              y(n, t, e[t]);
            });
        }
        return n;
      }
      function h(n, t, e, r, i) {
        var o;
        const { isCorp: l, isEditable: a } = i,
          y =
            s.SPLIT_TAXONOMY_PRODUCT_TYPES.includes(r.taskType) &&
            r.taskType === f.TaskType.MultiStage,
          h = n,
          m = c().keyBy(n, (n) => n._id),
          P = n.filter((n) => !n.parentTaxonomyId),
          v = c().orderBy(P, (n) => n.version, ["desc"]),
          g = 0 === v.length;
        var _;
        const T =
            null !==
              (_ = null === (o = v[0]) || void 0 === o ? void 0 : o.version) &&
            void 0 !== _
              ? _
              : 0,
          b = T - 1,
          S = {
            isSplitTaxonomy: y,
            projectInfo: r,
            allTaxonomies: h,
            taxIdToTaxonomy: m,
            sortedRootTaxonomies: v,
            projectHasNoTaxonomies: g,
            latestVersionNumber: T,
            numLegacyTaxonomies: t.length,
          },
          O = {},
          Z = {},
          k = {},
          N = {},
          j = {},
          C = {},
          I = {};
        if (g)
          return d({}, S, {
            taxIdToTaxonomy: m,
            taxIdToSortedInstructions: e,
            taxIdToTag: O,
            taxIdToActionPerms: Z,
            rootTaxIdToSortedSubtaxonomies: k,
            subtaxIdToDepth: N,
            instructionsIdToInstructions: j,
            instructionsIdToTag: C,
            instructionsIdToActionPerms: I,
          });
        if (
          (Object.values(e).forEach((n) => {
            n.forEach((n) => {
              const { _id: t, isPublished: e } = n;
              (j[t] = n),
                (I[t] = e
                  ? {
                      canBackfillTasks:
                        l &&
                        s.BACKFILL_SUPPORTED_TYPES.includes(r.taskType) &&
                        e,
                    }
                  : { canEdit: l && a, canPublish: l && a });
            });
            const t = n[0];
            t &&
              (t.isPublished
                ? u().error(
                    `The most recent instructions object ${t._id} is not in a draft state and is probably corrupted. This page may not work as intended`
                  )
                : (C[t._id] = p.Hg));
            const e = n[1];
            e &&
              (e.isPublished
                ? (C[e._id] = p.DZ)
                : u().error(
                    `The second most recent instructions object ${e._id} is not in a published state and is probably corrupted. This page may not work as intended`
                  ));
          }),
          !y)
        ) {
          const n = v[0],
            t = v[1];
          return (
            n &&
              (n.isCustomerPublished
                ? u().error(
                    `The most recent Tax ${n._id} is not in a draft state and is probably corrupted. This page may not work as intended`
                  )
                : (O[n._id] = p.hg)),
            t &&
              (t.isCustomerPublished
                ? (O[t._id] = p.rW)
                : u().error(
                    `The second most recent Tax ${t._id} is not in a published state and is probably corrupted. This page may not work as intended`
                  )),
            v.forEach(
              ({ _id: n, isCustomerPublished: i, version: o, taxonomy: u }) => {
                if (i) {
                  var p;
                  Z[n] = {
                    canDiff: !0,
                    canCreateInstructions:
                      l &&
                      o === b &&
                      !(null === (p = e[n]) || void 0 === p
                        ? void 0
                        : p.length),
                    canBackfillTasks:
                      l && s.BACKFILL_SUPPORTED_TYPES.includes(r.taskType),
                  };
                } else {
                  var f, y;
                  const r = Boolean(
                    t &&
                      (null === (f = e[t._id]) || void 0 === f
                        ? void 0
                        : f.length)
                  );
                  Z[n] = {
                    canDiff: !0,
                    canEdit: a,
                    canPublish: l && a && !c().isEmpty(u),
                    canInheritInstructions:
                      l &&
                      !(null === (y = e[n]) || void 0 === y
                        ? void 0
                        : y.length) &&
                      r,
                  };
                }
              }
            ),
            d({}, S, {
              taxIdToTaxonomy: m,
              taxIdToSortedInstructions: e,
              taxIdToTag: O,
              taxIdToActionPerms: Z,
              rootTaxIdToSortedSubtaxonomies: k,
              subtaxIdToDepth: N,
              instructionsIdToInstructions: j,
              instructionsIdToTag: C,
              instructionsIdToActionPerms: I,
            })
          );
        }
        return (
          v.forEach((t) => {
            const e = n.filter(
                (n) => !!n.parentTaxonomyId && n.version === t.version
              ),
              r = (function (n, t, e, r) {
                const i = [],
                  o = c().groupBy(t, (n) => n.parentTaxonomyId),
                  [u, l] = c().partition(
                    t.filter((t) => t._id !== n._id),
                    (n) => n.isInternal
                  ),
                  s = c().keyBy(u, "_id"),
                  a = new Set(u.map((n) => n._id));
                return (
                  l.forEach((n) => {
                    i.push(n), (e[n._id] = (0, p.uQ)(n)), (r[n._id] = 1);
                    const t = o[n._id];
                    t &&
                      t.forEach((n) => {
                        i.push(n),
                          (e[n._id] = (0, p.uQ)(n)),
                          (r[n._id] = 2),
                          a.delete(n._id);
                      });
                  }),
                  Array.from(a).forEach((n) => {
                    const t = s[n];
                    i.push(t), (e[t._id] = (0, p.uQ)(t)), (r[t._id] = 1);
                  }),
                  i
                );
              })(t, e, O, N);
            k[t._id] = r;
            const i = e.some((n) => n.isCommitted);
            (O[t._id] = (0, p.uQ)(d({}, t, { isCommitted: i, isRoot: !0 }))),
              (Z[t._id] = {
                canCreateSubtaxonomy: a && !t.isCustomerPublished,
                canInherit: a && !t.isCustomerPublished && !t.isCommitted,
                canPublish: a && t.version === T,
                canCreateInstructions:
                  l && t.isCustomerPublished && t.version === b,
              }),
              r.forEach((n) => {
                var t;
                Z[n._id] = {
                  canCreateInstructions:
                    l && n.isCustomerPublished && n.version === b,
                  canDiff: !0,
                  canEdit:
                    a &&
                    !n.isCommitted &&
                    ((n.isInternal && l) ||
                      (!n.isCustomerPublished && !n.isInternal)),
                  canInherit:
                    l &&
                    a &&
                    n.isCustomerPublished &&
                    !n.isCommitted &&
                    !n.isInternal,
                  canFork:
                    l &&
                    a &&
                    n.isCustomerPublished &&
                    !n.isCommitted &&
                    !n.isInternal,
                  canCommit:
                    l &&
                    a &&
                    (n.isInternal || n.isCustomerPublished) &&
                    !n.isCommitted,
                  canRecall: l && a && n.isCommitted,
                  canViewSrnHistory:
                    l &&
                    !!(null === (t = n.srnHistory) || void 0 === t
                      ? void 0
                      : t.length),
                };
              }),
              (Z[t._id].canCommitMultiple = r.every((n) => {
                var t;
                return null === (t = Z[n._id]) || void 0 === t
                  ? void 0
                  : t.canCommit;
              }));
          }),
          d({}, S, {
            taxIdToTaxonomy: m,
            taxIdToSortedInstructions: e,
            taxIdToTag: O,
            taxIdToActionPerms: Z,
            rootTaxIdToSortedSubtaxonomies: k,
            subtaxIdToDepth: N,
            instructionsIdToInstructions: j,
            instructionsIdToTag: C,
            instructionsIdToActionPerms: I,
          })
        );
      }
      var m = e(864592);
      function P(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function v(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              P(o, r, i, u, l, "next", n);
            }
            function l(n) {
              P(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function g(n) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = v(function* (n) {
          try {
            return yield (0,
            m.W)(`internal/instructions/assignment/${n}`, { method: "GET" });
          } catch (t) {
            u().error("Failed to get instructions for assignment: " + t);
          }
        })).apply(this, arguments);
      }
      function T(n) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = v(function* (n) {
          try {
            return yield (0,
            m.W)(`internal/taxonomy?id=${n}`, { method: "GET" });
          } catch (t) {
            u().error("Taxonomy not found", { timeout: "none" });
          }
        })).apply(this, arguments);
      }
      function S({
        projectInfo: n,
        isCorp: t,
        isEditable: e,
        customerCanViewInstructions: o,
      }) {
        const u = null === n || void 0 === n ? void 0 : n._id,
          s = (0, r.a)({
            queryKey: ["AVTaxonomy", "byProject", { projectId: u }],
            queryFn: v(function* () {
              if (!u) return null;
              const { taxonomies: r, taxIdToSortedInstructions: i } = yield (0,
              m.W)(`internal/taxonomies?projectId=${u}&withInstructions`);
              return h(
                r,
                yield (0, m.W)(`internal/taxonomies/legacy?projectId=${u}`),
                null !== i && void 0 !== i ? i : {},
                n,
                { isCorp: t, isEditable: e, customerCanViewInstructions: o }
              );
            }),
            refetchOnWindowFocus: !1,
          }),
          a = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* (n) {
                return yield (0,
                m.W)("internal/taxonomies", { method: "POST", body: n });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          c = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({
                taxonomyBody: n,
                taxonomyId: t,
                withPendingApproval: e,
              }) {
                return yield (0, m.W)(`internal/taxonomies/${t}/draft`, {
                  method: "POST",
                  body: { taxonomyBody: n, withPendingApproval: e },
                });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          p = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyBody: n, taxonomyId: t }) {
                return yield (0,
                m.W)(`internal/taxonomies/${t}/proposal`, { method: "POST", body: { taxonomyBody: n } });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          f = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n, inheritTaxonomyIds: t }) {
                return yield (0,
                m.W)(`internal/taxonomies/${n}/inherit`, { method: "POST", body: { inheritTaxonomyIds: t } });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          y = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({
                taxonomyId: n,
                inheritTaxonomyIds: t,
                instructionsIdToCopy: e,
              }) {
                return yield (0, m.W)(`internal/taxonomies/${n}/publish`, {
                  method: "POST",
                  body: { inheritTaxonomyIds: t, instructionsIdToCopy: e },
                });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          d = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n, instructionsIdToCopy: t }) {
                return yield (0,
                m.W)(`internal/taxonomies/${n}/request_fe_approval`, { method: "POST", body: { instructionsIdToCopy: t } });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          P = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({
                sourceTaxonomyId: n,
                name: t,
                description: e,
              }) {
                return yield (0, m.W)(`internal/taxonomies/${n}/fork`, {
                  method: "POST",
                  body: { name: t, description: e },
                });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          g = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n }) {
                yield (0,
                m.W)(`internal/taxonomies/${n}/commit`, { method: "POST" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          _ = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n }) {
                yield (0,
                m.W)(`internal/taxonomies/${n}/recall`, { method: "POST" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          T = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n, description: t }) {
                yield (0,
                m.W)(`internal/taxonomies/${n}/update_description`, { method: "POST", body: { description: t } });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          b = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n, rootName: t }) {
                yield (0,
                m.W)(`internal/taxonomies/${n}/update_root_name`, { method: "POST", body: { rootName: t } });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          S = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({
                taxonomyId: n,
                isCustomerProposal: t,
                isAccept: e,
              }) {
                return yield (0, m.W)(`internal/taxonomies/${n}/review`, {
                  method: "POST",
                  body: { isCustomerProposal: t, isAccept: e },
                });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            onSuccess: () => {
              q();
            },
          }),
          O = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n }) {
                return yield (0,
                m.W)(`internal/taxonomies/${n}/instructions`, { method: "GET" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          Z = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n }) {
                return yield (0,
                m.W)(`internal/taxonomies/${n}`, { method: "GET" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          k = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n }) {
                return yield (0,
                m.W)(`internal/taxonomies/${n}/instructions/draft`, { method: "GET" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          N = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n }) {
                return yield (0,
                m.W)(`internal/taxonomies/${n}/instructions/published`, { method: "GET" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          j = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ taxonomyId: n }) {
                return yield (0,
                m.W)(`internal/taxonomies/${n}/instructions/create`, { method: "POST" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          C = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ instructionId: n }) {
                return yield (0,
                m.W)(`internal/instructions/${n}`, { method: "GET" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          I = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ instructionId: n, draft: t }) {
                return yield (0,
                m.W)(`internal/instructions/${n}/draft`, { method: "POST", body: t });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          B = (0, i.D)({
            mutationFn: (function () {
              var n = v(function* ({ instructionId: n }) {
                return yield (0,
                m.W)(`internal/instructions/${n}/publish`, { method: "POST" });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
          }),
          { data: E, refetch: q, isFetching: A } = s,
          { mutate: w, isLoading: x } = a,
          { mutate: J, isLoading: D } = c,
          { mutate: G, isLoading: R } = p,
          { mutate: $, isLoading: F } = f,
          { mutate: M, isLoading: L } = y,
          { mutate: W, isLoading: U } = d,
          { mutate: V, isLoading: Q } = P,
          { mutate: H, isLoading: z } = g,
          { mutate: K, isLoading: Y } = _,
          { isLoading: X, mutate: nn } = (0, i.D)(
            (function () {
              var n = v(function* ({
                projectId: n,
                projectName: t,
                taxonomySrn: e,
                taskIds: r,
                batchId: i,
                ignoreMatchingTaxonomySrn: o,
              }) {
                return yield (0, l.Y_)("backfillTasksTaxonomy", {
                  projectId: n,
                  projectName: t,
                  taxonomySrn: e,
                  taskIds: r,
                  batchId: i,
                  ignoreMatchingTaxonomySrn: o,
                });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })()
          ),
          { mutate: tn, isLoading: en } = S,
          { mutate: rn, isLoading: on } = T,
          { mutate: un, isLoading: ln } = b,
          { mutate: sn, isLoading: an } = O,
          { mutate: cn, isLoading: pn } = Z,
          { mutate: fn } = k,
          { mutate: yn } = N,
          { mutate: dn, isLoading: hn } = j,
          { mutate: mn } = C,
          { mutate: Pn, isLoading: vn } = I,
          { mutate: gn, isLoading: _n } = B,
          { isLoading: Tn, mutate: bn } = (0, i.D)(
            (function () {
              var n = v(function* ({
                projectId: n,
                projectName: t,
                instructionsSrn: e,
                taskIds: r,
                batchId: i,
              }) {
                return yield (0, l.Y_)("backfillTasksInstructions", {
                  projectId: n,
                  projectName: t,
                  instructionsSrn: e,
                  taskIds: r,
                  batchId: i,
                });
              });
              return function (t) {
                return n.apply(this, arguments);
              };
            })()
          );
        return {
          refetchTaxonomiesAndInstructions: q,
          loadedTaxonomyCache: E,
          isLoadingTaxonomies: A,
          createTaxonomy: w,
          isCreatingTaxonomy: x,
          saveDraft: J,
          isSavingDraft: D,
          saveProposal: G,
          isSavingProposal: R,
          inheritTaxonomies: $,
          isInheriting: F,
          publishTaxonomy: M,
          isPublishing: L,
          requestFEApproval: W,
          isRequestingApproval: U,
          forkTaxonomy: V,
          isForking: Q,
          commitTaxonomy: H,
          isCommitting: z,
          recallTaxonomy: K,
          isRecalling: Y,
          isSpawningBackfillJob: X,
          backfillTasksWithTaxonomy: nn,
          updateTaxonomyDescription: rn,
          isUpdatingDescription: on,
          updateTaxonomyRootName: un,
          isUpdatingRootName: ln,
          reviewTaxonomyProposal: tn,
          isReviewingProposal: en,
          getAllTaxonomyInstructions: sn,
          isGettingAllTaxonomyInstructions: an,
          getTaxonomyById: cn,
          isGettingTaxonomyById: pn,
          getLatestTaxonomyInstructions: fn,
          getLatestPublishedInstructions: yn,
          createNewTaxonomyInstructions: dn,
          getInstructionsById: mn,
          isCreatingInstructions: hn,
          saveDraftInstructions: Pn,
          isSavingDraftInstructions: vn,
          publishDraftInstructions: gn,
          isPublishingInstructions: _n,
          backfillTasksWithInstructions: bn,
          isBackfillingInstructions: Tn,
        };
      }
    },
    864592: function (n, t, e) {
      e.d(t, {
        W: function () {
          return u;
        },
      });
      var r = e(285556);
      function i(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function o(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, o) {
            var u = n.apply(t, e);
            function l(n) {
              i(u, r, o, l, s, "next", n);
            }
            function s(n) {
              i(u, r, o, l, s, "throw", n);
            }
            l(void 0);
          });
        };
      }
      function u(n) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = o(function* (n, t = {}) {
          try {
            return yield (0, r.ZP)(null, n, t);
          } catch (e) {
            throw e instanceof r.Bb ? Error(e.response.message) : e;
          }
        })).apply(this, arguments);
      }
    },
    496206: function (n, t, e) {
      e.d(t, {
        e6: function () {
          return o;
        },
        Z0: function () {
          return u;
        },
        s1: function () {
          return l;
        },
        xw: function () {
          return s;
        },
        UD: function () {
          return a;
        },
        rW: function () {
          return f;
        },
        DZ: function () {
          return y;
        },
        hg: function () {
          return P;
        },
        Hg: function () {
          return v;
        },
        uQ: function () {
          return g;
        },
        AY: function () {
          return _;
        },
        aU: function () {
          return T;
        },
        bR: function () {
          return b;
        },
        yP: function () {
          return Z;
        },
      });
      var r = e(167469),
        i = e(720227);
      const o = {
          box_2d: "Camera",
          polygon_2d: "Camera",
          polygon_topdown: "Topdown",
        },
        u = {
          cuboid: ["far", "cube"],
          point_segmentation: ["far", "puzzle-piece"],
          plane: ["far", "map"],
          mesh: ["far", "border-none"],
          box_2d: ["far", "square"],
          point_2d: ["far", "map-marker-alt"],
          polyline_2d: "slash",
          polygon_2d: ["far", "vector-square"],
          event_2d: ["far", "clock"],
          point_3d: ["far", "map-marker-alt"],
          polyline_3d: ["far", "slash"],
          point_topdown: ["far", "map-marker-alt"],
          polygon_topdown: ["far", "vector-square"],
          polygon_3d: ["far", "vector-square"],
          image_segmentation: ["far", "puzzle-piece"],
          cuboid_2d: ["far", "cube"],
        },
        l = {
          [r.AnnotationAttributeType.Category]: ["far", "list"],
          [r.AnnotationAttributeType.Linked]: ["far", "link"],
          [r.AnnotationAttributeType.Angle]: ["far", "ruler-triangle"],
          [r.AnnotationAttributeType.Number]: ["far", "sliders-h"],
          [r.AnnotationAttributeType.Text]: ["far", "text"],
        },
        s = {
          cuboid:
            "https://static.scale.com/taxonomy_service_assets/cuboids.png",
          box_2d: "https://static.scale.com/taxonomy_service_assets/box_2d.png",
          polygon_2d:
            "https://static.scale.com/taxonomy_service_assets/polygon_2d.png",
          point_topdown:
            "https://static.scale.com/taxonomy_service_assets/topdown_points.png",
          polyline_3d:
            "https://static.scale.com/taxonomy_service_assets/topdown_polylines.png",
          polygon_topdown:
            "https://static.scale.com/taxonomy_service_assets/topdown_polygons.png",
          polyline_2d:
            "https://static.scale.com/taxonomy_service_assets/points_lines_2d.png",
          point_2d:
            "https://static.scale.com/taxonomy_service_assets/points_lines_2d.png",
          cuboid_2d:
            "https://static.scale.com/taxonomy_service_assets/cuboid_2d.png",
        },
        a = {
          handleStartCreateFirstTaxonomyFromTask: {
            title: "Use Taxonomy Service for this project",
            subtitle: "Import Taxonomy from Task",
            icon: "play-circle",
            variant: "primary",
          },
          handleStartCreateFirstTaxonomy: {
            title: "Use Taxonomy Service for this project",
            subtitle: "Start with empty Taxonomy",
            icon: "play-circle",
            variant: "secondary",
          },
          handleStartCreateSubtaxonomy: {
            title:
              "Define another portion of the taxonomy under the root version",
            subtitle: "Create subtaxonomy",
            icon: "code-branch",
            variant: "primary",
          },
          handleStartPublish: {
            title: "Submit to Scale. You can create Tasks after submitting.",
            subtitle: "Submit",
            icon: "upload",
            variant: "primary",
          },
          handleStartInherit: {
            title: "Copy taxonomies from older versions",
            subtitle: "Inherit",
            icon: "download",
            variant: "white",
          },
          handleStartFork: {
            title: 'aka "Fork" this taxonomy',
            subtitle: "Create substage taxonomy",
            icon: "code-branch",
            variant: "primary",
          },
          handleStartCommit: {
            title: "Lock ops taxonomies for this version",
            subtitle: "Commit",
            icon: "lock",
            variant: "primary",
          },
          handleStartRecall: {
            title: "Uncommit / Make this taxonomy editable again",
            subtitle: "Recall",
            icon: "undo",
            variant: "white",
          },
          handleStartBackfillTasks: {
            title: "Backfill tasks with this taxonomy version",
            subtitle: "Backfill tasks",
            icon: "pen",
            variant: "primary",
          },
          handleStartCreateInstructions: {
            title: "Create new instructions for this taxonomy version.",
            subtitle: "Create instructions",
            icon: "page4",
            variant: "primary",
          },
          handleRequestFEApproval: {
            title:
              "New taxonomies need Field Engineering team approval on this project",
            subtitle: "Request approval",
            icon: "upload",
            variant: "primary",
          },
          handleStartMultipleCommits: {
            title: "Commit all the subtaxonomies under this root taxonomy",
            subtitle: "Commit multiple",
            icon: "lock",
            variant: "primary",
          },
        },
        c = {
          label: "cust",
          className: "bg-neutral-100",
          tooltip: "Customer taxonomy",
        },
        p = {
          label: "submitted",
          className: "bg-success-200",
          tooltip:
            "Taxonomy is submitted to Scale for review. You can now submit Tasks with this Taxonomy.",
        },
        f = {
          label: "last published",
          className: "bg-success-200",
          tooltip: "New Tasks will use this Taxonomy",
        },
        y = {
          label: "last published",
          className: "bg-info-100",
          tooltip: "New Tasks will use this Instructions version",
        },
        d = {
          label: "live",
          className: "bg-info-200",
          tooltip: "Scale has approved this taxonomy",
        },
        h = {
          label: "live",
          className: "bg-info-200",
          tooltip: "At least one subtaxonomy is committed",
        },
        m = {
          label: "scale",
          className: "bg-neutral-100",
          tooltip: "Scale ops defined taxonomy",
        },
        P = {
          label: "draft",
          className: "bg-warning-200",
          tooltip: "Taxonomy is editable",
        },
        v = {
          label: "draft",
          className: "bg-neutral-100",
          tooltip: "Instructions is editable",
        };
      function g({
        isCustomerPublished: n,
        isCommitted: t,
        isInternal: e,
        isRoot: r,
      }) {
        return t ? (r ? h : d) : n ? p : r ? P : e ? m : c;
      }
      const _ = {
        cuboid: {
          display: "3D Cuboids",
          desc: [
            "Labeling occurs in a 3D pointcloud viewer",
            "Examples: Traffic Signals, Stop Signs",
          ],
        },
        polygon_3d: {
          display: "Planar 3D Polygons",
          desc: [
            "Uncommon annotation type. Annotations over road surfaces should use Topdown Polygon instead. Vertices must lie on the same plane. Labeling occurs in a 3D pointcloud viewer",
            "Examples: Stop Sign Face",
          ],
        },
        point_3d: {
          display: "3D Points",
          desc: ["Labeling occurs in a 3D pointcloud viewer", "Examples: Pole"],
        },
        point_topdown: {
          display: "Topdown Points",
          desc: [
            'Labeling occurs in a Topdown view of a filtered pointcloud. Use the "Dynamic 3D Point" type instead if the labeler may need a 3D context to annotate',
            "Examples: Lane Merge Point, Lane Split Point",
          ],
        },
        polyline_3d: {
          display: "Topdown Polylines",
          desc: [
            "Labeling occurs in a Topdown view of a filtered pointcloud",
            "Examples: Lane Lines, Curbs",
          ],
        },
        polygon_topdown: {
          display: "Topdown Polygons",
          desc: [
            'Also known as "Polygons with Elevation" or "Closed Polyline". Vertices do not necessarily lie on a plane. Labeling occurs in a Topdown view of a filtered pointcloud',
            "Examples: Parking Slot, Crosswalk, Lane Segment",
          ],
        },
        box_2d: {
          display: "Camera/2D Boxes",
          desc: [
            "Labeling occurs in a camera image view. Receive annotations in image space",
            "Examples: Traffic Signals, Stop Signs",
          ],
        },
        point_2d: {
          display: "Camera/2D Points",
          desc: [
            "Labeling occurs in a camera image view. Receive annotations in image space",
          ],
        },
        polyline_2d: {
          display: "Camera/2D Polylines",
          desc: [
            "Labeling occurs in a camera image view. Receive annotations in image space",
            "Examples: Lane Lines, Curbs",
          ],
        },
        polygon_2d: {
          display: "Camera/2D Polygons",
          desc: [
            "Labeling occurs in a camera image view. Receive annotations in image space",
            "Examples: Crosswalks, Lane Segments",
          ],
        },
        links: {
          display: "Links",
          desc: [
            "Capture relationships between geometries",
            "Examples: Road Sign To Lane Center, Lane Center To Lane Line, Traffic Light To Lane Center",
          ],
        },
        scene: {
          display: "Scene / Global Attributes",
          desc: [
            "Attributes that apply to the whole scene rather than to a single annotation",
            "Examples: Is Blurry, Coverage Percent",
          ],
        },
        image_segmentation: {
          display: "Image Segmentation",
          desc: [
            "Labeling occurs on a camera image",
            "Examples: Semantic Segmentation, Instance Segmentation, Panoptic Segmentation",
          ],
        },
        point_segmentation: {
          display: "Point Segmentation",
          desc: [
            "Labeling occurs in a 3D pointcloud viewer",
            "Examples: Ground Segmentation",
          ],
        },
        event_2d: {
          display: "Camera/2D Events",
          desc: [
            "Events are not linked to a specific object in the video, but rather to a frame/group of frames",
            "Examples: Car is turning left",
          ],
        },
        lidar_linking: {
          display: "Lidar Linking",
          desc: [
            "Lidar Linking-specific taxonomy params",
            "Examples: Annotation Type, Default Geometry",
          ],
        },
        grid_segmentation: {
          display: "Grid Segmentation",
          desc: [
            "Labeling occurs on a camera image",
            "Examples: Grid Segmentation",
          ],
        },
        cuboid_2d: {
          display: "Camera/2D Cuboids",
          desc: [
            "Labeling occurs in a camera image view. Receive annotations in image space",
            "Examples: Vehicles",
          ],
        },
      };
      var T;
      !(function (n) {
        (n.Addition = "Additions"),
          (n.Deletion = "Deletions"),
          (n.Rename = "Renames");
      })(T || (T = {}));
      const b = {
          [T.Addition]: "text-success-800",
          [T.Deletion]: "text-danger-800",
          [T.Rename]: "text-warning-800",
        },
        S = {
          [T.Addition]: "hover:bg-success-200",
          [T.Deletion]: "hover:bg-danger-200",
          [T.Rename]: "hover:bg-warning-300",
        },
        O = {
          [T.Addition]: "bg-success-100",
          [T.Deletion]: "bg-danger-100",
          [T.Rename]: "bg-warning-100",
        };
      function Z(n) {
        return (0, i.m)(O[n], S[n]);
      }
    },
    920587: function (n, t, e) {
      e.r(t),
        e.d(t, {
          uploadFromComputer: function () {
            return s;
          },
          submitDocumentTask: function () {
            return c;
          },
          getDocumentOverviewInsights: function () {
            return f;
          },
          getDocumentQualityInsights: function () {
            return d;
          },
          getDocumentDataInsights: function () {
            return m;
          },
          maybeSendDovePostprocessedJson: function () {
            return v;
          },
        });
      var r = e(285556),
        i = e(283866),
        o = e.n(i);
      function u(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function l(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function l(n) {
              u(o, r, i, l, s, "next", n);
            }
            function s(n) {
              u(o, r, i, l, s, "throw", n);
            }
            l(void 0);
          });
        };
      }
      function s(n, t) {
        return a.apply(this, arguments);
      }
      function a() {
        return (a = l(function* (n, t) {
          const e = new (o())();
          e.append("asset", t), e.append("projectId", n);
          return yield (0,
          r.ZP)(null, "internal/document/upload_from_computer", { method: "POST", body: e });
        })).apply(this, arguments);
      }
      function c(n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = l(function* (n) {
          return yield (0,
          r.ZP)(null, "internal/document/submit_document_task", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function f(n) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = l(function* (n) {
          return yield (0,
          r.ZP)(null, "internal/document/dashboard_overview", { method: "POST", body: { projectId: n } });
        })).apply(this, arguments);
      }
      function d(n) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = l(function* (n) {
          return yield (0,
          r.ZP)(null, "internal/document/dashboard_quality", { method: "POST", body: { projectId: n } });
        })).apply(this, arguments);
      }
      function m(n) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = l(function* (n) {
          return yield (0,
          r.ZP)(null, "internal/document/dashboard_datainsights", { method: "POST", body: { projectId: n } });
        })).apply(this, arguments);
      }
      function v(n, t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = l(function* (n, t) {
          yield (0,
          r.ZP)(null, "internal/document/dove_send_postprocessed_json", { method: "POST", body: { batchId: n, enforceBatchSize: t } });
        })).apply(this, arguments);
      }
    },
    257881: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return da;
        },
      });
      var r = {};
      e.r(r),
        e.d(r, {
          cancelTasks: function () {
            return z;
          },
          emailAllTaskResults: function () {
            return L;
          },
          getAllTaskTypes: function () {
            return B;
          },
          getAvailableTaskTypes: function () {
            return q;
          },
          getPagedTasks: function () {
            return J;
          },
          getPagedTasksElastic: function () {
            return G;
          },
          getRandomOrder: function () {
            return $;
          },
          getTotalTasksCountInProject: function () {
            return w;
          },
          pinTask: function () {
            return Y;
          },
          resendCallback: function () {
            return Q;
          },
          sendAuditCompletedCallback: function () {
            return U;
          },
          unpinTask: function () {
            return nn;
          },
          useGetExportTasksAsyncMutation: function () {
            return M;
          },
        });
      var i = {};
      e.r(i),
        e.d(i, {
          getAttributesQuality: function () {
            return In;
          },
          getBatchStats: function () {
            return vn;
          },
          getErrorTypeQuality: function () {
            return jn;
          },
          getInterRaterAgreementScore: function () {
            return An;
          },
          getLabelQuality: function () {
            return kn;
          },
          getMAASTaskPerformanceStats: function () {
            return _n;
          },
          getMAASTaskQualityStats: function () {
            return bn;
          },
          getPrecisionRecallQuality: function () {
            return On;
          },
          getTasksStatsByBatch: function () {
            return dn;
          },
          getTasksStatsByDayByBatch: function () {
            return mn;
          },
          getTasksStatsByProject: function () {
            return fn;
          },
          getTasksStatsByType: function () {
            return cn;
          },
          getTurnAroundTime: function () {
            return En;
          },
          getUserTasksByDay: function () {
            return un;
          },
          getUserTasksByWeek: function () {
            return sn;
          },
        });
      var o = {};
      e.r(o),
        e.d(o, {
          auditBulkUpdate: function () {
            return Vn;
          },
          auditBulkUpdateParallel: function () {
            return Yn;
          },
          fetchAuditTasks: function () {
            return Un;
          },
          fetchAuditTasksParallel: function () {
            return zn;
          },
          getAuditInfo: function () {
            return Qn;
          },
        });
      var u = {};
      e.r(u),
        e.d(u, {
          getCustomerQABatchesQualityReport: function () {
            return yt;
          },
          getCustomerQABatchesReport: function () {
            return pt;
          },
          getCustomerQAQualityReport: function () {
            return at;
          },
          getCustomerQAStats: function () {
            return tt;
          },
          getCustomerQATaskLevelReport: function () {
            return lt;
          },
          getCustomerQATasksPerWeekReport: function () {
            return ht;
          },
          getQualityOverTime: function () {
            return rt;
          },
          getUseCustomerMetrics: function () {
            return ot;
          },
        });
      var l = {};
      e.r(l),
        e.d(l, {
          confirmPayment: function () {
            return Qt;
          },
          createInvoicePdf: function () {
            return Lt;
          },
          createPaymentIntent: function () {
            return Ut;
          },
          deletePaymentMethod: function () {
            return Et;
          },
          fetchActiveContracts: function () {
            return ue;
          },
          fetchAmountOwed: function () {
            return At;
          },
          fetchConsumptionCsv: function () {
            return Ft;
          },
          fetchOldConsumptionCsv: function () {
            return Rt;
          },
          fetchPaymentMethods: function () {
            return bt;
          },
          fetchPayments: function () {
            return _t;
          },
          getBillingType: function () {
            return se;
          },
          getCardInfo: function () {
            return It;
          },
          getCreditsAndDiscounts: function () {
            return ne;
          },
          getLabelingUnitHistory: function () {
            return Yt;
          },
          getSubcontracts: function () {
            return ee;
          },
          getTableauBilling: function () {
            return ce;
          },
          hasPaymentMethods: function () {
            return kt;
          },
          loadOldConsumptionCsv: function () {
            return xt;
          },
          pingOldConsumptionCsv: function () {
            return Dt;
          },
          purchaseStudioSubscription: function () {
            return zt;
          },
          redeemCode: function () {
            return ie;
          },
          reportBlockedUserAddedPayment: function () {
            return Ot;
          },
          setDefaultPaymentMethods: function () {
            return jt;
          },
        });
      var s = {};
      e.r(s),
        e.d(s, {
          inviteMember: function () {
            return de;
          },
          inviteMembers: function () {
            return me;
          },
          removeInvite: function () {
            return ve;
          },
          removeMember: function () {
            return _e;
          },
          setRapidNotifications: function () {
            return Oe;
          },
          setRole: function () {
            return be;
          },
        });
      var a = {};
      e.r(a),
        e.d(a, {
          cloneToTest: function () {
            return je;
          },
        });
      var c = {};
      e.r(c),
        e.d(c, {
          getCustomerBatches: function () {
            return Ee;
          },
        });
      var p = {};
      e.r(p),
        e.d(p, {
          getCustomerMetricsOverview: function () {
            return Re;
          },
          getOverviewType: function () {
            return xe;
          },
          getRedashCSV: function () {
            return Me;
          },
          getRedashOverview: function () {
            return Fe;
          },
          getTableauOverview: function () {
            return De;
          },
        });
      var f = {};
      e.r(f),
        e.d(f, {
          acceptInviteExisting: function () {
            return Ye;
          },
          addPrelabelModel: function () {
            return _r;
          },
          autoAnnotate: function () {
            return jr;
          },
          duplicateProject: function () {
            return fr;
          },
          fetchAllTaskAttempts: function () {
            return _i;
          },
          fetchAuditStatus: function () {
            return ki;
          },
          fetchBaseModelsForCustomer: function () {
            return Yr;
          },
          fetchBatchMetrics: function () {
            return Oi;
          },
          fetchBatchStatus: function () {
            return ui;
          },
          fetchBatchTaskStateDescriptions: function () {
            return ci;
          },
          fetchBatchWorkflowStats: function () {
            return si;
          },
          fetchBenchmarkAndAttempt: function () {
            return Qr;
          },
          fetchCommonAnswers: function () {
            return Ur;
          },
          fetchDeprecatedStudioBundles: function () {
            return Rr;
          },
          fetchElasticOptions: function () {
            return Ai;
          },
          fetchGroupsAndLabelers: function () {
            return ei;
          },
          fetchHasBatch: function () {
            return Fr;
          },
          fetchLabelShortcutMappingInfo: function () {
            return ji;
          },
          fetchMigrationCount: function () {
            return Ei;
          },
          fetchModelById: function () {
            return ni;
          },
          fetchModelsForProject: function () {
            return zr;
          },
          fetchPendingStudioBatches: function () {
            return Lr;
          },
          fetchProjectPipelineParams: function () {
            return fi;
          },
          fetchSubscriptionStats: function () {
            return Dr;
          },
          fetchSubtaskAssignmentReadOnly: function () {
            return bi;
          },
          fetchTaskStateDescription: function () {
            return vi;
          },
          fetchTrainingTaskPassThreshold: function () {
            return ii;
          },
          getOrCreateProjectMetricsPreference: function () {
            return Ii;
          },
          logSyncDataUpload: function () {
            return ze;
          },
          previewChangeNumReviews: function () {
            return di;
          },
          redoAllFromAnnotation: function () {
            return sr;
          },
          redoAllFromScratch: function () {
            return ur;
          },
          redoTask: function () {
            return cr;
          },
          removeLabelerFromGroup: function () {
            return Ir;
          },
          resetBatchPriorities: function () {
            return nr;
          },
          sendAllBackToQueue: function () {
            return er;
          },
          sendBatchesToModel: function () {
            return Or;
          },
          setAssignRejections: function () {
            return mr;
          },
          setBatchPriorities: function () {
            return ir;
          },
          setOcrSettings: function () {
            return vr;
          },
          trackEvent: function () {
            return Qe;
          },
          trackStudioPageVisit: function () {
            return dr;
          },
          updateChangeNumReviews: function () {
            return mi;
          },
          updateLabelShortcutMapping: function () {
            return Ar;
          },
          updateModelMapping: function () {
            return br;
          },
          updateProjectMetricsPreference: function () {
            return xr;
          },
          updateTrainingTaskPassThreshold: function () {
            return Er;
          },
          validatePrelabelingUploadedAsset: function () {
            return kr;
          },
        });
      var y = {};
      e.r(y),
        e.d(y, {
          acceptInvite: function () {
            return zi;
          },
          createAuditBatch: function () {
            return Ki;
          },
          createDocumentTask: function () {
            return Vi;
          },
          createProject: function () {
            return Fi;
          },
          createSampleProject: function () {
            return Mi;
          },
          fetchProjects: function () {
            return $i;
          },
          getAuditBatchTaskIds: function () {
            return Yi;
          },
          getMonthlyBillingInfo: function () {
            return to;
          },
          getProjectParams: function () {
            return Wi;
          },
          getTeamMembers: function () {
            return Qi;
          },
          inviteMember: function () {
            return Hi;
          },
          trackEvent: function () {
            return Xi;
          },
          updateProjectSettingsAndParams: function () {
            return Li;
          },
          uploadFile: function () {
            return Ui;
          },
        });
      var d = {};
      e.r(d),
        e.d(d, {
          getDocumentAIGOProjectMetrics: function () {
            return io;
          },
          getEnterpriseProjectMetrics: function () {
            return uo;
          },
          getProjectMetricsConfig: function () {
            return co;
          },
          refreshMetrics: function () {
            return so;
          },
        });
      var h = {};
      e.r(h),
        e.d(h, {
          addAttemptFeedback: function () {
            return Yo;
          },
          addFeedbackToWorkerComment: function () {
            return Qo;
          },
          addWorkerComment: function () {
            return Lo;
          },
          archiveAuditPermissionRole: function () {
            return _u;
          },
          autoCritique: function () {
            return Eo;
          },
          bulkAddFeedbackToWorkerComments: function () {
            return zo;
          },
          bulkAddWorkerComments: function () {
            return Uo;
          },
          bulkCreateBenchmarkCandidate: function () {
            return Yu;
          },
          bulkUpdateBenchmarkCandidate: function () {
            return el;
          },
          confirmStellarTasksPayout: function () {
            return Sl;
          },
          createBenchmarkCandidate: function () {
            return zu;
          },
          createStellarCourse: function () {
            return Zl;
          },
          createStellarGenAITask: function () {
            return yl;
          },
          deleteCorpDialogue: function () {
            return Uu;
          },
          fetchAttemptFeedback: function () {
            return nu;
          },
          fetchAuditPermissions: function () {
            return bu;
          },
          fetchAuditorEvaluationData: function () {
            return du;
          },
          fetchBenchmarkCandidates: function () {
            return Qu;
          },
          fetchContributorFeedbackForAttempt: function () {
            return Do;
          },
          fetchContributorFeedbackForStep: function () {
            return xo;
          },
          fetchCorpDialogues: function () {
            return Fu;
          },
          fetchPendingScreening: function () {
            return eu;
          },
          fetchReviewerCopilotInference: function () {
            return jo;
          },
          fetchScreeningBenchmarkData: function () {
            return cu;
          },
          fetchScreeningBenchmarkPermissionsInfo: function () {
            return Iu;
          },
          fetchUniqueSectionTitles: function () {
            return Du;
          },
          fetchWorkerComments: function () {
            return Ro;
          },
          fetchWorkerCommentsForTaskAttempt: function () {
            return Fo;
          },
          generateUnitTests: function () {
            return Nl;
          },
          getAnnouncedStellarIncentive: function () {
            return gl;
          },
          getAssignmentDetails: function () {
            return il;
          },
          getDowngradedLinters: function () {
            return _o;
          },
          getHiddenUnitTestsFromTaskMetadata: function () {
            return Bl;
          },
          getLinterStats: function () {
            return vo;
          },
          getStellarGenAITaskByAttempt: function () {
            return al;
          },
          getStellarGenAITaskEligibility: function () {
            return pl;
          },
          getStellarGenAITasksByProject: function () {
            return ll;
          },
          linkStellarTasksToCourse: function () {
            return Tl;
          },
          publishAuditPermissionRole: function () {
            return mu;
          },
          publishBulkScreeningBenchmark: function () {
            return su;
          },
          publishScreeningBenchmark: function () {
            return uu;
          },
          purgeScreenings: function () {
            return Au;
          },
          reviewScreeningWithScore: function () {
            return iu;
          },
          runMultiReplicaPerStepResponseLinter: function () {
            return bo;
          },
          runPerStepResponseLinter: function () {
            return Oo;
          },
          runResponseLinter: function () {
            return ko;
          },
          runUnitTests: function () {
            return Cl;
          },
          saveCorpDialogue: function () {
            return Ru;
          },
          sbqScreenings: function () {
            return xu;
          },
          sendReviewerCopilotFeedback: function () {
            return Io;
          },
          setAnnouncedStellarIncentive: function () {
            return Pl;
          },
          updateAuditPermissionRole: function () {
            return vu;
          },
          updateAuditorPermissions: function () {
            return Ou;
          },
          updateBenchmarkCandidate: function () {
            return nl;
          },
          updateBenchmarkPermissions: function () {
            return Eu;
          },
          updateCorpDialogue: function () {
            return Lu;
          },
          updatePermissionBenchmarkSettings: function () {
            return ju;
          },
          updatePermissionFilters: function () {
            return ku;
          },
          updateProjectConfig: function () {
            return Ao;
          },
          updateScreeningBenchmarkEnabled: function () {
            return fu;
          },
          updateStellarGenAITask: function () {
            return hl;
          },
        });
      var m = {};
      e.r(m),
        e.d(m, {
          getUserIdentities: function () {
            return wl;
          },
        });
      var P = {};
      e.r(P),
        e.d(P, {
          disableTaskersOneProject: function () {
            return Gl;
          },
          getSlackInviteLink: function () {
            return Vl;
          },
          massAddPermissions: function () {
            return Wl;
          },
          purgeTaskersWorkOneProject: function () {
            return Ml;
          },
          purgeTaskersWorkOneProjectPreview: function () {
            return $l;
          },
        });
      var v = {};
      e.r(v),
        e.d(v, {
          vfmPredict: function () {
            return Kl;
          },
        });
      var g = {};
      e.r(g),
        e.d(g, {
          generateResponseLegalPdf: function () {
            return rs;
          },
          preprocessLegalPdf: function () {
            return ts;
          },
        });
      var _ = {};
      e.r(_),
        e.d(_, {
          createEducationEntry: function () {
            return as;
          },
          createExperienceEntry: function () {
            return Ps;
          },
          deleteEducationEntry: function () {
            return ys;
          },
          deleteExperienceEntry: function () {
            return Ts;
          },
          getEducationEntries: function () {
            return ls;
          },
          getExperienceEntries: function () {
            return hs;
          },
          updateEducationEntry: function () {
            return ps;
          },
          updateExperienceEntry: function () {
            return gs;
          },
        });
      var T = {};
      e.r(T),
        e.d(T, {
          getBlueprintDataForProject: function () {
            return Ns;
          },
          getStageDefinitionsForProject: function () {
            return Zs;
          },
          getStageInstancesForStageDef: function () {
            return Bs;
          },
          getStageInstancesForTask: function () {
            return Cs;
          },
          getTaxonomyForStageDef: function () {
            return qs;
          },
        });
      var b = {};
      e.r(b),
        e.d(b, {
          getTeamLeadInfoForWorkers: function () {
            return Js;
          },
        });
      var S = {};
      e.r(S),
        e.d(S, {
          getEmbeddedContentOnProject: function () {
            return $s;
          },
          upsertEmbeddedContentOnProject: function () {
            return Fs;
          },
        });
      var O = {};
      e.r(O),
        e.d(O, {
          addToShortlists: function () {
            return ra;
          },
          createShortlist: function () {
            return ia;
          },
          deleteShortlist: function () {
            return sa;
          },
          editShortlist: function () {
            return ua;
          },
          getContributorBiography: function () {
            return Ks;
          },
          getContributorPII: function () {
            return Hs;
          },
          getContributorProfile: function () {
            return Vs;
          },
          getContributorProfiles: function () {
            return Xs;
          },
          getCustomerShortlists: function () {
            return ta;
          },
          getFilterValuesFromQuery: function () {
            return Ws;
          },
          getSchools: function () {
            return fa;
          },
          getSkills: function () {
            return ca;
          },
        });
      var Z = e(298784),
        k = e.n(Z),
        N = e(285556),
        j = e(456552);
      function C(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function I(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              C(o, r, i, u, l, "next", n);
            }
            function l(n) {
              C(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function B() {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = I(function* () {
          return (0, N.ZP)(null, "internal/tasks/types");
        })).apply(this, arguments);
      }
      function q() {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = I(function* (n = {}) {
          return (0,
          N.ZP)(null, "internal/tasks/available-types", { query: n });
        })).apply(this, arguments);
      }
      function w(n) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = I(function* (n) {
          return (0,
          N.ZP)(null, "internal/tasks/all_tasks_count", { query: { projectId: n } });
        })).apply(this, arguments);
      }
      function J() {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = I(function* (n = {}) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/tasks/paged", { query: t });
        })).apply(this, arguments);
      }
      function G(n) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = I(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/tasks/paged/elastic", { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function $() {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = I(function* (n = {}) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/tasks/random-order", { query: t });
        })).apply(this, arguments);
      }
      function M() {
        return (0, j.useMutation)({
          mutationFn: (function () {
            var n = I(function* (n) {
              return yield (0,
              N.ZP)(null, "internal/tasks/tasks_download_email_delivery", { method: "POST", body: n });
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
        });
      }
      function L(n, t) {
        return W.apply(this, arguments);
      }
      function W() {
        return (W = I(function* (n, t) {
          try {
            yield (0,
            N.ZP)(null, "internal/tasks/email-all-results", { method: "POST", body: { projectId: n, batchIds: t } });
          } catch (e) {
            throw ((0, N.vj)(e, { handleHttp: !0 }), e);
          }
        })).apply(this, arguments);
      }
      function U(n, t) {
        return V.apply(this, arguments);
      }
      function V() {
        return (V = I(function* (n, t) {
          try {
            yield (0,
            N.ZP)(null, "internal/tasks/send-audit-completed", { method: "POST", body: { projectId: n, batchIds: t } });
          } catch (e) {
            throw ((0, N.vj)(e, { handleHttp: !0 }), e);
          }
        })).apply(this, arguments);
      }
      function Q(n, t) {
        return H.apply(this, arguments);
      }
      function H() {
        return (H = I(function* (n, t) {
          try {
            yield (0,
            N.ZP)(null, "internal/tasks/resend-task-callback", { method: "POST", body: { taskId: n, isTest: !t } });
          } catch (e) {
            throw ((0, N.vj)(e, { handleHttp: !0 }), e);
          }
        })).apply(this, arguments);
      }
      function z(n, t) {
        return K.apply(this, arguments);
      }
      function K() {
        return (K = I(function* (n, t) {
          try {
            return yield (0,
            N.ZP)(null, `internal/tasks/${n}/cancel`, { method: "POST", query: { isTest: !t || void 0 } });
          } catch (e) {
            throw ((0, N.vj)(e, { handleHttp: !0 }), e);
          }
        })).apply(this, arguments);
      }
      function Y(n, t) {
        return X.apply(this, arguments);
      }
      function X() {
        return (X = I(function* (n, t) {
          try {
            return yield (0,
            N.ZP)(null, `internal/tasks/${n}/pin-task`, { method: "POST", body: { message: t } });
          } catch (e) {
            throw ((0, N.vj)(e, { handleHttp: !0 }), e);
          }
        })).apply(this, arguments);
      }
      function nn(n) {
        return tn.apply(this, arguments);
      }
      function tn() {
        return (tn = I(function* (n) {
          try {
            return yield (0,
            N.ZP)(null, `internal/tasks/${n}/unpin-task`, { method: "POST" });
          } catch (t) {
            throw ((0, N.vj)(t, { handleHttp: !0 }), t);
          }
        })).apply(this, arguments);
      }
      function en(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function rn(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              en(o, r, i, u, l, "next", n);
            }
            function l(n) {
              en(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function on(n, t) {
        if (null == n) return {};
        var e,
          r,
          i = (function (n, t) {
            if (null == n) return {};
            var e,
              r,
              i = {},
              o = Object.keys(n);
            for (r = 0; r < o.length; r++)
              (e = o[r]), t.indexOf(e) >= 0 || (i[e] = n[e]);
            return i;
          })(n, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          for (r = 0; r < o.length; r++)
            (e = o[r]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, e) &&
                  (i[e] = n[e]));
        }
        return i;
      }
      function un(n) {
        return ln.apply(this, arguments);
      }
      function ln() {
        return (ln = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/stats/tasks/by-day", { query: t });
        })).apply(this, arguments);
      }
      function sn(n) {
        return an.apply(this, arguments);
      }
      function an() {
        return (an = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/stats/tasks/by-week", { query: t });
        })).apply(this, arguments);
      }
      function cn(n) {
        return pn.apply(this, arguments);
      }
      function pn() {
        return (pn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/stats/tasks/by-type", { query: t });
        })).apply(this, arguments);
      }
      function fn(n) {
        return yn.apply(this, arguments);
      }
      function yn() {
        return (yn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/tasks/by-project", { query: t });
        })).apply(this, arguments);
      }
      function dn(n) {
        return hn.apply(this, arguments);
      }
      function hn() {
        return (hn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/stats/tasks/by-batch", { query: t });
        })).apply(this, arguments);
      }
      function mn(n) {
        return Pn.apply(this, arguments);
      }
      function Pn() {
        return (Pn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/tasks/by-day-by-batch", { query: t });
        })).apply(this, arguments);
      }
      function vn(n) {
        return gn.apply(this, arguments);
      }
      function gn() {
        return (gn = rn(function* (n) {
          var { id: t } = n,
            e = on(n, ["id"]);
          return (0, N.ZP)(null, `internal/stats/batches/${t}`, { query: e });
        })).apply(this, arguments);
      }
      function _n(n) {
        return Tn.apply(this, arguments);
      }
      function Tn() {
        return (Tn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/tasks/maas-task-performance", { query: t });
        })).apply(this, arguments);
      }
      function bn(n) {
        return Sn.apply(this, arguments);
      }
      function Sn() {
        return (Sn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/tasks/maas-task-quality", { query: t });
        })).apply(this, arguments);
      }
      function On(n) {
        return Zn.apply(this, arguments);
      }
      function Zn() {
        return (Zn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/quality/precision-recall", { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function kn(n) {
        return Nn.apply(this, arguments);
      }
      function Nn() {
        return (Nn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/quality/error-info", { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function jn(n) {
        return Cn.apply(this, arguments);
      }
      function Cn() {
        return (Cn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/quality/error-type", { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function In(n) {
        return Bn.apply(this, arguments);
      }
      function Bn() {
        return (Bn = rn(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/stats/quality/attributes", { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function En(n) {
        return qn.apply(this, arguments);
      }
      function qn() {
        return (qn = rn(function* (n) {
          return (0,
          N.ZP)(null, "internal/stats/genai-metrics/turn-around-time", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function An(n) {
        return wn.apply(this, arguments);
      }
      function wn() {
        return (wn = rn(function* (n) {
          return (0,
          N.ZP)(null, "internal/stats/genai-metrics/inter-rater-agreement", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      var xn = e(626199),
        Jn = e(997653);
      function Dn(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Gn(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Dn(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Dn(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Rn(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function $n(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })
            )),
            r.forEach(function (t) {
              Rn(n, t, e[t]);
            });
        }
        return n;
      }
      class Fn extends Error {}
      function Mn(n, t, e, r) {
        return Ln.apply(this, arguments);
      }
      function Ln() {
        return (Ln = Gn(function* (n, t, e, r) {
          if (t <= 0)
            throw new TypeError(`fetchWithBackoff invalid limit ${t}`);
          for (let o = 0; o < t - 1; o++) {
            if (n.aborted) throw new Fn();
            try {
              return yield r();
            } catch (i) {
              yield Wn(e(o + 1));
            }
          }
          return yield r();
        })).apply(this, arguments);
      }
      function Wn(n) {
        return new Promise((t) => {
          setTimeout(t, n);
        });
      }
      const Un = (function () {
          var n = Gn(function* (n) {
            const t = yield (0, N.ZP)(null, "internal/audit/tasks", {
                query: n,
              }),
              e = t.tasks.map((n) =>
                ((n) => {
                  try {
                    return (0, xn.L7)(n);
                  } catch (t) {
                    return (0, Jn.dO)(t), n;
                  }
                })(n)
              );
            return $n({}, t, { tasks: e });
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })(),
        Vn = (function () {
          var n = Gn(function* (n) {
            return (0,
            N.ZP)(null, "internal/audit/bulk", { method: "POST", body: n });
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })();
      function Qn(n) {
        return Hn.apply(this, arguments);
      }
      function Hn() {
        return (Hn = Gn(function* (n) {
          return (0, N.ZP)(null, "internal/audit/info", { query: n });
        })).apply(this, arguments);
      }
      function zn(n, t, e) {
        return Kn.apply(this, arguments);
      }
      function Kn() {
        return (Kn = Gn(function* (n, t, e) {
          const r = yield Promise.all(
            k()
              .range(0, Math.ceil(t.taskCount / t.nPerPage))
              .map((r) =>
                Mn(
                  n,
                  3,
                  (n) => n * n * 500,
                  () => Un($n({}, e, { nPerPage: t.nPerPage, pageNumber: r }))
                )
              )
          ).catch((n) => {
            if ("AbortError" === n.name) return [];
            throw n;
          });
          return k().flatMap(r, (n) => n.tasks);
        })).apply(this, arguments);
      }
      const Yn = (function () {
        var n = Gn(function* (n, t) {
          const e = yield Promise.all(
            k().times(
              Math.ceil(n.length / 500),
              (function () {
                var e = Gn(function* (e) {
                  const r = n
                    .slice(500 * e, 500 * (e + 1))
                    .map((n) => ({ id: n.id, status: t }));
                  return yield Vn({ taskUpdates: r });
                });
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()
            )
          );
          return k().flatMap(e, (n) => n.taskResponses);
        });
        return function (t, e) {
          return n.apply(this, arguments);
        };
      })();
      function Xn(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function nt(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Xn(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Xn(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function tt(n) {
        return et.apply(this, arguments);
      }
      function et() {
        return (et = nt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/customer_audit/stats", { query: t });
        })).apply(this, arguments);
      }
      function rt(n) {
        return it.apply(this, arguments);
      }
      function it() {
        return (it = nt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/customer_audit/charts/qualityOverTime", { query: t });
        })).apply(this, arguments);
      }
      function ot(n) {
        return ut.apply(this, arguments);
      }
      function ut() {
        return (ut = nt(function* ({ teamId: n }) {
          return (0,
          N.ZP)(null, `internal/customer_audit/overview2/use_customer_metrics?teamId=${n}`);
        })).apply(this, arguments);
      }
      function lt(n) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = nt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/customer_audit/reports/taskLevel", { query: t });
        })).apply(this, arguments);
      }
      function at(n) {
        return ct.apply(this, arguments);
      }
      function ct() {
        return (ct = nt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/customer_audit/reports/quality", { query: t });
        })).apply(this, arguments);
      }
      function pt(n) {
        return ft.apply(this, arguments);
      }
      function ft() {
        return (ft = nt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/customer_audit/reports/batches", { query: t });
        })).apply(this, arguments);
      }
      function yt(n) {
        return dt.apply(this, arguments);
      }
      function dt() {
        return (dt = nt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/customer_audit/reports/batchesQuality", { query: t });
        })).apply(this, arguments);
      }
      function ht(n) {
        return mt.apply(this, arguments);
      }
      function mt() {
        return (mt = nt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/customer_audit/reports/completion", { query: t });
        })).apply(this, arguments);
      }
      var Pt = e(986004);
      function vt(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function gt(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              vt(o, r, i, u, l, "next", n);
            }
            function l(n) {
              vt(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function _t() {
        return Tt.apply(this, arguments);
      }
      function Tt() {
        return (Tt = gt(function* () {
          try {
            return (0, N.ZP)(null, "internal/user/payments");
          } catch (n) {
            return (0, N.vj)(n, { handleHttp: !0 }), [];
          }
        })).apply(this, arguments);
      }
      function bt() {
        return St.apply(this, arguments);
      }
      function St() {
        return (St = gt(function* () {
          try {
            return (0, N.ZP)(null, "internal/user/paymentMethods");
          } catch (n) {
            (0, N.vj)(n, { handleHttp: !0 });
          }
          return [];
        })).apply(this, arguments);
      }
      function Ot() {
        return Zt.apply(this, arguments);
      }
      function Zt() {
        return (Zt = gt(function* () {
          try {
            return (0,
            N.ZP)(null, "internal/user/reportBlockedUserAddedPayment");
          } catch (n) {
            (0, N.vj)(n, { handleHttp: !0 });
          }
          return [];
        })).apply(this, arguments);
      }
      function kt() {
        return Nt.apply(this, arguments);
      }
      function Nt() {
        return (Nt = gt(function* () {
          try {
            return (0, N.ZP)(null, "internal/user/hasPaymentMethods");
          } catch (n) {
            (0, N.vj)(n, { handleHttp: !0 });
          }
          return { hasPaymentMethods: !1 };
        })).apply(this, arguments);
      }
      function jt(n) {
        return Ct.apply(this, arguments);
      }
      function Ct() {
        return (Ct = gt(function* (n) {
          try {
            const t = { method: "POST", body: { paymentMethodId: n } };
            return (0, N.ZP)(null, "internal/user/paymentMethods/default", t);
          } catch (t) {
            (0, N.vj)(t, { handleHttp: !0 });
          }
          return [];
        })).apply(this, arguments);
      }
      function It(n) {
        return Bt.apply(this, arguments);
      }
      function Bt() {
        return (Bt = gt(function* (n) {
          if ("invoice" === n || Pt.IS_FEDERAL) return null;
          if (!n) return "NONE";
          try {
            return (0, N.ZP)(null, "internal/user/paymentMethods/default");
          } catch (t) {
            (0, N.vj)(t, { handleHttp: !0 });
          }
          return null;
        })).apply(this, arguments);
      }
      function Et(n) {
        return qt.apply(this, arguments);
      }
      function qt() {
        return (qt = gt(function* (n) {
          try {
            const t = { method: "DELETE" };
            return (0, N.ZP)(null, `internal/user/paymentMethods/${n}`, t);
          } catch (t) {
            (0, N.vj)(t, { handleHttp: !0 });
          }
          return null;
        })).apply(this, arguments);
      }
      function At(n) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (wt = gt(function* ({ startDate: n, endDate: t }) {
          const e = { startDate: n, endDate: t },
            r = k().omitBy(e, k().isNil);
          return (0, N.ZP)(null, "internal/user/billing", { query: r });
        })).apply(this, arguments);
      }
      function xt(n) {
        return Jt.apply(this, arguments);
      }
      function Jt() {
        return (Jt = gt(function* ({ startDate: n, endDate: t }) {
          const e = { startDate: n, endDate: t },
            r = k().omitBy(e, k().isNil);
          return (0,
          N.ZP)(null, "internal/user/load_old_billing_csv", { method: "POST", body: JSON.stringify(r), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function Dt(n) {
        return Gt.apply(this, arguments);
      }
      function Gt() {
        return (Gt = gt(function* ({ startDate: n, endDate: t }) {
          const e = { startDate: n, endDate: t, ping: !0 },
            r = k().omitBy(e, k().isNil);
          return (0,
          N.ZP)(null, "internal/user/fetch_old_billing_csv", { query: r });
        })).apply(this, arguments);
      }
      function Rt(n) {
        return $t.apply(this, arguments);
      }
      function $t() {
        return ($t = gt(function* ({ startDate: n, endDate: t }) {
          const e = { startDate: n, endDate: t },
            r = k().omitBy(e, k().isNil);
          return (0,
          N.ZP)(null, "internal/user/fetch_old_billing_csv", { query: r });
        })).apply(this, arguments);
      }
      function Ft(n) {
        return Mt.apply(this, arguments);
      }
      function Mt() {
        return (Mt = gt(function* ({ startDate: n, endDate: t }) {
          const e = { startDate: n, endDate: t },
            r = k().omitBy(e, k().isNil);
          return (0, N.ZP)(null, "internal/user/billing_csv", { query: r });
        })).apply(this, arguments);
      }
      function Lt(n) {
        return Wt.apply(this, arguments);
      }
      function Wt() {
        return (Wt = gt(function* ({
          amount: n,
          startDate: t,
          invoiceDate: e,
        }) {
          const r = { amount: n, startDate: t, invoiceDate: e },
            i = k().omitBy(r, k().isNil);
          return (0, N.ZP)(null, "internal/user/invoice_pdf", { query: i });
        })).apply(this, arguments);
      }
      function Ut() {
        return Vt.apply(this, arguments);
      }
      function Vt() {
        return (Vt = gt(function* () {
          return (0,
          N.ZP)(null, "internal/user/update_payment/intent", { method: "GET" });
        })).apply(this, arguments);
      }
      function Qt(n) {
        return Ht.apply(this, arguments);
      }
      function Ht() {
        return (Ht = gt(function* (n) {
          return (0,
          N.ZP)(null, "internal/user/update_payment/confirm", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function zt(n) {
        return Kt.apply(this, arguments);
      }
      function Kt() {
        return (Kt = gt(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0,
          N.ZP)(null, "internal/user/studio/purchase_studio_subscription", { method: "POST", body: JSON.stringify(t), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function Yt() {
        return Xt.apply(this, arguments);
      }
      function Xt() {
        return (Xt = gt(function* () {
          return (0,
          N.ZP)(null, "internal/user/studio/bundle_purchase_history");
        })).apply(this, arguments);
      }
      function ne() {
        return te.apply(this, arguments);
      }
      function te() {
        return (te = gt(function* () {
          return (0,
          N.ZP)(null, "internal/user/paymentMethods/creditsAndDiscounts");
        })).apply(this, arguments);
      }
      function ee() {
        return re.apply(this, arguments);
      }
      function re() {
        return (re = gt(function* () {
          return (0, N.ZP)(null, "internal/user/paymentMethods/subcontracts");
        })).apply(this, arguments);
      }
      function ie(n) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (oe = gt(function* (n) {
          try {
            const t = { method: "POST", body: { code: n } };
            return (0,
            N.ZP)(null, "internal/user/paymentMethods/redeemCode", t);
          } catch (t) {
            (0, N.vj)(t, { handleHttp: !0 });
          }
          return [];
        })).apply(this, arguments);
      }
      function ue(n) {
        return le.apply(this, arguments);
      }
      function le() {
        return (le = gt(function* ({ project: n }) {
          const t = { project: n },
            e = k().omitBy(t, k().isNil);
          return (0, N.ZP)(null, "internal/user/contracts", { query: e });
        })).apply(this, arguments);
      }
      function se() {
        return ae.apply(this, arguments);
      }
      function ae() {
        return (ae = gt(function* () {
          return (0, N.ZP)(null, "internal/billing/type");
        })).apply(this, arguments);
      }
      function ce() {
        return pe.apply(this, arguments);
      }
      function pe() {
        return (pe = gt(function* () {
          return (0, N.ZP)(null, "internal/billing/tableau");
        })).apply(this, arguments);
      }
      function fe(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function ye(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              fe(o, r, i, u, l, "next", n);
            }
            function l(n) {
              fe(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function de(n) {
        return he.apply(this, arguments);
      }
      function he() {
        return (he = ye(function* (n) {
          return (0,
          N.ZP)(null, "internal/team/inviteMember", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function me(n) {
        return Pe.apply(this, arguments);
      }
      function Pe() {
        return (Pe = ye(function* (n) {
          return (0,
          N.ZP)(null, "internal/team/inviteMembers", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function ve(n) {
        return ge.apply(this, arguments);
      }
      function ge() {
        return (ge = ye(function* (n) {
          return (0,
          N.ZP)(null, "internal/team/removeInvite", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function _e(n) {
        return Te.apply(this, arguments);
      }
      function Te() {
        return (Te = ye(function* (n) {
          return (0,
          N.ZP)(null, "internal/team/removeMember", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function be(n) {
        return Se.apply(this, arguments);
      }
      function Se() {
        return (Se = ye(function* (n) {
          return (0,
          N.ZP)(null, "internal/team/setRole", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function Oe(n) {
        return Ze.apply(this, arguments);
      }
      function Ze() {
        return (Ze = ye(function* (n) {
          return (0,
          N.ZP)(null, "internal/team/setRapidNotifications", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function ke(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Ne(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              ke(o, r, i, u, l, "next", n);
            }
            function l(n) {
              ke(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function je(n) {
        return Ce.apply(this, arguments);
      }
      function Ce() {
        return (Ce = Ne(function* (n) {
          try {
            return (0,
            N.ZP)(null, `internal/lidar/${n}/clone_to_test`, { method: "POST" });
          } catch (t) {
            throw ((0, N.vj)(t, { handleHttp: !0 }), t);
          }
        })).apply(this, arguments);
      }
      function Ie(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Be(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Ie(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Ie(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Ee(n) {
        return qe.apply(this, arguments);
      }
      function qe() {
        return (qe = Be(function* (n) {
          return (0, N.ZP)(null, "internal/batches", { query: n });
        })).apply(this, arguments);
      }
      function Ae(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function we(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Ae(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Ae(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function xe(n) {
        return Je.apply(this, arguments);
      }
      function Je() {
        return (Je = we(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/overview/type", { query: t });
        })).apply(this, arguments);
      }
      function De(n) {
        return Ge.apply(this, arguments);
      }
      function Ge() {
        return (Ge = we(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return (0, N.ZP)(null, "internal/overview/tableau", { query: t });
        })).apply(this, arguments);
      }
      function Re(n) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = we(function* (n) {
          const t = `startDate=${n.startDate}&endDate=${n.endDate}`;
          return (0, N.ZP)(null, `internal/overview/customer-metrics?${t}`);
        })).apply(this, arguments);
      }
      const Fe = (function () {
          var n = we(function* (n) {
            const t = k().omitBy(n, k().isNil);
            return (0, N.ZP)(null, "internal/overview/redash", { query: t });
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })(),
        Me = (function () {
          var n = we(function* (n) {
            const t = k().omitBy(n, k().isNil);
            return yield (0,
            N.ZP)(null, "internal/overview/redash/downloadCSV", { query: t });
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })();
      var Le = e(131221),
        We = e(461106);
      function Ue(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Ve(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Ue(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Ue(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Qe(n) {
        return He.apply(this, arguments);
      }
      function He() {
        return (He = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/analytics/record_event", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ze(n) {
        return Ke.apply(this, arguments);
      }
      function Ke() {
        return (Ke = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/analytics/record_data_upload", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ye(n) {
        return Xe.apply(this, arguments);
      }
      function Xe() {
        return (Xe = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/team/acceptInvite", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function nr(n) {
        return tr.apply(this, arguments);
      }
      function tr() {
        return (tr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/reset_batch_priorities", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function er(n) {
        return rr.apply(this, arguments);
      }
      function rr() {
        return (rr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/send_all_back_to_queue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ir(n) {
        return or.apply(this, arguments);
      }
      function or() {
        return (or = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/set_batch_priorities", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ur(n) {
        return lr.apply(this, arguments);
      }
      function lr() {
        return (lr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/redo_all_from_scratch", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function sr(n) {
        return ar.apply(this, arguments);
      }
      function ar() {
        return (ar = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/redo_all_from_annotation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function cr(n) {
        return pr.apply(this, arguments);
      }
      function pr() {
        return (pr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/tasks/redo_task", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function fr(n) {
        return yr.apply(this, arguments);
      }
      function yr() {
        return (yr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/projects/duplicate_project", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function dr(n) {
        return hr.apply(this, arguments);
      }
      function hr() {
        return (hr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/track_studio_page_visit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function mr(n) {
        return Pr.apply(this, arguments);
      }
      function Pr() {
        return (Pr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/configs/set_assign_rejections", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function vr(n) {
        return gr.apply(this, arguments);
      }
      function gr() {
        return (gr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/configs/set_ocr_settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function _r(n) {
        return Tr.apply(this, arguments);
      }
      function Tr() {
        return (Tr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/models/add_prelabel_model", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function br(n) {
        return Sr.apply(this, arguments);
      }
      function Sr() {
        return (Sr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/models/update_model_mapping", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Or(n) {
        return Zr.apply(this, arguments);
      }
      function Zr() {
        return (Zr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/models/send_batches_to_model", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function kr(n) {
        return Nr.apply(this, arguments);
      }
      function Nr() {
        return (Nr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/models/validate_prelabeling_uploaded_asset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function jr(n) {
        return Cr.apply(this, arguments);
      }
      function Cr() {
        return (Cr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/tasks/auto_annotate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ir(n) {
        return Br.apply(this, arguments);
      }
      function Br() {
        return (Br = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/groups/remove_labeler_from_group", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Er(n) {
        return qr.apply(this, arguments);
      }
      function qr() {
        return (qr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/benchmarks/update_training_task_pass_rate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ar(n) {
        return wr.apply(this, arguments);
      }
      function wr() {
        return (wr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/preference/label_shortcut/mapping", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function xr(n) {
        return Jr.apply(this, arguments);
      }
      function Jr() {
        return (Jr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "/internal/self_serve/metrics_display/preference", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Dr(n) {
        return Gr.apply(this, arguments);
      }
      function Gr() {
        return (Gr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/subscription/stats", { query: t });
        })).apply(this, arguments);
      }
      function Rr(n) {
        return $r.apply(this, arguments);
      }
      function $r() {
        return ($r = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/subscription/deprecated_studio_bundles", { query: t });
        })).apply(this, arguments);
      }
      function Fr(n) {
        return Mr.apply(this, arguments);
      }
      function Mr() {
        return (Mr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/has_batch", { query: t });
        })).apply(this, arguments);
      }
      function Lr(n) {
        return Wr.apply(this, arguments);
      }
      function Wr() {
        return (Wr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/fetch_pending_studio_batches", { query: t });
        })).apply(this, arguments);
      }
      function Ur(n) {
        return Vr.apply(this, arguments);
      }
      function Vr() {
        return (Vr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/benchmarks/answers", { query: t });
        })).apply(this, arguments);
      }
      function Qr(n) {
        return Hr.apply(this, arguments);
      }
      function Hr() {
        return (Hr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/benchmarks/benchmark_and_attempt", { query: t });
        })).apply(this, arguments);
      }
      function zr(n) {
        return Kr.apply(this, arguments);
      }
      function Kr() {
        return (Kr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/models/fetch_models_for_project", { query: t });
        })).apply(this, arguments);
      }
      function Yr(n) {
        return Xr.apply(this, arguments);
      }
      function Xr() {
        return (Xr = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/models/fetch_base_models_for_customer", { query: t });
        })).apply(this, arguments);
      }
      function ni(n) {
        return ti.apply(this, arguments);
      }
      function ti() {
        return (ti = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/models/fetch_model_by_id", { query: t });
        })).apply(this, arguments);
      }
      function ei(n) {
        return ri.apply(this, arguments);
      }
      function ri() {
        return (ri = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/groups/fetch_groups_and_labelers", { query: t });
        })).apply(this, arguments);
      }
      function ii(n) {
        return oi.apply(this, arguments);
      }
      function oi() {
        return (oi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/benchmarks/get_training_task_pass_rate", { query: t });
        })).apply(this, arguments);
      }
      function ui(n) {
        return li.apply(this, arguments);
      }
      function li() {
        return (li = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/fetch_batch_status", { query: t });
        })).apply(this, arguments);
      }
      function si(n) {
        return ai.apply(this, arguments);
      }
      function ai() {
        return (ai = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/fetch_batch_workflow_stats", { query: t });
        })).apply(this, arguments);
      }
      function ci(n) {
        return pi.apply(this, arguments);
      }
      function pi() {
        return (pi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/fetch_batch_task_state_descriptions", { query: t });
        })).apply(this, arguments);
      }
      function fi(n) {
        return yi.apply(this, arguments);
      }
      function yi() {
        return (yi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/projects/pipeline_params", { query: t });
        })).apply(this, arguments);
      }
      function di(n) {
        return hi.apply(this, arguments);
      }
      function hi() {
        return (hi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/projects/change_num_reviews_preview", { query: t });
        })).apply(this, arguments);
      }
      function mi(n) {
        return Pi.apply(this, arguments);
      }
      function Pi() {
        return (Pi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/projects/change_num_reviews_update", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function vi(n) {
        return gi.apply(this, arguments);
      }
      function gi() {
        return (gi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/fetch_task_state_description", { query: t });
        })).apply(this, arguments);
      }
      function _i(n) {
        return Ti.apply(this, arguments);
      }
      function Ti() {
        return (Ti = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/tasks/task_attempts", { query: t });
        })).apply(this, arguments);
      }
      function bi(n) {
        return Si.apply(this, arguments);
      }
      function Si() {
        return (Si = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/tasks/subtask_read_only", { query: t });
        })).apply(this, arguments);
      }
      function Oi(n) {
        return Zi.apply(this, arguments);
      }
      function Zi() {
        return (Zi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/fetch_batch_metrics", { query: t });
        })).apply(this, arguments);
      }
      function ki(n) {
        return Ni.apply(this, arguments);
      }
      function Ni() {
        return (Ni = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/batches/fetch_audit_status", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ji(n) {
        return Ci.apply(this, arguments);
      }
      function Ci() {
        return (Ci = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/preference/label_shortcut/mapping_info", { query: t });
        })).apply(this, arguments);
      }
      function Ii(n) {
        return Bi.apply(this, arguments);
      }
      function Bi() {
        return (Bi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/self_serve/metrics_display/preference", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function Ei(n) {
        return qi.apply(this, arguments);
      }
      function qi() {
        return (qi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/migration/fetch_migration_count", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ai(n) {
        return wi.apply(this, arguments);
      }
      function wi() {
        return (wi = Ve(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/studio/tasks/fetch_elastic_options", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      var xi = e(920587),
        Ji = e(283866),
        Di = e.n(Ji);
      function Gi(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Ri(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Gi(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Gi(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      const $i = (function () {
          var n = Ri(function* () {
            return (yield (0,
            N.ZP)(null, "internal/document-ai-go/projects", { method: "GET" })).docs;
          });
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        Fi = (function () {
          var n = Ri(function* (n, t) {
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/create_project", { method: "POST", body: { name: n.name, taskType: n.type, projectType: n.projectType, documentType: n.documentType, visibleFields: t } });
          });
          return function (t, e) {
            return n.apply(this, arguments);
          };
        })(),
        Mi = (function () {
          var n = Ri(function* () {
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/create_sample_project", { method: "POST" });
          });
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        Li = (function () {
          var n = Ri(function* (n, t, e, r) {
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/update_project_settings_and_params", { method: "POST", body: { projectId: n, projectParams: t, taskId: e, name: r } });
          });
          return function (t, e, r, i) {
            return n.apply(this, arguments);
          };
        })(),
        Wi = (function () {
          var n = Ri(function* (n) {
            return yield (0,
            N.ZP)(null, `internal/document-ai-go/project_params/${n}`, { method: "GET" });
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })(),
        Ui = (function () {
          var n = Ri(function* (n, t) {
            const e = new (Di())();
            e.append("asset", t), e.append("projectId", n);
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/upload_file", { method: "POST", body: e });
          });
          return function (t, e) {
            return n.apply(this, arguments);
          };
        })(),
        Vi = (function () {
          var n = Ri(function* (n, t, e, r) {
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/create_document_task", { method: "POST", body: { projectId: n, attachmentDataUrl: t, filename: e, taskId: r } });
          });
          return function (t, e, r, i) {
            return n.apply(this, arguments);
          };
        })(),
        Qi = (function () {
          var n = Ri(function* () {
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/team", { method: "GET" });
          });
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        Hi = (function () {
          var n = Ri(function* (n, t) {
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/inviteMember", { method: "POST", body: { email: n, teamRole: t } });
          });
          return function (t, e) {
            return n.apply(this, arguments);
          };
        })(),
        zi = (function () {
          var n = Ri(function* (n) {
            yield (0,
            N.ZP)(null, "internal/document-ai-go/acceptInvite", { method: "POST", body: { teamToken: n } });
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })(),
        Ki = (function () {
          var n = Ri(function* (n, t) {
            return yield (0,
            N.ZP)(null, "internal/document-ai-go/auditBatch", { method: "POST", body: { projectId: n, taskIds: t } });
          });
          return function (t, e) {
            return n.apply(this, arguments);
          };
        })(),
        Yi = (function () {
          var n = Ri(function* (n) {
            return yield (0,
            N.ZP)(null, `internal/document-ai-go/auditBatch/${n}`, { method: "GET" });
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })();
      function Xi(n) {
        return no.apply(this, arguments);
      }
      function no() {
        return (no = Ri(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/document-ai-go/analytics/track_event", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      const to = (function () {
        var n = Ri(function* ({ startDate: n, endDate: t }) {
          const e = { startDate: n, endDate: t },
            r = k().omitBy(e, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/document-ai-go/billing/monthlyBalanceInfo", { query: r });
        });
        return function (t) {
          return n.apply(this, arguments);
        };
      })();
      function eo(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function ro(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              eo(o, r, i, u, l, "next", n);
            }
            function l(n) {
              eo(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function io(n, t, e) {
        return oo.apply(this, arguments);
      }
      function oo() {
        return (oo = ro(function* (n, t, e) {
          return yield (0,
          N.ZP)(null, `internal/document-project-metrics/metrics/document_ai_go/${n.join(",")}/${t}/${e}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function uo(n, t, e) {
        return lo.apply(this, arguments);
      }
      function lo() {
        return (lo = ro(function* (n, t, e) {
          return yield (0,
          N.ZP)(null, `internal/document-project-metrics/metrics/enterprise/${n.join(",")}/${t}/${e}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function so(n) {
        return ao.apply(this, arguments);
      }
      function ao() {
        return (ao = ro(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/document-project-metrics/refresh", { method: "POST", body: { projectIds: n } });
        })).apply(this, arguments);
      }
      function co(n) {
        return po.apply(this, arguments);
      }
      function po() {
        return (po = ro(function* (n) {
          return yield (0,
          N.ZP)(null, `internal/document-project-metrics/metrics-config/${n}`, { method: "GET" });
        })).apply(this, arguments);
      }
      var fo = e(478);
      function yo(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function ho(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              yo(o, r, i, u, l, "next", n);
            }
            function l(n) {
              yo(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function mo(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function Po(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })
            )),
            r.forEach(function (t) {
              mo(n, t, e[t]);
            });
        }
        return n;
      }
      function vo(n) {
        return go.apply(this, arguments);
      }
      function go() {
        return (go = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/linterStats", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function _o(n) {
        return To.apply(this, arguments);
      }
      function To() {
        return (To = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/getDowngradedLinters", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function bo(n) {
        return So.apply(this, arguments);
      }
      function So() {
        return (So = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/runMultiReplicaPerStepResponseLinter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Oo(n) {
        return Zo.apply(this, arguments);
      }
      function Zo() {
        return (Zo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/runPerStepResponseLinter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function ko(n) {
        return No.apply(this, arguments);
      }
      function No() {
        return (No = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/runResponseLinter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function jo(n) {
        return Co.apply(this, arguments);
      }
      function Co() {
        return (Co = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchReviewerCopilotInference", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Io(n) {
        return Bo.apply(this, arguments);
      }
      function Bo() {
        return (Bo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/sendReviewerCopilotFeedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Eo(n) {
        return qo.apply(this, arguments);
      }
      function qo() {
        return (qo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/autoCritique", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Ao(n) {
        return wo.apply(this, arguments);
      }
      function wo() {
        return (wo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/corp-project-group-manager/projectConfigs", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function xo(n) {
        return Jo.apply(this, arguments);
      }
      function Jo() {
        return (Jo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchContributorFeedbackForStep", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Do(n) {
        return Go.apply(this, arguments);
      }
      function Go() {
        return (Go = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchContributorFeedbackForAttempt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Ro(n) {
        return $o.apply(this, arguments);
      }
      function $o() {
        return ($o = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchWorkerComments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Fo(n) {
        return Mo.apply(this, arguments);
      }
      function Mo() {
        return (Mo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchWorkerComments/taskAttempt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Lo(n) {
        return Wo.apply(this, arguments);
      }
      function Wo() {
        return (Wo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/addWorkerComment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Uo(n) {
        return Vo.apply(this, arguments);
      }
      function Vo() {
        return (Vo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/bulkAddWorkerComments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Qo(n) {
        return Ho.apply(this, arguments);
      }
      function Ho() {
        return (Ho = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/addFeedbackToWorkerComment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function zo(n) {
        return Ko.apply(this, arguments);
      }
      function Ko() {
        return (Ko = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/bulkAddFeedbackToWorkerComments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Yo(n) {
        return Xo.apply(this, arguments);
      }
      function Xo() {
        return (Xo = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/addAttemptFeedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function nu(n) {
        return tu.apply(this, arguments);
      }
      function tu() {
        return (tu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchAttemptFeedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function eu(n) {
        return ru.apply(this, arguments);
      }
      function ru() {
        return (ru = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchPendingScreening", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function iu(n) {
        return ou.apply(this, arguments);
      }
      function ou() {
        return (ou = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/reviewScreeningWithScore", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function uu(n) {
        return lu.apply(this, arguments);
      }
      function lu() {
        return (lu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/publishScreeningBenchmark", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function su(n) {
        return au.apply(this, arguments);
      }
      function au() {
        return (au = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/publishBulkScreeningBenchmark", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function cu(n) {
        return pu.apply(this, arguments);
      }
      function pu() {
        return (pu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchScreeningBenchmarkData", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function fu(n) {
        return yu.apply(this, arguments);
      }
      function yu() {
        return (yu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/updateScreeningBenchmarkEnabled", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function du(n) {
        return hu.apply(this, arguments);
      }
      function hu() {
        return (hu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchAuditorEvaluationData", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function mu(n) {
        return Pu.apply(this, arguments);
      }
      function Pu() {
        return (Pu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/publishAuditPermissionRole", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function vu(n) {
        return gu.apply(this, arguments);
      }
      function gu() {
        return (gu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/updateAuditPermissionRole", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function _u(n) {
        return Tu.apply(this, arguments);
      }
      function Tu() {
        return (Tu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/archiveAuditPermissionRole", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function bu(n) {
        return Su.apply(this, arguments);
      }
      function Su() {
        return (Su = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchAuditPermissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Ou(n) {
        return Zu.apply(this, arguments);
      }
      function Zu() {
        return (Zu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/updateAuditorPermissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function ku(n) {
        return Nu.apply(this, arguments);
      }
      function Nu() {
        return (Nu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/updatePermissionFilters", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function ju(n) {
        return Cu.apply(this, arguments);
      }
      function Cu() {
        return (Cu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/updatePermissionBenchmarkSettings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Iu(n) {
        return Bu.apply(this, arguments);
      }
      function Bu() {
        return (Bu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchScreeningBenchmarkPermissionsInfo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Eu(n) {
        return qu.apply(this, arguments);
      }
      function qu() {
        return (qu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/updateBenchmarkPermissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Au(n) {
        return wu.apply(this, arguments);
      }
      function wu() {
        return (wu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/purgeScreenings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function xu(n) {
        return Ju.apply(this, arguments);
      }
      function Ju() {
        return (Ju = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/sbqScreenings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Du() {
        return Gu.apply(this, arguments);
      }
      function Gu() {
        return (Gu = ho(function* () {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchUniqueSectionTitles", { method: "POST" });
        })).apply(this, arguments);
      }
      function Ru(n) {
        return $u.apply(this, arguments);
      }
      function $u() {
        return ($u = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/saveCorpDialogue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Fu(n) {
        return Mu.apply(this, arguments);
      }
      function Mu() {
        return (Mu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/fetchCorpDialogues", Po({}, n, { method: "POST" }));
        })).apply(this, arguments);
      }
      function Lu(n) {
        return Wu.apply(this, arguments);
      }
      function Wu() {
        return (Wu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/updateCorpDialogue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Uu(n) {
        return Vu.apply(this, arguments);
      }
      function Vu() {
        return (Vu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/deleteCorpDialogue", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Qu(n) {
        return Hu.apply(this, arguments);
      }
      function Hu() {
        return (Hu = ho(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "corp-api/qm/benchmark-data-bank/benchmark-candidate", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function zu(n) {
        return Ku.apply(this, arguments);
      }
      function Ku() {
        return (Ku = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/qm/benchmark-data-bank/benchmark-candidate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Yu(n) {
        return Xu.apply(this, arguments);
      }
      function Xu() {
        return (Xu = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/qm/benchmark-data-bank/benchmark-candidate/bulk-create", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function nl(n, t) {
        return tl.apply(this, arguments);
      }
      function tl() {
        return (tl = ho(function* (n, t) {
          return yield (0,
          N.ZP)(null, `corp-api/qm/benchmark-data-bank/benchmark-candidate/${n}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function el(n) {
        return rl.apply(this, arguments);
      }
      function rl() {
        return (rl = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/qm/benchmark-data-bank/benchmark-candidate/bulk-approve", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function il(n) {
        return ol.apply(this, arguments);
      }
      function ol() {
        return (ol = ho(function* (n) {
          return yield (0,
          N.ZP)(null, `internal/genai/getAssignmentDetails/${n.assignmentId}`, { method: "GET" });
        })).apply(this, arguments);
      }
      const ul = "internal/genai/stellarTasks";
      function ll(n, t) {
        return sl.apply(this, arguments);
      }
      function sl() {
        return (sl = ho(function* (n, t) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/project/${n.projectId}`, { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function al(n) {
        return cl.apply(this, arguments);
      }
      function cl() {
        return (cl = ho(function* (n) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/taskAttempt/${n.taskAttemptId}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function pl(n) {
        return fl.apply(this, arguments);
      }
      function fl() {
        return (fl = ho(function* (n) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/taskAttempt/${n.taskAttemptId}/eligibility`, { method: "GET" });
        })).apply(this, arguments);
      }
      function yl(n) {
        return dl.apply(this, arguments);
      }
      function dl() {
        return (dl = ho(function* (n) {
          return yield (0, N.ZP)(null, ul + "/", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function hl(n, t) {
        return ml.apply(this, arguments);
      }
      function ml() {
        return (ml = ho(function* (n, t) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/${n.stellarTaskId}`, { method: "PATCH", body: t });
        })).apply(this, arguments);
      }
      function Pl(n) {
        return vl.apply(this, arguments);
      }
      function vl() {
        return (vl = ho(function* (n) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/stellar-quality-ops-hub/${n.projectId}/announced-incentive`, { method: "POST" });
        })).apply(this, arguments);
      }
      function gl(n) {
        return _l.apply(this, arguments);
      }
      function _l() {
        return (_l = ho(function* (n) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/stellar-quality-ops-hub/${n.projectId}/get-announced-incentive`, { method: "GET" });
        })).apply(this, arguments);
      }
      function Tl(n, t) {
        return bl.apply(this, arguments);
      }
      function bl() {
        return (bl = ho(function* (n, t) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/stellar-quality-ops-hub/${n.projectId}/link-stellar-tasks-to-course`, { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function Sl(n, t) {
        return Ol.apply(this, arguments);
      }
      function Ol() {
        return (Ol = ho(function* (n, t) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/stellar-quality-ops-hub/${n.projectId}/confirm-stellar-tasks-payout`, { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function Zl(n, t) {
        return kl.apply(this, arguments);
      }
      function kl() {
        return (kl = ho(function* (n, t) {
          return yield (0,
          N.ZP)(null, `internal/genai/stellarTasks/stellar-quality-ops-hub/${n.projectId}/create-stellar-course`, { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function Nl(n) {
        return jl.apply(this, arguments);
      }
      function jl() {
        return (jl = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/generateUnitTests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Cl(n) {
        return Il.apply(this, arguments);
      }
      function Il() {
        return (Il = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/runUnitTests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Bl(n) {
        return El.apply(this, arguments);
      }
      function El() {
        return (El = ho(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/genai/getHiddenUnitTestsFromTaskMetadata", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function ql(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Al(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              ql(o, r, i, u, l, "next", n);
            }
            function l(n) {
              ql(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function wl(n) {
        return xl.apply(this, arguments);
      }
      function xl() {
        return (xl = Al(function* (n) {
          return yield (0,
          N.ZP)(null, "internal/user/identities-list", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Jl(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Dl(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Jl(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Jl(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Gl(n) {
        return Rl.apply(this, arguments);
      }
      function Rl() {
        return (Rl = Dl(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/disable_taskers_one_project/sync", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function $l(n) {
        return Fl.apply(this, arguments);
      }
      function Fl() {
        return (Fl = Dl(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/purge_taskers_work_one_project/preview", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Ml(n) {
        return Ll.apply(this, arguments);
      }
      function Ll() {
        return (Ll = Dl(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/purge_taskers_work_one_project", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Wl(n) {
        return Ul.apply(this, arguments);
      }
      function Ul() {
        return (Ul = Dl(function* (n) {
          return yield (0,
          N.ZP)(null, "corp-api/mass_add_permissions/sync", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Vl(n) {
        return Ql.apply(this, arguments);
      }
      function Ql() {
        return (Ql = Dl(function* (n) {
          return yield (0,
          N.ZP)(null, `internal/slack/inviteLink/${null !== n && void 0 !== n ? n : "default"}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function Hl(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function zl(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Hl(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Hl(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Kl(n) {
        return Yl.apply(this, arguments);
      }
      function Yl() {
        return (Yl = zl(function* (n) {
          const t = k().omitBy(n, k().isNil);
          return yield (0,
          N.ZP)(null, "internal/demos/vfm/predict", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Xl(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function ns(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Xl(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Xl(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function ts(n) {
        return es.apply(this, arguments);
      }
      function es() {
        return (es = ns(function* (n) {
          const t = yield fetch(
              "https://api.customllm.scale.com/private/v1/legal/pdf_document",
              { method: "POST", body: n }
            ),
            e = yield t.text();
          return (
            console.log("responseText: ", e.replace(/^"|"$/g, "")),
            e.replace(/^"|"$/g, "")
          );
        })).apply(this, arguments);
      }
      function rs(n, t) {
        return is.apply(this, arguments);
      }
      function is() {
        return (is = ns(function* (n, t) {
          const e = yield fetch(
              `https://api.customllm.scale.com/private/v1/legal/${t}/analysis`,
              {
                method: "POST",
                body: JSON.stringify({ prompt: n }),
                headers: { "Content-Type": "application/json" },
              }
            ),
            r = yield e.text();
          return (
            console.log("responseText: ", r.replace(/^"|"$/g, "")),
            r.replace(/^"|"$/g, "")
          );
        })).apply(this, arguments);
      }
      function os(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function us(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              os(o, r, i, u, l, "next", n);
            }
            function l(n) {
              os(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function ls() {
        return ss.apply(this, arguments);
      }
      function ss() {
        return (ss = us(function* () {
          return (0,
          N.ZP)(null, "internal/worker-properties/education", { method: "GET" });
        })).apply(this, arguments);
      }
      function as(n) {
        return cs.apply(this, arguments);
      }
      function cs() {
        return (cs = us(function* (n) {
          return (0,
          N.ZP)(null, "internal/worker-properties/education", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function ps(n, t) {
        return fs.apply(this, arguments);
      }
      function fs() {
        return (fs = us(function* (n, t) {
          return (0,
          N.ZP)(null, `internal/worker-properties/education/${n}`, { method: "PUT", body: JSON.stringify(t), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function ys(n) {
        return ds.apply(this, arguments);
      }
      function ds() {
        return (ds = us(function* (n) {
          return (0,
          N.ZP)(null, `internal/worker-properties/education/${n}`, { method: "DELETE" });
        })).apply(this, arguments);
      }
      function hs() {
        return ms.apply(this, arguments);
      }
      function ms() {
        return (ms = us(function* () {
          return (0,
          N.ZP)(null, "internal/worker-properties/experience", { method: "GET" });
        })).apply(this, arguments);
      }
      function Ps(n) {
        return vs.apply(this, arguments);
      }
      function vs() {
        return (vs = us(function* (n) {
          return (0,
          N.ZP)(null, "internal/worker-properties/experience", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function gs(n, t) {
        return _s.apply(this, arguments);
      }
      function _s() {
        return (_s = us(function* (n, t) {
          return (0,
          N.ZP)(null, `internal/worker-properties/experience/${n}`, { method: "PUT", body: JSON.stringify(t), headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function Ts(n) {
        return bs.apply(this, arguments);
      }
      function bs() {
        return (bs = us(function* (n) {
          return (0,
          N.ZP)(null, `internal/worker-properties/experience/${n}`, { method: "DELETE" });
        })).apply(this, arguments);
      }
      function Ss(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Os(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Ss(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Ss(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Zs(n) {
        return ks.apply(this, arguments);
      }
      function ks() {
        return (ks = Os(function* (n) {
          return (0,
          N.ZP)(null, `internal/sensor-fusion-legacy/data-engine/projects/${n}/stage-definitions`);
        })).apply(this, arguments);
      }
      function Ns(n) {
        return js.apply(this, arguments);
      }
      function js() {
        return (js = Os(function* (n) {
          return (0,
          N.ZP)(null, `internal/sensor-fusion-legacy/data-engine/projects/${n}/blueprints`);
        })).apply(this, arguments);
      }
      function Cs(n) {
        return Is.apply(this, arguments);
      }
      function Is() {
        return (Is = Os(function* (n) {
          return (0,
          N.ZP)(null, `internal/sensor-fusion-legacy/data-engine/tasks/${n}/stage-instances`);
        })).apply(this, arguments);
      }
      function Bs(n, t) {
        return Es.apply(this, arguments);
      }
      function Es() {
        return (Es = Os(function* (n, t) {
          const e = Object.entries(t)
              .map(([n, t]) => `${n}=${t}`)
              .join("&"),
            r = e ? `?${e}` : "";
          return (0,
          N.ZP)(null, `internal/sensor-fusion-legacy/data-engine/stage-definitions/${n}/instances${r}`);
        })).apply(this, arguments);
      }
      function qs(n) {
        return As.apply(this, arguments);
      }
      function As() {
        return (As = Os(function* (n) {
          return (0,
          N.ZP)(null, `internal/sensor-fusion-legacy/data-engine/stage-definitions/${n}/taxonomy`);
        })).apply(this, arguments);
      }
      function ws(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function xs(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              ws(o, r, i, u, l, "next", n);
            }
            function l(n) {
              ws(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Js(n) {
        return Ds.apply(this, arguments);
      }
      function Ds() {
        return (Ds = xs(function* (n) {
          return (0,
          N.ZP)(null, "internal/expert-management/teamLeadInfoForWorkers", { method: "POST", body: { workerIds: n } });
        })).apply(this, arguments);
      }
      function Gs(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Rs(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Gs(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Gs(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      const $s = (function () {
          var n = Rs(function* (n) {
            return (0, N.ZP)(null, `internal/embedded-content/project/${n}`);
          });
          return function (t) {
            return n.apply(this, arguments);
          };
        })(),
        Fs = (function () {
          var n = Rs(function* (n, t) {
            return (0,
            N.ZP)(null, `internal/embedded-content/project/${n}`, { method: "PUT", body: t });
          });
          return function (t, e) {
            return n.apply(this, arguments);
          };
        })();
      function Ms(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function Ls(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              Ms(o, r, i, u, l, "next", n);
            }
            function l(n) {
              Ms(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function Ws(n) {
        return Us.apply(this, arguments);
      }
      function Us() {
        return (Us = Ls(function* (n) {
          const { results: t } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/filters",
            { method: "GET", query: { nlpQuery: n } }
          );
          return t;
        })).apply(this, arguments);
      }
      function Vs(n) {
        return Qs.apply(this, arguments);
      }
      function Qs() {
        return (Qs = Ls(function* (n) {
          const { contributorProfile: t } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/get_contributor_profile",
            { method: "GET", query: { contributorId: n } }
          );
          return t;
        })).apply(this, arguments);
      }
      function Hs(n) {
        return zs.apply(this, arguments);
      }
      function zs() {
        return (zs = Ls(function* (n) {
          const { contributorPII: t } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/get_contributor_pii",
            { method: "GET", query: { contributorId: n } }
          );
          return t;
        })).apply(this, arguments);
      }
      function Ks(n, t) {
        return Ys.apply(this, arguments);
      }
      function Ys() {
        return (Ys = Ls(function* (n, t) {
          const { contributorBiography: e } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/get_contributor_biography",
            { method: "GET", query: { resume: n, contributorId: t } }
          );
          return e;
        })).apply(this, arguments);
      }
      function Xs(n) {
        return na.apply(this, arguments);
      }
      function na() {
        return (na = Ls(function* (n) {
          const { contributorProfiles: t } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/get_contributor_profiles",
            { method: "GET", query: { contributorIds: n } }
          );
          return t;
        })).apply(this, arguments);
      }
      function ta(n) {
        return ea.apply(this, arguments);
      }
      function ea() {
        return (ea = Ls(function* (n) {
          const { shortlists: t } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/get_customer_shortlists",
            { method: "GET", query: { customerId: n } }
          );
          return t;
        })).apply(this, arguments);
      }
      function ra(n, t) {
        return (0, N.ZP)(
          null,
          "internal/contributor-search/add_to_shortlists",
          { method: "POST", body: { shortlistIds: n, contributorIds: t } }
        );
      }
      function ia(n, t, e) {
        return oa.apply(this, arguments);
      }
      function oa() {
        return (oa = Ls(function* (n, t, e) {
          const { shortlist: r } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/create_shortlist",
            { method: "POST", body: { name: t, description: e, customerId: n } }
          );
          return r;
        })).apply(this, arguments);
      }
      function ua(n, t, e) {
        return la.apply(this, arguments);
      }
      function la() {
        return (la = Ls(function* (n, t, e) {
          const { shortlist: r } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/edit_shortlist",
            {
              method: "POST",
              body: { name: t, description: e, shortlistId: n },
            }
          );
          return r;
        })).apply(this, arguments);
      }
      function sa(n) {
        return aa.apply(this, arguments);
      }
      function aa() {
        return (aa = Ls(function* (n) {
          const { deleted: t } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/delete_shortlist",
            { method: "POST", body: { shortlistId: n } }
          );
          return t;
        })).apply(this, arguments);
      }
      function ca() {
        return pa.apply(this, arguments);
      }
      function pa() {
        return (pa = Ls(function* () {
          const { skills: n } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/skills-list",
            { method: "GET" }
          );
          return n;
        })).apply(this, arguments);
      }
      function fa() {
        return ya.apply(this, arguments);
      }
      function ya() {
        return (ya = Ls(function* () {
          const { schools: n } = yield (0, N.ZP)(
            null,
            "internal/contributor-search/schools-list",
            { method: "GET" }
          );
          return n;
        })).apply(this, arguments);
      }
      var da = {
        tasks: r,
        stats: i,
        customerAudit: u,
        projectAudit: o,
        billing: l,
        team: s,
        lidar: a,
        batches: c,
        overview: p,
        selfserve: Le,
        labeling: We,
        studio: f,
        document: xi,
        documentAIGo: y,
        documentProjectMetrics: d,
        contentUnderstanding: fo,
        genai: h,
        customer: m,
        corp: P,
        demos: v,
        legal: g,
        workerProperties: _,
        sensorFusion: T,
        squads: b,
        embeddedContent: S,
        d2c: O,
      };
    },
    461106: function (n, t, e) {
      e.r(t),
        e.d(t, {
          addOrCreateLabelerGroup: function () {
            return s;
          },
          signup: function () {
            return c;
          },
          updateUser: function () {
            return f;
          },
          enableStudio: function () {
            return d;
          },
          login: function () {
            return m;
          },
          resetPasswordSendEmail: function () {
            return v;
          },
          resetPassword: function () {
            return _;
          },
          skipTask: function () {
            return b;
          },
          sendBackToQueue: function () {
            return O;
          },
          submitTaskAttempt: function () {
            return k;
          },
          submitTaskReview: function () {
            return j;
          },
          uploadGroundMeshEditsBeforeSubmit: function () {
            return I;
          },
          submitTrainingAttempt: function () {
            return E;
          },
          removeAssignments: function () {
            return A;
          },
          addAssignments: function () {
            return x;
          },
          batchAssignments: function () {
            return D;
          },
          ensureAdminProjectPermissions: function () {
            return R;
          },
          removeClaims: function () {
            return F;
          },
          addClaims: function () {
            return L;
          },
          updateProjectPermissionsStatus: function () {
            return U;
          },
          updateProjectTrustedTaskerStatus: function () {
            return Q;
          },
          beginCourse: function () {
            return z;
          },
          continueCourse: function () {
            return Y;
          },
          rateCourse: function () {
            return nn;
          },
          screenCourseResume: function () {
            return en;
          },
          certificationTimeRemainingSecsSync: function () {
            return on;
          },
          ensureShadowWorker: function () {
            return ln;
          },
          checkCourseAnswer: function () {
            return an;
          },
          getCourseAnswers: function () {
            return pn;
          },
          cancelTask: function () {
            return yn;
          },
          editBatchGroupAssignment: function () {
            return hn;
          },
          updateResponseWithComments: function () {
            return Pn;
          },
          sendBackToQueueWithComments: function () {
            return gn;
          },
          resolveBenchmarkComments: function () {
            return Tn;
          },
          exportLabelerData: function () {
            return Sn;
          },
          fetchBatchLabelerGroups: function () {
            return Zn;
          },
          fetchSingletonGroups: function () {
            return Nn;
          },
          fetchGroupMembers: function () {
            return Cn;
          },
          getIsStudioProject: function () {
            return Bn;
          },
          fetchGroups: function () {
            return qn;
          },
          getResetPasswordTokenValidity: function () {
            return wn;
          },
          fetchTaskById: function () {
            return Jn;
          },
          getCourse: function () {
            return Gn;
          },
          fetchLabelers: function () {
            return $n;
          },
          fetchLabelersForProject: function () {
            return Mn;
          },
          fetchMetricsForProject: function () {
            return Wn;
          },
          fetchMetricsForAllProjects: function () {
            return Vn;
          },
          fetchTaskThroughputByDay: function () {
            return Hn;
          },
          fetchAnnotationThroughputByDay: function () {
            return Kn;
          },
          fetchAttemptsPerTasker: function () {
            return Xn;
          },
          fetchEvaluationTaskAccuracyByDay: function () {
            return tt;
          },
          fetchEvaluationTaskAccuracyByWorker: function () {
            return rt;
          },
          fetchTimePerAttemptByField: function () {
            return ot;
          },
          getAssignmentFromQueue: function () {
            return lt;
          },
          getProjectsForShadowTasker: function () {
            return at;
          },
          getTaskerActivity: function () {
            return pt;
          },
          beginTrainingScenario: function () {
            return yt;
          },
          pollTrainingAttempt: function () {
            return ht;
          },
          getTrainingScenarioStatus: function () {
            return Pt;
          },
          getCourseProgress: function () {
            return gt;
          },
          getTaskerTaskLogFromCustomerDashboard: function () {
            return Tt;
          },
          getTaskerTaskLog: function () {
            return St;
          },
          getLastResponseByAttempt: function () {
            return Zt;
          },
          getPermissioningHistory: function () {
            return Nt;
          },
          getTaskerMetrics: function () {
            return Ct;
          },
          getProjectsDashboardInfo: function () {
            return Bt;
          },
          getCourseInfo: function () {
            return qt;
          },
          getCourseV2Info: function () {
            return wt;
          },
          getCourseV2UserPermission: function () {
            return Jt;
          },
          getCourseRatings: function () {
            return Gt;
          },
          getCourseV2Ratings: function () {
            return $t;
          },
          getCourseFeedback: function () {
            return Mt;
          },
          getCourseV2Feedback: function () {
            return Wt;
          },
          getStudioCommentsQueueInfo: function () {
            return Vt;
          },
          fetchExportLabelerDataS3: function () {
            return Ht;
          },
          fetchTaskForDummyAttempt: function () {
            return Kt;
          },
          beginCourseV2: function () {
            return Xt;
          },
          continueCourseV2: function () {
            return te;
          },
          checkCourseV2Answer: function () {
            return re;
          },
          recordCourseV2TextResponse: function () {
            return oe;
          },
          rateCourseV2: function () {
            return le;
          },
          submitBenchmarkAccuracyV2: function () {
            return ae;
          },
        });
      var r = e(298784),
        i = e.n(r),
        o = e(285556);
      function u(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function l(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function l(n) {
              u(o, r, i, l, s, "next", n);
            }
            function s(n) {
              u(o, r, i, l, s, "throw", n);
            }
            l(void 0);
          });
        };
      }
      function s(n) {
        return a.apply(this, arguments);
      }
      function a() {
        return (a = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/groups/add_or_create_labeler_group", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function c(n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/registerNext", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function f(n) {
        return y.apply(this, arguments);
      }
      function y() {
        return (y = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/user/update", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function d(n) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/enable_studio", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function m(n) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/loginNext", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function v(n) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/reset_password/send_email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function _(n) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/reset_password", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function b(n) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = l(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/complete_studio/quarantine", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function O(n) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = l(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/complete_studio/unquarantine", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function k(n, t) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/complete_studio/${n}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function j(n, t) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/complete_studio/review/${n}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function I(n) {
        return B.apply(this, arguments);
      }
      function B() {
        return (B = l(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/labeling/upload_ground_mesh_edits_before_submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function E(n, t, e) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = l(function* (n, t, e) {
          return yield (0,
          o.ZP)(null, `internal/training/complete/${n}/${t}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) });
        })).apply(this, arguments);
      }
      function A(n) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/remove_assignments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function x(n) {
        return J.apply(this, arguments);
      }
      function J() {
        return (J = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/add_assignments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function D(n) {
        return G.apply(this, arguments);
      }
      function G() {
        return (G = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/batch_assignments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function R(n) {
        return $.apply(this, arguments);
      }
      function $() {
        return ($ = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/ensure_admin_permissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function F(n) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/remove_claims", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function L(n) {
        return W.apply(this, arguments);
      }
      function W() {
        return (W = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/add_claims", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function U(n) {
        return V.apply(this, arguments);
      }
      function V() {
        return (V = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_permission_status", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Q(n) {
        return H.apply(this, arguments);
      }
      function H() {
        return (H = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_trusted_status", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function z(n) {
        return K.apply(this, arguments);
      }
      function K() {
        return (K = l(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/courses/${n}/begin/`, { method: "POST", headers: { "Content-Type": "application/json" } });
        })).apply(this, arguments);
      }
      function Y(n, t) {
        return X.apply(this, arguments);
      }
      function X() {
        return (X = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/courses/${n}/continue/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function nn(n, t) {
        return tn.apply(this, arguments);
      }
      function tn() {
        return (tn = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/courses/${n}/rate/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function en(n, t) {
        return rn.apply(this, arguments);
      }
      function rn() {
        return (rn = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/courses/${n}/screen_resume/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function on(n, t) {
        return un.apply(this, arguments);
      }
      function un() {
        return (un = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/courses/${n}/certificationTimeRemainingSecsSync`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ certificationTimeRemainingSecs: t }) });
        })).apply(this, arguments);
      }
      function ln() {
        return sn.apply(this, arguments);
      }
      function sn() {
        return (sn = l(function* () {
          return yield (0,
          o.ZP)(null, "internal/labeling/ensure_shadow_worker", {});
        })).apply(this, arguments);
      }
      function an(n) {
        return cn.apply(this, arguments);
      }
      function cn() {
        return (cn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/courses/checkAnswer", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function pn(n) {
        return fn.apply(this, arguments);
      }
      function fn() {
        return (fn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/courses/getAnswers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function yn(n) {
        return dn.apply(this, arguments);
      }
      function dn() {
        return (dn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/cancel_task", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function hn(n) {
        return mn.apply(this, arguments);
      }
      function mn() {
        return (mn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/groups/edit_batch_group_assignment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Pn(n) {
        return vn.apply(this, arguments);
      }
      function vn() {
        return (vn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_response_with_comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function gn(n) {
        return _n.apply(this, arguments);
      }
      function _n() {
        return (_n = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/send_back_to_queue_with_comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Tn(n) {
        return bn.apply(this, arguments);
      }
      function bn() {
        return (bn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/resolve_benchmark_comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Sn(n) {
        return On.apply(this, arguments);
      }
      function On() {
        return (On = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/labelers/export_labeler_data", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Zn(n) {
        return kn.apply(this, arguments);
      }
      function kn() {
        return (kn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/groups/fetch_batch_labeler_groups", { query: t });
        })).apply(this, arguments);
      }
      function Nn(n) {
        return jn.apply(this, arguments);
      }
      function jn() {
        return (jn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/groups/fetch_singleton_groups", { query: t });
        })).apply(this, arguments);
      }
      function Cn(n) {
        return In.apply(this, arguments);
      }
      function In() {
        return (In = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/groups/fetch_group_members", { query: t });
        })).apply(this, arguments);
      }
      function Bn(n) {
        return En.apply(this, arguments);
      }
      function En() {
        return (En = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/is_studio_project", { query: t });
        })).apply(this, arguments);
      }
      function qn(n) {
        return An.apply(this, arguments);
      }
      function An() {
        return (An = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/groups/fetch_groups", { query: t });
        })).apply(this, arguments);
      }
      function wn(n) {
        return xn.apply(this, arguments);
      }
      function xn() {
        return (xn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/reset_password/validate_token", { query: t });
        })).apply(this, arguments);
      }
      function Jn(n) {
        return Dn.apply(this, arguments);
      }
      function Dn() {
        return (Dn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/tasks", { query: t });
        })).apply(this, arguments);
      }
      function Gn(n) {
        return Rn.apply(this, arguments);
      }
      function Rn() {
        return (Rn = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/courses/${n}/details/`, {});
        })).apply(this, arguments);
      }
      function $n(n) {
        return Fn.apply(this, arguments);
      }
      function Fn() {
        return (Fn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/labelers", { query: t });
        })).apply(this, arguments);
      }
      function Mn(n) {
        return Ln.apply(this, arguments);
      }
      function Ln() {
        return (Ln = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/labelers_for_project", { query: t });
        })).apply(this, arguments);
      }
      function Wn(n) {
        return Un.apply(this, arguments);
      }
      function Un() {
        return (Un = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics_for_project", { query: t });
        })).apply(this, arguments);
      }
      function Vn(n) {
        return Qn.apply(this, arguments);
      }
      function Qn() {
        return (Qn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics_for_all_projects", { query: t });
        })).apply(this, arguments);
      }
      function Hn(n) {
        return zn.apply(this, arguments);
      }
      function zn() {
        return (zn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics/tasks_throughput_by_day", { query: t });
        })).apply(this, arguments);
      }
      function Kn(n) {
        return Yn.apply(this, arguments);
      }
      function Yn() {
        return (Yn = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics/annotations_throughput_by_day", { query: t });
        })).apply(this, arguments);
      }
      function Xn(n) {
        return nt.apply(this, arguments);
      }
      function nt() {
        return (nt = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics/attempts_per_tasker", { query: t });
        })).apply(this, arguments);
      }
      function tt(n) {
        return et.apply(this, arguments);
      }
      function et() {
        return (et = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics/evaluation_task_accuracy_by_day", { query: t });
        })).apply(this, arguments);
      }
      function rt(n) {
        return it.apply(this, arguments);
      }
      function it() {
        return (it = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics/evaluation_task_accuracy_by_worker", { query: t });
        })).apply(this, arguments);
      }
      function ot(n) {
        return ut.apply(this, arguments);
      }
      function ut() {
        return (ut = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics/time_per_attempt_by_field", { query: t });
        })).apply(this, arguments);
      }
      function lt(n) {
        return st.apply(this, arguments);
      }
      function st() {
        return (st = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/labeling/tasks/get_task_from_queue", { query: t });
        })).apply(this, arguments);
      }
      function at(n) {
        return ct.apply(this, arguments);
      }
      function ct() {
        return (ct = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/labeling/get_projects_dashboard_info", { query: t });
        })).apply(this, arguments);
      }
      function pt(n) {
        return ft.apply(this, arguments);
      }
      function ft() {
        return (ft = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/scaler/activity", { query: t });
        })).apply(this, arguments);
      }
      function yt(n, t) {
        return dt.apply(this, arguments);
      }
      function dt() {
        return (dt = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/training/begin/${n}`, { query: { retry: t } });
        })).apply(this, arguments);
      }
      function ht(n) {
        return mt.apply(this, arguments);
      }
      function mt() {
        return (mt = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/training/fetch/${n}`, {});
        })).apply(this, arguments);
      }
      function Pt(n) {
        return vt.apply(this, arguments);
      }
      function vt() {
        return (vt = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/training/status/${n}`, {});
        })).apply(this, arguments);
      }
      function gt(n) {
        return _t.apply(this, arguments);
      }
      function _t() {
        return (_t = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/courses/${n}`, {});
        })).apply(this, arguments);
      }
      function Tt(n) {
        return bt.apply(this, arguments);
      }
      function bt() {
        return (bt = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/per_tasker_task_log_for_customer", { query: t });
        })).apply(this, arguments);
      }
      function St(n) {
        return Ot.apply(this, arguments);
      }
      function Ot() {
        return (Ot = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/labeling/per_tasker_task_log", { query: t });
        })).apply(this, arguments);
      }
      function Zt(n) {
        return kt.apply(this, arguments);
      }
      function kt() {
        return (kt = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/labeling/last_response_by_attempt", { query: t });
        })).apply(this, arguments);
      }
      function Nt(n) {
        return jt.apply(this, arguments);
      }
      function jt() {
        return (jt = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/labeling/permissioning_history", { query: t });
        })).apply(this, arguments);
      }
      function Ct(n) {
        return It.apply(this, arguments);
      }
      function It() {
        return (It = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/labeling/get_tasker_metrics", { query: t });
        })).apply(this, arguments);
      }
      function Bt(n) {
        return Et.apply(this, arguments);
      }
      function Et() {
        return (Et = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/labeling/get_projects_dashboard_info", { query: t });
        })).apply(this, arguments);
      }
      function qt(n) {
        return At.apply(this, arguments);
      }
      function At() {
        return (At = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/courses/${n}`, {});
        })).apply(this, arguments);
      }
      function wt(n) {
        return xt.apply(this, arguments);
      }
      function xt() {
        return (xt = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/coursesV2/getCourse/${n}`, {});
        })).apply(this, arguments);
      }
      function Jt(n, t) {
        return Dt.apply(this, arguments);
      }
      function Dt() {
        return (Dt = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/coursesV2/hasPermission", { query: { userId: n, courseId: t } });
        })).apply(this, arguments);
      }
      function Gt(n) {
        return Rt.apply(this, arguments);
      }
      function Rt() {
        return (Rt = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/courses/rating/${n}`, {});
        })).apply(this, arguments);
      }
      function $t(n) {
        return Ft.apply(this, arguments);
      }
      function Ft() {
        return (Ft = l(function* (n) {
          return yield (0, o.ZP)(null, `internal/coursesV2/rating/${n}`, {});
        })).apply(this, arguments);
      }
      function Mt(n, t) {
        return Lt.apply(this, arguments);
      }
      function Lt() {
        return (Lt = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/courses/feedback/${n}`, { query: { rating: t } });
        })).apply(this, arguments);
      }
      function Wt(n, t) {
        return Ut.apply(this, arguments);
      }
      function Ut() {
        return (Ut = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/coursesV2/feedback/${n}`, { query: { rating: t } });
        })).apply(this, arguments);
      }
      function Vt(n) {
        return Qt.apply(this, arguments);
      }
      function Qt() {
        return (Qt = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/get_studio_comments_queue_info", { query: t });
        })).apply(this, arguments);
      }
      function Ht(n) {
        return zt.apply(this, arguments);
      }
      function zt() {
        return (zt = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/studio/labelers/export_labeler_data_s3", { query: t });
        })).apply(this, arguments);
      }
      function Kt(n) {
        return Yt.apply(this, arguments);
      }
      function Yt() {
        return (Yt = l(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/fetch_task_for_dummy_attempt", { query: t });
        })).apply(this, arguments);
      }
      function Xt(n, t) {
        return ne.apply(this, arguments);
      }
      function ne() {
        return (ne = l(function* (n, t) {
          const e = void 0 !== t ? { startNewAttempt: t } : void 0;
          return yield (0,
          o.ZP)(null, `internal/coursesV2/${n}/begin`, { method: "POST", headers: { "Content-Type": "application/json" }, body: e ? JSON.stringify(e) : void 0 });
        })).apply(this, arguments);
      }
      function te(n, t) {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (ee = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/coursesV2/${n}/continue`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function re(n, t) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/coursesV2/${n}/checkAnswer`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function oe(n, t) {
        return ue.apply(this, arguments);
      }
      function ue() {
        return (ue = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/coursesV2/${n}/recordTextResponse`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function le(n, t) {
        return se.apply(this, arguments);
      }
      function se() {
        return (se = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/coursesV2/${n}/rate/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ae(n, t) {
        return ce.apply(this, arguments);
      }
      function ce() {
        return (ce = l(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/coursesV2/${n}/submitBenchmarkAccuracy`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
    },
    131221: function (n, t, e) {
      e.r(t),
        e.d(t, {
          customerLikedFeedback: function () {
            return y;
          },
          requestPhoneVerification: function () {
            return h;
          },
          validatePhoneVerification: function () {
            return P;
          },
          setNotificationsRead: function () {
            return g;
          },
          dismissAnnouncement: function () {
            return T;
          },
          checkShouldEnterOnboardingTour: function () {
            return S;
          },
          exitOnboardingTour: function () {
            return Z;
          },
          enterOnboardingTour: function () {
            return N;
          },
          setNucleusNotificationsRead: function () {
            return C;
          },
          inheritWorkers: function () {
            return B;
          },
          setLidarPipeline: function () {
            return q;
          },
          setTextCollectionUseTemplate: function () {
            return w;
          },
          fetchProjectAssetById: function () {
            return J;
          },
          dismissBenchmarkAlert: function () {
            return G;
          },
          setProjectTaxonomy: function () {
            return $;
          },
          setDraftProjectTaxonomy: function () {
            return M;
          },
          initializeNucleusDataset: function () {
            return W;
          },
          initializeNucleusStaticAssetsDataset: function () {
            return V;
          },
          createInstructionBatch: function () {
            return H;
          },
          createRegularBatch: function () {
            return K;
          },
          setConfigValues: function () {
            return X;
          },
          setConfigValuesByPath: function () {
            return tn;
          },
          dismissCustomGrading: function () {
            return rn;
          },
          createOrEditConcept: function () {
            return un;
          },
          deleteConcept: function () {
            return sn;
          },
          setGraderConfig: function () {
            return cn;
          },
          setGraderConfigByExample: function () {
            return fn;
          },
          setEdgeCaseAlerts: function () {
            return dn;
          },
          setCommonErrors: function () {
            return mn;
          },
          useAsGoodInstructionsExample: function () {
            return vn;
          },
          useAsCommonErrorExample: function () {
            return _n;
          },
          useAsCustomInstructionExample: function () {
            return bn;
          },
          massCopyTaxonomyForExamples: function () {
            return On;
          },
          updateExamplesWithNewTaxonomy: function () {
            return kn;
          },
          updateTrainingTasksWithNewTaxonomy: function () {
            return jn;
          },
          updateBenchmarksWithNewTaxonomy: function () {
            return In;
          },
          setLongHintsJSON: function () {
            return En;
          },
          setLongHints: function () {
            return An;
          },
          setAutoRedos: function () {
            return xn;
          },
          setRapidSmartTraining: function () {
            return Dn;
          },
          updateInitialSetup: function () {
            return Rn;
          },
          pauseProject: function () {
            return Fn;
          },
          unPauseProject: function () {
            return Ln;
          },
          updateBatchProps: function () {
            return Un;
          },
          getBatchTimeBucket: function () {
            return Qn;
          },
          adultContentToggle: function () {
            return zn;
          },
          updateUserInfo: function () {
            return Yn;
          },
          uploadInstructionImage: function () {
            return nt;
          },
          setProjectInstructions: function () {
            return et;
          },
          setProjectInstructionsV2: function () {
            return it;
          },
          setDraftProjectInstructions: function () {
            return ut;
          },
          setInstructionsExample: function () {
            return st;
          },
          setInstructionsStaticExample: function () {
            return ct;
          },
          updateInstructionsExample: function () {
            return ft;
          },
          getInstructionDatasetId: function () {
            return dt;
          },
          getAmountOfAssets: function () {
            return mt;
          },
          startCDSMultiUpload: function () {
            return vt;
          },
          completeCDSMultiUpload: function () {
            return _t;
          },
          retrieveCDSPartUrl: function () {
            return bt;
          },
          createPresignedPostUrl: function () {
            return Ot;
          },
          uploadAssetFromPresignedUrl: function () {
            return kt;
          },
          uploadAssetFromComputer: function () {
            return jt;
          },
          uploadAssetFromCSVAsync: function () {
            return It;
          },
          uploadAssetFromCSV: function () {
            return Et;
          },
          uploadAssetTemplate: function () {
            return At;
          },
          addProjectToTemplateAsset: function () {
            return xt;
          },
          useSampleDataset: function () {
            return Dt;
          },
          importNucleusDataset: function () {
            return Rt;
          },
          uploadAssetsFromS3: function () {
            return Ft;
          },
          uploadAssetsFromGCP: function () {
            return Lt;
          },
          uploadAssetsFromAzure: function () {
            return Ut;
          },
          uploadAssetsFromPreviousProject: function () {
            return Qt;
          },
          deleteAllAssets: function () {
            return zt;
          },
          deleteAssets: function () {
            return Yt;
          },
          toggleUploadedAssetForLabeledExample: function () {
            return ne;
          },
          updateUploadedAssetText: function () {
            return ee;
          },
          createBenchmark: function () {
            return ie;
          },
          retireBenchmark: function () {
            return ue;
          },
          reenableBenchmark: function () {
            return se;
          },
          convertBenchmark: function () {
            return ce;
          },
          convertSuggestedBenchmark: function () {
            return fe;
          },
          massRetireBenchmarks: function () {
            return de;
          },
          massRetireBenchmarksPreview: function () {
            return me;
          },
          setNeedToBeReviewed: function () {
            return ve;
          },
          convertBatch: function () {
            return _e;
          },
          cancelBatch: function () {
            return be;
          },
          finalizeBatch: function () {
            return Oe;
          },
          updateTrainingScenario: function () {
            return ke;
          },
          massCopyTaxonomy: function () {
            return je;
          },
          edgeCaseAction: function () {
            return Ie;
          },
          validateResponse: function () {
            return Ee;
          },
          updateBenchmarkFrequency: function () {
            return Ae;
          },
          updateBenchmarkRecycling: function () {
            return xe;
          },
          updateBenchmarkChildScenarios: function () {
            return De;
          },
          incrementProjectTemplateUsage: function () {
            return Re;
          },
          trackEvent: function () {
            return Fe;
          },
          updateCustomerAttachmentHipaaCoverage: function () {
            return Le;
          },
          updateProjectAttachmentHipaaCoverage: function () {
            return Ue;
          },
          redeemPaymentCredit: function () {
            return Qe;
          },
          requestProjectTemplate: function () {
            return ze;
          },
          fetchReferralLink: function () {
            return Ye;
          },
          fetchNotifications: function () {
            return nr;
          },
          fetchCurrentAnnouncements: function () {
            return er;
          },
          fetchNucleusNotifications: function () {
            return ir;
          },
          fetchProjectNotifications: function () {
            return ur;
          },
          fetchProjectTaxonomy: function () {
            return sr;
          },
          fetchProjectTaxonomyVersion: function () {
            return cr;
          },
          fetchProjectTaxonomyLatestVersion: function () {
            return fr;
          },
          fetchDraftProjectTaxonomy: function () {
            return dr;
          },
          fetchLatestProjectTaxonomy: function () {
            return mr;
          },
          fetchCommonAnswers: function () {
            return vr;
          },
          getLongHintsJSON: function () {
            return _r;
          },
          fetchNumProjects: function () {
            return br;
          },
          fetchProjectAssets: function () {
            return Or;
          },
          fetchProjectAssetsLite: function () {
            return kr;
          },
          fetchCursorPaginatedProjectAssets: function () {
            return jr;
          },
          fetchElasticProjectAssets: function () {
            return Ir;
          },
          fetchConcepts: function () {
            return Er;
          },
          fetchActiveBenchmarks: function () {
            return Ar;
          },
          fetchNumDisabledBenchmarks: function () {
            return xr;
          },
          fetchSuggestedBenchmarks: function () {
            return Dr;
          },
          fetchBenchmarkById: function () {
            return Rr;
          },
          fetchBenchmarks: function () {
            return Fr;
          },
          fetchGraderBenchmarks: function () {
            return Lr;
          },
          fetchBenchmarkAlerts: function () {
            return Ur;
          },
          fetchTaskForBenchmark: function () {
            return Qr;
          },
          fetchProjectInstructions: function () {
            return zr;
          },
          fetchProjectInstructionsV2: function () {
            return Yr;
          },
          fetchDraftProjectInstructionsV2: function () {
            return ni;
          },
          fetchLatestProjectInstructions: function () {
            return ei;
          },
          fetchProjectInstructionVersion: function () {
            return ii;
          },
          getProjectInstructionStatus: function () {
            return ui;
          },
          submitQuiz: function () {
            return si;
          },
          updateQuiz: function () {
            return ci;
          },
          getNextQuiz: function () {
            return fi;
          },
          switchInstructionQuiz: function () {
            return di;
          },
          getInstructionQuizFlag: function () {
            return mi;
          },
          fetchUserHasSeenInstructions: function () {
            return vi;
          },
          setUserHasSeenInstructions: function () {
            return _i;
          },
          fetchInstructionExample: function () {
            return bi;
          },
          fetchTasksRemainingInBatch: function () {
            return Oi;
          },
          fetchInstructionPageFeedback: function () {
            return ki;
          },
          fetchInstructionExampleTaxonomyMismatches: function () {
            return ji;
          },
          fetchInstructionAssetS3URL: function () {
            return Ii;
          },
          fetchAssetS3URL: function () {
            return Ei;
          },
          fetchAssetPages: function () {
            return Ai;
          },
          fetchAssetToTemplateAttachment: function () {
            return xi;
          },
          fetchConfigValues: function () {
            return Di;
          },
          fetchProjectNGIConfig: function () {
            return Ri;
          },
          fetchProjectAuditConfig: function () {
            return Fi;
          },
          fetchAVTaxonomyConfig: function () {
            return Li;
          },
          fetchConfigValuesByPath: function () {
            return Ui;
          },
          fetchUserIntegrationInfo: function () {
            return Qi;
          },
          fetchGraderConfig: function () {
            return zi;
          },
          rerunDefaultGraders: function () {
            return Yi;
          },
          fetchInfo: function () {
            return no;
          },
          fetchState: function () {
            return eo;
          },
          fetchProject: function () {
            return io;
          },
          fetchMetrics: function () {
            return uo;
          },
          fetchMongoMetrics: function () {
            return so;
          },
          fetchInstructionFeedback: function () {
            return co;
          },
          fetchTaskBatches: function () {
            return fo;
          },
          fetchHasLiveBatch: function () {
            return ho;
          },
          fetchBatchesFromName: function () {
            return Po;
          },
          fetchTaskStatsByBatch: function () {
            return go;
          },
          fetchTaskStatsForBatch: function () {
            return To;
          },
          fetchBatchTaskCreationData: function () {
            return So;
          },
          fetchEdgeCaseAlerts: function () {
            return Zo;
          },
          checkBatchProperties: function () {
            return No;
          },
          fetchNeedToBeReviewed: function () {
            return Co;
          },
          fetchBillingSpecs: function () {
            return Bo;
          },
          fetchBenchmarkFrequency: function () {
            return qo;
          },
          fetchBenchmarkRecycling: function () {
            return wo;
          },
          fetchExistedBenchmarksFromTask: function () {
            return Jo;
          },
          fetchProjectAttachmentHipaaCoverage: function () {
            return Go;
          },
          fetchAdeptBatchResult: function () {
            return $o;
          },
          fetchProjectTemplatePreviews: function () {
            return Mo;
          },
          fetchSampleDatasets: function () {
            return Wo;
          },
          validateParams: function () {
            return Vo;
          },
          validateTaskTemplate: function () {
            return Ho;
          },
          fetchTaskTemplate: function () {
            return Ko;
          },
          pushTaskTemplate: function () {
            return Xo;
          },
          resetCourseProgress: function () {
            return tu;
          },
          getTrainModelRuns: function () {
            return ru;
          },
          getTrainModelSignedUrl: function () {
            return ou;
          },
          submitModelTrainingRequest: function () {
            return lu;
          },
          getEndpoints: function () {
            return au;
          },
          submitEndpointCreationRequest: function () {
            return pu;
          },
          submitEndpointUpdateRequest: function () {
            return yu;
          },
          fetchCourses: function () {
            return hu;
          },
          getUseCaseAndPipeline: function () {
            return Pu;
          },
          initializeUseCaseAndPipeline: function () {
            return gu;
          },
          postImageUpload: function () {
            return Tu;
          },
          postSubmitTask: function () {
            return Su;
          },
          getTask: function () {
            return Zu;
          },
          createCourse: function () {
            return Nu;
          },
          createFeedbackCourse: function () {
            return Cu;
          },
          updateCourse: function () {
            return Bu;
          },
          updateCourseOrder: function () {
            return qu;
          },
          getProjectConfig: function () {
            return wu;
          },
          postProjectConfig: function () {
            return Ju;
          },
          fetchProjectValidators: function () {
            return Gu;
          },
          setProjectValidators: function () {
            return $u;
          },
          getSavedPromptValidators: function () {
            return Mu;
          },
          savePromptValidator: function () {
            return Wu;
          },
          disableSavedPrompt: function () {
            return Vu;
          },
          getProjectPromptValidators: function () {
            return Hu;
          },
          getProjectTaxonomyForLinters: function () {
            return Ku;
          },
          getLinterMetrics: function () {
            return Xu;
          },
          getBackdatedLinterMetrics: function () {
            return tl;
          },
          saveProjectPromptValidators: function () {
            return rl;
          },
          publishDraftTaxonomy: function () {
            return ol;
          },
          deleteDraftTaxonomy: function () {
            return ll;
          },
          createAuditSession: function () {
            return al;
          },
          renameAuditSession: function () {
            return pl;
          },
          setIsArchivedAuditSession: function () {
            return yl;
          },
          fetchAuditSessions: function () {
            return hl;
          },
          fetchAuditSessionTasks: function () {
            return Pl;
          },
          fetchCustomerChatAudit: function () {
            return gl;
          },
          upsertCustomerChatAudit: function () {
            return Tl;
          },
          deleteCustomerChatAudit: function () {
            return Sl;
          },
          fetchCustomerComments: function () {
            return Zl;
          },
          removeCustomerComment: function () {
            return Nl;
          },
          addCustomerComment: function () {
            return Cl;
          },
          fetchVersions: function () {
            return Bl;
          },
          fetchVersionTaskCounts: function () {
            return ql;
          },
          compareVersions: function () {
            return wl;
          },
          updateVersion: function () {
            return Jl;
          },
          dolphinGenerateResponse: function () {
            return Gl;
          },
          dolphinGeneratePrompt: function () {
            return $l;
          },
          fetchResponsesFromChatEndpoint: function () {
            return Ml;
          },
          fetchStreamingModelCheckpoint: function () {
            return Wl;
          },
          updateStreamingModelCheckpoint: function () {
            return Vl;
          },
          fetchAutoSpec: function () {
            return Hl;
          },
          fetchAutoCritique: function () {
            return Kl;
          },
          fetchAiAssistantPrompts: function () {
            return Xl;
          },
          fetchRlhfBlacklistWords: function () {
            return ts;
          },
          fetchJWTForStreaming: function () {
            return rs;
          },
          askGPT: function () {
            return os;
          },
          validatePrompt: function () {
            return ls;
          },
          validateReferenceText: function () {
            return as;
          },
          sendBackToBase: function () {
            return ps;
          },
          testPostProcessConfig: function () {
            return ys;
          },
          testPromptConfig: function () {
            return hs;
          },
          fieldValidation: function () {
            return Ps;
          },
          fetchFieldValidationConfig: function () {
            return gs;
          },
          fetchPRPPromptOptions: function () {
            return Ts;
          },
          getWorkerProjectQuality: function () {
            return Ss;
          },
          getWorkerProjectQualityListByProject: function () {
            return Zs;
          },
          getWorkerProjectQualitySample: function () {
            return Ns;
          },
          getWorkerTagMappings: function () {
            return Cs;
          },
          getBenchmarkStats: function () {
            return Bs;
          },
          getWorkerBenchmarkStats: function () {
            return qs;
          },
          getWorkerAutoDisables: function () {
            return ws;
          },
          getFraudTaskers: function () {
            return Js;
          },
          getFraudSignals: function () {
            return Gs;
          },
          getDisableAccuracyThresholds: function () {
            return $s;
          },
          getAuditBmBatch: function () {
            return Ms;
          },
          getQualitySignalsByProjectId: function () {
            return Ws;
          },
          getWorkerSkillById: function () {
            return Vs;
          },
          getWorkerSkillsByIds: function () {
            return Hs;
          },
          getWorkerSkillEntriesByWorkerId: function () {
            return Ks;
          },
          getWritingSamplesByWorkerId: function () {
            return Xs;
          },
          getProjectQualityTaskData: function () {
            return ta;
          },
          getWorkerSkillTaskData: function () {
            return ra;
          },
          getWorkerSkillRequirementsByProject: function () {
            return oa;
          },
          getWorkerSkillEntriesByWorkerAndWorkerSkills: function () {
            return la;
          },
          getWorkerSkillEntrySignalsByWorkerSkillEntries: function () {
            return aa;
          },
          getQualityProfileConfig: function () {
            return pa;
          },
          updateQualityProfileConfig: function () {
            return ya;
          },
          getQualitySignalsByWorkerSkillEntriesAndDateRange: function () {
            return ha;
          },
          getQualitySignals: function () {
            return Pa;
          },
          updatePRPConfig: function () {
            return ga;
          },
          fetchSpellingAndGrammarEnabled: function () {
            return Ta;
          },
          fetchDisablePastingEnabled: function () {
            return Sa;
          },
          fetchRlhfValidatorConfig: function () {
            return Za;
          },
          countThreads: function () {
            return Na;
          },
          fetchAllThreads: function () {
            return Ca;
          },
          getModelAnalytics: function () {
            return Ba;
          },
          getTaskPreviewFromMaybeReplication: function () {
            return qa;
          },
          getAnalyticsTaskPreview: function () {
            return wa;
          },
          basicEvalRunInfo: function () {
            return Ja;
          },
          getRunMetadata: function () {
            return Ga;
          },
          getPrimaryMetricScores: function () {
            return $a;
          },
          getMetricScore: function () {
            return Ma;
          },
          getSliceBreakdowns: function () {
            return Wa;
          },
          getAnalysisBreakdown: function () {
            return Va;
          },
          getRatingAnalysisBreakdown: function () {
            return Ha;
          },
          getRankingAnalysisBreakdown: function () {
            return Ka;
          },
          getLikertAnalysisBreakdown: function () {
            return Xa;
          },
          getAllMetricBreakdownWinRates: function () {
            return tc;
          },
          updateRunSettings: function () {
            return rc;
          },
          getAnalysisFieldFilterInfo: function () {
            return oc;
          },
          getHumanEvalTestCasesPreview: function () {
            return lc;
          },
          getHumanEvalTestCases: function () {
            return ac;
          },
          getHumanEvalTestCasesMetadata: function () {
            return pc;
          },
          getDeliveryforRun: function () {
            return yc;
          },
          trackModelEvalEvent: function () {
            return hc;
          },
          getParsedTestCasePreview: function () {
            return Pc;
          },
          getModelEvalIRA: function () {
            return gc;
          },
          downloadHumanEvalTasks: function () {
            return Tc;
          },
          basicBenchmarkRunInfo: function () {
            return Sc;
          },
          getBenchmarkScore: function () {
            return Zc;
          },
          getBenchmarkBreakdown: function () {
            return Nc;
          },
          getMetadataKeys: function () {
            return Cc;
          },
          getTestCases: function () {
            return Bc;
          },
          getBenchmarkLeaderboard: function () {
            return qc;
          },
          getModelInfo: function () {
            return wc;
          },
          getBasicRunsInfo: function () {
            return Jc;
          },
          getRunsScores: function () {
            return Gc;
          },
          getRuns: function () {
            return $c;
          },
          getTestSet: function () {
            return Mc;
          },
          listTestSets: function () {
            return Wc;
          },
          getDefaultClusterInfo: function () {
            return Vc;
          },
          getClusterPages: function () {
            return Hc;
          },
          getModelEvalAnalyticsForMetric: function () {
            return Kc;
          },
          getModelScoreLists: function () {
            return Xc;
          },
          getModelEvalSummaryStats: function () {
            return tp;
          },
          getBreakdownTableKeys: function () {
            return rp;
          },
          getMetadataKeysFromPrompt: function () {
            return op;
          },
          getBreakdownTableData: function () {
            return lp;
          },
          cancelModelEvalRun: function () {
            return ap;
          },
          getWorkspaceDashboardData: function () {
            return pp;
          },
          getRecentWorkspace: function () {
            return yp;
          },
          getPromptScorePlotData: function () {
            return hp;
          },
          getInfoForRun: function () {
            return Pp;
          },
          changeRunName: function () {
            return gp;
          },
          changeTestSetName: function () {
            return Tp;
          },
          getDefaultRun: function () {
            return Sp;
          },
          getBasicRunInfo: function () {
            return Zp;
          },
          getClusterData: function () {
            return Np;
          },
          getModelEvalRun: function () {
            return Cp;
          },
          downloadModelEvalTasks: function () {
            return Bp;
          },
          getModelEvalVisualizationLink: function () {
            return qp;
          },
          getModelEvalRawData: function () {
            return wp;
          },
          getAllModelEvalRuns: function () {
            return Jp;
          },
          getModelAnalyticsPreferences: function () {
            return Gp;
          },
          getModelAnalyticsRankings: function () {
            return $p;
          },
          getOTSInfo: function () {
            return Mp;
          },
          getOTSStats: function () {
            return Wp;
          },
          suggestOts: function () {
            return Vp;
          },
          notifyInterestInOtsEvals: function () {
            return Hp;
          },
          notifyInterestInOtsTraining: function () {
            return Kp;
          },
          getAllOtsInfo: function () {
            return Xp;
          },
          getModelBatchNames: function () {
            return tf;
          },
          createNewThread: function () {
            return rf;
          },
          addNewReply: function () {
            return uf;
          },
          updateStatus: function () {
            return sf;
          },
          updateUserProjectGroups: function () {
            return cf;
          },
          fetchSSE: function () {
            return ff;
          },
          generateUploadToken: function () {
            return df;
          },
          validateScenarioSet: function () {
            return mf;
          },
          validateMultiScenarioSet: function () {
            return vf;
          },
          createScenarioSet: function () {
            return _f;
          },
          uploadMultiScenarioSetContent: function () {
            return bf;
          },
          uploadScenarioSetContent: function () {
            return Of;
          },
          updateScenarioSet: function () {
            return kf;
          },
          uploadScenariosContent: function () {
            return jf;
          },
          validateEndpointParams: function () {
            return If;
          },
          validateEndpointMultiParams: function () {
            return Ef;
          },
          getEndpointsForRun: function () {
            return Af;
          },
          checkIfWorkforceStepNeeded: function () {
            return xf;
          },
          createSampleTask: function () {
            return Df;
          },
          getTags: function () {
            return Rf;
          },
          addTag: function () {
            return Ff;
          },
          createModelEvalEndpoint: function () {
            return Lf;
          },
          updateModelEvalEndpoint: function () {
            return Uf;
          },
          updateEndpointWithMulti: function () {
            return Qf;
          },
          getModelEvalEndpoints: function () {
            return zf;
          },
          getMetricFromSet: function () {
            return Yf;
          },
          getModelEvalHistorySummaryStats: function () {
            return ny;
          },
          getHistoryHistogram: function () {
            return ey;
          },
          getHistoryLineGraph: function () {
            return iy;
          },
          getHistoryInfo: function () {
            return uy;
          },
          getModelEvalEndpoint: function () {
            return sy;
          },
          getModelEvalPresets: function () {
            return cy;
          },
          getModelEvalEndpointInfo: function () {
            return fy;
          },
          skipModelEvalOnboarding: function () {
            return dy;
          },
          getModelEvalOnboardingInfo: function () {
            return my;
          },
          listScenarioSets: function () {
            return vy;
          },
          listScenarios: function () {
            return _y;
          },
          archiveScenarioSets: function () {
            return by;
          },
          changeScenarioSetName: function () {
            return Oy;
          },
          getScenarioSet: function () {
            return ky;
          },
          listWorkspaces: function () {
            return jy;
          },
          createWorkspace: function () {
            return Iy;
          },
          listMetricSets: function () {
            return Ey;
          },
          listMetrics: function () {
            return Ay;
          },
          getMetric: function () {
            return xy;
          },
          createMetric: function () {
            return Dy;
          },
          updateMetric: function () {
            return Ry;
          },
          testAutoMetric: function () {
            return Fy;
          },
          getAutoEvalRankingSampled: function () {
            return Ly;
          },
          getMetricSet: function () {
            return Uy;
          },
          createMetricSet: function () {
            return Qy;
          },
          updateMetricSet: function () {
            return zy;
          },
          createEvaluationRun: function () {
            return Yy;
          },
          getUsersPermissionGroupTaskPermissions: function () {
            return nd;
          },
          getEGPModelsForUser: function () {
            return ed;
          },
          getTopKChunks: function () {
            return id;
          },
          parsePdfBuffer: function () {
            return ud;
          },
          getQualitativeFeedbackForEvalRun: function () {
            return sd;
          },
          getQualitativeFeedbackSurveysForEvalRun: function () {
            return ad;
          },
          getQualitativeFeedbackSurveyConfig: function () {
            return cd;
          },
          archiveQualitativeFeedbackItem: function () {
            return pd;
          },
          archiveQualitativeSurveyFeedback: function () {
            return fd;
          },
        });
      var r = e(298784),
        i = e.n(r),
        o = e(285556),
        u = e(427781),
        l = e(318814);
      function s(n, t, e, r, i, o, u) {
        try {
          var l = n[o](u),
            s = l.value;
        } catch (a) {
          return void e(a);
        }
        l.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function a(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, i) {
            var o = n.apply(t, e);
            function u(n) {
              s(o, r, i, u, l, "next", n);
            }
            function l(n) {
              s(o, r, i, u, l, "throw", n);
            }
            u(void 0);
          });
        };
      }
      function c(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function p(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })
            )),
            r.forEach(function (t) {
              c(n, t, e[t]);
            });
        }
        return n;
      }
      function f(n, t) {
        if (null == n) return {};
        var e,
          r,
          i = (function (n, t) {
            if (null == n) return {};
            var e,
              r,
              i = {},
              o = Object.keys(n);
            for (r = 0; r < o.length; r++)
              (e = o[r]), t.indexOf(e) >= 0 || (i[e] = n[e]);
            return i;
          })(n, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(n);
          for (r = 0; r < o.length; r++)
            (e = o[r]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, e) &&
                  (i[e] = n[e]));
        }
        return i;
      }
      function y(n) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/tasks/like_feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function h(n) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/request_phone_verification", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function P(n) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validate_phone_verification", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function g(n) {
        return _.apply(this, arguments);
      }
      function _() {
        return (_ = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/notifications/mark_read", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function T(n) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/announcement/dismiss", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function S(n) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/event/check_should_enter_onboarding_tour", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Z(n) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/event/exit_onboarding_tour", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function N(n) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/event/enter_onboarding_tour", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function C(n) {
        return I.apply(this, arguments);
      }
      function I() {
        return (I = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/notifications/mark_read_nucleus", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function B(n) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/inherit_workers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function q(n) {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/set_lidar_pipeline", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function w(n) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/set_text_collection_use_template", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function J(n) {
        return D.apply(this, arguments);
      }
      function D() {
        return (D = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets_by_id", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function G(n) {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/alerts/dismiss", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function $(n) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/taxonomy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function M(n) {
        return L.apply(this, arguments);
      }
      function L() {
        return (L = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/draft`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function W(n) {
        return U.apply(this, arguments);
      }
      function U() {
        return (U = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/initialize_nucleus_dataset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function V(n) {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/initialize_nucleus_static_assets_dataset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function H(n, t) {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = a(function* (n, t) {
          const e = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/create_instruction_batch", p({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }, t));
        })).apply(this, arguments);
      }
      function K(n, t) {
        return Y.apply(this, arguments);
      }
      function Y() {
        return (Y = a(function* (n, t) {
          const e = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/create_regular_batch", p({ method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }, t));
        })).apply(this, arguments);
      }
      function X(n) {
        return nn.apply(this, arguments);
      }
      function nn() {
        return (nn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_config", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function tn(n) {
        return en.apply(this, arguments);
      }
      function en() {
        return (en = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_configs_by_path", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function rn(n) {
        return on.apply(this, arguments);
      }
      function on() {
        return (on = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/dismiss_custom_grading", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function un(n) {
        return ln.apply(this, arguments);
      }
      function ln() {
        return (ln = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/create_or_edit_concept", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function sn(n) {
        return an.apply(this, arguments);
      }
      function an() {
        return (an = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/delete_concept", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function cn(n) {
        return pn.apply(this, arguments);
      }
      function pn() {
        return (pn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_graders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function fn(n) {
        return yn.apply(this, arguments);
      }
      function yn() {
        return (yn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/set_graders_by_example", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function dn(n) {
        return hn.apply(this, arguments);
      }
      function hn() {
        return (hn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_edge_case", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function mn(n) {
        return Pn.apply(this, arguments);
      }
      function Pn() {
        return (Pn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_common_errors", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function vn(n) {
        return gn.apply(this, arguments);
      }
      function gn() {
        return (gn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/good_instructions_example", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function _n(n) {
        return Tn.apply(this, arguments);
      }
      function Tn() {
        return (Tn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/common_error_example", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function bn(n) {
        return Sn.apply(this, arguments);
      }
      function Sn() {
        return (Sn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/custom_instruction_example", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function On(n) {
        return Zn.apply(this, arguments);
      }
      function Zn() {
        return (Zn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/example/mismatch", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function kn(n) {
        return Nn.apply(this, arguments);
      }
      function Nn() {
        return (Nn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/example/update_taxonomy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function jn(n) {
        return Cn.apply(this, arguments);
      }
      function Cn() {
        return (Cn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/update_taxonomy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p({}, t, { forCourse: !0 })) });
        })).apply(this, arguments);
      }
      function In(n) {
        return Bn.apply(this, arguments);
      }
      function Bn() {
        return (Bn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/update_taxonomy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p({}, t, { forCourse: !1 })) });
        })).apply(this, arguments);
      }
      function En(n) {
        return qn.apply(this, arguments);
      }
      function qn() {
        return (qn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_long_hints_json", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function An(n) {
        return wn.apply(this, arguments);
      }
      function wn() {
        return (wn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_long_hints", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function xn(n) {
        return Jn.apply(this, arguments);
      }
      function Jn() {
        return (Jn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_auto_redos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Dn(n) {
        return Gn.apply(this, arguments);
      }
      function Gn() {
        return (Gn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/set_smart_training", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Rn(n) {
        return $n.apply(this, arguments);
      }
      function $n() {
        return ($n = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/initial_setup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Fn(n) {
        return Mn.apply(this, arguments);
      }
      function Mn() {
        return (Mn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/pause_project", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ln(n) {
        return Wn.apply(this, arguments);
      }
      function Wn() {
        return (Wn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/unpause_project", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Un(n) {
        return Vn.apply(this, arguments);
      }
      function Vn() {
        return (Vn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_batch_props", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Qn(n) {
        return Hn.apply(this, arguments);
      }
      function Hn() {
        return (Hn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/batch_time_buckets", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function zn(n) {
        return Kn.apply(this, arguments);
      }
      function Kn() {
        return (Kn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/tasker/adult_content_toggle", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Yn(n) {
        return Xn.apply(this, arguments);
      }
      function Xn() {
        return (Xn = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_user_info", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function nt(n) {
        return tt.apply(this, arguments);
      }
      function tt() {
        return (tt = a(function* (n) {
          const t = new FormData();
          return (
            t.append("image", n.file),
            yield (0, o.ZP)(null, "internal/self_serve/instructions/upload", {
              method: "POST",
              body: t,
            })
          );
        })).apply(this, arguments);
      }
      function et(n) {
        return rt.apply(this, arguments);
      }
      function rt() {
        return (rt = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function it(n) {
        return ot.apply(this, arguments);
      }
      function ot() {
        return (ot = a(function* (n) {
          var { projectId: t } = n,
            e = f(n, ["projectId"]);
          const r = i().omitBy(e, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${t}/instruction`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) });
        })).apply(this, arguments);
      }
      function ut(n) {
        return lt.apply(this, arguments);
      }
      function lt() {
        return (lt = a(function* (n) {
          var { projectId: t } = n,
            e = f(n, ["projectId"]);
          const r = i().omitBy(e, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${t}/taxonomy/draft/instruction`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) });
        })).apply(this, arguments);
      }
      function st(n) {
        return at.apply(this, arguments);
      }
      function at() {
        return (at = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/example", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ct(n) {
        return pt.apply(this, arguments);
      }
      function pt() {
        return (pt = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/example/static", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ft(n) {
        return yt.apply(this, arguments);
      }
      function yt() {
        return (yt = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/example/update", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function dt(n) {
        return ht.apply(this, arguments);
      }
      function ht() {
        return (ht = a(function* (n) {
          const { nucleusDatasetId: t } = n;
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/instruction_asset_dataset", { method: "GET", query: { dataset: t } });
        })).apply(this, arguments);
      }
      function mt(n) {
        return Pt.apply(this, arguments);
      }
      function Pt() {
        return (Pt = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/count", { query: t });
        })).apply(this, arguments);
      }
      function vt(n, t) {
        return gt.apply(this, arguments);
      }
      function gt() {
        return (gt = a(function* (n, t) {
          const {
              asset: e,
              project: r,
              size: i,
              mimeType: u,
              name: l,
              isStaticAsset: s,
            } = n,
            a = new FormData();
          return (
            a.append("asset", e),
            a.append("project", r),
            a.append("size", i),
            a.append("mimeType", u),
            a.append("name", l),
            a.append("isStaticAsset", s),
            yield (0, o.ZP)(
              null,
              "internal/self_serve/assets/start_cds_multi_upload",
              p({ method: "POST", body: a }, t)
            )
          );
        })).apply(this, arguments);
      }
      function _t(n, t) {
        return Tt.apply(this, arguments);
      }
      function Tt() {
        return (Tt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/complete_cds_multi_upload", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function bt(n, t) {
        return St.apply(this, arguments);
      }
      function St() {
        return (St = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/retrieve_cds_part_url", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function Ot(n, t) {
        return Zt.apply(this, arguments);
      }
      function Zt() {
        return (Zt = a(function* (n, t) {
          const { asset: e, project: r } = n,
            i = new FormData();
          return (
            i.append("asset", e),
            i.append("project", r),
            yield (0, o.ZP)(
              null,
              "internal/self_serve/assets/presigned_upload",
              p({ method: "POST", body: i }, t)
            )
          );
        })).apply(this, arguments);
      }
      function kt(n, t) {
        return Nt.apply(this, arguments);
      }
      function Nt() {
        return (Nt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/upload_from_presigned_url", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function jt(n, t) {
        return Ct.apply(this, arguments);
      }
      function Ct() {
        return (Ct = a(function* (n, t) {
          const {
              asset: e,
              project: r,
              uploadGroupId: i,
              isStaticAsset: u,
              publiclyViewable: l,
              skipCopyingToNucleus: s,
            } = n,
            a = new FormData();
          return (
            a.append("asset", e),
            a.append("project", r),
            a.append("uploadGroupId", i),
            a.append("isStaticAsset", u),
            a.append("publiclyViewable", l),
            a.append("skipCopyingToNucleus", s),
            yield (0, o.ZP)(
              null,
              "internal/self_serve/assets/upload_from_computer",
              p({ method: "POST", body: a }, t)
            )
          );
        })).apply(this, arguments);
      }
      function It(n, t) {
        return Bt.apply(this, arguments);
      }
      function Bt() {
        return (Bt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/upload_from_csv_async", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function Et(n, t) {
        return qt.apply(this, arguments);
      }
      function qt() {
        return (qt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/upload_from_csv", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function At(n, t) {
        return wt.apply(this, arguments);
      }
      function wt() {
        return (wt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/template", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function xt(n) {
        return Jt.apply(this, arguments);
      }
      function Jt() {
        return (Jt = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/templateAsset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Dt(n) {
        return Gt.apply(this, arguments);
      }
      function Gt() {
        return (Gt = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/use_sample_dataset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Rt(n) {
        return $t.apply(this, arguments);
      }
      function $t() {
        return ($t = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/import_nucleus_dataset", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ft(n, t) {
        return Mt.apply(this, arguments);
      }
      function Mt() {
        return (Mt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/upload_from_s3", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function Lt(n, t) {
        return Wt.apply(this, arguments);
      }
      function Wt() {
        return (Wt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/upload_from_gcp", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function Ut(n, t) {
        return Vt.apply(this, arguments);
      }
      function Vt() {
        return (Vt = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/upload_from_azure", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function Qt(n, t) {
        return Ht.apply(this, arguments);
      }
      function Ht() {
        return (Ht = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/upload_from_previous_project", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function zt(n) {
        return Kt.apply(this, arguments);
      }
      function Kt() {
        return (Kt = a(function* (n, t = {}) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/delete_all_assets", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function Yt(n) {
        return Xt.apply(this, arguments);
      }
      function Xt() {
        return (Xt = a(function* (n, t = {}) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/delete_assets", p({ method: "POST", body: n }, t));
        })).apply(this, arguments);
      }
      function ne(n) {
        return te.apply(this, arguments);
      }
      function te() {
        return (te = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/toggle_asset_for_labeled_examples", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function ee(n) {
        return re.apply(this, arguments);
      }
      function re() {
        return (re = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/update_text_asset", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function ie(n) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (oe = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/create_benchmark", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ue(n) {
        return le.apply(this, arguments);
      }
      function le() {
        return (le = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/retire_benchmark", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function se(n) {
        return ae.apply(this, arguments);
      }
      function ae() {
        return (ae = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/reenable_benchmark", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ce(n) {
        return pe.apply(this, arguments);
      }
      function pe() {
        return (pe = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/convert_benchmark", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function fe(n) {
        return ye.apply(this, arguments);
      }
      function ye() {
        return (ye = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/convert_suggested_benchmark", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function de(n) {
        return he.apply(this, arguments);
      }
      function he() {
        return (he = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/mass_retire_benchmarks", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function me(n) {
        return Pe.apply(this, arguments);
      }
      function Pe() {
        return (Pe = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/mass_retire_benchmarks_preview", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ve(n) {
        return ge.apply(this, arguments);
      }
      function ge() {
        return (ge = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/set_need_to_be_reviewed", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function _e(n) {
        return Te.apply(this, arguments);
      }
      function Te() {
        return (Te = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/convert_batch", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function be(n) {
        return Se.apply(this, arguments);
      }
      function Se() {
        return (Se = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/cancel_batch", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Oe(n) {
        return Ze.apply(this, arguments);
      }
      function Ze() {
        return (Ze = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/finalize_batch", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ke(n) {
        return Ne.apply(this, arguments);
      }
      function Ne() {
        return (Ne = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_training_scenario", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function je(n) {
        return Ce.apply(this, arguments);
      }
      function Ce() {
        return (Ce = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/mass_copy_taxonomy", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ie(n) {
        return Be.apply(this, arguments);
      }
      function Be() {
        return (Be = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/edge_case/action", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ee(n) {
        return qe.apply(this, arguments);
      }
      function qe() {
        return (qe = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/validate_response", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ae(n) {
        return we.apply(this, arguments);
      }
      function we() {
        return (we = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/update_benchmark_frequency", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function xe(n) {
        return Je.apply(this, arguments);
      }
      function Je() {
        return (Je = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/update_benchmark_recycling", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function De(n) {
        return Ge.apply(this, arguments);
      }
      function Ge() {
        return (Ge = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/update_benchmark_child_scenarios", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Re(n) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/project_template/increment_usage", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Fe(n) {
        return Me.apply(this, arguments);
      }
      function Me() {
        return (Me = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return (
            console.debug("track_event:", ...i().toPairs(t)),
            yield (0, o.ZP)(null, "internal/self_serve/track_event", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(t),
            })
          );
        })).apply(this, arguments);
      }
      function Le(n) {
        return We.apply(this, arguments);
      }
      function We() {
        return (We = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/hipaa_coverage_attachment_customer_level", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ue(n) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/hipaa_coverage_attachment_project_level", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Qe(n) {
        return He.apply(this, arguments);
      }
      function He() {
        return (He = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/redeem_payment_credit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ze(n) {
        return Ke.apply(this, arguments);
      }
      function Ke() {
        return (Ke = a(function* (n) {
          const t = new FormData();
          return (
            t.append("asset", n.asset || ""),
            t.append("message", n.message),
            yield (0, o.ZP)(
              null,
              "internal/self_serve/request_project_template",
              { method: "POST", body: t }
            )
          );
        })).apply(this, arguments);
      }
      function Ye(n) {
        return Xe.apply(this, arguments);
      }
      function Xe() {
        return (Xe = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/referral_link", { query: t });
        })).apply(this, arguments);
      }
      function nr(n) {
        return tr.apply(this, arguments);
      }
      function tr() {
        return (tr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/notifications", { query: t });
        })).apply(this, arguments);
      }
      function er() {
        return rr.apply(this, arguments);
      }
      function rr() {
        return (rr = a(function* () {
          return yield (0, o.ZP)(null, "internal/self_serve/announcement");
        })).apply(this, arguments);
      }
      function ir(n) {
        return or.apply(this, arguments);
      }
      function or() {
        return (or = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/nucleusNotifications", { query: t });
        })).apply(this, arguments);
      }
      function ur(n) {
        return lr.apply(this, arguments);
      }
      function lr() {
        return (lr = a(function* (n) {
          var { projectId: t } = n,
            e = f(n, ["projectId"]);
          const r = i().omitBy(e, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/notifications/${t}`, { query: r });
        })).apply(this, arguments);
      }
      function sr(n) {
        return ar.apply(this, arguments);
      }
      function ar() {
        return (ar = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/taxonomy", { query: t });
        })).apply(this, arguments);
      }
      function cr(n) {
        return pr.apply(this, arguments);
      }
      function pr() {
        return (pr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/${n.version}`, { query: t });
        })).apply(this, arguments);
      }
      function fr(n) {
        return yr.apply(this, arguments);
      }
      function yr() {
        return (yr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/latest`, { query: t });
        })).apply(this, arguments);
      }
      function dr(n) {
        return hr.apply(this, arguments);
      }
      function hr() {
        return (hr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/draft`, { query: t });
        })).apply(this, arguments);
      }
      function mr(n) {
        return Pr.apply(this, arguments);
      }
      function Pr() {
        return (Pr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/latest`, { query: t });
        })).apply(this, arguments);
      }
      function vr(n) {
        return gr.apply(this, arguments);
      }
      function gr() {
        return (gr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/answers", { query: t });
        })).apply(this, arguments);
      }
      function _r(n) {
        return Tr.apply(this, arguments);
      }
      function Tr() {
        return (Tr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/get_long_hints_json", { query: t });
        })).apply(this, arguments);
      }
      function br() {
        return Sr.apply(this, arguments);
      }
      function Sr() {
        return (Sr = a(function* () {
          return yield (0, o.ZP)(null, "internal/self_serve/projects", {});
        })).apply(this, arguments);
      }
      function Or(n) {
        return Zr.apply(this, arguments);
      }
      function Zr() {
        return (Zr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets", { query: t });
        })).apply(this, arguments);
      }
      function kr(n) {
        return Nr.apply(this, arguments);
      }
      function Nr() {
        return (Nr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets_lite", { query: t });
        })).apply(this, arguments);
      }
      function jr(n) {
        return Cr.apply(this, arguments);
      }
      function Cr() {
        return (Cr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/cursor", { query: t });
        })).apply(this, arguments);
      }
      function Ir(n) {
        return Br.apply(this, arguments);
      }
      function Br() {
        return (Br = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/elastic", { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function Er(n) {
        return qr.apply(this, arguments);
      }
      function qr() {
        return (qr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/all_concepts", { query: t });
        })).apply(this, arguments);
      }
      function Ar(n) {
        return wr.apply(this, arguments);
      }
      function wr() {
        return (wr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/active_benchmarks", { query: t });
        })).apply(this, arguments);
      }
      function xr(n) {
        return Jr.apply(this, arguments);
      }
      function Jr() {
        return (Jr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/disabled_benchmarks", { query: t });
        })).apply(this, arguments);
      }
      function Dr(n) {
        return Gr.apply(this, arguments);
      }
      function Gr() {
        return (Gr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/suggested_benchmarks", { query: t });
        })).apply(this, arguments);
      }
      function Rr(n) {
        return $r.apply(this, arguments);
      }
      function $r() {
        return ($r = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarkById", { query: t });
        })).apply(this, arguments);
      }
      function Fr(n) {
        return Mr.apply(this, arguments);
      }
      function Mr() {
        return (Mr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks", { query: t });
        })).apply(this, arguments);
      }
      function Lr(n) {
        return Wr.apply(this, arguments);
      }
      function Wr() {
        return (Wr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/grader_benchmarks", { query: t });
        })).apply(this, arguments);
      }
      function Ur(n) {
        return Vr.apply(this, arguments);
      }
      function Vr() {
        return (Vr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/alerts", { query: t });
        })).apply(this, arguments);
      }
      function Qr(n) {
        return Hr.apply(this, arguments);
      }
      function Hr() {
        return (Hr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return (
            (t.lean = !0),
            yield (0, o.ZP)(null, "internal/self_serve/benchmarks/tasks", {
              query: t,
            })
          );
        })).apply(this, arguments);
      }
      function zr(n) {
        return Kr.apply(this, arguments);
      }
      function Kr() {
        return (Kr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions", { query: t });
        })).apply(this, arguments);
      }
      function Yr(n) {
        return Xr.apply(this, arguments);
      }
      function Xr() {
        return (Xr = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.projectId}/instruction`, { query: t });
        })).apply(this, arguments);
      }
      function ni(n) {
        return ti.apply(this, arguments);
      }
      function ti() {
        return (ti = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.projectId}/taxonomy/draft/instruction`, { query: t });
        })).apply(this, arguments);
      }
      function ei(n) {
        return ri.apply(this, arguments);
      }
      function ri() {
        return (ri = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.projectId}/taxonomy/latest/instruction`, { query: t });
        })).apply(this, arguments);
      }
      function ii(n) {
        return oi.apply(this, arguments);
      }
      function oi() {
        return (oi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/${n.version}/instruction`, { query: t });
        })).apply(this, arguments);
      }
      function ui(n, t) {
        return li.apply(this, arguments);
      }
      function li() {
        return (li = a(function* (n, t) {
          if (t) {
            const n = yield (0, l.vP)(t);
            if (n)
              return {
                ok: !0,
                instruction: n.instruction,
                firstSeenProjectInstruction: !1,
                hasSensitiveContent: n.instruction.hasSensitiveContent,
                param_chunks: !1,
                title: n.instruction.title,
                shouldUseNGI: !0,
                diffInstructions: n.diffInstructions,
              };
          }
          const e = i().omitBy({ assignmentId: t }, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n}/instruction/status`, { method: "GET", query: e });
        })).apply(this, arguments);
      }
      function si(n) {
        return ai.apply(this, arguments);
      }
      function ai() {
        return (ai = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/projectInstruction/quiz/submit", { method: "POST", body: { submittedQuiz: n } });
        })).apply(this, arguments);
      }
      function ci(n) {
        return pi.apply(this, arguments);
      }
      function pi() {
        return (pi = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/projectInstruction/quiz/update", { method: "POST", body: { submittedQuiz: n } });
        })).apply(this, arguments);
      }
      function fi(n) {
        return yi.apply(this, arguments);
      }
      function yi() {
        return (yi = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/projectInstruction/quiz/${n}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function di(n, t) {
        return hi.apply(this, arguments);
      }
      function hi() {
        return (hi = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n}/instruction/enable_quiz`, { method: "POST", body: { enableQuiz: t } });
        })).apply(this, arguments);
      }
      function mi(n) {
        return Pi.apply(this, arguments);
      }
      function Pi() {
        return (Pi = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n}/instruction/enable_quiz`, { method: "GET" });
        })).apply(this, arguments);
      }
      function vi(n) {
        return gi.apply(this, arguments);
      }
      function gi() {
        return (gi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/user_has_seen", { query: t });
        })).apply(this, arguments);
      }
      function _i(n) {
        return Ti.apply(this, arguments);
      }
      function Ti() {
        return (Ti = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/set_user_has_seen", { query: t });
        })).apply(this, arguments);
      }
      function bi(n) {
        return Si.apply(this, arguments);
      }
      function Si() {
        return (Si = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/example", { query: t });
        })).apply(this, arguments);
      }
      function Oi(n) {
        return Zi.apply(this, arguments);
      }
      function Zi() {
        return (Zi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/label/tasks_remaining", { query: t });
        })).apply(this, arguments);
      }
      function ki(n) {
        return Ni.apply(this, arguments);
      }
      function Ni() {
        return (Ni = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instruction_page_feedback_customer", { query: t });
        })).apply(this, arguments);
      }
      function ji(n) {
        return Ci.apply(this, arguments);
      }
      function Ci() {
        return (Ci = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/example/mismatch", { query: t });
        })).apply(this, arguments);
      }
      function Ii(n) {
        return Bi.apply(this, arguments);
      }
      function Bi() {
        return (Bi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instructions/image", { query: t });
        })).apply(this, arguments);
      }
      function Ei(n) {
        return qi.apply(this, arguments);
      }
      function qi() {
        return (qi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/upload/asset", { query: t });
        })).apply(this, arguments);
      }
      function Ai(n) {
        return wi.apply(this, arguments);
      }
      function wi() {
        return (wi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/upload/asset/pages", { query: t });
        })).apply(this, arguments);
      }
      function xi(n) {
        return Ji.apply(this, arguments);
      }
      function Ji() {
        return (Ji = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/upload/asset/to_template_attachment", { query: t });
        })).apply(this, arguments);
      }
      function Di(n) {
        return Gi.apply(this, arguments);
      }
      function Gi() {
        return (Gi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/configs", { query: t });
        })).apply(this, arguments);
      }
      function Ri(n) {
        return $i.apply(this, arguments);
      }
      function $i() {
        return ($i = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/project_ngi_config", { query: t });
        })).apply(this, arguments);
      }
      function Fi(n) {
        return Mi.apply(this, arguments);
      }
      function Mi() {
        return (Mi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/project_audit_config", { query: t });
        })).apply(this, arguments);
      }
      function Li(n) {
        return Wi.apply(this, arguments);
      }
      function Wi() {
        return (Wi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/avtaxonomy_config", { query: t });
        })).apply(this, arguments);
      }
      function Ui(n) {
        return Vi.apply(this, arguments);
      }
      function Vi() {
        return (Vi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/configs_by_path", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Qi(n) {
        return Hi.apply(this, arguments);
      }
      function Hi() {
        return (Hi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/integration_info", { query: t });
        })).apply(this, arguments);
      }
      function zi(n) {
        return Ki.apply(this, arguments);
      }
      function Ki() {
        return (Ki = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/graders", { query: t });
        })).apply(this, arguments);
      }
      function Yi(n) {
        return Xi.apply(this, arguments);
      }
      function Xi() {
        return (Xi = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/rerun_default_graders", { query: t });
        })).apply(this, arguments);
      }
      function no(n) {
        return to.apply(this, arguments);
      }
      function to() {
        return (to = a(function* (n) {
          const { project: t } = n;
          return yield (0, o.ZP)(null, `internal/self_serve/info/${t}`);
        })).apply(this, arguments);
      }
      function eo(n) {
        return ro.apply(this, arguments);
      }
      function ro() {
        return (ro = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/current_state", { query: t });
        })).apply(this, arguments);
      }
      function io(n) {
        return oo.apply(this, arguments);
      }
      function oo() {
        return (oo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/project", { query: t });
        })).apply(this, arguments);
      }
      function uo(n) {
        return lo.apply(this, arguments);
      }
      function lo() {
        return (lo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/metrics", { query: t });
        })).apply(this, arguments);
      }
      function so(n) {
        return ao.apply(this, arguments);
      }
      function ao() {
        return (ao = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/mongo_metrics", { query: t });
        })).apply(this, arguments);
      }
      function co(n) {
        return po.apply(this, arguments);
      }
      function po() {
        return (po = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/instruction_feedback_customer", { query: t });
        })).apply(this, arguments);
      }
      function fo(n) {
        return yo.apply(this, arguments);
      }
      function yo() {
        return (yo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/taskbatches", { query: t });
        })).apply(this, arguments);
      }
      function ho(n) {
        return mo.apply(this, arguments);
      }
      function mo() {
        return (mo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/has_live_batch", { query: t });
        })).apply(this, arguments);
      }
      function Po(n) {
        return vo.apply(this, arguments);
      }
      function vo() {
        return (vo = a(function* (n) {
          return yield (0, o.ZP)(null, `internal/self_serve/batches/${n}`);
        })).apply(this, arguments);
      }
      function go(n) {
        return _o.apply(this, arguments);
      }
      function _o() {
        return (_o = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/stats/tasks/by-batch", { query: t });
        })).apply(this, arguments);
      }
      function To(n) {
        return bo.apply(this, arguments);
      }
      function bo() {
        return (bo = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/stats/tasks/for-batch", { query: { batchId: n } });
        })).apply(this, arguments);
      }
      function So(n) {
        return Oo.apply(this, arguments);
      }
      function Oo() {
        return (Oo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/fetch_batch_task_creation_data", { query: t });
        })).apply(this, arguments);
      }
      function Zo(n) {
        return ko.apply(this, arguments);
      }
      function ko() {
        return (ko = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/edge_case/list", { query: t });
        })).apply(this, arguments);
      }
      function No(n) {
        return jo.apply(this, arguments);
      }
      function jo() {
        return (jo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/check_batch_properties", { query: t });
        })).apply(this, arguments);
      }
      function Co(n) {
        return Io.apply(this, arguments);
      }
      function Io() {
        return (Io = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/get_need_to_be_reviewed", { query: t });
        })).apply(this, arguments);
      }
      function Bo(n) {
        return Eo.apply(this, arguments);
      }
      function Eo() {
        return (Eo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/billing_specs", { query: t });
        })).apply(this, arguments);
      }
      function qo(n) {
        return Ao.apply(this, arguments);
      }
      function Ao() {
        return (Ao = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/get_benchmark_frequency", { query: t });
        })).apply(this, arguments);
      }
      function wo(n) {
        return xo.apply(this, arguments);
      }
      function xo() {
        return (xo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/get_benchmark_recycling", { query: t });
        })).apply(this, arguments);
      }
      function Jo(n) {
        return Do.apply(this, arguments);
      }
      function Do() {
        return (Do = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/existed_benchmarks_from_task", { query: t });
        })).apply(this, arguments);
      }
      function Go(n) {
        return Ro.apply(this, arguments);
      }
      function Ro() {
        return (Ro = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/hipaa_coverage_attachment", { query: n });
        })).apply(this, arguments);
      }
      function $o(n) {
        return Fo.apply(this, arguments);
      }
      function Fo() {
        return (Fo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/adept_batch_result", { query: t });
        })).apply(this, arguments);
      }
      function Mo() {
        return Lo.apply(this, arguments);
      }
      function Lo() {
        return (Lo = a(function* () {
          return yield (0,
          o.ZP)(null, "internal/self_serve/project_template/previews", {});
        })).apply(this, arguments);
      }
      function Wo(n) {
        return Uo.apply(this, arguments);
      }
      function Uo() {
        return (Uo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/sample_datasets", { query: t });
        })).apply(this, arguments);
      }
      function Vo(n) {
        return Qo.apply(this, arguments);
      }
      function Qo() {
        return (Qo = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validate", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Ho(n, t) {
        return zo.apply(this, arguments);
      }
      function zo() {
        return (zo = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/task_template/validate", { method: "POST", body: { paramsJson: JSON.stringify(t), type: n } });
        })).apply(this, arguments);
      }
      function Ko(n) {
        return Yo.apply(this, arguments);
      }
      function Yo() {
        return (Yo = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/task_template/${n}`);
        })).apply(this, arguments);
      }
      function Xo(n, t) {
        return nu.apply(this, arguments);
      }
      function nu() {
        return (nu = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/task_template/${n}`, { method: "POST", body: { partialTemplateJson: JSON.stringify(t) } });
        })).apply(this, arguments);
      }
      function tu(n) {
        return eu.apply(this, arguments);
      }
      function eu() {
        return (eu = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/benchmarks/reset_course_progress", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ru(n) {
        return iu.apply(this, arguments);
      }
      function iu() {
        return (iu = a(function* (n) {
          return yield (0, o.ZP)(null, `internal/self_serve/models/${n}/runs`);
        })).apply(this, arguments);
      }
      function ou(n, t) {
        return uu.apply(this, arguments);
      }
      function uu() {
        return (uu = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/models/${n}/run/${t}/signed_model_url`);
        })).apply(this, arguments);
      }
      function lu(n, t) {
        return su.apply(this, arguments);
      }
      function su() {
        return (su = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/models/${n}/submit_new_training`, { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function au(n) {
        return cu.apply(this, arguments);
      }
      function cu() {
        return (cu = a(function* ({ projectId: n }) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/models/${n}/endpoints`);
        })).apply(this, arguments);
      }
      function pu(n) {
        return fu.apply(this, arguments);
      }
      function fu() {
        return (fu = a(function* ({ projectId: n, data: t }) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/models/${n}/create_new_endpoints`, { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function yu(n) {
        return du.apply(this, arguments);
      }
      function du() {
        return (du = a(function* ({ projectId: n, data: t }) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/models/${n}/update_endpoint`, { method: "PUT", body: t });
        })).apply(this, arguments);
      }
      function hu(n) {
        return mu.apply(this, arguments);
      }
      function mu() {
        return (mu = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/courses/${n}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function Pu(n) {
        return vu.apply(this, arguments);
      }
      function vu() {
        return (vu = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/get_use_case_and_pipeline/${n}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function gu(n) {
        return _u.apply(this, arguments);
      }
      function _u() {
        return (_u = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/initialize_use_case_and_pipeline", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Tu(n) {
        return bu.apply(this, arguments);
      }
      function bu() {
        return (bu = a(function* (n) {
          return (0,
          o.ZP)(null, "internal/self_serve/models/playground/signed_upload", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Su(n, t, e) {
        return Ou.apply(this, arguments);
      }
      function Ou() {
        return (Ou = a(function* (n, t, e) {
          return (0,
          o.ZP)(null, `internal/self_serve/models/${n}/endpoints/${t}/tasks/submit_task`, { method: "POST", body: e });
        })).apply(this, arguments);
      }
      function Zu(n, t, e) {
        return ku.apply(this, arguments);
      }
      function ku() {
        return (ku = a(function* (n, t, e) {
          return (0,
          o.ZP)(null, `internal/self_serve/models/${n}/endpoints/${t}/tasks/${e}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function Nu(n) {
        return ju.apply(this, arguments);
      }
      function ju() {
        return (ju = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/courses/${n}/new`, { method: "POST" });
        })).apply(this, arguments);
      }
      function Cu(n, t, e) {
        return Iu.apply(this, arguments);
      }
      function Iu() {
        return (Iu = a(function* (n, t, e) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/courses/${n}/new_feedback_course`, { method: "POST", body: { announcements: t, taskId: e } });
        })).apply(this, arguments);
      }
      function Bu(n, t, e, r, i, o) {
        return Eu.apply(this, arguments);
      }
      function Eu() {
        return (Eu = a(function* (n, t, e, r, i, u) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/courses/${n}`, { method: "POST", body: { updates: { disabled: t, available: e, title: r, sections: i }, projectId: u } });
        })).apply(this, arguments);
      }
      function qu(n, t) {
        return Au.apply(this, arguments);
      }
      function Au() {
        return (Au = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/courses/${n}/reorder`, { method: "POST", body: { partialCourseOrder: t } });
        })).apply(this, arguments);
      }
      function wu(n) {
        return xu.apply(this, arguments);
      }
      function xu() {
        return (xu = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/models/${n}/config`, { method: "GET" });
        })).apply(this, arguments);
      }
      function Ju(n, t) {
        return Du.apply(this, arguments);
      }
      function Du() {
        return (Du = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/models/${n}/config`, { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function Gu(n) {
        return Ru.apply(this, arguments);
      }
      function Ru() {
        return (Ru = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function $u(n) {
        return Fu.apply(this, arguments);
      }
      function Fu() {
        return (Fu = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Mu() {
        return Lu.apply(this, arguments);
      }
      function Lu() {
        return (Lu = a(function* () {
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/saved_prompt_validators", { method: "GET" });
        })).apply(this, arguments);
      }
      function Wu(n) {
        return Uu.apply(this, arguments);
      }
      function Uu() {
        return (Uu = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/save_prompt_validator", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Vu(n) {
        return Qu.apply(this, arguments);
      }
      function Qu() {
        return (Qu = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/disable_saved_prompt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Hu(n) {
        return zu.apply(this, arguments);
      }
      function zu() {
        return (zu = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/project_prompt_validators", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function Ku(n) {
        return Yu.apply(this, arguments);
      }
      function Yu() {
        return (Yu = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/get_project_taxonomy_for_linters", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function Xu(n) {
        return nl.apply(this, arguments);
      }
      function nl() {
        return (nl = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/get_linter_metrics", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function tl(n) {
        return el.apply(this, arguments);
      }
      function el() {
        return (el = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/get_backdated_linter_metrics", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function rl(n) {
        return il.apply(this, arguments);
      }
      function il() {
        return (il = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/validators/project_save_prompt_validators", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ol(n) {
        return ul.apply(this, arguments);
      }
      function ul() {
        return (ul = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/draft/publish`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function ll(n) {
        return sl.apply(this, arguments);
      }
      function sl() {
        return (sl = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/draft`, { method: "DELETE" });
        })).apply(this, arguments);
      }
      function al(n) {
        return cl.apply(this, arguments);
      }
      function cl() {
        return (cl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/audit_sessions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function pl(n) {
        return fl.apply(this, arguments);
      }
      function fl() {
        return (fl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/audit_sessions/rename", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function yl(n) {
        return dl.apply(this, arguments);
      }
      function dl() {
        return (dl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/audit_sessions/set_is_archived", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function hl(n) {
        return ml.apply(this, arguments);
      }
      function ml() {
        return (ml = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/audit_sessions", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function Pl(n) {
        return vl.apply(this, arguments);
      }
      function vl() {
        return (vl = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/audit_session_tasks", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function gl(n) {
        return _l.apply(this, arguments);
      }
      function _l() {
        return (_l = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/customerChatAudits", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Tl(n) {
        return bl.apply(this, arguments);
      }
      function bl() {
        return (bl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/customerChatAudits", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Sl(n) {
        return Ol.apply(this, arguments);
      }
      function Ol() {
        return (Ol = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/customerChatAudits", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Zl(n) {
        return kl.apply(this, arguments);
      }
      function kl() {
        return (kl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/comments", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Nl(n) {
        return jl.apply(this, arguments);
      }
      function jl() {
        return (jl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/comment", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Cl(n) {
        return Il.apply(this, arguments);
      }
      function Il() {
        return (Il = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/audit/comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Bl(n) {
        return El.apply(this, arguments);
      }
      function El() {
        return (El = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy`, { method: "GET" });
        })).apply(this, arguments);
      }
      function ql(n) {
        return Al.apply(this, arguments);
      }
      function Al() {
        return (Al = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/${n.version}/task_counts`, { method: "GET" });
        })).apply(this, arguments);
      }
      function wl(n) {
        return xl.apply(this, arguments);
      }
      function xl() {
        return (xl = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/compare`, { query: t });
        })).apply(this, arguments);
      }
      function Jl(n) {
        return Dl.apply(this, arguments);
      }
      function Dl() {
        return (Dl = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/taxonomy/${n.version}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Gl(n) {
        return Rl.apply(this, arguments);
      }
      function Rl() {
        return (Rl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/dolphin/generateResponses", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function $l() {
        return Fl.apply(this, arguments);
      }
      function Fl() {
        return (Fl = a(function* () {
          return yield (0,
          o.ZP)(null, "internal/self_serve/dolphin/generatePrompt");
        })).apply(this, arguments);
      }
      function Ml(n) {
        return Ll.apply(this, arguments);
      }
      function Ll() {
        return (Ll = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/fetchResponsesFromChatEndpoint", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Wl(n) {
        return Ul.apply(this, arguments);
      }
      function Ul() {
        return (Ul = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/streamingModelCheckpoint", { query: t });
        })).apply(this, arguments);
      }
      function Vl(n) {
        return Ql.apply(this, arguments);
      }
      function Ql() {
        return (Ql = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/streamingModelCheckpoint", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Hl(n) {
        return zl.apply(this, arguments);
      }
      function zl() {
        return (zl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/fetchAutoSpec", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Kl(n) {
        return Yl.apply(this, arguments);
      }
      function Yl() {
        return (Yl = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/fetchAutoCritique", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Xl(n) {
        return ns.apply(this, arguments);
      }
      function ns() {
        return (ns = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/aiAssistantPrompts", { method: "GET", query: { projectId: n } });
        })).apply(this, arguments);
      }
      function ts() {
        return es.apply(this, arguments);
      }
      function es() {
        return (es = a(function* () {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/getBlacklistWords");
        })).apply(this, arguments);
      }
      function rs() {
        return is.apply(this, arguments);
      }
      function is() {
        return (is = a(function* () {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/getJWTForStreaming");
        })).apply(this, arguments);
      }
      function os(n) {
        return us.apply(this, arguments);
      }
      function us() {
        return (us = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/askGPT", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function ls(n) {
        return ss.apply(this, arguments);
      }
      function ss() {
        return (ss = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/validatePrompt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function as(n) {
        return cs.apply(this, arguments);
      }
      function cs() {
        return (cs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/validateReferenceText", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function ps(n) {
        return fs.apply(this, arguments);
      }
      function fs() {
        return (fs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/sendBackToBase", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function ys(n) {
        return ds.apply(this, arguments);
      }
      function ds() {
        return (ds = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/testPostProcessingPromptConfig", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function hs(n) {
        return ms.apply(this, arguments);
      }
      function ms() {
        return (ms = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/testPromptConfig", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Ps(n) {
        return vs.apply(this, arguments);
      }
      function vs() {
        return (vs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/fieldValidation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function gs(n) {
        return _s.apply(this, arguments);
      }
      function _s() {
        return (_s = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/fieldValidationConfig", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Ts(n) {
        return bs.apply(this, arguments);
      }
      function bs() {
        return (bs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/fetchPRPPromptOptions", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Ss(n) {
        return Os.apply(this, arguments);
      }
      function Os() {
        return (Os = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerProjectQuality", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Zs(n) {
        return ks.apply(this, arguments);
      }
      function ks() {
        return (ks = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerProjectQualityListByProject", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Ns(n) {
        return js.apply(this, arguments);
      }
      function js() {
        return (js = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerProjectQualitySample", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Cs(n) {
        return Is.apply(this, arguments);
      }
      function Is() {
        return (Is = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerTagMappings", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Bs(n) {
        return Es.apply(this, arguments);
      }
      function Es() {
        return (Es = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerProjectBmStats", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function qs(n) {
        return As.apply(this, arguments);
      }
      function As() {
        return (As = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerBmStats", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function ws(n) {
        return xs.apply(this, arguments);
      }
      function xs() {
        return (xs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerAutoDisables", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Js(n) {
        return Ds.apply(this, arguments);
      }
      function Ds() {
        return (Ds = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getFraudTaskers", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Gs(n) {
        return Rs.apply(this, arguments);
      }
      function Rs() {
        return (Rs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getTaskerFraudSignals", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function $s(n) {
        return Fs.apply(this, arguments);
      }
      function Fs() {
        return (Fs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getDisableAccuracyThresholds", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Ms(n) {
        return Ls.apply(this, arguments);
      }
      function Ls() {
        return (Ls = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getAuditBmBatch", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Ws(n) {
        return Us.apply(this, arguments);
      }
      function Us() {
        return (Us = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getQualitySignalsByProjectId", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Vs(n) {
        return Qs.apply(this, arguments);
      }
      function Qs() {
        return (Qs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillById", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Hs(n) {
        return zs.apply(this, arguments);
      }
      function zs() {
        return (zs = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillsByIds", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Ks(n) {
        return Ys.apply(this, arguments);
      }
      function Ys() {
        return (Ys = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillEntriesByWorkerId", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function Xs(n) {
        return na.apply(this, arguments);
      }
      function na() {
        return (na = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWritingSamplesByWorkerId", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function ta(n) {
        return ea.apply(this, arguments);
      }
      function ea() {
        return (ea = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getProjectQualityTaskData", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function ra(n) {
        return ia.apply(this, arguments);
      }
      function ia() {
        return (ia = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillTaskData", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function oa(n) {
        return ua.apply(this, arguments);
      }
      function ua() {
        return (ua = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillRequirementsByProject", { method: "GET", query: n });
        })).apply(this, arguments);
      }
      function la(n) {
        return sa.apply(this, arguments);
      }
      function sa() {
        return (sa = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillEntriesByWorkerAndWorkerSkills", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function aa(n) {
        return ca.apply(this, arguments);
      }
      function ca() {
        return (ca = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillEntrySignalsByWorkerSkillEntries", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function pa(n) {
        return fa.apply(this, arguments);
      }
      function fa() {
        return (fa = a(function* ({ projectId: n }) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/quality_profile_configs", { method: "GET", query: { projectId: n } });
        })).apply(this, arguments);
      }
      function ya(n) {
        return da.apply(this, arguments);
      }
      function da() {
        return (da = a(function* ({ projectId: n, qualityProfileConfig: t }) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/quality_profile_configs", { method: "PUT", query: { projectId: n }, body: { qualityProfileConfig: t } });
        })).apply(this, arguments);
      }
      function ha(n) {
        return ma.apply(this, arguments);
      }
      function ma() {
        return (ma = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getWorkerSkillEntrySignalsByWorkerSkillEntriesAndDateRange", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Pa(n) {
        return va.apply(this, arguments);
      }
      function va() {
        return (va = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/qualityProfile/getQualitySignals", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function ga(n) {
        return _a.apply(this, arguments);
      }
      function _a() {
        return (_a = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/updatePRPConfig", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) });
        })).apply(this, arguments);
      }
      function Ta(n) {
        return ba.apply(this, arguments);
      }
      function ba() {
        return (ba = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/spellingAndGrammarEnabled", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function Sa(n) {
        return Oa.apply(this, arguments);
      }
      function Oa() {
        return (Oa = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/disablePastingEnabled", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function Za(n) {
        return ka.apply(this, arguments);
      }
      function ka() {
        return (ka = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/rlhf/validatorConfig", { method: "GET", query: t });
        })).apply(this, arguments);
      }
      function Na(n) {
        return ja.apply(this, arguments);
      }
      function ja() {
        return (ja = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/comment_thread/count`, { query: { status: n.status } });
        })).apply(this, arguments);
      }
      function Ca(n) {
        return Ia.apply(this, arguments);
      }
      function Ia() {
        return (Ia = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/comment_thread/get_all_threads`);
        })).apply(this, arguments);
      }
      function Ba(n) {
        return Ea.apply(this, arguments);
      }
      function Ea() {
        return (Ea = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelAnalytics/retrieveStats", { method: "GET", query: { projectId: n.project, promptLength: n.promptLength, compLength: n.compLength, batchIds: n.batchIds } });
        })).apply(this, arguments);
      }
      function qa(n) {
        return Aa.apply(this, arguments);
      }
      function Aa() {
        return (Aa = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/taskPreview", { method: "POST", body: { taskId: n.taskId, runId: n.runId } });
        })).apply(this, arguments);
      }
      function wa(n) {
        return xa.apply(this, arguments);
      }
      function xa() {
        return (xa = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelAnalytics/getTask", { method: "GET", query: { taskId: n.taskId, getLatestAttempt: n.getLatestAttempt ? n.getLatestAttempt : null } });
        })).apply(this, arguments);
      }
      function Ja(n) {
        return Da.apply(this, arguments);
      }
      function Da() {
        return (Da = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/evalRunInfo", { method: "GET", query: { runId: n.runId, workspaceId: n.workspaceId } });
        })).apply(this, arguments);
      }
      function Ga(n) {
        return Ra.apply(this, arguments);
      }
      function Ra() {
        return (Ra = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/runMetadata", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function $a(n) {
        return Fa.apply(this, arguments);
      }
      function Fa() {
        return (Fa = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/primaryMetricScores", { method: "GET", query: p({ runId: n.runId, modelId: n.modelId, primaryMetric1: n.primaryMetric1 }, n.primaryMetric2 ? { primaryMetric2: n.primaryMetric2 } : {}) });
        })).apply(this, arguments);
      }
      function Ma(n) {
        return La.apply(this, arguments);
      }
      function La() {
        return (La = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/metricScore", { method: "GET", query: { runId: n.runId, modelId: n.modelId, metricId: n.metricId } });
        })).apply(this, arguments);
      }
      function Wa(n) {
        return Ua.apply(this, arguments);
      }
      function Ua() {
        return (Ua = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/sliceBreakdowns", { method: "GET", query: { runId: n.runId, modelId: n.modelId, metricId: n.metricId, metricType: n.metricType, metadataKeys: n.metadataKeys } });
        })).apply(this, arguments);
      }
      function Va(n) {
        return Qa.apply(this, arguments);
      }
      function Qa() {
        return (Qa = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/analysisBreakdown", { method: "GET", query: { runId: n.runId, modelId: n.modelId, metricId: n.metricId, metricType: n.metricType, key: n.key } });
        })).apply(this, arguments);
      }
      function Ha(n) {
        return za.apply(this, arguments);
      }
      function za() {
        return (za = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/ratingAnalysisBreakdown", { method: "GET", query: { runId: n.runId, modelId: n.modelId, metricId: n.metricId, key: n.key } });
        })).apply(this, arguments);
      }
      function Ka(n) {
        return Ya.apply(this, arguments);
      }
      function Ya() {
        return (Ya = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/rankingAnalysisBreakdown", { method: "GET", query: { runId: n.runId, modelId: n.modelId, metricId: n.metricId, key: n.key } });
        })).apply(this, arguments);
      }
      function Xa(n) {
        return nc.apply(this, arguments);
      }
      function nc() {
        return (nc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/likertAnalysisBreakdown", { method: "GET", query: { runId: n.runId, modelId: n.modelId, metricId: n.metricId, key: n.key } });
        })).apply(this, arguments);
      }
      function tc(n) {
        return ec.apply(this, arguments);
      }
      function ec() {
        return (ec = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/allMetricBreakdownWinRates", { method: "POST", body: { runId: n.runId, modelId: n.modelId, metricIds: n.metricIds, key: n.key } });
        })).apply(this, arguments);
      }
      function rc(n) {
        return ic.apply(this, arguments);
      }
      function ic() {
        return (ic = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/run_settings", { method: "POST", body: { runId: n.runId, modelId: n.modelId, metricId: n.metricId, smallSliceSizeThreshold: n.smallSliceSizeThreshold } });
        })).apply(this, arguments);
      }
      function oc(n) {
        return uc.apply(this, arguments);
      }
      function uc() {
        return (uc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/analysisFieldFilterInfo", { method: "GET", query: { runId: n.runId, metricId: n.metricId, key: n.key } });
        })).apply(this, arguments);
      }
      function lc(n) {
        return sc.apply(this, arguments);
      }
      function sc() {
        return (sc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/humanEvalTestCasesPreview", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function ac(n) {
        return cc.apply(this, arguments);
      }
      function cc() {
        return (cc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/humanEvalTestCases", { method: "GET", query: { runId: n.runId, taskIds: n.taskIds ? JSON.stringify(n.taskIds) : null } });
        })).apply(this, arguments);
      }
      function pc(n) {
        return fc.apply(this, arguments);
      }
      function fc() {
        return (fc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/humanEvalTestCasesMetadata", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function yc(n) {
        return dc.apply(this, arguments);
      }
      function dc() {
        return (dc = a(function* (n) {
          return (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/deliveryForRun", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function hc(n) {
        return mc.apply(this, arguments);
      }
      function mc() {
        return (mc = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/track_event", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function Pc(n) {
        return vc.apply(this, arguments);
      }
      function vc() {
        return (vc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/parsedTestCasePreview", { method: "GET", query: { taskId: n.taskId, runId: n.runId } });
        })).apply(this, arguments);
      }
      function gc(n) {
        return _c.apply(this, arguments);
      }
      function _c() {
        return (_c = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/getModelEvalIRA", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function Tc(n) {
        return bc.apply(this, arguments);
      }
      function bc() {
        return (bc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/downloadHumanEval", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function Sc(n) {
        return Oc.apply(this, arguments);
      }
      function Oc() {
        return (Oc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/benchmarkRunInfo", { method: "GET", query: { runId: n.runId, workspaceId: n.workspaceId } });
        })).apply(this, arguments);
      }
      function Zc(n) {
        return kc.apply(this, arguments);
      }
      function kc() {
        return (kc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/benchmarkScore", { method: "GET", query: { runId: n.runId, isPublic: n.isPublic } });
        })).apply(this, arguments);
      }
      function Nc(n) {
        return jc.apply(this, arguments);
      }
      function jc() {
        return (jc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/benchmarkBreakdown", { method: "GET", query: { runId: n.runId, key: n.key, isPublic: n.isPublic } });
        })).apply(this, arguments);
      }
      function Cc(n) {
        return Ic.apply(this, arguments);
      }
      function Ic() {
        return (Ic = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/metadataKeys", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function Bc(n) {
        return Ec.apply(this, arguments);
      }
      function Ec() {
        return (Ec = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/testCases", { method: "GET", query: { runId: n.runId, compareRunId: n.compareRunId, benchmark: n.benchmark, isPublic: n.isPublic } });
        })).apply(this, arguments);
      }
      function qc(n) {
        return Ac.apply(this, arguments);
      }
      function Ac() {
        return (Ac = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/benchmarkLeaderboard", { method: "GET", query: { privateRuns: n.privateRuns, publicRuns: n.publicRuns } });
        })).apply(this, arguments);
      }
      function wc(n) {
        return xc.apply(this, arguments);
      }
      function xc() {
        return (xc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/modelInfo", { method: "GET", query: { modelId: n.modelId, isPublic: n.isPublic } });
        })).apply(this, arguments);
      }
      function Jc(n) {
        return Dc.apply(this, arguments);
      }
      function Dc() {
        return (Dc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/coreRunsInfo", { method: "GET", query: { workspaceId: n.workspaceId, pageIndex: n.pageIndex } });
        })).apply(this, arguments);
      }
      function Gc(n) {
        return Rc.apply(this, arguments);
      }
      function Rc() {
        return (Rc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/runsScores", { method: "GET", query: { workspaceId: n.workspaceId, pageIndex: n.pageIndex } });
        })).apply(this, arguments);
      }
      function $c(n) {
        return Fc.apply(this, arguments);
      }
      function Fc() {
        return (Fc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/runs", { method: "GET", query: { workspaceId: n.workspaceId, pageIndex: n.pageIndex } });
        })).apply(this, arguments);
      }
      function Mc(n) {
        return Lc.apply(this, arguments);
      }
      function Lc() {
        return (Lc = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/model_eval/testSets/${n.testSetId}`, { method: "GET" });
        })).apply(this, arguments);
      }
      function Wc(n) {
        return Uc.apply(this, arguments);
      }
      function Uc() {
        return (Uc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/testSets", { method: "GET", query: { workspaceId: n.workspaceId } });
        })).apply(this, arguments);
      }
      function Vc(n) {
        return Qc.apply(this, arguments);
      }
      function Qc() {
        return (Qc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/defaultClusterInfo", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId } });
        })).apply(this, arguments);
      }
      function Hc(n) {
        return zc.apply(this, arguments);
      }
      function zc() {
        return (zc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/clusterPages", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId, clusterType: n.clusterType } });
        })).apply(this, arguments);
      }
      function Kc(n) {
        return Yc.apply(this, arguments);
      }
      function Yc() {
        return (Yc = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/retrieveMetricStats", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId, metricId: n.metricId, isRanking: n.isRanking, selectedTurns: n.selectedTurns } });
        })).apply(this, arguments);
      }
      function Xc(n) {
        return np.apply(this, arguments);
      }
      function np() {
        return (np = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/metricModelScores", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId, metricId: n.metricId, isRanking: n.isRanking, selectedTurns: n.selectedTurns } });
        })).apply(this, arguments);
      }
      function tp(n) {
        return ep.apply(this, arguments);
      }
      function ep() {
        return (ep = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/summaryStats", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId } });
        })).apply(this, arguments);
      }
      function rp(n) {
        return ip.apply(this, arguments);
      }
      function ip() {
        return (ip = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/metricBreakdownTableKeys", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId, metricId: n.metricId } });
        })).apply(this, arguments);
      }
      function op(n) {
        return up.apply(this, arguments);
      }
      function up() {
        return (up = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/metadataKeysFromPrompt", { method: "GET", query: { scenarioSetIds: n.scenarioSetIds } });
        })).apply(this, arguments);
      }
      function lp(n) {
        return sp.apply(this, arguments);
      }
      function sp() {
        return (sp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/metricBreakdownTables", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId, metricId: n.metricId, fieldId: n.fieldId, key: n.key, isRanking: n.isRanking, selectedTurns: n.selectedTurns } });
        })).apply(this, arguments);
      }
      function ap(n) {
        return cp.apply(this, arguments);
      }
      function cp() {
        return (cp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/cancelRun", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function pp(n) {
        return fp.apply(this, arguments);
      }
      function fp() {
        return (fp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/workspaceDashboard", { method: "GET", query: {} });
        })).apply(this, arguments);
      }
      function yp(n) {
        return dp.apply(this, arguments);
      }
      function dp() {
        return (dp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/getRecentWorkspace", { method: "GET", query: {} });
        })).apply(this, arguments);
      }
      function hp(n) {
        return mp.apply(this, arguments);
      }
      function mp() {
        return (mp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/promptScorePlotData", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId, metricId: n.metricId, fieldId: n.fieldId, bucketSize: n.bucketSize, isRanking: n.isRanking, selectedTurns: n.selectedTurns } });
        })).apply(this, arguments);
      }
      function Pp(n) {
        return vp.apply(this, arguments);
      }
      function vp() {
        return (vp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/runInfo", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId } });
        })).apply(this, arguments);
      }
      function gp(n) {
        return _p.apply(this, arguments);
      }
      function _p() {
        return (_p = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/change_run_name", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function Tp(n) {
        return bp.apply(this, arguments);
      }
      function bp() {
        return (bp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/testSetName", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function Sp(n) {
        return Op.apply(this, arguments);
      }
      function Op() {
        return (Op = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/defaultRun", { method: "GET", query: { workspaceId: n.workspaceId } });
        })).apply(this, arguments);
      }
      function Zp(n) {
        return kp.apply(this, arguments);
      }
      function kp() {
        return (kp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/basicRunInfo", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function Np(n) {
        return jp.apply(this, arguments);
      }
      function jp() {
        return (jp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/clusterData", { method: "GET", query: { modelEvalRunId: n.modelEvalRunId, model1: n.model1, model2: n.model2, metricId: n.metricId, sortBy: n.sortBy, sortDirection: n.sortDirection, clusterType: n.clusterType, pageIndex: n.pageIndex } });
        })).apply(this, arguments);
      }
      function Cp(n) {
        return Ip.apply(this, arguments);
      }
      function Ip() {
        return (Ip = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/run", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function Bp(n) {
        return Ep.apply(this, arguments);
      }
      function Ep() {
        return (Ep = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/downloadTasks", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function qp(n) {
        return Ap.apply(this, arguments);
      }
      function Ap() {
        return (Ap = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/visualization", { method: "GET", query: { runId: n.runId } });
        })).apply(this, arguments);
      }
      function wp(n) {
        return xp.apply(this, arguments);
      }
      function xp() {
        return (xp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/getRawData", { method: "POST", body: { modelEvalRunId: n.modelEvalRunId, dataQueryParams: n.dataQueryParams, pageIndex: n.pageIndex } });
        })).apply(this, arguments);
      }
      function Jp(n) {
        return Dp.apply(this, arguments);
      }
      function Dp() {
        return (Dp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/getAllModelEvalRuns", { method: "GET", query: { workspaceId: n.workspaceId } });
        })).apply(this, arguments);
      }
      function Gp(n) {
        return Rp.apply(this, arguments);
      }
      function Rp() {
        return (Rp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelAnalytics/retrievePreferences", { method: "GET", query: { projectId: n.project, model: n.selectedModel, promptLength: n.promptLength, compLength: n.compLength } });
        })).apply(this, arguments);
      }
      function $p(n) {
        return Fp.apply(this, arguments);
      }
      function Fp() {
        return (Fp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelAnalytics/retrieveRankings", { method: "GET", query: { projectId: n.project, batchId: n.batch, promptLength: n.promptLength, compLength: n.compLength } });
        })).apply(this, arguments);
      }
      function Mp(n) {
        return Lp.apply(this, arguments);
      }
      function Lp() {
        return (Lp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/ots/getOtsInfo", { method: "GET", query: { otsId: n.otsId } });
        })).apply(this, arguments);
      }
      function Wp(n) {
        return Up.apply(this, arguments);
      }
      function Up() {
        return (Up = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/ots/getOtsStats", { method: "GET", query: { otsId: n.otsId } });
        })).apply(this, arguments);
      }
      function Vp(n) {
        return Qp.apply(this, arguments);
      }
      function Qp() {
        return (Qp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/ots/suggestOts", { method: "POST", body: { suggestion: n.suggestion } });
        })).apply(this, arguments);
      }
      function Hp(n) {
        return zp.apply(this, arguments);
      }
      function zp() {
        return (zp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/ots/notify_interest_ots_eval", { method: "POST", body: { otsId: n.otsId, info: n.info } });
        })).apply(this, arguments);
      }
      function Kp(n) {
        return Yp.apply(this, arguments);
      }
      function Yp() {
        return (Yp = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/ots/notify_interest_ots_training", { method: "POST", body: { name: n.name, info: n.info } });
        })).apply(this, arguments);
      }
      function Xp(n) {
        return nf.apply(this, arguments);
      }
      function nf() {
        return (nf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/ots/getAllOtsInfo", { method: "GET", query: {} });
        })).apply(this, arguments);
      }
      function tf(n) {
        return ef.apply(this, arguments);
      }
      function ef() {
        return (ef = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelAnalytics/retrieveBatchNames", { method: "GET", query: { projectId: n.project } });
        })).apply(this, arguments);
      }
      function rf(n) {
        return of.apply(this, arguments);
      }
      function of() {
        return (of = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/comment_thread/create_new_thread`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function uf(n) {
        return lf.apply(this, arguments);
      }
      function lf() {
        return (lf = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/comment_thread/add_new_reply/${n.thread}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function sf(n) {
        return af.apply(this, arguments);
      }
      function af() {
        return (af = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, `internal/self_serve/project/${n.project}/comment_thread/update_status/${n.thread}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) });
        })).apply(this, arguments);
      }
      function cf(n) {
        return pf.apply(this, arguments);
      }
      function pf() {
        return (pf = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return yield (0,
          o.ZP)(null, "internal/self_serve/update_user_project_groups", { method: "POST", body: t });
        })).apply(this, arguments);
      }
      function ff(n, t) {
        return yf.apply(this, arguments);
      }
      function yf() {
        return (yf = a(function* (n, t) {
          return n.startsWith("internal/")
            ? yield (0, o.ZP)(null, n, t)
            : yield (0, u.L)(n, {
                headers: t.headers,
                signal: t.signal,
                body: t.body,
                onopen:
                  null === (e = t.fetchEventSourceOptions) || void 0 === e
                    ? void 0
                    : e.onopen,
                onclose:
                  null === (r = t.fetchEventSourceOptions) || void 0 === r
                    ? void 0
                    : r.onclose,
                onmessage:
                  null === (i = t.fetchEventSourceOptions) || void 0 === i
                    ? void 0
                    : i.onmessage,
                onerror:
                  null === (l = t.fetchEventSourceOptions) || void 0 === l
                    ? void 0
                    : l.onerror,
              });
          var e, r, i, l;
        })).apply(this, arguments);
      }
      function df(n) {
        return hf.apply(this, arguments);
      }
      function hf() {
        return (hf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/assets/token", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function mf(n) {
        return Pf.apply(this, arguments);
      }
      function Pf() {
        return (Pf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenario_set/validate", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function vf(n) {
        return gf.apply(this, arguments);
      }
      function gf() {
        return (gf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenario_set/multi_validate", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function _f(n) {
        return Tf.apply(this, arguments);
      }
      function Tf() {
        return (Tf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenario_set", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function bf(n) {
        return Sf.apply(this, arguments);
      }
      function Sf() {
        return (Sf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenario_set/multi_upload", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Of(n) {
        return Zf.apply(this, arguments);
      }
      function Zf() {
        return (Zf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenario_set/upload", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function kf(n) {
        return Nf.apply(this, arguments);
      }
      function Nf() {
        return (Nf = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/model_eval/scenario_set/${n.scenarioSetId}`, { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function jf(n) {
        return Cf.apply(this, arguments);
      }
      function Cf() {
        return (Cf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenarios/upload", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function If(n) {
        return Bf.apply(this, arguments);
      }
      function Bf() {
        return (Bf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/model_setup/validate", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Ef(n) {
        return qf.apply(this, arguments);
      }
      function qf() {
        return (qf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/model_setup/multi_validate", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Af(n) {
        return wf.apply(this, arguments);
      }
      function wf() {
        return (wf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/endpoints_for_run", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function xf(n) {
        return Jf.apply(this, arguments);
      }
      function Jf() {
        return (Jf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/check_workforce_needed", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function Df(n) {
        return Gf.apply(this, arguments);
      }
      function Gf() {
        return (Gf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/create_sample_task", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function Rf(n) {
        return $f.apply(this, arguments);
      }
      function $f() {
        return ($f = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/get_tags", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function Ff(n) {
        return Mf.apply(this, arguments);
      }
      function Mf() {
        return (Mf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/add_tag", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function Lf(n) {
        return Wf.apply(this, arguments);
      }
      function Wf() {
        return (Wf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/model_setup/upload", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function Uf(n, t) {
        return Vf.apply(this, arguments);
      }
      function Vf() {
        return (Vf = a(function* (n, t) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/model_eval/model_setup/upload/${n}`, { method: "POST", body: p({}, t) });
        })).apply(this, arguments);
      }
      function Qf(n) {
        return Hf.apply(this, arguments);
      }
      function Hf() {
        return (Hf = a(function* (n) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/model_eval/model_setup/multi_upload/${n.endpointId}`, { method: "POST", body: { workspaceId: n.workspaceId, scenarioSetId: n.scenarioSetId, presetResponses: n.presetResponses, endpointId: n.endpointId } });
        })).apply(this, arguments);
      }
      function zf(n) {
        return Kf.apply(this, arguments);
      }
      function Kf() {
        return (Kf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/endpoints", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function Yf(n) {
        return Xf.apply(this, arguments);
      }
      function Xf() {
        return (Xf = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/metricFromSets", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function ny(n) {
        return ty.apply(this, arguments);
      }
      function ty() {
        return (ty = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/historySummary", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function ey(n) {
        return ry.apply(this, arguments);
      }
      function ry() {
        return (ry = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/historyHistogram", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function iy(n) {
        return oy.apply(this, arguments);
      }
      function oy() {
        return (oy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/historyLineGraph", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function uy(n) {
        return ly.apply(this, arguments);
      }
      function ly() {
        return (ly = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/modelEvalAnalytics/history", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function sy(n) {
        return ay.apply(this, arguments);
      }
      function ay() {
        return (ay = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/endpoint", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function cy(n) {
        return py.apply(this, arguments);
      }
      function py() {
        return (py = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/endpointPresets", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function fy(n) {
        return yy.apply(this, arguments);
      }
      function yy() {
        return (yy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/endpointInfo", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function dy(n) {
        return hy.apply(this, arguments);
      }
      function hy() {
        return (hy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/skipOnboarding", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function my(n) {
        return Py.apply(this, arguments);
      }
      function Py() {
        return (Py = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/onboardingInfo", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function vy(n) {
        return gy.apply(this, arguments);
      }
      function gy() {
        return (gy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenario_sets", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function _y(n) {
        return Ty.apply(this, arguments);
      }
      function Ty() {
        return (Ty = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenarios", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function by(n) {
        return Sy.apply(this, arguments);
      }
      function Sy() {
        return (Sy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/archive_scenario_sets", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function Oy(n) {
        return Zy.apply(this, arguments);
      }
      function Zy() {
        return (Zy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/change_scenario_set_name", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function ky(n) {
        return Ny.apply(this, arguments);
      }
      function Ny() {
        return (Ny = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/scenario_set", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function jy() {
        return Cy.apply(this, arguments);
      }
      function Cy() {
        return (Cy = a(function* () {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/workspaces", { method: "GET" });
        })).apply(this, arguments);
      }
      function Iy(n) {
        return By.apply(this, arguments);
      }
      function By() {
        return (By = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/workspace", { method: "POST", body: { name: n } });
        })).apply(this, arguments);
      }
      function Ey(n) {
        return qy.apply(this, arguments);
      }
      function qy() {
        return (qy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/metric_sets", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function Ay(n) {
        return wy.apply(this, arguments);
      }
      function wy() {
        return (wy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/metrics", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function xy(n) {
        return Jy.apply(this, arguments);
      }
      function Jy() {
        return (Jy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/metric", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function Dy(n, t, e) {
        return Gy.apply(this, arguments);
      }
      function Gy() {
        return (Gy = a(function* (n, t, e) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/metric", { method: "POST", body: { workspaceId: n, name: t, taxonomy: e } });
        })).apply(this, arguments);
      }
      function Ry(n, t, e) {
        return $y.apply(this, arguments);
      }
      function $y() {
        return ($y = a(function* (n, t, e) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/model_eval/metric/${e}`, { method: "POST", body: { name: n, taxonomy: t } });
        })).apply(this, arguments);
      }
      function Fy(n) {
        return My.apply(this, arguments);
      }
      function My() {
        return (My = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/test_auto_metric", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Ly(n) {
        return Wy.apply(this, arguments);
      }
      function Wy() {
        return (Wy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/auto_eval_ranking_sampled", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function Uy(n) {
        return Vy.apply(this, arguments);
      }
      function Vy() {
        return (Vy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/metric_set", { method: "GET", query: p({}, n) });
        })).apply(this, arguments);
      }
      function Qy(n, t, e) {
        return Hy.apply(this, arguments);
      }
      function Hy() {
        return (Hy = a(function* (n, t, e) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/metric_set", { method: "POST", body: { workspaceId: n, name: t, taxonomy: e } });
        })).apply(this, arguments);
      }
      function zy(n, t, e, r) {
        return Ky.apply(this, arguments);
      }
      function Ky() {
        return (Ky = a(function* (n, t, e, r) {
          return yield (0,
          o.ZP)(null, `internal/self_serve/model_eval/metric_set/${r}`, { method: "POST", body: { workspaceId: n, name: t, taxonomy: e } });
        })).apply(this, arguments);
      }
      function Yy(n) {
        return Xy.apply(this, arguments);
      }
      function Xy() {
        return (Xy = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/run", { method: "POST", body: p({}, n) });
        })).apply(this, arguments);
      }
      function nd(n) {
        return td.apply(this, arguments);
      }
      function td() {
        return (td = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/permissions/list", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      function ed(n) {
        return rd.apply(this, arguments);
      }
      function rd() {
        return (rd = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/get_egp_models_for_user", { method: "GET", query: { workspaceId: n.workspaceId } });
        })).apply(this, arguments);
      }
      function id(n) {
        return od.apply(this, arguments);
      }
      function od() {
        return (od = a(function* (n) {
          const t = i().omitBy(n, i().isNil);
          return (
            i().isNil(t.rankStrategy) &&
              (t.rankStrategy = {
                method: "cross_encoder",
                params: {
                  cross_encoder_model: "cross-encoder/ms-marco-MiniLM-L-12-v2",
                },
              }),
            yield (0, o.ZP)(
              null,
              "internal/self_serve/model_eval/get_top_k_chunks",
              { method: "POST", body: t }
            )
          );
        })).apply(this, arguments);
      }
      function ud(n) {
        return ld.apply(this, arguments);
      }
      function ld() {
        return (ld = a(function* (n) {
          return yield (0,
          o.ZP)(null, "internal/self_serve/model_eval/parse_pdf_buffer", { method: "POST", body: n });
        })).apply(this, arguments);
      }
      const sd = (n) =>
          (0, o.ZP)(
            null,
            `/internal/self_serve/qualitativeFeedback/run/${n.modelEvalRunId}`,
            {
              method: "POST",
              query: p({}, n.showArchived ? { showArchived: !0 } : {}),
            }
          ),
        ad = (n) =>
          (0, o.ZP)(
            null,
            `/internal/self_serve/qualitativeFeedback/run/${n.modelEvalRunId}/surveys`,
            {
              method: "GET",
              query: p({}, n.showArchived ? { showArchived: !0 } : {}),
            }
          ),
        cd = (n) =>
          (0, o.ZP)(
            null,
            `/internal/self_serve/qualitativeFeedback/surveyConfig/${n.modelEvalRunId}`,
            { method: "GET" }
          ),
        pd = (n) =>
          (0, o.ZP)(
            null,
            `/internal/self_serve/qualitativeFeedback/item/${n.feedbackId}`,
            { method: "PUT" }
          ),
        fd = (n) =>
          (0, o.ZP)(
            null,
            `/internal/self_serve/qualitativeFeedback/survey/${n.surveyId}`,
            { method: "PUT" }
          );
    },
  },
]);
