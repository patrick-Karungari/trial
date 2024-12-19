(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [13181],
  {
    190551: function (e, t, a) {
      "use strict";
      a.d(t, {
        C0: function () {
          return n;
        },
        JO: function () {
          return i;
        },
        Fy: function () {
          return s;
        },
      });
      var o = a(527565);
      const n = async () =>
          await (0, o.ZP)("internal/duplicateAccount/getDupGroupInfo", {
            headers: { "Content-Type": "application/json" },
            method: "GET",
          }),
        i = async () =>
          await (0, o.ZP)("internal/duplicateAccount/routingOverrides", {
            headers: { "Content-Type": "application/json" },
            method: "PUT",
          }),
        s = async (e, t) => {
          const a = {
            body: JSON.stringify({
              maskedSelectedActiveUserId: e,
              intendedDupGroupId: t,
            }),
            headers: { "Content-Type": "application/json" },
            method: "PUT",
          };
          return await (0, o.ZP)("internal/duplicateAccount/chooseDupUser", a);
        };
    },
    70021: function (e, t, a) {
      "use strict";
      a.d(t, {
        K: function () {
          return i;
        },
      });
      var o = a(456552),
        n = a(190551);
      const i = (e) => {
        var t;
        const { data: a, refetch: i } = (0, o.useQuery)(
          [
            "needs-duplicate-accounts-resolution",
            null === e || void 0 === e ? void 0 : e._id,
          ],
          n.JO,
          {
            enabled: !!(null === e || void 0 === e ? void 0 : e._id),
            staleTime: 3e5,
          }
        );
        return {
          duplicateAccountsStatus:
            null !==
              (t = null === a || void 0 === a ? void 0 : a.routingOverride) &&
            void 0 !== t
              ? t
              : null,
          refetchNeedsDuplicateAccountsResolution: i,
        };
      };
    },
    837515: function (e, t, a) {
      "use strict";
      a.d(t, {
        k: function () {
          return f;
        },
        P: function () {
          return g;
        },
      });
      var o = a(824246),
        n = a(722030),
        i = a(416534),
        s = a(827378),
        r = a(527565),
        c = a(713222);
      const l = ({ steps: e, activeStep: t }) => {
        const a = (0, s.useCallback)(
          (e) => (e === t ? "primary" : e < t ? "success" : "neutral"),
          [t]
        );
        return (null === e || void 0 === e ? void 0 : e.length)
          ? (0, o.jsx)("div", {
              className: "scaleui outlier-theme scale-tailwind",
              children: (0, o.jsx)("div", {
                className:
                  "flex sm:flex-row justify-center items-center gap-4 sm:my-12 max-sm:justify-start max-sm:m-8 max-sm:mb-0",
                children: e.map((t, n) =>
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsxs)(
                        "div",
                        {
                          className:
                            "flex flex-row justify-center items-center gap-2",
                          children: [
                            (0, o.jsx)("div", {
                              className: `rounded-full bg-${a(n)}-50`,
                              children: (0, o.jsx)(c.J, {
                                variant: a(n),
                                icon: t.icon,
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              className:
                                "max-md:hidden flex flex-col justify-center items-start gap-1",
                              children: [
                                (0, o.jsx)("div", {
                                  className:
                                    "max-md:hidden text-center text-sm",
                                  children: t.title,
                                }),
                                (0, o.jsx)("div", {
                                  className:
                                    "max-md:hidden text-center text-xs text-neutral-400",
                                  children: t.description,
                                }),
                              ],
                            }),
                          ],
                        },
                        n
                      ),
                      n < e.length - 1 &&
                        (0, o.jsx)("div", {
                          className:
                            "sm:flex flex-col justify-center items-center gap-2 max-sm:hidden",
                          children: (0, o.jsx)("div", {
                            style: { height: 1 },
                            className: "w-4 bg-neutral-900",
                          }),
                        }),
                    ],
                  })
                ),
              }),
            })
          : null;
      };
      var p = a(751387),
        d = a(234334),
        u = a(517215),
        m = a(599789),
        y = a(70021),
        h = a(167469);
      const _ = (e) => {
          if (!e || 0 === e) return "";
          const t = Math.floor(e / 60),
            a = e % 60,
            o = t > 0 ? `${t}h` : "",
            n = a > 0 ? `${a}min` : "";
          return n ? `${o} ${n}` : `${o}`;
        },
        k = (0, s.createContext)({
          data: { qualifications: [] },
          assessmentCourseEstimatedTime: void 0,
          setAssessmentCourseEstimatedTime: () => {},
          nextStep: () => {},
          skipStep: () => {},
          duplicateAccountsStatus: void 0,
          fetchData: async () => {},
        }),
        f = ({
          user: e,
          children: t,
          showNextButton: a = !1,
          showSkipButton: c = !0,
          stepId: f,
          onRedirect: g,
          step: b,
        }) => {
          var j;
          const [w, v] = (0, s.useState)(!1),
            [C, S] = (0, s.useState)(),
            [x, T] = (0, s.useState)(),
            { refetchNeedsDuplicateAccountsResolution: P } = (0, y.K)(e),
            [A, D] = (0, s.useState)(),
            R = (0, s.useCallback)(
              async ({ forceRedirect: e, noLoading: t }) => {
                t || v(!0);
                const {
                    isLastStep: a,
                    nextStep: o,
                    onboardingQualified: n,
                    fetchedData: i,
                  } = await (async () => {
                    const e = await (0, r.ZP)(
                        "/internal/experts/qualification/onboarding",
                        { method: "GET" }
                      ),
                      t = (0, p.gP)(e.qualifications),
                      a = t.find((e) => (0, p.Dj)(e)),
                      o = t.every(
                        (e) => e.status === d.QualificationEntryStatus.Qualified
                      ),
                      n = 1 === t.filter((e) => (0, p.Dj)(e)).length;
                    return {
                      completeData: t,
                      nextStep: a,
                      onboardingQualified: o,
                      fetchedData: e,
                      isLastStep: n,
                    };
                  })(),
                  { data: s } = await P();
                if (
                  (a &&
                    (null === s || void 0 === s ? void 0 : s.routingOverride) &&
                    (null === s || void 0 === s
                      ? void 0
                      : s.routingOverride) !== h.DupGroupRoutingOverride.None &&
                    D(null === s || void 0 === s ? void 0 : s.routingOverride),
                  n || !o)
                )
                  return (
                    await (0, r.ZP)("internal/experts/profiling/complete", {
                      method: "PUT",
                    }),
                    void (0, r.VM)("/expert")
                  );
                S(i),
                  (b && !e) ||
                    (o &&
                      o.path &&
                      (await (null === g || void 0 === g
                        ? void 0
                        : g(o.path)))),
                  v(!1);
              },
              [b, g, P]
            ),
            L = (0, s.useMemo)(() => !!c, [c]),
            I = (0, s.useCallback)(() => {
              R({ forceRedirect: !0 });
            }, [R]),
            B = (0, s.useCallback)(
              (e) => {
                (0, p.mu)(e), I();
              },
              [I]
            );
          if (
            ((0, s.useEffect)(() => {
              C || R({});
            }, [C, R]),
            (0, u.h)(e),
            e ||
              "undefined" === typeof window ||
              window.location.replace("/expert/signup"),
            !b || !C)
          )
            return (0, o.jsx)(n.$, {
              size: "lg",
              className:
                "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
            });
          const O = (0, p.gP)(C.qualifications),
            E = f
              ? O.findIndex((e) => e.id === f)
              : O.findIndex((e) => (0, p.Dj)(e)),
            N = O[E];
          let M = O.map((e) => (0, p.LQ)(e));
          x &&
            (M = M.map((e) =>
              e.id === d.OutlierOnboardingStepsV1.ASSESSMENT
                ? Object.assign(Object.assign({}, e), {
                    description: `${_(x)} estimated time`,
                  })
                : e
            ));
          const U =
            null === (j = null === e || void 0 === e ? void 0 : e.tags) ||
            void 0 === j
              ? void 0
              : j.includes(m.REMOTASKS_OUTLIER_MIGRATED_ACCOUNT);
          return (
            U &&
              (M = M.map((e) =>
                e.id === d.OutlierOnboardingStepsV1.CREATION && U
                  ? Object.assign(Object.assign({}, e), {
                      title: "Confirm Information",
                    })
                  : e
              )),
            (0, o.jsxs)(k.Provider, {
              value: {
                data: C,
                assessmentCourseEstimatedTime: x,
                setAssessmentCourseEstimatedTime: T,
                nextStep: I,
                skipStep: B,
                duplicateAccountsStatus: A,
                fetchData: R,
              },
              children: [
                (0, o.jsx)(l, { steps: M, activeStep: E }),
                w
                  ? (0, o.jsx)(n.$, {
                      size: "lg",
                      className:
                        "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    })
                  : (0, o.jsxs)(o.Fragment, {
                      children: [
                        t &&
                          (0, s.cloneElement)(t, {
                            metadata:
                              null === N || void 0 === N ? void 0 : N.metadata,
                          }),
                        (0, o.jsxs)("div", {
                          className:
                            "flex flex-col items-center gap-2 mt-4 pb-4",
                          children: [
                            a &&
                              (0, o.jsx)(i.zx, {
                                size: "lg",
                                className:
                                  "align-middle w-full max-w-2xl justify-center",
                                onClick: I,
                                children: "Next",
                              }),
                            (null === N || void 0 === N
                              ? void 0
                              : N.skippable) &&
                              L &&
                              (0, o.jsx)(i.zx, {
                                size: "lg",
                                variant: "neutral",
                                className:
                                  "align-middle w-full max-w-xl justify-center",
                                onClick: () =>
                                  B(null === N || void 0 === N ? void 0 : N.id),
                                children: "Not Now",
                              }),
                          ],
                        }),
                      ],
                    }),
              ],
            })
          );
        },
        g = () => (0, s.useContext)(k);
    },
    719646: function (e, t, a) {
      "use strict";
      a.d(t, {
        ze: function () {
          return i;
        },
        zU: function () {
          return r;
        },
        Rc: function () {
          return c;
        },
      });
      var o = a(389401),
        n = a(527565);
      a(234334).QualificationType.ContributorAgreement;
      const i = ({ enabled: e }) =>
          (0, o.a)(
            ["peek-queue"],
            async () =>
              await (0, n.ZP)("/internal/v2/tasks/peek_queue", {
                method: "GET",
              }),
            { enabled: e }
          ),
        s = (e) => {
          var t;
          return (
            !e ||
            0 ===
              (null === (t = e.assignments) || void 0 === t ? void 0 : t.length)
          );
        },
        r = (e) => {
          var t;
          if (!s(e))
            return null ===
              (t = null === e || void 0 === e ? void 0 : e.assignments[0]) ||
              void 0 === t
              ? void 0
              : t.qualificationList;
        },
        c = (e) => {
          const t = r(e);
          return null === t || void 0 === t ? void 0 : t.qualificationListId;
        };
    },
    444832: function (e, t, a) {
      "use strict";
      a.d(t, {
        j: function () {
          return u;
        },
      });
      var o = a(824246),
        n = a(60042),
        i = a.n(n),
        s = a(713222),
        r = a(416534);
      const c = "neutral",
        l = "neutral",
        p = "white",
        d = "white",
        u = ({
          title: e,
          subtitle: t,
          cta: a,
          onClose: n,
          className: u,
          variant: m = c,
          buttonVariant: y = l,
          background: h = p,
          backgroundVariant: _ = d,
        }) =>
          (0, o.jsxs)("div", {
            className: i()(
              "flex items-center justify-between gap-3 w-full transition-colors rounded-lg scaleui text-neutral-900 h-fit overflow-hidden pr-4",
              {
                "bg-neutral-0": "white" === _ || "white" === h,
                "bg-neutral-50": "neutral" === _ || "neutral" === h,
              },
              u
            ),
            children: [
              (0, o.jsxs)("div", {
                className: "relative flex items-center h-full",
                children: [
                  (0, o.jsx)("div", {
                    className: i()("w-1 h-full rounded-l absolute", {
                      "bg-neutral-1000": "neutral" === m,
                      "bg-info-700": "info" === m,
                      "bg-success-500": "success" === m,
                      "bg-warning-500": "warning" === m,
                      "bg-danger-500": "danger" === m,
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className: "ml-3",
                    children: [
                      "neutral" === m &&
                        (0, o.jsx)(s.J, {
                          icon: "info-circle",
                          variant: "neutral",
                        }),
                      "info" === m &&
                        (0, o.jsx)(s.J, { icon: "megaphone", variant: "info" }),
                      "success" === m &&
                        (0, o.jsx)(s.J, {
                          icon: "check-circle",
                          variant: "success",
                        }),
                      "warning" === m &&
                        (0, o.jsx)(s.J, {
                          icon: "exclamation-circle",
                          variant: "warning",
                        }),
                      "danger" === m &&
                        (0, o.jsx)(s.J, {
                          icon: "exclamation-circle",
                          variant: "danger",
                        }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: "py-3 ml-3",
                    children: [
                      (0, o.jsx)("p", {
                        className: "text-sm font-medium",
                        children: e,
                      }),
                      t && "string" === typeof t
                        ? (0, o.jsx)("p", {
                            className: "text-xs font-normal",
                            children: t,
                          })
                        : (0, o.jsx)(o.Fragment, { children: t }),
                      a &&
                        (0, o.jsx)(r.zx, {
                          variant: y,
                          onClick: a.onClick,
                          className:
                            "md:hidden max-md:block truncate max-w-[200px] mt-2",
                          children: a.label,
                        }),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: "flex items-center h-full space-x-2",
                children: [
                  a &&
                    (0, o.jsx)(r.zx, {
                      variant: y,
                      onClick: a.onClick,
                      className:
                        "max-md:hidden md:block truncate max-w-[200px]",
                      children: a.label,
                    }),
                  n &&
                    (0, o.jsx)("button", {
                      onClick: n,
                      className: "border-none",
                      children: (0, o.jsx)(s.J, { icon: "times" }),
                    }),
                ],
              }),
            ],
          });
    },
    952332: function (e, t, a) {
      "use strict";
      a.d(t, {
        M: function () {
          return s;
        },
      });
      var o = a(824246),
        n = a(720227),
        i = a(416534);
      const s = ({
        title: e,
        description: t,
        primaryCTA: a,
        secondaryCTA: s,
        className: r,
      }) =>
        (0, o.jsx)("div", {
          className: (0, n.m)("w-full scaleui", r),
          children: (0, o.jsxs)("div", {
            className: "flex justify-between w-full mb-4",
            children: [
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)("h2", {
                    className: "text-xl font-semibold text-neutral-700",
                    children: e,
                  }),
                  (0, o.jsx)("div", {
                    className: "max-w-2xl mt-1 text-sm text-neutral-500",
                    children: t,
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: "space-x-4",
                children: [
                  s &&
                    (0, o.jsx)(i.zx, {
                      variant: "neutral",
                      size: s.size,
                      onClick: s.onClick,
                      children: s.label,
                    }),
                  a &&
                    (0, o.jsx)(i.zx, {
                      size: a.size,
                      onClick: a.onClick,
                      children: a.label,
                    }),
                ],
              }),
            ],
          }),
        });
    },
    853085: function (e, t, a) {
      "use strict";
      t.cB = t.R2 = t.Ow = t.eE = void 0;
      var o,
        n = a(274374);
      const i = ((o = a(721006)) && o.__esModule ? o : { default: o }).default;
      t.eE = i;
      var s;
      (t.Ow = (e) =>
        e.map(({ name: e, pageTitle: t }) => ({
          name: t,
          type: n.SearchResultType.Tool,
          action: { type: n.SearchResultActionType.Link, path: "dct/" + e },
        }))),
        (t.R2 = s),
        (function (e) {
          (e.LayoutTest = "/layouttest"),
            (e.TasksAudit = "/tasks/audit"),
            (e.Demo = "/demo"),
            (e.GptDemo = "/gpt_demo"),
            (e.TxnDemo = "/txn_demo"),
            (e.GptDemoSearch = "/gpt_demo_search"),
            (e.Embedding = "/embedding"),
            (e.EditScenario = "/edit_scenario"),
            (e.CreateScenario = "/create_scenario"),
            (e.TextCollectionDemo = "/text_collection_demo"),
            (e.MlHilCategorizationDemo = "/ml_hil_categorization_demo"),
            (e.TrendDetectionDemo = "/trend_detection_demo"),
            (e.RobinMLDemo = "/robin_ml_demo"),
            (e.YetiMLDemo = "/yeti_ml_demo"),
            (e.MlTranscriptionDemo = "/ml_transcription_demo"),
            (e.TsModelPlayground = "/ts-model-playground"),
            (e.EntertainmentAI = "/entertainment-ai"),
            (e.LLM = "/llm"),
            (e.GenAIOpsHub = "/genai-ops-hub"),
            (e.GenAIImageDBDashboard = "/genai-imagedb-dashboard"),
            (e.ProjectResponseViewer = "/project_response_viewer"),
            (e.DisputeViewer = "/dispute/:taskId/id/:disputeId/viewer"),
            (e.AudioDemo = "/audio_demo"),
            (e.ProjectsFSSL = "/projects/fssl"),
            (e.CatalogMLDemo = "/catalog_ml_demo"),
            (e.ProjectsTCGWF = "/projects/tc_gwf"),
            (e.MayforceChatDemo = "/mayforce/chat-demo"),
            (e.MayforceExpertManagement = "/mayforce/expert-management"),
            (e.ExpertManagement = "/expert-management"),
            (e.GrowthCenter = "/growth-center"),
            (e.GrowthCenterResumeScreening = "/growth-center/resume-screening"),
            (e.GrowthCenterCommunication = "/growth-center/communication"),
            (e.ChatAdvancedAudit = "/chat/advanced-audit/:id"),
            (e.Screening = "/screening"),
            (e.NiceConfigs = "/nice_configs"),
            (e.NiceConfigsProject = "/nice_configs/project/:id"),
            (e.NiceConfigsTaskType = "/nice_configs/taskType/:taskType"),
            (e.NiceConfigsTaskCustomer = "/nice_configs/taskCustomer/:id"),
            (e.NiceConfigsTaskCustomerAndType =
              "/nice_configs/taskCustomerAndType/:id/:taskType"),
            (e.GlobalMapViewer = "/global_map_viewer"),
            (e.GlobalMapQuickEditor = "/global_map_quick_editor"),
            (e.Root = "/"),
            (e.Lookup = "/lookup/:id+"),
            (e.Scripts = "/scripts"),
            (e.Subtasks = "/subtasks/:id?"),
            (e.V3Tasks = "/v3tasks/:id?"),
            (e.V3Traits = "/v3traits"),
            (e.Tasks = "/tasks/:id?"),
            (e.Script = "/script/:id"),
            (e.DynamicCorp = "/dynamic_corp"),
            (e.DCT = "/dct/:name"),
            (e.Search = "/search"),
            (e.CompareAttempts = "/compare_attempts"),
            (e.EngTransformS3Url = "/eng/transform_s3_url"),
            (e.EngRandomConfigs = "/eng/random_configs/:name?"),
            (e.TaskActions = "/task_actions"),
            (e.PipelineStageActions = "/pipeline_stage_actions"),
            (e.UserActions = "/user_actions"),
            (e.BatchActions = "/batch_actions"),
            (e.ScalersNew = "/scalers/new"),
            (e.FraudDeprecated = "/fraud"),
            (e.Enforcement = "/enforcement"),
            (e.ScalersEmail = "/scalers/email"),
            (e.QuestersEmail = "/questers/email"),
            (e.ScalersAudit = "/scalers/:id/audit"),
            (e.ScalersNewProject = "/scalers/new_project"),
            (e.ScalersProject = "/scalers/project"),
            (e.ScalersAnnouncements = "/scalers/announcements"),
            (e.ScalersSlackChannels = "/scalers/slack_channels"),
            (e.ScalersLabelAssistant = "/scalers/label_assistant"),
            (e.ScalersHubstaffPortal = "/scalers/hubstaff_portal"),
            (e.ScalersQualifications = "/scalers/qualifications"),
            (e.ScalersTest = "/scalers/test"),
            (e.ScalersRecording = "/scalers/recording/:recordingId"),
            (e.ScalersRecordingBase = "/scalers/recording"),
            (e.TaskTypeManager = "/task_type_manager"),
            (e.Rapid = "/rapid"),
            (e.SLA = "/sla"),
            (e.SLASim = "/slasim"),
            (e.StatsBatch = "/stats/batch"),
            (e.StatsTaskerConfidenceStats = "/stats/tasker_confidence_stats"),
            (e.StatsReviewerConfidenceStats =
              "/stats/reviewer_confidence_stats"),
            (e.BPONeedsCorp = "/bpo/needs_corp"),
            (e.BPORecallTasks = "/bpo/recall_tasks"),
            (e.BPODemoteScalers = "/bpo/demote_scalers"),
            (e.BPOMassPermissioning = "/bpo/mass_permissioning"),
            (e.ProjectsMetrics = "/projects/metrics"),
            (e.ProjectsLabelHints = "/projects/label_hints"),
            (e.ProjectsBenchmarks = "/projects/benchmarks"),
            (e.ProjectsBulkTagBenchmarks = "/projects/bulk_tag_benchmarks"),
            (e.ProjectsImbeBulkTagBenchmarks =
              "/projects/imbe_bulk_tag_benchmarks"),
            (e.ProjectsBillingStructure = "/billing/billing_version_bulk_tool"),
            (e.AHTDampener = "/billing/aht_dampener"),
            (e.ProjectsCategorizationHints = "/projects/categorization_hints"),
            (e.ProjectsCategorizationThresholds =
              "/projects/categorization_thresholds"),
            (e.ProjectsBulkCreateBenchmarks =
              "/projects/bulk_create_benchmarks"),
            (e.ProjectsQuickLintersNew =
              "/projects/:projectId/quick_linters/new"),
            (e.ProjectsQuickLintersEdit =
              "/projects/:projectId/quick_linters/:quickLinterId/edit"),
            (e.BenchmarksCreateParameterized =
              "/benchmarks/create_parameterized"),
            (e.BenchmarksRecommend = "/benchmarks/recommend"),
            (e.BenchmarksParameterize = "/benchmarks/parameterize"),
            (e.Courses = "/courses"),
            (e.GenAICourses = "/courses/genai"),
            (e.CoursesWithId = "/courses/:courseId"),
            (e.ProjectRolesAuth = "/project_roles_auth"),
            (e.MyApprovals = "/my_approvals"),
            (e.BenchmarkAuditOperation = "/benchmark_audit_operation"),
            (e.BenchmarkAuditOperationNew = "/benchmark_audit_operation/new"),
            (e.StaffingExceptionRequests = "/staffing_exception_requests"),
            (e.StaffingAuthorizations = "/staffing_authorizations"),
            (e.RemedialCourses = "/remedial_courses"),
            (e.BacktestPay = "/backtest_pay"),
            (e.ConsentForms = "/consent_forms"),
            (e.AutoflagDashboard = "/autoflag_dashboard"),
            (e.Geocontext = "/geocontext"),
            (e.SpeedViewAudits = "/speed_view_audits"),
            (e.SpeedViewCustomerAudits = "/speed_view_customer_audits"),
            (e.CourseUtils = "/course_utils"),
            (e.Permissions = "/permissions"),
            (e.AddCorpUser = "/add_corp_user"),
            (e.AssignBenchmark = "/assign_benchmark"),
            (e.IncreasePriority = "/increase_priority"),
            (e.QueuePriority = "/queue_priority"),
            (e.UpdateInstructions = "/update_instructions"),
            (e.ScaleLabsNew = "/scale_labs/new"),
            (e.ScaleLabsMonitor = "/scale_labs/monitor"),
            (e.ScaleLabs = "/scale_labs"),
            (e.LidarLabs = "/lidar_labs"),
            (e.ExperimentResults = "/experiment_results/:experimentId"),
            (e.AutogenerateScenario = "/autogenerate_scenario"),
            (e.InstructionTaxonomies = "/instruction_taxonomies"),
            (e.Bonuses = "/bonuses"),
            (e.BenchmarkAudit = "/benchmark_audit"),
            (e.UploadFilesToS3 = "/upload_files_to_s3"),
            (e.V2UploadFilesToS3 = "/v2/upload_files_to_s3"),
            (e.UnexcludeWorkers = "/unexclude_workers"),
            (e.TuneResponseLinters = "/tune_response_linters/:corpjobid"),
            (e.TuneResponseLintersBase = "/tune_response_linters"),
            (e.Tune2DLinting = "/tune_2d_linting"),
            (e.CustomerDashboard = "/customer_dashboard"),
            (e.DragonfruitUtils = "/dragonfruit_utils"),
            (e.CherryCatalogUtils = "/cherry_catalog_utils"),
            (e.MelonAudioUtils = "/melon_audio_utils"),
            (e.ImbeUtils = "/imbe_utils"),
            (e.CherryInfUtils = "/cherry_inf_utils"),
            (e.BeeTTSUtils = "/bee_tts_utils"),
            (e.BeeRLHFUtils = "/bee_rlhf_utils"),
            (e.BulbaGenericProject = "/ops/bulba_generic_project"),
            (e.EsciUtils = "/esci_utils"),
            (e.FlamingoFairUtils = "/flamingo_fair_utils"),
            (e.RoadrunnerUtils = "/roadrunner_utils"),
            (e.BulbasaurUtils = "/bulbasaur_utils"),
            (e.OTSUtils = "/ots_utils"),
            (e.OTSUtilsV2 = "/ots_utils_v2"),
            (e.SensitiveContentUtils = "/sensitive_content_utils"),
            (e.TaskerLeaderboard = "/tasker-leaderboard"),
            (e.MiniLidarAssignment = "/mini_lidar_assignment"),
            (e.UnassignBotClaims = "/unassign_bot_claims"),
            (e.Undisable = "/undisable"),
            (e.Scenarios = "/scenarios"),
            (e.SmeAudit = "/sme_audit"),
            (e.SmeAuditBatch = "/sme_audit/:auditBatchId"),
            (e.SpeedAudit = "/speed_audit"),
            (e.SpeedAuditBatch = "/speed_audit/:auditBatchId"),
            (e.V2SpeedAudit = "/v2/speed_audit"),
            (e.V2SpeedAuditBatch = "/v2/speed_audit/:auditBatchId"),
            (e.GISJSONQuickEditor = "/gis_json_quick_editor"),
            (e.OpsUtils = "/ops_utils"),
            (e.SubtaskTaskIDConversion = "/ops_utils"),
            (e.EmailToTaskerIDConversion = "/ops_utils"),
            (e.ProxyFetch = "/proxy_fetch"),
            (e.QAHub = "/qa_hub"),
            (e.QualityLab = "/quality_lab"),
            (e.DolphinQA = "/dolphin_qa"),
            (e.Rewards = "/rewards"),
            (e.Tasks2D = "/2d_tasks"),
            (e.CatConsensusTweaker = "/cat_consensus_tweaker"),
            (e.ResponseLintersInfo = "/response_linters_info"),
            (e.Linting2D = "/2d_linting"),
            (e.LidarLinting = "/lidarlinting"),
            (e.LidarLiteLinting = "/lidarlitelinting"),
            (e.LinterConfigDocs = "/linter_config_docs"),
            (e.DisputeTaskIdDisputeId = "/dispute/:taskId/id/:disputeId"),
            (e.DisputeTask = "/dispute/:taskId"),
            (e.ScenarioDash = "/scenario_dash"),
            (e.SupplyLeverDash = "/supply_lever_dash"),
            (e.QIRSignal = "/qir_signal"),
            (e.SupplyProjectMetricDash = "/supply_project_metric_dash"),
            (e.EditCorpPermissionRoles = "/edit_corp_permission_roles"),
            (e.ContractsContractEditor = "/contracts/contract_editor"),
            (e.ContractsListContracts = "/contracts/list_contracts"),
            (e.SnowflakeStatus = "/snowflake_status"),
            (e.NERViewAuditErrors = "/ner/view_audit_errors"),
            (e.CustomersAudit = "/customers/:id/audit"),
            (e.DemosPipelineViewer = "/demos/pipeline_viewer"),
            (e.Explain = "/explain"),
            (e.TaskerJourney = "/tasker_journey"),
            (e.LidarTasks = "/lidartasks"),
            (e.LegoLidarTasks = "/legoLidarTasks"),
            (e.TeamTeamId = "/team/:teamId"),
            (e.TeamsId = "/teams/:id"),
            (e.Teams = "/teams"),
            (e.QM = "/qm"),
            (e.QMWorkflow = "/qm_workflow"),
            (e.DocMetrics = "/docmetrics"),
            (e.Jobs = "/jobs"),
            (e.ForgeWaitList = "/forge_wait_list"),
            (e.ForgeConfigs = "/forge_configs"),
            (e.MiniLidarCreateSubprojects = "/minilidar_create_subprojects"),
            (e.GuidedWorkflowsEdit = "/guided_workflows/edit"),
            (e.GuidedWorkflowsId = "/guided_workflows/:guidedWorkflowId"),
            (e.GuidedWorkflows = "/guided_workflows"),
            (e.QueueHealthReporting = "/queue_health_reporting"),
            (e.DailyPlanningProjectGroupId =
              "/daily_planning/:projectGroupId([0-9a-fA-F]{24})"),
            (e.DailyPlanning = "/daily_planning"),
            (e.ProjectGroups = "/project_groups"),
            (e.ProjectGroupProjectGroupId =
              "/project_group/:projectGroupId([0-9a-fA-F]{24})"),
            (e.ProjectGroup = "/project_group"),
            (e.ProjectCollections = "/project_collections"),
            (e.ProjectCollection =
              "/project_collection/:projectCollectionId([0-9a-fA-F]{24})"),
            (e.ProjectCollectionBase = "/project_collection"),
            (e.QATeamsTeamId = "/qateams/:teamId"),
            (e.PayoutJobs = "/payout_jobs"),
            (e.PDPQADashboard = "/pdp_qa_dashboard"),
            (e.GISTaskPipelineTool = "/gis_task_pipeline_tool"),
            (e.OntologyId = "/ontology/:id"),
            (e.LidarVizDash = "/lidar_viz_dash"),
            (e.ProductionMonitoring = "/production_monitoring"),
            (e.BulkActionBatches = "/bulk_action_batches"),
            (e.BulkProjectConfigs = "/bulk_project_configs"),
            (e.QARProjectId = "/QAR/:projectId?"),
            (e.QARSettings = "/QAR_settings"),
            (e.Hello = "/hello"),
            (e.GPTSQL = "/gptsql"),
            (e.ActivityTracker = "/activity_tracker"),
            (e.SignupFlowLinkId = "/signup-flow/:linkId?"),
            (e.ReviewWorkLog = "/review/work-log"),
            (e.ReviewProjectBilling = "/review/projects"),
            (e.ReviewActionId = "/review/:actionId?"),
            (e.ProgressBarDemo = "/progress_bar_demo"),
            (e.RuleEngine = "/rule_engine"),
            (e.PipelineSpecialActions = "/pipeline_special_actions"),
            (e.CopyLintersFromMultipleProjects =
              "/copy-linters-from-multiple-projects"),
            (e.SupportTicketProjectId = "/support_ticket/:projectId?"),
            (e.SupportTicketDetailTicketId =
              "/support_ticket_detail/:ticketId"),
            (e.CatalogTaxonomyTool = "/catalog_taxonomy_tool"),
            (e.OnboardingRequirementId =
              "/onboarding_requirement/:requirementId"),
            (e.OnboardingRequirementBase = "/onboarding_requirement/"),
            (e.OnboardingStageScreenId =
              "/onboarding_stage_screen/:stageScreenId"),
            (e.OnboardingStageScreenBase = "/onboarding_stage_screen/"),
            (e.OnboardingProjectStagesId =
              "/onboarding_project_stages/:projectStagesId"),
            (e.OnboardingProjectStages = "/onboarding_project_stages"),
            (e.LaunchEndpoints = "/launch/endpoints"),
            (e.BulbaBugEditor = "/bulba_bug_editor"),
            (e.BulbaBugs = "/bulba_bugs"),
            (e.BulbaQuestionTypeProjectMapping =
              "/bulba_question_type_project_mapping/:questionType"),
            (e.BulbaQuestionTypeProjectMappingBase =
              "/bulba_question_type_project_mapping"),
            (e.BulbaWorkerRecordUpload = "/bulba_worker_record_upload"),
            (e.AudienceNew = "/audience/new"),
            (e.AudienceAudienceId = "/audience/:audienceId"),
            (e.Audience = "/audience"),
            (e.NucleusProjectSync = "/nucleus_project_sync"),
            (e.MissionConfigNew = "/mission-config/new"),
            (e.MissionConfigConfigId = "/mission-config/:configId"),
            (e.MissionConfig = "/mission-config"),
            (e.PayStrataPermissions = "/pay-strata-permissions"),
            (e.CreateExperiment = "/experiments-platform/create_experiment"),
            (e.ViewExperiments = "/experiments-platform/view_experiments"),
            (e.MinimumWages = "/minimum-wages"),
            (e.PayTraits = "/pay-traits"),
            (e.PayTraitId = "/pay-trait/:payTraitId"),
            (e.ProjectPayTraits = "/project-pay-traits"),
            (e.WorkerPayStrata = "/worker-pay-strata"),
            (e.ProjectStrata = "/project-strata"),
            (e.PayBuckets = "/pay-buckets"),
            (e.PayBucketId = "/pay-bucket/:payBucketId"),
            (e.PayConfigs = "/pay-configs"),
            (e.LookupId = "/lookup/:id"),
            (e.TeamId = "/team/:id"),
            (e.SFURedoRecall = "/sfu_redo_recall"),
            (e.SFUTaskTracker = "/sfu_task_tracker/:id?"),
            (e.SFUSubstages = "/substages/:id"),
            (e.WorkerSkillManager = "/worker_skill_manager"),
            (e.WorkerTeamsManager = "/worker_teams_manager"),
            (e.ResumeScreening = "/resume_screening_jobs"),
            (e.ResumeCourseScreening = "/resume_screening_course_configs"),
            (e.ChatBulkAudit = "/chat_bulk_audit/:auditBatchId"),
            (e.ChatBulkAuditResults = "/chat_bulk_audit/:auditBatchId/results"),
            (e.SendEmailTemplate = "/send_email_template"),
            (e.Mist = "/mist"),
            (e.VoiceOfTheContributor = "/voice-of-the-contributor"),
            (e.MultistageTask = "/multistage/task/:id"),
            (e.MultistageProject = "/multistage/project/:id"),
            (e.MultistageStageInstance = "/multistage/stage-instance/:id"),
            (e.MAXREV = "/billing/maxrev"),
            (e.AcceptanceBilling = "/billing-hub/batch-acceptance"),
            (e.MagicBenchmarks = "/magic_benchmarks"),
            (e.RevenueGroupsDashboard = "/billing/revenue-groups"),
            (e.ProcessSuperVisionStepSplitter =
              "/process_supervision_step_splitter"),
            (e.StagedRollout = "/staged_rollout");
        })(s || (t.R2 = s = {}));
      const r = {
        [s.MissionConfigNew]: "Create A New Mission Config",
        [s.AudienceNew]: "Create A New Audience",
      };
      t.cB = r;
    },
    274374: function (e, t) {
      "use strict";
      var a, o, n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.APISearchResultCategory =
          t.SearchResultActionType =
          t.SearchResultType =
            void 0),
        (t.SearchResultType = a),
        (function (e) {
          (e.Tool = "tool"),
            (e.CorpSearch = "corp_search"),
            (e.CorpLookup = "corp_lookup"),
            (e.Project = "project"),
            (e.Tasker = "tasker"),
            (e.Customer = "customer"),
            (e.Course = "course"),
            (e.Team = "team"),
            (e.CDSUrl = "cds_url"),
            (e.ProjectGroup = "project_group"),
            (e.Page = "page");
        })(a || (t.SearchResultType = a = {})),
        (t.SearchResultActionType = o),
        (function (e) {
          (e.CorpSearch = "corp_search"),
            (e.CorpLookup = "corp_lookup"),
            (e.Link = "link");
        })(o || (t.SearchResultActionType = o = {})),
        (t.APISearchResultCategory = n),
        (function (e) {
          (e.WorkerTeam = "Worker Team"),
            (e.Customer = "Customer"),
            (e.Tag = "Tag"),
            (e.PermissionGroup = "Permission Group"),
            (e.Course = "Course"),
            (e.Tasker = "Tasker"),
            (e.Expert = "Expert"),
            (e.Project = "Project"),
            (e.CDSUrl = "CDS URL"),
            (e.ProjectGroup = "Project Group");
        })(n || (t.APISearchResultCategory = n = {}));
    },
    636012: function (e, t, a) {
      "use strict";
      var o = a(893185),
        n = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var a,
          i,
          s,
          r,
          c,
          l,
          p = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((s = o()),
            (r = document.createRange()),
            (c = document.getSelection()),
            ((l = document.createElement("span")).textContent = e),
            (l.style.all = "unset"),
            (l.style.position = "fixed"),
            (l.style.top = 0),
            (l.style.clip = "rect(0, 0, 0, 0)"),
            (l.style.whiteSpace = "pre"),
            (l.style.webkitUserSelect = "text"),
            (l.style.MozUserSelect = "text"),
            (l.style.msUserSelect = "text"),
            (l.style.userSelect = "text"),
            l.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if (
                  (o.preventDefault(), "undefined" === typeof o.clipboardData)
                ) {
                  a && console.warn("unable to use e.clipboardData"),
                    a && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = n[t.format] || n.default;
                  window.clipboardData.setData(i, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(l),
            r.selectNodeContents(l),
            c.addRange(r),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          p = !0;
        } catch (d) {
          a && console.error("unable to copy using execCommand: ", d),
            a && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (p = !0);
          } catch (d) {
            a && console.error("unable to copy using clipboardData: ", d),
              a && console.error("falling back to prompt"),
              (i = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(r)
              : c.removeAllRanges()),
            l && document.body.removeChild(l),
            s();
        }
        return p;
      };
    },
    244218: function (e, t, a) {
      "use strict";
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n = r(a(827378)),
        i = r(a(636012)),
        s = ["text", "onCopy", "options", "children"];
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, o);
        }
        return a;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(a), !0).forEach(function (t) {
                f(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : c(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function p(e, t) {
        if (null == e) return {};
        var a,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var a,
              o,
              n = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (a = i[o]), t.indexOf(a) >= 0 || (n[a] = e[a]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (a = i[o]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (n[a] = e[a]));
        }
        return n;
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function u(e, t) {
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            o = k(e);
          if (t) {
            var n = k(this).constructor;
            a = Reflect.construct(o, arguments, n);
          } else a = o.apply(this, arguments);
          return h(this, a);
        };
      }
      function h(e, t) {
        if (t && ("object" === o(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return _(e);
      }
      function _(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function k(e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          k(e)
        );
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
      var g = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && m(e, t);
        })(c, e);
        var t,
          a,
          o,
          r = y(c);
        function c() {
          var e;
          d(this, c);
          for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
            a[o] = arguments[o];
          return (
            f(
              _((e = r.call.apply(r, [this].concat(a)))),
              "onClick",
              function (t) {
                var a = e.props,
                  o = a.text,
                  s = a.onCopy,
                  r = a.children,
                  c = a.options,
                  l = n.default.Children.only(r),
                  p = (0, i.default)(o, c);
                s && s(o, p),
                  l &&
                    l.props &&
                    "function" === typeof l.props.onClick &&
                    l.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (t = c),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  a = p(e, s),
                  o = n.default.Children.only(t);
                return n.default.cloneElement(
                  o,
                  l(l({}, a), {}, { onClick: this.onClick })
                );
              },
            },
          ]) && u(t.prototype, a),
          o && u(t, o),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          c
        );
      })(n.default.PureComponent);
      (t.CopyToClipboard = g),
        f(g, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    524306: function (e, t, a) {
      "use strict";
      var o = a(244218).CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    893185: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, a = [], o = 0;
          o < e.rangeCount;
          o++
        )
          a.push(e.getRangeAt(o));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                a.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    721006: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"action":{"type":"link","path":"layouttest"},"name":"Layouttest","type":"tool"},{"action":{"type":"link","path":"tasks/audit"},"name":"Tasks Audit","type":"tool"},{"action":{"type":"link","path":"demo"},"name":"Demos","description":"Play around with different task types.","type":"demo"},{"action":{"type":"link","path":"mayForce/chat-demo"},"name":"Chat Task Demo","description":"Play around with Chat Task capabilities.","type":"demo"},{"action":{"type":"link","path":"gpt_demo"},"name":"Relevance Pipeline Demo (GPT-3)","description":"Shows off our unique human & ML pipeline, powered by GPT-3.","type":"demo"},{"action":{"type":"link","path":"txn_demo"},"name":"Txn Demo","type":"tool"},{"action":{"type":"link","path":"gpt_demo_search"},"name":"Search Relevance Demo (GPT-3)","description":"A fancy search relevance demo, powered by GPT-3.","type":"demo"},{"action":{"type":"link","path":"embedding"},"name":"Embedding","type":"tool"},{"action":{"type":"link","path":"edit_scenario"},"name":"Edit Scenario","type":"tool"},{"action":{"type":"link","path":"create_scenario"},"name":"Create Scenario","type":"tool"},{"action":{"type":"link","path":"text_collection_demo"},"name":"Text Collection Demo","type":"tool"},{"action":{"type":"link","path":"ml_hil_categorization_demo"},"name":"Ml Hil Categorization Demo","type":"tool"},{"action":{"type":"link","path":"project_response_viewer"},"name":"Project Response Viewer","type":"tool"},{"action":{"type":"link","path":"audio_demo"},"name":"Audio Demo","type":"tool"},{"action":{"type":"link","path":"projects/fssl"},"name":"Projects Fssl","type":"tool"},{"action":{"type":"link","path":"catalog_ml_demo"},"name":"Catalog Ml Demo","type":"tool"},{"action":{"type":"link","path":"projects/tc_gwf"},"name":"Projects Tc Gwf","type":"tool"},{"action":{"type":"link","path":""},"name":"","type":"tool"},{"action":{"type":"link","path":"scripts"},"name":"Scripts","type":"tool"},{"action":{"type":"link","path":"dynamic_corp"},"name":"Dynamic Corp","type":"tool"},{"action":{"type":"link","path":"search"},"name":"Search","type":"tool"},{"action":{"type":"link","path":"compare_attempts"},"name":"Compare Attempts","type":"tool"},{"action":{"type":"link","path":"eng/transform_s3_url"},"name":"Transform S3 URL","description":"From S3 to Cloudfront URL, which can be accessed without explicit AWS credentials.","type":"tool"},{"action":{"type":"link","path":"eng/random_configs"},"name":"Eng Random Configs","type":"tool"},{"action":{"type":"link","path":"task_actions"},"name":"Task Actions","type":"tool"},{"action":{"type":"link","path":"pipeline_stage_actions"},"name":"Pipeline Stage Actions","type":"tool"},{"action":{"type":"link","path":"user_actions"},"name":"User Actions","type":"tool"},{"action":{"type":"link","path":"batch_actions"},"name":"Batch Actions","type":"tool"},{"action":{"type":"link","path":"scalers/new"},"name":"Create Tasker","description":"Create a new tasker woo!","type":"tool"},{"action":{"type":"link","path":"scalers/email"},"name":"Email Taskers","description":"Blast an email to taskers (with filtering criteria).","type":"tool"},{"action":{"type":"link","path":"questers/email"},"name":"Email Questers","description":"Blast an email to questers (with filtering criteria).","type":"tool"},{"action":{"type":"link","path":"scalers/new_project"},"name":"Create New Project","type":"tool"},{"action":{"type":"link","path":"scalers/announcements"},"name":"Announcements","description":"Create an announcement that will show up in tasker\'s dashboard.","type":"tool"},{"action":{"type":"link","path":"scalers/referrals"},"name":"Add Referral","description":"Add a referral object between two taskers.","type":"tool"},{"action":{"type":"link","path":"scalers/recording"},"name":"Scalers Recording","type":"tool"},{"action":{"type":"link","path":"task_type_manager"},"name":"Task Type Configs","description":"Configure properties for a specific task type (e.g. levels of review, payouts).","type":"tool"},{"action":{"type":"link","path":"rapid/rapidometer"},"name":"Rapidometer","description":"Rapidometer overview and configuration page","type":"tool"},{"action":{"type":"link","path":"rapid/quality-dashboard"},"name":"Rapid Quality Dashboard","description":"Rapid quality dashboard","type":"tool"},{"action":{"type":"link","path":"rapid/rapidvideostitchingtools"},"name":"Rapid Video Stitching Tools","description":"Rapid-specific tools for video stitching","type":"tool"},{"action":{"type":"link","path":"rapid"},"name":"Rapid","type":"tool"},{"action":{"type":"link","path":"sla"},"name":"Sla","type":"tool"},{"action":{"type":"link","path":"slasim"},"name":"Slasim","type":"tool"},{"action":{"type":"link","path":"stats/batch"},"name":"Stats Batch","type":"tool"},{"action":{"type":"link","path":"stats/tasker_confidence_stats"},"name":"Stats Tasker Confidence Stats","type":"tool"},{"action":{"type":"link","path":"stats/reviewer_confidence_stats"},"name":"Stats Reviewer Confidence Stats","type":"tool"},{"action":{"type":"link","path":"bpo/needs_corp"},"name":"Needs Corp","description":"Tools for tasks in needs corp (aka L10 review). Can also quarantine tasks.","type":"tool"},{"action":{"type":"link","path":"bpo/recall_tasks"},"name":"Recall Tasks","description":"Recall a list of completed subtasks into review mode or subtask state.","type":"tool"},{"action":{"type":"link","path":"bpo/recall_tasks_V3"},"name":"Recall Tasks V3","description":"Recall a list of completed tasks into review mode or task state V3.","type":"tool"},{"action":{"type":"link","path":"bpo/demote_scalers"},"name":"Bpo Demote Scalers","type":"tool"},{"action":{"type":"link","path":"bpo/mass_permissioning"},"name":"BPO Permissions","description":"A page to take actions on scalers, and specifically for an entire BPO.","type":"tool"},{"action":{"type":"link","path":"projects/metrics"},"name":"Project Metrics","description":"Quickly view and compare project success metrics and understand current state.","type":"tool"},{"action":{"type":"link","path":"projects/label_hints"},"name":"Projects Label Hints","type":"tool"},{"action":{"type":"link","path":"projects/benchmarks"},"name":"Projects Benchmarks","type":"tool"},{"action":{"type":"link","path":"projects/bulk_tag_benchmarks"},"name":"Projects Bulk Tag Benchmarks","type":"tool"},{"action":{"type":"link","path":"projects/imbe_bulk_tag_benchmarks"},"name":"Imbe Bulk Tag Benchmarks","type":"tool"},{"action":{"type":"link","path":"projects/flamingo_actions"},"name":"Projects Flamingo Actions","type":"tool"},{"action":{"type":"link","path":"projects/categorization_hints"},"name":"Projects Categorization Hints","type":"tool"},{"action":{"type":"link","path":"projects/categorization_thresholds"},"name":"Projects Categorization Thresholds","type":"tool"},{"action":{"type":"link","path":"projects/bulk_create_benchmarks"},"name":"Projects Bulk Create Benchmarks","type":"tool"},{"action":{"type":"link","path":"benchmarks/create_parameterized"},"name":"Benchmarks Create Parameterized","type":"tool"},{"action":{"type":"link","path":"benchmarks/recommend"},"name":"Benchmarks Recommend","type":"tool"},{"action":{"type":"link","path":"benchmarks/parameterize"},"name":"Benchmarks Parameterize","type":"tool"},{"action":{"type":"link","path":"courses"},"name":"Training Courses","description":"A list of courses, and the ability to activate/deactivate or add a course.","type":"tool"},{"action":{"type":"link","path":"remedial_courses"},"name":"Remedial Courses","type":"tool"},{"action":{"type":"link","path":"backtest_pay"},"name":"Backtest Pay","type":"tool"},{"action":{"type":"link","path":"geocontext"},"name":"Geocontext","type":"tool"},{"action":{"type":"link","path":"speed_view_audits"},"name":"Speed View Audits","type":"tool"},{"action":{"type":"link","path":"course_utils"},"name":"Course Utils","description":"Search for (2D single-frame & semseg) subtasks that contain a specific label.","type":"tool"},{"action":{"type":"link","path":"permissions"},"name":"Permissions","type":"tool"},{"action":{"type":"link","path":"add_corp_user"},"name":"Add Corp User","type":"tool"},{"action":{"type":"link","path":"assign_benchmark"},"name":"Assign Benchmark","type":"tool"},{"action":{"type":"link","path":"increase_priority"},"name":"Increase Queue Priortiy","description":"Increase the priority of a batch of subtasks.","type":"tool"},{"action":{"type":"link","path":"queue_priority"},"name":"Queue Priority","type":"tool"},{"action":{"type":"link","path":"update_instructions"},"name":"Update instructions","description":"Specifically for projects where instructions are set at the task level.","type":"tool"},{"action":{"type":"link","path":"lidar_labs/new"},"name":"Lidar Labs New","type":"tool"},{"action":{"type":"link","path":"lidar_labs/monitor"},"name":"Lidar Labs Monitor","type":"tool"},{"action":{"type":"link","path":"lidar_labs"},"name":"Lidar Labs","type":"tool"},{"action":{"type":"link","path":"instruction_taxonomies"},"name":"Instruction Taxonomies","type":"tool"},{"action":{"type":"link","path":"bonuses"},"name":"Bonuses","type":"tool"},{"action":{"type":"link","path":"benchmark_audit"},"name":"Benchmark Audit","type":"tool"},{"action":{"type":"link","path":"upload_files_to_s3"},"name":"Upload Files To S3","type":"tool"},{"action":{"type":"link","path":"v2/upload_files_to_s3"},"name":"V2 Upload Files To S3","type":"tool"},{"action":{"type":"link","path":"unexclude_workers"},"name":"Unexclude Workers","type":"tool"},{"action":{"type":"link","path":"tune_2d_linting"},"name":"Tune 2d Linting","type":"tool"},{"action":{"type":"link","path":"trainee_assignments"},"name":"Trainees","description":"","type":"tool"},{"action":{"type":"link","path":"customer_dashboard"},"name":"Customer Dashboard","type":"tool"},{"action":{"type":"link","path":"dragonfruit_utils"},"name":"Dragonfruit Utils","type":"tool"},{"action":{"type":"link","path":"cherry_catalog_utils"},"name":"Cherry Catalog Utils","type":"tool"},{"action":{"type":"link","path":"melon_audio_utils"},"name":"Melon Audio Utils","type":"tool"},{"action":{"type":"link","path":"imbe_utils"},"name":"Imbe Utils","type":"tool"},{"action":{"type":"link","path":"cherry_inf_utils"},"name":"Cherry Inf Utils","type":"tool"},{"action":{"type":"link","path":"bee_tts_utils"},"name":"Bee TTS Utils","type":"tool"},{"action":{"type":"link","path":"bee_rlhf_utils"},"name":"Bee RLHF Utils","type":"tool"},{"action":{"type":"link","path":"ops/bulba_generic_project"},"name":"Bulba Generic Project","type":"tool"},{"action":{"type":"link","path":"tasker-leaderboard"},"name":"Tasker-leaderboard","type":"tool"},{"action":{"type":"link","path":"mini_lidar_assignment"},"name":"Mini Lidar Assignment","type":"tool"},{"action":{"type":"link","path":"ner/view_audit_errors"},"name":"Ner View Audit Errors","type":"tool"},{"action":{"type":"link","path":"unassign_bot_claims"},"name":"Unassign Bot Claims","type":"tool"},{"action":{"type":"link","path":"undisable"},"name":"Undisable Tasker","description":"Re-enable a tasker who got disabled because of poor attempts.","type":"tool"},{"action":{"type":"link","path":"scenarios"},"name":"Scenarios","description":"Links to scenarios on remotasks, and the ability to convert to benchmarks.","type":"tool"},{"action":{"type":"link","path":"speed_audit"},"name":"Speed Audit","type":"tool"},{"action":{"type":"link","path":"ops_utils"},"name":"Ops Utils","description":"","type":"tool"},{"action":{"type":"link","path":"proxy_fetch"},"name":"Proxy Fetch","type":"tool"},{"action":{"type":"link","path":"qa_hub"},"name":"Qa Hub","type":"tool"},{"action":{"type":"link","path":"quality_lab"},"name":"Quality Lab","type":"tool"},{"action":{"type":"link","path":"rewards"},"name":"Add Reward","description":"Add reward objects for a tasker.","type":"tool"},{"action":{"type":"link","path":"2d_tasks"},"name":"2d Tasks","type":"tool"},{"action":{"type":"link","path":"cat_consensus_tweaker"},"name":"Cat Consensus Tweaker","type":"tool"},{"action":{"type":"link","path":"2d_linting"},"name":"2D Linters","description":"Manage 2D linter configs.","type":"tool"},{"action":{"type":"link","path":"lidarlinting"},"name":"Lidar Linters","description":"Manage 3D lidar linter configs.","type":"tool"},{"action":{"type":"link","path":"lidarlitelinting"},"name":"Lidarlitelinting","type":"tool"},{"action":{"type":"link","path":"linter_config_docs"},"name":"Linter Config Docs","type":"tool"},{"action":{"type":"link","path":"scenario_dash"},"name":"Scenario Dash","description":"","type":"tool"},{"action":{"type":"link","path":"supply_lever_dash"},"name":"Supply Lever Dash","description":"","type":"tool"},{"action":{"type":"link","path":"qir_signal"},"name":"Qir Signal","type":"tool"},{"action":{"type":"link","path":"supply_project_metric_dash"},"name":"Supply Metrics Dash","description":"","type":"tool"},{"action":{"type":"link","path":"edit_corp_permission_roles"},"name":"Edit Corp Permission Roles","type":"tool"},{"action":{"type":"link","path":"contracts/contract_editor"},"name":"Contracts Contract Editor","type":"tool"},{"action":{"type":"link","path":"contracts/list_contracts"},"name":"Contracts List Contracts","type":"tool"},{"action":{"type":"link","path":"snowflake_status"},"name":"Snowflake Status","description":"Shows how far behind Snowflake is from the DB per object type.","type":"tool"},{"action":{"type":"link","path":"demos/pipeline_viewer"},"name":"Demos Pipeline Viewer","type":"tool"},{"action":{"type":"link","path":"explain"},"name":"Corp Explain","description":"","type":"tool"},{"action":{"type":"link","path":"allocation_explain"},"name":"Allocation Explain","type":"tool"},{"action":{"type":"link","path":"tasker_journey"},"name":"Tasker Journey Explain","type":"tool"},{"action":{"type":"link","path":"lidartasks"},"name":"Long Tasks: Lidar","description":"List of LiDAR tasks that contain information on individual LiDAR tasks","type":"tool"},{"action":{"type":"link","path":"teams"},"name":"Teams","type":"tool"},{"action":{"type":"link","path":"qm"},"name":"Qm","type":"tool"},{"action":{"type":"link","path":"qm_workflow"},"name":"Qm Workflow","type":"tool"},{"action":{"type":"link","path":"docmetrics"},"name":"Docmetrics","type":"tool"},{"action":{"type":"link","path":"jobs/all"},"name":"Jobs All","type":"tool"},{"action":{"type":"link","path":"jobs"},"name":"Jobs","type":"tool"},{"action":{"type":"link","path":"document/modelProjectConfiguration"},"name":"Document Modelprojectconfiguration","type":"tool"},{"action":{"type":"link","path":"document_ai_go_access_link"},"name":"Document Ai Go Access Link","type":"tool"},{"action":{"type":"link","path":"minilidar_create_subprojects"},"name":"Minilidar Create Subprojects","type":"tool"},{"action":{"type":"link","path":"guided_workflows/edit"},"name":"Guided Workflows Edit","type":"tool"},{"action":{"type":"link","path":"guided_workflows"},"name":"Guided Workflows","type":"tool"},{"action":{"type":"link","path":"queue_health_reporting"},"name":"Queue Health Reporting","type":"tool"},{"action":{"type":"link","path":"project_groups"},"name":"Project Groups","type":"tool"},{"action":{"type":"link","path":"qateams"},"name":"Qateams","type":"tool"},{"action":{"type":"link","path":"payout_jobs"},"name":"Payout Jobs","type":"tool"},{"action":{"type":"link","path":"pdp_qa_dashboard"},"name":"Pdp Qa Dashboard","type":"tool"},{"action":{"type":"link","path":"gis_task_pipeline_tool"},"name":"Gis Task Pipeline Tool","type":"tool"},{"action":{"type":"link","path":"hipaa"},"name":"Hipaa","type":"tool"},{"action":{"type":"link","path":"lidar_viz_dash"},"name":"Lidar Viz Dash","type":"tool"},{"action":{"type":"link","path":"production_monitoring"},"name":"Production Monitoring","type":"tool"},{"action":{"type":"link","path":"qar"},"name":"QAR: Queue Audit & Repair","description":"Queue Audit & Repair","type":"tool"},{"action":{"type":"link","path":"activity_tracker"},"name":"Activity Tracker","type":"tool"},{"action":{"type":"link","path":"progress_bar_demo"},"name":"Progress Bar Demo","type":"tool"},{"action":{"type":"link","path":"pipeline_special_actions"},"name":"Pipeline Special Actions","type":"tool"},{"action":{"type":"link","path":"global_map_viewer"},"name":"Global Map Viewer","type":"tool"},{"action":{"type":"link","path":"bpo/move_scalers"},"name":"Move Taskers","description":"Move taskers from one project to another.","type":"tool"},{"action":{"type":"link","path":"sla/index"},"name":"SLAs","description":"List of existing SLAs in the database","type":"tool"},{"action":{"type":"link","path":"sla/new"},"name":"Add SLA","description":"Add a new SLA into the database for project","type":"tool"},{"action":{"type":"link","path":"permissions/permissionsPage"},"name":"Onboarding Center Management","description":"Lists the permissions for taskers, according to the score for each permission.","type":"tool"},{"action":{"type":"link","path":"lidar_feedback"},"name":"Long Tasks: Needs Redo","description":"Tasks that need to be redone (lidar).","type":"tool"},{"action":{"type":"link","path":"videotasks"},"name":"Long Tasks: Video","description":"List of video tasks that contain information on individual video tasks.","type":"tool"},{"action":{"type":"link","path":"scalers/throttles"},"name":"Throttles","description":"View current throttles or add a new one.","type":"tool"},{"action":{"type":"link","path":"staffing"},"name":"Project Staffing","description":"View the attempter/reviewer list for a particular customer.","type":"tool"},{"action":{"type":"link","path":"bonuses/index"},"name":"Bonuses","description":"","type":"tool"},{"action":{"type":"link","path":"lidar"},"name":"Lidar Annotation Demo","description":"Play around with an already completed SemSeg LiDAR Task.","type":"demo"},{"action":{"type":"link","path":"nlp_demo"},"name":"NER Demo","description":"Play around with the NER (Named Entity Recognition) task type.","type":"demo"},{"action":{"type":"link","path":"dolphin_qa"},"name":"Dolphin QA","type":"tool"},{"action":{"type":"link","path":"signup-flow"},"name":"SignUp Flow","type":"tool"}]'
      );
    },
  },
]);
