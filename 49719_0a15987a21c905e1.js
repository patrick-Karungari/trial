"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [49719],
  {
    835051: function (e, t, a) {
      a.d(t, {
        mh: function () {
          return d;
        },
        hx: function () {
          return n;
        },
        MC: function () {
          return p;
        },
      });
      var n,
        o = a(298784),
        s = a.n(o),
        r = a(827378),
        i = a(257881),
        c = a(285556);
      function u(e, t, a, n, o, s, r) {
        try {
          var i = e[s](r),
            c = i.value;
        } catch (u) {
          return void a(u);
        }
        i.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function l(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (n, o) {
            var s = e.apply(t, a);
            function r(e) {
              u(s, n, o, r, i, "next", e);
            }
            function i(e) {
              u(s, n, o, r, i, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function d(e) {
        const { 0: t, 1: a } = (0, r.useState)(!0),
          { 0: n, 1: o } = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          l(function* () {
            const { isAttachmentCoveredByHipaa: t } =
              yield i.Z.selfserve.fetchProjectAttachmentHipaaCoverage({
                project: e,
              });
            o(t), a(!1);
          })();
        }, [e]);
        const s = (function () {
          var t = l(function* () {
            const { isAttachmentCoveredByHipaa: t } =
              yield i.Z.selfserve.fetchProjectAttachmentHipaaCoverage({
                project: e,
              });
            o(t);
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
        return {
          isLoading: t,
          isProjectAttachmentCoveredByHipaa: n,
          refresh: s,
        };
      }
      function p(e, t) {
        const { 0: a, 1: o } = (0, r.useState)(null),
          { 0: u, 1: d } = (0, r.useState)(0),
          { 0: p, 1: m } = (0, r.useState)([]),
          { 0: T, 1: h } = (0, r.useState)(null),
          S = e
            ? [
                n.CreateANewProject,
                n.SelectTemplate,
                n.AddData,
                n.UseCaseTemplate,
                n.TemplateLabel,
                n.PreviewTask,
                n.TaxonomyNext,
                n.Instructions,
                n.PreviewInstructions,
                n.InstructionsNext,
                n.BatchNext,
                n.LaunchBatch,
              ]
            : [
                n.CreateANewProject,
                n.SelectTemplate,
                n.SampleDataset,
                n.DataImported,
                n.UseCase,
                n.Pipeline,
                n.UseCaseNext,
                n.Label,
                n.PreviewTask,
                n.TaxonomyNext,
                n.Instructions,
                n.PreviewInstructions,
                n.InstructionsNext,
                n.BatchNext,
                n.LaunchBatch,
              ],
          f = (e) => {
            p.includes(e) ||
              (e === n.TaxonomyNext
                ? m([...p, e, n.PreviewTask, n.Label])
                : e === n.InstructionsNext
                ? m([...p, e, n.PreviewInstructions, n.Instructions])
                : m([...p, e]));
          },
          y = () => {
            m([]), d(0);
          },
          v = (function () {
            var e = l(function* () {
              m(S), o(!1), d(0);
              try {
                l(function* () {
                  yield i.Z.selfserve.exitOnboardingTour({});
                })();
              } catch (e) {
                m(S), o(!1), d(0);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          C = (function () {
            var e = l(function* () {
              try {
                l(function* () {
                  yield i.Z.selfserve.enterOnboardingTour({});
                })(),
                  y(),
                  o(!0);
              } catch (e) {
                y(), o(!0);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        (0, r.useEffect)(() => {
          const e = (function () {
            var e = l(function* () {
              if (s().isNil(a)) {
                const e = yield i.Z.selfserve.checkShouldEnterOnboardingTour(
                  {}
                );
                o(e.shouldEnter), e.shouldEnter ? y() : m(S);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e().catch((e) => (0, c.vj)(e, { handleHttp: !0 }));
        }, [a, S, e]);
        const N = {
          [n.CreateANewProject]: {
            name: n.CreateANewProject,
            text: "Hello! Start by finding a template that matches your use cases or create a custom project.",
            placement: "right-end",
          },
          [n.SampleDataset]: {
            name: n.SampleDataset,
            text: "Don\u2019t have your data handy? Use a sample dataset instead! You can also add your own data later.",
            placement: "right",
          },
          [n.DataImported]: {
            name: n.DataImported,
            text: "Success! Your data has been imported. Click next to continue.",
            placement: "bottom",
          },
          [n.UseCase]: {
            name: n.UseCase,
            text: "Pick the use case that best fits your labeling needs. To see examples, click \u201cLearn More.\u201d",
            placement: "right",
          },
          [n.Pipeline]: {
            name: n.Pipeline,
            text: "A pipeline outlines the sequence in which labelers complete your task. Select one. ",
            placement: "right",
          },
          [n.UseCaseNext]: {
            name: n.UseCaseNext,
            text: "Click next to continue!",
            placement: "bottom",
          },
          [n.Label]: {
            name: n.Label,
            text: "We\u2019ve added some example labels to help you get started. Click into a label to edit its details",
            placement: "left",
            hasNext: !0,
          },
          [n.PreviewTask]: {
            name: n.PreviewTask,
            text: "Check how your task will appear to labelers.",
            placement: "right",
            hasNext: !0,
          },
          [n.TaxonomyNext]: {
            name: n.TaxonomyNext,
            text: "Click next when you have added all your labels!",
            placement: "bottom",
          },
          [n.Instructions]: {
            name: n.Instructions,
            text: "Write your instructions. We\u2019ve created sections to help you get started! Click into a section to edit its details.",
            placement: "left",
            hasNext: !0,
          },
          [n.PreviewInstructions]: {
            name: n.PreviewInstructions,
            text: "Check how your instructions will look to labelers.",
            placement: "right",
            hasNext: !0,
          },
          [n.InstructionsNext]: {
            name: n.InstructionsNext,
            text: "Click next when your instructions are ready!",
            placement: "bottom",
          },
          [n.BatchNext]: {
            name: n.BatchNext,
            text: "Click next to select your data for your first batch!",
            placement: "left",
          },
          [n.LaunchBatch]: {
            name: n.LaunchBatch,
            text: "Click here to launch your batch!",
            placement: "left",
          },
          [n.SelectTemplate]: {
            name: n.SelectTemplate,
            text: "Select this template if it matches your use case!",
            placement: "bottom",
          },
          [n.AddData]: {
            name: n.AddData,
            text: "Click here to add your own data! You can also upload more later. Or, click next to continue.",
            placement: "bottom",
          },
          [n.UseCaseTemplate]: {
            name: "use_case_template",
            text: "Your use case and pipeline are selected based on the template that you have chosen. Click next to continue!",
            placement: "bottom",
          },
          [n.TemplateLabel]: {
            name: "template_label",
            text: "This template comes with some labels to help you get started. Click into a label to edit its details",
            placement: "left",
            hasNext: !0,
          },
        };
        return t && a
          ? {
              tourRef: T,
              setTourRef: h,
              currentTourStep: s().get(N, S[u], null),
              handleNextTourStep: () => {
                u + 1 >= S.length ? d(-1) : (d(u + 1), f(S[u]));
              },
              syncTourStep: (e) => {
                if (S.includes(e) && e !== n.Clear)
                  if (p.includes(e) && s().get(N, [e, "hasNext"], null)) {
                    for (let t = S.indexOf(e); t < S.length; t++)
                      if (!p.includes(S[t])) {
                        d(t);
                        break;
                      }
                  } else
                    e === n.TaxonomyNext
                      ? p.includes(n.Label)
                        ? p.includes(n.PreviewTask)
                          ? d(S.indexOf(e))
                          : d(S.indexOf(n.PreviewTask))
                        : d(S.indexOf(n.Label))
                      : e === n.InstructionsNext
                      ? p.includes(n.Instructions)
                        ? p.includes(n.PreviewInstructions)
                          ? d(S.indexOf(e))
                          : d(S.indexOf(n.PreviewInstructions))
                        : d(S.indexOf(n.Instructions))
                      : d(S.indexOf(e));
                else d(-1), h(null);
              },
              closeTourStep: f,
              closedTourSteps: p,
              resetTour: y,
              handleEnterTour: C,
              handleExitTour: v,
              closeUpToCurrentView: (e) => {
                if (S.includes(e)) {
                  const t = [];
                  for (const a of S) {
                    if (a === e) break;
                    p.includes(a) || t.push(a);
                  }
                  m([...p, ...t]);
                }
              },
            }
          : {
              tourRef: null,
              setTourRef: () => {},
              currentTourStep: "",
              handleNextTourStep: () => {},
              syncTourStep: () => {},
              closeTourStep: () => {},
              closedTourSteps: [],
              resetTour: () => {},
              handleEnterTour: C,
              handleExitTour: () => {},
              closeUpToCurrentView: () => {},
            };
      }
      !(function (e) {
        (e.Clear = ""),
          (e.CreateANewProject = "create_a_new_project"),
          (e.SelectTemplate = "select_template"),
          (e.SampleDataset = "sample_dataset"),
          (e.AddData = "add_data"),
          (e.DataImported = "data_imported"),
          (e.UseCase = "use_case"),
          (e.UseCaseTemplate = "use_case_template"),
          (e.Pipeline = "pipeline"),
          (e.UseCaseNext = "use_case_next"),
          (e.Label = "label"),
          (e.TemplateLabel = "template_label"),
          (e.PreviewTask = "preview_task"),
          (e.TaxonomyNext = "taxonomy_next"),
          (e.Instructions = "instructions"),
          (e.PreviewInstructions = "preview_instructions"),
          (e.InstructionsNext = "instructions_next"),
          (e.BatchNext = "batch_next"),
          (e.LaunchBatch = "launch_batch");
      })(n || (n = {}));
    },
    149719: function (e, t, a) {
      a.d(t, {
        $O: function () {
          return y;
        },
        kZ: function () {
          return O;
        },
        I6: function () {
          return S;
        },
        XK: function () {
          return f;
        },
        FY: function () {
          return h;
        },
        kc: function () {
          return A;
        },
      });
      var n,
        o = a(824246),
        s = a(827378),
        r = a(599789),
        i = a(167469),
        c = a(741722),
        u = a(257881),
        l = a(684570),
        d = a(434592),
        p = a(298784),
        m = a.n(p);
      !(function (e) {
        (e.EU_DATA = "EU_DATA"),
          (e.US_DATA = "US_DATA"),
          (e.SENSITIVE_CONTENT_OBSCENE = "SENSITIVE_CONTENT_OBSCENE"),
          (e.SENSITIVE_CONTENT_VIOLENT = "SENSITIVE_CONTENT_VIOLENT"),
          (e.SENSITIVE_CONTENT_DEFAMATORY = "SENSITIVE_CONTENT_DEFAMATORY"),
          (e.SENSITIVE_CONTENT_WEAPONS = "SENSITIVE_CONTENT_WEAPONS"),
          (e.SENSITIVE_CONTENT_TERROR = "SENSITIVE_CONTENT_TERROR"),
          (e.SENSITIVE_CONTENT_PUBLICITY_RIGHTS =
            "SENSITIVE_CONTENT_PUBLICITY_RIGHTS"),
          (e.HIPAA_VENDOR = "HIPAA_VENDOR"),
          (e.HIPAA_ATTACHMENTS = "HIPAA_ATTACHMENTS"),
          (e.HIPAA_RESPONSES = "HIPAA_RESPONSES"),
          (e.PII = "PII"),
          (e.PERSONAL_TRAITS = "PERSONAL_TRAITS"),
          (e.FINANCIAL_INST = "FINANCIAL_INST"),
          (e.OWNERSHIP = "OWNERSHIP");
      })(n || (n = {}));
      n.EU_DATA, n.US_DATA;
      const T = {
        [n.SENSITIVE_CONTENT_OBSCENE]:
          "The data is obscene, pornographic, or indecent",
        [n.SENSITIVE_CONTENT_VIOLENT]:
          "The data is violent (including suicide and self-harm), threatening, hateful, or discriminatory",
        [n.SENSITIVE_CONTENT_DEFAMATORY]:
          "The data is defamatory, harassing, misleading, or fraudulent",
        [n.SENSITIVE_CONTENT_WEAPONS]:
          "The data depicts weapons, illegal drugs, or drug paraphernalia",
        [n.SENSITIVE_CONTENT_TERROR]:
          "The data promotes or supports terror or hate groups",
        [n.SENSITIVE_CONTENT_PUBLICITY_RIGHTS]:
          "The data violates or may violate the privacy or publicity rights of any person or entity",
      };
      n.HIPAA_VENDOR,
        n.HIPAA_ATTACHMENTS,
        n.HIPAA_RESPONSES,
        n.PII,
        n.PERSONAL_TRAITS,
        n.FINANCIAL_INST,
        n.OWNERSHIP,
        Object.keys(T),
        n.HIPAA_RESPONSES;
      var h,
        S,
        f,
        y,
        v = a(835051),
        C = a(554211),
        N = a(650735);
      function I(e, t, a, n, o, s, r) {
        try {
          var i = e[s](r),
            c = i.value;
        } catch (u) {
          return void a(u);
        }
        i.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function P(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (n, o) {
            var s = e.apply(t, a);
            function r(e) {
              I(s, n, o, r, i, "next", e);
            }
            function i(e) {
              I(s, n, o, r, i, "throw", e);
            }
            r(void 0);
          });
        };
      }
      function E(e, t, a) {
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
      function b(e) {
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
              E(e, t, a[t]);
            });
        }
        return e;
      }
      function x(e, t) {
        if (null == e) return {};
        var a,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              o = {},
              s = Object.keys(e);
            for (n = 0; n < s.length; n++)
              (a = s[n]), t.indexOf(a) >= 0 || (o[a] = e[a]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (n = 0; n < s.length; n++)
            (a = s[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (o[a] = e[a]));
        }
        return o;
      }
      !(function (e) {
        (e.Creation = "creation"),
          (e.DataUpload = "dataupload"),
          (e.DataView = "dataview"),
          (e.ProjectConfig = "projectconfig"),
          (e.Taxonomy = "taxonomy"),
          (e.Instruction = "instruction"),
          (e.Task = "task"),
          (e.Workforce = "workforce"),
          (e.DataSelect = "dataselect"),
          (e.ProjectSettings = "projectsettings"),
          (e.Payment = "payment"),
          (e.Complete = "complete");
      })(h || (h = {})),
        (function (e) {
          (e.Creation = "creation"),
            (e.Data = "data"),
            (e.ProjectConfig = "projectconfig"),
            (e.Taxonomy = "taxonomy"),
            (e.Instruction = "instruction"),
            (e.Task = "task"),
            (e.Batch = "batch"),
            (e.Summary = "summary");
        })(S || (S = {})),
        (function (e) {
          (e.Incomplete = "incomplete"),
            (e.Complete = "complete"),
            (e.Locked = "locked");
        })(f || (f = {})),
        (function (e) {
          (e.View = "view"),
            (e.Taxonomy = "editTaxonomy"),
            (e.Changes = "propagateChanges"),
            (e.Instructions = "editInstructions");
        })(y || (y = {}));
      const g = s.createContext({
        isOnboardingComplete: void 0,
        setIsOnboardingComplete: () => {},
        loading: void 0,
        setLoading: () => {},
        project: void 0,
        setProject: () => {},
        currentView: void 0,
        setCurrentView: () => {},
        currentStep: void 0,
        setCurrentStep: () => {},
        hasAssets: void 0,
        setHasAssets: () => {},
        onboardingSteps: [],
        setOnboardingSteps: () => {},
        firstBatchSelectedMap: void 0,
        setFirstBatchSelectedMap: () => {},
        selectionQueryFilter: void 0,
        setSelectionQueryFilter: () => {},
        firstBatchSelectionMethod: void 0,
        setFirstBatchSelectionMethod: () => {},
        firstBatchNumTasks: void 0,
        setFirstBatchNumTasks: () => {},
        numAssets: void 0,
        setNumAssets: () => {},
        taskCount: void 0,
        setTaskCount: () => {},
        costEstimate: void 0,
        setCostEstimate: () => {},
        taskType: void 0,
        setTaskType: () => {},
        projectUseCase: void 0,
        setProjectUseCase: () => {},
        finalizeOnboarding: () => {},
        nextEnabled: void 0,
        setNextEnabled: () => {},
        batchSelected: void 0,
        setBatchSelected: () => {},
        batchName: "first_batch",
        setBatchName: () => {},
        isSelfLabel: !1,
        projectOptions: void 0,
        setProjectOptions: () => {},
        useOldOnboarding: !1,
        setUseOldOnboarding: () => {},
        sensitiveDataSelections: m().zipObject(
          Object.values(n),
          new Array(Object.keys(n).length).fill(!1)
        ),
        setSensitiveDataSelections: () => {},
        sensitiveDataQuestionnaireCompleted: !1,
        setSensitiveDataQuestionnaireCompleted: () => {},
        useCaseType: void 0,
        setUseCaseType: () => {},
        templatePipeline: void 0,
        setTemplatePipeline: () => {},
        footerShown: !1,
        setFooterShown: () => {},
        stepNext: void 0,
        setStepNext: () => {},
        disabledNextText: void 0,
        setDisabledNextText: () => {},
        isAttachmentHipaaCovered: !1,
        hipaaCoverageRefresh: () => {},
        populatePriceEstimator: !1,
        setPopulatePriceEstimator: () => {},
        firstTimeTemplate: !1,
        setFirstTimeTemplate: () => {},
        useOnboardingV3: !1,
        canUsePlugAndPlay: !1,
        usePlugAndPlayOnboarding: !1,
        plugAndPlayV2: !1,
        collapseSidebar: !1,
        setCollapseSidebar: () => {},
        handleExitTour: () => {},
        handleEnterTour: () => {},
        resetTour: () => {},
        popperIsOpen: !1,
        tourRef: null,
        setTourRef: () => {},
        currentTourStep: null,
        handleNextTourStep: () => {},
        syncTourStep: () => {},
        closeTourStep: () => {},
        closeUpToCurrentView: () => {},
        closedTourSteps: [],
        onboardingStudioProject: !1,
        refreshConfigs: () => {},
        showStudioLaunchPage: !1,
        setShowStudioLaunchPage: () => {},
        revertNewAuditUI: !1,
        setRevertNewAuditUI: () => {},
        launchError: "",
      });
      var O = (e) => {
        var { children: t } = e,
          a = x(e, ["children"]);
        const { 0: p, 1: T } = (0, s.useState)(),
          { 0: y, 1: I } = (0, s.useState)(),
          { 0: E, 1: O } = (0, s.useState)(a.project),
          { 0: A, 1: k } = (0, s.useState)(),
          { 0: _, 1: j } = (0, s.useState)(),
          { 0: w, 1: L } = (0, s.useState)(),
          { 0: B, 1: R } = (0, s.useState)(a.taskType),
          { 0: D, 1: U } = (0, s.useState)(),
          { 0: V, 1: H } = (0, s.useState)(void 0),
          { 0: F, 1: M } = (0, s.useState)(),
          { 0: Z, 1: W } = (0, s.useState)([
            { name: S.Creation, status: f.Complete },
            { name: S.Data, status: f.Incomplete },
            { name: S.Task, status: f.Locked },
            { name: S.Batch, status: f.Locked },
            { name: S.Summary, status: f.Locked },
          ]),
          { 0: Y, 1: z } = (0, s.useState)(),
          { 0: Q, 1: G } = (0, s.useState)(),
          { 0: K, 1: q } = (0, s.useState)(),
          { 0: X, 1: $ } = (0, s.useState)(),
          { 0: J, 1: ee } = (0, s.useState)(),
          { 0: te, 1: ae } = (0, s.useState)(),
          { 0: ne, 1: oe } = (0, s.useState)(),
          { 0: se, 1: re } = (0, s.useState)(),
          { 0: ie, 1: ce } = (0, s.useState)(),
          ue = (0, s.useMemo)(() => se === r.BatchCreationType.SelfLabel, [se]),
          { 0: le, 1: de } = (0, s.useState)(),
          { 0: pe, 1: me } = (0, s.useState)(!1),
          { 0: Te, 1: he } = (0, s.useState)(
            m().zipObject(
              Object.values(n),
              new Array(Object.keys(n).length).fill(!1)
            )
          ),
          { 0: Se, 1: fe } = (0, s.useState)(!1),
          { 0: ye, 1: ve } = (0, s.useState)(),
          { 0: Ce, 1: Ne } = (0, s.useState)(!1),
          { 0: Ie, 1: Pe } = (0, s.useState)(),
          { 0: Ee, 1: be } = (0, s.useState)(),
          { isProjectAttachmentCoveredByHipaa: xe, refresh: ge } = (0, v.mh)(
            null === E || void 0 === E ? void 0 : E.id
          ),
          { 0: Oe, 1: Ae } = (0, s.useState)(!1),
          { 0: ke, 1: _e } = (0, s.useState)(!1),
          je = (0, C.ZP)("rapid-onboarding-v3", {}, !1) || !1,
          { isStudioUrl: we } = (0, l.ir)(),
          Le = ((0, C.ZP)("rapid-plug-and-play", {}, !1) && !we()) || !1,
          Be = ((0, C.ZP)("rapid-plug-and-play-v2", {}, !1) && !we()) || !1,
          Re = (0, s.useMemo)(
            () =>
              (null === E || void 0 === E ? void 0 : E.rapidPlugAndPlayType) &&
              [
                c.RapidPlugAndPlayType.Summarization,
                c.RapidPlugAndPlayType.Generation,
              ].includes(E.rapidPlugAndPlayType),
            [E]
          ),
          { 0: De, 1: Ue } = (0, s.useState)(!1),
          { 0: Ve, 1: He } = (0, s.useState)(!1),
          { 0: Fe, 1: Me } = (0, s.useState)(!1),
          { 0: Ze, 1: We } = (0, s.useState)(""),
          { 0: Ye, 1: ze } = (0, s.useState)(0),
          { 0: Qe, 1: Ge } = (0, s.useState)(!1),
          {
            tourRef: Ke,
            setTourRef: qe,
            currentTourStep: Xe,
            handleNextTourStep: $e,
            syncTourStep: Je,
            closeTourStep: et,
            closeUpToCurrentView: tt,
            closedTourSteps: at,
            handleExitTour: nt,
            handleEnterTour: ot,
            resetTour: st,
          } = (0, v.MC)(
            ke,
            !E ||
              (null === E || void 0 === E ? void 0 : E.projectType) ===
                r.ProjectType.SelfServe
          ),
          rt = !m().isNil(Ke) && Xe && Xe.name && !at.includes(Xe.name),
          it = (0, s.useCallback)(() => {
            const e = (function () {
              var e = P(function* () {
                We(""),
                  Ve &&
                    xe &&
                    (yield u.Z.selfserve.updateCustomerAttachmentHipaaCoverage({
                      isAttachmentCoveredByHipaa: xe,
                    }));
                const e = {
                  enableOcr: B === i.TaskType.DocumentTranscription,
                  isAudioTranscription: !1,
                  containsAdultContent: !1,
                };
                let t,
                  a = 3;
                for (; a > 0; )
                  try {
                    t = yield u.Z.selfserve.updateInitialSetup(
                      b(
                        {
                          project: null === E || void 0 === E ? void 0 : E.id,
                          taskType: B,
                        },
                        le,
                        Ve ? e : {},
                        {
                          useLabelerManagementPlatform: !!Ve,
                          skipOverrideValidators: !0,
                        }
                      )
                    );
                    break;
                  } catch (n) {
                    a--;
                  }
                if (t && t.success) {
                  O(t.project);
                  const e = {
                    project: t.project.id,
                    filterByHasTask: !1,
                    selectionQueryFilter: Q,
                  };
                  (
                    null === E || void 0 === E
                      ? void 0
                      : E.rapidPlugAndPlayGeneratePrompts
                  )
                    ? (e.size = te)
                    : K
                    ? ((e.choice = K), (e.size = X))
                    : Object.keys(Y).length > 0 &&
                      ((e.uploadedAssetIds = Object.keys(Y)),
                      (e.size = Object.keys(Y).length)),
                    se === r.BatchCreationType.RegularBatch ||
                    se === r.BatchCreationType.SelfLabel
                      ? ((e.batchName = ie),
                        (e.launch = (
                          null === E || void 0 === E
                            ? void 0
                            : E.rapidPlugAndPlayType
                        )
                          ? se !== r.BatchCreationType.SelfLabel
                          : Ve),
                        yield u.Z.selfserve.createRegularBatch(e, {
                          idempotencyKey: c.IdempotencyKey.regularBatch,
                        }))
                      : yield u.Z.selfserve.createInstructionBatch(e, {
                          idempotencyKey: c.IdempotencyKey.calibrationBatch,
                        });
                } else We("Project configurations did not get initialized properly. Batch will not be launched. Please try creating another project or contact scale_studio@scale.com for support.");
                Ve && Me(!0),
                  T(!0),
                  $(void 0),
                  z(void 0),
                  k(h.Creation),
                  j(S.Creation),
                  ee(void 0),
                  L(void 0),
                  G(void 0),
                  ae(void 0),
                  oe(void 0),
                  ce(void 0),
                  _e(!1),
                  nt();
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, [se, ie, Y, E, le, Q, K, X, B, Ve, xe]);
        (0, s.useEffect)(() => {
          if (
            (ee(void 0), L(void 0), null === E || void 0 === E ? void 0 : E.id)
          ) {
            const e = (function () {
              var e = P(function* () {
                T(void 0), I(!0);
                const e = (0, N.bd)(E);
                He(e),
                  he(
                    m().zipObject(
                      Object.values(n),
                      new Array(Object.keys(n).length).fill(!1)
                    )
                  );
                const {
                    regularBatchExists: t,
                    calibrationBatchExists: a,
                    selfLabelBatchExists: o,
                    uploadedAssetsExist: s,
                    taskExists: r,
                    useCase: i,
                    instruction: c,
                    isLlmControlCenterProject: l,
                  } = yield u.Z.selfserve.fetchState({ project: E.id }),
                  d = yield u.Z.selfserve.fetchProjectTaxonomy({
                    project: E.id,
                  });
                let p;
                try {
                  p = je
                    ? yield u.Z.selfserve.fetchProjectInstructionsV2({
                        projectId: E.id,
                        project: E.id,
                      })
                    : yield u.Z.selfserve.fetchProjectInstructions({
                        project: E.id,
                      });
                } catch (C) {
                  p = void 0;
                }
                let y = Boolean(t || a || o || r || l);
                e &&
                  (y = Boolean(
                    y ||
                      (null === c || void 0 === c
                        ? void 0
                        : c.instructionObjectId)
                  )),
                  T(y),
                  (0, N.sW)(E) && Ue(!y),
                  U(i),
                  L(s);
                const v = e ? [] : [{ name: S.Summary, status: f.Locked }];
                Re
                  ? E.rapidPlugAndPlayGeneratePrompts
                    ? (W([
                        { name: S.Creation, status: f.Complete },
                        { name: S.Taxonomy, status: f.Incomplete },
                        { name: S.Instruction, status: f.Locked },
                        { name: S.Batch, status: f.Locked },
                        ...v,
                      ]),
                      k(h.Taxonomy),
                      j(S.Taxonomy))
                    : (W([
                        { name: S.Creation, status: f.Complete },
                        { name: S.Data, status: f.Incomplete },
                        { name: S.Taxonomy, status: f.Locked },
                        { name: S.Instruction, status: f.Locked },
                        { name: S.Batch, status: f.Locked },
                        ...v,
                      ]),
                      k(h.DataView),
                      j(S.Data))
                  : (s
                      ? je
                        ? (W([
                            { name: S.Creation, status: f.Complete },
                            { name: S.Data, status: f.Complete },
                            { name: S.ProjectConfig, status: f.Incomplete },
                            { name: S.Taxonomy, status: f.Locked },
                            { name: S.Instruction, status: f.Locked },
                            { name: S.Batch, status: f.Locked },
                            ...v,
                          ]),
                          k(h.ProjectConfig),
                          j(S.ProjectConfig))
                        : (W([
                            { name: S.Creation, status: f.Complete },
                            { name: S.Data, status: f.Complete },
                            { name: S.Task, status: f.Incomplete },
                            { name: S.Batch, status: f.Locked },
                            ...v,
                          ]),
                          k(h.Task),
                          j(S.Task))
                      : W(
                          je
                            ? [
                                { name: S.Creation, status: f.Complete },
                                { name: S.Data, status: f.Incomplete },
                                { name: S.ProjectConfig, status: f.Locked },
                                { name: S.Taxonomy, status: f.Locked },
                                { name: S.Instruction, status: f.Locked },
                                { name: S.Batch, status: f.Locked },
                                ...v,
                              ]
                            : [
                                { name: S.Creation, status: f.Complete },
                                { name: S.Data, status: f.Incomplete },
                                { name: S.Task, status: f.Locked },
                                { name: S.Batch, status: f.Locked },
                                ...v,
                              ]
                        ),
                    je &&
                      ((i || d.taxonomy) &&
                        (W([
                          { name: S.Creation, status: f.Complete },
                          { name: S.Data, status: f.Complete },
                          { name: S.ProjectConfig, status: f.Complete },
                          { name: S.Taxonomy, status: f.Incomplete },
                          { name: S.Instruction, status: f.Locked },
                          { name: S.Batch, status: f.Locked },
                          ...v,
                        ]),
                        ke
                          ? (k(h.DataView), j(S.Data))
                          : (k(h.Taxonomy), j(S.Taxonomy))),
                      (null === p || void 0 === p ? void 0 : p.instruction) &&
                        (W([
                          { name: S.Creation, status: f.Complete },
                          { name: S.Data, status: f.Complete },
                          { name: S.ProjectConfig, status: f.Complete },
                          { name: S.Taxonomy, status: f.Complete },
                          { name: S.Instruction, status: f.Incomplete },
                          { name: S.Batch, status: f.Locked },
                          ...v,
                        ]),
                        k(h.Instruction),
                        j(S.Instruction))));
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
            I(!1), e();
          } else
            "undefined" !==
              typeof (null === E || void 0 === E ? void 0 : E.id) &&
              (T(!1), I(!1));
        }, [null === E || void 0 === E ? void 0 : E.id, je]);
        const ct = (0, s.useCallback)(() => {
          ze((e) => e + 1);
        }, [ze]);
        return (
          (0, s.useEffect)(() => {
            if (E) {
              const e = (function () {
                var e = P(function* () {
                  I(!0);
                  const {
                    pipelineName: e,
                    numReviews: t,
                    consensus: a,
                    requiredLanguage: n,
                    languageExpertise: o,
                    customOcrUrl: s,
                    ocrProvider: i,
                    commonErrors: c,
                    autoRedos: p,
                  } = yield u.Z.selfserve.fetchConfigValues({ project: E.id });
                  de(
                    b(
                      {
                        isAudioTranscription: !!E.isAudioTranscription,
                        containsAdultContent: !!E.containsAdultContent,
                        pipelineName: e || (0, l.av)(E.type),
                        taskerLanguageRequirement: {
                          language: n || d.Languages.English,
                          level: o || r.FluencyLevel.Basic,
                        },
                        numReviews: t,
                        numConsensus: a,
                      },
                      Ve
                        ? {
                            ocrConfig: { customUrl: s, serviceProvider: i },
                            commonErrors: c,
                            autoRedos: p,
                          }
                        : {}
                    )
                  ),
                    I(!1);
                });
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            }
          }, [E, Ye]),
          (0, s.useEffect)(() => {
            me(!!(null === E || void 0 === E ? void 0 : E.useOldOnboarding));
          }, [null === E || void 0 === E ? void 0 : E.useOldOnboarding]),
          (0, s.useEffect)(() => {
            if (E) {
              const e = (function () {
                var e = P(function* () {
                  const { isAttachmentCoveredByHipaa: e } =
                    yield u.Z.selfserve.fetchProjectAttachmentHipaaCoverage({
                      project: E.id,
                    });
                  he((t) => b({}, t, { [n.HIPAA_ATTACHMENTS]: e }));
                });
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              e();
            }
          }, [E]),
          (0, o.jsx)(g.Provider, {
            value: {
              isOnboardingComplete: p,
              setIsOnboardingComplete: T,
              loading: y,
              setLoading: I,
              project: E,
              setProject: O,
              currentView: A,
              setCurrentView: k,
              currentStep: _,
              hasAssets: w,
              setHasAssets: L,
              setCurrentStep: j,
              onboardingSteps: Z,
              setOnboardingSteps: W,
              firstBatchSelectedMap: Y,
              setFirstBatchSelectedMap: z,
              selectionQueryFilter: Q,
              setSelectionQueryFilter: G,
              firstBatchSelectionMethod: K,
              setFirstBatchSelectionMethod: q,
              firstBatchNumTasks: X,
              setFirstBatchNumTasks: $,
              numAssets: J,
              setNumAssets: ee,
              taskCount: te,
              setTaskCount: ae,
              costEstimate: ne,
              setCostEstimate: oe,
              taskType: B,
              setTaskType: R,
              projectUseCase: D,
              setProjectUseCase: U,
              finalizeOnboarding: it,
              nextEnabled: F,
              setNextEnabled: M,
              batchSelected: se,
              setBatchSelected: re,
              batchName: ie,
              setBatchName: ce,
              isSelfLabel: ue,
              projectOptions: le,
              setProjectOptions: de,
              useOldOnboarding: pe,
              setUseOldOnboarding: me,
              sensitiveDataSelections: Te,
              setSensitiveDataSelections: he,
              sensitiveDataQuestionnaireCompleted: Se,
              setSensitiveDataQuestionnaireCompleted: fe,
              useCaseType: ye,
              setUseCaseType: ve,
              footerShown: Ce,
              setFooterShown: Ne,
              stepNext: Ie,
              setStepNext: Pe,
              disabledNextText: Ee,
              setDisabledNextText: be,
              isAttachmentHipaaCovered: xe,
              hipaaCoverageRefresh: ge,
              populatePriceEstimator: Oe,
              setPopulatePriceEstimator: Ae,
              firstTimeTemplate: ke,
              setFirstTimeTemplate: _e,
              useOnboardingV3: je,
              canUsePlugAndPlay: Le,
              usePlugAndPlayOnboarding: Re,
              plugAndPlayV2: Be,
              collapseSidebar: De,
              setCollapseSidebar: Ue,
              templatePipeline: V,
              setTemplatePipeline: H,
              handleExitTour: nt,
              handleEnterTour: ot,
              resetTour: st,
              popperIsOpen: rt,
              tourRef: Ke,
              setTourRef: qe,
              currentTourStep: Xe,
              handleNextTourStep: $e,
              syncTourStep: Je,
              closedTourSteps: at,
              closeTourStep: et,
              closeUpToCurrentView: tt,
              onboardingStudioProject: Ve,
              refreshConfigs: ct,
              showStudioLaunchPage: Fe,
              setShowStudioLaunchPage: Me,
              revertNewAuditUI: Qe,
              setRevertNewAuditUI: Ge,
              launchError: Ze,
            },
            children: t,
          })
        );
      };
      const A = () => (0, s.useContext)(g);
    },
  },
]);
