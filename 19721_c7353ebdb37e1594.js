"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [19721],
  {
    21421: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(827378),
        o = a(24526),
        r = a(468891);
      function i() {
        const e = (0, o.Z)(),
          { value: t, setDataQuery: a } = e,
          i = (0, n.useMemo)(() => {
            try {
              var e;
              return JSON.parse(
                null !== (e = r.parse("dataQuery=" + t.dataQuery).dataQuery) &&
                  void 0 !== e
                  ? e
                  : "[]"
              );
            } catch (a) {
              return [];
            }
          }, [t.dataQuery]),
          c = (0, n.useMemo)(() => i && i.length, [i]);
        return {
          dataQueryParams: i,
          setDataQueryParams: a,
          hasDataQueryParams: c,
        };
      }
    },
    684570: function (e, t, a) {
      a.d(t, {
        zT: function () {
          return y;
        },
        of: function () {
          return h;
        },
        Ok: function () {
          return T;
        },
        kh: function () {
          return v;
        },
        av: function () {
          return b;
        },
        MT: function () {
          return S;
        },
        fV: function () {
          return k;
        },
        ir: function () {
          return g;
        },
      });
      a(827378);
      var n = a(298784),
        o = a.n(n),
        r = a(599789),
        i = a(167469),
        c = a(963494),
        s = a(200660),
        u = a(468891),
        l = a(335331);
      a(650735), a(257881);
      function p(e, t, a, n, o, r, i) {
        try {
          var c = e[r](i),
            s = c.value;
        } catch (u) {
          return void a(u);
        }
        c.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      function d(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (n, o) {
            var r = e.apply(t, a);
            function i(e) {
              p(r, n, o, i, c, "next", e);
            }
            function c(e) {
              p(r, n, o, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function f(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              f(e, t, a[t]);
            });
        }
        return e;
      }
      const y = "MMM DD, YYYY",
        h = (e) =>
          "string" === typeof e.metadata
            ? JSON.parse(e.metadata)
            : "object" === typeof e.metadata
            ? e.metadata
            : null,
        T = (e) => {
          const t = h(e);
          return (null === t || void 0 === t ? void 0 : t.attachment_type)
            ? t.attachment_type
            : e.mimeType.match("image/*")
            ? r.SelfServeSupportedAttachmentTypes.Image
            : e.mimeType.match("audio/*")
            ? r.SelfServeSupportedAttachmentTypes.Audio
            : "text/json" === e.mimeType
            ? r.SelfServeSupportedAttachmentTypes.Json
            : e.mimeType.match("text/*") && void 0 === e.text
            ? r.SelfServeSupportedAttachmentTypes.DownloadableText
            : e.mimeType.match("text/*")
            ? r.SelfServeSupportedAttachmentTypes.Text
            : e.mimeType.match("video/*")
            ? r.SelfServeSupportedAttachmentTypes.Video
            : "application/pdf" === e.mimeType
            ? r.SelfServeSupportedAttachmentTypes.Pdf
            : "unprocessed" === e.mimeType
            ? "unprocessed"
            : null;
        },
        v = (function () {
          var e = d(function* (e, t, a, n, r, s, u, l, p) {
            const f = T(t),
              y = t.storageUrl;
            var h;
            const v = n
                ? null !== (h = t.signedUrl) && void 0 !== h
                  ? h
                  : yield r(t._id, p)
                : y,
              b = {};
            if (e === i.TaskType.DocumentTranscription)
              "pdf" === f
                ? ((b.attachments = yield s(t._id, p)),
                  (b.attachment_type = "image"))
                : (b.attachments = [v]);
            else if (e === i.TaskType.TextCollection) {
              const e =
                f === c.TextCollectionAttachmentType.Audio
                  ? c.TextCollectionAttachmentType.TranscriptionAudio
                  : f;
              if (u) b.attachments = yield u(t._id, l);
              else if ("text/json" === t.mimeType) {
                const e = JSON.parse(t.text || "[]");
                (b.attachments = yield Promise.all(
                  e.map(
                    (function () {
                      var e = d(function* (e) {
                        return e.assetId
                          ? { type: e.type, content: yield r(e.assetId, p) }
                          : e;
                      });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                )),
                  (b.force_stacked = !0);
              } else
                b.attachments = [
                  {
                    type: e,
                    content: "text" === f || "website" === f ? t.text : v,
                  },
                ];
            } else if (e === i.TaskType.NamedEntityRecognition)
              if (f === c.TextCollectionAttachmentType.DownloadableText) {
                const e = yield fetch(v);
                b.text = yield e.text();
              } else b.text = t.text;
            else if (e === i.TaskType.VideoPlaybackAnnotation) {
              var S;
              (b.attachment_type = f),
                (b.attachment = n ? v : yield r(t._id, p)),
                (b.metadata = t.metadata),
                (b.frame_rate =
                  null !== (S = a.frame_rate) && void 0 !== S ? S : 1);
            } else
              (b.attachment = "text" === f || "website" === f ? t.text : v),
                (b.attachment_type = f);
            return o().pickBy(m({}, a, b));
          });
          return function (t, a, n, o, r, i, c, s, u) {
            return e.apply(this, arguments);
          };
        })(),
        b = (e, t) =>
          t && t === r.UseCaseType.TEXT_GEN
            ? i.TaskPipelineName.FreeformTextCollectionTask
            : e === i.TaskType.Categorization
            ? i.TaskPipelineName.ConsensusTask
            : i.TaskPipelineName.StandardTask,
        S =
          (r.UseCaseType.WITHOUT_TEMPLATE,
          r.UseCaseType.AV_IMAGE,
          r.UseCaseType.AC_IMAGE,
          r.UseCaseType.LOGI_IMAGE,
          r.UseCaseType.AV_VIDEO,
          r.UseCaseType.ARVR_VIDEO,
          r.UseCaseType.RESUME_DOCUMENTS,
          r.UseCaseType.INVOICE_DOCUMENTS,
          r.UseCaseType.TEXT_GEN,
          r.UseCaseType.RELEVANCE,
          r.UseCaseType.MOS_RANKING,
          r.UseCaseType.AUDIO_TRANSCRIPTION,
          r.UseCaseType.GENERAL_CLASS,
          r.UseCaseType.NER,
          (e) => {
            const [, t] = e.match(/\/([^/]*).*$/);
            return t;
          });
      function C(e) {
        return e.startsWith(`/${s.F.Studio}`)
          ? s.F.Studio
          : e.startsWith(`/${s.F.Pro}`)
          ? s.F.Pro
          : e.startsWith(`/${s.F.Rapid}`)
          ? s.F.Rapid
          : s.F.Classic;
      }
      Object.freeze({
        regular_batch_launched: { progress: 100 },
        launch_regular_batch: {
          progress: 90,
          text: "Launch production batch",
          to: "/batches",
        },
        quality_tasks: {
          progress: 70,
          text: "Audit & create quality tasks",
          to: "/batches",
        },
        calibration_review: {
          progress: 55,
          text: "Review feedback from calibration",
          to: "/batches",
        },
        calibration_create: {
          progress: 45,
          text: "Create calibration batch",
          to: "/batches",
        },
        instruction_write: {
          progress: 30,
          text: "Write instructions",
          to: "/definition",
        },
        taxonomy_define: {
          progress: 15,
          text: "Define taxonomy",
          to: "/definition",
        },
        data_upload: { progress: 0, text: "Upload data", to: "/definition" },
      }),
        Object.freeze({
          regular_batch_launched: { progress: 100 },
          launch_regular_batch: {
            progress: 70,
            text: "Launch production batch",
            to: "/batches",
          },
          quality_tasks: {
            progress: 50,
            text: "Audit & create quality tasks",
            to: "/batches",
          },
          calibration_review: {
            progress: 10,
            text: "Review feedback from calibration",
            to: "/batches",
          },
          calibration_create: {
            progress: 0,
            text: "Create calibration batch",
            to: "/batches",
          },
        });
      var k;
      !(function (e) {
        (e.local = "Local"),
          (e.previous_project = "Previous Project"),
          (e.s3 = "Amazon S3"),
          (e.gcp = "Google Cloud Platform"),
          (e.azure = "Microsoft Azure"),
          (e.url = "URL");
      })(k || (k = {}));
      k.local, k.previous_project, k.s3, k.gcp, k.azure, k.url;
      const g = () => {
        const e = (0, l.k6)();
        function t() {
          return C(e.location.pathname);
        }
        return {
          redirect: function (t, a) {
            const { project: n, spoof: o } = u.parse(e.location.search),
              r = u.stringify(
                m(
                  {
                    project: (
                      null === a || void 0 === a ? void 0 : a.clearProject
                    )
                      ? void 0
                      : (null === a || void 0 === a ? void 0 : a.projectId) ||
                        n,
                    spoof: o,
                  },
                  null === a || void 0 === a ? void 0 : a.additionalArgs
                )
              );
            let i;
            t.startsWith(`/${s.F.Rapid}/`)
              ? ((i = s.F.Rapid), (t = t.replace(`/${i}`, "")))
              : t.startsWith(`/${s.F.Studio}/`)
              ? ((i = s.F.Studio), (t = t.replace(`/${i}`, "")))
              : t.startsWith(`/${s.F.Pro}/`)
              ? ((i = s.F.Pro), (t = t.replace(`/${i}`, "")))
              : (i = S(e.location.pathname)),
              e.push({ pathname: `/${i}${t}`, search: r });
          },
          isRapidUrl: function () {
            return t() === s.F.Rapid;
          },
          isStudioUrl: function () {
            return window.location.pathname.includes("studio");
          },
          canViewOldModelEval: function () {
            return (
              window.location.pathname.includes("modeleval") &&
              window.location.search.includes("spoof") &&
              window.location.search.includes("old")
            );
          },
          getDashboardPageTypeFromUrlPath: t,
          convertPathBetweenRapidStudio: function (t) {
            e.replace({
              pathname: t
                ? e.location.pathname.replace("/studio", "/rapid")
                : e.location.pathname.replace("/rapid", "/studio"),
              search: e.location.search,
            });
          },
          urlWithQuerystring: function (t, a, n) {
            const { spoof: o, project: r } = u.parse(e.location.search);
            if (void 0 !== a) {
              const n = a
                ? u.stringify({ project: a, spoof: o })
                : u.stringify({ spoof: o });
              return `/${S(e.location.pathname)}/${t}?${n}`;
            }
            if (n) {
              const a = u.stringify({ project: r, spoof: o });
              return `/${S(e.location.pathname)}/${t}?${a}`;
            }
            return `/${S(e.location.pathname)}/${t}${e.location.search}`;
          },
        };
      };
    },
    24526: function (e, t, a) {
      var n = a(827378),
        o = a(87336),
        r = a(875785);
      const i = { encode: r.Y9, decode: r.aG },
        c = (0, o.Wc)(o.V3, []),
        s = (0, o.Wc)(o.Zp, "created");
      t.Z = () => {
        const [e, t] = (0, o.Kx)({
            type: c,
            batches: c,
            tags: c,
            status: c,
            dateFilter: s,
            auditStatus: c,
            dateTo: (0, o.Wc)(i, void 0),
            dateFrom: (0, o.Wc)(i, void 0),
            project: (0, o.Wc)(o.Zp, void 0),
            markedForHumanReview: (0, o.Wc)(o.dJ, void 0),
            viewingScenes: (0, o.Wc)(o.dJ, void 0),
            showUniqueId: (0, o.Wc)(o.dJ, !1),
            skipped: (0, o.Wc)(o.dJ, void 0),
            pinned: (0, o.Wc)(o.dJ, void 0),
            dataQuery: (0, o.Wc)(o.Zp, void 0),
            search: (0, o.Wc)(o.Zp, void 0),
            version: (0, o.Wc)(o.Zp, void 0),
            auditorId: (0, o.Wc)(o.Zp, void 0),
            chatCompetency: (0, o.Wc)(o.Zp, void 0),
          }),
          a = (0, n.useCallback)(() => {
            t({
              type: [],
              status: [],
              batches: [],
              tags: [],
              auditStatus: [],
              dateTo: void 0,
              project: void 0,
              dateFrom: void 0,
              dateFilter: void 0,
              markedForHumanReview: void 0,
              viewingScenes: void 0,
              showUniqueId: void 0,
              skipped: void 0,
              version: void 0,
              pinned: void 0,
              dataQuery: void 0,
              auditorId: void 0,
            });
          }, [t]),
          r = (0, n.useCallback)((e) => t({ dateFilter: e }), [t]),
          u = (0, n.useCallback)((e) => t({ dateFrom: e }), [t]),
          l = (0, n.useCallback)((e) => t({ project: e }), [t]),
          p = (0, n.useCallback)((e) => t({ dateTo: e }), [t]),
          d = (0, n.useCallback)((e) => t({ type: e }), [t]),
          f = (0, n.useCallback)((e) => t({ status: e }), [t]),
          m = (0, n.useCallback)((e) => t({ auditStatus: e }), [t]),
          y = (0, n.useCallback)((e) => t({ batches: e }), [t]),
          h = (0, n.useCallback)((e) => t({ tags: e }), [t]),
          T = (0, n.useCallback)((e) => t({ showUniqueId: e }), [t]),
          v = (0, n.useCallback)((e) => t({ markedForHumanReview: e }), [t]),
          b = (0, n.useCallback)((e) => t({ viewingScenes: e }), [t]),
          { 0: S, 1: C } = (0, n.useState)(!1);
        return {
          value: e,
          clear: a,
          setProject: l,
          setDateFilter: r,
          setDateFrom: u,
          setDateTo: p,
          setTaskTypes: d,
          setStatus: f,
          setAuditStatus: m,
          setBatches: y,
          setTags: h,
          setMarkedForHumanReview: v,
          setShowUniqueId: T,
          showSkipped: S,
          setShowSkipped: C,
          setViewingScenes: b,
          setSkipped: (0, n.useCallback)((e) => t({ skipped: e }), [t]),
          setSearch: (0, n.useCallback)((e) => t({ search: e }), [t]),
          setVersion: (0, n.useCallback)((e) => t({ version: e }), [t]),
          setPinned: (0, n.useCallback)((e) => t({ pinned: e }), [t]),
          setDataQuery: (0, n.useCallback)((e) => t({ dataQuery: e }), [t]),
          setAuditorId: (0, n.useCallback)((e) => t({ auditorId: e }), [t]),
          setChatCompetency: (0, n.useCallback)(
            (e) => t({ chatCompetency: e }),
            [t]
          ),
        };
      };
    },
    794067: function (e, t, a) {
      a(298784);
    },
    875785: function (e, t, a) {
      a.d(t, {
        h$: function () {
          return s;
        },
        mX: function () {
          return u;
        },
        nP: function () {
          return l;
        },
        Y9: function () {
          return p;
        },
        aG: function () {
          return d;
        },
      });
      var n = a(298784),
        o = a.n(n),
        r = a(951154),
        i = a.n(r),
        c = a(599789);
      const s = (e, t) => {
          const a = e.clone().utc();
          return t === c.Timezone.Local
            ? a.local()
            : t === c.Timezone.Pacific
            ? a.tz("America/Los_Angeles")
            : a;
        },
        u = (e, t) => {
          const a = [e.year(), e.month(), e.date()];
          return t === c.Timezone.Local
            ? i()(a)
            : t === c.Timezone.Pacific
            ? i().tz(a, "America/Los_Angeles")
            : i().tz(a, "UTC");
        };
      function l(e) {
        return e.clone().tz("UTC", !0);
      }
      const p = o().memoize((e) => {
          if (e) return `${i()(e).unix()}`;
        }),
        d = o().memoize((e) => {
          if (e && !Array.isArray(e)) return i().unix(parseInt(e, 10)).utc();
        });
    },
    650735: function (e, t, a) {
      a.d(t, {
        sT: function () {
          return s;
        },
        Tv: function () {
          return o;
        },
        E1: function () {
          return c;
        },
        sW: function () {
          return r;
        },
        bd: function () {
          return i;
        },
      });
      var n = a(599789);
      a(257881),
        a(21421),
        a(684570),
        a(794067),
        a(298784),
        a(827378),
        a(711719);
      function o(e) {
        return r(e) || i(e);
      }
      function r(e) {
        return (
          !!e &&
          "string" !== typeof e &&
          e.projectType === n.ProjectType.SelfServe
        );
      }
      function i(e) {
        return (
          !!e && "string" !== typeof e && e.projectType === n.ProjectType.Studio
        );
      }
      function c(e) {
        return (
          (function (e) {
            return !!e && e === n.ProjectType.SelfServe;
          })(e) ||
          (function (e) {
            return !!e && e === n.ProjectType.Studio;
          })(e)
        );
      }
      function s(e) {
        return !e || "" === e || e === n.ProjectType.Pro;
      }
    },
  },
]);
